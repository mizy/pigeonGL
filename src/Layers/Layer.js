
/**
 * 图层基础类
 * @class 
 */
class Layer{

    /**
     * Layer类的构造函数，会把所有用户参数挂到layer对象上
     * @param {object} config - 用户构造函数配置
     */
    constructor(config){
        var _this = this;
        this._userConfig = config;
        for(var x in config){
            this[x] = config[x]
        }

    }

    /**
     * 事件监听,用法同jQuery.on
     */
    on(type,listener){
        if ( this._listeners === undefined ) this._listeners = {};
		var listeners = this._listeners;
		if ( listeners[ type ] === undefined ) {
			listeners[ type ] = [];
		}
		if ( listeners[ type ].indexOf( listener ) === - 1 ) {
			listeners[ type ].push( listener );
		}
    }

    /**
     * 触发事件 
     * @example 
     * this.fire("change",event)
     */
    fire(type,event){
        if ( this._listeners === undefined ) return;
		var listeners = this._listeners;
		var listenerArray = listeners[ type ];
		if ( listenerArray !== undefined ) {
			var array = listenerArray.slice( 0 );
			for ( var i = 0, l = array.length; i < l; i ++ ) {
				array[ i ].call( this, event );
			}
		}
    }

    /**
     * 关闭事件
     * @example
     * this.off('change',onChange)
     */
    off(type,listener){
		if ( this._listeners === undefined ) return;
		var listeners = this._listeners;
		var listenerArray = listeners[ type ];
		if ( listenerArray !== undefined ) {
            if(listener){
                var index = listenerArray.indexOf( listener );
                if ( index !== - 1 ) {
                    listenerArray.splice( index, 1 );
                }
            }else{
                this._listeners[type] = [];
            }
		}
    }

    initConfig(config){
        
    }

    /**
     * 地图添加图层时调用,由子类实现
     * @param {Map} map - PigeonGL.Map实例
     */
    onAdd(map){
        this.pigeonMap = map;
    }

    /**
     * 地图每帧调用该函数
     */
    update(){
        
    }

    /**
     * 移除图层时调用
     */
    onRemove(){
        if(this._listeners){
            this._listeners = []
        }
    }
}
module.exports = Layer;