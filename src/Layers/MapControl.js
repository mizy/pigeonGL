import Layer from './Layer.js';

/**
 * 地图控制类
 * @class
 * @extends Layer
 */
class MapControl extends Layer{
    
   defaultParams={
        moveSpeed:20,
        pitchSpeed:0.1,
        rotateSpeed:0.15,
   }

   /**
    * 构造函数
    * @param {Object} config - config
    * @param {number} config.moveSpeed - 移动速度
    * @param {number} config.pitchSpeed - 角度改变速度
    * @param {number} config.rotateSpeed - 旋转速度
    */
    constructor(config){
       super(config);
       for(var x in this.defaultParams){
            if(typeof(this[x])=="undefined"){
               this[x] = this.defaultParams[x];
           }
       }
    }

    onAdd(map){
        var _this = this;
       this.pigeonMap = map;
       this.map = this.pigeonMap.map;//用户配置或真实地图
       this.cameraControl = this.pigeonMap.cameraControl;
       this.initConfig();
       this.listenEvents();
       //添加相机更新函数
       this.on("change",function(){
           _this.pigeonMap.fire("change")
           _this.cameraControl.updateMap();//更新用户参数为相机参数
       })
    }

    initConfig(){
       
        var transform = {};
    };

    /**
     * 监听事件
     */
    listenEvents(){
        var _this = this;
        var container = this.map.container;
        this.onDown = function onDown(event){
            if(event.button==0){//左键
                _this.mouseStatus = 'left'
            }else if(event.button==2){//右键
                _this.mouseStatus = 'right'
            }
            _this.mouseDownPosition = {
                x:event.clientX,
                y:event.clientY
            }
            _this.map.container.addEventListener('mousemove',_this.onMove)
        }
        this.onUp = function onUp(event){
            _this.mouseStatus = false;
            _this.map.container.removeEventListener('mousemove',_this.onMove)
        }
        this.onMove = function onMove(event){
            if(!_this.mouseStatus){
                return;
            }
            if(_this.mouseStatus=='left'){
                let yDis = event.clientY -  _this.mouseDownPosition.y;
                let xDis = event.clientX -  _this.mouseDownPosition.x;
                let distance = Math.sqrt(Math.pow(xDis,2) + Math.pow(yDis,2));
                if(distance<0.1)return false;
                let rotation = (xDis>0?-1:1)*Math.asin(yDis/distance) +  _this.map.transform.angle; 
                let ratio ;
                if(!_this.pigeonMap.isUTM){
                    ratio= _this.moveSpeed/_this.map.zoom/_this.map.transform.scale;
                }else{
                    ratio = _this.moveSpeed/Math.pow(_this.map.zoom,2)
                }
                _this.map.center[0] +=  (xDis>0?-1:1)*(distance*Math.cos(rotation))*ratio;
                _this.map.center[1] +=  (xDis>0?-1:1)*(distance*Math.sin(rotation))*ratio;
                _this.cameraControl.updateMap();
                /**
                 * 地图移动
                 * @event MapControl#move 
                 * @property {Object} event
                 */
                _this.fire("move",event)//地图移动
                _this.fire("change",event)
                
            }else if(_this.mouseStatus=='right'){
                _this.map.pitch += _this.pitchSpeed*(event.clientY - _this.mouseDownPosition.y);
                if(_this.map.pitch>90){
                    _this.map.pitch = 90;
                }else if(_this.map.pitch<0){
                    _this.map.pitch = 0;
                }
                _this.map.rotation -= _this.rotateSpeed*(event.clientX - _this.mouseDownPosition.x);
                _this.cameraControl.updateMap();
                /**
                 * 地图旋转
                 * @event MapControl#rotate
                 * @property {Object} event 
                 */
                _this.fire("rotate",event)//地图x旋转
                _this.fire("change",event)
                
            }
           
            _this.mouseDownPosition = {
                 x:event.clientX,
                y:event.clientY
            }
        }
        this.onWheel = function onWheel(event){
            _this.map.zoom -= event.deltaY/100;
            _this.cameraControl.updateMap();
            event.preventDefault();
            /**
             * 地图缩放
             * @event MapControl#zoom
             * @property {Object} event - 原生event对象
             */
            _this.fire("zoom",event)//地图缩放

            /**
             * 地图状态发生改变，发生操作时触发
             * @event MapControl#change
             * @property {Object} event - 原生event对象
             */
            _this.fire("change",event)
        }
        this.onContextmenu = function onContextmenu(e){
            e.preventDefault();
            e.stopPropagation();
        }
         this.map.container.addEventListener('mousedown',this.onDown)
        this.map.container.addEventListener('mouseup',this.onUp)
        this.map.container.addEventListener('mousemove',this.onMove)
        this.map.container.addEventListener('wheel',this.onWheel)
        this.map.container.addEventListener('contextmenu',this.onContextmenu)
        
    };

    /**
     * 移除所有监听事件
     */
    removeListenr(){
        this.map.container.removeEventListener('mousedown',this.onDown)
        this.map.container.removeEventListener('mouseup',this.onUp)
        this.map.container.removeEventListener('mousemove',this.onMove)
        this.map.container.removeEventListener('wheel',this.onWheel)
        this.map.container.removeEventListener('contextmenu',this.onContextmenu)
    }
    
}
module.exports = MapControl;