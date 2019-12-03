import Layer from './Layer.js';

/**
 * 地图控制类
 * @class
 * @extends Layer
 */
class MapControl extends Layer {

	defaultParams = {
		zoomBase: 600,
		moveSpeed: 1,
		pitchSpeed: 0.1,
		rotateSpeed: 0.15,
	}

	/**
	 * 构造函数
	 * @param {Object} config - config
	 * @param {number} config.moveSpeed - 移动速度
	 * @param {number} config.pitchSpeed - 角度改变速度
	 * @param {number} config.rotateSpeed - 旋转速度
	 */
	constructor(config) {
		super(config);
		for (var x in this.defaultParams) {
			if (typeof (this[x]) == "undefined") {
				this[x] = this.defaultParams[x];
			}
		}
	}

	onAdd(map) {
		var _this = this;
		this.pigeonMap = map;
		this.map = this.pigeonMap.map;//用户配置或真实地图
		this.cameraControl = this.pigeonMap.cameraControl;
		this.initConfig();
		this.listenEvents();
		//添加相机更新函数
		this.on("change", function () {
			_this.pigeonMap.fire("change")
			_this.cameraControl.update();//更新用户参数为相机参数
		})
	}

	initConfig() {

	};

    /**
     * 监听事件
     */
	listenEvents() {
		this.onDown = (event) => {
			if (event.button == 0) {//左键
				this.mouseStatus = 'left'
			} else if (event.button == 2) {//右键
				this.mouseStatus = 'right'
			}
			this.mouseDownPosition = {
				x: event.clientX,
				y: event.clientY
			}
			this.map.container.addEventListener('mousemove', this.onMove)
		}
		this.onUp = (event) => {
			this.mouseStatus = false;
			this.map.container.removeEventListener('mousemove', this.onMove)
		}
		this.onMove = (event) => {
			if (!this.mouseStatus) {
				return;
			}
			if (this.mouseStatus == 'left') {
				let yDis = event.clientY - this.mouseDownPosition.y;
				let xDis = event.clientX - this.mouseDownPosition.x;
				let distance = Math.sqrt(Math.pow(xDis, 2) + Math.pow(yDis, 2));
				if (distance < 0.1) return false;
				let rotation = (xDis > 0 ? -1 : 1) * Math.asin(yDis / distance) + this.map.transform.angle;
				let ratio = this.moveSpeed * (this.map.zoom / (this.zoomBase + this.map.zoom));
				this.map.center[0] += (xDis > 0 ? -1 : 1) * (distance * Math.cos(rotation)) * ratio;
				this.map.center[1] += (xDis > 0 ? -1 : 1) * (distance * Math.sin(rotation)) * ratio;
				this.cameraControl.update();
                /**
                 * 地图移动
                 * @event MapControl#move 
                 * @property {Object} event
                 */
				this.fire("move", event)//地图移动
				this.fire("change", event)

			} else if (this.mouseStatus == 'right') {
				this.map.pitch += this.pitchSpeed * (event.clientY - this.mouseDownPosition.y);
				if (this.map.pitch > 90) {
					this.map.pitch = 90;
				} else if (this.map.pitch < 0) {
					this.map.pitch = 0;
				}
				this.map.rotation -= this.rotateSpeed * (event.clientX - this.mouseDownPosition.x);
				this.cameraControl.update();
                /**
                 * 地图旋转
                 * @event MapControl#rotate
                 * @property {Object} event 
                 */
				this.fire("rotate", event)//地图x旋转
				this.fire("change", event)

			}

			this.mouseDownPosition = {
				x: event.clientX,
				y: event.clientY
			}
		}
		this.onWheel = (event) => {
			this.map.zoom -= event.deltaY * this.map.zoom / this.zoomBase;
			if (this.map.zoom < 5) return this.map.zoom = 5;
			this.cameraControl.update();
			event.preventDefault();
            /**
             * 地图缩放
             * @event MapControl#zoom
             * @property {Object} event - 原生event对象
             */
			this.fire("zoom", event)//地图缩放

            /**
             * 地图状态发生改变，发生操作时触发
             * @event MapControl#change
             * @property {Object} event - 原生event对象
             */
			this.fire("change", event)
		}
		this.onContextmenu = function onContextmenu(e) {
			e.preventDefault();
			e.stopPropagation();
		}
		this.map.container.addEventListener('mousedown', this.onDown)
		this.map.container.addEventListener('mouseup', this.onUp)
		this.map.container.addEventListener('mousemove', this.onMove)
		this.map.container.addEventListener('wheel', this.onWheel)
		this.map.container.addEventListener('contextmenu', this.onContextmenu)

	};

    /**
     * 移除所有监听事件
     */
	removeListenr() {
		this.map.container.removeEventListener('mousedown', this.onDown)
		this.map.container.removeEventListener('mouseup', this.onUp)
		this.map.container.removeEventListener('mousemove', this.onMove)
		this.map.container.removeEventListener('wheel', this.onWheel)
		this.map.container.removeEventListener('contextmenu', this.onContextmenu)
	}

}
export default MapControl;