var utils = require("../Utils/Utils.js");
var PigeonGLConstants = require("../constants.js");
require("../lib/OrbitControls.js");
/**
 * 相机控制类
 * @class
 * @param {object} map - 包含位置信息的地图对象
 * @param {object} camera - 相机对象
 * @param {object} world - 世界对象
 */
function CameraControl(map) {
    this.scope = map;
    this.map = map.map;
    this.camera = map.camera;
    this.camera.lookAt(0,0,0)
    this.active = true;
    // Postion and configure the world group so we can scale it appropriately when the camera zooms
    this.world = map.world || new THREE.Group();
    this.world.position.x = this.world.position.y = 0;

    // Listen for move events from the map and update the Three.js camera
    var _this = this;
    this.listenMapChange();
}

CameraControl.prototype = {
    /**d
     * 更新地图参数，当this.map的参数发生变化时，需要执行该函数同步变化
     */
    updateMap(map){
        this.map = Object.assign(this.map,map);
        var _this = this;
        _this.initMapTransform();
        _this.updateCamera();
    },

    /**
     * 监听地图瓦片层的变化，并同步执行updateCamera()同步相机
     */
    listenMapChange(){
        var _this = this;
        //更新地图对象
        this.updateMap(this.map);
    },

    /**
     * 重新初始化没有地图瓦片层时的位置参数
     */
    initMapTransform(){
        var transform = {};
        var config = this.map;
        transform.width = this.map.width;
        transform.height = this.map.height;
        transform.zHeight = this.map.zHeight||0;//z轴凸起高度
        transform.x = this.map.center[0];
        transform.y = this.map.center[1];
        transform.scale = this.getScale(this.map.zoom);
        transform.z = this.map.center[2]||this.getZ(transform.scale);
        transform._pitch = (this.map.pitch*Math.PI/180)||0;
        transform.angle = (this.map.rotation*Math.PI/180)||0;
        this.map.transform = transform;
    },

    getZ(scale){
        return PigeonGLConstants.MERCATOR_A/scale
    },

    /**
     * 获取地图放大倍数
     * @param {number} zoom - 地图zoom
     */
    getScale(zoom){
        return Math.pow(2,zoom - PigeonGLConstants.WORLD_SIZE_RATIO||1);
    },

    /**
     * 设置地图中心
     * @param {Array} center - [lng,lat]
     */
    setCenter(center){
         var _this = this;
        this.map.center = center;
        _this.initMapTransform();
    },

    /**
     * 设置旋转角度
     * @param {number} deg - 旋转的角度（！不是弧度）
     */
    setRotation(rad){
        var _this = this;
        this.map.rotation = rad;
        this.map.transform.angle = this.map.rotation*Math.PI/180;
    },

    /**
     * 设置旋转的俯角
     * @param {number} deg - 俯视的角度
     */
    setPitch(rad){
        var _this = this;
        this.map.pitch = rad;
        this.map.transform._pitch = this.map.pitch*Math.PI/180;
    },
  
    /**
     * 更新相机位置，当map位置信息变化时执行
     */
    updateCamera: function(ev) {
        let height = Math.abs(this.map.transform.z * Math.cos(this.map.transform._pitch) ) + this.map.transform.zHeight;
        let radius = this.map.transform.z * Math.sin(this.map.transform._pitch);
        let x = radius*Math.sin(this.map.transform.angle);
        let y = -radius*Math.cos(this.map.transform.angle);
        this.camera.position.z = height;
        this.camera.position.x = x;
        this.camera.position.y = y;
        this.camera.rotation.x = this.map.transform._pitch;
        this.camera.rotation.y = 0;
        this.camera.rotation.z = -this.map.transform.angle;
        // this.camera.position.z = this.map.transform.z;
        // this.camera.position.x = 0 ;
        // this.camera.position.y = 0 ;
        // this.camera.rotation.x = 0 ;
        // this.camera.rotation.y = 0 ;
        // this.camera.rotation.z = 0 ;
        // this.camera.rotateOnWorldAxis(new THREE.Vector3(1,0,0),this.map.transform._pitch);
        // this.camera.rotateOnWorldAxis ( new THREE.Vector3(0,0,1), this.map.transform.angle )
        //把整个地图挪到原点
        this.world.position.x = -this.map.transform.x;
        this.world.position.y = -this.map.transform.y;
        // this.world.rotation.x = -this.map.transform._pitch;
        // this.world.rotation.z = -this.map.transform.angle;
    }

}

module.exports = exports = CameraControl;