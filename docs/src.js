(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return nonpassive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return nonpassivecapture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return nopropagation; });
// These are typically used in conjunction with noevent to ensure that we can
// preventDefault on the event.
const nonpassive = {passive: false};
const nonpassivecapture = {capture: true, passive: false};

function nopropagation(event) {
  event.stopImmediatePropagation();
}

/* harmony default export */ __webpack_exports__["a"] = (function(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
});


/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ d3_zoom_src_zoom; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ transform_identity; });

// UNUSED EXPORTS: zoomTransform, ZoomTransform

// EXTERNAL MODULE: ./node_modules/d3-dispatch/src/dispatch.js
var dispatch = __webpack_require__(131);

// EXTERNAL MODULE: ./node_modules/d3-drag/src/nodrag.js
var nodrag = __webpack_require__(21);

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/zoom.js
var epsilon2 = 1e-12;

function cosh(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}

function sinh(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}

function tanh(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}

/* harmony default export */ var src_zoom = ((function zoomRho(rho, rho2, rho4) {

  // p0 = [ux0, uy0, w0]
  // p1 = [ux1, uy1, w1]
  function zoom(p0, p1) {
    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2],
        ux1 = p1[0], uy1 = p1[1], w1 = p1[2],
        dx = ux1 - ux0,
        dy = uy1 - uy0,
        d2 = dx * dx + dy * dy,
        i,
        S;

    // Special case for u0 ≅ u1.
    if (d2 < epsilon2) {
      S = Math.log(w1 / w0) / rho;
      i = function(t) {
        return [
          ux0 + t * dx,
          uy0 + t * dy,
          w0 * Math.exp(rho * t * S)
        ];
      }
    }

    // General case.
    else {
      var d1 = Math.sqrt(d2),
          b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
          b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
          r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
          r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
      S = (r1 - r0) / rho;
      i = function(t) {
        var s = t * S,
            coshr0 = cosh(r0),
            u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
        return [
          ux0 + u * dx,
          uy0 + u * dy,
          w0 * coshr0 / cosh(rho * s + r0)
        ];
      }
    }

    i.duration = S * 1000 * rho / Math.SQRT2;

    return i;
  }

  zoom.rho = function(_) {
    var _1 = Math.max(1e-3, +_), _2 = _1 * _1, _4 = _2 * _2;
    return zoomRho(_1, _2, _4);
  };

  return zoom;
})(Math.SQRT2, 2, 4));

// EXTERNAL MODULE: ./node_modules/d3-selection/src/select.js
var src_select = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/d3-selection/src/pointer.js + 1 modules
var pointer = __webpack_require__(133);

// EXTERNAL MODULE: ./node_modules/d3-selection/src/selection/index.js + 37 modules
var src_selection = __webpack_require__(18);

// CONCATENATED MODULE: ./node_modules/d3-timer/src/timer.js
var timer_frame = 0, // is an animation frame pending?
    timeout = 0, // is a timeout pending?
    interval = 0, // are any timers active?
    pokeDelay = 1000, // how frequently we check for clock skew
    taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = typeof performance === "object" && performance.now ? performance : Date,
    setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call =
  this._time =
  this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer;
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++timer_frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(undefined, e);
    t = t._next;
  }
  --timer_frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  timer_frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    timer_frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(), delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (timer_frame) return; // Soonest alarm already set, or will be.
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    timer_frame = 1, setFrame(wake);
  }
}

// CONCATENATED MODULE: ./node_modules/d3-timer/src/timeout.js


/* harmony default export */ var src_timeout = (function(callback, delay, time) {
  var t = new Timer;
  delay = delay == null ? 0 : +delay;
  t.restart(elapsed => {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/schedule.js



var emptyOn = Object(dispatch["a" /* default */])("start", "end", "cancel", "interrupt");
var emptyTween = [];

var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;

/* harmony default export */ var transition_schedule = (function(node, name, id, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};
  else if (id in schedules) return;
  create(node, id, {
    name: name,
    index: index, // For context during callback.
    group: group, // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
});

function init(node, id) {
  var schedule = get(node, id);
  if (schedule.state > CREATED) throw new Error("too late; already scheduled");
  return schedule;
}

function set(node, id) {
  var schedule = get(node, id);
  if (schedule.state > STARTED) throw new Error("too late; already running");
  return schedule;
}

function get(node, id) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
  return schedule;
}

function create(node, id, self) {
  var schedules = node.__transition,
      tween;

  // Initialize the self timer when the transition is created.
  // Note the actual delay is not known until the first callback!
  schedules[id] = self;
  self.timer = timer(schedule, 0, self.time);

  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start, self.delay, self.time);

    // If the elapsed delay is less than our first sleep, start immediately.
    if (self.delay <= elapsed) start(elapsed - self.delay);
  }

  function start(elapsed) {
    var i, j, n, o;

    // If the state is not SCHEDULED, then we previously errored on start.
    if (self.state !== SCHEDULED) return stop();

    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) continue;

      // While this element already has a starting transition during this frame,
      // defer starting an interrupting transition until that transition has a
      // chance to tick (and possibly end); see d3/d3-transition#54!
      if (o.state === STARTED) return src_timeout(start);

      // Interrupt the active transition, if any.
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }

      // Cancel any pre-empted transitions.
      else if (+i < id) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("cancel", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }
    }

    // Defer the first tick to end of the current frame; see d3/d3#1576.
    // Note the transition may be canceled after start and before the first tick!
    // Note this must be scheduled before the start event; see d3/d3-transition#16!
    // Assuming this is successful, subsequent callbacks go straight to tick.
    src_timeout(function() {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });

    // Dispatch the start event.
    // Note this must be done before the tween are initialized.
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) return; // interrupted
    self.state = STARTED;

    // Initialize the tween, deleting null tween.
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }

  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
        i = -1,
        n = tween.length;

    while (++i < n) {
      tween[i].call(node, t);
    }

    // Dispatch the end event.
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }

  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id];
    for (var i in schedules) return; // eslint-disable-line no-unused-vars
    delete node.__transition;
  }
}

// CONCATENATED MODULE: ./node_modules/d3-transition/src/interrupt.js


/* harmony default export */ var interrupt = (function(node, name) {
  var schedules = node.__transition,
      schedule,
      active,
      empty = true,
      i;

  if (!schedules) return;

  name = name == null ? null : name + "";

  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) { empty = false; continue; }
    active = schedule.state > STARTING && schedule.state < ENDING;
    schedule.state = ENDED;
    schedule.timer.stop();
    schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }

  if (empty) delete node.__transition;
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/selection/interrupt.js


/* harmony default export */ var selection_interrupt = (function(name) {
  return this.each(function() {
    interrupt(this, name);
  });
});

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/number.js
/* harmony default export */ var number = (function(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
});

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/transform/decompose.js
var degrees = 180 / Math.PI;

var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};

/* harmony default export */ var decompose = (function(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX: scaleX,
    scaleY: scaleY
  };
});

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/transform/parse.js


var svgNode;

/* eslint-disable no-undef */
function parseCss(value) {
  const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m.isIdentity ? identity : decompose(m.a, m.b, m.c, m.d, m.e, m.f);
}

function parseSvg(value) {
  if (value == null) return identity;
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return identity;
  value = value.matrix;
  return decompose(value.a, value.b, value.c, value.d, value.e, value.f);
}

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/transform/index.js



function interpolateTransform(parse, pxComma, pxParen, degParen) {

  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({i: i - 4, x: number(xa, xb)}, {i: i - 2, x: number(ya, yb)});
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
      q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: number(a, b)});
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: number(a, b)});
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({i: i - 4, x: number(xa, xb)}, {i: i - 2, x: number(ya, yb)});
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function(a, b) {
    var s = [], // string constants and placeholders
        q = []; // number interpolators
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}

var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

// EXTERNAL MODULE: ./node_modules/d3-selection/src/namespace.js
var namespace = __webpack_require__(16);

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/tween.js


function tweenRemove(id, name) {
  var tween0, tween1;
  return function() {
    var schedule = set(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }

    schedule.tween = tween1;
  };
}

function tweenFunction(id, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error;
  return function() {
    var schedule = set(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = {name: name, value: value}, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n) tween1.push(t);
    }

    schedule.tween = tween1;
  };
}

/* harmony default export */ var transition_tween = (function(name, value) {
  var id = this._id;

  name += "";

  if (arguments.length < 2) {
    var tween = get(this.node(), id).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }

  return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
});

function tweenValue(transition, name, value) {
  var id = transition._id;

  transition.each(function() {
    var schedule = set(this, id);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });

  return function(node) {
    return get(node, id).value[name];
  };
}

// CONCATENATED MODULE: ./node_modules/d3-color/src/define.js
/* harmony default export */ var define = (function(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
});

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}

// CONCATENATED MODULE: ./node_modules/d3-color/src/color.js


