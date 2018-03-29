/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 图层基础类
 * @class 
 */
var Layer = function () {

  /**
   * Layer类的构造函数，会把所有用户参数挂到layer对象上
   * @param {object} config - 用户构造函数配置
   */
  function Layer(config) {
    _classCallCheck(this, Layer);

    var _this = this;
    this._userConfig = config;
    for (var x in config) {
      this[x] = config[x];
    }
  }

  /**
   * 事件监听,用法同jQuery.on
   */


  _createClass(Layer, [{
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
  }]);

  return Layer;
}();

module.exports = Layer;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var WORLD_SIZE_RATIO = 0;
var WORLD_SIZE = 512 * Math.pow(2, WORLD_SIZE_RATIO);
var MERCATOR_A = 6378137.0;

module.exports = exports = {
    WORLD_SIZE_RATIO: WORLD_SIZE_RATIO,
    WORLD_SIZE: WORLD_SIZE,
    PROJECTION_WORLD_SIZE: WORLD_SIZE / (MERCATOR_A * Math.PI) / 2,
    MERCATOR_A: MERCATOR_A, // 900913 projection property
    DEG2RAD: Math.PI / 180,
    RAD2DEG: 180 / Math.PI,
    EARTH_CIRCUMFERENCE: 40075000, // In meters
    DISTANCE: 200
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function prettyPrintMatrix(uglymatrix) {
    for (var s = 0; s < 4; s++) {
        var quartet = [uglymatrix[s], uglymatrix[s + 4], uglymatrix[s + 8], uglymatrix[s + 12]];
        // console.log(quartet.map(function(num){return num.toFixed(4)}))
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
}

//gimme radians
function radify(deg) {

    if ((typeof deg === 'undefined' ? 'undefined' : _typeof(deg)) === 'object') {
        return deg.map(function (degree) {
            return Math.PI * 2 * degree / 360;
        });
    } else return Math.PI * 2 * deg / 360;
}

//gimme degrees
function degreeify(rad) {
    return 360 * rad / (Math.PI * 2);
}

module.exports.prettyPrintMatrix = prettyPrintMatrix;
module.exports.makePerspectiveMatrix = makePerspectiveMatrix;
module.exports.radify = radify;
module.exports.degreeify = degreeify;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
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

                info = { name: value };
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

            if (typeof url !== 'string' || url === '') return '';

            // Absolute URL
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

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
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

                        var previous = this._finalize(false);

                        // New usemtl declaration overwrites an inherited material, except if faces were declared
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
                        }

                        // Ignore objects tail materials if no face declarations followed them before a new o/g started.
                        if (end && this.materials.length > 1) {

                            for (var mi = this.materials.length - 1; mi >= 0; mi--) {
                                if (this.materials[mi].groupCount <= 0) {
                                    this.materials.splice(mi, 1);
                                }
                            }
                        }

                        // Guarantee at least one empty material, this makes the creation later more straight forward.
                        if (end && this.materials.length === 0) {

                            this.materials.push({
                                name: '',
                                smooth: this.smooth
                            });
                        }

                        return lastMultiMaterial;
                    }
                };

                // Inherit previous objects material.
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
        var result = [];

        // Faster to just trim left side of the line. Use if available.
        var trimLeft = typeof ''.trimLeft === 'function';

        for (var i = 0, l = lines.length; i < l; i++) {

            line = lines[i];

            line = trimLeft ? line.trimLeft() : line.trim();

            lineLength = line.length;

            if (lineLength === 0) continue;

            lineFirstChar = line.charAt(0);

            // @todo invoke passed in handler if any
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
            var isLine = geometry.type === 'Line';

            // Skip o/g line declarations that did not follow with any faces
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
            }

            // Create materials

            var createdMaterials = [];

            for (var mi = 0, miLen = materials.length; mi < miLen; mi++) {

                var sourceMaterial = materials[mi];
                var material = undefined;

                if (this.materials !== null) {

                    material = this.materials.create(sourceMaterial.name);

                    // mtl etc. loaders probably can't create line materials correctly, copy properties to a line material.
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
            }

            // Create mesh

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
        }

        //console.timeEnd( 'OBJLoader' );

        return container;
    }

};

module.exports = exports = OBJLoader;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PigeonGLConstants = __webpack_require__(1);
var CameraControl = __webpack_require__(6);
var utils = __webpack_require__(2);
var Layer = __webpack_require__(0);

/**
 * 信鸽地图地图核心类，用于生成3d空间地图底层
 */

