var zR = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function QA(_) {
  return _ && _.__esModule && Object.prototype.hasOwnProperty.call(_, "default") ? _.default : _;
}
/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var qR;
(function(_) {
  (function(E) {
    var O = typeof globalThis == "object" ? globalThis : typeof zR == "object" ? zR : typeof self == "object" ? self : typeof this == "object" ? this : M(), R = I(_);
    typeof O.Reflect < "u" && (R = I(O.Reflect, R)), E(R, O), typeof O.Reflect > "u" && (O.Reflect = _);
    function I(v, B) {
      return function(h, K) {
        Object.defineProperty(v, h, { configurable: !0, writable: !0, value: K }), B && B(h, K);
      };
    }
    function t() {
      try {
        return Function("return this;")();
      } catch {
      }
    }
    function r() {
      try {
        return (0, eval)("(function() { return this; })()");
      } catch {
      }
    }
    function M() {
      return t() || r();
    }
  })(function(E, O) {
    var R = Object.prototype.hasOwnProperty, I = typeof Symbol == "function", t = I && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", r = I && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", M = typeof Object.create == "function", v = { __proto__: [] } instanceof Array, B = !M && !v, h = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: M ? function() {
        return JO(/* @__PURE__ */ Object.create(null));
      } : v ? function() {
        return JO({ __proto__: null });
      } : function() {
        return JO({});
      },
      has: B ? function(C, T) {
        return R.call(C, T);
      } : function(C, T) {
        return T in C;
      },
      get: B ? function(C, T) {
        return R.call(C, T) ? C[T] : void 0;
      } : function(C, T) {
        return C[T];
      }
    }, K = Object.getPrototypeOf(Function), H = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : WA(), e = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : jA(), t_ = typeof WeakMap == "function" ? WeakMap : ZA(), r_ = I ? Symbol.for("@reflect-metadata:registry") : void 0, z = $A(), __ = sA(z);
    function g(C, T, L, G) {
      if (j(L)) {
        if (!sR(C))
          throw new TypeError();
        if (!pR(T))
          throw new TypeError();
        return TO(C, T);
      } else {
        if (!sR(C))
          throw new TypeError();
        if (!O_(T))
          throw new TypeError();
        if (!O_(G) && !j(G) && !CI(G))
          throw new TypeError();
        return CI(G) && (G = void 0), L = k_(L), nO(C, T, L, G);
      }
    }
    E("decorate", g);
    function I_(C, T) {
      function L(G, u) {
        if (!O_(G))
          throw new TypeError();
        if (!j(u) && !uA(u))
          throw new TypeError();
        KR(C, T, G, u);
      }
      return L;
    }
    E("metadata", I_);
    function Z(C, T, L, G) {
      if (!O_(L))
        throw new TypeError();
      return j(G) || (G = k_(G)), KR(C, T, L, G);
    }
    E("defineMetadata", Z);
    function W(C, T, L) {
      if (!O_(T))
        throw new TypeError();
      return j(L) || (L = k_(L)), kI(C, T, L);
    }
    E("hasMetadata", W);
    function E_(C, T, L) {
      if (!O_(T))
        throw new TypeError();
      return j(L) || (L = k_(L)), CE(C, T, L);
    }
    E("hasOwnMetadata", E_);
    function C_(C, T, L) {
      if (!O_(T))
        throw new TypeError();
      return j(L) || (L = k_(L)), y(C, T, L);
    }
    E("getMetadata", C_);
    function k(C, T, L) {
      if (!O_(T))
        throw new TypeError();
      return j(L) || (L = k_(L)), Z_(C, T, L);
    }
    E("getOwnMetadata", k);
    function VI(C, T) {
      if (!O_(C))
        throw new TypeError();
      return j(T) || (T = k_(T)), XR(C, T);
    }
    E("getMetadataKeys", VI);
    function NI(C, T) {
      if (!O_(C))
        throw new TypeError();
      return j(T) || (T = k_(T)), uR(C, T);
    }
    E("getOwnMetadataKeys", NI);
    function CO(C, T, L) {
      if (!O_(T))
        throw new TypeError();
      if (j(L) || (L = k_(L)), !O_(T))
        throw new TypeError();
      j(L) || (L = k_(L));
      var G = dI(
        T,
        L,
        /*Create*/
        !1
      );
      return j(G) ? !1 : G.OrdinaryDeleteMetadata(C, T, L);
    }
    E("deleteMetadata", CO);
    function TO(C, T) {
      for (var L = C.length - 1; L >= 0; --L) {
        var G = C[L], u = G(T);
        if (!j(u) && !CI(u)) {
          if (!pR(u))
            throw new TypeError();
          T = u;
        }
      }
      return T;
    }
    function nO(C, T, L, G) {
      for (var u = C.length - 1; u >= 0; --u) {
        var R_ = C[u], S_ = R_(T, L, G);
        if (!j(S_) && !CI(S_)) {
          if (!O_(S_))
            throw new TypeError();
          G = S_;
        }
      }
      return G;
    }
    function kI(C, T, L) {
      var G = CE(C, T, L);
      if (G)
        return !0;
      var u = FO(T);
      return CI(u) ? !1 : kI(C, u, L);
    }
    function CE(C, T, L) {
      var G = dI(
        T,
        L,
        /*Create*/
        !1
      );
      return j(G) ? !1 : $R(G.OrdinaryHasOwnMetadata(C, T, L));
    }
    function y(C, T, L) {
      var G = CE(C, T, L);
      if (G)
        return Z_(C, T, L);
      var u = FO(T);
      if (!CI(u))
        return y(C, u, L);
    }
    function Z_(C, T, L) {
      var G = dI(
        T,
        L,
        /*Create*/
        !1
      );
      if (!j(G))
        return G.OrdinaryGetOwnMetadata(C, T, L);
    }
    function KR(C, T, L, G) {
      var u = dI(
        L,
        G,
        /*Create*/
        !0
      );
      u.OrdinaryDefineOwnMetadata(C, T, L, G);
    }
    function XR(C, T) {
      var L = uR(C, T), G = FO(C);
      if (G === null)
        return L;
      var u = XR(G, T);
      if (u.length <= 0)
        return L;
      if (L.length <= 0)
        return u;
      for (var R_ = new e(), S_ = [], J = 0, Y = L; J < Y.length; J++) {
        var b = Y[J], w = R_.has(b);
        w || (R_.add(b), S_.push(b));
      }
      for (var m = 0, Q = u; m < Q.length; m++) {
        var b = Q[m], w = R_.has(b);
        w || (R_.add(b), S_.push(b));
      }
      return S_;
    }
    function uR(C, T) {
      var L = dI(
        C,
        T,
        /*create*/
        !1
      );
      return L ? L.OrdinaryOwnMetadataKeys(C, T) : [];
    }
    function xR(C) {
      if (C === null)
        return 1;
      switch (typeof C) {
        case "undefined":
          return 0;
        case "boolean":
          return 2;
        case "string":
          return 3;
        case "symbol":
          return 4;
        case "number":
          return 5;
        case "object":
          return C === null ? 1 : 6;
        default:
          return 6;
      }
    }
    function j(C) {
      return C === void 0;
    }
    function CI(C) {
      return C === null;
    }
    function bA(C) {
      return typeof C == "symbol";
    }
    function O_(C) {
      return typeof C == "object" ? C !== null : typeof C == "function";
    }
    function mA(C, T) {
      switch (xR(C)) {
        case 0:
          return C;
        case 1:
          return C;
        case 2:
          return C;
        case 3:
          return C;
        case 4:
          return C;
        case 5:
          return C;
      }
      var L = T === 3 ? "string" : T === 5 ? "number" : "default", G = WR(C, t);
      if (G !== void 0) {
        var u = G.call(C, L);
        if (O_(u))
          throw new TypeError();
        return u;
      }
      return KA(C, L === "default" ? "number" : L);
    }
    function KA(C, T) {
      if (T === "string") {
        var L = C.toString;
        if (TI(L)) {
          var G = L.call(C);
          if (!O_(G))
            return G;
        }
        var u = C.valueOf;
        if (TI(u)) {
          var G = u.call(C);
          if (!O_(G))
            return G;
        }
      } else {
        var u = C.valueOf;
        if (TI(u)) {
          var G = u.call(C);
          if (!O_(G))
            return G;
        }
        var R_ = C.toString;
        if (TI(R_)) {
          var G = R_.call(C);
          if (!O_(G))
            return G;
        }
      }
      throw new TypeError();
    }
    function $R(C) {
      return !!C;
    }
    function XA(C) {
      return "" + C;
    }
    function k_(C) {
      var T = mA(
        C,
        3
        /* String */
      );
      return bA(T) ? T : XA(T);
    }
    function sR(C) {
      return Array.isArray ? Array.isArray(C) : C instanceof Object ? C instanceof Array : Object.prototype.toString.call(C) === "[object Array]";
    }
    function TI(C) {
      return typeof C == "function";
    }
    function pR(C) {
      return typeof C == "function";
    }
    function uA(C) {
      switch (xR(C)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function ZO(C, T) {
      return C === T || C !== C && T !== T;
    }
    function WR(C, T) {
      var L = C[T];
      if (L != null) {
        if (!TI(L))
          throw new TypeError();
        return L;
      }
    }
    function jR(C) {
      var T = WR(C, r);
      if (!TI(T))
        throw new TypeError();
      var L = T.call(C);
      if (!O_(L))
        throw new TypeError();
      return L;
    }
    function ZR(C) {
      return C.value;
    }
    function FR(C) {
      var T = C.next();
      return T.done ? !1 : T;
    }
    function JR(C) {
      var T = C.return;
      T && T.call(C);
    }
    function FO(C) {
      var T = Object.getPrototypeOf(C);
      if (typeof C != "function" || C === K || T !== K)
        return T;
      var L = C.prototype, G = L && Object.getPrototypeOf(L);
      if (G == null || G === Object.prototype)
        return T;
      var u = G.constructor;
      return typeof u != "function" || u === C ? T : u;
    }
    function xA() {
      var C;
      !j(r_) && typeof O.Reflect < "u" && !(r_ in O.Reflect) && typeof O.Reflect.defineMetadata == "function" && (C = pA(O.Reflect));
      var T, L, G, u = new t_(), R_ = {
        registerProvider: S_,
        getProvider: Y,
        setProvider: w
      };
      return R_;
      function S_(m) {
        if (!Object.isExtensible(R_))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case C === m:
            break;
          case j(T):
            T = m;
            break;
          case T === m:
            break;
          case j(L):
            L = m;
            break;
          case L === m:
            break;
          default:
            G === void 0 && (G = new e()), G.add(m);
            break;
        }
      }
      function J(m, Q) {
        if (!j(T)) {
          if (T.isProviderFor(m, Q))
            return T;
          if (!j(L)) {
            if (L.isProviderFor(m, Q))
              return T;
            if (!j(G))
              for (var d = jR(G); ; ) {
                var A_ = FR(d);
                if (!A_)
                  return;
                var F_ = ZR(A_);
                if (F_.isProviderFor(m, Q))
                  return JR(d), F_;
              }
          }
        }
        if (!j(C) && C.isProviderFor(m, Q))
          return C;
      }
      function Y(m, Q) {
        var d = u.get(m), A_;
        return j(d) || (A_ = d.get(Q)), j(A_) && (A_ = J(m, Q), j(A_) || (j(d) && (d = new H(), u.set(m, d)), d.set(Q, A_))), A_;
      }
      function b(m) {
        if (j(m))
          throw new TypeError();
        return T === m || L === m || !j(G) && G.has(m);
      }
      function w(m, Q, d) {
        if (!b(d))
          throw new Error("Metadata provider not registered.");
        var A_ = Y(m, Q);
        if (A_ !== d) {
          if (!j(A_))
            return !1;
          var F_ = u.get(m);
          j(F_) && (F_ = new H(), u.set(m, F_)), F_.set(Q, d);
        }
        return !0;
      }
    }
    function $A() {
      var C;
      return !j(r_) && O_(O.Reflect) && Object.isExtensible(O.Reflect) && (C = O.Reflect[r_]), j(C) && (C = xA()), !j(r_) && O_(O.Reflect) && Object.isExtensible(O.Reflect) && Object.defineProperty(O.Reflect, r_, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: C
      }), C;
    }
    function sA(C) {
      var T = new t_(), L = {
        isProviderFor: function(b, w) {
          var m = T.get(b);
          return j(m) ? !1 : m.has(w);
        },
        OrdinaryDefineOwnMetadata: S_,
        OrdinaryHasOwnMetadata: u,
        OrdinaryGetOwnMetadata: R_,
        OrdinaryOwnMetadataKeys: J,
        OrdinaryDeleteMetadata: Y
      };
      return z.registerProvider(L), L;
      function G(b, w, m) {
        var Q = T.get(b), d = !1;
        if (j(Q)) {
          if (!m)
            return;
          Q = new H(), T.set(b, Q), d = !0;
        }
        var A_ = Q.get(w);
        if (j(A_)) {
          if (!m)
            return;
          if (A_ = new H(), Q.set(w, A_), !C.setProvider(b, w, L))
            throw Q.delete(w), d && T.delete(b), new Error("Wrong provider for target.");
        }
        return A_;
      }
      function u(b, w, m) {
        var Q = G(
          w,
          m,
          /*Create*/
          !1
        );
        return j(Q) ? !1 : $R(Q.has(b));
      }
      function R_(b, w, m) {
        var Q = G(
          w,
          m,
          /*Create*/
          !1
        );
        if (!j(Q))
          return Q.get(b);
      }
      function S_(b, w, m, Q) {
        var d = G(
          m,
          Q,
          /*Create*/
          !0
        );
        d.set(b, w);
      }
      function J(b, w) {
        var m = [], Q = G(
          b,
          w,
          /*Create*/
          !1
        );
        if (j(Q))
          return m;
        for (var d = Q.keys(), A_ = jR(d), F_ = 0; ; ) {
          var QR = FR(A_);
          if (!QR)
            return m.length = F_, m;
          var FA = ZR(QR);
          try {
            m[F_] = FA;
          } catch (JA) {
            try {
              JR(A_);
            } finally {
              throw JA;
            }
          }
          F_++;
        }
      }
      function Y(b, w, m) {
        var Q = G(
          w,
          m,
          /*Create*/
          !1
        );
        if (j(Q) || !Q.delete(b))
          return !1;
        if (Q.size === 0) {
          var d = T.get(w);
          j(d) || (d.delete(m), d.size === 0 && T.delete(d));
        }
        return !0;
      }
    }
    function pA(C) {
      var T = C.defineMetadata, L = C.hasOwnMetadata, G = C.getOwnMetadata, u = C.getOwnMetadataKeys, R_ = C.deleteMetadata, S_ = new t_(), J = {
        isProviderFor: function(Y, b) {
          var w = S_.get(Y);
          return j(w) ? u(Y, b).length ? (j(w) && (w = new e(), S_.set(Y, w)), w.add(b), !0) : !1 : w.has(b);
        },
        OrdinaryDefineOwnMetadata: T,
        OrdinaryHasOwnMetadata: L,
        OrdinaryGetOwnMetadata: G,
        OrdinaryOwnMetadataKeys: u,
        OrdinaryDeleteMetadata: R_
      };
      return J;
    }
    function dI(C, T, L) {
      var G = z.getProvider(C, T);
      if (!j(G))
        return G;
      if (L) {
        if (z.setProvider(C, T, __))
          return __;
        throw new Error("Illegal state.");
      }
    }
    function WA() {
      var C = {}, T = [], L = (
        /** @class */
        function() {
          function J(Y, b, w) {
            this._index = 0, this._keys = Y, this._values = b, this._selector = w;
          }
          return J.prototype["@@iterator"] = function() {
            return this;
          }, J.prototype[r] = function() {
            return this;
          }, J.prototype.next = function() {
            var Y = this._index;
            if (Y >= 0 && Y < this._keys.length) {
              var b = this._selector(this._keys[Y], this._values[Y]);
              return Y + 1 >= this._keys.length ? (this._index = -1, this._keys = T, this._values = T) : this._index++, { value: b, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, J.prototype.throw = function(Y) {
            throw this._index >= 0 && (this._index = -1, this._keys = T, this._values = T), Y;
          }, J.prototype.return = function(Y) {
            return this._index >= 0 && (this._index = -1, this._keys = T, this._values = T), { value: Y, done: !0 };
          }, J;
        }()
      ), G = (
        /** @class */
        function() {
          function J() {
            this._keys = [], this._values = [], this._cacheKey = C, this._cacheIndex = -2;
          }
          return Object.defineProperty(J.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), J.prototype.has = function(Y) {
            return this._find(
              Y,
              /*insert*/
              !1
            ) >= 0;
          }, J.prototype.get = function(Y) {
            var b = this._find(
              Y,
              /*insert*/
              !1
            );
            return b >= 0 ? this._values[b] : void 0;
          }, J.prototype.set = function(Y, b) {
            var w = this._find(
              Y,
              /*insert*/
              !0
            );
            return this._values[w] = b, this;
          }, J.prototype.delete = function(Y) {
            var b = this._find(
              Y,
              /*insert*/
              !1
            );
            if (b >= 0) {
              for (var w = this._keys.length, m = b + 1; m < w; m++)
                this._keys[m - 1] = this._keys[m], this._values[m - 1] = this._values[m];
              return this._keys.length--, this._values.length--, ZO(Y, this._cacheKey) && (this._cacheKey = C, this._cacheIndex = -2), !0;
            }
            return !1;
          }, J.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = C, this._cacheIndex = -2;
          }, J.prototype.keys = function() {
            return new L(this._keys, this._values, u);
          }, J.prototype.values = function() {
            return new L(this._keys, this._values, R_);
          }, J.prototype.entries = function() {
            return new L(this._keys, this._values, S_);
          }, J.prototype["@@iterator"] = function() {
            return this.entries();
          }, J.prototype[r] = function() {
            return this.entries();
          }, J.prototype._find = function(Y, b) {
            if (!ZO(this._cacheKey, Y)) {
              this._cacheIndex = -1;
              for (var w = 0; w < this._keys.length; w++)
                if (ZO(this._keys[w], Y)) {
                  this._cacheIndex = w;
                  break;
                }
            }
            return this._cacheIndex < 0 && b && (this._cacheIndex = this._keys.length, this._keys.push(Y), this._values.push(void 0)), this._cacheIndex;
          }, J;
        }()
      );
      return G;
      function u(J, Y) {
        return J;
      }
      function R_(J, Y) {
        return Y;
      }
      function S_(J, Y) {
        return [J, Y];
      }
    }
    function jA() {
      var C = (
        /** @class */
        function() {
          function T() {
            this._map = new H();
          }
          return Object.defineProperty(T.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0
          }), T.prototype.has = function(L) {
            return this._map.has(L);
          }, T.prototype.add = function(L) {
            return this._map.set(L, L), this;
          }, T.prototype.delete = function(L) {
            return this._map.delete(L);
          }, T.prototype.clear = function() {
            this._map.clear();
          }, T.prototype.keys = function() {
            return this._map.keys();
          }, T.prototype.values = function() {
            return this._map.keys();
          }, T.prototype.entries = function() {
            return this._map.entries();
          }, T.prototype["@@iterator"] = function() {
            return this.keys();
          }, T.prototype[r] = function() {
            return this.keys();
          }, T;
        }()
      );
      return C;
    }
    function ZA() {
      var C = 16, T = h.create(), L = G();
      return (
        /** @class */
        function() {
          function Y() {
            this._key = G();
          }
          return Y.prototype.has = function(b) {
            var w = u(
              b,
              /*create*/
              !1
            );
            return w !== void 0 ? h.has(w, this._key) : !1;
          }, Y.prototype.get = function(b) {
            var w = u(
              b,
              /*create*/
              !1
            );
            return w !== void 0 ? h.get(w, this._key) : void 0;
          }, Y.prototype.set = function(b, w) {
            var m = u(
              b,
              /*create*/
              !0
            );
            return m[this._key] = w, this;
          }, Y.prototype.delete = function(b) {
            var w = u(
              b,
              /*create*/
              !1
            );
            return w !== void 0 ? delete w[this._key] : !1;
          }, Y.prototype.clear = function() {
            this._key = G();
          }, Y;
        }()
      );
      function G() {
        var Y;
        do
          Y = "@@WeakMap@@" + J();
        while (h.has(T, Y));
        return T[Y] = !0, Y;
      }
      function u(Y, b) {
        if (!R.call(Y, L)) {
          if (!b)
            return;
          Object.defineProperty(Y, L, { value: h.create() });
        }
        return Y[L];
      }
      function R_(Y, b) {
        for (var w = 0; w < b; ++w)
          Y[w] = Math.random() * 255 | 0;
        return Y;
      }
      function S_(Y) {
        return typeof Uint8Array == "function" ? typeof crypto < "u" ? crypto.getRandomValues(new Uint8Array(Y)) : typeof msCrypto < "u" ? msCrypto.getRandomValues(new Uint8Array(Y)) : R_(new Uint8Array(Y), Y) : R_(new Array(Y), Y);
      }
      function J() {
        var Y = S_(C);
        Y[6] = Y[6] & 79 | 64, Y[8] = Y[8] & 191 | 128;
        for (var b = "", w = 0; w < C; ++w) {
          var m = Y[w];
          (w === 4 || w === 6 || w === 8) && (b += "-"), m < 16 && (b += "0"), b += m.toString(16).toLowerCase();
        }
        return b;
      }
    }
    function JO(C) {
      return C.__ = void 0, delete C.__, C;
    }
  });
})(qR || (qR = {}));
var f = /* @__PURE__ */ ((_) => (_[_.NONE = 0] = "NONE", _[_.UV_LUMINESCENCE = 1] = "UV_LUMINESCENCE", _[_.IR_B900 = 2] = "IR_B900", _[_.IMAGE_PATTERN = 4] = "IMAGE_PATTERN", _[_.AXIAL_PROTECTION = 8] = "AXIAL_PROTECTION", _[_.UV_FIBERS = 16] = "UV_FIBERS", _[_.IR_VISIBILITY = 32] = "IR_VISIBILITY", _[_.OCR_SECURITY_TEXT = 64] = "OCR_SECURITY_TEXT", _[_.IPI = 128] = "IPI", _[_.IR_PHOTO = 256] = "IR_PHOTO", _[_.PHOTO_EMBED_TYPE = 512] = "PHOTO_EMBED_TYPE", _[_.OVI = 1024] = "OVI", _[_.IR_LUMINESCENCE = 2048] = "IR_LUMINESCENCE", _[_.HOLOGRAMS = 4096] = "HOLOGRAMS", _[_.PHOTO_AREA = 8192] = "PHOTO_AREA", _[_.UV_BACKGROUND = 16384] = "UV_BACKGROUND", _[_.PORTRAIT_COMPARISON = 32768] = "PORTRAIT_COMPARISON", _[_.BARCODE_FORMAT_CHECK = 65536] = "BARCODE_FORMAT_CHECK", _[_.KINEGRAM = 131072] = "KINEGRAM", _[_.LETTER_SCREEN = 262144] = "LETTER_SCREEN", _[_.HOLOGRAM_DETECTION = 524288] = "HOLOGRAM_DETECTION", _[_.FINGERPRINT_COMPARISON = 1048576] = "FINGERPRINT_COMPARISON", _[_.LIVENESS = 2097152] = "LIVENESS", _[_.EXTENDED_OCR_CHECK = 4194304] = "EXTENDED_OCR_CHECK", _[_.EXTENDED_MRZ_CHECK = 8388608] = "EXTENDED_MRZ_CHECK", _[_.STATUS_ONLY = 2147483648] = "STATUS_ONLY", _))(f || {});
const zA = (_) => Object.values(f).includes(_), aR = (_) => {
  const E = [];
  for (const O in f)
    if (isNaN(Number(O))) {
      const R = f[O];
      zA(R) && (_ & R) === R && E.push(R);
    }
  return E;
};
var l = /* @__PURE__ */ ((_) => (_[_.OFF = 0] = "OFF", _[_.OVI = 1] = "OVI", _[_.WHITE_TOP = 2] = "WHITE_TOP", _[_.WHITE_SIDE = 4] = "WHITE_SIDE", _[_.WHITE_FRONT = 8388608] = "WHITE_FRONT", _[_.IR_TOP = 8] = "IR_TOP", _[_.IR_SIDE = 16] = "IR_SIDE", _[_.IR_FRONT = 16777216] = "IR_FRONT", _[_.WHITE_GRAY = 33554432] = "WHITE_GRAY", _[_.OVD = 67108864] = "OVD", _[_.VIDEODETECTION = 134217728] = "VIDEODETECTION", _[_.IR_870_OBL = 268435456] = "IR_870_OBL", _[_.UV = 128] = "UV", _[_.IR_LUMINESCENCE = 256] = "IR_LUMINESCENCE", _[_.AXIAL_WHITE_LEFT = 1024] = "AXIAL_WHITE_LEFT", _[_.AXIAL_WHITE_RIGHT = 2048] = "AXIAL_WHITE_RIGHT", _[_.AXIAL_WHITE_FRONT = 512] = "AXIAL_WHITE_FRONT", _[_.IR_720 = 4096] = "IR_720", _[_.IR_940 = 8192] = "IR_940", _[_.WHITE_FULL = 6] = "WHITE_FULL", _[_.IR_FULL = 24] = "IR_FULL", _[_.AXIAL_WHITE_FULL = 3072] = "AXIAL_WHITE_FULL", _[_.RAW_DATA = 2147483648] = "RAW_DATA", _[_.RAW_DATA_GRBG = 2415919104] = "RAW_DATA_GRBG", _[_.RAW_DATA_GBGR = 2684354560] = "RAW_DATA_GBGR", _[_.RAW_DATA_RGGB = 2952790016] = "RAW_DATA_RGGB", _[_.RAW_DATA_BGGR = 3221225472] = "RAW_DATA_BGGR", _[_.TRANSMITTED = 32] = "TRANSMITTED", _[_.TRANSMITTED_IR = 64] = "TRANSMITTED_IR", _[_.ANTI_STOKES = 65536] = "ANTI_STOKES", _[_.TRANSMITTED_IR940 = 16384] = "TRANSMITTED_IR940", _[_.OVD_RIGHT = 262144] = "OVD_RIGHT", _[_.OVD_LEFT = 131072] = "OVD_LEFT", _[_.IR_700 = 32768] = "IR_700", _[
  _.IR_870 = 16777216
  /* IR_FRONT */
] = "IR_870", _[
  _.HOLO = 67108864
  /* OVD */
] = "HOLO", _[
  _.IR_BOTTOM = 64
  /* TRANSMITTED_IR */
] = "IR_BOTTOM", _[
  _.WHITE_BOTTOM = 32
  /* TRANSMITTED */
] = "WHITE_BOTTOM", _[_.UVC = 524288] = "UVC", _[_.UVB = 1048576] = "UVB", _[_.WHITE_OBL = 2097152] = "WHITE_OBL", _[_.WHITE_SPECIAL = 4194304] = "WHITE_SPECIAL", _))(l || {});
const qA = (_) => Object.values(l).includes(_), LI = (_) => {
  const E = [];
  for (const O in l) {
    const R = Number(O);
    if (!isNaN(R)) {
      const I = l[R];
      qA(I) && (_ & I) === I && E.push(I);
    }
  }
  return E;
};
var zO = /* @__PURE__ */ ((_) => (_[_.LINEAR = 1] = "LINEAR", _[_.TWO_DIMENSIONAL = 2] = "TWO_DIMENSIONAL", _))(zO || {}), qO = /* @__PURE__ */ ((_) => (_[_.TEXT = 0] = "TEXT", _[_.BYTE = 1] = "BYTE", _[_.NUM = 2] = "NUM", _[_.SHIFT = 3] = "SHIFT", _[_.ALL = 4] = "ALL", _))(qO || {}), aO = /* @__PURE__ */ ((_) => (_[_.NO_ERR = 0] = "NO_ERR", _[_.NULL_PTR_ERR = -6001] = "NULL_PTR_ERR", _[_.BAD_ARG_ERR = -6002] = "BAD_ARG_ERR", _[_.SIZE_ERR = -6003] = "SIZE_ERR", _[_.RANGE_ERR = -6004] = "RANGE_ERR", _[_.INTERNAL_ERR = -6005] = "INTERNAL_ERR", _[_.TRY_EXCEPT_ERR = -6006] = "TRY_EXCEPT_ERR", _[_.BAR_CODE_NOT_FOUND = -6008] = "BAR_CODE_NOT_FOUND", _[_.BAR_CODE_DECODE_ERR = -6010] = "BAR_CODE_DECODE_ERR", _[_.NO_USER_DLL_FOUND = -6019] = "NO_USER_DLL_FOUND", _[_.NO_IPP_DLL_FOUND = -6020] = "NO_IPP_DLL_FOUND", _[_.IPP_EXEC_ERR = -6024] = "IPP_EXEC_ERR", _[_.IPP_TRY_EXCEPT_ERR = -6025] = "IPP_TRY_EXCEPT_ERR", _[_.BARCODE_ERROR_INPUT_PARAM = -11001] = "BARCODE_ERROR_INPUT_PARAM", _[_.BARCODE_ERROR_F_INIT = -11006] = "BARCODE_ERROR_F_INIT", _[_.BARCODE_ERROR_NOT_LOAD_IP_DECODE_DLL = -11012] = "BARCODE_ERROR_NOT_LOAD_IP_DECODE_DLL", _[_.BARCODE_ERROR_INNER_PROBLEM = -11100] = "BARCODE_ERROR_INNER_PROBLEM", _[_.BARCODE_ERROR_DECODE_1D_BAD_DECODE = -11200] = "BARCODE_ERROR_DECODE_1D_BAD_DECODE", _[_.BARCODE_ERROR_FIND_ROW_OR_COLUMN = -11201] = "BARCODE_ERROR_FIND_ROW_OR_COLUMN", _[_.BARCODE_ERROR_FIND_3X8_2D_X = -11202] = "BARCODE_ERROR_FIND_3X8_2D_X", _[_.BARCODE_ERROR_FIND_3X8_2D_Y = -11203] = "BARCODE_ERROR_FIND_3X8_2D_Y", _[_.BARCODE_ERROR_2D_UGOL_MAX = -11204] = "BARCODE_ERROR_2D_UGOL_MAX", _[_.BARCODE_ERROR_INDEFINITELY_DECODED = -11210] = "BARCODE_ERROR_INDEFINITELY_DECODED", _[_.BARCODE_ERROR_DLL_NOT_INIT = -11300] = "BARCODE_ERROR_DLL_NOT_INIT", _[_.BARCODE_ERROR_IP_DECODE_DLL_TRY_EXCEPT = -11400] = "BARCODE_ERROR_IP_DECODE_DLL_TRY_EXCEPT", _[_.IP_DECODE_ERROR_LARGE_ERRORS = -4503] = "IP_DECODE_ERROR_LARGE_ERRORS", _[_.IP_DECODE_ERROR_FAULT_COLUMNS = -4504] = "IP_DECODE_ERROR_FAULT_COLUMNS", _[_.IP_DECODE_ERROR_FAULT_ROWS = -4505] = "IP_DECODE_ERROR_FAULT_ROWS", _[_.IP_DECODE_ERROR_INCORRECT_ERROR_LEVEL = -4511] = "IP_DECODE_ERROR_INCORRECT_ERROR_LEVEL", _[_.IP_DECODE_ERROR_LOADING_DEV_TABLE = -4512] = "IP_DECODE_ERROR_LOADING_DEV_TABLE", _))(aO || {}), gO = /* @__PURE__ */ ((_) => (_[_.UNKNOWN = 0] = "UNKNOWN", _[_.CODE128 = 1] = "CODE128", _[_.CODE39 = 2] = "CODE39", _[_.EAN8 = 3] = "EAN8", _[_.ITF = 4] = "ITF", _[_.PDF417 = 5] = "PDF417", _[_.STF = 6] = "STF", _[_.MTF = 7] = "MTF", _[_.IATA = 8] = "IATA", _[_.CODABAR = 9] = "CODABAR", _[_.UPCA = 10] = "UPCA", _[_.CODE93 = 11] = "CODE93", _[_.UPCE = 12] = "UPCE", _[_.EAN13 = 13] = "EAN13", _[_.QRCODE = 14] = "QRCODE", _[_.AZTEC = 15] = "AZTEC", _[_.DATAMATRIX = 16] = "DATAMATRIX", _[_.ALL_1D = 17] = "ALL_1D", _[_.CODE11 = 18] = "CODE11", _[_.JABCODE = 19] = "JABCODE", _[_.END = 20] = "END", _))(gO || {}), cI = /* @__PURE__ */ ((_) => (_[_.UNKNOWN = 0] = "UNKNOWN", _[_.PASS = 1] = "PASS", _[_.INVALID_INPUT_DATA = 2] = "INVALID_INPUT_DATA", _[_.INTERNAL_ERROR = 3] = "INTERNAL_ERROR", _[_.EXCEPTION_IN_MODULE = 4] = "EXCEPTION_IN_MODULE", _[_.UNCERTAIN_VERIFICATION = 5] = "UNCERTAIN_VERIFICATION", _[_.NECESSARY_IMAGE_NOT_FOUND = 7] = "NECESSARY_IMAGE_NOT_FOUND", _[_.PHOTO_SIDES_NOT_FOUND = 8] = "PHOTO_SIDES_NOT_FOUND", _[_.INVALID_CHECKSUM = 10] = "INVALID_CHECKSUM", _[_.SYNTAX_ERROR = 11] = "SYNTAX_ERROR", _[_.LOGIC_ERROR = 12] = "LOGIC_ERROR", _[_.SOURCES_COMPARISON_ERROR = 13] = "SOURCES_COMPARISON_ERROR", _[_.FIELDS_COMPARISON_LOGIC_ERROR = 14] = "FIELDS_COMPARISON_LOGIC_ERROR", _[_.INVALID_FIELD_FORMAT = 15] = "INVALID_FIELD_FORMAT", _[_.TRUE_LUMINESCENCE_ERROR = 20] = "TRUE_LUMINESCENCE_ERROR", _[_.FALSE_LUMINESCENCE_ERROR = 21] = "FALSE_LUMINESCENCE_ERROR", _[_.FIXED_PATTERN_ERROR = 22] = "FIXED_PATTERN_ERROR", _[_.LOW_CONTRAST_IN_IR_LIGHT = 23] = "LOW_CONTRAST_IN_IR_LIGHT", _[_.INCORRECT_BACKGROUND_LIGHT = 24] = "INCORRECT_BACKGROUND_LIGHT", _[_.BACKGROUND_COMPARISON_ERROR = 25] = "BACKGROUND_COMPARISON_ERROR", _[_.INCORRECT_TEXT_COLOR = 26] = "INCORRECT_TEXT_COLOR", _[_.PHOTO_FALSE_LUMINESCENCE = 27] = "PHOTO_FALSE_LUMINESCENCE", _[_.TOO_MUCH_SHIFT = 28] = "TOO_MUCH_SHIFT", _[_.FIBERS_NOT_FOUND = 30] = "FIBERS_NOT_FOUND", _[_.TOO_MANY_OBJECTS = 31] = "TOO_MANY_OBJECTS", _[_.SPECKS_IN_UV = 33] = "SPECKS_IN_UV", _[_.TOO_LOW_RESOLUTION = 34] = "TOO_LOW_RESOLUTION", _[_.INVISIBLE_ELEMENT_PRESENT = 40] = "INVISIBLE_ELEMENT_PRESENT", _[_.VISIBLE_ELEMENT_ABSENT = 41] = "VISIBLE_ELEMENT_ABSENT", _[_.ELEMENT_SHOULD_BE_COLORED = 42] = "ELEMENT_SHOULD_BE_COLORED", _[_.ELEMENT_SHOULD_BE_GRAYSCALE = 43] = "ELEMENT_SHOULD_BE_GRAYSCALE", _[_.PHOTO_WHITE_IR_DONT_MATCH = 44] = "PHOTO_WHITE_IR_DONT_MATCH", _[_.UV_DULL_PAPER_MRZ = 50] = "UV_DULL_PAPER_MRZ", _[_.FALSE_LUMINESCENCE_IN_MRZ = 51] = "FALSE_LUMINESCENCE_IN_MRZ", _[_.UV_DULL_PAPER_PHOTO = 52] = "UV_DULL_PAPER_PHOTO", _[_.UV_DULL_PAPER_BLANK = 53] = "UV_DULL_PAPER_BLANK", _[_.UV_DULL_PAPER_ERROR = 54] = "UV_DULL_PAPER_ERROR", _[_.FALSE_LUMINESCENCE_IN_BLANK = 55] = "FALSE_LUMINESCENCE_IN_BLANK", _[_.BAD_AREA_IN_AXIAL = 60] = "BAD_AREA_IN_AXIAL", _[_.FALSE_IP_PARAMETERS = 65] = "FALSE_IP_PARAMETERS", _[_.FIELD_POS_CORRECTOR_HIGHLIGHT_IR = 80] = "FIELD_POS_CORRECTOR_HIGHLIGHT_IR", _[_.FIELD_POS_CORRECTOR_GLARES_IN_PHOTO_AREA = 81] = "FIELD_POS_CORRECTOR_GLARES_IN_PHOTO_AREA", _[_.FIELD_POS_CORRECTOR_PHOTO_REPLACED = 82] = "FIELD_POS_CORRECTOR_PHOTO_REPLACED", _[_.FIELD_POS_CORRECTOR_LANDMARKS_CHECK_ERROR = 83] = "FIELD_POS_CORRECTOR_LANDMARKS_CHECK_ERROR", _[_.FIELD_POS_CORRECTOR_FACE_PRESENCE_CHECK_ERROR = 84] = "FIELD_POS_CORRECTOR_FACE_PRESENCE_CHECK_ERROR", _[_.FIELD_POS_CORRECTOR_FACE_ABSENCE_CHECK_ERROR = 85] = "FIELD_POS_CORRECTOR_FACE_ABSENCE_CHECK_ERROR", _[_.OVI_IR_INVISIBLE = 90] = "OVI_IR_INVISIBLE", _[_.OVI_INSUFFICIENT_AREA = 91] = "OVI_INSUFFICIENT_AREA", _[_.OVI_COLOR_INVARIABLE = 92] = "OVI_COLOR_INVARIABLE", _[_.OVI_BAD_COLOR_FRONT = 93] = "OVI_BAD_COLOR_FRONT", _[_.OVI_BAD_COLOR_SIDE = 94] = "OVI_BAD_COLOR_SIDE", _[_.OVI_WIDE_COLOR_SPREAD = 95] = "OVI_WIDE_COLOR_SPREAD", _[_.OVI_BAD_COLOR_PERCENT = 96] = "OVI_BAD_COLOR_PERCENT", _[_.HOLOGRAM_ELEMENT_ABSENT = 100] = "HOLOGRAM_ELEMENT_ABSENT", _[_.HOLOGRAM_SIDE_TOP_IMAGES_ABSENT = 101] = "HOLOGRAM_SIDE_TOP_IMAGES_ABSENT", _[_.HOLOGRAM_ELEMENT_PRESENT = 102] = "HOLOGRAM_ELEMENT_PRESENT", _[_.HOLOGRAM_FRAMES_IS_ABSENT = 103] = "HOLOGRAM_FRAMES_IS_ABSENT", _[_.HOLOGRAM_HOLO_FIELD_IS_ABSENT = 104] = "HOLOGRAM_HOLO_FIELD_IS_ABSENT", _[_.PHOTO_PATTERN_INTERRUPTED = 110] = "PHOTO_PATTERN_INTERRUPTED", _[_.PHOTO_PATTERN_SHIFTED = 111] = "PHOTO_PATTERN_SHIFTED", _[_.PHOTO_PATTERN_DIFFERENT_COLORS = 112] = "PHOTO_PATTERN_DIFFERENT_COLORS", _[_.PHOTO_PATTERN_IR_VISIBLE = 113] = "PHOTO_PATTERN_IR_VISIBLE", _[_.PHOTO_PATTERN_NOT_INTERSECT = 114] = "PHOTO_PATTERN_NOT_INTERSECT", _[_.PHOTO_SIZE_IS_WRONG = 115] = "PHOTO_SIZE_IS_WRONG", _[_.PHOTO_PATTERN_INVALID_COLOR = 116] = "PHOTO_PATTERN_INVALID_COLOR", _[_.PHOTO_PATTERN_SHIFTED_VERT = 117] = "PHOTO_PATTERN_SHIFTED_VERT", _[_.PHOTO_PATTERN_PATTERN_NOT_FOUND = 118] = "PHOTO_PATTERN_PATTERN_NOT_FOUND", _[_.PHOTO_PATTERN_DIFFERENT_LINES_THICKNESS = 119] = "PHOTO_PATTERN_DIFFERENT_LINES_THICKNESS", _[_.PHOTO_IS_NOT_RECTANGLE = 120] = "PHOTO_IS_NOT_RECTANGLE", _[_.PHOTO_CORNERS_IS_WRONG = 121] = "PHOTO_CORNERS_IS_WRONG", _[_.DOCUMENT_IS_CANCELLING = 122] = "DOCUMENT_IS_CANCELLING", _[_.TEXT_COLOR_SHOULD_BE_BLUE = 130] = "TEXT_COLOR_SHOULD_BE_BLUE", _[_.TEXT_COLOR_SHOULD_BE_GREEN = 131] = "TEXT_COLOR_SHOULD_BE_GREEN", _[_.TEXT_COLOR_SHOULD_BE_RED = 132] = "TEXT_COLOR_SHOULD_BE_RED", _[_.TEXT_SHOULD_BE_BLACK = 133] = "TEXT_SHOULD_BE_BLACK", _[_.BARCODE_WAS_READ_WITH_ERRORS = 140] = "BARCODE_WAS_READ_WITH_ERRORS", _[_.BARCODE_DATA_FORMAT_ERROR = 141] = "BARCODE_DATA_FORMAT_ERROR", _[_.BARCODE_SIZE_PARAMS_ERROR = 142] = "BARCODE_SIZE_PARAMS_ERROR", _[_.NOT_ALL_BARCODES_READ = 143] = "NOT_ALL_BARCODES_READ", _[_.GLARES_IN_BARCODE_AREA = 144] = "GLARES_IN_BARCODE_AREA", _[_.PORTRAIT_COMPARISON_PORTRAITS_DIFFER = 150] = "PORTRAIT_COMPARISON_PORTRAITS_DIFFER", _[_.PORTRAIT_COMPARISON_NO_SERVICE_REPLY = 151] = "PORTRAIT_COMPARISON_NO_SERVICE_REPLY", _[_.PORTRAIT_COMPARISON_SERVICE_ERROR = 152] = "PORTRAIT_COMPARISON_SERVICE_ERROR", _[_.PORTRAIT_COMPARISON_NOT_ENOUGH_IMAGES = 153] = "PORTRAIT_COMPARISON_NOT_ENOUGH_IMAGES", _[_.PORTRAIT_COMPARISON_NO_LIVE_PHOTO = 154] = "PORTRAIT_COMPARISON_NO_LIVE_PHOTO", _[_.PORTRAIT_COMPARISON_NO_SERVICE_LICENSE = 155] = "PORTRAIT_COMPARISON_NO_SERVICE_LICENSE", _[_.PORTRAIT_COMPARISON_NO_PORTRAIT_DETECTED = 156] = "PORTRAIT_COMPARISON_NO_PORTRAIT_DETECTED", _[_.MOBILE_IMAGES_UNSUITABLE_LIGHT_CONDITIONS = 160] = "MOBILE_IMAGES_UNSUITABLE_LIGHT_CONDITIONS", _[_.MOBILE_IMAGES_WHITE_UV_NO_DIFFERENCE = 161] = "MOBILE_IMAGES_WHITE_UV_NO_DIFFERENCE", _[_.FINGERPRINTS_COMPARISON_MISMATCH = 170] = "FINGERPRINTS_COMPARISON_MISMATCH", _[_.HOLO_PHOTO_FACE_NOT_DETECTED = 180] = "HOLO_PHOTO_FACE_NOT_DETECTED", _[_.HOLO_PHOTO_FACE_COMPARISON_FAILED = 181] = "HOLO_PHOTO_FACE_COMPARISON_FAILED", _[_.HOLO_PHOTO_GLARE_IN_CENTER_ABSENT = 182] = "HOLO_PHOTO_GLARE_IN_CENTER_ABSENT", _[_.HOLO_PHOTO_HOLO_ELEMENT_SHAPE_ERROR = 183] = "HOLO_PHOTO_HOLO_ELEMENT_SHAPE_ERROR", _[_.HOLO_PHOTO_ALGORITHMS_STEPS_ERROR = 184] = "HOLO_PHOTO_ALGORITHMS_STEPS_ERROR", _[_.HOLO_PHOTO_HOLO_AREAS_NOT_LOADED = 185] = "HOLO_PHOTO_HOLO_AREAS_NOT_LOADED", _[_.HOLO_PHOTO_FINISHED_BY_TIMEOUT = 186] = "HOLO_PHOTO_FINISHED_BY_TIMEOUT", _[_.HOLO_PHOTO_DOCUMENT_OUTSIDE_FRAME = 187] = "HOLO_PHOTO_DOCUMENT_OUTSIDE_FRAME", _[_.LIVENESS_DEPTH_CHECK_FAILED = 190] = "LIVENESS_DEPTH_CHECK_FAILED", _[_.LIVENESS_SCREEN_CAPTURE_DETECTED = 191] = "LIVENESS_SCREEN_CAPTURE_DETECTED", _[_.LIVENESS_ELECTRONIC_DEVICE_DETECTED = 192] = "LIVENESS_ELECTRONIC_DEVICE_DETECTED", _[_.MRZ_QUALITY_WRONG_SYMBOL_POSITION = 200] = "MRZ_QUALITY_WRONG_SYMBOL_POSITION", _[_.MRZ_QUALITY_WRONG_BACKGROUND = 201] = "MRZ_QUALITY_WRONG_BACKGROUND", _[_.MRZ_QUALITY_WRONG_MRZ_WIDTH = 202] = "MRZ_QUALITY_WRONG_MRZ_WIDTH", _[_.MRZ_QUALITY_WRONG_MRZ_HEIGHT = 203] = "MRZ_QUALITY_WRONG_MRZ_HEIGHT", _[_.MRZ_QUALITY_WRONG_LINE_POSITION = 204] = "MRZ_QUALITY_WRONG_LINE_POSITION", _[_.MRZ_QUALITY_WRONG_FONT_TYPE = 205] = "MRZ_QUALITY_WRONG_FONT_TYPE", _[_.OCR_QUALITY_TEXT_POSITION = 220] = "OCR_QUALITY_TEXT_POSITION", _[_.OCR_QUALITY_INVALID_FONT = 221] = "OCR_QUALITY_INVALID_FONT", _[_.OCR_QUALITY_INVALID_BACKGROUND = 222] = "OCR_QUALITY_INVALID_BACKGROUND", _[_.LASINK_INVALID_LINES_FREQUENCY = 230] = "LASINK_INVALID_LINES_FREQUENCY", _[_.DOC_LIVENESS_ELECTRONIC_DEVICE_DETECTED = 240] = "DOC_LIVENESS_ELECTRONIC_DEVICE_DETECTED", _[_.DOC_LIVENESS_INVALID_BARCODE_BACKGROUND = 241] = "DOC_LIVENESS_INVALID_BARCODE_BACKGROUND", _[_.LAST_DIAGNOSE_VALUE = 250] = "LAST_DIAGNOSE_VALUE", _))(cI || {}), p = /* @__PURE__ */ ((_) => (_[_.ERROR = 0] = "ERROR", _[_.OK = 1] = "OK", _[_.WAS_NOT_DONE = 2] = "WAS_NOT_DONE", _))(p || {}), iI = /* @__PURE__ */ ((_) => (_[_.UNKNOWN = -1] = "UNKNOWN", _[_.ID1 = 0] = "ID1", _[_.ID2 = 1] = "ID2", _[_.ID3 = 2] = "ID3", _[_.NON = 3] = "NON", _[_.A4 = 4] = "A4", _[_.ID3_X2 = 5] = "ID3_X2", _[_.ID1_90 = 10] = "ID1_90", _[_.ID1_180 = 11] = "ID1_180", _[_.ID1_270 = 12] = "ID1_270", _[_.ID2_180 = 13] = "ID2_180", _[_.ID3_180 = 14] = "ID3_180", _[_.CUSTOM = 1e3] = "CUSTOM", _[_.FLEXIBLE = 1002] = "FLEXIBLE", _))(iI || {}), ER = /* @__PURE__ */ ((_) => (_[_.NOT_DEFINED = 0] = "NOT_DEFINED", _[_.PASSPORT = 11] = "PASSPORT", _[_.IDENTITY_CARD = 12] = "IDENTITY_CARD", _[_.DIPLOMATIC_PASSPORT = 13] = "DIPLOMATIC_PASSPORT", _[_.SERVICE_PASSPORT = 14] = "SERVICE_PASSPORT", _[_.SEAMANS_IDENTITY_DOCUMENT = 15] = "SEAMANS_IDENTITY_DOCUMENT", _[_.IDENTITY_CARD_FOR_RESIDENCE = 16] = "IDENTITY_CARD_FOR_RESIDENCE", _[_.TRAVEL_DOCUMENT = 17] = "TRAVEL_DOCUMENT", _[_.NATIONAL_IDENTITY_CARD = 20] = "NATIONAL_IDENTITY_CARD", _[_.SOCIAL_IDENTITY_CARD = 21] = "SOCIAL_IDENTITY_CARD", _[_.ALIENS_IDENTITY_CARD = 22] = "ALIENS_IDENTITY_CARD", _[_.PRIVILEGED_IDENTITY_CARD = 23] = "PRIVILEGED_IDENTITY_CARD", _[_.RESIDENCE_PERMIT_IDENTITY_CARD = 24] = "RESIDENCE_PERMIT_IDENTITY_CARD", _[_.ORIGIN_CARD = 25] = "ORIGIN_CARD", _[_.EMERGENCY_PASSPORT = 26] = "EMERGENCY_PASSPORT", _[_.ALIENS_PASSPORT = 27] = "ALIENS_PASSPORT", _[_.ALTERNATIVE_IDENTITY_CARD = 28] = "ALTERNATIVE_IDENTITY_CARD", _[_.VISA_ID2 = 29] = "VISA_ID2", _[_.VISA_ID3 = 30] = "VISA_ID3", _[_.AUTHORIZATION_CARD = 32] = "AUTHORIZATION_CARD", _[_.BEGINNER_PERMIT = 33] = "BEGINNER_PERMIT", _[_.BORDER_CROSSING_CARD = 34] = "BORDER_CROSSING_CARD", _[_.CHAUFFEUR_LICENSE = 35] = "CHAUFFEUR_LICENSE", _[_.CHAUFFEUR_LICENSE_UNDER_18 = 36] = "CHAUFFEUR_LICENSE_UNDER_18", _[_.CHAUFFEUR_LICENSE_UNDER_21 = 37] = "CHAUFFEUR_LICENSE_UNDER_21", _[_.COMMERCIAL_DRIVING_LICENSE = 38] = "COMMERCIAL_DRIVING_LICENSE", _[_.COMMERCIAL_DRIVING_LICENSE_INSTRUCTIONAL_PERMIT = 39] = "COMMERCIAL_DRIVING_LICENSE_INSTRUCTIONAL_PERMIT", _[_.COMMERCIAL_DRIVING_LICENSE_UNDER_18 = 40] = "COMMERCIAL_DRIVING_LICENSE_UNDER_18", _[_.COMMERCIAL_DRIVING_LICENSE_UNDER_21 = 41] = "COMMERCIAL_DRIVING_LICENSE_UNDER_21", _[_.COMMERCIAL_INSTRUCTION_PERMIT = 42] = "COMMERCIAL_INSTRUCTION_PERMIT", _[_.COMMERCIAL_NEW_PERMIT = 43] = "COMMERCIAL_NEW_PERMIT", _[_.CONCEALED_CARRY_LICENSE = 44] = "CONCEALED_CARRY_LICENSE", _[_.CONCEALED_FIREARM_PERMIT = 45] = "CONCEALED_FIREARM_PERMIT", _[_.CONDITIONAL_DRIVING_LICENSE = 46] = "CONDITIONAL_DRIVING_LICENSE", _[_.DEPARTMENT_OF_VETERANS_AFFAIRS_IDENTITY_CARD = 47] = "DEPARTMENT_OF_VETERANS_AFFAIRS_IDENTITY_CARD", _[_.DIPLOMATIC_DRIVING_LICENSE = 48] = "DIPLOMATIC_DRIVING_LICENSE", _[_.DRIVING_LICENSE = 49] = "DRIVING_LICENSE", _[_.DRIVING_LICENSE_INSTRUCTIONAL_PERMIT = 50] = "DRIVING_LICENSE_INSTRUCTIONAL_PERMIT", _[_.DRIVING_LICENSE_INSTRUCTIONAL_PERMIT_UNDER_18 = 51] = "DRIVING_LICENSE_INSTRUCTIONAL_PERMIT_UNDER_18", _[_.DRIVING_LICENSE_INSTRUCTIONAL_PERMIT_UNDER_21 = 52] = "DRIVING_LICENSE_INSTRUCTIONAL_PERMIT_UNDER_21", _[_.DRIVING_LICENSE_LEARNERS_PERMIT = 53] = "DRIVING_LICENSE_LEARNERS_PERMIT", _[_.DRIVING_LICENSE_LEARNERS_PERMIT_UNDER_18 = 54] = "DRIVING_LICENSE_LEARNERS_PERMIT_UNDER_18", _[_.DRIVING_LICENSE_LEARNERS_PERMIT_UNDER_21 = 55] = "DRIVING_LICENSE_LEARNERS_PERMIT_UNDER_21", _[_.DRIVING_LICENSE_NOVICE = 56] = "DRIVING_LICENSE_NOVICE", _[_.DRIVING_LICENSE_NOVICE_UNDER_18 = 57] = "DRIVING_LICENSE_NOVICE_UNDER_18", _[_.DRIVING_LICENSE_NOVICE_UNDER_21 = 58] = "DRIVING_LICENSE_NOVICE_UNDER_21", _[_.DRIVING_LICENSE_REGISTERED_OFFENDER = 59] = "DRIVING_LICENSE_REGISTERED_OFFENDER", _[_.DRIVING_LICENSE_RESTRICTED_UNDER_18 = 60] = "DRIVING_LICENSE_RESTRICTED_UNDER_18", _[_.DRIVING_LICENSE_RESTRICTED_UNDER_21 = 61] = "DRIVING_LICENSE_RESTRICTED_UNDER_21", _[_.DRIVING_LICENSE_TEMPORARY_VISITOR = 62] = "DRIVING_LICENSE_TEMPORARY_VISITOR", _[_.DRIVING_LICENSE_TEMPORARY_VISITOR_UNDER_18 = 63] = "DRIVING_LICENSE_TEMPORARY_VISITOR_UNDER_18", _[_.DRIVING_LICENSE_TEMPORARY_VISITOR_UNDER_21 = 64] = "DRIVING_LICENSE_TEMPORARY_VISITOR_UNDER_21", _[_.DRIVING_LICENSE_UNDER_18 = 65] = "DRIVING_LICENSE_UNDER_18", _[_.DRIVING_LICENSE_UNDER_21 = 66] = "DRIVING_LICENSE_UNDER_21", _[_.EMPLOYMENT_DRIVING_PERMIT = 67] = "EMPLOYMENT_DRIVING_PERMIT", _[_.ENHANCED_CHAUFFEUR_LICENSE = 68] = "ENHANCED_CHAUFFEUR_LICENSE", _[_.ENHANCED_CHAUFFEUR_LICENSE_UNDER_18 = 69] = "ENHANCED_CHAUFFEUR_LICENSE_UNDER_18", _[_.ENHANCED_CHAUFFEUR_LICENSE_UNDER_21 = 70] = "ENHANCED_CHAUFFEUR_LICENSE_UNDER_21", _[_.ENHANCED_COMMERCIAL_DRIVING_LICENSE = 71] = "ENHANCED_COMMERCIAL_DRIVING_LICENSE", _[_.ENHANCED_DRIVING_LICENSE = 72] = "ENHANCED_DRIVING_LICENSE", _[_.ENHANCED_DRIVING_LICENSE_UNDER_18 = 73] = "ENHANCED_DRIVING_LICENSE_UNDER_18", _[_.ENHANCED_DRIVING_LICENSE_UNDER_21 = 74] = "ENHANCED_DRIVING_LICENSE_UNDER_21", _[_.ENHANCED_IDENTITY_CARD = 75] = "ENHANCED_IDENTITY_CARD", _[_.ENHANCED_IDENTITY_CARD_UNDER_18 = 76] = "ENHANCED_IDENTITY_CARD_UNDER_18", _[_.ENHANCED_IDENTITY_CARD_UNDER_21 = 77] = "ENHANCED_IDENTITY_CARD_UNDER_21", _[_.ENHANCED_OPERATORS_LICENSE = 78] = "ENHANCED_OPERATORS_LICENSE", _[_.FIREARMS_PERMIT = 79] = "FIREARMS_PERMIT", _[_.FULL_PROVISIONAL_LICENSE = 80] = "FULL_PROVISIONAL_LICENSE", _[_.FULL_PROVISIONAL_LICENSE_UNDER_18 = 81] = "FULL_PROVISIONAL_LICENSE_UNDER_18", _[_.FULL_PROVISIONAL_LICENSE_UNDER_21 = 82] = "FULL_PROVISIONAL_LICENSE_UNDER_21", _[_.GENEVA_CONVENTIONS_IDENTITY_CARD = 83] = "GENEVA_CONVENTIONS_IDENTITY_CARD", _[_.GRADUATED_DRIVING_LICENSE_UNDER_18 = 84] = "GRADUATED_DRIVING_LICENSE_UNDER_18", _[_.GRADUATED_DRIVING_LICENSE_UNDER_21 = 85] = "GRADUATED_DRIVING_LICENSE_UNDER_21", _[_.GRADUATED_INSTRUCTION_PERMIT_UNDER_18 = 86] = "GRADUATED_INSTRUCTION_PERMIT_UNDER_18", _[_.GRADUATED_INSTRUCTION_PERMIT_UNDER_21 = 87] = "GRADUATED_INSTRUCTION_PERMIT_UNDER_21", _[_.GRADUATED_LICENSE_UNDER_18 = 88] = "GRADUATED_LICENSE_UNDER_18", _[_.GRADUATED_LICENSE_UNDER_21 = 89] = "GRADUATED_LICENSE_UNDER_21", _[_.HANDGUN_CARRY_PERMIT = 90] = "HANDGUN_CARRY_PERMIT", _[_.IDENTITY_AND_PRIVILEGE_CARD = 91] = "IDENTITY_AND_PRIVILEGE_CARD", _[_.IDENTITY_CARD_MOBILITY_IMPAIRED = 92] = "IDENTITY_CARD_MOBILITY_IMPAIRED", _[_.IDENTITY_CARD_REGISTERED_OFFENDER = 93] = "IDENTITY_CARD_REGISTERED_OFFENDER", _[_.IDENTITY_CARD_TEMPORARY_VISITOR = 94] = "IDENTITY_CARD_TEMPORARY_VISITOR", _[_.IDENTITY_CARD_TEMPORARY_VISITOR_UNDER_18 = 95] = "IDENTITY_CARD_TEMPORARY_VISITOR_UNDER_18", _[_.IDENTITY_CARD_TEMPORARY_VISITOR_UNDER_21 = 96] = "IDENTITY_CARD_TEMPORARY_VISITOR_UNDER_21", _[_.IDENTITY_CARD_UNDER_18 = 97] = "IDENTITY_CARD_UNDER_18", _[_.IDENTITY_CARD_UNDER_21 = 98] = "IDENTITY_CARD_UNDER_21", _[_.OTHER = 99] = "OTHER", _[_.IGNITION_INTERLOCK_PERMIT = 100] = "IGNITION_INTERLOCK_PERMIT", _[_.IMMIGRANT_VISA = 101] = "IMMIGRANT_VISA", _[_.INSTRUCTION_PERMIT = 102] = "INSTRUCTION_PERMIT", _[_.INSTRUCTION_PERMIT_UNDER_18 = 103] = "INSTRUCTION_PERMIT_UNDER_18", _[_.INSTRUCTION_PERMIT_UNDER_21 = 104] = "INSTRUCTION_PERMIT_UNDER_21", _[_.INTERIM_DRIVING_LICENSE = 105] = "INTERIM_DRIVING_LICENSE", _[_.INTERIM_IDENTITY_CARD = 106] = "INTERIM_IDENTITY_CARD", _[_.INTERMEDIATE_DRIVING_LICENSE = 107] = "INTERMEDIATE_DRIVING_LICENSE", _[_.INTERMEDIATE_DRIVING_LICENSE_UNDER_18 = 108] = "INTERMEDIATE_DRIVING_LICENSE_UNDER_18", _[_.INTERMEDIATE_DRIVING_LICENSE_UNDER_21 = 109] = "INTERMEDIATE_DRIVING_LICENSE_UNDER_21", _[_.JUNIOR_DRIVING_LICENSE = 110] = "JUNIOR_DRIVING_LICENSE", _[_.LEARNER_INSTRUCTIONAL_PERMIT = 111] = "LEARNER_INSTRUCTIONAL_PERMIT", _[_.LEARNER_LICENSE = 112] = "LEARNER_LICENSE", _[_.LEARNER_LICENSE_UNDER_18 = 113] = "LEARNER_LICENSE_UNDER_18", _[_.LEARNER_LICENSE_UNDER_21 = 114] = "LEARNER_LICENSE_UNDER_21", _[_.LEARNER_PERMIT = 115] = "LEARNER_PERMIT", _[_.LEARNER_PERMIT_UNDER_18 = 116] = "LEARNER_PERMIT_UNDER_18", _[_.LEARNER_PERMIT_UNDER_21 = 117] = "LEARNER_PERMIT_UNDER_21", _[_.LIMITED_LICENSE = 118] = "LIMITED_LICENSE", _[_.LIMITED_PERMIT = 119] = "LIMITED_PERMIT", _[_.LIMITED_TERM_DRIVING_LICENSE = 120] = "LIMITED_TERM_DRIVING_LICENSE", _[_.LIMITED_TERM_IDENTITY_CARD = 121] = "LIMITED_TERM_IDENTITY_CARD", _[_.LIQUOR_IDENTITY_CARD = 122] = "LIQUOR_IDENTITY_CARD", _[_.NEW_PERMIT = 123] = "NEW_PERMIT", _[_.NEW_PERMIT_UNDER_18 = 124] = "NEW_PERMIT_UNDER_18", _[_.NEW_PERMIT_UNDER_21 = 125] = "NEW_PERMIT_UNDER_21", _[_.NON_US_CITIZEN_DRIVING_LICENSE = 126] = "NON_US_CITIZEN_DRIVING_LICENSE", _[_.OCCUPATIONAL_DRIVING_LICENSE = 127] = "OCCUPATIONAL_DRIVING_LICENSE", _[_.ONEIDA_TRIBE_OF_INDIANS_IDENTITY_CARD = 128] = "ONEIDA_TRIBE_OF_INDIANS_IDENTITY_CARD", _[_.OPERATOR_LICENSE = 129] = "OPERATOR_LICENSE", _[_.OPERATOR_LICENSE_UNDER_18 = 130] = "OPERATOR_LICENSE_UNDER_18", _[_.OPERATOR_LICENSE_UNDER_21 = 131] = "OPERATOR_LICENSE_UNDER_21", _[_.PERMANENT_DRIVING_LICENSE = 132] = "PERMANENT_DRIVING_LICENSE", _[_.PERMIT_TO_REENTER = 133] = "PERMIT_TO_REENTER", _[_.PROBATIONARY_AUTO_LICENSE = 134] = "PROBATIONARY_AUTO_LICENSE", _[_.PROBATIONARY_DRIVING_LICENSE_UNDER_18 = 135] = "PROBATIONARY_DRIVING_LICENSE_UNDER_18", _[_.PROBATIONARY_DRIVING_LICENSE_UNDER_21 = 136] = "PROBATIONARY_DRIVING_LICENSE_UNDER_21", _[_.PROBATIONARY_VEHICLE_SALES_PERSON_LICENSE = 137] = "PROBATIONARY_VEHICLE_SALES_PERSON_LICENSE", _[_.PROVISIONAL_DRIVING_LICENSE = 138] = "PROVISIONAL_DRIVING_LICENSE", _[_.PROVISIONAL_DRIVING_LICENSE_UNDER_18 = 139] = "PROVISIONAL_DRIVING_LICENSE_UNDER_18", _[_.PROVISIONAL_DRIVING_LICENSE_UNDER_21 = 140] = "PROVISIONAL_DRIVING_LICENSE_UNDER_21", _[_.PROVISIONAL_LICENSE = 141] = "PROVISIONAL_LICENSE", _[_.PROVISIONAL_LICENSE_UNDER_18 = 142] = "PROVISIONAL_LICENSE_UNDER_18", _[_.PROVISIONAL_LICENSE_UNDER_21 = 143] = "PROVISIONAL_LICENSE_UNDER_21", _[_.PUBLIC_PASSENGER_CHAUFFEUR_LICENSE = 144] = "PUBLIC_PASSENGER_CHAUFFEUR_LICENSE", _[_.RACING_AND_GAMING_COMISSION_CARD = 145] = "RACING_AND_GAMING_COMISSION_CARD", _[_.REFUGEE_TRAVEL_DOCUMENT = 146] = "REFUGEE_TRAVEL_DOCUMENT", _[_.RENEWAL_PERMIT = 147] = "RENEWAL_PERMIT", _[_.RESTRICTED_COMMERCIAL_DRIVER_LICENSE = 148] = "RESTRICTED_COMMERCIAL_DRIVER_LICENSE", _[_.RESTRICTED_DRIVER_LICENSE = 149] = "RESTRICTED_DRIVER_LICENSE", _[_.RESTRICTED_PERMIT = 150] = "RESTRICTED_PERMIT", _[_.SEASONAL_PERMIT = 151] = "SEASONAL_PERMIT", _[_.SEASONAL_RESIDENT_IDENTITY_CARD = 152] = "SEASONAL_RESIDENT_IDENTITY_CARD", _[_.SEASONAL_CITIZEN_IDENTITY_CARD = 153] = "SEASONAL_CITIZEN_IDENTITY_CARD", _[_.SEX_OFFENDER = 154] = "SEX_OFFENDER", _[_.SOCIAL_SECURITY_CARD = 155] = "SOCIAL_SECURITY_CARD", _[_.TEMPORARY_DRIVING_LICENSE = 156] = "TEMPORARY_DRIVING_LICENSE", _[_.TEMPORARY_DRIVING_LICENSE_UNDER_18 = 157] = "TEMPORARY_DRIVING_LICENSE_UNDER_18", _[_.TEMPORARY_DRIVING_LICENSE_UNDER_21 = 158] = "TEMPORARY_DRIVING_LICENSE_UNDER_21", _[_.TEMPORARY_IDENTITY_CARD = 159] = "TEMPORARY_IDENTITY_CARD", _[_.TEMPORARY_INSTRUCTION_PERMIT_IDENTITY_CARD = 160] = "TEMPORARY_INSTRUCTION_PERMIT_IDENTITY_CARD", _[_.TEMPORARY_INSTRUCTION_PERMIT_IDENTITY_CARD_UNDER_18 = 161] = "TEMPORARY_INSTRUCTION_PERMIT_IDENTITY_CARD_UNDER_18", _[_.TEMPORARY_INSTRUCTION_PERMIT_IDENTITY_CARD_UNDER_21 = 162] = "TEMPORARY_INSTRUCTION_PERMIT_IDENTITY_CARD_UNDER_21", _[_.TEMPORARY_VISITOR_DRIVING_LICENSE = 163] = "TEMPORARY_VISITOR_DRIVING_LICENSE", _[_.TEMPORARY_VISITOR_DRIVING_LICENSE_UNDER_18 = 164] = "TEMPORARY_VISITOR_DRIVING_LICENSE_UNDER_18", _[_.TEMPORARY_VISITOR_DRIVING_LICENSE_UNDER_21 = 165] = "TEMPORARY_VISITOR_DRIVING_LICENSE_UNDER_21", _[_.UNIFORMED_SERVICES_IDENTITY_CARD = 166] = "UNIFORMED_SERVICES_IDENTITY_CARD", _[_.VEHICLE_SALES_PERSON_LICENSE = 167] = "VEHICLE_SALES_PERSON_LICENSE", _[_.WORKER_IDENTIFICATION_CREDENTIAL = 168] = "WORKER_IDENTIFICATION_CREDENTIAL", _[_.COMMERCIAL_DRIVING_LICENSE_NOVICE = 169] = "COMMERCIAL_DRIVING_LICENSE_NOVICE", _[_.COMMERCIAL_DRIVING_LICENSE_NOVICE_UNDER_18 = 170] = "COMMERCIAL_DRIVING_LICENSE_NOVICE_UNDER_18", _[_.COMMERCIAL_DRIVING_LICENSE_NOVICE_UNDER_21 = 171] = "COMMERCIAL_DRIVING_LICENSE_NOVICE_UNDER_21", _[_.PASSPORT_CARD = 172] = "PASSPORT_CARD", _[_.PASSPORT_RESIDENT_CARD = 173] = "PASSPORT_RESIDENT_CARD", _[_.PERSONAL_IDENTIFICATION_VERIFICATION = 174] = "PERSONAL_IDENTIFICATION_VERIFICATION", _[_.TEMPORARY_OPERATOR_LICENSE = 175] = "TEMPORARY_OPERATOR_LICENSE", _[_.DRIVING_LICENSE_UNDER_19 = 176] = "DRIVING_LICENSE_UNDER_19", _[_.IDENTITY_CARD_UNDER_19 = 177] = "IDENTITY_CARD_UNDER_19", _[_.VISA = 178] = "VISA", _[_.TEMPORARY_PASSPORT = 179] = "TEMPORARY_PASSPORT", _[_.VOTING_CARD = 180] = "VOTING_CARD", _[_.HEALTH_CARD = 181] = "HEALTH_CARD", _[_.CERTIFICATE_OF_CITIZENSHIP = 182] = "CERTIFICATE_OF_CITIZENSHIP", _[_.ADDRESS_CARD = 183] = "ADDRESS_CARD", _[_.AIRPORT_IMMIGRATION_CARD = 184] = "AIRPORT_IMMIGRATION_CARD", _[_.ALIEN_REGISTRATION_CARD = 185] = "ALIEN_REGISTRATION_CARD", _[_.APEH_CARD = 186] = "APEH_CARD", _[_.COUPON_TO_DRIVING_LICENSE = 187] = "COUPON_TO_DRIVING_LICENSE", _[_.CREW_MEMBER_CERTIFICATE = 188] = "CREW_MEMBER_CERTIFICATE", _[_.DOCUMENT_FOR_RETURN = 189] = "DOCUMENT_FOR_RETURN", _[_.E_CARD = 190] = "E_CARD", _[_.EMPLOYMENT_CARD = 191] = "EMPLOYMENT_CARD", _[_.HKSAR_IMMIGRATION_FORM = 192] = "HKSAR_IMMIGRATION_FORM", _[_.IMMIGRANT_CARD = 193] = "IMMIGRANT_CARD", _[_.LABOUR_CARD = 194] = "LABOUR_CARD", _[_.LAISSEZ_PASSER = 195] = "LAISSEZ_PASSER", _[_.LAWYER_IDENTITY_CERTIFICATE = 196] = "LAWYER_IDENTITY_CERTIFICATE", _[_.LICENSE_CARD = 197] = "LICENSE_CARD", _[_.PASSPORT_STATELESS = 198] = "PASSPORT_STATELESS", _[_.PASSPORT_CHILD = 199] = "PASSPORT_CHILD", _[_.PASSPORT_CONSULAR = 200] = "PASSPORT_CONSULAR", _[_.PASSPORT_DIPLOMATIC_SERVICE = 201] = "PASSPORT_DIPLOMATIC_SERVICE", _[_.PASSPORT_OFFICIAL = 202] = "PASSPORT_OFFICIAL", _[_.PASSPORT_PROVISIONAL = 203] = "PASSPORT_PROVISIONAL", _[_.PASSPORT_SPECIAL = 204] = "PASSPORT_SPECIAL", _[_.PERMISSION_TO_THE_LOCAL_BORDER_TRAFFIC = 205] = "PERMISSION_TO_THE_LOCAL_BORDER_TRAFFIC", _[_.REGISTRATION_CERTIFICATE = 206] = "REGISTRATION_CERTIFICATE", _[_.SEDESOL_CARD = 207] = "SEDESOL_CARD", _[_.SOCIAL_CARD = 208] = "SOCIAL_CARD", _[_.TB_CARD = 209] = "TB_CARD", _[_.VEHICLE_PASSPORT = 210] = "VEHICLE_PASSPORT", _[_.W_DOCUMENT = 211] = "W_DOCUMENT", _[_.DIPLOMATIC_IDENTITY_CARD = 212] = "DIPLOMATIC_IDENTITY_CARD", _[_.CONSULAR_IDENTITY_CARD = 213] = "CONSULAR_IDENTITY_CARD", _[_.INCOME_TAX_CARD = 214] = "INCOME_TAX_CARD", _[_.RESIDENCE_PERMIT = 215] = "RESIDENCE_PERMIT", _[_.DOCUMENT_OF_IDENTITY = 216] = "DOCUMENT_OF_IDENTITY", _[_.BORDER_CROSSING_PERMIT = 217] = "BORDER_CROSSING_PERMIT", _[_.PASSPORT_LIMITED_VALIDITY = 218] = "PASSPORT_LIMITED_VALIDITY", _[_.SIM_CARD = 219] = "SIM_CARD", _[_.TAX_CARD = 220] = "TAX_CARD", _[_.COMPANY_CARD = 221] = "COMPANY_CARD", _[_.DOMESTIC_PASSPORT = 222] = "DOMESTIC_PASSPORT", _[_.IDENTITY_CERTIFICATE = 223] = "IDENTITY_CERTIFICATE", _[_.RESIDENT_ID_CARD = 224] = "RESIDENT_ID_CARD", _[_.ARMED_FORCES_IDENTITY_CARD = 225] = "ARMED_FORCES_IDENTITY_CARD", _[_.PROFESSIONAL_CARD = 226] = "PROFESSIONAL_CARD", _[_.REGISTRATION_STAMP = 227] = "REGISTRATION_STAMP", _[_.DRIVER_CARD = 228] = "DRIVER_CARD", _[_.DRIVER_TRAINING_CERTIFICATE = 229] = "DRIVER_TRAINING_CERTIFICATE", _[_.QUALIFICATION_DRIVING_LICENSE = 230] = "QUALIFICATION_DRIVING_LICENSE", _[_.MEMBERSHIP_CARD = 231] = "MEMBERSHIP_CARD", _[_.PUBLIC_VEHICLE_DRIVER_AUTHORITY_CARD = 232] = "PUBLIC_VEHICLE_DRIVER_AUTHORITY_CARD", _[_.MARINE_LICENSE = 233] = "MARINE_LICENSE", _[_.TEMPORARY_LEARNER_LICENSE = 234] = "TEMPORARY_LEARNER_LICENSE", _[_.TEMPORARY_COMMERCIAL_DRIVING_LICENSE = 235] = "TEMPORARY_COMMERCIAL_DRIVING_LICENSE", _[_.INTERIM_INSTRUCTIONAL_PERMIT = 236] = "INTERIM_INSTRUCTIONAL_PERMIT", _[_.CERTIFICATE_OF_COMPETENCY = 237] = "CERTIFICATE_OF_COMPETENCY", _[_.CERTIFICATE_OF_PROFICIENCY = 238] = "CERTIFICATE_OF_PROFICIENCY", _[_.TRADE_LICENSE = 239] = "TRADE_LICENSE", _[_.PASSPORT_PAGE = 240] = "PASSPORT_PAGE", _[_.INVOICE = 241] = "INVOICE", _[_.PASSENGER_LOCATOR_FORM = 242] = "PASSENGER_LOCATOR_FORM", _))(ER || {}), _A = /* @__PURE__ */ ((_) => (_[_.DISABLED = 0] = "DISABLED", _[_.VERIFIED = 1] = "VERIFIED", _[_.NOT_VERIFIED = 2] = "NOT_VERIFIED", _[_.COMPARE_TRUE = 3] = "COMPARE_TRUE", _[_.COMPARE_FALSE = 4] = "COMPARE_FALSE", _))(_A || {}), LO = /* @__PURE__ */ ((_) => (_[_.PORTRAIT = 201] = "PORTRAIT", _[_.FINGERPRINT = 202] = "FINGERPRINT", _[_.EYE = 203] = "EYE", _[_.SIGNATURE = 204] = "SIGNATURE", _[_.BAR_CODE = 205] = "BAR_CODE", _[_.PROOF_OF_CITIZENSHIP = 206] = "PROOF_OF_CITIZENSHIP", _[_.DOCUMENT_FRONT = 207] = "DOCUMENT_FRONT", _[_.DOCUMENT_REAR = 208] = "DOCUMENT_REAR", _[_.COLOR_DYNAMIC = 209] = "COLOR_DYNAMIC", _[_.GHOST_PORTRAIT = 210] = "GHOST_PORTRAIT", _[_.STAMP = 211] = "STAMP", _[_.OTHER = 250] = "OTHER", _[_.FINGER_LEFT_THUMB = 300] = "FINGER_LEFT_THUMB", _[_.FINGER_LEFT_INDEX = 301] = "FINGER_LEFT_INDEX", _[_.FINGER_LEFT_MIDDLE = 302] = "FINGER_LEFT_MIDDLE", _[_.FINGER_LEFT_RING = 303] = "FINGER_LEFT_RING", _[_.FINGER_LEFT_LITTLE = 304] = "FINGER_LEFT_LITTLE", _[_.FINGER_RIGHT_THUMB = 305] = "FINGER_RIGHT_THUMB", _[_.FINGER_RIGHT_INDEX = 306] = "FINGER_RIGHT_INDEX", _[_.FINGER_RIGHT_MIDDLE = 307] = "FINGER_RIGHT_MIDDLE", _[_.FINGER_RIGHT_RING = 308] = "FINGER_RIGHT_RING", _[_.FINGER_RIGHT_LITTLE = 309] = "FINGER_RIGHT_LITTLE", _[_.FINGER_RIGHT_FOUR_FINGERS = 313] = "FINGER_RIGHT_FOUR_FINGERS", _[_.FINGER_LEFT_FOUR_FINGERS = 314] = "FINGER_LEFT_FOUR_FINGERS", _[_.FINGER_TWO_THUMBS = 315] = "FINGER_TWO_THUMBS", _))(LO || {}), EA = /* @__PURE__ */ ((_) => (_[_.IMAGE_GLARES = 0] = "IMAGE_GLARES", _[_.IMAGE_FOCUS = 1] = "IMAGE_FOCUS", _[_.IMAGE_RESOLUTION = 2] = "IMAGE_RESOLUTION", _[_.IMAGE_COLORNESS = 3] = "IMAGE_COLORNESS", _[_.PERSPECTIVE = 4] = "PERSPECTIVE", _[_.BOUNDS = 5] = "BOUNDS", _[_.SCREEN_CAPTURE = 6] = "SCREEN_CAPTURE", _[_.PORTRAIT = 7] = "PORTRAIT", _[_.HANDWRITTEN = 8] = "HANDWRITTEN", _))(EA || {}), IA = /* @__PURE__ */ ((_) => (_[_.INVISIBLE = 0] = "INVISIBLE", _[_.VISIBLE = 1] = "VISIBLE", _[_.COLORED = 2] = "COLORED", _[_.GRAYSCALE = 4] = "GRAYSCALE", _[_.WHITE_IR_MATCHING = 8] = "WHITE_IR_MATCHING", _))(IA || {}), EE = /* @__PURE__ */ ((_) => (_[_.LATIN = 0] = "LATIN", _[_.AFRIKAANS = 1078] = "AFRIKAANS", _[_.ALBANIAN = 1052] = "ALBANIAN", _[_.ARABIC_ALGERIA = 5121] = "ARABIC_ALGERIA", _[_.ARABIC_BAHRAIN = 15361] = "ARABIC_BAHRAIN", _[_.ARABIC_EGYPT = 3073] = "ARABIC_EGYPT", _[_.ARABIC_IRAQ = 2049] = "ARABIC_IRAQ", _[_.ARABIC_JORDAN = 11265] = "ARABIC_JORDAN", _[_.ARABIC_KUWAIT = 13313] = "ARABIC_KUWAIT", _[_.ARABIC_LEBANON = 12289] = "ARABIC_LEBANON", _[_.ARABIC_LIBYA = 4097] = "ARABIC_LIBYA", _[_.ARABIC_MOROCCO = 6145] = "ARABIC_MOROCCO", _[_.ARABIC_OMAN = 8193] = "ARABIC_OMAN", _[_.ARABIC_QATAR = 16385] = "ARABIC_QATAR", _[_.ARABIC_SAUDI_ARABIA = 1025] = "ARABIC_SAUDI_ARABIA", _[_.ARABIC_SYRIA = 10241] = "ARABIC_SYRIA", _[_.ARABIC_TUNISIA = 7169] = "ARABIC_TUNISIA", _[_.ARABIC_UAE = 14337] = "ARABIC_UAE", _[_.ARABIC_YEMEN = 9217] = "ARABIC_YEMEN", _[_.ARABIC_ARMENIAN = 1067] = "ARABIC_ARMENIAN", _[_.AZERI_CYRILIC = 2092] = "AZERI_CYRILIC", _[_.AZERI_LATIN = 1068] = "AZERI_LATIN", _[_.BASQUE = 1069] = "BASQUE", _[_.BELARUSIAN = 1059] = "BELARUSIAN", _[_.BULGARIAN = 1026] = "BULGARIAN", _[_.BURMESE = 1109] = "BURMESE", _[_.CATALAN = 1027] = "CATALAN", _[_.CHINESE_HONGKONG_SAR = 3076] = "CHINESE_HONGKONG_SAR", _[_.CHINESE_MACAO_SAR = 5124] = "CHINESE_MACAO_SAR", _[_.CHINESE = 2052] = "CHINESE", _[_.CHINESE_SINGAPORE = 4100] = "CHINESE_SINGAPORE", _[_.CHINESE_TAIWAN = 1028] = "CHINESE_TAIWAN", _[_.CROATIAN = 1050] = "CROATIAN", _[_.CZECH = 1029] = "CZECH", _[_.DANISH = 1030] = "DANISH", _[_.DIVEHI = 1125] = "DIVEHI", _[_.DUTCH_BELGIUM = 2067] = "DUTCH_BELGIUM", _[_.DUTCH_NETHERLANDS = 1043] = "DUTCH_NETHERLANDS", _[_.ENGLISH_AUSTRALIA = 3081] = "ENGLISH_AUSTRALIA", _[_.ENGLISH_BELIZE = 10249] = "ENGLISH_BELIZE", _[_.ENGLISH_CANADA = 4105] = "ENGLISH_CANADA", _[_.ENGLISH_CARRIBEAN = 9225] = "ENGLISH_CARRIBEAN", _[_.ENGLISH_IRELAND = 6153] = "ENGLISH_IRELAND", _[_.ENGLISH_JAMAICA = 8201] = "ENGLISH_JAMAICA", _[_.ENGLISH_NEW_ZEALAND = 5129] = "ENGLISH_NEW_ZEALAND", _[_.ENGLISH_PHILIPPINES = 13321] = "ENGLISH_PHILIPPINES", _[_.ENGLISH_SOUTH_AFRICA = 7177] = "ENGLISH_SOUTH_AFRICA", _[_.ENGLISH_TRINIDAD = 11273] = "ENGLISH_TRINIDAD", _[_.ENGLISH_UK = 2057] = "ENGLISH_UK", _[_.ENGLISH_US = 1033] = "ENGLISH_US", _[_.ENGLISH_ZIMBABWE = 12297] = "ENGLISH_ZIMBABWE", _[_.ESTONIAN = 1061] = "ESTONIAN", _[_.FAEROESE = 1080] = "FAEROESE", _[_.FARSI = 1065] = "FARSI", _[_.FINNISH = 1035] = "FINNISH", _[_.FRENCH_BELGIUM = 2060] = "FRENCH_BELGIUM", _[_.FRENCH_CANADA = 3084] = "FRENCH_CANADA", _[_.FRENCH_FRANCE = 1036] = "FRENCH_FRANCE", _[_.FRENCH_LUXEMBOURG = 5132] = "FRENCH_LUXEMBOURG", _[_.FRENCH_MONACO = 6156] = "FRENCH_MONACO", _[_.FRENCH_SWITZERLAND = 4108] = "FRENCH_SWITZERLAND", _[_.FYRO_MACEDONIAN = 1071] = "FYRO_MACEDONIAN", _[_.GALICIAN = 1110] = "GALICIAN", _[_.GEORGIAN = 1079] = "GEORGIAN", _[_.GERMAN_AUSTRIA = 3079] = "GERMAN_AUSTRIA", _[_.GERMAN_GERMANY = 1031] = "GERMAN_GERMANY", _[_.GERMAN_LIECHTENSTEIN = 5127] = "GERMAN_LIECHTENSTEIN", _[_.GERMAN_LUXEMBOURG = 4103] = "GERMAN_LUXEMBOURG", _[_.GERMAN_SWITZERLAND = 2055] = "GERMAN_SWITZERLAND", _[_.GREEK = 1032] = "GREEK", _[_.GUJARATI = 1095] = "GUJARATI", _[_.HEBREW = 1037] = "HEBREW", _[_.HINDI_INDIA = 1081] = "HINDI_INDIA", _[_.HUNGARIAN = 1038] = "HUNGARIAN", _[_.ICELANDIC = 1039] = "ICELANDIC", _[_.INDONESIAN = 1057] = "INDONESIAN", _[_.ITALIAN_ITALY = 1040] = "ITALIAN_ITALY", _[_.ITALIAN_SWITZERLAND = 2064] = "ITALIAN_SWITZERLAND", _[_.JAPANESE = 1041] = "JAPANESE", _[_.KANNADA = 1099] = "KANNADA", _[_.KAZAKH = 1087] = "KAZAKH", _[_.KHMER = 1107] = "KHMER", _[_.KONKANI = 1111] = "KONKANI", _[_.KOREAN = 1042] = "KOREAN", _[_.KYRGYZ_CYRILICK = 1088] = "KYRGYZ_CYRILICK", _[_.LATVIAN = 1062] = "LATVIAN", _[_.LITHUANIAN = 1063] = "LITHUANIAN", _[_.MALAY_MALAYSIA = 1086] = "MALAY_MALAYSIA", _[_.MALAY_BRUNEI_DARUSSALAM = 2110] = "MALAY_BRUNEI_DARUSSALAM", _[_.MALTESE = 1082] = "MALTESE", _[_.MARATHI = 1102] = "MARATHI", _[_.MONGOLIAN_CYRILIC = 1104] = "MONGOLIAN_CYRILIC", _[_.NORWEGIAN_BOKMAL = 1044] = "NORWEGIAN_BOKMAL", _[_.NORWEGIAN_NYORSK = 2068] = "NORWEGIAN_NYORSK", _[_.POLISH = 1045] = "POLISH", _[_.PORTUGUESE_BRAZIL = 1046] = "PORTUGUESE_BRAZIL", _[_.PORTUGUESE_PORTUGAL = 2070] = "PORTUGUESE_PORTUGAL", _[_.PUNJABI = 1094] = "PUNJABI", _[_.RHAETO_ROMANIC = 1047] = "RHAETO_ROMANIC", _[_.ROMANIAN = 1048] = "ROMANIAN", _[_.RUSSIAN = 1049] = "RUSSIAN", _[_.SANSKRIT = 1103] = "SANSKRIT", _[_.SERBIAN_CYRILIC = 3098] = "SERBIAN_CYRILIC", _[_.SERBIAN_LATIN = 2074] = "SERBIAN_LATIN", _[_.SLOVAK = 1051] = "SLOVAK", _[_.SLOVENIAN = 1060] = "SLOVENIAN", _[_.SPANISH_ARGENTINA = 11274] = "SPANISH_ARGENTINA", _[_.SPANISH_BOLIVIA = 16394] = "SPANISH_BOLIVIA", _[_.SPANISH_CHILE = 13322] = "SPANISH_CHILE", _[_.SPANICH_COLOMBIA = 9226] = "SPANICH_COLOMBIA", _[_.SPANISH_COSTA_RICA = 5130] = "SPANISH_COSTA_RICA", _[_.SPANISH_DOMINICAN_REPUBLIC = 7178] = "SPANISH_DOMINICAN_REPUBLIC", _[_.SPANISH_ECUADOR = 12298] = "SPANISH_ECUADOR", _[_.SPANISH_EL_SALVADOR = 17418] = "SPANISH_EL_SALVADOR", _[_.SPANISH_GUATEMALA = 4106] = "SPANISH_GUATEMALA", _[_.SPANISH_HONDURAS = 18442] = "SPANISH_HONDURAS", _[_.SPANISH_MEXICO = 2058] = "SPANISH_MEXICO", _[_.SPANISH_NICARAGUA = 19466] = "SPANISH_NICARAGUA", _[_.SPANISH_PANAMA = 6154] = "SPANISH_PANAMA", _[_.SPANISH_PARAGUAY = 15370] = "SPANISH_PARAGUAY", _[_.SPANISH_PERU = 10250] = "SPANISH_PERU", _[_.SPANISH_PUERTO_RICO = 20490] = "SPANISH_PUERTO_RICO", _[_.SPANISH_TRADITIONAL_SORT = 1034] = "SPANISH_TRADITIONAL_SORT", _[_.SPANISH_INTERNATIONAL_SORT = 3082] = "SPANISH_INTERNATIONAL_SORT", _[_.SPANISH_URUGUAY = 14346] = "SPANISH_URUGUAY", _[_.SPANISH_VENEZUELA = 8202] = "SPANISH_VENEZUELA", _[_.SWAHILI = 1089] = "SWAHILI", _[_.SWEDISH = 1053] = "SWEDISH", _[_.SWEDISH_FINLAND = 2077] = "SWEDISH_FINLAND", _[_.SYRIAC = 1114] = "SYRIAC", _[_.TAMIL = 1097] = "TAMIL", _[_.TATAR = 1092] = "TATAR", _[_.TELUGU = 1098] = "TELUGU", _[_.THAI_THAILAND = 1054] = "THAI_THAILAND", _[_.TURKISH = 1055] = "TURKISH", _[_.TAJIK_CYRILLIC = 1064] = "TAJIK_CYRILLIC", _[_.TURKMEN = 1090] = "TURKMEN", _[_.UKRAINIAN = 1058] = "UKRAINIAN", _[_.URDU = 1056] = "URDU", _[_.UZBEK_CYRILIC = 2115] = "UZBEK_CYRILIC", _[_.UZBEK_LATIN = 1091] = "UZBEK_LATIN", _[_.VIETNAMESE = 1066] = "VIETNAMESE", _[_.CTC_SIMPLIFIED = 50001] = "CTC_SIMPLIFIED", _[_.CTC_TRADITIONAL = 50002] = "CTC_TRADITIONAL", _))(EE || {}), OA = /* @__PURE__ */ ((_) => (_.FATAL_ERROR = "FatalError", _.ERROR = "Error", _.WARNING = "Warning", _.INFO = "Info", _.DEBUG = "Debug", _))(OA || {}), RA = /* @__PURE__ */ ((_) => (_[_.METRIC = 0] = "METRIC", _[_.IMPERIAL = 1] = "IMPERIAL", _))(RA || {}), AA = /* @__PURE__ */ ((_) => (_.IDL = "1x30", _.ID1 = "3x30", _.ID2 = "2x36", _.ID3 = "2x44", _.CAN = "1x6", _.ID1_2_30 = "2x30", _))(AA || {}), tA = /* @__PURE__ */ ((_) => (_[_.ASN_CERTIFICATE_INCORRECT_VERSION = -1879048191] = "ASN_CERTIFICATE_INCORRECT_VERSION", _[_.ASN_CERTIFICATE_NON_MATCHING_SIGNATURE_ALGORITHM = -1879048190] = "ASN_CERTIFICATE_NON_MATCHING_SIGNATURE_ALGORITHM", _[_.ASN_CERTIFICATE_INCORRECT_TIME_CODING = -1879048189] = "ASN_CERTIFICATE_INCORRECT_TIME_CODING", _[_.ASN_CERTIFICATE_INCORRECT_USE_OF_GENERALIZED_TIME = -1879048188] = "ASN_CERTIFICATE_INCORRECT_USE_OF_GENERALIZED_TIME", _[_.ASN_CERTIFICATE_EMPTY_ISSUER = -1879048187] = "ASN_CERTIFICATE_EMPTY_ISSUER", _[_.ASN_CERTIFICATE_EMPTY_SUBJECT = -1879048186] = "ASN_CERTIFICATE_EMPTY_SUBJECT", _[_.ASN_CERTIFICATE_UNSUPPORTED_CRITICAL_EXTENSION = -1879048184] = "ASN_CERTIFICATE_UNSUPPORTED_CRITICAL_EXTENSION", _[_.ASN_CERTIFICATE_FORCED_DEFAULT_CSCA_ROLE = -1879048178] = "ASN_CERTIFICATE_FORCED_DEFAULT_CSCA_ROLE", _[_.ASN_CERTIFICATE_FORCED_DEFAULT_DS_ROLE = -1879048177] = "ASN_CERTIFICATE_FORCED_DEFAULT_DS_ROLE", _[_.ASN_CERTIFICATE_INCORRECT_ISSUER_SUBJECT_DS = -1879048176] = "ASN_CERTIFICATE_INCORRECT_ISSUER_SUBJECT_DS", _[_.ASN_CERTIFICATE_DUPLICATING_EXTENSIONS = -1879048169] = "ASN_CERTIFICATE_DUPLICATING_EXTENSIONS", _[_.ICAO_CERTIFICATE_VERSION_MISSED = -1879047680] = "ICAO_CERTIFICATE_VERSION_MISSED", _[_.ICAO_CERTIFICATE_VERSION_INCORRECT = -1879047679] = "ICAO_CERTIFICATE_VERSION_INCORRECT", _[_.ICAO_CERTIFICATE_ISSUER_COUNTRY_MISSED = -1879047678] = "ICAO_CERTIFICATE_ISSUER_COUNTRY_MISSED", _[_.ICAO_CERTIFICATE_ISSUER_COMMON_NAME_MISSED = -1879047677] = "ICAO_CERTIFICATE_ISSUER_COMMON_NAME_MISSED", _[_.ICAO_CERTIFICATE_ISSUER_COUNTRY_NON_COMPLIANT = -1879047676] = "ICAO_CERTIFICATE_ISSUER_COUNTRY_NON_COMPLIANT", _[_.ICAO_CERTIFICATE_SUBJECT_COUNTRY_MISSED = -1879047675] = "ICAO_CERTIFICATE_SUBJECT_COUNTRY_MISSED", _[_.ICAO_CERTIFICATE_SUBJECT_COMMON_NAME_MISSED = -1879047674] = "ICAO_CERTIFICATE_SUBJECT_COMMON_NAME_MISSED", _[_.ICAO_CERTIFICATE_SUBJECT_COUNTRY_NON_COMPLIANT = -1879047673] = "ICAO_CERTIFICATE_SUBJECT_COUNTRY_NON_COMPLIANT", _[_.ICAO_CERTIFICATE_USING_NON_COMPLIANT_DATA = -1879047672] = "ICAO_CERTIFICATE_USING_NON_COMPLIANT_DATA", _[_.ICAO_CERTIFICATE_UNSUPPORTED_SIGNATURE_ALGORITHM = -1879047671] = "ICAO_CERTIFICATE_UNSUPPORTED_SIGNATURE_ALGORITHM", _[_.ICAO_CERTIFICATE_UNSUPPORTED_PUBLIC_KEY_ALGORITHM = -1879047670] = "ICAO_CERTIFICATE_UNSUPPORTED_PUBLIC_KEY_ALGORITHM", _[_.ICAO_CERTIFICATE_MISSED_EXTENSIONS = -1879047669] = "ICAO_CERTIFICATE_MISSED_EXTENSIONS", _[_.ICAO_CERTIFICATE_VALIDITY = -1879047668] = "ICAO_CERTIFICATE_VALIDITY", _[_.ICAO_CERTIFICATE_EXT_USING_NON_COMPLIANT_DATA = -1879047667] = "ICAO_CERTIFICATE_EXT_USING_NON_COMPLIANT_DATA", _[_.ICAO_CERTIFICATE_EXT_KEY_USAGE_MISSED = -1879047666] = "ICAO_CERTIFICATE_EXT_KEY_USAGE_MISSED", _[_.ICAO_CERTIFICATE_EXT_KEY_USAGE_NOT_CRITICAL = -1879047665] = "ICAO_CERTIFICATE_EXT_KEY_USAGE_NOT_CRITICAL", _[_.ICAO_CERTIFICATE_EXT_KEY_USAGE_INCORRECT_DATA = -1879047664] = "ICAO_CERTIFICATE_EXT_KEY_USAGE_INCORRECT_DATA", _[_.ICAO_CERTIFICATE_EXT_BASIC_CONSTRAINTS_MISSED = -1879047663] = "ICAO_CERTIFICATE_EXT_BASIC_CONSTRAINTS_MISSED", _[_.ICAO_CERTIFICATE_EXT_BASIC_CONSTRAINTS_INCORRECT_USAGE_1 = -1879047662] = "ICAO_CERTIFICATE_EXT_BASIC_CONSTRAINTS_INCORRECT_USAGE_1", _[_.ICAO_CERTIFICATE_EXT_BASIC_CONSTRAINTS_INCORRECT_USAGE_2 = -1879047661] = "ICAO_CERTIFICATE_EXT_BASIC_CONSTRAINTS_INCORRECT_USAGE_2", _[_.ICAO_CERTIFICATE_EXT_BASIC_CONSTRAINTS_NOT_CRITICAL = -1879047660] = "ICAO_CERTIFICATE_EXT_BASIC_CONSTRAINTS_NOT_CRITICAL", _[_.ICAO_CERTIFICATE_EXT_BASIC_CONSTRAINTS_INCORRECT_DATA = -1879047659] = "ICAO_CERTIFICATE_EXT_BASIC_CONSTRAINTS_INCORRECT_DATA", _[_.ICAO_CERTIFICATE_EXT_BASIC_CONSTRAINTS_PATH_LENC_MISSED = -1879047658] = "ICAO_CERTIFICATE_EXT_BASIC_CONSTRAINTS_PATH_LENC_MISSED", _[_.ICAO_CERTIFICATE_EXT_BASIC_CONSTRAINTS_PATH_LENC_INCORRECT = -1879047657] = "ICAO_CERTIFICATE_EXT_BASIC_CONSTRAINTS_PATH_LENC_INCORRECT", _[_.ICAO_CERTIFICATE_EXT_EXT_KEY_USAGE_NOT_CRITICAL = -1879047656] = "ICAO_CERTIFICATE_EXT_EXT_KEY_USAGE_NOT_CRITICAL", _[_.ICAO_CERTIFICATE_EXT_EXT_KEY_USAGE_INCORRECT_USAGE = -1879047655] = "ICAO_CERTIFICATE_EXT_EXT_KEY_USAGE_INCORRECT_USAGE", _[_.ICAO_CERTIFICATE_EXT_EXT_KEY_USAGE_INCORRECT_DATA = -1879047654] = "ICAO_CERTIFICATE_EXT_EXT_KEY_USAGE_INCORRECT_DATA", _[_.ICAO_CERTIFICATE_EXT_AUTH_KEY_ID_MISSED = -1879047653] = "ICAO_CERTIFICATE_EXT_AUTH_KEY_ID_MISSED", _[_.ICAO_CERTIFICATE_EXT_AUTH_KEY_ID_INCORRECT_DATA = -1879047652] = "ICAO_CERTIFICATE_EXT_AUTH_KEY_ID_INCORRECT_DATA", _[_.ICAO_CERTIFICATE_EXT_AUTH_KEY_ID_KEY_ID_MISSED = -1879047651] = "ICAO_CERTIFICATE_EXT_AUTH_KEY_ID_KEY_ID_MISSED", _[_.ICAO_CERTIFICATE_EXT_SUBJECT_KEY_ID_MISSED = -1879047650] = "ICAO_CERTIFICATE_EXT_SUBJECT_KEY_ID_MISSED", _[_.ICAO_CERTIFICATE_EXT_SUBJECT_KEY_ID_INCORRECT_DATA = -1879047649] = "ICAO_CERTIFICATE_EXT_SUBJECT_KEY_ID_INCORRECT_DATA", _[_.ICAO_CERTIFICATE_EXT_PRIVATE_KEY_UP_MISSED = -1879047648] = "ICAO_CERTIFICATE_EXT_PRIVATE_KEY_UP_MISSED", _[_.ICAO_CERTIFICATE_EXT_PRIVATE_KEY_UP_INCORRECT_DATA = -1879047647] = "ICAO_CERTIFICATE_EXT_PRIVATE_KEY_UP_INCORRECT_DATA", _[_.ICAO_CERTIFICATE_EXT_PRIVATE_KEY_UP_EMPTY = -1879047646] = "ICAO_CERTIFICATE_EXT_PRIVATE_KEY_UP_EMPTY", _[_.ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_MISSED = -1879047645] = "ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_MISSED", _[_.ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_INCORRECT_DATA = -1879047644] = "ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_INCORRECT_DATA", _[_.ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_EMPTY = -1879047643] = "ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_EMPTY", _[_.ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_NON_COMPLIANT = -1879047642] = "ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_NON_COMPLIANT", _[_.ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_CRITICAL = -1879047640] = "ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_CRITICAL", _[_.ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_DN_EMPTY = -1879047639] = "ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_DN_EMPTY", _[_.ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_DN_INCORRECT = -1879047638] = "ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_DN_INCORRECT", _[_.ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_DN_NON_COMPLIANT = -1879047637] = "ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_DN_NON_COMPLIANT", _[_.ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_MISSED = -1879047636] = "ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_MISSED", _[_.ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_INCORRECT_DATA = -1879047635] = "ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_INCORRECT_DATA", _[_.ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_EMPTY = -1879047634] = "ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_EMPTY", _[_.ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_NON_COMPLIANT = -1879047633] = "ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_NON_COMPLIANT", _[_.ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_CRITICAL = -1879047631] = "ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_CRITICAL", _[_.ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_DN_EMPTY = -1879047630] = "ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_DN_EMPTY", _[_.ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_DN_INCORRECT = -1879047629] = "ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_DN_INCORRECT", _[_.ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_DN_NON_COMPLIANT = -1879047628] = "ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_DN_NON_COMPLIANT", _[_.ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_MISSED = -1879047627] = "ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_MISSED", _[_.ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_INCORRECT_DATA = -1879047626] = "ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_INCORRECT_DATA", _[_.ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_VERSION = -1879047625] = "ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_VERSION", _[_.ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_DOC_TYPES = -1879047624] = "ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_DOC_TYPES", _[_.ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_DOC_TYPES_EMPTY = -1879047623] = "ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_DOC_TYPES_EMPTY", _[_.ICAO_CERTIFICATE_EXT_CERT_POLICIES_INCORRECT_DATA = -1879047622] = "ICAO_CERTIFICATE_EXT_CERT_POLICIES_INCORRECT_DATA", _[_.ICAO_CERTIFICATE_EXT_CERT_POLICIES_EMPTY = -1879047621] = "ICAO_CERTIFICATE_EXT_CERT_POLICIES_EMPTY", _[_.ICAO_CERTIFICATE_EXT_CERT_POLICIES_POLICY_ID_MISSED = -1879047620] = "ICAO_CERTIFICATE_EXT_CERT_POLICIES_POLICY_ID_MISSED", _[_.ICAO_CERTIFICATE_EXT_CRL_DIST_POINT_MISSED = -1879047619] = "ICAO_CERTIFICATE_EXT_CRL_DIST_POINT_MISSED", _[_.ICAO_CERTIFICATE_EXT_CRL_DIST_POINT_INCORRECT_DATA = -1879047618] = "ICAO_CERTIFICATE_EXT_CRL_DIST_POINT_INCORRECT_DATA", _[_.ICAO_CERTIFICATE_EXT_CRL_DIST_POINT_EMPTY = -1879047617] = "ICAO_CERTIFICATE_EXT_CRL_DIST_POINT_EMPTY", _[_.ICAO_CERTIFICATE_EXT_CRL_DIST_POINT_POINT_MISSED = -1879047616] = "ICAO_CERTIFICATE_EXT_CRL_DIST_POINT_POINT_MISSED", _[_.ICAO_CERTIFICATE_SN_NON_COMPLIANT = -1879047615] = "ICAO_CERTIFICATE_SN_NON_COMPLIANT", _[_.ICAO_CERTIFICATE_ISSUER_SN_NON_COMPLIANT = -1879047614] = "ICAO_CERTIFICATE_ISSUER_SN_NON_COMPLIANT", _[_.ICAO_CERTIFICATE_SUBJECT_SN_NON_COMPLIANT = -1879047613] = "ICAO_CERTIFICATE_SUBJECT_SN_NON_COMPLIANT", _[_.ICAO_CERTIFICATE_ISSUER_ATTRIBUTE_NON_COMPLIANT = -1879047612] = "ICAO_CERTIFICATE_ISSUER_ATTRIBUTE_NON_COMPLIANT", _[_.ICAO_CERTIFICATE_SUBJECT_ATTRIBUTE_NON_COMPLIANT = -1879047611] = "ICAO_CERTIFICATE_SUBJECT_ATTRIBUTE_NON_COMPLIANT", _[_.ICAO_CERTIFICATE_ISSUER_SUBJECT_COUNTRY_NON_MATCHING = -1879047610] = "ICAO_CERTIFICATE_ISSUER_SUBJECT_COUNTRY_NON_MATCHING", _[_.ICAO_CERTIFICATE_EXT_CSCA_ALT_NAMES_NON_MATCHING = -1879047609] = "ICAO_CERTIFICATE_EXT_CSCA_ALT_NAMES_NON_MATCHING", _[_.ICAO_CERTIFICATE_EXT_NAME_CHANGE_INCORRECT_DATA = -1879047608] = "ICAO_CERTIFICATE_EXT_NAME_CHANGE_INCORRECT_DATA", _[_.ICAO_CERTIFICATE_EXT_NAME_CHANGE_NON_COMPLIANT = -1879047607] = "ICAO_CERTIFICATE_EXT_NAME_CHANGE_NON_COMPLIANT", _[_.ICAO_CERTIFICATE_EXT_NAME_CHANGE_CRITICAL = -1879047606] = "ICAO_CERTIFICATE_EXT_NAME_CHANGE_CRITICAL", _[_.ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_NON_COMPLIANT = -1879047605] = "ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_NON_COMPLIANT", _[_.ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_CRITICAL = -1879047604] = "ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_CRITICAL", _[_.ICAO_CERTIFICATE_EXT_OPTIONAL_CRITICAL = -1879047603] = "ICAO_CERTIFICATE_EXT_OPTIONAL_CRITICAL", _[_.ICAO_CERTIFICATE_SUBJECT_NON_COMPLIANT = -1879047602] = "ICAO_CERTIFICATE_SUBJECT_NON_COMPLIANT", _[_.ICAO_CERTIFICATE_SUBJECT_COMMON_NAME_NON_COMPLIANT = -1879047601] = "ICAO_CERTIFICATE_SUBJECT_COMMON_NAME_NON_COMPLIANT", _[_.ICAO_COM_LDS_VERSION_INCORRECT = -1879048160] = "ICAO_COM_LDS_VERSION_INCORRECT", _[_.ICAO_COM_LDS_VERSION_MISSING = -1879048159] = "ICAO_COM_LDS_VERSION_MISSING", _[_.ICAO_COM_UNICODE_VERSION_INCORRECT = -1879048158] = "ICAO_COM_UNICODE_VERSION_INCORRECT", _[_.ICAO_COM_UNICODE_VERSION_MISSING = -1879048157] = "ICAO_COM_UNICODE_VERSION_MISSING", _[_.ICAO_COM_DGPM_INCORRECT = -1879048156] = "ICAO_COM_DGPM_INCORRECT", _[_.ICAO_COM_DGPM_MISSING = -1879048155] = "ICAO_COM_DGPM_MISSING", _[_.ICAO_COM_DGPM_UNEXPECTED = -1879048154] = "ICAO_COM_DGPM_UNEXPECTED", _[_.ICAO_APPLICATION_LDS_VERSION_UNSUPPORTED = -1879048144] = "ICAO_APPLICATION_LDS_VERSION_UNSUPPORTED", _[_.ICAO_APPLICATION_UNICODE_VERSION_UNSUPPORTED = -1879048143] = "ICAO_APPLICATION_UNICODE_VERSION_UNSUPPORTED", _[_.ICAO_APPLICATION_LDS_VERSION_INCONSISTENT = -1879048142] = "ICAO_APPLICATION_LDS_VERSION_INCONSISTENT", _[_.ICAO_APPLICATION_UNICODE_VERSION_INCONSISTENT = -1879048141] = "ICAO_APPLICATION_UNICODE_VERSION_INCONSISTENT", _[_.ASN_SIGNED_DATA_OID_INCORRECT = -1879047936] = "ASN_SIGNED_DATA_OID_INCORRECT", _[_.ASN_SIGNED_DATA_VERSION_INCORRECT = -1879047776] = "ASN_SIGNED_DATA_VERSION_INCORRECT", _[_.ASN_SIGNED_DATA_CONTENT_OID_INCORRECT = -1879047775] = "ASN_SIGNED_DATA_CONTENT_OID_INCORRECT", _[_.ICAO_SIGNED_DATA_VERSION_INCORRECT = -1879047935] = "ICAO_SIGNED_DATA_VERSION_INCORRECT", _[_.ICAO_SIGNED_DATA_DIGEST_ALGORITHMS_EMPTY = -1879047934] = "ICAO_SIGNED_DATA_DIGEST_ALGORITHMS_EMPTY", _[_.ICAO_SIGNED_DATA_DIGEST_ALGORITHMS_UNSUPPORTED = -1879047933] = "ICAO_SIGNED_DATA_DIGEST_ALGORITHMS_UNSUPPORTED", _[_.ICAO_SIGNED_DATA_SIGNER_INFOS_MULTIPLE_ENTRIES = -1879047927] = "ICAO_SIGNED_DATA_SIGNER_INFOS_MULTIPLE_ENTRIES", _[_.ICAO_SIGNED_DATA_CERTIFICATES_MISSED = -1879047760] = "ICAO_SIGNED_DATA_CERTIFICATES_MISSED", _[_.ICAO_SIGNED_DATA_CERTIFICATES_EMPTY = -1879047759] = "ICAO_SIGNED_DATA_CERTIFICATES_EMPTY", _[_.ICAO_SIGNED_DATA_CRLS_INCORRECT_USAGE = -1879047758] = "ICAO_SIGNED_DATA_CRLS_INCORRECT_USAGE", _[_.ICAO_LDS_OBJECT_INCORRECT_CONTENT_OID = -1879047932] = "ICAO_LDS_OBJECT_INCORRECT_CONTENT_OID", _[_.ICAO_LDS_OBJECT_DG_NUMBER_INCORRECT = -1879047931] = "ICAO_LDS_OBJECT_DG_NUMBER_INCORRECT", _[_.ICAO_LDS_OBJECT_DG_HASH_MISSING = -1879047930] = "ICAO_LDS_OBJECT_DG_HASH_MISSING", _[_.ICAO_LDS_OBJECT_DG_HASH_EXTRA = -1879047929] = "ICAO_LDS_OBJECT_DG_HASH_EXTRA", _[_.ICAO_LDS_OBJECT_VERSION_INCORRECT = -1879047928] = "ICAO_LDS_OBJECT_VERSION_INCORRECT", _[_.ICAO_MASTER_LIST_VERSION_INCORRECT = -1879047744] = "ICAO_MASTER_LIST_VERSION_INCORRECT", _[_.ICAO_DEVIATION_LIST_VERSION_INCORRECT = -1879047736] = "ICAO_DEVIATION_LIST_VERSION_INCORRECT", _[_.BSI_DEFECT_LIST_VERSION_INCORRECT = -1879047728] = "BSI_DEFECT_LIST_VERSION_INCORRECT", _[_.BSI_BLACK_LIST_VERSION_INCORRECT = -1879047720] = "BSI_BLACK_LIST_VERSION_INCORRECT", _[_.ASN_SIGNER_INFO_VERSION_INCORRECT = -1879047926] = "ASN_SIGNER_INFO_VERSION_INCORRECT", _[_.ASN_SIGNER_INFO_SID_INCORRECT_CHOICE = -1879047925] = "ASN_SIGNER_INFO_SID_INCORRECT_CHOICE", _[_.ASN_SIGNER_INFO_SID_DIGEST_ALGORITHM_NOT_LISTED = -1879047924] = "ASN_SIGNER_INFO_SID_DIGEST_ALGORITHM_NOT_LISTED", _[_.ASN_SIGNER_INFO_MESSAGE_DIGEST_ATTR_MISSING = -1879047923] = "ASN_SIGNER_INFO_MESSAGE_DIGEST_ATTR_MISSING", _[_.ASN_SIGNER_INFO_MESSAGE_DIGEST_ATTR_DATA = -1879047922] = "ASN_SIGNER_INFO_MESSAGE_DIGEST_ATTR_DATA", _[_.ASN_SIGNER_INFO_MESSAGE_DIGEST_ATTR_VALUE = -1879047921] = "ASN_SIGNER_INFO_MESSAGE_DIGEST_ATTR_VALUE", _[_.ASN_SIGNER_INFO_CONTENT_TYPE_ATTR_MISSING = -1879047920] = "ASN_SIGNER_INFO_CONTENT_TYPE_ATTR_MISSING", _[_.ASN_SIGNER_INFO_CONTENT_TYPE_ATTR_DATA = -1879047919] = "ASN_SIGNER_INFO_CONTENT_TYPE_ATTR_DATA", _[_.ASN_SIGNER_INFO_CONTENT_TYPE_ATTR_VALUE = -1879047918] = "ASN_SIGNER_INFO_CONTENT_TYPE_ATTR_VALUE", _[_.ASN_SIGNER_INFO_SIGNING_TIME_ATTR_MISSING = -1879047909] = "ASN_SIGNER_INFO_SIGNING_TIME_ATTR_MISSING", _[_.ASN_SIGNER_INFO_SIGNING_TIME_ATTR_DATA = -1879047908] = "ASN_SIGNER_INFO_SIGNING_TIME_ATTR_DATA", _[_.ASN_SIGNER_INFO_SIGNING_TIME_ATTR_VALUE = -1879047907] = "ASN_SIGNER_INFO_SIGNING_TIME_ATTR_VALUE", _[_.ASN_SIGNER_INFO_LIST_CONTENT_DESCRIPTION_ATTR_MISSING = -1879047906] = "ASN_SIGNER_INFO_LIST_CONTENT_DESCRIPTION_ATTR_MISSING", _[_.ASN_SIGNER_INFO_LIST_CONTENT_DESCRIPTION_ATTR_DATA = -1879047905] = "ASN_SIGNER_INFO_LIST_CONTENT_DESCRIPTION_ATTR_DATA", _[_.AUTH_SIGNER_INFO_CERTIFICATE_VALIDITY = -1879047915] = "AUTH_SIGNER_INFO_CERTIFICATE_VALIDITY", _[_.AUTH_SIGNER_INFO_CERTIFICATE_ROOT_IS_NOT_TRUSTED = -1879047914] = "AUTH_SIGNER_INFO_CERTIFICATE_ROOT_IS_NOT_TRUSTED", _[_.AUTH_SIGNER_INFO_CERTIFICATE_CANNOT_FIND_CSCA = -1879047913] = "AUTH_SIGNER_INFO_CERTIFICATE_CANNOT_FIND_CSCA", _[_.AUTH_SIGNER_INFO_CERTIFICATE_REVOKED = -1879047912] = "AUTH_SIGNER_INFO_CERTIFICATE_REVOKED", _[_.AUTH_SIGNER_INFO_CERTIFICATE_SIGNATURE_INVALID = -1879047911] = "AUTH_SIGNER_INFO_CERTIFICATE_SIGNATURE_INVALID", _[_.UNSUPPORTED_IMAGE_FORMAT = -1879047910] = "UNSUPPORTED_IMAGE_FORMAT", _[_.MRZ_DOCUMENT_TYPE_UNKNOWN = 139272] = "MRZ_DOCUMENT_TYPE_UNKNOWN", _[_.MRZ_ISSUING_STATE_SYNTAX_ERROR = 139273] = "MRZ_ISSUING_STATE_SYNTAX_ERROR", _[_.MRZ_NAME_IS_VOID = 139274] = "MRZ_NAME_IS_VOID", _[_.MRZ_NUMBER_INCORRECT_CHECKSUM = 139277] = "MRZ_NUMBER_INCORRECT_CHECKSUM", _[_.MRZ_NATIONALITY_SYNTAX_ERROR = 139278] = "MRZ_NATIONALITY_SYNTAX_ERROR", _[_.MRZ_DOB_SYNTAX_ERROR = 139279] = "MRZ_DOB_SYNTAX_ERROR", _[_.MRZ_DOB_ERROR = 139280] = "MRZ_DOB_ERROR", _[_.MRZ_DOB_INCORRECT_CHECKSUM = 139281] = "MRZ_DOB_INCORRECT_CHECKSUM", _[_.MRZ_SEX_INCORRECT = 139282] = "MRZ_SEX_INCORRECT", _[_.MRZ_DOE_SYNTAX_ERROR = 139283] = "MRZ_DOE_SYNTAX_ERROR", _[_.MRZ_DOE_ERROR = 139284] = "MRZ_DOE_ERROR", _[_.MRZ_DOE_INCORRECT_CHECKSUM = 139285] = "MRZ_DOE_INCORRECT_CHECKSUM", _[_.MRZ_OPTIONAL_DATA_INCORRECT_CHECKSUM = 139286] = "MRZ_OPTIONAL_DATA_INCORRECT_CHECKSUM", _[_.MRZ_INCORRECT_CHECKSUM = 139287] = "MRZ_INCORRECT_CHECKSUM", _[_.MRZ_INCORRECT = 139288] = "MRZ_INCORRECT", _[_.BIOMETRICS_FORMAT_OWNER_MISSING = -1878982656] = "BIOMETRICS_FORMAT_OWNER_MISSING", _[_.BIOMETRICS_FORMAT_OWNER_INCORRECT = -1878917120] = "BIOMETRICS_FORMAT_OWNER_INCORRECT", _[_.BIOMETRICS_FORMAT_TYPE_MISSING = -1878851584] = "BIOMETRICS_FORMAT_TYPE_MISSING", _[_.BIOMETRICS_FORMAT_TYPE_INCORRECT = -1878786048] = "BIOMETRICS_FORMAT_TYPE_INCORRECT", _[_.BIOMETRICS_TYPE_INCORRECT = -1878720512] = "BIOMETRICS_TYPE_INCORRECT", _[_.BIOMETRICS_SUBTYPE_MISSING = -1878654976] = "BIOMETRICS_SUBTYPE_MISSING", _[_.BIOMETRICS_SUBTYPE_INCORRECT = -1878589440] = "BIOMETRICS_SUBTYPE_INCORRECT", _[_.BIOMETRICS_BDB_IMAGE_MISSING = -1878523904] = "BIOMETRICS_BDB_IMAGE_MISSING", _[_.BIOMETRICS_BDB_FORMAT_ID_INCORRECT = -1878458368] = "BIOMETRICS_BDB_FORMAT_ID_INCORRECT", _[_.BIOMETRICS_BDB_VERSION_INCORRECT = -1878392832] = "BIOMETRICS_BDB_VERSION_INCORRECT", _[_.BIOMETRICS_BDB_DATA_LENGTH_INCORRECT = -1878327296] = "BIOMETRICS_BDB_DATA_LENGTH_INCORRECT", _[_.BIOMETRICS_BDB_DATA_GENDER = -1877999616] = "BIOMETRICS_BDB_DATA_GENDER", _[_.BIOMETRICS_BDB_DATA_EYE_COLOR = -1877934080] = "BIOMETRICS_BDB_DATA_EYE_COLOR", _[_.BIOMETRICS_BDB_DATA_HAIR_COLOR = -1877868544] = "BIOMETRICS_BDB_DATA_HAIR_COLOR", _[_.BIOMETRICS_BDB_DATA_POSE_ANGLE_YAW = -1877803008] = "BIOMETRICS_BDB_DATA_POSE_ANGLE_YAW", _[_.BIOMETRICS_BDB_DATA_POSE_ANGLE_PITCH = -1877737472] = "BIOMETRICS_BDB_DATA_POSE_ANGLE_PITCH", _[_.BIOMETRICS_BDB_DATA_POSE_ANGLE_ROLL = -1877671936] = "BIOMETRICS_BDB_DATA_POSE_ANGLE_ROLL", _[_.BIOMETRICS_BDB_DATA_POSE_ANGLE_U_YAW = -1877606400] = "BIOMETRICS_BDB_DATA_POSE_ANGLE_U_YAW", _[_.BIOMETRICS_BDB_DATA_POSE_ANGLE_U_PITCH = -1877540864] = "BIOMETRICS_BDB_DATA_POSE_ANGLE_U_PITCH", _[_.BIOMETRICS_BDB_DATA_POSE_ANGLE_U_ROLL = -1877475328] = "BIOMETRICS_BDB_DATA_POSE_ANGLE_U_ROLL", _[_.BIOMETRICS_BDB_DATA_FACE_IMAGE_TYPE = -1877409792] = "BIOMETRICS_BDB_DATA_FACE_IMAGE_TYPE", _[_.BIOMETRICS_BDB_DATA_IMAGE_DATA_TYPE = -1877344256] = "BIOMETRICS_BDB_DATA_IMAGE_DATA_TYPE", _[_.SI_PACE_INFO_UNSUPPORTED_STD_PARAMETERS = -1862270976] = "SI_PACE_INFO_UNSUPPORTED_STD_PARAMETERS", _[_.SI_PACE_INFO_DEPRECATED_VERSION = -1862270975] = "SI_PACE_INFO_DEPRECATED_VERSION", _[_.SI_PACE_DOMAIN_PARAMS_USING_STD_REF = -1862270974] = "SI_PACE_DOMAIN_PARAMS_USING_STD_REF", _[_.SI_PACE_DOMAIN_PARAMS_UNSUPPORTED_ALGORITHM = -1862270973] = "SI_PACE_DOMAIN_PARAMS_UNSUPPORTED_ALGORITHM", _[_.SI_CA_INFO_INCORRECT_VERSION = -1862270972] = "SI_CA_INFO_INCORRECT_VERSION", _[_.SI_CA_PUBLIC_KEY_UNSUPPORTED_ALGORITHM = -1862270971] = "SI_CA_PUBLIC_KEY_UNSUPPORTED_ALGORITHM", _[_.SI_CA_DOMAIN_PARAMS_UNSUPPORTED_ALGORITHM = -1862270970] = "SI_CA_DOMAIN_PARAMS_UNSUPPORTED_ALGORITHM", _[_.SI_TA_INFO_INCORRECT_VERSION = -1862270969] = "SI_TA_INFO_INCORRECT_VERSION", _[_.SI_TA_INFO_FILE_ID_FOR_VERSION_2 = -1862270968] = "SI_TA_INFO_FILE_ID_FOR_VERSION_2", _[_.SI_EID_SECURITY_UNSUPPORTED_DIGEST_ALGORITHM = -1862270967] = "SI_EID_SECURITY_UNSUPPORTED_DIGEST_ALGORITHM", _[_.SI_RI_INFO_INCORRECT_VERSION = -1862270966] = "SI_RI_INFO_INCORRECT_VERSION", _[_.SI_RI_DOMAIN_PARAMS_UNSUPPORTED_ALGORITHM = -1862270965] = "SI_RI_DOMAIN_PARAMS_UNSUPPORTED_ALGORITHM", _[_.SI_AA_INFO_INCORRECT_VERSION = -1862270964] = "SI_AA_INFO_INCORRECT_VERSION", _[_.SI_AA_INFO_UNSUPPORTED_ALGORITHM = -1862270963] = "SI_AA_INFO_UNSUPPORTED_ALGORITHM", _[_.SI_AA_INFO_INCONSISTENT_ALGORITHM_REFERENCE = -1862270962] = "SI_AA_INFO_INCONSISTENT_ALGORITHM_REFERENCE", _[_.SI_STORAGE_PACE_INFO_NOT_AVAILABLE = -1862270720] = "SI_STORAGE_PACE_INFO_NOT_AVAILABLE", _[_.SI_STORAGE_PACE_INFO_NO_STD_PARAMETERS = -1862270719] = "SI_STORAGE_PACE_INFO_NO_STD_PARAMETERS", _[_.SI_STORAGE_PACE_INFO_NO_MATCHING_DOMAIN_PARAMS = -1862270718] = "SI_STORAGE_PACE_INFO_NO_MATCHING_DOMAIN_PARAMS", _[_.SI_STORAGE_CA_INFO_NOT_AVAILABLE = -1862270717] = "SI_STORAGE_CA_INFO_NOT_AVAILABLE", _[_.SI_STORAGE_CA_DOMAIN_PARAMS_NO_REQUIRED_OPTION = -1862270716] = "SI_STORAGE_CA_DOMAIN_PARAMS_NO_REQUIRED_OPTION", _[_.SI_STORAGE_CA_DOMAIN_PARAMS_NOT_AVAILABLE = -1862270715] = "SI_STORAGE_CA_DOMAIN_PARAMS_NOT_AVAILABLE", _[_.SI_STORAGE_CA_ANONYMOUS_INFOS = -1862270714] = "SI_STORAGE_CA_ANONYMOUS_INFOS", _[_.SI_STORAGE_CA_INFO_NO_MATCHING_DOMAIN_PARAMS = -1862270713] = "SI_STORAGE_CA_INFO_NO_MATCHING_DOMAIN_PARAMS", _[_.SI_STORAGE_CA_INFO_NO_MATCHING_PUBLIC_KEY = -1862270712] = "SI_STORAGE_CA_INFO_NO_MATCHING_PUBLIC_KEY", _[_.SI_STORAGE_CA_INCORRECT_INFOS_QUANTITY = -1862270711] = "SI_STORAGE_CA_INCORRECT_INFOS_QUANTITY", _[_.SI_STORAGE_TA_INFO_NOT_AVAILABLE = -1862270710] = "SI_STORAGE_TA_INFO_NOT_AVAILABLE", _[_.SI_STORAGE_CARD_INFO_LOCATOR_MULTIPLE_ENTRIES = -1862270709] = "SI_STORAGE_CARD_INFO_LOCATOR_MULTIPLE_ENTRIES", _[_.SI_STORAGE_EID_SECURITY_INFO_MULTIPLE_ENTRIES = -1862270708] = "SI_STORAGE_EID_SECURITY_INFO_MULTIPLE_ENTRIES", _[_.SI_STORAGE_PRIVILEGED_TI_MULTIPLE_ENTRIES = -1862270707] = "SI_STORAGE_PRIVILEGED_TI_MULTIPLE_ENTRIES", _[_.SI_STORAGE_PRIVILEGED_TI_INCORRECT_USAGE = -1862270706] = "SI_STORAGE_PRIVILEGED_TI_INCORRECT_USAGE", _[_.SI_STORAGE_RI_DOMAIN_PARAMS_MULTIPLE_ENTRIES = -1862270705] = "SI_STORAGE_RI_DOMAIN_PARAMS_MULTIPLE_ENTRIES", _[_.SI_STORAGE_PACE_INFO_NON_CONSISTANT = -1862270704] = "SI_STORAGE_PACE_INFO_NON_CONSISTANT", _[_.CV_CERTIFICATE_PROFILE_INCORRECT_VERSION = -1862270463] = "CV_CERTIFICATE_PROFILE_INCORRECT_VERSION", _[_.CV_CERTIFICATE_VALIDITY = -1862270462] = "CV_CERTIFICATE_VALIDITY", _[_.CV_CERTIFICATE_NON_CVCA_DOMAIN_PARAMETERS = -1862270461] = "CV_CERTIFICATE_NON_CVCA_DOMAIN_PARAMETERS", _[_.CV_CERTIFICATE_PRIVATE_KEY_INCORRECT_VERSION = -1862270460] = "CV_CERTIFICATE_PRIVATE_KEY_INCORRECT_VERSION", _[_.TA_PACE_STATIC_BINDING_USED = -1862270208] = "TA_PACE_STATIC_BINDING_USED", _[_.AUTH_ML_SIGNER_INFO_CERTIFICATE_VALIDITY = -1845493483] = "AUTH_ML_SIGNER_INFO_CERTIFICATE_VALIDITY", _[_.AUTH_ML_SIGNER_INFO_CERTIFICATE_ROOT_IS_NOT_TRUSTED = -1845493482] = "AUTH_ML_SIGNER_INFO_CERTIFICATE_ROOT_IS_NOT_TRUSTED", _[_.AUTH_ML_SIGNER_INFO_CERTIFICATE_CANNOT_FIND_CSCA = -1845493481] = "AUTH_ML_SIGNER_INFO_CERTIFICATE_CANNOT_FIND_CSCA", _[_.AUTH_ML_SIGNER_INFO_CERTIFICATE_REVOKED = -1845493480] = "AUTH_ML_SIGNER_INFO_CERTIFICATE_REVOKED", _[_.AUTH_ML_SIGNER_INFO_CERTIFICATE_SIGNATURE_INVALID = -1845493479] = "AUTH_ML_SIGNER_INFO_CERTIFICATE_SIGNATURE_INVALID", _))(tA || {}), VO = /* @__PURE__ */ ((_) => (_[_.NOT_FINISHED = 0] = "NOT_FINISHED", _[_.FINISHED = 1] = "FINISHED", _[_.TIMEOUT = 2] = "TIMEOUT", _))(VO || {}), rA = /* @__PURE__ */ ((_) => (_[_.DOCUMENT_IMAGE = 1] = "DOCUMENT_IMAGE", _[_.MRZ_TEXT = 3] = "MRZ_TEXT", _[_.BARCODES = 5] = "BARCODES", _[_.VISUAL_GRAPHICS = 6] = "VISUAL_GRAPHICS", _[_.DOCUMENT_TYPE_CANDIDATES = 8] = "DOCUMENT_TYPE_CANDIDATES", _[_.DOCUMENT_TYPE = 9] = "DOCUMENT_TYPE", _[_.LEXICAL_ANALYSIS = 15] = "LEXICAL_ANALYSIS", _[_.VISUAL_TEXT = 17] = "VISUAL_TEXT", _[_.BARCODE_TEXT = 18] = "BARCODE_TEXT", _[_.BARCODE_GRAPHICS = 19] = "BARCODE_GRAPHICS", _[_.AUTHENTICITY = 20] = "AUTHENTICITY", _[_.IMAGE_QUALITY = 30] = "IMAGE_QUALITY", _[_.STATUS = 33] = "STATUS", _[_.PORTRAIT_COMPARISON = 34] = "PORTRAIT_COMPARISON", _[_.TEXT = 36] = "TEXT", _[_.IMAGES = 37] = "IMAGES", _[_.FINGERPRINT_COMPARISON = 39] = "FINGERPRINT_COMPARISON", _[_.ENCRYPTED_RCL = 49] = "ENCRYPTED_RCL", _[_.LICENSE = 50] = "LICENSE", _[_.DOCUMENT_POSITION = 85] = "DOCUMENT_POSITION", _[_.RFID_RAW_DATA = 101] = "RFID_RAW_DATA", _[_.RFID_TEXT = 102] = "RFID_TEXT", _[_.RFID_GRAPHICS = 103] = "RFID_GRAPHICS", _[_.RFID_BINARY_DATA = 104] = "RFID_BINARY_DATA", _[_.RFID_ORIGINAL_GRAPHICS = 105] = "RFID_ORIGINAL_GRAPHICS", _))(rA || {}), c = /* @__PURE__ */ ((_) => (_[_.AUTHENTICITY = 20] = "AUTHENTICITY", _[_.FINGER_PRINT_COMPARISON = 39] = "FINGER_PRINT_COMPARISON", _[_.PORTRAIT_COMPARISON = 34] = "PORTRAIT_COMPARISON", _[_.DOCUMENT_POSITION = 85] = "DOCUMENT_POSITION", _[_.MRZ_POSITION = 61] = "MRZ_POSITION", _[_.BARCODE_POSITION = 62] = "BARCODE_POSITION", _[_.BARCODES = 5] = "BARCODES", _[_.GRAPHICS = 6] = "GRAPHICS", _[_.BARCODES_IMAGE_DATA = 19] = "BARCODES_IMAGE_DATA", _[_.LIVE_PORTRAIT = 32] = "LIVE_PORTRAIT", _[_.EXT_PORTRAIT = 35] = "EXT_PORTRAIT", _[_.FINGERPRINTS = 38] = "FINGERPRINTS", _[_.VISUAL_OCR_EXTENDED = 17] = "VISUAL_OCR_EXTENDED", _[_.MRZ_OCR_EXTENDED = 3] = "MRZ_OCR_EXTENDED", _[_.BARCODES_TEXT_DATA = 18] = "BARCODES_TEXT_DATA", _[_.MAGNETIC_STRIPE_TEXT_DATA = 26] = "MAGNETIC_STRIPE_TEXT_DATA", _[_.ENCRYPTED_RCL = 49] = "ENCRYPTED_RCL", _[_.INPUT_IMAGE_QUALITY = 30] = "INPUT_IMAGE_QUALITY", _[_.IMAGES = 37] = "IMAGES", _[_.LICENSE = 50] = "LICENSE", _[_.LEXICAL_ANALYSIS = 15] = "LEXICAL_ANALYSIS", _[_.CHOSEN_DOCUMENT_TYPE_CANDIDATE = 9] = "CHOSEN_DOCUMENT_TYPE_CANDIDATE", _[_.RAW_UNCROPPED_IMAGE = 16] = "RAW_UNCROPPED_IMAGE", _[_.STATUS = 33] = "STATUS", _[_.TEXT = 36] = "TEXT", _))(c || {}), MO = /* @__PURE__ */ ((_) => (_[_.RFDGT_COM = 96] = "RFDGT_COM", _[_.RFDGT_DG1 = 97] = "RFDGT_DG1", _[_.RFDGT_DG2 = 117] = "RFDGT_DG2", _[_.RFDGT_DG3 = 99] = "RFDGT_DG3", _[_.RFDGT_DG4 = 118] = "RFDGT_DG4", _[_.RFDGT_DG5 = 101] = "RFDGT_DG5", _[_.RFDGT_DG6 = 102] = "RFDGT_DG6", _[_.RFDGT_DG7 = 103] = "RFDGT_DG7", _[_.RFDGT_DG8 = 104] = "RFDGT_DG8", _[_.RFDGT_DG9 = 105] = "RFDGT_DG9", _[_.RFDGT_DG10 = 106] = "RFDGT_DG10", _[_.RFDGT_DG11 = 107] = "RFDGT_DG11", _[_.RFDGT_DG12 = 108] = "RFDGT_DG12", _[_.RFDGT_DG13 = 109] = "RFDGT_DG13", _[_.RFDGT_DG14 = 110] = "RFDGT_DG14", _[_.RFDGT_DG15 = 111] = "RFDGT_DG15", _[_.RFDGT_DG16 = 112] = "RFDGT_DG16", _[_.RFDGT_SOD = 119] = "RFDGT_SOD", _[_.RFDGT_EID_DG1 = 97] = "RFDGT_EID_DG1", _[_.RFDGT_EID_DG2 = 98] = "RFDGT_EID_DG2", _[_.RFDGT_EID_DG3 = 99] = "RFDGT_EID_DG3", _[_.RFDGT_EID_DG4 = 100] = "RFDGT_EID_DG4", _[_.RFDGT_EID_DG5 = 101] = "RFDGT_EID_DG5", _[_.RFDGT_EID_DG6 = 102] = "RFDGT_EID_DG6", _[_.RFDGT_EID_DG7 = 103] = "RFDGT_EID_DG7", _[_.RFDGT_EID_DG8 = 104] = "RFDGT_EID_DG8", _[_.RFDGT_EID_DG9 = 105] = "RFDGT_EID_DG9", _[_.RFDGT_EID_DG10 = 106] = "RFDGT_EID_DG10", _[_.RFDGT_EID_DG11 = 107] = "RFDGT_EID_DG11", _[_.RFDGT_EID_DG12 = 108] = "RFDGT_EID_DG12", _[_.RFDGT_EID_DG13 = 109] = "RFDGT_EID_DG13", _[_.RFDGT_EID_DG14 = 110] = "RFDGT_EID_DG14", _[_.RFDGT_EID_DG15 = 111] = "RFDGT_EID_DG15", _[_.RFDGT_EID_DG16 = 112] = "RFDGT_EID_DG16", _[_.RFDGT_EID_DG17 = 113] = "RFDGT_EID_DG17", _[_.RFDGT_EID_DG18 = 114] = "RFDGT_EID_DG18", _[_.RFDGT_EID_DG19 = 115] = "RFDGT_EID_DG19", _[_.RFDGT_EID_DG20 = 116] = "RFDGT_EID_DG20", _[_.RFDGT_EID_DG21 = 117] = "RFDGT_EID_DG21", _[_.RFDGT_EDL_COM = 96] = "RFDGT_EDL_COM", _[_.RFDGT_EDL_SOD = 119] = "RFDGT_EDL_SOD", _[_.RFDGT_EDL_CE = 119] = "RFDGT_EDL_CE", _[_.RFDGT_EDL_DG1 = 97] = "RFDGT_EDL_DG1", _[_.RFDGT_EDL_DG2 = 107] = "RFDGT_EDL_DG2", _[_.RFDGT_EDL_DG3 = 108] = "RFDGT_EDL_DG3", _[_.RFDGT_EDL_DG4 = 101] = "RFDGT_EDL_DG4", _[_.RFDGT_EDL_DG5 = 103] = "RFDGT_EDL_DG5", _[_.RFDGT_EDL_DG6 = 117] = "RFDGT_EDL_DG6", _[_.RFDGT_EDL_DG7 = 99] = "RFDGT_EDL_DG7", _[_.RFDGT_EDL_DG8 = 118] = "RFDGT_EDL_DG8", _[_.RFDGT_EDL_DG9 = 112] = "RFDGT_EDL_DG9", _[_.RFDGT_EDL_DG11 = 109] = "RFDGT_EDL_DG11", _[_.RFDGT_EDL_DG12 = 113] = "RFDGT_EDL_DG12", _[_.RFDGT_EDL_DG13 = 111] = "RFDGT_EDL_DG13", _[_.RFDGT_EDL_DG14 = 110] = "RFDGT_EDL_DG14", _))(MO || {}), eI = /* @__PURE__ */ ((_) => (_[_.NONE = 0] = "NONE", _[_.MAIN_PAGE = 1] = "MAIN_PAGE", _[_.BACK_PAGE = 2] = "BACK_PAGE", _))(eI || {}), SA = /* @__PURE__ */ ((_) => (_.MRZ = "Mrz", _.BARCODE = "Barcode", _.LOCATE = "Locate", _.OCR = "Ocr", _.DOCTYPE = "DocType", _.MRZ_OR_BARCODE = "MrzOrBarcode", _.MRZ_OR_LOCATE = "MrzOrLocate", _.MRZ_AND_LOCATE = "MrzAndLocate", _.BARCODE_AND_LOCATE = "BarcodeAndLocate", _.MRZ_OR_OCR = "MrzOrOcr", _.MRZ_OR_BARCODE_OR_OCR = "MrzOrBarcodeOrOcr", _.LOCATE_VISUAL_AND_MRZ_OR_OCR = "LocateVisual_And_MrzOrOcr", _.FULL_PROCESS = "FullProcess", _.FULL_AUTH = "FullAuth", _.RUS_STAMP = "RusStamp", _.OCR_FREE = "OcrFree", _.CREDIT_CARD = "CreditCard", _.CAPTURE = "Capture", _))(SA || {}), IR = /* @__PURE__ */ ((_) => (_[_.NOT_CRITICAL = 0] = "NOT_CRITICAL", _[_.CRITICAL = 1] = "CRITICAL", _))(IR || {}), _O = /* @__PURE__ */ ((_) => (_[_.BLANK = 0] = "BLANK", _[_.FILL = 1] = "FILL", _[_.PHOTO = 2] = "PHOTO", _[_.MRZ = 3] = "MRZ", _[_.FALSE_LUMINESCENCE = 4] = "FALSE_LUMINESCENCE", _[_.HOLO_SIMPLE = 5] = "HOLO_SIMPLE", _[_.HOLO_VERIFY_STATIC = 6] = "HOLO_VERIFY_STATIC", _[_.HOLO_VERIFY_MULTI_STATIC = 7] = "HOLO_VERIFY_MULTI_STATIC", _[_.HOLO_VERIFY_DYNAMIC = 8] = "HOLO_VERIFY_DYNAMIC", _[_.PATTERN_NOT_INTERRUPTED = 9] = "PATTERN_NOT_INTERRUPTED", _[_.PATTERN_NOT_SHIFTED = 10] = "PATTERN_NOT_SHIFTED", _[_.PATTERN_SAME_COLORS = 11] = "PATTERN_SAME_COLORS", _[_.PATTERN_IR_INVISIBLE = 12] = "PATTERN_IR_INVISIBLE", _[_.PHOTO_SIZE_CHECK = 13] = "PHOTO_SIZE_CHECK", _[_.PORTRAIT_COMPARISON_VS_GHOST = 14] = "PORTRAIT_COMPARISON_VS_GHOST", _[_.PORTRAIT_COMPARISON_VS_RFID = 15] = "PORTRAIT_COMPARISON_VS_RFID", _[_.PORTRAIT_COMPARISON_VS_VISUAL = 16] = "PORTRAIT_COMPARISON_VS_VISUAL", _[_.BARCODE = 17] = "BARCODE", _[_.PATTERN_DIFFERENT_LINES_THICKNESS = 18] = "PATTERN_DIFFERENT_LINES_THICKNESS", _[_.PORTRAIT_COMPARISON_VS_CAMERA = 19] = "PORTRAIT_COMPARISON_VS_CAMERA", _[_.PORTRAIT_COMPARISON_RFID_VS_CAMERA = 20] = "PORTRAIT_COMPARISON_RFID_VS_CAMERA", _[_.GHOST_PHOTO = 21] = "GHOST_PHOTO", _[_.CLEAR_GHOST_PHOTO = 22] = "CLEAR_GHOST_PHOTO", _[_.INVISIBLE_OBJECT = 23] = "INVISIBLE_OBJECT", _[_.LOW_CONTRAST_OBJECT = 24] = "LOW_CONTRAST_OBJECT", _[_.PHOTO_COLOR = 25] = "PHOTO_COLOR", _[_.PHOTO_SHAPE = 26] = "PHOTO_SHAPE", _[_.PHOTO_CORNERS = 27] = "PHOTO_CORNERS", _[_.OCR = 28] = "OCR", _[_.PORTRAIT_COMPARISON_EXT_VS_VISUAL = 29] = "PORTRAIT_COMPARISON_EXT_VS_VISUAL", _[_.PORTRAIT_COMPARISON_EXT_VS_RFID = 30] = "PORTRAIT_COMPARISON_EXT_VS_RFID", _[_.PORTRAIT_COMPARISON_EXT_VS_CAMERA = 31] = "PORTRAIT_COMPARISON_EXT_VS_CAMERA", _[_.LIVENESS_DEPTH = 32] = "LIVENESS_DEPTH", _[_.MICRO_TEXT = 33] = "MICRO_TEXT", _[_.FLUORESCENT_OBJECT = 34] = "FLUORESCENT_OBJECT", _[_.LANDMARK_CHECK = 35] = "LANDMARK_CHECK", _[_.FACE_PRESENCE = 36] = "FACE_PRESENCE", _[_.FACE_ABSENCE = 38] = "FACE_ABSENCE", _[_.LIVENESS_SCREEN_CAPTURE = 39] = "LIVENESS_SCREEN_CAPTURE", _[_.LIVENESS_ELECTRONIC_DEVICE = 40] = "LIVENESS_ELECTRONIC_DEVICE", _[_.LIVENESS_OVI = 41] = "LIVENESS_OVI", _[_.BARCODE_SIZE_CHECK = 42] = "BARCODE_SIZE_CHECK", _[_.LASINK = 43] = "LASINK", _[_.LIVENESS_MLI = 44] = "LIVENESS_MLI", _[_.LIVENESS_BARCODE_BACKGROUND = 45] = "LIVENESS_BARCODE_BACKGROUND", _))(_O || {}), TE = /* @__PURE__ */ ((_) => (_.MRZ = "MRZ", _.VISUAL = "VISUAL", _.BARCODE = "BARCODE", _.RFID = "RFID", _.MAGNETIC = "MAGNETIC", _))(TE || {}), NA = /* @__PURE__ */ ((_) => (_[_.NO_CHANGE = 0] = "NO_CHANGE", _[_.UPPERCASE = 1] = "UPPERCASE", _[_.LOWERCASE = 2] = "LOWERCASE", _[_.CAPITAL = 3] = "CAPITAL", _))(NA || {}), J_ = /* @__PURE__ */ ((_) => (_[_.DOCUMENT_CLASS_CODE = 0] = "DOCUMENT_CLASS_CODE", _[_.ISSUING_STATE_CODE = 1] = "ISSUING_STATE_CODE", _[_.DOCUMENT_NUMBER = 2] = "DOCUMENT_NUMBER", _[_.DATE_OF_EXPIRY = 3] = "DATE_OF_EXPIRY", _[_.DATE_OF_ISSUE = 4] = "DATE_OF_ISSUE", _[_.DATE_OF_BIRTH = 5] = "DATE_OF_BIRTH", _[_.PLACE_OF_BIRTH = 6] = "PLACE_OF_BIRTH", _[_.PERSONAL_NUMBER = 7] = "PERSONAL_NUMBER", _[_.SURNAME = 8] = "SURNAME", _[_.GIVEN_NAMES = 9] = "GIVEN_NAMES", _[_.MOTHERS_NAME = 10] = "MOTHERS_NAME", _[_.NATIONALITY = 11] = "NATIONALITY", _[_.SEX = 12] = "SEX", _[_.HEIGHT = 13] = "HEIGHT", _[_.WEIGHT = 14] = "WEIGHT", _[_.EYES_COLOR = 15] = "EYES_COLOR", _[_.HAIR_COLOR = 16] = "HAIR_COLOR", _[_.ADDRESS = 17] = "ADDRESS", _[_.DONOR = 18] = "DONOR", _[_.SOCIAL_SECURITY_NUMBER = 19] = "SOCIAL_SECURITY_NUMBER", _[_.DL_CLASS = 20] = "DL_CLASS", _[_.DL_ENDORSED = 21] = "DL_ENDORSED", _[_.DL_RESTRICTION_CODE = 22] = "DL_RESTRICTION_CODE", _[_.DL_UNDER_21_DATE = 23] = "DL_UNDER_21_DATE", _[_.AUTHORITY = 24] = "AUTHORITY", _[_.SURNAME_AND_GIVEN_NAMES = 25] = "SURNAME_AND_GIVEN_NAMES", _[_.NATIONALITY_CODE = 26] = "NATIONALITY_CODE", _[_.PASSPORT_NUMBER = 27] = "PASSPORT_NUMBER", _[_.INVITATION_NUMBER = 28] = "INVITATION_NUMBER", _[_.VISA_ID = 29] = "VISA_ID", _[_.VISA_CLASS = 30] = "VISA_CLASS", _[_.VISA_SUBCLASS = 31] = "VISA_SUBCLASS", _[_.MRZ_TYPE = 35] = "MRZ_TYPE", _[_.OPTIONAL_DATA = 36] = "OPTIONAL_DATA", _[_.DOCUMENT_CLASS_NAME = 37] = "DOCUMENT_CLASS_NAME", _[_.ISSUING_STATE_NAME = 38] = "ISSUING_STATE_NAME", _[_.PLACE_OF_ISSUE = 39] = "PLACE_OF_ISSUE", _[_.DOCUMENT_NUMBER_CHECKSUM = 40] = "DOCUMENT_NUMBER_CHECKSUM", _[_.DATE_OF_BIRTH_CHECKSUM = 41] = "DATE_OF_BIRTH_CHECKSUM", _[_.DATE_OF_EXPIRY_CHECKSUM = 42] = "DATE_OF_EXPIRY_CHECKSUM", _[_.PERSONAL_NUMBER_CHECKSUM = 43] = "PERSONAL_NUMBER_CHECKSUM", _[_.FINAL_CHECKSUM = 44] = "FINAL_CHECKSUM", _[_.PASSPORT_NUMBER_CHECKSUM = 45] = "PASSPORT_NUMBER_CHECKSUM", _[_.INVITATION_NUMBER_CHECKSUM = 46] = "INVITATION_NUMBER_CHECKSUM", _[_.VISA_ID_CHECKSUM = 47] = "VISA_ID_CHECKSUM", _[_.SURNAME_AND_GIVEN_NAMES_CHECKSUM = 48] = "SURNAME_AND_GIVEN_NAMES_CHECKSUM", _[_.VISA_VALID_UNTIL_CHECKSUM = 49] = "VISA_VALID_UNTIL_CHECKSUM", _[_.OTHER = 50] = "OTHER", _[_.MRZ_STRINGS = 51] = "MRZ_STRINGS", _[_.NAME_SUFFIX = 52] = "NAME_SUFFIX", _[_.NAME_PREFIX = 53] = "NAME_PREFIX", _[_.DATE_OF_ISSUE_CHECKSUM = 54] = "DATE_OF_ISSUE_CHECKSUM", _[_.DATE_OF_ISSUE_CHECK_DIGIT = 55] = "DATE_OF_ISSUE_CHECK_DIGIT", _[_.DOCUMENT_SERIES = 56] = "DOCUMENT_SERIES", _[_.REG_CERT_REG_NUMBER = 57] = "REG_CERT_REG_NUMBER", _[_.REG_CERT_CAR_MODEL = 58] = "REG_CERT_CAR_MODEL", _[_.REG_CERT_CAR_COLOR = 59] = "REG_CERT_CAR_COLOR", _[_.REG_CERT_BODY_NUMBER = 60] = "REG_CERT_BODY_NUMBER", _[_.REG_CERT_CAR_TYPE = 61] = "REG_CERT_CAR_TYPE", _[_.REG_CERT_MAX_WEIGHT = 62] = "REG_CERT_MAX_WEIGHT", _[_.REG_CERT_WEIGHT = 63] = "REG_CERT_WEIGHT", _[_.ADDRESS_AREA = 64] = "ADDRESS_AREA", _[_.ADDRESS_STATE = 65] = "ADDRESS_STATE", _[_.ADDRESS_BUILDING = 66] = "ADDRESS_BUILDING", _[_.ADDRESS_HOUSE = 67] = "ADDRESS_HOUSE", _[_.ADDRESS_FLAT = 68] = "ADDRESS_FLAT", _[_.PLACE_OF_REGISTRATION = 69] = "PLACE_OF_REGISTRATION", _[_.DATE_OF_REGISTRATION = 70] = "DATE_OF_REGISTRATION", _[_.RESIDENT_FROM = 71] = "RESIDENT_FROM", _[_.RESIDENT_UNTIL = 72] = "RESIDENT_UNTIL", _[_.AUTHORITY_CODE = 73] = "AUTHORITY_CODE", _[_.PLACE_OF_BIRTH_AREA = 74] = "PLACE_OF_BIRTH_AREA", _[_.PLACE_OF_BIRTH_STATE_CODE = 75] = "PLACE_OF_BIRTH_STATE_CODE", _[_.ADDRESS_STREET = 76] = "ADDRESS_STREET", _[_.ADDRESS_CITY = 77] = "ADDRESS_CITY", _[_.ADDRESS_JURISDICTION_CODE = 78] = "ADDRESS_JURISDICTION_CODE", _[_.ADDRESS_POSTAL_CODE = 79] = "ADDRESS_POSTAL_CODE", _[_.DOCUMENT_NUMBER_CHECK_DIGIT = 80] = "DOCUMENT_NUMBER_CHECK_DIGIT", _[_.DATE_OF_BIRTH_CHECK_DIGIT = 81] = "DATE_OF_BIRTH_CHECK_DIGIT", _[_.DATE_OF_EXPIRY_CHECK_DIGIT = 82] = "DATE_OF_EXPIRY_CHECK_DIGIT", _[_.PERSONAL_NUMBER_CHECK_DIGIT = 83] = "PERSONAL_NUMBER_CHECK_DIGIT", _[_.FINAL_CHECK_DIGIT = 84] = "FINAL_CHECK_DIGIT", _[_.PASSPORT_NUMBER_CHECK_DIGIT = 85] = "PASSPORT_NUMBER_CHECK_DIGIT", _[_.INVITATION_NUMBER_CHECK_DIGIT = 86] = "INVITATION_NUMBER_CHECK_DIGIT", _[_.VISA_ID_CHECK_DIGIT = 87] = "VISA_ID_CHECK_DIGIT", _[_.SURNAME_AND_GIVEN_NAMES_CHECK_DIGIT = 88] = "SURNAME_AND_GIVEN_NAMES_CHECK_DIGIT", _[_.VISA_VALID_UNTIL_CHECK_DIGIT = 89] = "VISA_VALID_UNTIL_CHECK_DIGIT", _[_.PERMIT_DL_CLASS = 90] = "PERMIT_DL_CLASS", _[_.PERMIT_DATE_OF_EXPIRY = 91] = "PERMIT_DATE_OF_EXPIRY", _[_.PERMIT_IDENTIFIER = 92] = "PERMIT_IDENTIFIER", _[_.PERMIT_DATE_OF_ISSUE = 93] = "PERMIT_DATE_OF_ISSUE", _[_.PERMIT_RESTRICTION_CODE = 94] = "PERMIT_RESTRICTION_CODE", _[_.PERMIT_ENDORSED = 95] = "PERMIT_ENDORSED", _[_.ISSUE_TIMESTAMP = 96] = "ISSUE_TIMESTAMP", _[_.NUMBER_OF_DUPLICATES = 97] = "NUMBER_OF_DUPLICATES", _[_.MEDICAL_INDICATOR_CODES = 98] = "MEDICAL_INDICATOR_CODES", _[_.NON_RESIDENT_INDICATOR = 99] = "NON_RESIDENT_INDICATOR", _[_.VISA_TYPE = 100] = "VISA_TYPE", _[_.VISA_VALID_FROM = 101] = "VISA_VALID_FROM", _[_.VISA_VALID_UNTIL = 102] = "VISA_VALID_UNTIL", _[_.DURATION_OF_STAY = 103] = "DURATION_OF_STAY", _[_.NUMBER_OF_ENTRIES = 104] = "NUMBER_OF_ENTRIES", _[_.DAY = 105] = "DAY", _[_.MONTH = 106] = "MONTH", _[_.YEAR = 107] = "YEAR", _[_.UNIQUE_CUSTOMER_IDENTIFIER = 108] = "UNIQUE_CUSTOMER_IDENTIFIER", _[_.COMMERCIAL_VEHICLE_CODES = 109] = "COMMERCIAL_VEHICLE_CODES", _[_.AKA_DATE_OF_BIRTH = 110] = "AKA_DATE_OF_BIRTH", _[_.AKA_SOCIAL_SECURITY_NUMBER = 111] = "AKA_SOCIAL_SECURITY_NUMBER", _[_.AKA_SURNAME = 112] = "AKA_SURNAME", _[_.AKA_GIVEN_NAMES = 113] = "AKA_GIVEN_NAMES", _[_.AKA_NAME_SUFFIX = 114] = "AKA_NAME_SUFFIX", _[_.AKA_NAME_PREFIX = 115] = "AKA_NAME_PREFIX", _[_.MAILING_ADDRESS_STREET = 116] = "MAILING_ADDRESS_STREET", _[_.MAILING_ADDRESS_CITY = 117] = "MAILING_ADDRESS_CITY", _[_.MAILING_ADDRESS_JURISDICTION_CODE = 118] = "MAILING_ADDRESS_JURISDICTION_CODE", _[_.MAILING_ADDRESS_POSTAL_CODE = 119] = "MAILING_ADDRESS_POSTAL_CODE", _[_.AUDIT_INFORMATION = 120] = "AUDIT_INFORMATION", _[_.INVENTORY_NUMBER = 121] = "INVENTORY_NUMBER", _[_.RACE_ETHNICITY = 122] = "RACE_ETHNICITY", _[_.JURISDICTION_VEHICLE_CLASS = 123] = "JURISDICTION_VEHICLE_CLASS", _[_.JURISDICTION_ENDORSEMENT_CODE = 124] = "JURISDICTION_ENDORSEMENT_CODE", _[_.JURISDICTION_RESTRICTION_CODE = 125] = "JURISDICTION_RESTRICTION_CODE", _[_.FAMILY_NAME = 126] = "FAMILY_NAME", _[_.GIVEN_NAMES_RUS = 127] = "GIVEN_NAMES_RUS", _[_.VISA_ID_RUS = 128] = "VISA_ID_RUS", _[_.FATHERS_NAME = 129] = "FATHERS_NAME", _[_.FATHERS_NAME_RUS = 130] = "FATHERS_NAME_RUS", _[_.SURNAME_AND_GIVEN_NAMES_RUS = 131] = "SURNAME_AND_GIVEN_NAMES_RUS", _[_.PLACE_OF_BIRTH_RUS = 132] = "PLACE_OF_BIRTH_RUS", _[_.AUTHORITY_RUS = 133] = "AUTHORITY_RUS", _[_.ISSUING_STATE_CODE_NUMERIC = 134] = "ISSUING_STATE_CODE_NUMERIC", _[_.NATIONALITY_CODE_NUMERIC = 135] = "NATIONALITY_CODE_NUMERIC", _[_.ENGINE_POWER = 136] = "ENGINE_POWER", _[_.ENGINE_VOLUME = 137] = "ENGINE_VOLUME", _[_.CHASSIS_NUMBER = 138] = "CHASSIS_NUMBER", _[_.ENGINE_NUMBER = 139] = "ENGINE_NUMBER", _[_.ENGINE_MODEL = 140] = "ENGINE_MODEL", _[_.VEHICLE_CATEGORY = 141] = "VEHICLE_CATEGORY", _[_.IDENTITY_CARD_NUMBER = 142] = "IDENTITY_CARD_NUMBER", _[_.CONTROL_NUMBER = 143] = "CONTROL_NUMBER", _[_.PARENTS_GIVEN_NAMES = 144] = "PARENTS_GIVEN_NAMES", _[_.SECOND_SURNAME = 145] = "SECOND_SURNAME", _[_.MIDDLE_NAME = 146] = "MIDDLE_NAME", _[_.REG_CERT_VIN = 147] = "REG_CERT_VIN", _[_.REG_CERT_VIN_CHECK_DIGIT = 148] = "REG_CERT_VIN_CHECK_DIGIT", _[_.REG_CERT_VIN_CHECKSUM = 149] = "REG_CERT_VIN_CHECKSUM", _[_.LINE_1_CHECK_DIGIT = 150] = "LINE_1_CHECK_DIGIT", _[_.LINE_2_CHECK_DIGIT = 151] = "LINE_2_CHECK_DIGIT", _[_.LINE_3_CHECK_DIGIT = 152] = "LINE_3_CHECK_DIGIT", _[_.LINE_1_CHECKSUM = 153] = "LINE_1_CHECKSUM", _[_.LINE_2_CHECKSUM = 154] = "LINE_2_CHECKSUM", _[_.LINE_3_CHECKSUM = 155] = "LINE_3_CHECKSUM", _[_.REG_CERT_REG_NUMBER_CHECK_DIGIT = 156] = "REG_CERT_REG_NUMBER_CHECK_DIGIT", _[_.REG_CERT_REG_NUMBER_CHECKSUM = 157] = "REG_CERT_REG_NUMBER_CHECKSUM", _[_.REG_CERT_VEHICLE_ITS_CODE = 158] = "REG_CERT_VEHICLE_ITS_CODE", _[_.CARD_ACCESS_NUMBER = 159] = "CARD_ACCESS_NUMBER", _[_.MARITAL_STATUS = 160] = "MARITAL_STATUS", _[_.COMPANY_NAME = 161] = "COMPANY_NAME", _[_.SPECIAL_NOTES = 162] = "SPECIAL_NOTES", _[_.SURNAME_OF_SPOUSE = 163] = "SURNAME_OF_SPOUSE", _[_.TRACKING_NUMBER = 164] = "TRACKING_NUMBER", _[_.BOOKLET_NUMBER = 165] = "BOOKLET_NUMBER", _[_.CHILDREN = 166] = "CHILDREN", _[_.COPY = 167] = "COPY", _[_.SERIAL_NUMBER = 168] = "SERIAL_NUMBER", _[_.DOSSIER_NUMBER = 169] = "DOSSIER_NUMBER", _[_.AKA_SURNAME_AND_GIVEN_NAMES = 170] = "AKA_SURNAME_AND_GIVEN_NAMES", _[_.TERRITORIAL_VALIDITY = 171] = "TERRITORIAL_VALIDITY", _[_.MRZ_STRINGS_WITH_CORRECT_CHECK_SUMS = 172] = "MRZ_STRINGS_WITH_CORRECT_CHECK_SUMS", _[_.DL_CDL_RESTRICTION_CODE = 173] = "DL_CDL_RESTRICTION_CODE", _[_.DL_UNDER_18_DATE = 174] = "DL_UNDER_18_DATE", _[_.DL_RECORD_CREATED = 175] = "DL_RECORD_CREATED", _[_.DL_DUPLICATE_DATE = 176] = "DL_DUPLICATE_DATE", _[_.DL_ISSUE_TYPE = 177] = "DL_ISSUE_TYPE", _[_.MILITARY_BOOK_NUMBER = 178] = "MILITARY_BOOK_NUMBER", _[_.DESTINATION = 179] = "DESTINATION", _[_.BLOOD_GROUP = 180] = "BLOOD_GROUP", _[_.SEQUENCE_NUMBER = 181] = "SEQUENCE_NUMBER", _[_.REG_CERT_BODY_TYPE = 182] = "REG_CERT_BODY_TYPE", _[_.REG_CERT_CAR_MARK = 183] = "REG_CERT_CAR_MARK", _[_.TRANSACTION_NUMBER = 184] = "TRANSACTION_NUMBER", _[_.AGE = 185] = "AGE", _[_.FOLIO_NUMBER = 186] = "FOLIO_NUMBER", _[_.VOTER_KEY = 187] = "VOTER_KEY", _[_.ADDRESS_MUNICIPALITY = 188] = "ADDRESS_MUNICIPALITY", _[_.ADDRESS_LOCATION = 189] = "ADDRESS_LOCATION", _[_.SECTION = 190] = "SECTION", _[_.OCR_NUMBER = 191] = "OCR_NUMBER", _[_.FEDERAL_ELECTIONS = 192] = "FEDERAL_ELECTIONS", _[_.REFERENCE_NUMBER = 193] = "REFERENCE_NUMBER", _[_.OPTIONAL_DATA_CHECKSUM = 194] = "OPTIONAL_DATA_CHECKSUM", _[_.OPTIONAL_DATA_CHECK_DIGIT = 195] = "OPTIONAL_DATA_CHECK_DIGIT", _[_.VISA_NUMBER = 196] = "VISA_NUMBER", _[_.VISA_NUMBER_CHECKSUM = 197] = "VISA_NUMBER_CHECKSUM", _[_.VISA_NUMBER_CHECK_DIGIT = 198] = "VISA_NUMBER_CHECK_DIGIT", _[_.VOTER = 199] = "VOTER", _[_.PREVIOUS_TYPE = 200] = "PREVIOUS_TYPE", _[_.FIELD_FROM_MRZ = 220] = "FIELD_FROM_MRZ", _[_.CURRENT_DATE = 221] = "CURRENT_DATE", _[_.STATUS_DATE_OF_EXPIRY = 251] = "STATUS_DATE_OF_EXPIRY", _[_.BANKNOTE_NUMBER = 252] = "BANKNOTE_NUMBER", _[_.CSC_CODE = 253] = "CSC_CODE", _[_.ARTISTIC_NAME = 254] = "ARTISTIC_NAME", _[_.ACADEMIC_TITLE = 255] = "ACADEMIC_TITLE", _[_.ADDRESS_COUNTRY = 256] = "ADDRESS_COUNTRY", _[_.ADDRESS_ZIP_CODE = 257] = "ADDRESS_ZIP_CODE", _[_.E_ID_RESIDENCE_PERMIT_1 = 258] = "E_ID_RESIDENCE_PERMIT_1", _[_.E_ID_RESIDENCE_PERMIT_2 = 259] = "E_ID_RESIDENCE_PERMIT_2", _[_.E_ID_PLACE_OF_BIRTH_STREET = 260] = "E_ID_PLACE_OF_BIRTH_STREET", _[_.E_ID_PLACE_OF_BIRTH_CITY = 261] = "E_ID_PLACE_OF_BIRTH_CITY", _[_.E_ID_PLACE_OF_BIRTH_STATE = 262] = "E_ID_PLACE_OF_BIRTH_STATE", _[_.E_ID_PLACE_OF_BIRTH_COUNTRY = 263] = "E_ID_PLACE_OF_BIRTH_COUNTRY", _[_.E_ID_PLACE_OF_BIRTH_ZIP_CODE = 264] = "E_ID_PLACE_OF_BIRTH_ZIP_CODE", _[_.CDL_CLASS = 265] = "CDL_CLASS", _[_.DL_UNDER_19_DATE = 266] = "DL_UNDER_19_DATE", _[_.WEIGHT_POUNDS = 267] = "WEIGHT_POUNDS", _[_.LIMITED_DURATION_DOCUMENT_INDICATOR = 268] = "LIMITED_DURATION_DOCUMENT_INDICATOR", _[_.ENDORSEMENT_EXPIRATION_DATE = 269] = "ENDORSEMENT_EXPIRATION_DATE", _[_.REVISION_DATE = 270] = "REVISION_DATE", _[_.COMPLIANCE_TYPE = 271] = "COMPLIANCE_TYPE", _[_.FAMILY_NAME_TRUNCATION = 272] = "FAMILY_NAME_TRUNCATION", _[_.FIRST_NAME_TRUNCATION = 273] = "FIRST_NAME_TRUNCATION", _[_.MIDDLE_NAME_TRUNCATION = 274] = "MIDDLE_NAME_TRUNCATION", _[_.EXAM_DATE = 275] = "EXAM_DATE", _[_.ORGANIZATION = 276] = "ORGANIZATION", _[_.DEPARTMENT = 277] = "DEPARTMENT", _[_.PAY_GRADE = 278] = "PAY_GRADE", _[_.RANK = 279] = "RANK", _[_.BENEFITS_NUMBER = 280] = "BENEFITS_NUMBER", _[_.SPONSOR_SERVICE = 281] = "SPONSOR_SERVICE", _[_.SPONSOR_STATUS = 282] = "SPONSOR_STATUS", _[_.SPONSOR = 283] = "SPONSOR", _[_.RELATIONSHIP = 284] = "RELATIONSHIP", _[_.USCIS = 285] = "USCIS", _[_.CATEGORY = 286] = "CATEGORY", _[_.CONDITIONS = 287] = "CONDITIONS", _[_.IDENTIFIER = 288] = "IDENTIFIER", _[_.CONFIGURATION = 289] = "CONFIGURATION", _[_.DISCRETIONARY_DATA = 290] = "DISCRETIONARY_DATA", _[_.LINE_1_OPTIONAL_DATA = 291] = "LINE_1_OPTIONAL_DATA", _[_.LINE_2_OPTIONAL_DATA = 292] = "LINE_2_OPTIONAL_DATA", _[_.LINE_3_OPTIONAL_DATA = 293] = "LINE_3_OPTIONAL_DATA", _[_.EQV_CODE = 294] = "EQV_CODE", _[_.ALT_CODE = 295] = "ALT_CODE", _[_.BINARY_CODE = 296] = "BINARY_CODE", _[_.PSEUDO_CODE = 297] = "PSEUDO_CODE", _[_.FEE = 298] = "FEE", _[_.STAMP_NUMBER = 299] = "STAMP_NUMBER", _[_.SBH_SECURITY_OPTIONS = 300] = "SBH_SECURITY_OPTIONS", _[_.SBH_INTEGRITY_OPTIONS = 301] = "SBH_INTEGRITY_OPTIONS", _[_.DATE_OF_CREATION = 302] = "DATE_OF_CREATION", _[_.VALIDITY_PERIOD = 303] = "VALIDITY_PERIOD", _[_.PATRON_HEADER_VERSION = 304] = "PATRON_HEADER_VERSION", _[_.BDB_TYPE = 305] = "BDB_TYPE", _[_.BIOMETRIC_TYPE = 306] = "BIOMETRIC_TYPE", _[_.BIOMETRIC_SUBTYPE = 307] = "BIOMETRIC_SUBTYPE", _[_.BIOMETRIC_PRODUCT_ID = 308] = "BIOMETRIC_PRODUCT_ID", _[_.BIOMETRIC_FORMAT_OWNER = 309] = "BIOMETRIC_FORMAT_OWNER", _[_.BIOMETRIC_FORMAT_TYPE = 310] = "BIOMETRIC_FORMAT_TYPE", _[_.PHONE = 311] = "PHONE", _[_.PROFESSION = 312] = "PROFESSION", _[_.TITLE = 313] = "TITLE", _[_.PERSONAL_SUMMARY = 314] = "PERSONAL_SUMMARY", _[_.OTHER_VALID_ID = 315] = "OTHER_VALID_ID", _[_.CUSTODY_INFO = 316] = "CUSTODY_INFO", _[_.OTHER_NAME = 317] = "OTHER_NAME", _[_.OBSERVATIONS = 318] = "OBSERVATIONS", _[_.TAX = 319] = "TAX", _[_.DATE_OF_PERSONALIZATION = 320] = "DATE_OF_PERSONALIZATION", _[_.PERSONALIZATION_SN = 321] = "PERSONALIZATION_SN", _[_.OTHER_PERSON_NAME = 322] = "OTHER_PERSON_NAME", _[_.PERSON_TO_NOTIFY_DATE_OF_RECORD = 323] = "PERSON_TO_NOTIFY_DATE_OF_RECORD", _[_.PERSON_TO_NOTIFY_NAME = 324] = "PERSON_TO_NOTIFY_NAME", _[_.PERSON_TO_NOTIFY_PHONE = 325] = "PERSON_TO_NOTIFY_PHONE", _[_.PERSON_TO_NOTIFY_ADDRESS = 326] = "PERSON_TO_NOTIFY_ADDRESS", _[_.DS_CERTIFICATE_ISSUER = 327] = "DS_CERTIFICATE_ISSUER", _[_.DS_CERTIFICATE_SUBJECT = 328] = "DS_CERTIFICATE_SUBJECT", _[_.DS_CERTIFICATE_VALID_FROM = 329] = "DS_CERTIFICATE_VALID_FROM", _[_.DS_CERTIFICATE_VALID_TO = 330] = "DS_CERTIFICATE_VALID_TO", _[_.VRC_DATA_OBJECT_ENTRY = 331] = "VRC_DATA_OBJECT_ENTRY", _[_.TYPE_APPROVAL_NUMBER = 332] = "TYPE_APPROVAL_NUMBER", _[_.ADMINISTRATIVE_NUMBER = 333] = "ADMINISTRATIVE_NUMBER", _[_.DOCUMENT_DISCRIMINATOR = 334] = "DOCUMENT_DISCRIMINATOR", _[_.DATA_DISCRIMINATOR = 335] = "DATA_DISCRIMINATOR", _[_.ISO_ISSUER_ID_NUMBER = 336] = "ISO_ISSUER_ID_NUMBER", _[_.GNIB_NUMBER = 340] = "GNIB_NUMBER", _[_.DEPT_NUMBER = 341] = "DEPT_NUMBER", _[_.TELEX_CODE = 342] = "TELEX_CODE", _[_.ALLERGIES = 343] = "ALLERGIES", _[_.SP_CODE = 344] = "SP_CODE", _[_.COURT_CODE = 345] = "COURT_CODE", _[_.CTY = 346] = "CTY", _[_.SPONSOR_SSN = 347] = "SPONSOR_SSN", _[_.DOD_NUMBER = 348] = "DOD_NUMBER", _[_.MC_NOVICE_DATE = 349] = "MC_NOVICE_DATE", _[_.DUF_NUMBER = 350] = "DUF_NUMBER", _[_.AGY = 351] = "AGY", _[_.PNR_CODE = 352] = "PNR_CODE", _[_.FROM_AIRPORT_CODE = 353] = "FROM_AIRPORT_CODE", _[_.TO_AIRPORT_CODE = 354] = "TO_AIRPORT_CODE", _[_.FLIGHT_NUMBER = 355] = "FLIGHT_NUMBER", _[_.DATE_OF_FLIGHT = 356] = "DATE_OF_FLIGHT", _[_.SEAT_NUMBER = 357] = "SEAT_NUMBER", _[_.DATE_OF_ISSUE_BOARDING_PASS = 358] = "DATE_OF_ISSUE_BOARDING_PASS", _[_.CCW_UNTIL = 359] = "CCW_UNTIL", _[_.REFERENCE_NUMBER_CHECKSUM = 360] = "REFERENCE_NUMBER_CHECKSUM", _[_.REFERENCE_NUMBER_CHECK_DIGIT = 361] = "REFERENCE_NUMBER_CHECK_DIGIT", _[_.ROOM_NUMBER = 362] = "ROOM_NUMBER", _[_.RELIGION = 363] = "RELIGION", _[_.REMAINDER_TERM = 364] = "REMAINDER_TERM", _[_.ELECTRONIC_TICKET_INDICATOR = 365] = "ELECTRONIC_TICKET_INDICATOR", _[_.COMPARTMENT_CODE = 366] = "COMPARTMENT_CODE", _[_.CHECK_IN_SEQUENCE_NUMBER = 367] = "CHECK_IN_SEQUENCE_NUMBER", _[_.AIRLINE_DESIGNATOR_OF_BOARDING_PASS_ISSUER = 368] = "AIRLINE_DESIGNATOR_OF_BOARDING_PASS_ISSUER", _[_.AIRLINE_NUMERIC_CODE = 369] = "AIRLINE_NUMERIC_CODE", _[_.TICKET_NUMBER = 370] = "TICKET_NUMBER", _[_.FREQUENT_FLYER_AIRLINE_DESIGNATOR = 371] = "FREQUENT_FLYER_AIRLINE_DESIGNATOR", _[_.FREQUENT_FLYER_NUMBER = 372] = "FREQUENT_FLYER_NUMBER", _[_.FREE_BAGGAGE_ALLOWANCE = 373] = "FREE_BAGGAGE_ALLOWANCE", _[_.PDF417_CODEC = 374] = "PDF417_CODEC", _[_.IDENTITY_CARD_NUMBER_CHECKSUM = 375] = "IDENTITY_CARD_NUMBER_CHECKSUM", _[_.IDENTITY_CARD_NUMBER_CHECK_DIGIT = 376] = "IDENTITY_CARD_NUMBER_CHECK_DIGIT", _[_.VETERAN = 377] = "VETERAN", _[_.DL_CLASS_CODE_A1_FROM = 378] = "DL_CLASS_CODE_A1_FROM", _[_.DL_CLASS_CODE_A1_TO = 379] = "DL_CLASS_CODE_A1_TO", _[_.DL_CLASS_CODE_A1_NOTES = 380] = "DL_CLASS_CODE_A1_NOTES", _[_.DL_CLASS_CODE_A_FROM = 381] = "DL_CLASS_CODE_A_FROM", _[_.DL_CLASS_CODE_A_TO = 382] = "DL_CLASS_CODE_A_TO", _[_.DL_CLASS_CODE_A_NOTES = 383] = "DL_CLASS_CODE_A_NOTES", _[_.DL_CLASS_CODE_B_FROM = 384] = "DL_CLASS_CODE_B_FROM", _[_.DL_CLASS_CODE_B_TO = 385] = "DL_CLASS_CODE_B_TO", _[_.DL_CLASS_CODE_B_NOTES = 386] = "DL_CLASS_CODE_B_NOTES", _[_.DL_CLASS_CODE_C1_FROM = 387] = "DL_CLASS_CODE_C1_FROM", _[_.DL_CLASS_CODE_C1_TO = 388] = "DL_CLASS_CODE_C1_TO", _[_.DL_CLASS_CODE_C1_NOTES = 389] = "DL_CLASS_CODE_C1_NOTES", _[_.DL_CLASS_CODE_C_FROM = 390] = "DL_CLASS_CODE_C_FROM", _[_.DL_CLASS_CODE_C_TO = 391] = "DL_CLASS_CODE_C_TO", _[_.DL_CLASS_CODE_C_NOTES = 392] = "DL_CLASS_CODE_C_NOTES", _[_.DL_CLASS_CODE_D1_FROM = 393] = "DL_CLASS_CODE_D1_FROM", _[_.DL_CLASS_CODE_D1_TO = 394] = "DL_CLASS_CODE_D1_TO", _[_.DL_CLASS_CODE_D1_NOTES = 395] = "DL_CLASS_CODE_D1_NOTES", _[_.DL_CLASS_CODE_D_FROM = 396] = "DL_CLASS_CODE_D_FROM", _[_.DL_CLASS_CODE_D_TO = 397] = "DL_CLASS_CODE_D_TO", _[_.DL_CLASS_CODE_D_NOTES = 398] = "DL_CLASS_CODE_D_NOTES", _[_.DL_CLASS_CODE_BE_FROM = 399] = "DL_CLASS_CODE_BE_FROM", _[_.DL_CLASS_CODE_BE_TO = 400] = "DL_CLASS_CODE_BE_TO", _[_.DL_CLASS_CODE_BE_NOTES = 401] = "DL_CLASS_CODE_BE_NOTES", _[_.DL_CLASS_CODE_C1E_FROM = 402] = "DL_CLASS_CODE_C1E_FROM", _[_.DL_CLASS_CODE_C1E_TO = 403] = "DL_CLASS_CODE_C1E_TO", _[_.DL_CLASS_CODE_C1E_NOTES = 404] = "DL_CLASS_CODE_C1E_NOTES", _[_.DL_CLASS_CODE_CE_FROM = 405] = "DL_CLASS_CODE_CE_FROM", _[_.DL_CLASS_CODE_CE_TO = 406] = "DL_CLASS_CODE_CE_TO", _[_.DL_CLASS_CODE_CE_NOTES = 407] = "DL_CLASS_CODE_CE_NOTES", _[_.DL_CLASS_CODE_D1E_FROM = 408] = "DL_CLASS_CODE_D1E_FROM", _[_.DL_CLASS_CODE_D1E_TO = 409] = "DL_CLASS_CODE_D1E_TO", _[_.DL_CLASS_CODE_D1E_NOTES = 410] = "DL_CLASS_CODE_D1E_NOTES", _[_.DL_CLASS_CODE_DE_FROM = 411] = "DL_CLASS_CODE_DE_FROM", _[_.DL_CLASS_CODE_DE_TO = 412] = "DL_CLASS_CODE_DE_TO", _[_.DL_CLASS_CODE_DE_NOTES = 413] = "DL_CLASS_CODE_DE_NOTES", _[_.DL_CLASS_CODE_M_FROM = 414] = "DL_CLASS_CODE_M_FROM", _[_.DL_CLASS_CODE_M_TO = 415] = "DL_CLASS_CODE_M_TO", _[_.DL_CLASS_CODE_M_NOTES = 416] = "DL_CLASS_CODE_M_NOTES", _[_.DL_CLASS_CODE_L_FROM = 417] = "DL_CLASS_CODE_L_FROM", _[_.DL_CLASS_CODE_L_TO = 418] = "DL_CLASS_CODE_L_TO", _[_.DL_CLASS_CODE_L_NOTES = 419] = "DL_CLASS_CODE_L_NOTES", _[_.DL_CLASS_CODE_T_FROM = 420] = "DL_CLASS_CODE_T_FROM", _[_.DL_CLASS_CODE_T_TO = 421] = "DL_CLASS_CODE_T_TO", _[_.DL_CLASS_CODE_T_NOTES = 422] = "DL_CLASS_CODE_T_NOTES", _[_.DL_CLASS_CODE_AM_FROM = 423] = "DL_CLASS_CODE_AM_FROM", _[_.DL_CLASS_CODE_AM_TO = 424] = "DL_CLASS_CODE_AM_TO", _[_.DL_CLASS_CODE_AM_NOTES = 425] = "DL_CLASS_CODE_AM_NOTES", _[_.DL_CLASS_CODE_A2_FROM = 426] = "DL_CLASS_CODE_A2_FROM", _[_.DL_CLASS_CODE_A2_TO = 427] = "DL_CLASS_CODE_A2_TO", _[_.DL_CLASS_CODE_A2_NOTES = 428] = "DL_CLASS_CODE_A2_NOTES", _[_.DL_CLASS_CODE_B1_FROM = 429] = "DL_CLASS_CODE_B1_FROM", _[_.DL_CLASS_CODE_B1_TO = 430] = "DL_CLASS_CODE_B1_TO", _[_.DL_CLASS_CODE_B1_NOTES = 431] = "DL_CLASS_CODE_B1_NOTES", _[_.SURNAME_AT_BIRTH = 432] = "SURNAME_AT_BIRTH", _[_.CIVIL_STATUS = 433] = "CIVIL_STATUS", _[_.NUMBER_OF_SEATS = 434] = "NUMBER_OF_SEATS", _[_.NUMBER_OF_STANDING_PLACES = 435] = "NUMBER_OF_STANDING_PLACES", _[_.MAX_SPEED = 436] = "MAX_SPEED", _[_.FUEL_TYPE = 437] = "FUEL_TYPE", _[_.EC_ENVIRONMENTAL_TYPE = 438] = "EC_ENVIRONMENTAL_TYPE", _[_.POWER_WEIGHT_RATIO = 439] = "POWER_WEIGHT_RATIO", _[_.MAX_MASS_OF_TRAILER_BRAKED = 440] = "MAX_MASS_OF_TRAILER_BRAKED", _[_.MAX_MASS_OF_TRAILER_UNBRAKED = 441] = "MAX_MASS_OF_TRAILER_UNBRAKED", _[_.TRANSMISSION_TYPE = 442] = "TRANSMISSION_TYPE", _[_.TRAILER_HITCH = 443] = "TRAILER_HITCH", _[_.ACCOMPANIED_BY = 444] = "ACCOMPANIED_BY", _[_.POLICE_DISTRICT = 445] = "POLICE_DISTRICT", _[_.FIRST_ISSUE_DATE = 446] = "FIRST_ISSUE_DATE", _[_.PAYLOAD_CAPACITY = 447] = "PAYLOAD_CAPACITY", _[_.NUMBER_OF_AXLES = 448] = "NUMBER_OF_AXLES", _[_.PERMISSIBLE_AXLE_LOAD = 449] = "PERMISSIBLE_AXLE_LOAD", _[_.PRECINCT = 450] = "PRECINCT", _[_.INVITED_BY = 451] = "INVITED_BY", _[_.PURPOSE_OF_ENTRY = 452] = "PURPOSE_OF_ENTRY", _[_.SKIN_COLOR = 453] = "SKIN_COLOR", _[_.COMPLEXION = 454] = "COMPLEXION", _[_.AIRPORT_FROM = 455] = "AIRPORT_FROM", _[_.AIRPORT_TO = 456] = "AIRPORT_TO", _[_.AIRLINE_NAME = 457] = "AIRLINE_NAME", _[_.AIRLINE_NAME_FREQUENT_FLYER = 458] = "AIRLINE_NAME_FREQUENT_FLYER", _[_.LICENSE_NUMBER = 459] = "LICENSE_NUMBER", _[_.IN_TANKS = 460] = "IN_TANKS", _[_.EXCEPT_IN_TANKS = 461] = "EXCEPT_IN_TANKS", _[_.FAST_TRACK = 462] = "FAST_TRACK", _[_.OWNER = 463] = "OWNER", _[_.MRZ_STRINGS_ICAO_RFID = 464] = "MRZ_STRINGS_ICAO_RFID", _[_.NUMBER_OF_CARD_ISSUANCE = 465] = "NUMBER_OF_CARD_ISSUANCE", _[_.NUMBER_OF_CARD_ISSUANCE_CHECKSUM = 466] = "NUMBER_OF_CARD_ISSUANCE_CHECKSUM", _[_.NUMBER_OF_CARD_ISSUANCE_CHECK_DIGIT = 467] = "NUMBER_OF_CARD_ISSUANCE_CHECK_DIGIT", _[_.CENTURY_DATE_OF_BIRTH = 468] = "CENTURY_DATE_OF_BIRTH", _[_.DL_CLASS_CODE_A3_FROM = 469] = "DL_CLASS_CODE_A3_FROM", _[_.DL_CLASS_CODE_A3_TO = 470] = "DL_CLASS_CODE_A3_TO", _[_.DL_CLASS_CODE_A3_NOTES = 471] = "DL_CLASS_CODE_A3_NOTES", _[_.DL_CLASS_CODE_C2_FROM = 472] = "DL_CLASS_CODE_C2_FROM", _[_.DL_CLASS_CODE_C2_TO = 473] = "DL_CLASS_CODE_C2_TO", _[_.DL_CLASS_CODE_C2_NOTES = 474] = "DL_CLASS_CODE_C2_NOTES", _[_.DL_CLASS_CODE_B2_FROM = 475] = "DL_CLASS_CODE_B2_FROM", _[_.DL_CLASS_CODE_B2_TO = 476] = "DL_CLASS_CODE_B2_TO", _[_.DL_CLASS_CODE_B2_NOTES = 477] = "DL_CLASS_CODE_B2_NOTES", _[_.DL_CLASS_CODE_D2_FROM = 478] = "DL_CLASS_CODE_D2_FROM", _[_.DL_CLASS_CODE_D2_TO = 479] = "DL_CLASS_CODE_D2_TO", _[_.DL_CLASS_CODE_D2_NOTES = 480] = "DL_CLASS_CODE_D2_NOTES", _[_.DL_CLASS_CODE_B2E_FROM = 481] = "DL_CLASS_CODE_B2E_FROM", _[_.DL_CLASS_CODE_B2E_TO = 482] = "DL_CLASS_CODE_B2E_TO", _[_.DL_CLASS_CODE_B2E_NOTES = 483] = "DL_CLASS_CODE_B2E_NOTES", _[_.DL_CLASS_CODE_G_FROM = 484] = "DL_CLASS_CODE_G_FROM", _[_.DL_CLASS_CODE_G_TO = 485] = "DL_CLASS_CODE_G_TO", _[_.DL_CLASS_CODE_G_NOTES = 486] = "DL_CLASS_CODE_G_NOTES", _[_.DL_CLASS_CODE_J_FROM = 487] = "DL_CLASS_CODE_J_FROM", _[_.DL_CLASS_CODE_J_TO = 488] = "DL_CLASS_CODE_J_TO", _[_.DL_CLASS_CODE_J_NOTES = 489] = "DL_CLASS_CODE_J_NOTES", _[_.DL_CLASS_CODE_LC_FROM = 490] = "DL_CLASS_CODE_LC_FROM", _[_.DL_CLASS_CODE_LC_TO = 491] = "DL_CLASS_CODE_LC_TO", _[_.DL_CLASS_CODE_LC_NOTES = 492] = "DL_CLASS_CODE_LC_NOTES", _[_.BANK_CARD_NUMBER = 493] = "BANK_CARD_NUMBER", _[_.BANK_CARD_VALID_THRU = 494] = "BANK_CARD_VALID_THRU", _[_.TAX_NUMBER = 495] = "TAX_NUMBER", _[_.HEALTH_NUMBER = 496] = "HEALTH_NUMBER", _[_.GRANDFATHER_NAME = 497] = "GRANDFATHER_NAME", _[_.SELECTEE_INDICATOR = 498] = "SELECTEE_INDICATOR", _[_.MOTHER_SURNAME = 499] = "MOTHER_SURNAME", _[_.MOTHER_GIVEN_NAME = 500] = "MOTHER_GIVEN_NAME", _[_.FATHER_SURNAME = 501] = "FATHER_SURNAME", _[_.FATHER_GIVEN_NAME = 502] = "FATHER_GIVEN_NAME", _[_.MOTHER_DATE_OF_BIRTH = 503] = "MOTHER_DATE_OF_BIRTH", _[_.FATHER_DATE_OF_BIRTH = 504] = "FATHER_DATE_OF_BIRTH", _[_.MOTHER_PERSONAL_NUMBER = 505] = "MOTHER_PERSONAL_NUMBER", _[_.FATHER_PERSONAL_NUMBER = 506] = "FATHER_PERSONAL_NUMBER", _[_.MOTHER_PLACE_OF_BIRTH = 507] = "MOTHER_PLACE_OF_BIRTH", _[_.FATHER_PLACE_OF_BIRTH = 508] = "FATHER_PLACE_OF_BIRTH", _[_.MOTHER_COUNTRY_OF_BIRTH = 509] = "MOTHER_COUNTRY_OF_BIRTH", _[_.FATHER_COUNTRY_OF_BIRTH = 510] = "FATHER_COUNTRY_OF_BIRTH", _[_.DATE_FIRST_RENEWAL = 511] = "DATE_FIRST_RENEWAL", _[_.DATE_SECOND_RENEWAL = 512] = "DATE_SECOND_RENEWAL", _[_.PLACE_OF_EXAMINATION = 513] = "PLACE_OF_EXAMINATION", _[_.APPLICATION_NUMBER = 514] = "APPLICATION_NUMBER", _[_.VOUCHER_NUMBER = 515] = "VOUCHER_NUMBER", _[_.AUTHORIZATION_NUMBER = 516] = "AUTHORIZATION_NUMBER", _[_.FACULTY = 517] = "FACULTY", _[_.FORM_OF_EDUCATION = 518] = "FORM_OF_EDUCATION", _[_.DNI_NUMBER = 519] = "DNI_NUMBER", _[_.RETIREMENT_NUMBER = 520] = "RETIREMENT_NUMBER", _[_.PROFESSIONAL_ID_NUMBER = 521] = "PROFESSIONAL_ID_NUMBER", _[_.AGE_AT_ISSUE = 522] = "AGE_AT_ISSUE", _[_.YEARS_SINCE_ISSUE = 523] = "YEARS_SINCE_ISSUE", _[_.DL_CLASS_CODE_BTP_FROM = 524] = "DL_CLASS_CODE_BTP_FROM", _[_.DL_CLASS_CODE_BTP_NOTES = 525] = "DL_CLASS_CODE_BTP_NOTES", _[_.DL_CLASS_CODE_BTP_TO = 526] = "DL_CLASS_CODE_BTP_TO", _[_.DL_CLASS_CODE_C3_FROM = 527] = "DL_CLASS_CODE_C3_FROM", _[_.DL_CLASS_CODE_C3_NOTES = 528] = "DL_CLASS_CODE_C3_NOTES", _[_.DL_CLASS_CODE_C3_TO = 529] = "DL_CLASS_CODE_C3_TO", _[_.DL_CLASS_CODE_E_FROM = 530] = "DL_CLASS_CODE_E_FROM", _[_.DL_CLASS_CODE_E_NOTES = 531] = "DL_CLASS_CODE_E_NOTES", _[_.DL_CLASS_CODE_E_TO = 532] = "DL_CLASS_CODE_E_TO", _[_.DL_CLASS_CODE_F_FROM = 533] = "DL_CLASS_CODE_F_FROM", _[_.DL_CLASS_CODE_F_NOTES = 534] = "DL_CLASS_CODE_F_NOTES", _[_.DL_CLASS_CODE_F_TO = 535] = "DL_CLASS_CODE_F_TO", _[_.DL_CLASS_CODE_FA_FROM = 536] = "DL_CLASS_CODE_FA_FROM", _[_.DL_CLASS_CODE_FA_NOTES = 537] = "DL_CLASS_CODE_FA_NOTES", _[_.DL_CLASS_CODE_FA_TO = 538] = "DL_CLASS_CODE_FA_TO", _[_.DL_CLASS_CODE_FA1_FROM = 539] = "DL_CLASS_CODE_FA1_FROM", _[_.DL_CLASS_CODE_FA1_NOTES = 540] = "DL_CLASS_CODE_FA1_NOTES", _[_.DL_CLASS_CODE_FA1_TO = 541] = "DL_CLASS_CODE_FA1_TO", _[_.DL_CLASS_CODE_FB_FROM = 542] = "DL_CLASS_CODE_FB_FROM", _[_.DL_CLASS_CODE_FB_NOTES = 543] = "DL_CLASS_CODE_FB_NOTES", _[_.DL_CLASS_CODE_FB_TO = 544] = "DL_CLASS_CODE_FB_TO", _[_.DL_CLASS_CODE_G1_FROM = 545] = "DL_CLASS_CODE_G1_FROM", _[_.DL_CLASS_CODE_G1_NOTES = 546] = "DL_CLASS_CODE_G1_NOTES", _[_.DL_CLASS_CODE_G1_TO = 547] = "DL_CLASS_CODE_G1_TO", _[_.DL_CLASS_CODE_H_FROM = 548] = "DL_CLASS_CODE_H_FROM", _[_.DL_CLASS_CODE_H_NOTES = 549] = "DL_CLASS_CODE_H_NOTES", _[_.DL_CLASS_CODE_H_TO = 550] = "DL_CLASS_CODE_H_TO", _[_.DL_CLASS_CODE_I_FROM = 551] = "DL_CLASS_CODE_I_FROM", _[_.DL_CLASS_CODE_I_NOTES = 552] = "DL_CLASS_CODE_I_NOTES", _[_.DL_CLASS_CODE_I_TO = 553] = "DL_CLASS_CODE_I_TO", _[_.DL_CLASS_CODE_K_FROM = 554] = "DL_CLASS_CODE_K_FROM", _[_.DL_CLASS_CODE_K_NOTES = 555] = "DL_CLASS_CODE_K_NOTES", _[_.DL_CLASS_CODE_K_TO = 556] = "DL_CLASS_CODE_K_TO", _[_.DL_CLASS_CODE_LK_FROM = 557] = "DL_CLASS_CODE_LK_FROM", _[_.DL_CLASS_CODE_LK_NOTES = 558] = "DL_CLASS_CODE_LK_NOTES", _[_.DL_CLASS_CODE_LK_TO = 559] = "DL_CLASS_CODE_LK_TO", _[_.DL_CLASS_CODE_N_FROM = 560] = "DL_CLASS_CODE_N_FROM", _[_.DL_CLASS_CODE_N_NOTES = 561] = "DL_CLASS_CODE_N_NOTES", _[_.DL_CLASS_CODE_N_TO = 562] = "DL_CLASS_CODE_N_TO", _[_.DL_CLASS_CODE_S_FROM = 563] = "DL_CLASS_CODE_S_FROM", _[_.DL_CLASS_CODE_S_NOTES = 564] = "DL_CLASS_CODE_S_NOTES", _[_.DL_CLASS_CODE_S_TO = 565] = "DL_CLASS_CODE_S_TO", _[_.DL_CLASS_CODE_TB_FROM = 566] = "DL_CLASS_CODE_TB_FROM", _[_.DL_CLASS_CODE_TB_NOTES = 567] = "DL_CLASS_CODE_TB_NOTES", _[_.DL_CLASS_CODE_TB_TO = 568] = "DL_CLASS_CODE_TB_TO", _[_.DL_CLASS_CODE_TM_FROM = 569] = "DL_CLASS_CODE_TM_FROM", _[_.DL_CLASS_CODE_TM_NOTES = 570] = "DL_CLASS_CODE_TM_NOTES", _[_.DL_CLASS_CODE_TM_TO = 571] = "DL_CLASS_CODE_TM_TO", _[_.DL_CLASS_CODE_TR_FROM = 572] = "DL_CLASS_CODE_TR_FROM", _[_.DL_CLASS_CODE_TR_NOTES = 573] = "DL_CLASS_CODE_TR_NOTES", _[_.DL_CLASS_CODE_TR_TO = 574] = "DL_CLASS_CODE_TR_TO", _[_.DL_CLASS_CODE_TV_FROM = 575] = "DL_CLASS_CODE_TV_FROM", _[_.DL_CLASS_CODE_TV_NOTES = 576] = "DL_CLASS_CODE_TV_NOTES", _[_.DL_CLASS_CODE_TV_TO = 577] = "DL_CLASS_CODE_TV_TO", _[_.DL_CLASS_CODE_V_FROM = 578] = "DL_CLASS_CODE_V_FROM", _[_.DL_CLASS_CODE_V_NOTES = 579] = "DL_CLASS_CODE_V_NOTES", _[_.DL_CLASS_CODE_V_TO = 580] = "DL_CLASS_CODE_V_TO", _[_.DL_CLASS_CODE_W_FROM = 581] = "DL_CLASS_CODE_W_FROM", _[_.DL_CLASS_CODE_W_NOTES = 582] = "DL_CLASS_CODE_W_NOTES", _[_.DL_CLASS_CODE_W_TO = 583] = "DL_CLASS_CODE_W_TO", _[_.URL = 584] = "URL", _[_.CALIBER = 585] = "CALIBER", _[_.MODEL = 586] = "MODEL", _[_.MAKE = 587] = "MAKE", _[_.NUMBER_OF_CYLINDERS = 588] = "NUMBER_OF_CYLINDERS", _[_.SURNAME_OF_HUSBAND_AFTER_REGISTRATION = 589] = "SURNAME_OF_HUSBAND_AFTER_REGISTRATION", _[_.SURNAME_OF_WIFE_AFTER_REGISTRATION = 590] = "SURNAME_OF_WIFE_AFTER_REGISTRATION", _[_.DATE_OF_BIRTH_OF_WIFE = 591] = "DATE_OF_BIRTH_OF_WIFE", _[_.DATE_OF_BIRTH_OF_HUSBAND = 592] = "DATE_OF_BIRTH_OF_HUSBAND", _[_.CITIZENSHIP_OF_FIRST_PERSON = 593] = "CITIZENSHIP_OF_FIRST_PERSON", _[_.CITIZENSHIP_OF_SECOND_PERSON = 594] = "CITIZENSHIP_OF_SECOND_PERSON", _[_.CVV = 595] = "CVV", _[_.DATE_OF_INSURANCE_EXPIRY = 596] = "DATE_OF_INSURANCE_EXPIRY", _[_.MORTGAGE_BY = 597] = "MORTGAGE_BY", _[_.OLD_DOCUMENT_NUMBER = 598] = "OLD_DOCUMENT_NUMBER", _[_.OLD_DATE_OF_ISSUE = 599] = "OLD_DATE_OF_ISSUE", _[_.OLD_PLACE_OF_ISSUE = 600] = "OLD_PLACE_OF_ISSUE", _[_.DL_CLASS_CODE_LR_FROM = 601] = "DL_CLASS_CODE_LR_FROM", _[_.DL_CLASS_CODE_LR_TO = 602] = "DL_CLASS_CODE_LR_TO", _[_.DL_CLASS_CODE_LR_NOTES = 603] = "DL_CLASS_CODE_LR_NOTES", _[_.DL_CLASS_CODE_MR_FROM = 604] = "DL_CLASS_CODE_MR_FROM", _[_.DL_CLASS_CODE_MR_TO = 605] = "DL_CLASS_CODE_MR_TO", _[_.DL_CLASS_CODE_MR_NOTES = 606] = "DL_CLASS_CODE_MR_NOTES", _[_.DL_CLASS_CODE_HR_FROM = 607] = "DL_CLASS_CODE_HR_FROM", _[_.DL_CLASS_CODE_HR_TO = 608] = "DL_CLASS_CODE_HR_TO", _[_.DL_CLASS_CODE_HR_NOTES = 609] = "DL_CLASS_CODE_HR_NOTES", _[_.DL_CLASS_CODE_HC_FROM = 610] = "DL_CLASS_CODE_HC_FROM", _[_.DL_CLASS_CODE_HC_TO = 611] = "DL_CLASS_CODE_HC_TO", _[_.DL_CLASS_CODE_HC_NOTES = 612] = "DL_CLASS_CODE_HC_NOTES", _[_.DL_CLASS_CODE_MC_FROM = 613] = "DL_CLASS_CODE_MC_FROM", _[_.DL_CLASS_CODE_MC_TO = 614] = "DL_CLASS_CODE_MC_TO", _[_.DL_CLASS_CODE_MC_NOTES = 615] = "DL_CLASS_CODE_MC_NOTES", _[_.DL_CLASS_CODE_RE_FROM = 616] = "DL_CLASS_CODE_RE_FROM", _[_.DL_CLASS_CODE_RE_TO = 617] = "DL_CLASS_CODE_RE_TO", _[_.DL_CLASS_CODE_RE_NOTES = 618] = "DL_CLASS_CODE_RE_NOTES", _[_.DL_CLASS_CODE_R_FROM = 619] = "DL_CLASS_CODE_R_FROM", _[_.DL_CLASS_CODE_R_TO = 620] = "DL_CLASS_CODE_R_TO", _[_.DL_CLASS_CODE_R_NOTES = 621] = "DL_CLASS_CODE_R_NOTES", _[_.DL_CLASS_CODE_CA_FROM = 622] = "DL_CLASS_CODE_CA_FROM", _[_.DL_CLASS_CODE_CA_TO = 623] = "DL_CLASS_CODE_CA_TO", _[_.DL_CLASS_CODE_CA_NOTES = 624] = "DL_CLASS_CODE_CA_NOTES", _[_.CITIZENSHIP_STATUS = 625] = "CITIZENSHIP_STATUS", _[_.MILITARY_SERVICE_FROM = 626] = "MILITARY_SERVICE_FROM", _[_.MILITARY_SERVICE_TO = 627] = "MILITARY_SERVICE_TO", _[_.DL_CLASS_CODE_NT_FROM = 628] = "DL_CLASS_CODE_NT_FROM", _[_.DL_CLASS_CODE_NT_TO = 629] = "DL_CLASS_CODE_NT_TO", _[_.DL_CLASS_CODE_NT_NOTES = 630] = "DL_CLASS_CODE_NT_NOTES", _[_.DL_CLASS_CODE_TN_FROM = 631] = "DL_CLASS_CODE_TN_FROM", _[_.DL_CLASS_CODE_TN_TO = 632] = "DL_CLASS_CODE_TN_TO", _[_.DL_CLASS_CODE_TN_NOTES = 633] = "DL_CLASS_CODE_TN_NOTES", _[_.DL_CLASS_CODE_D3_FROM = 634] = "DL_CLASS_CODE_D3_FROM", _[_.DL_CLASS_CODE_D3_TO = 635] = "DL_CLASS_CODE_D3_TO", _[_.DL_CLASS_CODE_D3_NOTES = 636] = "DL_CLASS_CODE_D3_NOTES", _[_.ALT_DATE_OF_EXPIRY = 637] = "ALT_DATE_OF_EXPIRY", _[_.DL_CLASS_CODE_CD_FROM = 638] = "DL_CLASS_CODE_CD_FROM", _[_.DL_CLASS_CODE_CD_TO = 639] = "DL_CLASS_CODE_CD_TO", _[_.DL_CLASS_CODE_CD_NOTES = 640] = "DL_CLASS_CODE_CD_NOTES", _[_.ISSUER_IDENTIFICATION_NUMBER = 641] = "ISSUER_IDENTIFICATION_NUMBER", _[_.PAYMENT_PERIOD_FROM = 642] = "PAYMENT_PERIOD_FROM", _[_.PAYMENT_PERIOD_TO = 643] = "PAYMENT_PERIOD_TO", _[_.VACCINATION_CERTIFICATE_IDENTIFIER = 644] = "VACCINATION_CERTIFICATE_IDENTIFIER", _[_.FIRST_NAME = 645] = "FIRST_NAME", _[_.DATE_OF_ARRIVAL = 646] = "DATE_OF_ARRIVAL", _[_.SECOND_NAME = 647] = "SECOND_NAME", _[_.THIRD_NAME = 648] = "THIRD_NAME", _[_.FOURTH_NAME = 649] = "FOURTH_NAME", _[_.LAST_NAME = 650] = "LAST_NAME", _[_.DL_CLASS_CODE_RM_FROM = 651] = "DL_CLASS_CODE_RM_FROM", _[_.DL_CLASS_CODE_RM_NOTES = 652] = "DL_CLASS_CODE_RM_NOTES", _[_.DL_CLASS_CODE_RM_TO = 653] = "DL_CLASS_CODE_RM_TO", _[_.DL_CLASS_CODE_PW_FROM = 654] = "DL_CLASS_CODE_PW_FROM", _[_.DL_CLASS_CODE_PW_NOTES = 655] = "DL_CLASS_CODE_PW_NOTES", _[_.DL_CLASS_CODE_PW_TO = 656] = "DL_CLASS_CODE_PW_TO", _[_.DL_CLASS_CODE_EB_FROM = 657] = "DL_CLASS_CODE_EB_FROM", _[_.DL_CLASS_CODE_EB_NOTES = 658] = "DL_CLASS_CODE_EB_NOTES", _[_.DL_CLASS_CODE_EB_TO = 659] = "DL_CLASS_CODE_EB_TO", _[_.DL_CLASS_CODE_EC_FROM = 660] = "DL_CLASS_CODE_EC_FROM", _[_.DL_CLASS_CODE_EC_NOTES = 661] = "DL_CLASS_CODE_EC_NOTES", _[_.DL_CLASS_CODE_EC_TO = 662] = "DL_CLASS_CODE_EC_TO", _[_.DL_CLASS_CODE_EC1_FROM = 663] = "DL_CLASS_CODE_EC1_FROM", _[_.DL_CLASS_CODE_EC1_NOTES = 664] = "DL_CLASS_CODE_EC1_NOTES", _[_.DL_CLASS_CODE_EC1_TO = 665] = "DL_CLASS_CODE_EC1_TO", _[_.PLACE_OF_BIRTH_CITY = 666] = "PLACE_OF_BIRTH_CITY", _[_.YEAR_OF_BIRTH = 667] = "YEAR_OF_BIRTH", _[_.YEAR_OF_EXPIRY = 668] = "YEAR_OF_EXPIRY", _[_.GRANDFATHER_NAME_MATERNAL = 669] = "GRANDFATHER_NAME_MATERNAL", _[_.FIRST_SURNAME = 670] = "FIRST_SURNAME", _[_.MONTH_OF_BIRTH = 671] = "MONTH_OF_BIRTH", _[_.ADDRESS_FLOOR_NUMBER = 672] = "ADDRESS_FLOOR_NUMBER", _[_.ADDRESS_ENTRANCE = 673] = "ADDRESS_ENTRANCE", _[_.ADDRESS_BLOCK_NUMBER = 674] = "ADDRESS_BLOCK_NUMBER", _[_.ADDRESS_STREET_NUMBER = 675] = "ADDRESS_STREET_NUMBER", _[_.ADDRESS_STREET_TYPE = 676] = "ADDRESS_STREET_TYPE", _[_.ADDRESS_CITY_SECTOR = 677] = "ADDRESS_CITY_SECTOR", _[_.ADDRESS_COUNTY_TYPE = 678] = "ADDRESS_COUNTY_TYPE", _[_.ADDRESS_CITY_TYPE = 679] = "ADDRESS_CITY_TYPE", _[_.ADDRESS_BUILDING_TYPE = 680] = "ADDRESS_BUILDING_TYPE", _))(J_ || {});
const FE = (_) => typeof _ == "object" && _ !== null && !Array.isArray(_);
var PO = (
  /** @class */
  /* @__PURE__ */ function() {
    function _(E) {
      this.groups = [], this.each = !1, this.context = void 0, this.type = E.type, this.name = E.name, this.target = E.target, this.propertyName = E.propertyName, this.constraints = E == null ? void 0 : E.constraints, this.constraintCls = E.constraintCls, this.validationTypeOptions = E.validationTypeOptions, E.validationOptions && (this.message = E.validationOptions.message, this.groups = E.validationOptions.groups, this.always = E.validationOptions.always, this.each = E.validationOptions.each, this.context = E.validationOptions.context);
    }
    return _;
  }()
), aA = (
  /** @class */
  function() {
    function _() {
    }
    return _.prototype.transform = function(E) {
      var O = [];
      return Object.keys(E.properties).forEach(function(R) {
        E.properties[R].forEach(function(I) {
          var t = {
            message: I.message,
            groups: I.groups,
            always: I.always,
            each: I.each
          }, r = {
            type: I.type,
            name: I.name,
            target: E.name,
            propertyName: R,
            constraints: I.constraints,
            validationTypeOptions: I.options,
            validationOptions: t
          };
          O.push(new PO(r));
        });
      }), O;
    }, _;
  }()
);
function gA(_) {
  return _ instanceof Map ? Array.from(_.values()) : Array.isArray(_) ? _ : Array.from(_);
}
function VA() {
  if (typeof globalThis < "u")
    return globalThis;
  if (typeof global < "u")
    return global;
  if (typeof window < "u")
    return window;
  if (typeof self < "u")
    return self;
}
function QO(_) {
  return _ !== null && typeof _ == "object" && typeof _.then == "function";
}
var kA = function(_) {
  var E = typeof Symbol == "function" && Symbol.iterator, O = E && _[E], R = 0;
  if (O)
    return O.call(_);
  if (_ && typeof _.length == "number")
    return {
      next: function() {
        return _ && R >= _.length && (_ = void 0), { value: _ && _[R++], done: !_ };
      }
    };
  throw new TypeError(E ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, gR = function(_, E) {
  var O = typeof Symbol == "function" && _[Symbol.iterator];
  if (!O)
    return _;
  var R = O.call(_), I, t = [], r;
  try {
    for (; (E === void 0 || E-- > 0) && !(I = R.next()).done; )
      t.push(I.value);
  } catch (M) {
    r = { error: M };
  } finally {
    try {
      I && !I.done && (O = R.return) && O.call(R);
    } finally {
      if (r)
        throw r.error;
    }
  }
  return t;
}, dA = function(_, E, O) {
  if (O || arguments.length === 2)
    for (var R = 0, I = E.length, t; R < I; R++)
      (t || !(R in E)) && (t || (t = Array.prototype.slice.call(E, 0, R)), t[R] = E[R]);
  return _.concat(t || Array.prototype.slice.call(E));
}, CA = (
  /** @class */
  function() {
    function _() {
      this.validationMetadatas = /* @__PURE__ */ new Map(), this.constraintMetadatas = /* @__PURE__ */ new Map();
    }
    return Object.defineProperty(_.prototype, "hasValidationMetaData", {
      get: function() {
        return !!this.validationMetadatas.size;
      },
      enumerable: !1,
      configurable: !0
    }), _.prototype.addValidationSchema = function(E) {
      var O = this, R = new aA().transform(E);
      R.forEach(function(I) {
        return O.addValidationMetadata(I);
      });
    }, _.prototype.addValidationMetadata = function(E) {
      var O = this.validationMetadatas.get(E.target);
      O ? O.push(E) : this.validationMetadatas.set(E.target, [E]);
    }, _.prototype.addConstraintMetadata = function(E) {
      var O = this.constraintMetadatas.get(E.target);
      O ? O.push(E) : this.constraintMetadatas.set(E.target, [E]);
    }, _.prototype.groupByPropertyName = function(E) {
      var O = {};
      return E.forEach(function(R) {
        O[R.propertyName] || (O[R.propertyName] = []), O[R.propertyName].push(R);
      }), O;
    }, _.prototype.getTargetValidationMetadatas = function(E, O, R, I, t) {
      var r, M, v = function(Z) {
        return typeof Z.always < "u" ? Z.always : Z.groups && Z.groups.length ? !1 : R;
      }, B = function(Z) {
        return !!(I && (!t || !t.length) && Z.groups && Z.groups.length);
      }, h = this.validationMetadatas.get(E) || [], K = h.filter(function(Z) {
        return Z.target !== E && Z.target !== O ? !1 : v(Z) ? !0 : B(Z) ? !1 : t && t.length > 0 ? Z.groups && !!Z.groups.find(function(W) {
          return t.indexOf(W) !== -1;
        }) : !0;
      }), H = [];
      try {
        for (var e = kA(this.validationMetadatas.entries()), t_ = e.next(); !t_.done; t_ = e.next()) {
          var r_ = gR(t_.value, 2), z = r_[0], __ = r_[1];
          E.prototype instanceof z && H.push.apply(H, dA([], gR(__), !1));
        }
      } catch (Z) {
        r = { error: Z };
      } finally {
        try {
          t_ && !t_.done && (M = e.return) && M.call(e);
        } finally {
          if (r)
            throw r.error;
        }
      }
      var g = H.filter(function(Z) {
        return typeof Z.target == "string" || Z.target === E || Z.target instanceof Function && !(E.prototype instanceof Z.target) ? !1 : v(Z) ? !0 : B(Z) ? !1 : t && t.length > 0 ? Z.groups && !!Z.groups.find(function(W) {
          return t.indexOf(W) !== -1;
        }) : !0;
      }), I_ = g.filter(function(Z) {
        return !K.find(function(W) {
          return W.propertyName === Z.propertyName && W.type === Z.type;
        });
      });
      return K.concat(I_);
    }, _.prototype.getTargetValidatorConstraints = function(E) {
      return this.constraintMetadatas.get(E) || [];
    }, _;
  }()
);
function EO() {
  var _ = VA();
  return _.classValidatorMetadataStorage || (_.classValidatorMetadataStorage = new CA()), _.classValidatorMetadataStorage;
}
var VR = (
  /** @class */
  function() {
    function _() {
    }
    return _.prototype.toString = function(E, O, R, I) {
      var t = this;
      E === void 0 && (E = !1), O === void 0 && (O = !1), R === void 0 && (R = ""), I === void 0 && (I = !1);
      var r = E ? "\x1B[1m" : "", M = E ? "\x1B[22m" : "", v = function() {
        var K;
        return (I ? Object.values : Object.keys)((K = t.constraints) !== null && K !== void 0 ? K : {}).join(", ");
      }, B = function(K) {
        return " - property ".concat(r).concat(R).concat(K).concat(M, " has failed the following constraints: ").concat(r).concat(v()).concat(M, ` 
`);
      };
      if (O) {
        var h = Number.isInteger(+this.property) ? "[".concat(this.property, "]") : "".concat(R ? "." : "").concat(this.property);
        return this.constraints ? B(h) : this.children ? this.children.map(function(K) {
          return K.toString(E, !0, "".concat(R).concat(h), I);
        }).join("") : "";
      } else
        return "An instance of ".concat(r).concat(this.target ? this.target.constructor.name : "an object").concat(M, ` has failed the validation:
`) + (this.constraints ? B(this.property) : "") + (this.children ? this.children.map(function(K) {
          return K.toString(E, !0, t.property, I);
        }).join("") : "");
    }, _;
  }()
), M_ = (
  /** @class */
  function() {
    function _() {
    }
    return _.isValid = function(E) {
      var O = this;
      return E !== "isValid" && E !== "getMessage" && Object.keys(this).map(function(R) {
        return O[R];
      }).indexOf(E) !== -1;
    }, _.CUSTOM_VALIDATION = "customValidation", _.NESTED_VALIDATION = "nestedValidation", _.PROMISE_VALIDATION = "promiseValidation", _.CONDITIONAL_VALIDATION = "conditionalValidation", _.WHITELIST = "whitelistValidation", _.IS_DEFINED = "isDefined", _;
  }()
);
function yA(_) {
  return Array.isArray(_) ? _.join(", ") : (typeof _ == "symbol" && (_ = _.description), "".concat(_));
}
var lA = (
  /** @class */
  function() {
    function _() {
    }
    return _.replaceMessageSpecialTokens = function(E, O) {
      var R;
      return E instanceof Function ? R = E(O) : typeof E == "string" && (R = E), R && Array.isArray(O.constraints) && O.constraints.forEach(function(I, t) {
        R = R.replace(new RegExp("\\$constraint".concat(t + 1), "g"), yA(I));
      }), R && O.value !== void 0 && O.value !== null && typeof O.value == "string" && (R = R.replace(/\$value/g, O.value)), R && (R = R.replace(/\$property/g, O.property)), R && (R = R.replace(/\$target/g, O.targetName)), R;
    }, _;
  }()
), yI = function(_, E) {
  var O = typeof Symbol == "function" && _[Symbol.iterator];
  if (!O)
    return _;
  var R = O.call(_), I, t = [], r;
  try {
    for (; (E === void 0 || E-- > 0) && !(I = R.next()).done; )
      t.push(I.value);
  } catch (M) {
    r = { error: M };
  } finally {
    try {
      I && !I.done && (O = R.return) && O.call(R);
    } finally {
      if (r)
        throw r.error;
    }
  }
  return t;
}, kR = (
  /** @class */
  function() {
    function _(E, O) {
      this.validator = E, this.validatorOptions = O, this.awaitingPromises = [], this.ignoreAsyncValidations = !1, this.metadataStorage = EO();
    }
    return _.prototype.execute = function(E, O, R) {
      var I = this, t, r;
      !this.metadataStorage.hasValidationMetaData && ((t = this.validatorOptions) === null || t === void 0 ? void 0 : t.enableDebugMessages) === !0 && console.warn(`No validation metadata found. No validation will be  performed. There are multiple possible reasons:
  - There may be multiple class-validator versions installed. You will need to flatten your dependencies to fix the issue.
  - This validation runs before any file with validation decorator was parsed by NodeJS.`);
      var M = this.validatorOptions ? this.validatorOptions.groups : void 0, v = this.validatorOptions && this.validatorOptions.strictGroups || !1, B = this.validatorOptions && this.validatorOptions.always || !1, h = ((r = this.validatorOptions) === null || r === void 0 ? void 0 : r.forbidUnknownValues) === void 0 || this.validatorOptions.forbidUnknownValues !== !1, K = this.metadataStorage.getTargetValidationMetadatas(E.constructor, O, B, v, M), H = this.metadataStorage.groupByPropertyName(K);
      if (this.validatorOptions && h && !K.length) {
        var e = new VR();
        (!this.validatorOptions || !this.validatorOptions.validationError || this.validatorOptions.validationError.target === void 0 || this.validatorOptions.validationError.target === !0) && (e.target = E), e.value = void 0, e.property = void 0, e.children = [], e.constraints = { unknownValue: "an unknown value was passed to the validate function" }, R.push(e);
        return;
      }
      this.validatorOptions && this.validatorOptions.whitelist && this.whitelist(E, H, R), Object.keys(H).forEach(function(t_) {
        var r_ = E[t_], z = H[t_].filter(function(g) {
          return g.type === M_.IS_DEFINED;
        }), __ = H[t_].filter(function(g) {
          return g.type !== M_.IS_DEFINED && g.type !== M_.WHITELIST;
        });
        r_ instanceof Promise && __.find(function(g) {
          return g.type === M_.PROMISE_VALIDATION;
        }) ? I.awaitingPromises.push(r_.then(function(g) {
          I.performValidations(E, g, t_, z, __, R);
        })) : I.performValidations(E, r_, t_, z, __, R);
      });
    }, _.prototype.whitelist = function(E, O, R) {
      var I = this, t = [];
      Object.keys(E).forEach(function(r) {
        (!O[r] || O[r].length === 0) && t.push(r);
      }), t.length > 0 && (this.validatorOptions && this.validatorOptions.forbidNonWhitelisted ? t.forEach(function(r) {
        var M, v = I.generateValidationError(E, E[r], r);
        v.constraints = (M = {}, M[M_.WHITELIST] = "property ".concat(r, " should not exist"), M), v.children = void 0, R.push(v);
      }) : t.forEach(function(r) {
        return delete E[r];
      }));
    }, _.prototype.stripEmptyErrors = function(E) {
      var O = this;
      return E.filter(function(R) {
        if (R.children && (R.children = O.stripEmptyErrors(R.children)), Object.keys(R.constraints).length === 0) {
          if (R.children.length === 0)
            return !1;
          delete R.constraints;
        }
        return !0;
      });
    }, _.prototype.performValidations = function(E, O, R, I, t, r) {
      var M = t.filter(function(H) {
        return H.type === M_.CUSTOM_VALIDATION;
      }), v = t.filter(function(H) {
        return H.type === M_.NESTED_VALIDATION;
      }), B = t.filter(function(H) {
        return H.type === M_.CONDITIONAL_VALIDATION;
      }), h = this.generateValidationError(E, O, R);
      r.push(h);
      var K = this.conditionalValidations(E, O, B);
      K && (this.customValidations(E, O, I, h), this.mapContexts(E, O, I, h), !(O === void 0 && this.validatorOptions && this.validatorOptions.skipUndefinedProperties === !0) && (O === null && this.validatorOptions && this.validatorOptions.skipNullProperties === !0 || O == null && this.validatorOptions && this.validatorOptions.skipMissingProperties === !0 || (this.customValidations(E, O, M, h), this.nestedValidations(O, v, h), this.mapContexts(E, O, t, h), this.mapContexts(E, O, M, h))));
    }, _.prototype.generateValidationError = function(E, O, R) {
      var I = new VR();
      return (!this.validatorOptions || !this.validatorOptions.validationError || this.validatorOptions.validationError.target === void 0 || this.validatorOptions.validationError.target === !0) && (I.target = E), (!this.validatorOptions || !this.validatorOptions.validationError || this.validatorOptions.validationError.value === void 0 || this.validatorOptions.validationError.value === !0) && (I.value = O), I.property = R, I.children = [], I.constraints = {}, I;
    }, _.prototype.conditionalValidations = function(E, O, R) {
      return R.map(function(I) {
        return I.constraints[0](E, O);
      }).reduce(function(I, t) {
        return I && t;
      }, !0);
    }, _.prototype.customValidations = function(E, O, R, I) {
      var t = this;
      R.forEach(function(r) {
        t.metadataStorage.getTargetValidatorConstraints(r.constraintCls).forEach(function(M) {
          if (!(M.async && t.ignoreAsyncValidations) && !(t.validatorOptions && t.validatorOptions.stopAtFirstError && Object.keys(I.constraints || {}).length > 0)) {
            var v = {
              targetName: E.constructor ? E.constructor.name : void 0,
              property: r.propertyName,
              object: E,
              value: O,
              constraints: r.constraints
            };
            if (!r.each || !(Array.isArray(O) || O instanceof Set || O instanceof Map)) {
              var B = M.instance.validate(O, v);
              if (QO(B)) {
                var h = B.then(function(W) {
                  if (!W) {
                    var E_ = yI(t.createValidationError(E, O, r, M), 2), C_ = E_[0], k = E_[1];
                    I.constraints[C_] = k, r.context && (I.contexts || (I.contexts = {}), I.contexts[C_] = Object.assign(I.contexts[C_] || {}, r.context));
                  }
                });
                t.awaitingPromises.push(h);
              } else if (!B) {
                var K = yI(t.createValidationError(E, O, r, M), 2), H = K[0], e = K[1];
                I.constraints[H] = e;
              }
              return;
            }
            var t_ = gA(O), r_ = t_.map(function(W) {
              return M.instance.validate(W, v);
            }), z = r_.some(function(W) {
              return QO(W);
            });
            if (z) {
              var __ = r_.map(function(W) {
                return QO(W) ? W : Promise.resolve(W);
              }), g = Promise.all(__).then(function(W) {
                var E_ = W.every(function(NI) {
                  return NI;
                });
                if (!E_) {
                  var C_ = yI(t.createValidationError(E, O, r, M), 2), k = C_[0], VI = C_[1];
                  I.constraints[k] = VI, r.context && (I.contexts || (I.contexts = {}), I.contexts[k] = Object.assign(I.contexts[k] || {}, r.context));
                }
              });
              t.awaitingPromises.push(g);
              return;
            }
            var I_ = r_.every(function(W) {
              return W;
            });
            if (!I_) {
              var Z = yI(t.createValidationError(E, O, r, M), 2), H = Z[0], e = Z[1];
              I.constraints[H] = e;
            }
          }
        });
      });
    }, _.prototype.nestedValidations = function(E, O, R) {
      var I = this;
      E !== void 0 && O.forEach(function(t) {
        if (!(t.type !== M_.NESTED_VALIDATION && t.type !== M_.PROMISE_VALIDATION) && !(I.validatorOptions && I.validatorOptions.stopAtFirstError && Object.keys(R.constraints || {}).length > 0))
          if (Array.isArray(E) || E instanceof Set || E instanceof Map) {
            var r = E instanceof Set ? Array.from(E) : E;
            r.forEach(function(K, H) {
              I.performValidations(E, K, H.toString(), [], O, R.children);
            });
          } else if (E instanceof Object) {
            var M = typeof t.target == "string" ? t.target : t.target.name;
            I.execute(E, M, R.children);
          } else {
            var v = yI(I.createValidationError(t.target, E, t), 2), B = v[0], h = v[1];
            R.constraints[B] = h;
          }
      });
    }, _.prototype.mapContexts = function(E, O, R, I) {
      var t = this;
      return R.forEach(function(r) {
        if (r.context) {
          var M = void 0;
          if (r.type === M_.CUSTOM_VALIDATION) {
            var v = t.metadataStorage.getTargetValidatorConstraints(r.constraintCls);
            M = v[0];
          }
          var B = t.getConstraintType(r, M);
          I.constraints[B] && (I.contexts || (I.contexts = {}), I.contexts[B] = Object.assign(I.contexts[B] || {}, r.context));
        }
      });
    }, _.prototype.createValidationError = function(E, O, R, I) {
      var t = E.constructor ? E.constructor.name : void 0, r = this.getConstraintType(R, I), M = {
        targetName: t,
        property: R.propertyName,
        object: E,
        value: O,
        constraints: R.constraints
      }, v = R.message || "";
      !R.message && (!this.validatorOptions || this.validatorOptions && !this.validatorOptions.dismissDefaultMessages) && I && I.instance.defaultMessage instanceof Function && (v = I.instance.defaultMessage(M));
      var B = lA.replaceMessageSpecialTokens(v, M);
      return [r, B];
    }, _.prototype.getConstraintType = function(E, O) {
      var R = O && O.name ? O.name : E.type;
      return R;
    }, _;
  }()
), iA = function(_, E, O, R) {
  function I(t) {
    return t instanceof O ? t : new O(function(r) {
      r(t);
    });
  }
  return new (O || (O = Promise))(function(t, r) {
    function M(h) {
      try {
        B(R.next(h));
      } catch (K) {
        r(K);
      }
    }
    function v(h) {
      try {
        B(R.throw(h));
      } catch (K) {
        r(K);
      }
    }
    function B(h) {
      h.done ? t(h.value) : I(h.value).then(M, v);
    }
    B((R = R.apply(_, E || [])).next());
  });
}, eA = function(_, E) {
  var O = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, R, I, t, r;
  return r = { next: M(0), throw: M(1), return: M(2) }, typeof Symbol == "function" && (r[Symbol.iterator] = function() {
    return this;
  }), r;
  function M(B) {
    return function(h) {
      return v([B, h]);
    };
  }
  function v(B) {
    if (R)
      throw new TypeError("Generator is already executing.");
    for (; r && (r = 0, B[0] && (O = 0)), O; )
      try {
        if (R = 1, I && (t = B[0] & 2 ? I.return : B[0] ? I.throw || ((t = I.return) && t.call(I), 0) : I.next) && !(t = t.call(I, B[1])).done)
          return t;
        switch (I = 0, t && (B = [B[0] & 2, t.value]), B[0]) {
          case 0:
          case 1:
            t = B;
            break;
          case 4:
            return O.label++, { value: B[1], done: !1 };
          case 5:
            O.label++, I = B[1], B = [0];
            continue;
          case 7:
            B = O.ops.pop(), O.trys.pop();
            continue;
          default:
            if (t = O.trys, !(t = t.length > 0 && t[t.length - 1]) && (B[0] === 6 || B[0] === 2)) {
              O = 0;
              continue;
            }
            if (B[0] === 3 && (!t || B[1] > t[0] && B[1] < t[3])) {
              O.label = B[1];
              break;
            }
            if (B[0] === 6 && O.label < t[1]) {
              O.label = t[1], t = B;
              break;
            }
            if (t && O.label < t[2]) {
              O.label = t[2], O.ops.push(B);
              break;
            }
            t[2] && O.ops.pop(), O.trys.pop();
            continue;
        }
        B = E.call(_, O);
      } catch (h) {
        B = [6, h], I = 0;
      } finally {
        R = t = 0;
      }
    if (B[0] & 5)
      throw B[1];
    return { value: B[0] ? B[1] : void 0, done: !0 };
  }
}, dR = (
  /** @class */
  function() {
    function _() {
    }
    return _.prototype.validate = function(E, O, R) {
      return this.coreValidate(E, O, R);
    }, _.prototype.validateOrReject = function(E, O, R) {
      return iA(this, void 0, void 0, function() {
        var I;
        return eA(this, function(t) {
          switch (t.label) {
            case 0:
              return [4, this.coreValidate(E, O, R)];
            case 1:
              return I = t.sent(), I.length ? [2, Promise.reject(I)] : [
                2
                /*return*/
              ];
          }
        });
      });
    }, _.prototype.validateSync = function(E, O, R) {
      var I = typeof E == "string" ? O : E, t = typeof E == "string" ? R : O, r = typeof E == "string" ? E : void 0, M = new kR(this, t);
      M.ignoreAsyncValidations = !0;
      var v = [];
      return M.execute(I, r, v), M.stripEmptyErrors(v);
    }, _.prototype.coreValidate = function(E, O, R) {
      var I = typeof E == "string" ? O : E, t = typeof E == "string" ? R : O, r = typeof E == "string" ? E : void 0, M = new kR(this, t), v = [];
      return M.execute(I, r, v), Promise.all(M.awaitingPromises).then(function() {
        return M.stripEmptyErrors(v);
      });
    }, _;
  }()
), _t = new /** @class */
(function() {
  function _() {
    this.instances = [];
  }
  return _.prototype.get = function(E) {
    var O = this.instances.find(function(R) {
      return R.type === E;
    });
    return O || (O = { type: E, object: new E() }, this.instances.push(O)), O.object;
  }, _;
}())(), yR, lR;
function DO(_) {
  if (yR)
    try {
      var E = yR.get(_);
      if (E || !lR || !lR.fallback)
        return E;
    } catch (O) {
      throw O;
    }
  return _t.get(_);
}
var Et = (
  /** @class */
  function() {
    function _(E, O, R) {
      R === void 0 && (R = !1), this.target = E, this.name = O, this.async = R;
    }
    return Object.defineProperty(_.prototype, "instance", {
      // -------------------------------------------------------------------------
      // Accessors
      // -------------------------------------------------------------------------
      /**
       * Instance of the target custom validation class which performs validation.
       */
      get: function() {
        return DO(this.target);
      },
      enumerable: !1,
      configurable: !0
    }), _;
  }()
);
function TA(_) {
  var E;
  if (_.validator instanceof Function) {
    E = _.validator;
    var O = DO(CA).getTargetValidatorConstraints(_.validator);
    if (O.length > 1)
      throw "More than one implementation of ValidatorConstraintInterface found for validator on: ".concat(_.target.name, ":").concat(_.propertyName);
  } else {
    var R = _.validator;
    E = /** @class */
    function() {
      function t() {
      }
      return t.prototype.validate = function(r, M) {
        return R.validate(r, M);
      }, t.prototype.defaultMessage = function(r) {
        return R.defaultMessage ? R.defaultMessage(r) : "";
      }, t;
    }(), EO().addConstraintMetadata(new Et(E, _.name, _.async));
  }
  var I = {
    type: _.name && M_.isValid(_.name) ? _.name : M_.CUSTOM_VALIDATION,
    name: _.name,
    target: _.target,
    propertyName: _.propertyName,
    validationOptions: _.options,
    constraintCls: E,
    constraints: _.constraints
  };
  EO().addValidationMetadata(new PO(I));
}
function Y_(_, E) {
  return function(O) {
    var R = E && E.each ? "each value in " : "";
    return _(R, O);
  };
}
function h_(_, E) {
  return function(O, R) {
    TA({
      name: _.name,
      target: O.constructor,
      propertyName: R,
      options: E,
      constraints: _.constraints,
      validator: _.validator
    });
  };
}
var It = M_.IS_DEFINED;
function Ot(_) {
  return _ != null;
}
function S(_) {
  return h_({
    name: It,
    validator: {
      validate: function(E) {
        return Ot(E);
      },
      defaultMessage: Y_(function(E) {
        return E + "$property should not be null or undefined";
      }, _)
    }
  }, _);
}
function N(_) {
  return function(E, O) {
    var R = {
      type: M_.CONDITIONAL_VALIDATION,
      target: E.constructor,
      propertyName: O,
      constraints: [
        function(I, t) {
          return I[O] !== null && I[O] !== void 0;
        }
      ],
      validationOptions: _
    };
    EO().addValidationMetadata(new PO(R));
  };
}
var kO = function() {
  return kO = Object.assign || function(_) {
    for (var E, O = 1, R = arguments.length; O < R; O++) {
      E = arguments[O];
      for (var I in E)
        Object.prototype.hasOwnProperty.call(E, I) && (_[I] = E[I]);
    }
    return _;
  }, kO.apply(this, arguments);
};
function o(_) {
  var E = kO({}, _), O = E.each ? "each value in " : "";
  return E.message = E.message || O + "nested property $property must be either object or array", function(R, I) {
    var t = {
      type: M_.NESTED_VALIDATION,
      target: R.constructor,
      propertyName: I,
      validationOptions: E
    };
    EO().addValidationMetadata(new PO(t));
  };
}
var dO = { exports: {} };
(function(_, E) {
  Object.defineProperty(E, "__esModule", {
    value: !0
  }), E.default = R;
  function O(I) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? O = function(r) {
      return typeof r;
    } : O = function(r) {
      return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, O(I);
  }
  function R(I) {
    var t = typeof I == "string" || I instanceof String;
    if (!t) {
      var r = O(I);
      throw I === null ? r = "null" : r === "object" && (r = I.constructor.name), new TypeError("Expected a string but received a ".concat(r));
    }
  }
  _.exports = E.default, _.exports.default = E.default;
})(dO, dO.exports);
var Rt = dO.exports, At = "isIn";
function tt(_, E) {
  return !Array.isArray(E) || E.some(function(O) {
    return O === _;
  });
}
function i(_, E) {
  return h_({
    name: At,
    constraints: [_],
    validator: {
      validate: function(O, R) {
        return tt(O, R == null ? void 0 : R.constraints[0]);
      },
      defaultMessage: Y_(function(O) {
        return O + "$property must be one of the following values: $constraint1";
      }, E)
    }
  }, E);
}
var rt = "max";
function St(_, E) {
  return typeof _ == "number" && typeof E == "number" && _ <= E;
}
function Nt(_, E) {
  return h_({
    name: rt,
    constraints: [_],
    validator: {
      validate: function(O, R) {
        return St(O, R == null ? void 0 : R.constraints[0]);
      },
      defaultMessage: Y_(function(O) {
        return O + "$property must not be greater than $constraint1";
      }, E)
    }
  }, E);
}
var Ct = "min";
function Tt(_, E) {
  return typeof _ == "number" && typeof E == "number" && _ >= E;
}
function wI(_, E) {
  return h_({
    name: Ct,
    constraints: [_],
    validator: {
      validate: function(O, R) {
        return Tt(O, R == null ? void 0 : R.constraints[0]);
      },
      defaultMessage: Y_(function(O) {
        return O + "$property must not be less than $constraint1";
      }, E)
    }
  }, E);
}
var yO = { exports: {} };
(function(_, E) {
  Object.defineProperty(E, "__esModule", {
    value: !0
  }), E.default = t;
  var O = R(Rt);
  function R(r) {
    return r && r.__esModule ? r : { default: r };
  }
  function I(r) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? I = function(v) {
      return typeof v;
    } : I = function(v) {
      return v && typeof Symbol == "function" && v.constructor === Symbol && v !== Symbol.prototype ? "symbol" : typeof v;
    }, I(r);
  }
  function t(r, M) {
    (0, O.default)(r);
    var v, B;
    I(M) === "object" ? (v = M.min || 0, B = M.max) : (v = arguments[1] || 0, B = arguments[2]);
    var h = r.match(/(\uFE0F|\uFE0E)/g) || [], K = r.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [], H = r.length - h.length - K.length;
    return H >= v && (typeof B > "u" || H <= B);
  }
  _.exports = E.default, _.exports.default = E.default;
})(yO, yO.exports);
var nt = yO.exports;
const Dt = /* @__PURE__ */ QA(nt);
var Lt = "maxLength";
function Mt(_, E) {
  return typeof _ == "string" && Dt(_, { min: 0, max: E });
}
function Pt(_, E) {
  return h_({
    name: Lt,
    constraints: [_],
    validator: {
      validate: function(O, R) {
        return Mt(O, R == null ? void 0 : R.constraints[0]);
      },
      defaultMessage: Y_(function(O) {
        return O + "$property must be shorter than or equal to $constraint1 characters";
      }, E)
    }
  }, E);
}
var ft = "isBoolean";
function ot(_) {
  return _ instanceof Boolean || typeof _ == "boolean";
}
function q(_) {
  return h_({
    name: ft,
    validator: {
      validate: function(E, O) {
        return ot(E);
      },
      defaultMessage: Y_(function(E) {
        return E + "$property must be a boolean value";
      }, _)
    }
  }, _);
}
var Ut = "isNumber";
function Gt(_, E) {
  if (E === void 0 && (E = {}), typeof _ != "number")
    return !1;
  if (_ === 1 / 0 || _ === -1 / 0)
    return !!E.allowInfinity;
  if (Number.isNaN(_))
    return !!E.allowNaN;
  if (E.maxDecimalPlaces !== void 0) {
    var O = 0;
    if (_ % 1 !== 0 && (O = _.toString().split(".")[1].length), O > E.maxDecimalPlaces)
      return !1;
  }
  return Number.isFinite(_);
}
function X(_, E) {
  return _ === void 0 && (_ = {}), h_({
    name: Ut,
    constraints: [_],
    validator: {
      validate: function(O, R) {
        return Gt(O, R == null ? void 0 : R.constraints[0]);
      },
      defaultMessage: Y_(function(O) {
        return O + "$property must be a number conforming to the specified constraints";
      }, E)
    }
  }, E);
}
var iR = function(_, E) {
  var O = typeof Symbol == "function" && _[Symbol.iterator];
  if (!O)
    return _;
  var R = O.call(_), I, t = [], r;
  try {
    for (; (E === void 0 || E-- > 0) && !(I = R.next()).done; )
      t.push(I.value);
  } catch (M) {
    r = { error: M };
  } finally {
    try {
      I && !I.done && (O = R.return) && O.call(R);
    } finally {
      if (r)
        throw r.error;
    }
  }
  return t;
}, vt = "isEnum";
function Ht(_, E) {
  var O = Object.keys(E).map(function(R) {
    return E[R];
  });
  return O.includes(_);
}
function Bt(_) {
  return Object.entries(_).filter(function(E) {
    var O = iR(E, 2), R = O[0];
    return O[1], isNaN(parseInt(R));
  }).map(function(E) {
    var O = iR(E, 2);
    O[0];
    var R = O[1];
    return R;
  });
}
function n(_, E) {
  return h_({
    name: vt,
    constraints: [_, Bt(_)],
    validator: {
      validate: function(O, R) {
        return Ht(O, R == null ? void 0 : R.constraints[0]);
      },
      defaultMessage: Y_(function(O) {
        return O + "$property must be one of the following values: $constraint2";
      }, E)
    }
  }, E);
}
var Yt = "isInt";
function ht(_) {
  return typeof _ == "number" && Number.isInteger(_);
}
function D(_) {
  return h_({
    name: Yt,
    validator: {
      validate: function(E, O) {
        return ht(E);
      },
      defaultMessage: Y_(function(E) {
        return E + "$property must be an integer number";
      }, _)
    }
  }, _);
}
var ct = "isString";
function wt(_) {
  return _ instanceof String || typeof _ == "string";
}
function x(_) {
  return h_({
    name: ct,
    validator: {
      validate: function(E, O) {
        return wt(E);
      },
      defaultMessage: Y_(function(E) {
        return E + "$property must be a string";
      }, _)
    }
  }, _);
}
var bt = "isArray";
function mt(_) {
  return Array.isArray(_);
}
function a(_) {
  return h_({
    name: bt,
    validator: {
      validate: function(E, O) {
        return mt(E);
      },
      defaultMessage: Y_(function(E) {
        return E + "$property must be an array";
      }, _)
    }
  }, _);
}
var Kt = "arrayMinSize";
function Xt(_, E) {
  return Array.isArray(_) && _.length >= E;
}
function ut(_, E) {
  return h_({
    name: Kt,
    constraints: [_],
    validator: {
      validate: function(O, R) {
        return Xt(O, R == null ? void 0 : R.constraints[0]);
      },
      defaultMessage: Y_(function(O) {
        return O + "$property must contain at least $constraint1 elements";
      }, E)
    }
  }, E);
}
var xt = "arrayMaxSize";
function $t(_, E) {
  return Array.isArray(_) && _.length <= E;
}
function st(_, E) {
  return h_({
    name: xt,
    constraints: [_],
    validator: {
      validate: function(O, R) {
        return $t(O, R == null ? void 0 : R.constraints[0]);
      },
      defaultMessage: Y_(function(O) {
        return O + "$property must contain no more than $constraint1 elements";
      }, E)
    }
  }, E);
}
function n_(_, E, O) {
  return typeof _ == "string" ? DO(dR).validateSync(_, E, O) : DO(dR).validateSync(_, E);
}
var F;
(function(_) {
  _[_.PLAIN_TO_CLASS = 0] = "PLAIN_TO_CLASS", _[_.CLASS_TO_PLAIN = 1] = "CLASS_TO_PLAIN", _[_.CLASS_TO_CLASS = 2] = "CLASS_TO_CLASS";
})(F || (F = {}));
var pt = (
  /** @class */
  function() {
    function _() {
      this._typeMetadatas = /* @__PURE__ */ new Map(), this._transformMetadatas = /* @__PURE__ */ new Map(), this._exposeMetadatas = /* @__PURE__ */ new Map(), this._excludeMetadatas = /* @__PURE__ */ new Map(), this._ancestorsMap = /* @__PURE__ */ new Map();
    }
    return _.prototype.addTypeMetadata = function(E) {
      this._typeMetadatas.has(E.target) || this._typeMetadatas.set(E.target, /* @__PURE__ */ new Map()), this._typeMetadatas.get(E.target).set(E.propertyName, E);
    }, _.prototype.addTransformMetadata = function(E) {
      this._transformMetadatas.has(E.target) || this._transformMetadatas.set(E.target, /* @__PURE__ */ new Map()), this._transformMetadatas.get(E.target).has(E.propertyName) || this._transformMetadatas.get(E.target).set(E.propertyName, []), this._transformMetadatas.get(E.target).get(E.propertyName).push(E);
    }, _.prototype.addExposeMetadata = function(E) {
      this._exposeMetadatas.has(E.target) || this._exposeMetadatas.set(E.target, /* @__PURE__ */ new Map()), this._exposeMetadatas.get(E.target).set(E.propertyName, E);
    }, _.prototype.addExcludeMetadata = function(E) {
      this._excludeMetadatas.has(E.target) || this._excludeMetadatas.set(E.target, /* @__PURE__ */ new Map()), this._excludeMetadatas.get(E.target).set(E.propertyName, E);
    }, _.prototype.findTransformMetadatas = function(E, O, R) {
      return this.findMetadatas(this._transformMetadatas, E, O).filter(function(I) {
        return !I.options || I.options.toClassOnly === !0 && I.options.toPlainOnly === !0 ? !0 : I.options.toClassOnly === !0 ? R === F.CLASS_TO_CLASS || R === F.PLAIN_TO_CLASS : I.options.toPlainOnly === !0 ? R === F.CLASS_TO_PLAIN : !0;
      });
    }, _.prototype.findExcludeMetadata = function(E, O) {
      return this.findMetadata(this._excludeMetadatas, E, O);
    }, _.prototype.findExposeMetadata = function(E, O) {
      return this.findMetadata(this._exposeMetadatas, E, O);
    }, _.prototype.findExposeMetadataByCustomName = function(E, O) {
      return this.getExposedMetadatas(E).find(function(R) {
        return R.options && R.options.name === O;
      });
    }, _.prototype.findTypeMetadata = function(E, O) {
      return this.findMetadata(this._typeMetadatas, E, O);
    }, _.prototype.getStrategy = function(E) {
      var O = this._excludeMetadatas.get(E), R = O && O.get(void 0), I = this._exposeMetadatas.get(E), t = I && I.get(void 0);
      return R && t || !R && !t ? "none" : R ? "excludeAll" : "exposeAll";
    }, _.prototype.getExposedMetadatas = function(E) {
      return this.getMetadata(this._exposeMetadatas, E);
    }, _.prototype.getExcludedMetadatas = function(E) {
      return this.getMetadata(this._excludeMetadatas, E);
    }, _.prototype.getExposedProperties = function(E, O) {
      return this.getExposedMetadatas(E).filter(function(R) {
        return !R.options || R.options.toClassOnly === !0 && R.options.toPlainOnly === !0 ? !0 : R.options.toClassOnly === !0 ? O === F.CLASS_TO_CLASS || O === F.PLAIN_TO_CLASS : R.options.toPlainOnly === !0 ? O === F.CLASS_TO_PLAIN : !0;
      }).map(function(R) {
        return R.propertyName;
      });
    }, _.prototype.getExcludedProperties = function(E, O) {
      return this.getExcludedMetadatas(E).filter(function(R) {
        return !R.options || R.options.toClassOnly === !0 && R.options.toPlainOnly === !0 ? !0 : R.options.toClassOnly === !0 ? O === F.CLASS_TO_CLASS || O === F.PLAIN_TO_CLASS : R.options.toPlainOnly === !0 ? O === F.CLASS_TO_PLAIN : !0;
      }).map(function(R) {
        return R.propertyName;
      });
    }, _.prototype.clear = function() {
      this._typeMetadatas.clear(), this._exposeMetadatas.clear(), this._excludeMetadatas.clear(), this._ancestorsMap.clear();
    }, _.prototype.getMetadata = function(E, O) {
      var R = E.get(O), I;
      R && (I = Array.from(R.values()).filter(function(K) {
        return K.propertyName !== void 0;
      }));
      for (var t = [], r = 0, M = this.getAncestors(O); r < M.length; r++) {
        var v = M[r], B = E.get(v);
        if (B) {
          var h = Array.from(B.values()).filter(function(K) {
            return K.propertyName !== void 0;
          });
          t.push.apply(t, h);
        }
      }
      return t.concat(I || []);
    }, _.prototype.findMetadata = function(E, O, R) {
      var I = E.get(O);
      if (I) {
        var t = I.get(R);
        if (t)
          return t;
      }
      for (var r = 0, M = this.getAncestors(O); r < M.length; r++) {
        var v = M[r], B = E.get(v);
        if (B) {
          var h = B.get(R);
          if (h)
            return h;
        }
      }
    }, _.prototype.findMetadatas = function(E, O, R) {
      var I = E.get(O), t;
      I && (t = I.get(R));
      for (var r = [], M = 0, v = this.getAncestors(O); M < v.length; M++) {
        var B = v[M], h = E.get(B);
        h && h.has(R) && r.push.apply(r, h.get(R));
      }
      return r.slice().reverse().concat((t || []).slice().reverse());
    }, _.prototype.getAncestors = function(E) {
      if (!E)
        return [];
      if (!this._ancestorsMap.has(E)) {
        for (var O = [], R = Object.getPrototypeOf(E.prototype.constructor); typeof R.prototype < "u"; R = Object.getPrototypeOf(R.prototype.constructor))
          O.push(R);
        this._ancestorsMap.set(E, O);
      }
      return this._ancestorsMap.get(E);
    }, _;
  }()
), T_ = new pt();
function Wt() {
  if (typeof globalThis < "u")
    return globalThis;
  if (typeof global < "u")
    return global;
  if (typeof window < "u")
    return window;
  if (typeof self < "u")
    return self;
}
function jt(_) {
  return _ !== null && typeof _ == "object" && typeof _.then == "function";
}
var eR = function(_, E, O) {
  if (O || arguments.length === 2)
    for (var R = 0, I = E.length, t; R < I; R++)
      (t || !(R in E)) && (t || (t = Array.prototype.slice.call(E, 0, R)), t[R] = E[R]);
  return _.concat(t || Array.prototype.slice.call(E));
};
function Zt(_) {
  var E = new _();
  return !(E instanceof Set) && !("push" in E) ? [] : E;
}
var nI = (
  /** @class */
  function() {
    function _(E, O) {
      this.transformationType = E, this.options = O, this.recursionStack = /* @__PURE__ */ new Set();
    }
    return _.prototype.transform = function(E, O, R, I, t, r) {
      var M = this;
      if (r === void 0 && (r = 0), Array.isArray(O) || O instanceof Set) {
        var v = I && this.transformationType === F.PLAIN_TO_CLASS ? Zt(I) : [];
        return O.forEach(function(z, __) {
          var g = E ? E[__] : void 0;
          if (!M.options.enableCircularCheck || !M.isCircular(z)) {
            var I_ = void 0;
            if (typeof R != "function" && R && R.options && R.options.discriminator && R.options.discriminator.property && R.options.discriminator.subTypes) {
              if (M.transformationType === F.PLAIN_TO_CLASS) {
                I_ = R.options.discriminator.subTypes.find(function(C_) {
                  return C_.name === z[R.options.discriminator.property];
                });
                var Z = { newObject: v, object: z, property: void 0 }, W = R.typeFunction(Z);
                I_ === void 0 ? I_ = W : I_ = I_.value, R.options.keepDiscriminatorProperty || delete z[R.options.discriminator.property];
              }
              M.transformationType === F.CLASS_TO_CLASS && (I_ = z.constructor), M.transformationType === F.CLASS_TO_PLAIN && (z[R.options.discriminator.property] = R.options.discriminator.subTypes.find(function(C_) {
                return C_.value === z.constructor;
              }).name);
            } else
              I_ = R;
            var E_ = M.transform(g, z, I_, void 0, z instanceof Map, r + 1);
            v instanceof Set ? v.add(E_) : v.push(E_);
          } else
            M.transformationType === F.CLASS_TO_CLASS && (v instanceof Set ? v.add(z) : v.push(z));
        }), v;
      } else {
        if (R === String && !t)
          return O == null ? O : String(O);
        if (R === Number && !t)
          return O == null ? O : Number(O);
        if (R === Boolean && !t)
          return O == null ? O : !!O;
        if ((R === Date || O instanceof Date) && !t)
          return O instanceof Date ? new Date(O.valueOf()) : O == null ? O : new Date(O);
        if (Wt().Buffer && (R === Buffer || O instanceof Buffer) && !t)
          return O == null ? O : Buffer.from(O);
        if (jt(O) && !t)
          return new Promise(function(z, __) {
            O.then(function(g) {
              return z(M.transform(void 0, g, R, void 0, void 0, r + 1));
            }, __);
          });
        if (!t && O !== null && typeof O == "object" && typeof O.then == "function")
          return O;
        if (typeof O == "object" && O !== null) {
          !R && O.constructor !== Object && (!Array.isArray(O) && O.constructor === Array || (R = O.constructor)), !R && E && (R = E.constructor), this.options.enableCircularCheck && this.recursionStack.add(O);
          var B = this.getKeys(R, O, t), h = E || {};
          !E && (this.transformationType === F.PLAIN_TO_CLASS || this.transformationType === F.CLASS_TO_CLASS) && (t ? h = /* @__PURE__ */ new Map() : R ? h = new R() : h = {});
          for (var K = function(z) {
            if (z === "__proto__" || z === "constructor")
              return "continue";
            var __ = z, g = z, I_ = z;
            if (!H.options.ignoreDecorators && R) {
              if (H.transformationType === F.PLAIN_TO_CLASS) {
                var Z = T_.findExposeMetadataByCustomName(R, z);
                Z && (I_ = Z.propertyName, g = Z.propertyName);
              } else if (H.transformationType === F.CLASS_TO_PLAIN || H.transformationType === F.CLASS_TO_CLASS) {
                var Z = T_.findExposeMetadata(R, z);
                Z && Z.options && Z.options.name && (g = Z.options.name);
              }
            }
            var W = void 0;
            H.transformationType === F.PLAIN_TO_CLASS ? W = O[__] : O instanceof Map ? W = O.get(__) : O[__] instanceof Function ? W = O[__]() : W = O[__];
            var E_ = void 0, C_ = W instanceof Map;
            if (R && t)
              E_ = R;
            else if (R) {
              var k = T_.findTypeMetadata(R, I_);
              if (k) {
                var VI = { newObject: h, object: O, property: I_ }, NI = k.typeFunction ? k.typeFunction(VI) : k.reflectedType;
                k.options && k.options.discriminator && k.options.discriminator.property && k.options.discriminator.subTypes ? O[__] instanceof Array ? E_ = k : (H.transformationType === F.PLAIN_TO_CLASS && (E_ = k.options.discriminator.subTypes.find(function(Z_) {
                  if (W && W instanceof Object && k.options.discriminator.property in W)
                    return Z_.name === W[k.options.discriminator.property];
                }), E_ === void 0 ? E_ = NI : E_ = E_.value, k.options.keepDiscriminatorProperty || W && W instanceof Object && k.options.discriminator.property in W && delete W[k.options.discriminator.property]), H.transformationType === F.CLASS_TO_CLASS && (E_ = W.constructor), H.transformationType === F.CLASS_TO_PLAIN && W && (W[k.options.discriminator.property] = k.options.discriminator.subTypes.find(function(Z_) {
                  return Z_.value === W.constructor;
                }).name)) : E_ = NI, C_ = C_ || k.reflectedType === Map;
              } else if (H.options.targetMaps)
                H.options.targetMaps.filter(function(Z_) {
                  return Z_.target === R && !!Z_.properties[I_];
                }).forEach(function(Z_) {
                  return E_ = Z_.properties[I_];
                });
              else if (H.options.enableImplicitConversion && H.transformationType === F.PLAIN_TO_CLASS) {
                var CO = Reflect.getMetadata("design:type", R.prototype, I_);
                CO && (E_ = CO);
              }
            }
            var TO = Array.isArray(O[__]) ? H.getReflectedType(R, I_) : void 0, nO = E ? E[__] : void 0;
            if (h.constructor.prototype) {
              var kI = Object.getOwnPropertyDescriptor(h.constructor.prototype, g);
              if ((H.transformationType === F.PLAIN_TO_CLASS || H.transformationType === F.CLASS_TO_CLASS) && // eslint-disable-next-line @typescript-eslint/unbound-method
              (kI && !kI.set || h[g] instanceof Function))
                return "continue";
            }
            if (!H.options.enableCircularCheck || !H.isCircular(W)) {
              var CE = H.transformationType === F.PLAIN_TO_CLASS ? g : z, y = void 0;
              H.transformationType === F.CLASS_TO_PLAIN ? (y = O[CE], y = H.applyCustomTransformations(y, R, CE, O, H.transformationType), y = O[CE] === y ? W : y, y = H.transform(nO, y, E_, TO, C_, r + 1)) : W === void 0 && H.options.exposeDefaultValues ? y = h[g] : (y = H.transform(nO, W, E_, TO, C_, r + 1), y = H.applyCustomTransformations(y, R, CE, O, H.transformationType)), (y !== void 0 || H.options.exposeUnsetFields) && (h instanceof Map ? h.set(g, y) : h[g] = y);
            } else if (H.transformationType === F.CLASS_TO_CLASS) {
              var y = W;
              y = H.applyCustomTransformations(y, R, z, O, H.transformationType), (y !== void 0 || H.options.exposeUnsetFields) && (h instanceof Map ? h.set(g, y) : h[g] = y);
            }
          }, H = this, e = 0, t_ = B; e < t_.length; e++) {
            var r_ = t_[e];
            K(r_);
          }
          return this.options.enableCircularCheck && this.recursionStack.delete(O), h;
        } else
          return O;
      }
    }, _.prototype.applyCustomTransformations = function(E, O, R, I, t) {
      var r = this, M = T_.findTransformMetadatas(O, R, this.transformationType);
      return this.options.version !== void 0 && (M = M.filter(function(v) {
        return v.options ? r.checkVersion(v.options.since, v.options.until) : !0;
      })), this.options.groups && this.options.groups.length ? M = M.filter(function(v) {
        return v.options ? r.checkGroups(v.options.groups) : !0;
      }) : M = M.filter(function(v) {
        return !v.options || !v.options.groups || !v.options.groups.length;
      }), M.forEach(function(v) {
        E = v.transformFn({ value: E, key: R, obj: I, type: t, options: r.options });
      }), E;
    }, _.prototype.isCircular = function(E) {
      return this.recursionStack.has(E);
    }, _.prototype.getReflectedType = function(E, O) {
      if (E) {
        var R = T_.findTypeMetadata(E, O);
        return R ? R.reflectedType : void 0;
      }
    }, _.prototype.getKeys = function(E, O, R) {
      var I = this, t = T_.getStrategy(E);
      t === "none" && (t = this.options.strategy || "exposeAll");
      var r = [];
      if ((t === "exposeAll" || R) && (O instanceof Map ? r = Array.from(O.keys()) : r = Object.keys(O)), R)
        return r;
      if (this.options.ignoreDecorators && this.options.excludeExtraneousValues && E) {
        var M = T_.getExposedProperties(E, this.transformationType), v = T_.getExcludedProperties(E, this.transformationType);
        r = eR(eR([], M, !0), v, !0);
      }
      if (!this.options.ignoreDecorators && E) {
        var M = T_.getExposedProperties(E, this.transformationType);
        this.transformationType === F.PLAIN_TO_CLASS && (M = M.map(function(K) {
          var H = T_.findExposeMetadata(E, K);
          return H && H.options && H.options.name ? H.options.name : K;
        })), this.options.excludeExtraneousValues ? r = M : r = r.concat(M);
        var B = T_.getExcludedProperties(E, this.transformationType);
        B.length > 0 && (r = r.filter(function(K) {
          return !B.includes(K);
        })), this.options.version !== void 0 && (r = r.filter(function(K) {
          var H = T_.findExposeMetadata(E, K);
          return !H || !H.options ? !0 : I.checkVersion(H.options.since, H.options.until);
        })), this.options.groups && this.options.groups.length ? r = r.filter(function(K) {
          var H = T_.findExposeMetadata(E, K);
          return !H || !H.options ? !0 : I.checkGroups(H.options.groups);
        }) : r = r.filter(function(K) {
          var H = T_.findExposeMetadata(E, K);
          return !H || !H.options || !H.options.groups || !H.options.groups.length;
        });
      }
      return this.options.excludePrefixes && this.options.excludePrefixes.length && (r = r.filter(function(h) {
        return I.options.excludePrefixes.every(function(K) {
          return h.substr(0, K.length) !== K;
        });
      })), r = r.filter(function(h, K, H) {
        return H.indexOf(h) === K;
      }), r;
    }, _.prototype.checkVersion = function(E, O) {
      var R = !0;
      return R && E && (R = this.options.version >= E), R && O && (R = this.options.version < O), R;
    }, _.prototype.checkGroups = function(E) {
      return E ? this.options.groups.some(function(O) {
        return E.includes(O);
      }) : !0;
    }, _;
  }()
), DI = {
  enableCircularCheck: !1,
  enableImplicitConversion: !1,
  excludeExtraneousValues: !1,
  excludePrefixes: void 0,
  exposeDefaultValues: !1,
  exposeUnsetFields: !0,
  groups: void 0,
  ignoreDecorators: !1,
  strategy: void 0,
  targetMaps: void 0,
  version: void 0
}, G_ = function() {
  return G_ = Object.assign || function(_) {
    for (var E, O = 1, R = arguments.length; O < R; O++) {
      E = arguments[O];
      for (var I in E)
        Object.prototype.hasOwnProperty.call(E, I) && (_[I] = E[I]);
    }
    return _;
  }, G_.apply(this, arguments);
}, Ft = (
  /** @class */
  function() {
    function _() {
    }
    return _.prototype.instanceToPlain = function(E, O) {
      var R = new nI(F.CLASS_TO_PLAIN, G_(G_({}, DI), O));
      return R.transform(void 0, E, void 0, void 0, void 0, void 0);
    }, _.prototype.classToPlainFromExist = function(E, O, R) {
      var I = new nI(F.CLASS_TO_PLAIN, G_(G_({}, DI), R));
      return I.transform(O, E, void 0, void 0, void 0, void 0);
    }, _.prototype.plainToInstance = function(E, O, R) {
      var I = new nI(F.PLAIN_TO_CLASS, G_(G_({}, DI), R));
      return I.transform(void 0, O, E, void 0, void 0, void 0);
    }, _.prototype.plainToClassFromExist = function(E, O, R) {
      var I = new nI(F.PLAIN_TO_CLASS, G_(G_({}, DI), R));
      return I.transform(E, O, void 0, void 0, void 0, void 0);
    }, _.prototype.instanceToInstance = function(E, O) {
      var R = new nI(F.CLASS_TO_CLASS, G_(G_({}, DI), O));
      return R.transform(void 0, E, void 0, void 0, void 0, void 0);
    }, _.prototype.classToClassFromExist = function(E, O, R) {
      var I = new nI(F.CLASS_TO_CLASS, G_(G_({}, DI), R));
      return I.transform(O, E, void 0, void 0, void 0, void 0);
    }, _.prototype.serialize = function(E, O) {
      return JSON.stringify(this.instanceToPlain(E, O));
    }, _.prototype.deserialize = function(E, O, R) {
      var I = JSON.parse(O);
      return this.plainToInstance(E, I, R);
    }, _.prototype.deserializeArray = function(E, O, R) {
      var I = JSON.parse(O);
      return this.plainToInstance(E, I, R);
    }, _;
  }()
);
function A(_) {
  return _ === void 0 && (_ = {}), function(E, O) {
    T_.addExposeMetadata({
      target: E instanceof Function ? E : E.constructor,
      propertyName: O,
      options: _
    });
  };
}
function IO(_, E) {
  return E === void 0 && (E = {}), function(O, R) {
    T_.addTransformMetadata({
      target: O.constructor,
      propertyName: R,
      transformFn: _,
      options: E
    });
  };
}
function U(_, E) {
  return E === void 0 && (E = {}), function(O, R) {
    var I = Reflect.getMetadata("design:type", O, R);
    T_.addTypeMetadata({
      target: O.constructor,
      propertyName: R,
      reflectedType: I,
      typeFunction: _,
      options: E
    });
  };
}
var Jt = new Ft();
function V(_, E, O) {
  return Jt.plainToInstance(_, E, O);
}
function P(_) {
  return IO(({ value: E }) => E ?? (typeof _ == "function" ? _() : Array.isArray(_) ? [..._] : typeof _ == "object" ? _ === null ? null : { ..._ } : _));
}
var Qt = Object.defineProperty, zt = Object.getOwnPropertyDescriptor, nA = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? zt(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && Qt(E, O, I), I;
};
class nE {
}
nA([
  A(),
  S(),
  X(),
  P(0)
], nE.prototype, "x", 2);
nA([
  A(),
  N(),
  X(),
  P(0)
], nE.prototype, "y", 2);
var qt = Object.defineProperty, at = Object.getOwnPropertyDescriptor, gt = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? at(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && qt(E, O, I), I;
};
class DA {
}
gt([
  A(),
  S(),
  a(),
  o({ each: !0 }),
  U(() => nE)
], DA.prototype, "PointsList", 2);
var Vt = Object.defineProperty, kt = Object.getOwnPropertyDescriptor, fO = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? kt(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && Vt(E, O, I), I;
};
class N_ {
}
fO([
  A(),
  S(),
  X()
], N_.prototype, "left", 2);
fO([
  A(),
  S(),
  X()
], N_.prototype, "top", 2);
fO([
  A(),
  S(),
  X()
], N_.prototype, "right", 2);
fO([
  A(),
  S(),
  X()
], N_.prototype, "bottom", 2);
var dt = Object.defineProperty, yt = Object.getOwnPropertyDescriptor, OR = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? yt(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && dt(E, O, I), I;
};
class bI {
}
OR([
  A(),
  S(),
  D()
], bI.prototype, "Count", 2);
OR([
  A(),
  S(),
  o({ each: !0 }),
  a(),
  U(() => N_)
], bI.prototype, "List", 2);
OR([
  A(),
  S(),
  o({ each: !0 }),
  a(),
  U(() => DA)
], bI.prototype, "Points", 2);
var lt = Object.defineProperty, it = Object.getOwnPropertyDescriptor, y_ = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? it(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && lt(E, O, I), I;
};
class Q_ {
}
y_([
  A(),
  S(),
  n(iI),
  P(iI.UNKNOWN)
], Q_.prototype, "docFormat", 2);
y_([
  A(),
  S(),
  X(),
  P(0)
], Q_.prototype, "Width", 2);
y_([
  A(),
  S(),
  X(),
  P(0)
], Q_.prototype, "Height", 2);
y_([
  A(),
  S(),
  o(),
  U(() => nE)
], Q_.prototype, "Center", 2);
y_([
  A(),
  S(),
  X(),
  P(0)
], Q_.prototype, "Angle", 2);
y_([
  A(),
  S(),
  o(),
  U(() => nE)
], Q_.prototype, "LeftBottom", 2);
y_([
  A(),
  S(),
  o(),
  U(() => nE)
], Q_.prototype, "LeftTop", 2);
y_([
  A(),
  S(),
  o(),
  U(() => nE)
], Q_.prototype, "RightBottom", 2);
y_([
  A(),
  S(),
  o(),
  U(() => nE)
], Q_.prototype, "RightTop", 2);
y_([
  A(),
  S(),
  D()
], Q_.prototype, "Dpi", 2);
var et = Object.defineProperty, _r = Object.getOwnPropertyDescriptor, z_ = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? _r(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && et(E, O, I), I;
};
class x_ {
}
z_([
  A(),
  S(),
  i([f.UV_FIBERS, f.UV_BACKGROUND]),
  n(f)
], x_.prototype, "Type", 2);
z_([
  A(),
  N(),
  n(p)
], x_.prototype, "ElementResult", 2);
z_([
  A(),
  N(),
  n(cI)
], x_.prototype, "ElementDiagnose", 2);
z_([
  A(),
  N(),
  D()
], x_.prototype, "RectCount", 2);
z_([
  A(),
  N(),
  D()
], x_.prototype, "ExpectedCount", 2);
z_([
  A(),
  N(),
  n(l)
], x_.prototype, "LightValue", 2);
z_([
  A(),
  N(),
  X()
], x_.prototype, "LightDisp", 2);
z_([
  A(),
  N(),
  a(),
  o({ each: !0 }),
  U(() => N_)
], x_.prototype, "RectArray", 2);
z_([
  A(),
  N(),
  a(),
  X({}, { each: !0 })
], x_.prototype, "Width", 2);
z_([
  A(),
  N(),
  a(),
  X({}, { each: !0 })
], x_.prototype, "Length", 2);
z_([
  A(),
  N(),
  a(),
  X({}, { each: !0 })
], x_.prototype, "Area", 2);
class OO {
}
var Er = Object.defineProperty, Ir = Object.getOwnPropertyDescriptor, RR = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? Ir(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && Er(E, O, I), I;
}, MI;
const oO = (MI = class extends OO {
}, MI.fromPlain = (E) => V(MI, E), MI);
RR([
  A(),
  S(),
  i([f.UV_FIBERS, f.UV_BACKGROUND]),
  n(f)
], oO.prototype, "Type", 2);
RR([
  A(),
  S(),
  n(p)
], oO.prototype, "Result", 2);
RR([
  A(),
  S(),
  a(),
  o({ each: !0 }),
  U(() => x_)
], oO.prototype, "List", 2);
let Or = oO;
var Rr = Object.defineProperty, Ar = Object.getOwnPropertyDescriptor, tr = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? Ar(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && Rr(E, O, I), I;
};
class IE {
}
tr([
  A(),
  x(),
  S()
], IE.prototype, "image", 2);
var rr = Object.defineProperty, Sr = Object.getOwnPropertyDescriptor, l_ = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? Sr(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && rr(E, O, I), I;
};
class q_ {
}
l_([
  A(),
  S(),
  i([
    f.IMAGE_PATTERN,
    f.IR_VISIBILITY,
    f.OVI,
    f.IR_LUMINESCENCE,
    f.PORTRAIT_COMPARISON,
    f.KINEGRAM,
    f.LETTER_SCREEN,
    f.HOLOGRAM_DETECTION,
    f.FINGERPRINT_COMPARISON,
    f.LIVENESS
  ]),
  n(f)
], q_.prototype, "Type", 2);
l_([
  A(),
  N(),
  n(p)
], q_.prototype, "ElementResult", 2);
l_([
  A(),
  N(),
  n(cI)
], q_.prototype, "ElementDiagnose", 2);
l_([
  A(),
  N(),
  n(_O)
], q_.prototype, "ElementType", 2);
l_([
  A(),
  N(),
  n(l)
], q_.prototype, "LightIndex", 2);
l_([
  A(),
  N(),
  o(),
  U(() => N_)
], q_.prototype, "Area", 2);
l_([
  A(),
  N(),
  o(),
  U(() => IE)
], q_.prototype, "Image", 2);
l_([
  A(),
  N(),
  o(),
  U(() => IE)
], q_.prototype, "EtalonImage", 2);
l_([
  A(),
  N(),
  X()
], q_.prototype, "PercentValue", 2);
l_([
  A(),
  N(),
  o(),
  U(() => bI)
], q_.prototype, "AreaList", 2);
var Nr = Object.defineProperty, Cr = Object.getOwnPropertyDescriptor, AR = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? Cr(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && Nr(E, O, I), I;
}, PI;
const UO = (PI = class extends OO {
}, PI.fromPlain = (E) => V(PI, E), PI);
AR([
  A(),
  S(),
  i([
    f.IMAGE_PATTERN,
    f.IR_VISIBILITY,
    f.OVI,
    f.IR_LUMINESCENCE,
    f.PORTRAIT_COMPARISON,
    f.KINEGRAM,
    f.LETTER_SCREEN,
    f.HOLOGRAM_DETECTION,
    f.FINGERPRINT_COMPARISON,
    f.LIVENESS
  ]),
  n(f)
], UO.prototype, "Type", 2);
AR([
  A(),
  S(),
  n(p)
], UO.prototype, "Result", 2);
AR([
  A(),
  S(),
  a(),
  o({ each: !0 }),
  U(() => q_)
], UO.prototype, "List", 2);
let Tr = UO;
var nr = Object.defineProperty, Dr = Object.getOwnPropertyDescriptor, c_ = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? Dr(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && nr(E, O, I), I;
};
class H_ {
}
c_([
  A(),
  S(),
  i([f.OCR_SECURITY_TEXT]),
  n(f)
], H_.prototype, "Type", 2);
c_([
  A(),
  N(),
  n(p)
], H_.prototype, "ElementResult", 2);
c_([
  A(),
  N(),
  n(cI)
], H_.prototype, "ElementDiagnose", 2);
c_([
  A(),
  N(),
  n(IR)
], H_.prototype, "CriticalFlag", 2);
c_([
  A(),
  N(),
  n(l)
], H_.prototype, "LightType", 2);
c_([
  A(),
  N(),
  o(),
  U(() => N_)
], H_.prototype, "FieldRect", 2);
c_([
  A(),
  N(),
  X()
], H_.prototype, "EtalonResultType", 2);
c_([
  A(),
  N(),
  X()
], H_.prototype, "EtalonFieldType", 2);
c_([
  A(),
  N(),
  X()
], H_.prototype, "EtalonLightType", 2);
c_([
  A(),
  N(),
  x()
], H_.prototype, "SecurityTextResultOCR", 2);
c_([
  A(),
  N(),
  x()
], H_.prototype, "EtalonResultOCR", 2);
c_([
  A(),
  N(),
  X()
], H_.prototype, "Reserved1", 2);
c_([
  A(),
  N(),
  X()
], H_.prototype, "Reserved2", 2);
var Lr = Object.defineProperty, Mr = Object.getOwnPropertyDescriptor, tR = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? Mr(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && Lr(E, O, I), I;
}, fI;
const GO = (fI = class extends OO {
}, fI.fromPlain = (E) => V(fI, E), fI);
tR([
  A(),
  S(),
  i([f.OCR_SECURITY_TEXT]),
  n(f)
], GO.prototype, "Type", 2);
tR([
  A(),
  S(),
  n(p)
], GO.prototype, "Result", 2);
tR([
  A(),
  S(),
  a(),
  o({ each: !0 }),
  U(() => H_)
], GO.prototype, "List", 2);
let Pr = GO;
var fr = Object.defineProperty, or = Object.getOwnPropertyDescriptor, LA = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? or(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && fr(E, O, I), I;
};
class rR {
}
LA([
  A(),
  N(),
  D()
], rR.prototype, "Count", 2);
LA([
  A(),
  N(),
  a(),
  o({ each: !0 }),
  U(() => IE)
], rR.prototype, "Images", 2);
var Ur = Object.defineProperty, Gr = Object.getOwnPropertyDescriptor, $_ = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? Gr(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && Ur(E, O, I), I;
};
class w_ {
}
$_([
  A(),
  S(),
  i([f.IPI, f.IR_PHOTO]),
  n(f)
], w_.prototype, "Type", 2);
$_([
  A(),
  N(),
  n(p)
], w_.prototype, "ElementResult", 2);
$_([
  A(),
  N(),
  n(cI)
], w_.prototype, "ElementDiagnose", 2);
$_([
  A(),
  N(),
  n(l)
], w_.prototype, "LightIndex", 2);
$_([
  A(),
  N(),
  o(),
  U(() => N_)
], w_.prototype, "Area", 2);
$_([
  A(),
  N(),
  o(),
  U(() => IE)
], w_.prototype, "SourceImage", 2);
$_([
  A(),
  N(),
  o(),
  U(() => rR)
], w_.prototype, "ResultImages", 2);
$_([
  A(),
  N(),
  D()
], w_.prototype, "FieldTypesCount", 2);
$_([
  A(),
  N(),
  a(),
  X({}, { each: !0 })
], w_.prototype, "FieldTypesList", 2);
$_([
  A(),
  N(),
  X()
], w_.prototype, "Step", 2);
$_([
  A(),
  N(),
  X()
], w_.prototype, "Angle", 2);
$_([
  A(),
  N(),
  X()
], w_.prototype, "Reserved3", 2);
var vr = Object.defineProperty, Hr = Object.getOwnPropertyDescriptor, SR = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? Hr(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && vr(E, O, I), I;
}, oI;
const vO = (oI = class extends OO {
}, oI.fromPlain = (E) => V(oI, E), oI);
SR([
  A(),
  S(),
  i([f.IPI, f.IR_PHOTO]),
  n(f)
], vO.prototype, "Type", 2);
SR([
  A(),
  S(),
  n(p)
], vO.prototype, "Result", 2);
SR([
  A(),
  S(),
  a(),
  o({ each: !0 }),
  U(() => w_)
], vO.prototype, "List", 2);
let Br = vO;
var Yr = Object.defineProperty, hr = Object.getOwnPropertyDescriptor, OE = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? hr(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && Yr(E, O, I), I;
};
class i_ {
}
OE([
  A(),
  S(),
  i([
    f.UV_LUMINESCENCE,
    f.IR_B900,
    f.AXIAL_PROTECTION,
    f.PHOTO_EMBED_TYPE,
    f.HOLOGRAMS,
    f.PHOTO_AREA,
    f.BARCODE_FORMAT_CHECK,
    f.EXTENDED_OCR_CHECK,
    f.EXTENDED_MRZ_CHECK,
    f.STATUS_ONLY
  ]),
  n(f)
], i_.prototype, "Type", 2);
OE([
  A(),
  N(),
  n(p)
], i_.prototype, "ElementResult", 2);
OE([
  A(),
  N(),
  n(cI)
], i_.prototype, "ElementDiagnose", 2);
OE([
  A(),
  N(),
  n(_O)
], i_.prototype, "ElementType", 2);
OE([
  A(),
  N(),
  o(),
  U(() => N_)
], i_.prototype, "ElementRect", 2);
OE([
  A(),
  N(),
  n(IA)
], i_.prototype, "Visibility", 2);
OE([
  A(),
  N(),
  n(IR)
], i_.prototype, "CriticalFlag", 2);
OE([
  A(),
  N(),
  o(),
  U(() => bI)
], i_.prototype, "AreaList", 2);
OE([
  A(),
  N(),
  X()
], i_.prototype, "Reserved2", 2);
var cr = Object.defineProperty, wr = Object.getOwnPropertyDescriptor, NR = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? wr(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && cr(E, O, I), I;
}, UI;
const HO = (UI = class extends OO {
}, UI.fromPlain = (E) => V(UI, E), UI);
NR([
  A(),
  S(),
  i([
    f.UV_LUMINESCENCE,
    f.IR_B900,
    f.AXIAL_PROTECTION,
    f.PHOTO_EMBED_TYPE,
    f.HOLOGRAMS,
    f.PHOTO_AREA,
    f.BARCODE_FORMAT_CHECK,
    f.EXTENDED_OCR_CHECK,
    f.EXTENDED_MRZ_CHECK,
    f.STATUS_ONLY
  ]),
  n(f)
], HO.prototype, "Type", 2);
NR([
  A(),
  S(),
  n(p)
], HO.prototype, "Result", 2);
NR([
  A(),
  S(),
  a(),
  o({ each: !0 }),
  U(() => i_)
], HO.prototype, "List", 2);
let br = HO;
var lO;
((_) => {
  _.transformList = (E) => {
    const O = [];
    return E.forEach((R) => {
      if (!FE(R) || !R.hasOwnProperty("Type"))
        return;
      const { Type: I } = R;
      switch (I) {
        case f.UV_FIBERS:
        case f.UV_BACKGROUND:
          O.push(Or.fromPlain(R));
          break;
        case f.IMAGE_PATTERN:
        case f.IR_VISIBILITY:
        case f.OVI:
        case f.IR_LUMINESCENCE:
        case f.PORTRAIT_COMPARISON:
        case f.KINEGRAM:
        case f.LETTER_SCREEN:
        case f.HOLOGRAM_DETECTION:
        case f.FINGERPRINT_COMPARISON:
        case f.LIVENESS:
          O.push(Tr.fromPlain(R));
          break;
        case f.OCR_SECURITY_TEXT:
          O.push(Pr.fromPlain(R));
          break;
        case f.IPI:
        case f.IR_PHOTO:
          O.push(Br.fromPlain(R));
          break;
        case f.UV_LUMINESCENCE:
        case f.IR_B900:
        case f.AXIAL_PROTECTION:
        case f.PHOTO_EMBED_TYPE:
        case f.HOLOGRAMS:
        case f.PHOTO_AREA:
        case f.BARCODE_FORMAT_CHECK:
        case f.EXTENDED_OCR_CHECK:
        case f.EXTENDED_MRZ_CHECK:
        case f.STATUS_ONLY:
          O.push(br.fromPlain(R));
          break;
      }
    }), O;
  };
})(lO || (lO = {}));
var mr = Object.defineProperty, Kr = Object.getOwnPropertyDescriptor, MA = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? Kr(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && mr(E, O, I), I;
};
class CR {
}
MA([
  A(),
  S(),
  D()
], CR.prototype, "Count", 2);
MA([
  A(),
  o({ each: !0 }),
  IO(({ obj: _ }) => lO.transformList(_.List), { toClassOnly: !0 }),
  a()
], CR.prototype, "List", 2);
class D_ extends TypeError {
  constructor(E, O) {
    super(E), this.name = "DocReaderTypeError", this.message = E, this.errors = O;
  }
}
const mR = class mR {
};
mR.getLightingScheme = (E) => LI(typeof E == "number" ? E : E.light);
let P_ = mR;
var Xr = Object.defineProperty, ur = Object.getOwnPropertyDescriptor, mI = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? ur(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && Xr(E, O, I), I;
}, BE;
const JE = (BE = class extends P_ {
}, BE.fromPlain = (E) => V(BE, E), BE.validate = (E) => {
  const O = n_(E);
  if (O.length)
    throw new D_("AuthenticityContainer validation error: the data received does not match model structure!", O);
  return !0;
}, BE);
mI([
  A(),
  S(),
  D(),
  P(l.OFF)
], JE.prototype, "light", 2);
mI([
  A(),
  S(),
  D(),
  P(0)
], JE.prototype, "list_idx", 2);
mI([
  A(),
  S(),
  D(),
  P(0)
], JE.prototype, "page_idx", 2);
mI([
  A(),
  S(),
  D(),
  P(0)
], JE.prototype, "buf_length", 2);
mI([
  A(),
  S(),
  n(c),
  i([
    c.AUTHENTICITY,
    c.FINGER_PRINT_COMPARISON,
    c.PORTRAIT_COMPARISON
  ])
], JE.prototype, "result_type", 2);
mI([
  A(),
  S(),
  o(),
  U(() => CR)
], JE.prototype, "AuthenticityCheckList", 2);
let xr = JE;
var $r = Object.defineProperty, sr = Object.getOwnPropertyDescriptor, KI = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? sr(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && $r(E, O, I), I;
}, YE;
const QE = (YE = class extends P_ {
}, YE.fromPlain = (E) => V(YE, E), YE.validate = (E) => {
  const O = n_(E);
  if (O.length)
    throw new D_("BoundsResultContainer validation error: the data received does not match model structure!", O);
  return !0;
}, YE);
KI([
  A(),
  S(),
  D(),
  P(l.OFF)
], QE.prototype, "light", 2);
KI([
  A(),
  S(),
  D(),
  P(0)
], QE.prototype, "list_idx", 2);
KI([
  A(),
  S(),
  D(),
  P(0)
], QE.prototype, "page_idx", 2);
KI([
  A(),
  S(),
  D(),
  P(0)
], QE.prototype, "buf_length", 2);
KI([
  A(),
  S(),
  n(c),
  i([
    c.DOCUMENT_POSITION,
    c.MRZ_POSITION,
    c.BARCODE_POSITION
  ])
], QE.prototype, "result_type", 2);
KI([
  A(),
  S(),
  o(),
  U(() => Q_)
], QE.prototype, "DocumentPosition", 2);
let pr = QE;
var Wr = Object.defineProperty, jr = Object.getOwnPropertyDescriptor, RO = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? jr(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && Wr(E, O, I), I;
};
class XI {
}
RO([
  A(),
  S(),
  x()
], XI.prototype, "mData", 2);
RO([
  A(),
  S(),
  X()
], XI.prototype, "mLength", 2);
RO([
  A()
], XI.prototype, "mReserved1", 2);
RO([
  A()
], XI.prototype, "mReserver2", 2);
RO([
  A(),
  S(),
  n(qO),
  P(qO.ALL)
], XI.prototype, "mType", 2);
var Zr = Object.defineProperty, Fr = Object.getOwnPropertyDescriptor, uI = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? Fr(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && Zr(E, O, I), I;
};
class zE {
}
uI([
  A(),
  S(),
  X(),
  P(0)
], zE.prototype, "Angle", 2);
uI([
  A(),
  S(),
  X(),
  P(1)
], zE.prototype, "bcColumn", 2);
uI([
  A(),
  S(),
  X(),
  P(0)
], zE.prototype, "bcErrorLevel", 2);
uI([
  A(),
  S(),
  X(),
  P(1)
], zE.prototype, "bcRow", 2);
uI([
  A(),
  N(),
  X(),
  P(0)
], zE.prototype, "minX", 2);
uI([
  A(),
  N(),
  X(),
  P(0)
], zE.prototype, "minY", 2);
var Jr = Object.defineProperty, Qr = Object.getOwnPropertyDescriptor, a_ = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? Qr(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && Jr(E, O, I), I;
};
class s_ {
}
a_([
  A(),
  S(),
  X(),
  P(0)
], s_.prototype, "bcAngle_DETECT", 2);
a_([
  A(),
  S(),
  n(aO),
  P(aO.NO_ERR)
], s_.prototype, "bcCodeResult", 2);
a_([
  A(),
  S(),
  X()
], s_.prototype, "bcCountModule", 2);
a_([
  A(),
  S(),
  a(),
  o({ each: !0 }),
  U(() => XI),
  P([])
], s_.prototype, "bcDataModule", 2);
a_([
  A(),
  N(),
  o(),
  U(() => zE)
], s_.prototype, "bcPDF417INFO", 2);
a_([
  A(),
  S(),
  o(),
  U(() => N_)
], s_.prototype, "bcROI_DETECT", 2);
a_([
  A(),
  S(),
  n(gO),
  P(gO.UNKNOWN)
], s_.prototype, "bcType_DECODE", 2);
a_([
  A(),
  S(),
  n(zO),
  P(zO.LINEAR)
], s_.prototype, "bcType_DETECT", 2);
a_([
  A(),
  N()
], s_.prototype, "bcReserved1", 2);
a_([
  A(),
  N()
], s_.prototype, "bcReserved2", 2);
a_([
  A(),
  N()
], s_.prototype, "bcReserved3", 2);
var zr = Object.defineProperty, qr = Object.getOwnPropertyDescriptor, PA = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? qr(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && zr(E, O, I), I;
};
class TR {
}
PA([
  A(),
  S(),
  D()
], TR.prototype, "nFields", 2);
PA([
  A(),
  S(),
  o({ each: !0 }),
  U(() => s_),
  a()
], TR.prototype, "pArrayFields", 2);
var ar = Object.defineProperty, gr = Object.getOwnPropertyDescriptor, xI = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? gr(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && ar(E, O, I), I;
}, hE;
const qE = (hE = class extends P_ {
}, hE.fromPlain = (E) => V(hE, E), hE.validate = (E) => {
  const O = n_(E);
  if (O.length)
    throw new D_("DocBarCodeInfoContainer validation error: the data received does not match model structure!", O);
  return !0;
}, hE);
xI([
  A(),
  S(),
  D(),
  P(l.OFF)
], qE.prototype, "light", 2);
xI([
  A(),
  S(),
  D(),
  P(0)
], qE.prototype, "list_idx", 2);
xI([
  A(),
  S(),
  D(),
  P(0)
], qE.prototype, "page_idx", 2);
xI([
  A(),
  S(),
  D(),
  P(0)
], qE.prototype, "buf_length", 2);
xI([
  A(),
  S(),
  n(c),
  i([
    c.BARCODES
  ])
], qE.prototype, "result_type", 2);
xI([
  A(),
  N(),
  o(),
  U(() => TR)
], qE.prototype, "DocBarCodeInfo", 2);
let Vr = qE;
class fA {
}
var kr = Object.defineProperty, dr = Object.getOwnPropertyDescriptor, BO = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? dr(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && kr(E, O, I), I;
}, GI;
const AO = (GI = class extends fA {
}, GI.fromPlain = (E) => V(GI, E), GI);
BO([
  A(),
  S(),
  n(LO)
], AO.prototype, "FieldType", 2);
BO([
  A(),
  S(),
  x()
], AO.prototype, "FieldName", 2);
BO([
  A(),
  S(),
  o(),
  U(() => IE)
], AO.prototype, "image", 2);
BO([
  A(),
  S(),
  o(),
  U(() => N_)
], AO.prototype, "FieldRect", 2);
let yr = AO;
var lr = Object.defineProperty, ir = Object.getOwnPropertyDescriptor, aE = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? ir(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && lr(E, O, I), I;
}, vI;
const DE = (vI = class extends fA {
}, vI.fromPlain = (E) => V(vI, E), vI);
aE([
  A(),
  S(),
  n(LO)
], DE.prototype, "FieldType", 2);
aE([
  A(),
  S(),
  x()
], DE.prototype, "FieldName", 2);
aE([
  A(),
  S(),
  o(),
  U(() => IE)
], DE.prototype, "image", 2);
aE([
  A(),
  S(),
  n(MO)
], DE.prototype, "RFID_OriginDG", 2);
aE([
  A(),
  S(),
  D()
], DE.prototype, "RFID_OriginDGTag", 2);
aE([
  A(),
  S(),
  D()
], DE.prototype, "RFID_OriginTagEntry", 2);
aE([
  A(),
  S(),
  D()
], DE.prototype, "RFID_OriginEntryView", 2);
let er = DE;
var iO;
((_) => {
  _.transformList = (E) => {
    const O = [];
    if (!Array.isArray(E))
      return O;
    for (const R of E) {
      if (FE(R) && R.hasOwnProperty("FieldRect")) {
        O.push(yr.fromPlain(R));
        break;
      }
      if (FE(R) && R.hasOwnProperty("RFID_OriginDG")) {
        O.push(er.fromPlain(R));
        break;
      }
    }
    return O;
  };
})(iO || (iO = {}));
var _S = Object.defineProperty, ES = Object.getOwnPropertyDescriptor, oA = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? ES(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && _S(E, O, I), I;
};
class nR {
}
oA([
  A(),
  S(),
  o({ each: !0 }),
  IO(({ obj: _ }) => iO.transformList(_.pArrayFields), { toClassOnly: !0 })
], nR.prototype, "pArrayFields", 2);
oA([
  A(),
  S(),
  D()
], nR.prototype, "nFields", 2);
var IS = Object.defineProperty, OS = Object.getOwnPropertyDescriptor, $I = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? OS(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && IS(E, O, I), I;
}, cE;
const gE = (cE = class extends P_ {
}, cE.fromPlain = (E) => V(cE, E), cE.validate = (E) => {
  const O = n_(E);
  if (O.length)
    throw new D_("DocGraphicsInfoContainer validation error: the data received does not match model structure!", O);
  return !0;
}, cE);
$I([
  A(),
  S(),
  D(),
  P(l.OFF)
], gE.prototype, "light", 2);
$I([
  A(),
  S(),
  D(),
  P(0)
], gE.prototype, "list_idx", 2);
$I([
  A(),
  S(),
  D(),
  P(0)
], gE.prototype, "page_idx", 2);
$I([
  A(),
  S(),
  D(),
  P(0)
], gE.prototype, "buf_length", 2);
$I([
  A(),
  S(),
  n(c),
  i([
    c.GRAPHICS,
    c.BARCODES_IMAGE_DATA,
    c.LIVE_PORTRAIT,
    c.EXT_PORTRAIT,
    c.FINGERPRINTS
  ])
], gE.prototype, "result_type", 2);
$I([
  A(),
  N(),
  o(),
  U(() => nR)
], gE.prototype, "DocGraphicsInfo", 2);
let RS = gE;
var AS = Object.defineProperty, tS = Object.getOwnPropertyDescriptor, DR = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? tS(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && AS(E, O, I), I;
};
class YO {
}
DR([
  A(),
  S(),
  D()
], YO.prototype, "SymbolCode", 2);
DR([
  A(),
  S(),
  X(),
  wI(0),
  Nt(100)
], YO.prototype, "SymbolProbability", 2);
DR([
  A(),
  N()
], YO.prototype, "Reserved", 2);
var rS = Object.defineProperty, SS = Object.getOwnPropertyDescriptor, hO = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? SS(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && rS(E, O, I), I;
};
class tO {
}
hO([
  A(),
  S(),
  o(),
  U(() => N_)
], tO.prototype, "SymbolRect", 2);
hO([
  A(),
  S(),
  D()
], tO.prototype, "CandidatesCount", 2);
hO([
  A(),
  S(),
  a(),
  o({ each: !0 }),
  U(() => YO)
], tO.prototype, "ListOfCandidates", 2);
hO([
  A(),
  N()
], tO.prototype, "Reserved", 2);
var NS = Object.defineProperty, CS = Object.getOwnPropertyDescriptor, LR = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? CS(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && NS(E, O, I), I;
};
class VE {
}
LR([
  A(),
  S(),
  D()
], VE.prototype, "SymbolsCount", 2);
LR([
  A(),
  N()
], VE.prototype, "Reserved", 2);
LR([
  A(),
  S(),
  a(),
  o({ each: !0 }),
  U(() => tO)
], VE.prototype, "StringResult", 2);
class cO {
}
var TS = Object.defineProperty, nS = Object.getOwnPropertyDescriptor, p_ = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? nS(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && TS(E, O, I), I;
}, HI;
const b_ = (HI = class extends cO {
}, HI.fromPlain = (E) => V(HI, E, { strategy: "excludeAll" }), HI);
p_([
  A(),
  S(),
  n(J_)
], b_.prototype, "FieldType", 2);
p_([
  A(),
  S(),
  o(),
  U(() => N_)
], b_.prototype, "FieldRect", 2);
p_([
  A(),
  S(),
  x()
], b_.prototype, "FieldName", 2);
p_([
  A(),
  S(),
  D()
], b_.prototype, "StringsCount", 2);
p_([
  A(),
  S(),
  a(),
  o({ each: !0 }),
  U(() => VE)
], b_.prototype, "StringsResult", 2);
p_([
  A(),
  S(),
  D()
], b_.prototype, "Buf_Length", 2);
p_([
  A(),
  S(),
  x()
], b_.prototype, "Buf_Text", 2);
p_([
  A(),
  N()
], b_.prototype, "FieldMask", 2);
p_([
  A(),
  N()
], b_.prototype, "Validity", 2);
p_([
  A(),
  N()
], b_.prototype, "InComparison", 2);
p_([
  A(),
  N()
], b_.prototype, "Reserved2", 2);
p_([
  A(),
  N()
], b_.prototype, "Reserved3", 2);
let DS = b_;
var LS = Object.defineProperty, MS = Object.getOwnPropertyDescriptor, U_ = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? MS(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && LS(E, O, I), I;
}, BI;
const f_ = (BI = class extends cO {
}, BI.fromPlain = (E) => V(BI, E, { strategy: "excludeAll" }), BI);
U_([
  A(),
  S(),
  n(J_)
], f_.prototype, "FieldType", 2);
U_([
  A(),
  S(),
  n(MO)
], f_.prototype, "RFID_OriginDG", 2);
U_([
  A(),
  N()
], f_.prototype, "RFID_OriginDGTag", 2);
U_([
  A(),
  S(),
  D()
], f_.prototype, "RFID_OriginTagEntry", 2);
U_([
  A(),
  N()
], f_.prototype, "RFID_OriginEntryView", 2);
U_([
  A(),
  S(),
  x()
], f_.prototype, "FieldName", 2);
U_([
  A(),
  S(),
  D()
], f_.prototype, "StringsCount", 2);
U_([
  A(),
  S(),
  a(),
  o({ each: !0 }),
  U(() => VE)
], f_.prototype, "StringsResult", 2);
U_([
  A(),
  S(),
  D()
], f_.prototype, "Buf_Length", 2);
U_([
  A(),
  S(),
  x()
], f_.prototype, "Buf_Text", 2);
U_([
  A(),
  N()
], f_.prototype, "FieldMask", 2);
U_([
  A(),
  N()
], f_.prototype, "Validity", 2);
U_([
  A(),
  N()
], f_.prototype, "InComparison", 2);
U_([
  A(),
  N()
], f_.prototype, "Reserved2", 2);
U_([
  A(),
  N()
], f_.prototype, "Reserved3", 2);
let PS = f_;
var fS = Object.defineProperty, oS = Object.getOwnPropertyDescriptor, m_ = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? oS(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && fS(E, O, I), I;
}, YI;
const B_ = (YI = class extends cO {
}, YI.fromPlain = (E) => V(YI, E, { strategy: "excludeAll" }), YI);
m_([
  A(),
  S(),
  n(J_)
], B_.prototype, "wFieldType", 2);
m_([
  A(),
  S(),
  n(EE)
], B_.prototype, "wLCID", 2);
m_([
  A(),
  S(),
  o(),
  U(() => N_)
], B_.prototype, "FieldRect", 2);
m_([
  A(),
  S(),
  x()
], B_.prototype, "FieldName", 2);
m_([
  A(),
  S(),
  D()
], B_.prototype, "StringsCount", 2);
m_([
  A(),
  S(),
  a(),
  o({ each: !0 }),
  U(() => VE)
], B_.prototype, "StringsResult", 2);
m_([
  A(),
  S(),
  D()
], B_.prototype, "Buf_Length", 2);
m_([
  A(),
  S(),
  x()
], B_.prototype, "Buf_Text", 2);
m_([
  A(),
  N()
], B_.prototype, "FieldMask", 2);
m_([
  A(),
  N()
], B_.prototype, "Validity", 2);
m_([
  A(),
  N()
], B_.prototype, "InComparison", 2);
m_([
  A(),
  N()
], B_.prototype, "Reserved2", 2);
m_([
  A(),
  N()
], B_.prototype, "Reserved3", 2);
let US = B_;
var GS = Object.defineProperty, vS = Object.getOwnPropertyDescriptor, o_ = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? vS(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && GS(E, O, I), I;
}, hI;
const L_ = (hI = class extends cO {
}, hI.fromPlain = (E) => V(hI, E, { strategy: "excludeAll" }), hI);
o_([
  A(),
  S(),
  n(J_)
], L_.prototype, "wFieldType", 2);
o_([
  A(),
  S(),
  n(EE)
], L_.prototype, "wLCID", 2);
o_([
  A(),
  S(),
  n(MO)
], L_.prototype, "RFID_OriginDG", 2);
o_([
  A(),
  N()
], L_.prototype, "RFID_OriginDGTag", 2);
o_([
  A(),
  S(),
  D()
], L_.prototype, "RFID_OriginTagEntry", 2);
o_([
  A(),
  N()
], L_.prototype, "RFID_OriginEntryView", 2);
o_([
  A(),
  S(),
  x()
], L_.prototype, "FieldName", 2);
o_([
  A(),
  S(),
  D()
], L_.prototype, "StringsCount", 2);
o_([
  A(),
  S(),
  a(),
  o({ each: !0 }),
  U(() => VE)
], L_.prototype, "StringsResult", 2);
o_([
  A(),
  S(),
  D()
], L_.prototype, "Buf_Length", 2);
o_([
  A(),
  S(),
  x()
], L_.prototype, "Buf_Text", 2);
o_([
  A(),
  N()
], L_.prototype, "FieldMask", 2);
o_([
  A(),
  N()
], L_.prototype, "Validity", 2);
o_([
  A(),
  N()
], L_.prototype, "InComparison", 2);
o_([
  A(),
  N()
], L_.prototype, "Reserved2", 2);
o_([
  A(),
  N()
], L_.prototype, "Reserved3", 2);
let HS = L_;
var eO;
((_) => {
  _.transformList = (E) => E.map((O) => (0, _.transform)(O)), _.transform = (E) => {
    if (FE(E)) {
      if (E.hasOwnProperty("FieldType") && E.hasOwnProperty("FieldRect"))
        return DS.fromPlain(E);
      if (E.hasOwnProperty("FieldType") && E.hasOwnProperty("RFID_OriginDG"))
        return PS.fromPlain(E);
      if (E.hasOwnProperty("wFieldType") && E.hasOwnProperty("FieldRect"))
        return US.fromPlain(E);
    }
    return HS.fromPlain(E);
  };
})(eO || (eO = {}));
var BS = Object.defineProperty, YS = Object.getOwnPropertyDescriptor, UA = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? YS(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && BS(E, O, I), I;
};
class MR {
}
UA([
  A(),
  S(),
  D()
], MR.prototype, "nFields", 2);
UA([
  A(),
  S(),
  a(),
  o({ each: !0 }),
  IO(({ obj: _ }) => eO.transformList(_.pArrayFields), { toClassOnly: !0 })
], MR.prototype, "pArrayFields", 2);
var hS = Object.defineProperty, cS = Object.getOwnPropertyDescriptor, sI = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? cS(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && hS(E, O, I), I;
}, wE;
const kE = (wE = class extends P_ {
}, wE.fromPlain = (E) => V(wE, E), wE.validate = (E) => {
  const O = n_(E);
  if (O.length)
    throw new D_("DocVisualExtendedInfoContainer validation error: the data received does not match model structure!", O);
  return !0;
}, wE);
sI([
  A(),
  S(),
  D(),
  P(l.OFF)
], kE.prototype, "light", 2);
sI([
  A(),
  S(),
  D(),
  P(0)
], kE.prototype, "list_idx", 2);
sI([
  A(),
  S(),
  D(),
  P(0)
], kE.prototype, "page_idx", 2);
sI([
  A(),
  S(),
  D(),
  P(0)
], kE.prototype, "buf_length", 2);
sI([
  A(),
  S(),
  n(c),
  i([
    c.VISUAL_OCR_EXTENDED,
    c.MRZ_OCR_EXTENDED,
    c.BARCODES_TEXT_DATA,
    c.MAGNETIC_STRIPE_TEXT_DATA
  ])
], kE.prototype, "result_type", 2);
sI([
  A(),
  N(),
  o(),
  U(() => MR)
], kE.prototype, "DocVisualExtendedInfo", 2);
let wS = kE;
var bS = Object.defineProperty, mS = Object.getOwnPropertyDescriptor, pI = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? mS(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && bS(E, O, I), I;
}, bE;
const dE = (bE = class extends P_ {
}, bE.fromPlain = (E) => V(bE, E), bE.validate = (E) => {
  const O = n_(E);
  if (O.length)
    throw new D_("EncryptedRCLContainer validation error: the data received does not match model structure!", O);
  return !0;
}, bE);
pI([
  A(),
  S(),
  D(),
  P(l.OFF)
], dE.prototype, "light", 2);
pI([
  A(),
  S(),
  D(),
  P(0)
], dE.prototype, "list_idx", 2);
pI([
  A(),
  S(),
  D(),
  P(0)
], dE.prototype, "page_idx", 2);
pI([
  A(),
  S(),
  D(),
  P(0)
], dE.prototype, "buf_length", 2);
pI([
  A(),
  S(),
  n(c),
  i([c.ENCRYPTED_RCL])
], dE.prototype, "result_type", 2);
pI([
  A(),
  S(),
  x()
], dE.prototype, "EncryptedRCL", 2);
let KS = dE;
var XS = Object.defineProperty, uS = Object.getOwnPropertyDescriptor, yE = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? uS(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && XS(E, O, I), I;
};
class LE {
}
yE([
  A(),
  S(),
  n(EA)
], LE.prototype, "type", 2);
yE([
  A(),
  S(),
  n(p)
], LE.prototype, "result", 2);
yE([
  A(),
  S(),
  n(_O),
  P(_O.BLANK)
], LE.prototype, "featureType", 2);
yE([
  A(),
  S(),
  o(),
  U(() => bI)
], LE.prototype, "areas", 2);
yE([
  A(),
  S(),
  X()
], LE.prototype, "mean", 2);
yE([
  A(),
  S(),
  X()
], LE.prototype, "std_dev", 2);
yE([
  A(),
  S(),
  D()
], LE.prototype, "probability", 2);
var xS = Object.defineProperty, $S = Object.getOwnPropertyDescriptor, PR = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? $S(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && xS(E, O, I), I;
};
class wO {
}
PR([
  A(),
  S(),
  n(p)
], wO.prototype, "result", 2);
PR([
  A(),
  S(),
  o({ each: !0 }),
  U(() => LE)
], wO.prototype, "List", 2);
PR([
  A(),
  S(),
  D()
], wO.prototype, "Count", 2);
var sS = Object.defineProperty, pS = Object.getOwnPropertyDescriptor, WI = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? pS(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && sS(E, O, I), I;
}, mE;
const lE = (mE = class extends P_ {
}, mE.fromPlain = (E) => V(mE, E), mE.validate = (E) => {
  const O = n_(E);
  if (O.length)
    throw new D_("ImageQualityCheckListContainer validation error: the data received does not match model structure!", O);
  return !0;
}, mE);
WI([
  A(),
  S(),
  D(),
  P(l.OFF)
], lE.prototype, "light", 2);
WI([
  A(),
  S(),
  D(),
  P(0)
], lE.prototype, "list_idx", 2);
WI([
  A(),
  S(),
  D(),
  P(0)
], lE.prototype, "page_idx", 2);
WI([
  A(),
  S(),
  D(),
  P(0)
], lE.prototype, "buf_length", 2);
WI([
  A(),
  S(),
  n(c),
  i([c.INPUT_IMAGE_QUALITY])
], lE.prototype, "result_type", 2);
WI([
  A(),
  S(),
  o(),
  U(() => wO)
], lE.prototype, "ImageQualityCheckList", 2);
let WS = lE;
var jS = Object.defineProperty, ZS = Object.getOwnPropertyDescriptor, bO = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? ZS(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && jS(E, O, I), I;
};
class jI {
}
bO([
  A(),
  S(),
  X()
], jI.prototype, "dg", 2);
bO([
  A(),
  S(),
  X()
], jI.prototype, "dgTag", 2);
bO([
  A(),
  S(),
  X()
], jI.prototype, "tagEntry", 2);
bO([
  A(),
  S(),
  X()
], jI.prototype, "entryView", 2);
var FS = Object.defineProperty, JS = Object.getOwnPropertyDescriptor, RE = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? JS(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && FS(E, O, I), I;
};
class e_ {
}
RE([
  A(),
  S(),
  x()
], e_.prototype, "value", 2);
RE([
  A(),
  S(),
  x()
], e_.prototype, "originalValue", 2);
RE([
  A(),
  S(),
  n(TE)
], e_.prototype, "source", 2);
RE([
  A(),
  S(),
  D()
], e_.prototype, "containerType", 2);
RE([
  A(),
  S(),
  D()
], e_.prototype, "pageIndex", 2);
RE([
  A(),
  S(),
  n(l)
], e_.prototype, "lightIndex", 2);
RE([
  A(),
  S(),
  o(),
  U(() => N_)
], e_.prototype, "fieldRect", 2);
RE([
  A(),
  N(),
  o(),
  U(() => jI)
], e_.prototype, "rfidOrigin", 2);
RE([
  A(),
  N(),
  D()
], e_.prototype, "originalPageIndex", 2);
var QS = Object.defineProperty, zS = Object.getOwnPropertyDescriptor, mO = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? zS(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && QS(E, O, I), I;
};
class rO {
}
mO([
  A(),
  S(),
  x()
], rO.prototype, "fieldName", 2);
mO([
  A(),
  S(),
  n(LO)
], rO.prototype, "fieldType", 2);
mO([
  A(),
  S(),
  o({ each: !0 }),
  U(() => e_)
], rO.prototype, "valueList", 2);
mO([
  A(),
  S(),
  D()
], rO.prototype, "valueCount", 2);
var qS = Object.defineProperty, aS = Object.getOwnPropertyDescriptor, GA = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? aS(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && qS(E, O, I), I;
};
class fR {
}
GA([
  A(),
  S(),
  X()
], fR.prototype, "containerType", 2);
GA([
  A(),
  S(),
  n(TE)
], fR.prototype, "source", 2);
var gS = Object.defineProperty, VS = Object.getOwnPropertyDescriptor, KO = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? VS(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && gS(E, O, I), I;
};
class SO {
}
KO([
  A(),
  S(),
  D()
], SO.prototype, "fieldCount", 2);
KO([
  A(),
  S(),
  D()
], SO.prototype, "availableSourceCount", 2);
KO([
  A(),
  S(),
  o({ each: !0 }),
  U(() => fR)
], SO.prototype, "availableSourceList", 2);
KO([
  A(),
  S(),
  o({ each: !0 }),
  U(() => rO)
], SO.prototype, "fieldList", 2);
var kS = Object.defineProperty, dS = Object.getOwnPropertyDescriptor, ZI = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? dS(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && kS(E, O, I), I;
}, KE;
const iE = (KE = class extends P_ {
}, KE.fromPlain = (E) => V(KE, E), KE.validate = (E) => {
  const O = n_(E);
  if (O.length)
    throw new D_("ImagesResultContainer validation error: the data received does not match model structure!", O);
  return !0;
}, KE);
ZI([
  A(),
  S(),
  D(),
  P(l.OFF)
], iE.prototype, "light", 2);
ZI([
  A(),
  S(),
  D(),
  P(0)
], iE.prototype, "list_idx", 2);
ZI([
  A(),
  S(),
  D(),
  P(0)
], iE.prototype, "page_idx", 2);
ZI([
  A(),
  S(),
  D(),
  P(0)
], iE.prototype, "buf_length", 2);
ZI([
  A(),
  S(),
  n(c),
  i([c.IMAGES])
], iE.prototype, "result_type", 2);
ZI([
  A(),
  S(),
  o(),
  U(() => SO)
], iE.prototype, "Images", 2);
let yS = iE;
var lS = Object.defineProperty, iS = Object.getOwnPropertyDescriptor, FI = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? iS(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && lS(E, O, I), I;
}, XE;
const eE = (XE = class extends P_ {
}, XE.fromPlain = (E) => V(XE, E), XE.validate = (E) => {
  const O = n_(E);
  if (O.length)
    throw new D_("LicenseContainer validation error: the data received does not match model structure!", O);
  return !0;
}, XE);
FI([
  A(),
  S(),
  D(),
  P(l.OFF)
], eE.prototype, "light", 2);
FI([
  A(),
  S(),
  D(),
  P(0)
], eE.prototype, "list_idx", 2);
FI([
  A(),
  S(),
  D(),
  P(0)
], eE.prototype, "page_idx", 2);
FI([
  A(),
  S(),
  D(),
  P(0)
], eE.prototype, "buf_length", 2);
FI([
  A(),
  S(),
  n(c),
  i([c.LICENSE])
], eE.prototype, "result_type", 2);
FI([
  A(),
  S(),
  x()
], eE.prototype, "License", 2);
let eS = eE;
var _N = Object.defineProperty, EN = Object.getOwnPropertyDescriptor, _I = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? EN(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && _N(E, O, I), I;
};
const u_ = class u_ {
};
u_.getMRZDataVerificationResult = (E) => E.Matrix[0], u_.getRFIDDataVerificationResult = (E) => E.Matrix[1], u_.getVisualDataVerificationResult = (E) => E.Matrix[2], u_.getBarcodeDataVerificationResult = (E) => E.Matrix[3], u_.getMRZAndRFIDDataComparingResult = (E) => E.Matrix[4], u_.getMRZAndVisualDataComparingResult = (E) => E.Matrix[5], u_.getMRZAndBarcodeDataComparingResult = (E) => E.Matrix[6], u_.getVisualAndRFIDDataComparingResult = (E) => E.Matrix[7], u_.getVisualAndBarcodeDataComparingResult = (E) => E.Matrix[8], u_.getRFIDAndBarcodeDataComparingResult = (E) => E.Matrix[9];
let d_ = u_;
_I([
  A(),
  S(),
  n(J_)
], d_.prototype, "wFieldType", 2);
_I([
  A(),
  N(),
  n(EE)
], d_.prototype, "wLCID", 2);
_I([
  A(),
  N(),
  x()
], d_.prototype, "Field_MRZ", 2);
_I([
  A(),
  N(),
  x()
], d_.prototype, "Field_Visual", 2);
_I([
  A(),
  N(),
  x()
], d_.prototype, "Field_Barcode", 2);
_I([
  A(),
  N(),
  x()
], d_.prototype, "Field_RFID", 2);
_I([
  A(),
  S(),
  n(_A, { each: !0 }),
  a(),
  ut(10),
  st(10)
], d_.prototype, "Matrix", 2);
var IN = Object.defineProperty, ON = Object.getOwnPropertyDescriptor, vA = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? ON(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && IN(E, O, I), I;
};
class oR {
}
vA([
  A(),
  S(),
  D()
], oR.prototype, "Count", 2);
vA([
  A(),
  S(),
  a(),
  o({ each: !0 }),
  U(() => d_)
], oR.prototype, "pFieldMaps", 2);
var RN = Object.defineProperty, AN = Object.getOwnPropertyDescriptor, JI = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? AN(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && RN(E, O, I), I;
}, uE;
const EI = (uE = class extends P_ {
}, uE.fromPlain = (E) => V(uE, E), uE.validate = (E) => {
  const O = n_(E);
  if (O.length)
    throw new D_("ListVerifiedFieldContainer validation error: the data received does not match model structure!", O);
  return !0;
}, uE);
JI([
  A(),
  S(),
  D(),
  P(l.OFF)
], EI.prototype, "light", 2);
JI([
  A(),
  S(),
  D(),
  P(0)
], EI.prototype, "list_idx", 2);
JI([
  A(),
  S(),
  D(),
  P(0)
], EI.prototype, "page_idx", 2);
JI([
  A(),
  S(),
  D(),
  P(0)
], EI.prototype, "buf_length", 2);
JI([
  A(),
  S(),
  n(c),
  i([c.LEXICAL_ANALYSIS])
], EI.prototype, "result_type", 2);
JI([
  A(),
  N(),
  o(),
  U(() => oR)
], EI.prototype, "ListVerifiedFields", 2);
let tN = EI;
var rN = Object.defineProperty, SN = Object.getOwnPropertyDescriptor, W_ = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? SN(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && rN(E, O, I), I;
};
class K_ {
}
W_([
  A(),
  x(),
  Pt(4),
  S()
], K_.prototype, "ICAOCode", 2);
W_([
  A(),
  S(),
  D()
], K_.prototype, "Count", 2);
W_([
  A(),
  S(),
  a(),
  D({ each: !0 })
], K_.prototype, "List", 2);
W_([
  A(),
  S(),
  n(ER)
], K_.prototype, "dType", 2);
W_([
  A(),
  S(),
  n(iI)
], K_.prototype, "dFormat", 2);
W_([
  A(),
  S(),
  q(),
  P(!1)
], K_.prototype, "dMRZ", 2);
W_([
  A(),
  S(),
  x()
], K_.prototype, "dDescription", 2);
W_([
  A(),
  S(),
  x()
], K_.prototype, "dYear", 2);
W_([
  A(),
  S(),
  x()
], K_.prototype, "dCountryName", 2);
W_([
  A(),
  N(),
  x()
], K_.prototype, "dStateCode", 2);
W_([
  A(),
  N(),
  x()
], K_.prototype, "dStateName", 2);
W_([
  A(),
  S(),
  q(),
  P(!1)
], K_.prototype, "isDeprecated", 2);
var NN = Object.defineProperty, CN = Object.getOwnPropertyDescriptor, g_ = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? CN(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && NN(E, O, I), I;
};
const lI = class lI {
};
lI.getNecessaryLights = (E) => LI(typeof E == "number" ? E : E.NecessaryLights), lI.getCheckAuthenticity = (E) => aR(typeof E == "number" ? E : E.CheckAuthenticity), lI.getAuthenticityNecessaryLights = (E) => LI(typeof E == "number" ? E : E.AuthenticityNecessaryLights);
let v_ = lI;
g_([
  A(),
  S(),
  x()
], v_.prototype, "DocumentName", 2);
g_([
  A(),
  S(),
  D()
], v_.prototype, "ID", 2);
g_([
  A(),
  S(),
  X()
], v_.prototype, "P", 2);
g_([
  A(),
  S(),
  q(),
  P(!1)
], v_.prototype, "Rotated180", 2);
g_([
  A(),
  S(),
  X()
], v_.prototype, "NecessaryLights", 2);
g_([
  A(),
  S(),
  n(eI),
  P(eI.NONE)
], v_.prototype, "RFID_Presence", 2);
g_([
  A(),
  S(),
  D(),
  P(0)
], v_.prototype, "CheckAuthenticity", 2);
g_([
  A(),
  S(),
  X()
], v_.prototype, "UVExp", 2);
g_([
  A(),
  S(),
  X()
], v_.prototype, "OVIExp", 2);
g_([
  A(),
  S(),
  X()
], v_.prototype, "AuthenticityNecessaryLights", 2);
g_([
  A(),
  S(),
  o(),
  U(() => K_)
], v_.prototype, "FDSIDList", 2);
var TN = Object.defineProperty, nN = Object.getOwnPropertyDescriptor, QI = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? nN(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && TN(E, O, I), I;
}, xE;
const II = (xE = class extends P_ {
}, xE.fromPlain = (E) => V(xE, E), xE.validate = (E) => {
  const O = n_(E);
  if (O.length)
    throw new D_("ChosenDocumentTypeContainer validation error: the data received does not match model structure!", O);
  return !0;
}, xE);
QI([
  A(),
  S(),
  D(),
  P(l.OFF)
], II.prototype, "light", 2);
QI([
  A(),
  S(),
  D(),
  P(0)
], II.prototype, "list_idx", 2);
QI([
  A(),
  S(),
  D(),
  P(0)
], II.prototype, "page_idx", 2);
QI([
  A(),
  S(),
  D(),
  P(0)
], II.prototype, "buf_length", 2);
QI([
  A(),
  S(),
  n(c),
  i([c.CHOSEN_DOCUMENT_TYPE_CANDIDATE])
], II.prototype, "result_type", 2);
QI([
  A(),
  N(),
  o(),
  U(() => v_)
], II.prototype, "OneCandidate", 2);
let DN = II;
var LN = Object.defineProperty, MN = Object.getOwnPropertyDescriptor, zI = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? MN(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && LN(E, O, I), I;
}, $E;
const OI = ($E = class extends P_ {
}, $E.fromPlain = (E) => V($E, E), $E.validate = (E) => {
  const O = n_(E);
  if (O.length)
    throw new D_("RawImageContainer validation error: the data received does not match model structure!", O);
  return !0;
}, $E);
zI([
  A(),
  S(),
  D(),
  P(l.OFF)
], OI.prototype, "light", 2);
zI([
  A(),
  S(),
  D(),
  P(0)
], OI.prototype, "list_idx", 2);
zI([
  A(),
  S(),
  D(),
  P(0)
], OI.prototype, "page_idx", 2);
zI([
  A(),
  S(),
  D(),
  P(0)
], OI.prototype, "buf_length", 2);
zI([
  A(),
  S(),
  n(c),
  i([c.RAW_UNCROPPED_IMAGE])
], OI.prototype, "result_type", 2);
zI([
  A(),
  S(),
  o(),
  U(() => IE)
], OI.prototype, "RawImageContainer", 2);
let PN = OI;
var fN = Object.defineProperty, oN = Object.getOwnPropertyDescriptor, ME = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? oN(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && fN(E, O, I), I;
};
class AE {
}
ME([
  A(),
  S(),
  n(p)
], AE.prototype, "overallStatus", 2);
ME([
  A(),
  S(),
  n(p)
], AE.prototype, "docType", 2);
ME([
  A(),
  S(),
  n(p)
], AE.prototype, "expiry", 2);
ME([
  A(),
  S(),
  n(p)
], AE.prototype, "imageQA", 2);
ME([
  A(),
  S(),
  n(p)
], AE.prototype, "mrz", 2);
ME([
  A(),
  S(),
  D()
], AE.prototype, "pagesCount", 2);
ME([
  A(),
  S(),
  n(p)
], AE.prototype, "security", 2);
ME([
  A(),
  S(),
  n(p)
], AE.prototype, "text", 2);
var UN = Object.defineProperty, GN = Object.getOwnPropertyDescriptor, RI = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? GN(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && UN(E, O, I), I;
};
class PE {
}
RI([
  A(),
  S(),
  n(p)
], PE.prototype, "overallStatus", 2);
RI([
  A(),
  S(),
  n(p)
], PE.prototype, "AA", 2);
RI([
  A(),
  S(),
  n(p)
], PE.prototype, "BAC", 2);
RI([
  A(),
  S(),
  n(p)
], PE.prototype, "CA", 2);
RI([
  A(),
  S(),
  n(p)
], PE.prototype, "PA", 2);
RI([
  A(),
  S(),
  n(p)
], PE.prototype, "PACE", 2);
RI([
  A(),
  S(),
  n(p)
], PE.prototype, "TA", 2);
var vN = Object.defineProperty, HN = Object.getOwnPropertyDescriptor, AI = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? HN(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && vN(E, O, I), I;
};
class fE {
}
AI([
  A(),
  S(),
  n(p),
  P(p.WAS_NOT_DONE)
], fE.prototype, "overallStatus", 2);
AI([
  A(),
  S(),
  n(p),
  P(p.WAS_NOT_DONE)
], fE.prototype, "optical", 2);
AI([
  A(),
  S(),
  n(p),
  P(p.WAS_NOT_DONE)
], fE.prototype, "portrait", 2);
AI([
  A(),
  S(),
  n(p),
  P(p.WAS_NOT_DONE)
], fE.prototype, "rfid", 2);
AI([
  A(),
  S(),
  n(p),
  P(p.WAS_NOT_DONE)
], fE.prototype, "stopList", 2);
AI([
  A(),
  N(),
  o(),
  U(() => PE)
], fE.prototype, "detailsRFID", 2);
AI([
  A(),
  S(),
  o(),
  U(() => AE)
], fE.prototype, "detailsOptical", 2);
var BN = Object.defineProperty, YN = Object.getOwnPropertyDescriptor, qI = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? YN(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && BN(E, O, I), I;
}, sE;
const tI = (sE = class extends P_ {
}, sE.fromPlain = (E) => V(sE, E, { strategy: "excludeAll" }), sE.validate = (E) => {
  const O = n_(E);
  if (O.length)
    throw new D_("StatusContainer validation error: the data received does not match model structure!", O);
  return !0;
}, sE);
qI([
  A(),
  S(),
  D(),
  P(l.OFF)
], tI.prototype, "light", 2);
qI([
  A(),
  S(),
  D(),
  P(0)
], tI.prototype, "list_idx", 2);
qI([
  A(),
  S(),
  D(),
  P(0)
], tI.prototype, "page_idx", 2);
qI([
  A(),
  S(),
  D(),
  P(0)
], tI.prototype, "buf_length", 2);
qI([
  A(),
  S(),
  n(c),
  i([c.STATUS])
], tI.prototype, "result_type", 2);
qI([
  A(),
  S(),
  o(),
  U(() => fE)
], tI.prototype, "Status", 2);
let hN = tI;
var cN = Object.defineProperty, wN = Object.getOwnPropertyDescriptor, UR = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? wN(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && cN(E, O, I), I;
};
class XO {
}
UR([
  A(),
  S(),
  n(TE)
], XO.prototype, "sourceLeft", 2);
UR([
  A(),
  S(),
  n(TE)
], XO.prototype, "sourceRight", 2);
UR([
  A(),
  S(),
  n(p)
], XO.prototype, "status", 2);
var bN = Object.defineProperty, mN = Object.getOwnPropertyDescriptor, GR = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? mN(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && bN(E, O, I), I;
};
class uO {
}
GR([
  A(),
  S(),
  D()
], uO.prototype, "code", 2);
GR([
  A(),
  S(),
  D(),
  P(0)
], uO.prototype, "probability", 2);
GR([
  A(),
  N(),
  o(),
  U(() => N_)
], uO.prototype, "rect", 2);
var KN = Object.defineProperty, XN = Object.getOwnPropertyDescriptor, tE = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? XN(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && KN(E, O, I), I;
};
class _E {
}
tE([
  A(),
  S(),
  n(TE)
], _E.prototype, "source", 2);
tE([
  A(),
  x(),
  S()
], _E.prototype, "value", 2);
tE([
  A(),
  N(),
  x()
], _E.prototype, "originalValue", 2);
tE([
  A(),
  S(),
  n(p)
], _E.prototype, "originalValidity", 2);
tE([
  A(),
  S(),
  D()
], _E.prototype, "pageIndex", 2);
tE([
  A(),
  N(),
  o(),
  U(() => N_)
], _E.prototype, "fieldRect", 2);
tE([
  A(),
  N(),
  o(),
  U(() => jI)
], _E.prototype, "rfidOrigin", 2);
tE([
  A(),
  S(),
  X(),
  P(0)
], _E.prototype, "probability", 2);
tE([
  A(),
  N(),
  o({ each: !0 }),
  U(() => uO)
], _E.prototype, "originalSymbols", 2);
var uN = Object.defineProperty, xN = Object.getOwnPropertyDescriptor, HA = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? xN(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && uN(E, O, I), I;
};
class vR {
}
HA([
  A(),
  S(),
  n(TE)
], vR.prototype, "source", 2);
HA([
  A(),
  S(),
  n(p)
], vR.prototype, "status", 2);
var $N = Object.defineProperty, sN = Object.getOwnPropertyDescriptor, V_ = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? sN(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && $N(E, O, I), I;
};
class j_ {
}
V_([
  A(),
  S(),
  n(J_)
], j_.prototype, "fieldType", 2);
V_([
  A(),
  S(),
  x()
], j_.prototype, "fieldName", 2);
V_([
  A(),
  S(),
  n(EE)
], j_.prototype, "lcid", 2);
V_([
  A(),
  S(),
  x()
], j_.prototype, "lcidName", 2);
V_([
  A(),
  S(),
  n(p)
], j_.prototype, "status", 2);
V_([
  A(),
  S(),
  n(p)
], j_.prototype, "comparisonStatus", 2);
V_([
  A(),
  S(),
  o({ each: !0 }),
  U(() => XO)
], j_.prototype, "comparisonList", 2);
V_([
  A(),
  S(),
  x()
], j_.prototype, "value", 2);
V_([
  A(),
  S(),
  o({ each: !0 }),
  U(() => _E)
], j_.prototype, "valueList", 2);
V_([
  A(),
  S(),
  n(p)
], j_.prototype, "validityStatus", 2);
V_([
  A(),
  S(),
  o({ each: !0 }),
  U(() => vR)
], j_.prototype, "validityList", 2);
var pN = Object.defineProperty, WN = Object.getOwnPropertyDescriptor, HR = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? WN(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && pN(E, O, I), I;
};
class xO {
}
HR([
  A(),
  S(),
  n(TE)
], xO.prototype, "source", 2);
HR([
  A(),
  S(),
  n(p)
], xO.prototype, "validityStatus", 2);
HR([
  A(),
  N(),
  D()
], xO.prototype, "containerType", 2);
var jN = Object.defineProperty, ZN = Object.getOwnPropertyDescriptor, aI = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? ZN(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && jN(E, O, I), I;
};
class rI {
}
aI([
  A(),
  S(),
  n(p)
], rI.prototype, "status", 2);
aI([
  A(),
  S(),
  n(p)
], rI.prototype, "validityStatus", 2);
aI([
  A(),
  S(),
  n(p)
], rI.prototype, "comparisonStatus", 2);
aI([
  A(),
  S(),
  x()
], rI.prototype, "dateFormat", 2);
aI([
  A(),
  S(),
  o({ each: !0 }),
  U(() => j_)
], rI.prototype, "fieldList", 2);
aI([
  A(),
  S(),
  o({ each: !0 }),
  U(() => xO)
], rI.prototype, "availableSourceList", 2);
var FN = Object.defineProperty, JN = Object.getOwnPropertyDescriptor, gI = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? JN(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && FN(E, O, I), I;
}, pE;
const SI = (pE = class extends P_ {
}, pE.fromPlain = (E) => V(pE, E, { strategy: "excludeAll" }), pE.validate = (E) => {
  const O = n_(E);
  if (O.length)
    throw new D_("TextResultContainer validation error: the data received does not match model structure!", O);
  return !0;
}, pE);
gI([
  A(),
  S(),
  D(),
  P(l.OFF)
], SI.prototype, "light", 2);
gI([
  A(),
  S(),
  D(),
  P(0)
], SI.prototype, "list_idx", 2);
gI([
  A(),
  S(),
  D(),
  P(0)
], SI.prototype, "page_idx", 2);
gI([
  A(),
  S(),
  D(),
  P(0)
], SI.prototype, "buf_length", 2);
gI([
  A(),
  S(),
  n(c),
  i([
    c.TEXT
  ])
], SI.prototype, "result_type", 2);
gI([
  A(),
  S(),
  o(),
  U(() => rI)
], SI.prototype, "Text", 2);
let BA = SI;
var _R;
((_) => {
  _.transformList = (E) => {
    const O = [];
    if (!Array.isArray(E))
      return O;
    for (const R of E) {
      if (!FE(R) || !R.hasOwnProperty("result_type"))
        continue;
      const { result_type: I } = R;
      switch (I) {
        case c.AUTHENTICITY:
        case c.FINGER_PRINT_COMPARISON:
        case c.PORTRAIT_COMPARISON:
          O.push(xr.fromPlain(R));
          break;
        case c.DOCUMENT_POSITION:
        case c.MRZ_POSITION:
        case c.BARCODE_POSITION:
          O.push(pr.fromPlain(R));
          break;
        case c.BARCODES:
          O.push(Vr.fromPlain(R));
          break;
        case c.GRAPHICS:
        case c.BARCODES_IMAGE_DATA:
        case c.LIVE_PORTRAIT:
        case c.EXT_PORTRAIT:
        case c.FINGERPRINTS:
          O.push(RS.fromPlain(R));
          break;
        case c.VISUAL_OCR_EXTENDED:
        case c.MRZ_OCR_EXTENDED:
        case c.BARCODES_TEXT_DATA:
        case c.MAGNETIC_STRIPE_TEXT_DATA:
          O.push(wS.fromPlain(R));
          break;
        case c.ENCRYPTED_RCL:
          O.push(KS.fromPlain(R));
          break;
        case c.INPUT_IMAGE_QUALITY:
          O.push(WS.fromPlain(R));
          break;
        case c.IMAGES:
          O.push(yS.fromPlain(R));
          break;
        case c.LICENSE:
          O.push(eS.fromPlain(R));
          break;
        case c.LEXICAL_ANALYSIS:
          O.push(tN.fromPlain(R));
          break;
        case c.CHOSEN_DOCUMENT_TYPE_CANDIDATE:
          O.push(DN.fromPlain(R));
          break;
        case c.RAW_UNCROPPED_IMAGE:
          O.push(PN.fromPlain(R));
          break;
        case c.STATUS:
          O.push(hN.fromPlain(R));
          break;
        case c.TEXT:
          O.push(BA.fromPlain(R));
          break;
      }
    }
    return O;
  };
})(_R || (_R = {}));
var QN = Object.defineProperty, zN = Object.getOwnPropertyDescriptor, YA = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? zN(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && QN(E, O, I), I;
};
class $O {
}
YA([
  A(),
  S(),
  D()
], $O.prototype, "Count", 2);
YA([
  A(),
  S(),
  a(),
  o({ each: !0 }),
  IO(({ obj: _ }) => _R.transformList(_.List), { toClassOnly: !0 })
], $O.prototype, "List", 2);
var qN = Object.defineProperty, aN = Object.getOwnPropertyDescriptor, BR = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? aN(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && qN(E, O, I), I;
};
class sO {
}
BR([
  A(),
  N(),
  X()
], sO.prototype, "limit", 2);
BR([
  A(),
  N(),
  X()
], sO.prototype, "threshold", 2);
BR([
  A(),
  N(),
  X({}, { each: !0 })
], sO.prototype, "group_ids", 2);
var gN = Object.defineProperty, VN = Object.getOwnPropertyDescriptor, oE = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? VN(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && gN(E, O, I), I;
};
class rE {
}
oE([
  A(),
  N(),
  x()
], rE.prototype, "url", 2);
oE([
  A(),
  N(),
  x()
], rE.prototype, "mode", 2);
oE([
  A(),
  N(),
  o(),
  U(() => sO)
], rE.prototype, "search", 2);
oE([
  A(),
  N(),
  X()
], rE.prototype, "threshold", 2);
oE([
  A(),
  N(),
  X()
], rE.prototype, "serviceTimeout", 2);
oE([
  A(),
  N(),
  x()
], rE.prototype, "proxy", 2);
oE([
  A(),
  N(),
  x()
], rE.prototype, "proxy_userpwd", 2);
oE([
  A(),
  N(),
  X()
], rE.prototype, "proxy_type", 2);
var kN = Object.defineProperty, dN = Object.getOwnPropertyDescriptor, UE = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? dN(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && kN(E, O, I), I;
};
class GE {
}
UE([
  A(),
  N(),
  X()
], GE.prototype, "brightnessThreshold", 2);
UE([
  A(),
  N(),
  D()
], GE.prototype, "dpiThreshold", 2);
UE([
  A(),
  N(),
  D()
], GE.prototype, "angleThreshold", 2);
UE([
  A(),
  q(),
  N()
], GE.prototype, "focusCheck", 2);
UE([
  A(),
  q(),
  N()
], GE.prototype, "glaresCheck", 2);
UE([
  A(),
  q(),
  N()
], GE.prototype, "colornessCheck", 2);
UE([
  A(),
  q(),
  N()
], GE.prototype, "moireCheck", 2);
UE([
  A(),
  N(),
  X()
], GE.prototype, "documentPositionIndent", 2);
var yN = Object.defineProperty, lN = Object.getOwnPropertyDescriptor, hA = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? lN(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && yN(E, O, I), I;
};
class YR {
}
hA([
  A(),
  N(),
  D({ each: !0 })
], YR.prototype, "docID", 2);
hA([
  A(),
  N(),
  D()
], YR.prototype, "excludeAuthChecks", 2);
var iN = Object.defineProperty, eN = Object.getOwnPropertyDescriptor, _C = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? eN(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && iN(E, O, I), I;
};
class cA {
}
_C([
  A(),
  N(),
  n(tA, { each: !0 })
], cA.prototype, "paSensitiveCodesDisable", 2);
const hR = (_) => (E, O) => {
  TA({
    name: "IsStringObjectRecord",
    target: E.constructor,
    propertyName: String(O),
    constraints: [],
    options: {
      message: `${String(O)} must be a Record<string, object>`,
      ..._
    },
    validator: {
      validate(R, I) {
        return FE(R) ? Object.keys(R).length === 0 ? !0 : Object.keys(R).every((r) => !(typeof r != "string" || !FE(R[r]))) : !1;
      }
    }
  });
};
var EC = Object.defineProperty, IC = Object.getOwnPropertyDescriptor, s = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? IC(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && EC(E, O, I), I;
};
class $ {
}
s([
  A(),
  N(),
  D({ each: !0 }),
  a()
], $.prototype, "lcidFilter", 2);
s([
  A(),
  N(),
  q()
], $.prototype, "checkLiveness", 2);
s([
  A(),
  N(),
  D({ each: !0 }),
  a()
], $.prototype, "lcidIgnoreFilter", 2);
s([
  A(),
  N(),
  q()
], $.prototype, "oneShotIdentification", 2);
s([
  A(),
  N(),
  q()
], $.prototype, "useFaceApi", 2);
s([
  A(),
  N(),
  o(),
  U(() => rE)
], $.prototype, "faceApi", 2);
s([
  A(),
  N(),
  q()
], $.prototype, "doDetectCan", 2);
s([
  A(),
  N(),
  D(),
  wI(0)
], $.prototype, "imageOutputMaxHeight", 2);
s([
  A(),
  N(),
  D(),
  wI(0)
], $.prototype, "imageOutputMaxWidth", 2);
s([
  A(),
  S(),
  n(SA)
], $.prototype, "scenario", 2);
s([
  A(),
  N(),
  n(rA, { each: !0 })
], $.prototype, "resultTypeOutput", 2);
s([
  A(),
  N(),
  q()
], $.prototype, "doublePageSpread", 2);
s([
  A(),
  N(),
  q()
], $.prototype, "generateDoublePageSpreadImage", 2);
s([
  A(),
  N(),
  n(J_, { each: !0 })
], $.prototype, "fieldTypesFilter", 2);
s([
  A(),
  N(),
  x()
], $.prototype, "dateFormat", 2);
s([
  A(),
  N(),
  n(RA)
], $.prototype, "measureSystem", 2);
s([
  A(),
  N(),
  D()
], $.prototype, "imageDpiOutMax", 2);
s([
  A(),
  N(),
  q()
], $.prototype, "alreadyCropped", 2);
s([
  A(),
  N(),
  hR()
], $.prototype, "customParams", 2);
s([
  A(),
  N(),
  o({ each: !0 }),
  U(() => YR)
], $.prototype, "config", 2);
s([
  A(),
  N(),
  q()
], $.prototype, "log", 2);
s([
  A(),
  N(),
  n(OA)
], $.prototype, "logLevel", 2);
s([
  A(),
  N(),
  D()
], $.prototype, "forceDocID", 2);
s([
  A(),
  N(),
  q()
], $.prototype, "matchTextFieldMask", 2);
s([
  A(),
  N(),
  q()
], $.prototype, "fastDocDetect", 2);
s([
  A(),
  N(),
  q()
], $.prototype, "updateOCRValidityByGlare", 2);
s([
  A(),
  N(),
  q()
], $.prototype, "checkRequiredTextFields", 2);
s([
  A(),
  N(),
  q()
], $.prototype, "returnCroppedBarcode", 2);
s([
  A(),
  N(),
  o()
], $.prototype, "imageQa", 2);
s([
  A(),
  N(),
  q()
], $.prototype, "respectImageQuality", 2);
s([
  A(),
  N(),
  n(iI)
], $.prototype, "forceDocFormat", 2);
s([
  A(),
  N(),
  q()
], $.prototype, "noGraphics", 2);
s([
  A(),
  N(),
  X()
], $.prototype, "documentAreaMin", 2);
s([
  A(),
  N(),
  q()
], $.prototype, "depersonalizeLog", 2);
s([
  A(),
  N(),
  q()
], $.prototype, "multiDocOnImage", 2);
s([
  A(),
  N(),
  D()
], $.prototype, "shiftExpiryDate", 2);
s([
  A(),
  N(),
  D(),
  wI(0)
], $.prototype, "minimalHolderAge", 2);
s([
  A(),
  N(),
  q()
], $.prototype, "returnUncroppedImage", 2);
s([
  A(),
  N(),
  n(AA, { each: !0 })
], $.prototype, "mrzFormatsFilter", 2);
s([
  A(),
  N(),
  q()
], $.prototype, "forceReadMrzBeforeLocate", 2);
s([
  A(),
  N(),
  q()
], $.prototype, "parseBarcodes", 2);
s([
  A(),
  N(),
  n(NA)
], $.prototype, "convertCase", 2);
s([
  A(),
  N(),
  q()
], $.prototype, "splitNames", 2);
s([
  A(),
  N(),
  q()
], $.prototype, "disablePerforationOCR", 2);
s([
  A(),
  N(),
  n(ER, { each: !0 })
], $.prototype, "documentGroupFilter", 2);
s([
  A(),
  N(),
  D()
], $.prototype, "processAuth", 2);
s([
  A(),
  N(),
  D()
], $.prototype, "deviceId", 2);
s([
  A(),
  N(),
  D()
], $.prototype, "deviceType", 2);
s([
  A(),
  N(),
  x()
], $.prototype, "deviceTypeHex", 2);
s([
  A(),
  N(),
  q()
], $.prototype, "ignoreDeviceIdFromImage", 2);
s([
  A(),
  N(),
  D({ each: !0 })
], $.prototype, "documentIdList", 2);
s([
  A(),
  N(),
  o(),
  U(() => cA)
], $.prototype, "rfid", 2);
var OC = Object.defineProperty, RC = Object.getOwnPropertyDescriptor, cR = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? RC(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && OC(E, O, I), I;
};
class pO {
}
cR([
  A(),
  o(),
  U(() => IE)
], pO.prototype, "ImageData", 2);
cR([
  A(),
  n(l),
  N()
], pO.prototype, "light", 2);
cR([
  A(),
  D(),
  N()
], pO.prototype, "page_idx", 2);
var AC = Object.defineProperty, tC = Object.getOwnPropertyDescriptor, wA = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? tC(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && AC(E, O, I), I;
};
class wR {
}
wA([
  A(),
  N(),
  x()
], wR.prototype, "license", 2);
wA([
  A(),
  N(),
  x()
], wR.prototype, "recaptcha_token", 2);
var rC = Object.defineProperty, SC = Object.getOwnPropertyDescriptor, vE = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? SC(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && rC(E, O, I), I;
}, WE;
const SE = (WE = class {
}, WE.fromPlain = (E) => V(WE, E), WE.validate = (E) => {
  const O = n_(E);
  if (O.length)
    throw new D_("ProcessRequest validation error: the data received does not match model structure!", O);
  return !0;
}, WE);
vE([
  A(),
  x(),
  N()
], SE.prototype, "tag", 2);
vE([
  A(),
  o(),
  S(),
  U(() => $)
], SE.prototype, "processParam", 2);
vE([
  A(),
  o({ each: !0 }),
  N(),
  U(() => pO)
], SE.prototype, "List", 2);
vE([
  A(),
  N(),
  x()
], SE.prototype, "livePortrait", 2);
vE([
  A(),
  N(),
  x()
], SE.prototype, "extPortrait", 2);
vE([
  A(),
  N(),
  o(),
  U(() => $O)
], SE.prototype, "ContainerList", 2);
vE([
  A(),
  N(),
  o(),
  U(() => wR)
], SE.prototype, "systemInfo", 2);
vE([
  A(),
  N(),
  hR()
], SE.prototype, "passBackObject", 2);
let fC = SE;
var NC = Object.defineProperty, CC = Object.getOwnPropertyDescriptor, WO = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? CC(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && NC(E, O, I), I;
};
class NO {
}
WO([
  A(),
  N(),
  x()
], NO.prototype, "ComputerName", 2);
WO([
  A(),
  N(),
  x()
], NO.prototype, "DateTime", 2);
WO([
  A(),
  N(),
  x()
], NO.prototype, "TransactionID", 2);
WO([
  A(),
  N(),
  x()
], NO.prototype, "UserName", 2);
var TC = Object.defineProperty, nC = Object.getOwnPropertyDescriptor, HE = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? nC(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && TC(E, O, I), I;
}, jE;
const NE = (jE = class {
}, jE.fromPlain = (E) => V(jE, E, { strategy: "excludeAll" }), jE.validate = (E) => {
  const O = n_(E);
  if (O.length)
    throw new D_("ProcessResponse validation error: the data received does not match model structure!", O);
  return !0;
}, jE);
HE([
  A(),
  S(),
  n(eI),
  P(eI.NONE)
], NE.prototype, "ChipPage", 2);
HE([
  A(),
  S(),
  n(VO),
  P(VO.NOT_FINISHED)
], NE.prototype, "ProcessingFinished", 2);
HE([
  A(),
  o(),
  U(() => $O)
], NE.prototype, "ContainerList", 2);
HE([
  A(),
  S(),
  o(),
  U(() => NO)
], NE.prototype, "TransactionInfo", 2);
HE([
  A(),
  N(),
  x()
], NE.prototype, "log", 2);
HE([
  A(),
  N(),
  hR()
], NE.prototype, "passBackObject", 2);
HE([
  A(),
  N(),
  D(),
  wI(0),
  P(0)
], NE.prototype, "morePagesAvailable", 2);
HE([
  A(),
  N(),
  D(),
  wI(0),
  P(0)
], NE.prototype, "elapsedTime", 2);
let oC = NE;
var DC = Object.defineProperty, LC = Object.getOwnPropertyDescriptor, bR = (_, E, O, R) => {
  for (var I = R > 1 ? void 0 : R ? LC(E, O) : E, t = _.length - 1, r; t >= 0; t--)
    (r = _[t]) && (I = (R ? r(E, O, I) : r(I)) || I);
  return R && I && DC(E, O, I), I;
}, ZE;
const jO = (ZE = class {
}, ZE.fromPlain = (E) => V(ZE, E), ZE.validate = (E) => {
  const O = n_(E);
  if (O.length)
    throw new D_("ProcessRequest validation error: the data received does not match model structure!", O);
  return !0;
}, ZE);
bR([
  S(),
  x()
], jO.prototype, "value", 2);
bR([
  S(),
  n(p)
], jO.prototype, "checkResult", 2);
bR([
  S(),
  n(EE)
], jO.prototype, "lcid", 2);
let MC = jO;
const PC = "UNKNOWN", X_ = 3, UC = (_) => {
  const E = _.ContainerList.List.find((R) => R instanceof BA);
  if (!E)
    return MC.fromPlain({
      value: PC,
      checkResult: p.ERROR,
      lcid: EE.ENGLISH_US
    });
  const O = [];
  E.Text.fieldList.filter((R) => R.fieldType === J_.SURNAME_AND_GIVEN_NAMES).forEach((R) => {
    if (!R.value)
      return;
    let I = 1;
    I = R.status === p.OK ? I + X_ : I - X_, I = typeof R.lcid < "u" ? I + X_ : I - X_, I = R.lcid === EE.LATIN ? I + X_ : I - X_, O.push({
      score: I,
      lcid: R.lcid,
      checkResult: R.status,
      value: R.value
    });
  }), E.Text.fieldList.filter((R) => R.fieldType === J_.GIVEN_NAMES).forEach((R) => {
    const I = E.Text.fieldList.find((r) => r.fieldType === J_.SURNAME && r.lcid === R.lcid && r.status === R.status);
    if (!I)
      return;
    let t = 0;
    t = R.status === p.OK ? t + X_ : t - X_, t = typeof R.lcid < "u" ? t + X_ : t - X_, t = R.lcid === EE.LATIN ? t + X_ : t - X_, O.push({
      score: t,
      lcid: R.lcid,
      checkResult: R.status,
      value: `${I.value} ${R.value}`
    });
  });
};
export {
  bI as AreaArray,
  CR as AuthenticityCheckList,
  xr as AuthenticityCheckListContainer,
  Or as AuthenticityFiberCheckResult,
  Tr as AuthenticityIdentCheckResult,
  Pr as AuthenticityOCRSecurityTextCheckResult,
  Br as AuthenticityPhotoIdentCheckResult,
  br as AuthenticitySecurityFeatureCheckResult,
  Q_ as BoundsResult,
  pr as BoundsResultContainer,
  $O as ContainerList,
  AE as DetailsOptical,
  PE as DetailsRFID,
  s_ as DocBarCodeField,
  TR as DocBarCodeInfo,
  Vr as DocBarCodeInfoContainer,
  yr as DocGraphicFieldRect,
  er as DocGraphicFieldRfid,
  nR as DocGraphicsInfo,
  RS as DocGraphicsInfoContainer,
  DS as DocVisualExtendedField1,
  PS as DocVisualExtendedField2,
  US as DocVisualExtendedField3,
  HS as DocVisualExtendedField4,
  MR as DocVisualExtendedInfo,
  wS as DocVisualExtendedInfoContainer,
  KS as EncryptedRCLContainer,
  K_ as FDSIDList,
  rE as FaceApi,
  sO as FaceApiSearch,
  x_ as FiberResult,
  q_ as IdentResult,
  IE as ImageData,
  rO as ImageField,
  e_ as ImageFieldValue,
  GE as ImageQA,
  LE as ImageQualityCheck,
  wO as ImageQualityCheckList,
  WS as ImageQualityCheckListContainer,
  fR as ImageSource,
  SO as ImagesResult,
  yS as ImagesResultContainer,
  hR as IsStringObjectRecord,
  eS as LicenseContainer,
  tN as ListVerifiedFieldContainer,
  oR as ListVerifiedFields,
  H_ as OCRSecurityTextResult,
  v_ as OneCandidate,
  DN as OneCandidateContainer,
  YR as PerDocumentConfig,
  w_ as PhotoIdentResult,
  nE as Point,
  DA as PointArray,
  $ as ProcessParams,
  cA as ProcessParamsRfid,
  fC as ProcessRequest,
  pO as ProcessRequestImage,
  oC as ProcessResponse,
  wR as ProcessSystemInfo,
  MC as RNameSurnameLCID,
  PN as RawImageContainer,
  rR as RawImageContainerList,
  N_ as Rect,
  jI as RfidOrigin,
  i_ as SecurityFeatureResult,
  fE as Status,
  hN as StatusContainer,
  VE as StringResultSDK,
  YO as SymbolCandidate,
  tO as SymbolResult,
  XO as TextComparison,
  j_ as TextField,
  _E as TextFieldValue,
  rI as TextResult,
  BA as TextResultContainer,
  xO as TextSource,
  uO as TextSymbol,
  vR as TextValidity,
  XI as TipDecodeModule,
  zE as TipPDF417Info,
  NO as TransactionInfo,
  d_ as VerifiedFieldMap,
  f as eAuthenticity,
  zO as eBarCodeDetectionType,
  qO as eBarCodeModuleType,
  aO as eBarCodeResultCodes,
  gO as eBarCodeType,
  cI as eCheckDiagnose,
  p as eCheckResult,
  iI as eDocFormat,
  ER as eDocType,
  _A as eFieldVerificationResult,
  LO as eGraphicFieldType,
  IA as eIRVisibilityFlag,
  EA as eImageQualityCheckType,
  EE as eLCID,
  l as eLights,
  OA as eLogLevel,
  AA as eMRZFormat,
  RA as eMeasureSystem,
  tA as eParsingNotificationCodes,
  VO as eProcessingStatus,
  rA as eResult,
  c as eResultType,
  MO as eRfidDataGroupTypeTag,
  eI as eRfidPresence,
  SA as eScenario,
  IR as eSecurityCriticalFlag,
  _O as eSecurityFeatureType,
  TE as eSource,
  NA as eTextPostProcessing,
  J_ as eVisualFieldType,
  aR as getAuthenticityArray,
  LI as getLightsArray,
  UC as getNameSurnameLcid,
  zA as isAuthenticity,
  qA as isLights,
  FE as isObject,
  lO as uAuthenticityCheckResult,
  _R as uContainer,
  iO as uDocGraphicField,
  eO as uDocVisualExtendedField
};
