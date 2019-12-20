let PigeonGLConstants = require("./constants.js");
import CameraControl from "./Camera/CameraControl.js";
import Layer from "./Layers/Layer.js";

/**
 * 信鸽地图地图核心类，用于生成3d空间地图底层
 */
class Map extends Layer {
	_layerid = 0;
	zIndex = 1000;
	status = "running";
	type = "gps";
	layers = [];
	/**
	 * 地图构造函数
	 * @constructor
	 * @param {Object} map - 地图绘制对象,目前支持高德,mapbox或者纯空间
	 * @param {Number} map.width - 地图宽度, default:1000
	 * @param {Number} map.height - 地图高度, default:600
	 * @param {Number} map.rotation - 地图旋转角度, default:60
	 * @param {Number} map.pitch - 地图俯视角度, default:45
	 * @param {Array} map.center - 地图默认中心位置经纬度, default:[0,0]
	 * @param {Number} map.zoom - 地图缩放级别,default:21
	 * @param {dom} map.container - 容器dom
	 */
	constructor(map) {
		super();
		this.clock = new THREE.Clock();
		this.clock.start();
		this.initMap(map);
		this.initWorld();
		if (this.map.hasGround) {
			this.addGround();
		}
		this.update();
	}

	initMap(map) {
		this.map = Object.assign(
			{
				rotation: 0,
				width: 1000,
				height: 600,
				pitch: 45,
				zoom: 21,
				center: [0, 0]
			},
			map
		);
	}

	initWorld() {
		// Set up a THREE.js scene
		this.renderer = new THREE.WebGLRenderer(
			Object.assign({ alpha: true, antialias: true }, this.map.rendererOptions)
		);
		this.renderer.setSize(this.map.width, this.map.height);

		this.map.container.appendChild(this.renderer.domElement);
		this.renderer.domElement.style["position"] = "relative";
		this.renderer.domElement.style["pointer-events"] = "none";
		this.renderer.domElement.style["z-index"] = ++this.zIndex;

		/**
		 * @property {Object} scene - this.scene为three.js场景
		 */
		this.scene = new THREE.Scene(Object.assign({}, this.map.sceneOptions || {}));

		/**
		 * @property {Object} camera - this.camera.js场景
		 */
		this.camera = new THREE.PerspectiveCamera(
			45,
			this.map.width / this.map.height,
			0.000001,
			5000000000
		);

		/**
		 * @property {Object} layers - 图层集合
		 */
		this.layers = [];

		/**
		 * @property {Object} world - this.world为世界模型组，所有模型被添加到该组内
		 */
		this.world = new THREE.Group();

		this.scene.add(this.world);

		this.camera.position.z = 10;
		this.camera.position.x = this.map.center[0];
		this.camera.position.y = this.map.center[1];

		/**
		 * @property {CameraControl} cameraControl - 摄像机控制类
		 */
		this.cameraControl = new CameraControl(this);
	}

	moveTo(obj, coord, options = {}) {
		let scale = options.preScale;
		let geoGroup;
		if (obj.userData.isGeoGroup) geoGroup = obj;
		else if (obj.parent && obj.parent.userData.isGeoGroup) geoGroup = obj.parent;
		geoGroup.scale.copy(scale || 1);
		geoGroup.position.copy(this.projectToWorld(coord));
		obj.coordinates = coord;
		return obj;
	}

	/**
	 * 自动刷新渲染，可以改变this.status=='top',停止自动刷新
	 * @parma {Number} delta - 每帧时间差，用来保持不同机器动画速度相同,用不到不必搭理
	 */
	update() {
		let delta = this.clock.getDelta();
		//子layer更新
		for (let x in this.layers) {
			if (this.layers[x].update) {
				this.layers[x].update(delta);
			}
		}
		this.renderer.render(this.scene, this.camera);

		let device;
		// if ((device = this.renderer.vr.getDevice())) {
		// 	this.animationframe = device.requestAnimationFrame((timestamp) => {
		// 		if (this.status != "stop") this.update(delta, timestamp);
		// 	});
		// 	return;
		// }

		this.animationframe = requestAnimationFrame((timestamp) => {
			if (this.status != "stop") this.update(delta, timestamp);
		});
	}