var Map = function (_Layer) {
    _inherits(Map, _Layer);

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
     */
    function Map(map) {
        _classCallCheck(this, Map);

        var _this2 = _possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).call(this));

        _this2._layerid = 0;
        _this2.zIndex = 1000;
        _this2.status = "running";
        _this2.type = 'gps';

        _this2.clock = new THREE.Clock();
        _this2.clock.start();
        _this2.initMap(map);
        _this2.initWorld();
        if (_this2.map.hasGround) {
            _this2.addGround();
        }
        _this2.update();
        return _this2;
    }

    _createClass(Map, [{
        key: "initWorld",
        value: function initWorld() {
            // Set up a THREE.js scene
            this.renderer = new THREE.WebGLRenderer(Object.assign({ alpha: true, antialias: true }, this.map.rendererOptions));
            this.renderer.setSize(this.map.width, this.map.height);

            this.map.container.appendChild(this.renderer.domElement);
            this.renderer.domElement.style["position"] = "relative";
            this.renderer.domElement.style["pointer-events"] = "none";
            this.renderer.domElement.style["z-index"] = ++this.zIndex;
            //this.renderer.domElement.style["transform"] = "scale(1,-1)";

            var _this = this;

            /**
            * @property {Object} scene - this.scene为three.js场景
            */
            this.scene = new THREE.Scene(Object.assign({}, this.map.sceneOptions || {}));

            /**
            * @property {Object} camera - this.camera.js场景
            */
            this.camera = new THREE.PerspectiveCamera(28, this.map.width / this.map.height, 0.000001, 5000000000);

            /**
             * @property {Object} layers - 图层集合
             */
            this.layers = [];

            // The CameraSync object will keep the Mapbox and THREE.js camera movements in sync.
            // It requires a world group to scale as we zoom in. Rotation is handled in the camera's
            // projection matrix itself (as is field of view and near/far clipping)
            // It automatically registers to listen for move events on the map so we don't need to do that here
            /**
             * @property {Object} world - this.world为世界模型组，所有模型被添加到该组内
             */
            this.world = new THREE.Group();

            this.scene.add(this.world);

            /**
             * @property {CameraControl} cameraControl - 摄像机控制类
             */
            this.cameraControl = new CameraControl(this);
        }
    }, {
        key: "initMap",
        value: function initMap(map) {

            //mapbox
            if (map.transform) {
                this.map = map;
                this.map.MAP_TYPE = 'mapbox';
                this.map.width = this.map.transform.width;
                this.map.height = this.map.transform.height;
                this.map.container = this.map._container;
                this.map.on("resize", function () {
                    _this.renderer.setSize(_this.map.width, _this.map.height);
                });
            } else if (map.poiOnAMAP) {
                //amap
                this.map = map;
                this.map.MAP_TYPE = 'amap';
                this.map.container = this.map.getContainer();
                this.map.width = this.map.container.clientWidth;
                this.map.height = this.map.container.clientHeight;
                this.map.on("resize", function () {
                    _this.renderer.setSize(_this.map.width, _this.map.height);
                });
            } else {
                /**
                 * @property {Object} map - map对象，包含map的位置信息等，如果是高德或mapbox则为地图对象
                 * 默认值为  
                 * rotation:0,
                    width:1000,
                    height:600,
                    pitch:45,
                    zoom:21,
                    center:[0,0]    
                 */
                this.map = Object.assign({
                    rotation: 0,
                    width: 1000,
                    height: 600,
                    pitch: 45,
                    zoom: 21,
                    center: [0, 0]
                }, map);
                this.map.MAP_TYPE = 'none';
            }
        }

        /**
         * 自动刷新渲染，可以改变this.status=='top',停止自动刷新
         * @parma {Number} delta - 每帧时间差，用来保持不同机器动画速度相同,用不到不必搭理
         */

    }, {
        key: "update",
        value: function update(delta) {
            // Update any animations
            //this.animationManager.update(timestamp);
            var delta = this.clock.getDelta();
            //子layer更新
            for (var x in this.layers) {
                if (this.layers[x].update) {
                    this.layers[x].update(delta);
                }
            }
            // Render the scene
            this.renderer.render(this.scene, this.camera);

            // Run this again next frame
            var thisthis = this;
            var device = void 0;
            if (device = this.renderer.vr.getDevice()) {
                device.requestAnimationFrame(function (timestamp) {
                    if (thisthis.status != 'stop') thisthis.update(delta);
                });
                return;
            }
            requestAnimationFrame(function (timestamp) {
                if (thisthis.status != 'stop') thisthis.update(delta);
            });
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

        //兼容utm模式

    }, {
        key: "setProjectType",
        value: function setProjectType(type) {
            this.type = type;
            this.cameraControl.type = type;
        }

        /**
         * 投影到3d坐标系
         * @param {Array} coords - 经纬度 [lng,lat],经度在前，纬度在后
         * @return {Object} Vecotor3 - 
         */

    }, {
        key: "projectToWorld",
        value: function projectToWorld(coords) {
            if (this.type == 'utm') {
                return this.projectUTMToWorld(coords);
            }
            // web mercator forward projection, re-scaling to WORLD_SIZE
            var projected = [-PigeonGLConstants.MERCATOR_A * coords[0] * PigeonGLConstants.DEG2RAD * PigeonGLConstants.PROJECTION_WORLD_SIZE, -PigeonGLConstants.MERCATOR_A * Math.log(Math.tan(Math.PI * 0.25 + 0.5 * coords[1] * PigeonGLConstants.DEG2RAD)) * PigeonGLConstants.PROJECTION_WORLD_SIZE];

            var pixelsPerMeter = this.projectedUnitsPerMeter(coords[1]);

            //z dimension
            var height = coords[2] || 0;
            projected.push(height * pixelsPerMeter);

            var result = new THREE.Vector3(projected[0], projected[1], projected[2]);

            return result;
        }
    }, {
        key: "projectUTMToWorld",
        value: function projectUTMToWorld(coord) {
            return coord;
        }

        /**
         * 获取该维度的1m缩放比例
         * @param {Number} latitude - 纬度
         */

    }, {
        key: "projectedUnitsPerMeter",
        value: function projectedUnitsPerMeter(latitude) {
            return Math.abs(PigeonGLConstants.WORLD_SIZE * (1 / Math.cos(latitude * Math.PI / 180)) / PigeonGLConstants.EARTH_CIRCUMFERENCE);
        }
    }, {
        key: "_scaleVerticesToMeters",
        value: function _scaleVerticesToMeters(centerLatLng, vertices) {
            var pixelsPerMeter = this.projectedUnitsPerMeter(centerLatLng[1]);
            var centerProjected = this.projectToWorld(centerLatLng);

            for (var i = 0; i < vertices.length; i++) {
                vertices[i].multiplyScalar(pixelsPerMeter);
            }

            return vertices;
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
            var scale = this.map.transform.scale;
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
         * @return {Array} lnglat - [lng,lat]
         */

    }, {
        key: "unprojectFromScreen",
        value: function unprojectFromScreen(pixel) {
            var a = this.map.width / 2;
            var b = this.map.height / 2;
            var standX = -(pixel.x - a) / a;
            var standY = (this.map.height - pixel.y - b) / b;
            var scale = this.map.transform.scale;
            var standarVector = new THREE.Vector3(standX, standY, 0);
            var world = standarVector.unproject(this.camera);
            var worldPosition = this.world.getWorldPosition().clone();
            var lnglat = this.unprojectFromWorld(world.sub(worldPosition));
            lnglat[1] = -lnglat[1];
            return lnglat;
        }

        /**
         * 世界坐标转经纬度
         * @param {Object} xyz - 世界坐标 {x,y,z}
         * @return {Array} lnglat - [lng,lat]
         */

    }, {
        key: "unprojectFromWorld",
        value: function unprojectFromWorld(pixel) {
            var unprojected = [-pixel.x / (PigeonGLConstants.MERCATOR_A * PigeonGLConstants.DEG2RAD * PigeonGLConstants.PROJECTION_WORLD_SIZE), 2 * (Math.atan(Math.exp(pixel.y / (PigeonGLConstants.PROJECTION_WORLD_SIZE * -PigeonGLConstants.MERCATOR_A))) - Math.PI / 4) / PigeonGLConstants.DEG2RAD];
            var pixelsPerMeter = this.projectedUnitsPerMeter(unprojected[1]);

            //z dimension
            var height = pixel.z || 0;
            unprojected.push(height / pixelsPerMeter);

            return unprojected;
        }
    }, {
        key: "_flipMaterialSides",
        value: function _flipMaterialSides(obj) {}

        /**
         * 添加物体到3d空间
         * @param {Object} obj - Three.js的mesh
         * @param {lnglat} Array - 物体的经纬度 {lng,lat}
         * @param {Object} options - 配置
         * @param {Boolean} options.scaleToLatitude - 是否按照1px = 1m的比例进行缩放 默认true
         * @param {Number} options.preScale - 改变像素到米的换算比例 默认1
         * @return {Object} obj -物体mesh
         */

    }, {
        key: "addAtCoordinate",
        value: function addAtCoordinate(obj, lnglat, options) {
            var geoGroup = new THREE.Group();
            geoGroup.userData.isGeoGroup = true;
            geoGroup.add(obj);
            this._flipMaterialSides(obj);
            this.world.add(geoGroup);
            this.moveToCoordinate(obj, lnglat, options);
            // Bestow this mesh with animation superpowers and keeps track of its movements in the global animation queue
            //this.animationManager.enroll(obj); 
            return obj;
        }

        /**
         * 移动3d空间的物体
         * @param {Object} obj - Three.js的mesh
         * @param {lnglat} Array - 物体的经纬度 {lng,lat}
         * @param {Object} options - 配置
         * @param {Boolean} options.scaleToLatitude - 是否按照1px = 1m的比例进行缩放 默认true
         * @param {Number} options.preScale - 改变像素到米的换算比例 默认1
         * @return {Object} obj - 物体mesh
         */

    }, {
        key: "moveToCoordinate",
        value: function moveToCoordinate(obj, lnglat, options) {
            /** Place the given object on the map, centered around the provided longitude and latitude
                The object's internal coordinates are assumed to be in meter-offset format, meaning
                1 unit represents 1 meter distance away from the provided coordinate.
            */

            if (options === undefined) options = {};
            if (options.preScale === undefined) options.preScale = 1.0;
            if (options.scaleToLatitude === undefined || obj.userData.scaleToLatitude) options.scaleToLatitude = true;

            obj.userData.scaleToLatitude = options.scaleToLatitude;

            if (typeof options.preScale === 'number') options.preScale = new THREE.Vector3(options.preScale, options.preScale, options.preScale);else if (options.preScale.constructor === Array && options.preScale.length === 3) options.preScale = new THREE.Vector3(options.preScale[0], options.preScale[1], options.preScale[2]);else if (options.preScale.constructor !== THREE.Vector3) {
                console.warn("Invalid preScale value: number, Array with length 3, or THREE.Vector3 expected. Defaulting to [1,1,1]");
                options.preScale = new THREE.Vector3(1, 1, 1);
            }

            var scale = options.preScale;

            // Figure out if this object is a geoGroup and should be positioned and scaled directly, or if its parent
            var geoGroup;
            if (obj.userData.isGeoGroup) geoGroup = obj;else if (obj.parent && obj.parent.userData.isGeoGroup) geoGroup = obj.parent;else return console.error("Cannot set geographic coordinates of object that does not have an associated GeoGroup. Object must be added to scene with 'addAtCoordinate()'.");

            if (options.scaleToLatitude) {
                // Scale the model so that its units are interpreted as meters at the given latitude
                var pixelsPerMeter = this.projectedUnitsPerMeter(lnglat[1]);
                scale.multiplyScalar(pixelsPerMeter);
            }

            geoGroup.scale.copy(scale);
            geoGroup.position.copy(this.projectToWorld(lnglat));
            obj.coordinates = lnglat;

            return obj;
        }
    }, {
        key: "addGeoreferencedMesh",
        value: function addGeoreferencedMesh(mesh, options) {}
        /* Place the mesh on the map, assuming its internal (x,y) coordinates are already in (longitude, latitude) format
            TODO: write this
        */


        /**
         * 添加默认地面
         */

    }, {
        key: "addGround",
        value: function addGround() {
            var geometry = new THREE.PlaneGeometry(PigeonGLConstants.WORLD_SIZE, PigeonGLConstants.WORLD_SIZE);
            var material = new THREE.MeshPhongMaterial({ color: this.map.groundColor || 0x666666, shininess: 30 });
            var plane = new THREE.Mesh(geometry, material);
            // plane.position.x = plane.position.y = - PigeonGLConstants.WORLD_SIZE/2;
            plane.position.z = -0.01;
            this.addAtCoordinate(plane, this.map.center, { scaleToLatitude: true, preScale: 100 });
        }

        /**
         * 
         */

    }, {
        key: "getDataLayer",
        value: function getDataLayer(id) {
            for (var i = 0; i < this.layers.length; i++) {
                if (this.layer.id === id) return layer;
            }
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
            this.scene.add(new THREE.AmbientLight(0xCCCCCC));

            var sunlight = new THREE.DirectionalLight(0xffffff, 0.5);
            sunlight.position.set(0, 800, 1000);
            sunlight.matrixWorldNeedsUpdate = true;
            this.world.add(sunlight);
        }
    }]);

    return Map;
}(Layer);

module.exports = exports = Map;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(2);
var PigeonGLConstants = __webpack_require__(1);

/**
 * 相机控制类
 * @class
 * @param {object} map - 包含位置信息的地图对象
 * @param {object} camera - 相机对象
 * @param {object} world - 世界对象
 */
function CameraControl(map) {
    this.scope = map;
    this.map = map.map;
    this.camera = map.camera;
    this.active = true;
    this.camera.matrixAutoUpdate = false; // We're in charge of the camera now!
    // Postion and configure the world group so we can scale it appropriately when the camera zooms
    this.world = map.world || new THREE.Group();
    this.world.position.x = this.world.position.y = PigeonGLConstants.WORLD_SIZE / 2;
    this.world.matrixAutoUpdate = false;

    // Listen for move events from the map and update the Three.js camera
    var _this = this;
    this.listenMapChange();
}

CameraControl.prototype = {
    /**d
     * 更新地图参数，当this.map的参数发生变化时，需要执行该函数同步变化
     */
    updateMap: function updateMap(map) {
        this.map = Object.assign(this.map, map);
        var _this = this;
        if (this.map.MAP_TYPE == 'mapbox') {
            this.updateCamera();
        } else if (this.map.MAP_TYPE == 'amap') {
            this.syncAmap();
            this.updateAmapCamera();
        } else if (this.map.MAP_TYPE == 'none') {
            _this.initMapTransform();
            _this.updateCamera();
        }
    },


    /**
     * 监听地图瓦片层的变化，并同步执行updateCamera()同步相机
     */
    listenMapChange: function listenMapChange() {
        var _this = this;
        //更新地图对象
        this.updateMap(this.map);
        //监听事件
        if (this.map.MAP_TYPE == 'mapbox') {
            this.map.on('move', function () {
                _this.updateCamera();
            });
        } else if (this.map.MAP_TYPE == 'amap') {
            var container = this.map.getContainer();
            container.addEventListener('mousemove', function () {
                _this.updateMap();
            });
        } else if (this.map.MAP_TYPE == 'none') {
            //无事件操作

        }
    },


    /**
     * 更新amap
     */
    syncAmap: function syncAmap() {
        var transform = {};
        var config = this.map;
        var container = this.map.getContainer();
        var center = this.map.getCenter();
        var zoom = this.map.getZoom();
        var pitch = this.map.getPitch();
        var rotation = this.map.getRotation();
        transform.width = container.clientWidth;
        transform.height = container.clientHeight;
        transform.x = this.lngX(center['L'], zoom);
        transform.y = this.latY(center['N'], zoom);
        transform.scale = this.getScale(zoom);
        transform._pitch = pitch * Math.PI / 180 || 0;
        transform.angle = rotation * Math.PI / 180 || 0;
        this.map.transform = transform;
        this.map.fov = Math.PI / 20;
    },


    /**
     * 重新初始化没有地图瓦片层时的位置参数
     */
    initMapTransform: function initMapTransform() {
        var transform = {};
        var config = this.map;
        transform.width = this.map.width;
        transform.height = this.map.height;
        transform.x = this.lngX(this.map.center[0], this.map.zoom);
        transform.y = this.latY(this.map.center[1], this.map.zoom);
        transform.scale = this.getScale(this.map.zoom);
        transform._pitch = this.map.pitch * Math.PI / 180 || 0;
        transform.angle = this.map.rotation * Math.PI / 180 || 0;
        this.map.transform = transform;
    },


    /**
     * 计算地图中心的x值
     */
    lngX: function lngX(lng, zoom) {
        return (180 + lng) * this.getWorldSize(zoom) / 360;
    },

    /**
    * 计算地图中心的y值
    */
    latY: function latY(lat, zoom) {
        var y = 180 / Math.PI * Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360));
        return (180 - y) * this.getWorldSize(zoom) / 360;
    },


    /**
     * 获取地图应该被放大到的尺寸
     */
    getWorldSize: function getWorldSize(zoom) {
        return PigeonGLConstants.WORLD_SIZE * this.getScale(zoom);
    },


    /**
     * 获取地图放大倍数
     * @param {number} zoom - 地图zoom
     */
    getScale: function getScale(zoom) {
        return Math.pow(2, zoom - PigeonGLConstants.WORLD_SIZE_RATIO || 1);
    },


    /**
     * 设置地图中心
     * @param {Array} center - [lng,lat]
     */
    setCenter: function setCenter(center) {
        var _this = this;
        if (this.map.MAP_TYPE == 'mapbox') {
            this.map.setCenter(center);
        } else if (this.map.MAP_TYPE == 'amap') {
            this.map.setCenter(center);
        } else if (this.map.MAP_TYPE == 'none') {
            this.map.center = center;
            _this.initMapTransform();
        }
    },


    /**
     * 设置旋转角度
     * @param {number} deg - 旋转的角度（！不是弧度）
     */
    setRotation: function setRotation(rad) {
        var _this = this;
        this.map.rotation = rad;
        if (this.map.MAP_TYPE == 'mapbox') {
            this.map.setRotation(center);
        } else if (this.map.MAP_TYPE == 'amap') {
            this.map.setRotation(center);
        } else if (this.map.MAP_TYPE == 'none') {
            this.map.transform.angle = this.map.rotation * Math.PI / 180;
        }
    },


    /**
     * 设置旋转的俯角
     * @param {number} deg - 俯视的角度
     */
    setPitch: function setPitch(rad) {
        var _this = this;
        this.map.pitch = rad;
        this.map.rotation = rad;
        if (this.map.MAP_TYPE == 'mapbox') {
            this.map.setPitch(rad);
        } else if (this.map.MAP_TYPE == 'amap') {
            this.map.setPitch(rad);
        } else if (this.map.MAP_TYPE == 'none') {
            this.map.transform._pitch = this.map.pitch * Math.PI / 180;
        }
    },


    /**
     * 更新相机位置，当map位置信息变化时执行
     */
    updateCamera: function updateCamera(ev) {
        if (!this.camera) {
            console.log('nocamera');
            return;
        }
        // Build a projection matrix, paralleling the code found in Mapbox GL JS
        var fov = this.map.fov || 0.6435011087932844; //*2/Math.pow(this.map.zoom,2);
        var cameraToCenterDistance = 0.5 / Math.tan(fov / 2) * this.map.transform.height;
        var halfFov = fov / 2;
        var groundAngle = Math.PI / 2 + this.map.transform._pitch;
        var topHalfSurfaceDistance = Math.sin(halfFov) * cameraToCenterDistance / Math.sin(Math.PI - groundAngle - halfFov);

        // Calculate z distance of the farthest fragment that should be rendered.
        var furthestDistance = Math.cos(Math.PI / 2 - this.map.transform._pitch) * topHalfSurfaceDistance + cameraToCenterDistance;

        // Add a bit extra to avoid precision problems when a fragment's distance is exactly `furthestDistance`
        var farZ = furthestDistance * 1.01;

        this.camera.far = farZ;
        this.camera.fov = fov;
        this.camera.position.z = cameraToCenterDistance;
        this.camera.rotation.z = this.map.transform.angle;
        this.camera.rotation.x = this.map.transform._pitch;

        this.camera.projectionMatrix = utils.makePerspectiveMatrix(fov, this.map.transform.width / this.map.transform.height, 1, farZ);

        var cameraWorldMatrix = new THREE.Matrix4();
        var cameraTranslateZ = new THREE.Matrix4().makeTranslation(0, 0, cameraToCenterDistance);
        var cameraRotateX = new THREE.Matrix4().makeRotationX(this.map.transform._pitch);
        var cameraRotateZ = new THREE.Matrix4().makeRotationZ(this.map.transform.angle);

        // Unlike the Mapbox GL JS camera, separate camera translation and rotation out into its world matrix
        // If this is applied directly to the projection matrix, it will work OK but break raycasting
        cameraWorldMatrix.premultiply(cameraTranslateZ).premultiply(cameraRotateX).premultiply(cameraRotateZ);

        this.camera.matrixWorld.copy(cameraWorldMatrix);

        var zoomPow = this.map.transform.scale;
        // Handle scaling and translation of objects in the map in the world's matrix transform, not the camera
        var scale = new THREE.Matrix4();
        var translateCenter = new THREE.Matrix4();
        var translateMap = new THREE.Matrix4();
        var rotateMap = new THREE.Matrix4();

        scale.makeScale(zoomPow, zoomPow, zoomPow);
        translateCenter.makeTranslation(PigeonGLConstants.WORLD_SIZE / 2, -PigeonGLConstants.WORLD_SIZE / 2, 0);
        translateMap.makeTranslation(-this.map.transform.x, this.map.transform.y, 0);
        rotateMap.makeRotationZ(Math.PI);
        this.world.matrix = new THREE.Matrix4();
        var worldTranslateZ = new THREE.Matrix4().makeTranslation(0, 0, -cameraToCenterDistance);
        this.world.matrix
        // .premultiply(worldTranslateZ)
        .premultiply(rotateMap).premultiply(translateCenter).premultiply(scale).premultiply(translateMap);

        utils.prettyPrintMatrix(this.camera.projectionMatrix.elements);
    },

    /**
    * 更新相机位置，当map位置信息变化时执行
    */
    updateAmapCamera: function updateAmapCamera(ev) {

        // Build a projection matrix, paralleling the code found in Mapbox GL JS
        var fov = this.map.fov || 0.6435011087932844; //*2/Math.pow(this.map.zoom,2);
        var cameraToCenterDistance = 0.5 / Math.tan(fov / 2) * this.map.transform.height;
        var halfFov = fov / 2;
        var groundAngle = Math.PI / 2 + this.map.transform._pitch;
        var topHalfSurfaceDistance = Math.sin(halfFov) * cameraToCenterDistance / Math.sin(Math.PI - groundAngle - halfFov);

        // Calculate z distance of the farthest fragment that should be rendered.
        var furthestDistance = Math.cos(Math.PI / 2 - this.map.transform._pitch) * topHalfSurfaceDistance + cameraToCenterDistance;

        // Add a bit extra to avoid precision problems when a fragment's distance is exactly `furthestDistance`
        var farZ = furthestDistance * 1.01;

        // this.camera.updateProjectionMatrix();
        this.camera.projectionMatrix = utils.makePerspectiveMatrix(fov, this.map.transform.width / this.map.transform.height, 1, farZ);
        var cameraWorldMatrix = new THREE.Matrix4();
        var cameraTranslateZ = new THREE.Matrix4().makeTranslation(0, 0, cameraToCenterDistance);
        var cameraRotateX = new THREE.Matrix4().makeRotationX(this.map.transform._pitch);
        var cameraRotateZ = new THREE.Matrix4().makeRotationZ(this.map.transform.angle);
        this.camera.position.z = cameraTranslateZ;
        // Unlike the Mapbox GL JS camera, separate camera translation and rotation out into its world matrix
        // If this is applied directly to the projection matrix, it will work OK but break raycasting
        cameraWorldMatrix.premultiply(cameraTranslateZ).premultiply(cameraRotateX) //放哪没差别，都要最后乘一遍
        .premultiply(cameraRotateZ);

        this.camera.matrixWorld.copy(cameraWorldMatrix);

        var zoomPow = this.map.transform.scale;
        // Handle scaling and translation of objects in the map in the world's matrix transform, not the camera
        var scale = new THREE.Matrix4();
        var translateCenter = new THREE.Matrix4();
        var translateMap = new THREE.Matrix4();
        var rotateMap = new THREE.Matrix4();

        scale.makeScale(zoomPow, zoomPow, zoomPow);
        translateCenter.makeTranslation(PigeonGLConstants.WORLD_SIZE / 2, -PigeonGLConstants.WORLD_SIZE / 2, 0);
        translateMap.makeTranslation(-this.map.transform.x, this.map.transform.y, 0);
        rotateMap.makeRotationZ(Math.PI);
        this.world.matrix = new THREE.Matrix4();
        this.world.matrix.premultiply(rotateMap).premultiply(translateCenter).premultiply(scale).premultiply(translateMap);

        // utils.prettyPrintMatrix(this.camera.projectionMatrix.elements);
    }

};

