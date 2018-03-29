var utils = require("../Utils/Utils.js");
var PigeonGLConstants = require("../constants.js");

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
    this.active = true;
    this.camera.matrixAutoUpdate = false;   // We're in charge of the camera now!
    // Postion and configure the world group so we can scale it appropriately when the camera zooms
    this.world = map.world || new THREE.Group();
    this.world.position.x = this.world.position.y = PigeonGLConstants.WORLD_SIZE/2
    this.world.matrixAutoUpdate = false;

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
        if(this.map.MAP_TYPE=='mapbox'){
            this.updateCamera();
        }else if(this.map.MAP_TYPE=='amap'){
            this.syncAmap();
            this.updateAmapCamera();
        }else if(this.map.MAP_TYPE=='none'){
            _this.initMapTransform();
            _this.updateCamera();
        }
    },

    /**
     * 监听地图瓦片层的变化，并同步执行updateCamera()同步相机
     */
    listenMapChange(){
        var _this = this;
        //更新地图对象
        this.updateMap(this.map);
        //监听事件
        if(this.map.MAP_TYPE=='mapbox'){
            this.map.on('move', function() { _this.updateCamera(); });
        }else if(this.map.MAP_TYPE=='amap'){
            let container = this.map.getContainer();
            container.addEventListener('mousemove', function() { _this.updateMap(); });
        }else if(this.map.MAP_TYPE=='none'){
        //无事件操作
            
        }
    },

    /**
     * 更新amap
     */
    syncAmap(){
        var transform = {};
        var config = this.map;
        var container = this.map.getContainer();
        var center = this.map.getCenter();
        var zoom = this.map.getZoom();
        var pitch = this.map.getPitch();
        var rotation = this.map.getRotation();
        transform.width = container.clientWidth;
        transform.height = container.clientHeight;
        transform.x = this.lngX(center['L'],zoom);
        transform.y = this.latY(center['N'],zoom);
        transform.scale = this.getScale(zoom);
        transform._pitch = (pitch*Math.PI/180)||0;
        transform.angle = (rotation*Math.PI/180)||0;
        this.map.transform = transform;
        this.map.fov = Math.PI/20;
    },

    /**
     * 重新初始化没有地图瓦片层时的位置参数
     */
    initMapTransform(){
        var transform = {};
        var config = this.map;
        transform.width = this.map.width;
        transform.height = this.map.height;
        transform.x = this.lngX(this.map.center[0],this.map.zoom);
        transform.y = this.latY(this.map.center[1],this.map.zoom);
        transform.scale = this.getScale(this.map.zoom);
        transform._pitch = (this.map.pitch*Math.PI/180)||0;
        transform.angle = (this.map.rotation*Math.PI/180)||0;
        this.map.transform = transform;
    },
    
    /**
     * 计算地图中心的x值
     */
    lngX(lng,zoom) {
        return (180 + lng) * this.getWorldSize(zoom)/ 360;
    },
     /**
     * 计算地图中心的y值
     */
    latY(lat,zoom) {
        const y = 180 / Math.PI * Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360));
        return (180 - y) * this.getWorldSize(zoom) / 360;
    },
    
    /**
     * 获取地图应该被放大到的尺寸
     */
    getWorldSize(zoom){
        return PigeonGLConstants.WORLD_SIZE * this.getScale(zoom);
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
        if(this.map.MAP_TYPE=='mapbox'){
            this.map.setCenter(center)
        }else if(this.map.MAP_TYPE=='amap'){
           this.map.setCenter(center)
        }else if(this.map.MAP_TYPE=='none'){
            this.map.center = center;
            _this.initMapTransform();
        }
    },

    /**
     * 设置旋转角度
     * @param {number} deg - 旋转的角度（！不是弧度）
     */
    setRotation(rad){
        var _this = this;
        this.map.rotation = rad;
        if(this.map.MAP_TYPE=='mapbox'){
            this.map.setRotation(center)
        }else if(this.map.MAP_TYPE=='amap'){
           this.map.setRotation(center)
        }else if(this.map.MAP_TYPE=='none'){
            this.map.transform.angle = this.map.rotation*Math.PI/180;
        }
    },

    /**
     * 设置旋转的俯角
     * @param {number} deg - 俯视的角度
     */
    setPitch(rad){
        var _this = this;
        this.map.pitch = rad;
        this.map.rotation = rad;
        if(this.map.MAP_TYPE=='mapbox'){
            this.map.setPitch(rad)
        }else if(this.map.MAP_TYPE=='amap'){
           this.map.setPitch(rad)
        }else if(this.map.MAP_TYPE=='none'){
            this.map.transform._pitch = this.map.pitch*Math.PI/180;
        }
    },
  
    /**
     * 更新相机位置，当map位置信息变化时执行
     */
    updateCamera: function(ev) {
        if(!this.camera) {
            console.log('nocamera')
            return;
        }
        // Build a projection matrix, paralleling the code found in Mapbox GL JS
        const fov = this.map.fov||0.6435011087932844;//*2/Math.pow(this.map.zoom,2);
        var cameraToCenterDistance = 0.5 / Math.tan(fov / 2) * this.map.transform.height;
        const halfFov = fov / 2;
        const groundAngle = Math.PI / 2 + this.map.transform._pitch;
        const topHalfSurfaceDistance = Math.sin(halfFov) * cameraToCenterDistance / Math.sin(Math.PI - groundAngle - halfFov);

        // Calculate z distance of the farthest fragment that should be rendered.
        const furthestDistance = Math.cos(Math.PI / 2 - this.map.transform._pitch) * topHalfSurfaceDistance + cameraToCenterDistance;

        // Add a bit extra to avoid precision problems when a fragment's distance is exactly `furthestDistance`
        const farZ = furthestDistance * 1.01;

        this.camera.far = farZ;
        this.camera.fov = fov;
        this.camera.position.z = cameraToCenterDistance;
        this.camera.rotation.z = this.map.transform.angle;
        this.camera.rotation.x = this.map.transform._pitch;
        
        this.camera.projectionMatrix = utils.makePerspectiveMatrix(fov, this.map.transform.width / this.map.transform.height, 1, farZ);
        
        var cameraWorldMatrix = new THREE.Matrix4();
        var cameraTranslateZ = new THREE.Matrix4().makeTranslation(0,0,cameraToCenterDistance);
        var cameraRotateX = new THREE.Matrix4().makeRotationX(this.map.transform._pitch);
        var cameraRotateZ = new THREE.Matrix4().makeRotationZ(this.map.transform.angle);

        // Unlike the Mapbox GL JS camera, separate camera translation and rotation out into its world matrix
        // If this is applied directly to the projection matrix, it will work OK but break raycasting
        cameraWorldMatrix
            .premultiply(cameraTranslateZ)
            .premultiply(cameraRotateX)
            .premultiply(cameraRotateZ)
            ;            

        this.camera.matrixWorld.copy(cameraWorldMatrix);


        var zoomPow =  this.map.transform.scale; 
        // Handle scaling and translation of objects in the map in the world's matrix transform, not the camera
        var scale = new THREE.Matrix4;
        var translateCenter = new THREE.Matrix4;
        var translateMap = new THREE.Matrix4;
        var rotateMap = new THREE.Matrix4;

        scale.makeScale(zoomPow, zoomPow , zoomPow );
        translateCenter.makeTranslation(PigeonGLConstants.WORLD_SIZE/2, -PigeonGLConstants.WORLD_SIZE / 2, 0);
        translateMap.makeTranslation(-this.map.transform.x, this.map.transform.y , 0);
        rotateMap.makeRotationZ(Math.PI);
        this.world.matrix = new THREE.Matrix4;
        var worldTranslateZ = new THREE.Matrix4().makeTranslation(0,0,-cameraToCenterDistance);
        this.world.matrix
            // .premultiply(worldTranslateZ)
            .premultiply(rotateMap)
            .premultiply(translateCenter)
            .premultiply(scale)
            .premultiply(translateMap)

        
        utils.prettyPrintMatrix(this.camera.projectionMatrix.elements);
    },


     /**
     * 更新相机位置，当map位置信息变化时执行
     */
    updateAmapCamera: function(ev) {
        
        // Build a projection matrix, paralleling the code found in Mapbox GL JS
        const fov = this.map.fov||0.6435011087932844;//*2/Math.pow(this.map.zoom,2);
        var cameraToCenterDistance = 0.5 / Math.tan(fov / 2) * this.map.transform.height;
        const halfFov = fov / 2;
        const groundAngle = Math.PI / 2 + this.map.transform._pitch;
        const topHalfSurfaceDistance = Math.sin(halfFov) * cameraToCenterDistance / Math.sin(Math.PI - groundAngle - halfFov);

        // Calculate z distance of the farthest fragment that should be rendered.
        const furthestDistance = Math.cos(Math.PI / 2 - this.map.transform._pitch) * topHalfSurfaceDistance + cameraToCenterDistance;

        // Add a bit extra to avoid precision problems when a fragment's distance is exactly `furthestDistance`
        const farZ = furthestDistance * 1.01;

        // this.camera.updateProjectionMatrix();
        this.camera.projectionMatrix = utils.makePerspectiveMatrix(fov, this.map.transform.width / this.map.transform.height, 1, farZ);
        var cameraWorldMatrix = new THREE.Matrix4();
        var cameraTranslateZ = new THREE.Matrix4().makeTranslation(0,0,cameraToCenterDistance);
        var cameraRotateX = new THREE.Matrix4().makeRotationX(this.map.transform._pitch);
        var cameraRotateZ = new THREE.Matrix4().makeRotationZ(this.map.transform.angle);
        this.camera.position.z = cameraTranslateZ;
        // Unlike the Mapbox GL JS camera, separate camera translation and rotation out into its world matrix
        // If this is applied directly to the projection matrix, it will work OK but break raycasting
        cameraWorldMatrix
            .premultiply(cameraTranslateZ)
             .premultiply(cameraRotateX) //放哪没差别，都要最后乘一遍
            .premultiply(cameraRotateZ)
            ;            

        this.camera.matrixWorld.copy(cameraWorldMatrix);


        var zoomPow =  this.map.transform.scale; 
        // Handle scaling and translation of objects in the map in the world's matrix transform, not the camera
        var scale = new THREE.Matrix4;
        var translateCenter = new THREE.Matrix4;
        var translateMap = new THREE.Matrix4;
        var rotateMap = new THREE.Matrix4;

        scale.makeScale(zoomPow, zoomPow , zoomPow );
        translateCenter.makeTranslation(PigeonGLConstants.WORLD_SIZE/2, -PigeonGLConstants.WORLD_SIZE / 2, 0);
        translateMap.makeTranslation(-this.map.transform.x, this.map.transform.y , 0);
        rotateMap.makeRotationZ(Math.PI);
        this.world.matrix = new THREE.Matrix4;
        this.world.matrix
            .premultiply(rotateMap)
           
            .premultiply(translateCenter)
            .premultiply(scale)
            .premultiply(translateMap)

        
        // utils.prettyPrintMatrix(this.camera.projectionMatrix.elements);
    },

}

module.exports = exports = CameraControl;