var PigeonGLConstants = require("./constants.js");
var CameraControl = require("./Camera/CameraControl.js");
var utils = require("./Utils/Utils.js");
var Layer = require("./Layers/Layer.js");

/**
 * 信鸽地图地图核心类，用于生成3d空间地图底层
 */
class Map extends Layer{
    _layerid=0;
    zIndex=1000;
    status="running";
    type='gps';
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
     */
    constructor(map){
        super();
        this.clock = new THREE.Clock();
        this.clock.start();
        this.initMap(map);
        this.initWorld(); 
        if(this.map.hasGround){
            this.addGround()
        }
        this.update();
    };

    initWorld(){
         // Set up a THREE.js scene
        this.renderer = new THREE.WebGLRenderer( Object.assign({ alpha: true, antialias:true},this.map.rendererOptions ));
        this.renderer.setSize( this.map.width, this.map.height );

        this.map.container.appendChild( this.renderer.domElement );
        this.renderer.domElement.style["position"] = "relative";
        this.renderer.domElement.style["pointer-events"] = "none";
        this.renderer.domElement.style["z-index"] = ++this.zIndex;
        //this.renderer.domElement.style["transform"] = "scale(1,-1)";

        var _this = this;

         /**
         * @property {Object} scene - this.scene为three.js场景
         */
        this.scene = new THREE.Scene(Object.assign({

        }, this.map.sceneOptions||{}));

         /**
         * @property {Object} camera - this.camera.js场景
         */
        this.camera = new THREE.PerspectiveCamera( 28, this.map.width / this.map.height, 0.000001, 5000000000);
        
        /**
         * @property {Object} layers - 图层集合
         */
        this.layers = [];

        // The CameraSync object will keep the Mapbox and THREE.js camera movements in sync.
        // It requires a world group to scale as we zoom in. Rotation is handled in the camera's
        // projection matrix itself (as is field of view and near/far clipping)
        // It automatically registers to listen for move events on the map so we don't need to do that here
        /**
         * @property {Object} world - this.world为世界模型组，所有模型被添加到该组内
         */
        this.world = new THREE.Group();
       
        this.scene.add(this.world);

        /**
         * @property {CameraControl} cameraControl - 摄像机控制类
         */
        this.cameraControl = new CameraControl(this);

    }

    initMap(map){
       
        //mapbox
        if(map.transform){
            this.map = map;
            this.map.MAP_TYPE = 'mapbox';
            this.map.width = this.map.transform.width;
            this.map.height = this.map.transform.height;
            this.map.container = this.map._container;
            this.map.on("resize", function() { _this.renderer.setSize(_this.map.width, _this.map.height); } );
        }else if(map.poiOnAMAP){//amap
            this.map = map;
            this.map.MAP_TYPE = 'amap';
            this.map.container = this.map.getContainer();
            this.map.width = this.map.container.clientWidth;
            this.map.height = this.map.container.clientHeight;
            this.map.on("resize", function() { _this.renderer.setSize(_this.map.width, _this.map.height); } );
        }else{
            /**
             * @property {Object} map - map对象，包含map的位置信息等，如果是高德或mapbox则为地图对象
             * 默认值为  
             * rotation:0,
                width:1000,
                height:600,
                pitch:45,
                zoom:21,
                center:[0,0]    
             */
            this.map = Object.assign({
                rotation:0,
                width:1000,
                height:600,
                pitch:45,
                zoom:21,
                center:[0,0]    
            },map);
            this.map.MAP_TYPE = 'none';
        }
    }

    /**
     * 自动刷新渲染，可以改变this.status=='top',停止自动刷新
     * @parma {Number} delta - 每帧时间差，用来保持不同机器动画速度相同,用不到不必搭理
     */
    update(delta) {
        // Update any animations
        //this.animationManager.update(timestamp);
        var delta = this.clock.getDelta();
        //子layer更新
        for(var x in this.layers){
            if(this.layers[x].update){
                this.layers[x].update(delta)
            }
        }
        // Render the scene
        this.renderer.render( this.scene, this.camera );

        // Run this again next frame
        var thisthis = this;
        let device;
        if(device = this.renderer.vr.getDevice()){
            device.requestAnimationFrame(function(timestamp) { if(thisthis.status!='stop')thisthis.update(delta); } );
            return;
        }
        requestAnimationFrame(function(timestamp) { if(thisthis.status!='stop')thisthis.update(delta); } );
    }

    /**
     * 添加图层
     * @param {Layer} layer - 图层
     */
    addLayer(layer){
        layer.id = ++this._layerid;
        this.layers.push(layer);
        layer.onAdd(this);//初始化layer
    }