module.exports = exports = CameraControl;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
var PigeonGL = {
  MTLLoader: __webpack_require__(3),
  OBJLoader: __webpack_require__(4),

  //core
  Map: __webpack_require__(5),
  UTMMap: __webpack_require__(8),
  Layer: __webpack_require__(0),
  CameraControl: __webpack_require__(6),

  //layer
  SymbolLayer3D: __webpack_require__(10),
  ThirdPersonView: __webpack_require__(12),
  MapControl: __webpack_require__(13),
  TextLayer: __webpack_require__(14),
  VRLayer: __webpack_require__(15),
  CloudPoints: __webpack_require__(16)
};
window.PigeonGL = PigeonGL;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Map = __webpack_require__(5);
var UTMCameraControl = __webpack_require__(9);

var UTMMap = function (_Map) {
    _inherits(UTMMap, _Map);

    function UTMMap() {
        var _ref;

        var _temp, _this2, _ret;

        _classCallCheck(this, UTMMap);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = UTMMap.__proto__ || Object.getPrototypeOf(UTMMap)).call.apply(_ref, [this].concat(args))), _this2), _this2.isUTM = true, _temp), _possibleConstructorReturn(_this2, _ret);
    }

    _createClass(UTMMap, [{
        key: "initWorld",

        // status='stop';
        value: function initWorld() {
            // Set up a THREE.js scene
            this.renderer = new THREE.WebGLRenderer(Object.assign({ alpha: true, antialias: true }, this.map.rendererOptions));
            this.renderer.setSize(this.map.width, this.map.height);

            this.map.container.appendChild(this.renderer.domElement);
            this.renderer.domElement.style["position"] = "relative";
            this.renderer.domElement.style["pointer-events"] = "none";
            this.renderer.domElement.style["z-index"] = ++this.zIndex;
            //this.renderer.domElement.style["transform"] = "scale(1,-1)";

            var _this = this;

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

            // The CameraSync object will keep the Mapbox and THREE.js camera movements in sync.
            // It requires a world group to scale as we zoom in. Rotation is handled in the camera's
            // projection matrix itself (as is field of view and near/far clipping)
            // It automatically registers to listen for move events on the map so we don't need to do that here
            /**
             * @property {Object} world - this.world为世界模型组，所有模型被添加到该组内
             */
            this.world = new THREE.Group();

            this.scene.add(this.world);

            this.camera.position.z = 10;
            this.camera.position.x = this.map.center[0];
            this.camera.position.y = this.map.center[1];

            // this.oribitControl = new THREE.OrbitControls( this.camera, this.map.container );
            // this.oribitControl.addEventListener( 'change', ()=>{_this.update()} );
            /**
             * @property {CameraControl} cameraControl - 摄像机控制类
             */
            this.cameraControl = new UTMCameraControl(this);
            // this.updateMap();
        }
    }, {
        key: "updateMap",
        value: function updateMap() {}
    }, {
        key: "moveToCoordinate",
        value: function moveToCoordinate(obj, lnglat, options) {
            /** Place the given object on the map, centered around the provided longitude and latitude
                The object's internal coordinates are assumed to be in meter-offset format, meaning
                1 unit represents 1 meter distance away from the provided coordinate.
            */

            if (options === undefined) options = {};
            if (options.preScale === undefined) options.preScale = 1.0;
            if (options.scaleToLatitude === undefined || obj.userData.scaleToLatitude) options.scaleToLatitude = true;

            obj.userData.scaleToLatitude = options.scaleToLatitude;

            if (typeof options.preScale === 'number') options.preScale = new THREE.Vector3(options.preScale, options.preScale, options.preScale);else if (options.preScale.constructor === Array && options.preScale.length === 3) options.preScale = new THREE.Vector3(options.preScale[0], options.preScale[1], options.preScale[2]);else if (options.preScale.constructor !== THREE.Vector3) {
                console.warn("Invalid preScale value: number, Array with length 3, or THREE.Vector3 expected. Defaulting to [1,1,1]");
                options.preScale = new THREE.Vector3(1, 1, 1);
            }

            var scale = options.preScale;

            // Figure out if this object is a geoGroup and should be positioned and scaled directly, or if its parent
            var geoGroup;
            if (obj.userData.isGeoGroup) geoGroup = obj;else if (obj.parent && obj.parent.userData.isGeoGroup) geoGroup = obj.parent;else return console.error("Cannot set geographic coordinates of object that does not have an associated GeoGroup. Object must be added to scene with 'addAtCoordinate()'.");

            geoGroup.scale.copy(scale);
            geoGroup.position.copy(this.projectToWorld(lnglat));
            obj.coordinates = lnglat;

            return obj;
        }
    }, {
        key: "update",
        value: function update() {
            // Update any animations
            //this.animationManager.update(timestamp);
            var delta = this.clock.getDelta();
            //子layer更新                  
            for (var x in this.layers) {
                if (this.layers[x].update) {
                    this.layers[x].update(delta);
                }
            }
            // this.cameraControl.update();

            // Render the scene
            this.renderer.render(this.scene, this.camera);

            // Run this again next frame
            var thisthis = this;
            var device = void 0;
            if (device = this.renderer.vr.getDevice()) {
                this.animationframe = device.requestAnimationFrame(function (timestamp) {
                    if (thisthis.status != 'stop') thisthis.update(delta);
                });
                return;
            }
            this.animationframe = requestAnimationFrame(function (timestamp) {
                if (thisthis.status != 'stop') thisthis.update(delta);
            });
        }
    }, {
        key: "projectToWorld",
        value: function projectToWorld(utm) {
            return {
                x: utm[0],
                y: utm[1],
                z: utm[2] || 0
            };
        }
    }, {
        key: "unprojectFromWorld",
        value: function unprojectFromWorld(world) {
            return [world.x, world.y, world.z];
        }
    }, {
        key: "projectedUnitsPerMeter",
        value: function projectedUnitsPerMeter() {
            return 1;
        }
    }]);

    return UTMMap;
}(Map);

