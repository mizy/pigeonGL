(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("three"));
	else if(typeof define === 'function' && define.amd)
		define(["three"], factory);
	else if(typeof exports === 'object')
		exports["PigeonGL"] = factory(require("three"));
	else
		root["PigeonGL"] = factory(root["three"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(7);

var assertThisInitialized = __webpack_require__(16);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(17);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



/**
 * 图层基础类
 * @class 
 */
var Layer =
/*#__PURE__*/
function () {
  /**
   * Layer类的构造函数，会把所有用户参数挂到layer对象上
   * @param {object} config - 用户构造函数配置
   */
  function Layer(config) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Layer);

    this.layers = [];

    var _this = this;

    this._userConfig = config;

    for (var x in config) {
      this[x] = config[x];
    }
  }
  /**
   * 事件监听,用法同jQuery.on
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Layer, [{
    key: "on",
    value: function on(type, listener) {
      if (this._listeners === undefined) this._listeners = {};
      var listeners = this._listeners;

      if (listeners[type] === undefined) {
        listeners[type] = [];
      }

      if (listeners[type].indexOf(listener) === -1) {
        listeners[type].push(listener);
      }
    }
    /**
     * 触发事件 
     * @example 
     * this.fire("change",event)
     */

  }, {
    key: "fire",
    value: function fire(type, event) {
      if (this._listeners === undefined) return;
      var listeners = this._listeners;
      var listenerArray = listeners[type];

      if (listenerArray !== undefined) {
        var array = listenerArray.slice(0);

        for (var i = 0, l = array.length; i < l; i++) {
          array[i].call(this, event);
        }
      }
    }
    /**
     * 关闭事件
     * @example
     * this.off('change',onChange)
     */

  }, {
    key: "off",
    value: function off(type, listener) {
      if (this._listeners === undefined) return;
      var listeners = this._listeners;
      var listenerArray = listeners[type];

      if (listenerArray !== undefined) {
        if (listener) {
          var index = listenerArray.indexOf(listener);

          if (index !== -1) {
            listenerArray.splice(index, 1);
          }
        } else {
          this._listeners[type] = [];
        }
      }
    }
  }, {
    key: "initConfig",
    value: function initConfig(config) {}
    /**
     * 地图添加图层时调用,由子类实现
     * @param {Map} map - PigeonGL.Map实例
     */

  }, {
    key: "onAdd",
    value: function onAdd(map) {
      this.pigeonMap = map;
    }
    /**
     * 地图每帧调用该函数
     */

  }, {
    key: "update",
    value: function update() {}
    /**
     * 移除图层时调用
     */

  }, {
    key: "onRemove",
    value: function onRemove() {
      if (this._listeners) {
        this._listeners = [];
      }
    }
    /**
     * 添加图层
     * @param {Layer} layer - 图层
     */

  }, {
    key: "addLayer",
    value: function addLayer(layer) {
      layer.id = ++this._layerid;
      this.layers.push(layer);
      layer.onAdd(this); //初始化layer
    }
    /**
     * 删除图层
     * @param {Layer} layer - 图层
     */

  }, {
    key: "removeLayer",
    value: function removeLayer(layer) {
      for (var x in this.layers) {
        if (this.layers[x].id == layer.id) {
          this.layers[x].onRemove();
          this.layers.splice(x, 1);
          return;
        }
      }
    }
    /**
     * 获取图层通过id
     */

  }, {
    key: "getLayerById",
    value: function getLayerById(id) {
      for (var i = 0; i < this.layers.length; i++) {
        if (this.layer.id === id) return layer;
      }
    }
  }]);

  return Layer;
}();

/* harmony default export */ __webpack_exports__["default"] = (Layer);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(THREE) {/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



var PigeonGLConstants = __webpack_require__(9);

var utils = __webpack_require__(18);
/**
 * 相机控制类
 * @class
 * @param {object} map - 包含位置信息的地图对象
 * @param {object} camera - 相机对象
 * @param {object} world - 世界对象
 */


var CameraControl =
/*#__PURE__*/
function () {
  function CameraControl(map) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CameraControl);

    this.scope = map;
    this.map = map.map;
    this.camera = map.camera;
    this.active = true;
    this.world = map.world || new THREE.Group();
    this.world.position.x = this.world.position.y = 0;
    this.camera.matrixAutoUpdate = false;
    this.update();
  }
  /**
  * 更新地图参数，当this.map的参数发生变化时，需要执行该函数同步变化
  */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(CameraControl, [{
    key: "update",
    value: function update(map) {
      this.map = Object.assign(this.map, map);
      this.initMapTransform();
      this.updateCamera();
    }
    /**
     * 监听地图瓦片层的变化，并同步执行updateCamera()同步相机
     */

  }, {
    key: "listenMapChange",
    value: function listenMapChange() {
      //更新地图对象
      this.update(this.map);
    }
    /**
     * 重新初始化没有地图瓦片层时的位置参数
     */

  }, {
    key: "initMapTransform",
    value: function initMapTransform() {
      var transform = {};
      transform.width = this.map.width;
      transform.height = this.map.height;
      transform.zHeight = this.map.zHeight || 0; //z轴凸起高度

      transform.x = this.map.center[0];
      transform.y = this.map.center[1];
      transform.z = this.map.center[2] || this.getZ(this.map.zoom);
      transform._pitch = this.map.pitch * Math.PI / 180 || 0;
      transform.angle = this.map.rotation * Math.PI / 180 || 0;
      this.map.transform = transform;
    }
    /**
     * 获取地图放大倍数
     * @param {number} zoom - 地图zoom
     */

  }, {
    key: "getZ",
    value: function getZ(zoom) {
      return zoom;
    }
    /**
     * 设置地图中心
     * @param {Array} center - [lng,lat]
     */

  }, {
    key: "setCenter",
    value: function setCenter(center) {
      this.map.center = center;
      this.initMapTransform();
    }
    /**
     * 设置旋转角度
     * @param {number} deg - 旋转的角度（！不是弧度）
     */

  }, {
    key: "setRotation",
    value: function setRotation(rad) {
      this.map.rotation = rad;
      this.map.transform.angle = this.map.rotation * Math.PI / 180;
    }
    /**
     * 设置旋转的俯角
     * @param {number} deg - 俯视的角度
     */

  }, {
    key: "setPitch",
    value: function setPitch(rad) {
      this.map.pitch = rad;
      this.map.transform._pitch = this.map.pitch * Math.PI / 180;
    }
    /**
     * 更新相机位置，当map位置信息变化时执行
     */

  }, {
    key: "updateCamera",
    value: function updateCamera(ev) {
      var height = Math.abs(this.map.transform.z) + this.map.transform.zHeight;
      var fov = this.map.fov || 0.6435011087932844; //*2/Math.pow(this.map.zoom,2);

      var cameraToCenterDistance = height;
      var halfFov = fov / 2;
      var groundAngle = Math.PI / 2 + this.map.transform._pitch;
      var topHalfSurfaceDistance = Math.sin(halfFov) * cameraToCenterDistance / Math.sin(Math.PI - groundAngle - halfFov);
      var furthestDistance = Math.cos(Math.PI / 2 - this.map.transform._pitch) * topHalfSurfaceDistance + cameraToCenterDistance;
      var farZ = furthestDistance * 1.01;
      this.camera.projectionMatrix = utils.makePerspectiveMatrix(fov, this.map.transform.width / this.map.transform.height, 1, farZ);
      var cameraWorldMatrix = new THREE.Matrix4();
      var cameraTranslateZ = new THREE.Matrix4().makeTranslation(0, 0, height);
      var cameraRotateX = new THREE.Matrix4().makeRotationX(this.map.transform._pitch);
      var cameraRotateZ = new THREE.Matrix4().makeRotationZ(this.map.transform.angle);
      cameraWorldMatrix.premultiply(cameraTranslateZ).premultiply(cameraRotateX).premultiply(cameraRotateZ);
      this.camera.matrixWorld.copy(cameraWorldMatrix); // this.camera.position.z = height;
      // this.camera.rotation.x = (this.map.transform._pitch);
      // this.camera.rotation.z = (this.map.transform.angle);
      // this.camera.rotateOnWorldAxis(new THREE.Vector3(1,0,0),this.map.transform._pitch);
      // this.camera.rotateOnWorldAxis ( new THREE.Vector3(0,0,1), this.map.transform.angle )
      //把整个地图挪到原点

      this.world.position.x = -this.map.transform.x;
      this.world.position.y = -this.map.transform.y;
    }
  }]);

  return CameraControl;
}();

/* harmony default export */ __webpack_exports__["default"] = (CameraControl);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

var WORLD_SIZE_RATIO = 0;
var WORLD_SIZE = 512 * Math.pow(2, WORLD_SIZE_RATIO);
var MERCATOR_A = 6378137.0;
module.exports = exports = {
  WORLD_SIZE_RATIO: WORLD_SIZE_RATIO,
  WORLD_SIZE: WORLD_SIZE,
  PROJECTION_WORLD_SIZE: WORLD_SIZE / (MERCATOR_A * Math.PI) / 2,
  MERCATOR_A: MERCATOR_A,
  // 900913 projection property
  DEG2RAD: Math.PI / 180,
  RAD2DEG: 180 / Math.PI,
  EARTH_CIRCUMFERENCE: 40075000,
  // In meters
  DISTANCE: 200
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(25);

var iterableToArray = __webpack_require__(26);

var nonIterableSpread = __webpack_require__(27);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);

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

window.THREE = three__WEBPACK_IMPORTED_MODULE_0__;
var PigeonGL = {
  OrbitControls: __webpack_require__(12)["default"],
  MTLLoader: __webpack_require__(13),
  OBJLoader: __webpack_require__(14),
  //core
  Map: __webpack_require__(15)["default"],
  Layer: __webpack_require__(6)["default"],
  CameraControl: __webpack_require__(8)["default"],
  //layer
  ThirdPersonView: __webpack_require__(19)["default"],
  MapControl: __webpack_require__(20)["default"],
  TextLayer: __webpack_require__(21)["default"],
  VRLayer: __webpack_require__(22)["default"],
  CloudPoints: __webpack_require__(23)["default"],
  //util
  Text: __webpack_require__(24)["default"]
};
window.PigeonGL = PigeonGL;
/* harmony default export */ __webpack_exports__["default"] = (PigeonGL);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @author qiao / https://github.com/qiao
 * @author mrdoob / http://mrdoob.com
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author erich666 / http://erichaines.com
 */
 // This set of controls performs orbiting, dollying (zooming), and panning.
// Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
//
//    Orbit - left mouse / touch: one finger move
//    Zoom - middle mouse, or mousewheel / touch: two finger spread or squish
//    Pan - right mouse, or arrow keys / touch: three finger swipe