    /**
     * 删除图层
     * @param {Layer} layer - 图层
     */
    removeLayer(layer){
         for(var x in this.layers){
            if(this.layers[x].id==layer.id){
                this.layers[x].onRemove();
                this.layers.splice(x,1);
                return;
            }
        }
    }

    //兼容utm模式
    setProjectType(type){
        this.type = type;
        this.cameraControl.type = type;
    }

    /**
     * 投影到3d坐标系
     * @param {Array} coords - 经纬度 [lng,lat],经度在前，纬度在后
     * @return {Object} Vecotor3 - 
     */
    projectToWorld(coords){
        if(this.type=='utm'){
            return this.projectUTMToWorld(coords)
        }
        // web mercator forward projection, re-scaling to WORLD_SIZE
        var projected = [
            -PigeonGLConstants.MERCATOR_A * coords[0] * PigeonGLConstants.DEG2RAD * PigeonGLConstants.PROJECTION_WORLD_SIZE,
            -PigeonGLConstants.MERCATOR_A * Math.log(Math.tan((Math.PI*0.25) + (0.5 * coords[1] * PigeonGLConstants.DEG2RAD))) * PigeonGLConstants.PROJECTION_WORLD_SIZE
        ];
     
        var pixelsPerMeter = this.projectedUnitsPerMeter(coords[1]);

        //z dimension
        var height = coords[2] || 0;
        projected.push( height * pixelsPerMeter );

        var result = new THREE.Vector3(projected[0], projected[1], projected[2]);

        return result;
    }

    projectUTMToWorld(coord){
        return coord;
    }

    /**
     * 获取该维度的1m缩放比例
     * @param {Number} latitude - 纬度
     */
    projectedUnitsPerMeter(latitude) {
        return Math.abs(PigeonGLConstants.WORLD_SIZE * (1 / Math.cos(latitude*Math.PI/180))/PigeonGLConstants.EARTH_CIRCUMFERENCE);
    }
    _scaleVerticesToMeters(centerLatLng, vertices) {
        var pixelsPerMeter = this.projectedUnitsPerMeter(centerLatLng[1]);
        var centerProjected = this.projectToWorld(centerLatLng);

        for (var i = 0; i < vertices.length; i++) {
            vertices[i].multiplyScalar(pixelsPerMeter);
        }

        return vertices;
    }

    /**
     * 经纬度转换屏幕坐标
     * @param {Array} coords - 经纬度 [lng,lat]
     * @return {Object} position - 返回距离容器左上角的距离 {x,y}
     */
    projectToScreen(param) {
        let coords = Object.assign({},param);
        coords[1] = -coords[1];
        var world = this.projectToWorld(coords);
        var worldPosition = this.world.getWorldPosition().clone()
        var standarVector = worldPosition.add(world).project(this.camera);//世界坐标转设备坐标
        var scale = this.map.transform.scale;
        var a = this.map.width / 2;
        var b = this.map.height / 2;
        var x = Math.round(standarVector.x * a + a);//标准设备坐标转屏幕坐标
        var y = this.map.height - Math.round(standarVector.y * b + b);//标准设备坐标转屏幕坐标
        return {
            x:x,
            y:y
        }
    }

    /**
     * 屏幕坐标转转经纬度
     * @param {Object} pixel - 屏幕坐标 {x,y}
     * @return {Array} lnglat - [lng,lat]
     */
    unprojectFromScreen(pixel) {
        var a = this.map.width / 2;
        var b = this.map.height / 2;
        var standX = -(pixel.x - a)/a;
        var standY = ( (this.map.height - pixel.y) - b)/b;
        var scale = this.map.transform.scale;
        var standarVector = new THREE.Vector3(standX,standY,0);
        var world = standarVector.unproject(this.camera);
        var worldPosition = this.world.getWorldPosition().clone()
        var lnglat = this.unprojectFromWorld(world.sub(worldPosition));
        lnglat[1] = - lnglat[1];
        return lnglat;
    }

    /**
     * 世界坐标转经纬度
     * @param {Object} xyz - 世界坐标 {x,y,z}
     * @return {Array} lnglat - [lng,lat]
     */
    unprojectFromWorld(pixel) {
        var unprojected = [
            -pixel.x / (PigeonGLConstants.MERCATOR_A * PigeonGLConstants.DEG2RAD * PigeonGLConstants.PROJECTION_WORLD_SIZE),
            2*(Math.atan(Math.exp(pixel.y/(PigeonGLConstants.PROJECTION_WORLD_SIZE*(-PigeonGLConstants.MERCATOR_A))))-Math.PI/4)/PigeonGLConstants.DEG2RAD
        ];
        var pixelsPerMeter = this.projectedUnitsPerMeter(unprojected[1]);

        //z dimension
        var height = pixel.z || 0;
        unprojected.push( height / pixelsPerMeter );

        return unprojected;
    }

