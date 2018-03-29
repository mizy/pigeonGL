var Map = require("./Map.js");
var UTMCameraControl = require("./Camera/UTMCameraControl.js");
class UTMMap extends Map{
    isUTM=true;
    // status='stop';
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
        this.camera = new THREE.PerspectiveCamera( 45, this.map.width / this.map.height, 0.000001, 5000000000);
        
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

        this.camera.position.z = 10;
        this.camera.position.x = this.map.center[0];
        this.camera.position.y = this.map.center[1];
        
        // this.oribitControl = new THREE.OrbitControls( this.camera, this.map.container );
        // this.oribitControl.addEventListener( 'change', ()=>{_this.update()} );
        /**
         * @property {CameraControl} cameraControl - 摄像机控制类
         */
        this.cameraControl = new UTMCameraControl(this);
        // this.updateMap();
    }


    updateMap(){

    }

    
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

        geoGroup.scale.copy(scale);
        geoGroup.position.copy(this.projectToWorld(lnglat));
        obj.coordinates = lnglat;

        return obj;
    }


    update(){
        // Update any animations
        //this.animationManager.update(timestamp);
        var delta = this.clock.getDelta();
        //子layer更新                  
        for(var x in this.layers){
            if(this.layers[x].update){
                this.layers[x].update(delta)
            }
        }
        // this.cameraControl.update();
        
        // Render the scene
        this.renderer.render( this.scene, this.camera );

        // Run this again next frame
        var thisthis = this;
        let device;
        if(device = this.renderer.vr.getDevice()){
            this.animationframe = device.requestAnimationFrame(function(timestamp) { if(thisthis.status!='stop')thisthis.update(delta); } );
            return;
        }
        this.animationframe = requestAnimationFrame(function(timestamp) {
             if(thisthis.status!='stop')thisthis.update(delta); 
        });
    }

    projectToWorld(utm){
        return {
            x:utm[0],
            y:utm[1],
            z:utm[2]||0
        }
    }

    unprojectFromWorld(world){
        return [world.x,world.y,world.z]
    }

    projectedUnitsPerMeter(){
        return 1;
    }
}
module.exports = UTMMap;