var OrbitControls = function OrbitControls(object, domElement) {
  this.object = object;
  this.domElement = domElement !== undefined ? domElement : document; // Set to false to disable this control

  this.enabled = true; // "target" sets the location of focus, where the object orbits around

  this.target = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](); // How far you can dolly in and out ( PerspectiveCamera only )

  this.minDistance = 0;
  this.maxDistance = Infinity; // How far you can zoom in and out ( OrthographicCamera only )

  this.minZoom = 0;
  this.maxZoom = Infinity; // How far you can orbit vertically, upper and lower limits.
  // Range is 0 to Math.PI radians.

  this.minPolarAngle = 0; // radians

  this.maxPolarAngle = Math.PI; // radians
  // How far you can orbit horizontally, upper and lower limits.
  // If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].

  this.minAzimuthAngle = -Infinity; // radians

  this.maxAzimuthAngle = Infinity; // radians
  // Set to true to enable damping (inertia)
  // If damping is enabled, you must call controls.update() in your animation loop

  this.enableDamping = false;
  this.dampingFactor = 0.25; // This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
  // Set to false to disable zooming

  this.enableZoom = true;
  this.zoomSpeed = 1.0; // Set to false to disable rotating

  this.enableRotate = true;
  this.rotateSpeed = 1.0; // Set to false to disable panning

  this.enablePan = true;
  this.keyPanSpeed = 7.0; // pixels moved per arrow key push
  // Set to true to automatically rotate around the target
  // If auto-rotate is enabled, you must call controls.update() in your animation loop

  this.autoRotate = false;
  this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60
  // Set to false to disable use of the keys

  this.enableKeys = true; // The four arrow keys

  this.keys = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    BOTTOM: 40
  }; // Mouse buttons

  this.mouseButtons = {
    ORBIT: three__WEBPACK_IMPORTED_MODULE_0__["MOUSE"].LEFT,
    ZOOM: three__WEBPACK_IMPORTED_MODULE_0__["MOUSE"].MIDDLE,
    PAN: three__WEBPACK_IMPORTED_MODULE_0__["MOUSE"].RIGHT
  }; // for reset

  this.target0 = this.target.clone();
  this.position0 = this.object.position.clone();
  this.zoom0 = this.object.zoom; //
  // public methods
  //

  this.getPolarAngle = function () {
    return spherical.phi;
  };

  this.getAzimuthalAngle = function () {
    return spherical.theta;
  };

  this.saveState = function () {
    scope.target0.copy(scope.target);
    scope.position0.copy(scope.object.position);
    scope.zoom0 = scope.object.zoom;
  };

  this.reset = function () {
    scope.target.copy(scope.target0);
    scope.object.position.copy(scope.position0);
    scope.object.zoom = scope.zoom0;
    scope.object.updateProjectionMatrix();
    scope.dispatchEvent(changeEvent);
    scope.update();
    state = STATE.NONE;
  }; // this method is exposed, but perhaps it would be better if we can make it private...


  this.update = function () {
    var offset = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](); // so camera.up is the orbit axis

    var quat = new three__WEBPACK_IMPORTED_MODULE_0__["Quaternion"]().setFromUnitVectors(object.up, new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, 1, 0));
    var quatInverse = quat.clone().inverse();
    var lastPosition = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();
    var lastQuaternion = new three__WEBPACK_IMPORTED_MODULE_0__["Quaternion"]();
    return function update() {
      var position = scope.object.position;
      offset.copy(position).sub(scope.target); // rotate offset to "y-axis-is-up" space

      offset.applyQuaternion(quat); // angle from z-axis around y-axis

      spherical.setFromVector3(offset);

      if (scope.autoRotate && state === STATE.NONE) {
        rotateLeft(getAutoRotationAngle());
      }

      spherical.theta += sphericalDelta.theta;
      spherical.phi += sphericalDelta.phi; // restrict theta to be between desired limits

      spherical.theta = Math.max(scope.minAzimuthAngle, Math.min(scope.maxAzimuthAngle, spherical.theta)); // restrict phi to be between desired limits

      spherical.phi = Math.max(scope.minPolarAngle, Math.min(scope.maxPolarAngle, spherical.phi));
      spherical.makeSafe();
      spherical.radius *= scale; // restrict radius to be between desired limits

      spherical.radius = Math.max(scope.minDistance, Math.min(scope.maxDistance, spherical.radius)); // move target to panned location

      scope.target.add(panOffset);
      offset.setFromSpherical(spherical); // rotate offset back to "camera-up-vector-is-up" space

      offset.applyQuaternion(quatInverse);
      position.copy(scope.target).add(offset);
      scope.object.lookAt(scope.target);

      if (scope.enableDamping === true) {
        sphericalDelta.theta *= 1 - scope.dampingFactor;
        sphericalDelta.phi *= 1 - scope.dampingFactor;
      } else {
        sphericalDelta.set(0, 0, 0);
      }

      scale = 1;
      panOffset.set(0, 0, 0); // update condition is:
      // min(camera displacement, camera rotation in radians)^2 > EPS
      // using small-angle approximation cos(x/2) = 1 - x^2 / 8

      if (zoomChanged || lastPosition.distanceToSquared(scope.object.position) > EPS || 8 * (1 - lastQuaternion.dot(scope.object.quaternion)) > EPS) {
        scope.dispatchEvent(changeEvent);
        lastPosition.copy(scope.object.position);
        lastQuaternion.copy(scope.object.quaternion);
        zoomChanged = false;
        return true;
      }

      return false;
    };
  }();

  this.dispose = function () {
    scope.domElement.removeEventListener('contextmenu', onContextMenu, false);
    scope.domElement.removeEventListener('mousedown', onMouseDown, false);
    scope.domElement.removeEventListener('wheel', onMouseWheel, false);
    scope.domElement.removeEventListener('touchstart', onTouchStart, false);
    scope.domElement.removeEventListener('touchend', onTouchEnd, false);
    scope.domElement.removeEventListener('touchmove', onTouchMove, false);
    document.removeEventListener('mousemove', onMouseMove, false);
    document.removeEventListener('mouseup', onMouseUp, false);
    window.removeEventListener('keydown', onKeyDown, false); //scope.dispatchEvent( { type: 'dispose' } ); // should this be added here?
  }; //
  // internals
  //


  var scope = this;
  var changeEvent = {
    type: 'change'
  };
  var startEvent = {
    type: 'start'
  };
  var endEvent = {
    type: 'end'
  };
  var STATE = {
    NONE: -1,
    ROTATE: 0,
    DOLLY: 1,
    PAN: 2,
    TOUCH_ROTATE: 3,
    TOUCH_DOLLY: 4,
    TOUCH_PAN: 5
  };
  var state = STATE.NONE;
  var EPS = 0.000001; // current position in spherical coordinates

  var spherical = new three__WEBPACK_IMPORTED_MODULE_0__["Spherical"]();
  var sphericalDelta = new three__WEBPACK_IMPORTED_MODULE_0__["Spherical"]();
  var scale = 1;
  var panOffset = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();
  var zoomChanged = false;
  var rotateStart = new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"]();
  var rotateEnd = new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"]();
  var rotateDelta = new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"]();
  var panStart = new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"]();
  var panEnd = new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"]();
  var panDelta = new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"]();
  var dollyStart = new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"]();
  var dollyEnd = new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"]();
  var dollyDelta = new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"]();

  function getAutoRotationAngle() {
    return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;
  }

  function getZoomScale() {
    return Math.pow(0.95, scope.zoomSpeed);
  }

  function rotateLeft(angle) {
    sphericalDelta.theta -= angle;
  }

  function rotateUp(angle) {
    sphericalDelta.phi -= angle;
  }

  var panLeft = function () {
    var v = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();
    return function panLeft(distance, objectMatrix) {
      v.setFromMatrixColumn(objectMatrix, 0); // get X column of objectMatrix

      v.multiplyScalar(-distance);
      panOffset.add(v);
    };
  }();

  var panUp = function () {
    var v = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();
    return function panUp(distance, objectMatrix) {
      v.setFromMatrixColumn(objectMatrix, 1); // get Y column of objectMatrix

      v.multiplyScalar(distance);
      panOffset.add(v);
    };
  }(); // deltaX and deltaY are in pixels; right and down are positive


  var pan = function () {
    var offset = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();
    return function pan(deltaX, deltaY) {
      var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

      if (scope.object.isPerspectiveCamera) {
        // perspective
        var position = scope.object.position;
        offset.copy(position).sub(scope.target);
        var targetDistance = offset.length(); // half of the fov is center to top of screen

        targetDistance *= Math.tan(scope.object.fov / 2 * Math.PI / 180.0); // we actually don't use screenWidth, since perspective camera is fixed to screen height

        panLeft(2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix);
        panUp(2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix);
      } else if (scope.object.isOrthographicCamera) {
        // orthographic
        panLeft(deltaX * (scope.object.right - scope.object.left) / scope.object.zoom / element.clientWidth, scope.object.matrix);
        panUp(deltaY * (scope.object.top - scope.object.bottom) / scope.object.zoom / element.clientHeight, scope.object.matrix);
      } else {
        // camera neither orthographic nor perspective
        console.warn('WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.');
        scope.enablePan = false;
      }
    };
  }();

  function dollyIn(dollyScale) {
    if (scope.object.isPerspectiveCamera) {
      scale /= dollyScale;
    } else if (scope.object.isOrthographicCamera) {
      scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom * dollyScale));
      scope.object.updateProjectionMatrix();
      zoomChanged = true;
    } else {
      console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.');
      scope.enableZoom = false;
    }
  }

  function dollyOut(dollyScale) {
    if (scope.object.isPerspectiveCamera) {
      scale *= dollyScale;
    } else if (scope.object.isOrthographicCamera) {
      scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom / dollyScale));
      scope.object.updateProjectionMatrix();
      zoomChanged = true;
    } else {
      console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.');
      scope.enableZoom = false;
    }
  } //
  // event callbacks - update the object state
  //


  function handleMouseDownRotate(event) {
    //console.log( 'handleMouseDownRotate' );
    rotateStart.set(event.clientX, event.clientY);
  }

  function handleMouseDownDolly(event) {
    //console.log( 'handleMouseDownDolly' );
    dollyStart.set(event.clientX, event.clientY);
  }

  function handleMouseDownPan(event) {
    //console.log( 'handleMouseDownPan' );
    panStart.set(event.clientX, event.clientY);
  }

  function handleMouseMoveRotate(event) {
    //console.log( 'handleMouseMoveRotate' );
    rotateEnd.set(event.clientX, event.clientY);
    rotateDelta.subVectors(rotateEnd, rotateStart);
    var element = scope.domElement === document ? scope.domElement.body : scope.domElement; // rotating across whole screen goes 360 degrees around

    rotateLeft(2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed); // rotating up and down along whole screen attempts to go 360, but limited to 180

    rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed);
    rotateStart.copy(rotateEnd);
    scope.update();
  }

  function handleMouseMoveDolly(event) {
    //console.log( 'handleMouseMoveDolly' );
    dollyEnd.set(event.clientX, event.clientY);
    dollyDelta.subVectors(dollyEnd, dollyStart);

    if (dollyDelta.y > 0) {
      dollyIn(getZoomScale());
    } else if (dollyDelta.y < 0) {
      dollyOut(getZoomScale());
    }

    dollyStart.copy(dollyEnd);
    scope.update();
  }

  function handleMouseMovePan(event) {
    //console.log( 'handleMouseMovePan' );
    panEnd.set(event.clientX, event.clientY);
    panDelta.subVectors(panEnd, panStart);
    pan(panDelta.x, panDelta.y);
    panStart.copy(panEnd);
    scope.update();
  }

  function handleMouseUp(event) {// console.log( 'handleMouseUp' );
  }

  function handleMouseWheel(event) {
    // console.log( 'handleMouseWheel' );
    if (event.deltaY < 0) {
      dollyOut(getZoomScale());
    } else if (event.deltaY > 0) {
      dollyIn(getZoomScale());
    }

    scope.update();
  }

  function handleKeyDown(event) {
    //console.log( 'handleKeyDown' );
    switch (event.keyCode) {
      case scope.keys.UP:
        pan(0, scope.keyPanSpeed);
        scope.update();
        break;

      case scope.keys.BOTTOM:
        pan(0, -scope.keyPanSpeed);
        scope.update();
        break;

      case scope.keys.LEFT:
        pan(scope.keyPanSpeed, 0);
        scope.update();
        break;

      case scope.keys.RIGHT:
        pan(-scope.keyPanSpeed, 0);
        scope.update();
        break;
    }
  }

  function handleTouchStartRotate(event) {
    //console.log( 'handleTouchStartRotate' );
    rotateStart.set(event.touches[0].pageX, event.touches[0].pageY);
  }

  function handleTouchStartDolly(event) {
    //console.log( 'handleTouchStartDolly' );
    var dx = event.touches[0].pageX - event.touches[1].pageX;
    var dy = event.touches[0].pageY - event.touches[1].pageY;
    var distance = Math.sqrt(dx * dx + dy * dy);
    dollyStart.set(0, distance);
  }

  function handleTouchStartPan(event) {
    //console.log( 'handleTouchStartPan' );
    panStart.set(event.touches[0].pageX, event.touches[0].pageY);
  }

  function handleTouchMoveRotate(event) {
    //console.log( 'handleTouchMoveRotate' );
    rotateEnd.set(event.touches[0].pageX, event.touches[0].pageY);
    rotateDelta.subVectors(rotateEnd, rotateStart);
    var element = scope.domElement === document ? scope.domElement.body : scope.domElement; // rotating across whole screen goes 360 degrees around

    rotateLeft(2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed); // rotating up and down along whole screen attempts to go 360, but limited to 180

    rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed);
    rotateStart.copy(rotateEnd);
    scope.update();
  }

  function handleTouchMoveDolly(event) {
    //console.log( 'handleTouchMoveDolly' );
    var dx = event.touches[0].pageX - event.touches[1].pageX;
    var dy = event.touches[0].pageY - event.touches[1].pageY;
    var distance = Math.sqrt(dx * dx + dy * dy);
    dollyEnd.set(0, distance);
    dollyDelta.subVectors(dollyEnd, dollyStart);

    if (dollyDelta.y > 0) {
      dollyOut(getZoomScale());
    } else if (dollyDelta.y < 0) {
      dollyIn(getZoomScale());
    }

    dollyStart.copy(dollyEnd);
    scope.update();
  }

  function handleTouchMovePan(event) {
    //console.log( 'handleTouchMovePan' );
    panEnd.set(event.touches[0].pageX, event.touches[0].pageY);
    panDelta.subVectors(panEnd, panStart);
    pan(panDelta.x, panDelta.y);
    panStart.copy(panEnd);
    scope.update();
  }

  function handleTouchEnd(event) {} //console.log( 'handleTouchEnd' );
  //
  // event handlers - FSM: listen for events and reset state
  //


  function onMouseDown(event) {
    if (scope.enabled === false) return;
    event.preventDefault();

    switch (event.button) {
      case scope.mouseButtons.ORBIT:
        if (scope.enableRotate === false) return;
        handleMouseDownRotate(event);
        state = STATE.ROTATE;
        break;

      case scope.mouseButtons.ZOOM:
        if (scope.enableZoom === false) return;
        handleMouseDownDolly(event);
        state = STATE.DOLLY;
        break;

      case scope.mouseButtons.PAN:
        if (scope.enablePan === false) return;
        handleMouseDownPan(event);
        state = STATE.PAN;
        break;
    }

    if (state !== STATE.NONE) {
      document.addEventListener('mousemove', onMouseMove, false);
      document.addEventListener('mouseup', onMouseUp, false);
      scope.dispatchEvent(startEvent);
    }
  }

  function onMouseMove(event) {
    if (scope.enabled === false) return;
    event.preventDefault();

    switch (state) {
      case STATE.ROTATE:
        if (scope.enableRotate === false) return;
        handleMouseMoveRotate(event);
        break;

      case STATE.DOLLY:
        if (scope.enableZoom === false) return;
        handleMouseMoveDolly(event);
        break;

      case STATE.PAN:
        if (scope.enablePan === false) return;
        handleMouseMovePan(event);
        break;
    }
  }

  function onMouseUp(event) {
    if (scope.enabled === false) return;
    handleMouseUp(event);
    document.removeEventListener('mousemove', onMouseMove, false);
    document.removeEventListener('mouseup', onMouseUp, false);
    scope.dispatchEvent(endEvent);
    state = STATE.NONE;
  }

  function onMouseWheel(event) {
    if (scope.enabled === false || scope.enableZoom === false || state !== STATE.NONE && state !== STATE.ROTATE) return;
    event.preventDefault();
    event.stopPropagation();
    scope.dispatchEvent(startEvent);
    handleMouseWheel(event);
    scope.dispatchEvent(endEvent);
  }

  function onKeyDown(event) {
    if (scope.enabled === false || scope.enableKeys === false || scope.enablePan === false) return;
    handleKeyDown(event);
  }

  function onTouchStart(event) {
    if (scope.enabled === false) return;

    switch (event.touches.length) {
      case 1:
        // one-fingered touch: rotate
        if (scope.enableRotate === false) return;
        handleTouchStartRotate(event);
        state = STATE.TOUCH_ROTATE;
        break;

      case 2:
        // two-fingered touch: dolly
        if (scope.enableZoom === false) return;
        handleTouchStartDolly(event);
        state = STATE.TOUCH_DOLLY;
        break;

      case 3:
        // three-fingered touch: pan
        if (scope.enablePan === false) return;
        handleTouchStartPan(event);
        state = STATE.TOUCH_PAN;
        break;

      default:
        state = STATE.NONE;
    }

    if (state !== STATE.NONE) {
      scope.dispatchEvent(startEvent);
    }
  }

  function onTouchMove(event) {
    if (scope.enabled === false) return;
    event.preventDefault();
    event.stopPropagation();

    switch (event.touches.length) {
      case 1:
        // one-fingered touch: rotate
        if (scope.enableRotate === false) return;
        if (state !== STATE.TOUCH_ROTATE) return; // is this needed?...

        handleTouchMoveRotate(event);
        break;

      case 2:
        // two-fingered touch: dolly
        if (scope.enableZoom === false) return;
        if (state !== STATE.TOUCH_DOLLY) return; // is this needed?...

        handleTouchMoveDolly(event);
        break;

      case 3:
        // three-fingered touch: pan
        if (scope.enablePan === false) return;
        if (state !== STATE.TOUCH_PAN) return; // is this needed?...

        handleTouchMovePan(event);
        break;

      default:
        state = STATE.NONE;
    }
  }

  function onTouchEnd(event) {
    if (scope.enabled === false) return;
    handleTouchEnd(event);
    scope.dispatchEvent(endEvent);
    state = STATE.NONE;
  }

  function onContextMenu(event) {
    if (scope.enabled === false) return;
    event.preventDefault();
  } //


  scope.domElement.addEventListener('contextmenu', onContextMenu, false);
  scope.domElement.addEventListener('mousedown', onMouseDown, false);
  scope.domElement.addEventListener('wheel', onMouseWheel, false);
  scope.domElement.addEventListener('touchstart', onTouchStart, false);
  scope.domElement.addEventListener('touchend', onTouchEnd, false);
  scope.domElement.addEventListener('touchmove', onTouchMove, false);
  window.addEventListener('keydown', onKeyDown, false); // force an update at start

  this.update();
};

