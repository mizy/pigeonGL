/**
 * width line render layer
 * @class
 */
import Layer from './Layer.js';
class WidthLineLayer extends Layer {

	lines = [];
	distance: 5
	constructor(config) {
		super(config);
		this.init();
	}

	init() {
		this.material = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
		this.pointsGeometry = new THREE.BufferGeometry();
		this.mesh = new THREE.Mesh(this.pointsGeometry, this.material);
		this.mesh.renderMode
		this.group = new THREE.Group();
	}

	addLine(data) {
		this.lines.push(data);
		this.updateLine()
	}

	updateLine() {
		const points = []
		this.lines.forEach(line => {
			let linePoints = this.makeDoublePath(line, this.distance);
		})
	}

	// 根据距离生成两边的线
	makeDoublePath(data, dis) {
		const path1 = [];
		const path2 = [];
		for (let i = 0; i < data.length; i++) {
			// 起止
			let point0, point1, point2;
			if (i === data.length - 1) {
				// 末尾
				point0 = data[i - 1];
				point1 = data[i];
				point2 = {
					x: 2 * point1.x - point0.x,
					y: 2 * point1.y - point0.y
				};
			} else if (i === 0) {
				point1 = data[i];
				point2 = data[i + 1];
				point0 = {
					x: 2 * point1.x - point2.x,
					y: 2 * point1.y - point2.y
				};
			} else {
				point0 = data[i - 1];
				point1 = data[i];
				point2 = data[i + 1];
			}
			const point0_1 = this.normalize({
				x: point1.x - point0.x,
				y: point1.y - point0.y
			});
			const point2_1 = this.normalize({
				x: point2.x - point1.x,
				y: point2.y - point1.y
			});
			const point2_1_0 = {
				x: point2_1.x + point0_1.x,
				y: point2_1.y + point0_1.y
			};
			const point2_1_0V = this.normalize({
				x: -point2_1_0.y,
				y: point2_1_0.x
			});
			path1.push({
				x: point2_1_0V.x * dis + point1.x,
				y: point2_1_0V.y * dis + point1.y
			});
			path2.push({
				x: -point2_1_0V.x * dis + point1.x,
				y: -point2_1_0V.y * dis + point1.y
			});
		}

		return [path1, path2];
	}

	onAdd(map) {
		this.pigeonMap = map;
		this.pigeonMap.world.add(this.group);
	}

	addLine() {

	}

}
export default WidthLineLayer;