import Layer from './Layer.js';

/**
 * 文字图层类
 * @extends Layer
 */
class TextLayer extends Layer{
    defaultParams={
       fontSize:'14px',
       color:'#000000',
       canvasRender:false
    }
    texts=[];
    textId = 0;
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
        if(!this.canvasRender){
            this.initDom();
        }else{
            this.initCanvas();
        }
        var _this = this;
        
        function change(){
            _this.updateText()
        }
        this.change = change;
        this.pigeonMap.on("change",change)
    }

    initDom(){
         this.container = this.pigeonMap.map.container;
         var div = document.createElement('div');
         div.id='text_layer_'+this.id;
         div.className= 'pigeonGL-text-layer';
        div.setAttribute("width",this.pigeonMap.map.width);
        div.setAttribute("height",this.pigeonMap.map.height);
        div.style.position= 'absolute';
        div.style.top= '0';
        div.style.left= '0';
        div.style.zIndex = ++this.pigeonMap.zIndex;
        this.dom = div;
        this.container.appendChild(div);
    }
    
    initCanvas(){
        this.container = this.pigeonMap.map.container;
        var canvas  = document.createElement('canvas');
        canvas.id = 'text_layer_'+this.id;
        this.container.appendChild(canvas);
        canvas.setAttribute("width",this.pigeonMap.map.width);
        canvas.setAttribute("height",this.pigeonMap.map.height);
        canvas.style.position= 'absolute';
        canvas.style.top= '0';
        canvas.style.left= '0';
        canvas.style.zIndex = ++this.pigeonMap.zIndex;
        this.canvas = canvas;
    }

    /**
     * @params {color,text,lnglat,fontSize}
     */
    addText(options){
        options = Object.assign({},options)
        options.id = options.id||('_text_'+this.textId++);
        this.texts.push(options);
        return options;
    }   

    drawText(){

        if(!this.canvasRender){
            this.drawDomText();
        }else{
            this.drawCanvasText();
        }
    }

    drawDomText(){
        this.dom.innerHTML = '';//清空
        for(var x in this.texts){
            let xy = this.pigeonMap.projectToScreen(this.texts[x].lnglat);
            let span = document.createElement('span');
            span.id = this.texts[x].id;
            span.innerHTML = this.texts[x].text;
            this.dom.appendChild(span);
            span.style.position = 'absolute';
            span.style.top = xy.y+'px';
            span.style.left = xy.x+'px';
            for(var y in this.texts[x].style){
                span.style[y] = this.texts[x].style[y]
            }
        }
    }

    drawCanvasText(){
        var ctx = this.canvas.getContext("2d");
        ctx.clearRect(0,0,this.canvas.width,this.canvas.height);

        for(var x in this.texts){
            let xy = this.pigeonMap.projectToScreen(this.texts[x].lnglat);
            ctx.font= this.texts[x].font||this.font;
            ctx.fillStyle= this.texts[x].color||this.color;
            ctx.fillText(this.texts[x].text,xy.x,xy.y);
        }
    }

    updateDomText(){
         let span =  this.dom.querySelectorAll('span');
         for(var x in this.texts){
            let xy = this.pigeonMap.projectToScreen(this.texts[x].lnglat);
            span[x].style.top = xy.y+'px';
            span[x].style.left = xy.x+'px';
        }
    }

    /**
     *  删除某个ID的文字
     */
    removeText(id){
        for(var x in this.texts){
            if(this.texts[x].id==id){
                this.texts.splice(x,1);
                this.drawText();
                return;
            }
        }
    }

    update(){

    }

    updateText(){
       if(!this.canvasRender){
            this.updateDomText();
        }else{
            this.drawCanvasText();
        }
    }

    /**
     * 获取某个文字对象
     */
    getText(id){
         for(var x in this.texts){
            if(this.texts[x].id==id){
                return this.text[x]
            }
        }
    }

    onRemove(){
        this.pigeonMap.off('change',this.change)//去除map对该对象的引用
        this._listeners = null;
    }

    /**
     * 获取某个文字对象的索引
     */
    getTextIndex(id){
         for(var x in this.texts){
            if(this.texts[x].id==id){
                return x;
            }
        }
    }

};

module.exports =  TextLayer;