OrbitControls.prototype = Object.create(three__WEBPACK_IMPORTED_MODULE_0__["EventDispatcher"].prototype);
OrbitControls.prototype.constructor = OrbitControls;
Object.defineProperties(OrbitControls.prototype, {
  center: {
    get: function get() {
      console.warn('OrbitControls: .center has been renamed to .target');
      return this.target;
    }
  },
  // backward compatibility
  noZoom: {
    get: function get() {
      console.warn('OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.');
      return !this.enableZoom;
    },
    set: function set(value) {
      console.warn('OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.');
      this.enableZoom = !value;
    }
  },
  noRotate: {
    get: function get() {
      console.warn('OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.');
      return !this.enableRotate;
    },
    set: function set(value) {
      console.warn('OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.');
      this.enableRotate = !value;
    }
  },
  noPan: {
    get: function get() {
      console.warn('OrbitControls: .noPan has been deprecated. Use .enablePan instead.');
      return !this.enablePan;
    },
    set: function set(value) {
      console.warn('OrbitControls: .noPan has been deprecated. Use .enablePan instead.');
      this.enablePan = !value;
    }
  },
  noKeys: {
    get: function get() {
      console.warn('OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.');
      return !this.enableKeys;
    },
    set: function set(value) {
      console.warn('OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.');
      this.enableKeys = !value;
    }
  },
  staticMoving: {
    get: function get() {
      console.warn('OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.');
      return !this.enableDamping;
    },
    set: function set(value) {
      console.warn('OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.');
      this.enableDamping = !value;
    }
  },
  dynamicDampingFactor: {
    get: function get() {
      console.warn('OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.');
      return this.dampingFactor;
    },
    set: function set(value) {
      console.warn('OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.');
      this.dampingFactor = value;
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (OrbitControls);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(THREE) {/**
 * Loads a Wavefront .mtl file specifying materials
 * @class
 * @author angelxuanchang
 */
var MTLLoader = function MTLLoader(manager) {
  this.manager = manager !== undefined ? manager : THREE.DefaultLoadingManager;
};

MTLLoader.prototype = {
  constructor: MTLLoader,

  /**
   * Loads and parses a MTL asset from a URL.
   *
   * @param {String} url - URL to the MTL file.
   * @param {Function} [onLoad] - Callback invoked with the loaded object.
   * @param {Function} [onProgress] - Callback for download progress.
   * @param {Function} [onError] - Callback for download errors.
   *
   * @see setPath setTexturePath
   *
   * @note In order for relative texture references to resolve correctly
   * you must call setPath and/or setTexturePath explicitly prior to load.
   */
  load: function load(url, onLoad, onProgress, onError) {
    var scope = this;
    var loader = new THREE.FileLoader(this.manager);
    loader.setPath(this.path);
    loader.load(url, function (text) {
      onLoad(scope.parse(text));
    }, onProgress, onError);
  },

  /**
   * Set base path for resolving references.
   * If set this path will be prepended to each loaded and found reference.
   *
   * @see setTexturePath
   * @param {String} path
   *
   * @example
   *     mtlLoader.setPath( 'assets/obj/' );
   *     mtlLoader.load( 'my.mtl', ... );
   */
  setPath: function setPath(path) {
    this.path = path;
  },

  /**
   * Set base path for resolving texture references.
   * If set this path will be prepended found texture reference.
   * If not set and setPath is, it will be used as texture base path.
   *
   * @see setPath
   * @param {String} path
   *
   * @example
   *     mtlLoader.setPath( 'assets/obj/' );
   *     mtlLoader.setTexturePath( 'assets/textures/' );
   *     mtlLoader.load( 'my.mtl', ... );
   */
  setTexturePath: function setTexturePath(path) {
    this.texturePath = path;
  },
  setBaseUrl: function setBaseUrl(path) {
    console.warn('THREE.MTLLoader: .setBaseUrl() is deprecated. Use .setTexturePath( path ) for texture path or .setPath( path ) for general base path instead.');
    this.setTexturePath(path);
  },
  setCrossOrigin: function setCrossOrigin(value) {
    this.crossOrigin = value;
  },
  setMaterialOptions: function setMaterialOptions(value) {
    this.materialOptions = value;
  },

  /**
   * Parses a MTL file.
   *
   * @param {String} text - Content of MTL file
   * @return {THREE.MTLLoader.MaterialCreator}
   *
   * @see setPath setTexturePath
   *
   * @note In order for relative texture references to resolve correctly
   * you must call setPath and/or setTexturePath explicitly prior to parse.
   */
  parse: function parse(text) {
    var lines = text.split('\n');
    var info = {};
    var delimiter_pattern = /\s+/;
    var materialsInfo = {};

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      line = line.trim();

      if (line.length === 0 || line.charAt(0) === '#') {
        // Blank line or comment ignore
        continue;
      }

      var pos = line.indexOf(' ');
      var key = pos >= 0 ? line.substring(0, pos) : line;
      key = key.toLowerCase();
      var value = pos >= 0 ? line.substring(pos + 1) : '';
      value = value.trim();

      if (key === 'newmtl') {
        // New material
        info = {
          name: value
        };
        materialsInfo[value] = info;
      } else if (info) {
        if (key === 'ka' || key === 'kd' || key === 'ks') {
          var ss = value.split(delimiter_pattern, 3);
          info[key] = [parseFloat(ss[0]), parseFloat(ss[1]), parseFloat(ss[2])];
        } else {
          info[key] = value;
        }
      }
    }

    var materialCreator = new MTLLoader.MaterialCreator(this.texturePath || this.path, this.materialOptions);
    materialCreator.setCrossOrigin(this.crossOrigin);
    materialCreator.setManager(this.manager);
    materialCreator.setMaterials(materialsInfo);
    return materialCreator;
  }
};
/**
 * Create a new THREE-MTLLoader.MaterialCreator
 * @param baseUrl - Url relative to which textures are loaded
 * @param options - Set of options on how to construct the materials
 *                  side: Which side to apply the material
 *                        THREE.FrontSide (default), THREE.BackSide, THREE.DoubleSide
 *                  wrap: What type of wrapping to apply for textures
 *                        THREE.RepeatWrapping (default), THREE.ClampToEdgeWrapping, THREE.MirroredRepeatWrapping
 *                  normalizeRGB: RGBs need to be normalized to 0-1 from 0-255
 *                                Default: false, assumed to be already normalized
 *                  ignoreZeroRGBs: Ignore values of RGBs (Ka,Kd,Ks) that are all 0's
 *                                  Default: false
 */

MTLLoader.MaterialCreator = function (baseUrl, options) {
  this.baseUrl = baseUrl || '';
  this.options = options;
  this.materialsInfo = {};
  this.materials = {};
  this.materialsArray = [];
  this.nameLookup = {};
  this.side = this.options && this.options.side ? this.options.side : THREE.FrontSide;
  this.wrap = this.options && this.options.wrap ? this.options.wrap : THREE.RepeatWrapping;
};

MTLLoader.MaterialCreator.prototype = {
  constructor: MTLLoader.MaterialCreator,
  setCrossOrigin: function setCrossOrigin(value) {
    this.crossOrigin = value;
  },
  setManager: function setManager(value) {
    this.manager = value;
  },
  setMaterials: function setMaterials(materialsInfo) {
    this.materialsInfo = this.convert(materialsInfo);
    this.materials = {};
    this.materialsArray = [];
    this.nameLookup = {};
  },
  convert: function convert(materialsInfo) {
    if (!this.options) return materialsInfo;
    var converted = {};

    for (var mn in materialsInfo) {
      // Convert materials info into normalized form based on options
      var mat = materialsInfo[mn];
      var covmat = {};
      converted[mn] = covmat;

      for (var prop in mat) {
        var save = true;
        var value = mat[prop];
        var lprop = prop.toLowerCase();

        switch (lprop) {
          case 'kd':
          case 'ka':
          case 'ks':
            // Diffuse color (color under white light) using RGB values
            if (this.options && this.options.normalizeRGB) {
              value = [value[0] / 255, value[1] / 255, value[2] / 255];
            }

            if (this.options && this.options.ignoreZeroRGBs) {
              if (value[0] === 0 && value[1] === 0 && value[2] === 0) {
                // ignore
                save = false;
              }
            }

            break;

          default:
            break;
        }

        if (save) {
          covmat[lprop] = value;
        }
      }
    }

    return converted;
  },
  preload: function preload() {
    for (var mn in this.materialsInfo) {
      this.create(mn);
    }
  },
  getIndex: function getIndex(materialName) {
    return this.nameLookup[materialName];
  },
  getAsArray: function getAsArray() {
    var index = 0;

    for (var mn in this.materialsInfo) {
      this.materialsArray[index] = this.create(mn);
      this.nameLookup[mn] = index;
      index++;
    }

    return this.materialsArray;
  },
  create: function create(materialName) {
    if (this.materials[materialName] === undefined) {
      this.createMaterial_(materialName);
    }

    return this.materials[materialName];
  },
  createMaterial_: function createMaterial_(materialName) {
    // Create material
    var scope = this;
    var mat = this.materialsInfo[materialName];
    var params = {
      name: materialName,
      side: this.side
    };

    function resolveURL(baseUrl, url) {
      if (typeof url !== 'string' || url === '') return ''; // Absolute URL

      if (/^https?:\/\//i.test(url)) return url;
      return baseUrl + url;
    }

    function setMapForType(mapType, value) {
      if (params[mapType]) return; // Keep the first encountered texture

      var texParams = scope.getTextureParams(value, params);
      var map = scope.loadTexture(resolveURL(scope.baseUrl, texParams.url));
      map.repeat.copy(texParams.scale);
      map.offset.copy(texParams.offset);
      map.wrapS = scope.wrap;
      map.wrapT = scope.wrap;
      params[mapType] = map;
    }

    for (var prop in mat) {
      var value = mat[prop];
      if (value === '') continue;

      switch (prop.toLowerCase()) {
        // Ns is material specular exponent
        case 'kd':
          // Diffuse color (color under white light) using RGB values
          params.color = new THREE.Color().fromArray(value);
          break;

        case 'ks':
          // Specular color (color when light is reflected from shiny surface) using RGB values
          params.specular = new THREE.Color().fromArray(value);
          break;

        case 'map_kd':
          // Diffuse texture map
          setMapForType("map", value);
          break;

        case 'map_ks':
          // Specular map
          setMapForType("specularMap", value);
          break;

        case 'map_bump':
        case 'bump':
          // Bump texture map
          setMapForType("bumpMap", value);
          break;

        case 'ns':
          // The specular exponent (defines the focus of the specular highlight)
          // A high exponent results in a tight, concentrated highlight. Ns values normally range from 0 to 1000.
          params.shininess = parseFloat(value);
          break;

        case 'd':
          if (value < 1) {
            params.opacity = value;
            params.transparent = true;
          }

          break;

        case 'Tr':
          if (value > 0) {
            params.opacity = 1 - value;
            params.transparent = true;
          }

          break;

        default:
          break;
      }
    }

    this.materials[materialName] = new THREE.MeshPhongMaterial(params);
    return this.materials[materialName];
  },
  getTextureParams: function getTextureParams(value, matParams) {
    var texParams = {
      scale: new THREE.Vector2(1, 1),
      offset: new THREE.Vector2(0, 0)
    };
    var items = value.split(/\s+/);
    var pos;
    pos = items.indexOf('-bm');

    if (pos >= 0) {
      matParams.bumpScale = parseFloat(items[pos + 1]);
      items.splice(pos, 2);
    }

    pos = items.indexOf('-s');

    if (pos >= 0) {
      texParams.scale.set(parseFloat(items[pos + 1]), parseFloat(items[pos + 2]));
      items.splice(pos, 4); // we expect 3 parameters here!
    }

    pos = items.indexOf('-o');

    if (pos >= 0) {
      texParams.offset.set(parseFloat(items[pos + 1]), parseFloat(items[pos + 2]));
      items.splice(pos, 4); // we expect 3 parameters here!
    }

    texParams.url = items.join(' ').trim();
    return texParams;
  },
  loadTexture: function loadTexture(url, mapping, onLoad, onProgress, onError) {
    var texture;
    var loader = THREE.Loader.Handlers.get(url);
    var manager = this.manager !== undefined ? this.manager : THREE.DefaultLoadingManager;

    if (loader === null) {
      loader = new THREE.TextureLoader(manager);
    }

    if (loader.setCrossOrigin) loader.setCrossOrigin(this.crossOrigin);
    texture = loader.load(url, onLoad, onProgress, onError);
    if (mapping !== undefined) texture.mapping = mapping;
    return texture;
  }
};
module.exports = exports = MTLLoader;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(THREE) {/**
 * @class
 * @author mrdoob / http://mrdoob.com/
 */
var OBJLoader = function OBJLoader(manager) {
  this.manager = manager !== undefined ? manager : THREE.DefaultLoadingManager;
  this.materials = null;
  this.regexp = {
    // v float float float
    vertex_pattern: /^v\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)/,
    // vn float float float
    normal_pattern: /^vn\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)/,
    // vt float float
    uv_pattern: /^vt\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)/,
    // f vertex vertex vertex
    face_vertex: /^f\s+(-?\d+)\s+(-?\d+)\s+(-?\d+)(?:\s+(-?\d+))?/,
    // f vertex/uv vertex/uv vertex/uv
    face_vertex_uv: /^f\s+(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)(?:\s+(-?\d+)\/(-?\d+))?/,
    // f vertex/uv/normal vertex/uv/normal vertex/uv/normal
    face_vertex_uv_normal: /^f\s+(-?\d+)\/(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\/(-?\d+)(?:\s+(-?\d+)\/(-?\d+)\/(-?\d+))?/,
    // f vertex//normal vertex//normal vertex//normal
    face_vertex_normal: /^f\s+(-?\d+)\/\/(-?\d+)\s+(-?\d+)\/\/(-?\d+)\s+(-?\d+)\/\/(-?\d+)(?:\s+(-?\d+)\/\/(-?\d+))?/,
    // o object_name | g group_name
    object_pattern: /^[og]\s*(.+)?/,
    // s boolean
    smoothing_pattern: /^s\s+(\d+|on|off)/,
    // mtllib file_reference
    material_library_pattern: /^mtllib /,
    // usemtl material_name
    material_use_pattern: /^usemtl /
  };
};

OBJLoader.prototype = {
  constructor: OBJLoader,
  load: function load(url, onLoad, onProgress, onError) {
    var scope = this;
    var loader = new THREE.FileLoader(scope.manager);
    loader.setPath(this.path);
    loader.load(url, function (text) {
      onLoad(scope.parse(text));
    }, onProgress, onError);
  },
  setPath: function setPath(value) {
    this.path = value;
  },
  setMaterials: function setMaterials(materials) {
    this.materials = materials;
  },
  _createParserState: function _createParserState() {
    var state = {
      objects: [],
      object: {},
      vertices: [],
      normals: [],
      uvs: [],
      materialLibraries: [],
      startObject: function startObject(name, fromDeclaration) {
        // If the current object (initial from reset) is not from a g/o declaration in the parsed
        // file. We need to use it for the first parsed g/o to keep things in sync.
        if (this.object && this.object.fromDeclaration === false) {
          this.object.name = name;
          this.object.fromDeclaration = fromDeclaration !== false;
          return;
        }

        var previousMaterial = this.object && typeof this.object.currentMaterial === 'function' ? this.object.currentMaterial() : undefined;

        if (this.object && typeof this.object._finalize === 'function') {
          this.object._finalize(true);
        }

        this.object = {
          name: name || '',
          fromDeclaration: fromDeclaration !== false,
          geometry: {
            vertices: [],
            normals: [],
            uvs: []
          },
          materials: [],
          smooth: true,
          startMaterial: function startMaterial(name, libraries) {
            var previous = this._finalize(false); // New usemtl declaration overwrites an inherited material, except if faces were declared
            // after the material, then it must be preserved for proper MultiMaterial continuation.


            if (previous && (previous.inherited || previous.groupCount <= 0)) {
              this.materials.splice(previous.index, 1);
            }

            var material = {
              index: this.materials.length,
              name: name || '',
              mtllib: Array.isArray(libraries) && libraries.length > 0 ? libraries[libraries.length - 1] : '',
              smooth: previous !== undefined ? previous.smooth : this.smooth,
              groupStart: previous !== undefined ? previous.groupEnd : 0,
              groupEnd: -1,
              groupCount: -1,
              inherited: false,
              clone: function clone(index) {
                var cloned = {
                  index: typeof index === 'number' ? index : this.index,
                  name: this.name,
                  mtllib: this.mtllib,
                  smooth: this.smooth,
                  groupStart: 0,
                  groupEnd: -1,
                  groupCount: -1,
                  inherited: false
                };
                cloned.clone = this.clone.bind(cloned);
                return cloned;
              }
            };
            this.materials.push(material);
            return material;
          },
          currentMaterial: function currentMaterial() {
            if (this.materials.length > 0) {
              return this.materials[this.materials.length - 1];
            }

            return undefined;
          },
          _finalize: function _finalize(end) {
            var lastMultiMaterial = this.currentMaterial();

            if (lastMultiMaterial && lastMultiMaterial.groupEnd === -1) {
              lastMultiMaterial.groupEnd = this.geometry.vertices.length / 3;
              lastMultiMaterial.groupCount = lastMultiMaterial.groupEnd - lastMultiMaterial.groupStart;
              lastMultiMaterial.inherited = false;
            } // Ignore objects tail materials if no face declarations followed them before a new o/g started.


            if (end && this.materials.length > 1) {
              for (var mi = this.materials.length - 1; mi >= 0; mi--) {
                if (this.materials[mi].groupCount <= 0) {
                  this.materials.splice(mi, 1);
                }
              }
            } // Guarantee at least one empty material, this makes the creation later more straight forward.


            if (end && this.materials.length === 0) {
              this.materials.push({
                name: '',
                smooth: this.smooth
              });
            }

            return lastMultiMaterial;
          }
        }; // Inherit previous objects material.
        // Spec tells us that a declared material must be set to all objects until a new material is declared.
        // If a usemtl declaration is encountered while this new object is being parsed, it will
        // overwrite the inherited material. Exception being that there was already face declarations
        // to the inherited material, then it will be preserved for proper MultiMaterial continuation.

        if (previousMaterial && previousMaterial.name && typeof previousMaterial.clone === "function") {
          var declared = previousMaterial.clone(0);
          declared.inherited = true;
          this.object.materials.push(declared);
        }

        this.objects.push(this.object);
      },
      finalize: function finalize() {
        if (this.object && typeof this.object._finalize === 'function') {
          this.object._finalize(true);
        }
      },
      parseVertexIndex: function parseVertexIndex(value, len) {
        var index = parseInt(value, 10);
        return (index >= 0 ? index - 1 : index + len / 3) * 3;
      },
      parseNormalIndex: function parseNormalIndex(value, len) {
        var index = parseInt(value, 10);
        return (index >= 0 ? index - 1 : index + len / 3) * 3;
      },
      parseUVIndex: function parseUVIndex(value, len) {
        var index = parseInt(value, 10);
        return (index >= 0 ? index - 1 : index + len / 2) * 2;
      },
      addVertex: function addVertex(a, b, c) {
        var src = this.vertices;
        var dst = this.object.geometry.vertices;
        dst.push(src[a + 0]);
        dst.push(src[a + 1]);
        dst.push(src[a + 2]);
        dst.push(src[b + 0]);
        dst.push(src[b + 1]);
        dst.push(src[b + 2]);
        dst.push(src[c + 0]);
        dst.push(src[c + 1]);
        dst.push(src[c + 2]);
      },
      addVertexLine: function addVertexLine(a) {
        var src = this.vertices;
        var dst = this.object.geometry.vertices;
        dst.push(src[a + 0]);
        dst.push(src[a + 1]);
        dst.push(src[a + 2]);
      },
      addNormal: function addNormal(a, b, c) {
        var src = this.normals;
        var dst = this.object.geometry.normals;
        dst.push(src[a + 0]);
        dst.push(src[a + 1]);
        dst.push(src[a + 2]);
        dst.push(src[b + 0]);
        dst.push(src[b + 1]);
        dst.push(src[b + 2]);
        dst.push(src[c + 0]);
        dst.push(src[c + 1]);
        dst.push(src[c + 2]);
      },
      addUV: function addUV(a, b, c) {
        var src = this.uvs;
        var dst = this.object.geometry.uvs;
        dst.push(src[a + 0]);
        dst.push(src[a + 1]);
        dst.push(src[b + 0]);
        dst.push(src[b + 1]);
        dst.push(src[c + 0]);
        dst.push(src[c + 1]);
      },
      addUVLine: function addUVLine(a) {
        var src = this.uvs;
        var dst = this.object.geometry.uvs;
        dst.push(src[a + 0]);
        dst.push(src[a + 1]);
      },
      addFace: function addFace(a, b, c, d, ua, ub, uc, ud, na, nb, nc, nd) {
        var vLen = this.vertices.length;
        var ia = this.parseVertexIndex(a, vLen);
        var ib = this.parseVertexIndex(b, vLen);
        var ic = this.parseVertexIndex(c, vLen);
        var id;

        if (d === undefined) {
          this.addVertex(ia, ib, ic);
        } else {
          id = this.parseVertexIndex(d, vLen);
          this.addVertex(ia, ib, id);
          this.addVertex(ib, ic, id);
        }

        if (ua !== undefined) {
          var uvLen = this.uvs.length;
          ia = this.parseUVIndex(ua, uvLen);
          ib = this.parseUVIndex(ub, uvLen);
          ic = this.parseUVIndex(uc, uvLen);

          if (d === undefined) {
            this.addUV(ia, ib, ic);
          } else {
            id = this.parseUVIndex(ud, uvLen);
            this.addUV(ia, ib, id);
            this.addUV(ib, ic, id);
          }
        }

        if (na !== undefined) {
          // Normals are many times the same. If so, skip function call and parseInt.
          var nLen = this.normals.length;
          ia = this.parseNormalIndex(na, nLen);
          ib = na === nb ? ia : this.parseNormalIndex(nb, nLen);
          ic = na === nc ? ia : this.parseNormalIndex(nc, nLen);

          if (d === undefined) {
            this.addNormal(ia, ib, ic);
          } else {
            id = this.parseNormalIndex(nd, nLen);
            this.addNormal(ia, ib, id);
            this.addNormal(ib, ic, id);
          }
        }
      },
      addLineGeometry: function addLineGeometry(vertices, uvs) {
        this.object.geometry.type = 'Line';
        var vLen = this.vertices.length;
        var uvLen = this.uvs.length;

        for (var vi = 0, l = vertices.length; vi < l; vi++) {
          this.addVertexLine(this.parseVertexIndex(vertices[vi], vLen));
        }

        for (var uvi = 0, l = uvs.length; uvi < l; uvi++) {
          this.addUVLine(this.parseUVIndex(uvs[uvi], uvLen));
        }
      }
    };
    state.startObject('', false);
    return state;
  },
  parse: function parse(text) {
    //console.time( 'OBJLoader' );
    var state = this._createParserState();

    if (text.indexOf('\r\n') !== -1) {
      // This is faster than String.split with regex that splits on both
      text = text.replace(/\r\n/g, '\n');
    }

    if (text.indexOf('\\\n') !== -1) {
      // join lines separated by a line continuation character (\)
      text = text.replace(/\\\n/g, '');
    }

    var lines = text.split('\n');
    var line = '',
        lineFirstChar = '',
        lineSecondChar = '';
    var lineLength = 0;
    var result = []; // Faster to just trim left side of the line. Use if available.

    var trimLeft = typeof ''.trimLeft === 'function';

    for (var i = 0, l = lines.length; i < l; i++) {
      line = lines[i];
      line = trimLeft ? line.trimLeft() : line.trim();
      lineLength = line.length;
      if (lineLength === 0) continue;
      lineFirstChar = line.charAt(0); // @todo invoke passed in handler if any

      if (lineFirstChar === '#') continue;

      if (lineFirstChar === 'v') {
        lineSecondChar = line.charAt(1);

        if (lineSecondChar === ' ' && (result = this.regexp.vertex_pattern.exec(line)) !== null) {
          // 0                  1      2      3
          // ["v 1.0 2.0 3.0", "1.0", "2.0", "3.0"]
          state.vertices.push(parseFloat(result[1]), parseFloat(result[2]), parseFloat(result[3]));
        } else if (lineSecondChar === 'n' && (result = this.regexp.normal_pattern.exec(line)) !== null) {
          // 0                   1      2      3
          // ["vn 1.0 2.0 3.0", "1.0", "2.0", "3.0"]
          state.normals.push(parseFloat(result[1]), parseFloat(result[2]), parseFloat(result[3]));
        } else if (lineSecondChar === 't' && (result = this.regexp.uv_pattern.exec(line)) !== null) {
          // 0               1      2
          // ["vt 0.1 0.2", "0.1", "0.2"]
          state.uvs.push(parseFloat(result[1]), parseFloat(result[2]));
        } else {
          throw new Error("Unexpected vertex/normal/uv line: '" + line + "'");
        }
      } else if (lineFirstChar === "f") {
        if ((result = this.regexp.face_vertex_uv_normal.exec(line)) !== null) {
          // f vertex/uv/normal vertex/uv/normal vertex/uv/normal
          // 0                        1    2    3    4    5    6    7    8    9   10         11         12
          // ["f 1/1/1 2/2/2 3/3/3", "1", "1", "1", "2", "2", "2", "3", "3", "3", undefined, undefined, undefined]
          state.addFace(result[1], result[4], result[7], result[10], result[2], result[5], result[8], result[11], result[3], result[6], result[9], result[12]);
        } else if ((result = this.regexp.face_vertex_uv.exec(line)) !== null) {
          // f vertex/uv vertex/uv vertex/uv
          // 0                  1    2    3    4    5    6   7          8
          // ["f 1/1 2/2 3/3", "1", "1", "2", "2", "3", "3", undefined, undefined]
          state.addFace(result[1], result[3], result[5], result[7], result[2], result[4], result[6], result[8]);
        } else if ((result = this.regexp.face_vertex_normal.exec(line)) !== null) {
          // f vertex//normal vertex//normal vertex//normal
          // 0                     1    2    3    4    5    6   7          8
          // ["f 1//1 2//2 3//3", "1", "1", "2", "2", "3", "3", undefined, undefined]
          state.addFace(result[1], result[3], result[5], result[7], undefined, undefined, undefined, undefined, result[2], result[4], result[6], result[8]);
        } else if ((result = this.regexp.face_vertex.exec(line)) !== null) {
          // f vertex vertex vertex
          // 0            1    2    3   4
          // ["f 1 2 3", "1", "2", "3", undefined]
          state.addFace(result[1], result[2], result[3], result[4]);
        } else {
          throw new Error("Unexpected face line: '" + line + "'");
        }
      } else if (lineFirstChar === "l") {
        var lineParts = line.substring(1).trim().split(" ");
        var lineVertices = [],
            lineUVs = [];

        if (line.indexOf("/") === -1) {
          lineVertices = lineParts;
        } else {
          for (var li = 0, llen = lineParts.length; li < llen; li++) {
            var parts = lineParts[li].split("/");
            if (parts[0] !== "") lineVertices.push(parts[0]);
            if (parts[1] !== "") lineUVs.push(parts[1]);
          }
        }

        state.addLineGeometry(lineVertices, lineUVs);
      } else if ((result = this.regexp.object_pattern.exec(line)) !== null) {
        // o object_name
        // or
        // g group_name
        // WORKAROUND: https://bugs.chromium.org/p/v8/issues/detail?id=2869
        // var name = result[ 0 ].substr( 1 ).trim();
        var name = (" " + result[0].substr(1).trim()).substr(1);
        state.startObject(name);
      } else if (this.regexp.material_use_pattern.test(line)) {
        // material
        state.object.startMaterial(line.substring(7).trim(), state.materialLibraries);
      } else if (this.regexp.material_library_pattern.test(line)) {
        // mtl file
        state.materialLibraries.push(line.substring(7).trim());
      } else if ((result = this.regexp.smoothing_pattern.exec(line)) !== null) {
        // smooth shading
        // @todo Handle files that have varying smooth values for a set of faces inside one geometry,
        // but does not define a usemtl for each face set.
        // This should be detected and a dummy material created (later MultiMaterial and geometry groups).
        // This requires some care to not create extra material on each smooth value for "normal" obj files.
        // where explicit usemtl defines geometry groups.
        // Example asset: examples/models/obj/cerberus/Cerberus.obj
        var value = result[1].trim().toLowerCase();
        state.object.smooth = value === '1' || value === 'on';
        var material = state.object.currentMaterial();

        if (material) {
          material.smooth = state.object.smooth;
        }
      } else {
        // Handle null terminated files without exception
        if (line === '\0') continue;
        throw new Error("Unexpected line: '" + line + "'");
      }
    }

    state.finalize();
    var container = new THREE.Group();
    container.materialLibraries = [].concat(state.materialLibraries);

    for (var i = 0, l = state.objects.length; i < l; i++) {
      var object = state.objects[i];
      var geometry = object.geometry;
      var materials = object.materials;
      var isLine = geometry.type === 'Line'; // Skip o/g line declarations that did not follow with any faces

      if (geometry.vertices.length === 0) continue;
      var buffergeometry = new THREE.BufferGeometry();
      buffergeometry.addAttribute('position', new THREE.BufferAttribute(new Float32Array(geometry.vertices), 3));

      if (geometry.normals.length > 0) {
        buffergeometry.addAttribute('normal', new THREE.BufferAttribute(new Float32Array(geometry.normals), 3));
      } else {
        buffergeometry.computeVertexNormals();
      }

      if (geometry.uvs.length > 0) {
        buffergeometry.addAttribute('uv', new THREE.BufferAttribute(new Float32Array(geometry.uvs), 2));
      } // Create materials


      var createdMaterials = [];

      for (var mi = 0, miLen = materials.length; mi < miLen; mi++) {
        var sourceMaterial = materials[mi];
        var material = undefined;

        if (this.materials !== null) {
          material = this.materials.create(sourceMaterial.name); // mtl etc. loaders probably can't create line materials correctly, copy properties to a line material.

          if (isLine && material && !(material instanceof THREE.LineBasicMaterial)) {
            var materialLine = new THREE.LineBasicMaterial();
            materialLine.copy(material);
            materialLine.lights = false;
            material = materialLine;
          }
        }

        if (!material) {
          material = !isLine ? new THREE.MeshPhongMaterial() : new THREE.LineBasicMaterial();
          material.name = sourceMaterial.name;
        }

        material.flatShading = sourceMaterial.smooth ? THREE.SmoothShading : THREE.FlatShading;
        createdMaterials.push(material);
      } // Create mesh


      var mesh;

      if (createdMaterials.length > 1) {
        for (var mi = 0, miLen = materials.length; mi < miLen; mi++) {
          var sourceMaterial = materials[mi];
          buffergeometry.addGroup(sourceMaterial.groupStart, sourceMaterial.groupCount, mi);
        }

        var multiMaterial = new THREE.MultiMaterial(createdMaterials);
        mesh = !isLine ? new THREE.Mesh(buffergeometry, multiMaterial) : new THREE.LineSegments(buffergeometry, multiMaterial);
      } else {
        mesh = !isLine ? new THREE.Mesh(buffergeometry, createdMaterials[0]) : new THREE.LineSegments(buffergeometry, createdMaterials[0]);
      }

      mesh.name = object.name;
      container.add(mesh);
    } //console.timeEnd( 'OBJLoader' );


    return container;
  }
};
module.exports = exports = OBJLoader;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(THREE) {/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Camera_CameraControl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _Layers_Layer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);






var PigeonGLConstants = __webpack_require__(9);



/**
 * 信鸽地图地图核心类，用于生成3d空间地图底层
 */

var Map =
/*#__PURE__*/
function (_Layer) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Map, _Layer);

  /**
   * 地图构造函数
   * @constructor
   * @param {Object} map - 地图绘制对象,目前支持高德,mapbox或者纯空间
   * @param {Number} map.width - 地图宽度, default:1000
   * @param {Number} map.height - 地图高度, default:600
   * @param {Number} map.rotation - 地图旋转角度, default:60
   * @param {Number} map.pitch - 地图俯视角度, default:45
   * @param {Array} map.center - 地图默认中心位置经纬度, default:[0,0]
   * @param {Number} map.zoom - 地图缩放级别,default:21
   * @param {dom} map.container - 容器dom
   */
  function Map(map) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Map);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Map).call(this));
    _this._layerid = 0;
    _this.zIndex = 1000;
    _this.status = "running";
    _this.type = "gps";
    _this.layers = [];
    _this.clock = new THREE.Clock();

    _this.clock.start();

    _this.initMap(map);

    _this.initWorld();

    if (_this.map.hasGround) {
      _this.addGround();
    }

    _this.update();

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Map, [{
    key: "initMap",
    value: function initMap(map) {
      this.map = Object.assign({
        rotation: 0,
        width: 1000,
        height: 600,
        pitch: 45,
        zoom: 21,
        center: [0, 0]
      }, map);
    }
  }, {
    key: "initWorld",
    value: function initWorld() {
      // Set up a THREE.js scene
      this.renderer = new THREE.WebGLRenderer(Object.assign({
        alpha: true,
        antialias: true
      }, this.map.rendererOptions));
      this.renderer.setSize(this.map.width, this.map.height);
      this.map.container.appendChild(this.renderer.domElement);
      this.renderer.domElement.style["position"] = "relative";
      this.renderer.domElement.style["pointer-events"] = "none";
      this.renderer.domElement.style["z-index"] = ++this.zIndex;
      /**
       * @property {Object} scene - this.scene为three.js场景
       */

      this.scene = new THREE.Scene(Object.assign({}, this.map.sceneOptions || {}));
      /**
       * @property {Object} camera - this.camera.js场景
       */

      this.camera = new THREE.PerspectiveCamera(45, this.map.width / this.map.height, 0.000001, 5000000000);
      /**
       * @property {Object} layers - 图层集合
       */

      this.layers = [];
      /**
       * @property {Object} world - this.world为世界模型组，所有模型被添加到该组内
       */

      this.world = new THREE.Group();
      this.scene.add(this.world);
      this.camera.position.z = 10;
      this.camera.position.x = this.map.center[0];
      this.camera.position.y = this.map.center[1];
      /**
       * @property {CameraControl} cameraControl - 摄像机控制类
       */

      this.cameraControl = new _Camera_CameraControl_js__WEBPACK_IMPORTED_MODULE_5__["default"](this);
    }
  }, {
    key: "moveTo",
    value: function moveTo(obj, coord) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var scale = options.preScale;
      var geoGroup;
      if (obj.userData.isGeoGroup) geoGroup = obj;else if (obj.parent && obj.parent.userData.isGeoGroup) geoGroup = obj.parent;
      geoGroup.scale.copy(scale || 1);
      geoGroup.position.copy(this.projectToWorld(coord));
      obj.coordinates = coord;
      return obj;
    }
    /**
     * 自动刷新渲染，可以改变this.status=='top',停止自动刷新
     * @parma {Number} delta - 每帧时间差，用来保持不同机器动画速度相同,用不到不必搭理
     */

  }, {
    key: "update",
    value: function update() {
      var _this2 = this;

      var delta = this.clock.getDelta(); //子layer更新

      for (var x in this.layers) {
        if (this.layers[x].update) {
          this.layers[x].update(delta);
        }
      }

      this.renderer.render(this.scene, this.camera);
      var device;

      if (device = this.renderer.vr.getDevice()) {
        this.animationframe = device.requestAnimationFrame(function (timestamp) {
          if (_this2.status != "stop") _this2.update(delta, timestamp);
        });
        return;
      }

      this.animationframe = requestAnimationFrame(function (timestamp) {
        if (_this2.status != "stop") _this2.update(delta, timestamp);
      });
    }
  }, {
    key: "projectToWorld",
    value: function projectToWorld(coord) {
      return {
        x: coord[0],
        y: coord[1],
        z: coord[2] || 0
      };
    }
  }, {
    key: "unprojectFromWorld",
    value: function unprojectFromWorld(world) {
      return [world.x, world.y, world.z];
    }
    /**
     * 经纬度转换屏幕坐标
     * @param {Array} coords - 经纬度 [lng,lat]
     * @return {Object} position - 返回距离容器左上角的距离 {x,y}
     */

  }, {
    key: "projectToScreen",
    value: function projectToScreen(param) {
      var coords = Object.assign({}, param);
      coords[1] = -coords[1];
      var world = this.projectToWorld(coords);
      var worldPosition = this.world.getWorldPosition().clone();
      var standarVector = worldPosition.add(world).project(this.camera); //世界坐标转设备坐标

      var a = this.map.width / 2;
      var b = this.map.height / 2;
      var x = Math.round(standarVector.x * a + a); //标准设备坐标转屏幕坐标

      var y = this.map.height - Math.round(standarVector.y * b + b); //标准设备坐标转屏幕坐标

      return {
        x: x,
        y: y
      };
    }
    /**
     * 屏幕坐标转转经纬度
     * @param {Object} pixel - 屏幕坐标 {x,y}
     * @return {Array} coord - [x,y]
     */

  }, {
    key: "unprojectFromScreen",
    value: function unprojectFromScreen(pixel) {
      var a = this.map.width / 2;
      var b = this.map.height / 2;
      var standX = -(pixel.x - a) / a;
      var standY = (this.map.height - pixel.y - b) / b;
      var standarVector = new THREE.Vector3(standX, standY, 0);
      var world = standarVector.unproject(this.camera);
      var worldPosition = this.world.getWorldPosition().clone();
      var coord = this.unprojectFromWorld(world.sub(worldPosition));
      coord[1] = -coord[1];
      return coord;
    }
    /**
     * 添加物体到3d空间
     * @param {Object} obj - Three.js的mesh
     * @param {coord} Array - 物体的经纬度 {lng,lat}
     * @param {Object} options - 配置
     * @param {Boolean} options.scaleToLatitude - 是否按照1px = 1m的比例进行缩放 默认true
     * @param {Number} options.preScale - 改变像素到米的换算比例 默认1
     * @return {Object} obj -物体mesh
     */

  }, {
    key: "add",
    value: function add(obj, coord, options) {
      var geoGroup = new THREE.Group();
      geoGroup.userData.isGeoGroup = true;
      geoGroup.add(obj);
      this.world.add(geoGroup);
      this.moveTo(obj, coord, options);
      return obj;
    }
    /**
     * 添加默认地面
     */

  }, {
    key: "addGround",
    value: function addGround() {
      var geometry = new THREE.PlaneGeometry(PigeonGLConstants.WORLD_SIZE, PigeonGLConstants.WORLD_SIZE);
      var material = new THREE.MeshPhongMaterial({
        color: this.map.groundColor || 0x666666,
        shininess: 30
      });
      var plane = new THREE.Mesh(geometry, material); // plane.position.x = plane.position.y = - PigeonGLConstants.WORLD_SIZE/2;

      plane.position.z = -0.01;
      this.add(plane, this.map.center, {
        scaleToLatitude: true,
        preScale: 100
      });
    }
    /**
     * 移除物体mesh
     * @param {Object} obj - mesh
     */

  }, {
    key: "remove",
    value: function remove(obj) {
      this.world.remove(obj);
    }
    /**
     * 设置默认光源
     */

  }, {
    key: "setupDefaultLights",
    value: function setupDefaultLights() {
      this.scene.add(new THREE.AmbientLight(0xcccccc));
      var sunlight = new THREE.DirectionalLight(0xffffff, 0.5);
      sunlight.position.set(0, 800, 1000);
      sunlight.matrixWorldNeedsUpdate = true;
      this.world.add(sunlight);
    }
  }]);

  return Map;
}(_Layers_Layer_js__WEBPACK_IMPORTED_MODULE_6__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Map);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 16 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(THREE) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prettyPrintMatrix", function() { return prettyPrintMatrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makePerspectiveMatrix", function() { return makePerspectiveMatrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radify", function() { return radify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "degreeify", function() { return degreeify; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);


function prettyPrintMatrix(uglymatrix) {
  for (var s = 0; s < 4; s++) {
    var quartet = [uglymatrix[s], uglymatrix[s + 4], uglymatrix[s + 8], uglymatrix[s + 12]]; // console.log(quartet.map(function(num){return num.toFixed(4)}))
  }
}

function makePerspectiveMatrix(fovy, aspect, near, far) {
  var out = new THREE.Matrix4();
  var f = 1.0 / Math.tan(fovy / 2),
      nf = 1 / (near - far);
  out.elements[0] = f / aspect;
  out.elements[1] = 0;
  out.elements[2] = 0;
  out.elements[3] = 0;
  out.elements[4] = 0;
  out.elements[5] = f;
  out.elements[6] = 0;
  out.elements[7] = 0;
  out.elements[8] = 0;
  out.elements[9] = 0;
  out.elements[10] = (far + near) * nf;
  out.elements[11] = -1;
  out.elements[12] = 0;
  out.elements[13] = 0;
  out.elements[14] = 2 * far * near * nf;
  out.elements[15] = 0;
  return out;
} //gimme radians


function radify(deg) {
  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(deg) === 'object') {
    return deg.map(function (degree) {
      return Math.PI * 2 * degree / 360;
    });
  } else return Math.PI * 2 * deg / 360;
} //gimme degrees