module.exports = UTMMap;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PigeonGLConstants = __webpack_require__(1);
var utils = __webpack_require__(2);
/**
 * 相机控制类
 * @class
 * @param {object} map - 包含位置信息的地图对象
 * @param {object} camera - 相机对象
 * @param {object} world - 世界对象
 */
function CameraControl(map) {
    this.scope = map;
    this.map = map.map;
    this.camera = map.camera;
    this.active = true;
    // Postion and configure the world group so we can scale it appropriately when the camera zooms
    this.world = map.world || new THREE.Group();
    this.world.position.x = this.world.position.y = 0;
    this.camera.matrixAutoUpdate = false; // We're in charge of the camera now!

    // Listen for move events from the map and update the Three.js camera
    var _this = this;
    this.listenMapChange();
}

CameraControl.prototype = {
    /**d
     * 更新地图参数，当this.map的参数发生变化时，需要执行该函数同步变化
     */
    updateMap: function updateMap(map) {
        this.map = Object.assign(this.map, map);
        var _this = this;
        _this.initMapTransform();
        _this.updateCamera();
    },


    /**
     * 监听地图瓦片层的变化，并同步执行updateCamera()同步相机
     */
    listenMapChange: function listenMapChange() {
        var _this = this;
        //更新地图对象
        this.updateMap(this.map);
    },


    /**
     * 重新初始化没有地图瓦片层时的位置参数
     */
    initMapTransform: function initMapTransform() {
        var transform = {};
        var config = this.map;
        transform.width = this.map.width;
        transform.height = this.map.height;
        transform.zHeight = this.map.zHeight || 0; //z轴凸起高度
        transform.x = this.map.center[0];
        transform.y = this.map.center[1];
        transform.scale = this.getScale(this.map.zoom);
        transform.z = this.map.center[2] || this.getZ(transform.scale);
        transform._pitch = this.map.pitch * Math.PI / 180 || 0;
        transform.angle = this.map.rotation * Math.PI / 180 || 0;
        this.map.transform = transform;
    },
    getZ: function getZ(scale) {
        return PigeonGLConstants.MERCATOR_A / scale;
    },


    /**
     * 获取地图放大倍数
     * @param {number} zoom - 地图zoom
     */
    getScale: function getScale(zoom) {
        return Math.pow(2, zoom - PigeonGLConstants.WORLD_SIZE_RATIO || 1);
    },


    /**
     * 设置地图中心
     * @param {Array} center - [lng,lat]
     */
    setCenter: function setCenter(center) {
        var _this = this;
        this.map.center = center;
        _this.initMapTransform();
    },


    /**
     * 设置旋转角度
     * @param {number} deg - 旋转的角度（！不是弧度）
     */
    setRotation: function setRotation(rad) {
        var _this = this;
        this.map.rotation = rad;
        this.map.transform.angle = this.map.rotation * Math.PI / 180;
    },


    /**
     * 设置旋转的俯角
     * @param {number} deg - 俯视的角度
     */
    setPitch: function setPitch(rad) {
        var _this = this;
        this.map.pitch = rad;
        this.map.transform._pitch = this.map.pitch * Math.PI / 180;
    },


    /**
     * 更新相机位置，当map位置信息变化时执行
     */
    updateCamera: function updateCamera(ev) {
        var height = Math.abs(this.map.transform.z) + this.map.transform.zHeight;

        var fov = this.map.fov || 0.6435011087932844; //*2/Math.pow(this.map.zoom,2);
        var cameraToCenterDistance = height;
        var halfFov = fov / 2;
        var groundAngle = Math.PI / 2 + this.map.transform._pitch;
        var topHalfSurfaceDistance = Math.sin(halfFov) * cameraToCenterDistance / Math.sin(Math.PI - groundAngle - halfFov);

        // Calculate z distance of the farthest fragment that should be rendered.
        var furthestDistance = Math.cos(Math.PI / 2 - this.map.transform._pitch) * topHalfSurfaceDistance + cameraToCenterDistance;

        // Add a bit extra to avoid precision problems when a fragment's distance is exactly `furthestDistance`
        var farZ = furthestDistance * 1.01;

        this.camera.projectionMatrix = utils.makePerspectiveMatrix(fov, this.map.transform.width / this.map.transform.height, 1, farZ);

        var cameraWorldMatrix = new THREE.Matrix4();
        var cameraTranslateZ = new THREE.Matrix4().makeTranslation(0, 0, height);
        var cameraRotateX = new THREE.Matrix4().makeRotationX(this.map.transform._pitch);
        var cameraRotateZ = new THREE.Matrix4().makeRotationZ(this.map.transform.angle);

        // Unlike the Mapbox GL JS camera, separate camera translation and rotation out into its world matrix
        // If this is applied directly to the projection matrix, it will work OK but break raycasting
        cameraWorldMatrix.premultiply(cameraTranslateZ).premultiply(cameraRotateX).premultiply(cameraRotateZ);
        this.camera.matrixWorld.copy(cameraWorldMatrix);

        // this.camera.position.z = height;
        // this.camera.rotation.x = (this.map.transform._pitch);
        // this.camera.rotation.z = (this.map.transform.angle);
        // this.camera.rotateOnWorldAxis(new THREE.Vector3(1,0,0),this.map.transform._pitch);
        // this.camera.rotateOnWorldAxis ( new THREE.Vector3(0,0,1), this.map.transform.angle )
        //把整个地图挪到原点
        this.world.position.x = -this.map.transform.x;
        this.world.position.y = -this.map.transform.y;
    }

};

