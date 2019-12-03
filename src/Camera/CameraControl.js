let PigeonGLConstants = require("../constants.js");
let utils = require("../Utils/Utils.js");
/**
 * 相机控制类
 * @class
 * @param {object} map - 包含位置信息的地图对象
 * @param {object} camera - 相机对象
 * @param {object} world - 世界对象
 */

class CameraControl {
	constructor(map) {
		this.scope = map;
		this.map = map.map;
		this.camera = map.camera;
		this.active = true;
		this.world = map.world || new THREE.Group();
		this.world.position.x = this.world.position.y = 0;
		this.camera.matrixAutoUpdate = false;

		this.update();
	}
	/**
	* 更新地图参数，当this.map的参数发生变化时，需要执行该函数同步变化
	*/
	update(map) {
		this.map = Object.assign(this.map, map);
		this.initMapTransform();
		this.updateCamera();
	}

	/**
	 * 监听地图瓦片层的变化，并同步执行updateCamera()同步相机
	 */
	listenMapChange() {
		//更新地图对象
		this.update(this.map);
	}

	/**
	 * 重新初始化没有地图瓦片层时的位置参数
	 */
	initMapTransform() {
		let transform = {};
		transform.width = this.map.width;
		transform.height = this.map.height;
		transform.zHeight = this.map.zHeight || 0; //z轴凸起高度
		transform.x = this.map.center[0];
		transform.y = this.map.center[1];
		transform.z = this.map.center[2] || this.getZ(this.map.zoom);
		transform._pitch = (this.map.pitch * Math.PI) / 180 || 0;
		transform.angle = (this.map.rotation * Math.PI) / 180 || 0;
		this.map.transform = transform;
	}


	/**
	 * 获取地图放大倍数
	 * @param {number} zoom - 地图zoom
	 */
	getZ(zoom) {
		return zoom
	}

	/**
	 * 设置地图中心
	 * @param {Array} center - [lng,lat]
	 */
	setCenter(center) {
		this.map.center = center;
		this.initMapTransform();
	}

	/**
	 * 设置旋转角度
	 * @param {number} deg - 旋转的角度（！不是弧度）
	 */
	setRotation(rad) {
		this.map.rotation = rad;
		this.map.transform.angle = (this.map.rotation * Math.PI) / 180;
	}

	/**
	 * 设置旋转的俯角
	 * @param {number} deg - 俯视的角度
	 */
	setPitch(rad) {
		this.map.pitch = rad;
		this.map.transform._pitch = (this.map.pitch * Math.PI) / 180;
	}

	/**
	 * 更新相机位置，当map位置信息变化时执行
	 */
	updateCamera(ev) {
		let height = Math.abs(this.map.transform.z) + this.map.transform.zHeight;

		const fov = this.map.fov || 0.6435011087932844; //*2/Math.pow(this.map.zoom,2);
		let cameraToCenterDistance = height;
		const halfFov = fov / 2;
		const groundAngle = Math.PI / 2 + this.map.transform._pitch;
		const topHalfSurfaceDistance =
			(Math.sin(halfFov) * cameraToCenterDistance) /
			Math.sin(Math.PI - groundAngle - halfFov);

		const furthestDistance =
			Math.cos(Math.PI / 2 - this.map.transform._pitch) * topHalfSurfaceDistance +
			cameraToCenterDistance;

		const farZ = furthestDistance * 1.01;

		this.camera.projectionMatrix = utils.makePerspectiveMatrix(
			fov,
			this.map.transform.width / this.map.transform.height,
			1,
			farZ
		);

		let cameraWorldMatrix = new THREE.Matrix4();
		let cameraTranslateZ = new THREE.Matrix4().makeTranslation(0, 0, height);
		let cameraRotateX = new THREE.Matrix4().makeRotationX(this.map.transform._pitch);
		let cameraRotateZ = new THREE.Matrix4().makeRotationZ(this.map.transform.angle);

		cameraWorldMatrix
			.premultiply(cameraTranslateZ)
			.premultiply(cameraRotateX)
			.premultiply(cameraRotateZ);
		this.camera.matrixWorld.copy(cameraWorldMatrix);

		// this.camera.position.z = height;
		// this.camera.rotation.x = (this.map.transform._pitch);
		// this.camera.rotation.z = (this.map.transform.angle);
		// this.camera.rotateOnWorldAxis(new THREE.Vector3(1,0,0),this.map.transform._pitch);
		// this.camera.rotateOnWorldAxis ( new THREE.Vector3(0,0,1), this.map.transform.angle )
		//把整个地图挪到原点
		this.world.position.x = -this.map.transform.x;
		this.world.position.y = -this.map.transform.y;
	}
}

export default CameraControl;