function degreeify(rad) {
  return 360 * rad / (Math.PI * 2);
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);






/**
 * 第三人称视角图层
 * @extends Layer
 */

var ThirdPersonLayer =
/*#__PURE__*/
function (_Layer) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ThirdPersonLayer, _Layer);

  /**
   * 构造函数
   * @param {Object} target - 需要摄像机跟随的物体
   * @param {Number} viewRotation - 观看视角（deg）
   * @param {Number} targetRotation - 物体初始旋转角度，用来配合摄像机位置  (deg)
   */
  function ThirdPersonLayer(config) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ThirdPersonLayer);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ThirdPersonLayer).call(this, config));
    _this.defaultParams = {
      target: null,
      //跟踪物体
      viewRotation: 0,
      //观看视角
      targetRotation: 0,
      //观看物体默认旋转角度
      autoUpdate: false,
      lockRotation: true //锁定视角

    };

    for (var x in _this.defaultParams) {
      if (typeof _this[x] == "undefined") {
        _this[x] = _this.defaultParams[x];
      }
    }

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ThirdPersonLayer, [{
    key: "onAdd",
    //图层添加之后的处理函数
    value: function onAdd(map) {
      this.pigeonMap = map;
      this.initCamera();
    }
  }, {
    key: "initCamera",
    value: function initCamera() {}
  }, {
    key: "update",
    value: function update() {
      if (this.autoUpdate) this.updateCamera();
    }
    /**
     * 更新相机，物体移动后需要更新相机，重新计算相机位置
     */

  }, {
    key: "updateCamera",
    value: function updateCamera(rotation) {
      if (!this.target) return false;
      var lnglat = this.target.coordinates;

      if (this.lockRotation) {
        if (!rotation) rotation = this.target.rotation.z * 180 / Math.PI + this.targetRotation + this.viewRotation;
        this.pigeonMap.cameraControl.setRotation(rotation);
      }

      this.pigeonMap.cameraControl.setCenter(lnglat);
      this.pigeonMap.cameraControl.updateCamera();
    }
  }]);

  return ThirdPersonLayer;
}(_Layer_js__WEBPACK_IMPORTED_MODULE_5__["default"]);

