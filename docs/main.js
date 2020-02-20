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


var _localStorage = __webpack_require__(47);

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

var _createComponent = __webpack_require__(46);

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
    window[component.name] = (0, _createComponent.createComponent)(component);
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

var _Runtime = __webpack_require__(4);

var _React = __webpack_require__(8);

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
    var nestedComponents = (0, _Runtime.getNestedComponents)(selectedComponent);

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
        return (0, _React.convertToReact)(component);
    }).map(removeParanthesis).join(""));
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.convertToReact = convertToReact;
// Elements to  react component.
function convertToReact(component) {

    var markup = "markup";

    component.events.forEach(function (event) {
        event.id = event.id.replace("-", "");
    });

    var addProps = function addProps(component) {
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

            // PRECAUTION: Edit markup for rendering list. Should not use other configuration while using this.
            if (config[childName].override) {
                var childMarkup = "<" + childName + "></" + childName + ">";

                var childMarkupWithProps = "<" + childName + " state={item} key={i}></" + childName + ">";
                var renderListMarkup = "{this.state." + childName + ".map((item,i)=>" + childMarkupWithProps + ")}";
                markup = markup.replace(childMarkup, renderListMarkup);
            }
        });
        return markup;
    };

    var propsInMarkup = addProps(component);
    var stateOverideMarkup = getStatedMarkup(propsInMarkup);
    var componentEventedMarkup = getComponentEventedMarkup(stateOverideMarkup, component.events);

    var ReactComponent = "(\n        class " + component.name + " extends Component {\n        \n            constructor(props) {\n                super(props);\n                this.state = this.props.state || " + component.state + ";\n            }\n        \n            " + component.events.map(function (event) {
        if (event.publishable) {
            return "\n                    \n                    " + (event.id + event.name) + " (e) {\n                        var state = JSON.parse(JSON.stringify(this.state))\n                        " + event.reducer + "\n                        debugger;\n                        this.setState(state);\n                        e.state = state;\n                        this.props." + event.publishName + "? this.props." + event.publishName + "(e):null;\n                    }\n                    \n                    ";
        }

        return "\n                    " + (event.id + event.name) + " (e) {\n                        var state = JSON.parse(JSON.stringify(this.state))\n                        " + event.reducer + "\n                        debugger;\n                        this.setState(state);\n                    }\n                ";
    }).join("\n") + "\n        \n            render() {\n                return (" + componentEventedMarkup + ")\n            }\n        })\n        ";
    return ReactComponent;
}

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

__webpack_require__(72);

var _MessageComponent = __webpack_require__(74);

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

var _DraggableComponent = __webpack_require__(55);

var _DraggableComponent2 = _interopRequireDefault(_DraggableComponent);

var _Editor = __webpack_require__(59);

var _Editor2 = _interopRequireDefault(_Editor);

var _Events = __webpack_require__(63);

var _Events2 = _interopRequireDefault(_Events);

var _History = __webpack_require__(84);

var _History2 = _interopRequireDefault(_History);

var _Preview = __webpack_require__(87);

var _Preview2 = _interopRequireDefault(_Preview);

var _Reducer = __webpack_require__(93);

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

var _Events = __webpack_require__(54);

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
                            "Add/Edit Component"
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

var _processFolder = __webpack_require__(49);

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
            return (0, _processFolder.folderStructure)(this.props, this.checkFolder.bind(this));
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
exports.push([module.i, "", ""]);



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


var _React = __webpack_require__(8);

function createComponent(component) {

    var componentString = (0, _React.convertToReact)(component);

    // eval does not evaluate class if not exclosed in paranthesis.
    return eval(Babel.transform(componentString, { presets: ['react'], plugins: ["transform-es2015-classes"] }).code);
}

module.exports = {
    createComponent: createComponent
};

/***/ }),
/* 47 */
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

var _Sample = __webpack_require__(48);

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
/* 48 */
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
        "reducer": "state.ResetPasswordModal = [];",
        "publishable": "",
        "publishName": "",
        "id": "VariantModal"
    }, {
        "name": "onClose",
        "reducer": "state.ResetPasswordModal = [];",
        "publishable": "",
        "publishName": "",
        "id": "ResetPasswordModal"
    }, {
        "name": "onPasswordForgotten",
        "reducer": "state.ResetPasswordModal =[{title: \"Forgot Password\",\"footer\": \"Copyrigts\",\"show\": \"sd\"}]",
        "publishable": "",
        "publishName": "",
        "id": "ForgotPassword"
    }],
    "state": "{\"showModal\":false,\"list\":[1,2,3,4,5],\"ResetPasswordModal\":[]}",
    "style": ".page{\nheight: 700px;\nwidth: 500px;\n\n}",
    "children": [],
    "id": 815,
    "config": "{\"VariantModal\":{\"showHideProp\":\"showModal\",\"override\":false},\"ForgotPasswordButton\":{\"showHideProp\":\"\",\"override\":false},\"ForgotPassword\":{\"showHideProp\":\"\",\"override\":false,\"renderListProp\":\"\"},\"ResetPasswordModal\":{\"showHideProp\":\"showModal\",\"override\":true,\"renderListProp\":\"\"}}",
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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.folderStructure = folderStructure;

var _Folder = __webpack_require__(6);

var _Folder2 = _interopRequireDefault(_Folder);

var _Componentt = __webpack_require__(50);

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
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Events = __webpack_require__(51);

var _Events2 = __webpack_require__(7);

__webpack_require__(52);

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
            var selectedComponent = props.selectedComponent;
            var component = props.component;
            // Remove this.props.index, instead use this element instance index. Removes duplicate code
            return _react2.default.createElement(
                "div",
                { className: "background", draggable: "true", "data-name": component.name, onDragStart: _Events.handleDrag.bind(this), onDragEnd: this.restoreClass },
                _react2.default.createElement(
                    "li",
                    {
                        className: selectedComponent && props.component.name === selectedComponent.name ? "selected component" : "component",
                        onClick: _Events.selectionChanged.bind(this),
                        index: props.index },
                    _react2.default.createElement(
                        "span",
                        { className: "componentName" },
                        component.name
                    ),
                    _react2.default.createElement(
                        "span",
                        null,
                        _react2.default.createElement(
                            "button",
                            {
                                index: props.index,
                                onClick: _Events2.onExport.bind(null, component.name) },
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
/* 51 */
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
/* 52 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(53);

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
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".selected, .green {\n    border: 1px solid green;\n    background: rgb(43, 43, 43);\n}\n\n.background {\n    background: rgb(64, 64, 64);\n    border-bottom: 1px solid #333333;\n}\n\n.component {\n    display:flex;\n    justify-content: space-between;\n}\n\n.component .componentName{\n    padding:7px;\n}\n\n.thumbnail {\n    width: 50px;\n}\n\n.hideAdditionals span:not(.componentName){\n    display:none;\n}\n\n.hideAdditionals {\n    display: inline-block;\n}", ""]);



/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.onDelete = onDelete;

var _Storage = __webpack_require__(3);

function onDelete(event) {

    // stop event propagation. else onSelectionChange gets re triggered.

    event.stopPropagation();
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
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(56);

var _config = __webpack_require__(58);

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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(57);

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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, "#move > span{  \n    border: 1px solid black;\n    color: black;\n}\n\n#move .move-handle{\n    cursor: move;\n}\n\n#move .move-handle,\n#move .minimise-handle,\n#move .maximise-handle {\n    padding-left: 2px;\n    padding-right: 2px;\n}", ""]);



/***/ }),
/* 58 */
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
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(60);

var _Reducer = __webpack_require__(62);

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
/* 60 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(61);

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
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".hidden{\n    display: none;\n}", ""]);



/***/ }),
/* 62 */
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
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Configurator = __webpack_require__(64);

var _Configurator2 = _interopRequireDefault(_Configurator);

var _Nodes = __webpack_require__(67);

var _Nodes2 = _interopRequireDefault(_Nodes);

var _Event = __webpack_require__(68);

var _Event2 = _interopRequireDefault(_Event);

var _Messages = __webpack_require__(79);

var _Messages2 = _interopRequireDefault(_Messages);

__webpack_require__(80);

var _Reducer = __webpack_require__(82);

var _getNodeTree = __webpack_require__(83);

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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(65);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libraries.

var Configurator = function (_Component) {
    _inherits(Configurator, _Component);

    function Configurator(props) {
        _classCallCheck(this, Configurator);

        var _this = _possibleConstructorReturn(this, (Configurator.__proto__ || Object.getPrototypeOf(Configurator)).call(this, props));

        var config = JSON.parse(_this.props.parent.config)[_this.props.childName] || { override: false };

        _this.state = {
            override: config.override
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
                    override: !this.state.override
                },
                childName: this.props.childName,
                parentName: this.props.parent.name
            });
        }
    }, {
        key: "saveConfig",
        value: function saveConfig() {
            this.props.onChange({
                config: {
                    override: this.state.override
                },
                childName: this.props.childName,
                parentName: this.props.parent.name
            });
        }
    }, {
        key: "render",
        value: function render() {

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
                    )
                )
            );
        }
    }]);

    return Configurator;
}(_react.Component);

exports.default = Configurator;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(66);

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
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".console{\n    position: fixed;\n    right: 150px;\n}\n\n.error {\n    color: red;\n}\n\n.event { \n    padding-left: 10px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    border-top: 1px solid #333333;\n    background: rgb(64, 64, 64);\n}\n\n.info {\n    color: yellowgreen;\n}\n\nlabel {\n    padding-right: 10px;\n}\n\n.configurator {\n    background: rgb(64, 64, 64);\n    margin-top: 10px;\n    padding: 5px;\n}", ""]);



/***/ }),
/* 67 */
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
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(69);

var _Messages = __webpack_require__(71);

var _Messages2 = _interopRequireDefault(_Messages);

var _Reducer = __webpack_require__(77);

var _Events = __webpack_require__(78);

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
/* 69 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(70);

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
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".console{\n    position: fixed;\n    right: 150px;\n}\n\n.error {\n    color: red;\n}\n\n.event { \n    padding-left: 10px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    border-top: 1px solid #333333;\n    background: rgb(64, 64, 64);\n}\n\n.info {\n    color: yellowgreen;\n}\n\nlabel {\n    padding-right: 10px;\n}\n\n.event input {\n    margin-left:0px;\n}\n\n.event textarea {\n    margin-top: 8px;\n}", ""]);



/***/ }),
/* 71 */
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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(73);

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
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".console{\n    position: fixed;\n    right: 150px;\n    bottom: 50px;\n}\n\n.error {\n    color: red;\n}\n\n\n.info {\n    color: yellowgreen;\n}", ""]);



/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(75);

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
/* 75 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(76);

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
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, "\n.error {\n    color: red;\n}\n\n\n.info {\n    color: yellowgreen;\n}", ""]);



/***/ }),
/* 77 */
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
/* 78 */
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
/* 79 */
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
/* 80 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(81);

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
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".events {\n    border:1px solid black;\n    padding: 5px;\n}\n\n.error {\n    color: red;\n    position: fixed;\n    right: 150px;\n}", ""]);



/***/ }),
/* 82 */
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
    var element = JSON.parse(JSON.stringify(this.state.component));

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
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getNodeTree = getNodeTree;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Runtime = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Why? Because importing React as variable at line#2 will be alterted by babel. Keep it as a property, babel will ignore it.
window.React = _react2.default;
window.Component = _react2.default.Component;

function getNodeTree(element, jsx, style, state, events) {

    var result = void 0,
        error = void 0;
    try {
        var nestedComponents = (0, _Runtime.getNestedComponents)(element);
        if (nestedComponents.length > 0) {
            (0, _Runtime.saveComponentsToWindow)(nestedComponents);
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
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Storage = __webpack_require__(3);

__webpack_require__(85);

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
/* 85 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(86);

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
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".container{\n    border: 1px solid black;\n    padding: 5px;\n    box-shadow: 0px 8px 26px -8px black;\n    background: #2C3134;\n}\n", ""]);



/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(88);

var _DynamicComponent = __webpack_require__(90);

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
/* 88 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(89);

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
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".container{\n    border: 1px solid black;\n    padding: 5px;\n    box-shadow: 0px 8px 26px -8px black;\n    background: #2C3134;\n}\n\n.dropPoint{\n    border: 1px solid green;\n}\n\n.targetChild{\n    border: 1px solid #3E8CE4;\n}", ""]);



/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Runtime = __webpack_require__(4);

__webpack_require__(91);

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
            var nestedComponents = (0, _Runtime.getNestedComponents)(this.state.component);
            if (nestedComponents.length > 0) {
                (0, _Runtime.saveComponentsToWindow)(nestedComponents);
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
/* 91 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(92);

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
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".box {\n    margin: 5px;\n    border:1px solid black;\n    padding:5px;\n}", ""]);



/***/ }),
/* 93 */
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
    var newElements = Object.assign({}, this.state).components;
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

    var newElements = Object.assign({}, this.state).components;

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
    debugger;
    if (parent.config[child.name].override) {
        parent.state[child.name] = [JSON.parse(child.state)];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvU3RvcmFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL1J1bnRpbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1V0aWxpdGllcy9Db21wb25lbnRzL0ZvbGRlcnMvRm9sZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9VdGlsaXRpZXMvQ29tcG9uZW50cy9Gb2xkZXJzL0ZvbGRlci9FdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy9Db2RlR2VuZXJhdG9yL1JlYWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvQ29tcG9uZW50cy9NZXNzYWdlc0NvbXBvbmVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vY2pzL3JlYWN0LWRvbS5wcm9kdWN0aW9uLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2NoZWR1bGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zY2hlZHVsZXIvY2pzL3NjaGVkdWxlci5wcm9kdWN0aW9uLm1pbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9JbmRleC9pbmRleC5jc3M/ZDBkNyIsIndlYnBhY2s6Ly8vLi9zcmMvSW5kZXgvaW5kZXguY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Fzc2V0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQXNzZXRzL1N0eWxlLmNzcz85ZWFhIiwid2VicGFjazovLy8uL3NyYy9Bc3NldHMvU3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9Bc3NldHMvQXNzZXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Fzc2V0cy9Bc3NldC9TdHlsZS5jc3M/NThlNiIsIndlYnBhY2s6Ly8vLi9zcmMvQXNzZXRzL0Fzc2V0L1N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvQXNzZXRzL1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1V0aWxpdGllcy9MaWJyYXJpZXMvaW5kZXhlZERCL2luZGV4ZURCLmpzIiwid2VicGFjazovLy8uL3NyYy9VdGlsaXRpZXMvTGlicmFyaWVzL2luZGV4ZWREQi9NaW5kZXhlZERCLmpzIiwid2VicGFjazovLy8uL3NyYy9Bc3NldHMvZGIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvU3R5bGUuY3NzPzM2ZGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvU3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9VdGlsaXRpZXMvQ29tcG9uZW50cy9Gb2xkZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9VdGlsaXRpZXMvQ29tcG9uZW50cy9Gb2xkZXJzL1N0eWxlLmNzcz84NDY1Iiwid2VicGFjazovLy8uL3NyYy9VdGlsaXRpZXMvQ29tcG9uZW50cy9Gb2xkZXJzL1N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbGl0aWVzL0NvbXBvbmVudHMvRm9sZGVycy9Gb2xkZXIvU3R5bGUuY3NzP2E5YmUiLCJ3ZWJwYWNrOi8vLy4vc3JjL1V0aWxpdGllcy9Db21wb25lbnRzL0ZvbGRlcnMvRm9sZGVyL1N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbGl0aWVzL0NvbXBvbmVudHMvRm9sZGVycy9Ob0ZvbGRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbGl0aWVzL0NvbXBvbmVudHMvRm9sZGVycy9Ob0ZvbGRlci9TdHlsZS5jc3M/Mzc0ZSIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbGl0aWVzL0NvbXBvbmVudHMvRm9sZGVycy9Ob0ZvbGRlci9TdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL1V0aWxpdGllcy9Db21wb25lbnRzL0ZvbGRlcnMvTm9Gb2xkZXIvRXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9VdGlsaXRpZXMvQ29tcG9uZW50cy9Gb2xkZXJzL05ld0ZvbGRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbGl0aWVzL0NvbXBvbmVudHMvRm9sZGVycy9OZXdGb2xkZXIvU3R5bGUuY3NzP2UzYmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL1V0aWxpdGllcy9Db21wb25lbnRzL0ZvbGRlcnMvTmV3Rm9sZGVyL1N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbGl0aWVzL0NvbXBvbmVudHMvRm9sZGVycy9Gb2xkZXIvUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL2NyZWF0ZS1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy9TdG9yYWdlL2xvY2FsU3RvcmFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL1N0b3JhZ2UvbG9jYWxTdG9yYWdlL1NhbXBsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbGl0aWVzL0NvbXBvbmVudHMvRm9sZGVycy9wcm9jZXNzRm9sZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0NvbXBvbmVudHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQ29tcG9uZW50dC9FdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQ29tcG9uZW50dC9TdHlsZS5jc3M/OGYwNyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Db21wb25lbnR0L1N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9FdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1V0aWxpdGllcy9Db21wb25lbnRzL0RyYWdnYWJsZUNvbXBvbmVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbGl0aWVzL0NvbXBvbmVudHMvRHJhZ2dhYmxlQ29tcG9uZW50L3N0eWxlLmNzcz9kZWVjIiwid2VicGFjazovLy8uL3NyYy9VdGlsaXRpZXMvQ29tcG9uZW50cy9EcmFnZ2FibGVDb21wb25lbnQvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9VdGlsaXRpZXMvQ29tcG9uZW50cy9EcmFnZ2FibGVDb21wb25lbnQvY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy9FZGl0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VkaXRvci9TdHlsZS5jc3M/MWJmYyIsIndlYnBhY2s6Ly8vLi9zcmMvRWRpdG9yL1N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvRWRpdG9yL1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0V2ZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXZlbnRzL0NvbmZpZ3VyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXZlbnRzL0NvbmZpZ3VyYXRvci9TdHlsZS5jc3M/ZWUyOCIsIndlYnBhY2s6Ly8vLi9zcmMvRXZlbnRzL0NvbmZpZ3VyYXRvci9TdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy9Db21wb25lbnRzL05vZGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9FdmVudHMvRXZlbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0V2ZW50cy9FdmVudC9TdHlsZS5jc3M/YmE5NCIsIndlYnBhY2s6Ly8vLi9zcmMvRXZlbnRzL0V2ZW50L1N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXZlbnRzL0V2ZW50L01lc3NhZ2VzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvQ29tcG9uZW50cy9NZXNzYWdlc0NvbXBvbmVudC9zdHlsZS5jc3M/MWQ0MSIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL0NvbXBvbmVudHMvTWVzc2FnZXNDb21wb25lbnQvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvQ29tcG9uZW50cy9NZXNzYWdlQ29tcG9uZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvQ29tcG9uZW50cy9NZXNzYWdlQ29tcG9uZW50L3N0eWxlLmNzcz83Yzg5Iiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvQ29tcG9uZW50cy9NZXNzYWdlQ29tcG9uZW50L3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXZlbnRzL0V2ZW50L1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0V2ZW50cy9FdmVudC9FdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0V2ZW50cy9NZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXZlbnRzL1N0eWxlLmNzcz83OTcxIiwid2VicGFjazovLy8uL3NyYy9FdmVudHMvU3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9FdmVudHMvUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL2dldC1ub2RlLXRyZWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0hpc3RvcnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0hpc3Rvcnkvc3R5bGUuY3NzPzBiMjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL0hpc3Rvcnkvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9QcmV2aWV3L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9QcmV2aWV3L3N0eWxlLmNzcz82ZDQ4Iiwid2VicGFjazovLy8uL3NyYy9QcmV2aWV3L3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJldmlldy9EeW5hbWljQ29tcG9uZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9QcmV2aWV3L0R5bmFtaWNDb21wb25lbnQvc3R5bGUuY3NzPzUyNWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL1ByZXZpZXcvRHluYW1pY0NvbXBvbmVudC9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL0luZGV4L1JlZHVjZXIuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInJlYWREYXRhIiwid3JpdGVEYXRhIiwicmVhZENvbXBvbmVudCIsIndyaXRlQ29tcG9uZW50IiwicG9wSGlzdG9yeSIsInNhdmVDb21wb25lbnRzVG9XaW5kb3ciLCJnZXROZXN0ZWRDb21wb25lbnRzIiwiY3JlYXRlU3R5bGVzaGVldCIsInN0eWxlIiwibmFtZSIsImluY2x1ZGVzIiwiYXNzZXQiLCJzcGxpdCIsInBvcCIsImpvaW4iLCJyZXBsYWNlIiwid2luZG93IiwiYXNzZXRzIiwidG9EZWxldGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaXRlbSIsInJlbW92ZSIsImR5bmFtaWNTdHlsZSIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJ0eXBlIiwiaW5uZXJIVE1MIiwiYm9keSIsImFwcGVuZENoaWxkIiwic2F2ZVRvV2luZG93IiwiY29tcG9uZW50IiwiY2hlY2tOZXN0ZWRDb21wb25lbnRzIiwibWFya3VwIiwiY29tcG9uZW50cyIsImZpbHRlciIsImxlbmd0aCIsIm5lc3RlZENvbXBvbmVudHMiLCJwYXJlbnQiLCJjaGlsZHJlbiIsImdyYW5kS2lkcyIsIm1hcCIsImZsYXQiLCJwdXNoIiwiRm9sZGVyIiwicHJvcHMiLCJzdGF0ZSIsInN0YXR1cyIsImZvbGRlckNsYXNzIiwiZm9sZGVyIiwiY29udGVudHMiLCJhZGRFdmVudExpc3RlbmVyIiwiZGVsZXRlRm9sZGVyIiwiYmluZCIsIm9uRm9sZGVyVXBkYXRlIiwibmV3Rm9sZGVyIiwic2VsZWN0Rm9sZGVyIiwiZGVzZWxlY3RGb2xkZXIiLCJkcm9wSGFuZGxlciIsImRyYWdPdmVySGFuZGxlciIsImRyYWdMZWF2ZUhhbmRsZXIiLCJvbkRyYWdTdGFydCIsInRvZ2dsZUZvbGRlciIsIkNvbXBvbmVudCIsIm9uRXhwb3J0IiwiZXYiLCJwcmV2ZW50RGVmYXVsdCIsImNvbXBvbmVudE5hbWUiLCJkYXRhVHJhbnNmZXIiLCJnZXREYXRhIiwiZm9sZGVyTmFtZSIsIkFycmF5IiwiZnJvbSIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsImUiLCJldmVudCIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsInNldERhdGEiLCJzZWxlY3RlZENvbXBvbmVudCIsImZpbmQiLCJ1bmlxdWVDb21wb25lbnRzIiwiU2V0IiwiY29tIiwiZWxlbWVudCIsInJlbW92ZVBhcmFudGhlc2lzIiwiY29udmVydFRvUmVhY3QiLCJldmVudHMiLCJpZCIsImFkZFByb3BzIiwiZ2V0Q29tcG9uZW50RXZlbnRlZE1hcmt1cCIsImdldFN0YXRlZE1hcmt1cCIsImNvbmZpZyIsIkpTT04iLCJwYXJzZSIsImNoaWxkcmVuQ29uZmlnIiwiT2JqZWN0Iiwia2V5cyIsImNoaWxkTmFtZSIsIm92ZXJyaWRlIiwiY2hpbGRNYXJrdXAiLCJjaGlsZE1hcmt1cFdpdGhQcm9wcyIsInJlbmRlckxpc3RNYXJrdXAiLCJwcm9wc0luTWFya3VwIiwic3RhdGVPdmVyaWRlTWFya3VwIiwiY29tcG9uZW50RXZlbnRlZE1hcmt1cCIsIlJlYWN0Q29tcG9uZW50IiwicHVibGlzaGFibGUiLCJyZWR1Y2VyIiwicHVibGlzaE5hbWUiLCJNZXNzYWdlc0NvbXBvbmVudCIsIm1lc3NhZ2VzIiwibWVzc2FnZSIsImluZGV4IiwiSW5kZXgiLCJjb21wb25lbnROYW1lcyIsInNlbGVjdGVkVGFnIiwiZm9sZGVycyIsInNob3dFZGl0b3IiLCJ1cGRhdGVDb25maWciLCJ1cGRhdGVFdmVudCIsInNhdmVFbGVtZW50IiwidXBkYXRlU2VsZWN0ZWRDb21wb25lbnQiLCJwcmV2aWV3Q29tcG9uZW50IiwiTWF0aCIsImNlaWwiLCJyYW5kb20iLCJvcGVuRWRpdG9yIiwidXBkYXRlRm9sZGVycyIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJBc3NldHMiLCJjbGFzcyIsImltYWdlVVJMIiwid3JpdGVUb0RCIiwiZmlsZSIsImJpbiIsInJlc3VsdCIsIm5ld0ZpbGUiLCJzaXplIiwiaW1nIiwic3JjIiwiZmV0Y2hGcm9tREIiLCJBc3NldCIsImNhbGwiLCJmaWxlcyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZWFkQXNEYXRhVVJMIiwib25sb2FkZW5kIiwiYiIsImFwcGVuZFRvQm9keSIsImlEQiIsIm9ubG9hZCIsIk1pbmRleGVkREIiLCJ1aUVkaXRvciIsImNvbm5lY3QiLCJkYXRhYmFzZU5hbWUiLCJvYmplY3RTdG9yZXMiLCJpZGIiLCJpbmRleGVkREIiLCJtb3pJbmRleGVkREIiLCJ3ZWJraXRJbmRleGVkREIiLCJtc0luZGV4ZWREQiIsInNoaW1JbmRleGVkREIiLCJkYiIsIm9ialN0cnMiLCJpc0FycmF5Iiwic3RvcmUiLCJrZXkiLCJjb25uIiwib3BlbiIsIm1kYiIsIm9udXBncmFkZW5lZWRlZCIsImRibCIsImVudHJpZXMiLCJjcmVhdGVPYmplY3RTdG9yZSIsImtleVBhdGgiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm9uc3VjY2VzcyIsIm9uZXJyb3IiLCJlcnJvciIsImNzIiwidW5kZWZpbmVkIiwidHgiLCJ0cmFuc2FjdGlvbiIsIm9iamVjdFN0b3JlIiwicHV0Iiwib2JqIiwib3MiLCJyZXNwb25zZSIsImdldCIsImdldEFsbCIsImNsb3NlIiwidGhlbiIsImhyZWYiLCJkYXRhIiwiaW1hZ2UiLCJDb21wb25lbnRzIiwidW5zaGlmdCIsIm9uT3BlbkVkaXRvciIsImFkZENvbXBvbmVudCIsImFkZEZvbGRlciIsIm9uRm9sZGVyc1VwZGF0ZSIsIm9uU2VsZWN0aW9uIiwib25EZWxldGUiLCJGb2xkZXJzIiwiZW1wdHlGb2xkZXJJbmRleCIsImZpbmRJbmRleCIsInNwbGljZSIsInN0cmluZ2lmeSIsImN1cnJlbnRGb2xkZXIiLCJjb250ZW50IiwiY2hlY2tGb2xkZXIiLCJOb0ZvbGRlciIsIm5vZHJvcEhhbmRsZXIiLCJub2RyYWdPdmVySGFuZGxlciIsInNsaWNlIiwiTmV3Rm9sZGVyIiwibmV3Rm9sZGVyQ2xhc3MiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJvbk5ld0ZvbGRlciIsImZvbGRlck5hbWVDaGFuZ2VkIiwic2F2ZUZvbGRlck5hbWVPbkVudGVyIiwiY3RybEtleSIsIm9uRm9sZGVyRGVsZXRlIiwib3BlbkZvbGRlciIsImNsb3NlRm9sZGVyIiwiY3JlYXRlQ29tcG9uZW50IiwiY29tcG9uZW50U3RyaW5nIiwiZXZhbCIsIkJhYmVsIiwidHJhbnNmb3JtIiwicHJlc2V0cyIsInBsdWdpbnMiLCJjb2RlIiwicHVzaEhpc3RvcnkiLCJlZGl0b3JIaXN0b3J5IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImdldEl0ZW0iLCJzYW1wbGUiLCJoaXN0b3J5Iiwibm9QdXNoIiwiY29tcCIsImxhc3RJdGVtIiwiZm9sZGVyU3RydWN0dXJlIiwiaW5pdGlhbGlzZVByb3BzIiwicHJvY2Vzc0ZvbGRlciIsImkiLCJwcm9jZXNzQ29udGVudCIsIkNvbXBvbmVudHQiLCJjbGFzc0xpc3QiLCJoYW5kbGVEcmFnIiwicmVzdG9yZUNsYXNzIiwic2VsZWN0aW9uQ2hhbmdlZCIsIm9uU2VsZWN0aW9uQ2hhbmdlIiwiYWRkIiwiZXZlbnRDYWxsYmFja3MiLCJzdG9wUHJvcGFnYXRpb24iLCJwYXJlbnRFbGVtZW50IiwiaW5uZXJUZXh0IiwiRHJhZ2dhYmxlQ29tcG9uZW50IiwicGFuZWxOYW1lIiwidGl0bGUiLCJkcmFnZ2FibGUiLCJ0b3AiLCJwYWdlWSIsImxlZnQiLCJwYWdlWCIsIm1pbmltaXNlZCIsIm1vdmVEaXYiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJ0b2dnbGVNaW5pbWlzZU1heGltaXNlIiwiRWRpdG9yIiwib25TYXZlIiwidXBkYXRlTmFtZSIsInVwZGF0ZU1hcmt1cCIsInVwZGF0ZVN0eWxlIiwidXBkYXRlU3RhdGUiLCJnZXRQcm9wZXJ0eUNvbnRhaW5pbmdQcm9wcyIsImNoaWxkIiwicHJvcGVydHkiLCJFdmVudHMiLCJhc3NpZ24iLCJub2RlVHJlZSIsImV2ZW50c09mU2VsZWN0ZWRUYWciLCJjb25maWd1cmF0b3IiLCJldmVudE5hbWVzIiwiY2hpbGRDb21wb25lbnROYW1lIiwiY2hpbGRDb21wb25lbnQiLCJwdWJsaXNoYWJsZUV2ZW50IiwiZXZlbnROYW1lIiwiZGVsZXRlRXZlbnQiLCJ1cGRhdGVDb25maWd1cmF0aW9uIiwic2VsZWN0ZWRUYWdDaGFuZ2VkIiwiQ29uZmlndXJhdG9yIiwib25DaGFuZ2UiLCJwYXJlbnROYW1lIiwidG9nZ2VsT3ZlcnJpZGUiLCJOb2RlcyIsIm5vZGUiLCJvblNlbGVjdGVkVGFnQ2hhbmdlZCIsIkV2ZW50Iiwic2VsZWN0ZWRUYWdJRCIsInVwZGF0ZVB1Ymxpc2hOYW1lIiwidXBkYXRlRXZlbnROYW1lIiwidXBkYXRlUmVkdWNlciIsInVwZGF0ZUV2ZW50VHlwZSIsInB1Ymxpc2hFdmVudCIsImdldE1lc3NhZ2VzIiwidGV4dCIsIk1lc3NhZ2VDb21wb25lbnQiLCJjaGVja2VkIiwib25FdmVudHNVcGRhdGUiLCJvbkNvbmZpZ1VwZGF0ZSIsImdldE5vZGVUcmVlIiwiUmVhY3QiLCJqc3giLCJIaXN0b3J5IiwicmVmcmVzaFRvUHJldmlvdXMiLCJQcmV2aWV3IiwicmFuZG9tS2V5IiwiRHluYW1pY0NvbXBvbmVudCIsIm5ld0VsZW1lbnRzIiwiZWxlbWVudHMiLCJlbGVtZW50RXhpc3QiLCJzZWxlY3RlZEluZGV4IiwiZWxlbWVudFVuZGVyRWRpdCIsIm5ld0VsZW1lbnQiLCJzZWxlY3RlZGNvbXBvbmVudG5hbWUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7O0FDbEZhOztBQUViLElBQUksSUFBcUM7QUFDekMsbUJBQW1CLG1CQUFPLENBQUMsRUFBK0I7QUFDMUQsQ0FBQyxNQUFNLEVBRU47Ozs7Ozs7O0FDTlk7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1Q0FBdUMsZ0JBQWdCO0FBQ3ZELE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1CQUFtQixpQkFB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QWdCNVMsV0FBV0UsTUFBWCxHQUFrQixDQUFsQztBQUNIOztBQUVELFNBQUt1QyxRQUFMLENBQWM7QUFDVmlRLGtCQUFVMVMsVUFEQTtBQUVWb0QsaUJBQVM7QUFDTDlFLGtCQUFNOEUsUUFBUTlFLElBRFQ7QUFFTHlCLG9CQUFRcUQsUUFBUXJELE1BRlg7QUFHTDFCLG1CQUFPK0UsUUFBUS9FLEtBSFY7QUFJTHVDLG1CQUFPd0MsUUFBUXhDLEtBSlY7QUFLTDJDLG9CQUFRSCxRQUFRRyxNQUFSLElBQWtCO0FBTHJCLFNBRkM7QUFTVitCLG9CQUFZO0FBVEYsS0FBZDs7QUFZQSw0QkFBVSxXQUFWLEVBQXVCdEYsVUFBdkI7QUFDSDs7QUFHTSxTQUFTMEYsdUJBQVQsQ0FBa0NoRCxDQUFsQyxFQUFxQztBQUN4QyxRQUFJVCxnQkFBZ0JTLEVBQUVxSixhQUFGLENBQWdCMEMsU0FBaEIsQ0FBMEJoUSxLQUExQixDQUFnQyxJQUFoQyxFQUFzQyxDQUF0QyxDQUFwQjtBQUNBO0FBQ0EsUUFBSXNFLG9CQUFvQixLQUFLbkMsS0FBTCxDQUFXWixVQUFYLENBQXNCZ0QsSUFBdEIsQ0FBMkI7QUFBQSxlQUFXbkQsVUFBVXZCLElBQVYsS0FBaUIyRCxhQUE1QjtBQUFBLEtBQTNCLENBQXhCOztBQUVBcEQsV0FBT2tVLHFCQUFQLEdBQStCaFEsa0JBQWtCekUsSUFBakQ7QUFDQTtBQUNBLFNBQUttRSxRQUFMLENBQWM7QUFDVk07QUFEVSxLQUFkO0FBR0gsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEwKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuICdAbWVkaWEgJyArIGl0ZW1bMl0gKyAneycgKyBjb250ZW50ICsgJ30nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9ICcoJyArIGl0ZW1bMl0gKyAnKSBhbmQgKCcgKyBtZWRpYVF1ZXJ5ICsgJyknO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuICByZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufSIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJpbXBvcnQge3JlYWREYXRhLCB3cml0ZURhdGEsIHdyaXRlQ29tcG9uZW50LCByZWFkQ29tcG9uZW50LCBwb3BIaXN0b3J5IH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHJlYWREYXRhOiByZWFkRGF0YSxcbiAgICB3cml0ZURhdGE6IHdyaXRlRGF0YSxcbiAgICByZWFkQ29tcG9uZW50OiByZWFkQ29tcG9uZW50LFxuICAgIHdyaXRlQ29tcG9uZW50OiB3cml0ZUNvbXBvbmVudCxcbiAgICBwb3BIaXN0b3J5OiBwb3BIaXN0b3J5XG59IiwiLy8gRGVwZW5kZW5jaWVzLlxuXG5pbXBvcnQge2NyZWF0ZUNvbXBvbmVudH0gZnJvbSBcIi4uL2NyZWF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCB7cmVhZERhdGF9IGZyb20gXCIuLi9TdG9yYWdlXCI7XG5cbi8qKlxuICogXG4gKiBBc3NldCBpbiBzdHlsZSBzaGVldCBzeW50YXggLSAkYXNzZXRcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZXNoZWV0KHN0eWxlLCBuYW1lKSB7XG5cbiAgICAvLyBDaGVjayBpZiBzdHlsZSBoYXMgJGFzc2V0c1xuICAgIHdoaWxlKHN0eWxlLmluY2x1ZGVzKFwiJGFzc2V0c1wiKSl7XG4gICAgICAgIC8vIFJlcGxhY2UgaXQgd2l0aCBhc3NldCBibG9iIHVybFxuICAgICAgICBsZXQgYXNzZXQgPSBzdHlsZS5zcGxpdChcIlsnXCIpWzFdLnNwbGl0KGBdYClbMF0uc3BsaXQoXCJcIik7XG4gICAgICAgIGFzc2V0LnBvcCgpO1xuICAgICAgICBhc3NldCA9ICBhc3NldC5qb2luKFwiXCIpO1xuICAgICAgICBzdHlsZSA9IHN0eWxlLnJlcGxhY2UoYCRhc3NldHNbJyR7YXNzZXR9J11gLCBgdXJsKCR7d2luZG93LmFzc2V0c1thc3NldF19KWApXG4gICAgfVxuICAgIGxldCB0b0RlbGV0ZSA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtY29tcG9uZW50LW5hbWU9J1BhcmVudENvbXBvbmVudCddXCIpXTtcbiAgICB0b0RlbGV0ZS5mb3JFYWNoKGl0ZW09PntcbiAgICAgICAgaXRlbS5yZW1vdmUoKVxuICAgIH0pXG4gICAgdmFyIGR5bmFtaWNTdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgZHluYW1pY1N0eWxlLnNldEF0dHJpYnV0ZShcImRhdGEtY29tcG9uZW50LW5hbWVcIiwgbmFtZSk7XG4gICAgZHluYW1pY1N0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xuICAgIGR5bmFtaWNTdHlsZS5pbm5lckhUTUwgPSBzdHlsZTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGR5bmFtaWNTdHlsZSlcbn1cblxuLyoqIFRha2VzIGEgY29tcG9uZW50IGFuZCBjb252ZXJ0cyBpdCBhcyBhIHJlYWN0IGNvbXBvbmVudCAqL1xuZnVuY3Rpb24gc2F2ZVRvV2luZG93KCBjb21wb25lbnQgKSB7XG4gICAgY3JlYXRlU3R5bGVzaGVldChjb21wb25lbnQuc3R5bGUsIGNvbXBvbmVudC5uYW1lKVxuICAgIHdpbmRvd1tjb21wb25lbnQubmFtZV0gPSBjcmVhdGVDb21wb25lbnQoY29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gY2hlY2tOZXN0ZWRDb21wb25lbnRzKCBtYXJrdXApIHtcblxuICAgIHZhciBjb21wb25lbnRzID0gcmVhZERhdGEoXCJ1aS1lZGl0b3JcIik7XG5cbiAgICByZXR1cm4gY29tcG9uZW50cy5maWx0ZXIoY29tcG9uZW50PT4gbWFya3VwLmluY2x1ZGVzKGNvbXBvbmVudC5uYW1lKSkubGVuZ3RoID4wO1xufVxuXG4vKiogVGFrZXMgY29tcG9uZW50cyBhbmQgc2F2ZXMgdGhlbSB0byB3aW5kb3cgYXMgcmVhY3QgT2JqZWN0ICovXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUNvbXBvbmVudHNUb1dpbmRvdyggbmVzdGVkQ29tcG9uZW50cyl7XG4gICAgLy8gVHJhbnNwaWxlIHRoZW0gYW5kIG1ha2UgdGhlbSBnbG9iYWwuXG4gICAgbmVzdGVkQ29tcG9uZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGNvbXBvbmVudCl7XG4gICAgICAgIHNhdmVUb1dpbmRvdyhjb21wb25lbnQpXG4gICAgfSk7XG59XG5cbi8qKiBUYWtlcyBtYXJrdXAgYW5kIHJldHVybnMgY2hpbGRyZW4gY29tcG9uZW50IG9iamVjdHMuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmVzdGVkQ29tcG9uZW50cyAocGFyZW50KSB7XG4gICAgLy8gU2hvdWxkIGJlIGFibGUgdG8gZGV0ZWN0IG5lc3RlZCBjb21wb25lbnQuXG5cbiAgICBsZXQgY29tcG9uZW50cz0gcmVhZERhdGEoXCJ1aS1lZGl0b3JcIik7XG4gICAgbGV0IG5lc3RlZENvbXBvbmVudHMgPSBbcGFyZW50XTtcbiAgICBpZihjaGVja05lc3RlZENvbXBvbmVudHMocGFyZW50Lm1hcmt1cCkpe1xuICAgICAgICAvLyBmaW5kIGFsbCB0aGUgbmVzdGVkIGNvbXBvbmVudHMgZnJvbSB0aGUgbWFya3VwIGFuZCBwdXNoIGl0IHRvIG5lc3RlZENvbXBvbmVudHMuXG4gICAgICAgIGxldCBjaGlsZHJlbiA9IGNvbXBvbmVudHMuZmlsdGVyKGNvbXBvbmVudD0+IHBhcmVudC5tYXJrdXAuaW5jbHVkZXMoY29tcG9uZW50Lm5hbWUpKTtcbiAgICAgICAgLy8gRmluZCBncmFuZCBraWRzLlxuICAgICAgICBsZXQgZ3JhbmRLaWRzID0gY2hpbGRyZW4ubWFwKGdldE5lc3RlZENvbXBvbmVudHMpLmZsYXQoMylcbiAgICAgICAgbmVzdGVkQ29tcG9uZW50cy5wdXNoKC4uLmdyYW5kS2lkcylcbiAgICB9XG4gICAgcmV0dXJuIG5lc3RlZENvbXBvbmVudHMuZmlsdGVyKGNvbXBvbmVudD0+Y29tcG9uZW50ICYmIGNvbXBvbmVudC5tYXJrdXApO1xufVxuIiwiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbi8vIFN0eWxlcy5cblxuaW1wb3J0IFwiLi9TdHlsZS5jc3NcIjtcbmltcG9ydCBOb0ZvbGRlciBmcm9tIFwiLi4vTm9Gb2xkZXJcIjtcbmltcG9ydCBOZXdGb2xkZXIgZnJvbSBcIi4uL05ld0ZvbGRlclwiO1xuXG5pbXBvcnQge2RlbGV0ZUZvbGRlciwgdG9nZ2xlRm9sZGVyLCBzZWxlY3RGb2xkZXIsIGRlc2VsZWN0Rm9sZGVyfSBmcm9tIFwiLi9SZWR1Y2VyXCI7XG5pbXBvcnQge2Ryb3BIYW5kbGVyLCBkcmFnT3ZlckhhbmRsZXIsIGRyYWdMZWF2ZUhhbmRsZXIsIG9uRHJhZ1N0YXJ0fSBmcm9tIFwiLi9FdmVudHNcIjtcblxuY2xhc3MgRm9sZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzdGF0dXM6IFwiZmEgZmEtZm9sZGVyXCIsXG4gICAgICAgICAgICBmb2xkZXJDbGFzczogXCJuZXdGb2xkZXJcIixcbiAgICAgICAgICAgIG5hbWU6IHRoaXMucHJvcHMuZm9sZGVyLm5hbWUsXG4gICAgICAgICAgICBjb250ZW50czogdGhpcy5wcm9wcy5mb2xkZXIuY29udGVudHMsXG4gICAgICAgICAgICB0eXBlOiB0aGlzLnByb3BzLmZvbGRlci50eXBlXG4gICAgICAgIH07XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGRlbGV0ZUZvbGRlci5iaW5kKHRoaXMpKVxuICAgIH1cblxuXG4gICAgbmV3Rm9sZGVyKGZvbGRlcil7XG4gICAgICAgIHRoaXMucHJvcHMub25Gb2xkZXJVcGRhdGUoZm9sZGVyKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBsZXQgZm9sZGVyID0gdGhpcy5wcm9wcy5mb2xkZXI7XG4gICAgICAgIGxldCBjb250ZW50cyA9IHRoaXMucHJvcHMuY29udGVudHM7XG4gICAgICAgIGlmKGZvbGRlci50eXBlPT1cIm5ld0ZvbGRlclwiKXtcbiAgICAgICAgICAgIHJldHVybiAoPE5ld0ZvbGRlciBvbk5ld0ZvbGRlcj17dGhpcy5uZXdGb2xkZXIuYmluZCh0aGlzKX0vPilcbiAgICAgICAgfVxuICAgICAgICBpZihmb2xkZXIudHlwZT09XCJmb2xkZXJcIil7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5mb2xkZXJDbGFzc31cbiAgICAgICAgICAgICAgICAgICAgZGF0YS1mb2xkZXItbmFtZT17Zm9sZGVyLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyPXtzZWxlY3RGb2xkZXIuYmluZCh0aGlzKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtkZXNlbGVjdEZvbGRlci5iaW5kKHRoaXMpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRyb3A9e2Ryb3BIYW5kbGVyLmJpbmQodGhpcyl9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRHJhZ092ZXI9e2RyYWdPdmVySGFuZGxlci5iaW5kKHRoaXMpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRyYWdMZWF2ZT17ZHJhZ0xlYXZlSGFuZGxlci5iaW5kKHRoaXMpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRyYWdTdGFydD17b25EcmFnU3RhcnQuYmluZCh0aGlzKX0gPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e3RoaXMuc3RhdGUuc3RhdHVzfSBvbkNsaWNrPXt0b2dnbGVGb2xkZXIuYmluZCh0aGlzKX0+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb2xkZXJcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGZvbGRlciBuYW1lXCIgcmVhZE9ubHkgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX0vPlxuICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29udGVudHN9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmKGZvbGRlci50eXBlPT1cIm5vRm9sZGVyXCIpe1xuICAgICAgICAgICAgcmV0dXJuICg8Tm9Gb2xkZXIgY29udGVudHM9e2NvbnRlbnRzfT48L05vRm9sZGVyPilcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9sZGVyO1xuIiwiXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGRyb3BIYW5kbGVyKGV2KSB7XG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBjb21wb25lbnROYW1lID0gZXYuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJjb21wb25lbnQtbmFtZVwiKTtcbiAgICAgICAgbGV0IGZvbGRlck5hbWUgPSBldi5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcImZvbGRlci1uYW1lXCIpO1xuICAgICAgICBsZXQgY29udGVudHMgPSBBcnJheS5mcm9tKHRoaXMuc3RhdGUuY29udGVudHMpO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBkcm9wcGVkIGl0ZW0gaXMgYSBjb21wb25lbnRcbiAgICAgICAgaWYoY29tcG9uZW50TmFtZSl7XG4gICAgICAgICAgICBjb250ZW50cy5wdXNoKGNvbXBvbmVudE5hbWUpXG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2hlY2sgaWYgaXQgaXMgYSBmb2xkZXIuIEFsc28gY2hlY2sgaWYgd2UgYXJlIG5vdCBkcm9wcGluZyBvbiB0aGUgb3JpZ2luYWwgZm9sZGVyLiBtYXkgYmUgcmVtb3ZlIGl0IGZyb20gdGhlIGRvbS4gTk9QRS4gXG4gICAgICAgIGVsc2UgaWYoZm9sZGVyTmFtZSAmJiBmb2xkZXJOYW1lIT09dGhpcy5zdGF0ZS5mb2xkZXJOYW1lKXtcbiAgICAgICAgICAgIGNvbnRlbnRzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGZvbGRlck5hbWUsXG4gICAgICAgICAgICAgICAgY29udGVudHM6W10sXG4gICAgICAgICAgICAgICAgdHlwZTpcImZvbGRlclwiXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMub25Gb2xkZXJVcGRhdGUoe1xuICAgICAgICAgICAgbmFtZTogdGhpcy5zdGF0ZS5uYW1lLFxuICAgICAgICAgICAgY29udGVudHMgOiBjb250ZW50cyxcbiAgICAgICAgICAgIHR5cGU6XCJmb2xkZXJcIlxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRHJvcCBmcm9tIGZvbGRlclwiKTtcbiAgICB9XG5cbiAgICBleHBvcnQgZnVuY3Rpb24gZHJhZ092ZXJIYW5kbGVyKGV2KSB7XG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZm9sZGVyQ2xhc3M6IFwibmV3Rm9sZGVyIGRyYWdPdmVyXCJcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2coXCJEcmFnXCIpO1xuICAgIH1cblxuICAgIGV4cG9ydCBmdW5jdGlvbiBkcmFnTGVhdmVIYW5kbGVyKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJkcmFnXCIpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGZvbGRlckNsYXNzOiBcIm5ld0ZvbGRlclwiXG4gICAgICAgIH0pXG4gICAgfVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBvbkRyYWdTdGFydChlKXtcblxuICAgIGxldCBuYW1lID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtZm9sZGVyLW5hbWVcIilcbiAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKFwiZm9sZGVyLW5hbWVcIiwgbmFtZSk7XG59XG5cblxuXG5pbXBvcnQge8KgZ2V0TmVzdGVkQ29tcG9uZW50cyB9IGZyb20gXCIuLi8uLi8uLi8uLi91dGlsaXRpZXMvUnVudGltZVwiO1xuaW1wb3J0IHsgY29udmVydFRvUmVhY3QgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbGl0aWVzL0NvZGVHZW5lcmF0b3IvUmVhY3RcIjtcbmltcG9ydCB7IHJlYWREYXRhIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWxpdGllcy9TdG9yYWdlXCI7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG9uRXhwb3J0KGNvbXBvbmVudE5hbWUpIHtcbiAgICBsZXQgY29tcG9uZW50cyA9IHJlYWREYXRhKFwidWktZWRpdG9yXCIpO1xuICAgIGxldCBzZWxlY3RlZENvbXBvbmVudCA9IGNvbXBvbmVudHMuZmluZChjb21wb25lbnQ9PmNvbXBvbmVudC5uYW1lLmluY2x1ZGVzKGNvbXBvbmVudE5hbWUpKTtcbiAgICBsZXQgbmVzdGVkQ29tcG9uZW50cyA9IGdldE5lc3RlZENvbXBvbmVudHMoc2VsZWN0ZWRDb21wb25lbnQpO1xuXG4gICAgbGV0IHVuaXF1ZUNvbXBvbmVudHMgPSBbLi4ubmV3IFNldChuZXN0ZWRDb21wb25lbnRzLm1hcChjb209PmNvbS5uYW1lKSldLm1hcChuYW1lPT57XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzLmZpbmQoZWxlbWVudD0+ZWxlbWVudC5uYW1lPT09bmFtZSlcbiAgICB9KVxuICAgIGNvbnN0IHJlbW92ZVBhcmFudGhlc2lzID0gKGNvbXBvbmVudCk9PntcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5yZXBsYWNlKFwiKFwiLFwiXCIpLnJlcGxhY2UoXCJ9KVwiLFwifVwiKVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyh1bmlxdWVDb21wb25lbnRzLm1hcChmdW5jdGlvbihjb21wb25lbnQpe1xuICAgICAgICByZXR1cm4gY29udmVydFRvUmVhY3QoY29tcG9uZW50KVxuICAgIH0pLm1hcChyZW1vdmVQYXJhbnRoZXNpcykuam9pbihcIlwiKSk7XG59XG4iLCIvLyBFbGVtZW50cyB0byAgcmVhY3QgY29tcG9uZW50LlxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRUb1JlYWN0IChjb21wb25lbnQpe1xuXG4gICAgbGV0IG1hcmt1cCA9IFwibWFya3VwXCI7XG5cbiAgICBjb21wb25lbnQuZXZlbnRzLmZvckVhY2goZXZlbnQ9PntcbiAgICAgICAgZXZlbnQuaWQgPSBldmVudC5pZC5yZXBsYWNlKFwiLVwiLFwiXCIpO1xuICAgIH0pXG5cbiAgICBsZXQgYWRkUHJvcHM9IChjb21wb25lbnQpPT57XG4gICAgICAgIHJldHVybiBjb21wb25lbnRbbWFya3VwXS5yZXBsYWNlKFwiPlwiLGAgey4uLnRoaXMucHJvcHN9Pnt0aGlzLnByb3BzLmNoaWxkcmVufWApXG4gICAgfVxuXG4gICAgbGV0IGdldENvbXBvbmVudEV2ZW50ZWRNYXJrdXAgPSAobWFya3VwLCBldmVudHMpPT57XG4gICAgICAgIGV2ZW50cy5mb3JFYWNoKGV2ZW50PT57XG4gICAgICAgICAgICBsZXQgaWQgPSBgaWQ9XCIke2V2ZW50LmlkfVwiYDtcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIG1hcmt1cCBjb250YWlucyB0aGUgaWQuXG4gICAgICAgICAgICBpZihtYXJrdXAuaW5jbHVkZXMoaWQpKXtcbiAgICAgICAgICAgICAgICBtYXJrdXAgPSBtYXJrdXAucmVwbGFjZShpZCwgYCR7aWR9ICR7ZXZlbnQubmFtZX09e3RoaXMuJHtldmVudC5pZCtldmVudC5uYW1lfS5iaW5kKHRoaXMpfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaXRzIGEgY2hpbGQgY29tcG9uZW50LlxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBtYXJrdXAgPSBtYXJrdXAucmVwbGFjZShgPCR7ZXZlbnQuaWR9YCxgPCR7ZXZlbnQuaWR9ICR7ZXZlbnQubmFtZX09e3RoaXMuJHtldmVudC5pZCtldmVudC5uYW1lfS5iaW5kKHRoaXMpfWApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICByZXR1cm4gbWFya3VwLnNwbGl0KFwie3N0YXRlLlwiKS5qb2luKFwie3RoaXMuc3RhdGUuXCIpXG4gICAgfVxuXG4gICAgLy8gY2hlY2tzIGlmIHN0YXRlIG92ZXJyaWRlIGlzIG9uLiB0aGVuIGFkZHMgc3RhdGUgcHJvcCB0byBjaGlsZCBcbiAgICBsZXQgZ2V0U3RhdGVkTWFya3VwID0gKG1hcmt1cCk9PntcbiAgICAgICAgLy8gZm9yIGFsbCB0aGUgY29uZmlnLlxuICAgICAgICAvLyBmaWx0ZXIgY2hpbGQgd2l0aCBvdmVyaWRlIHN0YXRlIGlzIHRydWVcbiAgICAgICAgbGV0IGNvbmZpZyA9IEpTT04ucGFyc2UoY29tcG9uZW50LmNvbmZpZyk7XG4gICAgICAgIGxldCBjaGlsZHJlbkNvbmZpZyA9IE9iamVjdC5rZXlzKGNvbmZpZyk7XG4gICAgICAgIGNoaWxkcmVuQ29uZmlnLmZvckVhY2goY2hpbGROYW1lPT57XG5cbiAgICAgICAgICAgIC8vIFBSRUNBVVRJT046IEVkaXQgbWFya3VwIGZvciByZW5kZXJpbmcgbGlzdC4gU2hvdWxkIG5vdCB1c2Ugb3RoZXIgY29uZmlndXJhdGlvbiB3aGlsZSB1c2luZyB0aGlzLlxuICAgICAgICAgICAgaWYoY29uZmlnW2NoaWxkTmFtZV0ub3ZlcnJpZGUgKXtcbiAgICAgICAgICAgICAgICBsZXQgY2hpbGRNYXJrdXAgPSBgPCR7Y2hpbGROYW1lfT48LyR7Y2hpbGROYW1lfT5gO1xuXG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkTWFya3VwV2l0aFByb3BzID0gYDwke2NoaWxkTmFtZX0gc3RhdGU9e2l0ZW19IGtleT17aX0+PC8ke2NoaWxkTmFtZX0+YDtcbiAgICAgICAgICAgICAgICBsZXQgcmVuZGVyTGlzdE1hcmt1cCA9IGB7dGhpcy5zdGF0ZS4ke2NoaWxkTmFtZX0ubWFwKChpdGVtLGkpPT4ke2NoaWxkTWFya3VwV2l0aFByb3BzfSl9YDtcbiAgICAgICAgICAgICAgICBtYXJrdXAgPSAgbWFya3VwLnJlcGxhY2UoY2hpbGRNYXJrdXAsIHJlbmRlckxpc3RNYXJrdXApOyAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gbWFya3VwO1xuICAgIH1cbiAgICBcbiAgICBsZXQgcHJvcHNJbk1hcmt1cCA9IGFkZFByb3BzKGNvbXBvbmVudCk7XG4gICAgbGV0IHN0YXRlT3ZlcmlkZU1hcmt1cCA9IGdldFN0YXRlZE1hcmt1cChwcm9wc0luTWFya3VwKTtcbiAgICBsZXQgY29tcG9uZW50RXZlbnRlZE1hcmt1cCA9IGdldENvbXBvbmVudEV2ZW50ZWRNYXJrdXAoc3RhdGVPdmVyaWRlTWFya3VwLCBjb21wb25lbnQuZXZlbnRzKTtcblxuICAgIGxldCBSZWFjdENvbXBvbmVudCA9IFxuICAgIGAoXG4gICAgICAgIGNsYXNzICR7Y29tcG9uZW50Lm5hbWV9IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAgICAgXG4gICAgICAgICAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICAgICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5wcm9wcy5zdGF0ZSB8fCAke2NvbXBvbmVudC5zdGF0ZX07XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgJHtjb21wb25lbnQuZXZlbnRzLm1hcChldmVudD0+e1xuICAgICAgICAgICAgICAgIGlmKGV2ZW50LnB1Ymxpc2hhYmxlKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICR7ZXZlbnQuaWQrZXZlbnQubmFtZX0gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdGF0ZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAke2V2ZW50LnJlZHVjZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5zdGF0ZSA9IHN0YXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy4ke2V2ZW50LnB1Ymxpc2hOYW1lfT8gdGhpcy5wcm9wcy4ke2V2ZW50LnB1Ymxpc2hOYW1lfShlKTpudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgICAgICAgICAke2V2ZW50LmlkK2V2ZW50Lm5hbWV9IChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RhdGUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgJHtldmVudC5yZWR1Y2VyfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIH0pLmpvaW4oXCJcXG5cIil9XG4gICAgICAgIFxuICAgICAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoJHtjb21wb25lbnRFdmVudGVkTWFya3VwfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgYFxuICAgIHJldHVybiBSZWFjdENvbXBvbmVudDtcbn1cbiIsIi8vIExpYnJhcmllcy5cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5pbXBvcnQgTWVzc2FnZUNvbXBvbmVudCBmcm9tIFwiLi4vTWVzc2FnZUNvbXBvbmVudFwiO1xuXG5jbGFzcyBNZXNzYWdlc0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBsZXQgbWVzc2FnZXMgPSB0aGlzLnByb3BzLm1lc3NhZ2VzO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnNvbGVcIj5cbiAgICAgICAgICAgICAgICAgICAge21lc3NhZ2VzLm1hcCgobWVzc2FnZSxpbmRleCk9PjxNZXNzYWdlQ29tcG9uZW50IGtleT17aW5kZXh9IG1lc3NhZ2U9e21lc3NhZ2V9Lz4pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlc0NvbXBvbmVudDsiLCIvLyBMaWJyYXJpZXMuXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5cbi8vIERlcGVuZGVuY2llcy5cbmltcG9ydCBcIi4vSW5kZXgvaW5kZXguY3NzXCI7XG5cbi8vIENvbXBvbmVudHMuXG5cblxuaW1wb3J0IEFzc2V0cyBmcm9tIFwiLi9Bc3NldHNcIjtcbmltcG9ydCBDb21wb25lbnRzIGZyb20gXCIuL0NvbXBvbmVudHNcIjtcbmltcG9ydCBEcmFnZ2FibGVDb21wb25lbnQgZnJvbSBcIi4vVXRpbGl0aWVzL0NvbXBvbmVudHMvRHJhZ2dhYmxlQ29tcG9uZW50XCI7XG5pbXBvcnQgRWRpdG9yIGZyb20gXCIuL0VkaXRvclwiO1xuaW1wb3J0IEV2ZW50cyBmcm9tIFwiLi9FdmVudHNcIjtcbmltcG9ydCBIaXN0b3J5IGZyb20gXCIuL0hpc3RvcnlcIjtcbmltcG9ydCBQcmV2aWV3IGZyb20gXCIuL1ByZXZpZXdcIjtcblxuLy8gUmVkdWNlcnMuXG5pbXBvcnQgeyB1cGRhdGVFdmVudCwgdXBkYXRlQ29uZmlnLCBzYXZlRWxlbWVudCwgdXBkYXRlU2VsZWN0ZWRDb21wb25lbnQgfSBmcm9tIFwiLi9JbmRleC9SZWR1Y2VyXCI7XG5cbi8vIFV0aWxzXG5pbXBvcnQge3JlYWREYXRhLCB3cml0ZURhdGF9IGZyb20gXCIuL3V0aWxpdGllcy9TdG9yYWdlXCI7XG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIGxldCBjb21wb25lbnRzID0gcmVhZERhdGEoXCJ1aS1lZGl0b3JcIik7XG4gICAgICAgIGxldCBjb21wb25lbnROYW1lcyA9IGNvbXBvbmVudHMubWFwKGNvbXBvbmVudD0+Y29tcG9uZW50Lm5hbWUpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY29tcG9uZW50czogY29tcG9uZW50cyxcbiAgICAgICAgICAgIHNlbGVjdGVkVGFnIDogXCJcIixcbiAgICAgICAgICAgIGNvbXBvbmVudDoge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgbWFya3VwOiBcIlwiLFxuICAgICAgICAgICAgICAgIHN0eWxlOiBcIlwiLFxuICAgICAgICAgICAgICAgIHN0YXRlOiBcInsgfVwiLFxuICAgICAgICAgICAgICAgIGV2ZW50czogW11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZWxlY3RlZENvbXBvbmVudDogXCJcIixcbiAgICAgICAgICAgIGZvbGRlcnM6IHJlYWREYXRhKFwiZm9sZGVyc1wiKSB8fCBbe1xuICAgICAgICAgICAgICAgIHR5cGU6IFwibm9Gb2xkZXJcIixcbiAgICAgICAgICAgICAgICBjb250ZW50czogY29tcG9uZW50TmFtZXMsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJcIlxuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICBzaG93RWRpdG9yOiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlQ29uZmlnID0gdXBkYXRlQ29uZmlnLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlRXZlbnQgPSB1cGRhdGVFdmVudC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNhdmVFbGVtZW50ID0gc2F2ZUVsZW1lbnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZENvbXBvbmVudCA9IHVwZGF0ZVNlbGVjdGVkQ29tcG9uZW50LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgdXBkYXRlUHJldmlldyhlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcHJldmlld0NvbXBvbmVudDogZWxlbWVudFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1cGRhdGVTdHlsZXMoKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBlbGVtZW50OiB0aGlzLnN0YXRlLnNlbGVjdGVkQ29tcG9uZW50XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgdXBkYXRlRm9sZGVycyhmb2xkZXJzKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBmb2xkZXJzOiBmb2xkZXJzXG4gICAgICAgIH0pXG4gICAgICAgIHdyaXRlRGF0YShcImZvbGRlcnNcIiwgZm9sZGVycylcbiAgICB9XG5cbiAgICBvcGVuRWRpdG9yKCl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2hvd0VkaXRvcjogdHJ1ZVxuICAgICAgICB9KVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkQ29tcG9uZW50ID0gdGhpcy5zdGF0ZS5zZWxlY3RlZENvbXBvbmVudCB8fCB0aGlzLnN0YXRlLmNvbXBvbmVudDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPERyYWdnYWJsZUNvbXBvbmVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMDApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHM9e3RoaXMuc3RhdGUuY29tcG9uZW50c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2xkZXJzPXt0aGlzLnN0YXRlLmZvbGRlcnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRDb21wb25lbnQ9e3RoaXMuc3RhdGUuc2VsZWN0ZWRDb21wb25lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJDb21wb25lbnRzXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk9wZW5FZGl0b3I9e3RoaXMub3BlbkVkaXRvci5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdGlvbj17dGhpcy51cGRhdGVTZWxlY3RlZENvbXBvbmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Gb2xkZXJzVXBkYXRlPXt0aGlzLnVwZGF0ZUZvbGRlcnMuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlQ29tcG9uZW50PlxuXG4gICAgICAgICAgICAgICAgICAgIDxEcmFnZ2FibGVDb21wb25lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXRzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJBc3NldHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9EcmFnZ2FibGVDb21wb25lbnQ+XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIDxEcmFnZ2FibGVDb21wb25lbnQ+XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8RXZlbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMDApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17c2VsZWN0ZWRDb21wb25lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRUYWc9e3RoaXMuc3RhdGUuc2VsZWN0ZWRUYWd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cz17dGhpcy5zdGF0ZS5jb21wb25lbnRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRXZlbnRzVXBkYXRlPXt0aGlzLnVwZGF0ZUV2ZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29uZmlnVXBkYXRlPXt0aGlzLnVwZGF0ZUNvbmZpZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkV2ZW50c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgIFxuICAgICAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZUNvbXBvbmVudD5cbiAgICBcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hvd0VkaXRvcj8gXG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlQ29tcG9uZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMDApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50PXtzZWxlY3RlZENvbXBvbmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17c2VsZWN0ZWRDb21wb25lbnQubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya3VwPXtzZWxlY3RlZENvbXBvbmVudC5tYXJrdXB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzZWxlY3RlZENvbXBvbmVudC5zdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU9e3NlbGVjdGVkQ29tcG9uZW50LnN0YXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkVkaXRvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNhdmU9e3RoaXMuc2F2ZUVsZW1lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlQ29tcG9uZW50PlxuICAgICAgICAgICAgICAgICAgICA6IFxuICAgICAgICAgICAgICAgICAgICBudWxsfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlQ29tcG9uZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFByZXZpZXcgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMDApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17c2VsZWN0ZWRDb21wb25lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJQcmV2aWV3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlQ29tcG9uZW50PlxuICAgIFxuICAgICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlQ29tcG9uZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEhpc3RvcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkhpc3RvcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9EcmFnZ2FibGVDb21wb25lbnQ+XG4gICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGUpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxEcmFnZ2FibGVDb21wb25lbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxIaXN0b3J5XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiSGlzdG9yeVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9EcmFnZ2FibGVDb21wb25lbnQ+XG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxufVxuXG5cblJlYWN0RE9NLnJlbmRlcig8SW5kZXggLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5kZXhcIikpOyIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuOC42XG4gKiByZWFjdC5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0Jzt2YXIgaz1yZXF1aXJlKFwib2JqZWN0LWFzc2lnblwiKSxuPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3IscD1uP1N5bWJvbC5mb3IoXCJyZWFjdC5lbGVtZW50XCIpOjYwMTAzLHE9bj9TeW1ib2wuZm9yKFwicmVhY3QucG9ydGFsXCIpOjYwMTA2LHI9bj9TeW1ib2wuZm9yKFwicmVhY3QuZnJhZ21lbnRcIik6NjAxMDcsdD1uP1N5bWJvbC5mb3IoXCJyZWFjdC5zdHJpY3RfbW9kZVwiKTo2MDEwOCx1PW4/U3ltYm9sLmZvcihcInJlYWN0LnByb2ZpbGVyXCIpOjYwMTE0LHY9bj9TeW1ib2wuZm9yKFwicmVhY3QucHJvdmlkZXJcIik6NjAxMDksdz1uP1N5bWJvbC5mb3IoXCJyZWFjdC5jb250ZXh0XCIpOjYwMTEwLHg9bj9TeW1ib2wuZm9yKFwicmVhY3QuY29uY3VycmVudF9tb2RlXCIpOjYwMTExLHk9bj9TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIik6NjAxMTIsej1uP1N5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZVwiKTo2MDExMyxhYT1uP1N5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpOlxuNjAxMTUsYmE9bj9TeW1ib2wuZm9yKFwicmVhY3QubGF6eVwiKTo2MDExNixBPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5pdGVyYXRvcjtmdW5jdGlvbiBjYShhLGIsZCxjLGUsZyxoLGYpe2lmKCFhKXthPXZvaWQgMDtpZih2b2lkIDA9PT1iKWE9RXJyb3IoXCJNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCBmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLlwiKTtlbHNle3ZhciBsPVtkLGMsZSxnLGgsZl0sbT0wO2E9RXJyb3IoYi5yZXBsYWNlKC8lcy9nLGZ1bmN0aW9uKCl7cmV0dXJuIGxbbSsrXX0pKTthLm5hbWU9XCJJbnZhcmlhbnQgVmlvbGF0aW9uXCJ9YS5mcmFtZXNUb1BvcD0xO3Rocm93IGE7fX1cbmZ1bmN0aW9uIEIoYSl7Zm9yKHZhciBiPWFyZ3VtZW50cy5sZW5ndGgtMSxkPVwiaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL2Vycm9yLWRlY29kZXIuaHRtbD9pbnZhcmlhbnQ9XCIrYSxjPTA7YzxiO2MrKylkKz1cIiZhcmdzW109XCIrZW5jb2RlVVJJQ29tcG9uZW50KGFyZ3VtZW50c1tjKzFdKTtjYSghMSxcIk1pbmlmaWVkIFJlYWN0IGVycm9yICNcIithK1wiOyB2aXNpdCAlcyBmb3IgdGhlIGZ1bGwgbWVzc2FnZSBvciB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgZm9yIGZ1bGwgZXJyb3JzIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuIFwiLGQpfXZhciBDPXtpc01vdW50ZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hMX0sZW5xdWV1ZUZvcmNlVXBkYXRlOmZ1bmN0aW9uKCl7fSxlbnF1ZXVlUmVwbGFjZVN0YXRlOmZ1bmN0aW9uKCl7fSxlbnF1ZXVlU2V0U3RhdGU6ZnVuY3Rpb24oKXt9fSxEPXt9O1xuZnVuY3Rpb24gRShhLGIsZCl7dGhpcy5wcm9wcz1hO3RoaXMuY29udGV4dD1iO3RoaXMucmVmcz1EO3RoaXMudXBkYXRlcj1kfHxDfUUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9e307RS5wcm90b3R5cGUuc2V0U3RhdGU9ZnVuY3Rpb24oYSxiKXtcIm9iamVjdFwiIT09dHlwZW9mIGEmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBhJiZudWxsIT1hP0IoXCI4NVwiKTp2b2lkIDA7dGhpcy51cGRhdGVyLmVucXVldWVTZXRTdGF0ZSh0aGlzLGEsYixcInNldFN0YXRlXCIpfTtFLnByb3RvdHlwZS5mb3JjZVVwZGF0ZT1mdW5jdGlvbihhKXt0aGlzLnVwZGF0ZXIuZW5xdWV1ZUZvcmNlVXBkYXRlKHRoaXMsYSxcImZvcmNlVXBkYXRlXCIpfTtmdW5jdGlvbiBGKCl7fUYucHJvdG90eXBlPUUucHJvdG90eXBlO2Z1bmN0aW9uIEcoYSxiLGQpe3RoaXMucHJvcHM9YTt0aGlzLmNvbnRleHQ9Yjt0aGlzLnJlZnM9RDt0aGlzLnVwZGF0ZXI9ZHx8Q312YXIgSD1HLnByb3RvdHlwZT1uZXcgRjtcbkguY29uc3RydWN0b3I9RztrKEgsRS5wcm90b3R5cGUpO0guaXNQdXJlUmVhY3RDb21wb25lbnQ9ITA7dmFyIEk9e2N1cnJlbnQ6bnVsbH0sSj17Y3VycmVudDpudWxsfSxLPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksTD17a2V5OiEwLHJlZjohMCxfX3NlbGY6ITAsX19zb3VyY2U6ITB9O1xuZnVuY3Rpb24gTShhLGIsZCl7dmFyIGM9dm9pZCAwLGU9e30sZz1udWxsLGg9bnVsbDtpZihudWxsIT1iKWZvcihjIGluIHZvaWQgMCE9PWIucmVmJiYoaD1iLnJlZiksdm9pZCAwIT09Yi5rZXkmJihnPVwiXCIrYi5rZXkpLGIpSy5jYWxsKGIsYykmJiFMLmhhc093blByb3BlcnR5KGMpJiYoZVtjXT1iW2NdKTt2YXIgZj1hcmd1bWVudHMubGVuZ3RoLTI7aWYoMT09PWYpZS5jaGlsZHJlbj1kO2Vsc2UgaWYoMTxmKXtmb3IodmFyIGw9QXJyYXkoZiksbT0wO208ZjttKyspbFttXT1hcmd1bWVudHNbbSsyXTtlLmNoaWxkcmVuPWx9aWYoYSYmYS5kZWZhdWx0UHJvcHMpZm9yKGMgaW4gZj1hLmRlZmF1bHRQcm9wcyxmKXZvaWQgMD09PWVbY10mJihlW2NdPWZbY10pO3JldHVybnskJHR5cGVvZjpwLHR5cGU6YSxrZXk6ZyxyZWY6aCxwcm9wczplLF9vd25lcjpKLmN1cnJlbnR9fVxuZnVuY3Rpb24gZGEoYSxiKXtyZXR1cm57JCR0eXBlb2Y6cCx0eXBlOmEudHlwZSxrZXk6YixyZWY6YS5yZWYscHJvcHM6YS5wcm9wcyxfb3duZXI6YS5fb3duZXJ9fWZ1bmN0aW9uIE4oYSl7cmV0dXJuXCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSYmYS4kJHR5cGVvZj09PXB9ZnVuY3Rpb24gZXNjYXBlKGEpe3ZhciBiPXtcIj1cIjpcIj0wXCIsXCI6XCI6XCI9MlwifTtyZXR1cm5cIiRcIisoXCJcIithKS5yZXBsYWNlKC9bPTpdL2csZnVuY3Rpb24oYSl7cmV0dXJuIGJbYV19KX12YXIgTz0vXFwvKy9nLFA9W107ZnVuY3Rpb24gUShhLGIsZCxjKXtpZihQLmxlbmd0aCl7dmFyIGU9UC5wb3AoKTtlLnJlc3VsdD1hO2Uua2V5UHJlZml4PWI7ZS5mdW5jPWQ7ZS5jb250ZXh0PWM7ZS5jb3VudD0wO3JldHVybiBlfXJldHVybntyZXN1bHQ6YSxrZXlQcmVmaXg6YixmdW5jOmQsY29udGV4dDpjLGNvdW50OjB9fVxuZnVuY3Rpb24gUihhKXthLnJlc3VsdD1udWxsO2Eua2V5UHJlZml4PW51bGw7YS5mdW5jPW51bGw7YS5jb250ZXh0PW51bGw7YS5jb3VudD0wOzEwPlAubGVuZ3RoJiZQLnB1c2goYSl9XG5mdW5jdGlvbiBTKGEsYixkLGMpe3ZhciBlPXR5cGVvZiBhO2lmKFwidW5kZWZpbmVkXCI9PT1lfHxcImJvb2xlYW5cIj09PWUpYT1udWxsO3ZhciBnPSExO2lmKG51bGw9PT1hKWc9ITA7ZWxzZSBzd2l0Y2goZSl7Y2FzZSBcInN0cmluZ1wiOmNhc2UgXCJudW1iZXJcIjpnPSEwO2JyZWFrO2Nhc2UgXCJvYmplY3RcIjpzd2l0Y2goYS4kJHR5cGVvZil7Y2FzZSBwOmNhc2UgcTpnPSEwfX1pZihnKXJldHVybiBkKGMsYSxcIlwiPT09Yj9cIi5cIitUKGEsMCk6YiksMTtnPTA7Yj1cIlwiPT09Yj9cIi5cIjpiK1wiOlwiO2lmKEFycmF5LmlzQXJyYXkoYSkpZm9yKHZhciBoPTA7aDxhLmxlbmd0aDtoKyspe2U9YVtoXTt2YXIgZj1iK1QoZSxoKTtnKz1TKGUsZixkLGMpfWVsc2UgaWYobnVsbD09PWF8fFwib2JqZWN0XCIhPT10eXBlb2YgYT9mPW51bGw6KGY9QSYmYVtBXXx8YVtcIkBAaXRlcmF0b3JcIl0sZj1cImZ1bmN0aW9uXCI9PT10eXBlb2YgZj9mOm51bGwpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBmKWZvcihhPWYuY2FsbChhKSxoPVxuMDshKGU9YS5uZXh0KCkpLmRvbmU7KWU9ZS52YWx1ZSxmPWIrVChlLGgrKyksZys9UyhlLGYsZCxjKTtlbHNlXCJvYmplY3RcIj09PWUmJihkPVwiXCIrYSxCKFwiMzFcIixcIltvYmplY3QgT2JqZWN0XVwiPT09ZD9cIm9iamVjdCB3aXRoIGtleXMge1wiK09iamVjdC5rZXlzKGEpLmpvaW4oXCIsIFwiKStcIn1cIjpkLFwiXCIpKTtyZXR1cm4gZ31mdW5jdGlvbiBVKGEsYixkKXtyZXR1cm4gbnVsbD09YT8wOlMoYSxcIlwiLGIsZCl9ZnVuY3Rpb24gVChhLGIpe3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJm51bGwhPWEua2V5P2VzY2FwZShhLmtleSk6Yi50b1N0cmluZygzNil9ZnVuY3Rpb24gZWEoYSxiKXthLmZ1bmMuY2FsbChhLmNvbnRleHQsYixhLmNvdW50KyspfVxuZnVuY3Rpb24gZmEoYSxiLGQpe3ZhciBjPWEucmVzdWx0LGU9YS5rZXlQcmVmaXg7YT1hLmZ1bmMuY2FsbChhLmNvbnRleHQsYixhLmNvdW50KyspO0FycmF5LmlzQXJyYXkoYSk/VihhLGMsZCxmdW5jdGlvbihhKXtyZXR1cm4gYX0pOm51bGwhPWEmJihOKGEpJiYoYT1kYShhLGUrKCFhLmtleXx8YiYmYi5rZXk9PT1hLmtleT9cIlwiOihcIlwiK2Eua2V5KS5yZXBsYWNlKE8sXCIkJi9cIikrXCIvXCIpK2QpKSxjLnB1c2goYSkpfWZ1bmN0aW9uIFYoYSxiLGQsYyxlKXt2YXIgZz1cIlwiO251bGwhPWQmJihnPShcIlwiK2QpLnJlcGxhY2UoTyxcIiQmL1wiKStcIi9cIik7Yj1RKGIsZyxjLGUpO1UoYSxmYSxiKTtSKGIpfWZ1bmN0aW9uIFcoKXt2YXIgYT1JLmN1cnJlbnQ7bnVsbD09PWE/QihcIjMyMVwiKTp2b2lkIDA7cmV0dXJuIGF9XG52YXIgWD17Q2hpbGRyZW46e21hcDpmdW5jdGlvbihhLGIsZCl7aWYobnVsbD09YSlyZXR1cm4gYTt2YXIgYz1bXTtWKGEsYyxudWxsLGIsZCk7cmV0dXJuIGN9LGZvckVhY2g6ZnVuY3Rpb24oYSxiLGQpe2lmKG51bGw9PWEpcmV0dXJuIGE7Yj1RKG51bGwsbnVsbCxiLGQpO1UoYSxlYSxiKTtSKGIpfSxjb3VudDpmdW5jdGlvbihhKXtyZXR1cm4gVShhLGZ1bmN0aW9uKCl7cmV0dXJuIG51bGx9LG51bGwpfSx0b0FycmF5OmZ1bmN0aW9uKGEpe3ZhciBiPVtdO1YoYSxiLG51bGwsZnVuY3Rpb24oYSl7cmV0dXJuIGF9KTtyZXR1cm4gYn0sb25seTpmdW5jdGlvbihhKXtOKGEpP3ZvaWQgMDpCKFwiMTQzXCIpO3JldHVybiBhfX0sY3JlYXRlUmVmOmZ1bmN0aW9uKCl7cmV0dXJue2N1cnJlbnQ6bnVsbH19LENvbXBvbmVudDpFLFB1cmVDb21wb25lbnQ6RyxjcmVhdGVDb250ZXh0OmZ1bmN0aW9uKGEsYil7dm9pZCAwPT09YiYmKGI9bnVsbCk7YT17JCR0eXBlb2Y6dyxfY2FsY3VsYXRlQ2hhbmdlZEJpdHM6Yixcbl9jdXJyZW50VmFsdWU6YSxfY3VycmVudFZhbHVlMjphLF90aHJlYWRDb3VudDowLFByb3ZpZGVyOm51bGwsQ29uc3VtZXI6bnVsbH07YS5Qcm92aWRlcj17JCR0eXBlb2Y6dixfY29udGV4dDphfTtyZXR1cm4gYS5Db25zdW1lcj1hfSxmb3J3YXJkUmVmOmZ1bmN0aW9uKGEpe3JldHVybnskJHR5cGVvZjp5LHJlbmRlcjphfX0sbGF6eTpmdW5jdGlvbihhKXtyZXR1cm57JCR0eXBlb2Y6YmEsX2N0b3I6YSxfc3RhdHVzOi0xLF9yZXN1bHQ6bnVsbH19LG1lbW86ZnVuY3Rpb24oYSxiKXtyZXR1cm57JCR0eXBlb2Y6YWEsdHlwZTphLGNvbXBhcmU6dm9pZCAwPT09Yj9udWxsOmJ9fSx1c2VDYWxsYmFjazpmdW5jdGlvbihhLGIpe3JldHVybiBXKCkudXNlQ2FsbGJhY2soYSxiKX0sdXNlQ29udGV4dDpmdW5jdGlvbihhLGIpe3JldHVybiBXKCkudXNlQ29udGV4dChhLGIpfSx1c2VFZmZlY3Q6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gVygpLnVzZUVmZmVjdChhLGIpfSx1c2VJbXBlcmF0aXZlSGFuZGxlOmZ1bmN0aW9uKGEsXG5iLGQpe3JldHVybiBXKCkudXNlSW1wZXJhdGl2ZUhhbmRsZShhLGIsZCl9LHVzZURlYnVnVmFsdWU6ZnVuY3Rpb24oKXt9LHVzZUxheW91dEVmZmVjdDpmdW5jdGlvbihhLGIpe3JldHVybiBXKCkudXNlTGF5b3V0RWZmZWN0KGEsYil9LHVzZU1lbW86ZnVuY3Rpb24oYSxiKXtyZXR1cm4gVygpLnVzZU1lbW8oYSxiKX0sdXNlUmVkdWNlcjpmdW5jdGlvbihhLGIsZCl7cmV0dXJuIFcoKS51c2VSZWR1Y2VyKGEsYixkKX0sdXNlUmVmOmZ1bmN0aW9uKGEpe3JldHVybiBXKCkudXNlUmVmKGEpfSx1c2VTdGF0ZTpmdW5jdGlvbihhKXtyZXR1cm4gVygpLnVzZVN0YXRlKGEpfSxGcmFnbWVudDpyLFN0cmljdE1vZGU6dCxTdXNwZW5zZTp6LGNyZWF0ZUVsZW1lbnQ6TSxjbG9uZUVsZW1lbnQ6ZnVuY3Rpb24oYSxiLGQpe251bGw9PT1hfHx2b2lkIDA9PT1hP0IoXCIyNjdcIixhKTp2b2lkIDA7dmFyIGM9dm9pZCAwLGU9ayh7fSxhLnByb3BzKSxnPWEua2V5LGg9YS5yZWYsZj1hLl9vd25lcjtpZihudWxsIT1cbmIpe3ZvaWQgMCE9PWIucmVmJiYoaD1iLnJlZixmPUouY3VycmVudCk7dm9pZCAwIT09Yi5rZXkmJihnPVwiXCIrYi5rZXkpO3ZhciBsPXZvaWQgMDthLnR5cGUmJmEudHlwZS5kZWZhdWx0UHJvcHMmJihsPWEudHlwZS5kZWZhdWx0UHJvcHMpO2ZvcihjIGluIGIpSy5jYWxsKGIsYykmJiFMLmhhc093blByb3BlcnR5KGMpJiYoZVtjXT12b2lkIDA9PT1iW2NdJiZ2b2lkIDAhPT1sP2xbY106YltjXSl9Yz1hcmd1bWVudHMubGVuZ3RoLTI7aWYoMT09PWMpZS5jaGlsZHJlbj1kO2Vsc2UgaWYoMTxjKXtsPUFycmF5KGMpO2Zvcih2YXIgbT0wO208YzttKyspbFttXT1hcmd1bWVudHNbbSsyXTtlLmNoaWxkcmVuPWx9cmV0dXJueyQkdHlwZW9mOnAsdHlwZTphLnR5cGUsa2V5OmcscmVmOmgscHJvcHM6ZSxfb3duZXI6Zn19LGNyZWF0ZUZhY3Rvcnk6ZnVuY3Rpb24oYSl7dmFyIGI9TS5iaW5kKG51bGwsYSk7Yi50eXBlPWE7cmV0dXJuIGJ9LGlzVmFsaWRFbGVtZW50Ok4sdmVyc2lvbjpcIjE2LjguNlwiLFxudW5zdGFibGVfQ29uY3VycmVudE1vZGU6eCx1bnN0YWJsZV9Qcm9maWxlcjp1LF9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEOntSZWFjdEN1cnJlbnREaXNwYXRjaGVyOkksUmVhY3RDdXJyZW50T3duZXI6Sixhc3NpZ246a319LFk9e2RlZmF1bHQ6WH0sWj1ZJiZYfHxZO21vZHVsZS5leHBvcnRzPVouZGVmYXVsdHx8WjtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gY2hlY2tEQ0UoKSB7XG4gIC8qIGdsb2JhbCBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gKi9cbiAgaWYgKFxuICAgIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gPT09ICd1bmRlZmluZWQnIHx8XG4gICAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5jaGVja0RDRSAhPT0gJ2Z1bmN0aW9uJ1xuICApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBUaGlzIGJyYW5jaCBpcyB1bnJlYWNoYWJsZSBiZWNhdXNlIHRoaXMgZnVuY3Rpb24gaXMgb25seSBjYWxsZWRcbiAgICAvLyBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGNvbmRpdGlvbiBpcyB0cnVlIG9ubHkgaW4gZGV2ZWxvcG1lbnQuXG4gICAgLy8gVGhlcmVmb3JlIGlmIHRoZSBicmFuY2ggaXMgc3RpbGwgaGVyZSwgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdhc24ndFxuICAgIC8vIHByb3Blcmx5IGFwcGxpZWQuXG4gICAgLy8gRG9uJ3QgY2hhbmdlIHRoZSBtZXNzYWdlLiBSZWFjdCBEZXZUb29scyByZWxpZXMgb24gaXQuIEFsc28gbWFrZSBzdXJlXG4gICAgLy8gdGhpcyBtZXNzYWdlIGRvZXNuJ3Qgb2NjdXIgZWxzZXdoZXJlIGluIHRoaXMgZnVuY3Rpb24sIG9yIGl0IHdpbGwgY2F1c2VcbiAgICAvLyBhIGZhbHNlIHBvc2l0aXZlLlxuICAgIHRocm93IG5ldyBFcnJvcignXl9eJyk7XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBWZXJpZnkgdGhhdCB0aGUgY29kZSBhYm92ZSBoYXMgYmVlbiBkZWFkIGNvZGUgZWxpbWluYXRlZCAoRENFJ2QpLlxuICAgIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5jaGVja0RDRShjaGVja0RDRSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIERldlRvb2xzIHNob3VsZG4ndCBjcmFzaCBSZWFjdCwgbm8gbWF0dGVyIHdoYXQuXG4gICAgLy8gV2Ugc2hvdWxkIHN0aWxsIHJlcG9ydCBpbiBjYXNlIHdlIGJyZWFrIHRoaXMgY29kZS5cbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gIH1cbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgLy8gRENFIGNoZWNrIHNob3VsZCBoYXBwZW4gYmVmb3JlIFJlYWN0RE9NIGJ1bmRsZSBleGVjdXRlcyBzbyB0aGF0XG4gIC8vIERldlRvb2xzIGNhbiByZXBvcnQgYmFkIG1pbmlmaWNhdGlvbiBkdXJpbmcgaW5qZWN0aW9uLlxuICBjaGVja0RDRSgpO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWRvbS5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1kb20uZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuOC42XG4gKiByZWFjdC1kb20ucHJvZHVjdGlvbi5taW4uanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4vKlxuIE1vZGVybml6ciAzLjAuMHByZSAoQ3VzdG9tIEJ1aWxkKSB8IE1JVFxuKi9cbid1c2Ugc3RyaWN0Jzt2YXIgYWE9cmVxdWlyZShcInJlYWN0XCIpLG49cmVxdWlyZShcIm9iamVjdC1hc3NpZ25cIikscj1yZXF1aXJlKFwic2NoZWR1bGVyXCIpO2Z1bmN0aW9uIGJhKGEsYixjLGQsZSxmLGcsaCl7aWYoIWEpe2E9dm9pZCAwO2lmKHZvaWQgMD09PWIpYT1FcnJvcihcIk1pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50IGZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuXCIpO2Vsc2V7dmFyIGw9W2MsZCxlLGYsZyxoXSxrPTA7YT1FcnJvcihiLnJlcGxhY2UoLyVzL2csZnVuY3Rpb24oKXtyZXR1cm4gbFtrKytdfSkpO2EubmFtZT1cIkludmFyaWFudCBWaW9sYXRpb25cIn1hLmZyYW1lc1RvUG9wPTE7dGhyb3cgYTt9fVxuZnVuY3Rpb24geChhKXtmb3IodmFyIGI9YXJndW1lbnRzLmxlbmd0aC0xLGM9XCJodHRwczovL3JlYWN0anMub3JnL2RvY3MvZXJyb3ItZGVjb2Rlci5odG1sP2ludmFyaWFudD1cIithLGQ9MDtkPGI7ZCsrKWMrPVwiJmFyZ3NbXT1cIitlbmNvZGVVUklDb21wb25lbnQoYXJndW1lbnRzW2QrMV0pO2JhKCExLFwiTWluaWZpZWQgUmVhY3QgZXJyb3IgI1wiK2ErXCI7IHZpc2l0ICVzIGZvciB0aGUgZnVsbCBtZXNzYWdlIG9yIHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCBmb3IgZnVsbCBlcnJvcnMgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4gXCIsYyl9YWE/dm9pZCAwOngoXCIyMjdcIik7ZnVuY3Rpb24gY2EoYSxiLGMsZCxlLGYsZyxoLGwpe3ZhciBrPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywzKTt0cnl7Yi5hcHBseShjLGspfWNhdGNoKG0pe3RoaXMub25FcnJvcihtKX19XG52YXIgZGE9ITEsZWE9bnVsbCxmYT0hMSxoYT1udWxsLGlhPXtvbkVycm9yOmZ1bmN0aW9uKGEpe2RhPSEwO2VhPWF9fTtmdW5jdGlvbiBqYShhLGIsYyxkLGUsZixnLGgsbCl7ZGE9ITE7ZWE9bnVsbDtjYS5hcHBseShpYSxhcmd1bWVudHMpfWZ1bmN0aW9uIGthKGEsYixjLGQsZSxmLGcsaCxsKXtqYS5hcHBseSh0aGlzLGFyZ3VtZW50cyk7aWYoZGEpe2lmKGRhKXt2YXIgaz1lYTtkYT0hMTtlYT1udWxsfWVsc2UgeChcIjE5OFwiKSxrPXZvaWQgMDtmYXx8KGZhPSEwLGhhPWspfX12YXIgbGE9bnVsbCxtYT17fTtcbmZ1bmN0aW9uIG5hKCl7aWYobGEpZm9yKHZhciBhIGluIG1hKXt2YXIgYj1tYVthXSxjPWxhLmluZGV4T2YoYSk7LTE8Yz92b2lkIDA6eChcIjk2XCIsYSk7aWYoIW9hW2NdKXtiLmV4dHJhY3RFdmVudHM/dm9pZCAwOngoXCI5N1wiLGEpO29hW2NdPWI7Yz1iLmV2ZW50VHlwZXM7Zm9yKHZhciBkIGluIGMpe3ZhciBlPXZvaWQgMDt2YXIgZj1jW2RdLGc9YixoPWQ7cGEuaGFzT3duUHJvcGVydHkoaCk/eChcIjk5XCIsaCk6dm9pZCAwO3BhW2hdPWY7dmFyIGw9Zi5waGFzZWRSZWdpc3RyYXRpb25OYW1lcztpZihsKXtmb3IoZSBpbiBsKWwuaGFzT3duUHJvcGVydHkoZSkmJnFhKGxbZV0sZyxoKTtlPSEwfWVsc2UgZi5yZWdpc3RyYXRpb25OYW1lPyhxYShmLnJlZ2lzdHJhdGlvbk5hbWUsZyxoKSxlPSEwKTplPSExO2U/dm9pZCAwOngoXCI5OFwiLGQsYSl9fX19XG5mdW5jdGlvbiBxYShhLGIsYyl7cmFbYV0/eChcIjEwMFwiLGEpOnZvaWQgMDtyYVthXT1iO3NhW2FdPWIuZXZlbnRUeXBlc1tjXS5kZXBlbmRlbmNpZXN9dmFyIG9hPVtdLHBhPXt9LHJhPXt9LHNhPXt9LHRhPW51bGwsdWE9bnVsbCx2YT1udWxsO2Z1bmN0aW9uIHdhKGEsYixjKXt2YXIgZD1hLnR5cGV8fFwidW5rbm93bi1ldmVudFwiO2EuY3VycmVudFRhcmdldD12YShjKTtrYShkLGIsdm9pZCAwLGEpO2EuY3VycmVudFRhcmdldD1udWxsfWZ1bmN0aW9uIHhhKGEsYil7bnVsbD09Yj94KFwiMzBcIik6dm9pZCAwO2lmKG51bGw9PWEpcmV0dXJuIGI7aWYoQXJyYXkuaXNBcnJheShhKSl7aWYoQXJyYXkuaXNBcnJheShiKSlyZXR1cm4gYS5wdXNoLmFwcGx5KGEsYiksYTthLnB1c2goYik7cmV0dXJuIGF9cmV0dXJuIEFycmF5LmlzQXJyYXkoYik/W2FdLmNvbmNhdChiKTpbYSxiXX1cbmZ1bmN0aW9uIHlhKGEsYixjKXtBcnJheS5pc0FycmF5KGEpP2EuZm9yRWFjaChiLGMpOmEmJmIuY2FsbChjLGEpfXZhciB6YT1udWxsO2Z1bmN0aW9uIEFhKGEpe2lmKGEpe3ZhciBiPWEuX2Rpc3BhdGNoTGlzdGVuZXJzLGM9YS5fZGlzcGF0Y2hJbnN0YW5jZXM7aWYoQXJyYXkuaXNBcnJheShiKSlmb3IodmFyIGQ9MDtkPGIubGVuZ3RoJiYhYS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpO2QrKyl3YShhLGJbZF0sY1tkXSk7ZWxzZSBiJiZ3YShhLGIsYyk7YS5fZGlzcGF0Y2hMaXN0ZW5lcnM9bnVsbDthLl9kaXNwYXRjaEluc3RhbmNlcz1udWxsO2EuaXNQZXJzaXN0ZW50KCl8fGEuY29uc3RydWN0b3IucmVsZWFzZShhKX19XG52YXIgQmE9e2luamVjdEV2ZW50UGx1Z2luT3JkZXI6ZnVuY3Rpb24oYSl7bGE/eChcIjEwMVwiKTp2b2lkIDA7bGE9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYSk7bmEoKX0saW5qZWN0RXZlbnRQbHVnaW5zQnlOYW1lOmZ1bmN0aW9uKGEpe3ZhciBiPSExLGM7Zm9yKGMgaW4gYSlpZihhLmhhc093blByb3BlcnR5KGMpKXt2YXIgZD1hW2NdO21hLmhhc093blByb3BlcnR5KGMpJiZtYVtjXT09PWR8fChtYVtjXT94KFwiMTAyXCIsYyk6dm9pZCAwLG1hW2NdPWQsYj0hMCl9YiYmbmEoKX19O1xuZnVuY3Rpb24gQ2EoYSxiKXt2YXIgYz1hLnN0YXRlTm9kZTtpZighYylyZXR1cm4gbnVsbDt2YXIgZD10YShjKTtpZighZClyZXR1cm4gbnVsbDtjPWRbYl07YTpzd2l0Y2goYil7Y2FzZSBcIm9uQ2xpY2tcIjpjYXNlIFwib25DbGlja0NhcHR1cmVcIjpjYXNlIFwib25Eb3VibGVDbGlja1wiOmNhc2UgXCJvbkRvdWJsZUNsaWNrQ2FwdHVyZVwiOmNhc2UgXCJvbk1vdXNlRG93blwiOmNhc2UgXCJvbk1vdXNlRG93bkNhcHR1cmVcIjpjYXNlIFwib25Nb3VzZU1vdmVcIjpjYXNlIFwib25Nb3VzZU1vdmVDYXB0dXJlXCI6Y2FzZSBcIm9uTW91c2VVcFwiOmNhc2UgXCJvbk1vdXNlVXBDYXB0dXJlXCI6KGQ9IWQuZGlzYWJsZWQpfHwoYT1hLnR5cGUsZD0hKFwiYnV0dG9uXCI9PT1hfHxcImlucHV0XCI9PT1hfHxcInNlbGVjdFwiPT09YXx8XCJ0ZXh0YXJlYVwiPT09YSkpO2E9IWQ7YnJlYWsgYTtkZWZhdWx0OmE9ITF9aWYoYSlyZXR1cm4gbnVsbDtjJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgYz94KFwiMjMxXCIsYix0eXBlb2YgYyk6dm9pZCAwO1xucmV0dXJuIGN9ZnVuY3Rpb24gRGEoYSl7bnVsbCE9PWEmJih6YT14YSh6YSxhKSk7YT16YTt6YT1udWxsO2lmKGEmJih5YShhLEFhKSx6YT94KFwiOTVcIik6dm9pZCAwLGZhKSl0aHJvdyBhPWhhLGZhPSExLGhhPW51bGwsYTt9dmFyIEVhPU1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpLEZhPVwiX19yZWFjdEludGVybmFsSW5zdGFuY2UkXCIrRWEsR2E9XCJfX3JlYWN0RXZlbnRIYW5kbGVycyRcIitFYTtmdW5jdGlvbiBIYShhKXtpZihhW0ZhXSlyZXR1cm4gYVtGYV07Zm9yKDshYVtGYV07KWlmKGEucGFyZW50Tm9kZSlhPWEucGFyZW50Tm9kZTtlbHNlIHJldHVybiBudWxsO2E9YVtGYV07cmV0dXJuIDU9PT1hLnRhZ3x8Nj09PWEudGFnP2E6bnVsbH1mdW5jdGlvbiBJYShhKXthPWFbRmFdO3JldHVybiFhfHw1IT09YS50YWcmJjYhPT1hLnRhZz9udWxsOmF9XG5mdW5jdGlvbiBKYShhKXtpZig1PT09YS50YWd8fDY9PT1hLnRhZylyZXR1cm4gYS5zdGF0ZU5vZGU7eChcIjMzXCIpfWZ1bmN0aW9uIEthKGEpe3JldHVybiBhW0dhXXx8bnVsbH1mdW5jdGlvbiBMYShhKXtkbyBhPWEucmV0dXJuO3doaWxlKGEmJjUhPT1hLnRhZyk7cmV0dXJuIGE/YTpudWxsfWZ1bmN0aW9uIE1hKGEsYixjKXtpZihiPUNhKGEsYy5kaXNwYXRjaENvbmZpZy5waGFzZWRSZWdpc3RyYXRpb25OYW1lc1tiXSkpYy5fZGlzcGF0Y2hMaXN0ZW5lcnM9eGEoYy5fZGlzcGF0Y2hMaXN0ZW5lcnMsYiksYy5fZGlzcGF0Y2hJbnN0YW5jZXM9eGEoYy5fZGlzcGF0Y2hJbnN0YW5jZXMsYSl9XG5mdW5jdGlvbiBOYShhKXtpZihhJiZhLmRpc3BhdGNoQ29uZmlnLnBoYXNlZFJlZ2lzdHJhdGlvbk5hbWVzKXtmb3IodmFyIGI9YS5fdGFyZ2V0SW5zdCxjPVtdO2I7KWMucHVzaChiKSxiPUxhKGIpO2ZvcihiPWMubGVuZ3RoOzA8Yi0tOylNYShjW2JdLFwiY2FwdHVyZWRcIixhKTtmb3IoYj0wO2I8Yy5sZW5ndGg7YisrKU1hKGNbYl0sXCJidWJibGVkXCIsYSl9fWZ1bmN0aW9uIE9hKGEsYixjKXthJiZjJiZjLmRpc3BhdGNoQ29uZmlnLnJlZ2lzdHJhdGlvbk5hbWUmJihiPUNhKGEsYy5kaXNwYXRjaENvbmZpZy5yZWdpc3RyYXRpb25OYW1lKSkmJihjLl9kaXNwYXRjaExpc3RlbmVycz14YShjLl9kaXNwYXRjaExpc3RlbmVycyxiKSxjLl9kaXNwYXRjaEluc3RhbmNlcz14YShjLl9kaXNwYXRjaEluc3RhbmNlcyxhKSl9ZnVuY3Rpb24gUGEoYSl7YSYmYS5kaXNwYXRjaENvbmZpZy5yZWdpc3RyYXRpb25OYW1lJiZPYShhLl90YXJnZXRJbnN0LG51bGwsYSl9XG5mdW5jdGlvbiBRYShhKXt5YShhLE5hKX12YXIgUmE9IShcInVuZGVmaW5lZFwiPT09dHlwZW9mIHdpbmRvd3x8IXdpbmRvdy5kb2N1bWVudHx8IXdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KTtmdW5jdGlvbiBTYShhLGIpe3ZhciBjPXt9O2NbYS50b0xvd2VyQ2FzZSgpXT1iLnRvTG93ZXJDYXNlKCk7Y1tcIldlYmtpdFwiK2FdPVwid2Via2l0XCIrYjtjW1wiTW96XCIrYV09XCJtb3pcIitiO3JldHVybiBjfXZhciBUYT17YW5pbWF0aW9uZW5kOlNhKFwiQW5pbWF0aW9uXCIsXCJBbmltYXRpb25FbmRcIiksYW5pbWF0aW9uaXRlcmF0aW9uOlNhKFwiQW5pbWF0aW9uXCIsXCJBbmltYXRpb25JdGVyYXRpb25cIiksYW5pbWF0aW9uc3RhcnQ6U2EoXCJBbmltYXRpb25cIixcIkFuaW1hdGlvblN0YXJ0XCIpLHRyYW5zaXRpb25lbmQ6U2EoXCJUcmFuc2l0aW9uXCIsXCJUcmFuc2l0aW9uRW5kXCIpfSxVYT17fSxWYT17fTtcblJhJiYoVmE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKS5zdHlsZSxcIkFuaW1hdGlvbkV2ZW50XCJpbiB3aW5kb3d8fChkZWxldGUgVGEuYW5pbWF0aW9uZW5kLmFuaW1hdGlvbixkZWxldGUgVGEuYW5pbWF0aW9uaXRlcmF0aW9uLmFuaW1hdGlvbixkZWxldGUgVGEuYW5pbWF0aW9uc3RhcnQuYW5pbWF0aW9uKSxcIlRyYW5zaXRpb25FdmVudFwiaW4gd2luZG93fHxkZWxldGUgVGEudHJhbnNpdGlvbmVuZC50cmFuc2l0aW9uKTtmdW5jdGlvbiBXYShhKXtpZihVYVthXSlyZXR1cm4gVWFbYV07aWYoIVRhW2FdKXJldHVybiBhO3ZhciBiPVRhW2FdLGM7Zm9yKGMgaW4gYilpZihiLmhhc093blByb3BlcnR5KGMpJiZjIGluIFZhKXJldHVybiBVYVthXT1iW2NdO3JldHVybiBhfVxudmFyIFhhPVdhKFwiYW5pbWF0aW9uZW5kXCIpLFlhPVdhKFwiYW5pbWF0aW9uaXRlcmF0aW9uXCIpLFphPVdhKFwiYW5pbWF0aW9uc3RhcnRcIiksJGE9V2EoXCJ0cmFuc2l0aW9uZW5kXCIpLGFiPVwiYWJvcnQgY2FucGxheSBjYW5wbGF5dGhyb3VnaCBkdXJhdGlvbmNoYW5nZSBlbXB0aWVkIGVuY3J5cHRlZCBlbmRlZCBlcnJvciBsb2FkZWRkYXRhIGxvYWRlZG1ldGFkYXRhIGxvYWRzdGFydCBwYXVzZSBwbGF5IHBsYXlpbmcgcHJvZ3Jlc3MgcmF0ZWNoYW5nZSBzZWVrZWQgc2Vla2luZyBzdGFsbGVkIHN1c3BlbmQgdGltZXVwZGF0ZSB2b2x1bWVjaGFuZ2Ugd2FpdGluZ1wiLnNwbGl0KFwiIFwiKSxiYj1udWxsLGNiPW51bGwsZGI9bnVsbDtcbmZ1bmN0aW9uIGViKCl7aWYoZGIpcmV0dXJuIGRiO3ZhciBhLGI9Y2IsYz1iLmxlbmd0aCxkLGU9XCJ2YWx1ZVwiaW4gYmI/YmIudmFsdWU6YmIudGV4dENvbnRlbnQsZj1lLmxlbmd0aDtmb3IoYT0wO2E8YyYmYlthXT09PWVbYV07YSsrKTt2YXIgZz1jLWE7Zm9yKGQ9MTtkPD1nJiZiW2MtZF09PT1lW2YtZF07ZCsrKTtyZXR1cm4gZGI9ZS5zbGljZShhLDE8ZD8xLWQ6dm9pZCAwKX1mdW5jdGlvbiBmYigpe3JldHVybiEwfWZ1bmN0aW9uIGdiKCl7cmV0dXJuITF9XG5mdW5jdGlvbiB5KGEsYixjLGQpe3RoaXMuZGlzcGF0Y2hDb25maWc9YTt0aGlzLl90YXJnZXRJbnN0PWI7dGhpcy5uYXRpdmVFdmVudD1jO2E9dGhpcy5jb25zdHJ1Y3Rvci5JbnRlcmZhY2U7Zm9yKHZhciBlIGluIGEpYS5oYXNPd25Qcm9wZXJ0eShlKSYmKChiPWFbZV0pP3RoaXNbZV09YihjKTpcInRhcmdldFwiPT09ZT90aGlzLnRhcmdldD1kOnRoaXNbZV09Y1tlXSk7dGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9KG51bGwhPWMuZGVmYXVsdFByZXZlbnRlZD9jLmRlZmF1bHRQcmV2ZW50ZWQ6ITE9PT1jLnJldHVyblZhbHVlKT9mYjpnYjt0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkPWdiO3JldHVybiB0aGlzfVxubih5LnByb3RvdHlwZSx7cHJldmVudERlZmF1bHQ6ZnVuY3Rpb24oKXt0aGlzLmRlZmF1bHRQcmV2ZW50ZWQ9ITA7dmFyIGE9dGhpcy5uYXRpdmVFdmVudDthJiYoYS5wcmV2ZW50RGVmYXVsdD9hLnByZXZlbnREZWZhdWx0KCk6XCJ1bmtub3duXCIhPT10eXBlb2YgYS5yZXR1cm5WYWx1ZSYmKGEucmV0dXJuVmFsdWU9ITEpLHRoaXMuaXNEZWZhdWx0UHJldmVudGVkPWZiKX0sc3RvcFByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5uYXRpdmVFdmVudDthJiYoYS5zdG9wUHJvcGFnYXRpb24/YS5zdG9wUHJvcGFnYXRpb24oKTpcInVua25vd25cIiE9PXR5cGVvZiBhLmNhbmNlbEJ1YmJsZSYmKGEuY2FuY2VsQnViYmxlPSEwKSx0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkPWZiKX0scGVyc2lzdDpmdW5jdGlvbigpe3RoaXMuaXNQZXJzaXN0ZW50PWZifSxpc1BlcnNpc3RlbnQ6Z2IsZGVzdHJ1Y3RvcjpmdW5jdGlvbigpe3ZhciBhPXRoaXMuY29uc3RydWN0b3IuSW50ZXJmYWNlLFxuYjtmb3IoYiBpbiBhKXRoaXNbYl09bnVsbDt0aGlzLm5hdGl2ZUV2ZW50PXRoaXMuX3RhcmdldEluc3Q9dGhpcy5kaXNwYXRjaENvbmZpZz1udWxsO3RoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQ9dGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9Z2I7dGhpcy5fZGlzcGF0Y2hJbnN0YW5jZXM9dGhpcy5fZGlzcGF0Y2hMaXN0ZW5lcnM9bnVsbH19KTt5LkludGVyZmFjZT17dHlwZTpudWxsLHRhcmdldDpudWxsLGN1cnJlbnRUYXJnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbH0sZXZlbnRQaGFzZTpudWxsLGJ1YmJsZXM6bnVsbCxjYW5jZWxhYmxlOm51bGwsdGltZVN0YW1wOmZ1bmN0aW9uKGEpe3JldHVybiBhLnRpbWVTdGFtcHx8RGF0ZS5ub3coKX0sZGVmYXVsdFByZXZlbnRlZDpudWxsLGlzVHJ1c3RlZDpudWxsfTtcbnkuZXh0ZW5kPWZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoKXt9ZnVuY3Rpb24gYygpe3JldHVybiBkLmFwcGx5KHRoaXMsYXJndW1lbnRzKX12YXIgZD10aGlzO2IucHJvdG90eXBlPWQucHJvdG90eXBlO3ZhciBlPW5ldyBiO24oZSxjLnByb3RvdHlwZSk7Yy5wcm90b3R5cGU9ZTtjLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1jO2MuSW50ZXJmYWNlPW4oe30sZC5JbnRlcmZhY2UsYSk7Yy5leHRlbmQ9ZC5leHRlbmQ7aGIoYyk7cmV0dXJuIGN9O2hiKHkpO2Z1bmN0aW9uIGliKGEsYixjLGQpe2lmKHRoaXMuZXZlbnRQb29sLmxlbmd0aCl7dmFyIGU9dGhpcy5ldmVudFBvb2wucG9wKCk7dGhpcy5jYWxsKGUsYSxiLGMsZCk7cmV0dXJuIGV9cmV0dXJuIG5ldyB0aGlzKGEsYixjLGQpfWZ1bmN0aW9uIGpiKGEpe2EgaW5zdGFuY2VvZiB0aGlzP3ZvaWQgMDp4KFwiMjc5XCIpO2EuZGVzdHJ1Y3RvcigpOzEwPnRoaXMuZXZlbnRQb29sLmxlbmd0aCYmdGhpcy5ldmVudFBvb2wucHVzaChhKX1cbmZ1bmN0aW9uIGhiKGEpe2EuZXZlbnRQb29sPVtdO2EuZ2V0UG9vbGVkPWliO2EucmVsZWFzZT1qYn12YXIga2I9eS5leHRlbmQoe2RhdGE6bnVsbH0pLGxiPXkuZXh0ZW5kKHtkYXRhOm51bGx9KSxtYj1bOSwxMywyNywzMl0sbmI9UmEmJlwiQ29tcG9zaXRpb25FdmVudFwiaW4gd2luZG93LG9iPW51bGw7UmEmJlwiZG9jdW1lbnRNb2RlXCJpbiBkb2N1bWVudCYmKG9iPWRvY3VtZW50LmRvY3VtZW50TW9kZSk7XG52YXIgcGI9UmEmJlwiVGV4dEV2ZW50XCJpbiB3aW5kb3cmJiFvYixxYj1SYSYmKCFuYnx8b2ImJjg8b2ImJjExPj1vYikscmI9U3RyaW5nLmZyb21DaGFyQ29kZSgzMiksc2I9e2JlZm9yZUlucHV0OntwaGFzZWRSZWdpc3RyYXRpb25OYW1lczp7YnViYmxlZDpcIm9uQmVmb3JlSW5wdXRcIixjYXB0dXJlZDpcIm9uQmVmb3JlSW5wdXRDYXB0dXJlXCJ9LGRlcGVuZGVuY2llczpbXCJjb21wb3NpdGlvbmVuZFwiLFwia2V5cHJlc3NcIixcInRleHRJbnB1dFwiLFwicGFzdGVcIl19LGNvbXBvc2l0aW9uRW5kOntwaGFzZWRSZWdpc3RyYXRpb25OYW1lczp7YnViYmxlZDpcIm9uQ29tcG9zaXRpb25FbmRcIixjYXB0dXJlZDpcIm9uQ29tcG9zaXRpb25FbmRDYXB0dXJlXCJ9LGRlcGVuZGVuY2llczpcImJsdXIgY29tcG9zaXRpb25lbmQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBtb3VzZWRvd25cIi5zcGxpdChcIiBcIil9LGNvbXBvc2l0aW9uU3RhcnQ6e3BoYXNlZFJlZ2lzdHJhdGlvbk5hbWVzOntidWJibGVkOlwib25Db21wb3NpdGlvblN0YXJ0XCIsXG5jYXB0dXJlZDpcIm9uQ29tcG9zaXRpb25TdGFydENhcHR1cmVcIn0sZGVwZW5kZW5jaWVzOlwiYmx1ciBjb21wb3NpdGlvbnN0YXJ0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgbW91c2Vkb3duXCIuc3BsaXQoXCIgXCIpfSxjb21wb3NpdGlvblVwZGF0ZTp7cGhhc2VkUmVnaXN0cmF0aW9uTmFtZXM6e2J1YmJsZWQ6XCJvbkNvbXBvc2l0aW9uVXBkYXRlXCIsY2FwdHVyZWQ6XCJvbkNvbXBvc2l0aW9uVXBkYXRlQ2FwdHVyZVwifSxkZXBlbmRlbmNpZXM6XCJibHVyIGNvbXBvc2l0aW9udXBkYXRlIGtleWRvd24ga2V5cHJlc3Mga2V5dXAgbW91c2Vkb3duXCIuc3BsaXQoXCIgXCIpfX0sdGI9ITE7XG5mdW5jdGlvbiB1YihhLGIpe3N3aXRjaChhKXtjYXNlIFwia2V5dXBcIjpyZXR1cm4tMSE9PW1iLmluZGV4T2YoYi5rZXlDb2RlKTtjYXNlIFwia2V5ZG93blwiOnJldHVybiAyMjkhPT1iLmtleUNvZGU7Y2FzZSBcImtleXByZXNzXCI6Y2FzZSBcIm1vdXNlZG93blwiOmNhc2UgXCJibHVyXCI6cmV0dXJuITA7ZGVmYXVsdDpyZXR1cm4hMX19ZnVuY3Rpb24gdmIoYSl7YT1hLmRldGFpbDtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGEmJlwiZGF0YVwiaW4gYT9hLmRhdGE6bnVsbH12YXIgd2I9ITE7ZnVuY3Rpb24geGIoYSxiKXtzd2l0Y2goYSl7Y2FzZSBcImNvbXBvc2l0aW9uZW5kXCI6cmV0dXJuIHZiKGIpO2Nhc2UgXCJrZXlwcmVzc1wiOmlmKDMyIT09Yi53aGljaClyZXR1cm4gbnVsbDt0Yj0hMDtyZXR1cm4gcmI7Y2FzZSBcInRleHRJbnB1dFwiOnJldHVybiBhPWIuZGF0YSxhPT09cmImJnRiP251bGw6YTtkZWZhdWx0OnJldHVybiBudWxsfX1cbmZ1bmN0aW9uIHliKGEsYil7aWYod2IpcmV0dXJuXCJjb21wb3NpdGlvbmVuZFwiPT09YXx8IW5iJiZ1YihhLGIpPyhhPWViKCksZGI9Y2I9YmI9bnVsbCx3Yj0hMSxhKTpudWxsO3N3aXRjaChhKXtjYXNlIFwicGFzdGVcIjpyZXR1cm4gbnVsbDtjYXNlIFwia2V5cHJlc3NcIjppZighKGIuY3RybEtleXx8Yi5hbHRLZXl8fGIubWV0YUtleSl8fGIuY3RybEtleSYmYi5hbHRLZXkpe2lmKGIuY2hhciYmMTxiLmNoYXIubGVuZ3RoKXJldHVybiBiLmNoYXI7aWYoYi53aGljaClyZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShiLndoaWNoKX1yZXR1cm4gbnVsbDtjYXNlIFwiY29tcG9zaXRpb25lbmRcIjpyZXR1cm4gcWImJlwia29cIiE9PWIubG9jYWxlP251bGw6Yi5kYXRhO2RlZmF1bHQ6cmV0dXJuIG51bGx9fVxudmFyIHpiPXtldmVudFR5cGVzOnNiLGV4dHJhY3RFdmVudHM6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9dm9pZCAwO3ZhciBmPXZvaWQgMDtpZihuYiliOntzd2l0Y2goYSl7Y2FzZSBcImNvbXBvc2l0aW9uc3RhcnRcIjplPXNiLmNvbXBvc2l0aW9uU3RhcnQ7YnJlYWsgYjtjYXNlIFwiY29tcG9zaXRpb25lbmRcIjplPXNiLmNvbXBvc2l0aW9uRW5kO2JyZWFrIGI7Y2FzZSBcImNvbXBvc2l0aW9udXBkYXRlXCI6ZT1zYi5jb21wb3NpdGlvblVwZGF0ZTticmVhayBifWU9dm9pZCAwfWVsc2Ugd2I/dWIoYSxjKSYmKGU9c2IuY29tcG9zaXRpb25FbmQpOlwia2V5ZG93blwiPT09YSYmMjI5PT09Yy5rZXlDb2RlJiYoZT1zYi5jb21wb3NpdGlvblN0YXJ0KTtlPyhxYiYmXCJrb1wiIT09Yy5sb2NhbGUmJih3Ynx8ZSE9PXNiLmNvbXBvc2l0aW9uU3RhcnQ/ZT09PXNiLmNvbXBvc2l0aW9uRW5kJiZ3YiYmKGY9ZWIoKSk6KGJiPWQsY2I9XCJ2YWx1ZVwiaW4gYmI/YmIudmFsdWU6YmIudGV4dENvbnRlbnQsd2I9XG4hMCkpLGU9a2IuZ2V0UG9vbGVkKGUsYixjLGQpLGY/ZS5kYXRhPWY6KGY9dmIoYyksbnVsbCE9PWYmJihlLmRhdGE9ZikpLFFhKGUpLGY9ZSk6Zj1udWxsOyhhPXBiP3hiKGEsYyk6eWIoYSxjKSk/KGI9bGIuZ2V0UG9vbGVkKHNiLmJlZm9yZUlucHV0LGIsYyxkKSxiLmRhdGE9YSxRYShiKSk6Yj1udWxsO3JldHVybiBudWxsPT09Zj9iOm51bGw9PT1iP2Y6W2YsYl19fSxBYj1udWxsLEJiPW51bGwsQ2I9bnVsbDtmdW5jdGlvbiBEYihhKXtpZihhPXVhKGEpKXtcImZ1bmN0aW9uXCIhPT10eXBlb2YgQWI/eChcIjI4MFwiKTp2b2lkIDA7dmFyIGI9dGEoYS5zdGF0ZU5vZGUpO0FiKGEuc3RhdGVOb2RlLGEudHlwZSxiKX19ZnVuY3Rpb24gRWIoYSl7QmI/Q2I/Q2IucHVzaChhKTpDYj1bYV06QmI9YX1mdW5jdGlvbiBGYigpe2lmKEJiKXt2YXIgYT1CYixiPUNiO0NiPUJiPW51bGw7RGIoYSk7aWYoYilmb3IoYT0wO2E8Yi5sZW5ndGg7YSsrKURiKGJbYV0pfX1cbmZ1bmN0aW9uIEdiKGEsYil7cmV0dXJuIGEoYil9ZnVuY3Rpb24gSGIoYSxiLGMpe3JldHVybiBhKGIsYyl9ZnVuY3Rpb24gSWIoKXt9dmFyIEpiPSExO2Z1bmN0aW9uIEtiKGEsYil7aWYoSmIpcmV0dXJuIGEoYik7SmI9ITA7dHJ5e3JldHVybiBHYihhLGIpfWZpbmFsbHl7aWYoSmI9ITEsbnVsbCE9PUJifHxudWxsIT09Q2IpSWIoKSxGYigpfX12YXIgTGI9e2NvbG9yOiEwLGRhdGU6ITAsZGF0ZXRpbWU6ITAsXCJkYXRldGltZS1sb2NhbFwiOiEwLGVtYWlsOiEwLG1vbnRoOiEwLG51bWJlcjohMCxwYXNzd29yZDohMCxyYW5nZTohMCxzZWFyY2g6ITAsdGVsOiEwLHRleHQ6ITAsdGltZTohMCx1cmw6ITAsd2VlazohMH07ZnVuY3Rpb24gTWIoYSl7dmFyIGI9YSYmYS5ub2RlTmFtZSYmYS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PWI/ISFMYlthLnR5cGVdOlwidGV4dGFyZWFcIj09PWI/ITA6ITF9XG5mdW5jdGlvbiBOYihhKXthPWEudGFyZ2V0fHxhLnNyY0VsZW1lbnR8fHdpbmRvdzthLmNvcnJlc3BvbmRpbmdVc2VFbGVtZW50JiYoYT1hLmNvcnJlc3BvbmRpbmdVc2VFbGVtZW50KTtyZXR1cm4gMz09PWEubm9kZVR5cGU/YS5wYXJlbnROb2RlOmF9ZnVuY3Rpb24gT2IoYSl7aWYoIVJhKXJldHVybiExO2E9XCJvblwiK2E7dmFyIGI9YSBpbiBkb2N1bWVudDtifHwoYj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGIuc2V0QXR0cmlidXRlKGEsXCJyZXR1cm47XCIpLGI9XCJmdW5jdGlvblwiPT09dHlwZW9mIGJbYV0pO3JldHVybiBifWZ1bmN0aW9uIFBiKGEpe3ZhciBiPWEudHlwZTtyZXR1cm4oYT1hLm5vZGVOYW1lKSYmXCJpbnB1dFwiPT09YS50b0xvd2VyQ2FzZSgpJiYoXCJjaGVja2JveFwiPT09Ynx8XCJyYWRpb1wiPT09Yil9XG5mdW5jdGlvbiBRYihhKXt2YXIgYj1QYihhKT9cImNoZWNrZWRcIjpcInZhbHVlXCIsYz1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGEuY29uc3RydWN0b3IucHJvdG90eXBlLGIpLGQ9XCJcIithW2JdO2lmKCFhLmhhc093blByb3BlcnR5KGIpJiZcInVuZGVmaW5lZFwiIT09dHlwZW9mIGMmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBjLmdldCYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGMuc2V0KXt2YXIgZT1jLmdldCxmPWMuc2V0O09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLGIse2NvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gZS5jYWxsKHRoaXMpfSxzZXQ6ZnVuY3Rpb24oYSl7ZD1cIlwiK2E7Zi5jYWxsKHRoaXMsYSl9fSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGEsYix7ZW51bWVyYWJsZTpjLmVudW1lcmFibGV9KTtyZXR1cm57Z2V0VmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gZH0sc2V0VmFsdWU6ZnVuY3Rpb24oYSl7ZD1cIlwiK2F9LHN0b3BUcmFja2luZzpmdW5jdGlvbigpe2EuX3ZhbHVlVHJhY2tlcj1cbm51bGw7ZGVsZXRlIGFbYl19fX19ZnVuY3Rpb24gUmIoYSl7YS5fdmFsdWVUcmFja2VyfHwoYS5fdmFsdWVUcmFja2VyPVFiKGEpKX1mdW5jdGlvbiBTYihhKXtpZighYSlyZXR1cm4hMTt2YXIgYj1hLl92YWx1ZVRyYWNrZXI7aWYoIWIpcmV0dXJuITA7dmFyIGM9Yi5nZXRWYWx1ZSgpO3ZhciBkPVwiXCI7YSYmKGQ9UGIoYSk/YS5jaGVja2VkP1widHJ1ZVwiOlwiZmFsc2VcIjphLnZhbHVlKTthPWQ7cmV0dXJuIGEhPT1jPyhiLnNldFZhbHVlKGEpLCEwKTohMX12YXIgVGI9YWEuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ7VGIuaGFzT3duUHJvcGVydHkoXCJSZWFjdEN1cnJlbnREaXNwYXRjaGVyXCIpfHwoVGIuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcj17Y3VycmVudDpudWxsfSk7XG52YXIgVWI9L14oLiopW1xcXFxcXC9dLyx6PVwiZnVuY3Rpb25cIj09PXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3IsVmI9ej9TeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKTo2MDEwMyxXYj16P1N5bWJvbC5mb3IoXCJyZWFjdC5wb3J0YWxcIik6NjAxMDYsWGI9ej9TeW1ib2wuZm9yKFwicmVhY3QuZnJhZ21lbnRcIik6NjAxMDcsWWI9ej9TeW1ib2wuZm9yKFwicmVhY3Quc3RyaWN0X21vZGVcIik6NjAxMDgsWmI9ej9TeW1ib2wuZm9yKFwicmVhY3QucHJvZmlsZXJcIik6NjAxMTQsJGI9ej9TeW1ib2wuZm9yKFwicmVhY3QucHJvdmlkZXJcIik6NjAxMDksYWM9ej9TeW1ib2wuZm9yKFwicmVhY3QuY29udGV4dFwiKTo2MDExMCxiYz16P1N5bWJvbC5mb3IoXCJyZWFjdC5jb25jdXJyZW50X21vZGVcIik6NjAxMTEsY2M9ej9TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIik6NjAxMTIsZGM9ej9TeW1ib2wuZm9yKFwicmVhY3Quc3VzcGVuc2VcIik6NjAxMTMsZWM9ej9TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKTpcbjYwMTE1LGZjPXo/U3ltYm9sLmZvcihcInJlYWN0LmxhenlcIik6NjAxMTYsZ2M9XCJmdW5jdGlvblwiPT09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLml0ZXJhdG9yO2Z1bmN0aW9uIGhjKGEpe2lmKG51bGw9PT1hfHxcIm9iamVjdFwiIT09dHlwZW9mIGEpcmV0dXJuIG51bGw7YT1nYyYmYVtnY118fGFbXCJAQGl0ZXJhdG9yXCJdO3JldHVyblwiZnVuY3Rpb25cIj09PXR5cGVvZiBhP2E6bnVsbH1cbmZ1bmN0aW9uIGljKGEpe2lmKG51bGw9PWEpcmV0dXJuIG51bGw7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGEpcmV0dXJuIGEuZGlzcGxheU5hbWV8fGEubmFtZXx8bnVsbDtpZihcInN0cmluZ1wiPT09dHlwZW9mIGEpcmV0dXJuIGE7c3dpdGNoKGEpe2Nhc2UgYmM6cmV0dXJuXCJDb25jdXJyZW50TW9kZVwiO2Nhc2UgWGI6cmV0dXJuXCJGcmFnbWVudFwiO2Nhc2UgV2I6cmV0dXJuXCJQb3J0YWxcIjtjYXNlIFpiOnJldHVyblwiUHJvZmlsZXJcIjtjYXNlIFliOnJldHVyblwiU3RyaWN0TW9kZVwiO2Nhc2UgZGM6cmV0dXJuXCJTdXNwZW5zZVwifWlmKFwib2JqZWN0XCI9PT10eXBlb2YgYSlzd2l0Y2goYS4kJHR5cGVvZil7Y2FzZSBhYzpyZXR1cm5cIkNvbnRleHQuQ29uc3VtZXJcIjtjYXNlICRiOnJldHVyblwiQ29udGV4dC5Qcm92aWRlclwiO2Nhc2UgY2M6dmFyIGI9YS5yZW5kZXI7Yj1iLmRpc3BsYXlOYW1lfHxiLm5hbWV8fFwiXCI7cmV0dXJuIGEuZGlzcGxheU5hbWV8fChcIlwiIT09Yj9cIkZvcndhcmRSZWYoXCIrYitcblwiKVwiOlwiRm9yd2FyZFJlZlwiKTtjYXNlIGVjOnJldHVybiBpYyhhLnR5cGUpO2Nhc2UgZmM6aWYoYT0xPT09YS5fc3RhdHVzP2EuX3Jlc3VsdDpudWxsKXJldHVybiBpYyhhKX1yZXR1cm4gbnVsbH1mdW5jdGlvbiBqYyhhKXt2YXIgYj1cIlwiO2Rve2E6c3dpdGNoKGEudGFnKXtjYXNlIDM6Y2FzZSA0OmNhc2UgNjpjYXNlIDc6Y2FzZSAxMDpjYXNlIDk6dmFyIGM9XCJcIjticmVhayBhO2RlZmF1bHQ6dmFyIGQ9YS5fZGVidWdPd25lcixlPWEuX2RlYnVnU291cmNlLGY9aWMoYS50eXBlKTtjPW51bGw7ZCYmKGM9aWMoZC50eXBlKSk7ZD1mO2Y9XCJcIjtlP2Y9XCIgKGF0IFwiK2UuZmlsZU5hbWUucmVwbGFjZShVYixcIlwiKStcIjpcIitlLmxpbmVOdW1iZXIrXCIpXCI6YyYmKGY9XCIgKGNyZWF0ZWQgYnkgXCIrYytcIilcIik7Yz1cIlxcbiAgICBpbiBcIisoZHx8XCJVbmtub3duXCIpK2Z9Yis9YzthPWEucmV0dXJufXdoaWxlKGEpO3JldHVybiBifVxudmFyIGtjPS9eWzpBLVpfYS16XFx1MDBDMC1cXHUwMEQ2XFx1MDBEOC1cXHUwMEY2XFx1MDBGOC1cXHUwMkZGXFx1MDM3MC1cXHUwMzdEXFx1MDM3Ri1cXHUxRkZGXFx1MjAwQy1cXHUyMDBEXFx1MjA3MC1cXHUyMThGXFx1MkMwMC1cXHUyRkVGXFx1MzAwMS1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkZEXVs6QS1aX2EtelxcdTAwQzAtXFx1MDBENlxcdTAwRDgtXFx1MDBGNlxcdTAwRjgtXFx1MDJGRlxcdTAzNzAtXFx1MDM3RFxcdTAzN0YtXFx1MUZGRlxcdTIwMEMtXFx1MjAwRFxcdTIwNzAtXFx1MjE4RlxcdTJDMDAtXFx1MkZFRlxcdTMwMDEtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZGRFxcLS4wLTlcXHUwMEI3XFx1MDMwMC1cXHUwMzZGXFx1MjAzRi1cXHUyMDQwXSokLyxsYz1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LG1jPXt9LG5jPXt9O1xuZnVuY3Rpb24gb2MoYSl7aWYobGMuY2FsbChuYyxhKSlyZXR1cm4hMDtpZihsYy5jYWxsKG1jLGEpKXJldHVybiExO2lmKGtjLnRlc3QoYSkpcmV0dXJuIG5jW2FdPSEwO21jW2FdPSEwO3JldHVybiExfWZ1bmN0aW9uIHBjKGEsYixjLGQpe2lmKG51bGwhPT1jJiYwPT09Yy50eXBlKXJldHVybiExO3N3aXRjaCh0eXBlb2YgYil7Y2FzZSBcImZ1bmN0aW9uXCI6Y2FzZSBcInN5bWJvbFwiOnJldHVybiEwO2Nhc2UgXCJib29sZWFuXCI6aWYoZClyZXR1cm4hMTtpZihudWxsIT09YylyZXR1cm4hYy5hY2NlcHRzQm9vbGVhbnM7YT1hLnRvTG93ZXJDYXNlKCkuc2xpY2UoMCw1KTtyZXR1cm5cImRhdGEtXCIhPT1hJiZcImFyaWEtXCIhPT1hO2RlZmF1bHQ6cmV0dXJuITF9fVxuZnVuY3Rpb24gcWMoYSxiLGMsZCl7aWYobnVsbD09PWJ8fFwidW5kZWZpbmVkXCI9PT10eXBlb2YgYnx8cGMoYSxiLGMsZCkpcmV0dXJuITA7aWYoZClyZXR1cm4hMTtpZihudWxsIT09Yylzd2l0Y2goYy50eXBlKXtjYXNlIDM6cmV0dXJuIWI7Y2FzZSA0OnJldHVybiExPT09YjtjYXNlIDU6cmV0dXJuIGlzTmFOKGIpO2Nhc2UgNjpyZXR1cm4gaXNOYU4oYil8fDE+Yn1yZXR1cm4hMX1mdW5jdGlvbiBDKGEsYixjLGQsZSl7dGhpcy5hY2NlcHRzQm9vbGVhbnM9Mj09PWJ8fDM9PT1ifHw0PT09Yjt0aGlzLmF0dHJpYnV0ZU5hbWU9ZDt0aGlzLmF0dHJpYnV0ZU5hbWVzcGFjZT1lO3RoaXMubXVzdFVzZVByb3BlcnR5PWM7dGhpcy5wcm9wZXJ0eU5hbWU9YTt0aGlzLnR5cGU9Yn12YXIgRD17fTtcblwiY2hpbGRyZW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgZGVmYXVsdFZhbHVlIGRlZmF1bHRDaGVja2VkIGlubmVySFRNTCBzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmcgc3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nIHN0eWxlXCIuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQyhhLDAsITEsYSxudWxsKX0pO1tbXCJhY2NlcHRDaGFyc2V0XCIsXCJhY2NlcHQtY2hhcnNldFwiXSxbXCJjbGFzc05hbWVcIixcImNsYXNzXCJdLFtcImh0bWxGb3JcIixcImZvclwiXSxbXCJodHRwRXF1aXZcIixcImh0dHAtZXF1aXZcIl1dLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGI9YVswXTtEW2JdPW5ldyBDKGIsMSwhMSxhWzFdLG51bGwpfSk7W1wiY29udGVudEVkaXRhYmxlXCIsXCJkcmFnZ2FibGVcIixcInNwZWxsQ2hlY2tcIixcInZhbHVlXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQyhhLDIsITEsYS50b0xvd2VyQ2FzZSgpLG51bGwpfSk7XG5bXCJhdXRvUmV2ZXJzZVwiLFwiZXh0ZXJuYWxSZXNvdXJjZXNSZXF1aXJlZFwiLFwiZm9jdXNhYmxlXCIsXCJwcmVzZXJ2ZUFscGhhXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQyhhLDIsITEsYSxudWxsKX0pO1wiYWxsb3dGdWxsU2NyZWVuIGFzeW5jIGF1dG9Gb2N1cyBhdXRvUGxheSBjb250cm9scyBkZWZhdWx0IGRlZmVyIGRpc2FibGVkIGZvcm1Ob1ZhbGlkYXRlIGhpZGRlbiBsb29wIG5vTW9kdWxlIG5vVmFsaWRhdGUgb3BlbiBwbGF5c0lubGluZSByZWFkT25seSByZXF1aXJlZCByZXZlcnNlZCBzY29wZWQgc2VhbWxlc3MgaXRlbVNjb3BlXCIuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQyhhLDMsITEsYS50b0xvd2VyQ2FzZSgpLG51bGwpfSk7W1wiY2hlY2tlZFwiLFwibXVsdGlwbGVcIixcIm11dGVkXCIsXCJzZWxlY3RlZFwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0RbYV09bmV3IEMoYSwzLCEwLGEsbnVsbCl9KTtcbltcImNhcHR1cmVcIixcImRvd25sb2FkXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQyhhLDQsITEsYSxudWxsKX0pO1tcImNvbHNcIixcInJvd3NcIixcInNpemVcIixcInNwYW5cIl0uZm9yRWFjaChmdW5jdGlvbihhKXtEW2FdPW5ldyBDKGEsNiwhMSxhLG51bGwpfSk7W1wicm93U3BhblwiLFwic3RhcnRcIl0uZm9yRWFjaChmdW5jdGlvbihhKXtEW2FdPW5ldyBDKGEsNSwhMSxhLnRvTG93ZXJDYXNlKCksbnVsbCl9KTt2YXIgcmM9L1tcXC06XShbYS16XSkvZztmdW5jdGlvbiBzYyhhKXtyZXR1cm4gYVsxXS50b1VwcGVyQ2FzZSgpfVxuXCJhY2NlbnQtaGVpZ2h0IGFsaWdubWVudC1iYXNlbGluZSBhcmFiaWMtZm9ybSBiYXNlbGluZS1zaGlmdCBjYXAtaGVpZ2h0IGNsaXAtcGF0aCBjbGlwLXJ1bGUgY29sb3ItaW50ZXJwb2xhdGlvbiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnMgY29sb3ItcHJvZmlsZSBjb2xvci1yZW5kZXJpbmcgZG9taW5hbnQtYmFzZWxpbmUgZW5hYmxlLWJhY2tncm91bmQgZmlsbC1vcGFjaXR5IGZpbGwtcnVsZSBmbG9vZC1jb2xvciBmbG9vZC1vcGFjaXR5IGZvbnQtZmFtaWx5IGZvbnQtc2l6ZSBmb250LXNpemUtYWRqdXN0IGZvbnQtc3RyZXRjaCBmb250LXN0eWxlIGZvbnQtdmFyaWFudCBmb250LXdlaWdodCBnbHlwaC1uYW1lIGdseXBoLW9yaWVudGF0aW9uLWhvcml6b250YWwgZ2x5cGgtb3JpZW50YXRpb24tdmVydGljYWwgaG9yaXotYWR2LXggaG9yaXotb3JpZ2luLXggaW1hZ2UtcmVuZGVyaW5nIGxldHRlci1zcGFjaW5nIGxpZ2h0aW5nLWNvbG9yIG1hcmtlci1lbmQgbWFya2VyLW1pZCBtYXJrZXItc3RhcnQgb3ZlcmxpbmUtcG9zaXRpb24gb3ZlcmxpbmUtdGhpY2tuZXNzIHBhaW50LW9yZGVyIHBhbm9zZS0xIHBvaW50ZXItZXZlbnRzIHJlbmRlcmluZy1pbnRlbnQgc2hhcGUtcmVuZGVyaW5nIHN0b3AtY29sb3Igc3RvcC1vcGFjaXR5IHN0cmlrZXRocm91Z2gtcG9zaXRpb24gc3RyaWtldGhyb3VnaC10aGlja25lc3Mgc3Ryb2tlLWRhc2hhcnJheSBzdHJva2UtZGFzaG9mZnNldCBzdHJva2UtbGluZWNhcCBzdHJva2UtbGluZWpvaW4gc3Ryb2tlLW1pdGVybGltaXQgc3Ryb2tlLW9wYWNpdHkgc3Ryb2tlLXdpZHRoIHRleHQtYW5jaG9yIHRleHQtZGVjb3JhdGlvbiB0ZXh0LXJlbmRlcmluZyB1bmRlcmxpbmUtcG9zaXRpb24gdW5kZXJsaW5lLXRoaWNrbmVzcyB1bmljb2RlLWJpZGkgdW5pY29kZS1yYW5nZSB1bml0cy1wZXItZW0gdi1hbHBoYWJldGljIHYtaGFuZ2luZyB2LWlkZW9ncmFwaGljIHYtbWF0aGVtYXRpY2FsIHZlY3Rvci1lZmZlY3QgdmVydC1hZHYteSB2ZXJ0LW9yaWdpbi14IHZlcnQtb3JpZ2luLXkgd29yZC1zcGFjaW5nIHdyaXRpbmctbW9kZSB4bWxuczp4bGluayB4LWhlaWdodFwiLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShyYyxcbnNjKTtEW2JdPW5ldyBDKGIsMSwhMSxhLG51bGwpfSk7XCJ4bGluazphY3R1YXRlIHhsaW5rOmFyY3JvbGUgeGxpbms6aHJlZiB4bGluazpyb2xlIHhsaW5rOnNob3cgeGxpbms6dGl0bGUgeGxpbms6dHlwZVwiLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShyYyxzYyk7RFtiXT1uZXcgQyhiLDEsITEsYSxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIil9KTtbXCJ4bWw6YmFzZVwiLFwieG1sOmxhbmdcIixcInhtbDpzcGFjZVwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShyYyxzYyk7RFtiXT1uZXcgQyhiLDEsITEsYSxcImh0dHA6Ly93d3cudzMub3JnL1hNTC8xOTk4L25hbWVzcGFjZVwiKX0pO1tcInRhYkluZGV4XCIsXCJjcm9zc09yaWdpblwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0RbYV09bmV3IEMoYSwxLCExLGEudG9Mb3dlckNhc2UoKSxudWxsKX0pO1xuZnVuY3Rpb24gdGMoYSxiLGMsZCl7dmFyIGU9RC5oYXNPd25Qcm9wZXJ0eShiKT9EW2JdOm51bGw7dmFyIGY9bnVsbCE9PWU/MD09PWUudHlwZTpkPyExOiEoMjxiLmxlbmd0aCl8fFwib1wiIT09YlswXSYmXCJPXCIhPT1iWzBdfHxcIm5cIiE9PWJbMV0mJlwiTlwiIT09YlsxXT8hMTohMDtmfHwocWMoYixjLGUsZCkmJihjPW51bGwpLGR8fG51bGw9PT1lP29jKGIpJiYobnVsbD09PWM/YS5yZW1vdmVBdHRyaWJ1dGUoYik6YS5zZXRBdHRyaWJ1dGUoYixcIlwiK2MpKTplLm11c3RVc2VQcm9wZXJ0eT9hW2UucHJvcGVydHlOYW1lXT1udWxsPT09Yz8zPT09ZS50eXBlPyExOlwiXCI6YzooYj1lLmF0dHJpYnV0ZU5hbWUsZD1lLmF0dHJpYnV0ZU5hbWVzcGFjZSxudWxsPT09Yz9hLnJlbW92ZUF0dHJpYnV0ZShiKTooZT1lLnR5cGUsYz0zPT09ZXx8ND09PWUmJiEwPT09Yz9cIlwiOlwiXCIrYyxkP2Euc2V0QXR0cmlidXRlTlMoZCxiLGMpOmEuc2V0QXR0cmlidXRlKGIsYykpKSl9XG5mdW5jdGlvbiB1YyhhKXtzd2l0Y2godHlwZW9mIGEpe2Nhc2UgXCJib29sZWFuXCI6Y2FzZSBcIm51bWJlclwiOmNhc2UgXCJvYmplY3RcIjpjYXNlIFwic3RyaW5nXCI6Y2FzZSBcInVuZGVmaW5lZFwiOnJldHVybiBhO2RlZmF1bHQ6cmV0dXJuXCJcIn19ZnVuY3Rpb24gdmMoYSxiKXt2YXIgYz1iLmNoZWNrZWQ7cmV0dXJuIG4oe30sYix7ZGVmYXVsdENoZWNrZWQ6dm9pZCAwLGRlZmF1bHRWYWx1ZTp2b2lkIDAsdmFsdWU6dm9pZCAwLGNoZWNrZWQ6bnVsbCE9Yz9jOmEuX3dyYXBwZXJTdGF0ZS5pbml0aWFsQ2hlY2tlZH0pfVxuZnVuY3Rpb24gd2MoYSxiKXt2YXIgYz1udWxsPT1iLmRlZmF1bHRWYWx1ZT9cIlwiOmIuZGVmYXVsdFZhbHVlLGQ9bnVsbCE9Yi5jaGVja2VkP2IuY2hlY2tlZDpiLmRlZmF1bHRDaGVja2VkO2M9dWMobnVsbCE9Yi52YWx1ZT9iLnZhbHVlOmMpO2EuX3dyYXBwZXJTdGF0ZT17aW5pdGlhbENoZWNrZWQ6ZCxpbml0aWFsVmFsdWU6Yyxjb250cm9sbGVkOlwiY2hlY2tib3hcIj09PWIudHlwZXx8XCJyYWRpb1wiPT09Yi50eXBlP251bGwhPWIuY2hlY2tlZDpudWxsIT1iLnZhbHVlfX1mdW5jdGlvbiB4YyhhLGIpe2I9Yi5jaGVja2VkO251bGwhPWImJnRjKGEsXCJjaGVja2VkXCIsYiwhMSl9XG5mdW5jdGlvbiB5YyhhLGIpe3hjKGEsYik7dmFyIGM9dWMoYi52YWx1ZSksZD1iLnR5cGU7aWYobnVsbCE9YylpZihcIm51bWJlclwiPT09ZCl7aWYoMD09PWMmJlwiXCI9PT1hLnZhbHVlfHxhLnZhbHVlIT1jKWEudmFsdWU9XCJcIitjfWVsc2UgYS52YWx1ZSE9PVwiXCIrYyYmKGEudmFsdWU9XCJcIitjKTtlbHNlIGlmKFwic3VibWl0XCI9PT1kfHxcInJlc2V0XCI9PT1kKXthLnJlbW92ZUF0dHJpYnV0ZShcInZhbHVlXCIpO3JldHVybn1iLmhhc093blByb3BlcnR5KFwidmFsdWVcIik/emMoYSxiLnR5cGUsYyk6Yi5oYXNPd25Qcm9wZXJ0eShcImRlZmF1bHRWYWx1ZVwiKSYmemMoYSxiLnR5cGUsdWMoYi5kZWZhdWx0VmFsdWUpKTtudWxsPT1iLmNoZWNrZWQmJm51bGwhPWIuZGVmYXVsdENoZWNrZWQmJihhLmRlZmF1bHRDaGVja2VkPSEhYi5kZWZhdWx0Q2hlY2tlZCl9XG5mdW5jdGlvbiBBYyhhLGIsYyl7aWYoYi5oYXNPd25Qcm9wZXJ0eShcInZhbHVlXCIpfHxiLmhhc093blByb3BlcnR5KFwiZGVmYXVsdFZhbHVlXCIpKXt2YXIgZD1iLnR5cGU7aWYoIShcInN1Ym1pdFwiIT09ZCYmXCJyZXNldFwiIT09ZHx8dm9pZCAwIT09Yi52YWx1ZSYmbnVsbCE9PWIudmFsdWUpKXJldHVybjtiPVwiXCIrYS5fd3JhcHBlclN0YXRlLmluaXRpYWxWYWx1ZTtjfHxiPT09YS52YWx1ZXx8KGEudmFsdWU9Yik7YS5kZWZhdWx0VmFsdWU9Yn1jPWEubmFtZTtcIlwiIT09YyYmKGEubmFtZT1cIlwiKTthLmRlZmF1bHRDaGVja2VkPSFhLmRlZmF1bHRDaGVja2VkO2EuZGVmYXVsdENoZWNrZWQ9ISFhLl93cmFwcGVyU3RhdGUuaW5pdGlhbENoZWNrZWQ7XCJcIiE9PWMmJihhLm5hbWU9Yyl9XG5mdW5jdGlvbiB6YyhhLGIsYyl7aWYoXCJudW1iZXJcIiE9PWJ8fGEub3duZXJEb2N1bWVudC5hY3RpdmVFbGVtZW50IT09YSludWxsPT1jP2EuZGVmYXVsdFZhbHVlPVwiXCIrYS5fd3JhcHBlclN0YXRlLmluaXRpYWxWYWx1ZTphLmRlZmF1bHRWYWx1ZSE9PVwiXCIrYyYmKGEuZGVmYXVsdFZhbHVlPVwiXCIrYyl9dmFyIEJjPXtjaGFuZ2U6e3BoYXNlZFJlZ2lzdHJhdGlvbk5hbWVzOntidWJibGVkOlwib25DaGFuZ2VcIixjYXB0dXJlZDpcIm9uQ2hhbmdlQ2FwdHVyZVwifSxkZXBlbmRlbmNpZXM6XCJibHVyIGNoYW5nZSBjbGljayBmb2N1cyBpbnB1dCBrZXlkb3duIGtleXVwIHNlbGVjdGlvbmNoYW5nZVwiLnNwbGl0KFwiIFwiKX19O2Z1bmN0aW9uIENjKGEsYixjKXthPXkuZ2V0UG9vbGVkKEJjLmNoYW5nZSxhLGIsYyk7YS50eXBlPVwiY2hhbmdlXCI7RWIoYyk7UWEoYSk7cmV0dXJuIGF9dmFyIERjPW51bGwsRWM9bnVsbDtmdW5jdGlvbiBGYyhhKXtEYShhKX1cbmZ1bmN0aW9uIEdjKGEpe3ZhciBiPUphKGEpO2lmKFNiKGIpKXJldHVybiBhfWZ1bmN0aW9uIEhjKGEsYil7aWYoXCJjaGFuZ2VcIj09PWEpcmV0dXJuIGJ9dmFyIEljPSExO1JhJiYoSWM9T2IoXCJpbnB1dFwiKSYmKCFkb2N1bWVudC5kb2N1bWVudE1vZGV8fDk8ZG9jdW1lbnQuZG9jdW1lbnRNb2RlKSk7ZnVuY3Rpb24gSmMoKXtEYyYmKERjLmRldGFjaEV2ZW50KFwib25wcm9wZXJ0eWNoYW5nZVwiLEtjKSxFYz1EYz1udWxsKX1mdW5jdGlvbiBLYyhhKXtcInZhbHVlXCI9PT1hLnByb3BlcnR5TmFtZSYmR2MoRWMpJiYoYT1DYyhFYyxhLE5iKGEpKSxLYihGYyxhKSl9ZnVuY3Rpb24gTGMoYSxiLGMpe1wiZm9jdXNcIj09PWE/KEpjKCksRGM9YixFYz1jLERjLmF0dGFjaEV2ZW50KFwib25wcm9wZXJ0eWNoYW5nZVwiLEtjKSk6XCJibHVyXCI9PT1hJiZKYygpfWZ1bmN0aW9uIE1jKGEpe2lmKFwic2VsZWN0aW9uY2hhbmdlXCI9PT1hfHxcImtleXVwXCI9PT1hfHxcImtleWRvd25cIj09PWEpcmV0dXJuIEdjKEVjKX1cbmZ1bmN0aW9uIE5jKGEsYil7aWYoXCJjbGlja1wiPT09YSlyZXR1cm4gR2MoYil9ZnVuY3Rpb24gT2MoYSxiKXtpZihcImlucHV0XCI9PT1hfHxcImNoYW5nZVwiPT09YSlyZXR1cm4gR2MoYil9XG52YXIgUGM9e2V2ZW50VHlwZXM6QmMsX2lzSW5wdXRFdmVudFN1cHBvcnRlZDpJYyxleHRyYWN0RXZlbnRzOmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPWI/SmEoYik6d2luZG93LGY9dm9pZCAwLGc9dm9pZCAwLGg9ZS5ub2RlTmFtZSYmZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1wic2VsZWN0XCI9PT1ofHxcImlucHV0XCI9PT1oJiZcImZpbGVcIj09PWUudHlwZT9mPUhjOk1iKGUpP0ljP2Y9T2M6KGY9TWMsZz1MYyk6KGg9ZS5ub2RlTmFtZSkmJlwiaW5wdXRcIj09PWgudG9Mb3dlckNhc2UoKSYmKFwiY2hlY2tib3hcIj09PWUudHlwZXx8XCJyYWRpb1wiPT09ZS50eXBlKSYmKGY9TmMpO2lmKGYmJihmPWYoYSxiKSkpcmV0dXJuIENjKGYsYyxkKTtnJiZnKGEsZSxiKTtcImJsdXJcIj09PWEmJihhPWUuX3dyYXBwZXJTdGF0ZSkmJmEuY29udHJvbGxlZCYmXCJudW1iZXJcIj09PWUudHlwZSYmemMoZSxcIm51bWJlclwiLGUudmFsdWUpfX0sUWM9eS5leHRlbmQoe3ZpZXc6bnVsbCxkZXRhaWw6bnVsbH0pLFJjPXtBbHQ6XCJhbHRLZXlcIixcbkNvbnRyb2w6XCJjdHJsS2V5XCIsTWV0YTpcIm1ldGFLZXlcIixTaGlmdDpcInNoaWZ0S2V5XCJ9O2Z1bmN0aW9uIFNjKGEpe3ZhciBiPXRoaXMubmF0aXZlRXZlbnQ7cmV0dXJuIGIuZ2V0TW9kaWZpZXJTdGF0ZT9iLmdldE1vZGlmaWVyU3RhdGUoYSk6KGE9UmNbYV0pPyEhYlthXTohMX1mdW5jdGlvbiBUYygpe3JldHVybiBTY31cbnZhciBVYz0wLFZjPTAsV2M9ITEsWGM9ITEsWWM9UWMuZXh0ZW5kKHtzY3JlZW5YOm51bGwsc2NyZWVuWTpudWxsLGNsaWVudFg6bnVsbCxjbGllbnRZOm51bGwscGFnZVg6bnVsbCxwYWdlWTpudWxsLGN0cmxLZXk6bnVsbCxzaGlmdEtleTpudWxsLGFsdEtleTpudWxsLG1ldGFLZXk6bnVsbCxnZXRNb2RpZmllclN0YXRlOlRjLGJ1dHRvbjpudWxsLGJ1dHRvbnM6bnVsbCxyZWxhdGVkVGFyZ2V0OmZ1bmN0aW9uKGEpe3JldHVybiBhLnJlbGF0ZWRUYXJnZXR8fChhLmZyb21FbGVtZW50PT09YS5zcmNFbGVtZW50P2EudG9FbGVtZW50OmEuZnJvbUVsZW1lbnQpfSxtb3ZlbWVudFg6ZnVuY3Rpb24oYSl7aWYoXCJtb3ZlbWVudFhcImluIGEpcmV0dXJuIGEubW92ZW1lbnRYO3ZhciBiPVVjO1VjPWEuc2NyZWVuWDtyZXR1cm4gV2M/XCJtb3VzZW1vdmVcIj09PWEudHlwZT9hLnNjcmVlblgtYjowOihXYz0hMCwwKX0sbW92ZW1lbnRZOmZ1bmN0aW9uKGEpe2lmKFwibW92ZW1lbnRZXCJpbiBhKXJldHVybiBhLm1vdmVtZW50WTtcbnZhciBiPVZjO1ZjPWEuc2NyZWVuWTtyZXR1cm4gWGM/XCJtb3VzZW1vdmVcIj09PWEudHlwZT9hLnNjcmVlblktYjowOihYYz0hMCwwKX19KSxaYz1ZYy5leHRlbmQoe3BvaW50ZXJJZDpudWxsLHdpZHRoOm51bGwsaGVpZ2h0Om51bGwscHJlc3N1cmU6bnVsbCx0YW5nZW50aWFsUHJlc3N1cmU6bnVsbCx0aWx0WDpudWxsLHRpbHRZOm51bGwsdHdpc3Q6bnVsbCxwb2ludGVyVHlwZTpudWxsLGlzUHJpbWFyeTpudWxsfSksJGM9e21vdXNlRW50ZXI6e3JlZ2lzdHJhdGlvbk5hbWU6XCJvbk1vdXNlRW50ZXJcIixkZXBlbmRlbmNpZXM6W1wibW91c2VvdXRcIixcIm1vdXNlb3ZlclwiXX0sbW91c2VMZWF2ZTp7cmVnaXN0cmF0aW9uTmFtZTpcIm9uTW91c2VMZWF2ZVwiLGRlcGVuZGVuY2llczpbXCJtb3VzZW91dFwiLFwibW91c2VvdmVyXCJdfSxwb2ludGVyRW50ZXI6e3JlZ2lzdHJhdGlvbk5hbWU6XCJvblBvaW50ZXJFbnRlclwiLGRlcGVuZGVuY2llczpbXCJwb2ludGVyb3V0XCIsXCJwb2ludGVyb3ZlclwiXX0scG9pbnRlckxlYXZlOntyZWdpc3RyYXRpb25OYW1lOlwib25Qb2ludGVyTGVhdmVcIixcbmRlcGVuZGVuY2llczpbXCJwb2ludGVyb3V0XCIsXCJwb2ludGVyb3ZlclwiXX19LGFkPXtldmVudFR5cGVzOiRjLGV4dHJhY3RFdmVudHM6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9XCJtb3VzZW92ZXJcIj09PWF8fFwicG9pbnRlcm92ZXJcIj09PWEsZj1cIm1vdXNlb3V0XCI9PT1hfHxcInBvaW50ZXJvdXRcIj09PWE7aWYoZSYmKGMucmVsYXRlZFRhcmdldHx8Yy5mcm9tRWxlbWVudCl8fCFmJiYhZSlyZXR1cm4gbnVsbDtlPWQud2luZG93PT09ZD9kOihlPWQub3duZXJEb2N1bWVudCk/ZS5kZWZhdWx0Vmlld3x8ZS5wYXJlbnRXaW5kb3c6d2luZG93O2Y/KGY9YixiPShiPWMucmVsYXRlZFRhcmdldHx8Yy50b0VsZW1lbnQpP0hhKGIpOm51bGwpOmY9bnVsbDtpZihmPT09YilyZXR1cm4gbnVsbDt2YXIgZz12b2lkIDAsaD12b2lkIDAsbD12b2lkIDAsaz12b2lkIDA7aWYoXCJtb3VzZW91dFwiPT09YXx8XCJtb3VzZW92ZXJcIj09PWEpZz1ZYyxoPSRjLm1vdXNlTGVhdmUsbD0kYy5tb3VzZUVudGVyLGs9XCJtb3VzZVwiO1xuZWxzZSBpZihcInBvaW50ZXJvdXRcIj09PWF8fFwicG9pbnRlcm92ZXJcIj09PWEpZz1aYyxoPSRjLnBvaW50ZXJMZWF2ZSxsPSRjLnBvaW50ZXJFbnRlcixrPVwicG9pbnRlclwiO3ZhciBtPW51bGw9PWY/ZTpKYShmKTtlPW51bGw9PWI/ZTpKYShiKTthPWcuZ2V0UG9vbGVkKGgsZixjLGQpO2EudHlwZT1rK1wibGVhdmVcIjthLnRhcmdldD1tO2EucmVsYXRlZFRhcmdldD1lO2M9Zy5nZXRQb29sZWQobCxiLGMsZCk7Yy50eXBlPWsrXCJlbnRlclwiO2MudGFyZ2V0PWU7Yy5yZWxhdGVkVGFyZ2V0PW07ZD1iO2lmKGYmJmQpYTp7Yj1mO2U9ZDtrPTA7Zm9yKGc9YjtnO2c9TGEoZykpaysrO2c9MDtmb3IobD1lO2w7bD1MYShsKSlnKys7Zm9yKDswPGstZzspYj1MYShiKSxrLS07Zm9yKDswPGctazspZT1MYShlKSxnLS07Zm9yKDtrLS07KXtpZihiPT09ZXx8Yj09PWUuYWx0ZXJuYXRlKWJyZWFrIGE7Yj1MYShiKTtlPUxhKGUpfWI9bnVsbH1lbHNlIGI9bnVsbDtlPWI7Zm9yKGI9W107ZiYmZiE9PWU7KXtrPVxuZi5hbHRlcm5hdGU7aWYobnVsbCE9PWsmJms9PT1lKWJyZWFrO2IucHVzaChmKTtmPUxhKGYpfWZvcihmPVtdO2QmJmQhPT1lOyl7az1kLmFsdGVybmF0ZTtpZihudWxsIT09ayYmaz09PWUpYnJlYWs7Zi5wdXNoKGQpO2Q9TGEoZCl9Zm9yKGQ9MDtkPGIubGVuZ3RoO2QrKylPYShiW2RdLFwiYnViYmxlZFwiLGEpO2ZvcihkPWYubGVuZ3RoOzA8ZC0tOylPYShmW2RdLFwiY2FwdHVyZWRcIixjKTtyZXR1cm5bYSxjXX19O2Z1bmN0aW9uIGJkKGEsYil7cmV0dXJuIGE9PT1iJiYoMCE9PWF8fDEvYT09PTEvYil8fGEhPT1hJiZiIT09Yn12YXIgY2Q9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbmZ1bmN0aW9uIGRkKGEsYil7aWYoYmQoYSxiKSlyZXR1cm4hMDtpZihcIm9iamVjdFwiIT09dHlwZW9mIGF8fG51bGw9PT1hfHxcIm9iamVjdFwiIT09dHlwZW9mIGJ8fG51bGw9PT1iKXJldHVybiExO3ZhciBjPU9iamVjdC5rZXlzKGEpLGQ9T2JqZWN0LmtleXMoYik7aWYoYy5sZW5ndGghPT1kLmxlbmd0aClyZXR1cm4hMTtmb3IoZD0wO2Q8Yy5sZW5ndGg7ZCsrKWlmKCFjZC5jYWxsKGIsY1tkXSl8fCFiZChhW2NbZF1dLGJbY1tkXV0pKXJldHVybiExO3JldHVybiEwfWZ1bmN0aW9uIGVkKGEpe3ZhciBiPWE7aWYoYS5hbHRlcm5hdGUpZm9yKDtiLnJldHVybjspYj1iLnJldHVybjtlbHNle2lmKDAhPT0oYi5lZmZlY3RUYWcmMikpcmV0dXJuIDE7Zm9yKDtiLnJldHVybjspaWYoYj1iLnJldHVybiwwIT09KGIuZWZmZWN0VGFnJjIpKXJldHVybiAxfXJldHVybiAzPT09Yi50YWc/MjozfWZ1bmN0aW9uIGZkKGEpezIhPT1lZChhKT94KFwiMTg4XCIpOnZvaWQgMH1cbmZ1bmN0aW9uIGdkKGEpe3ZhciBiPWEuYWx0ZXJuYXRlO2lmKCFiKXJldHVybiBiPWVkKGEpLDM9PT1iP3goXCIxODhcIik6dm9pZCAwLDE9PT1iP251bGw6YTtmb3IodmFyIGM9YSxkPWI7Oyl7dmFyIGU9Yy5yZXR1cm4sZj1lP2UuYWx0ZXJuYXRlOm51bGw7aWYoIWV8fCFmKWJyZWFrO2lmKGUuY2hpbGQ9PT1mLmNoaWxkKXtmb3IodmFyIGc9ZS5jaGlsZDtnOyl7aWYoZz09PWMpcmV0dXJuIGZkKGUpLGE7aWYoZz09PWQpcmV0dXJuIGZkKGUpLGI7Zz1nLnNpYmxpbmd9eChcIjE4OFwiKX1pZihjLnJldHVybiE9PWQucmV0dXJuKWM9ZSxkPWY7ZWxzZXtnPSExO2Zvcih2YXIgaD1lLmNoaWxkO2g7KXtpZihoPT09Yyl7Zz0hMDtjPWU7ZD1mO2JyZWFrfWlmKGg9PT1kKXtnPSEwO2Q9ZTtjPWY7YnJlYWt9aD1oLnNpYmxpbmd9aWYoIWcpe2ZvcihoPWYuY2hpbGQ7aDspe2lmKGg9PT1jKXtnPSEwO2M9ZjtkPWU7YnJlYWt9aWYoaD09PWQpe2c9ITA7ZD1mO2M9ZTticmVha31oPWguc2libGluZ31nP1xudm9pZCAwOngoXCIxODlcIil9fWMuYWx0ZXJuYXRlIT09ZD94KFwiMTkwXCIpOnZvaWQgMH0zIT09Yy50YWc/eChcIjE4OFwiKTp2b2lkIDA7cmV0dXJuIGMuc3RhdGVOb2RlLmN1cnJlbnQ9PT1jP2E6Yn1mdW5jdGlvbiBoZChhKXthPWdkKGEpO2lmKCFhKXJldHVybiBudWxsO2Zvcih2YXIgYj1hOzspe2lmKDU9PT1iLnRhZ3x8Nj09PWIudGFnKXJldHVybiBiO2lmKGIuY2hpbGQpYi5jaGlsZC5yZXR1cm49YixiPWIuY2hpbGQ7ZWxzZXtpZihiPT09YSlicmVhaztmb3IoOyFiLnNpYmxpbmc7KXtpZighYi5yZXR1cm58fGIucmV0dXJuPT09YSlyZXR1cm4gbnVsbDtiPWIucmV0dXJufWIuc2libGluZy5yZXR1cm49Yi5yZXR1cm47Yj1iLnNpYmxpbmd9fXJldHVybiBudWxsfVxudmFyIGlkPXkuZXh0ZW5kKHthbmltYXRpb25OYW1lOm51bGwsZWxhcHNlZFRpbWU6bnVsbCxwc2V1ZG9FbGVtZW50Om51bGx9KSxqZD15LmV4dGVuZCh7Y2xpcGJvYXJkRGF0YTpmdW5jdGlvbihhKXtyZXR1cm5cImNsaXBib2FyZERhdGFcImluIGE/YS5jbGlwYm9hcmREYXRhOndpbmRvdy5jbGlwYm9hcmREYXRhfX0pLGtkPVFjLmV4dGVuZCh7cmVsYXRlZFRhcmdldDpudWxsfSk7ZnVuY3Rpb24gbGQoYSl7dmFyIGI9YS5rZXlDb2RlO1wiY2hhckNvZGVcImluIGE/KGE9YS5jaGFyQ29kZSwwPT09YSYmMTM9PT1iJiYoYT0xMykpOmE9YjsxMD09PWEmJihhPTEzKTtyZXR1cm4gMzI8PWF8fDEzPT09YT9hOjB9XG52YXIgbWQ9e0VzYzpcIkVzY2FwZVwiLFNwYWNlYmFyOlwiIFwiLExlZnQ6XCJBcnJvd0xlZnRcIixVcDpcIkFycm93VXBcIixSaWdodDpcIkFycm93UmlnaHRcIixEb3duOlwiQXJyb3dEb3duXCIsRGVsOlwiRGVsZXRlXCIsV2luOlwiT1NcIixNZW51OlwiQ29udGV4dE1lbnVcIixBcHBzOlwiQ29udGV4dE1lbnVcIixTY3JvbGw6XCJTY3JvbGxMb2NrXCIsTW96UHJpbnRhYmxlS2V5OlwiVW5pZGVudGlmaWVkXCJ9LG5kPXs4OlwiQmFja3NwYWNlXCIsOTpcIlRhYlwiLDEyOlwiQ2xlYXJcIiwxMzpcIkVudGVyXCIsMTY6XCJTaGlmdFwiLDE3OlwiQ29udHJvbFwiLDE4OlwiQWx0XCIsMTk6XCJQYXVzZVwiLDIwOlwiQ2Fwc0xvY2tcIiwyNzpcIkVzY2FwZVwiLDMyOlwiIFwiLDMzOlwiUGFnZVVwXCIsMzQ6XCJQYWdlRG93blwiLDM1OlwiRW5kXCIsMzY6XCJIb21lXCIsMzc6XCJBcnJvd0xlZnRcIiwzODpcIkFycm93VXBcIiwzOTpcIkFycm93UmlnaHRcIiw0MDpcIkFycm93RG93blwiLDQ1OlwiSW5zZXJ0XCIsNDY6XCJEZWxldGVcIiwxMTI6XCJGMVwiLDExMzpcIkYyXCIsMTE0OlwiRjNcIiwxMTU6XCJGNFwiLFxuMTE2OlwiRjVcIiwxMTc6XCJGNlwiLDExODpcIkY3XCIsMTE5OlwiRjhcIiwxMjA6XCJGOVwiLDEyMTpcIkYxMFwiLDEyMjpcIkYxMVwiLDEyMzpcIkYxMlwiLDE0NDpcIk51bUxvY2tcIiwxNDU6XCJTY3JvbGxMb2NrXCIsMjI0OlwiTWV0YVwifSxvZD1RYy5leHRlbmQoe2tleTpmdW5jdGlvbihhKXtpZihhLmtleSl7dmFyIGI9bWRbYS5rZXldfHxhLmtleTtpZihcIlVuaWRlbnRpZmllZFwiIT09YilyZXR1cm4gYn1yZXR1cm5cImtleXByZXNzXCI9PT1hLnR5cGU/KGE9bGQoYSksMTM9PT1hP1wiRW50ZXJcIjpTdHJpbmcuZnJvbUNoYXJDb2RlKGEpKTpcImtleWRvd25cIj09PWEudHlwZXx8XCJrZXl1cFwiPT09YS50eXBlP25kW2Eua2V5Q29kZV18fFwiVW5pZGVudGlmaWVkXCI6XCJcIn0sbG9jYXRpb246bnVsbCxjdHJsS2V5Om51bGwsc2hpZnRLZXk6bnVsbCxhbHRLZXk6bnVsbCxtZXRhS2V5Om51bGwscmVwZWF0Om51bGwsbG9jYWxlOm51bGwsZ2V0TW9kaWZpZXJTdGF0ZTpUYyxjaGFyQ29kZTpmdW5jdGlvbihhKXtyZXR1cm5cImtleXByZXNzXCI9PT1cbmEudHlwZT9sZChhKTowfSxrZXlDb2RlOmZ1bmN0aW9uKGEpe3JldHVyblwia2V5ZG93blwiPT09YS50eXBlfHxcImtleXVwXCI9PT1hLnR5cGU/YS5rZXlDb2RlOjB9LHdoaWNoOmZ1bmN0aW9uKGEpe3JldHVyblwia2V5cHJlc3NcIj09PWEudHlwZT9sZChhKTpcImtleWRvd25cIj09PWEudHlwZXx8XCJrZXl1cFwiPT09YS50eXBlP2Eua2V5Q29kZTowfX0pLHBkPVljLmV4dGVuZCh7ZGF0YVRyYW5zZmVyOm51bGx9KSxxZD1RYy5leHRlbmQoe3RvdWNoZXM6bnVsbCx0YXJnZXRUb3VjaGVzOm51bGwsY2hhbmdlZFRvdWNoZXM6bnVsbCxhbHRLZXk6bnVsbCxtZXRhS2V5Om51bGwsY3RybEtleTpudWxsLHNoaWZ0S2V5Om51bGwsZ2V0TW9kaWZpZXJTdGF0ZTpUY30pLHJkPXkuZXh0ZW5kKHtwcm9wZXJ0eU5hbWU6bnVsbCxlbGFwc2VkVGltZTpudWxsLHBzZXVkb0VsZW1lbnQ6bnVsbH0pLHNkPVljLmV4dGVuZCh7ZGVsdGFYOmZ1bmN0aW9uKGEpe3JldHVyblwiZGVsdGFYXCJpbiBhP2EuZGVsdGFYOlwid2hlZWxEZWx0YVhcImluXG5hPy1hLndoZWVsRGVsdGFYOjB9LGRlbHRhWTpmdW5jdGlvbihhKXtyZXR1cm5cImRlbHRhWVwiaW4gYT9hLmRlbHRhWTpcIndoZWVsRGVsdGFZXCJpbiBhPy1hLndoZWVsRGVsdGFZOlwid2hlZWxEZWx0YVwiaW4gYT8tYS53aGVlbERlbHRhOjB9LGRlbHRhWjpudWxsLGRlbHRhTW9kZTpudWxsfSksdGQ9W1tcImFib3J0XCIsXCJhYm9ydFwiXSxbWGEsXCJhbmltYXRpb25FbmRcIl0sW1lhLFwiYW5pbWF0aW9uSXRlcmF0aW9uXCJdLFtaYSxcImFuaW1hdGlvblN0YXJ0XCJdLFtcImNhbnBsYXlcIixcImNhblBsYXlcIl0sW1wiY2FucGxheXRocm91Z2hcIixcImNhblBsYXlUaHJvdWdoXCJdLFtcImRyYWdcIixcImRyYWdcIl0sW1wiZHJhZ2VudGVyXCIsXCJkcmFnRW50ZXJcIl0sW1wiZHJhZ2V4aXRcIixcImRyYWdFeGl0XCJdLFtcImRyYWdsZWF2ZVwiLFwiZHJhZ0xlYXZlXCJdLFtcImRyYWdvdmVyXCIsXCJkcmFnT3ZlclwiXSxbXCJkdXJhdGlvbmNoYW5nZVwiLFwiZHVyYXRpb25DaGFuZ2VcIl0sW1wiZW1wdGllZFwiLFwiZW1wdGllZFwiXSxbXCJlbmNyeXB0ZWRcIixcImVuY3J5cHRlZFwiXSxcbltcImVuZGVkXCIsXCJlbmRlZFwiXSxbXCJlcnJvclwiLFwiZXJyb3JcIl0sW1wiZ290cG9pbnRlcmNhcHR1cmVcIixcImdvdFBvaW50ZXJDYXB0dXJlXCJdLFtcImxvYWRcIixcImxvYWRcIl0sW1wibG9hZGVkZGF0YVwiLFwibG9hZGVkRGF0YVwiXSxbXCJsb2FkZWRtZXRhZGF0YVwiLFwibG9hZGVkTWV0YWRhdGFcIl0sW1wibG9hZHN0YXJ0XCIsXCJsb2FkU3RhcnRcIl0sW1wibG9zdHBvaW50ZXJjYXB0dXJlXCIsXCJsb3N0UG9pbnRlckNhcHR1cmVcIl0sW1wibW91c2Vtb3ZlXCIsXCJtb3VzZU1vdmVcIl0sW1wibW91c2VvdXRcIixcIm1vdXNlT3V0XCJdLFtcIm1vdXNlb3ZlclwiLFwibW91c2VPdmVyXCJdLFtcInBsYXlpbmdcIixcInBsYXlpbmdcIl0sW1wicG9pbnRlcm1vdmVcIixcInBvaW50ZXJNb3ZlXCJdLFtcInBvaW50ZXJvdXRcIixcInBvaW50ZXJPdXRcIl0sW1wicG9pbnRlcm92ZXJcIixcInBvaW50ZXJPdmVyXCJdLFtcInByb2dyZXNzXCIsXCJwcm9ncmVzc1wiXSxbXCJzY3JvbGxcIixcInNjcm9sbFwiXSxbXCJzZWVraW5nXCIsXCJzZWVraW5nXCJdLFtcInN0YWxsZWRcIixcInN0YWxsZWRcIl0sXG5bXCJzdXNwZW5kXCIsXCJzdXNwZW5kXCJdLFtcInRpbWV1cGRhdGVcIixcInRpbWVVcGRhdGVcIl0sW1widG9nZ2xlXCIsXCJ0b2dnbGVcIl0sW1widG91Y2htb3ZlXCIsXCJ0b3VjaE1vdmVcIl0sWyRhLFwidHJhbnNpdGlvbkVuZFwiXSxbXCJ3YWl0aW5nXCIsXCJ3YWl0aW5nXCJdLFtcIndoZWVsXCIsXCJ3aGVlbFwiXV0sdWQ9e30sdmQ9e307ZnVuY3Rpb24gd2QoYSxiKXt2YXIgYz1hWzBdO2E9YVsxXTt2YXIgZD1cIm9uXCIrKGFbMF0udG9VcHBlckNhc2UoKSthLnNsaWNlKDEpKTtiPXtwaGFzZWRSZWdpc3RyYXRpb25OYW1lczp7YnViYmxlZDpkLGNhcHR1cmVkOmQrXCJDYXB0dXJlXCJ9LGRlcGVuZGVuY2llczpbY10saXNJbnRlcmFjdGl2ZTpifTt1ZFthXT1iO3ZkW2NdPWJ9XG5bW1wiYmx1clwiLFwiYmx1clwiXSxbXCJjYW5jZWxcIixcImNhbmNlbFwiXSxbXCJjbGlja1wiLFwiY2xpY2tcIl0sW1wiY2xvc2VcIixcImNsb3NlXCJdLFtcImNvbnRleHRtZW51XCIsXCJjb250ZXh0TWVudVwiXSxbXCJjb3B5XCIsXCJjb3B5XCJdLFtcImN1dFwiLFwiY3V0XCJdLFtcImF1eGNsaWNrXCIsXCJhdXhDbGlja1wiXSxbXCJkYmxjbGlja1wiLFwiZG91YmxlQ2xpY2tcIl0sW1wiZHJhZ2VuZFwiLFwiZHJhZ0VuZFwiXSxbXCJkcmFnc3RhcnRcIixcImRyYWdTdGFydFwiXSxbXCJkcm9wXCIsXCJkcm9wXCJdLFtcImZvY3VzXCIsXCJmb2N1c1wiXSxbXCJpbnB1dFwiLFwiaW5wdXRcIl0sW1wiaW52YWxpZFwiLFwiaW52YWxpZFwiXSxbXCJrZXlkb3duXCIsXCJrZXlEb3duXCJdLFtcImtleXByZXNzXCIsXCJrZXlQcmVzc1wiXSxbXCJrZXl1cFwiLFwia2V5VXBcIl0sW1wibW91c2Vkb3duXCIsXCJtb3VzZURvd25cIl0sW1wibW91c2V1cFwiLFwibW91c2VVcFwiXSxbXCJwYXN0ZVwiLFwicGFzdGVcIl0sW1wicGF1c2VcIixcInBhdXNlXCJdLFtcInBsYXlcIixcInBsYXlcIl0sW1wicG9pbnRlcmNhbmNlbFwiLFwicG9pbnRlckNhbmNlbFwiXSxcbltcInBvaW50ZXJkb3duXCIsXCJwb2ludGVyRG93blwiXSxbXCJwb2ludGVydXBcIixcInBvaW50ZXJVcFwiXSxbXCJyYXRlY2hhbmdlXCIsXCJyYXRlQ2hhbmdlXCJdLFtcInJlc2V0XCIsXCJyZXNldFwiXSxbXCJzZWVrZWRcIixcInNlZWtlZFwiXSxbXCJzdWJtaXRcIixcInN1Ym1pdFwiXSxbXCJ0b3VjaGNhbmNlbFwiLFwidG91Y2hDYW5jZWxcIl0sW1widG91Y2hlbmRcIixcInRvdWNoRW5kXCJdLFtcInRvdWNoc3RhcnRcIixcInRvdWNoU3RhcnRcIl0sW1widm9sdW1lY2hhbmdlXCIsXCJ2b2x1bWVDaGFuZ2VcIl1dLmZvckVhY2goZnVuY3Rpb24oYSl7d2QoYSwhMCl9KTt0ZC5mb3JFYWNoKGZ1bmN0aW9uKGEpe3dkKGEsITEpfSk7XG52YXIgeGQ9e2V2ZW50VHlwZXM6dWQsaXNJbnRlcmFjdGl2ZVRvcExldmVsRXZlbnRUeXBlOmZ1bmN0aW9uKGEpe2E9dmRbYV07cmV0dXJuIHZvaWQgMCE9PWEmJiEwPT09YS5pc0ludGVyYWN0aXZlfSxleHRyYWN0RXZlbnRzOmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPXZkW2FdO2lmKCFlKXJldHVybiBudWxsO3N3aXRjaChhKXtjYXNlIFwia2V5cHJlc3NcIjppZigwPT09bGQoYykpcmV0dXJuIG51bGw7Y2FzZSBcImtleWRvd25cIjpjYXNlIFwia2V5dXBcIjphPW9kO2JyZWFrO2Nhc2UgXCJibHVyXCI6Y2FzZSBcImZvY3VzXCI6YT1rZDticmVhaztjYXNlIFwiY2xpY2tcIjppZigyPT09Yy5idXR0b24pcmV0dXJuIG51bGw7Y2FzZSBcImF1eGNsaWNrXCI6Y2FzZSBcImRibGNsaWNrXCI6Y2FzZSBcIm1vdXNlZG93blwiOmNhc2UgXCJtb3VzZW1vdmVcIjpjYXNlIFwibW91c2V1cFwiOmNhc2UgXCJtb3VzZW91dFwiOmNhc2UgXCJtb3VzZW92ZXJcIjpjYXNlIFwiY29udGV4dG1lbnVcIjphPVljO2JyZWFrO2Nhc2UgXCJkcmFnXCI6Y2FzZSBcImRyYWdlbmRcIjpjYXNlIFwiZHJhZ2VudGVyXCI6Y2FzZSBcImRyYWdleGl0XCI6Y2FzZSBcImRyYWdsZWF2ZVwiOmNhc2UgXCJkcmFnb3ZlclwiOmNhc2UgXCJkcmFnc3RhcnRcIjpjYXNlIFwiZHJvcFwiOmE9XG5wZDticmVhaztjYXNlIFwidG91Y2hjYW5jZWxcIjpjYXNlIFwidG91Y2hlbmRcIjpjYXNlIFwidG91Y2htb3ZlXCI6Y2FzZSBcInRvdWNoc3RhcnRcIjphPXFkO2JyZWFrO2Nhc2UgWGE6Y2FzZSBZYTpjYXNlIFphOmE9aWQ7YnJlYWs7Y2FzZSAkYTphPXJkO2JyZWFrO2Nhc2UgXCJzY3JvbGxcIjphPVFjO2JyZWFrO2Nhc2UgXCJ3aGVlbFwiOmE9c2Q7YnJlYWs7Y2FzZSBcImNvcHlcIjpjYXNlIFwiY3V0XCI6Y2FzZSBcInBhc3RlXCI6YT1qZDticmVhaztjYXNlIFwiZ290cG9pbnRlcmNhcHR1cmVcIjpjYXNlIFwibG9zdHBvaW50ZXJjYXB0dXJlXCI6Y2FzZSBcInBvaW50ZXJjYW5jZWxcIjpjYXNlIFwicG9pbnRlcmRvd25cIjpjYXNlIFwicG9pbnRlcm1vdmVcIjpjYXNlIFwicG9pbnRlcm91dFwiOmNhc2UgXCJwb2ludGVyb3ZlclwiOmNhc2UgXCJwb2ludGVydXBcIjphPVpjO2JyZWFrO2RlZmF1bHQ6YT15fWI9YS5nZXRQb29sZWQoZSxiLGMsZCk7UWEoYik7cmV0dXJuIGJ9fSx5ZD14ZC5pc0ludGVyYWN0aXZlVG9wTGV2ZWxFdmVudFR5cGUsXG56ZD1bXTtmdW5jdGlvbiBBZChhKXt2YXIgYj1hLnRhcmdldEluc3QsYz1iO2Rve2lmKCFjKXthLmFuY2VzdG9ycy5wdXNoKGMpO2JyZWFrfXZhciBkO2ZvcihkPWM7ZC5yZXR1cm47KWQ9ZC5yZXR1cm47ZD0zIT09ZC50YWc/bnVsbDpkLnN0YXRlTm9kZS5jb250YWluZXJJbmZvO2lmKCFkKWJyZWFrO2EuYW5jZXN0b3JzLnB1c2goYyk7Yz1IYShkKX13aGlsZShjKTtmb3IoYz0wO2M8YS5hbmNlc3RvcnMubGVuZ3RoO2MrKyl7Yj1hLmFuY2VzdG9yc1tjXTt2YXIgZT1OYihhLm5hdGl2ZUV2ZW50KTtkPWEudG9wTGV2ZWxUeXBlO2Zvcih2YXIgZj1hLm5hdGl2ZUV2ZW50LGc9bnVsbCxoPTA7aDxvYS5sZW5ndGg7aCsrKXt2YXIgbD1vYVtoXTtsJiYobD1sLmV4dHJhY3RFdmVudHMoZCxiLGYsZSkpJiYoZz14YShnLGwpKX1EYShnKX19dmFyIEJkPSEwO1xuZnVuY3Rpb24gRShhLGIpe2lmKCFiKXJldHVybiBudWxsO3ZhciBjPSh5ZChhKT9DZDpEZCkuYmluZChudWxsLGEpO2IuYWRkRXZlbnRMaXN0ZW5lcihhLGMsITEpfWZ1bmN0aW9uIEVkKGEsYil7aWYoIWIpcmV0dXJuIG51bGw7dmFyIGM9KHlkKGEpP0NkOkRkKS5iaW5kKG51bGwsYSk7Yi5hZGRFdmVudExpc3RlbmVyKGEsYywhMCl9ZnVuY3Rpb24gQ2QoYSxiKXtIYihEZCxhLGIpfVxuZnVuY3Rpb24gRGQoYSxiKXtpZihCZCl7dmFyIGM9TmIoYik7Yz1IYShjKTtudWxsPT09Y3x8XCJudW1iZXJcIiE9PXR5cGVvZiBjLnRhZ3x8Mj09PWVkKGMpfHwoYz1udWxsKTtpZih6ZC5sZW5ndGgpe3ZhciBkPXpkLnBvcCgpO2QudG9wTGV2ZWxUeXBlPWE7ZC5uYXRpdmVFdmVudD1iO2QudGFyZ2V0SW5zdD1jO2E9ZH1lbHNlIGE9e3RvcExldmVsVHlwZTphLG5hdGl2ZUV2ZW50OmIsdGFyZ2V0SW5zdDpjLGFuY2VzdG9yczpbXX07dHJ5e0tiKEFkLGEpfWZpbmFsbHl7YS50b3BMZXZlbFR5cGU9bnVsbCxhLm5hdGl2ZUV2ZW50PW51bGwsYS50YXJnZXRJbnN0PW51bGwsYS5hbmNlc3RvcnMubGVuZ3RoPTAsMTA+emQubGVuZ3RoJiZ6ZC5wdXNoKGEpfX19dmFyIEZkPXt9LEdkPTAsSGQ9XCJfcmVhY3RMaXN0ZW5lcnNJRFwiKyhcIlwiK01hdGgucmFuZG9tKCkpLnNsaWNlKDIpO1xuZnVuY3Rpb24gSWQoYSl7T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGEsSGQpfHwoYVtIZF09R2QrKyxGZFthW0hkXV09e30pO3JldHVybiBGZFthW0hkXV19ZnVuY3Rpb24gSmQoYSl7YT1hfHwoXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBkb2N1bWVudD9kb2N1bWVudDp2b2lkIDApO2lmKFwidW5kZWZpbmVkXCI9PT10eXBlb2YgYSlyZXR1cm4gbnVsbDt0cnl7cmV0dXJuIGEuYWN0aXZlRWxlbWVudHx8YS5ib2R5fWNhdGNoKGIpe3JldHVybiBhLmJvZHl9fWZ1bmN0aW9uIEtkKGEpe2Zvcig7YSYmYS5maXJzdENoaWxkOylhPWEuZmlyc3RDaGlsZDtyZXR1cm4gYX1cbmZ1bmN0aW9uIExkKGEsYil7dmFyIGM9S2QoYSk7YT0wO2Zvcih2YXIgZDtjOyl7aWYoMz09PWMubm9kZVR5cGUpe2Q9YStjLnRleHRDb250ZW50Lmxlbmd0aDtpZihhPD1iJiZkPj1iKXJldHVybntub2RlOmMsb2Zmc2V0OmItYX07YT1kfWE6e2Zvcig7Yzspe2lmKGMubmV4dFNpYmxpbmcpe2M9Yy5uZXh0U2libGluZzticmVhayBhfWM9Yy5wYXJlbnROb2RlfWM9dm9pZCAwfWM9S2QoYyl9fWZ1bmN0aW9uIE1kKGEsYil7cmV0dXJuIGEmJmI/YT09PWI/ITA6YSYmMz09PWEubm9kZVR5cGU/ITE6YiYmMz09PWIubm9kZVR5cGU/TWQoYSxiLnBhcmVudE5vZGUpOlwiY29udGFpbnNcImluIGE/YS5jb250YWlucyhiKTphLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uPyEhKGEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oYikmMTYpOiExOiExfVxuZnVuY3Rpb24gTmQoKXtmb3IodmFyIGE9d2luZG93LGI9SmQoKTtiIGluc3RhbmNlb2YgYS5IVE1MSUZyYW1lRWxlbWVudDspe3RyeXt2YXIgYz1cInN0cmluZ1wiPT09dHlwZW9mIGIuY29udGVudFdpbmRvdy5sb2NhdGlvbi5ocmVmfWNhdGNoKGQpe2M9ITF9aWYoYylhPWIuY29udGVudFdpbmRvdztlbHNlIGJyZWFrO2I9SmQoYS5kb2N1bWVudCl9cmV0dXJuIGJ9ZnVuY3Rpb24gT2QoYSl7dmFyIGI9YSYmYS5ub2RlTmFtZSYmYS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVybiBiJiYoXCJpbnB1dFwiPT09YiYmKFwidGV4dFwiPT09YS50eXBlfHxcInNlYXJjaFwiPT09YS50eXBlfHxcInRlbFwiPT09YS50eXBlfHxcInVybFwiPT09YS50eXBlfHxcInBhc3N3b3JkXCI9PT1hLnR5cGUpfHxcInRleHRhcmVhXCI9PT1ifHxcInRydWVcIj09PWEuY29udGVudEVkaXRhYmxlKX1cbmZ1bmN0aW9uIFBkKCl7dmFyIGE9TmQoKTtpZihPZChhKSl7aWYoXCJzZWxlY3Rpb25TdGFydFwiaW4gYSl2YXIgYj17c3RhcnQ6YS5zZWxlY3Rpb25TdGFydCxlbmQ6YS5zZWxlY3Rpb25FbmR9O2Vsc2UgYTp7Yj0oYj1hLm93bmVyRG9jdW1lbnQpJiZiLmRlZmF1bHRWaWV3fHx3aW5kb3c7dmFyIGM9Yi5nZXRTZWxlY3Rpb24mJmIuZ2V0U2VsZWN0aW9uKCk7aWYoYyYmMCE9PWMucmFuZ2VDb3VudCl7Yj1jLmFuY2hvck5vZGU7dmFyIGQ9Yy5hbmNob3JPZmZzZXQsZT1jLmZvY3VzTm9kZTtjPWMuZm9jdXNPZmZzZXQ7dHJ5e2Iubm9kZVR5cGUsZS5ub2RlVHlwZX1jYXRjaChBKXtiPW51bGw7YnJlYWsgYX12YXIgZj0wLGc9LTEsaD0tMSxsPTAsaz0wLG09YSxwPW51bGw7Yjpmb3IoOzspe2Zvcih2YXIgdDs7KXttIT09Ynx8MCE9PWQmJjMhPT1tLm5vZGVUeXBlfHwoZz1mK2QpO20hPT1lfHwwIT09YyYmMyE9PW0ubm9kZVR5cGV8fChoPWYrYyk7Mz09PW0ubm9kZVR5cGUmJihmKz1tLm5vZGVWYWx1ZS5sZW5ndGgpO1xuaWYobnVsbD09PSh0PW0uZmlyc3RDaGlsZCkpYnJlYWs7cD1tO209dH1mb3IoOzspe2lmKG09PT1hKWJyZWFrIGI7cD09PWImJisrbD09PWQmJihnPWYpO3A9PT1lJiYrK2s9PT1jJiYoaD1mKTtpZihudWxsIT09KHQ9bS5uZXh0U2libGluZykpYnJlYWs7bT1wO3A9bS5wYXJlbnROb2RlfW09dH1iPS0xPT09Z3x8LTE9PT1oP251bGw6e3N0YXJ0OmcsZW5kOmh9fWVsc2UgYj1udWxsfWI9Ynx8e3N0YXJ0OjAsZW5kOjB9fWVsc2UgYj1udWxsO3JldHVybntmb2N1c2VkRWxlbTphLHNlbGVjdGlvblJhbmdlOmJ9fVxuZnVuY3Rpb24gUWQoYSl7dmFyIGI9TmQoKSxjPWEuZm9jdXNlZEVsZW0sZD1hLnNlbGVjdGlvblJhbmdlO2lmKGIhPT1jJiZjJiZjLm93bmVyRG9jdW1lbnQmJk1kKGMub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsYykpe2lmKG51bGwhPT1kJiZPZChjKSlpZihiPWQuc3RhcnQsYT1kLmVuZCx2b2lkIDA9PT1hJiYoYT1iKSxcInNlbGVjdGlvblN0YXJ0XCJpbiBjKWMuc2VsZWN0aW9uU3RhcnQ9YixjLnNlbGVjdGlvbkVuZD1NYXRoLm1pbihhLGMudmFsdWUubGVuZ3RoKTtlbHNlIGlmKGE9KGI9Yy5vd25lckRvY3VtZW50fHxkb2N1bWVudCkmJmIuZGVmYXVsdFZpZXd8fHdpbmRvdyxhLmdldFNlbGVjdGlvbil7YT1hLmdldFNlbGVjdGlvbigpO3ZhciBlPWMudGV4dENvbnRlbnQubGVuZ3RoLGY9TWF0aC5taW4oZC5zdGFydCxlKTtkPXZvaWQgMD09PWQuZW5kP2Y6TWF0aC5taW4oZC5lbmQsZSk7IWEuZXh0ZW5kJiZmPmQmJihlPWQsZD1mLGY9ZSk7ZT1MZChjLGYpO3ZhciBnPUxkKGMsXG5kKTtlJiZnJiYoMSE9PWEucmFuZ2VDb3VudHx8YS5hbmNob3JOb2RlIT09ZS5ub2RlfHxhLmFuY2hvck9mZnNldCE9PWUub2Zmc2V0fHxhLmZvY3VzTm9kZSE9PWcubm9kZXx8YS5mb2N1c09mZnNldCE9PWcub2Zmc2V0KSYmKGI9Yi5jcmVhdGVSYW5nZSgpLGIuc2V0U3RhcnQoZS5ub2RlLGUub2Zmc2V0KSxhLnJlbW92ZUFsbFJhbmdlcygpLGY+ZD8oYS5hZGRSYW5nZShiKSxhLmV4dGVuZChnLm5vZGUsZy5vZmZzZXQpKTooYi5zZXRFbmQoZy5ub2RlLGcub2Zmc2V0KSxhLmFkZFJhbmdlKGIpKSl9Yj1bXTtmb3IoYT1jO2E9YS5wYXJlbnROb2RlOykxPT09YS5ub2RlVHlwZSYmYi5wdXNoKHtlbGVtZW50OmEsbGVmdDphLnNjcm9sbExlZnQsdG9wOmEuc2Nyb2xsVG9wfSk7XCJmdW5jdGlvblwiPT09dHlwZW9mIGMuZm9jdXMmJmMuZm9jdXMoKTtmb3IoYz0wO2M8Yi5sZW5ndGg7YysrKWE9YltjXSxhLmVsZW1lbnQuc2Nyb2xsTGVmdD1hLmxlZnQsYS5lbGVtZW50LnNjcm9sbFRvcD1hLnRvcH19XG52YXIgUmQ9UmEmJlwiZG9jdW1lbnRNb2RlXCJpbiBkb2N1bWVudCYmMTE+PWRvY3VtZW50LmRvY3VtZW50TW9kZSxTZD17c2VsZWN0OntwaGFzZWRSZWdpc3RyYXRpb25OYW1lczp7YnViYmxlZDpcIm9uU2VsZWN0XCIsY2FwdHVyZWQ6XCJvblNlbGVjdENhcHR1cmVcIn0sZGVwZW5kZW5jaWVzOlwiYmx1ciBjb250ZXh0bWVudSBkcmFnZW5kIGZvY3VzIGtleWRvd24ga2V5dXAgbW91c2Vkb3duIG1vdXNldXAgc2VsZWN0aW9uY2hhbmdlXCIuc3BsaXQoXCIgXCIpfX0sVGQ9bnVsbCxVZD1udWxsLFZkPW51bGwsV2Q9ITE7XG5mdW5jdGlvbiBYZChhLGIpe3ZhciBjPWIud2luZG93PT09Yj9iLmRvY3VtZW50Ojk9PT1iLm5vZGVUeXBlP2I6Yi5vd25lckRvY3VtZW50O2lmKFdkfHxudWxsPT1UZHx8VGQhPT1KZChjKSlyZXR1cm4gbnVsbDtjPVRkO1wic2VsZWN0aW9uU3RhcnRcImluIGMmJk9kKGMpP2M9e3N0YXJ0OmMuc2VsZWN0aW9uU3RhcnQsZW5kOmMuc2VsZWN0aW9uRW5kfTooYz0oYy5vd25lckRvY3VtZW50JiZjLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXd8fHdpbmRvdykuZ2V0U2VsZWN0aW9uKCksYz17YW5jaG9yTm9kZTpjLmFuY2hvck5vZGUsYW5jaG9yT2Zmc2V0OmMuYW5jaG9yT2Zmc2V0LGZvY3VzTm9kZTpjLmZvY3VzTm9kZSxmb2N1c09mZnNldDpjLmZvY3VzT2Zmc2V0fSk7cmV0dXJuIFZkJiZkZChWZCxjKT9udWxsOihWZD1jLGE9eS5nZXRQb29sZWQoU2Quc2VsZWN0LFVkLGEsYiksYS50eXBlPVwic2VsZWN0XCIsYS50YXJnZXQ9VGQsUWEoYSksYSl9XG52YXIgWWQ9e2V2ZW50VHlwZXM6U2QsZXh0cmFjdEV2ZW50czpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1kLndpbmRvdz09PWQ/ZC5kb2N1bWVudDo5PT09ZC5ub2RlVHlwZT9kOmQub3duZXJEb2N1bWVudCxmO2lmKCEoZj0hZSkpe2E6e2U9SWQoZSk7Zj1zYS5vblNlbGVjdDtmb3IodmFyIGc9MDtnPGYubGVuZ3RoO2crKyl7dmFyIGg9ZltnXTtpZighZS5oYXNPd25Qcm9wZXJ0eShoKXx8IWVbaF0pe2U9ITE7YnJlYWsgYX19ZT0hMH1mPSFlfWlmKGYpcmV0dXJuIG51bGw7ZT1iP0phKGIpOndpbmRvdztzd2l0Y2goYSl7Y2FzZSBcImZvY3VzXCI6aWYoTWIoZSl8fFwidHJ1ZVwiPT09ZS5jb250ZW50RWRpdGFibGUpVGQ9ZSxVZD1iLFZkPW51bGw7YnJlYWs7Y2FzZSBcImJsdXJcIjpWZD1VZD1UZD1udWxsO2JyZWFrO2Nhc2UgXCJtb3VzZWRvd25cIjpXZD0hMDticmVhaztjYXNlIFwiY29udGV4dG1lbnVcIjpjYXNlIFwibW91c2V1cFwiOmNhc2UgXCJkcmFnZW5kXCI6cmV0dXJuIFdkPSExLFhkKGMsZCk7Y2FzZSBcInNlbGVjdGlvbmNoYW5nZVwiOmlmKFJkKWJyZWFrO1xuY2FzZSBcImtleWRvd25cIjpjYXNlIFwia2V5dXBcIjpyZXR1cm4gWGQoYyxkKX1yZXR1cm4gbnVsbH19O0JhLmluamVjdEV2ZW50UGx1Z2luT3JkZXIoXCJSZXNwb25kZXJFdmVudFBsdWdpbiBTaW1wbGVFdmVudFBsdWdpbiBFbnRlckxlYXZlRXZlbnRQbHVnaW4gQ2hhbmdlRXZlbnRQbHVnaW4gU2VsZWN0RXZlbnRQbHVnaW4gQmVmb3JlSW5wdXRFdmVudFBsdWdpblwiLnNwbGl0KFwiIFwiKSk7dGE9S2E7dWE9SWE7dmE9SmE7QmEuaW5qZWN0RXZlbnRQbHVnaW5zQnlOYW1lKHtTaW1wbGVFdmVudFBsdWdpbjp4ZCxFbnRlckxlYXZlRXZlbnRQbHVnaW46YWQsQ2hhbmdlRXZlbnRQbHVnaW46UGMsU2VsZWN0RXZlbnRQbHVnaW46WWQsQmVmb3JlSW5wdXRFdmVudFBsdWdpbjp6Yn0pO2Z1bmN0aW9uIFpkKGEpe3ZhciBiPVwiXCI7YWEuQ2hpbGRyZW4uZm9yRWFjaChhLGZ1bmN0aW9uKGEpe251bGwhPWEmJihiKz1hKX0pO3JldHVybiBifVxuZnVuY3Rpb24gJGQoYSxiKXthPW4oe2NoaWxkcmVuOnZvaWQgMH0sYik7aWYoYj1aZChiLmNoaWxkcmVuKSlhLmNoaWxkcmVuPWI7cmV0dXJuIGF9ZnVuY3Rpb24gYWUoYSxiLGMsZCl7YT1hLm9wdGlvbnM7aWYoYil7Yj17fTtmb3IodmFyIGU9MDtlPGMubGVuZ3RoO2UrKyliW1wiJFwiK2NbZV1dPSEwO2ZvcihjPTA7YzxhLmxlbmd0aDtjKyspZT1iLmhhc093blByb3BlcnR5KFwiJFwiK2FbY10udmFsdWUpLGFbY10uc2VsZWN0ZWQhPT1lJiYoYVtjXS5zZWxlY3RlZD1lKSxlJiZkJiYoYVtjXS5kZWZhdWx0U2VsZWN0ZWQ9ITApfWVsc2V7Yz1cIlwiK3VjKGMpO2I9bnVsbDtmb3IoZT0wO2U8YS5sZW5ndGg7ZSsrKXtpZihhW2VdLnZhbHVlPT09Yyl7YVtlXS5zZWxlY3RlZD0hMDtkJiYoYVtlXS5kZWZhdWx0U2VsZWN0ZWQ9ITApO3JldHVybn1udWxsIT09Ynx8YVtlXS5kaXNhYmxlZHx8KGI9YVtlXSl9bnVsbCE9PWImJihiLnNlbGVjdGVkPSEwKX19XG5mdW5jdGlvbiBiZShhLGIpe251bGwhPWIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw/eChcIjkxXCIpOnZvaWQgMDtyZXR1cm4gbih7fSxiLHt2YWx1ZTp2b2lkIDAsZGVmYXVsdFZhbHVlOnZvaWQgMCxjaGlsZHJlbjpcIlwiK2EuX3dyYXBwZXJTdGF0ZS5pbml0aWFsVmFsdWV9KX1mdW5jdGlvbiBjZShhLGIpe3ZhciBjPWIudmFsdWU7bnVsbD09YyYmKGM9Yi5kZWZhdWx0VmFsdWUsYj1iLmNoaWxkcmVuLG51bGwhPWImJihudWxsIT1jP3goXCI5MlwiKTp2b2lkIDAsQXJyYXkuaXNBcnJheShiKSYmKDE+PWIubGVuZ3RoP3ZvaWQgMDp4KFwiOTNcIiksYj1iWzBdKSxjPWIpLG51bGw9PWMmJihjPVwiXCIpKTthLl93cmFwcGVyU3RhdGU9e2luaXRpYWxWYWx1ZTp1YyhjKX19XG5mdW5jdGlvbiBkZShhLGIpe3ZhciBjPXVjKGIudmFsdWUpLGQ9dWMoYi5kZWZhdWx0VmFsdWUpO251bGwhPWMmJihjPVwiXCIrYyxjIT09YS52YWx1ZSYmKGEudmFsdWU9YyksbnVsbD09Yi5kZWZhdWx0VmFsdWUmJmEuZGVmYXVsdFZhbHVlIT09YyYmKGEuZGVmYXVsdFZhbHVlPWMpKTtudWxsIT1kJiYoYS5kZWZhdWx0VmFsdWU9XCJcIitkKX1mdW5jdGlvbiBlZShhKXt2YXIgYj1hLnRleHRDb250ZW50O2I9PT1hLl93cmFwcGVyU3RhdGUuaW5pdGlhbFZhbHVlJiYoYS52YWx1ZT1iKX12YXIgZmU9e2h0bWw6XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCIsbWF0aG1sOlwiaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTFwiLHN2ZzpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJ9O1xuZnVuY3Rpb24gZ2UoYSl7c3dpdGNoKGEpe2Nhc2UgXCJzdmdcIjpyZXR1cm5cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7Y2FzZSBcIm1hdGhcIjpyZXR1cm5cImh0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUxcIjtkZWZhdWx0OnJldHVyblwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwifX1mdW5jdGlvbiBoZShhLGIpe3JldHVybiBudWxsPT1hfHxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIj09PWE/Z2UoYik6XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPT09YSYmXCJmb3JlaWduT2JqZWN0XCI9PT1iP1wiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiOmF9XG52YXIgaWU9dm9pZCAwLGplPWZ1bmN0aW9uKGEpe3JldHVyblwidW5kZWZpbmVkXCIhPT10eXBlb2YgTVNBcHAmJk1TQXBwLmV4ZWNVbnNhZmVMb2NhbEZ1bmN0aW9uP2Z1bmN0aW9uKGIsYyxkLGUpe01TQXBwLmV4ZWNVbnNhZmVMb2NhbEZ1bmN0aW9uKGZ1bmN0aW9uKCl7cmV0dXJuIGEoYixjLGQsZSl9KX06YX0oZnVuY3Rpb24oYSxiKXtpZihhLm5hbWVzcGFjZVVSSSE9PWZlLnN2Z3x8XCJpbm5lckhUTUxcImluIGEpYS5pbm5lckhUTUw9YjtlbHNle2llPWllfHxkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2llLmlubmVySFRNTD1cIjxzdmc+XCIrYitcIjwvc3ZnPlwiO2ZvcihiPWllLmZpcnN0Q2hpbGQ7YS5maXJzdENoaWxkOylhLnJlbW92ZUNoaWxkKGEuZmlyc3RDaGlsZCk7Zm9yKDtiLmZpcnN0Q2hpbGQ7KWEuYXBwZW5kQ2hpbGQoYi5maXJzdENoaWxkKX19KTtcbmZ1bmN0aW9uIGtlKGEsYil7aWYoYil7dmFyIGM9YS5maXJzdENoaWxkO2lmKGMmJmM9PT1hLmxhc3RDaGlsZCYmMz09PWMubm9kZVR5cGUpe2Mubm9kZVZhbHVlPWI7cmV0dXJufX1hLnRleHRDb250ZW50PWJ9XG52YXIgbGU9e2FuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiEwLGJvcmRlckltYWdlT3V0c2V0OiEwLGJvcmRlckltYWdlU2xpY2U6ITAsYm9yZGVySW1hZ2VXaWR0aDohMCxib3hGbGV4OiEwLGJveEZsZXhHcm91cDohMCxib3hPcmRpbmFsR3JvdXA6ITAsY29sdW1uQ291bnQ6ITAsY29sdW1uczohMCxmbGV4OiEwLGZsZXhHcm93OiEwLGZsZXhQb3NpdGl2ZTohMCxmbGV4U2hyaW5rOiEwLGZsZXhOZWdhdGl2ZTohMCxmbGV4T3JkZXI6ITAsZ3JpZEFyZWE6ITAsZ3JpZFJvdzohMCxncmlkUm93RW5kOiEwLGdyaWRSb3dTcGFuOiEwLGdyaWRSb3dTdGFydDohMCxncmlkQ29sdW1uOiEwLGdyaWRDb2x1bW5FbmQ6ITAsZ3JpZENvbHVtblNwYW46ITAsZ3JpZENvbHVtblN0YXJ0OiEwLGZvbnRXZWlnaHQ6ITAsbGluZUNsYW1wOiEwLGxpbmVIZWlnaHQ6ITAsb3BhY2l0eTohMCxvcmRlcjohMCxvcnBoYW5zOiEwLHRhYlNpemU6ITAsd2lkb3dzOiEwLHpJbmRleDohMCx6b29tOiEwLGZpbGxPcGFjaXR5OiEwLFxuZmxvb2RPcGFjaXR5OiEwLHN0b3BPcGFjaXR5OiEwLHN0cm9rZURhc2hhcnJheTohMCxzdHJva2VEYXNob2Zmc2V0OiEwLHN0cm9rZU1pdGVybGltaXQ6ITAsc3Ryb2tlT3BhY2l0eTohMCxzdHJva2VXaWR0aDohMH0sbWU9W1wiV2Via2l0XCIsXCJtc1wiLFwiTW96XCIsXCJPXCJdO09iamVjdC5rZXlzKGxlKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe21lLmZvckVhY2goZnVuY3Rpb24oYil7Yj1iK2EuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrYS5zdWJzdHJpbmcoMSk7bGVbYl09bGVbYV19KX0pO2Z1bmN0aW9uIG5lKGEsYixjKXtyZXR1cm4gbnVsbD09Ynx8XCJib29sZWFuXCI9PT10eXBlb2YgYnx8XCJcIj09PWI/XCJcIjpjfHxcIm51bWJlclwiIT09dHlwZW9mIGJ8fDA9PT1ifHxsZS5oYXNPd25Qcm9wZXJ0eShhKSYmbGVbYV0/KFwiXCIrYikudHJpbSgpOmIrXCJweFwifVxuZnVuY3Rpb24gb2UoYSxiKXthPWEuc3R5bGU7Zm9yKHZhciBjIGluIGIpaWYoYi5oYXNPd25Qcm9wZXJ0eShjKSl7dmFyIGQ9MD09PWMuaW5kZXhPZihcIi0tXCIpLGU9bmUoYyxiW2NdLGQpO1wiZmxvYXRcIj09PWMmJihjPVwiY3NzRmxvYXRcIik7ZD9hLnNldFByb3BlcnR5KGMsZSk6YVtjXT1lfX12YXIgcGU9bih7bWVudWl0ZW06ITB9LHthcmVhOiEwLGJhc2U6ITAsYnI6ITAsY29sOiEwLGVtYmVkOiEwLGhyOiEwLGltZzohMCxpbnB1dDohMCxrZXlnZW46ITAsbGluazohMCxtZXRhOiEwLHBhcmFtOiEwLHNvdXJjZTohMCx0cmFjazohMCx3YnI6ITB9KTtcbmZ1bmN0aW9uIHFlKGEsYil7YiYmKHBlW2FdJiYobnVsbCE9Yi5jaGlsZHJlbnx8bnVsbCE9Yi5kYW5nZXJvdXNseVNldElubmVySFRNTD94KFwiMTM3XCIsYSxcIlwiKTp2b2lkIDApLG51bGwhPWIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwmJihudWxsIT1iLmNoaWxkcmVuP3goXCI2MFwiKTp2b2lkIDAsXCJvYmplY3RcIj09PXR5cGVvZiBiLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MJiZcIl9faHRtbFwiaW4gYi5kYW5nZXJvdXNseVNldElubmVySFRNTD92b2lkIDA6eChcIjYxXCIpKSxudWxsIT1iLnN0eWxlJiZcIm9iamVjdFwiIT09dHlwZW9mIGIuc3R5bGU/eChcIjYyXCIsXCJcIik6dm9pZCAwKX1cbmZ1bmN0aW9uIHJlKGEsYil7aWYoLTE9PT1hLmluZGV4T2YoXCItXCIpKXJldHVyblwic3RyaW5nXCI9PT10eXBlb2YgYi5pcztzd2l0Y2goYSl7Y2FzZSBcImFubm90YXRpb24teG1sXCI6Y2FzZSBcImNvbG9yLXByb2ZpbGVcIjpjYXNlIFwiZm9udC1mYWNlXCI6Y2FzZSBcImZvbnQtZmFjZS1zcmNcIjpjYXNlIFwiZm9udC1mYWNlLXVyaVwiOmNhc2UgXCJmb250LWZhY2UtZm9ybWF0XCI6Y2FzZSBcImZvbnQtZmFjZS1uYW1lXCI6Y2FzZSBcIm1pc3NpbmctZ2x5cGhcIjpyZXR1cm4hMTtkZWZhdWx0OnJldHVybiEwfX1cbmZ1bmN0aW9uIHNlKGEsYil7YT05PT09YS5ub2RlVHlwZXx8MTE9PT1hLm5vZGVUeXBlP2E6YS5vd25lckRvY3VtZW50O3ZhciBjPUlkKGEpO2I9c2FbYl07Zm9yKHZhciBkPTA7ZDxiLmxlbmd0aDtkKyspe3ZhciBlPWJbZF07aWYoIWMuaGFzT3duUHJvcGVydHkoZSl8fCFjW2VdKXtzd2l0Y2goZSl7Y2FzZSBcInNjcm9sbFwiOkVkKFwic2Nyb2xsXCIsYSk7YnJlYWs7Y2FzZSBcImZvY3VzXCI6Y2FzZSBcImJsdXJcIjpFZChcImZvY3VzXCIsYSk7RWQoXCJibHVyXCIsYSk7Yy5ibHVyPSEwO2MuZm9jdXM9ITA7YnJlYWs7Y2FzZSBcImNhbmNlbFwiOmNhc2UgXCJjbG9zZVwiOk9iKGUpJiZFZChlLGEpO2JyZWFrO2Nhc2UgXCJpbnZhbGlkXCI6Y2FzZSBcInN1Ym1pdFwiOmNhc2UgXCJyZXNldFwiOmJyZWFrO2RlZmF1bHQ6LTE9PT1hYi5pbmRleE9mKGUpJiZFKGUsYSl9Y1tlXT0hMH19fWZ1bmN0aW9uIHRlKCl7fXZhciB1ZT1udWxsLHZlPW51bGw7XG5mdW5jdGlvbiB3ZShhLGIpe3N3aXRjaChhKXtjYXNlIFwiYnV0dG9uXCI6Y2FzZSBcImlucHV0XCI6Y2FzZSBcInNlbGVjdFwiOmNhc2UgXCJ0ZXh0YXJlYVwiOnJldHVybiEhYi5hdXRvRm9jdXN9cmV0dXJuITF9ZnVuY3Rpb24geGUoYSxiKXtyZXR1cm5cInRleHRhcmVhXCI9PT1hfHxcIm9wdGlvblwiPT09YXx8XCJub3NjcmlwdFwiPT09YXx8XCJzdHJpbmdcIj09PXR5cGVvZiBiLmNoaWxkcmVufHxcIm51bWJlclwiPT09dHlwZW9mIGIuY2hpbGRyZW58fFwib2JqZWN0XCI9PT10eXBlb2YgYi5kYW5nZXJvdXNseVNldElubmVySFRNTCYmbnVsbCE9PWIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwmJm51bGwhPWIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwuX19odG1sfVxudmFyIHllPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBzZXRUaW1lb3V0P3NldFRpbWVvdXQ6dm9pZCAwLHplPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBjbGVhclRpbWVvdXQ/Y2xlYXJUaW1lb3V0OnZvaWQgMCxBZT1yLnVuc3RhYmxlX3NjaGVkdWxlQ2FsbGJhY2ssQmU9ci51bnN0YWJsZV9jYW5jZWxDYWxsYmFjaztcbmZ1bmN0aW9uIENlKGEsYixjLGQsZSl7YVtHYV09ZTtcImlucHV0XCI9PT1jJiZcInJhZGlvXCI9PT1lLnR5cGUmJm51bGwhPWUubmFtZSYmeGMoYSxlKTtyZShjLGQpO2Q9cmUoYyxlKTtmb3IodmFyIGY9MDtmPGIubGVuZ3RoO2YrPTIpe3ZhciBnPWJbZl0saD1iW2YrMV07XCJzdHlsZVwiPT09Zz9vZShhLGgpOlwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIj09PWc/amUoYSxoKTpcImNoaWxkcmVuXCI9PT1nP2tlKGEsaCk6dGMoYSxnLGgsZCl9c3dpdGNoKGMpe2Nhc2UgXCJpbnB1dFwiOnljKGEsZSk7YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6ZGUoYSxlKTticmVhaztjYXNlIFwic2VsZWN0XCI6Yj1hLl93cmFwcGVyU3RhdGUud2FzTXVsdGlwbGUsYS5fd3JhcHBlclN0YXRlLndhc011bHRpcGxlPSEhZS5tdWx0aXBsZSxjPWUudmFsdWUsbnVsbCE9Yz9hZShhLCEhZS5tdWx0aXBsZSxjLCExKTpiIT09ISFlLm11bHRpcGxlJiYobnVsbCE9ZS5kZWZhdWx0VmFsdWU/YWUoYSwhIWUubXVsdGlwbGUsZS5kZWZhdWx0VmFsdWUsXG4hMCk6YWUoYSwhIWUubXVsdGlwbGUsZS5tdWx0aXBsZT9bXTpcIlwiLCExKSl9fWZ1bmN0aW9uIERlKGEpe2ZvcihhPWEubmV4dFNpYmxpbmc7YSYmMSE9PWEubm9kZVR5cGUmJjMhPT1hLm5vZGVUeXBlOylhPWEubmV4dFNpYmxpbmc7cmV0dXJuIGF9ZnVuY3Rpb24gRWUoYSl7Zm9yKGE9YS5maXJzdENoaWxkO2EmJjEhPT1hLm5vZGVUeXBlJiYzIT09YS5ub2RlVHlwZTspYT1hLm5leHRTaWJsaW5nO3JldHVybiBhfW5ldyBTZXQ7dmFyIEZlPVtdLEdlPS0xO2Z1bmN0aW9uIEYoYSl7MD5HZXx8KGEuY3VycmVudD1GZVtHZV0sRmVbR2VdPW51bGwsR2UtLSl9ZnVuY3Rpb24gRyhhLGIpe0dlKys7RmVbR2VdPWEuY3VycmVudDthLmN1cnJlbnQ9Yn12YXIgSGU9e30sSD17Y3VycmVudDpIZX0sST17Y3VycmVudDohMX0sSWU9SGU7XG5mdW5jdGlvbiBKZShhLGIpe3ZhciBjPWEudHlwZS5jb250ZXh0VHlwZXM7aWYoIWMpcmV0dXJuIEhlO3ZhciBkPWEuc3RhdGVOb2RlO2lmKGQmJmQuX19yZWFjdEludGVybmFsTWVtb2l6ZWRVbm1hc2tlZENoaWxkQ29udGV4dD09PWIpcmV0dXJuIGQuX19yZWFjdEludGVybmFsTWVtb2l6ZWRNYXNrZWRDaGlsZENvbnRleHQ7dmFyIGU9e30sZjtmb3IoZiBpbiBjKWVbZl09YltmXTtkJiYoYT1hLnN0YXRlTm9kZSxhLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkVW5tYXNrZWRDaGlsZENvbnRleHQ9YixhLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkTWFza2VkQ2hpbGRDb250ZXh0PWUpO3JldHVybiBlfWZ1bmN0aW9uIEooYSl7YT1hLmNoaWxkQ29udGV4dFR5cGVzO3JldHVybiBudWxsIT09YSYmdm9pZCAwIT09YX1mdW5jdGlvbiBLZShhKXtGKEksYSk7RihILGEpfWZ1bmN0aW9uIExlKGEpe0YoSSxhKTtGKEgsYSl9XG5mdW5jdGlvbiBNZShhLGIsYyl7SC5jdXJyZW50IT09SGU/eChcIjE2OFwiKTp2b2lkIDA7RyhILGIsYSk7RyhJLGMsYSl9ZnVuY3Rpb24gTmUoYSxiLGMpe3ZhciBkPWEuc3RhdGVOb2RlO2E9Yi5jaGlsZENvbnRleHRUeXBlcztpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgZC5nZXRDaGlsZENvbnRleHQpcmV0dXJuIGM7ZD1kLmdldENoaWxkQ29udGV4dCgpO2Zvcih2YXIgZSBpbiBkKWUgaW4gYT92b2lkIDA6eChcIjEwOFwiLGljKGIpfHxcIlVua25vd25cIixlKTtyZXR1cm4gbih7fSxjLGQpfWZ1bmN0aW9uIE9lKGEpe3ZhciBiPWEuc3RhdGVOb2RlO2I9YiYmYi5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZE1lcmdlZENoaWxkQ29udGV4dHx8SGU7SWU9SC5jdXJyZW50O0coSCxiLGEpO0coSSxJLmN1cnJlbnQsYSk7cmV0dXJuITB9XG5mdW5jdGlvbiBQZShhLGIsYyl7dmFyIGQ9YS5zdGF0ZU5vZGU7ZD92b2lkIDA6eChcIjE2OVwiKTtjPyhiPU5lKGEsYixJZSksZC5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZE1lcmdlZENoaWxkQ29udGV4dD1iLEYoSSxhKSxGKEgsYSksRyhILGIsYSkpOkYoSSxhKTtHKEksYyxhKX12YXIgUWU9bnVsbCxSZT1udWxsO2Z1bmN0aW9uIFNlKGEpe3JldHVybiBmdW5jdGlvbihiKXt0cnl7cmV0dXJuIGEoYil9Y2F0Y2goYyl7fX19XG5mdW5jdGlvbiBUZShhKXtpZihcInVuZGVmaW5lZFwiPT09dHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXylyZXR1cm4hMTt2YXIgYj1fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX187aWYoYi5pc0Rpc2FibGVkfHwhYi5zdXBwb3J0c0ZpYmVyKXJldHVybiEwO3RyeXt2YXIgYz1iLmluamVjdChhKTtRZT1TZShmdW5jdGlvbihhKXtyZXR1cm4gYi5vbkNvbW1pdEZpYmVyUm9vdChjLGEpfSk7UmU9U2UoZnVuY3Rpb24oYSl7cmV0dXJuIGIub25Db21taXRGaWJlclVubW91bnQoYyxhKX0pfWNhdGNoKGQpe31yZXR1cm4hMH1cbmZ1bmN0aW9uIFVlKGEsYixjLGQpe3RoaXMudGFnPWE7dGhpcy5rZXk9Yzt0aGlzLnNpYmxpbmc9dGhpcy5jaGlsZD10aGlzLnJldHVybj10aGlzLnN0YXRlTm9kZT10aGlzLnR5cGU9dGhpcy5lbGVtZW50VHlwZT1udWxsO3RoaXMuaW5kZXg9MDt0aGlzLnJlZj1udWxsO3RoaXMucGVuZGluZ1Byb3BzPWI7dGhpcy5jb250ZXh0RGVwZW5kZW5jaWVzPXRoaXMubWVtb2l6ZWRTdGF0ZT10aGlzLnVwZGF0ZVF1ZXVlPXRoaXMubWVtb2l6ZWRQcm9wcz1udWxsO3RoaXMubW9kZT1kO3RoaXMuZWZmZWN0VGFnPTA7dGhpcy5sYXN0RWZmZWN0PXRoaXMuZmlyc3RFZmZlY3Q9dGhpcy5uZXh0RWZmZWN0PW51bGw7dGhpcy5jaGlsZEV4cGlyYXRpb25UaW1lPXRoaXMuZXhwaXJhdGlvblRpbWU9MDt0aGlzLmFsdGVybmF0ZT1udWxsfWZ1bmN0aW9uIEsoYSxiLGMsZCl7cmV0dXJuIG5ldyBVZShhLGIsYyxkKX1cbmZ1bmN0aW9uIFZlKGEpe2E9YS5wcm90b3R5cGU7cmV0dXJuISghYXx8IWEuaXNSZWFjdENvbXBvbmVudCl9ZnVuY3Rpb24gV2UoYSl7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGEpcmV0dXJuIFZlKGEpPzE6MDtpZih2b2lkIDAhPT1hJiZudWxsIT09YSl7YT1hLiQkdHlwZW9mO2lmKGE9PT1jYylyZXR1cm4gMTE7aWYoYT09PWVjKXJldHVybiAxNH1yZXR1cm4gMn1cbmZ1bmN0aW9uIFhlKGEsYil7dmFyIGM9YS5hbHRlcm5hdGU7bnVsbD09PWM/KGM9SyhhLnRhZyxiLGEua2V5LGEubW9kZSksYy5lbGVtZW50VHlwZT1hLmVsZW1lbnRUeXBlLGMudHlwZT1hLnR5cGUsYy5zdGF0ZU5vZGU9YS5zdGF0ZU5vZGUsYy5hbHRlcm5hdGU9YSxhLmFsdGVybmF0ZT1jKTooYy5wZW5kaW5nUHJvcHM9YixjLmVmZmVjdFRhZz0wLGMubmV4dEVmZmVjdD1udWxsLGMuZmlyc3RFZmZlY3Q9bnVsbCxjLmxhc3RFZmZlY3Q9bnVsbCk7Yy5jaGlsZEV4cGlyYXRpb25UaW1lPWEuY2hpbGRFeHBpcmF0aW9uVGltZTtjLmV4cGlyYXRpb25UaW1lPWEuZXhwaXJhdGlvblRpbWU7Yy5jaGlsZD1hLmNoaWxkO2MubWVtb2l6ZWRQcm9wcz1hLm1lbW9pemVkUHJvcHM7Yy5tZW1vaXplZFN0YXRlPWEubWVtb2l6ZWRTdGF0ZTtjLnVwZGF0ZVF1ZXVlPWEudXBkYXRlUXVldWU7Yy5jb250ZXh0RGVwZW5kZW5jaWVzPWEuY29udGV4dERlcGVuZGVuY2llcztjLnNpYmxpbmc9YS5zaWJsaW5nO1xuYy5pbmRleD1hLmluZGV4O2MucmVmPWEucmVmO3JldHVybiBjfVxuZnVuY3Rpb24gWWUoYSxiLGMsZCxlLGYpe3ZhciBnPTI7ZD1hO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhKVZlKGEpJiYoZz0xKTtlbHNlIGlmKFwic3RyaW5nXCI9PT10eXBlb2YgYSlnPTU7ZWxzZSBhOnN3aXRjaChhKXtjYXNlIFhiOnJldHVybiBaZShjLmNoaWxkcmVuLGUsZixiKTtjYXNlIGJjOnJldHVybiAkZShjLGV8MyxmLGIpO2Nhc2UgWWI6cmV0dXJuICRlKGMsZXwyLGYsYik7Y2FzZSBaYjpyZXR1cm4gYT1LKDEyLGMsYixlfDQpLGEuZWxlbWVudFR5cGU9WmIsYS50eXBlPVpiLGEuZXhwaXJhdGlvblRpbWU9ZixhO2Nhc2UgZGM6cmV0dXJuIGE9SygxMyxjLGIsZSksYS5lbGVtZW50VHlwZT1kYyxhLnR5cGU9ZGMsYS5leHBpcmF0aW9uVGltZT1mLGE7ZGVmYXVsdDppZihcIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hKXN3aXRjaChhLiQkdHlwZW9mKXtjYXNlICRiOmc9MTA7YnJlYWsgYTtjYXNlIGFjOmc9OTticmVhayBhO2Nhc2UgY2M6Zz0xMTticmVhayBhO2Nhc2UgZWM6Zz1cbjE0O2JyZWFrIGE7Y2FzZSBmYzpnPTE2O2Q9bnVsbDticmVhayBhfXgoXCIxMzBcIixudWxsPT1hP2E6dHlwZW9mIGEsXCJcIil9Yj1LKGcsYyxiLGUpO2IuZWxlbWVudFR5cGU9YTtiLnR5cGU9ZDtiLmV4cGlyYXRpb25UaW1lPWY7cmV0dXJuIGJ9ZnVuY3Rpb24gWmUoYSxiLGMsZCl7YT1LKDcsYSxkLGIpO2EuZXhwaXJhdGlvblRpbWU9YztyZXR1cm4gYX1mdW5jdGlvbiAkZShhLGIsYyxkKXthPUsoOCxhLGQsYik7Yj0wPT09KGImMSk/WWI6YmM7YS5lbGVtZW50VHlwZT1iO2EudHlwZT1iO2EuZXhwaXJhdGlvblRpbWU9YztyZXR1cm4gYX1mdW5jdGlvbiBhZihhLGIsYyl7YT1LKDYsYSxudWxsLGIpO2EuZXhwaXJhdGlvblRpbWU9YztyZXR1cm4gYX1cbmZ1bmN0aW9uIGJmKGEsYixjKXtiPUsoNCxudWxsIT09YS5jaGlsZHJlbj9hLmNoaWxkcmVuOltdLGEua2V5LGIpO2IuZXhwaXJhdGlvblRpbWU9YztiLnN0YXRlTm9kZT17Y29udGFpbmVySW5mbzphLmNvbnRhaW5lckluZm8scGVuZGluZ0NoaWxkcmVuOm51bGwsaW1wbGVtZW50YXRpb246YS5pbXBsZW1lbnRhdGlvbn07cmV0dXJuIGJ9ZnVuY3Rpb24gY2YoYSxiKXthLmRpZEVycm9yPSExO3ZhciBjPWEuZWFybGllc3RQZW5kaW5nVGltZTswPT09Yz9hLmVhcmxpZXN0UGVuZGluZ1RpbWU9YS5sYXRlc3RQZW5kaW5nVGltZT1iOmM8Yj9hLmVhcmxpZXN0UGVuZGluZ1RpbWU9YjphLmxhdGVzdFBlbmRpbmdUaW1lPmImJihhLmxhdGVzdFBlbmRpbmdUaW1lPWIpO2RmKGIsYSl9XG5mdW5jdGlvbiBlZihhLGIpe2EuZGlkRXJyb3I9ITE7aWYoMD09PWIpYS5lYXJsaWVzdFBlbmRpbmdUaW1lPTAsYS5sYXRlc3RQZW5kaW5nVGltZT0wLGEuZWFybGllc3RTdXNwZW5kZWRUaW1lPTAsYS5sYXRlc3RTdXNwZW5kZWRUaW1lPTAsYS5sYXRlc3RQaW5nZWRUaW1lPTA7ZWxzZXtiPGEubGF0ZXN0UGluZ2VkVGltZSYmKGEubGF0ZXN0UGluZ2VkVGltZT0wKTt2YXIgYz1hLmxhdGVzdFBlbmRpbmdUaW1lOzAhPT1jJiYoYz5iP2EuZWFybGllc3RQZW5kaW5nVGltZT1hLmxhdGVzdFBlbmRpbmdUaW1lPTA6YS5lYXJsaWVzdFBlbmRpbmdUaW1lPmImJihhLmVhcmxpZXN0UGVuZGluZ1RpbWU9YS5sYXRlc3RQZW5kaW5nVGltZSkpO2M9YS5lYXJsaWVzdFN1c3BlbmRlZFRpbWU7MD09PWM/Y2YoYSxiKTpiPGEubGF0ZXN0U3VzcGVuZGVkVGltZT8oYS5lYXJsaWVzdFN1c3BlbmRlZFRpbWU9MCxhLmxhdGVzdFN1c3BlbmRlZFRpbWU9MCxhLmxhdGVzdFBpbmdlZFRpbWU9MCxjZihhLGIpKTpcbmI+YyYmY2YoYSxiKX1kZigwLGEpfWZ1bmN0aW9uIGZmKGEsYil7YS5kaWRFcnJvcj0hMTthLmxhdGVzdFBpbmdlZFRpbWU+PWImJihhLmxhdGVzdFBpbmdlZFRpbWU9MCk7dmFyIGM9YS5lYXJsaWVzdFBlbmRpbmdUaW1lLGQ9YS5sYXRlc3RQZW5kaW5nVGltZTtjPT09Yj9hLmVhcmxpZXN0UGVuZGluZ1RpbWU9ZD09PWI/YS5sYXRlc3RQZW5kaW5nVGltZT0wOmQ6ZD09PWImJihhLmxhdGVzdFBlbmRpbmdUaW1lPWMpO2M9YS5lYXJsaWVzdFN1c3BlbmRlZFRpbWU7ZD1hLmxhdGVzdFN1c3BlbmRlZFRpbWU7MD09PWM/YS5lYXJsaWVzdFN1c3BlbmRlZFRpbWU9YS5sYXRlc3RTdXNwZW5kZWRUaW1lPWI6YzxiP2EuZWFybGllc3RTdXNwZW5kZWRUaW1lPWI6ZD5iJiYoYS5sYXRlc3RTdXNwZW5kZWRUaW1lPWIpO2RmKGIsYSl9XG5mdW5jdGlvbiBnZihhLGIpe3ZhciBjPWEuZWFybGllc3RQZW5kaW5nVGltZTthPWEuZWFybGllc3RTdXNwZW5kZWRUaW1lO2M+YiYmKGI9Yyk7YT5iJiYoYj1hKTtyZXR1cm4gYn1mdW5jdGlvbiBkZihhLGIpe3ZhciBjPWIuZWFybGllc3RTdXNwZW5kZWRUaW1lLGQ9Yi5sYXRlc3RTdXNwZW5kZWRUaW1lLGU9Yi5lYXJsaWVzdFBlbmRpbmdUaW1lLGY9Yi5sYXRlc3RQaW5nZWRUaW1lO2U9MCE9PWU/ZTpmOzA9PT1lJiYoMD09PWF8fGQ8YSkmJihlPWQpO2E9ZTswIT09YSYmYz5hJiYoYT1jKTtiLm5leHRFeHBpcmF0aW9uVGltZVRvV29ya09uPWU7Yi5leHBpcmF0aW9uVGltZT1hfWZ1bmN0aW9uIEwoYSxiKXtpZihhJiZhLmRlZmF1bHRQcm9wcyl7Yj1uKHt9LGIpO2E9YS5kZWZhdWx0UHJvcHM7Zm9yKHZhciBjIGluIGEpdm9pZCAwPT09YltjXSYmKGJbY109YVtjXSl9cmV0dXJuIGJ9XG5mdW5jdGlvbiBoZihhKXt2YXIgYj1hLl9yZXN1bHQ7c3dpdGNoKGEuX3N0YXR1cyl7Y2FzZSAxOnJldHVybiBiO2Nhc2UgMjp0aHJvdyBiO2Nhc2UgMDp0aHJvdyBiO2RlZmF1bHQ6YS5fc3RhdHVzPTA7Yj1hLl9jdG9yO2I9YigpO2IudGhlbihmdW5jdGlvbihiKXswPT09YS5fc3RhdHVzJiYoYj1iLmRlZmF1bHQsYS5fc3RhdHVzPTEsYS5fcmVzdWx0PWIpfSxmdW5jdGlvbihiKXswPT09YS5fc3RhdHVzJiYoYS5fc3RhdHVzPTIsYS5fcmVzdWx0PWIpfSk7c3dpdGNoKGEuX3N0YXR1cyl7Y2FzZSAxOnJldHVybiBhLl9yZXN1bHQ7Y2FzZSAyOnRocm93IGEuX3Jlc3VsdDt9YS5fcmVzdWx0PWI7dGhyb3cgYjt9fXZhciBqZj0obmV3IGFhLkNvbXBvbmVudCkucmVmcztcbmZ1bmN0aW9uIGtmKGEsYixjLGQpe2I9YS5tZW1vaXplZFN0YXRlO2M9YyhkLGIpO2M9bnVsbD09PWN8fHZvaWQgMD09PWM/YjpuKHt9LGIsYyk7YS5tZW1vaXplZFN0YXRlPWM7ZD1hLnVwZGF0ZVF1ZXVlO251bGwhPT1kJiYwPT09YS5leHBpcmF0aW9uVGltZSYmKGQuYmFzZVN0YXRlPWMpfVxudmFyIHRmPXtpc01vdW50ZWQ6ZnVuY3Rpb24oYSl7cmV0dXJuKGE9YS5fcmVhY3RJbnRlcm5hbEZpYmVyKT8yPT09ZWQoYSk6ITF9LGVucXVldWVTZXRTdGF0ZTpmdW5jdGlvbihhLGIsYyl7YT1hLl9yZWFjdEludGVybmFsRmliZXI7dmFyIGQ9bGYoKTtkPW1mKGQsYSk7dmFyIGU9bmYoZCk7ZS5wYXlsb2FkPWI7dm9pZCAwIT09YyYmbnVsbCE9PWMmJihlLmNhbGxiYWNrPWMpO29mKCk7cGYoYSxlKTtxZihhLGQpfSxlbnF1ZXVlUmVwbGFjZVN0YXRlOmZ1bmN0aW9uKGEsYixjKXthPWEuX3JlYWN0SW50ZXJuYWxGaWJlcjt2YXIgZD1sZigpO2Q9bWYoZCxhKTt2YXIgZT1uZihkKTtlLnRhZz1yZjtlLnBheWxvYWQ9Yjt2b2lkIDAhPT1jJiZudWxsIT09YyYmKGUuY2FsbGJhY2s9Yyk7b2YoKTtwZihhLGUpO3FmKGEsZCl9LGVucXVldWVGb3JjZVVwZGF0ZTpmdW5jdGlvbihhLGIpe2E9YS5fcmVhY3RJbnRlcm5hbEZpYmVyO3ZhciBjPWxmKCk7Yz1tZihjLGEpO3ZhciBkPW5mKGMpO2QudGFnPVxuc2Y7dm9pZCAwIT09YiYmbnVsbCE9PWImJihkLmNhbGxiYWNrPWIpO29mKCk7cGYoYSxkKTtxZihhLGMpfX07ZnVuY3Rpb24gdWYoYSxiLGMsZCxlLGYsZyl7YT1hLnN0YXRlTm9kZTtyZXR1cm5cImZ1bmN0aW9uXCI9PT10eXBlb2YgYS5zaG91bGRDb21wb25lbnRVcGRhdGU/YS5zaG91bGRDb21wb25lbnRVcGRhdGUoZCxmLGcpOmIucHJvdG90eXBlJiZiLnByb3RvdHlwZS5pc1B1cmVSZWFjdENvbXBvbmVudD8hZGQoYyxkKXx8IWRkKGUsZik6ITB9XG5mdW5jdGlvbiB2ZihhLGIsYyl7dmFyIGQ9ITEsZT1IZTt2YXIgZj1iLmNvbnRleHRUeXBlO1wib2JqZWN0XCI9PT10eXBlb2YgZiYmbnVsbCE9PWY/Zj1NKGYpOihlPUooYik/SWU6SC5jdXJyZW50LGQ9Yi5jb250ZXh0VHlwZXMsZj0oZD1udWxsIT09ZCYmdm9pZCAwIT09ZCk/SmUoYSxlKTpIZSk7Yj1uZXcgYihjLGYpO2EubWVtb2l6ZWRTdGF0ZT1udWxsIT09Yi5zdGF0ZSYmdm9pZCAwIT09Yi5zdGF0ZT9iLnN0YXRlOm51bGw7Yi51cGRhdGVyPXRmO2Euc3RhdGVOb2RlPWI7Yi5fcmVhY3RJbnRlcm5hbEZpYmVyPWE7ZCYmKGE9YS5zdGF0ZU5vZGUsYS5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZFVubWFza2VkQ2hpbGRDb250ZXh0PWUsYS5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZE1hc2tlZENoaWxkQ29udGV4dD1mKTtyZXR1cm4gYn1cbmZ1bmN0aW9uIHdmKGEsYixjLGQpe2E9Yi5zdGF0ZTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgYi5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJiZiLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoYyxkKTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgYi5VTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmYi5VTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhjLGQpO2Iuc3RhdGUhPT1hJiZ0Zi5lbnF1ZXVlUmVwbGFjZVN0YXRlKGIsYi5zdGF0ZSxudWxsKX1cbmZ1bmN0aW9uIHhmKGEsYixjLGQpe3ZhciBlPWEuc3RhdGVOb2RlO2UucHJvcHM9YztlLnN0YXRlPWEubWVtb2l6ZWRTdGF0ZTtlLnJlZnM9amY7dmFyIGY9Yi5jb250ZXh0VHlwZTtcIm9iamVjdFwiPT09dHlwZW9mIGYmJm51bGwhPT1mP2UuY29udGV4dD1NKGYpOihmPUooYik/SWU6SC5jdXJyZW50LGUuY29udGV4dD1KZShhLGYpKTtmPWEudXBkYXRlUXVldWU7bnVsbCE9PWYmJih5ZihhLGYsYyxlLGQpLGUuc3RhdGU9YS5tZW1vaXplZFN0YXRlKTtmPWIuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBmJiYoa2YoYSxiLGYsYyksZS5zdGF0ZT1hLm1lbW9pemVkU3RhdGUpO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBiLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc3x8XCJmdW5jdGlvblwiPT09dHlwZW9mIGUuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBlLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQmJlwiZnVuY3Rpb25cIiE9PVxudHlwZW9mIGUuY29tcG9uZW50V2lsbE1vdW50fHwoYj1lLnN0YXRlLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBlLmNvbXBvbmVudFdpbGxNb3VudCYmZS5jb21wb25lbnRXaWxsTW91bnQoKSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZS5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50JiZlLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQoKSxiIT09ZS5zdGF0ZSYmdGYuZW5xdWV1ZVJlcGxhY2VTdGF0ZShlLGUuc3RhdGUsbnVsbCksZj1hLnVwZGF0ZVF1ZXVlLG51bGwhPT1mJiYoeWYoYSxmLGMsZSxkKSxlLnN0YXRlPWEubWVtb2l6ZWRTdGF0ZSkpO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBlLmNvbXBvbmVudERpZE1vdW50JiYoYS5lZmZlY3RUYWd8PTQpfXZhciB6Zj1BcnJheS5pc0FycmF5O1xuZnVuY3Rpb24gQWYoYSxiLGMpe2E9Yy5yZWY7aWYobnVsbCE9PWEmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBhJiZcIm9iamVjdFwiIT09dHlwZW9mIGEpe2lmKGMuX293bmVyKXtjPWMuX293bmVyO3ZhciBkPXZvaWQgMDtjJiYoMSE9PWMudGFnP3goXCIzMDlcIik6dm9pZCAwLGQ9Yy5zdGF0ZU5vZGUpO2Q/dm9pZCAwOngoXCIxNDdcIixhKTt2YXIgZT1cIlwiK2E7aWYobnVsbCE9PWImJm51bGwhPT1iLnJlZiYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGIucmVmJiZiLnJlZi5fc3RyaW5nUmVmPT09ZSlyZXR1cm4gYi5yZWY7Yj1mdW5jdGlvbihhKXt2YXIgYj1kLnJlZnM7Yj09PWpmJiYoYj1kLnJlZnM9e30pO251bGw9PT1hP2RlbGV0ZSBiW2VdOmJbZV09YX07Yi5fc3RyaW5nUmVmPWU7cmV0dXJuIGJ9XCJzdHJpbmdcIiE9PXR5cGVvZiBhP3goXCIyODRcIik6dm9pZCAwO2MuX293bmVyP3ZvaWQgMDp4KFwiMjkwXCIsYSl9cmV0dXJuIGF9XG5mdW5jdGlvbiBCZihhLGIpe1widGV4dGFyZWFcIiE9PWEudHlwZSYmeChcIjMxXCIsXCJbb2JqZWN0IE9iamVjdF1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChiKT9cIm9iamVjdCB3aXRoIGtleXMge1wiK09iamVjdC5rZXlzKGIpLmpvaW4oXCIsIFwiKStcIn1cIjpiLFwiXCIpfVxuZnVuY3Rpb24gQ2YoYSl7ZnVuY3Rpb24gYihiLGMpe2lmKGEpe3ZhciBkPWIubGFzdEVmZmVjdDtudWxsIT09ZD8oZC5uZXh0RWZmZWN0PWMsYi5sYXN0RWZmZWN0PWMpOmIuZmlyc3RFZmZlY3Q9Yi5sYXN0RWZmZWN0PWM7Yy5uZXh0RWZmZWN0PW51bGw7Yy5lZmZlY3RUYWc9OH19ZnVuY3Rpb24gYyhjLGQpe2lmKCFhKXJldHVybiBudWxsO2Zvcig7bnVsbCE9PWQ7KWIoYyxkKSxkPWQuc2libGluZztyZXR1cm4gbnVsbH1mdW5jdGlvbiBkKGEsYil7Zm9yKGE9bmV3IE1hcDtudWxsIT09YjspbnVsbCE9PWIua2V5P2Euc2V0KGIua2V5LGIpOmEuc2V0KGIuaW5kZXgsYiksYj1iLnNpYmxpbmc7cmV0dXJuIGF9ZnVuY3Rpb24gZShhLGIsYyl7YT1YZShhLGIsYyk7YS5pbmRleD0wO2Euc2libGluZz1udWxsO3JldHVybiBhfWZ1bmN0aW9uIGYoYixjLGQpe2IuaW5kZXg9ZDtpZighYSlyZXR1cm4gYztkPWIuYWx0ZXJuYXRlO2lmKG51bGwhPT1kKXJldHVybiBkPWQuaW5kZXgsZDxjPyhiLmVmZmVjdFRhZz1cbjIsYyk6ZDtiLmVmZmVjdFRhZz0yO3JldHVybiBjfWZ1bmN0aW9uIGcoYil7YSYmbnVsbD09PWIuYWx0ZXJuYXRlJiYoYi5lZmZlY3RUYWc9Mik7cmV0dXJuIGJ9ZnVuY3Rpb24gaChhLGIsYyxkKXtpZihudWxsPT09Ynx8NiE9PWIudGFnKXJldHVybiBiPWFmKGMsYS5tb2RlLGQpLGIucmV0dXJuPWEsYjtiPWUoYixjLGQpO2IucmV0dXJuPWE7cmV0dXJuIGJ9ZnVuY3Rpb24gbChhLGIsYyxkKXtpZihudWxsIT09YiYmYi5lbGVtZW50VHlwZT09PWMudHlwZSlyZXR1cm4gZD1lKGIsYy5wcm9wcyxkKSxkLnJlZj1BZihhLGIsYyksZC5yZXR1cm49YSxkO2Q9WWUoYy50eXBlLGMua2V5LGMucHJvcHMsbnVsbCxhLm1vZGUsZCk7ZC5yZWY9QWYoYSxiLGMpO2QucmV0dXJuPWE7cmV0dXJuIGR9ZnVuY3Rpb24gayhhLGIsYyxkKXtpZihudWxsPT09Ynx8NCE9PWIudGFnfHxiLnN0YXRlTm9kZS5jb250YWluZXJJbmZvIT09Yy5jb250YWluZXJJbmZvfHxiLnN0YXRlTm9kZS5pbXBsZW1lbnRhdGlvbiE9PVxuYy5pbXBsZW1lbnRhdGlvbilyZXR1cm4gYj1iZihjLGEubW9kZSxkKSxiLnJldHVybj1hLGI7Yj1lKGIsYy5jaGlsZHJlbnx8W10sZCk7Yi5yZXR1cm49YTtyZXR1cm4gYn1mdW5jdGlvbiBtKGEsYixjLGQsZil7aWYobnVsbD09PWJ8fDchPT1iLnRhZylyZXR1cm4gYj1aZShjLGEubW9kZSxkLGYpLGIucmV0dXJuPWEsYjtiPWUoYixjLGQpO2IucmV0dXJuPWE7cmV0dXJuIGJ9ZnVuY3Rpb24gcChhLGIsYyl7aWYoXCJzdHJpbmdcIj09PXR5cGVvZiBifHxcIm51bWJlclwiPT09dHlwZW9mIGIpcmV0dXJuIGI9YWYoXCJcIitiLGEubW9kZSxjKSxiLnJldHVybj1hLGI7aWYoXCJvYmplY3RcIj09PXR5cGVvZiBiJiZudWxsIT09Yil7c3dpdGNoKGIuJCR0eXBlb2Ype2Nhc2UgVmI6cmV0dXJuIGM9WWUoYi50eXBlLGIua2V5LGIucHJvcHMsbnVsbCxhLm1vZGUsYyksYy5yZWY9QWYoYSxudWxsLGIpLGMucmV0dXJuPWEsYztjYXNlIFdiOnJldHVybiBiPWJmKGIsYS5tb2RlLGMpLGIucmV0dXJuPWEsYn1pZih6ZihiKXx8XG5oYyhiKSlyZXR1cm4gYj1aZShiLGEubW9kZSxjLG51bGwpLGIucmV0dXJuPWEsYjtCZihhLGIpfXJldHVybiBudWxsfWZ1bmN0aW9uIHQoYSxiLGMsZCl7dmFyIGU9bnVsbCE9PWI/Yi5rZXk6bnVsbDtpZihcInN0cmluZ1wiPT09dHlwZW9mIGN8fFwibnVtYmVyXCI9PT10eXBlb2YgYylyZXR1cm4gbnVsbCE9PWU/bnVsbDpoKGEsYixcIlwiK2MsZCk7aWYoXCJvYmplY3RcIj09PXR5cGVvZiBjJiZudWxsIT09Yyl7c3dpdGNoKGMuJCR0eXBlb2Ype2Nhc2UgVmI6cmV0dXJuIGMua2V5PT09ZT9jLnR5cGU9PT1YYj9tKGEsYixjLnByb3BzLmNoaWxkcmVuLGQsZSk6bChhLGIsYyxkKTpudWxsO2Nhc2UgV2I6cmV0dXJuIGMua2V5PT09ZT9rKGEsYixjLGQpOm51bGx9aWYoemYoYyl8fGhjKGMpKXJldHVybiBudWxsIT09ZT9udWxsOm0oYSxiLGMsZCxudWxsKTtCZihhLGMpfXJldHVybiBudWxsfWZ1bmN0aW9uIEEoYSxiLGMsZCxlKXtpZihcInN0cmluZ1wiPT09dHlwZW9mIGR8fFwibnVtYmVyXCI9PT10eXBlb2YgZClyZXR1cm4gYT1cbmEuZ2V0KGMpfHxudWxsLGgoYixhLFwiXCIrZCxlKTtpZihcIm9iamVjdFwiPT09dHlwZW9mIGQmJm51bGwhPT1kKXtzd2l0Y2goZC4kJHR5cGVvZil7Y2FzZSBWYjpyZXR1cm4gYT1hLmdldChudWxsPT09ZC5rZXk/YzpkLmtleSl8fG51bGwsZC50eXBlPT09WGI/bShiLGEsZC5wcm9wcy5jaGlsZHJlbixlLGQua2V5KTpsKGIsYSxkLGUpO2Nhc2UgV2I6cmV0dXJuIGE9YS5nZXQobnVsbD09PWQua2V5P2M6ZC5rZXkpfHxudWxsLGsoYixhLGQsZSl9aWYoemYoZCl8fGhjKGQpKXJldHVybiBhPWEuZ2V0KGMpfHxudWxsLG0oYixhLGQsZSxudWxsKTtCZihiLGQpfXJldHVybiBudWxsfWZ1bmN0aW9uIHYoZSxnLGgsayl7Zm9yKHZhciBsPW51bGwsbT1udWxsLHE9Zyx1PWc9MCxCPW51bGw7bnVsbCE9PXEmJnU8aC5sZW5ndGg7dSsrKXtxLmluZGV4PnU/KEI9cSxxPW51bGwpOkI9cS5zaWJsaW5nO3ZhciB3PXQoZSxxLGhbdV0sayk7aWYobnVsbD09PXcpe251bGw9PT1xJiYocT1CKTticmVha31hJiZcbnEmJm51bGw9PT13LmFsdGVybmF0ZSYmYihlLHEpO2c9Zih3LGcsdSk7bnVsbD09PW0/bD13Om0uc2libGluZz13O209dztxPUJ9aWYodT09PWgubGVuZ3RoKXJldHVybiBjKGUscSksbDtpZihudWxsPT09cSl7Zm9yKDt1PGgubGVuZ3RoO3UrKylpZihxPXAoZSxoW3VdLGspKWc9ZihxLGcsdSksbnVsbD09PW0/bD1xOm0uc2libGluZz1xLG09cTtyZXR1cm4gbH1mb3IocT1kKGUscSk7dTxoLmxlbmd0aDt1KyspaWYoQj1BKHEsZSx1LGhbdV0saykpYSYmbnVsbCE9PUIuYWx0ZXJuYXRlJiZxLmRlbGV0ZShudWxsPT09Qi5rZXk/dTpCLmtleSksZz1mKEIsZyx1KSxudWxsPT09bT9sPUI6bS5zaWJsaW5nPUIsbT1CO2EmJnEuZm9yRWFjaChmdW5jdGlvbihhKXtyZXR1cm4gYihlLGEpfSk7cmV0dXJuIGx9ZnVuY3Rpb24gUihlLGcsaCxrKXt2YXIgbD1oYyhoKTtcImZ1bmN0aW9uXCIhPT10eXBlb2YgbD94KFwiMTUwXCIpOnZvaWQgMDtoPWwuY2FsbChoKTtudWxsPT1oP3goXCIxNTFcIik6dm9pZCAwO1xuZm9yKHZhciBtPWw9bnVsbCxxPWcsdT1nPTAsQj1udWxsLHc9aC5uZXh0KCk7bnVsbCE9PXEmJiF3LmRvbmU7dSsrLHc9aC5uZXh0KCkpe3EuaW5kZXg+dT8oQj1xLHE9bnVsbCk6Qj1xLnNpYmxpbmc7dmFyIHY9dChlLHEsdy52YWx1ZSxrKTtpZihudWxsPT09dil7cXx8KHE9Qik7YnJlYWt9YSYmcSYmbnVsbD09PXYuYWx0ZXJuYXRlJiZiKGUscSk7Zz1mKHYsZyx1KTtudWxsPT09bT9sPXY6bS5zaWJsaW5nPXY7bT12O3E9Qn1pZih3LmRvbmUpcmV0dXJuIGMoZSxxKSxsO2lmKG51bGw9PT1xKXtmb3IoOyF3LmRvbmU7dSsrLHc9aC5uZXh0KCkpdz1wKGUsdy52YWx1ZSxrKSxudWxsIT09dyYmKGc9Zih3LGcsdSksbnVsbD09PW0/bD13Om0uc2libGluZz13LG09dyk7cmV0dXJuIGx9Zm9yKHE9ZChlLHEpOyF3LmRvbmU7dSsrLHc9aC5uZXh0KCkpdz1BKHEsZSx1LHcudmFsdWUsayksbnVsbCE9PXcmJihhJiZudWxsIT09dy5hbHRlcm5hdGUmJnEuZGVsZXRlKG51bGw9PT13LmtleT91Olxudy5rZXkpLGc9Zih3LGcsdSksbnVsbD09PW0/bD13Om0uc2libGluZz13LG09dyk7YSYmcS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3JldHVybiBiKGUsYSl9KTtyZXR1cm4gbH1yZXR1cm4gZnVuY3Rpb24oYSxkLGYsaCl7dmFyIGs9XCJvYmplY3RcIj09PXR5cGVvZiBmJiZudWxsIT09ZiYmZi50eXBlPT09WGImJm51bGw9PT1mLmtleTtrJiYoZj1mLnByb3BzLmNoaWxkcmVuKTt2YXIgbD1cIm9iamVjdFwiPT09dHlwZW9mIGYmJm51bGwhPT1mO2lmKGwpc3dpdGNoKGYuJCR0eXBlb2Ype2Nhc2UgVmI6YTp7bD1mLmtleTtmb3Ioaz1kO251bGwhPT1rOyl7aWYoay5rZXk9PT1sKWlmKDc9PT1rLnRhZz9mLnR5cGU9PT1YYjprLmVsZW1lbnRUeXBlPT09Zi50eXBlKXtjKGEsay5zaWJsaW5nKTtkPWUoayxmLnR5cGU9PT1YYj9mLnByb3BzLmNoaWxkcmVuOmYucHJvcHMsaCk7ZC5yZWY9QWYoYSxrLGYpO2QucmV0dXJuPWE7YT1kO2JyZWFrIGF9ZWxzZXtjKGEsayk7YnJlYWt9ZWxzZSBiKGEsayk7az1cbmsuc2libGluZ31mLnR5cGU9PT1YYj8oZD1aZShmLnByb3BzLmNoaWxkcmVuLGEubW9kZSxoLGYua2V5KSxkLnJldHVybj1hLGE9ZCk6KGg9WWUoZi50eXBlLGYua2V5LGYucHJvcHMsbnVsbCxhLm1vZGUsaCksaC5yZWY9QWYoYSxkLGYpLGgucmV0dXJuPWEsYT1oKX1yZXR1cm4gZyhhKTtjYXNlIFdiOmE6e2ZvcihrPWYua2V5O251bGwhPT1kOyl7aWYoZC5rZXk9PT1rKWlmKDQ9PT1kLnRhZyYmZC5zdGF0ZU5vZGUuY29udGFpbmVySW5mbz09PWYuY29udGFpbmVySW5mbyYmZC5zdGF0ZU5vZGUuaW1wbGVtZW50YXRpb249PT1mLmltcGxlbWVudGF0aW9uKXtjKGEsZC5zaWJsaW5nKTtkPWUoZCxmLmNoaWxkcmVufHxbXSxoKTtkLnJldHVybj1hO2E9ZDticmVhayBhfWVsc2V7YyhhLGQpO2JyZWFrfWVsc2UgYihhLGQpO2Q9ZC5zaWJsaW5nfWQ9YmYoZixhLm1vZGUsaCk7ZC5yZXR1cm49YTthPWR9cmV0dXJuIGcoYSl9aWYoXCJzdHJpbmdcIj09PXR5cGVvZiBmfHxcIm51bWJlclwiPT09dHlwZW9mIGYpcmV0dXJuIGY9XG5cIlwiK2YsbnVsbCE9PWQmJjY9PT1kLnRhZz8oYyhhLGQuc2libGluZyksZD1lKGQsZixoKSxkLnJldHVybj1hLGE9ZCk6KGMoYSxkKSxkPWFmKGYsYS5tb2RlLGgpLGQucmV0dXJuPWEsYT1kKSxnKGEpO2lmKHpmKGYpKXJldHVybiB2KGEsZCxmLGgpO2lmKGhjKGYpKXJldHVybiBSKGEsZCxmLGgpO2wmJkJmKGEsZik7aWYoXCJ1bmRlZmluZWRcIj09PXR5cGVvZiBmJiYhaylzd2l0Y2goYS50YWcpe2Nhc2UgMTpjYXNlIDA6aD1hLnR5cGUseChcIjE1MlwiLGguZGlzcGxheU5hbWV8fGgubmFtZXx8XCJDb21wb25lbnRcIil9cmV0dXJuIGMoYSxkKX19dmFyIERmPUNmKCEwKSxFZj1DZighMSksRmY9e30sTj17Y3VycmVudDpGZn0sR2Y9e2N1cnJlbnQ6RmZ9LEhmPXtjdXJyZW50OkZmfTtmdW5jdGlvbiBJZihhKXthPT09RmY/eChcIjE3NFwiKTp2b2lkIDA7cmV0dXJuIGF9XG5mdW5jdGlvbiBKZihhLGIpe0coSGYsYixhKTtHKEdmLGEsYSk7RyhOLEZmLGEpO3ZhciBjPWIubm9kZVR5cGU7c3dpdGNoKGMpe2Nhc2UgOTpjYXNlIDExOmI9KGI9Yi5kb2N1bWVudEVsZW1lbnQpP2IubmFtZXNwYWNlVVJJOmhlKG51bGwsXCJcIik7YnJlYWs7ZGVmYXVsdDpjPTg9PT1jP2IucGFyZW50Tm9kZTpiLGI9Yy5uYW1lc3BhY2VVUkl8fG51bGwsYz1jLnRhZ05hbWUsYj1oZShiLGMpfUYoTixhKTtHKE4sYixhKX1mdW5jdGlvbiBLZihhKXtGKE4sYSk7RihHZixhKTtGKEhmLGEpfWZ1bmN0aW9uIExmKGEpe0lmKEhmLmN1cnJlbnQpO3ZhciBiPUlmKE4uY3VycmVudCk7dmFyIGM9aGUoYixhLnR5cGUpO2IhPT1jJiYoRyhHZixhLGEpLEcoTixjLGEpKX1mdW5jdGlvbiBNZihhKXtHZi5jdXJyZW50PT09YSYmKEYoTixhKSxGKEdmLGEpKX1cbnZhciBOZj0wLE9mPTIsUGY9NCxRZj04LFJmPTE2LFNmPTMyLFRmPTY0LFVmPTEyOCxWZj1UYi5SZWFjdEN1cnJlbnREaXNwYXRjaGVyLFdmPTAsWGY9bnVsbCxPPW51bGwsUD1udWxsLFlmPW51bGwsUT1udWxsLFpmPW51bGwsJGY9MCxhZz1udWxsLGJnPTAsY2c9ITEsZGc9bnVsbCxlZz0wO2Z1bmN0aW9uIGZnKCl7eChcIjMyMVwiKX1mdW5jdGlvbiBnZyhhLGIpe2lmKG51bGw9PT1iKXJldHVybiExO2Zvcih2YXIgYz0wO2M8Yi5sZW5ndGgmJmM8YS5sZW5ndGg7YysrKWlmKCFiZChhW2NdLGJbY10pKXJldHVybiExO3JldHVybiEwfVxuZnVuY3Rpb24gaGcoYSxiLGMsZCxlLGYpe1dmPWY7WGY9YjtQPW51bGwhPT1hP2EubWVtb2l6ZWRTdGF0ZTpudWxsO1ZmLmN1cnJlbnQ9bnVsbD09PVA/aWc6amc7Yj1jKGQsZSk7aWYoY2cpe2RvIGNnPSExLGVnKz0xLFA9bnVsbCE9PWE/YS5tZW1vaXplZFN0YXRlOm51bGwsWmY9WWYsYWc9UT1PPW51bGwsVmYuY3VycmVudD1qZyxiPWMoZCxlKTt3aGlsZShjZyk7ZGc9bnVsbDtlZz0wfVZmLmN1cnJlbnQ9a2c7YT1YZjthLm1lbW9pemVkU3RhdGU9WWY7YS5leHBpcmF0aW9uVGltZT0kZjthLnVwZGF0ZVF1ZXVlPWFnO2EuZWZmZWN0VGFnfD1iZzthPW51bGwhPT1PJiZudWxsIT09Ty5uZXh0O1dmPTA7WmY9UT1ZZj1QPU89WGY9bnVsbDskZj0wO2FnPW51bGw7Ymc9MDthP3goXCIzMDBcIik6dm9pZCAwO3JldHVybiBifWZ1bmN0aW9uIGxnKCl7VmYuY3VycmVudD1rZztXZj0wO1pmPVE9WWY9UD1PPVhmPW51bGw7JGY9MDthZz1udWxsO2JnPTA7Y2c9ITE7ZGc9bnVsbDtlZz0wfVxuZnVuY3Rpb24gbWcoKXt2YXIgYT17bWVtb2l6ZWRTdGF0ZTpudWxsLGJhc2VTdGF0ZTpudWxsLHF1ZXVlOm51bGwsYmFzZVVwZGF0ZTpudWxsLG5leHQ6bnVsbH07bnVsbD09PVE/WWY9UT1hOlE9US5uZXh0PWE7cmV0dXJuIFF9ZnVuY3Rpb24gbmcoKXtpZihudWxsIT09WmYpUT1aZixaZj1RLm5leHQsTz1QLFA9bnVsbCE9PU8/Ty5uZXh0Om51bGw7ZWxzZXtudWxsPT09UD94KFwiMzEwXCIpOnZvaWQgMDtPPVA7dmFyIGE9e21lbW9pemVkU3RhdGU6Ty5tZW1vaXplZFN0YXRlLGJhc2VTdGF0ZTpPLmJhc2VTdGF0ZSxxdWV1ZTpPLnF1ZXVlLGJhc2VVcGRhdGU6Ty5iYXNlVXBkYXRlLG5leHQ6bnVsbH07UT1udWxsPT09UT9ZZj1hOlEubmV4dD1hO1A9Ty5uZXh0fXJldHVybiBRfWZ1bmN0aW9uIG9nKGEsYil7cmV0dXJuXCJmdW5jdGlvblwiPT09dHlwZW9mIGI/YihhKTpifVxuZnVuY3Rpb24gcGcoYSl7dmFyIGI9bmcoKSxjPWIucXVldWU7bnVsbD09PWM/eChcIjMxMVwiKTp2b2lkIDA7Yy5sYXN0UmVuZGVyZWRSZWR1Y2VyPWE7aWYoMDxlZyl7dmFyIGQ9Yy5kaXNwYXRjaDtpZihudWxsIT09ZGcpe3ZhciBlPWRnLmdldChjKTtpZih2b2lkIDAhPT1lKXtkZy5kZWxldGUoYyk7dmFyIGY9Yi5tZW1vaXplZFN0YXRlO2RvIGY9YShmLGUuYWN0aW9uKSxlPWUubmV4dDt3aGlsZShudWxsIT09ZSk7YmQoZixiLm1lbW9pemVkU3RhdGUpfHwocWc9ITApO2IubWVtb2l6ZWRTdGF0ZT1mO2IuYmFzZVVwZGF0ZT09PWMubGFzdCYmKGIuYmFzZVN0YXRlPWYpO2MubGFzdFJlbmRlcmVkU3RhdGU9ZjtyZXR1cm5bZixkXX19cmV0dXJuW2IubWVtb2l6ZWRTdGF0ZSxkXX1kPWMubGFzdDt2YXIgZz1iLmJhc2VVcGRhdGU7Zj1iLmJhc2VTdGF0ZTtudWxsIT09Zz8obnVsbCE9PWQmJihkLm5leHQ9bnVsbCksZD1nLm5leHQpOmQ9bnVsbCE9PWQ/ZC5uZXh0Om51bGw7aWYobnVsbCE9PVxuZCl7dmFyIGg9ZT1udWxsLGw9ZCxrPSExO2Rve3ZhciBtPWwuZXhwaXJhdGlvblRpbWU7bTxXZj8oa3x8KGs9ITAsaD1nLGU9ZiksbT4kZiYmKCRmPW0pKTpmPWwuZWFnZXJSZWR1Y2VyPT09YT9sLmVhZ2VyU3RhdGU6YShmLGwuYWN0aW9uKTtnPWw7bD1sLm5leHR9d2hpbGUobnVsbCE9PWwmJmwhPT1kKTtrfHwoaD1nLGU9Zik7YmQoZixiLm1lbW9pemVkU3RhdGUpfHwocWc9ITApO2IubWVtb2l6ZWRTdGF0ZT1mO2IuYmFzZVVwZGF0ZT1oO2IuYmFzZVN0YXRlPWU7Yy5sYXN0UmVuZGVyZWRTdGF0ZT1mfXJldHVybltiLm1lbW9pemVkU3RhdGUsYy5kaXNwYXRjaF19XG5mdW5jdGlvbiByZyhhLGIsYyxkKXthPXt0YWc6YSxjcmVhdGU6YixkZXN0cm95OmMsZGVwczpkLG5leHQ6bnVsbH07bnVsbD09PWFnPyhhZz17bGFzdEVmZmVjdDpudWxsfSxhZy5sYXN0RWZmZWN0PWEubmV4dD1hKTooYj1hZy5sYXN0RWZmZWN0LG51bGw9PT1iP2FnLmxhc3RFZmZlY3Q9YS5uZXh0PWE6KGM9Yi5uZXh0LGIubmV4dD1hLGEubmV4dD1jLGFnLmxhc3RFZmZlY3Q9YSkpO3JldHVybiBhfWZ1bmN0aW9uIHNnKGEsYixjLGQpe3ZhciBlPW1nKCk7Ymd8PWE7ZS5tZW1vaXplZFN0YXRlPXJnKGIsYyx2b2lkIDAsdm9pZCAwPT09ZD9udWxsOmQpfVxuZnVuY3Rpb24gdGcoYSxiLGMsZCl7dmFyIGU9bmcoKTtkPXZvaWQgMD09PWQ/bnVsbDpkO3ZhciBmPXZvaWQgMDtpZihudWxsIT09Tyl7dmFyIGc9Ty5tZW1vaXplZFN0YXRlO2Y9Zy5kZXN0cm95O2lmKG51bGwhPT1kJiZnZyhkLGcuZGVwcykpe3JnKE5mLGMsZixkKTtyZXR1cm59fWJnfD1hO2UubWVtb2l6ZWRTdGF0ZT1yZyhiLGMsZixkKX1mdW5jdGlvbiB1ZyhhLGIpe2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBiKXJldHVybiBhPWEoKSxiKGEpLGZ1bmN0aW9uKCl7YihudWxsKX07aWYobnVsbCE9PWImJnZvaWQgMCE9PWIpcmV0dXJuIGE9YSgpLGIuY3VycmVudD1hLGZ1bmN0aW9uKCl7Yi5jdXJyZW50PW51bGx9fWZ1bmN0aW9uIHZnKCl7fVxuZnVuY3Rpb24gd2coYSxiLGMpezI1PmVnP3ZvaWQgMDp4KFwiMzAxXCIpO3ZhciBkPWEuYWx0ZXJuYXRlO2lmKGE9PT1YZnx8bnVsbCE9PWQmJmQ9PT1YZilpZihjZz0hMCxhPXtleHBpcmF0aW9uVGltZTpXZixhY3Rpb246YyxlYWdlclJlZHVjZXI6bnVsbCxlYWdlclN0YXRlOm51bGwsbmV4dDpudWxsfSxudWxsPT09ZGcmJihkZz1uZXcgTWFwKSxjPWRnLmdldChiKSx2b2lkIDA9PT1jKWRnLnNldChiLGEpO2Vsc2V7Zm9yKGI9YztudWxsIT09Yi5uZXh0OyliPWIubmV4dDtiLm5leHQ9YX1lbHNle29mKCk7dmFyIGU9bGYoKTtlPW1mKGUsYSk7dmFyIGY9e2V4cGlyYXRpb25UaW1lOmUsYWN0aW9uOmMsZWFnZXJSZWR1Y2VyOm51bGwsZWFnZXJTdGF0ZTpudWxsLG5leHQ6bnVsbH0sZz1iLmxhc3Q7aWYobnVsbD09PWcpZi5uZXh0PWY7ZWxzZXt2YXIgaD1nLm5leHQ7bnVsbCE9PWgmJihmLm5leHQ9aCk7Zy5uZXh0PWZ9Yi5sYXN0PWY7aWYoMD09PWEuZXhwaXJhdGlvblRpbWUmJihudWxsPT09XG5kfHwwPT09ZC5leHBpcmF0aW9uVGltZSkmJihkPWIubGFzdFJlbmRlcmVkUmVkdWNlcixudWxsIT09ZCkpdHJ5e3ZhciBsPWIubGFzdFJlbmRlcmVkU3RhdGUsaz1kKGwsYyk7Zi5lYWdlclJlZHVjZXI9ZDtmLmVhZ2VyU3RhdGU9aztpZihiZChrLGwpKXJldHVybn1jYXRjaChtKXt9ZmluYWxseXt9cWYoYSxlKX19XG52YXIga2c9e3JlYWRDb250ZXh0Ok0sdXNlQ2FsbGJhY2s6ZmcsdXNlQ29udGV4dDpmZyx1c2VFZmZlY3Q6ZmcsdXNlSW1wZXJhdGl2ZUhhbmRsZTpmZyx1c2VMYXlvdXRFZmZlY3Q6ZmcsdXNlTWVtbzpmZyx1c2VSZWR1Y2VyOmZnLHVzZVJlZjpmZyx1c2VTdGF0ZTpmZyx1c2VEZWJ1Z1ZhbHVlOmZnfSxpZz17cmVhZENvbnRleHQ6TSx1c2VDYWxsYmFjazpmdW5jdGlvbihhLGIpe21nKCkubWVtb2l6ZWRTdGF0ZT1bYSx2b2lkIDA9PT1iP251bGw6Yl07cmV0dXJuIGF9LHVzZUNvbnRleHQ6TSx1c2VFZmZlY3Q6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gc2coNTE2LFVmfFRmLGEsYil9LHVzZUltcGVyYXRpdmVIYW5kbGU6ZnVuY3Rpb24oYSxiLGMpe2M9bnVsbCE9PWMmJnZvaWQgMCE9PWM/Yy5jb25jYXQoW2FdKTpudWxsO3JldHVybiBzZyg0LFBmfFNmLHVnLmJpbmQobnVsbCxiLGEpLGMpfSx1c2VMYXlvdXRFZmZlY3Q6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gc2coNCxQZnxTZixhLGIpfSxcbnVzZU1lbW86ZnVuY3Rpb24oYSxiKXt2YXIgYz1tZygpO2I9dm9pZCAwPT09Yj9udWxsOmI7YT1hKCk7Yy5tZW1vaXplZFN0YXRlPVthLGJdO3JldHVybiBhfSx1c2VSZWR1Y2VyOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1tZygpO2I9dm9pZCAwIT09Yz9jKGIpOmI7ZC5tZW1vaXplZFN0YXRlPWQuYmFzZVN0YXRlPWI7YT1kLnF1ZXVlPXtsYXN0Om51bGwsZGlzcGF0Y2g6bnVsbCxsYXN0UmVuZGVyZWRSZWR1Y2VyOmEsbGFzdFJlbmRlcmVkU3RhdGU6Yn07YT1hLmRpc3BhdGNoPXdnLmJpbmQobnVsbCxYZixhKTtyZXR1cm5bZC5tZW1vaXplZFN0YXRlLGFdfSx1c2VSZWY6ZnVuY3Rpb24oYSl7dmFyIGI9bWcoKTthPXtjdXJyZW50OmF9O3JldHVybiBiLm1lbW9pemVkU3RhdGU9YX0sdXNlU3RhdGU6ZnVuY3Rpb24oYSl7dmFyIGI9bWcoKTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgYSYmKGE9YSgpKTtiLm1lbW9pemVkU3RhdGU9Yi5iYXNlU3RhdGU9YTthPWIucXVldWU9e2xhc3Q6bnVsbCxkaXNwYXRjaDpudWxsLFxubGFzdFJlbmRlcmVkUmVkdWNlcjpvZyxsYXN0UmVuZGVyZWRTdGF0ZTphfTthPWEuZGlzcGF0Y2g9d2cuYmluZChudWxsLFhmLGEpO3JldHVybltiLm1lbW9pemVkU3RhdGUsYV19LHVzZURlYnVnVmFsdWU6dmd9LGpnPXtyZWFkQ29udGV4dDpNLHVzZUNhbGxiYWNrOmZ1bmN0aW9uKGEsYil7dmFyIGM9bmcoKTtiPXZvaWQgMD09PWI/bnVsbDpiO3ZhciBkPWMubWVtb2l6ZWRTdGF0ZTtpZihudWxsIT09ZCYmbnVsbCE9PWImJmdnKGIsZFsxXSkpcmV0dXJuIGRbMF07Yy5tZW1vaXplZFN0YXRlPVthLGJdO3JldHVybiBhfSx1c2VDb250ZXh0Ok0sdXNlRWZmZWN0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRnKDUxNixVZnxUZixhLGIpfSx1c2VJbXBlcmF0aXZlSGFuZGxlOmZ1bmN0aW9uKGEsYixjKXtjPW51bGwhPT1jJiZ2b2lkIDAhPT1jP2MuY29uY2F0KFthXSk6bnVsbDtyZXR1cm4gdGcoNCxQZnxTZix1Zy5iaW5kKG51bGwsYixhKSxjKX0sdXNlTGF5b3V0RWZmZWN0OmZ1bmN0aW9uKGEsXG5iKXtyZXR1cm4gdGcoNCxQZnxTZixhLGIpfSx1c2VNZW1vOmZ1bmN0aW9uKGEsYil7dmFyIGM9bmcoKTtiPXZvaWQgMD09PWI/bnVsbDpiO3ZhciBkPWMubWVtb2l6ZWRTdGF0ZTtpZihudWxsIT09ZCYmbnVsbCE9PWImJmdnKGIsZFsxXSkpcmV0dXJuIGRbMF07YT1hKCk7Yy5tZW1vaXplZFN0YXRlPVthLGJdO3JldHVybiBhfSx1c2VSZWR1Y2VyOnBnLHVzZVJlZjpmdW5jdGlvbigpe3JldHVybiBuZygpLm1lbW9pemVkU3RhdGV9LHVzZVN0YXRlOmZ1bmN0aW9uKGEpe3JldHVybiBwZyhvZyxhKX0sdXNlRGVidWdWYWx1ZTp2Z30seGc9bnVsbCx5Zz1udWxsLHpnPSExO1xuZnVuY3Rpb24gQWcoYSxiKXt2YXIgYz1LKDUsbnVsbCxudWxsLDApO2MuZWxlbWVudFR5cGU9XCJERUxFVEVEXCI7Yy50eXBlPVwiREVMRVRFRFwiO2Muc3RhdGVOb2RlPWI7Yy5yZXR1cm49YTtjLmVmZmVjdFRhZz04O251bGwhPT1hLmxhc3RFZmZlY3Q/KGEubGFzdEVmZmVjdC5uZXh0RWZmZWN0PWMsYS5sYXN0RWZmZWN0PWMpOmEuZmlyc3RFZmZlY3Q9YS5sYXN0RWZmZWN0PWN9ZnVuY3Rpb24gQmcoYSxiKXtzd2l0Y2goYS50YWcpe2Nhc2UgNTp2YXIgYz1hLnR5cGU7Yj0xIT09Yi5ub2RlVHlwZXx8Yy50b0xvd2VyQ2FzZSgpIT09Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpP251bGw6YjtyZXR1cm4gbnVsbCE9PWI/KGEuc3RhdGVOb2RlPWIsITApOiExO2Nhc2UgNjpyZXR1cm4gYj1cIlwiPT09YS5wZW5kaW5nUHJvcHN8fDMhPT1iLm5vZGVUeXBlP251bGw6YixudWxsIT09Yj8oYS5zdGF0ZU5vZGU9YiwhMCk6ITE7Y2FzZSAxMzpyZXR1cm4hMTtkZWZhdWx0OnJldHVybiExfX1cbmZ1bmN0aW9uIENnKGEpe2lmKHpnKXt2YXIgYj15ZztpZihiKXt2YXIgYz1iO2lmKCFCZyhhLGIpKXtiPURlKGMpO2lmKCFifHwhQmcoYSxiKSl7YS5lZmZlY3RUYWd8PTI7emc9ITE7eGc9YTtyZXR1cm59QWcoeGcsYyl9eGc9YTt5Zz1FZShiKX1lbHNlIGEuZWZmZWN0VGFnfD0yLHpnPSExLHhnPWF9fWZ1bmN0aW9uIERnKGEpe2ZvcihhPWEucmV0dXJuO251bGwhPT1hJiY1IT09YS50YWcmJjMhPT1hLnRhZyYmMTghPT1hLnRhZzspYT1hLnJldHVybjt4Zz1hfWZ1bmN0aW9uIEVnKGEpe2lmKGEhPT14ZylyZXR1cm4hMTtpZighemcpcmV0dXJuIERnKGEpLHpnPSEwLCExO3ZhciBiPWEudHlwZTtpZig1IT09YS50YWd8fFwiaGVhZFwiIT09YiYmXCJib2R5XCIhPT1iJiYheGUoYixhLm1lbW9pemVkUHJvcHMpKWZvcihiPXlnO2I7KUFnKGEsYiksYj1EZShiKTtEZyhhKTt5Zz14Zz9EZShhLnN0YXRlTm9kZSk6bnVsbDtyZXR1cm4hMH1mdW5jdGlvbiBGZygpe3lnPXhnPW51bGw7emc9ITF9XG52YXIgR2c9VGIuUmVhY3RDdXJyZW50T3duZXIscWc9ITE7ZnVuY3Rpb24gUyhhLGIsYyxkKXtiLmNoaWxkPW51bGw9PT1hP0VmKGIsbnVsbCxjLGQpOkRmKGIsYS5jaGlsZCxjLGQpfWZ1bmN0aW9uIEhnKGEsYixjLGQsZSl7Yz1jLnJlbmRlcjt2YXIgZj1iLnJlZjtJZyhiLGUpO2Q9aGcoYSxiLGMsZCxmLGUpO2lmKG51bGwhPT1hJiYhcWcpcmV0dXJuIGIudXBkYXRlUXVldWU9YS51cGRhdGVRdWV1ZSxiLmVmZmVjdFRhZyY9LTUxNyxhLmV4cGlyYXRpb25UaW1lPD1lJiYoYS5leHBpcmF0aW9uVGltZT0wKSxKZyhhLGIsZSk7Yi5lZmZlY3RUYWd8PTE7UyhhLGIsZCxlKTtyZXR1cm4gYi5jaGlsZH1cbmZ1bmN0aW9uIEtnKGEsYixjLGQsZSxmKXtpZihudWxsPT09YSl7dmFyIGc9Yy50eXBlO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnJiYhVmUoZykmJnZvaWQgMD09PWcuZGVmYXVsdFByb3BzJiZudWxsPT09Yy5jb21wYXJlJiZ2b2lkIDA9PT1jLmRlZmF1bHRQcm9wcylyZXR1cm4gYi50YWc9MTUsYi50eXBlPWcsTGcoYSxiLGcsZCxlLGYpO2E9WWUoYy50eXBlLG51bGwsZCxudWxsLGIubW9kZSxmKTthLnJlZj1iLnJlZjthLnJldHVybj1iO3JldHVybiBiLmNoaWxkPWF9Zz1hLmNoaWxkO2lmKGU8ZiYmKGU9Zy5tZW1vaXplZFByb3BzLGM9Yy5jb21wYXJlLGM9bnVsbCE9PWM/YzpkZCxjKGUsZCkmJmEucmVmPT09Yi5yZWYpKXJldHVybiBKZyhhLGIsZik7Yi5lZmZlY3RUYWd8PTE7YT1YZShnLGQsZik7YS5yZWY9Yi5yZWY7YS5yZXR1cm49YjtyZXR1cm4gYi5jaGlsZD1hfVxuZnVuY3Rpb24gTGcoYSxiLGMsZCxlLGYpe3JldHVybiBudWxsIT09YSYmZGQoYS5tZW1vaXplZFByb3BzLGQpJiZhLnJlZj09PWIucmVmJiYocWc9ITEsZTxmKT9KZyhhLGIsZik6TWcoYSxiLGMsZCxmKX1mdW5jdGlvbiBOZyhhLGIpe3ZhciBjPWIucmVmO2lmKG51bGw9PT1hJiZudWxsIT09Y3x8bnVsbCE9PWEmJmEucmVmIT09YyliLmVmZmVjdFRhZ3w9MTI4fWZ1bmN0aW9uIE1nKGEsYixjLGQsZSl7dmFyIGY9SihjKT9JZTpILmN1cnJlbnQ7Zj1KZShiLGYpO0lnKGIsZSk7Yz1oZyhhLGIsYyxkLGYsZSk7aWYobnVsbCE9PWEmJiFxZylyZXR1cm4gYi51cGRhdGVRdWV1ZT1hLnVwZGF0ZVF1ZXVlLGIuZWZmZWN0VGFnJj0tNTE3LGEuZXhwaXJhdGlvblRpbWU8PWUmJihhLmV4cGlyYXRpb25UaW1lPTApLEpnKGEsYixlKTtiLmVmZmVjdFRhZ3w9MTtTKGEsYixjLGUpO3JldHVybiBiLmNoaWxkfVxuZnVuY3Rpb24gT2coYSxiLGMsZCxlKXtpZihKKGMpKXt2YXIgZj0hMDtPZShiKX1lbHNlIGY9ITE7SWcoYixlKTtpZihudWxsPT09Yi5zdGF0ZU5vZGUpbnVsbCE9PWEmJihhLmFsdGVybmF0ZT1udWxsLGIuYWx0ZXJuYXRlPW51bGwsYi5lZmZlY3RUYWd8PTIpLHZmKGIsYyxkLGUpLHhmKGIsYyxkLGUpLGQ9ITA7ZWxzZSBpZihudWxsPT09YSl7dmFyIGc9Yi5zdGF0ZU5vZGUsaD1iLm1lbW9pemVkUHJvcHM7Zy5wcm9wcz1oO3ZhciBsPWcuY29udGV4dCxrPWMuY29udGV4dFR5cGU7XCJvYmplY3RcIj09PXR5cGVvZiBrJiZudWxsIT09az9rPU0oayk6KGs9SihjKT9JZTpILmN1cnJlbnQsaz1KZShiLGspKTt2YXIgbT1jLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyxwPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBtfHxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZTtwfHxcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5VTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmXG5cImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzfHwoaCE9PWR8fGwhPT1rKSYmd2YoYixnLGQsayk7UGc9ITE7dmFyIHQ9Yi5tZW1vaXplZFN0YXRlO2w9Zy5zdGF0ZT10O3ZhciBBPWIudXBkYXRlUXVldWU7bnVsbCE9PUEmJih5ZihiLEEsZCxnLGUpLGw9Yi5tZW1vaXplZFN0YXRlKTtoIT09ZHx8dCE9PWx8fEkuY3VycmVudHx8UGc/KFwiZnVuY3Rpb25cIj09PXR5cGVvZiBtJiYoa2YoYixjLG0sZCksbD1iLm1lbW9pemVkU3RhdGUpLChoPVBnfHx1ZihiLGMsaCxkLHQsbCxrKSk/KHB8fFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmNvbXBvbmVudFdpbGxNb3VudHx8KFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmNvbXBvbmVudFdpbGxNb3VudCYmZy5jb21wb25lbnRXaWxsTW91bnQoKSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50JiZcbmcuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpKSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5jb21wb25lbnREaWRNb3VudCYmKGIuZWZmZWN0VGFnfD00KSk6KFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmNvbXBvbmVudERpZE1vdW50JiYoYi5lZmZlY3RUYWd8PTQpLGIubWVtb2l6ZWRQcm9wcz1kLGIubWVtb2l6ZWRTdGF0ZT1sKSxnLnByb3BzPWQsZy5zdGF0ZT1sLGcuY29udGV4dD1rLGQ9aCk6KFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmNvbXBvbmVudERpZE1vdW50JiYoYi5lZmZlY3RUYWd8PTQpLGQ9ITEpfWVsc2UgZz1iLnN0YXRlTm9kZSxoPWIubWVtb2l6ZWRQcm9wcyxnLnByb3BzPWIudHlwZT09PWIuZWxlbWVudFR5cGU/aDpMKGIudHlwZSxoKSxsPWcuY29udGV4dCxrPWMuY29udGV4dFR5cGUsXCJvYmplY3RcIj09PXR5cGVvZiBrJiZudWxsIT09az9rPU0oayk6KGs9SihjKT9JZTpILmN1cnJlbnQsaz1KZShiLGspKSxtPWMuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzLChwPVwiZnVuY3Rpb25cIj09PVxudHlwZW9mIG18fFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKXx8XCJmdW5jdGlvblwiIT09dHlwZW9mIGcuVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHN8fChoIT09ZHx8bCE9PWspJiZ3ZihiLGcsZCxrKSxQZz0hMSxsPWIubWVtb2l6ZWRTdGF0ZSx0PWcuc3RhdGU9bCxBPWIudXBkYXRlUXVldWUsbnVsbCE9PUEmJih5ZihiLEEsZCxnLGUpLHQ9Yi5tZW1vaXplZFN0YXRlKSxoIT09ZHx8bCE9PXR8fEkuY3VycmVudHx8UGc/KFwiZnVuY3Rpb25cIj09PXR5cGVvZiBtJiYoa2YoYixjLG0sZCksdD1iLm1lbW9pemVkU3RhdGUpLChtPVBnfHx1ZihiLGMsaCxkLGwsdCxrKSk/KHB8fFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLlVOU0FGRV9jb21wb25lbnRXaWxsVXBkYXRlJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5jb21wb25lbnRXaWxsVXBkYXRlfHwoXCJmdW5jdGlvblwiPT09XG50eXBlb2YgZy5jb21wb25lbnRXaWxsVXBkYXRlJiZnLmNvbXBvbmVudFdpbGxVcGRhdGUoZCx0LGspLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLlVOU0FGRV9jb21wb25lbnRXaWxsVXBkYXRlJiZnLlVOU0FGRV9jb21wb25lbnRXaWxsVXBkYXRlKGQsdCxrKSksXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuY29tcG9uZW50RGlkVXBkYXRlJiYoYi5lZmZlY3RUYWd8PTQpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlJiYoYi5lZmZlY3RUYWd8PTI1NikpOihcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5jb21wb25lbnREaWRVcGRhdGV8fGg9PT1hLm1lbW9pemVkUHJvcHMmJmw9PT1hLm1lbW9pemVkU3RhdGV8fChiLmVmZmVjdFRhZ3w9NCksXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fGg9PT1hLm1lbW9pemVkUHJvcHMmJmw9PT1hLm1lbW9pemVkU3RhdGV8fChiLmVmZmVjdFRhZ3w9MjU2KSxiLm1lbW9pemVkUHJvcHM9ZCxiLm1lbW9pemVkU3RhdGU9XG50KSxnLnByb3BzPWQsZy5zdGF0ZT10LGcuY29udGV4dD1rLGQ9bSk6KFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmNvbXBvbmVudERpZFVwZGF0ZXx8aD09PWEubWVtb2l6ZWRQcm9wcyYmbD09PWEubWVtb2l6ZWRTdGF0ZXx8KGIuZWZmZWN0VGFnfD00KSxcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZXx8aD09PWEubWVtb2l6ZWRQcm9wcyYmbD09PWEubWVtb2l6ZWRTdGF0ZXx8KGIuZWZmZWN0VGFnfD0yNTYpLGQ9ITEpO3JldHVybiBRZyhhLGIsYyxkLGYsZSl9XG5mdW5jdGlvbiBRZyhhLGIsYyxkLGUsZil7TmcoYSxiKTt2YXIgZz0wIT09KGIuZWZmZWN0VGFnJjY0KTtpZighZCYmIWcpcmV0dXJuIGUmJlBlKGIsYywhMSksSmcoYSxiLGYpO2Q9Yi5zdGF0ZU5vZGU7R2cuY3VycmVudD1iO3ZhciBoPWcmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBjLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcj9udWxsOmQucmVuZGVyKCk7Yi5lZmZlY3RUYWd8PTE7bnVsbCE9PWEmJmc/KGIuY2hpbGQ9RGYoYixhLmNoaWxkLG51bGwsZiksYi5jaGlsZD1EZihiLG51bGwsaCxmKSk6UyhhLGIsaCxmKTtiLm1lbW9pemVkU3RhdGU9ZC5zdGF0ZTtlJiZQZShiLGMsITApO3JldHVybiBiLmNoaWxkfWZ1bmN0aW9uIFJnKGEpe3ZhciBiPWEuc3RhdGVOb2RlO2IucGVuZGluZ0NvbnRleHQ/TWUoYSxiLnBlbmRpbmdDb250ZXh0LGIucGVuZGluZ0NvbnRleHQhPT1iLmNvbnRleHQpOmIuY29udGV4dCYmTWUoYSxiLmNvbnRleHQsITEpO0pmKGEsYi5jb250YWluZXJJbmZvKX1cbmZ1bmN0aW9uIFNnKGEsYixjKXt2YXIgZD1iLm1vZGUsZT1iLnBlbmRpbmdQcm9wcyxmPWIubWVtb2l6ZWRTdGF0ZTtpZigwPT09KGIuZWZmZWN0VGFnJjY0KSl7Zj1udWxsO3ZhciBnPSExfWVsc2UgZj17dGltZWRPdXRBdDpudWxsIT09Zj9mLnRpbWVkT3V0QXQ6MH0sZz0hMCxiLmVmZmVjdFRhZyY9LTY1O2lmKG51bGw9PT1hKWlmKGcpe3ZhciBoPWUuZmFsbGJhY2s7YT1aZShudWxsLGQsMCxudWxsKTswPT09KGIubW9kZSYxKSYmKGEuY2hpbGQ9bnVsbCE9PWIubWVtb2l6ZWRTdGF0ZT9iLmNoaWxkLmNoaWxkOmIuY2hpbGQpO2Q9WmUoaCxkLGMsbnVsbCk7YS5zaWJsaW5nPWQ7Yz1hO2MucmV0dXJuPWQucmV0dXJuPWJ9ZWxzZSBjPWQ9RWYoYixudWxsLGUuY2hpbGRyZW4sYyk7ZWxzZSBudWxsIT09YS5tZW1vaXplZFN0YXRlPyhkPWEuY2hpbGQsaD1kLnNpYmxpbmcsZz8oYz1lLmZhbGxiYWNrLGU9WGUoZCxkLnBlbmRpbmdQcm9wcywwKSwwPT09KGIubW9kZSYxKSYmKGc9bnVsbCE9PVxuYi5tZW1vaXplZFN0YXRlP2IuY2hpbGQuY2hpbGQ6Yi5jaGlsZCxnIT09ZC5jaGlsZCYmKGUuY2hpbGQ9ZykpLGQ9ZS5zaWJsaW5nPVhlKGgsYyxoLmV4cGlyYXRpb25UaW1lKSxjPWUsZS5jaGlsZEV4cGlyYXRpb25UaW1lPTAsYy5yZXR1cm49ZC5yZXR1cm49Yik6Yz1kPURmKGIsZC5jaGlsZCxlLmNoaWxkcmVuLGMpKTooaD1hLmNoaWxkLGc/KGc9ZS5mYWxsYmFjayxlPVplKG51bGwsZCwwLG51bGwpLGUuY2hpbGQ9aCwwPT09KGIubW9kZSYxKSYmKGUuY2hpbGQ9bnVsbCE9PWIubWVtb2l6ZWRTdGF0ZT9iLmNoaWxkLmNoaWxkOmIuY2hpbGQpLGQ9ZS5zaWJsaW5nPVplKGcsZCxjLG51bGwpLGQuZWZmZWN0VGFnfD0yLGM9ZSxlLmNoaWxkRXhwaXJhdGlvblRpbWU9MCxjLnJldHVybj1kLnJldHVybj1iKTpkPWM9RGYoYixoLGUuY2hpbGRyZW4sYykpLGIuc3RhdGVOb2RlPWEuc3RhdGVOb2RlO2IubWVtb2l6ZWRTdGF0ZT1mO2IuY2hpbGQ9YztyZXR1cm4gZH1cbmZ1bmN0aW9uIEpnKGEsYixjKXtudWxsIT09YSYmKGIuY29udGV4dERlcGVuZGVuY2llcz1hLmNvbnRleHREZXBlbmRlbmNpZXMpO2lmKGIuY2hpbGRFeHBpcmF0aW9uVGltZTxjKXJldHVybiBudWxsO251bGwhPT1hJiZiLmNoaWxkIT09YS5jaGlsZD94KFwiMTUzXCIpOnZvaWQgMDtpZihudWxsIT09Yi5jaGlsZCl7YT1iLmNoaWxkO2M9WGUoYSxhLnBlbmRpbmdQcm9wcyxhLmV4cGlyYXRpb25UaW1lKTtiLmNoaWxkPWM7Zm9yKGMucmV0dXJuPWI7bnVsbCE9PWEuc2libGluZzspYT1hLnNpYmxpbmcsYz1jLnNpYmxpbmc9WGUoYSxhLnBlbmRpbmdQcm9wcyxhLmV4cGlyYXRpb25UaW1lKSxjLnJldHVybj1iO2Muc2libGluZz1udWxsfXJldHVybiBiLmNoaWxkfVxuZnVuY3Rpb24gVGcoYSxiLGMpe3ZhciBkPWIuZXhwaXJhdGlvblRpbWU7aWYobnVsbCE9PWEpaWYoYS5tZW1vaXplZFByb3BzIT09Yi5wZW5kaW5nUHJvcHN8fEkuY3VycmVudClxZz0hMDtlbHNle2lmKGQ8Yyl7cWc9ITE7c3dpdGNoKGIudGFnKXtjYXNlIDM6UmcoYik7RmcoKTticmVhaztjYXNlIDU6TGYoYik7YnJlYWs7Y2FzZSAxOkooYi50eXBlKSYmT2UoYik7YnJlYWs7Y2FzZSA0OkpmKGIsYi5zdGF0ZU5vZGUuY29udGFpbmVySW5mbyk7YnJlYWs7Y2FzZSAxMDpVZyhiLGIubWVtb2l6ZWRQcm9wcy52YWx1ZSk7YnJlYWs7Y2FzZSAxMzppZihudWxsIT09Yi5tZW1vaXplZFN0YXRlKXtkPWIuY2hpbGQuY2hpbGRFeHBpcmF0aW9uVGltZTtpZigwIT09ZCYmZD49YylyZXR1cm4gU2coYSxiLGMpO2I9SmcoYSxiLGMpO3JldHVybiBudWxsIT09Yj9iLnNpYmxpbmc6bnVsbH19cmV0dXJuIEpnKGEsYixjKX19ZWxzZSBxZz0hMTtiLmV4cGlyYXRpb25UaW1lPTA7c3dpdGNoKGIudGFnKXtjYXNlIDI6ZD1cbmIuZWxlbWVudFR5cGU7bnVsbCE9PWEmJihhLmFsdGVybmF0ZT1udWxsLGIuYWx0ZXJuYXRlPW51bGwsYi5lZmZlY3RUYWd8PTIpO2E9Yi5wZW5kaW5nUHJvcHM7dmFyIGU9SmUoYixILmN1cnJlbnQpO0lnKGIsYyk7ZT1oZyhudWxsLGIsZCxhLGUsYyk7Yi5lZmZlY3RUYWd8PTE7aWYoXCJvYmplY3RcIj09PXR5cGVvZiBlJiZudWxsIT09ZSYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGUucmVuZGVyJiZ2b2lkIDA9PT1lLiQkdHlwZW9mKXtiLnRhZz0xO2xnKCk7aWYoSihkKSl7dmFyIGY9ITA7T2UoYil9ZWxzZSBmPSExO2IubWVtb2l6ZWRTdGF0ZT1udWxsIT09ZS5zdGF0ZSYmdm9pZCAwIT09ZS5zdGF0ZT9lLnN0YXRlOm51bGw7dmFyIGc9ZC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM7XCJmdW5jdGlvblwiPT09dHlwZW9mIGcmJmtmKGIsZCxnLGEpO2UudXBkYXRlcj10ZjtiLnN0YXRlTm9kZT1lO2UuX3JlYWN0SW50ZXJuYWxGaWJlcj1iO3hmKGIsZCxhLGMpO2I9UWcobnVsbCxiLGQsITAsZixcbmMpfWVsc2UgYi50YWc9MCxTKG51bGwsYixlLGMpLGI9Yi5jaGlsZDtyZXR1cm4gYjtjYXNlIDE2OmU9Yi5lbGVtZW50VHlwZTtudWxsIT09YSYmKGEuYWx0ZXJuYXRlPW51bGwsYi5hbHRlcm5hdGU9bnVsbCxiLmVmZmVjdFRhZ3w9Mik7Zj1iLnBlbmRpbmdQcm9wczthPWhmKGUpO2IudHlwZT1hO2U9Yi50YWc9V2UoYSk7Zj1MKGEsZik7Zz12b2lkIDA7c3dpdGNoKGUpe2Nhc2UgMDpnPU1nKG51bGwsYixhLGYsYyk7YnJlYWs7Y2FzZSAxOmc9T2cobnVsbCxiLGEsZixjKTticmVhaztjYXNlIDExOmc9SGcobnVsbCxiLGEsZixjKTticmVhaztjYXNlIDE0Omc9S2cobnVsbCxiLGEsTChhLnR5cGUsZiksZCxjKTticmVhaztkZWZhdWx0OngoXCIzMDZcIixhLFwiXCIpfXJldHVybiBnO2Nhc2UgMDpyZXR1cm4gZD1iLnR5cGUsZT1iLnBlbmRpbmdQcm9wcyxlPWIuZWxlbWVudFR5cGU9PT1kP2U6TChkLGUpLE1nKGEsYixkLGUsYyk7Y2FzZSAxOnJldHVybiBkPWIudHlwZSxlPWIucGVuZGluZ1Byb3BzLFxuZT1iLmVsZW1lbnRUeXBlPT09ZD9lOkwoZCxlKSxPZyhhLGIsZCxlLGMpO2Nhc2UgMzpSZyhiKTtkPWIudXBkYXRlUXVldWU7bnVsbD09PWQ/eChcIjI4MlwiKTp2b2lkIDA7ZT1iLm1lbW9pemVkU3RhdGU7ZT1udWxsIT09ZT9lLmVsZW1lbnQ6bnVsbDt5ZihiLGQsYi5wZW5kaW5nUHJvcHMsbnVsbCxjKTtkPWIubWVtb2l6ZWRTdGF0ZS5lbGVtZW50O2lmKGQ9PT1lKUZnKCksYj1KZyhhLGIsYyk7ZWxzZXtlPWIuc3RhdGVOb2RlO2lmKGU9KG51bGw9PT1hfHxudWxsPT09YS5jaGlsZCkmJmUuaHlkcmF0ZSl5Zz1FZShiLnN0YXRlTm9kZS5jb250YWluZXJJbmZvKSx4Zz1iLGU9emc9ITA7ZT8oYi5lZmZlY3RUYWd8PTIsYi5jaGlsZD1FZihiLG51bGwsZCxjKSk6KFMoYSxiLGQsYyksRmcoKSk7Yj1iLmNoaWxkfXJldHVybiBiO2Nhc2UgNTpyZXR1cm4gTGYoYiksbnVsbD09PWEmJkNnKGIpLGQ9Yi50eXBlLGU9Yi5wZW5kaW5nUHJvcHMsZj1udWxsIT09YT9hLm1lbW9pemVkUHJvcHM6bnVsbCxcbmc9ZS5jaGlsZHJlbix4ZShkLGUpP2c9bnVsbDpudWxsIT09ZiYmeGUoZCxmKSYmKGIuZWZmZWN0VGFnfD0xNiksTmcoYSxiKSwxIT09YyYmYi5tb2RlJjEmJmUuaGlkZGVuPyhiLmV4cGlyYXRpb25UaW1lPWIuY2hpbGRFeHBpcmF0aW9uVGltZT0xLGI9bnVsbCk6KFMoYSxiLGcsYyksYj1iLmNoaWxkKSxiO2Nhc2UgNjpyZXR1cm4gbnVsbD09PWEmJkNnKGIpLG51bGw7Y2FzZSAxMzpyZXR1cm4gU2coYSxiLGMpO2Nhc2UgNDpyZXR1cm4gSmYoYixiLnN0YXRlTm9kZS5jb250YWluZXJJbmZvKSxkPWIucGVuZGluZ1Byb3BzLG51bGw9PT1hP2IuY2hpbGQ9RGYoYixudWxsLGQsYyk6UyhhLGIsZCxjKSxiLmNoaWxkO2Nhc2UgMTE6cmV0dXJuIGQ9Yi50eXBlLGU9Yi5wZW5kaW5nUHJvcHMsZT1iLmVsZW1lbnRUeXBlPT09ZD9lOkwoZCxlKSxIZyhhLGIsZCxlLGMpO2Nhc2UgNzpyZXR1cm4gUyhhLGIsYi5wZW5kaW5nUHJvcHMsYyksYi5jaGlsZDtjYXNlIDg6cmV0dXJuIFMoYSxiLGIucGVuZGluZ1Byb3BzLmNoaWxkcmVuLFxuYyksYi5jaGlsZDtjYXNlIDEyOnJldHVybiBTKGEsYixiLnBlbmRpbmdQcm9wcy5jaGlsZHJlbixjKSxiLmNoaWxkO2Nhc2UgMTA6YTp7ZD1iLnR5cGUuX2NvbnRleHQ7ZT1iLnBlbmRpbmdQcm9wcztnPWIubWVtb2l6ZWRQcm9wcztmPWUudmFsdWU7VWcoYixmKTtpZihudWxsIT09Zyl7dmFyIGg9Zy52YWx1ZTtmPWJkKGgsZik/MDooXCJmdW5jdGlvblwiPT09dHlwZW9mIGQuX2NhbGN1bGF0ZUNoYW5nZWRCaXRzP2QuX2NhbGN1bGF0ZUNoYW5nZWRCaXRzKGgsZik6MTA3Mzc0MTgyMyl8MDtpZigwPT09Zil7aWYoZy5jaGlsZHJlbj09PWUuY2hpbGRyZW4mJiFJLmN1cnJlbnQpe2I9SmcoYSxiLGMpO2JyZWFrIGF9fWVsc2UgZm9yKGg9Yi5jaGlsZCxudWxsIT09aCYmKGgucmV0dXJuPWIpO251bGwhPT1oOyl7dmFyIGw9aC5jb250ZXh0RGVwZW5kZW5jaWVzO2lmKG51bGwhPT1sKXtnPWguY2hpbGQ7Zm9yKHZhciBrPWwuZmlyc3Q7bnVsbCE9PWs7KXtpZihrLmNvbnRleHQ9PT1kJiYwIT09XG4oay5vYnNlcnZlZEJpdHMmZikpezE9PT1oLnRhZyYmKGs9bmYoYyksay50YWc9c2YscGYoaCxrKSk7aC5leHBpcmF0aW9uVGltZTxjJiYoaC5leHBpcmF0aW9uVGltZT1jKTtrPWguYWx0ZXJuYXRlO251bGwhPT1rJiZrLmV4cGlyYXRpb25UaW1lPGMmJihrLmV4cGlyYXRpb25UaW1lPWMpO2s9Yztmb3IodmFyIG09aC5yZXR1cm47bnVsbCE9PW07KXt2YXIgcD1tLmFsdGVybmF0ZTtpZihtLmNoaWxkRXhwaXJhdGlvblRpbWU8ayltLmNoaWxkRXhwaXJhdGlvblRpbWU9ayxudWxsIT09cCYmcC5jaGlsZEV4cGlyYXRpb25UaW1lPGsmJihwLmNoaWxkRXhwaXJhdGlvblRpbWU9ayk7ZWxzZSBpZihudWxsIT09cCYmcC5jaGlsZEV4cGlyYXRpb25UaW1lPGspcC5jaGlsZEV4cGlyYXRpb25UaW1lPWs7ZWxzZSBicmVhazttPW0ucmV0dXJufWwuZXhwaXJhdGlvblRpbWU8YyYmKGwuZXhwaXJhdGlvblRpbWU9Yyk7YnJlYWt9az1rLm5leHR9fWVsc2UgZz0xMD09PWgudGFnP2gudHlwZT09PWIudHlwZT9cbm51bGw6aC5jaGlsZDpoLmNoaWxkO2lmKG51bGwhPT1nKWcucmV0dXJuPWg7ZWxzZSBmb3IoZz1oO251bGwhPT1nOyl7aWYoZz09PWIpe2c9bnVsbDticmVha31oPWcuc2libGluZztpZihudWxsIT09aCl7aC5yZXR1cm49Zy5yZXR1cm47Zz1oO2JyZWFrfWc9Zy5yZXR1cm59aD1nfX1TKGEsYixlLmNoaWxkcmVuLGMpO2I9Yi5jaGlsZH1yZXR1cm4gYjtjYXNlIDk6cmV0dXJuIGU9Yi50eXBlLGY9Yi5wZW5kaW5nUHJvcHMsZD1mLmNoaWxkcmVuLElnKGIsYyksZT1NKGUsZi51bnN0YWJsZV9vYnNlcnZlZEJpdHMpLGQ9ZChlKSxiLmVmZmVjdFRhZ3w9MSxTKGEsYixkLGMpLGIuY2hpbGQ7Y2FzZSAxNDpyZXR1cm4gZT1iLnR5cGUsZj1MKGUsYi5wZW5kaW5nUHJvcHMpLGY9TChlLnR5cGUsZiksS2coYSxiLGUsZixkLGMpO2Nhc2UgMTU6cmV0dXJuIExnKGEsYixiLnR5cGUsYi5wZW5kaW5nUHJvcHMsZCxjKTtjYXNlIDE3OnJldHVybiBkPWIudHlwZSxlPWIucGVuZGluZ1Byb3BzLGU9Yi5lbGVtZW50VHlwZT09PVxuZD9lOkwoZCxlKSxudWxsIT09YSYmKGEuYWx0ZXJuYXRlPW51bGwsYi5hbHRlcm5hdGU9bnVsbCxiLmVmZmVjdFRhZ3w9MiksYi50YWc9MSxKKGQpPyhhPSEwLE9lKGIpKTphPSExLElnKGIsYyksdmYoYixkLGUsYykseGYoYixkLGUsYyksUWcobnVsbCxiLGQsITAsYSxjKX14KFwiMTU2XCIpfXZhciBWZz17Y3VycmVudDpudWxsfSxXZz1udWxsLFhnPW51bGwsWWc9bnVsbDtmdW5jdGlvbiBVZyhhLGIpe3ZhciBjPWEudHlwZS5fY29udGV4dDtHKFZnLGMuX2N1cnJlbnRWYWx1ZSxhKTtjLl9jdXJyZW50VmFsdWU9Yn1mdW5jdGlvbiBaZyhhKXt2YXIgYj1WZy5jdXJyZW50O0YoVmcsYSk7YS50eXBlLl9jb250ZXh0Ll9jdXJyZW50VmFsdWU9Yn1mdW5jdGlvbiBJZyhhLGIpe1dnPWE7WWc9WGc9bnVsbDt2YXIgYz1hLmNvbnRleHREZXBlbmRlbmNpZXM7bnVsbCE9PWMmJmMuZXhwaXJhdGlvblRpbWU+PWImJihxZz0hMCk7YS5jb250ZXh0RGVwZW5kZW5jaWVzPW51bGx9XG5mdW5jdGlvbiBNKGEsYil7aWYoWWchPT1hJiYhMSE9PWImJjAhPT1iKXtpZihcIm51bWJlclwiIT09dHlwZW9mIGJ8fDEwNzM3NDE4MjM9PT1iKVlnPWEsYj0xMDczNzQxODIzO2I9e2NvbnRleHQ6YSxvYnNlcnZlZEJpdHM6YixuZXh0Om51bGx9O251bGw9PT1YZz8obnVsbD09PVdnP3goXCIzMDhcIik6dm9pZCAwLFhnPWIsV2cuY29udGV4dERlcGVuZGVuY2llcz17Zmlyc3Q6YixleHBpcmF0aW9uVGltZTowfSk6WGc9WGcubmV4dD1ifXJldHVybiBhLl9jdXJyZW50VmFsdWV9dmFyICRnPTAscmY9MSxzZj0yLGFoPTMsUGc9ITE7ZnVuY3Rpb24gYmgoYSl7cmV0dXJue2Jhc2VTdGF0ZTphLGZpcnN0VXBkYXRlOm51bGwsbGFzdFVwZGF0ZTpudWxsLGZpcnN0Q2FwdHVyZWRVcGRhdGU6bnVsbCxsYXN0Q2FwdHVyZWRVcGRhdGU6bnVsbCxmaXJzdEVmZmVjdDpudWxsLGxhc3RFZmZlY3Q6bnVsbCxmaXJzdENhcHR1cmVkRWZmZWN0Om51bGwsbGFzdENhcHR1cmVkRWZmZWN0Om51bGx9fVxuZnVuY3Rpb24gY2goYSl7cmV0dXJue2Jhc2VTdGF0ZTphLmJhc2VTdGF0ZSxmaXJzdFVwZGF0ZTphLmZpcnN0VXBkYXRlLGxhc3RVcGRhdGU6YS5sYXN0VXBkYXRlLGZpcnN0Q2FwdHVyZWRVcGRhdGU6bnVsbCxsYXN0Q2FwdHVyZWRVcGRhdGU6bnVsbCxmaXJzdEVmZmVjdDpudWxsLGxhc3RFZmZlY3Q6bnVsbCxmaXJzdENhcHR1cmVkRWZmZWN0Om51bGwsbGFzdENhcHR1cmVkRWZmZWN0Om51bGx9fWZ1bmN0aW9uIG5mKGEpe3JldHVybntleHBpcmF0aW9uVGltZTphLHRhZzokZyxwYXlsb2FkOm51bGwsY2FsbGJhY2s6bnVsbCxuZXh0Om51bGwsbmV4dEVmZmVjdDpudWxsfX1mdW5jdGlvbiBkaChhLGIpe251bGw9PT1hLmxhc3RVcGRhdGU/YS5maXJzdFVwZGF0ZT1hLmxhc3RVcGRhdGU9YjooYS5sYXN0VXBkYXRlLm5leHQ9YixhLmxhc3RVcGRhdGU9Yil9XG5mdW5jdGlvbiBwZihhLGIpe3ZhciBjPWEuYWx0ZXJuYXRlO2lmKG51bGw9PT1jKXt2YXIgZD1hLnVwZGF0ZVF1ZXVlO3ZhciBlPW51bGw7bnVsbD09PWQmJihkPWEudXBkYXRlUXVldWU9YmgoYS5tZW1vaXplZFN0YXRlKSl9ZWxzZSBkPWEudXBkYXRlUXVldWUsZT1jLnVwZGF0ZVF1ZXVlLG51bGw9PT1kP251bGw9PT1lPyhkPWEudXBkYXRlUXVldWU9YmgoYS5tZW1vaXplZFN0YXRlKSxlPWMudXBkYXRlUXVldWU9YmgoYy5tZW1vaXplZFN0YXRlKSk6ZD1hLnVwZGF0ZVF1ZXVlPWNoKGUpOm51bGw9PT1lJiYoZT1jLnVwZGF0ZVF1ZXVlPWNoKGQpKTtudWxsPT09ZXx8ZD09PWU/ZGgoZCxiKTpudWxsPT09ZC5sYXN0VXBkYXRlfHxudWxsPT09ZS5sYXN0VXBkYXRlPyhkaChkLGIpLGRoKGUsYikpOihkaChkLGIpLGUubGFzdFVwZGF0ZT1iKX1cbmZ1bmN0aW9uIGVoKGEsYil7dmFyIGM9YS51cGRhdGVRdWV1ZTtjPW51bGw9PT1jP2EudXBkYXRlUXVldWU9YmgoYS5tZW1vaXplZFN0YXRlKTpmaChhLGMpO251bGw9PT1jLmxhc3RDYXB0dXJlZFVwZGF0ZT9jLmZpcnN0Q2FwdHVyZWRVcGRhdGU9Yy5sYXN0Q2FwdHVyZWRVcGRhdGU9YjooYy5sYXN0Q2FwdHVyZWRVcGRhdGUubmV4dD1iLGMubGFzdENhcHR1cmVkVXBkYXRlPWIpfWZ1bmN0aW9uIGZoKGEsYil7dmFyIGM9YS5hbHRlcm5hdGU7bnVsbCE9PWMmJmI9PT1jLnVwZGF0ZVF1ZXVlJiYoYj1hLnVwZGF0ZVF1ZXVlPWNoKGIpKTtyZXR1cm4gYn1cbmZ1bmN0aW9uIGdoKGEsYixjLGQsZSxmKXtzd2l0Y2goYy50YWcpe2Nhc2UgcmY6cmV0dXJuIGE9Yy5wYXlsb2FkLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhP2EuY2FsbChmLGQsZSk6YTtjYXNlIGFoOmEuZWZmZWN0VGFnPWEuZWZmZWN0VGFnJi0yMDQ5fDY0O2Nhc2UgJGc6YT1jLnBheWxvYWQ7ZT1cImZ1bmN0aW9uXCI9PT10eXBlb2YgYT9hLmNhbGwoZixkLGUpOmE7aWYobnVsbD09PWV8fHZvaWQgMD09PWUpYnJlYWs7cmV0dXJuIG4oe30sZCxlKTtjYXNlIHNmOlBnPSEwfXJldHVybiBkfVxuZnVuY3Rpb24geWYoYSxiLGMsZCxlKXtQZz0hMTtiPWZoKGEsYik7Zm9yKHZhciBmPWIuYmFzZVN0YXRlLGc9bnVsbCxoPTAsbD1iLmZpcnN0VXBkYXRlLGs9ZjtudWxsIT09bDspe3ZhciBtPWwuZXhwaXJhdGlvblRpbWU7bTxlPyhudWxsPT09ZyYmKGc9bCxmPWspLGg8bSYmKGg9bSkpOihrPWdoKGEsYixsLGssYyxkKSxudWxsIT09bC5jYWxsYmFjayYmKGEuZWZmZWN0VGFnfD0zMixsLm5leHRFZmZlY3Q9bnVsbCxudWxsPT09Yi5sYXN0RWZmZWN0P2IuZmlyc3RFZmZlY3Q9Yi5sYXN0RWZmZWN0PWw6KGIubGFzdEVmZmVjdC5uZXh0RWZmZWN0PWwsYi5sYXN0RWZmZWN0PWwpKSk7bD1sLm5leHR9bT1udWxsO2ZvcihsPWIuZmlyc3RDYXB0dXJlZFVwZGF0ZTtudWxsIT09bDspe3ZhciBwPWwuZXhwaXJhdGlvblRpbWU7cDxlPyhudWxsPT09bSYmKG09bCxudWxsPT09ZyYmKGY9aykpLGg8cCYmKGg9cCkpOihrPWdoKGEsYixsLGssYyxkKSxudWxsIT09bC5jYWxsYmFjayYmKGEuZWZmZWN0VGFnfD1cbjMyLGwubmV4dEVmZmVjdD1udWxsLG51bGw9PT1iLmxhc3RDYXB0dXJlZEVmZmVjdD9iLmZpcnN0Q2FwdHVyZWRFZmZlY3Q9Yi5sYXN0Q2FwdHVyZWRFZmZlY3Q9bDooYi5sYXN0Q2FwdHVyZWRFZmZlY3QubmV4dEVmZmVjdD1sLGIubGFzdENhcHR1cmVkRWZmZWN0PWwpKSk7bD1sLm5leHR9bnVsbD09PWcmJihiLmxhc3RVcGRhdGU9bnVsbCk7bnVsbD09PW0/Yi5sYXN0Q2FwdHVyZWRVcGRhdGU9bnVsbDphLmVmZmVjdFRhZ3w9MzI7bnVsbD09PWcmJm51bGw9PT1tJiYoZj1rKTtiLmJhc2VTdGF0ZT1mO2IuZmlyc3RVcGRhdGU9ZztiLmZpcnN0Q2FwdHVyZWRVcGRhdGU9bTthLmV4cGlyYXRpb25UaW1lPWg7YS5tZW1vaXplZFN0YXRlPWt9XG5mdW5jdGlvbiBoaChhLGIsYyl7bnVsbCE9PWIuZmlyc3RDYXB0dXJlZFVwZGF0ZSYmKG51bGwhPT1iLmxhc3RVcGRhdGUmJihiLmxhc3RVcGRhdGUubmV4dD1iLmZpcnN0Q2FwdHVyZWRVcGRhdGUsYi5sYXN0VXBkYXRlPWIubGFzdENhcHR1cmVkVXBkYXRlKSxiLmZpcnN0Q2FwdHVyZWRVcGRhdGU9Yi5sYXN0Q2FwdHVyZWRVcGRhdGU9bnVsbCk7aWgoYi5maXJzdEVmZmVjdCxjKTtiLmZpcnN0RWZmZWN0PWIubGFzdEVmZmVjdD1udWxsO2loKGIuZmlyc3RDYXB0dXJlZEVmZmVjdCxjKTtiLmZpcnN0Q2FwdHVyZWRFZmZlY3Q9Yi5sYXN0Q2FwdHVyZWRFZmZlY3Q9bnVsbH1mdW5jdGlvbiBpaChhLGIpe2Zvcig7bnVsbCE9PWE7KXt2YXIgYz1hLmNhbGxiYWNrO2lmKG51bGwhPT1jKXthLmNhbGxiYWNrPW51bGw7dmFyIGQ9YjtcImZ1bmN0aW9uXCIhPT10eXBlb2YgYz94KFwiMTkxXCIsYyk6dm9pZCAwO2MuY2FsbChkKX1hPWEubmV4dEVmZmVjdH19XG5mdW5jdGlvbiBqaChhLGIpe3JldHVybnt2YWx1ZTphLHNvdXJjZTpiLHN0YWNrOmpjKGIpfX1mdW5jdGlvbiBraChhKXthLmVmZmVjdFRhZ3w9NH12YXIgbGg9dm9pZCAwLG1oPXZvaWQgMCxuaD12b2lkIDAsb2g9dm9pZCAwO2xoPWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPWIuY2hpbGQ7bnVsbCE9PWM7KXtpZig1PT09Yy50YWd8fDY9PT1jLnRhZylhLmFwcGVuZENoaWxkKGMuc3RhdGVOb2RlKTtlbHNlIGlmKDQhPT1jLnRhZyYmbnVsbCE9PWMuY2hpbGQpe2MuY2hpbGQucmV0dXJuPWM7Yz1jLmNoaWxkO2NvbnRpbnVlfWlmKGM9PT1iKWJyZWFrO2Zvcig7bnVsbD09PWMuc2libGluZzspe2lmKG51bGw9PT1jLnJldHVybnx8Yy5yZXR1cm49PT1iKXJldHVybjtjPWMucmV0dXJufWMuc2libGluZy5yZXR1cm49Yy5yZXR1cm47Yz1jLnNpYmxpbmd9fTttaD1mdW5jdGlvbigpe307XG5uaD1mdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmPWEubWVtb2l6ZWRQcm9wcztpZihmIT09ZCl7dmFyIGc9Yi5zdGF0ZU5vZGU7SWYoTi5jdXJyZW50KTthPW51bGw7c3dpdGNoKGMpe2Nhc2UgXCJpbnB1dFwiOmY9dmMoZyxmKTtkPXZjKGcsZCk7YT1bXTticmVhaztjYXNlIFwib3B0aW9uXCI6Zj0kZChnLGYpO2Q9JGQoZyxkKTthPVtdO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjpmPW4oe30sZix7dmFsdWU6dm9pZCAwfSk7ZD1uKHt9LGQse3ZhbHVlOnZvaWQgMH0pO2E9W107YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6Zj1iZShnLGYpO2Q9YmUoZyxkKTthPVtdO2JyZWFrO2RlZmF1bHQ6XCJmdW5jdGlvblwiIT09dHlwZW9mIGYub25DbGljayYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGQub25DbGljayYmKGcub25jbGljaz10ZSl9cWUoYyxkKTtnPWM9dm9pZCAwO3ZhciBoPW51bGw7Zm9yKGMgaW4gZilpZighZC5oYXNPd25Qcm9wZXJ0eShjKSYmZi5oYXNPd25Qcm9wZXJ0eShjKSYmbnVsbCE9ZltjXSlpZihcInN0eWxlXCI9PT1cbmMpe3ZhciBsPWZbY107Zm9yKGcgaW4gbClsLmhhc093blByb3BlcnR5KGcpJiYoaHx8KGg9e30pLGhbZ109XCJcIil9ZWxzZVwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIiE9PWMmJlwiY2hpbGRyZW5cIiE9PWMmJlwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nXCIhPT1jJiZcInN1cHByZXNzSHlkcmF0aW9uV2FybmluZ1wiIT09YyYmXCJhdXRvRm9jdXNcIiE9PWMmJihyYS5oYXNPd25Qcm9wZXJ0eShjKT9hfHwoYT1bXSk6KGE9YXx8W10pLnB1c2goYyxudWxsKSk7Zm9yKGMgaW4gZCl7dmFyIGs9ZFtjXTtsPW51bGwhPWY/ZltjXTp2b2lkIDA7aWYoZC5oYXNPd25Qcm9wZXJ0eShjKSYmayE9PWwmJihudWxsIT1rfHxudWxsIT1sKSlpZihcInN0eWxlXCI9PT1jKWlmKGwpe2ZvcihnIGluIGwpIWwuaGFzT3duUHJvcGVydHkoZyl8fGsmJmsuaGFzT3duUHJvcGVydHkoZyl8fChofHwoaD17fSksaFtnXT1cIlwiKTtmb3IoZyBpbiBrKWsuaGFzT3duUHJvcGVydHkoZykmJmxbZ10hPT1rW2ddJiYoaHx8XG4oaD17fSksaFtnXT1rW2ddKX1lbHNlIGh8fChhfHwoYT1bXSksYS5wdXNoKGMsaCkpLGg9aztlbHNlXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiPT09Yz8oaz1rP2suX19odG1sOnZvaWQgMCxsPWw/bC5fX2h0bWw6dm9pZCAwLG51bGwhPWsmJmwhPT1rJiYoYT1hfHxbXSkucHVzaChjLFwiXCIraykpOlwiY2hpbGRyZW5cIj09PWM/bD09PWt8fFwic3RyaW5nXCIhPT10eXBlb2YgayYmXCJudW1iZXJcIiE9PXR5cGVvZiBrfHwoYT1hfHxbXSkucHVzaChjLFwiXCIrayk6XCJzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmdcIiE9PWMmJlwic3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nXCIhPT1jJiYocmEuaGFzT3duUHJvcGVydHkoYyk/KG51bGwhPWsmJnNlKGUsYyksYXx8bD09PWt8fChhPVtdKSk6KGE9YXx8W10pLnB1c2goYyxrKSl9aCYmKGE9YXx8W10pLnB1c2goXCJzdHlsZVwiLGgpO2U9YTsoYi51cGRhdGVRdWV1ZT1lKSYma2goYil9fTtvaD1mdW5jdGlvbihhLGIsYyxkKXtjIT09ZCYma2goYil9O1xudmFyIHBoPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBXZWFrU2V0P1dlYWtTZXQ6U2V0O2Z1bmN0aW9uIHFoKGEsYil7dmFyIGM9Yi5zb3VyY2UsZD1iLnN0YWNrO251bGw9PT1kJiZudWxsIT09YyYmKGQ9amMoYykpO251bGwhPT1jJiZpYyhjLnR5cGUpO2I9Yi52YWx1ZTtudWxsIT09YSYmMT09PWEudGFnJiZpYyhhLnR5cGUpO3RyeXtjb25zb2xlLmVycm9yKGIpfWNhdGNoKGUpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXt0aHJvdyBlO30pfX1mdW5jdGlvbiByaChhKXt2YXIgYj1hLnJlZjtpZihudWxsIT09YilpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYil0cnl7YihudWxsKX1jYXRjaChjKXtzaChhLGMpfWVsc2UgYi5jdXJyZW50PW51bGx9XG5mdW5jdGlvbiB0aChhLGIsYyl7Yz1jLnVwZGF0ZVF1ZXVlO2M9bnVsbCE9PWM/Yy5sYXN0RWZmZWN0Om51bGw7aWYobnVsbCE9PWMpe3ZhciBkPWM9Yy5uZXh0O2Rve2lmKChkLnRhZyZhKSE9PU5mKXt2YXIgZT1kLmRlc3Ryb3k7ZC5kZXN0cm95PXZvaWQgMDt2b2lkIDAhPT1lJiZlKCl9KGQudGFnJmIpIT09TmYmJihlPWQuY3JlYXRlLGQuZGVzdHJveT1lKCkpO2Q9ZC5uZXh0fXdoaWxlKGQhPT1jKX19XG5mdW5jdGlvbiB1aChhLGIpe2Zvcih2YXIgYz1hOzspe2lmKDU9PT1jLnRhZyl7dmFyIGQ9Yy5zdGF0ZU5vZGU7aWYoYilkLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7ZWxzZXtkPWMuc3RhdGVOb2RlO3ZhciBlPWMubWVtb2l6ZWRQcm9wcy5zdHlsZTtlPXZvaWQgMCE9PWUmJm51bGwhPT1lJiZlLmhhc093blByb3BlcnR5KFwiZGlzcGxheVwiKT9lLmRpc3BsYXk6bnVsbDtkLnN0eWxlLmRpc3BsYXk9bmUoXCJkaXNwbGF5XCIsZSl9fWVsc2UgaWYoNj09PWMudGFnKWMuc3RhdGVOb2RlLm5vZGVWYWx1ZT1iP1wiXCI6Yy5tZW1vaXplZFByb3BzO2Vsc2UgaWYoMTM9PT1jLnRhZyYmbnVsbCE9PWMubWVtb2l6ZWRTdGF0ZSl7ZD1jLmNoaWxkLnNpYmxpbmc7ZC5yZXR1cm49YztjPWQ7Y29udGludWV9ZWxzZSBpZihudWxsIT09Yy5jaGlsZCl7Yy5jaGlsZC5yZXR1cm49YztjPWMuY2hpbGQ7Y29udGludWV9aWYoYz09PWEpYnJlYWs7Zm9yKDtudWxsPT09Yy5zaWJsaW5nOyl7aWYobnVsbD09PWMucmV0dXJufHxcbmMucmV0dXJuPT09YSlyZXR1cm47Yz1jLnJldHVybn1jLnNpYmxpbmcucmV0dXJuPWMucmV0dXJuO2M9Yy5zaWJsaW5nfX1cbmZ1bmN0aW9uIHZoKGEpe1wiZnVuY3Rpb25cIj09PXR5cGVvZiBSZSYmUmUoYSk7c3dpdGNoKGEudGFnKXtjYXNlIDA6Y2FzZSAxMTpjYXNlIDE0OmNhc2UgMTU6dmFyIGI9YS51cGRhdGVRdWV1ZTtpZihudWxsIT09YiYmKGI9Yi5sYXN0RWZmZWN0LG51bGwhPT1iKSl7dmFyIGM9Yj1iLm5leHQ7ZG97dmFyIGQ9Yy5kZXN0cm95O2lmKHZvaWQgMCE9PWQpe3ZhciBlPWE7dHJ5e2QoKX1jYXRjaChmKXtzaChlLGYpfX1jPWMubmV4dH13aGlsZShjIT09Yil9YnJlYWs7Y2FzZSAxOnJoKGEpO2I9YS5zdGF0ZU5vZGU7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGIuY29tcG9uZW50V2lsbFVubW91bnQpdHJ5e2IucHJvcHM9YS5tZW1vaXplZFByb3BzLGIuc3RhdGU9YS5tZW1vaXplZFN0YXRlLGIuY29tcG9uZW50V2lsbFVubW91bnQoKX1jYXRjaChmKXtzaChhLGYpfWJyZWFrO2Nhc2UgNTpyaChhKTticmVhaztjYXNlIDQ6d2goYSl9fVxuZnVuY3Rpb24geGgoYSl7cmV0dXJuIDU9PT1hLnRhZ3x8Mz09PWEudGFnfHw0PT09YS50YWd9XG5mdW5jdGlvbiB5aChhKXthOntmb3IodmFyIGI9YS5yZXR1cm47bnVsbCE9PWI7KXtpZih4aChiKSl7dmFyIGM9YjticmVhayBhfWI9Yi5yZXR1cm59eChcIjE2MFwiKTtjPXZvaWQgMH12YXIgZD1iPXZvaWQgMDtzd2l0Y2goYy50YWcpe2Nhc2UgNTpiPWMuc3RhdGVOb2RlO2Q9ITE7YnJlYWs7Y2FzZSAzOmI9Yy5zdGF0ZU5vZGUuY29udGFpbmVySW5mbztkPSEwO2JyZWFrO2Nhc2UgNDpiPWMuc3RhdGVOb2RlLmNvbnRhaW5lckluZm87ZD0hMDticmVhaztkZWZhdWx0OngoXCIxNjFcIil9Yy5lZmZlY3RUYWcmMTYmJihrZShiLFwiXCIpLGMuZWZmZWN0VGFnJj0tMTcpO2E6Yjpmb3IoYz1hOzspe2Zvcig7bnVsbD09PWMuc2libGluZzspe2lmKG51bGw9PT1jLnJldHVybnx8eGgoYy5yZXR1cm4pKXtjPW51bGw7YnJlYWsgYX1jPWMucmV0dXJufWMuc2libGluZy5yZXR1cm49Yy5yZXR1cm47Zm9yKGM9Yy5zaWJsaW5nOzUhPT1jLnRhZyYmNiE9PWMudGFnJiYxOCE9PWMudGFnOyl7aWYoYy5lZmZlY3RUYWcmXG4yKWNvbnRpbnVlIGI7aWYobnVsbD09PWMuY2hpbGR8fDQ9PT1jLnRhZyljb250aW51ZSBiO2Vsc2UgYy5jaGlsZC5yZXR1cm49YyxjPWMuY2hpbGR9aWYoIShjLmVmZmVjdFRhZyYyKSl7Yz1jLnN0YXRlTm9kZTticmVhayBhfX1mb3IodmFyIGU9YTs7KXtpZig1PT09ZS50YWd8fDY9PT1lLnRhZylpZihjKWlmKGQpe3ZhciBmPWIsZz1lLnN0YXRlTm9kZSxoPWM7OD09PWYubm9kZVR5cGU/Zi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShnLGgpOmYuaW5zZXJ0QmVmb3JlKGcsaCl9ZWxzZSBiLmluc2VydEJlZm9yZShlLnN0YXRlTm9kZSxjKTtlbHNlIGQ/KGc9YixoPWUuc3RhdGVOb2RlLDg9PT1nLm5vZGVUeXBlPyhmPWcucGFyZW50Tm9kZSxmLmluc2VydEJlZm9yZShoLGcpKTooZj1nLGYuYXBwZW5kQ2hpbGQoaCkpLGc9Zy5fcmVhY3RSb290Q29udGFpbmVyLG51bGwhPT1nJiZ2b2lkIDAhPT1nfHxudWxsIT09Zi5vbmNsaWNrfHwoZi5vbmNsaWNrPXRlKSk6Yi5hcHBlbmRDaGlsZChlLnN0YXRlTm9kZSk7XG5lbHNlIGlmKDQhPT1lLnRhZyYmbnVsbCE9PWUuY2hpbGQpe2UuY2hpbGQucmV0dXJuPWU7ZT1lLmNoaWxkO2NvbnRpbnVlfWlmKGU9PT1hKWJyZWFrO2Zvcig7bnVsbD09PWUuc2libGluZzspe2lmKG51bGw9PT1lLnJldHVybnx8ZS5yZXR1cm49PT1hKXJldHVybjtlPWUucmV0dXJufWUuc2libGluZy5yZXR1cm49ZS5yZXR1cm47ZT1lLnNpYmxpbmd9fVxuZnVuY3Rpb24gd2goYSl7Zm9yKHZhciBiPWEsYz0hMSxkPXZvaWQgMCxlPXZvaWQgMDs7KXtpZighYyl7Yz1iLnJldHVybjthOmZvcig7Oyl7bnVsbD09PWM/eChcIjE2MFwiKTp2b2lkIDA7c3dpdGNoKGMudGFnKXtjYXNlIDU6ZD1jLnN0YXRlTm9kZTtlPSExO2JyZWFrIGE7Y2FzZSAzOmQ9Yy5zdGF0ZU5vZGUuY29udGFpbmVySW5mbztlPSEwO2JyZWFrIGE7Y2FzZSA0OmQ9Yy5zdGF0ZU5vZGUuY29udGFpbmVySW5mbztlPSEwO2JyZWFrIGF9Yz1jLnJldHVybn1jPSEwfWlmKDU9PT1iLnRhZ3x8Nj09PWIudGFnKXthOmZvcih2YXIgZj1iLGc9Zjs7KWlmKHZoKGcpLG51bGwhPT1nLmNoaWxkJiY0IT09Zy50YWcpZy5jaGlsZC5yZXR1cm49ZyxnPWcuY2hpbGQ7ZWxzZXtpZihnPT09ZilicmVhaztmb3IoO251bGw9PT1nLnNpYmxpbmc7KXtpZihudWxsPT09Zy5yZXR1cm58fGcucmV0dXJuPT09ZilicmVhayBhO2c9Zy5yZXR1cm59Zy5zaWJsaW5nLnJldHVybj1nLnJldHVybjtnPWcuc2libGluZ31lP1xuKGY9ZCxnPWIuc3RhdGVOb2RlLDg9PT1mLm5vZGVUeXBlP2YucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChnKTpmLnJlbW92ZUNoaWxkKGcpKTpkLnJlbW92ZUNoaWxkKGIuc3RhdGVOb2RlKX1lbHNlIGlmKDQ9PT1iLnRhZyl7aWYobnVsbCE9PWIuY2hpbGQpe2Q9Yi5zdGF0ZU5vZGUuY29udGFpbmVySW5mbztlPSEwO2IuY2hpbGQucmV0dXJuPWI7Yj1iLmNoaWxkO2NvbnRpbnVlfX1lbHNlIGlmKHZoKGIpLG51bGwhPT1iLmNoaWxkKXtiLmNoaWxkLnJldHVybj1iO2I9Yi5jaGlsZDtjb250aW51ZX1pZihiPT09YSlicmVhaztmb3IoO251bGw9PT1iLnNpYmxpbmc7KXtpZihudWxsPT09Yi5yZXR1cm58fGIucmV0dXJuPT09YSlyZXR1cm47Yj1iLnJldHVybjs0PT09Yi50YWcmJihjPSExKX1iLnNpYmxpbmcucmV0dXJuPWIucmV0dXJuO2I9Yi5zaWJsaW5nfX1cbmZ1bmN0aW9uIHpoKGEsYil7c3dpdGNoKGIudGFnKXtjYXNlIDA6Y2FzZSAxMTpjYXNlIDE0OmNhc2UgMTU6dGgoUGYsUWYsYik7YnJlYWs7Y2FzZSAxOmJyZWFrO2Nhc2UgNTp2YXIgYz1iLnN0YXRlTm9kZTtpZihudWxsIT1jKXt2YXIgZD1iLm1lbW9pemVkUHJvcHM7YT1udWxsIT09YT9hLm1lbW9pemVkUHJvcHM6ZDt2YXIgZT1iLnR5cGUsZj1iLnVwZGF0ZVF1ZXVlO2IudXBkYXRlUXVldWU9bnVsbDtudWxsIT09ZiYmQ2UoYyxmLGUsYSxkLGIpfWJyZWFrO2Nhc2UgNjpudWxsPT09Yi5zdGF0ZU5vZGU/eChcIjE2MlwiKTp2b2lkIDA7Yi5zdGF0ZU5vZGUubm9kZVZhbHVlPWIubWVtb2l6ZWRQcm9wczticmVhaztjYXNlIDM6YnJlYWs7Y2FzZSAxMjpicmVhaztjYXNlIDEzOmM9Yi5tZW1vaXplZFN0YXRlO2Q9dm9pZCAwO2E9YjtudWxsPT09Yz9kPSExOihkPSEwLGE9Yi5jaGlsZCwwPT09Yy50aW1lZE91dEF0JiYoYy50aW1lZE91dEF0PWxmKCkpKTtudWxsIT09YSYmdWgoYSxkKTtjPVxuYi51cGRhdGVRdWV1ZTtpZihudWxsIT09Yyl7Yi51cGRhdGVRdWV1ZT1udWxsO3ZhciBnPWIuc3RhdGVOb2RlO251bGw9PT1nJiYoZz1iLnN0YXRlTm9kZT1uZXcgcGgpO2MuZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYz1BaC5iaW5kKG51bGwsYixhKTtnLmhhcyhhKXx8KGcuYWRkKGEpLGEudGhlbihjLGMpKX0pfWJyZWFrO2Nhc2UgMTc6YnJlYWs7ZGVmYXVsdDp4KFwiMTYzXCIpfX12YXIgQmg9XCJmdW5jdGlvblwiPT09dHlwZW9mIFdlYWtNYXA/V2Vha01hcDpNYXA7ZnVuY3Rpb24gQ2goYSxiLGMpe2M9bmYoYyk7Yy50YWc9YWg7Yy5wYXlsb2FkPXtlbGVtZW50Om51bGx9O3ZhciBkPWIudmFsdWU7Yy5jYWxsYmFjaz1mdW5jdGlvbigpe0RoKGQpO3FoKGEsYil9O3JldHVybiBjfVxuZnVuY3Rpb24gRWgoYSxiLGMpe2M9bmYoYyk7Yy50YWc9YWg7dmFyIGQ9YS50eXBlLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcjtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZCl7dmFyIGU9Yi52YWx1ZTtjLnBheWxvYWQ9ZnVuY3Rpb24oKXtyZXR1cm4gZChlKX19dmFyIGY9YS5zdGF0ZU5vZGU7bnVsbCE9PWYmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBmLmNvbXBvbmVudERpZENhdGNoJiYoYy5jYWxsYmFjaz1mdW5jdGlvbigpe1wiZnVuY3Rpb25cIiE9PXR5cGVvZiBkJiYobnVsbD09PUZoP0ZoPW5ldyBTZXQoW3RoaXNdKTpGaC5hZGQodGhpcykpO3ZhciBjPWIudmFsdWUsZT1iLnN0YWNrO3FoKGEsYik7dGhpcy5jb21wb25lbnREaWRDYXRjaChjLHtjb21wb25lbnRTdGFjazpudWxsIT09ZT9lOlwiXCJ9KX0pO3JldHVybiBjfVxuZnVuY3Rpb24gR2goYSl7c3dpdGNoKGEudGFnKXtjYXNlIDE6SihhLnR5cGUpJiZLZShhKTt2YXIgYj1hLmVmZmVjdFRhZztyZXR1cm4gYiYyMDQ4PyhhLmVmZmVjdFRhZz1iJi0yMDQ5fDY0LGEpOm51bGw7Y2FzZSAzOnJldHVybiBLZihhKSxMZShhKSxiPWEuZWZmZWN0VGFnLDAhPT0oYiY2NCk/eChcIjI4NVwiKTp2b2lkIDAsYS5lZmZlY3RUYWc9YiYtMjA0OXw2NCxhO2Nhc2UgNTpyZXR1cm4gTWYoYSksbnVsbDtjYXNlIDEzOnJldHVybiBiPWEuZWZmZWN0VGFnLGImMjA0OD8oYS5lZmZlY3RUYWc9YiYtMjA0OXw2NCxhKTpudWxsO2Nhc2UgMTg6cmV0dXJuIG51bGw7Y2FzZSA0OnJldHVybiBLZihhKSxudWxsO2Nhc2UgMTA6cmV0dXJuIFpnKGEpLG51bGw7ZGVmYXVsdDpyZXR1cm4gbnVsbH19XG52YXIgSGg9VGIuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcixJaD1UYi5SZWFjdEN1cnJlbnRPd25lcixKaD0xMDczNzQxODIyLEtoPSExLFQ9bnVsbCxMaD1udWxsLFU9MCxNaD0tMSxOaD0hMSxWPW51bGwsT2g9ITEsUGg9bnVsbCxRaD1udWxsLFJoPW51bGwsRmg9bnVsbDtmdW5jdGlvbiBTaCgpe2lmKG51bGwhPT1UKWZvcih2YXIgYT1ULnJldHVybjtudWxsIT09YTspe3ZhciBiPWE7c3dpdGNoKGIudGFnKXtjYXNlIDE6dmFyIGM9Yi50eXBlLmNoaWxkQ29udGV4dFR5cGVzO251bGwhPT1jJiZ2b2lkIDAhPT1jJiZLZShiKTticmVhaztjYXNlIDM6S2YoYik7TGUoYik7YnJlYWs7Y2FzZSA1Ok1mKGIpO2JyZWFrO2Nhc2UgNDpLZihiKTticmVhaztjYXNlIDEwOlpnKGIpfWE9YS5yZXR1cm59TGg9bnVsbDtVPTA7TWg9LTE7Tmg9ITE7VD1udWxsfVxuZnVuY3Rpb24gVGgoKXtmb3IoO251bGwhPT1WOyl7dmFyIGE9Vi5lZmZlY3RUYWc7YSYxNiYma2UoVi5zdGF0ZU5vZGUsXCJcIik7aWYoYSYxMjgpe3ZhciBiPVYuYWx0ZXJuYXRlO251bGwhPT1iJiYoYj1iLnJlZixudWxsIT09YiYmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBiP2IobnVsbCk6Yi5jdXJyZW50PW51bGwpKX1zd2l0Y2goYSYxNCl7Y2FzZSAyOnloKFYpO1YuZWZmZWN0VGFnJj0tMzticmVhaztjYXNlIDY6eWgoVik7Vi5lZmZlY3RUYWcmPS0zO3poKFYuYWx0ZXJuYXRlLFYpO2JyZWFrO2Nhc2UgNDp6aChWLmFsdGVybmF0ZSxWKTticmVhaztjYXNlIDg6YT1WLHdoKGEpLGEucmV0dXJuPW51bGwsYS5jaGlsZD1udWxsLGEubWVtb2l6ZWRTdGF0ZT1udWxsLGEudXBkYXRlUXVldWU9bnVsbCxhPWEuYWx0ZXJuYXRlLG51bGwhPT1hJiYoYS5yZXR1cm49bnVsbCxhLmNoaWxkPW51bGwsYS5tZW1vaXplZFN0YXRlPW51bGwsYS51cGRhdGVRdWV1ZT1udWxsKX1WPVYubmV4dEVmZmVjdH19XG5mdW5jdGlvbiBVaCgpe2Zvcig7bnVsbCE9PVY7KXtpZihWLmVmZmVjdFRhZyYyNTYpYTp7dmFyIGE9Vi5hbHRlcm5hdGUsYj1WO3N3aXRjaChiLnRhZyl7Y2FzZSAwOmNhc2UgMTE6Y2FzZSAxNTp0aChPZixOZixiKTticmVhayBhO2Nhc2UgMTppZihiLmVmZmVjdFRhZyYyNTYmJm51bGwhPT1hKXt2YXIgYz1hLm1lbW9pemVkUHJvcHMsZD1hLm1lbW9pemVkU3RhdGU7YT1iLnN0YXRlTm9kZTtiPWEuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoYi5lbGVtZW50VHlwZT09PWIudHlwZT9jOkwoYi50eXBlLGMpLGQpO2EuX19yZWFjdEludGVybmFsU25hcHNob3RCZWZvcmVVcGRhdGU9Yn1icmVhayBhO2Nhc2UgMzpjYXNlIDU6Y2FzZSA2OmNhc2UgNDpjYXNlIDE3OmJyZWFrIGE7ZGVmYXVsdDp4KFwiMTYzXCIpfX1WPVYubmV4dEVmZmVjdH19XG5mdW5jdGlvbiBWaChhLGIpe2Zvcig7bnVsbCE9PVY7KXt2YXIgYz1WLmVmZmVjdFRhZztpZihjJjM2KXt2YXIgZD1WLmFsdGVybmF0ZSxlPVYsZj1iO3N3aXRjaChlLnRhZyl7Y2FzZSAwOmNhc2UgMTE6Y2FzZSAxNTp0aChSZixTZixlKTticmVhaztjYXNlIDE6dmFyIGc9ZS5zdGF0ZU5vZGU7aWYoZS5lZmZlY3RUYWcmNClpZihudWxsPT09ZClnLmNvbXBvbmVudERpZE1vdW50KCk7ZWxzZXt2YXIgaD1lLmVsZW1lbnRUeXBlPT09ZS50eXBlP2QubWVtb2l6ZWRQcm9wczpMKGUudHlwZSxkLm1lbW9pemVkUHJvcHMpO2cuY29tcG9uZW50RGlkVXBkYXRlKGgsZC5tZW1vaXplZFN0YXRlLGcuX19yZWFjdEludGVybmFsU25hcHNob3RCZWZvcmVVcGRhdGUpfWQ9ZS51cGRhdGVRdWV1ZTtudWxsIT09ZCYmaGgoZSxkLGcsZik7YnJlYWs7Y2FzZSAzOmQ9ZS51cGRhdGVRdWV1ZTtpZihudWxsIT09ZCl7Zz1udWxsO2lmKG51bGwhPT1lLmNoaWxkKXN3aXRjaChlLmNoaWxkLnRhZyl7Y2FzZSA1Omc9XG5lLmNoaWxkLnN0YXRlTm9kZTticmVhaztjYXNlIDE6Zz1lLmNoaWxkLnN0YXRlTm9kZX1oaChlLGQsZyxmKX1icmVhaztjYXNlIDU6Zj1lLnN0YXRlTm9kZTtudWxsPT09ZCYmZS5lZmZlY3RUYWcmNCYmd2UoZS50eXBlLGUubWVtb2l6ZWRQcm9wcykmJmYuZm9jdXMoKTticmVhaztjYXNlIDY6YnJlYWs7Y2FzZSA0OmJyZWFrO2Nhc2UgMTI6YnJlYWs7Y2FzZSAxMzpicmVhaztjYXNlIDE3OmJyZWFrO2RlZmF1bHQ6eChcIjE2M1wiKX19YyYxMjgmJihlPVYucmVmLG51bGwhPT1lJiYoZj1WLnN0YXRlTm9kZSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZT9lKGYpOmUuY3VycmVudD1mKSk7YyY1MTImJihQaD1hKTtWPVYubmV4dEVmZmVjdH19XG5mdW5jdGlvbiBXaChhLGIpe1JoPVFoPVBoPW51bGw7dmFyIGM9VztXPSEwO2Rve2lmKGIuZWZmZWN0VGFnJjUxMil7dmFyIGQ9ITEsZT12b2lkIDA7dHJ5e3ZhciBmPWI7dGgoVWYsTmYsZik7dGgoTmYsVGYsZil9Y2F0Y2goZyl7ZD0hMCxlPWd9ZCYmc2goYixlKX1iPWIubmV4dEVmZmVjdH13aGlsZShudWxsIT09Yik7Vz1jO2M9YS5leHBpcmF0aW9uVGltZTswIT09YyYmWGgoYSxjKTtYfHxXfHxZaCgxMDczNzQxODIzLCExKX1mdW5jdGlvbiBvZigpe251bGwhPT1RaCYmQmUoUWgpO251bGwhPT1SaCYmUmgoKX1cbmZ1bmN0aW9uIFpoKGEsYil7T2g9S2g9ITA7YS5jdXJyZW50PT09Yj94KFwiMTc3XCIpOnZvaWQgMDt2YXIgYz1hLnBlbmRpbmdDb21taXRFeHBpcmF0aW9uVGltZTswPT09Yz94KFwiMjYxXCIpOnZvaWQgMDthLnBlbmRpbmdDb21taXRFeHBpcmF0aW9uVGltZT0wO3ZhciBkPWIuZXhwaXJhdGlvblRpbWUsZT1iLmNoaWxkRXhwaXJhdGlvblRpbWU7ZWYoYSxlPmQ/ZTpkKTtJaC5jdXJyZW50PW51bGw7ZD12b2lkIDA7MTxiLmVmZmVjdFRhZz9udWxsIT09Yi5sYXN0RWZmZWN0PyhiLmxhc3RFZmZlY3QubmV4dEVmZmVjdD1iLGQ9Yi5maXJzdEVmZmVjdCk6ZD1iOmQ9Yi5maXJzdEVmZmVjdDt1ZT1CZDt2ZT1QZCgpO0JkPSExO2ZvcihWPWQ7bnVsbCE9PVY7KXtlPSExO3ZhciBmPXZvaWQgMDt0cnl7VWgoKX1jYXRjaChoKXtlPSEwLGY9aH1lJiYobnVsbD09PVY/eChcIjE3OFwiKTp2b2lkIDAsc2goVixmKSxudWxsIT09ViYmKFY9Vi5uZXh0RWZmZWN0KSl9Zm9yKFY9ZDtudWxsIT09Vjspe2U9ITE7XG5mPXZvaWQgMDt0cnl7VGgoKX1jYXRjaChoKXtlPSEwLGY9aH1lJiYobnVsbD09PVY/eChcIjE3OFwiKTp2b2lkIDAsc2goVixmKSxudWxsIT09ViYmKFY9Vi5uZXh0RWZmZWN0KSl9UWQodmUpO3ZlPW51bGw7QmQ9ISF1ZTt1ZT1udWxsO2EuY3VycmVudD1iO2ZvcihWPWQ7bnVsbCE9PVY7KXtlPSExO2Y9dm9pZCAwO3RyeXtWaChhLGMpfWNhdGNoKGgpe2U9ITAsZj1ofWUmJihudWxsPT09Vj94KFwiMTc4XCIpOnZvaWQgMCxzaChWLGYpLG51bGwhPT1WJiYoVj1WLm5leHRFZmZlY3QpKX1pZihudWxsIT09ZCYmbnVsbCE9PVBoKXt2YXIgZz1XaC5iaW5kKG51bGwsYSxkKTtRaD1yLnVuc3RhYmxlX3J1bldpdGhQcmlvcml0eShyLnVuc3RhYmxlX05vcm1hbFByaW9yaXR5LGZ1bmN0aW9uKCl7cmV0dXJuIEFlKGcpfSk7Umg9Z31LaD1PaD0hMTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgUWUmJlFlKGIuc3RhdGVOb2RlKTtjPWIuZXhwaXJhdGlvblRpbWU7Yj1iLmNoaWxkRXhwaXJhdGlvblRpbWU7Yj1cbmI+Yz9iOmM7MD09PWImJihGaD1udWxsKTskaChhLGIpfVxuZnVuY3Rpb24gYWkoYSl7Zm9yKDs7KXt2YXIgYj1hLmFsdGVybmF0ZSxjPWEucmV0dXJuLGQ9YS5zaWJsaW5nO2lmKDA9PT0oYS5lZmZlY3RUYWcmMTAyNCkpe1Q9YTthOnt2YXIgZT1iO2I9YTt2YXIgZj1VO3ZhciBnPWIucGVuZGluZ1Byb3BzO3N3aXRjaChiLnRhZyl7Y2FzZSAyOmJyZWFrO2Nhc2UgMTY6YnJlYWs7Y2FzZSAxNTpjYXNlIDA6YnJlYWs7Y2FzZSAxOkooYi50eXBlKSYmS2UoYik7YnJlYWs7Y2FzZSAzOktmKGIpO0xlKGIpO2c9Yi5zdGF0ZU5vZGU7Zy5wZW5kaW5nQ29udGV4dCYmKGcuY29udGV4dD1nLnBlbmRpbmdDb250ZXh0LGcucGVuZGluZ0NvbnRleHQ9bnVsbCk7aWYobnVsbD09PWV8fG51bGw9PT1lLmNoaWxkKUVnKGIpLGIuZWZmZWN0VGFnJj0tMzttaChiKTticmVhaztjYXNlIDU6TWYoYik7dmFyIGg9SWYoSGYuY3VycmVudCk7Zj1iLnR5cGU7aWYobnVsbCE9PWUmJm51bGwhPWIuc3RhdGVOb2RlKW5oKGUsYixmLGcsaCksZS5yZWYhPT1iLnJlZiYmKGIuZWZmZWN0VGFnfD1cbjEyOCk7ZWxzZSBpZihnKXt2YXIgbD1JZihOLmN1cnJlbnQpO2lmKEVnKGIpKXtnPWI7ZT1nLnN0YXRlTm9kZTt2YXIgaz1nLnR5cGUsbT1nLm1lbW9pemVkUHJvcHMscD1oO2VbRmFdPWc7ZVtHYV09bTtmPXZvaWQgMDtoPWs7c3dpdGNoKGgpe2Nhc2UgXCJpZnJhbWVcIjpjYXNlIFwib2JqZWN0XCI6RShcImxvYWRcIixlKTticmVhaztjYXNlIFwidmlkZW9cIjpjYXNlIFwiYXVkaW9cIjpmb3Ioaz0wO2s8YWIubGVuZ3RoO2srKylFKGFiW2tdLGUpO2JyZWFrO2Nhc2UgXCJzb3VyY2VcIjpFKFwiZXJyb3JcIixlKTticmVhaztjYXNlIFwiaW1nXCI6Y2FzZSBcImltYWdlXCI6Y2FzZSBcImxpbmtcIjpFKFwiZXJyb3JcIixlKTtFKFwibG9hZFwiLGUpO2JyZWFrO2Nhc2UgXCJmb3JtXCI6RShcInJlc2V0XCIsZSk7RShcInN1Ym1pdFwiLGUpO2JyZWFrO2Nhc2UgXCJkZXRhaWxzXCI6RShcInRvZ2dsZVwiLGUpO2JyZWFrO2Nhc2UgXCJpbnB1dFwiOndjKGUsbSk7RShcImludmFsaWRcIixlKTtzZShwLFwib25DaGFuZ2VcIik7YnJlYWs7Y2FzZSBcInNlbGVjdFwiOmUuX3dyYXBwZXJTdGF0ZT1cbnt3YXNNdWx0aXBsZTohIW0ubXVsdGlwbGV9O0UoXCJpbnZhbGlkXCIsZSk7c2UocCxcIm9uQ2hhbmdlXCIpO2JyZWFrO2Nhc2UgXCJ0ZXh0YXJlYVwiOmNlKGUsbSksRShcImludmFsaWRcIixlKSxzZShwLFwib25DaGFuZ2VcIil9cWUoaCxtKTtrPW51bGw7Zm9yKGYgaW4gbSltLmhhc093blByb3BlcnR5KGYpJiYobD1tW2ZdLFwiY2hpbGRyZW5cIj09PWY/XCJzdHJpbmdcIj09PXR5cGVvZiBsP2UudGV4dENvbnRlbnQhPT1sJiYoaz1bXCJjaGlsZHJlblwiLGxdKTpcIm51bWJlclwiPT09dHlwZW9mIGwmJmUudGV4dENvbnRlbnQhPT1cIlwiK2wmJihrPVtcImNoaWxkcmVuXCIsXCJcIitsXSk6cmEuaGFzT3duUHJvcGVydHkoZikmJm51bGwhPWwmJnNlKHAsZikpO3N3aXRjaChoKXtjYXNlIFwiaW5wdXRcIjpSYihlKTtBYyhlLG0sITApO2JyZWFrO2Nhc2UgXCJ0ZXh0YXJlYVwiOlJiKGUpO2VlKGUsbSk7YnJlYWs7Y2FzZSBcInNlbGVjdFwiOmNhc2UgXCJvcHRpb25cIjpicmVhaztkZWZhdWx0OlwiZnVuY3Rpb25cIj09PXR5cGVvZiBtLm9uQ2xpY2smJlxuKGUub25jbGljaz10ZSl9Zj1rO2cudXBkYXRlUXVldWU9ZjtnPW51bGwhPT1mPyEwOiExO2cmJmtoKGIpfWVsc2V7bT1iO3A9ZjtlPWc7az05PT09aC5ub2RlVHlwZT9oOmgub3duZXJEb2N1bWVudDtsPT09ZmUuaHRtbCYmKGw9Z2UocCkpO2w9PT1mZS5odG1sP1wic2NyaXB0XCI9PT1wPyhlPWsuY3JlYXRlRWxlbWVudChcImRpdlwiKSxlLmlubmVySFRNTD1cIjxzY3JpcHQ+XFx4M2Mvc2NyaXB0PlwiLGs9ZS5yZW1vdmVDaGlsZChlLmZpcnN0Q2hpbGQpKTpcInN0cmluZ1wiPT09dHlwZW9mIGUuaXM/az1rLmNyZWF0ZUVsZW1lbnQocCx7aXM6ZS5pc30pOihrPWsuY3JlYXRlRWxlbWVudChwKSxcInNlbGVjdFwiPT09cCYmKHA9ayxlLm11bHRpcGxlP3AubXVsdGlwbGU9ITA6ZS5zaXplJiYocC5zaXplPWUuc2l6ZSkpKTprPWsuY3JlYXRlRWxlbWVudE5TKGwscCk7ZT1rO2VbRmFdPW07ZVtHYV09ZztsaChlLGIsITEsITEpO3A9ZTtrPWY7bT1nO3ZhciB0PWgsQT1yZShrLG0pO3N3aXRjaChrKXtjYXNlIFwiaWZyYW1lXCI6Y2FzZSBcIm9iamVjdFwiOkUoXCJsb2FkXCIsXG5wKTtoPW07YnJlYWs7Y2FzZSBcInZpZGVvXCI6Y2FzZSBcImF1ZGlvXCI6Zm9yKGg9MDtoPGFiLmxlbmd0aDtoKyspRShhYltoXSxwKTtoPW07YnJlYWs7Y2FzZSBcInNvdXJjZVwiOkUoXCJlcnJvclwiLHApO2g9bTticmVhaztjYXNlIFwiaW1nXCI6Y2FzZSBcImltYWdlXCI6Y2FzZSBcImxpbmtcIjpFKFwiZXJyb3JcIixwKTtFKFwibG9hZFwiLHApO2g9bTticmVhaztjYXNlIFwiZm9ybVwiOkUoXCJyZXNldFwiLHApO0UoXCJzdWJtaXRcIixwKTtoPW07YnJlYWs7Y2FzZSBcImRldGFpbHNcIjpFKFwidG9nZ2xlXCIscCk7aD1tO2JyZWFrO2Nhc2UgXCJpbnB1dFwiOndjKHAsbSk7aD12YyhwLG0pO0UoXCJpbnZhbGlkXCIscCk7c2UodCxcIm9uQ2hhbmdlXCIpO2JyZWFrO2Nhc2UgXCJvcHRpb25cIjpoPSRkKHAsbSk7YnJlYWs7Y2FzZSBcInNlbGVjdFwiOnAuX3dyYXBwZXJTdGF0ZT17d2FzTXVsdGlwbGU6ISFtLm11bHRpcGxlfTtoPW4oe30sbSx7dmFsdWU6dm9pZCAwfSk7RShcImludmFsaWRcIixwKTtzZSh0LFwib25DaGFuZ2VcIik7YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6Y2UocCxcbm0pO2g9YmUocCxtKTtFKFwiaW52YWxpZFwiLHApO3NlKHQsXCJvbkNoYW5nZVwiKTticmVhaztkZWZhdWx0Omg9bX1xZShrLGgpO2w9dm9pZCAwO3ZhciB2PWssUj1wLHU9aDtmb3IobCBpbiB1KWlmKHUuaGFzT3duUHJvcGVydHkobCkpe3ZhciBxPXVbbF07XCJzdHlsZVwiPT09bD9vZShSLHEpOlwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIj09PWw/KHE9cT9xLl9faHRtbDp2b2lkIDAsbnVsbCE9cSYmamUoUixxKSk6XCJjaGlsZHJlblwiPT09bD9cInN0cmluZ1wiPT09dHlwZW9mIHE/KFwidGV4dGFyZWFcIiE9PXZ8fFwiXCIhPT1xKSYma2UoUixxKTpcIm51bWJlclwiPT09dHlwZW9mIHEmJmtlKFIsXCJcIitxKTpcInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZ1wiIT09bCYmXCJzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmdcIiE9PWwmJlwiYXV0b0ZvY3VzXCIhPT1sJiYocmEuaGFzT3duUHJvcGVydHkobCk/bnVsbCE9cSYmc2UodCxsKTpudWxsIT1xJiZ0YyhSLGwscSxBKSl9c3dpdGNoKGspe2Nhc2UgXCJpbnB1dFwiOlJiKHApO1xuQWMocCxtLCExKTticmVhaztjYXNlIFwidGV4dGFyZWFcIjpSYihwKTtlZShwLG0pO2JyZWFrO2Nhc2UgXCJvcHRpb25cIjpudWxsIT1tLnZhbHVlJiZwLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsXCJcIit1YyhtLnZhbHVlKSk7YnJlYWs7Y2FzZSBcInNlbGVjdFwiOmg9cDtoLm11bHRpcGxlPSEhbS5tdWx0aXBsZTtwPW0udmFsdWU7bnVsbCE9cD9hZShoLCEhbS5tdWx0aXBsZSxwLCExKTpudWxsIT1tLmRlZmF1bHRWYWx1ZSYmYWUoaCwhIW0ubXVsdGlwbGUsbS5kZWZhdWx0VmFsdWUsITApO2JyZWFrO2RlZmF1bHQ6XCJmdW5jdGlvblwiPT09dHlwZW9mIGgub25DbGljayYmKHAub25jbGljaz10ZSl9KGc9d2UoZixnKSkmJmtoKGIpO2Iuc3RhdGVOb2RlPWV9bnVsbCE9PWIucmVmJiYoYi5lZmZlY3RUYWd8PTEyOCl9ZWxzZSBudWxsPT09Yi5zdGF0ZU5vZGU/eChcIjE2NlwiKTp2b2lkIDA7YnJlYWs7Y2FzZSA2OmUmJm51bGwhPWIuc3RhdGVOb2RlP29oKGUsYixlLm1lbW9pemVkUHJvcHMsZyk6KFwic3RyaW5nXCIhPT1cbnR5cGVvZiBnJiYobnVsbD09PWIuc3RhdGVOb2RlP3goXCIxNjZcIik6dm9pZCAwKSxlPUlmKEhmLmN1cnJlbnQpLElmKE4uY3VycmVudCksRWcoYik/KGc9YixmPWcuc3RhdGVOb2RlLGU9Zy5tZW1vaXplZFByb3BzLGZbRmFdPWcsKGc9Zi5ub2RlVmFsdWUhPT1lKSYma2goYikpOihmPWIsZz0oOT09PWUubm9kZVR5cGU/ZTplLm93bmVyRG9jdW1lbnQpLmNyZWF0ZVRleHROb2RlKGcpLGdbRmFdPWIsZi5zdGF0ZU5vZGU9ZykpO2JyZWFrO2Nhc2UgMTE6YnJlYWs7Y2FzZSAxMzpnPWIubWVtb2l6ZWRTdGF0ZTtpZigwIT09KGIuZWZmZWN0VGFnJjY0KSl7Yi5leHBpcmF0aW9uVGltZT1mO1Q9YjticmVhayBhfWc9bnVsbCE9PWc7Zj1udWxsIT09ZSYmbnVsbCE9PWUubWVtb2l6ZWRTdGF0ZTtudWxsIT09ZSYmIWcmJmYmJihlPWUuY2hpbGQuc2libGluZyxudWxsIT09ZSYmKGg9Yi5maXJzdEVmZmVjdCxudWxsIT09aD8oYi5maXJzdEVmZmVjdD1lLGUubmV4dEVmZmVjdD1oKTooYi5maXJzdEVmZmVjdD1cbmIubGFzdEVmZmVjdD1lLGUubmV4dEVmZmVjdD1udWxsKSxlLmVmZmVjdFRhZz04KSk7aWYoZ3x8ZiliLmVmZmVjdFRhZ3w9NDticmVhaztjYXNlIDc6YnJlYWs7Y2FzZSA4OmJyZWFrO2Nhc2UgMTI6YnJlYWs7Y2FzZSA0OktmKGIpO21oKGIpO2JyZWFrO2Nhc2UgMTA6WmcoYik7YnJlYWs7Y2FzZSA5OmJyZWFrO2Nhc2UgMTQ6YnJlYWs7Y2FzZSAxNzpKKGIudHlwZSkmJktlKGIpO2JyZWFrO2Nhc2UgMTg6YnJlYWs7ZGVmYXVsdDp4KFwiMTU2XCIpfVQ9bnVsbH1iPWE7aWYoMT09PVV8fDEhPT1iLmNoaWxkRXhwaXJhdGlvblRpbWUpe2c9MDtmb3IoZj1iLmNoaWxkO251bGwhPT1mOyllPWYuZXhwaXJhdGlvblRpbWUsaD1mLmNoaWxkRXhwaXJhdGlvblRpbWUsZT5nJiYoZz1lKSxoPmcmJihnPWgpLGY9Zi5zaWJsaW5nO2IuY2hpbGRFeHBpcmF0aW9uVGltZT1nfWlmKG51bGwhPT1UKXJldHVybiBUO251bGwhPT1jJiYwPT09KGMuZWZmZWN0VGFnJjEwMjQpJiYobnVsbD09PWMuZmlyc3RFZmZlY3QmJlxuKGMuZmlyc3RFZmZlY3Q9YS5maXJzdEVmZmVjdCksbnVsbCE9PWEubGFzdEVmZmVjdCYmKG51bGwhPT1jLmxhc3RFZmZlY3QmJihjLmxhc3RFZmZlY3QubmV4dEVmZmVjdD1hLmZpcnN0RWZmZWN0KSxjLmxhc3RFZmZlY3Q9YS5sYXN0RWZmZWN0KSwxPGEuZWZmZWN0VGFnJiYobnVsbCE9PWMubGFzdEVmZmVjdD9jLmxhc3RFZmZlY3QubmV4dEVmZmVjdD1hOmMuZmlyc3RFZmZlY3Q9YSxjLmxhc3RFZmZlY3Q9YSkpfWVsc2V7YT1HaChhLFUpO2lmKG51bGwhPT1hKXJldHVybiBhLmVmZmVjdFRhZyY9MTAyMyxhO251bGwhPT1jJiYoYy5maXJzdEVmZmVjdD1jLmxhc3RFZmZlY3Q9bnVsbCxjLmVmZmVjdFRhZ3w9MTAyNCl9aWYobnVsbCE9PWQpcmV0dXJuIGQ7aWYobnVsbCE9PWMpYT1jO2Vsc2UgYnJlYWt9cmV0dXJuIG51bGx9XG5mdW5jdGlvbiBiaShhKXt2YXIgYj1UZyhhLmFsdGVybmF0ZSxhLFUpO2EubWVtb2l6ZWRQcm9wcz1hLnBlbmRpbmdQcm9wcztudWxsPT09YiYmKGI9YWkoYSkpO0loLmN1cnJlbnQ9bnVsbDtyZXR1cm4gYn1cbmZ1bmN0aW9uIGNpKGEsYil7S2g/eChcIjI0M1wiKTp2b2lkIDA7b2YoKTtLaD0hMDt2YXIgYz1IaC5jdXJyZW50O0hoLmN1cnJlbnQ9a2c7dmFyIGQ9YS5uZXh0RXhwaXJhdGlvblRpbWVUb1dvcmtPbjtpZihkIT09VXx8YSE9PUxofHxudWxsPT09VClTaCgpLExoPWEsVT1kLFQ9WGUoTGguY3VycmVudCxudWxsLFUpLGEucGVuZGluZ0NvbW1pdEV4cGlyYXRpb25UaW1lPTA7dmFyIGU9ITE7ZG97dHJ5e2lmKGIpZm9yKDtudWxsIT09VCYmIWRpKCk7KVQ9YmkoVCk7ZWxzZSBmb3IoO251bGwhPT1UOylUPWJpKFQpfWNhdGNoKHUpe2lmKFlnPVhnPVdnPW51bGwsbGcoKSxudWxsPT09VCllPSEwLERoKHUpO2Vsc2V7bnVsbD09PVQ/eChcIjI3MVwiKTp2b2lkIDA7dmFyIGY9VCxnPWYucmV0dXJuO2lmKG51bGw9PT1nKWU9ITAsRGgodSk7ZWxzZXthOnt2YXIgaD1hLGw9ZyxrPWYsbT11O2c9VTtrLmVmZmVjdFRhZ3w9MTAyNDtrLmZpcnN0RWZmZWN0PWsubGFzdEVmZmVjdD1udWxsO2lmKG51bGwhPT1cbm0mJlwib2JqZWN0XCI9PT10eXBlb2YgbSYmXCJmdW5jdGlvblwiPT09dHlwZW9mIG0udGhlbil7dmFyIHA9bTttPWw7dmFyIHQ9LTEsQT0tMTtkb3tpZigxMz09PW0udGFnKXt2YXIgdj1tLmFsdGVybmF0ZTtpZihudWxsIT09diYmKHY9di5tZW1vaXplZFN0YXRlLG51bGwhPT12KSl7QT0xMCooMTA3Mzc0MTgyMi12LnRpbWVkT3V0QXQpO2JyZWFrfXY9bS5wZW5kaW5nUHJvcHMubWF4RHVyYXRpb247aWYoXCJudW1iZXJcIj09PXR5cGVvZiB2KWlmKDA+PXYpdD0wO2Vsc2UgaWYoLTE9PT10fHx2PHQpdD12fW09bS5yZXR1cm59d2hpbGUobnVsbCE9PW0pO209bDtkb3tpZih2PTEzPT09bS50YWcpdj12b2lkIDA9PT1tLm1lbW9pemVkUHJvcHMuZmFsbGJhY2s/ITE6bnVsbD09PW0ubWVtb2l6ZWRTdGF0ZTtpZih2KXtsPW0udXBkYXRlUXVldWU7bnVsbD09PWw/KGw9bmV3IFNldCxsLmFkZChwKSxtLnVwZGF0ZVF1ZXVlPWwpOmwuYWRkKHApO2lmKDA9PT0obS5tb2RlJjEpKXttLmVmZmVjdFRhZ3w9XG42NDtrLmVmZmVjdFRhZyY9LTE5NTc7MT09PWsudGFnJiYobnVsbD09PWsuYWx0ZXJuYXRlP2sudGFnPTE3OihnPW5mKDEwNzM3NDE4MjMpLGcudGFnPXNmLHBmKGssZykpKTtrLmV4cGlyYXRpb25UaW1lPTEwNzM3NDE4MjM7YnJlYWsgYX1rPWg7bD1nO3ZhciBSPWsucGluZ0NhY2hlO251bGw9PT1SPyhSPWsucGluZ0NhY2hlPW5ldyBCaCx2PW5ldyBTZXQsUi5zZXQocCx2KSk6KHY9Ui5nZXQocCksdm9pZCAwPT09diYmKHY9bmV3IFNldCxSLnNldChwLHYpKSk7di5oYXMobCl8fCh2LmFkZChsKSxrPWVpLmJpbmQobnVsbCxrLHAsbCkscC50aGVuKGssaykpOy0xPT09dD9oPTEwNzM3NDE4MjM6KC0xPT09QSYmKEE9MTAqKDEwNzM3NDE4MjItZ2YoaCxnKSktNUUzKSxoPUErdCk7MDw9aCYmTWg8aCYmKE1oPWgpO20uZWZmZWN0VGFnfD0yMDQ4O20uZXhwaXJhdGlvblRpbWU9ZzticmVhayBhfW09bS5yZXR1cm59d2hpbGUobnVsbCE9PW0pO209RXJyb3IoKGljKGsudHlwZSl8fFwiQSBSZWFjdCBjb21wb25lbnRcIikrXG5cIiBzdXNwZW5kZWQgd2hpbGUgcmVuZGVyaW5nLCBidXQgbm8gZmFsbGJhY2sgVUkgd2FzIHNwZWNpZmllZC5cXG5cXG5BZGQgYSA8U3VzcGVuc2UgZmFsbGJhY2s9Li4uPiBjb21wb25lbnQgaGlnaGVyIGluIHRoZSB0cmVlIHRvIHByb3ZpZGUgYSBsb2FkaW5nIGluZGljYXRvciBvciBwbGFjZWhvbGRlciB0byBkaXNwbGF5LlwiK2pjKGspKX1OaD0hMDttPWpoKG0sayk7aD1sO2Rve3N3aXRjaChoLnRhZyl7Y2FzZSAzOmguZWZmZWN0VGFnfD0yMDQ4O2guZXhwaXJhdGlvblRpbWU9ZztnPUNoKGgsbSxnKTtlaChoLGcpO2JyZWFrIGE7Y2FzZSAxOmlmKHQ9bSxBPWgudHlwZSxrPWguc3RhdGVOb2RlLDA9PT0oaC5lZmZlY3RUYWcmNjQpJiYoXCJmdW5jdGlvblwiPT09dHlwZW9mIEEuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yfHxudWxsIT09ayYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGsuY29tcG9uZW50RGlkQ2F0Y2gmJihudWxsPT09Rmh8fCFGaC5oYXMoaykpKSl7aC5lZmZlY3RUYWd8PTIwNDg7XG5oLmV4cGlyYXRpb25UaW1lPWc7Zz1FaChoLHQsZyk7ZWgoaCxnKTticmVhayBhfX1oPWgucmV0dXJufXdoaWxlKG51bGwhPT1oKX1UPWFpKGYpO2NvbnRpbnVlfX19YnJlYWt9d2hpbGUoMSk7S2g9ITE7SGguY3VycmVudD1jO1lnPVhnPVdnPW51bGw7bGcoKTtpZihlKUxoPW51bGwsYS5maW5pc2hlZFdvcms9bnVsbDtlbHNlIGlmKG51bGwhPT1UKWEuZmluaXNoZWRXb3JrPW51bGw7ZWxzZXtjPWEuY3VycmVudC5hbHRlcm5hdGU7bnVsbD09PWM/eChcIjI4MVwiKTp2b2lkIDA7TGg9bnVsbDtpZihOaCl7ZT1hLmxhdGVzdFBlbmRpbmdUaW1lO2Y9YS5sYXRlc3RTdXNwZW5kZWRUaW1lO2c9YS5sYXRlc3RQaW5nZWRUaW1lO2lmKDAhPT1lJiZlPGR8fDAhPT1mJiZmPGR8fDAhPT1nJiZnPGQpe2ZmKGEsZCk7ZmkoYSxjLGQsYS5leHBpcmF0aW9uVGltZSwtMSk7cmV0dXJufWlmKCFhLmRpZEVycm9yJiZiKXthLmRpZEVycm9yPSEwO2Q9YS5uZXh0RXhwaXJhdGlvblRpbWVUb1dvcmtPbj1kO1xuYj1hLmV4cGlyYXRpb25UaW1lPTEwNzM3NDE4MjM7ZmkoYSxjLGQsYiwtMSk7cmV0dXJufX1iJiYtMSE9PU1oPyhmZihhLGQpLGI9MTAqKDEwNzM3NDE4MjItZ2YoYSxkKSksYjxNaCYmKE1oPWIpLGI9MTAqKDEwNzM3NDE4MjItbGYoKSksYj1NaC1iLGZpKGEsYyxkLGEuZXhwaXJhdGlvblRpbWUsMD5iPzA6YikpOihhLnBlbmRpbmdDb21taXRFeHBpcmF0aW9uVGltZT1kLGEuZmluaXNoZWRXb3JrPWMpfX1cbmZ1bmN0aW9uIHNoKGEsYil7Zm9yKHZhciBjPWEucmV0dXJuO251bGwhPT1jOyl7c3dpdGNoKGMudGFnKXtjYXNlIDE6dmFyIGQ9Yy5zdGF0ZU5vZGU7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGMudHlwZS5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3J8fFwiZnVuY3Rpb25cIj09PXR5cGVvZiBkLmNvbXBvbmVudERpZENhdGNoJiYobnVsbD09PUZofHwhRmguaGFzKGQpKSl7YT1qaChiLGEpO2E9RWgoYyxhLDEwNzM3NDE4MjMpO3BmKGMsYSk7cWYoYywxMDczNzQxODIzKTtyZXR1cm59YnJlYWs7Y2FzZSAzOmE9amgoYixhKTthPUNoKGMsYSwxMDczNzQxODIzKTtwZihjLGEpO3FmKGMsMTA3Mzc0MTgyMyk7cmV0dXJufWM9Yy5yZXR1cm59Mz09PWEudGFnJiYoYz1qaChiLGEpLGM9Q2goYSxjLDEwNzM3NDE4MjMpLHBmKGEsYykscWYoYSwxMDczNzQxODIzKSl9XG5mdW5jdGlvbiBtZihhLGIpe3ZhciBjPXIudW5zdGFibGVfZ2V0Q3VycmVudFByaW9yaXR5TGV2ZWwoKSxkPXZvaWQgMDtpZigwPT09KGIubW9kZSYxKSlkPTEwNzM3NDE4MjM7ZWxzZSBpZihLaCYmIU9oKWQ9VTtlbHNle3N3aXRjaChjKXtjYXNlIHIudW5zdGFibGVfSW1tZWRpYXRlUHJpb3JpdHk6ZD0xMDczNzQxODIzO2JyZWFrO2Nhc2Ugci51bnN0YWJsZV9Vc2VyQmxvY2tpbmdQcmlvcml0eTpkPTEwNzM3NDE4MjItMTAqKCgoMTA3Mzc0MTgyMi1hKzE1KS8xMHwwKSsxKTticmVhaztjYXNlIHIudW5zdGFibGVfTm9ybWFsUHJpb3JpdHk6ZD0xMDczNzQxODIyLTI1KigoKDEwNzM3NDE4MjItYSs1MDApLzI1fDApKzEpO2JyZWFrO2Nhc2Ugci51bnN0YWJsZV9Mb3dQcmlvcml0eTpjYXNlIHIudW5zdGFibGVfSWRsZVByaW9yaXR5OmQ9MTticmVhaztkZWZhdWx0OngoXCIzMTNcIil9bnVsbCE9PUxoJiZkPT09VSYmLS1kfWM9PT1yLnVuc3RhYmxlX1VzZXJCbG9ja2luZ1ByaW9yaXR5JiZcbigwPT09Z2l8fGQ8Z2kpJiYoZ2k9ZCk7cmV0dXJuIGR9ZnVuY3Rpb24gZWkoYSxiLGMpe3ZhciBkPWEucGluZ0NhY2hlO251bGwhPT1kJiZkLmRlbGV0ZShiKTtpZihudWxsIT09TGgmJlU9PT1jKUxoPW51bGw7ZWxzZSBpZihiPWEuZWFybGllc3RTdXNwZW5kZWRUaW1lLGQ9YS5sYXRlc3RTdXNwZW5kZWRUaW1lLDAhPT1iJiZjPD1iJiZjPj1kKXthLmRpZEVycm9yPSExO2I9YS5sYXRlc3RQaW5nZWRUaW1lO2lmKDA9PT1ifHxiPmMpYS5sYXRlc3RQaW5nZWRUaW1lPWM7ZGYoYyxhKTtjPWEuZXhwaXJhdGlvblRpbWU7MCE9PWMmJlhoKGEsYyl9fWZ1bmN0aW9uIEFoKGEsYil7dmFyIGM9YS5zdGF0ZU5vZGU7bnVsbCE9PWMmJmMuZGVsZXRlKGIpO2I9bGYoKTtiPW1mKGIsYSk7YT1oaShhLGIpO251bGwhPT1hJiYoY2YoYSxiKSxiPWEuZXhwaXJhdGlvblRpbWUsMCE9PWImJlhoKGEsYikpfVxuZnVuY3Rpb24gaGkoYSxiKXthLmV4cGlyYXRpb25UaW1lPGImJihhLmV4cGlyYXRpb25UaW1lPWIpO3ZhciBjPWEuYWx0ZXJuYXRlO251bGwhPT1jJiZjLmV4cGlyYXRpb25UaW1lPGImJihjLmV4cGlyYXRpb25UaW1lPWIpO3ZhciBkPWEucmV0dXJuLGU9bnVsbDtpZihudWxsPT09ZCYmMz09PWEudGFnKWU9YS5zdGF0ZU5vZGU7ZWxzZSBmb3IoO251bGwhPT1kOyl7Yz1kLmFsdGVybmF0ZTtkLmNoaWxkRXhwaXJhdGlvblRpbWU8YiYmKGQuY2hpbGRFeHBpcmF0aW9uVGltZT1iKTtudWxsIT09YyYmYy5jaGlsZEV4cGlyYXRpb25UaW1lPGImJihjLmNoaWxkRXhwaXJhdGlvblRpbWU9Yik7aWYobnVsbD09PWQucmV0dXJuJiYzPT09ZC50YWcpe2U9ZC5zdGF0ZU5vZGU7YnJlYWt9ZD1kLnJldHVybn1yZXR1cm4gZX1cbmZ1bmN0aW9uIHFmKGEsYil7YT1oaShhLGIpO251bGwhPT1hJiYoIUtoJiYwIT09VSYmYj5VJiZTaCgpLGNmKGEsYiksS2gmJiFPaCYmTGg9PT1hfHxYaChhLGEuZXhwaXJhdGlvblRpbWUpLGlpPmppJiYoaWk9MCx4KFwiMTg1XCIpKSl9ZnVuY3Rpb24ga2koYSxiLGMsZCxlKXtyZXR1cm4gci51bnN0YWJsZV9ydW5XaXRoUHJpb3JpdHkoci51bnN0YWJsZV9JbW1lZGlhdGVQcmlvcml0eSxmdW5jdGlvbigpe3JldHVybiBhKGIsYyxkLGUpfSl9dmFyIGxpPW51bGwsWT1udWxsLG1pPTAsbmk9dm9pZCAwLFc9ITEsb2k9bnVsbCxaPTAsZ2k9MCxwaT0hMSxxaT1udWxsLFg9ITEscmk9ITEsc2k9bnVsbCx0aT1yLnVuc3RhYmxlX25vdygpLHVpPTEwNzM3NDE4MjItKHRpLzEwfDApLHZpPXVpLGppPTUwLGlpPTAsd2k9bnVsbDtmdW5jdGlvbiB4aSgpe3VpPTEwNzM3NDE4MjItKChyLnVuc3RhYmxlX25vdygpLXRpKS8xMHwwKX1cbmZ1bmN0aW9uIHlpKGEsYil7aWYoMCE9PW1pKXtpZihiPG1pKXJldHVybjtudWxsIT09bmkmJnIudW5zdGFibGVfY2FuY2VsQ2FsbGJhY2sobmkpfW1pPWI7YT1yLnVuc3RhYmxlX25vdygpLXRpO25pPXIudW5zdGFibGVfc2NoZWR1bGVDYWxsYmFjayh6aSx7dGltZW91dDoxMCooMTA3Mzc0MTgyMi1iKS1hfSl9ZnVuY3Rpb24gZmkoYSxiLGMsZCxlKXthLmV4cGlyYXRpb25UaW1lPWQ7MCE9PWV8fGRpKCk/MDxlJiYoYS50aW1lb3V0SGFuZGxlPXllKEFpLmJpbmQobnVsbCxhLGIsYyksZSkpOihhLnBlbmRpbmdDb21taXRFeHBpcmF0aW9uVGltZT1jLGEuZmluaXNoZWRXb3JrPWIpfWZ1bmN0aW9uIEFpKGEsYixjKXthLnBlbmRpbmdDb21taXRFeHBpcmF0aW9uVGltZT1jO2EuZmluaXNoZWRXb3JrPWI7eGkoKTt2aT11aTtCaShhLGMpfWZ1bmN0aW9uICRoKGEsYil7YS5leHBpcmF0aW9uVGltZT1iO2EuZmluaXNoZWRXb3JrPW51bGx9XG5mdW5jdGlvbiBsZigpe2lmKFcpcmV0dXJuIHZpO0NpKCk7aWYoMD09PVp8fDE9PT1aKXhpKCksdmk9dWk7cmV0dXJuIHZpfWZ1bmN0aW9uIFhoKGEsYil7bnVsbD09PWEubmV4dFNjaGVkdWxlZFJvb3Q/KGEuZXhwaXJhdGlvblRpbWU9YixudWxsPT09WT8obGk9WT1hLGEubmV4dFNjaGVkdWxlZFJvb3Q9YSk6KFk9WS5uZXh0U2NoZWR1bGVkUm9vdD1hLFkubmV4dFNjaGVkdWxlZFJvb3Q9bGkpKTpiPmEuZXhwaXJhdGlvblRpbWUmJihhLmV4cGlyYXRpb25UaW1lPWIpO1d8fChYP3JpJiYob2k9YSxaPTEwNzM3NDE4MjMsRGkoYSwxMDczNzQxODIzLCExKSk6MTA3Mzc0MTgyMz09PWI/WWgoMTA3Mzc0MTgyMywhMSk6eWkoYSxiKSl9XG5mdW5jdGlvbiBDaSgpe3ZhciBhPTAsYj1udWxsO2lmKG51bGwhPT1ZKWZvcih2YXIgYz1ZLGQ9bGk7bnVsbCE9PWQ7KXt2YXIgZT1kLmV4cGlyYXRpb25UaW1lO2lmKDA9PT1lKXtudWxsPT09Y3x8bnVsbD09PVk/eChcIjI0NFwiKTp2b2lkIDA7aWYoZD09PWQubmV4dFNjaGVkdWxlZFJvb3Qpe2xpPVk9ZC5uZXh0U2NoZWR1bGVkUm9vdD1udWxsO2JyZWFrfWVsc2UgaWYoZD09PWxpKWxpPWU9ZC5uZXh0U2NoZWR1bGVkUm9vdCxZLm5leHRTY2hlZHVsZWRSb290PWUsZC5uZXh0U2NoZWR1bGVkUm9vdD1udWxsO2Vsc2UgaWYoZD09PVkpe1k9YztZLm5leHRTY2hlZHVsZWRSb290PWxpO2QubmV4dFNjaGVkdWxlZFJvb3Q9bnVsbDticmVha31lbHNlIGMubmV4dFNjaGVkdWxlZFJvb3Q9ZC5uZXh0U2NoZWR1bGVkUm9vdCxkLm5leHRTY2hlZHVsZWRSb290PW51bGw7ZD1jLm5leHRTY2hlZHVsZWRSb290fWVsc2V7ZT5hJiYoYT1lLGI9ZCk7aWYoZD09PVkpYnJlYWs7aWYoMTA3Mzc0MTgyMz09PVxuYSlicmVhaztjPWQ7ZD1kLm5leHRTY2hlZHVsZWRSb290fX1vaT1iO1o9YX12YXIgRWk9ITE7ZnVuY3Rpb24gZGkoKXtyZXR1cm4gRWk/ITA6ci51bnN0YWJsZV9zaG91bGRZaWVsZCgpP0VpPSEwOiExfWZ1bmN0aW9uIHppKCl7dHJ5e2lmKCFkaSgpJiZudWxsIT09bGkpe3hpKCk7dmFyIGE9bGk7ZG97dmFyIGI9YS5leHBpcmF0aW9uVGltZTswIT09YiYmdWk8PWImJihhLm5leHRFeHBpcmF0aW9uVGltZVRvV29ya09uPXVpKTthPWEubmV4dFNjaGVkdWxlZFJvb3R9d2hpbGUoYSE9PWxpKX1ZaCgwLCEwKX1maW5hbGx5e0VpPSExfX1cbmZ1bmN0aW9uIFloKGEsYil7Q2koKTtpZihiKWZvcih4aSgpLHZpPXVpO251bGwhPT1vaSYmMCE9PVomJmE8PVomJiEoRWkmJnVpPlopOylEaShvaSxaLHVpPlopLENpKCkseGkoKSx2aT11aTtlbHNlIGZvcig7bnVsbCE9PW9pJiYwIT09WiYmYTw9WjspRGkob2ksWiwhMSksQ2koKTtiJiYobWk9MCxuaT1udWxsKTswIT09WiYmeWkob2ksWik7aWk9MDt3aT1udWxsO2lmKG51bGwhPT1zaSlmb3IoYT1zaSxzaT1udWxsLGI9MDtiPGEubGVuZ3RoO2IrKyl7dmFyIGM9YVtiXTt0cnl7Yy5fb25Db21wbGV0ZSgpfWNhdGNoKGQpe3BpfHwocGk9ITAscWk9ZCl9fWlmKHBpKXRocm93IGE9cWkscWk9bnVsbCxwaT0hMSxhO31mdW5jdGlvbiBCaShhLGIpe1c/eChcIjI1M1wiKTp2b2lkIDA7b2k9YTtaPWI7RGkoYSxiLCExKTtZaCgxMDczNzQxODIzLCExKX1cbmZ1bmN0aW9uIERpKGEsYixjKXtXP3goXCIyNDVcIik6dm9pZCAwO1c9ITA7aWYoYyl7dmFyIGQ9YS5maW5pc2hlZFdvcms7bnVsbCE9PWQ/RmkoYSxkLGIpOihhLmZpbmlzaGVkV29yaz1udWxsLGQ9YS50aW1lb3V0SGFuZGxlLC0xIT09ZCYmKGEudGltZW91dEhhbmRsZT0tMSx6ZShkKSksY2koYSxjKSxkPWEuZmluaXNoZWRXb3JrLG51bGwhPT1kJiYoZGkoKT9hLmZpbmlzaGVkV29yaz1kOkZpKGEsZCxiKSkpfWVsc2UgZD1hLmZpbmlzaGVkV29yayxudWxsIT09ZD9GaShhLGQsYik6KGEuZmluaXNoZWRXb3JrPW51bGwsZD1hLnRpbWVvdXRIYW5kbGUsLTEhPT1kJiYoYS50aW1lb3V0SGFuZGxlPS0xLHplKGQpKSxjaShhLGMpLGQ9YS5maW5pc2hlZFdvcmssbnVsbCE9PWQmJkZpKGEsZCxiKSk7Vz0hMX1cbmZ1bmN0aW9uIEZpKGEsYixjKXt2YXIgZD1hLmZpcnN0QmF0Y2g7aWYobnVsbCE9PWQmJmQuX2V4cGlyYXRpb25UaW1lPj1jJiYobnVsbD09PXNpP3NpPVtkXTpzaS5wdXNoKGQpLGQuX2RlZmVyKSl7YS5maW5pc2hlZFdvcms9YjthLmV4cGlyYXRpb25UaW1lPTA7cmV0dXJufWEuZmluaXNoZWRXb3JrPW51bGw7YT09PXdpP2lpKys6KHdpPWEsaWk9MCk7ci51bnN0YWJsZV9ydW5XaXRoUHJpb3JpdHkoci51bnN0YWJsZV9JbW1lZGlhdGVQcmlvcml0eSxmdW5jdGlvbigpe1poKGEsYil9KX1mdW5jdGlvbiBEaChhKXtudWxsPT09b2k/eChcIjI0NlwiKTp2b2lkIDA7b2kuZXhwaXJhdGlvblRpbWU9MDtwaXx8KHBpPSEwLHFpPWEpfWZ1bmN0aW9uIEdpKGEsYil7dmFyIGM9WDtYPSEwO3RyeXtyZXR1cm4gYShiKX1maW5hbGx5eyhYPWMpfHxXfHxZaCgxMDczNzQxODIzLCExKX19XG5mdW5jdGlvbiBIaShhLGIpe2lmKFgmJiFyaSl7cmk9ITA7dHJ5e3JldHVybiBhKGIpfWZpbmFsbHl7cmk9ITF9fXJldHVybiBhKGIpfWZ1bmN0aW9uIElpKGEsYixjKXtYfHxXfHwwPT09Z2l8fChZaChnaSwhMSksZ2k9MCk7dmFyIGQ9WDtYPSEwO3RyeXtyZXR1cm4gci51bnN0YWJsZV9ydW5XaXRoUHJpb3JpdHkoci51bnN0YWJsZV9Vc2VyQmxvY2tpbmdQcmlvcml0eSxmdW5jdGlvbigpe3JldHVybiBhKGIsYyl9KX1maW5hbGx5eyhYPWQpfHxXfHxZaCgxMDczNzQxODIzLCExKX19XG5mdW5jdGlvbiBKaShhLGIsYyxkLGUpe3ZhciBmPWIuY3VycmVudDthOmlmKGMpe2M9Yy5fcmVhY3RJbnRlcm5hbEZpYmVyO2I6ezI9PT1lZChjKSYmMT09PWMudGFnP3ZvaWQgMDp4KFwiMTcwXCIpO3ZhciBnPWM7ZG97c3dpdGNoKGcudGFnKXtjYXNlIDM6Zz1nLnN0YXRlTm9kZS5jb250ZXh0O2JyZWFrIGI7Y2FzZSAxOmlmKEooZy50eXBlKSl7Zz1nLnN0YXRlTm9kZS5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZE1lcmdlZENoaWxkQ29udGV4dDticmVhayBifX1nPWcucmV0dXJufXdoaWxlKG51bGwhPT1nKTt4KFwiMTcxXCIpO2c9dm9pZCAwfWlmKDE9PT1jLnRhZyl7dmFyIGg9Yy50eXBlO2lmKEooaCkpe2M9TmUoYyxoLGcpO2JyZWFrIGF9fWM9Z31lbHNlIGM9SGU7bnVsbD09PWIuY29udGV4dD9iLmNvbnRleHQ9YzpiLnBlbmRpbmdDb250ZXh0PWM7Yj1lO2U9bmYoZCk7ZS5wYXlsb2FkPXtlbGVtZW50OmF9O2I9dm9pZCAwPT09Yj9udWxsOmI7bnVsbCE9PWImJihlLmNhbGxiYWNrPWIpO1xub2YoKTtwZihmLGUpO3FmKGYsZCk7cmV0dXJuIGR9ZnVuY3Rpb24gS2koYSxiLGMsZCl7dmFyIGU9Yi5jdXJyZW50LGY9bGYoKTtlPW1mKGYsZSk7cmV0dXJuIEppKGEsYixjLGUsZCl9ZnVuY3Rpb24gTGkoYSl7YT1hLmN1cnJlbnQ7aWYoIWEuY2hpbGQpcmV0dXJuIG51bGw7c3dpdGNoKGEuY2hpbGQudGFnKXtjYXNlIDU6cmV0dXJuIGEuY2hpbGQuc3RhdGVOb2RlO2RlZmF1bHQ6cmV0dXJuIGEuY2hpbGQuc3RhdGVOb2RlfX1mdW5jdGlvbiBNaShhLGIsYyl7dmFyIGQ9Mzxhcmd1bWVudHMubGVuZ3RoJiZ2b2lkIDAhPT1hcmd1bWVudHNbM10/YXJndW1lbnRzWzNdOm51bGw7cmV0dXJueyQkdHlwZW9mOldiLGtleTpudWxsPT1kP251bGw6XCJcIitkLGNoaWxkcmVuOmEsY29udGFpbmVySW5mbzpiLGltcGxlbWVudGF0aW9uOmN9fVxuQWI9ZnVuY3Rpb24oYSxiLGMpe3N3aXRjaChiKXtjYXNlIFwiaW5wdXRcIjp5YyhhLGMpO2I9Yy5uYW1lO2lmKFwicmFkaW9cIj09PWMudHlwZSYmbnVsbCE9Yil7Zm9yKGM9YTtjLnBhcmVudE5vZGU7KWM9Yy5wYXJlbnROb2RlO2M9Yy5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbbmFtZT1cIitKU09OLnN0cmluZ2lmeShcIlwiK2IpKyddW3R5cGU9XCJyYWRpb1wiXScpO2ZvcihiPTA7YjxjLmxlbmd0aDtiKyspe3ZhciBkPWNbYl07aWYoZCE9PWEmJmQuZm9ybT09PWEuZm9ybSl7dmFyIGU9S2EoZCk7ZT92b2lkIDA6eChcIjkwXCIpO1NiKGQpO3ljKGQsZSl9fX1icmVhaztjYXNlIFwidGV4dGFyZWFcIjpkZShhLGMpO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjpiPWMudmFsdWUsbnVsbCE9YiYmYWUoYSwhIWMubXVsdGlwbGUsYiwhMSl9fTtcbmZ1bmN0aW9uIE5pKGEpe3ZhciBiPTEwNzM3NDE4MjItMjUqKCgoMTA3Mzc0MTgyMi1sZigpKzUwMCkvMjV8MCkrMSk7Yj49SmgmJihiPUpoLTEpO3RoaXMuX2V4cGlyYXRpb25UaW1lPUpoPWI7dGhpcy5fcm9vdD1hO3RoaXMuX2NhbGxiYWNrcz10aGlzLl9uZXh0PW51bGw7dGhpcy5faGFzQ2hpbGRyZW49dGhpcy5fZGlkQ29tcGxldGU9ITE7dGhpcy5fY2hpbGRyZW49bnVsbDt0aGlzLl9kZWZlcj0hMH1OaS5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKGEpe3RoaXMuX2RlZmVyP3ZvaWQgMDp4KFwiMjUwXCIpO3RoaXMuX2hhc0NoaWxkcmVuPSEwO3RoaXMuX2NoaWxkcmVuPWE7dmFyIGI9dGhpcy5fcm9vdC5faW50ZXJuYWxSb290LGM9dGhpcy5fZXhwaXJhdGlvblRpbWUsZD1uZXcgT2k7SmkoYSxiLG51bGwsYyxkLl9vbkNvbW1pdCk7cmV0dXJuIGR9O1xuTmkucHJvdG90eXBlLnRoZW49ZnVuY3Rpb24oYSl7aWYodGhpcy5fZGlkQ29tcGxldGUpYSgpO2Vsc2V7dmFyIGI9dGhpcy5fY2FsbGJhY2tzO251bGw9PT1iJiYoYj10aGlzLl9jYWxsYmFja3M9W10pO2IucHVzaChhKX19O1xuTmkucHJvdG90eXBlLmNvbW1pdD1mdW5jdGlvbigpe3ZhciBhPXRoaXMuX3Jvb3QuX2ludGVybmFsUm9vdCxiPWEuZmlyc3RCYXRjaDt0aGlzLl9kZWZlciYmbnVsbCE9PWI/dm9pZCAwOngoXCIyNTFcIik7aWYodGhpcy5faGFzQ2hpbGRyZW4pe3ZhciBjPXRoaXMuX2V4cGlyYXRpb25UaW1lO2lmKGIhPT10aGlzKXt0aGlzLl9oYXNDaGlsZHJlbiYmKGM9dGhpcy5fZXhwaXJhdGlvblRpbWU9Yi5fZXhwaXJhdGlvblRpbWUsdGhpcy5yZW5kZXIodGhpcy5fY2hpbGRyZW4pKTtmb3IodmFyIGQ9bnVsbCxlPWI7ZSE9PXRoaXM7KWQ9ZSxlPWUuX25leHQ7bnVsbD09PWQ/eChcIjI1MVwiKTp2b2lkIDA7ZC5fbmV4dD1lLl9uZXh0O3RoaXMuX25leHQ9YjthLmZpcnN0QmF0Y2g9dGhpc310aGlzLl9kZWZlcj0hMTtCaShhLGMpO2I9dGhpcy5fbmV4dDt0aGlzLl9uZXh0PW51bGw7Yj1hLmZpcnN0QmF0Y2g9YjtudWxsIT09YiYmYi5faGFzQ2hpbGRyZW4mJmIucmVuZGVyKGIuX2NoaWxkcmVuKX1lbHNlIHRoaXMuX25leHQ9XG5udWxsLHRoaXMuX2RlZmVyPSExfTtOaS5wcm90b3R5cGUuX29uQ29tcGxldGU9ZnVuY3Rpb24oKXtpZighdGhpcy5fZGlkQ29tcGxldGUpe3RoaXMuX2RpZENvbXBsZXRlPSEwO3ZhciBhPXRoaXMuX2NhbGxiYWNrcztpZihudWxsIT09YSlmb3IodmFyIGI9MDtiPGEubGVuZ3RoO2IrKykoMCxhW2JdKSgpfX07ZnVuY3Rpb24gT2koKXt0aGlzLl9jYWxsYmFja3M9bnVsbDt0aGlzLl9kaWRDb21taXQ9ITE7dGhpcy5fb25Db21taXQ9dGhpcy5fb25Db21taXQuYmluZCh0aGlzKX1PaS5wcm90b3R5cGUudGhlbj1mdW5jdGlvbihhKXtpZih0aGlzLl9kaWRDb21taXQpYSgpO2Vsc2V7dmFyIGI9dGhpcy5fY2FsbGJhY2tzO251bGw9PT1iJiYoYj10aGlzLl9jYWxsYmFja3M9W10pO2IucHVzaChhKX19O1xuT2kucHJvdG90eXBlLl9vbkNvbW1pdD1mdW5jdGlvbigpe2lmKCF0aGlzLl9kaWRDb21taXQpe3RoaXMuX2RpZENvbW1pdD0hMDt2YXIgYT10aGlzLl9jYWxsYmFja3M7aWYobnVsbCE9PWEpZm9yKHZhciBiPTA7YjxhLmxlbmd0aDtiKyspe3ZhciBjPWFbYl07XCJmdW5jdGlvblwiIT09dHlwZW9mIGM/eChcIjE5MVwiLGMpOnZvaWQgMDtjKCl9fX07XG5mdW5jdGlvbiBQaShhLGIsYyl7Yj1LKDMsbnVsbCxudWxsLGI/MzowKTthPXtjdXJyZW50OmIsY29udGFpbmVySW5mbzphLHBlbmRpbmdDaGlsZHJlbjpudWxsLHBpbmdDYWNoZTpudWxsLGVhcmxpZXN0UGVuZGluZ1RpbWU6MCxsYXRlc3RQZW5kaW5nVGltZTowLGVhcmxpZXN0U3VzcGVuZGVkVGltZTowLGxhdGVzdFN1c3BlbmRlZFRpbWU6MCxsYXRlc3RQaW5nZWRUaW1lOjAsZGlkRXJyb3I6ITEscGVuZGluZ0NvbW1pdEV4cGlyYXRpb25UaW1lOjAsZmluaXNoZWRXb3JrOm51bGwsdGltZW91dEhhbmRsZTotMSxjb250ZXh0Om51bGwscGVuZGluZ0NvbnRleHQ6bnVsbCxoeWRyYXRlOmMsbmV4dEV4cGlyYXRpb25UaW1lVG9Xb3JrT246MCxleHBpcmF0aW9uVGltZTowLGZpcnN0QmF0Y2g6bnVsbCxuZXh0U2NoZWR1bGVkUm9vdDpudWxsfTt0aGlzLl9pbnRlcm5hbFJvb3Q9Yi5zdGF0ZU5vZGU9YX1cblBpLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLl9pbnRlcm5hbFJvb3QsZD1uZXcgT2k7Yj12b2lkIDA9PT1iP251bGw6YjtudWxsIT09YiYmZC50aGVuKGIpO0tpKGEsYyxudWxsLGQuX29uQ29tbWl0KTtyZXR1cm4gZH07UGkucHJvdG90eXBlLnVubW91bnQ9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5faW50ZXJuYWxSb290LGM9bmV3IE9pO2E9dm9pZCAwPT09YT9udWxsOmE7bnVsbCE9PWEmJmMudGhlbihhKTtLaShudWxsLGIsbnVsbCxjLl9vbkNvbW1pdCk7cmV0dXJuIGN9O1BpLnByb3RvdHlwZS5sZWdhY3lfcmVuZGVyU3VidHJlZUludG9Db250YWluZXI9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPXRoaXMuX2ludGVybmFsUm9vdCxlPW5ldyBPaTtjPXZvaWQgMD09PWM/bnVsbDpjO251bGwhPT1jJiZlLnRoZW4oYyk7S2koYixkLGEsZS5fb25Db21taXQpO3JldHVybiBlfTtcblBpLnByb3RvdHlwZS5jcmVhdGVCYXRjaD1mdW5jdGlvbigpe3ZhciBhPW5ldyBOaSh0aGlzKSxiPWEuX2V4cGlyYXRpb25UaW1lLGM9dGhpcy5faW50ZXJuYWxSb290LGQ9Yy5maXJzdEJhdGNoO2lmKG51bGw9PT1kKWMuZmlyc3RCYXRjaD1hLGEuX25leHQ9bnVsbDtlbHNle2ZvcihjPW51bGw7bnVsbCE9PWQmJmQuX2V4cGlyYXRpb25UaW1lPj1iOyljPWQsZD1kLl9uZXh0O2EuX25leHQ9ZDtudWxsIT09YyYmKGMuX25leHQ9YSl9cmV0dXJuIGF9O2Z1bmN0aW9uIFFpKGEpe3JldHVybiEoIWF8fDEhPT1hLm5vZGVUeXBlJiY5IT09YS5ub2RlVHlwZSYmMTEhPT1hLm5vZGVUeXBlJiYoOCE9PWEubm9kZVR5cGV8fFwiIHJlYWN0LW1vdW50LXBvaW50LXVuc3RhYmxlIFwiIT09YS5ub2RlVmFsdWUpKX1HYj1HaTtIYj1JaTtJYj1mdW5jdGlvbigpe1d8fDA9PT1naXx8KFloKGdpLCExKSxnaT0wKX07XG5mdW5jdGlvbiBSaShhLGIpe2J8fChiPWE/OT09PWEubm9kZVR5cGU/YS5kb2N1bWVudEVsZW1lbnQ6YS5maXJzdENoaWxkOm51bGwsYj0hKCFifHwxIT09Yi5ub2RlVHlwZXx8IWIuaGFzQXR0cmlidXRlKFwiZGF0YS1yZWFjdHJvb3RcIikpKTtpZighYilmb3IodmFyIGM7Yz1hLmxhc3RDaGlsZDspYS5yZW1vdmVDaGlsZChjKTtyZXR1cm4gbmV3IFBpKGEsITEsYil9XG5mdW5jdGlvbiBTaShhLGIsYyxkLGUpe3ZhciBmPWMuX3JlYWN0Um9vdENvbnRhaW5lcjtpZihmKXtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZSl7dmFyIGc9ZTtlPWZ1bmN0aW9uKCl7dmFyIGE9TGkoZi5faW50ZXJuYWxSb290KTtnLmNhbGwoYSl9fW51bGwhPWE/Zi5sZWdhY3lfcmVuZGVyU3VidHJlZUludG9Db250YWluZXIoYSxiLGUpOmYucmVuZGVyKGIsZSl9ZWxzZXtmPWMuX3JlYWN0Um9vdENvbnRhaW5lcj1SaShjLGQpO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBlKXt2YXIgaD1lO2U9ZnVuY3Rpb24oKXt2YXIgYT1MaShmLl9pbnRlcm5hbFJvb3QpO2guY2FsbChhKX19SGkoZnVuY3Rpb24oKXtudWxsIT1hP2YubGVnYWN5X3JlbmRlclN1YnRyZWVJbnRvQ29udGFpbmVyKGEsYixlKTpmLnJlbmRlcihiLGUpfSl9cmV0dXJuIExpKGYuX2ludGVybmFsUm9vdCl9XG5mdW5jdGlvbiBUaShhLGIpe3ZhciBjPTI8YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09YXJndW1lbnRzWzJdP2FyZ3VtZW50c1syXTpudWxsO1FpKGIpP3ZvaWQgMDp4KFwiMjAwXCIpO3JldHVybiBNaShhLGIsbnVsbCxjKX1cbnZhciBWaT17Y3JlYXRlUG9ydGFsOlRpLGZpbmRET01Ob2RlOmZ1bmN0aW9uKGEpe2lmKG51bGw9PWEpcmV0dXJuIG51bGw7aWYoMT09PWEubm9kZVR5cGUpcmV0dXJuIGE7dmFyIGI9YS5fcmVhY3RJbnRlcm5hbEZpYmVyO3ZvaWQgMD09PWImJihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYS5yZW5kZXI/eChcIjE4OFwiKTp4KFwiMjY4XCIsT2JqZWN0LmtleXMoYSkpKTthPWhkKGIpO2E9bnVsbD09PWE/bnVsbDphLnN0YXRlTm9kZTtyZXR1cm4gYX0saHlkcmF0ZTpmdW5jdGlvbihhLGIsYyl7UWkoYik/dm9pZCAwOngoXCIyMDBcIik7cmV0dXJuIFNpKG51bGwsYSxiLCEwLGMpfSxyZW5kZXI6ZnVuY3Rpb24oYSxiLGMpe1FpKGIpP3ZvaWQgMDp4KFwiMjAwXCIpO3JldHVybiBTaShudWxsLGEsYiwhMSxjKX0sdW5zdGFibGVfcmVuZGVyU3VidHJlZUludG9Db250YWluZXI6ZnVuY3Rpb24oYSxiLGMsZCl7UWkoYyk/dm9pZCAwOngoXCIyMDBcIik7bnVsbD09YXx8dm9pZCAwPT09YS5fcmVhY3RJbnRlcm5hbEZpYmVyP1xueChcIjM4XCIpOnZvaWQgMDtyZXR1cm4gU2koYSxiLGMsITEsZCl9LHVubW91bnRDb21wb25lbnRBdE5vZGU6ZnVuY3Rpb24oYSl7UWkoYSk/dm9pZCAwOngoXCI0MFwiKTtyZXR1cm4gYS5fcmVhY3RSb290Q29udGFpbmVyPyhIaShmdW5jdGlvbigpe1NpKG51bGwsbnVsbCxhLCExLGZ1bmN0aW9uKCl7YS5fcmVhY3RSb290Q29udGFpbmVyPW51bGx9KX0pLCEwKTohMX0sdW5zdGFibGVfY3JlYXRlUG9ydGFsOmZ1bmN0aW9uKCl7cmV0dXJuIFRpLmFwcGx5KHZvaWQgMCxhcmd1bWVudHMpfSx1bnN0YWJsZV9iYXRjaGVkVXBkYXRlczpHaSx1bnN0YWJsZV9pbnRlcmFjdGl2ZVVwZGF0ZXM6SWksZmx1c2hTeW5jOmZ1bmN0aW9uKGEsYil7Vz94KFwiMTg3XCIpOnZvaWQgMDt2YXIgYz1YO1g9ITA7dHJ5e3JldHVybiBraShhLGIpfWZpbmFsbHl7WD1jLFloKDEwNzM3NDE4MjMsITEpfX0sdW5zdGFibGVfY3JlYXRlUm9vdDpVaSx1bnN0YWJsZV9mbHVzaENvbnRyb2xsZWQ6ZnVuY3Rpb24oYSl7dmFyIGI9XG5YO1g9ITA7dHJ5e2tpKGEpfWZpbmFsbHl7KFg9Yil8fFd8fFloKDEwNzM3NDE4MjMsITEpfX0sX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ6e0V2ZW50czpbSWEsSmEsS2EsQmEuaW5qZWN0RXZlbnRQbHVnaW5zQnlOYW1lLHBhLFFhLGZ1bmN0aW9uKGEpe3lhKGEsUGEpfSxFYixGYixEZCxEYV19fTtmdW5jdGlvbiBVaShhLGIpe1FpKGEpP3ZvaWQgMDp4KFwiMjk5XCIsXCJ1bnN0YWJsZV9jcmVhdGVSb290XCIpO3JldHVybiBuZXcgUGkoYSwhMCxudWxsIT1iJiYhMD09PWIuaHlkcmF0ZSl9XG4oZnVuY3Rpb24oYSl7dmFyIGI9YS5maW5kRmliZXJCeUhvc3RJbnN0YW5jZTtyZXR1cm4gVGUobih7fSxhLHtvdmVycmlkZVByb3BzOm51bGwsY3VycmVudERpc3BhdGNoZXJSZWY6VGIuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcixmaW5kSG9zdEluc3RhbmNlQnlGaWJlcjpmdW5jdGlvbihhKXthPWhkKGEpO3JldHVybiBudWxsPT09YT9udWxsOmEuc3RhdGVOb2RlfSxmaW5kRmliZXJCeUhvc3RJbnN0YW5jZTpmdW5jdGlvbihhKXtyZXR1cm4gYj9iKGEpOm51bGx9fSkpfSkoe2ZpbmRGaWJlckJ5SG9zdEluc3RhbmNlOkhhLGJ1bmRsZVR5cGU6MCx2ZXJzaW9uOlwiMTYuOC42XCIscmVuZGVyZXJQYWNrYWdlTmFtZTpcInJlYWN0LWRvbVwifSk7dmFyIFdpPXtkZWZhdWx0OlZpfSxYaT1XaSYmVml8fFdpO21vZHVsZS5leHBvcnRzPVhpLmRlZmF1bHR8fFhpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3NjaGVkdWxlci5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9zY2hlZHVsZXIuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MC4xMy42XG4gKiBzY2hlZHVsZXIucHJvZHVjdGlvbi5taW4uanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGQ9bnVsbCxlPSExLGc9MyxrPS0xLGw9LTEsbT0hMSxuPSExO2Z1bmN0aW9uIHAoKXtpZighbSl7dmFyIGE9ZC5leHBpcmF0aW9uVGltZTtuP3EoKTpuPSEwO3IodCxhKX19XG5mdW5jdGlvbiB1KCl7dmFyIGE9ZCxiPWQubmV4dDtpZihkPT09YilkPW51bGw7ZWxzZXt2YXIgYz1kLnByZXZpb3VzO2Q9Yy5uZXh0PWI7Yi5wcmV2aW91cz1jfWEubmV4dD1hLnByZXZpb3VzPW51bGw7Yz1hLmNhbGxiYWNrO2I9YS5leHBpcmF0aW9uVGltZTthPWEucHJpb3JpdHlMZXZlbDt2YXIgZj1nLFE9bDtnPWE7bD1iO3RyeXt2YXIgaD1jKCl9ZmluYWxseXtnPWYsbD1RfWlmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBoKWlmKGg9e2NhbGxiYWNrOmgscHJpb3JpdHlMZXZlbDphLGV4cGlyYXRpb25UaW1lOmIsbmV4dDpudWxsLHByZXZpb3VzOm51bGx9LG51bGw9PT1kKWQ9aC5uZXh0PWgucHJldmlvdXM9aDtlbHNle2M9bnVsbDthPWQ7ZG97aWYoYS5leHBpcmF0aW9uVGltZT49Yil7Yz1hO2JyZWFrfWE9YS5uZXh0fXdoaWxlKGEhPT1kKTtudWxsPT09Yz9jPWQ6Yz09PWQmJihkPWgscCgpKTtiPWMucHJldmlvdXM7Yi5uZXh0PWMucHJldmlvdXM9aDtoLm5leHQ9YztoLnByZXZpb3VzPVxuYn19ZnVuY3Rpb24gdigpe2lmKC0xPT09ayYmbnVsbCE9PWQmJjE9PT1kLnByaW9yaXR5TGV2ZWwpe209ITA7dHJ5e2RvIHUoKTt3aGlsZShudWxsIT09ZCYmMT09PWQucHJpb3JpdHlMZXZlbCl9ZmluYWxseXttPSExLG51bGwhPT1kP3AoKTpuPSExfX19ZnVuY3Rpb24gdChhKXttPSEwO3ZhciBiPWU7ZT1hO3RyeXtpZihhKWZvcig7bnVsbCE9PWQ7KXt2YXIgYz1leHBvcnRzLnVuc3RhYmxlX25vdygpO2lmKGQuZXhwaXJhdGlvblRpbWU8PWMpe2RvIHUoKTt3aGlsZShudWxsIT09ZCYmZC5leHBpcmF0aW9uVGltZTw9Yyl9ZWxzZSBicmVha31lbHNlIGlmKG51bGwhPT1kKXtkbyB1KCk7d2hpbGUobnVsbCE9PWQmJiF3KCkpfX1maW5hbGx5e209ITEsZT1iLG51bGwhPT1kP3AoKTpuPSExLHYoKX19XG52YXIgeD1EYXRlLHk9XCJmdW5jdGlvblwiPT09dHlwZW9mIHNldFRpbWVvdXQ/c2V0VGltZW91dDp2b2lkIDAsej1cImZ1bmN0aW9uXCI9PT10eXBlb2YgY2xlYXJUaW1lb3V0P2NsZWFyVGltZW91dDp2b2lkIDAsQT1cImZ1bmN0aW9uXCI9PT10eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lP3JlcXVlc3RBbmltYXRpb25GcmFtZTp2b2lkIDAsQj1cImZ1bmN0aW9uXCI9PT10eXBlb2YgY2FuY2VsQW5pbWF0aW9uRnJhbWU/Y2FuY2VsQW5pbWF0aW9uRnJhbWU6dm9pZCAwLEMsRDtmdW5jdGlvbiBFKGEpe0M9QShmdW5jdGlvbihiKXt6KEQpO2EoYil9KTtEPXkoZnVuY3Rpb24oKXtCKEMpO2EoZXhwb3J0cy51bnN0YWJsZV9ub3coKSl9LDEwMCl9XG5pZihcIm9iamVjdFwiPT09dHlwZW9mIHBlcmZvcm1hbmNlJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgcGVyZm9ybWFuY2Uubm93KXt2YXIgRj1wZXJmb3JtYW5jZTtleHBvcnRzLnVuc3RhYmxlX25vdz1mdW5jdGlvbigpe3JldHVybiBGLm5vdygpfX1lbHNlIGV4cG9ydHMudW5zdGFibGVfbm93PWZ1bmN0aW9uKCl7cmV0dXJuIHgubm93KCl9O3ZhciByLHEsdyxHPW51bGw7XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiB3aW5kb3c/Rz13aW5kb3c6XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBnbG9iYWwmJihHPWdsb2JhbCk7XG5pZihHJiZHLl9zY2hlZE1vY2spe3ZhciBIPUcuX3NjaGVkTW9jaztyPUhbMF07cT1IWzFdO3c9SFsyXTtleHBvcnRzLnVuc3RhYmxlX25vdz1IWzNdfWVsc2UgaWYoXCJ1bmRlZmluZWRcIj09PXR5cGVvZiB3aW5kb3d8fFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBNZXNzYWdlQ2hhbm5lbCl7dmFyIEk9bnVsbCxKPWZ1bmN0aW9uKGEpe2lmKG51bGwhPT1JKXRyeXtJKGEpfWZpbmFsbHl7ST1udWxsfX07cj1mdW5jdGlvbihhKXtudWxsIT09ST9zZXRUaW1lb3V0KHIsMCxhKTooST1hLHNldFRpbWVvdXQoSiwwLCExKSl9O3E9ZnVuY3Rpb24oKXtJPW51bGx9O3c9ZnVuY3Rpb24oKXtyZXR1cm4hMX19ZWxzZXtcInVuZGVmaW5lZFwiIT09dHlwZW9mIGNvbnNvbGUmJihcImZ1bmN0aW9uXCIhPT10eXBlb2YgQSYmY29uc29sZS5lcnJvcihcIlRoaXMgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgcmVxdWVzdEFuaW1hdGlvbkZyYW1lLiBNYWtlIHN1cmUgdGhhdCB5b3UgbG9hZCBhIHBvbHlmaWxsIGluIG9sZGVyIGJyb3dzZXJzLiBodHRwczovL2ZiLm1lL3JlYWN0LXBvbHlmaWxsc1wiKSxcblwiZnVuY3Rpb25cIiE9PXR5cGVvZiBCJiZjb25zb2xlLmVycm9yKFwiVGhpcyBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBjYW5jZWxBbmltYXRpb25GcmFtZS4gTWFrZSBzdXJlIHRoYXQgeW91IGxvYWQgYSBwb2x5ZmlsbCBpbiBvbGRlciBicm93c2Vycy4gaHR0cHM6Ly9mYi5tZS9yZWFjdC1wb2x5ZmlsbHNcIikpO3ZhciBLPW51bGwsTD0hMSxNPS0xLE49ITEsTz0hMSxQPTAsUj0zMyxTPTMzO3c9ZnVuY3Rpb24oKXtyZXR1cm4gUDw9ZXhwb3J0cy51bnN0YWJsZV9ub3coKX07dmFyIFQ9bmV3IE1lc3NhZ2VDaGFubmVsLFU9VC5wb3J0MjtULnBvcnQxLm9ubWVzc2FnZT1mdW5jdGlvbigpe0w9ITE7dmFyIGE9SyxiPU07Sz1udWxsO009LTE7dmFyIGM9ZXhwb3J0cy51bnN0YWJsZV9ub3coKSxmPSExO2lmKDA+PVAtYylpZigtMSE9PWImJmI8PWMpZj0hMDtlbHNle058fChOPSEwLEUoVikpO0s9YTtNPWI7cmV0dXJufWlmKG51bGwhPT1hKXtPPSEwO3RyeXthKGYpfWZpbmFsbHl7Tz0hMX19fTtcbnZhciBWPWZ1bmN0aW9uKGEpe2lmKG51bGwhPT1LKXtFKFYpO3ZhciBiPWEtUCtTO2I8UyYmUjxTPyg4PmImJihiPTgpLFM9YjxSP1I6Yik6Uj1iO1A9YStTO0x8fChMPSEwLFUucG9zdE1lc3NhZ2Uodm9pZCAwKSl9ZWxzZSBOPSExfTtyPWZ1bmN0aW9uKGEsYil7Sz1hO009YjtPfHwwPmI/VS5wb3N0TWVzc2FnZSh2b2lkIDApOk58fChOPSEwLEUoVikpfTtxPWZ1bmN0aW9uKCl7Sz1udWxsO0w9ITE7TT0tMX19ZXhwb3J0cy51bnN0YWJsZV9JbW1lZGlhdGVQcmlvcml0eT0xO2V4cG9ydHMudW5zdGFibGVfVXNlckJsb2NraW5nUHJpb3JpdHk9MjtleHBvcnRzLnVuc3RhYmxlX05vcm1hbFByaW9yaXR5PTM7ZXhwb3J0cy51bnN0YWJsZV9JZGxlUHJpb3JpdHk9NTtleHBvcnRzLnVuc3RhYmxlX0xvd1ByaW9yaXR5PTQ7XG5leHBvcnRzLnVuc3RhYmxlX3J1bldpdGhQcmlvcml0eT1mdW5jdGlvbihhLGIpe3N3aXRjaChhKXtjYXNlIDE6Y2FzZSAyOmNhc2UgMzpjYXNlIDQ6Y2FzZSA1OmJyZWFrO2RlZmF1bHQ6YT0zfXZhciBjPWcsZj1rO2c9YTtrPWV4cG9ydHMudW5zdGFibGVfbm93KCk7dHJ5e3JldHVybiBiKCl9ZmluYWxseXtnPWMsaz1mLHYoKX19O2V4cG9ydHMudW5zdGFibGVfbmV4dD1mdW5jdGlvbihhKXtzd2l0Y2goZyl7Y2FzZSAxOmNhc2UgMjpjYXNlIDM6dmFyIGI9MzticmVhaztkZWZhdWx0OmI9Z312YXIgYz1nLGY9aztnPWI7az1leHBvcnRzLnVuc3RhYmxlX25vdygpO3RyeXtyZXR1cm4gYSgpfWZpbmFsbHl7Zz1jLGs9Zix2KCl9fTtcbmV4cG9ydHMudW5zdGFibGVfc2NoZWR1bGVDYWxsYmFjaz1mdW5jdGlvbihhLGIpe3ZhciBjPS0xIT09az9rOmV4cG9ydHMudW5zdGFibGVfbm93KCk7aWYoXCJvYmplY3RcIj09PXR5cGVvZiBiJiZudWxsIT09YiYmXCJudW1iZXJcIj09PXR5cGVvZiBiLnRpbWVvdXQpYj1jK2IudGltZW91dDtlbHNlIHN3aXRjaChnKXtjYXNlIDE6Yj1jKy0xO2JyZWFrO2Nhc2UgMjpiPWMrMjUwO2JyZWFrO2Nhc2UgNTpiPWMrMTA3Mzc0MTgyMzticmVhaztjYXNlIDQ6Yj1jKzFFNDticmVhaztkZWZhdWx0OmI9Yys1RTN9YT17Y2FsbGJhY2s6YSxwcmlvcml0eUxldmVsOmcsZXhwaXJhdGlvblRpbWU6YixuZXh0Om51bGwscHJldmlvdXM6bnVsbH07aWYobnVsbD09PWQpZD1hLm5leHQ9YS5wcmV2aW91cz1hLHAoKTtlbHNle2M9bnVsbDt2YXIgZj1kO2Rve2lmKGYuZXhwaXJhdGlvblRpbWU+Yil7Yz1mO2JyZWFrfWY9Zi5uZXh0fXdoaWxlKGYhPT1kKTtudWxsPT09Yz9jPWQ6Yz09PWQmJihkPWEscCgpKTtcbmI9Yy5wcmV2aW91cztiLm5leHQ9Yy5wcmV2aW91cz1hO2EubmV4dD1jO2EucHJldmlvdXM9Yn1yZXR1cm4gYX07ZXhwb3J0cy51bnN0YWJsZV9jYW5jZWxDYWxsYmFjaz1mdW5jdGlvbihhKXt2YXIgYj1hLm5leHQ7aWYobnVsbCE9PWIpe2lmKGI9PT1hKWQ9bnVsbDtlbHNle2E9PT1kJiYoZD1iKTt2YXIgYz1hLnByZXZpb3VzO2MubmV4dD1iO2IucHJldmlvdXM9Y31hLm5leHQ9YS5wcmV2aW91cz1udWxsfX07ZXhwb3J0cy51bnN0YWJsZV93cmFwQ2FsbGJhY2s9ZnVuY3Rpb24oYSl7dmFyIGI9ZztyZXR1cm4gZnVuY3Rpb24oKXt2YXIgYz1nLGY9aztnPWI7az1leHBvcnRzLnVuc3RhYmxlX25vdygpO3RyeXtyZXR1cm4gYS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZmluYWxseXtnPWMsaz1mLHYoKX19fTtleHBvcnRzLnVuc3RhYmxlX2dldEN1cnJlbnRQcmlvcml0eUxldmVsPWZ1bmN0aW9uKCl7cmV0dXJuIGd9O1xuZXhwb3J0cy51bnN0YWJsZV9zaG91bGRZaWVsZD1mdW5jdGlvbigpe3JldHVybiFlJiYobnVsbCE9PWQmJmQuZXhwaXJhdGlvblRpbWU8bHx8dygpKX07ZXhwb3J0cy51bnN0YWJsZV9jb250aW51ZUV4ZWN1dGlvbj1mdW5jdGlvbigpe251bGwhPT1kJiZwKCl9O2V4cG9ydHMudW5zdGFibGVfcGF1c2VFeGVjdXRpb249ZnVuY3Rpb24oKXt9O2V4cG9ydHMudW5zdGFibGVfZ2V0Rmlyc3RDYWxsYmFja05vZGU9ZnVuY3Rpb24oKXtyZXR1cm4gZH07XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkgeyBcXG4gICAgY29sb3I6ICNkOWQ5ZDk7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZiwgR2VvcmdpYSwgc2VyaWY7XFxufVxcblxcbnVsIHtcXG4gICAgYm9yZGVyOiAxcHggIzQwNDA0MCBzb2xpZDtcXG59XFxuXFxubGkgLCBsYWJlbCwgcCB7XFxuICAgIGZvbnQtc2l6ZTogMTFweDtcXG59XFxuXFxuaDQsIGg1LCBoNiB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzMzMzO1xcbn1cXG5cXG5pbnB1dCwgdGV4dGFyZWEgeyBcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjMmIyYjJiO1xcbiAgICBjb2xvcjogI2Q5ZDlkOTtcXG4gICAgb3BhY2l0eTogMC43NTtcXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0YXJlYTtcXG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsMCwwLDAuOSk7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICBwYWRkaW5nOiA3cHg7XFxufVxcblxcbnVsIGxhYmVsIGlucHV0IHtcXG4gICAgd2lkdGg6IDEwcHg7XFxufVxcblxcbnVsLCBsaSB7XFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsMCwwLDAuOSk7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICBwYWRkaW5nOiA3cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDA7XFxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XFxufVxcblxcbmJ1dHRvbiBpe1xcbiAgICBwYWRkaW5nLXJpZ2h0OjRweDtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQ6IHJnYig0MywgNDMsIDQzKTtcXG59XFxuXFxudWwsbGksIHVsIGxhYmVsIHtcXG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcXG59XFxuXFxudWwgbGFiZWw6aG92ZXIsIGxpOmhvdmVyLCAuY29udGVudDpob3ZlcntcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQ6IHJnYig0MywgNDMsIDQzKTtcXG59XFxuXFxuI2luZGV4e1xcbiAgICBtYXJnaW46LTRweDtcXG59XCIsIFwiXCJdKTtcblxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG4vLyBTdHlsZXMuXG5cbmltcG9ydCBcIi4vU3R5bGUuY3NzXCI7XG5cbi8vIENvbXBvbmVudHMuXG5cbmltcG9ydCBBc3NldCBmcm9tIFwiLi9Bc3NldFwiO1xuXG4vLyBFdmVudHMuXG5cbmltcG9ydCB7ZHJvcEhhbmRsZXIsIGRyYWdPdmVySGFuZGxlciwgZHJhZ0xlYXZlSGFuZGxlcn0gZnJvbSBcIi4vUmVkdWNlclwiO1xuXG4vLyBEYiB1dGlscy5cblxuaW1wb3J0IHtmZXRjaEZyb21EQiwgd3JpdGVUb0RCfSBmcm9tIFwiLi9kYlwiO1xuXG5jbGFzcyBBc3NldHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNsYXNzOiBcImRyb3Bfem9uZVwiLFxuICAgICAgICAgICAgaW1hZ2VVUkw6XCJcIixcbiAgICAgICAgICAgIGFzc2V0czogW11cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy53cml0ZVRvREIgPSB3cml0ZVRvREIuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBhcHBlbmRUb0JvZHkoZmlsZSl7XG4gICAgICAgIHZhciBiaW4gPSB0aGlzLnJlc3VsdDtcbiAgICAgICAgdmFyIG5ld0ZpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmV3RmlsZS5pbm5lckhUTUwgPSAnTG9hZGVkIDogJyArIGZpbGUubmFtZSArICcgc2l6ZSAnICsgZmlsZS5zaXplICsgJyBCJztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChuZXdGaWxlKTtcblxuXG4gICAgICAgIHZhciBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBpbWcuZmlsZSA9IGZpbGU7XG4gICAgICAgIGltZy5zcmMgPSBiaW47XG4gICAgICAgIG5ld0ZpbGUuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgbGV0IGFzc2V0cyA9IHRoaXMuc3RhdGUuYXNzZXRzLm1hcChpdGVtPT4gPEFzc2V0IGltYWdlVVJMPXtpdGVtLnJlc3VsdH0vPik7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnRzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZWxlbWVudHMtdGFiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2V0c1xuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtmZXRjaEZyb21EQi5iaW5kKHRoaXMpfT5Mb2FkIEFzc2V0czwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRHJvcD17ZHJvcEhhbmRsZXIuYmluZCh0aGlzKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EcmFnT3Zlcj17ZHJhZ092ZXJIYW5kbGVyLmJpbmQodGhpcyl9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRHJhZ0xlYXZlPXtkcmFnTGVhdmVIYW5kbGVyLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5EcmFnIG9uZSBvciBtb3JlIGZpbGVzIHRvIHRoaXMgRHJvcCBab25lIC4uLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjb250YWluXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YXNzZXRzfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBc3NldHM7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5kcm9wX3pvbmUge1xcbiAgICBib3JkZXI6IDFweCBsaWdodGdyYXkgZGFzaGVkO1xcbiAgICAgICAgd2lkdGg6ICAyMDBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gIH1cXG5cXG4gIC5kcmFnX292ZXIge1xcbiAgICBib3JkZXI6IDJweCBsaWdodGdyYXkgZGFzaGVkO1xcbiAgICAgICAgd2lkdGg6ICAyMDBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gIH1cXG5cXG4gIC50aW55VGh1bWJuYWlsLFxcbiAgLnRpbnlUaHVtYm5haWwgaW1ne1xcbiAgICB3aWR0aDoyMDBweDtcXG4gIH1cXG5cXG4gIC5jb250YWlue1xcbiAgICBtYXgtaGVpZ2h0OiA0MDBweDtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gIH1cXG4gIFwiLCBcIlwiXSk7XG5cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCAgXCIuL1N0eWxlLmNzc1wiO1xuXG5jbGFzcyBBc3NldCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge307XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIC8vIFJlbW92ZSB0aGlzLnByb3BzLmluZGV4LCBpbnN0ZWFkIHVzZSB0aGlzIGVsZW1lbnQgaW5zdGFuY2UgaW5kZXguIFJlbW92ZXMgZHVwbGljYXRlIGNvZGVcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGlueVRodW1ibmFpbFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0aGlzLnByb3BzLmltYWdlVVJMfT48L2ltZz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXNzZXQ7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zZWxlY3RlZCwgLmdyZWVuIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxuICAgIGJhY2tncm91bmQ6IHJnYig0MywgNDMsIDQzKTtcXG59XFxuXFxuLmJhY2tncm91bmQge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNjQsIDY0LCA2NCk7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzMzMzO1xcbn1cXG5cXG4uY29tcG9uZW50IHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5jb21wb25lbnQgLmNvbXBvbmVudE5hbWV7XFxuICAgIHBhZGRpbmc6N3B4O1xcbn1cXG5cXG4udGh1bWJuYWlsIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxufVwiLCBcIlwiXSk7XG5cbiIsImltcG9ydCBpbmRleGVkREIgZnJvbSBcIi4uL1V0aWxpdGllcy9MaWJyYXJpZXMvaW5kZXhlZERCL2luZGV4ZURCXCJcbmV4cG9ydCBmdW5jdGlvbiBkcm9wSGFuZGxlcihldikge1xuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBbXS5mb3JFYWNoLmNhbGwoZXYuZGF0YVRyYW5zZmVyLmZpbGVzLCAoZmlsZSk9PntcbiAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgICAgICByZWFkZXIub25sb2FkZW5kID0gIGZ1bmN0aW9uIChldmVudCxiKSB7XG4gICAgICAgICAgICAvLyAxLiBhcHBlbmQgdG8gYm9keVxuICAgICAgICAgICAgLy8gMi4gd3JpdGUgdG8gZGIuXG4gICAgICAgICAgICB0aGlzLmFwcGVuZFRvQm9keShmaWxlKTtcbiAgICAgICAgICAgIHRoaXMud3JpdGVUb0RCKGV2ZW50LnRhcmdldC5yZXN1bHQsIGZpbGUubmFtZSk7XG5cbiAgICAgICAgfS5iaW5kKHRoaXMpO1xuICAgIH0pXG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY2xhc3M6IFwiZHJvcF96b25lXCJcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZHJhZ092ZXJIYW5kbGVyKGV2KSB7XG4gICAgY29uc29sZS5sb2coJ0ZpbGUocykgaW4gZHJvcCB6b25lJyk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY2xhc3M6IFwiZHJhZ19vdmVyXCJcbiAgICB9KVxuXG4gICAgLy8gUHJldmVudCBkZWZhdWx0IGJlaGF2aW9yIChQcmV2ZW50IGZpbGUgZnJvbSBiZWluZyBvcGVuZWQpXG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRyYWdMZWF2ZUhhbmRsZXIoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjbGFzczogXCJkcm9wX3pvbmVcIlxuICAgIH0pXG59Iiwid2luZG93LmlEQiA9IFwiXCI7XG5pbXBvcnQgeyBNaW5kZXhlZERCIH0gZnJvbSBcIi4vTWluZGV4ZWREQlwiO1xuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCl7XG4gICAgd2luZG93LmlEQiA9IG5ldyBNaW5kZXhlZERCKFwidWlFZGl0b3JcIiwge3VpRWRpdG9yOiBcIm5hbWVcIn0pO1xuICAgIC8vIGlEQi5wdXQoXCJ1aUVkaXRvclwiLCB7ZGF0YToxMjN9KVxuICAgIHdpbmRvdy5pREIuY29ubmVjdCgpO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGlEQjsiLCIvLyB0YWtlbiBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9Ub21BbnRob255L01pbi5kZXhlZERCL2Jsb2IvbWFzdGVyL21pbmRleGVkZGIuanNcbmV4cG9ydCBmdW5jdGlvbiBNaW5kZXhlZERCKGRhdGFiYXNlTmFtZSwgb2JqZWN0U3RvcmVzKSB7XG5cdHRoaXMuaWRiID0gd2luZG93LmluZGV4ZWREQiB8fCB3aW5kb3cubW96SW5kZXhlZERCIHx8IHdpbmRvdy53ZWJraXRJbmRleGVkREIgfHwgd2luZG93Lm1zSW5kZXhlZERCIHx8IHdpbmRvdy5zaGltSW5kZXhlZERCO1xuXHR0aGlzLmRiID0gZGF0YWJhc2VOYW1lO1xuXHR0aGlzLm9ialN0cnMgPSBBcnJheS5pc0FycmF5KG9iamVjdFN0b3JlcykgPyBvYmplY3RTdG9yZXMgOiBbb2JqZWN0U3RvcmVzXTtcblx0dGhpcy5zdG9yZSA9IFwidWlFZGl0b3JcIjtcblxuXHR0aGlzLmNvbm5lY3QgPSBmdW5jdGlvbihrZXkpIHtcblx0XHR2YXIgY29ubiA9IHRoaXMuaWRiLm9wZW4odGhpcy5kYiwgMSk7XG5cdFx0Y29ubi5tZGIgPSB0aGlzO1xuXG5cdFx0Y29ubi5vbnVwZ3JhZGVuZWVkZWQgPSBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBkYmwgPSBjb25uLnJlc3VsdDtcblx0XHRcdHRoaXMubWRiLm9ialN0cnMuZm9yRWFjaChlbGVtZW50ID0+IHtcblx0XHRcdFx0dmFyIHN0b3JlID0gT2JqZWN0LmVudHJpZXMoZWxlbWVudCk7XG5cdFx0XHRcdGRibC5jcmVhdGVPYmplY3RTdG9yZShzdG9yZVswXVswXSwge2tleVBhdGg6IHN0b3JlWzBdWzFdfSk7XG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkgeyBcblx0XHRcdGNvbm4ub25zdWNjZXNzID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHRoaXMubWRiLmRiID0gY29ubi5yZXN1bHQ7XG5cdFx0XHRcdHJlc29sdmUodGhpcy5tZGIuZGIpO1xuXHRcdFx0fVxuXHRcdFx0Y29ubi5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJlamVjdChjb25uLmVycm9yKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHRoaXMuY3MgPSBmdW5jdGlvbihzdG9yZSkge1xuXHRcdGlmICh0aGlzLmRiID09PSB1bmRlZmluZWQpIHRocm93IFwiW01pbi5kZXhlZERCXSBEQiBub3Qgb3Blbi5cIjtcblx0XHR2YXIgdHggPSB0aGlzLmRiLnRyYW5zYWN0aW9uKHN0b3JlLCBcInJlYWR3cml0ZVwiKTtcblx0XHRyZXR1cm4gdHgub2JqZWN0U3RvcmUoc3RvcmUpO1xuXHR9XG5cblx0dGhpcy5wdXQgPSBmdW5jdGlvbihvYmopIHtcblx0XHRsZXQgb3MgPSB0aGlzLmNzKHRoaXMuc3RvcmUpO1xuXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdFx0dmFyIHJlc3BvbnNlID0gb3MucHV0KG9iaik7XG5cdFx0XHRyZXNwb25zZS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmVzb2x2ZShyZXNwb25zZS5yZXN1bHQpO1xuXHRcdFx0fTtcblx0XHRcdHJlc3BvbnNlLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmVqZWN0KHJlc3BvbnNlLmVycm9yKTtcblx0XHRcdH07XG5cdFx0fSk7XG5cdH1cblxuXHR0aGlzLmdldCA9IGZ1bmN0aW9uKGtleSkge1xuXHRcdGxldCBvcyA9IHRoaXMuY3ModGhpcy5zdG9yZSk7XG5cblx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0XHR2YXIgcmVzcG9uc2UgPSBvcy5nZXQoa2V5KTtcblx0XHRcdHJlc3BvbnNlLm9uc3VjY2VzcyA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXNvbHZlKHJlc3BvbnNlLnJlc3VsdCk7XG5cdFx0XHR9O1xuXHRcdFx0cmVzcG9uc2Uub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZWplY3QocmVzcG9uc2UuZXJyb3IpO1xuXHRcdFx0fTtcblx0XHR9KTtcblx0fVxuXG5cdHRoaXMuZ2V0QWxsID0gZnVuY3Rpb24oKSB7XG5cdFx0bGV0IG9zID0gdGhpcy5jcyh0aGlzLnN0b3JlKTtcblxuXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0XHRcdHZhciByZXNwb25zZSA9IG9zLmdldEFsbCgpO1xuXHRcdFx0cmVzcG9uc2Uub25zdWNjZXNzID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJlc29sdmUocmVzcG9uc2UucmVzdWx0KTtcblx0XHRcdH07XG5cdFx0XHRyZXNwb25zZS5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJlamVjdChyZXNwb25zZS5lcnJvcik7XG5cdFx0XHR9O1xuXHRcdH0pO1xuXHR9XG5cblx0dGhpcy5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuZGIuY2xvc2UoKTtcblx0fVxufSIsIlxuZXhwb3J0IGZ1bmN0aW9uIHdyaXRlVG9EQihyZXN1bHQsIG5hbWUpIHtcbiAgICB3aW5kb3cuaURCLmdldChuYW1lKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICB2YXIgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgaW1nLmhyZWYgPSBkYXRhLnJlc3VsdDtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpbWFnZVVSTDogZGF0YS5yZXN1bHRcbiAgICAgICAgfSlcbiAgICB9KVxuICAgIHdpbmRvdy5pREIucHV0KHsgbmFtZTogbmFtZSwgcmVzdWx0OiByZXN1bHQgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoRnJvbURCKCkge1xuICAgIHdpbmRvdy5pREIuZ2V0QWxsKCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgLy8gc2F2ZSBpdCB0byB3aW5kb3dcbiAgICAgICAgd2luZG93LmFzc2V0cyA9IHt9O1xuICAgICAgICBkYXRhLmZvckVhY2goaW1hZ2UgPT4ge1xuICAgICAgICAgICAgd2luZG93LmFzc2V0c1tpbWFnZS5uYW1lXSA9IGltYWdlLnJlc3VsdFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFzc2V0czogZGF0YVxuICAgICAgICB9KVxuICAgIH0pO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuLy8gU3R5bGVzLlxuXG5pbXBvcnQgXCIuL1N0eWxlLmNzc1wiO1xuXG4vLyBDb21wb25lbnRzLlxuXG5pbXBvcnQgRm9sZGVycyBmcm9tIFwiLi4vVXRpbGl0aWVzL0NvbXBvbmVudHMvRm9sZGVyc1wiO1xuaW1wb3J0IHtvbkRlbGV0ZX0gZnJvbSBcIi4vRXZlbnRzXCI7XG5cbi8vIEV2ZW50cy5cblxuY2xhc3MgQ29tcG9uZW50cyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY29tcG9uZW50czogdGhpcy5wcm9wcy5jb21wb25lbnRzLFxuICAgICAgICAgICAgZm9sZGVyczogdGhpcy5wcm9wcy5mb2xkZXJzXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYWRkRm9sZGVyKCl7XG4gICAgICAgIGxldCBmb2xkZXJzID0gQXJyYXkuZnJvbSh0aGlzLnN0YXRlLmZvbGRlcnMpO1xuICAgICAgICBmb2xkZXJzLnVuc2hpZnQoe1xuICAgICAgICAgICAgdHlwZTpcIm5ld0ZvbGRlclwiLFxuICAgICAgICAgICAgbmFtZTpcIlwiLFxuICAgICAgICAgICAgY29udGVudHM6W11cbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Zm9sZGVyc30pXG4gICAgfVxuXG4gICAgYWRkQ29tcG9uZW50KCl7XG4gICAgICAgIHRoaXMucHJvcHMub25PcGVuRWRpdG9yKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnRzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZWxlbWVudHMtdGFiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIENvbXBvbmVudHNcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ29udHJvbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5hZGRDb21wb25lbnQuYmluZCh0aGlzKX0+PGkgY2xhc3NOYW1lPVwiZmEgZmEtZWRpdFwiPjwvaT5BZGQvRWRpdCBDb21wb25lbnQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5hZGRGb2xkZXIuYmluZCh0aGlzKX0+PGkgY2xhc3NOYW1lPVwiZmEgZmEtZm9sZGVyXCI+PC9pPkFkZCBGb2xkZXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb2xkZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0ge01hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwMCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cz17dGhpcy5zdGF0ZS5jb21wb25lbnRzfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2xkZXJzPXt0aGlzLnN0YXRlLmZvbGRlcnN9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQ29tcG9uZW50PXt0aGlzLnByb3BzLnNlbGVjdGVkQ29tcG9uZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkZvbGRlcnNVcGRhdGU9e3RoaXMucHJvcHMub25Gb2xkZXJzVXBkYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdGlvbiA9IHt0aGlzLnByb3BzLm9uU2VsZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRlbGV0ZT17b25EZWxldGUuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnRzO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1N0eWxlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIub3ZlcnJpZGUge1xcbiAgICBsaW5lLWhlaWdodDogMCU7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbiAgICB3aWR0aDogNDUwcHg7XFxufVxcblxcbi5lbGVtZW50c3tcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbn1cXG5cXG4udGl0bGV7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDExcHg7XFxuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XFxuICAgIGJhY2tncm91bmQ6IHJnYig2NCwgNjQsIDY0KTtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uZWxlbWVudHMtdGFiIHtcXG4gICAgbGVmdDoxMHB4O1xcbn1cXG5cXG4uQ29udHJvbHN7XFxuICAgIHBhZGRpbmctYm90dG9tOjhweDtcXG59XCIsIFwiXCJdKTtcblxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuLy8gU3R5bGVzLlxuXG5pbXBvcnQgXCIuL1N0eWxlLmNzc1wiO1xuaW1wb3J0IEZvbGRlciBmcm9tIFwiLi9Gb2xkZXJcIjtcblxuaW1wb3J0IHtmb2xkZXJTdHJ1Y3R1cmV9IGZyb20gXCIuL3Byb2Nlc3NGb2xkZXJcIjtcblxuY2xhc3MgRm9sZGVycyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY29tcG9uZW50czogdGhpcy5wcm9wcy5jb21wb25lbnRzLFxuICAgICAgICAgICAgZm9sZGVyczogdGhpcy5wcm9wcy5mb2xkZXJzXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY2hlY2tGb2xkZXIoZGF0YSl7XG4gICAgICAgIGxldCBmb2xkZXJzID0gQXJyYXkuZnJvbSh0aGlzLnN0YXRlLmZvbGRlcnMpO1xuICAgICAgICBsZXQgZm9sZGVyID0gZm9sZGVycy5maW5kKGZvbGRlcj0+Zm9sZGVyLm5hbWU9PT1kYXRhLm5hbWUpO1xuICAgICAgICBsZXQgZW1wdHlGb2xkZXJJbmRleCA9IGZvbGRlcnMuZmluZEluZGV4KGZvbGRlcj0+Zm9sZGVyLnR5cGU9PT1cIm5ld0ZvbGRlclwiKTtcbiAgICAgICAgLy8gRGVsZXRlIHRoZSBuZXdGb2xkZXJcbiAgICAgICAgZm9sZGVycy5zcGxpY2UoZW1wdHlGb2xkZXJJbmRleCwxKTtcbiAgICAgICAgY29uc29sZS5sb2coZm9sZGVycylcbiAgICAgICAgLy8gQ2hlY2sgaWYgaXQgaXMgbmV3bHkgY3JlYXRlZCBmb2xkZXIgXG4gICAgICAgIGlmKCFmb2xkZXIpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coYEZvbGRlciBub3QgZm91bmQsIGFkZGluZyAke0pTT04uc3RyaW5naWZ5KGRhdGEpfXRvIGxpc3Qgb2YgZm9sZGVycyAke0pTT04uc3RyaW5naWZ5KGZvbGRlcnMpfWApO1xuICAgICAgICAgICAgZm9sZGVycy5wdXNoKGRhdGEpO1xuICAgICAgICB9IFxuICAgICAgICAvLyBVcGRhdGUgZXhpc3Rpbmcgb25lXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYEZvbGRlciBmb3VuZCwgdXBkYXRpbmcgdGhlIGZvbGRlciBjb250ZW50IGZyb20gJHtmb2xkZXIuY29udGVudHN9IHRvICR7ZGF0YS5jb250ZW50c31gKVxuICAgICAgICAgICAgZm9sZGVyLmNvbnRlbnRzID0gZGF0YS5jb250ZW50cztcblxuICAgICAgICAgICAgLy8gTWFrZXMgc3VyZSB0aGF0IGNvbnRlbnRzIGFyZSBub3QgZHVwbGljYXRlZCBpbiBvdGhlciBmb2xkZXJzLlxuICAgICAgICAgICAgZm9sZGVycy5mb3JFYWNoKGN1cnJlbnRGb2xkZXI9PntcblxuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRGb2xkZXIubmFtZSAhPT0gZGF0YS5uYW1lKXtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5jb250ZW50cy5mb3JFYWNoKGNvbnRlbnQ9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGN1cnJlbnRGb2xkZXIuY29udGVudHMuZmluZEluZGV4KGl0ZW09Pml0ZW09PT1jb250ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXghPT0tMT8gY3VycmVudEZvbGRlci5jb250ZW50cy5zcGxpY2UoaW5kZXgsMSk6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGZvbGRlcnMpXG5cbiAgICAgICAgdGhpcy5wcm9wcy5vbkZvbGRlcnNVcGRhdGUoZm9sZGVycyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gZm9sZGVyU3RydWN0dXJlKHRoaXMucHJvcHMsIHRoaXMuY2hlY2tGb2xkZXIuYmluZCh0aGlzKSApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb2xkZXJzO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1N0eWxlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJpbnB1dC5mb2xkZXJ7XFxuICAgIGJvcmRlcjpub25lO1xcbiAgICBiYWNrZ3JvdW5kOm5vbmU7XFxufVxcblxcbi5uZXdGb2xkZXJ7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ubmV3Rm9sZGVyIGl7XFxuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLDAsMCwwLjkpO1xcbiAgICBib3JkZXItd2lkdGg6IDFweDtcXG4gICAgcGFkZGluZzogN3B4O1xcbn1cXG5cXG4ubmV3Rm9sZGVyLmRyYWdPdmVyIGl7XFxuICAgIGFuaW1hdGlvbjogYmxpbmsgLjVzIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJsaW5re1xcbiAgICBmcm9tIHsgICAgXFxuICAgICAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgfVxcbn1cXG4uZmEuZmEtZm9sZGVyIH4gdWwge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4uZmEuZmEtZm9sZGVyLW9wZW4gfiB1bCB7XFxuICAgIGRpc3BsYXk6YmxvY2s7XFxufVxcblxcbi5mb2xkZXJTZWxlY3RlZCAuZmEuZmEtZm9sZGVyLFxcbi5mb2xkZXJTZWxlY3RlZCAuZmEuZmEtZm9sZGVyLW9wZW57XFxuICAgIGJhY2tncm91bmQ6IHJnYig0OCwxMTUsOTMpXFxufVwiLCBcIlwiXSk7XG5cbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1N0eWxlLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1N0eWxlLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaW5wdXQuZm9sZGVye1xcbiAgICBib3JkZXI6bm9uZTtcXG4gICAgYmFja2dyb3VuZDpub25lO1xcbn1cXG5cXG4ubmV3Rm9sZGVye1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLm5ld0ZvbGRlciBpe1xcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwwLDAsMC45KTtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICAgIHBhZGRpbmc6IDdweDtcXG59XFxuXFxuLm5ld0ZvbGRlci5kcmFnT3ZlciBpe1xcbiAgICBhbmltYXRpb246IGJsaW5rIC41cyBpbmZpbml0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBibGlua3tcXG4gICAgZnJvbSB7ICAgIFxcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgIH1cXG59XFxuLmZhLmZhLWZvbGRlciB+IHVsIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuLmZhLmZhLWZvbGRlci1vcGVuIH4gdWwge1xcbiAgICBkaXNwbGF5OmJsb2NrO1xcbn1cXG5cXG4uZm9sZGVyU2VsZWN0ZWQgLmZhLmZhLWZvbGRlcixcXG4uZm9sZGVyU2VsZWN0ZWQgLmZhLmZhLWZvbGRlci1vcGVue1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNDgsMTE1LDkzKVxcbn1cIiwgXCJcIl0pO1xuXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG4vLyBTdHlsZXMuXG5cbmltcG9ydCBcIi4vU3R5bGUuY3NzXCI7XG5cbmltcG9ydCB7bm9kcm9wSGFuZGxlciwgbm9kcmFnT3ZlckhhbmRsZXJ9IGZyb20gXCIuL0V2ZW50c1wiO1xuXG5jbGFzcyBOb0ZvbGRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc3RhdHVzOiBcImZhIGZhLWZvbGRlclwiLFxuICAgICAgICAgICAgZm9sZGVyQ2xhc3M6IFwibm9Gb2xkZXJcIlxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuICg8dWwgXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5vRm9sZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgb25Ecm9wPXtub2Ryb3BIYW5kbGVyLmJpbmQodGhpcyl9IFxuICAgICAgICAgICAgICAgICAgICBvbkRyYWdPdmVyPXtub2RyYWdPdmVySGFuZGxlci5iaW5kKHRoaXMpfSA+XG5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNvbnRlbnRzfVxuICAgICAgICA8L3VsPilcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5vRm9sZGVyO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1N0eWxlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4iLCJcbiAgICBleHBvcnQgZnVuY3Rpb24gbm9kcm9wSGFuZGxlcihldikge1xuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgY29tcG9uZW50TmFtZSA9IGV2LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwiY29tcG9uZW50LW5hbWVcIik7XG4gICAgICAgIGxldCBjb250ZW50cyA9IEFycmF5LmZyb20odGhpcy5zdGF0ZS5jb250ZW50cyk7XG4gICAgICAgIGxldCBpbmRleCA9IGNvbnRlbnRzLmZpbmRJbmRleChjb250ZW50PT5jb250ZW50PT09Y29tcG9uZW50TmFtZSk7XG5cbiAgICAgICAgLy8gRGVsZXRlIHRoZSBpdGVtIGZyb20gdGhlY29udGVudHMuXG4gICAgICAgIGNvbnRlbnRzLnNsaWNlKGluZGV4LCAxKTtcblxuICAgICAgICB0aGlzLnByb3BzLm9uRm9sZGVyVXBkYXRlKHtcbiAgICAgICAgICAgIG5hbWU6IHRoaXMuc3RhdGUubmFtZSxcbiAgICAgICAgICAgIGNvbnRlbnRzIDogY29udGVudHMsXG4gICAgICAgICAgICB0eXBlOlwibm9Gb2xkZXJcIlxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyhcIk9OIERST1Agbm9Gb2xkZXJcIik7XG4gICAgfVxuXG4gICAgZXhwb3J0IGZ1bmN0aW9uIG5vZHJhZ092ZXJIYW5kbGVyKGV2KSB7XG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgIGZvbGRlckNsYXNzOiBcIm5ld0ZvbGRlciBkcmFnT3ZlclwiXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKFwiT04gRFJBRyBPVkVSIG5vRm9sZGVyXCIpO1xuICAgIH1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbi8vIFN0eWxlcy5cblxuaW1wb3J0IFwiLi9TdHlsZS5jc3NcIjtcblxuLy8gQ29tcG9uZW50cy5cblxuY2xhc3MgTmV3Rm9sZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzdGF0dXM6IFwiZmEgZmEtZm9sZGVyXCIsXG4gICAgICAgICAgICBuZXdGb2xkZXJDbGFzczogXCJuZXdGb2xkZXJcIixcbiAgICAgICAgICAgIGZvbGRlck5hbWU6IFwiXCJcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmb2xkZXJOYW1lQ2hhbmdlZChlKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBmb2xkZXJOYW1lOiBlLmN1cnJlbnRUYXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzYXZlRm9sZGVyTmFtZU9uRW50ZXIoZSl7XG4gICAgICAgIGlmKGUua2V5PT09XCJFbnRlclwiKXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25OZXdGb2xkZXIoe1xuICAgICAgICAgICAgICAgIG5hbWU6dGhpcy5zdGF0ZS5mb2xkZXJOYW1lLFxuICAgICAgICAgICAgICAgIGNvbnRlbnRzOltdLFxuICAgICAgICAgICAgICAgIHR5cGU6XCJmb2xkZXJcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5uZXdGb2xkZXJDbGFzc30+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9e3RoaXMuc3RhdGUuc3RhdHVzfT48L2k+XG4gICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb2xkZXJcIiBcbiAgICAgICAgICAgICAgICBhdXRvRm9jdXM9e3RydWV9IFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgZm9sZGVyIG5hbWVcIlxuICAgICAgICAgICAgICAgIHZhbHVlID0ge3RoaXMuc3RhdGUuZm9sZGVyTmFtZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5mb2xkZXJOYW1lQ2hhbmdlZC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgIG9uS2V5UHJlc3M9e3RoaXMuc2F2ZUZvbGRlck5hbWVPbkVudGVyLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZXdGb2xkZXI7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImlucHV0LmZvbGRlcntcXG4gICAgYm9yZGVyOm5vbmU7XFxuICAgIGJhY2tncm91bmQ6bm9uZTtcXG59XFxuXFxuLm5ld0ZvbGRlciBpe1xcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwwLDAsMC45KTtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICAgIHBhZGRpbmc6IDdweDtcXG59XFxuXFxuLm5ld0ZvbGRlci5kcmFnT3ZlciBpe1xcbiAgICBhbmltYXRpb246IGJsaW5rIC41cyBpbmZpbml0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBibGlua3tcXG4gICAgZnJvbSB7ICAgIFxcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgICBjb2xvcjogZ3JlZW47XFxuICAgIH1cXG59XCIsIFwiXCJdKTtcblxuIiwiZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUZvbGRlcihlKXtcbiAgICBpZihlLmtleT09PVwiQmFja3NwYWNlXCIgJiYgZS5jdHJsS2V5ICYmIHRoaXMuc3RhdGUuZm9sZGVyQ2xhc3MuaW5jbHVkZXMoXCJmb2xkZXJTZWxlY3RlZFwiKSl7XG4gICAgICAgIHRoaXMucHJvcHMub25Gb2xkZXJEZWxldGUodGhpcy5zdGF0ZS5mb2xkZXIpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gb3BlbkZvbGRlcigpe1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzdGF0dXM6IFwiZmEgZmEtZm9sZGVyLW9wZW5cIlxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGNsb3NlRm9sZGVyKCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHN0YXR1czogXCJmYSBmYS1mb2xkZXJcIlxuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVGb2xkZXIoKXtcbiAgICB0aGlzLnN0YXRlLnN0YXR1cyA9PT0gXCJmYSBmYS1mb2xkZXJcIj8gIG9wZW5Gb2xkZXIuY2FsbCh0aGlzKSA6IGNsb3NlRm9sZGVyLmNhbGwodGhpcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RGb2xkZXIoKXtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZm9sZGVyQ2xhc3M6XCJuZXdGb2xkZXIgZm9sZGVyU2VsZWN0ZWRcIlxuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXNlbGVjdEZvbGRlcigpe1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmb2xkZXJDbGFzczpcIm5ld0ZvbGRlclwiXG4gICAgfSlcbn1cbiIsImltcG9ydCB7Y29udmVydFRvUmVhY3R9IGZyb20gXCIuL0NvZGVHZW5lcmF0b3IvUmVhY3RcIjtcblxuZnVuY3Rpb24gY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudCl7XG5cbiAgICBsZXQgY29tcG9uZW50U3RyaW5nID0gY29udmVydFRvUmVhY3QoY29tcG9uZW50KTtcblxuICAgIC8vIGV2YWwgZG9lcyBub3QgZXZhbHVhdGUgY2xhc3MgaWYgbm90IGV4Y2xvc2VkIGluIHBhcmFudGhlc2lzLlxuICAgIHJldHVybiBldmFsKEJhYmVsLnRyYW5zZm9ybShjb21wb25lbnRTdHJpbmcsIHsgcHJlc2V0czogWydyZWFjdCddLCBwbHVnaW5zOiBbXCJ0cmFuc2Zvcm0tZXMyMDE1LWNsYXNzZXNcIl0gIH0pLmNvZGUpXG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGNyZWF0ZUNvbXBvbmVudFxufSIsImltcG9ydCB7c2FtcGxlfSBmcm9tIFwiLi9TYW1wbGVcIjtcblxuZnVuY3Rpb24gcHVzaEhpc3RvcnkoY29tcG9uZW50cyl7XG5cbiAgICB3aW5kb3cuZWRpdG9ySGlzdG9yeSA9IHJlYWREYXRhKFwidWktZWRpdG9yLWhpc3RvcnlcIik7XG4gICAgZWRpdG9ySGlzdG9yeS5wdXNoKGNvbXBvbmVudHMpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidWktZWRpdG9yLWhpc3RvcnlcIixKU09OLnN0cmluZ2lmeShlZGl0b3JIaXN0b3J5KSApO1xufVxuXG4vLyBJZiBlbXB0eSwgcmV0dXJuIGVtcHR5IGFycmF5LlxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZERhdGEoa2V5KXtcblxuICAgIGlmKGtleSA9PT1cInVpLWVkaXRvclwiKXtcbiAgICAgICAgaWYoIXdpbmRvdy5jb21wb25lbnRzICl7XG4gICAgICAgICAgICB3aW5kb3cuY29tcG9uZW50cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkgfHwgc2FtcGxlO1xuICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh3aW5kb3cuY29tcG9uZW50cykpO1xuICAgIH1cbiAgICBpZihrZXk9PT1cInVpLWVkaXRvci1oaXN0b3J5XCIpe1xuICAgICAgICBsZXQgaGlzdG9yeSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgICAgIFxuICAgICAgICBpZihoaXN0b3J5KVxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoaGlzdG9yeSk7XG4gICAgfVxuICAgIGlmKGtleSA9PT1cImZvbGRlcnNcIil7XG4gICAgICAgIGxldCBmb2xkZXJzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KVxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShmb2xkZXJzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gW107XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdyaXRlRGF0YShrZXksIGNvbXBvbmVudHMsIG5vUHVzaCl7XG5cbiAgICBpZihrZXk9PVwiZm9sZGVyc1wiKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJ3cml0aW5nIGZvbGRlcnNcIilcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShjb21wb25lbnRzKSk7XG4gICAgfVxuICAgIGlmKGtleT09XCJ1aS1lZGl0b3JcIil7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiV1JJVEVcIilcbiAgICAgICAgd2luZG93LmNvbXBvbmVudHMgPSBjb21wb25lbnRzO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KGNvbXBvbmVudHMpKTtcbiAgICAgICAgaWYoIW5vUHVzaCl7XG4gICAgICAgICAgICBwdXNoSGlzdG9yeShjb21wb25lbnRzKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRDb21wb25lbnQoY29tcG9uZW50TmFtZSl7XG5cbiAgICBsZXQgY29tcG9uZW50cyA9IHJlYWREYXRhKFwidWktZWRpdG9yXCIpO1xuICAgIGlmKCFjb21wb25lbnRzKXtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIGNvbXBvbmVudHMuZmluZChjb21wb25lbnQ9PmNvbXBvbmVudC5uYW1lPT09Y29tcG9uZW50TmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3cml0ZUNvbXBvbmVudChwYXJlbnQpIHtcblxuICAgIGlmKCFBcnJheS5pc0FycmF5KHBhcmVudCkgJiYgcGFyZW50Lm5hbWUpe1xuICAgICAgICBsZXQgY29tcG9uZW50cyA9IHJlYWREYXRhKCBcInVpLWVkaXRvclwiKTtcbiAgICAgICAgbGV0IGluZGV4ID0gY29tcG9uZW50cy5maW5kSW5kZXgoY29tcD0+Y29tcC5uYW1lID09PSBwYXJlbnQubmFtZSk7XG4gICAgICAgIGNvbXBvbmVudHNbaW5kZXhdID0gcGFyZW50O1xuICAgICAgICB3cml0ZURhdGEoXCJ1aS1lZGl0b3JcIiwgY29tcG9uZW50cyk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9wSGlzdG9yeSgpe1xuICAgIFxuICAgIGxldCBlZGl0b3JIaXN0b3J5ID0gcmVhZERhdGEoXCJ1aS1lZGl0b3ItaGlzdG9yeVwiKTtcbiAgICBpZighZWRpdG9ySGlzdG9yeSl7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgbGFzdEl0ZW0gPSBlZGl0b3JIaXN0b3J5LnBvcCgpO1xuICAgIFxuICAgIGlmKCFlZGl0b3JIaXN0b3J5KXtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdyaXRlRGF0YShcInVpLWVkaXRvci1oaXN0b3J5XCIsIGVkaXRvckhpc3RvcnksIHRydWUpO1xuXG4gICAgd3JpdGVEYXRhKFwidWktZWRpdG9yXCIsIGxhc3RJdGVtLCB0cnVlKTtcbn0iLCJsZXQgc2FtcGxlID0gW1xuICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwiRm9yZ290UGFzc3dvcmRcIixcbiAgICAgICAgXCJtYXJrdXBcIjogXCI8ZGl2IGNsYXNzTmFtZT1cXFwidnNCdXR0b25cXFwiPjxidXR0b24gaWQ9XFxcImYxMjNcXFwiPkZvcmdvdCBQYXNzd29yZDwvYnV0dG9uPjwvZGl2PlwiLFxuICAgICAgICBcImV2ZW50c1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib25DbGlja1wiLFxuICAgICAgICAgICAgICAgIFwicmVkdWNlclwiOiBcInN0YXRlLnNob3dcIixcbiAgICAgICAgICAgICAgICBcInB1Ymxpc2hhYmxlXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJwdWJsaXNoTmFtZVwiOiBcIm9uUGFzc3dvcmRGb3Jnb3R0ZW5cIixcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiZjEyM1wiXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwic3RhdGVcIjogXCJ7XFxcInNob3dcXFwiOlxcXCJmYWxzZVxcXCJ9XCIsXG4gICAgICAgIFwic3R5bGVcIjogXCIudnNCdXR0b257XFxuZm9udC1mYW1pbHk6IEJlbnRvblNhbnNCb29rLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xcbmNvbG9yOiByZ2IoMCwgMCwgMCk7XFxufVxcblxcblxcbi52c0J1dHRvbiBidXR0b257XFxuYm9yZGVyLWNvbG9yOiAjYmYyMTVkO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYmFja2dyb3VuZDogI2VmNWY5NjtcXG5ib3JkZXI6IDFweCBzb2xpZDtcXG59XFxuXFxuLnZzQnV0dG9uIGJ1dHRvbjpob3ZlcntcXG5ib3JkZXItY29sb3I6ICNiZjIxNWQ7XFxufVwiLFxuICAgICAgICBcImNoaWxkcmVuXCI6IFtdLFxuICAgICAgICBcImlkXCI6IDIxOCxcbiAgICAgICAgXCJjb25maWdcIjogXCJ7fVwiLFxuICAgICAgICBcImlkTWFya3VwXCI6IFwiPGRpdiBjbGFzc05hbWU9XFxcInZzQnV0dG9uXFxcIiBkYXRhLXV1aWQ9XFxcIjBcXFwiPjxidXR0b24gaWQ9XFxcImYxMjNcXFwiIGRhdGEtdXVpZD1cXFwiMVxcXCI+Rm9yZ290IFBhc3N3b3JkPC9idXR0b24+PC9kaXY+XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwiTW9kYWxcIixcbiAgICAgICAgXCJtYXJrdXBcIjogXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbFxcXCI+XFxuPGhlYWRlcj5cXG4gIDxoMz5Gb3Jnb3QgUGFzc3dvcmQ8L2gzPlxcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cXFwiY2xvc2VCdXR0b25cXFwiIGlkPVxcXCJ4XFxcIj54PC9idXR0b24+XFxuPC9oZWFkZXI+XFxuPHNlY3Rpb24gY2xhc3M9XFxcImNvbnRlbnRcXFwiPjxQcml2YWN5QW5kUG9saWN5PjwvUHJpdmFjeUFuZFBvbGljeT5cXG4gXFxuPC9zZWN0aW9uPlxcbjxmb290ZXI+Zm9vdGVyPC9mb290ZXI+XFxuPC9kaXY+XCIsXG4gICAgICAgIFwiZXZlbnRzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvbkNsaWNrXCIsXG4gICAgICAgICAgICAgICAgXCJyZWR1Y2VyXCI6IFwic3RhdGUubmFtZT1cXFwiXFxcIjtcIixcbiAgICAgICAgICAgICAgICBcInB1Ymxpc2hhYmxlXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJwdWJsaXNoTmFtZVwiOiBcIm9uQ2xvc2VNb2RhbFwiLFxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJ4XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJzdGF0ZVwiOiBcInt9XCIsXG4gICAgICAgIFwic3R5bGVcIjogXCIubW9kYWx7XFxuICB3aWR0aDo0MDBweDtcXG4gIGZvbnQtc2l6ZToyMnB4O1xcbiAgcG9zaXRpb246cmVsYXRpdmU7XFxuYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuY29sb3I6IGJsYWNrO1xcbiAgZm9udC1mYW1pbHk6IEJlbnRvblNhbnNMaWdodCxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OjQwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XFxuICAgIGxldHRlci1zcGFjaW5nOiAuMDRlbTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuXFxufVxcblxcbi5tb2RhbCBoM3tcXG4gIHBhZGRpbmc6MXJlbTtcXG5mb250LXNpemU6MjZweDtcXG5mb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4ubW9kYWwgLmNvbnRlbnR7XFxucGFkZGluZzoxcmVtO1xcbmZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5tb2RhbCBmb290ZXJ7XFxucGFkZGluZzoxcmVtO1xcbiAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcXG5mb250LXdlaWdodDogNDAwO1xcbn1cXG4ubW9kYWwgaGVhZGVye1xcbiAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcXG5mb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4ubW9kYWwgLmNsb3NlQnV0dG9ue1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDEwcHg7XFxuICB0b3A6IDIwcHg7XFxufVxcblxcbi5tb2RhbCAuY29udGVudHtcXG4gICAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcXG5mb250LXdlaWdodDogNDAwO1xcbn1cIixcbiAgICAgICAgXCJjaGlsZHJlblwiOiBbXSxcbiAgICAgICAgXCJpZFwiOiAxOTEsXG4gICAgICAgIFwiY29uZmlnXCI6IFwie31cIixcbiAgICAgICAgXCJpZE1hcmt1cFwiOiBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsXFxcIiBkYXRhLXV1aWQ9XFxcIjBcXFwiPlxcbjxoZWFkZXIgZGF0YS11dWlkPVxcXCIxXFxcIj5cXG4gIDxoMyBkYXRhLXV1aWQ9XFxcIjJcXFwiPkZvcmdvdCBQYXNzd29yZDwvaDM+XFxuICAgIDxidXR0b24gY2xhc3NOYW1lPVxcXCJjbG9zZUJ1dHRvblxcXCIgaWQ9XFxcInhcXFwiIGRhdGEtdXVpZD1cXFwiM1xcXCI+eDwvYnV0dG9uPlxcbjwvaGVhZGVyPlxcbjxzZWN0aW9uIGNsYXNzPVxcXCJjb250ZW50XFxcIiBkYXRhLXV1aWQ9XFxcIjRcXFwiPjxQcml2YWN5QW5kUG9saWN5IGRhdGEtdXVpZD1cXFwiNVxcXCI+PC9Qcml2YWN5QW5kUG9saWN5PlxcbiBcXG48L3NlY3Rpb24+XFxuPGZvb3RlciBkYXRhLXV1aWQ9XFxcIjZcXFwiPmZvb3RlcjwvZm9vdGVyPlxcbjwvZGl2PlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcIkNhbmNlbEJ1dHRvblwiLFxuICAgICAgICBcIm1hcmt1cFwiOiBcIjxkaXYgY2xhc3NOYW1lPVxcXCJ2c0J1dHRvblxcXCI+PGJ1dHRvbj57c3RhdGUuY2FuY2VsQnV0dG9ufTwvYnV0dG9uPjwvZGl2PlwiLFxuICAgICAgICBcImV2ZW50c1wiOiBbXSxcbiAgICAgICAgXCJzdGF0ZVwiOiBcIntcXFwiY2FuY2VsQnV0dG9uXFxcIjpcXFwiQ2FuY2VsXFxcIn1cIixcbiAgICAgICAgXCJzdHlsZVwiOiBcIi52c0J1dHRvbntcXG5mb250LWZhbWlseTogQmVudG9uU2Fuc0Jvb2ssSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XFxuY29sb3I6IHJnYigwLCAwLCAwKTtcXG59XFxuXFxuXFxuLnZzQnV0dG9uIGJ1dHRvbntcXG5ib3JkZXItY29sb3I6ICNiZjIxNWQ7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kOiAjZWY1Zjk2O1xcbmJvcmRlcjogMXB4IHNvbGlkO1xcbnBhZGRpbmc6IC41cmVtIDJyZW07XFxufVxcblxcbi52c0J1dHRvbiBidXR0b246aG92ZXJ7XFxuYm9yZGVyLWNvbG9yOiAjYmYyMTVkO1xcbn1cIixcbiAgICAgICAgXCJjaGlsZHJlblwiOiBbXSxcbiAgICAgICAgXCJpZFwiOiAxNzQsXG4gICAgICAgIFwiY29uZmlnXCI6IFwie31cIixcbiAgICAgICAgXCJpZE1hcmt1cFwiOiBcIjxkaXYgY2xhc3NOYW1lPVxcXCJ2c0J1dHRvblxcXCIgZGF0YS11dWlkPVxcXCIwXFxcIj48YnV0dG9uIGRhdGEtdXVpZD1cXFwiMVxcXCI+e3N0YXRlLmNhbmNlbEJ1dHRvbn08L2J1dHRvbj48L2Rpdj5cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcIm5hbWVcIjogXCJTdWJtaXRCdXR0b25cIixcbiAgICAgICAgXCJtYXJrdXBcIjogXCI8ZGl2IGNsYXNzTmFtZT1cXFwidnNCdXR0b25cXFwiPjxidXR0b24+e3N0YXRlLnN1Ym1pdEJ1dHRvbn08L2J1dHRvbj48L2Rpdj5cIixcbiAgICAgICAgXCJldmVudHNcIjogW10sXG4gICAgICAgIFwic3RhdGVcIjogXCJ7XFxcInN1Ym1pdEJ1dHRvblxcXCI6XFxcIlN1Ym1pdFxcXCJ9XCIsXG4gICAgICAgIFwic3R5bGVcIjogXCIudnNCdXR0b257XFxuZm9udC1mYW1pbHk6IEJlbnRvblNhbnNCb29rLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xcbmNvbG9yOiByZ2IoMCwgMCwgMCk7XFxufVxcblxcblxcbi52c0J1dHRvbiBidXR0b257XFxuYm9yZGVyLWNvbG9yOiAjYmYyMTVkO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYmFja2dyb3VuZDogI2VmNWY5NjtcXG5ib3JkZXI6IDFweCBzb2xpZDtcXG5wYWRkaW5nOiAuNXJlbSAycmVtO1xcbn1cXG5cXG4udnNCdXR0b24gYnV0dG9uOmhvdmVye1xcbmJvcmRlci1jb2xvcjogI2JmMjE1ZDtcXG59XCIsXG4gICAgICAgIFwiY2hpbGRyZW5cIjogW10sXG4gICAgICAgIFwiaWRcIjogMTM0LFxuICAgICAgICBcImNvbmZpZ1wiOiBcInt9XCIsXG4gICAgICAgIFwiaWRNYXJrdXBcIjogXCI8ZGl2IGNsYXNzTmFtZT1cXFwidnNCdXR0b25cXFwiIGRhdGEtdXVpZD1cXFwiMFxcXCI+PGJ1dHRvbiBkYXRhLXV1aWQ9XFxcIjFcXFwiPntzdGF0ZS5zdWJtaXRCdXR0b259PC9idXR0b24+PC9kaXY+XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwiUHJpdmFjeUFuZFBvbGljeVwiLFxuICAgICAgICBcIm1hcmt1cFwiOiBcIjxkaXYgY2xhc3M9XFxcInByaXZhY3lQb2xpY3lcXFwiPlxcbiAgUGxlYXNlIGVudGVyIHRoZSBlbWFpbCBhZGRyZXNzIHlvdSB1c2VkIHRvIGNyZWF0ZSB5b3VyIGFjY291bnQgYW5kIHdlIHdpbGwgc2VuZCB5b3UgYSBsaW5rIHRvIHJlc2V0IHlvdXIgcGFzc3dvcmQuIFNlZSBQcml2YWN5IFBvbGljeVxcbjwvZGl2PlwiLFxuICAgICAgICBcImV2ZW50c1wiOiBbXSxcbiAgICAgICAgXCJzdGF0ZVwiOiBcInt9XCIsXG4gICAgICAgIFwic3R5bGVcIjogXCIucHJpdmFjeVBvbGljeXtcXG5mb250LWZhbWlseTogQmVudG9uU2Fuc0Jvb2ssSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XFxuZm9udC1zaXplOiAxMXB4O1xcbiAgICBsaW5lLWhlaWdodDogMTdweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4wNGVtO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XCIsXG4gICAgICAgIFwiY2hpbGRyZW5cIjogW10sXG4gICAgICAgIFwiaWRcIjogODQzLFxuICAgICAgICBcImNvbmZpZ1wiOiBcInt9XCIsXG4gICAgICAgIFwiaWRNYXJrdXBcIjogXCI8ZGl2IGNsYXNzPVxcXCJwcml2YWN5UG9saWN5XFxcIiBkYXRhLXV1aWQ9XFxcIjBcXFwiPlxcbiAgUGxlYXNlIGVudGVyIHRoZSBlbWFpbCBhZGRyZXNzIHlvdSB1c2VkIHRvIGNyZWF0ZSB5b3VyIGFjY291bnQgYW5kIHdlIHdpbGwgc2VuZCB5b3UgYSBsaW5rIHRvIHJlc2V0IHlvdXIgcGFzc3dvcmQuIFNlZSBQcml2YWN5IFBvbGljeVxcbjwvZGl2PlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcIlRlcm1zQW5kU2VydmljZVwiLFxuICAgICAgICBcIm1hcmt1cFwiOiBcIjxkaXYgY2xhc3M9XFxcInByaXZhY3lQb2xpY3lcXFwiPlxcbntzdGF0ZS52YXJpYW50fVxcbjwvZGl2PlwiLFxuICAgICAgICBcImV2ZW50c1wiOiBbXSxcbiAgICAgICAgXCJzdGF0ZVwiOiBcIntcXFwidmFyaWFudFxcXCI6XFxcIlRoaXMgc2l0ZSBpcyBwcm90ZWN0ZWQgYnkgcmVDQVBUQ0hBIGFuZCB0aGUgR29vZ2xlIFByaXZhY3kgUG9saWN5IGFuZCBUZXJtcyBvZiBTZXJ2aWNlIGFwcGx5LlxcXCJ9XCIsXG4gICAgICAgIFwic3R5bGVcIjogXCIucHJpdmFjeVBvbGljeXtcXG5mb250LWZhbWlseTogQmVudG9uU2Fuc0Jvb2ssSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XFxuZm9udC1zaXplOiAxMXB4O1xcbiAgICBsaW5lLWhlaWdodDogMTdweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4wNGVtO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XCIsXG4gICAgICAgIFwiY2hpbGRyZW5cIjogW10sXG4gICAgICAgIFwiaWRcIjogNzk2LFxuICAgICAgICBcImNvbmZpZ1wiOiBcInt9XCIsXG4gICAgICAgIFwiaWRNYXJrdXBcIjogXCI8ZGl2IGNsYXNzPVxcXCJwcml2YWN5UG9saWN5XFxcIiBkYXRhLXV1aWQ9XFxcIjBcXFwiPlxcbntzdGF0ZS52YXJpYW50fVxcbjwvZGl2PlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcIkZvcm1cIixcbiAgICAgICAgXCJtYXJrdXBcIjogXCI8Zm9ybSBjbGFzc05hbWU9XFxcInZzZnJtXFxcIj5cXG48L2Zvcm0+XCIsXG4gICAgICAgIFwiZXZlbnRzXCI6IFtdLFxuICAgICAgICBcInN0YXRlXCI6IFwie31cIixcbiAgICAgICAgXCJzdHlsZVwiOiBcIi52c2ZybXtcXG5oZWlnaHQ6NDAwcHg7XFxud2lkdGg6NDAwcHg7XFxufVwiLFxuICAgICAgICBcImNoaWxkcmVuXCI6IFtdLFxuICAgICAgICBcImlkXCI6IDM5MCxcbiAgICAgICAgXCJjb25maWdcIjogXCJ7fVwiLFxuICAgICAgICBcImlkTWFya3VwXCI6IFwiPGZvcm0gY2xhc3NOYW1lPVxcXCJ2c2ZybVxcXCIgZGF0YS11dWlkPVxcXCIwXFxcIj5cXG48L2Zvcm0+XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwiRW1haWxJbnB1dFwiLFxuICAgICAgICBcIm1hcmt1cFwiOiBcIjxzcGFuIGNsYXNzTmFtZT1cXFwiZW1haWxJbnB1dFxcXCI+XFxuPGlucHV0IGlkPVxcXCJpbnB1dFxcXCIgY2xhc3NOYW1lPVxcXCJlbWFpbFxcXCIgdHlwZT1cXFwiZW1haWxcXFwiIHZhbHVlPXtzdGF0ZS5lbWFpbH0gcGxhY2Vob2xkZXI9XFxcIkVtYWlsIEFkZHJlc3MgKlxcXCIvPlxcbjwvc3Bhbj5cIixcbiAgICAgICAgXCJldmVudHNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm9uQ2hhbmdlXCIsXG4gICAgICAgICAgICAgICAgXCJyZWR1Y2VyXCI6IFwic3RhdGUuZW1haWwgPSBlLnRhcmdldC52YWx1ZVwiLFxuICAgICAgICAgICAgICAgIFwicHVibGlzaGFibGVcIjogXCJcIixcbiAgICAgICAgICAgICAgICBcInB1Ymxpc2hOYW1lXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcImlucHV0XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJzdGF0ZVwiOiBcInt9XCIsXG4gICAgICAgIFwic3R5bGVcIjogXCIuZW1haWxJbnB1dCAuZW1haWx7XFxucGFkZGluZzogLjc1cmVtO1xcbmJvcmRlcjogMXB4IHNvbGlkICNlMWUxZTE7XFxuZm9udC1mYW1pbHk6IEJlbnRvblNhbnNCb29rLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG5cXG59XCIsXG4gICAgICAgIFwiY2hpbGRyZW5cIjogW10sXG4gICAgICAgIFwiaWRcIjogOTkxLFxuICAgICAgICBcImNvbmZpZ1wiOiBcInt9XCIsXG4gICAgICAgIFwiaWRNYXJrdXBcIjogXCI8c3BhbiBjbGFzc05hbWU9XFxcImVtYWlsSW5wdXRcXFwiIGRhdGEtdXVpZD1cXFwiMFxcXCI+XFxuPGlucHV0IGlkPVxcXCJpbnB1dFxcXCIgY2xhc3NOYW1lPVxcXCJlbWFpbFxcXCIgdHlwZT1cXFwiZW1haWxcXFwiIHZhbHVlPXtzdGF0ZS5lbWFpbH0gcGxhY2Vob2xkZXI9XFxcIkVtYWlsIEFkZHJlc3MgKlxcXCIvPlxcbjwvc3Bhbj5cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcIm5hbWVcIjogXCJSZXNldFBhc3N3b3JkRm9ybVwiLFxuICAgICAgICBcIm1hcmt1cFwiOiBcIjxmb3JtPjxUZXJtc0FuZFNlcnZpY2U+PC9UZXJtc0FuZFNlcnZpY2U+PEVtYWlsSW5wdXQ+PC9FbWFpbElucHV0PjxTdWJtaXRCdXR0b24+PC9TdWJtaXRCdXR0b24+PENhbmNlbEJ1dHRvbj48L0NhbmNlbEJ1dHRvbj48VGVybXNBbmRTZXJ2aWNlPjxQcml2YWN5QW5kUG9saWN5PjwvUHJpdmFjeUFuZFBvbGljeT48L1Rlcm1zQW5kU2VydmljZT5cXG48L2Zvcm0+XCIsXG4gICAgICAgIFwiZXZlbnRzXCI6IFtdLFxuICAgICAgICBcInN0YXRlXCI6IFwie1xcXCJ2YXJpYW50XFxcIjpcXFwidGV4dFxcXCJ9XCIsXG4gICAgICAgIFwic3R5bGVcIjogXCJmb3Jte1xcbmhlaWdodDo0MDBweDt9XCIsXG4gICAgICAgIFwiY2hpbGRyZW5cIjogW10sXG4gICAgICAgIFwiaWRcIjogMzY0LFxuICAgICAgICBcImNvbmZpZ1wiOiBcInt9XCIsXG4gICAgICAgIFwiaWRNYXJrdXBcIjogXCI8Zm9ybSBkYXRhLXV1aWQ9XFxcIjBcXFwiPjxUZXJtc0FuZFNlcnZpY2UgZGF0YS11dWlkPVxcXCIxXFxcIj48L1Rlcm1zQW5kU2VydmljZT48RW1haWxJbnB1dCBkYXRhLXV1aWQ9XFxcIjJcXFwiPjwvRW1haWxJbnB1dD48U3VibWl0QnV0dG9uIGRhdGEtdXVpZD1cXFwiM1xcXCI+PC9TdWJtaXRCdXR0b24+PENhbmNlbEJ1dHRvbiBkYXRhLXV1aWQ9XFxcIjRcXFwiPjwvQ2FuY2VsQnV0dG9uPjxUZXJtc0FuZFNlcnZpY2UgZGF0YS11dWlkPVxcXCI1XFxcIj48UHJpdmFjeUFuZFBvbGljeSBkYXRhLXV1aWQ9XFxcIjZcXFwiPjwvUHJpdmFjeUFuZFBvbGljeT48L1Rlcm1zQW5kU2VydmljZT5cXG48L2Zvcm0+XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwiUGFnZVwiLFxuICAgICAgICBcIm1hcmt1cFwiOiBcIjxkaXYgY2xhc3NOYW1lPVxcXCJwYWdlXFxcIj48Rm9yZ290UGFzc3dvcmQ+PC9Gb3Jnb3RQYXNzd29yZD48UmVzZXRQYXNzd29yZE1vZGFsPjwvUmVzZXRQYXNzd29yZE1vZGFsPjwvZGl2PlwiLFxuICAgICAgICBcImV2ZW50c1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib25DbG9zZU1vZGFsXCIsXG4gICAgICAgICAgICAgICAgXCJyZWR1Y2VyXCI6IFwic3RhdGUuUmVzZXRQYXNzd29yZE1vZGFsID0gW107XCIsXG4gICAgICAgICAgICAgICAgXCJwdWJsaXNoYWJsZVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwicHVibGlzaE5hbWVcIjogXCJcIixcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiVmFyaWFudE1vZGFsXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib25DbG9zZVwiLFxuICAgICAgICAgICAgICAgIFwicmVkdWNlclwiOiBcInN0YXRlLlJlc2V0UGFzc3dvcmRNb2RhbCA9IFtdO1wiLFxuICAgICAgICAgICAgICAgIFwicHVibGlzaGFibGVcIjogXCJcIixcbiAgICAgICAgICAgICAgICBcInB1Ymxpc2hOYW1lXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcIlJlc2V0UGFzc3dvcmRNb2RhbFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm9uUGFzc3dvcmRGb3Jnb3R0ZW5cIixcbiAgICAgICAgICAgICAgICBcInJlZHVjZXJcIjogXCJzdGF0ZS5SZXNldFBhc3N3b3JkTW9kYWwgPVt7dGl0bGU6IFxcXCJGb3Jnb3QgUGFzc3dvcmRcXFwiLFxcXCJmb290ZXJcXFwiOiBcXFwiQ29weXJpZ3RzXFxcIixcXFwic2hvd1xcXCI6IFxcXCJzZFxcXCJ9XVwiLFxuICAgICAgICAgICAgICAgIFwicHVibGlzaGFibGVcIjogXCJcIixcbiAgICAgICAgICAgICAgICBcInB1Ymxpc2hOYW1lXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcIkZvcmdvdFBhc3N3b3JkXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJzdGF0ZVwiOiBcIntcXFwic2hvd01vZGFsXFxcIjpmYWxzZSxcXFwibGlzdFxcXCI6WzEsMiwzLDQsNV0sXFxcIlJlc2V0UGFzc3dvcmRNb2RhbFxcXCI6W119XCIsXG4gICAgICAgIFwic3R5bGVcIjogXCIucGFnZXtcXG5oZWlnaHQ6IDcwMHB4O1xcbndpZHRoOiA1MDBweDtcXG5cXG59XCIsXG4gICAgICAgIFwiY2hpbGRyZW5cIjogW10sXG4gICAgICAgIFwiaWRcIjogODE1LFxuICAgICAgICBcImNvbmZpZ1wiOiBcIntcXFwiVmFyaWFudE1vZGFsXFxcIjp7XFxcInNob3dIaWRlUHJvcFxcXCI6XFxcInNob3dNb2RhbFxcXCIsXFxcIm92ZXJyaWRlXFxcIjpmYWxzZX0sXFxcIkZvcmdvdFBhc3N3b3JkQnV0dG9uXFxcIjp7XFxcInNob3dIaWRlUHJvcFxcXCI6XFxcIlxcXCIsXFxcIm92ZXJyaWRlXFxcIjpmYWxzZX0sXFxcIkZvcmdvdFBhc3N3b3JkXFxcIjp7XFxcInNob3dIaWRlUHJvcFxcXCI6XFxcIlxcXCIsXFxcIm92ZXJyaWRlXFxcIjpmYWxzZSxcXFwicmVuZGVyTGlzdFByb3BcXFwiOlxcXCJcXFwifSxcXFwiUmVzZXRQYXNzd29yZE1vZGFsXFxcIjp7XFxcInNob3dIaWRlUHJvcFxcXCI6XFxcInNob3dNb2RhbFxcXCIsXFxcIm92ZXJyaWRlXFxcIjp0cnVlLFxcXCJyZW5kZXJMaXN0UHJvcFxcXCI6XFxcIlxcXCJ9fVwiLFxuICAgICAgICBcImlkTWFya3VwXCI6IFwiPGRpdiBjbGFzc05hbWU9XFxcInBhZ2VcXFwiIGRhdGEtdXVpZD1cXFwiMFxcXCI+PEZvcmdvdFBhc3N3b3JkIGRhdGEtdXVpZD1cXFwiMVxcXCI+PC9Gb3Jnb3RQYXNzd29yZD48UmVzZXRQYXNzd29yZE1vZGFsIGRhdGEtdXVpZD1cXFwiMlxcXCI+PC9SZXNldFBhc3N3b3JkTW9kYWw+PC9kaXY+XCIsXG4gICAgICAgIFwidmFyaWFudHNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwic2hvd01vZGFsXCI6IFwiZmFsc2VcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInNob3dNb2RhbFwiOiBcImZhbHNlXCIsXG4gICAgICAgICAgICAgICAgXCJGb3Jnb3RQYXNzd29yZFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwic2hvd1wiOiBcImZhbHNlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwic2hvd01vZGFsXCI6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJzaG93TW9kYWxcIjogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgXCJGb3Jnb3RQYXNzd29yZFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwic2hvd1wiOiBcImZhbHNlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwic2hvd01vZGFsXCI6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwic2hvd01vZGFsXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwiRm9yZ290UGFzc3dvcmRcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInNob3dcIjogXCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInNob3dNb2RhbFwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIlZhcmlhbnRNb2RhbFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJGb3Jnb3QgUGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJmb290ZXJcIjogXCJDb3B5cmlndHNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJnb29kXCI6IFwiaGlkZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInNob3dNb2RhbFwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIlJlc2V0UGFzc3dvcmRNb2RhbFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJGb3Jnb3QgUGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJmb290ZXJcIjogXCJDb3B5cmlndHNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJzaG93XCI6IFwic2RcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJzaG93TW9kYWxcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJWYXJpYW50Rm9yZ290UGFzc3dvcmRcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInNob3dcIjogXCJmYWxzZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInZhcmlhbnRcIjogXCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwic2hvd01vZGFsXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgICAgIDIsXG4gICAgICAgICAgICAgICAgICAgIDMsXG4gICAgICAgICAgICAgICAgICAgIDQsXG4gICAgICAgICAgICAgICAgICAgIDVcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiRm9yZ290UGFzc3dvcmRcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInNob3dcIjogXCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInNob3dNb2RhbFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwibGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgICAgIDIsXG4gICAgICAgICAgICAgICAgICAgIDMsXG4gICAgICAgICAgICAgICAgICAgIDQsXG4gICAgICAgICAgICAgICAgICAgIDVcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwic2hvd01vZGFsXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgICAgIDIsXG4gICAgICAgICAgICAgICAgICAgIDMsXG4gICAgICAgICAgICAgICAgICAgIDQsXG4gICAgICAgICAgICAgICAgICAgIDVcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiUmVzZXRQYXNzd29yZE1vZGFsXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkZvcmdvdCBQYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICBcImZvb3RlclwiOiBcIkNvcHlyaWd0c1wiLFxuICAgICAgICAgICAgICAgICAgICBcInNob3dcIjogXCJzZFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInNob3dNb2RhbFwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcImxpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgICAgICAyLFxuICAgICAgICAgICAgICAgICAgICAzLFxuICAgICAgICAgICAgICAgICAgICA0LFxuICAgICAgICAgICAgICAgICAgICA1XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcIlJlc2V0UGFzc3dvcmRNb2RhbFwiLFxuICAgICAgICBcIm1hcmt1cFwiOiBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsXFxcIj5cXG48aGVhZGVyPlxcbiAgPGgzPntzdGF0ZS50aXRsZX08L2gzPlxcbiAgICA8YnV0dG9uIGlkPVxcXCJjbG9zZVxcXCIgY2xhc3NOYW1lPVxcXCJjbG9zZUJ1dHRvblxcXCI+eDwvYnV0dG9uPlxcbjwvaGVhZGVyPlxcbjxzZWN0aW9uIGNsYXNzPVxcXCJjb250ZW50XFxcIj48UmVzZXRQYXNzd29yZEZvcm0+PC9SZXNldFBhc3N3b3JkRm9ybT5cXG48L3NlY3Rpb24+XFxuPGZvb3Rlcj57c3RhdGUuZm9vdGVyfTwvZm9vdGVyPlxcbjwvZGl2PlwiLFxuICAgICAgICBcImV2ZW50c1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib25DbGlja1wiLFxuICAgICAgICAgICAgICAgIFwicmVkdWNlclwiOiBcInN0YXRlLnNob3cgPSBcXFwic2RcXFwiO1wiLFxuICAgICAgICAgICAgICAgIFwicHVibGlzaGFibGVcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcInB1Ymxpc2hOYW1lXCI6IFwib25DbG9zZVwiLFxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJjbG9zZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwic3RhdGVcIjogXCJ7XFxcInRpdGxlXFxcIjpcXFwiRm9yZ290IFBhc3N3b3JkXFxcIixcXFwiZm9vdGVyXFxcIjpcXFwiQ29weXJpZ3RzXFxcIn1cIixcbiAgICAgICAgXCJzdHlsZVwiOiBcIi5tb2RhbHtcXG4gIHdpZHRoOjQwMHB4O1xcbiAgZm9udC1zaXplOjIycHg7XFxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5jb2xvcjogYmxhY2s7XFxuICBmb250LWZhbWlseTogQmVudG9uU2Fuc0xpZ2h0LEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6NDAwO1xcbiAgICBsaW5lLWhlaWdodDogMTdweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4wNGVtO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG5cXG59XFxuXFxuLm1vZGFsIGgze1xcbiAgcGFkZGluZzoxcmVtO1xcbmZvbnQtc2l6ZToyNnB4O1xcbmZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5tb2RhbCAuY29udGVudHtcXG5wYWRkaW5nOjFyZW07XFxuZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLm1vZGFsIGZvb3RlcntcXG5wYWRkaW5nOjFyZW07XFxuICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xcbmZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbi5tb2RhbCBoZWFkZXJ7XFxuICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xcbmZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5tb2RhbCAuY2xvc2VCdXR0b257XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTBweDtcXG4gIHRvcDogMjBweDtcXG59XFxuXFxuLm1vZGFsIC5jb250ZW50e1xcbiAgICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xcbmZvbnQtd2VpZ2h0OiA0MDA7XFxufVwiLFxuICAgICAgICBcImNoaWxkcmVuXCI6IFtdLFxuICAgICAgICBcImlkXCI6IDYyNyxcbiAgICAgICAgXCJjb25maWdcIjogXCJ7fVwiLFxuICAgICAgICBcImlkTWFya3VwXCI6IFwiPGRpdiBjbGFzcz1cXFwibW9kYWxcXFwiIGRhdGEtdXVpZD1cXFwiMFxcXCI+XFxuPGhlYWRlciBkYXRhLXV1aWQ9XFxcIjFcXFwiPlxcbiAgPGgzIGRhdGEtdXVpZD1cXFwiMlxcXCI+e3N0YXRlLnRpdGxlfTwvaDM+XFxuICAgIDxidXR0b24gaWQ9XFxcImNsb3NlXFxcIiBjbGFzc05hbWU9XFxcImNsb3NlQnV0dG9uXFxcIiBkYXRhLXV1aWQ9XFxcIjNcXFwiPng8L2J1dHRvbj5cXG48L2hlYWRlcj5cXG48c2VjdGlvbiBjbGFzcz1cXFwiY29udGVudFxcXCIgZGF0YS11dWlkPVxcXCI0XFxcIj48UmVzZXRQYXNzd29yZEZvcm0gZGF0YS11dWlkPVxcXCI1XFxcIj48L1Jlc2V0UGFzc3dvcmRGb3JtPlxcbjwvc2VjdGlvbj5cXG48Zm9vdGVyIGRhdGEtdXVpZD1cXFwiNlxcXCI+e3N0YXRlLmZvb3Rlcn08L2Zvb3Rlcj5cXG48L2Rpdj5cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcIm5hbWVcIjogXCJGYWNlYm9va1wiLFxuICAgICAgICBcIm1hcmt1cFwiOiBcIjxkaXYgY2xhc3NOYW1lPVxcXCJmYWNlYm9va1xcXCI+PEhlbGxvQ29tcG9uZW50PjxNb2RhbD48Rm9yZ290UGFzc3dvcmQ+PC9Gb3Jnb3RQYXNzd29yZD48L01vZGFsPjwvSGVsbG9Db21wb25lbnQ+PC9kaXY+XCIsXG4gICAgICAgIFwiZXZlbnRzXCI6IFtdLFxuICAgICAgICBcInN0YXRlXCI6IFwie31cIixcbiAgICAgICAgXCJzdHlsZVwiOiBcIi5mYWNlYm9va3tcXG5iYWNrZ3JvdW5kLWltYWdlOiRhc3NldHNbJ2ZhY2Vib29rLnBuZyddO1xcbn1cIixcbiAgICAgICAgXCJjaGlsZHJlblwiOiBbXSxcbiAgICAgICAgXCJpZFwiOiAxMixcbiAgICAgICAgXCJjb25maWdcIjogXCJ7fVwiLFxuICAgICAgICBcImlkTWFya3VwXCI6IFwiPGRpdiBjbGFzc05hbWU9XFxcImZhY2Vib29rXFxcIiBkYXRhLXV1aWQ9XFxcIjBcXFwiPjxIZWxsb0NvbXBvbmVudCBkYXRhLXV1aWQ9XFxcIjFcXFwiPjxNb2RhbCBkYXRhLXV1aWQ9XFxcIjJcXFwiPjxGb3Jnb3RQYXNzd29yZCBkYXRhLXV1aWQ9XFxcIjNcXFwiPjwvRm9yZ290UGFzc3dvcmQ+PC9Nb2RhbD48L0hlbGxvQ29tcG9uZW50PjwvZGl2PlwiXG4gICAgfVxuXVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBzYW1wbGU6IHNhbXBsZVxufSIsImltcG9ydCBGb2xkZXIgZnJvbSBcIi4vRm9sZGVyXCI7XG5pbXBvcnQgQ29tcG9uZW50dCBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy9Db21wb25lbnR0XCI7XG5cbmxldCBzZWxlY3RlZENvbXBvbmVudCwgb25TZWxlY3Rpb24sIG9uRm9sZGVyVXBkYXRlLCBvbkRlbGV0ZSwgY29tcG9uZW50cztcblxuZnVuY3Rpb24gaW5pdGlhbGlzZVByb3BzKHByb3BzLCBjaGVja0ZvbGRlcil7XG4gICAgc2VsZWN0ZWRDb21wb25lbnQgPSBwcm9wcy5zZWxlY3RlZENvbXBvbmVudDtcbiAgICBvblNlbGVjdGlvbiA9IHByb3BzLm9uU2VsZWN0aW9uO1xuICAgIGNvbXBvbmVudHMgPSBwcm9wcy5jb21wb25lbnRzO1xuICAgIG9uRm9sZGVyVXBkYXRlID0gY2hlY2tGb2xkZXI7XG4gICAgb25EZWxldGUgPSBwcm9wcy5vbkRlbGV0ZTtcbn1cblxuZnVuY3Rpb24gcHJvY2Vzc0ZvbGRlciAoZm9sZGVyLCBpKXtcbiAgICBsZXQgY29udGVudHMgPSBmb2xkZXIuY29udGVudHM7XG5cbiAgICByZXR1cm4gPEZvbGRlclxuICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICBmb2xkZXI9e2ZvbGRlcn1cbiAgICAgICAgICAgICAgICBjb250ZW50cz17Y29udGVudHMubWFwKCBwcm9jZXNzQ29udGVudCApfVxuICAgICAgICAgICAgICAgIG9uRm9sZGVyVXBkYXRlPXtvbkZvbGRlclVwZGF0ZX1cbiAgICAgICAgICAgICAgICBvbkRlbGV0ZT17b25EZWxldGV9Lz5cbn1cblxuZnVuY3Rpb24gcHJvY2Vzc0NvbnRlbnQgKGNvbnRlbnQsIGkpe1xuXG4gICAgLy8gQ2hlY2sgaWYgY29udGVudCBpcyBhIGNvbXBvbmVudCBuYW1lLlxuICAgIGlmKHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiICl7XG5cbiAgICAgICAgcmV0dXJuIDxDb21wb25lbnR0IFxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e2NvbXBvbmVudHMuZmluZChjb21wb25lbnQ9PmNvbXBvbmVudC5uYW1lPT09Y29udGVudCl9XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQ29tcG9uZW50PXtzZWxlY3RlZENvbXBvbmVudH1cbiAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Rpb25DaGFuZ2U9e29uU2VsZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICBvbkRlbGV0ZSA9IHtvbkRlbGV0ZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICB9XG4gICAgLy8gZWxzZSBpdHMgYSBmb2xkZXIgdHlwZS5cbiAgICBlbHNlIHtcbiAgICAgICAgbGV0IGZvbGRlciA9IGNvbnRlbnQ7XG4gICAgICAgIHJldHVybiA8Rm9sZGVyXG4gICAgICAgICAgICAgICAgICAgIGZvbGRlcj17Zm9sZGVyfVxuICAgICAgICAgICAgICAgICAgICBjb250ZW50cz17Zm9sZGVyLmNvbnRlbnRzLm1hcCggcHJvY2Vzc0NvbnRlbnQgKX1cbiAgICAgICAgICAgICAgICAgICAgb25Gb2xkZXJVcGRhdGU9e29uRm9sZGVyVXBkYXRlfVxuICAgICAgICAgICAgICAgICAgICBvbkRlbGV0ZT17b25EZWxldGV9Lz5cbiAgICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGZvbGRlclN0cnVjdHVyZShwcm9wcywgY2hlY2tGb2xkZXIpe1xuICAgIGxldCBmb2xkZXJzID0gcHJvcHMuZm9sZGVycztcblxuICAgIGluaXRpYWxpc2VQcm9wcyhwcm9wcywgY2hlY2tGb2xkZXIpO1xuXG4gICAgcmV0dXJuKGZvbGRlcnMubWFwKHByb2Nlc3NGb2xkZXIpKVxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7c2VsZWN0aW9uQ2hhbmdlZCwgaGFuZGxlRHJhZ30gZnJvbSBcIi4vRXZlbnRzXCI7XG5cbmltcG9ydCB7b25FeHBvcnR9IGZyb20gXCIuLi8uLi9VdGlsaXRpZXMvQ29tcG9uZW50cy9Gb2xkZXJzL0ZvbGRlci9FdmVudHNcIjtcblxuaW1wb3J0ICBcIi4vU3R5bGUuY3NzXCI7XG5cbmNsYXNzIENvbXBvbmVudHQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNlbGVjdGVkQ29tcG9uZW50OiB0aGlzLnByb3BzLnNlbGVjdGVkQ29tcG9uZW50XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVzdG9yZUNsYXNzKGV2ZW50KXtcbiAgICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlQWRkaXRpb25hbHNcIik7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGxldCBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCBzZWxlY3RlZENvbXBvbmVudCA9IHByb3BzLnNlbGVjdGVkQ29tcG9uZW50O1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gcHJvcHMuY29tcG9uZW50O1xuICAgICAgICAvLyBSZW1vdmUgdGhpcy5wcm9wcy5pbmRleCwgaW5zdGVhZCB1c2UgdGhpcyBlbGVtZW50IGluc3RhbmNlIGluZGV4LiBSZW1vdmVzIGR1cGxpY2F0ZSBjb2RlXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmRcIiBkcmFnZ2FibGU9XCJ0cnVlXCIgZGF0YS1uYW1lPXtjb21wb25lbnQubmFtZX0gb25EcmFnU3RhcnQ9e2hhbmRsZURyYWcuYmluZCh0aGlzKX0gb25EcmFnRW5kPXt0aGlzLnJlc3RvcmVDbGFzc30+XG4gICAgICAgICAgICAgICAgPGxpIFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSB7c2VsZWN0ZWRDb21wb25lbnQgJiYgcHJvcHMuY29tcG9uZW50Lm5hbWU9PT1zZWxlY3RlZENvbXBvbmVudC5uYW1lID8gXCJzZWxlY3RlZCBjb21wb25lbnRcIjogXCJjb21wb25lbnRcIn1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljayA9IHtzZWxlY3Rpb25DaGFuZ2VkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0ge3Byb3BzLmluZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29tcG9uZW50TmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbXBvbmVudC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA9IHtwcm9wcy5pbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkV4cG9ydC5iaW5kKG51bGwsY29tcG9uZW50Lm5hbWUpfT48aSBjbGFzc05hbWU9XCJmYXMgZmEtZmlsZS1leHBvcnRcIj48L2k+RXhwb3J0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID0ge3Byb3BzLmluZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uRGVsZXRlfT48aSBjbGFzc05hbWU9XCJmYSBmYS10cmFzaFwiPjwvaT5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8LyBkaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnR0O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdGlvbkNoYW5nZWQoZSkge1xuICAgIHRoaXMucHJvcHMub25TZWxlY3Rpb25DaGFuZ2UoZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVEcmFnKGUpe1xuXG4gICAgbGV0IG5hbWUgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1uYW1lXCIpXG4gICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJoaWRlQWRkaXRpb25hbHNcIik7XG4gICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShcImNvbXBvbmVudC1uYW1lXCIsIG5hbWUpO1xufVxuXG53aW5kb3cuZXZlbnRDYWxsYmFja3MgPSB7XG4gICAgaGFuZGxlRHJhZzogaGFuZGxlRHJhZ1xufTsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zZWxlY3RlZCwgLmdyZWVuIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxuICAgIGJhY2tncm91bmQ6IHJnYig0MywgNDMsIDQzKTtcXG59XFxuXFxuLmJhY2tncm91bmQge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNjQsIDY0LCA2NCk7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzMzMzO1xcbn1cXG5cXG4uY29tcG9uZW50IHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5jb21wb25lbnQgLmNvbXBvbmVudE5hbWV7XFxuICAgIHBhZGRpbmc6N3B4O1xcbn1cXG5cXG4udGh1bWJuYWlsIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxufVxcblxcbi5oaWRlQWRkaXRpb25hbHMgc3Bhbjpub3QoLmNvbXBvbmVudE5hbWUpe1xcbiAgICBkaXNwbGF5Om5vbmU7XFxufVxcblxcbi5oaWRlQWRkaXRpb25hbHMge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVwiLCBcIlwiXSk7XG5cbiIsImltcG9ydCB7d3JpdGVEYXRhfSBmcm9tIFwiLi4vdXRpbGl0aWVzL1N0b3JhZ2VcIjtcblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBvbkRlbGV0ZShldmVudCkge1xuICAgIFxuICAgIC8vIHN0b3AgZXZlbnQgcHJvcGFnYXRpb24uIGVsc2Ugb25TZWxlY3Rpb25DaGFuZ2UgZ2V0cyByZSB0cmlnZ2VyZWQuXG4gICAgXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgbGV0IGNvbXBvbmVudE5hbWUgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmlubmVyVGV4dC5zcGxpdChcIlxcblwiKVswXTtcblxuICAgIGlmKHRoaXMuc3RhdGUuY29tcG9uZW50cy5maW5kKGNvbXBvbmVudD0+Y29tcG9uZW50Lm5hbWU9PT1jb21wb25lbnROYW1lKS5sZW5ndGg8MSl7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gR2V0IGFsbCB0aGUgZWxlbWVudHNcbiAgICBsZXQgY29tcG9uZW50cyA9IEFycmF5LmZyb20odGhpcy5zdGF0ZS5jb21wb25lbnRzKTtcbiAgICBcbiAgICAvLyBGaW5kIHRoZSBpbmRleCBvZiBlbGVtZW50IHRvIGJlIGRlbGV0ZWQuXG4gICAgbGV0IGluZGV4ID0gY29tcG9uZW50cy5maW5kSW5kZXgoY29tcG9uZW50PT5jb21wb25lbnQubmFtZT09PWNvbXBvbmVudE5hbWUpXG5cbiAgICAvLyBSZW1vdmUgdGhlIGVsZW1lbnQgZnJvbSB0aGUgbGlzdFxuICAgIGNvbXBvbmVudHMuc3BsaWNlKGluZGV4LDEpO1xuXG4gICAgLy8gVXBkYXRlIHRoZSBzdGF0ZSB3aXRoIG5ldyBlbGVtZW50cy5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY29tcG9uZW50czogY29tcG9uZW50c1xuICAgIH0pXG5cbiAgICAvLyBQZXJzaXN0IHRoZSBjaGFuZ2VzLlxuICAgIHdyaXRlRGF0YShcInVpLWVkaXRvclwiLCBjb21wb25lbnRzKVxuXG59IiwiLy8gTGlicmFyaWVzLlxuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmltcG9ydCBjb25maWcgZnJvbSBcIi4vY29uZmlnXCI7XG5cbmNsYXNzIERyYWdnYWJsZUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICBsZXQgcGFuZWxOYW1lID0gYHVpLWVkaXRvci1zZXR0aW5ncy1kcmFnZ2FibGUtY29tcG9uZW50LSR7dGhpcy5wcm9wcy5jaGlsZHJlbi5wcm9wcy50aXRsZX1gO1xuICAgICAgICB0aGlzLnN0YXRlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwYW5lbE5hbWUpKSB8fCBjb25maWdbcGFuZWxOYW1lXTtcbiAgICAgICAgdGhpcy5zdGF0ZS5kcmFnZ2FibGU9IFwiZmFsc2VcIlxuICAgIH1cblxuICAgIG1vdmVEaXYoZSl7XG4gICAgICAgIGlmKGUudGFyZ2V0LmlkPT09XCJtb3ZlXCIpe1xuICAgICAgICAgICAgbGV0IHN0YXRlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlKSk7XG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS50b3AgPSBlLnBhZ2VZICtcInB4XCJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLmxlZnQgPSBlLnBhZ2VYICtcInB4XCJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHN0eWxlIDogc3RhdGUuc3R5bGVcbiAgICAgICAgICAgIH0sKCk9PntcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgdWktZWRpdG9yLXNldHRpbmdzLWRyYWdnYWJsZS1jb21wb25lbnQtJHt0aGlzLnByb3BzLmNoaWxkcmVuLnByb3BzLnRpdGxlfWAsSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZSkpO1xuICAgICAgICAgICAgfSkgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVNaW5pbWlzZU1heGltaXNlKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBtaW5pbWlzZWQ6ICF0aGlzLnN0YXRlLm1pbmltaXNlZFxuICAgICAgICB9LCgpPT57XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgdWktZWRpdG9yLXNldHRpbmdzLWRyYWdnYWJsZS1jb21wb25lbnQtJHt0aGlzLnByb3BzLmNoaWxkcmVuLnByb3BzLnRpdGxlfWAsSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZSkpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIG9uTW91c2VFbnRlcigpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBkcmFnZ2FibGU6XCJ0cnVlXCJcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBvbk1vdXNlTGVhdmUoKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBkcmFnZ2FibGU6XCJmYWxzZVwiXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBkcmFnZ2FibGU9e3RoaXMuc3RhdGUuZHJhZ2dhYmxlfSBpZD1cIm1vdmVcIiBvbkRyYWdFbmQ9e3RoaXMubW92ZURpdi5iaW5kKHRoaXMpfSBzdHlsZT17dGhpcy5zdGF0ZS5zdHlsZX0gPlxuICAgICAgICAgICAgICAgIDxzcGFuIHRpdGxlPVwiTW92ZVwiIGNsYXNzTmFtZT1cIm1vdmUtaGFuZGxlXCIgb25Nb3VzZURvd249e3RoaXMub25Nb3VzZUVudGVyLmJpbmQodGhpcyl9IG9uTW91c2VVcD17dGhpcy5vbk1vdXNlTGVhdmUuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFycm93cy1hbHQgZmEteHNcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5taW5pbWlzZWQgPyAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHRpdGxlPVwiTWluaW1pc2VcIiBjbGFzc05hbWU9XCJtYXhpbWlzZS1oYW5kbGVcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZU1pbmltaXNlTWF4aW1pc2UuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtd2luZG93LW1heGltaXplIGZhLXhzXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdGl0bGU9XCJNaW5pbWlzZVwiIGNsYXNzTmFtZT1cIm1pbmltaXNlLWhhbmRsZVwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlTWluaW1pc2VNYXhpbWlzZS5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS13aW5kb3ctbWluaW1pemUgZmEteHNcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm1pbmltaXNlZCA/IFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZWRpdG9yLXRhYlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj57dGhpcy5wcm9wcy5jaGlsZHJlbi50eXBlLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW4gXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IERyYWdnYWJsZUNvbXBvbmVudDsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIiNtb3ZlID4gc3BhbnsgIFxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4jbW92ZSAubW92ZS1oYW5kbGV7XFxuICAgIGN1cnNvcjogbW92ZTtcXG59XFxuXFxuI21vdmUgLm1vdmUtaGFuZGxlLFxcbiNtb3ZlIC5taW5pbWlzZS1oYW5kbGUsXFxuI21vdmUgLm1heGltaXNlLWhhbmRsZSB7XFxuICAgIHBhZGRpbmctbGVmdDogMnB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAycHg7XFxufVwiLCBcIlwiXSk7XG5cbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIFwidWktZWRpdG9yLXNldHRpbmdzLWRyYWdnYWJsZS1jb21wb25lbnQtVGFnRXhwbG9yZXJcIjoge1xuICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuICAgICAgICAgICAgICAgIFwidG9wXCI6IFwiNjAycHhcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsZWZ0XCI6IFwiOTU0cHhcIlxuICAgICAgICB9LFxuICAgICAgICBcIm1pbmltaXNlZFwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwiZHJhZ2dhYmxlXCI6IFwidHJ1ZVwiXG4gICAgfSxcbiAgICBcInVpLWVkaXRvci1zZXR0aW5ncy1kcmFnZ2FibGUtY29tcG9uZW50LVN0eWxlRXhwbG9yZXJcIjoge1xuICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuICAgICAgICAgICAgICAgIFwidG9wXCI6IFwiNTg3cHhcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsZWZ0XCI6IFwiNTc3cHhcIlxuICAgICAgICB9LFxuICAgICAgICBcIm1pbmltaXNlZFwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwiZHJhZ2dhYmxlXCI6IFwidHJ1ZVwiXG4gICAgfSxcbiAgICBcInVpLWVkaXRvci1zZXR0aW5ncy1kcmFnZ2FibGUtY29tcG9uZW50LUV2ZW50c1wiOiB7XG4gICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgICAgICAgICAgICAgXCJ0b3BcIjogXCIzNTJweFwiLFxuICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogXCIxMDMxcHhcIlxuICAgICAgICB9LFxuICAgICAgICBcIm1pbmltaXNlZFwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwiZHJhZ2dhYmxlXCI6IFwidHJ1ZVwiXG4gICAgfSxcbiAgICBcInVpLWVkaXRvci1zZXR0aW5ncy1kcmFnZ2FibGUtY29tcG9uZW50LUVkaXRvclwiOiB7XG4gICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgICAgICAgICAgICAgXCJ0b3BcIjogXCI0NnB4XCIsXG4gICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiBcIjM2MnB4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtaW5pbWlzZWRcIjogZmFsc2UsXG4gICAgICAgICAgICBcImRyYWdnYWJsZVwiOiBcInRydWVcIlxuICAgIH0sXG4gICAgXCJ1aS1lZGl0b3Itc2V0dGluZ3MtZHJhZ2dhYmxlLWNvbXBvbmVudC1Db21wb25lbnRzXCI6IHtcbiAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICAgICAgICAgICAgICBcInRvcFwiOiBcIjUwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsZWZ0XCI6IFwiMjFweFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibWluaW1pc2VkXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJkcmFnZ2FibGVcIjogXCJ0cnVlXCJcbiAgICB9LFxuICAgIFwidWktZWRpdG9yLXNldHRpbmdzLWRyYWdnYWJsZS1jb21wb25lbnQtUHJldmlld1wiOiB7XG4gICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgICAgICAgICAgICAgXCJ0b3BcIjogXCI2MTRweFwiLFxuICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogXCIzMjdweFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibWluaW1pc2VkXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJkcmFnZ2FibGVcIjogXCJ0cnVlXCJcbiAgICB9LFxuICAgIFwidWktZWRpdG9yLXNldHRpbmdzLWRyYWdnYWJsZS1jb21wb25lbnQtQXNzZXRzXCI6IHtcbiAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICAgICAgICAgICAgICBcInRvcFwiOiBcIjEwNnB4XCIsXG4gICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiBcIjE1MDRweFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibWluaW1pc2VkXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJkcmFnZ2FibGVcIjogXCJ0cnVlXCJcbiAgICB9LFxuICAgIFwidWktZWRpdG9yLXNldHRpbmdzLWRyYWdnYWJsZS1jb21wb25lbnQtSGlzdG9yeVwiOiB7XG4gICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgICAgICAgICAgICAgXCJ0b3BcIjogXCI1OTVweFwiLFxuICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogXCI4NjdweFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibWluaW1pc2VkXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJkcmFnZ2FibGVcIjogXCJ0cnVlXCJcbiAgICB9XG59IiwiXG4vLyBMaWJyYXJpZXMuXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBcIi4vU3R5bGUuY3NzXCI7XG5pbXBvcnQge3VwZGF0ZU5hbWUsIHVwZGF0ZU1hcmt1cCwgdXBkYXRlU3R5bGUsIHVwZGF0ZVN0YXRlfSBmcm9tIFwiLi9SZWR1Y2VyXCI7XG5cbmltcG9ydCB7cmVhZENvbXBvbmVudH0gZnJvbSBcIi4uL3V0aWxpdGllcy9TdG9yYWdlXCI7XG5cbi8qKlxuICogU2hvd3MgQ29uZmlndXJhdG9yIG9uIHNlbGVjdCBvZiB2YWxpZCBjaGlsZCBjb21wb25lbnQgbmFtZSBpbiB0aGUgbWFya3VwIGFuZCBtb3VzZU91dCBmcm9tIG1hcmt1cFxuICogSGlkZXMgQ29uZmlndXJhdG9yIG9uIG1vdXNlTGVhdmUgZnJvbSB0aGUgZWRpdG9yLlxuICovXG5jbGFzcyBFZGl0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdmFyIGNvbXBvbmVudCA9IHJlYWRDb21wb25lbnQodGhpcy5wcm9wcy5uYW1lKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbmFtZTogY29tcG9uZW50PyBjb21wb25lbnQubmFtZSA6IFwiXCIsXG4gICAgICAgICAgICBtYXJrdXA6IGNvbXBvbmVudD8gY29tcG9uZW50Lm1hcmt1cCA6IFwiXCIsXG4gICAgICAgICAgICBzdGF0ZTogY29tcG9uZW50PyBjb21wb25lbnQuc3RhdGUgOiBcIlwiLFxuICAgICAgICAgICAgc3R5bGU6IGNvbXBvbmVudD8gY29tcG9uZW50LnN0eWxlIDogXCJcIlxuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgc2F2ZUVsZW1lbnQgKCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uU2F2ZSh7XG4gICAgICAgICAgICBuYW1lOiB0aGlzLnN0YXRlLm5hbWUsXG4gICAgICAgICAgICBtYXJrdXA6IHRoaXMuc3RhdGUubWFya3VwLFxuICAgICAgICAgICAgc3R5bGU6IHRoaXMuc3RhdGUuc3R5bGUsXG4gICAgICAgICAgICBzdGF0ZTogdGhpcy5zdGF0ZS5zdGF0ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgbGV0IG5hbWU9IHRoaXMuc3RhdGUubmFtZTtcbiAgICAgICAgbGV0IG1hcmt1cD0gdGhpcy5zdGF0ZS5tYXJrdXA7XG4gICAgICAgIGxldCBzdHlsZT0gdGhpcy5zdGF0ZS5zdHlsZTtcbiAgICAgICAgbGV0IHN0YXRlPSB0aGlzLnN0YXRlLnN0YXRlO1xuICAgICAgICAvLyBUT0RPOiBTaG91bGQgcGFzcyB0aGUgY3VycmVudCBkYXRhLiBJbnN0ZWFkIG9mIGFjY2Vzc2luZyBpdCBmcm9tIGdsb2JhbFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZWRpdG9yLXRhYlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5FZGl0b3I8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5Db21wb25lbnQgTmFtZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGVsZW1lbnQgbmFtZVwiIHZhbHVlPXtuYW1lfSBvbkNoYW5nZT17dXBkYXRlTmFtZS5iaW5kKHRoaXMpfSBpZD1cImVsZW1lbnROYW1lXCIvPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc2F2ZUVsZW1lbnQuYmluZCh0aGlzKX0gaWQ9XCJzYXZlXCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNhdmVcIj48L2k+U2F2ZTwvYnV0dG9uPiAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+Q29tcG9uZW50IE1hcmt1cDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgdmFsdWU9e21hcmt1cH0gb25DaGFuZ2U9e3VwZGF0ZU1hcmt1cC5iaW5kKHRoaXMpfSBpZD1cImVsZW1lbnRNYXJrdXBcIiB0aXRsZT1cIklEIGlzIG1hbmRhdG9yeSBmb3IgZXZlbnRzXCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+Q29tcG9uZW50IENTUzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgdmFsdWU9e3N0eWxlfSBvbkNoYW5nZT17dXBkYXRlU3R5bGUuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5Db21wb25lbnQgU3RhdGU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHZhbHVlPXtzdGF0ZX0gb25DaGFuZ2U9e3VwZGF0ZVN0YXRlLmJpbmQodGhpcyl9IGlkPVwiZWxlbWVudFN0YXRlXCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvcjtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1N0eWxlLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1N0eWxlLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmhpZGRlbntcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XCIsIFwiXCJdKTtcblxuIiwiLy8gUHVibGljLlxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTmFtZSAoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbmFtZTogZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZVxuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVNYXJrdXAgKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG1hcmt1cDogZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZVxuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiAgdXBkYXRlU3R5bGUgKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHN0eWxlOiBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlXG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVN0YXRlIChldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzdGF0ZTogZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZVxuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9wZXJ0eUNvbnRhaW5pbmdQcm9wcyhvYmope1xuICAgIC8vIEZldGNoIGxpc3Qgb2YgcHJvcHMgZnJvbSBjaGlsZC5cbiAgICBsZXQgcHJvcHMgPSBbXTtcbiAgICBsZXQgc3RhdGU7XG4gICAgdHJ5e1xuICAgICAgICBzdGF0ZSA9IEpTT04ucGFyc2Uob2JqLnN0YXRlKTtcbiAgICB9XG4gICAgY2F0Y2goZSl7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjogQ2hpbGQgc3RhdGUgaXMgYW4gaW52YWxpZCBqc29uLCB0cnkgYW4gb25saW5lIHZhbGlkYXRvciBvbiBiZWxvdyBzdHJpbmdcIilcbiAgICAgICAgY29uc29sZS5sb2coY2hpbGQuc3RhdGUpO1xuICAgIH1cbiAgICBmb3IobGV0IHByb3BlcnR5IGluIHN0YXRlKXtcbiAgICAgICAgaWYoc3RhdGVbcHJvcGVydHldLmluY2x1ZGVzKFwicHJvcFwiKSl7XG4gICAgICAgICAgICBwcm9wcy5wdXNoKHByb3BlcnR5KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcHM7XG59IiwiLy8gTGlicmFyaWVzLlxuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbi8vIERlcGVuZGVuY2llcy5cblxuXG4vLyBDb21wb25lbnRzLiBcblxuaW1wb3J0IENvbmZpZ3VyYXRvciBmcm9tIFwiLi9Db25maWd1cmF0b3JcIjtcbmltcG9ydCBOb2RlcyBmcm9tIFwiLi4vdXRpbGl0aWVzL0NvbXBvbmVudHMvTm9kZXNcIjtcbmltcG9ydCBFdmVudCBmcm9tIFwiLi9FdmVudFwiO1xuaW1wb3J0IGdldE1lc3NhZ2VzIGZyb20gXCIuL01lc3NhZ2VzXCI7XG5cbi8vIFN0eWxlcy5cblxuaW1wb3J0IFwiLi9TdHlsZS5jc3NcIjtcblxuLy8gUmVkdWNlcnMuXG5cbmltcG9ydCB7IHVwZGF0ZUV2ZW50LCBzZWxlY3RlZFRhZ0NoYW5nZWQsIGRlbGV0ZUV2ZW50LCB1cGRhdGVDb25maWd1cmF0aW9uIH0gZnJvbSBcIi4vUmVkdWNlclwiO1xuXG5cbi8vIFV0aWxzLlxuXG5pbXBvcnQgeyBnZXROb2RlVHJlZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZ2V0LW5vZGUtdHJlZS5qc1wiO1xuaW1wb3J0IHsgcmVhZERhdGEgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL1N0b3JhZ2VcIjtcblxuY2xhc3MgRXZlbnRzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZFRhZyA9IHRoaXMucHJvcHMuc2VsZWN0ZWRUYWc7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLnByb3BzLmNvbXBvbmVudDtcblxuICAgICAgICAvLyBSZXBvcnQgaWYgbm8gY29tcG9uZW50IGlzIGNyZWF0ZWQuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmNvbXBvbmVudHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZXZlbnRzLXRhYlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+RXZlbnRzPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwPkxvb2tzIGxpa2UgeW91IGRvIG5vdCBoYXZlIGFueSBXZWIgY29tcG9uZW50IGNyZWF0ZWQuIFR5cGUgc29tZSBcImh0bWxcIiBvbiB0aGUgcmlnaHQgXCJFZGl0b3JcIiB0YWI8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVwb3J0IGlmIG5vIGNvbXBvbmVudCBpcyBzZWxlY3RlZC5cbiAgICAgICAgaWYgKGNvbXBvbmVudC5uYW1lID09PSB1bmRlZmluZWQgJiYgdGhpcy5zdGF0ZS5jb21wb25lbnRzLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGV2ZW50cy10YWJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPkV2ZW50czwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cD5Mb29rcyBsaWtlIHlvdSBoYXZlIG5vdCBzZWxlY3RlZCBhbnkgY29tcG9uZW50LiBDbGljayBvbiBhbnkgb2YgdGhlIGNvbXBvbmVudCBpbiB0aGUgbGVmdCBwYW5lLjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuXG5cbiAgICAgICAgbGV0IG5vZGVUcmVlID0gZ2V0Tm9kZVRyZWUoY29tcG9uZW50LCBjb21wb25lbnQubWFya3VwLCBjb21wb25lbnQuc3R5bGUsIEpTT04ucGFyc2UoY29tcG9uZW50LnN0YXRlKSwgY29tcG9uZW50LmV2ZW50cyk7XG5cbiAgICAgICAgLy8gUmVwb3J0IGVycm9yLlxuICAgICAgICBpZiAobm9kZVRyZWUuZXJyb3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGdldE1lc3NhZ2VzKG5vZGVUcmVlLmVycm9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlcG9ydCBlcnJvciBpZiBjb21wb25lbnQgaXMgbm90IFxuICAgICAgICBpZiAobm9kZVRyZWUucmVzdWx0ID09PSB1bmRlZmluZWQgJiYgdGhpcy5zdGF0ZS5jb21wb25lbnRzLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGV2ZW50cy10YWJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPkV2ZW50czwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkVGFnID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFRhZyB8fCBcIlwiO1xuICAgICAgICBsZXQgZXZlbnRzT2ZTZWxlY3RlZFRhZywgY29uZmlndXJhdG9yLCBldmVudE5hbWVzID0gW107XG4gICAgICAgIC8vIENoZWNrIGlmIGl0IGlzIGEgY2hpbGQgY29tcG9uZW50XG4gICAgICAgIGlmIChzZWxlY3RlZFRhZy5pbmNsdWRlcyhcImNoaWxkLWNvbXBvbmVudC1cIikpIHtcbiAgICAgICAgICAgIC8vIEdldCBsaXN0IG9mIGNvbXBvbmVudHMuXG4gICAgICAgICAgICBsZXQgY29tcG9uZW50cyA9IHJlYWREYXRhKFwidWktZWRpdG9yXCIpO1xuXG4gICAgICAgICAgICAvLyBHZXQgY2hpbGQgY29tcG9uZW50IG5hbWUgZnJvbSB0aGUgc2VsZWN0ZWQgdGFnLlxuICAgICAgICAgICAgbGV0IGNoaWxkQ29tcG9uZW50TmFtZSA9IHNlbGVjdGVkVGFnLnNwbGl0KFwiY2hpbGQtY29tcG9uZW50LVwiKVsxXTtcblxuICAgICAgICAgICAgLy8gRmluZCB0aGUgY2hpbGQgY29tcG9uZW50IGZyb20gdGhlIGxpc3Qgb2YgY29tcG9uZW50cy5cbiAgICAgICAgICAgIGxldCBjaGlsZENvbXBvbmVudCA9IGNvbXBvbmVudHMuZmluZChjb21wb25lbnQgPT4gY29tcG9uZW50Lm5hbWUgPT09IGNoaWxkQ29tcG9uZW50TmFtZSk7XG5cbiAgICAgICAgICAgIC8vIEZpbmQgZXZlbnRzIHRoYXQgYXJlIHB1Ymxpc2hhYmxlIGZyb20gdGhlIGNoaWxkIGNvbXBvbmVudC5cbiAgICAgICAgICAgIGV2ZW50TmFtZXMgPSBjaGlsZENvbXBvbmVudC5ldmVudHMuZmlsdGVyKGV2ZW50ID0+IGV2ZW50LnB1Ymxpc2hhYmxlID09PSB0cnVlKS5tYXAocHVibGlzaGFibGVFdmVudCA9PiBwdWJsaXNoYWJsZUV2ZW50LnB1Ymxpc2hOYW1lKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gQ3JlYXRlIGV2ZW50IHZpZXcgZm9yIGxpc3Qgb2YgYWxsIGV2ZW50c1xuICAgICAgICAgICAgbGV0IGV2ZW50cyA9IGNvbXBvbmVudC5ldmVudHMuZmlsdGVyKGV2ZW50PT5ldmVudE5hbWVzLmZpbmQoZXZlbnROYW1lID0+ZXZlbnROYW1lICA9PT0gZXZlbnQubmFtZSAmJiBldmVudC5pZD09PWNoaWxkQ29tcG9uZW50Lm5hbWUpKVxuICAgICAgICAgICAgZXZlbnRzID0gZXZlbnRzLm1hcCgoZXZlbnQsIGluZGV4KSA9PiA8RXZlbnQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17TWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMDAwKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH0gZXZlbnQ9e2V2ZW50fSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRUYWdJRD17c2VsZWN0ZWRUYWd9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudE5hbWVzPXtldmVudE5hbWVzfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TYXZlPXt1cGRhdGVFdmVudC5iaW5kKHRoaXMpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlRXZlbnQ9e2RlbGV0ZUV2ZW50LmJpbmQodGhpcyl9IC8+KTtcblxuICAgICAgICAgICAgLy8gRmlsdGVyIG91dCBldmVudHMgdGhhdCBhcmUgbm90IHBhcnQgb2Ygc2VsZWN0ZWRUYWdcbiAgICAgICAgICAgIGV2ZW50c09mU2VsZWN0ZWRUYWcgPSBzZWxlY3RlZFRhZyA/IGV2ZW50cyA6IG51bGw7XG5cbiAgICAgICAgICAgIGNvbmZpZ3VyYXRvciA9IDxDb25maWd1cmF0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMDApfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZUNvbmZpZ3VyYXRpb24uYmluZCh0aGlzKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkTmFtZT17Y2hpbGRDb21wb25lbnROYW1lfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50PXtjb21wb25lbnR9IC8+O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZXZlbnRzID0gY29tcG9uZW50LmV2ZW50c1xuICAgICAgICAgICAgICAgIC5tYXAoKGV2ZW50LCBpbmRleCkgPT4gPEV2ZW50IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e01hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwMCl9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudD17ZXZlbnR9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFRhZ0lEPXtzZWxlY3RlZFRhZ30gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50TmFtZXM9e2V2ZW50TmFtZXN9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNhdmU9e3VwZGF0ZUV2ZW50LmJpbmQodGhpcyl9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVFdmVudD17ZGVsZXRlRXZlbnQuYmluZCh0aGlzKX0gLz4pO1xuICAgICAgICAgICAgZXZlbnRzT2ZTZWxlY3RlZFRhZyA9IHNlbGVjdGVkVGFnID8gZXZlbnRzLmZpbHRlcihldmVudCA9PiBzZWxlY3RlZFRhZy5pbmNsdWRlcyhldmVudC5wcm9wcy5ldmVudC5pZCkpIDogbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGV2ZW50cy10YWJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPkV2ZW50czwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFnc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5vZGVzIG5vZGU9e25vZGVUcmVlLnJlc3VsdH0gb25TZWxlY3RlZFRhZ0NoYW5nZWQ9e3NlbGVjdGVkVGFnQ2hhbmdlZC5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge2NvbmZpZ3VyYXRvcn1cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBFdmVudHNcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFeGlzdGluZyBFdmVudHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2V2ZW50c09mU2VsZWN0ZWRUYWd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5ldyBFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RXZlbnQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y29tcG9uZW50LmV2ZW50cy5sZW5ndGh9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudE5hbWVzPXtldmVudE5hbWVzfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRUYWdJRD17c2VsZWN0ZWRUYWd9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNhdmU9e3VwZGF0ZUV2ZW50LmJpbmQodGhpcyl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudHM7XG4iLCIvLyBMaWJyYXJpZXMuXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IFwiLi9TdHlsZS5jc3NcIlxuXG5cbmNsYXNzIENvbmZpZ3VyYXRvciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIGxldCBjb25maWcgPSBKU09OLnBhcnNlKHRoaXMucHJvcHMucGFyZW50LmNvbmZpZylbdGhpcy5wcm9wcy5jaGlsZE5hbWVdIHx8IHsgb3ZlcnJpZGU6IGZhbHNlfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG92ZXJyaWRlOiBjb25maWcub3ZlcnJpZGUsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnZWxPdmVycmlkZSgpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG92ZXJyaWRlOiAhdGhpcy5zdGF0ZS5vdmVycmlkZVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoe1xuICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgb3ZlcnJpZGU6ICF0aGlzLnN0YXRlLm92ZXJyaWRlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hpbGROYW1lOiB0aGlzLnByb3BzLmNoaWxkTmFtZSxcbiAgICAgICAgICAgIHBhcmVudE5hbWU6IHRoaXMucHJvcHMucGFyZW50Lm5hbWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2F2ZUNvbmZpZygpe1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHtcbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIG92ZXJyaWRlOiB0aGlzLnN0YXRlLm92ZXJyaWRlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoaWxkTmFtZTogdGhpcy5wcm9wcy5jaGlsZE5hbWUsXG4gICAgICAgICAgICBwYXJlbnROYW1lOiB0aGlzLnByb3BzLnBhcmVudC5uYW1lXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5DaGlsZCBDb25maWd1cmF0aW9uczwvZGl2PlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk92ZXJyaWRlIHN0YXRlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBvbkNoYW5nZT17dGhpcy50b2dnZWxPdmVycmlkZS5iaW5kKHRoaXMpfSBjaGVja2VkPXt0aGlzLnN0YXRlLm92ZXJyaWRlID8gXCJjaGVja2VkXCIgOiBcIlwifSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29uZmlndXJhdG9yO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1N0eWxlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY29uc29sZXtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICByaWdodDogMTUwcHg7XFxufVxcblxcbi5lcnJvciB7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbi5ldmVudCB7IFxcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzMzMzMzM7XFxuICAgIGJhY2tncm91bmQ6IHJnYig2NCwgNjQsIDY0KTtcXG59XFxuXFxuLmluZm8ge1xcbiAgICBjb2xvcjogeWVsbG93Z3JlZW47XFxufVxcblxcbmxhYmVsIHtcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuXFxuLmNvbmZpZ3VyYXRvciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYig2NCwgNjQsIDY0KTtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cIiwgXCJcIl0pO1xuXG4iLCIvLyBMaWJyYXJpZXMuXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgTm9kZXMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHZhciBub2RlID0gdGhpcy5wcm9wcy5ub2RlO1xuXG5cbiAgICAgICAgaWYoIW5vZGUpe1xuICAgICAgICAgICAgcmV0dXJuICg8c3Bhbj5udWxsPC9zcGFuPilcbiAgICAgICAgfVxuICAgICAgICBpZih0eXBlb2Ygbm9kZT09PVwic3RyaW5nXCIpe1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGxpPntub2RlfTwvbGk+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpZCA9IG5vZGUucHJvcHMuaWQgPyAoXCItXCIrbm9kZS5wcm9wcy5pZCkgOiBcIlwiO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIGl0IGNvbnRhaW5zIGNoaWxkcmVuLlxuICAgICAgICBpZihub2RlLnByb3BzICYmIEFycmF5LmlzQXJyYXkobm9kZS5wcm9wcy5jaGlsZHJlbikpe1xuICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0gbm9kZS5wcm9wcy5jaGlsZHJlbi5tYXAoKGNoaWxkLGluZGV4KT0+PE5vZGVzIGtleT17aW5kZXh9IG5vZGU9e2NoaWxkfSBvblNlbGVjdGVkVGFnQ2hhbmdlZD17dGhpcy5wcm9wcy5vblNlbGVjdGVkVGFnQ2hhbmdlZH0vPik7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZWxlY3RlZEVsZW1lbnRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wcm9wcy5vblNlbGVjdGVkVGFnQ2hhbmdlZH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25vZGUudHlwZSArIGlkfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bm9kZS50eXBlICtpZH1cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIG5vZGUgY29udGFpbnMgb25seSBvbmUgY2hpbGRyZW4sIGpzeCBnZXQgdHJhbnNwaWxlZCB0byBvYmplY3QgcmF0aGVyIHRoYW4gYXJyYXkuXG4gICAgICAgIGVsc2UgaWYodHlwZW9mIG5vZGUucHJvcHMuY2hpbGRyZW4gPT09IFwib2JqZWN0XCIpe1xuICAgICAgICAgICAgbGV0IGNoaWxkID0gbm9kZS5wcm9wcy5jaGlsZHJlbjtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNlbGVjdGVkRWxlbWVudFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uU2VsZWN0ZWRUYWdDaGFuZ2VkfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17KG5vZGUudHlwZS5uYW1lIHx8IG5vZGUudHlwZSkraWR9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsobm9kZS50eXBlLm5hbWUgfHwgbm9kZS50eXBlKX1cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPE5vZGVzIGtleT17aW5kZXh9IG5vZGU9e2NoaWxkfSBvblNlbGVjdGVkVGFnQ2hhbmdlZD17dGhpcy5wcm9wcy5vblNlbGVjdGVkVGFnQ2hhbmdlZH0vPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIC8vIG5lc3RlZCBjb21wb25lbnQuXG4gICAgICAgIGVsc2UgaWYodHlwZW9mIG5vZGUudHlwZSA9PT0gXCJmdW5jdGlvblwiKXtcbiAgICAgICAgICAgIHJldHVybiAoPHVsPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2VsZWN0ZWRFbGVtZW50XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17XCJjaGlsZC1jb21wb25lbnQtXCIrbm9kZS50eXBlLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wcm9wcy5vblNlbGVjdGVkVGFnQ2hhbmdlZH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICB7bm9kZS50eXBlLm5hbWV9XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZWxlY3RlZEVsZW1lbnRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtub2RlLnR5cGUraWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wcm9wcy5vblNlbGVjdGVkVGFnQ2hhbmdlZH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICB7bm9kZS50eXBlICtpZH1cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTm9kZXM7IiwiLy8gTGlicmFyaWVzLlxuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBcIi4vU3R5bGUuY3NzXCJcblxuLy8gQ29tcG9uZW50cy5cblxuaW1wb3J0IGdldE1lc3NhZ2VzIGZyb20gXCIuL01lc3NhZ2VzXCI7XG5cbi8vIFJlZHVjZXJzLiBcblxuaW1wb3J0IHt1cGRhdGVFdmVudE5hbWUsIHVwZGF0ZUV2ZW50VHlwZSwgdXBkYXRlUHVibGlzaE5hbWUsIHVwZGF0ZVJlZHVjZXJ9IGZyb20gXCIuL1JlZHVjZXJcIjtcblxuLy8gRXZlbnRzLlxuXG5pbXBvcnQge3B1Ymxpc2hFdmVudCwgZGVsZXRlRXZlbnR9IGZyb20gJy4vRXZlbnRzJztcblxuY2xhc3MgRXZlbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG5hbWU6IHRoaXMucHJvcHMuZXZlbnQgPyB0aGlzLnByb3BzLmV2ZW50Lm5hbWUgOiBcIlwiLFxuICAgICAgICAgICAgcmVkdWNlcjogdGhpcy5wcm9wcy5ldmVudCA/IHRoaXMucHJvcHMuZXZlbnQucmVkdWNlciA6IFwiXCIsXG4gICAgICAgICAgICBwdWJsaXNoYWJsZTogdGhpcy5wcm9wcy5ldmVudCA/IHRoaXMucHJvcHMuZXZlbnQucHVibGlzaGFibGUgOiBcIlwiLFxuICAgICAgICAgICAgcHVibGlzaE5hbWU6IHRoaXMucHJvcHMuZXZlbnQgPyB0aGlzLnByb3BzLmV2ZW50LnB1Ymxpc2hOYW1lIDogXCJcIixcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZFRhZ0lEID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRNZXNzYWdlcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHB1Ymxpc2hOYW1lID0gdGhpcy5zdGF0ZS5wdWJsaXNoYWJsZT8gPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3VwZGF0ZVB1Ymxpc2hOYW1lLmJpbmQodGhpcyl9IHZhbHVlPXt0aGlzLnN0YXRlLnB1Ymxpc2hOYW1lfSBwbGFjZWhvbGRlcj1cIkVudGVyIGV2ZW50IHB1Ymxpc2ggbmFtZSBmb3Igb3RoZXIgY29tcG9uZW50cyB0byBzdWJzY3JpYmUgdG9cIi8+IDogbnVsbDtcbiAgICAgICAgbGV0IGV2ZW50TmFtZXMgPSB0aGlzLnByb3BzLmV2ZW50TmFtZXMubWFwKGV2ZW50TmFtZT0+PG9wdGlvbiB2YWx1ZT17ZXZlbnROYW1lfT48L29wdGlvbj4pXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnRcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgbGlzdD1cImJyb3dzZXJzXCIgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dXBkYXRlRXZlbnROYW1lLmJpbmQodGhpcyl9IHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9IHBsYWNlaG9sZGVyPVwiRW50ZXIgZXZlbnQgbmFtZVwiIHRpdGxlPVwiRXZlbnQgTmFtZVwiLz5cbiAgICAgICAgICAgICAgICA8ZGF0YWxpc3QgaWQ9XCJicm93c2Vyc1wiPlxuICAgICAgICAgICAgICAgICAgICB7ZXZlbnROYW1lc31cbiAgICAgICAgICAgICAgICA8L2RhdGFsaXN0PlxuICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIG9uQ2hhbmdlPXt1cGRhdGVSZWR1Y2VyLmJpbmQodGhpcyl9IHZhbHVlPXt0aGlzLnN0YXRlLnJlZHVjZXJ9IHBsYWNlaG9sZGVyPVwiRW50ZXIgc3RhdGUgcmVkdWNlclwiIHRpdGxlPVwiUmVkdWNlclwiLz5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBvbkNoYW5nZT17dXBkYXRlRXZlbnRUeXBlLmJpbmQodGhpcyl9IGNoZWNrZWQ9e3RoaXMuc3RhdGUucHVibGlzaGFibGU/IFwiY2hlY2tlZFwiOiBcIlwifS8+XG4gICAgICAgICAgICAgICAgICAgIFB1Ymxpc2hhYmxlXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIHtwdWJsaXNoTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwdWJsaXNoRXZlbnQuYmluZCh0aGlzKX0gaWQ9XCJzYXZlRXZlbnRcIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtc2F2ZVwiPjwvaT5TYXZlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17ZGVsZXRlRXZlbnQuYmluZCh0aGlzKX0gaWQ9XCJkZWxldGVFdmVudFwiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS10cmFzaFwiPjwvaT5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnQ7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jb25zb2xle1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHJpZ2h0OiAxNTBweDtcXG59XFxuXFxuLmVycm9yIHtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmV2ZW50IHsgXFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzMzMzMzMztcXG4gICAgYmFja2dyb3VuZDogcmdiKDY0LCA2NCwgNjQpO1xcbn1cXG5cXG4uaW5mbyB7XFxuICAgIGNvbG9yOiB5ZWxsb3dncmVlbjtcXG59XFxuXFxubGFiZWwge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4uZXZlbnQgaW5wdXQge1xcbiAgICBtYXJnaW4tbGVmdDowcHg7XFxufVxcblxcbi5ldmVudCB0ZXh0YXJlYSB7XFxuICAgIG1hcmdpbi10b3A6IDhweDtcXG59XCIsIFwiXCJdKTtcblxuIiwiaW1wb3J0IE1lc3NhZ2VzQ29tcG9uZW50IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvQ29tcG9uZW50cy9NZXNzYWdlc0NvbXBvbmVudFwiO1xuXG5mdW5jdGlvbiBnZXRNZXNzYWdlcyAoKSB7XG4gICAgbGV0IG1lc3NhZ2VzID0gW3tcbiAgICAgICAgdHlwZTogXCJpbmZvXCIsXG4gICAgICAgIHRleHQ6IFwiIzEgSU5GTzogU2VsZWN0IGFueSBlbGVtZW50IGluIHRoZSBsZWZ0IG1vc3QgcGFuZShlZGl0b3IgcGFuZSkgdG8gc2VlIGl0cyBjb250ZW50XCJcbiAgICB9LHtcbiAgICAgICAgdHlwZTogXCJpbmZvXCIsXG4gICAgICAgIHRleHQ6IFwiIzIgSU5GTzogQ2xpY2sgb24gJ0FkZCcgdG8gYWRkIGFuIGNvbXBvbmVudFwiXG4gICAgfV1cblxuICAgIHJldHVybiA8TWVzc2FnZXNDb21wb25lbnQgbWVzc2FnZXM9e21lc3NhZ2VzfSAvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0TWVzc2FnZXM7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY29uc29sZXtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICByaWdodDogMTUwcHg7XFxuICAgIGJvdHRvbTogNTBweDtcXG59XFxuXFxuLmVycm9yIHtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuXFxuLmluZm8ge1xcbiAgICBjb2xvcjogeWVsbG93Z3JlZW47XFxufVwiLCBcIlwiXSk7XG5cbiIsIi8vIExpYnJhcmllcy5cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5jbGFzcyBNZXNzYWdlQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGxldCAgbWVzc2FnZSA9IHRoaXMucHJvcHMubWVzc2FnZTtcblxuICAgICAgICBpZihtZXNzYWdlLnR5cGUgPT09IFwiZXJyb3JcIiB8fCBtZXNzYWdlLnR5cGU9PT0gXCJpbmZvXCIpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e21lc3NhZ2UudHlwZX0+XG4gICAgICAgICAgICAgICAgICAgIDxjb2RlPnttZXNzYWdlLnRleHR9PC9jb2RlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UudHlwZSArIFwiIGlzIHVuaWRlbnRpZmllZCBtZXNzYWdlIHR5cGUgZm9yIDxNZXNzYWdlc0NvbXBvbmVudC8+LiBQbGVhc2UgdXNlIGVpdGhlciAnZXJyb3InIG9yICdpbmZvJyBvbmx5LiBJZiB5b3UgcmVxdWlyZSBhIGRpZmZlcmVudCB0eXBlLCByYWlzZSBhbiBpc3N1ZSwgc2VuZCBhIFBSXCIpXG4gICAgICAgICAgICByZXR1cm4gIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnNvbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZXJyb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxjb2RlPntcImVycm9yIDogdW5pZGVudGlmaWVkIG1lc3NhZ2UgdHlwZS4gUGxlYXNlIHVzZSBlaXRoZXIgZXJyb3IvIGluZm8gb25seVwifTwvY29kZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZUNvbXBvbmVudDsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5lcnJvciB7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcblxcbi5pbmZvIHtcXG4gICAgY29sb3I6IHllbGxvd2dyZWVuO1xcbn1cIiwgXCJcIl0pO1xuXG4iLCJcbiAgZnVuY3Rpb24gIHVwZGF0ZUV2ZW50TmFtZShlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbmFtZTogZS50YXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgZnVuY3Rpb24gIHVwZGF0ZVJlZHVjZXIoZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJlZHVjZXI6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gZnVuY3Rpb24gICB1cGRhdGVQdWJsaXNoTmFtZShlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcHVibGlzaE5hbWU6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gIGZ1bmN0aW9uICB1cGRhdGVFdmVudFR5cGUoZSl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcHVibGlzaGFibGU6IGUuY3VycmVudFRhcmdldC5jaGVja2VkXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgICAgIHVwZGF0ZUV2ZW50TmFtZSxcbiAgICAgICAgdXBkYXRlRXZlbnRUeXBlLFxuICAgICAgICB1cGRhdGVQdWJsaXNoTmFtZSxcbiAgICAgICAgdXBkYXRlRXZlbnRUeXBlLFxuICAgICAgICB1cGRhdGVSZWR1Y2VyXG4gICAgfSIsImV4cG9ydCBmdW5jdGlvbiBwdWJsaXNoRXZlbnQoKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25TYXZlKHtcbiAgICAgICAgICAgIG5hbWU6IHRoaXMuc3RhdGUubmFtZSxcbiAgICAgICAgICAgIHJlZHVjZXI6IHRoaXMuc3RhdGUucmVkdWNlcixcbiAgICAgICAgICAgIGluZGV4OiB0aGlzLnByb3BzLmluZGV4LFxuICAgICAgICAgICAgcHVibGlzaGFibGU6IHRoaXMuc3RhdGUucHVibGlzaGFibGUsXG4gICAgICAgICAgICBwdWJsaXNoTmFtZTogdGhpcy5zdGF0ZS5wdWJsaXNoTmFtZVxuICAgICAgICB9KVxuICAgIH1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUV2ZW50KCl7XG4gICAgICAgIHRoaXMucHJvcHMuZGVsZXRlRXZlbnQodGhpcy5wcm9wcy5pbmRleCk7XG4gICAgfSIsImltcG9ydCBNZXNzYWdlc0NvbXBvbmVudCBmcm9tIFwiLi4vdXRpbGl0aWVzL0NvbXBvbmVudHMvTWVzc2FnZXNDb21wb25lbnRcIjtcblxuZnVuY3Rpb24gZ2V0TWVzc2FnZXMgKGVycm9yKSB7XG5cbiAgICBsZXQgbWVzc2FnZXMgPSBbe1xuICAgICAgICB0eXBlOlwiZXJyb3JcIixcbiAgICAgICAgdGV4dDpcIkVSUk9SIDogXCIrZXJyb3IrXCJkZXZlbG9wZXIgbG9nOiBsb29rIGluIGNvbnNvbGUgcmVsYXRlZCB0byBldmFsXCJcbiAgICB9XVxuICAgIHJldHVybiAoXG4gICAgICAgIDxNZXNzYWdlc0NvbXBvbmVudCBtZXNzYWdlcyA9IHttZXNzYWdlc30vPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0TWVzc2FnZXM7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1N0eWxlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZXZlbnRzIHtcXG4gICAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uZXJyb3Ige1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHJpZ2h0OiAxNTBweDtcXG59XCIsIFwiXCJdKTtcblxuIiwiXG4gICAgZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUV2ZW50KGV2ZW50KSB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLmNvbXBvbmVudCkpXG5cbiAgICAgICAgLy8gS2VlcCB0aGUgY2hpbGQgY29tcG9uZW50IG5hbWUgYXMgdGhlIElELiBXaWxsIGNhdXNlIHByb2JsZW0gaW4gZnV0dXJlIGZvciBsaXN0IHJlbmRlcmluZyBib3kuXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuc2VsZWN0ZWRUYWcuaW5jbHVkZXMoXCJjaGlsZC1jb21wb25lbnQtXCIpKXtcbiAgICAgICAgICAgIGV2ZW50LmlkID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFRhZy5zcGxpdChcImNoaWxkLWNvbXBvbmVudC1cIilbMV1cbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgZXZlbnQuaWQgPSB0aGlzLnN0YXRlLnNlbGVjdGVkVGFnLnNwbGl0KFwiLVwiKVsxXTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBZGQgXG4gICAgICAgIGlmIChldmVudC5pbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBlbGVtZW50LmV2ZW50cy5wdXNoKGV2ZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEVkaXRcbiAgICAgICAgICAgIGVsZW1lbnQuZXZlbnRzW2V2ZW50LmluZGV4XSA9IGV2ZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcm9wcy5vbkV2ZW50c1VwZGF0ZShlbGVtZW50LmV2ZW50cyk7XG4gICAgfVxuXG4gICAgZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdGVkVGFnQ2hhbmdlZChlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2VsZWN0ZWRUYWc6IGUuY3VycmVudFRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGV4cG9ydCBmdW5jdGlvbiBkZWxldGVFdmVudChpbmRleCkge1xuXG4gICAgICAgIC8vIEdldCBjdXJyZW50IGNvbXBvbmVudC5cbiAgICAgICAgbGV0IGVsZW1lbnQgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUuZWxlbWVudCkpO1xuXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgZXZlbnQgdG8gYmUgZGVsZXRlZC5cbiAgICAgICAgZWxlbWVudC5ldmVudHMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgICAgICAvLyBVcGRhdGUgZWxlbWVudHMgd2l0aCBuZXcgZXZlbnRzLlxuICAgICAgICB0aGlzLnByb3BzLm9uRXZlbnRzVXBkYXRlKGVsZW1lbnQuZXZlbnRzKTtcbiAgICB9XG5cbiAgICBleHBvcnQgZnVuY3Rpb24gdXBkYXRlQ29uZmlndXJhdGlvbihjb25maWcpe1xuICAgICAgICB0aGlzLnByb3BzLm9uQ29uZmlnVXBkYXRlKGNvbmZpZyk7XG4gICAgfSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHvCoHNhdmVDb21wb25lbnRzVG9XaW5kb3csIGdldE5lc3RlZENvbXBvbmVudHMgfSBmcm9tIFwiLi9SdW50aW1lXCI7XG5cbi8vIFdoeT8gQmVjYXVzZSBpbXBvcnRpbmcgUmVhY3QgYXMgdmFyaWFibGUgYXQgbGluZSMyIHdpbGwgYmUgYWx0ZXJ0ZWQgYnkgYmFiZWwuIEtlZXAgaXQgYXMgYSBwcm9wZXJ0eSwgYmFiZWwgd2lsbCBpZ25vcmUgaXQuXG53aW5kb3cuUmVhY3QgPSBSZWFjdDtcbndpbmRvdy5Db21wb25lbnQgPSBSZWFjdC5Db21wb25lbnQ7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROb2RlVHJlZShlbGVtZW50LCBqc3gsIHN0eWxlLCBzdGF0ZSwgZXZlbnRzKSB7XG4gICAgXG4gICAgbGV0IHJlc3VsdCwgZXJyb3I7XG4gICAgdHJ5e1xuICAgICAgICBsZXQgbmVzdGVkQ29tcG9uZW50cyA9IGdldE5lc3RlZENvbXBvbmVudHMoZWxlbWVudCk7XG4gICAgICAgIGlmIChuZXN0ZWRDb21wb25lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHNhdmVDb21wb25lbnRzVG9XaW5kb3cobmVzdGVkQ29tcG9uZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ID0gZXZhbChCYWJlbC50cmFuc2Zvcm0oanN4LCB7IHByZXNldHM6IFsncmVhY3QnXSB9KS5jb2RlKVxuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIGVycm9yID0gZTtcbiAgICB9XG4gICAgZmluYWxseXtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgICAgICAgIHJlc3VsdCwgcmVzdWx0XG4gICAgICAgIH07XG4gICAgfVxufSIsIi8vIExpYnJhcmllcy5cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBwb3BIaXN0b3J5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9TdG9yYWdlXCI7XG5cbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNsYXNzIEhpc3RvcnkgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICByZWZyZXNoVG9QcmV2aW91cygpe1xuICAgICAgICBwb3BIaXN0b3J5KCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwcmV2aWV3XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICBIaXN0b3J5XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnJlZnJlc2hUb1ByZXZpb3VzLmJpbmQodGhpcyl9PkdvIGJhY2s8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBIaXN0b3J5OyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNvbnRhaW5lcntcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAyNnB4IC04cHggYmxhY2s7XFxuICAgIGJhY2tncm91bmQ6ICMyQzMxMzQ7XFxufVxcblwiLCBcIlwiXSk7XG5cbiIsIi8vIExpYnJhcmllcy5cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5pbXBvcnQgRHluYW1pY0NvbXBvbmVudCBmcm9tIFwiLi9EeW5hbWljQ29tcG9uZW50XCI7XG5cbi8vIFV0aWxpdGllcy5cblxuaW1wb3J0IHsgcmVhZENvbXBvbmVudCB9IGZyb20gXCIuLi91dGlsaXRpZXMvU3RvcmFnZVwiO1xuXG5jbGFzcyBQcmV2aWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjb21wb25lbnQ6IHRoaXMucHJvcHMuY29tcG9uZW50XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWZyZXNoKCApe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogcmVhZENvbXBvbmVudCh0aGlzLnN0YXRlLmNvbXBvbmVudC5uYW1lKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICAvLyBIZWxwcyB0byByZXJlbmRlciB3aGVuIGNoYW5nZXMgdG8gbWFya3VwL2V2ZW50cyBhcmUgbWFkZSB0byB0aGUgY29tcG9uZW50IGFuZCBwcmV2aWV3IHRoZW0uXG4gICAgICAgIGxldCByYW5kb21LZXkgPSB0aGlzLnByb3BzLmNvbXBvbmVudC5pZCoofn4oTWF0aC5yYW5kb20oKSoxMCkpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcHJldmlld1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgUHJldmlld1xuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxEeW5hbWljQ29tcG9uZW50IGtleT17cmFuZG9tS2V5fSBjb21wb25lbnQ9e3RoaXMuc3RhdGUuY29tcG9uZW50fS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJldmlldzsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jb250YWluZXJ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMjZweCAtOHB4IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kOiAjMkMzMTM0O1xcbn1cXG5cXG4uZHJvcFBvaW50e1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXG59XFxuXFxuLnRhcmdldENoaWxke1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjM0U4Q0U0O1xcbn1cIiwgXCJcIl0pO1xuXG4iLCIvLyBMaWJyYXJpZXMuXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHvCoGdldE5lc3RlZENvbXBvbmVudHMsIHNhdmVDb21wb25lbnRzVG9XaW5kb3cgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL1J1bnRpbWVcIjtcblxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuY2xhc3MgRHluYW1pY0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY29tcG9uZW50OiB0aGlzLnByb3BzLmNvbXBvbmVudFxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBpZih0aGlzLnN0YXRlLmNvbXBvbmVudC5uYW1lPT09dW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHJldHVybiAoPGRpdj5ObyBjb21wb25lbnQgc2VsZWN0ZWQuPC9kaXY+KVxuICAgICAgICB9XG4gICAgICAgIGxldCBuZXN0ZWRDb21wb25lbnRzID0gZ2V0TmVzdGVkQ29tcG9uZW50cyh0aGlzLnN0YXRlLmNvbXBvbmVudCk7XG4gICAgICAgIGlmIChuZXN0ZWRDb21wb25lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHNhdmVDb21wb25lbnRzVG9XaW5kb3cobmVzdGVkQ29tcG9uZW50cyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZighd2luZG93W3RoaXMuc3RhdGUuY29tcG9uZW50Lm5hbWVdKXtcbiAgICAgICAgICAgIHJldHVybiAoPGRpdj5Db21wb25lbnQgbm90IHJlbmRlcmVkPC9kaXY+KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge1JlYWN0LmNyZWF0ZUVsZW1lbnQod2luZG93W3RoaXMuc3RhdGUuY29tcG9uZW50Lm5hbWVdKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBEeW5hbWljQ29tcG9uZW50OyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmJveCB7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nOjVweDtcXG59XCIsIFwiXCJdKTtcblxuIiwiaW1wb3J0IHt3cml0ZURhdGF9IGZyb20gXCIuLi91dGlsaXRpZXMvU3RvcmFnZVwiO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVFdmVudCAoZXZlbnRzKSB7XG4gICAgLy8gQ3JlYXRlIG5ldyBzdGF0ZS5cbiAgICBsZXQgbmV3RWxlbWVudHMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlKS5jb21wb25lbnRzO1xuICAgIGxldCBzZWxlY3RlZENvbXBvbmVudCA9IG5ld0VsZW1lbnRzLmZpbmQoZWxlbWVudD0+ZWxlbWVudC5uYW1lPT09dGhpcy5zdGF0ZS5zZWxlY3RlZENvbXBvbmVudC5uYW1lKVxuXG4gICAgc2VsZWN0ZWRDb21wb25lbnQuZXZlbnRzID0gZXZlbnRzO1xuXG4gICAgLy8gU2V0IHN0YXRlIHRvIHRoZSBuZXcgc3RhdGUuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGVsZW1lbnRzOiBuZXdFbGVtZW50c1xuICAgIH0pO1xuXG4gICAgd3JpdGVEYXRhKFwidWktZWRpdG9yXCIsIG5ld0VsZW1lbnRzKVxuXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUNvbmZpZyhjb25maWcpe1xuICAgIFxuICAgIGxldCBuZXdFbGVtZW50cyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUpLmNvbXBvbmVudHM7XG4gICAgXG4gICAgbGV0IHBhcmVudCA9IG5ld0VsZW1lbnRzLmZpbmQoZWxlbWVudD0+ZWxlbWVudC5uYW1lPT09Y29uZmlnLnBhcmVudE5hbWUpO1xuICAgIGxldCBjaGlsZCA9IG5ld0VsZW1lbnRzLmZpbmQoZWxlbWVudD0+ZWxlbWVudC5uYW1lPT09Y29uZmlnLmNoaWxkTmFtZSk7XG5cbiAgICBwYXJlbnQuc3RhdGUgPSBKU09OLnBhcnNlKHBhcmVudC5zdGF0ZSk7XG5cbiAgICBpZihwYXJlbnQuY29uZmlnID09PSB1bmRlZmluZWQpe1xuICAgICAgICBwYXJlbnQuY29uZmlnID0ge307XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBwYXJlbnQuY29uZmlnID0gSlNPTi5wYXJzZShwYXJlbnQuY29uZmlnKTtcbiAgICB9XG4gICAgcGFyZW50LmNvbmZpZ1tjaGlsZC5uYW1lXSA9IGNvbmZpZy5jb25maWc7XG4gICAgZGVidWdnZXI7XG4gICAgaWYocGFyZW50LmNvbmZpZ1tjaGlsZC5uYW1lXS5vdmVycmlkZSkgeyAgICBcbiAgICAgICAgcGFyZW50LnN0YXRlW2NoaWxkLm5hbWVdID0gW0pTT04ucGFyc2UoY2hpbGQuc3RhdGUpXTtcbiAgICB9IFxuICAgIGVsc2Uge1xuICAgICAgICBkZWxldGUgcGFyZW50LnN0YXRlW2NoaWxkLm5hbWVdO1xuICAgIH1cblxuXG4gICAgcGFyZW50LnN0YXRlID0gSlNPTi5zdHJpbmdpZnkocGFyZW50LnN0YXRlKVxuICAgIHBhcmVudC5jb25maWc9IEpTT04uc3RyaW5naWZ5KHBhcmVudC5jb25maWcpXG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZWxlbWVudHM6IG5ld0VsZW1lbnRzXG4gICAgfSlcblxuICAgIHdyaXRlRGF0YShcInVpLWVkaXRvclwiLCBuZXdFbGVtZW50cylcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUVsZW1lbnQgKGVsZW1lbnQpIHtcbiAgICBsZXQgY29tcG9uZW50cyA9IEFycmF5LmZyb20odGhpcy5zdGF0ZS5jb21wb25lbnRzKTtcbiAgICBcbiAgICAvLyBDaGVjayBpZiBlbGVtZW50IGV4aXN0LlxuICAgIGxldCBlbGVtZW50RXhpc3QgPSBjb21wb25lbnRzLmZpbmQoY29tcG9uZW50PT5jb21wb25lbnQubmFtZT09PWVsZW1lbnQubmFtZSk7XG4gICAgbGV0IHNlbGVjdGVkQ29tcG9uZW50ID0gY29tcG9uZW50cy5maW5kKGNvbXBvbmVudD0+Y29tcG9uZW50Lm5hbWU9PT10aGlzLnN0YXRlLnNlbGVjdGVkQ29tcG9uZW50Lm5hbWUpO1xuICAgIGxldCBzZWxlY3RlZEluZGV4ID0gY29tcG9uZW50cy5maW5kSW5kZXgoY29tcG9uZW50PT5jb21wb25lbnQubmFtZT09PXRoaXMuc3RhdGUuc2VsZWN0ZWRDb21wb25lbnQubmFtZSk7XG4gICAgaWYoZWxlbWVudEV4aXN0KXtcbiAgICAgICAgLy8gRmluZCB0aGUgZWxlbWVudC5cbiAgICAgICAgbGV0IGVsZW1lbnRVbmRlckVkaXQgPSBzZWxlY3RlZENvbXBvbmVudDtcblxuICAgICAgICAvLyBNZXJnZS5cbiAgICAgICAgZWxlbWVudFVuZGVyRWRpdCA9IE9iamVjdC5hc3NpZ24oZWxlbWVudFVuZGVyRWRpdCwgZWxlbWVudClcblxuICAgICAgICAvLyBQdXNoIGl0IHRvIG9yaWdpbmFsIGxpc3QuXG4gICAgICAgIGNvbXBvbmVudHNbc2VsZWN0ZWRJbmRleF0gPSBlbGVtZW50VW5kZXJFZGl0O1xuICAgIH1cblxuICAgIGVsc2Uge1xuICAgICAgICBsZXQgbmV3RWxlbWVudCA9IHtcbiAgICAgICAgICAgIG5hbWU6IGVsZW1lbnQubmFtZSxcbiAgICAgICAgICAgIG1hcmt1cDogZWxlbWVudC5tYXJrdXAsXG4gICAgICAgICAgICBldmVudHM6IFtdLFxuICAgICAgICAgICAgc3RhdGU6IGVsZW1lbnQuc3RhdGUgfHwgXCJ7fVwiLFxuICAgICAgICAgICAgc3R5bGU6IGVsZW1lbnQuc3R5bGUsXG4gICAgICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICAgICAgICBpZDogTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkqMTAwMCksXG4gICAgICAgICAgICBjb25maWc6XCJ7fVwiXG4gICAgICAgIH07XG5cbiAgICAgICAgY29tcG9uZW50cy5wdXNoKG5ld0VsZW1lbnQpO1xuICAgICAgICBzZWxlY3RlZEluZGV4ID0gY29tcG9uZW50cy5sZW5ndGgtMTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZWxlbWVudHM6IGNvbXBvbmVudHMsXG4gICAgICAgIGVsZW1lbnQ6IHtcbiAgICAgICAgICAgIG5hbWU6IGVsZW1lbnQubmFtZSxcbiAgICAgICAgICAgIG1hcmt1cDogZWxlbWVudC5tYXJrdXAsXG4gICAgICAgICAgICBzdHlsZTogZWxlbWVudC5zdHlsZSxcbiAgICAgICAgICAgIHN0YXRlOiBlbGVtZW50LnN0YXRlLFxuICAgICAgICAgICAgZXZlbnRzOiBlbGVtZW50LmV2ZW50cyB8fCBbXVxuICAgICAgICB9LFxuICAgICAgICBzaG93RWRpdG9yOiBmYWxzZVxuICAgIH0pO1xuXG4gICAgd3JpdGVEYXRhKFwidWktZWRpdG9yXCIsIGNvbXBvbmVudHMpXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVNlbGVjdGVkQ29tcG9uZW50IChlKSB7XG4gICAgbGV0IGNvbXBvbmVudE5hbWUgPSBlLmN1cnJlbnRUYXJnZXQuaW5uZXJUZXh0LnNwbGl0KFwiXFxuXCIpWzBdO1xuICAgIC8vIEZpbmQgdGhlIGVsZW1lbnQgZnJvbSBzdGF0ZSB0aGF0IG1hdGNoZXMgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBlbGVtZW50LlxuICAgIGxldCBzZWxlY3RlZENvbXBvbmVudCA9IHRoaXMuc3RhdGUuY29tcG9uZW50cy5maW5kKGNvbXBvbmVudD0+Y29tcG9uZW50Lm5hbWU9PT1jb21wb25lbnROYW1lKTtcblxuICAgIHdpbmRvdy5zZWxlY3RlZGNvbXBvbmVudG5hbWUgPSBzZWxlY3RlZENvbXBvbmVudC5uYW1lO1xuICAgIC8vIFVwZGF0ZSB0aGUgc3RhdGUgd2l0aCBzZWxlY3RlZEVsZW1lbnQuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNlbGVjdGVkQ29tcG9uZW50XG4gICAgfSlcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=