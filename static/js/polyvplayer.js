
(function(e, t) {
	function n(e) {
		return I.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1
	}
	function i(e) {
		if (!dt[e]) {
			var t = F.body,
				n = I("<" + e + ">").appendTo(t),
				i = n.css("display");
			n.remove();
			if (i === "none" || i === "") {
				ft || (ft = F.createElement("iframe"), ft.frameBorder = ft.width = ft.height = 0), t.appendChild(ft);
				if (!pt || !ft.createElement) pt = (ft.contentWindow || ft.contentDocument).document, pt.write((F.compatMode === "CSS1Compat" ? "<!doctype html>" : "") + "<html><body>"), pt.close();
				n = pt.createElement(e), pt.body.appendChild(n), i = I.css(n, "display"), t.removeChild(ft)
			}
			dt[e] = i
		}
		return dt[e]
	}
	function r(e, t) {
		var n = {};
		I.each(gt.concat.apply([], gt.slice(0, t)), function() {
			n[this] = e
		});
		return n
	}
	function a() {
		yt = t
	}
	function o() {
		setTimeout(a, 0);
		return yt = I.now()
	}
	function s() {
		try {
			return new e.ActiveXObject("Microsoft.XMLHTTP")
		} catch (t) {}
	}
	function l() {
		try {
			return new e.XMLHttpRequest
		} catch (t) {}
	}
	function u(e, n) {
		e.dataFilter && (n = e.dataFilter(n, e.dataType));
		var i = e.dataTypes,
			r = {},
			a, o, s = i.length,
			l, u = i[0],
			c, d, f, p, h;
		for (a = 1; a < s; a++) {
			if (a === 1) for (o in e.converters) typeof o == "string" && (r[o.toLowerCase()] = e.converters[o]);
			c = u, u = i[a];
			if (u === "*") u = c;
			else if (c !== "*" && c !== u) {
				d = c + " " + u, f = r[d] || r["* " + u];
				if (!f) {
					h = t;
					for (p in r) {
						l = p.split(" ");
						if (l[0] === c || l[0] === "*") {
							h = r[l[1] + " " + u];
							if (h) {
								p = r[p], p === !0 ? f = h : h === !0 && (f = p);
								break
							}
						}
					}
				}!f && !h && I.error("No conversion from " + d.replace(" ", " to ")), f !== !0 && (n = f ? f(n) : h(p(n)))
			}
		}
		return n
	}
	function c(e, n, i) {
		var r = e.contents,
			a = e.dataTypes,
			o = e.responseFields,
			s, l, u, c;
		for (l in o) l in i && (n[o[l]] = i[l]);
		while (a[0] === "*") a.shift(), s === t && (s = e.mimeType || n.getResponseHeader("content-type"));
		if (s) for (l in r) if (r[l] && r[l].test(s)) {
			a.unshift(l);
			break
		}
		if (a[0] in i) u = a[0];
		else {
			for (l in i) {
				if (!a[0] || e.converters[l + " " + a[0]]) {
					u = l;
					break
				}
				c || (c = l)
			}
			u = u || c
		}
		if (u) {
			u !== a[0] && a.unshift(u);
			return i[u]
		}
	}
	function d(e, t, n, i) {
		if (I.isArray(t)) I.each(t, function(t, r) {
			n || Ve.test(e) ? i(e, r) : d(e + "[" + (typeof r == "object" || I.isArray(r) ? t : "") + "]", r, n, i)
		});
		else if (!n && t != null && typeof t == "object") for (var r in t) d(e + "[" + r + "]", t[r], n, i);
		else i(e, t)
	}
	function f(e, n, i, r, a, o) {
		a = a || n.dataTypes[0], o = o || {}, o[a] = !0;
		var s = e[a],
			l = 0,
			u = s ? s.length : 0,
			c = e === tt,
			d;
		for (; l < u && (c || !d); l++) d = s[l](n, i, r), typeof d == "string" && (!c || o[d] ? d = t : (n.dataTypes.unshift(d), d = f(e, n, i, r, d, o)));
		(c || !d) && !o["*"] && (d = f(e, n, i, r, "*", o));
		return d
	}
	function p(e) {
		return function(t, n) {
			typeof t != "string" && (n = t, t = "*");
			if (I.isFunction(n)) {
				var i = t.toLowerCase().split(Ke),
					r = 0,
					a = i.length,
					o, s, l;
				for (; r < a; r++) o = i[r], l = /^\+/.test(o), l && (o = o.substr(1) || "*"), s = e[o] = e[o] || [], s[l ? "unshift" : "push"](n)
			}
		}
	}
	function h(e, t, n) {
		var i = t === "width" ? e.offsetWidth : e.offsetHeight,
			r = t === "width" ? Oe : Ie;
		if (i > 0) {
			n !== "border" && I.each(r, function() {
				n || (i -= parseFloat(I.css(e, "padding" + this)) || 0), n === "margin" ? i += parseFloat(I.css(e, n + this)) || 0 : i -= parseFloat(I.css(e, "border" + this + "Width")) || 0
			});
			return i + "px"
		}
		i = De(e, t, t);
		if (i < 0 || i == null) i = e.style[t] || 0;
		i = parseFloat(i) || 0, n && I.each(r, function() {
			i += parseFloat(I.css(e, "padding" + this)) || 0, n !== "padding" && (i += parseFloat(I.css(e, "border" + this + "Width")) || 0), n === "margin" && (i += parseFloat(I.css(e, n + this)) || 0)
		});
		return i + "px"
	}
	function v(e, t) {
		t.src ? I.ajax({
			url: t.src,
			async: !1,
			dataType: "script"
		}) : I.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Se, "/*$0*/")), t.parentNode && t.parentNode.removeChild(t)
	}
	function m(e) {
		I.nodeName(e, "input") ? g(e) : "getElementsByTagName" in e && I.grep(e.getElementsByTagName("input"), g)
	}
	function g(e) {
		if (e.type === "checkbox" || e.type === "radio") e.defaultChecked = e.checked
	}
	function y(e) {
		return "getElementsByTagName" in e ? e.getElementsByTagName("*") : "querySelectorAll" in e ? e.querySelectorAll("*") : []
	}
	function w(e, t) {
		var n;
		if (t.nodeType === 1) {
			t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase();
			if (n === "object") t.outerHTML = e.outerHTML;
			else if (n !== "input" || e.type !== "checkbox" && e.type !== "radio") {
				if (n === "option") t.selected = e.defaultSelected;
				else if (n === "input" || n === "textarea") t.defaultValue = e.defaultValue
			} else e.checked && (t.defaultChecked = t.checked = e.checked), t.value !== e.value && (t.value = e.value);
			t.removeAttribute(I.expando)
		}
	}
	function b(e, t) {
		if (t.nodeType === 1 && !! I.hasData(e)) {
			var n = I.expando,
				i = I.data(e),
				r = I.data(t, i);
			if (i = i[n]) {
				var a = i.events;
				r = r[n] = I.extend({}, i);
				if (a) {
					delete r.handle, r.events = {};
					for (var o in a) for (var s = 0, l = a[o].length; s < l; s++) I.event.add(t, o + (a[o][s].namespace ? "." : "") + a[o][s].namespace, a[o][s], a[o][s].data)
				}
			}
		}
	}
	function _(e, t) {
		return I.nodeName(e, "table") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
	}
	function T(e, t, n) {
		t = t || 0;
		if (I.isFunction(t)) return I.grep(e, function(e, i) {
			var r = !! t.call(e, i, e);
			return r === n
		});
		if (t.nodeType) return I.grep(e, function(e, i) {
			return e === t === n
		});
		if (typeof t == "string") {
			var i = I.grep(e, function(e) {
				return e.nodeType === 1
			});
			if (de.test(t)) return I.filter(t, i, !n);
			t = I.filter(t, i)
		}
		return I.grep(e, function(e, i) {
			return I.inArray(e, t) >= 0 === n
		})
	}
	function x(e) {
		return !e || !e.parentNode || e.parentNode.nodeType === 11
	}
	function S(e, t) {
		return (e && e !== "*" ? e + "." : "") + t.replace(Z, "`").replace(Q, "&")
	}
	function j(e) {
		var t, n, i, r, a, o, s, l, u, c, d, f, p, h = [],
			v = [],
			m = I._data(this, "events");
		if (!(e.liveFired === this || !m || !m.live || e.target.disabled || e.button && e.type === "click")) {
			e.namespace && (f = new RegExp("(^|\\.)" + e.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)")), e.liveFired = this;
			var g = m.live.slice(0);
			for (s = 0; s < g.length; s++) a = g[s], a.origType.replace(Y, "") === e.type ? v.push(a.selector) : g.splice(s--, 1);
			r = I(e.target).closest(v, e.currentTarget);
			for (l = 0, u = r.length; l < u; l++) {
				d = r[l];
				for (s = 0; s < g.length; s++) {
					a = g[s];
					if (d.selector === a.selector && (!f || f.test(a.namespace)) && !d.elem.disabled) {
						o = d.elem, i = null;
						if (a.preType === "mouseenter" || a.preType === "mouseleave") e.type = a.preType, i = I(e.relatedTarget).closest(a.selector)[0], i && I.contains(o, i) && (i = o);
						(!i || i !== o) && h.push({
							elem: o,
							handleObj: a,
							level: d.level
						})
					}
				}
			}
			for (l = 0, u = h.length; l < u; l++) {
				r = h[l];
				if (n && r.level > n) break;
				e.currentTarget = r.elem, e.data = r.handleObj.data, e.handleObj = r.handleObj, p = r.handleObj.origHandler.apply(r.elem, arguments);
				if (p === !1 || e.isPropagationStopped()) {
					n = r.level, p === !1 && (t = !1);
					if (e.isImmediatePropagationStopped()) break
				}
			}
			return t
		}
	}
	function k(e, n, i) {
		var r = I.extend({}, i[0]);
		r.type = e, r.originalEvent = {}, r.liveFired = t, I.event.handle.call(n, r), r.isDefaultPrevented() && i[0].preventDefault()
	}
	function C() {
		return !0
	}
	function P() {
		return !1
	}
	function A(e, n, i) {
		var r = n + "defer",
			a = n + "queue",
			o = n + "mark",
			s = I.data(e, r, t, !0);
		s && (i === "queue" || !I.data(e, a, t, !0)) && (i === "mark" || !I.data(e, o, t, !0)) && setTimeout(function() {
			!I.data(e, a, t, !0) && !I.data(e, o, t, !0) && (I.removeData(e, r, !0), s.resolve())
		}, 0)
	}
	function N(e) {
		for (var t in e) if (t !== "toJSON") return !1;
		return !0
	}
	function E(e, n, i) {
		if (i === t && e.nodeType === 1) {
			var r = "data-" + n.replace(B, "$1-$2").toLowerCase();
			i = e.getAttribute(r);
			if (typeof i == "string") {
				try {
					i = i === "true" ? !0 : i === "false" ? !1 : i === "null" ? null : I.isNaN(i) ? H.test(i) ? I.parseJSON(i) : i : parseFloat(i)
				} catch (a) {}
				I.data(e, n, i)
			} else i = t
		}
		return i
	}
	var F = e.document,
		L = e.navigator,
		O = e.location,
		I = function() {
			function n() {
				if (!i.isReady) {
					try {
						F.documentElement.doScroll("left")
					} catch (e) {
						setTimeout(n, 1);
						return
					}
					i.ready()
				}
			}
			var i = function(e, t) {
					return new i.fn.init(e, t, o)
				},
				r = e.polyvObject,
				a = e.$,
				o, s = /^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
				l = /\S/,
				u = /^\s+/,
				c = /\s+$/,
				d = /\d/,
				f = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
				p = /^[\],:{}\s]*$/,
				h = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
				v = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
				m = /(?:^|:|,)(?:\s*\[)+/g,
				g = /(webkit)[ \/]([\w.]+)/,
				y = /(opera)(?:.*version)?[ \/]([\w.]+)/,
				w = /(msie) ([\w.]+)/,
				b = /(mozilla)(?:.*? rv:([\w.]+))?/,
				_ = /-([a-z])/gi,
				T = function(e, t) {
					return t.toUpperCase()
				},
				x = L.userAgent,
				S, j, k, C = Object.prototype.toString,
				P = Object.prototype.hasOwnProperty,
				A = Array.prototype.push,
				N = Array.prototype.slice,
				E = String.prototype.trim,
				O = Array.prototype.indexOf,
				I = {};
			i.fn = i.prototype = {
				constructor: i,
				init: function(e, n, r) {
					var a, o, l, u;
					if (!e) return this;
					if (e.nodeType) {
						this.context = this[0] = e, this.length = 1;
						return this
					}
					if (e === "body" && !n && F.body) {
						this.context = F, this[0] = F.body, this.selector = e, this.length = 1;
						return this
					}
					if (typeof e == "string") {
						e.charAt(0) !== "<" || e.charAt(e.length - 1) !== ">" || e.length < 3 ? a = s.exec(e) : a = [null, e, null];
						if (a && (a[1] || !n)) {
							if (a[1]) {
								n = n instanceof i ? n[0] : n, u = n ? n.ownerDocument || n : F, l = f.exec(e), l ? i.isPlainObject(n) ? (e = [F.createElement(l[1])], i.fn.attr.call(e, n, !0)) : e = [u.createElement(l[1])] : (l = i.buildFragment([a[1]], [u]), e = (l.cacheable ? i.clone(l.fragment) : l.fragment).childNodes);
								return i.merge(this, e)
							}
							o = F.getElementById(a[2]);
							if (o && o.parentNode) {
								if (o.id !== a[2]) return r.find(e);
								this.length = 1, this[0] = o
							}
							this.context = F, this.selector = e;
							return this
						}
						return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e)
					}
					if (i.isFunction(e)) return r.ready(e);
					e.selector !== t && (this.selector = e.selector, this.context = e.context);
					return i.makeArray(e, this)
				},
				selector: "",
				jquery: "1.6.2",
				length: 0,
				size: function() {
					return this.length
				},
				toArray: function() {
					return N.call(this, 0)
				},
				get: function(e) {
					return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
				},
				pushStack: function(e, t, n) {
					var r = this.constructor();
					i.isArray(e) ? A.apply(r, e) : i.merge(r, e), r.prevObject = this, r.context = this.context, t === "find" ? r.selector = this.selector + (this.selector ? " " : "") + n : t && (r.selector = this.selector + "." + t + "(" + n + ")");
					return r
				},
				each: function(e, t) {
					return i.each(this, e, t)
				},
				ready: function(e) {
					i.bindReady(), j.done(e);
					return this
				},
				eq: function(e) {
					return e === -1 ? this.slice(e) : this.slice(e, +e + 1)
				},
				first: function() {
					return this.eq(0)
				},
				last: function() {
					return this.eq(-1)
				},
				slice: function() {
					return this.pushStack(N.apply(this, arguments), "slice", N.call(arguments).join(","))
				},
				map: function(e) {
					return this.pushStack(i.map(this, function(t, n) {
						return e.call(t, n, t)
					}))
				},
				end: function() {
					return this.prevObject || this.constructor(null)
				},
				push: A,
				sort: [].sort,
				splice: [].splice
			}, i.fn.init.prototype = i.fn, i.extend = i.fn.extend = function() {
				var e, n, r, a, o, s, l = arguments[0] || {},
					u = 1,
					c = arguments.length,
					d = !1;
				typeof l == "boolean" && (d = l, l = arguments[1] || {}, u = 2), typeof l != "object" && !i.isFunction(l) && (l = {}), c === u && (l = this, --u);
				for (; u < c; u++) if ((e = arguments[u]) != null) for (n in e) {
					r = l[n], a = e[n];
					if (l === a) continue;
					d && a && (i.isPlainObject(a) || (o = i.isArray(a))) ? (o ? (o = !1, s = r && i.isArray(r) ? r : []) : s = r && i.isPlainObject(r) ? r : {}, l[n] = i.extend(d, s, a)) : a !== t && (l[n] = a)
				}
				return l
			}, i.extend({
				noConflict: function(t) {
					e.$ === i && (e.$ = a), t && e.polyvObject === i && (e.polyvObject = r);
					return i
				},
				isReady: !1,
				readyWait: 1,
				holdReady: function(e) {
					e ? i.readyWait++ : i.ready(!0)
				},
				ready: function(e) {
					if (e === !0 && !--i.readyWait || e !== !0 && !i.isReady) {
						if (!F.body) return setTimeout(i.ready, 1);
						i.isReady = !0;
						if (e !== !0 && --i.readyWait > 0) return;
						j.resolveWith(F, [i]), i.fn.trigger && i(F).trigger("ready").unbind("ready")
					}
				},
				bindReady: function() {
					if (!j) {
						j = i._Deferred();
						if (F.readyState === "complete") return setTimeout(i.ready, 1);
						if (F.addEventListener) F.addEventListener("DOMContentLoaded", k, !1), e.addEventListener("load", i.ready, !1);
						else if (F.attachEvent) {
							F.attachEvent("onreadystatechange", k), e.attachEvent("onload", i.ready);
							var t = !1;
							try {
								t = e.frameElement == null
							} catch (r) {}
							F.documentElement.doScroll && t && n()
						}
					}
				},
				isFunction: function(e) {
					return i.type(e) === "function"
				},
				isArray: Array.isArray ||
				function(e) {
					return i.type(e) === "array"
				},
				isWindow: function(e) {
					return e && typeof e == "object" && "setInterval" in e
				},
				isNaN: function(e) {
					return e == null || !d.test(e) || isNaN(e)
				},
				type: function(e) {
					return e == null ? String(e) : I[C.call(e)] || "object"
				},
				isPlainObject: function(e) {
					if (!e || i.type(e) !== "object" || e.nodeType || i.isWindow(e)) return !1;
					if (e.constructor && !P.call(e, "constructor") && !P.call(e.constructor.prototype, "isPrototypeOf")) return !1;
					var n;
					for (n in e);
					return n === t || P.call(e, n)
				},
				isEmptyObject: function(e) {
					for (var t in e) return !1;
					return !0
				},
				error: function(e) {
					throw e
				},
				parseJSON: function(t) {
					if (typeof t != "string" || !t) return null;
					t = i.trim(t);
					if (e.JSON && e.JSON.parse) return e.JSON.parse(t);
					if (p.test(t.replace(h, "@").replace(v, "]").replace(m, ""))) return new Function("return " + t)();
					i.error("Invalid JSON: " + t)
				},
				parseXML: function(t, n, r) {
					e.DOMParser ? (r = new DOMParser, n = r.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t)), r = n.documentElement, (!r || !r.nodeName || r.nodeName === "parsererror") && i.error("Invalid XML: " + t);
					return n
				},
				noop: function() {},
				globalEval: function(t) {
					t && l.test(t) && (e.execScript ||
					function(t) {
						e.eval.call(e, t)
					})(t)
				},
				camelCase: function(e) {
					return e.replace(_, T)
				},
				nodeName: function(e, t) {
					return e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase()
				},
				each: function(e, n, r) {
					var a, o = 0,
						s = e.length,
						l = s === t || i.isFunction(e);
					if (r) {
						if (l) {
							for (a in e) if (n.apply(e[a], r) === !1) break
						} else for (; o < s;) if (n.apply(e[o++], r) === !1) break
					} else if (l) {
						for (a in e) if (n.call(e[a], a, e[a]) === !1) break
					} else for (; o < s;) if (n.call(e[o], o, e[o++]) === !1) break;
					return e
				},
				trim: E ?
				function(e) {
					return e == null ? "" : E.call(e)
				} : function(e) {
					return e == null ? "" : (e + "").replace(u, "").replace(c, "")
				},
				makeArray: function(e, t) {
					var n = t || [];
					if (e != null) {
						var r = i.type(e);
						e.length == null || r === "string" || r === "function" || r === "regexp" || i.isWindow(e) ? A.call(n, e) : i.merge(n, e)
					}
					return n
				},
				inArray: function(e, t) {
					if (O) return O.call(t, e);
					for (var n = 0, i = t.length; n < i; n++) if (t[n] === e) return n;
					return -1
				},
				merge: function(e, n) {
					var i = e.length,
						r = 0;
					if (typeof n.length == "number") for (var a = n.length; r < a; r++) e[i++] = n[r];
					else while (n[r] !== t) e[i++] = n[r++];
					e.length = i;
					return e
				},
				grep: function(e, t, n) {
					var i = [],
						r;
					n = !! n;
					for (var a = 0, o = e.length; a < o; a++) r = !! t(e[a], a), n !== r && i.push(e[a]);
					return i
				},
				map: function(e, n, r) {
					var a, o, s = [],
						l = 0,
						u = e.length,
						c = e instanceof i || u !== t && typeof u == "number" && (u > 0 && e[0] && e[u - 1] || u === 0 || i.isArray(e));
					if (c) for (; l < u; l++) a = n(e[l], l, r), a != null && (s[s.length] = a);
					else for (o in e) a = n(e[o], o, r), a != null && (s[s.length] = a);
					return s.concat.apply([], s)
				},
				guid: 1,
				proxy: function(e, n) {
					if (typeof n == "string") {
						var r = e[n];
						n = e, e = r
					}
					if (!i.isFunction(e)) return t;
					var a = N.call(arguments, 2),
						o = function() {
							return e.apply(n, a.concat(N.call(arguments)))
						};
					o.guid = e.guid = e.guid || o.guid || i.guid++;
					return o
				},
				access: function(e, n, r, a, o, s) {
					var l = e.length;
					if (typeof n == "object") {
						for (var u in n) i.access(e, u, n[u], a, o, r);
						return e
					}
					if (r !== t) {
						a = !s && a && i.isFunction(r);
						for (var c = 0; c < l; c++) o(e[c], n, a ? r.call(e[c], c, o(e[c], n)) : r, s);
						return e
					}
					return l ? o(e[0], n) : t
				},
				now: function() {
					return (new Date).getTime()
				},
				uaMatch: function(e) {
					e = e.toLowerCase();
					var t = g.exec(e) || y.exec(e) || w.exec(e) || e.indexOf("compatible") < 0 && b.exec(e) || [];
					return {
						browser: t[1] || "",
						version: t[2] || "0"
					}
				},
				sub: function() {
					function e(t, n) {
						return new e.fn.init(t, n)
					}
					i.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function(n, r) {
						r && r instanceof i && !(r instanceof e) && (r = e(r));
						return i.fn.init.call(this, n, r, t)
					}, e.fn.init.prototype = e.fn;
					var t = e(F);
					return e
				},
				browser: {}
			}), i.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) {
				I["[object " + t + "]"] = t.toLowerCase()
			}), S = i.uaMatch(x), S.browser && (i.browser[S.browser] = !0, i.browser.version = S.version), i.browser.webkit && (i.browser.safari = !0), l.test(" ") && (u = /^[\s ]+/, c = /[\s ]+$/), o = i(F), F.addEventListener ? k = function() {
				F.removeEventListener("DOMContentLoaded", k, !1), i.ready()
			} : F.attachEvent && (k = function() {
				F.readyState === "complete" && (F.detachEvent("onreadystatechange", k), i.ready())
			});
			return i
		}(),
		D = "done fail isResolved isRejected promise then always pipe".split(" "),
		M = [].slice;
	I.extend({
		_Deferred: function() {
			var e = [],
				t, n, i, r = {
					done: function() {
						if (!i) {
							var n = arguments,
								a, o, s, l, u;
							t && (u = t, t = 0);
							for (a = 0, o = n.length; a < o; a++) s = n[a], l = I.type(s), l === "array" ? r.done.apply(r, s) : l === "function" && e.push(s);
							u && r.resolveWith(u[0], u[1])
						}
						return this
					},
					resolveWith: function(r, a) {
						if (!i && !t && !n) {
							a = a || [], n = 1;
							try {
								while (e[0]) e.shift().apply(r, a)
							} finally {
								t = [r, a], n = 0
							}
						}
						return this
					},
					resolve: function() {
						r.resolveWith(this, arguments);
						return this
					},
					isResolved: function() {
						return !!n || !! t
					},
					cancel: function() {
						i = 1, e = [];
						return this
					}
				};
			return r
		},
		Deferred: function(e) {
			var t = I._Deferred(),
				n = I._Deferred(),
				i;
			I.extend(t, {
				then: function(e, n) {
					t.done(e).fail(n);
					return this
				},
				always: function() {
					return t.done.apply(t, arguments).fail.apply(this, arguments)
				},
				fail: n.done,
				rejectWith: n.resolveWith,
				reject: n.resolve,
				isRejected: n.isResolved,
				pipe: function(e, n) {
					return I.Deferred(function(i) {
						I.each({
							done: [e, "resolve"],
							fail: [n, "reject"]
						}, function(e, n) {
							var r = n[0],
								a = n[1],
								o;
							I.isFunction(r) ? t[e](function() {
								o = r.apply(this, arguments), o && I.isFunction(o.promise) ? o.promise().then(i.resolve, i.reject) : i[a](o)
							}) : t[e](i[a])
						})
					}).promise()
				},
				promise: function(e) {
					if (e == null) {
						if (i) return i;
						i = e = {}
					}
					var n = D.length;
					while (n--) e[D[n]] = t[D[n]];
					return e
				}
			}), t.done(n.cancel).fail(t.cancel), delete t.cancel, e && e.call(t, t);
			return t
		},
		when: function(e) {
			function t(e) {
				return function(t) {
					n[e] = arguments.length > 1 ? M.call(arguments, 0) : t, --a || o.resolveWith(o, M.call(n, 0))
				}
			}
			var n = arguments,
				i = 0,
				r = n.length,
				a = r,
				o = r <= 1 && e && I.isFunction(e.promise) ? e : I.Deferred();
			if (r > 1) {
				for (; i < r; i++) n[i] && I.isFunction(n[i].promise) ? n[i].promise().then(t(i), o.reject) : --a;
				a || o.resolveWith(o, n)
			} else o !== e && o.resolveWith(o, r ? [e] : []);
			return o.promise()
		}
	}), I.support = function() {
		var e = F.createElement("div"),
			t = F.documentElement,
			n, i, r, a, o, s, l, u, c, d, f, p, h, v, m, g, y;
		e.setAttribute("className", "t"), e.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", n = e.getElementsByTagName("*"), i = e.getElementsByTagName("a")[0];
		if (!n || !n.length || !i) return {};
		r = F.createElement("select"), a = r.appendChild(F.createElement("option")), o = e.getElementsByTagName("input")[0], l = {
			leadingWhitespace: e.firstChild.nodeType === 3,
			tbody: !e.getElementsByTagName("tbody").length,
			htmlSerialize: !! e.getElementsByTagName("link").length,
			style: /top/.test(i.getAttribute("style")),
			hrefNormalized: i.getAttribute("href") === "/a",
			opacity: /^0.55$/.test(i.style.opacity),
			cssFloat: !! i.style.cssFloat,
			checkOn: o.value === "on",
			optSelected: a.selected,
			getSetAttribute: e.className !== "t",
			submitBubbles: !0,
			changeBubbles: !0,
			focusinBubbles: !1,
			deleteExpando: !0,
			noCloneEvent: !0,
			inlineBlockNeedsLayout: !1,
			shrinkWrapBlocks: !1,
			reliableMarginRight: !0
		}, o.checked = !0, l.noCloneChecked = o.cloneNode(!0).checked, r.disabled = !0, l.optDisabled = !a.disabled;
		try {
			delete e.test
		} catch (w) {
			l.deleteExpando = !1
		}!e.addEventListener && e.attachEvent && e.fireEvent && (e.attachEvent("onclick", function() {
			l.noCloneEvent = !1
		}), e.cloneNode(!0).fireEvent("onclick")), o = F.createElement("input"), o.value = "t", o.setAttribute("type", "radio"), l.radioValue = o.value === "t", o.setAttribute("checked", "checked"), e.appendChild(o), u = F.createDocumentFragment(), u.appendChild(e.firstChild), l.checkClone = u.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "", e.style.width = e.style.paddingLeft = "1px", c = F.getElementsByTagName("body")[0], f = F.createElement(c ? "div" : "body"), p = {
			visibility: "hidden",
			width: 0,
			height: 0,
			border: 0,
			margin: 0
		}, c && I.extend(p, {
			position: "absolute",
			left: -1e3,
			top: -1e3
		});
		for (g in p) f.style[g] = p[g];
		f.appendChild(e), d = c || t, d.insertBefore(f, d.firstChild), l.appendChecked = o.checked, l.boxModel = e.offsetWidth === 2, "zoom" in e.style && (e.style.display = "inline", e.style.zoom = 1, l.inlineBlockNeedsLayout = e.offsetWidth === 2, e.style.display = "", e.innerHTML = "<div style='width:4px;'></div>", l.shrinkWrapBlocks = e.offsetWidth !== 2), e.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>", h = e.getElementsByTagName("td"), y = h[0].offsetHeight === 0, h[0].style.display = "", h[1].style.display = "none", l.reliableHiddenOffsets = y && h[0].offsetHeight === 0, e.innerHTML = "", F.defaultView && F.defaultView.getComputedStyle && (s = F.createElement("div"), s.style.width = "0", s.style.marginRight = "0", e.appendChild(s), l.reliableMarginRight = (parseInt((F.defaultView.getComputedStyle(s, null) || {
			marginRight: 0
		}).marginRight, 10) || 0) === 0), f.innerHTML = "", d.removeChild(f);
		if (e.attachEvent) for (g in {
			submit: 1,
			change: 1,
			focusin: 1
		}) m = "on" + g, y = m in e, y || (e.setAttribute(m, "return;"), y = typeof e[m] == "function"), l[g + "Bubbles"] = y;
		f = u = r = a = c = s = e = o = null;
		return l
	}(), I.boxModel = I.support.boxModel;
	var H = /^(?:\{.*\}|\[.*\])$/,
		B = /([a-z])([A-Z])/g;
	I.extend({
		cache: {},
		uuid: 0,
		expando: "polyvObject" + (I.fn.jquery + Math.random()).replace(/\D/g, ""),
		noData: {
			embed: !0,
			object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
			applet: !0
		},
		hasData: function(e) {
			e = e.nodeType ? I.cache[e[I.expando]] : e[I.expando];
			return !!e && !N(e)
		},
		data: function(e, n, i, r) {
			if ( !! I.acceptData(e)) {
				var a = I.expando,
					o = typeof n == "string",
					s, l = e.nodeType,
					u = l ? I.cache : e,
					c = l ? e[I.expando] : e[I.expando] && I.expando;
				if ((!c || r && c && !u[c][a]) && o && i === t) return;
				c || (l ? e[I.expando] = c = ++I.uuid : c = I.expando), u[c] || (u[c] = {}, l || (u[c].toJSON = I.noop));
				if (typeof n == "object" || typeof n == "function") r ? u[c][a] = I.extend(u[c][a], n) : u[c] = I.extend(u[c], n);
				s = u[c], r && (s[a] || (s[a] = {}), s = s[a]), i !== t && (s[I.camelCase(n)] = i);
				if (n === "events" && !s[n]) return s[a] && s[a].events;
				return o ? s[I.camelCase(n)] || s[n] : s
			}
		},
		removeData: function(t, n, i) {
			if ( !! I.acceptData(t)) {
				var r = I.expando,
					a = t.nodeType,
					o = a ? I.cache : t,
					s = a ? t[I.expando] : I.expando;
				if (!o[s]) return;
				if (n) {
					var l = i ? o[s][r] : o[s];
					if (l) {
						delete l[n];
						if (!N(l)) return
					}
				}
				if (i) {
					delete o[s][r];
					if (!N(o[s])) return
				}
				var u = o[s][r];
				I.support.deleteExpando || o != e ? delete o[s] : o[s] = null, u ? (o[s] = {}, a || (o[s].toJSON = I.noop), o[s][r] = u) : a && (I.support.deleteExpando ? delete t[I.expando] : t.removeAttribute ? t.removeAttribute(I.expando) : t[I.expando] = null)
			}
		},
		_data: function(e, t, n) {
			return I.data(e, t, n, !0)
		},
		acceptData: function(e) {
			if (e.nodeName) {
				var t = I.noData[e.nodeName.toLowerCase()];
				if (t) return t !== !0 && e.getAttribute("classid") === t
			}
			return !0
		}
	}), I.fn.extend({
		data: function(e, n) {
			var i = null;
			if (typeof e == "undefined") {
				if (this.length) {
					i = I.data(this[0]);
					if (this[0].nodeType === 1) {
						var r = this[0].attributes,
							a;
						for (var o = 0, s = r.length; o < s; o++) a = r[o].name, a.indexOf("data-") === 0 && (a = I.camelCase(a.substring(5)), E(this[0], a, i[a]))
					}
				}
				return i
			}
			if (typeof e == "object") return this.each(function() {
				I.data(this, e)
			});
			var l = e.split(".");
			l[1] = l[1] ? "." + l[1] : "";
			if (n === t) {
				i = this.triggerHandler("getData" + l[1] + "!", [l[0]]), i === t && this.length && (i = I.data(this[0], e), i = E(this[0], e, i));
				return i === t && l[1] ? this.data(l[0]) : i
			}
			return this.each(function() {
				var t = I(this),
					i = [l[0], n];
				t.triggerHandler("setData" + l[1] + "!", i), I.data(this, e, n), t.triggerHandler("changeData" + l[1] + "!", i)
			})
		},
		removeData: function(e) {
			return this.each(function() {
				I.removeData(this, e)
			})
		}
	}), I.extend({
		_mark: function(e, n) {
			e && (n = (n || "fx") + "mark", I.data(e, n, (I.data(e, n, t, !0) || 0) + 1, !0))
		},
		_unmark: function(e, n, i) {
			e !== !0 && (i = n, n = e, e = !1);
			if (n) {
				i = i || "fx";
				var r = i + "mark",
					a = e ? 0 : (I.data(n, r, t, !0) || 1) - 1;
				a ? I.data(n, r, a, !0) : (I.removeData(n, r, !0), A(n, i, "mark"))
			}
		},
		queue: function(e, n, i) {
			if (e) {
				n = (n || "fx") + "queue";
				var r = I.data(e, n, t, !0);
				i && (!r || I.isArray(i) ? r = I.data(e, n, I.makeArray(i), !0) : r.push(i));
				return r || []
			}
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var n = I.queue(e, t),
				i = n.shift(),
				r;
			i === "inprogress" && (i = n.shift()), i && (t === "fx" && n.unshift("inprogress"), i.call(e, function() {
				I.dequeue(e, t)
			})), n.length || (I.removeData(e, t + "queue", !0), A(e, t, "queue"))
		}
	}), I.fn.extend({
		queue: function(e, n) {
			typeof e != "string" && (n = e, e = "fx");
			if (n === t) return I.queue(this[0], e);
			return this.each(function() {
				var t = I.queue(this, e, n);
				e === "fx" && t[0] !== "inprogress" && I.dequeue(this, e)
			})
		},
		dequeue: function(e) {
			return this.each(function() {
				I.dequeue(this, e)
			})
		},
		delay: function(e, t) {
			e = I.fx ? I.fx.speeds[e] || e : e, t = t || "fx";
			return this.queue(t, function() {
				var n = this;
				setTimeout(function() {
					I.dequeue(n, t)
				}, e)
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, n) {
			function i() {
				--s || r.resolveWith(a, [a])
			}
			typeof e != "string" && (n = e, e = t), e = e || "fx";
			var r = I.Deferred(),
				a = this,
				o = a.length,
				s = 1,
				l = e + "defer",
				u = e + "queue",
				c = e + "mark",
				d;
			while (o--) if (d = I.data(a[o], l, t, !0) || (I.data(a[o], u, t, !0) || I.data(a[o], c, t, !0)) && I.data(a[o], l, I._Deferred(), !0)) s++, d.done(i);
			i();
			return r.promise()
		}
	});
	var V = /[\n\t\r]/g,
		R = /\s+/,
		U = /\r/g,
		W = /^(?:button|input)$/i,
		z = /^(?:button|input|object|select|textarea)$/i,
		q = /^a(?:rea)?$/i,
		$ = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
		X = /\:|^on/,
		J, G;
	I.fn.extend({
		attr: function(e, t) {
			return I.access(this, e, t, !0, I.attr)
		},
		removeAttr: function(e) {
			return this.each(function() {
				I.removeAttr(this, e)
			})
		},
		prop: function(e, t) {
			return I.access(this, e, t, !0, I.prop)
		},
		removeProp: function(e) {
			e = I.propFix[e] || e;
			return this.each(function() {
				try {
					this[e] = t, delete this[e]
				} catch (n) {}
			})
		},
		addClass: function(e) {
			var t, n, i, r, a, o, s;
			if (I.isFunction(e)) return this.each(function(t) {
				I(this).addClass(e.call(this, t, this.className))
			});
			if (e && typeof e == "string") {
				t = e.split(R);
				for (n = 0, i = this.length; n < i; n++) {
					r = this[n];
					if (r.nodeType === 1) if (!r.className && t.length === 1) r.className = e;
					else {
						a = " " + r.className + " ";
						for (o = 0, s = t.length; o < s; o++)~a.indexOf(" " + t[o] + " ") || (a += t[o] + " ");
						r.className = I.trim(a)
					}
				}
			}
			return this
		},
		removeClass: function(e) {
			var n, i, r, a, o, s, l;
			if (I.isFunction(e)) return this.each(function(t) {
				I(this).removeClass(e.call(this, t, this.className))
			});
			if (e && typeof e == "string" || e === t) {
				n = (e || "").split(R);
				for (i = 0, r = this.length; i < r; i++) {
					a = this[i];
					if (a.nodeType === 1 && a.className) if (e) {
						o = (" " + a.className + " ").replace(V, " ");
						for (s = 0, l = n.length; s < l; s++) o = o.replace(" " + n[s] + " ", " ");
						a.className = I.trim(o)
					} else a.className = ""
				}
			}
			return this
		},
		toggleClass: function(e, t) {
			var n = typeof e,
				i = typeof t == "boolean";
			if (I.isFunction(e)) return this.each(function(n) {
				I(this).toggleClass(e.call(this, n, this.className, t), t)
			});
			return this.each(function() {
				if (n === "string") {
					var r, a = 0,
						o = I(this),
						s = t,
						l = e.split(R);
					while (r = l[a++]) s = i ? s : !o.hasClass(r), o[s ? "addClass" : "removeClass"](r)
				} else if (n === "undefined" || n === "boolean") this.className && I._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : I._data(this, "__className__") || ""
			})
		},
		hasClass: function(e) {
			var t = " " + e + " ";
			for (var n = 0, i = this.length; n < i; n++) if ((" " + this[n].className + " ").replace(V, " ").indexOf(t) > -1) return !0;
			return !1
		},
		val: function(e) {
			var n, i, r = this[0];
			if (!arguments.length) {
				if (r) {
					n = I.valHooks[r.nodeName.toLowerCase()] || I.valHooks[r.type];
					if (n && "get" in n && (i = n.get(r, "value")) !== t) return i;
					i = r.value;
					return typeof i == "string" ? i.replace(U, "") : i == null ? "" : i
				}
				return t
			}
			var a = I.isFunction(e);
			return this.each(function(i) {
				var r = I(this),
					o;
				if (this.nodeType === 1) {
					a ? o = e.call(this, i, r.val()) : o = e, o == null ? o = "" : typeof o == "number" ? o += "" : I.isArray(o) && (o = I.map(o, function(e) {
						return e == null ? "" : e + ""
					})), n = I.valHooks[this.nodeName.toLowerCase()] || I.valHooks[this.type];
					if (!n || !("set" in n) || n.set(this, o, "value") === t) this.value = o
				}
			})
		}
	}), I.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = e.attributes.value;
					return !t || t.specified ? e.value : e.text
				}
			},
			select: {
				get: function(e) {
					var t, n = e.selectedIndex,
						i = [],
						r = e.options,
						a = e.type === "select-one";
					if (n < 0) return null;
					for (var o = a ? n : 0, s = a ? n + 1 : r.length; o < s; o++) {
						var l = r[o];
						if (l.selected && (I.support.optDisabled ? !l.disabled : l.getAttribute("disabled") === null) && (!l.parentNode.disabled || !I.nodeName(l.parentNode, "optgroup"))) {
							t = I(l).val();
							if (a) return t;
							i.push(t)
						}
					}
					if (a && !i.length && r.length) return I(r[n]).val();
					return i
				},
				set: function(e, t) {
					var n = I.makeArray(t);
					I(e).find("option").each(function() {
						this.selected = I.inArray(I(this).val(), n) >= 0
					}), n.length || (e.selectedIndex = -1);
					return n
				}
			}
		},
		attrFn: {
			val: !0,
			css: !0,
			html: !0,
			text: !0,
			data: !0,
			width: !0,
			height: !0,
			offset: !0
		},
		attrFix: {
			tabindex: "tabIndex"
		},
		attr: function(e, n, i, r) {
			var a = e.nodeType;
			if (!e || a === 3 || a === 8 || a === 2) return t;
			if (r && n in I.attrFn) return I(e)[n](i);
			if (!("getAttribute" in e)) return I.prop(e, n, i);
			var o, s, l = a !== 1 || !I.isXMLDoc(e);
			l && (n = I.attrFix[n] || n, s = I.attrHooks[n], s || ($.test(n) ? s = G : J && n !== "className" && (I.nodeName(e, "form") || X.test(n)) && (s = J)));
			if (i !== t) {
				if (i === null) {
					I.removeAttr(e, n);
					return t
				}
				if (s && "set" in s && l && (o = s.set(e, i, n)) !== t) return o;
				e.setAttribute(n, "" + i);
				return i
			}
			if (s && "get" in s && l && (o = s.get(e, n)) !== null) return o;
			o = e.getAttribute(n);
			return o === null ? t : o
		},
		removeAttr: function(e, t) {
			var n;
			e.nodeType === 1 && (t = I.attrFix[t] || t, I.support.getSetAttribute ? e.removeAttribute(t) : (I.attr(e, t, ""), e.removeAttributeNode(e.getAttributeNode(t))), $.test(t) && (n = I.propFix[t] || t) in e && (e[n] = !1))
		},
		attrHooks: {
			type: {
				set: function(e, t) {
					if (W.test(e.nodeName) && e.parentNode) I.error("type property can't be changed");
					else if (!I.support.radioValue && t === "radio" && I.nodeName(e, "input")) {
						var n = e.value;
						e.setAttribute("type", t), n && (e.value = n);
						return t
					}
				}
			},
			tabIndex: {
				get: function(e) {
					var n = e.getAttributeNode("tabIndex");
					return n && n.specified ? parseInt(n.value, 10) : z.test(e.nodeName) || q.test(e.nodeName) && e.href ? 0 : t
				}
			},
			value: {
				get: function(e, t) {
					if (J && I.nodeName(e, "button")) return J.get(e, t);
					return t in e ? e.value : null
				},
				set: function(e, t, n) {
					if (J && I.nodeName(e, "button")) return J.set(e, t, n);
					e.value = t
				}
			}
		},
		propFix: {
			tabindex: "tabIndex",
			readonly: "readOnly",
			"for": "htmlFor",
			"class": "className",
			maxlength: "maxLength",
			cellspacing: "cellSpacing",
			cellpadding: "cellPadding",
			rowspan: "rowSpan",
			colspan: "colSpan",
			usemap: "useMap",
			frameborder: "frameBorder",
			contenteditable: "contentEditable"
		},
		prop: function(e, n, i) {
			var r = e.nodeType;
			if (!e || r === 3 || r === 8 || r === 2) return t;
			var a, o, s = r !== 1 || !I.isXMLDoc(e);
			s && (n = I.propFix[n] || n, o = I.propHooks[n]);
			return i !== t ? o && "set" in o && (a = o.set(e, i, n)) !== t ? a : e[n] = i : o && "get" in o && (a = o.get(e, n)) !== t ? a : e[n]
		},
		propHooks: {}
	}), G = {
		get: function(e, n) {
			return I.prop(e, n) ? n.toLowerCase() : t
		},
		set: function(e, t, n) {
			var i;
			t === !1 ? I.removeAttr(e, n) : (i = I.propFix[n] || n, i in e && (e[i] = !0), e.setAttribute(n, n.toLowerCase()));
			return n
		}
	}, I.support.getSetAttribute || (I.attrFix = I.propFix, J = I.attrHooks.name = I.attrHooks.title = I.valHooks.button = {
		get: function(e, n) {
			var i;
			i = e.getAttributeNode(n);
			return i && i.nodeValue !== "" ? i.nodeValue : t
		},
		set: function(e, t, n) {
			var i = e.getAttributeNode(n);
			if (i) {
				i.nodeValue = t;
				return t
			}
		}
	}, I.each(["width", "height"], function(e, t) {
		I.attrHooks[t] = I.extend(I.attrHooks[t], {
			set: function(e, n) {
				if (n === "") {
					e.setAttribute(t, "auto");
					return n
				}
			}
		})
	})), I.support.hrefNormalized || I.each(["href", "src", "width", "height"], function(e, n) {
		I.attrHooks[n] = I.extend(I.attrHooks[n], {
			get: function(e) {
				var i = e.getAttribute(n, 2);
				return i === null ? t : i
			}
		})
	}), I.support.style || (I.attrHooks.style = {
		get: function(e) {
			return e.style.cssText.toLowerCase() || t
		},
		set: function(e, t) {
			return e.style.cssText = "" + t
		}
	}), I.support.optSelected || (I.propHooks.selected = I.extend(I.propHooks.selected, {
		get: function(e) {
			var t = e.parentNode;
			t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
		}
	})), I.support.checkOn || I.each(["radio", "checkbox"], function() {
		I.valHooks[this] = {
			get: function(e) {
				return e.getAttribute("value") === null ? "on" : e.value
			}
		}
	}), I.each(["radio", "checkbox"], function() {
		I.valHooks[this] = I.extend(I.valHooks[this], {
			set: function(e, t) {
				if (I.isArray(t)) return e.checked = I.inArray(I(e).val(), t) >= 0
			}
		})
	});
	var Y = /\.(.*)$/,
		K = /^(?:textarea|input|select)$/i,
		Z = /\./g,
		Q = / /g,
		ee = /[^\w\s.|`]/g,
		te = function(e) {
			return e.replace(ee, "\\$&")
		};
	I.event = {
		add: function(e, n, i, r) {
			if (e.nodeType !== 3 && e.nodeType !== 8) {
				if (i === !1) i = P;
				else if (!i) return;
				var a, o;
				i.handler && (a = i, i = a.handler), i.guid || (i.guid = I.guid++);
				var s = I._data(e);
				if (!s) return;
				var l = s.events,
					u = s.handle;
				l || (s.events = l = {}), u || (s.handle = u = function(e) {
					return typeof I != "undefined" && (!e || I.event.triggered !== e.type) ? I.event.handle.apply(u.elem, arguments) : t
				}), u.elem = e, n = n.split(" ");
				var c, d = 0,
					f;
				while (c = n[d++]) {
					o = a ? I.extend({}, a) : {
						handler: i,
						data: r
					}, c.indexOf(".") > -1 ? (f = c.split("."), c = f.shift(), o.namespace = f.slice(0).sort().join(".")) : (f = [], o.namespace = ""), o.type = c, o.guid || (o.guid = i.guid);
					var p = l[c],
						h = I.event.special[c] || {};
					if (!p) {
						p = l[c] = [];
						if (!h.setup || h.setup.call(e, r, f, u) === !1) e.addEventListener ? e.addEventListener(c, u, !1) : e.attachEvent && e.attachEvent("on" + c, u)
					}
					h.add && (h.add.call(e, o), o.handler.guid || (o.handler.guid = i.guid)), p.push(o), I.event.global[c] = !0
				}
				e = null
			}
		},
		global: {},
		remove: function(e, n, i, r) {
			if (e.nodeType !== 3 && e.nodeType !== 8) {
				i === !1 && (i = P);
				var a, o, s, l, u = 0,
					c, d, f, p, h, v, m, g = I.hasData(e) && I._data(e),
					y = g && g.events;
				if (!g || !y) return;
				n && n.type && (i = n.handler, n = n.type);
				if (!n || typeof n == "string" && n.charAt(0) === ".") {
					n = n || "";
					for (o in y) I.event.remove(e, o + n);
					return
				}
				n = n.split(" ");
				while (o = n[u++]) {
					m = o, v = null, c = o.indexOf(".") < 0, d = [], c || (d = o.split("."), o = d.shift(), f = new RegExp("(^|\\.)" + I.map(d.slice(0).sort(), te).join("\\.(?:.*\\.)?") + "(\\.|$)")), h = y[o];
					if (!h) continue;
					if (!i) {
						for (l = 0; l < h.length; l++) {
							v = h[l];
							if (c || f.test(v.namespace)) I.event.remove(e, m, v.handler, l), h.splice(l--, 1)
						}
						continue
					}
					p = I.event.special[o] || {};
					for (l = r || 0; l < h.length; l++) {
						v = h[l];
						if (i.guid === v.guid) {
							if (c || f.test(v.namespace)) r == null && h.splice(l--, 1), p.remove && p.remove.call(e, v);
							if (r != null) break
						}
					}
					if (h.length === 0 || r != null && h.length === 1)(!p.teardown || p.teardown.call(e, d) === !1) && I.removeEvent(e, o, g.handle), a = null, delete y[o]
				}
				if (I.isEmptyObject(y)) {
					var w = g.handle;
					w && (w.elem = null), delete g.events, delete g.handle, I.isEmptyObject(g) && I.removeData(e, t, !0)
				}
			}
		},
		customEvent: {
			getData: !0,
			setData: !0,
			changeData: !0
		},
		trigger: function(n, i, r, a) {
			var o = n.type || n,
				s = [],
				l;
			o.indexOf("!") >= 0 && (o = o.slice(0, -1), l = !0), o.indexOf(".") >= 0 && (s = o.split("."), o = s.shift(), s.sort());
			if ( !! r && !I.event.customEvent[o] || !! I.event.global[o]) {
				n = typeof n == "object" ? n[I.expando] ? n : new I.Event(o, n) : new I.Event(o), n.type = o, n.exclusive = l, n.namespace = s.join("."), n.namespace_re = new RegExp("(^|\\.)" + s.join("\\.(?:.*\\.)?") + "(\\.|$)");
				if (a || !r) n.preventDefault(), n.stopPropagation();
				if (!r) {
					I.each(I.cache, function() {
						var e = I.expando,
							t = this[e];
						t && t.events && t.events[o] && I.event.trigger(n, i, t.handle.elem)
					});
					return
				}
				if (r.nodeType === 3 || r.nodeType === 8) return;
				n.result = t, n.target = r, i = i != null ? I.makeArray(i) : [], i.unshift(n);
				var u = r,
					c = o.indexOf(":") < 0 ? "on" + o : "";
				do {
					var d = I._data(u, "handle");
					n.currentTarget = u, d && d.apply(u, i), c && I.acceptData(u) && u[c] && u[c].apply(u, i) === !1 && (n.result = !1, n.preventDefault()), u = u.parentNode || u.ownerDocument || u === n.target.ownerDocument && e
				} while (u && !n.isPropagationStopped());
				if (!n.isDefaultPrevented()) {
					var f, p = I.event.special[o] || {};
					if ((!p._default || p._default.call(r.ownerDocument, n) === !1) && (o !== "click" || !I.nodeName(r, "a")) && I.acceptData(r)) {
						try {
							c && r[o] && (f = r[c], f && (r[c] = null), I.event.triggered = o, r[o]())
						} catch (h) {}
						f && (r[c] = f), I.event.triggered = t
					}
				}
				return n.result
			}
		},
		handle: function(n) {
			n = I.event.fix(n || e.event);
			var i = ((I._data(this, "events") || {})[n.type] || []).slice(0),
				r = !n.exclusive && !n.namespace,
				a = Array.prototype.slice.call(arguments, 0);
			a[0] = n, n.currentTarget = this;
			for (var o = 0, s = i.length; o < s; o++) {
				var l = i[o];
				if (r || n.namespace_re.test(l.namespace)) {
					n.handler = l.handler, n.data = l.data, n.handleObj = l;
					var u = l.handler.apply(this, a);
					u !== t && (n.result = u, u === !1 && (n.preventDefault(), n.stopPropagation()));
					if (n.isImmediatePropagationStopped()) break
				}
			}
			return n.result
		},
		props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
		fix: function(e) {
			if (e[I.expando]) return e;
			var n = e;
			e = I.Event(n);
			for (var i = this.props.length, r; i;) r = this.props[--i], e[r] = n[r];
			e.target || (e.target = e.srcElement || F), e.target.nodeType === 3 && (e.target = e.target.parentNode), !e.relatedTarget && e.fromElement && (e.relatedTarget = e.fromElement === e.target ? e.toElement : e.fromElement);
			if (e.pageX == null && e.clientX != null) {
				var a = e.target.ownerDocument || F,
					o = a.documentElement,
					s = a.body;
				e.pageX = e.clientX + (o && o.scrollLeft || s && s.scrollLeft || 0) - (o && o.clientLeft || s && s.clientLeft || 0), e.pageY = e.clientY + (o && o.scrollTop || s && s.scrollTop || 0) - (o && o.clientTop || s && s.clientTop || 0)
			}
			e.which == null && (e.charCode != null || e.keyCode != null) && (e.which = e.charCode != null ? e.charCode : e.keyCode), !e.metaKey && e.ctrlKey && (e.metaKey = e.ctrlKey), !e.which && e.button !== t && (e.which = e.button & 1 ? 1 : e.button & 2 ? 3 : e.button & 4 ? 2 : 0);
			return e
		},
		guid: 1e8,
		proxy: I.proxy,
		special: {
			ready: {
				setup: I.bindReady,
				teardown: I.noop
			},
			live: {
				add: function(e) {
					I.event.add(this, S(e.origType, e.selector), I.extend({}, e, {
						handler: j,
						guid: e.handler.guid
					}))
				},
				remove: function(e) {
					I.event.remove(this, S(e.origType, e.selector), e)
				}
			},
			beforeunload: {
				setup: function(e, t, n) {
					I.isWindow(this) && (this.onbeforeunload = n)
				},
				teardown: function(e, t) {
					this.onbeforeunload === t && (this.onbeforeunload = null)
				}
			}
		}
	}, I.removeEvent = F.removeEventListener ?
	function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n, !1)
	} : function(e, t, n) {
		e.detachEvent && e.detachEvent("on" + t, n)
	}, I.Event = function(e, t) {
		if (!this.preventDefault) return new I.Event(e, t);
		e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? C : P) : this.type = e, t && I.extend(this, t), this.timeStamp = I.now(), this[I.expando] = !0
	}, I.Event.prototype = {
		preventDefault: function() {
			this.isDefaultPrevented = C;
			var e = this.originalEvent;
			!e || (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
		},
		stopPropagation: function() {
			this.isPropagationStopped = C;
			var e = this.originalEvent;
			!e || (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
		},
		stopImmediatePropagation: function() {
			this.isImmediatePropagationStopped = C, this.stopPropagation()
		},
		isDefaultPrevented: P,
		isPropagationStopped: P,
		isImmediatePropagationStopped: P
	};
	var ne = function(e) {
			var t = e.relatedTarget,
				n = !1,
				i = e.type;
			e.type = e.data, t !== this && (t && (n = I.contains(this, t)), n || (I.event.handle.apply(this, arguments), e.type = i))
		},
		ie = function(e) {
			e.type = e.data, I.event.handle.apply(this, arguments)
		};
	I.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	}, function(e, t) {
		I.event.special[e] = {
			setup: function(n) {
				I.event.add(this, t, n && n.selector ? ie : ne, e)
			},
			teardown: function(e) {
				I.event.remove(this, t, e && e.selector ? ie : ne)
			}
		}
	}), I.support.submitBubbles || (I.event.special.submit = {
		setup: function(e, t) {
			if (!I.nodeName(this, "form")) I.event.add(this, "click.specialSubmit", function(e) {
				var t = e.target,
					n = t.type;
				(n === "submit" || n === "image") && I(t).closest("form").length && k("submit", this, arguments)
			}), I.event.add(this, "keypress.specialSubmit", function(e) {
				var t = e.target,
					n = t.type;
				(n === "text" || n === "password") && I(t).closest("form").length && e.keyCode === 13 && k("submit", this, arguments)
			});
			else return !1
		},
		teardown: function(e) {
			I.event.remove(this, ".specialSubmit")
		}
	});
	if (!I.support.changeBubbles) {
		var re, ae = function(e) {
				var t = e.type,
					n = e.value;
				t === "radio" || t === "checkbox" ? n = e.checked : t === "select-multiple" ? n = e.selectedIndex > -1 ? I.map(e.options, function(e) {
					return e.selected
				}).join("-") : "" : I.nodeName(e, "select") && (n = e.selectedIndex);
				return n
			},
			oe = function(e) {
				var n = e.target,
					i, r;
				if ( !! K.test(n.nodeName) && !n.readOnly) {
					i = I._data(n, "_change_data"), r = ae(n), (e.type !== "focusout" || n.type !== "radio") && I._data(n, "_change_data", r);
					if (i === t || r === i) return;
					if (i != null || r) e.type = "change", e.liveFired = t, I.event.trigger(e, arguments[1], n)
				}
			};
		I.event.special.change = {
			filters: {
				focusout: oe,
				beforedeactivate: oe,
				click: function(e) {
					var t = e.target,
						n = I.nodeName(t, "input") ? t.type : "";
					(n === "radio" || n === "checkbox" || I.nodeName(t, "select")) && oe.call(this, e)
				},
				keydown: function(e) {
					var t = e.target,
						n = I.nodeName(t, "input") ? t.type : "";
					(e.keyCode === 13 && !I.nodeName(t, "textarea") || e.keyCode === 32 && (n === "checkbox" || n === "radio") || n === "select-multiple") && oe.call(this, e)
				},
				beforeactivate: function(e) {
					var t = e.target;
					I._data(t, "_change_data", ae(t))
				}
			},
			setup: function(e, t) {
				if (this.type === "file") return !1;
				for (var n in re) I.event.add(this, n + ".specialChange", re[n]);
				return K.test(this.nodeName)
			},
			teardown: function(e) {
				I.event.remove(this, ".specialChange");
				return K.test(this.nodeName)
			}
		}, re = I.event.special.change.filters, re.focus = re.beforeactivate
	}
	I.support.focusinBubbles || I.each({
		focus: "focusin",
		blur: "focusout"
	}, function(e, t) {
		function n(e) {
			var n = I.event.fix(e);
			n.type = t, n.originalEvent = {}, I.event.trigger(n, null, n.target), n.isDefaultPrevented() && e.preventDefault()
		}
		var i = 0;
		I.event.special[t] = {
			setup: function() {
				i++ === 0 && F.addEventListener(e, n, !0)
			},
			teardown: function() {
				--i === 0 && F.removeEventListener(e, n, !0)
			}
		}
	}), I.each(["bind", "one"], function(e, n) {
		I.fn[n] = function(e, i, r) {
			var a;
			if (typeof e == "object") {
				for (var o in e) this[n](o, i, e[o], r);
				return this
			}
			if (arguments.length === 2 || i === !1) r = i, i = t;
			n === "one" ? (a = function(e) {
				I(this).unbind(e, a);
				return r.apply(this, arguments)
			}, a.guid = r.guid || I.guid++) : a = r;
			if (e === "unload" && n !== "one") this.one(e, i, r);
			else for (var s = 0, l = this.length; s < l; s++) I.event.add(this[s], e, a, i);
			return this
		}
	}), I.fn.extend({
		unbind: function(e, t) {
			if (typeof e == "object" && !e.preventDefault) for (var n in e) this.unbind(n, e[n]);
			else for (var i = 0, r = this.length; i < r; i++) I.event.remove(this[i], e, t);
			return this
		},
		delegate: function(e, t, n, i) {
			return this.live(t, n, i, e)
		},
		undelegate: function(e, t, n) {
			return arguments.length === 0 ? this.unbind("live") : this.die(t, null, n, e)
		},
		trigger: function(e, t) {
			return this.each(function() {
				I.event.trigger(e, t, this)
			})
		},
		triggerHandler: function(e, t) {
			if (this[0]) return I.event.trigger(e, t, this[0], !0)
		},
		toggle: function(e) {
			var t = arguments,
				n = e.guid || I.guid++,
				i = 0,
				r = function(n) {
					var r = (I.data(this, "lastToggle" + e.guid) || 0) % i;
					I.data(this, "lastToggle" + e.guid, r + 1), n.preventDefault();
					return t[r].apply(this, arguments) || !1
				};
			r.guid = n;
			while (i < t.length) t[i++].guid = n;
			return this.click(r)
		},
		hover: function(e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		}
	});
	var se = {
		focus: "focusin",
		blur: "focusout",
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	};
	I.each(["live", "die"], function(e, n) {
		I.fn[n] = function(e, i, r, a) {
			var o, s = 0,
				l, u, c, d = a || this.selector,
				f = a ? this : I(this.context);
			if (typeof e == "object" && !e.preventDefault) {
				for (var p in e) f[n](p, i, e[p], d);
				return this
			}
			if (n === "die" && !e && a && a.charAt(0) === ".") {
				f.unbind(a);
				return this
			}
			if (i === !1 || I.isFunction(i)) r = i || P, i = t;
			e = (e || "").split(" ");
			while ((o = e[s++]) != null) {
				l = Y.exec(o), u = "", l && (u = l[0], o = o.replace(Y, ""));
				if (o === "hover") {
					e.push("mouseenter" + u, "mouseleave" + u);
					continue
				}
				c = o, se[o] ? (e.push(se[o] + u), o = o + u) : o = (se[o] || o) + u;
				if (n === "live") for (var h = 0, v = f.length; h < v; h++) I.event.add(f[h], "live." + S(o, d), {
					data: i,
					selector: d,
					handler: r,
					origType: o,
					origHandler: r,
					preType: c
				});
				else f.unbind("live." + S(o, d), r)
			}
			return this
		}
	}), I.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "), function(e, t) {
		I.fn[t] = function(e, n) {
			n == null && (n = e, e = null);
			return arguments.length > 0 ? this.bind(t, e, n) : this.trigger(t)
		}, I.attrFn && (I.attrFn[t] = !0)
	}), function() {
		function e(e, t, n, i, r, a) {
			for (var o = 0, s = i.length; o < s; o++) {
				var l = i[o];
				if (l) {
					var u = !1;
					l = l[e];
					while (l) {
						if (l.sizcache === n) {
							u = i[l.sizset];
							break
						}
						if (l.nodeType === 1) {
							a || (l.sizcache = n, l.sizset = o);
							if (typeof t != "string") {
								if (l === t) {
									u = !0;
									break
								}
							} else if (c.filter(t, [l]).length > 0) {
								u = l;
								break
							}
						}
						l = l[e]
					}
					i[o] = u
				}
			}
		}
		function n(e, t, n, i, r, a) {
			for (var o = 0, s = i.length; o < s; o++) {
				var l = i[o];
				if (l) {
					var u = !1;
					l = l[e];
					while (l) {
						if (l.sizcache === n) {
							u = i[l.sizset];
							break
						}
						l.nodeType === 1 && !a && (l.sizcache = n, l.sizset = o);
						if (l.nodeName.toLowerCase() === t) {
							u = l;
							break
						}
						l = l[e]
					}
					i[o] = u
				}
			}
		}
		var i = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
			r = 0,
			a = Object.prototype.toString,
			o = !1,
			s = !0,
			l = /\\/g,
			u = /\W/;
		[0, 0].sort(function() {
			s = !1;
			return 0
		});
		var c = function(e, t, n, r) {
				n = n || [], t = t || F;
				var o = t;
				if (t.nodeType !== 1 && t.nodeType !== 9) return [];
				if (!e || typeof e != "string") return n;
				var s, l, u, p, h, m, g, y, b = !0,
					_ = c.isXML(t),
					T = [],
					x = e;
				do {
					i.exec(""), s = i.exec(x);
					if (s) {
						x = s[3], T.push(s[1]);
						if (s[2]) {
							p = s[3];
							break
						}
					}
				} while (s);
				if (T.length > 1 && f.exec(e)) if (T.length === 2 && d.relative[T[0]]) l = w(T[0] + T[1], t);
				else {
					l = d.relative[T[0]] ? [t] : c(T.shift(), t);
					while (T.length) e = T.shift(), d.relative[e] && (e += T.shift()), l = w(e, l)
				} else {
					!r && T.length > 1 && t.nodeType === 9 && !_ && d.match.ID.test(T[0]) && !d.match.ID.test(T[T.length - 1]) && (h = c.find(T.shift(), t, _), t = h.expr ? c.filter(h.expr, h.set)[0] : h.set[0]);
					if (t) {
						h = r ? {
							expr: T.pop(),
							set: v(r)
						} : c.find(T.pop(), T.length === 1 && (T[0] === "~" || T[0] === "+") && t.parentNode ? t.parentNode : t, _), l = h.expr ? c.filter(h.expr, h.set) : h.set, T.length > 0 ? u = v(l) : b = !1;
						while (T.length) m = T.pop(), g = m, d.relative[m] ? g = T.pop() : m = "", g == null && (g = t), d.relative[m](u, g, _)
					} else u = T = []
				}
				u || (u = l), u || c.error(m || e);
				if (a.call(u) === "[object Array]") if (!b) n.push.apply(n, u);
				else if (t && t.nodeType === 1) for (y = 0; u[y] != null; y++) u[y] && (u[y] === !0 || u[y].nodeType === 1 && c.contains(t, u[y])) && n.push(l[y]);
				else for (y = 0; u[y] != null; y++) u[y] && u[y].nodeType === 1 && n.push(l[y]);
				else v(u, n);
				p && (c(p, o, n, r), c.uniqueSort(n));
				return n
			};
		c.uniqueSort = function(e) {
			if (g) {
				o = s, e.sort(g);
				if (o) for (var t = 1; t < e.length; t++) e[t] === e[t - 1] && e.splice(t--, 1)
			}
			return e
		}, c.matches = function(e, t) {
			return c(e, null, null, t)
		}, c.matchesSelector = function(e, t) {
			return c(t, null, null, [e]).length > 0
		}, c.find = function(e, t, n) {
			var i;
			if (!e) return [];
			for (var r = 0, a = d.order.length; r < a; r++) {
				var o, s = d.order[r];
				if (o = d.leftMatch[s].exec(e)) {
					var u = o[1];
					o.splice(1, 1);
					if (u.substr(u.length - 1) !== "\\") {
						o[1] = (o[1] || "").replace(l, ""), i = d.find[s](o, t, n);
						if (i != null) {
							e = e.replace(d.match[s], "");
							break
						}
					}
				}
			}
			i || (i = typeof t.getElementsByTagName != "undefined" ? t.getElementsByTagName("*") : []);
			return {
				set: i,
				expr: e
			}
		}, c.filter = function(e, n, i, r) {
			var a, o, s = e,
				l = [],
				u = n,
				f = n && n[0] && c.isXML(n[0]);
			while (e && n.length) {
				for (var p in d.filter) if ((a = d.leftMatch[p].exec(e)) != null && a[2]) {
					var h, v, m = d.filter[p],
						g = a[1];
					o = !1, a.splice(1, 1);
					if (g.substr(g.length - 1) === "\\") continue;
					u === l && (l = []);
					if (d.preFilter[p]) {
						a = d.preFilter[p](a, u, i, l, r, f);
						if (!a) o = h = !0;
						else if (a === !0) continue
					}
					if (a) for (var y = 0;
					(v = u[y]) != null; y++) if (v) {
						h = m(v, a, y, u);
						var w = r ^ !! h;
						i && h != null ? w ? o = !0 : u[y] = !1 : w && (l.push(v), o = !0)
					}
					if (h !== t) {
						i || (u = l), e = e.replace(d.match[p], "");
						if (!o) return [];
						break
					}
				}
				if (e === s) if (o == null) c.error(e);
				else break;
				s = e
			}
			return u
		}, c.error = function(e) {
			throw "Syntax error, unrecognized expression: " + e
		};
		var d = c.selectors = {
			order: ["ID", "NAME", "TAG"],
			match: {
				ID: /#((?:[\wÀ-￿\-]|\\.)+)/,
				CLASS: /\.((?:[\wÀ-￿\-]|\\.)+)/,
				NAME: /\[name=['"]*((?:[\wÀ-￿\-]|\\.)+)['"]*\]/,
				ATTR: /\[\s*((?:[\wÀ-￿\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\wÀ-￿\-]|\\.)*)|)|)\s*\]/,
				TAG: /^((?:[\wÀ-￿\*\-]|\\.)+)/,
				CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
				POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
				PSEUDO: /:((?:[\wÀ-￿\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
			},
			leftMatch: {},
			attrMap: {
				"class": "className",
				"for": "htmlFor"
			},
			attrHandle: {
				href: function(e) {
					return e.getAttribute("href")
				},
				type: function(e) {
					return e.getAttribute("type")
				}
			},
			relative: {
				"+": function(e, t) {
					var n = typeof t == "string",
						i = n && !u.test(t),
						r = n && !i;
					i && (t = t.toLowerCase());
					for (var a = 0, o = e.length, s; a < o; a++) if (s = e[a]) {
						while ((s = s.previousSibling) && s.nodeType !== 1);
						e[a] = r || s && s.nodeName.toLowerCase() === t ? s || !1 : s === t
					}
					r && c.filter(t, e, !0)
				},
				">": function(e, t) {
					var n, i = typeof t == "string",
						r = 0,
						a = e.length;
					if (i && !u.test(t)) {
						t = t.toLowerCase();
						for (; r < a; r++) {
							n = e[r];
							if (n) {
								var o = n.parentNode;
								e[r] = o.nodeName.toLowerCase() === t ? o : !1
							}
						}
					} else {
						for (; r < a; r++) n = e[r], n && (e[r] = i ? n.parentNode : n.parentNode === t);
						i && c.filter(t, e, !0)
					}
				},
				"": function(t, i, a) {
					var o, s = r++,
						l = e;
					typeof i == "string" && !u.test(i) && (i = i.toLowerCase(), o = i, l = n), l("parentNode", i, s, t, o, a)
				},
				"~": function(t, i, a) {
					var o, s = r++,
						l = e;
					typeof i == "string" && !u.test(i) && (i = i.toLowerCase(), o = i, l = n), l("previousSibling", i, s, t, o, a)
				}
			},
			find: {
				ID: function(e, t, n) {
					if (typeof t.getElementById != "undefined" && !n) {
						var i = t.getElementById(e[1]);
						return i && i.parentNode ? [i] : []
					}
				},
				NAME: function(e, t) {
					if (typeof t.getElementsByName != "undefined") {
						var n = [],
							i = t.getElementsByName(e[1]);
						for (var r = 0, a = i.length; r < a; r++) i[r].getAttribute("name") === e[1] && n.push(i[r]);
						return n.length === 0 ? null : n
					}
				},
				TAG: function(e, t) {
					if (typeof t.getElementsByTagName != "undefined") return t.getElementsByTagName(e[1])
				}
			},
			preFilter: {
				CLASS: function(e, t, n, i, r, a) {
					e = " " + e[1].replace(l, "") + " ";
					if (a) return e;
					for (var o = 0, s;
					(s = t[o]) != null; o++) s && (r ^ (s.className && (" " + s.className + " ").replace(/[\t\n\r]/g, " ").indexOf(e) >= 0) ? n || i.push(s) : n && (t[o] = !1));
					return !1
				},
				ID: function(e) {
					return e[1].replace(l, "")
				},
				TAG: function(e, t) {
					return e[1].replace(l, "").toLowerCase()
				},
				CHILD: function(e) {
					if (e[1] === "nth") {
						e[2] || c.error(e[0]), e[2] = e[2].replace(/^\+|\s*/g, "");
						var t = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(e[2] === "even" && "2n" || e[2] === "odd" && "2n+1" || !/\D/.test(e[2]) && "0n+" + e[2] || e[2]);
						e[2] = t[1] + (t[2] || 1) - 0, e[3] = t[3] - 0
					} else e[2] && c.error(e[0]);
					e[0] = r++;
					return e
				},
				ATTR: function(e, t, n, i, r, a) {
					var o = e[1] = e[1].replace(l, "");
					!a && d.attrMap[o] && (e[1] = d.attrMap[o]), e[4] = (e[4] || e[5] || "").replace(l, ""), e[2] === "~=" && (e[4] = " " + e[4] + " ");
					return e
				},
				PSEUDO: function(e, t, n, r, a) {
					if (e[1] === "not") if ((i.exec(e[3]) || "").length > 1 || /^\w/.test(e[3])) e[3] = c(e[3], null, null, t);
					else {
						var o = c.filter(e[3], t, n, !0 ^ a);
						n || r.push.apply(r, o);
						return !1
					} else if (d.match.POS.test(e[0]) || d.match.CHILD.test(e[0])) return !0;
					return e
				},
				POS: function(e) {
					e.unshift(!0);
					return e
				}
			},
			filters: {
				enabled: function(e) {
					return e.disabled === !1 && e.type !== "hidden"
				},
				disabled: function(e) {
					return e.disabled === !0
				},
				checked: function(e) {
					return e.checked === !0
				},
				selected: function(e) {
					e.parentNode && e.parentNode.selectedIndex;
					return e.selected === !0
				},
				parent: function(e) {
					return !!e.firstChild
				},
				empty: function(e) {
					return !e.firstChild
				},
				has: function(e, t, n) {
					return !!c(n[3], e).length
				},
				header: function(e) {
					return /h\d/i.test(e.nodeName)
				},
				text: function(e) {
					var t = e.getAttribute("type"),
						n = e.type;
					return e.nodeName.toLowerCase() === "input" && "text" === n && (t === n || t === null)
				},
				radio: function(e) {
					return e.nodeName.toLowerCase() === "input" && "radio" === e.type
				},
				checkbox: function(e) {
					return e.nodeName.toLowerCase() === "input" && "checkbox" === e.type
				},
				file: function(e) {
					return e.nodeName.toLowerCase() === "input" && "file" === e.type
				},
				password: function(e) {
					return e.nodeName.toLowerCase() === "input" && "password" === e.type
				},
				submit: function(e) {
					var t = e.nodeName.toLowerCase();
					return (t === "input" || t === "button") && "submit" === e.type
				},
				image: function(e) {
					return e.nodeName.toLowerCase() === "input" && "image" === e.type
				},
				reset: function(e) {
					var t = e.nodeName.toLowerCase();
					return (t === "input" || t === "button") && "reset" === e.type
				},
				button: function(e) {
					var t = e.nodeName.toLowerCase();
					return t === "input" && "button" === e.type || t === "button"
				},
				input: function(e) {
					return /input|select|textarea|button/i.test(e.nodeName)
				},
				focus: function(e) {
					return e === e.ownerDocument.activeElement
				}
			},
			setFilters: {
				first: function(e, t) {
					return t === 0
				},
				last: function(e, t, n, i) {
					return t === i.length - 1
				},
				even: function(e, t) {
					return t % 2 === 0
				},
				odd: function(e, t) {
					return t % 2 === 1
				},
				lt: function(e, t, n) {
					return t < n[3] - 0
				},
				gt: function(e, t, n) {
					return t > n[3] - 0
				},
				nth: function(e, t, n) {
					return n[3] - 0 === t
				},
				eq: function(e, t, n) {
					return n[3] - 0 === t
				}
			},
			filter: {
				PSEUDO: function(e, t, n, i) {
					var r = t[1],
						a = d.filters[r];
					if (a) return a(e, n, t, i);
					if (r === "contains") return (e.textContent || e.innerText || c.getText([e]) || "").indexOf(t[3]) >= 0;
					if (r === "not") {
						var o = t[3];
						for (var s = 0, l = o.length; s < l; s++) if (o[s] === e) return !1;
						return !0
					}
					c.error(r)
				},
				CHILD: function(e, t) {
					var n = t[1],
						i = e;
					switch (n) {
					case "only":
					case "first":
						while (i = i.previousSibling) if (i.nodeType === 1) return !1;
						if (n === "first") return !0;
						i = e;
					case "last":
						while (i = i.nextSibling) if (i.nodeType === 1) return !1;
						return !0;
					case "nth":
						var r = t[2],
							a = t[3];
						if (r === 1 && a === 0) return !0;
						var o = t[0],
							s = e.parentNode;
						if (s && (s.sizcache !== o || !e.nodeIndex)) {
							var l = 0;
							for (i = s.firstChild; i; i = i.nextSibling) i.nodeType === 1 && (i.nodeIndex = ++l);
							s.sizcache = o
						}
						var u = e.nodeIndex - a;
						return r === 0 ? u === 0 : u % r === 0 && u / r >= 0
					}
				},
				ID: function(e, t) {
					return e.nodeType === 1 && e.getAttribute("id") === t
				},
				TAG: function(e, t) {
					return t === "*" && e.nodeType === 1 || e.nodeName.toLowerCase() === t
				},
				CLASS: function(e, t) {
					return (" " + (e.className || e.getAttribute("class")) + " ").indexOf(t) > -1
				},
				ATTR: function(e, t) {
					var n = t[1],
						i = d.attrHandle[n] ? d.attrHandle[n](e) : e[n] != null ? e[n] : e.getAttribute(n),
						r = i + "",
						a = t[2],
						o = t[4];
					return i == null ? a === "!=" : a === "=" ? r === o : a === "*=" ? r.indexOf(o) >= 0 : a === "~=" ? (" " + r + " ").indexOf(o) >= 0 : o ? a === "!=" ? r !== o : a === "^=" ? r.indexOf(o) === 0 : a === "$=" ? r.substr(r.length - o.length) === o : a === "|=" ? r === o || r.substr(0, o.length + 1) === o + "-" : !1 : r && i !== !1
				},
				POS: function(e, t, n, i) {
					var r = t[2],
						a = d.setFilters[r];
					if (a) return a(e, n, t, i)
				}
			}
		},
			f = d.match.POS,
			p = function(e, t) {
				return "\\" + (t - 0 + 1)
			};
		for (var h in d.match) d.match[h] = new RegExp(d.match[h].source + /(?![^\[]*\])(?![^\(]*\))/.source), d.leftMatch[h] = new RegExp(/(^(?:.|\r|\n)*?)/.source + d.match[h].source.replace(/\\(\d+)/g, p));
		var v = function(e, t) {
				e = Array.prototype.slice.call(e, 0);
				if (t) {
					t.push.apply(t, e);
					return t
				}
				return e
			};
		try {
			Array.prototype.slice.call(F.documentElement.childNodes, 0)[0].nodeType
		} catch (m) {
			v = function(e, t) {
				var n = 0,
					i = t || [];
				if (a.call(e) === "[object Array]") Array.prototype.push.apply(i, e);
				else if (typeof e.length == "number") for (var r = e.length; n < r; n++) i.push(e[n]);
				else for (; e[n]; n++) i.push(e[n]);
				return i
			}
		}
		var g, y;
		F.documentElement.compareDocumentPosition ? g = function(e, t) {
			if (e === t) {
				o = !0;
				return 0
			}
			if (!e.compareDocumentPosition || !t.compareDocumentPosition) return e.compareDocumentPosition ? -1 : 1;
			return e.compareDocumentPosition(t) & 4 ? -1 : 1
		} : (g = function(e, t) {
			if (e === t) {
				o = !0;
				return 0
			}
			if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
			var n, i, r = [],
				a = [],
				s = e.parentNode,
				l = t.parentNode,
				u = s;
			if (s === l) return y(e, t);
			if (!s) return -1;
			if (!l) return 1;
			while (u) r.unshift(u), u = u.parentNode;
			u = l;
			while (u) a.unshift(u), u = u.parentNode;
			n = r.length, i = a.length;
			for (var c = 0; c < n && c < i; c++) if (r[c] !== a[c]) return y(r[c], a[c]);
			return c === n ? y(e, a[c], -1) : y(r[c], t, 1)
		}, y = function(e, t, n) {
			if (e === t) return n;
			var i = e.nextSibling;
			while (i) {
				if (i === t) return -1;
				i = i.nextSibling
			}
			return 1
		}), c.getText = function(e) {
			var t = "",
				n;
			for (var i = 0; e[i]; i++) n = e[i], n.nodeType === 3 || n.nodeType === 4 ? t += n.nodeValue : n.nodeType !== 8 && (t += c.getText(n.childNodes));
			return t
		}, function() {
			var e = F.createElement("div"),
				n = "script" + (new Date).getTime(),
				i = F.documentElement;
			e.innerHTML = "<a name='" + n + "'/>", i.insertBefore(e, i.firstChild), F.getElementById(n) && (d.find.ID = function(e, n, i) {
				if (typeof n.getElementById != "undefined" && !i) {
					var r = n.getElementById(e[1]);
					return r ? r.id === e[1] || typeof r.getAttributeNode != "undefined" && r.getAttributeNode("id").nodeValue === e[1] ? [r] : t : []
				}
			}, d.filter.ID = function(e, t) {
				var n = typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id");
				return e.nodeType === 1 && n && n.nodeValue === t
			}), i.removeChild(e), i = e = null
		}(), function() {
			var e = F.createElement("div");
			e.appendChild(F.createComment("")), e.getElementsByTagName("*").length > 0 && (d.find.TAG = function(e, t) {
				var n = t.getElementsByTagName(e[1]);
				if (e[1] === "*") {
					var i = [];
					for (var r = 0; n[r]; r++) n[r].nodeType === 1 && i.push(n[r]);
					n = i
				}
				return n
			}), e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute != "undefined" && e.firstChild.getAttribute("href") !== "#" && (d.attrHandle.href = function(e) {
				return e.getAttribute("href", 2)
			}), e = null
		}(), F.querySelectorAll &&
		function() {
			var e = c,
				t = F.createElement("div"),
				n = "__sizzle__";
			t.innerHTML = "<p class='TEST'></p>";
			if (!t.querySelectorAll || t.querySelectorAll(".TEST").length !== 0) {
				c = function(t, i, r, a) {
					i = i || F;
					if (!a && !c.isXML(i)) {
						var o = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t);
						if (o && (i.nodeType === 1 || i.nodeType === 9)) {
							if (o[1]) return v(i.getElementsByTagName(t), r);
							if (o[2] && d.find.CLASS && i.getElementsByClassName) return v(i.getElementsByClassName(o[2]), r)
						}
						if (i.nodeType === 9) {
							if (t === "body" && i.body) return v([i.body], r);
							if (o && o[3]) {
								var s = i.getElementById(o[3]);
								if (!s || !s.parentNode) return v([], r);
								if (s.id === o[3]) return v([s], r)
							}
							try {
								return v(i.querySelectorAll(t), r)
							} catch (l) {}
						} else if (i.nodeType === 1 && i.nodeName.toLowerCase() !== "object") {
							var u = i,
								f = i.getAttribute("id"),
								p = f || n,
								h = i.parentNode,
								m = /^\s*[+~]/.test(t);
							f ? p = p.replace(/'/g, "\\$&") : i.setAttribute("id", p), m && h && (i = i.parentNode);
							try {
								if (!m || h) return v(i.querySelectorAll("[id='" + p + "'] " + t), r)
							} catch (g) {} finally {
								f || u.removeAttribute("id")
							}
						}
					}
					return e(t, i, r, a)
				};
				for (var i in e) c[i] = e[i];
				t = null
			}
		}(), function() {
			var e = F.documentElement,
				t = e.matchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.msMatchesSelector;
			if (t) {
				var n = !t.call(F.createElement("div"), "div"),
					i = !1;
				try {
					t.call(F.documentElement, "[test!='']:sizzle")
				} catch (r) {
					i = !0
				}
				c.matchesSelector = function(e, r) {
					r = r.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
					if (!c.isXML(e)) try {
						if (i || !d.match.PSEUDO.test(r) && !/!=/.test(r)) {
							var a = t.call(e, r);
							if (a || !n || e.document && e.document.nodeType !== 11) return a
						}
					} catch (o) {}
					return c(r, null, null, [e]).length > 0
				}
			}
		}(), function() {
			var e = F.createElement("div");
			e.innerHTML = "<div class='test e'></div><div class='test'></div>";
			if ( !! e.getElementsByClassName && e.getElementsByClassName("e").length !== 0) {
				e.lastChild.className = "e";
				if (e.getElementsByClassName("e").length === 1) return;
				d.order.splice(1, 0, "CLASS"), d.find.CLASS = function(e, t, n) {
					if (typeof t.getElementsByClassName != "undefined" && !n) return t.getElementsByClassName(e[1])
				}, e = null
			}
		}(), F.documentElement.contains ? c.contains = function(e, t) {
			return e !== t && (e.contains ? e.contains(t) : !0)
		} : F.documentElement.compareDocumentPosition ? c.contains = function(e, t) {
			return !!(e.compareDocumentPosition(t) & 16)
		} : c.contains = function() {
			return !1
		}, c.isXML = function(e) {
			var t = (e ? e.ownerDocument || e : 0).documentElement;
			return t ? t.nodeName !== "HTML" : !1
		};
		var w = function(e, t) {
				var n, i = [],
					r = "",
					a = t.nodeType ? [t] : t;
				while (n = d.match.PSEUDO.exec(e)) r += n[0], e = e.replace(d.match.PSEUDO, "");
				e = d.relative[e] ? e + "*" : e;
				for (var o = 0, s = a.length; o < s; o++) c(e, a[o], i);
				return c.filter(r, i)
			};
		I.find = c, I.expr = c.selectors, I.expr[":"] = I.expr.filters, I.unique = c.uniqueSort, I.text = c.getText, I.isXMLDoc = c.isXML, I.contains = c.contains
	}();
	var le = /Until$/,
		ue = /^(?:parents|prevUntil|prevAll)/,
		ce = /,/,
		de = /^.[^:#\[\.,]*$/,
		fe = Array.prototype.slice,
		pe = I.expr.match.POS,
		he = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	I.fn.extend({
		find: function(e) {
			var t = this,
				n, i;
			if (typeof e != "string") return I(e).filter(function() {
				for (n = 0, i = t.length; n < i; n++) if (I.contains(t[n], this)) return !0
			});
			var r = this.pushStack("", "find", e),
				a, o, s;
			for (n = 0, i = this.length; n < i; n++) {
				a = r.length, I.find(e, this[n], r);
				if (n > 0) for (o = a; o < r.length; o++) for (s = 0; s < a; s++) if (r[s] === r[o]) {
					r.splice(o--, 1);
					break
				}
			}
			return r
		},
		has: function(e) {
			var t = I(e);
			return this.filter(function() {
				for (var e = 0, n = t.length; e < n; e++) if (I.contains(this, t[e])) return !0
			})
		},
		not: function(e) {
			return this.pushStack(T(this, e, !1), "not", e)
		},
		filter: function(e) {
			return this.pushStack(T(this, e, !0), "filter", e)
		},
		is: function(e) {
			return !!e && (typeof e == "string" ? I.filter(e, this).length > 0 : this.filter(e).length > 0)
		},
		closest: function(e, t) {
			var n = [],
				i, r, a = this[0];
			if (I.isArray(e)) {
				var o, s, l = {},
					u = 1;
				if (a && e.length) {
					for (i = 0, r = e.length; i < r; i++) s = e[i], l[s] || (l[s] = pe.test(s) ? I(s, t || this.context) : s);
					while (a && a.ownerDocument && a !== t) {
						for (s in l) o = l[s], (o.jquery ? o.index(a) > -1 : I(a).is(o)) && n.push({
							selector: s,
							elem: a,
							level: u
						});
						a = a.parentNode, u++
					}
				}
				return n
			}
			var c = pe.test(e) || typeof e != "string" ? I(e, t || this.context) : 0;
			for (i = 0, r = this.length; i < r; i++) {
				a = this[i];
				while (a) {
					if (c ? c.index(a) > -1 : I.find.matchesSelector(a, e)) {
						n.push(a);
						break
					}
					a = a.parentNode;
					if (!a || !a.ownerDocument || a === t || a.nodeType === 11) break
				}
			}
			n = n.length > 1 ? I.unique(n) : n;
			return this.pushStack(n, "closest", e)
		},
		index: function(e) {
			if (!e || typeof e == "string") return I.inArray(this[0], e ? I(e) : this.parent().children());
			return I.inArray(e.jquery ? e[0] : e, this)
		},
		add: function(e, t) {
			var n = typeof e == "string" ? I(e, t) : I.makeArray(e && e.nodeType ? [e] : e),
				i = I.merge(this.get(), n);
			return this.pushStack(x(n[0]) || x(i[0]) ? i : I.unique(i))
		},
		andSelf: function() {
			return this.add(this.prevObject)
		}
	}), I.each({
		parent: function(e) {
			var t = e.parentNode;
			return t && t.nodeType !== 11 ? t : null
		},
		parents: function(e) {
			return I.dir(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return I.dir(e, "parentNode", n)
		},
		next: function(e) {
			return I.nth(e, 2, "nextSibling")
		},
		prev: function(e) {
			return I.nth(e, 2, "previousSibling")
		},
		nextAll: function(e) {
			return I.dir(e, "nextSibling")
		},
		prevAll: function(e) {
			return I.dir(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return I.dir(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return I.dir(e, "previousSibling", n)
		},
		siblings: function(e) {
			return I.sibling(e.parentNode.firstChild, e)
		},
		children: function(e) {
			return I.sibling(e.firstChild)
		},
		contents: function(e) {
			return I.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : I.makeArray(e.childNodes)
		}
	}, function(e, t) {
		I.fn[e] = function(n, i) {
			var r = I.map(this, t, n),
				a = fe.call(arguments);
			le.test(e) || (i = n), i && typeof i == "string" && (r = I.filter(i, r)), r = this.length > 1 && !he[e] ? I.unique(r) : r, (this.length > 1 || ce.test(i)) && ue.test(e) && (r = r.reverse());
			return this.pushStack(r, e, a.join(","))
		}
	}), I.extend({
		filter: function(e, t, n) {
			n && (e = ":not(" + e + ")");
			return t.length === 1 ? I.find.matchesSelector(t[0], e) ? [t[0]] : [] : I.find.matches(e, t)
		},
		dir: function(e, n, i) {
			var r = [],
				a = e[n];
			while (a && a.nodeType !== 9 && (i === t || a.nodeType !== 1 || !I(a).is(i))) a.nodeType === 1 && r.push(a), a = a[n];
			return r
		},
		nth: function(e, t, n, i) {
			t = t || 1;
			var r = 0;
			for (; e; e = e[n]) if (e.nodeType === 1 && ++r === t) break;
			return e
		},
		sibling: function(e, t) {
			var n = [];
			for (; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
			return n
		}
	});
	var ve = / polyvObject\d+="(?:\d+|null)"/g,
		me = /^\s+/,
		ge = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		ye = /<([\w:]+)/,
		we = /<tbody/i,
		be = /<|&#?\w+;/,
		_e = /<(?:script|object|embed|option|style)/i,
		Te = /checked\s*(?:[^=]|=\s*.checked.)/i,
		xe = /\/(java|ecma)script/i,
		Se = /^\s*<!(?:\[CDATA\[|\-\-)/,
		je = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			area: [1, "<map>", "</map>"],
			_default: [0, "", ""]
		};
	je.optgroup = je.option, je.tbody = je.tfoot = je.colgroup = je.caption = je.thead, je.th = je.td, I.support.htmlSerialize || (je._default = [1, "div<div>", "</div>"]), I.fn.extend({
		text: function(e) {
			if (I.isFunction(e)) return this.each(function(t) {
				var n = I(this);
				n.text(e.call(this, t, n.text()))
			});
			if (typeof e != "object" && e !== t) return this.empty().append((this[0] && this[0].ownerDocument || F).createTextNode(e));
			return I.text(this)
		},
		wrapAll: function(e) {
			if (I.isFunction(e)) return this.each(function(t) {
				I(this).wrapAll(e.call(this, t))
			});
			if (this[0]) {
				var t = I(e, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
					var e = this;
					while (e.firstChild && e.firstChild.nodeType === 1) e = e.firstChild;
					return e
				}).append(this)
			}
			return this
		},
		wrapInner: function(e) {
			if (I.isFunction(e)) return this.each(function(t) {
				I(this).wrapInner(e.call(this, t))
			});
			return this.each(function() {
				var t = I(this),
					n = t.contents();
				n.length ? n.wrapAll(e) : t.append(e)
			})
		},
		wrap: function(e) {
			return this.each(function() {
				I(this).wrapAll(e)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				I.nodeName(this, "body") || I(this).replaceWith(this.childNodes)
			}).end()
		},
		append: function() {
			return this.domManip(arguments, !0, function(e) {
				this.nodeType === 1 && this.appendChild(e)
			})
		},
		prepend: function() {
			return this.domManip(arguments, !0, function(e) {
				this.nodeType === 1 && this.insertBefore(e, this.firstChild)
			})
		},
		before: function() {
			if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(e) {
				this.parentNode.insertBefore(e, this)
			});
			if (arguments.length) {
				var e = I(arguments[0]);
				e.push.apply(e, this.toArray());
				return this.pushStack(e, "before", arguments)
			}
		},
		after: function() {
			if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(e) {
				this.parentNode.insertBefore(e, this.nextSibling)
			});
			if (arguments.length) {
				var e = this.pushStack(this, "after", arguments);
				e.push.apply(e, I(arguments[0]).toArray());
				return e
			}
		},
		remove: function(e, t) {
			for (var n = 0, i;
			(i = this[n]) != null; n++) if (!e || I.filter(e, [i]).length)!t && i.nodeType === 1 && (I.cleanData(i.getElementsByTagName("*")), I.cleanData([i])), i.parentNode && i.parentNode.removeChild(i);
			return this
		},
		empty: function() {
			for (var e = 0, t;
			(t = this[e]) != null; e++) {
				t.nodeType === 1 && I.cleanData(t.getElementsByTagName("*"));
				while (t.firstChild) t.removeChild(t.firstChild)
			}
			return this
		},
		clone: function(e, t) {
			e = e == null ? !1 : e, t = t == null ? e : t;
			return this.map(function() {
				return I.clone(this, e, t)
			})
		},
		html: function(e) {
			if (e === t) return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(ve, "") : null;
			if (typeof e == "string" && !_e.test(e) && (I.support.leadingWhitespace || !me.test(e)) && !je[(ye.exec(e) || ["", ""])[1].toLowerCase()]) {
				e = e.replace(ge, "<$1></$2>");
				try {
					for (var n = 0, i = this.length; n < i; n++) this[n].nodeType === 1 && (I.cleanData(this[n].getElementsByTagName("*")), this[n].innerHTML = e)
				} catch (r) {
					this.empty().append(e)
				}
			} else I.isFunction(e) ? this.each(function(t) {
				var n = I(this);
				n.html(e.call(this, t, n.html()))
			}) : this.empty().append(e);
			return this
		},
		replaceWith: function(e) {
			if (this[0] && this[0].parentNode) {
				if (I.isFunction(e)) return this.each(function(t) {
					var n = I(this),
						i = n.html();
					n.replaceWith(e.call(this, t, i))
				});
				typeof e != "string" && (e = I(e).detach());
				return this.each(function() {
					var t = this.nextSibling,
						n = this.parentNode;
					I(this).remove(), t ? I(t).before(e) : I(n).append(e)
				})
			}
			return this.length ? this.pushStack(I(I.isFunction(e) ? e() : e), "replaceWith", e) : this
		},
		detach: function(e) {
			return this.remove(e, !0)
		},
		domManip: function(e, n, i) {
			var r, a, o, s, l = e[0],
				u = [];
			if (!I.support.checkClone && arguments.length === 3 && typeof l == "string" && Te.test(l)) return this.each(function() {
				I(this).domManip(e, n, i, !0)
			});
			if (I.isFunction(l)) return this.each(function(r) {
				var a = I(this);
				e[0] = l.call(this, r, n ? a.html() : t), a.domManip(e, n, i)
			});
			if (this[0]) {
				s = l && l.parentNode, I.support.parentNode && s && s.nodeType === 11 && s.childNodes.length === this.length ? r = {
					fragment: s
				} : r = I.buildFragment(e, this, u), o = r.fragment, o.childNodes.length === 1 ? a = o = o.firstChild : a = o.firstChild;
				if (a) {
					n = n && I.nodeName(a, "tr");
					for (var c = 0, d = this.length, f = d - 1; c < d; c++) i.call(n ? _(this[c], a) : this[c], r.cacheable || d > 1 && c < f ? I.clone(o, !0, !0) : o)
				}
				u.length && I.each(u, v)
			}
			return this
		}
	}), I.buildFragment = function(e, t, n) {
		var i, r, a, o;
		t && t[0] && (o = t[0].ownerDocument || t[0]), o.createDocumentFragment || (o = F), e.length === 1 && typeof e[0] == "string" && e[0].length < 512 && o === F && e[0].charAt(0) === "<" && !_e.test(e[0]) && (I.support.checkClone || !Te.test(e[0])) && (r = !0, a = I.fragments[e[0]], a && a !== 1 && (i = a)), i || (i = o.createDocumentFragment(), I.clean(e, o, i, n)), r && (I.fragments[e[0]] = a ? i : 1);
		return {
			fragment: i,
			cacheable: r
		}
	}, I.fragments = {}, I.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(e, t) {
		I.fn[e] = function(n) {
			var i = [],
				r = I(n),
				a = this.length === 1 && this[0].parentNode;
			if (a && a.nodeType === 11 && a.childNodes.length === 1 && r.length === 1) {
				r[t](this[0]);
				return this
			}
			for (var o = 0, s = r.length; o < s; o++) {
				var l = (o > 0 ? this.clone(!0) : this).get();
				I(r[o])[t](l), i = i.concat(l)
			}
			return this.pushStack(i, e, r.selector)
		}
	}), I.extend({
		clone: function(e, t, n) {
			var i = e.cloneNode(!0),
				r, a, o;
			if ((!I.support.noCloneEvent || !I.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !I.isXMLDoc(e)) {
				w(e, i), r = y(e), a = y(i);
				for (o = 0; r[o]; ++o) w(r[o], a[o])
			}
			if (t) {
				b(e, i);
				if (n) {
					r = y(e), a = y(i);
					for (o = 0; r[o]; ++o) b(r[o], a[o])
				}
			}
			r = a = null;
			return i
		},
		clean: function(e, t, n, i) {
			var r;
			t = t || F, typeof t.createElement == "undefined" && (t = t.ownerDocument || t[0] && t[0].ownerDocument || F);
			var a = [],
				o;
			for (var s = 0, l;
			(l = e[s]) != null; s++) {
				typeof l == "number" && (l += "");
				if (!l) continue;
				if (typeof l == "string") if (!be.test(l)) l = t.createTextNode(l);
				else {
					l = l.replace(ge, "<$1></$2>");
					var u = (ye.exec(l) || ["", ""])[1].toLowerCase(),
						c = je[u] || je._default,
						d = c[0],
						f = t.createElement("div");
					f.innerHTML = c[1] + l + c[2];
					while (d--) f = f.lastChild;
					if (!I.support.tbody) {
						var p = we.test(l),
							h = u === "table" && !p ? f.firstChild && f.firstChild.childNodes : c[1] === "<table>" && !p ? f.childNodes : [];
						for (o = h.length - 1; o >= 0; --o) I.nodeName(h[o], "tbody") && !h[o].childNodes.length && h[o].parentNode.removeChild(h[o])
					}!I.support.leadingWhitespace && me.test(l) && f.insertBefore(t.createTextNode(me.exec(l)[0]), f.firstChild), l = f.childNodes
				}
				var v;
				if (!I.support.appendChecked) if (l[0] && typeof(v = l.length) == "number") for (o = 0; o < v; o++) m(l[o]);
				else m(l);
				l.nodeType ? a.push(l) : a = I.merge(a, l)
			}
			if (n) {
				r = function(e) {
					return !e.type || xe.test(e.type)
				};
				for (s = 0; a[s]; s++) if (i && I.nodeName(a[s], "script") && (!a[s].type || a[s].type.toLowerCase() === "text/javascript")) i.push(a[s].parentNode ? a[s].parentNode.removeChild(a[s]) : a[s]);
				else {
					if (a[s].nodeType === 1) {
						var g = I.grep(a[s].getElementsByTagName("script"), r);
						a.splice.apply(a, [s + 1, 0].concat(g))
					}
					n.appendChild(a[s])
				}
			}
			return a
		},
		cleanData: function(e) {
			var t, n, i = I.cache,
				r = I.expando,
				a = I.event.special,
				o = I.support.deleteExpando;
			for (var s = 0, l;
			(l = e[s]) != null; s++) {
				if (l.nodeName && I.noData[l.nodeName.toLowerCase()]) continue;
				n = l[I.expando];
				if (n) {
					t = i[n] && i[n][r];
					if (t && t.events) {
						for (var u in t.events) a[u] ? I.event.remove(l, u) : I.removeEvent(l, u, t.handle);
						t.handle && (t.handle.elem = null)
					}
					o ? delete l[I.expando] : l.removeAttribute && l.removeAttribute(I.expando), delete i[n]
				}
			}
		}
	});
	var ke = /alpha\([^)]*\)/i,
		Ce = /opacity=([^)]*)/,
		Pe = /([A-Z]|^ms)/g,
		Ae = /^-?\d+(?:px)?$/i,
		Ne = /^-?\d/,
		Ee = /^[+\-]=/,
		Fe = /[^+\-\.\de]+/g,
		Le = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Oe = ["Left", "Right"],
		Ie = ["Top", "Bottom"],
		De, Me, He;
	I.fn.css = function(e, n) {
		if (arguments.length === 2 && n === t) return this;
		return I.access(this, e, n, !0, function(e, n, i) {
			return i !== t ? I.style(e, n, i) : I.css(e, n)
		})
	}, I.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					if (t) {
						var n = De(e, "opacity", "opacity");
						return n === "" ? "1" : n
					}
					return e.style.opacity
				}
			}
		},
		cssNumber: {
			fillOpacity: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": I.support.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function(e, n, i, r) {
			if ( !! e && e.nodeType !== 3 && e.nodeType !== 8 && !! e.style) {
				var a, o, s = I.camelCase(n),
					l = e.style,
					u = I.cssHooks[s];
				n = I.cssProps[s] || s;
				if (i === t) {
					if (u && "get" in u && (a = u.get(e, !1, r)) !== t) return a;
					return l[n]
				}
				o = typeof i;
				if (o === "number" && isNaN(i) || i == null) return;
				o === "string" && Ee.test(i) && (i = +i.replace(Fe, "") + parseFloat(I.css(e, n)), o = "number"), o === "number" && !I.cssNumber[s] && (i += "px");
				if (!u || !("set" in u) || (i = u.set(e, i)) !== t) try {
					l[n] = i
				} catch (c) {}
			}
		},
		css: function(e, n, i) {
			var r, a;
			n = I.camelCase(n), a = I.cssHooks[n], n = I.cssProps[n] || n, n === "cssFloat" && (n = "float");
			if (a && "get" in a && (r = a.get(e, !0, i)) !== t) return r;
			if (De) return De(e, n)
		},
		swap: function(e, t, n) {
			var i = {};
			for (var r in t) i[r] = e.style[r], e.style[r] = t[r];
			n.call(e);
			for (r in t) e.style[r] = i[r]
		}
	}), I.curCSS = I.css, I.each(["height", "width"], function(e, t) {
		I.cssHooks[t] = {
			get: function(e, n, i) {
				var r;
				if (n) {
					if (e.offsetWidth !== 0) return h(e, t, i);
					I.swap(e, Le, function() {
						r = h(e, t, i)
					});
					return r
				}
			},
			set: function(e, t) {
				if (!Ae.test(t)) return t;
				t = parseFloat(t);
				if (t >= 0) return t + "px"
			}
		}
	}), I.support.opacity || (I.cssHooks.opacity = {
		get: function(e, t) {
			return Ce.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : t ? "1" : ""
		},
		set: function(e, t) {
			var n = e.style,
				i = e.currentStyle;
			n.zoom = 1;
			var r = I.isNaN(t) ? "" : "alpha(opacity=" + t * 100 + ")",
				a = i && i.filter || n.filter || "";
			n.filter = ke.test(a) ? a.replace(ke, r) : a + " " + r
		}
	}), I(function() {
		I.support.reliableMarginRight || (I.cssHooks.marginRight = {
			get: function(e, t) {
				var n;
				I.swap(e, {
					display: "inline-block"
				}, function() {
					t ? n = De(e, "margin-right", "marginRight") : n = e.style.marginRight
				});
				return n
			}
		})
	}), F.defaultView && F.defaultView.getComputedStyle && (Me = function(e, n) {
		var i, r, a;
		n = n.replace(Pe, "-$1").toLowerCase();
		if (!(r = e.ownerDocument.defaultView)) return t;
		if (a = r.getComputedStyle(e, null)) i = a.getPropertyValue(n), i === "" && !I.contains(e.ownerDocument.documentElement, e) && (i = I.style(e, n));
		return i
	}), F.documentElement.currentStyle && (He = function(e, t) {
		var n, i = e.currentStyle && e.currentStyle[t],
			r = e.runtimeStyle && e.runtimeStyle[t],
			a = e.style;
		!Ae.test(i) && Ne.test(i) && (n = a.left, r && (e.runtimeStyle.left = e.currentStyle.left), a.left = t === "fontSize" ? "1em" : i || 0, i = a.pixelLeft + "px", a.left = n, r && (e.runtimeStyle.left = r));
		return i === "" ? "auto" : i
	}), De = Me || He, I.expr && I.expr.filters && (I.expr.filters.hidden = function(e) {
		var t = e.offsetWidth,
			n = e.offsetHeight;
		return t === 0 && n === 0 || !I.support.reliableHiddenOffsets && (e.style.display || I.css(e, "display")) === "none"
	}, I.expr.filters.visible = function(e) {
		return !I.expr.filters.hidden(e)
	});
	var Be = /%20/g,
		Ve = /\[\]$/,
		Re = /\r?\n/g,
		Ue = /#.*$/,
		We = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
		ze = /^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
		qe = /^(?:about|app|app\-storage|.+\-extension|file|widget):$/,
		$e = /^(?:GET|HEAD)$/,
		Xe = /^\/\//,
		Je = /\?/,
		Ge = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
		Ye = /^(?:select|textarea)/i,
		Ke = /\s+/,
		Ze = /([?&])_=[^&]*/,
		Qe = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
		et = I.fn.load,
		tt = {},
		nt = {},
		it, rt;
	try {
		it = O.href
	} catch (at) {
		it = F.createElement("a"), it.href = "", it = it.href
	}
	rt = Qe.exec(it.toLowerCase()) || [], I.fn.extend({
		load: function(e, n, i) {
			if (typeof e != "string" && et) return et.apply(this, arguments);
			if (!this.length) return this;
			var r = e.indexOf(" ");
			if (r >= 0) {
				var a = e.slice(r, e.length);
				e = e.slice(0, r)
			}
			var o = "GET";
			n && (I.isFunction(n) ? (i = n, n = t) : typeof n == "object" && (n = I.param(n, I.ajaxSettings.traditional), o = "POST"));
			var s = this;
			I.ajax({
				url: e,
				type: o,
				dataType: "html",
				data: n,
				complete: function(e, t, n) {
					n = e.responseText, e.isResolved() && (e.done(function(e) {
						n = e
					}), s.html(a ? I("<div>").append(n.replace(Ge, "")).find(a) : n)), i && s.each(i, [n, t, e])
				}
			});
			return this
		},
		serialize: function() {
			return I.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				return this.elements ? I.makeArray(this.elements) : this
			}).filter(function() {
				return this.name && !this.disabled && (this.checked || Ye.test(this.nodeName) || ze.test(this.type))
			}).map(function(e, t) {
				var n = I(this).val();
				return n == null ? null : I.isArray(n) ? I.map(n, function(e, n) {
					return {
						name: t.name,
						value: e.replace(Re, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(Re, "\r\n")
				}
			}).get()
		}
	}), I.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, t) {
		I.fn[t] = function(e) {
			return this.bind(t, e)
		}
	}), I.each(["get", "post"], function(e, n) {
		I[n] = function(e, i, r, a) {
			I.isFunction(i) && (a = a || r, r = i, i = t);
			return I.ajax({
				type: n,
				url: e,
				data: i,
				success: r,
				dataType: a
			})
		}
	}), I.extend({
		getScript: function(e, n) {
			return I.get(e, t, n, "script")
		},
		getJSON: function(e, t, n) {
			return I.get(e, t, n, "json")
		},
		ajaxSetup: function(e, t) {
			t ? I.extend(!0, e, I.ajaxSettings, t) : (t = e, e = I.extend(!0, I.ajaxSettings, t));
			for (var n in {
				context: 1,
				url: 1
			}) n in t ? e[n] = t[n] : n in I.ajaxSettings && (e[n] = I.ajaxSettings[n]);
			return e
		},
		ajaxSettings: {
			url: it,
			isLocal: qe.test(rt[1]),
			global: !0,
			type: "GET",
			contentType: "application/x-www-form-urlencoded",
			processData: !0,
			async: !0,
			accepts: {
				xml: "application/xml, text/xml",
				html: "text/html",
				text: "text/plain",
				json: "application/json, text/javascript",
				"*": "*/*"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText"
			},
			converters: {
				"* text": e.String,
				"text html": !0,
				"text json": I.parseJSON,
				"text xml": I.parseXML
			}
		},
		ajaxPrefilter: p(tt),
		ajaxTransport: p(nt),
		ajax: function(e, n) {
			function i(e, n, i, f) {
				if (_ !== 2) {
					_ = 2, w && clearTimeout(w), y = t, m = f || "", S.readyState = e ? 4 : 0;
					var h, v, g, b = i ? c(r, S, i) : t,
						x, j;
					if (e >= 200 && e < 300 || e === 304) {
						if (r.ifModified) {
							if (x = S.getResponseHeader("Last-Modified")) I.lastModified[p] = x;
							if (j = S.getResponseHeader("Etag")) I.etag[p] = j
						}
						if (e === 304) n = "notmodified", h = !0;
						else try {
							v = u(r, b), n = "success", h = !0
						} catch (k) {
							n = "parsererror", g = k
						}
					} else {
						g = n;
						if (!n || e) n = "error", e < 0 && (e = 0)
					}
					S.status = e, S.statusText = n, h ? s.resolveWith(a, [v, n, S]) : s.rejectWith(a, [S, n, g]), S.statusCode(d), d = t, T && o.trigger("ajax" + (h ? "Success" : "Error"), [S, r, h ? v : g]), l.resolveWith(a, [S, n]), T && (o.trigger("ajaxComplete", [S, r]), --I.active || I.event.trigger("ajaxStop"))
				}
			}
			typeof e == "object" && (n = e, e = t), n = n || {};
			var r = I.ajaxSetup({}, n),
				a = r.context || r,
				o = a !== r && (a.nodeType || a instanceof I) ? I(a) : I.event,
				s = I.Deferred(),
				l = I._Deferred(),
				d = r.statusCode || {},
				p, h = {},
				v = {},
				m, g, y, w, b, _ = 0,
				T, x, S = {
					readyState: 0,
					setRequestHeader: function(e, t) {
						if (!_) {
							var n = e.toLowerCase();
							e = v[n] = v[n] || e, h[e] = t
						}
						return this
					},
					getAllResponseHeaders: function() {
						return _ === 2 ? m : null
					},
					getResponseHeader: function(e) {
						var n;
						if (_ === 2) {
							if (!g) {
								g = {};
								while (n = We.exec(m)) g[n[1].toLowerCase()] = n[2]
							}
							n = g[e.toLowerCase()]
						}
						return n === t ? null : n
					},
					overrideMimeType: function(e) {
						_ || (r.mimeType = e);
						return this
					},
					abort: function(e) {
						e = e || "abort", y && y.abort(e), i(0, e);
						return this
					}
				};
			s.promise(S), S.success = S.done, S.error = S.fail, S.complete = l.done, S.statusCode = function(e) {
				if (e) {
					var t;
					if (_ < 2) for (t in e) d[t] = [d[t], e[t]];
					else t = e[S.status], S.then(t, t)
				}
				return this
			}, r.url = ((e || r.url) + "").replace(Ue, "").replace(Xe, rt[1] + "//"), r.dataTypes = I.trim(r.dataType || "*").toLowerCase().split(Ke), r.crossDomain == null && (b = Qe.exec(r.url.toLowerCase()), r.crossDomain = !(!b || b[1] == rt[1] && b[2] == rt[2] && (b[3] || (b[1] === "http:" ? 80 : 443)) == (rt[3] || (rt[1] === "http:" ? 80 : 443)))), r.data && r.processData && typeof r.data != "string" && (r.data = I.param(r.data, r.traditional)), f(tt, r, n, S);
			if (_ === 2) return !1;
			T = r.global, r.type = r.type.toUpperCase(), r.hasContent = !$e.test(r.type), T && I.active++ === 0 && I.event.trigger("ajaxStart");
			if (!r.hasContent) {
				r.data && (r.url += (Je.test(r.url) ? "&" : "?") + r.data), p = r.url;
				if (r.cache === !1) {
					var j = I.now(),
						k = r.url.replace(Ze, "$1_=" + j);
					r.url = k + (k === r.url ? (Je.test(r.url) ? "&" : "?") + "_=" + j : "")
				}
			}(r.data && r.hasContent && r.contentType !== !1 || n.contentType) && S.setRequestHeader("Content-Type", r.contentType), r.ifModified && (p = p || r.url, I.lastModified[p] && S.setRequestHeader("If-Modified-Since", I.lastModified[p]), I.etag[p] && S.setRequestHeader("If-None-Match", I.etag[p])), S.setRequestHeader("Accept", r.dataTypes[0] && r.accepts[r.dataTypes[0]] ? r.accepts[r.dataTypes[0]] + (r.dataTypes[0] !== "*" ? ", */*; q=0.01" : "") : r.accepts["*"]);
			for (x in r.headers) S.setRequestHeader(x, r.headers[x]);
			if (r.beforeSend && (r.beforeSend.call(a, S, r) === !1 || _ === 2)) {
				S.abort();
				return !1
			}
			for (x in {
				success: 1,
				error: 1,
				complete: 1
			}) S[x](r[x]);
			y = f(nt, r, n, S);
			if (!y) i(-1, "No Transport");
			else {
				S.readyState = 1, T && o.trigger("ajaxSend", [S, r]), r.async && r.timeout > 0 && (w = setTimeout(function() {
					S.abort("timeout")
				}, r.timeout));
				try {
					_ = 1, y.send(h, i)
				} catch (C) {
					status < 2 ? i(-1, C) : I.error(C)
				}
			}
			return S
		},
		param: function(e, n) {
			var i = [],
				r = function(e, t) {
					t = I.isFunction(t) ? t() : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
				};
			n === t && (n = I.ajaxSettings.traditional);
			if (I.isArray(e) || e.jquery && !I.isPlainObject(e)) I.each(e, function() {
				r(this.name, this.value)
			});
			else for (var a in e) d(a, e[a], n, r);
			return i.join("&").replace(Be, "+")
		}
	}), I.extend({
		active: 0,
		lastModified: {},
		etag: {}
	});
	var ot = I.now(),
		st = /(\=)\?(&|$)|\?\?/i;
	I.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			return I.expando + "_" + ot++
		}
	}), I.ajaxPrefilter("json jsonp", function(t, n, i) {
		var r = t.contentType === "application/x-www-form-urlencoded" && typeof t.data == "string";
		if (t.dataTypes[0] === "jsonp" || t.jsonp !== !1 && (st.test(t.url) || r && st.test(t.data))) {
			var a, o = t.jsonpCallback = I.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
				s = e[o],
				l = t.url,
				u = t.data,
				c = "$1" + o + "$2";
			t.jsonp !== !1 && (l = l.replace(st, c), t.url === l && (r && (u = u.replace(st, c)), t.data === u && (l += (/\?/.test(l) ? "&" : "?") + t.jsonp + "=" + o))), t.url = l, t.data = u, e[o] = function(e) {
				a = [e]
			}, i.always(function() {
				e[o] = s, a && I.isFunction(s) && e[o](a[0])
			}), t.converters["script json"] = function() {
				a || I.error(o + " was not called");
				return a[0]
			}, t.dataTypes[0] = "json";
			return "script"
		}
	}), I.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /javascript|ecmascript/
		},
		converters: {
			"text script": function(e) {
				I.globalEval(e);
				return e
			}
		}
	}), I.ajaxPrefilter("script", function(e) {
		e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
	}), I.ajaxTransport("script", function(e) {
		if (e.crossDomain) {
			var n, i = F.head || F.getElementsByTagName("head")[0] || F.documentElement;
			return {
				send: function(r, a) {
					n = F.createElement("script"), n.async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, r) {
						if (r || !n.readyState || /loaded|complete/.test(n.readyState)) n.onload = n.onreadystatechange = null, i && n.parentNode && i.removeChild(n), n = t, r || a(200, "success")
					}, i.insertBefore(n, i.firstChild)
				},
				abort: function() {
					n && n.onload(0, 1)
				}
			}
		}
	});
	var lt = e.ActiveXObject ?
	function() {
		for (var e in ct) ct[e](0, 1)
	} : !1, ut = 0, ct;
	I.ajaxSettings.xhr = e.ActiveXObject ?
	function() {
		return !this.isLocal && l() || s()
	} : l, function(e) {
		I.extend(I.support, {
			ajax: !! e,
			cors: !! e && "withCredentials" in e
		})
	}(I.ajaxSettings.xhr()), I.support.ajax && I.ajaxTransport(function(n) {
		if (!n.crossDomain || I.support.cors) {
			var i;
			return {
				send: function(r, a) {
					var o = n.xhr(),
						s, l;
					n.username ? o.open(n.type, n.url, n.async, n.username, n.password) : o.open(n.type, n.url, n.async);
					if (n.xhrFields) for (l in n.xhrFields) o[l] = n.xhrFields[l];
					n.mimeType && o.overrideMimeType && o.overrideMimeType(n.mimeType), !n.crossDomain && !r["X-Requested-With"] && (r["X-Requested-With"] = "XMLHttpRequest");
					try {
						for (l in r) o.setRequestHeader(l, r[l])
					} catch (u) {}
					o.send(n.hasContent && n.data || null), i = function(e, r) {
						var l, u, c, d, f;
						try {
							if (i && (r || o.readyState === 4)) {
								i = t, s && (o.onreadystatechange = I.noop, lt && delete ct[s]);
								if (r) o.readyState !== 4 && o.abort();
								else {
									l = o.status, c = o.getAllResponseHeaders(), d = {}, f = o.responseXML, f && f.documentElement && (d.xml = f), d.text = o.responseText;
									try {
										u = o.statusText
									} catch (p) {
										u = ""
									}!l && n.isLocal && !n.crossDomain ? l = d.text ? 200 : 404 : l === 1223 && (l = 204)
								}
							}
						} catch (h) {
							r || a(-1, h)
						}
						d && a(l, u, d, c)
					}, !n.async || o.readyState === 4 ? i() : (s = ++ut, lt && (ct || (ct = {}, I(e).unload(lt)), ct[s] = i), o.onreadystatechange = i)
				},
				abort: function() {
					i && i(0, 1)
				}
			}
		}
	});
	var dt = {},
		ft, pt, ht = /^(?:toggle|show|hide)$/,
		vt = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
		mt, gt = [
			["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
			["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
			["opacity"]
		],
		yt, wt = e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame;
	I.fn.extend({
		show: function(e, t, n) {
			var a, o;
			if (e || e === 0) return this.animate(r("show", 3), e, t, n);
			for (var s = 0, l = this.length; s < l; s++) a = this[s], a.style && (o = a.style.display, !I._data(a, "olddisplay") && o === "none" && (o = a.style.display = ""), o === "" && I.css(a, "display") === "none" && I._data(a, "olddisplay", i(a.nodeName)));
			for (s = 0; s < l; s++) {
				a = this[s];
				if (a.style) {
					o = a.style.display;
					if (o === "" || o === "none") a.style.display = I._data(a, "olddisplay") || ""
				}
			}
			return this
		},
		hide: function(e, t, n) {
			if (e || e === 0) return this.animate(r("hide", 3), e, t, n);
			for (var i = 0, a = this.length; i < a; i++) if (this[i].style) {
				var o = I.css(this[i], "display");
				o !== "none" && !I._data(this[i], "olddisplay") && I._data(this[i], "olddisplay", o)
			}
			for (i = 0; i < a; i++) this[i].style && (this[i].style.display = "none");
			return this
		},
		_toggle: I.fn.toggle,
		toggle: function(e, t, n) {
			var i = typeof e == "boolean";
			I.isFunction(e) && I.isFunction(t) ? this._toggle.apply(this, arguments) : e == null || i ? this.each(function() {
				var t = i ? e : I(this).is(":hidden");
				I(this)[t ? "show" : "hide"]()
			}) : this.animate(r("toggle", 3), e, t, n);
			return this
		},
		fadeTo: function(e, t, n, i) {
			return this.filter(":hidden").css("opacity", 0).show().end().animate({
				opacity: t
			}, e, n, i)
		},
		animate: function(e, t, n, r) {
			var a = I.speed(t, n, r);
			if (I.isEmptyObject(e)) return this.each(a.complete, [!1]);
			e = I.extend({}, e);
			return this[a.queue === !1 ? "each" : "queue"](function() {
				a.queue === !1 && I._mark(this);
				var t = I.extend({}, a),
					n = this.nodeType === 1,
					r = n && I(this).is(":hidden"),
					o, s, l, u, c, d, f, p, h;
				t.animatedProperties = {};
				for (l in e) {
					o = I.camelCase(l), l !== o && (e[o] = e[l], delete e[l]), s = e[o], I.isArray(s) ? (t.animatedProperties[o] = s[1], s = e[o] = s[0]) : t.animatedProperties[o] = t.specialEasing && t.specialEasing[o] || t.easing || "swing";
					if (s === "hide" && r || s === "show" && !r) return t.complete.call(this);
					n && (o === "height" || o === "width") && (t.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], I.css(this, "display") === "inline" && I.css(this, "float") === "none" && (I.support.inlineBlockNeedsLayout ? (u = i(this.nodeName), u === "inline" ? this.style.display = "inline-block" : (this.style.display = "inline", this.style.zoom = 1)) : this.style.display = "inline-block"))
				}
				t.overflow != null && (this.style.overflow = "hidden");
				for (l in e) c = new I.fx(this, t, l), s = e[l], ht.test(s) ? c[s === "toggle" ? r ? "show" : "hide" : s]() : (d = vt.exec(s), f = c.cur(), d ? (p = parseFloat(d[2]), h = d[3] || (I.cssNumber[l] ? "" : "px"), h !== "px" && (I.style(this, l, (p || 1) + h), f = (p || 1) / c.cur() * f, I.style(this, l, f + h)), d[1] && (p = (d[1] === "-=" ? -1 : 1) * p + f), c.custom(f, p, h)) : c.custom(f, s, ""));
				return !0
			})
		},
		stop: function(e, t) {
			e && this.queue([]), this.each(function() {
				var e = I.timers,
					n = e.length;
				t || I._unmark(!0, this);
				while (n--) e[n].elem === this && (t && e[n](!0), e.splice(n, 1))
			}), t || this.dequeue();
			return this
		}
	}), I.each({
		slideDown: r("show", 1),
		slideUp: r("hide", 1),
		slideToggle: r("toggle", 1),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(e, t) {
		I.fn[e] = function(e, n, i) {
			return this.animate(t, e, n, i)
		}
	}), I.extend({
		speed: function(e, t, n) {
			var i = e && typeof e == "object" ? I.extend({}, e) : {
				complete: n || !n && t || I.isFunction(e) && e,
				duration: e,
				easing: n && t || t && !I.isFunction(t) && t
			};
			i.duration = I.fx.off ? 0 : typeof i.duration == "number" ? i.duration : i.duration in I.fx.speeds ? I.fx.speeds[i.duration] : I.fx.speeds._default, i.old = i.complete, i.complete = function(e) {
				I.isFunction(i.old) && i.old.call(this), i.queue !== !1 ? I.dequeue(this) : e !== !1 && I._unmark(this)
			};
			return i
		},
		easing: {
			linear: function(e, t, n, i) {
				return n + i * e
			},
			swing: function(e, t, n, i) {
				return (-Math.cos(e * Math.PI) / 2 + .5) * i + n
			}
		},
		timers: [],
		fx: function(e, t, n) {
			this.options = t, this.elem = e, this.prop = n, t.orig = t.orig || {}
		}
	}), I.fx.prototype = {
		update: function() {
			this.options.step && this.options.step.call(this.elem, this.now, this), (I.fx.step[this.prop] || I.fx.step._default)(this)
		},
		cur: function() {
			if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) return this.elem[this.prop];
			var e, t = I.css(this.elem, this.prop);
			return isNaN(e = parseFloat(t)) ? !t || t === "auto" ? 0 : t : e
		},
		custom: function(e, t, n) {
			function i(e) {
				return r.step(e)
			}
			var r = this,
				a = I.fx,
				s;
			this.startTime = yt || o(), this.start = e, this.end = t, this.unit = n || this.unit || (I.cssNumber[this.prop] ? "" : "px"), this.now = this.start, this.pos = this.state = 0, i.elem = this.elem, i() && I.timers.push(i) && !mt && (wt ? (mt = !0, s = function() {
				mt && (wt(s), a.tick())
			}, wt(s)) : mt = setInterval(a.tick, a.interval))
		},
		show: function() {
			this.options.orig[this.prop] = I.style(this.elem, this.prop), this.options.show = !0, this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), I(this.elem).show()
		},
		hide: function() {
			this.options.orig[this.prop] = I.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
		},
		step: function(e) {
			var t = yt || o(),
				n = !0,
				i = this.elem,
				r = this.options,
				a, s;
			if (e || t >= r.duration + this.startTime) {
				this.now = this.end, this.pos = this.state = 1, this.update(), r.animatedProperties[this.prop] = !0;
				for (a in r.animatedProperties) r.animatedProperties[a] !== !0 && (n = !1);
				if (n) {
					r.overflow != null && !I.support.shrinkWrapBlocks && I.each(["", "X", "Y"], function(e, t) {
						i.style["overflow" + t] = r.overflow[e]
					}), r.hide && I(i).hide();
					if (r.hide || r.show) for (var l in r.animatedProperties) I.style(i, l, r.orig[l]);
					r.complete.call(i)
				}
				return !1
			}
			r.duration == Infinity ? this.now = t : (s = t - this.startTime, this.state = s / r.duration, this.pos = I.easing[r.animatedProperties[this.prop]](this.state, s, 0, 1, r.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update();
			return !0
		}
	}, I.extend(I.fx, {
		tick: function() {
			for (var e = I.timers, t = 0; t < e.length; ++t) e[t]() || e.splice(t--, 1);
			e.length || I.fx.stop()
		},
		interval: 13,
		stop: function() {
			clearInterval(mt), mt = null
		},
		speeds: {
			slow: 600,
			fast: 200,
			_default: 400
		},
		step: {
			opacity: function(e) {
				I.style(e.elem, "opacity", e.now)
			},
			_default: function(e) {
				e.elem.style && e.elem.style[e.prop] != null ? e.elem.style[e.prop] = (e.prop === "width" || e.prop === "height" ? Math.max(0, e.now) : e.now) + e.unit : e.elem[e.prop] = e.now
			}
		}
	}), I.expr && I.expr.filters && (I.expr.filters.animated = function(e) {
		return I.grep(I.timers, function(t) {
			return e === t.elem
		}).length
	});
	var bt = /^t(?:able|d|h)$/i,
		_t = /^(?:body|html)$/i;
	"getBoundingClientRect" in F.documentElement ? I.fn.offset = function(e) {
		var t = this[0],
			i;
		if (e) return this.each(function(t) {
			I.offset.setOffset(this, e, t)
		});
		if (!t || !t.ownerDocument) return null;
		if (t === t.ownerDocument.body) return I.offset.bodyOffset(t);
		try {
			i = t.getBoundingClientRect()
		} catch (r) {}
		var a = t.ownerDocument,
			o = a.documentElement;
		if (!i || !I.contains(o, t)) return i ? {
			top: i.top,
			left: i.left
		} : {
			top: 0,
			left: 0
		};
		var s = a.body,
			l = n(a),
			u = o.clientTop || s.clientTop || 0,
			c = o.clientLeft || s.clientLeft || 0,
			d = l.pageYOffset || I.support.boxModel && o.scrollTop || s.scrollTop,
			f = l.pageXOffset || I.support.boxModel && o.scrollLeft || s.scrollLeft,
			p = i.top + d - u,
			h = i.left + f - c;
		return {
			top: p,
			left: h
		}
	} : I.fn.offset = function(e) {
		var t = this[0];
		if (e) return this.each(function(t) {
			I.offset.setOffset(this, e, t)
		});
		if (!t || !t.ownerDocument) return null;
		if (t === t.ownerDocument.body) return I.offset.bodyOffset(t);
		I.offset.initialize();
		var n, i = t.offsetParent,
			r = t,
			a = t.ownerDocument,
			o = a.documentElement,
			s = a.body,
			l = a.defaultView,
			u = l ? l.getComputedStyle(t, null) : t.currentStyle,
			c = t.offsetTop,
			d = t.offsetLeft;
		while ((t = t.parentNode) && t !== s && t !== o) {
			if (I.offset.supportsFixedPosition && u.position === "fixed") break;
			n = l ? l.getComputedStyle(t, null) : t.currentStyle, c -= t.scrollTop, d -= t.scrollLeft, t === i && (c += t.offsetTop, d += t.offsetLeft, I.offset.doesNotAddBorder && (!I.offset.doesAddBorderForTableAndCells || !bt.test(t.nodeName)) && (c += parseFloat(n.borderTopWidth) || 0, d += parseFloat(n.borderLeftWidth) || 0), r = i, i = t.offsetParent), I.offset.subtractsBorderForOverflowNotVisible && n.overflow !== "visible" && (c += parseFloat(n.borderTopWidth) || 0, d += parseFloat(n.borderLeftWidth) || 0), u = n
		}
		if (u.position === "relative" || u.position === "static") c += s.offsetTop, d += s.offsetLeft;
		I.offset.supportsFixedPosition && u.position === "fixed" && (c += Math.max(o.scrollTop, s.scrollTop), d += Math.max(o.scrollLeft, s.scrollLeft));
		return {
			top: c,
			left: d
		}
	}, I.offset = {
		initialize: function() {
			var e = F.body,
				t = F.createElement("div"),
				n, i, r, a, o = parseFloat(I.css(e, "marginTop")) || 0,
				s = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
			I.extend(t.style, {
				position: "absolute",
				top: 0,
				left: 0,
				margin: 0,
				border: 0,
				width: "1px",
				height: "1px",
				visibility: "hidden"
			}), t.innerHTML = s, e.insertBefore(t, e.firstChild), n = t.firstChild, i = n.firstChild, a = n.nextSibling.firstChild.firstChild, this.doesNotAddBorder = i.offsetTop !== 5, this.doesAddBorderForTableAndCells = a.offsetTop === 5, i.style.position = "fixed", i.style.top = "20px", this.supportsFixedPosition = i.offsetTop === 20 || i.offsetTop === 15, i.style.position = i.style.top = "", n.style.overflow = "hidden", n.style.position = "relative", this.subtractsBorderForOverflowNotVisible = i.offsetTop === -5, this.doesNotIncludeMarginInBodyOffset = e.offsetTop !== o, e.removeChild(t), I.offset.initialize = I.noop
		},
		bodyOffset: function(e) {
			var t = e.offsetTop,
				n = e.offsetLeft;
			I.offset.initialize(), I.offset.doesNotIncludeMarginInBodyOffset && (t += parseFloat(I.css(e, "marginTop")) || 0, n += parseFloat(I.css(e, "marginLeft")) || 0);
			return {
				top: t,
				left: n
			}
		},
		setOffset: function(e, t, n) {
			var i = I.css(e, "position");
			i === "static" && (e.style.position = "relative");
			var r = I(e),
				a = r.offset(),
				o = I.css(e, "top"),
				s = I.css(e, "left"),
				l = (i === "absolute" || i === "fixed") && I.inArray("auto", [o, s]) > -1,
				u = {},
				c = {},
				d, f;
			l ? (c = r.position(), d = c.top, f = c.left) : (d = parseFloat(o) || 0, f = parseFloat(s) || 0), I.isFunction(t) && (t = t.call(e, n, a)), t.top != null && (u.top = t.top - a.top + d), t.left != null && (u.left = t.left - a.left + f), "using" in t ? t.using.call(e, u) : r.css(u)
		}
	}, I.fn.extend({
		position: function() {
			if (!this[0]) return null;
			var e = this[0],
				t = this.offsetParent(),
				n = this.offset(),
				i = _t.test(t[0].nodeName) ? {
					top: 0,
					left: 0
				} : t.offset();
			n.top -= parseFloat(I.css(e, "marginTop")) || 0, n.left -= parseFloat(I.css(e, "marginLeft")) || 0, i.top += parseFloat(I.css(t[0], "borderTopWidth")) || 0, i.left += parseFloat(I.css(t[0], "borderLeftWidth")) || 0;
			return {
				top: n.top - i.top,
				left: n.left - i.left
			}
		},
		offsetParent: function() {
			return this.map(function() {
				var e = this.offsetParent || F.body;
				while (e && !_t.test(e.nodeName) && I.css(e, "position") === "static") e = e.offsetParent;
				return e
			})
		}
	}), I.each(["Left", "Top"], function(e, i) {
		var r = "scroll" + i;
		I.fn[r] = function(i) {
			var a, o;
			if (i === t) {
				a = this[0];
				if (!a) return null;
				o = n(a);
				return o ? "pageXOffset" in o ? o[e ? "pageYOffset" : "pageXOffset"] : I.support.boxModel && o.document.documentElement[r] || o.document.body[r] : a[r]
			}
			return this.each(function() {
				o = n(this), o ? o.scrollTo(e ? I(o).scrollLeft() : i, e ? i : I(o).scrollTop()) : this[r] = i
			})
		}
	}), I.each(["Height", "Width"], function(e, n) {
		var i = n.toLowerCase();
		I.fn["inner" + n] = function() {
			var e = this[0];
			return e && e.style ? parseFloat(I.css(e, i, "padding")) : null
		}, I.fn["outer" + n] = function(e) {
			var t = this[0];
			return t && t.style ? parseFloat(I.css(t, i, e ? "margin" : "border")) : null
		}, I.fn[i] = function(e) {
			var r = this[0];
			if (!r) return e == null ? null : this;
			if (I.isFunction(e)) return this.each(function(t) {
				var n = I(this);
				n[i](e.call(this, t, n[i]()))
			});
			if (I.isWindow(r)) {
				var a = r.document.documentElement["client" + n];
				return r.document.compatMode === "CSS1Compat" && a || r.document.body["client" + n] || a
			}
			if (r.nodeType === 9) return Math.max(r.documentElement["client" + n], r.body["scroll" + n], r.documentElement["scroll" + n], r.body["offset" + n], r.documentElement["offset" + n]);
			if (e === t) {
				var o = I.css(r, i),
					s = parseFloat(o);
				return I.isNaN(s) ? o : s
			}
			return this.css(i, typeof e == "string" ? e : e + "px")
		}
	}), e.polyvObject = I
})(window);
!
function(e, t) {
	"object" == typeof exports ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Spinner = t()
}(this, function() {
	"use strict";

	function e(e, t) {
		var n, i = document.createElement(e || "div");
		for (n in t) i[n] = t[n];
		return i
	}
	function t(e) {
		for (var t = 1, n = arguments.length; n > t; t++) e.appendChild(arguments[t]);
		return e
	}
	function n(e, t, n, i) {
		var r = ["opacity", t, ~~ (100 * e), n, i].join("-"),
			a = .01 + n / i * 100,
			o = Math.max(1 - (1 - e) / t * (100 - a), e),
			s = u.substring(0, u.indexOf("Animation")).toLowerCase(),
			l = s && "-" + s + "-" || "";
		return d[r] || (f.insertRule("@" + l + "keyframes " + r + "{0%{opacity:" + o + "}" + a + "%{opacity:" + e + "}" + (a + .01) + "%{opacity:1}" + (a + t) % 100 + "%{opacity:" + e + "}100%{opacity:" + o + "}}", f.cssRules.length), d[r] = 1), r
	}
	function i(e, t) {
		var n, i, r = e.style;
		for (t = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < c.length; i++) if (n = c[i] + t, void 0 !== r[n]) return n;
		return void 0 !== r[t] ? t : void 0
	}
	function r(e, t) {
		for (var n in t) e.style[i(e, n) || n] = t[n];
		return e
	}
	function a(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var i in n) void 0 === e[i] && (e[i] = n[i])
		}
		return e
	}
	function o(e, t) {
		return "string" == typeof e ? e : e[t % e.length]
	}
	function s(e) {
		this.opts = a(e || {}, s.defaults, p)
	}
	function l() {
		function n(t, n) {
			return e("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', n)
		}
		f.addRule(".spin-vml", "behavior:url(#default#VML)"), s.prototype.lines = function(e, i) {
			function a() {
				return r(n("group", {
					coordsize: c + " " + c,
					coordorigin: -u + " " + -u
				}), {
					width: c,
					height: c
				})
			}
			function s(e, s, l) {
				t(f, t(r(a(), {
					rotation: 360 / i.lines * e + "deg",
					left: ~~s
				}), t(r(n("roundrect", {
					arcsize: i.corners
				}), {
					width: u,
					height: i.width,
					left: i.radius,
					top: -i.width >> 1,
					filter: l
				}), n("fill", {
					color: o(i.color, e),
					opacity: i.opacity
				}), n("stroke", {
					opacity: 0
				}))))
			}
			var l, u = i.length + i.width,
				c = 2 * u,
				d = 2 * -(i.width + i.length) + "px",
				f = r(a(), {
					position: "absolute",
					top: d,
					left: d
				});
			if (i.shadow) for (l = 1; l <= i.lines; l++) s(l, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
			for (l = 1; l <= i.lines; l++) s(l);
			return t(e, f)
		}, s.prototype.opacity = function(e, t, n, i) {
			var r = e.firstChild;
			i = i.shadow && i.lines || 0, r && t + i < r.childNodes.length && (r = r.childNodes[t + i], r = r && r.firstChild, r = r && r.firstChild, r && (r.opacity = n))
		}
	}
	var u, c = ["webkit", "Moz", "ms", "O"],
		d = {},
		f = function() {
			var n = e("style", {
				type: "text/css"
			});
			return t(document.getElementsByTagName("head")[0], n), n.sheet || n.styleSheet
		}(),
		p = {
			lines: 12,
			length: 7,
			width: 5,
			radius: 10,
			rotate: 0,
			corners: 1,
			color: "#000",
			direction: 1,
			speed: 1,
			trail: 100,
			opacity: .25,
			fps: 20,
			zIndex: 2e9,
			className: "spinner",
			top: "50%",
			left: "50%",
			position: "absolute"
		};
	s.defaults = {}, a(s.prototype, {
		spin: function(t) {
			this.stop(); {
				var n = this,
					i = n.opts,
					a = n.el = r(e(0, {
						className: i.className
					}), {
						position: i.position,
						width: 0,
						zIndex: i.zIndex
					});
				i.radius + i.length + i.width
			}
			if (r(a, {
				left: i.left,
				top: i.top
			}), t && t.insertBefore(a, t.firstChild || null), a.setAttribute("role", "progressbar"), n.lines(a, n.opts), !u) {
				var o, s = 0,
					l = (i.lines - 1) * (1 - i.direction) / 2,
					c = i.fps,
					d = c / i.speed,
					f = (1 - i.opacity) / (d * i.trail / 100),
					p = d / i.lines;
				!
				function h() {
					s++;
					for (var e = 0; e < i.lines; e++) o = Math.max(1 - (s + (i.lines - e) * p) % d * f, i.opacity), n.opacity(a, e * i.direction + l, o, i);
					n.timeout = n.el && setTimeout(h, ~~ (1e3 / c))
				}()
			}
			return n
		},
		stop: function() {
			var e = this.el;
			return e && (clearTimeout(this.timeout), e.parentNode && e.parentNode.removeChild(e), this.el = void 0), this
		},
		lines: function(i, a) {
			function s(t, n) {
				return r(e(), {
					position: "absolute",
					width: a.length + a.width + "px",
					height: a.width + "px",
					background: t,
					boxShadow: n,
					transformOrigin: "left",
					transform: "rotate(" + ~~ (360 / a.lines * c + a.rotate) + "deg) translate(" + a.radius + "px,0)",
					borderRadius: (a.corners * a.width >> 1) + "px"
				})
			}
			for (var l, c = 0, d = (a.lines - 1) * (1 - a.direction) / 2; c < a.lines; c++) l = r(e(), {
				position: "absolute",
				top: 1 + ~ (a.width / 2) + "px",
				transform: a.hwaccel ? "translate3d(0,0,0)" : "",
				opacity: a.opacity,
				animation: u && n(a.opacity, a.trail, d + c * a.direction, a.lines) + " " + 1 / a.speed + "s linear infinite"
			}), a.shadow && t(l, r(s("#000", "0 0 4px #000"), {
				top: "2px"
			})), t(i, t(l, s(o(a.color, c), "0 0 1px rgba(0,0,0,.1)")));
			return i
		},
		opacity: function(e, t, n) {
			t < e.childNodes.length && (e.childNodes[t].style.opacity = n)
		}
	});
	var h = r(e("group"), {
		behavior: "url(#default#VML)"
	});
	return !i(h, "transform") && h.adj ? l() : u = i(h, "animation"), s
});
var CryptoJS = CryptoJS ||
function(e, t) {
	var n = {},
		i = n.lib = {},
		r = i.Base = function() {
			function e() {}
			return {
				extend: function(t) {
					e.prototype = this;
					var n = new e;
					t && n.mixIn(t);
					n.$super = this;
					return n
				},
				create: function() {
					var e = this.extend();
					e.init.apply(e, arguments);
					return e
				},
				init: function() {},
				mixIn: function(e) {
					for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
					e.hasOwnProperty("toString") && (this.toString = e.toString)
				},
				clone: function() {
					return this.$super.extend(this)
				}
			}
		}(),
		a = i.WordArray = r.extend({
			init: function(e, n) {
				e = this.words = e || [];
				this.sigBytes = n != t ? n : 4 * e.length
			},
			toString: function(e) {
				return (e || s).stringify(this)
			},
			concat: function(e) {
				var t = this.words,
					n = e.words,
					i = this.sigBytes,
					e = e.sigBytes;
				this.clamp();
				if (i % 4) for (var r = 0; r < e; r++) t[i + r >>> 2] |= (n[r >>> 2] >>> 24 - 8 * (r % 4) & 255) << 24 - 8 * ((i + r) % 4);
				else if (65535 < n.length) for (r = 0; r < e; r += 4) t[i + r >>> 2] = n[r >>> 2];
				else t.push.apply(t, n);
				this.sigBytes += e;
				return this
			},
			clamp: function() {
				var t = this.words,
					n = this.sigBytes;
				t[n >>> 2] &= 4294967295 << 32 - 8 * (n % 4);
				t.length = e.ceil(n / 4)
			},
			clone: function() {
				var e = r.clone.call(this);
				e.words = this.words.slice(0);
				return e
			},
			random: function(t) {
				for (var n = [], i = 0; i < t; i += 4) n.push(4294967296 * e.random() | 0);
				return a.create(n, t)
			}
		}),
		o = n.enc = {},
		s = o.Hex = {
			stringify: function(e) {
				for (var t = e.words, e = e.sigBytes, n = [], i = 0; i < e; i++) {
					var r = t[i >>> 2] >>> 24 - 8 * (i % 4) & 255;
					n.push((r >>> 4).toString(16));
					n.push((r & 15).toString(16))
				}
				return n.join("")
			},
			parse: function(e) {
				for (var t = e.length, n = [], i = 0; i < t; i += 2) n[i >>> 3] |= parseInt(e.substr(i, 2), 16) << 24 - 4 * (i % 8);
				return a.create(n, t / 2)
			}
		},
		l = o.Latin1 = {
			stringify: function(e) {
				for (var t = e.words, e = e.sigBytes, n = [], i = 0; i < e; i++) n.push(String.fromCharCode(t[i >>> 2] >>> 24 - 8 * (i % 4) & 255));
				return n.join("")
			},
			parse: function(e) {
				for (var t = e.length, n = [], i = 0; i < t; i++) n[i >>> 2] |= (e.charCodeAt(i) & 255) << 24 - 8 * (i % 4);
				return a.create(n, t)
			}
		},
		u = o.Utf8 = {
			stringify: function(e) {
				try {
					return decodeURIComponent(escape(l.stringify(e)))
				} catch (t) {
					throw Error("Malformed UTF-8 data")
				}
			},
			parse: function(e) {
				return l.parse(unescape(encodeURIComponent(e)))
			}
		},
		c = i.BufferedBlockAlgorithm = r.extend({
			reset: function() {
				this._data = a.create();
				this._nDataBytes = 0
			},
			_append: function(e) {
				"string" == typeof e && (e = u.parse(e));
				this._data.concat(e);
				this._nDataBytes += e.sigBytes
			},
			_process: function(t) {
				var n = this._data,
					i = n.words,
					r = n.sigBytes,
					o = this.blockSize,
					s = r / (4 * o),
					s = t ? e.ceil(s) : e.max((s | 0) - this._minBufferSize, 0),
					t = s * o,
					r = e.min(4 * t, r);
				if (t) {
					for (var l = 0; l < t; l += o) this._doProcessBlock(i, l);
					l = i.splice(0, t);
					n.sigBytes -= r
				}
				return a.create(l, r)
			},
			clone: function() {
				var e = r.clone.call(this);
				e._data = this._data.clone();
				return e
			},
			_minBufferSize: 0
		});
	i.Hasher = c.extend({
		init: function() {
			this.reset()
		},
		reset: function() {
			c.reset.call(this);
			this._doReset()
		},
		update: function(e) {
			this._append(e);
			this._process();
			return this
		},
		finalize: function(e) {
			e && this._append(e);
			this._doFinalize();
			return this._hash
		},
		clone: function() {
			var e = c.clone.call(this);
			e._hash = this._hash.clone();
			return e
		},
		blockSize: 16,
		_createHelper: function(e) {
			return function(t, n) {
				return e.create(n).finalize(t)
			}
		},
		_createHmacHelper: function(e) {
			return function(t, n) {
				return d.HMAC.create(e, n).finalize(t)
			}
		}
	});
	var d = n.algo = {};
	return n
}(Math);
(function(e) {
	function t(e, t, n, i, r, a, o) {
		e = e + (t & n | ~t & i) + r + o;
		return (e << a | e >>> 32 - a) + t
	}
	function n(e, t, n, i, r, a, o) {
		e = e + (t & i | n & ~i) + r + o;
		return (e << a | e >>> 32 - a) + t
	}
	function i(e, t, n, i, r, a, o) {
		e = e + (t ^ n ^ i) + r + o;
		return (e << a | e >>> 32 - a) + t
	}
	function r(e, t, n, i, r, a, o) {
		e = e + (n ^ (t | ~i)) + r + o;
		return (e << a | e >>> 32 - a) + t
	}
	var a = CryptoJS,
		o = a.lib,
		s = o.WordArray,
		o = o.Hasher,
		l = a.algo,
		u = [];
	(function() {
		for (var t = 0; 64 > t; t++) u[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0
	})();
	l = l.MD5 = o.extend({
		_doReset: function() {
			this._hash = s.create([1732584193, 4023233417, 2562383102, 271733878])
		},
		_doProcessBlock: function(e, a) {
			for (var o = 0; 16 > o; o++) {
				var s = a + o,
					l = e[s];
				e[s] = (l << 8 | l >>> 24) & 16711935 | (l << 24 | l >>> 8) & 4278255360
			}
			for (var s = this._hash.words, l = s[0], c = s[1], d = s[2], f = s[3], o = 0; 64 > o; o += 4) 16 > o ? (l = t(l, c, d, f, e[a + o], 7, u[o]), f = t(f, l, c, d, e[a + o + 1], 12, u[o + 1]), d = t(d, f, l, c, e[a + o + 2], 17, u[o + 2]), c = t(c, d, f, l, e[a + o + 3], 22, u[o + 3])) : 32 > o ? (l = n(l, c, d, f, e[a + (o + 1) % 16], 5, u[o]), f = n(f, l, c, d, e[a + (o + 6) % 16], 9, u[o + 1]), d = n(d, f, l, c, e[a + (o + 11) % 16], 14, u[o + 2]), c = n(c, d, f, l, e[a + o % 16], 20, u[o + 3])) : 48 > o ? (l = i(l, c, d, f, e[a + (3 * o + 5) % 16], 4, u[o]), f = i(f, l, c, d, e[a + (3 * o + 8) % 16], 11, u[o + 1]), d = i(d, f, l, c, e[a + (3 * o + 11) % 16], 16, u[o + 2]), c = i(c, d, f, l, e[a + (3 * o + 14) % 16], 23, u[o + 3])) : (l = r(l, c, d, f, e[a + 3 * o % 16], 6, u[o]), f = r(f, l, c, d, e[a + (3 * o + 7) % 16], 10, u[o + 1]), d = r(d, f, l, c, e[a + (3 * o + 14) % 16], 15, u[o + 2]), c = r(c, d, f, l, e[a + (3 * o + 5) % 16], 21, u[o + 3]));
			s[0] = s[0] + l | 0;
			s[1] = s[1] + c | 0;
			s[2] = s[2] + d | 0;
			s[3] = s[3] + f | 0
		},
		_doFinalize: function() {
			var e = this._data,
				t = e.words,
				n = 8 * this._nDataBytes,
				i = 8 * e.sigBytes;
			t[i >>> 5] |= 128 << 24 - i % 32;
			t[(i + 64 >>> 9 << 4) + 14] = (n << 8 | n >>> 24) & 16711935 | (n << 24 | n >>> 8) & 4278255360;
			e.sigBytes = 4 * (t.length + 1);
			this._process();
			e = this._hash.words;
			for (t = 0; 4 > t; t++) n = e[t], e[t] = (n << 8 | n >>> 24) & 16711935 | (n << 24 | n >>> 8) & 4278255360
		}
	});
	a.MD5 = o._createHelper(l);
	a.HmacMD5 = o._createHmacHelper(l)
})(Math);
var swfobject = function() {
		var e = "undefined",
			t = "object",
			n = "Shockwave Flash",
			i = "ShockwaveFlash.ShockwaveFlash",
			r = "application/x-shockwave-flash",
			a = "SWFObjectExprInst",
			o = "onreadystatechange",
			s = window,
			l = document,
			u = navigator,
			c = false,
			d = [A],
			f = [],
			p = [],
			h = [],
			v, m, g, y, w = false,
			b = false,
			_, T, x = true,
			S = function() {
				var a = typeof l.getElementById != e && typeof l.getElementsByTagName != e && typeof l.createElement != e,
					o = u.userAgent.toLowerCase(),
					d = u.platform.toLowerCase(),
					f = d ? /win/.test(d) : /win/.test(o),
					p = d ? /mac/.test(d) : /mac/.test(o),
					h = /webkit/.test(o) ? parseFloat(o.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false,
					v = !+"1",
					m = [0, 0, 0],
					g = null;
				if (typeof u.plugins != e && typeof u.plugins[n] == t) {
					g = u.plugins[n].description;
					if (g && !(typeof u.mimeTypes != e && u.mimeTypes[r] && !u.mimeTypes[r].enabledPlugin)) {
						c = true;
						v = false;
						g = g.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
						m[0] = parseInt(g.replace(/^(.*)\..*$/, "$1"), 10);
						m[1] = parseInt(g.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
						m[2] = /[a-zA-Z]/.test(g) ? parseInt(g.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
					}
				} else {
					if (typeof s.ActiveXObject != e) {
						try {
							var y = new ActiveXObject(i);
							if (y) {
								g = y.GetVariable("$version");
								if (g) {
									v = true;
									g = g.split(" ")[1].split(",");
									m = [parseInt(g[0], 10), parseInt(g[1], 10), parseInt(g[2], 10)]
								}
							}
						} catch (w) {}
					}
				}
				return {
					w3: a,
					pv: m,
					wk: h,
					ie: v,
					win: f,
					mac: p
				}
			}(),
			j = function() {
				if (!S.w3) {
					return
				}
				if (typeof l.readyState != e && l.readyState == "complete" || typeof l.readyState == e && (l.getElementsByTagName("body")[0] || l.body)) {
					k()
				}
				if (!w) {
					if (typeof l.addEventListener != e) {
						l.addEventListener("DOMContentLoaded", k, false)
					}
					if (S.ie && S.win) {
						l.attachEvent(o, function() {
							if (l.readyState == "complete") {
								l.detachEvent(o, arguments.callee);
								k()
							}
						});
						if (s == top) {
							(function() {
								if (w) {
									return
								}
								try {
									l.documentElement.doScroll("left")
								} catch (e) {
									setTimeout(arguments.callee, 0);
									return
								}
								k()
							})()
						}
					}
					if (S.wk) {
						(function() {
							if (w) {
								return
							}
							if (!/loaded|complete/.test(l.readyState)) {
								setTimeout(arguments.callee, 0);
								return
							}
							k()
						})()
					}
					P(k)
				}
			}();

		function k() {
			if (w) {
				return
			}
			try {
				var e = l.getElementsByTagName("body")[0].appendChild(U("span"));
				e.parentNode.removeChild(e)
			} catch (t) {
				return
			}
			w = true;
			var n = d.length;
			for (var i = 0; i < n; i++) {
				d[i]()
			}
		}
		function C(e) {
			if (w) {
				e()
			} else {
				d[d.length] = e
			}
		}
		function P(t) {
			if (typeof s.addEventListener != e) {
				s.addEventListener("load", t, false)
			} else {
				if (typeof l.addEventListener != e) {
					l.addEventListener("load", t, false)
				} else {
					if (typeof s.attachEvent != e) {
						W(s, "onload", t)
					} else {
						if (typeof s.onload == "function") {
							var n = s.onload;
							s.onload = function() {
								n();
								t()
							}
						} else {
							s.onload = t
						}
					}
				}
			}
		}
		function A() {
			if (c) {
				N()
			} else {
				E()
			}
		}
		function N() {
			var n = l.getElementsByTagName("body")[0];
			var i = U(t);
			i.setAttribute("type", r);
			var a = n.appendChild(i);
			if (a) {
				var o = 0;
				(function() {
					if (typeof a.GetVariable != e) {
						var t = a.GetVariable("$version");
						if (t) {
							t = t.split(" ")[1].split(",");
							S.pv = [parseInt(t[0], 10), parseInt(t[1], 10), parseInt(t[2], 10)]
						}
					} else {
						if (o < 10) {
							o++;
							setTimeout(arguments.callee, 10);
							return
						}
					}
					n.removeChild(i);
					a = null;
					E()
				})()
			} else {
				E()
			}
		}
		function E() {
			var t = f.length;
			if (t > 0) {
				for (var n = 0; n < t; n++) {
					var i = f[n].id;
					var r = f[n].callbackFn;
					var a = {
						success: false,
						id: i
					};
					if (S.pv[0] > 0) {
						var o = R(i);
						if (o) {
							if (z(f[n].swfVersion) && !(S.wk && S.wk < 312)) {
								$(i, true);
								if (r) {
									a.success = true;
									a.ref = F(i);
									r(a)
								}
							} else {
								if (f[n].expressInstall && L()) {
									var s = {};
									s.data = f[n].expressInstall;
									s.width = o.getAttribute("width") || "0";
									s.height = o.getAttribute("height") || "0";
									if (o.getAttribute("class")) {
										s.styleclass = o.getAttribute("class")
									}
									if (o.getAttribute("align")) {
										s.align = o.getAttribute("align")
									}
									var l = {};
									var u = o.getElementsByTagName("param");
									var c = u.length;
									for (var d = 0; d < c; d++) {
										if (u[d].getAttribute("name").toLowerCase() != "movie") {
											l[u[d].getAttribute("name")] = u[d].getAttribute("value")
										}
									}
									O(s, l, i, r)
								} else {
									I(o);
									if (r) {
										r(a)
									}
								}
							}
						}
					} else {
						$(i, true);
						if (r) {
							var p = F(i);
							if (p && typeof p.SetVariable != e) {
								a.success = true;
								a.ref = p
							}
							r(a)
						}
					}
				}
			}
		}
		function F(n) {
			var i = null;
			var r = R(n);
			if (r && r.nodeName == "OBJECT") {
				if (typeof r.SetVariable != e) {
					i = r
				} else {
					var a = r.getElementsByTagName(t)[0];
					if (a) {
						i = a
					}
				}
			}
			return i
		}
		function L() {
			return !b && z("6.0.65") && (S.win || S.mac) && !(S.wk && S.wk < 312)
		}
		function O(t, n, i, r) {
			b = true;
			g = r || null;
			y = {
				success: false,
				id: i
			};
			var o = R(i);
			if (o) {
				if (o.nodeName == "OBJECT") {
					v = D(o);
					m = null
				} else {
					v = o;
					m = i
				}
				t.id = a;
				if (typeof t.width == e || !/%$/.test(t.width) && parseInt(t.width, 10) < 310) {
					t.width = "310"
				}
				if (typeof t.height == e || !/%$/.test(t.height) && parseInt(t.height, 10) < 137) {
					t.height = "137"
				}
				l.title = l.title.slice(0, 47) + " - Flash Player Installation";
				var u = S.ie && S.win ? "ActiveX" : "PlugIn",
					c = "MMredirectURL=" + s.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + u + "&MMdoctitle=" + l.title;
				if (typeof n.flashvars != e) {
					n.flashvars += "&" + c
				} else {
					n.flashvars = c
				}
				if (S.ie && S.win && o.readyState != 4) {
					var d = U("div");
					i += "SWFObjectNew";
					d.setAttribute("id", i);
					o.parentNode.insertBefore(d, o);
					o.style.display = "none";
					(function() {
						if (o.readyState == 4) {
							o.parentNode.removeChild(o)
						} else {
							setTimeout(arguments.callee, 10)
						}
					})()
				}
				M(t, n, i)
			}
		}
		function I(e) {
			if (S.ie && S.win && e.readyState != 4) {
				var t = U("div");
				e.parentNode.insertBefore(t, e);
				t.parentNode.replaceChild(D(e), t);
				e.style.display = "none";
				(function() {
					if (e.readyState == 4) {
						e.parentNode.removeChild(e)
					} else {
						setTimeout(arguments.callee, 10)
					}
				})()
			} else {
				e.parentNode.replaceChild(D(e), e)
			}
		}
		function D(e) {
			var n = U("div");
			if (S.win && S.ie) {
				n.innerHTML = e.innerHTML
			} else {
				var i = e.getElementsByTagName(t)[0];
				if (i) {
					var r = i.childNodes;
					if (r) {
						var a = r.length;
						for (var o = 0; o < a; o++) {
							if (!(r[o].nodeType == 1 && r[o].nodeName == "PARAM") && !(r[o].nodeType == 8)) {
								n.appendChild(r[o].cloneNode(true))
							}
						}
					}
				}
			}
			return n
		}
		function M(n, i, a) {
			var o, s = R(a);
			if (S.wk && S.wk < 312) {
				return o
			}
			if (s) {
				if (typeof n.id == e) {
					n.id = a
				}
				if (S.ie && S.win) {
					var l = "";
					for (var u in n) {
						if (n[u] != Object.prototype[u]) {
							if (u.toLowerCase() == "data") {
								i.movie = n[u]
							} else {
								if (u.toLowerCase() == "styleclass") {
									l += ' class="' + n[u] + '"'
								} else {
									if (u.toLowerCase() != "classid") {
										l += " " + u + '="' + n[u] + '"'
									}
								}
							}
						}
					}
					var c = "";
					for (var d in i) {
						if (i[d] != Object.prototype[d]) {
							c += '<param name="' + d + '" value="' + i[d] + '" />'
						}
					}
					s.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + l + ">" + c + "</object>";
					p[p.length] = n.id;
					o = R(n.id)
				} else {
					var f = U(t);
					f.setAttribute("type", r);
					for (var h in n) {
						if (n[h] != Object.prototype[h]) {
							if (h.toLowerCase() == "styleclass") {
								f.setAttribute("class", n[h])
							} else {
								if (h.toLowerCase() != "classid") {
									f.setAttribute(h, n[h])
								}
							}
						}
					}
					for (var v in i) {
						if (i[v] != Object.prototype[v] && v.toLowerCase() != "movie") {
							H(f, v, i[v])
						}
					}
					s.parentNode.replaceChild(f, s);
					o = f
				}
			}
			return o
		}
		function H(e, t, n) {
			var i = U("param");
			i.setAttribute("name", t);
			i.setAttribute("value", n);
			e.appendChild(i)
		}
		function B(e) {
			var t = R(e);
			if (t && t.nodeName == "OBJECT") {
				if (S.ie && S.win) {
					t.style.display = "none";
					(function() {
						if (t.readyState == 4) {
							V(e)
						} else {
							setTimeout(arguments.callee, 10)
						}
					})()
				} else {
					t.parentNode.removeChild(t)
				}
			}
		}
		function V(e) {
			var t = R(e);
			if (t) {
				for (var n in t) {
					if (typeof t[n] == "function") {
						t[n] = null
					}
				}
				t.parentNode.removeChild(t)
			}
		}
		function R(e) {
			var t = null;
			try {
				t = l.getElementById(e)
			} catch (n) {}
			return t
		}
		function U(e) {
			return l.createElement(e)
		}
		function W(e, t, n) {
			e.attachEvent(t, n);
			h[h.length] = [e, t, n]
		}
		function z(e) {
			var t = S.pv,
				n = e.split(".");
			n[0] = parseInt(n[0], 10);
			n[1] = parseInt(n[1], 10) || 0;
			n[2] = parseInt(n[2], 10) || 0;
			return t[0] > n[0] || t[0] == n[0] && t[1] > n[1] || t[0] == n[0] && t[1] == n[1] && t[2] >= n[2] ? true : false
		}
		function q(n, i, r, a) {
			if (S.ie && S.mac) {
				return
			}
			var o = l.getElementsByTagName("head")[0];
			if (!o) {
				return
			}
			var s = r && typeof r == "string" ? r : "screen";
			if (a) {
				_ = null;
				T = null
			}
			if (!_ || T != s) {
				var u = U("style");
				u.setAttribute("type", "text/css");
				u.setAttribute("media", s);
				_ = o.appendChild(u);
				if (S.ie && S.win && typeof l.styleSheets != e && l.styleSheets.length > 0) {
					_ = l.styleSheets[l.styleSheets.length - 1]
				}
				T = s
			}
			if (S.ie && S.win) {
				if (_ && typeof _.addRule == t) {
					_.addRule(n, i)
				}
			} else {
				if (_ && typeof l.createTextNode != e) {
					_.appendChild(l.createTextNode(n + " {" + i + "}"))
				}
			}
		}
		function $(e, t) {
			if (!x) {
				return
			}
			var n = t ? "visible" : "hidden";
			if (w && R(e)) {
				R(e).style.visibility = n
			} else {
				q("#" + e, "visibility:" + n)
			}
		}
		function X(t) {
			var n = /[\\\"<>\.;]/;
			var i = n.exec(t) != null;
			return i && typeof encodeURIComponent != e ? encodeURIComponent(t) : t
		}
		var J = function() {
				if (S.ie && S.win) {
					window.attachEvent("onunload", function() {
						var e = h.length;
						for (var t = 0; t < e; t++) {
							h[t][0].detachEvent(h[t][1], h[t][2])
						}
						var n = p.length;
						for (var i = 0; i < n; i++) {
							B(p[i])
						}
						for (var r in S) {
							S[r] = null
						}
						S = null;
						for (var a in swfobject) {
							swfobject[a] = null
						}
						swfobject = null
					})
				}
			}();
		return {
			registerObject: function(e, t, n, i) {
				if (S.w3 && e && t) {
					var r = {};
					r.id = e;
					r.swfVersion = t;
					r.expressInstall = n;
					r.callbackFn = i;
					f[f.length] = r;
					$(e, false)
				} else {
					if (i) {
						i({
							success: false,
							id: e
						})
					}
				}
			},
			getObjectById: function(e) {
				if (S.w3) {
					return F(e)
				}
			},
			embedSWF: function(n, i, r, a, o, s, l, u, c, d) {
				var f = {
					success: false,
					id: i
				};
				if (S.w3 && !(S.wk && S.wk < 312) && n && i && r && a && o) {
					$(i, false);
					C(function() {
						r += "";
						a += "";
						var p = {};
						if (c && typeof c === t) {
							for (var h in c) {
								p[h] = c[h]
							}
						}
						p.data = n;
						p.width = r;
						p.height = a;
						var v = {};
						if (u && typeof u === t) {
							for (var m in u) {
								v[m] = u[m]
							}
						}
						if (l && typeof l === t) {
							for (var g in l) {
								if (typeof v.flashvars != e) {
									v.flashvars += "&" + g + "=" + l[g]
								} else {
									v.flashvars = g + "=" + l[g]
								}
							}
						}
						if (z(o)) {
							var y = M(p, v, i);
							if (p.id == i) {
								$(i, true)
							}
							f.success = true;
							f.ref = y
						} else {
							if (s && L()) {
								p.data = s;
								O(p, v, i, d);
								return
							} else {
								$(i, true)
							}
						}
						if (d) {
							d(f)
						}
					})
				} else {
					if (d) {
						d(f)
					}
				}
			},
			switchOffAutoHideShow: function() {
				x = false
			},
			ua: S,
			getFlashPlayerVersion: function() {
				return {
					major: S.pv[0],
					minor: S.pv[1],
					release: S.pv[2]
				}
			},
			hasFlashPlayerVersion: z,
			createSWF: function(e, t, n) {
				if (S.w3) {
					return M(e, t, n)
				} else {
					return undefined
				}
			},
			showExpressInstall: function(e, t, n, i) {
				if (S.w3 && L()) {
					O(e, t, n, i)
				}
			},
			removeSWF: function(e) {
				if (S.w3) {
					B(e)
				}
			},
			createCSS: function(e, t, n, i) {
				if (S.w3) {
					q(e, t, n, i)
				}
			},
			addDomLoadEvent: C,
			addLoadEvent: P,
			getQueryParamValue: function(e) {
				var t = l.location.search || l.location.hash;
				if (t) {
					if (/\?/.test(t)) {
						t = t.split("?")[1]
					}
					if (e == null) {
						return X(t)
					}
					var n = t.split("&");
					for (var i = 0; i < n.length; i++) {
						if (n[i].substring(0, n[i].indexOf("=")) == e) {
							return X(n[i].substring(n[i].indexOf("=") + 1))
						}
					}
				}
				return ""
			},
			expressInstallCallback: function() {
				if (b) {
					var e = R(a);
					if (e && v) {
						e.parentNode.replaceChild(v, e);
						if (m) {
							$(m, true);
							if (S.ie && S.win) {
								v.style.display = "block"
							}
						}
						if (g) {
							g(y)
						}
					}
					b = false
				}
			}
		}
	}();
(function(e) {
	e.version = 2016092901;
	e.majorVersion = 10;
	e.majorRevision = 3;
	createPreviewPlayer = function(e) {
		e.previewMode = true;
		return createShowPlayer(e, this)
	};
	createShowPlayer = function(t, n) {
		if (!arguments[1]) {
			n = this
		}
		if (t.forceFlash) {
			if (t.vid && t.previewMode) {
				t.vid = e.decode(t.vid)
			}
			return privateCreate(n, t)
		}
		if (e.isSupportedHTMLDevice() || t.forceHTML5) {
			var i = JSON.stringify(t);
			var r = "http://";
			if (window.location.protocol == "https:") {
				r = "https://"
			}
			var a = r + "v3.polyv.net";
			var o = r + "player.polyv.net";
			var s = t;
			var l = window.location.href;
			var u = document.domain;
			var c = t.vid;
			var d = "polyvPlayer" + c;
			var f = false;
			var p = 1;
			var h = 0;
			var v = 0;
			var m = 0;
			var g = "";
			var y = 3;
			if (t.slot) {
				y = t.slot
			}
			if (typeof s2j_callOnBarrageUrl == "function") {
				g = s2j_callOnBarrageUrl()
			}
			var w = e('<div id="container' + t.vid + '"></div>');
			e(n).append(w);
			e(w).css("height", s.height);
			e(w).css("width", s.width);
			e(w).css("position", "relative");
			var b = "href=" + l + "&settings=" + i;
			var _ = r + "player.polyv.net/script/view" + y + ".html" + "?" + encodeURIComponent(b);
			if (t.beta_test == "on") {
				o = r + "beta.polyv.net";
				_ = r + "beta.polyv.net/file/player/trunk/view" + y + ".html" + "?" + encodeURIComponent(b)
			}
			e("<iframe />", {
				name: "polyvPlayer",
				id: d,
				frameborder: "0",
				style: "overflow:hidden;width:100%;height:100%;left:0;position:absolute;z-index:999",
				src: _,
				allowfullscreen: "",
				mozallowfullscreen: "",
				webkitallowfullscreen: ""
			}).appendTo(w);
			if (s.height == 0) {
				e.ajax({
					url: a + "/videojson/" + c + ".js",
					type: "GET",
					dataType: "jsonp",
					async: false,
					success: function(t) {
						s.ratio = t.ratio;
						p = s.ratio;
						var n = parseInt(e(w).css("width")) / s.ratio;
						s.height = n;
						e(w).css("height", n);
						if (s.listid || s.flashvars && s.flashvars.listid) {
							if (s.showVideoList == undefined || s.showVideoList == "on") {
								e("iframe").css("height", s.height + 95)
							}
						}
					}
				})
			}
			if (t.vid && s.previewMode) {
				c = t.vid = e.decode(t.vid)
			}
			s.j2s_getDuration = function() {
				return h
			};
			s.j2s_getCurrentTime = function() {
				return v
			};
			s.j2s_resumeVideo = function() {
				S("j2s_resumeVideo", c)
			};
			s.j2s_playVideo = function() {
				S("j2s_playVideo", c)
			};
			s.j2s_pauseVideo = function() {
				S("j2s_pauseVideo", c)
			};
			s.j2s_seekVideo = function(e) {
				S("j2s_seekVideo", c, e)
			};
			s.j2s_stopVideo = function() {
				S("j2s_stopVideo", c)
			};
			s.j2s_stayInVideoTime = function() {
				return m
			};
			s.j2s_switch = function(e) {
				S("j2s_switch", c, e)
			};
			s.j2s_showBarrage = function() {
				S("j2s_showBarrage", c)
			};
			s.j2s_hideBarrage = function() {
				S("j2s_hideBarrage", c)
			};
			s.j2s_addBarrageMessage = function(e) {
				S("j2s_addBarrageMessage", c, e)
			};
			s.j2s_reloadBarrageData = function() {
				S("j2s_reloadBarrageData", c)
			};
			s.changeVid = function(e, t) {
				if (e == undefined || e == c || e.substr(0, 10) != c.substr(0, 10)) {
					return
				}
				if (!arguments[1]) {
					t = 0
				}
				var n = '{"vid":"' + e + '","watchStartTime":"' + t + '"}';
				S("changeVid", c, n);
				if (s.s2j_changeVid) {
					s.s2j_changeVid()
				}
				if (typeof s2j_changeVid == "function") {
					s2j_changeVid(c, e)
				}
				if (e != c) {
					c = e
				}
			};
			s.changeCode = function(e) {
				S("changeCode", c, e)
			};
			s.j2s_setVolume = function(e) {
				S("j2s_setVolume", c, e)
			};
			s.j2s_removeVideo = function() {
				e(n).empty()
			};
			var T = e(w).css("position");
			window.addEventListener("message", function(e) {
				if (e.data.vid == c) {
					switch (e.data.message) {
					case "s2j_onPlayerInitOver":
						if (s.s2j_onPlayerInitOver) {
							s.s2j_onPlayerInitOver()
						}
						if (typeof s2j_onPlayerInitOver == "function") {
							s2j_onPlayerInitOver(c)
						}
						break;
					case "s2j_onPlayStart":
						h = e.data.duration;
						if (s.s2j_onPlayStart) {
							f = true;
							s.s2j_onPlayStart()
						}
						if (typeof s2j_onPlayStart == "function") {
							s2j_onPlayStart(c)
						}
						break;
					case "s2j_onVideoPlay":
						if (s.s2j_onVideoPlay) {
							s.s2j_onVideoPlay()
						}
						if (typeof s2j_onVideoPlay == "function") {
							s2j_onVideoPlay(c)
						}
						break;
					case "s2j_onVideoPause":
						if (s.s2j_onVideoPause) {
							s.s2j_onVideoPause()
						}
						if (typeof s2j_onVideoPause == "function") {
							s2j_onVideoPause(c)
						}
						break;
					case "s2j_onPlayOver":
						if (s.s2j_onPlayOver) {
							s.s2j_onPlayOver()
						}
						if (typeof s2j_onPlayOver == "function") {
							s2j_onPlayOver(c)
						}
						break;
					case "s2j_onSwitchHd":
						var t = e.data.hdNum + 1;
						if (s.s2j_onSwitchHd) {
							s.s2j_onSwitchHd(t)
						}
						if (typeof s2j_onSwitchHd == "function") {
							s2j_onSwitchHd(c, t)
						}
						break;
					case "s2j_onOverPlay":
						var n = e.data.type;
						var i = e.data.sec;
						if (s.s2j_onOverPlay) {
							s.s2j_onOverPlay(n, i)
						}
						if (typeof s2j_onOverPlay == "function") {
							s2j_onOverPlay(c, n, i)
						}
						break;
					case "renderParam":
						v = e.data.cur;
						m = e.data.stay;
						break;
					case "s2j_changeVideoId":
						c = e.data.id;
						break;
					case "documentReady":
						document.getElementById(d).addEventListener("touchend", function(e) {
							S("touchEnd", c)
						}, false);
						if (g != "") {
							S("j2s_openDanmu", c, g)
						}
						break
					}
				}
			}, false);
			window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
				setTimeout(function() {
					S("adjust", c)
				}, 50)
			}, false);
			var x = document.getElementById(d);

			function S(e, t, n) {
				if (!arguments[2]) n = 0;
				if (x == null || x == undefined) {
					return
				}
				x.contentWindow.postMessage({
					value: e,
					vid: t,
					param1: n
				}, o)
			}
			return s
		} else {
			if (t.vid && t.previewMode) {
				t.vid = e.decode(t.vid)
			}
			return privateCreate(n, t)
		}
	};
	createPlayer = function(e) {
		if (e.ban_ui == true || e.ban_ui == "on") {
			e.hidecontrol = "true";
			return privateCreate(this, e)
		} else {
			return createShowPlayer(e, this)
		}
	};
	privateCreate = function(t, n) {
		var i;
		var r;
		var a = "http://";
		if (window.location.protocol == "https:") {
			a = "https://"
		}
		var o = [a + "player.polyv.net", a + "v3.polyv.net"];
		var s;
		setCookie = function(e, t, n) {
			var i = new Date;
			i.setTime(i.getTime() + n * 24 * 60 * 60 * 1e3);
			var r = "expires=" + i.toGMTString();
			document.cookie = e + "=" + t + "; " + r + ";domain=.polyv.net;path=/"
		};
		e.renderInstallGif = function(e, t) {
			if (h.height == 0) {
				l()
			} else {
				u()
			}
		};

		function l() {
			e.getJSON(o[f] + "/videojson/" + h.vid + ".js", function(e) {
				h.ratio = e.ratio;
				if (h.width.charAt(h.width.length - 1) == "%") {
					var t = window.innerWidth > 0 ? window.innerWidth : screen.width;
					h.height = t * (parseInt(h.width) / 100) / e.ratio
				} else {
					h.height = h.width / e.ratio
				}
				u()
			}).error(function() {
				if (f == 0) {
					f++;
					l()
				}
			})
		}
		function u() {
			var n = "";
			if (y == e.playerType.INSTALLER) {
				n = "//player.polyv.net/script/images/install_flash_player.gif"
			} else {
				n = "//player.polyv.net/script/images/upgrade_flash_player.gif"
			}
			var i = e("<div />");
			i.attr("id", "plInstall").css({
				width: h.width,
				height: h.height,
				"background-image": "url(" + n + ")",
				"background-size": "contain",
				"background-position": "50%",
				"background-repeat": "no-repeat",
				cursor: "pointer"
			});
			t.append(i);
			var r = a + "www.adobe.com/go/getflash/";
			i.bind("click", function() {
				window.open(r, "_blank")
			})
		}
		e.launchFullScreen = function(e) {
			if (e.requestFullScreen) {
				e.requestFullScreen()
			} else if (e.mozRequestFullScreen) {
				e.mozRequestFullScreen()
			} else if (e.webkitRequestFullScreen) {
				e.webkitRequestFullScreen()
			}
		};
		e.makeFlashPlayer = function(t, n) {
			var i = e.isSupportedHTMLDevice();
			n.swf_link = a + n.domain + "/videos/player.swf";
			if (!n.flashvars) {
				n.flashvars = {}
			}
			n.flashvars.vid = n.vid;
			if (n.df) {
				n.flashvars.df = n.df
			}
			if (n.watch_start_time) {
				n.flashvars.watch_start_time = n.watch_start_time
			}
			if (n.watch_end_time) {
				n.flashvars.watch_end_time = n.watch_end_time
			}
			if (n.show_rate) {
				n.flashvars.show_rate = n.show_rate
			}
			if (n.teaser_time) {
				n.flashvars.teaser_time = n.teaser_time
			}
			if (n.code) {
				n.flashvars.code = n.code
			}
			if (n.ban_ad) {
				if (n.ban_ad == true) {
					n.ban_ad = "on"
				}
				n.flashvars.ban_ad = n.ban_ad
			}
			if (n.ban_ad_time) {
				if (n.ban_ad_time == true) {
					n.ban_ad_time = "on"
				}
				n.flashvars.ban_ad_time = n.ban_ad_time
			}
			if (n.showHd == false) {
				n.showHd = "off";
				n.flashvars.showHd = n.showHd
			}
			if (n.showHd == "off") {
				n.flashvars.showHd = n.showHd
			}
			if (n.ban_skin_progress) {
				if (n.ban_skin_progress == true) {
					n.ban_skin_progress = "on"
				}
				n.flashvars.ban_skin_progress = n.ban_skin_progress
			}
			if (n.teaserSkip) {
				n.flashvars.teaserSkip = n.teaserSkip
			}
			if (n.ban_skin_leftright_keyboard) {
				n.flashvars.ban_skin_leftright_keyboard = n.ban_skin_leftright_keyboard
			}
			if (n.loading_bg_img) {
				n.flashvars.cover_img = n.loading_bg_img
			}
			if (n.is_access_validurl) {
				n.flashvars.is_access_validurl = n.is_access_validurl
			}
			if (n.verification_data) {
				n.flashvars.verification_data = n.verification_data
			}
			if (n.showSrt) {
				if (n.showSrt == false) {
					n.showSrt = "off"
				}
				n.flashvars.showSrt = n.showSrt
			}
			if (n.listid) {
				n.flashvars.listid = n.listid
			}
			if (n.ban_ui) {
				if (n.ban_ui == true) {
					n.ban_ui = "on"
				}
				n.flashvars.ban_ui = n.ban_ui
			}
			if (i) {
				n.flashvars.banSaveSegData = "on"
			}
			for (var r in n.params) {
				n.flashvars[r] = n.params[r]
			}
			if (n.session_id) {
				n.flashvars.session_id = n.session_id
			}
			c(t, n)
		};

		function c(t, n) {
			var i = "";
			for (var r in n.flashvars) {
				i = i + r + "=" + n.flashvars[r] + "&"
			}
			for (var a in n.params) {
				n.flashvars[a] = n.params[a]
			}
			if (e.isIE()) {
				n.flashParams.movie = n.swf_link;
				var o = "";
				o += '<param name="flashvars" value="' + i + '" />';
				for (var s in n.flashParams) {
					o += '<param name="' + s + '" value="' + n.flashParams[s] + '" />'
				}
				var l = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="' + n.vid + '"' + ' width="' + n.width + '"' + ' height="' + n.height + '"' + ' type="application/x-shockwave-flash"' + ' class="polyvFlashObject">' + o + "</object>";
				t.html(l)
			} else {
				var u = document.createElement("object");
				u.type = "application/x-shockwave-flash";
				u.data = n.swf_link;
				u.id = n.vid;
				u.width = n.width;
				u.height = n.height;
				u.className = "polyvFlashObject";
				n.flashParams.flashvars = i;
				var c;
				for (var d in n.flashParams) {
					c = document.createElement("param");
					c.name = d;
					c.value = n.flashParams[d];
					u.appendChild(c)
				}
				t.html(u)
			}
		}
		function d() {
			initFlash = function() {
				h.hasPlayer = true
			};
			var e = (new Date).getTime();
			h.playerInterval = setInterval(function() {
				if (!h.hasPlayer) {
					if ((new Date).getTime() - e > 2e4) {
						clearInterval(h.playerInterval);
						h.swf_link = a + "players.polyv.net/videos/player.swf";
						c(t, h);
						if (typeof reCreateFlash == "function") {
							reCreateFlash(h.vid)
						}
					}
				} else {
					clearInterval(h.playerInterval)
				}
			}, 1e3)
		}
		e.renderFlash = function(t, n) {
			if (n.height == 0) {
				p()
			} else {
				e.makeFlashPlayer(t, n)
			}
		};
		var f = 0;

		function p() {
			e.getJSON(o[f] + "/videojson/" + h.vid + ".js", function(n) {
				h.ratio = n.ratio;
				if (h.width.charAt(h.width.length - 1) == "%") {
					var i = window.innerWidth > 0 ? window.innerWidth : screen.width;
					h.height = i * (parseInt(h.width) / 100) / n.ratio
				} else {
					h.height = h.width / n.ratio
				}
				e.makeFlashPlayer(t, h)
			}).error(function() {
				if (f == 0) {
					f++;
					p()
				}
			})
		}
		e.languageParser = {
			validFail: "系统错误，请稍后再试！<br/>Try again later!",
			videoFail: "很抱歉,不能播放本视频</br><p>Sorry,this video is not available.</p>",
			passwordChecking: "正在提交,请稍后",
			passwordFail: "请填写正确的密码！"
		};
		e.updatePlayFacade = {
			initVideoJson: function() {
				s = 0;
				h.pid = e.getPid();
				h.jsonUrl = o[s] + "/videojson/" + h.vid + ".js?pid=" + h.pid;
				if (h.vjsonUrl) h.jsonUrl = h.vjsonUrl;
				h.uid = h.vid.substr(0, 10);
				if (!h.code) {
					h.code = ""
				}
				if (h.teaser_time) {
					h.teaser_time_set = h.teaser_time
				} else {
					h.teaser_time = h.teaser_time_set = -1
				}
				b()
			},
			initChangeVideo: function(n, i) {
				h.isChangeVid = true;
				h.vid = n;
				h.uid = n.substr(0, 10);
				h.watchStartTimeRecord = i;
				h.hasValided = false;
				this.initVideoJson();
				if (h.isClickPlayButton == "off") {
					e("#playbutton").remove()
				}
				e(t).css("display", "block");
				e(".error").css("display", "none")
			},
			changeVidStep: {
				playVideo: function() {
					if ( !! h.isChangeVid) {
						h.taser_show = 0;
						h.adList = [];
						var n;
						if (h.validUrl2.length > 0 && h.is_access_validurl == "on") {
							H()
						} else {
							N(n, e("video")[0])
						}
					} else {
						M(t)
					}
				},
				initData: function() {
					if ( !! h.isChangeVid) {
						h.isChangeVid = false;
						h.hasSendLoadingStat = false;
						h.hasSendSecondBuffer = false;
						h.hasSendError = false;
						if (h.watchStartTimeRecord > 0) {
							h.watchStartTime = h.watchStartTimeRecord;
							h.watchStartTimeRecord = 0
						}
						if (typeof initChangeVid == "function") {
							initChangeVid(h.vid)
						}
					}
				},
				valided: function() {
					if (!h.hasValided) {
						h.hasValided = true;
						if ( !! h.isChangeVid) {
							var t;
							N(t, e("video")[0])
						} else {
							e.updatePlayFacade.initPassword()
						}
					}
				}
			},
			startVlidurl: function() {
				if (h.validUrl2.length > 0 && h.is_access_validurl == "on") {
					H()
				} else {
					this.initPassword()
				}
			},
			initPassword: function() {
				if (h.usepassword != "true" || h.banpassword == true) {
					this.startPlay()
				} else {
					V()
				}
			},
			passworded: function(t) {
				if (t) {
					if (typeof addPassword == "function") {
						addPassword(false)
					}
					h.autoplay = true;
					this.startPlay()
				} else {
					if (typeof addPasswordTips == "function") {
						addPasswordTips(e.languageParser.passwordFail)
					}
				}
			},
			startPlay: function() {
				U(h.polyvObjectdiv, h.div);
				q(h.polyvObjectthis, h.polyvObjectdiv, h.imageUrl)
			},
			preAdComplete: function() {
				if (!h.preadComplete) {
					if (h.video) {
						h.video.pause()
					}
					e(h.video).css("display", "none");
					e(h.o).css("background-image", "");
					h.preadComplete = true;
					_(h.polyvObjectdiv, h.polyvObjectvideo)
				}
			},
			teaserComplete: function() {
				if (!h.teaserComplete) {
					e(h.polyvObjectdiv).css("background-image", 'url("")');
					e(h.video).css("display", "block");
					h.teaserComplete = true;
					N(h.o, h.video)
				}
			},
			videoComplete: function() {
				if (h.videoList.length > 1 && h.playNextIndex < h.videoList.length - 1) {
					h.playNext()
				} else {
					e(h.video).css("display", "none");
					k(h.div, h.video, "end")
				}
			},
			endAdComplete: function() {
				h.video.pause();
				e(h.video).css("display", "none");
				e(h.div).css("background-image", "");
				e.isEndOnce = true;
				e.updateFlowStatus(e.FLOW_STATUS.OVER)
			},
			onPlayStart: function() {
				if (typeof s2j_onPlayStart == "function") {
					s2j_onPlayStart()
				}
				if (typeof s2j_onVideoPlay == "function") {
					s2j_onVideoPlay()
				}
				if (h.s2j_onPlayStart) {
					h.s2j_onPlayStart()
				}
			},
			onPlay: function() {
				h.polyvObjectdiv.css({
					"background-image": "",
					"background-color": "black"
				});
				if (h.s2j_onVideoPlay) {
					h.s2j_onVideoPlay()
				}
				if (typeof s2j_onVideoPlay == "function") {
					s2j_onVideoPlay()
				}
				if (e.haveDanmu) {
					e.haveDanmu = false;
					P()
				}
				if (e.startDanmu) {
					e.cmManager.startTimer()
				}
				if (e.recordTime > 0) {
					video.currentTime = e.recordTime;
					e.recordTime = 0
				}
			},
			onEnd: function() {
				e.updatePlayFacade.stopCountTimer();
				if (h.s2j_onPlayOver) {
					h.s2j_onPlayOver()
				}
				if (typeof s2j_onPlayOver == "function") {
					s2j_onPlayOver()
				}
				e.updatePlayFacade.videoComplete();
				if (e.startDanmu) {
					e.cmManager.clear()
				}
			},
			onSwitchHd: function() {
				if (h.s2j_onSwitchHd) {
					h.s2j_onSwitchHd(h.playNum)
				}
				if (typeof s2j_onSwitchHd == "function") {
					s2j_onSwitchHd(h.playNum)
				}
			},
			onOverPlay: function() {
				if (h.s2j_onOverPlay) {
					h.s2j_onOverPlay(h.overPlayType, h.overPlaySec)
				}
				if (typeof s2j_onOverPlay == "function") {
					s2j_onOverPlay(h.overPlayType, h.overPlaySec)
				}
			},
			startCountTimer: function() {
				h.isCounting = true;
				if (r) {
					clearInterval(r)
				}
				r = setInterval(function() {
					O()
				}, 1e3);
				if (i) {
					clearInterval(i)
				}
				i = setInterval(function() {
					I()
				}, 1e4)
			},
			stopCountTimer: function() {
				clearInterval(r);
				clearInterval(i);
				h.isCounting = false
			}
		};
		if (!e.domain) {
			e.domain = document.domain
		}
		containInHost = function(t) {
			var n = t.split(",");
			for (var i = 0; i < n.length; i++) {
				if (n[i].length > 0 && e.domain.indexOf(n[i]) != -1) {
					return true
				}
			}
			return false
		};
		var h = {
			flashParams: {
				allowScriptAccess: "always",
				allowFullScreen: "true",
				quality: "high",
				bgcolor: "#ffffff",
				allowFullScreen: "true",
				wmode: "transparent"
			},
			playerWidth: "1.0",
			allowfullscreen: "true",
			domain: "player.polyv.net",
			allowscriptaccess: "always",
			wmode: "Transparent",
			loading_bg_img: "",
			df: 0,
			flashvars: {},
			params: {},
			autoplay: false,
			is_auto_replay: "off",
			width: 600,
			height: 480,
			stay_duration: 0,
			ts: "",
			sign: "",
			j2s_getCurrentTime: function() {
				return 0
			},
			j2s_getDuration: function() {
				return 0
			},
			j2s_resumeVideo: function() {},
			j2s_pauseVideo: function() {},
			j2s_stopVideo: function() {},
			j2s_seekVideo: function() {},
			j2s_getVideo: function() {},
			j2s_stayInVideoTime: function() {
				return 0
			},
			videoClass: "plvideo"
		};
		h.isClickPlayButton = "off";
		h.hasSendInitOver = "off";
		h.showHd = "on";
		if (n) {
			e.extend(h, n)
		}
		if (!h.vid) {
			return
		}
		var v = e.checkLowerDevice();
		var m = e.checkFlashSupport();
		var g = e.checkHtmlSupport();
		var y = e.determinePlayerType(h, m, g);
		if (y == e.playerType.NO_SUPPORT || y == e.playerType.INSTALLER) {
			e.renderInstallGif(t, y);
			return
		}
		if (y == e.playerType.FLASH) {
			e.renderFlash(t, h);
			if (h.s2j_onPlayStart) {
				s2j_onPlayStart = h.s2j_onPlayStart
			}
			if (h.s2j_onPlayOver) {
				s2j_onPlayOver = h.s2j_onPlayOver
			}
			if (h.s2j_onVideoPlay) {
				s2j_onVideoPlay = h.s2j_onVideoPlay
			}
			if (h.s2j_onVideoPause) {
				s2j_onVideoPause = h.s2j_onVideoPause
			}
			if (h.s2j_onPlayerInitOver) {
				s2j_onPlayerInitOver = h.s2j_onPlayerInitOver
			}
			if (h.s2j_focusComment) {
				s2j_focusComment = h.s2j_focusComment
			}
			if (h.s2j_onSwitchHd) {
				s2j_onSwitchHd = h.s2j_onSwitchHd
			}
			s2j_getPreviewMode = function() {
				if (h.previewMode == true) {
					return 1
				}
			};
			return e.getPlayer(h.vid)
		}
		var w = "";
		if (h.beta_test == "on") {
			if (h.jsonUrl) {
				h.vjsonUrl = h.jsonUrl
			}
		}
		h.route = ["ws", "kw"];
		h.mp4route = ["mpv.videocc.net", "cdn.freeovp.com"];
		if (!h.cdn) {
			h.cdn = 0
		}
		if (!h.showLine) {
			h.showLine = "on"
		}
		e.updatePlayFacade.initVideoJson();

		function b() {
			e.getJSON(h.jsonUrl, function(t) {
				var n = true;
				if (t.outflow == "false" && t.timeoutflow == "false") {
					n = false
				}
				w = t.hash;
				if (t.setting_type == 1 && containInHost(t.disable_host)) {
					n = true
				}
				if (t.setting_type == 2 && !containInHost(t.enable_host) && window.location.href.indexOf("polyv.net") == -1) {
					n = true
				}
				h.outdate = n;
				h.title = t.title;
				h.zColor = t.player.zColor;
				h.skincolor = t.player.skincolor;
				h.pColor = t.player.pColor;
				h.videolink = t.videolink;
				h.my_br = t.my_br;
				h.flv = t.flv;
				h.mp4 = t.mp4;
				h.hls = t.hls;
				h.df_num = t.df_num;
				h.hlsIndex = t.hlsIndex;
				h.duration = t.duration;
				h.teaser_url = t.teaser_url;
				h.teaser_show = t.teaser_show;
				h.adList = t.adMatter;
				h.catatree = t.catatree;
				h.cataid = t.cataid;
				h.adsetting = t.adsetting == "true" ? "true" : "false";
				h.weburl = t.weburl;
				h.fileSize = t.filesize;
				h.validUrl2 = t.validUrl2;
				if (h.verification_data) {
					h.validUrl2 = h.verification_data
				}
				h.srt_list = [];
				for (var i in t.video_srt) {
					var r = [];
					r.push(i);
					r.push(t.video_srt[i]);
					h.srt_list.push(r)
				}
				h.srt_list.reverse();
				h.srt_index = 0;
				h.show_srt = true;
				if (h.showSrt == "off" || h.showSrt == false) {
					h.show_srt = false
				}
				if (h.teaser_time == -1) {
					h.teaser_time = t.teaser_time != "" ? t.teaser_time : 1;
					if (t.teaser_time == "") {
						h.teaserShowAll = true
					} else {
						h.teaserShowAll = false
					}
				} else {
					h.teaser_time = h.teaser_time_set > 0 ? h.teaser_time_set : 1;
					h.teaserShowAll = false
				}
				if (h.skinColor) {
					if (typeof changeSkinColor == "function") {
						changeSkinColor(h.skinColor)
					}
				}
				if (h.is_access_validurl != "off") {
					h.is_access_validurl = "on"
				} else {
					h.is_access_validurl = "off"
				}
				if (h.showHd == true) {
					h.showHd = "on"
				}
				h.j2s_getDuration = function() {
					return h.duration
				};
				h.j2s_getJsonDuration = function() {
					if (h.previewMode == true) {
						return h.previewlong
					} else {
						return t.duration
					}
				};
				h.first_image = t.first_image;
				h.seed = t.seed;
				h.ratio = t.ratio;
				h.swf_link = t.swf_link;
				h.status = t.status;
				h.usepassword = t.usepassword;
				h.previewlong = t.previewDuration;
				if (!t.previewDuration) {
					h.previewlong = 180
				}
				if (t.currentLine && t.currentLine == "kw") {
					h.cdn = 1
				}
				h.firstToPlayTime = 0;
				e.isEndOnce = false;
				h.changeBrowser = h.seed == 1 && e.isFirefox() ? true : false;
				if (h.forceHLS && e.isFirefox()) {
					h.changeBrowser = true
				}
				if (t.status < 60) {
					h.outdate = true
				}
				e.updatePlayFacade.changeVidStep.playVideo()
			}).error(function() {
				if (s == 1) {
					console.debug(" VIDEO JSON FAIL ");
					var t = {};
					t.pid = h.pid;
					t.uid = h.uid;
					t.vid = h.vid;
					t.error = "load_videojson_failure";
					t.type = "error";
					t.href = e.href;
					t.request_uri = jsonUrl;
					t.response_code = 0;
					D(t)
				} else {
					s = 1;
					h.jsonUrl = o[s] + "/videojson/" + h.vid + ".js?pid=" + h.pid;
					b()
				}
			})
		}
		function _(t, n) {
			if (h.teaserSkip) {
				if (typeof addTeaserSkip == "function") {
					addTeaserSkip()
				}
			}
			e.updateFlowStatus(e.FLOW_STATUS.TEASER);
			if (h.teaser_url != "" && h.teaser_show == 1) {
				var i = /\.[^\.]+$/.exec(h.teaser_url);
				if (i == ".png" || i == ".jpg" || i == ".gif") {
					var r = false;
					var a = new Image;
					e(a).attr("src", h.teaser_url);
					e(a).error(function() {
						if (o) {
							clearTimeout(o)
						}
						if (!r) {
							r = true;
							e.updatePlayFacade.teaserComplete()
						}
					});
					t.css("background-image", "url(" + h.teaser_url + ")");
					var o = setTimeout(function() {
						if (h.teaser_show == 1) {
							if (!r) {
								r = true;
								e.updatePlayFacade.teaserComplete()
							}
						}
						clearTimeout(o)
					}, h.teaser_time * 1e3)
				} else if (i == ".mp4") {
					var r = false;
					t.css("background-image", 'url("")');
					n.attr("src", h.teaser_url);
					n.css({
						width: "100%",
						height: "100%",
						display: "block"
					});
					n[0].play();
					var s = setInterval(function(t) {
						if (n[0].error != null) {
							if (e.flowStatus != e.FLOW_STATUS.PLAY) {
								if (!r) {
									r = true;
									e.updatePlayFacade.teaserComplete()
								}
							}
						}
						clearInterval(s)
					}, 500);
					if (!h.teaserShowAll) {
						var l = setTimeout(function(t) {
							if (h.teaser_show == 1) {
								if (!r) {
									r = true;
									e.updatePlayFacade.teaserComplete()
								}
							}
							clearInterval(s);
							clearTimeout(l)
						}, h.teaser_time * 1e3)
					}
				} else {
					e.updatePlayFacade.teaserComplete()
				}
			} else {
				e.updatePlayFacade.teaserComplete()
			}
		}
		var T = [],
			x = [],
			S, j;
		h.addrurl = "";
		e.hasADInfo = false;

		function k(t, n, i) {
			e(t).css("background-image", 'url("")');
			e(n).css("display", "none");
			if (!e.hasADInfo) {
				e.hasADInfo = true;
				if (h.adList.length > 0) {
					if (!h.catatree) {
						h.catatree = h.cataid != 1 ? [1, h.cataid] : [1]
					} else {
						h.catatree = h.catatree.split(",")
					}
					for (var r = h.catatree.length - 1; r >= 0; r--) {
						for (var a = 0; a < h.adList.length; a++) {
							if (h.adList[a].cataid == h.catatree[r] && h.adList[a].location != "2" && h.adList[a].adtype != 3 && h.adList[a].timesize > 0) {
								var o = /\.[^\.]+$/.exec(h.adList[a].matterurl);
								if (h.adList[a].adtype == 2) {
									if (!(o == ".mp4" || o == ".m3u8")) {
										continue
									}
								}
								if (h.adList[a].location == "1" && !S) {
									T.push(h.adList[a])
								} else if (h.adList[a].location == "3" && !j) {
									x.push(h.adList[a])
								}
							}
						}
						if (T.length > 0) {
							S = true
						}
						if (x.length > 0) {
							j = true
						}
						if (S && j) {
							break
						}
					}
				}
			}
			h.preAd = T;
			h.endAd = x;
			if (h.adsetting == "true") {
				if (e.domain.indexOf(h.weburl) != -1) {
					h.ban_ad = "on"
				}
			}
			h.adIndex = 0;
			if (i == "pre") {
				e.updateFlowStatus(e.FLOW_STATUS.PREAD);
				if (h.ban_ad_time == "on" || h.ban_ad_time == true) {
					if (h.banAdTime) {
						h.banAdTime()
					}
				}
				if (h.ban_ad == "on" || h.ban_ad == true || h.preAd.length == 0) {
					e.updatePlayFacade.preAdComplete()
				} else {
					if (h.preAd.length > 0) {
						var s = 0;
						for (var l = 0; l < h.preAd.length; l++) {
							s += parseInt(h.preAd[l].timesize)
						}
						h.preAdTotalTime = s;
						C(h.preAd, t, n, "pre");
						if (h.showAdTotalTime) {
							h.showAdTotalTime(h.preAdTotalTime)
						}
					} else {
						e.updatePlayFacade.preAdComplete()
					}
				}
			} else {
				e.updateFlowStatus(e.FLOW_STATUS.ENDAD);
				if ( !! e.isEndOnce) {
					e(t).css("background-image", "");
					e.updateFlowStatus(e.FLOW_STATUS.OVER);
					return
				}
				if (h.ban_ad_time == "on" || h.ban_ad_time == true) {
					if (h.banAdTime) {
						h.banAdTime()
					}
				}
				if (h.ban_ad == "on" || h.ban_ad == true) {
					e.updatePlayFacade.endAdComplete()
				} else {
					if (h.endAd.length > 0) {
						h.endAdTotalTime = 0;
						for (var u = 0; u < h.endAd.length; u++) {
							h.endAdTotalTime += parseInt(h.endAd[u].timesize)
						}
						if (h.showAdTotalTime) {
							h.showAdTotalTime(h.endAdTotalTime)
						}
						C(h.endAd, t, n, "end")
					} else {
						e.updatePlayFacade.endAdComplete()
					}
				}
			}
		}
		function C(t, n, i, r) {
			switch (t[h.adIndex].adtype) {
			case 1:
				e(n).css("background-image", "url(" + t[h.adIndex].matterurl + ")");
				e(i).css("display", "none");
				h.addrurl = t[h.adIndex].addrurl;
				var a = 0;
				var o;
				var s = false;
				var l = new Image;
				e(l).attr("src", t[h.adIndex].matterurl);
				e(l).error(function() {
					if (!s) {
						clearInterval(o);
						h.adIndex = 0;
						if (r == "pre") {
							e.updatePlayFacade.preAdComplete()
						} else {
							e.updatePlayFacade.endAdComplete()
						}
					}
				});
				o = setInterval(function() {
					a++;
					if (r == "pre") {
						h.preAdTotalTime--;
						if (h.showAdTotalTime) {
							h.showAdTotalTime(h.preAdTotalTime)
						}
					} else {
						h.endAdTotalTime--;
						if (h.showAdTotalTime) {
							h.showAdTotalTime(h.endAdTotalTime)
						}
					}
					if (a == t[h.adIndex].timesize) {
						s = true;
						if (h.adIndex == t.length - 1) {
							h.adIndex = 0;
							if (r == "pre") {
								e.updatePlayFacade.preAdComplete()
							} else {
								e.updatePlayFacade.endAdComplete()
							}
						} else {
							h.adIndex++;
							C(t, n, i, r)
						}
						clearInterval(o)
					}
				}, 1e3);
				break;
			case 2:
				e(n).css("background-image", 'url("")');
				e(i).css({
					display: "block",
					width: "100%",
					height: "100%"
				});
				i.src = t[h.adIndex].matterurl;
				i.play();
				h.addrurl = t[h.adIndex].addrurl;
				var u = false;
				var c = setInterval(function(t) {
					if (e(i)[0].error != null) {
						clearInterval(c);
						clearInterval(f);
						h.adIndex = 0;
						if (r == "pre") {
							e.updatePlayFacade.preAdComplete()
						} else {
							i.pause();
							e.updatePlayFacade.endAdComplete()
						}
					}
				}, 500);
				var d = 0;
				var f;
				f = setInterval(function() {
					d++;
					if (r == "pre") {
						h.preAdTotalTime--;
						if (h.showAdTotalTime) {
							h.showAdTotalTime(h.preAdTotalTime)
						}
					} else {
						h.endAdTotalTime--;
						if (h.showAdTotalTime) {
							h.showAdTotalTime(h.endAdTotalTime)
						}
					}
					if (d == t[h.adIndex].timesize) {
						u = true;
						if (h.adIndex == t.length - 1) {
							h.adIndex = 0;
							if (r == "pre") {
								e.updatePlayFacade.preAdComplete()
							} else {
								e.updatePlayFacade.endAdComplete()
							}
						} else {
							i.pause();
							h.adIndex++;
							C(t, n, i, r)
						}
						clearInterval(c);
						clearInterval(f)
					}
				}, 1e3);
				break
			}
		}
		function P() {
			var t = "js/CommentCoreLibrary.min.js";
			e.getScript(t, function() {
				var t = e("<div " + 'id="CmContainer"' + ">" + "<div" + ">");
				e("#container").append(t);
				e(t).css("top", 0);
				e(t).css("position", "absolute");
				e(t).css("overflow", "hidden");
				e(t).css("width", "100%");
				e(t).css("height", "100%");
				e.cmManager = new CommentManager(t[0]);
				e.ajax({
					url: e.danmuUrl,
					type: "GET",
					dataType: "text",
					success: function(t) {
						e.cmManager.init();
						e.cmManager.load(PolyvParser(t));
						e.cmManager.startTimer();
						e.startDanmu = true
					},
					error: function(e, t, n) {
						console.log(">> comment error" + e.readyState + " / " + e.status)
					}
				})
			})
		}
		function A() {
			var t = "//player.polyv.net/script/js/srtParser.js";
			if ( !! h.isChangeVid) {
				if (h.srt_list.length == 0) {
					if (typeof addSrt == "function") {
						h.srt_list.push(["不显示", ""]);
						addSrt("on", h.srt_list, h.srt_index)
					}
				}
			} else {
				if (h.srt_list.length == 0) {
					return
				}
			}
			if (h.srt_list.length > 0 && h.srt_list[h.srt_index][1].indexOf("http://") != -1) {
				if ( !! h.hasSrtParser) {
					if ( !! h.isChangeVid) {
						h.j2s_initSrt(h.srt_index, true);
						if (typeof addSrt == "function") {
							h.srt_list.push(["不显示", ""]);
							if (!h.show_srt) {
								addSrt("off", h.srt_list, h.srt_list.length - 1)
							} else {
								addSrt("on", h.srt_list, h.srt_index)
							}
						}
					}
				} else {
					e.getScript(t, function() {
						h.hasSrtParser = true;
						var t = e("<div " + 'id="srtContainer"' + ">");
						e(".container-main").append(t);
						h.j2s_initSrt(h.srt_index, true);
						if (typeof addSrt == "function") {
							h.srt_list.push(["不显示", ""]);
							if (!h.show_srt) {
								addSrt("off", h.srt_list, h.srt_list.length - 1)
							} else {
								addSrt("on", h.srt_list, h.srt_index)
							}
						}
					})
				}
			}
		}
		function N(t, n) {
			e.updateFlowStatus(e.FLOW_STATUS.PLAY);
			e.isStartPlay = true;
			var i = new Date;
			h.firstToPlayTime = i.getTime();
			var r = e(n);
			var a = h.first_image;
			if (h.flashvars["loading_bg_img"]) {
				a = h.flashvars["loading_bg_img"]
			}
			if (h.loading_bg_img.length > 0) {
				a = h.loading_bg_img
			}
			E();
			n.src = F();
			n.preload = "auto";
			if (h.hidecontrol != "true" || h.hidecontrol == undefined) {
				n.controls = "controls"
			}
			var o = h.flashvars["ban_seek_by_limit_time"];
			if (o && o == "on") {
				if (n.hasAttribute("controls")) {
					n.removeAttribute("controls")
				}
			}
			n.id = h.vid;
			h.stay_duration = 0;
			n.poster = a;
			r.css("background-size", h.playerWidth * 100 + "%");
			r.css("background-repeat", "no-repeat");
			r.css("background-position", "center");
			r.css("width", h.width);
			r.css("height", h.height);
			e(t).css("background-image", "");
			r.css("display", "block");
			n.play();
			clearInterval(h.videoErrorTimer);
			h.videoErrorTimer = setInterval(function(t) {
				if (r[0].error != null) {
					switch (h.sourceType) {
					case "hlsIndex":
						h.enable_switch.hlsIndex[1] = false;
						break;
					case "hls":
						for (var i = 0; i < h.enable_switch.hls.length; i++) {
							if (n.src.indexOf(h.enable_switch.hls[i][0]) != -1) {
								h.enable_switch.hls[i][1] = false
							}
						}
						break;
					case "mp4":
						for (var a = 0; a < h.enable_switch.mp4.length; a++) {
							if (n.src.indexOf(h.enable_switch.mp4[a][0]) != -1) {
								h.enable_switch.mp4[a][1] = false
							}
						}
						break
					}
					var o = F();
					if (h.previewMode == true) {
						o = ""
					}
					if (o == "") {
						if (!h.hasSendError) {
							if (r[0].error != null) {
								h.hasSendError = true;
								var s = {};
								s.pid = h.pid;
								s.uid = h.uid;
								s.vid = h.vid;
								s.error = "load_video_failure";
								s.type = "error";
								s.errorType = r[0].error.code;
								s.href = e.href;
								D(s);
								clearInterval(h.videoErrorTimer);
								h.validMessage = e.languageParser.videoFail;
								$()
							}
						}
					} else {
						n.src = o;
						n.play();
						if (typeof showHD == "function") {
							if (h.showHd == "on") {
								showHD(h.playNum, h.fileSize)
							}
						}
						if (typeof showLine == "function") {
							if (h.showLine == "on") {
								showLine()
							}
						}
					}
				}
			}, 1e3);
			if (typeof showHD == "function") {
				if (h.showHd == "on") {
					showHD(h.playNum, h.fileSize)
				}
			}
			if (typeof showLine == "function") {
				if (h.showLine == "on") {
					showLine()
				}
			}
			if (h.ban_ui == "on" || h.ban_ui == true) {
				if (typeof hideUI == "function") {
					hideUI()
				}
			}
			h.isWaiting = false;
			h.seeking = false;
			A();
			e.updatePlayFacade.changeVidStep.initData()
		}
		function E() {
			for (var e = 0; e < h.fileSize.length; e++) {
				h.fileSize[e] = 1
			}
			if (h.show_rate != null) {
				switch (String(h.show_rate)) {
				case "1":
					h.fileSize[1] = 0;
					h.fileSize[2] = 0;
					h.df_num = 1;
					break;
				case "2":
					h.fileSize[2] = 0;
					h.df_num = 2;
					break
				}
			}
			if (h.forceHightDf == "true" || h.forceHightDf == true) {
				h.df = h.df_num
			}
			h.enable_switch = {
				hlsIndex: [],
				hls: [],
				mp4: []
			};
			h.enable_switch.hlsIndex = [h.hlsIndex, true];
			for (var t = 0; t < h.fileSize.length; t++) {
				if (h.fileSize[t] != 0) {
					h.enable_switch.hls.push([h.hls[t], true]);
					h.enable_switch.mp4.push([h.mp4[t], true])
				} else {
					h.enable_switch.hls.push([h.hls[t], false]);
					h.enable_switch.mp4.push([h.mp4[t], false])
				}
			}
		}
		function F() {
			var e = "";
			h.playNum = 0;
			h.df = h.df > h.df_num ? h.df_num : h.df;
			if (h.seed == 1 || h.forceHLS) {
				if (h.df == 0 && h.enable_switch.hlsIndex[1]) {
					e = h.enable_switch.hlsIndex[0];
					h.sourceType = "hlsIndex"
				} else {
					h.df = h.df == 0 ? 1 : h.df;
					if (h.enable_switch.hls[h.df - 1][1]) {
						e = h.enable_switch.hls[h.df - 1][0];
						h.sourceType = "hls";
						h.playNum = h.df - 1
					} else {
						for (var t = 0; t < h.df_num; t++) {
							if (h.enable_switch.hls[t][1]) {
								e = h.enable_switch.hls[t][0];
								h.sourceType = "hls";
								h.playNum = t;
								break
							}
						}
					}
				}
				if (e != "") {
					if (h.previewMode == true) {
						var n = h.vid.substring(0, 32);
						e = e.replace(n, "p_" + n)
					}
					if (h.ts != "" && h.sign != "") {
						e = e + "?ts=" + h.ts + "&sign=" + h.sign
					}
					if (h.ts != "" && h.sign != "") {
						e = e + "&pid=" + h.pid
					} else {
						e = e + "?pid=" + h.pid
					}
					if (e.indexOf("?") != -1) {
						e = e + "&route=" + h.route[h.cdn]
					} else {
						e = e + "?route=" + h.route[h.cdn]
					}
				}
			}
			if (h.seed == 0 && e == "") {
				h.sourceType = "mp4";
				h.df = h.df == 0 ? h.my_br : h.df;
				if (h.enable_switch.mp4[h.df - 1] != undefined && h.enable_switch.mp4[h.df - 1][1]) {
					e = h.enable_switch.mp4[h.df - 1][0];
					h.playNum = h.df - 1
				} else {
					for (var i = 0; i < h.df_num; i++) {
						if (h.enable_switch.mp4[i][1]) {
							e = h.enable_switch.mp4[i][0];
							h.playNum = i;
							break
						}
					}
				}
				if (v) {
					if (h.enable_switch.mp4[0][1]) {
						e = h.enable_switch.mp4[0][0];
						h.playNum = 0
					} else {
						e = ""
					}
				}
				if (e != "" && h.cdn == 1) {
					e = e.replace(h.mp4route[0], h.mp4route[1])
				}
			}
			return e
		}
		function L(t, n) {
			e("video").removeAttr("poster");
			e.recordTime = t.currentTime;
			h.df = n + 1;
			t.src = F();
			t.play();
			if (typeof highLightHd == "function") {
				highLightHd(h.playNum)
			}
		}
		function O() {
			h.stay_duration++
		}
		function I() {
			var t = (new Date).getTime();
			var n = Math.floor(e("video")[0].currentTime);
			var i = h.pid;
			var r = h.stay_duration;
			var o = "rtas.net" + i + h.vid + "0" + r + n;
			var s = CryptoJS.MD5(o) + "";
			var l = {
				pid: i,
				uid: h.vid.substring(0, 10),
				vid: h.vid,
				flow: 0,
				pd: r,
				sd: r,
				cts: n,
				ts: t,
				sign: s,
				duration: h.duration,
				href: e.href
			};
			for (var u in h.params) {
				l[u] = h.params[u]
			}
			if (h.session_id) {
				l.session_id = W(h.session_id)
			}
			e.ajax({
				type: "GET",
				url: a + "prtas.videocc.net/v1/view",
				data: l,
				success: function(e) {}
			})
		}
		function D(t) {
			for (var n in h.params) {
				t[n] = h.params[n]
			}
			if (h.session_id) {
				t.session_id = W(h.session_id)
			}
			e.ajax({
				type: "GET",
				url: a + "prtas.videocc.net/qos",
				data: t,
				success: function() {}
			})
		}
		function M(t) {
			return t.each(function() {
				var n;
				var i = e(this);
				var r = h.first_image;
				if (h.loading_bg_img.length > 0) {
					r = h.loading_bg_img
				}
				var a = document.createElement("div");
				a.setAttribute("id", "plv_container");
				var o = e(a);
				o.css("background-size", h.playerWidth * 100 + "%");
				o.css("background-repeat", "no-repeat");
				o.css("background-position", "center");
				o.css("text-align", "left");
				o.css("width", h.width);
				o.css("height", h.height);
				this.appendChild(a);
				var s = document.createElement("video");
				a.appendChild(s);
				e("video").css("display", "none");
				h.polyvObjectdiv = o;
				h.div = a;
				h.polyvObjectthis = i;
				h.o = t;
				h.imgPath = "/script/images/";
				if (h.beta_test == "on") {
					h.imgPath = "/file/player/trunk/images/"
				}
				if (h.outdate) {
					switch (h.status) {
					case 50:
						r = h.imgPath + "invalid_sh.jpg";
						break;
					case 10:
						r = h.imgPath + "invalid_bm.jpg";
						break;
					case 20:
						r = h.imgPath + "invalid_bm.jpg";
						break;
					default:
						r = h.imgPath + "invalid.jpg"
					}
					q(i, o, r)
				} else {
					if (!h.changeBrowser) {
						h.imageUrl = r;
						e.updatePlayFacade.startVlidurl()
					} else {
						r = h.imgPath + "changeBrowser.jpg";
						q(i, o, r)
					}
				}
			})
		}
		function H() {
			if (h.getBase64 != undefined) {
				B()
			} else {
				e.ajax({
					url: "//player.polyv.net/script/js/base64.js",
					dataType: "script",
					success: function() {
						h.getBase64 = true;
						B()
					},
					error: function() {
						$()
					}
				})
			}
		}
		function B() {
			if (h.validUrl2.indexOf("http://") == -1 && h.validUrl2.indexOf("https://") == -1) {
				h.validUrl2 = a + e.domain + h.validUrl2
			}
			h.validMessage = e.languageParser.validFail;
			var t = new Date;
			h.validUrl2Time = t.getTime() + +Math.floor(Math.random() * 1e5);
			var n = {};
			n.vid = h.vid;
			n.code = h.code;
			n.t = h.validUrl2Time;
			h.validUrl2Sign = h.validUrl2 + "?" + "vid=" + h.vid + "&code=" + h.code + "&t=" + h.validUrl2Time;
			e.ajax({
				url: h.validUrl2Sign,
				dataType: "jsonp",
				success: function(t) {
					var i = t;
					n.status = i.status;
					n.username = i.username;
					var r = a + "v3.polyv.net/uc/services/get/player/sign";
					e.ajax({
						url: r,
						dataType: "jsonp",
						data: n,
						success: function(t) {
							if (!t.sign) {
								$()
							} else {
								var n = e.decode(Base64.decode(t.sign));
								if (n == i.sign) {
									if (i.msg) {
										h.validMessage = i.msg
									}
									switch (String(i.status)) {
									case "1":
										if (h.banHdSelect || h.banOverPlay) {
											h.banHdSelect = false;
											h.banOverPlay = false;
											if (h.validStatusValue == 4) {
												L(video, h.playNum);
												if (typeof showLoading == "function") {
													showLoading()
												}
											} else if (h.validStatusValue == 5) {
												h.j2s_resumeVideo()
											}
										} else {
											e.updatePlayFacade.changeVidStep.valided()
										}
										break;
									case "4":
									case "5":
										if (!h.banHdSelect) {
											h.banHdSelect = true;
											e.updatePlayFacade.changeVidStep.valided()
										} else {
											e.updatePlayFacade.onSwitchHd()
										}
										h.isSwitching = false;
										if (String(i.status) == "5") {
											if (!h.banOverPlay) {
												h.banOverPlay = true;
												e.updatePlayFacade.changeVidStep.valided()
											} else {
												e.updatePlayFacade.onOverPlay()
											}
										}
										break;
									default:
										$()
									}
									h.isSwitching = false;
									h.isResumeing = false
								} else {
									$()
								}
							}
						},
						error: function() {
							$()
						}
					})
				},
				error: function() {
					$()
				}
			})
		}
		function V() {
			if (typeof s2j_onPlayerInitOver == "function" && h.hasSendInitOver == "off") {
				h.hasSendInitOver = "on";
				s2j_onPlayerInitOver()
			}
			if (typeof addPassword == "function") {
				addPassword(true)
			}
		}
		function R(t) {
			var n = "http://v.polyv.net/uc/admin/checkpassword";
			var i = {};
			i.vid = h.vid;
			i.password = t;
			e.ajax({
				url: n,
				type: "GET",
				dataType: "jsonp",
				data: i,
				success: function(t) {
					if (t == "1") {
						e.updatePlayFacade.passworded(true)
					} else {
						e.updatePlayFacade.passworded(false)
					}
				},
				error: function() {
					e.updatePlayFacade.passworded(false)
				}
			})
		}
		function U(n, i) {
			video = e("video")[0];
			var r = e("video");
			r.attr("webkit-playsinline", "");
			r.css("display", "none");
			r.css("width", "0");
			r.css("height", "0");
			h.polyvObjectvideo = r;
			h.video = video;
			if (!h.autoplay) {
				if (e("#plv_container img").length > 0) {
					return
				}
				var a = "//player.polyv.net/script/images/video-play.png";
				var o = e('<img id="playbutton">');
				o.attr("src", a);
				o.css("display", "none");
				o.appendTo(n);
				o.one("load", function() {
					if (parseInt(h.height) == 0) {
						var e = parseInt(n.css("width")) / h.ratio;
						h.height = e;
						n.parent().css("height", e);
						n.css("height", e)
					}
					var t = parseInt(n.css("width")) / 3;
					o.css("left", "50%");
					o.css("top", "50%");
					o.css("width", "72px");
					o.css("height", "72px");
					o.css("margin-left", "-32px");
					o.css("margin-top", "-32px");
					o.css("position", "absolute");
					o.css("opacity", ".8");
					o.css("display", "block");
					if (h.ban_ui == true || h.ban_ui == "on") {
						var r = (parseInt(n.css("height")) - 72) / 2;
						o.css("position", "relative");
						o.css("top", r + "px");
						o.css("margin-top", 0)
					}
					if (typeof s2j_onPlayerInitOver == "function" && h.hasSendInitOver == "off") {
						h.hasSendInitOver = "on";
						s2j_onPlayerInitOver()
					}
					n.bind("click", function() {
						o.remove();
						video.play();
						video.pause();
						h.isClickPlayButton = "on";
						k(i, video, "pre");
						n.unbind("click");
						if (typeof s2j_onPlayBtnClick == "function") {
							s2j_onPlayBtnClick();
							if (h.title.length > 0 && typeof changeTitle == "function") {
								changeTitle(h.title)
							}
						}
					})
				})
			} else {
				r.attr("autoplay", "autoplay");
				k(i, video, "pre");
				if (typeof s2j_onPlayerInitOver == "function" && h.hasSendInitOver == "off") {
					h.hasSendInitOver = "on";
					s2j_onPlayerInitOver()
				}
			}
			h.j2s_pauseVideo = function() {
				video.pause();
				e.updateFlowStatus(e.FLOW_STATUS.PAUSE)
			};
			h.j2s_resumeVideo = function() {
				if (!h.banOverPlay || video.currentTime < h.previewlong) {
					h.j2s_playVideo()
				} else {
					if (!h.isResumeing) {
						h.validStatusValue = 5;
						h.isResumeing = true;
						H()
					}
				}
			};
			h.j2s_playVideo = function() {
				if (video.src) {
					video.play()
				} else {
					n.click()
				}
				r.css("display", "block");
				e.updateFlowStatus(e.FLOW_STATUS.PLAY)
			};
			h.j2s_seekVideo = function(e) {
				if (video.src) {
					video.currentTime = e
				}
			};
			h.j2s_stopVideo = function() {
				video.pause();
				video.currentTime = 0;
				if (e.flowStatus == e.FLOW_STATUS.PLAY || e.FLOW_STATUS.PAUSE) {
					e.updatePlayFacade.onEnd()
				}
			};
			h.changeCode = function(e) {
				h.code = e
			};
			h.j2s_setVolume = function(e) {
				e = parseFloat(e);
				e = e < 0 ? 0 : e;
				e = e > 1 ? 1 : e;
				video.volume = e
			};
			h.j2s_skipTeaser = function() {
				h.teaser_show = 0;
				e.updatePlayFacade.teaserComplete()
			};
			h.j2s_switchHd = function(t) {
				if (!h.isSwitching) {
					h.playNum = t;
					if (h.banHdSelect) {
						e.updatePlayFacade.onSwitchHd()
					} else {
						L(video, t)
					}
				}
			};
			h.changeLine = function() {
				if (h.cdn === 0) {
					h.cdn = 1
				} else {
					h.cdn = 0
				}
				L(video, h.playNum)
			};
			h.j2s_removeVideo = function() {
				e(t).empty()
			};
			h.j2s_switch = function(e) {
				e = e - 1;
				if (!h.banHdSelect) {
					h.j2s_switchHd(e)
				} else {
					h.validStatusValue = 4;
					h.isSwitching = true;
					H()
				}
			};
			h.j2s_replay = function() {
				var t = false;
				if (h.endAd.length > 0) {
					for (var n = 0; n < x.length; n++) {
						if (x[n].adtype == 2) {
							t = true
						}
					}
				}
				if (t) {
					h.video.src = F()
				}
				h.j2s_seekVideo(0);
				h.j2s_playVideo();
				e.updatePlayFacade.onPlayStart()
			};
			h.j2s_adHop = function() {
				if (h.addrurl.indexOf("http://") != -1 || h.addrurl.indexOf("https://") != -1) {
					window.open(h.addrurl)
				}
			};
			h.changeVid = function(t, n) {
				e.updatePlayFacade.initChangeVideo(t, n)
			};
			h.playNext = function() {
				if (h.videoList.length > 1) {
					h.playNextIndex++;
					h.playNextIndex = h.playNextIndex > h.videoList.length - 1 ? h.videoList.length - 1 : h.playNextIndex;
					var e = h.videoList[h.playNextIndex];
					if (e == undefined || e == h.vid || e.substr(0, 10) != h.vid.substr(0, 10)) {
						return
					}
					if (typeof changeVideoId == "function") {
						changeVideoId(e)
					}
					h.changeVid(e, 0)
				}
			};
			h.j2s_showBarrage = function() {
				if (e.startDanmu) {
					e.cmManager.startTimer()
				}
			};
			h.j2s_hideBarrage = function() {
				if (e.startDanmu) {
					e.cmManager.stopTimer()
				}
			};
			h.j2s_addBarrageMessage = function(t) {
				var n = e.parseJSON(t);
				for (var i in n) {
					var r = {};
					r.text = n[i].msg;
					r.stime = 0;
					r.mode = 1;
					r.size = 14;
					r.color = 255;
					r.data = n[i].timestamp;
					e.cmManager.insert(r)
				}
			};
			h.j2s_reloadBarrageData = function() {
				if (e.startDanmu) {
					e.ajax({
						url: e.danmuUrl,
						type: "GET",
						dataType: "text",
						success: function(t) {
							e.cmManager.load(PolyvParser(t))
						},
						error: function(e, t, n) {
							console.log(">> comment error" + e.readyState + " / " + e.status)
						}
					})
				}
			};
			h.j2s_hideSrt = function() {
				if (h.srt) {
					h.srt.hide()
				}
			};
			h.j2s_showSrt = function() {
				if (h.srt) {
					h.srt.show()
				}
			};
			h.j2s_setTimeSrt = function(e) {
				if (h.srt) {
					h.srt.time(e)
				}
			};
			h.j2s_getCurrentTime = function() {
				return video.currentTime
			};
			h.j2s_stayInVideoTime = function() {
				return h.stay_duration
			};
			h.j2s_getDuration = function() {
				return video.duration
			};
			e.cmManager;
			e.startDanmu = false;
			e.haveDanmu = false;
			e.danmuUrl = "";
			h.j2s_openDanmu = function(t) {
				e.haveDanmu = true;
				e.danmuUrl = t
			};
			h.j2s_getVideo = function() {
				return video
			};
			h.j2s_getVideo = function() {
				return video
			};
			video.addEventListener("playing", function() {
				if (e.flowStatus == e.FLOW_STATUS.PLAY) {
					e.updatePlayFacade.startCountTimer();
					if (h.firstToPlayTime > 0 && !h.hasSendLoadingStat) {
						var t = new Date;
						h.hasSendLoadingStat = true;
						var n = {};
						n.pid = h.pid;
						n.uid = h.uid;
						n.vid = h.vid;
						n.time = t.getTime() - h.firstToPlayTime;
						n.type = "loading";
						n.href = e.href;
						n.param5 = e.version + "_VM";
						D(n);
						if (h.previewMode == true) {
							if (typeof changeDuration == "function" && (h.sourceType == "hlsIndex" || h.sourceType == "hls")) {
								if (video.duration != "NaN" && video.duration != Infinity && video.duration > 1) {
									h.previewlong = video.duration;
									delete h.watchEndTime
								}
								changeDuration()
							}
						}
						if (h.title.length > 0 && typeof changeTitle == "function") {
							changeTitle(h.title)
						}
						e.updatePlayFacade.onPlayStart()
					}
				} else if (e.flowStatus == e.FLOW_STATUS.OVER) {
					h.j2s_replay()
				}
				e.updatePlayFacade.onPlay()
			});
			video.addEventListener("pause", function() {
				e.updatePlayFacade.stopCountTimer();
				if (h.s2j_onVideoPause) {
					h.s2j_onVideoPause()
				}
				if (typeof s2j_onVideoPause == "function") {
					s2j_onVideoPause()
				}
				if (e.startDanmu) {
					e.cmManager.stopTimer()
				}
			});
			var s = 0;
			h.watchStartTime = h.flashvars["watchStartTime"];
			if (!h.watchStartTime) {
				h.watchStartTime = h.watch_start_time
			}
			video.addEventListener("ended", function() {
				if (e.flowStatus == e.FLOW_STATUS.TEASER) {
					if (h.teaser_show == 1) {
						e.updatePlayFacade.teaserComplete()
					}
				} else if (e.flowStatus == e.FLOW_STATUS.PREAD) {
					e.updatePlayFacade.preAdComplete()
				} else {
					e.updatePlayFacade.onEnd()
				}
			});
			video.addEventListener("loadedmetadata", function() {});
			h.watchEndTime = h.flashvars["watchEndTime"];
			if (!h.watchEndTime) {
				h.watchEndTime = h.watch_end_time
			}
			if (h.previewMode) {
				h.watchEndTime = h.previewlong
			}
			var l = -1;
			timeUpdate = function() {
				s = video.currentTime;
				if (h.watchEndTime && video.currentTime > h.watchEndTime) {
					h.j2s_stopVideo()
				}
				if (e.flowStatus == e.FLOW_STATUS.PLAY || e.flowStatus == e.FLOW_STATUS.PAUSE) {
					if (h.s2j_onTimeUpdate) {
						h.s2j_onTimeUpdate()
					}
					if (e.startDanmu) {
						e.cmManager.time(Math.floor(1e3 * r[0].currentTime))
					}
					if (h.watchStartTime && h.watchStartTime != 0) {
						if (video.currentTime >= .1) {
							video.currentTime = h.watchStartTime;
							h.watchStartTime = 0
						}
					}
					if (h.srt) {
						h.srt.time(r[0].currentTime)
					}
					if (h.banOverPlay && video.currentTime >= h.previewlong && (new Date).getTime() - l >= 1e3) {
						l = (new Date).getTime();
						h.j2s_pauseVideo();
						h.overPlayType = "play";
						h.overPlaySec = 0;
						e.updatePlayFacade.onOverPlay()
					}
				}
			};
			video.addEventListener("timeupdate", timeUpdate);
			video.addEventListener("seeking", function() {
				h.seeking = true;
				if (h.s2j_onVideoSeeking) {
					h.s2j_onVideoSeeking()
				}
				if (e.startDanmu) {
					e.cmManager.clear()
				}
			});
			video.addEventListener("seeked", function() {
				h.seeking = false;
				if (h.s2j_onVideoSeeked) {
					h.s2j_onVideoSeeked()
				}
			});
			video.addEventListener("progress", function() {
				if (h.s2j_onProgressUpdate) {
					h.s2j_onProgressUpdate()
				}
			});
			video.addEventListener("waiting", function() {
				h.recordWaitingTime = video.currentTime;
				var e = new Date;
				h.recordWaitingMTime = e.getTime();
				if (!h.isWaiting && !h.seeking && video.currentTime > 0) {
					if (h.waitingTimer) {
						clearInterval(h.waitingTimer)
					}
					h.waitingTimer = setInterval(function() {
						z(video)
					}, 500)
				}
				if (typeof onbuffer == "function") {
					onbuffer()
				}
			});
			var u = 0;
			h.isCounting = false;
			var c = setInterval(function() {
				if (e.flowStatus == e.FLOW_STATUS.PLAY) {
					if (!video.paused) {
						if (video.currentTime != u) {
							if (!h.isCounting) {
								e.updatePlayFacade.startCountTimer()
							}
						} else {
							e.updatePlayFacade.stopCountTimer()
						}
						u = video.currentTime
					}
				}
			}, 500)
		}
		function W(t) {
			if (!h.sessionId) {
				if (h.getBase64 != undefined) {
					h.sessionId = Base64.encode(t)
				} else {
					e.ajax({
						url: "//player.polyv.net/script/js/base64.js",
						dataType: "script",
						success: function() {
							h.getBase64 = true;
							h.sessionId = Base64.encode(t)
						},
						error: function() {
							if (!h.getSessionBase) {
								h.getSessionBase = true;
								W(t)
							}
						}
					})
				}
			}
			return h.sessionId
		}
		function z(t) {
			if (t.currentTime > h.recordWaitingTime && !h.hasSendSecondBuffer) {
				h.hasSendSecondBuffer = true;
				var n = new Date;
				var i = n.getTime() - h.recordWaitingMTime;
				h.isWaiting = true;
				var r = {};
				r.pid = h.pid;
				r.uid = h.uid;
				r.vid = h.vid;
				r.time = i;
				r.type = "buffer";
				r.href = e.href;
				r.domain = e.domain;
				D(r);
				clearInterval(h.waitingTimer)
			}
		}
		function q(e, t, n) {
			if (!h.autoplay) {
				t.css("background-image", "url(" + n + ")")
			}
			if (h.width.charAt(h.width.length - 1) == "%") {
				e.width(h.width);
				e.height(h.height)
			}
			if (h.ban_skin_progress == "on" || h.ban_skin_progress == true) {
				if (typeof banSkinProgress == "function") {
					banSkinProgress()
				}
			}
		}
		function $() {
			if (e(".error").length != 0) {
				e(".error,.error-bg").remove()
			}
			var t = e("<div/>", {
				"class": "error"
			});
			var n = e("<div/>", {
				"class": "error-bg"
			});
			n.appendTo(e(".container-main"));
			t.appendTo(e(".container-main"));
			t.html(h.validMessage);
			e("video").attr("poster", "");
			e.updateFlowStatus(e.FLOW_STATUS.ERROR)
		}
		h.j2s_initSrt = function(t, n) {
			if (!arguments[1]) {
				n = false
			}
			if (h.srt_index === t && !n) {
				return
			}
			if (h.srt_list[t] != undefined && h.srt_list[t][1].indexOf("http://") != -1) {
				h.srt_index = t;
				var i = e("#srtContainer");
				i.html("");
				if (h.srt) {
					h.srt.stopTimer()
				}
				h.srt = new Srt(h.srt_list[h.srt_index][1]);
				h.srt.setContainer(i);
				h.srt.startTimer()
			}
		};
		h.j2s_checkPassword = function(e) {
			R(e)
		};
		h.videoList = [];
		h.playNextIndex = 0;
		h.getList = function(t) {
			var n = "http://static.polyv.net/pxml/" + t + ".xml";
			e.ajax({
				type: "GET",
				url: n,
				success: function(t) {
					e(t).find("videodoc").each(function(t) {
						var n = e(this).children("vid").text();
						h.videoList.push(n)
					});
					if (h.videoList.length == 0) {
						if (typeof hideNext == "function") {
							hideNext()
						}
					}
				},
				error: function() {
					if (typeof hideNext == "function") {
						hideNext()
					}
				}
			})
		};
		return h
	};
	e.fn.previewPlayer = createPreviewPlayer;
	e.fn.videoPlayer = createPlayer;
	e.fn.showPlayer = createShowPlayer;
	e.fn.createPurePlayer = function(t) {
		if (t.vid.length > 34) {
			t.vid = e.decode(t.vid)
		}
		return privateCreate(this, t)
	};
	e.getPid = function t() {
		var e = new Date;
		var t = e.getTime() + "";
		var n = parseInt(Math.random() * 1e6 + 1e6) + "";
		return t + "X" + n
	};
	e.getPlayer = function n(e) {
		if (navigator.appName.indexOf("Microsoft") != -1) {
			var t = window[e];
			try {
				if (t.length > 0) {
					return t[0]
				} else {
					return t
				}
			} catch (n) {}
			return document[e]
		} else {
			return document[e]
		}
	};
	e.playerType = {
		FLASH: "flash",
		HTML: "html",
		INSTALLER: "installer",
		NO_SUPPORT: "nosupport"
	};
	e.determinePlayerType = function(t, n, i) {
		if (t.forceHTML5) {
			return e.playerType.HTML
		}
		if (t.forceFlash) {
			return e.playerType.FLASH
		}
		if (e.isSupportedHTMLDevice()) {
			if (i) {
				return e.playerType.HTML
			}
		}
		if (e.isFirefox() == true) {
			return e.playerType.FLASH
		}
		if (n == null && i == false) {
			return e.playerType.NO_SUPPORT
		}
		if (n != null) {
			if (e.isFlashVersionSufficient(n)) {
				return e.playerType.FLASH
			} else {
				return e.playerType.INSTALLER
			}
		}
		if (i) {
			return e.playerType.HTML
		}
		return e.playerType.NO_SUPPORT
	};
	e.isFlashVersionSufficient = function(t) {
		if (t == null) return false;
		if (t.majorVersion > e.majorVersion || t.majorVersion == e.majorVersion && t.majorRevision > e.majorRevision) {
			return true
		}
		return false
	};
	e.isFirefox = function() {
		if (navigator.userAgent.match(new RegExp("Firefox", "i"))) {
			return true
		} else {
			return false
		}
	};
	e.isIphone = function() {
		if (navigator.userAgent.indexOf("iPhone") > -1) {
			return true
		} else {
			return false
		}
	};
	e.checkHtmlSupport = function() {
		var t = document.createElement("video");
		var n = document.createElement("canvas");
		var i = true;
		if (!navigator.userAgent.match(new RegExp("android", "i"))) {
			i = !! (t.canPlayType && t.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/, ""))
		}
		var r = !! document.createElement("canvas").getContext;
		return i && r && e.isSupportedHTMLDevice()
	};
	e.checkLowerDevice = function() {
		var e = window.screen.height == 960 / 2;
		if (window.devicePixelRatio == 1) {
			e = true
		}
		return e
	};
	e.isIOS = function(e) {
		var t = ["iPad", "iPhone", "iPod"];
		var n = t.length;
		var i = e || navigator.userAgent;
		for (var r = 0; r < n; r++) {
			if (i.match(new RegExp(t[r], "i"))) {
				return true
			}
		}
		return false
	};
	e.isUc = function(e) {
		var t = e || navigator.userAgent;
		if (t.indexOf("UCBrowser") != -1) {
			return true
		}
		return false
	};
	e.isSupportedHTMLDevice = function(e) {
		var t = ["iPad", "iPhone", "iPod", "android"];
		var n = t.length;
		var i = e || navigator.userAgent;
		for (var r = 0; r < n; r++) {
			if (i.match(new RegExp(t[r], "i"))) {
				return true
			}
		}
		return false
	};
	e.isAndroid = function() {
		if (navigator.userAgent.match(new RegExp("android", "i"))) {
			return true
		}
		return false
	};
	e.isIE = function() {
		if ( !! window.ActiveXObject || "ActiveXObject" in window) return true;
		else return false
	};
	e.checkFlashSupport = function() {
		var t = e.isIE() ? e.checkFlashSupportIE() : e.checkFlashSupportStandard();
		return t
	};
	e.checkFlashSupportIE = function() {
		var e;
		try {
			var t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
			var n = t.GetVariable("$version");
			e = / ([0-9]+),([0-9]+),([0-9]+),/.exec(n)
		} catch (i) {
			return null
		}
		return {
			majorVersion: e[1],
			majorRevision: e[2],
			minorRevision: e[3]
		}
	};
	e.checkFlashSupportStandard = function() {
		var e;
		var t;
		var n;
		var i;
		try {
			if (typeof navigator.plugins != "undefined" && navigator.plugins.length > 0) {
				if (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]) {
					var r = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "";
					var a = navigator.plugins["Shockwave Flash" + r].description;
					var o = navigator.plugins["Shockwave Flash" + r].filename;
					if (o.match) {
						if (o.toLowerCase().match(/lite/)) {
							throw new Error
						}
					}
					e = a.split(" ");
					t = e[2].split(".")[0];
					n = e[2].split(".")[1];
					i = e[3];
					if (i == "") {
						i = e[4]
					}
					if (i[0] == "d") {
						i = i.substring(1)
					} else if (i[0] == "r") {
						i = i.substring(1);
						if (i.indexOf("d") > 0) {
							i = i.substring(0, i.indexOf("d"))
						}
					}
				} else {
					throw new Error
				}
			} else {
				return null
			}
		} catch (s) {
			return null
		}
		return {
			majorVersion: t,
			majorRevision: n,
			minorRevision: i
		}
	};
	e.decode = function(e) {
		var t, n, i, r, a, o;
		t = "abcdofghijklnmepqrstuvwxyz0123456789";
		o = "lpmkenjibhuvgycftxdrzsoawq0126783459";
		if (e.length == 34) {
			n = e
		} else {
			e = e.substr(1);
			n = "";
			for (i = 0; i < e.length; i++) {
				r = e.charAt(i);
				a = o.indexOf(r);
				if (a == -1) {
					n = n + r
				} else {
					n = n + t.charAt(a)
				}
			}
		}
		return n
	};
	e.getIosCss = function() {
		return e("<style type='text/css'>video::-webkit-media-controls-panel {display: none!important;-webkit-appearance: none;}video::--webkit-media-controls-play-button{display: none!important;-webkit-appearance: none;}video::-webkit-media-controls-start-playback-button {display: none!important;-webkit-appearance: none}</style>")
	};
	e.FLOW_STATUS = {
		LOADING: "loading",
		TEASER: "teaser",
		PREAD: "preAd",
		PLAY: "play",
		PAUSE: "pause",
		ENDAD: "endAd",
		OVER: "over",
		ERROR: "error"
	};
	e.updateFlowStatus = function(t) {
		e.flowStatus = t;
		if (typeof updateFlow == "function") {
			updateFlow(t)
		}
	}
})(polyvObject);