;
/* harmony default export */ __webpack_exports__["default"] = (ThirdPersonLayer);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);






/**
 * 地图控制类
 * @class
 * @extends Layer
 */

var MapControl =
/*#__PURE__*/
function (_Layer) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(MapControl, _Layer);

  /**
   * 构造函数
   * @param {Object} config - config
   * @param {number} config.moveSpeed - 移动速度
   * @param {number} config.pitchSpeed - 角度改变速度
   * @param {number} config.rotateSpeed - 旋转速度
   */
  function MapControl(config) {
    var _this2;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, MapControl);

    _this2 = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(MapControl).call(this, config));
    _this2.defaultParams = {
      zoomBase: 600,
      moveSpeed: 1,
      pitchSpeed: 0.1,
      rotateSpeed: 0.15
    };

    for (var x in _this2.defaultParams) {
      if (typeof _this2[x] == "undefined") {
        _this2[x] = _this2.defaultParams[x];
      }
    }

    return _this2;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(MapControl, [{
    key: "onAdd",
    value: function onAdd(map) {
      var _this = this;

      this.pigeonMap = map;
      this.map = this.pigeonMap.map; //用户配置或真实地图

      this.cameraControl = this.pigeonMap.cameraControl;
      this.initConfig();
      this.listenEvents(); //添加相机更新函数

      this.on("change", function () {
        _this.pigeonMap.fire("change");

        _this.cameraControl.update(); //更新用户参数为相机参数

      });
    }
  }, {
    key: "initConfig",
    value: function initConfig() {}
  }, {
    key: "listenEvents",

    /**
     * 监听事件
     */
    value: function listenEvents() {
      var _this3 = this;

      this.onDown = function (event) {
        if (event.button == 0) {
          //左键
          _this3.mouseStatus = 'left';
        } else if (event.button == 2) {
          //右键
          _this3.mouseStatus = 'right';
        }

        _this3.mouseDownPosition = {
          x: event.clientX,
          y: event.clientY
        };

        _this3.map.container.addEventListener('mousemove', _this3.onMove);
      };

      this.onUp = function (event) {
        _this3.mouseStatus = false;

        _this3.map.container.removeEventListener('mousemove', _this3.onMove);
      };

      this.onMove = function (event) {
        if (!_this3.mouseStatus) {
          return;
        }

        if (_this3.mouseStatus == 'left') {
          var yDis = event.clientY - _this3.mouseDownPosition.y;
          var xDis = event.clientX - _this3.mouseDownPosition.x;
          var distance = Math.sqrt(Math.pow(xDis, 2) + Math.pow(yDis, 2));
          if (distance < 0.1) return false;

          var rotation = (xDis > 0 ? -1 : 1) * Math.asin(yDis / distance) + _this3.map.transform.angle;

          var ratio = _this3.moveSpeed * (_this3.map.zoom / (_this3.zoomBase + Math.pow(_this3.map.zoom, 2)));
          _this3.map.center[0] += (xDis > 0 ? -1 : 1) * (distance * Math.cos(rotation)) * ratio;
          _this3.map.center[1] += (xDis > 0 ? -1 : 1) * (distance * Math.sin(rotation)) * ratio;

          _this3.cameraControl.update();
          /**
           * 地图移动
           * @event MapControl#move 
           * @property {Object} event
           */


          _this3.fire("move", event); //地图移动


          _this3.fire("change", event);
        } else if (_this3.mouseStatus == 'right') {
          _this3.map.pitch += _this3.pitchSpeed * (event.clientY - _this3.mouseDownPosition.y);

          if (_this3.map.pitch > 90) {
            _this3.map.pitch = 90;
          } else if (_this3.map.pitch < 0) {
            _this3.map.pitch = 0;
          }

          _this3.map.rotation -= _this3.rotateSpeed * (event.clientX - _this3.mouseDownPosition.x);

          _this3.cameraControl.update();
          /**
           * 地图旋转
           * @event MapControl#rotate
           * @property {Object} event 
           */


          _this3.fire("rotate", event); //地图x旋转


          _this3.fire("change", event);
        }

        _this3.mouseDownPosition = {
          x: event.clientX,
          y: event.clientY
        };
      };

      this.onWheel = function (event) {
        _this3.map.zoom -= event.deltaY * _this3.map.zoom / _this3.zoomBase;
        if (_this3.map.zoom < 5) return _this3.map.zoom = 5;

        _this3.cameraControl.update();

        event.preventDefault();
        /**
         * 地图缩放
         * @event MapControl#zoom
         * @property {Object} event - 原生event对象
         */

        _this3.fire("zoom", event); //地图缩放

        /**
         * 地图状态发生改变，发生操作时触发
         * @event MapControl#change
         * @property {Object} event - 原生event对象
         */


        _this3.fire("change", event);
      };

      this.onContextmenu = function onContextmenu(e) {
        e.preventDefault();
        e.stopPropagation();
      };

      this.map.container.addEventListener('mousedown', this.onDown);
      this.map.container.addEventListener('mouseup', this.onUp);
      this.map.container.addEventListener('mousemove', this.onMove);
      this.map.container.addEventListener('wheel', this.onWheel);
      this.map.container.addEventListener('contextmenu', this.onContextmenu);
    }
  }, {
    key: "removeListenr",

    /**
     * 移除所有监听事件
     */
    value: function removeListenr() {
      this.map.container.removeEventListener('mousedown', this.onDown);
      this.map.container.removeEventListener('mouseup', this.onUp);
      this.map.container.removeEventListener('mousemove', this.onMove);
      this.map.container.removeEventListener('wheel', this.onWheel);
      this.map.container.removeEventListener('contextmenu', this.onContextmenu);
    }
  }]);

  return MapControl;
}(_Layer_js__WEBPACK_IMPORTED_MODULE_5__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (MapControl);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);






