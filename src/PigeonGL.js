/**
 * window.PigeonGL 
 * @example
 * ```
 * new PigeonGL.Map()
 * ```
 * @author mizy.mz 17/12/06
 * @global 
 * @property {Objcet} MTLLoader - MTL Loaders
 * @property {Objcet} OBJLoader - OBJ Loaders
 * @property {Map} Map - Map类，初始化:new PigeonGL.Map()
 * @property {Layer} Layer - 核心图层基类，不可被实例化，
 * @property {SymbolLayer3D} SymbolLayer3D - 3d模型图层
 * @property {ThirdPersonView} ThirdPersonView - 第三人称视角控制层
 * @property {MapControl} MapControl - 地图控制图层
 * @property {TextLayer} TextLayer - 文字图层
 */
const PigeonGL = {
	MTLLoader: require("./Loaders/MTLLoader.js"),
	OBJLoader: require("./Loaders/OBJLoader.js"),

	//core
	Map: require("./Map.js").default,
	Layer: require("./Layers/Layer.js").default,
	CameraControl: require("./Camera/CameraControl.js").default,

	//layer
	ThirdPersonView: require("./Layers/ThirdPersonView.js").default,
	MapControl: require("./Layers/MapControl.js").default,
	TextLayer: require("./Layers/TextLayer.js").default,
	VRLayer: require("./Layers/VRLayer.js").default,
	CloudPoints: require("./Layers/CloudPoints.js").default
}
window.PigeonGL = PigeonGL;