function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex = /^#([0-9a-f]{3,8})$/,
    reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`),
    reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`),
    reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`),
    reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`),
    reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`),
    reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

define(Color, color_color, {
  copy(channels) {
    return Object.assign(new this.constructor, this, channels);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: color_formatHex, // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHex8: color_formatHex8,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});

function color_formatHex() {
  return this.rgb().formatHex();
}

function color_formatHex8() {
  return this.rgb().formatHex8();
}

function color_formatHsl() {
  return hslConvert(this).formatHsl();
}

function color_formatRgb() {
  return this.rgb().formatRgb();
}

function color_color(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
      : l === 3 ? new Rgb((m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1) // #f00
      : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
      : l === 4 ? rgba((m >> 12 & 0xf) | (m >> 8 & 0xf0), (m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), (((m & 0xf) << 4) | (m & 0xf)) / 0xff) // #f000
      : null) // invalid hex
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color_color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function color_rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

define(Rgb, color_rgb, extend(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
  },
  displayable() {
    return (-0.5 <= this.r && this.r < 255.5)
        && (-0.5 <= this.g && this.g < 255.5)
        && (-0.5 <= this.b && this.b < 255.5)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex, // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatHex8: rgb_formatHex8,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));

function rgb_formatHex() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}

function rgb_formatHex8() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}

function rgb_formatRgb() {
  const a = clampa(this.opacity);
  return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
}

function clampa(opacity) {
  return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}

function clampi(value) {
  return Math.max(0, Math.min(255, Math.round(value) || 0));
}

function hex(value) {
  value = clampi(value);
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color_color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

define(Hsl, hsl, extend(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  clamp() {
    return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl() {
    const a = clampa(this.opacity);
    return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
  }
}));

function clamph(value) {
  value = (value || 0) % 360;
  return value < 0 ? value + 360 : value;
}

function clampt(value) {
  return Math.max(0, Math.min(1, value || 0));
}

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/basis.js
function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0
      + (4 - 6 * t2 + 3 * t3) * v1
      + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
      + t3 * v3) / 6;
}

/* harmony default export */ var src_basis = (function(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
        v1 = values[i],
        v2 = values[i + 1],
        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
});

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/basisClosed.js


/* harmony default export */ var basisClosed = (function(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
        v0 = values[(i + n - 1) % n],
        v1 = values[i % n],
        v2 = values[(i + 1) % n],
        v3 = values[(i + 2) % n];
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
});

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/constant.js
/* harmony default export */ var constant = (x => () => x);

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/color.js


function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant(isNaN(a) ? b : a);
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : constant(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : constant(isNaN(a) ? b : a);
}

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/rgb.js





/* harmony default export */ var src_rgb = ((function rgbGamma(y) {
  var color = gamma(y);

  function rgb(start, end) {
    var r = color((start = color_rgb(start)).r, (end = color_rgb(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = nogamma(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb.gamma = rgbGamma;

  return rgb;
})(1));

function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length,
        r = new Array(n),
        g = new Array(n),
        b = new Array(n),
        i, color;
    for (i = 0; i < n; ++i) {
      color = color_rgb(colors[i]);
      r[i] = color.r || 0;
      g[i] = color.g || 0;
      b[i] = color.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color.opacity = 1;
    return function(t) {
      color.r = r(t);
      color.g = g(t);
      color.b = b(t);
      return color + "";
    };
  };
}

var rgbBasis = rgbSpline(src_basis);
var rgbBasisClosed = rgbSpline(basisClosed);

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/string.js


var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

/* harmony default export */ var string = (function(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: number(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/interpolate.js



/* harmony default export */ var transition_interpolate = (function(a, b) {
  var c;
  return (typeof b === "number" ? number
      : b instanceof color_color ? src_rgb
      : (c = color_color(b)) ? (b = c, src_rgb)
      : string)(a, b);
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/attr.js





function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrConstantNS(fullname, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrFunction(name, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function attrFunctionNS(fullname, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

/* harmony default export */ var attr = (function(name, value) {
  var fullname = Object(namespace["a" /* default */])(name), i = fullname === "transform" ? interpolateTransformSvg : transition_interpolate;
  return this.attrTween(name, typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, tweenValue(this, "attr." + name, value))
      : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname)
      : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/attrTween.js


function attrInterpolate(name, i) {
  return function(t) {
    this.setAttribute(name, i.call(this, t));
  };
}

function attrInterpolateNS(fullname, i) {
  return function(t) {
    this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
  };
}

function attrTweenNS(fullname, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

function attrTween(name, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ var transition_attrTween = (function(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  var fullname = Object(namespace["a" /* default */])(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/delay.js


function delayFunction(id, value) {
  return function() {
    init(this, id).delay = +value.apply(this, arguments);
  };
}

function delayConstant(id, value) {
  return value = +value, function() {
    init(this, id).delay = value;
  };
}

/* harmony default export */ var transition_delay = (function(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? delayFunction
          : delayConstant)(id, value))
      : get(this.node(), id).delay;
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/duration.js


function durationFunction(id, value) {
  return function() {
    set(this, id).duration = +value.apply(this, arguments);
  };
}

function durationConstant(id, value) {
  return value = +value, function() {
    set(this, id).duration = value;
  };
}

/* harmony default export */ var transition_duration = (function(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? durationFunction
          : durationConstant)(id, value))
      : get(this.node(), id).duration;
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/ease.js


function easeConstant(id, value) {
  if (typeof value !== "function") throw new Error;
  return function() {
    set(this, id).ease = value;
  };
}

/* harmony default export */ var ease = (function(value) {
  var id = this._id;

  return arguments.length
      ? this.each(easeConstant(id, value))
      : get(this.node(), id).ease;
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/easeVarying.js


function easeVarying(id, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (typeof v !== "function") throw new Error;
    set(this, id).ease = v;
  };
}

/* harmony default export */ var transition_easeVarying = (function(value) {
  if (typeof value !== "function") throw new Error;
  return this.each(easeVarying(this._id, value));
});

// EXTERNAL MODULE: ./node_modules/d3-selection/src/matcher.js
var matcher = __webpack_require__(10);

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/filter.js



/* harmony default export */ var transition_filter = (function(match) {
  if (typeof match !== "function") match = Object(matcher["b" /* default */])(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new Transition(subgroups, this._parents, this._name, this._id);
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/merge.js


/* harmony default export */ var transition_merge = (function(transition) {
  if (transition._id !== this._id) throw new Error;

  for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new Transition(merges, this._parents, this._name, this._id);
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/on.js


function on_start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0) t = t.slice(0, i);
    return !t || t === "start";
  });
}

function onFunction(id, name, listener) {
  var on0, on1, sit = on_start(name) ? init : set;
  return function() {
    var schedule = sit(this, id),
        on = schedule.on;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);

    schedule.on = on1;
  };
}

/* harmony default export */ var transition_on = (function(name, listener) {
  var id = this._id;

  return arguments.length < 2
      ? get(this.node(), id).on.on(name)
      : this.each(onFunction(id, name, listener));
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/remove.js
function removeFunction(id) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition) if (+i !== id) return;
    if (parent) parent.removeChild(this);
  };
}

/* harmony default export */ var transition_remove = (function() {
  return this.on("end.remove", removeFunction(this._id));
});

// EXTERNAL MODULE: ./node_modules/d3-selection/src/selector.js
var selector = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/select.js




/* harmony default export */ var transition_select = (function(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = Object(selector["a" /* default */])(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        transition_schedule(subgroup[i], name, id, i, subgroup, get(node, id));
      }
    }
  }

  return new Transition(subgroups, this._parents, name, id);
});

// EXTERNAL MODULE: ./node_modules/d3-selection/src/selectorAll.js
var selectorAll = __webpack_require__(29);

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/selectAll.js




/* harmony default export */ var selectAll = (function(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = Object(selectorAll["a" /* default */])(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children = select.call(node, node.__data__, i, group), child, inherit = get(node, id), k = 0, l = children.length; k < l; ++k) {
          if (child = children[k]) {
            transition_schedule(child, name, id, k, children, inherit);
          }
        }
        subgroups.push(children);
        parents.push(node);
      }
    }
  }

  return new Transition(subgroups, parents, name, id);
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/selection.js


var Selection = src_selection["b" /* default */].prototype.constructor;

/* harmony default export */ var transition_selection = (function() {
  return new Selection(this._groups, this._parents);
});

// EXTERNAL MODULE: ./node_modules/d3-selection/src/selection/style.js
var style = __webpack_require__(30);

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/style.js






function styleNull(name, interpolate) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0 = Object(style["b" /* styleValue */])(this, name),
        string1 = (this.style.removeProperty(name), Object(style["b" /* styleValue */])(this, name));
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, string10 = string1);
  };
}

function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = Object(style["b" /* styleValue */])(this, name);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function styleFunction(name, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0 = Object(style["b" /* styleValue */])(this, name),
        value1 = value(this),
        string1 = value1 + "";
    if (value1 == null) string1 = value1 = (this.style.removeProperty(name), Object(style["b" /* styleValue */])(this, name));
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function styleMaybeRemove(id, name) {
  var on0, on1, listener0, key = "style." + name, event = "end." + key, remove;
  return function() {
    var schedule = set(this, id),
        on = schedule.on,
        listener = schedule.value[key] == null ? remove || (remove = styleRemove(name)) : undefined;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);

    schedule.on = on1;
  };
}

/* harmony default export */ var transition_style = (function(name, value, priority) {
  var i = (name += "") === "transform" ? interpolateTransformCss : transition_interpolate;
  return value == null ? this
      .styleTween(name, styleNull(name, i))
      .on("end.style." + name, styleRemove(name))
    : typeof value === "function" ? this
      .styleTween(name, styleFunction(name, i, tweenValue(this, "style." + name, value)))
      .each(styleMaybeRemove(this._id, name))
    : this
      .styleTween(name, styleConstant(name, i, value), priority)
      .on("end.style." + name, null);
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/styleTween.js
function styleInterpolate(name, i, priority) {
  return function(t) {
    this.style.setProperty(name, i.call(this, t), priority);
  };
}

function styleTween(name, value, priority) {
  var t, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
    return t;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ var transition_styleTween = (function(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/text.js


function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}

/* harmony default export */ var transition_text = (function(value) {
  return this.tween("text", typeof value === "function"
      ? textFunction(tweenValue(this, "text", value))
      : textConstant(value == null ? "" : value + ""));
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/textTween.js
function textInterpolate(i) {
  return function(t) {
    this.textContent = i.call(this, t);
  };
}

function textTween(value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
    return t0;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ var transition_textTween = (function(value) {
  var key = "text";
  if (arguments.length < 1) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, textTween(value));
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/transition.js



/* harmony default export */ var transition_transition = (function() {
  var name = this._name,
      id0 = this._id,
      id1 = newId();

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit = get(node, id0);
        transition_schedule(node, name, id1, i, group, {
          time: inherit.time + inherit.delay + inherit.duration,
          delay: 0,
          duration: inherit.duration,
          ease: inherit.ease
        });
      }
    }
  }

  return new Transition(groups, this._parents, name, id1);
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/end.js


/* harmony default export */ var transition_end = (function() {
  var on0, on1, that = this, id = that._id, size = that.size();
  return new Promise(function(resolve, reject) {
    var cancel = {value: reject},
        end = {value: function() { if (--size === 0) resolve(); }};

    that.each(function() {
      var schedule = set(this, id),
          on = schedule.on;

      // If this node shared a dispatch with the previous node,
      // just assign the updated shared dispatch and we’re done!
      // Otherwise, copy-on-write.
      if (on !== on0) {
        on1 = (on0 = on).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }

      schedule.on = on1;
    });

    // The selection was empty, resolve end immediately
    if (size === 0) resolve();
  });
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/index.js






















var transition_id = 0;

function Transition(groups, parents, name, id) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id;
}

function src_transition_transition(name) {
  return Object(src_selection["b" /* default */])().transition(name);
}

function newId() {
  return ++transition_id;
}

var selection_prototype = src_selection["b" /* default */].prototype;

Transition.prototype = src_transition_transition.prototype = {
  constructor: Transition,
  select: transition_select,
  selectAll: selectAll,
  selectChild: selection_prototype.selectChild,
  selectChildren: selection_prototype.selectChildren,
  filter: transition_filter,
  merge: transition_merge,
  selection: transition_selection,
  transition: transition_transition,
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: transition_on,
  attr: attr,
  attrTween: transition_attrTween,
  style: transition_style,
  styleTween: transition_styleTween,
  text: transition_text,
  textTween: transition_textTween,
  remove: transition_remove,
  tween: transition_tween,
  delay: transition_delay,
  duration: transition_duration,
  ease: ease,
  easeVarying: transition_easeVarying,
  end: transition_end,
  [Symbol.iterator]: selection_prototype[Symbol.iterator]
};

// CONCATENATED MODULE: ./node_modules/d3-ease/src/cubic.js
function cubicIn(t) {
  return t * t * t;
}

function cubicOut(t) {
  return --t * t * t + 1;
}

function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}

// CONCATENATED MODULE: ./node_modules/d3-transition/src/selection/transition.js





var defaultTiming = {
  time: null, // Set on use.
  delay: 0,
  duration: 250,
  ease: cubicInOut
};

function transition_inherit(node, id) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id])) {
    if (!(node = node.parentNode)) {
      throw new Error(`transition ${id} not found`);
    }
  }
  return timing;
}

/* harmony default export */ var selection_transition = (function(name) {
  var id,
      timing;

  if (name instanceof Transition) {
    id = name._id, name = name._name;
  } else {
    id = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
  }

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        transition_schedule(node, name, id, i, group, timing || transition_inherit(node, id));
      }
    }
  }

  return new Transition(groups, this._parents, name, id);
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/selection/index.js




src_selection["b" /* default */].prototype.interrupt = selection_interrupt;
src_selection["b" /* default */].prototype.transition = selection_transition;

// CONCATENATED MODULE: ./node_modules/d3-transition/src/index.js





// CONCATENATED MODULE: ./node_modules/d3-zoom/src/constant.js
/* harmony default export */ var src_constant = (x => () => x);

// CONCATENATED MODULE: ./node_modules/d3-zoom/src/event.js
function ZoomEvent(type, {
  sourceEvent,
  target,
  transform,
  dispatch
}) {
  Object.defineProperties(this, {
    type: {value: type, enumerable: true, configurable: true},
    sourceEvent: {value: sourceEvent, enumerable: true, configurable: true},
    target: {value: target, enumerable: true, configurable: true},
    transform: {value: transform, enumerable: true, configurable: true},
    _: {value: dispatch}
  });
}

// CONCATENATED MODULE: ./node_modules/d3-zoom/src/transform.js
function Transform(k, x, y) {
  this.k = k;
  this.x = x;
  this.y = y;
}

Transform.prototype = {
  constructor: Transform,
  scale: function(k) {
    return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
  },
  translate: function(x, y) {
    return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
  },
  apply: function(point) {
    return [point[0] * this.k + this.x, point[1] * this.k + this.y];
  },
  applyX: function(x) {
    return x * this.k + this.x;
  },
  applyY: function(y) {
    return y * this.k + this.y;
  },
  invert: function(location) {
    return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
  },
  invertX: function(x) {
    return (x - this.x) / this.k;
  },
  invertY: function(y) {
    return (y - this.y) / this.k;
  },
  rescaleX: function(x) {
    return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
  },
  rescaleY: function(y) {
    return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};

var transform_identity = new Transform(1, 0, 0);

transform_transform.prototype = Transform.prototype;

function transform_transform(node) {
  while (!node.__zoom) if (!(node = node.parentNode)) return transform_identity;
  return node.__zoom;
}

// CONCATENATED MODULE: ./node_modules/d3-zoom/src/noevent.js
function nopropagation(event) {
  event.stopImmediatePropagation();
}

/* harmony default export */ var noevent = (function(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
});

// CONCATENATED MODULE: ./node_modules/d3-zoom/src/zoom.js










// Ignore right-click, since that should open the context menu.
// except for pinch-to-zoom, which is sent as a wheel+ctrlKey event
function defaultFilter(event) {
  return (!event.ctrlKey || event.type === 'wheel') && !event.button;
}

function defaultExtent() {
  var e = this;
  if (e instanceof SVGElement) {
    e = e.ownerSVGElement || e;
    if (e.hasAttribute("viewBox")) {
      e = e.viewBox.baseVal;
      return [[e.x, e.y], [e.x + e.width, e.y + e.height]];
    }
    return [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]];
  }
  return [[0, 0], [e.clientWidth, e.clientHeight]];
}

function defaultTransform() {
  return this.__zoom || transform_identity;
}

function defaultWheelDelta(event) {
  return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 0.002) * (event.ctrlKey ? 10 : 1);
}

function defaultTouchable() {
  return navigator.maxTouchPoints || ("ontouchstart" in this);
}

function defaultConstrain(transform, extent, translateExtent) {
  var dx0 = transform.invertX(extent[0][0]) - translateExtent[0][0],
      dx1 = transform.invertX(extent[1][0]) - translateExtent[1][0],
      dy0 = transform.invertY(extent[0][1]) - translateExtent[0][1],
      dy1 = transform.invertY(extent[1][1]) - translateExtent[1][1];
  return transform.translate(
    dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1),
    dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1)
  );
}

/* harmony default export */ var d3_zoom_src_zoom = (function() {
  var filter = defaultFilter,
      extent = defaultExtent,
      constrain = defaultConstrain,
      wheelDelta = defaultWheelDelta,
      touchable = defaultTouchable,
      scaleExtent = [0, Infinity],
      translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]],
      duration = 250,
      interpolate = src_zoom,
      listeners = Object(dispatch["a" /* default */])("start", "zoom", "end"),
      touchstarting,
      touchfirst,
      touchending,
      touchDelay = 500,
      wheelDelay = 150,
      clickDistance2 = 0,
      tapDistance = 10;

  function zoom(selection) {
    selection
        .property("__zoom", defaultTransform)
        .on("wheel.zoom", wheeled, {passive: false})
        .on("mousedown.zoom", mousedowned)
        .on("dblclick.zoom", dblclicked)
      .filter(touchable)
        .on("touchstart.zoom", touchstarted)
        .on("touchmove.zoom", touchmoved)
        .on("touchend.zoom touchcancel.zoom", touchended)
        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }

  zoom.transform = function(collection, transform, point, event) {
    var selection = collection.selection ? collection.selection() : collection;
    selection.property("__zoom", defaultTransform);
    if (collection !== selection) {
      schedule(collection, transform, point, event);
    } else {
      selection.interrupt().each(function() {
        gesture(this, arguments)
          .event(event)
          .start()
          .zoom(null, typeof transform === "function" ? transform.apply(this, arguments) : transform)
          .end();
      });
    }
  };

  zoom.scaleBy = function(selection, k, p, event) {
    zoom.scaleTo(selection, function() {
      var k0 = this.__zoom.k,
          k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return k0 * k1;
    }, p, event);
  };

  zoom.scaleTo = function(selection, k, p, event) {
    zoom.transform(selection, function() {
      var e = extent.apply(this, arguments),
          t0 = this.__zoom,
          p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p,
          p1 = t0.invert(p0),
          k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
    }, p, event);
  };

  zoom.translateBy = function(selection, x, y, event) {
    zoom.transform(selection, function() {
      return constrain(this.__zoom.translate(
        typeof x === "function" ? x.apply(this, arguments) : x,
        typeof y === "function" ? y.apply(this, arguments) : y
      ), extent.apply(this, arguments), translateExtent);
    }, null, event);
  };

  zoom.translateTo = function(selection, x, y, p, event) {
    zoom.transform(selection, function() {
      var e = extent.apply(this, arguments),
          t = this.__zoom,
          p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
      return constrain(transform_identity.translate(p0[0], p0[1]).scale(t.k).translate(
        typeof x === "function" ? -x.apply(this, arguments) : -x,
        typeof y === "function" ? -y.apply(this, arguments) : -y
      ), e, translateExtent);
    }, p, event);
  };

  function scale(transform, k) {
    k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
    return k === transform.k ? transform : new Transform(k, transform.x, transform.y);
  }

  function translate(transform, p0, p1) {
    var x = p0[0] - p1[0] * transform.k, y = p0[1] - p1[1] * transform.k;
    return x === transform.x && y === transform.y ? transform : new Transform(transform.k, x, y);
  }

  function centroid(extent) {
    return [(+extent[0][0] + +extent[1][0]) / 2, (+extent[0][1] + +extent[1][1]) / 2];
  }

  function schedule(transition, transform, point, event) {
    transition
        .on("start.zoom", function() { gesture(this, arguments).event(event).start(); })
        .on("interrupt.zoom end.zoom", function() { gesture(this, arguments).event(event).end(); })
        .tween("zoom", function() {
          var that = this,
              args = arguments,
              g = gesture(that, args).event(event),
              e = extent.apply(that, args),
              p = point == null ? centroid(e) : typeof point === "function" ? point.apply(that, args) : point,
              w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]),
              a = that.__zoom,
              b = typeof transform === "function" ? transform.apply(that, args) : transform,
              i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
          return function(t) {
            if (t === 1) t = b; // Avoid rounding error on end.
            else { var l = i(t), k = w / l[2]; t = new Transform(k, p[0] - l[0] * k, p[1] - l[1] * k); }
            g.zoom(null, t);
          };
        });
  }

  function gesture(that, args, clean) {
    return (!clean && that.__zooming) || new Gesture(that, args);
  }

  function Gesture(that, args) {
    this.that = that;
    this.args = args;
    this.active = 0;
    this.sourceEvent = null;
    this.extent = extent.apply(that, args);
    this.taps = 0;
  }

  Gesture.prototype = {
    event: function(event) {
      if (event) this.sourceEvent = event;
      return this;
    },
    start: function() {
      if (++this.active === 1) {
        this.that.__zooming = this;
        this.emit("start");
      }
      return this;
    },
    zoom: function(key, transform) {
      if (this.mouse && key !== "mouse") this.mouse[1] = transform.invert(this.mouse[0]);
      if (this.touch0 && key !== "touch") this.touch0[1] = transform.invert(this.touch0[0]);
      if (this.touch1 && key !== "touch") this.touch1[1] = transform.invert(this.touch1[0]);
      this.that.__zoom = transform;
      this.emit("zoom");
      return this;
    },
    end: function() {
      if (--this.active === 0) {
        delete this.that.__zooming;
        this.emit("end");
      }
      return this;
    },
    emit: function(type) {
      var d = Object(src_select["a" /* default */])(this.that).datum();
      listeners.call(
        type,
        this.that,
        new ZoomEvent(type, {
          sourceEvent: this.sourceEvent,
          target: zoom,
          type,
          transform: this.that.__zoom,
          dispatch: listeners
        }),
        d
      );
    }
  };

  function wheeled(event, ...args) {
    if (!filter.apply(this, arguments)) return;
    var g = gesture(this, args).event(event),
        t = this.__zoom,
        k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))),
        p = Object(pointer["a" /* default */])(event);

    // If the mouse is in the same location as before, reuse it.
    // If there were recent wheel events, reset the wheel idle timeout.
    if (g.wheel) {
      if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
        g.mouse[1] = t.invert(g.mouse[0] = p);
      }
      clearTimeout(g.wheel);
    }

    // If this wheel event won’t trigger a transform change, ignore it.
    else if (t.k === k) return;

    // Otherwise, capture the mouse point and location at the start.
    else {
      g.mouse = [p, t.invert(p)];
      interrupt(this);
      g.start();
    }

    noevent(event);
    g.wheel = setTimeout(wheelidled, wheelDelay);
    g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));

    function wheelidled() {
      g.wheel = null;
      g.end();
    }
  }

  function mousedowned(event, ...args) {
    if (touchending || !filter.apply(this, arguments)) return;
    var currentTarget = event.currentTarget,
        g = gesture(this, args, true).event(event),
        v = Object(src_select["a" /* default */])(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true),
        p = Object(pointer["a" /* default */])(event, currentTarget),
        x0 = event.clientX,
        y0 = event.clientY;

    Object(nodrag["a" /* default */])(event.view);
    nopropagation(event);
    g.mouse = [p, this.__zoom.invert(p)];
    interrupt(this);
    g.start();

    function mousemoved(event) {
      noevent(event);
      if (!g.moved) {
        var dx = event.clientX - x0, dy = event.clientY - y0;
        g.moved = dx * dx + dy * dy > clickDistance2;
      }
      g.event(event)
       .zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = Object(pointer["a" /* default */])(event, currentTarget), g.mouse[1]), g.extent, translateExtent));
    }

    function mouseupped(event) {
      v.on("mousemove.zoom mouseup.zoom", null);
      Object(nodrag["b" /* yesdrag */])(event.view, g.moved);
      noevent(event);
      g.event(event).end();
    }
  }

  function dblclicked(event, ...args) {
    if (!filter.apply(this, arguments)) return;
    var t0 = this.__zoom,
        p0 = Object(pointer["a" /* default */])(event.changedTouches ? event.changedTouches[0] : event, this),
        p1 = t0.invert(p0),
        k1 = t0.k * (event.shiftKey ? 0.5 : 2),
        t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, args), translateExtent);

    noevent(event);
    if (duration > 0) Object(src_select["a" /* default */])(this).transition().duration(duration).call(schedule, t1, p0, event);
    else Object(src_select["a" /* default */])(this).call(zoom.transform, t1, p0, event);
  }

  function touchstarted(event, ...args) {
    if (!filter.apply(this, arguments)) return;
    var touches = event.touches,
        n = touches.length,
        g = gesture(this, args, event.changedTouches.length === n).event(event),
        started, i, t, p;

    nopropagation(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = Object(pointer["a" /* default */])(t, this);
      p = [p, this.__zoom.invert(p), t.identifier];
      if (!g.touch0) g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;
      else if (!g.touch1 && g.touch0[2] !== p[2]) g.touch1 = p, g.taps = 0;
    }

    if (touchstarting) touchstarting = clearTimeout(touchstarting);

    if (started) {
      if (g.taps < 2) touchfirst = p[0], touchstarting = setTimeout(function() { touchstarting = null; }, touchDelay);
      interrupt(this);
      g.start();
    }
  }

  function touchmoved(event, ...args) {
    if (!this.__zooming) return;
    var g = gesture(this, args).event(event),
        touches = event.changedTouches,
        n = touches.length, i, t, p, l;

    noevent(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = Object(pointer["a" /* default */])(t, this);
      if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;
      else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
    }
    t = g.that.__zoom;
    if (g.touch1) {
      var p0 = g.touch0[0], l0 = g.touch0[1],
          p1 = g.touch1[0], l1 = g.touch1[1],
          dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp,
          dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
      t = scale(t, Math.sqrt(dp / dl));
      p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
      l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
    }
    else if (g.touch0) p = g.touch0[0], l = g.touch0[1];
    else return;

    g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
  }

  function touchended(event, ...args) {
    if (!this.__zooming) return;
    var g = gesture(this, args).event(event),
        touches = event.changedTouches,
        n = touches.length, i, t;

    nopropagation(event);
    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function() { touchending = null; }, touchDelay);
    for (i = 0; i < n; ++i) {
      t = touches[i];
      if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;
      else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
    }
    if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
    if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
    else {
      g.end();
      // If this was a dbltap, reroute to the (optional) dblclick.zoom handler.
      if (g.taps === 2) {
        t = Object(pointer["a" /* default */])(t, this);
        if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
          var p = Object(src_select["a" /* default */])(this).on("dblclick.zoom");
          if (p) p.apply(this, arguments);
        }
      }
    }
  }

  zoom.wheelDelta = function(_) {
    return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : src_constant(+_), zoom) : wheelDelta;
  };

  zoom.filter = function(_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : src_constant(!!_), zoom) : filter;
  };

  zoom.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : src_constant(!!_), zoom) : touchable;
  };

  zoom.extent = function(_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : src_constant([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom) : extent;
  };

  zoom.scaleExtent = function(_) {
    return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [scaleExtent[0], scaleExtent[1]];
  };

  zoom.translateExtent = function(_) {
    return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
  };

  zoom.constrain = function(_) {
    return arguments.length ? (constrain = _, zoom) : constrain;
  };

  zoom.duration = function(_) {
    return arguments.length ? (duration = +_, zoom) : duration;
  };

  zoom.interpolate = function(_) {
    return arguments.length ? (interpolate = _, zoom) : interpolate;
  };

  zoom.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? zoom : value;
  };

  zoom.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
  };

  zoom.tapDistance = function(_) {
    return arguments.length ? (tapDistance = +_, zoom) : tapDistance;
  };

  return zoom;
});

// CONCATENATED MODULE: ./node_modules/d3-zoom/src/index.js




/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
    This component adds behaviour to the child components with colapse and move the component around.
    This component stores the config to local storage
    This component restores the postion on reload
*/

var Window = function (_Component) {
    _inherits(Window, _Component);

    function Window(props) {
        _classCallCheck(this, Window);

        var _this = _possibleConstructorReturn(this, (Window.__proto__ || Object.getPrototypeOf(Window)).call(this, props));

        _this.childComponentName = _this.props.children._owner.stateNode.__proto__.constructor.name;
        var config = localStorage.getItem(_this.childComponentName);
        _this.state = config ? JSON.parse(config) : {
            collapsed: false,
            top: 0,
            left: 0
        };
        return _this;
    }

    _createClass(Window, [{
        key: "persist",
        value: function persist() {
            if (this.state.top !== 0) localStorage.setItem(this.childComponentName, JSON.stringify(this.state));
        }
    }, {
        key: "toggle",
        value: function toggle() {
            this.setState({
                collapsed: !this.state.collapsed
            });
            this.persist();
        }
    }, {
        key: "drag",
        value: function drag(e) {
            this.setState({
                left: e.pageX,
                top: e.pageY
            });
            this.persist();
        }
    }, {
        key: "render",
        value: function render() {
            var windowState = this.state.collapsed ? "fas fa-window-minimize" : "fas fa-window-maximize";
            return _react2.default.createElement(
                "div",
                {
                    style: { position: "fixed", top: this.state.top, left: this.state.left } },
                _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement(
                        "button",
                        {
                            draggable: "true",
                            onDragEnd: this.drag.bind(this),
                            className: "container" },
                        _react2.default.createElement("i", { "class": "fas fa-arrows-alt" })
                    ),
                    _react2.default.createElement(
                        "button",
                        { className: "container", onClick: this.toggle.bind(this) },
                        _react2.default.createElement("i", { "class": windowState })
                    ),
                    this.state.collapsed ? null : _react2.default.createElement(
                        "div",
                        { "class": "container elements-tab" },
                        _react2.default.createElement(
                            "div",
                            { "class": "title" },
                            this.childComponentName
                        )
                    )
                ),
                _react2.default.createElement(
                    "div",
                    null,
                    this.state.collapsed ? this.props.children : null
                )
            );
        }
    }]);

    return Window;
}(_react.Component);

exports.default = Window;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _localStorage = __webpack_require__(76);

module.exports = {
    readData: _localStorage.readData,
    writeData: _localStorage.writeData,
    readComponent: _localStorage.readComponent,
    writeComponent: _localStorage.writeComponent
};

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return childMatcher; });
/* harmony default export */ __webpack_exports__["b"] = (function(selector) {
  return function() {
    return this.matches(selector);
  };
});

function childMatcher(selector) {
  return function(node) {
    return node.matches(selector);
  };
}



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return xhtml; });
var xhtml = "http://www.w3.org/1999/xhtml";

/* harmony default export */ __webpack_exports__["a"] = ({
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
});


/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.componentRecursive = componentRecursive;
exports.saveComponentsToWindow = saveComponentsToWindow;
exports.getNestedComponents = getNestedComponents;
exports.initialiseComponents = initialiseComponents;

var _createComponent = __webpack_require__(74);

var _Storage = __webpack_require__(9);

var _assetUtils = __webpack_require__(77);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } // Dependencies.

// Utilities.

function createStylesheet(style, name) {

    // check if window has $assets 
    if (window.assets) {
        style = (0, _assetUtils.nameToURL)(style);
    }

    var toDelete = [].concat(_toConsumableArray(document.querySelectorAll("[data-component-name='" + name + "']")));
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
    if ((0, _assetUtils.hasAssets)(component.state)) {
        component.state = JSON.parse((0, _assetUtils.nameToURL)(JSON.stringify(component.state)));
    }
    createStylesheet(component.style, component.name);
    window[component.name] = (0, _createComponent.createComponent)(component);
}

function checkNestedComponents(markup) {

    var components = (0, _Storage.readData)("ui-editor");

    return components.filter(function (component) {
        return markup.includes(component.name);
    }).length > 0;
}

window.visited = {};

/**Used to detect calls that can happen because of recursive components */
function componentVisited(componentName) {
    if (window.visited[componentName]) {
        return true;
    } else {
        window.visited[componentName] = true;
        return false;
    }
}

function componentRecursive(component) {
    return component.markup.includes(component.name);
}

/** Takes components and saves them to window as react Object */
function saveComponentsToWindow(nestedComponents) {
    // Transpile them and make them global.
    nestedComponents.forEach(function (component) {
        saveToWindow(JSON.parse(JSON.stringify(component)));
    });
}

/** Takes markup and returns children component objects. */
function getNestedComponents(parent) {
    // Should be able to detect nested component.

    var components = (0, _Storage.readData)("ui-editor");
    var nestedComponents = [parent]; // Problem 1. When creating recursive components, automatically set component.config[componentName].override = true when you save.
    if (checkNestedComponents(parent.markup) && !componentVisited(parent.name)) {
        // find all the nested components from the markup and push it to nestedComponents.
        var children = components.filter(function (component) {
            return parent.markup.includes(component.name);
        });
        // Find grand kids.
        var grandKids = children.map(getNestedComponents).flat(3);
        nestedComponents.push.apply(nestedComponents, _toConsumableArray(grandKids));
    }
    return [].concat(_toConsumableArray(new Set(nestedComponents.filter(function (component) {
        return component && component.markup;
    }))));
}

/** Takes a component, checks and saves it on window */
function initialiseComponents(component) {
    // Check if it already exists
    if (!window[component.name]) {
        // visited gets used by getNestedComponents. Helps to prevent recurrent calls
        window.visited = {};
        // get components that are used by the currrent component.
        var nestedComponents = getNestedComponents(component);
        if (nestedComponents.length > 0) {
            // save the current component and the components that are used on window.
            saveComponentsToWindow(nestedComponents);
        }
    }
}

/***/ }),
/* 14 */,
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function none() {}

/* harmony default export */ __webpack_exports__["a"] = (function(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
});


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _namespaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);


/* harmony default export */ __webpack_exports__["a"] = (function(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return _namespaces_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].hasOwnProperty(prefix) ? {space: _namespaces_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"][prefix], local: name} : name; // eslint-disable-line no-prototype-builtins
});


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(node) {
  return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
      || (node.document && node) // node is a Window
      || node.defaultView; // node is a Document
});


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ root; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Selection; });

// EXTERNAL MODULE: ./node_modules/d3-selection/src/selector.js
var selector = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/select.js



/* harmony default export */ var selection_select = (function(select) {
  if (typeof select !== "function") select = Object(selector["a" /* default */])(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }

  return new Selection(subgroups, this._parents);
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/array.js
// Given something array like (or null), returns something that is strictly an
// array. This is used to ensure that array-like objects passed to d3.selectAll
// or selection.selectAll are converted into proper arrays when creating a
// selection; we don’t ever want to create a selection backed by a live
// HTMLCollection or NodeList. However, note that selection.selectAll will use a
// static NodeList as a group, since it safely derived from querySelectorAll.
function array(x) {
  return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
}

// EXTERNAL MODULE: ./node_modules/d3-selection/src/selectorAll.js
var selectorAll = __webpack_require__(29);

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/selectAll.js




function arrayAll(select) {
  return function() {
    return array(select.apply(this, arguments));
  };
}

/* harmony default export */ var selectAll = (function(select) {
  if (typeof select === "function") select = arrayAll(select);
  else select = Object(selectorAll["a" /* default */])(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }

  return new Selection(subgroups, parents);
});

// EXTERNAL MODULE: ./node_modules/d3-selection/src/matcher.js
var matcher = __webpack_require__(10);

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/selectChild.js


var find = Array.prototype.find;

function childFind(match) {
  return function() {
    return find.call(this.children, match);
  };
}

function childFirst() {
  return this.firstElementChild;
}

/* harmony default export */ var selectChild = (function(match) {
  return this.select(match == null ? childFirst
      : childFind(typeof match === "function" ? match : Object(matcher["a" /* childMatcher */])(match)));
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/selectChildren.js


var filter = Array.prototype.filter;

function children() {
  return Array.from(this.children);
}

function childrenFilter(match) {
  return function() {
    return filter.call(this.children, match);
  };
}

/* harmony default export */ var selectChildren = (function(match) {
  return this.selectAll(match == null ? children
      : childrenFilter(typeof match === "function" ? match : Object(matcher["a" /* childMatcher */])(match)));
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/filter.js



/* harmony default export */ var selection_filter = (function(match) {
  if (typeof match !== "function") match = Object(matcher["b" /* default */])(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new Selection(subgroups, this._parents);
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/sparse.js
/* harmony default export */ var sparse = (function(update) {
  return new Array(update.length);
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/enter.js



/* harmony default export */ var selection_enter = (function() {
  return new Selection(this._enter || this._groups.map(sparse), this._parents);
});

function EnterNode(parent, datum) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum;
}

EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
  insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
  querySelector: function(selector) { return this._parent.querySelector(selector); },
  querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
};

// CONCATENATED MODULE: ./node_modules/d3-selection/src/constant.js
/* harmony default export */ var constant = (function(x) {
  return function() {
    return x;
  };
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/data.js




function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length;

  // Put any non-null nodes that fit into update.
  // Put any null nodes into enter.
  // Put any remaining data into enter.
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }

  // Put any non-null nodes that don’t fit into exit.
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}

function bindKey(parent, group, enter, update, exit, data, key) {
  var i,
      node,
      nodeByKeyValue = new Map,
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue;

  // Compute the key for each node.
  // If multiple nodes have the same key, the duplicates are added to exit.
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
      if (nodeByKeyValue.has(keyValue)) {
        exit[i] = node;
      } else {
        nodeByKeyValue.set(keyValue, node);
      }
    }
  }

  // Compute the key for each datum.
  // If there a node associated with this key, join and add it to update.
  // If there is not (or the key is a duplicate), add it to enter.
  for (i = 0; i < dataLength; ++i) {
    keyValue = key.call(parent, data[i], i, data) + "";
    if (node = nodeByKeyValue.get(keyValue)) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue.delete(keyValue);
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }

  // Add any remaining nodes that were not bound to data to exit.
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && (nodeByKeyValue.get(keyValues[i]) === node)) {
      exit[i] = node;
    }
  }
}

function datum(node) {
  return node.__data__;
}

/* harmony default export */ var selection_data = (function(value, key) {
  if (!arguments.length) return Array.from(this, datum);

  var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;

  if (typeof value !== "function") value = constant(value);

  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = arraylike(value.call(parent, parent && parent.__data__, j, parents)),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);

    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

    // Now connect the enter nodes to their following update node, such that
    // appendChild can insert the materialized enter node before this node,
    // rather than at the end of the parent node.
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength);
        previous._next = next || null;
      }
    }
  }

  update = new Selection(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
});

// Given some data, this returns an array-like view of it: an object that
// exposes a length property and allows numeric indexing. Note that unlike
// selectAll, this isn’t worried about “live” collections because the resulting
// array will only be used briefly while data is being bound. (It is possible to
// cause the data to change while iterating by using a key function, but please
// don’t; we’d rather avoid a gratuitous copy.)
function arraylike(data) {
  return typeof data === "object" && "length" in data
    ? data // Array, TypedArray, NodeList, array-like
    : Array.from(data); // Map, Set, iterable, string, or anything else
}

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/exit.js



/* harmony default export */ var selection_exit = (function() {
  return new Selection(this._exit || this._groups.map(sparse), this._parents);
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/join.js
/* harmony default export */ var join = (function(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  if (typeof onenter === "function") {
    enter = onenter(enter);
    if (enter) enter = enter.selection();
  } else {
    enter = enter.append(onenter + "");
  }
  if (onupdate != null) {
    update = onupdate(update);
    if (update) update = update.selection();
  }
  if (onexit == null) exit.remove(); else onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/merge.js


/* harmony default export */ var selection_merge = (function(context) {
  var selection = context.selection ? context.selection() : context;

  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new Selection(merges, this._parents);
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/order.js
/* harmony default export */ var order = (function() {

  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
      if (node = group[i]) {
        if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }

  return this;
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/sort.js


/* harmony default export */ var sort = (function(compare) {
  if (!compare) compare = ascending;

  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }

  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }

  return new Selection(sortgroups, this._parents).order();
});

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/call.js
/* harmony default export */ var call = (function() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/nodes.js
/* harmony default export */ var nodes = (function() {
  return Array.from(this);
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/node.js
/* harmony default export */ var selection_node = (function() {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }

  return null;
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/size.js
/* harmony default export */ var size = (function() {
  let size = 0;
  for (const node of this) ++size; // eslint-disable-line no-unused-vars
  return size;
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/empty.js
/* harmony default export */ var empty = (function() {
  return !this.node();
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/each.js
/* harmony default export */ var each = (function(callback) {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }

  return this;
});

// EXTERNAL MODULE: ./node_modules/d3-selection/src/namespace.js
var namespace = __webpack_require__(16);

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/attr.js


function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}

function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}

function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}

function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}

/* harmony default export */ var attr = (function(name, value) {
  var fullname = Object(namespace["a" /* default */])(name);

  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local
        ? node.getAttributeNS(fullname.space, fullname.local)
        : node.getAttribute(fullname);
  }

  return this.each((value == null
      ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)
      : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
});

// EXTERNAL MODULE: ./node_modules/d3-selection/src/selection/style.js
var style = __webpack_require__(30);

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/property.js
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}

function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}

function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];
    else this[name] = v;
  };
}

/* harmony default export */ var property = (function(name, value) {
  return arguments.length > 1
      ? this.each((value == null
          ? propertyRemove : typeof value === "function"
          ? propertyFunction
          : propertyConstant)(name, value))
      : this.node()[name];
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/classed.js
function classArray(string) {
  return string.trim().split(/^|\s+/);
}

function classList(node) {
  return node.classList || new ClassList(node);
}

function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}

ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};

function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.add(names[i]);
}

function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.remove(names[i]);
}

function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}

function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}

function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}

/* harmony default export */ var classed = (function(name, value) {
  var names = classArray(name + "");

  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }

  return this.each((typeof value === "function"
      ? classedFunction : value
      ? classedTrue
      : classedFalse)(names, value));
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/text.js
function textRemove() {
  this.textContent = "";
}

function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}

/* harmony default export */ var selection_text = (function(value) {
  return arguments.length
      ? this.each(value == null
          ? textRemove : (typeof value === "function"
          ? textFunction
          : textConstant)(value))
      : this.node().textContent;
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/html.js
function htmlRemove() {
  this.innerHTML = "";
}

function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}

function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}

/* harmony default export */ var html = (function(value) {
  return arguments.length
      ? this.each(value == null
          ? htmlRemove : (typeof value === "function"
          ? htmlFunction
          : htmlConstant)(value))
      : this.node().innerHTML;
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/raise.js
function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}

/* harmony default export */ var selection_raise = (function() {
  return this.each(raise);
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/lower.js
function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

/* harmony default export */ var selection_lower = (function() {
  return this.each(lower);
});

// EXTERNAL MODULE: ./node_modules/d3-selection/src/namespaces.js
var namespaces = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/d3-selection/src/creator.js



function creatorInherit(name) {
  return function() {
    var document = this.ownerDocument,
        uri = this.namespaceURI;
    return uri === namespaces["b" /* xhtml */] && document.documentElement.namespaceURI === namespaces["b" /* xhtml */]
        ? document.createElement(name)
        : document.createElementNS(uri, name);
  };
}

function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}

/* harmony default export */ var creator = (function(name) {
  var fullname = Object(namespace["a" /* default */])(name);
  return (fullname.local
      ? creatorFixed
      : creatorInherit)(fullname);
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/append.js


/* harmony default export */ var append = (function(name) {
  var create = typeof name === "function" ? name : creator(name);
  return this.select(function() {
    return this.appendChild(create.apply(this, arguments));
  });
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/insert.js



function constantNull() {
  return null;
}

/* harmony default export */ var insert = (function(name, before) {
  var create = typeof name === "function" ? name : creator(name),
      select = before == null ? constantNull : typeof before === "function" ? before : Object(selector["a" /* default */])(before);
  return this.select(function() {
    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
  });
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/remove.js
function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}

/* harmony default export */ var selection_remove = (function() {
  return this.each(remove);
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/clone.js
function selection_cloneShallow() {
  var clone = this.cloneNode(false), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

function selection_cloneDeep() {
  var clone = this.cloneNode(true), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

/* harmony default export */ var clone = (function(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/datum.js
/* harmony default export */ var selection_datum = (function(value) {
  return arguments.length
      ? this.property("__data__", value)
      : this.node().__data__;
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/on.js
function contextListener(listener) {
  return function(event) {
    listener.call(this, event, this.__data__);
  };
}

function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return {type: t, name: name};
  });
}

function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;
    else delete this.__on;
  };
}

function onAdd(typename, value, options) {
  return function() {
    var on = this.__on, o, listener = contextListener(value);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
        this.addEventListener(o.type, o.listener = listener, o.options = options);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, options);
    o = {type: typename.type, name: typename.name, value: value, listener: listener, options: options};
    if (!on) this.__on = [o];
    else on.push(o);
  };
}

/* harmony default export */ var on = (function(typename, value, options) {
  var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;

  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }

  on = value ? onAdd : onRemove;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, options));
  return this;
});

// EXTERNAL MODULE: ./node_modules/d3-selection/src/window.js
var src_window = __webpack_require__(17);

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/dispatch.js


function dispatchEvent(node, type, params) {
  var window = Object(src_window["a" /* default */])(node),
      event = window.CustomEvent;

  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type, false, false);
  }

  node.dispatchEvent(event);
}

function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}

function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}

/* harmony default export */ var dispatch = (function(type, params) {
  return this.each((typeof params === "function"
      ? dispatchFunction
      : dispatchConstant)(type, params));
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/iterator.js
/* harmony default export */ var iterator = (function*() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) yield node;
    }
  }
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/index.js



































var root = [null];

function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}

function selection_selection() {
  return new Selection([[document.documentElement]], root);
}

function selection_selection_selection() {
  return this;
}

Selection.prototype = selection_selection.prototype = {
  constructor: Selection,
  select: selection_select,
  selectAll: selectAll,
  selectChild: selectChild,
  selectChildren: selectChildren,
  filter: selection_filter,
  data: selection_data,
  enter: selection_enter,
  exit: selection_exit,
  join: join,
  merge: selection_merge,
  selection: selection_selection_selection,
  order: order,
  sort: sort,
  call: call,
  nodes: nodes,
  node: selection_node,
  size: size,
  empty: empty,
  each: each,
  attr: attr,
  style: style["a" /* default */],
  property: property,
  classed: classed,
  text: selection_text,
  html: html,
  raise: selection_raise,
  lower: selection_lower,
  append: append,
  insert: insert,
  remove: selection_remove,
  clone: clone,
  datum: selection_datum,
  on: on,
  dispatch: dispatch,
  [Symbol.iterator]: iterator
};

/* harmony default export */ var src_selection = __webpack_exports__["b"] = (selection_selection);


/***/ }),
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return yesdrag; });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var _noevent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);



/* harmony default export */ __webpack_exports__["a"] = (function(view) {
  var root = view.document.documentElement,
      selection = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(view).on("dragstart.drag", _noevent_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _noevent_js__WEBPACK_IMPORTED_MODULE_1__[/* nonpassivecapture */ "c"]);
  if ("onselectstart" in root) {
    selection.on("selectstart.drag", _noevent_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _noevent_js__WEBPACK_IMPORTED_MODULE_1__[/* nonpassivecapture */ "c"]);
  } else {
    root.__noselect = root.style.MozUserSelect;
    root.style.MozUserSelect = "none";
  }
});

function yesdrag(view, noclick) {
  var root = view.document.documentElement,
      selection = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(view).on("dragstart.drag", null);
  if (noclick) {
    selection.on("click.drag", _noevent_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _noevent_js__WEBPACK_IMPORTED_MODULE_1__[/* nonpassivecapture */ "c"]);
    setTimeout(function() { selection.on("click.drag", null); }, 0);
  }
  if ("onselectstart" in root) {
    selection.on("selectstart.drag", null);
  } else {
    root.style.MozUserSelect = root.__noselect;
    delete root.__noselect;
  }
}


/***/ }),
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.findParent = findParent;
exports.findParentFolder = findParentFolder;
exports.findFolder = findFolder;
var folderFound = "";
var parentFolder = "";
var folderParentFolder = "";

function findParent(componentName, folder) {

    var contents = folder.contents;

    for (var i = 0; i < contents.length; i++) {
        var content = contents[i];
        if (componentName === content) {
            parentFolder = folder;
        }
        if ((typeof content === "undefined" ? "undefined" : _typeof(content)) === "object") {
            findParent(componentName, content);
        }
    }

    return parentFolder;
}

function findParentFolder(folderName, folder) {

    var contents = folder.contents;

    for (var i = 0; i < contents.length; i++) {
        var content = contents[i];

        if ((typeof content === "undefined" ? "undefined" : _typeof(content)) === "object") {
            if (content.name === folderName) {
                folderParentFolder = folder;
            }
            findParentFolder(folderName, content);
        }
    }

    return folderParentFolder;
}

// Given folders and a foldername, finds a folder and returns it.
function findFolder(folderName, folder) {

    // Return early if type is string.
    if (typeof folder === "string") {
        return false;
    }

    if ((typeof folder === "undefined" ? "undefined" : _typeof(folder)) === "object") {

        // Return folder if name matches.
        if (folder.name === folderName) {
            folderFound = folder;
        }

        var contents = folder.contents;

        for (var i = 0; i < contents.length; i++) {
            var content = contents[i];
            findFolder(folderName, content);
        }
    }

    return folderFound;
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var addEvents = function addEvents(markup, events, component) {
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

    /**
     * This piece of code is needed to try a feature.
     * Feature - Add events and reducers to Div
     * Expected - Events to work
     * Actual - Events don't work
     * 
     * Implement
     * 1. check if state.events object preset
     * 2. Then appened it to the markup
     */

    function stateToComponent(state) {
        return " " + Object.keys(state.events).map(function (key) {
            return key + "={(e)=>{var state = JSON.parse(JSON.stringify(this.state));" + state.events[key] + "}}";
        }).join(" ") + ">";
    }

    var state = JSON.parse(component.state);
    if (state.events) {
        markup = markup.replace(">", stateToComponent(state));
    }

    /**
     * This piece of code is needed only for the exception case.
     * Exception case that I'm trying to build is draw divs on screen
     * And add events using eventsBuilder component.
     * 
     * All these markup.replace is needed so that THE JSX MARKUP LOOKS CLEAN. it is fine if this file is this bad.
     */
    if (markup.includes("...state")) {
        markup = markup.split("state.").join("this.state.").replace("...state", "...this.state");
        return markup;
    }
    return markup.split("state.").join("this.state.");
};

// checks if state override is on. then adds state prop to child 
var addChildrenConfig = function addChildrenConfig(markup, component) {
    // for all the config.
    // filter child with overide state is true
    var config = JSON.parse(component.config);
    var childrenConfig = Object.keys(config);
    childrenConfig.forEach(function (childName) {

        // PRECAUTION: Edit markup for rendering list. Should not use other configuration while using this. // Problem - subscibing to child list component does not work Solution - add publishable enevts here
        if (config[childName].override) {
            var childMarkup = "<" + childName + "></" + childName + ">";

            var childMarkupWithProps = "<" + childName + " state={item} key={~~(Math.random()*10000)} index={i}></" + childName + ">";
            var renderListMarkup = "{state." + childName + ".map((item,i)=>" + childMarkupWithProps + ")}";
            markup = markup.replace(childMarkup, renderListMarkup);
        }
    });
    return markup;
};

var addChildren = function addChildren(component) {
    return component.markup.replace(">", " id=\"" + component.name + "\" >{this.props.children}");
};

module.exports = {
    addEvents: addEvents,
    addChildrenConfig: addChildrenConfig,
    addChildren: addChildren
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function getPublishes(publishes) {
    return publishes.map(function (publish) {
        if (publish.publishable) {
            return "\n            if(" + publish.publishCondition + "){\n                this.props." + publish.publishName + "? this.props." + publish.publishName + "(e):null;\n            }";
        }
    }).join("\n");
}

function getReducer(reducer) {
    return "\n        " + reducer.reducer + "\n        this.setState(state);\n        e.state = state;\n        e.index = this.props.index;\n        " + getPublishes(reducer.publishes);
}

function getReducers(component) {
    return component.events.map(function (event) {
        return "\n        " + (event.id + event.name) + " (e) {\n            var state = JSON.parse(JSON.stringify(this.state))\n            " + getReducer(event.reducer) + "\n        }";
    }).join("\n");
}

module.exports = {
    getReducers: getReducers
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    CONSTANTS: {
        component_name_prefix: "Layout"
    }
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.findParent = findParent;
exports.findParentFolder = findParentFolder;
exports.findFolder = findFolder;
var folderFound = "";
var parentFolder = "";
var folderParentFolder = "";

function findParent(componentName, folder) {

    var contents = folder.contents;

    for (var i = 0; i < contents.length; i++) {
        var content = contents[i];
        if (componentName === content) {
            parentFolder = folder;
        }
        if ((typeof content === "undefined" ? "undefined" : _typeof(content)) === "object") {
            findParent(componentName, content);
        }
    }

    return parentFolder;
}

function findParentFolder(folderName, folder) {

    var contents = folder.contents;

    for (var i = 0; i < contents.length; i++) {
        var content = contents[i];

        if ((typeof content === "undefined" ? "undefined" : _typeof(content)) === "object") {
            if (content.name === folderName) {
                folderParentFolder = folder;
            }
            findParentFolder(folderName, content);
        }
    }

    return folderParentFolder;
}

// Given folders and a foldername, finds a folder and returns it.
function findFolder(folderName, folder) {

    // Return early if type is string.
    if (typeof folder === "string") {
        return false;
    }

    if ((typeof folder === "undefined" ? "undefined" : _typeof(folder)) === "object") {

        // Return folder if name matches.
        if (folder.name === folderName) {
            folderFound = folder;
        }

        var contents = folder.contents;

        for (var i = 0; i < contents.length; i++) {
            var content = contents[i];
            findFolder(folderName, content);
        }
    }

    return folderFound;
}

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function empty() {
  return [];
}

/* harmony default export */ __webpack_exports__["a"] = (function(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
});


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return styleValue; });
/* harmony import */ var _window_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);


function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}

function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value, priority) {
  return arguments.length > 1
      ? this.each((value == null
            ? styleRemove : typeof value === "function"
            ? styleFunction
            : styleConstant)(name, value, priority == null ? "" : priority))
      : styleValue(this.node(), name);
});

function styleValue(node, name) {
  return node.style.getPropertyValue(name)
      || Object(_window_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(node).getComputedStyle(node, null).getPropertyValue(name);
}


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _selection_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);


/* harmony default export */ __webpack_exports__["a"] = (function(selector) {
  return typeof selector === "string"
      ? new _selection_index_js__WEBPACK_IMPORTED_MODULE_0__[/* Selection */ "a"]([[document.querySelector(selector)]], [document.documentElement])
      : new _selection_index_js__WEBPACK_IMPORTED_MODULE_0__[/* Selection */ "a"]([[selector]], _selection_index_js__WEBPACK_IMPORTED_MODULE_0__[/* root */ "c"]);
});


/***/ }),
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(44);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, "body {\n    position:relative;\n    color: #d9d9d9;\n    font-family: \"Nunito Sans\",-apple-system,\".SFNSText-Regular\",\"San Francisco\",BlinkMacSystemFont,\"Segoe UI\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;\n    margin: 0px;\n}\n\nli , label, p, .rules , input, textarea{\n    font-size: 9px;\n}\n\ninput, textarea { \n    background: #2b2b2b;\n    color: #d9d9d9;\n    opacity: 0.75;\n    vertical-align: bottom;\n}\n\ninput[type=\"text\"] {\n    -webkit-appearance: textarea;\n    color: rgba(255,255,255,0.5);\n    border-color: rgba(0,0,0,0.9);\n    border-width: 1px;\n    padding: 7px;\n}\n\nul label input {\n    width: 10px;\n}\n\nul, li {\n    padding-left: 5px;\n    margin-top: 0px;\n    margin-bottom: 0px;\n}\n\nbutton, select{\n    color: rgba(255,255,255,0.5);\n    border-color: rgba(0,0,0,0.9);\n    border-width: 0px;\n    padding: 5px;\n    background-color: transparent;\n    margin-left: 4px;\n}\n\nselect:focus{\n    \n    outline: 1px solid white;\n}\n\nbutton i{\n    padding-right:4px;\n}\n\nselect:focus, \nul label:hover, \nli:hover, \n.content:hover {\n    color: #fff;\n    background: rgb(43, 43, 43);\n}\n\nbutton:hover{\n    color: #fff;\n}\n\nul,li, ul label {\n    color: rgba(255,255,255,0.5);\n}\n\n\n#index{\n    margin:-4px;\n}\n\n.CodeMirror {\n    border: 1px solid black;\n    margin-top:5px;\n}\n\n.container{\n    padding: 5px;\n    background: #2C3134;\n}\n\n*::-webkit-scrollbar {\n  width: 1px;\n}\n \n*::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 0px rgba(0, 0, 0, 0.3);\n}\n \n*::-webkit-scrollbar-thumb {\n  background-color: darkgrey;\n  outline: 1px solid slategrey;\n}", ""]);



/***/ }),
/* 45 */,
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(47);

var _Window = __webpack_require__(8);

var _Window2 = _interopRequireDefault(_Window);

var _Folders = __webpack_require__(49);

var _Folders2 = _interopRequireDefault(_Folders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Styles.

// Behaviour components.

// Components.


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
        key: 'addFolder',
        value: function addFolder() {
            var folders = Array.from(this.state.folders);
            folders.unshift({
                type: "NewFolder",
                name: "",
                contents: [],
                status: "closed"
            });
            this.setState({ folders: folders });
        }
    }, {
        key: 'addComponent',
        value: function addComponent() {
            this.props.onOpenEditor();
        }
    }, {
        key: 'render',
        value: function render() {
            var props = this.props;
            var state = this.state;
            return _react2.default.createElement(
                _Window2.default,
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'container elements-tab' },
                    _react2.default.createElement(
                        'div',
                        { className: 'title' },
                        'Components'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'Controls' },
                        _react2.default.createElement(
                            'button',
                            { onClick: this.addComponent.bind(this) },
                            _react2.default.createElement('i', { className: 'fa fa-edit' }),
                            props.selectedComponent ? "Edit" : "Add"
                        ),
                        _react2.default.createElement(
                            'button',
                            { onClick: this.addFolder.bind(this) },
                            _react2.default.createElement('i', { className: 'fa fa-folder' }),
                            'Folder'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'folders' },
                        _react2.default.createElement(_Folders2.default, {
                            key: Math.ceil(Math.random() * 1000),
                            components: state.components,
                            folders: state.folders,
                            selectedComponent: props.selectedComponent,
                            onFoldersUpdate: props.onFoldersUpdate,
                            onSelection: props.onSelection
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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(48);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, ".override {\n    line-height: 0%;\n}\n\ntextarea {\n    height: 70px;\n    width: 450px;\n}\n\n.title{\n    margin-top: 15px;\n    margin-bottom: 11px;\n    color: rgba(255,255,255,0.5);\n    background: rgb(64, 64, 64);\n    padding: 5px;\n    font-size: 12px;\n}\n\n.Controls{\n    display: inline-block;\n    opacity: 1;\n    transition: opacity .2s ease-in;\n}\n\n.hideControls{\n    opacity: 0;\n    transition: opacity .5s ease-in-out;\n}\n\n.leftItem{\n    position: absolute;\n    left:0px;\n    z-index:100000;\n    animation: slide-to-screen 0.7s ease;\n}\n\n@keyframes slide-to-screen {\n    0% {\n        left:-300px;\n    }\n    100% {\n        left: 0px;\n    }\n}", ""]);



/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _findFolders = __webpack_require__(24);

__webpack_require__(50);

var _processFolder = __webpack_require__(52);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Utilities.

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
        key: "removeFolderFromParent",
        value: function removeFolderFromParent(folders, oldParent, contentName) {
            var oldParentFolder = (0, _findFolders.findFolder)(oldParent, folders[0]);
            var deleteIndex = oldParentFolder.contents.findIndex(function (content) {
                return (typeof content === "undefined" ? "undefined" : _typeof(content)) === "object" && content.name === contentName;
            });
            if (deleteIndex > -1) oldParentFolder.contents.splice(deleteIndex, 1);
        }
    }, {
        key: "removeContentFromParent",
        value: function removeContentFromParent(folders, oldParent, contentName) {
            var oldParentFolder = (0, _findFolders.findFolder)(oldParent, folders[0]);
            var removeIndex = oldParentFolder.contents.findIndex(function (content) {
                return content === contentName;
            });
            if (removeIndex !== -1) oldParentFolder.contents.splice(removeIndex, 1);
        }
    }, {
        key: "onFolderUpdate",
        value: function onFolderUpdate(data, type, oldParent, content) {
            var folders = Array.from(this.state.folders);
            var newParent = data.name;
            var folder = (0, _findFolders.findFolder)(newParent, folders[0]);
            if (type == "NEWFOLDER") {
                var emptyFolderIndex = folders.findIndex(function (folder) {
                    return folder.type === "NewFolder";
                });
                if (emptyFolderIndex !== -1) {
                    // Delete the newFolder
                    folders.splice(emptyFolderIndex, 1);
                }

                var noFolder = folders[0];
                noFolder.contents.unshift(data);
            }

            if (type == "COMPONENT") {
                folder.contents = data.contents;
                this.removeContentFromParent(folders, oldParent, content);
            } else if (type == "FOLDER") {
                folder.contents = data.contents;
                this.removeFolderFromParent(folders, oldParent, content, newParent);
            }
            this.props.onFoldersUpdate(folders);
        }
    }, {
        key: "onFolderStatusChanged",
        value: function onFolderStatusChanged(folder) {
            // find folder,
            var folderToUpdate = (0, _findFolders.findFolder)(folder.name, this.state.folders[0]);
            // update it in folders,
            folderToUpdate.status = folder.status;
            this.props.onFoldersUpdate(this.state.folders);
        }
    }, {
        key: "render",
        value: function render() {
            return (0, _processFolder.folderStructure)(this.props, this.onFolderUpdate.bind(this), this.onFolderStatusChanged.bind(this));
        }
    }]);

    return Folders;
}(_react.Component);

exports.default = Folders;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(51);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, ".newFolder{\n    user-select: none;\n    padding-left:5px;\n}\n\n.newFolder i{\n    color: rgba(255,255,255,0.5);\n    border-color: rgba(0,0,0,0.9);\n    border-width: 1px;\n    padding: 7px;\n}\n\n.newFolder.dragOver i{\n    animation: blink .5s infinite;\n}\n\n@keyframes blink{\n    from {    \n        color: rgba(255,255,255,0.5);\n    }\n    to {\n        color: white;\n    }\n}\n.fa.fa-folder ~ ul {\n    display: none;\n}\n.fa.fa-folder-open ~ ul {\n    display:block;\n}", ""]);



/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.folderStructure = folderStructure;

var _Folder = __webpack_require__(53);

var _Folder2 = _interopRequireDefault(_Folder);

var _Componentt = __webpack_require__(61);

var _Componentt2 = _interopRequireDefault(_Componentt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var selectedComponent = void 0,
    onSelection = void 0,
    onFolderUpdate = void 0,
    components = void 0,
    folders = void 0,
    onFolderStatusChanged = void 0;

function initialiseProps(props, checkFolder, x) {
    folders = props.folders;
    selectedComponent = props.selectedComponent;
    onSelection = props.onSelection;
    components = props.components;
    onFolderUpdate = checkFolder;
    onFolderStatusChanged = x;
}

function processFolder(folder, i) {
    var contents = folder.contents;

    return React.createElement(_Folder2.default, {
        key: i,
        folder: folder,
        folders: folders,
        contents: contents.map(processContent),
        onFolderStatusChanged: onFolderStatusChanged,
        onFolderUpdate: onFolderUpdate });
}

function processContent(content, i) {

    // Check if content is a component name.
    if (typeof content === "string") {
        var component = components.find(function (component) {
            return component.name === content;
        });

        if (!component) {
            throw content + " is not found. remove it from folder's data";
        }

        return React.createElement(_Componentt2.default, {
            key: i,
            component: component,
            selectedComponent: selectedComponent,
            onSelectionChange: onSelection
        });
    }
    // else its a folder type.
    else {
            var folder = content;
            return React.createElement(_Folder2.default, {
                key: i,
                folder: folder,
                folders: folders,
                contents: folder.contents.map(processContent),
                onFolderStatusChanged: onFolderStatusChanged,
                onFolderUpdate: onFolderUpdate });
        }
}

function folderStructure(props, onFolderUpdate, onFolderStatusChanged) {
    var folders = props.folders;

    initialiseProps(props, onFolderUpdate, onFolderStatusChanged);

    return folders.map(processFolder);
}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(54);

var _NewFolder = __webpack_require__(56);

var _NewFolder2 = _interopRequireDefault(_NewFolder);

var _Reducer = __webpack_require__(59);

var _Events = __webpack_require__(60);

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
            iconStatus: "fa fa-folder",
            folderClass: "newFolder",
            name: _this.props.folder.name,
            contents: _this.props.folder.contents,
            type: _this.props.folder.type,
            status: _this.props.folder.status
        };
        return _this;
    }

    _createClass(Folder, [{
        key: "newFolder",
        value: function newFolder(folder) {
            this.props.onFolderUpdate(folder, "NEWFOLDER");
        }
    }, {
        key: "render",
        value: function render() {

            var folder = this.props.folder;
            var contents = this.props.contents;
            var iconStatus = this.state.status === "open" ? "fa fa-folder-open" : "fa fa-folder";
            if (folder.type == "NewFolder") {
                return _react2.default.createElement(_NewFolder2.default, { onNewFolder: this.newFolder.bind(this) });
            }
            if (folder.type == "folder") {
                return _react2.default.createElement(
                    "div",
                    {
                        className: this.state.folderClass,
                        "data-folder-name": folder.name,
                        draggable: "true",
                        onDrop: _Events.dropHandler.bind(this),
                        onDragOver: _Events.dragOverHandler.bind(this),
                        onDragLeave: _Events.dragLeaveHandler.bind(this),
                        onDragStart: _Events.folderStartDrag.bind(this) },
                    _react2.default.createElement("i", { className: iconStatus, onClick: _Reducer.toggleFolder.bind(this) }),
                    _react2.default.createElement("input", { type: "text", className: "folder", placeholder: "Enter folder name", readOnly: true, value: this.state.name }),
                    this.state.status === "open" ? contents : null
                );
            }
            if (folder.type == "noFolder") {
                return _react2.default.createElement(
                    "div",
                    {
                        className: this.state.folderClass,
                        "data-folder-name": folder.name,
                        draggable: "true",
                        onDrop: _Events.dropHandler.bind(this),
                        onDragOver: _Events.dragOverHandler.bind(this),
                        onDragLeave: _Events.dragLeaveHandler.bind(this),
                        onDragStart: _Events.folderStartDrag.bind(this) },
                    contents
                );
            }
        }
    }]);

    return Folder;
}(_react.Component);

exports.default = Folder;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(55);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, "input.folder{\n    border:none;\n    background:none;\n    padding-bottom: 13px;\n}\n\n.newFolder{\n    user-select: none;\n}\n\n.newFolder i{\n    color: rgba(255,255,255,0.5);\n    border-color: rgba(0,0,0,0.9);\n    border-width: 1px;\n    padding: 7px;\n}\n\n.newFolder.dragOver i{\n    animation: blink .5s infinite;\n}\n\n@keyframes blink{\n    from {    \n        color: rgba(255,255,255,0.5);\n    }\n    to {\n        color: white;\n    }\n}\n.fa.fa-folder ~ ul {\n    display: none;\n}\n.fa.fa-folder-open ~ ul {\n    display:block;\n}", ""]);



/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(57);

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
                    type: "folder",
                    status: "closed"
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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(58);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, ".newFolder i{\n    color: rgba(255,255,255,0.5);\n    border-color: rgba(0,0,0,0.9);\n    border-width: 1px;\n    padding: 7px;\n}\n\n.newFolder.dragOver i{\n    animation: blink .5s infinite;\n}\n\n@keyframes blink{\n    from {    \n        color: rgba(255,255,255,0.5);\n    }\n    to {\n        color: green;\n    }\n}", ""]);



/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toggleFolder = toggleFolder;
function openFolder() {
    var state = JSON.parse(JSON.stringify(this.state));
    state.status = "open";
    this.props.onFolderStatusChanged(state);
}

function closeFolder() {
    var state = JSON.parse(JSON.stringify(this.state));
    state.status = "closed";
    this.props.onFolderStatusChanged(state);
}

function toggleFolder() {
    if (this.state.status === "closed") {
        openFolder.call(this);
    } else {
        closeFolder.call(this);
    }
}

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dropHandler = dropHandler;
exports.dragOverHandler = dragOverHandler;
exports.dragLeaveHandler = dragLeaveHandler;
exports.folderStartDrag = folderStartDrag;

var _findFolders = __webpack_require__(24);

function handleComponentDrop(componentName, oldParent) {
    var contents = Array.from(this.state.contents);

    contents.push(componentName);

    this.props.onFolderUpdate({
        name: this.state.name,
        contents: contents,
        type: "folder",
        status: "open"
    }, "COMPONENT", oldParent, componentName);
}

function handleFolderDrop(folderName, oldParent) {
    var contents = Array.from(this.state.contents);

    // 1. Find folder object.
    var droppedFolder = (0, _findFolders.findFolder)(folderName, this.props.folders[0]);

    contents.push(droppedFolder);

    // 2. Remove it from its parent (parentFolderName)
    // do somewhere else. head hurts

    // Check if it is a folder. Also check if we are not dropping on the original folder. may be remove it from the dom. NOPE. 
    if (folderName && folderName !== this.state.name) {
        this.props.onFolderUpdate({
            name: this.state.name,
            contents: contents,
            type: "folder",
            status: "open"
        }, "FOLDER", oldParent, folderName);
    }
}

function dropHandler(ev) {
    ev.preventDefault();
    var componentName = ev.dataTransfer.getData("component-name");
    var folderName = ev.dataTransfer.getData("folder-name");
    var oldParent = ev.dataTransfer.getData("parent-folder-name");
    var newParent = this.state.name;

    if (oldParent === newParent) {
        this.setState({
            folderClass: "newFolder",
            status: "closed"
        });
        return;
    }

    // If component name is null, then it is a folder dropped on folder
    if (componentName === "") {
        // This should happen.
        if (folderName == "null" || folderName == "") {
            console.error("Folder cannot be empty");
            return;
        }

        handleFolderDrop.call(this, folderName, oldParent);
    } else {
        handleComponentDrop.call(this, componentName, oldParent);
    }

    console.log("Drop from folder");
    ev.stopPropagation();
}

function dragOverHandler(ev) {
    ev.preventDefault();
    this.setState({
        folderClass: "newFolder dragOver",
        status: "open"
    });
}

function dragLeaveHandler(e) {
    this.setState({
        folderClass: "newFolder",
        status: "closed"
    });
}

function folderStartDrag(e) {
    var name = event.target.getAttribute("data-folder-name");
    var parent = event.target.parentElement.getAttribute("data-folder-name");
    e.dataTransfer.setData("folder-name", name);
    e.dataTransfer.setData("parent-folder-name", parent);
    console.log("Folder " + name + " draged with parent " + parent);
}

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Events = __webpack_require__(62);

__webpack_require__(63);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Events.

// Styles.

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
        key: "addComponentDetails",
        value: function addComponentDetails(e) {

            /** Pass details about component or folder in the drag event */

            var name = e.target.getAttribute("data-name");
            e.dataTransfer.setData("component-name", name);
            console.log(e.dataTransfer.getData("component-name"));
            e.dataTransfer.setData("parent-folder-name", e.currentTarget.parentElement.getAttribute("data-folder-name"));
            e.stopPropagation();
        }
    }, {
        key: "render",
        value: function render() {

            var props = this.props;
            var selectedComponent = props.selectedComponent;
            var component = props.component;

            return _react2.default.createElement(
                "li",
                {
                    className: selectedComponent && props.component.name === selectedComponent.name ? "selected component background" : "component background",
                    onClick: _Events.selectionChanged.bind(this, component.name),
                    onContextMenu: _Events.selectionChanged.bind(this, component.name),
                    index: props.index,
                    draggable: "true",
                    "data-name": component.name,
                    onDragStart: this.addComponentDetails.bind(this) },
                _react2.default.createElement(
                    "span",
                    { className: "componentName " },
                    component.name
                )
            );
        }
    }]);

    return Componentt;
}(_react.Component);

exports.default = Componentt;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.selectionChanged = selectionChanged;

// Public functions

function selectionChanged(componentName, e) {

    /** Pass message to Components about selection change  */

    this.props.onSelectionChange(componentName, e);
}

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(64);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, "/* Show green when component is selected*/\n\n.selected, .green {\n    border: 1px solid green;\n    background: rgb(43, 43, 43);\n}\n\n/* Show dark background to components */\n\n.background {\n    background: rgb(64, 64, 64);\n    border: 1px solid #333333;\n}\n\n/* Show some spacing before the component name */\n\n.component .componentName{\n    padding:7px;\n}\n\n.component {\n    display:flex;\n}\n\n/* Show comopnent preview onDrag*/\n\n.dragStarted span:not(.componentName){\n    display:none;\n}\n\n.hidden{\n    display: none;\n}", ""]);



/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Configurator = __webpack_require__(66);

var _Configurator2 = _interopRequireDefault(_Configurator);

var _Tags = __webpack_require__(69);

var _Tags2 = _interopRequireDefault(_Tags);

var _Reducer = __webpack_require__(78);

var _Reducer2 = _interopRequireDefault(_Reducer);

var _Window = __webpack_require__(8);

var _Window2 = _interopRequireDefault(_Window);

__webpack_require__(82);

var _Reducer3 = __webpack_require__(84);

var _Storage = __webpack_require__(9);

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
        _this.state.selectedEventName = "";
        _this.state.selectedEvent = {
            name: "",
            reducer: {
                reducer: "",
                publishes: [],
                index: _this.props.component.events.length
            }
        };
        _this.state.eventID = "";
        return _this;
    }

    _createClass(Events, [{
        key: "publishEvent",
        value: function publishEvent(reducer) {
            this.setState({
                selectedEvent: {
                    name: this.state.selectedEventName,
                    reducer: {
                        reducer: reducer.reducer,
                        publishes: reducer.publishes
                    }
                }
            });
        }
    }, {
        key: "saveEvent",
        value: function saveEvent() {
            var _this2 = this;

            var events = Array.from(this.props.component.events);
            var changedEvent = events.find(function (event) {
                return event.name === _this2.state.selectedEvent.name && _this2.state.eventID === event.id;
            });
            if (changedEvent) {
                // its a existing event
                changedEvent.reducer = this.state.selectedEvent.reducer;
            } else {
                // its a new event
                events.push({
                    id: this.state.eventID,
                    index: events.length,
                    name: this.state.selectedEvent.name,
                    reducer: this.state.selectedEvent.reducer
                });
            }
            this.props.onEventsUpdate(events);
        }
    }, {
        key: "render",
        value: function render() {
            var component = this.props.component;

            // Report if no component is created.
            if (this.state.components.length == 0) {
                return null;
            }

            // Report if no component is selected.
            if (component.name === undefined && this.state.components.length != 0) {
                return null;
            }

            var selectedTag = this.state.selectedTag || "";
            var configurator = void 0,
                eventNames = [];

            // Check if it is a child component
            if (selectedTag.includes("child-component-")) {

                // Get child component name from the selected tag.
                var childComponentName = selectedTag.split("child-component-")[1];

                // Get list of components.
                var components = (0, _Storage.readData)("ui-editor");

                // Find the child component from the list of components.
                var childComponent = components.find(function (component) {
                    return component.name === childComponentName;
                });

                // Find events that are publishable from the child component to show in drop down.
                eventNames = [];

                childComponent.events.forEach(function (event) {
                    event.reducer.publishes.forEach(function (publish) {
                        if (publish.publishable) {
                            eventNames.push(publish.publishName);
                        }
                    });
                });
                // Create view for config.
                configurator = _react2.default.createElement(_Configurator2.default, {
                    key: Math.ceil(Math.random() * 1000),
                    onChange: _Reducer3.updateConfiguration.bind(this),
                    childName: childComponentName,
                    parent: component });
            } else {
                eventNames = component.events.filter(function (e) {
                    return e.id === selectedTag.split("-")[1];
                }).map(function (e) {
                    return e.name;
                });
            }

            return _react2.default.createElement(
                _Window2.default,
                null,
                _react2.default.createElement(
                    "ul",
                    { className: "container events-tab" },
                    _react2.default.createElement(_Tags2.default, { component: component, onSelectedTagChanged: _Reducer3.selectedTagChanged.bind(this) }),
                    configurator,
                    _react2.default.createElement(
                        "div",
                        { className: "title" },
                        "Event"
                    ),
                    _react2.default.createElement(
                        "div",
                        null,
                        _react2.default.createElement(
                            "div",
                            { "class": "spacing" },
                            _react2.default.createElement(
                                "label",
                                null,
                                "Event name"
                            ),
                            _react2.default.createElement("input", { list: "eventNames", type: "text", onChange: _Reducer3.updateSelectedEvent.bind(this), value: this.state.selectedEventName, title: "Event Name" }),
                            _react2.default.createElement(
                                "datalist",
                                { id: "eventNames" },
                                eventNames.map(function (eventName) {
                                    return _react2.default.createElement("option", { value: eventName });
                                })
                            ),
                            _react2.default.createElement(
                                "button",
                                { onClick: this.saveEvent.bind(this), id: "saveEvent" },
                                _react2.default.createElement("i", { className: "fas fa-save" }),
                                "Save Event"
                            ),
                            _react2.default.createElement(
                                "button",
                                { onClick: _Reducer3.deleteEvent.bind(this), id: "deleteEvent" },
                                _react2.default.createElement("i", { className: "fas fa-trash" }),
                                "Delete Event"
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "event" },
                        _react2.default.createElement(
                            "div",
                            { className: "reducers" },
                            _react2.default.createElement(
                                "div",
                                { className: "title" },
                                "Reducer"
                            ),
                            _react2.default.createElement(
                                "div",
                                null,
                                _react2.default.createElement(_Reducer2.default, { key: Math.ceil(Math.random() * 1000), reducer: this.state.selectedEvent.reducer, onChange: this.publishEvent.bind(this) })
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
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(67);

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
                    "div",
                    { className: "spacing" },
                    _react2.default.createElement(
                        "label",
                        null,
                        "Override state"
                    ),
                    _react2.default.createElement("input", { type: "checkbox", onChange: this.toggelOverride.bind(this), checked: this.state.override ? "checked" : "" })
                )
            );
        }
    }]);

    return Configurator;
}(_react.Component);

exports.default = Configurator;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(68);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, ".error {\n    color: red;\n}\n\n.info {\n    color: yellowgreen;\n}\n\nlabel {\n    padding-right: 10px;\n}\n\n.configurator {\n    background: rgb(64, 64, 64);\n    margin-top: 10px;\n    padding: 5px;\n}\n\n.spacing{\n    margin: 10px;\n}", ""]);



/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(70);

var _Nodes = __webpack_require__(72);

var _Nodes2 = _interopRequireDefault(_Nodes);

var _getNodeTree = __webpack_require__(73);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libraries.

var Tags = function (_Component) {
    _inherits(Tags, _Component);

    function Tags(props) {
        _classCallCheck(this, Tags);

        var _this = _possibleConstructorReturn(this, (Tags.__proto__ || Object.getPrototypeOf(Tags)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(Tags, [{
        key: "render",
        value: function render() {

            var component = this.props.component;

            var nodeTree = (0, _getNodeTree.getNodeTree)(component, component.markup, component.style, JSON.parse(component.state), component.events);

            // Report error.
            if (nodeTree.error !== undefined) {
                console.log('%c Oh my heavens! ', 'background: #222; color: #bada55', nodeTree.error);
                return nodeTree.error;
            }

            // Report error if component is not 
            if (nodeTree.result === undefined) {
                return _react2.default.createElement(
                    "ul",
                    { className: "container events-tab" },
                    _react2.default.createElement(
                        "div",
                        { className: "title" },
                        "Events"
                    )
                );
            }

            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "div",
                    { className: "title" },
                    "Tags"
                ),
                _react2.default.createElement(
                    "div",
                    { className: "tags" },
                    _react2.default.createElement(_Nodes2.default, { node: nodeTree.result, onSelectedTagChanged: this.props.onSelectedTagChanged })
                )
            );
        }
    }]);

    return Tags;
}(_react.Component);

exports.default = Tags;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(71);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, ".error {\n    color: red;\n}\n\n.tags {\n    max-height: 300px;\n    overflow: scroll;\n}\n\n.selectedItem.selectedItem {\n    outline: 1px solid green;\n}", ""]);



/***/ }),
/* 72 */
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
            // nested component.
            if (typeof node.type === "function") {
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

            var id = node.props.id ? "-" + node.props.id : "";

            if (id === "") {
                // Check if it contains children.
                if (node.props && Array.isArray(node.props.children)) {
                    return node.props.children.map(function (child, index) {
                        return _react2.default.createElement(Nodes, { key: index, node: child, onSelectedTagChanged: _this2.props.onSelectedTagChanged });
                    });
                } else if (_typeof(node.props.children) === "object") {
                    return _react2.default.createElement(Nodes, { key: index, node: node.props.children, onSelectedTagChanged: this.props.onSelectedTagChanged });
                }
                return null;
            } else {
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
                        var _children = _react2.default.createElement(Nodes, { key: index, node: node.props.children, onSelectedTagChanged: this.props.onSelectedTagChanged });

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
                                (node.type.name || node.type) + id
                            ),
                            _children
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
        }
    }]);

    return Nodes;
}(_react.Component);

exports.default = Nodes;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getNodeTree = getNodeTree;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Runtime = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Why? Because importing React as variable at line#2 will be alterted by babel. Keep it as a property, babel will ignore it.
window.React = _react2.default;
window.Component = _react2.default.Component;

function getNodeTree(element, jsx, style, state, events) {

    var result = void 0,
        error = void 0;
    try {
        window.visited = {};
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
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _React = __webpack_require__(75);

function createComponent(component) {

    var componentString = (0, _React.convertToReact)(component);

    // eval does not evaluate class if not exclosed in paranthesis.
    return eval(Babel.transform(componentString, { presets: ['react'], plugins: ["transform-es2015-classes"] }).code);
}

module.exports = {
    createComponent: createComponent
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.convertToReact = convertToReact;

var _markup = __webpack_require__(25);

var _reducers = __webpack_require__(26);

// Elements to  react component.
function convertToReact(component) {

    component.events.forEach(function (event) {
        event.id = event.id.replace("-", "");
    });

    /**
     * Code generation for markup
     * 
     * Markup is edited in three phases.
     * 1. Add props - This function changes markup to include children - helps in composing bigger components. 
     *  For example, lets say an accordion component is created, its behaviour includes expanding contents and
     *  collapsing contents where content could be valid html tags, other components. An easy way to create such 
     *  separated concerns in behaviour is embedding children.
     * 
     * 2. Add Children config - This helps to override child config state from parent and render list of children.
     * 
     * 3. Add events - This helps to bind event listenes to markup 
     */

    var propsInMarkup = (0, _markup.addChildren)(component);
    var childrenMarkup = (0, _markup.addChildrenConfig)(propsInMarkup, component);
    var componentEventedMarkup = (0, _markup.addEvents)(childrenMarkup, component.events, component);

    /**
     * Code generation for reducers
     * 
     * Reducer function are created in a single phase.
     * 
     * getReducers takes a component and returns reducer functions based on following rules.
     * 1. Generation of function name - It appends event id with event name 
     * 2. Generation of function definition
     *      1. Generation of a new state - Creates a new state with help of json.strigify and parse
     *      2. Generation of reducer logic - event reducer is appeneded here. 
     *      3. Generation of publishable event - It also publishes events based on the event type.
     */
    var reducers = (0, _reducers.getReducers)(component);

    var ReactComponent = "(\nclass " + component.name + " extends Component {\n\n    constructor(props) {\n        super(props);\n        this.state = this.props.state || " + component.state + ";\n\n        // Generate css as a separate file on download\n    }\n\n    " + reducers + "\n\n    render() {\n        return (" + componentEventedMarkup + ")\n    }\n})\n";
    return ReactComponent;
}

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.readData = readData;
exports.writeData = writeData;
exports.readComponent = readComponent;
exports.writeComponent = writeComponent;
function pushHistory(components) {

    var editorHistory = readData("ui-editor-history");
    editorHistory.push({
        time: new Date().toString(),
        data: components,
        name: ""
    });
    localStorage.setItem("ui-editor-history", JSON.stringify(editorHistory));
}

// If empty, return empty array.

function readData(key) {

    if (key === "ui-editor") {
        if (!window.components) {
            window.components = JSON.parse(localStorage.getItem(key)) || window.sampleComponents;
        }
        return JSON.parse(JSON.stringify(window.components));
    }
    if (key === "ui-editor-history") {
        var history = localStorage.getItem(key);

        if (history) return JSON.parse(history);
    }
    if (key === "folders") {
        var folders = JSON.parse(localStorage.getItem(key));

        if (folders === null) {
            return window.sampleFolders;
        }
        return folders;
    }

    return [];
}

function writeData(key, components, noPush) {

    if (key == "folders") {
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

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.nameToURL = nameToURL;
exports.urlToName = urlToName;
exports.hasAssets = hasAssets;
function nameToURL(style) {
    if (typeof style !== "string") {
        console.error("state should be a string");
    }

    if (window.assets && window.assets.length > 0) {
        var _loop = function _loop() {
            // Replace it with asset blob url
            var assetName = style.split("['")[1].split("]")[0].split("");
            assetName.pop();
            assetName = assetName.join("");
            var asset = window.assets.find(function (asset) {
                return asset.name === assetName;
            });

            style = style.replace("$assets['" + assetName + "']", "url(" + getURL(asset.blob, assetName) + ")");
        };

        // Check if style has $assets
        while (style.includes("$assets")) {
            _loop();
        }
    }

    return style;
}

function urlToName(state) {
    var _loop2 = function _loop2() {
        // Replace it with asset blob url
        var url = state.split("url(")[1].split(")")[0];

        var asset = window.assets.find(function (asset) {
            return asset.url === url;
        });

        if (asset) {

            state = state.replace("url(" + asset.url + ")", "$assets['" + asset.name + "']");
        }
    };

    // Check if style has $assets
    while (state.includes(window.location.host)) {
        _loop2();
    }

    return state;
}

function hasAssets(state) {
    return state.includes("$assets");
}

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCodemirror = __webpack_require__(14);

var _Publishes = __webpack_require__(80);

var _Publishes2 = _interopRequireDefault(_Publishes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libraries.

// Components.

// Events.

var Reducer = function (_Component) {
    _inherits(Reducer, _Component);

    function Reducer(props) {
        _classCallCheck(this, Reducer);

        var _this = _possibleConstructorReturn(this, (Reducer.__proto__ || Object.getPrototypeOf(Reducer)).call(this, props));

        _this.state = {
            publishes: _this.props.reducer.publishes,
            reducer: _this.props.reducer.reducer
        };
        return _this;
    }

    _createClass(Reducer, [{
        key: "addNewPublish",
        value: function addNewPublish() {
            this.setState({
                publishes: (this.state.publishes.push({
                    publishable: true,
                    publishName: "",
                    publishCondition: ""
                }), this.state.publishes)
            });
        }
    }, {
        key: "syncChanges",
        value: function syncChanges() {
            this.props.onChange({
                publishes: this.state.publishes,
                reducer: this.state.reducer
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var reducer = this.state.reducer;
            var publishes = this.state.publishes;

            return (
                // TODO: 1.check save and delete.
                _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement(
                        "div",
                        { "class": "spacing", onMouseLeave: this.syncChanges.bind(this) },
                        _react2.default.createElement(
                            "label",
                            null,
                            "Reducer Definition"
                        ),
                        _react2.default.createElement(_reactCodemirror.UnControlled, {
                            value: reducer,
                            autoCursor: false,
                            options: {
                                lineNumbers: false,
                                mode: "text/javascript",
                                theme: "darcula",
                                indentWithTabs: false,
                                smartIndent: true
                            },
                            onChange: function onChange(editor, data, reducer) {
                                _this2.setState({
                                    reducer: reducer
                                });
                            }
                        })
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "title" },
                        "Publishes"
                    ),
                    _react2.default.createElement(
                        "div",
                        null,
                        reducer !== "" ? _react2.default.createElement(
                            "button",
                            { id: "addPublish", onClick: this.addNewPublish.bind(this) },
                            "Add publish"
                        ) : null,
                        publishes.length > 0 ? _react2.default.createElement(_Publishes2.default, { publishes: publishes }) : null
                    )
                )
            );
        }
    }]);

    return Reducer;
}(_react.Component);

exports.default = Reducer;

/***/ }),
/* 79 */,
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Publish = __webpack_require__(81);

var _Publish2 = _interopRequireDefault(_Publish);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libraries.

var Publishes = function (_Component) {
    _inherits(Publishes, _Component);

    function Publishes(props) {
        _classCallCheck(this, Publishes);

        var _this = _possibleConstructorReturn(this, (Publishes.__proto__ || Object.getPrototypeOf(Publishes)).call(this, props));

        _this.state = {
            publishes: _this.props.publishes
        };
        return _this;
    }

    _createClass(Publishes, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var publishes = this.state.publishes;

            return _react2.default.createElement(
                "div",
                null,
                publishes.map(function (publish, i) {
                    return _react2.default.createElement(_Publish2.default, {
                        index: i,
                        key: Math.ceil(Math.random() * 1000),
                        publish: publish,
                        onSave: function onSave(data, i) {
                            return _this2.setState({
                                publishes: (publishes[i] = data, publishes) // update list of publishes and return it.
                            });
                        },
                        onDelete: function onDelete(a, i) {
                            return _this2.setState({
                                publishes: (publishes.splice(i, 1), publishes) // delete the publishes and return it.
                            });
                        } });
                })
            );
        }
    }]);

    return Publishes;
}(_react.Component);

exports.default = Publishes;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libraries.

// Events.

var Publish = function (_Component) {
    _inherits(Publish, _Component);

    function Publish(props) {
        _classCallCheck(this, Publish);

        var _this = _possibleConstructorReturn(this, (Publish.__proto__ || Object.getPrototypeOf(Publish)).call(this, props));

        _this.state = {
            publishable: _this.props.publish.publishable,
            publishName: _this.props.publish.publishName,
            publishCondition: _this.props.publish.publishCondition
        };
        return _this;
    }

    _createClass(Publish, [{
        key: "onButtonClickSave",
        value: function onButtonClickSave() {
            // Reminder - Never bind inline calls to button. Ruined my morning.
            this.props.onSave(this.state, this.props.index);
        }
    }, {
        key: "onButtonClickdelete",
        value: function onButtonClickdelete() {
            this.props.onDelete(this.state, this.props.index);
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var state = this.state;

            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "div",
                    { "class": "spacing" },
                    _react2.default.createElement(
                        "label",
                        null,
                        "Publishable"
                    ),
                    _react2.default.createElement("input", { type: "checkbox", onChange: function onChange(e) {
                            _this2.setState({ publishable: !state.publishable });
                        }, checked: state.publishable ? "checked" : "" })
                ),
                _react2.default.createElement(
                    "div",
                    null,
                    state.publishable ? _react2.default.createElement(
                        "div",
                        null,
                        _react2.default.createElement(
                            "div",
                            { "class": "spacing" },
                            _react2.default.createElement(
                                "label",
                                null,
                                "Publish Name"
                            ),
                            _react2.default.createElement("input", { type: "text", onChange: function onChange(e) {
                                    _this2.setState({ publishName: e.currentTarget.value });
                                }, value: state.publishName })
                        ),
                        _react2.default.createElement(
                            "div",
                            { "class": "spacing" },
                            _react2.default.createElement(
                                "label",
                                null,
                                "Publish Condition"
                            ),
                            _react2.default.createElement("input", { type: "text", onChange: function onChange(e) {
                                    _this2.setState({ publishCondition: e.currentTarget.value });
                                }, value: state.publishCondition })
                        ),
                        _react2.default.createElement(
                            "button",
                            { id: "savePublish", onClick: this.onButtonClickSave.bind(this) },
                            "Save Publish"
                        ),
                        _react2.default.createElement(
                            "button",
                            { id: "deletePublish", onClick: this.onButtonClickdelete.bind(this) },
                            "Delete Publish"
                        )
                    ) : null
                )
            );
        }
    }]);

    return Publish;
}(_react.Component);

exports.default = Publish;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(83);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, ".events {\n    border:1px solid black;\n    padding: 5px;\n}\n\n.error {\n    color: red;\n}\n\n.tags.tags ul {\n    border: 0px;\n    margin-left: 30px;\n    padding:5px;\n}\n\n.tags ul:first-child {\n    margin-left: -2px;\n}\n\n#saveEvent, #deleteEvent, #addPublish, #deletePublish, #savePublish{\n    font-size: xx-small;\n}", ""]);



/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.updateEvent = updateEvent;
exports.selectedTagChanged = selectedTagChanged;
exports.deleteEvent = deleteEvent;
exports.updateConfiguration = updateConfiguration;
exports.updateSelectedEvent = updateSelectedEvent;
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
        // 1. Find the event
        var changedEventIndex = element.events.findIndex(function (e) {
            return e.id === event.id && e.name === event.name;
        });
        if (changedEventIndex == -1) {
            console.error("Changing event name will not help. Create a new event"); // Feature 
        }
        element.events[changedEventIndex] = event;
    }

    this.props.onEventsUpdate(element.events);
}

function highlightItem(id) {
    var style = document.querySelector("#dynamicHighlight");
    if (style) {

        style.innerHTML = "#" + id + " { border: 1px solid #F00; }";
    } else {
        style = document.createElement('style');
        style.id = "dynamicHighlight";
        style.type = 'text/css';
        document.getElementsByTagName('head')[0].appendChild(style);
    }
}

function selectedTagChanged(e) {
    var selectedTag = e.currentTarget.value;
    var eventID = "";
    if (selectedTag.includes("child-component-")) {
        eventID = selectedTag.split("child-component-")[1];
    } else {
        eventID = selectedTag.split("-")[1];
    }

    /**
     * Highlight the selected in the preview
     */

    highlightItem(eventID);

    this.setState({
        selectedTag: e.currentTarget.value,
        selectedEventName: "",
        eventID: eventID,
        selectedEvent: {
            name: "",
            reducer: {
                reducer: "",
                publishes: [],
                index: this.props.component.events.length
            }
        }
    });
}

function deleteEvent() {
    var _this = this;

    // Get current component.
    var component = JSON.parse(JSON.stringify(this.state.component));

    // Get selected event index.
    var deleteIndex = component.events.findIndex(function (event) {
        return event.name === _this.state.selectedEventName;
    });

    // Remove the event to be deleted.
    component.events.splice(deleteIndex, 1);

    // Update elements with new events.
    this.props.onEventsUpdate(component.events);
}

function updateConfiguration(config) {
    this.props.onConfigUpdate(config);
}

function updateSelectedEvent(e) {
    var _this2 = this;

    var selectedEvent = this.props.component.events.find(function (event) {
        return event.name === e.currentTarget.value && _this2.state.eventID === event.id;
    });

    if (selectedEvent) {
        this.setState({
            selectedEventName: e.currentTarget.value,
            selectedEvent: selectedEvent
        });
    } else {
        this.setState({
            selectedEventName: e.currentTarget.value,
            selectedEvent: {
                name: e.currentTarget.value,
                reducer: {
                    reducer: "",
                    publishes: [],
                    index: this.props.component.events.length
                }
            }
        });
    }
}

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(86);

var _Asset = __webpack_require__(88);

var _Asset2 = _interopRequireDefault(_Asset);

var _Window = __webpack_require__(8);

var _Window2 = _interopRequireDefault(_Window);

var _Reducer = __webpack_require__(91);

var _db = __webpack_require__(92);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Styles.

// Components.

// Behaviour components.

// Events.

// Utilities.

var Assets = function (_Component) {
    _inherits(Assets, _Component);

    function Assets(props) {
        _classCallCheck(this, Assets);

        var _this = _possibleConstructorReturn(this, (Assets.__proto__ || Object.getPrototypeOf(Assets)).call(this, props));

        _this.state = {
            class: "drop_zone",
            imageURL: "",
            assets: [],
            selectedAsset: ""
        };

        /* Store the assets in local DB */

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

            /* Keep the image in DOM as cache. */

            var img = document.createElement("img");
            img.file = file;
            img.src = bin;
            newFile.appendChild(img);
        }
    }, {
        key: "updatedSelected",
        value: function updatedSelected(e) {

            /* Keep track of selected asset in the state */

            var assetName = e.target.getAttribute("data-name");
            this.setState({
                selectedAsset: assetName
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            /* Create an asset component for each assets. */

            var assets = this.state.assets.map(function (asset) {
                return _react2.default.createElement(_Asset2.default, { asset: asset, selected: _this2.state.selectedAsset, onSelected: _this2.updatedSelected.bind(_this2) });
            });

            return _react2.default.createElement(
                _Window2.default,
                null,
                _react2.default.createElement(
                    "ul",
                    { className: "assets" },
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
                        "div",
                        null,
                        this.state.selectedAsset.name
                    ),
                    assets
                )
            );
        }
    }]);

    return Assets;
}(_react.Component);

exports.default = Assets;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(87);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, "\n/* Show dashed outline for the drop zone.*/\n\n.drop_zone {\n  border: 1px lightgray dashed;\n  width:  200px;\n  height: 100px;\n}\n\n/* Show dashed outline during drag over. */\n\n.drag_over {\n  border: 2px lightgray dashed;\n  width:  200px;\n  height: 100px;\n}\n\n/* Give some spacing around asset name. */\n\n.assets p{\n  padding:15px; \n}", ""]);



/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(89);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Styles.

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
            var _this2 = this;

            var asset = assets.find(function (asset) {
                return asset.name === _this2.props.asset.name;
            });
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "p",
                    { "data-name": this.props.asset.name, onClick: this.props.onSelected },
                    this.props.asset.name
                ),
                _react2.default.createElement("img", { src: asset.url })
            );
        }
    }]);

    return Asset;
}(_react.Component);

exports.default = Asset;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(90);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, "\n/* Show selected asset with a light dashed outline */\n\n.selectedAsset{\n    border: 1px lightgray dashed;\n}", ""]);



/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dropHandler = dropHandler;
exports.dragOverHandler = dragOverHandler;
exports.dragLeaveHandler = dragLeaveHandler;

// Public functions.

function dropHandler(ev) {
    var _this = this;

    ev.preventDefault();

    /* Store the image in DB and in DOM after drop */

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

    /* Show drag over visuals */

    this.setState({
        class: "drag_over"
    });

    ev.preventDefault();
}

function dragLeaveHandler(e) {

    /* Show drop visuals */

    this.setState({
        class: "drop_zone"
    });
}

/***/ }),
/* 92 */
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
        window.assets = data.map(function (image) {
            return {
                name: image.name,
                blob: image.result,
                url: getURL(image.result)
            };
        });

        _this2.setState({
            assets: window.assets
        });
    });
}

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Storage = __webpack_require__(9);

var _Change = __webpack_require__(94);

var _Change2 = _interopRequireDefault(_Change);

var _Window = __webpack_require__(8);

var _Window2 = _interopRequireDefault(_Window);

__webpack_require__(97);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Components.

// Behaviour components.

var History = function (_Component) {
    _inherits(History, _Component);

    function History(props) {
        _classCallCheck(this, History);

        var _this = _possibleConstructorReturn(this, (History.__proto__ || Object.getPrototypeOf(History)).call(this, props));

        _this.state = {};
        _this.state.history = (0, _Storage.readData)("ui-editor-history");
        return _this;
    }

    _createClass(History, [{
        key: "updateHistory",
        value: function updateHistory(data, index) {
            this.state.history[index] = data;
            localStorage.setItem("ui-editor-history", JSON.stringify(this.state.history));
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                _Window2.default,
                null,
                _react2.default.createElement(
                    "ul",
                    null,
                    this.state.history.map(function (item, index) {
                        return _react2.default.createElement(_Change2.default, { index: index, item: item, itemChanged: _this2.updateHistory.bind(_this2) });
                    })
                )
            );
        }
    }]);

    return History;
}(_react.Component);

exports.default = History;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(95);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Change = function (_Component) {
    _inherits(Change, _Component);

    function Change(props) {
        _classCallCheck(this, Change);

        var _this = _possibleConstructorReturn(this, (Change.__proto__ || Object.getPrototypeOf(Change)).call(this, props));

        _this.state = {
            time: _this.props.item.time,
            name: _this.props.item.name
        };
        return _this;
    }

    _createClass(Change, [{
        key: "updateName",
        value: function updateName(e) {
            this.setState({
                name: e.target.value
            });
        }
    }, {
        key: "updateParent",
        value: function updateParent() {
            this.props.itemChanged({
                name: this.state.name,
                time: this.props.item.time,
                data: this.props.item.date
            }, this.props.index);
        }
    }, {
        key: "render",
        value: function render() {
            var active = JSON.stringify(this.props.item.data) === JSON.stringify(window.components) ? "change active" : "change";
            return _react2.default.createElement(
                "li",
                { className: active },
                _react2.default.createElement("input", { value: this.state.name, onChange: this.updateName.bind(this), onMouseLeave: this.updateParent.bind(this) }),
                _react2.default.createElement(
                    "span",
                    null,
                    this.state.time
                )
            );
        }
    }]);

    return Change;
}(_react.Component);

exports.default = Change;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(96);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, ".selected, .green {\n    border: 1px solid green;\n    background: rgb(43, 43, 43);\n}\n.selectedAsset{\n    border: 1px lightgray dashed;\n}\n\n.change input{\n    border: 1px;\n    padding: 5px;\n    width: 50px;\n}", ""]);



/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(98);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, ".selected, .green {\n    border: 1px solid green;\n    background: rgb(43, 43, 43);\n}\n.selectedAsset{\n    border: 1px lightgray dashed;\n}", ""]);



/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Runtime = __webpack_require__(13);

__webpack_require__(100);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libraries.

// Runtime utilities.

// Styles.

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

            (0, _Runtime.initialiseComponents)(this.props.component);

            if (!window[this.props.component.name]) {
                return null;
            }
            return _react2.default.createElement(
                "div",
                { className: "centerItem" },
                _react2.default.createElement(window[this.props.component.name])
            );
        }
    }]);

    return DynamicComponent;
}(_react.Component);

exports.default = DynamicComponent;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(101);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, ".hint{\n    height:100px;\n    width:100%;\n    border: 1px dashed green;\n}\n\n.centerItem {\n    width: 40%;\n    margin-left: 11%;\n}", ""]);



/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _State = __webpack_require__(103);

var _State2 = _interopRequireDefault(_State);

var _Utility = __webpack_require__(104);

var _JSX = __webpack_require__(105);

var _Div = __webpack_require__(106);

var _Div2 = _interopRequireDefault(_Div);

var _Window = __webpack_require__(8);

var _Window2 = _interopRequireDefault(_Window);

__webpack_require__(109);

var _Constants = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libraries.

// State

// Utility

// Components

// Styles.

// Constants


var Builder = function (_Component) {
    _inherits(Builder, _Component);

    function Builder(props) {
        _classCallCheck(this, Builder);

        var _this = _possibleConstructorReturn(this, (Builder.__proto__ || Object.getPrototypeOf(Builder)).call(this, props));

        _this.state = _State2.default;
        return _this;
    }

    _createClass(Builder, [{
        key: "changeMode",
        value: function changeMode(e) {

            // check if mode is copy and any div is selected.
            if ((0, _Utility.anySelected)(this.state)) {
                if (e.currentTarget.innerText === "Copy") {
                    // Then create a copy div
                    (0, _Utility.copyDiv)(this.state);
                }
                if (e.currentTarget.innerText === "Delete") {
                    // Then create a copy div
                    (0, _Utility.deleteDiv)(this.state);
                }
            }
            if (e.currentTarget.innerText === "Save") {
                // Then generate the jsx and with empty state create new component
                var jsx = [this.state].map(_JSX.buildJSX)[0];
                this.props.onSave({
                    trueName: "",
                    name: this.state.name || _Constants.CONSTANTS.component_name_prefix + Math.ceil(Math.random() * 1000),
                    markup: jsx,
                    style: "",
                    state: JSON.stringify(this.state)
                });
            }
            this.setState({
                builderMode: e.currentTarget.innerText
            });
        }
    }, {
        key: "DivonUpdate",
        value: function DivonUpdate(e) {
            this.setState(e.state);
        }
    }, {
        key: "render",
        value: function render() {
            /**
             * when Draw is on - Disable  - Move, Resize, Delete, copy, Save, Edit
             * when Select is on - Enable - Move, Resize, Delete, copy, Save, Edit
             * when Interact is on - 
             * 
             * There are three modes, Draw, select and interact. 
             * 
             * 1. Draw - When in draw mode, rectangles can be created
             * 2. Select - When in select mode, Rectangle can be selected. After selection it can be moved, resized, Deleted, copied, saved
             * 3. Event - Helps to add event interaction
             * 4. Interact - Helps to preview the changes.
             */
            return _react2.default.createElement(
                _Window2.default,
                null,
                _react2.default.createElement(
                    "div",
                    { className: "builder" },
                    _react2.default.createElement(
                        "div",
                        { className: "toolBar" },
                        _react2.default.createElement(
                            "button",
                            { className: this.state.builderMode === "Draw" ? "mode" : "", onClick: this.changeMode.bind(this) },
                            _react2.default.createElement("i", { "class": "fas fa-pen" }),
                            "Draw"
                        ),
                        _react2.default.createElement(
                            "button",
                            { className: this.state.builderMode === "Select" ? "mode" : "", onClick: this.changeMode.bind(this) },
                            _react2.default.createElement("i", { "class": "fas fa-check" }),
                            "Select"
                        ),
                        _react2.default.createElement(
                            "button",
                            { className: this.state.builderMode === "Move" ? "mode" : "", onClick: this.changeMode.bind(this) },
                            _react2.default.createElement("i", { "class": "fas fa-arrows-alt" }),
                            "Move"
                        ),
                        _react2.default.createElement(
                            "button",
                            { className: this.state.builderMode === "Resize" ? "mode" : "", onClick: this.changeMode.bind(this) },
                            _react2.default.createElement("i", { "class": "fas fa-compress-arrows-alt" }),
                            "Resize"
                        ),
                        _react2.default.createElement(
                            "button",
                            { className: this.state.builderMode === "Delete" ? "mode" : "", onClick: this.changeMode.bind(this) },
                            _react2.default.createElement("i", { "class": "fas fa-trash-alt" }),
                            "Delete"
                        ),
                        _react2.default.createElement(
                            "button",
                            { className: this.state.builderMode === "Copy" ? "mode" : "", onClick: this.changeMode.bind(this) },
                            _react2.default.createElement("i", { "class": "fas fa-copy" }),
                            "Copy"
                        ),
                        _react2.default.createElement(
                            "button",
                            { className: this.state.builderMode === "Interact" ? "mode" : "", onClick: this.changeMode.bind(this) },
                            _react2.default.createElement("i", { "class": "fas fa-bolt" }),
                            "Interact"
                        ),
                        _react2.default.createElement(
                            "button",
                            { className: this.state.builderMode === "Save" ? "mode" : "", onClick: this.changeMode.bind(this) },
                            _react2.default.createElement("i", { "class": "fas fa-save" }),
                            "Save"
                        )
                    ),
                    _react2.default.createElement(_Div2.default, { parent: this.state, builderMode: this.state.builderMode, state: this.state, index: 0, key: Math.ceil(Math.random() * 1000),
                        onDrawFinish: this.DivonUpdate.bind(this),
                        onDelete: this.DivonUpdate.bind(this),
                        onResizeFinish: this.DivonUpdate.bind(this),
                        onMoveFinish: this.DivonUpdate.bind(this),
                        onSelection: this.DivonUpdate.bind(this) })
                )
            );
        }
    }]);

    return Builder;
}(_react.Component);

exports.default = Builder;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    "style": {
        "position": "relative",
        "top": "100px",
        "left": "240px",
        "height": 100 + "px",
        "width": 100 + "px",
        "cursor": "pointer",
        "box-sizing": "border-box",
        "resize": "",
        "overflow": "",
        "borderColor": "green",
        "borderWidth": "1px"
    },
    "type": "Div",
    "children": [],
    "mode": "Draw",
    "grabbing": false,
    "origin": false,
    "divId": "div46035",
    "id": "div123",
    "showOptions": true,
    "clientX": 852,
    "clientY": 161,
    "eventReducer": "",
    "events": {
        "onClick": "console.log('onClick success')",
        "onMouseOut": "console.log('mouse out success')"
    },
    "builderMode": "Select"
};

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var selected = "";
function getSelectedDiv(Div) {
    if (Div.selected) {
        selected = Div;
    }
    Div.children.find(getSelectedDiv);
}

var selectedDivParent = "";

function getSelectedDivParent(Div) {
    if (!selectedDivParent) {
        var selectedDiv = Div.children.find(function (div) {
            return div.selected;
        });
        if (selectedDiv) {
            selectedDivParent = Div;
        }
        if (!selectedDiv) {
            Div.children.find(getSelectedDivParent);
        }
    }
}

module.exports = {
    copyDiv: function copyDiv(state) {

        // Find selected DIV
        selected = "";
        state.children.find(getSelectedDiv);
        console.log(selected);

        // Find the selected DIV's parent
        selectedDivParent = "";
        getSelectedDivParent(state);
        console.log(selectedDivParent);

        // Create the copy
        var copy = JSON.parse(JSON.stringify(selected));

        // Move its position 
        copy.style.top = copy.style.top + 20;
        copy.style.left = copy.style.left + 20;

        // Push it to parent
        selectedDivParent.children.push(copy);
    },

    deleteDiv: function deleteDiv(state) {
        // Find selected DIV
        selected = "";
        state.children.find(getSelectedDiv);
        console.log(selected);

        // Find the selected DIV's parent
        selectedDivParent = "";
        getSelectedDivParent(state);
        console.log(selectedDivParent);

        // Find the index of the div to be deleted
        var index = selectedDivParent.children.findIndex(function (div) {
            return div.id === selected.id;
        });

        // Remove it from the parent.
        selectedDivParent.children.splice(index, 1);
    },

    anySelected: function anySelected(state) {
        return JSON.stringify(state).indexOf("selected\":true") !== -1;
    }
};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 
 * @param {Object} item - Layout information that renders the div component.
 * @returns {string} - Returns the JSX string.
 */
function buildJSX(item) {
    var start = "<" + item.type + " builderMode=\"Draw\" parent={" + JSON.stringify(item) + "} state={" + JSON.stringify(item) + "}>";
    var end = "</" + item.type + ">";
    if (item.children === undefined) {
        return start + end;
    }
    return start + "\n    " + (item.children && item.children.map(buildJSX).join("")) + "\n" + end;
}

module.exports = {
    buildJSX: buildJSX
};

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(107);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libraries.

// Styles.

var Div = function (_Component) {
    _inherits(Div, _Component);

    function Div(props) {
        _classCallCheck(this, Div);

        var _this = _possibleConstructorReturn(this, (Div.__proto__ || Object.getPrototypeOf(Div)).call(this, props));

        var state = JSON.parse(JSON.stringify(_this.props.state));

        _this.state = state;
        if (_this.props.builderMode === "Resize" && state.selected) {
            state.style.resize = "both";
            state.style.overflow = "auto";
        } else {
            state.style.resize = "";
            state.style.overflow = "";
        }
        if (_this.props.builderMode === "Select") {
            state.style.cursor = "pointer";
        }
        if (_this.props.builderMode === "Draw") {
            state.style.cursor = "crosshair";
        }
        return _this;
    }

    _createClass(Div, [{
        key: "DivonDrawFinish",
        value: function DivonDrawFinish(e) {
            var state = JSON.parse(JSON.stringify(this.state));

            state.children[e.index] = e.state;

            this.setState(state);
            e.state = state;
            e.index = this.props.index;
            this.props.onDrawFinish ? this.props.onDrawFinish(e) : null;
        }
    }, {
        key: "DivonMoveFinish",
        value: function DivonMoveFinish(e) {
            var state = JSON.parse(JSON.stringify(this.state));

            state.children[e.index] = e.state;

            this.setState(state);
            e.state = state;
            e.index = this.props.index;

            if (true) {
                this.props.onMoveFinish ? this.props.onMoveFinish(e) : null;
            }
        }
    }, {
        key: "DivonResizeFinish",
        value: function DivonResizeFinish(e) {
            var state = JSON.parse(JSON.stringify(this.state));

            state.children[e.index] = e.state;

            this.setState(state);
            e.state = state;
            e.index = this.props.index;

            if (true) {
                this.props.onResizeFinish ? this.props.onResizeFinish(e) : null;
            }
        }
    }, {
        key: "DivonSelection",
        value: function DivonSelection(e) {
            var state = JSON.parse(JSON.stringify(this.state));

            state.children[e.index] = e.state;
            e.state = state;
            e.index = this.props.index;
            this.props.onSelection(e);
        }
    }, {
        key: "DivonDelete",
        value: function DivonDelete(e) {
            var state = JSON.parse(JSON.stringify(this.state));

            state.children.splice(e.index, 1);

            this.setState(state);
            e.state = state;
            e.index = this.props.index;
        }
    }, {
        key: "div123onMouseDown",
        value: function div123onMouseDown(e) {
            if (this.props.builderMode !== "Interact") {
                var create = function create(type, x, y, text) {
                    var item = document.createElement(type);
                    item.style.position = "fixed";
                    item.style.left = x + "px";
                    item.style.top = y + "px";
                    item.style['border-width'] = "1px";
                    item.style['border-color'] = "green";
                    item.style['border-style'] = "solid";
                    item.id = "div" + ~~(Math.random() * 100000);
                    if (text) {
                        item.innerText = text;
                    }
                    return item;
                };

                var state = JSON.parse(JSON.stringify(this.state));

                if (e.button === 0) {
                    if (this.props.builderMode === "Draw") {
                        state.clientX = e.clientX;
                        state.clientY = e.clientY;
                        var div = create("div", e.clientX, e.clientY);
                        var parent = e.target;
                        parent.appendChild(div);

                        state.divId = div.id;
                        state.origin = true;
                    }
                }

                if (this.props.builderMode === "Move" && state.selected) {
                    state.style.cursor = "grabbing";
                    state.grabbing = true;
                }
                if (this.props.builderMode === "Select") {
                    state.selected = !state.selected;
                    state.style.cursor = "pointer";
                    if (state.selected) {
                        state.style.borderColor = "rgb(76, 175, 80)";
                        state.style.borderWidth = "3px";
                    } else {
                        state.style.borderColor = "green";
                        state.style.borderWidth = "1px";
                    }
                }

                delete window.eClientY;
                delete window.eClientX;

                e.stopPropagation();
                console.log("mouseDown");
                this.setState(state);
                e.state = state;
                e.index = this.props.index;
            }
        }
    }, {
        key: "div123onMouseMove",
        value: function div123onMouseMove(e) {
            if (this.props.builderMode !== "Interact") {

                var state = JSON.parse(JSON.stringify(this.state));

                if (this.props.builderMode === "Draw") {
                    if (state.origin) {
                        var div = document.getElementById(state.divId);
                        var rect = div.getBoundingClientRect();
                        div.style.width = e.clientX - rect.left;
                        div.style.height = e.clientY - rect.top;
                    }
                }

                if (state.style.cursor == "grabbing" && state.grabbing && state.selected) {
                    var rect = e.target.getBoundingClientRect();

                    window.eClientY = window.eClientY || e.clientY;
                    window.eClientX = window.eClientX || e.clientX;

                    e.target.style.top = -window.eClientY + e.clientY + rect.top + "px";
                    e.target.style.left = -window.eClientX + e.clientX + rect.left + "px";
                    e.target.style.position = "fixed";

                    window.eClientY = e.clientY;
                    window.eClientX = e.clientX;
                }

                if (this.props.builderMode === "Select" && !this.state.selected && !state.selected) {
                    state.style.borderColor = "dodgerblue";
                    state.style.borderWidth = "3px";
                    this.setState(state);
                }

                e.stopPropagation();
            }
        }
    }, {
        key: "div123onMouseUp",
        value: function div123onMouseUp(e) {
            if (this.props.builderMode !== "Interact") {

                var state = JSON.parse(JSON.stringify(this.state));

                if (this.props.builderMode === "Draw") {
                    if (e.button === 0) {
                        state.origin = false;
                    }
                    var createdDiv = document.getElementById(state.divId);
                    delete state.divId;

                    if (state.clientX == e.clientX && state.clientY == e.clientY) {
                        state.showOptions = !state.showOptions;
                    } else {
                        var coord = document.querySelectorAll('#' + this.state.id)[0].getBoundingClientRect();
                        state.children.push({
                            style: {
                                position: "absolute",
                                top: -coord.top + Number(createdDiv.style.top.split("px")[0] - 3),
                                left: -coord.left + Number(createdDiv.style.left.split("px")[0] - 3),
                                height: createdDiv.style.height,
                                width: createdDiv.style.width,
                                borderWidth: createdDiv.style["border-width"],
                                borderStyle: createdDiv.style["border-style"],
                                borderColor: createdDiv.style["border-color"],
                                resize: "",
                                overflow: "",
                                background: ""
                            },
                            type: "Div",
                            children: [],
                            id: createdDiv.id,
                            mode: "Draw"
                        });
                    }
                    createdDiv.remove();
                }
                if (this.props.builderMode === "Move" && state.selected) {
                    e.target.style.cursor = "pointer";
                    state.grabbing = false;

                    var coord = document.querySelectorAll('#' + this.props.parent.id)[0].getBoundingClientRect();

                    state.style.top = -coord.top + Number(e.currentTarget.style.top.split("px")[0]);
                    state.style.left = -coord.left + Number(e.currentTarget.style.left.split("px")[0]);
                }

                if (this.props.builderMode === "Resize") {
                    state.style.height = e.target.style.height;
                    state.style.width = e.target.style.width;
                }

                e.stopPropagation();
                console.log("mouseUp");

                this.setState(state);
                e.state = state;
                e.index = this.props.index;

                if (this.props.builderMode === 'Draw' && e.button === 0) {
                    this.props.onDrawFinish ? this.props.onDrawFinish(e) : null;
                }

                if (this.props.builderMode === "Move" && state.selected) {
                    this.props.onMoveFinish ? this.props.onMoveFinish(e) : null;
                }

                if (this.props.builderMode === "Resize") {
                    this.props.onResizeFinish ? this.props.onResizeFinish(e) : null;
                }

                if (this.props.builderMode === "Select") {
                    this.props.onSelection ? this.props.onSelection(e) : null;
                }
            }
        }
    }, {
        key: "div123onMouseOut",
        value: function div123onMouseOut() {
            if (this.props.builderMode !== "Interact") {

                var state = JSON.parse(JSON.stringify(this.state));
                if (this.props.builderMode === "Select") {
                    state.style.borderColor = "green";
                    state.style.borderWidth = "1px";
                    this.setState(state);
                }
            }
        }
    }, {
        key: "div123onDrop",
        value: function div123onDrop(e) {
            var state = JSON.parse(JSON.stringify(this.state));
            e.preventDefault();
            e.stopPropagation();
            if (this.props.builderMode === "Draw") {
                var component = components.find(function (component) {
                    return component.name === e.dataTransfer.getData("component-name");
                });
                // get the state of the component

                state.children.push(Object.assign(JSON.parse(component.state), {
                    type: e.dataTransfer.getData("component-name")
                }));
                this.setState(state);
                e.state = state;
                e.index = this.props.index;
                this.props.onDrawFinish ? this.props.onDrawFinish(e) : null;
            }
        }
    }, {
        key: "div123onDragOver",
        value: function div123onDragOver(e) {
            e.preventDefault();
            var state = JSON.parse(JSON.stringify(this.state));
        }

        /**
         * Original
         * 
         * 
         *         return (<div className="Div" style={this.state.style} id={this.state.id} 
                            onMouseUp={this.div123onMouseUp.bind(this)} 
                            onMouseMove={this.div123onMouseMove.bind(this)} 
                            onMouseDown={this.div123onMouseDown.bind(this)}
                            onMouseOut={this.div123onMouseOut.bind(this)}>{this.props.children}
                {this.state.Div.map((item, i) => <Div parent={this.state} builderMode={this.props.builderMode} state={item} key={~~(Math.random() * 10000)} index={i} 
                            onDelete={this.DivonDelete.bind(this)} 
                            onResizeFinish={this.DivonResizeFinish.bind(this)} 
                            onMoveFinish={this.DivonMoveFinish.bind(this)} 
                            onDrawFinish={this.DivonDrawFinish.bind(this)}
                            onSelection={this.DivonSelection.bind(this)}
                ></Div>)}
            </div>)
         * */

    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            if (this.state.type === "Div") {
                return _react2.default.createElement(this.state.type, {
                    className: "Div",
                    style: this.state.style,
                    id: this.state.id,
                    onMouseUp: this.div123onMouseUp.bind(this),
                    onMouseMove: this.div123onMouseMove.bind(this),
                    onMouseDown: this.div123onMouseDown.bind(this),
                    onMouseOut: this.div123onMouseOut.bind(this),
                    onDrop: this.div123onDrop.bind(this),
                    onDragOver: this.div123onDragOver.bind(this)
                }, this.state.children.map(function (child, i) {
                    return _react2.default.createElement(eval(child.type), {
                        parent: _this2.state,
                        builderMode: _this2.props.builderMode,
                        state: child,
                        key: ~~(Math.random() * 10000),
                        index: i,
                        onDelete: _this2.DivonDelete.bind(_this2),
                        onResizeFinish: _this2.DivonResizeFinish.bind(_this2),
                        onMoveFinish: _this2.DivonMoveFinish.bind(_this2),
                        onDrawFinish: _this2.DivonDrawFinish.bind(_this2),
                        onSelection: _this2.DivonSelection.bind(_this2)
                    });
                }));
            }
        }
    }]);

    return Div;
}(_react.Component);

window.Div = Div;

exports.default = Div;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(108);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, ".Div{\n    position: fixed;\n\ttop: 25%;\n    left: 20%;\n    cursor: \"move\";\n}", ""]);



/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(110);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, ".toolBar{\n    width:30%;\n    background: #2C3134;\n    margin:auto;\n    padding: 10px;\n    padding-top: 14px;\n    display: flex;\n    justify-content: space-evenly;\n    position: fixed;\n    z-index: 1;\n    left: 25%;\n}\n\n.toolBar button i{\n    display: block;\n    padding: 5px;\n    z-index: 1;\n    position: relative;\n}\n\n.toolBar button:focus, .toolBar button.mode{\n    color: #fff;\n}\n", ""]);



/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Window = __webpack_require__(8);

var _Window2 = _interopRequireDefault(_Window);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// Libraries.

var Preview = function (_Component) {
    _inherits(Preview, _Component);

    function Preview(props) {
        _classCallCheck(this, Preview);

        var _this = _possibleConstructorReturn(this, (Preview.__proto__ || Object.getPrototypeOf(Preview)).call(this, props));

        _this.state = {
            name: "",
            configs: []
        };
        return _this;
    }

    _createClass(Preview, [{
        key: "render",
        value: function render() {

            // TODO: Should pass the current data. Instead of accessing it from global
            return _react2.default.createElement(
                _Window2.default,
                null,
                _react2.default.createElement("div", { className: "container editor-tab" })
            );
        }
    }]);

    return Preview;
}(_react.Component);

exports.default = Preview;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Window = __webpack_require__(8);

var _Window2 = _interopRequireDefault(_Window);

var _reactCodemirror = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// Libraries.

var Markup = function (_Component) {
    _inherits(Markup, _Component);

    function Markup(props) {
        _classCallCheck(this, Markup);

        var _this = _possibleConstructorReturn(this, (Markup.__proto__ || Object.getPrototypeOf(Markup)).call(this, props));

        _this.state = {
            markup: _this.props.markup
        };

        return _this;
    }

    _createClass(Markup, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var markup = this.state.markup;
            // TODO: Should pass the current data. Instead of accessing it from global
            return _react2.default.createElement(
                _Window2.default,
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'container editor-tab' },
                    _react2.default.createElement(
                        'div',
                        { className: 'editor markup' },
                        _react2.default.createElement(
                            'div',
                            { className: 'title' },
                            'Component Markup'
                        ),
                        _react2.default.createElement(_reactCodemirror.UnControlled, {
                            autoCursor: false,
                            value: markup,
                            options: {
                                lineNumbers: false,
                                mode: "text/javascript",
                                theme: "darcula",
                                indentWithTabs: false,
                                smartIndent: true,
                                lineWrapping: true
                            },
                            onChange: function onChange(editor, data, markup) {
                                _this2.setState({
                                    markup: markup
                                });
                            }
                        })
                    )
                )
            );
        }
    }]);

    return Markup;
}(_react.Component);

exports.default = Markup;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Window = __webpack_require__(8);

var _Window2 = _interopRequireDefault(_Window);

var _reactCodemirror = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// Libraries.

var Style = function (_Component) {
    _inherits(Style, _Component);

    function Style(props) {
        _classCallCheck(this, Style);

        var _this = _possibleConstructorReturn(this, (Style.__proto__ || Object.getPrototypeOf(Style)).call(this, props));

        _this.state = {
            style: _this.props.style
        };

        return _this;
    }

    _createClass(Style, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var style = this.state.style;

            // TODO: Should pass the current data. Instead of accessing it from global
            return _react2.default.createElement(
                _Window2.default,
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'container editor-tab' },
                    _react2.default.createElement(
                        'div',
                        { className: 'editor css' },
                        _react2.default.createElement(
                            'div',
                            { className: 'title' },
                            'Component CSS'
                        ),
                        _react2.default.createElement(_reactCodemirror.UnControlled, {
                            autoCursor: false,
                            value: style,
                            options: {
                                lineNumbers: false,
                                mode: "text/javascript",
                                theme: "darcula",
                                indentWithTabs: false,
                                smartIndent: true,
                                lineWrapping: true
                            },
                            onChange: function onChange(editor, data, style) {
                                _this2.setState({
                                    style: style
                                });
                            }
                        })
                    )
                )
            );
        }
    }]);

    return Style;
}(_react.Component);

exports.default = Style;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Window = __webpack_require__(8);

var _Window2 = _interopRequireDefault(_Window);

var _reactCodemirror = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// Libraries.

var State = function (_Component) {
    _inherits(State, _Component);

    function State(props) {
        _classCallCheck(this, State);

        var _this = _possibleConstructorReturn(this, (State.__proto__ || Object.getPrototypeOf(State)).call(this, props));

        _this.state = {
            state: _this.props.state
        };
        return _this;
    }

    _createClass(State, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var state = this.state.state;
            // TODO: Should pass the current data. Instead of accessing it from global
            return _react2.default.createElement(
                _Window2.default,
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'container editor-tab' },
                    _react2.default.createElement(
                        'div',
                        { className: 'editor state' },
                        _react2.default.createElement(
                            'div',
                            { className: 'title' },
                            'Component State'
                        ),
                        _react2.default.createElement(_reactCodemirror.UnControlled, {
                            autoCursor: false,
                            value: state,
                            options: {
                                lineNumbers: false,
                                mode: "text/javascript",
                                theme: "darcula",
                                indentWithTabs: false,
                                smartIndent: true,
                                lineWrapping: true
                            },
                            onChange: function onChange(editor, data, state) {
                                _this2.setState({
                                    state: state
                                });
                            }
                        })
                    )
                )
            );
        }
    }]);

    return State;
}(_react.Component);

exports.default = State;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Window = __webpack_require__(8);

var _Window2 = _interopRequireDefault(_Window);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// Libraries.

var Composer = function (_Component) {
    _inherits(Composer, _Component);

    function Composer(props) {
        _classCallCheck(this, Composer);

        var _this = _possibleConstructorReturn(this, (Composer.__proto__ || Object.getPrototypeOf(Composer)).call(this, props));

        _this.state = {
            name: "",
            configs: []
        };
        return _this;
    }

    _createClass(Composer, [{
        key: "updateName",
        value: function updateName(e) {
            this.setState({
                name: e.target.value
            });
        }
    }, {
        key: "onComponentChange",
        value: function onComponentChange(e) {
            this.setState({
                component: e.target.value
            });
        }
    }, {
        key: "onStateChange",
        value: function onStateChange(e) {
            this.setState({
                state: e.target.value
            });
        }
    }, {
        key: "addConfig",
        value: function addConfig() {
            var configs = this.state.configs;
            configs.push({
                name: this.state.name,
                component: this.state.component,
                state: this.state.state
            });
            this.setState({
                configs: configs
            });
        }
    }, {
        key: "render",
        value: function render() {

            // TODO: Should pass the current data. Instead of accessing it from global
            return _react2.default.createElement(
                _Window2.default,
                null,
                _react2.default.createElement(
                    "div",
                    { className: "container editor-tab" },
                    _react2.default.createElement(
                        "div",
                        { className: "editor state" },
                        _react2.default.createElement(
                            "div",
                            { className: "title" },
                            "Component Composer"
                        ),
                        _react2.default.createElement(
                            "div",
                            null,
                            _react2.default.createElement(
                                "label",
                                null,
                                "State Name"
                            ),
                            _react2.default.createElement("input", { type: "text",
                                value: this.state.name,
                                onChange: this.updateName.bind(this) }),
                            _react2.default.createElement("br", null),
                            _react2.default.createElement(
                                "label",
                                null,
                                "Component"
                            ),
                            _react2.default.createElement(
                                "select",
                                { onChange: this.onComponentChange.bind(this) },
                                window.components.map(function (component) {
                                    return _react2.default.createElement(
                                        "option",
                                        { value: component.name },
                                        component.name
                                    );
                                })
                            ),
                            _react2.default.createElement(
                                "label",
                                null,
                                "State"
                            ),
                            _react2.default.createElement(
                                "select",
                                { onChange: this.onStateChange.bind(this) },
                                _react2.default.createElement(
                                    "option",
                                    { value: "show" },
                                    "Show"
                                ),
                                _react2.default.createElement(
                                    "option",
                                    { value: "hide" },
                                    "Hide"
                                )
                            )
                        ),
                        _react2.default.createElement(
                            "button",
                            { onClick: this.addConfig.bind(this) },
                            "Add"
                        ),
                        _react2.default.createElement(
                            "div",
                            null,
                            _react2.default.createElement(
                                "ul",
                                null,
                                this.state.configs.map(function (config) {
                                    return _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "label",
                                            null,
                                            "State Name"
                                        ),
                                        _react2.default.createElement("input", { type: "text",
                                            value: config.name }),
                                        _react2.default.createElement("br", null),
                                        _react2.default.createElement(
                                            "label",
                                            null,
                                            "Component"
                                        ),
                                        _react2.default.createElement("input", { type: "text",
                                            value: config.component }),
                                        _react2.default.createElement(
                                            "label",
                                            null,
                                            "State"
                                        ),
                                        _react2.default.createElement("input", { type: "text",
                                            value: config.state })
                                    );
                                })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Composer;
}(_react.Component);

exports.default = Composer;

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(0);

var _reactflow = __webpack_require__(128);

var _reactflow2 = _interopRequireDefault(_reactflow);

__webpack_require__(123);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialNodes = [{ id: '1', position: { x: 0, y: 0 }, data: { label: '1' } }, { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } }];

var initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

function Flow() {
  var _useNodesState = (0, _reactflow.useNodesState)(initialNodes),
      _useNodesState2 = _slicedToArray(_useNodesState, 3),
      nodes = _useNodesState2[0],
      setNodes = _useNodesState2[1],
      onNodesChange = _useNodesState2[2];

  var _useEdgesState = (0, _reactflow.useEdgesState)(initialEdges),
      _useEdgesState2 = _slicedToArray(_useEdgesState, 3),
      edges = _useEdgesState2[0],
      setEdges = _useEdgesState2[1],
      onEdgesChange = _useEdgesState2[2];

  var onConnect = (0, _react.useCallback)(function (params) {
    return setEdges(function (eds) {
      return (0, _reactflow.addEdge)(params, eds);
    });
  }, [setEdges]);

  return React.createElement(
    _reactflow2.default,
    {
      nodes: nodes,
      edges: edges,
      onNodesChange: onNodesChange,
      onEdgesChange: onEdgesChange,
      onConnect: onConnect
    },
    React.createElement(_reactflow.MiniMap, null),
    React.createElement(_reactflow.Controls, null),
    React.createElement(_reactflow.Background, null)
  );
}

exports.default = Flow;

/***/ }),
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.convertToReact = convertToReact;
exports.convertToReactRedux = convertToReactRedux;

var _markup = __webpack_require__(25);

var _reducers = __webpack_require__(26);

// Elements to  react component.
function convertToReact(component) {

    component.events.forEach(function (event) {
        event.id = event.id.replace("-", "");
    });

    /**
     * Code generation for markup
     * 
     * Markup is edited in three phases.
     * 1. Add props - This function changes markup to include children - helps in composing bigger components. 
     *  For example, lets say an accordion component is created, its behaviour includes expanding contents and
     *  collapsing contents where content could be valid html tags, other components. An easy way to create such 
     *  separated concerns in behaviour is embedding children.
     * 
     * 2. Add Children config - This helps to override child config state from parent and render list of children.
     * 
     * 3. Add events - This helps to bind event listenes to markup 
     */

    var propsInMarkup = (0, _markup.addChildren)(component);
    var childrenMarkup = (0, _markup.addChildrenConfig)(propsInMarkup, component);
    var componentEventedMarkup = (0, _markup.addEvents)(childrenMarkup, component.events, component);

    /**
     * Code generation for reducers
     * 
     * Reducer function are created in a single phase.
     * 
     * getReducers takes a component and returns reducer functions based on following rules.
     * 1. Generation of function name - It appends event id with event name 
     * 2. Generation of function definition
     *      1. Generation of a new state - Creates a new state with help of json.strigify and parse
     *      2. Generation of reducer logic - event reducer is appeneded here. 
     *      3. Generation of publishable event - It also publishes events based on the event type.
     */
    var reducers = (0, _reducers.getReducers)(component);

    var ReactComponent = "\nclass " + component.name + " extends Component {\n\n    constructor(props) {\n        super(props);\n        this.state = this.props.state || " + component.state + ";\n\n        // Generate css as a separate file on download\n        \n        var style = document.createElement('style');\n        style.innerHTML = `" + component.style + "`;\n        style.type = 'text/css';\n        document.getElementsByTagName('head')[0].appendChild(style);\n    }\n\n    " + reducers + "\n\n    render() {\n        return (" + componentEventedMarkup + ")\n    }\n}\n";
    return ReactComponent;
}

function convertToReactRedux(component) {
    // For every publishable event
}

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.updateEvent = updateEvent;
exports.updateConfig = updateConfig;
exports.saveElement = saveElement;
exports.updateSelectedComponent = updateSelectedComponent;

var _Storage = __webpack_require__(9);

var _findFolders = __webpack_require__(28);

var _Runtime = __webpack_require__(13);

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
    var newElement = void 0;

    // Check if element exist.
    var elementExist = components.find(function (component) {
        return component.name === element.name;
    }) || components.find(function (component) {
        return component.name === element.trueName;
    });
    var selectedComponent = components.find(function (component) {
        return component.name === _this2.state.selectedComponent.name;
    });
    var selectedIndex = components.findIndex(function (component) {
        return component.name === _this2.state.selectedComponent.name;
    });
    if (elementExist) {

        if ((0, _Runtime.componentRecursive)(element)) {
            // Edit the config
            var config = JSON.parse(selectedComponent.config);
            config[element.name] = config[element.name] || {};
            config[element.name].override = true;
            selectedComponent.config = JSON.stringify(config);

            // Edit the state.
            var state = JSON.parse(element.state);
            state[element.name] = state[element.name] || [];
            element.state = JSON.stringify(state);
        }

        // Find the element.
        var elementUnderEdit = selectedComponent;

        // Merge.
        elementUnderEdit = Object.assign(elementUnderEdit, element);

        // Push it to original list.
        components[selectedIndex] = elementUnderEdit;
    } else {
        newElement = {
            name: element.name,
            markup: element.markup,
            events: [],
            state: element.state || "{}",
            style: element.style,
            children: [],
            id: Math.ceil(Math.random() * 1000),
            config: "{}"
        };

        delete newElement.trueName;
        components.push(newElement);
        selectedIndex = components.length - 1;

        // Find noFolder
        this.state.folders[0].contents.push(element.name);
        // Push new component into contents.
    }

    if (element.trueName !== element.name && element.trueName !== "") {
        // rename the folder
        // Find the content from folder
        var parent = (0, _findFolders.findParent)(element.trueName, this.state.folders[0]);
        var index = parent.contents.findIndex(function (content) {
            return content === element.trueName;
        });
        parent.contents.splice(index, 1, element.name);
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
        showEditor: false,
        folders: this.state.folders
    });

    (0, _Storage.writeData)("folders", this.state.folders);
    (0, _Storage.writeData)("ui-editor", components);
}

function updateSelectedComponent(componentName, e) {

    // Find the element from state that matches the currently selected element.
    var selectedComponent = components.find(function (component) {
        return component.name === componentName;
    });

    // Update the state with selectedElement.
    this.setState({
        selectedComponent: selectedComponent
    });
}

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.onDeleteComponent = onDeleteComponent;
exports.onExtendComponent = onExtendComponent;
exports.onDeleteFolder = onDeleteFolder;

var _Storage = __webpack_require__(9);

var _findFolders = __webpack_require__(28);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function onDeleteComponent(event) {

    var componentName = this.state.selectedComponent.name;
    var folder = (0, _findFolders.findParent)(componentName, this.state.folders[0]);

    var contentIndex = folder.contents.findIndex(function (content) {
        return content === componentName;
    });
    folder.contents.splice(contentIndex, 1);
    var components = Array.from(this.state.components);

    var index = components.findIndex(function (component) {
        return component.name === componentName;
    });

    components.splice(index, 1);

    this.setState({
        components: components,
        folders: this.state.folders
    });

    (0, _Storage.writeData)("ui-editor", components);
    (0, _Storage.writeData)("folders", this.state.folders);
}

function onExtendComponent() {

    var component = JSON.parse(JSON.stringify(this.state.selectedComponent));
    var folder = (0, _findFolders.findParent)(component.name, this.state.folders[0]);

    component.name = component.name + "_copy";

    folder.contents.push(component.name);

    components.push(component);

    this.setState({
        components: components,
        folders: this.state.folders
    });

    (0, _Storage.writeData)("ui-editor", components);
    (0, _Storage.writeData)("folders", this.state.folders);
}

function onDeleteFolder(TYPE, folderName) {
    var _noFolder$contents;

    var folders = Array.from(this.state.folders);
    var noFolder = folders[0];

    /** Delete the folder. While deleting only the folder, move its contents to parent folder */

    var parentFolder = (0, _findFolders.findParentFolder)(folderName, folders[0]);

    var folderToDelete = (0, _findFolders.findFolder)(folderName, folders[0]);

    switch (TYPE) {
        case "FOLDER_RETAIN_CONTENTS":
            (_noFolder$contents = noFolder.contents).push.apply(_noFolder$contents, _toConsumableArray(folderToDelete.contents));
            var deleteIndex = parentFolder.contents.findIndex(function (content) {
                return (typeof content === "undefined" ? "undefined" : _typeof(content)) === "object" && content.name === folderName;
            });
            parentFolder.contents.splice(deleteIndex, 1);
            this.updateFolders(folders);
            break;

        case "FOLDER_AND_CONTENTS":
            break;

        case "ENTIRE_FOLDER":

            break;
    }
}

/***/ }),
/* 128 */,
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(43);

var _Components = __webpack_require__(46);

var _Components2 = _interopRequireDefault(_Components);

var _Events = __webpack_require__(65);

var _Events2 = _interopRequireDefault(_Events);

var _Assets = __webpack_require__(85);

var _Assets2 = _interopRequireDefault(_Assets);

var _History = __webpack_require__(93);

var _History2 = _interopRequireDefault(_History);

var _DynamicComponent = __webpack_require__(99);

var _DynamicComponent2 = _interopRequireDefault(_DynamicComponent);

var _Builder = __webpack_require__(102);

var _Builder2 = _interopRequireDefault(_Builder);

var _Preview = __webpack_require__(111);

var _Preview2 = _interopRequireDefault(_Preview);

var _Markup = __webpack_require__(112);

var _Markup2 = _interopRequireDefault(_Markup);

var _Style = __webpack_require__(113);

var _Style2 = _interopRequireDefault(_Style);

var _State = __webpack_require__(114);

var _State2 = _interopRequireDefault(_State);

var _Composer = __webpack_require__(115);

var _Composer2 = _interopRequireDefault(_Composer);

var _Flow = __webpack_require__(116);

var _Flow2 = _interopRequireDefault(_Flow);

var _export = __webpack_require__(125);

var _Runtime = __webpack_require__(13);

var _Reducer = __webpack_require__(126);

var _Storage = __webpack_require__(9);

var _Events3 = __webpack_require__(127);

var _Constants = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libraries.

// Dependencies.


// Components.

// Utility components.

// Reducers.


// Utils


// Constants


var Index = function (_Component) {
    _inherits(Index, _Component);

    function Index(props) {
        _classCallCheck(this, Index);

        var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

        var components = (0, _Storage.readData)("ui-editor");
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
            folders: (0, _Storage.readData)("folders"),
            selectedTab: "Events"
        };
        _this.updateConfig = _Reducer.updateConfig.bind(_this);
        _this.updateEvent = _Reducer.updateEvent.bind(_this);
        _this.saveElement = _Reducer.saveElement.bind(_this);
        _this.updateSelectedComponent = _Reducer.updateSelectedComponent.bind(_this);
        document.onkeydown = function keydown(e) {
            if (e.altKey && e.keyCode == 69) {
                // Alt + E
                // Open/close editor if any component is selected
                this.setState({
                    showEditor: !this.state.showEditor
                });
            }
        }.bind(_this);

        window.refreshComponents = _this.refreshComponents.bind(_this);
        return _this;
    }

    _createClass(Index, [{
        key: "refreshComponents",
        value: function refreshComponents() {
            this.setState({
                components: window.components
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
        key: "exportReact",
        value: function exportReact(e) {
            window.visited = {};
            var nestedComponents = (0, _Runtime.getNestedComponents)(this.state.selectedComponent);
            // nested components contain duplicates. we need to remove it
            var uniqueComponents = {};
            nestedComponents.forEach(function (component) {
                if (!uniqueComponents[component.name]) {
                    uniqueComponents[component.name] = component;
                }
            });
            console.log(Object.values(uniqueComponents).map(_export.convertToReact).join("\n\n"));
        }
    }, {
        key: "exportReactRedux",
        value: function exportReactRedux(e) {
            window.visited = {};
            var nestedComponents = (0, _Runtime.getNestedComponents)(this.state.selectedComponent);
            // nested components contain duplicates. we need to remove it
            var uniqueComponents = {};
            nestedComponents.forEach(function (component) {
                if (!uniqueComponents[component.name]) {
                    uniqueComponents[component.name] = component;
                }
            });
            console.log(Object.values(uniqueComponents).map(_export.convertToReactRedux).join("\n\n"));
        }
    }, {
        key: "onShowContextMenu",
        value: function onShowContextMenu(e) {

            if (e.target.classList.contains("component") || e.target.classList.contains("componentName")) {
                // check if it is a component.
                this.state.contextMenuChildren = _react2.default.createElement(
                    "ul",
                    { className: "contextMenuOptions" },
                    _react2.default.createElement(
                        "li",
                        { onClick: _Events3.onDeleteComponent.bind(this) },
                        _react2.default.createElement("i", { className: "fas fa-trash" }),
                        "Delete"
                    ),
                    _react2.default.createElement(
                        "li",
                        { onClick: this.exportReact.bind(this) },
                        _react2.default.createElement("i", { className: "fas fa-file-export" }),
                        "Export"
                    ),
                    _react2.default.createElement(
                        "li",
                        { onClick: this.exportReactRedux.bind(this) },
                        _react2.default.createElement("i", { className: "fas fa-copy" }),
                        "Export ReactJS + Redux"
                    ),
                    _react2.default.createElement(
                        "li",
                        { onClick: _Events3.onExtendComponent.bind(this) },
                        _react2.default.createElement("i", { className: "fas fa-copy" }),
                        "Extend"
                    )
                );
            } else if (e.target.classList.contains("fa-folder-open") || e.target.classList.contains("fa-folder")) {
                // check if it is a folder.
                var folderName = e.target.parentElement.getAttribute("data-folder-name");

                this.state.contextMenuChildren = _react2.default.createElement(
                    "ul",
                    { className: "contextMenuOptions" },
                    _react2.default.createElement(
                        "li",
                        { onClick: _Events3.onDeleteFolder.bind(this, "FOLDER_RETAIN_CONTENTS", folderName) },
                        "Delete folder and retain contents"
                    ),
                    _react2.default.createElement(
                        "li",
                        { onClick: _Events3.onDeleteFolder.bind(this, "RETAIN_FOLDER_DELETE_CONTENTS", folderName) },
                        "Keep Folder and delete contents"
                    ),
                    _react2.default.createElement(
                        "li",
                        { onClick: _Events3.onDeleteFolder.bind(this, "ENTIRE_FOLDER", folderName) },
                        "Delete Folder and contents"
                    ),
                    _react2.default.createElement(
                        "li",
                        { onClick: this.openExportTab.bind(this) },
                        "Export Folder"
                    )
                );
            }

            this.setState({
                showContextMenu: true,
                contextMenuPosition: {
                    top: e.clientY + "px",
                    left: e.clientX + "px"
                }
            });

            e.preventDefault();
        }
    }, {
        key: "hideContextMenu",
        value: function hideContextMenu() {
            if (this.state.showContextMenu) {
                this.setState({
                    showContextMenu: false
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            var selectedComponent = this.state.selectedComponent || this.state.component;
            var randomKey = Math.ceil(Math.random() * 1000);
            window.components.forEach(_Runtime.initialiseComponents);
            return _react2.default.createElement(
                "div",
                { onContextMenu: this.onShowContextMenu.bind(this), onClick: this.hideContextMenu.bind(this) },
                _react2.default.createElement(_Flow2.default, null),
                _react2.default.createElement(_Preview2.default, null),
                _react2.default.createElement(_Markup2.default, { markup: selectedComponent.markup, key: randomKey }),
                _react2.default.createElement(_Style2.default, { style: selectedComponent.style, key: randomKey }),
                _react2.default.createElement(_State2.default, { state: selectedComponent.state, key: randomKey }),
                _react2.default.createElement(_Composer2.default, { state: selectedComponent.state }),
                _react2.default.createElement(_Components2.default, {
                    components: this.state.components,
                    folders: this.state.folders,
                    selectedComponent: this.state.selectedComponent,
                    title: "Components",
                    key: randomKey,

                    onOpenEditor: this.openEditor.bind(this),
                    onSelection: this.updateSelectedComponent,
                    onFoldersUpdate: this.updateFolders.bind(this)
                }),
                _react2.default.createElement(_Builder2.default, { onSave: this.saveElement.bind(this) }),
                _react2.default.createElement(_DynamicComponent2.default, { onSave: this.props.onSave, key: randomKey, component: selectedComponent }),
                _react2.default.createElement(_Events2.default, {
                    key: randomKey,
                    component: selectedComponent,
                    selectedTag: this.state.selectedTag,
                    components: this.state.components,
                    onEventsUpdate: this.updateEvent,
                    onConfigUpdate: this.updateConfig,
                    title: "Events"
                }),
                _react2.default.createElement(_History2.default, { title: "History" }),
                _react2.default.createElement(_Assets2.default, { title: "Assets" })
            );
        }
    }]);

    return Index;
}(_react.Component);

console.log("Source code https://github.com/imvetri/ui-editor");
_reactDom2.default.render(_react2.default.createElement(Index, null), document.getElementById("index"));

/***/ }),
/* 130 */,
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var noop = {value: () => {}};

function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || (t in _) || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}

function Dispatch(_) {
  this._ = _;
}

function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return {type: t, name: name};
  });
}

Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._,
        T = parseTypenames(typename + "", _),
        t,
        i = -1,
        n = T.length;

    // If no callback was specified, return the callback of the given type and name.
    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      return;
    }

    // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
      else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
    }

    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _) copy[t] = _[t].slice();
    return new Dispatch(copy);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};

function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}

function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({name: name, value: callback});
  return type;
}

/* harmony default export */ __webpack_exports__["a"] = (dispatch);


/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/d3-dispatch/src/dispatch.js
var src_dispatch = __webpack_require__(131);

// EXTERNAL MODULE: ./node_modules/d3-selection/src/select.js
var src_select = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/d3-selection/src/pointer.js + 1 modules
var pointer = __webpack_require__(133);

// EXTERNAL MODULE: ./node_modules/d3-drag/src/nodrag.js
var nodrag = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/d3-drag/src/noevent.js
var noevent = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/d3-drag/src/constant.js
/* harmony default export */ var constant = (x => () => x);

// CONCATENATED MODULE: ./node_modules/d3-drag/src/event.js
function DragEvent(type, {
  sourceEvent,
  subject,
  target,
  identifier,
  active,
  x, y, dx, dy,
  dispatch
}) {
  Object.defineProperties(this, {
    type: {value: type, enumerable: true, configurable: true},
    sourceEvent: {value: sourceEvent, enumerable: true, configurable: true},
    subject: {value: subject, enumerable: true, configurable: true},
    target: {value: target, enumerable: true, configurable: true},
    identifier: {value: identifier, enumerable: true, configurable: true},
    active: {value: active, enumerable: true, configurable: true},
    x: {value: x, enumerable: true, configurable: true},
    y: {value: y, enumerable: true, configurable: true},
    dx: {value: dx, enumerable: true, configurable: true},
    dy: {value: dy, enumerable: true, configurable: true},
    _: {value: dispatch}
  });
}

DragEvent.prototype.on = function() {
  var value = this._.on.apply(this._, arguments);
  return value === this._ ? this : value;
};

// CONCATENATED MODULE: ./node_modules/d3-drag/src/drag.js







// Ignore right-click, since that should open the context menu.
function defaultFilter(event) {
  return !event.ctrlKey && !event.button;
}

function defaultContainer() {
  return this.parentNode;
}

function defaultSubject(event, d) {
  return d == null ? {x: event.x, y: event.y} : d;
}

function defaultTouchable() {
  return navigator.maxTouchPoints || ("ontouchstart" in this);
}

/* harmony default export */ var src_drag = __webpack_exports__["a"] = (function() {
  var filter = defaultFilter,
      container = defaultContainer,
      subject = defaultSubject,
      touchable = defaultTouchable,
      gestures = {},
      listeners = Object(src_dispatch["a" /* default */])("start", "drag", "end"),
      active = 0,
      mousedownx,
      mousedowny,
      mousemoving,
      touchending,
      clickDistance2 = 0;

  function drag(selection) {
    selection
        .on("mousedown.drag", mousedowned)
      .filter(touchable)
        .on("touchstart.drag", touchstarted)
        .on("touchmove.drag", touchmoved, noevent["b" /* nonpassive */])
        .on("touchend.drag touchcancel.drag", touchended)
        .style("touch-action", "none")
        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }

  function mousedowned(event, d) {
    if (touchending || !filter.call(this, event, d)) return;
    var gesture = beforestart(this, container.call(this, event, d), event, d, "mouse");
    if (!gesture) return;
    Object(src_select["a" /* default */])(event.view)
      .on("mousemove.drag", mousemoved, noevent["c" /* nonpassivecapture */])
      .on("mouseup.drag", mouseupped, noevent["c" /* nonpassivecapture */]);
    Object(nodrag["a" /* default */])(event.view);
    Object(noevent["d" /* nopropagation */])(event);
    mousemoving = false;
    mousedownx = event.clientX;
    mousedowny = event.clientY;
    gesture("start", event);
  }

  function mousemoved(event) {
    Object(noevent["a" /* default */])(event);
    if (!mousemoving) {
      var dx = event.clientX - mousedownx, dy = event.clientY - mousedowny;
      mousemoving = dx * dx + dy * dy > clickDistance2;
    }
    gestures.mouse("drag", event);
  }

  function mouseupped(event) {
    Object(src_select["a" /* default */])(event.view).on("mousemove.drag mouseup.drag", null);
    Object(nodrag["b" /* yesdrag */])(event.view, mousemoving);
    Object(noevent["a" /* default */])(event);
    gestures.mouse("end", event);
  }

  function touchstarted(event, d) {
    if (!filter.call(this, event, d)) return;
    var touches = event.changedTouches,
        c = container.call(this, event, d),
        n = touches.length, i, gesture;

    for (i = 0; i < n; ++i) {
      if (gesture = beforestart(this, c, event, d, touches[i].identifier, touches[i])) {
        Object(noevent["d" /* nopropagation */])(event);
        gesture("start", event, touches[i]);
      }
    }
  }

  function touchmoved(event) {
    var touches = event.changedTouches,
        n = touches.length, i, gesture;

    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        Object(noevent["a" /* default */])(event);
        gesture("drag", event, touches[i]);
      }
    }
  }

  function touchended(event) {
    var touches = event.changedTouches,
        n = touches.length, i, gesture;

    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function() { touchending = null; }, 500); // Ghost clicks are delayed!
    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        Object(noevent["d" /* nopropagation */])(event);
        gesture("end", event, touches[i]);
      }
    }
  }

  function beforestart(that, container, event, d, identifier, touch) {
    var dispatch = listeners.copy(),
        p = Object(pointer["a" /* default */])(touch || event, container), dx, dy,
        s;

    if ((s = subject.call(that, new DragEvent("beforestart", {
        sourceEvent: event,
        target: drag,
        identifier,
        active,
        x: p[0],
        y: p[1],
        dx: 0,
        dy: 0,
        dispatch
      }), d)) == null) return;

    dx = s.x - p[0] || 0;
    dy = s.y - p[1] || 0;

    return function gesture(type, event, touch) {
      var p0 = p, n;
      switch (type) {
        case "start": gestures[identifier] = gesture, n = active++; break;
        case "end": delete gestures[identifier], --active; // falls through
        case "drag": p = Object(pointer["a" /* default */])(touch || event, container), n = active; break;
      }
      dispatch.call(
        type,
        that,
        new DragEvent(type, {
          sourceEvent: event,
          subject: s,
          target: drag,
          identifier,
          active: n,
          x: p[0] + dx,
          y: p[1] + dy,
          dx: p[0] - p0[0],
          dy: p[1] - p0[1],
          dispatch
        }),
        d
      );
    };
  }

  drag.filter = function(_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : constant(!!_), drag) : filter;
  };

  drag.container = function(_) {
    return arguments.length ? (container = typeof _ === "function" ? _ : constant(_), drag) : container;
  };

  drag.subject = function(_) {
    return arguments.length ? (subject = typeof _ === "function" ? _ : constant(_), drag) : subject;
  };

  drag.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : constant(!!_), drag) : touchable;
  };

  drag.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? drag : value;
  };

  drag.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, drag) : Math.sqrt(clickDistance2);
  };

  return drag;
});


/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/d3-selection/src/sourceEvent.js
/* harmony default export */ var sourceEvent = (function(event) {
  let sourceEvent;
  while (sourceEvent = event.sourceEvent) event = sourceEvent;
  return event;
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/pointer.js


/* harmony default export */ var pointer = __webpack_exports__["a"] = (function(event, node) {
  event = sourceEvent(event);
  if (node === undefined) node = event.currentTarget;
  if (node) {
    var svg = node.ownerSVGElement || node;
    if (svg.createSVGPoint) {
      var point = svg.createSVGPoint();
      point.x = event.clientX, point.y = event.clientY;
      point = point.matrixTransform(node.getScreenCTM().inverse());
      return [point.x, point.y];
    }
    if (node.getBoundingClientRect) {
      var rect = node.getBoundingClientRect();
      return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
    }
  }
  return [event.pageX, event.pageY];
});


/***/ })
]]);