/**
 * 文字图层类
 * @extends Layer
 */

var TextLayer =
/*#__PURE__*/
function (_Layer) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(TextLayer, _Layer);

  function TextLayer(config) {
    var _this2;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, TextLayer);

    _this2 = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(TextLayer).call(this, config));
    _this2.defaultParams = {
      fontSize: '14px',
      color: '#000000',
      canvasRender: false
    };
    _this2.texts = [];
    _this2.textId = 0;

    for (var x in _this2.defaultParams) {
      if (typeof _this2[x] == "undefined") {
        _this2[x] = _this2.defaultParams[x];
      }
    }

    return _this2;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(TextLayer, [{
    key: "onAdd",
    //图层添加之后的处理函数
    value: function onAdd(map) {
      this.pigeonMap = map;

      if (!this.canvasRender) {
        this.initDom();
      } else {
        this.initCanvas();
      }

      var _this = this;

      function change() {
        _this.updateText();
      }

      this.change = change;
      this.pigeonMap.on("change", change);
    }
  }, {
    key: "initDom",
    value: function initDom() {
      this.container = this.pigeonMap.map.container;
      var div = document.createElement('div');
      div.id = 'text_layer_' + this.id;
      div.className = 'pigeonGL-text-layer';
      div.setAttribute("width", this.pigeonMap.map.width);
      div.setAttribute("height", this.pigeonMap.map.height);
      div.style.position = 'absolute';
      div.style.top = '0';
      div.style.left = '0';
      div.style.zIndex = ++this.pigeonMap.zIndex;
      this.dom = div;
      this.container.appendChild(div);
    }
  }, {
    key: "initCanvas",
    value: function initCanvas() {
      this.container = this.pigeonMap.map.container;
      var canvas = document.createElement('canvas');
      canvas.id = 'text_layer_' + this.id;
      this.container.appendChild(canvas);
      canvas.setAttribute("width", this.pigeonMap.map.width);
      canvas.setAttribute("height", this.pigeonMap.map.height);
      canvas.style.position = 'absolute';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.zIndex = ++this.pigeonMap.zIndex;
      this.canvas = canvas;
    }
    /**
     * @params {color,text,lnglat,fontSize}
     */

  }, {
    key: "addText",
    value: function addText(options) {
      options = Object.assign({}, options);
      options.id = options.id || '_text_' + this.textId++;
      this.texts.push(options);
      return options;
    }
  }, {
    key: "drawText",
    value: function drawText() {
      if (!this.canvasRender) {
        this.drawDomText();
      } else {
        this.drawCanvasText();
      }
    }
  }, {
    key: "drawDomText",
    value: function drawDomText() {
      this.dom.innerHTML = ''; //清空

      for (var x in this.texts) {
        var xy = this.pigeonMap.projectToScreen(this.texts[x].lnglat);
        var span = document.createElement('span');
        span.id = this.texts[x].id;
        span.innerHTML = this.texts[x].text;
        this.dom.appendChild(span);
        span.style.position = 'absolute';
        span.style.top = xy.y + 'px';
        span.style.left = xy.x + 'px';

        for (var y in this.texts[x].style) {
          span.style[y] = this.texts[x].style[y];
        }
      }
    }
  }, {
    key: "drawCanvasText",
    value: function drawCanvasText() {
      var ctx = this.canvas.getContext("2d");
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      for (var x in this.texts) {
        var xy = this.pigeonMap.projectToScreen(this.texts[x].lnglat);
        ctx.font = this.texts[x].font || this.font;
        ctx.fillStyle = this.texts[x].color || this.color;
        ctx.fillText(this.texts[x].text, xy.x, xy.y);
      }
    }
  }, {
    key: "updateDomText",
    value: function updateDomText() {
      var span = this.dom.querySelectorAll('span');

      for (var x in this.texts) {
        var xy = this.pigeonMap.projectToScreen(this.texts[x].lnglat);
        span[x].style.top = xy.y + 'px';
        span[x].style.left = xy.x + 'px';
      }
    }
    /**
     *  删除某个ID的文字
     */

  }, {
    key: "removeText",
    value: function removeText(id) {
      for (var x in this.texts) {
        if (this.texts[x].id == id) {
          this.texts.splice(x, 1);
          this.drawText();
          return;
        }
      }
    }
  }, {
    key: "update",
    value: function update() {}
  }, {
    key: "updateText",
    value: function updateText() {
      if (!this.canvasRender) {
        this.updateDomText();
      } else {
        this.drawCanvasText();
      }
    }
    /**
     * 获取某个文字对象
     */

  }, {
    key: "getText",
    value: function getText(id) {
      for (var x in this.texts) {
        if (this.texts[x].id == id) {
          return this.text[x];
        }
      }
    }
  }, {
    key: "onRemove",
    value: function onRemove() {
      this.pigeonMap.off('change', this.change); //去除map对该对象的引用

      this._listeners = null;
    }
    /**
     * 获取某个文字对象的索引
     */

  }, {
    key: "getTextIndex",
    value: function getTextIndex(id) {
      for (var x in this.texts) {
        if (this.texts[x].id == id) {
          return x;
        }
      }
    }
  }]);

  return TextLayer;
}(_Layer_js__WEBPACK_IMPORTED_MODULE_5__["default"]);