    _flipMaterialSides(obj) {

    }

    /**
     * 添加物体到3d空间
     * @param {Object} obj - Three.js的mesh
     * @param {lnglat} Array - 物体的经纬度 {lng,lat}
     * @param {Object} options - 配置
     * @param {Boolean} options.scaleToLatitude - 是否按照1px = 1m的比例进行缩放 默认true
     * @param {Number} options.preScale - 改变像素到米的换算比例 默认1
     * @return {Object} obj -物体mesh
     */
    addAtCoordinate(obj, lnglat, options) {
        var geoGroup = new THREE.Group();
        geoGroup.userData.isGeoGroup = true;
        geoGroup.add(obj);
        this._flipMaterialSides(obj);
        this.world.add(geoGroup);
        this.moveToCoordinate(obj, lnglat, options);
        // Bestow this mesh with animation superpowers and keeps track of its movements in the global animation queue
        //this.animationManager.enroll(obj); 
        return obj;
    }

    /**
     * 移动3d空间的物体
     * @param {Object} obj - Three.js的mesh
     * @param {lnglat} Array - 物体的经纬度 {lng,lat}
     * @param {Object} options - 配置
     * @param {Boolean} options.scaleToLatitude - 是否按照1px = 1m的比例进行缩放 默认true
     * @param {Number} options.preScale - 改变像素到米的换算比例 默认1
     * @return {Object} obj - 物体mesh
     */
    moveToCoordinate(obj, lnglat, options) {
        /** Place the given object on the map, centered around the provided longitude and latitude
            The object's internal coordinates are assumed to be in meter-offset format, meaning
            1 unit represents 1 meter distance away from the provided coordinate.
        */

        if (options === undefined) options = {};
        if(options.preScale === undefined) options.preScale = 1.0;
        if(options.scaleToLatitude === undefined || obj.userData.scaleToLatitude) options.scaleToLatitude = true;

        obj.userData.scaleToLatitude = options.scaleToLatitude;

        if (typeof options.preScale === 'number') options.preScale = new THREE.Vector3(options.preScale, options.preScale, options.preScale);
        else if(options.preScale.constructor === Array && options.preScale.length === 3) options.preScale = new THREE.Vector3(options.preScale[0], options.preScale[1], options.preScale[2]);
        else if(options.preScale.constructor !== THREE.Vector3) {
            console.warn("Invalid preScale value: number, Array with length 3, or THREE.Vector3 expected. Defaulting to [1,1,1]");
            options.preScale = new THREE.Vector3(1,1,1);
        }

        var scale = options.preScale;

        // Figure out if this object is a geoGroup and should be positioned and scaled directly, or if its parent
        var geoGroup;
        if (obj.userData.isGeoGroup) geoGroup = obj;
        else if (obj.parent && obj.parent.userData.isGeoGroup) geoGroup = obj.parent;
        else return console.error("Cannot set geographic coordinates of object that does not have an associated GeoGroup. Object must be added to scene with 'addAtCoordinate()'.")

        if(options.scaleToLatitude) {
            // Scale the model so that its units are interpreted as meters at the given latitude
            var pixelsPerMeter = this.projectedUnitsPerMeter(lnglat[1]);
            scale.multiplyScalar(pixelsPerMeter);
        }

        geoGroup.scale.copy(scale);
        geoGroup.position.copy(this.projectToWorld(lnglat));
        obj.coordinates = lnglat;

        return obj;
    }

    addGeoreferencedMesh(mesh, options) {
        /* Place the mesh on the map, assuming its internal (x,y) coordinates are already in (longitude, latitude) format
            TODO: write this
        */
    }

    /**
     * 添加默认地面
     */
    addGround(){
        var geometry = new THREE.PlaneGeometry( PigeonGLConstants.WORLD_SIZE, PigeonGLConstants.WORLD_SIZE );
        var material = new THREE.MeshPhongMaterial( {color: this.map.groundColor||0x666666,  shininess: 30 } );
        var plane = new THREE.Mesh( geometry, material );
        // plane.position.x = plane.position.y = - PigeonGLConstants.WORLD_SIZE/2;
        plane.position.z = -0.01;
        this.addAtCoordinate(plane,this.map.center,{scaleToLatitude: true, preScale:100});
    }

    /**
     * 
     */
    getDataLayer(id) {
        for(var i = 0; i < this.layers.length; i++) {
            if (this.layer.id === id) return layer;
        }
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
        this.scene.add( new THREE.AmbientLight( 0xCCCCCC ) );

        var sunlight = new THREE.DirectionalLight(0xffffff, 0.5);
        sunlight.position.set(0,800,1000);
        sunlight.matrixWorldNeedsUpdate = true;
        this.world.add(sunlight);
    }
   
}


module.exports = exports = Map;