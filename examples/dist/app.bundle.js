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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (t, n) {
  "object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? n(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (n),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : n(t.d3 = {});
}(undefined, function (t) {
  "use strict";
  var r = "http://www.w3.org/1999/xhtml",
      i = { svg: "http://www.w3.org/2000/svg", xhtml: r, xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" };function o(t) {
    var n = t += "",
        e = n.indexOf(":");return 0 <= e && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), i.hasOwnProperty(n) ? { space: i[n], local: t } : t;
  }function u(t) {
    var n = o(t);return (n.local ? function (t) {
      return function () {
        return this.ownerDocument.createElementNS(t.space, t.local);
      };
    } : function (e) {
      return function () {
        var t = this.ownerDocument,
            n = this.namespaceURI;return n === r && t.documentElement.namespaceURI === r ? t.createElement(e) : t.createElementNS(n, e);
      };
    })(n);
  }function n() {}function f(t) {
    return null == t ? n : function () {
      return this.querySelector(t);
    };
  }function h() {
    return [];
  }var e = function e(t) {
    return function () {
      return this.matches(t);
    };
  };if ("undefined" != typeof document) {
    var s = document.documentElement;if (!s.matches) {
      var a = s.webkitMatchesSelector || s.msMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector;e = function e(t) {
        return function () {
          return a.call(this, t);
        };
      };
    }
  }var l = e;function c(t) {
    return new Array(t.length);
  }function v(t, n) {
    this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
  }v.prototype = { constructor: v, appendChild: function appendChild(t) {
      return this._parent.insertBefore(t, this._next);
    }, insertBefore: function insertBefore(t, n) {
      return this._parent.insertBefore(t, n);
    }, querySelector: function querySelector(t) {
      return this._parent.querySelector(t);
    }, querySelectorAll: function querySelectorAll(t) {
      return this._parent.querySelectorAll(t);
    } };var d = "$";function x(t, n, e, r, i, o) {
    for (var u, s = 0, a = n.length, c = o.length; s < c; ++s) {
      (u = n[s]) ? (u.__data__ = o[s], r[s] = u) : e[s] = new v(t, o[s]);
    }for (; s < a; ++s) {
      (u = n[s]) && (i[s] = u);
    }
  }function b(t, n, e, r, i, o, u) {
    var s,
        a,
        c,
        l = {},
        f = n.length,
        h = o.length,
        p = new Array(f);for (s = 0; s < f; ++s) {
      (a = n[s]) && (p[s] = c = d + u.call(a, a.__data__, s, n), c in l ? i[s] = a : l[c] = a);
    }for (s = 0; s < h; ++s) {
      (a = l[c = d + u.call(t, o[s], s, o)]) ? ((r[s] = a).__data__ = o[s], l[c] = null) : e[s] = new v(t, o[s]);
    }for (s = 0; s < f; ++s) {
      (a = n[s]) && l[p[s]] === a && (i[s] = a);
    }
  }function p(t, n) {
    return t < n ? -1 : n < t ? 1 : n <= t ? 0 : NaN;
  }function y(t) {
    return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
  }function m(t) {
    return t.trim().split(/^|\s+/);
  }function _(t) {
    return t.classList || new g(t);
  }function g(t) {
    this._node = t, this._names = m(t.getAttribute("class") || "");
  }function w(t, n) {
    for (var e = _(t), r = -1, i = n.length; ++r < i;) {
      e.add(n[r]);
    }
  }function A(t, n) {
    for (var e = _(t), r = -1, i = n.length; ++r < i;) {
      e.remove(n[r]);
    }
  }function E() {
    this.textContent = "";
  }function S() {
    this.innerHTML = "";
  }function C() {
    this.nextSibling && this.parentNode.appendChild(this);
  }function N() {
    this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }function T() {
    return null;
  }function k() {
    var t = this.parentNode;t && t.removeChild(this);
  }function O() {
    return this.parentNode.insertBefore(this.cloneNode(!1), this.nextSibling);
  }function M() {
    return this.parentNode.insertBefore(this.cloneNode(!0), this.nextSibling);
  }g.prototype = { add: function add(t) {
      this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
    }, remove: function remove(t) {
      var n = this._names.indexOf(t);0 <= n && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
    }, contains: function contains(t) {
      return 0 <= this._names.indexOf(t);
    } };var P = {};"undefined" != typeof document && ("onmouseenter" in document.documentElement || (P = { mouseenter: "mouseover", mouseleave: "mouseout" }));function j(e, t, n) {
    return e = q(e, t, n), function (t) {
      var n = t.relatedTarget;n && (n === this || 8 & n.compareDocumentPosition(this)) || e.call(this, t);
    };
  }function q(n, e, r) {
    return function (t) {
      try {
        n.call(this, this.__data__, e, r);
      } finally {}
    };
  }function L(o) {
    return function () {
      var t = this.__on;if (t) {
        for (var n, e = 0, r = -1, i = t.length; e < i; ++e) {
          n = t[e], o.type && n.type !== o.type || n.name !== o.name ? t[++r] = n : this.removeEventListener(n.type, n.listener, n.capture);
        }++r ? t.length = r : delete this.__on;
      }
    };
  }function R(a, c, l) {
    var f = P.hasOwnProperty(a.type) ? j : q;return function (t, n, e) {
      var r,
          i = this.__on,
          o = f(c, n, e);if (i) for (var u = 0, s = i.length; u < s; ++u) {
        if ((r = i[u]).type === a.type && r.name === a.name) return this.removeEventListener(r.type, r.listener, r.capture), this.addEventListener(r.type, r.listener = o, r.capture = l), void (r.value = c);
      }this.addEventListener(a.type, o, l), r = { type: a.type, name: a.name, value: c, listener: o, capture: l }, i ? i.push(r) : this.__on = [r];
    };
  }function D(t, n, e) {
    var r = y(t),
        i = r.CustomEvent;"function" == typeof i ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
  }var B = [null];function z(t, n) {
    this._groups = t, this._parents = n;
  }z.prototype = function () {
    return new z([[document.documentElement]], B);
  }.prototype = { constructor: z, select: function select(t) {
      "function" != typeof t && (t = f(t));for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i) {
        for (var o, u, s = n[i], a = s.length, c = r[i] = new Array(a), l = 0; l < a; ++l) {
          (o = s[l]) && (u = t.call(o, o.__data__, l, s)) && ("__data__" in o && (u.__data__ = o.__data__), c[l] = u);
        }
      }return new z(r, this._parents);
    }, selectAll: function selectAll(t) {
      var n;"function" != typeof t && (t = null == (n = t) ? h : function () {
        return this.querySelectorAll(n);
      });for (var e = this._groups, r = e.length, i = [], o = [], u = 0; u < r; ++u) {
        for (var s, a = e[u], c = a.length, l = 0; l < c; ++l) {
          (s = a[l]) && (i.push(t.call(s, s.__data__, l, a)), o.push(s));
        }
      }return new z(i, o);
    }, filter: function filter(t) {
      "function" != typeof t && (t = l(t));for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i) {
        for (var o, u = n[i], s = u.length, a = r[i] = [], c = 0; c < s; ++c) {
          (o = u[c]) && t.call(o, o.__data__, c, u) && a.push(o);
        }
      }return new z(r, this._parents);
    }, data: function data(t, n) {
      if (!t) return v = new Array(this.size()), l = -1, this.each(function (t) {
        v[++l] = t;
      }), v;var e,
          r = n ? b : x,
          i = this._parents,
          o = this._groups;"function" != typeof t && (e = t, t = function t() {
        return e;
      });for (var u = o.length, s = new Array(u), a = new Array(u), c = new Array(u), l = 0; l < u; ++l) {
        var f = i[l],
            h = o[l],
            p = h.length,
            v = t.call(f, f && f.__data__, l, i),
            d = v.length,
            y = a[l] = new Array(d),
            m = s[l] = new Array(d);r(f, h, y, m, c[l] = new Array(p), v, n);for (var _, g, w = 0, A = 0; w < d; ++w) {
          if (_ = y[w]) {
            for (A <= w && (A = w + 1); !(g = m[A]) && ++A < d;) {}_._next = g || null;
          }
        }
      }return (s = new z(s, i))._enter = a, s._exit = c, s;
    }, enter: function enter() {
      return new z(this._enter || this._groups.map(c), this._parents);
    }, exit: function exit() {
      return new z(this._exit || this._groups.map(c), this._parents);
    }, merge: function merge(t) {
      for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), u = new Array(r), s = 0; s < o; ++s) {
        for (var a, c = n[s], l = e[s], f = c.length, h = u[s] = new Array(f), p = 0; p < f; ++p) {
          (a = c[p] || l[p]) && (h[p] = a);
        }
      }for (; s < r; ++s) {
        u[s] = n[s];
      }return new z(u, this._parents);
    }, order: function order() {
      for (var t = this._groups, n = -1, e = t.length; ++n < e;) {
        for (var r, i = t[n], o = i.length - 1, u = i[o]; 0 <= --o;) {
          (r = i[o]) && (u && u !== r.nextSibling && u.parentNode.insertBefore(r, u), u = r);
        }
      }return this;
    }, sort: function sort(e) {
      function t(t, n) {
        return t && n ? e(t.__data__, n.__data__) : !t - !n;
      }e || (e = p);for (var n = this._groups, r = n.length, i = new Array(r), o = 0; o < r; ++o) {
        for (var u, s = n[o], a = s.length, c = i[o] = new Array(a), l = 0; l < a; ++l) {
          (u = s[l]) && (c[l] = u);
        }c.sort(t);
      }return new z(i, this._parents).order();
    }, call: function call() {
      var t = arguments[0];return arguments[0] = this, t.apply(null, arguments), this;
    }, nodes: function nodes() {
      var t = new Array(this.size()),
          n = -1;return this.each(function () {
        t[++n] = this;
      }), t;
    }, node: function node() {
      for (var t = this._groups, n = 0, e = t.length; n < e; ++n) {
        for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
          var u = r[i];if (u) return u;
        }
      }return null;
    }, size: function size() {
      var t = 0;return this.each(function () {
        ++t;
      }), t;
    }, empty: function empty() {
      return !this.node();
    }, each: function each(t) {
      for (var n = this._groups, e = 0, r = n.length; e < r; ++e) {
        for (var i, o = n[e], u = 0, s = o.length; u < s; ++u) {
          (i = o[u]) && t.call(i, i.__data__, u, o);
        }
      }return this;
    }, attr: function attr(t, n) {
      var e = o(t);if (arguments.length < 2) {
        var r = this.node();return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
      }return this.each((null == n ? e.local ? function (t) {
        return function () {
          this.removeAttributeNS(t.space, t.local);
        };
      } : function (t) {
        return function () {
          this.removeAttribute(t);
        };
      } : "function" == typeof n ? e.local ? function (n, e) {
        return function () {
          var t = e.apply(this, arguments);null == t ? this.removeAttributeNS(n.space, n.local) : this.setAttributeNS(n.space, n.local, t);
        };
      } : function (n, e) {
        return function () {
          var t = e.apply(this, arguments);null == t ? this.removeAttribute(n) : this.setAttribute(n, t);
        };
      } : e.local ? function (t, n) {
        return function () {
          this.setAttributeNS(t.space, t.local, n);
        };
      } : function (t, n) {
        return function () {
          this.setAttribute(t, n);
        };
      })(e, n));
    }, style: function style(t, n, e) {
      return 1 < arguments.length ? this.each((null == n ? function (t) {
        return function () {
          this.style.removeProperty(t);
        };
      } : "function" == typeof n ? function (n, e, r) {
        return function () {
          var t = e.apply(this, arguments);null == t ? this.style.removeProperty(n) : this.style.setProperty(n, t, r);
        };
      } : function (t, n, e) {
        return function () {
          this.style.setProperty(t, n, e);
        };
      })(t, n, null == e ? "" : e)) : (r = this.node(), i = t, r.style.getPropertyValue(i) || y(r).getComputedStyle(r, null).getPropertyValue(i));var r, i;
    }, property: function property(t, n) {
      return 1 < arguments.length ? this.each((null == n ? function (t) {
        return function () {
          delete this[t];
        };
      } : "function" == typeof n ? function (n, e) {
        return function () {
          var t = e.apply(this, arguments);null == t ? delete this[n] : this[n] = t;
        };
      } : function (t, n) {
        return function () {
          this[t] = n;
        };
      })(t, n)) : this.node()[t];
    }, classed: function classed(t, n) {
      var e = m(t + "");if (arguments.length < 2) {
        for (var r = _(this.node()), i = -1, o = e.length; ++i < o;) {
          if (!r.contains(e[i])) return !1;
        }return !0;
      }return this.each(("function" == typeof n ? function (t, n) {
        return function () {
          (n.apply(this, arguments) ? w : A)(this, t);
        };
      } : n ? function (t) {
        return function () {
          w(this, t);
        };
      } : function (t) {
        return function () {
          A(this, t);
        };
      })(e, n));
    }, text: function text(t) {
      return arguments.length ? this.each(null == t ? E : ("function" == typeof t ? function (n) {
        return function () {
          var t = n.apply(this, arguments);this.textContent = null == t ? "" : t;
        };
      } : function (t) {
        return function () {
          this.textContent = t;
        };
      })(t)) : this.node().textContent;
    }, html: function html(t) {
      return arguments.length ? this.each(null == t ? S : ("function" == typeof t ? function (n) {
        return function () {
          var t = n.apply(this, arguments);this.innerHTML = null == t ? "" : t;
        };
      } : function (t) {
        return function () {
          this.innerHTML = t;
        };
      })(t)) : this.node().innerHTML;
    }, raise: function raise() {
      return this.each(C);
    }, lower: function lower() {
      return this.each(N);
    }, append: function append(t) {
      var n = "function" == typeof t ? t : u(t);return this.select(function () {
        return this.appendChild(n.apply(this, arguments));
      });
    }, insert: function insert(t, n) {
      var e = "function" == typeof t ? t : u(t),
          r = null == n ? T : "function" == typeof n ? n : f(n);return this.select(function () {
        return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
      });
    }, remove: function remove() {
      return this.each(k);
    }, clone: function clone(t) {
      return this.select(t ? M : O);
    }, datum: function datum(t) {
      return arguments.length ? this.property("__data__", t) : this.node().__data__;
    }, on: function on(t, n, e) {
      var r,
          i,
          o = (t + "").trim().split(/^|\s+/).map(function (t) {
        var n = "",
            e = t.indexOf(".");return 0 <= e && (n = t.slice(e + 1), t = t.slice(0, e)), { type: t, name: n };
      }),
          u = o.length;if (!(arguments.length < 2)) {
        for (s = n ? R : L, null == e && (e = !1), r = 0; r < u; ++r) {
          this.each(s(o[r], n, e));
        }return this;
      }var s = this.node().__on;if (s) for (var a, c = 0, l = s.length; c < l; ++c) {
        for (r = 0, a = s[c]; r < u; ++r) {
          if ((i = o[r]).type === a.type && i.name === a.name) return a.value;
        }
      }
    }, dispatch: function dispatch(t, n) {
      return this.each(("function" == typeof n ? function (t, n) {
        return function () {
          return D(this, t, n.apply(this, arguments));
        };
      } : function (t, n) {
        return function () {
          return D(this, t, n);
        };
      })(t, n));
    } };var H = "$";function V() {}function I(t, n) {
    var e = new V();if (t instanceof V) t.each(function (t, n) {
      e.set(n, t);
    });else if (Array.isArray(t)) {
      var r,
          i = -1,
          o = t.length;if (null == n) for (; ++i < o;) {
        e.set(i, t[i]);
      } else for (; ++i < o;) {
        e.set(n(r = t[i], i, t), r);
      }
    } else if (t) for (var u in t) {
      e.set(u, t[u]);
    }return e;
  }function U() {
    return {};
  }function X(t, n, e) {
    t[n] = e;
  }function $() {
    return I();
  }function F(t, n, e) {
    t.set(n, e);
  }function G() {}V.prototype = I.prototype = { constructor: V, has: function has(t) {
      return H + t in this;
    }, get: function get(t) {
      return this[H + t];
    }, set: function set(t, n) {
      return this[H + t] = n, this;
    }, remove: function remove(t) {
      var n = H + t;return n in this && delete this[n];
    }, clear: function clear() {
      for (var t in this) {
        t[0] === H && delete this[t];
      }
    }, keys: function keys() {
      var t = [];for (var n in this) {
        n[0] === H && t.push(n.slice(1));
      }return t;
    }, values: function values() {
      var t = [];for (var n in this) {
        n[0] === H && t.push(this[n]);
      }return t;
    }, entries: function entries() {
      var t = [];for (var n in this) {
        n[0] === H && t.push({ key: n.slice(1), value: this[n] });
      }return t;
    }, size: function size() {
      var t = 0;for (var n in this) {
        n[0] === H && ++t;
      }return t;
    }, empty: function empty() {
      for (var t in this) {
        if (t[0] === H) return !1;
      }return !0;
    }, each: function each(t) {
      for (var n in this) {
        n[0] === H && t(this[n], n.slice(1), this);
      }
    } };var J = I.prototype;G.prototype = function (t, n) {
    var e = new G();if (t instanceof G) t.each(function (t) {
      e.add(t);
    });else if (t) {
      var r = -1,
          i = t.length;if (null == n) for (; ++r < i;) {
        e.add(t[r]);
      } else for (; ++r < i;) {
        e.add(n(t[r], r, t));
      }
    }return e;
  }.prototype = { constructor: G, has: J.has, add: function add(t) {
      return this[H + (t += "")] = t, this;
    }, remove: J.remove, clear: J.clear, values: J.keys, size: J.size, empty: J.empty, each: J.each };var K = { value: function value() {} };function Q() {
    for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
      if (!(t = arguments[n] + "") || t in r) throw new Error("illegal type: " + t);r[t] = [];
    }return new W(r);
  }function W(t) {
    this._ = t;
  }function Y(t, n) {
    for (var e, r = 0, i = t.length; r < i; ++r) {
      if ((e = t[r]).name === n) return e.value;
    }
  }function Z(t, n, e) {
    for (var r = 0, i = t.length; r < i; ++r) {
      if (t[r].name === n) {
        t[r] = K, t = t.slice(0, r).concat(t.slice(r + 1));break;
      }
    }return null != e && t.push({ name: n, value: e }), t;
  }function tt(i, t) {
    var o,
        u,
        s,
        a,
        c = Q("beforesend", "progress", "load", "error"),
        l = I(),
        f = new XMLHttpRequest(),
        h = null,
        p = null,
        v = 0;function n(t) {
      var n,
          e,
          r,
          i = f.status;if (!i && ((r = (e = f).responseType) && "text" !== r ? e.response : e.responseText) || 200 <= i && i < 300 || 304 === i) {
        if (s) try {
          n = s.call(o, f);
        } catch (t) {
          return void c.call("error", o, t);
        } else n = f;c.call("load", o, n);
      } else c.call("error", o, t);
    }if ("undefined" == typeof XDomainRequest || "withCredentials" in f || !/^(http(s)?:)?\/\//.test(i) || (f = new XDomainRequest()), "onload" in f ? f.onload = f.onerror = f.ontimeout = n : f.onreadystatechange = function (t) {
      3 < f.readyState && n(t);
    }, f.onprogress = function (t) {
      c.call("progress", o, t);
    }, o = { header: function header(t, n) {
        return t = (t + "").toLowerCase(), arguments.length < 2 ? l.get(t) : (null == n ? l.remove(t) : l.set(t, n + ""), o);
      }, mimeType: function mimeType(t) {
        return arguments.length ? (u = null == t ? null : t + "", o) : u;
      }, responseType: function responseType(t) {
        return arguments.length ? (a = t, o) : a;
      }, timeout: function timeout(t) {
        return arguments.length ? (v = +t, o) : v;
      }, user: function user(t) {
        return arguments.length < 1 ? h : (h = null == t ? null : t + "", o);
      }, password: function password(t) {
        return arguments.length < 1 ? p : (p = null == t ? null : t + "", o);
      }, response: function response(t) {
        return s = t, o;
      }, get: function get(t, n) {
        return o.send("GET", t, n);
      }, post: function post(t, n) {
        return o.send("POST", t, n);
      }, send: function send(t, n, e) {
        var r;return f.open(t, i, !0, h, p), null == u || l.has("accept") || l.set("accept", u + ",*/*"), f.setRequestHeader && l.each(function (t, n) {
          f.setRequestHeader(n, t);
        }), null != u && f.overrideMimeType && f.overrideMimeType(u), null != a && (f.responseType = a), 0 < v && (f.timeout = v), null == e && "function" == typeof n && (e = n, n = null), null != e && 1 === e.length && (r = e, e = function e(t, n) {
          r(null == t ? n : null);
        }), null != e && o.on("error", e).on("load", function (t) {
          e(null, t);
        }), c.call("beforesend", o, f), f.send(null == n ? null : n), o;
      }, abort: function abort() {
        return f.abort(), o;
      }, on: function on() {
        var t = c.on.apply(c, arguments);return t === c ? o : t;
      } }, null != t) {
      if ("function" != typeof t) throw new Error("invalid callback: " + t);return o.get(t);
    }return o;
  }W.prototype = Q.prototype = { constructor: W, on: function on(t, n) {
      var e,
          r,
          i = this._,
          o = (r = i, (t + "").trim().split(/^|\s+/).map(function (t) {
        var n = "",
            e = t.indexOf(".");if (0 <= e && (n = t.slice(e + 1), t = t.slice(0, e)), t && !r.hasOwnProperty(t)) throw new Error("unknown type: " + t);return { type: t, name: n };
      })),
          u = -1,
          s = o.length;if (!(arguments.length < 2)) {
        if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n);for (; ++u < s;) {
          if (e = (t = o[u]).type) i[e] = Z(i[e], t.name, n);else if (null == n) for (e in i) {
            i[e] = Z(i[e], t.name, null);
          }
        }return this;
      }for (; ++u < s;) {
        if ((e = (t = o[u]).type) && (e = Y(i[e], t.name))) return e;
      }
    }, copy: function copy() {
      var t = {},
          n = this._;for (var e in n) {
        t[e] = n[e].slice();
      }return new W(t);
    }, call: function call(t, n) {
      if (0 < (e = arguments.length - 2)) for (var e, r, i = new Array(e), o = 0; o < e; ++o) {
        i[o] = arguments[o + 2];
      }if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);for (o = 0, e = (r = this._[t]).length; o < e; ++o) {
        r[o].value.apply(n, i);
      }
    }, apply: function apply(t, n, e) {
      if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);for (var r = this._[t], i = 0, o = r.length; i < o; ++i) {
        r[i].value.apply(n, e);
      }
    } };var nt,
      et,
      rt = (nt = "text/plain", et = function et(t) {
    return t.responseText;
  }, function (t, n) {
    var e = tt(t).mimeType(nt).response(et);if (null != n) {
      if ("function" != typeof n) throw new Error("invalid callback: " + n);return e.get(n);
    }return e;
  }),
      it = {},
      ot = {},
      ut = 34,
      st = 10,
      at = 13;function ct(t) {
    return new Function("d", "return {" + t.map(function (t, n) {
      return JSON.stringify(t) + ": d[" + n + "]";
    }).join(",") + "}");
  }function lt(o) {
    var n = new RegExp('["' + o + "\n\r]"),
        f = o.charCodeAt(0);function e(r, t) {
      var n,
          e = [],
          i = r.length,
          o = 0,
          u = 0,
          s = i <= 0,
          a = !1;function c() {
        if (s) return ot;if (a) return a = !1, it;var t,
            n,
            e = o;if (r.charCodeAt(e) === ut) {
          for (; o++ < i && r.charCodeAt(o) !== ut || r.charCodeAt(++o) === ut;) {}return (t = o) >= i ? s = !0 : (n = r.charCodeAt(o++)) === st ? a = !0 : n === at && (a = !0, r.charCodeAt(o) === st && ++o), r.slice(e + 1, t - 1).replace(/""/g, '"');
        }for (; o < i;) {
          if ((n = r.charCodeAt(t = o++)) === st) a = !0;else if (n === at) a = !0, r.charCodeAt(o) === st && ++o;else if (n !== f) continue;return r.slice(e, t);
        }return s = !0, r.slice(e, i);
      }for (r.charCodeAt(i - 1) === st && --i, r.charCodeAt(i - 1) === at && --i; (n = c()) !== ot;) {
        for (var l = []; n !== it && n !== ot;) {
          l.push(n), n = c();
        }t && null == (l = t(l, u++)) || e.push(l);
      }return e;
    }function r(t) {
      return t.map(u).join(o);
    }function u(t) {
      return null == t ? "" : n.test(t += "") ? '"' + t.replace(/"/g, '""') + '"' : t;
    }return { parse: function parse(t, o) {
        var u,
            s,
            n = e(t, function (t, n) {
          if (u) return u(t, n - 1);var e, r, i;s = t, u = o ? (r = o, i = ct(e = t), function (t, n) {
            return r(i(t), n, e);
          }) : ct(t);
        });return n.columns = s || [], n;
      }, parseRows: e, format: function format(t, e) {
        var n, r, i;return null == e && (n = t, r = Object.create(null), i = [], n.forEach(function (t) {
          for (var n in t) {
            n in r || i.push(r[n] = n);
          }
        }), e = i), [e.map(u).join(o)].concat(t.map(function (n) {
          return e.map(function (t) {
            return u(n[t]);
          }).join(o);
        })).join("\n");
      }, formatRows: function formatRows(t) {
        return t.map(r).join("\n");
      } };
  }var ft = lt(",").parse;lt("\t");var ht,
      pt,
      vt = (ht = "text/csv", pt = ft, function (t, r, n) {
    arguments.length < 3 && (n = r, r = null);var i = tt(t).mimeType(ht);return i.row = function (t) {
      return arguments.length ? i.response((n = pt, e = r = t, function (t) {
        return n(t.responseText, e);
      })) : r;var n, e;
    }, i.row(r), n ? i.get(n) : i;
  });t.select = function (t) {
    return "string" == typeof t ? new z([[document.querySelector(t)]], [document.documentElement]) : new z([[t]], B);
  }, t.csv = vt, t.text = rt, t.nest = function () {
    var h,
        p,
        n,
        v = [],
        u = [];function d(t, e, r, i) {
      if (e >= v.length) return null != h && t.sort(h), null != p ? p(t) : t;for (var n, o, u, s = -1, a = t.length, c = v[e++], l = I(), f = r(); ++s < a;) {
        (u = l.get(n = c(o = t[s]) + "")) ? u.push(o) : l.set(n, [o]);
      }return l.each(function (t, n) {
        i(f, n, d(t, e, r, i));
      }), f;
    }return n = { object: function object(t) {
        return d(t, 0, U, X);
      }, map: function map(t) {
        return d(t, 0, $, F);
      }, entries: function entries(t) {
        return function e(t, r) {
          if (++r > v.length) return t;var i,
              o = u[r - 1];return null != p && r >= v.length ? i = t.entries() : (i = [], t.each(function (t, n) {
            i.push({ key: n, values: e(t, r) });
          })), null != o ? i.sort(function (t, n) {
            return o(t.key, n.key);
          }) : i;
        }(d(t, 0, $, F), 0);
      }, key: function key(t) {
        return v.push(t), n;
      }, sortKeys: function sortKeys(t) {
        return u[v.length - 1] = t, n;
      }, sortValues: function sortValues(t) {
        return h = t, n;
      }, rollup: function rollup(t) {
        return p = t, n;
      } };
  }, Object.defineProperty(t, "__esModule", { value: !0 });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _FreqDistModel = __webpack_require__(2);

var _FreqDistModel2 = _interopRequireDefault(_FreqDistModel);

var _FreqDistTableView = __webpack_require__(3);

var _FreqDistTableView2 = _interopRequireDefault(_FreqDistTableView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var d3 = __webpack_require__(0);

d3.csv('./data/engineering-interest.csv', function (error, data) {
  if (error) throw error;

  d3.text('../templates/table.html', function (str) {
    d3.select('.container').html(str);

    var model = new _FreqDistModel2.default(data).group('group');
    console.log(model);

    new _FreqDistTableView2.default(model, 'group', 'Numbers for Engineering Interest Study', 'Nineteen year followup of engineer interests').init();
  });
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var d3 = __webpack_require__(0);

var FreqDistModel = function () {
  function FreqDistModel(data) {
    _classCallCheck(this, FreqDistModel);

    this.data = data;
    this.nest = d3.nest();
  }

  /*
   * Reduce categorical data into a univariate value. Frequency in the view is
   * accessed by the reading the length of the values array.
   * @param {string} key - data column to group by
   */


  _createClass(FreqDistModel, [{
    key: 'group',
    value: function group(key) {
      var groupedData = this.nest.key(function (d) {
        return d[key];
      }).entries(this.data);
      return groupedData;
    }
  }]);

  return FreqDistModel;
}();

exports.default = FreqDistModel;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var d3 = __webpack_require__(0);

/*
 * Frequency Distribution Tables – How frequently is data distributed at each measure?
 *
 * The first column contains the measure and the second column contains the number of
 * cases (frequency) of that measure.
 */

var FreqDistTable = function () {
  function FreqDistTable(data, m, c, a) {
    _classCallCheck(this, FreqDistTable);

    this.data = data;
    this.measure = m;
    this.caption = c;
    this.attribution = a;
  }

  _createClass(FreqDistTable, [{
    key: 'init',
    value: function init() {
      var totals = 0;

      this.data.forEach(function (d) {
        totals += d.values.length;
      });

      d3.select('figcaption').text(this.caption);

      d3.select('thead').html('<tr><th>' + this.measure + '</th><th>Frequency</th></tr>');

      d3.select('tbody').selectAll('.row').data(this.data).enter().append('tr').attr('class', 'row').html(function (d) {
        return '<td>' + d.key + '</td><td>' + d.values.length + '</td>';
      });

      d3.select('tbody').append('tr').attr('class', 'row').html('<td>Total</td><td>' + totals + '</td>');

      d3.select('small').html('<span>Source: </span>' + this.attribution);
    }
  }]);

  return FreqDistTable;
}();

exports.default = FreqDistTable;

/***/ })
/******/ ]);
//# sourceMappingURL=app.bundle.js.map