;
/* harmony default export */ __webpack_exports__["default"] = (TextLayer);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VRLayer; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);







var VRLayer =
/*#__PURE__*/
function (_Layer) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(VRLayer, _Layer);

  function VRLayer(config) {
    var _this2;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, VRLayer);

    _this2 = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(VRLayer).call(this, config)); //先监听时间，再获取VR

    _this2.noVR = false;
    _this2.vrStatus = 'not suppert VR';

    _this2.listenEvents();

    _this2.getVRDisplays();

    return _this2;
  }
  /**
   * 获取vrDevice
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(VRLayer, [{
    key: "getVRDisplays",
    value: function getVRDisplays() {
      var _this = this;

      if (navigator.getVRDisplays) {
        navigator.getVRDisplays().then(function (displays) {
          if (displays.length > 0) {
            _this.device = displays[0];
            _this.renderer.vr.enabled = true;

            _this.pigeonMap.renderer.vr.setDevice(_this.device); //初始化frameData


            _this.frameData = new VRFrameData();
          } else {
            _this.vrStatus = 'noDisplay';
            console.warn('no vr displays');
          }
        })["catch"](function (e) {
          console.warn('Unable to get VR Displays');
        });
      }
    }
    /**
     * 监听全局VR事件
     */

  }, {
    key: "listenEvents",
    value: function listenEvents() {
      var _this = this;

      window.addEventListener('vrdisplayconnect', function (event) {
        _this.device = event.display || event.detail.display;
        _this.status == 'connect';
        _this.renderer.vr.enabled = true;

        _this.fire('connected', _this.device);
      }, false);
      window.addEventListener('vrdisplaydisconnect', function (event) {
        _this.status == 'disconnect';
        _this.renderer.vr.enabled = false;

        _this.fire('disconnet', _this.device);
      }, false);
      window.addEventListener('vrdisplaypresentchange', function (event) {
        _this.device = event.display || event.detail.display;

        _this.fire('statuschange', _this.device);
      }, false);
    }
    /**
     * 进入VR模式
     */

  }, {
    key: "enterVR",
    value: function enterVR() {
      this.device.requestPresent([{
        source: this.renderer.domElement
      }]);
    }
    /**
     * 退出VR
     */

  }, {
    key: "exitVR",
    value: function exitVR() {
      this.device.exitPresent();
    }
    /**
     * 添加Button
     */

  }, {
    key: "createButton",
    value: function createButton(button) {
      var _this = this;

      if (!button) {
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

      button.addEventListener("click", function () {
        if (_this.device) _this.enterVR();
      });
    }
  }, {
    key: "onAdd",
    value: function onAdd(map) {
      this.pigeonMap = map;
      this.renderer = map.renderer;
      this.initVRRenderer();
    }
  }, {
    key: "initVRRenderer",
    value: function initVRRenderer() {
      var _this = this;
    }
  }]);

  return VRLayer;
}(_Layer__WEBPACK_IMPORTED_MODULE_5__["default"]);



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(THREE) {/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);






