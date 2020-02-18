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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(11);
} else {}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(19);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _localStorage = __webpack_require__(46);

module.exports = {
    readData: _localStorage.readData,
    writeData: _localStorage.writeData,
    readComponent: _localStorage.readComponent,
    writeComponent: _localStorage.writeComponent,
    popHistory: _localStorage.popHistory
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.saveComponentsToWindow = saveComponentsToWindow;
exports.getNestedComponents = getNestedComponents;

var _convertToReactComponent = __webpack_require__(8);

var _Storage = __webpack_require__(3);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } // Dependencies.

/**
 * 
 * Asset in style sheet syntax - $asset
 */

function createStylesheet(style, name) {

    // Check if style has $assets
    while (style.includes("$assets")) {
        // Replace it with asset blob url
        var asset = style.split("['")[1].split("]")[0].split("");
        asset.pop();
        asset = asset.join("");
        style = style.replace("$assets['" + asset + "']", "url(" + window.assets[asset] + ")");
    }
    var toDelete = [].concat(_toConsumableArray(document.querySelectorAll("[data-component-name='ParentComponent']")));
    toDelete.forEach(function (item) {
        item.remove();
    });
    var dynamicStyle = document.createElement('style');
    dynamicStyle.setAttribute("data-component-name", name);
    dynamicStyle.type = 'text/css';
    dynamicStyle.innerHTML = style;
    document.body.appendChild(dynamicStyle);
}

/** Takes a component and converts it as a react component */
function saveToWindow(component) {
    createStylesheet(component.style, component.name);
    window[component.name] = (0, _convertToReactComponent.createComponent)(component);
}

function checkNestedComponents(markup) {

    var components = (0, _Storage.readData)("ui-editor");

    return components.filter(function (component) {
        return markup.includes(component.name);
    }).length > 0;
}

/** Takes components and saves them to window as react Object */
function saveComponentsToWindow(nestedComponents) {
    // Transpile them and make them global.
    nestedComponents.forEach(function (component) {
        saveToWindow(component);
    });
}

/** Takes markup and returns children component objects. */
function getNestedComponents(parent) {
    // Should be able to detect nested component.

    var components = (0, _Storage.readData)("ui-editor");
    var nestedComponents = [parent];
    if (checkNestedComponents(parent.markup)) {
        // find all the nested components from the markup and push it to nestedComponents.
        var children = components.filter(function (component) {
            return parent.markup.includes(component.name);
        });
        // Find grand kids.
        var grandKids = children.map(getNestedComponents).flat(3);
        nestedComponents.push.apply(nestedComponents, _toConsumableArray(grandKids));
    }
    return nestedComponents.filter(function (component) {
        return component && component.markup;
    });
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(36);

var _NoFolder = __webpack_require__(38);

var _NoFolder2 = _interopRequireDefault(_NoFolder);

var _NewFolder = __webpack_require__(42);

var _NewFolder2 = _interopRequireDefault(_NewFolder);

var _Reducer = __webpack_require__(45);

var _Events = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Styles.

var Folder = function (_Component) {
    _inherits(Folder, _Component);

    function Folder(props) {
        _classCallCheck(this, Folder);

        var _this = _possibleConstructorReturn(this, (Folder.__proto__ || Object.getPrototypeOf(Folder)).call(this, props));

        _this.state = {
            status: "fa fa-folder",
            folderClass: "newFolder",
            name: _this.props.folder.name,
            contents: _this.props.folder.contents,
            type: _this.props.folder.type
        };

        window.addEventListener("keydown", _Reducer.deleteFolder.bind(_this));
        return _this;
    }

    _createClass(Folder, [{
        key: "newFolder",
        value: function newFolder(folder) {
            this.props.onFolderUpdate(folder);
        }
    }, {
        key: "render",
        value: function render() {

            var folder = this.props.folder;
            var contents = this.props.contents;
            if (folder.type == "newFolder") {
                return _react2.default.createElement(_NewFolder2.default, { onNewFolder: this.newFolder.bind(this) });
            }
            if (folder.type == "folder") {
                return _react2.default.createElement(
                    "div",
                    {
                        className: this.state.folderClass,
                        "data-folder-name": folder.name,
                        draggable: "true",
                        onMouseOver: _Reducer.selectFolder.bind(this),
                        onMouseLeave: _Reducer.deselectFolder.bind(this),
                        onDrop: _Events.dropHandler.bind(this),
                        onDragOver: _Events.dragOverHandler.bind(this),
                        onDragLeave: _Events.dragLeaveHandler.bind(this),
                        onDragStart: _Events.onDragStart.bind(this) },
                    _react2.default.createElement("i", { className: this.state.status, onClick: _Reducer.toggleFolder.bind(this) }),
                    _react2.default.createElement("input", { type: "text", className: "folder", placeholder: "Enter folder name", readOnly: true, value: this.state.name }),
                    _react2.default.createElement(
                        "ul",
                        null,
                        contents
                    )
                );
            }
            if (folder.type == "noFolder") {
                return _react2.default.createElement(_NoFolder2.default, { contents: contents });
            }
        }
    }]);

    return Folder;
}(_react.Component);

exports.default = Folder;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dropHandler = dropHandler;
exports.dragOverHandler = dragOverHandler;
exports.dragLeaveHandler = dragLeaveHandler;
exports.onDragStart = onDragStart;
exports.onExport = onExport;

var _nestedComponentSetup = __webpack_require__(4);

var _convertToReactComponent = __webpack_require__(8);

var _Storage = __webpack_require__(3);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function dropHandler(ev) {
    ev.preventDefault();
    var componentName = ev.dataTransfer.getData("component-name");
    var folderName = ev.dataTransfer.getData("folder-name");
    var contents = Array.from(this.state.contents);

    // Check if the dropped item is a component
    if (componentName) {
        contents.push(componentName);
    }
    // Check if it is a folder. Also check if we are not dropping on the original folder. may be remove it from the dom. NOPE. 
    else if (folderName && folderName !== this.state.folderName) {
            contents.push({
                name: folderName,
                contents: [],
                type: "folder"
            });
        }
    this.props.onFolderUpdate({
        name: this.state.name,
        contents: contents,
        type: "folder"
    });

    console.log("Drop from folder");
}

function dragOverHandler(ev) {
    ev.preventDefault();
    this.setState({
        folderClass: "newFolder dragOver"
    });
    console.log("Drag");
}

function dragLeaveHandler(e) {
    console.log("drag");
    this.setState({
        folderClass: "newFolder"
    });
}

function onDragStart(e) {

    var name = event.target.getAttribute("data-folder-name");
    e.dataTransfer.setData("folder-name", name);
}

function onExport(componentName) {
    var components = (0, _Storage.readData)("ui-editor");
    var selectedComponent = components.find(function (component) {
        return component.name.includes(componentName);
    });
    var nestedComponents = (0, _nestedComponentSetup.getNestedComponents)(selectedComponent);

    var uniqueComponents = [].concat(_toConsumableArray(new Set(nestedComponents.map(function (com) {
        return com.name;
    })))).map(function (name) {
        return components.find(function (element) {
            return element.name === name;
        });
    });
    var removeParanthesis = function removeParanthesis(component) {
        return component.replace("(", "").replace("})", "}");
    };
    console.log(uniqueComponents.map(function (component) {
        return (0, _convertToReactComponent.convertToReactcomponent)(component);
    }).map(removeParanthesis).join(""));
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function createComponent(component) {

    var componentString = convertToReactcomponent(component);

    // eval does not evaluate class if not exclosed in paranthesis.
    return eval(Babel.transform(componentString, { presets: ['react'], plugins: ["transform-es2015-classes"] }).code);
}

// Elements to  react component.
function convertToReactcomponent(component) {

    var markup = "markup";

    component.events.forEach(function (event) {
        event.id = event.id.replace("-", "");
    });

    var getComponentNameInMarkup = function getComponentNameInMarkup(component) {
        return component[markup].replace(">", " {...this.props}>{this.props.children}");
    };

    var getComponentEventedMarkup = function getComponentEventedMarkup(markup, events) {
        events.forEach(function (event) {
            var id = "id=\"" + event.id + "\"";
            // check if markup contains the id.
            if (markup.includes(id)) {
                markup = markup.replace(id, id + " " + event.name + "={this." + (event.id + event.name) + ".bind(this)}");
            }
            // its a child component.
            else {
                    markup = markup.replace("<" + event.id, "<" + event.id + " " + event.name + "={this." + (event.id + event.name) + ".bind(this)}");
                }
        });

        return markup.split("{state.").join("{this.state.");
    };

    // checks if state override is on. then adds state prop to child 
    var getStatedMarkup = function getStatedMarkup(markup) {
        // for all the config.
        // filter child with overide state is true
        var config = JSON.parse(component.config);
        var childrenConfig = Object.keys(config);
        childrenConfig.forEach(function (childName) {

            // PRECAUTION : Edit markup only for showHideProp
            if (config[childName].showHideProp && !config[childName].override) {
                var childMarkup = "<" + childName + "></" + childName + ">";
                var showHideChild = "{this.state." + config[childName].showHideProp + " ? " + childMarkup + ": null}";
                if (markup.includes(childMarkup)) {
                    markup = markup.replace(childMarkup, showHideChild);
                }
            }

            // PRECAUTION: Edit markup only for override
            if (config[childName].override && !config[childName].showHideProp) {
                markup = markup.replace(childName, childName + (" state={this.state." + childName + "}"));
            }

            // PRECAUTION: Edit markup for both changes.
            if (config[childName].showHideProp && config[childName].override) {

                //1. show or hide
                var _childMarkup = "<" + childName + "></" + childName + ">";
                var _showHideChild = "this.state." + _showHideChild + " ? " + _childMarkup + ": null";
                if (markup.includes(_childMarkup)) {
                    markup = markup.replace(_childMarkup, _showHideChild);
                }

                //2. override state.
                markup = markup.replace(childName, childName + (" state={this.state." + childName + "}"));
            }

            // PRECAUTION: Edit markup for rendering list. Should not use other configuration while using this.
            if (config[childName].renderListProp && !config[childName].override && !config[childName].showHideChild) {
                var _childMarkup2 = "<" + childName + "></" + childName + ">";

                var childMarkupWithProps = "<" + childName + " state={item} key={i}></" + childName + ">";
                var renderListMarkup = "{this.state." + config[childName].renderListProp + ".map((item,i)=>" + childMarkupWithProps + ")}";

                markup = markup.replace(_childMarkup2, renderListMarkup);
            }
        });
        return markup;
    };

    var getComponentReducers = function getComponentReducers(events) {

        return events.map(function (event) {
            var functionName = event.id + event.name;
            var functionDef = "\n                var state = JSON.parse(JSON.stringify(this.state))\n                " + event.reducer + "\n                this.setState(state);";

            if (event.publishable === true) {
                return "\n                    " + functionName + " (e) {\n                        " + functionDef + "\n                        e.state = state;\n                        debugger;(1)\n                        this.props." + event.publishName + "? this.props." + event.publishName + "(e):null;\n                    }\n                    ";
            }
            return "\n                    " + functionName + " (e) {\n                        " + functionDef + "\n                    }";
        }).join("\n");
    };

    var componentNamedMakrup = getComponentNameInMarkup(component);
    var stateOverideMarkup = getStatedMarkup(componentNamedMakrup);
    var componentEventedMarkup = getComponentEventedMarkup(stateOverideMarkup, component.events);
    var componentReducers = getComponentReducers(component.events);
    var componentName = component.name.split(" ").join("");
    var componentState = component.state;
    var ReactComponent = "(\n    class " + componentName + " extends Component {\n    \n        constructor(props) {\n            super(props);\n            this.state = this.props.state || " + componentState + ";\n        }\n    \n        " + componentReducers + "\n    \n        render() {\n    \n            return (" + componentEventedMarkup + ")\n        }\n    })\n    ";
    return ReactComponent;
}

module.exports = {
    createComponent: createComponent,
    convertToReactcomponent: convertToReactcomponent
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(71);

var _MessageComponent = __webpack_require__(73);

var _MessageComponent2 = _interopRequireDefault(_MessageComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libraries.

var MessagesComponent = function (_Component) {
    _inherits(MessagesComponent, _Component);

    function MessagesComponent(props) {
        _classCallCheck(this, MessagesComponent);

        return _possibleConstructorReturn(this, (MessagesComponent.__proto__ || Object.getPrototypeOf(MessagesComponent)).call(this, props));
    }

    _createClass(MessagesComponent, [{
        key: "render",
        value: function render() {

            var messages = this.props.messages;
            return _react2.default.createElement(
                "div",
                { className: "console" },
                messages.map(function (message, index) {
                    return _react2.default.createElement(_MessageComponent2.default, { key: index, message: message });
                })
            );
        }
    }]);

    return MessagesComponent;
}(_react.Component);

exports.default = MessagesComponent;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(17);

var _Assets = __webpack_require__(20);

var _Assets2 = _interopRequireDefault(_Assets);

var _Components = __webpack_require__(30);

var _Components2 = _interopRequireDefault(_Components);

var _DraggableComponent = __webpack_require__(54);

var _DraggableComponent2 = _interopRequireDefault(_DraggableComponent);

var _Editor = __webpack_require__(58);

var _Editor2 = _interopRequireDefault(_Editor);

var _Events = __webpack_require__(62);

var _Events2 = _interopRequireDefault(_Events);

var _History = __webpack_require__(83);

var _History2 = _interopRequireDefault(_History);

var _Preview = __webpack_require__(86);

var _Preview2 = _interopRequireDefault(_Preview);

var _Reducer = __webpack_require__(92);

var _Storage = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libraries.

// Dependencies.


// Components.


// Reducers.


// Utils


var Index = function (_Component) {
    _inherits(Index, _Component);

    function Index(props) {
        _classCallCheck(this, Index);

        var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

        var components = (0, _Storage.readData)("ui-editor");
        var componentNames = components.map(function (component) {
            return component.name;
        });
        _this.state = {
            components: components,
            selectedTag: "",
            component: {
                name: "",
                markup: "",
                style: "",
                state: "{ }",
                events: []
            },
            selectedComponent: "",
            folders: (0, _Storage.readData)("folders") || [{
                type: "noFolder",
                contents: componentNames,
                name: ""
            }],
            showEditor: false
        };
        _this.updateConfig = _Reducer.updateConfig.bind(_this);
        _this.updateEvent = _Reducer.updateEvent.bind(_this);
        _this.saveElement = _Reducer.saveElement.bind(_this);
        _this.updateSelectedComponent = _Reducer.updateSelectedComponent.bind(_this);
        return _this;
    }

    _createClass(Index, [{
        key: "updatePreview",
        value: function updatePreview(element) {
            this.setState({
                previewComponent: element
            });
        }
    }, {
        key: "updateStyles",
        value: function updateStyles() {
            this.setState({
                element: this.state.selectedComponent
            });
        }
    }, {
        key: "updateFolders",
        value: function updateFolders(folders) {
            this.setState({
                folders: folders
            });
            (0, _Storage.writeData)("folders", folders);
        }
    }, {
        key: "openEditor",
        value: function openEditor() {
            this.setState({
                showEditor: true
            });
        }
    }, {
        key: "render",
        value: function render() {
            var selectedComponent = this.state.selectedComponent || this.state.component;
            try {
                return _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement(
                        _DraggableComponent2.default,
                        null,
                        _react2.default.createElement(_Components2.default, {
                            key: Math.ceil(Math.random() * 1000),
                            components: this.state.components,
                            folders: this.state.folders,
                            selectedComponent: this.state.selectedComponent,
                            title: "Components",

                            onOpenEditor: this.openEditor.bind(this),
                            onSelection: this.updateSelectedComponent,
                            onFoldersUpdate: this.updateFolders.bind(this)
                        })
                    ),
                    _react2.default.createElement(
                        _DraggableComponent2.default,
                        null,
                        _react2.default.createElement(_Assets2.default, {
                            title: "Assets"
                        })
                    ),
                    _react2.default.createElement(
                        _DraggableComponent2.default,
                        null,
                        _react2.default.createElement(_Events2.default, {
                            key: Math.ceil(Math.random() * 1000),
                            component: selectedComponent,
                            selectedTag: this.state.selectedTag,
                            components: this.state.components,
                            onEventsUpdate: this.updateEvent,
                            onConfigUpdate: this.updateConfig,
                            title: "Events"
                        })
                    ),
                    this.state.showEditor ? _react2.default.createElement(
                        _DraggableComponent2.default,
                        null,
                        _react2.default.createElement(_Editor2.default, {
                            key: Math.ceil(Math.random() * 1000),
                            element: selectedComponent,
                            name: selectedComponent.name,
                            markup: selectedComponent.markup,
                            style: selectedComponent.style,
                            state: selectedComponent.state,
                            title: "Editor",
                            onSave: this.saveElement
                        })
                    ) : null,
                    _react2.default.createElement(
                        _DraggableComponent2.default,
                        null,
                        _react2.default.createElement(_Preview2.default, {
                            key: Math.ceil(Math.random() * 1000),
                            component: selectedComponent,
                            title: "Preview"
                        })
                    ),
                    _react2.default.createElement(
                        _DraggableComponent2.default,
                        null,
                        _react2.default.createElement(_History2.default, {
                            title: "History"
                        })
                    )
                );
            } catch (e) {
                console.log(e);
                return _react2.default.createElement(
                    _DraggableComponent2.default,
                    null,
                    _react2.default.createElement(_History2.default, {
                        name: "History"
                    })
                );
            }
        }
    }]);

    return Index;
}(_react.Component);

_reactDom2.default.render(_react2.default.createElement(Index, null), document.getElementById("index"));

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var k=__webpack_require__(5),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.concurrent_mode"):60111,y=n?Symbol.for("react.forward_ref"):60112,z=n?Symbol.for("react.suspense"):60113,aa=n?Symbol.for("react.memo"):
60115,ba=n?Symbol.for("react.lazy"):60116,A="function"===typeof Symbol&&Symbol.iterator;function ca(a,b,d,c,e,g,h,f){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[d,c,e,g,h,f],m=0;a=Error(b.replace(/%s/g,function(){return l[m++]}));a.name="Invariant Violation"}a.framesToPop=1;throw a;}}
function B(a){for(var b=arguments.length-1,d="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=0;c<b;c++)d+="&args[]="+encodeURIComponent(arguments[c+1]);ca(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",d)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D={};
function E(a,b,d){this.props=a;this.context=b;this.refs=D;this.updater=d||C}E.prototype.isReactComponent={};E.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?B("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,d){this.props=a;this.context=b;this.refs=D;this.updater=d||C}var H=G.prototype=new F;
H.constructor=G;k(H,E.prototype);H.isPureReactComponent=!0;var I={current:null},J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,d){var c=void 0,e={},g=null,h=null;if(null!=b)for(c in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,c)&&!L.hasOwnProperty(c)&&(e[c]=b[c]);var f=arguments.length-2;if(1===f)e.children=d;else if(1<f){for(var l=Array(f),m=0;m<f;m++)l[m]=arguments[m+2];e.children=l}if(a&&a.defaultProps)for(c in f=a.defaultProps,f)void 0===e[c]&&(e[c]=f[c]);return{$$typeof:p,type:a,key:g,ref:h,props:e,_owner:J.current}}
function da(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function N(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var O=/\/+/g,P=[];function Q(a,b,d,c){if(P.length){var e=P.pop();e.result=a;e.keyPrefix=b;e.func=d;e.context=c;e.count=0;return e}return{result:a,keyPrefix:b,func:d,context:c,count:0}}
function R(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>P.length&&P.push(a)}
function S(a,b,d,c){var e=typeof a;if("undefined"===e||"boolean"===e)a=null;var g=!1;if(null===a)g=!0;else switch(e){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0}}if(g)return d(c,a,""===b?"."+T(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var h=0;h<a.length;h++){e=a[h];var f=b+T(e,h);g+=S(e,f,d,c)}else if(null===a||"object"!==typeof a?f=null:(f=A&&a[A]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),h=
0;!(e=a.next()).done;)e=e.value,f=b+T(e,h++),g+=S(e,f,d,c);else"object"===e&&(d=""+a,B("31","[object Object]"===d?"object with keys {"+Object.keys(a).join(", ")+"}":d,""));return g}function U(a,b,d){return null==a?0:S(a,"",b,d)}function T(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function ea(a,b){a.func.call(a.context,b,a.count++)}
function fa(a,b,d){var c=a.result,e=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?V(a,c,d,function(a){return a}):null!=a&&(N(a)&&(a=da(a,e+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+d)),c.push(a))}function V(a,b,d,c,e){var g="";null!=d&&(g=(""+d).replace(O,"$&/")+"/");b=Q(b,g,c,e);U(a,fa,b);R(b)}function W(){var a=I.current;null===a?B("321"):void 0;return a}
var X={Children:{map:function(a,b,d){if(null==a)return a;var c=[];V(a,c,null,b,d);return c},forEach:function(a,b,d){if(null==a)return a;b=Q(null,null,b,d);U(a,ea,b);R(b)},count:function(a){return U(a,function(){return null},null)},toArray:function(a){var b=[];V(a,b,null,function(a){return a});return b},only:function(a){N(a)?void 0:B("143");return a}},createRef:function(){return{current:null}},Component:E,PureComponent:G,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,
_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a},forwardRef:function(a){return{$$typeof:y,render:a}},lazy:function(a){return{$$typeof:ba,_ctor:a,_status:-1,_result:null}},memo:function(a,b){return{$$typeof:aa,type:a,compare:void 0===b?null:b}},useCallback:function(a,b){return W().useCallback(a,b)},useContext:function(a,b){return W().useContext(a,b)},useEffect:function(a,b){return W().useEffect(a,b)},useImperativeHandle:function(a,
b,d){return W().useImperativeHandle(a,b,d)},useDebugValue:function(){},useLayoutEffect:function(a,b){return W().useLayoutEffect(a,b)},useMemo:function(a,b){return W().useMemo(a,b)},useReducer:function(a,b,d){return W().useReducer(a,b,d)},useRef:function(a){return W().useRef(a)},useState:function(a){return W().useState(a)},Fragment:r,StrictMode:t,Suspense:z,createElement:M,cloneElement:function(a,b,d){null===a||void 0===a?B("267",a):void 0;var c=void 0,e=k({},a.props),g=a.key,h=a.ref,f=a._owner;if(null!=
b){void 0!==b.ref&&(h=b.ref,f=J.current);void 0!==b.key&&(g=""+b.key);var l=void 0;a.type&&a.type.defaultProps&&(l=a.type.defaultProps);for(c in b)K.call(b,c)&&!L.hasOwnProperty(c)&&(e[c]=void 0===b[c]&&void 0!==l?l[c]:b[c])}c=arguments.length-2;if(1===c)e.children=d;else if(1<c){l=Array(c);for(var m=0;m<c;m++)l[m]=arguments[m+2];e.children=l}return{$$typeof:p,type:a.type,key:g,ref:h,props:e,_owner:f}},createFactory:function(a){var b=M.bind(null,a);b.type=a;return b},isValidElement:N,version:"16.8.6",
unstable_ConcurrentMode:x,unstable_Profiler:u,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:I,ReactCurrentOwner:J,assign:k}},Y={default:X},Z=Y&&X||Y;module.exports=Z.default||Z;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(13);
} else {}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(0),n=__webpack_require__(5),r=__webpack_require__(14);function ba(a,b,c,d,e,f,g,h){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[c,d,e,f,g,h],k=0;a=Error(b.replace(/%s/g,function(){return l[k++]}));a.name="Invariant Violation"}a.framesToPop=1;throw a;}}
function x(a){for(var b=arguments.length-1,c="https://reactjs.org/docs/error-decoder.html?invariant="+a,d=0;d<b;d++)c+="&args[]="+encodeURIComponent(arguments[d+1]);ba(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",c)}aa?void 0:x("227");function ca(a,b,c,d,e,f,g,h,l){var k=Array.prototype.slice.call(arguments,3);try{b.apply(c,k)}catch(m){this.onError(m)}}
var da=!1,ea=null,fa=!1,ha=null,ia={onError:function(a){da=!0;ea=a}};function ja(a,b,c,d,e,f,g,h,l){da=!1;ea=null;ca.apply(ia,arguments)}function ka(a,b,c,d,e,f,g,h,l){ja.apply(this,arguments);if(da){if(da){var k=ea;da=!1;ea=null}else x("198"),k=void 0;fa||(fa=!0,ha=k)}}var la=null,ma={};
function na(){if(la)for(var a in ma){var b=ma[a],c=la.indexOf(a);-1<c?void 0:x("96",a);if(!oa[c]){b.extractEvents?void 0:x("97",a);oa[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;pa.hasOwnProperty(h)?x("99",h):void 0;pa[h]=f;var l=f.phasedRegistrationNames;if(l){for(e in l)l.hasOwnProperty(e)&&qa(l[e],g,h);e=!0}else f.registrationName?(qa(f.registrationName,g,h),e=!0):e=!1;e?void 0:x("98",d,a)}}}}
function qa(a,b,c){ra[a]?x("100",a):void 0;ra[a]=b;sa[a]=b.eventTypes[c].dependencies}var oa=[],pa={},ra={},sa={},ta=null,ua=null,va=null;function wa(a,b,c){var d=a.type||"unknown-event";a.currentTarget=va(c);ka(d,b,void 0,a);a.currentTarget=null}function xa(a,b){null==b?x("30"):void 0;if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}
function ya(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var za=null;function Aa(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++)wa(a,b[d],c[d]);else b&&wa(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}
var Ba={injectEventPluginOrder:function(a){la?x("101"):void 0;la=Array.prototype.slice.call(a);na()},injectEventPluginsByName:function(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];ma.hasOwnProperty(c)&&ma[c]===d||(ma[c]?x("102",c):void 0,ma[c]=d,b=!0)}b&&na()}};
function Ca(a,b){var c=a.stateNode;if(!c)return null;var d=ta(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;c&&"function"!==typeof c?x("231",b,typeof c):void 0;
return c}function Da(a){null!==a&&(za=xa(za,a));a=za;za=null;if(a&&(ya(a,Aa),za?x("95"):void 0,fa))throw a=ha,fa=!1,ha=null,a;}var Ea=Math.random().toString(36).slice(2),Fa="__reactInternalInstance$"+Ea,Ga="__reactEventHandlers$"+Ea;function Ha(a){if(a[Fa])return a[Fa];for(;!a[Fa];)if(a.parentNode)a=a.parentNode;else return null;a=a[Fa];return 5===a.tag||6===a.tag?a:null}function Ia(a){a=a[Fa];return!a||5!==a.tag&&6!==a.tag?null:a}
function Ja(a){if(5===a.tag||6===a.tag)return a.stateNode;x("33")}function Ka(a){return a[Ga]||null}function La(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}function Ma(a,b,c){if(b=Ca(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=xa(c._dispatchListeners,b),c._dispatchInstances=xa(c._dispatchInstances,a)}
function Na(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=La(b);for(b=c.length;0<b--;)Ma(c[b],"captured",a);for(b=0;b<c.length;b++)Ma(c[b],"bubbled",a)}}function Oa(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Ca(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=xa(c._dispatchListeners,b),c._dispatchInstances=xa(c._dispatchInstances,a))}function Pa(a){a&&a.dispatchConfig.registrationName&&Oa(a._targetInst,null,a)}
function Qa(a){ya(a,Na)}var Ra=!("undefined"===typeof window||!window.document||!window.document.createElement);function Sa(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Ta={animationend:Sa("Animation","AnimationEnd"),animationiteration:Sa("Animation","AnimationIteration"),animationstart:Sa("Animation","AnimationStart"),transitionend:Sa("Transition","TransitionEnd")},Ua={},Va={};
Ra&&(Va=document.createElement("div").style,"AnimationEvent"in window||(delete Ta.animationend.animation,delete Ta.animationiteration.animation,delete Ta.animationstart.animation),"TransitionEvent"in window||delete Ta.transitionend.transition);function Wa(a){if(Ua[a])return Ua[a];if(!Ta[a])return a;var b=Ta[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Va)return Ua[a]=b[c];return a}
var Xa=Wa("animationend"),Ya=Wa("animationiteration"),Za=Wa("animationstart"),$a=Wa("transitionend"),ab="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bb=null,cb=null,db=null;
function eb(){if(db)return db;var a,b=cb,c=b.length,d,e="value"in bb?bb.value:bb.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return db=e.slice(a,1<d?1-d:void 0)}function fb(){return!0}function gb(){return!1}
function y(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?fb:gb;this.isPropagationStopped=gb;return this}
n(y.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=fb)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=fb)},persist:function(){this.isPersistent=fb},isPersistent:gb,destructor:function(){var a=this.constructor.Interface,
b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=gb;this._dispatchInstances=this._dispatchListeners=null}});y.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
y.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;n(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=n({},d.Interface,a);c.extend=d.extend;hb(c);return c};hb(y);function ib(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}function jb(a){a instanceof this?void 0:x("279");a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}
function hb(a){a.eventPool=[];a.getPooled=ib;a.release=jb}var kb=y.extend({data:null}),lb=y.extend({data:null}),mb=[9,13,27,32],nb=Ra&&"CompositionEvent"in window,ob=null;Ra&&"documentMode"in document&&(ob=document.documentMode);
var pb=Ra&&"TextEvent"in window&&!ob,qb=Ra&&(!nb||ob&&8<ob&&11>=ob),rb=String.fromCharCode(32),sb={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},tb=!1;
function ub(a,b){switch(a){case "keyup":return-1!==mb.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function vb(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var wb=!1;function xb(a,b){switch(a){case "compositionend":return vb(b);case "keypress":if(32!==b.which)return null;tb=!0;return rb;case "textInput":return a=b.data,a===rb&&tb?null:a;default:return null}}
function yb(a,b){if(wb)return"compositionend"===a||!nb&&ub(a,b)?(a=eb(),db=cb=bb=null,wb=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return qb&&"ko"!==b.locale?null:b.data;default:return null}}
var zb={eventTypes:sb,extractEvents:function(a,b,c,d){var e=void 0;var f=void 0;if(nb)b:{switch(a){case "compositionstart":e=sb.compositionStart;break b;case "compositionend":e=sb.compositionEnd;break b;case "compositionupdate":e=sb.compositionUpdate;break b}e=void 0}else wb?ub(a,c)&&(e=sb.compositionEnd):"keydown"===a&&229===c.keyCode&&(e=sb.compositionStart);e?(qb&&"ko"!==c.locale&&(wb||e!==sb.compositionStart?e===sb.compositionEnd&&wb&&(f=eb()):(bb=d,cb="value"in bb?bb.value:bb.textContent,wb=
!0)),e=kb.getPooled(e,b,c,d),f?e.data=f:(f=vb(c),null!==f&&(e.data=f)),Qa(e),f=e):f=null;(a=pb?xb(a,c):yb(a,c))?(b=lb.getPooled(sb.beforeInput,b,c,d),b.data=a,Qa(b)):b=null;return null===f?b:null===b?f:[f,b]}},Ab=null,Bb=null,Cb=null;function Db(a){if(a=ua(a)){"function"!==typeof Ab?x("280"):void 0;var b=ta(a.stateNode);Ab(a.stateNode,a.type,b)}}function Eb(a){Bb?Cb?Cb.push(a):Cb=[a]:Bb=a}function Fb(){if(Bb){var a=Bb,b=Cb;Cb=Bb=null;Db(a);if(b)for(a=0;a<b.length;a++)Db(b[a])}}
function Gb(a,b){return a(b)}function Hb(a,b,c){return a(b,c)}function Ib(){}var Jb=!1;function Kb(a,b){if(Jb)return a(b);Jb=!0;try{return Gb(a,b)}finally{if(Jb=!1,null!==Bb||null!==Cb)Ib(),Fb()}}var Lb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mb(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!Lb[a.type]:"textarea"===b?!0:!1}
function Nb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function Ob(a){if(!Ra)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}function Pb(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Qb(a){var b=Pb(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Rb(a){a._valueTracker||(a._valueTracker=Qb(a))}function Sb(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Pb(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}var Tb=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Tb.hasOwnProperty("ReactCurrentDispatcher")||(Tb.ReactCurrentDispatcher={current:null});
var Ub=/^(.*)[\\\/]/,z="function"===typeof Symbol&&Symbol.for,Vb=z?Symbol.for("react.element"):60103,Wb=z?Symbol.for("react.portal"):60106,Xb=z?Symbol.for("react.fragment"):60107,Yb=z?Symbol.for("react.strict_mode"):60108,Zb=z?Symbol.for("react.profiler"):60114,$b=z?Symbol.for("react.provider"):60109,ac=z?Symbol.for("react.context"):60110,bc=z?Symbol.for("react.concurrent_mode"):60111,cc=z?Symbol.for("react.forward_ref"):60112,dc=z?Symbol.for("react.suspense"):60113,ec=z?Symbol.for("react.memo"):
60115,fc=z?Symbol.for("react.lazy"):60116,gc="function"===typeof Symbol&&Symbol.iterator;function hc(a){if(null===a||"object"!==typeof a)return null;a=gc&&a[gc]||a["@@iterator"];return"function"===typeof a?a:null}
function ic(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case bc:return"ConcurrentMode";case Xb:return"Fragment";case Wb:return"Portal";case Zb:return"Profiler";case Yb:return"StrictMode";case dc:return"Suspense"}if("object"===typeof a)switch(a.$$typeof){case ac:return"Context.Consumer";case $b:return"Context.Provider";case cc:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+
")":"ForwardRef");case ec:return ic(a.type);case fc:if(a=1===a._status?a._result:null)return ic(a)}return null}function jc(a){var b="";do{a:switch(a.tag){case 3:case 4:case 6:case 7:case 10:case 9:var c="";break a;default:var d=a._debugOwner,e=a._debugSource,f=ic(a.type);c=null;d&&(c=ic(d.type));d=f;f="";e?f=" (at "+e.fileName.replace(Ub,"")+":"+e.lineNumber+")":c&&(f=" (created by "+c+")");c="\n    in "+(d||"Unknown")+f}b+=c;a=a.return}while(a);return b}
var kc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lc=Object.prototype.hasOwnProperty,mc={},nc={};
function oc(a){if(lc.call(nc,a))return!0;if(lc.call(mc,a))return!1;if(kc.test(a))return nc[a]=!0;mc[a]=!0;return!1}function pc(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function qc(a,b,c,d){if(null===b||"undefined"===typeof b||pc(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function C(a,b,c,d,e){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b}var D={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){D[a]=new C(a,0,!1,a,null)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];D[b]=new C(b,1,!1,a[1],null)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){D[a]=new C(a,2,!1,a.toLowerCase(),null)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){D[a]=new C(a,2,!1,a,null)});"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){D[a]=new C(a,3,!1,a.toLowerCase(),null)});["checked","multiple","muted","selected"].forEach(function(a){D[a]=new C(a,3,!0,a,null)});
["capture","download"].forEach(function(a){D[a]=new C(a,4,!1,a,null)});["cols","rows","size","span"].forEach(function(a){D[a]=new C(a,6,!1,a,null)});["rowSpan","start"].forEach(function(a){D[a]=new C(a,5,!1,a.toLowerCase(),null)});var rc=/[\-:]([a-z])/g;function sc(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(rc,
sc);D[b]=new C(b,1,!1,a,null)});"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(rc,sc);D[b]=new C(b,1,!1,a,"http://www.w3.org/1999/xlink")});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(rc,sc);D[b]=new C(b,1,!1,a,"http://www.w3.org/XML/1998/namespace")});["tabIndex","crossOrigin"].forEach(function(a){D[a]=new C(a,1,!1,a.toLowerCase(),null)});
function tc(a,b,c,d){var e=D.hasOwnProperty(b)?D[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(qc(b,c,e,d)&&(c=null),d||null===e?oc(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
function uc(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function vc(a,b){var c=b.checked;return n({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
function wc(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=uc(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function xc(a,b){b=b.checked;null!=b&&tc(a,"checked",b,!1)}
function yc(a,b){xc(a,b);var c=uc(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?zc(a,b.type,c):b.hasOwnProperty("defaultValue")&&zc(a,b.type,uc(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function Ac(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!a.defaultChecked;a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function zc(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}var Bc={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function Cc(a,b,c){a=y.getPooled(Bc.change,a,b,c);a.type="change";Eb(c);Qa(a);return a}var Dc=null,Ec=null;function Fc(a){Da(a)}
function Gc(a){var b=Ja(a);if(Sb(b))return a}function Hc(a,b){if("change"===a)return b}var Ic=!1;Ra&&(Ic=Ob("input")&&(!document.documentMode||9<document.documentMode));function Jc(){Dc&&(Dc.detachEvent("onpropertychange",Kc),Ec=Dc=null)}function Kc(a){"value"===a.propertyName&&Gc(Ec)&&(a=Cc(Ec,a,Nb(a)),Kb(Fc,a))}function Lc(a,b,c){"focus"===a?(Jc(),Dc=b,Ec=c,Dc.attachEvent("onpropertychange",Kc)):"blur"===a&&Jc()}function Mc(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return Gc(Ec)}
function Nc(a,b){if("click"===a)return Gc(b)}function Oc(a,b){if("input"===a||"change"===a)return Gc(b)}
var Pc={eventTypes:Bc,_isInputEventSupported:Ic,extractEvents:function(a,b,c,d){var e=b?Ja(b):window,f=void 0,g=void 0,h=e.nodeName&&e.nodeName.toLowerCase();"select"===h||"input"===h&&"file"===e.type?f=Hc:Mb(e)?Ic?f=Oc:(f=Mc,g=Lc):(h=e.nodeName)&&"input"===h.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(f=Nc);if(f&&(f=f(a,b)))return Cc(f,c,d);g&&g(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&zc(e,"number",e.value)}},Qc=y.extend({view:null,detail:null}),Rc={Alt:"altKey",
Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sc(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Rc[a])?!!b[a]:!1}function Tc(){return Sc}
var Uc=0,Vc=0,Wc=!1,Xc=!1,Yc=Qc.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Tc,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=Uc;Uc=a.screenX;return Wc?"mousemove"===a.type?a.screenX-b:0:(Wc=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;
var b=Vc;Vc=a.screenY;return Xc?"mousemove"===a.type?a.screenY-b:0:(Xc=!0,0)}}),Zc=Yc.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),$c={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",
dependencies:["pointerout","pointerover"]}},ad={eventTypes:$c,extractEvents:function(a,b,c,d){var e="mouseover"===a||"pointerover"===a,f="mouseout"===a||"pointerout"===a;if(e&&(c.relatedTarget||c.fromElement)||!f&&!e)return null;e=d.window===d?d:(e=d.ownerDocument)?e.defaultView||e.parentWindow:window;f?(f=b,b=(b=c.relatedTarget||c.toElement)?Ha(b):null):f=null;if(f===b)return null;var g=void 0,h=void 0,l=void 0,k=void 0;if("mouseout"===a||"mouseover"===a)g=Yc,h=$c.mouseLeave,l=$c.mouseEnter,k="mouse";
else if("pointerout"===a||"pointerover"===a)g=Zc,h=$c.pointerLeave,l=$c.pointerEnter,k="pointer";var m=null==f?e:Ja(f);e=null==b?e:Ja(b);a=g.getPooled(h,f,c,d);a.type=k+"leave";a.target=m;a.relatedTarget=e;c=g.getPooled(l,b,c,d);c.type=k+"enter";c.target=e;c.relatedTarget=m;d=b;if(f&&d)a:{b=f;e=d;k=0;for(g=b;g;g=La(g))k++;g=0;for(l=e;l;l=La(l))g++;for(;0<k-g;)b=La(b),k--;for(;0<g-k;)e=La(e),g--;for(;k--;){if(b===e||b===e.alternate)break a;b=La(b);e=La(e)}b=null}else b=null;e=b;for(b=[];f&&f!==e;){k=
f.alternate;if(null!==k&&k===e)break;b.push(f);f=La(f)}for(f=[];d&&d!==e;){k=d.alternate;if(null!==k&&k===e)break;f.push(d);d=La(d)}for(d=0;d<b.length;d++)Oa(b[d],"bubbled",a);for(d=f.length;0<d--;)Oa(f[d],"captured",c);return[a,c]}};function bd(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var cd=Object.prototype.hasOwnProperty;
function dd(a,b){if(bd(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!cd.call(b,c[d])||!bd(a[c[d]],b[c[d]]))return!1;return!0}function ed(a){var b=a;if(a.alternate)for(;b.return;)b=b.return;else{if(0!==(b.effectTag&2))return 1;for(;b.return;)if(b=b.return,0!==(b.effectTag&2))return 1}return 3===b.tag?2:3}function fd(a){2!==ed(a)?x("188"):void 0}
function gd(a){var b=a.alternate;if(!b)return b=ed(a),3===b?x("188"):void 0,1===b?null:a;for(var c=a,d=b;;){var e=c.return,f=e?e.alternate:null;if(!e||!f)break;if(e.child===f.child){for(var g=e.child;g;){if(g===c)return fd(e),a;if(g===d)return fd(e),b;g=g.sibling}x("188")}if(c.return!==d.return)c=e,d=f;else{g=!1;for(var h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}g?
void 0:x("189")}}c.alternate!==d?x("190"):void 0}3!==c.tag?x("188"):void 0;return c.stateNode.current===c?a:b}function hd(a){a=gd(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
var id=y.extend({animationName:null,elapsedTime:null,pseudoElement:null}),jd=y.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),kd=Qc.extend({relatedTarget:null});function ld(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
var md={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},od=Qc.extend({key:function(a){if(a.key){var b=md[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=ld(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?nd[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Tc,charCode:function(a){return"keypress"===
a.type?ld(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?ld(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),pd=Yc.extend({dataTransfer:null}),qd=Qc.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Tc}),rd=y.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),sd=Yc.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in
a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),td=[["abort","abort"],[Xa,"animationEnd"],[Ya,"animationIteration"],[Za,"animationStart"],["canplay","canPlay"],["canplaythrough","canPlayThrough"],["drag","drag"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],
["ended","ended"],["error","error"],["gotpointercapture","gotPointerCapture"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["loadstart","loadStart"],["lostpointercapture","lostPointerCapture"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["playing","playing"],["pointermove","pointerMove"],["pointerout","pointerOut"],["pointerover","pointerOver"],["progress","progress"],["scroll","scroll"],["seeking","seeking"],["stalled","stalled"],
["suspend","suspend"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchmove","touchMove"],[$a,"transitionEnd"],["waiting","waiting"],["wheel","wheel"]],ud={},vd={};function wd(a,b){var c=a[0];a=a[1];var d="on"+(a[0].toUpperCase()+a.slice(1));b={phasedRegistrationNames:{bubbled:d,captured:d+"Capture"},dependencies:[c],isInteractive:b};ud[a]=b;vd[c]=b}
[["blur","blur"],["cancel","cancel"],["click","click"],["close","close"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["auxclick","auxClick"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragstart","dragStart"],["drop","drop"],["focus","focus"],["input","input"],["invalid","invalid"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["mousedown","mouseDown"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["pointercancel","pointerCancel"],
["pointerdown","pointerDown"],["pointerup","pointerUp"],["ratechange","rateChange"],["reset","reset"],["seeked","seeked"],["submit","submit"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchstart","touchStart"],["volumechange","volumeChange"]].forEach(function(a){wd(a,!0)});td.forEach(function(a){wd(a,!1)});
var xd={eventTypes:ud,isInteractiveTopLevelEventType:function(a){a=vd[a];return void 0!==a&&!0===a.isInteractive},extractEvents:function(a,b,c,d){var e=vd[a];if(!e)return null;switch(a){case "keypress":if(0===ld(c))return null;case "keydown":case "keyup":a=od;break;case "blur":case "focus":a=kd;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=Yc;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=
pd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=qd;break;case Xa:case Ya:case Za:a=id;break;case $a:a=rd;break;case "scroll":a=Qc;break;case "wheel":a=sd;break;case "copy":case "cut":case "paste":a=jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=Zc;break;default:a=y}b=a.getPooled(e,b,c,d);Qa(b);return b}},yd=xd.isInteractiveTopLevelEventType,
zd=[];function Ad(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d;for(d=c;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo;if(!d)break;a.ancestors.push(c);c=Ha(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=Nb(a.nativeEvent);d=a.topLevelType;for(var f=a.nativeEvent,g=null,h=0;h<oa.length;h++){var l=oa[h];l&&(l=l.extractEvents(d,b,f,e))&&(g=xa(g,l))}Da(g)}}var Bd=!0;
function E(a,b){if(!b)return null;var c=(yd(a)?Cd:Dd).bind(null,a);b.addEventListener(a,c,!1)}function Ed(a,b){if(!b)return null;var c=(yd(a)?Cd:Dd).bind(null,a);b.addEventListener(a,c,!0)}function Cd(a,b){Hb(Dd,a,b)}
function Dd(a,b){if(Bd){var c=Nb(b);c=Ha(c);null===c||"number"!==typeof c.tag||2===ed(c)||(c=null);if(zd.length){var d=zd.pop();d.topLevelType=a;d.nativeEvent=b;d.targetInst=c;a=d}else a={topLevelType:a,nativeEvent:b,targetInst:c,ancestors:[]};try{Kb(Ad,a)}finally{a.topLevelType=null,a.nativeEvent=null,a.targetInst=null,a.ancestors.length=0,10>zd.length&&zd.push(a)}}}var Fd={},Gd=0,Hd="_reactListenersID"+(""+Math.random()).slice(2);
function Id(a){Object.prototype.hasOwnProperty.call(a,Hd)||(a[Hd]=Gd++,Fd[a[Hd]]={});return Fd[a[Hd]]}function Jd(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function Kd(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Ld(a,b){var c=Kd(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Kd(c)}}function Md(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Md(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Nd(){for(var a=window,b=Jd();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Jd(a.document)}return b}function Od(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
function Pd(){var a=Nd();if(Od(a)){if("selectionStart"in a)var b={start:a.selectionStart,end:a.selectionEnd};else a:{b=(b=a.ownerDocument)&&b.defaultView||window;var c=b.getSelection&&b.getSelection();if(c&&0!==c.rangeCount){b=c.anchorNode;var d=c.anchorOffset,e=c.focusNode;c=c.focusOffset;try{b.nodeType,e.nodeType}catch(A){b=null;break a}var f=0,g=-1,h=-1,l=0,k=0,m=a,p=null;b:for(;;){for(var t;;){m!==b||0!==d&&3!==m.nodeType||(g=f+d);m!==e||0!==c&&3!==m.nodeType||(h=f+c);3===m.nodeType&&(f+=m.nodeValue.length);
if(null===(t=m.firstChild))break;p=m;m=t}for(;;){if(m===a)break b;p===b&&++l===d&&(g=f);p===e&&++k===c&&(h=f);if(null!==(t=m.nextSibling))break;m=p;p=m.parentNode}m=t}b=-1===g||-1===h?null:{start:g,end:h}}else b=null}b=b||{start:0,end:0}}else b=null;return{focusedElem:a,selectionRange:b}}
function Qd(a){var b=Nd(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&Md(c.ownerDocument.documentElement,c)){if(null!==d&&Od(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=Ld(c,f);var g=Ld(c,
d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),a.addRange(b)))}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}
var Rd=Ra&&"documentMode"in document&&11>=document.documentMode,Sd={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},Td=null,Ud=null,Vd=null,Wd=!1;
function Xd(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if(Wd||null==Td||Td!==Jd(c))return null;c=Td;"selectionStart"in c&&Od(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return Vd&&dd(Vd,c)?null:(Vd=c,a=y.getPooled(Sd.select,Ud,a,b),a.type="select",a.target=Td,Qa(a),a)}
var Yd={eventTypes:Sd,extractEvents:function(a,b,c,d){var e=d.window===d?d.document:9===d.nodeType?d:d.ownerDocument,f;if(!(f=!e)){a:{e=Id(e);f=sa.onSelect;for(var g=0;g<f.length;g++){var h=f[g];if(!e.hasOwnProperty(h)||!e[h]){e=!1;break a}}e=!0}f=!e}if(f)return null;e=b?Ja(b):window;switch(a){case "focus":if(Mb(e)||"true"===e.contentEditable)Td=e,Ud=b,Vd=null;break;case "blur":Vd=Ud=Td=null;break;case "mousedown":Wd=!0;break;case "contextmenu":case "mouseup":case "dragend":return Wd=!1,Xd(c,d);case "selectionchange":if(Rd)break;
case "keydown":case "keyup":return Xd(c,d)}return null}};Ba.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));ta=Ka;ua=Ia;va=Ja;Ba.injectEventPluginsByName({SimpleEventPlugin:xd,EnterLeaveEventPlugin:ad,ChangeEventPlugin:Pc,SelectEventPlugin:Yd,BeforeInputEventPlugin:zb});function Zd(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}
function $d(a,b){a=n({children:void 0},b);if(b=Zd(b.children))a.children=b;return a}function ae(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+uc(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function be(a,b){null!=b.dangerouslySetInnerHTML?x("91"):void 0;return n({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function ce(a,b){var c=b.value;null==c&&(c=b.defaultValue,b=b.children,null!=b&&(null!=c?x("92"):void 0,Array.isArray(b)&&(1>=b.length?void 0:x("93"),b=b[0]),c=b),null==c&&(c=""));a._wrapperState={initialValue:uc(c)}}
function de(a,b){var c=uc(b.value),d=uc(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function ee(a){var b=a.textContent;b===a._wrapperState.initialValue&&(a.value=b)}var fe={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function ge(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function he(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?ge(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var ie=void 0,je=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==fe.svg||"innerHTML"in a)a.innerHTML=b;else{ie=ie||document.createElement("div");ie.innerHTML="<svg>"+b+"</svg>";for(b=ie.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function ke(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var le={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},me=["Webkit","ms","Moz","O"];Object.keys(le).forEach(function(a){me.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);le[b]=le[a]})});function ne(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||le.hasOwnProperty(a)&&le[a]?(""+b).trim():b+"px"}
function oe(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=ne(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var pe=n({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function qe(a,b){b&&(pe[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML?x("137",a,""):void 0),null!=b.dangerouslySetInnerHTML&&(null!=b.children?x("60"):void 0,"object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML?void 0:x("61")),null!=b.style&&"object"!==typeof b.style?x("62",""):void 0)}
function re(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}
function se(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=Id(a);b=sa[b];for(var d=0;d<b.length;d++){var e=b[d];if(!c.hasOwnProperty(e)||!c[e]){switch(e){case "scroll":Ed("scroll",a);break;case "focus":case "blur":Ed("focus",a);Ed("blur",a);c.blur=!0;c.focus=!0;break;case "cancel":case "close":Ob(e)&&Ed(e,a);break;case "invalid":case "submit":case "reset":break;default:-1===ab.indexOf(e)&&E(e,a)}c[e]=!0}}}function te(){}var ue=null,ve=null;
function we(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}function xe(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}
var ye="function"===typeof setTimeout?setTimeout:void 0,ze="function"===typeof clearTimeout?clearTimeout:void 0,Ae=r.unstable_scheduleCallback,Be=r.unstable_cancelCallback;
function Ce(a,b,c,d,e){a[Ga]=e;"input"===c&&"radio"===e.type&&null!=e.name&&xc(a,e);re(c,d);d=re(c,e);for(var f=0;f<b.length;f+=2){var g=b[f],h=b[f+1];"style"===g?oe(a,h):"dangerouslySetInnerHTML"===g?je(a,h):"children"===g?ke(a,h):tc(a,g,h,d)}switch(c){case "input":yc(a,e);break;case "textarea":de(a,e);break;case "select":b=a._wrapperState.wasMultiple,a._wrapperState.wasMultiple=!!e.multiple,c=e.value,null!=c?ae(a,!!e.multiple,c,!1):b!==!!e.multiple&&(null!=e.defaultValue?ae(a,!!e.multiple,e.defaultValue,
!0):ae(a,!!e.multiple,e.multiple?[]:"",!1))}}function De(a){for(a=a.nextSibling;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}function Ee(a){for(a=a.firstChild;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}new Set;var Fe=[],Ge=-1;function F(a){0>Ge||(a.current=Fe[Ge],Fe[Ge]=null,Ge--)}function G(a,b){Ge++;Fe[Ge]=a.current;a.current=b}var He={},H={current:He},I={current:!1},Ie=He;
function Je(a,b){var c=a.type.contextTypes;if(!c)return He;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function J(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Ke(a){F(I,a);F(H,a)}function Le(a){F(I,a);F(H,a)}
function Me(a,b,c){H.current!==He?x("168"):void 0;G(H,b,a);G(I,c,a)}function Ne(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)e in a?void 0:x("108",ic(b)||"Unknown",e);return n({},c,d)}function Oe(a){var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||He;Ie=H.current;G(H,b,a);G(I,I.current,a);return!0}
function Pe(a,b,c){var d=a.stateNode;d?void 0:x("169");c?(b=Ne(a,b,Ie),d.__reactInternalMemoizedMergedChildContext=b,F(I,a),F(H,a),G(H,b,a)):F(I,a);G(I,c,a)}var Qe=null,Re=null;function Se(a){return function(b){try{return a(b)}catch(c){}}}
function Te(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);Qe=Se(function(a){return b.onCommitFiberRoot(c,a)});Re=Se(function(a){return b.onCommitFiberUnmount(c,a)})}catch(d){}return!0}
function Ue(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.contextDependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}function K(a,b,c,d){return new Ue(a,b,c,d)}
function Ve(a){a=a.prototype;return!(!a||!a.isReactComponent)}function We(a){if("function"===typeof a)return Ve(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===cc)return 11;if(a===ec)return 14}return 2}
function Xe(a,b){var c=a.alternate;null===c?(c=K(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;c.contextDependencies=a.contextDependencies;c.sibling=a.sibling;
c.index=a.index;c.ref=a.ref;return c}
function Ye(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)Ve(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case Xb:return Ze(c.children,e,f,b);case bc:return $e(c,e|3,f,b);case Yb:return $e(c,e|2,f,b);case Zb:return a=K(12,c,b,e|4),a.elementType=Zb,a.type=Zb,a.expirationTime=f,a;case dc:return a=K(13,c,b,e),a.elementType=dc,a.type=dc,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case $b:g=10;break a;case ac:g=9;break a;case cc:g=11;break a;case ec:g=
14;break a;case fc:g=16;d=null;break a}x("130",null==a?a:typeof a,"")}b=K(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function Ze(a,b,c,d){a=K(7,a,d,b);a.expirationTime=c;return a}function $e(a,b,c,d){a=K(8,a,d,b);b=0===(b&1)?Yb:bc;a.elementType=b;a.type=b;a.expirationTime=c;return a}function af(a,b,c){a=K(6,a,null,b);a.expirationTime=c;return a}
function bf(a,b,c){b=K(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}function cf(a,b){a.didError=!1;var c=a.earliestPendingTime;0===c?a.earliestPendingTime=a.latestPendingTime=b:c<b?a.earliestPendingTime=b:a.latestPendingTime>b&&(a.latestPendingTime=b);df(b,a)}
function ef(a,b){a.didError=!1;if(0===b)a.earliestPendingTime=0,a.latestPendingTime=0,a.earliestSuspendedTime=0,a.latestSuspendedTime=0,a.latestPingedTime=0;else{b<a.latestPingedTime&&(a.latestPingedTime=0);var c=a.latestPendingTime;0!==c&&(c>b?a.earliestPendingTime=a.latestPendingTime=0:a.earliestPendingTime>b&&(a.earliestPendingTime=a.latestPendingTime));c=a.earliestSuspendedTime;0===c?cf(a,b):b<a.latestSuspendedTime?(a.earliestSuspendedTime=0,a.latestSuspendedTime=0,a.latestPingedTime=0,cf(a,b)):
b>c&&cf(a,b)}df(0,a)}function ff(a,b){a.didError=!1;a.latestPingedTime>=b&&(a.latestPingedTime=0);var c=a.earliestPendingTime,d=a.latestPendingTime;c===b?a.earliestPendingTime=d===b?a.latestPendingTime=0:d:d===b&&(a.latestPendingTime=c);c=a.earliestSuspendedTime;d=a.latestSuspendedTime;0===c?a.earliestSuspendedTime=a.latestSuspendedTime=b:c<b?a.earliestSuspendedTime=b:d>b&&(a.latestSuspendedTime=b);df(b,a)}
function gf(a,b){var c=a.earliestPendingTime;a=a.earliestSuspendedTime;c>b&&(b=c);a>b&&(b=a);return b}function df(a,b){var c=b.earliestSuspendedTime,d=b.latestSuspendedTime,e=b.earliestPendingTime,f=b.latestPingedTime;e=0!==e?e:f;0===e&&(0===a||d<a)&&(e=d);a=e;0!==a&&c>a&&(a=c);b.nextExpirationTimeToWorkOn=e;b.expirationTime=a}function L(a,b){if(a&&a.defaultProps){b=n({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}
function hf(a){var b=a._result;switch(a._status){case 1:return b;case 2:throw b;case 0:throw b;default:a._status=0;b=a._ctor;b=b();b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)});switch(a._status){case 1:return a._result;case 2:throw a._result;}a._result=b;throw b;}}var jf=(new aa.Component).refs;
function kf(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:n({},b,c);a.memoizedState=c;d=a.updateQueue;null!==d&&0===a.expirationTime&&(d.baseState=c)}
var tf={isMounted:function(a){return(a=a._reactInternalFiber)?2===ed(a):!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=lf();d=mf(d,a);var e=nf(d);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);of();pf(a,e);qf(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=lf();d=mf(d,a);var e=nf(d);e.tag=rf;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);of();pf(a,e);qf(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=lf();c=mf(c,a);var d=nf(c);d.tag=
sf;void 0!==b&&null!==b&&(d.callback=b);of();pf(a,d);qf(a,c)}};function uf(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!dd(c,d)||!dd(e,f):!0}
function vf(a,b,c){var d=!1,e=He;var f=b.contextType;"object"===typeof f&&null!==f?f=M(f):(e=J(b)?Ie:H.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Je(a,e):He);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=tf;a.stateNode=b;b._reactInternalFiber=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function wf(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&tf.enqueueReplaceState(b,b.state,null)}
function xf(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=jf;var f=b.contextType;"object"===typeof f&&null!==f?e.context=M(f):(f=J(b)?Ie:H.current,e.context=Je(a,f));f=a.updateQueue;null!==f&&(yf(a,f,c,e,d),e.state=a.memoizedState);f=b.getDerivedStateFromProps;"function"===typeof f&&(kf(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==
typeof e.componentWillMount||(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&tf.enqueueReplaceState(e,e.state,null),f=a.updateQueue,null!==f&&(yf(a,f,c,e,d),e.state=a.memoizedState));"function"===typeof e.componentDidMount&&(a.effectTag|=4)}var zf=Array.isArray;
function Af(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;var d=void 0;c&&(1!==c.tag?x("309"):void 0,d=c.stateNode);d?void 0:x("147",a);var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===jf&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}"string"!==typeof a?x("284"):void 0;c._owner?void 0:x("290",a)}return a}
function Bf(a,b){"textarea"!==a.type&&x("31","[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,"")}
function Cf(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b,c){a=Xe(a,b,c);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=af(c,a.mode,d),b.return=a,b;b=e(b,c,d);b.return=a;return b}function l(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props,d),d.ref=Af(a,b,c),d.return=a,d;d=Ye(c.type,c.key,c.props,null,a.mode,d);d.ref=Af(a,b,c);d.return=a;return d}function k(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==
c.implementation)return b=bf(c,a.mode,d),b.return=a,b;b=e(b,c.children||[],d);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Ze(c,a.mode,d,f),b.return=a,b;b=e(b,c,d);b.return=a;return b}function p(a,b,c){if("string"===typeof b||"number"===typeof b)return b=af(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case Vb:return c=Ye(b.type,b.key,b.props,null,a.mode,c),c.ref=Af(a,null,b),c.return=a,c;case Wb:return b=bf(b,a.mode,c),b.return=a,b}if(zf(b)||
hc(b))return b=Ze(b,a.mode,c,null),b.return=a,b;Bf(a,b)}return null}function t(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case Vb:return c.key===e?c.type===Xb?m(a,b,c.props.children,d,e):l(a,b,c,d):null;case Wb:return c.key===e?k(a,b,c,d):null}if(zf(c)||hc(c))return null!==e?null:m(a,b,c,d,null);Bf(a,c)}return null}function A(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=
a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case Vb:return a=a.get(null===d.key?c:d.key)||null,d.type===Xb?m(b,a,d.props.children,e,d.key):l(b,a,d,e);case Wb:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e)}if(zf(d)||hc(d))return a=a.get(c)||null,m(b,a,d,e,null);Bf(b,d)}return null}function v(e,g,h,k){for(var l=null,m=null,q=g,u=g=0,B=null;null!==q&&u<h.length;u++){q.index>u?(B=q,q=null):B=q.sibling;var w=t(e,q,h[u],k);if(null===w){null===q&&(q=B);break}a&&
q&&null===w.alternate&&b(e,q);g=f(w,g,u);null===m?l=w:m.sibling=w;m=w;q=B}if(u===h.length)return c(e,q),l;if(null===q){for(;u<h.length;u++)if(q=p(e,h[u],k))g=f(q,g,u),null===m?l=q:m.sibling=q,m=q;return l}for(q=d(e,q);u<h.length;u++)if(B=A(q,e,u,h[u],k))a&&null!==B.alternate&&q.delete(null===B.key?u:B.key),g=f(B,g,u),null===m?l=B:m.sibling=B,m=B;a&&q.forEach(function(a){return b(e,a)});return l}function R(e,g,h,k){var l=hc(h);"function"!==typeof l?x("150"):void 0;h=l.call(h);null==h?x("151"):void 0;
for(var m=l=null,q=g,u=g=0,B=null,w=h.next();null!==q&&!w.done;u++,w=h.next()){q.index>u?(B=q,q=null):B=q.sibling;var v=t(e,q,w.value,k);if(null===v){q||(q=B);break}a&&q&&null===v.alternate&&b(e,q);g=f(v,g,u);null===m?l=v:m.sibling=v;m=v;q=B}if(w.done)return c(e,q),l;if(null===q){for(;!w.done;u++,w=h.next())w=p(e,w.value,k),null!==w&&(g=f(w,g,u),null===m?l=w:m.sibling=w,m=w);return l}for(q=d(e,q);!w.done;u++,w=h.next())w=A(q,e,u,w.value,k),null!==w&&(a&&null!==w.alternate&&q.delete(null===w.key?u:
w.key),g=f(w,g,u),null===m?l=w:m.sibling=w,m=w);a&&q.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===Xb&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case Vb:a:{l=f.key;for(k=d;null!==k;){if(k.key===l)if(7===k.tag?f.type===Xb:k.elementType===f.type){c(a,k.sibling);d=e(k,f.type===Xb?f.props.children:f.props,h);d.ref=Af(a,k,f);d.return=a;a=d;break a}else{c(a,k);break}else b(a,k);k=
k.sibling}f.type===Xb?(d=Ze(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Ye(f.type,f.key,f.props,null,a.mode,h),h.ref=Af(a,d,f),h.return=a,a=h)}return g(a);case Wb:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[],h);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=bf(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=
""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f,h),d.return=a,a=d):(c(a,d),d=af(f,a.mode,h),d.return=a,a=d),g(a);if(zf(f))return v(a,d,f,h);if(hc(f))return R(a,d,f,h);l&&Bf(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:h=a.type,x("152",h.displayName||h.name||"Component")}return c(a,d)}}var Df=Cf(!0),Ef=Cf(!1),Ff={},N={current:Ff},Gf={current:Ff},Hf={current:Ff};function If(a){a===Ff?x("174"):void 0;return a}
function Jf(a,b){G(Hf,b,a);G(Gf,a,a);G(N,Ff,a);var c=b.nodeType;switch(c){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:he(null,"");break;default:c=8===c?b.parentNode:b,b=c.namespaceURI||null,c=c.tagName,b=he(b,c)}F(N,a);G(N,b,a)}function Kf(a){F(N,a);F(Gf,a);F(Hf,a)}function Lf(a){If(Hf.current);var b=If(N.current);var c=he(b,a.type);b!==c&&(G(Gf,a,a),G(N,c,a))}function Mf(a){Gf.current===a&&(F(N,a),F(Gf,a))}
var Nf=0,Of=2,Pf=4,Qf=8,Rf=16,Sf=32,Tf=64,Uf=128,Vf=Tb.ReactCurrentDispatcher,Wf=0,Xf=null,O=null,P=null,Yf=null,Q=null,Zf=null,$f=0,ag=null,bg=0,cg=!1,dg=null,eg=0;function fg(){x("321")}function gg(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!bd(a[c],b[c]))return!1;return!0}
function hg(a,b,c,d,e,f){Wf=f;Xf=b;P=null!==a?a.memoizedState:null;Vf.current=null===P?ig:jg;b=c(d,e);if(cg){do cg=!1,eg+=1,P=null!==a?a.memoizedState:null,Zf=Yf,ag=Q=O=null,Vf.current=jg,b=c(d,e);while(cg);dg=null;eg=0}Vf.current=kg;a=Xf;a.memoizedState=Yf;a.expirationTime=$f;a.updateQueue=ag;a.effectTag|=bg;a=null!==O&&null!==O.next;Wf=0;Zf=Q=Yf=P=O=Xf=null;$f=0;ag=null;bg=0;a?x("300"):void 0;return b}function lg(){Vf.current=kg;Wf=0;Zf=Q=Yf=P=O=Xf=null;$f=0;ag=null;bg=0;cg=!1;dg=null;eg=0}
function mg(){var a={memoizedState:null,baseState:null,queue:null,baseUpdate:null,next:null};null===Q?Yf=Q=a:Q=Q.next=a;return Q}function ng(){if(null!==Zf)Q=Zf,Zf=Q.next,O=P,P=null!==O?O.next:null;else{null===P?x("310"):void 0;O=P;var a={memoizedState:O.memoizedState,baseState:O.baseState,queue:O.queue,baseUpdate:O.baseUpdate,next:null};Q=null===Q?Yf=a:Q.next=a;P=O.next}return Q}function og(a,b){return"function"===typeof b?b(a):b}
function pg(a){var b=ng(),c=b.queue;null===c?x("311"):void 0;c.lastRenderedReducer=a;if(0<eg){var d=c.dispatch;if(null!==dg){var e=dg.get(c);if(void 0!==e){dg.delete(c);var f=b.memoizedState;do f=a(f,e.action),e=e.next;while(null!==e);bd(f,b.memoizedState)||(qg=!0);b.memoizedState=f;b.baseUpdate===c.last&&(b.baseState=f);c.lastRenderedState=f;return[f,d]}}return[b.memoizedState,d]}d=c.last;var g=b.baseUpdate;f=b.baseState;null!==g?(null!==d&&(d.next=null),d=g.next):d=null!==d?d.next:null;if(null!==
d){var h=e=null,l=d,k=!1;do{var m=l.expirationTime;m<Wf?(k||(k=!0,h=g,e=f),m>$f&&($f=m)):f=l.eagerReducer===a?l.eagerState:a(f,l.action);g=l;l=l.next}while(null!==l&&l!==d);k||(h=g,e=f);bd(f,b.memoizedState)||(qg=!0);b.memoizedState=f;b.baseUpdate=h;b.baseState=e;c.lastRenderedState=f}return[b.memoizedState,c.dispatch]}
function rg(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};null===ag?(ag={lastEffect:null},ag.lastEffect=a.next=a):(b=ag.lastEffect,null===b?ag.lastEffect=a.next=a:(c=b.next,b.next=a,a.next=c,ag.lastEffect=a));return a}function sg(a,b,c,d){var e=mg();bg|=a;e.memoizedState=rg(b,c,void 0,void 0===d?null:d)}
function tg(a,b,c,d){var e=ng();d=void 0===d?null:d;var f=void 0;if(null!==O){var g=O.memoizedState;f=g.destroy;if(null!==d&&gg(d,g.deps)){rg(Nf,c,f,d);return}}bg|=a;e.memoizedState=rg(b,c,f,d)}function ug(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function vg(){}
function wg(a,b,c){25>eg?void 0:x("301");var d=a.alternate;if(a===Xf||null!==d&&d===Xf)if(cg=!0,a={expirationTime:Wf,action:c,eagerReducer:null,eagerState:null,next:null},null===dg&&(dg=new Map),c=dg.get(b),void 0===c)dg.set(b,a);else{for(b=c;null!==b.next;)b=b.next;b.next=a}else{of();var e=lf();e=mf(e,a);var f={expirationTime:e,action:c,eagerReducer:null,eagerState:null,next:null},g=b.last;if(null===g)f.next=f;else{var h=g.next;null!==h&&(f.next=h);g.next=f}b.last=f;if(0===a.expirationTime&&(null===
d||0===d.expirationTime)&&(d=b.lastRenderedReducer,null!==d))try{var l=b.lastRenderedState,k=d(l,c);f.eagerReducer=d;f.eagerState=k;if(bd(k,l))return}catch(m){}finally{}qf(a,e)}}
var kg={readContext:M,useCallback:fg,useContext:fg,useEffect:fg,useImperativeHandle:fg,useLayoutEffect:fg,useMemo:fg,useReducer:fg,useRef:fg,useState:fg,useDebugValue:fg},ig={readContext:M,useCallback:function(a,b){mg().memoizedState=[a,void 0===b?null:b];return a},useContext:M,useEffect:function(a,b){return sg(516,Uf|Tf,a,b)},useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return sg(4,Pf|Sf,ug.bind(null,b,a),c)},useLayoutEffect:function(a,b){return sg(4,Pf|Sf,a,b)},
useMemo:function(a,b){var c=mg();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=mg();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={last:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=wg.bind(null,Xf,a);return[d.memoizedState,a]},useRef:function(a){var b=mg();a={current:a};return b.memoizedState=a},useState:function(a){var b=mg();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={last:null,dispatch:null,
lastRenderedReducer:og,lastRenderedState:a};a=a.dispatch=wg.bind(null,Xf,a);return[b.memoizedState,a]},useDebugValue:vg},jg={readContext:M,useCallback:function(a,b){var c=ng();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&gg(b,d[1]))return d[0];c.memoizedState=[a,b];return a},useContext:M,useEffect:function(a,b){return tg(516,Uf|Tf,a,b)},useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return tg(4,Pf|Sf,ug.bind(null,b,a),c)},useLayoutEffect:function(a,
b){return tg(4,Pf|Sf,a,b)},useMemo:function(a,b){var c=ng();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&gg(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a},useReducer:pg,useRef:function(){return ng().memoizedState},useState:function(a){return pg(og,a)},useDebugValue:vg},xg=null,yg=null,zg=!1;
function Ag(a,b){var c=K(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function Bg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}
function Cg(a){if(zg){var b=yg;if(b){var c=b;if(!Bg(a,b)){b=De(c);if(!b||!Bg(a,b)){a.effectTag|=2;zg=!1;xg=a;return}Ag(xg,c)}xg=a;yg=Ee(b)}else a.effectTag|=2,zg=!1,xg=a}}function Dg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&18!==a.tag;)a=a.return;xg=a}function Eg(a){if(a!==xg)return!1;if(!zg)return Dg(a),zg=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!xe(b,a.memoizedProps))for(b=yg;b;)Ag(a,b),b=De(b);Dg(a);yg=xg?De(a.stateNode):null;return!0}function Fg(){yg=xg=null;zg=!1}
var Gg=Tb.ReactCurrentOwner,qg=!1;function S(a,b,c,d){b.child=null===a?Ef(b,null,c,d):Df(b,a.child,c,d)}function Hg(a,b,c,d,e){c=c.render;var f=b.ref;Ig(b,e);d=hg(a,b,c,d,f,e);if(null!==a&&!qg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),Jg(a,b,e);b.effectTag|=1;S(a,b,d,e);return b.child}
function Kg(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!Ve(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,Lg(a,b,g,d,e,f);a=Ye(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(e<f&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:dd,c(e,d)&&a.ref===b.ref))return Jg(a,b,f);b.effectTag|=1;a=Xe(g,d,f);a.ref=b.ref;a.return=b;return b.child=a}
function Lg(a,b,c,d,e,f){return null!==a&&dd(a.memoizedProps,d)&&a.ref===b.ref&&(qg=!1,e<f)?Jg(a,b,f):Mg(a,b,c,d,f)}function Ng(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function Mg(a,b,c,d,e){var f=J(c)?Ie:H.current;f=Je(b,f);Ig(b,e);c=hg(a,b,c,d,f,e);if(null!==a&&!qg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),Jg(a,b,e);b.effectTag|=1;S(a,b,c,e);return b.child}
function Og(a,b,c,d,e){if(J(c)){var f=!0;Oe(b)}else f=!1;Ig(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),vf(b,c,d,e),xf(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var l=g.context,k=c.contextType;"object"===typeof k&&null!==k?k=M(k):(k=J(c)?Ie:H.current,k=Je(b,k));var m=c.getDerivedStateFromProps,p="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;p||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||l!==k)&&wf(b,g,d,k);Pg=!1;var t=b.memoizedState;l=g.state=t;var A=b.updateQueue;null!==A&&(yf(b,A,d,g,e),l=b.memoizedState);h!==d||t!==l||I.current||Pg?("function"===typeof m&&(kf(b,c,m,d),l=b.memoizedState),(h=Pg||uf(b,c,h,d,t,l,k))?(p||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&
g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=l),g.props=d,g.state=l,g.context=k,d=h):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1)}else g=b.stateNode,h=b.memoizedProps,g.props=b.type===b.elementType?h:L(b.type,h),l=g.context,k=c.contextType,"object"===typeof k&&null!==k?k=M(k):(k=J(c)?Ie:H.current,k=Je(b,k)),m=c.getDerivedStateFromProps,(p="function"===
typeof m||"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||l!==k)&&wf(b,g,d,k),Pg=!1,l=b.memoizedState,t=g.state=l,A=b.updateQueue,null!==A&&(yf(b,A,d,g,e),t=b.memoizedState),h!==d||l!==t||I.current||Pg?("function"===typeof m&&(kf(b,c,m,d),t=b.memoizedState),(m=Pg||uf(b,c,h,d,l,t,k))?(p||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===
typeof g.componentWillUpdate&&g.componentWillUpdate(d,t,k),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,t,k)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=256),b.memoizedProps=d,b.memoizedState=
t),g.props=d,g.state=t,g.context=k,d=m):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=256),d=!1);return Qg(a,b,c,d,f,e)}
function Qg(a,b,c,d,e,f){Ng(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&Pe(b,c,!1),Jg(a,b,f);d=b.stateNode;Gg.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&g?(b.child=Df(b,a.child,null,f),b.child=Df(b,null,h,f)):S(a,b,h,f);b.memoizedState=d.state;e&&Pe(b,c,!0);return b.child}function Rg(a){var b=a.stateNode;b.pendingContext?Me(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Me(a,b.context,!1);Jf(a,b.containerInfo)}
function Sg(a,b,c){var d=b.mode,e=b.pendingProps,f=b.memoizedState;if(0===(b.effectTag&64)){f=null;var g=!1}else f={timedOutAt:null!==f?f.timedOutAt:0},g=!0,b.effectTag&=-65;if(null===a)if(g){var h=e.fallback;a=Ze(null,d,0,null);0===(b.mode&1)&&(a.child=null!==b.memoizedState?b.child.child:b.child);d=Ze(h,d,c,null);a.sibling=d;c=a;c.return=d.return=b}else c=d=Ef(b,null,e.children,c);else null!==a.memoizedState?(d=a.child,h=d.sibling,g?(c=e.fallback,e=Xe(d,d.pendingProps,0),0===(b.mode&1)&&(g=null!==
b.memoizedState?b.child.child:b.child,g!==d.child&&(e.child=g)),d=e.sibling=Xe(h,c,h.expirationTime),c=e,e.childExpirationTime=0,c.return=d.return=b):c=d=Df(b,d.child,e.children,c)):(h=a.child,g?(g=e.fallback,e=Ze(null,d,0,null),e.child=h,0===(b.mode&1)&&(e.child=null!==b.memoizedState?b.child.child:b.child),d=e.sibling=Ze(g,d,c,null),d.effectTag|=2,c=e,e.childExpirationTime=0,c.return=d.return=b):d=c=Df(b,h,e.children,c)),b.stateNode=a.stateNode;b.memoizedState=f;b.child=c;return d}
function Jg(a,b,c){null!==a&&(b.contextDependencies=a.contextDependencies);if(b.childExpirationTime<c)return null;null!==a&&b.child!==a.child?x("153"):void 0;if(null!==b.child){a=b.child;c=Xe(a,a.pendingProps,a.expirationTime);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Xe(a,a.pendingProps,a.expirationTime),c.return=b;c.sibling=null}return b.child}
function Tg(a,b,c){var d=b.expirationTime;if(null!==a)if(a.memoizedProps!==b.pendingProps||I.current)qg=!0;else{if(d<c){qg=!1;switch(b.tag){case 3:Rg(b);Fg();break;case 5:Lf(b);break;case 1:J(b.type)&&Oe(b);break;case 4:Jf(b,b.stateNode.containerInfo);break;case 10:Ug(b,b.memoizedProps.value);break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;if(0!==d&&d>=c)return Sg(a,b,c);b=Jg(a,b,c);return null!==b?b.sibling:null}}return Jg(a,b,c)}}else qg=!1;b.expirationTime=0;switch(b.tag){case 2:d=
b.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;var e=Je(b,H.current);Ig(b,c);e=hg(null,b,d,a,e,c);b.effectTag|=1;if("object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;lg();if(J(d)){var f=!0;Oe(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;var g=d.getDerivedStateFromProps;"function"===typeof g&&kf(b,d,g,a);e.updater=tf;b.stateNode=e;e._reactInternalFiber=b;xf(b,d,a,c);b=Qg(null,b,d,!0,f,
c)}else b.tag=0,S(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);f=b.pendingProps;a=hf(e);b.type=a;e=b.tag=We(a);f=L(a,f);g=void 0;switch(e){case 0:g=Mg(null,b,a,f,c);break;case 1:g=Og(null,b,a,f,c);break;case 11:g=Hg(null,b,a,f,c);break;case 14:g=Kg(null,b,a,L(a.type,f),d,c);break;default:x("306",a,"")}return g;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:L(d,e),Mg(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,
e=b.elementType===d?e:L(d,e),Og(a,b,d,e,c);case 3:Rg(b);d=b.updateQueue;null===d?x("282"):void 0;e=b.memoizedState;e=null!==e?e.element:null;yf(b,d,b.pendingProps,null,c);d=b.memoizedState.element;if(d===e)Fg(),b=Jg(a,b,c);else{e=b.stateNode;if(e=(null===a||null===a.child)&&e.hydrate)yg=Ee(b.stateNode.containerInfo),xg=b,e=zg=!0;e?(b.effectTag|=2,b.child=Ef(b,null,d,c)):(S(a,b,d,c),Fg());b=b.child}return b;case 5:return Lf(b),null===a&&Cg(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,
g=e.children,xe(d,e)?g=null:null!==f&&xe(d,f)&&(b.effectTag|=16),Ng(a,b),1!==c&&b.mode&1&&e.hidden?(b.expirationTime=b.childExpirationTime=1,b=null):(S(a,b,g,c),b=b.child),b;case 6:return null===a&&Cg(b),null;case 13:return Sg(a,b,c);case 4:return Jf(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Df(b,null,d,c):S(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:L(d,e),Hg(a,b,d,e,c);case 7:return S(a,b,b.pendingProps,c),b.child;case 8:return S(a,b,b.pendingProps.children,
c),b.child;case 12:return S(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;Ug(b,f);if(null!==g){var h=g.value;f=bd(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0;if(0===f){if(g.children===e.children&&!I.current){b=Jg(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var l=h.contextDependencies;if(null!==l){g=h.child;for(var k=l.first;null!==k;){if(k.context===d&&0!==
(k.observedBits&f)){1===h.tag&&(k=nf(c),k.tag=sf,pf(h,k));h.expirationTime<c&&(h.expirationTime=c);k=h.alternate;null!==k&&k.expirationTime<c&&(k.expirationTime=c);k=c;for(var m=h.return;null!==m;){var p=m.alternate;if(m.childExpirationTime<k)m.childExpirationTime=k,null!==p&&p.childExpirationTime<k&&(p.childExpirationTime=k);else if(null!==p&&p.childExpirationTime<k)p.childExpirationTime=k;else break;m=m.return}l.expirationTime<c&&(l.expirationTime=c);break}k=k.next}}else g=10===h.tag?h.type===b.type?
null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=g}}S(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,Ig(b,c),e=M(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,S(a,b,d,c),b.child;case 14:return e=b.type,f=L(e,b.pendingProps),f=L(e.type,f),Kg(a,b,e,f,d,c);case 15:return Lg(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===
d?e:L(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,J(d)?(a=!0,Oe(b)):a=!1,Ig(b,c),vf(b,d,e,c),xf(b,d,e,c),Qg(null,b,d,!0,a,c)}x("156")}var Vg={current:null},Wg=null,Xg=null,Yg=null;function Ug(a,b){var c=a.type._context;G(Vg,c._currentValue,a);c._currentValue=b}function Zg(a){var b=Vg.current;F(Vg,a);a.type._context._currentValue=b}function Ig(a,b){Wg=a;Yg=Xg=null;var c=a.contextDependencies;null!==c&&c.expirationTime>=b&&(qg=!0);a.contextDependencies=null}
function M(a,b){if(Yg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)Yg=a,b=1073741823;b={context:a,observedBits:b,next:null};null===Xg?(null===Wg?x("308"):void 0,Xg=b,Wg.contextDependencies={first:b,expirationTime:0}):Xg=Xg.next=b}return a._currentValue}var $g=0,rf=1,sf=2,ah=3,Pg=!1;function bh(a){return{baseState:a,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}
function ch(a){return{baseState:a.baseState,firstUpdate:a.firstUpdate,lastUpdate:a.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function nf(a){return{expirationTime:a,tag:$g,payload:null,callback:null,next:null,nextEffect:null}}function dh(a,b){null===a.lastUpdate?a.firstUpdate=a.lastUpdate=b:(a.lastUpdate.next=b,a.lastUpdate=b)}
function pf(a,b){var c=a.alternate;if(null===c){var d=a.updateQueue;var e=null;null===d&&(d=a.updateQueue=bh(a.memoizedState))}else d=a.updateQueue,e=c.updateQueue,null===d?null===e?(d=a.updateQueue=bh(a.memoizedState),e=c.updateQueue=bh(c.memoizedState)):d=a.updateQueue=ch(e):null===e&&(e=c.updateQueue=ch(d));null===e||d===e?dh(d,b):null===d.lastUpdate||null===e.lastUpdate?(dh(d,b),dh(e,b)):(dh(d,b),e.lastUpdate=b)}
function eh(a,b){var c=a.updateQueue;c=null===c?a.updateQueue=bh(a.memoizedState):fh(a,c);null===c.lastCapturedUpdate?c.firstCapturedUpdate=c.lastCapturedUpdate=b:(c.lastCapturedUpdate.next=b,c.lastCapturedUpdate=b)}function fh(a,b){var c=a.alternate;null!==c&&b===c.updateQueue&&(b=a.updateQueue=ch(b));return b}
function gh(a,b,c,d,e,f){switch(c.tag){case rf:return a=c.payload,"function"===typeof a?a.call(f,d,e):a;case ah:a.effectTag=a.effectTag&-2049|64;case $g:a=c.payload;e="function"===typeof a?a.call(f,d,e):a;if(null===e||void 0===e)break;return n({},d,e);case sf:Pg=!0}return d}
function yf(a,b,c,d,e){Pg=!1;b=fh(a,b);for(var f=b.baseState,g=null,h=0,l=b.firstUpdate,k=f;null!==l;){var m=l.expirationTime;m<e?(null===g&&(g=l,f=k),h<m&&(h=m)):(k=gh(a,b,l,k,c,d),null!==l.callback&&(a.effectTag|=32,l.nextEffect=null,null===b.lastEffect?b.firstEffect=b.lastEffect=l:(b.lastEffect.nextEffect=l,b.lastEffect=l)));l=l.next}m=null;for(l=b.firstCapturedUpdate;null!==l;){var p=l.expirationTime;p<e?(null===m&&(m=l,null===g&&(f=k)),h<p&&(h=p)):(k=gh(a,b,l,k,c,d),null!==l.callback&&(a.effectTag|=
32,l.nextEffect=null,null===b.lastCapturedEffect?b.firstCapturedEffect=b.lastCapturedEffect=l:(b.lastCapturedEffect.nextEffect=l,b.lastCapturedEffect=l)));l=l.next}null===g&&(b.lastUpdate=null);null===m?b.lastCapturedUpdate=null:a.effectTag|=32;null===g&&null===m&&(f=k);b.baseState=f;b.firstUpdate=g;b.firstCapturedUpdate=m;a.expirationTime=h;a.memoizedState=k}
function hh(a,b,c){null!==b.firstCapturedUpdate&&(null!==b.lastUpdate&&(b.lastUpdate.next=b.firstCapturedUpdate,b.lastUpdate=b.lastCapturedUpdate),b.firstCapturedUpdate=b.lastCapturedUpdate=null);ih(b.firstEffect,c);b.firstEffect=b.lastEffect=null;ih(b.firstCapturedEffect,c);b.firstCapturedEffect=b.lastCapturedEffect=null}function ih(a,b){for(;null!==a;){var c=a.callback;if(null!==c){a.callback=null;var d=b;"function"!==typeof c?x("191",c):void 0;c.call(d)}a=a.nextEffect}}
function jh(a,b){return{value:a,source:b,stack:jc(b)}}function kh(a){a.effectTag|=4}var lh=void 0,mh=void 0,nh=void 0,oh=void 0;lh=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};mh=function(){};
nh=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;If(N.current);a=null;switch(c){case "input":f=vc(g,f);d=vc(g,d);a=[];break;case "option":f=$d(g,f);d=$d(g,d);a=[];break;case "select":f=n({},f,{value:void 0});d=n({},d,{value:void 0});a=[];break;case "textarea":f=be(g,f);d=be(g,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(g.onclick=te)}qe(c,d);g=c=void 0;var h=null;for(c in f)if(!d.hasOwnProperty(c)&&f.hasOwnProperty(c)&&null!=f[c])if("style"===
c){var l=f[c];for(g in l)l.hasOwnProperty(g)&&(h||(h={}),h[g]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(ra.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in d){var k=d[c];l=null!=f?f[c]:void 0;if(d.hasOwnProperty(c)&&k!==l&&(null!=k||null!=l))if("style"===c)if(l){for(g in l)!l.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(h||(h={}),h[g]="");for(g in k)k.hasOwnProperty(g)&&l[g]!==k[g]&&(h||
(h={}),h[g]=k[g])}else h||(a||(a=[]),a.push(c,h)),h=k;else"dangerouslySetInnerHTML"===c?(k=k?k.__html:void 0,l=l?l.__html:void 0,null!=k&&l!==k&&(a=a||[]).push(c,""+k)):"children"===c?l===k||"string"!==typeof k&&"number"!==typeof k||(a=a||[]).push(c,""+k):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(ra.hasOwnProperty(c)?(null!=k&&se(e,c),a||l===k||(a=[])):(a=a||[]).push(c,k))}h&&(a=a||[]).push("style",h);e=a;(b.updateQueue=e)&&kh(b)}};oh=function(a,b,c,d){c!==d&&kh(b)};
var ph="function"===typeof WeakSet?WeakSet:Set;function qh(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=jc(c));null!==c&&ic(c.type);b=b.value;null!==a&&1===a.tag&&ic(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function rh(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){sh(a,c)}else b.current=null}
function th(a,b,c){c=c.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do{if((d.tag&a)!==Nf){var e=d.destroy;d.destroy=void 0;void 0!==e&&e()}(d.tag&b)!==Nf&&(e=d.create,d.destroy=e());d=d.next}while(d!==c)}}
function uh(a,b){for(var c=a;;){if(5===c.tag){var d=c.stateNode;if(b)d.style.display="none";else{d=c.stateNode;var e=c.memoizedProps.style;e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null;d.style.display=ne("display",e)}}else if(6===c.tag)c.stateNode.nodeValue=b?"":c.memoizedProps;else if(13===c.tag&&null!==c.memoizedState){d=c.child.sibling;d.return=c;c=d;continue}else if(null!==c.child){c.child.return=c;c=c.child;continue}if(c===a)break;for(;null===c.sibling;){if(null===c.return||
c.return===a)return;c=c.return}c.sibling.return=c.return;c=c.sibling}}
function vh(a){"function"===typeof Re&&Re(a);switch(a.tag){case 0:case 11:case 14:case 15:var b=a.updateQueue;if(null!==b&&(b=b.lastEffect,null!==b)){var c=b=b.next;do{var d=c.destroy;if(void 0!==d){var e=a;try{d()}catch(f){sh(e,f)}}c=c.next}while(c!==b)}break;case 1:rh(a);b=a.stateNode;if("function"===typeof b.componentWillUnmount)try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(f){sh(a,f)}break;case 5:rh(a);break;case 4:wh(a)}}
function xh(a){return 5===a.tag||3===a.tag||4===a.tag}
function yh(a){a:{for(var b=a.return;null!==b;){if(xh(b)){var c=b;break a}b=b.return}x("160");c=void 0}var d=b=void 0;switch(c.tag){case 5:b=c.stateNode;d=!1;break;case 3:b=c.stateNode.containerInfo;d=!0;break;case 4:b=c.stateNode.containerInfo;d=!0;break;default:x("161")}c.effectTag&16&&(ke(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||xh(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.effectTag&
2)continue b;if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}for(var e=a;;){if(5===e.tag||6===e.tag)if(c)if(d){var f=b,g=e.stateNode,h=c;8===f.nodeType?f.parentNode.insertBefore(g,h):f.insertBefore(g,h)}else b.insertBefore(e.stateNode,c);else d?(g=b,h=e.stateNode,8===g.nodeType?(f=g.parentNode,f.insertBefore(h,g)):(f=g,f.appendChild(h)),g=g._reactRootContainer,null!==g&&void 0!==g||null!==f.onclick||(f.onclick=te)):b.appendChild(e.stateNode);
else if(4!==e.tag&&null!==e.child){e.child.return=e;e=e.child;continue}if(e===a)break;for(;null===e.sibling;){if(null===e.return||e.return===a)return;e=e.return}e.sibling.return=e.return;e=e.sibling}}
function wh(a){for(var b=a,c=!1,d=void 0,e=void 0;;){if(!c){c=b.return;a:for(;;){null===c?x("160"):void 0;switch(c.tag){case 5:d=c.stateNode;e=!1;break a;case 3:d=c.stateNode.containerInfo;e=!0;break a;case 4:d=c.stateNode.containerInfo;e=!0;break a}c=c.return}c=!0}if(5===b.tag||6===b.tag){a:for(var f=b,g=f;;)if(vh(g),null!==g.child&&4!==g.tag)g.child.return=g,g=g.child;else{if(g===f)break;for(;null===g.sibling;){if(null===g.return||g.return===f)break a;g=g.return}g.sibling.return=g.return;g=g.sibling}e?
(f=d,g=b.stateNode,8===f.nodeType?f.parentNode.removeChild(g):f.removeChild(g)):d.removeChild(b.stateNode)}else if(4===b.tag){if(null!==b.child){d=b.stateNode.containerInfo;e=!0;b.child.return=b;b=b.child;continue}}else if(vh(b),null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return;b=b.return;4===b.tag&&(c=!1)}b.sibling.return=b.return;b=b.sibling}}
function zh(a,b){switch(b.tag){case 0:case 11:case 14:case 15:th(Pf,Qf,b);break;case 1:break;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps;a=null!==a?a.memoizedProps:d;var e=b.type,f=b.updateQueue;b.updateQueue=null;null!==f&&Ce(c,f,e,a,d,b)}break;case 6:null===b.stateNode?x("162"):void 0;b.stateNode.nodeValue=b.memoizedProps;break;case 3:break;case 12:break;case 13:c=b.memoizedState;d=void 0;a=b;null===c?d=!1:(d=!0,a=b.child,0===c.timedOutAt&&(c.timedOutAt=lf()));null!==a&&uh(a,d);c=
b.updateQueue;if(null!==c){b.updateQueue=null;var g=b.stateNode;null===g&&(g=b.stateNode=new ph);c.forEach(function(a){var c=Ah.bind(null,b,a);g.has(a)||(g.add(a),a.then(c,c))})}break;case 17:break;default:x("163")}}var Bh="function"===typeof WeakMap?WeakMap:Map;function Ch(a,b,c){c=nf(c);c.tag=ah;c.payload={element:null};var d=b.value;c.callback=function(){Dh(d);qh(a,b)};return c}
function Eh(a,b,c){c=nf(c);c.tag=ah;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===Fh?Fh=new Set([this]):Fh.add(this));var c=b.value,e=b.stack;qh(a,b);this.componentDidCatch(c,{componentStack:null!==e?e:""})});return c}
function Gh(a){switch(a.tag){case 1:J(a.type)&&Ke(a);var b=a.effectTag;return b&2048?(a.effectTag=b&-2049|64,a):null;case 3:return Kf(a),Le(a),b=a.effectTag,0!==(b&64)?x("285"):void 0,a.effectTag=b&-2049|64,a;case 5:return Mf(a),null;case 13:return b=a.effectTag,b&2048?(a.effectTag=b&-2049|64,a):null;case 18:return null;case 4:return Kf(a),null;case 10:return Zg(a),null;default:return null}}
var Hh=Tb.ReactCurrentDispatcher,Ih=Tb.ReactCurrentOwner,Jh=1073741822,Kh=!1,T=null,Lh=null,U=0,Mh=-1,Nh=!1,V=null,Oh=!1,Ph=null,Qh=null,Rh=null,Fh=null;function Sh(){if(null!==T)for(var a=T.return;null!==a;){var b=a;switch(b.tag){case 1:var c=b.type.childContextTypes;null!==c&&void 0!==c&&Ke(b);break;case 3:Kf(b);Le(b);break;case 5:Mf(b);break;case 4:Kf(b);break;case 10:Zg(b)}a=a.return}Lh=null;U=0;Mh=-1;Nh=!1;T=null}
function Th(){for(;null!==V;){var a=V.effectTag;a&16&&ke(V.stateNode,"");if(a&128){var b=V.alternate;null!==b&&(b=b.ref,null!==b&&("function"===typeof b?b(null):b.current=null))}switch(a&14){case 2:yh(V);V.effectTag&=-3;break;case 6:yh(V);V.effectTag&=-3;zh(V.alternate,V);break;case 4:zh(V.alternate,V);break;case 8:a=V,wh(a),a.return=null,a.child=null,a.memoizedState=null,a.updateQueue=null,a=a.alternate,null!==a&&(a.return=null,a.child=null,a.memoizedState=null,a.updateQueue=null)}V=V.nextEffect}}
function Uh(){for(;null!==V;){if(V.effectTag&256)a:{var a=V.alternate,b=V;switch(b.tag){case 0:case 11:case 15:th(Of,Nf,b);break a;case 1:if(b.effectTag&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:L(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}break a;case 3:case 5:case 6:case 4:case 17:break a;default:x("163")}}V=V.nextEffect}}
function Vh(a,b){for(;null!==V;){var c=V.effectTag;if(c&36){var d=V.alternate,e=V,f=b;switch(e.tag){case 0:case 11:case 15:th(Rf,Sf,e);break;case 1:var g=e.stateNode;if(e.effectTag&4)if(null===d)g.componentDidMount();else{var h=e.elementType===e.type?d.memoizedProps:L(e.type,d.memoizedProps);g.componentDidUpdate(h,d.memoizedState,g.__reactInternalSnapshotBeforeUpdate)}d=e.updateQueue;null!==d&&hh(e,d,g,f);break;case 3:d=e.updateQueue;if(null!==d){g=null;if(null!==e.child)switch(e.child.tag){case 5:g=
e.child.stateNode;break;case 1:g=e.child.stateNode}hh(e,d,g,f)}break;case 5:f=e.stateNode;null===d&&e.effectTag&4&&we(e.type,e.memoizedProps)&&f.focus();break;case 6:break;case 4:break;case 12:break;case 13:break;case 17:break;default:x("163")}}c&128&&(e=V.ref,null!==e&&(f=V.stateNode,"function"===typeof e?e(f):e.current=f));c&512&&(Ph=a);V=V.nextEffect}}
function Wh(a,b){Rh=Qh=Ph=null;var c=W;W=!0;do{if(b.effectTag&512){var d=!1,e=void 0;try{var f=b;th(Uf,Nf,f);th(Nf,Tf,f)}catch(g){d=!0,e=g}d&&sh(b,e)}b=b.nextEffect}while(null!==b);W=c;c=a.expirationTime;0!==c&&Xh(a,c);X||W||Yh(1073741823,!1)}function of(){null!==Qh&&Be(Qh);null!==Rh&&Rh()}
function Zh(a,b){Oh=Kh=!0;a.current===b?x("177"):void 0;var c=a.pendingCommitExpirationTime;0===c?x("261"):void 0;a.pendingCommitExpirationTime=0;var d=b.expirationTime,e=b.childExpirationTime;ef(a,e>d?e:d);Ih.current=null;d=void 0;1<b.effectTag?null!==b.lastEffect?(b.lastEffect.nextEffect=b,d=b.firstEffect):d=b:d=b.firstEffect;ue=Bd;ve=Pd();Bd=!1;for(V=d;null!==V;){e=!1;var f=void 0;try{Uh()}catch(h){e=!0,f=h}e&&(null===V?x("178"):void 0,sh(V,f),null!==V&&(V=V.nextEffect))}for(V=d;null!==V;){e=!1;
f=void 0;try{Th()}catch(h){e=!0,f=h}e&&(null===V?x("178"):void 0,sh(V,f),null!==V&&(V=V.nextEffect))}Qd(ve);ve=null;Bd=!!ue;ue=null;a.current=b;for(V=d;null!==V;){e=!1;f=void 0;try{Vh(a,c)}catch(h){e=!0,f=h}e&&(null===V?x("178"):void 0,sh(V,f),null!==V&&(V=V.nextEffect))}if(null!==d&&null!==Ph){var g=Wh.bind(null,a,d);Qh=r.unstable_runWithPriority(r.unstable_NormalPriority,function(){return Ae(g)});Rh=g}Kh=Oh=!1;"function"===typeof Qe&&Qe(b.stateNode);c=b.expirationTime;b=b.childExpirationTime;b=
b>c?b:c;0===b&&(Fh=null);$h(a,b)}
function ai(a){for(;;){var b=a.alternate,c=a.return,d=a.sibling;if(0===(a.effectTag&1024)){T=a;a:{var e=b;b=a;var f=U;var g=b.pendingProps;switch(b.tag){case 2:break;case 16:break;case 15:case 0:break;case 1:J(b.type)&&Ke(b);break;case 3:Kf(b);Le(b);g=b.stateNode;g.pendingContext&&(g.context=g.pendingContext,g.pendingContext=null);if(null===e||null===e.child)Eg(b),b.effectTag&=-3;mh(b);break;case 5:Mf(b);var h=If(Hf.current);f=b.type;if(null!==e&&null!=b.stateNode)nh(e,b,f,g,h),e.ref!==b.ref&&(b.effectTag|=
128);else if(g){var l=If(N.current);if(Eg(b)){g=b;e=g.stateNode;var k=g.type,m=g.memoizedProps,p=h;e[Fa]=g;e[Ga]=m;f=void 0;h=k;switch(h){case "iframe":case "object":E("load",e);break;case "video":case "audio":for(k=0;k<ab.length;k++)E(ab[k],e);break;case "source":E("error",e);break;case "img":case "image":case "link":E("error",e);E("load",e);break;case "form":E("reset",e);E("submit",e);break;case "details":E("toggle",e);break;case "input":wc(e,m);E("invalid",e);se(p,"onChange");break;case "select":e._wrapperState=
{wasMultiple:!!m.multiple};E("invalid",e);se(p,"onChange");break;case "textarea":ce(e,m),E("invalid",e),se(p,"onChange")}qe(h,m);k=null;for(f in m)m.hasOwnProperty(f)&&(l=m[f],"children"===f?"string"===typeof l?e.textContent!==l&&(k=["children",l]):"number"===typeof l&&e.textContent!==""+l&&(k=["children",""+l]):ra.hasOwnProperty(f)&&null!=l&&se(p,f));switch(h){case "input":Rb(e);Ac(e,m,!0);break;case "textarea":Rb(e);ee(e,m);break;case "select":case "option":break;default:"function"===typeof m.onClick&&
(e.onclick=te)}f=k;g.updateQueue=f;g=null!==f?!0:!1;g&&kh(b)}else{m=b;p=f;e=g;k=9===h.nodeType?h:h.ownerDocument;l===fe.html&&(l=ge(p));l===fe.html?"script"===p?(e=k.createElement("div"),e.innerHTML="<script>\x3c/script>",k=e.removeChild(e.firstChild)):"string"===typeof e.is?k=k.createElement(p,{is:e.is}):(k=k.createElement(p),"select"===p&&(p=k,e.multiple?p.multiple=!0:e.size&&(p.size=e.size))):k=k.createElementNS(l,p);e=k;e[Fa]=m;e[Ga]=g;lh(e,b,!1,!1);p=e;k=f;m=g;var t=h,A=re(k,m);switch(k){case "iframe":case "object":E("load",
p);h=m;break;case "video":case "audio":for(h=0;h<ab.length;h++)E(ab[h],p);h=m;break;case "source":E("error",p);h=m;break;case "img":case "image":case "link":E("error",p);E("load",p);h=m;break;case "form":E("reset",p);E("submit",p);h=m;break;case "details":E("toggle",p);h=m;break;case "input":wc(p,m);h=vc(p,m);E("invalid",p);se(t,"onChange");break;case "option":h=$d(p,m);break;case "select":p._wrapperState={wasMultiple:!!m.multiple};h=n({},m,{value:void 0});E("invalid",p);se(t,"onChange");break;case "textarea":ce(p,
m);h=be(p,m);E("invalid",p);se(t,"onChange");break;default:h=m}qe(k,h);l=void 0;var v=k,R=p,u=h;for(l in u)if(u.hasOwnProperty(l)){var q=u[l];"style"===l?oe(R,q):"dangerouslySetInnerHTML"===l?(q=q?q.__html:void 0,null!=q&&je(R,q)):"children"===l?"string"===typeof q?("textarea"!==v||""!==q)&&ke(R,q):"number"===typeof q&&ke(R,""+q):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ra.hasOwnProperty(l)?null!=q&&se(t,l):null!=q&&tc(R,l,q,A))}switch(k){case "input":Rb(p);
Ac(p,m,!1);break;case "textarea":Rb(p);ee(p,m);break;case "option":null!=m.value&&p.setAttribute("value",""+uc(m.value));break;case "select":h=p;h.multiple=!!m.multiple;p=m.value;null!=p?ae(h,!!m.multiple,p,!1):null!=m.defaultValue&&ae(h,!!m.multiple,m.defaultValue,!0);break;default:"function"===typeof h.onClick&&(p.onclick=te)}(g=we(f,g))&&kh(b);b.stateNode=e}null!==b.ref&&(b.effectTag|=128)}else null===b.stateNode?x("166"):void 0;break;case 6:e&&null!=b.stateNode?oh(e,b,e.memoizedProps,g):("string"!==
typeof g&&(null===b.stateNode?x("166"):void 0),e=If(Hf.current),If(N.current),Eg(b)?(g=b,f=g.stateNode,e=g.memoizedProps,f[Fa]=g,(g=f.nodeValue!==e)&&kh(b)):(f=b,g=(9===e.nodeType?e:e.ownerDocument).createTextNode(g),g[Fa]=b,f.stateNode=g));break;case 11:break;case 13:g=b.memoizedState;if(0!==(b.effectTag&64)){b.expirationTime=f;T=b;break a}g=null!==g;f=null!==e&&null!==e.memoizedState;null!==e&&!g&&f&&(e=e.child.sibling,null!==e&&(h=b.firstEffect,null!==h?(b.firstEffect=e,e.nextEffect=h):(b.firstEffect=
b.lastEffect=e,e.nextEffect=null),e.effectTag=8));if(g||f)b.effectTag|=4;break;case 7:break;case 8:break;case 12:break;case 4:Kf(b);mh(b);break;case 10:Zg(b);break;case 9:break;case 14:break;case 17:J(b.type)&&Ke(b);break;case 18:break;default:x("156")}T=null}b=a;if(1===U||1!==b.childExpirationTime){g=0;for(f=b.child;null!==f;)e=f.expirationTime,h=f.childExpirationTime,e>g&&(g=e),h>g&&(g=h),f=f.sibling;b.childExpirationTime=g}if(null!==T)return T;null!==c&&0===(c.effectTag&1024)&&(null===c.firstEffect&&
(c.firstEffect=a.firstEffect),null!==a.lastEffect&&(null!==c.lastEffect&&(c.lastEffect.nextEffect=a.firstEffect),c.lastEffect=a.lastEffect),1<a.effectTag&&(null!==c.lastEffect?c.lastEffect.nextEffect=a:c.firstEffect=a,c.lastEffect=a))}else{a=Gh(a,U);if(null!==a)return a.effectTag&=1023,a;null!==c&&(c.firstEffect=c.lastEffect=null,c.effectTag|=1024)}if(null!==d)return d;if(null!==c)a=c;else break}return null}
function bi(a){var b=Tg(a.alternate,a,U);a.memoizedProps=a.pendingProps;null===b&&(b=ai(a));Ih.current=null;return b}
function ci(a,b){Kh?x("243"):void 0;of();Kh=!0;var c=Hh.current;Hh.current=kg;var d=a.nextExpirationTimeToWorkOn;if(d!==U||a!==Lh||null===T)Sh(),Lh=a,U=d,T=Xe(Lh.current,null,U),a.pendingCommitExpirationTime=0;var e=!1;do{try{if(b)for(;null!==T&&!di();)T=bi(T);else for(;null!==T;)T=bi(T)}catch(u){if(Yg=Xg=Wg=null,lg(),null===T)e=!0,Dh(u);else{null===T?x("271"):void 0;var f=T,g=f.return;if(null===g)e=!0,Dh(u);else{a:{var h=a,l=g,k=f,m=u;g=U;k.effectTag|=1024;k.firstEffect=k.lastEffect=null;if(null!==
m&&"object"===typeof m&&"function"===typeof m.then){var p=m;m=l;var t=-1,A=-1;do{if(13===m.tag){var v=m.alternate;if(null!==v&&(v=v.memoizedState,null!==v)){A=10*(1073741822-v.timedOutAt);break}v=m.pendingProps.maxDuration;if("number"===typeof v)if(0>=v)t=0;else if(-1===t||v<t)t=v}m=m.return}while(null!==m);m=l;do{if(v=13===m.tag)v=void 0===m.memoizedProps.fallback?!1:null===m.memoizedState;if(v){l=m.updateQueue;null===l?(l=new Set,l.add(p),m.updateQueue=l):l.add(p);if(0===(m.mode&1)){m.effectTag|=
64;k.effectTag&=-1957;1===k.tag&&(null===k.alternate?k.tag=17:(g=nf(1073741823),g.tag=sf,pf(k,g)));k.expirationTime=1073741823;break a}k=h;l=g;var R=k.pingCache;null===R?(R=k.pingCache=new Bh,v=new Set,R.set(p,v)):(v=R.get(p),void 0===v&&(v=new Set,R.set(p,v)));v.has(l)||(v.add(l),k=ei.bind(null,k,p,l),p.then(k,k));-1===t?h=1073741823:(-1===A&&(A=10*(1073741822-gf(h,g))-5E3),h=A+t);0<=h&&Mh<h&&(Mh=h);m.effectTag|=2048;m.expirationTime=g;break a}m=m.return}while(null!==m);m=Error((ic(k.type)||"A React component")+
" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+jc(k))}Nh=!0;m=jh(m,k);h=l;do{switch(h.tag){case 3:h.effectTag|=2048;h.expirationTime=g;g=Ch(h,m,g);eh(h,g);break a;case 1:if(t=m,A=h.type,k=h.stateNode,0===(h.effectTag&64)&&("function"===typeof A.getDerivedStateFromError||null!==k&&"function"===typeof k.componentDidCatch&&(null===Fh||!Fh.has(k)))){h.effectTag|=2048;
h.expirationTime=g;g=Eh(h,t,g);eh(h,g);break a}}h=h.return}while(null!==h)}T=ai(f);continue}}}break}while(1);Kh=!1;Hh.current=c;Yg=Xg=Wg=null;lg();if(e)Lh=null,a.finishedWork=null;else if(null!==T)a.finishedWork=null;else{c=a.current.alternate;null===c?x("281"):void 0;Lh=null;if(Nh){e=a.latestPendingTime;f=a.latestSuspendedTime;g=a.latestPingedTime;if(0!==e&&e<d||0!==f&&f<d||0!==g&&g<d){ff(a,d);fi(a,c,d,a.expirationTime,-1);return}if(!a.didError&&b){a.didError=!0;d=a.nextExpirationTimeToWorkOn=d;
b=a.expirationTime=1073741823;fi(a,c,d,b,-1);return}}b&&-1!==Mh?(ff(a,d),b=10*(1073741822-gf(a,d)),b<Mh&&(Mh=b),b=10*(1073741822-lf()),b=Mh-b,fi(a,c,d,a.expirationTime,0>b?0:b)):(a.pendingCommitExpirationTime=d,a.finishedWork=c)}}
function sh(a,b){for(var c=a.return;null!==c;){switch(c.tag){case 1:var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Fh||!Fh.has(d))){a=jh(b,a);a=Eh(c,a,1073741823);pf(c,a);qf(c,1073741823);return}break;case 3:a=jh(b,a);a=Ch(c,a,1073741823);pf(c,a);qf(c,1073741823);return}c=c.return}3===a.tag&&(c=jh(b,a),c=Ch(a,c,1073741823),pf(a,c),qf(a,1073741823))}
function mf(a,b){var c=r.unstable_getCurrentPriorityLevel(),d=void 0;if(0===(b.mode&1))d=1073741823;else if(Kh&&!Oh)d=U;else{switch(c){case r.unstable_ImmediatePriority:d=1073741823;break;case r.unstable_UserBlockingPriority:d=1073741822-10*(((1073741822-a+15)/10|0)+1);break;case r.unstable_NormalPriority:d=1073741822-25*(((1073741822-a+500)/25|0)+1);break;case r.unstable_LowPriority:case r.unstable_IdlePriority:d=1;break;default:x("313")}null!==Lh&&d===U&&--d}c===r.unstable_UserBlockingPriority&&
(0===gi||d<gi)&&(gi=d);return d}function ei(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);if(null!==Lh&&U===c)Lh=null;else if(b=a.earliestSuspendedTime,d=a.latestSuspendedTime,0!==b&&c<=b&&c>=d){a.didError=!1;b=a.latestPingedTime;if(0===b||b>c)a.latestPingedTime=c;df(c,a);c=a.expirationTime;0!==c&&Xh(a,c)}}function Ah(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=lf();b=mf(b,a);a=hi(a,b);null!==a&&(cf(a,b),b=a.expirationTime,0!==b&&Xh(a,b))}
function hi(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return}return e}
function qf(a,b){a=hi(a,b);null!==a&&(!Kh&&0!==U&&b>U&&Sh(),cf(a,b),Kh&&!Oh&&Lh===a||Xh(a,a.expirationTime),ii>ji&&(ii=0,x("185")))}function ki(a,b,c,d,e){return r.unstable_runWithPriority(r.unstable_ImmediatePriority,function(){return a(b,c,d,e)})}var li=null,Y=null,mi=0,ni=void 0,W=!1,oi=null,Z=0,gi=0,pi=!1,qi=null,X=!1,ri=!1,si=null,ti=r.unstable_now(),ui=1073741822-(ti/10|0),vi=ui,ji=50,ii=0,wi=null;function xi(){ui=1073741822-((r.unstable_now()-ti)/10|0)}
function yi(a,b){if(0!==mi){if(b<mi)return;null!==ni&&r.unstable_cancelCallback(ni)}mi=b;a=r.unstable_now()-ti;ni=r.unstable_scheduleCallback(zi,{timeout:10*(1073741822-b)-a})}function fi(a,b,c,d,e){a.expirationTime=d;0!==e||di()?0<e&&(a.timeoutHandle=ye(Ai.bind(null,a,b,c),e)):(a.pendingCommitExpirationTime=c,a.finishedWork=b)}function Ai(a,b,c){a.pendingCommitExpirationTime=c;a.finishedWork=b;xi();vi=ui;Bi(a,c)}function $h(a,b){a.expirationTime=b;a.finishedWork=null}
function lf(){if(W)return vi;Ci();if(0===Z||1===Z)xi(),vi=ui;return vi}function Xh(a,b){null===a.nextScheduledRoot?(a.expirationTime=b,null===Y?(li=Y=a,a.nextScheduledRoot=a):(Y=Y.nextScheduledRoot=a,Y.nextScheduledRoot=li)):b>a.expirationTime&&(a.expirationTime=b);W||(X?ri&&(oi=a,Z=1073741823,Di(a,1073741823,!1)):1073741823===b?Yh(1073741823,!1):yi(a,b))}
function Ci(){var a=0,b=null;if(null!==Y)for(var c=Y,d=li;null!==d;){var e=d.expirationTime;if(0===e){null===c||null===Y?x("244"):void 0;if(d===d.nextScheduledRoot){li=Y=d.nextScheduledRoot=null;break}else if(d===li)li=e=d.nextScheduledRoot,Y.nextScheduledRoot=e,d.nextScheduledRoot=null;else if(d===Y){Y=c;Y.nextScheduledRoot=li;d.nextScheduledRoot=null;break}else c.nextScheduledRoot=d.nextScheduledRoot,d.nextScheduledRoot=null;d=c.nextScheduledRoot}else{e>a&&(a=e,b=d);if(d===Y)break;if(1073741823===
a)break;c=d;d=d.nextScheduledRoot}}oi=b;Z=a}var Ei=!1;function di(){return Ei?!0:r.unstable_shouldYield()?Ei=!0:!1}function zi(){try{if(!di()&&null!==li){xi();var a=li;do{var b=a.expirationTime;0!==b&&ui<=b&&(a.nextExpirationTimeToWorkOn=ui);a=a.nextScheduledRoot}while(a!==li)}Yh(0,!0)}finally{Ei=!1}}
function Yh(a,b){Ci();if(b)for(xi(),vi=ui;null!==oi&&0!==Z&&a<=Z&&!(Ei&&ui>Z);)Di(oi,Z,ui>Z),Ci(),xi(),vi=ui;else for(;null!==oi&&0!==Z&&a<=Z;)Di(oi,Z,!1),Ci();b&&(mi=0,ni=null);0!==Z&&yi(oi,Z);ii=0;wi=null;if(null!==si)for(a=si,si=null,b=0;b<a.length;b++){var c=a[b];try{c._onComplete()}catch(d){pi||(pi=!0,qi=d)}}if(pi)throw a=qi,qi=null,pi=!1,a;}function Bi(a,b){W?x("253"):void 0;oi=a;Z=b;Di(a,b,!1);Yh(1073741823,!1)}
function Di(a,b,c){W?x("245"):void 0;W=!0;if(c){var d=a.finishedWork;null!==d?Fi(a,d,b):(a.finishedWork=null,d=a.timeoutHandle,-1!==d&&(a.timeoutHandle=-1,ze(d)),ci(a,c),d=a.finishedWork,null!==d&&(di()?a.finishedWork=d:Fi(a,d,b)))}else d=a.finishedWork,null!==d?Fi(a,d,b):(a.finishedWork=null,d=a.timeoutHandle,-1!==d&&(a.timeoutHandle=-1,ze(d)),ci(a,c),d=a.finishedWork,null!==d&&Fi(a,d,b));W=!1}
function Fi(a,b,c){var d=a.firstBatch;if(null!==d&&d._expirationTime>=c&&(null===si?si=[d]:si.push(d),d._defer)){a.finishedWork=b;a.expirationTime=0;return}a.finishedWork=null;a===wi?ii++:(wi=a,ii=0);r.unstable_runWithPriority(r.unstable_ImmediatePriority,function(){Zh(a,b)})}function Dh(a){null===oi?x("246"):void 0;oi.expirationTime=0;pi||(pi=!0,qi=a)}function Gi(a,b){var c=X;X=!0;try{return a(b)}finally{(X=c)||W||Yh(1073741823,!1)}}
function Hi(a,b){if(X&&!ri){ri=!0;try{return a(b)}finally{ri=!1}}return a(b)}function Ii(a,b,c){X||W||0===gi||(Yh(gi,!1),gi=0);var d=X;X=!0;try{return r.unstable_runWithPriority(r.unstable_UserBlockingPriority,function(){return a(b,c)})}finally{(X=d)||W||Yh(1073741823,!1)}}
function Ji(a,b,c,d,e){var f=b.current;a:if(c){c=c._reactInternalFiber;b:{2===ed(c)&&1===c.tag?void 0:x("170");var g=c;do{switch(g.tag){case 3:g=g.stateNode.context;break b;case 1:if(J(g.type)){g=g.stateNode.__reactInternalMemoizedMergedChildContext;break b}}g=g.return}while(null!==g);x("171");g=void 0}if(1===c.tag){var h=c.type;if(J(h)){c=Ne(c,h,g);break a}}c=g}else c=He;null===b.context?b.context=c:b.pendingContext=c;b=e;e=nf(d);e.payload={element:a};b=void 0===b?null:b;null!==b&&(e.callback=b);
of();pf(f,e);qf(f,d);return d}function Ki(a,b,c,d){var e=b.current,f=lf();e=mf(f,e);return Ji(a,b,c,e,d)}function Li(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function Mi(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:Wb,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
Ab=function(a,b,c){switch(b){case "input":yc(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Ka(d);e?void 0:x("90");Sb(d);yc(d,e)}}}break;case "textarea":de(a,c);break;case "select":b=c.value,null!=b&&ae(a,!!c.multiple,b,!1)}};
function Ni(a){var b=1073741822-25*(((1073741822-lf()+500)/25|0)+1);b>=Jh&&(b=Jh-1);this._expirationTime=Jh=b;this._root=a;this._callbacks=this._next=null;this._hasChildren=this._didComplete=!1;this._children=null;this._defer=!0}Ni.prototype.render=function(a){this._defer?void 0:x("250");this._hasChildren=!0;this._children=a;var b=this._root._internalRoot,c=this._expirationTime,d=new Oi;Ji(a,b,null,c,d._onCommit);return d};
Ni.prototype.then=function(a){if(this._didComplete)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
Ni.prototype.commit=function(){var a=this._root._internalRoot,b=a.firstBatch;this._defer&&null!==b?void 0:x("251");if(this._hasChildren){var c=this._expirationTime;if(b!==this){this._hasChildren&&(c=this._expirationTime=b._expirationTime,this.render(this._children));for(var d=null,e=b;e!==this;)d=e,e=e._next;null===d?x("251"):void 0;d._next=e._next;this._next=b;a.firstBatch=this}this._defer=!1;Bi(a,c);b=this._next;this._next=null;b=a.firstBatch=b;null!==b&&b._hasChildren&&b.render(b._children)}else this._next=
null,this._defer=!1};Ni.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++)(0,a[b])()}};function Oi(){this._callbacks=null;this._didCommit=!1;this._onCommit=this._onCommit.bind(this)}Oi.prototype.then=function(a){if(this._didCommit)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
Oi.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++){var c=a[b];"function"!==typeof c?x("191",c):void 0;c()}}};
function Pi(a,b,c){b=K(3,null,null,b?3:0);a={current:b,containerInfo:a,pendingChildren:null,pingCache:null,earliestPendingTime:0,latestPendingTime:0,earliestSuspendedTime:0,latestSuspendedTime:0,latestPingedTime:0,didError:!1,pendingCommitExpirationTime:0,finishedWork:null,timeoutHandle:-1,context:null,pendingContext:null,hydrate:c,nextExpirationTimeToWorkOn:0,expirationTime:0,firstBatch:null,nextScheduledRoot:null};this._internalRoot=b.stateNode=a}
Pi.prototype.render=function(a,b){var c=this._internalRoot,d=new Oi;b=void 0===b?null:b;null!==b&&d.then(b);Ki(a,c,null,d._onCommit);return d};Pi.prototype.unmount=function(a){var b=this._internalRoot,c=new Oi;a=void 0===a?null:a;null!==a&&c.then(a);Ki(null,b,null,c._onCommit);return c};Pi.prototype.legacy_renderSubtreeIntoContainer=function(a,b,c){var d=this._internalRoot,e=new Oi;c=void 0===c?null:c;null!==c&&e.then(c);Ki(b,d,a,e._onCommit);return e};
Pi.prototype.createBatch=function(){var a=new Ni(this),b=a._expirationTime,c=this._internalRoot,d=c.firstBatch;if(null===d)c.firstBatch=a,a._next=null;else{for(c=null;null!==d&&d._expirationTime>=b;)c=d,d=d._next;a._next=d;null!==c&&(c._next=a)}return a};function Qi(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}Gb=Gi;Hb=Ii;Ib=function(){W||0===gi||(Yh(gi,!1),gi=0)};
function Ri(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new Pi(a,!1,b)}
function Si(a,b,c,d,e){var f=c._reactRootContainer;if(f){if("function"===typeof e){var g=e;e=function(){var a=Li(f._internalRoot);g.call(a)}}null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)}else{f=c._reactRootContainer=Ri(c,d);if("function"===typeof e){var h=e;e=function(){var a=Li(f._internalRoot);h.call(a)}}Hi(function(){null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)})}return Li(f._internalRoot)}
function Ti(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;Qi(b)?void 0:x("200");return Mi(a,b,null,c)}
var Vi={createPortal:Ti,findDOMNode:function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;void 0===b&&("function"===typeof a.render?x("188"):x("268",Object.keys(a)));a=hd(b);a=null===a?null:a.stateNode;return a},hydrate:function(a,b,c){Qi(b)?void 0:x("200");return Si(null,a,b,!0,c)},render:function(a,b,c){Qi(b)?void 0:x("200");return Si(null,a,b,!1,c)},unstable_renderSubtreeIntoContainer:function(a,b,c,d){Qi(c)?void 0:x("200");null==a||void 0===a._reactInternalFiber?
x("38"):void 0;return Si(a,b,c,!1,d)},unmountComponentAtNode:function(a){Qi(a)?void 0:x("40");return a._reactRootContainer?(Hi(function(){Si(null,null,a,!1,function(){a._reactRootContainer=null})}),!0):!1},unstable_createPortal:function(){return Ti.apply(void 0,arguments)},unstable_batchedUpdates:Gi,unstable_interactiveUpdates:Ii,flushSync:function(a,b){W?x("187"):void 0;var c=X;X=!0;try{return ki(a,b)}finally{X=c,Yh(1073741823,!1)}},unstable_createRoot:Ui,unstable_flushControlled:function(a){var b=
X;X=!0;try{ki(a)}finally{(X=b)||W||Yh(1073741823,!1)}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[Ia,Ja,Ka,Ba.injectEventPluginsByName,pa,Qa,function(a){ya(a,Pa)},Eb,Fb,Dd,Da]}};function Ui(a,b){Qi(a)?void 0:x("299","unstable_createRoot");return new Pi(a,!0,null!=b&&!0===b.hydrate)}
(function(a){var b=a.findFiberByHostInstance;return Te(n({},a,{overrideProps:null,currentDispatcherRef:Tb.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=hd(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null}}))})({findFiberByHostInstance:Ha,bundleType:0,version:"16.8.6",rendererPackageName:"react-dom"});var Wi={default:Vi},Xi=Wi&&Vi||Wi;module.exports=Xi.default||Xi;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(15);
} else {}


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** @license React v0.13.6
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports,"__esModule",{value:!0});var d=null,e=!1,g=3,k=-1,l=-1,m=!1,n=!1;function p(){if(!m){var a=d.expirationTime;n?q():n=!0;r(t,a)}}
function u(){var a=d,b=d.next;if(d===b)d=null;else{var c=d.previous;d=c.next=b;b.previous=c}a.next=a.previous=null;c=a.callback;b=a.expirationTime;a=a.priorityLevel;var f=g,Q=l;g=a;l=b;try{var h=c()}finally{g=f,l=Q}if("function"===typeof h)if(h={callback:h,priorityLevel:a,expirationTime:b,next:null,previous:null},null===d)d=h.next=h.previous=h;else{c=null;a=d;do{if(a.expirationTime>=b){c=a;break}a=a.next}while(a!==d);null===c?c=d:c===d&&(d=h,p());b=c.previous;b.next=c.previous=h;h.next=c;h.previous=
b}}function v(){if(-1===k&&null!==d&&1===d.priorityLevel){m=!0;try{do u();while(null!==d&&1===d.priorityLevel)}finally{m=!1,null!==d?p():n=!1}}}function t(a){m=!0;var b=e;e=a;try{if(a)for(;null!==d;){var c=exports.unstable_now();if(d.expirationTime<=c){do u();while(null!==d&&d.expirationTime<=c)}else break}else if(null!==d){do u();while(null!==d&&!w())}}finally{m=!1,e=b,null!==d?p():n=!1,v()}}
var x=Date,y="function"===typeof setTimeout?setTimeout:void 0,z="function"===typeof clearTimeout?clearTimeout:void 0,A="function"===typeof requestAnimationFrame?requestAnimationFrame:void 0,B="function"===typeof cancelAnimationFrame?cancelAnimationFrame:void 0,C,D;function E(a){C=A(function(b){z(D);a(b)});D=y(function(){B(C);a(exports.unstable_now())},100)}
if("object"===typeof performance&&"function"===typeof performance.now){var F=performance;exports.unstable_now=function(){return F.now()}}else exports.unstable_now=function(){return x.now()};var r,q,w,G=null;"undefined"!==typeof window?G=window:"undefined"!==typeof global&&(G=global);
if(G&&G._schedMock){var H=G._schedMock;r=H[0];q=H[1];w=H[2];exports.unstable_now=H[3]}else if("undefined"===typeof window||"function"!==typeof MessageChannel){var I=null,J=function(a){if(null!==I)try{I(a)}finally{I=null}};r=function(a){null!==I?setTimeout(r,0,a):(I=a,setTimeout(J,0,!1))};q=function(){I=null};w=function(){return!1}}else{"undefined"!==typeof console&&("function"!==typeof A&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),
"function"!==typeof B&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));var K=null,L=!1,M=-1,N=!1,O=!1,P=0,R=33,S=33;w=function(){return P<=exports.unstable_now()};var T=new MessageChannel,U=T.port2;T.port1.onmessage=function(){L=!1;var a=K,b=M;K=null;M=-1;var c=exports.unstable_now(),f=!1;if(0>=P-c)if(-1!==b&&b<=c)f=!0;else{N||(N=!0,E(V));K=a;M=b;return}if(null!==a){O=!0;try{a(f)}finally{O=!1}}};
var V=function(a){if(null!==K){E(V);var b=a-P+S;b<S&&R<S?(8>b&&(b=8),S=b<R?R:b):R=b;P=a+S;L||(L=!0,U.postMessage(void 0))}else N=!1};r=function(a,b){K=a;M=b;O||0>b?U.postMessage(void 0):N||(N=!0,E(V))};q=function(){K=null;L=!1;M=-1}}exports.unstable_ImmediatePriority=1;exports.unstable_UserBlockingPriority=2;exports.unstable_NormalPriority=3;exports.unstable_IdlePriority=5;exports.unstable_LowPriority=4;
exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=g,f=k;g=a;k=exports.unstable_now();try{return b()}finally{g=c,k=f,v()}};exports.unstable_next=function(a){switch(g){case 1:case 2:case 3:var b=3;break;default:b=g}var c=g,f=k;g=b;k=exports.unstable_now();try{return a()}finally{g=c,k=f,v()}};
exports.unstable_scheduleCallback=function(a,b){var c=-1!==k?k:exports.unstable_now();if("object"===typeof b&&null!==b&&"number"===typeof b.timeout)b=c+b.timeout;else switch(g){case 1:b=c+-1;break;case 2:b=c+250;break;case 5:b=c+1073741823;break;case 4:b=c+1E4;break;default:b=c+5E3}a={callback:a,priorityLevel:g,expirationTime:b,next:null,previous:null};if(null===d)d=a.next=a.previous=a,p();else{c=null;var f=d;do{if(f.expirationTime>b){c=f;break}f=f.next}while(f!==d);null===c?c=d:c===d&&(d=a,p());
b=c.previous;b.next=c.previous=a;a.next=c;a.previous=b}return a};exports.unstable_cancelCallback=function(a){var b=a.next;if(null!==b){if(b===a)d=null;else{a===d&&(d=b);var c=a.previous;c.next=b;b.previous=c}a.next=a.previous=null}};exports.unstable_wrapCallback=function(a){var b=g;return function(){var c=g,f=k;g=b;k=exports.unstable_now();try{return a.apply(this,arguments)}finally{g=c,k=f,v()}}};exports.unstable_getCurrentPriorityLevel=function(){return g};
exports.unstable_shouldYield=function(){return!e&&(null!==d&&d.expirationTime<l||w())};exports.unstable_continueExecution=function(){null!==d&&p()};exports.unstable_pauseExecution=function(){};exports.unstable_getFirstCallbackNode=function(){return d};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(16)))

/***/ }),
/* 16 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(18);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(2)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, "body { \n    color: #d9d9d9;\n    font-family: Arial, sans-serif, Georgia, serif;\n}\n\nul {\n    border: 1px #404040 solid;\n}\n\nli , label, p {\n    font-size: 11px;\n}\n\nh4, h5, h6 {\n    border-bottom: 1px solid #333333;\n}\n\ninput, textarea { \n    font-size: 11px;\n    background: #2b2b2b;\n    color: #d9d9d9;\n    opacity: 0.75;\n    vertical-align: bottom;\n}\n\ninput[type=\"text\"] {\n    -webkit-appearance: textarea;\n    color: rgba(255,255,255,0.5);\n    border-color: rgba(0,0,0,0.9);\n    border-width: 1px;\n    padding: 7px;\n}\n\nul label input {\n    width: 10px;\n}\n\nul, li {\n    padding-left: 5px;\n    margin-top: 0px;\n    margin-bottom: 0px;\n}\n\nbutton {\n    color: rgba(255,255,255,0.5);\n    border-color: rgba(0,0,0,0.9);\n    border-width: 1px;\n    padding: 7px;\n    background-color: #343a40;\n    margin-left: 4px;\n}\n\nbutton i{\n    padding-right:4px;\n}\n\nbutton:hover {\n    color: #fff;\n    background: rgb(43, 43, 43);\n}\n\nul,li, ul label {\n    color: rgba(255,255,255,0.5);\n}\n\nul label:hover, li:hover, .content:hover{\n    color: #fff;\n    background: rgb(43, 43, 43);\n}\n\n#index{\n    margin:-4px;\n}", ""]);



/***/ }),
/* 19 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(21);

var _Asset = __webpack_require__(23);

var _Asset2 = _interopRequireDefault(_Asset);

var _Reducer = __webpack_require__(26);

var _db = __webpack_require__(29);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Styles.

// Components.

// Events.

// Db utils.

var Assets = function (_Component) {
    _inherits(Assets, _Component);

    function Assets(props) {
        _classCallCheck(this, Assets);

        var _this = _possibleConstructorReturn(this, (Assets.__proto__ || Object.getPrototypeOf(Assets)).call(this, props));

        _this.state = {
            class: "drop_zone",
            imageURL: "",
            assets: []
        };
        _this.writeToDB = _db.writeToDB.bind(_this);
        return _this;
    }

    _createClass(Assets, [{
        key: "appendToBody",
        value: function appendToBody(file) {
            var bin = this.result;
            var newFile = document.createElement('div');
            newFile.innerHTML = 'Loaded : ' + file.name + ' size ' + file.size + ' B';
            document.body.appendChild(newFile);

            var img = document.createElement("img");
            img.file = file;
            img.src = bin;
            newFile.appendChild(img);
        }
    }, {
        key: "render",
        value: function render() {

            var assets = this.state.assets.map(function (item) {
                return _react2.default.createElement(_Asset2.default, { imageURL: item.result });
            });
            return _react2.default.createElement(
                "div",
                { className: "elements" },
                _react2.default.createElement(
                    "div",
                    { className: "container elements-tab" },
                    _react2.default.createElement(
                        "div",
                        { className: "title" },
                        "Assets"
                    ),
                    _react2.default.createElement(
                        "button",
                        { onClick: _db.fetchFromDB.bind(this) },
                        "Load Assets"
                    ),
                    _react2.default.createElement(
                        "div",
                        {
                            className: this.state.class,
                            onDrop: _Reducer.dropHandler.bind(this),
                            onDragOver: _Reducer.dragOverHandler.bind(this),
                            onDragLeave: _Reducer.dragLeaveHandler.bind(this) },
                        _react2.default.createElement(
                            "p",
                            null,
                            "Drag one or more files to this Drop Zone ..."
                        )
                    ),
                    _react2.default.createElement(
                        "ul",
                        { className: "contain" },
                        assets
                    )
                )
            );
        }
    }]);

    return Assets;
}(_react.Component);

exports.default = Assets;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(22);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(2)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".drop_zone {\n    border: 1px lightgray dashed;\n        width:  200px;\n    height: 100px;\n  }\n\n  .drag_over {\n    border: 2px lightgray dashed;\n        width:  200px;\n    height: 100px;\n  }\n\n  .tinyThumbnail,\n  .tinyThumbnail img{\n    width:200px;\n  }\n\n  .contain{\n    max-height: 400px;\n    overflow: scroll;\n  }\n  ", ""]);



/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Asset = function (_Component) {
    _inherits(Asset, _Component);

    function Asset(props) {
        _classCallCheck(this, Asset);

        var _this = _possibleConstructorReturn(this, (Asset.__proto__ || Object.getPrototypeOf(Asset)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(Asset, [{
        key: "render",
        value: function render() {

            // Remove this.props.index, instead use this element instance index. Removes duplicate code
            return _react2.default.createElement(
                "div",
                { className: "tinyThumbnail" },
                _react2.default.createElement("img", { src: this.props.imageURL })
            );
        }
    }]);

    return Asset;
}(_react.Component);

exports.default = Asset;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(25);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(2)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".selected, .green {\n    border: 1px solid green;\n    background: rgb(43, 43, 43);\n}\n\n.background {\n    background: rgb(64, 64, 64);\n    border-bottom: 1px solid #333333;\n}\n\n.component {\n    display:flex;\n    justify-content: space-between;\n}\n\n.component .componentName{\n    padding:7px;\n}\n\n.thumbnail {\n    width: 50px;\n}", ""]);



/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dropHandler = dropHandler;
exports.dragOverHandler = dragOverHandler;
exports.dragLeaveHandler = dragLeaveHandler;

var _indexeDB = __webpack_require__(27);

var _indexeDB2 = _interopRequireDefault(_indexeDB);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function dropHandler(ev) {
    var _this = this;

    ev.preventDefault();

    [].forEach.call(ev.dataTransfer.files, function (file) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function (event, b) {
            // 1. append to body
            // 2. write to db.
            this.appendToBody(file);
            this.writeToDB(event.target.result, file.name);
        }.bind(_this);
    });

    this.setState({
        class: "drop_zone"
    });
}

function dragOverHandler(ev) {
    console.log('File(s) in drop zone');

    this.setState({
        class: "drag_over"
    });

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
}

function dragLeaveHandler(e) {
    this.setState({
        class: "drop_zone"
    });
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _MindexedDB = __webpack_require__(28);

window.iDB = "";


window.onload = function () {
    window.iDB = new _MindexedDB.MindexedDB("uiEditor", { uiEditor: "name" });
    // iDB.put("uiEditor", {data:123})
    window.iDB.connect();
};

exports.default = iDB;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.MindexedDB = MindexedDB;
// taken from https://github.com/TomAnthony/Min.dexedDB/blob/master/mindexeddb.js
function MindexedDB(databaseName, objectStores) {
	this.idb = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
	this.db = databaseName;
	this.objStrs = Array.isArray(objectStores) ? objectStores : [objectStores];
	this.store = "uiEditor";

	this.connect = function (key) {
		var conn = this.idb.open(this.db, 1);
		conn.mdb = this;

		conn.onupgradeneeded = function () {
			var dbl = conn.result;
			this.mdb.objStrs.forEach(function (element) {
				var store = Object.entries(element);
				dbl.createObjectStore(store[0][0], { keyPath: store[0][1] });
			});
		};

		return new Promise(function (resolve, reject) {
			conn.onsuccess = function () {
				this.mdb.db = conn.result;
				resolve(this.mdb.db);
			};
			conn.onerror = function () {
				reject(conn.error);
			};
		});
	};

	this.cs = function (store) {
		if (this.db === undefined) throw "[Min.dexedDB] DB not open.";
		var tx = this.db.transaction(store, "readwrite");
		return tx.objectStore(store);
	};

	this.put = function (obj) {
		var os = this.cs(this.store);

		return new Promise(function (resolve, reject) {
			var response = os.put(obj);
			response.onsuccess = function () {
				resolve(response.result);
			};
			response.onerror = function () {
				reject(response.error);
			};
		});
	};

	this.get = function (key) {
		var os = this.cs(this.store);

		return new Promise(function (resolve, reject) {
			var response = os.get(key);
			response.onsuccess = function () {
				resolve(response.result);
			};
			response.onerror = function () {
				reject(response.error);
			};
		});
	};

	this.getAll = function () {
		var os = this.cs(this.store);

		return new Promise(function (resolve, reject) {
			var response = os.getAll();
			response.onsuccess = function () {
				resolve(response.result);
			};
			response.onerror = function () {
				reject(response.error);
			};
		});
	};

	this.close = function () {
		this.db.close();
	};
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.writeToDB = writeToDB;
exports.fetchFromDB = fetchFromDB;
function writeToDB(result, name) {
    var _this = this;

    window.iDB.get(name).then(function (data) {
        var img = document.createElement("img");
        img.href = data.result;
        _this.setState({
            imageURL: data.result
        });
    });
    window.iDB.put({ name: name, result: result });
}

function fetchFromDB() {
    var _this2 = this;

    window.iDB.getAll().then(function (data) {
        // save it to window
        window.assets = {};
        data.forEach(function (image) {
            window.assets[image.name] = image.result;
        });

        _this2.setState({
            assets: data
        });
    });
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(31);

var _Folders = __webpack_require__(33);

var _Folders2 = _interopRequireDefault(_Folders);

var _Events = __webpack_require__(53);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Styles.

// Components.

// Events.

var Components = function (_Component) {
    _inherits(Components, _Component);

    function Components(props) {
        _classCallCheck(this, Components);

        var _this = _possibleConstructorReturn(this, (Components.__proto__ || Object.getPrototypeOf(Components)).call(this, props));

        _this.state = {
            components: _this.props.components,
            folders: _this.props.folders
        };
        return _this;
    }

    _createClass(Components, [{
        key: "addFolder",
        value: function addFolder() {
            var folders = Array.from(this.state.folders);
            folders.unshift({
                type: "newFolder",
                name: "",
                contents: []
            });
            this.setState({ folders: folders });
        }
    }, {
        key: "addComponent",
        value: function addComponent() {
            this.props.onOpenEditor();
        }
    }, {
        key: "render",
        value: function render() {

            return _react2.default.createElement(
                "div",
                { className: "elements" },
                _react2.default.createElement(
                    "div",
                    { className: "container elements-tab" },
                    _react2.default.createElement(
                        "div",
                        { className: "title" },
                        "Components"
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "Controls" },
                        _react2.default.createElement(
                            "button",
                            { onClick: this.addComponent.bind(this) },
                            _react2.default.createElement("i", { className: "fa fa-edit" }),
                            "Edit Component"
                        ),
                        _react2.default.createElement(
                            "button",
                            { onClick: this.addFolder.bind(this) },
                            _react2.default.createElement("i", { className: "fa fa-folder" }),
                            "Add Folder"
                        )
                    ),
                    _react2.default.createElement(
                        "ul",
                        null,
                        _react2.default.createElement(_Folders2.default, {
                            key: Math.ceil(Math.random() * 1000),
                            components: this.state.components,
                            folders: this.state.folders,
                            selectedComponent: this.props.selectedComponent,
                            onFoldersUpdate: this.props.onFoldersUpdate,
                            onSelection: this.props.onSelection,
                            onDelete: _Events.onDelete.bind(this)
                        })
                    )
                )
            );
        }
    }]);

    return Components;
}(_react.Component);

exports.default = Components;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(32);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(2)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".override {\n    line-height: 0%;\n}\n\ntextarea {\n    height: 70px;\n    width: 450px;\n}\n\n.elements{\n    position: fixed;\n}\n\n.title{\n    margin-top: 15px;\n    margin-bottom: 11px;\n    color: rgba(255,255,255,0.5);\n    background: rgb(64, 64, 64);\n    margin-top: 10px;\n    padding: 5px;\n}\n\n.elements-tab {\n    left:10px;\n}\n\n.Controls{\n    padding-bottom:8px;\n}", ""]);



/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(34);

var _Folder = __webpack_require__(6);

var _Folder2 = _interopRequireDefault(_Folder);

var _processFolder = __webpack_require__(48);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Styles.

var Folders = function (_Component) {
    _inherits(Folders, _Component);

    function Folders(props) {
        _classCallCheck(this, Folders);

        var _this = _possibleConstructorReturn(this, (Folders.__proto__ || Object.getPrototypeOf(Folders)).call(this, props));

        _this.state = {
            components: _this.props.components,
            folders: _this.props.folders
        };
        return _this;
    }

    _createClass(Folders, [{
        key: "checkFolder",
        value: function checkFolder(data) {
            var folders = Array.from(this.state.folders);
            var folder = folders.find(function (folder) {
                return folder.name === data.name;
            });
            var emptyFolderIndex = folders.findIndex(function (folder) {
                return folder.type === "newFolder";
            });
            // Delete the newFolder
            folders.splice(emptyFolderIndex, 1);
            console.log(folders);
            // Check if it is newly created folder 
            if (!folder) {
                console.log("Folder not found, adding " + JSON.stringify(data) + "to list of folders " + JSON.stringify(folders));
                folders.push(data);
            }
            // Update existing one
            else {
                    console.log("Folder found, updating the folder content from " + folder.contents + " to " + data.contents);
                    folder.contents = data.contents;

                    // Makes sure that contents are not duplicated in other folders.
                    folders.forEach(function (currentFolder) {

                        if (currentFolder.name !== data.name) {
                            data.contents.forEach(function (content) {
                                var index = currentFolder.contents.findIndex(function (item) {
                                    return item === content;
                                });
                                index !== -1 ? currentFolder.contents.splice(index, 1) : null;
                            });
                        }
                    });
                }

            console.log(folders);

            this.props.onFoldersUpdate(folders);
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var featureEnabled = true;
            if (featureEnabled) {
                return (0, _processFolder.folderStructure)(this.props, this.checkFolder.bind(this));
            }

            return this.props.folders.map(function (folder) {
                return _react2.default.createElement(_Folder2.default, {
                    key: Math.ceil(Math.random() * 1000),
                    folder: folder,
                    selectedComponent: _this2.props.selectedComponent,
                    onSelection: _this2.props.onSelection,
                    onFolderUpdate: _this2.checkFolder.bind(_this2),
                    onDelete: _this2.props.onDelete });
            });
        }
    }]);

    return Folders;
}(_react.Component);

exports.default = Folders;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(35);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(2)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, "input.folder{\n    border:none;\n    background:none;\n}\n\n.newFolder{\n    user-select: none;\n}\n\n.newFolder i{\n    color: rgba(255,255,255,0.5);\n    border-color: rgba(0,0,0,0.9);\n    border-width: 1px;\n    padding: 7px;\n}\n\n.newFolder.dragOver i{\n    animation: blink .5s infinite;\n}\n\n@keyframes blink{\n    from {    \n        color: rgba(255,255,255,0.5);\n    }\n    to {\n        color: white;\n    }\n}\n.fa.fa-folder ~ ul {\n    display: none;\n}\n.fa.fa-folder-open ~ ul {\n    display:block;\n}\n\n.folderSelected .fa.fa-folder,\n.folderSelected .fa.fa-folder-open{\n    background: rgb(48,115,93)\n}", ""]);



/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(37);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(2)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, "input.folder{\n    border:none;\n    background:none;\n}\n\n.newFolder{\n    user-select: none;\n}\n\n.newFolder i{\n    color: rgba(255,255,255,0.5);\n    border-color: rgba(0,0,0,0.9);\n    border-width: 1px;\n    padding: 7px;\n}\n\n.newFolder.dragOver i{\n    animation: blink .5s infinite;\n}\n\n@keyframes blink{\n    from {    \n        color: rgba(255,255,255,0.5);\n    }\n    to {\n        color: white;\n    }\n}\n.fa.fa-folder ~ ul {\n    display: none;\n}\n.fa.fa-folder-open ~ ul {\n    display:block;\n}\n\n.folderSelected .fa.fa-folder,\n.folderSelected .fa.fa-folder-open{\n    background: rgb(48,115,93)\n}", ""]);



/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(39);

var _Events = __webpack_require__(41);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Styles.

var NoFolder = function (_Component) {
    _inherits(NoFolder, _Component);

    function NoFolder(props) {
        _classCallCheck(this, NoFolder);

        var _this = _possibleConstructorReturn(this, (NoFolder.__proto__ || Object.getPrototypeOf(NoFolder)).call(this, props));

        _this.state = {
            status: "fa fa-folder",
            folderClass: "noFolder"
        };
        return _this;
    }

    _createClass(NoFolder, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "ul",
                {
                    className: "noFolder",
                    onDrop: _Events.nodropHandler.bind(this),
                    onDragOver: _Events.nodragOverHandler.bind(this) },
                this.props.contents
            );
        }
    }]);

    return NoFolder;
}(_react.Component);

exports.default = NoFolder;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(40);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(2)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, "\n.noFolder{\n    border:1px solid turquoise;\n}", ""]);



/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.nodropHandler = nodropHandler;
exports.nodragOverHandler = nodragOverHandler;
function nodropHandler(ev) {
    ev.preventDefault();
    var componentName = ev.dataTransfer.getData("component-name");
    var contents = Array.from(this.state.contents);
    var index = contents.findIndex(function (content) {
        return content === componentName;
    });

    // Delete the item from thecontents.
    contents.slice(index, 1);

    this.props.onFolderUpdate({
        name: this.state.name,
        contents: contents,
        type: "noFolder"
    });
    console.log("ON DROP noFolder");
}

function nodragOverHandler(ev) {
    ev.preventDefault();
    this.setState({
        folderClass: "newFolder dragOver"
    });
    console.log("ON DRAG OVER noFolder");
}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(43);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Styles.

// Components.

var NewFolder = function (_Component) {
    _inherits(NewFolder, _Component);

    function NewFolder(props) {
        _classCallCheck(this, NewFolder);

        var _this = _possibleConstructorReturn(this, (NewFolder.__proto__ || Object.getPrototypeOf(NewFolder)).call(this, props));

        _this.state = {
            status: "fa fa-folder",
            newFolderClass: "newFolder",
            folderName: ""
        };
        return _this;
    }

    _createClass(NewFolder, [{
        key: "folderNameChanged",
        value: function folderNameChanged(e) {
            this.setState({
                folderName: e.currentTarget.value
            });
        }
    }, {
        key: "saveFolderNameOnEnter",
        value: function saveFolderNameOnEnter(e) {
            if (e.key === "Enter") {
                this.props.onNewFolder({
                    name: this.state.folderName,
                    contents: [],
                    type: "folder"
                });
            }
        }
    }, {
        key: "render",
        value: function render() {

            return _react2.default.createElement(
                "div",
                { className: this.state.newFolderClass },
                _react2.default.createElement("i", { className: this.state.status }),
                _react2.default.createElement("input", {
                    type: "text",
                    className: "folder",
                    autoFocus: true,
                    placeholder: "Enter folder name",
                    value: this.state.folderName,
                    onChange: this.folderNameChanged.bind(this),
                    onKeyPress: this.saveFolderNameOnEnter.bind(this) })
            );
        }
    }]);

    return NewFolder;
}(_react.Component);

exports.default = NewFolder;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(44);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(2)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, "input.folder{\n    border:none;\n    background:none;\n}\n\n.newFolder i{\n    color: rgba(255,255,255,0.5);\n    border-color: rgba(0,0,0,0.9);\n    border-width: 1px;\n    padding: 7px;\n}\n\n.newFolder.dragOver i{\n    animation: blink .5s infinite;\n}\n\n@keyframes blink{\n    from {    \n        color: rgba(255,255,255,0.5);\n    }\n    to {\n        color: green;\n    }\n}", ""]);



/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.deleteFolder = deleteFolder;
exports.toggleFolder = toggleFolder;
exports.selectFolder = selectFolder;
exports.deselectFolder = deselectFolder;
function deleteFolder(e) {
    if (e.key === "Backspace" && e.ctrlKey && this.state.folderClass.includes("folderSelected")) {
        this.props.onFolderDelete(this.state.folder);
    }
}

function openFolder() {
    this.setState({
        status: "fa fa-folder-open"
    });
}

function closeFolder() {
    this.setState({
        status: "fa fa-folder"
    });
}

function toggleFolder() {
    this.state.status === "fa fa-folder" ? openFolder.call(this) : closeFolder.call(this);
}

function selectFolder() {
    this.setState({
        folderClass: "newFolder folderSelected"
    });
}

function deselectFolder() {
    this.setState({
        folderClass: "newFolder"
    });
}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.readData = readData;
exports.writeData = writeData;
exports.readComponent = readComponent;
exports.writeComponent = writeComponent;
exports.popHistory = popHistory;

var _Sample = __webpack_require__(47);

function pushHistory(components) {

    window.editorHistory = readData("ui-editor-history");
    editorHistory.push(components);
    localStorage.setItem("ui-editor-history", JSON.stringify(editorHistory));
}

// If empty, return empty array.

function readData(key) {

    if (key === "ui-editor") {
        if (!window.components) {
            window.components = JSON.parse(localStorage.getItem(key)) || _Sample.sample;
        }
        return JSON.parse(JSON.stringify(window.components));
    }
    if (key === "ui-editor-history") {
        var history = localStorage.getItem(key);

        if (history) return JSON.parse(history);
    }
    if (key === "folders") {
        var folders = localStorage.getItem(key);
        return JSON.parse(folders);
    }

    return [];
}

function writeData(key, components, noPush) {

    if (key == "folders") {
        console.log("writing folders");
        localStorage.setItem(key, JSON.stringify(components));
    }
    if (key == "ui-editor") {
        console.log("WRITE");
        window.components = components;
        localStorage.setItem(key, JSON.stringify(components));
        if (!noPush) {
            pushHistory(components);
        }
    }
}

function readComponent(componentName) {

    var components = readData("ui-editor");
    if (!components) {
        return undefined;
    }
    return components.find(function (component) {
        return component.name === componentName;
    });
}

function writeComponent(parent) {

    if (!Array.isArray(parent) && parent.name) {
        var components = readData("ui-editor");
        var index = components.findIndex(function (comp) {
            return comp.name === parent.name;
        });
        components[index] = parent;
        writeData("ui-editor", components);
    }
}

function popHistory() {

    var editorHistory = readData("ui-editor-history");
    if (!editorHistory) {
        return;
    }

    var lastItem = editorHistory.pop();

    if (!editorHistory) {
        return;
    }

    writeData("ui-editor-history", editorHistory, true);

    writeData("ui-editor", lastItem, true);
}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var sample = [{
    "name": "ForgotPassword",
    "markup": "<div className=\"vsButton\"><button id=\"f123\">Forgot Password</button></div>",
    "events": [{
        "name": "onClick",
        "reducer": "state.show",
        "publishable": true,
        "publishName": "onPasswordForgotten",
        "id": "f123"
    }],
    "state": "{\"show\":\"false\"}",
    "style": ".vsButton{\nfont-family: BentonSansBook,Helvetica,Arial,sans-serif;\ncolor: rgb(0, 0, 0);\n}\n\n\n.vsButton button{\nborder-color: #bf215d;\n    color: #fff;\n    background: #ef5f96;\nborder: 1px solid;\n}\n\n.vsButton button:hover{\nborder-color: #bf215d;\n}",
    "children": [],
    "id": 218,
    "config": "{}",
    "idMarkup": "<div className=\"vsButton\" data-uuid=\"0\"><button id=\"f123\" data-uuid=\"1\">Forgot Password</button></div>"
}, {
    "name": "Modal",
    "markup": "<div class=\"modal\">\n<header>\n  <h3>Forgot Password</h3>\n    <button className=\"closeButton\" id=\"x\">x</button>\n</header>\n<section class=\"content\"><PrivacyAndPolicy></PrivacyAndPolicy>\n \n</section>\n<footer>footer</footer>\n</div>",
    "events": [{
        "name": "onClick",
        "reducer": "state.name=\"\";",
        "publishable": true,
        "publishName": "onCloseModal",
        "id": "x"
    }],
    "state": "{}",
    "style": ".modal{\n  width:400px;\n  font-size:22px;\n  position:relative;\nbackground-color: white;\ncolor: black;\n  font-family: BentonSansLight,Helvetica,Arial,sans-serif;\n  font-weight:400;\n    line-height: 17px;\n    letter-spacing: .04em;\n    text-transform: inherit;\n    font-weight: 400;\n\n}\n\n.modal h3{\n  padding:1rem;\nfont-size:26px;\nfont-weight: 400;\n}\n\n.modal .content{\npadding:1rem;\nfont-weight: 400;\n}\n\n.modal footer{\npadding:1rem;\n  border:1px solid black;\nfont-weight: 400;\n}\n.modal header{\n  border:1px solid black;\nfont-weight: 400;\n}\n\n.modal .closeButton{\n  position: absolute;\n  right: 10px;\n  top: 20px;\n}\n\n.modal .content{\n    border:1px solid black;\nfont-weight: 400;\n}",
    "children": [],
    "id": 191,
    "config": "{}",
    "idMarkup": "<div class=\"modal\" data-uuid=\"0\">\n<header data-uuid=\"1\">\n  <h3 data-uuid=\"2\">Forgot Password</h3>\n    <button className=\"closeButton\" id=\"x\" data-uuid=\"3\">x</button>\n</header>\n<section class=\"content\" data-uuid=\"4\"><PrivacyAndPolicy data-uuid=\"5\"></PrivacyAndPolicy>\n \n</section>\n<footer data-uuid=\"6\">footer</footer>\n</div>"
}, {
    "name": "CancelButton",
    "markup": "<div className=\"vsButton\"><button>{state.cancelButton}</button></div>",
    "events": [],
    "state": "{\"cancelButton\":\"Cancel\"}",
    "style": ".vsButton{\nfont-family: BentonSansBook,Helvetica,Arial,sans-serif;\ncolor: rgb(0, 0, 0);\n}\n\n\n.vsButton button{\nborder-color: #bf215d;\n    color: #fff;\n    background: #ef5f96;\nborder: 1px solid;\npadding: .5rem 2rem;\n}\n\n.vsButton button:hover{\nborder-color: #bf215d;\n}",
    "children": [],
    "id": 174,
    "config": "{}",
    "idMarkup": "<div className=\"vsButton\" data-uuid=\"0\"><button data-uuid=\"1\">{state.cancelButton}</button></div>"
}, {
    "name": "SubmitButton",
    "markup": "<div className=\"vsButton\"><button>{state.submitButton}</button></div>",
    "events": [],
    "state": "{\"submitButton\":\"Submit\"}",
    "style": ".vsButton{\nfont-family: BentonSansBook,Helvetica,Arial,sans-serif;\ncolor: rgb(0, 0, 0);\n}\n\n\n.vsButton button{\nborder-color: #bf215d;\n    color: #fff;\n    background: #ef5f96;\nborder: 1px solid;\npadding: .5rem 2rem;\n}\n\n.vsButton button:hover{\nborder-color: #bf215d;\n}",
    "children": [],
    "id": 134,
    "config": "{}",
    "idMarkup": "<div className=\"vsButton\" data-uuid=\"0\"><button data-uuid=\"1\">{state.submitButton}</button></div>"
}, {
    "name": "PrivacyAndPolicy",
    "markup": "<div class=\"privacyPolicy\">\n  Please enter the email address you used to create your account and we will send you a link to reset your password. See Privacy Policy\n</div>",
    "events": [],
    "state": "{}",
    "style": ".privacyPolicy{\nfont-family: BentonSansBook,Helvetica,Arial,sans-serif;\nfont-size: 11px;\n    line-height: 17px;\n    letter-spacing: .04em;\n    text-transform: inherit;\n    font-weight: 400;\n}",
    "children": [],
    "id": 843,
    "config": "{}",
    "idMarkup": "<div class=\"privacyPolicy\" data-uuid=\"0\">\n  Please enter the email address you used to create your account and we will send you a link to reset your password. See Privacy Policy\n</div>"
}, {
    "name": "TermsAndService",
    "markup": "<div class=\"privacyPolicy\">\n{state.variant}\n</div>",
    "events": [],
    "state": "{\"variant\":\"This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.\"}",
    "style": ".privacyPolicy{\nfont-family: BentonSansBook,Helvetica,Arial,sans-serif;\nfont-size: 11px;\n    line-height: 17px;\n    letter-spacing: .04em;\n    text-transform: inherit;\n    font-weight: 400;\n}",
    "children": [],
    "id": 796,
    "config": "{}",
    "idMarkup": "<div class=\"privacyPolicy\" data-uuid=\"0\">\n{state.variant}\n</div>"
}, {
    "name": "Form",
    "markup": "<form className=\"vsfrm\">\n</form>",
    "events": [],
    "state": "{}",
    "style": ".vsfrm{\nheight:400px;\nwidth:400px;\n}",
    "children": [],
    "id": 390,
    "config": "{}",
    "idMarkup": "<form className=\"vsfrm\" data-uuid=\"0\">\n</form>"
}, {
    "name": "EmailInput",
    "markup": "<span className=\"emailInput\">\n<input id=\"input\" className=\"email\" type=\"email\" value={state.email} placeholder=\"Email Address *\"/>\n</span>",
    "events": [{
        "name": "onChange",
        "reducer": "state.email = e.target.value",
        "publishable": "",
        "publishName": "",
        "id": "input"
    }],
    "state": "{}",
    "style": ".emailInput .email{\npadding: .75rem;\nborder: 1px solid #e1e1e1;\nfont-family: BentonSansBook,Helvetica,Arial,sans-serif;\n    font-size: 16px;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    width: 100%;\n    border-radius: 0;\n    -webkit-box-shadow: none;\n    box-shadow: none;\n\n}",
    "children": [],
    "id": 991,
    "config": "{}",
    "idMarkup": "<span className=\"emailInput\" data-uuid=\"0\">\n<input id=\"input\" className=\"email\" type=\"email\" value={state.email} placeholder=\"Email Address *\"/>\n</span>"
}, {
    "name": "ResetPasswordForm",
    "markup": "<form><TermsAndService></TermsAndService><EmailInput></EmailInput><SubmitButton></SubmitButton><CancelButton></CancelButton><TermsAndService><PrivacyAndPolicy></PrivacyAndPolicy></TermsAndService>\n</form>",
    "events": [],
    "state": "{\"variant\":\"text\"}",
    "style": "form{\nheight:400px;}",
    "children": [],
    "id": 364,
    "config": "{}",
    "idMarkup": "<form data-uuid=\"0\"><TermsAndService data-uuid=\"1\"></TermsAndService><EmailInput data-uuid=\"2\"></EmailInput><SubmitButton data-uuid=\"3\"></SubmitButton><CancelButton data-uuid=\"4\"></CancelButton><TermsAndService data-uuid=\"5\"><PrivacyAndPolicy data-uuid=\"6\"></PrivacyAndPolicy></TermsAndService>\n</form>"
}, {
    "name": "Page",
    "markup": "<div className=\"page\"><ForgotPassword></ForgotPassword><ResetPasswordModal></ResetPasswordModal></div>",
    "events": [{
        "name": "onCloseModal",
        "reducer": "state.showModal = false;",
        "publishable": "",
        "publishName": "",
        "id": "VariantModal"
    }, {
        "name": "onClose",
        "reducer": "state.showModal = false;",
        "publishable": "",
        "publishName": "",
        "id": "ResetPasswordModal"
    }, {
        "name": "onPasswordForgotten",
        "reducer": "state.showModal = true;",
        "publishable": "",
        "publishName": "",
        "id": "ForgotPassword"
    }, {
        "name": "onPasswordForgotten",
        "reducer": "state.showModal = true;",
        "publishable": "",
        "publishName": "",
        "id": "VariantForgotPassword"
    }],
    "state": "{\"showModal\":false,\"list\":[1,2,3,4,5]}",
    "style": ".page{\nheight: 700px;\nwidth: 500px;\n\n}",
    "children": [],
    "id": 815,
    "config": "{\"VariantModal\":{\"showHideProp\":\"showModal\",\"override\":false},\"ForgotPasswordButton\":{\"showHideProp\":\"\",\"override\":false},\"ForgotPassword\":{\"showHideProp\":\"\",\"override\":false,\"renderListProp\":\"\"},\"ResetPasswordModal\":{\"showHideProp\":\"showModal\",\"override\":false,\"renderListProp\":\"\"}}",
    "idMarkup": "<div className=\"page\" data-uuid=\"0\"><ForgotPassword data-uuid=\"1\"></ForgotPassword><ResetPasswordModal data-uuid=\"2\"></ResetPasswordModal></div>",
    "variants": [{
        "showModal": "false"
    }, {
        "showModal": "false",
        "ForgotPassword": {
            "show": "false"
        }
    }, {
        "showModal": true
    }, {
        "showModal": "true",
        "ForgotPassword": {
            "show": "false"
        }
    }, {
        "showModal": false
    }, {
        "showModal": false,
        "ForgotPassword": {
            "show": "false"
        }
    }, {
        "showModal": false,
        "VariantModal": {
            "title": "Forgot Password",
            "footer": "Copyrigts",
            "good": "hide"
        }
    }, {
        "showModal": false,
        "ResetPasswordModal": {
            "title": "Forgot Password",
            "footer": "Copyrigts",
            "show": "sd"
        }
    }, {
        "showModal": false,
        "VariantForgotPassword": {
            "show": "false",
            "variant": "text"
        }
    }, {
        "showModal": false,
        "list": [1, 2, 3, 4, 5],
        "ForgotPassword": {
            "show": "false"
        }
    }, {
        "showModal": true,
        "list": [1, 2, 3, 4, 5]
    }, {
        "showModal": false,
        "list": [1, 2, 3, 4, 5],
        "ResetPasswordModal": {
            "title": "Forgot Password",
            "footer": "Copyrigts",
            "show": "sd"
        }
    }, {
        "showModal": false,
        "list": [1, 2, 3, 4, 5]
    }]
}, {
    "name": "ResetPasswordModal",
    "markup": "<div class=\"modal\">\n<header>\n  <h3>{state.title}</h3>\n    <button id=\"close\" className=\"closeButton\">x</button>\n</header>\n<section class=\"content\"><ResetPasswordForm></ResetPasswordForm>\n</section>\n<footer>{state.footer}</footer>\n</div>",
    "events": [{
        "name": "onClick",
        "reducer": "state.show = \"sd\";",
        "publishable": true,
        "publishName": "onClose",
        "id": "close"
    }],
    "state": "{\"title\":\"Forgot Password\",\"footer\":\"Copyrigts\"}",
    "style": ".modal{\n  width:400px;\n  font-size:22px;\n  position:relative;\nbackground-color: white;\ncolor: black;\n  font-family: BentonSansLight,Helvetica,Arial,sans-serif;\n  font-weight:400;\n    line-height: 17px;\n    letter-spacing: .04em;\n    text-transform: inherit;\n    font-weight: 400;\n\n}\n\n.modal h3{\n  padding:1rem;\nfont-size:26px;\nfont-weight: 400;\n}\n\n.modal .content{\npadding:1rem;\nfont-weight: 400;\n}\n\n.modal footer{\npadding:1rem;\n  border:1px solid black;\nfont-weight: 400;\n}\n.modal header{\n  border:1px solid black;\nfont-weight: 400;\n}\n\n.modal .closeButton{\n  position: absolute;\n  right: 10px;\n  top: 20px;\n}\n\n.modal .content{\n    border:1px solid black;\nfont-weight: 400;\n}",
    "children": [],
    "id": 627,
    "config": "{}",
    "idMarkup": "<div class=\"modal\" data-uuid=\"0\">\n<header data-uuid=\"1\">\n  <h3 data-uuid=\"2\">{state.title}</h3>\n    <button id=\"close\" className=\"closeButton\" data-uuid=\"3\">x</button>\n</header>\n<section class=\"content\" data-uuid=\"4\"><ResetPasswordForm data-uuid=\"5\"></ResetPasswordForm>\n</section>\n<footer data-uuid=\"6\">{state.footer}</footer>\n</div>"
}, {
    "name": "Facebook",
    "markup": "<div className=\"facebook\"><HelloComponent><Modal><ForgotPassword></ForgotPassword></Modal></HelloComponent></div>",
    "events": [],
    "state": "{}",
    "style": ".facebook{\nbackground-image:$assets['facebook.png'];\n}",
    "children": [],
    "id": 12,
    "config": "{}",
    "idMarkup": "<div className=\"facebook\" data-uuid=\"0\"><HelloComponent data-uuid=\"1\"><Modal data-uuid=\"2\"><ForgotPassword data-uuid=\"3\"></ForgotPassword></Modal></HelloComponent></div>"
}];

module.exports = {
    sample: sample
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.folderStructure = folderStructure;

var _Folder = __webpack_require__(6);

var _Folder2 = _interopRequireDefault(_Folder);

var _Componentt = __webpack_require__(49);

var _Componentt2 = _interopRequireDefault(_Componentt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var selectedComponent = void 0,
    onSelection = void 0,
    onFolderUpdate = void 0,
    onDelete = void 0,
    components = void 0;

function initialiseProps(props, checkFolder) {
    selectedComponent = props.selectedComponent;
    onSelection = props.onSelection;
    components = props.components;
    onFolderUpdate = checkFolder;
    onDelete = props.onDelete;
}

function processFolder(folder, i) {
    var contents = folder.contents;

    return React.createElement(_Folder2.default, {
        key: i,
        folder: folder,
        contents: contents.map(processContent),
        selectedComponent: selectedComponent,
        onSelection: onSelection,
        onFolderUpdate: onFolderUpdate,
        onDelete: onDelete });
}

function processContent(content, i) {

    // Check if content is a component name.
    if (typeof content === "string") {

        return React.createElement(_Componentt2.default, {
            component: components.find(function (component) {
                return component.name === content;
            }),
            selectedComponent: selectedComponent,
            onSelectionChange: onSelection,
            onDelete: onDelete
        });
    }
    // else its a folder type.
    else {
            var folder = content;
            return React.createElement(_Folder2.default, {
                folder: folder,
                contents: folder.contents.map(processContent),
                selectedComponent: selectedComponent,
                onSelection: onSelection,
                onFolderUpdate: onFolderUpdate,
                onDelete: onDelete });
        }
}

function folderStructure(props, checkFolder) {
    var folders = props.folders;

    initialiseProps(props, checkFolder);

    return folders.map(processFolder);
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Events = __webpack_require__(50);

var _Events2 = __webpack_require__(7);

__webpack_require__(51);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Componentt = function (_Component) {
    _inherits(Componentt, _Component);

    function Componentt(props) {
        _classCallCheck(this, Componentt);

        var _this = _possibleConstructorReturn(this, (Componentt.__proto__ || Object.getPrototypeOf(Componentt)).call(this, props));

        _this.state = {
            selectedComponent: _this.props.selectedComponent
        };
        return _this;
    }

    _createClass(Componentt, [{
        key: "restoreClass",
        value: function restoreClass(event) {
            event.target.classList.remove("hideAdditionals");
        }
    }, {
        key: "render",
        value: function render() {

            var props = this.props;
            // Remove this.props.index, instead use this element instance index. Removes duplicate code
            return _react2.default.createElement(
                "div",
                { className: "background", draggable: "true", id: props.component.name, "data-name": props.component.name, onDragStart: _Events.handleDrag.bind(this), onDragEnd: this.restoreClass },
                _react2.default.createElement(
                    "li",
                    {
                        className: props.component.name === props.selectedComponent.name ? "selected component" : "component",
                        onClick: _Events.selectionChanged.bind(this),
                        index: props.index },
                    _react2.default.createElement(
                        "span",
                        { className: "componentName" },
                        props.component.name
                    ),
                    _react2.default.createElement(
                        "span",
                        null,
                        _react2.default.createElement(
                            "button",
                            {
                                index: props.index,
                                onClick: _Events2.onExport.bind(null, props.component.name) },
                            _react2.default.createElement("i", { className: "fas fa-file-export" }),
                            "Export"
                        ),
                        _react2.default.createElement(
                            "button",
                            {
                                index: props.index,
                                onClick: props.onDelete },
                            _react2.default.createElement("i", { className: "fa fa-trash" }),
                            "Delete"
                        )
                    )
                )
            );
        }
    }]);

    return Componentt;
}(_react.Component);

exports.default = Componentt;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.selectionChanged = selectionChanged;
exports.handleDrag = handleDrag;
function selectionChanged(e) {
    this.props.onSelectionChange(e);
}

function handleDrag(e) {

    var name = event.target.getAttribute("data-name");
    event.target.classList.add("hideAdditionals");
    e.dataTransfer.setData("component-name", name);
}

window.eventCallbacks = {
    handleDrag: handleDrag
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(52);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(2)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".selected, .green {\n    border: 1px solid green;\n    background: rgb(43, 43, 43);\n}\n\n.background {\n    background: rgb(64, 64, 64);\n    border-bottom: 1px solid #333333;\n}\n\n.component {\n    display:flex;\n    justify-content: space-between;\n}\n\n.component .componentName{\n    padding:7px;\n}\n\n.thumbnail {\n    width: 50px;\n}\n\n.hideAdditionals span:not(.componentName){\n    display:none;\n}\n\n.hideAdditionals {\n    display: inline-block;\n}", ""]);



/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.onDelete = onDelete;

var _Storage = __webpack_require__(3);

function onDelete(event) {
    var componentName = event.target.parentElement.parentElement.innerText.split("\n")[0];

    if (this.state.components.find(function (component) {
        return component.name === componentName;
    }).length < 1) {
        return;
    }
    // Get all the elements
    var components = Array.from(this.state.components);

    // Find the index of element to be deleted.
    var index = components.findIndex(function (component) {
        return component.name === componentName;
    });

    // Remove the element from the list
    components.splice(index, 1);

    // Update the state with new elements.
    this.setState({
        components: components
    });

    // Persist the changes.
    (0, _Storage.writeData)("ui-editor", components);
}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(55);

var _config = __webpack_require__(57);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libraries.

var DraggableComponent = function (_Component) {
    _inherits(DraggableComponent, _Component);

    function DraggableComponent(props) {
        _classCallCheck(this, DraggableComponent);

        var _this = _possibleConstructorReturn(this, (DraggableComponent.__proto__ || Object.getPrototypeOf(DraggableComponent)).call(this, props));

        var panelName = "ui-editor-settings-draggable-component-" + _this.props.children.props.title;
        _this.state = JSON.parse(localStorage.getItem(panelName)) || _config2.default[panelName];
        _this.state.draggable = "false";
        return _this;
    }

    _createClass(DraggableComponent, [{
        key: "moveDiv",
        value: function moveDiv(e) {
            var _this2 = this;

            if (e.target.id === "move") {
                var state = JSON.parse(JSON.stringify(this.state));
                state.style.top = e.pageY + "px";
                state.style.left = e.pageX + "px";
                this.setState({
                    style: state.style
                }, function () {
                    localStorage.setItem("ui-editor-settings-draggable-component-" + _this2.props.children.props.title, JSON.stringify(_this2.state));
                });
            }
        }
    }, {
        key: "toggleMinimiseMaximise",
        value: function toggleMinimiseMaximise(e) {
            var _this3 = this;

            this.setState({
                minimised: !this.state.minimised
            }, function () {
                localStorage.setItem("ui-editor-settings-draggable-component-" + _this3.props.children.props.title, JSON.stringify(_this3.state));
            });
        }
    }, {
        key: "onMouseEnter",
        value: function onMouseEnter() {
            this.setState({
                draggable: "true"
            });
        }
    }, {
        key: "onMouseLeave",
        value: function onMouseLeave() {
            this.setState({
                draggable: "false"
            });
        }
    }, {
        key: "render",
        value: function render() {

            return _react2.default.createElement(
                "div",
                { draggable: this.state.draggable, id: "move", onDragEnd: this.moveDiv.bind(this), style: this.state.style },
                _react2.default.createElement(
                    "span",
                    { title: "Move", className: "move-handle", onMouseDown: this.onMouseEnter.bind(this), onMouseUp: this.onMouseLeave.bind(this) },
                    _react2.default.createElement("i", { className: "fa fa-arrows-alt fa-xs" })
                ),
                this.state.minimised ? _react2.default.createElement(
                    "span",
                    { title: "Minimise", className: "maximise-handle", onClick: this.toggleMinimiseMaximise.bind(this) },
                    _react2.default.createElement("i", { className: "fas fa-window-maximize fa-xs" })
                ) : _react2.default.createElement(
                    "span",
                    { title: "Minimise", className: "minimise-handle", onClick: this.toggleMinimiseMaximise.bind(this) },
                    _react2.default.createElement("i", { className: "fas fa-window-minimize fa-xs" })
                ),
                this.state.minimised ? _react2.default.createElement(
                    "div",
                    { className: "container editor-tab" },
                    _react2.default.createElement(
                        "div",
                        { className: "title" },
                        this.props.children.type.name
                    )
                ) : this.props.children
            );
        }
    }]);

    return DraggableComponent;
}(_react.Component);

exports.default = DraggableComponent;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(56);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(2)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, "#move > span{  \n    border: 1px solid black;\n    color: black;\n}\n\n#move .move-handle{\n    cursor: move;\n}\n\n#move .move-handle,\n#move .minimise-handle,\n#move .maximise-handle {\n    padding-left: 2px;\n    padding-right: 2px;\n}", ""]);



/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    "ui-editor-settings-draggable-component-TagExplorer": {
        "style": {
            "position": "fixed",
            "top": "602px",
            "left": "954px"
        },
        "minimised": false,
        "draggable": "true"
    },
    "ui-editor-settings-draggable-component-StyleExplorer": {
        "style": {
            "position": "fixed",
            "top": "587px",
            "left": "577px"
        },
        "minimised": false,
        "draggable": "true"
    },
    "ui-editor-settings-draggable-component-Events": {
        "style": {
            "position": "fixed",
            "top": "352px",
            "left": "1031px"
        },
        "minimised": false,
        "draggable": "true"
    },
    "ui-editor-settings-draggable-component-Editor": {
        "style": {
            "position": "fixed",
            "top": "46px",
            "left": "362px"
        },
        "minimised": false,
        "draggable": "true"
    },
    "ui-editor-settings-draggable-component-Components": {
        "style": {
            "position": "fixed",
            "top": "50px",
            "left": "21px"
        },
        "minimised": false,
        "draggable": "true"
    },
    "ui-editor-settings-draggable-component-Preview": {
        "style": {
            "position": "fixed",
            "top": "614px",
            "left": "327px"
        },
        "minimised": false,
        "draggable": "true"
    },
    "ui-editor-settings-draggable-component-Assets": {
        "style": {
            "position": "fixed",
            "top": "106px",
            "left": "1504px"
        },
        "minimised": false,
        "draggable": "true"
    },
    "ui-editor-settings-draggable-component-History": {
        "style": {
            "position": "fixed",
            "top": "595px",
            "left": "867px"
        },
        "minimised": false,
        "draggable": "true"
    }
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(59);

var _Reducer = __webpack_require__(61);

var _Storage = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// Libraries.

/**
 * Shows Configurator on select of valid child component name in the markup and mouseOut from markup
 * Hides Configurator on mouseLeave from the editor.
 */
var Editor = function (_Component) {
    _inherits(Editor, _Component);

    function Editor(props) {
        _classCallCheck(this, Editor);

        var _this = _possibleConstructorReturn(this, (Editor.__proto__ || Object.getPrototypeOf(Editor)).call(this, props));

        var component = (0, _Storage.readComponent)(_this.props.name);

        _this.state = {
            name: component ? component.name : "",
            markup: component ? component.markup : "",
            state: component ? component.state : "",
            style: component ? component.style : ""
        };

        return _this;
    }

    _createClass(Editor, [{
        key: "saveElement",
        value: function saveElement() {
            this.props.onSave({
                name: this.state.name,
                markup: this.state.markup,
                style: this.state.style,
                state: this.state.state
            });
        }
    }, {
        key: "render",
        value: function render() {

            var name = this.state.name;
            var markup = this.state.markup;
            var style = this.state.style;
            var state = this.state.state;
            // TODO: Should pass the current data. Instead of accessing it from global
            return _react2.default.createElement(
                "div",
                { className: "container editor-tab" },
                _react2.default.createElement(
                    "div",
                    { className: "title" },
                    "Editor"
                ),
                _react2.default.createElement(
                    "div",
                    { className: "" },
                    _react2.default.createElement(
                        "div",
                        { className: "title" },
                        "Component Name"
                    ),
                    _react2.default.createElement("input", { type: "text", placeholder: "Enter element name", value: name, onChange: _Reducer.updateName.bind(this), id: "elementName" }),
                    _react2.default.createElement(
                        "button",
                        { onClick: this.saveElement.bind(this), id: "save" },
                        _react2.default.createElement("i", { className: "fas fa-save" }),
                        "Save"
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "" },
                    _react2.default.createElement(
                        "div",
                        { className: "title" },
                        "Component Markup"
                    ),
                    _react2.default.createElement("textarea", { value: markup, onChange: _Reducer.updateMarkup.bind(this), id: "elementMarkup", title: "ID is mandatory for events" })
                ),
                _react2.default.createElement(
                    "div",
                    { className: "" },
                    _react2.default.createElement(
                        "div",
                        { className: "title" },
                        "Component CSS"
                    ),
                    _react2.default.createElement("textarea", { value: style, onChange: _Reducer.updateStyle.bind(this) })
                ),
                _react2.default.createElement(
                    "div",
                    { className: "" },
                    _react2.default.createElement(
                        "div",
                        { className: "title" },
                        "Component State"
                    ),
                    _react2.default.createElement("textarea", { value: state, onChange: _Reducer.updateState.bind(this), id: "elementState" })
                )
            );
        }
    }]);

    return Editor;
}(_react.Component);

exports.default = Editor;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(60);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(2)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".hidden{\n    display: none;\n}", ""]);



/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.updateName = updateName;
exports.updateMarkup = updateMarkup;
exports.updateStyle = updateStyle;
exports.updateState = updateState;
exports.getPropertyContainingProps = getPropertyContainingProps;
// Public.

function updateName(event) {
    this.setState({
        name: event.currentTarget.value
    });
}

function updateMarkup(event) {
    this.setState({
        markup: event.currentTarget.value
    });
}

function updateStyle(event) {
    this.setState({
        style: event.currentTarget.value
    });
}

function updateState(event) {
    this.setState({
        state: event.currentTarget.value
    });
}

function getPropertyContainingProps(obj) {
    // Fetch list of props from child.
    var props = [];
    var state = void 0;
    try {
        state = JSON.parse(obj.state);
    } catch (e) {
        console.error("Error: Child state is an invalid json, try an online validator on below string");
        console.log(child.state);
    }
    for (var property in state) {
        if (state[property].includes("prop")) {
            props.push(property);
        }
    }
    return props;
}

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Configurator = __webpack_require__(63);

var _Configurator2 = _interopRequireDefault(_Configurator);

var _Nodes = __webpack_require__(66);

var _Nodes2 = _interopRequireDefault(_Nodes);

var _Event = __webpack_require__(67);

var _Event2 = _interopRequireDefault(_Event);

var _Messages = __webpack_require__(78);

var _Messages2 = _interopRequireDefault(_Messages);

__webpack_require__(79);

var _Reducer = __webpack_require__(81);

var _getNodeTree = __webpack_require__(82);

var _Storage = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libraries.

// Dependencies.


// Components. 

// Styles.

// Reducers.

// Utils.

var Events = function (_Component) {
    _inherits(Events, _Component);

    function Events(props) {
        _classCallCheck(this, Events);

        var _this = _possibleConstructorReturn(this, (Events.__proto__ || Object.getPrototypeOf(Events)).call(this, props));

        _this.state = Object.assign({}, _this.props);
        _this.state.selectedTag = _this.props.selectedTag;
        return _this;
    }

    _createClass(Events, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var component = this.props.component;

            // Report if no component is created.
            if (this.state.components.length == 0) {
                return _react2.default.createElement(
                    "div",
                    { className: "container events-tab" },
                    _react2.default.createElement(
                        "div",
                        { className: "title" },
                        "Events"
                    ),
                    _react2.default.createElement(
                        "p",
                        null,
                        "Looks like you do not have any Web component created. Type some \"html\" on the right \"Editor\" tab"
                    )
                );
            }

            // Report if no component is selected.
            if (component.name === undefined && this.state.components.length != 0) {
                return _react2.default.createElement(
                    "div",
                    { className: "container events-tab" },
                    _react2.default.createElement(
                        "div",
                        { className: "title" },
                        "Events"
                    ),
                    _react2.default.createElement(
                        "p",
                        null,
                        "Looks like you have not selected any component. Click on any of the component in the left pane."
                    )
                );
            }

            var nodeTree = (0, _getNodeTree.getNodeTree)(component, component.markup, component.style, JSON.parse(component.state), component.events);

            // Report error.
            if (nodeTree.error !== undefined) {
                return (0, _Messages2.default)(nodeTree.error);
            }

            // Report error if component is not 
            if (nodeTree.result === undefined && this.state.components.length != 0) {
                return _react2.default.createElement(
                    "div",
                    { className: "container events-tab" },
                    _react2.default.createElement(
                        "div",
                        { className: "title" },
                        "Events"
                    )
                );
            }

            var selectedTag = this.state.selectedTag || "";
            var eventsOfSelectedTag = void 0,
                configurator = void 0,
                eventNames = [];
            // Check if it is a child component
            if (selectedTag.includes("child-component-")) {
                // Get list of components.
                var components = (0, _Storage.readData)("ui-editor");

                // Get child component name from the selected tag.
                var childComponentName = selectedTag.split("child-component-")[1];

                // Find the child component from the list of components.
                var childComponent = components.find(function (component) {
                    return component.name === childComponentName;
                });

                // Find events that are publishable from the child component.
                eventNames = childComponent.events.filter(function (event) {
                    return event.publishable === true;
                }).map(function (publishableEvent) {
                    return publishableEvent.publishName;
                });

                // Create event view for list of all events
                var events = component.events.filter(function (event) {
                    return eventNames.find(function (eventName) {
                        return eventName === event.name && event.id === childComponent.name;
                    });
                });
                events = events.map(function (event, index) {
                    return _react2.default.createElement(_Event2.default, {
                        key: Math.ceil(Math.random() * 1000),
                        index: index, event: event,
                        selectedTagID: selectedTag,
                        eventNames: eventNames,
                        onSave: _Reducer.updateEvent.bind(_this2),
                        deleteEvent: _Reducer.deleteEvent.bind(_this2) });
                });

                // Filter out events that are not part of selectedTag
                eventsOfSelectedTag = selectedTag ? events : null;

                configurator = _react2.default.createElement(_Configurator2.default, {
                    key: Math.ceil(Math.random() * 1000),
                    onChange: _Reducer.updateConfiguration.bind(this),
                    childName: childComponentName,
                    parent: component });
            } else {
                var _events = component.events.map(function (event, index) {
                    return _react2.default.createElement(_Event2.default, {
                        key: Math.ceil(Math.random() * 1000),
                        index: index,
                        event: event,
                        selectedTagID: selectedTag,
                        eventNames: eventNames,
                        onSave: _Reducer.updateEvent.bind(_this2),
                        deleteEvent: _Reducer.deleteEvent.bind(_this2) });
                });
                eventsOfSelectedTag = selectedTag ? _events.filter(function (event) {
                    return selectedTag.includes(event.props.event.id);
                }) : null;
            }

            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "div",
                    { className: "container events-tab" },
                    _react2.default.createElement(
                        "div",
                        { className: "title" },
                        "Events"
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "tags" },
                        _react2.default.createElement(_Nodes2.default, { node: nodeTree.result, onSelectedTagChanged: _Reducer.selectedTagChanged.bind(this) })
                    ),
                    configurator,
                    _react2.default.createElement(
                        "div",
                        { className: "title" },
                        "Events"
                    ),
                    _react2.default.createElement(
                        "div",
                        null,
                        _react2.default.createElement(
                            "ul",
                            null,
                            _react2.default.createElement(
                                "li",
                                null,
                                _react2.default.createElement(
                                    "div",
                                    { className: "title" },
                                    "Existing Events",
                                    _react2.default.createElement(
                                        "div",
                                        null,
                                        eventsOfSelectedTag
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                "li",
                                null,
                                _react2.default.createElement(
                                    "div",
                                    { className: "title" },
                                    "New Event",
                                    _react2.default.createElement(
                                        "div",
                                        null,
                                        _react2.default.createElement(_Event2.default, {
                                            key: component.events.length,
                                            eventNames: eventNames,
                                            selectedTagID: selectedTag,
                                            onSave: _Reducer.updateEvent.bind(this) })
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Events;
}(_react.Component);

exports.default = Events;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(64);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libraries.

var Configurator = function (_Component) {
    _inherits(Configurator, _Component);

    function Configurator(props) {
        _classCallCheck(this, Configurator);

        var _this = _possibleConstructorReturn(this, (Configurator.__proto__ || Object.getPrototypeOf(Configurator)).call(this, props));

        var config = JSON.parse(_this.props.parent.config)[_this.props.childName] || { override: false, showHideProp: "" };

        _this.state = {
            override: config.override,
            showHideProp: config.showHideProp,
            renderListProp: config.renderListProp || ""
        };
        return _this;
    }

    _createClass(Configurator, [{
        key: "toggelOverride",
        value: function toggelOverride() {
            this.setState({
                override: !this.state.override
            });

            this.props.onChange({
                config: {
                    showHideProp: this.state.showHideProp,
                    override: !this.state.override
                },
                childName: this.props.childName,
                parentName: this.props.parent.name
            });
        }
    }, {
        key: "showHideProp",
        value: function showHideProp(e) {
            this.setState({
                showHideProp: e.target.value
            });
        }
    }, {
        key: "renderListProp",
        value: function renderListProp(e) {
            this.setState({
                renderListProp: e.target.value
            });
        }
    }, {
        key: "saveConfig",
        value: function saveConfig() {
            this.props.onChange({
                config: {
                    showHideProp: this.state.showHideProp,
                    override: this.state.override,
                    renderListProp: this.state.renderListProp
                },
                childName: this.props.childName,
                parentName: this.props.parent.name
            });
        }
    }, {
        key: "render",
        value: function render() {

            var state = JSON.parse(this.props.parent.state);
            var stateProps = Object.keys(state);

            var booleanProps = stateProps.filter(function (prop) {
                return typeof state[prop] === "boolean";
            }).map(function (prop, i) {
                return _react2.default.createElement("option", { key: i, value: prop });
            });
            var listProps = stateProps.filter(function (prop) {
                return Array.isArray(state[prop]);
            }).map(function (prop, i) {
                return _react2.default.createElement("option", { key: i, value: prop });
            });

            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "div",
                    { className: "title" },
                    "Child Configurations"
                ),
                _react2.default.createElement(
                    "ul",
                    null,
                    _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                            "label",
                            null,
                            "Override state"
                        ),
                        _react2.default.createElement("input", { type: "checkbox", onChange: this.toggelOverride.bind(this), checked: this.state.override ? "checked" : "" })
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                            "label",
                            null,
                            "Choose Show/Hide - State property"
                        ),
                        _react2.default.createElement("input", { list: "booleanProps", type: "text", onChange: this.showHideProp.bind(this), value: this.state.showHideProp }),
                        _react2.default.createElement(
                            "button",
                            { onClick: this.saveConfig.bind(this) },
                            _react2.default.createElement("i", { className: "fas fa-save" })
                        ),
                        _react2.default.createElement(
                            "datalist",
                            { id: "booleanProps" },
                            booleanProps
                        )
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                            "label",
                            { title: "Description: The array item should reflect initial state of the component for it to render as expected." },
                            "Choose Array list - State property"
                        ),
                        _react2.default.createElement("input", { list: "listProps", type: "text", onChange: this.renderListProp.bind(this), value: this.state.renderListProp }),
                        _react2.default.createElement(
                            "button",
                            { onClick: this.saveConfig.bind(this) },
                            _react2.default.createElement("i", { className: "fas fa-save" })
                        ),
                        _react2.default.createElement(
                            "datalist",
                            { id: "listProps" },
                            listProps
                        )
                    )
                )
            );
        }
    }]);

    return Configurator;
}(_react.Component);

exports.default = Configurator;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(65);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(2)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".console{\n    position: fixed;\n    right: 150px;\n}\n\n.error {\n    color: red;\n}\n\n.event { \n    padding-left: 10px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    border-top: 1px solid #333333;\n    background: rgb(64, 64, 64);\n}\n\n.info {\n    color: yellowgreen;\n}\n\nlabel {\n    padding-right: 10px;\n}\n\n.configurator {\n    background: rgb(64, 64, 64);\n    margin-top: 10px;\n    padding: 5px;\n}", ""]);



/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libraries.

var Nodes = function (_Component) {
    _inherits(Nodes, _Component);

    function Nodes(props) {
        _classCallCheck(this, Nodes);

        return _possibleConstructorReturn(this, (Nodes.__proto__ || Object.getPrototypeOf(Nodes)).call(this, props));
    }

    _createClass(Nodes, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var node = this.props.node;

            if (!node) {
                return _react2.default.createElement(
                    "span",
                    null,
                    "null"
                );
            }
            if (typeof node === "string") {
                return _react2.default.createElement(
                    "li",
                    null,
                    node
                );
            }
            var id = node.props.id ? "-" + node.props.id : "";

            // Check if it contains children.
            if (node.props && Array.isArray(node.props.children)) {
                var children = node.props.children.map(function (child, index) {
                    return _react2.default.createElement(Nodes, { key: index, node: child, onSelectedTagChanged: _this2.props.onSelectedTagChanged });
                });
                return _react2.default.createElement(
                    "ul",
                    null,
                    _react2.default.createElement(
                        "label",
                        null,
                        _react2.default.createElement("input", {
                            type: "radio",
                            name: "selectedElement",
                            onChange: this.props.onSelectedTagChanged,
                            value: node.type + id }),
                        node.type + id
                    ),
                    children
                );
            }
            // if node contains only one children, jsx get transpiled to object rather than array.
            else if (_typeof(node.props.children) === "object") {
                    var child = node.props.children;
                    return _react2.default.createElement(
                        "ul",
                        null,
                        _react2.default.createElement(
                            "label",
                            null,
                            _react2.default.createElement("input", {
                                type: "radio",
                                name: "selectedElement",
                                onChange: this.props.onSelectedTagChanged,
                                value: (node.type.name || node.type) + id }),
                            node.type.name || node.type
                        ),
                        _react2.default.createElement(Nodes, { key: index, node: child, onSelectedTagChanged: this.props.onSelectedTagChanged })
                    );
                }
                // nested component.
                else if (typeof node.type === "function") {
                        return _react2.default.createElement(
                            "ul",
                            null,
                            _react2.default.createElement(
                                "label",
                                null,
                                _react2.default.createElement("input", {
                                    type: "radio",
                                    name: "selectedElement",
                                    value: "child-component-" + node.type.name,
                                    onChange: this.props.onSelectedTagChanged
                                }),
                                node.type.name
                            )
                        );
                    }
            return _react2.default.createElement(
                "ul",
                null,
                _react2.default.createElement(
                    "label",
                    null,
                    _react2.default.createElement("input", {
                        type: "radio",
                        name: "selectedElement",
                        value: node.type + id,
                        onChange: this.props.onSelectedTagChanged
                    }),
                    node.type + id
                )
            );
        }
    }]);

    return Nodes;
}(_react.Component);

exports.default = Nodes;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(68);

var _Messages = __webpack_require__(70);

var _Messages2 = _interopRequireDefault(_Messages);

var _Reducer = __webpack_require__(76);

var _Events = __webpack_require__(77);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libraries.

// Components.

// Reducers. 

// Events.

var Event = function (_Component) {
    _inherits(Event, _Component);

    function Event(props) {
        _classCallCheck(this, Event);

        var _this = _possibleConstructorReturn(this, (Event.__proto__ || Object.getPrototypeOf(Event)).call(this, props));

        _this.state = {
            name: _this.props.event ? _this.props.event.name : "",
            reducer: _this.props.event ? _this.props.event.reducer : "",
            publishable: _this.props.event ? _this.props.event.publishable : "",
            publishName: _this.props.event ? _this.props.event.publishName : ""
        };
        return _this;
    }

    _createClass(Event, [{
        key: "render",
        value: function render() {

            if (this.props.selectedTagID === undefined) {
                return (0, _Messages2.default)();
            }

            var publishName = this.state.publishable ? _react2.default.createElement("input", { type: "text", onChange: _Reducer.updatePublishName.bind(this), value: this.state.publishName, placeholder: "Enter event publish name for other components to subscribe to" }) : null;
            var eventNames = this.props.eventNames.map(function (eventName) {
                return _react2.default.createElement("option", { value: eventName });
            });

            return _react2.default.createElement(
                "div",
                { className: "event" },
                _react2.default.createElement("input", { list: "browsers", type: "text", onChange: _Reducer.updateEventName.bind(this), value: this.state.name, placeholder: "Enter event name", title: "Event Name" }),
                _react2.default.createElement(
                    "datalist",
                    { id: "browsers" },
                    eventNames
                ),
                _react2.default.createElement("br", null),
                _react2.default.createElement("textarea", { onChange: _Reducer.updateReducer.bind(this), value: this.state.reducer, placeholder: "Enter state reducer", title: "Reducer" }),
                _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement(
                        "label",
                        null,
                        _react2.default.createElement("input", { type: "checkbox", onChange: _Reducer.updateEventType.bind(this), checked: this.state.publishable ? "checked" : "" }),
                        "Publishable"
                    ),
                    publishName,
                    _react2.default.createElement(
                        "button",
                        { onClick: _Events.publishEvent.bind(this), id: "saveEvent" },
                        _react2.default.createElement("i", { className: "fas fa-save" }),
                        "Save"
                    ),
                    _react2.default.createElement(
                        "button",
                        { onClick: _Events.deleteEvent.bind(this), id: "deleteEvent" },
                        _react2.default.createElement("i", { className: "fas fa-trash" }),
                        "Delete"
                    )
                )
            );
        }
    }]);

    return Event;
}(_react.Component);

exports.default = Event;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(69);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(2)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".console{\n    position: fixed;\n    right: 150px;\n}\n\n.error {\n    color: red;\n}\n\n.event { \n    padding-left: 10px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    border-top: 1px solid #333333;\n    background: rgb(64, 64, 64);\n}\n\n.info {\n    color: yellowgreen;\n}\n\nlabel {\n    padding-right: 10px;\n}\n\n.event input {\n    margin-left:0px;\n}\n\n.event textarea {\n    margin-top: 8px;\n}", ""]);



/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _MessagesComponent = __webpack_require__(9);

var _MessagesComponent2 = _interopRequireDefault(_MessagesComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getMessages() {
    var messages = [{
        type: "info",
        text: "#1 INFO: Select any element in the left most pane(editor pane) to see its content"
    }, {
        type: "info",
        text: "#2 INFO: Click on 'Add' to add an component"
    }];

    return React.createElement(_MessagesComponent2.default, { messages: messages });
}

exports.default = getMessages;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(72);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(2)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".console{\n    position: fixed;\n    right: 150px;\n    bottom: 50px;\n}\n\n.error {\n    color: red;\n}\n\n\n.info {\n    color: yellowgreen;\n}", ""]);



/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(74);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libraries.

var MessageComponent = function (_Component) {
    _inherits(MessageComponent, _Component);

    function MessageComponent(props) {
        _classCallCheck(this, MessageComponent);

        return _possibleConstructorReturn(this, (MessageComponent.__proto__ || Object.getPrototypeOf(MessageComponent)).call(this, props));
    }

    _createClass(MessageComponent, [{
        key: "render",
        value: function render() {

            var message = this.props.message;

            if (message.type === "error" || message.type === "info") {
                return _react2.default.createElement(
                    "div",
                    { className: message.type },
                    _react2.default.createElement(
                        "code",
                        null,
                        message.text
                    )
                );
            } else {
                console.error(message.type + " is unidentified message type for <MessagesComponent/>. Please use either 'error' or 'info' only. If you require a different type, raise an issue, send a PR");
                return _react2.default.createElement(
                    "div",
                    { className: "console" },
                    _react2.default.createElement(
                        "div",
                        { className: "eerror" },
                        _react2.default.createElement(
                            "code",
                            null,
                            "error : unidentified message type. Please use either error/ info only"
                        )
                    )
                );
            }
        }
    }]);

    return MessageComponent;
}(_react.Component);

exports.default = MessageComponent;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(75);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(2)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, "\n.error {\n    color: red;\n}\n\n\n.info {\n    color: yellowgreen;\n}", ""]);



/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _module$exports;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function updateEventName(e) {
    this.setState({
        name: e.target.value
    });
}

function updateReducer(e) {
    this.setState({
        reducer: e.target.value
    });
}

function updatePublishName(e) {
    this.setState({
        publishName: e.target.value
    });
}

function updateEventType(e) {
    this.setState({
        publishable: e.currentTarget.checked
    });
}

module.exports = (_module$exports = {
    updateEventName: updateEventName,
    updateEventType: updateEventType,
    updatePublishName: updatePublishName
}, _defineProperty(_module$exports, "updateEventType", updateEventType), _defineProperty(_module$exports, "updateReducer", updateReducer), _module$exports);

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.publishEvent = publishEvent;
exports.deleteEvent = deleteEvent;
function publishEvent() {
    this.props.onSave({
        name: this.state.name,
        reducer: this.state.reducer,
        index: this.props.index,
        publishable: this.state.publishable,
        publishName: this.state.publishName
    });
}

function deleteEvent() {
    this.props.deleteEvent(this.props.index);
}

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _MessagesComponent = __webpack_require__(9);

var _MessagesComponent2 = _interopRequireDefault(_MessagesComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getMessages(error) {

    var messages = [{
        type: "error",
        text: "ERROR : " + error + "developer log: look in console related to eval"
    }];
    return React.createElement(_MessagesComponent2.default, { messages: messages });
}

exports.default = getMessages;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(80);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(2)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".events {\n    border:1px solid black;\n    padding: 5px;\n}\n\n.error {\n    color: red;\n    position: fixed;\n    right: 150px;\n}", ""]);



/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.updateEvent = updateEvent;
exports.selectedTagChanged = selectedTagChanged;
exports.deleteEvent = deleteEvent;
exports.updateConfiguration = updateConfiguration;
function updateEvent(event) {
    var element = JSON.parse(JSON.stringify(this.state.element));

    // Keep the child component name as the ID. Will cause problem in future for list rendering boy.
    if (this.state.selectedTag.includes("child-component-")) {
        event.id = this.state.selectedTag.split("child-component-")[1];
    } else {
        event.id = this.state.selectedTag.split("-")[1];
    }
    // Add 
    if (event.index === undefined) {
        element.events.push(event);
    } else {
        // Edit
        element.events[event.index] = event;
    }

    this.props.onEventsUpdate(element.events);
}

function selectedTagChanged(e) {
    this.setState({
        selectedTag: e.currentTarget.value
    });
}

function deleteEvent(index) {

    // Get current component.
    var element = JSON.parse(JSON.stringify(this.state.element));

    // Remove the event to be deleted.
    element.events.splice(index, 1);

    // Update elements with new events.
    this.props.onEventsUpdate(element.events);
}

function updateConfiguration(config) {
    this.props.onConfigUpdate(config);
}

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getNodeTree = getNodeTree;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _nestedComponentSetup = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Why? Because importing React as variable at line#2 will be alterted by babel. Keep it as a property, babel will ignore it.
window.React = _react2.default;
window.Component = _react2.default.Component;

function getNodeTree(element, jsx, style, state, events) {

    var result = void 0,
        error = void 0;
    try {
        var nestedComponents = (0, _nestedComponentSetup.getNestedComponents)(element);
        if (nestedComponents.length > 0) {
            (0, _nestedComponentSetup.saveComponentsToWindow)(nestedComponents);
        }
        result = eval(Babel.transform(jsx, { presets: ['react'] }).code);
    } catch (e) {
        error = e;
    } finally {
        return _defineProperty({
            error: error,
            result: result }, "result", result);
    }
}

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Storage = __webpack_require__(3);

__webpack_require__(84);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libraries.

var History = function (_Component) {
    _inherits(History, _Component);

    function History(props) {
        _classCallCheck(this, History);

        return _possibleConstructorReturn(this, (History.__proto__ || Object.getPrototypeOf(History)).call(this, props));
    }

    _createClass(History, [{
        key: "refreshToPrevious",
        value: function refreshToPrevious() {
            (0, _Storage.popHistory)();
        }
    }, {
        key: "render",
        value: function render() {

            return _react2.default.createElement(
                "div",
                { className: "container preview" },
                _react2.default.createElement(
                    "div",
                    { className: "title" },
                    "History"
                ),
                _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement(
                        "button",
                        { onClick: this.refreshToPrevious.bind(this) },
                        "Go back"
                    )
                )
            );
        }
    }]);

    return History;
}(_react.Component);

exports.default = History;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(85);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(2)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".container{\n    border: 1px solid black;\n    padding: 5px;\n    box-shadow: 0px 8px 26px -8px black;\n    background: #2C3134;\n}\n", ""]);



/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(87);

var _DynamicComponent = __webpack_require__(89);

var _DynamicComponent2 = _interopRequireDefault(_DynamicComponent);

var _Storage = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libraries.

// Utilities.

var Preview = function (_Component) {
    _inherits(Preview, _Component);

    function Preview(props) {
        _classCallCheck(this, Preview);

        var _this = _possibleConstructorReturn(this, (Preview.__proto__ || Object.getPrototypeOf(Preview)).call(this, props));

        _this.state = {
            component: _this.props.component
        };
        return _this;
    }

    _createClass(Preview, [{
        key: "refresh",
        value: function refresh() {
            this.setState({
                component: (0, _Storage.readComponent)(this.state.component.name)
            });
        }
    }, {
        key: "render",
        value: function render() {

            // Helps to rerender when changes to markup/events are made to the component and preview them.
            var randomKey = this.props.component.id * ~~(Math.random() * 10);
            return _react2.default.createElement(
                "div",
                { className: "container preview" },
                _react2.default.createElement(
                    "div",
                    { className: "title" },
                    "Preview"
                ),
                _react2.default.createElement(_DynamicComponent2.default, { key: randomKey, component: this.state.component })
            );
        }
    }]);

    return Preview;
}(_react.Component);

exports.default = Preview;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(88);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(2)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".container{\n    border: 1px solid black;\n    padding: 5px;\n    box-shadow: 0px 8px 26px -8px black;\n    background: #2C3134;\n}\n\n.dropPoint{\n    border: 1px solid green;\n}\n\n.targetChild{\n    border: 1px solid #3E8CE4;\n}", ""]);



/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _nestedComponentSetup = __webpack_require__(4);

__webpack_require__(90);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libraries.

var DynamicComponent = function (_Component) {
    _inherits(DynamicComponent, _Component);

    function DynamicComponent(props) {
        _classCallCheck(this, DynamicComponent);

        var _this = _possibleConstructorReturn(this, (DynamicComponent.__proto__ || Object.getPrototypeOf(DynamicComponent)).call(this, props));

        _this.state = {
            component: _this.props.component
        };

        return _this;
    }

    _createClass(DynamicComponent, [{
        key: "render",
        value: function render() {

            if (this.state.component.name === undefined) {
                return _react2.default.createElement(
                    "div",
                    null,
                    "No component selected."
                );
            }
            var nestedComponents = (0, _nestedComponentSetup.getNestedComponents)(this.state.component);
            if (nestedComponents.length > 0) {
                (0, _nestedComponentSetup.saveComponentsToWindow)(nestedComponents);
            }

            if (!window[this.state.component.name]) {
                return _react2.default.createElement(
                    "div",
                    null,
                    "Component not rendered"
                );
            }

            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(window[this.state.component.name])
            );
        }
    }]);

    return DynamicComponent;
}(_react.Component);

exports.default = DynamicComponent;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(91);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(2)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".box {\n    margin: 5px;\n    border:1px solid black;\n    padding:5px;\n}", ""]);



/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.updateEvent = updateEvent;
exports.updateConfig = updateConfig;
exports.saveElement = saveElement;
exports.updateSelectedComponent = updateSelectedComponent;

var _Storage = __webpack_require__(3);

function updateEvent(events) {
    var _this = this;

    // Create new state.
    var newElements = Object.assign({}, this.state).elements;
    var selectedComponent = newElements.find(function (element) {
        return element.name === _this.state.selectedComponent.name;
    });

    selectedComponent.events = events;

    // Set state to the new state.
    this.setState({
        elements: newElements
    });

    (0, _Storage.writeData)("ui-editor", newElements);
}

function updateConfig(config) {

    var newElements = Object.assign({}, this.state).elements;

    var parent = newElements.find(function (element) {
        return element.name === config.parentName;
    });
    var child = newElements.find(function (element) {
        return element.name === config.childName;
    });

    parent.state = JSON.parse(parent.state);

    if (parent.config === undefined) {
        parent.config = {};
    } else {
        parent.config = JSON.parse(parent.config);
    }
    parent.config[child.name] = config.config;

    if (parent.config[child.name].override) {
        parent.state[child.name] = JSON.parse(child.state);
    } else {
        delete parent.state[child.name];
    }

    parent.state = JSON.stringify(parent.state);
    parent.config = JSON.stringify(parent.config);

    this.setState({
        elements: newElements
    });

    (0, _Storage.writeData)("ui-editor", newElements);
}

function saveElement(element) {
    var _this2 = this;

    var components = Array.from(this.state.components);

    // Check if element exist.
    var elementExist = components.find(function (component) {
        return component.name === element.name;
    });
    var selectedComponent = components.find(function (component) {
        return component.name === _this2.state.selectedComponent.name;
    });
    var selectedIndex = components.findIndex(function (component) {
        return component.name === _this2.state.selectedComponent.name;
    });
    if (elementExist) {
        // Find the element.
        var elementUnderEdit = selectedComponent;

        // Merge.
        elementUnderEdit = Object.assign(elementUnderEdit, element);

        // Push it to original list.
        components[selectedIndex] = elementUnderEdit;
    } else {
        var newElement = {
            name: element.name,
            markup: element.markup,
            events: [],
            state: element.state || "{}",
            style: element.style,
            children: [],
            id: Math.ceil(Math.random() * 1000),
            config: "{}"
        };

        components.push(newElement);
        selectedIndex = components.length - 1;
    }

    this.setState({
        elements: components,
        element: {
            name: element.name,
            markup: element.markup,
            style: element.style,
            state: element.state,
            events: element.events || []
        },
        showEditor: false
    });

    (0, _Storage.writeData)("ui-editor", components);
}

function updateSelectedComponent(e) {
    var componentName = e.currentTarget.innerText.split("\n")[0];
    // Find the element from state that matches the currently selected element.
    var selectedComponent = this.state.components.find(function (component) {
        return component.name === componentName;
    });

    window.selectedcomponentname = selectedComponent.name;
    // Update the state with selectedElement.
    this.setState({
        selectedComponent: selectedComponent
    });
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvU3RvcmFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL25lc3RlZENvbXBvbmVudFNldHVwL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9VdGlsaXRpZXMvQ29tcG9uZW50cy9Gb2xkZXJzL0ZvbGRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbGl0aWVzL0NvbXBvbmVudHMvRm9sZGVycy9Gb2xkZXIvRXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvY29udmVydC10by1yZWFjdC1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy9Db21wb25lbnRzL01lc3NhZ2VzQ29tcG9uZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LnByb2R1Y3Rpb24ubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9janMvcmVhY3QtZG9tLnByb2R1Y3Rpb24ubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zY2hlZHVsZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NjaGVkdWxlci9janMvc2NoZWR1bGVyLnByb2R1Y3Rpb24ubWluLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0luZGV4L2luZGV4LmNzcz9kMGQ3Iiwid2VicGFjazovLy8uL3NyYy9JbmRleC9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQXNzZXRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9Bc3NldHMvU3R5bGUuY3NzPzllYWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Fzc2V0cy9TdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Fzc2V0cy9Bc3NldC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQXNzZXRzL0Fzc2V0L1N0eWxlLmNzcz81OGU2Iiwid2VicGFjazovLy8uL3NyYy9Bc3NldHMvQXNzZXQvU3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9Bc3NldHMvUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbGl0aWVzL0xpYnJhcmllcy9pbmRleGVkREIvaW5kZXhlREIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1V0aWxpdGllcy9MaWJyYXJpZXMvaW5kZXhlZERCL01pbmRleGVkREIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Fzc2V0cy9kYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9TdHlsZS5jc3M/MzZkZiIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9TdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL1V0aWxpdGllcy9Db21wb25lbnRzL0ZvbGRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1V0aWxpdGllcy9Db21wb25lbnRzL0ZvbGRlcnMvU3R5bGUuY3NzPzg0NjUiLCJ3ZWJwYWNrOi8vLy4vc3JjL1V0aWxpdGllcy9Db21wb25lbnRzL0ZvbGRlcnMvU3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9VdGlsaXRpZXMvQ29tcG9uZW50cy9Gb2xkZXJzL0ZvbGRlci9TdHlsZS5jc3M/YTliZSIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbGl0aWVzL0NvbXBvbmVudHMvRm9sZGVycy9Gb2xkZXIvU3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9VdGlsaXRpZXMvQ29tcG9uZW50cy9Gb2xkZXJzL05vRm9sZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9VdGlsaXRpZXMvQ29tcG9uZW50cy9Gb2xkZXJzL05vRm9sZGVyL1N0eWxlLmNzcz8zNzRlIiwid2VicGFjazovLy8uL3NyYy9VdGlsaXRpZXMvQ29tcG9uZW50cy9Gb2xkZXJzL05vRm9sZGVyL1N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbGl0aWVzL0NvbXBvbmVudHMvRm9sZGVycy9Ob0ZvbGRlci9FdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1V0aWxpdGllcy9Db21wb25lbnRzL0ZvbGRlcnMvTmV3Rm9sZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9VdGlsaXRpZXMvQ29tcG9uZW50cy9Gb2xkZXJzL05ld0ZvbGRlci9TdHlsZS5jc3M/ZTNiZiIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbGl0aWVzL0NvbXBvbmVudHMvRm9sZGVycy9OZXdGb2xkZXIvU3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9VdGlsaXRpZXMvQ29tcG9uZW50cy9Gb2xkZXJzL0ZvbGRlci9SZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvU3RvcmFnZS9sb2NhbFN0b3JhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy9TdG9yYWdlL2xvY2FsU3RvcmFnZS9TYW1wbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1V0aWxpdGllcy9Db21wb25lbnRzL0ZvbGRlcnMvcHJvY2Vzc0ZvbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Db21wb25lbnR0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0NvbXBvbmVudHQvRXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0NvbXBvbmVudHQvU3R5bGUuY3NzPzhmMDciLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQ29tcG9uZW50dC9TdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvRXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9VdGlsaXRpZXMvQ29tcG9uZW50cy9EcmFnZ2FibGVDb21wb25lbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1V0aWxpdGllcy9Db21wb25lbnRzL0RyYWdnYWJsZUNvbXBvbmVudC9zdHlsZS5jc3M/ZGVlYyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbGl0aWVzL0NvbXBvbmVudHMvRHJhZ2dhYmxlQ29tcG9uZW50L3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbGl0aWVzL0NvbXBvbmVudHMvRHJhZ2dhYmxlQ29tcG9uZW50L2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRWRpdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9FZGl0b3IvU3R5bGUuY3NzPzFiZmMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VkaXRvci9TdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VkaXRvci9SZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9FdmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0V2ZW50cy9Db25maWd1cmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0V2ZW50cy9Db25maWd1cmF0b3IvU3R5bGUuY3NzP2VlMjgiLCJ3ZWJwYWNrOi8vLy4vc3JjL0V2ZW50cy9Db25maWd1cmF0b3IvU3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvQ29tcG9uZW50cy9Ob2Rlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXZlbnRzL0V2ZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9FdmVudHMvRXZlbnQvU3R5bGUuY3NzP2JhOTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL0V2ZW50cy9FdmVudC9TdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL0V2ZW50cy9FdmVudC9NZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL0NvbXBvbmVudHMvTWVzc2FnZXNDb21wb25lbnQvc3R5bGUuY3NzPzFkNDEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy9Db21wb25lbnRzL01lc3NhZ2VzQ29tcG9uZW50L3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL0NvbXBvbmVudHMvTWVzc2FnZUNvbXBvbmVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL0NvbXBvbmVudHMvTWVzc2FnZUNvbXBvbmVudC9zdHlsZS5jc3M/N2M4OSIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL0NvbXBvbmVudHMvTWVzc2FnZUNvbXBvbmVudC9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL0V2ZW50cy9FdmVudC9SZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9FdmVudHMvRXZlbnQvRXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9FdmVudHMvTWVzc2FnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0V2ZW50cy9TdHlsZS5jc3M/Nzk3MSIsIndlYnBhY2s6Ly8vLi9zcmMvRXZlbnRzL1N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXZlbnRzL1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy9nZXQtbm9kZS10cmVlLmpzIiwid2VicGFjazovLy8uL3NyYy9IaXN0b3J5L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9IaXN0b3J5L3N0eWxlLmNzcz8wYjIxIiwid2VicGFjazovLy8uL3NyYy9IaXN0b3J5L3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJldmlldy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJldmlldy9zdHlsZS5jc3M/NmQ0OCIsIndlYnBhY2s6Ly8vLi9zcmMvUHJldmlldy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL1ByZXZpZXcvRHluYW1pY0NvbXBvbmVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJldmlldy9EeW5hbWljQ29tcG9uZW50L3N0eWxlLmNzcz81MjVlIiwid2VicGFjazovLy8uL3NyYy9QcmV2aWV3L0R5bmFtaWNDb21wb25lbnQvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9JbmRleC9SZWR1Y2VyLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJyZWFkRGF0YSIsIndyaXRlRGF0YSIsInJlYWRDb21wb25lbnQiLCJ3cml0ZUNvbXBvbmVudCIsInBvcEhpc3RvcnkiLCJzYXZlQ29tcG9uZW50c1RvV2luZG93IiwiZ2V0TmVzdGVkQ29tcG9uZW50cyIsImNyZWF0ZVN0eWxlc2hlZXQiLCJzdHlsZSIsIm5hbWUiLCJpbmNsdWRlcyIsImFzc2V0Iiwic3BsaXQiLCJwb3AiLCJqb2luIiwicmVwbGFjZSIsIndpbmRvdyIsImFzc2V0cyIsInRvRGVsZXRlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIml0ZW0iLCJyZW1vdmUiLCJkeW5hbWljU3R5bGUiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwidHlwZSIsImlubmVySFRNTCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInNhdmVUb1dpbmRvdyIsImNvbXBvbmVudCIsImNoZWNrTmVzdGVkQ29tcG9uZW50cyIsIm1hcmt1cCIsImNvbXBvbmVudHMiLCJmaWx0ZXIiLCJsZW5ndGgiLCJuZXN0ZWRDb21wb25lbnRzIiwicGFyZW50IiwiY2hpbGRyZW4iLCJncmFuZEtpZHMiLCJtYXAiLCJmbGF0IiwicHVzaCIsIkZvbGRlciIsInByb3BzIiwic3RhdGUiLCJzdGF0dXMiLCJmb2xkZXJDbGFzcyIsImZvbGRlciIsImNvbnRlbnRzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRlbGV0ZUZvbGRlciIsImJpbmQiLCJvbkZvbGRlclVwZGF0ZSIsIm5ld0ZvbGRlciIsInNlbGVjdEZvbGRlciIsImRlc2VsZWN0Rm9sZGVyIiwiZHJvcEhhbmRsZXIiLCJkcmFnT3ZlckhhbmRsZXIiLCJkcmFnTGVhdmVIYW5kbGVyIiwib25EcmFnU3RhcnQiLCJ0b2dnbGVGb2xkZXIiLCJDb21wb25lbnQiLCJvbkV4cG9ydCIsImV2IiwicHJldmVudERlZmF1bHQiLCJjb21wb25lbnROYW1lIiwiZGF0YVRyYW5zZmVyIiwiZ2V0RGF0YSIsImZvbGRlck5hbWUiLCJBcnJheSIsImZyb20iLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJlIiwiZXZlbnQiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJzZXREYXRhIiwic2VsZWN0ZWRDb21wb25lbnQiLCJmaW5kIiwidW5pcXVlQ29tcG9uZW50cyIsIlNldCIsImNvbSIsImVsZW1lbnQiLCJyZW1vdmVQYXJhbnRoZXNpcyIsImNyZWF0ZUNvbXBvbmVudCIsImNvbXBvbmVudFN0cmluZyIsImNvbnZlcnRUb1JlYWN0Y29tcG9uZW50IiwiZXZhbCIsIkJhYmVsIiwidHJhbnNmb3JtIiwicHJlc2V0cyIsInBsdWdpbnMiLCJjb2RlIiwiZXZlbnRzIiwiaWQiLCJnZXRDb21wb25lbnROYW1lSW5NYXJrdXAiLCJnZXRDb21wb25lbnRFdmVudGVkTWFya3VwIiwiZ2V0U3RhdGVkTWFya3VwIiwiY29uZmlnIiwiSlNPTiIsInBhcnNlIiwiY2hpbGRyZW5Db25maWciLCJPYmplY3QiLCJrZXlzIiwiY2hpbGROYW1lIiwic2hvd0hpZGVQcm9wIiwib3ZlcnJpZGUiLCJjaGlsZE1hcmt1cCIsInNob3dIaWRlQ2hpbGQiLCJyZW5kZXJMaXN0UHJvcCIsImNoaWxkTWFya3VwV2l0aFByb3BzIiwicmVuZGVyTGlzdE1hcmt1cCIsImdldENvbXBvbmVudFJlZHVjZXJzIiwiZnVuY3Rpb25OYW1lIiwiZnVuY3Rpb25EZWYiLCJyZWR1Y2VyIiwicHVibGlzaGFibGUiLCJwdWJsaXNoTmFtZSIsImNvbXBvbmVudE5hbWVkTWFrcnVwIiwic3RhdGVPdmVyaWRlTWFya3VwIiwiY29tcG9uZW50RXZlbnRlZE1hcmt1cCIsImNvbXBvbmVudFJlZHVjZXJzIiwiY29tcG9uZW50U3RhdGUiLCJSZWFjdENvbXBvbmVudCIsIk1lc3NhZ2VzQ29tcG9uZW50IiwibWVzc2FnZXMiLCJtZXNzYWdlIiwiaW5kZXgiLCJJbmRleCIsImNvbXBvbmVudE5hbWVzIiwic2VsZWN0ZWRUYWciLCJmb2xkZXJzIiwic2hvd0VkaXRvciIsInVwZGF0ZUNvbmZpZyIsInVwZGF0ZUV2ZW50Iiwic2F2ZUVsZW1lbnQiLCJ1cGRhdGVTZWxlY3RlZENvbXBvbmVudCIsInByZXZpZXdDb21wb25lbnQiLCJNYXRoIiwiY2VpbCIsInJhbmRvbSIsIm9wZW5FZGl0b3IiLCJ1cGRhdGVGb2xkZXJzIiwiUmVhY3RET00iLCJyZW5kZXIiLCJnZXRFbGVtZW50QnlJZCIsIkFzc2V0cyIsImNsYXNzIiwiaW1hZ2VVUkwiLCJ3cml0ZVRvREIiLCJmaWxlIiwiYmluIiwicmVzdWx0IiwibmV3RmlsZSIsInNpemUiLCJpbWciLCJzcmMiLCJmZXRjaEZyb21EQiIsIkFzc2V0IiwiY2FsbCIsImZpbGVzIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJvbmxvYWRlbmQiLCJiIiwiYXBwZW5kVG9Cb2R5IiwiaURCIiwib25sb2FkIiwiTWluZGV4ZWREQiIsInVpRWRpdG9yIiwiY29ubmVjdCIsImRhdGFiYXNlTmFtZSIsIm9iamVjdFN0b3JlcyIsImlkYiIsImluZGV4ZWREQiIsIm1vekluZGV4ZWREQiIsIndlYmtpdEluZGV4ZWREQiIsIm1zSW5kZXhlZERCIiwic2hpbUluZGV4ZWREQiIsImRiIiwib2JqU3RycyIsImlzQXJyYXkiLCJzdG9yZSIsImtleSIsImNvbm4iLCJvcGVuIiwibWRiIiwib251cGdyYWRlbmVlZGVkIiwiZGJsIiwiZW50cmllcyIsImNyZWF0ZU9iamVjdFN0b3JlIiwia2V5UGF0aCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwib25zdWNjZXNzIiwib25lcnJvciIsImVycm9yIiwiY3MiLCJ1bmRlZmluZWQiLCJ0eCIsInRyYW5zYWN0aW9uIiwib2JqZWN0U3RvcmUiLCJwdXQiLCJvYmoiLCJvcyIsInJlc3BvbnNlIiwiZ2V0IiwiZ2V0QWxsIiwiY2xvc2UiLCJ0aGVuIiwiaHJlZiIsImRhdGEiLCJpbWFnZSIsIkNvbXBvbmVudHMiLCJ1bnNoaWZ0Iiwib25PcGVuRWRpdG9yIiwiYWRkQ29tcG9uZW50IiwiYWRkRm9sZGVyIiwib25Gb2xkZXJzVXBkYXRlIiwib25TZWxlY3Rpb24iLCJvbkRlbGV0ZSIsIkZvbGRlcnMiLCJlbXB0eUZvbGRlckluZGV4IiwiZmluZEluZGV4Iiwic3BsaWNlIiwic3RyaW5naWZ5IiwiY3VycmVudEZvbGRlciIsImNvbnRlbnQiLCJmZWF0dXJlRW5hYmxlZCIsImNoZWNrRm9sZGVyIiwiTm9Gb2xkZXIiLCJub2Ryb3BIYW5kbGVyIiwibm9kcmFnT3ZlckhhbmRsZXIiLCJzbGljZSIsIk5ld0ZvbGRlciIsIm5ld0ZvbGRlckNsYXNzIiwiY3VycmVudFRhcmdldCIsInZhbHVlIiwib25OZXdGb2xkZXIiLCJmb2xkZXJOYW1lQ2hhbmdlZCIsInNhdmVGb2xkZXJOYW1lT25FbnRlciIsImN0cmxLZXkiLCJvbkZvbGRlckRlbGV0ZSIsIm9wZW5Gb2xkZXIiLCJjbG9zZUZvbGRlciIsInB1c2hIaXN0b3J5IiwiZWRpdG9ySGlzdG9yeSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJnZXRJdGVtIiwic2FtcGxlIiwiaGlzdG9yeSIsIm5vUHVzaCIsImNvbXAiLCJsYXN0SXRlbSIsImZvbGRlclN0cnVjdHVyZSIsImluaXRpYWxpc2VQcm9wcyIsInByb2Nlc3NGb2xkZXIiLCJpIiwicHJvY2Vzc0NvbnRlbnQiLCJDb21wb25lbnR0IiwiY2xhc3NMaXN0IiwiaGFuZGxlRHJhZyIsInJlc3RvcmVDbGFzcyIsInNlbGVjdGlvbkNoYW5nZWQiLCJvblNlbGVjdGlvbkNoYW5nZSIsImFkZCIsImV2ZW50Q2FsbGJhY2tzIiwicGFyZW50RWxlbWVudCIsImlubmVyVGV4dCIsIkRyYWdnYWJsZUNvbXBvbmVudCIsInBhbmVsTmFtZSIsInRpdGxlIiwiZHJhZ2dhYmxlIiwidG9wIiwicGFnZVkiLCJsZWZ0IiwicGFnZVgiLCJtaW5pbWlzZWQiLCJtb3ZlRGl2Iiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwidG9nZ2xlTWluaW1pc2VNYXhpbWlzZSIsIkVkaXRvciIsIm9uU2F2ZSIsInVwZGF0ZU5hbWUiLCJ1cGRhdGVNYXJrdXAiLCJ1cGRhdGVTdHlsZSIsInVwZGF0ZVN0YXRlIiwiZ2V0UHJvcGVydHlDb250YWluaW5nUHJvcHMiLCJjaGlsZCIsInByb3BlcnR5IiwiRXZlbnRzIiwiYXNzaWduIiwibm9kZVRyZWUiLCJldmVudHNPZlNlbGVjdGVkVGFnIiwiY29uZmlndXJhdG9yIiwiZXZlbnROYW1lcyIsImNoaWxkQ29tcG9uZW50TmFtZSIsImNoaWxkQ29tcG9uZW50IiwicHVibGlzaGFibGVFdmVudCIsImV2ZW50TmFtZSIsImRlbGV0ZUV2ZW50IiwidXBkYXRlQ29uZmlndXJhdGlvbiIsInNlbGVjdGVkVGFnQ2hhbmdlZCIsIkNvbmZpZ3VyYXRvciIsIm9uQ2hhbmdlIiwicGFyZW50TmFtZSIsInN0YXRlUHJvcHMiLCJib29sZWFuUHJvcHMiLCJwcm9wIiwibGlzdFByb3BzIiwidG9nZ2VsT3ZlcnJpZGUiLCJzYXZlQ29uZmlnIiwiTm9kZXMiLCJub2RlIiwib25TZWxlY3RlZFRhZ0NoYW5nZWQiLCJFdmVudCIsInNlbGVjdGVkVGFnSUQiLCJ1cGRhdGVQdWJsaXNoTmFtZSIsInVwZGF0ZUV2ZW50TmFtZSIsInVwZGF0ZVJlZHVjZXIiLCJ1cGRhdGVFdmVudFR5cGUiLCJwdWJsaXNoRXZlbnQiLCJnZXRNZXNzYWdlcyIsInRleHQiLCJNZXNzYWdlQ29tcG9uZW50IiwiY2hlY2tlZCIsIm9uRXZlbnRzVXBkYXRlIiwib25Db25maWdVcGRhdGUiLCJnZXROb2RlVHJlZSIsIlJlYWN0IiwianN4IiwiSGlzdG9yeSIsInJlZnJlc2hUb1ByZXZpb3VzIiwiUHJldmlldyIsInJhbmRvbUtleSIsIkR5bmFtaWNDb21wb25lbnQiLCJuZXdFbGVtZW50cyIsImVsZW1lbnRzIiwiZWxlbWVudEV4aXN0Iiwic2VsZWN0ZWRJbmRleCIsImVsZW1lbnRVbmRlckVkaXQiLCJuZXdFbGVtZW50Iiwic2VsZWN0ZWRjb21wb25lbnRuYW1lIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7OztBQ2xGYTs7QUFFYixJQUFJLElBQXFDO0FBQ3pDLG1CQUFtQixtQkFBTyxDQUFDLEVBQStCO0FBQzFELENBQUMs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QUFrQixDQUFsQztBQUNIOztBQUVELFNBQUt1QyxRQUFMLENBQWM7QUFDVjhRLGtCQUFVdlQsVUFEQTtBQUVWb0QsaUJBQVM7QUFDTDlFLGtCQUFNOEUsUUFBUTlFLElBRFQ7QUFFTHlCLG9CQUFRcUQsUUFBUXJELE1BRlg7QUFHTDFCLG1CQUFPK0UsUUFBUS9FLEtBSFY7QUFJTHVDLG1CQUFPd0MsUUFBUXhDLEtBSlY7QUFLTG1ELG9CQUFRWCxRQUFRVyxNQUFSLElBQWtCO0FBTHJCLFNBRkM7QUFTVnVDLG9CQUFZO0FBVEYsS0FBZDs7QUFZQSw0QkFBVSxXQUFWLEVBQXVCdEcsVUFBdkI7QUFDSDs7QUFHTSxTQUFTMEcsdUJBQVQsQ0FBa0NoRSxDQUFsQyxFQUFxQztBQUN4QyxRQUFJVCxnQkFBZ0JTLEVBQUVzSyxhQUFGLENBQWdCaUMsU0FBaEIsQ0FBMEJ4USxLQUExQixDQUFnQyxJQUFoQyxFQUFzQyxDQUF0QyxDQUFwQjtBQUNBO0FBQ0EsUUFBSXNFLG9CQUFvQixLQUFLbkMsS0FBTCxDQUFXWixVQUFYLENBQXNCZ0QsSUFBdEIsQ0FBMkI7QUFBQSxlQUFXbkQsVUFBVXZCLElBQVYsS0FBaUIyRCxhQUE1QjtBQUFBLEtBQTNCLENBQXhCOztBQUVBcEQsV0FBTytVLHFCQUFQLEdBQStCN1Esa0JBQWtCekUsSUFBakQ7QUFDQTtBQUNBLFNBQUttRSxRQUFMLENBQWM7QUFDVk07QUFEVSxLQUFkO0FBR0gsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEwKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuICdAbWVkaWEgJyArIGl0ZW1bMl0gKyAneycgKyBjb250ZW50ICsgJ30nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9ICcoJyArIGl0ZW1bMl0gKyAnKSBhbmQgKCcgKyBtZWRpYVF1ZXJ5ICsgJyknO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuICByZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufSIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJpbXBvcnQge3JlYWREYXRhLCB3cml0ZURhdGEsIHdyaXRlQ29tcG9uZW50LCByZWFkQ29tcG9uZW50LCBwb3BIaXN0b3J5IH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHJlYWREYXRhOiByZWFkRGF0YSxcbiAgICB3cml0ZURhdGE6IHdyaXRlRGF0YSxcbiAgICByZWFkQ29tcG9uZW50OiByZWFkQ29tcG9uZW50LFxuICAgIHdyaXRlQ29tcG9uZW50OiB3cml0ZUNvbXBvbmVudCxcbiAgICBwb3BIaXN0b3J5OiBwb3BIaXN0b3J5XG59IiwiLy8gRGVwZW5kZW5jaWVzLlxuXG5pbXBvcnQge2NyZWF0ZUNvbXBvbmVudH0gZnJvbSBcIi4uL2NvbnZlcnQtdG8tcmVhY3QtY29tcG9uZW50XCI7XG5pbXBvcnQge3JlYWREYXRhfSBmcm9tIFwiLi4vU3RvcmFnZVwiO1xuXG4vKipcbiAqIFxuICogQXNzZXQgaW4gc3R5bGUgc2hlZXQgc3ludGF4IC0gJGFzc2V0XG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVzaGVldChzdHlsZSwgbmFtZSkge1xuXG4gICAgLy8gQ2hlY2sgaWYgc3R5bGUgaGFzICRhc3NldHNcbiAgICB3aGlsZShzdHlsZS5pbmNsdWRlcyhcIiRhc3NldHNcIikpe1xuICAgICAgICAvLyBSZXBsYWNlIGl0IHdpdGggYXNzZXQgYmxvYiB1cmxcbiAgICAgICAgbGV0IGFzc2V0ID0gc3R5bGUuc3BsaXQoXCJbJ1wiKVsxXS5zcGxpdChgXWApWzBdLnNwbGl0KFwiXCIpO1xuICAgICAgICBhc3NldC5wb3AoKTtcbiAgICAgICAgYXNzZXQgPSAgYXNzZXQuam9pbihcIlwiKTtcbiAgICAgICAgc3R5bGUgPSBzdHlsZS5yZXBsYWNlKGAkYXNzZXRzWycke2Fzc2V0fSddYCwgYHVybCgke3dpbmRvdy5hc3NldHNbYXNzZXRdfSlgKVxuICAgIH1cbiAgICBsZXQgdG9EZWxldGUgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWNvbXBvbmVudC1uYW1lPSdQYXJlbnRDb21wb25lbnQnXVwiKV07XG4gICAgdG9EZWxldGUuZm9yRWFjaChpdGVtPT57XG4gICAgICAgIGl0ZW0ucmVtb3ZlKClcbiAgICB9KVxuICAgIHZhciBkeW5hbWljU3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIGR5bmFtaWNTdHlsZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbXBvbmVudC1uYW1lXCIsIG5hbWUpO1xuICAgIGR5bmFtaWNTdHlsZS50eXBlID0gJ3RleHQvY3NzJztcbiAgICBkeW5hbWljU3R5bGUuaW5uZXJIVE1MID0gc3R5bGU7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkeW5hbWljU3R5bGUpXG59XG5cbi8qKiBUYWtlcyBhIGNvbXBvbmVudCBhbmQgY29udmVydHMgaXQgYXMgYSByZWFjdCBjb21wb25lbnQgKi9cbmZ1bmN0aW9uIHNhdmVUb1dpbmRvdyggY29tcG9uZW50ICkge1xuICAgIGNyZWF0ZVN0eWxlc2hlZXQoY29tcG9uZW50LnN0eWxlLCBjb21wb25lbnQubmFtZSlcbiAgICB3aW5kb3dbY29tcG9uZW50Lm5hbWVdID0gY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrTmVzdGVkQ29tcG9uZW50cyggbWFya3VwKSB7XG5cbiAgICB2YXIgY29tcG9uZW50cyA9IHJlYWREYXRhKFwidWktZWRpdG9yXCIpO1xuXG4gICAgcmV0dXJuIGNvbXBvbmVudHMuZmlsdGVyKGNvbXBvbmVudD0+IG1hcmt1cC5pbmNsdWRlcyhjb21wb25lbnQubmFtZSkpLmxlbmd0aCA+MDtcbn1cblxuLyoqIFRha2VzIGNvbXBvbmVudHMgYW5kIHNhdmVzIHRoZW0gdG8gd2luZG93IGFzIHJlYWN0IE9iamVjdCAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVDb21wb25lbnRzVG9XaW5kb3coIG5lc3RlZENvbXBvbmVudHMpe1xuICAgIC8vIFRyYW5zcGlsZSB0aGVtIGFuZCBtYWtlIHRoZW0gZ2xvYmFsLlxuICAgIG5lc3RlZENvbXBvbmVudHMuZm9yRWFjaChmdW5jdGlvbihjb21wb25lbnQpe1xuICAgICAgICBzYXZlVG9XaW5kb3coY29tcG9uZW50KVxuICAgIH0pO1xufVxuXG4vKiogVGFrZXMgbWFya3VwIGFuZCByZXR1cm5zIGNoaWxkcmVuIGNvbXBvbmVudCBvYmplY3RzLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE5lc3RlZENvbXBvbmVudHMgKHBhcmVudCkge1xuICAgIC8vIFNob3VsZCBiZSBhYmxlIHRvIGRldGVjdCBuZXN0ZWQgY29tcG9uZW50LlxuXG4gICAgbGV0IGNvbXBvbmVudHM9IHJlYWREYXRhKFwidWktZWRpdG9yXCIpO1xuICAgIGxldCBuZXN0ZWRDb21wb25lbnRzID0gW3BhcmVudF07XG4gICAgaWYoY2hlY2tOZXN0ZWRDb21wb25lbnRzKHBhcmVudC5tYXJrdXApKXtcbiAgICAgICAgLy8gZmluZCBhbGwgdGhlIG5lc3RlZCBjb21wb25lbnRzIGZyb20gdGhlIG1hcmt1cCBhbmQgcHVzaCBpdCB0byBuZXN0ZWRDb21wb25lbnRzLlxuICAgICAgICBsZXQgY2hpbGRyZW4gPSBjb21wb25lbnRzLmZpbHRlcihjb21wb25lbnQ9PiBwYXJlbnQubWFya3VwLmluY2x1ZGVzKGNvbXBvbmVudC5uYW1lKSk7XG4gICAgICAgIC8vIEZpbmQgZ3JhbmQga2lkcy5cbiAgICAgICAgbGV0IGdyYW5kS2lkcyA9IGNoaWxkcmVuLm1hcChnZXROZXN0ZWRDb21wb25lbnRzKS5mbGF0KDMpXG4gICAgICAgIG5lc3RlZENvbXBvbmVudHMucHVzaCguLi5ncmFuZEtpZHMpXG4gICAgfVxuICAgIHJldHVybiBuZXN0ZWRDb21wb25lbnRzLmZpbHRlcihjb21wb25lbnQ9PmNvbXBvbmVudCAmJiBjb21wb25lbnQubWFya3VwKTtcbn1cbiIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG4vLyBTdHlsZXMuXG5cbmltcG9ydCBcIi4vU3R5bGUuY3NzXCI7XG5pbXBvcnQgTm9Gb2xkZXIgZnJvbSBcIi4uL05vRm9sZGVyXCI7XG5pbXBvcnQgTmV3Rm9sZGVyIGZyb20gXCIuLi9OZXdGb2xkZXJcIjtcblxuaW1wb3J0IHtkZWxldGVGb2xkZXIsIHRvZ2dsZUZvbGRlciwgc2VsZWN0Rm9sZGVyLCBkZXNlbGVjdEZvbGRlcn0gZnJvbSBcIi4vUmVkdWNlclwiO1xuaW1wb3J0IHtkcm9wSGFuZGxlciwgZHJhZ092ZXJIYW5kbGVyLCBkcmFnTGVhdmVIYW5kbGVyLCBvbkRyYWdTdGFydH0gZnJvbSBcIi4vRXZlbnRzXCI7XG5cbmNsYXNzIEZvbGRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc3RhdHVzOiBcImZhIGZhLWZvbGRlclwiLFxuICAgICAgICAgICAgZm9sZGVyQ2xhc3M6IFwibmV3Rm9sZGVyXCIsXG4gICAgICAgICAgICBuYW1lOiB0aGlzLnByb3BzLmZvbGRlci5uYW1lLFxuICAgICAgICAgICAgY29udGVudHM6IHRoaXMucHJvcHMuZm9sZGVyLmNvbnRlbnRzLFxuICAgICAgICAgICAgdHlwZTogdGhpcy5wcm9wcy5mb2xkZXIudHlwZVxuICAgICAgICB9O1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBkZWxldGVGb2xkZXIuYmluZCh0aGlzKSlcbiAgICB9XG5cblxuICAgIG5ld0ZvbGRlcihmb2xkZXIpe1xuICAgICAgICB0aGlzLnByb3BzLm9uRm9sZGVyVXBkYXRlKGZvbGRlcilcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgbGV0IGZvbGRlciA9IHRoaXMucHJvcHMuZm9sZGVyO1xuICAgICAgICBsZXQgY29udGVudHMgPSB0aGlzLnByb3BzLmNvbnRlbnRzO1xuICAgICAgICBpZihmb2xkZXIudHlwZT09XCJuZXdGb2xkZXJcIil7XG4gICAgICAgICAgICByZXR1cm4gKDxOZXdGb2xkZXIgb25OZXdGb2xkZXI9e3RoaXMubmV3Rm9sZGVyLmJpbmQodGhpcyl9Lz4pXG4gICAgICAgIH1cbiAgICAgICAgaWYoZm9sZGVyLnR5cGU9PVwiZm9sZGVyXCIpe1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMuc3RhdGUuZm9sZGVyQ2xhc3N9XG4gICAgICAgICAgICAgICAgICAgIGRhdGEtZm9sZGVyLW5hbWU9e2ZvbGRlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGU9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17c2VsZWN0Rm9sZGVyLmJpbmQodGhpcyl9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17ZGVzZWxlY3RGb2xkZXIuYmluZCh0aGlzKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ecm9wPXtkcm9wSGFuZGxlci5iaW5kKHRoaXMpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRyYWdPdmVyPXtkcmFnT3ZlckhhbmRsZXIuYmluZCh0aGlzKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EcmFnTGVhdmU9e2RyYWdMZWF2ZUhhbmRsZXIuYmluZCh0aGlzKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EcmFnU3RhcnQ9e29uRHJhZ1N0YXJ0LmJpbmQodGhpcyl9ID5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnN0YXR1c30gb25DbGljaz17dG9nZ2xlRm9sZGVyLmJpbmQodGhpcyl9PjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9sZGVyXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBmb2xkZXIgbmFtZVwiIHJlYWRPbmx5IHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9Lz5cbiAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRlbnRzfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZihmb2xkZXIudHlwZT09XCJub0ZvbGRlclwiKXtcbiAgICAgICAgICAgIHJldHVybiAoPE5vRm9sZGVyIGNvbnRlbnRzPXtjb250ZW50c30+PC9Ob0ZvbGRlcj4pXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvbGRlcjtcbiIsIlxuICAgIGV4cG9ydCBmdW5jdGlvbiBkcm9wSGFuZGxlcihldikge1xuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgY29tcG9uZW50TmFtZSA9IGV2LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwiY29tcG9uZW50LW5hbWVcIik7XG4gICAgICAgIGxldCBmb2xkZXJOYW1lID0gZXYuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJmb2xkZXItbmFtZVwiKTtcbiAgICAgICAgbGV0IGNvbnRlbnRzID0gQXJyYXkuZnJvbSh0aGlzLnN0YXRlLmNvbnRlbnRzKTtcblxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgZHJvcHBlZCBpdGVtIGlzIGEgY29tcG9uZW50XG4gICAgICAgIGlmKGNvbXBvbmVudE5hbWUpe1xuICAgICAgICAgICAgY29udGVudHMucHVzaChjb21wb25lbnROYW1lKVxuICAgICAgICB9XG4gICAgICAgIC8vIENoZWNrIGlmIGl0IGlzIGEgZm9sZGVyLiBBbHNvIGNoZWNrIGlmIHdlIGFyZSBub3QgZHJvcHBpbmcgb24gdGhlIG9yaWdpbmFsIGZvbGRlci4gbWF5IGJlIHJlbW92ZSBpdCBmcm9tIHRoZSBkb20uIE5PUEUuIFxuICAgICAgICBlbHNlIGlmKGZvbGRlck5hbWUgJiYgZm9sZGVyTmFtZSE9PXRoaXMuc3RhdGUuZm9sZGVyTmFtZSl7XG4gICAgICAgICAgICBjb250ZW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBmb2xkZXJOYW1lLFxuICAgICAgICAgICAgICAgIGNvbnRlbnRzOltdLFxuICAgICAgICAgICAgICAgIHR5cGU6XCJmb2xkZXJcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLm9uRm9sZGVyVXBkYXRlKHtcbiAgICAgICAgICAgIG5hbWU6IHRoaXMuc3RhdGUubmFtZSxcbiAgICAgICAgICAgIGNvbnRlbnRzIDogY29udGVudHMsXG4gICAgICAgICAgICB0eXBlOlwiZm9sZGVyXCJcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zb2xlLmxvZyhcIkRyb3AgZnJvbSBmb2xkZXJcIik7XG4gICAgfVxuXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGRyYWdPdmVySGFuZGxlcihldikge1xuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGZvbGRlckNsYXNzOiBcIm5ld0ZvbGRlciBkcmFnT3ZlclwiXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRHJhZ1wiKTtcbiAgICB9XG5cbiAgICBleHBvcnQgZnVuY3Rpb24gZHJhZ0xlYXZlSGFuZGxlcihlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZHJhZ1wiKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBmb2xkZXJDbGFzczogXCJuZXdGb2xkZXJcIlxuICAgICAgICB9KVxuICAgIH1cblxuXG5leHBvcnQgZnVuY3Rpb24gb25EcmFnU3RhcnQoZSl7XG5cbiAgICBsZXQgbmFtZSA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWZvbGRlci1uYW1lXCIpXG4gICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShcImZvbGRlci1uYW1lXCIsIG5hbWUpO1xufVxuXG5cblxuaW1wb3J0IHvCoGdldE5lc3RlZENvbXBvbmVudHMgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbGl0aWVzL25lc3RlZENvbXBvbmVudFNldHVwXCI7XG5pbXBvcnQgeyBjb252ZXJ0VG9SZWFjdGNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi91dGlsaXRpZXMvY29udmVydC10by1yZWFjdC1jb21wb25lbnRcIjtcbmltcG9ydCB7IHJlYWREYXRhIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWxpdGllcy9TdG9yYWdlXCI7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG9uRXhwb3J0KGNvbXBvbmVudE5hbWUpIHtcbiAgICBsZXQgY29tcG9uZW50cyA9IHJlYWREYXRhKFwidWktZWRpdG9yXCIpO1xuICAgIGxldCBzZWxlY3RlZENvbXBvbmVudCA9IGNvbXBvbmVudHMuZmluZChjb21wb25lbnQ9PmNvbXBvbmVudC5uYW1lLmluY2x1ZGVzKGNvbXBvbmVudE5hbWUpKTtcbiAgICBsZXQgbmVzdGVkQ29tcG9uZW50cyA9IGdldE5lc3RlZENvbXBvbmVudHMoc2VsZWN0ZWRDb21wb25lbnQpO1xuXG4gICAgbGV0IHVuaXF1ZUNvbXBvbmVudHMgPSBbLi4ubmV3IFNldChuZXN0ZWRDb21wb25lbnRzLm1hcChjb209PmNvbS5uYW1lKSldLm1hcChuYW1lPT57XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzLmZpbmQoZWxlbWVudD0+ZWxlbWVudC5uYW1lPT09bmFtZSlcbiAgICB9KVxuICAgIGNvbnN0IHJlbW92ZVBhcmFudGhlc2lzID0gKGNvbXBvbmVudCk9PntcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5yZXBsYWNlKFwiKFwiLFwiXCIpLnJlcGxhY2UoXCJ9KVwiLFwifVwiKVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyh1bmlxdWVDb21wb25lbnRzLm1hcChmdW5jdGlvbihjb21wb25lbnQpe1xuICAgICAgICByZXR1cm4gY29udmVydFRvUmVhY3Rjb21wb25lbnQoY29tcG9uZW50KVxuICAgIH0pLm1hcChyZW1vdmVQYXJhbnRoZXNpcykuam9pbihcIlwiKSk7XG59XG4iLCJmdW5jdGlvbiBjcmVhdGVDb21wb25lbnQoY29tcG9uZW50KXtcblxuICAgIGxldCBjb21wb25lbnRTdHJpbmcgPSBjb252ZXJ0VG9SZWFjdGNvbXBvbmVudChjb21wb25lbnQpO1xuXG4gICAgLy8gZXZhbCBkb2VzIG5vdCBldmFsdWF0ZSBjbGFzcyBpZiBub3QgZXhjbG9zZWQgaW4gcGFyYW50aGVzaXMuXG4gICAgcmV0dXJuIGV2YWwoQmFiZWwudHJhbnNmb3JtKGNvbXBvbmVudFN0cmluZywgeyBwcmVzZXRzOiBbJ3JlYWN0J10sIHBsdWdpbnM6IFtcInRyYW5zZm9ybS1lczIwMTUtY2xhc3Nlc1wiXSAgfSkuY29kZSlcbn1cblxuXG4vLyBFbGVtZW50cyB0byAgcmVhY3QgY29tcG9uZW50LlxuZnVuY3Rpb24gY29udmVydFRvUmVhY3Rjb21wb25lbnQgKGNvbXBvbmVudCl7XG5cbiAgICBsZXQgbWFya3VwID0gXCJtYXJrdXBcIjtcblxuICAgIGNvbXBvbmVudC5ldmVudHMuZm9yRWFjaChldmVudD0+e1xuICAgICAgICBldmVudC5pZCA9IGV2ZW50LmlkLnJlcGxhY2UoXCItXCIsXCJcIik7XG4gICAgfSlcblxuICAgIGxldCBnZXRDb21wb25lbnROYW1lSW5NYXJrdXA9IChjb21wb25lbnQpPT57XG4gICAgICAgIHJldHVybiBjb21wb25lbnRbbWFya3VwXS5yZXBsYWNlKFwiPlwiLGAgey4uLnRoaXMucHJvcHN9Pnt0aGlzLnByb3BzLmNoaWxkcmVufWApXG4gICAgfVxuXG4gICAgbGV0IGdldENvbXBvbmVudEV2ZW50ZWRNYXJrdXAgPSAobWFya3VwLCBldmVudHMpPT57XG4gICAgICAgIGV2ZW50cy5mb3JFYWNoKGV2ZW50PT57XG4gICAgICAgICAgICBsZXQgaWQgPSBgaWQ9XCIke2V2ZW50LmlkfVwiYDtcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIG1hcmt1cCBjb250YWlucyB0aGUgaWQuXG4gICAgICAgICAgICBpZihtYXJrdXAuaW5jbHVkZXMoaWQpKXtcbiAgICAgICAgICAgICAgICBtYXJrdXAgPSBtYXJrdXAucmVwbGFjZShpZCwgYCR7aWR9ICR7ZXZlbnQubmFtZX09e3RoaXMuJHtldmVudC5pZCtldmVudC5uYW1lfS5iaW5kKHRoaXMpfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaXRzIGEgY2hpbGQgY29tcG9uZW50LlxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBtYXJrdXAgPSBtYXJrdXAucmVwbGFjZShgPCR7ZXZlbnQuaWR9YCxgPCR7ZXZlbnQuaWR9ICR7ZXZlbnQubmFtZX09e3RoaXMuJHtldmVudC5pZCtldmVudC5uYW1lfS5iaW5kKHRoaXMpfWApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICByZXR1cm4gbWFya3VwLnNwbGl0KFwie3N0YXRlLlwiKS5qb2luKFwie3RoaXMuc3RhdGUuXCIpXG4gICAgfVxuXG4gICAgLy8gY2hlY2tzIGlmIHN0YXRlIG92ZXJyaWRlIGlzIG9uLiB0aGVuIGFkZHMgc3RhdGUgcHJvcCB0byBjaGlsZCBcbiAgICBsZXQgZ2V0U3RhdGVkTWFya3VwID0gKG1hcmt1cCk9PntcbiAgICAgICAgLy8gZm9yIGFsbCB0aGUgY29uZmlnLlxuICAgICAgICAvLyBmaWx0ZXIgY2hpbGQgd2l0aCBvdmVyaWRlIHN0YXRlIGlzIHRydWVcbiAgICAgICAgbGV0IGNvbmZpZyA9IEpTT04ucGFyc2UoY29tcG9uZW50LmNvbmZpZyk7XG4gICAgICAgIGxldCBjaGlsZHJlbkNvbmZpZyA9IE9iamVjdC5rZXlzKGNvbmZpZyk7XG4gICAgICAgIGNoaWxkcmVuQ29uZmlnLmZvckVhY2goY2hpbGROYW1lPT57XG5cbiAgICAgICAgICAgIC8vIFBSRUNBVVRJT04gOiBFZGl0IG1hcmt1cCBvbmx5IGZvciBzaG93SGlkZVByb3BcbiAgICAgICAgICAgIGlmKGNvbmZpZ1tjaGlsZE5hbWVdLnNob3dIaWRlUHJvcCAmJiAhY29uZmlnW2NoaWxkTmFtZV0ub3ZlcnJpZGUpe1xuICAgICAgICAgICAgICAgIGxldCBjaGlsZE1hcmt1cCA9IGA8JHtjaGlsZE5hbWV9PjwvJHtjaGlsZE5hbWV9PmA7XG4gICAgICAgICAgICAgICAgbGV0IHNob3dIaWRlQ2hpbGQgPSBge3RoaXMuc3RhdGUuJHtjb25maWdbY2hpbGROYW1lXS5zaG93SGlkZVByb3B9ID8gJHtjaGlsZE1hcmt1cH06IG51bGx9YFxuICAgICAgICAgICAgICAgIGlmKG1hcmt1cC5pbmNsdWRlcyhjaGlsZE1hcmt1cCkpe1xuICAgICAgICAgICAgICAgICAgICBtYXJrdXAgPSBtYXJrdXAucmVwbGFjZShjaGlsZE1hcmt1cCwgc2hvd0hpZGVDaGlsZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFBSRUNBVVRJT046IEVkaXQgbWFya3VwIG9ubHkgZm9yIG92ZXJyaWRlXG4gICAgICAgICAgICBpZihjb25maWdbY2hpbGROYW1lXS5vdmVycmlkZSAmJiAhY29uZmlnW2NoaWxkTmFtZV0uc2hvd0hpZGVQcm9wKXtcbiAgICAgICAgICAgICAgICBtYXJrdXAgPSBtYXJrdXAucmVwbGFjZShjaGlsZE5hbWUsIGNoaWxkTmFtZStgIHN0YXRlPXt0aGlzLnN0YXRlLiR7Y2hpbGROYW1lfX1gKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBQUkVDQVVUSU9OOiBFZGl0IG1hcmt1cCBmb3IgYm90aCBjaGFuZ2VzLlxuICAgICAgICAgICAgaWYoY29uZmlnW2NoaWxkTmFtZV0uc2hvd0hpZGVQcm9wICYmIGNvbmZpZ1tjaGlsZE5hbWVdLm92ZXJyaWRlKXtcblxuICAgICAgICAgICAgICAgIC8vMS4gc2hvdyBvciBoaWRlXG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkTWFya3VwID0gYDwke2NoaWxkTmFtZX0+PC8ke2NoaWxkTmFtZX0+YDtcbiAgICAgICAgICAgICAgICBsZXQgc2hvd0hpZGVDaGlsZCA9IGB0aGlzLnN0YXRlLiR7c2hvd0hpZGVDaGlsZH0gPyAke2NoaWxkTWFya3VwfTogbnVsbGBcbiAgICAgICAgICAgICAgICBpZihtYXJrdXAuaW5jbHVkZXMoY2hpbGRNYXJrdXApKXtcbiAgICAgICAgICAgICAgICAgICAgbWFya3VwID0gbWFya3VwLnJlcGxhY2UoY2hpbGRNYXJrdXAsIHNob3dIaWRlQ2hpbGQpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8yLiBvdmVycmlkZSBzdGF0ZS5cbiAgICAgICAgICAgICAgICBtYXJrdXAgPSBtYXJrdXAucmVwbGFjZShjaGlsZE5hbWUsIGNoaWxkTmFtZStgIHN0YXRlPXt0aGlzLnN0YXRlLiR7Y2hpbGROYW1lfX1gKVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFBSRUNBVVRJT046IEVkaXQgbWFya3VwIGZvciByZW5kZXJpbmcgbGlzdC4gU2hvdWxkIG5vdCB1c2Ugb3RoZXIgY29uZmlndXJhdGlvbiB3aGlsZSB1c2luZyB0aGlzLlxuICAgICAgICAgICAgaWYoY29uZmlnW2NoaWxkTmFtZV0ucmVuZGVyTGlzdFByb3AgJiYgIWNvbmZpZ1tjaGlsZE5hbWVdLm92ZXJyaWRlICYmICFjb25maWdbY2hpbGROYW1lXS5zaG93SGlkZUNoaWxkKXtcbiAgICAgICAgICAgICAgICBsZXQgY2hpbGRNYXJrdXAgPSBgPCR7Y2hpbGROYW1lfT48LyR7Y2hpbGROYW1lfT5gO1xuXG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkTWFya3VwV2l0aFByb3BzID0gYDwke2NoaWxkTmFtZX0gc3RhdGU9e2l0ZW19IGtleT17aX0+PC8ke2NoaWxkTmFtZX0+YDtcbiAgICAgICAgICAgICAgICBsZXQgcmVuZGVyTGlzdE1hcmt1cCA9IGB7dGhpcy5zdGF0ZS4ke2NvbmZpZ1tjaGlsZE5hbWVdLnJlbmRlckxpc3RQcm9wfS5tYXAoKGl0ZW0saSk9PiR7Y2hpbGRNYXJrdXBXaXRoUHJvcHN9KX1gO1xuXG4gICAgICAgICAgICAgICAgbWFya3VwID0gIG1hcmt1cC5yZXBsYWNlKGNoaWxkTWFya3VwLCByZW5kZXJMaXN0TWFya3VwKTsgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIG1hcmt1cDtcbiAgICB9XG5cbiAgICBsZXQgZ2V0Q29tcG9uZW50UmVkdWNlcnMgPSAoZXZlbnRzKSA9PiB7XG5cbiAgICAgICAgcmV0dXJuIGV2ZW50cy5tYXAoZXZlbnQ9PntcbiAgICAgICAgICAgIGxldCBmdW5jdGlvbk5hbWUgPSBldmVudC5pZCtldmVudC5uYW1lO1xuICAgICAgICAgICAgbGV0IGZ1bmN0aW9uRGVmID0gIGBcbiAgICAgICAgICAgICAgICB2YXIgc3RhdGUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUpKVxuICAgICAgICAgICAgICAgICR7ZXZlbnQucmVkdWNlcn1cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtgO1xuXG4gICAgICAgICAgICBpZihldmVudC5wdWJsaXNoYWJsZT09PXRydWUpe1xuICAgICAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgICAgICAgICR7ZnVuY3Rpb25OYW1lfSAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHtmdW5jdGlvbkRlZn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlYnVnZ2VyOygxKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy4ke2V2ZW50LnB1Ymxpc2hOYW1lfT8gdGhpcy5wcm9wcy4ke2V2ZW50LnB1Ymxpc2hOYW1lfShlKTpudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgICAgICAgICR7ZnVuY3Rpb25OYW1lfSAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHtmdW5jdGlvbkRlZn1cbiAgICAgICAgICAgICAgICAgICAgfWBcbiAgICAgICAgfSkuam9pbihcIlxcblwiKVxuICAgIH1cbiAgICBcbiAgICBsZXQgY29tcG9uZW50TmFtZWRNYWtydXAgPSBnZXRDb21wb25lbnROYW1lSW5NYXJrdXAoY29tcG9uZW50KTtcbiAgICBsZXQgc3RhdGVPdmVyaWRlTWFya3VwID0gZ2V0U3RhdGVkTWFya3VwKGNvbXBvbmVudE5hbWVkTWFrcnVwKVxuICAgIGxldCBjb21wb25lbnRFdmVudGVkTWFya3VwID0gZ2V0Q29tcG9uZW50RXZlbnRlZE1hcmt1cChzdGF0ZU92ZXJpZGVNYXJrdXAsIGNvbXBvbmVudC5ldmVudHMpXG4gICAgbGV0IGNvbXBvbmVudFJlZHVjZXJzID0gZ2V0Q29tcG9uZW50UmVkdWNlcnMoY29tcG9uZW50LmV2ZW50cylcbiAgICBsZXQgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudC5uYW1lLnNwbGl0KFwiIFwiKS5qb2luKFwiXCIpXG4gICAgbGV0IGNvbXBvbmVudFN0YXRlID0gY29tcG9uZW50LnN0YXRlO1xuICAgIGxldCBSZWFjdENvbXBvbmVudCA9IFxuICAgIGAoXG4gICAgY2xhc3MgJHtjb21wb25lbnROYW1lfSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgXG4gICAgICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5wcm9wcy5zdGF0ZSB8fCAke2NvbXBvbmVudFN0YXRlfTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAke2NvbXBvbmVudFJlZHVjZXJzfVxuICAgIFxuICAgICAgICByZW5kZXIoKSB7XG4gICAgXG4gICAgICAgICAgICByZXR1cm4gKCR7Y29tcG9uZW50RXZlbnRlZE1hcmt1cH0pXG4gICAgICAgIH1cbiAgICB9KVxuICAgIGBcbiAgICByZXR1cm4gUmVhY3RDb21wb25lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGNyZWF0ZUNvbXBvbmVudCxcbiAgICBjb252ZXJ0VG9SZWFjdGNvbXBvbmVudFxufSIsIi8vIExpYnJhcmllcy5cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5pbXBvcnQgTWVzc2FnZUNvbXBvbmVudCBmcm9tIFwiLi4vTWVzc2FnZUNvbXBvbmVudFwiO1xuXG5jbGFzcyBNZXNzYWdlc0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBsZXQgbWVzc2FnZXMgPSB0aGlzLnByb3BzLm1lc3NhZ2VzO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnNvbGVcIj5cbiAgICAgICAgICAgICAgICAgICAge21lc3NhZ2VzLm1hcCgobWVzc2FnZSxpbmRleCk9PjxNZXNzYWdlQ29tcG9uZW50IGtleT17aW5kZXh9IG1lc3NhZ2U9e21lc3NhZ2V9Lz4pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlc0NvbXBvbmVudDsiLCIvLyBMaWJyYXJpZXMuXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5cbi8vIERlcGVuZGVuY2llcy5cbmltcG9ydCBcIi4vSW5kZXgvaW5kZXguY3NzXCI7XG5cbi8vIENvbXBvbmVudHMuXG5cblxuaW1wb3J0IEFzc2V0cyBmcm9tIFwiLi9Bc3NldHNcIjtcbmltcG9ydCBDb21wb25lbnRzIGZyb20gXCIuL0NvbXBvbmVudHNcIjtcbmltcG9ydCBEcmFnZ2FibGVDb21wb25lbnQgZnJvbSBcIi4vVXRpbGl0aWVzL0NvbXBvbmVudHMvRHJhZ2dhYmxlQ29tcG9uZW50XCI7XG5pbXBvcnQgRWRpdG9yIGZyb20gXCIuL0VkaXRvclwiO1xuaW1wb3J0IEV2ZW50cyBmcm9tIFwiLi9FdmVudHNcIjtcbmltcG9ydCBIaXN0b3J5IGZyb20gXCIuL0hpc3RvcnlcIjtcbmltcG9ydCBQcmV2aWV3IGZyb20gXCIuL1ByZXZpZXdcIjtcblxuLy8gUmVkdWNlcnMuXG5pbXBvcnQgeyB1cGRhdGVFdmVudCwgdXBkYXRlQ29uZmlnLCBzYXZlRWxlbWVudCwgdXBkYXRlU2VsZWN0ZWRDb21wb25lbnQgfSBmcm9tIFwiLi9JbmRleC9SZWR1Y2VyXCI7XG5cbi8vIFV0aWxzXG5pbXBvcnQge3JlYWREYXRhLCB3cml0ZURhdGF9IGZyb20gXCIuL3V0aWxpdGllcy9TdG9yYWdlXCI7XG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIGxldCBjb21wb25lbnRzID0gcmVhZERhdGEoXCJ1aS1lZGl0b3JcIik7XG4gICAgICAgIGxldCBjb21wb25lbnROYW1lcyA9IGNvbXBvbmVudHMubWFwKGNvbXBvbmVudD0+Y29tcG9uZW50Lm5hbWUpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY29tcG9uZW50czogY29tcG9uZW50cyxcbiAgICAgICAgICAgIHNlbGVjdGVkVGFnIDogXCJcIixcbiAgICAgICAgICAgIGNvbXBvbmVudDoge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgbWFya3VwOiBcIlwiLFxuICAgICAgICAgICAgICAgIHN0eWxlOiBcIlwiLFxuICAgICAgICAgICAgICAgIHN0YXRlOiBcInsgfVwiLFxuICAgICAgICAgICAgICAgIGV2ZW50czogW11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZWxlY3RlZENvbXBvbmVudDogXCJcIixcbiAgICAgICAgICAgIGZvbGRlcnM6IHJlYWREYXRhKFwiZm9sZGVyc1wiKSB8fCBbe1xuICAgICAgICAgICAgICAgIHR5cGU6IFwibm9Gb2xkZXJcIixcbiAgICAgICAgICAgICAgICBjb250ZW50czogY29tcG9uZW50TmFtZXMsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJcIlxuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICBzaG93RWRpdG9yOiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlQ29uZmlnID0gdXBkYXRlQ29uZmlnLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlRXZlbnQgPSB1cGRhdGVFdmVudC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNhdmVFbGVtZW50ID0gc2F2ZUVsZW1lbnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZENvbXBvbmVudCA9IHVwZGF0ZVNlbGVjdGVkQ29tcG9uZW50LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgdXBkYXRlUHJldmlldyhlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcHJldmlld0NvbXBvbmVudDogZWxlbWVudFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1cGRhdGVTdHlsZXMoKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBlbGVtZW50OiB0aGlzLnN0YXRlLnNlbGVjdGVkQ29tcG9uZW50XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgdXBkYXRlRm9sZGVycyhmb2xkZXJzKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBmb2xkZXJzOiBmb2xkZXJzXG4gICAgICAgIH0pXG4gICAgICAgIHdyaXRlRGF0YShcImZvbGRlcnNcIiwgZm9sZGVycylcbiAgICB9XG5cbiAgICBvcGVuRWRpdG9yKCl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2hvd0VkaXRvcjogdHJ1ZVxuICAgICAgICB9KVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkQ29tcG9uZW50ID0gdGhpcy5zdGF0ZS5zZWxlY3RlZENvbXBvbmVudCB8fCB0aGlzLnN0YXRlLmNvbXBvbmVudDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPERyYWdnYWJsZUNvbXBvbmVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMDApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHM9e3RoaXMuc3RhdGUuY29tcG9uZW50c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2xkZXJzPXt0aGlzLnN0YXRlLmZvbGRlcnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRDb21wb25lbnQ9e3RoaXMuc3RhdGUuc2VsZWN0ZWRDb21wb25lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJDb21wb25lbnRzXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk9wZW5FZGl0b3I9e3RoaXMub3BlbkVkaXRvci5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdGlvbj17dGhpcy51cGRhdGVTZWxlY3RlZENvbXBvbmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Gb2xkZXJzVXBkYXRlPXt0aGlzLnVwZGF0ZUZvbGRlcnMuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlQ29tcG9uZW50PlxuXG4gICAgICAgICAgICAgICAgICAgIDxEcmFnZ2FibGVDb21wb25lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXRzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJBc3NldHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9EcmFnZ2FibGVDb21wb25lbnQ+XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIDxEcmFnZ2FibGVDb21wb25lbnQ+XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8RXZlbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMDApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17c2VsZWN0ZWRDb21wb25lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRUYWc9e3RoaXMuc3RhdGUuc2VsZWN0ZWRUYWd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cz17dGhpcy5zdGF0ZS5jb21wb25lbnRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRXZlbnRzVXBkYXRlPXt0aGlzLnVwZGF0ZUV2ZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29uZmlnVXBkYXRlPXt0aGlzLnVwZGF0ZUNvbmZpZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkV2ZW50c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgIFxuICAgICAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZUNvbXBvbmVudD5cbiAgICBcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hvd0VkaXRvcj8gXG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlQ29tcG9uZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMDApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50PXtzZWxlY3RlZENvbXBvbmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17c2VsZWN0ZWRDb21wb25lbnQubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya3VwPXtzZWxlY3RlZENvbXBvbmVudC5tYXJrdXB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzZWxlY3RlZENvbXBvbmVudC5zdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU9e3NlbGVjdGVkQ29tcG9uZW50LnN0YXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkVkaXRvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNhdmU9e3RoaXMuc2F2ZUVsZW1lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlQ29tcG9uZW50PlxuICAgICAgICAgICAgICAgICAgICA6IFxuICAgICAgICAgICAgICAgICAgICBudWxsfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlQ29tcG9uZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFByZXZpZXcgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMDApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17c2VsZWN0ZWRDb21wb25lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJQcmV2aWV3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlQ29tcG9uZW50PlxuICAgIFxuICAgICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlQ29tcG9uZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEhpc3RvcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkhpc3RvcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9EcmFnZ2FibGVDb21wb25lbnQ+XG4gICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGUpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxEcmFnZ2FibGVDb21wb25lbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxIaXN0b3J5XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiSGlzdG9yeVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9EcmFnZ2FibGVDb21wb25lbnQ+XG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxufVxuXG5cblJlYWN0RE9NLnJlbmRlcig8SW5kZXggLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5kZXhcIikpOyIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuOC42XG4gKiByZWFjdC5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0Jzt2YXIgaz1yZXF1aXJlKFwib2JqZWN0LWFzc2lnblwiKSxuPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3IscD1uP1N5bWJvbC5mb3IoXCJyZWFjdC5lbGVtZW50XCIpOjYwMTAzLHE9bj9TeW1ib2wuZm9yKFwicmVhY3QucG9ydGFsXCIpOjYwMTA2LHI9bj9TeW1ib2wuZm9yKFwicmVhY3QuZnJhZ21lbnRcIik6NjAxMDcsdD1uP1N5bWJvbC5mb3IoXCJyZWFjdC5zdHJpY3RfbW9kZVwiKTo2MDEwOCx1PW4/U3ltYm9sLmZvcihcInJlYWN0LnByb2ZpbGVyXCIpOjYwMTE0LHY9bj9TeW1ib2wuZm9yKFwicmVhY3QucHJvdmlkZXJcIik6NjAxMDksdz1uP1N5bWJvbC5mb3IoXCJyZWFjdC5jb250ZXh0XCIpOjYwMTEwLHg9bj9TeW1ib2wuZm9yKFwicmVhY3QuY29uY3VycmVudF9tb2RlXCIpOjYwMTExLHk9bj9TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIik6NjAxMTIsej1uP1N5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZVwiKTo2MDExMyxhYT1uP1N5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpOlxuNjAxMTUsYmE9bj9TeW1ib2wuZm9yKFwicmVhY3QubGF6eVwiKTo2MDExNixBPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5pdGVyYXRvcjtmdW5jdGlvbiBjYShhLGIsZCxjLGUsZyxoLGYpe2lmKCFhKXthPXZvaWQgMDtpZih2b2lkIDA9PT1iKWE9RXJyb3IoXCJNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCBmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLlwiKTtlbHNle3ZhciBsPVtkLGMsZSxnLGgsZl0sbT0wO2E9RXJyb3IoYi5yZXBsYWNlKC8lcy9nLGZ1bmN0aW9uKCl7cmV0dXJuIGxbbSsrXX0pKTthLm5hbWU9XCJJbnZhcmlhbnQgVmlvbGF0aW9uXCJ9YS5mcmFtZXNUb1BvcD0xO3Rocm93IGE7fX1cbmZ1bmN0aW9uIEIoYSl7Zm9yKHZhciBiPWFyZ3VtZW50cy5sZW5ndGgtMSxkPVwiaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL2Vycm9yLWRlY29kZXIuaHRtbD9pbnZhcmlhbnQ9XCIrYSxjPTA7YzxiO2MrKylkKz1cIiZhcmdzW109XCIrZW5jb2RlVVJJQ29tcG9uZW50KGFyZ3VtZW50c1tjKzFdKTtjYSghMSxcIk1pbmlmaWVkIFJlYWN0IGVycm9yICNcIithK1wiOyB2aXNpdCAlcyBmb3IgdGhlIGZ1bGwgbWVzc2FnZSBvciB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgZm9yIGZ1bGwgZXJyb3JzIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuIFwiLGQpfXZhciBDPXtpc01vdW50ZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hMX0sZW5xdWV1ZUZvcmNlVXBkYXRlOmZ1bmN0aW9uKCl7fSxlbnF1ZXVlUmVwbGFjZVN0YXRlOmZ1bmN0aW9uKCl7fSxlbnF1ZXVlU2V0U3RhdGU6ZnVuY3Rpb24oKXt9fSxEPXt9O1xuZnVuY3Rpb24gRShhLGIsZCl7dGhpcy5wcm9wcz1hO3RoaXMuY29udGV4dD1iO3RoaXMucmVmcz1EO3RoaXMudXBkYXRlcj1kfHxDfUUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9e307RS5wcm90b3R5cGUuc2V0U3RhdGU9ZnVuY3Rpb24oYSxiKXtcIm9iamVjdFwiIT09dHlwZW9mIGEmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBhJiZudWxsIT1hP0IoXCI4NVwiKTp2b2lkIDA7dGhpcy51cGRhdGVyLmVucXVldWVTZXRTdGF0ZSh0aGlzLGEsYixcInNldFN0YXRlXCIpfTtFLnByb3RvdHlwZS5mb3JjZVVwZGF0ZT1mdW5jdGlvbihhKXt0aGlzLnVwZGF0ZXIuZW5xdWV1ZUZvcmNlVXBkYXRlKHRoaXMsYSxcImZvcmNlVXBkYXRlXCIpfTtmdW5jdGlvbiBGKCl7fUYucHJvdG90eXBlPUUucHJvdG90eXBlO2Z1bmN0aW9uIEcoYSxiLGQpe3RoaXMucHJvcHM9YTt0aGlzLmNvbnRleHQ9Yjt0aGlzLnJlZnM9RDt0aGlzLnVwZGF0ZXI9ZHx8Q312YXIgSD1HLnByb3RvdHlwZT1uZXcgRjtcbkguY29uc3RydWN0b3I9RztrKEgsRS5wcm90b3R5cGUpO0guaXNQdXJlUmVhY3RDb21wb25lbnQ9ITA7dmFyIEk9e2N1cnJlbnQ6bnVsbH0sSj17Y3VycmVudDpudWxsfSxLPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksTD17a2V5OiEwLHJlZjohMCxfX3NlbGY6ITAsX19zb3VyY2U6ITB9O1xuZnVuY3Rpb24gTShhLGIsZCl7dmFyIGM9dm9pZCAwLGU9e30sZz1udWxsLGg9bnVsbDtpZihudWxsIT1iKWZvcihjIGluIHZvaWQgMCE9PWIucmVmJiYoaD1iLnJlZiksdm9pZCAwIT09Yi5rZXkmJihnPVwiXCIrYi5rZXkpLGIpSy5jYWxsKGIsYykmJiFMLmhhc093blByb3BlcnR5KGMpJiYoZVtjXT1iW2NdKTt2YXIgZj1hcmd1bWVudHMubGVuZ3RoLTI7aWYoMT09PWYpZS5jaGlsZHJlbj1kO2Vsc2UgaWYoMTxmKXtmb3IodmFyIGw9QXJyYXkoZiksbT0wO208ZjttKyspbFttXT1hcmd1bWVudHNbbSsyXTtlLmNoaWxkcmVuPWx9aWYoYSYmYS5kZWZhdWx0UHJvcHMpZm9yKGMgaW4gZj1hLmRlZmF1bHRQcm9wcyxmKXZvaWQgMD09PWVbY10mJihlW2NdPWZbY10pO3JldHVybnskJHR5cGVvZjpwLHR5cGU6YSxrZXk6ZyxyZWY6aCxwcm9wczplLF9vd25lcjpKLmN1cnJlbnR9fVxuZnVuY3Rpb24gZGEoYSxiKXtyZXR1cm57JCR0eXBlb2Y6cCx0eXBlOmEudHlwZSxrZXk6YixyZWY6YS5yZWYscHJvcHM6YS5wcm9wcyxfb3duZXI6YS5fb3duZXJ9fWZ1bmN0aW9uIE4oYSl7cmV0dXJuXCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSYmYS4kJHR5cGVvZj09PXB9ZnVuY3Rpb24gZXNjYXBlKGEpe3ZhciBiPXtcIj1cIjpcIj0wXCIsXCI6XCI6XCI9MlwifTtyZXR1cm5cIiRcIisoXCJcIithKS5yZXBsYWNlKC9bPTpdL2csZnVuY3Rpb24oYSl7cmV0dXJuIGJbYV19KX12YXIgTz0vXFwvKy9nLFA9W107ZnVuY3Rpb24gUShhLGIsZCxjKXtpZihQLmxlbmd0aCl7dmFyIGU9UC5wb3AoKTtlLnJlc3VsdD1hO2Uua2V5UHJlZml4PWI7ZS5mdW5jPWQ7ZS5jb250ZXh0PWM7ZS5jb3VudD0wO3JldHVybiBlfXJldHVybntyZXN1bHQ6YSxrZXlQcmVmaXg6YixmdW5jOmQsY29udGV4dDpjLGNvdW50OjB9fVxuZnVuY3Rpb24gUihhKXthLnJlc3VsdD1udWxsO2Eua2V5UHJlZml4PW51bGw7YS5mdW5jPW51bGw7YS5jb250ZXh0PW51bGw7YS5jb3VudD0wOzEwPlAubGVuZ3RoJiZQLnB1c2goYSl9XG5mdW5jdGlvbiBTKGEsYixkLGMpe3ZhciBlPXR5cGVvZiBhO2lmKFwidW5kZWZpbmVkXCI9PT1lfHxcImJvb2xlYW5cIj09PWUpYT1udWxsO3ZhciBnPSExO2lmKG51bGw9PT1hKWc9ITA7ZWxzZSBzd2l0Y2goZSl7Y2FzZSBcInN0cmluZ1wiOmNhc2UgXCJudW1iZXJcIjpnPSEwO2JyZWFrO2Nhc2UgXCJvYmplY3RcIjpzd2l0Y2goYS4kJHR5cGVvZil7Y2FzZSBwOmNhc2UgcTpnPSEwfX1pZihnKXJldHVybiBkKGMsYSxcIlwiPT09Yj9cIi5cIitUKGEsMCk6YiksMTtnPTA7Yj1cIlwiPT09Yj9cIi5cIjpiK1wiOlwiO2lmKEFycmF5LmlzQXJyYXkoYSkpZm9yKHZhciBoPTA7aDxhLmxlbmd0aDtoKyspe2U9YVtoXTt2YXIgZj1iK1QoZSxoKTtnKz1TKGUsZixkLGMpfWVsc2UgaWYobnVsbD09PWF8fFwib2JqZWN0XCIhPT10eXBlb2YgYT9mPW51bGw6KGY9QSYmYVtBXXx8YVtcIkBAaXRlcmF0b3JcIl0sZj1cImZ1bmN0aW9uXCI9PT10eXBlb2YgZj9mOm51bGwpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBmKWZvcihhPWYuY2FsbChhKSxoPVxuMDshKGU9YS5uZXh0KCkpLmRvbmU7KWU9ZS52YWx1ZSxmPWIrVChlLGgrKyksZys9UyhlLGYsZCxjKTtlbHNlXCJvYmplY3RcIj09PWUmJihkPVwiXCIrYSxCKFwiMzFcIixcIltvYmplY3QgT2JqZWN0XVwiPT09ZD9cIm9iamVjdCB3aXRoIGtleXMge1wiK09iamVjdC5rZXlzKGEpLmpvaW4oXCIsIFwiKStcIn1cIjpkLFwiXCIpKTtyZXR1cm4gZ31mdW5jdGlvbiBVKGEsYixkKXtyZXR1cm4gbnVsbD09YT8wOlMoYSxcIlwiLGIsZCl9ZnVuY3Rpb24gVChhLGIpe3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJm51bGwhPWEua2V5P2VzY2FwZShhLmtleSk6Yi50b1N0cmluZygzNil9ZnVuY3Rpb24gZWEoYSxiKXthLmZ1bmMuY2FsbChhLmNvbnRleHQsYixhLmNvdW50KyspfVxuZnVuY3Rpb24gZmEoYSxiLGQpe3ZhciBjPWEucmVzdWx0LGU9YS5rZXlQcmVmaXg7YT1hLmZ1bmMuY2FsbChhLmNvbnRleHQsYixhLmNvdW50KyspO0FycmF5LmlzQXJyYXkoYSk/VihhLGMsZCxmdW5jdGlvbihhKXtyZXR1cm4gYX0pOm51bGwhPWEmJihOKGEpJiYoYT1kYShhLGUrKCFhLmtleXx8YiYmYi5rZXk9PT1hLmtleT9cIlwiOihcIlwiK2Eua2V5KS5yZXBsYWNlKE8sXCIkJi9cIikrXCIvXCIpK2QpKSxjLnB1c2goYSkpfWZ1bmN0aW9uIFYoYSxiLGQsYyxlKXt2YXIgZz1cIlwiO251bGwhPWQmJihnPShcIlwiK2QpLnJlcGxhY2UoTyxcIiQmL1wiKStcIi9cIik7Yj1RKGIsZyxjLGUpO1UoYSxmYSxiKTtSKGIpfWZ1bmN0aW9uIFcoKXt2YXIgYT1JLmN1cnJlbnQ7bnVsbD09PWE/QihcIjMyMVwiKTp2b2lkIDA7cmV0dXJuIGF9XG52YXIgWD17Q2hpbGRyZW46e21hcDpmdW5jdGlvbihhLGIsZCl7aWYobnVsbD09YSlyZXR1cm4gYTt2YXIgYz1bXTtWKGEsYyxudWxsLGIsZCk7cmV0dXJuIGN9LGZvckVhY2g6ZnVuY3Rpb24oYSxiLGQpe2lmKG51bGw9PWEpcmV0dXJuIGE7Yj1RKG51bGwsbnVsbCxiLGQpO1UoYSxlYSxiKTtSKGIpfSxjb3VudDpmdW5jdGlvbihhKXtyZXR1cm4gVShhLGZ1bmN0aW9uKCl7cmV0dXJuIG51bGx9LG51bGwpfSx0b0FycmF5OmZ1bmN0aW9uKGEpe3ZhciBiPVtdO1YoYSxiLG51bGwsZnVuY3Rpb24oYSl7cmV0dXJuIGF9KTtyZXR1cm4gYn0sb25seTpmdW5jdGlvbihhKXtOKGEpP3ZvaWQgMDpCKFwiMTQzXCIpO3JldHVybiBhfX0sY3JlYXRlUmVmOmZ1bmN0aW9uKCl7cmV0dXJue2N1cnJlbnQ6bnVsbH19LENvbXBvbmVudDpFLFB1cmVDb21wb25lbnQ6RyxjcmVhdGVDb250ZXh0OmZ1bmN0aW9uKGEsYil7dm9pZCAwPT09YiYmKGI9bnVsbCk7YT17JCR0eXBlb2Y6dyxfY2FsY3VsYXRlQ2hhbmdlZEJpdHM6Yixcbl9jdXJyZW50VmFsdWU6YSxfY3VycmVudFZhbHVlMjphLF90aHJlYWRDb3VudDowLFByb3ZpZGVyOm51bGwsQ29uc3VtZXI6bnVsbH07YS5Qcm92aWRlcj17JCR0eXBlb2Y6dixfY29udGV4dDphfTtyZXR1cm4gYS5Db25zdW1lcj1hfSxmb3J3YXJkUmVmOmZ1bmN0aW9uKGEpe3JldHVybnskJHR5cGVvZjp5LHJlbmRlcjphfX0sbGF6eTpmdW5jdGlvbihhKXtyZXR1cm57JCR0eXBlb2Y6YmEsX2N0b3I6YSxfc3RhdHVzOi0xLF9yZXN1bHQ6bnVsbH19LG1lbW86ZnVuY3Rpb24oYSxiKXtyZXR1cm57JCR0eXBlb2Y6YWEsdHlwZTphLGNvbXBhcmU6dm9pZCAwPT09Yj9udWxsOmJ9fSx1c2VDYWxsYmFjazpmdW5jdGlvbihhLGIpe3JldHVybiBXKCkudXNlQ2FsbGJhY2soYSxiKX0sdXNlQ29udGV4dDpmdW5jdGlvbihhLGIpe3JldHVybiBXKCkudXNlQ29udGV4dChhLGIpfSx1c2VFZmZlY3Q6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gVygpLnVzZUVmZmVjdChhLGIpfSx1c2VJbXBlcmF0aXZlSGFuZGxlOmZ1bmN0aW9uKGEsXG5iLGQpe3JldHVybiBXKCkudXNlSW1wZXJhdGl2ZUhhbmRsZShhLGIsZCl9LHVzZURlYnVnVmFsdWU6ZnVuY3Rpb24oKXt9LHVzZUxheW91dEVmZmVjdDpmdW5jdGlvbihhLGIpe3JldHVybiBXKCkudXNlTGF5b3V0RWZmZWN0KGEsYil9LHVzZU1lbW86ZnVuY3Rpb24oYSxiKXtyZXR1cm4gVygpLnVzZU1lbW8oYSxiKX0sdXNlUmVkdWNlcjpmdW5jdGlvbihhLGIsZCl7cmV0dXJuIFcoKS51c2VSZWR1Y2VyKGEsYixkKX0sdXNlUmVmOmZ1bmN0aW9uKGEpe3JldHVybiBXKCkudXNlUmVmKGEpfSx1c2VTdGF0ZTpmdW5jdGlvbihhKXtyZXR1cm4gVygpLnVzZVN0YXRlKGEpfSxGcmFnbWVudDpyLFN0cmljdE1vZGU6dCxTdXNwZW5zZTp6LGNyZWF0ZUVsZW1lbnQ6TSxjbG9uZUVsZW1lbnQ6ZnVuY3Rpb24oYSxiLGQpe251bGw9PT1hfHx2b2lkIDA9PT1hP0IoXCIyNjdcIixhKTp2b2lkIDA7dmFyIGM9dm9pZCAwLGU9ayh7fSxhLnByb3BzKSxnPWEua2V5LGg9YS5yZWYsZj1hLl9vd25lcjtpZihudWxsIT1cbmIpe3ZvaWQgMCE9PWIucmVmJiYoaD1iLnJlZixmPUouY3VycmVudCk7dm9pZCAwIT09Yi5rZXkmJihnPVwiXCIrYi5rZXkpO3ZhciBsPXZvaWQgMDthLnR5cGUmJmEudHlwZS5kZWZhdWx0UHJvcHMmJihsPWEudHlwZS5kZWZhdWx0UHJvcHMpO2ZvcihjIGluIGIpSy5jYWxsKGIsYykmJiFMLmhhc093blByb3BlcnR5KGMpJiYoZVtjXT12b2lkIDA9PT1iW2NdJiZ2b2lkIDAhPT1sP2xbY106YltjXSl9Yz1hcmd1bWVudHMubGVuZ3RoLTI7aWYoMT09PWMpZS5jaGlsZHJlbj1kO2Vsc2UgaWYoMTxjKXtsPUFycmF5KGMpO2Zvcih2YXIgbT0wO208YzttKyspbFttXT1hcmd1bWVudHNbbSsyXTtlLmNoaWxkcmVuPWx9cmV0dXJueyQkdHlwZW9mOnAsdHlwZTphLnR5cGUsa2V5OmcscmVmOmgscHJvcHM6ZSxfb3duZXI6Zn19LGNyZWF0ZUZhY3Rvcnk6ZnVuY3Rpb24oYSl7dmFyIGI9TS5iaW5kKG51bGwsYSk7Yi50eXBlPWE7cmV0dXJuIGJ9LGlzVmFsaWRFbGVtZW50Ok4sdmVyc2lvbjpcIjE2LjguNlwiLFxudW5zdGFibGVfQ29uY3VycmVudE1vZGU6eCx1bnN0YWJsZV9Qcm9maWxlcjp1LF9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEOntSZWFjdEN1cnJlbnREaXNwYXRjaGVyOkksUmVhY3RDdXJyZW50T3duZXI6Sixhc3NpZ246a319LFk9e2RlZmF1bHQ6WH0sWj1ZJiZYfHxZO21vZHVsZS5leHBvcnRzPVouZGVmYXVsdHx8WjtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gY2hlY2tEQ0UoKSB7XG4gIC8qIGdsb2JhbCBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gKi9cbiAgaWYgKFxuICAgIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gPT09ICd1bmRlZmluZWQnIHx8XG4gICAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5jaGVja0RDRSAhPT0gJ2Z1bmN0aW9uJ1xuICApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBUaGlzIGJyYW5jaCBpcyB1bnJlYWNoYWJsZSBiZWNhdXNlIHRoaXMgZnVuY3Rpb24gaXMgb25seSBjYWxsZWRcbiAgICAvLyBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGNvbmRpdGlvbiBpcyB0cnVlIG9ubHkgaW4gZGV2ZWxvcG1lbnQuXG4gICAgLy8gVGhlcmVmb3JlIGlmIHRoZSBicmFuY2ggaXMgc3RpbGwgaGVyZSwgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdhc24ndFxuICAgIC8vIHByb3Blcmx5IGFwcGxpZWQuXG4gICAgLy8gRG9uJ3QgY2hhbmdlIHRoZSBtZXNzYWdlLiBSZWFjdCBEZXZUb29scyByZWxpZXMgb24gaXQuIEFsc28gbWFrZSBzdXJlXG4gICAgLy8gdGhpcyBtZXNzYWdlIGRvZXNuJ3Qgb2NjdXIgZWxzZXdoZXJlIGluIHRoaXMgZnVuY3Rpb24sIG9yIGl0IHdpbGwgY2F1c2VcbiAgICAvLyBhIGZhbHNlIHBvc2l0aXZlLlxuICAgIHRocm93IG5ldyBFcnJvcignXl9eJyk7XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBWZXJpZnkgdGhhdCB0aGUgY29kZSBhYm92ZSBoYXMgYmVlbiBkZWFkIGNvZGUgZWxpbWluYXRlZCAoRENFJ2QpLlxuICAgIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5jaGVja0RDRShjaGVja0RDRSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIERldlRvb2xzIHNob3VsZG4ndCBjcmFzaCBSZWFjdCwgbm8gbWF0dGVyIHdoYXQuXG4gICAgLy8gV2Ugc2hvdWxkIHN0aWxsIHJlcG9ydCBpbiBjYXNlIHdlIGJyZWFrIHRoaXMgY29kZS5cbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gIH1cbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgLy8gRENFIGNoZWNrIHNob3VsZCBoYXBwZW4gYmVmb3JlIFJlYWN0RE9NIGJ1bmRsZSBleGVjdXRlcyBzbyB0aGF0XG4gIC8vIERldlRvb2xzIGNhbiByZXBvcnQgYmFkIG1pbmlmaWNhdGlvbiBkdXJpbmcgaW5qZWN0aW9uLlxuICBjaGVja0RDRSgpO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWRvbS5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1kb20uZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuOC42XG4gKiByZWFjdC1kb20ucHJvZHVjdGlvbi5taW4uanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4vKlxuIE1vZGVybml6ciAzLjAuMHByZSAoQ3VzdG9tIEJ1aWxkKSB8IE1JVFxuKi9cbid1c2Ugc3RyaWN0Jzt2YXIgYWE9cmVxdWlyZShcInJlYWN0XCIpLG49cmVxdWlyZShcIm9iamVjdC1hc3NpZ25cIikscj1yZXF1aXJlKFwic2NoZWR1bGVyXCIpO2Z1bmN0aW9uIGJhKGEsYixjLGQsZSxmLGcsaCl7aWYoIWEpe2E9dm9pZCAwO2lmKHZvaWQgMD09PWIpYT1FcnJvcihcIk1pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50IGZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuXCIpO2Vsc2V7dmFyIGw9W2MsZCxlLGYsZyxoXSxrPTA7YT1FcnJvcihiLnJlcGxhY2UoLyVzL2csZnVuY3Rpb24oKXtyZXR1cm4gbFtrKytdfSkpO2EubmFtZT1cIkludmFyaWFudCBWaW9sYXRpb25cIn1hLmZyYW1lc1RvUG9wPTE7dGhyb3cgYTt9fVxuZnVuY3Rpb24geChhKXtmb3IodmFyIGI9YXJndW1lbnRzLmxlbmd0aC0xLGM9XCJodHRwczovL3JlYWN0anMub3JnL2RvY3MvZXJyb3ItZGVjb2Rlci5odG1sP2ludmFyaWFudD1cIithLGQ9MDtkPGI7ZCsrKWMrPVwiJmFyZ3NbXT1cIitlbmNvZGVVUklDb21wb25lbnQoYXJndW1lbnRzW2QrMV0pO2JhKCExLFwiTWluaWZpZWQgUmVhY3QgZXJyb3IgI1wiK2ErXCI7IHZpc2l0ICVzIGZvciB0aGUgZnVsbCBtZXNzYWdlIG9yIHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCBmb3IgZnVsbCBlcnJvcnMgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4gXCIsYyl9YWE/dm9pZCAwOngoXCIyMjdcIik7ZnVuY3Rpb24gY2EoYSxiLGMsZCxlLGYsZyxoLGwpe3ZhciBrPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywzKTt0cnl7Yi5hcHBseShjLGspfWNhdGNoKG0pe3RoaXMub25FcnJvcihtKX19XG52YXIgZGE9ITEsZWE9bnVsbCxmYT0hMSxoYT1udWxsLGlhPXtvbkVycm9yOmZ1bmN0aW9uKGEpe2RhPSEwO2VhPWF9fTtmdW5jdGlvbiBqYShhLGIsYyxkLGUsZixnLGgsbCl7ZGE9ITE7ZWE9bnVsbDtjYS5hcHBseShpYSxhcmd1bWVudHMpfWZ1bmN0aW9uIGthKGEsYixjLGQsZSxmLGcsaCxsKXtqYS5hcHBseSh0aGlzLGFyZ3VtZW50cyk7aWYoZGEpe2lmKGRhKXt2YXIgaz1lYTtkYT0hMTtlYT1udWxsfWVsc2UgeChcIjE5OFwiKSxrPXZvaWQgMDtmYXx8KGZhPSEwLGhhPWspfX12YXIgbGE9bnVsbCxtYT17fTtcbmZ1bmN0aW9uIG5hKCl7aWYobGEpZm9yKHZhciBhIGluIG1hKXt2YXIgYj1tYVthXSxjPWxhLmluZGV4T2YoYSk7LTE8Yz92b2lkIDA6eChcIjk2XCIsYSk7aWYoIW9hW2NdKXtiLmV4dHJhY3RFdmVudHM/dm9pZCAwOngoXCI5N1wiLGEpO29hW2NdPWI7Yz1iLmV2ZW50VHlwZXM7Zm9yKHZhciBkIGluIGMpe3ZhciBlPXZvaWQgMDt2YXIgZj1jW2RdLGc9YixoPWQ7cGEuaGFzT3duUHJvcGVydHkoaCk/eChcIjk5XCIsaCk6dm9pZCAwO3BhW2hdPWY7dmFyIGw9Zi5waGFzZWRSZWdpc3RyYXRpb25OYW1lcztpZihsKXtmb3IoZSBpbiBsKWwuaGFzT3duUHJvcGVydHkoZSkmJnFhKGxbZV0sZyxoKTtlPSEwfWVsc2UgZi5yZWdpc3RyYXRpb25OYW1lPyhxYShmLnJlZ2lzdHJhdGlvbk5hbWUsZyxoKSxlPSEwKTplPSExO2U/dm9pZCAwOngoXCI5OFwiLGQsYSl9fX19XG5mdW5jdGlvbiBxYShhLGIsYyl7cmFbYV0/eChcIjEwMFwiLGEpOnZvaWQgMDtyYVthXT1iO3NhW2FdPWIuZXZlbnRUeXBlc1tjXS5kZXBlbmRlbmNpZXN9dmFyIG9hPVtdLHBhPXt9LHJhPXt9LHNhPXt9LHRhPW51bGwsdWE9bnVsbCx2YT1udWxsO2Z1bmN0aW9uIHdhKGEsYixjKXt2YXIgZD1hLnR5cGV8fFwidW5rbm93bi1ldmVudFwiO2EuY3VycmVudFRhcmdldD12YShjKTtrYShkLGIsdm9pZCAwLGEpO2EuY3VycmVudFRhcmdldD1udWxsfWZ1bmN0aW9uIHhhKGEsYil7bnVsbD09Yj94KFwiMzBcIik6dm9pZCAwO2lmKG51bGw9PWEpcmV0dXJuIGI7aWYoQXJyYXkuaXNBcnJheShhKSl7aWYoQXJyYXkuaXNBcnJheShiKSlyZXR1cm4gYS5wdXNoLmFwcGx5KGEsYiksYTthLnB1c2goYik7cmV0dXJuIGF9cmV0dXJuIEFycmF5LmlzQXJyYXkoYik/W2FdLmNvbmNhdChiKTpbYSxiXX1cbmZ1bmN0aW9uIHlhKGEsYixjKXtBcnJheS5pc0FycmF5KGEpP2EuZm9yRWFjaChiLGMpOmEmJmIuY2FsbChjLGEpfXZhciB6YT1udWxsO2Z1bmN0aW9uIEFhKGEpe2lmKGEpe3ZhciBiPWEuX2Rpc3BhdGNoTGlzdGVuZXJzLGM9YS5fZGlzcGF0Y2hJbnN0YW5jZXM7aWYoQXJyYXkuaXNBcnJheShiKSlmb3IodmFyIGQ9MDtkPGIubGVuZ3RoJiYhYS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpO2QrKyl3YShhLGJbZF0sY1tkXSk7ZWxzZSBiJiZ3YShhLGIsYyk7YS5fZGlzcGF0Y2hMaXN0ZW5lcnM9bnVsbDthLl9kaXNwYXRjaEluc3RhbmNlcz1udWxsO2EuaXNQZXJzaXN0ZW50KCl8fGEuY29uc3RydWN0b3IucmVsZWFzZShhKX19XG52YXIgQmE9e2luamVjdEV2ZW50UGx1Z2luT3JkZXI6ZnVuY3Rpb24oYSl7bGE/eChcIjEwMVwiKTp2b2lkIDA7bGE9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYSk7bmEoKX0saW5qZWN0RXZlbnRQbHVnaW5zQnlOYW1lOmZ1bmN0aW9uKGEpe3ZhciBiPSExLGM7Zm9yKGMgaW4gYSlpZihhLmhhc093blByb3BlcnR5KGMpKXt2YXIgZD1hW2NdO21hLmhhc093blByb3BlcnR5KGMpJiZtYVtjXT09PWR8fChtYVtjXT94KFwiMTAyXCIsYyk6dm9pZCAwLG1hW2NdPWQsYj0hMCl9YiYmbmEoKX19O1xuZnVuY3Rpb24gQ2EoYSxiKXt2YXIgYz1hLnN0YXRlTm9kZTtpZighYylyZXR1cm4gbnVsbDt2YXIgZD10YShjKTtpZighZClyZXR1cm4gbnVsbDtjPWRbYl07YTpzd2l0Y2goYil7Y2FzZSBcIm9uQ2xpY2tcIjpjYXNlIFwib25DbGlja0NhcHR1cmVcIjpjYXNlIFwib25Eb3VibGVDbGlja1wiOmNhc2UgXCJvbkRvdWJsZUNsaWNrQ2FwdHVyZVwiOmNhc2UgXCJvbk1vdXNlRG93blwiOmNhc2UgXCJvbk1vdXNlRG93bkNhcHR1cmVcIjpjYXNlIFwib25Nb3VzZU1vdmVcIjpjYXNlIFwib25Nb3VzZU1vdmVDYXB0dXJlXCI6Y2FzZSBcIm9uTW91c2VVcFwiOmNhc2UgXCJvbk1vdXNlVXBDYXB0dXJlXCI6KGQ9IWQuZGlzYWJsZWQpfHwoYT1hLnR5cGUsZD0hKFwiYnV0dG9uXCI9PT1hfHxcImlucHV0XCI9PT1hfHxcInNlbGVjdFwiPT09YXx8XCJ0ZXh0YXJlYVwiPT09YSkpO2E9IWQ7YnJlYWsgYTtkZWZhdWx0OmE9ITF9aWYoYSlyZXR1cm4gbnVsbDtjJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgYz94KFwiMjMxXCIsYix0eXBlb2YgYyk6dm9pZCAwO1xucmV0dXJuIGN9ZnVuY3Rpb24gRGEoYSl7bnVsbCE9PWEmJih6YT14YSh6YSxhKSk7YT16YTt6YT1udWxsO2lmKGEmJih5YShhLEFhKSx6YT94KFwiOTVcIik6dm9pZCAwLGZhKSl0aHJvdyBhPWhhLGZhPSExLGhhPW51bGwsYTt9dmFyIEVhPU1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpLEZhPVwiX19yZWFjdEludGVybmFsSW5zdGFuY2UkXCIrRWEsR2E9XCJfX3JlYWN0RXZlbnRIYW5kbGVycyRcIitFYTtmdW5jdGlvbiBIYShhKXtpZihhW0ZhXSlyZXR1cm4gYVtGYV07Zm9yKDshYVtGYV07KWlmKGEucGFyZW50Tm9kZSlhPWEucGFyZW50Tm9kZTtlbHNlIHJldHVybiBudWxsO2E9YVtGYV07cmV0dXJuIDU9PT1hLnRhZ3x8Nj09PWEudGFnP2E6bnVsbH1mdW5jdGlvbiBJYShhKXthPWFbRmFdO3JldHVybiFhfHw1IT09YS50YWcmJjYhPT1hLnRhZz9udWxsOmF9XG5mdW5jdGlvbiBKYShhKXtpZig1PT09YS50YWd8fDY9PT1hLnRhZylyZXR1cm4gYS5zdGF0ZU5vZGU7eChcIjMzXCIpfWZ1bmN0aW9uIEthKGEpe3JldHVybiBhW0dhXXx8bnVsbH1mdW5jdGlvbiBMYShhKXtkbyBhPWEucmV0dXJuO3doaWxlKGEmJjUhPT1hLnRhZyk7cmV0dXJuIGE/YTpudWxsfWZ1bmN0aW9uIE1hKGEsYixjKXtpZihiPUNhKGEsYy5kaXNwYXRjaENvbmZpZy5waGFzZWRSZWdpc3RyYXRpb25OYW1lc1tiXSkpYy5fZGlzcGF0Y2hMaXN0ZW5lcnM9eGEoYy5fZGlzcGF0Y2hMaXN0ZW5lcnMsYiksYy5fZGlzcGF0Y2hJbnN0YW5jZXM9eGEoYy5fZGlzcGF0Y2hJbnN0YW5jZXMsYSl9XG5mdW5jdGlvbiBOYShhKXtpZihhJiZhLmRpc3BhdGNoQ29uZmlnLnBoYXNlZFJlZ2lzdHJhdGlvbk5hbWVzKXtmb3IodmFyIGI9YS5fdGFyZ2V0SW5zdCxjPVtdO2I7KWMucHVzaChiKSxiPUxhKGIpO2ZvcihiPWMubGVuZ3RoOzA8Yi0tOylNYShjW2JdLFwiY2FwdHVyZWRcIixhKTtmb3IoYj0wO2I8Yy5sZW5ndGg7YisrKU1hKGNbYl0sXCJidWJibGVkXCIsYSl9fWZ1bmN0aW9uIE9hKGEsYixjKXthJiZjJiZjLmRpc3BhdGNoQ29uZmlnLnJlZ2lzdHJhdGlvbk5hbWUmJihiPUNhKGEsYy5kaXNwYXRjaENvbmZpZy5yZWdpc3RyYXRpb25OYW1lKSkmJihjLl9kaXNwYXRjaExpc3RlbmVycz14YShjLl9kaXNwYXRjaExpc3RlbmVycyxiKSxjLl9kaXNwYXRjaEluc3RhbmNlcz14YShjLl9kaXNwYXRjaEluc3RhbmNlcyxhKSl9ZnVuY3Rpb24gUGEoYSl7YSYmYS5kaXNwYXRjaENvbmZpZy5yZWdpc3RyYXRpb25OYW1lJiZPYShhLl90YXJnZXRJbnN0LG51bGwsYSl9XG5mdW5jdGlvbiBRYShhKXt5YShhLE5hKX12YXIgUmE9IShcInVuZGVmaW5lZFwiPT09dHlwZW9mIHdpbmRvd3x8IXdpbmRvdy5kb2N1bWVudHx8IXdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KTtmdW5jdGlvbiBTYShhLGIpe3ZhciBjPXt9O2NbYS50b0xvd2VyQ2FzZSgpXT1iLnRvTG93ZXJDYXNlKCk7Y1tcIldlYmtpdFwiK2FdPVwid2Via2l0XCIrYjtjW1wiTW96XCIrYV09XCJtb3pcIitiO3JldHVybiBjfXZhciBUYT17YW5pbWF0aW9uZW5kOlNhKFwiQW5pbWF0aW9uXCIsXCJBbmltYXRpb25FbmRcIiksYW5pbWF0aW9uaXRlcmF0aW9uOlNhKFwiQW5pbWF0aW9uXCIsXCJBbmltYXRpb25JdGVyYXRpb25cIiksYW5pbWF0aW9uc3RhcnQ6U2EoXCJBbmltYXRpb25cIixcIkFuaW1hdGlvblN0YXJ0XCIpLHRyYW5zaXRpb25lbmQ6U2EoXCJUcmFuc2l0aW9uXCIsXCJUcmFuc2l0aW9uRW5kXCIpfSxVYT17fSxWYT17fTtcblJhJiYoVmE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKS5zdHlsZSxcIkFuaW1hdGlvbkV2ZW50XCJpbiB3aW5kb3d8fChkZWxldGUgVGEuYW5pbWF0aW9uZW5kLmFuaW1hdGlvbixkZWxldGUgVGEuYW5pbWF0aW9uaXRlcmF0aW9uLmFuaW1hdGlvbixkZWxldGUgVGEuYW5pbWF0aW9uc3RhcnQuYW5pbWF0aW9uKSxcIlRyYW5zaXRpb25FdmVudFwiaW4gd2luZG93fHxkZWxldGUgVGEudHJhbnNpdGlvbmVuZC50cmFuc2l0aW9uKTtmdW5jdGlvbiBXYShhKXtpZihVYVthXSlyZXR1cm4gVWFbYV07aWYoIVRhW2FdKXJldHVybiBhO3ZhciBiPVRhW2FdLGM7Zm9yKGMgaW4gYilpZihiLmhhc093blByb3BlcnR5KGMpJiZjIGluIFZhKXJldHVybiBVYVthXT1iW2NdO3JldHVybiBhfVxudmFyIFhhPVdhKFwiYW5pbWF0aW9uZW5kXCIpLFlhPVdhKFwiYW5pbWF0aW9uaXRlcmF0aW9uXCIpLFphPVdhKFwiYW5pbWF0aW9uc3RhcnRcIiksJGE9V2EoXCJ0cmFuc2l0aW9uZW5kXCIpLGFiPVwiYWJvcnQgY2FucGxheSBjYW5wbGF5dGhyb3VnaCBkdXJhdGlvbmNoYW5nZSBlbXB0aWVkIGVuY3J5cHRlZCBlbmRlZCBlcnJvciBsb2FkZWRkYXRhIGxvYWRlZG1ldGFkYXRhIGxvYWRzdGFydCBwYXVzZSBwbGF5IHBsYXlpbmcgcHJvZ3Jlc3MgcmF0ZWNoYW5nZSBzZWVrZWQgc2Vla2luZyBzdGFsbGVkIHN1c3BlbmQgdGltZXVwZGF0ZSB2b2x1bWVjaGFuZ2Ugd2FpdGluZ1wiLnNwbGl0KFwiIFwiKSxiYj1udWxsLGNiPW51bGwsZGI9bnVsbDtcbmZ1bmN0aW9uIGViKCl7aWYoZGIpcmV0dXJuIGRiO3ZhciBhLGI9Y2IsYz1iLmxlbmd0aCxkLGU9XCJ2YWx1ZVwiaW4gYmI/YmIudmFsdWU6YmIudGV4dENvbnRlbnQsZj1lLmxlbmd0aDtmb3IoYT0wO2E8YyYmYlthXT09PWVbYV07YSsrKTt2YXIgZz1jLWE7Zm9yKGQ9MTtkPD1nJiZiW2MtZF09PT1lW2YtZF07ZCsrKTtyZXR1cm4gZGI9ZS5zbGljZShhLDE8ZD8xLWQ6dm9pZCAwKX1mdW5jdGlvbiBmYigpe3JldHVybiEwfWZ1bmN0aW9uIGdiKCl7cmV0dXJuITF9XG5mdW5jdGlvbiB5KGEsYixjLGQpe3RoaXMuZGlzcGF0Y2hDb25maWc9YTt0aGlzLl90YXJnZXRJbnN0PWI7dGhpcy5uYXRpdmVFdmVudD1jO2E9dGhpcy5jb25zdHJ1Y3Rvci5JbnRlcmZhY2U7Zm9yKHZhciBlIGluIGEpYS5oYXNPd25Qcm9wZXJ0eShlKSYmKChiPWFbZV0pP3RoaXNbZV09YihjKTpcInRhcmdldFwiPT09ZT90aGlzLnRhcmdldD1kOnRoaXNbZV09Y1tlXSk7dGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9KG51bGwhPWMuZGVmYXVsdFByZXZlbnRlZD9jLmRlZmF1bHRQcmV2ZW50ZWQ6ITE9PT1jLnJldHVyblZhbHVlKT9mYjpnYjt0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkPWdiO3JldHVybiB0aGlzfVxubih5LnByb3RvdHlwZSx7cHJldmVudERlZmF1bHQ6ZnVuY3Rpb24oKXt0aGlzLmRlZmF1bHRQcmV2ZW50ZWQ9ITA7dmFyIGE9dGhpcy5uYXRpdmVFdmVudDthJiYoYS5wcmV2ZW50RGVmYXVsdD9hLnByZXZlbnREZWZhdWx0KCk6XCJ1bmtub3duXCIhPT10eXBlb2YgYS5yZXR1cm5WYWx1ZSYmKGEucmV0dXJuVmFsdWU9ITEpLHRoaXMuaXNEZWZhdWx0UHJldmVudGVkPWZiKX0sc3RvcFByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5uYXRpdmVFdmVudDthJiYoYS5zdG9wUHJvcGFnYXRpb24/YS5zdG9wUHJvcGFnYXRpb24oKTpcInVua25vd25cIiE9PXR5cGVvZiBhLmNhbmNlbEJ1YmJsZSYmKGEuY2FuY2VsQnViYmxlPSEwKSx0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkPWZiKX0scGVyc2lzdDpmdW5jdGlvbigpe3RoaXMuaXNQZXJzaXN0ZW50PWZifSxpc1BlcnNpc3RlbnQ6Z2IsZGVzdHJ1Y3RvcjpmdW5jdGlvbigpe3ZhciBhPXRoaXMuY29uc3RydWN0b3IuSW50ZXJmYWNlLFxuYjtmb3IoYiBpbiBhKXRoaXNbYl09bnVsbDt0aGlzLm5hdGl2ZUV2ZW50PXRoaXMuX3RhcmdldEluc3Q9dGhpcy5kaXNwYXRjaENvbmZpZz1udWxsO3RoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQ9dGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9Z2I7dGhpcy5fZGlzcGF0Y2hJbnN0YW5jZXM9dGhpcy5fZGlzcGF0Y2hMaXN0ZW5lcnM9bnVsbH19KTt5LkludGVyZmFjZT17dHlwZTpudWxsLHRhcmdldDpudWxsLGN1cnJlbnRUYXJnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbH0sZXZlbnRQaGFzZTpudWxsLGJ1YmJsZXM6bnVsbCxjYW5jZWxhYmxlOm51bGwsdGltZVN0YW1wOmZ1bmN0aW9uKGEpe3JldHVybiBhLnRpbWVTdGFtcHx8RGF0ZS5ub3coKX0sZGVmYXVsdFByZXZlbnRlZDpudWxsLGlzVHJ1c3RlZDpudWxsfTtcbnkuZXh0ZW5kPWZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoKXt9ZnVuY3Rpb24gYygpe3JldHVybiBkLmFwcGx5KHRoaXMsYXJndW1lbnRzKX12YXIgZD10aGlzO2IucHJvdG90eXBlPWQucHJvdG90eXBlO3ZhciBlPW5ldyBiO24oZSxjLnByb3RvdHlwZSk7Yy5wcm90b3R5cGU9ZTtjLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1jO2MuSW50ZXJmYWNlPW4oe30sZC5JbnRlcmZhY2UsYSk7Yy5leHRlbmQ9ZC5leHRlbmQ7aGIoYyk7cmV0dXJuIGN9O2hiKHkpO2Z1bmN0aW9uIGliKGEsYixjLGQpe2lmKHRoaXMuZXZlbnRQb29sLmxlbmd0aCl7dmFyIGU9dGhpcy5ldmVudFBvb2wucG9wKCk7dGhpcy5jYWxsKGUsYSxiLGMsZCk7cmV0dXJuIGV9cmV0dXJuIG5ldyB0aGlzKGEsYixjLGQpfWZ1bmN0aW9uIGpiKGEpe2EgaW5zdGFuY2VvZiB0aGlzP3ZvaWQgMDp4KFwiMjc5XCIpO2EuZGVzdHJ1Y3RvcigpOzEwPnRoaXMuZXZlbnRQb29sLmxlbmd0aCYmdGhpcy5ldmVudFBvb2wucHVzaChhKX1cbmZ1bmN0aW9uIGhiKGEpe2EuZXZlbnRQb29sPVtdO2EuZ2V0UG9vbGVkPWliO2EucmVsZWFzZT1qYn12YXIga2I9eS5leHRlbmQoe2RhdGE6bnVsbH0pLGxiPXkuZXh0ZW5kKHtkYXRhOm51bGx9KSxtYj1bOSwxMywyNywzMl0sbmI9UmEmJlwiQ29tcG9zaXRpb25FdmVudFwiaW4gd2luZG93LG9iPW51bGw7UmEmJlwiZG9jdW1lbnRNb2RlXCJpbiBkb2N1bWVudCYmKG9iPWRvY3VtZW50LmRvY3VtZW50TW9kZSk7XG52YXIgcGI9UmEmJlwiVGV4dEV2ZW50XCJpbiB3aW5kb3cmJiFvYixxYj1SYSYmKCFuYnx8b2ImJjg8b2ImJjExPj1vYikscmI9U3RyaW5nLmZyb21DaGFyQ29kZSgzMiksc2I9e2JlZm9yZUlucHV0OntwaGFzZWRSZWdpc3RyYXRpb25OYW1lczp7YnViYmxlZDpcIm9uQmVmb3JlSW5wdXRcIixjYXB0dXJlZDpcIm9uQmVmb3JlSW5wdXRDYXB0dXJlXCJ9LGRlcGVuZGVuY2llczpbXCJjb21wb3NpdGlvbmVuZFwiLFwia2V5cHJlc3NcIixcInRleHRJbnB1dFwiLFwicGFzdGVcIl19LGNvbXBvc2l0aW9uRW5kOntwaGFzZWRSZWdpc3RyYXRpb25OYW1lczp7YnViYmxlZDpcIm9uQ29tcG9zaXRpb25FbmRcIixjYXB0dXJlZDpcIm9uQ29tcG9zaXRpb25FbmRDYXB0dXJlXCJ9LGRlcGVuZGVuY2llczpcImJsdXIgY29tcG9zaXRpb25lbmQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBtb3VzZWRvd25cIi5zcGxpdChcIiBcIil9LGNvbXBvc2l0aW9uU3RhcnQ6e3BoYXNlZFJlZ2lzdHJhdGlvbk5hbWVzOntidWJibGVkOlwib25Db21wb3NpdGlvblN0YXJ0XCIsXG5jYXB0dXJlZDpcIm9uQ29tcG9zaXRpb25TdGFydENhcHR1cmVcIn0sZGVwZW5kZW5jaWVzOlwiYmx1ciBjb21wb3NpdGlvbnN0YXJ0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgbW91c2Vkb3duXCIuc3BsaXQoXCIgXCIpfSxjb21wb3NpdGlvblVwZGF0ZTp7cGhhc2VkUmVnaXN0cmF0aW9uTmFtZXM6e2J1YmJsZWQ6XCJvbkNvbXBvc2l0aW9uVXBkYXRlXCIsY2FwdHVyZWQ6XCJvbkNvbXBvc2l0aW9uVXBkYXRlQ2FwdHVyZVwifSxkZXBlbmRlbmNpZXM6XCJibHVyIGNvbXBvc2l0aW9udXBkYXRlIGtleWRvd24ga2V5cHJlc3Mga2V5dXAgbW91c2Vkb3duXCIuc3BsaXQoXCIgXCIpfX0sdGI9ITE7XG5mdW5jdGlvbiB1YihhLGIpe3N3aXRjaChhKXtjYXNlIFwia2V5dXBcIjpyZXR1cm4tMSE9PW1iLmluZGV4T2YoYi5rZXlDb2RlKTtjYXNlIFwia2V5ZG93blwiOnJldHVybiAyMjkhPT1iLmtleUNvZGU7Y2FzZSBcImtleXByZXNzXCI6Y2FzZSBcIm1vdXNlZG93blwiOmNhc2UgXCJibHVyXCI6cmV0dXJuITA7ZGVmYXVsdDpyZXR1cm4hMX19ZnVuY3Rpb24gdmIoYSl7YT1hLmRldGFpbDtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGEmJlwiZGF0YVwiaW4gYT9hLmRhdGE6bnVsbH12YXIgd2I9ITE7ZnVuY3Rpb24geGIoYSxiKXtzd2l0Y2goYSl7Y2FzZSBcImNvbXBvc2l0aW9uZW5kXCI6cmV0dXJuIHZiKGIpO2Nhc2UgXCJrZXlwcmVzc1wiOmlmKDMyIT09Yi53aGljaClyZXR1cm4gbnVsbDt0Yj0hMDtyZXR1cm4gcmI7Y2FzZSBcInRleHRJbnB1dFwiOnJldHVybiBhPWIuZGF0YSxhPT09cmImJnRiP251bGw6YTtkZWZhdWx0OnJldHVybiBudWxsfX1cbmZ1bmN0aW9uIHliKGEsYil7aWYod2IpcmV0dXJuXCJjb21wb3NpdGlvbmVuZFwiPT09YXx8IW5iJiZ1YihhLGIpPyhhPWViKCksZGI9Y2I9YmI9bnVsbCx3Yj0hMSxhKTpudWxsO3N3aXRjaChhKXtjYXNlIFwicGFzdGVcIjpyZXR1cm4gbnVsbDtjYXNlIFwia2V5cHJlc3NcIjppZighKGIuY3RybEtleXx8Yi5hbHRLZXl8fGIubWV0YUtleSl8fGIuY3RybEtleSYmYi5hbHRLZXkpe2lmKGIuY2hhciYmMTxiLmNoYXIubGVuZ3RoKXJldHVybiBiLmNoYXI7aWYoYi53aGljaClyZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShiLndoaWNoKX1yZXR1cm4gbnVsbDtjYXNlIFwiY29tcG9zaXRpb25lbmRcIjpyZXR1cm4gcWImJlwia29cIiE9PWIubG9jYWxlP251bGw6Yi5kYXRhO2RlZmF1bHQ6cmV0dXJuIG51bGx9fVxudmFyIHpiPXtldmVudFR5cGVzOnNiLGV4dHJhY3RFdmVudHM6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9dm9pZCAwO3ZhciBmPXZvaWQgMDtpZihuYiliOntzd2l0Y2goYSl7Y2FzZSBcImNvbXBvc2l0aW9uc3RhcnRcIjplPXNiLmNvbXBvc2l0aW9uU3RhcnQ7YnJlYWsgYjtjYXNlIFwiY29tcG9zaXRpb25lbmRcIjplPXNiLmNvbXBvc2l0aW9uRW5kO2JyZWFrIGI7Y2FzZSBcImNvbXBvc2l0aW9udXBkYXRlXCI6ZT1zYi5jb21wb3NpdGlvblVwZGF0ZTticmVhayBifWU9dm9pZCAwfWVsc2Ugd2I/dWIoYSxjKSYmKGU9c2IuY29tcG9zaXRpb25FbmQpOlwia2V5ZG93blwiPT09YSYmMjI5PT09Yy5rZXlDb2RlJiYoZT1zYi5jb21wb3NpdGlvblN0YXJ0KTtlPyhxYiYmXCJrb1wiIT09Yy5sb2NhbGUmJih3Ynx8ZSE9PXNiLmNvbXBvc2l0aW9uU3RhcnQ/ZT09PXNiLmNvbXBvc2l0aW9uRW5kJiZ3YiYmKGY9ZWIoKSk6KGJiPWQsY2I9XCJ2YWx1ZVwiaW4gYmI/YmIudmFsdWU6YmIudGV4dENvbnRlbnQsd2I9XG4hMCkpLGU9a2IuZ2V0UG9vbGVkKGUsYixjLGQpLGY/ZS5kYXRhPWY6KGY9dmIoYyksbnVsbCE9PWYmJihlLmRhdGE9ZikpLFFhKGUpLGY9ZSk6Zj1udWxsOyhhPXBiP3hiKGEsYyk6eWIoYSxjKSk/KGI9bGIuZ2V0UG9vbGVkKHNiLmJlZm9yZUlucHV0LGIsYyxkKSxiLmRhdGE9YSxRYShiKSk6Yj1udWxsO3JldHVybiBudWxsPT09Zj9iOm51bGw9PT1iP2Y6W2YsYl19fSxBYj1udWxsLEJiPW51bGwsQ2I9bnVsbDtmdW5jdGlvbiBEYihhKXtpZihhPXVhKGEpKXtcImZ1bmN0aW9uXCIhPT10eXBlb2YgQWI/eChcIjI4MFwiKTp2b2lkIDA7dmFyIGI9dGEoYS5zdGF0ZU5vZGUpO0FiKGEuc3RhdGVOb2RlLGEudHlwZSxiKX19ZnVuY3Rpb24gRWIoYSl7QmI/Q2I/Q2IucHVzaChhKTpDYj1bYV06QmI9YX1mdW5jdGlvbiBGYigpe2lmKEJiKXt2YXIgYT1CYixiPUNiO0NiPUJiPW51bGw7RGIoYSk7aWYoYilmb3IoYT0wO2E8Yi5sZW5ndGg7YSsrKURiKGJbYV0pfX1cbmZ1bmN0aW9uIEdiKGEsYil7cmV0dXJuIGEoYil9ZnVuY3Rpb24gSGIoYSxiLGMpe3JldHVybiBhKGIsYyl9ZnVuY3Rpb24gSWIoKXt9dmFyIEpiPSExO2Z1bmN0aW9uIEtiKGEsYil7aWYoSmIpcmV0dXJuIGEoYik7SmI9ITA7dHJ5e3JldHVybiBHYihhLGIpfWZpbmFsbHl7aWYoSmI9ITEsbnVsbCE9PUJifHxudWxsIT09Q2IpSWIoKSxGYigpfX12YXIgTGI9e2NvbG9yOiEwLGRhdGU6ITAsZGF0ZXRpbWU6ITAsXCJkYXRldGltZS1sb2NhbFwiOiEwLGVtYWlsOiEwLG1vbnRoOiEwLG51bWJlcjohMCxwYXNzd29yZDohMCxyYW5nZTohMCxzZWFyY2g6ITAsdGVsOiEwLHRleHQ6ITAsdGltZTohMCx1cmw6ITAsd2VlazohMH07ZnVuY3Rpb24gTWIoYSl7dmFyIGI9YSYmYS5ub2RlTmFtZSYmYS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PWI/ISFMYlthLnR5cGVdOlwidGV4dGFyZWFcIj09PWI/ITA6ITF9XG5mdW5jdGlvbiBOYihhKXthPWEudGFyZ2V0fHxhLnNyY0VsZW1lbnR8fHdpbmRvdzthLmNvcnJlc3BvbmRpbmdVc2VFbGVtZW50JiYoYT1hLmNvcnJlc3BvbmRpbmdVc2VFbGVtZW50KTtyZXR1cm4gMz09PWEubm9kZVR5cGU/YS5wYXJlbnROb2RlOmF9ZnVuY3Rpb24gT2IoYSl7aWYoIVJhKXJldHVybiExO2E9XCJvblwiK2E7dmFyIGI9YSBpbiBkb2N1bWVudDtifHwoYj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGIuc2V0QXR0cmlidXRlKGEsXCJyZXR1cm47XCIpLGI9XCJmdW5jdGlvblwiPT09dHlwZW9mIGJbYV0pO3JldHVybiBifWZ1bmN0aW9uIFBiKGEpe3ZhciBiPWEudHlwZTtyZXR1cm4oYT1hLm5vZGVOYW1lKSYmXCJpbnB1dFwiPT09YS50b0xvd2VyQ2FzZSgpJiYoXCJjaGVja2JveFwiPT09Ynx8XCJyYWRpb1wiPT09Yil9XG5mdW5jdGlvbiBRYihhKXt2YXIgYj1QYihhKT9cImNoZWNrZWRcIjpcInZhbHVlXCIsYz1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGEuY29uc3RydWN0b3IucHJvdG90eXBlLGIpLGQ9XCJcIithW2JdO2lmKCFhLmhhc093blByb3BlcnR5KGIpJiZcInVuZGVmaW5lZFwiIT09dHlwZW9mIGMmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBjLmdldCYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGMuc2V0KXt2YXIgZT1jLmdldCxmPWMuc2V0O09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLGIse2NvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gZS5jYWxsKHRoaXMpfSxzZXQ6ZnVuY3Rpb24oYSl7ZD1cIlwiK2E7Zi5jYWxsKHRoaXMsYSl9fSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGEsYix7ZW51bWVyYWJsZTpjLmVudW1lcmFibGV9KTtyZXR1cm57Z2V0VmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gZH0sc2V0VmFsdWU6ZnVuY3Rpb24oYSl7ZD1cIlwiK2F9LHN0b3BUcmFja2luZzpmdW5jdGlvbigpe2EuX3ZhbHVlVHJhY2tlcj1cbm51bGw7ZGVsZXRlIGFbYl19fX19ZnVuY3Rpb24gUmIoYSl7YS5fdmFsdWVUcmFja2VyfHwoYS5fdmFsdWVUcmFja2VyPVFiKGEpKX1mdW5jdGlvbiBTYihhKXtpZighYSlyZXR1cm4hMTt2YXIgYj1hLl92YWx1ZVRyYWNrZXI7aWYoIWIpcmV0dXJuITA7dmFyIGM9Yi5nZXRWYWx1ZSgpO3ZhciBkPVwiXCI7YSYmKGQ9UGIoYSk/YS5jaGVja2VkP1widHJ1ZVwiOlwiZmFsc2VcIjphLnZhbHVlKTthPWQ7cmV0dXJuIGEhPT1jPyhiLnNldFZhbHVlKGEpLCEwKTohMX12YXIgVGI9YWEuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ7VGIuaGFzT3duUHJvcGVydHkoXCJSZWFjdEN1cnJlbnREaXNwYXRjaGVyXCIpfHwoVGIuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcj17Y3VycmVudDpudWxsfSk7XG52YXIgVWI9L14oLiopW1xcXFxcXC9dLyx6PVwiZnVuY3Rpb25cIj09PXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3IsVmI9ej9TeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKTo2MDEwMyxXYj16P1N5bWJvbC5mb3IoXCJyZWFjdC5wb3J0YWxcIik6NjAxMDYsWGI9ej9TeW1ib2wuZm9yKFwicmVhY3QuZnJhZ21lbnRcIik6NjAxMDcsWWI9ej9TeW1ib2wuZm9yKFwicmVhY3Quc3RyaWN0X21vZGVcIik6NjAxMDgsWmI9ej9TeW1ib2wuZm9yKFwicmVhY3QucHJvZmlsZXJcIik6NjAxMTQsJGI9ej9TeW1ib2wuZm9yKFwicmVhY3QucHJvdmlkZXJcIik6NjAxMDksYWM9ej9TeW1ib2wuZm9yKFwicmVhY3QuY29udGV4dFwiKTo2MDExMCxiYz16P1N5bWJvbC5mb3IoXCJyZWFjdC5jb25jdXJyZW50X21vZGVcIik6NjAxMTEsY2M9ej9TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIik6NjAxMTIsZGM9ej9TeW1ib2wuZm9yKFwicmVhY3Quc3VzcGVuc2VcIik6NjAxMTMsZWM9ej9TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKTpcbjYwMTE1LGZjPXo/U3ltYm9sLmZvcihcInJlYWN0LmxhenlcIik6NjAxMTYsZ2M9XCJmdW5jdGlvblwiPT09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLml0ZXJhdG9yO2Z1bmN0aW9uIGhjKGEpe2lmKG51bGw9PT1hfHxcIm9iamVjdFwiIT09dHlwZW9mIGEpcmV0dXJuIG51bGw7YT1nYyYmYVtnY118fGFbXCJAQGl0ZXJhdG9yXCJdO3JldHVyblwiZnVuY3Rpb25cIj09PXR5cGVvZiBhP2E6bnVsbH1cbmZ1bmN0aW9uIGljKGEpe2lmKG51bGw9PWEpcmV0dXJuIG51bGw7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGEpcmV0dXJuIGEuZGlzcGxheU5hbWV8fGEubmFtZXx8bnVsbDtpZihcInN0cmluZ1wiPT09dHlwZW9mIGEpcmV0dXJuIGE7c3dpdGNoKGEpe2Nhc2UgYmM6cmV0dXJuXCJDb25jdXJyZW50TW9kZVwiO2Nhc2UgWGI6cmV0dXJuXCJGcmFnbWVudFwiO2Nhc2UgV2I6cmV0dXJuXCJQb3J0YWxcIjtjYXNlIFpiOnJldHVyblwiUHJvZmlsZXJcIjtjYXNlIFliOnJldHVyblwiU3RyaWN0TW9kZVwiO2Nhc2UgZGM6cmV0dXJuXCJTdXNwZW5zZVwifWlmKFwib2JqZWN0XCI9PT10eXBlb2YgYSlzd2l0Y2goYS4kJHR5cGVvZil7Y2FzZSBhYzpyZXR1cm5cIkNvbnRleHQuQ29uc3VtZXJcIjtjYXNlICRiOnJldHVyblwiQ29udGV4dC5Qcm92aWRlclwiO2Nhc2UgY2M6dmFyIGI9YS5yZW5kZXI7Yj1iLmRpc3BsYXlOYW1lfHxiLm5hbWV8fFwiXCI7cmV0dXJuIGEuZGlzcGxheU5hbWV8fChcIlwiIT09Yj9cIkZvcndhcmRSZWYoXCIrYitcblwiKVwiOlwiRm9yd2FyZFJlZlwiKTtjYXNlIGVjOnJldHVybiBpYyhhLnR5cGUpO2Nhc2UgZmM6aWYoYT0xPT09YS5fc3RhdHVzP2EuX3Jlc3VsdDpudWxsKXJldHVybiBpYyhhKX1yZXR1cm4gbnVsbH1mdW5jdGlvbiBqYyhhKXt2YXIgYj1cIlwiO2Rve2E6c3dpdGNoKGEudGFnKXtjYXNlIDM6Y2FzZSA0OmNhc2UgNjpjYXNlIDc6Y2FzZSAxMDpjYXNlIDk6dmFyIGM9XCJcIjticmVhayBhO2RlZmF1bHQ6dmFyIGQ9YS5fZGVidWdPd25lcixlPWEuX2RlYnVnU291cmNlLGY9aWMoYS50eXBlKTtjPW51bGw7ZCYmKGM9aWMoZC50eXBlKSk7ZD1mO2Y9XCJcIjtlP2Y9XCIgKGF0IFwiK2UuZmlsZU5hbWUucmVwbGFjZShVYixcIlwiKStcIjpcIitlLmxpbmVOdW1iZXIrXCIpXCI6YyYmKGY9XCIgKGNyZWF0ZWQgYnkgXCIrYytcIilcIik7Yz1cIlxcbiAgICBpbiBcIisoZHx8XCJVbmtub3duXCIpK2Z9Yis9YzthPWEucmV0dXJufXdoaWxlKGEpO3JldHVybiBifVxudmFyIGtjPS9eWzpBLVpfYS16XFx1MDBDMC1cXHUwMEQ2XFx1MDBEOC1cXHUwMEY2XFx1MDBGOC1cXHUwMkZGXFx1MDM3MC1cXHUwMzdEXFx1MDM3Ri1cXHUxRkZGXFx1MjAwQy1cXHUyMDBEXFx1MjA3MC1cXHUyMThGXFx1MkMwMC1cXHUyRkVGXFx1MzAwMS1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkZEXVs6QS1aX2EtelxcdTAwQzAtXFx1MDBENlxcdTAwRDgtXFx1MDBGNlxcdTAwRjgtXFx1MDJGRlxcdTAzNzAtXFx1MDM3RFxcdTAzN0YtXFx1MUZGRlxcdTIwMEMtXFx1MjAwRFxcdTIwNzAtXFx1MjE4RlxcdTJDMDAtXFx1MkZFRlxcdTMwMDEtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZGRFxcLS4wLTlcXHUwMEI3XFx1MDMwMC1cXHUwMzZGXFx1MjAzRi1cXHUyMDQwXSokLyxsYz1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LG1jPXt9LG5jPXt9O1xuZnVuY3Rpb24gb2MoYSl7aWYobGMuY2FsbChuYyxhKSlyZXR1cm4hMDtpZihsYy5jYWxsKG1jLGEpKXJldHVybiExO2lmKGtjLnRlc3QoYSkpcmV0dXJuIG5jW2FdPSEwO21jW2FdPSEwO3JldHVybiExfWZ1bmN0aW9uIHBjKGEsYixjLGQpe2lmKG51bGwhPT1jJiYwPT09Yy50eXBlKXJldHVybiExO3N3aXRjaCh0eXBlb2YgYil7Y2FzZSBcImZ1bmN0aW9uXCI6Y2FzZSBcInN5bWJvbFwiOnJldHVybiEwO2Nhc2UgXCJib29sZWFuXCI6aWYoZClyZXR1cm4hMTtpZihudWxsIT09YylyZXR1cm4hYy5hY2NlcHRzQm9vbGVhbnM7YT1hLnRvTG93ZXJDYXNlKCkuc2xpY2UoMCw1KTtyZXR1cm5cImRhdGEtXCIhPT1hJiZcImFyaWEtXCIhPT1hO2RlZmF1bHQ6cmV0dXJuITF9fVxuZnVuY3Rpb24gcWMoYSxiLGMsZCl7aWYobnVsbD09PWJ8fFwidW5kZWZpbmVkXCI9PT10eXBlb2YgYnx8cGMoYSxiLGMsZCkpcmV0dXJuITA7aWYoZClyZXR1cm4hMTtpZihudWxsIT09Yylzd2l0Y2goYy50eXBlKXtjYXNlIDM6cmV0dXJuIWI7Y2FzZSA0OnJldHVybiExPT09YjtjYXNlIDU6cmV0dXJuIGlzTmFOKGIpO2Nhc2UgNjpyZXR1cm4gaXNOYU4oYil8fDE+Yn1yZXR1cm4hMX1mdW5jdGlvbiBDKGEsYixjLGQsZSl7dGhpcy5hY2NlcHRzQm9vbGVhbnM9Mj09PWJ8fDM9PT1ifHw0PT09Yjt0aGlzLmF0dHJpYnV0ZU5hbWU9ZDt0aGlzLmF0dHJpYnV0ZU5hbWVzcGFjZT1lO3RoaXMubXVzdFVzZVByb3BlcnR5PWM7dGhpcy5wcm9wZXJ0eU5hbWU9YTt0aGlzLnR5cGU9Yn12YXIgRD17fTtcblwiY2hpbGRyZW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgZGVmYXVsdFZhbHVlIGRlZmF1bHRDaGVja2VkIGlubmVySFRNTCBzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmcgc3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nIHN0eWxlXCIuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQyhhLDAsITEsYSxudWxsKX0pO1tbXCJhY2NlcHRDaGFyc2V0XCIsXCJhY2NlcHQtY2hhcnNldFwiXSxbXCJjbGFzc05hbWVcIixcImNsYXNzXCJdLFtcImh0bWxGb3JcIixcImZvclwiXSxbXCJodHRwRXF1aXZcIixcImh0dHAtZXF1aXZcIl1dLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGI9YVswXTtEW2JdPW5ldyBDKGIsMSwhMSxhWzFdLG51bGwpfSk7W1wiY29udGVudEVkaXRhYmxlXCIsXCJkcmFnZ2FibGVcIixcInNwZWxsQ2hlY2tcIixcInZhbHVlXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQyhhLDIsITEsYS50b0xvd2VyQ2FzZSgpLG51bGwpfSk7XG5bXCJhdXRvUmV2ZXJzZVwiLFwiZXh0ZXJuYWxSZXNvdXJjZXNSZXF1aXJlZFwiLFwiZm9jdXNhYmxlXCIsXCJwcmVzZXJ2ZUFscGhhXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQyhhLDIsITEsYSxudWxsKX0pO1wiYWxsb3dGdWxsU2NyZWVuIGFzeW5jIGF1dG9Gb2N1cyBhdXRvUGxheSBjb250cm9scyBkZWZhdWx0IGRlZmVyIGRpc2FibGVkIGZvcm1Ob1ZhbGlkYXRlIGhpZGRlbiBsb29wIG5vTW9kdWxlIG5vVmFsaWRhdGUgb3BlbiBwbGF5c0lubGluZSByZWFkT25seSByZXF1aXJlZCByZXZlcnNlZCBzY29wZWQgc2VhbWxlc3MgaXRlbVNjb3BlXCIuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQyhhLDMsITEsYS50b0xvd2VyQ2FzZSgpLG51bGwpfSk7W1wiY2hlY2tlZFwiLFwibXVsdGlwbGVcIixcIm11dGVkXCIsXCJzZWxlY3RlZFwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0RbYV09bmV3IEMoYSwzLCEwLGEsbnVsbCl9KTtcbltcImNhcHR1cmVcIixcImRvd25sb2FkXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQyhhLDQsITEsYSxudWxsKX0pO1tcImNvbHNcIixcInJvd3NcIixcInNpemVcIixcInNwYW5cIl0uZm9yRWFjaChmdW5jdGlvbihhKXtEW2FdPW5ldyBDKGEsNiwhMSxhLG51bGwpfSk7W1wicm93U3BhblwiLFwic3RhcnRcIl0uZm9yRWFjaChmdW5jdGlvbihhKXtEW2FdPW5ldyBDKGEsNSwhMSxhLnRvTG93ZXJDYXNlKCksbnVsbCl9KTt2YXIgcmM9L1tcXC06XShbYS16XSkvZztmdW5jdGlvbiBzYyhhKXtyZXR1cm4gYVsxXS50b1VwcGVyQ2FzZSgpfVxuXCJhY2NlbnQtaGVpZ2h0IGFsaWdubWVudC1iYXNlbGluZSBhcmFiaWMtZm9ybSBiYXNlbGluZS1zaGlmdCBjYXAtaGVpZ2h0IGNsaXAtcGF0aCBjbGlwLXJ1bGUgY29sb3ItaW50ZXJwb2xhdGlvbiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnMgY29sb3ItcHJvZmlsZSBjb2xvci1yZW5kZXJpbmcgZG9taW5hbnQtYmFzZWxpbmUgZW5hYmxlLWJhY2tncm91bmQgZmlsbC1vcGFjaXR5IGZpbGwtcnVsZSBmbG9vZC1jb2xvciBmbG9vZC1vcGFjaXR5IGZvbnQtZmFtaWx5IGZvbnQtc2l6ZSBmb250LXNpemUtYWRqdXN0IGZvbnQtc3RyZXRjaCBmb250LXN0eWxlIGZvbnQtdmFyaWFudCBmb250LXdlaWdodCBnbHlwaC1uYW1lIGdseXBoLW9yaWVudGF0aW9uLWhvcml6b250YWwgZ2x5cGgtb3JpZW50YXRpb24tdmVydGljYWwgaG9yaXotYWR2LXggaG9yaXotb3JpZ2luLXggaW1hZ2UtcmVuZGVyaW5nIGxldHRlci1zcGFjaW5nIGxpZ2h0aW5nLWNvbG9yIG1hcmtlci1lbmQgbWFya2VyLW1pZCBtYXJrZXItc3RhcnQgb3ZlcmxpbmUtcG9zaXRpb24gb3ZlcmxpbmUtdGhpY2tuZXNzIHBhaW50LW9yZGVyIHBhbm9zZS0xIHBvaW50ZXItZXZlbnRzIHJlbmRlcmluZy1pbnRlbnQgc2hhcGUtcmVuZGVyaW5nIHN0b3AtY29sb3Igc3RvcC1vcGFjaXR5IHN0cmlrZXRocm91Z2gtcG9zaXRpb24gc3RyaWtldGhyb3VnaC10aGlja25lc3Mgc3Ryb2tlLWRhc2hhcnJheSBzdHJva2UtZGFzaG9mZnNldCBzdHJva2UtbGluZWNhcCBzdHJva2UtbGluZWpvaW4gc3Ryb2tlLW1pdGVybGltaXQgc3Ryb2tlLW9wYWNpdHkgc3Ryb2tlLXdpZHRoIHRleHQtYW5jaG9yIHRleHQtZGVjb3JhdGlvbiB0ZXh0LXJlbmRlcmluZyB1bmRlcmxpbmUtcG9zaXRpb24gdW5kZXJsaW5lLXRoaWNrbmVzcyB1bmljb2RlLWJpZGkgdW5pY29kZS1yYW5nZSB1bml0cy1wZXItZW0gdi1hbHBoYWJldGljIHYtaGFuZ2luZyB2LWlkZW9ncmFwaGljIHYtbWF0aGVtYXRpY2FsIHZlY3Rvci1lZmZlY3QgdmVydC1hZHYteSB2ZXJ0LW9yaWdpbi14IHZlcnQtb3JpZ2luLXkgd29yZC1zcGFjaW5nIHdyaXRpbmctbW9kZSB4bWxuczp4bGluayB4LWhlaWdodFwiLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShyYyxcbnNjKTtEW2JdPW5ldyBDKGIsMSwhMSxhLG51bGwpfSk7XCJ4bGluazphY3R1YXRlIHhsaW5rOmFyY3JvbGUgeGxpbms6aHJlZiB4bGluazpyb2xlIHhsaW5rOnNob3cgeGxpbms6dGl0bGUgeGxpbms6dHlwZVwiLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShyYyxzYyk7RFtiXT1uZXcgQyhiLDEsITEsYSxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIil9KTtbXCJ4bWw6YmFzZVwiLFwieG1sOmxhbmdcIixcInhtbDpzcGFjZVwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShyYyxzYyk7RFtiXT1uZXcgQyhiLDEsITEsYSxcImh0dHA6Ly93d3cudzMub3JnL1hNTC8xOTk4L25hbWVzcGFjZVwiKX0pO1tcInRhYkluZGV4XCIsXCJjcm9zc09yaWdpblwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0RbYV09bmV3IEMoYSwxLCExLGEudG9Mb3dlckNhc2UoKSxudWxsKX0pO1xuZnVuY3Rpb24gdGMoYSxiLGMsZCl7dmFyIGU9RC5oYXNPd25Qcm9wZXJ0eShiKT9EW2JdOm51bGw7dmFyIGY9bnVsbCE9PWU/MD09PWUudHlwZTpkPyExOiEoMjxiLmxlbmd0aCl8fFwib1wiIT09YlswXSYmXCJPXCIhPT1iWzBdfHxcIm5cIiE9PWJbMV0mJlwiTlwiIT09YlsxXT8hMTohMDtmfHwocWMoYixjLGUsZCkmJihjPW51bGwpLGR8fG51bGw9PT1lP29jKGIpJiYobnVsbD09PWM/YS5yZW1vdmVBdHRyaWJ1dGUoYik6YS5zZXRBdHRyaWJ1dGUoYixcIlwiK2MpKTplLm11c3RVc2VQcm9wZXJ0eT9hW2UucHJvcGVydHlOYW1lXT1udWxsPT09Yz8zPT09ZS50eXBlPyExOlwiXCI6YzooYj1lLmF0dHJpYnV0ZU5hbWUsZD1lLmF0dHJpYnV0ZU5hbWVzcGFjZSxudWxsPT09Yz9hLnJlbW92ZUF0dHJpYnV0ZShiKTooZT1lLnR5cGUsYz0zPT09ZXx8ND09PWUmJiEwPT09Yz9cIlwiOlwiXCIrYyxkP2Euc2V0QXR0cmlidXRlTlMoZCxiLGMpOmEuc2V0QXR0cmlidXRlKGIsYykpKSl9XG5mdW5jdGlvbiB1YyhhKXtzd2l0Y2godHlwZW9mIGEpe2Nhc2UgXCJib29sZWFuXCI6Y2FzZSBcIm51bWJlclwiOmNhc2UgXCJvYmplY3RcIjpjYXNlIFwic3RyaW5nXCI6Y2FzZSBcInVuZGVmaW5lZFwiOnJldHVybiBhO2RlZmF1bHQ6cmV0dXJuXCJcIn19ZnVuY3Rpb24gdmMoYSxiKXt2YXIgYz1iLmNoZWNrZWQ7cmV0dXJuIG4oe30sYix7ZGVmYXVsdENoZWNrZWQ6dm9pZCAwLGRlZmF1bHRWYWx1ZTp2b2lkIDAsdmFsdWU6dm9pZCAwLGNoZWNrZWQ6bnVsbCE9Yz9jOmEuX3dyYXBwZXJTdGF0ZS5pbml0aWFsQ2hlY2tlZH0pfVxuZnVuY3Rpb24gd2MoYSxiKXt2YXIgYz1udWxsPT1iLmRlZmF1bHRWYWx1ZT9cIlwiOmIuZGVmYXVsdFZhbHVlLGQ9bnVsbCE9Yi5jaGVja2VkP2IuY2hlY2tlZDpiLmRlZmF1bHRDaGVja2VkO2M9dWMobnVsbCE9Yi52YWx1ZT9iLnZhbHVlOmMpO2EuX3dyYXBwZXJTdGF0ZT17aW5pdGlhbENoZWNrZWQ6ZCxpbml0aWFsVmFsdWU6Yyxjb250cm9sbGVkOlwiY2hlY2tib3hcIj09PWIudHlwZXx8XCJyYWRpb1wiPT09Yi50eXBlP251bGwhPWIuY2hlY2tlZDpudWxsIT1iLnZhbHVlfX1mdW5jdGlvbiB4YyhhLGIpe2I9Yi5jaGVja2VkO251bGwhPWImJnRjKGEsXCJjaGVja2VkXCIsYiwhMSl9XG5mdW5jdGlvbiB5YyhhLGIpe3hjKGEsYik7dmFyIGM9dWMoYi52YWx1ZSksZD1iLnR5cGU7aWYobnVsbCE9YylpZihcIm51bWJlclwiPT09ZCl7aWYoMD09PWMmJlwiXCI9PT1hLnZhbHVlfHxhLnZhbHVlIT1jKWEudmFsdWU9XCJcIitjfWVsc2UgYS52YWx1ZSE9PVwiXCIrYyYmKGEudmFsdWU9XCJcIitjKTtlbHNlIGlmKFwic3VibWl0XCI9PT1kfHxcInJlc2V0XCI9PT1kKXthLnJlbW92ZUF0dHJpYnV0ZShcInZhbHVlXCIpO3JldHVybn1iLmhhc093blByb3BlcnR5KFwidmFsdWVcIik/emMoYSxiLnR5cGUsYyk6Yi5oYXNPd25Qcm9wZXJ0eShcImRlZmF1bHRWYWx1ZVwiKSYmemMoYSxiLnR5cGUsdWMoYi5kZWZhdWx0VmFsdWUpKTtudWxsPT1iLmNoZWNrZWQmJm51bGwhPWIuZGVmYXVsdENoZWNrZWQmJihhLmRlZmF1bHRDaGVja2VkPSEhYi5kZWZhdWx0Q2hlY2tlZCl9XG5mdW5jdGlvbiBBYyhhLGIsYyl7aWYoYi5oYXNPd25Qcm9wZXJ0eShcInZhbHVlXCIpfHxiLmhhc093blByb3BlcnR5KFwiZGVmYXVsdFZhbHVlXCIpKXt2YXIgZD1iLnR5cGU7aWYoIShcInN1Ym1pdFwiIT09ZCYmXCJyZXNldFwiIT09ZHx8dm9pZCAwIT09Yi52YWx1ZSYmbnVsbCE9PWIudmFsdWUpKXJldHVybjtiPVwiXCIrYS5fd3JhcHBlclN0YXRlLmluaXRpYWxWYWx1ZTtjfHxiPT09YS52YWx1ZXx8KGEudmFsdWU9Yik7YS5kZWZhdWx0VmFsdWU9Yn1jPWEubmFtZTtcIlwiIT09YyYmKGEubmFtZT1cIlwiKTthLmRlZmF1bHRDaGVja2VkPSFhLmRlZmF1bHRDaGVja2VkO2EuZGVmYXVsdENoZWNrZWQ9ISFhLl93cmFwcGVyU3RhdGUuaW5pdGlhbENoZWNrZWQ7XCJcIiE9PWMmJihhLm5hbWU9Yyl9XG5mdW5jdGlvbiB6YyhhLGIsYyl7aWYoXCJudW1iZXJcIiE9PWJ8fGEub3duZXJEb2N1bWVudC5hY3RpdmVFbGVtZW50IT09YSludWxsPT1jP2EuZGVmYXVsdFZhbHVlPVwiXCIrYS5fd3JhcHBlclN0YXRlLmluaXRpYWxWYWx1ZTphLmRlZmF1bHRWYWx1ZSE9PVwiXCIrYyYmKGEuZGVmYXVsdFZhbHVlPVwiXCIrYyl9dmFyIEJjPXtjaGFuZ2U6e3BoYXNlZFJlZ2lzdHJhdGlvbk5hbWVzOntidWJibGVkOlwib25DaGFuZ2VcIixjYXB0dXJlZDpcIm9uQ2hhbmdlQ2FwdHVyZVwifSxkZXBlbmRlbmNpZXM6XCJibHVyIGNoYW5nZSBjbGljayBmb2N1cyBpbnB1dCBrZXlkb3duIGtleXVwIHNlbGVjdGlvbmNoYW5nZVwiLnNwbGl0KFwiIFwiKX19O2Z1bmN0aW9uIENjKGEsYixjKXthPXkuZ2V0UG9vbGVkKEJjLmNoYW5nZSxhLGIsYyk7YS50eXBlPVwiY2hhbmdlXCI7RWIoYyk7UWEoYSk7cmV0dXJuIGF9dmFyIERjPW51bGwsRWM9bnVsbDtmdW5jdGlvbiBGYyhhKXtEYShhKX1cbmZ1bmN0aW9uIEdjKGEpe3ZhciBiPUphKGEpO2lmKFNiKGIpKXJldHVybiBhfWZ1bmN0aW9uIEhjKGEsYil7aWYoXCJjaGFuZ2VcIj09PWEpcmV0dXJuIGJ9dmFyIEljPSExO1JhJiYoSWM9T2IoXCJpbnB1dFwiKSYmKCFkb2N1bWVudC5kb2N1bWVudE1vZGV8fDk8ZG9jdW1lbnQuZG9jdW1lbnRNb2RlKSk7ZnVuY3Rpb24gSmMoKXtEYyYmKERjLmRldGFjaEV2ZW50KFwib25wcm9wZXJ0eWNoYW5nZVwiLEtjKSxFYz1EYz1udWxsKX1mdW5jdGlvbiBLYyhhKXtcInZhbHVlXCI9PT1hLnByb3BlcnR5TmFtZSYmR2MoRWMpJiYoYT1DYyhFYyxhLE5iKGEpKSxLYihGYyxhKSl9ZnVuY3Rpb24gTGMoYSxiLGMpe1wiZm9jdXNcIj09PWE/KEpjKCksRGM9YixFYz1jLERjLmF0dGFjaEV2ZW50KFwib25wcm9wZXJ0eWNoYW5nZVwiLEtjKSk6XCJibHVyXCI9PT1hJiZKYygpfWZ1bmN0aW9uIE1jKGEpe2lmKFwic2VsZWN0aW9uY2hhbmdlXCI9PT1hfHxcImtleXVwXCI9PT1hfHxcImtleWRvd25cIj09PWEpcmV0dXJuIEdjKEVjKX1cbmZ1bmN0aW9uIE5jKGEsYil7aWYoXCJjbGlja1wiPT09YSlyZXR1cm4gR2MoYil9ZnVuY3Rpb24gT2MoYSxiKXtpZihcImlucHV0XCI9PT1hfHxcImNoYW5nZVwiPT09YSlyZXR1cm4gR2MoYil9XG52YXIgUGM9e2V2ZW50VHlwZXM6QmMsX2lzSW5wdXRFdmVudFN1cHBvcnRlZDpJYyxleHRyYWN0RXZlbnRzOmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPWI/SmEoYik6d2luZG93LGY9dm9pZCAwLGc9dm9pZCAwLGg9ZS5ub2RlTmFtZSYmZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1wic2VsZWN0XCI9PT1ofHxcImlucHV0XCI9PT1oJiZcImZpbGVcIj09PWUudHlwZT9mPUhjOk1iKGUpP0ljP2Y9T2M6KGY9TWMsZz1MYyk6KGg9ZS5ub2RlTmFtZSkmJlwiaW5wdXRcIj09PWgudG9Mb3dlckNhc2UoKSYmKFwiY2hlY2tib3hcIj09PWUudHlwZXx8XCJyYWRpb1wiPT09ZS50eXBlKSYmKGY9TmMpO2lmKGYmJihmPWYoYSxiKSkpcmV0dXJuIENjKGYsYyxkKTtnJiZnKGEsZSxiKTtcImJsdXJcIj09PWEmJihhPWUuX3dyYXBwZXJTdGF0ZSkmJmEuY29udHJvbGxlZCYmXCJudW1iZXJcIj09PWUudHlwZSYmemMoZSxcIm51bWJlclwiLGUudmFsdWUpfX0sUWM9eS5leHRlbmQoe3ZpZXc6bnVsbCxkZXRhaWw6bnVsbH0pLFJjPXtBbHQ6XCJhbHRLZXlcIixcbkNvbnRyb2w6XCJjdHJsS2V5XCIsTWV0YTpcIm1ldGFLZXlcIixTaGlmdDpcInNoaWZ0S2V5XCJ9O2Z1bmN0aW9uIFNjKGEpe3ZhciBiPXRoaXMubmF0aXZlRXZlbnQ7cmV0dXJuIGIuZ2V0TW9kaWZpZXJTdGF0ZT9iLmdldE1vZGlmaWVyU3RhdGUoYSk6KGE9UmNbYV0pPyEhYlthXTohMX1mdW5jdGlvbiBUYygpe3JldHVybiBTY31cbnZhciBVYz0wLFZjPTAsV2M9ITEsWGM9ITEsWWM9UWMuZXh0ZW5kKHtzY3JlZW5YOm51bGwsc2NyZWVuWTpudWxsLGNsaWVudFg6bnVsbCxjbGllbnRZOm51bGwscGFnZVg6bnVsbCxwYWdlWTpudWxsLGN0cmxLZXk6bnVsbCxzaGlmdEtleTpudWxsLGFsdEtleTpudWxsLG1ldGFLZXk6bnVsbCxnZXRNb2RpZmllclN0YXRlOlRjLGJ1dHRvbjpudWxsLGJ1dHRvbnM6bnVsbCxyZWxhdGVkVGFyZ2V0OmZ1bmN0aW9uKGEpe3JldHVybiBhLnJlbGF0ZWRUYXJnZXR8fChhLmZyb21FbGVtZW50PT09YS5zcmNFbGVtZW50P2EudG9FbGVtZW50OmEuZnJvbUVsZW1lbnQpfSxtb3ZlbWVudFg6ZnVuY3Rpb24oYSl7aWYoXCJtb3ZlbWVudFhcImluIGEpcmV0dXJuIGEubW92ZW1lbnRYO3ZhciBiPVVjO1VjPWEuc2NyZWVuWDtyZXR1cm4gV2M/XCJtb3VzZW1vdmVcIj09PWEudHlwZT9hLnNjcmVlblgtYjowOihXYz0hMCwwKX0sbW92ZW1lbnRZOmZ1bmN0aW9uKGEpe2lmKFwibW92ZW1lbnRZXCJpbiBhKXJldHVybiBhLm1vdmVtZW50WTtcbnZhciBiPVZjO1ZjPWEuc2NyZWVuWTtyZXR1cm4gWGM/XCJtb3VzZW1vdmVcIj09PWEudHlwZT9hLnNjcmVlblktYjowOihYYz0hMCwwKX19KSxaYz1ZYy5leHRlbmQoe3BvaW50ZXJJZDpudWxsLHdpZHRoOm51bGwsaGVpZ2h0Om51bGwscHJlc3N1cmU6bnVsbCx0YW5nZW50aWFsUHJlc3N1cmU6bnVsbCx0aWx0WDpudWxsLHRpbHRZOm51bGwsdHdpc3Q6bnVsbCxwb2ludGVyVHlwZTpudWxsLGlzUHJpbWFyeTpudWxsfSksJGM9e21vdXNlRW50ZXI6e3JlZ2lzdHJhdGlvbk5hbWU6XCJvbk1vdXNlRW50ZXJcIixkZXBlbmRlbmNpZXM6W1wibW91c2VvdXRcIixcIm1vdXNlb3ZlclwiXX0sbW91c2VMZWF2ZTp7cmVnaXN0cmF0aW9uTmFtZTpcIm9uTW91c2VMZWF2ZVwiLGRlcGVuZGVuY2llczpbXCJtb3VzZW91dFwiLFwibW91c2VvdmVyXCJdfSxwb2ludGVyRW50ZXI6e3JlZ2lzdHJhdGlvbk5hbWU6XCJvblBvaW50ZXJFbnRlclwiLGRlcGVuZGVuY2llczpbXCJwb2ludGVyb3V0XCIsXCJwb2ludGVyb3ZlclwiXX0scG9pbnRlckxlYXZlOntyZWdpc3RyYXRpb25OYW1lOlwib25Qb2ludGVyTGVhdmVcIixcbmRlcGVuZGVuY2llczpbXCJwb2ludGVyb3V0XCIsXCJwb2ludGVyb3ZlclwiXX19LGFkPXtldmVudFR5cGVzOiRjLGV4dHJhY3RFdmVudHM6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9XCJtb3VzZW92ZXJcIj09PWF8fFwicG9pbnRlcm92ZXJcIj09PWEsZj1cIm1vdXNlb3V0XCI9PT1hfHxcInBvaW50ZXJvdXRcIj09PWE7aWYoZSYmKGMucmVsYXRlZFRhcmdldHx8Yy5mcm9tRWxlbWVudCl8fCFmJiYhZSlyZXR1cm4gbnVsbDtlPWQud2luZG93PT09ZD9kOihlPWQub3duZXJEb2N1bWVudCk/ZS5kZWZhdWx0Vmlld3x8ZS5wYXJlbnRXaW5kb3c6d2luZG93O2Y/KGY9YixiPShiPWMucmVsYXRlZFRhcmdldHx8Yy50b0VsZW1lbnQpP0hhKGIpOm51bGwpOmY9bnVsbDtpZihmPT09YilyZXR1cm4gbnVsbDt2YXIgZz12b2lkIDAsaD12b2lkIDAsbD12b2lkIDAsaz12b2lkIDA7aWYoXCJtb3VzZW91dFwiPT09YXx8XCJtb3VzZW92ZXJcIj09PWEpZz1ZYyxoPSRjLm1vdXNlTGVhdmUsbD0kYy5tb3VzZUVudGVyLGs9XCJtb3VzZVwiO1xuZWxzZSBpZihcInBvaW50ZXJvdXRcIj09PWF8fFwicG9pbnRlcm92ZXJcIj09PWEpZz1aYyxoPSRjLnBvaW50ZXJMZWF2ZSxsPSRjLnBvaW50ZXJFbnRlcixrPVwicG9pbnRlclwiO3ZhciBtPW51bGw9PWY/ZTpKYShmKTtlPW51bGw9PWI/ZTpKYShiKTthPWcuZ2V0UG9vbGVkKGgsZixjLGQpO2EudHlwZT1rK1wibGVhdmVcIjthLnRhcmdldD1tO2EucmVsYXRlZFRhcmdldD1lO2M9Zy5nZXRQb29sZWQobCxiLGMsZCk7Yy50eXBlPWsrXCJlbnRlclwiO2MudGFyZ2V0PWU7Yy5yZWxhdGVkVGFyZ2V0PW07ZD1iO2lmKGYmJmQpYTp7Yj1mO2U9ZDtrPTA7Zm9yKGc9YjtnO2c9TGEoZykpaysrO2c9MDtmb3IobD1lO2w7bD1MYShsKSlnKys7Zm9yKDswPGstZzspYj1MYShiKSxrLS07Zm9yKDswPGctazspZT1MYShlKSxnLS07Zm9yKDtrLS07KXtpZihiPT09ZXx8Yj09PWUuYWx0ZXJuYXRlKWJyZWFrIGE7Yj1MYShiKTtlPUxhKGUpfWI9bnVsbH1lbHNlIGI9bnVsbDtlPWI7Zm9yKGI9W107ZiYmZiE9PWU7KXtrPVxuZi5hbHRlcm5hdGU7aWYobnVsbCE9PWsmJms9PT1lKWJyZWFrO2IucHVzaChmKTtmPUxhKGYpfWZvcihmPVtdO2QmJmQhPT1lOyl7az1kLmFsdGVybmF0ZTtpZihudWxsIT09ayYmaz09PWUpYnJlYWs7Zi5wdXNoKGQpO2Q9TGEoZCl9Zm9yKGQ9MDtkPGIubGVuZ3RoO2QrKylPYShiW2RdLFwiYnViYmxlZFwiLGEpO2ZvcihkPWYubGVuZ3RoOzA8ZC0tOylPYShmW2RdLFwiY2FwdHVyZWRcIixjKTtyZXR1cm5bYSxjXX19O2Z1bmN0aW9uIGJkKGEsYil7cmV0dXJuIGE9PT1iJiYoMCE9PWF8fDEvYT09PTEvYil8fGEhPT1hJiZiIT09Yn12YXIgY2Q9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbmZ1bmN0aW9uIGRkKGEsYil7aWYoYmQoYSxiKSlyZXR1cm4hMDtpZihcIm9iamVjdFwiIT09dHlwZW9mIGF8fG51bGw9PT1hfHxcIm9iamVjdFwiIT09dHlwZW9mIGJ8fG51bGw9PT1iKXJldHVybiExO3ZhciBjPU9iamVjdC5rZXlzKGEpLGQ9T2JqZWN0LmtleXMoYik7aWYoYy5sZW5ndGghPT1kLmxlbmd0aClyZXR1cm4hMTtmb3IoZD0wO2Q8Yy5sZW5ndGg7ZCsrKWlmKCFjZC5jYWxsKGIsY1tkXSl8fCFiZChhW2NbZF1dLGJbY1tkXV0pKXJldHVybiExO3JldHVybiEwfWZ1bmN0aW9uIGVkKGEpe3ZhciBiPWE7aWYoYS5hbHRlcm5hdGUpZm9yKDtiLnJldHVybjspYj1iLnJldHVybjtlbHNle2lmKDAhPT0oYi5lZmZlY3RUYWcmMikpcmV0dXJuIDE7Zm9yKDtiLnJldHVybjspaWYoYj1iLnJldHVybiwwIT09KGIuZWZmZWN0VGFnJjIpKXJldHVybiAxfXJldHVybiAzPT09Yi50YWc/MjozfWZ1bmN0aW9uIGZkKGEpezIhPT1lZChhKT94KFwiMTg4XCIpOnZvaWQgMH1cbmZ1bmN0aW9uIGdkKGEpe3ZhciBiPWEuYWx0ZXJuYXRlO2lmKCFiKXJldHVybiBiPWVkKGEpLDM9PT1iP3goXCIxODhcIik6dm9pZCAwLDE9PT1iP251bGw6YTtmb3IodmFyIGM9YSxkPWI7Oyl7dmFyIGU9Yy5yZXR1cm4sZj1lP2UuYWx0ZXJuYXRlOm51bGw7aWYoIWV8fCFmKWJyZWFrO2lmKGUuY2hpbGQ9PT1mLmNoaWxkKXtmb3IodmFyIGc9ZS5jaGlsZDtnOyl7aWYoZz09PWMpcmV0dXJuIGZkKGUpLGE7aWYoZz09PWQpcmV0dXJuIGZkKGUpLGI7Zz1nLnNpYmxpbmd9eChcIjE4OFwiKX1pZihjLnJldHVybiE9PWQucmV0dXJuKWM9ZSxkPWY7ZWxzZXtnPSExO2Zvcih2YXIgaD1lLmNoaWxkO2g7KXtpZihoPT09Yyl7Zz0hMDtjPWU7ZD1mO2JyZWFrfWlmKGg9PT1kKXtnPSEwO2Q9ZTtjPWY7YnJlYWt9aD1oLnNpYmxpbmd9aWYoIWcpe2ZvcihoPWYuY2hpbGQ7aDspe2lmKGg9PT1jKXtnPSEwO2M9ZjtkPWU7YnJlYWt9aWYoaD09PWQpe2c9ITA7ZD1mO2M9ZTticmVha31oPWguc2libGluZ31nP1xudm9pZCAwOngoXCIxODlcIil9fWMuYWx0ZXJuYXRlIT09ZD94KFwiMTkwXCIpOnZvaWQgMH0zIT09Yy50YWc/eChcIjE4OFwiKTp2b2lkIDA7cmV0dXJuIGMuc3RhdGVOb2RlLmN1cnJlbnQ9PT1jP2E6Yn1mdW5jdGlvbiBoZChhKXthPWdkKGEpO2lmKCFhKXJldHVybiBudWxsO2Zvcih2YXIgYj1hOzspe2lmKDU9PT1iLnRhZ3x8Nj09PWIudGFnKXJldHVybiBiO2lmKGIuY2hpbGQpYi5jaGlsZC5yZXR1cm49YixiPWIuY2hpbGQ7ZWxzZXtpZihiPT09YSlicmVhaztmb3IoOyFiLnNpYmxpbmc7KXtpZighYi5yZXR1cm58fGIucmV0dXJuPT09YSlyZXR1cm4gbnVsbDtiPWIucmV0dXJufWIuc2libGluZy5yZXR1cm49Yi5yZXR1cm47Yj1iLnNpYmxpbmd9fXJldHVybiBudWxsfVxudmFyIGlkPXkuZXh0ZW5kKHthbmltYXRpb25OYW1lOm51bGwsZWxhcHNlZFRpbWU6bnVsbCxwc2V1ZG9FbGVtZW50Om51bGx9KSxqZD15LmV4dGVuZCh7Y2xpcGJvYXJkRGF0YTpmdW5jdGlvbihhKXtyZXR1cm5cImNsaXBib2FyZERhdGFcImluIGE/YS5jbGlwYm9hcmREYXRhOndpbmRvdy5jbGlwYm9hcmREYXRhfX0pLGtkPVFjLmV4dGVuZCh7cmVsYXRlZFRhcmdldDpudWxsfSk7ZnVuY3Rpb24gbGQoYSl7dmFyIGI9YS5rZXlDb2RlO1wiY2hhckNvZGVcImluIGE/KGE9YS5jaGFyQ29kZSwwPT09YSYmMTM9PT1iJiYoYT0xMykpOmE9YjsxMD09PWEmJihhPTEzKTtyZXR1cm4gMzI8PWF8fDEzPT09YT9hOjB9XG52YXIgbWQ9e0VzYzpcIkVzY2FwZVwiLFNwYWNlYmFyOlwiIFwiLExlZnQ6XCJBcnJvd0xlZnRcIixVcDpcIkFycm93VXBcIixSaWdodDpcIkFycm93UmlnaHRcIixEb3duOlwiQXJyb3dEb3duXCIsRGVsOlwiRGVsZXRlXCIsV2luOlwiT1NcIixNZW51OlwiQ29udGV4dE1lbnVcIixBcHBzOlwiQ29udGV4dE1lbnVcIixTY3JvbGw6XCJTY3JvbGxMb2NrXCIsTW96UHJpbnRhYmxlS2V5OlwiVW5pZGVudGlmaWVkXCJ9LG5kPXs4OlwiQmFja3NwYWNlXCIsOTpcIlRhYlwiLDEyOlwiQ2xlYXJcIiwxMzpcIkVudGVyXCIsMTY6XCJTaGlmdFwiLDE3OlwiQ29udHJvbFwiLDE4OlwiQWx0XCIsMTk6XCJQYXVzZVwiLDIwOlwiQ2Fwc0xvY2tcIiwyNzpcIkVzY2FwZVwiLDMyOlwiIFwiLDMzOlwiUGFnZVVwXCIsMzQ6XCJQYWdlRG93blwiLDM1OlwiRW5kXCIsMzY6XCJIb21lXCIsMzc6XCJBcnJvd0xlZnRcIiwzODpcIkFycm93VXBcIiwzOTpcIkFycm93UmlnaHRcIiw0MDpcIkFycm93RG93blwiLDQ1OlwiSW5zZXJ0XCIsNDY6XCJEZWxldGVcIiwxMTI6XCJGMVwiLDExMzpcIkYyXCIsMTE0OlwiRjNcIiwxMTU6XCJGNFwiLFxuMTE2OlwiRjVcIiwxMTc6XCJGNlwiLDExODpcIkY3XCIsMTE5OlwiRjhcIiwxMjA6XCJGOVwiLDEyMTpcIkYxMFwiLDEyMjpcIkYxMVwiLDEyMzpcIkYxMlwiLDE0NDpcIk51bUxvY2tcIiwxNDU6XCJTY3JvbGxMb2NrXCIsMjI0OlwiTWV0YVwifSxvZD1RYy5leHRlbmQoe2tleTpmdW5jdGlvbihhKXtpZihhLmtleSl7dmFyIGI9bWRbYS5rZXldfHxhLmtleTtpZihcIlVuaWRlbnRpZmllZFwiIT09YilyZXR1cm4gYn1yZXR1cm5cImtleXByZXNzXCI9PT1hLnR5cGU/KGE9bGQoYSksMTM9PT1hP1wiRW50ZXJcIjpTdHJpbmcuZnJvbUNoYXJDb2RlKGEpKTpcImtleWRvd25cIj09PWEudHlwZXx8XCJrZXl1cFwiPT09YS50eXBlP25kW2Eua2V5Q29kZV18fFwiVW5pZGVudGlmaWVkXCI6XCJcIn0sbG9jYXRpb246bnVsbCxjdHJsS2V5Om51bGwsc2hpZnRLZXk6bnVsbCxhbHRLZXk6bnVsbCxtZXRhS2V5Om51bGwscmVwZWF0Om51bGwsbG9jYWxlOm51bGwsZ2V0TW9kaWZpZXJTdGF0ZTpUYyxjaGFyQ29kZTpmdW5jdGlvbihhKXtyZXR1cm5cImtleXByZXNzXCI9PT1cbmEudHlwZT9sZChhKTowfSxrZXlDb2RlOmZ1bmN0aW9uKGEpe3JldHVyblwia2V5ZG93blwiPT09YS50eXBlfHxcImtleXVwXCI9PT1hLnR5cGU/YS5rZXlDb2RlOjB9LHdoaWNoOmZ1bmN0aW9uKGEpe3JldHVyblwia2V5cHJlc3NcIj09PWEudHlwZT9sZChhKTpcImtleWRvd25cIj09PWEudHlwZXx8XCJrZXl1cFwiPT09YS50eXBlP2Eua2V5Q29kZTowfX0pLHBkPVljLmV4dGVuZCh7ZGF0YVRyYW5zZmVyOm51bGx9KSxxZD1RYy5leHRlbmQoe3RvdWNoZXM6bnVsbCx0YXJnZXRUb3VjaGVzOm51bGwsY2hhbmdlZFRvdWNoZXM6bnVsbCxhbHRLZXk6bnVsbCxtZXRhS2V5Om51bGwsY3RybEtleTpudWxsLHNoaWZ0S2V5Om51bGwsZ2V0TW9kaWZpZXJTdGF0ZTpUY30pLHJkPXkuZXh0ZW5kKHtwcm9wZXJ0eU5hbWU6bnVsbCxlbGFwc2VkVGltZTpudWxsLHBzZXVkb0VsZW1lbnQ6bnVsbH0pLHNkPVljLmV4dGVuZCh7ZGVsdGFYOmZ1bmN0aW9uKGEpe3JldHVyblwiZGVsdGFYXCJpbiBhP2EuZGVsdGFYOlwid2hlZWxEZWx0YVhcImluXG5hPy1hLndoZWVsRGVsdGFYOjB9LGRlbHRhWTpmdW5jdGlvbihhKXtyZXR1cm5cImRlbHRhWVwiaW4gYT9hLmRlbHRhWTpcIndoZWVsRGVsdGFZXCJpbiBhPy1hLndoZWVsRGVsdGFZOlwid2hlZWxEZWx0YVwiaW4gYT8tYS53aGVlbERlbHRhOjB9LGRlbHRhWjpudWxsLGRlbHRhTW9kZTpudWxsfSksdGQ9W1tcImFib3J0XCIsXCJhYm9ydFwiXSxbWGEsXCJhbmltYXRpb25FbmRcIl0sW1lhLFwiYW5pbWF0aW9uSXRlcmF0aW9uXCJdLFtaYSxcImFuaW1hdGlvblN0YXJ0XCJdLFtcImNhbnBsYXlcIixcImNhblBsYXlcIl0sW1wiY2FucGxheXRocm91Z2hcIixcImNhblBsYXlUaHJvdWdoXCJdLFtcImRyYWdcIixcImRyYWdcIl0sW1wiZHJhZ2VudGVyXCIsXCJkcmFnRW50ZXJcIl0sW1wiZHJhZ2V4aXRcIixcImRyYWdFeGl0XCJdLFtcImRyYWdsZWF2ZVwiLFwiZHJhZ0xlYXZlXCJdLFtcImRyYWdvdmVyXCIsXCJkcmFnT3ZlclwiXSxbXCJkdXJhdGlvbmNoYW5nZVwiLFwiZHVyYXRpb25DaGFuZ2VcIl0sW1wiZW1wdGllZFwiLFwiZW1wdGllZFwiXSxbXCJlbmNyeXB0ZWRcIixcImVuY3J5cHRlZFwiXSxcbltcImVuZGVkXCIsXCJlbmRlZFwiXSxbXCJlcnJvclwiLFwiZXJyb3JcIl0sW1wiZ290cG9pbnRlcmNhcHR1cmVcIixcImdvdFBvaW50ZXJDYXB0dXJlXCJdLFtcImxvYWRcIixcImxvYWRcIl0sW1wibG9hZGVkZGF0YVwiLFwibG9hZGVkRGF0YVwiXSxbXCJsb2FkZWRtZXRhZGF0YVwiLFwibG9hZGVkTWV0YWRhdGFcIl0sW1wibG9hZHN0YXJ0XCIsXCJsb2FkU3RhcnRcIl0sW1wibG9zdHBvaW50ZXJjYXB0dXJlXCIsXCJsb3N0UG9pbnRlckNhcHR1cmVcIl0sW1wibW91c2Vtb3ZlXCIsXCJtb3VzZU1vdmVcIl0sW1wibW91c2VvdXRcIixcIm1vdXNlT3V0XCJdLFtcIm1vdXNlb3ZlclwiLFwibW91c2VPdmVyXCJdLFtcInBsYXlpbmdcIixcInBsYXlpbmdcIl0sW1wicG9pbnRlcm1vdmVcIixcInBvaW50ZXJNb3ZlXCJdLFtcInBvaW50ZXJvdXRcIixcInBvaW50ZXJPdXRcIl0sW1wicG9pbnRlcm92ZXJcIixcInBvaW50ZXJPdmVyXCJdLFtcInByb2dyZXNzXCIsXCJwcm9ncmVzc1wiXSxbXCJzY3JvbGxcIixcInNjcm9sbFwiXSxbXCJzZWVraW5nXCIsXCJzZWVraW5nXCJdLFtcInN0YWxsZWRcIixcInN0YWxsZWRcIl0sXG5bXCJzdXNwZW5kXCIsXCJzdXNwZW5kXCJdLFtcInRpbWV1cGRhdGVcIixcInRpbWVVcGRhdGVcIl0sW1widG9nZ2xlXCIsXCJ0b2dnbGVcIl0sW1widG91Y2htb3ZlXCIsXCJ0b3VjaE1vdmVcIl0sWyRhLFwidHJhbnNpdGlvbkVuZFwiXSxbXCJ3YWl0aW5nXCIsXCJ3YWl0aW5nXCJdLFtcIndoZWVsXCIsXCJ3aGVlbFwiXV0sdWQ9e30sdmQ9e307ZnVuY3Rpb24gd2QoYSxiKXt2YXIgYz1hWzBdO2E9YVsxXTt2YXIgZD1cIm9uXCIrKGFbMF0udG9VcHBlckNhc2UoKSthLnNsaWNlKDEpKTtiPXtwaGFzZWRSZWdpc3RyYXRpb25OYW1lczp7YnViYmxlZDpkLGNhcHR1cmVkOmQrXCJDYXB0dXJlXCJ9LGRlcGVuZGVuY2llczpbY10saXNJbnRlcmFjdGl2ZTpifTt1ZFthXT1iO3ZkW2NdPWJ9XG5bW1wiYmx1clwiLFwiYmx1clwiXSxbXCJjYW5jZWxcIixcImNhbmNlbFwiXSxbXCJjbGlja1wiLFwiY2xpY2tcIl0sW1wiY2xvc2VcIixcImNsb3NlXCJdLFtcImNvbnRleHRtZW51XCIsXCJjb250ZXh0TWVudVwiXSxbXCJjb3B5XCIsXCJjb3B5XCJdLFtcImN1dFwiLFwiY3V0XCJdLFtcImF1eGNsaWNrXCIsXCJhdXhDbGlja1wiXSxbXCJkYmxjbGlja1wiLFwiZG91YmxlQ2xpY2tcIl0sW1wiZHJhZ2VuZFwiLFwiZHJhZ0VuZFwiXSxbXCJkcmFnc3RhcnRcIixcImRyYWdTdGFydFwiXSxbXCJkcm9wXCIsXCJkcm9wXCJdLFtcImZvY3VzXCIsXCJmb2N1c1wiXSxbXCJpbnB1dFwiLFwiaW5wdXRcIl0sW1wiaW52YWxpZFwiLFwiaW52YWxpZFwiXSxbXCJrZXlkb3duXCIsXCJrZXlEb3duXCJdLFtcImtleXByZXNzXCIsXCJrZXlQcmVzc1wiXSxbXCJrZXl1cFwiLFwia2V5VXBcIl0sW1wibW91c2Vkb3duXCIsXCJtb3VzZURvd25cIl0sW1wibW91c2V1cFwiLFwibW91c2VVcFwiXSxbXCJwYXN0ZVwiLFwicGFzdGVcIl0sW1wicGF1c2VcIixcInBhdXNlXCJdLFtcInBsYXlcIixcInBsYXlcIl0sW1wicG9pbnRlcmNhbmNlbFwiLFwicG9pbnRlckNhbmNlbFwiXSxcbltcInBvaW50ZXJkb3duXCIsXCJwb2ludGVyRG93blwiXSxbXCJwb2ludGVydXBcIixcInBvaW50ZXJVcFwiXSxbXCJyYXRlY2hhbmdlXCIsXCJyYXRlQ2hhbmdlXCJdLFtcInJlc2V0XCIsXCJyZXNldFwiXSxbXCJzZWVrZWRcIixcInNlZWtlZFwiXSxbXCJzdWJtaXRcIixcInN1Ym1pdFwiXSxbXCJ0b3VjaGNhbmNlbFwiLFwidG91Y2hDYW5jZWxcIl0sW1widG91Y2hlbmRcIixcInRvdWNoRW5kXCJdLFtcInRvdWNoc3RhcnRcIixcInRvdWNoU3RhcnRcIl0sW1widm9sdW1lY2hhbmdlXCIsXCJ2b2x1bWVDaGFuZ2VcIl1dLmZvckVhY2goZnVuY3Rpb24oYSl7d2QoYSwhMCl9KTt0ZC5mb3JFYWNoKGZ1bmN0aW9uKGEpe3dkKGEsITEpfSk7XG52YXIgeGQ9e2V2ZW50VHlwZXM6dWQsaXNJbnRlcmFjdGl2ZVRvcExldmVsRXZlbnRUeXBlOmZ1bmN0aW9uKGEpe2E9dmRbYV07cmV0dXJuIHZvaWQgMCE9PWEmJiEwPT09YS5pc0ludGVyYWN0aXZlfSxleHRyYWN0RXZlbnRzOmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPXZkW2FdO2lmKCFlKXJldHVybiBudWxsO3N3aXRjaChhKXtjYXNlIFwia2V5cHJlc3NcIjppZigwPT09bGQoYykpcmV0dXJuIG51bGw7Y2FzZSBcImtleWRvd25cIjpjYXNlIFwia2V5dXBcIjphPW9kO2JyZWFrO2Nhc2UgXCJibHVyXCI6Y2FzZSBcImZvY3VzXCI6YT1rZDticmVhaztjYXNlIFwiY2xpY2tcIjppZigyPT09Yy5idXR0b24pcmV0dXJuIG51bGw7Y2FzZSBcImF1eGNsaWNrXCI6Y2FzZSBcImRibGNsaWNrXCI6Y2FzZSBcIm1vdXNlZG93blwiOmNhc2UgXCJtb3VzZW1vdmVcIjpjYXNlIFwibW91c2V1cFwiOmNhc2UgXCJtb3VzZW91dFwiOmNhc2UgXCJtb3VzZW92ZXJcIjpjYXNlIFwiY29udGV4dG1lbnVcIjphPVljO2JyZWFrO2Nhc2UgXCJkcmFnXCI6Y2FzZSBcImRyYWdlbmRcIjpjYXNlIFwiZHJhZ2VudGVyXCI6Y2FzZSBcImRyYWdleGl0XCI6Y2FzZSBcImRyYWdsZWF2ZVwiOmNhc2UgXCJkcmFnb3ZlclwiOmNhc2UgXCJkcmFnc3RhcnRcIjpjYXNlIFwiZHJvcFwiOmE9XG5wZDticmVhaztjYXNlIFwidG91Y2hjYW5jZWxcIjpjYXNlIFwidG91Y2hlbmRcIjpjYXNlIFwidG91Y2htb3ZlXCI6Y2FzZSBcInRvdWNoc3RhcnRcIjphPXFkO2JyZWFrO2Nhc2UgWGE6Y2FzZSBZYTpjYXNlIFphOmE9aWQ7YnJlYWs7Y2FzZSAkYTphPXJkO2JyZWFrO2Nhc2UgXCJzY3JvbGxcIjphPVFjO2JyZWFrO2Nhc2UgXCJ3aGVlbFwiOmE9c2Q7YnJlYWs7Y2FzZSBcImNvcHlcIjpjYXNlIFwiY3V0XCI6Y2FzZSBcInBhc3RlXCI6YT1qZDticmVhaztjYXNlIFwiZ290cG9pbnRlcmNhcHR1cmVcIjpjYXNlIFwibG9zdHBvaW50ZXJjYXB0dXJlXCI6Y2FzZSBcInBvaW50ZXJjYW5jZWxcIjpjYXNlIFwicG9pbnRlcmRvd25cIjpjYXNlIFwicG9pbnRlcm1vdmVcIjpjYXNlIFwicG9pbnRlcm91dFwiOmNhc2UgXCJwb2ludGVyb3ZlclwiOmNhc2UgXCJwb2ludGVydXBcIjphPVpjO2JyZWFrO2RlZmF1bHQ6YT15fWI9YS5nZXRQb29sZWQoZSxiLGMsZCk7UWEoYik7cmV0dXJuIGJ9fSx5ZD14ZC5pc0ludGVyYWN0aXZlVG9wTGV2ZWxFdmVudFR5cGUsXG56ZD1bXTtmdW5jdGlvbiBBZChhKXt2YXIgYj1hLnRhcmdldEluc3QsYz1iO2Rve2lmKCFjKXthLmFuY2VzdG9ycy5wdXNoKGMpO2JyZWFrfXZhciBkO2ZvcihkPWM7ZC5yZXR1cm47KWQ9ZC5yZXR1cm47ZD0zIT09ZC50YWc/bnVsbDpkLnN0YXRlTm9kZS5jb250YWluZXJJbmZvO2lmKCFkKWJyZWFrO2EuYW5jZXN0b3JzLnB1c2goYyk7Yz1IYShkKX13aGlsZShjKTtmb3IoYz0wO2M8YS5hbmNlc3RvcnMubGVuZ3RoO2MrKyl7Yj1hLmFuY2VzdG9yc1tjXTt2YXIgZT1OYihhLm5hdGl2ZUV2ZW50KTtkPWEudG9wTGV2ZWxUeXBlO2Zvcih2YXIgZj1hLm5hdGl2ZUV2ZW50LGc9bnVsbCxoPTA7aDxvYS5sZW5ndGg7aCsrKXt2YXIgbD1vYVtoXTtsJiYobD1sLmV4dHJhY3RFdmVudHMoZCxiLGYsZSkpJiYoZz14YShnLGwpKX1EYShnKX19dmFyIEJkPSEwO1xuZnVuY3Rpb24gRShhLGIpe2lmKCFiKXJldHVybiBudWxsO3ZhciBjPSh5ZChhKT9DZDpEZCkuYmluZChudWxsLGEpO2IuYWRkRXZlbnRMaXN0ZW5lcihhLGMsITEpfWZ1bmN0aW9uIEVkKGEsYil7aWYoIWIpcmV0dXJuIG51bGw7dmFyIGM9KHlkKGEpP0NkOkRkKS5iaW5kKG51bGwsYSk7Yi5hZGRFdmVudExpc3RlbmVyKGEsYywhMCl9ZnVuY3Rpb24gQ2QoYSxiKXtIYihEZCxhLGIpfVxuZnVuY3Rpb24gRGQoYSxiKXtpZihCZCl7dmFyIGM9TmIoYik7Yz1IYShjKTtudWxsPT09Y3x8XCJudW1iZXJcIiE9PXR5cGVvZiBjLnRhZ3x8Mj09PWVkKGMpfHwoYz1udWxsKTtpZih6ZC5sZW5ndGgpe3ZhciBkPXpkLnBvcCgpO2QudG9wTGV2ZWxUeXBlPWE7ZC5uYXRpdmVFdmVudD1iO2QudGFyZ2V0SW5zdD1jO2E9ZH1lbHNlIGE9e3RvcExldmVsVHlwZTphLG5hdGl2ZUV2ZW50OmIsdGFyZ2V0SW5zdDpjLGFuY2VzdG9yczpbXX07dHJ5e0tiKEFkLGEpfWZpbmFsbHl7YS50b3BMZXZlbFR5cGU9bnVsbCxhLm5hdGl2ZUV2ZW50PW51bGwsYS50YXJnZXRJbnN0PW51bGwsYS5hbmNlc3RvcnMubGVuZ3RoPTAsMTA+emQubGVuZ3RoJiZ6ZC5wdXNoKGEpfX19dmFyIEZkPXt9LEdkPTAsSGQ9XCJfcmVhY3RMaXN0ZW5lcnNJRFwiKyhcIlwiK01hdGgucmFuZG9tKCkpLnNsaWNlKDIpO1xuZnVuY3Rpb24gSWQoYSl7T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGEsSGQpfHwoYVtIZF09R2QrKyxGZFthW0hkXV09e30pO3JldHVybiBGZFthW0hkXV19ZnVuY3Rpb24gSmQoYSl7YT1hfHwoXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBkb2N1bWVudD9kb2N1bWVudDp2b2lkIDApO2lmKFwidW5kZWZpbmVkXCI9PT10eXBlb2YgYSlyZXR1cm4gbnVsbDt0cnl7cmV0dXJuIGEuYWN0aXZlRWxlbWVudHx8YS5ib2R5fWNhdGNoKGIpe3JldHVybiBhLmJvZHl9fWZ1bmN0aW9uIEtkKGEpe2Zvcig7YSYmYS5maXJzdENoaWxkOylhPWEuZmlyc3RDaGlsZDtyZXR1cm4gYX1cbmZ1bmN0aW9uIExkKGEsYil7dmFyIGM9S2QoYSk7YT0wO2Zvcih2YXIgZDtjOyl7aWYoMz09PWMubm9kZVR5cGUpe2Q9YStjLnRleHRDb250ZW50Lmxlbmd0aDtpZihhPD1iJiZkPj1iKXJldHVybntub2RlOmMsb2Zmc2V0OmItYX07YT1kfWE6e2Zvcig7Yzspe2lmKGMubmV4dFNpYmxpbmcpe2M9Yy5uZXh0U2libGluZzticmVhayBhfWM9Yy5wYXJlbnROb2RlfWM9dm9pZCAwfWM9S2QoYyl9fWZ1bmN0aW9uIE1kKGEsYil7cmV0dXJuIGEmJmI/YT09PWI/ITA6YSYmMz09PWEubm9kZVR5cGU/ITE6YiYmMz09PWIubm9kZVR5cGU/TWQoYSxiLnBhcmVudE5vZGUpOlwiY29udGFpbnNcImluIGE/YS5jb250YWlucyhiKTphLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uPyEhKGEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oYikmMTYpOiExOiExfVxuZnVuY3Rpb24gTmQoKXtmb3IodmFyIGE9d2luZG93LGI9SmQoKTtiIGluc3RhbmNlb2YgYS5IVE1MSUZyYW1lRWxlbWVudDspe3RyeXt2YXIgYz1cInN0cmluZ1wiPT09dHlwZW9mIGIuY29udGVudFdpbmRvdy5sb2NhdGlvbi5ocmVmfWNhdGNoKGQpe2M9ITF9aWYoYylhPWIuY29udGVudFdpbmRvdztlbHNlIGJyZWFrO2I9SmQoYS5kb2N1bWVudCl9cmV0dXJuIGJ9ZnVuY3Rpb24gT2QoYSl7dmFyIGI9YSYmYS5ub2RlTmFtZSYmYS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVybiBiJiYoXCJpbnB1dFwiPT09YiYmKFwidGV4dFwiPT09YS50eXBlfHxcInNlYXJjaFwiPT09YS50eXBlfHxcInRlbFwiPT09YS50eXBlfHxcInVybFwiPT09YS50eXBlfHxcInBhc3N3b3JkXCI9PT1hLnR5cGUpfHxcInRleHRhcmVhXCI9PT1ifHxcInRydWVcIj09PWEuY29udGVudEVkaXRhYmxlKX1cbmZ1bmN0aW9uIFBkKCl7dmFyIGE9TmQoKTtpZihPZChhKSl7aWYoXCJzZWxlY3Rpb25TdGFydFwiaW4gYSl2YXIgYj17c3RhcnQ6YS5zZWxlY3Rpb25TdGFydCxlbmQ6YS5zZWxlY3Rpb25FbmR9O2Vsc2UgYTp7Yj0oYj1hLm93bmVyRG9jdW1lbnQpJiZiLmRlZmF1bHRWaWV3fHx3aW5kb3c7dmFyIGM9Yi5nZXRTZWxlY3Rpb24mJmIuZ2V0U2VsZWN0aW9uKCk7aWYoYyYmMCE9PWMucmFuZ2VDb3VudCl7Yj1jLmFuY2hvck5vZGU7dmFyIGQ9Yy5hbmNob3JPZmZzZXQsZT1jLmZvY3VzTm9kZTtjPWMuZm9jdXNPZmZzZXQ7dHJ5e2Iubm9kZVR5cGUsZS5ub2RlVHlwZX1jYXRjaChBKXtiPW51bGw7YnJlYWsgYX12YXIgZj0wLGc9LTEsaD0tMSxsPTAsaz0wLG09YSxwPW51bGw7Yjpmb3IoOzspe2Zvcih2YXIgdDs7KXttIT09Ynx8MCE9PWQmJjMhPT1tLm5vZGVUeXBlfHwoZz1mK2QpO20hPT1lfHwwIT09YyYmMyE9PW0ubm9kZVR5cGV8fChoPWYrYyk7Mz09PW0ubm9kZVR5cGUmJihmKz1tLm5vZGVWYWx1ZS5sZW5ndGgpO1xuaWYobnVsbD09PSh0PW0uZmlyc3RDaGlsZCkpYnJlYWs7cD1tO209dH1mb3IoOzspe2lmKG09PT1hKWJyZWFrIGI7cD09PWImJisrbD09PWQmJihnPWYpO3A9PT1lJiYrK2s9PT1jJiYoaD1mKTtpZihudWxsIT09KHQ9bS5uZXh0U2libGluZykpYnJlYWs7bT1wO3A9bS5wYXJlbnROb2RlfW09dH1iPS0xPT09Z3x8LTE9PT1oP251bGw6e3N0YXJ0OmcsZW5kOmh9fWVsc2UgYj1udWxsfWI9Ynx8e3N0YXJ0OjAsZW5kOjB9fWVsc2UgYj1udWxsO3JldHVybntmb2N1c2VkRWxlbTphLHNlbGVjdGlvblJhbmdlOmJ9fVxuZnVuY3Rpb24gUWQoYSl7dmFyIGI9TmQoKSxjPWEuZm9jdXNlZEVsZW0sZD1hLnNlbGVjdGlvblJhbmdlO2lmKGIhPT1jJiZjJiZjLm93bmVyRG9jdW1lbnQmJk1kKGMub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsYykpe2lmKG51bGwhPT1kJiZPZChjKSlpZihiPWQuc3RhcnQsYT1kLmVuZCx2b2lkIDA9PT1hJiYoYT1iKSxcInNlbGVjdGlvblN0YXJ0XCJpbiBjKWMuc2VsZWN0aW9uU3RhcnQ9YixjLnNlbGVjdGlvbkVuZD1NYXRoLm1pbihhLGMudmFsdWUubGVuZ3RoKTtlbHNlIGlmKGE9KGI9Yy5vd25lckRvY3VtZW50fHxkb2N1bWVudCkmJmIuZGVmYXVsdFZpZXd8fHdpbmRvdyxhLmdldFNlbGVjdGlvbil7YT1hLmdldFNlbGVjdGlvbigpO3ZhciBlPWMudGV4dENvbnRlbnQubGVuZ3RoLGY9TWF0aC5taW4oZC5zdGFydCxlKTtkPXZvaWQgMD09PWQuZW5kP2Y6TWF0aC5taW4oZC5lbmQsZSk7IWEuZXh0ZW5kJiZmPmQmJihlPWQsZD1mLGY9ZSk7ZT1MZChjLGYpO3ZhciBnPUxkKGMsXG5kKTtlJiZnJiYoMSE9PWEucmFuZ2VDb3VudHx8YS5hbmNob3JOb2RlIT09ZS5ub2RlfHxhLmFuY2hvck9mZnNldCE9PWUub2Zmc2V0fHxhLmZvY3VzTm9kZSE9PWcubm9kZXx8YS5mb2N1c09mZnNldCE9PWcub2Zmc2V0KSYmKGI9Yi5jcmVhdGVSYW5nZSgpLGIuc2V0U3RhcnQoZS5ub2RlLGUub2Zmc2V0KSxhLnJlbW92ZUFsbFJhbmdlcygpLGY+ZD8oYS5hZGRSYW5nZShiKSxhLmV4dGVuZChnLm5vZGUsZy5vZmZzZXQpKTooYi5zZXRFbmQoZy5ub2RlLGcub2Zmc2V0KSxhLmFkZFJhbmdlKGIpKSl9Yj1bXTtmb3IoYT1jO2E9YS5wYXJlbnROb2RlOykxPT09YS5ub2RlVHlwZSYmYi5wdXNoKHtlbGVtZW50OmEsbGVmdDphLnNjcm9sbExlZnQsdG9wOmEuc2Nyb2xsVG9wfSk7XCJmdW5jdGlvblwiPT09dHlwZW9mIGMuZm9jdXMmJmMuZm9jdXMoKTtmb3IoYz0wO2M8Yi5sZW5ndGg7YysrKWE9YltjXSxhLmVsZW1lbnQuc2Nyb2xsTGVmdD1hLmxlZnQsYS5lbGVtZW50LnNjcm9sbFRvcD1hLnRvcH19XG52YXIgUmQ9UmEmJlwiZG9jdW1lbnRNb2RlXCJpbiBkb2N1bWVudCYmMTE+PWRvY3VtZW50LmRvY3VtZW50TW9kZSxTZD17c2VsZWN0OntwaGFzZWRSZWdpc3RyYXRpb25OYW1lczp7YnViYmxlZDpcIm9uU2VsZWN0XCIsY2FwdHVyZWQ6XCJvblNlbGVjdENhcHR1cmVcIn0sZGVwZW5kZW5jaWVzOlwiYmx1ciBjb250ZXh0bWVudSBkcmFnZW5kIGZvY3VzIGtleWRvd24ga2V5dXAgbW91c2Vkb3duIG1vdXNldXAgc2VsZWN0aW9uY2hhbmdlXCIuc3BsaXQoXCIgXCIpfX0sVGQ9bnVsbCxVZD1udWxsLFZkPW51bGwsV2Q9ITE7XG5mdW5jdGlvbiBYZChhLGIpe3ZhciBjPWIud2luZG93PT09Yj9iLmRvY3VtZW50Ojk9PT1iLm5vZGVUeXBlP2I6Yi5vd25lckRvY3VtZW50O2lmKFdkfHxudWxsPT1UZHx8VGQhPT1KZChjKSlyZXR1cm4gbnVsbDtjPVRkO1wic2VsZWN0aW9uU3RhcnRcImluIGMmJk9kKGMpP2M9e3N0YXJ0OmMuc2VsZWN0aW9uU3RhcnQsZW5kOmMuc2VsZWN0aW9uRW5kfTooYz0oYy5vd25lckRvY3VtZW50JiZjLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXd8fHdpbmRvdykuZ2V0U2VsZWN0aW9uKCksYz17YW5jaG9yTm9kZTpjLmFuY2hvck5vZGUsYW5jaG9yT2Zmc2V0OmMuYW5jaG9yT2Zmc2V0LGZvY3VzTm9kZTpjLmZvY3VzTm9kZSxmb2N1c09mZnNldDpjLmZvY3VzT2Zmc2V0fSk7cmV0dXJuIFZkJiZkZChWZCxjKT9udWxsOihWZD1jLGE9eS5nZXRQb29sZWQoU2Quc2VsZWN0LFVkLGEsYiksYS50eXBlPVwic2VsZWN0XCIsYS50YXJnZXQ9VGQsUWEoYSksYSl9XG52YXIgWWQ9e2V2ZW50VHlwZXM6U2QsZXh0cmFjdEV2ZW50czpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1kLndpbmRvdz09PWQ/ZC5kb2N1bWVudDo5PT09ZC5ub2RlVHlwZT9kOmQub3duZXJEb2N1bWVudCxmO2lmKCEoZj0hZSkpe2E6e2U9SWQoZSk7Zj1zYS5vblNlbGVjdDtmb3IodmFyIGc9MDtnPGYubGVuZ3RoO2crKyl7dmFyIGg9ZltnXTtpZighZS5oYXNPd25Qcm9wZXJ0eShoKXx8IWVbaF0pe2U9ITE7YnJlYWsgYX19ZT0hMH1mPSFlfWlmKGYpcmV0dXJuIG51bGw7ZT1iP0phKGIpOndpbmRvdztzd2l0Y2goYSl7Y2FzZSBcImZvY3VzXCI6aWYoTWIoZSl8fFwidHJ1ZVwiPT09ZS5jb250ZW50RWRpdGFibGUpVGQ9ZSxVZD1iLFZkPW51bGw7YnJlYWs7Y2FzZSBcImJsdXJcIjpWZD1VZD1UZD1udWxsO2JyZWFrO2Nhc2UgXCJtb3VzZWRvd25cIjpXZD0hMDticmVhaztjYXNlIFwiY29udGV4dG1lbnVcIjpjYXNlIFwibW91c2V1cFwiOmNhc2UgXCJkcmFnZW5kXCI6cmV0dXJuIFdkPSExLFhkKGMsZCk7Y2FzZSBcInNlbGVjdGlvbmNoYW5nZVwiOmlmKFJkKWJyZWFrO1xuY2FzZSBcImtleWRvd25cIjpjYXNlIFwia2V5dXBcIjpyZXR1cm4gWGQoYyxkKX1yZXR1cm4gbnVsbH19O0JhLmluamVjdEV2ZW50UGx1Z2luT3JkZXIoXCJSZXNwb25kZXJFdmVudFBsdWdpbiBTaW1wbGVFdmVudFBsdWdpbiBFbnRlckxlYXZlRXZlbnRQbHVnaW4gQ2hhbmdlRXZlbnRQbHVnaW4gU2VsZWN0RXZlbnRQbHVnaW4gQmVmb3JlSW5wdXRFdmVudFBsdWdpblwiLnNwbGl0KFwiIFwiKSk7dGE9S2E7dWE9SWE7dmE9SmE7QmEuaW5qZWN0RXZlbnRQbHVnaW5zQnlOYW1lKHtTaW1wbGVFdmVudFBsdWdpbjp4ZCxFbnRlckxlYXZlRXZlbnRQbHVnaW46YWQsQ2hhbmdlRXZlbnRQbHVnaW46UGMsU2VsZWN0RXZlbnRQbHVnaW46WWQsQmVmb3JlSW5wdXRFdmVudFBsdWdpbjp6Yn0pO2Z1bmN0aW9uIFpkKGEpe3ZhciBiPVwiXCI7YWEuQ2hpbGRyZW4uZm9yRWFjaChhLGZ1bmN0aW9uKGEpe251bGwhPWEmJihiKz1hKX0pO3JldHVybiBifVxuZnVuY3Rpb24gJGQoYSxiKXthPW4oe2NoaWxkcmVuOnZvaWQgMH0sYik7aWYoYj1aZChiLmNoaWxkcmVuKSlhLmNoaWxkcmVuPWI7cmV0dXJuIGF9ZnVuY3Rpb24gYWUoYSxiLGMsZCl7YT1hLm9wdGlvbnM7aWYoYil7Yj17fTtmb3IodmFyIGU9MDtlPGMubGVuZ3RoO2UrKyliW1wiJFwiK2NbZV1dPSEwO2ZvcihjPTA7YzxhLmxlbmd0aDtjKyspZT1iLmhhc093blByb3BlcnR5KFwiJFwiK2FbY10udmFsdWUpLGFbY10uc2VsZWN0ZWQhPT1lJiYoYVtjXS5zZWxlY3RlZD1lKSxlJiZkJiYoYVtjXS5kZWZhdWx0U2VsZWN0ZWQ9ITApfWVsc2V7Yz1cIlwiK3VjKGMpO2I9bnVsbDtmb3IoZT0wO2U8YS5sZW5ndGg7ZSsrKXtpZihhW2VdLnZhbHVlPT09Yyl7YVtlXS5zZWxlY3RlZD0hMDtkJiYoYVtlXS5kZWZhdWx0U2VsZWN0ZWQ9ITApO3JldHVybn1udWxsIT09Ynx8YVtlXS5kaXNhYmxlZHx8KGI9YVtlXSl9bnVsbCE9PWImJihiLnNlbGVjdGVkPSEwKX19XG5mdW5jdGlvbiBiZShhLGIpe251bGwhPWIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw/eChcIjkxXCIpOnZvaWQgMDtyZXR1cm4gbih7fSxiLHt2YWx1ZTp2b2lkIDAsZGVmYXVsdFZhbHVlOnZvaWQgMCxjaGlsZHJlbjpcIlwiK2EuX3dyYXBwZXJTdGF0ZS5pbml0aWFsVmFsdWV9KX1mdW5jdGlvbiBjZShhLGIpe3ZhciBjPWIudmFsdWU7bnVsbD09YyYmKGM9Yi5kZWZhdWx0VmFsdWUsYj1iLmNoaWxkcmVuLG51bGwhPWImJihudWxsIT1jP3goXCI5MlwiKTp2b2lkIDAsQXJyYXkuaXNBcnJheShiKSYmKDE+PWIubGVuZ3RoP3ZvaWQgMDp4KFwiOTNcIiksYj1iWzBdKSxjPWIpLG51bGw9PWMmJihjPVwiXCIpKTthLl93cmFwcGVyU3RhdGU9e2luaXRpYWxWYWx1ZTp1YyhjKX19XG5mdW5jdGlvbiBkZShhLGIpe3ZhciBjPXVjKGIudmFsdWUpLGQ9dWMoYi5kZWZhdWx0VmFsdWUpO251bGwhPWMmJihjPVwiXCIrYyxjIT09YS52YWx1ZSYmKGEudmFsdWU9YyksbnVsbD09Yi5kZWZhdWx0VmFsdWUmJmEuZGVmYXVsdFZhbHVlIT09YyYmKGEuZGVmYXVsdFZhbHVlPWMpKTtudWxsIT1kJiYoYS5kZWZhdWx0VmFsdWU9XCJcIitkKX1mdW5jdGlvbiBlZShhKXt2YXIgYj1hLnRleHRDb250ZW50O2I9PT1hLl93cmFwcGVyU3RhdGUuaW5pdGlhbFZhbHVlJiYoYS52YWx1ZT1iKX12YXIgZmU9e2h0bWw6XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCIsbWF0aG1sOlwiaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTFwiLHN2ZzpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJ9O1xuZnVuY3Rpb24gZ2UoYSl7c3dpdGNoKGEpe2Nhc2UgXCJzdmdcIjpyZXR1cm5cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7Y2FzZSBcIm1hdGhcIjpyZXR1cm5cImh0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUxcIjtkZWZhdWx0OnJldHVyblwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwifX1mdW5jdGlvbiBoZShhLGIpe3JldHVybiBudWxsPT1hfHxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIj09PWE/Z2UoYik6XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPT09YSYmXCJmb3JlaWduT2JqZWN0XCI9PT1iP1wiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiOmF9XG52YXIgaWU9dm9pZCAwLGplPWZ1bmN0aW9uKGEpe3JldHVyblwidW5kZWZpbmVkXCIhPT10eXBlb2YgTVNBcHAmJk1TQXBwLmV4ZWNVbnNhZmVMb2NhbEZ1bmN0aW9uP2Z1bmN0aW9uKGIsYyxkLGUpe01TQXBwLmV4ZWNVbnNhZmVMb2NhbEZ1bmN0aW9uKGZ1bmN0aW9uKCl7cmV0dXJuIGEoYixjLGQsZSl9KX06YX0oZnVuY3Rpb24oYSxiKXtpZihhLm5hbWVzcGFjZVVSSSE9PWZlLnN2Z3x8XCJpbm5lckhUTUxcImluIGEpYS5pbm5lckhUTUw9YjtlbHNle2llPWllfHxkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2llLmlubmVySFRNTD1cIjxzdmc+XCIrYitcIjwvc3ZnPlwiO2ZvcihiPWllLmZpcnN0Q2hpbGQ7YS5maXJzdENoaWxkOylhLnJlbW92ZUNoaWxkKGEuZmlyc3RDaGlsZCk7Zm9yKDtiLmZpcnN0Q2hpbGQ7KWEuYXBwZW5kQ2hpbGQoYi5maXJzdENoaWxkKX19KTtcbmZ1bmN0aW9uIGtlKGEsYil7aWYoYil7dmFyIGM9YS5maXJzdENoaWxkO2lmKGMmJmM9PT1hLmxhc3RDaGlsZCYmMz09PWMubm9kZVR5cGUpe2Mubm9kZVZhbHVlPWI7cmV0dXJufX1hLnRleHRDb250ZW50PWJ9XG52YXIgbGU9e2FuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiEwLGJvcmRlckltYWdlT3V0c2V0OiEwLGJvcmRlckltYWdlU2xpY2U6ITAsYm9yZGVySW1hZ2VXaWR0aDohMCxib3hGbGV4OiEwLGJveEZsZXhHcm91cDohMCxib3hPcmRpbmFsR3JvdXA6ITAsY29sdW1uQ291bnQ6ITAsY29sdW1uczohMCxmbGV4OiEwLGZsZXhHcm93OiEwLGZsZXhQb3NpdGl2ZTohMCxmbGV4U2hyaW5rOiEwLGZsZXhOZWdhdGl2ZTohMCxmbGV4T3JkZXI6ITAsZ3JpZEFyZWE6ITAsZ3JpZFJvdzohMCxncmlkUm93RW5kOiEwLGdyaWRSb3dTcGFuOiEwLGdyaWRSb3dTdGFydDohMCxncmlkQ29sdW1uOiEwLGdyaWRDb2x1bW5FbmQ6ITAsZ3JpZENvbHVtblNwYW46ITAsZ3JpZENvbHVtblN0YXJ0OiEwLGZvbnRXZWlnaHQ6ITAsbGluZUNsYW1wOiEwLGxpbmVIZWlnaHQ6ITAsb3BhY2l0eTohMCxvcmRlcjohMCxvcnBoYW5zOiEwLHRhYlNpemU6ITAsd2lkb3dzOiEwLHpJbmRleDohMCx6b29tOiEwLGZpbGxPcGFjaXR5OiEwLFxuZmxvb2RPcGFjaXR5OiEwLHN0b3BPcGFjaXR5OiEwLHN0cm9rZURhc2hhcnJheTohMCxzdHJva2VEYXNob2Zmc2V0OiEwLHN0cm9rZU1pdGVybGltaXQ6ITAsc3Ryb2tlT3BhY2l0eTohMCxzdHJva2VXaWR0aDohMH0sbWU9W1wiV2Via2l0XCIsXCJtc1wiLFwiTW96XCIsXCJPXCJdO09iamVjdC5rZXlzKGxlKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe21lLmZvckVhY2goZnVuY3Rpb24oYil7Yj1iK2EuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrYS5zdWJzdHJpbmcoMSk7bGVbYl09bGVbYV19KX0pO2Z1bmN0aW9uIG5lKGEsYixjKXtyZXR1cm4gbnVsbD09Ynx8XCJib29sZWFuXCI9PT10eXBlb2YgYnx8XCJcIj09PWI/XCJcIjpjfHxcIm51bWJlclwiIT09dHlwZW9mIGJ8fDA9PT1ifHxsZS5oYXNPd25Qcm9wZXJ0eShhKSYmbGVbYV0/KFwiXCIrYikudHJpbSgpOmIrXCJweFwifVxuZnVuY3Rpb24gb2UoYSxiKXthPWEuc3R5bGU7Zm9yKHZhciBjIGluIGIpaWYoYi5oYXNPd25Qcm9wZXJ0eShjKSl7dmFyIGQ9MD09PWMuaW5kZXhPZihcIi0tXCIpLGU9bmUoYyxiW2NdLGQpO1wiZmxvYXRcIj09PWMmJihjPVwiY3NzRmxvYXRcIik7ZD9hLnNldFByb3BlcnR5KGMsZSk6YVtjXT1lfX12YXIgcGU9bih7bWVudWl0ZW06ITB9LHthcmVhOiEwLGJhc2U6ITAsYnI6ITAsY29sOiEwLGVtYmVkOiEwLGhyOiEwLGltZzohMCxpbnB1dDohMCxrZXlnZW46ITAsbGluazohMCxtZXRhOiEwLHBhcmFtOiEwLHNvdXJjZTohMCx0cmFjazohMCx3YnI6ITB9KTtcbmZ1bmN0aW9uIHFlKGEsYil7YiYmKHBlW2FdJiYobnVsbCE9Yi5jaGlsZHJlbnx8bnVsbCE9Yi5kYW5nZXJvdXNseVNldElubmVySFRNTD94KFwiMTM3XCIsYSxcIlwiKTp2b2lkIDApLG51bGwhPWIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwmJihudWxsIT1iLmNoaWxkcmVuP3goXCI2MFwiKTp2b2lkIDAsXCJvYmplY3RcIj09PXR5cGVvZiBiLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MJiZcIl9faHRtbFwiaW4gYi5kYW5nZXJvdXNseVNldElubmVySFRNTD92b2lkIDA6eChcIjYxXCIpKSxudWxsIT1iLnN0eWxlJiZcIm9iamVjdFwiIT09dHlwZW9mIGIuc3R5bGU/eChcIjYyXCIsXCJcIik6dm9pZCAwKX1cbmZ1bmN0aW9uIHJlKGEsYil7aWYoLTE9PT1hLmluZGV4T2YoXCItXCIpKXJldHVyblwic3RyaW5nXCI9PT10eXBlb2YgYi5pcztzd2l0Y2goYSl7Y2FzZSBcImFubm90YXRpb24teG1sXCI6Y2FzZSBcImNvbG9yLXByb2ZpbGVcIjpjYXNlIFwiZm9udC1mYWNlXCI6Y2FzZSBcImZvbnQtZmFjZS1zcmNcIjpjYXNlIFwiZm9udC1mYWNlLXVyaVwiOmNhc2UgXCJmb250LWZhY2UtZm9ybWF0XCI6Y2FzZSBcImZvbnQtZmFjZS1uYW1lXCI6Y2FzZSBcIm1pc3NpbmctZ2x5cGhcIjpyZXR1cm4hMTtkZWZhdWx0OnJldHVybiEwfX1cbmZ1bmN0aW9uIHNlKGEsYil7YT05PT09YS5ub2RlVHlwZXx8MTE9PT1hLm5vZGVUeXBlP2E6YS5vd25lckRvY3VtZW50O3ZhciBjPUlkKGEpO2I9c2FbYl07Zm9yKHZhciBkPTA7ZDxiLmxlbmd0aDtkKyspe3ZhciBlPWJbZF07aWYoIWMuaGFzT3duUHJvcGVydHkoZSl8fCFjW2VdKXtzd2l0Y2goZSl7Y2FzZSBcInNjcm9sbFwiOkVkKFwic2Nyb2xsXCIsYSk7YnJlYWs7Y2FzZSBcImZvY3VzXCI6Y2FzZSBcImJsdXJcIjpFZChcImZvY3VzXCIsYSk7RWQoXCJibHVyXCIsYSk7Yy5ibHVyPSEwO2MuZm9jdXM9ITA7YnJlYWs7Y2FzZSBcImNhbmNlbFwiOmNhc2UgXCJjbG9zZVwiOk9iKGUpJiZFZChlLGEpO2JyZWFrO2Nhc2UgXCJpbnZhbGlkXCI6Y2FzZSBcInN1Ym1pdFwiOmNhc2UgXCJyZXNldFwiOmJyZWFrO2RlZmF1bHQ6LTE9PT1hYi5pbmRleE9mKGUpJiZFKGUsYSl9Y1tlXT0hMH19fWZ1bmN0aW9uIHRlKCl7fXZhciB1ZT1udWxsLHZlPW51bGw7XG5mdW5jdGlvbiB3ZShhLGIpe3N3aXRjaChhKXtjYXNlIFwiYnV0dG9uXCI6Y2FzZSBcImlucHV0XCI6Y2FzZSBcInNlbGVjdFwiOmNhc2UgXCJ0ZXh0YXJlYVwiOnJldHVybiEhYi5hdXRvRm9jdXN9cmV0dXJuITF9ZnVuY3Rpb24geGUoYSxiKXtyZXR1cm5cInRleHRhcmVhXCI9PT1hfHxcIm9wdGlvblwiPT09YXx8XCJub3NjcmlwdFwiPT09YXx8XCJzdHJpbmdcIj09PXR5cGVvZiBiLmNoaWxkcmVufHxcIm51bWJlclwiPT09dHlwZW9mIGIuY2hpbGRyZW58fFwib2JqZWN0XCI9PT10eXBlb2YgYi5kYW5nZXJvdXNseVNldElubmVySFRNTCYmbnVsbCE9PWIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwmJm51bGwhPWIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwuX19odG1sfVxudmFyIHllPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBzZXRUaW1lb3V0P3NldFRpbWVvdXQ6dm9pZCAwLHplPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBjbGVhclRpbWVvdXQ/Y2xlYXJUaW1lb3V0OnZvaWQgMCxBZT1yLnVuc3RhYmxlX3NjaGVkdWxlQ2FsbGJhY2ssQmU9ci51bnN0YWJsZV9jYW5jZWxDYWxsYmFjaztcbmZ1bmN0aW9uIENlKGEsYixjLGQsZSl7YVtHYV09ZTtcImlucHV0XCI9PT1jJiZcInJhZGlvXCI9PT1lLnR5cGUmJm51bGwhPWUubmFtZSYmeGMoYSxlKTtyZShjLGQpO2Q9cmUoYyxlKTtmb3IodmFyIGY9MDtmPGIubGVuZ3RoO2YrPTIpe3ZhciBnPWJbZl0saD1iW2YrMV07XCJzdHlsZVwiPT09Zz9vZShhLGgpOlwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIj09PWc/amUoYSxoKTpcImNoaWxkcmVuXCI9PT1nP2tlKGEsaCk6dGMoYSxnLGgsZCl9c3dpdGNoKGMpe2Nhc2UgXCJpbnB1dFwiOnljKGEsZSk7YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6ZGUoYSxlKTticmVhaztjYXNlIFwic2VsZWN0XCI6Yj1hLl93cmFwcGVyU3RhdGUud2FzTXVsdGlwbGUsYS5fd3JhcHBlclN0YXRlLndhc011bHRpcGxlPSEhZS5tdWx0aXBsZSxjPWUudmFsdWUsbnVsbCE9Yz9hZShhLCEhZS5tdWx0aXBsZSxjLCExKTpiIT09ISFlLm11bHRpcGxlJiYobnVsbCE9ZS5kZWZhdWx0VmFsdWU/YWUoYSwhIWUubXVsdGlwbGUsZS5kZWZhdWx0VmFsdWUsXG4hMCk6YWUoYSwhIWUubXVsdGlwbGUsZS5tdWx0aXBsZT9bXTpcIlwiLCExKSl9fWZ1bmN0aW9uIERlKGEpe2ZvcihhPWEubmV4dFNpYmxpbmc7YSYmMSE9PWEubm9kZVR5cGUmJjMhPT1hLm5vZGVUeXBlOylhPWEubmV4dFNpYmxpbmc7cmV0dXJuIGF9ZnVuY3Rpb24gRWUoYSl7Zm9yKGE9YS5maXJzdENoaWxkO2EmJjEhPT1hLm5vZGVUeXBlJiYzIT09YS5ub2RlVHlwZTspYT1hLm5leHRTaWJsaW5nO3JldHVybiBhfW5ldyBTZXQ7dmFyIEZlPVtdLEdlPS0xO2Z1bmN0aW9uIEYoYSl7MD5HZXx8KGEuY3VycmVudD1GZVtHZV0sRmVbR2VdPW51bGwsR2UtLSl9ZnVuY3Rpb24gRyhhLGIpe0dlKys7RmVbR2VdPWEuY3VycmVudDthLmN1cnJlbnQ9Yn12YXIgSGU9e30sSD17Y3VycmVudDpIZX0sST17Y3VycmVudDohMX0sSWU9SGU7XG5mdW5jdGlvbiBKZShhLGIpe3ZhciBjPWEudHlwZS5jb250ZXh0VHlwZXM7aWYoIWMpcmV0dXJuIEhlO3ZhciBkPWEuc3RhdGVOb2RlO2lmKGQmJmQuX19yZWFjdEludGVybmFsTWVtb2l6ZWRVbm1hc2tlZENoaWxkQ29udGV4dD09PWIpcmV0dXJuIGQuX19yZWFjdEludGVybmFsTWVtb2l6ZWRNYXNrZWRDaGlsZENvbnRleHQ7dmFyIGU9e30sZjtmb3IoZiBpbiBjKWVbZl09YltmXTtkJiYoYT1hLnN0YXRlTm9kZSxhLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkVW5tYXNrZWRDaGlsZENvbnRleHQ9YixhLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkTWFza2VkQ2hpbGRDb250ZXh0PWUpO3JldHVybiBlfWZ1bmN0aW9uIEooYSl7YT1hLmNoaWxkQ29udGV4dFR5cGVzO3JldHVybiBudWxsIT09YSYmdm9pZCAwIT09YX1mdW5jdGlvbiBLZShhKXtGKEksYSk7RihILGEpfWZ1bmN0aW9uIExlKGEpe0YoSSxhKTtGKEgsYSl9XG5mdW5jdGlvbiBNZShhLGIsYyl7SC5jdXJyZW50IT09SGU/eChcIjE2OFwiKTp2b2lkIDA7RyhILGIsYSk7RyhJLGMsYSl9ZnVuY3Rpb24gTmUoYSxiLGMpe3ZhciBkPWEuc3RhdGVOb2RlO2E9Yi5jaGlsZENvbnRleHRUeXBlcztpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgZC5nZXRDaGlsZENvbnRleHQpcmV0dXJuIGM7ZD1kLmdldENoaWxkQ29udGV4dCgpO2Zvcih2YXIgZSBpbiBkKWUgaW4gYT92b2lkIDA6eChcIjEwOFwiLGljKGIpfHxcIlVua25vd25cIixlKTtyZXR1cm4gbih7fSxjLGQpfWZ1bmN0aW9uIE9lKGEpe3ZhciBiPWEuc3RhdGVOb2RlO2I9YiYmYi5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZE1lcmdlZENoaWxkQ29udGV4dHx8SGU7SWU9SC5jdXJyZW50O0coSCxiLGEpO0coSSxJLmN1cnJlbnQsYSk7cmV0dXJuITB9XG5mdW5jdGlvbiBQZShhLGIsYyl7dmFyIGQ9YS5zdGF0ZU5vZGU7ZD92b2lkIDA6eChcIjE2OVwiKTtjPyhiPU5lKGEsYixJZSksZC5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZE1lcmdlZENoaWxkQ29udGV4dD1iLEYoSSxhKSxGKEgsYSksRyhILGIsYSkpOkYoSSxhKTtHKEksYyxhKX12YXIgUWU9bnVsbCxSZT1udWxsO2Z1bmN0aW9uIFNlKGEpe3JldHVybiBmdW5jdGlvbihiKXt0cnl7cmV0dXJuIGEoYil9Y2F0Y2goYyl7fX19XG5mdW5jdGlvbiBUZShhKXtpZihcInVuZGVmaW5lZFwiPT09dHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXylyZXR1cm4hMTt2YXIgYj1fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX187aWYoYi5pc0Rpc2FibGVkfHwhYi5zdXBwb3J0c0ZpYmVyKXJldHVybiEwO3RyeXt2YXIgYz1iLmluamVjdChhKTtRZT1TZShmdW5jdGlvbihhKXtyZXR1cm4gYi5vbkNvbW1pdEZpYmVyUm9vdChjLGEpfSk7UmU9U2UoZnVuY3Rpb24oYSl7cmV0dXJuIGIub25Db21taXRGaWJlclVubW91bnQoYyxhKX0pfWNhdGNoKGQpe31yZXR1cm4hMH1cbmZ1bmN0aW9uIFVlKGEsYixjLGQpe3RoaXMudGFnPWE7dGhpcy5rZXk9Yzt0aGlzLnNpYmxpbmc9dGhpcy5jaGlsZD10aGlzLnJldHVybj10aGlzLnN0YXRlTm9kZT10aGlzLnR5cGU9dGhpcy5lbGVtZW50VHlwZT1udWxsO3RoaXMuaW5kZXg9MDt0aGlzLnJlZj1udWxsO3RoaXMucGVuZGluZ1Byb3BzPWI7dGhpcy5jb250ZXh0RGVwZW5kZW5jaWVzPXRoaXMubWVtb2l6ZWRTdGF0ZT10aGlzLnVwZGF0ZVF1ZXVlPXRoaXMubWVtb2l6ZWRQcm9wcz1udWxsO3RoaXMubW9kZT1kO3RoaXMuZWZmZWN0VGFnPTA7dGhpcy5sYXN0RWZmZWN0PXRoaXMuZmlyc3RFZmZlY3Q9dGhpcy5uZXh0RWZmZWN0PW51bGw7dGhpcy5jaGlsZEV4cGlyYXRpb25UaW1lPXRoaXMuZXhwaXJhdGlvblRpbWU9MDt0aGlzLmFsdGVybmF0ZT1udWxsfWZ1bmN0aW9uIEsoYSxiLGMsZCl7cmV0dXJuIG5ldyBVZShhLGIsYyxkKX1cbmZ1bmN0aW9uIFZlKGEpe2E9YS5wcm90b3R5cGU7cmV0dXJuISghYXx8IWEuaXNSZWFjdENvbXBvbmVudCl9ZnVuY3Rpb24gV2UoYSl7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGEpcmV0dXJuIFZlKGEpPzE6MDtpZih2b2lkIDAhPT1hJiZudWxsIT09YSl7YT1hLiQkdHlwZW9mO2lmKGE9PT1jYylyZXR1cm4gMTE7aWYoYT09PWVjKXJldHVybiAxNH1yZXR1cm4gMn1cbmZ1bmN0aW9uIFhlKGEsYil7dmFyIGM9YS5hbHRlcm5hdGU7bnVsbD09PWM/KGM9SyhhLnRhZyxiLGEua2V5LGEubW9kZSksYy5lbGVtZW50VHlwZT1hLmVsZW1lbnRUeXBlLGMudHlwZT1hLnR5cGUsYy5zdGF0ZU5vZGU9YS5zdGF0ZU5vZGUsYy5hbHRlcm5hdGU9YSxhLmFsdGVybmF0ZT1jKTooYy5wZW5kaW5nUHJvcHM9YixjLmVmZmVjdFRhZz0wLGMubmV4dEVmZmVjdD1udWxsLGMuZmlyc3RFZmZlY3Q9bnVsbCxjLmxhc3RFZmZlY3Q9bnVsbCk7Yy5jaGlsZEV4cGlyYXRpb25UaW1lPWEuY2hpbGRFeHBpcmF0aW9uVGltZTtjLmV4cGlyYXRpb25UaW1lPWEuZXhwaXJhdGlvblRpbWU7Yy5jaGlsZD1hLmNoaWxkO2MubWVtb2l6ZWRQcm9wcz1hLm1lbW9pemVkUHJvcHM7Yy5tZW1vaXplZFN0YXRlPWEubWVtb2l6ZWRTdGF0ZTtjLnVwZGF0ZVF1ZXVlPWEudXBkYXRlUXVldWU7Yy5jb250ZXh0RGVwZW5kZW5jaWVzPWEuY29udGV4dERlcGVuZGVuY2llcztjLnNpYmxpbmc9YS5zaWJsaW5nO1xuYy5pbmRleD1hLmluZGV4O2MucmVmPWEucmVmO3JldHVybiBjfVxuZnVuY3Rpb24gWWUoYSxiLGMsZCxlLGYpe3ZhciBnPTI7ZD1hO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhKVZlKGEpJiYoZz0xKTtlbHNlIGlmKFwic3RyaW5nXCI9PT10eXBlb2YgYSlnPTU7ZWxzZSBhOnN3aXRjaChhKXtjYXNlIFhiOnJldHVybiBaZShjLmNoaWxkcmVuLGUsZixiKTtjYXNlIGJjOnJldHVybiAkZShjLGV8MyxmLGIpO2Nhc2UgWWI6cmV0dXJuICRlKGMsZXwyLGYsYik7Y2FzZSBaYjpyZXR1cm4gYT1LKDEyLGMsYixlfDQpLGEuZWxlbWVudFR5cGU9WmIsYS50eXBlPVpiLGEuZXhwaXJhdGlvblRpbWU9ZixhO2Nhc2UgZGM6cmV0dXJuIGE9SygxMyxjLGIsZSksYS5lbGVtZW50VHlwZT1kYyxhLnR5cGU9ZGMsYS5leHBpcmF0aW9uVGltZT1mLGE7ZGVmYXVsdDppZihcIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hKXN3aXRjaChhLiQkdHlwZW9mKXtjYXNlICRiOmc9MTA7YnJlYWsgYTtjYXNlIGFjOmc9OTticmVhayBhO2Nhc2UgY2M6Zz0xMTticmVhayBhO2Nhc2UgZWM6Zz1cbjE0O2JyZWFrIGE7Y2FzZSBmYzpnPTE2O2Q9bnVsbDticmVhayBhfXgoXCIxMzBcIixudWxsPT1hP2E6dHlwZW9mIGEsXCJcIil9Yj1LKGcsYyxiLGUpO2IuZWxlbWVudFR5cGU9YTtiLnR5cGU9ZDtiLmV4cGlyYXRpb25UaW1lPWY7cmV0dXJuIGJ9ZnVuY3Rpb24gWmUoYSxiLGMsZCl7YT1LKDcsYSxkLGIpO2EuZXhwaXJhdGlvblRpbWU9YztyZXR1cm4gYX1mdW5jdGlvbiAkZShhLGIsYyxkKXthPUsoOCxhLGQsYik7Yj0wPT09KGImMSk/WWI6YmM7YS5lbGVtZW50VHlwZT1iO2EudHlwZT1iO2EuZXhwaXJhdGlvblRpbWU9YztyZXR1cm4gYX1mdW5jdGlvbiBhZihhLGIsYyl7YT1LKDYsYSxudWxsLGIpO2EuZXhwaXJhdGlvblRpbWU9YztyZXR1cm4gYX1cbmZ1bmN0aW9uIGJmKGEsYixjKXtiPUsoNCxudWxsIT09YS5jaGlsZHJlbj9hLmNoaWxkcmVuOltdLGEua2V5LGIpO2IuZXhwaXJhdGlvblRpbWU9YztiLnN0YXRlTm9kZT17Y29udGFpbmVySW5mbzphLmNvbnRhaW5lckluZm8scGVuZGluZ0NoaWxkcmVuOm51bGwsaW1wbGVtZW50YXRpb246YS5pbXBsZW1lbnRhdGlvbn07cmV0dXJuIGJ9ZnVuY3Rpb24gY2YoYSxiKXthLmRpZEVycm9yPSExO3ZhciBjPWEuZWFybGllc3RQZW5kaW5nVGltZTswPT09Yz9hLmVhcmxpZXN0UGVuZGluZ1RpbWU9YS5sYXRlc3RQZW5kaW5nVGltZT1iOmM8Yj9hLmVhcmxpZXN0UGVuZGluZ1RpbWU9YjphLmxhdGVzdFBlbmRpbmdUaW1lPmImJihhLmxhdGVzdFBlbmRpbmdUaW1lPWIpO2RmKGIsYSl9XG5mdW5jdGlvbiBlZihhLGIpe2EuZGlkRXJyb3I9ITE7aWYoMD09PWIpYS5lYXJsaWVzdFBlbmRpbmdUaW1lPTAsYS5sYXRlc3RQZW5kaW5nVGltZT0wLGEuZWFybGllc3RTdXNwZW5kZWRUaW1lPTAsYS5sYXRlc3RTdXNwZW5kZWRUaW1lPTAsYS5sYXRlc3RQaW5nZWRUaW1lPTA7ZWxzZXtiPGEubGF0ZXN0UGluZ2VkVGltZSYmKGEubGF0ZXN0UGluZ2VkVGltZT0wKTt2YXIgYz1hLmxhdGVzdFBlbmRpbmdUaW1lOzAhPT1jJiYoYz5iP2EuZWFybGllc3RQZW5kaW5nVGltZT1hLmxhdGVzdFBlbmRpbmdUaW1lPTA6YS5lYXJsaWVzdFBlbmRpbmdUaW1lPmImJihhLmVhcmxpZXN0UGVuZGluZ1RpbWU9YS5sYXRlc3RQZW5kaW5nVGltZSkpO2M9YS5lYXJsaWVzdFN1c3BlbmRlZFRpbWU7MD09PWM/Y2YoYSxiKTpiPGEubGF0ZXN0U3VzcGVuZGVkVGltZT8oYS5lYXJsaWVzdFN1c3BlbmRlZFRpbWU9MCxhLmxhdGVzdFN1c3BlbmRlZFRpbWU9MCxhLmxhdGVzdFBpbmdlZFRpbWU9MCxjZihhLGIpKTpcbmI+YyYmY2YoYSxiKX1kZigwLGEpfWZ1bmN0aW9uIGZmKGEsYil7YS5kaWRFcnJvcj0hMTthLmxhdGVzdFBpbmdlZFRpbWU+PWImJihhLmxhdGVzdFBpbmdlZFRpbWU9MCk7dmFyIGM9YS5lYXJsaWVzdFBlbmRpbmdUaW1lLGQ9YS5sYXRlc3RQZW5kaW5nVGltZTtjPT09Yj9hLmVhcmxpZXN0UGVuZGluZ1RpbWU9ZD09PWI/YS5sYXRlc3RQZW5kaW5nVGltZT0wOmQ6ZD09PWImJihhLmxhdGVzdFBlbmRpbmdUaW1lPWMpO2M9YS5lYXJsaWVzdFN1c3BlbmRlZFRpbWU7ZD1hLmxhdGVzdFN1c3BlbmRlZFRpbWU7MD09PWM/YS5lYXJsaWVzdFN1c3BlbmRlZFRpbWU9YS5sYXRlc3RTdXNwZW5kZWRUaW1lPWI6YzxiP2EuZWFybGllc3RTdXNwZW5kZWRUaW1lPWI6ZD5iJiYoYS5sYXRlc3RTdXNwZW5kZWRUaW1lPWIpO2RmKGIsYSl9XG5mdW5jdGlvbiBnZihhLGIpe3ZhciBjPWEuZWFybGllc3RQZW5kaW5nVGltZTthPWEuZWFybGllc3RTdXNwZW5kZWRUaW1lO2M+YiYmKGI9Yyk7YT5iJiYoYj1hKTtyZXR1cm4gYn1mdW5jdGlvbiBkZihhLGIpe3ZhciBjPWIuZWFybGllc3RTdXNwZW5kZWRUaW1lLGQ9Yi5sYXRlc3RTdXNwZW5kZWRUaW1lLGU9Yi5lYXJsaWVzdFBlbmRpbmdUaW1lLGY9Yi5sYXRlc3RQaW5nZWRUaW1lO2U9MCE9PWU/ZTpmOzA9PT1lJiYoMD09PWF8fGQ8YSkmJihlPWQpO2E9ZTswIT09YSYmYz5hJiYoYT1jKTtiLm5leHRFeHBpcmF0aW9uVGltZVRvV29ya09uPWU7Yi5leHBpcmF0aW9uVGltZT1hfWZ1bmN0aW9uIEwoYSxiKXtpZihhJiZhLmRlZmF1bHRQcm9wcyl7Yj1uKHt9LGIpO2E9YS5kZWZhdWx0UHJvcHM7Zm9yKHZhciBjIGluIGEpdm9pZCAwPT09YltjXSYmKGJbY109YVtjXSl9cmV0dXJuIGJ9XG5mdW5jdGlvbiBoZihhKXt2YXIgYj1hLl9yZXN1bHQ7c3dpdGNoKGEuX3N0YXR1cyl7Y2FzZSAxOnJldHVybiBiO2Nhc2UgMjp0aHJvdyBiO2Nhc2UgMDp0aHJvdyBiO2RlZmF1bHQ6YS5fc3RhdHVzPTA7Yj1hLl9jdG9yO2I9YigpO2IudGhlbihmdW5jdGlvbihiKXswPT09YS5fc3RhdHVzJiYoYj1iLmRlZmF1bHQsYS5fc3RhdHVzPTEsYS5fcmVzdWx0PWIpfSxmdW5jdGlvbihiKXswPT09YS5fc3RhdHVzJiYoYS5fc3RhdHVzPTIsYS5fcmVzdWx0PWIpfSk7c3dpdGNoKGEuX3N0YXR1cyl7Y2FzZSAxOnJldHVybiBhLl9yZXN1bHQ7Y2FzZSAyOnRocm93IGEuX3Jlc3VsdDt9YS5fcmVzdWx0PWI7dGhyb3cgYjt9fXZhciBqZj0obmV3IGFhLkNvbXBvbmVudCkucmVmcztcbmZ1bmN0aW9uIGtmKGEsYixjLGQpe2I9YS5tZW1vaXplZFN0YXRlO2M9YyhkLGIpO2M9bnVsbD09PWN8fHZvaWQgMD09PWM/YjpuKHt9LGIsYyk7YS5tZW1vaXplZFN0YXRlPWM7ZD1hLnVwZGF0ZVF1ZXVlO251bGwhPT1kJiYwPT09YS5leHBpcmF0aW9uVGltZSYmKGQuYmFzZVN0YXRlPWMpfVxudmFyIHRmPXtpc01vdW50ZWQ6ZnVuY3Rpb24oYSl7cmV0dXJuKGE9YS5fcmVhY3RJbnRlcm5hbEZpYmVyKT8yPT09ZWQoYSk6ITF9LGVucXVldWVTZXRTdGF0ZTpmdW5jdGlvbihhLGIsYyl7YT1hLl9yZWFjdEludGVybmFsRmliZXI7dmFyIGQ9bGYoKTtkPW1mKGQsYSk7dmFyIGU9bmYoZCk7ZS5wYXlsb2FkPWI7dm9pZCAwIT09YyYmbnVsbCE9PWMmJihlLmNhbGxiYWNrPWMpO29mKCk7cGYoYSxlKTtxZihhLGQpfSxlbnF1ZXVlUmVwbGFjZVN0YXRlOmZ1bmN0aW9uKGEsYixjKXthPWEuX3JlYWN0SW50ZXJuYWxGaWJlcjt2YXIgZD1sZigpO2Q9bWYoZCxhKTt2YXIgZT1uZihkKTtlLnRhZz1yZjtlLnBheWxvYWQ9Yjt2b2lkIDAhPT1jJiZudWxsIT09YyYmKGUuY2FsbGJhY2s9Yyk7b2YoKTtwZihhLGUpO3FmKGEsZCl9LGVucXVldWVGb3JjZVVwZGF0ZTpmdW5jdGlvbihhLGIpe2E9YS5fcmVhY3RJbnRlcm5hbEZpYmVyO3ZhciBjPWxmKCk7Yz1tZihjLGEpO3ZhciBkPW5mKGMpO2QudGFnPVxuc2Y7dm9pZCAwIT09YiYmbnVsbCE9PWImJihkLmNhbGxiYWNrPWIpO29mKCk7cGYoYSxkKTtxZihhLGMpfX07ZnVuY3Rpb24gdWYoYSxiLGMsZCxlLGYsZyl7YT1hLnN0YXRlTm9kZTtyZXR1cm5cImZ1bmN0aW9uXCI9PT10eXBlb2YgYS5zaG91bGRDb21wb25lbnRVcGRhdGU/YS5zaG91bGRDb21wb25lbnRVcGRhdGUoZCxmLGcpOmIucHJvdG90eXBlJiZiLnByb3RvdHlwZS5pc1B1cmVSZWFjdENvbXBvbmVudD8hZGQoYyxkKXx8IWRkKGUsZik6ITB9XG5mdW5jdGlvbiB2ZihhLGIsYyl7dmFyIGQ9ITEsZT1IZTt2YXIgZj1iLmNvbnRleHRUeXBlO1wib2JqZWN0XCI9PT10eXBlb2YgZiYmbnVsbCE9PWY/Zj1NKGYpOihlPUooYik/SWU6SC5jdXJyZW50LGQ9Yi5jb250ZXh0VHlwZXMsZj0oZD1udWxsIT09ZCYmdm9pZCAwIT09ZCk/SmUoYSxlKTpIZSk7Yj1uZXcgYihjLGYpO2EubWVtb2l6ZWRTdGF0ZT1udWxsIT09Yi5zdGF0ZSYmdm9pZCAwIT09Yi5zdGF0ZT9iLnN0YXRlOm51bGw7Yi51cGRhdGVyPXRmO2Euc3RhdGVOb2RlPWI7Yi5fcmVhY3RJbnRlcm5hbEZpYmVyPWE7ZCYmKGE9YS5zdGF0ZU5vZGUsYS5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZFVubWFza2VkQ2hpbGRDb250ZXh0PWUsYS5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZE1hc2tlZENoaWxkQ29udGV4dD1mKTtyZXR1cm4gYn1cbmZ1bmN0aW9uIHdmKGEsYixjLGQpe2E9Yi5zdGF0ZTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgYi5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJiZiLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoYyxkKTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgYi5VTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmYi5VTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhjLGQpO2Iuc3RhdGUhPT1hJiZ0Zi5lbnF1ZXVlUmVwbGFjZVN0YXRlKGIsYi5zdGF0ZSxudWxsKX1cbmZ1bmN0aW9uIHhmKGEsYixjLGQpe3ZhciBlPWEuc3RhdGVOb2RlO2UucHJvcHM9YztlLnN0YXRlPWEubWVtb2l6ZWRTdGF0ZTtlLnJlZnM9amY7dmFyIGY9Yi5jb250ZXh0VHlwZTtcIm9iamVjdFwiPT09dHlwZW9mIGYmJm51bGwhPT1mP2UuY29udGV4dD1NKGYpOihmPUooYik/SWU6SC5jdXJyZW50LGUuY29udGV4dD1KZShhLGYpKTtmPWEudXBkYXRlUXVldWU7bnVsbCE9PWYmJih5ZihhLGYsYyxlLGQpLGUuc3RhdGU9YS5tZW1vaXplZFN0YXRlKTtmPWIuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBmJiYoa2YoYSxiLGYsYyksZS5zdGF0ZT1hLm1lbW9pemVkU3RhdGUpO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBiLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc3x8XCJmdW5jdGlvblwiPT09dHlwZW9mIGUuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBlLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQmJlwiZnVuY3Rpb25cIiE9PVxudHlwZW9mIGUuY29tcG9uZW50V2lsbE1vdW50fHwoYj1lLnN0YXRlLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBlLmNvbXBvbmVudFdpbGxNb3VudCYmZS5jb21wb25lbnRXaWxsTW91bnQoKSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZS5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50JiZlLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQoKSxiIT09ZS5zdGF0ZSYmdGYuZW5xdWV1ZVJlcGxhY2VTdGF0ZShlLGUuc3RhdGUsbnVsbCksZj1hLnVwZGF0ZVF1ZXVlLG51bGwhPT1mJiYoeWYoYSxmLGMsZSxkKSxlLnN0YXRlPWEubWVtb2l6ZWRTdGF0ZSkpO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBlLmNvbXBvbmVudERpZE1vdW50JiYoYS5lZmZlY3RUYWd8PTQpfXZhciB6Zj1BcnJheS5pc0FycmF5O1xuZnVuY3Rpb24gQWYoYSxiLGMpe2E9Yy5yZWY7aWYobnVsbCE9PWEmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBhJiZcIm9iamVjdFwiIT09dHlwZW9mIGEpe2lmKGMuX293bmVyKXtjPWMuX293bmVyO3ZhciBkPXZvaWQgMDtjJiYoMSE9PWMudGFnP3goXCIzMDlcIik6dm9pZCAwLGQ9Yy5zdGF0ZU5vZGUpO2Q/dm9pZCAwOngoXCIxNDdcIixhKTt2YXIgZT1cIlwiK2E7aWYobnVsbCE9PWImJm51bGwhPT1iLnJlZiYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGIucmVmJiZiLnJlZi5fc3RyaW5nUmVmPT09ZSlyZXR1cm4gYi5yZWY7Yj1mdW5jdGlvbihhKXt2YXIgYj1kLnJlZnM7Yj09PWpmJiYoYj1kLnJlZnM9e30pO251bGw9PT1hP2RlbGV0ZSBiW2VdOmJbZV09YX07Yi5fc3RyaW5nUmVmPWU7cmV0dXJuIGJ9XCJzdHJpbmdcIiE9PXR5cGVvZiBhP3goXCIyODRcIik6dm9pZCAwO2MuX293bmVyP3ZvaWQgMDp4KFwiMjkwXCIsYSl9cmV0dXJuIGF9XG5mdW5jdGlvbiBCZihhLGIpe1widGV4dGFyZWFcIiE9PWEudHlwZSYmeChcIjMxXCIsXCJbb2JqZWN0IE9iamVjdF1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChiKT9cIm9iamVjdCB3aXRoIGtleXMge1wiK09iamVjdC5rZXlzKGIpLmpvaW4oXCIsIFwiKStcIn1cIjpiLFwiXCIpfVxuZnVuY3Rpb24gQ2YoYSl7ZnVuY3Rpb24gYihiLGMpe2lmKGEpe3ZhciBkPWIubGFzdEVmZmVjdDtudWxsIT09ZD8oZC5uZXh0RWZmZWN0PWMsYi5sYXN0RWZmZWN0PWMpOmIuZmlyc3RFZmZlY3Q9Yi5sYXN0RWZmZWN0PWM7Yy5uZXh0RWZmZWN0PW51bGw7Yy5lZmZlY3RUYWc9OH19ZnVuY3Rpb24gYyhjLGQpe2lmKCFhKXJldHVybiBudWxsO2Zvcig7bnVsbCE9PWQ7KWIoYyxkKSxkPWQuc2libGluZztyZXR1cm4gbnVsbH1mdW5jdGlvbiBkKGEsYil7Zm9yKGE9bmV3IE1hcDtudWxsIT09YjspbnVsbCE9PWIua2V5P2Euc2V0KGIua2V5LGIpOmEuc2V0KGIuaW5kZXgsYiksYj1iLnNpYmxpbmc7cmV0dXJuIGF9ZnVuY3Rpb24gZShhLGIsYyl7YT1YZShhLGIsYyk7YS5pbmRleD0wO2Euc2libGluZz1udWxsO3JldHVybiBhfWZ1bmN0aW9uIGYoYixjLGQpe2IuaW5kZXg9ZDtpZighYSlyZXR1cm4gYztkPWIuYWx0ZXJuYXRlO2lmKG51bGwhPT1kKXJldHVybiBkPWQuaW5kZXgsZDxjPyhiLmVmZmVjdFRhZz1cbjIsYyk6ZDtiLmVmZmVjdFRhZz0yO3JldHVybiBjfWZ1bmN0aW9uIGcoYil7YSYmbnVsbD09PWIuYWx0ZXJuYXRlJiYoYi5lZmZlY3RUYWc9Mik7cmV0dXJuIGJ9ZnVuY3Rpb24gaChhLGIsYyxkKXtpZihudWxsPT09Ynx8NiE9PWIudGFnKXJldHVybiBiPWFmKGMsYS5tb2RlLGQpLGIucmV0dXJuPWEsYjtiPWUoYixjLGQpO2IucmV0dXJuPWE7cmV0dXJuIGJ9ZnVuY3Rpb24gbChhLGIsYyxkKXtpZihudWxsIT09YiYmYi5lbGVtZW50VHlwZT09PWMudHlwZSlyZXR1cm4gZD1lKGIsYy5wcm9wcyxkKSxkLnJlZj1BZihhLGIsYyksZC5yZXR1cm49YSxkO2Q9WWUoYy50eXBlLGMua2V5LGMucHJvcHMsbnVsbCxhLm1vZGUsZCk7ZC5yZWY9QWYoYSxiLGMpO2QucmV0dXJuPWE7cmV0dXJuIGR9ZnVuY3Rpb24gayhhLGIsYyxkKXtpZihudWxsPT09Ynx8NCE9PWIudGFnfHxiLnN0YXRlTm9kZS5jb250YWluZXJJbmZvIT09Yy5jb250YWluZXJJbmZvfHxiLnN0YXRlTm9kZS5pbXBsZW1lbnRhdGlvbiE9PVxuYy5pbXBsZW1lbnRhdGlvbilyZXR1cm4gYj1iZihjLGEubW9kZSxkKSxiLnJldHVybj1hLGI7Yj1lKGIsYy5jaGlsZHJlbnx8W10sZCk7Yi5yZXR1cm49YTtyZXR1cm4gYn1mdW5jdGlvbiBtKGEsYixjLGQsZil7aWYobnVsbD09PWJ8fDchPT1iLnRhZylyZXR1cm4gYj1aZShjLGEubW9kZSxkLGYpLGIucmV0dXJuPWEsYjtiPWUoYixjLGQpO2IucmV0dXJuPWE7cmV0dXJuIGJ9ZnVuY3Rpb24gcChhLGIsYyl7aWYoXCJzdHJpbmdcIj09PXR5cGVvZiBifHxcIm51bWJlclwiPT09dHlwZW9mIGIpcmV0dXJuIGI9YWYoXCJcIitiLGEubW9kZSxjKSxiLnJldHVybj1hLGI7aWYoXCJvYmplY3RcIj09PXR5cGVvZiBiJiZudWxsIT09Yil7c3dpdGNoKGIuJCR0eXBlb2Ype2Nhc2UgVmI6cmV0dXJuIGM9WWUoYi50eXBlLGIua2V5LGIucHJvcHMsbnVsbCxhLm1vZGUsYyksYy5yZWY9QWYoYSxudWxsLGIpLGMucmV0dXJuPWEsYztjYXNlIFdiOnJldHVybiBiPWJmKGIsYS5tb2RlLGMpLGIucmV0dXJuPWEsYn1pZih6ZihiKXx8XG5oYyhiKSlyZXR1cm4gYj1aZShiLGEubW9kZSxjLG51bGwpLGIucmV0dXJuPWEsYjtCZihhLGIpfXJldHVybiBudWxsfWZ1bmN0aW9uIHQoYSxiLGMsZCl7dmFyIGU9bnVsbCE9PWI/Yi5rZXk6bnVsbDtpZihcInN0cmluZ1wiPT09dHlwZW9mIGN8fFwibnVtYmVyXCI9PT10eXBlb2YgYylyZXR1cm4gbnVsbCE9PWU/bnVsbDpoKGEsYixcIlwiK2MsZCk7aWYoXCJvYmplY3RcIj09PXR5cGVvZiBjJiZudWxsIT09Yyl7c3dpdGNoKGMuJCR0eXBlb2Ype2Nhc2UgVmI6cmV0dXJuIGMua2V5PT09ZT9jLnR5cGU9PT1YYj9tKGEsYixjLnByb3BzLmNoaWxkcmVuLGQsZSk6bChhLGIsYyxkKTpudWxsO2Nhc2UgV2I6cmV0dXJuIGMua2V5PT09ZT9rKGEsYixjLGQpOm51bGx9aWYoemYoYyl8fGhjKGMpKXJldHVybiBudWxsIT09ZT9udWxsOm0oYSxiLGMsZCxudWxsKTtCZihhLGMpfXJldHVybiBudWxsfWZ1bmN0aW9uIEEoYSxiLGMsZCxlKXtpZihcInN0cmluZ1wiPT09dHlwZW9mIGR8fFwibnVtYmVyXCI9PT10eXBlb2YgZClyZXR1cm4gYT1cbmEuZ2V0KGMpfHxudWxsLGgoYixhLFwiXCIrZCxlKTtpZihcIm9iamVjdFwiPT09dHlwZW9mIGQmJm51bGwhPT1kKXtzd2l0Y2goZC4kJHR5cGVvZil7Y2FzZSBWYjpyZXR1cm4gYT1hLmdldChudWxsPT09ZC5rZXk/YzpkLmtleSl8fG51bGwsZC50eXBlPT09WGI/bShiLGEsZC5wcm9wcy5jaGlsZHJlbixlLGQua2V5KTpsKGIsYSxkLGUpO2Nhc2UgV2I6cmV0dXJuIGE9YS5nZXQobnVsbD09PWQua2V5P2M6ZC5rZXkpfHxudWxsLGsoYixhLGQsZSl9aWYoemYoZCl8fGhjKGQpKXJldHVybiBhPWEuZ2V0KGMpfHxudWxsLG0oYixhLGQsZSxudWxsKTtCZihiLGQpfXJldHVybiBudWxsfWZ1bmN0aW9uIHYoZSxnLGgsayl7Zm9yKHZhciBsPW51bGwsbT1udWxsLHE9Zyx1PWc9MCxCPW51bGw7bnVsbCE9PXEmJnU8aC5sZW5ndGg7dSsrKXtxLmluZGV4PnU/KEI9cSxxPW51bGwpOkI9cS5zaWJsaW5nO3ZhciB3PXQoZSxxLGhbdV0sayk7aWYobnVsbD09PXcpe251bGw9PT1xJiYocT1CKTticmVha31hJiZcbnEmJm51bGw9PT13LmFsdGVybmF0ZSYmYihlLHEpO2c9Zih3LGcsdSk7bnVsbD09PW0/bD13Om0uc2libGluZz13O209dztxPUJ9aWYodT09PWgubGVuZ3RoKXJldHVybiBjKGUscSksbDtpZihudWxsPT09cSl7Zm9yKDt1PGgubGVuZ3RoO3UrKylpZihxPXAoZSxoW3VdLGspKWc9ZihxLGcsdSksbnVsbD09PW0/bD1xOm0uc2libGluZz1xLG09cTtyZXR1cm4gbH1mb3IocT1kKGUscSk7dTxoLmxlbmd0aDt1KyspaWYoQj1BKHEsZSx1LGhbdV0saykpYSYmbnVsbCE9PUIuYWx0ZXJuYXRlJiZxLmRlbGV0ZShudWxsPT09Qi5rZXk/dTpCLmtleSksZz1mKEIsZyx1KSxudWxsPT09bT9sPUI6bS5zaWJsaW5nPUIsbT1CO2EmJnEuZm9yRWFjaChmdW5jdGlvbihhKXtyZXR1cm4gYihlLGEpfSk7cmV0dXJuIGx9ZnVuY3Rpb24gUihlLGcsaCxrKXt2YXIgbD1oYyhoKTtcImZ1bmN0aW9uXCIhPT10eXBlb2YgbD94KFwiMTUwXCIpOnZvaWQgMDtoPWwuY2FsbChoKTtudWxsPT1oP3goXCIxNTFcIik6dm9pZCAwO1xuZm9yKHZhciBtPWw9bnVsbCxxPWcsdT1nPTAsQj1udWxsLHc9aC5uZXh0KCk7bnVsbCE9PXEmJiF3LmRvbmU7dSsrLHc9aC5uZXh0KCkpe3EuaW5kZXg+dT8oQj1xLHE9bnVsbCk6Qj1xLnNpYmxpbmc7dmFyIHY9dChlLHEsdy52YWx1ZSxrKTtpZihudWxsPT09dil7cXx8KHE9Qik7YnJlYWt9YSYmcSYmbnVsbD09PXYuYWx0ZXJuYXRlJiZiKGUscSk7Zz1mKHYsZyx1KTtudWxsPT09bT9sPXY6bS5zaWJsaW5nPXY7bT12O3E9Qn1pZih3LmRvbmUpcmV0dXJuIGMoZSxxKSxsO2lmKG51bGw9PT1xKXtmb3IoOyF3LmRvbmU7dSsrLHc9aC5uZXh0KCkpdz1wKGUsdy52YWx1ZSxrKSxudWxsIT09dyYmKGc9Zih3LGcsdSksbnVsbD09PW0/bD13Om0uc2libGluZz13LG09dyk7cmV0dXJuIGx9Zm9yKHE9ZChlLHEpOyF3LmRvbmU7dSsrLHc9aC5uZXh0KCkpdz1BKHEsZSx1LHcudmFsdWUsayksbnVsbCE9PXcmJihhJiZudWxsIT09dy5hbHRlcm5hdGUmJnEuZGVsZXRlKG51bGw9PT13LmtleT91Olxudy5rZXkpLGc9Zih3LGcsdSksbnVsbD09PW0/bD13Om0uc2libGluZz13LG09dyk7YSYmcS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3JldHVybiBiKGUsYSl9KTtyZXR1cm4gbH1yZXR1cm4gZnVuY3Rpb24oYSxkLGYsaCl7dmFyIGs9XCJvYmplY3RcIj09PXR5cGVvZiBmJiZudWxsIT09ZiYmZi50eXBlPT09WGImJm51bGw9PT1mLmtleTtrJiYoZj1mLnByb3BzLmNoaWxkcmVuKTt2YXIgbD1cIm9iamVjdFwiPT09dHlwZW9mIGYmJm51bGwhPT1mO2lmKGwpc3dpdGNoKGYuJCR0eXBlb2Ype2Nhc2UgVmI6YTp7bD1mLmtleTtmb3Ioaz1kO251bGwhPT1rOyl7aWYoay5rZXk9PT1sKWlmKDc9PT1rLnRhZz9mLnR5cGU9PT1YYjprLmVsZW1lbnRUeXBlPT09Zi50eXBlKXtjKGEsay5zaWJsaW5nKTtkPWUoayxmLnR5cGU9PT1YYj9mLnByb3BzLmNoaWxkcmVuOmYucHJvcHMsaCk7ZC5yZWY9QWYoYSxrLGYpO2QucmV0dXJuPWE7YT1kO2JyZWFrIGF9ZWxzZXtjKGEsayk7YnJlYWt9ZWxzZSBiKGEsayk7az1cbmsuc2libGluZ31mLnR5cGU9PT1YYj8oZD1aZShmLnByb3BzLmNoaWxkcmVuLGEubW9kZSxoLGYua2V5KSxkLnJldHVybj1hLGE9ZCk6KGg9WWUoZi50eXBlLGYua2V5LGYucHJvcHMsbnVsbCxhLm1vZGUsaCksaC5yZWY9QWYoYSxkLGYpLGgucmV0dXJuPWEsYT1oKX1yZXR1cm4gZyhhKTtjYXNlIFdiOmE6e2ZvcihrPWYua2V5O251bGwhPT1kOyl7aWYoZC5rZXk9PT1rKWlmKDQ9PT1kLnRhZyYmZC5zdGF0ZU5vZGUuY29udGFpbmVySW5mbz09PWYuY29udGFpbmVySW5mbyYmZC5zdGF0ZU5vZGUuaW1wbGVtZW50YXRpb249PT1mLmltcGxlbWVudGF0aW9uKXtjKGEsZC5zaWJsaW5nKTtkPWUoZCxmLmNoaWxkcmVufHxbXSxoKTtkLnJldHVybj1hO2E9ZDticmVhayBhfWVsc2V7YyhhLGQpO2JyZWFrfWVsc2UgYihhLGQpO2Q9ZC5zaWJsaW5nfWQ9YmYoZixhLm1vZGUsaCk7ZC5yZXR1cm49YTthPWR9cmV0dXJuIGcoYSl9aWYoXCJzdHJpbmdcIj09PXR5cGVvZiBmfHxcIm51bWJlclwiPT09dHlwZW9mIGYpcmV0dXJuIGY9XG5cIlwiK2YsbnVsbCE9PWQmJjY9PT1kLnRhZz8oYyhhLGQuc2libGluZyksZD1lKGQsZixoKSxkLnJldHVybj1hLGE9ZCk6KGMoYSxkKSxkPWFmKGYsYS5tb2RlLGgpLGQucmV0dXJuPWEsYT1kKSxnKGEpO2lmKHpmKGYpKXJldHVybiB2KGEsZCxmLGgpO2lmKGhjKGYpKXJldHVybiBSKGEsZCxmLGgpO2wmJkJmKGEsZik7aWYoXCJ1bmRlZmluZWRcIj09PXR5cGVvZiBmJiYhaylzd2l0Y2goYS50YWcpe2Nhc2UgMTpjYXNlIDA6aD1hLnR5cGUseChcIjE1MlwiLGguZGlzcGxheU5hbWV8fGgubmFtZXx8XCJDb21wb25lbnRcIil9cmV0dXJuIGMoYSxkKX19dmFyIERmPUNmKCEwKSxFZj1DZighMSksRmY9e30sTj17Y3VycmVudDpGZn0sR2Y9e2N1cnJlbnQ6RmZ9LEhmPXtjdXJyZW50OkZmfTtmdW5jdGlvbiBJZihhKXthPT09RmY/eChcIjE3NFwiKTp2b2lkIDA7cmV0dXJuIGF9XG5mdW5jdGlvbiBKZihhLGIpe0coSGYsYixhKTtHKEdmLGEsYSk7RyhOLEZmLGEpO3ZhciBjPWIubm9kZVR5cGU7c3dpdGNoKGMpe2Nhc2UgOTpjYXNlIDExOmI9KGI9Yi5kb2N1bWVudEVsZW1lbnQpP2IubmFtZXNwYWNlVVJJOmhlKG51bGwsXCJcIik7YnJlYWs7ZGVmYXVsdDpjPTg9PT1jP2IucGFyZW50Tm9kZTpiLGI9Yy5uYW1lc3BhY2VVUkl8fG51bGwsYz1jLnRhZ05hbWUsYj1oZShiLGMpfUYoTixhKTtHKE4sYixhKX1mdW5jdGlvbiBLZihhKXtGKE4sYSk7RihHZixhKTtGKEhmLGEpfWZ1bmN0aW9uIExmKGEpe0lmKEhmLmN1cnJlbnQpO3ZhciBiPUlmKE4uY3VycmVudCk7dmFyIGM9aGUoYixhLnR5cGUpO2IhPT1jJiYoRyhHZixhLGEpLEcoTixjLGEpKX1mdW5jdGlvbiBNZihhKXtHZi5jdXJyZW50PT09YSYmKEYoTixhKSxGKEdmLGEpKX1cbnZhciBOZj0wLE9mPTIsUGY9NCxRZj04LFJmPTE2LFNmPTMyLFRmPTY0LFVmPTEyOCxWZj1UYi5SZWFjdEN1cnJlbnREaXNwYXRjaGVyLFdmPTAsWGY9bnVsbCxPPW51bGwsUD1udWxsLFlmPW51bGwsUT1udWxsLFpmPW51bGwsJGY9MCxhZz1udWxsLGJnPTAsY2c9ITEsZGc9bnVsbCxlZz0wO2Z1bmN0aW9uIGZnKCl7eChcIjMyMVwiKX1mdW5jdGlvbiBnZyhhLGIpe2lmKG51bGw9PT1iKXJldHVybiExO2Zvcih2YXIgYz0wO2M8Yi5sZW5ndGgmJmM8YS5sZW5ndGg7YysrKWlmKCFiZChhW2NdLGJbY10pKXJldHVybiExO3JldHVybiEwfVxuZnVuY3Rpb24gaGcoYSxiLGMsZCxlLGYpe1dmPWY7WGY9YjtQPW51bGwhPT1hP2EubWVtb2l6ZWRTdGF0ZTpudWxsO1ZmLmN1cnJlbnQ9bnVsbD09PVA/aWc6amc7Yj1jKGQsZSk7aWYoY2cpe2RvIGNnPSExLGVnKz0xLFA9bnVsbCE9PWE/YS5tZW1vaXplZFN0YXRlOm51bGwsWmY9WWYsYWc9UT1PPW51bGwsVmYuY3VycmVudD1qZyxiPWMoZCxlKTt3aGlsZShjZyk7ZGc9bnVsbDtlZz0wfVZmLmN1cnJlbnQ9a2c7YT1YZjthLm1lbW9pemVkU3RhdGU9WWY7YS5leHBpcmF0aW9uVGltZT0kZjthLnVwZGF0ZVF1ZXVlPWFnO2EuZWZmZWN0VGFnfD1iZzthPW51bGwhPT1PJiZudWxsIT09Ty5uZXh0O1dmPTA7WmY9UT1ZZj1QPU89WGY9bnVsbDskZj0wO2FnPW51bGw7Ymc9MDthP3goXCIzMDBcIik6dm9pZCAwO3JldHVybiBifWZ1bmN0aW9uIGxnKCl7VmYuY3VycmVudD1rZztXZj0wO1pmPVE9WWY9UD1PPVhmPW51bGw7JGY9MDthZz1udWxsO2JnPTA7Y2c9ITE7ZGc9bnVsbDtlZz0wfVxuZnVuY3Rpb24gbWcoKXt2YXIgYT17bWVtb2l6ZWRTdGF0ZTpudWxsLGJhc2VTdGF0ZTpudWxsLHF1ZXVlOm51bGwsYmFzZVVwZGF0ZTpudWxsLG5leHQ6bnVsbH07bnVsbD09PVE/WWY9UT1hOlE9US5uZXh0PWE7cmV0dXJuIFF9ZnVuY3Rpb24gbmcoKXtpZihudWxsIT09WmYpUT1aZixaZj1RLm5leHQsTz1QLFA9bnVsbCE9PU8/Ty5uZXh0Om51bGw7ZWxzZXtudWxsPT09UD94KFwiMzEwXCIpOnZvaWQgMDtPPVA7dmFyIGE9e21lbW9pemVkU3RhdGU6Ty5tZW1vaXplZFN0YXRlLGJhc2VTdGF0ZTpPLmJhc2VTdGF0ZSxxdWV1ZTpPLnF1ZXVlLGJhc2VVcGRhdGU6Ty5iYXNlVXBkYXRlLG5leHQ6bnVsbH07UT1udWxsPT09UT9ZZj1hOlEubmV4dD1hO1A9Ty5uZXh0fXJldHVybiBRfWZ1bmN0aW9uIG9nKGEsYil7cmV0dXJuXCJmdW5jdGlvblwiPT09dHlwZW9mIGI/YihhKTpifVxuZnVuY3Rpb24gcGcoYSl7dmFyIGI9bmcoKSxjPWIucXVldWU7bnVsbD09PWM/eChcIjMxMVwiKTp2b2lkIDA7Yy5sYXN0UmVuZGVyZWRSZWR1Y2VyPWE7aWYoMDxlZyl7dmFyIGQ9Yy5kaXNwYXRjaDtpZihudWxsIT09ZGcpe3ZhciBlPWRnLmdldChjKTtpZih2b2lkIDAhPT1lKXtkZy5kZWxldGUoYyk7dmFyIGY9Yi5tZW1vaXplZFN0YXRlO2RvIGY9YShmLGUuYWN0aW9uKSxlPWUubmV4dDt3aGlsZShudWxsIT09ZSk7YmQoZixiLm1lbW9pemVkU3RhdGUpfHwocWc9ITApO2IubWVtb2l6ZWRTdGF0ZT1mO2IuYmFzZVVwZGF0ZT09PWMubGFzdCYmKGIuYmFzZVN0YXRlPWYpO2MubGFzdFJlbmRlcmVkU3RhdGU9ZjtyZXR1cm5bZixkXX19cmV0dXJuW2IubWVtb2l6ZWRTdGF0ZSxkXX1kPWMubGFzdDt2YXIgZz1iLmJhc2VVcGRhdGU7Zj1iLmJhc2VTdGF0ZTtudWxsIT09Zz8obnVsbCE9PWQmJihkLm5leHQ9bnVsbCksZD1nLm5leHQpOmQ9bnVsbCE9PWQ/ZC5uZXh0Om51bGw7aWYobnVsbCE9PVxuZCl7dmFyIGg9ZT1udWxsLGw9ZCxrPSExO2Rve3ZhciBtPWwuZXhwaXJhdGlvblRpbWU7bTxXZj8oa3x8KGs9ITAsaD1nLGU9ZiksbT4kZiYmKCRmPW0pKTpmPWwuZWFnZXJSZWR1Y2VyPT09YT9sLmVhZ2VyU3RhdGU6YShmLGwuYWN0aW9uKTtnPWw7bD1sLm5leHR9d2hpbGUobnVsbCE9PWwmJmwhPT1kKTtrfHwoaD1nLGU9Zik7YmQoZixiLm1lbW9pemVkU3RhdGUpfHwocWc9ITApO2IubWVtb2l6ZWRTdGF0ZT1mO2IuYmFzZVVwZGF0ZT1oO2IuYmFzZVN0YXRlPWU7Yy5sYXN0UmVuZGVyZWRTdGF0ZT1mfXJldHVybltiLm1lbW9pemVkU3RhdGUsYy5kaXNwYXRjaF19XG5mdW5jdGlvbiByZyhhLGIsYyxkKXthPXt0YWc6YSxjcmVhdGU6YixkZXN0cm95OmMsZGVwczpkLG5leHQ6bnVsbH07bnVsbD09PWFnPyhhZz17bGFzdEVmZmVjdDpudWxsfSxhZy5sYXN0RWZmZWN0PWEubmV4dD1hKTooYj1hZy5sYXN0RWZmZWN0LG51bGw9PT1iP2FnLmxhc3RFZmZlY3Q9YS5uZXh0PWE6KGM9Yi5uZXh0LGIubmV4dD1hLGEubmV4dD1jLGFnLmxhc3RFZmZlY3Q9YSkpO3JldHVybiBhfWZ1bmN0aW9uIHNnKGEsYixjLGQpe3ZhciBlPW1nKCk7Ymd8PWE7ZS5tZW1vaXplZFN0YXRlPXJnKGIsYyx2b2lkIDAsdm9pZCAwPT09ZD9udWxsOmQpfVxuZnVuY3Rpb24gdGcoYSxiLGMsZCl7dmFyIGU9bmcoKTtkPXZvaWQgMD09PWQ/bnVsbDpkO3ZhciBmPXZvaWQgMDtpZihudWxsIT09Tyl7dmFyIGc9Ty5tZW1vaXplZFN0YXRlO2Y9Zy5kZXN0cm95O2lmKG51bGwhPT1kJiZnZyhkLGcuZGVwcykpe3JnKE5mLGMsZixkKTtyZXR1cm59fWJnfD1hO2UubWVtb2l6ZWRTdGF0ZT1yZyhiLGMsZixkKX1mdW5jdGlvbiB1ZyhhLGIpe2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBiKXJldHVybiBhPWEoKSxiKGEpLGZ1bmN0aW9uKCl7YihudWxsKX07aWYobnVsbCE9PWImJnZvaWQgMCE9PWIpcmV0dXJuIGE9YSgpLGIuY3VycmVudD1hLGZ1bmN0aW9uKCl7Yi5jdXJyZW50PW51bGx9fWZ1bmN0aW9uIHZnKCl7fVxuZnVuY3Rpb24gd2coYSxiLGMpezI1PmVnP3ZvaWQgMDp4KFwiMzAxXCIpO3ZhciBkPWEuYWx0ZXJuYXRlO2lmKGE9PT1YZnx8bnVsbCE9PWQmJmQ9PT1YZilpZihjZz0hMCxhPXtleHBpcmF0aW9uVGltZTpXZixhY3Rpb246YyxlYWdlclJlZHVjZXI6bnVsbCxlYWdlclN0YXRlOm51bGwsbmV4dDpudWxsfSxudWxsPT09ZGcmJihkZz1uZXcgTWFwKSxjPWRnLmdldChiKSx2b2lkIDA9PT1jKWRnLnNldChiLGEpO2Vsc2V7Zm9yKGI9YztudWxsIT09Yi5uZXh0OyliPWIubmV4dDtiLm5leHQ9YX1lbHNle29mKCk7dmFyIGU9bGYoKTtlPW1mKGUsYSk7dmFyIGY9e2V4cGlyYXRpb25UaW1lOmUsYWN0aW9uOmMsZWFnZXJSZWR1Y2VyOm51bGwsZWFnZXJTdGF0ZTpudWxsLG5leHQ6bnVsbH0sZz1iLmxhc3Q7aWYobnVsbD09PWcpZi5uZXh0PWY7ZWxzZXt2YXIgaD1nLm5leHQ7bnVsbCE9PWgmJihmLm5leHQ9aCk7Zy5uZXh0PWZ9Yi5sYXN0PWY7aWYoMD09PWEuZXhwaXJhdGlvblRpbWUmJihudWxsPT09XG5kfHwwPT09ZC5leHBpcmF0aW9uVGltZSkmJihkPWIubGFzdFJlbmRlcmVkUmVkdWNlcixudWxsIT09ZCkpdHJ5e3ZhciBsPWIubGFzdFJlbmRlcmVkU3RhdGUsaz1kKGwsYyk7Zi5lYWdlclJlZHVjZXI9ZDtmLmVhZ2VyU3RhdGU9aztpZihiZChrLGwpKXJldHVybn1jYXRjaChtKXt9ZmluYWxseXt9cWYoYSxlKX19XG52YXIga2c9e3JlYWRDb250ZXh0Ok0sdXNlQ2FsbGJhY2s6ZmcsdXNlQ29udGV4dDpmZyx1c2VFZmZlY3Q6ZmcsdXNlSW1wZXJhdGl2ZUhhbmRsZTpmZyx1c2VMYXlvdXRFZmZlY3Q6ZmcsdXNlTWVtbzpmZyx1c2VSZWR1Y2VyOmZnLHVzZVJlZjpmZyx1c2VTdGF0ZTpmZyx1c2VEZWJ1Z1ZhbHVlOmZnfSxpZz17cmVhZENvbnRleHQ6TSx1c2VDYWxsYmFjazpmdW5jdGlvbihhLGIpe21nKCkubWVtb2l6ZWRTdGF0ZT1bYSx2b2lkIDA9PT1iP251bGw6Yl07cmV0dXJuIGF9LHVzZUNvbnRleHQ6TSx1c2VFZmZlY3Q6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gc2coNTE2LFVmfFRmLGEsYil9LHVzZUltcGVyYXRpdmVIYW5kbGU6ZnVuY3Rpb24oYSxiLGMpe2M9bnVsbCE9PWMmJnZvaWQgMCE9PWM/Yy5jb25jYXQoW2FdKTpudWxsO3JldHVybiBzZyg0LFBmfFNmLHVnLmJpbmQobnVsbCxiLGEpLGMpfSx1c2VMYXlvdXRFZmZlY3Q6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gc2coNCxQZnxTZixhLGIpfSxcbnVzZU1lbW86ZnVuY3Rpb24oYSxiKXt2YXIgYz1tZygpO2I9dm9pZCAwPT09Yj9udWxsOmI7YT1hKCk7Yy5tZW1vaXplZFN0YXRlPVthLGJdO3JldHVybiBhfSx1c2VSZWR1Y2VyOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1tZygpO2I9dm9pZCAwIT09Yz9jKGIpOmI7ZC5tZW1vaXplZFN0YXRlPWQuYmFzZVN0YXRlPWI7YT1kLnF1ZXVlPXtsYXN0Om51bGwsZGlzcGF0Y2g6bnVsbCxsYXN0UmVuZGVyZWRSZWR1Y2VyOmEsbGFzdFJlbmRlcmVkU3RhdGU6Yn07YT1hLmRpc3BhdGNoPXdnLmJpbmQobnVsbCxYZixhKTtyZXR1cm5bZC5tZW1vaXplZFN0YXRlLGFdfSx1c2VSZWY6ZnVuY3Rpb24oYSl7dmFyIGI9bWcoKTthPXtjdXJyZW50OmF9O3JldHVybiBiLm1lbW9pemVkU3RhdGU9YX0sdXNlU3RhdGU6ZnVuY3Rpb24oYSl7dmFyIGI9bWcoKTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgYSYmKGE9YSgpKTtiLm1lbW9pemVkU3RhdGU9Yi5iYXNlU3RhdGU9YTthPWIucXVldWU9e2xhc3Q6bnVsbCxkaXNwYXRjaDpudWxsLFxubGFzdFJlbmRlcmVkUmVkdWNlcjpvZyxsYXN0UmVuZGVyZWRTdGF0ZTphfTthPWEuZGlzcGF0Y2g9d2cuYmluZChudWxsLFhmLGEpO3JldHVybltiLm1lbW9pemVkU3RhdGUsYV19LHVzZURlYnVnVmFsdWU6dmd9LGpnPXtyZWFkQ29udGV4dDpNLHVzZUNhbGxiYWNrOmZ1bmN0aW9uKGEsYil7dmFyIGM9bmcoKTtiPXZvaWQgMD09PWI/bnVsbDpiO3ZhciBkPWMubWVtb2l6ZWRTdGF0ZTtpZihudWxsIT09ZCYmbnVsbCE9PWImJmdnKGIsZFsxXSkpcmV0dXJuIGRbMF07Yy5tZW1vaXplZFN0YXRlPVthLGJdO3JldHVybiBhfSx1c2VDb250ZXh0Ok0sdXNlRWZmZWN0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRnKDUxNixVZnxUZixhLGIpfSx1c2VJbXBlcmF0aXZlSGFuZGxlOmZ1bmN0aW9uKGEsYixjKXtjPW51bGwhPT1jJiZ2b2lkIDAhPT1jP2MuY29uY2F0KFthXSk6bnVsbDtyZXR1cm4gdGcoNCxQZnxTZix1Zy5iaW5kKG51bGwsYixhKSxjKX0sdXNlTGF5b3V0RWZmZWN0OmZ1bmN0aW9uKGEsXG5iKXtyZXR1cm4gdGcoNCxQZnxTZixhLGIpfSx1c2VNZW1vOmZ1bmN0aW9uKGEsYil7dmFyIGM9bmcoKTtiPXZvaWQgMD09PWI/bnVsbDpiO3ZhciBkPWMubWVtb2l6ZWRTdGF0ZTtpZihudWxsIT09ZCYmbnVsbCE9PWImJmdnKGIsZFsxXSkpcmV0dXJuIGRbMF07YT1hKCk7Yy5tZW1vaXplZFN0YXRlPVthLGJdO3JldHVybiBhfSx1c2VSZWR1Y2VyOnBnLHVzZVJlZjpmdW5jdGlvbigpe3JldHVybiBuZygpLm1lbW9pemVkU3RhdGV9LHVzZVN0YXRlOmZ1bmN0aW9uKGEpe3JldHVybiBwZyhvZyxhKX0sdXNlRGVidWdWYWx1ZTp2Z30seGc9bnVsbCx5Zz1udWxsLHpnPSExO1xuZnVuY3Rpb24gQWcoYSxiKXt2YXIgYz1LKDUsbnVsbCxudWxsLDApO2MuZWxlbWVudFR5cGU9XCJERUxFVEVEXCI7Yy50eXBlPVwiREVMRVRFRFwiO2Muc3RhdGVOb2RlPWI7Yy5yZXR1cm49YTtjLmVmZmVjdFRhZz04O251bGwhPT1hLmxhc3RFZmZlY3Q/KGEubGFzdEVmZmVjdC5uZXh0RWZmZWN0PWMsYS5sYXN0RWZmZWN0PWMpOmEuZmlyc3RFZmZlY3Q9YS5sYXN0RWZmZWN0PWN9ZnVuY3Rpb24gQmcoYSxiKXtzd2l0Y2goYS50YWcpe2Nhc2UgNTp2YXIgYz1hLnR5cGU7Yj0xIT09Yi5ub2RlVHlwZXx8Yy50b0xvd2VyQ2FzZSgpIT09Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpP251bGw6YjtyZXR1cm4gbnVsbCE9PWI/KGEuc3RhdGVOb2RlPWIsITApOiExO2Nhc2UgNjpyZXR1cm4gYj1cIlwiPT09YS5wZW5kaW5nUHJvcHN8fDMhPT1iLm5vZGVUeXBlP251bGw6YixudWxsIT09Yj8oYS5zdGF0ZU5vZGU9YiwhMCk6ITE7Y2FzZSAxMzpyZXR1cm4hMTtkZWZhdWx0OnJldHVybiExfX1cbmZ1bmN0aW9uIENnKGEpe2lmKHpnKXt2YXIgYj15ZztpZihiKXt2YXIgYz1iO2lmKCFCZyhhLGIpKXtiPURlKGMpO2lmKCFifHwhQmcoYSxiKSl7YS5lZmZlY3RUYWd8PTI7emc9ITE7eGc9YTtyZXR1cm59QWcoeGcsYyl9eGc9YTt5Zz1FZShiKX1lbHNlIGEuZWZmZWN0VGFnfD0yLHpnPSExLHhnPWF9fWZ1bmN0aW9uIERnKGEpe2ZvcihhPWEucmV0dXJuO251bGwhPT1hJiY1IT09YS50YWcmJjMhPT1hLnRhZyYmMTghPT1hLnRhZzspYT1hLnJldHVybjt4Zz1hfWZ1bmN0aW9uIEVnKGEpe2lmKGEhPT14ZylyZXR1cm4hMTtpZighemcpcmV0dXJuIERnKGEpLHpnPSEwLCExO3ZhciBiPWEudHlwZTtpZig1IT09YS50YWd8fFwiaGVhZFwiIT09YiYmXCJib2R5XCIhPT1iJiYheGUoYixhLm1lbW9pemVkUHJvcHMpKWZvcihiPXlnO2I7KUFnKGEsYiksYj1EZShiKTtEZyhhKTt5Zz14Zz9EZShhLnN0YXRlTm9kZSk6bnVsbDtyZXR1cm4hMH1mdW5jdGlvbiBGZygpe3lnPXhnPW51bGw7emc9ITF9XG52YXIgR2c9VGIuUmVhY3RDdXJyZW50T3duZXIscWc9ITE7ZnVuY3Rpb24gUyhhLGIsYyxkKXtiLmNoaWxkPW51bGw9PT1hP0VmKGIsbnVsbCxjLGQpOkRmKGIsYS5jaGlsZCxjLGQpfWZ1bmN0aW9uIEhnKGEsYixjLGQsZSl7Yz1jLnJlbmRlcjt2YXIgZj1iLnJlZjtJZyhiLGUpO2Q9aGcoYSxiLGMsZCxmLGUpO2lmKG51bGwhPT1hJiYhcWcpcmV0dXJuIGIudXBkYXRlUXVldWU9YS51cGRhdGVRdWV1ZSxiLmVmZmVjdFRhZyY9LTUxNyxhLmV4cGlyYXRpb25UaW1lPD1lJiYoYS5leHBpcmF0aW9uVGltZT0wKSxKZyhhLGIsZSk7Yi5lZmZlY3RUYWd8PTE7UyhhLGIsZCxlKTtyZXR1cm4gYi5jaGlsZH1cbmZ1bmN0aW9uIEtnKGEsYixjLGQsZSxmKXtpZihudWxsPT09YSl7dmFyIGc9Yy50eXBlO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnJiYhVmUoZykmJnZvaWQgMD09PWcuZGVmYXVsdFByb3BzJiZudWxsPT09Yy5jb21wYXJlJiZ2b2lkIDA9PT1jLmRlZmF1bHRQcm9wcylyZXR1cm4gYi50YWc9MTUsYi50eXBlPWcsTGcoYSxiLGcsZCxlLGYpO2E9WWUoYy50eXBlLG51bGwsZCxudWxsLGIubW9kZSxmKTthLnJlZj1iLnJlZjthLnJldHVybj1iO3JldHVybiBiLmNoaWxkPWF9Zz1hLmNoaWxkO2lmKGU8ZiYmKGU9Zy5tZW1vaXplZFByb3BzLGM9Yy5jb21wYXJlLGM9bnVsbCE9PWM/YzpkZCxjKGUsZCkmJmEucmVmPT09Yi5yZWYpKXJldHVybiBKZyhhLGIsZik7Yi5lZmZlY3RUYWd8PTE7YT1YZShnLGQsZik7YS5yZWY9Yi5yZWY7YS5yZXR1cm49YjtyZXR1cm4gYi5jaGlsZD1hfVxuZnVuY3Rpb24gTGcoYSxiLGMsZCxlLGYpe3JldHVybiBudWxsIT09YSYmZGQoYS5tZW1vaXplZFByb3BzLGQpJiZhLnJlZj09PWIucmVmJiYocWc9ITEsZTxmKT9KZyhhLGIsZik6TWcoYSxiLGMsZCxmKX1mdW5jdGlvbiBOZyhhLGIpe3ZhciBjPWIucmVmO2lmKG51bGw9PT1hJiZudWxsIT09Y3x8bnVsbCE9PWEmJmEucmVmIT09YyliLmVmZmVjdFRhZ3w9MTI4fWZ1bmN0aW9uIE1nKGEsYixjLGQsZSl7dmFyIGY9SihjKT9JZTpILmN1cnJlbnQ7Zj1KZShiLGYpO0lnKGIsZSk7Yz1oZyhhLGIsYyxkLGYsZSk7aWYobnVsbCE9PWEmJiFxZylyZXR1cm4gYi51cGRhdGVRdWV1ZT1hLnVwZGF0ZVF1ZXVlLGIuZWZmZWN0VGFnJj0tNTE3LGEuZXhwaXJhdGlvblRpbWU8PWUmJihhLmV4cGlyYXRpb25UaW1lPTApLEpnKGEsYixlKTtiLmVmZmVjdFRhZ3w9MTtTKGEsYixjLGUpO3JldHVybiBiLmNoaWxkfVxuZnVuY3Rpb24gT2coYSxiLGMsZCxlKXtpZihKKGMpKXt2YXIgZj0hMDtPZShiKX1lbHNlIGY9ITE7SWcoYixlKTtpZihudWxsPT09Yi5zdGF0ZU5vZGUpbnVsbCE9PWEmJihhLmFsdGVybmF0ZT1udWxsLGIuYWx0ZXJuYXRlPW51bGwsYi5lZmZlY3RUYWd8PTIpLHZmKGIsYyxkLGUpLHhmKGIsYyxkLGUpLGQ9ITA7ZWxzZSBpZihudWxsPT09YSl7dmFyIGc9Yi5zdGF0ZU5vZGUsaD1iLm1lbW9pemVkUHJvcHM7Zy5wcm9wcz1oO3ZhciBsPWcuY29udGV4dCxrPWMuY29udGV4dFR5cGU7XCJvYmplY3RcIj09PXR5cGVvZiBrJiZudWxsIT09az9rPU0oayk6KGs9SihjKT9JZTpILmN1cnJlbnQsaz1KZShiLGspKTt2YXIgbT1jLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyxwPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBtfHxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZTtwfHxcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5VTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmXG5cImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzfHwoaCE9PWR8fGwhPT1rKSYmd2YoYixnLGQsayk7UGc9ITE7dmFyIHQ9Yi5tZW1vaXplZFN0YXRlO2w9Zy5zdGF0ZT10O3ZhciBBPWIudXBkYXRlUXVldWU7bnVsbCE9PUEmJih5ZihiLEEsZCxnLGUpLGw9Yi5tZW1vaXplZFN0YXRlKTtoIT09ZHx8dCE9PWx8fEkuY3VycmVudHx8UGc/KFwiZnVuY3Rpb25cIj09PXR5cGVvZiBtJiYoa2YoYixjLG0sZCksbD1iLm1lbW9pemVkU3RhdGUpLChoPVBnfHx1ZihiLGMsaCxkLHQsbCxrKSk/KHB8fFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmNvbXBvbmVudFdpbGxNb3VudHx8KFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmNvbXBvbmVudFdpbGxNb3VudCYmZy5jb21wb25lbnRXaWxsTW91bnQoKSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50JiZcbmcuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpKSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5jb21wb25lbnREaWRNb3VudCYmKGIuZWZmZWN0VGFnfD00KSk6KFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmNvbXBvbmVudERpZE1vdW50JiYoYi5lZmZlY3RUYWd8PTQpLGIubWVtb2l6ZWRQcm9wcz1kLGIubWVtb2l6ZWRTdGF0ZT1sKSxnLnByb3BzPWQsZy5zdGF0ZT1sLGcuY29udGV4dD1rLGQ9aCk6KFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmNvbXBvbmVudERpZE1vdW50JiYoYi5lZmZlY3RUYWd8PTQpLGQ9ITEpfWVsc2UgZz1iLnN0YXRlTm9kZSxoPWIubWVtb2l6ZWRQcm9wcyxnLnByb3BzPWIudHlwZT09PWIuZWxlbWVudFR5cGU/aDpMKGIudHlwZSxoKSxsPWcuY29udGV4dCxrPWMuY29udGV4dFR5cGUsXCJvYmplY3RcIj09PXR5cGVvZiBrJiZudWxsIT09az9rPU0oayk6KGs9SihjKT9JZTpILmN1cnJlbnQsaz1KZShiLGspKSxtPWMuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzLChwPVwiZnVuY3Rpb25cIj09PVxudHlwZW9mIG18fFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKXx8XCJmdW5jdGlvblwiIT09dHlwZW9mIGcuVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHN8fChoIT09ZHx8bCE9PWspJiZ3ZihiLGcsZCxrKSxQZz0hMSxsPWIubWVtb2l6ZWRTdGF0ZSx0PWcuc3RhdGU9bCxBPWIudXBkYXRlUXVldWUsbnVsbCE9PUEmJih5ZihiLEEsZCxnLGUpLHQ9Yi5tZW1vaXplZFN0YXRlKSxoIT09ZHx8bCE9PXR8fEkuY3VycmVudHx8UGc/KFwiZnVuY3Rpb25cIj09PXR5cGVvZiBtJiYoa2YoYixjLG0sZCksdD1iLm1lbW9pemVkU3RhdGUpLChtPVBnfHx1ZihiLGMsaCxkLGwsdCxrKSk/KHB8fFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLlVOU0FGRV9jb21wb25lbnRXaWxsVXBkYXRlJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5jb21wb25lbnRXaWxsVXBkYXRlfHwoXCJmdW5jdGlvblwiPT09XG50eXBlb2YgZy5jb21wb25lbnRXaWxsVXBkYXRlJiZnLmNvbXBvbmVudFdpbGxVcGRhdGUoZCx0LGspLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLlVOU0FGRV9jb21wb25lbnRXaWxsVXBkYXRlJiZnLlVOU0FGRV9jb21wb25lbnRXaWxsVXBkYXRlKGQsdCxrKSksXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuY29tcG9uZW50RGlkVXBkYXRlJiYoYi5lZmZlY3RUYWd8PTQpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlJiYoYi5lZmZlY3RUYWd8PTI1NikpOihcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5jb21wb25lbnREaWRVcGRhdGV8fGg9PT1hLm1lbW9pemVkUHJvcHMmJmw9PT1hLm1lbW9pemVkU3RhdGV8fChiLmVmZmVjdFRhZ3w9NCksXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fGg9PT1hLm1lbW9pemVkUHJvcHMmJmw9PT1hLm1lbW9pemVkU3RhdGV8fChiLmVmZmVjdFRhZ3w9MjU2KSxiLm1lbW9pemVkUHJvcHM9ZCxiLm1lbW9pemVkU3RhdGU9XG50KSxnLnByb3BzPWQsZy5zdGF0ZT10LGcuY29udGV4dD1rLGQ9bSk6KFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmNvbXBvbmVudERpZFVwZGF0ZXx8aD09PWEubWVtb2l6ZWRQcm9wcyYmbD09PWEubWVtb2l6ZWRTdGF0ZXx8KGIuZWZmZWN0VGFnfD00KSxcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZXx8aD09PWEubWVtb2l6ZWRQcm9wcyYmbD09PWEubWVtb2l6ZWRTdGF0ZXx8KGIuZWZmZWN0VGFnfD0yNTYpLGQ9ITEpO3JldHVybiBRZyhhLGIsYyxkLGYsZSl9XG5mdW5jdGlvbiBRZyhhLGIsYyxkLGUsZil7TmcoYSxiKTt2YXIgZz0wIT09KGIuZWZmZWN0VGFnJjY0KTtpZighZCYmIWcpcmV0dXJuIGUmJlBlKGIsYywhMSksSmcoYSxiLGYpO2Q9Yi5zdGF0ZU5vZGU7R2cuY3VycmVudD1iO3ZhciBoPWcmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBjLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcj9udWxsOmQucmVuZGVyKCk7Yi5lZmZlY3RUYWd8PTE7bnVsbCE9PWEmJmc/KGIuY2hpbGQ9RGYoYixhLmNoaWxkLG51bGwsZiksYi5jaGlsZD1EZihiLG51bGwsaCxmKSk6UyhhLGIsaCxmKTtiLm1lbW9pemVkU3RhdGU9ZC5zdGF0ZTtlJiZQZShiLGMsITApO3JldHVybiBiLmNoaWxkfWZ1bmN0aW9uIFJnKGEpe3ZhciBiPWEuc3RhdGVOb2RlO2IucGVuZGluZ0NvbnRleHQ/TWUoYSxiLnBlbmRpbmdDb250ZXh0LGIucGVuZGluZ0NvbnRleHQhPT1iLmNvbnRleHQpOmIuY29udGV4dCYmTWUoYSxiLmNvbnRleHQsITEpO0pmKGEsYi5jb250YWluZXJJbmZvKX1cbmZ1bmN0aW9uIFNnKGEsYixjKXt2YXIgZD1iLm1vZGUsZT1iLnBlbmRpbmdQcm9wcyxmPWIubWVtb2l6ZWRTdGF0ZTtpZigwPT09KGIuZWZmZWN0VGFnJjY0KSl7Zj1udWxsO3ZhciBnPSExfWVsc2UgZj17dGltZWRPdXRBdDpudWxsIT09Zj9mLnRpbWVkT3V0QXQ6MH0sZz0hMCxiLmVmZmVjdFRhZyY9LTY1O2lmKG51bGw9PT1hKWlmKGcpe3ZhciBoPWUuZmFsbGJhY2s7YT1aZShudWxsLGQsMCxudWxsKTswPT09KGIubW9kZSYxKSYmKGEuY2hpbGQ9bnVsbCE9PWIubWVtb2l6ZWRTdGF0ZT9iLmNoaWxkLmNoaWxkOmIuY2hpbGQpO2Q9WmUoaCxkLGMsbnVsbCk7YS5zaWJsaW5nPWQ7Yz1hO2MucmV0dXJuPWQucmV0dXJuPWJ9ZWxzZSBjPWQ9RWYoYixudWxsLGUuY2hpbGRyZW4sYyk7ZWxzZSBudWxsIT09YS5tZW1vaXplZFN0YXRlPyhkPWEuY2hpbGQsaD1kLnNpYmxpbmcsZz8oYz1lLmZhbGxiYWNrLGU9WGUoZCxkLnBlbmRpbmdQcm9wcywwKSwwPT09KGIubW9kZSYxKSYmKGc9bnVsbCE9PVxuYi5tZW1vaXplZFN0YXRlP2IuY2hpbGQuY2hpbGQ6Yi5jaGlsZCxnIT09ZC5jaGlsZCYmKGUuY2hpbGQ9ZykpLGQ9ZS5zaWJsaW5nPVhlKGgsYyxoLmV4cGlyYXRpb25UaW1lKSxjPWUsZS5jaGlsZEV4cGlyYXRpb25UaW1lPTAsYy5yZXR1cm49ZC5yZXR1cm49Yik6Yz1kPURmKGIsZC5jaGlsZCxlLmNoaWxkcmVuLGMpKTooaD1hLmNoaWxkLGc/KGc9ZS5mYWxsYmFjayxlPVplKG51bGwsZCwwLG51bGwpLGUuY2hpbGQ9aCwwPT09KGIubW9kZSYxKSYmKGUuY2hpbGQ9bnVsbCE9PWIubWVtb2l6ZWRTdGF0ZT9iLmNoaWxkLmNoaWxkOmIuY2hpbGQpLGQ9ZS5zaWJsaW5nPVplKGcsZCxjLG51bGwpLGQuZWZmZWN0VGFnfD0yLGM9ZSxlLmNoaWxkRXhwaXJhdGlvblRpbWU9MCxjLnJldHVybj1kLnJldHVybj1iKTpkPWM9RGYoYixoLGUuY2hpbGRyZW4sYykpLGIuc3RhdGVOb2RlPWEuc3RhdGVOb2RlO2IubWVtb2l6ZWRTdGF0ZT1mO2IuY2hpbGQ9YztyZXR1cm4gZH1cbmZ1bmN0aW9uIEpnKGEsYixjKXtudWxsIT09YSYmKGIuY29udGV4dERlcGVuZGVuY2llcz1hLmNvbnRleHREZXBlbmRlbmNpZXMpO2lmKGIuY2hpbGRFeHBpcmF0aW9uVGltZTxjKXJldHVybiBudWxsO251bGwhPT1hJiZiLmNoaWxkIT09YS5jaGlsZD94KFwiMTUzXCIpOnZvaWQgMDtpZihudWxsIT09Yi5jaGlsZCl7YT1iLmNoaWxkO2M9WGUoYSxhLnBlbmRpbmdQcm9wcyxhLmV4cGlyYXRpb25UaW1lKTtiLmNoaWxkPWM7Zm9yKGMucmV0dXJuPWI7bnVsbCE9PWEuc2libGluZzspYT1hLnNpYmxpbmcsYz1jLnNpYmxpbmc9WGUoYSxhLnBlbmRpbmdQcm9wcyxhLmV4cGlyYXRpb25UaW1lKSxjLnJldHVybj1iO2Muc2libGluZz1udWxsfXJldHVybiBiLmNoaWxkfVxuZnVuY3Rpb24gVGcoYSxiLGMpe3ZhciBkPWIuZXhwaXJhdGlvblRpbWU7aWYobnVsbCE9PWEpaWYoYS5tZW1vaXplZFByb3BzIT09Yi5wZW5kaW5nUHJvcHN8fEkuY3VycmVudClxZz0hMDtlbHNle2lmKGQ8Yyl7cWc9ITE7c3dpdGNoKGIudGFnKXtjYXNlIDM6UmcoYik7RmcoKTticmVhaztjYXNlIDU6TGYoYik7YnJlYWs7Y2FzZSAxOkooYi50eXBlKSYmT2UoYik7YnJlYWs7Y2FzZSA0OkpmKGIsYi5zdGF0ZU5vZGUuY29udGFpbmVySW5mbyk7YnJlYWs7Y2FzZSAxMDpVZyhiLGIubWVtb2l6ZWRQcm9wcy52YWx1ZSk7YnJlYWs7Y2FzZSAxMzppZihudWxsIT09Yi5tZW1vaXplZFN0YXRlKXtkPWIuY2hpbGQuY2hpbGRFeHBpcmF0aW9uVGltZTtpZigwIT09ZCYmZD49YylyZXR1cm4gU2coYSxiLGMpO2I9SmcoYSxiLGMpO3JldHVybiBudWxsIT09Yj9iLnNpYmxpbmc6bnVsbH19cmV0dXJuIEpnKGEsYixjKX19ZWxzZSBxZz0hMTtiLmV4cGlyYXRpb25UaW1lPTA7c3dpdGNoKGIudGFnKXtjYXNlIDI6ZD1cbmIuZWxlbWVudFR5cGU7bnVsbCE9PWEmJihhLmFsdGVybmF0ZT1udWxsLGIuYWx0ZXJuYXRlPW51bGwsYi5lZmZlY3RUYWd8PTIpO2E9Yi5wZW5kaW5nUHJvcHM7dmFyIGU9SmUoYixILmN1cnJlbnQpO0lnKGIsYyk7ZT1oZyhudWxsLGIsZCxhLGUsYyk7Yi5lZmZlY3RUYWd8PTE7aWYoXCJvYmplY3RcIj09PXR5cGVvZiBlJiZudWxsIT09ZSYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGUucmVuZGVyJiZ2b2lkIDA9PT1lLiQkdHlwZW9mKXtiLnRhZz0xO2xnKCk7aWYoSihkKSl7dmFyIGY9ITA7T2UoYil9ZWxzZSBmPSExO2IubWVtb2l6ZWRTdGF0ZT1udWxsIT09ZS5zdGF0ZSYmdm9pZCAwIT09ZS5zdGF0ZT9lLnN0YXRlOm51bGw7dmFyIGc9ZC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM7XCJmdW5jdGlvblwiPT09dHlwZW9mIGcmJmtmKGIsZCxnLGEpO2UudXBkYXRlcj10ZjtiLnN0YXRlTm9kZT1lO2UuX3JlYWN0SW50ZXJuYWxGaWJlcj1iO3hmKGIsZCxhLGMpO2I9UWcobnVsbCxiLGQsITAsZixcbmMpfWVsc2UgYi50YWc9MCxTKG51bGwsYixlLGMpLGI9Yi5jaGlsZDtyZXR1cm4gYjtjYXNlIDE2OmU9Yi5lbGVtZW50VHlwZTtudWxsIT09YSYmKGEuYWx0ZXJuYXRlPW51bGwsYi5hbHRlcm5hdGU9bnVsbCxiLmVmZmVjdFRhZ3w9Mik7Zj1iLnBlbmRpbmdQcm9wczthPWhmKGUpO2IudHlwZT1hO2U9Yi50YWc9V2UoYSk7Zj1MKGEsZik7Zz12b2lkIDA7c3dpdGNoKGUpe2Nhc2UgMDpnPU1nKG51bGwsYixhLGYsYyk7YnJlYWs7Y2FzZSAxOmc9T2cobnVsbCxiLGEsZixjKTticmVhaztjYXNlIDExOmc9SGcobnVsbCxiLGEsZixjKTticmVhaztjYXNlIDE0Omc9S2cobnVsbCxiLGEsTChhLnR5cGUsZiksZCxjKTticmVhaztkZWZhdWx0OngoXCIzMDZcIixhLFwiXCIpfXJldHVybiBnO2Nhc2UgMDpyZXR1cm4gZD1iLnR5cGUsZT1iLnBlbmRpbmdQcm9wcyxlPWIuZWxlbWVudFR5cGU9PT1kP2U6TChkLGUpLE1nKGEsYixkLGUsYyk7Y2FzZSAxOnJldHVybiBkPWIudHlwZSxlPWIucGVuZGluZ1Byb3BzLFxuZT1iLmVsZW1lbnRUeXBlPT09ZD9lOkwoZCxlKSxPZyhhLGIsZCxlLGMpO2Nhc2UgMzpSZyhiKTtkPWIudXBkYXRlUXVldWU7bnVsbD09PWQ/eChcIjI4MlwiKTp2b2lkIDA7ZT1iLm1lbW9pemVkU3RhdGU7ZT1udWxsIT09ZT9lLmVsZW1lbnQ6bnVsbDt5ZihiLGQsYi5wZW5kaW5nUHJvcHMsbnVsbCxjKTtkPWIubWVtb2l6ZWRTdGF0ZS5lbGVtZW50O2lmKGQ9PT1lKUZnKCksYj1KZyhhLGIsYyk7ZWxzZXtlPWIuc3RhdGVOb2RlO2lmKGU9KG51bGw9PT1hfHxudWxsPT09YS5jaGlsZCkmJmUuaHlkcmF0ZSl5Zz1FZShiLnN0YXRlTm9kZS5jb250YWluZXJJbmZvKSx4Zz1iLGU9emc9ITA7ZT8oYi5lZmZlY3RUYWd8PTIsYi5jaGlsZD1FZihiLG51bGwsZCxjKSk6KFMoYSxiLGQsYyksRmcoKSk7Yj1iLmNoaWxkfXJldHVybiBiO2Nhc2UgNTpyZXR1cm4gTGYoYiksbnVsbD09PWEmJkNnKGIpLGQ9Yi50eXBlLGU9Yi5wZW5kaW5nUHJvcHMsZj1udWxsIT09YT9hLm1lbW9pemVkUHJvcHM6bnVsbCxcbmc9ZS5jaGlsZHJlbix4ZShkLGUpP2c9bnVsbDpudWxsIT09ZiYmeGUoZCxmKSYmKGIuZWZmZWN0VGFnfD0xNiksTmcoYSxiKSwxIT09YyYmYi5tb2RlJjEmJmUuaGlkZGVuPyhiLmV4cGlyYXRpb25UaW1lPWIuY2hpbGRFeHBpcmF0aW9uVGltZT0xLGI9bnVsbCk6KFMoYSxiLGcsYyksYj1iLmNoaWxkKSxiO2Nhc2UgNjpyZXR1cm4gbnVsbD09PWEmJkNnKGIpLG51bGw7Y2FzZSAxMzpyZXR1cm4gU2coYSxiLGMpO2Nhc2UgNDpyZXR1cm4gSmYoYixiLnN0YXRlTm9kZS5jb250YWluZXJJbmZvKSxkPWIucGVuZGluZ1Byb3BzLG51bGw9PT1hP2IuY2hpbGQ9RGYoYixudWxsLGQsYyk6UyhhLGIsZCxjKSxiLmNoaWxkO2Nhc2UgMTE6cmV0dXJuIGQ9Yi50eXBlLGU9Yi5wZW5kaW5nUHJvcHMsZT1iLmVsZW1lbnRUeXBlPT09ZD9lOkwoZCxlKSxIZyhhLGIsZCxlLGMpO2Nhc2UgNzpyZXR1cm4gUyhhLGIsYi5wZW5kaW5nUHJvcHMsYyksYi5jaGlsZDtjYXNlIDg6cmV0dXJuIFMoYSxiLGIucGVuZGluZ1Byb3BzLmNoaWxkcmVuLFxuYyksYi5jaGlsZDtjYXNlIDEyOnJldHVybiBTKGEsYixiLnBlbmRpbmdQcm9wcy5jaGlsZHJlbixjKSxiLmNoaWxkO2Nhc2UgMTA6YTp7ZD1iLnR5cGUuX2NvbnRleHQ7ZT1iLnBlbmRpbmdQcm9wcztnPWIubWVtb2l6ZWRQcm9wcztmPWUudmFsdWU7VWcoYixmKTtpZihudWxsIT09Zyl7dmFyIGg9Zy52YWx1ZTtmPWJkKGgsZik/MDooXCJmdW5jdGlvblwiPT09dHlwZW9mIGQuX2NhbGN1bGF0ZUNoYW5nZWRCaXRzP2QuX2NhbGN1bGF0ZUNoYW5nZWRCaXRzKGgsZik6MTA3Mzc0MTgyMyl8MDtpZigwPT09Zil7aWYoZy5jaGlsZHJlbj09PWUuY2hpbGRyZW4mJiFJLmN1cnJlbnQpe2I9SmcoYSxiLGMpO2JyZWFrIGF9fWVsc2UgZm9yKGg9Yi5jaGlsZCxudWxsIT09aCYmKGgucmV0dXJuPWIpO251bGwhPT1oOyl7dmFyIGw9aC5jb250ZXh0RGVwZW5kZW5jaWVzO2lmKG51bGwhPT1sKXtnPWguY2hpbGQ7Zm9yKHZhciBrPWwuZmlyc3Q7bnVsbCE9PWs7KXtpZihrLmNvbnRleHQ9PT1kJiYwIT09XG4oay5vYnNlcnZlZEJpdHMmZikpezE9PT1oLnRhZyYmKGs9bmYoYyksay50YWc9c2YscGYoaCxrKSk7aC5leHBpcmF0aW9uVGltZTxjJiYoaC5leHBpcmF0aW9uVGltZT1jKTtrPWguYWx0ZXJuYXRlO251bGwhPT1rJiZrLmV4cGlyYXRpb25UaW1lPGMmJihrLmV4cGlyYXRpb25UaW1lPWMpO2s9Yztmb3IodmFyIG09aC5yZXR1cm47bnVsbCE9PW07KXt2YXIgcD1tLmFsdGVybmF0ZTtpZihtLmNoaWxkRXhwaXJhdGlvblRpbWU8ayltLmNoaWxkRXhwaXJhdGlvblRpbWU9ayxudWxsIT09cCYmcC5jaGlsZEV4cGlyYXRpb25UaW1lPGsmJihwLmNoaWxkRXhwaXJhdGlvblRpbWU9ayk7ZWxzZSBpZihudWxsIT09cCYmcC5jaGlsZEV4cGlyYXRpb25UaW1lPGspcC5jaGlsZEV4cGlyYXRpb25UaW1lPWs7ZWxzZSBicmVhazttPW0ucmV0dXJufWwuZXhwaXJhdGlvblRpbWU8YyYmKGwuZXhwaXJhdGlvblRpbWU9Yyk7YnJlYWt9az1rLm5leHR9fWVsc2UgZz0xMD09PWgudGFnP2gudHlwZT09PWIudHlwZT9cbm51bGw6aC5jaGlsZDpoLmNoaWxkO2lmKG51bGwhPT1nKWcucmV0dXJuPWg7ZWxzZSBmb3IoZz1oO251bGwhPT1nOyl7aWYoZz09PWIpe2c9bnVsbDticmVha31oPWcuc2libGluZztpZihudWxsIT09aCl7aC5yZXR1cm49Zy5yZXR1cm47Zz1oO2JyZWFrfWc9Zy5yZXR1cm59aD1nfX1TKGEsYixlLmNoaWxkcmVuLGMpO2I9Yi5jaGlsZH1yZXR1cm4gYjtjYXNlIDk6cmV0dXJuIGU9Yi50eXBlLGY9Yi5wZW5kaW5nUHJvcHMsZD1mLmNoaWxkcmVuLElnKGIsYyksZT1NKGUsZi51bnN0YWJsZV9vYnNlcnZlZEJpdHMpLGQ9ZChlKSxiLmVmZmVjdFRhZ3w9MSxTKGEsYixkLGMpLGIuY2hpbGQ7Y2FzZSAxNDpyZXR1cm4gZT1iLnR5cGUsZj1MKGUsYi5wZW5kaW5nUHJvcHMpLGY9TChlLnR5cGUsZiksS2coYSxiLGUsZixkLGMpO2Nhc2UgMTU6cmV0dXJuIExnKGEsYixiLnR5cGUsYi5wZW5kaW5nUHJvcHMsZCxjKTtjYXNlIDE3OnJldHVybiBkPWIudHlwZSxlPWIucGVuZGluZ1Byb3BzLGU9Yi5lbGVtZW50VHlwZT09PVxuZD9lOkwoZCxlKSxudWxsIT09YSYmKGEuYWx0ZXJuYXRlPW51bGwsYi5hbHRlcm5hdGU9bnVsbCxiLmVmZmVjdFRhZ3w9MiksYi50YWc9MSxKKGQpPyhhPSEwLE9lKGIpKTphPSExLElnKGIsYyksdmYoYixkLGUsYykseGYoYixkLGUsYyksUWcobnVsbCxiLGQsITAsYSxjKX14KFwiMTU2XCIpfXZhciBWZz17Y3VycmVudDpudWxsfSxXZz1udWxsLFhnPW51bGwsWWc9bnVsbDtmdW5jdGlvbiBVZyhhLGIpe3ZhciBjPWEudHlwZS5fY29udGV4dDtHKFZnLGMuX2N1cnJlbnRWYWx1ZSxhKTtjLl9jdXJyZW50VmFsdWU9Yn1mdW5jdGlvbiBaZyhhKXt2YXIgYj1WZy5jdXJyZW50O0YoVmcsYSk7YS50eXBlLl9jb250ZXh0Ll9jdXJyZW50VmFsdWU9Yn1mdW5jdGlvbiBJZyhhLGIpe1dnPWE7WWc9WGc9bnVsbDt2YXIgYz1hLmNvbnRleHREZXBlbmRlbmNpZXM7bnVsbCE9PWMmJmMuZXhwaXJhdGlvblRpbWU+PWImJihxZz0hMCk7YS5jb250ZXh0RGVwZW5kZW5jaWVzPW51bGx9XG5mdW5jdGlvbiBNKGEsYil7aWYoWWchPT1hJiYhMSE9PWImJjAhPT1iKXtpZihcIm51bWJlclwiIT09dHlwZW9mIGJ8fDEwNzM3NDE4MjM9PT1iKVlnPWEsYj0xMDczNzQxODIzO2I9e2NvbnRleHQ6YSxvYnNlcnZlZEJpdHM6YixuZXh0Om51bGx9O251bGw9PT1YZz8obnVsbD09PVdnP3goXCIzMDhcIik6dm9pZCAwLFhnPWIsV2cuY29udGV4dERlcGVuZGVuY2llcz17Zmlyc3Q6YixleHBpcmF0aW9uVGltZTowfSk6WGc9WGcubmV4dD1ifXJldHVybiBhLl9jdXJyZW50VmFsdWV9dmFyICRnPTAscmY9MSxzZj0yLGFoPTMsUGc9ITE7ZnVuY3Rpb24gYmgoYSl7cmV0dXJue2Jhc2VTdGF0ZTphLGZpcnN0VXBkYXRlOm51bGwsbGFzdFVwZGF0ZTpudWxsLGZpcnN0Q2FwdHVyZWRVcGRhdGU6bnVsbCxsYXN0Q2FwdHVyZWRVcGRhdGU6bnVsbCxmaXJzdEVmZmVjdDpudWxsLGxhc3RFZmZlY3Q6bnVsbCxmaXJzdENhcHR1cmVkRWZmZWN0Om51bGwsbGFzdENhcHR1cmVkRWZmZWN0Om51bGx9fVxuZnVuY3Rpb24gY2goYSl7cmV0dXJue2Jhc2VTdGF0ZTphLmJhc2VTdGF0ZSxmaXJzdFVwZGF0ZTphLmZpcnN0VXBkYXRlLGxhc3RVcGRhdGU6YS5sYXN0VXBkYXRlLGZpcnN0Q2FwdHVyZWRVcGRhdGU6bnVsbCxsYXN0Q2FwdHVyZWRVcGRhdGU6bnVsbCxmaXJzdEVmZmVjdDpudWxsLGxhc3RFZmZlY3Q6bnVsbCxmaXJzdENhcHR1cmVkRWZmZWN0Om51bGwsbGFzdENhcHR1cmVkRWZmZWN0Om51bGx9fWZ1bmN0aW9uIG5mKGEpe3JldHVybntleHBpcmF0aW9uVGltZTphLHRhZzokZyxwYXlsb2FkOm51bGwsY2FsbGJhY2s6bnVsbCxuZXh0Om51bGwsbmV4dEVmZmVjdDpudWxsfX1mdW5jdGlvbiBkaChhLGIpe251bGw9PT1hLmxhc3RVcGRhdGU/YS5maXJzdFVwZGF0ZT1hLmxhc3RVcGRhdGU9YjooYS5sYXN0VXBkYXRlLm5leHQ9YixhLmxhc3RVcGRhdGU9Yil9XG5mdW5jdGlvbiBwZihhLGIpe3ZhciBjPWEuYWx0ZXJuYXRlO2lmKG51bGw9PT1jKXt2YXIgZD1hLnVwZGF0ZVF1ZXVlO3ZhciBlPW51bGw7bnVsbD09PWQmJihkPWEudXBkYXRlUXVldWU9YmgoYS5tZW1vaXplZFN0YXRlKSl9ZWxzZSBkPWEudXBkYXRlUXVldWUsZT1jLnVwZGF0ZVF1ZXVlLG51bGw9PT1kP251bGw9PT1lPyhkPWEudXBkYXRlUXVldWU9YmgoYS5tZW1vaXplZFN0YXRlKSxlPWMudXBkYXRlUXVldWU9YmgoYy5tZW1vaXplZFN0YXRlKSk6ZD1hLnVwZGF0ZVF1ZXVlPWNoKGUpOm51bGw9PT1lJiYoZT1jLnVwZGF0ZVF1ZXVlPWNoKGQpKTtudWxsPT09ZXx8ZD09PWU/ZGgoZCxiKTpudWxsPT09ZC5sYXN0VXBkYXRlfHxudWxsPT09ZS5sYXN0VXBkYXRlPyhkaChkLGIpLGRoKGUsYikpOihkaChkLGIpLGUubGFzdFVwZGF0ZT1iKX1cbmZ1bmN0aW9uIGVoKGEsYil7dmFyIGM9YS51cGRhdGVRdWV1ZTtjPW51bGw9PT1jP2EudXBkYXRlUXVldWU9YmgoYS5tZW1vaXplZFN0YXRlKTpmaChhLGMpO251bGw9PT1jLmxhc3RDYXB0dXJlZFVwZGF0ZT9jLmZpcnN0Q2FwdHVyZWRVcGRhdGU9Yy5sYXN0Q2FwdHVyZWRVcGRhdGU9YjooYy5sYXN0Q2FwdHVyZWRVcGRhdGUubmV4dD1iLGMubGFzdENhcHR1cmVkVXBkYXRlPWIpfWZ1bmN0aW9uIGZoKGEsYil7dmFyIGM9YS5hbHRlcm5hdGU7bnVsbCE9PWMmJmI9PT1jLnVwZGF0ZVF1ZXVlJiYoYj1hLnVwZGF0ZVF1ZXVlPWNoKGIpKTtyZXR1cm4gYn1cbmZ1bmN0aW9uIGdoKGEsYixjLGQsZSxmKXtzd2l0Y2goYy50YWcpe2Nhc2UgcmY6cmV0dXJuIGE9Yy5wYXlsb2FkLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhP2EuY2FsbChmLGQsZSk6YTtjYXNlIGFoOmEuZWZmZWN0VGFnPWEuZWZmZWN0VGFnJi0yMDQ5fDY0O2Nhc2UgJGc6YT1jLnBheWxvYWQ7ZT1cImZ1bmN0aW9uXCI9PT10eXBlb2YgYT9hLmNhbGwoZixkLGUpOmE7aWYobnVsbD09PWV8fHZvaWQgMD09PWUpYnJlYWs7cmV0dXJuIG4oe30sZCxlKTtjYXNlIHNmOlBnPSEwfXJldHVybiBkfVxuZnVuY3Rpb24geWYoYSxiLGMsZCxlKXtQZz0hMTtiPWZoKGEsYik7Zm9yKHZhciBmPWIuYmFzZVN0YXRlLGc9bnVsbCxoPTAsbD1iLmZpcnN0VXBkYXRlLGs9ZjtudWxsIT09bDspe3ZhciBtPWwuZXhwaXJhdGlvblRpbWU7bTxlPyhudWxsPT09ZyYmKGc9bCxmPWspLGg8bSYmKGg9bSkpOihrPWdoKGEsYixsLGssYyxkKSxudWxsIT09bC5jYWxsYmFjayYmKGEuZWZmZWN0VGFnfD0zMixsLm5leHRFZmZlY3Q9bnVsbCxudWxsPT09Yi5sYXN0RWZmZWN0P2IuZmlyc3RFZmZlY3Q9Yi5sYXN0RWZmZWN0PWw6KGIubGFzdEVmZmVjdC5uZXh0RWZmZWN0PWwsYi5sYXN0RWZmZWN0PWwpKSk7bD1sLm5leHR9bT1udWxsO2ZvcihsPWIuZmlyc3RDYXB0dXJlZFVwZGF0ZTtudWxsIT09bDspe3ZhciBwPWwuZXhwaXJhdGlvblRpbWU7cDxlPyhudWxsPT09bSYmKG09bCxudWxsPT09ZyYmKGY9aykpLGg8cCYmKGg9cCkpOihrPWdoKGEsYixsLGssYyxkKSxudWxsIT09bC5jYWxsYmFjayYmKGEuZWZmZWN0VGFnfD1cbjMyLGwubmV4dEVmZmVjdD1udWxsLG51bGw9PT1iLmxhc3RDYXB0dXJlZEVmZmVjdD9iLmZpcnN0Q2FwdHVyZWRFZmZlY3Q9Yi5sYXN0Q2FwdHVyZWRFZmZlY3Q9bDooYi5sYXN0Q2FwdHVyZWRFZmZlY3QubmV4dEVmZmVjdD1sLGIubGFzdENhcHR1cmVkRWZmZWN0PWwpKSk7bD1sLm5leHR9bnVsbD09PWcmJihiLmxhc3RVcGRhdGU9bnVsbCk7bnVsbD09PW0/Yi5sYXN0Q2FwdHVyZWRVcGRhdGU9bnVsbDphLmVmZmVjdFRhZ3w9MzI7bnVsbD09PWcmJm51bGw9PT1tJiYoZj1rKTtiLmJhc2VTdGF0ZT1mO2IuZmlyc3RVcGRhdGU9ZztiLmZpcnN0Q2FwdHVyZWRVcGRhdGU9bTthLmV4cGlyYXRpb25UaW1lPWg7YS5tZW1vaXplZFN0YXRlPWt9XG5mdW5jdGlvbiBoaChhLGIsYyl7bnVsbCE9PWIuZmlyc3RDYXB0dXJlZFVwZGF0ZSYmKG51bGwhPT1iLmxhc3RVcGRhdGUmJihiLmxhc3RVcGRhdGUubmV4dD1iLmZpcnN0Q2FwdHVyZWRVcGRhdGUsYi5sYXN0VXBkYXRlPWIubGFzdENhcHR1cmVkVXBkYXRlKSxiLmZpcnN0Q2FwdHVyZWRVcGRhdGU9Yi5sYXN0Q2FwdHVyZWRVcGRhdGU9bnVsbCk7aWgoYi5maXJzdEVmZmVjdCxjKTtiLmZpcnN0RWZmZWN0PWIubGFzdEVmZmVjdD1udWxsO2loKGIuZmlyc3RDYXB0dXJlZEVmZmVjdCxjKTtiLmZpcnN0Q2FwdHVyZWRFZmZlY3Q9Yi5sYXN0Q2FwdHVyZWRFZmZlY3Q9bnVsbH1mdW5jdGlvbiBpaChhLGIpe2Zvcig7bnVsbCE9PWE7KXt2YXIgYz1hLmNhbGxiYWNrO2lmKG51bGwhPT1jKXthLmNhbGxiYWNrPW51bGw7dmFyIGQ9YjtcImZ1bmN0aW9uXCIhPT10eXBlb2YgYz94KFwiMTkxXCIsYyk6dm9pZCAwO2MuY2FsbChkKX1hPWEubmV4dEVmZmVjdH19XG5mdW5jdGlvbiBqaChhLGIpe3JldHVybnt2YWx1ZTphLHNvdXJjZTpiLHN0YWNrOmpjKGIpfX1mdW5jdGlvbiBraChhKXthLmVmZmVjdFRhZ3w9NH12YXIgbGg9dm9pZCAwLG1oPXZvaWQgMCxuaD12b2lkIDAsb2g9dm9pZCAwO2xoPWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPWIuY2hpbGQ7bnVsbCE9PWM7KXtpZig1PT09Yy50YWd8fDY9PT1jLnRhZylhLmFwcGVuZENoaWxkKGMuc3RhdGVOb2RlKTtlbHNlIGlmKDQhPT1jLnRhZyYmbnVsbCE9PWMuY2hpbGQpe2MuY2hpbGQucmV0dXJuPWM7Yz1jLmNoaWxkO2NvbnRpbnVlfWlmKGM9PT1iKWJyZWFrO2Zvcig7bnVsbD09PWMuc2libGluZzspe2lmKG51bGw9PT1jLnJldHVybnx8Yy5yZXR1cm49PT1iKXJldHVybjtjPWMucmV0dXJufWMuc2libGluZy5yZXR1cm49Yy5yZXR1cm47Yz1jLnNpYmxpbmd9fTttaD1mdW5jdGlvbigpe307XG5uaD1mdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmPWEubWVtb2l6ZWRQcm9wcztpZihmIT09ZCl7dmFyIGc9Yi5zdGF0ZU5vZGU7SWYoTi5jdXJyZW50KTthPW51bGw7c3dpdGNoKGMpe2Nhc2UgXCJpbnB1dFwiOmY9dmMoZyxmKTtkPXZjKGcsZCk7YT1bXTticmVhaztjYXNlIFwib3B0aW9uXCI6Zj0kZChnLGYpO2Q9JGQoZyxkKTthPVtdO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjpmPW4oe30sZix7dmFsdWU6dm9pZCAwfSk7ZD1uKHt9LGQse3ZhbHVlOnZvaWQgMH0pO2E9W107YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6Zj1iZShnLGYpO2Q9YmUoZyxkKTthPVtdO2JyZWFrO2RlZmF1bHQ6XCJmdW5jdGlvblwiIT09dHlwZW9mIGYub25DbGljayYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGQub25DbGljayYmKGcub25jbGljaz10ZSl9cWUoYyxkKTtnPWM9dm9pZCAwO3ZhciBoPW51bGw7Zm9yKGMgaW4gZilpZighZC5oYXNPd25Qcm9wZXJ0eShjKSYmZi5oYXNPd25Qcm9wZXJ0eShjKSYmbnVsbCE9ZltjXSlpZihcInN0eWxlXCI9PT1cbmMpe3ZhciBsPWZbY107Zm9yKGcgaW4gbClsLmhhc093blByb3BlcnR5KGcpJiYoaHx8KGg9e30pLGhbZ109XCJcIil9ZWxzZVwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIiE9PWMmJlwiY2hpbGRyZW5cIiE9PWMmJlwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nXCIhPT1jJiZcInN1cHByZXNzSHlkcmF0aW9uV2FybmluZ1wiIT09YyYmXCJhdXRvRm9jdXNcIiE9PWMmJihyYS5oYXNPd25Qcm9wZXJ0eShjKT9hfHwoYT1bXSk6KGE9YXx8W10pLnB1c2goYyxudWxsKSk7Zm9yKGMgaW4gZCl7dmFyIGs9ZFtjXTtsPW51bGwhPWY/ZltjXTp2b2lkIDA7aWYoZC5oYXNPd25Qcm9wZXJ0eShjKSYmayE9PWwmJihudWxsIT1rfHxudWxsIT1sKSlpZihcInN0eWxlXCI9PT1jKWlmKGwpe2ZvcihnIGluIGwpIWwuaGFzT3duUHJvcGVydHkoZyl8fGsmJmsuaGFzT3duUHJvcGVydHkoZyl8fChofHwoaD17fSksaFtnXT1cIlwiKTtmb3IoZyBpbiBrKWsuaGFzT3duUHJvcGVydHkoZykmJmxbZ10hPT1rW2ddJiYoaHx8XG4oaD17fSksaFtnXT1rW2ddKX1lbHNlIGh8fChhfHwoYT1bXSksYS5wdXNoKGMsaCkpLGg9aztlbHNlXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiPT09Yz8oaz1rP2suX19odG1sOnZvaWQgMCxsPWw/bC5fX2h0bWw6dm9pZCAwLG51bGwhPWsmJmwhPT1rJiYoYT1hfHxbXSkucHVzaChjLFwiXCIraykpOlwiY2hpbGRyZW5cIj09PWM/bD09PWt8fFwic3RyaW5nXCIhPT10eXBlb2YgayYmXCJudW1iZXJcIiE9PXR5cGVvZiBrfHwoYT1hfHxbXSkucHVzaChjLFwiXCIrayk6XCJzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmdcIiE9PWMmJlwic3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nXCIhPT1jJiYocmEuaGFzT3duUHJvcGVydHkoYyk/KG51bGwhPWsmJnNlKGUsYyksYXx8bD09PWt8fChhPVtdKSk6KGE9YXx8W10pLnB1c2goYyxrKSl9aCYmKGE9YXx8W10pLnB1c2goXCJzdHlsZVwiLGgpO2U9YTsoYi51cGRhdGVRdWV1ZT1lKSYma2goYil9fTtvaD1mdW5jdGlvbihhLGIsYyxkKXtjIT09ZCYma2goYil9O1xudmFyIHBoPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBXZWFrU2V0P1dlYWtTZXQ6U2V0O2Z1bmN0aW9uIHFoKGEsYil7dmFyIGM9Yi5zb3VyY2UsZD1iLnN0YWNrO251bGw9PT1kJiZudWxsIT09YyYmKGQ9amMoYykpO251bGwhPT1jJiZpYyhjLnR5cGUpO2I9Yi52YWx1ZTtudWxsIT09YSYmMT09PWEudGFnJiZpYyhhLnR5cGUpO3RyeXtjb25zb2xlLmVycm9yKGIpfWNhdGNoKGUpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXt0aHJvdyBlO30pfX1mdW5jdGlvbiByaChhKXt2YXIgYj1hLnJlZjtpZihudWxsIT09YilpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYil0cnl7YihudWxsKX1jYXRjaChjKXtzaChhLGMpfWVsc2UgYi5jdXJyZW50PW51bGx9XG5mdW5jdGlvbiB0aChhLGIsYyl7Yz1jLnVwZGF0ZVF1ZXVlO2M9bnVsbCE9PWM/Yy5sYXN0RWZmZWN0Om51bGw7aWYobnVsbCE9PWMpe3ZhciBkPWM9Yy5uZXh0O2Rve2lmKChkLnRhZyZhKSE9PU5mKXt2YXIgZT1kLmRlc3Ryb3k7ZC5kZXN0cm95PXZvaWQgMDt2b2lkIDAhPT1lJiZlKCl9KGQudGFnJmIpIT09TmYmJihlPWQuY3JlYXRlLGQuZGVzdHJveT1lKCkpO2Q9ZC5uZXh0fXdoaWxlKGQhPT1jKX19XG5mdW5jdGlvbiB1aChhLGIpe2Zvcih2YXIgYz1hOzspe2lmKDU9PT1jLnRhZyl7dmFyIGQ9Yy5zdGF0ZU5vZGU7aWYoYilkLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7ZWxzZXtkPWMuc3RhdGVOb2RlO3ZhciBlPWMubWVtb2l6ZWRQcm9wcy5zdHlsZTtlPXZvaWQgMCE9PWUmJm51bGwhPT1lJiZlLmhhc093blByb3BlcnR5KFwiZGlzcGxheVwiKT9lLmRpc3BsYXk6bnVsbDtkLnN0eWxlLmRpc3BsYXk9bmUoXCJkaXNwbGF5XCIsZSl9fWVsc2UgaWYoNj09PWMudGFnKWMuc3RhdGVOb2RlLm5vZGVWYWx1ZT1iP1wiXCI6Yy5tZW1vaXplZFByb3BzO2Vsc2UgaWYoMTM9PT1jLnRhZyYmbnVsbCE9PWMubWVtb2l6ZWRTdGF0ZSl7ZD1jLmNoaWxkLnNpYmxpbmc7ZC5yZXR1cm49YztjPWQ7Y29udGludWV9ZWxzZSBpZihudWxsIT09Yy5jaGlsZCl7Yy5jaGlsZC5yZXR1cm49YztjPWMuY2hpbGQ7Y29udGludWV9aWYoYz09PWEpYnJlYWs7Zm9yKDtudWxsPT09Yy5zaWJsaW5nOyl7aWYobnVsbD09PWMucmV0dXJufHxcbmMucmV0dXJuPT09YSlyZXR1cm47Yz1jLnJldHVybn1jLnNpYmxpbmcucmV0dXJuPWMucmV0dXJuO2M9Yy5zaWJsaW5nfX1cbmZ1bmN0aW9uIHZoKGEpe1wiZnVuY3Rpb25cIj09PXR5cGVvZiBSZSYmUmUoYSk7c3dpdGNoKGEudGFnKXtjYXNlIDA6Y2FzZSAxMTpjYXNlIDE0OmNhc2UgMTU6dmFyIGI9YS51cGRhdGVRdWV1ZTtpZihudWxsIT09YiYmKGI9Yi5sYXN0RWZmZWN0LG51bGwhPT1iKSl7dmFyIGM9Yj1iLm5leHQ7ZG97dmFyIGQ9Yy5kZXN0cm95O2lmKHZvaWQgMCE9PWQpe3ZhciBlPWE7dHJ5e2QoKX1jYXRjaChmKXtzaChlLGYpfX1jPWMubmV4dH13aGlsZShjIT09Yil9YnJlYWs7Y2FzZSAxOnJoKGEpO2I9YS5zdGF0ZU5vZGU7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGIuY29tcG9uZW50V2lsbFVubW91bnQpdHJ5e2IucHJvcHM9YS5tZW1vaXplZFByb3BzLGIuc3RhdGU9YS5tZW1vaXplZFN0YXRlLGIuY29tcG9uZW50V2lsbFVubW91bnQoKX1jYXRjaChmKXtzaChhLGYpfWJyZWFrO2Nhc2UgNTpyaChhKTticmVhaztjYXNlIDQ6d2goYSl9fVxuZnVuY3Rpb24geGgoYSl7cmV0dXJuIDU9PT1hLnRhZ3x8Mz09PWEudGFnfHw0PT09YS50YWd9XG5mdW5jdGlvbiB5aChhKXthOntmb3IodmFyIGI9YS5yZXR1cm47bnVsbCE9PWI7KXtpZih4aChiKSl7dmFyIGM9YjticmVhayBhfWI9Yi5yZXR1cm59eChcIjE2MFwiKTtjPXZvaWQgMH12YXIgZD1iPXZvaWQgMDtzd2l0Y2goYy50YWcpe2Nhc2UgNTpiPWMuc3RhdGVOb2RlO2Q9ITE7YnJlYWs7Y2FzZSAzOmI9Yy5zdGF0ZU5vZGUuY29udGFpbmVySW5mbztkPSEwO2JyZWFrO2Nhc2UgNDpiPWMuc3RhdGVOb2RlLmNvbnRhaW5lckluZm87ZD0hMDticmVhaztkZWZhdWx0OngoXCIxNjFcIil9Yy5lZmZlY3RUYWcmMTYmJihrZShiLFwiXCIpLGMuZWZmZWN0VGFnJj0tMTcpO2E6Yjpmb3IoYz1hOzspe2Zvcig7bnVsbD09PWMuc2libGluZzspe2lmKG51bGw9PT1jLnJldHVybnx8eGgoYy5yZXR1cm4pKXtjPW51bGw7YnJlYWsgYX1jPWMucmV0dXJufWMuc2libGluZy5yZXR1cm49Yy5yZXR1cm47Zm9yKGM9Yy5zaWJsaW5nOzUhPT1jLnRhZyYmNiE9PWMudGFnJiYxOCE9PWMudGFnOyl7aWYoYy5lZmZlY3RUYWcmXG4yKWNvbnRpbnVlIGI7aWYobnVsbD09PWMuY2hpbGR8fDQ9PT1jLnRhZyljb250aW51ZSBiO2Vsc2UgYy5jaGlsZC5yZXR1cm49YyxjPWMuY2hpbGR9aWYoIShjLmVmZmVjdFRhZyYyKSl7Yz1jLnN0YXRlTm9kZTticmVhayBhfX1mb3IodmFyIGU9YTs7KXtpZig1PT09ZS50YWd8fDY9PT1lLnRhZylpZihjKWlmKGQpe3ZhciBmPWIsZz1lLnN0YXRlTm9kZSxoPWM7OD09PWYubm9kZVR5cGU/Zi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShnLGgpOmYuaW5zZXJ0QmVmb3JlKGcsaCl9ZWxzZSBiLmluc2VydEJlZm9yZShlLnN0YXRlTm9kZSxjKTtlbHNlIGQ/KGc9YixoPWUuc3RhdGVOb2RlLDg9PT1nLm5vZGVUeXBlPyhmPWcucGFyZW50Tm9kZSxmLmluc2VydEJlZm9yZShoLGcpKTooZj1nLGYuYXBwZW5kQ2hpbGQoaCkpLGc9Zy5fcmVhY3RSb290Q29udGFpbmVyLG51bGwhPT1nJiZ2b2lkIDAhPT1nfHxudWxsIT09Zi5vbmNsaWNrfHwoZi5vbmNsaWNrPXRlKSk6Yi5hcHBlbmRDaGlsZChlLnN0YXRlTm9kZSk7XG5lbHNlIGlmKDQhPT1lLnRhZyYmbnVsbCE9PWUuY2hpbGQpe2UuY2hpbGQucmV0dXJuPWU7ZT1lLmNoaWxkO2NvbnRpbnVlfWlmKGU9PT1hKWJyZWFrO2Zvcig7bnVsbD09PWUuc2libGluZzspe2lmKG51bGw9PT1lLnJldHVybnx8ZS5yZXR1cm49PT1hKXJldHVybjtlPWUucmV0dXJufWUuc2libGluZy5yZXR1cm49ZS5yZXR1cm47ZT1lLnNpYmxpbmd9fVxuZnVuY3Rpb24gd2goYSl7Zm9yKHZhciBiPWEsYz0hMSxkPXZvaWQgMCxlPXZvaWQgMDs7KXtpZighYyl7Yz1iLnJldHVybjthOmZvcig7Oyl7bnVsbD09PWM/eChcIjE2MFwiKTp2b2lkIDA7c3dpdGNoKGMudGFnKXtjYXNlIDU6ZD1jLnN0YXRlTm9kZTtlPSExO2JyZWFrIGE7Y2FzZSAzOmQ9Yy5zdGF0ZU5vZGUuY29udGFpbmVySW5mbztlPSEwO2JyZWFrIGE7Y2FzZSA0OmQ9Yy5zdGF0ZU5vZGUuY29udGFpbmVySW5mbztlPSEwO2JyZWFrIGF9Yz1jLnJldHVybn1jPSEwfWlmKDU9PT1iLnRhZ3x8Nj09PWIudGFnKXthOmZvcih2YXIgZj1iLGc9Zjs7KWlmKHZoKGcpLG51bGwhPT1nLmNoaWxkJiY0IT09Zy50YWcpZy5jaGlsZC5yZXR1cm49ZyxnPWcuY2hpbGQ7ZWxzZXtpZihnPT09ZilicmVhaztmb3IoO251bGw9PT1nLnNpYmxpbmc7KXtpZihudWxsPT09Zy5yZXR1cm58fGcucmV0dXJuPT09ZilicmVhayBhO2c9Zy5yZXR1cm59Zy5zaWJsaW5nLnJldHVybj1nLnJldHVybjtnPWcuc2libGluZ31lP1xuKGY9ZCxnPWIuc3RhdGVOb2RlLDg9PT1mLm5vZGVUeXBlP2YucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChnKTpmLnJlbW92ZUNoaWxkKGcpKTpkLnJlbW92ZUNoaWxkKGIuc3RhdGVOb2RlKX1lbHNlIGlmKDQ9PT1iLnRhZyl7aWYobnVsbCE9PWIuY2hpbGQpe2Q9Yi5zdGF0ZU5vZGUuY29udGFpbmVySW5mbztlPSEwO2IuY2hpbGQucmV0dXJuPWI7Yj1iLmNoaWxkO2NvbnRpbnVlfX1lbHNlIGlmKHZoKGIpLG51bGwhPT1iLmNoaWxkKXtiLmNoaWxkLnJldHVybj1iO2I9Yi5jaGlsZDtjb250aW51ZX1pZihiPT09YSlicmVhaztmb3IoO251bGw9PT1iLnNpYmxpbmc7KXtpZihudWxsPT09Yi5yZXR1cm58fGIucmV0dXJuPT09YSlyZXR1cm47Yj1iLnJldHVybjs0PT09Yi50YWcmJihjPSExKX1iLnNpYmxpbmcucmV0dXJuPWIucmV0dXJuO2I9Yi5zaWJsaW5nfX1cbmZ1bmN0aW9uIHpoKGEsYil7c3dpdGNoKGIudGFnKXtjYXNlIDA6Y2FzZSAxMTpjYXNlIDE0OmNhc2UgMTU6dGgoUGYsUWYsYik7YnJlYWs7Y2FzZSAxOmJyZWFrO2Nhc2UgNTp2YXIgYz1iLnN0YXRlTm9kZTtpZihudWxsIT1jKXt2YXIgZD1iLm1lbW9pemVkUHJvcHM7YT1udWxsIT09YT9hLm1lbW9pemVkUHJvcHM6ZDt2YXIgZT1iLnR5cGUsZj1iLnVwZGF0ZVF1ZXVlO2IudXBkYXRlUXVldWU9bnVsbDtudWxsIT09ZiYmQ2UoYyxmLGUsYSxkLGIpfWJyZWFrO2Nhc2UgNjpudWxsPT09Yi5zdGF0ZU5vZGU/eChcIjE2MlwiKTp2b2lkIDA7Yi5zdGF0ZU5vZGUubm9kZVZhbHVlPWIubWVtb2l6ZWRQcm9wczticmVhaztjYXNlIDM6YnJlYWs7Y2FzZSAxMjpicmVhaztjYXNlIDEzOmM9Yi5tZW1vaXplZFN0YXRlO2Q9dm9pZCAwO2E9YjtudWxsPT09Yz9kPSExOihkPSEwLGE9Yi5jaGlsZCwwPT09Yy50aW1lZE91dEF0JiYoYy50aW1lZE91dEF0PWxmKCkpKTtudWxsIT09YSYmdWgoYSxkKTtjPVxuYi51cGRhdGVRdWV1ZTtpZihudWxsIT09Yyl7Yi51cGRhdGVRdWV1ZT1udWxsO3ZhciBnPWIuc3RhdGVOb2RlO251bGw9PT1nJiYoZz1iLnN0YXRlTm9kZT1uZXcgcGgpO2MuZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYz1BaC5iaW5kKG51bGwsYixhKTtnLmhhcyhhKXx8KGcuYWRkKGEpLGEudGhlbihjLGMpKX0pfWJyZWFrO2Nhc2UgMTc6YnJlYWs7ZGVmYXVsdDp4KFwiMTYzXCIpfX12YXIgQmg9XCJmdW5jdGlvblwiPT09dHlwZW9mIFdlYWtNYXA/V2Vha01hcDpNYXA7ZnVuY3Rpb24gQ2goYSxiLGMpe2M9bmYoYyk7Yy50YWc9YWg7Yy5wYXlsb2FkPXtlbGVtZW50Om51bGx9O3ZhciBkPWIudmFsdWU7Yy5jYWxsYmFjaz1mdW5jdGlvbigpe0RoKGQpO3FoKGEsYil9O3JldHVybiBjfVxuZnVuY3Rpb24gRWgoYSxiLGMpe2M9bmYoYyk7Yy50YWc9YWg7dmFyIGQ9YS50eXBlLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcjtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZCl7dmFyIGU9Yi52YWx1ZTtjLnBheWxvYWQ9ZnVuY3Rpb24oKXtyZXR1cm4gZChlKX19dmFyIGY9YS5zdGF0ZU5vZGU7bnVsbCE9PWYmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBmLmNvbXBvbmVudERpZENhdGNoJiYoYy5jYWxsYmFjaz1mdW5jdGlvbigpe1wiZnVuY3Rpb25cIiE9PXR5cGVvZiBkJiYobnVsbD09PUZoP0ZoPW5ldyBTZXQoW3RoaXNdKTpGaC5hZGQodGhpcykpO3ZhciBjPWIudmFsdWUsZT1iLnN0YWNrO3FoKGEsYik7dGhpcy5jb21wb25lbnREaWRDYXRjaChjLHtjb21wb25lbnRTdGFjazpudWxsIT09ZT9lOlwiXCJ9KX0pO3JldHVybiBjfVxuZnVuY3Rpb24gR2goYSl7c3dpdGNoKGEudGFnKXtjYXNlIDE6SihhLnR5cGUpJiZLZShhKTt2YXIgYj1hLmVmZmVjdFRhZztyZXR1cm4gYiYyMDQ4PyhhLmVmZmVjdFRhZz1iJi0yMDQ5fDY0LGEpOm51bGw7Y2FzZSAzOnJldHVybiBLZihhKSxMZShhKSxiPWEuZWZmZWN0VGFnLDAhPT0oYiY2NCk/eChcIjI4NVwiKTp2b2lkIDAsYS5lZmZlY3RUYWc9YiYtMjA0OXw2NCxhO2Nhc2UgNTpyZXR1cm4gTWYoYSksbnVsbDtjYXNlIDEzOnJldHVybiBiPWEuZWZmZWN0VGFnLGImMjA0OD8oYS5lZmZlY3RUYWc9YiYtMjA0OXw2NCxhKTpudWxsO2Nhc2UgMTg6cmV0dXJuIG51bGw7Y2FzZSA0OnJldHVybiBLZihhKSxudWxsO2Nhc2UgMTA6cmV0dXJuIFpnKGEpLG51bGw7ZGVmYXVsdDpyZXR1cm4gbnVsbH19XG52YXIgSGg9VGIuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcixJaD1UYi5SZWFjdEN1cnJlbnRPd25lcixKaD0xMDczNzQxODIyLEtoPSExLFQ9bnVsbCxMaD1udWxsLFU9MCxNaD0tMSxOaD0hMSxWPW51bGwsT2g9ITEsUGg9bnVsbCxRaD1udWxsLFJoPW51bGwsRmg9bnVsbDtmdW5jdGlvbiBTaCgpe2lmKG51bGwhPT1UKWZvcih2YXIgYT1ULnJldHVybjtudWxsIT09YTspe3ZhciBiPWE7c3dpdGNoKGIudGFnKXtjYXNlIDE6dmFyIGM9Yi50eXBlLmNoaWxkQ29udGV4dFR5cGVzO251bGwhPT1jJiZ2b2lkIDAhPT1jJiZLZShiKTticmVhaztjYXNlIDM6S2YoYik7TGUoYik7YnJlYWs7Y2FzZSA1Ok1mKGIpO2JyZWFrO2Nhc2UgNDpLZihiKTticmVhaztjYXNlIDEwOlpnKGIpfWE9YS5yZXR1cm59TGg9bnVsbDtVPTA7TWg9LTE7Tmg9ITE7VD1udWxsfVxuZnVuY3Rpb24gVGgoKXtmb3IoO251bGwhPT1WOyl7dmFyIGE9Vi5lZmZlY3RUYWc7YSYxNiYma2UoVi5zdGF0ZU5vZGUsXCJcIik7aWYoYSYxMjgpe3ZhciBiPVYuYWx0ZXJuYXRlO251bGwhPT1iJiYoYj1iLnJlZixudWxsIT09YiYmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBiP2IobnVsbCk6Yi5jdXJyZW50PW51bGwpKX1zd2l0Y2goYSYxNCl7Y2FzZSAyOnloKFYpO1YuZWZmZWN0VGFnJj0tMzticmVhaztjYXNlIDY6eWgoVik7Vi5lZmZlY3RUYWcmPS0zO3poKFYuYWx0ZXJuYXRlLFYpO2JyZWFrO2Nhc2UgNDp6aChWLmFsdGVybmF0ZSxWKTticmVhaztjYXNlIDg6YT1WLHdoKGEpLGEucmV0dXJuPW51bGwsYS5jaGlsZD1udWxsLGEubWVtb2l6ZWRTdGF0ZT1udWxsLGEudXBkYXRlUXVldWU9bnVsbCxhPWEuYWx0ZXJuYXRlLG51bGwhPT1hJiYoYS5yZXR1cm49bnVsbCxhLmNoaWxkPW51bGwsYS5tZW1vaXplZFN0YXRlPW51bGwsYS51cGRhdGVRdWV1ZT1udWxsKX1WPVYubmV4dEVmZmVjdH19XG5mdW5jdGlvbiBVaCgpe2Zvcig7bnVsbCE9PVY7KXtpZihWLmVmZmVjdFRhZyYyNTYpYTp7dmFyIGE9Vi5hbHRlcm5hdGUsYj1WO3N3aXRjaChiLnRhZyl7Y2FzZSAwOmNhc2UgMTE6Y2FzZSAxNTp0aChPZixOZixiKTticmVhayBhO2Nhc2UgMTppZihiLmVmZmVjdFRhZyYyNTYmJm51bGwhPT1hKXt2YXIgYz1hLm1lbW9pemVkUHJvcHMsZD1hLm1lbW9pemVkU3RhdGU7YT1iLnN0YXRlTm9kZTtiPWEuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoYi5lbGVtZW50VHlwZT09PWIudHlwZT9jOkwoYi50eXBlLGMpLGQpO2EuX19yZWFjdEludGVybmFsU25hcHNob3RCZWZvcmVVcGRhdGU9Yn1icmVhayBhO2Nhc2UgMzpjYXNlIDU6Y2FzZSA2OmNhc2UgNDpjYXNlIDE3OmJyZWFrIGE7ZGVmYXVsdDp4KFwiMTYzXCIpfX1WPVYubmV4dEVmZmVjdH19XG5mdW5jdGlvbiBWaChhLGIpe2Zvcig7bnVsbCE9PVY7KXt2YXIgYz1WLmVmZmVjdFRhZztpZihjJjM2KXt2YXIgZD1WLmFsdGVybmF0ZSxlPVYsZj1iO3N3aXRjaChlLnRhZyl7Y2FzZSAwOmNhc2UgMTE6Y2FzZSAxNTp0aChSZixTZixlKTticmVhaztjYXNlIDE6dmFyIGc9ZS5zdGF0ZU5vZGU7aWYoZS5lZmZlY3RUYWcmNClpZihudWxsPT09ZClnLmNvbXBvbmVudERpZE1vdW50KCk7ZWxzZXt2YXIgaD1lLmVsZW1lbnRUeXBlPT09ZS50eXBlP2QubWVtb2l6ZWRQcm9wczpMKGUudHlwZSxkLm1lbW9pemVkUHJvcHMpO2cuY29tcG9uZW50RGlkVXBkYXRlKGgsZC5tZW1vaXplZFN0YXRlLGcuX19yZWFjdEludGVybmFsU25hcHNob3RCZWZvcmVVcGRhdGUpfWQ9ZS51cGRhdGVRdWV1ZTtudWxsIT09ZCYmaGgoZSxkLGcsZik7YnJlYWs7Y2FzZSAzOmQ9ZS51cGRhdGVRdWV1ZTtpZihudWxsIT09ZCl7Zz1udWxsO2lmKG51bGwhPT1lLmNoaWxkKXN3aXRjaChlLmNoaWxkLnRhZyl7Y2FzZSA1Omc9XG5lLmNoaWxkLnN0YXRlTm9kZTticmVhaztjYXNlIDE6Zz1lLmNoaWxkLnN0YXRlTm9kZX1oaChlLGQsZyxmKX1icmVhaztjYXNlIDU6Zj1lLnN0YXRlTm9kZTtudWxsPT09ZCYmZS5lZmZlY3RUYWcmNCYmd2UoZS50eXBlLGUubWVtb2l6ZWRQcm9wcykmJmYuZm9jdXMoKTticmVhaztjYXNlIDY6YnJlYWs7Y2FzZSA0OmJyZWFrO2Nhc2UgMTI6YnJlYWs7Y2FzZSAxMzpicmVhaztjYXNlIDE3OmJyZWFrO2RlZmF1bHQ6eChcIjE2M1wiKX19YyYxMjgmJihlPVYucmVmLG51bGwhPT1lJiYoZj1WLnN0YXRlTm9kZSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZT9lKGYpOmUuY3VycmVudD1mKSk7YyY1MTImJihQaD1hKTtWPVYubmV4dEVmZmVjdH19XG5mdW5jdGlvbiBXaChhLGIpe1JoPVFoPVBoPW51bGw7dmFyIGM9VztXPSEwO2Rve2lmKGIuZWZmZWN0VGFnJjUxMil7dmFyIGQ9ITEsZT12b2lkIDA7dHJ5e3ZhciBmPWI7dGgoVWYsTmYsZik7dGgoTmYsVGYsZil9Y2F0Y2goZyl7ZD0hMCxlPWd9ZCYmc2goYixlKX1iPWIubmV4dEVmZmVjdH13aGlsZShudWxsIT09Yik7Vz1jO2M9YS5leHBpcmF0aW9uVGltZTswIT09YyYmWGgoYSxjKTtYfHxXfHxZaCgxMDczNzQxODIzLCExKX1mdW5jdGlvbiBvZigpe251bGwhPT1RaCYmQmUoUWgpO251bGwhPT1SaCYmUmgoKX1cbmZ1bmN0aW9uIFpoKGEsYil7T2g9S2g9ITA7YS5jdXJyZW50PT09Yj94KFwiMTc3XCIpOnZvaWQgMDt2YXIgYz1hLnBlbmRpbmdDb21taXRFeHBpcmF0aW9uVGltZTswPT09Yz94KFwiMjYxXCIpOnZvaWQgMDthLnBlbmRpbmdDb21taXRFeHBpcmF0aW9uVGltZT0wO3ZhciBkPWIuZXhwaXJhdGlvblRpbWUsZT1iLmNoaWxkRXhwaXJhdGlvblRpbWU7ZWYoYSxlPmQ/ZTpkKTtJaC5jdXJyZW50PW51bGw7ZD12b2lkIDA7MTxiLmVmZmVjdFRhZz9udWxsIT09Yi5sYXN0RWZmZWN0PyhiLmxhc3RFZmZlY3QubmV4dEVmZmVjdD1iLGQ9Yi5maXJzdEVmZmVjdCk6ZD1iOmQ9Yi5maXJzdEVmZmVjdDt1ZT1CZDt2ZT1QZCgpO0JkPSExO2ZvcihWPWQ7bnVsbCE9PVY7KXtlPSExO3ZhciBmPXZvaWQgMDt0cnl7VWgoKX1jYXRjaChoKXtlPSEwLGY9aH1lJiYobnVsbD09PVY/eChcIjE3OFwiKTp2b2lkIDAsc2goVixmKSxudWxsIT09ViYmKFY9Vi5uZXh0RWZmZWN0KSl9Zm9yKFY9ZDtudWxsIT09Vjspe2U9ITE7XG5mPXZvaWQgMDt0cnl7VGgoKX1jYXRjaChoKXtlPSEwLGY9aH1lJiYobnVsbD09PVY/eChcIjE3OFwiKTp2b2lkIDAsc2goVixmKSxudWxsIT09ViYmKFY9Vi5uZXh0RWZmZWN0KSl9UWQodmUpO3ZlPW51bGw7QmQ9ISF1ZTt1ZT1udWxsO2EuY3VycmVudD1iO2ZvcihWPWQ7bnVsbCE9PVY7KXtlPSExO2Y9dm9pZCAwO3RyeXtWaChhLGMpfWNhdGNoKGgpe2U9ITAsZj1ofWUmJihudWxsPT09Vj94KFwiMTc4XCIpOnZvaWQgMCxzaChWLGYpLG51bGwhPT1WJiYoVj1WLm5leHRFZmZlY3QpKX1pZihudWxsIT09ZCYmbnVsbCE9PVBoKXt2YXIgZz1XaC5iaW5kKG51bGwsYSxkKTtRaD1yLnVuc3RhYmxlX3J1bldpdGhQcmlvcml0eShyLnVuc3RhYmxlX05vcm1hbFByaW9yaXR5LGZ1bmN0aW9uKCl7cmV0dXJuIEFlKGcpfSk7Umg9Z31LaD1PaD0hMTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgUWUmJlFlKGIuc3RhdGVOb2RlKTtjPWIuZXhwaXJhdGlvblRpbWU7Yj1iLmNoaWxkRXhwaXJhdGlvblRpbWU7Yj1cbmI+Yz9iOmM7MD09PWImJihGaD1udWxsKTskaChhLGIpfVxuZnVuY3Rpb24gYWkoYSl7Zm9yKDs7KXt2YXIgYj1hLmFsdGVybmF0ZSxjPWEucmV0dXJuLGQ9YS5zaWJsaW5nO2lmKDA9PT0oYS5lZmZlY3RUYWcmMTAyNCkpe1Q9YTthOnt2YXIgZT1iO2I9YTt2YXIgZj1VO3ZhciBnPWIucGVuZGluZ1Byb3BzO3N3aXRjaChiLnRhZyl7Y2FzZSAyOmJyZWFrO2Nhc2UgMTY6YnJlYWs7Y2FzZSAxNTpjYXNlIDA6YnJlYWs7Y2FzZSAxOkooYi50eXBlKSYmS2UoYik7YnJlYWs7Y2FzZSAzOktmKGIpO0xlKGIpO2c9Yi5zdGF0ZU5vZGU7Zy5wZW5kaW5nQ29udGV4dCYmKGcuY29udGV4dD1nLnBlbmRpbmdDb250ZXh0LGcucGVuZGluZ0NvbnRleHQ9bnVsbCk7aWYobnVsbD09PWV8fG51bGw9PT1lLmNoaWxkKUVnKGIpLGIuZWZmZWN0VGFnJj0tMzttaChiKTticmVhaztjYXNlIDU6TWYoYik7dmFyIGg9SWYoSGYuY3VycmVudCk7Zj1iLnR5cGU7aWYobnVsbCE9PWUmJm51bGwhPWIuc3RhdGVOb2RlKW5oKGUsYixmLGcsaCksZS5yZWYhPT1iLnJlZiYmKGIuZWZmZWN0VGFnfD1cbjEyOCk7ZWxzZSBpZihnKXt2YXIgbD1JZihOLmN1cnJlbnQpO2lmKEVnKGIpKXtnPWI7ZT1nLnN0YXRlTm9kZTt2YXIgaz1nLnR5cGUsbT1nLm1lbW9pemVkUHJvcHMscD1oO2VbRmFdPWc7ZVtHYV09bTtmPXZvaWQgMDtoPWs7c3dpdGNoKGgpe2Nhc2UgXCJpZnJhbWVcIjpjYXNlIFwib2JqZWN0XCI6RShcImxvYWRcIixlKTticmVhaztjYXNlIFwidmlkZW9cIjpjYXNlIFwiYXVkaW9cIjpmb3Ioaz0wO2s8YWIubGVuZ3RoO2srKylFKGFiW2tdLGUpO2JyZWFrO2Nhc2UgXCJzb3VyY2VcIjpFKFwiZXJyb3JcIixlKTticmVhaztjYXNlIFwiaW1nXCI6Y2FzZSBcImltYWdlXCI6Y2FzZSBcImxpbmtcIjpFKFwiZXJyb3JcIixlKTtFKFwibG9hZFwiLGUpO2JyZWFrO2Nhc2UgXCJmb3JtXCI6RShcInJlc2V0XCIsZSk7RShcInN1Ym1pdFwiLGUpO2JyZWFrO2Nhc2UgXCJkZXRhaWxzXCI6RShcInRvZ2dsZVwiLGUpO2JyZWFrO2Nhc2UgXCJpbnB1dFwiOndjKGUsbSk7RShcImludmFsaWRcIixlKTtzZShwLFwib25DaGFuZ2VcIik7YnJlYWs7Y2FzZSBcInNlbGVjdFwiOmUuX3dyYXBwZXJTdGF0ZT1cbnt3YXNNdWx0aXBsZTohIW0ubXVsdGlwbGV9O0UoXCJpbnZhbGlkXCIsZSk7c2UocCxcIm9uQ2hhbmdlXCIpO2JyZWFrO2Nhc2UgXCJ0ZXh0YXJlYVwiOmNlKGUsbSksRShcImludmFsaWRcIixlKSxzZShwLFwib25DaGFuZ2VcIil9cWUoaCxtKTtrPW51bGw7Zm9yKGYgaW4gbSltLmhhc093blByb3BlcnR5KGYpJiYobD1tW2ZdLFwiY2hpbGRyZW5cIj09PWY/XCJzdHJpbmdcIj09PXR5cGVvZiBsP2UudGV4dENvbnRlbnQhPT1sJiYoaz1bXCJjaGlsZHJlblwiLGxdKTpcIm51bWJlclwiPT09dHlwZW9mIGwmJmUudGV4dENvbnRlbnQhPT1cIlwiK2wmJihrPVtcImNoaWxkcmVuXCIsXCJcIitsXSk6cmEuaGFzT3duUHJvcGVydHkoZikmJm51bGwhPWwmJnNlKHAsZikpO3N3aXRjaChoKXtjYXNlIFwiaW5wdXRcIjpSYihlKTtBYyhlLG0sITApO2JyZWFrO2Nhc2UgXCJ0ZXh0YXJlYVwiOlJiKGUpO2VlKGUsbSk7YnJlYWs7Y2FzZSBcInNlbGVjdFwiOmNhc2UgXCJvcHRpb25cIjpicmVhaztkZWZhdWx0OlwiZnVuY3Rpb25cIj09PXR5cGVvZiBtLm9uQ2xpY2smJlxuKGUub25jbGljaz10ZSl9Zj1rO2cudXBkYXRlUXVldWU9ZjtnPW51bGwhPT1mPyEwOiExO2cmJmtoKGIpfWVsc2V7bT1iO3A9ZjtlPWc7az05PT09aC5ub2RlVHlwZT9oOmgub3duZXJEb2N1bWVudDtsPT09ZmUuaHRtbCYmKGw9Z2UocCkpO2w9PT1mZS5odG1sP1wic2NyaXB0XCI9PT1wPyhlPWsuY3JlYXRlRWxlbWVudChcImRpdlwiKSxlLmlubmVySFRNTD1cIjxzY3JpcHQ+XFx4M2Mvc2NyaXB0PlwiLGs9ZS5yZW1vdmVDaGlsZChlLmZpcnN0Q2hpbGQpKTpcInN0cmluZ1wiPT09dHlwZW9mIGUuaXM/az1rLmNyZWF0ZUVsZW1lbnQocCx7aXM6ZS5pc30pOihrPWsuY3JlYXRlRWxlbWVudChwKSxcInNlbGVjdFwiPT09cCYmKHA9ayxlLm11bHRpcGxlP3AubXVsdGlwbGU9ITA6ZS5zaXplJiYocC5zaXplPWUuc2l6ZSkpKTprPWsuY3JlYXRlRWxlbWVudE5TKGwscCk7ZT1rO2VbRmFdPW07ZVtHYV09ZztsaChlLGIsITEsITEpO3A9ZTtrPWY7bT1nO3ZhciB0PWgsQT1yZShrLG0pO3N3aXRjaChrKXtjYXNlIFwiaWZyYW1lXCI6Y2FzZSBcIm9iamVjdFwiOkUoXCJsb2FkXCIsXG5wKTtoPW07YnJlYWs7Y2FzZSBcInZpZGVvXCI6Y2FzZSBcImF1ZGlvXCI6Zm9yKGg9MDtoPGFiLmxlbmd0aDtoKyspRShhYltoXSxwKTtoPW07YnJlYWs7Y2FzZSBcInNvdXJjZVwiOkUoXCJlcnJvclwiLHApO2g9bTticmVhaztjYXNlIFwiaW1nXCI6Y2FzZSBcImltYWdlXCI6Y2FzZSBcImxpbmtcIjpFKFwiZXJyb3JcIixwKTtFKFwibG9hZFwiLHApO2g9bTticmVhaztjYXNlIFwiZm9ybVwiOkUoXCJyZXNldFwiLHApO0UoXCJzdWJtaXRcIixwKTtoPW07YnJlYWs7Y2FzZSBcImRldGFpbHNcIjpFKFwidG9nZ2xlXCIscCk7aD1tO2JyZWFrO2Nhc2UgXCJpbnB1dFwiOndjKHAsbSk7aD12YyhwLG0pO0UoXCJpbnZhbGlkXCIscCk7c2UodCxcIm9uQ2hhbmdlXCIpO2JyZWFrO2Nhc2UgXCJvcHRpb25cIjpoPSRkKHAsbSk7YnJlYWs7Y2FzZSBcInNlbGVjdFwiOnAuX3dyYXBwZXJTdGF0ZT17d2FzTXVsdGlwbGU6ISFtLm11bHRpcGxlfTtoPW4oe30sbSx7dmFsdWU6dm9pZCAwfSk7RShcImludmFsaWRcIixwKTtzZSh0LFwib25DaGFuZ2VcIik7YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6Y2UocCxcbm0pO2g9YmUocCxtKTtFKFwiaW52YWxpZFwiLHApO3NlKHQsXCJvbkNoYW5nZVwiKTticmVhaztkZWZhdWx0Omg9bX1xZShrLGgpO2w9dm9pZCAwO3ZhciB2PWssUj1wLHU9aDtmb3IobCBpbiB1KWlmKHUuaGFzT3duUHJvcGVydHkobCkpe3ZhciBxPXVbbF07XCJzdHlsZVwiPT09bD9vZShSLHEpOlwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIj09PWw/KHE9cT9xLl9faHRtbDp2b2lkIDAsbnVsbCE9cSYmamUoUixxKSk6XCJjaGlsZHJlblwiPT09bD9cInN0cmluZ1wiPT09dHlwZW9mIHE/KFwidGV4dGFyZWFcIiE9PXZ8fFwiXCIhPT1xKSYma2UoUixxKTpcIm51bWJlclwiPT09dHlwZW9mIHEmJmtlKFIsXCJcIitxKTpcInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZ1wiIT09bCYmXCJzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmdcIiE9PWwmJlwiYXV0b0ZvY3VzXCIhPT1sJiYocmEuaGFzT3duUHJvcGVydHkobCk/bnVsbCE9cSYmc2UodCxsKTpudWxsIT1xJiZ0YyhSLGwscSxBKSl9c3dpdGNoKGspe2Nhc2UgXCJpbnB1dFwiOlJiKHApO1xuQWMocCxtLCExKTticmVhaztjYXNlIFwidGV4dGFyZWFcIjpSYihwKTtlZShwLG0pO2JyZWFrO2Nhc2UgXCJvcHRpb25cIjpudWxsIT1tLnZhbHVlJiZwLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsXCJcIit1YyhtLnZhbHVlKSk7YnJlYWs7Y2FzZSBcInNlbGVjdFwiOmg9cDtoLm11bHRpcGxlPSEhbS5tdWx0aXBsZTtwPW0udmFsdWU7bnVsbCE9cD9hZShoLCEhbS5tdWx0aXBsZSxwLCExKTpudWxsIT1tLmRlZmF1bHRWYWx1ZSYmYWUoaCwhIW0ubXVsdGlwbGUsbS5kZWZhdWx0VmFsdWUsITApO2JyZWFrO2RlZmF1bHQ6XCJmdW5jdGlvblwiPT09dHlwZW9mIGgub25DbGljayYmKHAub25jbGljaz10ZSl9KGc9d2UoZixnKSkmJmtoKGIpO2Iuc3RhdGVOb2RlPWV9bnVsbCE9PWIucmVmJiYoYi5lZmZlY3RUYWd8PTEyOCl9ZWxzZSBudWxsPT09Yi5zdGF0ZU5vZGU/eChcIjE2NlwiKTp2b2lkIDA7YnJlYWs7Y2FzZSA2OmUmJm51bGwhPWIuc3RhdGVOb2RlP29oKGUsYixlLm1lbW9pemVkUHJvcHMsZyk6KFwic3RyaW5nXCIhPT1cbnR5cGVvZiBnJiYobnVsbD09PWIuc3RhdGVOb2RlP3goXCIxNjZcIik6dm9pZCAwKSxlPUlmKEhmLmN1cnJlbnQpLElmKE4uY3VycmVudCksRWcoYik/KGc9YixmPWcuc3RhdGVOb2RlLGU9Zy5tZW1vaXplZFByb3BzLGZbRmFdPWcsKGc9Zi5ub2RlVmFsdWUhPT1lKSYma2goYikpOihmPWIsZz0oOT09PWUubm9kZVR5cGU/ZTplLm93bmVyRG9jdW1lbnQpLmNyZWF0ZVRleHROb2RlKGcpLGdbRmFdPWIsZi5zdGF0ZU5vZGU9ZykpO2JyZWFrO2Nhc2UgMTE6YnJlYWs7Y2FzZSAxMzpnPWIubWVtb2l6ZWRTdGF0ZTtpZigwIT09KGIuZWZmZWN0VGFnJjY0KSl7Yi5leHBpcmF0aW9uVGltZT1mO1Q9YjticmVhayBhfWc9bnVsbCE9PWc7Zj1udWxsIT09ZSYmbnVsbCE9PWUubWVtb2l6ZWRTdGF0ZTtudWxsIT09ZSYmIWcmJmYmJihlPWUuY2hpbGQuc2libGluZyxudWxsIT09ZSYmKGg9Yi5maXJzdEVmZmVjdCxudWxsIT09aD8oYi5maXJzdEVmZmVjdD1lLGUubmV4dEVmZmVjdD1oKTooYi5maXJzdEVmZmVjdD1cbmIubGFzdEVmZmVjdD1lLGUubmV4dEVmZmVjdD1udWxsKSxlLmVmZmVjdFRhZz04KSk7aWYoZ3x8ZiliLmVmZmVjdFRhZ3w9NDticmVhaztjYXNlIDc6YnJlYWs7Y2FzZSA4OmJyZWFrO2Nhc2UgMTI6YnJlYWs7Y2FzZSA0OktmKGIpO21oKGIpO2JyZWFrO2Nhc2UgMTA6WmcoYik7YnJlYWs7Y2FzZSA5OmJyZWFrO2Nhc2UgMTQ6YnJlYWs7Y2FzZSAxNzpKKGIudHlwZSkmJktlKGIpO2JyZWFrO2Nhc2UgMTg6YnJlYWs7ZGVmYXVsdDp4KFwiMTU2XCIpfVQ9bnVsbH1iPWE7aWYoMT09PVV8fDEhPT1iLmNoaWxkRXhwaXJhdGlvblRpbWUpe2c9MDtmb3IoZj1iLmNoaWxkO251bGwhPT1mOyllPWYuZXhwaXJhdGlvblRpbWUsaD1mLmNoaWxkRXhwaXJhdGlvblRpbWUsZT5nJiYoZz1lKSxoPmcmJihnPWgpLGY9Zi5zaWJsaW5nO2IuY2hpbGRFeHBpcmF0aW9uVGltZT1nfWlmKG51bGwhPT1UKXJldHVybiBUO251bGwhPT1jJiYwPT09KGMuZWZmZWN0VGFnJjEwMjQpJiYobnVsbD09PWMuZmlyc3RFZmZlY3QmJlxuKGMuZmlyc3RFZmZlY3Q9YS5maXJzdEVmZmVjdCksbnVsbCE9PWEubGFzdEVmZmVjdCYmKG51bGwhPT1jLmxhc3RFZmZlY3QmJihjLmxhc3RFZmZlY3QubmV4dEVmZmVjdD1hLmZpcnN0RWZmZWN0KSxjLmxhc3RFZmZlY3Q9YS5sYXN0RWZmZWN0KSwxPGEuZWZmZWN0VGFnJiYobnVsbCE9PWMubGFzdEVmZmVjdD9jLmxhc3RFZmZlY3QubmV4dEVmZmVjdD1hOmMuZmlyc3RFZmZlY3Q9YSxjLmxhc3RFZmZlY3Q9YSkpfWVsc2V7YT1HaChhLFUpO2lmKG51bGwhPT1hKXJldHVybiBhLmVmZmVjdFRhZyY9MTAyMyxhO251bGwhPT1jJiYoYy5maXJzdEVmZmVjdD1jLmxhc3RFZmZlY3Q9bnVsbCxjLmVmZmVjdFRhZ3w9MTAyNCl9aWYobnVsbCE9PWQpcmV0dXJuIGQ7aWYobnVsbCE9PWMpYT1jO2Vsc2UgYnJlYWt9cmV0dXJuIG51bGx9XG5mdW5jdGlvbiBiaShhKXt2YXIgYj1UZyhhLmFsdGVybmF0ZSxhLFUpO2EubWVtb2l6ZWRQcm9wcz1hLnBlbmRpbmdQcm9wcztudWxsPT09YiYmKGI9YWkoYSkpO0loLmN1cnJlbnQ9bnVsbDtyZXR1cm4gYn1cbmZ1bmN0aW9uIGNpKGEsYil7S2g/eChcIjI0M1wiKTp2b2lkIDA7b2YoKTtLaD0hMDt2YXIgYz1IaC5jdXJyZW50O0hoLmN1cnJlbnQ9a2c7dmFyIGQ9YS5uZXh0RXhwaXJhdGlvblRpbWVUb1dvcmtPbjtpZihkIT09VXx8YSE9PUxofHxudWxsPT09VClTaCgpLExoPWEsVT1kLFQ9WGUoTGguY3VycmVudCxudWxsLFUpLGEucGVuZGluZ0NvbW1pdEV4cGlyYXRpb25UaW1lPTA7dmFyIGU9ITE7ZG97dHJ5e2lmKGIpZm9yKDtudWxsIT09VCYmIWRpKCk7KVQ9YmkoVCk7ZWxzZSBmb3IoO251bGwhPT1UOylUPWJpKFQpfWNhdGNoKHUpe2lmKFlnPVhnPVdnPW51bGwsbGcoKSxudWxsPT09VCllPSEwLERoKHUpO2Vsc2V7bnVsbD09PVQ/eChcIjI3MVwiKTp2b2lkIDA7dmFyIGY9VCxnPWYucmV0dXJuO2lmKG51bGw9PT1nKWU9ITAsRGgodSk7ZWxzZXthOnt2YXIgaD1hLGw9ZyxrPWYsbT11O2c9VTtrLmVmZmVjdFRhZ3w9MTAyNDtrLmZpcnN0RWZmZWN0PWsubGFzdEVmZmVjdD1udWxsO2lmKG51bGwhPT1cbm0mJlwib2JqZWN0XCI9PT10eXBlb2YgbSYmXCJmdW5jdGlvblwiPT09dHlwZW9mIG0udGhlbil7dmFyIHA9bTttPWw7dmFyIHQ9LTEsQT0tMTtkb3tpZigxMz09PW0udGFnKXt2YXIgdj1tLmFsdGVybmF0ZTtpZihudWxsIT09diYmKHY9di5tZW1vaXplZFN0YXRlLG51bGwhPT12KSl7QT0xMCooMTA3Mzc0MTgyMi12LnRpbWVkT3V0QXQpO2JyZWFrfXY9bS5wZW5kaW5nUHJvcHMubWF4RHVyYXRpb247aWYoXCJudW1iZXJcIj09PXR5cGVvZiB2KWlmKDA+PXYpdD0wO2Vsc2UgaWYoLTE9PT10fHx2PHQpdD12fW09bS5yZXR1cm59d2hpbGUobnVsbCE9PW0pO209bDtkb3tpZih2PTEzPT09bS50YWcpdj12b2lkIDA9PT1tLm1lbW9pemVkUHJvcHMuZmFsbGJhY2s/ITE6bnVsbD09PW0ubWVtb2l6ZWRTdGF0ZTtpZih2KXtsPW0udXBkYXRlUXVldWU7bnVsbD09PWw/KGw9bmV3IFNldCxsLmFkZChwKSxtLnVwZGF0ZVF1ZXVlPWwpOmwuYWRkKHApO2lmKDA9PT0obS5tb2RlJjEpKXttLmVmZmVjdFRhZ3w9XG42NDtrLmVmZmVjdFRhZyY9LTE5NTc7MT09PWsudGFnJiYobnVsbD09PWsuYWx0ZXJuYXRlP2sudGFnPTE3OihnPW5mKDEwNzM3NDE4MjMpLGcudGFnPXNmLHBmKGssZykpKTtrLmV4cGlyYXRpb25UaW1lPTEwNzM3NDE4MjM7YnJlYWsgYX1rPWg7bD1nO3ZhciBSPWsucGluZ0NhY2hlO251bGw9PT1SPyhSPWsucGluZ0NhY2hlPW5ldyBCaCx2PW5ldyBTZXQsUi5zZXQocCx2KSk6KHY9Ui5nZXQocCksdm9pZCAwPT09diYmKHY9bmV3IFNldCxSLnNldChwLHYpKSk7di5oYXMobCl8fCh2LmFkZChsKSxrPWVpLmJpbmQobnVsbCxrLHAsbCkscC50aGVuKGssaykpOy0xPT09dD9oPTEwNzM3NDE4MjM6KC0xPT09QSYmKEE9MTAqKDEwNzM3NDE4MjItZ2YoaCxnKSktNUUzKSxoPUErdCk7MDw9aCYmTWg8aCYmKE1oPWgpO20uZWZmZWN0VGFnfD0yMDQ4O20uZXhwaXJhdGlvblRpbWU9ZzticmVhayBhfW09bS5yZXR1cm59d2hpbGUobnVsbCE9PW0pO209RXJyb3IoKGljKGsudHlwZSl8fFwiQSBSZWFjdCBjb21wb25lbnRcIikrXG5cIiBzdXNwZW5kZWQgd2hpbGUgcmVuZGVyaW5nLCBidXQgbm8gZmFsbGJhY2sgVUkgd2FzIHNwZWNpZmllZC5cXG5cXG5BZGQgYSA8U3VzcGVuc2UgZmFsbGJhY2s9Li4uPiBjb21wb25lbnQgaGlnaGVyIGluIHRoZSB0cmVlIHRvIHByb3ZpZGUgYSBsb2FkaW5nIGluZGljYXRvciBvciBwbGFjZWhvbGRlciB0byBkaXNwbGF5LlwiK2pjKGspKX1OaD0hMDttPWpoKG0sayk7aD1sO2Rve3N3aXRjaChoLnRhZyl7Y2FzZSAzOmguZWZmZWN0VGFnfD0yMDQ4O2guZXhwaXJhdGlvblRpbWU9ZztnPUNoKGgsbSxnKTtlaChoLGcpO2JyZWFrIGE7Y2FzZSAxOmlmKHQ9bSxBPWgudHlwZSxrPWguc3RhdGVOb2RlLDA9PT0oaC5lZmZlY3RUYWcmNjQpJiYoXCJmdW5jdGlvblwiPT09dHlwZW9mIEEuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yfHxudWxsIT09ayYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGsuY29tcG9uZW50RGlkQ2F0Y2gmJihudWxsPT09Rmh8fCFGaC5oYXMoaykpKSl7aC5lZmZlY3RUYWd8PTIwNDg7XG5oLmV4cGlyYXRpb25UaW1lPWc7Zz1FaChoLHQsZyk7ZWgoaCxnKTticmVhayBhfX1oPWgucmV0dXJufXdoaWxlKG51bGwhPT1oKX1UPWFpKGYpO2NvbnRpbnVlfX19YnJlYWt9d2hpbGUoMSk7S2g9ITE7SGguY3VycmVudD1jO1lnPVhnPVdnPW51bGw7bGcoKTtpZihlKUxoPW51bGwsYS5maW5pc2hlZFdvcms9bnVsbDtlbHNlIGlmKG51bGwhPT1UKWEuZmluaXNoZWRXb3JrPW51bGw7ZWxzZXtjPWEuY3VycmVudC5hbHRlcm5hdGU7bnVsbD09PWM/eChcIjI4MVwiKTp2b2lkIDA7TGg9bnVsbDtpZihOaCl7ZT1hLmxhdGVzdFBlbmRpbmdUaW1lO2Y9YS5sYXRlc3RTdXNwZW5kZWRUaW1lO2c9YS5sYXRlc3RQaW5nZWRUaW1lO2lmKDAhPT1lJiZlPGR8fDAhPT1mJiZmPGR8fDAhPT1nJiZnPGQpe2ZmKGEsZCk7ZmkoYSxjLGQsYS5leHBpcmF0aW9uVGltZSwtMSk7cmV0dXJufWlmKCFhLmRpZEVycm9yJiZiKXthLmRpZEVycm9yPSEwO2Q9YS5uZXh0RXhwaXJhdGlvblRpbWVUb1dvcmtPbj1kO1xuYj1hLmV4cGlyYXRpb25UaW1lPTEwNzM3NDE4MjM7ZmkoYSxjLGQsYiwtMSk7cmV0dXJufX1iJiYtMSE9PU1oPyhmZihhLGQpLGI9MTAqKDEwNzM3NDE4MjItZ2YoYSxkKSksYjxNaCYmKE1oPWIpLGI9MTAqKDEwNzM3NDE4MjItbGYoKSksYj1NaC1iLGZpKGEsYyxkLGEuZXhwaXJhdGlvblRpbWUsMD5iPzA6YikpOihhLnBlbmRpbmdDb21taXRFeHBpcmF0aW9uVGltZT1kLGEuZmluaXNoZWRXb3JrPWMpfX1cbmZ1bmN0aW9uIHNoKGEsYil7Zm9yKHZhciBjPWEucmV0dXJuO251bGwhPT1jOyl7c3dpdGNoKGMudGFnKXtjYXNlIDE6dmFyIGQ9Yy5zdGF0ZU5vZGU7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGMudHlwZS5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3J8fFwiZnVuY3Rpb25cIj09PXR5cGVvZiBkLmNvbXBvbmVudERpZENhdGNoJiYobnVsbD09PUZofHwhRmguaGFzKGQpKSl7YT1qaChiLGEpO2E9RWgoYyxhLDEwNzM3NDE4MjMpO3BmKGMsYSk7cWYoYywxMDczNzQxODIzKTtyZXR1cm59YnJlYWs7Y2FzZSAzOmE9amgoYixhKTthPUNoKGMsYSwxMDczNzQxODIzKTtwZihjLGEpO3FmKGMsMTA3Mzc0MTgyMyk7cmV0dXJufWM9Yy5yZXR1cm59Mz09PWEudGFnJiYoYz1qaChiLGEpLGM9Q2goYSxjLDEwNzM3NDE4MjMpLHBmKGEsYykscWYoYSwxMDczNzQxODIzKSl9XG5mdW5jdGlvbiBtZihhLGIpe3ZhciBjPXIudW5zdGFibGVfZ2V0Q3VycmVudFByaW9yaXR5TGV2ZWwoKSxkPXZvaWQgMDtpZigwPT09KGIubW9kZSYxKSlkPTEwNzM3NDE4MjM7ZWxzZSBpZihLaCYmIU9oKWQ9VTtlbHNle3N3aXRjaChjKXtjYXNlIHIudW5zdGFibGVfSW1tZWRpYXRlUHJpb3JpdHk6ZD0xMDczNzQxODIzO2JyZWFrO2Nhc2Ugci51bnN0YWJsZV9Vc2VyQmxvY2tpbmdQcmlvcml0eTpkPTEwNzM3NDE4MjItMTAqKCgoMTA3Mzc0MTgyMi1hKzE1KS8xMHwwKSsxKTticmVhaztjYXNlIHIudW5zdGFibGVfTm9ybWFsUHJpb3JpdHk6ZD0xMDczNzQxODIyLTI1KigoKDEwNzM3NDE4MjItYSs1MDApLzI1fDApKzEpO2JyZWFrO2Nhc2Ugci51bnN0YWJsZV9Mb3dQcmlvcml0eTpjYXNlIHIudW5zdGFibGVfSWRsZVByaW9yaXR5OmQ9MTticmVhaztkZWZhdWx0OngoXCIzMTNcIil9bnVsbCE9PUxoJiZkPT09VSYmLS1kfWM9PT1yLnVuc3RhYmxlX1VzZXJCbG9ja2luZ1ByaW9yaXR5JiZcbigwPT09Z2l8fGQ8Z2kpJiYoZ2k9ZCk7cmV0dXJuIGR9ZnVuY3Rpb24gZWkoYSxiLGMpe3ZhciBkPWEucGluZ0NhY2hlO251bGwhPT1kJiZkLmRlbGV0ZShiKTtpZihudWxsIT09TGgmJlU9PT1jKUxoPW51bGw7ZWxzZSBpZihiPWEuZWFybGllc3RTdXNwZW5kZWRUaW1lLGQ9YS5sYXRlc3RTdXNwZW5kZWRUaW1lLDAhPT1iJiZjPD1iJiZjPj1kKXthLmRpZEVycm9yPSExO2I9YS5sYXRlc3RQaW5nZWRUaW1lO2lmKDA9PT1ifHxiPmMpYS5sYXRlc3RQaW5nZWRUaW1lPWM7ZGYoYyxhKTtjPWEuZXhwaXJhdGlvblRpbWU7MCE9PWMmJlhoKGEsYyl9fWZ1bmN0aW9uIEFoKGEsYil7dmFyIGM9YS5zdGF0ZU5vZGU7bnVsbCE9PWMmJmMuZGVsZXRlKGIpO2I9bGYoKTtiPW1mKGIsYSk7YT1oaShhLGIpO251bGwhPT1hJiYoY2YoYSxiKSxiPWEuZXhwaXJhdGlvblRpbWUsMCE9PWImJlhoKGEsYikpfVxuZnVuY3Rpb24gaGkoYSxiKXthLmV4cGlyYXRpb25UaW1lPGImJihhLmV4cGlyYXRpb25UaW1lPWIpO3ZhciBjPWEuYWx0ZXJuYXRlO251bGwhPT1jJiZjLmV4cGlyYXRpb25UaW1lPGImJihjLmV4cGlyYXRpb25UaW1lPWIpO3ZhciBkPWEucmV0dXJuLGU9bnVsbDtpZihudWxsPT09ZCYmMz09PWEudGFnKWU9YS5zdGF0ZU5vZGU7ZWxzZSBmb3IoO251bGwhPT1kOyl7Yz1kLmFsdGVybmF0ZTtkLmNoaWxkRXhwaXJhdGlvblRpbWU8YiYmKGQuY2hpbGRFeHBpcmF0aW9uVGltZT1iKTtudWxsIT09YyYmYy5jaGlsZEV4cGlyYXRpb25UaW1lPGImJihjLmNoaWxkRXhwaXJhdGlvblRpbWU9Yik7aWYobnVsbD09PWQucmV0dXJuJiYzPT09ZC50YWcpe2U9ZC5zdGF0ZU5vZGU7YnJlYWt9ZD1kLnJldHVybn1yZXR1cm4gZX1cbmZ1bmN0aW9uIHFmKGEsYil7YT1oaShhLGIpO251bGwhPT1hJiYoIUtoJiYwIT09VSYmYj5VJiZTaCgpLGNmKGEsYiksS2gmJiFPaCYmTGg9PT1hfHxYaChhLGEuZXhwaXJhdGlvblRpbWUpLGlpPmppJiYoaWk9MCx4KFwiMTg1XCIpKSl9ZnVuY3Rpb24ga2koYSxiLGMsZCxlKXtyZXR1cm4gci51bnN0YWJsZV9ydW5XaXRoUHJpb3JpdHkoci51bnN0YWJsZV9JbW1lZGlhdGVQcmlvcml0eSxmdW5jdGlvbigpe3JldHVybiBhKGIsYyxkLGUpfSl9dmFyIGxpPW51bGwsWT1udWxsLG1pPTAsbmk9dm9pZCAwLFc9ITEsb2k9bnVsbCxaPTAsZ2k9MCxwaT0hMSxxaT1udWxsLFg9ITEscmk9ITEsc2k9bnVsbCx0aT1yLnVuc3RhYmxlX25vdygpLHVpPTEwNzM3NDE4MjItKHRpLzEwfDApLHZpPXVpLGppPTUwLGlpPTAsd2k9bnVsbDtmdW5jdGlvbiB4aSgpe3VpPTEwNzM3NDE4MjItKChyLnVuc3RhYmxlX25vdygpLXRpKS8xMHwwKX1cbmZ1bmN0aW9uIHlpKGEsYil7aWYoMCE9PW1pKXtpZihiPG1pKXJldHVybjtudWxsIT09bmkmJnIudW5zdGFibGVfY2FuY2VsQ2FsbGJhY2sobmkpfW1pPWI7YT1yLnVuc3RhYmxlX25vdygpLXRpO25pPXIudW5zdGFibGVfc2NoZWR1bGVDYWxsYmFjayh6aSx7dGltZW91dDoxMCooMTA3Mzc0MTgyMi1iKS1hfSl9ZnVuY3Rpb24gZmkoYSxiLGMsZCxlKXthLmV4cGlyYXRpb25UaW1lPWQ7MCE9PWV8fGRpKCk/MDxlJiYoYS50aW1lb3V0SGFuZGxlPXllKEFpLmJpbmQobnVsbCxhLGIsYyksZSkpOihhLnBlbmRpbmdDb21taXRFeHBpcmF0aW9uVGltZT1jLGEuZmluaXNoZWRXb3JrPWIpfWZ1bmN0aW9uIEFpKGEsYixjKXthLnBlbmRpbmdDb21taXRFeHBpcmF0aW9uVGltZT1jO2EuZmluaXNoZWRXb3JrPWI7eGkoKTt2aT11aTtCaShhLGMpfWZ1bmN0aW9uICRoKGEsYil7YS5leHBpcmF0aW9uVGltZT1iO2EuZmluaXNoZWRXb3JrPW51bGx9XG5mdW5jdGlvbiBsZigpe2lmKFcpcmV0dXJuIHZpO0NpKCk7aWYoMD09PVp8fDE9PT1aKXhpKCksdmk9dWk7cmV0dXJuIHZpfWZ1bmN0aW9uIFhoKGEsYil7bnVsbD09PWEubmV4dFNjaGVkdWxlZFJvb3Q/KGEuZXhwaXJhdGlvblRpbWU9YixudWxsPT09WT8obGk9WT1hLGEubmV4dFNjaGVkdWxlZFJvb3Q9YSk6KFk9WS5uZXh0U2NoZWR1bGVkUm9vdD1hLFkubmV4dFNjaGVkdWxlZFJvb3Q9bGkpKTpiPmEuZXhwaXJhdGlvblRpbWUmJihhLmV4cGlyYXRpb25UaW1lPWIpO1d8fChYP3JpJiYob2k9YSxaPTEwNzM3NDE4MjMsRGkoYSwxMDczNzQxODIzLCExKSk6MTA3Mzc0MTgyMz09PWI/WWgoMTA3Mzc0MTgyMywhMSk6eWkoYSxiKSl9XG5mdW5jdGlvbiBDaSgpe3ZhciBhPTAsYj1udWxsO2lmKG51bGwhPT1ZKWZvcih2YXIgYz1ZLGQ9bGk7bnVsbCE9PWQ7KXt2YXIgZT1kLmV4cGlyYXRpb25UaW1lO2lmKDA9PT1lKXtudWxsPT09Y3x8bnVsbD09PVk/eChcIjI0NFwiKTp2b2lkIDA7aWYoZD09PWQubmV4dFNjaGVkdWxlZFJvb3Qpe2xpPVk9ZC5uZXh0U2NoZWR1bGVkUm9vdD1udWxsO2JyZWFrfWVsc2UgaWYoZD09PWxpKWxpPWU9ZC5uZXh0U2NoZWR1bGVkUm9vdCxZLm5leHRTY2hlZHVsZWRSb290PWUsZC5uZXh0U2NoZWR1bGVkUm9vdD1udWxsO2Vsc2UgaWYoZD09PVkpe1k9YztZLm5leHRTY2hlZHVsZWRSb290PWxpO2QubmV4dFNjaGVkdWxlZFJvb3Q9bnVsbDticmVha31lbHNlIGMubmV4dFNjaGVkdWxlZFJvb3Q9ZC5uZXh0U2NoZWR1bGVkUm9vdCxkLm5leHRTY2hlZHVsZWRSb290PW51bGw7ZD1jLm5leHRTY2hlZHVsZWRSb290fWVsc2V7ZT5hJiYoYT1lLGI9ZCk7aWYoZD09PVkpYnJlYWs7aWYoMTA3Mzc0MTgyMz09PVxuYSlicmVhaztjPWQ7ZD1kLm5leHRTY2hlZHVsZWRSb290fX1vaT1iO1o9YX12YXIgRWk9ITE7ZnVuY3Rpb24gZGkoKXtyZXR1cm4gRWk/ITA6ci51bnN0YWJsZV9zaG91bGRZaWVsZCgpP0VpPSEwOiExfWZ1bmN0aW9uIHppKCl7dHJ5e2lmKCFkaSgpJiZudWxsIT09bGkpe3hpKCk7dmFyIGE9bGk7ZG97dmFyIGI9YS5leHBpcmF0aW9uVGltZTswIT09YiYmdWk8PWImJihhLm5leHRFeHBpcmF0aW9uVGltZVRvV29ya09uPXVpKTthPWEubmV4dFNjaGVkdWxlZFJvb3R9d2hpbGUoYSE9PWxpKX1ZaCgwLCEwKX1maW5hbGx5e0VpPSExfX1cbmZ1bmN0aW9uIFloKGEsYil7Q2koKTtpZihiKWZvcih4aSgpLHZpPXVpO251bGwhPT1vaSYmMCE9PVomJmE8PVomJiEoRWkmJnVpPlopOylEaShvaSxaLHVpPlopLENpKCkseGkoKSx2aT11aTtlbHNlIGZvcig7bnVsbCE9PW9pJiYwIT09WiYmYTw9WjspRGkob2ksWiwhMSksQ2koKTtiJiYobWk9MCxuaT1udWxsKTswIT09WiYmeWkob2ksWik7aWk9MDt3aT1udWxsO2lmKG51bGwhPT1zaSlmb3IoYT1zaSxzaT1udWxsLGI9MDtiPGEubGVuZ3RoO2IrKyl7dmFyIGM9YVtiXTt0cnl7Yy5fb25Db21wbGV0ZSgpfWNhdGNoKGQpe3BpfHwocGk9ITAscWk9ZCl9fWlmKHBpKXRocm93IGE9cWkscWk9bnVsbCxwaT0hMSxhO31mdW5jdGlvbiBCaShhLGIpe1c/eChcIjI1M1wiKTp2b2lkIDA7b2k9YTtaPWI7RGkoYSxiLCExKTtZaCgxMDczNzQxODIzLCExKX1cbmZ1bmN0aW9uIERpKGEsYixjKXtXP3goXCIyNDVcIik6dm9pZCAwO1c9ITA7aWYoYyl7dmFyIGQ9YS5maW5pc2hlZFdvcms7bnVsbCE9PWQ/RmkoYSxkLGIpOihhLmZpbmlzaGVkV29yaz1udWxsLGQ9YS50aW1lb3V0SGFuZGxlLC0xIT09ZCYmKGEudGltZW91dEhhbmRsZT0tMSx6ZShkKSksY2koYSxjKSxkPWEuZmluaXNoZWRXb3JrLG51bGwhPT1kJiYoZGkoKT9hLmZpbmlzaGVkV29yaz1kOkZpKGEsZCxiKSkpfWVsc2UgZD1hLmZpbmlzaGVkV29yayxudWxsIT09ZD9GaShhLGQsYik6KGEuZmluaXNoZWRXb3JrPW51bGwsZD1hLnRpbWVvdXRIYW5kbGUsLTEhPT1kJiYoYS50aW1lb3V0SGFuZGxlPS0xLHplKGQpKSxjaShhLGMpLGQ9YS5maW5pc2hlZFdvcmssbnVsbCE9PWQmJkZpKGEsZCxiKSk7Vz0hMX1cbmZ1bmN0aW9uIEZpKGEsYixjKXt2YXIgZD1hLmZpcnN0QmF0Y2g7aWYobnVsbCE9PWQmJmQuX2V4cGlyYXRpb25UaW1lPj1jJiYobnVsbD09PXNpP3NpPVtkXTpzaS5wdXNoKGQpLGQuX2RlZmVyKSl7YS5maW5pc2hlZFdvcms9YjthLmV4cGlyYXRpb25UaW1lPTA7cmV0dXJufWEuZmluaXNoZWRXb3JrPW51bGw7YT09PXdpP2lpKys6KHdpPWEsaWk9MCk7ci51bnN0YWJsZV9ydW5XaXRoUHJpb3JpdHkoci51bnN0YWJsZV9JbW1lZGlhdGVQcmlvcml0eSxmdW5jdGlvbigpe1poKGEsYil9KX1mdW5jdGlvbiBEaChhKXtudWxsPT09b2k/eChcIjI0NlwiKTp2b2lkIDA7b2kuZXhwaXJhdGlvblRpbWU9MDtwaXx8KHBpPSEwLHFpPWEpfWZ1bmN0aW9uIEdpKGEsYil7dmFyIGM9WDtYPSEwO3RyeXtyZXR1cm4gYShiKX1maW5hbGx5eyhYPWMpfHxXfHxZaCgxMDczNzQxODIzLCExKX19XG5mdW5jdGlvbiBIaShhLGIpe2lmKFgmJiFyaSl7cmk9ITA7dHJ5e3JldHVybiBhKGIpfWZpbmFsbHl7cmk9ITF9fXJldHVybiBhKGIpfWZ1bmN0aW9uIElpKGEsYixjKXtYfHxXfHwwPT09Z2l8fChZaChnaSwhMSksZ2k9MCk7dmFyIGQ9WDtYPSEwO3RyeXtyZXR1cm4gci51bnN0YWJsZV9ydW5XaXRoUHJpb3JpdHkoci51bnN0YWJsZV9Vc2VyQmxvY2tpbmdQcmlvcml0eSxmdW5jdGlvbigpe3JldHVybiBhKGIsYyl9KX1maW5hbGx5eyhYPWQpfHxXfHxZaCgxMDczNzQxODIzLCExKX19XG5mdW5jdGlvbiBKaShhLGIsYyxkLGUpe3ZhciBmPWIuY3VycmVudDthOmlmKGMpe2M9Yy5fcmVhY3RJbnRlcm5hbEZpYmVyO2I6ezI9PT1lZChjKSYmMT09PWMudGFnP3ZvaWQgMDp4KFwiMTcwXCIpO3ZhciBnPWM7ZG97c3dpdGNoKGcudGFnKXtjYXNlIDM6Zz1nLnN0YXRlTm9kZS5jb250ZXh0O2JyZWFrIGI7Y2FzZSAxOmlmKEooZy50eXBlKSl7Zz1nLnN0YXRlTm9kZS5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZE1lcmdlZENoaWxkQ29udGV4dDticmVhayBifX1nPWcucmV0dXJufXdoaWxlKG51bGwhPT1nKTt4KFwiMTcxXCIpO2c9dm9pZCAwfWlmKDE9PT1jLnRhZyl7dmFyIGg9Yy50eXBlO2lmKEooaCkpe2M9TmUoYyxoLGcpO2JyZWFrIGF9fWM9Z31lbHNlIGM9SGU7bnVsbD09PWIuY29udGV4dD9iLmNvbnRleHQ9YzpiLnBlbmRpbmdDb250ZXh0PWM7Yj1lO2U9bmYoZCk7ZS5wYXlsb2FkPXtlbGVtZW50OmF9O2I9dm9pZCAwPT09Yj9udWxsOmI7bnVsbCE9PWImJihlLmNhbGxiYWNrPWIpO1xub2YoKTtwZihmLGUpO3FmKGYsZCk7cmV0dXJuIGR9ZnVuY3Rpb24gS2koYSxiLGMsZCl7dmFyIGU9Yi5jdXJyZW50LGY9bGYoKTtlPW1mKGYsZSk7cmV0dXJuIEppKGEsYixjLGUsZCl9ZnVuY3Rpb24gTGkoYSl7YT1hLmN1cnJlbnQ7aWYoIWEuY2hpbGQpcmV0dXJuIG51bGw7c3dpdGNoKGEuY2hpbGQudGFnKXtjYXNlIDU6cmV0dXJuIGEuY2hpbGQuc3RhdGVOb2RlO2RlZmF1bHQ6cmV0dXJuIGEuY2hpbGQuc3RhdGVOb2RlfX1mdW5jdGlvbiBNaShhLGIsYyl7dmFyIGQ9Mzxhcmd1bWVudHMubGVuZ3RoJiZ2b2lkIDAhPT1hcmd1bWVudHNbM10/YXJndW1lbnRzWzNdOm51bGw7cmV0dXJueyQkdHlwZW9mOldiLGtleTpudWxsPT1kP251bGw6XCJcIitkLGNoaWxkcmVuOmEsY29udGFpbmVySW5mbzpiLGltcGxlbWVudGF0aW9uOmN9fVxuQWI9ZnVuY3Rpb24oYSxiLGMpe3N3aXRjaChiKXtjYXNlIFwiaW5wdXRcIjp5YyhhLGMpO2I9Yy5uYW1lO2lmKFwicmFkaW9cIj09PWMudHlwZSYmbnVsbCE9Yil7Zm9yKGM9YTtjLnBhcmVudE5vZGU7KWM9Yy5wYXJlbnROb2RlO2M9Yy5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbbmFtZT1cIitKU09OLnN0cmluZ2lmeShcIlwiK2IpKyddW3R5cGU9XCJyYWRpb1wiXScpO2ZvcihiPTA7YjxjLmxlbmd0aDtiKyspe3ZhciBkPWNbYl07aWYoZCE9PWEmJmQuZm9ybT09PWEuZm9ybSl7dmFyIGU9S2EoZCk7ZT92b2lkIDA6eChcIjkwXCIpO1NiKGQpO3ljKGQsZSl9fX1icmVhaztjYXNlIFwidGV4dGFyZWFcIjpkZShhLGMpO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjpiPWMudmFsdWUsbnVsbCE9YiYmYWUoYSwhIWMubXVsdGlwbGUsYiwhMSl9fTtcbmZ1bmN0aW9uIE5pKGEpe3ZhciBiPTEwNzM3NDE4MjItMjUqKCgoMTA3Mzc0MTgyMi1sZigpKzUwMCkvMjV8MCkrMSk7Yj49SmgmJihiPUpoLTEpO3RoaXMuX2V4cGlyYXRpb25UaW1lPUpoPWI7dGhpcy5fcm9vdD1hO3RoaXMuX2NhbGxiYWNrcz10aGlzLl9uZXh0PW51bGw7dGhpcy5faGFzQ2hpbGRyZW49dGhpcy5fZGlkQ29tcGxldGU9ITE7dGhpcy5fY2hpbGRyZW49bnVsbDt0aGlzLl9kZWZlcj0hMH1OaS5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKGEpe3RoaXMuX2RlZmVyP3ZvaWQgMDp4KFwiMjUwXCIpO3RoaXMuX2hhc0NoaWxkcmVuPSEwO3RoaXMuX2NoaWxkcmVuPWE7dmFyIGI9dGhpcy5fcm9vdC5faW50ZXJuYWxSb290LGM9dGhpcy5fZXhwaXJhdGlvblRpbWUsZD1uZXcgT2k7SmkoYSxiLG51bGwsYyxkLl9vbkNvbW1pdCk7cmV0dXJuIGR9O1xuTmkucHJvdG90eXBlLnRoZW49ZnVuY3Rpb24oYSl7aWYodGhpcy5fZGlkQ29tcGxldGUpYSgpO2Vsc2V7dmFyIGI9dGhpcy5fY2FsbGJhY2tzO251bGw9PT1iJiYoYj10aGlzLl9jYWxsYmFja3M9W10pO2IucHVzaChhKX19O1xuTmkucHJvdG90eXBlLmNvbW1pdD1mdW5jdGlvbigpe3ZhciBhPXRoaXMuX3Jvb3QuX2ludGVybmFsUm9vdCxiPWEuZmlyc3RCYXRjaDt0aGlzLl9kZWZlciYmbnVsbCE9PWI/dm9pZCAwOngoXCIyNTFcIik7aWYodGhpcy5faGFzQ2hpbGRyZW4pe3ZhciBjPXRoaXMuX2V4cGlyYXRpb25UaW1lO2lmKGIhPT10aGlzKXt0aGlzLl9oYXNDaGlsZHJlbiYmKGM9dGhpcy5fZXhwaXJhdGlvblRpbWU9Yi5fZXhwaXJhdGlvblRpbWUsdGhpcy5yZW5kZXIodGhpcy5fY2hpbGRyZW4pKTtmb3IodmFyIGQ9bnVsbCxlPWI7ZSE9PXRoaXM7KWQ9ZSxlPWUuX25leHQ7bnVsbD09PWQ/eChcIjI1MVwiKTp2b2lkIDA7ZC5fbmV4dD1lLl9uZXh0O3RoaXMuX25leHQ9YjthLmZpcnN0QmF0Y2g9dGhpc310aGlzLl9kZWZlcj0hMTtCaShhLGMpO2I9dGhpcy5fbmV4dDt0aGlzLl9uZXh0PW51bGw7Yj1hLmZpcnN0QmF0Y2g9YjtudWxsIT09YiYmYi5faGFzQ2hpbGRyZW4mJmIucmVuZGVyKGIuX2NoaWxkcmVuKX1lbHNlIHRoaXMuX25leHQ9XG5udWxsLHRoaXMuX2RlZmVyPSExfTtOaS5wcm90b3R5cGUuX29uQ29tcGxldGU9ZnVuY3Rpb24oKXtpZighdGhpcy5fZGlkQ29tcGxldGUpe3RoaXMuX2RpZENvbXBsZXRlPSEwO3ZhciBhPXRoaXMuX2NhbGxiYWNrcztpZihudWxsIT09YSlmb3IodmFyIGI9MDtiPGEubGVuZ3RoO2IrKykoMCxhW2JdKSgpfX07ZnVuY3Rpb24gT2koKXt0aGlzLl9jYWxsYmFja3M9bnVsbDt0aGlzLl9kaWRDb21taXQ9ITE7dGhpcy5fb25Db21taXQ9dGhpcy5fb25Db21taXQuYmluZCh0aGlzKX1PaS5wcm90b3R5cGUudGhlbj1mdW5jdGlvbihhKXtpZih0aGlzLl9kaWRDb21taXQpYSgpO2Vsc2V7dmFyIGI9dGhpcy5fY2FsbGJhY2tzO251bGw9PT1iJiYoYj10aGlzLl9jYWxsYmFja3M9W10pO2IucHVzaChhKX19O1xuT2kucHJvdG90eXBlLl9vbkNvbW1pdD1mdW5jdGlvbigpe2lmKCF0aGlzLl9kaWRDb21taXQpe3RoaXMuX2RpZENvbW1pdD0hMDt2YXIgYT10aGlzLl9jYWxsYmFja3M7aWYobnVsbCE9PWEpZm9yKHZhciBiPTA7YjxhLmxlbmd0aDtiKyspe3ZhciBjPWFbYl07XCJmdW5jdGlvblwiIT09dHlwZW9mIGM/eChcIjE5MVwiLGMpOnZvaWQgMDtjKCl9fX07XG5mdW5jdGlvbiBQaShhLGIsYyl7Yj1LKDMsbnVsbCxudWxsLGI/MzowKTthPXtjdXJyZW50OmIsY29udGFpbmVySW5mbzphLHBlbmRpbmdDaGlsZHJlbjpudWxsLHBpbmdDYWNoZTpudWxsLGVhcmxpZXN0UGVuZGluZ1RpbWU6MCxsYXRlc3RQZW5kaW5nVGltZTowLGVhcmxpZXN0U3VzcGVuZGVkVGltZTowLGxhdGVzdFN1c3BlbmRlZFRpbWU6MCxsYXRlc3RQaW5nZWRUaW1lOjAsZGlkRXJyb3I6ITEscGVuZGluZ0NvbW1pdEV4cGlyYXRpb25UaW1lOjAsZmluaXNoZWRXb3JrOm51bGwsdGltZW91dEhhbmRsZTotMSxjb250ZXh0Om51bGwscGVuZGluZ0NvbnRleHQ6bnVsbCxoeWRyYXRlOmMsbmV4dEV4cGlyYXRpb25UaW1lVG9Xb3JrT246MCxleHBpcmF0aW9uVGltZTowLGZpcnN0QmF0Y2g6bnVsbCxuZXh0U2NoZWR1bGVkUm9vdDpudWxsfTt0aGlzLl9pbnRlcm5hbFJvb3Q9Yi5zdGF0ZU5vZGU9YX1cblBpLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLl9pbnRlcm5hbFJvb3QsZD1uZXcgT2k7Yj12b2lkIDA9PT1iP251bGw6YjtudWxsIT09YiYmZC50aGVuKGIpO0tpKGEsYyxudWxsLGQuX29uQ29tbWl0KTtyZXR1cm4gZH07UGkucHJvdG90eXBlLnVubW91bnQ9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5faW50ZXJuYWxSb290LGM9bmV3IE9pO2E9dm9pZCAwPT09YT9udWxsOmE7bnVsbCE9PWEmJmMudGhlbihhKTtLaShudWxsLGIsbnVsbCxjLl9vbkNvbW1pdCk7cmV0dXJuIGN9O1BpLnByb3RvdHlwZS5sZWdhY3lfcmVuZGVyU3VidHJlZUludG9Db250YWluZXI9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPXRoaXMuX2ludGVybmFsUm9vdCxlPW5ldyBPaTtjPXZvaWQgMD09PWM/bnVsbDpjO251bGwhPT1jJiZlLnRoZW4oYyk7S2koYixkLGEsZS5fb25Db21taXQpO3JldHVybiBlfTtcblBpLnByb3RvdHlwZS5jcmVhdGVCYXRjaD1mdW5jdGlvbigpe3ZhciBhPW5ldyBOaSh0aGlzKSxiPWEuX2V4cGlyYXRpb25UaW1lLGM9dGhpcy5faW50ZXJuYWxSb290LGQ9Yy5maXJzdEJhdGNoO2lmKG51bGw9PT1kKWMuZmlyc3RCYXRjaD1hLGEuX25leHQ9bnVsbDtlbHNle2ZvcihjPW51bGw7bnVsbCE9PWQmJmQuX2V4cGlyYXRpb25UaW1lPj1iOyljPWQsZD1kLl9uZXh0O2EuX25leHQ9ZDtudWxsIT09YyYmKGMuX25leHQ9YSl9cmV0dXJuIGF9O2Z1bmN0aW9uIFFpKGEpe3JldHVybiEoIWF8fDEhPT1hLm5vZGVUeXBlJiY5IT09YS5ub2RlVHlwZSYmMTEhPT1hLm5vZGVUeXBlJiYoOCE9PWEubm9kZVR5cGV8fFwiIHJlYWN0LW1vdW50LXBvaW50LXVuc3RhYmxlIFwiIT09YS5ub2RlVmFsdWUpKX1HYj1HaTtIYj1JaTtJYj1mdW5jdGlvbigpe1d8fDA9PT1naXx8KFloKGdpLCExKSxnaT0wKX07XG5mdW5jdGlvbiBSaShhLGIpe2J8fChiPWE/OT09PWEubm9kZVR5cGU/YS5kb2N1bWVudEVsZW1lbnQ6YS5maXJzdENoaWxkOm51bGwsYj0hKCFifHwxIT09Yi5ub2RlVHlwZXx8IWIuaGFzQXR0cmlidXRlKFwiZGF0YS1yZWFjdHJvb3RcIikpKTtpZighYilmb3IodmFyIGM7Yz1hLmxhc3RDaGlsZDspYS5yZW1vdmVDaGlsZChjKTtyZXR1cm4gbmV3IFBpKGEsITEsYil9XG5mdW5jdGlvbiBTaShhLGIsYyxkLGUpe3ZhciBmPWMuX3JlYWN0Um9vdENvbnRhaW5lcjtpZihmKXtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZSl7dmFyIGc9ZTtlPWZ1bmN0aW9uKCl7dmFyIGE9TGkoZi5faW50ZXJuYWxSb290KTtnLmNhbGwoYSl9fW51bGwhPWE/Zi5sZWdhY3lfcmVuZGVyU3VidHJlZUludG9Db250YWluZXIoYSxiLGUpOmYucmVuZGVyKGIsZSl9ZWxzZXtmPWMuX3JlYWN0Um9vdENvbnRhaW5lcj1SaShjLGQpO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBlKXt2YXIgaD1lO2U9ZnVuY3Rpb24oKXt2YXIgYT1MaShmLl9pbnRlcm5hbFJvb3QpO2guY2FsbChhKX19SGkoZnVuY3Rpb24oKXtudWxsIT1hP2YubGVnYWN5X3JlbmRlclN1YnRyZWVJbnRvQ29udGFpbmVyKGEsYixlKTpmLnJlbmRlcihiLGUpfSl9cmV0dXJuIExpKGYuX2ludGVybmFsUm9vdCl9XG5mdW5jdGlvbiBUaShhLGIpe3ZhciBjPTI8YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09YXJndW1lbnRzWzJdP2FyZ3VtZW50c1syXTpudWxsO1FpKGIpP3ZvaWQgMDp4KFwiMjAwXCIpO3JldHVybiBNaShhLGIsbnVsbCxjKX1cbnZhciBWaT17Y3JlYXRlUG9ydGFsOlRpLGZpbmRET01Ob2RlOmZ1bmN0aW9uKGEpe2lmKG51bGw9PWEpcmV0dXJuIG51bGw7aWYoMT09PWEubm9kZVR5cGUpcmV0dXJuIGE7dmFyIGI9YS5fcmVhY3RJbnRlcm5hbEZpYmVyO3ZvaWQgMD09PWImJihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYS5yZW5kZXI/eChcIjE4OFwiKTp4KFwiMjY4XCIsT2JqZWN0LmtleXMoYSkpKTthPWhkKGIpO2E9bnVsbD09PWE/bnVsbDphLnN0YXRlTm9kZTtyZXR1cm4gYX0saHlkcmF0ZTpmdW5jdGlvbihhLGIsYyl7UWkoYik/dm9pZCAwOngoXCIyMDBcIik7cmV0dXJuIFNpKG51bGwsYSxiLCEwLGMpfSxyZW5kZXI6ZnVuY3Rpb24oYSxiLGMpe1FpKGIpP3ZvaWQgMDp4KFwiMjAwXCIpO3JldHVybiBTaShudWxsLGEsYiwhMSxjKX0sdW5zdGFibGVfcmVuZGVyU3VidHJlZUludG9Db250YWluZXI6ZnVuY3Rpb24oYSxiLGMsZCl7UWkoYyk/dm9pZCAwOngoXCIyMDBcIik7bnVsbD09YXx8dm9pZCAwPT09YS5fcmVhY3RJbnRlcm5hbEZpYmVyP1xueChcIjM4XCIpOnZvaWQgMDtyZXR1cm4gU2koYSxiLGMsITEsZCl9LHVubW91bnRDb21wb25lbnRBdE5vZGU6ZnVuY3Rpb24oYSl7UWkoYSk/dm9pZCAwOngoXCI0MFwiKTtyZXR1cm4gYS5fcmVhY3RSb290Q29udGFpbmVyPyhIaShmdW5jdGlvbigpe1NpKG51bGwsbnVsbCxhLCExLGZ1bmN0aW9uKCl7YS5fcmVhY3RSb290Q29udGFpbmVyPW51bGx9KX0pLCEwKTohMX0sdW5zdGFibGVfY3JlYXRlUG9ydGFsOmZ1bmN0aW9uKCl7cmV0dXJuIFRpLmFwcGx5KHZvaWQgMCxhcmd1bWVudHMpfSx1bnN0YWJsZV9iYXRjaGVkVXBkYXRlczpHaSx1bnN0YWJsZV9pbnRlcmFjdGl2ZVVwZGF0ZXM6SWksZmx1c2hTeW5jOmZ1bmN0aW9uKGEsYil7Vz94KFwiMTg3XCIpOnZvaWQgMDt2YXIgYz1YO1g9ITA7dHJ5e3JldHVybiBraShhLGIpfWZpbmFsbHl7WD1jLFloKDEwNzM3NDE4MjMsITEpfX0sdW5zdGFibGVfY3JlYXRlUm9vdDpVaSx1bnN0YWJsZV9mbHVzaENvbnRyb2xsZWQ6ZnVuY3Rpb24oYSl7dmFyIGI9XG5YO1g9ITA7dHJ5e2tpKGEpfWZpbmFsbHl7KFg9Yil8fFd8fFloKDEwNzM3NDE4MjMsITEpfX0sX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ6e0V2ZW50czpbSWEsSmEsS2EsQmEuaW5qZWN0RXZlbnRQbHVnaW5zQnlOYW1lLHBhLFFhLGZ1bmN0aW9uKGEpe3lhKGEsUGEpfSxFYixGYixEZCxEYV19fTtmdW5jdGlvbiBVaShhLGIpe1FpKGEpP3ZvaWQgMDp4KFwiMjk5XCIsXCJ1bnN0YWJsZV9jcmVhdGVSb290XCIpO3JldHVybiBuZXcgUGkoYSwhMCxudWxsIT1iJiYhMD09PWIuaHlkcmF0ZSl9XG4oZnVuY3Rpb24oYSl7dmFyIGI9YS5maW5kRmliZXJCeUhvc3RJbnN0YW5jZTtyZXR1cm4gVGUobih7fSxhLHtvdmVycmlkZVByb3BzOm51bGwsY3VycmVudERpc3BhdGNoZXJSZWY6VGIuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcixmaW5kSG9zdEluc3RhbmNlQnlGaWJlcjpmdW5jdGlvbihhKXthPWhkKGEpO3JldHVybiBudWxsPT09YT9udWxsOmEuc3RhdGVOb2RlfSxmaW5kRmliZXJCeUhvc3RJbnN0YW5jZTpmdW5jdGlvbihhKXtyZXR1cm4gYj9iKGEpOm51bGx9fSkpfSkoe2ZpbmRGaWJlckJ5SG9zdEluc3RhbmNlOkhhLGJ1bmRsZVR5cGU6MCx2ZXJzaW9uOlwiMTYuOC42XCIscmVuZGVyZXJQYWNrYWdlTmFtZTpcInJlYWN0LWRvbVwifSk7dmFyIFdpPXtkZWZhdWx0OlZpfSxYaT1XaSYmVml8fFdpO21vZHVsZS5leHBvcnRzPVhpLmRlZmF1bHR8fFhpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3NjaGVkdWxlci5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9zY2hlZHVsZXIuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MC4xMy42XG4gKiBzY2hlZHVsZXIucHJvZHVjdGlvbi5taW4uanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGQ9bnVsbCxlPSExLGc9MyxrPS0xLGw9LTEsbT0hMSxuPSExO2Z1bmN0aW9uIHAoKXtpZighbSl7dmFyIGE9ZC5leHBpcmF0aW9uVGltZTtuP3EoKTpuPSEwO3IodCxhKX19XG5mdW5jdGlvbiB1KCl7dmFyIGE9ZCxiPWQubmV4dDtpZihkPT09YilkPW51bGw7ZWxzZXt2YXIgYz1kLnByZXZpb3VzO2Q9Yy5uZXh0PWI7Yi5wcmV2aW91cz1jfWEubmV4dD1hLnByZXZpb3VzPW51bGw7Yz1hLmNhbGxiYWNrO2I9YS5leHBpcmF0aW9uVGltZTthPWEucHJpb3JpdHlMZXZlbDt2YXIgZj1nLFE9bDtnPWE7bD1iO3RyeXt2YXIgaD1jKCl9ZmluYWxseXtnPWYsbD1RfWlmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBoKWlmKGg9e2NhbGxiYWNrOmgscHJpb3JpdHlMZXZlbDphLGV4cGlyYXRpb25UaW1lOmIsbmV4dDpudWxsLHByZXZpb3VzOm51bGx9LG51bGw9PT1kKWQ9aC5uZXh0PWgucHJldmlvdXM9aDtlbHNle2M9bnVsbDthPWQ7ZG97aWYoYS5leHBpcmF0aW9uVGltZT49Yil7Yz1hO2JyZWFrfWE9YS5uZXh0fXdoaWxlKGEhPT1kKTtudWxsPT09Yz9jPWQ6Yz09PWQmJihkPWgscCgpKTtiPWMucHJldmlvdXM7Yi5uZXh0PWMucHJldmlvdXM9aDtoLm5leHQ9YztoLnByZXZpb3VzPVxuYn19ZnVuY3Rpb24gdigpe2lmKC0xPT09ayYmbnVsbCE9PWQmJjE9PT1kLnByaW9yaXR5TGV2ZWwpe209ITA7dHJ5e2RvIHUoKTt3aGlsZShudWxsIT09ZCYmMT09PWQucHJpb3JpdHlMZXZlbCl9ZmluYWxseXttPSExLG51bGwhPT1kP3AoKTpuPSExfX19ZnVuY3Rpb24gdChhKXttPSEwO3ZhciBiPWU7ZT1hO3RyeXtpZihhKWZvcig7bnVsbCE9PWQ7KXt2YXIgYz1leHBvcnRzLnVuc3RhYmxlX25vdygpO2lmKGQuZXhwaXJhdGlvblRpbWU8PWMpe2RvIHUoKTt3aGlsZShudWxsIT09ZCYmZC5leHBpcmF0aW9uVGltZTw9Yyl9ZWxzZSBicmVha31lbHNlIGlmKG51bGwhPT1kKXtkbyB1KCk7d2hpbGUobnVsbCE9PWQmJiF3KCkpfX1maW5hbGx5e209ITEsZT1iLG51bGwhPT1kP3AoKTpuPSExLHYoKX19XG52YXIgeD1EYXRlLHk9XCJmdW5jdGlvblwiPT09dHlwZW9mIHNldFRpbWVvdXQ/c2V0VGltZW91dDp2b2lkIDAsej1cImZ1bmN0aW9uXCI9PT10eXBlb2YgY2xlYXJUaW1lb3V0P2NsZWFyVGltZW91dDp2b2lkIDAsQT1cImZ1bmN0aW9uXCI9PT10eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lP3JlcXVlc3RBbmltYXRpb25GcmFtZTp2b2lkIDAsQj1cImZ1bmN0aW9uXCI9PT10eXBlb2YgY2FuY2VsQW5pbWF0aW9uRnJhbWU/Y2FuY2VsQW5pbWF0aW9uRnJhbWU6dm9pZCAwLEMsRDtmdW5jdGlvbiBFKGEpe0M9QShmdW5jdGlvbihiKXt6KEQpO2EoYil9KTtEPXkoZnVuY3Rpb24oKXtCKEMpO2EoZXhwb3J0cy51bnN0YWJsZV9ub3coKSl9LDEwMCl9XG5pZihcIm9iamVjdFwiPT09dHlwZW9mIHBlcmZvcm1hbmNlJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgcGVyZm9ybWFuY2Uubm93KXt2YXIgRj1wZXJmb3JtYW5jZTtleHBvcnRzLnVuc3RhYmxlX25vdz1mdW5jdGlvbigpe3JldHVybiBGLm5vdygpfX1lbHNlIGV4cG9ydHMudW5zdGFibGVfbm93PWZ1bmN0aW9uKCl7cmV0dXJuIHgubm93KCl9O3ZhciByLHEsdyxHPW51bGw7XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiB3aW5kb3c/Rz13aW5kb3c6XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBnbG9iYWwmJihHPWdsb2JhbCk7XG5pZihHJiZHLl9zY2hlZE1vY2spe3ZhciBIPUcuX3NjaGVkTW9jaztyPUhbMF07cT1IWzFdO3c9SFsyXTtleHBvcnRzLnVuc3RhYmxlX25vdz1IWzNdfWVsc2UgaWYoXCJ1bmRlZmluZWRcIj09PXR5cGVvZiB3aW5kb3d8fFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBNZXNzYWdlQ2hhbm5lbCl7dmFyIEk9bnVsbCxKPWZ1bmN0aW9uKGEpe2lmKG51bGwhPT1JKXRyeXtJKGEpfWZpbmFsbHl7ST1udWxsfX07cj1mdW5jdGlvbihhKXtudWxsIT09ST9zZXRUaW1lb3V0KHIsMCxhKTooST1hLHNldFRpbWVvdXQoSiwwLCExKSl9O3E9ZnVuY3Rpb24oKXtJPW51bGx9O3c9ZnVuY3Rpb24oKXtyZXR1cm4hMX19ZWxzZXtcInVuZGVmaW5lZFwiIT09dHlwZW9mIGNvbnNvbGUmJihcImZ1bmN0aW9uXCIhPT10eXBlb2YgQSYmY29uc29sZS5lcnJvcihcIlRoaXMgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgcmVxdWVzdEFuaW1hdGlvbkZyYW1lLiBNYWtlIHN1cmUgdGhhdCB5b3UgbG9hZCBhIHBvbHlmaWxsIGluIG9sZGVyIGJyb3dzZXJzLiBodHRwczovL2ZiLm1lL3JlYWN0LXBvbHlmaWxsc1wiKSxcblwiZnVuY3Rpb25cIiE9PXR5cGVvZiBCJiZjb25zb2xlLmVycm9yKFwiVGhpcyBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBjYW5jZWxBbmltYXRpb25GcmFtZS4gTWFrZSBzdXJlIHRoYXQgeW91IGxvYWQgYSBwb2x5ZmlsbCBpbiBvbGRlciBicm93c2Vycy4gaHR0cHM6Ly9mYi5tZS9yZWFjdC1wb2x5ZmlsbHNcIikpO3ZhciBLPW51bGwsTD0hMSxNPS0xLE49ITEsTz0hMSxQPTAsUj0zMyxTPTMzO3c9ZnVuY3Rpb24oKXtyZXR1cm4gUDw9ZXhwb3J0cy51bnN0YWJsZV9ub3coKX07dmFyIFQ9bmV3IE1lc3NhZ2VDaGFubmVsLFU9VC5wb3J0MjtULnBvcnQxLm9ubWVzc2FnZT1mdW5jdGlvbigpe0w9ITE7dmFyIGE9SyxiPU07Sz1udWxsO009LTE7dmFyIGM9ZXhwb3J0cy51bnN0YWJsZV9ub3coKSxmPSExO2lmKDA+PVAtYylpZigtMSE9PWImJmI8PWMpZj0hMDtlbHNle058fChOPSEwLEUoVikpO0s9YTtNPWI7cmV0dXJufWlmKG51bGwhPT1hKXtPPSEwO3RyeXthKGYpfWZpbmFsbHl7Tz0hMX19fTtcbnZhciBWPWZ1bmN0aW9uKGEpe2lmKG51bGwhPT1LKXtFKFYpO3ZhciBiPWEtUCtTO2I8UyYmUjxTPyg4PmImJihiPTgpLFM9YjxSP1I6Yik6Uj1iO1A9YStTO0x8fChMPSEwLFUucG9zdE1lc3NhZ2Uodm9pZCAwKSl9ZWxzZSBOPSExfTtyPWZ1bmN0aW9uKGEsYil7Sz1hO009YjtPfHwwPmI/VS5wb3N0TWVzc2FnZSh2b2lkIDApOk58fChOPSEwLEUoVikpfTtxPWZ1bmN0aW9uKCl7Sz1udWxsO0w9ITE7TT0tMX19ZXhwb3J0cy51bnN0YWJsZV9JbW1lZGlhdGVQcmlvcml0eT0xO2V4cG9ydHMudW5zdGFibGVfVXNlckJsb2NraW5nUHJpb3JpdHk9MjtleHBvcnRzLnVuc3RhYmxlX05vcm1hbFByaW9yaXR5PTM7ZXhwb3J0cy51bnN0YWJsZV9JZGxlUHJpb3JpdHk9NTtleHBvcnRzLnVuc3RhYmxlX0xvd1ByaW9yaXR5PTQ7XG5leHBvcnRzLnVuc3RhYmxlX3J1bldpdGhQcmlvcml0eT1mdW5jdGlvbihhLGIpe3N3aXRjaChhKXtjYXNlIDE6Y2FzZSAyOmNhc2UgMzpjYXNlIDQ6Y2FzZSA1OmJyZWFrO2RlZmF1bHQ6YT0zfXZhciBjPWcsZj1rO2c9YTtrPWV4cG9ydHMudW5zdGFibGVfbm93KCk7dHJ5e3JldHVybiBiKCl9ZmluYWxseXtnPWMsaz1mLHYoKX19O2V4cG9ydHMudW5zdGFibGVfbmV4dD1mdW5jdGlvbihhKXtzd2l0Y2goZyl7Y2FzZSAxOmNhc2UgMjpjYXNlIDM6dmFyIGI9MzticmVhaztkZWZhdWx0OmI9Z312YXIgYz1nLGY9aztnPWI7az1leHBvcnRzLnVuc3RhYmxlX25vdygpO3RyeXtyZXR1cm4gYSgpfWZpbmFsbHl7Zz1jLGs9Zix2KCl9fTtcbmV4cG9ydHMudW5zdGFibGVfc2NoZWR1bGVDYWxsYmFjaz1mdW5jdGlvbihhLGIpe3ZhciBjPS0xIT09az9rOmV4cG9ydHMudW5zdGFibGVfbm93KCk7aWYoXCJvYmplY3RcIj09PXR5cGVvZiBiJiZudWxsIT09YiYmXCJudW1iZXJcIj09PXR5cGVvZiBiLnRpbWVvdXQpYj1jK2IudGltZW91dDtlbHNlIHN3aXRjaChnKXtjYXNlIDE6Yj1jKy0xO2JyZWFrO2Nhc2UgMjpiPWMrMjUwO2JyZWFrO2Nhc2UgNTpiPWMrMTA3Mzc0MTgyMzticmVhaztjYXNlIDQ6Yj1jKzFFNDticmVhaztkZWZhdWx0OmI9Yys1RTN9YT17Y2FsbGJhY2s6YSxwcmlvcml0eUxldmVsOmcsZXhwaXJhdGlvblRpbWU6YixuZXh0Om51bGwscHJldmlvdXM6bnVsbH07aWYobnVsbD09PWQpZD1hLm5leHQ9YS5wcmV2aW91cz1hLHAoKTtlbHNle2M9bnVsbDt2YXIgZj1kO2Rve2lmKGYuZXhwaXJhdGlvblRpbWU+Yil7Yz1mO2JyZWFrfWY9Zi5uZXh0fXdoaWxlKGYhPT1kKTtudWxsPT09Yz9jPWQ6Yz09PWQmJihkPWEscCgpKTtcbmI9Yy5wcmV2aW91cztiLm5leHQ9Yy5wcmV2aW91cz1hO2EubmV4dD1jO2EucHJldmlvdXM9Yn1yZXR1cm4gYX07ZXhwb3J0cy51bnN0YWJsZV9jYW5jZWxDYWxsYmFjaz1mdW5jdGlvbihhKXt2YXIgYj1hLm5leHQ7aWYobnVsbCE9PWIpe2lmKGI9PT1hKWQ9bnVsbDtlbHNle2E9PT1kJiYoZD1iKTt2YXIgYz1hLnByZXZpb3VzO2MubmV4dD1iO2IucHJldmlvdXM9Y31hLm5leHQ9YS5wcmV2aW91cz1udWxsfX07ZXhwb3J0cy51bnN0YWJsZV93cmFwQ2FsbGJhY2s9ZnVuY3Rpb24oYSl7dmFyIGI9ZztyZXR1cm4gZnVuY3Rpb24oKXt2YXIgYz1nLGY9aztnPWI7az1leHBvcnRzLnVuc3RhYmxlX25vdygpO3RyeXtyZXR1cm4gYS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZmluYWxseXtnPWMsaz1mLHYoKX19fTtleHBvcnRzLnVuc3RhYmxlX2dldEN1cnJlbnRQcmlvcml0eUxldmVsPWZ1bmN0aW9uKCl7cmV0dXJuIGd9O1xuZXhwb3J0cy51bnN0YWJsZV9zaG91bGRZaWVsZD1mdW5jdGlvbigpe3JldHVybiFlJiYobnVsbCE9PWQmJmQuZXhwaXJhdGlvblRpbWU8bHx8dygpKX07ZXhwb3J0cy51bnN0YWJsZV9jb250aW51ZUV4ZWN1dGlvbj1mdW5jdGlvbigpe251bGwhPT1kJiZwKCl9O2V4cG9ydHMudW5zdGFibGVfcGF1c2VFeGVjdXRpb249ZnVuY3Rpb24oKXt9O2V4cG9ydHMudW5zdGFibGVfZ2V0Rmlyc3RDYWxsYmFja05vZGU9ZnVuY3Rpb24oKXtyZXR1cm4gZH07XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkgeyBcXG4gICAgY29sb3I6ICNkOWQ5ZDk7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZiwgR2VvcmdpYSwgc2VyaWY7XFxufVxcblxcbnVsIHtcXG4gICAgYm9yZGVyOiAxcHggIzQwNDA0MCBzb2xpZDtcXG59XFxuXFxubGkgLCBsYWJlbCwgcCB7XFxuICAgIGZvbnQtc2l6ZTogMTFweDtcXG59XFxuXFxuaDQsIGg1LCBoNiB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzMzMzO1xcbn1cXG5cXG5pbnB1dCwgdGV4dGFyZWEgeyBcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjMmIyYjJiO1xcbiAgICBjb2xvcjogI2Q5ZDlkOTtcXG4gICAgb3BhY2l0eTogMC43NTtcXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0YXJlYTtcXG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsMCwwLDAuOSk7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICBwYWRkaW5nOiA3cHg7XFxufVxcblxcbnVsIGxhYmVsIGlucHV0IHtcXG4gICAgd2lkdGg6IDEwcHg7XFxufVxcblxcbnVsLCBsaSB7XFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsMCwwLDAuOSk7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICBwYWRkaW5nOiA3cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDA7XFxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XFxufVxcblxcbmJ1dHRvbiBpe1xcbiAgICBwYWRkaW5nLXJpZ2h0OjRweDtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQ6IHJnYig0MywgNDMsIDQzKTtcXG59XFxuXFxudWwsbGksIHVsIGxhYmVsIHtcXG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcXG59XFxuXFxudWwgbGFiZWw6aG92ZXIsIGxpOmhvdmVyLCAuY29udGVudDpob3ZlcntcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQ6IHJnYig0MywgNDMsIDQzKTtcXG59XFxuXFxuI2luZGV4e1xcbiAgICBtYXJnaW46LTRweDtcXG59XCIsIFwiXCJdKTtcblxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG4vLyBTdHlsZXMuXG5cbmltcG9ydCBcIi4vU3R5bGUuY3NzXCI7XG5cbi8vIENvbXBvbmVudHMuXG5cbmltcG9ydCBBc3NldCBmcm9tIFwiLi9Bc3NldFwiO1xuXG4vLyBFdmVudHMuXG5cbmltcG9ydCB7ZHJvcEhhbmRsZXIsIGRyYWdPdmVySGFuZGxlciwgZHJhZ0xlYXZlSGFuZGxlcn0gZnJvbSBcIi4vUmVkdWNlclwiO1xuXG4vLyBEYiB1dGlscy5cblxuaW1wb3J0IHtmZXRjaEZyb21EQiwgd3JpdGVUb0RCfSBmcm9tIFwiLi9kYlwiO1xuXG5jbGFzcyBBc3NldHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNsYXNzOiBcImRyb3Bfem9uZVwiLFxuICAgICAgICAgICAgaW1hZ2VVUkw6XCJcIixcbiAgICAgICAgICAgIGFzc2V0czogW11cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy53cml0ZVRvREIgPSB3cml0ZVRvREIuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBhcHBlbmRUb0JvZHkoZmlsZSl7XG4gICAgICAgIHZhciBiaW4gPSB0aGlzLnJlc3VsdDtcbiAgICAgICAgdmFyIG5ld0ZpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmV3RmlsZS5pbm5lckhUTUwgPSAnTG9hZGVkIDogJyArIGZpbGUubmFtZSArICcgc2l6ZSAnICsgZmlsZS5zaXplICsgJyBCJztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChuZXdGaWxlKTtcblxuXG4gICAgICAgIHZhciBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBpbWcuZmlsZSA9IGZpbGU7XG4gICAgICAgIGltZy5zcmMgPSBiaW47XG4gICAgICAgIG5ld0ZpbGUuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgbGV0IGFzc2V0cyA9IHRoaXMuc3RhdGUuYXNzZXRzLm1hcChpdGVtPT4gPEFzc2V0IGltYWdlVVJMPXtpdGVtLnJlc3VsdH0vPik7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnRzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZWxlbWVudHMtdGFiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2V0c1xuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtmZXRjaEZyb21EQi5iaW5kKHRoaXMpfT5Mb2FkIEFzc2V0czwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRHJvcD17ZHJvcEhhbmRsZXIuYmluZCh0aGlzKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EcmFnT3Zlcj17ZHJhZ092ZXJIYW5kbGVyLmJpbmQodGhpcyl9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRHJhZ0xlYXZlPXtkcmFnTGVhdmVIYW5kbGVyLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5EcmFnIG9uZSBvciBtb3JlIGZpbGVzIHRvIHRoaXMgRHJvcCBab25lIC4uLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjb250YWluXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YXNzZXRzfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBc3NldHM7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5kcm9wX3pvbmUge1xcbiAgICBib3JkZXI6IDFweCBsaWdodGdyYXkgZGFzaGVkO1xcbiAgICAgICAgd2lkdGg6ICAyMDBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gIH1cXG5cXG4gIC5kcmFnX292ZXIge1xcbiAgICBib3JkZXI6IDJweCBsaWdodGdyYXkgZGFzaGVkO1xcbiAgICAgICAgd2lkdGg6ICAyMDBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gIH1cXG5cXG4gIC50aW55VGh1bWJuYWlsLFxcbiAgLnRpbnlUaHVtYm5haWwgaW1ne1xcbiAgICB3aWR0aDoyMDBweDtcXG4gIH1cXG5cXG4gIC5jb250YWlue1xcbiAgICBtYXgtaGVpZ2h0OiA0MDBweDtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gIH1cXG4gIFwiLCBcIlwiXSk7XG5cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCAgXCIuL1N0eWxlLmNzc1wiO1xuXG5jbGFzcyBBc3NldCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge307XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIC8vIFJlbW92ZSB0aGlzLnByb3BzLmluZGV4LCBpbnN0ZWFkIHVzZSB0aGlzIGVsZW1lbnQgaW5zdGFuY2UgaW5kZXguIFJlbW92ZXMgZHVwbGljYXRlIGNvZGVcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGlueVRodW1ibmFpbFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0aGlzLnByb3BzLmltYWdlVVJMfT48L2ltZz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXNzZXQ7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zZWxlY3RlZCwgLmdyZWVuIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxuICAgIGJhY2tncm91bmQ6IHJnYig0MywgNDMsIDQzKTtcXG59XFxuXFxuLmJhY2tncm91bmQge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNjQsIDY0LCA2NCk7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzMzMzO1xcbn1cXG5cXG4uY29tcG9uZW50IHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5jb21wb25lbnQgLmNvbXBvbmVudE5hbWV7XFxuICAgIHBhZGRpbmc6N3B4O1xcbn1cXG5cXG4udGh1bWJuYWlsIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxufVwiLCBcIlwiXSk7XG5cbiIsImltcG9ydCBpbmRleGVkREIgZnJvbSBcIi4uL1V0aWxpdGllcy9MaWJyYXJpZXMvaW5kZXhlZERCL2luZGV4ZURCXCJcbmV4cG9ydCBmdW5jdGlvbiBkcm9wSGFuZGxlcihldikge1xuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBbXS5mb3JFYWNoLmNhbGwoZXYuZGF0YVRyYW5zZmVyLmZpbGVzLCAoZmlsZSk9PntcbiAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgICAgICByZWFkZXIub25sb2FkZW5kID0gIGZ1bmN0aW9uIChldmVudCxiKSB7XG4gICAgICAgICAgICAvLyAxLiBhcHBlbmQgdG8gYm9keVxuICAgICAgICAgICAgLy8gMi4gd3JpdGUgdG8gZGIuXG4gICAgICAgICAgICB0aGlzLmFwcGVuZFRvQm9keShmaWxlKTtcbiAgICAgICAgICAgIHRoaXMud3JpdGVUb0RCKGV2ZW50LnRhcmdldC5yZXN1bHQsIGZpbGUubmFtZSk7XG5cbiAgICAgICAgfS5iaW5kKHRoaXMpO1xuICAgIH0pXG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY2xhc3M6IFwiZHJvcF96b25lXCJcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZHJhZ092ZXJIYW5kbGVyKGV2KSB7XG4gICAgY29uc29sZS5sb2coJ0ZpbGUocykgaW4gZHJvcCB6b25lJyk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY2xhc3M6IFwiZHJhZ19vdmVyXCJcbiAgICB9KVxuXG4gICAgLy8gUHJldmVudCBkZWZhdWx0IGJlaGF2aW9yIChQcmV2ZW50IGZpbGUgZnJvbSBiZWluZyBvcGVuZWQpXG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRyYWdMZWF2ZUhhbmRsZXIoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjbGFzczogXCJkcm9wX3pvbmVcIlxuICAgIH0pXG59Iiwid2luZG93LmlEQiA9IFwiXCI7XG5pbXBvcnQgeyBNaW5kZXhlZERCIH0gZnJvbSBcIi4vTWluZGV4ZWREQlwiO1xuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCl7XG4gICAgd2luZG93LmlEQiA9IG5ldyBNaW5kZXhlZERCKFwidWlFZGl0b3JcIiwge3VpRWRpdG9yOiBcIm5hbWVcIn0pO1xuICAgIC8vIGlEQi5wdXQoXCJ1aUVkaXRvclwiLCB7ZGF0YToxMjN9KVxuICAgIHdpbmRvdy5pREIuY29ubmVjdCgpO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGlEQjsiLCIvLyB0YWtlbiBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9Ub21BbnRob255L01pbi5kZXhlZERCL2Jsb2IvbWFzdGVyL21pbmRleGVkZGIuanNcbmV4cG9ydCBmdW5jdGlvbiBNaW5kZXhlZERCKGRhdGFiYXNlTmFtZSwgb2JqZWN0U3RvcmVzKSB7XG5cdHRoaXMuaWRiID0gd2luZG93LmluZGV4ZWREQiB8fCB3aW5kb3cubW96SW5kZXhlZERCIHx8IHdpbmRvdy53ZWJraXRJbmRleGVkREIgfHwgd2luZG93Lm1zSW5kZXhlZERCIHx8IHdpbmRvdy5zaGltSW5kZXhlZERCO1xuXHR0aGlzLmRiID0gZGF0YWJhc2VOYW1lO1xuXHR0aGlzLm9ialN0cnMgPSBBcnJheS5pc0FycmF5KG9iamVjdFN0b3JlcykgPyBvYmplY3RTdG9yZXMgOiBbb2JqZWN0U3RvcmVzXTtcblx0dGhpcy5zdG9yZSA9IFwidWlFZGl0b3JcIjtcblxuXHR0aGlzLmNvbm5lY3QgPSBmdW5jdGlvbihrZXkpIHtcblx0XHR2YXIgY29ubiA9IHRoaXMuaWRiLm9wZW4odGhpcy5kYiwgMSk7XG5cdFx0Y29ubi5tZGIgPSB0aGlzO1xuXG5cdFx0Y29ubi5vbnVwZ3JhZGVuZWVkZWQgPSBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBkYmwgPSBjb25uLnJlc3VsdDtcblx0XHRcdHRoaXMubWRiLm9ialN0cnMuZm9yRWFjaChlbGVtZW50ID0+IHtcblx0XHRcdFx0dmFyIHN0b3JlID0gT2JqZWN0LmVudHJpZXMoZWxlbWVudCk7XG5cdFx0XHRcdGRibC5jcmVhdGVPYmplY3RTdG9yZShzdG9yZVswXVswXSwge2tleVBhdGg6IHN0b3JlWzBdWzFdfSk7XG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkgeyBcblx0XHRcdGNvbm4ub25zdWNjZXNzID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHRoaXMubWRiLmRiID0gY29ubi5yZXN1bHQ7XG5cdFx0XHRcdHJlc29sdmUodGhpcy5tZGIuZGIpO1xuXHRcdFx0fVxuXHRcdFx0Y29ubi5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJlamVjdChjb25uLmVycm9yKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHRoaXMuY3MgPSBmdW5jdGlvbihzdG9yZSkge1xuXHRcdGlmICh0aGlzLmRiID09PSB1bmRlZmluZWQpIHRocm93IFwiW01pbi5kZXhlZERCXSBEQiBub3Qgb3Blbi5cIjtcblx0XHR2YXIgdHggPSB0aGlzLmRiLnRyYW5zYWN0aW9uKHN0b3JlLCBcInJlYWR3cml0ZVwiKTtcblx0XHRyZXR1cm4gdHgub2JqZWN0U3RvcmUoc3RvcmUpO1xuXHR9XG5cblx0dGhpcy5wdXQgPSBmdW5jdGlvbihvYmopIHtcblx0XHRsZXQgb3MgPSB0aGlzLmNzKHRoaXMuc3RvcmUpO1xuXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdFx0dmFyIHJlc3BvbnNlID0gb3MucHV0KG9iaik7XG5cdFx0XHRyZXNwb25zZS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmVzb2x2ZShyZXNwb25zZS5yZXN1bHQpO1xuXHRcdFx0fTtcblx0XHRcdHJlc3BvbnNlLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmVqZWN0KHJlc3BvbnNlLmVycm9yKTtcblx0XHRcdH07XG5cdFx0fSk7XG5cdH1cblxuXHR0aGlzLmdldCA9IGZ1bmN0aW9uKGtleSkge1xuXHRcdGxldCBvcyA9IHRoaXMuY3ModGhpcy5zdG9yZSk7XG5cblx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0XHR2YXIgcmVzcG9uc2UgPSBvcy5nZXQoa2V5KTtcblx0XHRcdHJlc3BvbnNlLm9uc3VjY2VzcyA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXNvbHZlKHJlc3BvbnNlLnJlc3VsdCk7XG5cdFx0XHR9O1xuXHRcdFx0cmVzcG9uc2Uub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZWplY3QocmVzcG9uc2UuZXJyb3IpO1xuXHRcdFx0fTtcblx0XHR9KTtcblx0fVxuXG5cdHRoaXMuZ2V0QWxsID0gZnVuY3Rpb24oKSB7XG5cdFx0bGV0IG9zID0gdGhpcy5jcyh0aGlzLnN0b3JlKTtcblxuXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0XHRcdHZhciByZXNwb25zZSA9IG9zLmdldEFsbCgpO1xuXHRcdFx0cmVzcG9uc2Uub25zdWNjZXNzID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJlc29sdmUocmVzcG9uc2UucmVzdWx0KTtcblx0XHRcdH07XG5cdFx0XHRyZXNwb25zZS5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJlamVjdChyZXNwb25zZS5lcnJvcik7XG5cdFx0XHR9O1xuXHRcdH0pO1xuXHR9XG5cblx0dGhpcy5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuZGIuY2xvc2UoKTtcblx0fVxufSIsIlxuZXhwb3J0IGZ1bmN0aW9uIHdyaXRlVG9EQihyZXN1bHQsIG5hbWUpIHtcbiAgICB3aW5kb3cuaURCLmdldChuYW1lKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICB2YXIgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgaW1nLmhyZWYgPSBkYXRhLnJlc3VsdDtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpbWFnZVVSTDogZGF0YS5yZXN1bHRcbiAgICAgICAgfSlcbiAgICB9KVxuICAgIHdpbmRvdy5pREIucHV0KHsgbmFtZTogbmFtZSwgcmVzdWx0OiByZXN1bHQgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoRnJvbURCKCkge1xuICAgIHdpbmRvdy5pREIuZ2V0QWxsKCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgLy8gc2F2ZSBpdCB0byB3aW5kb3dcbiAgICAgICAgd2luZG93LmFzc2V0cyA9IHt9O1xuICAgICAgICBkYXRhLmZvckVhY2goaW1hZ2UgPT4ge1xuICAgICAgICAgICAgd2luZG93LmFzc2V0c1tpbWFnZS5uYW1lXSA9IGltYWdlLnJlc3VsdFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFzc2V0czogZGF0YVxuICAgICAgICB9KVxuICAgIH0pO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuLy8gU3R5bGVzLlxuXG5pbXBvcnQgXCIuL1N0eWxlLmNzc1wiO1xuXG4vLyBDb21wb25lbnRzLlxuXG5pbXBvcnQgRm9sZGVycyBmcm9tIFwiLi4vVXRpbGl0aWVzL0NvbXBvbmVudHMvRm9sZGVyc1wiO1xuaW1wb3J0IHtvbkRlbGV0ZX0gZnJvbSBcIi4vRXZlbnRzXCI7XG5cbi8vIEV2ZW50cy5cblxuY2xhc3MgQ29tcG9uZW50cyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY29tcG9uZW50czogdGhpcy5wcm9wcy5jb21wb25lbnRzLFxuICAgICAgICAgICAgZm9sZGVyczogdGhpcy5wcm9wcy5mb2xkZXJzXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYWRkRm9sZGVyKCl7XG4gICAgICAgIGxldCBmb2xkZXJzID0gQXJyYXkuZnJvbSh0aGlzLnN0YXRlLmZvbGRlcnMpO1xuICAgICAgICBmb2xkZXJzLnVuc2hpZnQoe1xuICAgICAgICAgICAgdHlwZTpcIm5ld0ZvbGRlclwiLFxuICAgICAgICAgICAgbmFtZTpcIlwiLFxuICAgICAgICAgICAgY29udGVudHM6W11cbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Zm9sZGVyc30pXG4gICAgfVxuXG4gICAgYWRkQ29tcG9uZW50KCl7XG4gICAgICAgIHRoaXMucHJvcHMub25PcGVuRWRpdG9yKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnRzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZWxlbWVudHMtdGFiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIENvbXBvbmVudHNcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ29udHJvbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5hZGRDb21wb25lbnQuYmluZCh0aGlzKX0+PGkgY2xhc3NOYW1lPVwiZmEgZmEtZWRpdFwiPjwvaT5FZGl0IENvbXBvbmVudDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmFkZEZvbGRlci5iaW5kKHRoaXMpfT48aSBjbGFzc05hbWU9XCJmYSBmYS1mb2xkZXJcIj48L2k+QWRkIEZvbGRlcjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvbGRlcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSB7TWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMDAwKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzPXt0aGlzLnN0YXRlLmNvbXBvbmVudHN9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbGRlcnM9e3RoaXMuc3RhdGUuZm9sZGVyc30gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRDb21wb25lbnQ9e3RoaXMucHJvcHMuc2VsZWN0ZWRDb21wb25lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRm9sZGVyc1VwZGF0ZT17dGhpcy5wcm9wcy5vbkZvbGRlcnNVcGRhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0aW9uID0ge3RoaXMucHJvcHMub25TZWxlY3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRGVsZXRlPXtvbkRlbGV0ZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudHM7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5vdmVycmlkZSB7XFxuICAgIGxpbmUtaGVpZ2h0OiAwJTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxuICAgIHdpZHRoOiA0NTBweDtcXG59XFxuXFxuLmVsZW1lbnRze1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxufVxcblxcbi50aXRsZXtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTFweDtcXG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcXG4gICAgYmFja2dyb3VuZDogcmdiKDY0LCA2NCwgNjQpO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5lbGVtZW50cy10YWIge1xcbiAgICBsZWZ0OjEwcHg7XFxufVxcblxcbi5Db250cm9sc3tcXG4gICAgcGFkZGluZy1ib3R0b206OHB4O1xcbn1cIiwgXCJcIl0pO1xuXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG4vLyBTdHlsZXMuXG5cbmltcG9ydCBcIi4vU3R5bGUuY3NzXCI7XG5pbXBvcnQgRm9sZGVyIGZyb20gXCIuL0ZvbGRlclwiO1xuXG5pbXBvcnQge2ZvbGRlclN0cnVjdHVyZX0gZnJvbSBcIi4vcHJvY2Vzc0ZvbGRlclwiO1xuXG5jbGFzcyBGb2xkZXJzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjb21wb25lbnRzOiB0aGlzLnByb3BzLmNvbXBvbmVudHMsXG4gICAgICAgICAgICBmb2xkZXJzOiB0aGlzLnByb3BzLmZvbGRlcnNcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjaGVja0ZvbGRlcihkYXRhKXtcbiAgICAgICAgbGV0IGZvbGRlcnMgPSBBcnJheS5mcm9tKHRoaXMuc3RhdGUuZm9sZGVycyk7XG4gICAgICAgIGxldCBmb2xkZXIgPSBmb2xkZXJzLmZpbmQoZm9sZGVyPT5mb2xkZXIubmFtZT09PWRhdGEubmFtZSk7XG4gICAgICAgIGxldCBlbXB0eUZvbGRlckluZGV4ID0gZm9sZGVycy5maW5kSW5kZXgoZm9sZGVyPT5mb2xkZXIudHlwZT09PVwibmV3Rm9sZGVyXCIpO1xuICAgICAgICAvLyBEZWxldGUgdGhlIG5ld0ZvbGRlclxuICAgICAgICBmb2xkZXJzLnNwbGljZShlbXB0eUZvbGRlckluZGV4LDEpO1xuICAgICAgICBjb25zb2xlLmxvZyhmb2xkZXJzKVxuICAgICAgICAvLyBDaGVjayBpZiBpdCBpcyBuZXdseSBjcmVhdGVkIGZvbGRlciBcbiAgICAgICAgaWYoIWZvbGRlcil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRm9sZGVyIG5vdCBmb3VuZCwgYWRkaW5nICR7SlNPTi5zdHJpbmdpZnkoZGF0YSl9dG8gbGlzdCBvZiBmb2xkZXJzICR7SlNPTi5zdHJpbmdpZnkoZm9sZGVycyl9YCk7XG4gICAgICAgICAgICBmb2xkZXJzLnB1c2goZGF0YSk7XG4gICAgICAgIH0gXG4gICAgICAgIC8vIFVwZGF0ZSBleGlzdGluZyBvbmVcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRm9sZGVyIGZvdW5kLCB1cGRhdGluZyB0aGUgZm9sZGVyIGNvbnRlbnQgZnJvbSAke2ZvbGRlci5jb250ZW50c30gdG8gJHtkYXRhLmNvbnRlbnRzfWApXG4gICAgICAgICAgICBmb2xkZXIuY29udGVudHMgPSBkYXRhLmNvbnRlbnRzO1xuXG4gICAgICAgICAgICAvLyBNYWtlcyBzdXJlIHRoYXQgY29udGVudHMgYXJlIG5vdCBkdXBsaWNhdGVkIGluIG90aGVyIGZvbGRlcnMuXG4gICAgICAgICAgICBmb2xkZXJzLmZvckVhY2goY3VycmVudEZvbGRlcj0+e1xuXG4gICAgICAgICAgICAgICAgaWYoY3VycmVudEZvbGRlci5uYW1lICE9PSBkYXRhLm5hbWUpe1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmNvbnRlbnRzLmZvckVhY2goY29udGVudD0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gY3VycmVudEZvbGRlci5jb250ZW50cy5maW5kSW5kZXgoaXRlbT0+aXRlbT09PWNvbnRlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleCE9PS0xPyBjdXJyZW50Rm9sZGVyLmNvbnRlbnRzLnNwbGljZShpbmRleCwxKTogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coZm9sZGVycylcblxuICAgICAgICB0aGlzLnByb3BzLm9uRm9sZGVyc1VwZGF0ZShmb2xkZXJzKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgbGV0IGZlYXR1cmVFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgaWYoZmVhdHVyZUVuYWJsZWQpe1xuICAgICAgICAgICAgcmV0dXJuIGZvbGRlclN0cnVjdHVyZSh0aGlzLnByb3BzLCB0aGlzLmNoZWNrRm9sZGVyLmJpbmQodGhpcykgKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZm9sZGVycy5tYXAoKGZvbGRlcik9PiA8Rm9sZGVyXG4gICAgICAgICAgICBrZXk9e01hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwMCl9IFxuICAgICAgICAgICAgZm9sZGVyPXtmb2xkZXJ9IFxuICAgICAgICAgICAgc2VsZWN0ZWRDb21wb25lbnQgPSB7dGhpcy5wcm9wcy5zZWxlY3RlZENvbXBvbmVudH1cbiAgICAgICAgICAgICAgICBvblNlbGVjdGlvbiA9IHt0aGlzLnByb3BzLm9uU2VsZWN0aW9ufVxuICAgICAgICAgICAgICAgIG9uRm9sZGVyVXBkYXRlPXt0aGlzLmNoZWNrRm9sZGVyLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgb25EZWxldGU9e3RoaXMucHJvcHMub25EZWxldGV9IC8+KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvbGRlcnM7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImlucHV0LmZvbGRlcntcXG4gICAgYm9yZGVyOm5vbmU7XFxuICAgIGJhY2tncm91bmQ6bm9uZTtcXG59XFxuXFxuLm5ld0ZvbGRlcntcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5uZXdGb2xkZXIgaXtcXG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsMCwwLDAuOSk7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICBwYWRkaW5nOiA3cHg7XFxufVxcblxcbi5uZXdGb2xkZXIuZHJhZ092ZXIgaXtcXG4gICAgYW5pbWF0aW9uOiBibGluayAuNXMgaW5maW5pdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgYmxpbmt7XFxuICAgIGZyb20geyAgICBcXG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICB9XFxufVxcbi5mYS5mYS1mb2xkZXIgfiB1bCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5mYS5mYS1mb2xkZXItb3BlbiB+IHVsIHtcXG4gICAgZGlzcGxheTpibG9jaztcXG59XFxuXFxuLmZvbGRlclNlbGVjdGVkIC5mYS5mYS1mb2xkZXIsXFxuLmZvbGRlclNlbGVjdGVkIC5mYS5mYS1mb2xkZXItb3BlbntcXG4gICAgYmFja2dyb3VuZDogcmdiKDQ4LDExNSw5MylcXG59XCIsIFwiXCJdKTtcblxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1N0eWxlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJpbnB1dC5mb2xkZXJ7XFxuICAgIGJvcmRlcjpub25lO1xcbiAgICBiYWNrZ3JvdW5kOm5vbmU7XFxufVxcblxcbi5uZXdGb2xkZXJ7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ubmV3Rm9sZGVyIGl7XFxuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLDAsMCwwLjkpO1xcbiAgICBib3JkZXItd2lkdGg6IDFweDtcXG4gICAgcGFkZGluZzogN3B4O1xcbn1cXG5cXG4ubmV3Rm9sZGVyLmRyYWdPdmVyIGl7XFxuICAgIGFuaW1hdGlvbjogYmxpbmsgLjVzIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJsaW5re1xcbiAgICBmcm9tIHsgICAgXFxuICAgICAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgfVxcbn1cXG4uZmEuZmEtZm9sZGVyIH4gdWwge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4uZmEuZmEtZm9sZGVyLW9wZW4gfiB1bCB7XFxuICAgIGRpc3BsYXk6YmxvY2s7XFxufVxcblxcbi5mb2xkZXJTZWxlY3RlZCAuZmEuZmEtZm9sZGVyLFxcbi5mb2xkZXJTZWxlY3RlZCAuZmEuZmEtZm9sZGVyLW9wZW57XFxuICAgIGJhY2tncm91bmQ6IHJnYig0OCwxMTUsOTMpXFxufVwiLCBcIlwiXSk7XG5cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbi8vIFN0eWxlcy5cblxuaW1wb3J0IFwiLi9TdHlsZS5jc3NcIjtcblxuaW1wb3J0IHtub2Ryb3BIYW5kbGVyLCBub2RyYWdPdmVySGFuZGxlcn0gZnJvbSBcIi4vRXZlbnRzXCI7XG5cbmNsYXNzIE5vRm9sZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzdGF0dXM6IFwiZmEgZmEtZm9sZGVyXCIsXG4gICAgICAgICAgICBmb2xkZXJDbGFzczogXCJub0ZvbGRlclwiXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKDx1bCBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibm9Gb2xkZXJcIlxuICAgICAgICAgICAgICAgICAgICBvbkRyb3A9e25vZHJvcEhhbmRsZXIuYmluZCh0aGlzKX0gXG4gICAgICAgICAgICAgICAgICAgIG9uRHJhZ092ZXI9e25vZHJhZ092ZXJIYW5kbGVyLmJpbmQodGhpcyl9ID5cblxuICAgICAgICAgICAge3RoaXMucHJvcHMuY29udGVudHN9XG4gICAgICAgIDwvdWw+KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTm9Gb2xkZXI7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5ub0ZvbGRlcntcXG4gICAgYm9yZGVyOjFweCBzb2xpZCB0dXJxdW9pc2U7XFxufVwiLCBcIlwiXSk7XG5cbiIsIlxuICAgIGV4cG9ydCBmdW5jdGlvbiBub2Ryb3BIYW5kbGVyKGV2KSB7XG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBjb21wb25lbnROYW1lID0gZXYuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJjb21wb25lbnQtbmFtZVwiKTtcbiAgICAgICAgbGV0IGNvbnRlbnRzID0gQXJyYXkuZnJvbSh0aGlzLnN0YXRlLmNvbnRlbnRzKTtcbiAgICAgICAgbGV0IGluZGV4ID0gY29udGVudHMuZmluZEluZGV4KGNvbnRlbnQ9PmNvbnRlbnQ9PT1jb21wb25lbnROYW1lKTtcblxuICAgICAgICAvLyBEZWxldGUgdGhlIGl0ZW0gZnJvbSB0aGVjb250ZW50cy5cbiAgICAgICAgY29udGVudHMuc2xpY2UoaW5kZXgsIDEpO1xuXG4gICAgICAgIHRoaXMucHJvcHMub25Gb2xkZXJVcGRhdGUoe1xuICAgICAgICAgICAgbmFtZTogdGhpcy5zdGF0ZS5uYW1lLFxuICAgICAgICAgICAgY29udGVudHMgOiBjb250ZW50cyxcbiAgICAgICAgICAgIHR5cGU6XCJub0ZvbGRlclwiXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKFwiT04gRFJPUCBub0ZvbGRlclwiKTtcbiAgICB9XG5cbiAgICBleHBvcnQgZnVuY3Rpb24gbm9kcmFnT3ZlckhhbmRsZXIoZXYpIHtcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgZm9sZGVyQ2xhc3M6IFwibmV3Rm9sZGVyIGRyYWdPdmVyXCJcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2coXCJPTiBEUkFHIE9WRVIgbm9Gb2xkZXJcIik7XG4gICAgfVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuLy8gU3R5bGVzLlxuXG5pbXBvcnQgXCIuL1N0eWxlLmNzc1wiO1xuXG4vLyBDb21wb25lbnRzLlxuXG5jbGFzcyBOZXdGb2xkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHN0YXR1czogXCJmYSBmYS1mb2xkZXJcIixcbiAgICAgICAgICAgIG5ld0ZvbGRlckNsYXNzOiBcIm5ld0ZvbGRlclwiLFxuICAgICAgICAgICAgZm9sZGVyTmFtZTogXCJcIlxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZvbGRlck5hbWVDaGFuZ2VkKGUpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGZvbGRlck5hbWU6IGUuY3VycmVudFRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHNhdmVGb2xkZXJOYW1lT25FbnRlcihlKXtcbiAgICAgICAgaWYoZS5rZXk9PT1cIkVudGVyXCIpe1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbk5ld0ZvbGRlcih7XG4gICAgICAgICAgICAgICAgbmFtZTp0aGlzLnN0YXRlLmZvbGRlck5hbWUsXG4gICAgICAgICAgICAgICAgY29udGVudHM6W10sXG4gICAgICAgICAgICAgICAgdHlwZTpcImZvbGRlclwiXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLm5ld0ZvbGRlckNsYXNzfT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5zdGF0dXN9PjwvaT5cbiAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbGRlclwiIFxuICAgICAgICAgICAgICAgIGF1dG9Gb2N1cz17dHJ1ZX0gXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBmb2xkZXIgbmFtZVwiXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB7dGhpcy5zdGF0ZS5mb2xkZXJOYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmZvbGRlck5hbWVDaGFuZ2VkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgb25LZXlQcmVzcz17dGhpcy5zYXZlRm9sZGVyTmFtZU9uRW50ZXIuYmluZCh0aGlzKX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5ld0ZvbGRlcjtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1N0eWxlLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1N0eWxlLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaW5wdXQuZm9sZGVye1xcbiAgICBib3JkZXI6bm9uZTtcXG4gICAgYmFja2dyb3VuZDpub25lO1xcbn1cXG5cXG4ubmV3Rm9sZGVyIGl7XFxuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLDAsMCwwLjkpO1xcbiAgICBib3JkZXItd2lkdGg6IDFweDtcXG4gICAgcGFkZGluZzogN3B4O1xcbn1cXG5cXG4ubmV3Rm9sZGVyLmRyYWdPdmVyIGl7XFxuICAgIGFuaW1hdGlvbjogYmxpbmsgLjVzIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJsaW5re1xcbiAgICBmcm9tIHsgICAgXFxuICAgICAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgIGNvbG9yOiBncmVlbjtcXG4gICAgfVxcbn1cIiwgXCJcIl0pO1xuXG4iLCJleHBvcnQgZnVuY3Rpb24gZGVsZXRlRm9sZGVyKGUpe1xuICAgIGlmKGUua2V5PT09XCJCYWNrc3BhY2VcIiAmJiBlLmN0cmxLZXkgJiYgdGhpcy5zdGF0ZS5mb2xkZXJDbGFzcy5pbmNsdWRlcyhcImZvbGRlclNlbGVjdGVkXCIpKXtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkZvbGRlckRlbGV0ZSh0aGlzLnN0YXRlLmZvbGRlcik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBvcGVuRm9sZGVyKCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHN0YXR1czogXCJmYSBmYS1mb2xkZXItb3BlblwiXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gY2xvc2VGb2xkZXIoKXtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc3RhdHVzOiBcImZhIGZhLWZvbGRlclwiXG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUZvbGRlcigpe1xuICAgIHRoaXMuc3RhdGUuc3RhdHVzID09PSBcImZhIGZhLWZvbGRlclwiPyAgb3BlbkZvbGRlci5jYWxsKHRoaXMpIDogY2xvc2VGb2xkZXIuY2FsbCh0aGlzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdEZvbGRlcigpe1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmb2xkZXJDbGFzczpcIm5ld0ZvbGRlciBmb2xkZXJTZWxlY3RlZFwiXG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlc2VsZWN0Rm9sZGVyKCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZvbGRlckNsYXNzOlwibmV3Rm9sZGVyXCJcbiAgICB9KVxufVxuIiwiaW1wb3J0IHtzYW1wbGV9IGZyb20gXCIuL1NhbXBsZVwiO1xuXG5mdW5jdGlvbiBwdXNoSGlzdG9yeShjb21wb25lbnRzKXtcblxuICAgIHdpbmRvdy5lZGl0b3JIaXN0b3J5ID0gcmVhZERhdGEoXCJ1aS1lZGl0b3ItaGlzdG9yeVwiKTtcbiAgICBlZGl0b3JIaXN0b3J5LnB1c2goY29tcG9uZW50cyk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1aS1lZGl0b3ItaGlzdG9yeVwiLEpTT04uc3RyaW5naWZ5KGVkaXRvckhpc3RvcnkpICk7XG59XG5cbi8vIElmIGVtcHR5LCByZXR1cm4gZW1wdHkgYXJyYXkuXG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkRGF0YShrZXkpe1xuXG4gICAgaWYoa2V5ID09PVwidWktZWRpdG9yXCIpe1xuICAgICAgICBpZighd2luZG93LmNvbXBvbmVudHMgKXtcbiAgICAgICAgICAgIHdpbmRvdy5jb21wb25lbnRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSB8fCBzYW1wbGU7XG4gICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHdpbmRvdy5jb21wb25lbnRzKSk7XG4gICAgfVxuICAgIGlmKGtleT09PVwidWktZWRpdG9yLWhpc3RvcnlcIil7XG4gICAgICAgIGxldCBoaXN0b3J5ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICAgICAgXG4gICAgICAgIGlmKGhpc3RvcnkpXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShoaXN0b3J5KTtcbiAgICB9XG4gICAgaWYoa2V5ID09PVwiZm9sZGVyc1wiKXtcbiAgICAgICAgbGV0IGZvbGRlcnMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGZvbGRlcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBbXTtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gd3JpdGVEYXRhKGtleSwgY29tcG9uZW50cywgbm9QdXNoKXtcblxuICAgIGlmKGtleT09XCJmb2xkZXJzXCIpe1xuICAgICAgICBjb25zb2xlLmxvZyhcIndyaXRpbmcgZm9sZGVyc1wiKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KGNvbXBvbmVudHMpKTtcbiAgICB9XG4gICAgaWYoa2V5PT1cInVpLWVkaXRvclwiKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJXUklURVwiKVxuICAgICAgICB3aW5kb3cuY29tcG9uZW50cyA9IGNvbXBvbmVudHM7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkoY29tcG9uZW50cykpO1xuICAgICAgICBpZighbm9QdXNoKXtcbiAgICAgICAgICAgIHB1c2hIaXN0b3J5KGNvbXBvbmVudHMpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZENvbXBvbmVudChjb21wb25lbnROYW1lKXtcblxuICAgIGxldCBjb21wb25lbnRzID0gcmVhZERhdGEoXCJ1aS1lZGl0b3JcIik7XG4gICAgaWYoIWNvbXBvbmVudHMpe1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gY29tcG9uZW50cy5maW5kKGNvbXBvbmVudD0+Y29tcG9uZW50Lm5hbWU9PT1jb21wb25lbnROYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdyaXRlQ29tcG9uZW50KHBhcmVudCkge1xuXG4gICAgaWYoIUFycmF5LmlzQXJyYXkocGFyZW50KSAmJiBwYXJlbnQubmFtZSl7XG4gICAgICAgIGxldCBjb21wb25lbnRzID0gcmVhZERhdGEoIFwidWktZWRpdG9yXCIpO1xuICAgICAgICBsZXQgaW5kZXggPSBjb21wb25lbnRzLmZpbmRJbmRleChjb21wPT5jb21wLm5hbWUgPT09IHBhcmVudC5uYW1lKTtcbiAgICAgICAgY29tcG9uZW50c1tpbmRleF0gPSBwYXJlbnQ7XG4gICAgICAgIHdyaXRlRGF0YShcInVpLWVkaXRvclwiLCBjb21wb25lbnRzKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3BIaXN0b3J5KCl7XG4gICAgXG4gICAgbGV0IGVkaXRvckhpc3RvcnkgPSByZWFkRGF0YShcInVpLWVkaXRvci1oaXN0b3J5XCIpO1xuICAgIGlmKCFlZGl0b3JIaXN0b3J5KXtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBsYXN0SXRlbSA9IGVkaXRvckhpc3RvcnkucG9wKCk7XG4gICAgXG4gICAgaWYoIWVkaXRvckhpc3Rvcnkpe1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd3JpdGVEYXRhKFwidWktZWRpdG9yLWhpc3RvcnlcIiwgZWRpdG9ySGlzdG9yeSwgdHJ1ZSk7XG5cbiAgICB3cml0ZURhdGEoXCJ1aS1lZGl0b3JcIiwgbGFzdEl0ZW0sIHRydWUpO1xufSIsImxldCBzYW1wbGUgPSBbXG4gICAge1xuICAgICAgICBcIm5hbWVcIjogXCJGb3Jnb3RQYXNzd29yZFwiLFxuICAgICAgICBcIm1hcmt1cFwiOiBcIjxkaXYgY2xhc3NOYW1lPVxcXCJ2c0J1dHRvblxcXCI+PGJ1dHRvbiBpZD1cXFwiZjEyM1xcXCI+Rm9yZ290IFBhc3N3b3JkPC9idXR0b24+PC9kaXY+XCIsXG4gICAgICAgIFwiZXZlbnRzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvbkNsaWNrXCIsXG4gICAgICAgICAgICAgICAgXCJyZWR1Y2VyXCI6IFwic3RhdGUuc2hvd1wiLFxuICAgICAgICAgICAgICAgIFwicHVibGlzaGFibGVcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcInB1Ymxpc2hOYW1lXCI6IFwib25QYXNzd29yZEZvcmdvdHRlblwiLFxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJmMTIzXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJzdGF0ZVwiOiBcIntcXFwic2hvd1xcXCI6XFxcImZhbHNlXFxcIn1cIixcbiAgICAgICAgXCJzdHlsZVwiOiBcIi52c0J1dHRvbntcXG5mb250LWZhbWlseTogQmVudG9uU2Fuc0Jvb2ssSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XFxuY29sb3I6IHJnYigwLCAwLCAwKTtcXG59XFxuXFxuXFxuLnZzQnV0dG9uIGJ1dHRvbntcXG5ib3JkZXItY29sb3I6ICNiZjIxNWQ7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kOiAjZWY1Zjk2O1xcbmJvcmRlcjogMXB4IHNvbGlkO1xcbn1cXG5cXG4udnNCdXR0b24gYnV0dG9uOmhvdmVye1xcbmJvcmRlci1jb2xvcjogI2JmMjE1ZDtcXG59XCIsXG4gICAgICAgIFwiY2hpbGRyZW5cIjogW10sXG4gICAgICAgIFwiaWRcIjogMjE4LFxuICAgICAgICBcImNvbmZpZ1wiOiBcInt9XCIsXG4gICAgICAgIFwiaWRNYXJrdXBcIjogXCI8ZGl2IGNsYXNzTmFtZT1cXFwidnNCdXR0b25cXFwiIGRhdGEtdXVpZD1cXFwiMFxcXCI+PGJ1dHRvbiBpZD1cXFwiZjEyM1xcXCIgZGF0YS11dWlkPVxcXCIxXFxcIj5Gb3Jnb3QgUGFzc3dvcmQ8L2J1dHRvbj48L2Rpdj5cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcIm5hbWVcIjogXCJNb2RhbFwiLFxuICAgICAgICBcIm1hcmt1cFwiOiBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsXFxcIj5cXG48aGVhZGVyPlxcbiAgPGgzPkZvcmdvdCBQYXNzd29yZDwvaDM+XFxuICAgIDxidXR0b24gY2xhc3NOYW1lPVxcXCJjbG9zZUJ1dHRvblxcXCIgaWQ9XFxcInhcXFwiPng8L2J1dHRvbj5cXG48L2hlYWRlcj5cXG48c2VjdGlvbiBjbGFzcz1cXFwiY29udGVudFxcXCI+PFByaXZhY3lBbmRQb2xpY3k+PC9Qcml2YWN5QW5kUG9saWN5PlxcbiBcXG48L3NlY3Rpb24+XFxuPGZvb3Rlcj5mb290ZXI8L2Zvb3Rlcj5cXG48L2Rpdj5cIixcbiAgICAgICAgXCJldmVudHNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm9uQ2xpY2tcIixcbiAgICAgICAgICAgICAgICBcInJlZHVjZXJcIjogXCJzdGF0ZS5uYW1lPVxcXCJcXFwiO1wiLFxuICAgICAgICAgICAgICAgIFwicHVibGlzaGFibGVcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcInB1Ymxpc2hOYW1lXCI6IFwib25DbG9zZU1vZGFsXCIsXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcInhcIlxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcInN0YXRlXCI6IFwie31cIixcbiAgICAgICAgXCJzdHlsZVwiOiBcIi5tb2RhbHtcXG4gIHdpZHRoOjQwMHB4O1xcbiAgZm9udC1zaXplOjIycHg7XFxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5jb2xvcjogYmxhY2s7XFxuICBmb250LWZhbWlseTogQmVudG9uU2Fuc0xpZ2h0LEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6NDAwO1xcbiAgICBsaW5lLWhlaWdodDogMTdweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4wNGVtO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG5cXG59XFxuXFxuLm1vZGFsIGgze1xcbiAgcGFkZGluZzoxcmVtO1xcbmZvbnQtc2l6ZToyNnB4O1xcbmZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5tb2RhbCAuY29udGVudHtcXG5wYWRkaW5nOjFyZW07XFxuZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLm1vZGFsIGZvb3RlcntcXG5wYWRkaW5nOjFyZW07XFxuICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xcbmZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbi5tb2RhbCBoZWFkZXJ7XFxuICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xcbmZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5tb2RhbCAuY2xvc2VCdXR0b257XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTBweDtcXG4gIHRvcDogMjBweDtcXG59XFxuXFxuLm1vZGFsIC5jb250ZW50e1xcbiAgICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xcbmZvbnQtd2VpZ2h0OiA0MDA7XFxufVwiLFxuICAgICAgICBcImNoaWxkcmVuXCI6IFtdLFxuICAgICAgICBcImlkXCI6IDE5MSxcbiAgICAgICAgXCJjb25maWdcIjogXCJ7fVwiLFxuICAgICAgICBcImlkTWFya3VwXCI6IFwiPGRpdiBjbGFzcz1cXFwibW9kYWxcXFwiIGRhdGEtdXVpZD1cXFwiMFxcXCI+XFxuPGhlYWRlciBkYXRhLXV1aWQ9XFxcIjFcXFwiPlxcbiAgPGgzIGRhdGEtdXVpZD1cXFwiMlxcXCI+Rm9yZ290IFBhc3N3b3JkPC9oMz5cXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XFxcImNsb3NlQnV0dG9uXFxcIiBpZD1cXFwieFxcXCIgZGF0YS11dWlkPVxcXCIzXFxcIj54PC9idXR0b24+XFxuPC9oZWFkZXI+XFxuPHNlY3Rpb24gY2xhc3M9XFxcImNvbnRlbnRcXFwiIGRhdGEtdXVpZD1cXFwiNFxcXCI+PFByaXZhY3lBbmRQb2xpY3kgZGF0YS11dWlkPVxcXCI1XFxcIj48L1ByaXZhY3lBbmRQb2xpY3k+XFxuIFxcbjwvc2VjdGlvbj5cXG48Zm9vdGVyIGRhdGEtdXVpZD1cXFwiNlxcXCI+Zm9vdGVyPC9mb290ZXI+XFxuPC9kaXY+XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwiQ2FuY2VsQnV0dG9uXCIsXG4gICAgICAgIFwibWFya3VwXCI6IFwiPGRpdiBjbGFzc05hbWU9XFxcInZzQnV0dG9uXFxcIj48YnV0dG9uPntzdGF0ZS5jYW5jZWxCdXR0b259PC9idXR0b24+PC9kaXY+XCIsXG4gICAgICAgIFwiZXZlbnRzXCI6IFtdLFxuICAgICAgICBcInN0YXRlXCI6IFwie1xcXCJjYW5jZWxCdXR0b25cXFwiOlxcXCJDYW5jZWxcXFwifVwiLFxuICAgICAgICBcInN0eWxlXCI6IFwiLnZzQnV0dG9ue1xcbmZvbnQtZmFtaWx5OiBCZW50b25TYW5zQm9vayxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcXG5jb2xvcjogcmdiKDAsIDAsIDApO1xcbn1cXG5cXG5cXG4udnNCdXR0b24gYnV0dG9ue1xcbmJvcmRlci1jb2xvcjogI2JmMjE1ZDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQ6ICNlZjVmOTY7XFxuYm9yZGVyOiAxcHggc29saWQ7XFxucGFkZGluZzogLjVyZW0gMnJlbTtcXG59XFxuXFxuLnZzQnV0dG9uIGJ1dHRvbjpob3ZlcntcXG5ib3JkZXItY29sb3I6ICNiZjIxNWQ7XFxufVwiLFxuICAgICAgICBcImNoaWxkcmVuXCI6IFtdLFxuICAgICAgICBcImlkXCI6IDE3NCxcbiAgICAgICAgXCJjb25maWdcIjogXCJ7fVwiLFxuICAgICAgICBcImlkTWFya3VwXCI6IFwiPGRpdiBjbGFzc05hbWU9XFxcInZzQnV0dG9uXFxcIiBkYXRhLXV1aWQ9XFxcIjBcXFwiPjxidXR0b24gZGF0YS11dWlkPVxcXCIxXFxcIj57c3RhdGUuY2FuY2VsQnV0dG9ufTwvYnV0dG9uPjwvZGl2PlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcIlN1Ym1pdEJ1dHRvblwiLFxuICAgICAgICBcIm1hcmt1cFwiOiBcIjxkaXYgY2xhc3NOYW1lPVxcXCJ2c0J1dHRvblxcXCI+PGJ1dHRvbj57c3RhdGUuc3VibWl0QnV0dG9ufTwvYnV0dG9uPjwvZGl2PlwiLFxuICAgICAgICBcImV2ZW50c1wiOiBbXSxcbiAgICAgICAgXCJzdGF0ZVwiOiBcIntcXFwic3VibWl0QnV0dG9uXFxcIjpcXFwiU3VibWl0XFxcIn1cIixcbiAgICAgICAgXCJzdHlsZVwiOiBcIi52c0J1dHRvbntcXG5mb250LWZhbWlseTogQmVudG9uU2Fuc0Jvb2ssSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XFxuY29sb3I6IHJnYigwLCAwLCAwKTtcXG59XFxuXFxuXFxuLnZzQnV0dG9uIGJ1dHRvbntcXG5ib3JkZXItY29sb3I6ICNiZjIxNWQ7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kOiAjZWY1Zjk2O1xcbmJvcmRlcjogMXB4IHNvbGlkO1xcbnBhZGRpbmc6IC41cmVtIDJyZW07XFxufVxcblxcbi52c0J1dHRvbiBidXR0b246aG92ZXJ7XFxuYm9yZGVyLWNvbG9yOiAjYmYyMTVkO1xcbn1cIixcbiAgICAgICAgXCJjaGlsZHJlblwiOiBbXSxcbiAgICAgICAgXCJpZFwiOiAxMzQsXG4gICAgICAgIFwiY29uZmlnXCI6IFwie31cIixcbiAgICAgICAgXCJpZE1hcmt1cFwiOiBcIjxkaXYgY2xhc3NOYW1lPVxcXCJ2c0J1dHRvblxcXCIgZGF0YS11dWlkPVxcXCIwXFxcIj48YnV0dG9uIGRhdGEtdXVpZD1cXFwiMVxcXCI+e3N0YXRlLnN1Ym1pdEJ1dHRvbn08L2J1dHRvbj48L2Rpdj5cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcIm5hbWVcIjogXCJQcml2YWN5QW5kUG9saWN5XCIsXG4gICAgICAgIFwibWFya3VwXCI6IFwiPGRpdiBjbGFzcz1cXFwicHJpdmFjeVBvbGljeVxcXCI+XFxuICBQbGVhc2UgZW50ZXIgdGhlIGVtYWlsIGFkZHJlc3MgeW91IHVzZWQgdG8gY3JlYXRlIHlvdXIgYWNjb3VudCBhbmQgd2Ugd2lsbCBzZW5kIHlvdSBhIGxpbmsgdG8gcmVzZXQgeW91ciBwYXNzd29yZC4gU2VlIFByaXZhY3kgUG9saWN5XFxuPC9kaXY+XCIsXG4gICAgICAgIFwiZXZlbnRzXCI6IFtdLFxuICAgICAgICBcInN0YXRlXCI6IFwie31cIixcbiAgICAgICAgXCJzdHlsZVwiOiBcIi5wcml2YWN5UG9saWN5e1xcbmZvbnQtZmFtaWx5OiBCZW50b25TYW5zQm9vayxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcXG5mb250LXNpemU6IDExcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xcbiAgICBsZXR0ZXItc3BhY2luZzogLjA0ZW07XFxuICAgIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cIixcbiAgICAgICAgXCJjaGlsZHJlblwiOiBbXSxcbiAgICAgICAgXCJpZFwiOiA4NDMsXG4gICAgICAgIFwiY29uZmlnXCI6IFwie31cIixcbiAgICAgICAgXCJpZE1hcmt1cFwiOiBcIjxkaXYgY2xhc3M9XFxcInByaXZhY3lQb2xpY3lcXFwiIGRhdGEtdXVpZD1cXFwiMFxcXCI+XFxuICBQbGVhc2UgZW50ZXIgdGhlIGVtYWlsIGFkZHJlc3MgeW91IHVzZWQgdG8gY3JlYXRlIHlvdXIgYWNjb3VudCBhbmQgd2Ugd2lsbCBzZW5kIHlvdSBhIGxpbmsgdG8gcmVzZXQgeW91ciBwYXNzd29yZC4gU2VlIFByaXZhY3kgUG9saWN5XFxuPC9kaXY+XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwiVGVybXNBbmRTZXJ2aWNlXCIsXG4gICAgICAgIFwibWFya3VwXCI6IFwiPGRpdiBjbGFzcz1cXFwicHJpdmFjeVBvbGljeVxcXCI+XFxue3N0YXRlLnZhcmlhbnR9XFxuPC9kaXY+XCIsXG4gICAgICAgIFwiZXZlbnRzXCI6IFtdLFxuICAgICAgICBcInN0YXRlXCI6IFwie1xcXCJ2YXJpYW50XFxcIjpcXFwiVGhpcyBzaXRlIGlzIHByb3RlY3RlZCBieSByZUNBUFRDSEEgYW5kIHRoZSBHb29nbGUgUHJpdmFjeSBQb2xpY3kgYW5kIFRlcm1zIG9mIFNlcnZpY2UgYXBwbHkuXFxcIn1cIixcbiAgICAgICAgXCJzdHlsZVwiOiBcIi5wcml2YWN5UG9saWN5e1xcbmZvbnQtZmFtaWx5OiBCZW50b25TYW5zQm9vayxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcXG5mb250LXNpemU6IDExcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xcbiAgICBsZXR0ZXItc3BhY2luZzogLjA0ZW07XFxuICAgIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cIixcbiAgICAgICAgXCJjaGlsZHJlblwiOiBbXSxcbiAgICAgICAgXCJpZFwiOiA3OTYsXG4gICAgICAgIFwiY29uZmlnXCI6IFwie31cIixcbiAgICAgICAgXCJpZE1hcmt1cFwiOiBcIjxkaXYgY2xhc3M9XFxcInByaXZhY3lQb2xpY3lcXFwiIGRhdGEtdXVpZD1cXFwiMFxcXCI+XFxue3N0YXRlLnZhcmlhbnR9XFxuPC9kaXY+XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwiRm9ybVwiLFxuICAgICAgICBcIm1hcmt1cFwiOiBcIjxmb3JtIGNsYXNzTmFtZT1cXFwidnNmcm1cXFwiPlxcbjwvZm9ybT5cIixcbiAgICAgICAgXCJldmVudHNcIjogW10sXG4gICAgICAgIFwic3RhdGVcIjogXCJ7fVwiLFxuICAgICAgICBcInN0eWxlXCI6IFwiLnZzZnJte1xcbmhlaWdodDo0MDBweDtcXG53aWR0aDo0MDBweDtcXG59XCIsXG4gICAgICAgIFwiY2hpbGRyZW5cIjogW10sXG4gICAgICAgIFwiaWRcIjogMzkwLFxuICAgICAgICBcImNvbmZpZ1wiOiBcInt9XCIsXG4gICAgICAgIFwiaWRNYXJrdXBcIjogXCI8Zm9ybSBjbGFzc05hbWU9XFxcInZzZnJtXFxcIiBkYXRhLXV1aWQ9XFxcIjBcXFwiPlxcbjwvZm9ybT5cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcIm5hbWVcIjogXCJFbWFpbElucHV0XCIsXG4gICAgICAgIFwibWFya3VwXCI6IFwiPHNwYW4gY2xhc3NOYW1lPVxcXCJlbWFpbElucHV0XFxcIj5cXG48aW5wdXQgaWQ9XFxcImlucHV0XFxcIiBjbGFzc05hbWU9XFxcImVtYWlsXFxcIiB0eXBlPVxcXCJlbWFpbFxcXCIgdmFsdWU9e3N0YXRlLmVtYWlsfSBwbGFjZWhvbGRlcj1cXFwiRW1haWwgQWRkcmVzcyAqXFxcIi8+XFxuPC9zcGFuPlwiLFxuICAgICAgICBcImV2ZW50c1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib25DaGFuZ2VcIixcbiAgICAgICAgICAgICAgICBcInJlZHVjZXJcIjogXCJzdGF0ZS5lbWFpbCA9IGUudGFyZ2V0LnZhbHVlXCIsXG4gICAgICAgICAgICAgICAgXCJwdWJsaXNoYWJsZVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwicHVibGlzaE5hbWVcIjogXCJcIixcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiaW5wdXRcIlxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcInN0YXRlXCI6IFwie31cIixcbiAgICAgICAgXCJzdHlsZVwiOiBcIi5lbWFpbElucHV0IC5lbWFpbHtcXG5wYWRkaW5nOiAuNzVyZW07XFxuYm9yZGVyOiAxcHggc29saWQgI2UxZTFlMTtcXG5mb250LWZhbWlseTogQmVudG9uU2Fuc0Jvb2ssSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcblxcbn1cIixcbiAgICAgICAgXCJjaGlsZHJlblwiOiBbXSxcbiAgICAgICAgXCJpZFwiOiA5OTEsXG4gICAgICAgIFwiY29uZmlnXCI6IFwie31cIixcbiAgICAgICAgXCJpZE1hcmt1cFwiOiBcIjxzcGFuIGNsYXNzTmFtZT1cXFwiZW1haWxJbnB1dFxcXCIgZGF0YS11dWlkPVxcXCIwXFxcIj5cXG48aW5wdXQgaWQ9XFxcImlucHV0XFxcIiBjbGFzc05hbWU9XFxcImVtYWlsXFxcIiB0eXBlPVxcXCJlbWFpbFxcXCIgdmFsdWU9e3N0YXRlLmVtYWlsfSBwbGFjZWhvbGRlcj1cXFwiRW1haWwgQWRkcmVzcyAqXFxcIi8+XFxuPC9zcGFuPlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcIlJlc2V0UGFzc3dvcmRGb3JtXCIsXG4gICAgICAgIFwibWFya3VwXCI6IFwiPGZvcm0+PFRlcm1zQW5kU2VydmljZT48L1Rlcm1zQW5kU2VydmljZT48RW1haWxJbnB1dD48L0VtYWlsSW5wdXQ+PFN1Ym1pdEJ1dHRvbj48L1N1Ym1pdEJ1dHRvbj48Q2FuY2VsQnV0dG9uPjwvQ2FuY2VsQnV0dG9uPjxUZXJtc0FuZFNlcnZpY2U+PFByaXZhY3lBbmRQb2xpY3k+PC9Qcml2YWN5QW5kUG9saWN5PjwvVGVybXNBbmRTZXJ2aWNlPlxcbjwvZm9ybT5cIixcbiAgICAgICAgXCJldmVudHNcIjogW10sXG4gICAgICAgIFwic3RhdGVcIjogXCJ7XFxcInZhcmlhbnRcXFwiOlxcXCJ0ZXh0XFxcIn1cIixcbiAgICAgICAgXCJzdHlsZVwiOiBcImZvcm17XFxuaGVpZ2h0OjQwMHB4O31cIixcbiAgICAgICAgXCJjaGlsZHJlblwiOiBbXSxcbiAgICAgICAgXCJpZFwiOiAzNjQsXG4gICAgICAgIFwiY29uZmlnXCI6IFwie31cIixcbiAgICAgICAgXCJpZE1hcmt1cFwiOiBcIjxmb3JtIGRhdGEtdXVpZD1cXFwiMFxcXCI+PFRlcm1zQW5kU2VydmljZSBkYXRhLXV1aWQ9XFxcIjFcXFwiPjwvVGVybXNBbmRTZXJ2aWNlPjxFbWFpbElucHV0IGRhdGEtdXVpZD1cXFwiMlxcXCI+PC9FbWFpbElucHV0PjxTdWJtaXRCdXR0b24gZGF0YS11dWlkPVxcXCIzXFxcIj48L1N1Ym1pdEJ1dHRvbj48Q2FuY2VsQnV0dG9uIGRhdGEtdXVpZD1cXFwiNFxcXCI+PC9DYW5jZWxCdXR0b24+PFRlcm1zQW5kU2VydmljZSBkYXRhLXV1aWQ9XFxcIjVcXFwiPjxQcml2YWN5QW5kUG9saWN5IGRhdGEtdXVpZD1cXFwiNlxcXCI+PC9Qcml2YWN5QW5kUG9saWN5PjwvVGVybXNBbmRTZXJ2aWNlPlxcbjwvZm9ybT5cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcIm5hbWVcIjogXCJQYWdlXCIsXG4gICAgICAgIFwibWFya3VwXCI6IFwiPGRpdiBjbGFzc05hbWU9XFxcInBhZ2VcXFwiPjxGb3Jnb3RQYXNzd29yZD48L0ZvcmdvdFBhc3N3b3JkPjxSZXNldFBhc3N3b3JkTW9kYWw+PC9SZXNldFBhc3N3b3JkTW9kYWw+PC9kaXY+XCIsXG4gICAgICAgIFwiZXZlbnRzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvbkNsb3NlTW9kYWxcIixcbiAgICAgICAgICAgICAgICBcInJlZHVjZXJcIjogXCJzdGF0ZS5zaG93TW9kYWwgPSBmYWxzZTtcIixcbiAgICAgICAgICAgICAgICBcInB1Ymxpc2hhYmxlXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJwdWJsaXNoTmFtZVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJWYXJpYW50TW9kYWxcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvbkNsb3NlXCIsXG4gICAgICAgICAgICAgICAgXCJyZWR1Y2VyXCI6IFwic3RhdGUuc2hvd01vZGFsID0gZmFsc2U7XCIsXG4gICAgICAgICAgICAgICAgXCJwdWJsaXNoYWJsZVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwicHVibGlzaE5hbWVcIjogXCJcIixcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiUmVzZXRQYXNzd29yZE1vZGFsXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib25QYXNzd29yZEZvcmdvdHRlblwiLFxuICAgICAgICAgICAgICAgIFwicmVkdWNlclwiOiBcInN0YXRlLnNob3dNb2RhbCA9IHRydWU7XCIsXG4gICAgICAgICAgICAgICAgXCJwdWJsaXNoYWJsZVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwicHVibGlzaE5hbWVcIjogXCJcIixcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiRm9yZ290UGFzc3dvcmRcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvblBhc3N3b3JkRm9yZ290dGVuXCIsXG4gICAgICAgICAgICAgICAgXCJyZWR1Y2VyXCI6IFwic3RhdGUuc2hvd01vZGFsID0gdHJ1ZTtcIixcbiAgICAgICAgICAgICAgICBcInB1Ymxpc2hhYmxlXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJwdWJsaXNoTmFtZVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJWYXJpYW50Rm9yZ290UGFzc3dvcmRcIlxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcInN0YXRlXCI6IFwie1xcXCJzaG93TW9kYWxcXFwiOmZhbHNlLFxcXCJsaXN0XFxcIjpbMSwyLDMsNCw1XX1cIixcbiAgICAgICAgXCJzdHlsZVwiOiBcIi5wYWdle1xcbmhlaWdodDogNzAwcHg7XFxud2lkdGg6IDUwMHB4O1xcblxcbn1cIixcbiAgICAgICAgXCJjaGlsZHJlblwiOiBbXSxcbiAgICAgICAgXCJpZFwiOiA4MTUsXG4gICAgICAgIFwiY29uZmlnXCI6IFwie1xcXCJWYXJpYW50TW9kYWxcXFwiOntcXFwic2hvd0hpZGVQcm9wXFxcIjpcXFwic2hvd01vZGFsXFxcIixcXFwib3ZlcnJpZGVcXFwiOmZhbHNlfSxcXFwiRm9yZ290UGFzc3dvcmRCdXR0b25cXFwiOntcXFwic2hvd0hpZGVQcm9wXFxcIjpcXFwiXFxcIixcXFwib3ZlcnJpZGVcXFwiOmZhbHNlfSxcXFwiRm9yZ290UGFzc3dvcmRcXFwiOntcXFwic2hvd0hpZGVQcm9wXFxcIjpcXFwiXFxcIixcXFwib3ZlcnJpZGVcXFwiOmZhbHNlLFxcXCJyZW5kZXJMaXN0UHJvcFxcXCI6XFxcIlxcXCJ9LFxcXCJSZXNldFBhc3N3b3JkTW9kYWxcXFwiOntcXFwic2hvd0hpZGVQcm9wXFxcIjpcXFwic2hvd01vZGFsXFxcIixcXFwib3ZlcnJpZGVcXFwiOmZhbHNlLFxcXCJyZW5kZXJMaXN0UHJvcFxcXCI6XFxcIlxcXCJ9fVwiLFxuICAgICAgICBcImlkTWFya3VwXCI6IFwiPGRpdiBjbGFzc05hbWU9XFxcInBhZ2VcXFwiIGRhdGEtdXVpZD1cXFwiMFxcXCI+PEZvcmdvdFBhc3N3b3JkIGRhdGEtdXVpZD1cXFwiMVxcXCI+PC9Gb3Jnb3RQYXNzd29yZD48UmVzZXRQYXNzd29yZE1vZGFsIGRhdGEtdXVpZD1cXFwiMlxcXCI+PC9SZXNldFBhc3N3b3JkTW9kYWw+PC9kaXY+XCIsXG4gICAgICAgIFwidmFyaWFudHNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwic2hvd01vZGFsXCI6IFwiZmFsc2VcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInNob3dNb2RhbFwiOiBcImZhbHNlXCIsXG4gICAgICAgICAgICAgICAgXCJGb3Jnb3RQYXNzd29yZFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwic2hvd1wiOiBcImZhbHNlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwic2hvd01vZGFsXCI6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJzaG93TW9kYWxcIjogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgXCJGb3Jnb3RQYXNzd29yZFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwic2hvd1wiOiBcImZhbHNlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwic2hvd01vZGFsXCI6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwic2hvd01vZGFsXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwiRm9yZ290UGFzc3dvcmRcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInNob3dcIjogXCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInNob3dNb2RhbFwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIlZhcmlhbnRNb2RhbFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJGb3Jnb3QgUGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJmb290ZXJcIjogXCJDb3B5cmlndHNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJnb29kXCI6IFwiaGlkZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInNob3dNb2RhbFwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIlJlc2V0UGFzc3dvcmRNb2RhbFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJGb3Jnb3QgUGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJmb290ZXJcIjogXCJDb3B5cmlndHNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJzaG93XCI6IFwic2RcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJzaG93TW9kYWxcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJWYXJpYW50Rm9yZ290UGFzc3dvcmRcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInNob3dcIjogXCJmYWxzZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInZhcmlhbnRcIjogXCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwic2hvd01vZGFsXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgICAgIDIsXG4gICAgICAgICAgICAgICAgICAgIDMsXG4gICAgICAgICAgICAgICAgICAgIDQsXG4gICAgICAgICAgICAgICAgICAgIDVcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiRm9yZ290UGFzc3dvcmRcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInNob3dcIjogXCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInNob3dNb2RhbFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwibGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgICAgIDIsXG4gICAgICAgICAgICAgICAgICAgIDMsXG4gICAgICAgICAgICAgICAgICAgIDQsXG4gICAgICAgICAgICAgICAgICAgIDVcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwic2hvd01vZGFsXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgICAgIDIsXG4gICAgICAgICAgICAgICAgICAgIDMsXG4gICAgICAgICAgICAgICAgICAgIDQsXG4gICAgICAgICAgICAgICAgICAgIDVcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiUmVzZXRQYXNzd29yZE1vZGFsXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkZvcmdvdCBQYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICBcImZvb3RlclwiOiBcIkNvcHlyaWd0c1wiLFxuICAgICAgICAgICAgICAgICAgICBcInNob3dcIjogXCJzZFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInNob3dNb2RhbFwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcImxpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgICAgICAyLFxuICAgICAgICAgICAgICAgICAgICAzLFxuICAgICAgICAgICAgICAgICAgICA0LFxuICAgICAgICAgICAgICAgICAgICA1XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcIlJlc2V0UGFzc3dvcmRNb2RhbFwiLFxuICAgICAgICBcIm1hcmt1cFwiOiBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsXFxcIj5cXG48aGVhZGVyPlxcbiAgPGgzPntzdGF0ZS50aXRsZX08L2gzPlxcbiAgICA8YnV0dG9uIGlkPVxcXCJjbG9zZVxcXCIgY2xhc3NOYW1lPVxcXCJjbG9zZUJ1dHRvblxcXCI+eDwvYnV0dG9uPlxcbjwvaGVhZGVyPlxcbjxzZWN0aW9uIGNsYXNzPVxcXCJjb250ZW50XFxcIj48UmVzZXRQYXNzd29yZEZvcm0+PC9SZXNldFBhc3N3b3JkRm9ybT5cXG48L3NlY3Rpb24+XFxuPGZvb3Rlcj57c3RhdGUuZm9vdGVyfTwvZm9vdGVyPlxcbjwvZGl2PlwiLFxuICAgICAgICBcImV2ZW50c1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib25DbGlja1wiLFxuICAgICAgICAgICAgICAgIFwicmVkdWNlclwiOiBcInN0YXRlLnNob3cgPSBcXFwic2RcXFwiO1wiLFxuICAgICAgICAgICAgICAgIFwicHVibGlzaGFibGVcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcInB1Ymxpc2hOYW1lXCI6IFwib25DbG9zZVwiLFxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJjbG9zZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwic3RhdGVcIjogXCJ7XFxcInRpdGxlXFxcIjpcXFwiRm9yZ290IFBhc3N3b3JkXFxcIixcXFwiZm9vdGVyXFxcIjpcXFwiQ29weXJpZ3RzXFxcIn1cIixcbiAgICAgICAgXCJzdHlsZVwiOiBcIi5tb2RhbHtcXG4gIHdpZHRoOjQwMHB4O1xcbiAgZm9udC1zaXplOjIycHg7XFxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5jb2xvcjogYmxhY2s7XFxuICBmb250LWZhbWlseTogQmVudG9uU2Fuc0xpZ2h0LEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6NDAwO1xcbiAgICBsaW5lLWhlaWdodDogMTdweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4wNGVtO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG5cXG59XFxuXFxuLm1vZGFsIGgze1xcbiAgcGFkZGluZzoxcmVtO1xcbmZvbnQtc2l6ZToyNnB4O1xcbmZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5tb2RhbCAuY29udGVudHtcXG5wYWRkaW5nOjFyZW07XFxuZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLm1vZGFsIGZvb3RlcntcXG5wYWRkaW5nOjFyZW07XFxuICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xcbmZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbi5tb2RhbCBoZWFkZXJ7XFxuICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xcbmZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5tb2RhbCAuY2xvc2VCdXR0b257XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTBweDtcXG4gIHRvcDogMjBweDtcXG59XFxuXFxuLm1vZGFsIC5jb250ZW50e1xcbiAgICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xcbmZvbnQtd2VpZ2h0OiA0MDA7XFxufVwiLFxuICAgICAgICBcImNoaWxkcmVuXCI6IFtdLFxuICAgICAgICBcImlkXCI6IDYyNyxcbiAgICAgICAgXCJjb25maWdcIjogXCJ7fVwiLFxuICAgICAgICBcImlkTWFya3VwXCI6IFwiPGRpdiBjbGFzcz1cXFwibW9kYWxcXFwiIGRhdGEtdXVpZD1cXFwiMFxcXCI+XFxuPGhlYWRlciBkYXRhLXV1aWQ9XFxcIjFcXFwiPlxcbiAgPGgzIGRhdGEtdXVpZD1cXFwiMlxcXCI+e3N0YXRlLnRpdGxlfTwvaDM+XFxuICAgIDxidXR0b24gaWQ9XFxcImNsb3NlXFxcIiBjbGFzc05hbWU9XFxcImNsb3NlQnV0dG9uXFxcIiBkYXRhLXV1aWQ9XFxcIjNcXFwiPng8L2J1dHRvbj5cXG48L2hlYWRlcj5cXG48c2VjdGlvbiBjbGFzcz1cXFwiY29udGVudFxcXCIgZGF0YS11dWlkPVxcXCI0XFxcIj48UmVzZXRQYXNzd29yZEZvcm0gZGF0YS11dWlkPVxcXCI1XFxcIj48L1Jlc2V0UGFzc3dvcmRGb3JtPlxcbjwvc2VjdGlvbj5cXG48Zm9vdGVyIGRhdGEtdXVpZD1cXFwiNlxcXCI+e3N0YXRlLmZvb3Rlcn08L2Zvb3Rlcj5cXG48L2Rpdj5cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcIm5hbWVcIjogXCJGYWNlYm9va1wiLFxuICAgICAgICBcIm1hcmt1cFwiOiBcIjxkaXYgY2xhc3NOYW1lPVxcXCJmYWNlYm9va1xcXCI+PEhlbGxvQ29tcG9uZW50PjxNb2RhbD48Rm9yZ290UGFzc3dvcmQ+PC9Gb3Jnb3RQYXNzd29yZD48L01vZGFsPjwvSGVsbG9Db21wb25lbnQ+PC9kaXY+XCIsXG4gICAgICAgIFwiZXZlbnRzXCI6IFtdLFxuICAgICAgICBcInN0YXRlXCI6IFwie31cIixcbiAgICAgICAgXCJzdHlsZVwiOiBcIi5mYWNlYm9va3tcXG5iYWNrZ3JvdW5kLWltYWdlOiRhc3NldHNbJ2ZhY2Vib29rLnBuZyddO1xcbn1cIixcbiAgICAgICAgXCJjaGlsZHJlblwiOiBbXSxcbiAgICAgICAgXCJpZFwiOiAxMixcbiAgICAgICAgXCJjb25maWdcIjogXCJ7fVwiLFxuICAgICAgICBcImlkTWFya3VwXCI6IFwiPGRpdiBjbGFzc05hbWU9XFxcImZhY2Vib29rXFxcIiBkYXRhLXV1aWQ9XFxcIjBcXFwiPjxIZWxsb0NvbXBvbmVudCBkYXRhLXV1aWQ9XFxcIjFcXFwiPjxNb2RhbCBkYXRhLXV1aWQ9XFxcIjJcXFwiPjxGb3Jnb3RQYXNzd29yZCBkYXRhLXV1aWQ9XFxcIjNcXFwiPjwvRm9yZ290UGFzc3dvcmQ+PC9Nb2RhbD48L0hlbGxvQ29tcG9uZW50PjwvZGl2PlwiXG4gICAgfVxuXVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBzYW1wbGU6IHNhbXBsZVxufSIsImltcG9ydCBGb2xkZXIgZnJvbSBcIi4vRm9sZGVyXCI7XG5pbXBvcnQgQ29tcG9uZW50dCBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy9Db21wb25lbnR0XCI7XG5cbmxldCBzZWxlY3RlZENvbXBvbmVudCwgb25TZWxlY3Rpb24sIG9uRm9sZGVyVXBkYXRlLCBvbkRlbGV0ZSwgY29tcG9uZW50cztcblxuZnVuY3Rpb24gaW5pdGlhbGlzZVByb3BzKHByb3BzLCBjaGVja0ZvbGRlcil7XG4gICAgc2VsZWN0ZWRDb21wb25lbnQgPSBwcm9wcy5zZWxlY3RlZENvbXBvbmVudDtcbiAgICBvblNlbGVjdGlvbiA9IHByb3BzLm9uU2VsZWN0aW9uO1xuICAgIGNvbXBvbmVudHMgPSBwcm9wcy5jb21wb25lbnRzO1xuICAgIG9uRm9sZGVyVXBkYXRlID0gY2hlY2tGb2xkZXI7XG4gICAgb25EZWxldGUgPSBwcm9wcy5vbkRlbGV0ZTtcbn1cblxuZnVuY3Rpb24gcHJvY2Vzc0ZvbGRlciAoZm9sZGVyLCBpKXtcbiAgICBsZXQgY29udGVudHMgPSBmb2xkZXIuY29udGVudHM7XG5cbiAgICByZXR1cm4gPEZvbGRlclxuICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICBmb2xkZXI9e2ZvbGRlcn1cbiAgICAgICAgICAgICAgICBjb250ZW50cz17Y29udGVudHMubWFwKCBwcm9jZXNzQ29udGVudCApfVxuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ29tcG9uZW50PXtzZWxlY3RlZENvbXBvbmVudH1cbiAgICAgICAgICAgICAgICBvblNlbGVjdGlvbj17b25TZWxlY3Rpb259XG4gICAgICAgICAgICAgICAgb25Gb2xkZXJVcGRhdGU9e29uRm9sZGVyVXBkYXRlfVxuICAgICAgICAgICAgICAgIG9uRGVsZXRlPXtvbkRlbGV0ZX0vPlxufVxuXG5mdW5jdGlvbiBwcm9jZXNzQ29udGVudCAoY29udGVudCwgaSl7XG5cbiAgICAvLyBDaGVjayBpZiBjb250ZW50IGlzIGEgY29tcG9uZW50IG5hbWUuXG4gICAgaWYodHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIgKXtcblxuICAgICAgICByZXR1cm4gPENvbXBvbmVudHQgXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Y29tcG9uZW50cy5maW5kKGNvbXBvbmVudD0+Y29tcG9uZW50Lm5hbWU9PT1jb250ZW50KX1cbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRDb21wb25lbnQ9e3NlbGVjdGVkQ29tcG9uZW50fVxuICAgICAgICAgICAgICAgICAgICBvblNlbGVjdGlvbkNoYW5nZT17b25TZWxlY3Rpb259XG4gICAgICAgICAgICAgICAgICAgIG9uRGVsZXRlID0ge29uRGVsZXRlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgIH1cbiAgICAvLyBlbHNlIGl0cyBhIGZvbGRlciB0eXBlLlxuICAgIGVsc2Uge1xuICAgICAgICBsZXQgZm9sZGVyID0gY29udGVudDtcbiAgICAgICAgcmV0dXJuIDxGb2xkZXJcbiAgICAgICAgICAgICAgICAgICAgZm9sZGVyPXtmb2xkZXJ9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRzPXtmb2xkZXIuY29udGVudHMubWFwKCBwcm9jZXNzQ29udGVudCApfVxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZENvbXBvbmVudD17c2VsZWN0ZWRDb21wb25lbnR9XG4gICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0aW9uPXtvblNlbGVjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgb25Gb2xkZXJVcGRhdGU9e29uRm9sZGVyVXBkYXRlfVxuICAgICAgICAgICAgICAgICAgICBvbkRlbGV0ZT17b25EZWxldGV9Lz5cbiAgICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGZvbGRlclN0cnVjdHVyZShwcm9wcywgY2hlY2tGb2xkZXIpe1xuICAgIGxldCBmb2xkZXJzID0gcHJvcHMuZm9sZGVycztcblxuICAgIGluaXRpYWxpc2VQcm9wcyhwcm9wcywgY2hlY2tGb2xkZXIpO1xuXG4gICAgcmV0dXJuKGZvbGRlcnMubWFwKHByb2Nlc3NGb2xkZXIpKVxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7c2VsZWN0aW9uQ2hhbmdlZCwgaGFuZGxlRHJhZ30gZnJvbSBcIi4vRXZlbnRzXCI7XG5cbmltcG9ydCB7b25FeHBvcnR9IGZyb20gXCIuLi8uLi9VdGlsaXRpZXMvQ29tcG9uZW50cy9Gb2xkZXJzL0ZvbGRlci9FdmVudHNcIjtcblxuaW1wb3J0ICBcIi4vU3R5bGUuY3NzXCI7XG5cbmNsYXNzIENvbXBvbmVudHQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNlbGVjdGVkQ29tcG9uZW50OiB0aGlzLnByb3BzLnNlbGVjdGVkQ29tcG9uZW50XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVzdG9yZUNsYXNzKGV2ZW50KXtcbiAgICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlQWRkaXRpb25hbHNcIik7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGxldCBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICAgIC8vIFJlbW92ZSB0aGlzLnByb3BzLmluZGV4LCBpbnN0ZWFkIHVzZSB0aGlzIGVsZW1lbnQgaW5zdGFuY2UgaW5kZXguIFJlbW92ZXMgZHVwbGljYXRlIGNvZGVcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZFwiIGRyYWdnYWJsZT1cInRydWVcIiBpZD17cHJvcHMuY29tcG9uZW50Lm5hbWV9IGRhdGEtbmFtZT17cHJvcHMuY29tcG9uZW50Lm5hbWV9IG9uRHJhZ1N0YXJ0PXtoYW5kbGVEcmFnLmJpbmQodGhpcyl9IG9uRHJhZ0VuZD17dGhpcy5yZXN0b3JlQ2xhc3N9PlxuICAgICAgICAgICAgICAgIDxsaSBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lID0ge3Byb3BzLmNvbXBvbmVudC5uYW1lPT09cHJvcHMuc2VsZWN0ZWRDb21wb25lbnQubmFtZSA/IFwic2VsZWN0ZWQgY29tcG9uZW50XCI6IFwiY29tcG9uZW50XCJ9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB7c2VsZWN0aW9uQ2hhbmdlZC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IHtwcm9wcy5pbmRleH0+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbXBvbmVudE5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5jb21wb25lbnQubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPSB7cHJvcHMuaW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25FeHBvcnQuYmluZChudWxsLHByb3BzLmNvbXBvbmVudC5uYW1lKX0+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWZpbGUtZXhwb3J0XCI+PC9pPkV4cG9ydDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA9IHtwcm9wcy5pbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5vbkRlbGV0ZX0+PGkgY2xhc3NOYW1lPVwiZmEgZmEtdHJhc2hcIj48L2k+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC8gZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50dDtcbiIsImV4cG9ydCBmdW5jdGlvbiBzZWxlY3Rpb25DaGFuZ2VkKGUpIHtcbiAgICB0aGlzLnByb3BzLm9uU2VsZWN0aW9uQ2hhbmdlKGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlRHJhZyhlKXtcblxuICAgIGxldCBuYW1lID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtbmFtZVwiKVxuICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiaGlkZUFkZGl0aW9uYWxzXCIpO1xuICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJjb21wb25lbnQtbmFtZVwiLCBuYW1lKTtcbn1cblxud2luZG93LmV2ZW50Q2FsbGJhY2tzID0ge1xuICAgIGhhbmRsZURyYWc6IGhhbmRsZURyYWdcbn07IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1N0eWxlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc2VsZWN0ZWQsIC5ncmVlbiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNDMsIDQzLCA0Myk7XFxufVxcblxcbi5iYWNrZ3JvdW5kIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDY0LCA2NCwgNjQpO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMzMzMztcXG59XFxuXFxuLmNvbXBvbmVudCB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uY29tcG9uZW50IC5jb21wb25lbnROYW1le1xcbiAgICBwYWRkaW5nOjdweDtcXG59XFxuXFxuLnRodW1ibmFpbCB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbn1cXG5cXG4uaGlkZUFkZGl0aW9uYWxzIHNwYW46bm90KC5jb21wb25lbnROYW1lKXtcXG4gICAgZGlzcGxheTpub25lO1xcbn1cXG5cXG4uaGlkZUFkZGl0aW9uYWxzIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cIiwgXCJcIl0pO1xuXG4iLCJpbXBvcnQge3dyaXRlRGF0YX0gZnJvbSBcIi4uL3V0aWxpdGllcy9TdG9yYWdlXCI7XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gb25EZWxldGUoZXZlbnQpIHtcbiAgICBsZXQgY29tcG9uZW50TmFtZSA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaW5uZXJUZXh0LnNwbGl0KFwiXFxuXCIpWzBdO1xuXG4gICAgaWYodGhpcy5zdGF0ZS5jb21wb25lbnRzLmZpbmQoY29tcG9uZW50PT5jb21wb25lbnQubmFtZT09PWNvbXBvbmVudE5hbWUpLmxlbmd0aDwxKXtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBHZXQgYWxsIHRoZSBlbGVtZW50c1xuICAgIGxldCBjb21wb25lbnRzID0gQXJyYXkuZnJvbSh0aGlzLnN0YXRlLmNvbXBvbmVudHMpO1xuICAgIFxuICAgIC8vIEZpbmQgdGhlIGluZGV4IG9mIGVsZW1lbnQgdG8gYmUgZGVsZXRlZC5cbiAgICBsZXQgaW5kZXggPSBjb21wb25lbnRzLmZpbmRJbmRleChjb21wb25lbnQ9PmNvbXBvbmVudC5uYW1lPT09Y29tcG9uZW50TmFtZSlcblxuICAgIC8vIFJlbW92ZSB0aGUgZWxlbWVudCBmcm9tIHRoZSBsaXN0XG4gICAgY29tcG9uZW50cy5zcGxpY2UoaW5kZXgsMSk7XG5cbiAgICAvLyBVcGRhdGUgdGhlIHN0YXRlIHdpdGggbmV3IGVsZW1lbnRzLlxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjb21wb25lbnRzOiBjb21wb25lbnRzXG4gICAgfSlcblxuICAgIC8vIFBlcnNpc3QgdGhlIGNoYW5nZXMuXG4gICAgd3JpdGVEYXRhKFwidWktZWRpdG9yXCIsIGNvbXBvbmVudHMpXG5cbn0iLCIvLyBMaWJyYXJpZXMuXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi9jb25maWdcIjtcblxuY2xhc3MgRHJhZ2dhYmxlQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIGxldCBwYW5lbE5hbWUgPSBgdWktZWRpdG9yLXNldHRpbmdzLWRyYWdnYWJsZS1jb21wb25lbnQtJHt0aGlzLnByb3BzLmNoaWxkcmVuLnByb3BzLnRpdGxlfWA7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHBhbmVsTmFtZSkpIHx8IGNvbmZpZ1twYW5lbE5hbWVdO1xuICAgICAgICB0aGlzLnN0YXRlLmRyYWdnYWJsZT0gXCJmYWxzZVwiXG4gICAgfVxuXG4gICAgbW92ZURpdihlKXtcbiAgICAgICAgaWYoZS50YXJnZXQuaWQ9PT1cIm1vdmVcIil7XG4gICAgICAgICAgICBsZXQgc3RhdGUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUpKTtcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLnRvcCA9IGUucGFnZVkgK1wicHhcIlxuICAgICAgICAgICAgc3RhdGUuc3R5bGUubGVmdCA9IGUucGFnZVggK1wicHhcIlxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgc3R5bGUgOiBzdGF0ZS5zdHlsZVxuICAgICAgICAgICAgfSwoKT0+e1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGB1aS1lZGl0b3Itc2V0dGluZ3MtZHJhZ2dhYmxlLWNvbXBvbmVudC0ke3RoaXMucHJvcHMuY2hpbGRyZW4ucHJvcHMudGl0bGV9YCxKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlKSk7XG4gICAgICAgICAgICB9KSAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZU1pbmltaXNlTWF4aW1pc2UoZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG1pbmltaXNlZDogIXRoaXMuc3RhdGUubWluaW1pc2VkXG4gICAgICAgIH0sKCk9PntcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGB1aS1lZGl0b3Itc2V0dGluZ3MtZHJhZ2dhYmxlLWNvbXBvbmVudC0ke3RoaXMucHJvcHMuY2hpbGRyZW4ucHJvcHMudGl0bGV9YCxKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlKSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgb25Nb3VzZUVudGVyKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGRyYWdnYWJsZTpcInRydWVcIlxuICAgICAgICB9KVxuICAgIH1cblxuICAgIG9uTW91c2VMZWF2ZSgpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGRyYWdnYWJsZTpcImZhbHNlXCJcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGRyYWdnYWJsZT17dGhpcy5zdGF0ZS5kcmFnZ2FibGV9IGlkPVwibW92ZVwiIG9uRHJhZ0VuZD17dGhpcy5tb3ZlRGl2LmJpbmQodGhpcyl9IHN0eWxlPXt0aGlzLnN0YXRlLnN0eWxlfSA+XG4gICAgICAgICAgICAgICAgPHNwYW4gdGl0bGU9XCJNb3ZlXCIgY2xhc3NOYW1lPVwibW92ZS1oYW5kbGVcIiBvbk1vdXNlRG93bj17dGhpcy5vbk1vdXNlRW50ZXIuYmluZCh0aGlzKX0gb25Nb3VzZVVwPXt0aGlzLm9uTW91c2VMZWF2ZS5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYXJyb3dzLWFsdCBmYS14c1wiPjwvaT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm1pbmltaXNlZCA/ICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdGl0bGU9XCJNaW5pbWlzZVwiIGNsYXNzTmFtZT1cIm1heGltaXNlLWhhbmRsZVwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlTWluaW1pc2VNYXhpbWlzZS5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS13aW5kb3ctbWF4aW1pemUgZmEteHNcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiB0aXRsZT1cIk1pbmltaXNlXCIgY2xhc3NOYW1lPVwibWluaW1pc2UtaGFuZGxlXCIgb25DbGljaz17dGhpcy50b2dnbGVNaW5pbWlzZU1heGltaXNlLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXdpbmRvdy1taW5pbWl6ZSBmYS14c1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubWluaW1pc2VkID8gXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBlZGl0b3ItdGFiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aGlzLnByb3BzLmNoaWxkcmVuLnR5cGUubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlbiBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJhZ2dhYmxlQ29tcG9uZW50OyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiI21vdmUgPiBzcGFueyAgXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbiNtb3ZlIC5tb3ZlLWhhbmRsZXtcXG4gICAgY3Vyc29yOiBtb3ZlO1xcbn1cXG5cXG4jbW92ZSAubW92ZS1oYW5kbGUsXFxuI21vdmUgLm1pbmltaXNlLWhhbmRsZSxcXG4jbW92ZSAubWF4aW1pc2UtaGFuZGxlIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDJweDtcXG59XCIsIFwiXCJdKTtcblxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgXCJ1aS1lZGl0b3Itc2V0dGluZ3MtZHJhZ2dhYmxlLWNvbXBvbmVudC1UYWdFeHBsb3JlclwiOiB7XG4gICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgICAgICAgICAgICAgXCJ0b3BcIjogXCI2MDJweFwiLFxuICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogXCI5NTRweFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibWluaW1pc2VkXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJkcmFnZ2FibGVcIjogXCJ0cnVlXCJcbiAgICB9LFxuICAgIFwidWktZWRpdG9yLXNldHRpbmdzLWRyYWdnYWJsZS1jb21wb25lbnQtU3R5bGVFeHBsb3JlclwiOiB7XG4gICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgICAgICAgICAgICAgXCJ0b3BcIjogXCI1ODdweFwiLFxuICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogXCI1NzdweFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibWluaW1pc2VkXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJkcmFnZ2FibGVcIjogXCJ0cnVlXCJcbiAgICB9LFxuICAgIFwidWktZWRpdG9yLXNldHRpbmdzLWRyYWdnYWJsZS1jb21wb25lbnQtRXZlbnRzXCI6IHtcbiAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICAgICAgICAgICAgICBcInRvcFwiOiBcIjM1MnB4XCIsXG4gICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiBcIjEwMzFweFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibWluaW1pc2VkXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJkcmFnZ2FibGVcIjogXCJ0cnVlXCJcbiAgICB9LFxuICAgIFwidWktZWRpdG9yLXNldHRpbmdzLWRyYWdnYWJsZS1jb21wb25lbnQtRWRpdG9yXCI6IHtcbiAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICAgICAgICAgICAgICBcInRvcFwiOiBcIjQ2cHhcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsZWZ0XCI6IFwiMzYycHhcIlxuICAgICAgICB9LFxuICAgICAgICBcIm1pbmltaXNlZFwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwiZHJhZ2dhYmxlXCI6IFwidHJ1ZVwiXG4gICAgfSxcbiAgICBcInVpLWVkaXRvci1zZXR0aW5ncy1kcmFnZ2FibGUtY29tcG9uZW50LUNvbXBvbmVudHNcIjoge1xuICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuICAgICAgICAgICAgICAgIFwidG9wXCI6IFwiNTBweFwiLFxuICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogXCIyMXB4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtaW5pbWlzZWRcIjogZmFsc2UsXG4gICAgICAgICAgICBcImRyYWdnYWJsZVwiOiBcInRydWVcIlxuICAgIH0sXG4gICAgXCJ1aS1lZGl0b3Itc2V0dGluZ3MtZHJhZ2dhYmxlLWNvbXBvbmVudC1QcmV2aWV3XCI6IHtcbiAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICAgICAgICAgICAgICBcInRvcFwiOiBcIjYxNHB4XCIsXG4gICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiBcIjMyN3B4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtaW5pbWlzZWRcIjogZmFsc2UsXG4gICAgICAgICAgICBcImRyYWdnYWJsZVwiOiBcInRydWVcIlxuICAgIH0sXG4gICAgXCJ1aS1lZGl0b3Itc2V0dGluZ3MtZHJhZ2dhYmxlLWNvbXBvbmVudC1Bc3NldHNcIjoge1xuICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuICAgICAgICAgICAgICAgIFwidG9wXCI6IFwiMTA2cHhcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsZWZ0XCI6IFwiMTUwNHB4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtaW5pbWlzZWRcIjogZmFsc2UsXG4gICAgICAgICAgICBcImRyYWdnYWJsZVwiOiBcInRydWVcIlxuICAgIH0sXG4gICAgXCJ1aS1lZGl0b3Itc2V0dGluZ3MtZHJhZ2dhYmxlLWNvbXBvbmVudC1IaXN0b3J5XCI6IHtcbiAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICAgICAgICAgICAgICBcInRvcFwiOiBcIjU5NXB4XCIsXG4gICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiBcIjg2N3B4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtaW5pbWlzZWRcIjogZmFsc2UsXG4gICAgICAgICAgICBcImRyYWdnYWJsZVwiOiBcInRydWVcIlxuICAgIH1cbn0iLCJcbi8vIExpYnJhcmllcy5cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFwiLi9TdHlsZS5jc3NcIjtcbmltcG9ydCB7dXBkYXRlTmFtZSwgdXBkYXRlTWFya3VwLCB1cGRhdGVTdHlsZSwgdXBkYXRlU3RhdGV9IGZyb20gXCIuL1JlZHVjZXJcIjtcblxuaW1wb3J0IHtyZWFkQ29tcG9uZW50fSBmcm9tIFwiLi4vdXRpbGl0aWVzL1N0b3JhZ2VcIjtcblxuLyoqXG4gKiBTaG93cyBDb25maWd1cmF0b3Igb24gc2VsZWN0IG9mIHZhbGlkIGNoaWxkIGNvbXBvbmVudCBuYW1lIGluIHRoZSBtYXJrdXAgYW5kIG1vdXNlT3V0IGZyb20gbWFya3VwXG4gKiBIaWRlcyBDb25maWd1cmF0b3Igb24gbW91c2VMZWF2ZSBmcm9tIHRoZSBlZGl0b3IuXG4gKi9cbmNsYXNzIEVkaXRvciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB2YXIgY29tcG9uZW50ID0gcmVhZENvbXBvbmVudCh0aGlzLnByb3BzLm5hbWUpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBuYW1lOiBjb21wb25lbnQ/IGNvbXBvbmVudC5uYW1lIDogXCJcIixcbiAgICAgICAgICAgIG1hcmt1cDogY29tcG9uZW50PyBjb21wb25lbnQubWFya3VwIDogXCJcIixcbiAgICAgICAgICAgIHN0YXRlOiBjb21wb25lbnQ/IGNvbXBvbmVudC5zdGF0ZSA6IFwiXCIsXG4gICAgICAgICAgICBzdHlsZTogY29tcG9uZW50PyBjb21wb25lbnQuc3R5bGUgOiBcIlwiXG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBzYXZlRWxlbWVudCAoKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25TYXZlKHtcbiAgICAgICAgICAgIG5hbWU6IHRoaXMuc3RhdGUubmFtZSxcbiAgICAgICAgICAgIG1hcmt1cDogdGhpcy5zdGF0ZS5tYXJrdXAsXG4gICAgICAgICAgICBzdHlsZTogdGhpcy5zdGF0ZS5zdHlsZSxcbiAgICAgICAgICAgIHN0YXRlOiB0aGlzLnN0YXRlLnN0YXRlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBsZXQgbmFtZT0gdGhpcy5zdGF0ZS5uYW1lO1xuICAgICAgICBsZXQgbWFya3VwPSB0aGlzLnN0YXRlLm1hcmt1cDtcbiAgICAgICAgbGV0IHN0eWxlPSB0aGlzLnN0YXRlLnN0eWxlO1xuICAgICAgICBsZXQgc3RhdGU9IHRoaXMuc3RhdGUuc3RhdGU7XG4gICAgICAgIC8vIFRPRE86IFNob3VsZCBwYXNzIHRoZSBjdXJyZW50IGRhdGEuIEluc3RlYWQgb2YgYWNjZXNzaW5nIGl0IGZyb20gZ2xvYmFsXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBlZGl0b3ItdGFiXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPkVkaXRvcjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPkNvbXBvbmVudCBOYW1lPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgZWxlbWVudCBuYW1lXCIgdmFsdWU9e25hbWV9IG9uQ2hhbmdlPXt1cGRhdGVOYW1lLmJpbmQodGhpcyl9IGlkPVwiZWxlbWVudE5hbWVcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zYXZlRWxlbWVudC5iaW5kKHRoaXMpfSBpZD1cInNhdmVcIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtc2F2ZVwiPjwvaT5TYXZlPC9idXR0b24+ICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5Db21wb25lbnQgTWFya3VwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSB2YWx1ZT17bWFya3VwfSBvbkNoYW5nZT17dXBkYXRlTWFya3VwLmJpbmQodGhpcyl9IGlkPVwiZWxlbWVudE1hcmt1cFwiIHRpdGxlPVwiSUQgaXMgbWFuZGF0b3J5IGZvciBldmVudHNcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5Db21wb25lbnQgQ1NTPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSB2YWx1ZT17c3R5bGV9IG9uQ2hhbmdlPXt1cGRhdGVTdHlsZS5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPkNvbXBvbmVudCBTdGF0ZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgdmFsdWU9e3N0YXRlfSBvbkNoYW5nZT17dXBkYXRlU3RhdGUuYmluZCh0aGlzKX0gaWQ9XCJlbGVtZW50U3RhdGVcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1N0eWxlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaGlkZGVue1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cIiwgXCJcIl0pO1xuXG4iLCIvLyBQdWJsaWMuXG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVOYW1lIChldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBuYW1lOiBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlXG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZU1hcmt1cCAoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbWFya3VwOiBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlXG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uICB1cGRhdGVTdHlsZSAoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc3R5bGU6IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWVcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlU3RhdGUgKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHN0YXRlOiBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlXG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb3BlcnR5Q29udGFpbmluZ1Byb3BzKG9iail7XG4gICAgLy8gRmV0Y2ggbGlzdCBvZiBwcm9wcyBmcm9tIGNoaWxkLlxuICAgIGxldCBwcm9wcyA9IFtdO1xuICAgIGxldCBzdGF0ZTtcbiAgICB0cnl7XG4gICAgICAgIHN0YXRlID0gSlNPTi5wYXJzZShvYmouc3RhdGUpO1xuICAgIH1cbiAgICBjYXRjaChlKXtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOiBDaGlsZCBzdGF0ZSBpcyBhbiBpbnZhbGlkIGpzb24sIHRyeSBhbiBvbmxpbmUgdmFsaWRhdG9yIG9uIGJlbG93IHN0cmluZ1wiKVxuICAgICAgICBjb25zb2xlLmxvZyhjaGlsZC5zdGF0ZSk7XG4gICAgfVxuICAgIGZvcihsZXQgcHJvcGVydHkgaW4gc3RhdGUpe1xuICAgICAgICBpZihzdGF0ZVtwcm9wZXJ0eV0uaW5jbHVkZXMoXCJwcm9wXCIpKXtcbiAgICAgICAgICAgIHByb3BzLnB1c2gocHJvcGVydHkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wcztcbn0iLCIvLyBMaWJyYXJpZXMuXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuLy8gRGVwZW5kZW5jaWVzLlxuXG5cbi8vIENvbXBvbmVudHMuIFxuXG5pbXBvcnQgQ29uZmlndXJhdG9yIGZyb20gXCIuL0NvbmZpZ3VyYXRvclwiO1xuaW1wb3J0IE5vZGVzIGZyb20gXCIuLi91dGlsaXRpZXMvQ29tcG9uZW50cy9Ob2Rlc1wiO1xuaW1wb3J0IEV2ZW50IGZyb20gXCIuL0V2ZW50XCI7XG5pbXBvcnQgZ2V0TWVzc2FnZXMgZnJvbSBcIi4vTWVzc2FnZXNcIjtcblxuLy8gU3R5bGVzLlxuXG5pbXBvcnQgXCIuL1N0eWxlLmNzc1wiO1xuXG4vLyBSZWR1Y2Vycy5cblxuaW1wb3J0IHsgdXBkYXRlRXZlbnQsIHNlbGVjdGVkVGFnQ2hhbmdlZCwgZGVsZXRlRXZlbnQsIHVwZGF0ZUNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi9SZWR1Y2VyXCI7XG5cblxuLy8gVXRpbHMuXG5cbmltcG9ydCB7IGdldE5vZGVUcmVlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9nZXQtbm9kZS10cmVlLmpzXCI7XG5pbXBvcnQgeyByZWFkRGF0YSB9IGZyb20gXCIuLi91dGlsaXRpZXMvU3RvcmFnZVwiO1xuXG5jbGFzcyBFdmVudHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkVGFnID0gdGhpcy5wcm9wcy5zZWxlY3RlZFRhZztcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMucHJvcHMuY29tcG9uZW50O1xuXG4gICAgICAgIC8vIFJlcG9ydCBpZiBubyBjb21wb25lbnQgaXMgY3JlYXRlZC5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY29tcG9uZW50cy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBldmVudHMtdGFiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5FdmVudHM8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHA+TG9va3MgbGlrZSB5b3UgZG8gbm90IGhhdmUgYW55IFdlYiBjb21wb25lbnQgY3JlYXRlZC4gVHlwZSBzb21lIFwiaHRtbFwiIG9uIHRoZSByaWdodCBcIkVkaXRvclwiIHRhYjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXBvcnQgaWYgbm8gY29tcG9uZW50IGlzIHNlbGVjdGVkLlxuICAgICAgICBpZiAoY29tcG9uZW50Lm5hbWUgPT09IHVuZGVmaW5lZCAmJiB0aGlzLnN0YXRlLmNvbXBvbmVudHMubGVuZ3RoICE9IDApIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZXZlbnRzLXRhYlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+RXZlbnRzPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwPkxvb2tzIGxpa2UgeW91IGhhdmUgbm90IHNlbGVjdGVkIGFueSBjb21wb25lbnQuIENsaWNrIG9uIGFueSBvZiB0aGUgY29tcG9uZW50IGluIHRoZSBsZWZ0IHBhbmUuPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9XG5cblxuICAgICAgICBsZXQgbm9kZVRyZWUgPSBnZXROb2RlVHJlZShjb21wb25lbnQsIGNvbXBvbmVudC5tYXJrdXAsIGNvbXBvbmVudC5zdHlsZSwgSlNPTi5wYXJzZShjb21wb25lbnQuc3RhdGUpLCBjb21wb25lbnQuZXZlbnRzKTtcblxuICAgICAgICAvLyBSZXBvcnQgZXJyb3IuXG4gICAgICAgIGlmIChub2RlVHJlZS5lcnJvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0TWVzc2FnZXMobm9kZVRyZWUuZXJyb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVwb3J0IGVycm9yIGlmIGNvbXBvbmVudCBpcyBub3QgXG4gICAgICAgIGlmIChub2RlVHJlZS5yZXN1bHQgPT09IHVuZGVmaW5lZCAmJiB0aGlzLnN0YXRlLmNvbXBvbmVudHMubGVuZ3RoICE9IDApIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZXZlbnRzLXRhYlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+RXZlbnRzPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRUYWcgPSB0aGlzLnN0YXRlLnNlbGVjdGVkVGFnIHx8IFwiXCI7XG4gICAgICAgIGxldCBldmVudHNPZlNlbGVjdGVkVGFnLCBjb25maWd1cmF0b3IsIGV2ZW50TmFtZXMgPSBbXTtcbiAgICAgICAgLy8gQ2hlY2sgaWYgaXQgaXMgYSBjaGlsZCBjb21wb25lbnRcbiAgICAgICAgaWYgKHNlbGVjdGVkVGFnLmluY2x1ZGVzKFwiY2hpbGQtY29tcG9uZW50LVwiKSkge1xuICAgICAgICAgICAgLy8gR2V0IGxpc3Qgb2YgY29tcG9uZW50cy5cbiAgICAgICAgICAgIGxldCBjb21wb25lbnRzID0gcmVhZERhdGEoXCJ1aS1lZGl0b3JcIik7XG5cbiAgICAgICAgICAgIC8vIEdldCBjaGlsZCBjb21wb25lbnQgbmFtZSBmcm9tIHRoZSBzZWxlY3RlZCB0YWcuXG4gICAgICAgICAgICBsZXQgY2hpbGRDb21wb25lbnROYW1lID0gc2VsZWN0ZWRUYWcuc3BsaXQoXCJjaGlsZC1jb21wb25lbnQtXCIpWzFdO1xuXG4gICAgICAgICAgICAvLyBGaW5kIHRoZSBjaGlsZCBjb21wb25lbnQgZnJvbSB0aGUgbGlzdCBvZiBjb21wb25lbnRzLlxuICAgICAgICAgICAgbGV0IGNoaWxkQ29tcG9uZW50ID0gY29tcG9uZW50cy5maW5kKGNvbXBvbmVudCA9PiBjb21wb25lbnQubmFtZSA9PT0gY2hpbGRDb21wb25lbnROYW1lKTtcblxuICAgICAgICAgICAgLy8gRmluZCBldmVudHMgdGhhdCBhcmUgcHVibGlzaGFibGUgZnJvbSB0aGUgY2hpbGQgY29tcG9uZW50LlxuICAgICAgICAgICAgZXZlbnROYW1lcyA9IGNoaWxkQ29tcG9uZW50LmV2ZW50cy5maWx0ZXIoZXZlbnQgPT4gZXZlbnQucHVibGlzaGFibGUgPT09IHRydWUpLm1hcChwdWJsaXNoYWJsZUV2ZW50ID0+IHB1Ymxpc2hhYmxlRXZlbnQucHVibGlzaE5hbWUpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBDcmVhdGUgZXZlbnQgdmlldyBmb3IgbGlzdCBvZiBhbGwgZXZlbnRzXG4gICAgICAgICAgICBsZXQgZXZlbnRzID0gY29tcG9uZW50LmV2ZW50cy5maWx0ZXIoZXZlbnQ9PmV2ZW50TmFtZXMuZmluZChldmVudE5hbWUgPT5ldmVudE5hbWUgID09PSBldmVudC5uYW1lICYmIGV2ZW50LmlkPT09Y2hpbGRDb21wb25lbnQubmFtZSkpXG4gICAgICAgICAgICBldmVudHMgPSBldmVudHMubWFwKChldmVudCwgaW5kZXgpID0+IDxFdmVudCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMDApfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fSBldmVudD17ZXZlbnR9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFRhZ0lEPXtzZWxlY3RlZFRhZ30gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50TmFtZXM9e2V2ZW50TmFtZXN9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNhdmU9e3VwZGF0ZUV2ZW50LmJpbmQodGhpcyl9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVFdmVudD17ZGVsZXRlRXZlbnQuYmluZCh0aGlzKX0gLz4pO1xuXG4gICAgICAgICAgICAvLyBGaWx0ZXIgb3V0IGV2ZW50cyB0aGF0IGFyZSBub3QgcGFydCBvZiBzZWxlY3RlZFRhZ1xuICAgICAgICAgICAgZXZlbnRzT2ZTZWxlY3RlZFRhZyA9IHNlbGVjdGVkVGFnID8gZXZlbnRzIDogbnVsbDtcblxuICAgICAgICAgICAgY29uZmlndXJhdG9yID0gPENvbmZpZ3VyYXRvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e01hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwMCl9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlQ29uZmlndXJhdGlvbi5iaW5kKHRoaXMpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGROYW1lPXtjaGlsZENvbXBvbmVudE5hbWV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ9e2NvbXBvbmVudH0gLz47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBldmVudHMgPSBjb21wb25lbnQuZXZlbnRzXG4gICAgICAgICAgICAgICAgLm1hcCgoZXZlbnQsIGluZGV4KSA9PiA8RXZlbnQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17TWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMDAwKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50PXtldmVudH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVGFnSUQ9e3NlbGVjdGVkVGFnfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnROYW1lcz17ZXZlbnROYW1lc30gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2F2ZT17dXBkYXRlRXZlbnQuYmluZCh0aGlzKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUV2ZW50PXtkZWxldGVFdmVudC5iaW5kKHRoaXMpfSAvPik7XG4gICAgICAgICAgICBldmVudHNPZlNlbGVjdGVkVGFnID0gc2VsZWN0ZWRUYWcgPyBldmVudHMuZmlsdGVyKGV2ZW50ID0+IHNlbGVjdGVkVGFnLmluY2x1ZGVzKGV2ZW50LnByb3BzLmV2ZW50LmlkKSkgOiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZXZlbnRzLXRhYlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+RXZlbnRzPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Tm9kZXMgbm9kZT17bm9kZVRyZWUucmVzdWx0fSBvblNlbGVjdGVkVGFnQ2hhbmdlZD17c2VsZWN0ZWRUYWdDaGFuZ2VkLmJpbmQodGhpcyl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7Y29uZmlndXJhdG9yfVxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEV2ZW50c1xuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV4aXN0aW5nIEV2ZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXZlbnRzT2ZTZWxlY3RlZFRhZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmV3IEV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFdmVudCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjb21wb25lbnQuZXZlbnRzLmxlbmd0aH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50TmFtZXM9e2V2ZW50TmFtZXN9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFRhZ0lEPXtzZWxlY3RlZFRhZ30gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2F2ZT17dXBkYXRlRXZlbnQuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50cztcbiIsIi8vIExpYnJhcmllcy5cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgXCIuL1N0eWxlLmNzc1wiXG5cblxuY2xhc3MgQ29uZmlndXJhdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgbGV0IGNvbmZpZyA9IEpTT04ucGFyc2UodGhpcy5wcm9wcy5wYXJlbnQuY29uZmlnKVt0aGlzLnByb3BzLmNoaWxkTmFtZV0gfHwgeyBvdmVycmlkZTogZmFsc2UsIHNob3dIaWRlUHJvcDogXCJcIn1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBvdmVycmlkZTogY29uZmlnLm92ZXJyaWRlLFxuICAgICAgICAgICAgc2hvd0hpZGVQcm9wOiBjb25maWcuc2hvd0hpZGVQcm9wLFxuICAgICAgICAgICAgcmVuZGVyTGlzdFByb3A6IGNvbmZpZy5yZW5kZXJMaXN0UHJvcCB8fCBcIlwiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnZWxPdmVycmlkZSgpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG92ZXJyaWRlOiAhdGhpcy5zdGF0ZS5vdmVycmlkZVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoe1xuICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgc2hvd0hpZGVQcm9wOiB0aGlzLnN0YXRlLnNob3dIaWRlUHJvcCxcbiAgICAgICAgICAgICAgICBvdmVycmlkZTogIXRoaXMuc3RhdGUub3ZlcnJpZGVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGlsZE5hbWU6IHRoaXMucHJvcHMuY2hpbGROYW1lLFxuICAgICAgICAgICAgcGFyZW50TmFtZTogdGhpcy5wcm9wcy5wYXJlbnQubmFtZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaG93SGlkZVByb3AoZSl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2hvd0hpZGVQcm9wOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlckxpc3RQcm9wKGUpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJlbmRlckxpc3RQcm9wOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHNhdmVDb25maWcoKXtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7XG4gICAgICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgICAgICBzaG93SGlkZVByb3A6IHRoaXMuc3RhdGUuc2hvd0hpZGVQcm9wLFxuICAgICAgICAgICAgICAgIG92ZXJyaWRlOiB0aGlzLnN0YXRlLm92ZXJyaWRlLFxuICAgICAgICAgICAgICAgIHJlbmRlckxpc3RQcm9wOiB0aGlzLnN0YXRlLnJlbmRlckxpc3RQcm9wXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hpbGROYW1lOiB0aGlzLnByb3BzLmNoaWxkTmFtZSxcbiAgICAgICAgICAgIHBhcmVudE5hbWU6IHRoaXMucHJvcHMucGFyZW50Lm5hbWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGxldCBzdGF0ZSA9IEpTT04ucGFyc2UodGhpcy5wcm9wcy5wYXJlbnQuc3RhdGUpO1xuICAgICAgICBsZXQgc3RhdGVQcm9wcyA9IE9iamVjdC5rZXlzKHN0YXRlKTtcblxuICAgICAgICBsZXQgYm9vbGVhblByb3BzID0gc3RhdGVQcm9wcy5maWx0ZXIocHJvcD0+dHlwZW9mIHN0YXRlW3Byb3BdID09PSBcImJvb2xlYW5cIikubWFwKChwcm9wLGkpPT48b3B0aW9uIGtleT17aX0gdmFsdWU9e3Byb3B9Pjwvb3B0aW9uPik7XG4gICAgICAgIGxldCBsaXN0UHJvcHMgPSBzdGF0ZVByb3BzLmZpbHRlcihwcm9wPT5BcnJheS5pc0FycmF5KHN0YXRlW3Byb3BdKSkubWFwKChwcm9wLGkpPT48b3B0aW9uIGtleT17aX0gdmFsdWU9e3Byb3B9Pjwvb3B0aW9uPik7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+Q2hpbGQgQ29uZmlndXJhdGlvbnM8L2Rpdj5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5PdmVycmlkZSBzdGF0ZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9e3RoaXMudG9nZ2VsT3ZlcnJpZGUuYmluZCh0aGlzKX0gY2hlY2tlZD17dGhpcy5zdGF0ZS5vdmVycmlkZSA/IFwiY2hlY2tlZFwiIDogXCJcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkNob29zZSBTaG93L0hpZGUgLSBTdGF0ZSBwcm9wZXJ0eTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbGlzdD1cImJvb2xlYW5Qcm9wc1wiIHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMuc2hvd0hpZGVQcm9wLmJpbmQodGhpcyl9IHZhbHVlPXt0aGlzLnN0YXRlLnNob3dIaWRlUHJvcH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zYXZlQ29uZmlnLmJpbmQodGhpcyl9PjxpIGNsYXNzTmFtZT1cImZhcyBmYS1zYXZlXCI+PC9pPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRhdGFsaXN0IGlkPVwiYm9vbGVhblByb3BzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Jvb2xlYW5Qcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGF0YWxpc3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCB0aXRsZT1cIkRlc2NyaXB0aW9uOiBUaGUgYXJyYXkgaXRlbSBzaG91bGQgcmVmbGVjdCBpbml0aWFsIHN0YXRlIG9mIHRoZSBjb21wb25lbnQgZm9yIGl0IHRvIHJlbmRlciBhcyBleHBlY3RlZC5cIj5DaG9vc2UgQXJyYXkgbGlzdCAtIFN0YXRlIHByb3BlcnR5PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBsaXN0PVwibGlzdFByb3BzXCIgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5yZW5kZXJMaXN0UHJvcC5iaW5kKHRoaXMpfSB2YWx1ZT17dGhpcy5zdGF0ZS5yZW5kZXJMaXN0UHJvcH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zYXZlQ29uZmlnLmJpbmQodGhpcyl9PjxpIGNsYXNzTmFtZT1cImZhcyBmYS1zYXZlXCI+PC9pPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRhdGFsaXN0IGlkPVwibGlzdFByb3BzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xpc3RQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGF0YWxpc3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpZ3VyYXRvcjtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1N0eWxlLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1N0eWxlLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNvbnNvbGV7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgcmlnaHQ6IDE1MHB4O1xcbn1cXG5cXG4uZXJyb3Ige1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4uZXZlbnQgeyBcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMzMzMzMzO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNjQsIDY0LCA2NCk7XFxufVxcblxcbi5pbmZvIHtcXG4gICAgY29sb3I6IHllbGxvd2dyZWVuO1xcbn1cXG5cXG5sYWJlbCB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5jb25maWd1cmF0b3Ige1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNjQsIDY0LCA2NCk7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XCIsIFwiXCJdKTtcblxuIiwiLy8gTGlicmFyaWVzLlxuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIE5vZGVzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICB2YXIgbm9kZSA9IHRoaXMucHJvcHMubm9kZTtcblxuXG4gICAgICAgIGlmKCFub2RlKXtcbiAgICAgICAgICAgIHJldHVybiAoPHNwYW4+bnVsbDwvc3Bhbj4pXG4gICAgICAgIH1cbiAgICAgICAgaWYodHlwZW9mIG5vZGU9PT1cInN0cmluZ1wiKXtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaT57bm9kZX08L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaWQgPSBub2RlLnByb3BzLmlkID8gKFwiLVwiK25vZGUucHJvcHMuaWQpIDogXCJcIjtcblxuICAgICAgICAvLyBDaGVjayBpZiBpdCBjb250YWlucyBjaGlsZHJlbi5cbiAgICAgICAgaWYobm9kZS5wcm9wcyAmJiBBcnJheS5pc0FycmF5KG5vZGUucHJvcHMuY2hpbGRyZW4pKXtcbiAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9IG5vZGUucHJvcHMuY2hpbGRyZW4ubWFwKChjaGlsZCxpbmRleCk9PjxOb2RlcyBrZXk9e2luZGV4fSBub2RlPXtjaGlsZH0gb25TZWxlY3RlZFRhZ0NoYW5nZWQ9e3RoaXMucHJvcHMub25TZWxlY3RlZFRhZ0NoYW5nZWR9Lz4pO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2VsZWN0ZWRFbGVtZW50XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMub25TZWxlY3RlZFRhZ0NoYW5nZWR9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtub2RlLnR5cGUgKyBpZH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAge25vZGUudHlwZSAraWR9XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiBub2RlIGNvbnRhaW5zIG9ubHkgb25lIGNoaWxkcmVuLCBqc3ggZ2V0IHRyYW5zcGlsZWQgdG8gb2JqZWN0IHJhdGhlciB0aGFuIGFycmF5LlxuICAgICAgICBlbHNlIGlmKHR5cGVvZiBub2RlLnByb3BzLmNoaWxkcmVuID09PSBcIm9iamVjdFwiKXtcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IG5vZGUucHJvcHMuY2hpbGRyZW47XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZWxlY3RlZEVsZW1lbnRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wcm9wcy5vblNlbGVjdGVkVGFnQ2hhbmdlZH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyhub2RlLnR5cGUubmFtZSB8fCBub2RlLnR5cGUpK2lkfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7KG5vZGUudHlwZS5uYW1lIHx8IG5vZGUudHlwZSl9XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxOb2RlcyBrZXk9e2luZGV4fSBub2RlPXtjaGlsZH0gb25TZWxlY3RlZFRhZ0NoYW5nZWQ9e3RoaXMucHJvcHMub25TZWxlY3RlZFRhZ0NoYW5nZWR9Lz5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBuZXN0ZWQgY29tcG9uZW50LlxuICAgICAgICBlbHNlIGlmKHR5cGVvZiBub2RlLnR5cGUgPT09IFwiZnVuY3Rpb25cIil7XG4gICAgICAgICAgICByZXR1cm4gKDx1bD5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNlbGVjdGVkRWxlbWVudFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1wiY2hpbGQtY29tcG9uZW50LVwiK25vZGUudHlwZS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMub25TZWxlY3RlZFRhZ0NoYW5nZWR9IFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAge25vZGUudHlwZS5uYW1lfVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2VsZWN0ZWRFbGVtZW50XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bm9kZS50eXBlK2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMub25TZWxlY3RlZFRhZ0NoYW5nZWR9IFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAge25vZGUudHlwZSAraWR9XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5vZGVzOyIsIi8vIExpYnJhcmllcy5cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgXCIuL1N0eWxlLmNzc1wiXG5cbi8vIENvbXBvbmVudHMuXG5cbmltcG9ydCBnZXRNZXNzYWdlcyBmcm9tIFwiLi9NZXNzYWdlc1wiO1xuXG4vLyBSZWR1Y2Vycy4gXG5cbmltcG9ydCB7dXBkYXRlRXZlbnROYW1lLCB1cGRhdGVFdmVudFR5cGUsIHVwZGF0ZVB1Ymxpc2hOYW1lLCB1cGRhdGVSZWR1Y2VyfSBmcm9tIFwiLi9SZWR1Y2VyXCI7XG5cbi8vIEV2ZW50cy5cblxuaW1wb3J0IHtwdWJsaXNoRXZlbnQsIGRlbGV0ZUV2ZW50fSBmcm9tICcuL0V2ZW50cyc7XG5cbmNsYXNzIEV2ZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBuYW1lOiB0aGlzLnByb3BzLmV2ZW50ID8gdGhpcy5wcm9wcy5ldmVudC5uYW1lIDogXCJcIixcbiAgICAgICAgICAgIHJlZHVjZXI6IHRoaXMucHJvcHMuZXZlbnQgPyB0aGlzLnByb3BzLmV2ZW50LnJlZHVjZXIgOiBcIlwiLFxuICAgICAgICAgICAgcHVibGlzaGFibGU6IHRoaXMucHJvcHMuZXZlbnQgPyB0aGlzLnByb3BzLmV2ZW50LnB1Ymxpc2hhYmxlIDogXCJcIixcbiAgICAgICAgICAgIHB1Ymxpc2hOYW1lOiB0aGlzLnByb3BzLmV2ZW50ID8gdGhpcy5wcm9wcy5ldmVudC5wdWJsaXNoTmFtZSA6IFwiXCIsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWRUYWdJRCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0TWVzc2FnZXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwdWJsaXNoTmFtZSA9IHRoaXMuc3RhdGUucHVibGlzaGFibGU/IDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt1cGRhdGVQdWJsaXNoTmFtZS5iaW5kKHRoaXMpfSB2YWx1ZT17dGhpcy5zdGF0ZS5wdWJsaXNoTmFtZX0gcGxhY2Vob2xkZXI9XCJFbnRlciBldmVudCBwdWJsaXNoIG5hbWUgZm9yIG90aGVyIGNvbXBvbmVudHMgdG8gc3Vic2NyaWJlIHRvXCIvPiA6IG51bGw7XG4gICAgICAgIGxldCBldmVudE5hbWVzID0gdGhpcy5wcm9wcy5ldmVudE5hbWVzLm1hcChldmVudE5hbWU9PjxvcHRpb24gdmFsdWU9e2V2ZW50TmFtZX0+PC9vcHRpb24+KVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IGxpc3Q9XCJicm93c2Vyc1wiIHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3VwZGF0ZUV2ZW50TmFtZS5iaW5kKHRoaXMpfSB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfSBwbGFjZWhvbGRlcj1cIkVudGVyIGV2ZW50IG5hbWVcIiB0aXRsZT1cIkV2ZW50IE5hbWVcIi8+XG4gICAgICAgICAgICAgICAgPGRhdGFsaXN0IGlkPVwiYnJvd3NlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAge2V2ZW50TmFtZXN9XG4gICAgICAgICAgICAgICAgPC9kYXRhbGlzdD5cbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBvbkNoYW5nZT17dXBkYXRlUmVkdWNlci5iaW5kKHRoaXMpfSB2YWx1ZT17dGhpcy5zdGF0ZS5yZWR1Y2VyfSBwbGFjZWhvbGRlcj1cIkVudGVyIHN0YXRlIHJlZHVjZXJcIiB0aXRsZT1cIlJlZHVjZXJcIi8+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9e3VwZGF0ZUV2ZW50VHlwZS5iaW5kKHRoaXMpfSBjaGVja2VkPXt0aGlzLnN0YXRlLnB1Ymxpc2hhYmxlPyBcImNoZWNrZWRcIjogXCJcIn0vPlxuICAgICAgICAgICAgICAgICAgICBQdWJsaXNoYWJsZVxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICB7cHVibGlzaE5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cHVibGlzaEV2ZW50LmJpbmQodGhpcyl9IGlkPVwic2F2ZUV2ZW50XCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNhdmVcIj48L2k+U2F2ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2RlbGV0ZUV2ZW50LmJpbmQodGhpcyl9IGlkPVwiZGVsZXRlRXZlbnRcIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtdHJhc2hcIj48L2k+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50O1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1N0eWxlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY29uc29sZXtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICByaWdodDogMTUwcHg7XFxufVxcblxcbi5lcnJvciB7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbi5ldmVudCB7IFxcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzMzMzMzM7XFxuICAgIGJhY2tncm91bmQ6IHJnYig2NCwgNjQsIDY0KTtcXG59XFxuXFxuLmluZm8ge1xcbiAgICBjb2xvcjogeWVsbG93Z3JlZW47XFxufVxcblxcbmxhYmVsIHtcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuXFxuLmV2ZW50IGlucHV0IHtcXG4gICAgbWFyZ2luLWxlZnQ6MHB4O1xcbn1cXG5cXG4uZXZlbnQgdGV4dGFyZWEge1xcbiAgICBtYXJnaW4tdG9wOiA4cHg7XFxufVwiLCBcIlwiXSk7XG5cbiIsImltcG9ydCBNZXNzYWdlc0NvbXBvbmVudCBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL0NvbXBvbmVudHMvTWVzc2FnZXNDb21wb25lbnRcIjtcblxuZnVuY3Rpb24gZ2V0TWVzc2FnZXMgKCkge1xuICAgIGxldCBtZXNzYWdlcyA9IFt7XG4gICAgICAgIHR5cGU6IFwiaW5mb1wiLFxuICAgICAgICB0ZXh0OiBcIiMxIElORk86IFNlbGVjdCBhbnkgZWxlbWVudCBpbiB0aGUgbGVmdCBtb3N0IHBhbmUoZWRpdG9yIHBhbmUpIHRvIHNlZSBpdHMgY29udGVudFwiXG4gICAgfSx7XG4gICAgICAgIHR5cGU6IFwiaW5mb1wiLFxuICAgICAgICB0ZXh0OiBcIiMyIElORk86IENsaWNrIG9uICdBZGQnIHRvIGFkZCBhbiBjb21wb25lbnRcIlxuICAgIH1dXG5cbiAgICByZXR1cm4gPE1lc3NhZ2VzQ29tcG9uZW50IG1lc3NhZ2VzPXttZXNzYWdlc30gLz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldE1lc3NhZ2VzOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNvbnNvbGV7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgcmlnaHQ6IDE1MHB4O1xcbiAgICBib3R0b206IDUwcHg7XFxufVxcblxcbi5lcnJvciB7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcblxcbi5pbmZvIHtcXG4gICAgY29sb3I6IHllbGxvd2dyZWVuO1xcbn1cIiwgXCJcIl0pO1xuXG4iLCIvLyBMaWJyYXJpZXMuXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuY2xhc3MgTWVzc2FnZUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBsZXQgIG1lc3NhZ2UgPSB0aGlzLnByb3BzLm1lc3NhZ2U7XG5cbiAgICAgICAgaWYobWVzc2FnZS50eXBlID09PSBcImVycm9yXCIgfHwgbWVzc2FnZS50eXBlPT09IFwiaW5mb1wiKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXttZXNzYWdlLnR5cGV9PlxuICAgICAgICAgICAgICAgICAgICA8Y29kZT57bWVzc2FnZS50ZXh0fTwvY29kZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlLnR5cGUgKyBcIiBpcyB1bmlkZW50aWZpZWQgbWVzc2FnZSB0eXBlIGZvciA8TWVzc2FnZXNDb21wb25lbnQvPi4gUGxlYXNlIHVzZSBlaXRoZXIgJ2Vycm9yJyBvciAnaW5mbycgb25seS4gSWYgeW91IHJlcXVpcmUgYSBkaWZmZXJlbnQgdHlwZSwgcmFpc2UgYW4gaXNzdWUsIHNlbmQgYSBQUlwiKVxuICAgICAgICAgICAgcmV0dXJuICAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb25zb2xlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWVycm9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Y29kZT57XCJlcnJvciA6IHVuaWRlbnRpZmllZCBtZXNzYWdlIHR5cGUuIFBsZWFzZSB1c2UgZWl0aGVyIGVycm9yLyBpbmZvIG9ubHlcIn08L2NvZGU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VDb21wb25lbnQ7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uZXJyb3Ige1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG5cXG4uaW5mbyB7XFxuICAgIGNvbG9yOiB5ZWxsb3dncmVlbjtcXG59XCIsIFwiXCJdKTtcblxuIiwiXG4gIGZ1bmN0aW9uICB1cGRhdGVFdmVudE5hbWUoZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG5hbWU6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gIGZ1bmN0aW9uICB1cGRhdGVSZWR1Y2VyKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICByZWR1Y2VyOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgIH1cblxuIGZ1bmN0aW9uICAgdXBkYXRlUHVibGlzaE5hbWUoZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHB1Ymxpc2hOYW1lOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgIH1cblxuICBmdW5jdGlvbiAgdXBkYXRlRXZlbnRUeXBlKGUpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHB1Ymxpc2hhYmxlOiBlLmN1cnJlbnRUYXJnZXQuY2hlY2tlZFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0ge1xuICAgICAgICB1cGRhdGVFdmVudE5hbWUsXG4gICAgICAgIHVwZGF0ZUV2ZW50VHlwZSxcbiAgICAgICAgdXBkYXRlUHVibGlzaE5hbWUsXG4gICAgICAgIHVwZGF0ZUV2ZW50VHlwZSxcbiAgICAgICAgdXBkYXRlUmVkdWNlclxuICAgIH0iLCJleHBvcnQgZnVuY3Rpb24gcHVibGlzaEV2ZW50KCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uU2F2ZSh7XG4gICAgICAgICAgICBuYW1lOiB0aGlzLnN0YXRlLm5hbWUsXG4gICAgICAgICAgICByZWR1Y2VyOiB0aGlzLnN0YXRlLnJlZHVjZXIsXG4gICAgICAgICAgICBpbmRleDogdGhpcy5wcm9wcy5pbmRleCxcbiAgICAgICAgICAgIHB1Ymxpc2hhYmxlOiB0aGlzLnN0YXRlLnB1Ymxpc2hhYmxlLFxuICAgICAgICAgICAgcHVibGlzaE5hbWU6IHRoaXMuc3RhdGUucHVibGlzaE5hbWVcbiAgICAgICAgfSlcbiAgICB9XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVFdmVudCgpe1xuICAgICAgICB0aGlzLnByb3BzLmRlbGV0ZUV2ZW50KHRoaXMucHJvcHMuaW5kZXgpO1xuICAgIH0iLCJpbXBvcnQgTWVzc2FnZXNDb21wb25lbnQgZnJvbSBcIi4uL3V0aWxpdGllcy9Db21wb25lbnRzL01lc3NhZ2VzQ29tcG9uZW50XCI7XG5cbmZ1bmN0aW9uIGdldE1lc3NhZ2VzIChlcnJvcikge1xuXG4gICAgbGV0IG1lc3NhZ2VzID0gW3tcbiAgICAgICAgdHlwZTpcImVycm9yXCIsXG4gICAgICAgIHRleHQ6XCJFUlJPUiA6IFwiK2Vycm9yK1wiZGV2ZWxvcGVyIGxvZzogbG9vayBpbiBjb25zb2xlIHJlbGF0ZWQgdG8gZXZhbFwiXG4gICAgfV1cbiAgICByZXR1cm4gKFxuICAgICAgICA8TWVzc2FnZXNDb21wb25lbnQgbWVzc2FnZXMgPSB7bWVzc2FnZXN9Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldE1lc3NhZ2VzOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1N0eWxlLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1N0eWxlLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmV2ZW50cyB7XFxuICAgIGJvcmRlcjoxcHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmVycm9yIHtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICByaWdodDogMTUwcHg7XFxufVwiLCBcIlwiXSk7XG5cbiIsIlxuICAgIGV4cG9ydCBmdW5jdGlvbiB1cGRhdGVFdmVudChldmVudCkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZS5lbGVtZW50KSlcblxuICAgICAgICAvLyBLZWVwIHRoZSBjaGlsZCBjb21wb25lbnQgbmFtZSBhcyB0aGUgSUQuIFdpbGwgY2F1c2UgcHJvYmxlbSBpbiBmdXR1cmUgZm9yIGxpc3QgcmVuZGVyaW5nIGJveS5cbiAgICAgICAgaWYodGhpcy5zdGF0ZS5zZWxlY3RlZFRhZy5pbmNsdWRlcyhcImNoaWxkLWNvbXBvbmVudC1cIikpe1xuICAgICAgICAgICAgZXZlbnQuaWQgPSB0aGlzLnN0YXRlLnNlbGVjdGVkVGFnLnNwbGl0KFwiY2hpbGQtY29tcG9uZW50LVwiKVsxXVxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBldmVudC5pZCA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRUYWcuc3BsaXQoXCItXCIpWzFdO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFkZCBcbiAgICAgICAgaWYgKGV2ZW50LmluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuZXZlbnRzLnB1c2goZXZlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gRWRpdFxuICAgICAgICAgICAgZWxlbWVudC5ldmVudHNbZXZlbnQuaW5kZXhdID0gZXZlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByb3BzLm9uRXZlbnRzVXBkYXRlKGVsZW1lbnQuZXZlbnRzKTtcbiAgICB9XG5cbiAgICBleHBvcnQgZnVuY3Rpb24gc2VsZWN0ZWRUYWdDaGFuZ2VkKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzZWxlY3RlZFRhZzogZS5jdXJyZW50VGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUV2ZW50KGluZGV4KSB7XG5cbiAgICAgICAgLy8gR2V0IGN1cnJlbnQgY29tcG9uZW50LlxuICAgICAgICBsZXQgZWxlbWVudCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZS5lbGVtZW50KSk7XG5cbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBldmVudCB0byBiZSBkZWxldGVkLlxuICAgICAgICBlbGVtZW50LmV2ZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBlbGVtZW50cyB3aXRoIG5ldyBldmVudHMuXG4gICAgICAgIHRoaXMucHJvcHMub25FdmVudHNVcGRhdGUoZWxlbWVudC5ldmVudHMpO1xuICAgIH1cblxuICAgIGV4cG9ydCBmdW5jdGlvbiB1cGRhdGVDb25maWd1cmF0aW9uKGNvbmZpZyl7XG4gICAgICAgIHRoaXMucHJvcHMub25Db25maWdVcGRhdGUoY29uZmlnKTtcbiAgICB9IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQge8Kgc2F2ZUNvbXBvbmVudHNUb1dpbmRvdywgZ2V0TmVzdGVkQ29tcG9uZW50cyB9IGZyb20gXCIuL25lc3RlZENvbXBvbmVudFNldHVwXCI7XG5cbi8vIFdoeT8gQmVjYXVzZSBpbXBvcnRpbmcgUmVhY3QgYXMgdmFyaWFibGUgYXQgbGluZSMyIHdpbGwgYmUgYWx0ZXJ0ZWQgYnkgYmFiZWwuIEtlZXAgaXQgYXMgYSBwcm9wZXJ0eSwgYmFiZWwgd2lsbCBpZ25vcmUgaXQuXG53aW5kb3cuUmVhY3QgPSBSZWFjdDtcbndpbmRvdy5Db21wb25lbnQgPSBSZWFjdC5Db21wb25lbnQ7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROb2RlVHJlZShlbGVtZW50LCBqc3gsIHN0eWxlLCBzdGF0ZSwgZXZlbnRzKSB7XG4gICAgXG4gICAgbGV0IHJlc3VsdCwgZXJyb3I7XG4gICAgdHJ5e1xuICAgICAgICBsZXQgbmVzdGVkQ29tcG9uZW50cyA9IGdldE5lc3RlZENvbXBvbmVudHMoZWxlbWVudCk7XG4gICAgICAgIGlmIChuZXN0ZWRDb21wb25lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHNhdmVDb21wb25lbnRzVG9XaW5kb3cobmVzdGVkQ29tcG9uZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ID0gZXZhbChCYWJlbC50cmFuc2Zvcm0oanN4LCB7IHByZXNldHM6IFsncmVhY3QnXSB9KS5jb2RlKVxuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIGVycm9yID0gZTtcbiAgICB9XG4gICAgZmluYWxseXtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgICAgICAgIHJlc3VsdCwgcmVzdWx0XG4gICAgICAgIH07XG4gICAgfVxufSIsIi8vIExpYnJhcmllcy5cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBwb3BIaXN0b3J5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9TdG9yYWdlXCI7XG5cbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNsYXNzIEhpc3RvcnkgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICByZWZyZXNoVG9QcmV2aW91cygpe1xuICAgICAgICBwb3BIaXN0b3J5KCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwcmV2aWV3XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICBIaXN0b3J5XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnJlZnJlc2hUb1ByZXZpb3VzLmJpbmQodGhpcyl9PkdvIGJhY2s8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBIaXN0b3J5OyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNvbnRhaW5lcntcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAyNnB4IC04cHggYmxhY2s7XFxuICAgIGJhY2tncm91bmQ6ICMyQzMxMzQ7XFxufVxcblwiLCBcIlwiXSk7XG5cbiIsIi8vIExpYnJhcmllcy5cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5pbXBvcnQgRHluYW1pY0NvbXBvbmVudCBmcm9tIFwiLi9EeW5hbWljQ29tcG9uZW50XCI7XG5cbi8vIFV0aWxpdGllcy5cblxuaW1wb3J0IHsgcmVhZENvbXBvbmVudCB9IGZyb20gXCIuLi91dGlsaXRpZXMvU3RvcmFnZVwiO1xuXG5jbGFzcyBQcmV2aWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjb21wb25lbnQ6IHRoaXMucHJvcHMuY29tcG9uZW50XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWZyZXNoKCApe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogcmVhZENvbXBvbmVudCh0aGlzLnN0YXRlLmNvbXBvbmVudC5uYW1lKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICAvLyBIZWxwcyB0byByZXJlbmRlciB3aGVuIGNoYW5nZXMgdG8gbWFya3VwL2V2ZW50cyBhcmUgbWFkZSB0byB0aGUgY29tcG9uZW50IGFuZCBwcmV2aWV3IHRoZW0uXG4gICAgICAgIGxldCByYW5kb21LZXkgPSB0aGlzLnByb3BzLmNvbXBvbmVudC5pZCoofn4oTWF0aC5yYW5kb20oKSoxMCkpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcHJldmlld1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgUHJldmlld1xuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxEeW5hbWljQ29tcG9uZW50IGtleT17cmFuZG9tS2V5fSBjb21wb25lbnQ9e3RoaXMuc3RhdGUuY29tcG9uZW50fS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJldmlldzsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jb250YWluZXJ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMjZweCAtOHB4IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kOiAjMkMzMTM0O1xcbn1cXG5cXG4uZHJvcFBvaW50e1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXG59XFxuXFxuLnRhcmdldENoaWxke1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjM0U4Q0U0O1xcbn1cIiwgXCJcIl0pO1xuXG4iLCIvLyBMaWJyYXJpZXMuXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHvCoGdldE5lc3RlZENvbXBvbmVudHMsIHNhdmVDb21wb25lbnRzVG9XaW5kb3cgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL25lc3RlZENvbXBvbmVudFNldHVwXCI7XG5cbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNsYXNzIER5bmFtaWNDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogdGhpcy5wcm9wcy5jb21wb25lbnRcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgaWYodGhpcy5zdGF0ZS5jb21wb25lbnQubmFtZT09PXVuZGVmaW5lZCl7XG4gICAgICAgICAgICByZXR1cm4gKDxkaXY+Tm8gY29tcG9uZW50IHNlbGVjdGVkLjwvZGl2PilcbiAgICAgICAgfVxuICAgICAgICBsZXQgbmVzdGVkQ29tcG9uZW50cyA9IGdldE5lc3RlZENvbXBvbmVudHModGhpcy5zdGF0ZS5jb21wb25lbnQpO1xuICAgICAgICBpZiAobmVzdGVkQ29tcG9uZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBzYXZlQ29tcG9uZW50c1RvV2luZG93KG5lc3RlZENvbXBvbmVudHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIXdpbmRvd1t0aGlzLnN0YXRlLmNvbXBvbmVudC5uYW1lXSl7XG4gICAgICAgICAgICByZXR1cm4gKDxkaXY+Q29tcG9uZW50IG5vdCByZW5kZXJlZDwvZGl2PilcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtSZWFjdC5jcmVhdGVFbGVtZW50KHdpbmRvd1t0aGlzLnN0YXRlLmNvbXBvbmVudC5uYW1lXSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRHluYW1pY0NvbXBvbmVudDsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5ib3gge1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzo1cHg7XFxufVwiLCBcIlwiXSk7XG5cbiIsImltcG9ydCB7d3JpdGVEYXRhfSBmcm9tIFwiLi4vdXRpbGl0aWVzL1N0b3JhZ2VcIjtcblxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlRXZlbnQgKGV2ZW50cykge1xuICAgIC8vIENyZWF0ZSBuZXcgc3RhdGUuXG4gICAgbGV0IG5ld0VsZW1lbnRzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSkuZWxlbWVudHM7XG4gICAgbGV0IHNlbGVjdGVkQ29tcG9uZW50ID0gbmV3RWxlbWVudHMuZmluZChlbGVtZW50PT5lbGVtZW50Lm5hbWU9PT10aGlzLnN0YXRlLnNlbGVjdGVkQ29tcG9uZW50Lm5hbWUpXG5cbiAgICBzZWxlY3RlZENvbXBvbmVudC5ldmVudHMgPSBldmVudHM7XG5cbiAgICAvLyBTZXQgc3RhdGUgdG8gdGhlIG5ldyBzdGF0ZS5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZWxlbWVudHM6IG5ld0VsZW1lbnRzXG4gICAgfSk7XG5cbiAgICB3cml0ZURhdGEoXCJ1aS1lZGl0b3JcIiwgbmV3RWxlbWVudHMpXG5cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQ29uZmlnKGNvbmZpZyl7XG4gICAgXG4gICAgbGV0IG5ld0VsZW1lbnRzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSkuZWxlbWVudHM7XG4gICAgXG4gICAgbGV0IHBhcmVudCA9IG5ld0VsZW1lbnRzLmZpbmQoZWxlbWVudD0+ZWxlbWVudC5uYW1lPT09Y29uZmlnLnBhcmVudE5hbWUpO1xuICAgIGxldCBjaGlsZCA9IG5ld0VsZW1lbnRzLmZpbmQoZWxlbWVudD0+ZWxlbWVudC5uYW1lPT09Y29uZmlnLmNoaWxkTmFtZSk7XG5cbiAgICBwYXJlbnQuc3RhdGUgPSBKU09OLnBhcnNlKHBhcmVudC5zdGF0ZSk7XG5cbiAgICBpZihwYXJlbnQuY29uZmlnID09PSB1bmRlZmluZWQpe1xuICAgICAgICBwYXJlbnQuY29uZmlnID0ge307XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBwYXJlbnQuY29uZmlnID0gSlNPTi5wYXJzZShwYXJlbnQuY29uZmlnKTtcbiAgICB9XG4gICAgcGFyZW50LmNvbmZpZ1tjaGlsZC5uYW1lXSA9IGNvbmZpZy5jb25maWc7XG4gICAgXG4gICAgaWYocGFyZW50LmNvbmZpZ1tjaGlsZC5uYW1lXS5vdmVycmlkZSkgeyAgICBcbiAgICAgICAgcGFyZW50LnN0YXRlW2NoaWxkLm5hbWVdID0gSlNPTi5wYXJzZShjaGlsZC5zdGF0ZSk7XG4gICAgfSBcbiAgICBlbHNlIHtcbiAgICAgICAgZGVsZXRlIHBhcmVudC5zdGF0ZVtjaGlsZC5uYW1lXTtcbiAgICB9XG5cblxuICAgIHBhcmVudC5zdGF0ZSA9IEpTT04uc3RyaW5naWZ5KHBhcmVudC5zdGF0ZSlcbiAgICBwYXJlbnQuY29uZmlnPSBKU09OLnN0cmluZ2lmeShwYXJlbnQuY29uZmlnKVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGVsZW1lbnRzOiBuZXdFbGVtZW50c1xuICAgIH0pXG5cbiAgICB3cml0ZURhdGEoXCJ1aS1lZGl0b3JcIiwgbmV3RWxlbWVudHMpXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVFbGVtZW50IChlbGVtZW50KSB7XG4gICAgbGV0IGNvbXBvbmVudHMgPSBBcnJheS5mcm9tKHRoaXMuc3RhdGUuY29tcG9uZW50cyk7XG4gICAgXG4gICAgLy8gQ2hlY2sgaWYgZWxlbWVudCBleGlzdC5cbiAgICBsZXQgZWxlbWVudEV4aXN0ID0gY29tcG9uZW50cy5maW5kKGNvbXBvbmVudD0+Y29tcG9uZW50Lm5hbWU9PT1lbGVtZW50Lm5hbWUpO1xuICAgIGxldCBzZWxlY3RlZENvbXBvbmVudCA9IGNvbXBvbmVudHMuZmluZChjb21wb25lbnQ9PmNvbXBvbmVudC5uYW1lPT09dGhpcy5zdGF0ZS5zZWxlY3RlZENvbXBvbmVudC5uYW1lKTtcbiAgICBsZXQgc2VsZWN0ZWRJbmRleCA9IGNvbXBvbmVudHMuZmluZEluZGV4KGNvbXBvbmVudD0+Y29tcG9uZW50Lm5hbWU9PT10aGlzLnN0YXRlLnNlbGVjdGVkQ29tcG9uZW50Lm5hbWUpO1xuICAgIGlmKGVsZW1lbnRFeGlzdCl7XG4gICAgICAgIC8vIEZpbmQgdGhlIGVsZW1lbnQuXG4gICAgICAgIGxldCBlbGVtZW50VW5kZXJFZGl0ID0gc2VsZWN0ZWRDb21wb25lbnQ7XG5cbiAgICAgICAgLy8gTWVyZ2UuXG4gICAgICAgIGVsZW1lbnRVbmRlckVkaXQgPSBPYmplY3QuYXNzaWduKGVsZW1lbnRVbmRlckVkaXQsIGVsZW1lbnQpXG5cbiAgICAgICAgLy8gUHVzaCBpdCB0byBvcmlnaW5hbCBsaXN0LlxuICAgICAgICBjb21wb25lbnRzW3NlbGVjdGVkSW5kZXhdID0gZWxlbWVudFVuZGVyRWRpdDtcbiAgICB9XG5cbiAgICBlbHNlIHtcbiAgICAgICAgbGV0IG5ld0VsZW1lbnQgPSB7XG4gICAgICAgICAgICBuYW1lOiBlbGVtZW50Lm5hbWUsXG4gICAgICAgICAgICBtYXJrdXA6IGVsZW1lbnQubWFya3VwLFxuICAgICAgICAgICAgZXZlbnRzOiBbXSxcbiAgICAgICAgICAgIHN0YXRlOiBlbGVtZW50LnN0YXRlIHx8IFwie31cIixcbiAgICAgICAgICAgIHN0eWxlOiBlbGVtZW50LnN0eWxlLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICAgICAgaWQ6IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpKjEwMDApLFxuICAgICAgICAgICAgY29uZmlnOlwie31cIlxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbXBvbmVudHMucHVzaChuZXdFbGVtZW50KTtcbiAgICAgICAgc2VsZWN0ZWRJbmRleCA9IGNvbXBvbmVudHMubGVuZ3RoLTE7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGVsZW1lbnRzOiBjb21wb25lbnRzLFxuICAgICAgICBlbGVtZW50OiB7XG4gICAgICAgICAgICBuYW1lOiBlbGVtZW50Lm5hbWUsXG4gICAgICAgICAgICBtYXJrdXA6IGVsZW1lbnQubWFya3VwLFxuICAgICAgICAgICAgc3R5bGU6IGVsZW1lbnQuc3R5bGUsXG4gICAgICAgICAgICBzdGF0ZTogZWxlbWVudC5zdGF0ZSxcbiAgICAgICAgICAgIGV2ZW50czogZWxlbWVudC5ldmVudHMgfHwgW11cbiAgICAgICAgfSxcbiAgICAgICAgc2hvd0VkaXRvcjogZmFsc2VcbiAgICB9KTtcblxuICAgIHdyaXRlRGF0YShcInVpLWVkaXRvclwiLCBjb21wb25lbnRzKVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTZWxlY3RlZENvbXBvbmVudCAoZSkge1xuICAgIGxldCBjb21wb25lbnROYW1lID0gZS5jdXJyZW50VGFyZ2V0LmlubmVyVGV4dC5zcGxpdChcIlxcblwiKVswXTtcbiAgICAvLyBGaW5kIHRoZSBlbGVtZW50IGZyb20gc3RhdGUgdGhhdCBtYXRjaGVzIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgZWxlbWVudC5cbiAgICBsZXQgc2VsZWN0ZWRDb21wb25lbnQgPSB0aGlzLnN0YXRlLmNvbXBvbmVudHMuZmluZChjb21wb25lbnQ9PmNvbXBvbmVudC5uYW1lPT09Y29tcG9uZW50TmFtZSk7XG5cbiAgICB3aW5kb3cuc2VsZWN0ZWRjb21wb25lbnRuYW1lID0gc2VsZWN0ZWRDb21wb25lbnQubmFtZTtcbiAgICAvLyBVcGRhdGUgdGhlIHN0YXRlIHdpdGggc2VsZWN0ZWRFbGVtZW50LlxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzZWxlY3RlZENvbXBvbmVudFxuICAgIH0pXG59XG4iXSwic291cmNlUm9vdCI6IiJ9