module.exports = exports = CameraControl;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var ThreeboxConstants = __webpack_require__(1);
var utils = __webpack_require__(2);
var ValueGenerator = __webpack_require__(11);
var OBJLoader = __webpack_require__(4);
var MTLLoader = __webpack_require__(3);

function SymbolLayer3D(parent, options) {
    var _this = this;

    if (options === undefined) return console.error("Invalid options provided to SymbolLayer3D");
    // TODO: Better error handling here

    if (options.scale === undefined) options.scale = 1.0;
    if (options.rotation === undefined) options.rotation = 0;
    if (options.scaleWithMapProjection === undefined) options.scaleWithMapProjection = true;
    if (options.key === undefined || options.key === '' || _typeof(options.key) === 'object' && options.key.property === undefined && options.key.generator === undefined) {
        options.key = { generator: function generator(v, i) {
                return i;
            } };
        console.warn("Using array index for SymbolLayer3D key property.");
    }

    this.parent = parent;

    this.id = options.id;
    this.keyGen = ValueGenerator(options.key);
    if (typeof options.source === "string") this.sourcePath = options.source;else this.source = options.source;

    this.modelDirectoryGen = ValueGenerator(options.modelDirectory);
    this.modelNameGen = ValueGenerator(options.modelName);
    this.rotationGen = ValueGenerator(options.rotation);
    this.scaleGen = ValueGenerator(options.scale);
    this.models = Object.create(null);
    this.features = Object.create(null);
    this.scaleWithMapProjection = options.scaleWithMapProjection;

    this.loaded = false;

    if (this.sourcePath) {
        // Load source and models
        var sourceLoader = new THREE.FileLoader();

        sourceLoader.load(this.sourcePath, function (data) {

            _this.source = JSON.parse(data);
            // TODO: Handle invalid GeoJSON

            _this._initialize();
        }, function () {
            return null;
        }, function (error) {
            return console.error("Could not load SymbolLayer3D source file.");
        });
    } else {
        this._initialize();
    }
}

