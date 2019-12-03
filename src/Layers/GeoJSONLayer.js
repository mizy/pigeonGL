import Layer from './Layer';
export default class GeoJSONLayer extends layer {
	constructor(config) {
		super(config);
	}

	onAdd(map) {
		this.pigeonMap = map;
	}

	parseGeoJSON(geojson) {

	}


}