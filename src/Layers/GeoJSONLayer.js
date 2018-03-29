import Layer from './Layer';
module.exports = 
class GeoJSONLayer extends layer{
    constructor(config){
        super(config);
    }

    onAdd(map){
        this.pigeonMap = map;
    }

    parseGeoJSON(geojson){
        
    }


}