SymbolLayer3D.prototype = {
    updateSourceData: function updateSourceData(source, absolute) {
        var _this2 = this;

        var oldFeatures = {};

        if (!source.features) return console.error("updateSourceData expects a GeoJSON FeatureCollection with a 'features' property");
        source.features.forEach(function (feature, i) {
            var key = _this2.keyGen(feature, i); // TODO: error handling
            if (key in _this2.features) {
                // Update
                _this2.features[key].geojson = feature;
                oldFeatures[key] = feature;
            } else {
                // Create
                var modelDirectory = _this2.modelDirectoryGen(feature, i);
                var modelName = _this2.modelNameGen(feature, i);

                // TODO: Handle loading of new models
                _this2.features[key] = {
                    geojson: feature,
                    model: modelDirectory + modelName
                };
            }
        });

        this._addOrUpdateFeatures(this.features);

        if (absolute) {
            // Check for any features that are not have not been updated and remove them from the scene
            for (key in this.features) {
                if (!key in oldFeatures) {
                    this.removeFeature(key);
                }
            }
        }

        this.source = source;
    },
    removeFeature: function removeFeature(key) {
        this.parent.remove(this.features[key].rawObject);
        delete this.features[key];
    },
    _initialize: function _initialize() {
        var _this3 = this;

        var modelNames = [];

        // Determine how to load the models
        if (!this.modelNameGen) return console.error("Invalid model name definition provided to SymbolLayer3D");
        if (!this.modelDirectoryGen) return console.error("Invalid model directory definition provided to SymbolLayer3D");

        // Add features to a map
        this.source.features.forEach(function (f, i) {
            var key = _this3.keyGen(f, i); // TODO: error handling
            if (_this3.features[key] !== undefined) console.warn("Features with duplicate key: " + key);

            var modelDirectory = _this3.modelDirectoryGen(f, i);
            var modelName = _this3.modelNameGen(f, i);
            _this3.features[key] = {
                geojson: f,
                model: modelDirectory + modelName
            };

            modelNames.push({ directory: modelDirectory, name: modelName });
        });

        // Filter out only unique models
        modelNames.forEach(function (m) {
            return _this3.models[m.directory + m.name] = { directory: m.directory, name: m.name, loaded: false };
        });

        // And load models asynchronously
        var remaining = Object.keys(this.models).length;
        console.log("Loading " + remaining + " models", this.models);
        var modelComplete = function modelComplete(m) {
            console.log("Model complete!", m);
            //if(this.models[m].loaded) 
            if (--remaining === 0) {
                _this3.loaded = true;
                _this3._addOrUpdateFeatures(_this3.features);
            }
        };

        var _loop = function _loop() {
            // TODO: Support formats other than OBJ/MTL
            var objLoader = new OBJLoader();
            var materialLoader = new MTLLoader();

            loadObject = function (modelName) {
                return function (materials) {
                    // Closure madness!
                    if (materials) {
                        materials.preload();

                        for (material in materials.materials) {
                            materials.materials[material].shininess /= 50; // Shininess exported by Blender is way too high
                        }

                        objLoader.setMaterials(materials);
                    }
                    objLoader.setPath(_this3.models[modelName].directory);

                    console.log("Loading model ", modelName);

                    objLoader.load(_this3.models[modelName].name + ".obj", function (obj) {
                        _this3.models[modelName].obj = obj;
                        _this3.models[modelName].isMesh = obj.isMesh;
                        _this3.models[modelName].loaded = true;

                        modelComplete(modelName);
                    }, function () {
                        return null;
                    }, function (error) {
                        console.error("Could not load SymbolLayer3D model file.");
                    });
                };
            }(m);

            materialLoader.setPath(_this3.models[m].directory);
            materialLoader.load(_this3.models[m].name + ".mtl", loadObject, function () {
                return null;
            }, function (error) {
                console.warn("No material file found for SymbolLayer3D model " + m);
                loadObject();
            });
        };

        for (m in this.models) {
            var loadObject;

            _loop();
        }
    },
    _addOrUpdateFeatures: function _addOrUpdateFeatures(features) {
        for (key in features) {
            var f = features[key];
            var position = f.geojson.geometry.coordinates;
            var scale = this.scaleGen(f.geojson);

            var rotation = this.rotationGen(f.geojson);

            var obj;
            if (!f.rawObject) {
                // Need to create a scene graph object and add it to the scene
                if (f.model && this.models[f.model] && this.models[f.model].obj && this.models[f.model].loaded) obj = this.models[f.model].obj.clone();else {
                    console.warn("Model not loaded: " + f.model);
                    obj = new THREE.Group(); // Temporary placeholder if the model doesn't exist and/or will be loaded later
                }

                f.rawObject = obj;

                this.parent.addAtCoordinate(obj, position, { scaleToLatitude: this.scaleWithMapProjection, preScale: scale });
                //this.features[key] = f;
            } else {
                obj = f.rawObject;
                this.parent.moveToCoordinate(obj, position, { scaleToLatitude: this.scaleWithMapProjection, preScale: scale });
            }

            obj.rotation.copy(rotation);
        }
    }
};

