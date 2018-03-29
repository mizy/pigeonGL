/**
 * 周边车辆绘制类
 * @class
 */
import Layer from './Layer.js';
class PointsLayer extends Layer {
    
    lanePoints=[];
    constructor(config) {
        super(config);
        this.initPoints();
    }

    initPoints(){
        this.material = new THREE.PointsMaterial( { color: 0xffffff,size:10 } );
       this.pointsGeometry = new THREE.BufferGeometry();
       this.points = new THREE.Points(this.pointsGeometry,this.material);
    }
 
    onAdd(map){
        this.pigeonMap = map;
        this.pigeonMap.world.add(this.points);
    }

    /**
     * 采用相对坐标，防止抖动
     */
    drawPoints(data){
        this.baseLngLat = data[0];
        this.baseXYZ = this.pigeonMap.projectToWorld(this.baseLngLat);
        let points = [],xyz;
        let index = [];
        let colors = [];
        for(var x in data){
            xyz = this.pigeonMap.projectToWorld(data[x]);
            points.push(
                xyz.x-this.baseXYZ.x,
                xyz.y-this.baseXYZ.y,
                xyz.z-this.baseXYZ.z,
            );
            colors.push(data[x])
            index.push(x);
        }
        this.points.geometry.addAttribute('position',new THREE.Float32BufferAttribute(points, 3))
        this.points.geometry.computeBoundingSphere();
        this.points.position.x = this.baseXYZ.x;
        this.points.position.y = this.baseXYZ.y;
        this.points.position.z = this.baseXYZ.z;
    }

}
module.exports = PointsLayer;