	projectToWorld(coord) {
		return {
			x: coord[0],
			y: coord[1],
			z: coord[2] || 0
		};
	}

	unprojectFromWorld(world) {
		return [world.x, world.y, world.z];
	}



	/**
	 * 经纬度转换屏幕坐标
	 * @param {Array} coords - 经纬度 [lng,lat]
	 * @return {Object} position - 返回距离容器左上角的距离 {x,y}
	 */
	projectToScreen(param) {
		let coords = Object.assign({}, param);
		coords[1] = -coords[1];
		let world = this.projectToWorld(coords);
		let worldPosition = this.world.getWorldPosition().clone();
		let standarVector = worldPosition.add(world).project(this.camera); //世界坐标转设备坐标
		let a = this.map.width / 2;
		let b = this.map.height / 2;
		let x = Math.round(standarVector.x * a + a); //标准设备坐标转屏幕坐标
		let y = this.map.height - Math.round(standarVector.y * b + b); //标准设备坐标转屏幕坐标
		return {
			x: x,
			y: y
		};
	}

	/**
	 * 屏幕坐标转转经纬度
	 * @param {Object} pixel - 屏幕坐标 {x,y}
	 * @return {Array} coord - [x,y]
	 */
	unprojectFromScreen(pixel) {
		let a = this.map.width / 2;
		let b = this.map.height / 2;
		let standX = -(pixel.x - a) / a;
		let standY = (this.map.height - pixel.y - b) / b;
		let standarVector = new THREE.Vector3(standX, standY, 0);
		let world = standarVector.unproject(this.camera);
		let worldPosition = this.world.getWorldPosition().clone();
		let coord = this.unprojectFromWorld(world.sub(worldPosition));
		coord[1] = -coord[1];
		return coord;
	}

	/**
	 * 添加物体到3d空间
	 * @param {Object} obj - Three.js的mesh
	 * @param {coord} Array - 物体的经纬度 {lng,lat}
	 * @param {Object} options - 配置
	 * @param {Boolean} options.scaleToLatitude - 是否按照1px = 1m的比例进行缩放 默认true
	 * @param {Number} options.preScale - 改变像素到米的换算比例 默认1
	 * @return {Object} obj -物体mesh
	 */
	add(obj, coord, options) {
		let geoGroup = new THREE.Group();
		geoGroup.userData.isGeoGroup = true;
		geoGroup.add(obj);
		this.world.add(geoGroup);
		this.moveTo(obj, coord, options);
		return obj;
	}

	/**
	 * 添加默认地面
	 */
	addGround() {
		let geometry = new THREE.PlaneGeometry(
			PigeonGLConstants.WORLD_SIZE,
			PigeonGLConstants.WORLD_SIZE
		);
		let material = new THREE.MeshPhongMaterial({
			color: this.map.groundColor || 0x666666,
			shininess: 30
		});
		let plane = new THREE.Mesh(geometry, material);
		// plane.position.x = plane.position.y = - PigeonGLConstants.WORLD_SIZE/2;
		plane.position.z = -0.01;
		this.add(plane, this.map.center, { scaleToLatitude: true, preScale: 100 });
	}


	/**
	 * 移除物体mesh
	 * @param {Object} obj - mesh
	 */
	remove(obj) {
		this.world.remove(obj);
	}

	/**
	 * 设置默认光源
	 */
	setupDefaultLights() {
		this.scene.add(new THREE.AmbientLight(0xcccccc));
		let sunlight = new THREE.DirectionalLight(0xffffff, 0.5);
		sunlight.position.set(0, 800, 1000);
		sunlight.matrixWorldNeedsUpdate = true;
		this.sunlight = sunlight;
		this.world.add(sunlight);
	}
}

export default Map;
