import Layer from './Layer.js';

/**
 * 第三人称视角图层
 * @extends Layer
 */
class ThirdPersonLayer extends Layer{
    defaultParams={
        target : null,//跟踪物体
        viewRotation : 0,//观看视角
        targetRotation : 0 ,//观看物体默认旋转角度
        autoUpdate :false,
        lockRotation:true,//锁定视角
    }
    
    /**
     * 构造函数
     * @param {Object} target - 需要摄像机跟随的物体
     * @param {Number} viewRotation - 观看视角（deg）
     * @param {Number} targetRotation - 物体初始旋转角度，用来配合摄像机位置  (deg)
     */
    constructor(config){
        super(config);
        for(var x in this.defaultParams){
            if(typeof(this[x])=="undefined"){
                this[x] = this.defaultParams[x];
            }
       }
    };

    //图层添加之后的处理函数
    onAdd(map){
        this.pigeonMap = map;
        this.initCamera();
    }
    
    initCamera(){
        
    }

    update(){
        if(this.autoUpdate)
        this.updateCamera();
    }

    /**
     * 更新相机，物体移动后需要更新相机，重新计算相机位置
     */
    updateCamera(rotation){
        if(!this.target)return false;
        let lnglat = this.target.coordinates;
        if(this.lockRotation){
            if(!rotation)rotation = this.target.rotation.z*180/Math.PI  +  this.targetRotation + this.viewRotation
            this.pigeonMap.cameraControl.setRotation(rotation);
        }
        this.pigeonMap.cameraControl.setCenter(lnglat);
        this.pigeonMap.cameraControl.updateCamera();
    }
};
module.exports = ThirdPersonLayer;