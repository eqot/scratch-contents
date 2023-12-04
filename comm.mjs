var xt = Object.defineProperty;
var Dt = (tt, V, H) => V in tt ? xt(tt, V, { enumerable: !0, configurable: !0, writable: !0, value: H }) : tt[V] = H;
var ct = (tt, V, H) => (Dt(tt, typeof V != "symbol" ? V + "" : V, H), H);
function Ct(tt) {
  return tt && tt.__esModule && Object.prototype.hasOwnProperty.call(tt, "default") ? tt.default : tt;
}
const wt = {
  /**
   * Boolean reporter with hexagonal shape
   */
  BOOLEAN: "Boolean",
  /**
   * A button (not an actual block) for some special action, like making a variable
   */
  BUTTON: "button",
  /**
   * Command block
   */
  COMMAND: "command",
  /**
   * Specialized command block which may or may not run a child branch
   * The thread continues with the next block whether or not a child branch ran.
   */
  CONDITIONAL: "conditional",
  /**
   * Specialized hat block with no implementation function
   * This stack only runs if the corresponding event is emitted by other code.
   */
  EVENT: "event",
  /**
   * Hat block which conditionally starts a block stack
   */
  HAT: "hat",
  /**
   * Specialized command block which may or may not run a child branch
   * If a child branch runs, the thread evaluates the loop block again.
   */
  LOOP: "loop",
  /**
   * General reporter with numeric or string value
   */
  REPORTER: "reporter"
};
var Lt = wt;
const lt = /* @__PURE__ */ Ct(Lt);
var Et = { exports: {} };
/*!
 * @license Copyright 2015-2022 Ably Real-time Ltd (ably.com)
 * 
 * Ably JavaScript Library v1.2.48
 * https://github.com/ably/ably-js
 * 
 * Released under the Apache Licence v2.0
 */
(function(tt, V) {
  (function(p, f) {
    tt.exports = f();
  })(window, function() {
    return (
      /******/
      function(H) {
        var p = {};
        function f(g) {
          if (p[g])
            return p[g].exports;
          var a = p[g] = {
            /******/
            i: g,
            /******/
            l: !1,
            /******/
            exports: {}
            /******/
          };
          return H[g].call(a.exports, a, a.exports, f), a.l = !0, a.exports;
        }
        return f.m = H, f.c = p, f.d = function(g, a, w) {
          f.o(g, a) || Object.defineProperty(g, a, { enumerable: !0, get: w });
        }, f.r = function(g) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(g, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(g, "__esModule", { value: !0 });
        }, f.t = function(g, a) {
          if (a & 1 && (g = f(g)), a & 8 || a & 4 && typeof g == "object" && g && g.__esModule)
            return g;
          var w = /* @__PURE__ */ Object.create(null);
          if (f.r(w), Object.defineProperty(w, "default", { enumerable: !0, value: g }), a & 2 && typeof g != "string")
            for (var T in g)
              f.d(w, T, (function(M) {
                return g[M];
              }).bind(null, T));
          return w;
        }, f.n = function(g) {
          var a = g && g.__esModule ? (
            /******/
            function() {
              return g.default;
            }
          ) : (
            /******/
            function() {
              return g;
            }
          );
          return f.d(a, "a", a), a;
        }, f.o = function(g, a) {
          return Object.prototype.hasOwnProperty.call(g, a);
        }, f.p = "", f(f.s = 42);
      }([
        /* 0 */
        /***/
        function(H, p, f) {
          f.r(p), f.d(p, "__extends", function() {
            return a;
          }), f.d(p, "__assign", function() {
            return w;
          }), f.d(p, "__rest", function() {
            return T;
          }), f.d(p, "__decorate", function() {
            return M;
          }), f.d(p, "__param", function() {
            return b;
          }), f.d(p, "__metadata", function() {
            return I;
          }), f.d(p, "__awaiter", function() {
            return v;
          }), f.d(p, "__generator", function() {
            return R;
          }), f.d(p, "__createBinding", function() {
            return o;
          }), f.d(p, "__exportStar", function() {
            return d;
          }), f.d(p, "__values", function() {
            return S;
          }), f.d(p, "__read", function() {
            return A;
          }), f.d(p, "__spread", function() {
            return u;
          }), f.d(p, "__spreadArrays", function() {
            return c;
          }), f.d(p, "__spreadArray", function() {
            return l;
          }), f.d(p, "__await", function() {
            return r;
          }), f.d(p, "__asyncGenerator", function() {
            return n;
          }), f.d(p, "__asyncDelegator", function() {
            return t;
          }), f.d(p, "__asyncValues", function() {
            return e;
          }), f.d(p, "__makeTemplateObject", function() {
            return s;
          }), f.d(p, "__importStar", function() {
            return h;
          }), f.d(p, "__importDefault", function() {
            return D;
          }), f.d(p, "__classPrivateFieldGet", function() {
            return P;
          }), f.d(p, "__classPrivateFieldSet", function() {
            return E;
          });
          /*! *****************************************************************************
          	Copyright (c) Microsoft Corporation.
          
          	Permission to use, copy, modify, and/or distribute this software for any
          	purpose with or without fee is hereby granted.
          
          	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
          	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
          	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
          	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
          	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
          	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
          	PERFORMANCE OF THIS SOFTWARE.
          	***************************************************************************** */
          var g = function(O, y) {
            return g = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(C, N) {
              C.__proto__ = N;
            } || function(C, N) {
              for (var B in N)
                Object.prototype.hasOwnProperty.call(N, B) && (C[B] = N[B]);
            }, g(O, y);
          };
          function a(O, y) {
            if (typeof y != "function" && y !== null)
              throw new TypeError("Class extends value " + String(y) + " is not a constructor or null");
            g(O, y);
            function C() {
              this.constructor = O;
            }
            O.prototype = y === null ? Object.create(y) : (C.prototype = y.prototype, new C());
          }
          var w = function() {
            return w = Object.assign || function(y) {
              for (var C, N = 1, B = arguments.length; N < B; N++) {
                C = arguments[N];
                for (var j in C)
                  Object.prototype.hasOwnProperty.call(C, j) && (y[j] = C[j]);
              }
              return y;
            }, w.apply(this, arguments);
          };
          function T(O, y) {
            var C = {};
            for (var N in O)
              Object.prototype.hasOwnProperty.call(O, N) && y.indexOf(N) < 0 && (C[N] = O[N]);
            if (O != null && typeof Object.getOwnPropertySymbols == "function")
              for (var B = 0, N = Object.getOwnPropertySymbols(O); B < N.length; B++)
                y.indexOf(N[B]) < 0 && Object.prototype.propertyIsEnumerable.call(O, N[B]) && (C[N[B]] = O[N[B]]);
            return C;
          }
          function M(O, y, C, N) {
            var B = arguments.length, j = B < 3 ? y : N === null ? N = Object.getOwnPropertyDescriptor(y, C) : N, z;
            if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
              j = Reflect.decorate(O, y, C, N);
            else
              for (var _ = O.length - 1; _ >= 0; _--)
                (z = O[_]) && (j = (B < 3 ? z(j) : B > 3 ? z(y, C, j) : z(y, C)) || j);
            return B > 3 && j && Object.defineProperty(y, C, j), j;
          }
          function b(O, y) {
            return function(C, N) {
              y(C, N, O);
            };
          }
          function I(O, y) {
            if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
              return Reflect.metadata(O, y);
          }
          function v(O, y, C, N) {
            function B(j) {
              return j instanceof C ? j : new C(function(z) {
                z(j);
              });
            }
            return new (C || (C = Promise))(function(j, z) {
              function _(x) {
                try {
                  m(N.next(x));
                } catch (L) {
                  z(L);
                }
              }
              function F(x) {
                try {
                  m(N.throw(x));
                } catch (L) {
                  z(L);
                }
              }
              function m(x) {
                x.done ? j(x.value) : B(x.value).then(_, F);
              }
              m((N = N.apply(O, y || [])).next());
            });
          }
          function R(O, y) {
            var C = { label: 0, sent: function() {
              if (j[0] & 1)
                throw j[1];
              return j[1];
            }, trys: [], ops: [] }, N, B, j, z;
            return z = { next: _(0), throw: _(1), return: _(2) }, typeof Symbol == "function" && (z[Symbol.iterator] = function() {
              return this;
            }), z;
            function _(m) {
              return function(x) {
                return F([m, x]);
              };
            }
            function F(m) {
              if (N)
                throw new TypeError("Generator is already executing.");
              for (; C; )
                try {
                  if (N = 1, B && (j = m[0] & 2 ? B.return : m[0] ? B.throw || ((j = B.return) && j.call(B), 0) : B.next) && !(j = j.call(B, m[1])).done)
                    return j;
                  switch (B = 0, j && (m = [m[0] & 2, j.value]), m[0]) {
                    case 0:
                    case 1:
                      j = m;
                      break;
                    case 4:
                      return C.label++, { value: m[1], done: !1 };
                    case 5:
                      C.label++, B = m[1], m = [0];
                      continue;
                    case 7:
                      m = C.ops.pop(), C.trys.pop();
                      continue;
                    default:
                      if (j = C.trys, !(j = j.length > 0 && j[j.length - 1]) && (m[0] === 6 || m[0] === 2)) {
                        C = 0;
                        continue;
                      }
                      if (m[0] === 3 && (!j || m[1] > j[0] && m[1] < j[3])) {
                        C.label = m[1];
                        break;
                      }
                      if (m[0] === 6 && C.label < j[1]) {
                        C.label = j[1], j = m;
                        break;
                      }
                      if (j && C.label < j[2]) {
                        C.label = j[2], C.ops.push(m);
                        break;
                      }
                      j[2] && C.ops.pop(), C.trys.pop();
                      continue;
                  }
                  m = y.call(O, C);
                } catch (x) {
                  m = [6, x], B = 0;
                } finally {
                  N = j = 0;
                }
              if (m[0] & 5)
                throw m[1];
              return { value: m[0] ? m[1] : void 0, done: !0 };
            }
          }
          var o = Object.create ? function(O, y, C, N) {
            N === void 0 && (N = C), Object.defineProperty(O, N, { enumerable: !0, get: function() {
              return y[C];
            } });
          } : function(O, y, C, N) {
            N === void 0 && (N = C), O[N] = y[C];
          };
          function d(O, y) {
            for (var C in O)
              C !== "default" && !Object.prototype.hasOwnProperty.call(y, C) && o(y, O, C);
          }
          function S(O) {
            var y = typeof Symbol == "function" && Symbol.iterator, C = y && O[y], N = 0;
            if (C)
              return C.call(O);
            if (O && typeof O.length == "number")
              return {
                next: function() {
                  return O && N >= O.length && (O = void 0), { value: O && O[N++], done: !O };
                }
              };
            throw new TypeError(y ? "Object is not iterable." : "Symbol.iterator is not defined.");
          }
          function A(O, y) {
            var C = typeof Symbol == "function" && O[Symbol.iterator];
            if (!C)
              return O;
            var N = C.call(O), B, j = [], z;
            try {
              for (; (y === void 0 || y-- > 0) && !(B = N.next()).done; )
                j.push(B.value);
            } catch (_) {
              z = { error: _ };
            } finally {
              try {
                B && !B.done && (C = N.return) && C.call(N);
              } finally {
                if (z)
                  throw z.error;
              }
            }
            return j;
          }
          function u() {
            for (var O = [], y = 0; y < arguments.length; y++)
              O = O.concat(A(arguments[y]));
            return O;
          }
          function c() {
            for (var O = 0, y = 0, C = arguments.length; y < C; y++)
              O += arguments[y].length;
            for (var N = Array(O), B = 0, y = 0; y < C; y++)
              for (var j = arguments[y], z = 0, _ = j.length; z < _; z++, B++)
                N[B] = j[z];
            return N;
          }
          function l(O, y, C) {
            if (C || arguments.length === 2)
              for (var N = 0, B = y.length, j; N < B; N++)
                (j || !(N in y)) && (j || (j = Array.prototype.slice.call(y, 0, N)), j[N] = y[N]);
            return O.concat(j || Array.prototype.slice.call(y));
          }
          function r(O) {
            return this instanceof r ? (this.v = O, this) : new r(O);
          }
          function n(O, y, C) {
            if (!Symbol.asyncIterator)
              throw new TypeError("Symbol.asyncIterator is not defined.");
            var N = C.apply(O, y || []), B, j = [];
            return B = {}, z("next"), z("throw"), z("return"), B[Symbol.asyncIterator] = function() {
              return this;
            }, B;
            function z(U) {
              N[U] && (B[U] = function(W) {
                return new Promise(function(Q, J) {
                  j.push([U, W, Q, J]) > 1 || _(U, W);
                });
              });
            }
            function _(U, W) {
              try {
                F(N[U](W));
              } catch (Q) {
                L(j[0][3], Q);
              }
            }
            function F(U) {
              U.value instanceof r ? Promise.resolve(U.value.v).then(m, x) : L(j[0][2], U);
            }
            function m(U) {
              _("next", U);
            }
            function x(U) {
              _("throw", U);
            }
            function L(U, W) {
              U(W), j.shift(), j.length && _(j[0][0], j[0][1]);
            }
          }
          function t(O) {
            var y, C;
            return y = {}, N("next"), N("throw", function(B) {
              throw B;
            }), N("return"), y[Symbol.iterator] = function() {
              return this;
            }, y;
            function N(B, j) {
              y[B] = O[B] ? function(z) {
                return (C = !C) ? { value: r(O[B](z)), done: B === "return" } : j ? j(z) : z;
              } : j;
            }
          }
          function e(O) {
            if (!Symbol.asyncIterator)
              throw new TypeError("Symbol.asyncIterator is not defined.");
            var y = O[Symbol.asyncIterator], C;
            return y ? y.call(O) : (O = typeof S == "function" ? S(O) : O[Symbol.iterator](), C = {}, N("next"), N("throw"), N("return"), C[Symbol.asyncIterator] = function() {
              return this;
            }, C);
            function N(j) {
              C[j] = O[j] && function(z) {
                return new Promise(function(_, F) {
                  z = O[j](z), B(_, F, z.done, z.value);
                });
              };
            }
            function B(j, z, _, F) {
              Promise.resolve(F).then(function(m) {
                j({ value: m, done: _ });
              }, z);
            }
          }
          function s(O, y) {
            return Object.defineProperty ? Object.defineProperty(O, "raw", { value: y }) : O.raw = y, O;
          }
          var i = Object.create ? function(O, y) {
            Object.defineProperty(O, "default", { enumerable: !0, value: y });
          } : function(O, y) {
            O.default = y;
          };
          function h(O) {
            if (O && O.__esModule)
              return O;
            var y = {};
            if (O != null)
              for (var C in O)
                C !== "default" && Object.prototype.hasOwnProperty.call(O, C) && o(y, O, C);
            return i(y, O), y;
          }
          function D(O) {
            return O && O.__esModule ? O : { default: O };
          }
          function P(O, y, C, N) {
            if (C === "a" && !N)
              throw new TypeError("Private accessor was defined without a getter");
            if (typeof y == "function" ? O !== y || !N : !y.has(O))
              throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return C === "m" ? N : C === "a" ? N.call(O) : N ? N.value : y.get(O);
          }
          function E(O, y, C, N, B) {
            if (N === "m")
              throw new TypeError("Private method is not writable");
            if (N === "a" && !B)
              throw new TypeError("Private accessor was defined without a setter");
            if (typeof y == "function" ? O !== y || !B : !y.has(O))
              throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return N === "a" ? B.call(O, C) : B ? B.value = C : y.set(O, C), C;
          }
        },
        /* 1 */
        /***/
        function(H, p, f) {
          (function(g) {
            Object.defineProperty(p, "__esModule", { value: !0 }), p.allToUpperCase = p.allToLowerCase = p.encodeBody = p.decodeBody = p.Format = p.promisify = p.trim = p.arrChooseN = p.randomHexString = p.randomString = p.cheapRandStr = p.dataSizeBytes = p.inspectBody = p.inspectError = p.isErrorInfoOrPartialErrorInfo = p.now = p.parseQueryString = p.toQueryString = p.arrPopRandomElement = p.defaultPostHeaders = p.defaultGetHeaders = p.allSame = p.arrEvery = p.arrFilter = p.arrMap = p.safeArrForEach = p.arrForEach = p.forInOwnNonNullProperties = p.valuesArray = p.keysArray = p.arrWithoutValue = p.arrDeleteValue = p.arrIn = p.arrIndexOf = p.arrSubtract = p.arrIntersectOb = p.arrIntersect = p.intersect = p.containsValue = p.inherits = p.prototypicalClone = p.shallowClone = p.isEmptyArg = p.isOnlyPropIn = p.isEmpty = p.isObject = p.ensureArray = p.isArray = p.copy = p.mixin = void 0, p.arrEquals = p.toBase64 = p.matchDerivedChannel = p.shallowEquals = p.getGlobalObject = p.getRetryTime = p.getJitterCoefficient = p.getBackoffCoefficient = void 0;
            var a = f(0), w = a.__importDefault(f(3)), T = a.__importStar(f(8)), M = a.__importDefault(f(4)), b = f(11), I = f(31);
            function v(G) {
              return Math.floor(Math.random() * G.length);
            }
            function R(G) {
              for (var k = [], K = 1; K < arguments.length; K++)
                k[K - 1] = arguments[K];
              for (var Y = 0; Y < k.length; Y++) {
                var q = k[Y];
                if (!q)
                  break;
                var at = Object.prototype.hasOwnProperty;
                for (var gt in q)
                  (!at || at.call(q, gt)) && (G[gt] = q[gt]);
              }
              return G;
            }
            p.mixin = R;
            function o(G) {
              return R({}, G);
            }
            p.copy = o, p.isArray = Array.isArray || function(G) {
              return Object.prototype.toString.call(G) == "[object Array]";
            };
            function d(G) {
              return c(G) ? [] : (0, p.isArray)(G) ? G : [G];
            }
            p.ensureArray = d;
            function S(G) {
              return Object.prototype.toString.call(G) == "[object Object]";
            }
            p.isObject = S;
            function A(G) {
              for (var k in G)
                return !1;
              return !0;
            }
            p.isEmpty = A;
            function u(G, k) {
              for (var K in G)
                if (K !== k)
                  return !1;
              return !0;
            }
            p.isOnlyPropIn = u;
            function c(G) {
              return G == null;
            }
            p.isEmptyArg = c;
            function l(G) {
              var k = new Object();
              for (var K in G)
                k[K] = G[K];
              return k;
            }
            p.shallowClone = l;
            function r(G, k) {
              var K = (
                /** @class */
                function() {
                  function q() {
                  }
                  return q;
                }()
              );
              K.prototype = G;
              var Y = new K();
              return k && R(Y, k), Y;
            }
            p.prototypicalClone = r;
            var n = function(G, k) {
              if (w.default.Config.inherits) {
                w.default.Config.inherits(G, k);
                return;
              }
              G.super_ = k, G.prototype = r(k.prototype, { constructor: G });
            };
            p.inherits = n;
            function t(G, k) {
              for (var K in G)
                if (G[K] == k)
                  return !0;
              return !1;
            }
            p.containsValue = t;
            function e(G, k) {
              return (0, p.isArray)(k) ? s(G, k) : i(G, k);
            }
            p.intersect = e;
            function s(G, k) {
              for (var K = [], Y = 0; Y < G.length; Y++) {
                var q = G[Y];
                (0, p.arrIndexOf)(k, q) != -1 && K.push(q);
              }
              return K;
            }
            p.arrIntersect = s;
            function i(G, k) {
              for (var K = [], Y = 0; Y < G.length; Y++) {
                var q = G[Y];
                q in k && K.push(q);
              }
              return K;
            }
            p.arrIntersectOb = i;
            function h(G, k) {
              for (var K = [], Y = 0; Y < G.length; Y++) {
                var q = G[Y];
                (0, p.arrIndexOf)(k, q) == -1 && K.push(q);
              }
              return K;
            }
            p.arrSubtract = h, p.arrIndexOf = Array.prototype.indexOf ? function(G, k, K) {
              return G.indexOf(k, K);
            } : function(G, k, K) {
              K = K || 0;
              for (var Y = G.length; K < Y; K++)
                if (G[K] === k)
                  return K;
              return -1;
            };
            function D(G, k) {
              return (0, p.arrIndexOf)(G, k) !== -1;
            }
            p.arrIn = D;
            function P(G, k) {
              var K = (0, p.arrIndexOf)(G, k), Y = K != -1;
              return Y && G.splice(K, 1), Y;
            }
            p.arrDeleteValue = P;
            function E(G, k) {
              var K = G.slice();
              return P(K, k), K;
            }
            p.arrWithoutValue = E;
            function O(G, k) {
              var K = [];
              for (var Y in G)
                k && !Object.prototype.hasOwnProperty.call(G, Y) || K.push(Y);
              return K;
            }
            p.keysArray = O;
            function y(G, k) {
              var K = [];
              for (var Y in G)
                k && !Object.prototype.hasOwnProperty.call(G, Y) || K.push(G[Y]);
              return K;
            }
            p.valuesArray = y;
            function C(G, k) {
              for (var K in G)
                Object.prototype.hasOwnProperty.call(G, K) && G[K] && k(K);
            }
            p.forInOwnNonNullProperties = C, p.arrForEach = Array.prototype.forEach ? function(G, k) {
              G.forEach(k);
            } : function(G, k) {
              for (var K = G.length, Y = 0; Y < K; Y++)
                k(G[Y], Y, G);
            };
            function N(G, k) {
              return (0, p.arrForEach)(G.slice(), k);
            }
            p.safeArrForEach = N, p.arrMap = Array.prototype.map ? function(G, k) {
              return G.map(k);
            } : function(G, k) {
              for (var K = [], Y = G.length, q = 0; q < Y; q++)
                K.push(k(G[q], q, G));
              return K;
            }, p.arrFilter = Array.prototype.filter ? function(G, k) {
              return G.filter(k);
            } : function(G, k) {
              for (var K = [], Y = G.length, q = 0; q < Y; q++)
                k(G[q]) && K.push(G[q]);
              return K;
            }, p.arrEvery = Array.prototype.every ? function(G, k) {
              return G.every(k);
            } : function(G, k) {
              for (var K = G.length, Y = 0; Y < K; Y++)
                if (!k(G[Y], Y, G))
                  return !1;
              return !0;
            };
            function B(G, k) {
              if (G.length === 0)
                return !0;
              var K = G[0][k];
              return (0, p.arrEvery)(G, function(Y) {
                return Y[k] === K;
              });
            }
            p.allSame = B;
            var j = {
              json: "application/json",
              jsonp: "application/javascript",
              xml: "application/xml",
              html: "text/html",
              msgpack: "application/x-msgpack"
            };
            function z(G, k) {
              var K = j[k || nt.json];
              return {
                accept: K,
                "X-Ably-Version": T.default.protocolVersion.toString(),
                "Ably-Agent": (0, T.getAgentString)(G)
              };
            }
            p.defaultGetHeaders = z;
            function _(G, k) {
              var K, Y = K = j[k || nt.json];
              return {
                accept: Y,
                "content-type": K,
                "X-Ably-Version": T.default.protocolVersion.toString(),
                "Ably-Agent": (0, T.getAgentString)(G)
              };
            }
            p.defaultPostHeaders = _;
            function F(G) {
              return G.splice(v(G), 1)[0];
            }
            p.arrPopRandomElement = F;
            function m(G) {
              var k = [];
              if (G)
                for (var K in G)
                  k.push(encodeURIComponent(K) + "=" + encodeURIComponent(G[K]));
              return k.length ? "?" + k.join("&") : "";
            }
            p.toQueryString = m;
            function x(G) {
              for (var k, K = /([^?&=]+)=?([^&]*)/g, Y = {}; k = K.exec(G); )
                Y[decodeURIComponent(k[1])] = decodeURIComponent(k[2]);
              return Y;
            }
            p.parseQueryString = x, p.now = Date.now || function() {
              return (/* @__PURE__ */ new Date()).getTime();
            };
            function L(G) {
              return typeof G == "object" && G !== null && (G.constructor.name == "ErrorInfo" || G.constructor.name == "PartialErrorInfo");
            }
            p.isErrorInfoOrPartialErrorInfo = L;
            function U(G) {
              var k, K;
              return G instanceof Error || ((k = G == null ? void 0 : G.constructor) === null || k === void 0 ? void 0 : k.name) === "ErrorInfo" || ((K = G == null ? void 0 : G.constructor) === null || K === void 0 ? void 0 : K.name) === "PartialErrorInfo" ? G.toString() : w.default.Config.inspect(G);
            }
            p.inspectError = U;
            function W(G) {
              return w.default.BufferUtils.isBuffer(G) ? G.toString() : typeof G == "string" ? G : w.default.Config.inspect(G);
            }
            p.inspectBody = W;
            function Q(G) {
              if (w.default.BufferUtils.isBuffer(G))
                return w.default.BufferUtils.byteLength(G);
              if (typeof G == "string")
                return w.default.Config.stringByteSize(G);
              throw new Error("Expected input of Utils.dataSizeBytes to be a buffer or string, but was: " + typeof G);
            }
            p.dataSizeBytes = Q;
            function J() {
              return String(Math.random()).substr(2);
            }
            p.cheapRandStr = J;
            var $ = function(G) {
              if (w.default.Config.getRandomValues && typeof Uint8Array < "u") {
                var k = new Uint8Array(G);
                return w.default.Config.getRandomValues(k), w.default.BufferUtils.base64Encode(k);
              }
              for (var K = w.default.BufferUtils.base64CharSet, Y = Math.round(G * 4 / 3), q = "", at = 0; at < Y; at++)
                q += K[v(K)];
              return q;
            };
            p.randomString = $;
            var Z = function(G) {
              if (w.default.Config.getRandomValues && typeof Uint8Array < "u") {
                var k = new Uint8Array(G);
                return w.default.Config.getRandomValues(k), w.default.BufferUtils.hexEncode(k);
              }
              for (var K = w.default.BufferUtils.hexCharSet, Y = G * 2, q = "", at = 0; at < Y; at++)
                q += K[v(K)];
              return q;
            };
            p.randomHexString = Z;
            function et(G, k) {
              for (var K = Math.min(k, G.length), Y = G.slice(), q = [], at = 0; at < K; at++)
                q.push(F(Y));
              return q;
            }
            p.arrChooseN = et, p.trim = String.prototype.trim ? function(G) {
              return G.trim();
            } : function(G) {
              return G.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
            };
            function X(G, k, K) {
              return new Promise(function(Y, q) {
                G[k].apply(G, a.__spreadArray(a.__spreadArray([], K, !1), [function(at, gt) {
                  at ? q(at) : Y(gt);
                }], !1));
              });
            }
            p.promisify = X;
            var nt;
            (function(G) {
              G.msgpack = "msgpack", G.json = "json";
            })(nt = p.Format || (p.Format = {}));
            function it(G, k) {
              return k == "msgpack" ? w.default.Config.msgpack.decode(G) : JSON.parse(String(G));
            }
            p.decodeBody = it;
            function ot(G, k) {
              return k == "msgpack" ? w.default.Config.msgpack.encode(G, !0) : JSON.stringify(G);
            }
            p.encodeBody = ot;
            function rt(G) {
              return G.map(function(k) {
                return k && k.toLowerCase();
              });
            }
            p.allToLowerCase = rt;
            function ft(G) {
              return G.map(function(k) {
                return k && k.toUpperCase();
              });
            }
            p.allToUpperCase = ft;
            function mt(G) {
              return Math.min((G + 2) / 3, 2);
            }
            p.getBackoffCoefficient = mt;
            function ut() {
              return 1 - Math.random() * 0.2;
            }
            p.getJitterCoefficient = ut;
            function yt(G, k) {
              return G * mt(k) * ut();
            }
            p.getRetryTime = yt;
            function Ot() {
              return g || (typeof window < "u" ? window : self);
            }
            p.getGlobalObject = Ot;
            function Rt(G, k) {
              return Object.keys(G).every(function(K) {
                return G[K] === k[K];
              }) && Object.keys(k).every(function(K) {
                return k[K] === G[K];
              });
            }
            p.shallowEquals = Rt;
            function It(G) {
              var k = /^(\[([^?]*)(?:(.*))\])?(.+)$/, K = G.match(k);
              if (!K || !K.length || K.length < 5)
                throw new M.default("regex match failed", 400, 40010);
              if (K[2])
                throw new M.default("cannot use a derived option with a ".concat(K[2], " channel"), 400, 40010);
              return {
                qualifierParam: K[3] || "",
                channelName: K[4]
              };
            }
            p.matchDerivedChannel = It;
            function Pt(G) {
              return w.default.Config.createHmac ? Buffer.from(G, "ascii").toString("base64") : (0, b.stringify)((0, I.parse)(G));
            }
            p.toBase64 = Pt;
            function bt(G, k) {
              return G.length === k.length && (0, p.arrEvery)(G, function(K, Y) {
                return K === k[Y];
              });
            }
            p.arrEquals = bt;
          }).call(this, f(13));
        },
        /* 2 */
        /***/
        function(H, p, f) {
          (function(g) {
            Object.defineProperty(p, "__esModule", { value: !0 });
            var a = f(0), w = a.__importDefault(f(3)), T = g || (typeof window < "u" ? window : self), M;
            (function(o) {
              o[o.None = 0] = "None", o[o.Error = 1] = "Error", o[o.Major = 2] = "Major", o[o.Minor = 3] = "Minor", o[o.Micro = 4] = "Micro";
            })(M || (M = {}));
            function b(o, d) {
              return "".concat(o).padStart(d ? 3 : 2, "0");
            }
            function I(o) {
              return w.default.Config.logTimestamps ? function(d) {
                var S = /* @__PURE__ */ new Date();
                o(b(S.getHours()) + ":" + b(S.getMinutes()) + ":" + b(S.getSeconds()) + "." + b(S.getMilliseconds(), 1) + " " + d);
              } : o;
            }
            var v = function() {
              var o, d, S, A;
              return typeof Window > "u" && typeof WorkerGlobalScope > "u" || typeof ((d = (o = T == null ? void 0 : T.console) === null || o === void 0 ? void 0 : o.log) === null || d === void 0 ? void 0 : d.apply) == "function" ? (S = function() {
                for (var u = [], c = 0; c < arguments.length; c++)
                  u[c] = arguments[c];
                console.log.apply(console, u);
              }, A = console.warn ? function() {
                for (var u = [], c = 0; c < arguments.length; c++)
                  u[c] = arguments[c];
                console.warn.apply(console, u);
              } : S) : T != null && T.console.log ? S = A = function() {
                Function.prototype.apply.call(console.log, console, arguments);
              } : S = A = function() {
              }, [S, A].map(I);
            }, R = (
              /** @class */
              function() {
                function o() {
                  o.logLevel = o.LOG_DEFAULT;
                }
                return o.initLogHandlers = function() {
                  var d = v(), S = d[0], A = d[1];
                  this.logHandler = S, this.logErrorHandler = A;
                }, o.logLevel = M.Error, o.LOG_NONE = M.None, o.LOG_ERROR = M.Error, o.LOG_MAJOR = M.Major, o.LOG_MINOR = M.Minor, o.LOG_MICRO = M.Micro, o.LOG_DEFAULT = M.Error, o.LOG_DEBUG = M.Micro, o.logAction = function(d, S, A) {
                  o.shouldLog(d) && (d === M.Error ? o.logErrorHandler : o.logHandler)("Ably: " + S + ": " + A);
                }, o.deprecated = function(d, S) {
                  o.deprecatedWithMsg(d, "Please use '" + S + "' instead.");
                }, o.deprecatedWithMsg = function(d, S) {
                  o.shouldLog(M.Error) && o.logErrorHandler("Ably: Deprecation warning - '" + d + "' is deprecated and will be removed from a future version. " + S);
                }, o.shouldLog = function(d) {
                  return d <= o.logLevel;
                }, o.setLog = function(d, S) {
                  d !== void 0 && (o.logLevel = d), S !== void 0 && (o.logHandler = o.logErrorHandler = S);
                }, o;
              }()
            );
            p.default = R;
          }).call(this, f(13));
        },
        /* 3 */
        /***/
        function(H, p, f) {
          Object.defineProperty(p, "__esModule", { value: !0 });
          var g = (
            /** @class */
            function() {
              function a() {
              }
              return a;
            }()
          );
          p.default = g;
        },
        /* 4 */
        /***/
        function(H, p, f) {
          Object.defineProperty(p, "__esModule", { value: !0 }), p.PartialErrorInfo = void 0;
          var g = f(0), a = g.__importDefault(f(3)), w = g.__importStar(f(1));
          function T(I) {
            var v = "[" + I.constructor.name;
            return I.message && (v += ": " + I.message), I.statusCode && (v += "; statusCode=" + I.statusCode), I.code && (v += "; code=" + I.code), I.cause && (v += "; cause=" + w.inspectError(I.cause)), I.href && !(I.message && I.message.indexOf("help.ably.io") > -1) && (v += "; see " + I.href + " "), v += "]", v;
          }
          var M = (
            /** @class */
            function(I) {
              g.__extends(v, I);
              function v(R, o, d, S) {
                var A = I.call(this, R) || this;
                return typeof Object.setPrototypeOf < "u" && Object.setPrototypeOf(A, v.prototype), A.code = o, A.statusCode = d, A.cause = S, A;
              }
              return v.prototype.toString = function() {
                return T(this);
              }, v.fromValues = function(R) {
                var o = R, d = o.message, S = o.code, A = o.statusCode;
                if (typeof d != "string" || typeof S != "number" || typeof A != "number")
                  throw new Error("ErrorInfo.fromValues(): invalid values: " + a.default.Config.inspect(R));
                var u = Object.assign(new v(d, S, A), R);
                return u.code && !u.href && (u.href = "https://help.ably.io/error/" + u.code), u;
              }, v;
            }(Error)
          );
          p.default = M;
          var b = (
            /** @class */
            function(I) {
              g.__extends(v, I);
              function v(R, o, d, S) {
                var A = I.call(this, R) || this;
                return typeof Object.setPrototypeOf < "u" && Object.setPrototypeOf(A, v.prototype), A.code = o, A.statusCode = d, A.cause = S, A;
              }
              return v.prototype.toString = function() {
                return T(this);
              }, v;
            }(Error)
          );
          p.PartialErrorInfo = b;
        },
        /* 5 */
        /***/
        function(H, p, f) {
          (function(g, a) {
            H.exports = a(f(6));
          })(this, function(g) {
            return function() {
              if (typeof ArrayBuffer == "function") {
                var a = g, w = a.lib, T = w.WordArray, M = T.init, b = T.init = function(I) {
                  if (I instanceof ArrayBuffer && (I = new Uint8Array(I)), (I instanceof Int8Array || typeof Uint8ClampedArray < "u" && I instanceof Uint8ClampedArray || I instanceof Int16Array || I instanceof Uint16Array || I instanceof Int32Array || I instanceof Uint32Array || I instanceof Float32Array || I instanceof Float64Array) && (I = new Uint8Array(I.buffer, I.byteOffset, I.byteLength)), I instanceof Uint8Array) {
                    for (var v = I.byteLength, R = [], o = 0; o < v; o++)
                      R[o >>> 2] |= I[o] << 24 - o % 4 * 8;
                    M.call(this, R, v);
                  } else
                    M.apply(this, arguments);
                };
                b.prototype = T;
              }
            }(), g.lib.WordArray;
          });
        },
        /* 6 */
        /***/
        function(H, p, f) {
          (function(g) {
            (function(a, w) {
              H.exports = w();
            })(this, function() {
              var a = a || function(w, T) {
                var M;
                if (typeof window < "u" && window.crypto && (M = window.crypto), !M && typeof window < "u" && window.msCrypto && (M = window.msCrypto), !M && typeof g < "u" && g.crypto && (M = g.crypto), !M)
                  try {
                    M = f(44);
                  } catch {
                  }
                var b = function() {
                  if (M) {
                    if (typeof M.getRandomValues == "function")
                      try {
                        return M.getRandomValues(new Uint32Array(1))[0];
                      } catch {
                      }
                    if (typeof M.randomBytes == "function")
                      try {
                        return M.randomBytes(4).readInt32LE();
                      } catch {
                      }
                  }
                  throw new Error("Native crypto module could not be used to get secure random number.");
                }, I = Object.create || function() {
                  function n() {
                  }
                  return function(t) {
                    var e;
                    return n.prototype = t, e = new n(), n.prototype = null, e;
                  };
                }(), v = {}, R = v.lib = {}, o = R.Base = function() {
                  return {
                    /**
                     * Creates a new object that inherits from this object.
                     *
                     * @param {Object} overrides Properties to copy into the new object.
                     *
                     * @return {Object} The new object.
                     *
                     * @static
                     *
                     * @example
                     *
                     *     var MyType = CryptoJS.lib.Base.extend({
                     *         field: 'value',
                     *
                     *         method: function () {
                     *         }
                     *     });
                     */
                    extend: function(n) {
                      var t = I(this);
                      return n && t.mixIn(n), (!t.hasOwnProperty("init") || this.init === t.init) && (t.init = function() {
                        t.$super.init.apply(this, arguments);
                      }), t.init.prototype = t, t.$super = this, t;
                    },
                    /**
                     * Extends this object and runs the init method.
                     * Arguments to create() will be passed to init().
                     *
                     * @return {Object} The new object.
                     *
                     * @static
                     *
                     * @example
                     *
                     *     var instance = MyType.create();
                     */
                    create: function() {
                      var n = this.extend();
                      return n.init.apply(n, arguments), n;
                    },
                    /**
                     * Initializes a newly created object.
                     * Override this method to add some logic when your objects are created.
                     *
                     * @example
                     *
                     *     var MyType = CryptoJS.lib.Base.extend({
                     *         init: function () {
                     *             // ...
                     *         }
                     *     });
                     */
                    init: function() {
                    },
                    /**
                     * Copies properties into this object.
                     *
                     * @param {Object} properties The properties to mix in.
                     *
                     * @example
                     *
                     *     MyType.mixIn({
                     *         field: 'value'
                     *     });
                     */
                    mixIn: function(n) {
                      for (var t in n)
                        n.hasOwnProperty(t) && (this[t] = n[t]);
                      n.hasOwnProperty("toString") && (this.toString = n.toString);
                    },
                    /**
                     * Creates a copy of this object.
                     *
                     * @return {Object} The clone.
                     *
                     * @example
                     *
                     *     var clone = instance.clone();
                     */
                    clone: function() {
                      return this.init.prototype.extend(this);
                    }
                  };
                }(), d = R.WordArray = o.extend({
                  /**
                   * Initializes a newly created word array.
                   *
                   * @param {Array} words (Optional) An array of 32-bit words.
                   * @param {number} sigBytes (Optional) The number of significant bytes in the words.
                   *
                   * @example
                   *
                   *     var wordArray = CryptoJS.lib.WordArray.create();
                   *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
                   *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
                   */
                  init: function(n, t) {
                    n = this.words = n || [], t != T ? this.sigBytes = t : this.sigBytes = n.length * 4;
                  },
                  /**
                   * Converts this word array to a string.
                   *
                   * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
                   *
                   * @return {string} The stringified word array.
                   *
                   * @example
                   *
                   *     var string = wordArray + '';
                   *     var string = wordArray.toString();
                   *     var string = wordArray.toString(CryptoJS.enc.Utf8);
                   */
                  toString: function(n) {
                    return (n || A).stringify(this);
                  },
                  /**
                   * Concatenates a word array to this word array.
                   *
                   * @param {WordArray} wordArray The word array to append.
                   *
                   * @return {WordArray} This word array.
                   *
                   * @example
                   *
                   *     wordArray1.concat(wordArray2);
                   */
                  concat: function(n) {
                    var t = this.words, e = n.words, s = this.sigBytes, i = n.sigBytes;
                    if (this.clamp(), s % 4)
                      for (var h = 0; h < i; h++) {
                        var D = e[h >>> 2] >>> 24 - h % 4 * 8 & 255;
                        t[s + h >>> 2] |= D << 24 - (s + h) % 4 * 8;
                      }
                    else
                      for (var h = 0; h < i; h += 4)
                        t[s + h >>> 2] = e[h >>> 2];
                    return this.sigBytes += i, this;
                  },
                  /**
                   * Removes insignificant bits.
                   *
                   * @example
                   *
                   *     wordArray.clamp();
                   */
                  clamp: function() {
                    var n = this.words, t = this.sigBytes;
                    n[t >>> 2] &= 4294967295 << 32 - t % 4 * 8, n.length = w.ceil(t / 4);
                  },
                  /**
                   * Creates a copy of this word array.
                   *
                   * @return {WordArray} The clone.
                   *
                   * @example
                   *
                   *     var clone = wordArray.clone();
                   */
                  clone: function() {
                    var n = o.clone.call(this);
                    return n.words = this.words.slice(0), n;
                  },
                  /**
                   * Creates a word array filled with random bytes.
                   *
                   * @param {number} nBytes The number of random bytes to generate.
                   *
                   * @return {WordArray} The random word array.
                   *
                   * @static
                   *
                   * @example
                   *
                   *     var wordArray = CryptoJS.lib.WordArray.random(16);
                   */
                  random: function(n) {
                    for (var t = [], e = 0; e < n; e += 4)
                      t.push(b());
                    return new d.init(t, n);
                  }
                }), S = v.enc = {}, A = S.Hex = {
                  /**
                   * Converts a word array to a hex string.
                   *
                   * @param {WordArray} wordArray The word array.
                   *
                   * @return {string} The hex string.
                   *
                   * @static
                   *
                   * @example
                   *
                   *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
                   */
                  stringify: function(n) {
                    for (var t = n.words, e = n.sigBytes, s = [], i = 0; i < e; i++) {
                      var h = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                      s.push((h >>> 4).toString(16)), s.push((h & 15).toString(16));
                    }
                    return s.join("");
                  },
                  /**
                   * Converts a hex string to a word array.
                   *
                   * @param {string} hexStr The hex string.
                   *
                   * @return {WordArray} The word array.
                   *
                   * @static
                   *
                   * @example
                   *
                   *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
                   */
                  parse: function(n) {
                    for (var t = n.length, e = [], s = 0; s < t; s += 2)
                      e[s >>> 3] |= parseInt(n.substr(s, 2), 16) << 24 - s % 8 * 4;
                    return new d.init(e, t / 2);
                  }
                }, u = S.Latin1 = {
                  /**
                   * Converts a word array to a Latin1 string.
                   *
                   * @param {WordArray} wordArray The word array.
                   *
                   * @return {string} The Latin1 string.
                   *
                   * @static
                   *
                   * @example
                   *
                   *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
                   */
                  stringify: function(n) {
                    for (var t = n.words, e = n.sigBytes, s = [], i = 0; i < e; i++) {
                      var h = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                      s.push(String.fromCharCode(h));
                    }
                    return s.join("");
                  },
                  /**
                   * Converts a Latin1 string to a word array.
                   *
                   * @param {string} latin1Str The Latin1 string.
                   *
                   * @return {WordArray} The word array.
                   *
                   * @static
                   *
                   * @example
                   *
                   *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
                   */
                  parse: function(n) {
                    for (var t = n.length, e = [], s = 0; s < t; s++)
                      e[s >>> 2] |= (n.charCodeAt(s) & 255) << 24 - s % 4 * 8;
                    return new d.init(e, t);
                  }
                }, c = S.Utf8 = {
                  /**
                   * Converts a word array to a UTF-8 string.
                   *
                   * @param {WordArray} wordArray The word array.
                   *
                   * @return {string} The UTF-8 string.
                   *
                   * @static
                   *
                   * @example
                   *
                   *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
                   */
                  stringify: function(n) {
                    try {
                      return decodeURIComponent(escape(u.stringify(n)));
                    } catch {
                      throw new Error("Malformed UTF-8 data");
                    }
                  },
                  /**
                   * Converts a UTF-8 string to a word array.
                   *
                   * @param {string} utf8Str The UTF-8 string.
                   *
                   * @return {WordArray} The word array.
                   *
                   * @static
                   *
                   * @example
                   *
                   *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
                   */
                  parse: function(n) {
                    return u.parse(unescape(encodeURIComponent(n)));
                  }
                }, l = R.BufferedBlockAlgorithm = o.extend({
                  /**
                   * Resets this block algorithm's data buffer to its initial state.
                   *
                   * @example
                   *
                   *     bufferedBlockAlgorithm.reset();
                   */
                  reset: function() {
                    this._data = new d.init(), this._nDataBytes = 0;
                  },
                  /**
                   * Adds new data to this block algorithm's buffer.
                   *
                   * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
                   *
                   * @example
                   *
                   *     bufferedBlockAlgorithm._append('data');
                   *     bufferedBlockAlgorithm._append(wordArray);
                   */
                  _append: function(n) {
                    typeof n == "string" && (n = c.parse(n)), this._data.concat(n), this._nDataBytes += n.sigBytes;
                  },
                  /**
                   * Processes available data blocks.
                   *
                   * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
                   *
                   * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
                   *
                   * @return {WordArray} The processed data.
                   *
                   * @example
                   *
                   *     var processedData = bufferedBlockAlgorithm._process();
                   *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
                   */
                  _process: function(n) {
                    var t, e = this._data, s = e.words, i = e.sigBytes, h = this.blockSize, D = h * 4, P = i / D;
                    n ? P = w.ceil(P) : P = w.max((P | 0) - this._minBufferSize, 0);
                    var E = P * h, O = w.min(E * 4, i);
                    if (E) {
                      for (var y = 0; y < E; y += h)
                        this._doProcessBlock(s, y);
                      t = s.splice(0, E), e.sigBytes -= O;
                    }
                    return new d.init(t, O);
                  },
                  /**
                   * Creates a copy of this object.
                   *
                   * @return {Object} The clone.
                   *
                   * @example
                   *
                   *     var clone = bufferedBlockAlgorithm.clone();
                   */
                  clone: function() {
                    var n = o.clone.call(this);
                    return n._data = this._data.clone(), n;
                  },
                  _minBufferSize: 0
                });
                R.Hasher = l.extend({
                  /**
                   * Configuration options.
                   */
                  cfg: o.extend(),
                  /**
                   * Initializes a newly created hasher.
                   *
                   * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
                   *
                   * @example
                   *
                   *     var hasher = CryptoJS.algo.SHA256.create();
                   */
                  init: function(n) {
                    this.cfg = this.cfg.extend(n), this.reset();
                  },
                  /**
                   * Resets this hasher to its initial state.
                   *
                   * @example
                   *
                   *     hasher.reset();
                   */
                  reset: function() {
                    l.reset.call(this), this._doReset();
                  },
                  /**
                   * Updates this hasher with a message.
                   *
                   * @param {WordArray|string} messageUpdate The message to append.
                   *
                   * @return {Hasher} This hasher.
                   *
                   * @example
                   *
                   *     hasher.update('message');
                   *     hasher.update(wordArray);
                   */
                  update: function(n) {
                    return this._append(n), this._process(), this;
                  },
                  /**
                   * Finalizes the hash computation.
                   * Note that the finalize operation is effectively a destructive, read-once operation.
                   *
                   * @param {WordArray|string} messageUpdate (Optional) A final message update.
                   *
                   * @return {WordArray} The hash.
                   *
                   * @example
                   *
                   *     var hash = hasher.finalize();
                   *     var hash = hasher.finalize('message');
                   *     var hash = hasher.finalize(wordArray);
                   */
                  finalize: function(n) {
                    n && this._append(n);
                    var t = this._doFinalize();
                    return t;
                  },
                  blockSize: 16,
                  /**
                   * Creates a shortcut function to a hasher's object interface.
                   *
                   * @param {Hasher} hasher The hasher to create a helper for.
                   *
                   * @return {Function} The shortcut function.
                   *
                   * @static
                   *
                   * @example
                   *
                   *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
                   */
                  _createHelper: function(n) {
                    return function(t, e) {
                      return new n.init(e).finalize(t);
                    };
                  },
                  /**
                   * Creates a shortcut function to the HMAC's object interface.
                   *
                   * @param {Hasher} hasher The hasher to use in this HMAC helper.
                   *
                   * @return {Function} The shortcut function.
                   *
                   * @static
                   *
                   * @example
                   *
                   *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
                   */
                  _createHmacHelper: function(n) {
                    return function(t, e) {
                      return new r.HMAC.init(n, e).finalize(t);
                    };
                  }
                });
                var r = v.algo = {};
                return v;
              }(Math);
              return a;
            });
          }).call(this, f(13));
        },
        /* 7 */
        /***/
        function(H, p, f) {
          Object.defineProperty(p, "__esModule", { value: !0 });
          var g = f(0), a = g.__importStar(f(1)), w = g.__importDefault(f(2)), T = g.__importDefault(f(3));
          function M(v, R, o) {
            try {
              R.apply(v, o);
            } catch (d) {
              w.default.logAction(w.default.LOG_ERROR, "EventEmitter.emit()", "Unexpected listener exception: " + d + "; stack = " + (d && d.stack));
            }
          }
          function b(v, R, o) {
            for (var d, S, A, u = 0; u < v.length; u++)
              if (d = v[u], o && (d = d[o]), a.isArray(d)) {
                for (; (S = a.arrIndexOf(d, R)) !== -1; )
                  d.splice(S, 1);
                o && d.length === 0 && delete v[u][o];
              } else if (a.isObject(d))
                for (A in d)
                  Object.prototype.hasOwnProperty.call(d, A) && a.isArray(d[A]) && b([d], R, A);
          }
          var I = (
            /** @class */
            function() {
              function v() {
                this.any = [], this.events = /* @__PURE__ */ Object.create(null), this.anyOnce = [], this.eventsOnce = /* @__PURE__ */ Object.create(null);
              }
              return v.prototype.on = function() {
                for (var R = this, o = [], d = 0; d < arguments.length; d++)
                  o[d] = arguments[d];
                if (o.length === 1) {
                  var S = o[0];
                  if (typeof S == "function")
                    this.any.push(S);
                  else
                    throw new Error("EventListener.on(): Invalid arguments: " + T.default.Config.inspect(o));
                }
                if (o.length === 2) {
                  var A = o[0], u = o[1];
                  if (typeof u != "function")
                    throw new Error("EventListener.on(): Invalid arguments: " + T.default.Config.inspect(o));
                  if (a.isEmptyArg(A))
                    this.any.push(u);
                  else if (a.isArray(A))
                    A.forEach(function(l) {
                      R.on(l, u);
                    });
                  else {
                    if (typeof A != "string")
                      throw new Error("EventListener.on(): Invalid arguments: " + T.default.Config.inspect(o));
                    var c = this.events[A] || (this.events[A] = []);
                    c.push(u);
                  }
                }
              }, v.prototype.off = function() {
                for (var R, o = this, d = [], S = 0; S < arguments.length; S++)
                  d[S] = arguments[S];
                if (d.length == 0 || a.isEmptyArg(d[0]) && a.isEmptyArg(d[1])) {
                  this.any = [], this.events = /* @__PURE__ */ Object.create(null), this.anyOnce = [], this.eventsOnce = /* @__PURE__ */ Object.create(null);
                  return;
                }
                var A = d[0], u = d[1], c = null, l = null;
                if (d.length === 1 || !u)
                  typeof A == "function" ? c = A : l = A;
                else {
                  if (typeof u != "function")
                    throw new Error("EventEmitter.off(): invalid arguments:" + T.default.Config.inspect(d));
                  R = [A, u], l = R[0], c = R[1];
                }
                if (c && a.isEmptyArg(l)) {
                  b([this.any, this.events, this.anyOnce, this.eventsOnce], c);
                  return;
                }
                if (a.isArray(l)) {
                  l.forEach(function(r) {
                    o.off(r, c);
                  });
                  return;
                }
                if (typeof l != "string")
                  throw new Error("EventEmitter.off(): invalid arguments:" + T.default.Config.inspect(d));
                c ? b([this.events, this.eventsOnce], c, l) : (delete this.events[l], delete this.eventsOnce[l]);
              }, v.prototype.listeners = function(R) {
                if (R) {
                  var o = this.events[R] || [];
                  return this.eventsOnce[R] && Array.prototype.push.apply(o, this.eventsOnce[R]), o.length ? o : null;
                }
                return this.any.length ? this.any : null;
              }, v.prototype.emit = function(R) {
                for (var o = [], d = 1; d < arguments.length; d++)
                  o[d - 1] = arguments[d];
                var S = { event: R }, A = [];
                this.anyOnce.length && (Array.prototype.push.apply(A, this.anyOnce), this.anyOnce = []), this.any.length && Array.prototype.push.apply(A, this.any);
                var u = this.eventsOnce[R];
                u && (Array.prototype.push.apply(A, u), delete this.eventsOnce[R]);
                var c = this.events[R];
                c && Array.prototype.push.apply(A, c), a.arrForEach(A, function(l) {
                  M(S, l, o);
                });
              }, v.prototype.once = function() {
                for (var R = this, o = [], d = 0; d < arguments.length; d++)
                  o[d] = arguments[d];
                var S = o.length;
                if ((S === 0 || S === 1 && typeof o[0] != "function") && T.default.Config.Promise) {
                  var A = o[0];
                  return new T.default.Config.Promise(function(t) {
                    R.once(A, t);
                  });
                }
                var u = o[0], c = o[1];
                if (o.length === 1 && typeof u == "function")
                  this.anyOnce.push(u);
                else if (a.isEmptyArg(u)) {
                  if (typeof c != "function")
                    throw new Error("EventEmitter.once(): Invalid arguments:" + T.default.Config.inspect(o));
                  this.anyOnce.push(c);
                } else if (a.isArray(u)) {
                  var l = this, r = function() {
                    var t = Array.prototype.slice.call(arguments);
                    if (a.arrForEach(u, function(e) {
                      l.off(e, r);
                    }), typeof c != "function")
                      throw new Error("EventEmitter.once(): Invalid arguments:" + T.default.Config.inspect(o));
                    c.apply(this, t);
                  };
                  a.arrForEach(u, function(t) {
                    l.on(t, r);
                  });
                } else {
                  if (typeof u != "string")
                    throw new Error("EventEmitter.once(): Invalid arguments:" + T.default.Config.inspect(o));
                  var n = this.eventsOnce[u] || (this.eventsOnce[u] = []);
                  if (c) {
                    if (typeof c != "function")
                      throw new Error("EventEmitter.once(): Invalid arguments:" + T.default.Config.inspect(o));
                    n.push(c);
                  }
                }
              }, v.prototype.whenState = function(R, o, d) {
                for (var S = this, A = [], u = 3; u < arguments.length; u++)
                  A[u - 3] = arguments[u];
                var c = { event: R };
                if (typeof R != "string" || typeof o != "string")
                  throw "whenState requires a valid event String argument";
                if (typeof d != "function" && T.default.Config.Promise)
                  return new T.default.Config.Promise(function(l) {
                    v.prototype.whenState.apply(S, [R, o, l].concat(A));
                  });
                R === o ? M(c, d, A) : this.once(R, d);
              }, v;
            }()
          );
          p.default = I;
        },
        /* 8 */
        /***/
        function(H, p, f) {
          Object.defineProperty(p, "__esModule", { value: !0 }), p.getDefaults = p.normaliseOptions = p.objectifyOptions = p.getAgentString = p.getHosts = p.getFallbackHosts = p.environmentFallbackHosts = p.getHttpScheme = p.getPort = p.getHost = void 0;
          var g = f(0), a = g.__importDefault(f(3)), w = g.__importStar(f(1)), T = g.__importDefault(f(2)), M = g.__importDefault(f(4)), b = f(43), I = "ably-js/" + b.version, v = {
            ENVIRONMENT: "",
            REST_HOST: "rest.ably.io",
            REALTIME_HOST: "realtime.ably.io",
            FALLBACK_HOSTS: [
              "A.ably-realtime.com",
              "B.ably-realtime.com",
              "C.ably-realtime.com",
              "D.ably-realtime.com",
              "E.ably-realtime.com"
            ],
            PORT: 80,
            TLS_PORT: 443,
            TIMEOUTS: {
              /* Documented as options params: */
              disconnectedRetryTimeout: 15e3,
              suspendedRetryTimeout: 3e4,
              /* Undocumented, but part of the api and can be used by customers: */
              httpRequestTimeout: 15e3,
              channelRetryTimeout: 15e3,
              fallbackRetryTimeout: 6e5,
              /* For internal / test use only: */
              connectionStateTtl: 12e4,
              realtimeRequestTimeout: 1e4,
              recvTimeout: 9e4,
              preferenceConnectTimeout: 6e3,
              parallelUpgradeDelay: 6e3
            },
            httpMaxRetryCount: 3,
            maxMessageSize: 65536,
            version: b.version,
            protocolVersion: 2,
            agent: I,
            getHost: R,
            getPort: o,
            getHttpScheme: d,
            environmentFallbackHosts: S,
            getFallbackHosts: A,
            getHosts: u,
            checkHost: c,
            objectifyOptions: t,
            normaliseOptions: e
          };
          function R(i, h, D) {
            return D ? h = h == i.restHost && i.realtimeHost || h || i.realtimeHost : h = h || i.restHost, h;
          }
          p.getHost = R;
          function o(i, h) {
            return h || i.tls ? i.tlsPort : i.port;
          }
          p.getPort = o;
          function d(i) {
            return i.tls ? "https://" : "http://";
          }
          p.getHttpScheme = d;
          function S(i) {
            return [
              i + "-a-fallback.ably-realtime.com",
              i + "-b-fallback.ably-realtime.com",
              i + "-c-fallback.ably-realtime.com",
              i + "-d-fallback.ably-realtime.com",
              i + "-e-fallback.ably-realtime.com"
            ];
          }
          p.environmentFallbackHosts = S;
          function A(i) {
            var h = i.fallbackHosts, D = typeof i.httpMaxRetryCount < "u" ? i.httpMaxRetryCount : v.httpMaxRetryCount;
            return h ? w.arrChooseN(h, D) : [];
          }
          p.getFallbackHosts = A;
          function u(i) {
            return [i.restHost].concat(A(i));
          }
          p.getHosts = u;
          function c(i) {
            if (typeof i != "string")
              throw new M.default("host must be a string; was a " + typeof i, 4e4, 400);
            if (!i.length)
              throw new M.default("host must not be zero-length", 4e4, 400);
          }
          function l(i, h, D) {
            return i.realtimeHost ? i.realtimeHost : i.restHost ? (T.default.logAction(T.default.LOG_MINOR, "Defaults.normaliseOptions", 'restHost is set to "' + i.restHost + '" but realtimeHost is not set, so setting realtimeHost to "' + i.restHost + '" too. If this is not what you want, please set realtimeHost explicitly.'), i.restHost) : h ? v.REALTIME_HOST : D + "-" + v.REALTIME_HOST;
          }
          function r(i) {
            var h = {};
            for (var D in v.TIMEOUTS)
              h[D] = i[D] || v.TIMEOUTS[D];
            return h;
          }
          function n(i) {
            var h = v.agent;
            if (i.agents)
              for (var D in i.agents)
                h += " " + D + "/" + i.agents[D];
            return h;
          }
          p.getAgentString = n;
          function t(i) {
            return typeof i == "string" ? i.indexOf(":") == -1 ? { token: i } : { key: i } : i;
          }
          p.objectifyOptions = t;
          function e(i) {
            if (i.host && (T.default.deprecated("host", "restHost"), i.restHost = i.host), i.wsHost && (T.default.deprecated("wsHost", "realtimeHost"), i.realtimeHost = i.wsHost), i.queueEvents && (T.default.deprecated("queueEvents", "queueMessages"), i.queueMessages = i.queueEvents), i.fallbackHostsUseDefault) {
              if (i.fallbackHosts) {
                var h = "fallbackHosts and fallbackHostsUseDefault cannot both be set";
                throw T.default.logAction(T.default.LOG_ERROR, "Defaults.normaliseOptions", h), new M.default(h, 4e4, 400);
              }
              if (i.port || i.tlsPort) {
                var h = "fallbackHostsUseDefault cannot be set when port or tlsPort are set";
                throw T.default.logAction(T.default.LOG_ERROR, "Defaults.normaliseOptions", h), new M.default(h, 4e4, 400);
              }
              i.environment ? T.default.deprecatedWithMsg("fallbackHostsUseDefault", "There is no longer a need to set this when the environment option is also set since the library will now generate the correct fallback hosts using the environment option.") : T.default.deprecated("fallbackHostsUseDefault", "fallbackHosts: Ably.Defaults.FALLBACK_HOSTS"), i.fallbackHosts = v.FALLBACK_HOSTS;
            }
            i.recover === !0 && (T.default.deprecated("{recover: true}", "{recover: function(lastConnectionDetails, cb) { cb(true); }}"), i.recover = function(F, m) {
              m(!0);
            }), typeof i.recover == "function" && i.closeOnUnload === !0 && (T.default.logAction(T.default.LOG_ERROR, "Defaults.normaliseOptions", "closeOnUnload was true and a session recovery function was set - these are mutually exclusive, so unsetting the latter"), i.recover = void 0), "closeOnUnload" in i || (i.closeOnUnload = !i.recover), i.transports && w.arrIn(i.transports, "xhr") && (T.default.deprecated('transports: ["xhr"]', 'transports: ["xhr_streaming"]'), w.arrDeleteValue(i.transports, "xhr"), i.transports.push("xhr_streaming")), "queueMessages" in i || (i.queueMessages = !0);
            var D = i.environment && String(i.environment).toLowerCase() || v.ENVIRONMENT, P = !D || D === "production";
            !i.fallbackHosts && !i.restHost && !i.realtimeHost && !i.port && !i.tlsPort && (i.fallbackHosts = P ? v.FALLBACK_HOSTS : S(D));
            var E = i.restHost || (P ? v.REST_HOST : D + "-" + v.REST_HOST), O = l(i, P, D);
            w.arrForEach((i.fallbackHosts || []).concat(E, O), c), i.port = i.port || v.PORT, i.tlsPort = i.tlsPort || v.TLS_PORT, "tls" in i || (i.tls = !0);
            var y = r(i);
            if ("useBinaryProtocol" in i ? i.useBinaryProtocol = a.default.Config.supportsBinary && i.useBinaryProtocol : i.useBinaryProtocol = a.default.Config.preferBinary, i.clientId) {
              var C = i.headers = i.headers || {};
              C["X-Ably-ClientId"] = a.default.BufferUtils.base64Encode(a.default.BufferUtils.utf8Encode(i.clientId));
            }
            "idempotentRestPublishing" in i || (i.idempotentRestPublishing = !0), i.promises && !a.default.Config.Promise && (T.default.logAction(T.default.LOG_ERROR, "Defaults.normaliseOptions", "{promises: true} was specified, but no Promise constructor found; disabling promises"), i.promises = !1);
            var N = null, B = i.connectivityCheckUrl;
            if (i.connectivityCheckUrl) {
              var j = i.connectivityCheckUrl.split("?"), z = j[0], _ = j[1];
              N = _ ? w.parseQueryString(_) : {}, z.indexOf("://") === -1 && (z = "https://" + z), B = z;
            }
            return g.__assign(g.__assign({}, i), { useBinaryProtocol: "useBinaryProtocol" in i ? a.default.Config.supportsBinary && i.useBinaryProtocol : a.default.Config.preferBinary, realtimeHost: O, restHost: E, maxMessageSize: i.maxMessageSize || v.maxMessageSize, timeouts: y, connectivityCheckParams: N, connectivityCheckUrl: B });
          }
          p.normaliseOptions = e, p.default = v;
          function s(i) {
            return Object.assign(v, i);
          }
          p.getDefaults = s;
        },
        /* 9 */
        /***/
        function(H, p, f) {
          Object.defineProperty(p, "__esModule", { value: !0 });
          var g = f(0), a = g.__importDefault(f(3)), w = g.__importDefault(f(2)), T = g.__importDefault(f(4)), M = g.__importStar(f(1));
          function b(o) {
            return !o || !o.channelOptions ? {
              channelOptions: o,
              plugins: {},
              baseEncodedPreviousPayload: void 0
            } : o;
          }
          function I(o) {
            if (o && o.cipher) {
              if (!a.default.Crypto)
                throw new Error("Encryption not enabled; use ably.encryption.js instead");
              var d = a.default.Crypto.getCipher(o.cipher);
              return {
                cipher: d.cipherParams,
                channelCipher: d.cipher
              };
            }
            return o ?? {};
          }
          function v(o) {
            var d = 0;
            return o.name && (d += o.name.length), o.clientId && (d += o.clientId.length), o.extras && (d += JSON.stringify(o.extras).length), o.data && (d += M.dataSizeBytes(o.data)), d;
          }
          var R = (
            /** @class */
            function() {
              function o() {
              }
              return o.prototype.toJSON = function() {
                var d = this.encoding, S = this.data;
                return S && a.default.BufferUtils.isBuffer(S) && (arguments.length > 0 ? (d = d ? d + "/base64" : "base64", S = a.default.BufferUtils.base64Encode(S)) : S = a.default.BufferUtils.toBuffer(S)), {
                  name: this.name,
                  id: this.id,
                  clientId: this.clientId,
                  connectionId: this.connectionId,
                  connectionKey: this.connectionKey,
                  extras: this.extras,
                  encoding: d,
                  data: S
                };
              }, o.prototype.toString = function() {
                var d = "[Message";
                return this.name && (d += "; name=" + this.name), this.id && (d += "; id=" + this.id), this.timestamp && (d += "; timestamp=" + this.timestamp), this.clientId && (d += "; clientId=" + this.clientId), this.connectionId && (d += "; connectionId=" + this.connectionId), this.encoding && (d += "; encoding=" + this.encoding), this.extras && (d += "; extras =" + JSON.stringify(this.extras)), this.data && (typeof this.data == "string" ? d += "; data=" + this.data : a.default.BufferUtils.isBuffer(this.data) ? d += "; data (buffer)=" + a.default.BufferUtils.base64Encode(this.data) : d += "; data (json)=" + JSON.stringify(this.data)), this.extras && (d += "; extras=" + JSON.stringify(this.extras)), d += "]", d;
              }, o.encrypt = function(d, S, A) {
                var u = d.data, c = d.encoding, l = S.channelCipher;
                c = c ? c + "/" : "", a.default.BufferUtils.isBuffer(u) || (u = a.default.BufferUtils.utf8Encode(String(u)), c = c + "utf-8/"), l.encrypt(u, function(r, n) {
                  if (r) {
                    A(r);
                    return;
                  }
                  d.data = n, d.encoding = c + "cipher+" + l.algorithm, A(null, d);
                });
              }, o.encode = function(d, S, A) {
                var u = d.data, c = typeof u == "string" || a.default.BufferUtils.isBuffer(u) || u === null || u === void 0;
                if (!c)
                  if (M.isObject(u) || M.isArray(u))
                    d.data = JSON.stringify(u), d.encoding = d.encoding ? d.encoding + "/json" : "json";
                  else
                    throw new T.default("Data type is unsupported", 40013, 400);
                S != null && S.cipher ? o.encrypt(d, S, A) : A(null, d);
              }, o.encodeArray = function(d, S, A) {
                for (var u = 0, c = 0; c < d.length; c++)
                  o.encode(d[c], S, function(l) {
                    if (l) {
                      A(l);
                      return;
                    }
                    u++, u == d.length && A(null, d);
                  });
              }, o.decode = function(d, S) {
                var A = b(S), u = d.data, c = d.encoding;
                if (c) {
                  var l = c.split("/"), r = void 0, n = l.length, t = d.data, e = "";
                  try {
                    for (; (r = n) > 0; ) {
                      var s = l[--n].match(/([-\w]+)(\+([\w-]+))?/);
                      if (!s)
                        break;
                      switch (e = s[1], e) {
                        case "base64":
                          t = a.default.BufferUtils.base64Decode(String(t)), r == l.length && (u = t);
                          continue;
                        case "utf-8":
                          t = a.default.BufferUtils.utf8Decode(t);
                          continue;
                        case "json":
                          t = JSON.parse(t);
                          continue;
                        case "cipher":
                          if (A.channelOptions != null && A.channelOptions.cipher && A.channelOptions.channelCipher) {
                            var i = s[3], h = A.channelOptions.channelCipher;
                            if (i != h.algorithm)
                              throw new Error("Unable to decrypt message with given cipher; incompatible cipher params");
                            t = h.decrypt(t);
                            continue;
                          } else
                            throw new Error("Unable to decrypt message; not an encrypted channel");
                        case "vcdiff":
                          if (!A.plugins || !A.plugins.vcdiff)
                            throw new T.default("Missing Vcdiff decoder (https://github.com/ably-forks/vcdiff-decoder)", 40019, 400);
                          if (typeof Uint8Array > "u")
                            throw new T.default("Delta decoding not supported on this browser (need ArrayBuffer & Uint8Array)", 40020, 400);
                          try {
                            var D = A.baseEncodedPreviousPayload;
                            typeof D == "string" && (D = a.default.BufferUtils.utf8Encode(D)), D = a.default.BufferUtils.toBuffer(D), t = a.default.BufferUtils.toBuffer(t), t = a.default.BufferUtils.typedArrayToBuffer(A.plugins.vcdiff.decode(t, D)), u = t;
                          } catch (E) {
                            throw new T.default("Vcdiff delta decode failed with " + E, 40018, 400);
                          }
                          continue;
                        default:
                          throw new Error("Unknown encoding");
                      }
                    }
                  } catch (E) {
                    var P = E;
                    throw new T.default("Error processing the " + e + " encoding, decoder returned ‘" + P.message + "’", P.code || 40013, 400);
                  } finally {
                    d.encoding = r <= 0 ? null : l.slice(0, r).join("/"), d.data = t;
                  }
                }
                A.baseEncodedPreviousPayload = u;
              }, o.fromResponseBody = function(d, S, A) {
                A && (d = M.decodeBody(d, A));
                for (var u = 0; u < d.length; u++) {
                  var c = d[u] = o.fromValues(d[u]);
                  try {
                    o.decode(c, S);
                  } catch (l) {
                    w.default.logAction(w.default.LOG_ERROR, "Message.fromResponseBody()", l.toString());
                  }
                }
                return d;
              }, o.fromValues = function(d) {
                return Object.assign(new o(), d);
              }, o.fromValuesArray = function(d) {
                for (var S = d.length, A = new Array(S), u = 0; u < S; u++)
                  A[u] = o.fromValues(d[u]);
                return A;
              }, o.fromEncoded = function(d, S) {
                var A = o.fromValues(d), u = I(S ?? null);
                try {
                  o.decode(A, u);
                } catch (c) {
                  w.default.logAction(w.default.LOG_ERROR, "Message.fromEncoded()", c.toString());
                }
                return A;
              }, o.fromEncodedArray = function(d, S) {
                return d.map(function(A) {
                  return o.fromEncoded(A, S);
                });
              }, o.getMessagesSize = function(d) {
                for (var S, A = 0, u = 0; u < d.length; u++)
                  S = d[u], A += S.size || (S.size = v(S));
                return A;
              }, o.serialize = M.encodeBody, o;
            }()
          );
          p.default = R;
        },
        /* 10 */
        /***/
        function(H, p, f) {
          Object.defineProperty(p, "__esModule", { value: !0 });
          var g = f(0), a = g.__importStar(f(1)), w = g.__importDefault(f(4)), T = g.__importDefault(f(9)), M = g.__importDefault(f(15)), b = {
            HEARTBEAT: 0,
            ACK: 1,
            NACK: 2,
            CONNECT: 3,
            CONNECTED: 4,
            DISCONNECT: 5,
            DISCONNECTED: 6,
            CLOSE: 7,
            CLOSED: 8,
            ERROR: 9,
            ATTACH: 10,
            ATTACHED: 11,
            DETACH: 12,
            DETACHED: 13,
            PRESENCE: 14,
            MESSAGE: 15,
            SYNC: 16,
            AUTH: 17,
            ACTIVATE: 18
          }, I = [];
          Object.keys(b).forEach(function(A) {
            I[b[A]] = A;
          });
          var v = {
            /* Channel attach state flags */
            HAS_PRESENCE: 1,
            HAS_BACKLOG: 2,
            RESUMED: 4,
            TRANSIENT: 16,
            ATTACH_RESUME: 32,
            /* Channel mode flags */
            PRESENCE: 65536,
            PUBLISH: 1 << 17,
            SUBSCRIBE: 1 << 18,
            PRESENCE_SUBSCRIBE: 1 << 19
          }, R = Object.keys(v);
          v.MODE_ALL = v.PRESENCE | v.PUBLISH | v.SUBSCRIBE | v.PRESENCE_SUBSCRIBE;
          function o(A) {
            var u = [];
            if (A)
              for (var c = 0; c < A.length; c++)
                u.push(A[c].toString());
            return "[ " + u.join(", ") + " ]";
          }
          var d = "id channel channelSerial connectionId count msgSerial timestamp".split(" "), S = (
            /** @class */
            function() {
              function A() {
                var u = this;
                this.hasFlag = function(c) {
                  return (u.flags & v[c]) > 0;
                };
              }
              return A.prototype.setFlag = function(u) {
                return this.flags = this.flags | v[u];
              }, A.prototype.getMode = function() {
                return this.flags && this.flags & v.MODE_ALL;
              }, A.prototype.encodeModesToFlags = function(u) {
                var c = this;
                u.forEach(function(l) {
                  return c.setFlag(l);
                });
              }, A.prototype.decodeModesFromFlags = function() {
                var u = this, c = [];
                return A.channelModes.forEach(function(l) {
                  u.hasFlag(l) && c.push(l);
                }), c.length > 0 ? c : void 0;
              }, A.fromValues = function(u) {
                return Object.assign(new A(), u);
              }, A.Action = b, A.channelModes = ["PRESENCE", "PUBLISH", "SUBSCRIBE", "PRESENCE_SUBSCRIBE"], A.ActionName = I, A.serialize = a.encodeBody, A.deserialize = function(u, c) {
                var l = a.decodeBody(u, c);
                return A.fromDeserialized(l);
              }, A.fromDeserialized = function(u) {
                var c = u.error;
                c && (u.error = w.default.fromValues(c));
                var l = u.messages;
                if (l)
                  for (var r = 0; r < l.length; r++)
                    l[r] = T.default.fromValues(l[r]);
                var n = u.presence;
                if (n)
                  for (var r = 0; r < n.length; r++)
                    n[r] = M.default.fromValues(n[r], !0);
                return Object.assign(new A(), u);
              }, A.stringify = function(u) {
                var c = "[ProtocolMessage";
                u.action !== void 0 && (c += "; action=" + A.ActionName[u.action] || !1);
                for (var l, r = 0; r < d.length; r++)
                  l = d[r], u[l] !== void 0 && (c += "; " + l + "=" + u[l]);
                if (u.messages && (c += "; messages=" + o(T.default.fromValuesArray(u.messages))), u.presence && (c += "; presence=" + o(M.default.fromValuesArray(u.presence))), u.error && (c += "; error=" + w.default.fromValues(u.error).toString()), u.auth && u.auth.accessToken && (c += "; token=" + u.auth.accessToken), u.flags && (c += "; flags=" + R.filter(u.hasFlag).join(",")), u.params) {
                  var n = "";
                  a.forInOwnNonNullProperties(u.params, function(t) {
                    n.length > 0 && (n += "; "), n += t + "=" + u.params[t];
                  }), n.length > 0 && (c += "; params=[" + n + "]");
                }
                return c += "]", c;
              }, A;
            }()
          );
          p.default = S;
        },
        /* 11 */
        /***/
        function(H, p, f) {
          (function(g, a) {
            H.exports = a(f(6));
          })(this, function(g) {
            return function() {
              var a = g, w = a.lib, T = w.WordArray, M = a.enc;
              M.Base64 = {
                /**
                 * Converts a word array to a Base64 string.
                 *
                 * @param {WordArray} wordArray The word array.
                 *
                 * @return {string} The Base64 string.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
                 */
                stringify: function(I) {
                  var v = I.words, R = I.sigBytes, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                  I.clamp();
                  for (var d = [], S = 0; S < R; S += 3)
                    for (var A = v[S >>> 2] >>> 24 - S % 4 * 8 & 255, u = v[S + 1 >>> 2] >>> 24 - (S + 1) % 4 * 8 & 255, c = v[S + 2 >>> 2] >>> 24 - (S + 2) % 4 * 8 & 255, l = A << 16 | u << 8 | c, r = 0; r < 4 && S + r * 0.75 < R; r++)
                      d.push(o.charAt(l >>> 6 * (3 - r) & 63));
                  var n = o.charAt(64);
                  if (n)
                    for (; d.length % 4; )
                      d.push(n);
                  return d.join("");
                },
                /**
                 * Converts a Base64 string to a word array.
                 *
                 * @param {string} base64Str The Base64 string.
                 *
                 * @return {WordArray} The word array.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
                 */
                parse: function(I) {
                  var v = I.length, R = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", o = this._reverseMap;
                  if (!o) {
                    o = this._reverseMap = [];
                    for (var d = 0; d < R.length; d++)
                      o[R.charCodeAt(d)] = d;
                  }
                  var S = R.charAt(64);
                  if (S) {
                    var A = I.indexOf(S);
                    A !== -1 && (v = A);
                  }
                  return b(I, v, o);
                }
              };
              function b(I, v, R) {
                for (var o = [], d = 0, S = 0; S < v; S++)
                  if (S % 4) {
                    var A = R[I.charCodeAt(S - 1)] << S % 4 * 2, u = R[I.charCodeAt(S)] >>> 6 - S % 4 * 2, c = A | u;
                    o[d >>> 2] |= c << 24 - d % 4 * 8, d++;
                  }
                return T.create(o, d);
              }
            }(), g.enc.Base64;
          });
        },
        /* 12 */
        /***/
        function(H, p, f) {
          Object.defineProperty(p, "__esModule", { value: !0 });
          var g = f(0), a = g.__importStar(f(1)), w = g.__importDefault(f(10)), T = g.__importDefault(f(26)), M = g.__importDefault(f(2)), b = g.__importDefault(f(8)), I = g.__importDefault(f(20)), v = g.__importDefault(f(17)), R = g.__importDefault(f(4)), o = g.__importDefault(f(21)), d = g.__importDefault(f(3));
          function S(c) {
            var l = [80015, 80017, 80030];
            return c.code ? v.default.isTokenErr(c) ? !1 : a.arrIn(l, c.code) ? !0 : c.code >= 4e4 && c.code < 5e4 : !1;
          }
          function A(c) {
            return S(c) ? [w.default.fromValues({ action: w.default.Action.ERROR, error: c })] : [w.default.fromValues({ action: w.default.Action.DISCONNECTED, error: c })];
          }
          var u = (
            /** @class */
            function(c) {
              g.__extends(l, c);
              function l(r, n, t) {
                var e = c.call(
                  this,
                  r,
                  n,
                  t,
                  /* binary not supported for comet so force JSON protocol */
                  !0
                ) || this;
                return e.onAuthUpdated = function(s) {
                  e.authParams = { access_token: s.token };
                }, e.stream = "stream" in t ? t.stream : !0, e.sendRequest = null, e.recvRequest = null, e.pendingCallback = null, e.pendingItems = null, e;
              }
              return l.prototype.connect = function() {
                var r = this;
                M.default.logAction(M.default.LOG_MINOR, "CometTransport.connect()", "starting"), T.default.prototype.connect.call(this);
                var n = this.params, t = n.options, e = b.default.getHost(t, n.host), s = b.default.getPort(t), i = t.tls ? "https://" : "http://";
                this.baseUri = i + e + ":" + s + "/comet/";
                var h = this.baseUri + "connect";
                M.default.logAction(M.default.LOG_MINOR, "CometTransport.connect()", "uri: " + h), this.auth.getAuthParams(function(D, P) {
                  if (D) {
                    r.disconnect(D);
                    return;
                  }
                  if (!r.isDisposed) {
                    r.authParams = P;
                    var E = r.params.getConnectParams(P);
                    "stream" in E && (r.stream = E.stream), M.default.logAction(M.default.LOG_MINOR, "CometTransport.connect()", "connectParams:" + a.toQueryString(E));
                    var O = !1, y = r.recvRequest = r.createRequest(h, null, E, null, r.stream ? o.default.REQ_RECV_STREAM : o.default.REQ_RECV);
                    y.on("data", function(C) {
                      r.recvRequest && (O || (O = !0, r.emit("preconnect")), r.onData(C));
                    }), y.on("complete", function(C) {
                      if (r.recvRequest || (C = C || new R.default("Request cancelled", 80003, 400)), r.recvRequest = null, !O && !C && (O = !0, r.emit("preconnect")), r.onActivity(), C) {
                        C.code ? r.onData(A(C)) : r.disconnect(C);
                        return;
                      }
                      d.default.Config.nextTick(function() {
                        r.recv();
                      });
                    }), y.exec();
                  }
                });
              }, l.prototype.requestClose = function() {
                M.default.logAction(M.default.LOG_MINOR, "CometTransport.requestClose()"), this._requestCloseOrDisconnect(!0);
              }, l.prototype.requestDisconnect = function() {
                M.default.logAction(M.default.LOG_MINOR, "CometTransport.requestDisconnect()"), this._requestCloseOrDisconnect(!1);
              }, l.prototype._requestCloseOrDisconnect = function(r) {
                var n = this, t = r ? this.closeUri : this.disconnectUri;
                if (t) {
                  var e = this.createRequest(t, null, this.authParams, null, o.default.REQ_SEND);
                  e.on("complete", function(s) {
                    s && (M.default.logAction(M.default.LOG_ERROR, "CometTransport.request" + (r ? "Close()" : "Disconnect()"), "request returned err = " + a.inspectError(s)), n.finish("disconnected", s));
                  }), e.exec();
                }
              }, l.prototype.dispose = function() {
                var r = this;
                M.default.logAction(M.default.LOG_MINOR, "CometTransport.dispose()", ""), this.isDisposed || (this.isDisposed = !0, this.recvRequest && (M.default.logAction(M.default.LOG_MINOR, "CometTransport.dispose()", "aborting recv request"), this.recvRequest.abort(), this.recvRequest = null), this.finish("disconnected", I.default.disconnected()), d.default.Config.nextTick(function() {
                  r.emit("disposed");
                }));
              }, l.prototype.onConnect = function(r) {
                var n;
                if (!this.isDisposed) {
                  var t = (n = r.connectionDetails) === null || n === void 0 ? void 0 : n.connectionKey;
                  T.default.prototype.onConnect.call(this, r);
                  var e = this.baseUri + t;
                  M.default.logAction(M.default.LOG_MICRO, "CometTransport.onConnect()", "baseUri = " + e), this.sendUri = e + "/send", this.recvUri = e + "/recv", this.closeUri = e + "/close", this.disconnectUri = e + "/disconnect";
                }
              }, l.prototype.send = function(r) {
                if (this.sendRequest) {
                  this.pendingItems = this.pendingItems || [], this.pendingItems.push(r);
                  return;
                }
                var n = this.pendingItems || [];
                n.push(r), this.pendingItems = null, this.sendItems(n);
              }, l.prototype.sendAnyPending = function() {
                var r = this.pendingItems;
                r && (this.pendingItems = null, this.sendItems(r));
              }, l.prototype.sendItems = function(r) {
                var n = this, t = this.sendRequest = this.createRequest(this.sendUri, null, this.authParams, this.encodeRequest(r), o.default.REQ_SEND);
                t.on("complete", function(e, s) {
                  if (e && M.default.logAction(M.default.LOG_ERROR, "CometTransport.sendItems()", "on complete: err = " + a.inspectError(e)), n.sendRequest = null, e) {
                    e.code ? n.onData(A(e)) : n.disconnect(e);
                    return;
                  }
                  s && n.onData(s), n.pendingItems && d.default.Config.nextTick(function() {
                    n.sendRequest || n.sendAnyPending();
                  });
                }), t.exec();
              }, l.prototype.recv = function() {
                var r = this;
                if (!this.recvRequest && this.isConnected) {
                  var n = this.recvRequest = this.createRequest(this.recvUri, null, this.authParams, null, this.stream ? o.default.REQ_RECV_STREAM : o.default.REQ_RECV_POLL);
                  n.on("data", function(t) {
                    r.onData(t);
                  }), n.on("complete", function(t) {
                    if (r.recvRequest = null, r.onActivity(), t) {
                      t.code ? r.onData(A(t)) : r.disconnect(t);
                      return;
                    }
                    d.default.Config.nextTick(function() {
                      r.recv();
                    });
                  }), n.exec();
                }
              }, l.prototype.onData = function(r) {
                try {
                  var n = this.decodeResponse(r);
                  if (n && n.length)
                    for (var t = 0; t < n.length; t++)
                      this.onProtocolMessage(w.default.fromDeserialized(n[t]));
                } catch (e) {
                  M.default.logAction(M.default.LOG_ERROR, "CometTransport.onData()", "Unexpected exception handing channel event: " + e.stack);
                }
              }, l.prototype.encodeRequest = function(r) {
                return JSON.stringify(r);
              }, l.prototype.decodeResponse = function(r) {
                return typeof r == "string" ? JSON.parse(r) : r;
              }, l;
            }(T.default)
          );
          p.default = u;
        },
        /* 13 */
        /***/
        function(H, p) {
          var f;
          f = function() {
            return this;
          }();
          try {
            f = f || new Function("return this")();
          } catch {
            typeof window == "object" && (f = window);
          }
          H.exports = f;
        },
        /* 14 */
        /***/
        function(H, p, f) {
          Object.defineProperty(p, "__esModule", { value: !0 });
          var g = f(0), a = g.__importDefault(f(3)), w = g.__importStar(f(1)), T = g.__importDefault(f(2)), M = g.__importDefault(f(17)), b = g.__importDefault(f(18)), I = f(4);
          function v(u, c, l, r, n) {
            u.http.supportsAuthHeaders ? u.auth.getAuthHeaders(function(t, e) {
              t ? r(t) : n(w.mixin(e, c), l);
            }) : u.auth.getAuthParams(function(t, e) {
              t ? r(t) : n(c, w.mixin(e, l));
            });
          }
          function R(u, c) {
            return function(l, r, n, t, e) {
              if (l && !r) {
                u(l);
                return;
              }
              if (!t)
                try {
                  r = w.decodeBody(r, c);
                } catch (E) {
                  w.isErrorInfoOrPartialErrorInfo(E) ? u(E) : u(new I.PartialErrorInfo(w.inspectError(E), null));
                  return;
                }
              if (!r) {
                u(new I.PartialErrorInfo("unenvelope(): Response body is missing", null));
                return;
              }
              var s = r, i = s.statusCode, h = s.response, D = s.headers;
              if (i === void 0) {
                u(l, r, n, !0, e);
                return;
              }
              if (i < 200 || i >= 300) {
                var P = h && h.error || l;
                P || (P = new Error("Error in unenveloping " + r), P.statusCode = i), u(P, h, D, !0, i);
                return;
              }
              u(l, h, D, !0, i);
            };
          }
          function o(u) {
            var c = [];
            if (u)
              for (var l in u)
                c.push(l + "=" + u[l]);
            return c.join("&");
          }
          function d(u, c) {
            return u + (c ? "?" : "") + o(c);
          }
          function S(u, c, l, r) {
            return function(n, t, e, s, i) {
              n ? T.default.logAction(T.default.LOG_MICRO, "Resource." + c + "()", "Received Error; " + d(l, r) + "; Error: " + w.inspectError(n)) : T.default.logAction(T.default.LOG_MICRO, "Resource." + c + "()", "Received; " + d(l, r) + "; Headers: " + o(e) + "; StatusCode: " + i + "; Body: " + (a.default.BufferUtils.isBuffer(t) ? t.toString() : t)), u && u(n, t, e, s, i);
            };
          }
          var A = (
            /** @class */
            function() {
              function u() {
              }
              return u.get = function(c, l, r, n, t, e) {
                u.do(b.default.Get, c, l, null, r, n, t, e);
              }, u.delete = function(c, l, r, n, t, e) {
                u.do(b.default.Delete, c, l, null, r, n, t, e);
              }, u.post = function(c, l, r, n, t, e, s) {
                u.do(b.default.Post, c, l, r, n, t, e, s);
              }, u.patch = function(c, l, r, n, t, e, s) {
                u.do(b.default.Patch, c, l, r, n, t, e, s);
              }, u.put = function(c, l, r, n, t, e, s) {
                u.do(b.default.Put, c, l, r, n, t, e, s);
              }, u.do = function(c, l, r, n, t, e, s, i) {
                T.default.shouldLog(T.default.LOG_MICRO) && (i = S(i, c, r, e)), s && (i = i && R(i, s), (e = e || {}).envelope = s);
                function h(D, P) {
                  var E;
                  if (T.default.shouldLog(T.default.LOG_MICRO) && T.default.logAction(T.default.LOG_MICRO, "Resource." + c + "()", "Sending; " + d(r, P)), T.default.shouldLog(T.default.LOG_MICRO)) {
                    var O = n;
                    if (((E = D["content-type"]) === null || E === void 0 ? void 0 : E.indexOf("msgpack")) > 0)
                      try {
                        O = a.default.Config.msgpack.decode(n);
                      } catch (y) {
                        T.default.logAction(T.default.LOG_MICRO, "Resource." + c + "()", "Sending MsgPack Decoding Error: " + w.inspectError(y));
                      }
                    T.default.logAction(T.default.LOG_MICRO, "Resource." + c + "()", "Sending; " + d(r, P) + "; Body: " + O);
                  }
                  l.http.do(c, l, r, D, n, P, function(y, C, N, B, j) {
                    if (y && M.default.isTokenErr(y)) {
                      l.auth.authorize(null, null, function(z) {
                        if (z) {
                          i(z);
                          return;
                        }
                        v(l, N, P, i, h);
                      });
                      return;
                    }
                    i(y, C, N, B, j);
                  });
                }
                v(l, t, e, i, h);
              }, u;
            }()
          );
          p.default = A;
        },
        /* 15 */
        /***/
        function(H, p, f) {
          Object.defineProperty(p, "__esModule", { value: !0 });
          var g = f(0), a = g.__importDefault(f(2)), w = g.__importDefault(f(3)), T = g.__importDefault(f(9)), M = g.__importStar(f(1));
          function b(v) {
            return I.Actions.indexOf(v);
          }
          var I = (
            /** @class */
            function() {
              function v() {
              }
              return v.prototype.isSynthesized = function() {
                return !this.id || !this.connectionId ? !0 : this.id.substring(this.connectionId.length, 0) !== this.connectionId;
              }, v.prototype.parseId = function() {
                if (!this.id)
                  throw new Error("parseId(): Presence message does not contain an id");
                var R = this.id.split(":");
                return {
                  connectionId: R[0],
                  msgSerial: parseInt(R[1], 10),
                  index: parseInt(R[2], 10)
                };
              }, v.prototype.toJSON = function() {
                var R = this.data, o = this.encoding;
                return R && w.default.BufferUtils.isBuffer(R) && (arguments.length > 0 ? (o = o ? o + "/base64" : "base64", R = w.default.BufferUtils.base64Encode(R)) : R = w.default.BufferUtils.toBuffer(R)), {
                  id: this.id,
                  clientId: this.clientId,
                  /* Convert presence action back to an int for sending to Ably */
                  action: b(this.action),
                  data: R,
                  encoding: o,
                  extras: this.extras
                };
              }, v.prototype.toString = function() {
                var R = "[PresenceMessage";
                return R += "; action=" + this.action, this.id && (R += "; id=" + this.id), this.timestamp && (R += "; timestamp=" + this.timestamp), this.clientId && (R += "; clientId=" + this.clientId), this.connectionId && (R += "; connectionId=" + this.connectionId), this.encoding && (R += "; encoding=" + this.encoding), this.data && (typeof this.data == "string" ? R += "; data=" + this.data : w.default.BufferUtils.isBuffer(this.data) ? R += "; data (buffer)=" + w.default.BufferUtils.base64Encode(this.data) : R += "; data (json)=" + JSON.stringify(this.data)), this.extras && (R += "; extras=" + JSON.stringify(this.extras)), R += "]", R;
              }, v.fromResponseBody = function(R, o, d) {
                var S = [];
                d && (R = M.decodeBody(R, d));
                for (var A = 0; A < R.length; A++) {
                  var u = S[A] = v.fromValues(R[A], !0);
                  try {
                    v.decode(u, o);
                  } catch (c) {
                    a.default.logAction(a.default.LOG_ERROR, "PresenceMessage.fromResponseBody()", c.toString());
                  }
                }
                return S;
              }, v.fromValues = function(R, o) {
                return o && (R.action = v.Actions[R.action]), Object.assign(new v(), R);
              }, v.fromValuesArray = function(R) {
                for (var o = R.length, d = new Array(o), S = 0; S < o; S++)
                  d[S] = v.fromValues(R[S]);
                return d;
              }, v.fromEncoded = function(R, o) {
                var d = v.fromValues(R, !0);
                try {
                  v.decode(d, o ?? {});
                } catch (S) {
                  a.default.logAction(a.default.LOG_ERROR, "PresenceMessage.fromEncoded()", S.toString());
                }
                return d;
              }, v.fromEncodedArray = function(R, o) {
                return R.map(function(d) {
                  return v.fromEncoded(d, o);
                });
              }, v.fromData = function(R) {
                return R instanceof v ? R : v.fromValues({
                  data: R
                });
              }, v.Actions = ["absent", "present", "enter", "leave", "update"], v.encode = T.default.encode, v.decode = T.default.decode, v.getMessagesSize = T.default.getMessagesSize, v;
            }()
          );
          p.default = I;
        },
        /* 16 */
        /***/
        function(H, p, f) {
          (function(g) {
            Object.defineProperty(p, "__esModule", { value: !0 });
            var a = f(0), w = a.__importStar(f(1)), T = a.__importDefault(f(7)), M = a.__importStar(f(4)), b = a.__importDefault(f(2)), I = a.__importDefault(f(8)), v = a.__importDefault(f(21)), R = a.__importDefault(f(3));
            function o(i, h) {
              return w.arrIn(w.allToLowerCase(w.keysArray(h)), "x-ably-errorcode");
            }
            function d(i, h) {
              if (o(i, h))
                return i.error && M.default.fromValues(i.error);
            }
            var S = function() {
            }, A = 0, u = {}, c = typeof g < "u" && g.XDomainRequest;
            function l() {
              var i = navigator.userAgent.toString().match(/MSIE\s([\d.]+)/);
              return i && Number(i[1]);
            }
            function r() {
              var i;
              return c && (i = l()) && i === 10;
            }
            function n(i, h) {
              return i.getResponseHeader && i.getResponseHeader(h);
            }
            function t(i) {
              return i.getResponseHeader && (i.getResponseHeader("transfer-encoding") || !i.getResponseHeader("content-length"));
            }
            function e(i) {
              for (var h = w.trim(i.getAllResponseHeaders()).split(`\r
`), D = {}, P = 0; P < h.length; P++) {
                var E = h[P].split(":").map(w.trim);
                D[E[0].toLowerCase()] = E[1];
              }
              return D;
            }
            var s = (
              /** @class */
              function(i) {
                a.__extends(h, i);
                function h(D, P, E, O, y, C, N) {
                  var B = i.call(this) || this;
                  return E = E || {}, E.rnd = w.cheapRandStr(), r() && !E.envelope && (E.envelope = "json"), B.uri = D + w.toQueryString(E), B.headers = P || {}, B.body = O, B.method = N ? N.toUpperCase() : w.isEmptyArg(O) ? "GET" : "POST", B.requestMode = y, B.timeouts = C, B.timedOut = !1, B.requestComplete = !1, B.id = String(++A), u[B.id] = B, B;
                }
                return h.createRequest = function(D, P, E, O, y, C, N) {
                  var B = C || I.default.TIMEOUTS;
                  return new h(D, P, w.copy(E), O, y, B, N);
                }, h.prototype.complete = function(D, P, E, O, y) {
                  this.requestComplete || (this.requestComplete = !0, !D && P && this.emit("data", P), this.emit("complete", D, P, E, O, y), this.dispose());
                }, h.prototype.abort = function() {
                  this.dispose();
                }, h.prototype.exec = function() {
                  var D = this, P = this.headers, E = this.requestMode == v.default.REQ_SEND ? this.timeouts.httpRequestTimeout : this.timeouts.recvTimeout, O = this.timer = setTimeout(function() {
                    D.timedOut = !0, C.abort();
                  }, E), y = this.method, C = this.xhr = new XMLHttpRequest(), N = P.accept, B = this.body, j = "text";
                  if (N ? N.indexOf("application/x-msgpack") === 0 && (j = "arraybuffer") : P.accept = "application/json", B) {
                    var z = P["content-type"] || (P["content-type"] = "application/json");
                    z.indexOf("application/json") > -1 && typeof B != "string" && (B = JSON.stringify(B));
                  }
                  C.open(y, this.uri, !0), C.responseType = j, "authorization" in P && (C.withCredentials = !0);
                  for (var _ in P)
                    C.setRequestHeader(_, P[_]);
                  var F = function(X, nt, it, ot) {
                    var rt, ft = nt + " (event type: " + X.type + ")";
                    !((rt = D == null ? void 0 : D.xhr) === null || rt === void 0) && rt.statusText && (ft += ", current statusText is " + D.xhr.statusText), b.default.logAction(b.default.LOG_ERROR, "Request.on" + X.type + "()", ft), D.complete(new M.PartialErrorInfo(ft, it, ot));
                  };
                  C.onerror = function(X) {
                    F(X, "XHR error occurred", null, 400);
                  }, C.onabort = function(X) {
                    D.timedOut ? F(X, "Request aborted due to request timeout expiring", null, 408) : F(X, "Request cancelled", null, 400);
                  }, C.ontimeout = function(X) {
                    F(X, "Request timed out", null, 408);
                  };
                  var m, x, L, U = 0, W = !1, Q = function() {
                    if (clearTimeout(O), L = x < 400, x == 204) {
                      D.complete(null, null, null, null, x);
                      return;
                    }
                    m = D.requestMode == v.default.REQ_RECV_STREAM && L && t(C);
                  }, J = function() {
                    var X;
                    try {
                      var nt = n(C, "content-type"), it = nt ? nt.indexOf("application/json") >= 0 : C.responseType == "text";
                      if (it) {
                        var ot = C.responseType === "arraybuffer" ? R.default.BufferUtils.utf8Decode(C.response) : String(C.responseText);
                        ot.length ? X = JSON.parse(ot) : X = ot, W = !0;
                      } else
                        X = C.response;
                      X.response !== void 0 ? (x = X.statusCode, L = x < 400, P = X.headers, X = X.response) : P = e(C);
                    } catch (ft) {
                      D.complete(new M.PartialErrorInfo("Malformed response body from server: " + ft.message, null, 400));
                      return;
                    }
                    if (L || w.isArray(X)) {
                      D.complete(null, X, P, W, x);
                      return;
                    }
                    var rt = d(X, P);
                    rt || (rt = new M.PartialErrorInfo("Error response received from server: " + x + " body was: " + R.default.Config.inspect(X), null, x)), D.complete(rt, X, P, W, x);
                  };
                  function $() {
                    for (var X = C.responseText, nt = X.length - 1, it, ot; U < nt && (it = X.indexOf(`
`, U)) > -1; )
                      ot = X.slice(U, it), U = it + 1, Z(ot);
                  }
                  var Z = function(X) {
                    try {
                      X = JSON.parse(X);
                    } catch (nt) {
                      D.complete(new M.PartialErrorInfo("Malformed response body from server: " + nt.message, null, 400));
                      return;
                    }
                    D.emit("data", X);
                  }, et = function() {
                    $(), D.streamComplete = !0, R.default.Config.nextTick(function() {
                      D.complete();
                    });
                  };
                  C.onreadystatechange = function() {
                    var X = C.readyState;
                    X < 3 || C.status !== 0 && (x === void 0 && (x = C.status, x === 1223 && (x = 204), Q()), X == 3 && m ? $() : X == 4 && (m ? et() : J()));
                  }, C.send(B);
                }, h.prototype.dispose = function() {
                  var D = this.xhr;
                  if (D) {
                    D.onreadystatechange = D.onerror = D.onabort = D.ontimeout = S, this.xhr = null;
                    var P = this.timer;
                    P && (clearTimeout(P), this.timer = null), this.requestComplete || D.abort();
                  }
                  delete u[this.id];
                }, h;
              }(T.default)
            );
            p.default = s;
          }).call(this, f(13));
        },
        /* 17 */
        /***/
        function(H, p, f) {
          Object.defineProperty(p, "__esModule", { value: !0 });
          var g = f(0), a = g.__importDefault(f(2)), w = g.__importStar(f(1)), T = g.__importDefault(f(23)), M = g.__importDefault(f(4)), b = g.__importDefault(f(45)), I = f(11), v = g.__importDefault(f(18)), R = g.__importDefault(f(25)), o = g.__importDefault(f(3)), d = g.__importDefault(f(14)), S = Math.pow(2, 17);
          function A() {
          }
          function u() {
            return ("000000" + Math.floor(Math.random() * 1e16)).slice(-16);
          }
          function c(E) {
            return !!E.connection;
          }
          function l(E) {
            return w.isErrorInfoOrPartialErrorInfo(E) ? (E.code || (E.statusCode === 403 ? E.code = 40300 : (E.code = 40170, E.statusCode = 401)), E) : new M.default(w.inspectError(E), E.code || 40170, E.statusCode || 401);
          }
          var r = function(E, O) {
            if (o.default.Config.createHmac) {
              var y = o.default.Config.createHmac("SHA256", O);
              return y.update(E), y.digest("base64");
            }
            return (0, I.stringify)((0, b.default)(E, O));
          };
          function n(E) {
            if (!E)
              return "";
            typeof E == "string" && (E = JSON.parse(E));
            var O = /* @__PURE__ */ Object.create(null), y = w.keysArray(E, !0);
            if (!y)
              return "";
            y.sort();
            for (var C = 0; C < y.length; C++)
              O[y[C]] = E[y[C]].sort();
            return JSON.stringify(O);
          }
          function t(E) {
            if (E.authCallback)
              a.default.logAction(a.default.LOG_MINOR, "Auth()", "using token auth with authCallback");
            else if (E.authUrl)
              a.default.logAction(a.default.LOG_MINOR, "Auth()", "using token auth with authUrl");
            else if (E.key)
              a.default.logAction(a.default.LOG_MINOR, "Auth()", "using token auth with client-side signing");
            else if (E.tokenDetails)
              a.default.logAction(a.default.LOG_MINOR, "Auth()", "using token auth with supplied token only");
            else {
              var O = "authOptions must include valid authentication parameters";
              throw a.default.logAction(a.default.LOG_ERROR, "Auth()", O), new Error(O);
            }
          }
          function e(E) {
            return "useTokenAuth" in E && !E.useTokenAuth;
          }
          function s(E) {
            return E.useTokenAuth || !e(E) && (E.authCallback || E.authUrl || E.token || E.tokenDetails);
          }
          function i(E) {
            return !E.key && !E.authCallback && !E.authUrl;
          }
          var h = 0;
          function D() {
            return h++;
          }
          var P = (
            /** @class */
            function() {
              function E(O, y) {
                if (this.authOptions = {}, this.client = O, this.tokenParams = y.defaultTokenParams || {}, this.currentTokenRequestId = null, this.waitingForTokenRequest = null, s(y)) {
                  if (y.key && !r) {
                    var C = "client-side token request signing not supported";
                    throw a.default.logAction(a.default.LOG_ERROR, "Auth()", C), new Error(C);
                  }
                  i(y) && a.default.logAction(a.default.LOG_ERROR, "Auth()", "Warning: library initialized with a token literal without any way to renew the token when it expires (no authUrl, authCallback, or key). See https://help.ably.io/error/40171 for help"), this._saveTokenOptions(y.defaultTokenParams, y), t(this.authOptions);
                } else {
                  if (!y.key) {
                    var C = "No authentication options provided; need one of: key, authUrl, or authCallback (or for testing only, token or tokenDetails)";
                    throw a.default.logAction(a.default.LOG_ERROR, "Auth()", C), new M.default(C, 40160, 401);
                  }
                  a.default.logAction(a.default.LOG_MINOR, "Auth()", "anonymous, using basic auth"), this._saveBasicOptions(y);
                }
              }
              return E.prototype.authorize = function(O, y, C) {
                var N = this, B;
                if (typeof O == "function" && !C ? (C = O, B = O = null) : typeof y == "function" && !C ? (C = y, B = null) : B = y, !C && this.client.options.promises)
                  return w.promisify(this, "authorize", arguments);
                if (B && B.key && this.authOptions.key !== B.key)
                  throw new M.default("Unable to update auth options with incompatible key", 40102, 401);
                B && "force" in B && (a.default.logAction(a.default.LOG_ERROR, "Auth.authorize", "Deprecation warning: specifying {force: true} in authOptions is no longer necessary, authorize() now always gets a new token. Please remove this, as in version 1.0 and later, having a non-null authOptions will overwrite stored library authOptions, which may not be what you want"), w.isOnlyPropIn(B, "force") && (B = null)), this._forceNewToken(O, B, function(j, z) {
                  if (j) {
                    N.client.connection && j.statusCode === R.default.Forbidden && N.client.connection.connectionManager.actOnErrorFromAuthorize(j), C == null || C(j);
                    return;
                  }
                  c(N.client) ? N.client.connection.connectionManager.onAuthUpdated(z, C || A) : C == null || C(null, z);
                });
              }, E.prototype.authorise = function(O, y, C) {
                a.default.deprecated("Auth.authorise", "Auth.authorize"), this.authorize(O, y, C);
              }, E.prototype._forceNewToken = function(O, y, C) {
                var N = this;
                this.tokenDetails = null, this._saveTokenOptions(O, y), t(this.authOptions), this._ensureValidAuthCredentials(!0, function(B, j) {
                  delete N.tokenParams.timestamp, delete N.authOptions.queryTime, C(B, j);
                });
              }, E.prototype.requestToken = function(O, y, C) {
                var N = this;
                if (typeof O == "function" && !C ? (C = O, y = O = null) : typeof y == "function" && !C && (C = y, y = null), !C && this.client.options.promises)
                  return w.promisify(this, "requestToken", arguments);
                y = y || this.authOptions, O = O || w.copy(this.tokenParams);
                var B = C || A, j, z = this.client;
                if (y.authCallback)
                  a.default.logAction(a.default.LOG_MINOR, "Auth.requestToken()", "using token auth with authCallback"), j = y.authCallback;
                else if (y.authUrl)
                  a.default.logAction(a.default.LOG_MINOR, "Auth.requestToken()", "using token auth with authUrl"), j = function(U, W) {
                    var Q = w.mixin({ accept: "application/json, text/plain" }, y.authHeaders), J = y.authMethod && y.authMethod.toLowerCase() === "post", $, Z = y.authUrl.indexOf("?");
                    Z > -1 && ($ = w.parseQueryString(y.authUrl.slice(Z)), y.authUrl = y.authUrl.slice(0, Z), J || (y.authParams = w.mixin($, y.authParams)));
                    var et = w.mixin({}, y.authParams || {}, U), X = function(ot, rt, ft, mt) {
                      var ut;
                      if (ot ? a.default.logAction(a.default.LOG_MICRO, "Auth.requestToken().tokenRequestCallback", "Received Error: " + w.inspectError(ot)) : (ut = ft["content-type"], a.default.logAction(a.default.LOG_MICRO, "Auth.requestToken().tokenRequestCallback", "Received; content-type: " + ut + "; body: " + w.inspectBody(rt))), ot || mt)
                        return W(ot, rt);
                      if (o.default.BufferUtils.isBuffer(rt) && (rt = rt.toString()), !ut) {
                        W(new M.default("authUrl response is missing a content-type header", 40170, 401));
                        return;
                      }
                      var yt = ut.indexOf("application/json") > -1, Ot = ut.indexOf("text/plain") > -1 || ut.indexOf("application/jwt") > -1;
                      if (!yt && !Ot) {
                        W(new M.default("authUrl responded with unacceptable content-type " + ut + ", should be either text/plain, application/jwt or application/json", 40170, 401));
                        return;
                      }
                      if (yt) {
                        if (rt.length > S) {
                          W(new M.default("authUrl response exceeded max permitted length", 40170, 401));
                          return;
                        }
                        try {
                          rt = JSON.parse(rt);
                        } catch (Rt) {
                          W(new M.default("Unexpected error processing authURL response; err = " + Rt.message, 40170, 401));
                          return;
                        }
                      }
                      W(null, rt, ut);
                    };
                    if (a.default.logAction(a.default.LOG_MICRO, "Auth.requestToken().tokenRequestCallback", "Requesting token from " + y.authUrl + "; Params: " + JSON.stringify(et) + "; method: " + (J ? "POST" : "GET")), J) {
                      var nt = Q || {};
                      nt["content-type"] = "application/x-www-form-urlencoded";
                      var it = w.toQueryString(et).slice(1);
                      N.client.http.doUri(v.default.Post, z, y.authUrl, nt, it, $, X);
                    } else
                      N.client.http.doUri(v.default.Get, z, y.authUrl, Q || {}, null, et, X);
                  };
                else if (y.key)
                  a.default.logAction(a.default.LOG_MINOR, "Auth.requestToken()", "using token auth with client-side signing"), j = function(U, W) {
                    N.createTokenRequest(U, y, W);
                  };
                else {
                  var _ = "Need a new token, but authOptions does not include any way to request one (no authUrl, authCallback, or key)";
                  a.default.logAction(a.default.LOG_ERROR, "Auth()", "library initialized with a token literal without any way to renew the token when it expires (no authUrl, authCallback, or key). See https://help.ably.io/error/40171 for help"), B(new M.default(_, 40171, 403));
                  return;
                }
                "capability" in O && (O.capability = n(O.capability));
                var F = function(U, W) {
                  var Q = U.keyName, J = "/keys/" + Q + "/requestToken", $ = function(et) {
                    return z.baseUri(et) + J;
                  }, Z = w.defaultPostHeaders(N.client.options);
                  y.requestHeaders && w.mixin(Z, y.requestHeaders), a.default.logAction(a.default.LOG_MICRO, "Auth.requestToken().requestToken", "Sending POST to " + J + "; Token params: " + JSON.stringify(U)), N.client.http.do(v.default.Post, z, $, Z, JSON.stringify(U), null, W);
                }, m = !1, x = this.client.options.timeouts.realtimeRequestTimeout, L = setTimeout(function() {
                  m = !0;
                  var U = "Token request callback timed out after " + x / 1e3 + " seconds";
                  a.default.logAction(a.default.LOG_ERROR, "Auth.requestToken()", U), B(new M.default(U, 40170, 401));
                }, x);
                j(O, function(U, W, Q) {
                  if (!m) {
                    if (clearTimeout(L), U) {
                      a.default.logAction(a.default.LOG_ERROR, "Auth.requestToken()", "token request signing call returned error; err = " + w.inspectError(U)), B(l(U));
                      return;
                    }
                    if (typeof W == "string") {
                      W.length === 0 ? B(new M.default("Token string is empty", 40170, 401)) : W.length > S ? B(new M.default("Token string exceeded max permitted length (was " + W.length + " bytes)", 40170, 401)) : W === "undefined" || W === "null" ? B(new M.default("Token string was literal null/undefined", 40170, 401)) : W[0] === "{" && !(Q && Q.indexOf("application/jwt") > -1) ? B(new M.default("Token was double-encoded; make sure you're not JSON-encoding an already encoded token request or details", 40170, 401)) : B(null, { token: W });
                      return;
                    }
                    if (typeof W != "object") {
                      var J = "Expected token request callback to call back with a token string or token request/details object, but got a " + typeof W;
                      a.default.logAction(a.default.LOG_ERROR, "Auth.requestToken()", J), B(new M.default(J, 40170, 401));
                      return;
                    }
                    var $ = JSON.stringify(W).length;
                    if ($ > S && !y.suppressMaxLengthCheck) {
                      B(new M.default("Token request/details object exceeded max permitted stringified size (was " + $ + " bytes)", 40170, 401));
                      return;
                    }
                    if ("issued" in W) {
                      B(null, W);
                      return;
                    }
                    if (!("keyName" in W)) {
                      var J = "Expected token request callback to call back with a token string, token request object, or token details object";
                      a.default.logAction(a.default.LOG_ERROR, "Auth.requestToken()", J), B(new M.default(J, 40170, 401));
                      return;
                    }
                    F(W, function(Z, et, X, nt) {
                      if (Z) {
                        a.default.logAction(a.default.LOG_ERROR, "Auth.requestToken()", "token request API call returned error; err = " + w.inspectError(Z)), B(l(Z));
                        return;
                      }
                      nt || (et = JSON.parse(et)), a.default.logAction(a.default.LOG_MINOR, "Auth.getToken()", "token received"), B(null, et);
                    });
                  }
                });
              }, E.prototype.createTokenRequest = function(O, y, C) {
                var N = this;
                if (typeof O == "function" && !C ? (C = O, y = O = null) : typeof y == "function" && !C && (C = y, y = null), !C && this.client.options.promises)
                  return w.promisify(this, "createTokenRequest", arguments);
                y = y || this.authOptions, O = O || w.copy(this.tokenParams);
                var B = y.key;
                if (!B) {
                  C(new M.default("No key specified", 40101, 403));
                  return;
                }
                var j = B.split(":"), z = j[0], _ = j[1];
                if (!_) {
                  C(new M.default("Invalid key specified", 40101, 403));
                  return;
                }
                if (O.clientId === "") {
                  C(new M.default("clientId can’t be an empty string", 40012, 400));
                  return;
                }
                "capability" in O && (O.capability = n(O.capability));
                var F = w.mixin({ keyName: z }, O), m = O.clientId || "", x = O.ttl || "", L = O.capability || "";
                (function(U) {
                  if (F.timestamp) {
                    U();
                    return;
                  }
                  N.getTimestamp(y && y.queryTime, function(W, Q) {
                    if (W) {
                      C(W);
                      return;
                    }
                    F.timestamp = Q, U();
                  });
                })(function() {
                  var U = F.nonce || (F.nonce = u()), W = F.timestamp, Q = F.keyName + `
` + x + `
` + L + `
` + m + `
` + W + `
` + U + `
`;
                  F.mac = F.mac || r(Q, _), a.default.logAction(a.default.LOG_MINOR, "Auth.getTokenRequest()", "generated signed request"), C(null, F);
                });
              }, E.prototype.getAuthParams = function(O) {
                this.method == "basic" ? O(null, { key: this.key }) : this._ensureValidAuthCredentials(!1, function(y, C) {
                  if (y) {
                    O(y);
                    return;
                  }
                  if (!C)
                    throw new Error("Auth.getAuthParams(): _ensureValidAuthCredentials returned no error or tokenDetails");
                  O(null, { access_token: C.token });
                });
              }, E.prototype.getAuthHeaders = function(O) {
                this.method == "basic" ? O(null, { authorization: "Basic " + this.basicKey }) : this._ensureValidAuthCredentials(!1, function(y, C) {
                  if (y) {
                    O(y);
                    return;
                  }
                  if (!C)
                    throw new Error("Auth.getAuthParams(): _ensureValidAuthCredentials returned no error or tokenDetails");
                  O(null, { authorization: "Bearer " + w.toBase64(C.token) });
                });
              }, E.prototype.getTimestamp = function(O, y) {
                !this.isTimeOffsetSet() && (O || this.authOptions.queryTime) ? this.client.time(y) : y(null, this.getTimestampUsingOffset());
              }, E.prototype.getTimestampUsingOffset = function() {
                return w.now() + (this.client.serverTimeOffset || 0);
              }, E.prototype.isTimeOffsetSet = function() {
                return this.client.serverTimeOffset !== null;
              }, E.prototype._saveBasicOptions = function(O) {
                this.method = "basic", this.key = O.key, this.basicKey = w.toBase64(O.key), this.authOptions = O || {}, "clientId" in O && this._userSetClientId(O.clientId);
              }, E.prototype._saveTokenOptions = function(O, y) {
                this.method = "token", O && (this.tokenParams = O), y && (y.token && (y.tokenDetails = typeof y.token == "string" ? { token: y.token } : y.token), y.tokenDetails && (this.tokenDetails = y.tokenDetails), "clientId" in y && this._userSetClientId(y.clientId), this.authOptions = y);
              }, E.prototype._ensureValidAuthCredentials = function(O, y) {
                var C = this, N = this.tokenDetails;
                if (N) {
                  if (this._tokenClientIdMismatch(N.clientId)) {
                    y(new M.default("Mismatch between clientId in token (" + N.clientId + ") and current clientId (" + this.clientId + ")", 40102, 403));
                    return;
                  }
                  if (!this.isTimeOffsetSet() || !N.expires || N.expires >= this.getTimestampUsingOffset()) {
                    a.default.logAction(a.default.LOG_MINOR, "Auth.getToken()", "using cached token; expires = " + N.expires), y(null, N);
                    return;
                  }
                  a.default.logAction(a.default.LOG_MINOR, "Auth.getToken()", "deleting expired token"), this.tokenDetails = null;
                }
                if ((this.waitingForTokenRequest || (this.waitingForTokenRequest = T.default.create())).push(y), !(this.currentTokenRequestId !== null && !O)) {
                  var B = this.currentTokenRequestId = D();
                  this.requestToken(this.tokenParams, this.authOptions, function(j, z) {
                    if (C.currentTokenRequestId > B) {
                      a.default.logAction(a.default.LOG_MINOR, "Auth._ensureValidAuthCredentials()", "Discarding token request response; overtaken by newer one");
                      return;
                    }
                    C.currentTokenRequestId = null;
                    var _ = C.waitingForTokenRequest || A;
                    if (C.waitingForTokenRequest = null, j) {
                      _(j);
                      return;
                    }
                    _(null, C.tokenDetails = z);
                  });
                }
              }, E.prototype._userSetClientId = function(O) {
                if (typeof O == "string" || O === null) {
                  if (O === "*")
                    throw new M.default('Can’t use "*" as a clientId as that string is reserved. (To change the default token request behaviour to use a wildcard clientId, instantiate the library with {defaultTokenParams: {clientId: "*"}}), or if calling authorize(), pass it in as a tokenParam: authorize({clientId: "*"}, authOptions)', 40012, 400);
                  var y = this._uncheckedSetClientId(O);
                  if (y)
                    throw y;
                } else
                  throw new M.default("clientId must be either a string or null", 40012, 400);
              }, E.prototype._uncheckedSetClientId = function(O) {
                if (this._tokenClientIdMismatch(O)) {
                  var y = "Unexpected clientId mismatch: client has " + this.clientId + ", requested " + O, C = new M.default(y, 40102, 401);
                  return a.default.logAction(a.default.LOG_ERROR, "Auth._uncheckedSetClientId()", y), C;
                } else
                  return this.clientId = this.tokenParams.clientId = O, null;
              }, E.prototype._tokenClientIdMismatch = function(O) {
                return !!(this.clientId && this.clientId !== "*" && O && O !== "*" && this.clientId !== O);
              }, E.isTokenErr = function(O) {
                return O.code && O.code >= 40140 && O.code < 40150;
              }, E.prototype.revokeTokens = function(O, y, C) {
                if (s(this.client.options))
                  throw new M.default("Cannot revoke tokens when using token auth", 40162, 401);
                var N = this.client.options.keyName, B;
                if (typeof y == "function" ? (C = y, B = {}) : B = y ?? {}, C === void 0) {
                  if (this.client.options.promises)
                    return w.promisify(this, "revokeTokens", [O, B]);
                  C = A;
                }
                var j = C, z = g.__assign({ targets: O.map(function(x) {
                  return "".concat(x.type, ":").concat(x.value);
                }) }, B), _ = this.client.options.useBinaryProtocol ? w.Format.msgpack : w.Format.json, F = w.defaultPostHeaders(this.client.options, _);
                this.client.options.headers && w.mixin(F, this.client.options.headers);
                var m = w.encodeBody(z, _);
                d.default.post(this.client, "/keys/".concat(N, "/revokeTokens"), m, F, { newBatchResponse: "true" }, null, function(x, L, U, W) {
                  if (x) {
                    j(x);
                    return;
                  }
                  var Q = W ? L : w.decodeBody(L, _);
                  j(null, Q);
                });
              }, E;
            }()
          );
          p.default = P;
        },
        /* 18 */
        /***/
        function(H, p, f) {
          Object.defineProperty(p, "__esModule", { value: !0 });
          var g;
          (function(a) {
            a.Get = "get", a.Delete = "delete", a.Post = "post", a.Put = "put", a.Patch = "patch";
          })(g || (g = {})), p.default = g;
        },
        /* 19 */
        /***/
        function(H, p, f) {
          Object.defineProperty(p, "__esModule", { value: !0 }), p.HttpPaginatedResponse = p.PaginatedResult = void 0;
          var g = f(0), a = g.__importStar(f(1)), w = g.__importDefault(f(2)), T = g.__importDefault(f(14));
          function M(d) {
            var S = d.match(/^\.\/(\w+)\?(.*)$/);
            return S && S[2] && a.parseQueryString(S[2]);
          }
          function b(d) {
            typeof d == "string" && (d = d.split(","));
            for (var S = {}, A = 0; A < d.length; A++) {
              var u = d[A].match(/^\s*<(.+)>;\s*rel="(\w+)"$/);
              if (u) {
                var c = M(u[1]);
                c && (S[u[2]] = c);
              }
            }
            return S;
          }
          function I(d, S, A) {
            return !(A && (S || typeof d.code == "number"));
          }
          var v = (
            /** @class */
            function() {
              function d(S, A, u, c, l, r) {
                this.rest = S, this.path = A, this.headers = u, this.envelope = c ?? null, this.bodyHandler = l, this.useHttpPaginatedResponse = r || !1;
              }
              return d.prototype.get = function(S, A) {
                var u = this;
                T.default.get(this.rest, this.path, this.headers, S, this.envelope, function(c, l, r, n, t) {
                  u.handlePage(c, l, r, n, t, A);
                });
              }, d.prototype.delete = function(S, A) {
                var u = this;
                T.default.delete(this.rest, this.path, this.headers, S, this.envelope, function(c, l, r, n, t) {
                  u.handlePage(c, l, r, n, t, A);
                });
              }, d.prototype.post = function(S, A, u) {
                var c = this;
                T.default.post(this.rest, this.path, A, this.headers, S, this.envelope, function(l, r, n, t, e) {
                  u && c.handlePage(l, r, n, t, e, u);
                });
              }, d.prototype.put = function(S, A, u) {
                var c = this;
                T.default.put(this.rest, this.path, A, this.headers, S, this.envelope, function(l, r, n, t, e) {
                  u && c.handlePage(l, r, n, t, e, u);
                });
              }, d.prototype.patch = function(S, A, u) {
                var c = this;
                T.default.patch(this.rest, this.path, A, this.headers, S, this.envelope, function(l, r, n, t, e) {
                  u && c.handlePage(l, r, n, t, e, u);
                });
              }, d.prototype.handlePage = function(S, A, u, c, l, r) {
                if (S && I(S, A, this.useHttpPaginatedResponse)) {
                  w.default.logAction(w.default.LOG_ERROR, "PaginatedResource.handlePage()", "Unexpected error getting resource: err = " + a.inspectError(S)), r == null || r(S);
                  return;
                }
                var n, t, e;
                try {
                  n = this.bodyHandler(A, u || {}, c);
                } catch (s) {
                  r == null || r(S || s);
                  return;
                }
                u && (t = u.Link || u.link) && (e = b(t)), this.useHttpPaginatedResponse ? r(null, new o(this, n, u || {}, l, e, S)) : r(null, new R(this, n, e));
              }, d;
            }()
          ), R = (
            /** @class */
            function() {
              function d(S, A, u) {
                var c = this;
                this.resource = S, this.items = A;
                var l = this;
                u && ("first" in u && (this.first = function(r) {
                  if (!r && l.resource.rest.options.promises)
                    return a.promisify(l, "first", []);
                  l.get(u.first, r);
                }), "current" in u && (this.current = function(r) {
                  if (!r && l.resource.rest.options.promises)
                    return a.promisify(l, "current", []);
                  l.get(u.current, r);
                }), this.next = function(r) {
                  if (!r && l.resource.rest.options.promises)
                    return a.promisify(l, "next", []);
                  "next" in u ? l.get(u.next, r) : r(null);
                }, this.hasNext = function() {
                  return "next" in u;
                }, this.isLast = function() {
                  var r;
                  return !(!((r = c.hasNext) === null || r === void 0) && r.call(c));
                });
              }
              return d.prototype.get = function(S, A) {
                var u = this.resource;
                T.default.get(u.rest, u.path, u.headers, S, u.envelope, function(c, l, r, n, t) {
                  u.handlePage(c, l, r, n, t, A);
                });
              }, d;
            }()
          );
          p.PaginatedResult = R;
          var o = (
            /** @class */
            function(d) {
              g.__extends(S, d);
              function S(A, u, c, l, r, n) {
                var t = d.call(this, A, u, r) || this;
                return t.statusCode = l, t.success = l < 300 && l >= 200, t.headers = c, t.errorCode = n && n.code, t.errorMessage = n && n.message, t;
              }
              return S.prototype.toJSON = function() {
                return {
                  items: this.items,
                  statusCode: this.statusCode,
                  success: this.success,
                  headers: this.headers,
                  errorCode: this.errorCode,
                  errorMessage: this.errorMessage
                };
              }, S;
            }(R)
          );
          p.HttpPaginatedResponse = o, p.default = v;
        },
        /* 20 */
        /***/
        function(H, p, f) {
          Object.defineProperty(p, "__esModule", { value: !0 }), p.isRetriable = void 0;
          var g = f(0), a = g.__importDefault(f(4)), w = {
            DISCONNECTED: 80003,
            SUSPENDED: 80002,
            FAILED: 8e4,
            CLOSING: 80017,
            CLOSED: 80017,
            UNKNOWN_CONNECTION_ERR: 50002,
            UNKNOWN_CHANNEL_ERR: 50001
          }, T = {
            disconnected: function() {
              return a.default.fromValues({
                statusCode: 400,
                code: w.DISCONNECTED,
                message: "Connection to server temporarily unavailable"
              });
            },
            suspended: function() {
              return a.default.fromValues({
                statusCode: 400,
                code: w.SUSPENDED,
                message: "Connection to server unavailable"
              });
            },
            failed: function() {
              return a.default.fromValues({
                statusCode: 400,
                code: w.FAILED,
                message: "Connection failed or disconnected by server"
              });
            },
            closing: function() {
              return a.default.fromValues({
                statusCode: 400,
                code: w.CLOSING,
                message: "Connection closing"
              });
            },
            closed: function() {
              return a.default.fromValues({
                statusCode: 400,
                code: w.CLOSED,
                message: "Connection closed"
              });
            },
            unknownConnectionErr: function() {
              return a.default.fromValues({
                statusCode: 500,
                code: w.UNKNOWN_CONNECTION_ERR,
                message: "Internal connection error"
              });
            },
            unknownChannelErr: function() {
              return a.default.fromValues({
                statusCode: 500,
                code: w.UNKNOWN_CONNECTION_ERR,
                message: "Internal channel error"
              });
            }
          };
          function M(b) {
            return !b.statusCode || !b.code || b.statusCode >= 500 ? !0 : Object.values(w).includes(b.code);
          }
          p.isRetriable = M, p.default = T;
        },
        /* 21 */
        /***/
        function(H, p, f) {
          Object.defineProperty(p, "__esModule", { value: !0 });
          var g;
          (function(a) {
            a[a.REQ_SEND = 0] = "REQ_SEND", a[a.REQ_RECV = 1] = "REQ_RECV", a[a.REQ_RECV_POLL = 2] = "REQ_RECV_POLL", a[a.REQ_RECV_STREAM = 3] = "REQ_RECV_STREAM";
          })(g || (g = {})), p.default = g;
        },
        /* 22 */
        /***/
        function(H, p, f) {
          (function(g, a) {
            H.exports = a(f(6), f(5), f(58), f(11), f(40), f(32), f(24), f(27), f(28), f(59), f(60));
          })(this, function(g) {
            return g;
          });
        },
        /* 23 */
        /***/
        function(H, p, f) {
          Object.defineProperty(p, "__esModule", { value: !0 });
          var g = f(0), a = g.__importDefault(f(2)), w = (
            /** @class */
            function() {
              function T(M) {
                this.members = M || [];
              }
              return T.prototype.call = function() {
                for (var M = [], b = 0; b < arguments.length; b++)
                  M[b] = arguments[b];
                for (var I = 0, v = this.members; I < v.length; I++) {
                  var R = v[I];
                  if (R)
                    try {
                      R.apply(void 0, M);
                    } catch (o) {
                      a.default.logAction(a.default.LOG_ERROR, "Multicaster multiple callback handler", "Unexpected exception: " + o + "; stack = " + o.stack);
                    }
                }
              }, T.prototype.push = function() {
                for (var M, b = [], I = 0; I < arguments.length; I++)
                  b[I] = arguments[I];
                (M = this.members).push.apply(M, b);
              }, T.create = function(M) {
                var b = new T(M);
                return Object.assign(function() {
                  for (var I = [], v = 0; v < arguments.length; v++)
                    I[v] = arguments[v];
                  return b.call.apply(b, I);
                }, {
                  push: function(I) {
                    return b.push(I);
                  }
                });
              }, T;
            }()
          );
          p.default = w;
        },
        /* 24 */
        /***/
        function(H, p, f) {
          (function(g, a) {
            H.exports = a(f(6));
          })(this, function(g) {
            (function() {
              var a = g, w = a.lib, T = w.Base, M = a.enc, b = M.Utf8, I = a.algo;
              I.HMAC = T.extend({
                /**
                 * Initializes a newly created HMAC.
                 *
                 * @param {Hasher} hasher The hash algorithm to use.
                 * @param {WordArray|string} key The secret key.
                 *
                 * @example
                 *
                 *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
                 */
                init: function(v, R) {
                  v = this._hasher = new v.init(), typeof R == "string" && (R = b.parse(R));
                  var o = v.blockSize, d = o * 4;
                  R.sigBytes > d && (R = v.finalize(R)), R.clamp();
                  for (var S = this._oKey = R.clone(), A = this._iKey = R.clone(), u = S.words, c = A.words, l = 0; l < o; l++)
                    u[l] ^= 1549556828, c[l] ^= 909522486;
                  S.sigBytes = A.sigBytes = d, this.reset();
                },
                /**
                 * Resets this HMAC to its initial state.
                 *
                 * @example
                 *
                 *     hmacHasher.reset();
                 */
                reset: function() {
                  var v = this._hasher;
                  v.reset(), v.update(this._iKey);
                },
                /**
                 * Updates this HMAC with a message.
                 *
                 * @param {WordArray|string} messageUpdate The message to append.
                 *
                 * @return {HMAC} This HMAC instance.
                 *
                 * @example
                 *
                 *     hmacHasher.update('message');
                 *     hmacHasher.update(wordArray);
                 */
                update: function(v) {
                  return this._hasher.update(v), this;
                },
                /**
                 * Finalizes the HMAC computation.
                 * Note that the finalize operation is effectively a destructive, read-once operation.
                 *
                 * @param {WordArray|string} messageUpdate (Optional) A final message update.
                 *
                 * @return {WordArray} The HMAC.
                 *
                 * @example
                 *
                 *     var hmac = hmacHasher.finalize();
                 *     var hmac = hmacHasher.finalize('message');
                 *     var hmac = hmacHasher.finalize(wordArray);
                 */
                finalize: function(v) {
                  var R = this._hasher, o = R.finalize(v);
                  R.reset();
                  var d = R.finalize(this._oKey.clone().concat(o));
                  return d;
                }
              });
            })();
          });
        },
        /* 25 */
        /***/
        function(H, p, f) {
          Object.defineProperty(p, "__esModule", { value: !0 }), p.isSuccessCode = void 0;
          var g;
          (function(w) {
            w[w.Success = 200] = "Success", w[w.NoContent = 204] = "NoContent", w[w.BadRequest = 400] = "BadRequest", w[w.Unauthorized = 401] = "Unauthorized", w[w.Forbidden = 403] = "Forbidden", w[w.RequestTimeout = 408] = "RequestTimeout", w[w.InternalServerError = 500] = "InternalServerError";
          })(g || (g = {}));
          function a(w) {
            return w >= g.Success && w < g.BadRequest;
          }
          p.isSuccessCode = a, p.default = g;
        },
        /* 26 */
        /***/
        function(H, p, f) {
          Object.defineProperty(p, "__esModule", { value: !0 });
          var g = f(0), a = g.__importDefault(f(10)), w = g.__importStar(f(1)), T = g.__importDefault(f(7)), M = g.__importDefault(f(2)), b = g.__importDefault(f(20)), I = g.__importDefault(f(4)), v = g.__importDefault(f(3)), R = a.default.Action, o = a.default.fromValues({ action: R.CLOSE }), d = a.default.fromValues({ action: R.DISCONNECT }), S = (
            /** @class */
            function(A) {
              g.__extends(u, A);
              function u(c, l, r, n) {
                var t = A.call(this) || this;
                return n && (r.format = void 0, r.heartbeats = !0), t.connectionManager = c, c.registerProposedTransport(t), t.auth = l, t.params = r, t.timeouts = r.options.timeouts, t.format = r.format, t.isConnected = !1, t.isFinished = !1, t.isDisposed = !1, t.maxIdleInterval = null, t.idleTimer = null, t.lastActivity = null, t;
              }
              return u.prototype.connect = function() {
              }, u.prototype.close = function() {
                this.isConnected && this.requestClose(), this.finish("closed", b.default.closed());
              }, u.prototype.disconnect = function(c) {
                this.isConnected && this.requestDisconnect(), this.finish("disconnected", c || b.default.disconnected());
              }, u.prototype.fail = function(c) {
                this.isConnected && this.requestDisconnect(), this.finish("failed", c || b.default.failed());
              }, u.prototype.finish = function(c, l) {
                var r;
                this.isFinished || (this.isFinished = !0, this.isConnected = !1, this.maxIdleInterval = null, clearTimeout((r = this.idleTimer) !== null && r !== void 0 ? r : void 0), this.idleTimer = null, this.emit(c, l), this.dispose());
              }, u.prototype.onProtocolMessage = function(c) {
                switch (M.default.shouldLog(M.default.LOG_MICRO) && M.default.logAction(M.default.LOG_MICRO, "Transport.onProtocolMessage()", "received on " + this.shortName + ": " + a.default.stringify(c) + "; connectionId = " + this.connectionManager.connectionId), this.onActivity(), c.action) {
                  case R.HEARTBEAT:
                    M.default.logAction(M.default.LOG_MICRO, "Transport.onProtocolMessage()", this.shortName + " heartbeat; connectionId = " + this.connectionManager.connectionId), this.emit("heartbeat", c.id);
                    break;
                  case R.CONNECTED:
                    this.onConnect(c), this.emit("connected", c.error, c.connectionId, c.connectionDetails, c);
                    break;
                  case R.CLOSED:
                    this.onClose(c);
                    break;
                  case R.DISCONNECTED:
                    this.onDisconnect(c);
                    break;
                  case R.ACK:
                    this.emit("ack", c.msgSerial, c.count);
                    break;
                  case R.NACK:
                    this.emit("nack", c.msgSerial, c.count, c.error);
                    break;
                  case R.SYNC:
                    this.connectionManager.onChannelMessage(c, this);
                    break;
                  case R.ACTIVATE:
                    break;
                  case R.AUTH:
                    this.auth.authorize(function(l) {
                      l && M.default.logAction(M.default.LOG_ERROR, "Transport.onProtocolMessage()", "Ably requested re-authentication, but unable to obtain a new token: " + w.inspectError(l));
                    });
                    break;
                  case R.ERROR:
                    if (M.default.logAction(M.default.LOG_MINOR, "Transport.onProtocolMessage()", "received error action; connectionId = " + this.connectionManager.connectionId + "; err = " + v.default.Config.inspect(c.error) + (c.channel ? ", channel: " + c.channel : "")), c.channel === void 0) {
                      this.onFatalError(c);
                      break;
                    }
                    this.connectionManager.onChannelMessage(c, this);
                    break;
                  default:
                    this.connectionManager.onChannelMessage(c, this);
                }
              }, u.prototype.onConnect = function(c) {
                if (this.isConnected = !0, !c.connectionDetails)
                  throw new Error("Transport.onConnect(): Connect message recieved without connectionDetails");
                var l = c.connectionDetails.maxIdleInterval;
                l && (this.maxIdleInterval = l + this.timeouts.realtimeRequestTimeout, this.onActivity());
              }, u.prototype.onDisconnect = function(c) {
                var l = c && c.error;
                M.default.logAction(M.default.LOG_MINOR, "Transport.onDisconnect()", "err = " + w.inspectError(l)), this.finish("disconnected", l);
              }, u.prototype.onFatalError = function(c) {
                var l = c && c.error;
                M.default.logAction(M.default.LOG_MINOR, "Transport.onFatalError()", "err = " + w.inspectError(l)), this.finish("failed", l);
              }, u.prototype.onClose = function(c) {
                var l = c && c.error;
                M.default.logAction(M.default.LOG_MINOR, "Transport.onClose()", "err = " + w.inspectError(l)), this.finish("closed", l);
              }, u.prototype.requestClose = function() {
                M.default.logAction(M.default.LOG_MINOR, "Transport.requestClose()", ""), this.send(o);
              }, u.prototype.requestDisconnect = function() {
                M.default.logAction(M.default.LOG_MINOR, "Transport.requestDisconnect()", ""), this.send(d);
              }, u.prototype.ping = function(c) {
                var l = { action: a.default.Action.HEARTBEAT };
                c && (l.id = c), this.send(a.default.fromValues(l));
              }, u.prototype.dispose = function() {
                M.default.logAction(M.default.LOG_MINOR, "Transport.dispose()", ""), this.isDisposed = !0, this.off();
              }, u.prototype.onActivity = function() {
                this.maxIdleInterval && (this.lastActivity = this.connectionManager.lastActivity = w.now(), this.setIdleTimer(this.maxIdleInterval + 100));
              }, u.prototype.setIdleTimer = function(c) {
                var l = this;
                this.idleTimer || (this.idleTimer = setTimeout(function() {
                  l.onIdleTimerExpire();
                }, c));
              }, u.prototype.onIdleTimerExpire = function() {
                if (!this.lastActivity || !this.maxIdleInterval)
                  throw new Error("Transport.onIdleTimerExpire(): lastActivity/maxIdleInterval not set");
                this.idleTimer = null;
                var c = w.now() - this.lastActivity, l = this.maxIdleInterval - c;
                if (l <= 0) {
                  var r = "No activity seen from realtime in " + c + "ms; assuming connection has dropped";
                  M.default.logAction(M.default.LOG_ERROR, "Transport.onIdleTimerExpire()", r), this.disconnect(new I.default(r, 80003, 408));
                } else
                  this.setIdleTimer(l + 100);
              }, u.tryConnect = function(c, l, r, n, t) {
                var e = new c(l, r, n), s, i = function(D) {
                  clearTimeout(s), t({ event: this.event, error: D });
                }, h = l.options.timeouts.realtimeRequestTimeout;
                s = setTimeout(function() {
                  e.off(["preconnect", "disconnected", "failed"]), e.dispose(), i.call({ event: "disconnected" }, new I.default("Timeout waiting for transport to indicate itself viable", 5e4, 500));
                }, h), e.on(["failed", "disconnected"], i), e.on("preconnect", function() {
                  M.default.logAction(M.default.LOG_MINOR, "Transport.tryConnect()", "viable transport " + e), clearTimeout(s), e.off(["failed", "disconnected"], i), t(null, e);
                }), e.connect();
              }, u;
            }(T.default)
          );
          p.default = S;
        },
        /* 27 */
        /***/
        function(H, p, f) {
          (function(g, a) {
            H.exports = a(f(6), f(40), f(24));
          })(this, function(g) {
            return function() {
              var a = g, w = a.lib, T = w.Base, M = w.WordArray, b = a.algo, I = b.MD5, v = b.EvpKDF = T.extend({
                /**
                 * Configuration options.
                 *
                 * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
                 * @property {Hasher} hasher The hash algorithm to use. Default: MD5
                 * @property {number} iterations The number of iterations to perform. Default: 1
                 */
                cfg: T.extend({
                  keySize: 128 / 32,
                  hasher: I,
                  iterations: 1
                }),
                /**
                 * Initializes a newly created key derivation function.
                 *
                 * @param {Object} cfg (Optional) The configuration options to use for the derivation.
                 *
                 * @example
                 *
                 *     var kdf = CryptoJS.algo.EvpKDF.create();
                 *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
                 *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
                 */
                init: function(R) {
                  this.cfg = this.cfg.extend(R);
                },
                /**
                 * Derives a key from a password.
                 *
                 * @param {WordArray|string} password The password.
                 * @param {WordArray|string} salt A salt.
                 *
                 * @return {WordArray} The derived key.
                 *
                 * @example
                 *
                 *     var key = kdf.compute(password, salt);
                 */
                compute: function(R, o) {
                  for (var d, S = this.cfg, A = S.hasher.create(), u = M.create(), c = u.words, l = S.keySize, r = S.iterations; c.length < l; ) {
                    d && A.update(d), d = A.update(R).finalize(o), A.reset();
                    for (var n = 1; n < r; n++)
                      d = A.finalize(d), A.reset();
                    u.concat(d);
                  }
                  return u.sigBytes = l * 4, u;
                }
              });
              a.EvpKDF = function(R, o, d) {
                return v.create(d).compute(R, o);
              };
            }(), g.EvpKDF;
          });
        },
        /* 28 */
        /***/
        function(H, p, f) {
          (function(g, a) {
            H.exports = a(f(6), f(27));
          })(this, function(g) {
            g.lib.Cipher || function(a) {
              var w = g, T = w.lib, M = T.Base, b = T.WordArray, I = T.BufferedBlockAlgorithm, v = w.enc;
              v.Utf8;
              var R = v.Base64, o = w.algo, d = o.EvpKDF, S = T.Cipher = I.extend({
                /**
                 * Configuration options.
                 *
                 * @property {WordArray} iv The IV to use for this operation.
                 */
                cfg: M.extend(),
                /**
                 * Creates this cipher in encryption mode.
                 *
                 * @param {WordArray} key The key.
                 * @param {Object} cfg (Optional) The configuration options to use for this operation.
                 *
                 * @return {Cipher} A cipher instance.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
                 */
                createEncryptor: function(P, E) {
                  return this.create(this._ENC_XFORM_MODE, P, E);
                },
                /**
                 * Creates this cipher in decryption mode.
                 *
                 * @param {WordArray} key The key.
                 * @param {Object} cfg (Optional) The configuration options to use for this operation.
                 *
                 * @return {Cipher} A cipher instance.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
                 */
                createDecryptor: function(P, E) {
                  return this.create(this._DEC_XFORM_MODE, P, E);
                },
                /**
                 * Initializes a newly created cipher.
                 *
                 * @param {number} xformMode Either the encryption or decryption transormation mode constant.
                 * @param {WordArray} key The key.
                 * @param {Object} cfg (Optional) The configuration options to use for this operation.
                 *
                 * @example
                 *
                 *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
                 */
                init: function(P, E, O) {
                  this.cfg = this.cfg.extend(O), this._xformMode = P, this._key = E, this.reset();
                },
                /**
                 * Resets this cipher to its initial state.
                 *
                 * @example
                 *
                 *     cipher.reset();
                 */
                reset: function() {
                  I.reset.call(this), this._doReset();
                },
                /**
                 * Adds data to be encrypted or decrypted.
                 *
                 * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
                 *
                 * @return {WordArray} The data after processing.
                 *
                 * @example
                 *
                 *     var encrypted = cipher.process('data');
                 *     var encrypted = cipher.process(wordArray);
                 */
                process: function(P) {
                  return this._append(P), this._process();
                },
                /**
                 * Finalizes the encryption or decryption process.
                 * Note that the finalize operation is effectively a destructive, read-once operation.
                 *
                 * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
                 *
                 * @return {WordArray} The data after final processing.
                 *
                 * @example
                 *
                 *     var encrypted = cipher.finalize();
                 *     var encrypted = cipher.finalize('data');
                 *     var encrypted = cipher.finalize(wordArray);
                 */
                finalize: function(P) {
                  P && this._append(P);
                  var E = this._doFinalize();
                  return E;
                },
                keySize: 128 / 32,
                ivSize: 128 / 32,
                _ENC_XFORM_MODE: 1,
                _DEC_XFORM_MODE: 2,
                /**
                 * Creates shortcut functions to a cipher's object interface.
                 *
                 * @param {Cipher} cipher The cipher to create a helper for.
                 *
                 * @return {Object} An object with encrypt and decrypt shortcut functions.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
                 */
                _createHelper: function() {
                  function P(E) {
                    return typeof E == "string" ? D : s;
                  }
                  return function(E) {
                    return {
                      encrypt: function(O, y, C) {
                        return P(y).encrypt(E, O, y, C);
                      },
                      decrypt: function(O, y, C) {
                        return P(y).decrypt(E, O, y, C);
                      }
                    };
                  };
                }()
              });
              T.StreamCipher = S.extend({
                _doFinalize: function() {
                  var P = this._process(!0);
                  return P;
                },
                blockSize: 1
              });
              var A = w.mode = {}, u = T.BlockCipherMode = M.extend({
                /**
                 * Creates this mode for encryption.
                 *
                 * @param {Cipher} cipher A block cipher instance.
                 * @param {Array} iv The IV words.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
                 */
                createEncryptor: function(P, E) {
                  return this.Encryptor.create(P, E);
                },
                /**
                 * Creates this mode for decryption.
                 *
                 * @param {Cipher} cipher A block cipher instance.
                 * @param {Array} iv The IV words.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
                 */
                createDecryptor: function(P, E) {
                  return this.Decryptor.create(P, E);
                },
                /**
                 * Initializes a newly created mode.
                 *
                 * @param {Cipher} cipher A block cipher instance.
                 * @param {Array} iv The IV words.
                 *
                 * @example
                 *
                 *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
                 */
                init: function(P, E) {
                  this._cipher = P, this._iv = E;
                }
              }), c = A.CBC = function() {
                var P = u.extend();
                P.Encryptor = P.extend({
                  /**
                   * Processes the data block at offset.
                   *
                   * @param {Array} words The data words to operate on.
                   * @param {number} offset The offset where the block starts.
                   *
                   * @example
                   *
                   *     mode.processBlock(data.words, offset);
                   */
                  processBlock: function(O, y) {
                    var C = this._cipher, N = C.blockSize;
                    E.call(this, O, y, N), C.encryptBlock(O, y), this._prevBlock = O.slice(y, y + N);
                  }
                }), P.Decryptor = P.extend({
                  /**
                   * Processes the data block at offset.
                   *
                   * @param {Array} words The data words to operate on.
                   * @param {number} offset The offset where the block starts.
                   *
                   * @example
                   *
                   *     mode.processBlock(data.words, offset);
                   */
                  processBlock: function(O, y) {
                    var C = this._cipher, N = C.blockSize, B = O.slice(y, y + N);
                    C.decryptBlock(O, y), E.call(this, O, y, N), this._prevBlock = B;
                  }
                });
                function E(O, y, C) {
                  var N, B = this._iv;
                  B ? (N = B, this._iv = a) : N = this._prevBlock;
                  for (var j = 0; j < C; j++)
                    O[y + j] ^= N[j];
                }
                return P;
              }(), l = w.pad = {}, r = l.Pkcs7 = {
                /**
                 * Pads data using the algorithm defined in PKCS #5/7.
                 *
                 * @param {WordArray} data The data to pad.
                 * @param {number} blockSize The multiple that the data should be padded to.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
                 */
                pad: function(P, E) {
                  for (var O = E * 4, y = O - P.sigBytes % O, C = y << 24 | y << 16 | y << 8 | y, N = [], B = 0; B < y; B += 4)
                    N.push(C);
                  var j = b.create(N, y);
                  P.concat(j);
                },
                /**
                 * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
                 *
                 * @param {WordArray} data The data to unpad.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     CryptoJS.pad.Pkcs7.unpad(wordArray);
                 */
                unpad: function(P) {
                  var E = P.words[P.sigBytes - 1 >>> 2] & 255;
                  P.sigBytes -= E;
                }
              };
              T.BlockCipher = S.extend({
                /**
                 * Configuration options.
                 *
                 * @property {Mode} mode The block mode to use. Default: CBC
                 * @property {Padding} padding The padding strategy to use. Default: Pkcs7
                 */
                cfg: S.cfg.extend({
                  mode: c,
                  padding: r
                }),
                reset: function() {
                  var P;
                  S.reset.call(this);
                  var E = this.cfg, O = E.iv, y = E.mode;
                  this._xformMode == this._ENC_XFORM_MODE ? P = y.createEncryptor : (P = y.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == P ? this._mode.init(this, O && O.words) : (this._mode = P.call(y, this, O && O.words), this._mode.__creator = P);
                },
                _doProcessBlock: function(P, E) {
                  this._mode.processBlock(P, E);
                },
                _doFinalize: function() {
                  var P, E = this.cfg.padding;
                  return this._xformMode == this._ENC_XFORM_MODE ? (E.pad(this._data, this.blockSize), P = this._process(!0)) : (P = this._process(!0), E.unpad(P)), P;
                },
                blockSize: 128 / 32
              });
              var n = T.CipherParams = M.extend({
                /**
                 * Initializes a newly created cipher params object.
                 *
                 * @param {Object} cipherParams An object with any of the possible cipher parameters.
                 *
                 * @example
                 *
                 *     var cipherParams = CryptoJS.lib.CipherParams.create({
                 *         ciphertext: ciphertextWordArray,
                 *         key: keyWordArray,
                 *         iv: ivWordArray,
                 *         salt: saltWordArray,
                 *         algorithm: CryptoJS.algo.AES,
                 *         mode: CryptoJS.mode.CBC,
                 *         padding: CryptoJS.pad.PKCS7,
                 *         blockSize: 4,
                 *         formatter: CryptoJS.format.OpenSSL
                 *     });
                 */
                init: function(P) {
                  this.mixIn(P);
                },
                /**
                 * Converts this cipher params object to a string.
                 *
                 * @param {Format} formatter (Optional) The formatting strategy to use.
                 *
                 * @return {string} The stringified cipher params.
                 *
                 * @throws Error If neither the formatter nor the default formatter is set.
                 *
                 * @example
                 *
                 *     var string = cipherParams + '';
                 *     var string = cipherParams.toString();
                 *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
                 */
                toString: function(P) {
                  return (P || this.formatter).stringify(this);
                }
              }), t = w.format = {}, e = t.OpenSSL = {
                /**
                 * Converts a cipher params object to an OpenSSL-compatible string.
                 *
                 * @param {CipherParams} cipherParams The cipher params object.
                 *
                 * @return {string} The OpenSSL-compatible string.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
                 */
                stringify: function(P) {
                  var E, O = P.ciphertext, y = P.salt;
                  return y ? E = b.create([1398893684, 1701076831]).concat(y).concat(O) : E = O, E.toString(R);
                },
                /**
                 * Converts an OpenSSL-compatible string to a cipher params object.
                 *
                 * @param {string} openSSLStr The OpenSSL-compatible string.
                 *
                 * @return {CipherParams} The cipher params object.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
                 */
                parse: function(P) {
                  var E, O = R.parse(P), y = O.words;
                  return y[0] == 1398893684 && y[1] == 1701076831 && (E = b.create(y.slice(2, 4)), y.splice(0, 4), O.sigBytes -= 16), n.create({ ciphertext: O, salt: E });
                }
              }, s = T.SerializableCipher = M.extend({
                /**
                 * Configuration options.
                 *
                 * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
                 */
                cfg: M.extend({
                  format: e
                }),
                /**
                 * Encrypts a message.
                 *
                 * @param {Cipher} cipher The cipher algorithm to use.
                 * @param {WordArray|string} message The message to encrypt.
                 * @param {WordArray} key The key.
                 * @param {Object} cfg (Optional) The configuration options to use for this operation.
                 *
                 * @return {CipherParams} A cipher params object.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
                 *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
                 *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
                 */
                encrypt: function(P, E, O, y) {
                  y = this.cfg.extend(y);
                  var C = P.createEncryptor(O, y), N = C.finalize(E), B = C.cfg;
                  return n.create({
                    ciphertext: N,
                    key: O,
                    iv: B.iv,
                    algorithm: P,
                    mode: B.mode,
                    padding: B.padding,
                    blockSize: P.blockSize,
                    formatter: y.format
                  });
                },
                /**
                 * Decrypts serialized ciphertext.
                 *
                 * @param {Cipher} cipher The cipher algorithm to use.
                 * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
                 * @param {WordArray} key The key.
                 * @param {Object} cfg (Optional) The configuration options to use for this operation.
                 *
                 * @return {WordArray} The plaintext.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
                 *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
                 */
                decrypt: function(P, E, O, y) {
                  y = this.cfg.extend(y), E = this._parse(E, y.format);
                  var C = P.createDecryptor(O, y).finalize(E.ciphertext);
                  return C;
                },
                /**
                 * Converts serialized ciphertext to CipherParams,
                 * else assumed CipherParams already and returns ciphertext unchanged.
                 *
                 * @param {CipherParams|string} ciphertext The ciphertext.
                 * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
                 *
                 * @return {CipherParams} The unserialized ciphertext.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
                 */
                _parse: function(P, E) {
                  return typeof P == "string" ? E.parse(P, this) : P;
                }
              }), i = w.kdf = {}, h = i.OpenSSL = {
                /**
                 * Derives a key and IV from a password.
                 *
                 * @param {string} password The password to derive from.
                 * @param {number} keySize The size in words of the key to generate.
                 * @param {number} ivSize The size in words of the IV to generate.
                 * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
                 *
                 * @return {CipherParams} A cipher params object with the key, IV, and salt.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
                 *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
                 */
                execute: function(P, E, O, y) {
                  y || (y = b.random(64 / 8));
                  var C = d.create({ keySize: E + O }).compute(P, y), N = b.create(C.words.slice(E), O * 4);
                  return C.sigBytes = E * 4, n.create({ key: C, iv: N, salt: y });
                }
              }, D = T.PasswordBasedCipher = s.extend({
                /**
                 * Configuration options.
                 *
                 * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
                 */
                cfg: s.cfg.extend({
                  kdf: h
                }),
                /**
                 * Encrypts a message using a password.
                 *
                 * @param {Cipher} cipher The cipher algorithm to use.
                 * @param {WordArray|string} message The message to encrypt.
                 * @param {string} password The password.
                 * @param {Object} cfg (Optional) The configuration options to use for this operation.
                 *
                 * @return {CipherParams} A cipher params object.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
                 *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
                 */
                encrypt: function(P, E, O, y) {
                  y = this.cfg.extend(y);
                  var C = y.kdf.execute(O, P.keySize, P.ivSize);
                  y.iv = C.iv;
                  var N = s.encrypt.call(this, P, E, C.key, y);
                  return N.mixIn(C), N;
                },
                /**
                 * Decrypts serialized ciphertext using a password.
                 *
                 * @param {Cipher} cipher The cipher algorithm to use.
                 * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
                 * @param {string} password The password.
                 * @param {Object} cfg (Optional) The configuration options to use for this operation.
                 *
                 * @return {WordArray} The plaintext.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
                 *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
                 */
                decrypt: function(P, E, O, y) {
                  y = this.cfg.extend(y), E = this._parse(E, y.format);
                  var C = y.kdf.execute(O, P.keySize, P.ivSize, E.salt);
                  y.iv = C.iv;
                  var N = s.decrypt.call(this, P, E, C.key, y);
                  return N;
                }
              });
            }();
          });
        },
        /* 29 */
        /***/
        function(H, p, f) {
          Object.defineProperty(p, "__esModule", { value: !0 }), p.Request = p.createRequest = void 0;
          var g = f(0), a = g.__importStar(f(1)), w = g.__importDefault(f(12)), T = g.__importDefault(f(3)), M = g.__importDefault(f(7)), b = f(4), I = g.__importDefault(f(8)), v = g.__importDefault(f(2)), R = g.__importDefault(f(21)), o = a.getGlobalObject(), d = function() {
          }, S = o._ablyjs_jsonp = {};
          S._ = function(t) {
            return S["_" + t] || d;
          };
          var A = 1, u = "jsonp";
          function c(t, e, s, i, h, D, P) {
            return D = D || I.default.TIMEOUTS, new r(void 0, t, e, a.copy(s), i, h, D, P);
          }
          p.createRequest = c;
          var l = (
            /** @class */
            function(t) {
              g.__extends(e, t);
              function e(s, i, h) {
                var D = t.call(this, s, i, h) || this;
                return D.shortName = u, h.stream = !1, D;
              }
              return e.isAvailable = function() {
                return T.default.Config.jsonpSupported && T.default.Config.allowComet;
              }, e.prototype.toString = function() {
                return "JSONPTransport; uri=" + this.baseUri + "; isConnected=" + this.isConnected;
              }, e.prototype.createRequest = function(s, i, h, D, P, E, O) {
                return E = (this === null || this === void 0 ? void 0 : this.timeouts) || E || I.default.TIMEOUTS, c(s, i, h, D, P, E, O);
              }, e;
            }(w.default)
          ), r = (
            /** @class */
            function(t) {
              g.__extends(e, t);
              function e(s, i, h, D, P, E, O, y) {
                var C = t.call(this) || this;
                return s === void 0 && (s = A++), C.id = s, C.uri = i, C.params = D || {}, C.params.rnd = a.cheapRandStr(), h && (h["X-Ably-Version"] && (C.params.v = h["X-Ably-Version"]), h["X-Ably-Lib"] && (C.params.lib = h["X-Ably-Lib"])), C.body = P, C.method = y, C.requestMode = E, C.timeouts = O, C.requestComplete = !1, C;
              }
              return e.prototype.exec = function() {
                var s = this, i = this.id, h = this.body, D = this.method, P = this.uri, E = this.params;
                E.callback = "_ablyjs_jsonp._(" + i + ")", E.envelope = "jsonp", h && (E.body = h), D && D !== "get" && (E.method = D);
                var O = this.script = document.createElement("script"), y = P + a.toQueryString(E);
                O.src = y, O.src.split("/").slice(-1)[0] !== y.split("/").slice(-1)[0] && v.default.logAction(v.default.LOG_ERROR, "JSONP Request.exec()", "Warning: the browser appears to have truncated the script URI. This will likely result in the request failing due to an unparseable body param"), O.async = !0, O.type = "text/javascript", O.charset = "UTF-8", O.onerror = function(B) {
                  s.complete(new b.PartialErrorInfo("JSONP script error (event: " + T.default.Config.inspect(B) + ")", null, 400));
                }, S["_" + i] = function(B) {
                  if (B.statusCode) {
                    var j = B.response;
                    if (B.statusCode == 204)
                      s.complete(null, null, null, B.statusCode);
                    else if (!j)
                      s.complete(new b.PartialErrorInfo("Invalid server response: no envelope detected", null, 500));
                    else if (B.statusCode < 400 || a.isArray(j))
                      s.complete(null, j, B.headers, B.statusCode);
                    else {
                      var z = j.error || new b.PartialErrorInfo("Error response received from server", null, B.statusCode);
                      s.complete(z);
                    }
                  } else
                    s.complete(null, B);
                };
                var C = this.requestMode == R.default.REQ_SEND ? this.timeouts.httpRequestTimeout : this.timeouts.recvTimeout;
                this.timer = setTimeout(this.abort.bind(this), C);
                var N = document.getElementsByTagName("head")[0];
                N.insertBefore(O, N.firstChild);
              }, e.prototype.complete = function(s, i, h, D) {
                if (h = h || {}, !this.requestComplete) {
                  this.requestComplete = !0;
                  var P = void 0;
                  i && (P = typeof i == "string" ? "text/plain" : "application/json", h["content-type"] = P, this.emit("data", i)), this.emit(
                    "complete",
                    s,
                    i,
                    h,
                    /* unpacked: */
                    !0,
                    D
                  ), this.dispose();
                }
              }, e.prototype.abort = function() {
                this.dispose();
              }, e.prototype.dispose = function() {
                var s = this.timer;
                s && (clearTimeout(s), this.timer = null);
                var i = this.script;
                i.parentNode && i.parentNode.removeChild(i), delete S[this.id], this.emit("disposed");
              }, e;
            }(M.default)
          );
          p.Request = r;
          function n(t) {
            return o.JSONPTransport = l, l.isAvailable() && (t.supportedTransports[u] = l), l;
          }
          p.default = n;
        },
        /* 30 */
        /***/
        function(H, p, f) {
          Object.defineProperty(p, "__esModule", { value: !0 });
          var g = f(0), a = g.__importStar(f(1)), w = g.__importDefault(f(2)), T = g.__importDefault(f(8)), M = g.__importDefault(f(17)), b = g.__importDefault(f(46)), I = g.__importDefault(f(19)), v = g.__importDefault(f(33)), R = g.__importDefault(f(4)), o = g.__importDefault(f(49)), d = g.__importDefault(f(18)), S = g.__importDefault(f(3)), A = g.__importDefault(f(9)), u = g.__importDefault(f(15)), c = g.__importDefault(f(14)), l = function() {
          }, r = (
            /** @class */
            function() {
              function t(e) {
                if (!e) {
                  var s = "no options provided";
                  throw w.default.logAction(w.default.LOG_ERROR, "Rest()", s), new Error(s);
                }
                var i = T.default.objectifyOptions(e);
                i.log && w.default.setLog(i.log.level, i.log.handler), w.default.logAction(w.default.LOG_MICRO, "Rest()", "initialized with clientOptions " + S.default.Config.inspect(e));
                var h = this.options = T.default.normaliseOptions(i);
                if (h.key) {
                  var D = h.key.match(/^([^:\s]+):([^:.\s]+)$/);
                  if (!D) {
                    var s = "invalid key parameter";
                    throw w.default.logAction(w.default.LOG_ERROR, "Rest()", s), new R.default(s, 40400, 404);
                  }
                  h.keyName = D[1], h.keySecret = D[2];
                }
                if ("clientId" in h)
                  if (typeof h.clientId == "string" || h.clientId === null) {
                    if (h.clientId === "*")
                      throw new R.default('Can’t use "*" as a clientId as that string is reserved. (To change the default token request behaviour to use a wildcard clientId, use {defaultTokenParams: {clientId: "*"}})', 40012, 400);
                  } else
                    throw new R.default("clientId must be either a string or null", 40012, 400);
                w.default.logAction(w.default.LOG_MINOR, "Rest()", "started; version = " + T.default.version), this.baseUri = this.authority = function(P) {
                  return T.default.getHttpScheme(h) + P + ":" + T.default.getPort(h, !1);
                }, this._currentFallback = null, this.serverTimeOffset = null, this.http = new S.default.Http(h), this.auth = new M.default(this, h), this.channels = new n(this), this.push = new b.default(this);
              }
              return t.prototype.stats = function(e, s) {
                if (s === void 0)
                  if (typeof e == "function")
                    s = e, e = null;
                  else {
                    if (this.options.promises)
                      return a.promisify(this, "stats", [e]);
                    s = l;
                  }
                var i = a.defaultGetHeaders(this.options), h = this.options.useBinaryProtocol ? a.Format.msgpack : a.Format.json, D = this.http.supportsLinkHeaders ? void 0 : h;
                this.options.headers && a.mixin(i, this.options.headers), new I.default(this, "/stats", i, D, function(P, E, O) {
                  for (var y = O ? P : JSON.parse(P), C = 0; C < y.length; C++)
                    y[C] = o.default.fromValues(y[C]);
                  return y;
                }).get(e, s);
              }, t.prototype.time = function(e, s) {
                var i = this;
                if (s === void 0) {
                  if (typeof e == "function")
                    s = e, e = null;
                  else if (this.options.promises)
                    return a.promisify(this, "time", [e]);
                }
                var h = s || l, D = a.defaultGetHeaders(this.options);
                this.options.headers && a.mixin(D, this.options.headers);
                var P = function(E) {
                  return i.authority(E) + "/time";
                };
                this.http.do(d.default.Get, this, P, D, null, e, function(E, O, y, C) {
                  if (E) {
                    h(E);
                    return;
                  }
                  C || (O = JSON.parse(O));
                  var N = O[0];
                  if (!N) {
                    h(new R.default("Internal error (unexpected result type from GET /time)", 5e4, 500));
                    return;
                  }
                  i.serverTimeOffset = N - a.now(), h(null, N);
                });
              }, t.prototype.request = function(e, s, i, h, D, P) {
                var E = this.options.useBinaryProtocol, O = E ? S.default.Config.msgpack.encode : JSON.stringify, y = E ? S.default.Config.msgpack.decode : JSON.parse, C = E ? a.Format.msgpack : a.Format.json, N = this.http.supportsLinkHeaders ? void 0 : C;
                i = i || {};
                var B = e.toLowerCase(), j = B == "get" ? a.defaultGetHeaders(this.options, C) : a.defaultPostHeaders(this.options, C);
                if (P === void 0) {
                  if (this.options.promises)
                    return a.promisify(this, "request", [e, s, i, h, D]);
                  P = l;
                }
                typeof h != "string" && (h = O(h)), this.options.headers && a.mixin(j, this.options.headers), D && a.mixin(j, D);
                var z = new I.default(
                  this,
                  s,
                  j,
                  N,
                  function(_, F, m) {
                    return a.ensureArray(m ? _ : y(_));
                  },
                  /* useHttpPaginatedResponse: */
                  !0
                );
                if (!a.arrIn(S.default.Http.methods, B))
                  throw new R.default("Unsupported method " + B, 40500, 405);
                a.arrIn(S.default.Http.methodsWithBody, B) ? z[B](i, h, P) : z[B](i, P);
              }, t.prototype.batchPublish = function(e, s) {
                if (s === void 0) {
                  if (this.options.promises)
                    return a.promisify(this, "batchPublish", [e]);
                  s = l;
                }
                var i = s, h, D;
                a.isArray(e) ? (h = e, D = !1) : (h = [e], D = !0);
                var P = this.options.useBinaryProtocol ? a.Format.msgpack : a.Format.json, E = a.defaultPostHeaders(this.options, P);
                this.options.headers && a.mixin(E, this.options.headers);
                var O = a.encodeBody(h, P);
                c.default.post(this, "/messages", O, E, { newBatchResponse: "true" }, null, function(y, C, N, B) {
                  if (y) {
                    i(y);
                    return;
                  }
                  var j = B ? C : a.decodeBody(C, P);
                  D ? i(null, j[0]) : i(null, j);
                });
              }, t.prototype.batchPresence = function(e, s) {
                if (s === void 0) {
                  if (this.options.promises)
                    return a.promisify(this, "batchPresence", [e]);
                  s = l;
                }
                var i = s, h = this.options.useBinaryProtocol ? a.Format.msgpack : a.Format.json, D = a.defaultPostHeaders(this.options, h);
                this.options.headers && a.mixin(D, this.options.headers);
                var P = e.join(",");
                c.default.get(this, "/presence", D, { newBatchResponse: "true", channels: P }, null, function(E, O, y, C) {
                  if (E) {
                    i(E);
                    return;
                  }
                  var N = C ? O : a.decodeBody(O, h);
                  i(null, N);
                });
              }, t.prototype.setLog = function(e) {
                w.default.setLog(e.level, e.handler);
              }, t.Promise = function(e) {
                return e = T.default.objectifyOptions(e), e.promises = !0, new t(e);
              }, t.Callbacks = t, t.Platform = S.default, t.Message = A.default, t.PresenceMessage = u.default, t;
            }()
          ), n = (
            /** @class */
            function() {
              function t(e) {
                this.rest = e, this.all = /* @__PURE__ */ Object.create(null);
              }
              return t.prototype.get = function(e, s) {
                e = String(e);
                var i = this.all[e];
                return i ? s && i.setOptions(s) : this.all[e] = i = new v.default(this.rest, e, s), i;
              }, t.prototype.release = function(e) {
                delete this.all[String(e)];
              }, t;
            }()
          );
          p.default = r;
        },
        /* 31 */
        /***/
        function(H, p, f) {
          (function(g, a) {
            H.exports = a(f(6));
          })(this, function(g) {
            return g.enc.Utf8;
          });
        },
        /* 32 */
        /***/
        function(H, p, f) {
          (function(g, a) {
            H.exports = a(f(6));
          })(this, function(g) {
            return function(a) {
              var w = g, T = w.lib, M = T.WordArray, b = T.Hasher, I = w.algo, v = [], R = [];
              (function() {
                function S(l) {
                  for (var r = a.sqrt(l), n = 2; n <= r; n++)
                    if (!(l % n))
                      return !1;
                  return !0;
                }
                function A(l) {
                  return (l - (l | 0)) * 4294967296 | 0;
                }
                for (var u = 2, c = 0; c < 64; )
                  S(u) && (c < 8 && (v[c] = A(a.pow(u, 1 / 2))), R[c] = A(a.pow(u, 1 / 3)), c++), u++;
              })();
              var o = [], d = I.SHA256 = b.extend({
                _doReset: function() {
                  this._hash = new M.init(v.slice(0));
                },
                _doProcessBlock: function(S, A) {
                  for (var u = this._hash.words, c = u[0], l = u[1], r = u[2], n = u[3], t = u[4], e = u[5], s = u[6], i = u[7], h = 0; h < 64; h++) {
                    if (h < 16)
                      o[h] = S[A + h] | 0;
                    else {
                      var D = o[h - 15], P = (D << 25 | D >>> 7) ^ (D << 14 | D >>> 18) ^ D >>> 3, E = o[h - 2], O = (E << 15 | E >>> 17) ^ (E << 13 | E >>> 19) ^ E >>> 10;
                      o[h] = P + o[h - 7] + O + o[h - 16];
                    }
                    var y = t & e ^ ~t & s, C = c & l ^ c & r ^ l & r, N = (c << 30 | c >>> 2) ^ (c << 19 | c >>> 13) ^ (c << 10 | c >>> 22), B = (t << 26 | t >>> 6) ^ (t << 21 | t >>> 11) ^ (t << 7 | t >>> 25), j = i + B + y + R[h] + o[h], z = N + C;
                    i = s, s = e, e = t, t = n + j | 0, n = r, r = l, l = c, c = j + z | 0;
                  }
                  u[0] = u[0] + c | 0, u[1] = u[1] + l | 0, u[2] = u[2] + r | 0, u[3] = u[3] + n | 0, u[4] = u[4] + t | 0, u[5] = u[5] + e | 0, u[6] = u[6] + s | 0, u[7] = u[7] + i | 0;
                },
                _doFinalize: function() {
                  var S = this._data, A = S.words, u = this._nDataBytes * 8, c = S.sigBytes * 8;
                  return A[c >>> 5] |= 128 << 24 - c % 32, A[(c + 64 >>> 9 << 4) + 14] = a.floor(u / 4294967296), A[(c + 64 >>> 9 << 4) + 15] = u, S.sigBytes = A.length * 4, this._process(), this._hash;
                },
                clone: function() {
                  var S = b.clone.call(this);
                  return S._hash = this._hash.clone(), S;
                }
              });
              w.SHA256 = b._createHelper(d), w.HmacSHA256 = b._createHmacHelper(d);
            }(Math), g.SHA256;
          });
        },
        /* 33 */
        /***/
        function(H, p, f) {
          Object.defineProperty(p, "__esModule", { value: !0 });
          var g = f(0), a = g.__importStar(f(1)), w = g.__importDefault(f(7)), T = g.__importDefault(f(2)), M = g.__importDefault(f(34)), b = g.__importDefault(f(9)), I = g.__importDefault(f(4)), v = g.__importDefault(f(19)), R = g.__importDefault(f(14)), o = g.__importDefault(f(3));
          function d() {
          }
          var S = 9;
          function A(l) {
            return a.arrEvery(l, function(r) {
              return !r.id;
            });
          }
          function u(l) {
            var r = l || {};
            if (r.cipher) {
              if (!o.default.Crypto)
                throw new Error("Encryption not enabled; use ably.encryption.js instead");
              var n = o.default.Crypto.getCipher(r.cipher);
              r.cipher = n.cipherParams, r.channelCipher = n.cipher;
            } else
              "cipher" in r && (r.cipher = void 0, r.channelCipher = null);
            return r;
          }
          var c = (
            /** @class */
            function(l) {
              g.__extends(r, l);
              function r(n, t, e) {
                var s = l.call(this) || this;
                return T.default.logAction(T.default.LOG_MINOR, "Channel()", "started; name = " + t), s.rest = n, s.name = t, s.basePath = "/channels/" + encodeURIComponent(t), s.presence = new M.default(s), s.channelOptions = u(e), s;
              }
              return r.prototype.setOptions = function(n) {
                this.channelOptions = u(n);
              }, r.prototype.history = function(n, t) {
                if (T.default.logAction(T.default.LOG_MICRO, "Channel.history()", "channel = " + this.name), t === void 0)
                  if (typeof n == "function")
                    t = n, n = null;
                  else {
                    if (this.rest.options.promises)
                      return a.promisify(this, "history", arguments);
                    t = d;
                  }
                this._history(n, t);
              }, r.prototype._history = function(n, t) {
                var e = this.rest, s = e.options.useBinaryProtocol ? a.Format.msgpack : a.Format.json, i = this.rest.http.supportsLinkHeaders ? void 0 : s, h = a.defaultGetHeaders(e.options, s);
                e.options.headers && a.mixin(h, e.options.headers);
                var D = this.channelOptions;
                new v.default(e, this.basePath + "/messages", h, i, function(P, E, O) {
                  return b.default.fromResponseBody(P, D, O ? void 0 : s);
                }).get(n, t);
              }, r.prototype.publish = function() {
                var n = this, t = arguments.length, e = arguments[0], s = arguments[1], i = arguments[t - 1], h, D;
                if (typeof i != "function") {
                  if (this.rest.options.promises)
                    return a.promisify(this, "publish", arguments);
                  i = d;
                }
                if (typeof e == "string" || e === null)
                  h = [b.default.fromValues({ name: e, data: s })], D = arguments[2];
                else if (a.isObject(e))
                  h = [b.default.fromValues(e)], D = arguments[1];
                else if (a.isArray(e))
                  h = b.default.fromValuesArray(e), D = arguments[1];
                else
                  throw new I.default("The single-argument form of publish() expects a message object or an array of message objects", 40013, 400);
                (typeof D != "object" || !D) && (D = {});
                var P = this.rest, E = P.options, O = E.useBinaryProtocol ? a.Format.msgpack : a.Format.json, y = P.options.idempotentRestPublishing, C = a.defaultPostHeaders(P.options, O);
                if (E.headers && a.mixin(C, E.headers), y && A(h)) {
                  var N = a.randomString(S);
                  a.arrForEach(h, function(B, j) {
                    B.id = N + ":" + j.toString();
                  });
                }
                b.default.encodeArray(h, this.channelOptions, function(B) {
                  if (B) {
                    i(B);
                    return;
                  }
                  var j = b.default.getMessagesSize(h), z = E.maxMessageSize;
                  if (j > z) {
                    i(new I.default("Maximum size of messages that can be published at once exceeded ( was " + j + " bytes; limit is " + z + " bytes)", 40009, 400));
                    return;
                  }
                  n._publish(b.default.serialize(h, O), C, D, i);
                });
              }, r.prototype._publish = function(n, t, e, s) {
                R.default.post(this.rest, this.basePath + "/messages", n, t, e, null, s);
              }, r.prototype.status = function(n) {
                if (typeof n != "function" && this.rest.options.promises)
                  return a.promisify(this, "status", []);
                var t = this.rest.options.useBinaryProtocol ? a.Format.msgpack : a.Format.json, e = a.defaultPostHeaders(this.rest.options, t);
                R.default.get(this.rest, this.basePath, e, {}, t, n || d);
              }, r;
            }(w.default)
          );
          p.default = c;
        },
        /* 34 */
        /***/
        function(H, p, f) {
          Object.defineProperty(p, "__esModule", { value: !0 });
          var g = f(0), a = g.__importStar(f(1)), w = g.__importDefault(f(7)), T = g.__importDefault(f(2)), M = g.__importDefault(f(19)), b = g.__importDefault(f(15));
          function I() {
          }
          var v = (
            /** @class */
            function(R) {
              g.__extends(o, R);
              function o(d) {
                var S = R.call(this) || this;
                return S.channel = d, S.basePath = d.basePath + "/presence", S;
              }
              return o.prototype.get = function(d, S) {
                if (T.default.logAction(T.default.LOG_MICRO, "Presence.get()", "channel = " + this.channel.name), S === void 0)
                  if (typeof d == "function")
                    S = d, d = null;
                  else {
                    if (this.channel.rest.options.promises)
                      return a.promisify(this, "get", arguments);
                    S = I;
                  }
                var A = this.channel.rest, u = A.options.useBinaryProtocol ? a.Format.msgpack : a.Format.json, c = this.channel.rest.http.supportsLinkHeaders ? void 0 : u, l = a.defaultGetHeaders(A.options, u);
                A.options.headers && a.mixin(l, A.options.headers);
                var r = this.channel.channelOptions;
                new M.default(A, this.basePath, l, c, function(n, t, e) {
                  return b.default.fromResponseBody(n, r, e ? void 0 : u);
                }).get(d, S);
              }, o.prototype.history = function(d, S) {
                return T.default.logAction(T.default.LOG_MICRO, "Presence.history()", "channel = " + this.channel.name), this._history(d, S);
              }, o.prototype._history = function(d, S) {
                if (S === void 0)
                  if (typeof d == "function")
                    S = d, d = null;
                  else {
                    if (this.channel.rest.options.promises)
                      return a.promisify(this, "_history", [d]);
                    S = I;
                  }
                var A = this.channel.rest, u = A.options.useBinaryProtocol ? a.Format.msgpack : a.Format.json, c = this.channel.rest.http.supportsLinkHeaders ? void 0 : u, l = a.defaultGetHeaders(A.options, u);
                A.options.headers && a.mixin(l, A.options.headers);
                var r = this.channel.channelOptions;
                new M.default(A, this.basePath + "/history", l, c, function(n, t, e) {
                  return b.default.fromResponseBody(n, r, e ? void 0 : u);
                }).get(d, S);
              }, o;
            }(w.default)
          );
          p.default = v;
        },
        /* 35 */
        /***/
        function(H, p, f) {
          (function(g) {
            Object.defineProperty(p, "__esModule", { value: !0 }), p.TransportParams = void 0;
            var a = f(0), w = a.__importDefault(f(10)), T = a.__importStar(f(1)), M = a.__importStar(f(52)), b = a.__importStar(f(8)), I = a.__importDefault(f(3)), v = a.__importDefault(f(7)), R = a.__importDefault(f(36)), o = a.__importDefault(f(2)), d = a.__importDefault(f(37)), S = a.__importStar(f(20)), A = a.__importStar(f(4)), u = a.__importDefault(f(17)), c = a.__importDefault(f(9)), l = a.__importDefault(f(23)), r = a.__importDefault(f(53)), n = a.__importDefault(f(26)), t = a.__importDefault(f(25)), e = function() {
              var _;
              return typeof I.default.WebStorage < "u" && ((_ = I.default.WebStorage) === null || _ === void 0 ? void 0 : _.localSupported);
            }, s = function() {
              var _;
              return typeof I.default.WebStorage < "u" && ((_ = I.default.WebStorage) === null || _ === void 0 ? void 0 : _.sessionSupported);
            }, i = w.default.Action, h = function() {
            }, D = "ably-transport-preference", P = "ably-connection-recovery";
            function E() {
              var _, F;
              return s() && ((F = (_ = I.default.WebStorage) === null || _ === void 0 ? void 0 : _.getSession) === null || F === void 0 ? void 0 : F.call(_, P));
            }
            function O(_) {
              var F, m;
              return s() && ((m = (F = I.default.WebStorage) === null || F === void 0 ? void 0 : F.setSession) === null || m === void 0 ? void 0 : m.call(F, P, _));
            }
            function y() {
              var _, F;
              return s() && ((F = (_ = I.default.WebStorage) === null || _ === void 0 ? void 0 : _.removeSession) === null || F === void 0 ? void 0 : F.call(_, P));
            }
            function C(_, F) {
              return T.arrIndexOf(I.default.Defaults.transportPreferenceOrder, _.shortName) > T.arrIndexOf(I.default.Defaults.transportPreferenceOrder, F.shortName);
            }
            function N(_, F, m) {
              var x;
              if (_.channel !== F.channel || (x = _.action) !== i.PRESENCE && x !== i.MESSAGE || x !== F.action)
                return !1;
              var L = x === i.PRESENCE ? "presence" : "messages", U = _[L].concat(F[L]), W = c.default.getMessagesSize(U);
              return W > m || !T.allSame(U, "clientId") || !T.arrEvery(U, function(Q) {
                return !Q.id;
              }) ? !1 : (_[L] = U, !0);
            }
            function B(_) {
              try {
                return JSON.parse(_);
              } catch {
                return null;
              }
            }
            var j = (
              /** @class */
              function() {
                function _(F, m, x, L) {
                  this.options = F, this.host = m, this.mode = x, this.connectionKey = L, this.format = F.useBinaryProtocol ? T.Format.msgpack : T.Format.json;
                }
                return _.prototype.getConnectParams = function(F) {
                  var m = F ? T.copy(F) : {}, x = this.options;
                  switch (this.mode) {
                    case "upgrade":
                      m.upgrade = this.connectionKey;
                      break;
                    case "resume":
                      m.resume = this.connectionKey;
                      break;
                    case "recover": {
                      var L = B(x.recover);
                      L && (m.recover = L.connectionKey);
                      break;
                    }
                  }
                  return x.clientId !== void 0 && (m.clientId = x.clientId), x.echoMessages === !1 && (m.echo = "false"), this.format !== void 0 && (m.format = this.format), this.stream !== void 0 && (m.stream = this.stream), this.heartbeats !== void 0 && (m.heartbeats = this.heartbeats), m.v = b.default.protocolVersion, m.agent = (0, b.getAgentString)(this.options), x.transportParams !== void 0 && T.mixin(m, x.transportParams), m;
                }, _.prototype.toString = function() {
                  var F = "[mode=" + this.mode;
                  return this.host && (F += ",host=" + this.host), this.connectionKey && (F += ",connectionKey=" + this.connectionKey), this.format && (F += ",format=" + this.format), F += "]", F;
                }, _;
              }()
            );
            p.TransportParams = j;
            var z = (
              /** @class */
              function(_) {
                a.__extends(F, _);
                function F(m, x) {
                  var L = _.call(this) || this;
                  L.disconnectedRetryCount = 0, F.initTransports(), L.realtime = m, L.options = x;
                  var U = x.timeouts, W = U.preferenceConnectTimeout + U.realtimeRequestTimeout;
                  if (L.states = {
                    initialized: {
                      state: "initialized",
                      terminal: !1,
                      queueEvents: !0,
                      sendEvents: !1,
                      failState: "disconnected"
                    },
                    connecting: {
                      state: "connecting",
                      terminal: !1,
                      queueEvents: !0,
                      sendEvents: !1,
                      retryDelay: W,
                      failState: "disconnected"
                    },
                    connected: {
                      state: "connected",
                      terminal: !1,
                      queueEvents: !1,
                      sendEvents: !0,
                      failState: "disconnected"
                    },
                    synchronizing: {
                      state: "connected",
                      terminal: !1,
                      queueEvents: !0,
                      sendEvents: !1,
                      forceQueueEvents: !0,
                      failState: "disconnected"
                    },
                    disconnected: {
                      state: "disconnected",
                      terminal: !1,
                      queueEvents: !0,
                      sendEvents: !1,
                      retryDelay: U.disconnectedRetryTimeout,
                      failState: "disconnected"
                    },
                    suspended: {
                      state: "suspended",
                      terminal: !1,
                      queueEvents: !1,
                      sendEvents: !1,
                      retryDelay: U.suspendedRetryTimeout,
                      failState: "suspended"
                    },
                    closing: {
                      state: "closing",
                      terminal: !1,
                      queueEvents: !1,
                      sendEvents: !1,
                      retryDelay: U.realtimeRequestTimeout,
                      failState: "closed"
                    },
                    closed: { state: "closed", terminal: !0, queueEvents: !1, sendEvents: !1, failState: "closed" },
                    failed: { state: "failed", terminal: !0, queueEvents: !1, sendEvents: !1, failState: "failed" }
                  }, L.state = L.states.initialized, L.errorReason = null, L.queuedMessages = new R.default(), L.msgSerial = 0, L.connectionDetails = void 0, L.connectionId = void 0, L.connectionKey = void 0, L.connectionStateTtl = U.connectionStateTtl, L.maxIdleInterval = null, L.transports = T.intersect(x.transports || b.default.defaultTransports, F.supportedTransports), L.baseTransport = T.intersect(b.default.baseTransportOrder, L.transports)[0], L.upgradeTransports = T.intersect(L.transports, b.default.upgradeTransports), L.transportPreference = null, L.httpHosts = b.default.getHosts(x), L.activeProtocol = null, L.proposedTransports = [], L.pendingTransports = [], L.host = null, L.lastAutoReconnectAttempt = null, L.lastActivity = null, L.forceFallbackHost = !1, L.connectCounter = 0, o.default.logAction(o.default.LOG_MINOR, "Realtime.ConnectionManager()", "started"), o.default.logAction(o.default.LOG_MICRO, "Realtime.ConnectionManager()", "requested transports = [" + (x.transports || b.default.defaultTransports) + "]"), o.default.logAction(o.default.LOG_MICRO, "Realtime.ConnectionManager()", "available transports = [" + L.transports + "]"), o.default.logAction(o.default.LOG_MICRO, "Realtime.ConnectionManager()", "http hosts = [" + L.httpHosts + "]"), !L.transports.length) {
                    var Q = "no requested transports available";
                    throw o.default.logAction(o.default.LOG_ERROR, "realtime.ConnectionManager()", Q), new Error(Q);
                  }
                  var J = I.default.Config.addEventListener;
                  return J && (s() && typeof x.recover == "function" && J("beforeunload", L.persistConnection.bind(L)), x.closeOnUnload === !0 && J("beforeunload", function() {
                    o.default.logAction(o.default.LOG_MAJOR, "Realtime.ConnectionManager()", "beforeunload event has triggered the connection to close as closeOnUnload is true"), L.requestState({ state: "closing" });
                  }), J("online", function() {
                    L.state == L.states.disconnected || L.state == L.states.suspended ? (o.default.logAction(o.default.LOG_MINOR, "ConnectionManager caught browser ‘online’ event", "reattempting connection"), L.requestState({ state: "connecting" })) : L.state == L.states.connecting && (L.pendingTransports.forEach(function($) {
                      $.off();
                    }), L.disconnectAllTransports(), L.startConnect());
                  }), J("offline", function() {
                    L.state == L.states.connected && (o.default.logAction(o.default.LOG_MINOR, "ConnectionManager caught browser ‘offline’ event", "disconnecting active transport"), L.disconnectAllTransports());
                  })), L;
                }
                return F.initTransports = function() {
                  (0, r.default)(F), T.arrForEach(I.default.Transports, function(m) {
                    m(F);
                  });
                }, F.prototype.createTransportParams = function(m, x) {
                  return new j(this.options, m, x, this.connectionKey);
                }, F.prototype.getTransportParams = function(m) {
                  var x = this, L = function(U) {
                    if (x.connectionKey) {
                      U("resume");
                      return;
                    }
                    if (typeof x.options.recover == "string") {
                      U("recover");
                      return;
                    }
                    var W = x.options.recover, Q = E();
                    if (Q && typeof W == "function") {
                      o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.getTransportParams()", "Calling clientOptions-provided recover function with last session data"), W(Q, function(J) {
                        J ? (x.options.recover = Q.recoveryKey, U("recover")) : U("clean");
                      });
                      return;
                    }
                    U("clean");
                  };
                  L(function(U) {
                    var W = x.createTransportParams(null, U);
                    if (U === "recover") {
                      o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.getTransportParams()", "Transport recovery mode = recover; recoveryKey = " + x.options.recover);
                      var Q = B(x.options.recover);
                      Q && (x.msgSerial = Q.msgSerial);
                    } else
                      o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.getTransportParams()", "Transport params = " + W.toString());
                    m(W);
                  });
                }, F.prototype.tryATransport = function(m, x, L) {
                  var U = this;
                  o.default.logAction(o.default.LOG_MICRO, "ConnectionManager.tryATransport()", "trying " + x), n.default.tryConnect(F.supportedTransports[x], this, this.realtime.auth, m, function(W, Q) {
                    var J = U.state;
                    if (J == U.states.closing || J == U.states.closed || J == U.states.failed) {
                      Q && (o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.tryATransport()", "connection " + J.state + " while we were attempting the transport; closing " + Q), Q.close()), L(!0);
                      return;
                    }
                    if (W) {
                      o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.tryATransport()", "transport " + x + " " + W.event + ", err: " + W.error.toString()), u.default.isTokenErr(W.error) && !(U.errorReason && u.default.isTokenErr(U.errorReason)) ? (U.errorReason = W.error, U.realtime.auth._forceNewToken(null, null, function($) {
                        if ($) {
                          U.actOnErrorFromAuthorize($);
                          return;
                        }
                        U.tryATransport(m, x, L);
                      })) : W.event === "failed" ? (U.notifyState({ state: "failed", error: W.error }), L(!0)) : W.event === "disconnected" && ((0, S.isRetriable)(W.error) ? L(!1) : (U.notifyState({ state: U.states.connecting.failState, error: W.error }), L(!0)));
                      return;
                    }
                    o.default.logAction(o.default.LOG_MICRO, "ConnectionManager.tryATransport()", "viable transport " + x + "; setting pending"), U.setTransportPending(Q, m), L(null, Q);
                  });
                }, F.prototype.setTransportPending = function(m, x) {
                  var L = this, U = x.mode;
                  o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.setTransportPending()", "transport = " + m + "; mode = " + U), T.arrDeleteValue(this.proposedTransports, m), this.pendingTransports.push(m);
                  var W = I.default.Defaults.transportPreferenceOrder[I.default.Defaults.transportPreferenceOrder.length - 1];
                  m.once("connected", function(J, $, Z) {
                    U == "upgrade" && L.activeProtocol ? m.shortName !== W && T.arrIn(L.getUpgradePossibilities(), W) && L.activeProtocol ? setTimeout(function() {
                      L.scheduleTransportActivation(J, m, $, Z);
                    }, L.options.timeouts.parallelUpgradeDelay) : L.scheduleTransportActivation(J, m, $, Z) : (L.activateTransport(J, m, $, Z), I.default.Config.nextTick(function() {
                      L.connectImpl(x);
                    })), U === "recover" && L.options.recover && (L.options.recover = null, L.unpersistConnection());
                  });
                  var Q = this;
                  m.on(["disconnected", "closed", "failed"], function(J) {
                    Q.deactivateTransport(m, this.event, J);
                  }), this.emit("transport.pending", m);
                }, F.prototype.scheduleTransportActivation = function(m, x, L, U) {
                  var W = this, Q = this.activeProtocol && this.activeProtocol.getTransport(), J = function() {
                    x.disconnect(), T.arrDeleteValue(W.pendingTransports, x);
                  };
                  if (this.state !== this.states.connected && this.state !== this.states.connecting) {
                    o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.scheduleTransportActivation()", "Current connection state (" + this.state.state + (this.state === this.states.synchronizing ? ", but with an upgrade already in progress" : "") + ") is not valid to upgrade in; abandoning upgrade to " + x.shortName), J();
                    return;
                  }
                  if (Q && !C(x, Q)) {
                    o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.scheduleTransportActivation()", "Proposed transport " + x.shortName + " is no better than current active transport " + Q.shortName + " - abandoning upgrade"), J();
                    return;
                  }
                  o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.scheduleTransportActivation()", "Scheduling transport upgrade; transport = " + x);
                  var $ = null;
                  if (!x.isConnected) {
                    o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.scheduleTransportActivation()", "Proposed transport " + x.shortName + "is no longer connected; abandoning upgrade"), J();
                    return;
                  }
                  if (this.state === this.states.connected)
                    o.default.logAction(o.default.LOG_MICRO, "ConnectionManager.scheduleTransportActivation()", "Currently connected, so temporarily pausing events until the upgrade is complete"), this.state = this.states.synchronizing, $ = this.activeProtocol;
                  else if (this.state !== this.states.connecting) {
                    o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.scheduleTransportActivation()", "Current connection state (" + this.state.state + (this.state === this.states.synchronizing ? ", but with an upgrade already in progress" : "") + ") is not valid to upgrade in; abandoning upgrade to " + x.shortName), J();
                    return;
                  }
                  o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.scheduleTransportActivation()", "Syncing transport; transport = " + x);
                  var Z = function() {
                    o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.scheduleTransportActivation()", "Activating transport; transport = " + x), x.send(w.default.fromValues({
                      action: i.ACTIVATE
                    })), W.activateTransport(m, x, L, U), W.state === W.states.synchronizing ? (o.default.logAction(o.default.LOG_MICRO, "ConnectionManager.scheduleTransportActivation()", "Pre-upgrade protocol idle, sending queued messages on upgraded transport; transport = " + x), W.state = W.states.connected) : o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.scheduleTransportActivation()", "Pre-upgrade protocol idle, but state is now " + W.state.state + ", so leaving unchanged"), W.state.sendEvents && W.sendQueuedMessages();
                  };
                  $ ? $.onceIdle(Z) : Z();
                }, F.prototype.activateTransport = function(m, x, L, U) {
                  var W = this;
                  o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.activateTransport()", "transport = " + x), m && o.default.logAction(o.default.LOG_ERROR, "ConnectionManager.activateTransport()", "error = " + m), L && o.default.logAction(o.default.LOG_MICRO, "ConnectionManager.activateTransport()", "connectionId =  " + L), U && o.default.logAction(o.default.LOG_MICRO, "ConnectionManager.activateTransport()", "connectionDetails =  " + JSON.stringify(U)), this.persistTransportPreference(x);
                  var Q = this.state, J = this.states.connected.state;
                  if (o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.activateTransport()", "current state = " + Q.state), Q.state == this.states.closing.state || Q.state == this.states.closed.state || Q.state == this.states.failed.state)
                    return o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.activateTransport()", "Disconnecting transport and abandoning"), x.disconnect(), !1;
                  if (T.arrDeleteValue(this.pendingTransports, x), !x.isConnected)
                    return o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.activateTransport()", "Declining to activate transport " + x + " since it appears to no longer be connected"), !1;
                  var $ = this.activeProtocol;
                  this.activeProtocol = new M.default(x), this.host = x.params.host;
                  var Z = U.connectionKey;
                  if (Z && this.connectionKey != Z && this.setConnection(L, U, !!m), this.onConnectionDetailsUpdate(U, x), I.default.Config.nextTick(function() {
                    x.on("connected", function(X, nt, it) {
                      W.onConnectionDetailsUpdate(it, x), W.emit("update", new d.default(J, J, null, X));
                    });
                  }), Q.state === this.states.connected.state ? m && (this.errorReason = this.realtime.connection.errorReason = m, this.emit("update", new d.default(J, J, null, m))) : (this.notifyState({ state: "connected", error: m }), this.errorReason = this.realtime.connection.errorReason = m || null), this.emit("transport.active", x), $)
                    if ($.messageQueue.count() > 0 && o.default.logAction(o.default.LOG_ERROR, "ConnectionManager.activateTransport()", "Previous active protocol (for transport " + $.transport.shortName + ", new one is " + x.shortName + ") finishing with " + $.messageQueue.count() + " messages still pending"), $.transport === x) {
                      var et = "Assumption violated: activating a transport that was also the transport for the previous active protocol; transport = " + x.shortName + "; stack = " + new Error().stack;
                      o.default.logAction(o.default.LOG_ERROR, "ConnectionManager.activateTransport()", et);
                    } else
                      $.finish();
                  return T.safeArrForEach(this.pendingTransports, function(X) {
                    if (X === x) {
                      var nt = "Assumption violated: activating a transport that is still marked as a pending transport; transport = " + x.shortName + "; stack = " + new Error().stack;
                      o.default.logAction(o.default.LOG_ERROR, "ConnectionManager.activateTransport()", nt), T.arrDeleteValue(W.pendingTransports, x);
                    } else
                      X.disconnect();
                  }), T.safeArrForEach(this.proposedTransports, function(X) {
                    X === x ? (o.default.logAction(o.default.LOG_ERROR, "ConnectionManager.activateTransport()", "Assumption violated: activating a transport that is still marked as a proposed transport; transport = " + x.shortName + "; stack = " + new Error().stack), T.arrDeleteValue(W.proposedTransports, x)) : X.dispose();
                  }), !0;
                }, F.prototype.deactivateTransport = function(m, x, L) {
                  var U = this.activeProtocol, W = U && U.getTransport() === m, Q = T.arrDeleteValue(this.pendingTransports, m), J = T.arrDeleteValue(this.proposedTransports, m), $ = this.noTransportsScheduledForActivation();
                  if (o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.deactivateTransport()", "transport = " + m), o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.deactivateTransport()", "state = " + x + (W ? "; was active" : Q ? "; was pending" : J ? "; was proposed" : "") + ($ ? "" : "; another transport is scheduled for activation")), L && L.message && o.default.logAction(o.default.LOG_MICRO, "ConnectionManager.deactivateTransport()", "reason =  " + L.message), W && (o.default.logAction(o.default.LOG_MICRO, "ConnectionManager.deactivateTransport()", "Getting, clearing, and requeuing " + this.activeProtocol.messageQueue.count() + " pending messages"), this.queuePendingMessages(U.getPendingMessages()), I.default.Config.nextTick(function() {
                    U.clearPendingMessages();
                  }), this.activeProtocol = this.host = null), this.emit("transport.inactive", m), W && $ || W && x === "failed" || x === "closed" || U === null && Q && this.pendingTransports.length === 0) {
                    if (x === "disconnected" && L && L.statusCode > 500 && this.httpHosts.length > 1) {
                      this.unpersistTransportPreference(), this.forceFallbackHost = !0, this.notifyState({ state: x, error: L, retryImmediately: !0 });
                      return;
                    }
                    var Z = x === "failed" && u.default.isTokenErr(L) ? "disconnected" : x;
                    this.notifyState({ state: Z, error: L });
                    return;
                  }
                  W && x === "disconnected" && this.state !== this.states.synchronizing && (o.default.logAction(o.default.LOG_MICRO, "ConnectionManager.deactivateTransport()", "wasActive but another transport is connected and scheduled for activation, so going into the connecting state until it activates"), this.startSuspendTimer(), this.startTransitionTimer(this.states.connecting), this.notifyState({ state: "connecting", error: L }));
                }, F.prototype.noTransportsScheduledForActivation = function() {
                  return T.isEmpty(this.pendingTransports) || this.pendingTransports.every(function(m) {
                    return !m.isConnected;
                  });
                }, F.prototype.setConnection = function(m, x, L) {
                  var U = this.connectionId, W = U && U !== m, Q = !U && L;
                  (W || Q) && (o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.setConnection()", "Resetting msgSerial"), this.msgSerial = 0, this.queuedMessages.resetSendAttempted()), this.connectionId !== m && o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.setConnection()", "New connectionId; reattaching any attached channels"), this.realtime.connection.id = this.connectionId = m, this.realtime.connection.key = this.connectionKey = x.connectionKey;
                }, F.prototype.clearConnection = function() {
                  this.realtime.connection.id = this.connectionId = void 0, this.realtime.connection.key = this.connectionKey = void 0, this.msgSerial = 0, this.unpersistConnection();
                }, F.prototype.createRecoveryKey = function() {
                  return this.connectionKey ? JSON.stringify({
                    connectionKey: this.connectionKey,
                    msgSerial: this.msgSerial,
                    channelSerials: this.realtime.channels.channelSerials()
                  }) : null;
                }, F.prototype.checkConnectionStateFreshness = function() {
                  if (!(!this.lastActivity || !this.connectionId)) {
                    var m = T.now() - this.lastActivity;
                    m > this.connectionStateTtl + this.maxIdleInterval && (o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.checkConnectionStateFreshness()", "Last known activity from realtime was " + m + "ms ago; discarding connection state"), this.clearConnection(), this.states.connecting.failState = "suspended");
                  }
                }, F.prototype.persistConnection = function() {
                  if (s()) {
                    var m = this.createRecoveryKey();
                    m && O({
                      recoveryKey: m,
                      disconnectedAt: T.now(),
                      location: g.location,
                      clientId: this.realtime.auth.clientId
                    });
                  }
                }, F.prototype.unpersistConnection = function() {
                  y();
                }, F.prototype.getError = function() {
                  return this.errorReason || this.getStateError();
                }, F.prototype.getStateError = function() {
                  var m, x;
                  return (x = (m = S.default)[this.state.state]) === null || x === void 0 ? void 0 : x.call(m);
                }, F.prototype.activeState = function() {
                  return this.state.queueEvents || this.state.sendEvents;
                }, F.prototype.enactStateChange = function(m) {
                  var x = m.current === "failed" ? o.default.LOG_ERROR : o.default.LOG_MAJOR;
                  o.default.logAction(x, "Connection state", m.current + (m.reason ? "; reason: " + m.reason : "")), o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.enactStateChange", "setting new state: " + m.current + "; reason = " + (m.reason && m.reason.message));
                  var L = this.state = this.states[m.current];
                  m.reason && (this.errorReason = m.reason, this.realtime.connection.errorReason = m.reason), (L.terminal || L.state === "suspended") && this.clearConnection(), this.emit("connectionstate", m);
                }, F.prototype.startTransitionTimer = function(m) {
                  var x = this;
                  o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.startTransitionTimer()", "transitionState: " + m.state), this.transitionTimer && (o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.startTransitionTimer()", "clearing already-running timer"), clearTimeout(this.transitionTimer)), this.transitionTimer = setTimeout(function() {
                    x.transitionTimer && (x.transitionTimer = null, o.default.logAction(o.default.LOG_MINOR, "ConnectionManager " + m.state + " timer expired", "requesting new state: " + m.failState), x.notifyState({ state: m.failState }));
                  }, m.retryDelay);
                }, F.prototype.cancelTransitionTimer = function() {
                  o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.cancelTransitionTimer()", ""), this.transitionTimer && (clearTimeout(this.transitionTimer), this.transitionTimer = null);
                }, F.prototype.startSuspendTimer = function() {
                  var m = this;
                  this.suspendTimer || (this.suspendTimer = setTimeout(function() {
                    m.suspendTimer && (m.suspendTimer = null, o.default.logAction(o.default.LOG_MINOR, "ConnectionManager suspend timer expired", "requesting new state: suspended"), m.states.connecting.failState = "suspended", m.notifyState({ state: "suspended" }));
                  }, this.connectionStateTtl));
                }, F.prototype.checkSuspendTimer = function(m) {
                  m !== "disconnected" && m !== "suspended" && m !== "connecting" && this.cancelSuspendTimer();
                }, F.prototype.cancelSuspendTimer = function() {
                  this.states.connecting.failState = "disconnected", this.suspendTimer && (clearTimeout(this.suspendTimer), this.suspendTimer = null);
                }, F.prototype.startRetryTimer = function(m) {
                  var x = this;
                  this.retryTimer = setTimeout(function() {
                    o.default.logAction(o.default.LOG_MINOR, "ConnectionManager retry timer expired", "retrying"), x.retryTimer = null, x.requestState({ state: "connecting" });
                  }, m);
                }, F.prototype.cancelRetryTimer = function() {
                  this.retryTimer && (clearTimeout(this.retryTimer), this.retryTimer = null);
                }, F.prototype.notifyState = function(m) {
                  var x = this, L, U, W = m.state, Q = W === "disconnected" && (this.state === this.states.connected || this.state === this.states.synchronizing || m.retryImmediately || this.state === this.states.connecting && m.error && u.default.isTokenErr(m.error) && !(this.errorReason && u.default.isTokenErr(this.errorReason)));
                  if (o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.notifyState()", "new state: " + W + (Q ? "; will retry connection immediately" : "")), W != this.state.state && (this.cancelTransitionTimer(), this.cancelRetryTimer(), this.checkSuspendTimer(m.state), (W === "suspended" || W === "connected") && (this.disconnectedRetryCount = 0), !this.state.terminal)) {
                    var J = this.states[m.state], $ = J.retryDelay;
                    J.state === "disconnected" && (this.disconnectedRetryCount++, $ = T.getRetryTime(J.retryDelay, this.disconnectedRetryCount));
                    var Z = new d.default(this.state.state, J.state, $, m.error || ((U = (L = S.default)[J.state]) === null || U === void 0 ? void 0 : U.call(L)));
                    if (Q) {
                      var et = function() {
                        x.state === x.states.disconnected && (x.lastAutoReconnectAttempt = T.now(), x.requestState({ state: "connecting" }));
                      }, X = this.lastAutoReconnectAttempt && T.now() - this.lastAutoReconnectAttempt + 1;
                      X && X < 1e3 ? (o.default.logAction(o.default.LOG_MICRO, "ConnectionManager.notifyState()", "Last reconnect attempt was only " + X + "ms ago, waiting another " + (1e3 - X) + "ms before trying again"), setTimeout(et, 1e3 - X)) : I.default.Config.nextTick(et);
                    } else
                      (W === "disconnected" || W === "suspended") && this.startRetryTimer($);
                    (W === "disconnected" && !Q || W === "suspended" || J.terminal) && I.default.Config.nextTick(function() {
                      x.disconnectAllTransports();
                    }), W == "connected" && !this.activeProtocol && o.default.logAction(o.default.LOG_ERROR, "ConnectionManager.notifyState()", "Broken invariant: attempted to go into connected state, but there is no active protocol"), this.enactStateChange(Z), this.state.sendEvents ? this.sendQueuedMessages() : this.state.queueEvents || (this.realtime.channels.propogateConnectionInterruption(W, Z.reason), this.failQueuedMessages(Z.reason));
                  }
                }, F.prototype.requestState = function(m) {
                  var x = this, L, U, W = m.state;
                  if (o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.requestState()", "requested state: " + W + "; current state: " + this.state.state), W != this.state.state && (this.cancelTransitionTimer(), this.cancelRetryTimer(), this.checkSuspendTimer(W), !(W == "connecting" && this.state.state == "connected") && !(W == "closing" && this.state.state == "closed"))) {
                    var Q = this.states[W], J = new d.default(this.state.state, Q.state, null, m.error || ((U = (L = S.default)[Q.state]) === null || U === void 0 ? void 0 : U.call(L)));
                    this.enactStateChange(J), W == "connecting" && I.default.Config.nextTick(function() {
                      x.startConnect();
                    }), W == "closing" && this.closeImpl();
                  }
                }, F.prototype.startConnect = function() {
                  var m = this;
                  if (this.state !== this.states.connecting) {
                    o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.startConnect()", "Must be in connecting state to connect, but was " + this.state.state);
                    return;
                  }
                  var x = this.realtime.auth, L = ++this.connectCounter, U = function() {
                    m.checkConnectionStateFreshness(), m.getTransportParams(function(Q) {
                      if (Q.mode === "recover" && Q.options.recover) {
                        var J = B(Q.options.recover);
                        J && m.realtime.channels.recoverChannels(J.channelSerials);
                      }
                      L === m.connectCounter && m.connectImpl(Q, L);
                    });
                  };
                  if (o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.startConnect()", "starting connection"), this.startSuspendTimer(), this.startTransitionTimer(this.states.connecting), x.method === "basic")
                    U();
                  else {
                    var W = function(Q) {
                      L === m.connectCounter && (Q ? m.actOnErrorFromAuthorize(Q) : U());
                    };
                    this.errorReason && u.default.isTokenErr(this.errorReason) ? x._forceNewToken(null, null, W) : x._ensureValidAuthCredentials(!1, W);
                  }
                }, F.prototype.connectImpl = function(m, x) {
                  var L = this.state.state;
                  L !== this.states.connecting.state && L !== this.states.connected.state ? o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.connectImpl()", "Must be in connecting state to connect (or connected to upgrade), but was " + L) : this.pendingTransports.length ? o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.connectImpl()", "Transports " + this.pendingTransports[0].toString() + " currently pending; taking no action") : L == this.states.connected.state ? this.upgradeIfNeeded(m) : this.transports.length > 1 && this.getTransportPreference() ? this.connectPreference(m, x) : this.connectBase(m, x);
                }, F.prototype.connectPreference = function(m, x) {
                  var L = this, U = this.getTransportPreference(), W = !1;
                  T.arrIn(this.transports, U) || (this.unpersistTransportPreference(), this.connectImpl(m, x)), o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.connectPreference()", "Trying to connect with stored transport preference " + U);
                  var Q = setTimeout(function() {
                    W = !0, L.state.state !== L.states.connected.state && (o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.connectPreference()", "Shortcircuit connection attempt with " + U + " failed; clearing preference and trying from scratch"), L.disconnectAllTransports(), L.unpersistTransportPreference()), L.connectImpl(m, x);
                  }, this.options.timeouts.preferenceConnectTimeout);
                  m.host = this.httpHosts[0], this.tryATransport(m, U, function(J, $) {
                    clearTimeout(Q), W && $ ? ($.off(), $.disconnect(), T.arrDeleteValue(L.pendingTransports, $)) : !$ && !J && (L.unpersistTransportPreference(), L.connectImpl(m, x));
                  });
                }, F.prototype.connectBase = function(m, x) {
                  var L = this, U = function(Z) {
                    L.notifyState({ state: L.states.connecting.failState, error: Z });
                  }, W = this.httpHosts.slice(), Q = function(Z, et) {
                    x === L.connectCounter && !et && !Z && $();
                  };
                  o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.connectBase()", "Trying to connect with base transport " + this.baseTransport);
                  var J = W.shift();
                  if (!J) {
                    U(new A.default("Unable to connect (no available host)", 80003, 404));
                    return;
                  }
                  m.host = J;
                  var $ = function() {
                    if (!W.length) {
                      U(new A.default("Unable to connect (and no more fallback hosts to try)", 80003, 404));
                      return;
                    }
                    if (!L.realtime.http.checkConnectivity) {
                      U(new A.PartialErrorInfo("Internal error: Http.checkConnectivity not set", null, 500));
                      return;
                    }
                    L.realtime.http.checkConnectivity(function(Z, et) {
                      if (x === L.connectCounter) {
                        if (Z) {
                          U(Z);
                          return;
                        }
                        if (!et) {
                          U(new A.default("Unable to connect (network unreachable)", 80003, 404));
                          return;
                        }
                        m.host = T.arrPopRandomElement(W), L.tryATransport(m, L.baseTransport, Q);
                      }
                    });
                  };
                  if (this.forceFallbackHost && W.length) {
                    this.forceFallbackHost = !1, $();
                    return;
                  }
                  this.tryATransport(m, this.baseTransport, Q);
                }, F.prototype.getUpgradePossibilities = function() {
                  var m = this.activeProtocol.getTransport().shortName, x = T.arrIndexOf(this.upgradeTransports, m);
                  return this.upgradeTransports.slice(x + 1);
                }, F.prototype.upgradeIfNeeded = function(m) {
                  var x = this, L = this.getUpgradePossibilities();
                  o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.upgradeIfNeeded()", "upgrade possibilities: " + I.default.Config.inspect(L)), L.length && T.arrForEach(L, function(U) {
                    var W = x.createTransportParams(m.host, "upgrade");
                    x.tryATransport(W, U, h);
                  });
                }, F.prototype.closeImpl = function() {
                  o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.closeImpl()", "closing connection"), this.cancelSuspendTimer(), this.startTransitionTimer(this.states.closing), T.safeArrForEach(this.pendingTransports, function(m) {
                    o.default.logAction(o.default.LOG_MICRO, "ConnectionManager.closeImpl()", "Closing pending transport: " + m), m && m.close();
                  }), T.safeArrForEach(this.proposedTransports, function(m) {
                    o.default.logAction(o.default.LOG_MICRO, "ConnectionManager.closeImpl()", "Disposing of proposed transport: " + m), m && m.dispose();
                  }), this.activeProtocol && (o.default.logAction(o.default.LOG_MICRO, "ConnectionManager.closeImpl()", "Closing active transport: " + this.activeProtocol.getTransport()), this.activeProtocol.getTransport().close()), this.notifyState({ state: "closed" });
                }, F.prototype.onAuthUpdated = function(m, x) {
                  var L = this, U;
                  switch (this.state.state) {
                    case "connected": {
                      if (o.default.logAction(o.default.LOG_MICRO, "ConnectionManager.onAuthUpdated()", "Sending AUTH message on active transport"), (this.pendingTransports.length || this.proposedTransports.length) && this.state !== this.states.synchronizing) {
                        this.disconnectAllTransports(
                          /* exceptActive: */
                          !0
                        );
                        var W = this.activeProtocol.getTransport().params;
                        I.default.Config.nextTick(function() {
                          L.state.state === "connected" && L.upgradeIfNeeded(W);
                        });
                      }
                      var Q = (U = this.activeProtocol) === null || U === void 0 ? void 0 : U.getTransport();
                      Q && Q.onAuthUpdated && Q.onAuthUpdated(m);
                      var J = w.default.fromValues({
                        action: i.AUTH,
                        auth: {
                          accessToken: m.token
                        }
                      });
                      this.send(J);
                      var $ = function() {
                        L.off(Z), x(null, m);
                      }, Z = function(X) {
                        X.current === "failed" && (L.off($), L.off(Z), x(X.reason || L.getStateError()));
                      };
                      this.once("connectiondetails", $), this.on("connectionstate", Z);
                      break;
                    }
                    case "connecting":
                      o.default.logAction(o.default.LOG_MICRO, "ConnectionManager.onAuthUpdated()", "Aborting current connection attempts in order to start again with the new auth details"), this.disconnectAllTransports();
                    default: {
                      o.default.logAction(o.default.LOG_MICRO, "ConnectionManager.onAuthUpdated()", "Connection state is " + this.state.state + "; waiting until either connected or failed");
                      var et = function(X) {
                        switch (X.current) {
                          case "connected":
                            L.off(et), x(null, m);
                            break;
                          case "failed":
                          case "closed":
                          case "suspended":
                            L.off(et), x(X.reason || L.getStateError());
                            break;
                        }
                      };
                      this.on("connectionstate", et), this.state.state === "connecting" ? this.startConnect() : this.requestState({ state: "connecting" });
                    }
                  }
                }, F.prototype.disconnectAllTransports = function(m) {
                  o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.disconnectAllTransports()", "Disconnecting all transports" + (m ? " except the active transport" : "")), this.connectCounter++, T.safeArrForEach(this.pendingTransports, function(x) {
                    o.default.logAction(o.default.LOG_MICRO, "ConnectionManager.disconnectAllTransports()", "Disconnecting pending transport: " + x), x && x.disconnect();
                  }), this.pendingTransports = [], T.safeArrForEach(this.proposedTransports, function(x) {
                    o.default.logAction(o.default.LOG_MICRO, "ConnectionManager.disconnectAllTransports()", "Disposing of proposed transport: " + x), x && x.dispose();
                  }), this.proposedTransports = [], this.activeProtocol && !m && (o.default.logAction(o.default.LOG_MICRO, "ConnectionManager.disconnectAllTransports()", "Disconnecting active transport: " + this.activeProtocol.getTransport()), this.activeProtocol.getTransport().disconnect());
                }, F.prototype.send = function(m, x, L) {
                  L = L || h;
                  var U = this.state;
                  if (U.sendEvents) {
                    o.default.logAction(o.default.LOG_MICRO, "ConnectionManager.send()", "sending event"), this.sendImpl(new M.PendingMessage(m, L));
                    return;
                  }
                  var W = x && U.queueEvents || U.forceQueueEvents;
                  if (!W) {
                    var Q = "rejecting event, queueEvent was " + x + ", state was " + U.state;
                    o.default.logAction(o.default.LOG_MICRO, "ConnectionManager.send()", Q), L(this.errorReason || new A.default(Q, 9e4, 400));
                    return;
                  }
                  o.default.shouldLog(o.default.LOG_MICRO) && o.default.logAction(o.default.LOG_MICRO, "ConnectionManager.send()", "queueing msg; " + w.default.stringify(m)), this.queue(m, L);
                }, F.prototype.sendImpl = function(m) {
                  var x = m.message;
                  m.ackRequired && !m.sendAttempted && (x.msgSerial = this.msgSerial++);
                  try {
                    this.activeProtocol.send(m);
                  } catch (L) {
                    o.default.logAction(o.default.LOG_ERROR, "ConnectionManager.sendImpl()", "Unexpected exception in transport.send(): " + L.stack);
                  }
                }, F.prototype.queue = function(m, x) {
                  o.default.logAction(o.default.LOG_MICRO, "ConnectionManager.queue()", "queueing event");
                  var L = this.queuedMessages.last(), U = this.options.maxMessageSize;
                  L && !L.sendAttempted && N(L.message, m, U) ? (L.merged || (L.callback = l.default.create([L.callback]), L.merged = !0), L.callback.push(x)) : this.queuedMessages.push(new M.PendingMessage(m, x));
                }, F.prototype.sendQueuedMessages = function() {
                  o.default.logAction(o.default.LOG_MICRO, "ConnectionManager.sendQueuedMessages()", "sending " + this.queuedMessages.count() + " queued messages");
                  for (var m; m = this.queuedMessages.shift(); )
                    this.sendImpl(m);
                }, F.prototype.queuePendingMessages = function(m) {
                  m && m.length && (o.default.logAction(o.default.LOG_MICRO, "ConnectionManager.queuePendingMessages()", "queueing " + m.length + " pending messages"), this.queuedMessages.prepend(m));
                }, F.prototype.failQueuedMessages = function(m) {
                  var x = this.queuedMessages.count();
                  x > 0 && (o.default.logAction(o.default.LOG_ERROR, "ConnectionManager.failQueuedMessages()", "failing " + x + " queued messages, err = " + T.inspectError(m)), this.queuedMessages.completeAllMessages(m));
                }, F.prototype.onChannelMessage = function(m, x) {
                  var L = this.activeProtocol && x === this.activeProtocol.getTransport(), U = T.arrIn(this.pendingTransports, x) && this.state == this.states.synchronizing;
                  L || U ? this.realtime.channels.onChannelMessage(m) : T.arrIndexOf([i.ACK, i.NACK, i.ERROR], m.action) > -1 ? this.realtime.channels.onChannelMessage(m) : o.default.logAction(o.default.LOG_MICRO, "ConnectionManager.onChannelMessage()", "received message " + JSON.stringify(m) + "on defunct transport; discarding");
                }, F.prototype.ping = function(m, x) {
                  var L = this;
                  if (m) {
                    o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.ping()", "transport = " + m);
                    var U = function() {
                      m.off("heartbeat", J), x(new A.default("Timeout waiting for heartbeat response", 5e4, 500));
                    }, W = T.now(), Q = T.cheapRandStr(), J = function(nt) {
                      if (nt === Q) {
                        m.off("heartbeat", J), clearTimeout($);
                        var it = T.now() - W;
                        x(null, it);
                      }
                    }, $ = setTimeout(U, this.options.timeouts.realtimeRequestTimeout);
                    m.on("heartbeat", J), m.ping(Q);
                    return;
                  }
                  if (this.state.state !== "connected") {
                    x(new A.default("Unable to ping service; not connected", 4e4, 400));
                    return;
                  }
                  var Z = !1, et = function(nt, it) {
                    L.off("transport.active", X), Z || (Z = !0, x(nt, it));
                  }, X = function() {
                    Z || (Z = !0, I.default.Config.nextTick(function() {
                      L.ping(null, x);
                    }));
                  };
                  this.on("transport.active", X), this.ping(this.activeProtocol.getTransport(), et);
                }, F.prototype.abort = function(m) {
                  this.activeProtocol.getTransport().fail(m);
                }, F.prototype.registerProposedTransport = function(m) {
                  this.proposedTransports.push(m);
                }, F.prototype.getTransportPreference = function() {
                  var m, x;
                  return this.transportPreference || e() && ((x = (m = I.default.WebStorage) === null || m === void 0 ? void 0 : m.get) === null || x === void 0 ? void 0 : x.call(m, D));
                }, F.prototype.persistTransportPreference = function(m) {
                  var x, L;
                  T.arrIn(b.default.upgradeTransports, m.shortName) && (this.transportPreference = m.shortName, e() && ((L = (x = I.default.WebStorage) === null || x === void 0 ? void 0 : x.set) === null || L === void 0 || L.call(x, D, m.shortName)));
                }, F.prototype.unpersistTransportPreference = function() {
                  var m, x;
                  this.transportPreference = null, e() && ((x = (m = I.default.WebStorage) === null || m === void 0 ? void 0 : m.remove) === null || x === void 0 || x.call(m, D));
                }, F.prototype.actOnErrorFromAuthorize = function(m) {
                  if (m.code === 40171)
                    this.notifyState({ state: "failed", error: m });
                  else if (m.code === 40102)
                    this.notifyState({ state: "failed", error: m });
                  else if (m.statusCode === t.default.Forbidden) {
                    var x = "Client configured authentication provider returned 403; failing the connection";
                    o.default.logAction(o.default.LOG_ERROR, "ConnectionManager.actOnErrorFromAuthorize()", x), this.notifyState({ state: "failed", error: new A.default(x, 80019, 403, m) });
                  } else {
                    var x = "Client configured authentication provider request failed";
                    o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.actOnErrorFromAuthorize", x), this.notifyState({ state: this.state.failState, error: new A.default(x, 80019, 401, m) });
                  }
                }, F.prototype.onConnectionDetailsUpdate = function(m, x) {
                  if (m) {
                    this.connectionDetails = m, m.maxMessageSize && (this.options.maxMessageSize = m.maxMessageSize);
                    var L = m.clientId;
                    if (L) {
                      var U = this.realtime.auth._uncheckedSetClientId(L);
                      if (U) {
                        o.default.logAction(o.default.LOG_ERROR, "ConnectionManager.onConnectionDetailsUpdate()", U.message), x.fail(U);
                        return;
                      }
                    }
                    var W = m.connectionStateTtl;
                    W && (this.connectionStateTtl = W), this.maxIdleInterval = m.maxIdleInterval, this.emit("connectiondetails", m);
                  }
                }, F.supportedTransports = {}, F;
              }(v.default)
            );
            p.default = z;
          }).call(this, f(13));
        },
        /* 36 */
        /***/
        function(H, p, f) {
          Object.defineProperty(p, "__esModule", { value: !0 });
          var g = f(0), a = g.__importDefault(f(7)), w = g.__importDefault(f(2)), T = (
            /** @class */
            function(M) {
              g.__extends(b, M);
              function b() {
                var I = M.call(this) || this;
                return I.messages = [], I;
              }
              return b.prototype.count = function() {
                return this.messages.length;
              }, b.prototype.push = function(I) {
                this.messages.push(I);
              }, b.prototype.shift = function() {
                return this.messages.shift();
              }, b.prototype.last = function() {
                return this.messages[this.messages.length - 1];
              }, b.prototype.copyAll = function() {
                return this.messages.slice();
              }, b.prototype.append = function(I) {
                this.messages.push.apply(this.messages, I);
              }, b.prototype.prepend = function(I) {
                this.messages.unshift.apply(this.messages, I);
              }, b.prototype.completeMessages = function(I, v, R) {
                w.default.logAction(w.default.LOG_MICRO, "MessageQueue.completeMessages()", "serial = " + I + "; count = " + v), R = R || null;
                var o = this.messages;
                if (o.length === 0)
                  throw new Error("MessageQueue.completeMessages(): completeMessages called on any empty MessageQueue");
                var d = o[0];
                if (d) {
                  var S = d.message.msgSerial, A = I + v;
                  if (A > S)
                    for (var u = o.splice(0, A - S), c = 0, l = u; c < l.length; c++) {
                      var r = l[c];
                      r.callback(R);
                    }
                  o.length == 0 && this.emit("idle");
                }
              }, b.prototype.completeAllMessages = function(I) {
                this.completeMessages(0, Number.MAX_SAFE_INTEGER || Number.MAX_VALUE, I);
              }, b.prototype.resetSendAttempted = function() {
                for (var I = 0, v = this.messages; I < v.length; I++) {
                  var R = v[I];
                  R.sendAttempted = !1;
                }
              }, b.prototype.clear = function() {
                w.default.logAction(w.default.LOG_MICRO, "MessageQueue.clear()", "clearing " + this.messages.length + " messages"), this.messages = [], this.emit("idle");
              }, b;
            }(a.default)
          );
          p.default = T;
        },
        /* 37 */
        /***/
        function(H, p, f) {
          Object.defineProperty(p, "__esModule", { value: !0 });
          var g = (
            /** @class */
            function() {
              function a(w, T, M, b) {
                this.previous = w, this.current = T, M && (this.retryIn = M), b && (this.reason = b);
              }
              return a;
            }()
          );
          p.default = g;
        },
        /* 38 */
        /***/
        function(H, p, f) {
          Object.defineProperty(p, "__esModule", { value: !0 });
          var g = f(0), a = g.__importDefault(f(10)), w = g.__importDefault(f(7)), T = g.__importStar(f(1)), M = g.__importDefault(f(33)), b = g.__importDefault(f(2)), I = g.__importDefault(f(54)), v = g.__importDefault(f(9)), R = g.__importDefault(f(39)), o = g.__importStar(f(4)), d = g.__importDefault(f(15)), S = g.__importDefault(f(20)), A = a.default.Action, u = function() {
          };
          function c(r) {
            if (r && "params" in r && !T.isObject(r.params))
              return new o.default("options.params must be an object", 4e4, 400);
            if (r && "modes" in r) {
              if (!T.isArray(r.modes))
                return new o.default("options.modes must be an array", 4e4, 400);
              for (var n = 0; n < r.modes.length; n++) {
                var t = r.modes[n];
                if (!t || typeof t != "string" || !T.arrIn(a.default.channelModes, String.prototype.toUpperCase.call(t)))
                  return new o.default("Invalid channel mode: " + t, 4e4, 400);
              }
            }
          }
          var l = (
            /** @class */
            function(r) {
              g.__extends(n, r);
              function n(t, e, s) {
                var i = r.call(this, t, e, s) || this;
                return i.retryCount = 0, i.history = function(h, D) {
                  if (b.default.logAction(b.default.LOG_MICRO, "RealtimeChannel.history()", "channel = " + this.name), D === void 0)
                    if (typeof h == "function")
                      D = h, h = null;
                    else {
                      if (this.rest.options.promises)
                        return T.promisify(this, "history", arguments);
                      D = u;
                    }
                  if (h && h.untilAttach) {
                    if (this.state !== "attached") {
                      D(new o.default("option untilAttach requires the channel to be attached", 4e4, 400));
                      return;
                    }
                    if (!this.properties.attachSerial) {
                      D(new o.default("untilAttach was specified and channel is attached, but attachSerial is not defined", 4e4, 400));
                      return;
                    }
                    delete h.untilAttach, h.from_serial = this.properties.attachSerial;
                  }
                  M.default.prototype._history.call(this, h, D);
                }, i.whenState = function(h, D) {
                  return w.default.prototype.whenState.call(i, h, i.state, D);
                }, b.default.logAction(b.default.LOG_MINOR, "RealtimeChannel()", "started; name = " + e), i.realtime = t, i.presence = new I.default(i), i.connectionManager = t.connection.connectionManager, i.state = "initialized", i.subscriptions = new w.default(), i.syncChannelSerial = void 0, i.properties = {
                  attachSerial: void 0,
                  channelSerial: void 0
                }, i.setOptions(s), i.errorReason = null, i._requestedFlags = null, i._mode = null, i._attachResume = !1, i._decodingContext = {
                  channelOptions: i.channelOptions,
                  plugins: t.options.plugins || {},
                  baseEncodedPreviousPayload: void 0
                }, i._lastPayload = {
                  messageId: null,
                  protocolMessageChannelSerial: null,
                  decodeFailureRecoveryInProgress: null
                }, i._allChannelChanges = new w.default(), i;
              }
              return n.prototype.invalidStateError = function() {
                return new o.default("Channel operation failed as channel state is " + this.state, 90001, 400, this.errorReason || void 0);
              }, n.processListenerArgs = function(t) {
                return t = Array.prototype.slice.call(t), typeof t[0] == "function" && t.unshift(null), t[t.length - 1] == null && t.pop(), t;
              }, n.prototype.setOptions = function(t, e) {
                if (!e && this.rest.options.promises)
                  return T.promisify(this, "setOptions", arguments);
                var s = e || function(h) {
                  h && b.default.logAction(b.default.LOG_ERROR, "RealtimeChannel.setOptions()", "Set options failed: " + h.toString());
                }, i = c(t);
                if (i) {
                  s(i);
                  return;
                }
                M.default.prototype.setOptions.call(this, t), this._decodingContext && (this._decodingContext.channelOptions = this.channelOptions), this._shouldReattachToSetOptions(t) ? (this.attachImpl(), this._allChannelChanges.once(["attached", "update", "detached", "failed"], function(h) {
                  switch (this.event) {
                    case "update":
                    case "attached":
                      s == null || s(null);
                      return;
                    default:
                      s == null || s(h.reason);
                      return;
                  }
                })) : s();
              }, n.prototype._shouldReattachToSetOptions = function(t) {
                if (!(this.state === "attached" || this.state === "attaching"))
                  return !1;
                if (t != null && t.params) {
                  var e = Object.assign({}, t.params);
                  if (delete e.agent, Object.keys(e).length !== 0 && !this.params || this.params && !T.shallowEquals(this.params, e))
                    return !0;
                }
                return !!(t != null && t.modes && (!this.modes || !T.arrEquals(t.modes, this.modes)));
              }, n.prototype.publish = function() {
                for (var t = this, e = [], s = 0; s < arguments.length; s++)
                  e[s] = arguments[s];
                var i = e[0], h = e.length, D = e[h - 1];
                if (typeof D != "function") {
                  if (this.realtime.options.promises)
                    return T.promisify(this, "publish", arguments);
                  D = u, ++h;
                }
                if (!this.connectionManager.activeState()) {
                  D(this.connectionManager.getError());
                  return;
                }
                if (h == 2)
                  if (T.isObject(i))
                    i = [v.default.fromValues(i)];
                  else if (T.isArray(i))
                    i = v.default.fromValuesArray(i);
                  else
                    throw new o.default("The single-argument form of publish() expects a message object or an array of message objects", 40013, 400);
                else
                  i = [v.default.fromValues({ name: e[0], data: e[1] })];
                var P = this.realtime.options.maxMessageSize;
                v.default.encodeArray(i, this.channelOptions, function(E) {
                  if (E) {
                    D(E);
                    return;
                  }
                  var O = v.default.getMessagesSize(i);
                  if (O > P) {
                    D(new o.default("Maximum size of messages that can be published at once exceeded ( was " + O + " bytes; limit is " + P + " bytes)", 40009, 400));
                    return;
                  }
                  t.__publish(i, D);
                });
              }, n.prototype.__publish = function(t, e) {
                b.default.logAction(b.default.LOG_MICRO, "RealtimeChannel.publish()", "message count = " + t.length);
                var s = this.state;
                switch (s) {
                  case "failed":
                  case "suspended":
                    e(o.default.fromValues(this.invalidStateError()));
                    break;
                  default: {
                    b.default.logAction(b.default.LOG_MICRO, "RealtimeChannel.publish()", "sending message; channel state is " + s);
                    var i = new a.default();
                    i.action = A.MESSAGE, i.channel = this.name, i.messages = t, this.sendMessage(i, e);
                    break;
                  }
                }
              }, n.prototype.onEvent = function(t) {
                b.default.logAction(b.default.LOG_MICRO, "RealtimeChannel.onEvent()", "received message");
                for (var e = this.subscriptions, s = 0; s < t.length; s++) {
                  var i = t[s];
                  e.emit(i.name, i);
                }
              }, n.prototype.attach = function(t, e) {
                var s;
                if (typeof t == "function" ? (e = t, s = null) : s = t, !e) {
                  if (this.realtime.options.promises)
                    return T.promisify(this, "attach", arguments);
                  e = function(i) {
                    i && b.default.logAction(b.default.LOG_MAJOR, "RealtimeChannel.attach()", "Channel attach failed: " + i.toString());
                  };
                }
                if (s)
                  b.default.deprecated("channel.attach() with flags", "channel.setOptions() with channelOptions.params"), this._requestedFlags = s;
                else if (this.state === "attached") {
                  e(null, null);
                  return;
                }
                this._attach(!1, null, e);
              }, n.prototype._attach = function(t, e, s) {
                s || (s = function(h) {
                  h && b.default.logAction(b.default.LOG_ERROR, "RealtimeChannel._attach()", "Channel attach failed: " + h.toString());
                });
                var i = this.connectionManager;
                if (!i.activeState()) {
                  s(i.getError());
                  return;
                }
                (this.state !== "attaching" || t) && this.requestState("attaching", e), this.once(function(h) {
                  switch (this.event) {
                    case "attached":
                      s == null || s(null, h);
                      break;
                    case "detached":
                    case "suspended":
                    case "failed":
                      s == null || s(h.reason || i.getError() || new o.default("Unable to attach; reason unknown; state = " + this.event, 9e4, 500));
                      break;
                    case "detaching":
                      s == null || s(new o.default("Attach request superseded by a subsequent detach request", 9e4, 409));
                      break;
                  }
                });
              }, n.prototype.attachImpl = function() {
                b.default.logAction(b.default.LOG_MICRO, "RealtimeChannel.attachImpl()", "sending ATTACH message");
                var t = a.default.fromValues({
                  action: A.ATTACH,
                  channel: this.name,
                  params: this.channelOptions.params,
                  // RTL4c1: Includes the channel serial to resume from a previous message
                  // or attachment.
                  channelSerial: this.properties.channelSerial
                });
                this._requestedFlags ? t.encodeModesToFlags(this._requestedFlags) : this.channelOptions.modes && t.encodeModesToFlags(T.allToUpperCase(this.channelOptions.modes)), this._attachResume && t.setFlag("ATTACH_RESUME"), this._lastPayload.decodeFailureRecoveryInProgress && (t.channelSerial = this._lastPayload.protocolMessageChannelSerial), this.sendMessage(t, u);
              }, n.prototype.detach = function(t) {
                if (!t) {
                  if (this.realtime.options.promises)
                    return T.promisify(this, "detach", arguments);
                  t = u;
                }
                var e = this.connectionManager;
                if (!e.activeState()) {
                  t(e.getError());
                  return;
                }
                switch (this.state) {
                  case "suspended":
                    this.notifyState("detached"), t();
                    break;
                  case "detached":
                    t();
                    break;
                  case "failed":
                    t(new o.default("Unable to detach; channel state = failed", 90001, 400));
                    break;
                  default:
                    this.requestState("detaching");
                  case "detaching":
                    this.once(function(s) {
                      switch (this.event) {
                        case "detached":
                          t();
                          break;
                        case "attached":
                        case "suspended":
                        case "failed":
                          t(s.reason || e.getError() || new o.default("Unable to detach; reason unknown; state = " + this.event, 9e4, 500));
                          break;
                        case "attaching":
                          t(new o.default("Detach request superseded by a subsequent attach request", 9e4, 409));
                          break;
                      }
                    });
                }
              }, n.prototype.detachImpl = function(t) {
                b.default.logAction(b.default.LOG_MICRO, "RealtimeChannel.detach()", "sending DETACH message");
                var e = a.default.fromValues({ action: A.DETACH, channel: this.name });
                this.sendMessage(e, t || u);
              }, n.prototype.subscribe = function() {
                for (var t = [], e = 0; e < arguments.length; e++)
                  t[e] = arguments[e];
                var s = n.processListenerArgs(t), i = s[0], h = s[1], D = s[2];
                if (!D && this.realtime.options.promises)
                  return T.promisify(this, "subscribe", [i, h]);
                if (this.state === "failed") {
                  D == null || D(o.default.fromValues(this.invalidStateError()));
                  return;
                }
                return i && typeof i == "object" && !Array.isArray(i) ? this._subscribeFilter(i, h) : this.subscriptions.on(i, h), this.attach(D || u);
              }, n.prototype._subscribeFilter = function(t, e) {
                var s = function(i) {
                  var h, D, P, E, O, y, C = {
                    name: i.name,
                    refTimeserial: (D = (h = i.extras) === null || h === void 0 ? void 0 : h.ref) === null || D === void 0 ? void 0 : D.timeserial,
                    refType: (E = (P = i.extras) === null || P === void 0 ? void 0 : P.ref) === null || E === void 0 ? void 0 : E.type,
                    isRef: !!(!((y = (O = i.extras) === null || O === void 0 ? void 0 : O.ref) === null || y === void 0) && y.timeserial),
                    clientId: i.clientId
                  };
                  Object.entries(t).find(function(N) {
                    var B = N[0], j = N[1];
                    return j !== void 0 ? C[B] !== j : !1;
                  }) || e(i);
                };
                this._addFilteredSubscription(t, e, s), this.subscriptions.on(s);
              }, n.prototype._addFilteredSubscription = function(t, e, s) {
                var i;
                if (this.filteredSubscriptions || (this.filteredSubscriptions = /* @__PURE__ */ new Map()), this.filteredSubscriptions.has(e)) {
                  var h = this.filteredSubscriptions.get(e);
                  h.set(t, ((i = h == null ? void 0 : h.get(t)) === null || i === void 0 ? void 0 : i.concat(s)) || [s]);
                } else
                  this.filteredSubscriptions.set(e, /* @__PURE__ */ new Map([[t, [s]]]));
              }, n.prototype._getAndDeleteFilteredSubscriptions = function(t, e) {
                var s = this;
                if (!this.filteredSubscriptions)
                  return [];
                if (!e && t)
                  return Array.from(this.filteredSubscriptions.entries()).map(function(P) {
                    var E, O = P[0], y = P[1], C = y.get(t);
                    return y.delete(t), y.size === 0 && ((E = s.filteredSubscriptions) === null || E === void 0 || E.delete(O)), C;
                  }).reduce(function(P, E) {
                    var O;
                    return E ? (O = P).concat.apply(O, E) : P;
                  }, []);
                if (!e || !this.filteredSubscriptions.has(e))
                  return [];
                var i = this.filteredSubscriptions.get(e);
                if (!t) {
                  var h = Array.from(i.values()).reduce(function(P, E) {
                    return P.concat.apply(P, E);
                  }, []);
                  return this.filteredSubscriptions.delete(e), h;
                }
                var D = i.get(t);
                return i.delete(t), D || [];
              }, n.prototype.unsubscribe = function() {
                for (var t = this, e, s = [], i = 0; i < arguments.length; i++)
                  s[i] = arguments[i];
                var h = n.processListenerArgs(s), D = h[0], P = h[1];
                if (typeof D == "object" && !P || !((e = this.filteredSubscriptions) === null || e === void 0) && e.has(P)) {
                  this._getAndDeleteFilteredSubscriptions(D, P).forEach(function(E) {
                    return t.subscriptions.off(E);
                  });
                  return;
                }
                this.subscriptions.off(D, P);
              }, n.prototype.sync = function() {
                switch (this.state) {
                  case "initialized":
                  case "detaching":
                  case "detached":
                    throw new o.PartialErrorInfo("Unable to sync to channel; not attached", 4e4);
                }
                var t = this.connectionManager;
                if (!t.activeState())
                  throw t.getError();
                var e = a.default.fromValues({ action: A.SYNC, channel: this.name });
                this.syncChannelSerial && (e.channelSerial = this.syncChannelSerial), t.send(e);
              }, n.prototype.sendMessage = function(t, e) {
                this.connectionManager.send(t, this.realtime.options.queueMessages, e);
              }, n.prototype.sendPresence = function(t, e) {
                var s = a.default.fromValues({
                  action: A.PRESENCE,
                  channel: this.name,
                  presence: T.isArray(t) ? d.default.fromValuesArray(t) : [d.default.fromValues(t)]
                });
                this.sendMessage(s, e);
              }, n.prototype.onMessage = function(t) {
                (t.action === A.ATTACHED || t.action === A.MESSAGE || t.action === A.PRESENCE) && this.setChannelSerial(t.channelSerial);
                var e, s = !1;
                switch (t.action) {
                  case A.ATTACHED: {
                    this.properties.attachSerial = t.channelSerial, this._mode = t.getMode(), this.params = t.params || {};
                    var i = t.decodeModesFromFlags();
                    this.modes = i && T.allToLowerCase(i) || void 0;
                    var h = t.hasFlag("RESUMED"), D = t.hasFlag("HAS_PRESENCE"), P = t.hasFlag("HAS_BACKLOG");
                    if (this.state === "attached") {
                      h || this.presence.onAttached(D);
                      var E = new R.default(this.state, this.state, h, P, t.error);
                      this._allChannelChanges.emit("update", E), (!h || this.channelOptions.updateOnAttached) && this.emit("update", E);
                    } else
                      this.state === "detaching" ? this.checkPendingState() : this.notifyState("attached", t.error, h, D, P);
                    break;
                  }
                  case A.DETACHED: {
                    var O = t.error ? o.default.fromValues(t.error) : new o.default("Channel detached", 90001, 404);
                    this.state === "detaching" ? this.notifyState("detached", O) : this.state === "attaching" ? this.notifyState("suspended", O) : this.requestState("attaching", O);
                    break;
                  }
                  case A.SYNC:
                    if (s = !0, e = this.syncChannelSerial = t.channelSerial, !t.presence)
                      break;
                  case A.PRESENCE: {
                    for (var y = t.presence, C = t.id, N = t.connectionId, B = t.timestamp, j = this.channelOptions, z = void 0, _ = 0; _ < y.length; _++)
                      try {
                        z = y[_], d.default.decode(z, j), z.connectionId || (z.connectionId = N), z.timestamp || (z.timestamp = B), z.id || (z.id = C + ":" + _);
                      } catch (W) {
                        b.default.logAction(b.default.LOG_ERROR, "RealtimeChannel.onMessage()", W.toString());
                      }
                    this.presence.setPresence(y, s, e);
                    break;
                  }
                  case A.MESSAGE: {
                    if (this.state !== "attached") {
                      b.default.logAction(b.default.LOG_MAJOR, "RealtimeChannel.onMessage()", 'Message "' + t.id + '" skipped as this channel "' + this.name + '" state is not "attached" (state is "' + this.state + '").');
                      return;
                    }
                    var F = t.messages, m = F[0], x = F[F.length - 1], C = t.id, N = t.connectionId, B = t.timestamp;
                    if (m.extras && m.extras.delta && m.extras.delta.from !== this._lastPayload.messageId) {
                      var L = 'Delta message decode failure - previous message not available for message "' + t.id + '" on this channel "' + this.name + '".';
                      b.default.logAction(b.default.LOG_ERROR, "RealtimeChannel.onMessage()", L), this._startDecodeFailureRecovery(new o.default(L, 40018, 400));
                      break;
                    }
                    for (var _ = 0; _ < F.length; _++) {
                      var L = F[_];
                      try {
                        v.default.decode(L, this._decodingContext);
                      } catch (et) {
                        switch (b.default.logAction(b.default.LOG_ERROR, "RealtimeChannel.onMessage()", et.toString()), et.code) {
                          case 40018:
                            this._startDecodeFailureRecovery(et);
                            return;
                          case 40019:
                          case 40021:
                            this.notifyState("failed", et);
                            return;
                        }
                      }
                      L.connectionId || (L.connectionId = N), L.timestamp || (L.timestamp = B), L.id || (L.id = C + ":" + _);
                    }
                    this._lastPayload.messageId = x.id, this._lastPayload.protocolMessageChannelSerial = t.channelSerial, this.onEvent(F);
                    break;
                  }
                  case A.ERROR: {
                    var U = t.error;
                    U && U.code == 80016 ? this.checkPendingState() : this.notifyState("failed", o.default.fromValues(U));
                    break;
                  }
                  default:
                    b.default.logAction(b.default.LOG_ERROR, "RealtimeChannel.onMessage()", "Fatal protocol error: unrecognised action (" + t.action + ")"), this.connectionManager.abort(S.default.unknownChannelErr());
                }
              }, n.prototype._startDecodeFailureRecovery = function(t) {
                var e = this;
                this._lastPayload.decodeFailureRecoveryInProgress || (b.default.logAction(b.default.LOG_MAJOR, "RealtimeChannel.onMessage()", "Starting decode failure recovery process."), this._lastPayload.decodeFailureRecoveryInProgress = !0, this._attach(!0, t, function() {
                  e._lastPayload.decodeFailureRecoveryInProgress = !1;
                }));
              }, n.prototype.onAttached = function() {
                b.default.logAction(b.default.LOG_MINOR, "RealtimeChannel.onAttached", "activating channel; name = " + this.name);
              }, n.prototype.notifyState = function(t, e, s, i, h) {
                if (b.default.logAction(b.default.LOG_MICRO, "RealtimeChannel.notifyState", "name = " + this.name + ", current state = " + this.state + ", notifying state " + t), this.clearStateTimer(), T.arrIn(["detached", "suspended", "failed"], t) && (this.properties.channelSerial = null), t !== this.state) {
                  this.presence.actOnChannelState(t, i, e), t === "suspended" && this.connectionManager.state.sendEvents ? this.startRetryTimer() : this.cancelRetryTimer(), e && (this.errorReason = e);
                  var D = new R.default(this.state, t, s, h, e), P = t === "failed" ? b.default.LOG_ERROR : b.default.LOG_MAJOR;
                  b.default.logAction(P, 'Channel state for channel "' + this.name + '"', t + (e ? "; reason: " + e : "")), t !== "attaching" && t !== "suspended" && (this.retryCount = 0), t === "attached" && this.onAttached(), t === "attached" ? this._attachResume = !0 : (t === "detaching" || t === "failed") && (this._attachResume = !1), this.state = t, this._allChannelChanges.emit(t, D), this.emit(t, D);
                }
              }, n.prototype.requestState = function(t, e) {
                b.default.logAction(b.default.LOG_MINOR, "RealtimeChannel.requestState", "name = " + this.name + ", state = " + t), this.notifyState(t, e), this.checkPendingState();
              }, n.prototype.checkPendingState = function() {
                var t = this.connectionManager.state;
                if (!(t.sendEvents || t.forceQueueEvents)) {
                  b.default.logAction(b.default.LOG_MINOR, "RealtimeChannel.checkPendingState", "sendEvents is false; state is " + this.connectionManager.state.state);
                  return;
                }
                switch (b.default.logAction(b.default.LOG_MINOR, "RealtimeChannel.checkPendingState", "name = " + this.name + ", state = " + this.state), this.state) {
                  case "attaching":
                    this.startStateTimerIfNotRunning(), this.attachImpl();
                    break;
                  case "detaching":
                    this.startStateTimerIfNotRunning(), this.detachImpl();
                    break;
                  case "attached":
                    this.sync();
                    break;
                }
              }, n.prototype.timeoutPendingState = function() {
                switch (this.state) {
                  case "attaching": {
                    var t = new o.default("Channel attach timed out", 90007, 408);
                    this.notifyState("suspended", t);
                    break;
                  }
                  case "detaching": {
                    var t = new o.default("Channel detach timed out", 90007, 408);
                    this.notifyState("attached", t);
                    break;
                  }
                  default:
                    this.checkPendingState();
                    break;
                }
              }, n.prototype.startStateTimerIfNotRunning = function() {
                var t = this;
                this.stateTimer || (this.stateTimer = setTimeout(function() {
                  b.default.logAction(b.default.LOG_MINOR, "RealtimeChannel.startStateTimerIfNotRunning", "timer expired"), t.stateTimer = null, t.timeoutPendingState();
                }, this.realtime.options.timeouts.realtimeRequestTimeout));
              }, n.prototype.clearStateTimer = function() {
                var t = this.stateTimer;
                t && (clearTimeout(t), this.stateTimer = null);
              }, n.prototype.startRetryTimer = function() {
                var t = this;
                if (!this.retryTimer) {
                  this.retryCount++;
                  var e = T.getRetryTime(this.realtime.options.timeouts.channelRetryTimeout, this.retryCount);
                  this.retryTimer = setTimeout(function() {
                    t.state === "suspended" && t.connectionManager.state.sendEvents && (t.retryTimer = null, b.default.logAction(b.default.LOG_MINOR, "RealtimeChannel retry timer expired", "attempting a new attach"), t.requestState("attaching"));
                  }, e);
                }
              }, n.prototype.cancelRetryTimer = function() {
                this.retryTimer && (clearTimeout(this.retryTimer), this.retryTimer = null);
              }, n.prototype.getReleaseErr = function() {
                var t = this.state;
                return t === "initialized" || t === "detached" || t === "failed" ? null : new o.default("Can only release a channel in a state where there is no possibility of further updates from the server being received (initialized, detached, or failed); was " + t, 90001, 400);
              }, n.prototype.setChannelSerial = function(t) {
                b.default.logAction(b.default.LOG_MICRO, "RealtimeChannel.setChannelSerial()", "Updating channel serial; serial = " + t + "; previous = " + this.properties.channelSerial), t && (this.properties.channelSerial = t);
              }, n;
            }(M.default)
          );
          p.default = l;
        },
        /* 39 */
        /***/
        function(H, p, f) {
          Object.defineProperty(p, "__esModule", { value: !0 });
          var g = (
            /** @class */
            function() {
              function a(w, T, M, b, I) {
                this.previous = w, this.current = T, T === "attached" && (this.resumed = M, this.hasBacklog = b), I && (this.reason = I);
              }
              return a;
            }()
          );
          p.default = g;
        },
        /* 40 */
        /***/
        function(H, p, f) {
          (function(g, a) {
            H.exports = a(f(6));
          })(this, function(g) {
            return function() {
              var a = g, w = a.lib, T = w.WordArray, M = w.Hasher, b = a.algo, I = [], v = b.SHA1 = M.extend({
                _doReset: function() {
                  this._hash = new T.init([
                    1732584193,
                    4023233417,
                    2562383102,
                    271733878,
                    3285377520
                  ]);
                },
                _doProcessBlock: function(R, o) {
                  for (var d = this._hash.words, S = d[0], A = d[1], u = d[2], c = d[3], l = d[4], r = 0; r < 80; r++) {
                    if (r < 16)
                      I[r] = R[o + r] | 0;
                    else {
                      var n = I[r - 3] ^ I[r - 8] ^ I[r - 14] ^ I[r - 16];
                      I[r] = n << 1 | n >>> 31;
                    }
                    var t = (S << 5 | S >>> 27) + l + I[r];
                    r < 20 ? t += (A & u | ~A & c) + 1518500249 : r < 40 ? t += (A ^ u ^ c) + 1859775393 : r < 60 ? t += (A & u | A & c | u & c) - 1894007588 : t += (A ^ u ^ c) - 899497514, l = c, c = u, u = A << 30 | A >>> 2, A = S, S = t;
                  }
                  d[0] = d[0] + S | 0, d[1] = d[1] + A | 0, d[2] = d[2] + u | 0, d[3] = d[3] + c | 0, d[4] = d[4] + l | 0;
                },
                _doFinalize: function() {
                  var R = this._data, o = R.words, d = this._nDataBytes * 8, S = R.sigBytes * 8;
                  return o[S >>> 5] |= 128 << 24 - S % 32, o[(S + 64 >>> 9 << 4) + 14] = Math.floor(d / 4294967296), o[(S + 64 >>> 9 << 4) + 15] = d, R.sigBytes = o.length * 4, this._process(), this._hash;
                },
                clone: function() {
                  var R = M.clone.call(this);
                  return R._hash = this._hash.clone(), R;
                }
              });
              a.SHA1 = M._createHelper(v), a.HmacSHA1 = M._createHmacHelper(v);
            }(), g.SHA1;
          });
        },
        /* 41 */
        /***/
        function(H, p, f) {
          Object.defineProperty(p, "__esModule", { value: !0 });
          function g(r) {
            if (r === void 0)
              return "undefined";
            var n, t;
            if (r instanceof ArrayBuffer ? (t = "ArrayBuffer", n = new DataView(r)) : r instanceof DataView && (t = "DataView", n = r), !n)
              return JSON.stringify(r);
            for (var e = [], s = 0; s < r.byteLength; s++) {
              if (s > 20) {
                e.push("...");
                break;
              }
              var i = n.getUint8(s).toString(16);
              i.length === 1 && (i = "0" + i), e.push(i);
            }
            return "<" + t + " " + e.join(" ") + ">";
          }
          function a(r, n, t) {
            for (var e = 0, s = t.length; e < s; e++) {
              var i = t.charCodeAt(e);
              if (i < 128) {
                r.setUint8(n++, i >>> 0 & 127 | 0);
                continue;
              }
              if (i < 2048) {
                r.setUint8(n++, i >>> 6 & 31 | 192), r.setUint8(n++, i >>> 0 & 63 | 128);
                continue;
              }
              if (i < 65536) {
                r.setUint8(n++, i >>> 12 & 15 | 224), r.setUint8(n++, i >>> 6 & 63 | 128), r.setUint8(n++, i >>> 0 & 63 | 128);
                continue;
              }
              if (i < 1114112) {
                r.setUint8(n++, i >>> 18 & 7 | 240), r.setUint8(n++, i >>> 12 & 63 | 128), r.setUint8(n++, i >>> 6 & 63 | 128), r.setUint8(n++, i >>> 0 & 63 | 128);
                continue;
              }
              throw new Error("bad codepoint " + i);
            }
          }
          function w(r, n, t) {
            for (var e = "", s = n, i = n + t; s < i; s++) {
              var h = r.getUint8(s);
              if (!(h & 128)) {
                e += String.fromCharCode(h);
                continue;
              }
              if ((h & 224) === 192) {
                e += String.fromCharCode((h & 15) << 6 | r.getUint8(++s) & 63);
                continue;
              }
              if ((h & 240) === 224) {
                e += String.fromCharCode((h & 15) << 12 | (r.getUint8(++s) & 63) << 6 | (r.getUint8(++s) & 63) << 0);
                continue;
              }
              if ((h & 248) === 240) {
                e += String.fromCharCode((h & 7) << 18 | (r.getUint8(++s) & 63) << 12 | (r.getUint8(++s) & 63) << 6 | (r.getUint8(++s) & 63) << 0);
                continue;
              }
              throw new Error("Invalid byte " + h.toString(16));
            }
            return e;
          }
          function T(r) {
            for (var n = 0, t = 0, e = r.length; t < e; t++) {
              var s = r.charCodeAt(t);
              if (s < 128) {
                n += 1;
                continue;
              }
              if (s < 2048) {
                n += 2;
                continue;
              }
              if (s < 65536) {
                n += 3;
                continue;
              }
              if (s < 1114112) {
                n += 4;
                continue;
              }
              throw new Error("bad codepoint " + s);
            }
            return n;
          }
          function M(r, n) {
            var t = l(r, n);
            if (t !== 0) {
              var e = new ArrayBuffer(t), s = new DataView(e);
              return c(r, s, 0, n), e;
            }
          }
          var b = 65536 * 65536, I = 1 / b;
          function v(r, n) {
            return n = n || 0, r.getInt32(n) * b + r.getUint32(n + 4);
          }
          function R(r, n) {
            return n = n || 0, r.getUint32(n) * b + r.getUint32(n + 4);
          }
          function o(r, n, t) {
            t < 9223372036854776e3 ? (r.setInt32(n, Math.floor(t * I)), r.setInt32(n + 4, t & -1)) : (r.setUint32(n, 2147483647), r.setUint32(n + 4, 2147483647));
          }
          function d(r, n, t) {
            t < 18446744073709552e3 ? (r.setUint32(n, Math.floor(t * I)), r.setInt32(n + 4, t & -1)) : (r.setUint32(n, 4294967295), r.setUint32(n + 4, 4294967295));
          }
          var S = (
            /** @class */
            function() {
              function r(n, t) {
                var e = this;
                this.map = function(s) {
                  for (var i = {}, h = 0; h < s; h++) {
                    var D = e.parse();
                    i[D] = e.parse();
                  }
                  return i;
                }, this.bin = function(s) {
                  var i = new ArrayBuffer(s);
                  return new Uint8Array(i).set(new Uint8Array(e.view.buffer, e.offset, s), 0), e.offset += s, i;
                }, this.buf = this.bin, this.str = function(s) {
                  var i = w(e.view, e.offset, s);
                  return e.offset += s, i;
                }, this.array = function(s) {
                  for (var i = new Array(s), h = 0; h < s; h++)
                    i[h] = e.parse();
                  return i;
                }, this.ext = function(s) {
                  return e.offset += s, {
                    type: e.view.getInt8(e.offset),
                    data: e.buf(s)
                  };
                }, this.parse = function() {
                  var s = e.view.getUint8(e.offset), i, h;
                  if (!(s & 128))
                    return e.offset++, s;
                  if ((s & 240) === 128)
                    return h = s & 15, e.offset++, e.map(h);
                  if ((s & 240) === 144)
                    return h = s & 15, e.offset++, e.array(h);
                  if ((s & 224) === 160)
                    return h = s & 31, e.offset++, e.str(h);
                  if ((s & 224) === 224)
                    return i = e.view.getInt8(e.offset), e.offset++, i;
                  switch (s) {
                    case 192:
                      return e.offset++, null;
                    case 193:
                      e.offset++;
                      return;
                    case 194:
                      return e.offset++, !1;
                    case 195:
                      return e.offset++, !0;
                    case 196:
                      return h = e.view.getUint8(e.offset + 1), e.offset += 2, e.bin(h);
                    case 197:
                      return h = e.view.getUint16(e.offset + 1), e.offset += 3, e.bin(h);
                    case 198:
                      return h = e.view.getUint32(e.offset + 1), e.offset += 5, e.bin(h);
                    case 199:
                      return h = e.view.getUint8(e.offset + 1), e.offset += 2, e.ext(h);
                    case 200:
                      return h = e.view.getUint16(e.offset + 1), e.offset += 3, e.ext(h);
                    case 201:
                      return h = e.view.getUint32(e.offset + 1), e.offset += 5, e.ext(h);
                    case 202:
                      return i = e.view.getFloat32(e.offset + 1), e.offset += 5, i;
                    case 203:
                      return i = e.view.getFloat64(e.offset + 1), e.offset += 9, i;
                    case 204:
                      return i = e.view.getUint8(e.offset + 1), e.offset += 2, i;
                    case 205:
                      return i = e.view.getUint16(e.offset + 1), e.offset += 3, i;
                    case 206:
                      return i = e.view.getUint32(e.offset + 1), e.offset += 5, i;
                    case 207:
                      return i = R(e.view, e.offset + 1), e.offset += 9, i;
                    case 208:
                      return i = e.view.getInt8(e.offset + 1), e.offset += 2, i;
                    case 209:
                      return i = e.view.getInt16(e.offset + 1), e.offset += 3, i;
                    case 210:
                      return i = e.view.getInt32(e.offset + 1), e.offset += 5, i;
                    case 211:
                      return i = v(e.view, e.offset + 1), e.offset += 9, i;
                    case 212:
                      return h = 1, e.offset++, e.ext(h);
                    case 213:
                      return h = 2, e.offset++, e.ext(h);
                    case 214:
                      return h = 4, e.offset++, e.ext(h);
                    case 215:
                      return h = 8, e.offset++, e.ext(h);
                    case 216:
                      return h = 16, e.offset++, e.ext(h);
                    case 217:
                      return h = e.view.getUint8(e.offset + 1), e.offset += 2, e.str(h);
                    case 218:
                      return h = e.view.getUint16(e.offset + 1), e.offset += 3, e.str(h);
                    case 219:
                      return h = e.view.getUint32(e.offset + 1), e.offset += 5, e.str(h);
                    case 220:
                      return h = e.view.getUint16(e.offset + 1), e.offset += 3, e.array(h);
                    case 221:
                      return h = e.view.getUint32(e.offset + 1), e.offset += 5, e.array(h);
                    case 222:
                      return h = e.view.getUint16(e.offset + 1), e.offset += 3, e.map(h);
                    case 223:
                      return h = e.view.getUint32(e.offset + 1), e.offset += 5, e.map(h);
                  }
                  throw new Error("Unknown type 0x" + s.toString(16));
                }, this.offset = t || 0, this.view = n;
              }
              return r;
            }()
          );
          function A(r) {
            var n = new DataView(r), t = new S(n), e = t.parse();
            if (t.offset !== r.byteLength)
              throw new Error(r.byteLength - t.offset + " trailing bytes");
            return e;
          }
          function u(r, n) {
            return Object.keys(r).filter(function(t) {
              var e = r[t], s = typeof e;
              return (!n || e != null) && (s !== "function" || !!e.toJSON);
            });
          }
          function c(r, n, t, e) {
            var s = typeof r;
            if (typeof r == "string") {
              var i = T(r);
              if (i < 32)
                return n.setUint8(t, i | 160), a(n, t + 1, r), 1 + i;
              if (i < 256)
                return n.setUint8(t, 217), n.setUint8(t + 1, i), a(n, t + 2, r), 2 + i;
              if (i < 65536)
                return n.setUint8(t, 218), n.setUint16(t + 1, i), a(n, t + 3, r), 3 + i;
              if (i < 4294967296)
                return n.setUint8(t, 219), n.setUint32(t + 1, i), a(n, t + 5, r), 5 + i;
            }
            if (ArrayBuffer.isView && ArrayBuffer.isView(r) && (r = r.buffer), r instanceof ArrayBuffer) {
              var h = r.byteLength;
              if (h < 256)
                return n.setUint8(t, 196), n.setUint8(t + 1, h), new Uint8Array(n.buffer).set(new Uint8Array(r), t + 2), 2 + h;
              if (h < 65536)
                return n.setUint8(t, 197), n.setUint16(t + 1, h), new Uint8Array(n.buffer).set(new Uint8Array(r), t + 3), 3 + h;
              if (h < 4294967296)
                return n.setUint8(t, 198), n.setUint32(t + 1, h), new Uint8Array(n.buffer).set(new Uint8Array(r), t + 5), 5 + h;
            }
            if (typeof r == "number") {
              if (Math.floor(r) !== r)
                return n.setUint8(t, 203), n.setFloat64(t + 1, r), 9;
              if (r >= 0) {
                if (r < 128)
                  return n.setUint8(t, r), 1;
                if (r < 256)
                  return n.setUint8(t, 204), n.setUint8(t + 1, r), 2;
                if (r < 65536)
                  return n.setUint8(t, 205), n.setUint16(t + 1, r), 3;
                if (r < 4294967296)
                  return n.setUint8(t, 206), n.setUint32(t + 1, r), 5;
                if (r < 18446744073709552e3)
                  return n.setUint8(t, 207), d(n, t + 1, r), 9;
                throw new Error("Number too big 0x" + r.toString(16));
              }
              if (r >= -32)
                return n.setInt8(t, r), 1;
              if (r >= -128)
                return n.setUint8(t, 208), n.setInt8(t + 1, r), 2;
              if (r >= -32768)
                return n.setUint8(t, 209), n.setInt16(t + 1, r), 3;
              if (r >= -2147483648)
                return n.setUint8(t, 210), n.setInt32(t + 1, r), 5;
              if (r >= -9223372036854776e3)
                return n.setUint8(t, 211), o(n, t + 1, r), 9;
              throw new Error("Number too small -0x" + (-r).toString(16).substr(1));
            }
            if (s === "undefined")
              return e ? 0 : (n.setUint8(t, 212), n.setUint8(t + 1, 0), n.setUint8(t + 2, 0), 3);
            if (r === null)
              return e ? 0 : (n.setUint8(t, 192), 1);
            if (s === "boolean")
              return n.setUint8(t, r ? 195 : 194), 1;
            if (typeof r.toJSON == "function")
              return c(r.toJSON(), n, t, e);
            if (s === "object") {
              var D, P = 0, E = void 0, O = Array.isArray(r);
              if (O ? D = r.length : (E = u(r, e), D = E.length), D < 16 ? (n.setUint8(t, D | (O ? 144 : 128)), P = 1) : D < 65536 ? (n.setUint8(t, O ? 220 : 222), n.setUint16(t + 1, D), P = 3) : D < 4294967296 && (n.setUint8(t, O ? 221 : 223), n.setUint32(t + 1, D), P = 5), O)
                for (var y = 0; y < D; y++)
                  P += c(r[y], n, t + P, e);
              else if (E)
                for (var y = 0; y < D; y++) {
                  var C = E[y];
                  P += c(C, n, t + P), P += c(r[C], n, t + P, e);
                }
              return P;
            }
            if (s === "function")
              return 0;
            throw new Error("Unknown type " + s);
          }
          function l(r, n) {
            var t = typeof r;
            if (t === "string") {
              var e = T(r);
              if (e < 32)
                return 1 + e;
              if (e < 256)
                return 2 + e;
              if (e < 65536)
                return 3 + e;
              if (e < 4294967296)
                return 5 + e;
            }
            if (ArrayBuffer.isView && ArrayBuffer.isView(r) && (r = r.buffer), r instanceof ArrayBuffer) {
              var s = r.byteLength;
              if (s < 256)
                return 2 + s;
              if (s < 65536)
                return 3 + s;
              if (s < 4294967296)
                return 5 + s;
            }
            if (typeof r == "number") {
              if (Math.floor(r) !== r)
                return 9;
              if (r >= 0) {
                if (r < 128)
                  return 1;
                if (r < 256)
                  return 2;
                if (r < 65536)
                  return 3;
                if (r < 4294967296)
                  return 5;
                if (r < 18446744073709552e3)
                  return 9;
                throw new Error("Number too big 0x" + r.toString(16));
              }
              if (r >= -32)
                return 1;
              if (r >= -128)
                return 2;
              if (r >= -32768)
                return 3;
              if (r >= -2147483648)
                return 5;
              if (r >= -9223372036854776e3)
                return 9;
              throw new Error("Number too small -0x" + r.toString(16).substr(1));
            }
            if (t === "boolean")
              return 1;
            if (r === null)
              return n ? 0 : 1;
            if (r === void 0)
              return n ? 0 : 3;
            if (typeof r.toJSON == "function")
              return l(r.toJSON(), n);
            if (t === "object") {
              var i, h = 0;
              if (Array.isArray(r)) {
                i = r.length;
                for (var D = 0; D < i; D++)
                  h += l(r[D], n);
              } else {
                var P = u(r, n);
                i = P.length;
                for (var D = 0; D < i; D++) {
                  var E = P[D];
                  h += l(E) + l(r[E], n);
                }
              }
              if (i < 16)
                return 1 + h;
              if (i < 65536)
                return 3 + h;
              if (i < 4294967296)
                return 5 + h;
              throw new Error("Array or object too long 0x" + i.toString(16));
            }
            if (t === "function")
              return 0;
            throw new Error("Unknown type " + t);
          }
          p.default = {
            encode: M,
            decode: A,
            inspect: g,
            utf8Write: a,
            utf8Read: w,
            utf8ByteCount: T
          };
        },
        /* 42 */
        /***/
        function(H, p, f) {
          Object.defineProperty(p, "__esModule", { value: !0 });
          var g = f(0), a = g.__importDefault(f(30)), w = g.__importDefault(f(50)), T = g.__importDefault(f(3)), M = g.__importDefault(f(4)), b = g.__importDefault(f(55)), I = g.__importDefault(f(57)), v = g.__importDefault(f(62)), R = g.__importDefault(f(64)), o = g.__importDefault(f(68)), d = g.__importDefault(f(2)), S = f(8), A = g.__importDefault(f(65)), u = g.__importDefault(f(66)), c = g.__importDefault(f(41)), l = (0, I.default)(R.default, b.default);
          T.default.Crypto = l, T.default.BufferUtils = b.default, T.default.Http = v.default, T.default.Config = R.default, T.default.Transports = o.default, T.default.WebStorage = A.default, a.default.Crypto = l, w.default.Crypto = l, d.default.initLogHandlers(), T.default.Defaults = (0, S.getDefaults)(u.default), T.default.Config.agent && (T.default.Defaults.agent += " " + T.default.Config.agent), T.default.Config.noUpgrade && (T.default.Defaults.upgradeTransports = []), p.default = {
            ErrorInfo: M.default,
            Rest: a.default,
            Realtime: w.default,
            msgpack: c.default
          };
        },
        /* 43 */
        /***/
        function(H) {
          H.exports = JSON.parse('{"name":"ably","description":"Realtime client library for Ably, the realtime messaging service","version":"1.2.48","license":"Apache-2.0","bugs":{"url":"https://github.com/ably/ably-js/issues","email":"support@ably.com"},"main":"./build/ably-node.js","typings":"./ably.d.ts","react-native":{"./build/ably-node.js":"./build/ably-reactnative.js"},"browser":{"./build/ably-node.js":"./build/ably-commonjs.js"},"files":["build/**","ably.d.ts","callbacks.d.ts","callbacks.js","promises.d.ts","promises.js","resources/**","src/**","react/**"],"dependencies":{"@ably/msgpack-js":"^0.4.0","got":"^11.8.5","ws":"^8.14.2"},"peerDependencies":{"react":">=16.8.0","react-dom":">=16.8.0"},"peerDependenciesMeta":{"react":{"optional":true},"react-dom":{"optional":true}},"devDependencies":{"@ably/vcdiff-decoder":"1.0.4","@testing-library/react":"^13.3.0","@types/crypto-js":"^4.0.1","@types/jmespath":"^0.15.2","@types/node":"^15.0.0","@types/request":"^2.48.7","@types/ws":"^8.2.0","@typescript-eslint/eslint-plugin":"^5.14.0","@typescript-eslint/parser":"^5.14.0","@vitejs/plugin-react":"^1.3.2","async":"ably-forks/async#requirejs","aws-sdk":"^2.1413.0","chai":"^4.2.0","copy-webpack-plugin":"^6.4.1","cors":"^2.8.5","crypto-js":"ably-forks/crypto-js#crypto-lite","eslint":"^7.13.0","eslint-plugin-import":"^2.28.0","eslint-plugin-jsdoc":"^40.0.0","eslint-plugin-react":"^7.32.2","eslint-plugin-react-hooks":"^4.6.0","eslint-plugin-security":"^1.4.0","express":"^4.17.1","glob":"~4.4","google-closure-compiler":"^20180610.0.1","grunt":"^1.6.1","grunt-bump":"^0.3.1","grunt-cli":"~1.2.0","grunt-closure-tools":"^1.0.0","grunt-contrib-concat":"~0.5","grunt-shell":"~1.1","grunt-webpack":"^4.0.2","hexy":"~0.2","jmespath":"^0.16.0","jsdom":"^20.0.0","kexec":"ably-forks/node-kexec#update-for-node-12","minimist":"^1.2.5","mocha":"^8.1.3","null-loader":"^4.0.1","playwright":"^1.39.0","prettier":"^2.5.1","react":">=18.1.0","react-dom":">=18.1.0","requirejs":"~2.1","shelljs":"~0.8","source-map-explorer":"^2.5.2","ts-loader":"^8.2.0","tsconfig-paths-webpack-plugin":"^4.0.1","tslib":"^2.3.1","typedoc":"^0.23.8","typescript":"^4.6.4","vite":"^4.4.9","vitest":"^0.18.0","webpack":"^4.44.2","webpack-cli":"^4.2.0"},"engines":{"node":">=5.10.x"},"repository":"ably/ably-js","jspm":{"registry":"npm","directories":{"lib":"build"},"main":"ably"},"scripts":{"start:react":"npx vite serve","grunt":"grunt","test":"grunt test","test:node":"grunt test:node","test:node:skip-build":"grunt mocha","test:webserver":"grunt test:webserver","test:playwright":"node test/support/runPlaywrightTests.js","test:react":"vitest run","concat":"grunt concat","build":"grunt build:all && npm run build:react","build:node":"grunt build:node","build:browser":"grunt build:browser","build:react":"npm run build:react:mjs && npm run build:react:cjs && cp src/platform/react-hooks/res/package.react.json react/package.json","build:react:mjs":"tsc --project src/platform/react-hooks/tsconfig.mjs.json && cp src/platform/react-hooks/res/package.mjs.json react/mjs/package.json","build:react:cjs":"tsc --project src/platform/react-hooks/tsconfig.cjs.json && cp src/platform/react-hooks/res/package.cjs.json react/cjs/package.json","requirejs":"grunt requirejs","lint":"eslint .","lint:fix":"eslint --fix .","check-closure-compiler":"grunt check-closure-compiler","prepare":"npm run build","format":"prettier --write --ignore-path .gitignore --ignore-path .prettierignore src test ably.d.ts webpack.config.js Gruntfile.js scripts/cdn_deploy.js docs/chrome-mv3.md","format:check":"prettier --check --ignore-path .gitignore --ignore-path .prettierignore src test ably.d.ts webpack.config.js Gruntfile.js scripts/cdn_deploy.js","sourcemap":"source-map-explorer build/ably.min.js","sourcemap:noencryption":"source-map-explorer build/ably.noencryption.min.js","docs":"typedoc --entryPoints ably.d.ts --out docs/generated/default --readme docs/landing-pages/default.md && typedoc --entryPoints promises.d.ts --out docs/generated/promises --name \\"ably (Promise-based)\\" --readme docs/landing-pages/promises.md && cp docs/landing-pages/choose-library.html docs/generated/index.html"}}');
        },
        /* 44 */
        /***/
        function(H, p) {
        },
        /* 45 */
        /***/
        function(H, p, f) {
          (function(g, a) {
            H.exports = a(f(6), f(32), f(24));
          })(this, function(g) {
            return g.HmacSHA256;
          });
        },
        /* 46 */
        /***/
        function(H, p, f) {
          Object.defineProperty(p, "__esModule", { value: !0 });
          var g = f(0), a = g.__importStar(f(1)), w = g.__importDefault(f(47)), T = g.__importDefault(f(14)), M = g.__importDefault(f(19)), b = g.__importDefault(f(4)), I = g.__importDefault(f(48)), v = function() {
          }, R = (
            /** @class */
            function() {
              function A(u) {
                this.rest = u, this.admin = new o(u);
              }
              return A;
            }()
          ), o = (
            /** @class */
            function() {
              function A(u) {
                this.rest = u, this.deviceRegistrations = new d(u), this.channelSubscriptions = new S(u);
              }
              return A.prototype.publish = function(u, c, l) {
                var r = this.rest, n = r.options.useBinaryProtocol ? a.Format.msgpack : a.Format.json, t = a.defaultPostHeaders(r.options, n), e = {}, s = a.mixin({ recipient: u }, c);
                if (typeof l != "function") {
                  if (this.rest.options.promises)
                    return a.promisify(this, "publish", arguments);
                  l = v;
                }
                r.options.headers && a.mixin(t, r.options.headers), r.options.pushFullWait && a.mixin(e, { fullWait: "true" });
                var i = a.encodeBody(s, n);
                T.default.post(r, "/push/publish", i, t, e, null, function(h) {
                  return l(h);
                });
              }, A;
            }()
          ), d = (
            /** @class */
            function() {
              function A(u) {
                this.rest = u;
              }
              return A.prototype.save = function(u, c) {
                var l = this.rest, r = w.default.fromValues(u), n = l.options.useBinaryProtocol ? a.Format.msgpack : a.Format.json, t = a.defaultPostHeaders(l.options, n), e = {};
                if (typeof c != "function") {
                  if (this.rest.options.promises)
                    return a.promisify(this, "save", arguments);
                  c = v;
                }
                l.options.headers && a.mixin(t, l.options.headers), l.options.pushFullWait && a.mixin(e, { fullWait: "true" });
                var s = a.encodeBody(r, n);
                T.default.put(l, "/push/deviceRegistrations/" + encodeURIComponent(u.id), s, t, e, null, function(i, h, D, P) {
                  c(i, i ? void 0 : w.default.fromResponseBody(h, P ? void 0 : n));
                });
              }, A.prototype.get = function(u, c) {
                var l = this.rest, r = l.options.useBinaryProtocol ? a.Format.msgpack : a.Format.json, n = a.defaultGetHeaders(l.options, r), t = u.id || u;
                if (typeof c != "function") {
                  if (this.rest.options.promises)
                    return a.promisify(this, "get", arguments);
                  c = v;
                }
                if (typeof t != "string" || !t.length) {
                  c(new b.default("First argument to DeviceRegistrations#get must be a deviceId string or DeviceDetails", 4e4, 400));
                  return;
                }
                l.options.headers && a.mixin(n, l.options.headers), T.default.get(l, "/push/deviceRegistrations/" + encodeURIComponent(t), n, {}, null, function(e, s, i, h) {
                  c(e, e ? void 0 : w.default.fromResponseBody(s, h ? void 0 : r));
                });
              }, A.prototype.list = function(u, c) {
                var l = this.rest, r = l.options.useBinaryProtocol ? a.Format.msgpack : a.Format.json, n = this.rest.http.supportsLinkHeaders ? void 0 : r, t = a.defaultGetHeaders(l.options, r);
                if (typeof c != "function") {
                  if (this.rest.options.promises)
                    return a.promisify(this, "list", arguments);
                  c = v;
                }
                l.options.headers && a.mixin(t, l.options.headers), new M.default(l, "/push/deviceRegistrations", t, n, function(e, s, i) {
                  return w.default.fromResponseBody(e, i ? void 0 : r);
                }).get(u, c);
              }, A.prototype.remove = function(u, c) {
                var l = this.rest, r = l.options.useBinaryProtocol ? a.Format.msgpack : a.Format.json, n = a.defaultGetHeaders(l.options, r), t = {}, e = u.id || u;
                if (typeof c != "function") {
                  if (this.rest.options.promises)
                    return a.promisify(this, "remove", arguments);
                  c = v;
                }
                if (typeof e != "string" || !e.length) {
                  c(new b.default("First argument to DeviceRegistrations#remove must be a deviceId string or DeviceDetails", 4e4, 400));
                  return;
                }
                l.options.headers && a.mixin(n, l.options.headers), l.options.pushFullWait && a.mixin(t, { fullWait: "true" }), T.default.delete(l, "/push/deviceRegistrations/" + encodeURIComponent(e), n, t, null, function(s) {
                  return c(s);
                });
              }, A.prototype.removeWhere = function(u, c) {
                var l = this.rest, r = l.options.useBinaryProtocol ? a.Format.msgpack : a.Format.json, n = a.defaultGetHeaders(l.options, r);
                if (typeof c != "function") {
                  if (this.rest.options.promises)
                    return a.promisify(this, "removeWhere", arguments);
                  c = v;
                }
                l.options.headers && a.mixin(n, l.options.headers), l.options.pushFullWait && a.mixin(u, { fullWait: "true" }), T.default.delete(l, "/push/deviceRegistrations", n, u, null, function(t) {
                  return c(t);
                });
              }, A;
            }()
          ), S = (
            /** @class */
            function() {
              function A(u) {
                this.remove = A.prototype.removeWhere, this.rest = u;
              }
              return A.prototype.save = function(u, c) {
                var l = this.rest, r = I.default.fromValues(u), n = l.options.useBinaryProtocol ? a.Format.msgpack : a.Format.json, t = a.defaultPostHeaders(l.options, n), e = {};
                if (typeof c != "function") {
                  if (this.rest.options.promises)
                    return a.promisify(this, "save", arguments);
                  c = v;
                }
                l.options.headers && a.mixin(t, l.options.headers), l.options.pushFullWait && a.mixin(e, { fullWait: "true" });
                var s = a.encodeBody(r, n);
                T.default.post(l, "/push/channelSubscriptions", s, t, e, null, function(i, h, D, P) {
                  c(i, !i && I.default.fromResponseBody(h, P ? void 0 : n));
                });
              }, A.prototype.list = function(u, c) {
                var l = this.rest, r = l.options.useBinaryProtocol ? a.Format.msgpack : a.Format.json, n = this.rest.http.supportsLinkHeaders ? void 0 : r, t = a.defaultGetHeaders(l.options, r);
                if (typeof c != "function") {
                  if (this.rest.options.promises)
                    return a.promisify(this, "list", arguments);
                  c = v;
                }
                l.options.headers && a.mixin(t, l.options.headers), new M.default(l, "/push/channelSubscriptions", t, n, function(e, s, i) {
                  return I.default.fromResponseBody(e, i ? void 0 : r);
                }).get(u, c);
              }, A.prototype.removeWhere = function(u, c) {
                var l = this.rest, r = l.options.useBinaryProtocol ? a.Format.msgpack : a.Format.json, n = a.defaultGetHeaders(l.options, r);
                if (typeof c != "function") {
                  if (this.rest.options.promises)
                    return a.promisify(this, "removeWhere", arguments);
                  c = v;
                }
                l.options.headers && a.mixin(n, l.options.headers), l.options.pushFullWait && a.mixin(u, { fullWait: "true" }), T.default.delete(l, "/push/channelSubscriptions", n, u, null, function(t) {
                  return c(t);
                });
              }, A.prototype.listChannels = function(u, c) {
                var l = this.rest, r = l.options.useBinaryProtocol ? a.Format.msgpack : a.Format.json, n = this.rest.http.supportsLinkHeaders ? void 0 : r, t = a.defaultGetHeaders(l.options, r);
                if (typeof c != "function") {
                  if (this.rest.options.promises)
                    return a.promisify(this, "listChannels", arguments);
                  c = v;
                }
                l.options.headers && a.mixin(t, l.options.headers), l.options.pushFullWait && a.mixin(u, { fullWait: "true" }), new M.default(l, "/push/channels", t, n, function(e, s, i) {
                  for (var h = !i && r ? a.decodeBody(e, r) : e, D = 0; D < h.length; D++)
                    h[D] = String(h[D]);
                  return h;
                }).get(u, c);
              }, A;
            }()
          );
          p.default = R;
        },
        /* 47 */
        /***/
        function(H, p, f) {
          Object.defineProperty(p, "__esModule", { value: !0 });
          var g = f(0), a = g.__importStar(f(1)), w = g.__importDefault(f(4)), T;
          (function(I) {
            I.Phone = "phone", I.Tablet = "tablet", I.Desktop = "desktop", I.TV = "tv", I.Watch = "watch", I.Car = "car", I.Embedded = "embedded", I.Other = "other";
          })(T || (T = {}));
          var M;
          (function(I) {
            I.Android = "android", I.IOS = "ios", I.Browser = "browser";
          })(M || (M = {}));
          var b = (
            /** @class */
            function() {
              function I() {
              }
              return I.prototype.toJSON = function() {
                var v, R, o;
                return {
                  id: this.id,
                  deviceSecret: this.deviceSecret,
                  platform: this.platform,
                  formFactor: this.formFactor,
                  clientId: this.clientId,
                  metadata: this.metadata,
                  deviceIdentityToken: this.deviceIdentityToken,
                  push: {
                    recipient: (v = this.push) === null || v === void 0 ? void 0 : v.recipient,
                    state: (R = this.push) === null || R === void 0 ? void 0 : R.state,
                    error: (o = this.push) === null || o === void 0 ? void 0 : o.error
                  }
                };
              }, I.prototype.toString = function() {
                var v, R, o, d, S = "[DeviceDetails";
                return this.id && (S += "; id=" + this.id), this.platform && (S += "; platform=" + this.platform), this.formFactor && (S += "; formFactor=" + this.formFactor), this.clientId && (S += "; clientId=" + this.clientId), this.metadata && (S += "; metadata=" + this.metadata), this.deviceIdentityToken && (S += "; deviceIdentityToken=" + JSON.stringify(this.deviceIdentityToken)), !((v = this.push) === null || v === void 0) && v.recipient && (S += "; push.recipient=" + JSON.stringify(this.push.recipient)), !((R = this.push) === null || R === void 0) && R.state && (S += "; push.state=" + this.push.state), !((o = this.push) === null || o === void 0) && o.error && (S += "; push.error=" + JSON.stringify(this.push.error)), !((d = this.push) === null || d === void 0) && d.metadata && (S += "; push.metadata=" + this.push.metadata), S += "]", S;
              }, I.fromResponseBody = function(v, R) {
                return R && (v = a.decodeBody(v, R)), a.isArray(v) ? I.fromValuesArray(v) : I.fromValues(v);
              }, I.fromValues = function(v) {
                return v.error = v.error && w.default.fromValues(v.error), Object.assign(new I(), v);
              }, I.fromValuesArray = function(v) {
                for (var R = v.length, o = new Array(R), d = 0; d < R; d++)
                  o[d] = I.fromValues(v[d]);
                return o;
              }, I.toRequestBody = a.encodeBody, I;
            }()
          );
          p.default = b;
        },
        /* 48 */
        /***/
        function(H, p, f) {
          Object.defineProperty(p, "__esModule", { value: !0 });
          var g = f(0), a = g.__importStar(f(1)), w = (
            /** @class */
            function() {
              function T() {
              }
              return T.prototype.toJSON = function() {
                return {
                  channel: this.channel,
                  deviceId: this.deviceId,
                  clientId: this.clientId
                };
              }, T.prototype.toString = function() {
                var M = "[PushChannelSubscription";
                return this.channel && (M += "; channel=" + this.channel), this.deviceId && (M += "; deviceId=" + this.deviceId), this.clientId && (M += "; clientId=" + this.clientId), M += "]", M;
              }, T.fromResponseBody = function(M, b) {
                return b && (M = a.decodeBody(M, b)), a.isArray(M) ? T.fromValuesArray(M) : T.fromValues(M);
              }, T.fromValues = function(M) {
                return Object.assign(new T(), M);
              }, T.fromValuesArray = function(M) {
                for (var b = M.length, I = new Array(b), v = 0; v < b; v++)
                  I[v] = T.fromValues(M[v]);
                return I;
              }, T.toRequestBody = a.encodeBody, T;
            }()
          );
          p.default = w;
        },
        /* 49 */
        /***/
        function(H, p, f) {
          Object.defineProperty(p, "__esModule", { value: !0 });
          var g = f(0), a = g.__importStar(f(1)), w = (
            /** @class */
            function() {
              function l(r) {
                this.count = r && r.count || 0, this.data = r && r.data || 0, this.uncompressedData = r && r.uncompressedData || 0, this.failed = r && r.failed || 0, this.refused = r && r.refused || 0;
              }
              return l;
            }()
          ), T = (
            /** @class */
            function(l) {
              g.__extends(r, l);
              function r(n) {
                var t = l.call(this, n) || this;
                return n && n.category && (t.category = {}, a.forInOwnNonNullProperties(n.category, function(e) {
                  t.category[e] = new w(n.category[e]);
                })), t;
              }
              return r;
            }(w)
          ), M = (
            /** @class */
            function() {
              function l(r) {
                this.peak = r && r.peak || 0, this.min = r && r.min || 0, this.mean = r && r.mean || 0, this.opened = r && r.opened || 0, this.refused = r && r.refused || 0;
              }
              return l;
            }()
          ), b = (
            /** @class */
            function() {
              function l(r) {
                this.succeeded = r && r.succeeded || 0, this.failed = r && r.failed || 0, this.refused = r && r.refused || 0;
              }
              return l;
            }()
          ), I = (
            /** @class */
            function() {
              function l(r) {
                this.plain = new M(r && r.plain), this.tls = new M(r && r.tls), this.all = new M(r && r.all);
              }
              return l;
            }()
          ), v = (
            /** @class */
            function() {
              function l(r) {
                this.messages = new T(r && r.messages), this.presence = new T(r && r.presence), this.all = new T(r && r.all);
              }
              return l;
            }()
          ), R = (
            /** @class */
            function() {
              function l(r) {
                this.realtime = new v(r && r.realtime), this.rest = new v(r && r.rest), this.webhook = new v(r && r.webhook), this.sharedQueue = new v(r && r.sharedQueue), this.externalQueue = new v(r && r.externalQueue), this.httpEvent = new v(r && r.httpEvent), this.push = new v(r && r.push), this.all = new v(r && r.all);
              }
              return l;
            }()
          ), o = (
            /** @class */
            function() {
              function l(r) {
                this.all = new v(r && r.all), this.inbound = new R(r && r.inbound), this.outbound = new R(r && r.outbound);
              }
              return l;
            }()
          ), d = (
            /** @class */
            function() {
              function l(r) {
                this.all = new v(r && r.all), this.producerPaid = new o(r && r.producerPaid), this.consumerPaid = new o(r && r.consumerPaid);
              }
              return l;
            }()
          ), S = (
            /** @class */
            function() {
              function l(r) {
                this.messages = r && r.messages || 0;
                var n = r && r.notifications;
                this.notifications = {
                  invalid: n && n.invalid || 0,
                  attempted: n && n.attempted || 0,
                  successful: n && n.successful || 0,
                  failed: n && n.failed || 0
                }, this.directPublishes = r && r.directPublishes || 0;
              }
              return l;
            }()
          ), A = (
            /** @class */
            function() {
              function l(r) {
                this.succeeded = r && r.succeeded || 0, this.skipped = r && r.skipped || 0, this.failed = r && r.failed || 0;
              }
              return l;
            }()
          ), u = (
            /** @class */
            function() {
              function l(r) {
                var n = this;
                this.delta = void 0, r && r.delta && (this.delta = {}, a.forInOwnNonNullProperties(r.delta, function(t) {
                  n.delta[t] = new A(r.delta[t]);
                }));
              }
              return l;
            }()
          ), c = (
            /** @class */
            function(l) {
              g.__extends(r, l);
              function r(n) {
                var t = l.call(this, n) || this;
                return t.persisted = new v(n && n.persisted), t.connections = new I(n && n.connections), t.channels = new M(n && n.channels), t.apiRequests = new b(n && n.apiRequests), t.tokenRequests = new b(n && n.tokenRequests), t.xchgProducer = new d(n && n.xchgProducer), t.xchgConsumer = new d(n && n.xchgConsumer), t.push = new S(n && n.pushStats), t.processed = new u(n && n.processed), t.inProgress = n && n.inProgress || void 0, t.unit = n && n.unit || void 0, t.intervalId = n && n.intervalId || void 0, t;
              }
              return r.fromValues = function(n) {
                return new r(n);
              }, r;
            }(o)
          );
          p.default = c;
        },
        /* 50 */
        /***/
        function(H, p, f) {
          Object.defineProperty(p, "__esModule", { value: !0 });
          var g = f(0), a = g.__importStar(f(1)), w = g.__importDefault(f(30)), T = g.__importDefault(f(7)), M = g.__importDefault(f(2)), b = g.__importDefault(f(51)), I = g.__importDefault(f(38)), v = g.__importDefault(f(8)), R = g.__importDefault(f(4)), o = g.__importDefault(f(10)), d = g.__importDefault(f(35)), S = g.__importDefault(f(3)), A = g.__importDefault(f(9)), u = (
            /** @class */
            function(l) {
              g.__extends(r, l);
              function r(n) {
                var t = l.call(this, n) || this;
                return M.default.logAction(M.default.LOG_MINOR, "Realtime()", ""), t.connection = new b.default(t, t.options), t.channels = new c(t), n.autoConnect !== !1 && t.connect(), t;
              }
              return r.prototype.connect = function() {
                M.default.logAction(M.default.LOG_MINOR, "Realtime.connect()", ""), this.connection.connect();
              }, r.prototype.close = function() {
                M.default.logAction(M.default.LOG_MINOR, "Realtime.close()", ""), this.connection.close();
              }, r.Promise = function(n) {
                return n = v.default.objectifyOptions(n), n.promises = !0, new r(n);
              }, r.Callbacks = r, r.Utils = a, r.ConnectionManager = d.default, r.Platform = S.default, r.ProtocolMessage = o.default, r.Message = A.default, r;
            }(w.default)
          ), c = (
            /** @class */
            function(l) {
              g.__extends(r, l);
              function r(n) {
                var t = l.call(this) || this;
                return t.realtime = n, t.all = /* @__PURE__ */ Object.create(null), n.connection.connectionManager.on("transport.active", function() {
                  t.onTransportActive();
                }), t;
              }
              return r.prototype.channelSerials = function() {
                for (var n = {}, t = 0, e = a.keysArray(this.all, !0); t < e.length; t++) {
                  var s = e[t], i = this.all[s];
                  i.properties.channelSerial && (n[s] = i.properties.channelSerial);
                }
                return n;
              }, r.prototype.recoverChannels = function(n) {
                for (var t = 0, e = a.keysArray(n, !0); t < e.length; t++) {
                  var s = e[t], i = this.get(s);
                  i.properties.channelSerial = n[s];
                }
              }, r.prototype.onChannelMessage = function(n) {
                var t = n.channel;
                if (t === void 0) {
                  M.default.logAction(M.default.LOG_ERROR, "Channels.onChannelMessage()", "received event unspecified channel, action = " + n.action);
                  return;
                }
                var e = this.all[t];
                if (!e) {
                  M.default.logAction(M.default.LOG_ERROR, "Channels.onChannelMessage()", "received event for non-existent channel: " + t);
                  return;
                }
                e.onMessage(n);
              }, r.prototype.onTransportActive = function() {
                for (var n in this.all) {
                  var t = this.all[n];
                  t.state === "attaching" || t.state === "detaching" ? t.checkPendingState() : t.state === "suspended" ? t._attach(!1, null) : t.state === "attached" && t.requestState("attaching");
                }
              }, r.prototype.propogateConnectionInterruption = function(n, t) {
                var e = {
                  closing: "detached",
                  closed: "detached",
                  failed: "failed",
                  suspended: "suspended"
                }, s = ["attaching", "attached", "detaching", "suspended"], i = e[n];
                for (var h in this.all) {
                  var D = this.all[h];
                  a.arrIn(s, D.state) && D.notifyState(i, t);
                }
              }, r.prototype.get = function(n, t) {
                n = String(n);
                var e = this.all[n];
                if (!e)
                  e = this.all[n] = new I.default(this.realtime, n, t);
                else if (t) {
                  if (e._shouldReattachToSetOptions(t))
                    throw new R.default("Channels.get() cannot be used to set channel options that would cause the channel to reattach. Please, use RealtimeChannel.setOptions() instead.", 4e4, 400);
                  e.setOptions(t);
                }
                return e;
              }, r.prototype.getDerived = function(n, t, e) {
                if (t.filter) {
                  var s = a.toBase64(t.filter), i = a.matchDerivedChannel(n);
                  n = "[filter=".concat(s).concat(i.qualifierParam, "]").concat(i.channelName);
                }
                return this.get(n, e);
              }, r.prototype.release = function(n) {
                n = String(n);
                var t = this.all[n];
                if (t) {
                  var e = t.getReleaseErr();
                  if (e)
                    throw e;
                  delete this.all[n];
                }
              }, r;
            }(T.default)
          );
          p.default = u;
        },
        /* 51 */
        /***/
        function(H, p, f) {
          Object.defineProperty(p, "__esModule", { value: !0 });
          var g = f(0), a = g.__importStar(f(1)), w = g.__importDefault(f(7)), T = g.__importDefault(f(35)), M = g.__importDefault(f(2)), b = g.__importDefault(f(37)), I = g.__importDefault(f(3));
          function v() {
          }
          var R = (
            /** @class */
            function(o) {
              g.__extends(d, o);
              function d(S, A) {
                var u = o.call(this) || this;
                return u.whenState = function(c, l) {
                  return w.default.prototype.whenState.call(u, c, u.state, l, new b.default(void 0, c));
                }, u.ably = S, u.connectionManager = new T.default(S, A), u.state = u.connectionManager.state.state, u.key = void 0, u.id = void 0, u.errorReason = null, u.connectionManager.on("connectionstate", function(c) {
                  var l = u.state = c.current;
                  I.default.Config.nextTick(function() {
                    u.emit(l, c);
                  });
                }), u.connectionManager.on("update", function(c) {
                  I.default.Config.nextTick(function() {
                    u.emit("update", c);
                  });
                }), u;
              }
              return d.prototype.connect = function() {
                M.default.logAction(M.default.LOG_MINOR, "Connection.connect()", ""), this.connectionManager.requestState({ state: "connecting" });
              }, d.prototype.ping = function(S) {
                if (M.default.logAction(M.default.LOG_MINOR, "Connection.ping()", ""), !S) {
                  if (this.ably.options.promises)
                    return a.promisify(this, "ping", arguments);
                  S = v;
                }
                this.connectionManager.ping(null, S);
              }, d.prototype.close = function() {
                M.default.logAction(M.default.LOG_MINOR, "Connection.close()", "connectionKey = " + this.key), this.connectionManager.requestState({ state: "closing" });
              }, Object.defineProperty(d.prototype, "recoveryKey", {
                get: function() {
                  return this.createRecoveryKey();
                },
                enumerable: !1,
                configurable: !0
              }), d.prototype.createRecoveryKey = function() {
                return this.connectionManager.createRecoveryKey();
              }, d;
            }(w.default)
          );
          p.default = R;
        },
        /* 52 */
        /***/
        function(H, p, f) {
          Object.defineProperty(p, "__esModule", { value: !0 }), p.PendingMessage = void 0;
          var g = f(0), a = g.__importDefault(f(10)), w = g.__importStar(f(1)), T = g.__importDefault(f(7)), M = g.__importDefault(f(2)), b = g.__importDefault(f(36)), I = g.__importDefault(f(4)), v = a.default.Action, R = (
            /** @class */
            function() {
              function d(S, A) {
                this.message = S, this.callback = A, this.merged = !1;
                var u = S.action;
                this.sendAttempted = !1, this.ackRequired = u == v.MESSAGE || u == v.PRESENCE;
              }
              return d;
            }()
          );
          p.PendingMessage = R;
          var o = (
            /** @class */
            function(d) {
              g.__extends(S, d);
              function S(A) {
                var u = d.call(this) || this;
                return u.transport = A, u.messageQueue = new b.default(), A.on("ack", function(c, l) {
                  u.onAck(c, l);
                }), A.on("nack", function(c, l, r) {
                  u.onNack(c, l, r);
                }), u;
              }
              return S.prototype.onAck = function(A, u) {
                M.default.logAction(M.default.LOG_MICRO, "Protocol.onAck()", "serial = " + A + "; count = " + u), this.messageQueue.completeMessages(A, u);
              }, S.prototype.onNack = function(A, u, c) {
                M.default.logAction(M.default.LOG_ERROR, "Protocol.onNack()", "serial = " + A + "; count = " + u + "; err = " + w.inspectError(c)), c || (c = new I.default("Unable to send message; channel not responding", 50001, 500)), this.messageQueue.completeMessages(A, u, c);
              }, S.prototype.onceIdle = function(A) {
                var u = this.messageQueue;
                if (u.count() === 0) {
                  A();
                  return;
                }
                u.once("idle", A);
              }, S.prototype.send = function(A) {
                A.ackRequired && this.messageQueue.push(A), M.default.shouldLog(M.default.LOG_MICRO) && M.default.logAction(M.default.LOG_MICRO, "Protocol.send()", "sending msg; " + a.default.stringify(A.message)), A.sendAttempted = !0, this.transport.send(A.message);
              }, S.prototype.getTransport = function() {
                return this.transport;
              }, S.prototype.getPendingMessages = function() {
                return this.messageQueue.copyAll();
              }, S.prototype.clearPendingMessages = function() {
                return this.messageQueue.clear();
              }, S.prototype.finish = function() {
                var A = this.transport;
                this.onceIdle(function() {
                  A.disconnect();
                });
              }, S;
            }(T.default)
          );
          p.default = o;
        },
        /* 53 */
        /***/
        function(H, p, f) {
          Object.defineProperty(p, "__esModule", { value: !0 });
          var g = f(0), a = g.__importDefault(f(3)), w = g.__importStar(f(1)), T = g.__importDefault(f(26)), M = g.__importDefault(f(8)), b = g.__importDefault(f(2)), I = g.__importDefault(f(10)), v = g.__importDefault(f(4)), R = "web_socket";
          function o(A) {
            return !!A.on;
          }
          var d = (
            /** @class */
            function(A) {
              g.__extends(u, A);
              function u(c, l, r) {
                var n = A.call(this, c, l, r) || this;
                return n.shortName = R, r.heartbeats = a.default.Config.useProtocolHeartbeats, n.wsHost = M.default.getHost(r.options, r.host, !0), n;
              }
              return u.isAvailable = function() {
                return !!a.default.Config.WebSocket;
              }, u.prototype.createWebSocket = function(c, l) {
                return this.uri = c + w.toQueryString(l), new a.default.Config.WebSocket(this.uri);
              }, u.prototype.toString = function() {
                return "WebSocketTransport; uri=" + this.uri;
              }, u.prototype.connect = function() {
                b.default.logAction(b.default.LOG_MINOR, "WebSocketTransport.connect()", "starting"), T.default.prototype.connect.call(this);
                var c = this, l = this.params, r = l.options, n = r.tls ? "wss://" : "ws://", t = n + this.wsHost + ":" + M.default.getPort(r) + "/";
                b.default.logAction(b.default.LOG_MINOR, "WebSocketTransport.connect()", "uri: " + t), this.auth.getAuthParams(function(e, s) {
                  if (!c.isDisposed) {
                    var i = "";
                    for (var h in s)
                      i += " " + h + ": " + s[h] + ";";
                    if (b.default.logAction(b.default.LOG_MINOR, "WebSocketTransport.connect()", "authParams:" + i + " err: " + e), e) {
                      c.disconnect(e);
                      return;
                    }
                    var D = l.getConnectParams(s);
                    try {
                      var P = c.wsConnection = c.createWebSocket(t, D);
                      P.binaryType = a.default.Config.binaryType, P.onopen = function() {
                        c.onWsOpen();
                      }, P.onclose = function(E) {
                        c.onWsClose(E);
                      }, P.onmessage = function(E) {
                        c.onWsData(E.data);
                      }, P.onerror = function(E) {
                        c.onWsError(E);
                      }, o(P) && P.on("ping", function() {
                        c.onActivity();
                      });
                    } catch (E) {
                      b.default.logAction(b.default.LOG_ERROR, "WebSocketTransport.connect()", "Unexpected exception creating websocket: err = " + (E.stack || E.message)), c.disconnect(E);
                    }
                  }
                });
              }, u.prototype.send = function(c) {
                var l = this.wsConnection;
                if (!l) {
                  b.default.logAction(b.default.LOG_ERROR, "WebSocketTransport.send()", "No socket connection");
                  return;
                }
                try {
                  l.send(I.default.serialize(c, this.params.format));
                } catch (n) {
                  var r = "Exception from ws connection when trying to send: " + w.inspectError(n);
                  b.default.logAction(b.default.LOG_ERROR, "WebSocketTransport.send()", r), this.finish("disconnected", new v.default(r, 5e4, 500));
                }
              }, u.prototype.onWsData = function(c) {
                b.default.logAction(b.default.LOG_MICRO, "WebSocketTransport.onWsData()", "data received; length = " + c.length + "; type = " + typeof c);
                try {
                  this.onProtocolMessage(I.default.deserialize(c, this.format));
                } catch (l) {
                  b.default.logAction(b.default.LOG_ERROR, "WebSocketTransport.onWsData()", "Unexpected exception handing channel message: " + l.stack);
                }
              }, u.prototype.onWsOpen = function() {
                b.default.logAction(b.default.LOG_MINOR, "WebSocketTransport.onWsOpen()", "opened WebSocket"), this.emit("preconnect");
              }, u.prototype.onWsClose = function(c) {
                var l, r;
                if (typeof c == "object" ? (r = c.code, l = c.wasClean || r === 1e3) : (r = c, l = r == 1e3), delete this.wsConnection, l) {
                  b.default.logAction(b.default.LOG_MINOR, "WebSocketTransport.onWsClose()", "Cleanly closed WebSocket");
                  var n = new v.default("Websocket closed", 80003, 400);
                  this.finish("disconnected", n);
                } else {
                  var t = "Unclean disconnection of WebSocket ; code = " + r, n = new v.default(t, 80003, 400);
                  b.default.logAction(b.default.LOG_MINOR, "WebSocketTransport.onWsClose()", t), this.finish("disconnected", n);
                }
                this.emit("disposed");
              }, u.prototype.onWsError = function(c) {
                var l = this;
                b.default.logAction(b.default.LOG_MINOR, "WebSocketTransport.onError()", "Error from WebSocket: " + c.message), a.default.Config.nextTick(function() {
                  l.disconnect(Error(c.message));
                });
              }, u.prototype.dispose = function() {
                b.default.logAction(b.default.LOG_MINOR, "WebSocketTransport.dispose()", ""), this.isDisposed = !0;
                var c = this.wsConnection;
                c && (c.onmessage = function() {
                }, delete this.wsConnection, a.default.Config.nextTick(function() {
                  if (b.default.logAction(b.default.LOG_MICRO, "WebSocketTransport.dispose()", "closing websocket"), !c)
                    throw new Error("WebSocketTransport.dispose(): wsConnection is not defined");
                  c.close();
                }));
              }, u;
            }(T.default)
          );
          function S(A) {
            return d.isAvailable() && (A.supportedTransports[R] = d), d;
          }
          p.default = S;
        },
        /* 54 */
        /***/
        function(H, p, f) {
          Object.defineProperty(p, "__esModule", { value: !0 });
          var g = f(0), a = g.__importStar(f(1)), w = g.__importDefault(f(34)), T = g.__importDefault(f(7)), M = g.__importDefault(f(2)), b = g.__importDefault(f(15)), I = g.__importStar(f(4)), v = g.__importDefault(f(38)), R = g.__importDefault(f(23)), o = g.__importDefault(f(39)), d = function() {
          };
          function S(n) {
            return n.channel.realtime.auth.clientId;
          }
          function A(n) {
            var t = n.channel.realtime, e = t.auth.clientId;
            return (!e || e === "*") && t.connection.state === "connected";
          }
          function u(n, t, e) {
            switch (n.state) {
              case "attached":
              case "suspended":
                e();
                break;
              case "initialized":
              case "detached":
              case "detaching":
              case "attaching":
                n.attach(function(s) {
                  s ? t(s) : e();
                });
                break;
              default:
                t(I.default.fromValues(n.invalidStateError()));
            }
          }
          function c(n, t) {
            if (n.isSynthesized() || t.isSynthesized())
              return n.timestamp >= t.timestamp;
            var e = n.parseId(), s = t.parseId();
            return e.msgSerial === s.msgSerial ? e.index > s.index : e.msgSerial > s.msgSerial;
          }
          var l = (
            /** @class */
            function(n) {
              g.__extends(t, n);
              function t(e) {
                var s = n.call(this, e) || this;
                return s.channel = e, s.syncComplete = !1, s.members = new r(s, function(i) {
                  return i.clientId + ":" + i.connectionId;
                }), s._myMembers = new r(s, function(i) {
                  return i.clientId;
                }), s.subscriptions = new T.default(), s.pendingPresence = [], s;
              }
              return t.prototype.enter = function(e, s) {
                if (A(this))
                  throw new I.default("clientId must be specified to enter a presence channel", 40012, 400);
                return this._enterOrUpdateClient(void 0, void 0, e, "enter", s);
              }, t.prototype.update = function(e, s) {
                if (A(this))
                  throw new I.default("clientId must be specified to update presence data", 40012, 400);
                return this._enterOrUpdateClient(void 0, void 0, e, "update", s);
              }, t.prototype.enterClient = function(e, s, i) {
                return this._enterOrUpdateClient(void 0, e, s, "enter", i);
              }, t.prototype.updateClient = function(e, s, i) {
                return this._enterOrUpdateClient(void 0, e, s, "update", i);
              }, t.prototype._enterOrUpdateClient = function(e, s, i, h, D) {
                var P = this;
                if (!D)
                  if (typeof i == "function")
                    D = i, i = null;
                  else {
                    if (this.channel.realtime.options.promises)
                      return a.promisify(this, "_enterOrUpdateClient", [e, s, i, h]);
                    D = d;
                  }
                var E = this.channel;
                if (!E.connectionManager.activeState()) {
                  D(E.connectionManager.getError());
                  return;
                }
                M.default.logAction(M.default.LOG_MICRO, "RealtimePresence." + h + "Client()", "channel = " + E.name + ", id = " + e + ", client = " + (s || "(implicit) " + S(this)));
                var O = b.default.fromData(i);
                O.action = h, e && (O.id = e), s && (O.clientId = s), b.default.encode(O, E.channelOptions, function(y) {
                  if (y) {
                    D(y);
                    return;
                  }
                  switch (E.state) {
                    case "attached":
                      E.sendPresence(O, D);
                      break;
                    case "initialized":
                    case "detached":
                      E.attach();
                    case "attaching":
                      P.pendingPresence.push({
                        presence: O,
                        callback: D
                      });
                      break;
                    default:
                      y = new I.PartialErrorInfo("Unable to " + h + " presence channel while in " + E.state + " state", 90001), y.code = 90001, D(y);
                  }
                });
              }, t.prototype.leave = function(e, s) {
                if (A(this))
                  throw new I.default("clientId must have been specified to enter or leave a presence channel", 40012, 400);
                return this.leaveClient(void 0, e, s);
              }, t.prototype.leaveClient = function(e, s, i) {
                if (!i)
                  if (typeof s == "function")
                    i = s, s = null;
                  else {
                    if (this.channel.realtime.options.promises)
                      return a.promisify(this, "leaveClient", [e, s]);
                    i = d;
                  }
                var h = this.channel;
                if (!h.connectionManager.activeState()) {
                  i == null || i(h.connectionManager.getError());
                  return;
                }
                M.default.logAction(M.default.LOG_MICRO, "RealtimePresence.leaveClient()", "leaving; channel = " + this.channel.name + ", client = " + e);
                var D = b.default.fromData(s);
                switch (D.action = "leave", e && (D.clientId = e), h.state) {
                  case "attached":
                    h.sendPresence(D, i);
                    break;
                  case "attaching":
                    this.pendingPresence.push({
                      presence: D,
                      callback: i
                    });
                    break;
                  case "initialized":
                  case "failed": {
                    var P = new I.PartialErrorInfo("Unable to leave presence channel (incompatible state)", 90001);
                    i == null || i(P);
                    break;
                  }
                  default:
                    i == null || i(h.invalidStateError());
                }
              }, t.prototype.get = function(e, s) {
                var i = this, h = Array.prototype.slice.call(arguments);
                h.length == 1 && typeof h[0] == "function" && h.unshift(null), e = h[0], s = h[1];
                var D = !e || ("waitForSync" in e ? e.waitForSync : !0);
                if (!s) {
                  if (this.channel.realtime.options.promises)
                    return a.promisify(this, "get", h);
                  s = d;
                }
                function P(E) {
                  s(null, e ? E.list(e) : E.values());
                }
                if (this.channel.state === "suspended") {
                  D ? s(I.default.fromValues({
                    statusCode: 400,
                    code: 91005,
                    message: "Presence state is out of sync due to channel being in the SUSPENDED state"
                  })) : P(this.members);
                  return;
                }
                u(this.channel, s, function() {
                  var E = i.members;
                  D ? E.waitSync(function() {
                    P(E);
                  }) : P(E);
                });
              }, t.prototype.history = function(e, s) {
                if (M.default.logAction(M.default.LOG_MICRO, "RealtimePresence.history()", "channel = " + this.name), s === void 0)
                  if (typeof e == "function")
                    s = e, e = null;
                  else {
                    if (this.channel.realtime.options.promises)
                      return a.promisify(this, "history", arguments);
                    s = d;
                  }
                e && e.untilAttach && (this.channel.state === "attached" ? (delete e.untilAttach, e.from_serial = this.channel.properties.attachSerial) : s(new I.default("option untilAttach requires the channel to be attached, was: " + this.channel.state, 4e4, 400))), w.default.prototype._history.call(this, e, s);
              }, t.prototype.setPresence = function(e, s, i) {
                M.default.logAction(M.default.LOG_MICRO, "RealtimePresence.setPresence()", "received presence for " + e.length + " participants; syncChannelSerial = " + i);
                var h, D, P = this.members, E = this._myMembers, O = [], y = this.channel.connectionManager.connectionId;
                s && (this.members.startSync(), i && (D = i.match(/^[\w-]+:(.*)$/)) && (h = D[1]));
                for (var C = 0; C < e.length; C++) {
                  var N = b.default.fromValues(e[C]);
                  switch (N.action) {
                    case "leave":
                      P.remove(N) && O.push(N), N.connectionId === y && !N.isSynthesized() && E.remove(N);
                      break;
                    case "enter":
                    case "present":
                    case "update":
                      P.put(N) && O.push(N), N.connectionId === y && E.put(N);
                      break;
                  }
                }
                s && !h && (P.endSync(), this.channel.syncChannelSerial = null);
                for (var C = 0; C < O.length; C++) {
                  var N = O[C];
                  this.subscriptions.emit(N.action, N);
                }
              }, t.prototype.onAttached = function(e) {
                M.default.logAction(M.default.LOG_MINOR, "RealtimePresence.onAttached()", "channel = " + this.channel.name + ", hasPresence = " + e), e ? this.members.startSync() : (this._synthesizeLeaves(this.members.values()), this.members.clear()), this._ensureMyMembersPresent();
                var s = this.pendingPresence, i = s.length;
                if (i) {
                  this.pendingPresence = [];
                  var h = [], D = R.default.create();
                  M.default.logAction(M.default.LOG_MICRO, "RealtimePresence.onAttached", "sending " + i + " queued presence messages");
                  for (var P = 0; P < i; P++) {
                    var E = s[P];
                    h.push(E.presence), D.push(E.callback);
                  }
                  this.channel.sendPresence(h, D);
                }
              }, t.prototype.actOnChannelState = function(e, s, i) {
                switch (e) {
                  case "attached":
                    this.onAttached(s);
                    break;
                  case "detached":
                  case "failed":
                    this._clearMyMembers(), this.members.clear();
                  case "suspended":
                    this.failPendingPresence(i);
                    break;
                }
              }, t.prototype.failPendingPresence = function(e) {
                if (this.pendingPresence.length) {
                  M.default.logAction(M.default.LOG_MINOR, "RealtimeChannel.failPendingPresence", "channel; name = " + this.channel.name + ", err = " + a.inspectError(e));
                  for (var s = 0; s < this.pendingPresence.length; s++)
                    try {
                      this.pendingPresence[s].callback(e);
                    } catch {
                    }
                  this.pendingPresence = [];
                }
              }, t.prototype._clearMyMembers = function() {
                this._myMembers.clear();
              }, t.prototype._ensureMyMembersPresent = function() {
                var e = this, s = this._myMembers, i = function(P) {
                  if (P) {
                    var E = "Presence auto-re-enter failed: " + P.toString(), O = new I.default(E, 91004, 400);
                    M.default.logAction(M.default.LOG_ERROR, "RealtimePresence._ensureMyMembersPresent()", E);
                    var y = new o.default(e.channel.state, e.channel.state, !0, !1, O);
                    e.channel.emit("update", y);
                  }
                };
                for (var h in s.map) {
                  var D = s.map[h];
                  M.default.logAction(M.default.LOG_MICRO, "RealtimePresence._ensureMyMembersPresent()", 'Auto-reentering clientId "' + D.clientId + '" into the presence set'), this._enterOrUpdateClient(D.id, D.clientId, D.data, "enter", i);
                }
              }, t.prototype._synthesizeLeaves = function(e) {
                var s = this.subscriptions;
                a.arrForEach(e, function(i) {
                  var h = b.default.fromValues({
                    action: "leave",
                    connectionId: i.connectionId,
                    clientId: i.clientId,
                    data: i.data,
                    encoding: i.encoding,
                    timestamp: a.now()
                  });
                  s.emit("leave", h);
                });
              }, t.prototype.on = function() {
                for (var e = [], s = 0; s < arguments.length; s++)
                  e[s] = arguments[s];
                M.default.deprecated("presence.on", "presence.subscribe"), this.subscribe.apply(this, e);
              }, t.prototype.off = function() {
                for (var e = [], s = 0; s < arguments.length; s++)
                  e[s] = arguments[s];
                M.default.deprecated("presence.off", "presence.unsubscribe"), this.unsubscribe.apply(this, e);
              }, t.prototype.subscribe = function() {
                for (var e = [], s = 0; s < arguments.length; s++)
                  e[s] = arguments[s];
                var i = v.default.processListenerArgs(e), h = i[0], D = i[1], P = i[2], E = this.channel;
                if (!P) {
                  if (this.channel.realtime.options.promises)
                    return a.promisify(this, "subscribe", [h, D]);
                  P = d;
                }
                if (E.state === "failed") {
                  P(I.default.fromValues(E.invalidStateError()));
                  return;
                }
                this.subscriptions.on(h, D), E.attach(P);
              }, t.prototype.unsubscribe = function() {
                for (var e = [], s = 0; s < arguments.length; s++)
                  e[s] = arguments[s];
                var i = v.default.processListenerArgs(e), h = i[0], D = i[1];
                this.subscriptions.off(h, D);
              }, t;
            }(w.default)
          ), r = (
            /** @class */
            function(n) {
              g.__extends(t, n);
              function t(e, s) {
                var i = n.call(this) || this;
                return i.presence = e, i.map = /* @__PURE__ */ Object.create(null), i.syncInProgress = !1, i.residualMembers = null, i.memberKey = s, i;
              }
              return t.prototype.get = function(e) {
                return this.map[e];
              }, t.prototype.getClient = function(e) {
                var s = this.map, i = [];
                for (var h in s) {
                  var D = s[h];
                  D.clientId == e && D.action != "absent" && i.push(D);
                }
                return i;
              }, t.prototype.list = function(e) {
                var s = this.map, i = e && e.clientId, h = e && e.connectionId, D = [];
                for (var P in s) {
                  var E = s[P];
                  E.action !== "absent" && (i && i != E.clientId || h && h != E.connectionId || D.push(E));
                }
                return D;
              }, t.prototype.put = function(e) {
                (e.action === "enter" || e.action === "update") && (e = b.default.fromValues(e), e.action = "present");
                var s = this.map, i = this.memberKey(e);
                this.residualMembers && delete this.residualMembers[i];
                var h = s[i];
                return h && !c(e, h) ? !1 : (s[i] = e, !0);
              }, t.prototype.values = function() {
                var e = this.map, s = [];
                for (var i in e) {
                  var h = e[i];
                  h.action != "absent" && s.push(h);
                }
                return s;
              }, t.prototype.remove = function(e) {
                var s = this.map, i = this.memberKey(e), h = s[i];
                return h && !c(e, h) ? !1 : (this.syncInProgress ? (e = b.default.fromValues(e), e.action = "absent", s[i] = e) : delete s[i], !0);
              }, t.prototype.startSync = function() {
                var e = this.map, s = this.syncInProgress;
                M.default.logAction(M.default.LOG_MINOR, "PresenceMap.startSync()", "channel = " + this.presence.channel.name + "; syncInProgress = " + s), this.syncInProgress || (this.residualMembers = a.copy(e), this.setInProgress(!0));
              }, t.prototype.endSync = function() {
                var e = this.map, s = this.syncInProgress;
                if (M.default.logAction(M.default.LOG_MINOR, "PresenceMap.endSync()", "channel = " + this.presence.channel.name + "; syncInProgress = " + s), s) {
                  for (var i in e) {
                    var h = e[i];
                    h.action === "absent" && delete e[i];
                  }
                  this.presence._synthesizeLeaves(a.valuesArray(this.residualMembers));
                  for (var i in this.residualMembers)
                    delete e[i];
                  this.residualMembers = null, this.setInProgress(!1);
                }
                this.emit("sync");
              }, t.prototype.waitSync = function(e) {
                var s = this.syncInProgress;
                if (M.default.logAction(M.default.LOG_MINOR, "PresenceMap.waitSync()", "channel = " + this.presence.channel.name + "; syncInProgress = " + s), !s) {
                  e();
                  return;
                }
                this.once("sync", e);
              }, t.prototype.clear = function() {
                this.map = {}, this.setInProgress(!1), this.residualMembers = null;
              }, t.prototype.setInProgress = function(e) {
                M.default.logAction(M.default.LOG_MICRO, "PresenceMap.setInProgress()", "inProgress = " + e), this.syncInProgress = e, this.presence.syncComplete = !e;
              }, t;
            }(T.default)
          );
          p.default = l;
        },
        /* 55 */
        /***/
        function(H, p, f) {
          Object.defineProperty(p, "__esModule", { value: !0 });
          var g = f(0), a = f(56), w = f(31), T = f(11), M = g.__importDefault(f(5)), b = g.__importDefault(f(3)), I = (
            /** @class */
            function() {
              function v() {
                this.base64CharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", this.hexCharSet = "0123456789abcdef";
              }
              return v.prototype.isWordArray = function(R) {
                return R != null && R.sigBytes !== void 0;
              }, v.prototype.isArrayBuffer = function(R) {
                return R != null && R.constructor === ArrayBuffer;
              }, v.prototype.isTypedArray = function(R) {
                return !!ArrayBuffer && ArrayBuffer.isView && ArrayBuffer.isView(R);
              }, v.prototype.uint8ViewToBase64 = function(R) {
                for (var o = "", d = this.base64CharSet, S = R.byteLength, A = S % 3, u = S - A, c, l, r, n, t, e = 0; e < u; e = e + 3)
                  t = R[e] << 16 | R[e + 1] << 8 | R[e + 2], c = (t & 16515072) >> 18, l = (t & 258048) >> 12, r = (t & 4032) >> 6, n = t & 63, o += d[c] + d[l] + d[r] + d[n];
                return A == 1 ? (t = R[u], c = (t & 252) >> 2, l = (t & 3) << 4, o += d[c] + d[l] + "==") : A == 2 && (t = R[u] << 8 | R[u + 1], c = (t & 64512) >> 10, l = (t & 1008) >> 4, r = (t & 15) << 2, o += d[c] + d[l] + d[r] + "="), o;
              }, v.prototype.base64ToArrayBuffer = function(R) {
                for (var o = atob == null ? void 0 : atob(R), d = o.length, S = new Uint8Array(d), A = 0; A < d; A++) {
                  var u = o.charCodeAt(A);
                  S[A] = u;
                }
                return S.buffer;
              }, v.prototype.isBuffer = function(R) {
                return this.isArrayBuffer(R) || this.isWordArray(R) || this.isTypedArray(R);
              }, v.prototype.toBuffer = function(R) {
                if (!ArrayBuffer)
                  throw new Error("Can't convert to Buffer: browser does not support the necessary types");
                if (this.isArrayBuffer(R))
                  return new Uint8Array(R);
                if (this.isTypedArray(R))
                  return new Uint8Array(R.buffer);
                if (this.isWordArray(R)) {
                  for (var o = new ArrayBuffer(R.sigBytes), d = new Uint8Array(o), S = 0; S < R.sigBytes; S++)
                    d[S] = R.words[S >>> 2] >>> 24 - S % 4 * 8 & 255;
                  return d;
                }
                throw new Error("BufferUtils.toBuffer expected an arraybuffer, typed array, or CryptoJS wordarray");
              }, v.prototype.toArrayBuffer = function(R) {
                return this.isArrayBuffer(R) ? R : this.toBuffer(R).buffer;
              }, v.prototype.toWordArray = function(R) {
                return this.isTypedArray(R) && (R = R.buffer), this.isWordArray(R) ? R : M.default.create(R);
              }, v.prototype.base64Encode = function(R) {
                return this.isWordArray(R) ? (0, T.stringify)(R) : this.uint8ViewToBase64(this.toBuffer(R));
              }, v.prototype.base64Decode = function(R) {
                return ArrayBuffer && b.default.Config.atob ? this.base64ToArrayBuffer(R) : (0, T.parse)(R);
              }, v.prototype.hexEncode = function(R) {
                return (0, a.stringify)(this.toWordArray(R));
              }, v.prototype.hexDecode = function(R) {
                var o = (0, a.parse)(R);
                return ArrayBuffer ? this.toArrayBuffer(o) : o;
              }, v.prototype.utf8Encode = function(R) {
                return b.default.Config.TextEncoder ? new b.default.Config.TextEncoder().encode(R).buffer : (0, w.parse)(R);
              }, v.prototype.utf8Decode = function(R) {
                if (!this.isBuffer(R))
                  throw new Error("Expected input of utf8decode to be an arraybuffer, typed array, or CryptoJS wordarray");
                return TextDecoder && !this.isWordArray(R) ? new TextDecoder().decode(R) : (R = this.toWordArray(R), (0, w.stringify)(R));
              }, v.prototype.bufferCompare = function(R, o) {
                if (!R)
                  return -1;
                if (!o)
                  return 1;
                var d = this.toWordArray(R), S = this.toWordArray(o);
                d.clamp(), S.clamp();
                var A = d.sigBytes - S.sigBytes;
                if (A != 0)
                  return A;
                for (var u = d.words, c = S.words, l = 0; l < u.length; l++)
                  if (A = u[l] - c[l], A != 0)
                    return A;
                return 0;
              }, v.prototype.byteLength = function(R) {
                return this.isArrayBuffer(R) || this.isTypedArray(R) ? R.byteLength : this.isWordArray(R) ? R.sigBytes : -1;
              }, v.prototype.typedArrayToBuffer = function(R) {
                return R.buffer;
              }, v;
            }()
          );
          p.default = new I();
        },
        /* 56 */
        /***/
        function(H, p, f) {
          (function(g, a) {
            H.exports = a(f(6));
          })(this, function(g) {
            return g.enc.Hex;
          });
        },
        /* 57 */
        /***/
        function(H, p, f) {
          f.r(p);
          var g = f(5), a = /* @__PURE__ */ f.n(g), w = f(11), T = f(22), M = /* @__PURE__ */ f.n(T), b = f(2), I = /* @__PURE__ */ f.n(b), v = f(4), R = /* @__PURE__ */ f.n(v), o = function(d, S) {
            var A = "aes", u = 256, c = "cbc", l = 16, r = 4, n = 4294967296, t = 2147483648, e;
            if (d.getRandomWordArray)
              e = d.getRandomWordArray;
            else if (typeof Uint32Array < "u" && d.getRandomValues) {
              var s = new Uint32Array(r);
              e = function(C, N) {
                var B = C / 4, j = B == r ? s : new Uint32Array(B);
                d.getRandomValues(j, function(z) {
                  typeof N < "u" && N(z, S.toWordArray(j));
                });
              };
            } else
              e = function(C, N) {
                I.a.logAction(
                  I.a.LOG_MAJOR,
                  "Ably.Crypto.generateRandom()",
                  "Warning: the browser you are using does not support secure cryptographically secure randomness generation; falling back to insecure Math.random()"
                );
                for (var B = C / 4, j = new Array(B), z = 0; z < B; z++)
                  j[z] = Math.floor(Math.random() * n) - t;
                N(null, a.a.create(j));
              };
            function i(C) {
              return C + l & -l;
            }
            function h(C) {
              if (C.algorithm === "aes" && C.mode === "cbc") {
                if (C.keyLength === 128 || C.keyLength === 256)
                  return;
                throw new Error(
                  "Unsupported key length " + C.keyLength + " for aes-cbc encryption. Encryption key must be 128 or 256 bits (16 or 32 ASCII characters)"
                );
              }
            }
            function D(C) {
              return C.replace("_", "/").replace("-", "+");
            }
            var P = [
              a.a.create([269488144, 269488144, 269488144, 269488144], 16),
              a.a.create([16777216], 1),
              a.a.create([33685504], 2),
              a.a.create([50529024], 3),
              a.a.create([67372036], 4),
              a.a.create([84215045, 83886080], 5),
              a.a.create([101058054, 101056512], 6),
              a.a.create([117901063, 117901056], 7),
              a.a.create([134744072, 134744072], 8),
              a.a.create([151587081, 151587081, 150994944], 9),
              a.a.create([168430090, 168430090, 168427520], 10),
              a.a.create([185273099, 185273099, 185273088], 11),
              a.a.create([202116108, 202116108, 202116108], 12),
              a.a.create([218959117, 218959117, 218959117, 218103808], 13),
              a.a.create([235802126, 235802126, 235802126, 235798528], 14),
              a.a.create([252645135, 252645135, 252645135, 252645135], 15),
              a.a.create([269488144, 269488144, 269488144, 269488144], 16)
            ];
            function E() {
            }
            function O() {
              this.algorithm = null, this.keyLength = null, this.mode = null, this.key = null;
            }
            E.CipherParams = O, E.getDefaultParams = function(C) {
              var N;
              if (typeof C == "function" || typeof C == "string") {
                if (I.a.deprecated("Crypto.getDefaultParams(key, callback)", "Crypto.getDefaultParams({key: key})"), typeof C == "function")
                  E.generateRandomKey(function(j) {
                    C(null, E.getDefaultParams({ key: j }));
                  });
                else if (typeof arguments[1] == "function")
                  arguments[1](null, E.getDefaultParams({ key: C }));
                else
                  throw new Error("Invalid arguments for Crypto.getDefaultParams");
                return;
              }
              if (!C.key)
                throw new Error("Crypto.getDefaultParams: a key is required");
              typeof C.key == "string" ? N = Object(w.parse)(D(C.key)) : N = S.toWordArray(C.key);
              var B = new O();
              if (B.key = N, B.algorithm = C.algorithm || A, B.keyLength = N.words.length * (4 * 8), B.mode = C.mode || c, C.keyLength && C.keyLength !== B.keyLength)
                throw new Error(
                  "Crypto.getDefaultParams: a keyLength of " + C.keyLength + " was specified, but the key actually has length " + B.keyLength
                );
              return h(B), B;
            }, E.generateRandomKey = function(C, N) {
              arguments.length == 1 && typeof C == "function" && (N = C, C = void 0), e((C || u) / 8, function(B, j) {
                N !== void 0 && N(B ? R.a.fromValues(B) : null, j);
              });
            }, E.getCipher = function(C) {
              var N = C instanceof O ? C : E.getDefaultParams(C);
              return { cipherParams: N, cipher: new y(N, r, C.iv) };
            };
            function y(C, N, B) {
              this.algorithm = C.algorithm + "-" + String(C.keyLength) + "-" + C.mode, this.cjsAlgorithm = C.algorithm.toUpperCase().replace(/-\d+$/, ""), this.key = S.toWordArray(C.key), B && (this.iv = S.toWordArray(B).clone()), this.blockLengthWords = N;
            }
            return y.prototype.encrypt = function(C, N) {
              I.a.logAction(I.a.LOG_MICRO, "CBCCipher.encrypt()", ""), C = S.toWordArray(C);
              var B = C.sigBytes, j = i(B), z = this, _ = function() {
                z.getIv(function(F, m) {
                  if (F) {
                    N(F);
                    return;
                  }
                  var x = z.encryptCipher.process(C.concat(P[j - B])), L = m.concat(x);
                  N(null, L);
                });
              };
              this.encryptCipher ? _() : this.iv ? (this.encryptCipher = M.a.algo[this.cjsAlgorithm].createEncryptor(this.key, { iv: this.iv }), _()) : e(l, function(F, m) {
                if (F) {
                  N(F);
                  return;
                }
                z.encryptCipher = M.a.algo[z.cjsAlgorithm].createEncryptor(z.key, { iv: m }), z.iv = m, _();
              });
            }, y.prototype.decrypt = function(C) {
              I.a.logAction(I.a.LOG_MICRO, "CBCCipher.decrypt()", ""), C = S.toWordArray(C);
              var N = this.blockLengthWords, B = C.words, j = a.a.create(B.slice(0, N)), z = a.a.create(B.slice(N)), _ = M.a.algo[this.cjsAlgorithm].createDecryptor(this.key, { iv: j }), F = _.process(z), m = _.finalize();
              return _.reset(), m && m.sigBytes && F.concat(m), F;
            }, y.prototype.getIv = function(C) {
              if (this.iv) {
                var N = this.iv;
                this.iv = null, C(null, N);
                return;
              }
              var B = this;
              e(l, function(j, z) {
                if (j) {
                  C(j);
                  return;
                }
                C(null, B.encryptCipher.process(z));
              });
            }, E;
          };
          p.default = o;
        },
        /* 58 */
        /***/
        function(H, p, f) {
          (function(g, a) {
            H.exports = a(f(6));
          })(this, function(g) {
            return function() {
              var a = g, w = a.lib, T = w.WordArray, M = a.enc;
              M.Utf16 = M.Utf16BE = {
                /**
                 * Converts a word array to a UTF-16 BE string.
                 *
                 * @param {WordArray} wordArray The word array.
                 *
                 * @return {string} The UTF-16 BE string.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
                 */
                stringify: function(I) {
                  for (var v = I.words, R = I.sigBytes, o = [], d = 0; d < R; d += 2) {
                    var S = v[d >>> 2] >>> 16 - d % 4 * 8 & 65535;
                    o.push(String.fromCharCode(S));
                  }
                  return o.join("");
                },
                /**
                 * Converts a UTF-16 BE string to a word array.
                 *
                 * @param {string} utf16Str The UTF-16 BE string.
                 *
                 * @return {WordArray} The word array.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
                 */
                parse: function(I) {
                  for (var v = I.length, R = [], o = 0; o < v; o++)
                    R[o >>> 1] |= I.charCodeAt(o) << 16 - o % 2 * 16;
                  return T.create(R, v * 2);
                }
              }, M.Utf16LE = {
                /**
                 * Converts a word array to a UTF-16 LE string.
                 *
                 * @param {WordArray} wordArray The word array.
                 *
                 * @return {string} The UTF-16 LE string.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
                 */
                stringify: function(I) {
                  for (var v = I.words, R = I.sigBytes, o = [], d = 0; d < R; d += 2) {
                    var S = b(v[d >>> 2] >>> 16 - d % 4 * 8 & 65535);
                    o.push(String.fromCharCode(S));
                  }
                  return o.join("");
                },
                /**
                 * Converts a UTF-16 LE string to a word array.
                 *
                 * @param {string} utf16Str The UTF-16 LE string.
                 *
                 * @return {WordArray} The word array.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
                 */
                parse: function(I) {
                  for (var v = I.length, R = [], o = 0; o < v; o++)
                    R[o >>> 1] |= b(I.charCodeAt(o) << 16 - o % 2 * 16);
                  return T.create(R, v * 2);
                }
              };
              function b(I) {
                return I << 8 & 4278255360 | I >>> 8 & 16711935;
              }
            }(), g.enc.Utf16;
          });
        },
        /* 59 */
        /***/
        function(H, p, f) {
          (function(g, a) {
            H.exports = a(f(6), f(28));
          })(this, function(g) {
            return function(a) {
              var w = g, T = w.lib, M = T.CipherParams, b = w.enc, I = b.Hex, v = w.format;
              v.Hex = {
                /**
                 * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
                 *
                 * @param {CipherParams} cipherParams The cipher params object.
                 *
                 * @return {string} The hexadecimally encoded string.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
                 */
                stringify: function(R) {
                  return R.ciphertext.toString(I);
                },
                /**
                 * Converts a hexadecimally encoded ciphertext string to a cipher params object.
                 *
                 * @param {string} input The hexadecimally encoded string.
                 *
                 * @return {CipherParams} The cipher params object.
                 *
                 * @static
                 *
                 * @example
                 *
                 *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
                 */
                parse: function(R) {
                  var o = I.parse(R);
                  return M.create({ ciphertext: o });
                }
              };
            }(), g.format.Hex;
          });
        },
        /* 60 */
        /***/
        function(H, p, f) {
          (function(g, a) {
            H.exports = a(f(6), f(11), f(61), f(27), f(28));
          })(this, function(g) {
            return function() {
              var a = g, w = a.lib, T = w.BlockCipher, M = a.algo, b = [], I = [], v = [], R = [], o = [], d = [], S = [], A = [], u = [], c = [];
              (function() {
                for (var n = [], t = 0; t < 256; t++)
                  t < 128 ? n[t] = t << 1 : n[t] = t << 1 ^ 283;
                for (var e = 0, s = 0, t = 0; t < 256; t++) {
                  var i = s ^ s << 1 ^ s << 2 ^ s << 3 ^ s << 4;
                  i = i >>> 8 ^ i & 255 ^ 99, b[e] = i, I[i] = e;
                  var h = n[e], D = n[h], P = n[D], E = n[i] * 257 ^ i * 16843008;
                  v[e] = E << 24 | E >>> 8, R[e] = E << 16 | E >>> 16, o[e] = E << 8 | E >>> 24, d[e] = E;
                  var E = P * 16843009 ^ D * 65537 ^ h * 257 ^ e * 16843008;
                  S[i] = E << 24 | E >>> 8, A[i] = E << 16 | E >>> 16, u[i] = E << 8 | E >>> 24, c[i] = E, e ? (e = h ^ n[n[n[P ^ h]]], s ^= n[n[s]]) : e = s = 1;
                }
              })();
              var l = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], r = M.AES = T.extend({
                _doReset: function() {
                  var n;
                  if (!(this._nRounds && this._keyPriorReset === this._key)) {
                    for (var t = this._keyPriorReset = this._key, e = t.words, s = t.sigBytes / 4, i = this._nRounds = s + 6, h = (i + 1) * 4, D = this._keySchedule = [], P = 0; P < h; P++)
                      P < s ? D[P] = e[P] : (n = D[P - 1], P % s ? s > 6 && P % s == 4 && (n = b[n >>> 24] << 24 | b[n >>> 16 & 255] << 16 | b[n >>> 8 & 255] << 8 | b[n & 255]) : (n = n << 8 | n >>> 24, n = b[n >>> 24] << 24 | b[n >>> 16 & 255] << 16 | b[n >>> 8 & 255] << 8 | b[n & 255], n ^= l[P / s | 0] << 24), D[P] = D[P - s] ^ n);
                    for (var E = this._invKeySchedule = [], O = 0; O < h; O++) {
                      var P = h - O;
                      if (O % 4)
                        var n = D[P];
                      else
                        var n = D[P - 4];
                      O < 4 || P <= 4 ? E[O] = n : E[O] = S[b[n >>> 24]] ^ A[b[n >>> 16 & 255]] ^ u[b[n >>> 8 & 255]] ^ c[b[n & 255]];
                    }
                  }
                },
                encryptBlock: function(n, t) {
                  this._doCryptBlock(n, t, this._keySchedule, v, R, o, d, b);
                },
                decryptBlock: function(n, t) {
                  var e = n[t + 1];
                  n[t + 1] = n[t + 3], n[t + 3] = e, this._doCryptBlock(n, t, this._invKeySchedule, S, A, u, c, I);
                  var e = n[t + 1];
                  n[t + 1] = n[t + 3], n[t + 3] = e;
                },
                _doCryptBlock: function(n, t, e, s, i, h, D, P) {
                  for (var E = this._nRounds, O = n[t] ^ e[0], y = n[t + 1] ^ e[1], C = n[t + 2] ^ e[2], N = n[t + 3] ^ e[3], B = 4, j = 1; j < E; j++) {
                    var z = s[O >>> 24] ^ i[y >>> 16 & 255] ^ h[C >>> 8 & 255] ^ D[N & 255] ^ e[B++], _ = s[y >>> 24] ^ i[C >>> 16 & 255] ^ h[N >>> 8 & 255] ^ D[O & 255] ^ e[B++], F = s[C >>> 24] ^ i[N >>> 16 & 255] ^ h[O >>> 8 & 255] ^ D[y & 255] ^ e[B++], m = s[N >>> 24] ^ i[O >>> 16 & 255] ^ h[y >>> 8 & 255] ^ D[C & 255] ^ e[B++];
                    O = z, y = _, C = F, N = m;
                  }
                  var z = (P[O >>> 24] << 24 | P[y >>> 16 & 255] << 16 | P[C >>> 8 & 255] << 8 | P[N & 255]) ^ e[B++], _ = (P[y >>> 24] << 24 | P[C >>> 16 & 255] << 16 | P[N >>> 8 & 255] << 8 | P[O & 255]) ^ e[B++], F = (P[C >>> 24] << 24 | P[N >>> 16 & 255] << 16 | P[O >>> 8 & 255] << 8 | P[y & 255]) ^ e[B++], m = (P[N >>> 24] << 24 | P[O >>> 16 & 255] << 16 | P[y >>> 8 & 255] << 8 | P[C & 255]) ^ e[B++];
                  n[t] = z, n[t + 1] = _, n[t + 2] = F, n[t + 3] = m;
                },
                keySize: 256 / 32
              });
              a.AES = T._createHelper(r);
            }(), g.AES;
          });
        },
        /* 61 */
        /***/
        function(H, p, f) {
          (function(g, a) {
            H.exports = a(f(6));
          })(this, function(g) {
            return function(a) {
              var w = g, T = w.lib, M = T.WordArray, b = T.Hasher, I = w.algo, v = [];
              (function() {
                for (var u = 0; u < 64; u++)
                  v[u] = a.abs(a.sin(u + 1)) * 4294967296 | 0;
              })();
              var R = I.MD5 = b.extend({
                _doReset: function() {
                  this._hash = new M.init([
                    1732584193,
                    4023233417,
                    2562383102,
                    271733878
                  ]);
                },
                _doProcessBlock: function(u, c) {
                  for (var l = 0; l < 16; l++) {
                    var r = c + l, n = u[r];
                    u[r] = (n << 8 | n >>> 24) & 16711935 | (n << 24 | n >>> 8) & 4278255360;
                  }
                  var t = this._hash.words, e = u[c + 0], s = u[c + 1], i = u[c + 2], h = u[c + 3], D = u[c + 4], P = u[c + 5], E = u[c + 6], O = u[c + 7], y = u[c + 8], C = u[c + 9], N = u[c + 10], B = u[c + 11], j = u[c + 12], z = u[c + 13], _ = u[c + 14], F = u[c + 15], m = t[0], x = t[1], L = t[2], U = t[3];
                  m = o(m, x, L, U, e, 7, v[0]), U = o(U, m, x, L, s, 12, v[1]), L = o(L, U, m, x, i, 17, v[2]), x = o(x, L, U, m, h, 22, v[3]), m = o(m, x, L, U, D, 7, v[4]), U = o(U, m, x, L, P, 12, v[5]), L = o(L, U, m, x, E, 17, v[6]), x = o(x, L, U, m, O, 22, v[7]), m = o(m, x, L, U, y, 7, v[8]), U = o(U, m, x, L, C, 12, v[9]), L = o(L, U, m, x, N, 17, v[10]), x = o(x, L, U, m, B, 22, v[11]), m = o(m, x, L, U, j, 7, v[12]), U = o(U, m, x, L, z, 12, v[13]), L = o(L, U, m, x, _, 17, v[14]), x = o(x, L, U, m, F, 22, v[15]), m = d(m, x, L, U, s, 5, v[16]), U = d(U, m, x, L, E, 9, v[17]), L = d(L, U, m, x, B, 14, v[18]), x = d(x, L, U, m, e, 20, v[19]), m = d(m, x, L, U, P, 5, v[20]), U = d(U, m, x, L, N, 9, v[21]), L = d(L, U, m, x, F, 14, v[22]), x = d(x, L, U, m, D, 20, v[23]), m = d(m, x, L, U, C, 5, v[24]), U = d(U, m, x, L, _, 9, v[25]), L = d(L, U, m, x, h, 14, v[26]), x = d(x, L, U, m, y, 20, v[27]), m = d(m, x, L, U, z, 5, v[28]), U = d(U, m, x, L, i, 9, v[29]), L = d(L, U, m, x, O, 14, v[30]), x = d(x, L, U, m, j, 20, v[31]), m = S(m, x, L, U, P, 4, v[32]), U = S(U, m, x, L, y, 11, v[33]), L = S(L, U, m, x, B, 16, v[34]), x = S(x, L, U, m, _, 23, v[35]), m = S(m, x, L, U, s, 4, v[36]), U = S(U, m, x, L, D, 11, v[37]), L = S(L, U, m, x, O, 16, v[38]), x = S(x, L, U, m, N, 23, v[39]), m = S(m, x, L, U, z, 4, v[40]), U = S(U, m, x, L, e, 11, v[41]), L = S(L, U, m, x, h, 16, v[42]), x = S(x, L, U, m, E, 23, v[43]), m = S(m, x, L, U, C, 4, v[44]), U = S(U, m, x, L, j, 11, v[45]), L = S(L, U, m, x, F, 16, v[46]), x = S(x, L, U, m, i, 23, v[47]), m = A(m, x, L, U, e, 6, v[48]), U = A(U, m, x, L, O, 10, v[49]), L = A(L, U, m, x, _, 15, v[50]), x = A(x, L, U, m, P, 21, v[51]), m = A(m, x, L, U, j, 6, v[52]), U = A(U, m, x, L, h, 10, v[53]), L = A(L, U, m, x, N, 15, v[54]), x = A(x, L, U, m, s, 21, v[55]), m = A(m, x, L, U, y, 6, v[56]), U = A(U, m, x, L, F, 10, v[57]), L = A(L, U, m, x, E, 15, v[58]), x = A(x, L, U, m, z, 21, v[59]), m = A(m, x, L, U, D, 6, v[60]), U = A(U, m, x, L, B, 10, v[61]), L = A(L, U, m, x, i, 15, v[62]), x = A(x, L, U, m, C, 21, v[63]), t[0] = t[0] + m | 0, t[1] = t[1] + x | 0, t[2] = t[2] + L | 0, t[3] = t[3] + U | 0;
                },
                _doFinalize: function() {
                  var u = this._data, c = u.words, l = this._nDataBytes * 8, r = u.sigBytes * 8;
                  c[r >>> 5] |= 128 << 24 - r % 32;
                  var n = a.floor(l / 4294967296), t = l;
                  c[(r + 64 >>> 9 << 4) + 15] = (n << 8 | n >>> 24) & 16711935 | (n << 24 | n >>> 8) & 4278255360, c[(r + 64 >>> 9 << 4) + 14] = (t << 8 | t >>> 24) & 16711935 | (t << 24 | t >>> 8) & 4278255360, u.sigBytes = (c.length + 1) * 4, this._process();
                  for (var e = this._hash, s = e.words, i = 0; i < 4; i++) {
                    var h = s[i];
                    s[i] = (h << 8 | h >>> 24) & 16711935 | (h << 24 | h >>> 8) & 4278255360;
                  }
                  return e;
                },
                clone: function() {
                  var u = b.clone.call(this);
                  return u._hash = this._hash.clone(), u;
                }
              });
              function o(u, c, l, r, n, t, e) {
                var s = u + (c & l | ~c & r) + n + e;
                return (s << t | s >>> 32 - t) + c;
              }
              function d(u, c, l, r, n, t, e) {
                var s = u + (c & r | l & ~r) + n + e;
                return (s << t | s >>> 32 - t) + c;
              }
              function S(u, c, l, r, n, t, e) {
                var s = u + (c ^ l ^ r) + n + e;
                return (s << t | s >>> 32 - t) + c;
              }
              function A(u, c, l, r, n, t, e) {
                var s = u + (l ^ (c | ~r)) + n + e;
                return (s << t | s >>> 32 - t) + c;
              }
              w.MD5 = b._createHelper(R), w.HmacMD5 = b._createHmacHelper(R);
            }(Math), g.MD5;
          });
        },
        /* 62 */
        /***/
        function(H, p, f) {
          var g;
          Object.defineProperty(p, "__esModule", { value: !0 });
          var a = f(0), w = a.__importDefault(f(3)), T = a.__importStar(f(1)), M = a.__importDefault(f(8)), b = f(4), I = a.__importDefault(f(18)), v = a.__importDefault(f(16)), R = a.__importDefault(f(21)), o = a.__importDefault(f(2)), d = f(29), S = a.__importDefault(f(63)), A = f(25);
          function u(r) {
            var n = r.statusCode;
            return n === 408 && !r.code || n === 400 && !r.code || n >= 500 && n <= 504;
          }
          function c(r) {
            var n = r.connection, t = n && n.connectionManager.host;
            return t ? [t].concat(M.default.getFallbackHosts(r.options)) : M.default.getHosts(r.options);
          }
          var l = (g = /** @class */
          function() {
            function r(n) {
              this.checksInProgress = null, this.checkConnectivity = void 0, this.supportsAuthHeaders = !1, this.supportsLinkHeaders = !1, this._getHosts = c, this.options = n || {};
              var t = this.options.connectivityCheckUrl || M.default.connectivityCheckUrl, e = this.options.connectivityCheckParams, s = !this.options.connectivityCheckUrl;
              w.default.Config.xhrSupported ? (this.supportsAuthHeaders = !0, this.Request = function(i, h, D, P, E, O, y) {
                var C = v.default.createRequest(D, P, E, O, R.default.REQ_SEND, h && h.options.timeouts, i);
                return C.once("complete", y), C.exec(), C;
              }, this.options.disableConnectivityCheck ? this.checkConnectivity = function(i) {
                i(null, !0);
              } : this.checkConnectivity = function(i) {
                o.default.logAction(o.default.LOG_MICRO, "(XHRRequest)Http.checkConnectivity()", "Sending; " + t), this.doUri(I.default.Get, null, t, null, null, e, function(h, D, P, E, O) {
                  var y = !1;
                  s ? y = !h && (D == null ? void 0 : D.replace(/\n/, "")) == "yes" : y = !h && (0, A.isSuccessCode)(O), o.default.logAction(o.default.LOG_MICRO, "(XHRRequest)Http.checkConnectivity()", "Result: " + y), i(null, y);
                });
              }) : w.default.Config.jsonpSupported ? (this.Request = function(i, h, D, P, E, O, y) {
                var C = (0, d.createRequest)(D, P, E, O, R.default.REQ_SEND, h && h.options.timeouts, i);
                return C.once("complete", y), w.default.Config.nextTick(function() {
                  C.exec();
                }), C;
              }, this.options.disableConnectivityCheck ? this.checkConnectivity = function(i) {
                i(null, !0);
              } : this.checkConnectivity = function(i) {
                var h = this, D = M.default.jsonpInternetUpUrl;
                if (this.checksInProgress) {
                  this.checksInProgress.push(i);
                  return;
                }
                this.checksInProgress = [i], o.default.logAction(o.default.LOG_MICRO, "(JSONP)Http.checkConnectivity()", "Sending; " + D);
                var P = new d.Request("isTheInternetUp", D, null, null, null, R.default.REQ_SEND, M.default.TIMEOUTS);
                P.once("complete", function(E, O) {
                  var y = !E && O;
                  o.default.logAction(o.default.LOG_MICRO, "(JSONP)Http.checkConnectivity()", "Result: " + y);
                  for (var C = 0; C < h.checksInProgress.length; C++)
                    h.checksInProgress[C](null, y);
                  h.checksInProgress = null;
                }), w.default.Config.nextTick(function() {
                  P.exec();
                });
              }) : w.default.Config.fetchSupported ? (this.supportsAuthHeaders = !0, this.Request = S.default, this.checkConnectivity = function(i) {
                o.default.logAction(o.default.LOG_MICRO, "(Fetch)Http.checkConnectivity()", "Sending; " + t), this.doUri(I.default.Get, null, t, null, null, null, function(h, D) {
                  var P = !h && (D == null ? void 0 : D.replace(/\n/, "")) == "yes";
                  o.default.logAction(o.default.LOG_MICRO, "(Fetch)Http.checkConnectivity()", "Result: " + P), i(null, P);
                });
              }) : this.Request = function(i, h, D, P, E, O, y) {
                y(new b.PartialErrorInfo("no supported HTTP transports available", null, 400), null);
              };
            }
            return r.prototype.do = function(n, t, e, s, i, h, D) {
              var P = this, E = typeof e == "function" ? e : function(N) {
                return t.baseUri(N) + e;
              }, O = t._currentFallback;
              if (O)
                if (O.validUntil > T.now()) {
                  if (!this.Request) {
                    D == null || D(new b.PartialErrorInfo("Request invoked before assigned to", null, 500));
                    return;
                  }
                  this.Request(n, t, E(O.host), s, h, i, function(N) {
                    for (var B = [], j = 1; j < arguments.length; j++)
                      B[j - 1] = arguments[j];
                    if (N && u(N)) {
                      t._currentFallback = null, P.do(n, t, e, s, i, h, D);
                      return;
                    }
                    D == null || D.apply(void 0, a.__spreadArray([N], B, !1));
                  });
                  return;
                } else
                  t._currentFallback = null;
              var y = c(t);
              if (y.length === 1) {
                this.doUri(n, t, E(y[0]), s, i, h, D);
                return;
              }
              var C = function(N, B) {
                var j = N.shift();
                P.doUri(n, t, E(j), s, i, h, function(z) {
                  for (var _ = [], F = 1; F < arguments.length; F++)
                    _[F - 1] = arguments[F];
                  if (z && u(z) && N.length) {
                    C(N, !0);
                    return;
                  }
                  B && (t._currentFallback = {
                    host: j,
                    validUntil: T.now() + t.options.timeouts.fallbackRetryTimeout
                  }), D == null || D.apply(void 0, a.__spreadArray([z], _, !1));
                });
              };
              C(y);
            }, r.prototype.doUri = function(n, t, e, s, i, h, D) {
              if (!this.Request) {
                D(new b.PartialErrorInfo("Request invoked before assigned to", null, 500));
                return;
              }
              this.Request(n, t, e, s, h, i, D);
            }, r;
          }(), g.methods = [I.default.Get, I.default.Delete, I.default.Post, I.default.Put, I.default.Patch], g.methodsWithoutBody = [I.default.Get, I.default.Delete], g.methodsWithBody = [I.default.Post, I.default.Put, I.default.Patch], g);
          p.default = l;
        },
        /* 63 */
        /***/
        function(H, p, f) {
          Object.defineProperty(p, "__esModule", { value: !0 });
          var g = f(0), a = g.__importStar(f(4)), w = g.__importDefault(f(3)), T = g.__importDefault(f(8)), M = g.__importStar(f(1)), b = f(1);
          function I(o, d) {
            return !!d.get("x-ably-errorcode");
          }
          function v(o, d) {
            if (I(o, d))
              return o.error && a.default.fromValues(o.error);
          }
          function R(o, d, S, A, u, c, l) {
            var r = new Headers(A || {}), n = o ? o.toUpperCase() : M.isEmptyArg(c) ? "GET" : "POST", t = new AbortController(), e = setTimeout(function() {
              t.abort(), l(new a.PartialErrorInfo("Request timed out", null, 408));
            }, d ? d.options.timeouts.httpRequestTimeout : T.default.TIMEOUTS.httpRequestTimeout), s = {
              method: n,
              headers: r,
              body: c
            };
            w.default.Config.isWebworker || (s.credentials = r.has("authorization") ? "include" : "same-origin"), (0, b.getGlobalObject)().fetch(S + "?" + new URLSearchParams(u || {}), s).then(function(i) {
              clearTimeout(e);
              var h = i.headers.get("Content-Type"), D;
              h && h.indexOf("application/x-msgpack") > -1 ? D = i.arrayBuffer() : h && h.indexOf("application/json") > -1 ? D = i.json() : D = i.text(), D.then(function(P) {
                var E = !!h && h.indexOf("application/x-msgpack") === -1;
                if (i.ok)
                  l(null, P, i.headers, E, i.status);
                else {
                  var O = v(P, i.headers) || new a.PartialErrorInfo("Error response received from server: " + i.status + " body was: " + w.default.Config.inspect(P), null, i.status);
                  l(O, P, i.headers, E, i.status);
                }
              });
            }).catch(function(i) {
              clearTimeout(e), l(i);
            });
          }
          p.default = R;
        },
        /* 64 */
        /***/
        function(H, p, f) {
          Object.defineProperty(p, "__esModule", { value: !0 });
          var g = f(0), a = g.__importDefault(f(41)), w = g.__importStar(f(1)), T = w.getGlobalObject();
          typeof Window > "u" && typeof WorkerGlobalScope > "u" && console.log("Warning: this distribution of Ably is intended for browsers. On nodejs, please use the 'ably' package on npm");
          function M() {
            var R = T.location;
            return !T.WebSocket || !R || !R.origin || R.origin.indexOf("http") > -1;
          }
          var b = T.navigator && T.navigator.userAgent.toString(), I = T.location && T.location.href, v = {
            agent: "browser",
            logTimestamps: !0,
            userAgent: b,
            currentUrl: I,
            noUpgrade: b && !!b.match(/MSIE\s8\.0/),
            binaryType: "arraybuffer",
            WebSocket: T.WebSocket,
            fetchSupported: !!T.fetch,
            xhrSupported: T.XMLHttpRequest && "withCredentials" in new XMLHttpRequest(),
            jsonpSupported: typeof document < "u",
            allowComet: M(),
            streamingSupported: !0,
            useProtocolHeartbeats: !0,
            createHmac: null,
            msgpack: a.default,
            supportsBinary: !!T.TextDecoder,
            preferBinary: !1,
            ArrayBuffer: T.ArrayBuffer,
            atob: T.atob,
            nextTick: typeof T.setImmediate < "u" ? T.setImmediate.bind(T) : function(R) {
              setTimeout(R, 0);
            },
            addEventListener: T.addEventListener,
            inspect: JSON.stringify,
            stringByteSize: function(R) {
              return T.TextDecoder && new T.TextEncoder().encode(R).length || R.length;
            },
            TextEncoder: T.TextEncoder,
            TextDecoder: T.TextDecoder,
            Promise: T.Promise,
            getRandomValues: function(R) {
              if (R !== void 0)
                return function(o, d) {
                  R.getRandomValues(o), d && d(null);
                };
            }(T.crypto || msCrypto)
          };
          p.default = v;
        },
        /* 65 */
        /***/
        function(H, p, f) {
          (function(g) {
            Object.defineProperty(p, "__esModule", { value: !0 });
            var a = f(0), w = a.__importStar(f(1)), T = "ablyjs-storage-test", M = (
              /** @class */
              function() {
                function b() {
                  try {
                    g.sessionStorage.setItem(T, T), g.sessionStorage.removeItem(T), this.sessionSupported = !0;
                  } catch {
                    this.sessionSupported = !1;
                  }
                  try {
                    g.localStorage.setItem(T, T), g.localStorage.removeItem(T), this.localSupported = !0;
                  } catch {
                    this.localSupported = !1;
                  }
                }
                return b.prototype.get = function(I) {
                  return this._get(I, !1);
                }, b.prototype.getSession = function(I) {
                  return this._get(I, !0);
                }, b.prototype.remove = function(I) {
                  return this._remove(I, !1);
                }, b.prototype.removeSession = function(I) {
                  return this._remove(I, !0);
                }, b.prototype.set = function(I, v, R) {
                  return this._set(I, v, R, !1);
                }, b.prototype.setSession = function(I, v, R) {
                  return this._set(I, v, R, !0);
                }, b.prototype._set = function(I, v, R, o) {
                  var d = { value: v };
                  return R && (d.expires = w.now() + R), this.storageInterface(o).setItem(I, JSON.stringify(d));
                }, b.prototype._get = function(I, v) {
                  if (v && !this.sessionSupported)
                    throw new Error("Session Storage not supported");
                  if (!v && !this.localSupported)
                    throw new Error("Local Storage not supported");
                  var R = this.storageInterface(v).getItem(I);
                  if (!R)
                    return null;
                  var o = JSON.parse(R);
                  return o.expires && o.expires < w.now() ? (this.storageInterface(v).removeItem(I), null) : o.value;
                }, b.prototype._remove = function(I, v) {
                  return this.storageInterface(v).removeItem(I);
                }, b.prototype.storageInterface = function(I) {
                  return I ? g.sessionStorage : g.localStorage;
                }, b;
              }()
            );
            p.default = new M();
          }).call(this, f(13));
        },
        /* 66 */
        /***/
        function(H, p, f) {
          Object.defineProperty(p, "__esModule", { value: !0 });
          var g = f(0), a = g.__importDefault(f(67)), w = {
            connectivityCheckUrl: "https://internet-up.ably-realtime.com/is-the-internet-up.txt",
            jsonpInternetUpUrl: "https://internet-up.ably-realtime.com/is-the-internet-up-0-9.js",
            /* Order matters here: the base transport is the leftmost one in the
             * intersection of baseTransportOrder and the transports clientOption that's
             * supported.  This is not quite the same as the preference order -- e.g.
             * xhr_polling is preferred to jsonp, but for browsers that support it we want
             * the base transport to be xhr_polling, not jsonp */
            defaultTransports: [
              a.default.XhrPolling,
              a.default.XhrStreaming,
              a.default.JsonP,
              a.default.WebSocket
            ],
            baseTransportOrder: [
              a.default.XhrPolling,
              a.default.XhrStreaming,
              a.default.JsonP,
              a.default.WebSocket
            ],
            transportPreferenceOrder: [
              a.default.JsonP,
              a.default.XhrPolling,
              a.default.XhrStreaming,
              a.default.WebSocket
            ],
            upgradeTransports: [a.default.XhrStreaming, a.default.WebSocket]
          };
          p.default = w;
        },
        /* 67 */
        /***/
        function(H, p, f) {
          Object.defineProperty(p, "__esModule", { value: !0 });
          var g;
          (function(a) {
            a.WebSocket = "web_socket", a.Comet = "comet", a.XhrStreaming = "xhr_streaming", a.XhrPolling = "xhr_polling", a.JsonP = "jsonp";
          })(g || (g = {})), p.default = g;
        },
        /* 68 */
        /***/
        function(H, p, f) {
          f.r(p);
          var g = f(29), a = /* @__PURE__ */ f.n(g), w = f(1), T = f(3), M = /* @__PURE__ */ f.n(T), b = f(12), I = /* @__PURE__ */ f.n(b), v = f(16), R = /* @__PURE__ */ f.n(v), o = function(u) {
            var c = "xhr_polling";
            function l(r, n, t) {
              t.stream = !1, I.a.call(this, r, n, t), this.shortName = c;
            }
            return w.inherits(l, I.a), l.isAvailable = function() {
              return M.a.Config.xhrSupported && M.a.Config.allowComet;
            }, l.prototype.toString = function() {
              return "XHRPollingTransport; uri=" + this.baseUri + "; isConnected=" + this.isConnected;
            }, l.prototype.createRequest = function(r, n, t, e, s) {
              return R.a.createRequest(r, n, t, e, s, this.timeouts);
            }, typeof u < "u" && l.isAvailable() && (u.supportedTransports[c] = l), l;
          }, d = o, S = function(u) {
            var c = "xhr_streaming";
            function l(r, n, t) {
              I.a.call(this, r, n, t), this.shortName = c;
            }
            return w.inherits(l, I.a), l.isAvailable = function() {
              return M.a.Config.xhrSupported && M.a.Config.streamingSupported && M.a.Config.allowComet;
            }, l.prototype.toString = function() {
              return "XHRStreamingTransport; uri=" + this.baseUri + "; isConnected=" + this.isConnected;
            }, l.prototype.createRequest = function(r, n, t, e, s) {
              return R.a.createRequest(r, n, t, e, s, this.timeouts);
            }, typeof u < "u" && l.isAvailable() && (u.supportedTransports[c] = l), l;
          }, A = S;
          p.default = [a.a, d, A];
        }
        /******/
      ]).default
    );
  });
})(Et);
var Nt = Et.exports;
const Ut = /* @__PURE__ */ Ct(Nt), dt = class dt {
  constructor() {
    ct(this, "waitTimer", null);
    ct(this, "checkTimer", null);
    ct(this, "duration", 10);
    ct(this, "timer", null);
    ct(this, "counter", 0);
  }
  tick() {
    return new Promise((V) => {
      this.checkTimer ? (clearTimeout(this.checkTimer), this.duration *= dt.DURATION_SCALE) : this.duration = dt.INITIAL_DURATION, this.checkTimer = setTimeout(() => {
        this.checkTimer = null;
      }, this.duration + dt.CHECK_DURATION), this.waitTimer = setTimeout(() => {
        this.waitTimer = null, V();
      }, this.duration);
    });
  }
  showRate() {
    this.timer ? this.counter++ : (this.counter = 1, this.timer = setTimeout(() => {
      this.timer = null, console.info(this.counter);
    }, 1e3));
  }
};
ct(dt, "INITIAL_DURATION", 1), ct(dt, "CHECK_DURATION", 50), ct(dt, "DURATION_SCALE", 2);
let At = dt;
class Bt {
  constructor() {
    this.throttle = new At();
  }
  tick() {
    return this.throttle.tick();
  }
  showRate() {
    this.throttle.showRate();
  }
}
class Gt extends Bt {
  constructor(V, H) {
    super(), this.apiKey = V, this.channelName = H;
  }
  async connect() {
    this.ably = new Ut.Realtime.Promise(this.apiKey), await this.ably.connection.once("connected"), console.log("Connected to Ably!"), this.doSetChannel();
  }
  setChannel(V) {
    if (this.channelName !== V)
      return this.channel && (this.channel.unsubscribe(), this.channel.detach()), this.doSetChannel(V), this.tick();
  }
  getChannelName() {
    return this.channelName;
  }
  async doSetChannel(V) {
    V && (this.channelName = V), this.channel = this.ably.channels.get(this.channelName), await this.channel.subscribe((H) => {
      H.connectionId !== this.channel.connectionManager.connectionId && this.listener && this.listener(H.data);
    });
  }
  listen(V) {
    this.listener = V;
  }
  async send(V) {
    if (this.channel)
      return await this.channel.publish("message", V), this.tick();
  }
  async sendTo(V, H) {
    const p = this.ably.channels.get(H);
    if (p)
      return await p.publish("message", V), this.tick();
  }
  disconnect() {
    this.ably.connection.close();
  }
}
const jt = {
  create: () => {
    const tt = new URLSearchParams(location.search), V = tt.get("server") || "ably", H = tt.get("apikey") || prompt("サーバーのAPIキーを入力してください"), p = tt.get("channel") || "all";
    if (H)
      switch (console.log(`接続するサーバーは ${V} です`), V) {
        case "ably":
          return new Gt(H, p);
        default:
          console.error("接続するサーバーが不正です :", V);
      }
  }
}, Ht = {
  opcode: "connect",
  blockType: lt.COMMAND,
  text: "接続する",
  code: function(tt, V) {
    this.server || (this.server = jt.create(), this.server && (this.server.connect(), this.server.listen((H) => {
      this.lastReceivedMessage = H, V.runtime.startHats("comm_whenReceived");
    })));
  }
}, Ft = {
  /**
   * Numeric value with angle picker
   */
  ANGLE: "angle",
  /**
   * Boolean value with hexagonal placeholder
   */
  BOOLEAN: "Boolean",
  /**
   * Numeric value with color picker
   */
  COLOR: "color",
  /**
   * Numeric value with text field
   */
  NUMBER: "number",
  /**
   * String value with text field
   */
  STRING: "string",
  /**
   * String value with matrix field
   */
  MATRIX: "matrix",
  /**
   * MIDI note number with note picker (piano) field
   */
  NOTE: "note",
  /**
   * Inline image on block (as part of the label)
   */
  IMAGE: "image"
};
var Wt = Ft;
const ht = /* @__PURE__ */ Ct(Wt);
let Vt = class vt {
  /**
   * @typedef {object} RGBObject - An object representing a color in RGB format.
   * @property {number} r - the red component, in the range [0, 255].
   * @property {number} g - the green component, in the range [0, 255].
   * @property {number} b - the blue component, in the range [0, 255].
   */
  /**
   * @typedef {object} HSVObject - An object representing a color in HSV format.
   * @property {number} h - hue, in the range [0-359).
   * @property {number} s - saturation, in the range [0,1].
   * @property {number} v - value, in the range [0,1].
   */
  /** @type {RGBObject} */
  static get RGB_BLACK() {
    return { r: 0, g: 0, b: 0 };
  }
  /** @type {RGBObject} */
  static get RGB_WHITE() {
    return { r: 255, g: 255, b: 255 };
  }
  /**
   * Convert a Scratch decimal color to a hex string, #RRGGBB.
   * @param {number} decimal RGB color as a decimal.
   * @return {string} RGB color as #RRGGBB hex string.
   */
  static decimalToHex(V) {
    V < 0 && (V += 16777215 + 1);
    let H = Number(V).toString(16);
    return H = `#${"000000".substr(0, 6 - H.length)}${H}`, H;
  }
  /**
   * Convert a Scratch decimal color to an RGB color object.
   * @param {number} decimal RGB color as decimal.
   * @return {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
   */
  static decimalToRgb(V) {
    const H = V >> 24 & 255, p = V >> 16 & 255, f = V >> 8 & 255, g = V & 255;
    return { r: p, g: f, b: g, a: H > 0 ? H : 255 };
  }
  /**
   * Convert a hex color (e.g., F00, #03F, #0033FF) to an RGB color object.
   * CC-BY-SA Tim Down:
   * https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
   * @param {!string} hex Hex representation of the color.
   * @return {RGBObject} null on failure, or rgb: {r: red [0,255], g: green [0,255], b: blue [0,255]}.
   */
  static hexToRgb(V) {
    const H = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    V = V.replace(H, (f, g, a, w) => g + g + a + a + w + w);
    const p = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(V);
    return p ? {
      r: parseInt(p[1], 16),
      g: parseInt(p[2], 16),
      b: parseInt(p[3], 16)
    } : null;
  }
  /**
   * Convert an RGB color object to a hex color.
   * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
   * @return {!string} Hex representation of the color.
   */
  static rgbToHex(V) {
    return vt.decimalToHex(vt.rgbToDecimal(V));
  }
  /**
   * Convert an RGB color object to a Scratch decimal color.
   * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
   * @return {!number} Number representing the color.
   */
  static rgbToDecimal(V) {
    return (V.r << 16) + (V.g << 8) + V.b;
  }
  /**
  * Convert a hex color (e.g., F00, #03F, #0033FF) to a decimal color number.
  * @param {!string} hex Hex representation of the color.
  * @return {!number} Number representing the color.
  */
  static hexToDecimal(V) {
    return vt.rgbToDecimal(vt.hexToRgb(V));
  }
  /**
   * Convert an HSV color to RGB format.
   * @param {HSVObject} hsv - {h: hue [0,360), s: saturation [0,1], v: value [0,1]}
   * @return {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
   */
  static hsvToRgb(V) {
    let H = V.h % 360;
    H < 0 && (H += 360);
    const p = Math.max(0, Math.min(V.s, 1)), f = Math.max(0, Math.min(V.v, 1)), g = Math.floor(H / 60), a = H / 60 - g, w = f * (1 - p), T = f * (1 - p * a), M = f * (1 - p * (1 - a));
    let b, I, v;
    switch (g) {
      default:
      case 0:
        b = f, I = M, v = w;
        break;
      case 1:
        b = T, I = f, v = w;
        break;
      case 2:
        b = w, I = f, v = M;
        break;
      case 3:
        b = w, I = T, v = f;
        break;
      case 4:
        b = M, I = w, v = f;
        break;
      case 5:
        b = f, I = w, v = T;
        break;
    }
    return {
      r: Math.floor(b * 255),
      g: Math.floor(I * 255),
      b: Math.floor(v * 255)
    };
  }
  /**
   * Convert an RGB color to HSV format.
   * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
   * @return {HSVObject} hsv - {h: hue [0,360), s: saturation [0,1], v: value [0,1]}
   */
  static rgbToHsv(V) {
    const H = V.r / 255, p = V.g / 255, f = V.b / 255, g = Math.min(Math.min(H, p), f), a = Math.max(Math.max(H, p), f);
    let w = 0, T = 0;
    if (g !== a) {
      const M = H === g ? p - f : p === g ? f - H : H - p;
      w = ((H === g ? 3 : p === g ? 5 : 1) - M / (a - g)) * 60 % 360, T = (a - g) / a;
    }
    return { h: w, s: T, v: a };
  }
  /**
   * Linear interpolation between rgb0 and rgb1.
   * @param {RGBObject} rgb0 - the color corresponding to fraction1 <= 0.
   * @param {RGBObject} rgb1 - the color corresponding to fraction1 >= 1.
   * @param {number} fraction1 - the interpolation parameter. If this is 0.5, for example, mix the two colors equally.
   * @return {RGBObject} the interpolated color.
   */
  static mixRgb(V, H, p) {
    if (p <= 0)
      return V;
    if (p >= 1)
      return H;
    const f = 1 - p;
    return {
      r: f * V.r + p * H.r,
      g: f * V.g + p * H.g,
      b: f * V.b + p * H.b
    };
  }
};
var zt = Vt;
const St = zt;
class st {
  /**
   * Scratch cast to number.
   * Treats NaN as 0.
   * In Scratch 2.0, this is captured by `interp.numArg.`
   * @param {*} value Value to cast to number.
   * @return {number} The Scratch-casted number value.
   */
  static toNumber(V) {
    if (typeof V == "number")
      return Number.isNaN(V) ? 0 : V;
    const H = Number(V);
    return Number.isNaN(H) ? 0 : H;
  }
  /**
   * Scratch cast to boolean.
   * In Scratch 2.0, this is captured by `interp.boolArg.`
   * Treats some string values differently from JavaScript.
   * @param {*} value Value to cast to boolean.
   * @return {boolean} The Scratch-casted boolean value.
   */
  static toBoolean(V) {
    return typeof V == "boolean" ? V : typeof V == "string" ? !(V === "" || V === "0" || V.toLowerCase() === "false") : !!V;
  }
  /**
   * Scratch cast to string.
   * @param {*} value Value to cast to string.
   * @return {string} The Scratch-casted string value.
   */
  static toString(V) {
    return String(V);
  }
  /**
   * Cast any Scratch argument to an RGB color array to be used for the renderer.
   * @param {*} value Value to convert to RGB color array.
   * @return {Array.<number>} [r,g,b], values between 0-255.
   */
  static toRgbColorList(V) {
    const H = st.toRgbColorObject(V);
    return [H.r, H.g, H.b];
  }
  /**
   * Cast any Scratch argument to an RGB color object to be used for the renderer.
   * @param {*} value Value to convert to RGB color object.
   * @return {RGBOject} [r,g,b], values between 0-255.
   */
  static toRgbColorObject(V) {
    let H;
    return typeof V == "string" && V.substring(0, 1) === "#" ? (H = St.hexToRgb(V), H || (H = { r: 0, g: 0, b: 0, a: 255 })) : H = St.decimalToRgb(st.toNumber(V)), H;
  }
  /**
   * Determine if a Scratch argument is a white space string (or null / empty).
   * @param {*} val value to check.
   * @return {boolean} True if the argument is all white spaces or null / empty.
   */
  static isWhiteSpace(V) {
    return V === null || typeof V == "string" && V.trim().length === 0;
  }
  /**
   * Compare two values, using Scratch cast, case-insensitive string compare, etc.
   * In Scratch 2.0, this is captured by `interp.compare.`
   * @param {*} v1 First value to compare.
   * @param {*} v2 Second value to compare.
   * @returns {number} Negative number if v1 < v2; 0 if equal; positive otherwise.
   */
  static compare(V, H) {
    let p = Number(V), f = Number(H);
    if (p === 0 && st.isWhiteSpace(V) ? p = NaN : f === 0 && st.isWhiteSpace(H) && (f = NaN), isNaN(p) || isNaN(f)) {
      const g = String(V).toLowerCase(), a = String(H).toLowerCase();
      return g < a ? -1 : g > a ? 1 : 0;
    }
    return p === 1 / 0 && f === 1 / 0 || p === -1 / 0 && f === -1 / 0 ? 0 : p - f;
  }
  /**
   * Determine if a Scratch argument number represents a round integer.
   * @param {*} val Value to check.
   * @return {boolean} True if number looks like an integer.
   */
  static isInt(V) {
    return typeof V == "number" ? isNaN(V) ? !0 : V === parseInt(V, 10) : typeof V == "boolean" ? !0 : typeof V == "string" ? V.indexOf(".") < 0 : !1;
  }
  static get LIST_INVALID() {
    return "INVALID";
  }
  static get LIST_ALL() {
    return "ALL";
  }
  /**
   * Compute a 1-based index into a list, based on a Scratch argument.
   * Two special cases may be returned:
   * LIST_ALL: if the block is referring to all of the items in the list.
   * LIST_INVALID: if the index was invalid in any way.
   * @param {*} index Scratch arg, including 1-based numbers or special cases.
   * @param {number} length Length of the list.
   * @param {boolean} acceptAll Whether it should accept "all" or not.
   * @return {(number|string)} 1-based index for list, LIST_ALL, or LIST_INVALID.
   */
  static toListIndex(V, H, p) {
    if (typeof V != "number") {
      if (V === "all")
        return p ? st.LIST_ALL : st.LIST_INVALID;
      if (V === "last")
        return H > 0 ? H : st.LIST_INVALID;
      if (V === "random" || V === "any")
        return H > 0 ? 1 + Math.floor(Math.random() * H) : st.LIST_INVALID;
    }
    return V = Math.floor(st.toNumber(V)), V < 1 || V > H ? st.LIST_INVALID : V;
  }
}
var kt = st;
const pt = /* @__PURE__ */ Ct(kt), _t = {
  opcode: "setChannel",
  blockType: lt.COMMAND,
  text: "チャンネルを [CHANNEL_NAME] にする",
  arguments: {
    CHANNEL_NAME: {
      type: ht.STRING,
      defaultValue: "グループ１"
    }
  },
  code: function(tt) {
    if (!this.server)
      return;
    const V = pt.toString(tt.CHANNEL_NAME);
    return this.server.setChannel(V);
  }
}, Kt = {
  opcode: "send",
  blockType: lt.COMMAND,
  text: "[MESSAGE] を送る",
  arguments: {
    MESSAGE: {
      type: ht.STRING,
      defaultValue: "ありがとう!"
    }
  },
  code: function(tt) {
    if (!this.server)
      return;
    const V = pt.toString(tt.MESSAGE);
    return this.server.send(V);
  }
}, Qt = {
  opcode: "setIpAddress",
  blockType: lt.COMMAND,
  text: "IPアドレスを [IP_ADDRESS] にする",
  arguments: {
    IP_ADDRESS: {
      type: ht.STRING,
      defaultValue: "192.168.1.100"
    }
  },
  code: function(tt) {
    if (!this.server)
      return;
    const V = pt.toString(tt.IP_ADDRESS);
    return this.server.setChannel(V);
  }
}, Jt = {
  opcode: "sendToIpAddress",
  blockType: lt.COMMAND,
  text: " [IP_ADDRESS] に [MESSAGE] を送る",
  arguments: {
    IP_ADDRESS: {
      type: ht.STRING,
      defaultValue: "192.168.1.100"
    },
    MESSAGE: {
      type: ht.STRING,
      defaultValue: "ありがとう!"
    }
  },
  code: function(tt) {
    if (!this.server)
      return;
    const V = pt.toString(tt.MESSAGE), H = pt.toString(tt.IP_ADDRESS);
    return this.server.sendTo(V, H);
  }
}, Xt = {
  opcode: "encodeCaesarCipher",
  blockType: lt.REPORTER,
  text: " [MESSAGE] を [DELTA] 文字ずらす",
  arguments: {
    MESSAGE: {
      type: ht.STRING,
      defaultValue: "ひみつ"
    },
    DELTA: {
      type: ht.NUMBER,
      defaultValue: 1
    }
  },
  code: function(tt) {
    const V = pt.toString(tt.MESSAGE), H = pt.toNumber(tt.DELTA);
    return V.split("").map((p) => p.codePointAt(0)).map((p) => String.fromCodePoint(p + H)).join("");
  }
}, Yt = {
  opcode: "whenReceived",
  blockType: lt.HAT,
  text: "文字列を受け取ったとき",
  isEdgeActivated: !1,
  code: function() {
    return !0;
  }
}, $t = {
  opcode: "receivedMessage",
  blockType: lt.REPORTER,
  text: "受け取った文字列",
  code: function() {
    return this.lastReceivedMessage;
  }
}, Zt = {
  opcode: "disconnect",
  blockType: lt.COMMAND,
  text: "切断する",
  code: function() {
    this.server && (this.server.disconnect(), this.server = void 0);
  }
}, Mt = [
  Ht,
  "---",
  _t,
  Kt,
  "---",
  Qt,
  Jt,
  "---",
  Xt,
  "---",
  Yt,
  $t,
  "---",
  Zt
], qt = (tt) => {
  Mt.forEach(({ opcode: V, code: H }) => tt[V] = H);
}, Tt = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMjggLTEyOCA3NjggNzY4Ij48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNC4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIzIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDM4LjYgMTUwLjZjMTIuNS0xMi41IDEyLjUtMzIuOCAwLTQ1LjNsLTk2LTk2Yy0xMi41LTEyLjUtMzIuOC0xMi41LTQ1LjMgMHMtMTIuNSAzMi44IDAgNDUuM0wzMzguNyA5NiAzMiA5NkMxNC4zIDk2IDAgMTEwLjMgMCAxMjhzMTQuMyAzMiAzMiAzMmwzMDYuNyAwLTQxLjQgNDEuNGMtMTIuNSAxMi41LTEyLjUgMzIuOCAwIDQ1LjNzMzIuOCAxMi41IDQ1LjMgMGw5Ni05NnptLTMzMy4zIDM1MmMxMi41IDEyLjUgMzIuOCAxMi41IDQ1LjMgMHMxMi41LTMyLjggMC00NS4zTDEwOS4zIDQxNiA0MTYgNDE2YzE3LjcgMCAzMi0xNC4zIDMyLTMycy0xNC4zLTMyLTMyLTMybC0zMDYuNyAwIDQxLjQtNDEuNGMxMi41LTEyLjUgMTIuNS0zMi44IDAtNDUuM3MtMzIuOC0xMi41LTQ1LjMgMGwtOTYgOTZjLTEyLjUgMTIuNS0xMi41IDMyLjggMCA0NS4zbDk2IDk2eiIvPjwvc3ZnPgo=";
class te {
  constructor() {
    qt(this);
  }
  getInfo() {
    return {
      id: "comm",
      name: "双方向通信",
      color1: "#a0a0a0",
      color2: "#808080",
      color3: "#606060",
      blockIconURI: Tt,
      menuIconURI: Tt,
      blocks: Mt
    };
  }
}
typeof Scratch < "u" && Scratch.extensions.register(new te());
