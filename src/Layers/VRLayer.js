import Layer from './Layer';
module.exports = 
class VRLayer extends Layer{
    noVR=false;
    vrStatus = 'not suppert VR';
    constructor(config){
        super(config);
        
        //先监听时间，再获取VR
        this.listenEvents();
        this.getVRDisplays();
    }

    /**
     * 获取vrDevice
     */
    getVRDisplays(){
        let _this = this;
        if (navigator.getVRDisplays) {
            navigator.getVRDisplays().then(function(displays){
                if ( displays.length > 0 ) {
                    _this.device = displays[0];
                    _this.renderer.vr.enabled = true;
                    _this.pigeonMap.renderer.vr.setDevice(_this.device);
                     //初始化frameData
                    _this.frameData = new VRFrameData();
                } else {
                    _this.vrStatus = 'noDisplay'
                    console.warn( 'no vr displays' );
                }
            } ).catch( function (e) {
                console.warn( 'Unable to get VR Displays' );
            });
        }
    }

    /**
     * 监听全局VR事件
     */
    listenEvents(){
        let _this = this;
        window.addEventListener( 'vrdisplayconnect', function ( event ) {
            _this.device = event.display||event.detail.display;
            _this.status == 'connect';
            _this.renderer.vr.enabled = true;
            _this.fire('connected',_this.device);
        }, false );

        window.addEventListener( 'vrdisplaydisconnect', function ( event ) {
            _this.status == 'disconnect'
            _this.renderer.vr.enabled = false;
            _this.fire('disconnet',_this.device);
        }, false );

        window.addEventListener( 'vrdisplaypresentchange', function ( event ) {
            _this.device = event.display||event.detail.display;
            _this.fire('statuschange',_this.device);
        }, false );
    }

    /**
     * 进入VR模式
     */
    enterVR(){
        this.device.requestPresent( [ { source: this.renderer.domElement } ] );
    }

    /**
     * 退出VR
     */
    exitVR(){
        this.device.exitPresent()
    }

    /**
     * 添加Button
     */
    createButton(button){
        let _this = this;
        if(!button){
            button = document.createElement("button");
            button.style.position = 'absolute';
			button.style.bottom = '20px';
			button.style.padding = '12px 6px';
			button.style.border = '1px solid #fff';
			button.style.borderRadius = '4px';
			button.style.background = 'transparent';
			button.style.color = '#fff';
			button.style.textAlign = 'center';
			button.style.opacity = '0.5';
			button.style.outline = 'none';
			button.style.zIndex = '9999';
            button.style.cursor = 'auto';
			button.style.left = 'calc(50% - 75px)';
			button.style.width = '150px';
            button.textContent = 'Enter VR';
            document.body.appendChild(button);
        }
        button.addEventListener("click",function(){
            if(_this.device)
            _this.enterVR();
        })
    }

    onAdd(map){
        this.pigeonMap = map;
        this.renderer = map.renderer;
        this.initVRRenderer();
    }

    initVRRenderer(){
        let _this = this;
    }
  
}