module.exports = exports = SymbolLayer3D;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var ValueGenerator = function ValueGenerator(input) {
    if ((typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object' && input.property !== undefined) // Value name comes from a property in each item
        return function (f) {
            return f.properties[input.property];
        };else if ((typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object' && input.generator !== undefined) // Value name generated by a function run on each item
        return input.generator;else return function () {
        return input;
    };

    return undefined;
};

module.exports = exports = ValueGenerator;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Layer2 = __webpack_require__(0);

var _Layer3 = _interopRequireDefault(_Layer2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 第三人称视角图层
 * @extends Layer
 */
var ThirdPersonLayer = function (_Layer) {
    _inherits(ThirdPersonLayer, _Layer);

    function ThirdPersonLayer(config) {
        _classCallCheck(this, ThirdPersonLayer);

        var _this = _possibleConstructorReturn(this, (ThirdPersonLayer.__proto__ || Object.getPrototypeOf(ThirdPersonLayer)).call(this, config));

        _this.defaultParams = {
            target: null, //跟踪物体
            viewRotation: 0, //观看视角
            targetRotation: 0, //观看物体默认旋转角度
            autoUpdate: false,
            lockRotation: true //锁定视角


            /**
             * 构造函数
             * @param {Object} target - 需要摄像机跟随的物体
             * @param {Number} viewRotation - 观看视角（deg）
             * @param {Number} targetRotation - 物体初始旋转角度，用来配合摄像机位置  (deg)
             */
        };

        for (var x in _this.defaultParams) {
            if (typeof _this[x] == "undefined") {
                _this[x] = _this.defaultParams[x];
            }
        }
        return _this;
    }

    _createClass(ThirdPersonLayer, [{
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
}(_Layer3.default);

;
module.exports = ThirdPersonLayer;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Layer2 = __webpack_require__(0);

var _Layer3 = _interopRequireDefault(_Layer2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 地图控制类
 * @class
 * @extends Layer
 */
var MapControl = function (_Layer) {
    _inherits(MapControl, _Layer);

    /**
     * 构造函数
     * @param {Object} config - config
     * @param {number} config.moveSpeed - 移动速度
     * @param {number} config.pitchSpeed - 角度改变速度
     * @param {number} config.rotateSpeed - 旋转速度
     */
    function MapControl(config) {
        _classCallCheck(this, MapControl);

        var _this2 = _possibleConstructorReturn(this, (MapControl.__proto__ || Object.getPrototypeOf(MapControl)).call(this, config));

        _this2.defaultParams = {
            moveSpeed: 20,
            pitchSpeed: 0.1,
            rotateSpeed: 0.15 };

        for (var x in _this2.defaultParams) {
            if (typeof _this2[x] == "undefined") {
                _this2[x] = _this2.defaultParams[x];
            }
        }
        return _this2;
    }

    _createClass(MapControl, [{
        key: "onAdd",
        value: function onAdd(map) {
            var _this = this;
            this.pigeonMap = map;
            this.map = this.pigeonMap.map; //用户配置或真实地图
            this.cameraControl = this.pigeonMap.cameraControl;
            this.initConfig();
            this.listenEvents();
            //添加相机更新函数
            this.on("change", function () {
                _this.pigeonMap.fire("change");
                _this.cameraControl.updateMap(); //更新用户参数为相机参数
            });
        }
    }, {
        key: "initConfig",
        value: function initConfig() {

            var transform = {};
        }
    }, {
        key: "listenEvents",


        /**
         * 监听事件
         */
        value: function listenEvents() {
            var _this = this;
            var container = this.map.container;
            this.onDown = function onDown(event) {
                if (event.button == 0) {
                    //左键
                    _this.mouseStatus = 'left';
                } else if (event.button == 2) {
                    //右键
                    _this.mouseStatus = 'right';
                }
                _this.mouseDownPosition = {
                    x: event.clientX,
                    y: event.clientY
                };
                _this.map.container.addEventListener('mousemove', _this.onMove);
            };
            this.onUp = function onUp(event) {
                _this.mouseStatus = false;
                _this.map.container.removeEventListener('mousemove', _this.onMove);
            };
            this.onMove = function onMove(event) {
                if (!_this.mouseStatus) {
                    return;
                }
                if (_this.mouseStatus == 'left') {
                    var yDis = event.clientY - _this.mouseDownPosition.y;
                    var xDis = event.clientX - _this.mouseDownPosition.x;
                    var distance = Math.sqrt(Math.pow(xDis, 2) + Math.pow(yDis, 2));
                    if (distance < 0.1) return false;
                    var rotation = (xDis > 0 ? -1 : 1) * Math.asin(yDis / distance) + _this.map.transform.angle;
                    var ratio = void 0;
                    if (!_this.pigeonMap.isUTM) {
                        ratio = _this.moveSpeed / _this.map.zoom / _this.map.transform.scale;
                    } else {
                        ratio = _this.moveSpeed / Math.pow(_this.map.zoom, 2);
                    }
                    _this.map.center[0] += (xDis > 0 ? -1 : 1) * (distance * Math.cos(rotation)) * ratio;
                    _this.map.center[1] += (xDis > 0 ? -1 : 1) * (distance * Math.sin(rotation)) * ratio;
                    _this.cameraControl.updateMap();
                    /**
                     * 地图移动
                     * @event MapControl#move 
                     * @property {Object} event
                     */
                    _this.fire("move", event); //地图移动
                    _this.fire("change", event);
                } else if (_this.mouseStatus == 'right') {
                    _this.map.pitch += _this.pitchSpeed * (event.clientY - _this.mouseDownPosition.y);
                    if (_this.map.pitch > 90) {
                        _this.map.pitch = 90;
                    } else if (_this.map.pitch < 0) {
                        _this.map.pitch = 0;
                    }
                    _this.map.rotation -= _this.rotateSpeed * (event.clientX - _this.mouseDownPosition.x);
                    _this.cameraControl.updateMap();
                    /**
                     * 地图旋转
                     * @event MapControl#rotate
                     * @property {Object} event 
                     */
                    _this.fire("rotate", event); //地图x旋转
                    _this.fire("change", event);
                }

                _this.mouseDownPosition = {
                    x: event.clientX,
                    y: event.clientY
                };
            };
            this.onWheel = function onWheel(event) {
                _this.map.zoom -= event.deltaY / 100;
                _this.cameraControl.updateMap();
                event.preventDefault();
                /**
                 * 地图缩放
                 * @event MapControl#zoom
                 * @property {Object} event - 原生event对象
                 */
                _this.fire("zoom", event); //地图缩放

                /**
                 * 地图状态发生改变，发生操作时触发
                 * @event MapControl#change
                 * @property {Object} event - 原生event对象
                 */
                _this.fire("change", event);
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
}(_Layer3.default);

module.exports = MapControl;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Layer2 = __webpack_require__(0);

var _Layer3 = _interopRequireDefault(_Layer2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 文字图层类
 * @extends Layer
 */
var TextLayer = function (_Layer) {
    _inherits(TextLayer, _Layer);

    function TextLayer(config) {
        _classCallCheck(this, TextLayer);

        var _this2 = _possibleConstructorReturn(this, (TextLayer.__proto__ || Object.getPrototypeOf(TextLayer)).call(this, config));

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

    _createClass(TextLayer, [{
        key: 'onAdd',


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
        key: 'initDom',
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
        key: 'initCanvas',
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
        key: 'addText',
        value: function addText(options) {
            options = Object.assign({}, options);
            options.id = options.id || '_text_' + this.textId++;
            this.texts.push(options);
            return options;
        }
    }, {
        key: 'drawText',
        value: function drawText() {

            if (!this.canvasRender) {
                this.drawDomText();
            } else {
                this.drawCanvasText();
            }
        }
    }, {
        key: 'drawDomText',
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
        key: 'drawCanvasText',
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
        key: 'updateDomText',
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
        key: 'removeText',
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
        key: 'update',
        value: function update() {}
    }, {
        key: 'updateText',
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
        key: 'getText',
        value: function getText(id) {
            for (var x in this.texts) {
                if (this.texts[x].id == id) {
                    return this.text[x];
                }
            }
        }
    }, {
        key: 'onRemove',
        value: function onRemove() {
            this.pigeonMap.off('change', this.change); //去除map对该对象的引用
            this._listeners = null;
        }

        /**
         * 获取某个文字对象的索引
         */

    }, {
        key: 'getTextIndex',
        value: function getTextIndex(id) {
            for (var x in this.texts) {
                if (this.texts[x].id == id) {
                    return x;
                }
            }
        }
    }]);

    return TextLayer;
}(_Layer3.default);

;

module.exports = TextLayer;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Layer2 = __webpack_require__(0);

var _Layer3 = _interopRequireDefault(_Layer2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

module.exports = function (_Layer) {
    _inherits(VRLayer, _Layer);

    function VRLayer(config) {
        _classCallCheck(this, VRLayer);

        //先监听时间，再获取VR
        var _this2 = _possibleConstructorReturn(this, (VRLayer.__proto__ || Object.getPrototypeOf(VRLayer)).call(this, config));

        _this2.noVR = false;
        _this2.vrStatus = 'not suppert VR';
        _this2.listenEvents();
        _this2.getVRDisplays();
        return _this2;
    }

    /**
     * 获取vrDevice
     */


    _createClass(VRLayer, [{
        key: 'getVRDisplays',
        value: function getVRDisplays() {
            var _this = this;
            if (navigator.getVRDisplays) {
                navigator.getVRDisplays().then(function (displays) {
                    if (displays.length > 0) {
                        _this.device = displays[0];
                        _this.renderer.vr.enabled = true;
                        _this.pigeonMap.renderer.vr.setDevice(_this.device);
                        //初始化frameData
                        _this.frameData = new VRFrameData();
                    } else {
                        _this.vrStatus = 'noDisplay';
                        console.warn('no vr displays');
                    }
                }).catch(function (e) {
                    console.warn('Unable to get VR Displays');
                });
            }
        }

        /**
         * 监听全局VR事件
         */

    }, {
        key: 'listenEvents',
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
        key: 'enterVR',
        value: function enterVR() {
            this.device.requestPresent([{ source: this.renderer.domElement }]);
        }

        /**
         * 退出VR
         */

    }, {
        key: 'exitVR',
        value: function exitVR() {
            this.device.exitPresent();
        }

        /**
         * 添加Button
         */

    }, {
        key: 'createButton',
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
        key: 'onAdd',
        value: function onAdd(map) {
            this.pigeonMap = map;
            this.renderer = map.renderer;
            this.initVRRenderer();
        }
    }, {
        key: 'initVRRenderer',
        value: function initVRRenderer() {
            var _this = this;
        }
    }]);

    return VRLayer;
}(_Layer3.default);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Layer2 = __webpack_require__(0);

var _Layer3 = _interopRequireDefault(_Layer2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 周边车辆绘制类
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var PointsLayer = function (_Layer) {
    _inherits(PointsLayer, _Layer);

    function PointsLayer(config) {
        _classCallCheck(this, PointsLayer);

        var _this = _possibleConstructorReturn(this, (PointsLayer.__proto__ || Object.getPrototypeOf(PointsLayer)).call(this, config));

        _this.lanePoints = [];

        _this.initPoints();
        return _this;
    }

    _createClass(PointsLayer, [{
        key: 'initPoints',
        value: function initPoints() {
            this.material = new THREE.PointsMaterial({ color: 0xffffff, size: 10 });
            this.pointsGeometry = new THREE.BufferGeometry();
            this.points = new THREE.Points(this.pointsGeometry, this.material);
        }
    }, {
        key: 'onAdd',
        value: function onAdd(map) {
            this.pigeonMap = map;
            this.pigeonMap.world.add(this.points);
        }

        /**
         * 采用相对坐标，防止抖动
         */

    }, {
        key: 'drawPoints',
        value: function drawPoints(data) {
            this.baseLngLat = data[0];
            this.baseXYZ = this.pigeonMap.projectToWorld(this.baseLngLat);
            var points = [],
                xyz = void 0;
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
}(_Layer3.default);

module.exports = PointsLayer;

/***/ })
/******/ ]);