/**
 * 周边车辆绘制类
 * @class
 */


var PointsLayer =
/*#__PURE__*/
function (_Layer) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(PointsLayer, _Layer);

  function PointsLayer(config) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PointsLayer);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(PointsLayer).call(this, config));
    _this.lanePoints = [];

    _this.initPoints();

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(PointsLayer, [{
    key: "initPoints",
    value: function initPoints() {
      this.material = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 10
      });
      this.pointsGeometry = new THREE.BufferGeometry();
      this.points = new THREE.Points(this.pointsGeometry, this.material);
    }
  }, {
    key: "onAdd",
    value: function onAdd(map) {
      this.pigeonMap = map;
      this.pigeonMap.world.add(this.points);
    }
    /**
     * 采用相对坐标，防止抖动
     */

  }, {
    key: "drawPoints",
    value: function drawPoints(data) {
      this.baseLngLat = data[0];
      this.baseXYZ = this.pigeonMap.projectToWorld(this.baseLngLat);
      var points = [],
          xyz;
      var index = [];
      var colors = [];

      for (var x in data) {
        xyz = this.pigeonMap.projectToWorld(data[x]);
        points.push(xyz.x - this.baseXYZ.x, xyz.y - this.baseXYZ.y, xyz.z - this.baseXYZ.z);
        colors.push(data[x]);
        index.push(x);
      }

      this.points.geometry.addAttribute('position', new THREE.Float32BufferAttribute(points, 3));
      this.points.geometry.computeBoundingSphere();
      this.points.position.x = this.baseXYZ.x;
      this.points.position.y = this.baseXYZ.y;
      this.points.position.z = this.baseXYZ.z;
    }
  }]);

  return PointsLayer;
}(_Layer_js__WEBPACK_IMPORTED_MODULE_5__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (PointsLayer);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_6__);








var _default =
/*#__PURE__*/
function (_THREE$Sprite) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(_default, _THREE$Sprite);

  function _default() {
    var _this;

    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var textHeight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
    var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'rgba(255, 255, 255, 1)';

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, _default);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(_default).call(this, new three__WEBPACK_IMPORTED_MODULE_6__["SpriteMaterial"]({
      map: new three__WEBPACK_IMPORTED_MODULE_6__["Texture"]()
    })));
    _this._text = text;
    _this._textHeight = textHeight;
    _this._color = color;
    _this._fontFace = 'Arial';
    _this._fontSize = 90; // defines text resolution

    _this._fontWeight = 'normal';
    _this._canvas = document.createElement('canvas');
    _this._texture = _this.material.map;
    _this._texture.minFilter = three__WEBPACK_IMPORTED_MODULE_6__["LinearFilter"];

    _this._genCanvas();

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(_default, [{
    key: "_genCanvas",
    value: function _genCanvas() {
      var _this2 = this;

      var canvas = this._canvas;
      var ctx = canvas.getContext('2d');

      var lines = this._text.split('\n');

      canvas.width = Math.max.apply(Math, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(lines.map(function (line) {
        return ctx.measureText(line).width;
      })));
      canvas.height = this.fontSize * lines.length;
      ctx.font = "".concat(this.fontWeight, " ").concat(this.fontSize, "px ").concat(this.fontFace);
      ctx.fillStyle = this.color;
      ctx.textBaseline = 'bottom';
      lines.forEach(function (line, index) {
        return ctx.fillText(line, (canvas.width - ctx.measureText(line).width) / 2, (index + 1) * _this2.fontSize);
      }); // Inject canvas into sprite

      this._texture.image = canvas;
      this._texture.needsUpdate = true;
      var yScale = this.textHeight * lines.length;
      this.scale.set(yScale * canvas.width / canvas.height, yScale);
    }
  }, {
    key: "clone",
    value: function clone() {
      return new this.constructor(this.text, this.textHeight, this.color).copy(this);
    }
  }, {
    key: "copy",
    value: function copy(source) {
      three__WEBPACK_IMPORTED_MODULE_6__["Sprite"].prototype.copy.call(this, source);
      this.color = source.color;
      this.fontFace = source.fontFace;
      this.fontSize = source.fontSize;
      this.fontWeight = source.fontWeight;
      return this;
    }
  }, {
    key: "text",
    get: function get() {
      return this._text;
    },
    set: function set(text) {
      this._text = text;

      this._genCanvas();
    }
  }, {
    key: "textHeight",
    get: function get() {
      return this._textHeight;
    },
    set: function set(textHeight) {
      this._textHeight = textHeight;

      this._genCanvas();
    }
  }, {
    key: "color",
    get: function get() {
      return this._color;
    },
    set: function set(color) {
      this._color = color;

      this._genCanvas();
    }
  }, {
    key: "fontFace",
    get: function get() {
      return this._fontFace;
    },
    set: function set(fontFace) {
      this._fontFace = fontFace;

      this._genCanvas();
    }
  }, {
    key: "fontSize",
    get: function get() {
      return this._fontSize;
    },
    set: function set(fontSize) {
      this._fontSize = fontSize;

      this._genCanvas();
    }
  }, {
    key: "fontWeight",
    get: function get() {
      return this._fontWeight;
    },
    set: function set(fontWeight) {
      this._fontWeight = fontWeight;

      this._genCanvas();
    }
  }]);

  return _default;
}(three__WEBPACK_IMPORTED_MODULE_6__["Sprite"]);



/***/ }),
/* 25 */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ })
/******/ ])["default"];
});