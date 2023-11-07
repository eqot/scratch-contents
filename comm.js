function Rt(nt) {
  return nt && nt.__esModule && Object.prototype.hasOwnProperty.call(nt, "default") ? nt.default : nt;
}
var Ct = { exports: {} };
/*!
 * @license Copyright 2015-2022 Ably Real-time Ltd (ably.com)
 * 
 * Ably JavaScript Library v1.2.47
 * https://github.com/ably/ably-js
 * 
 * Released under the Apache Licence v2.0
 */
(function(nt, k) {
  (function(g, f) {
    nt.exports = f();
  })(window, function() {
    return (
      /******/
      function(F) {
        var g = {};
        function f(p) {
          if (g[p])
            return g[p].exports;
          var a = g[p] = {
            /******/
            i: p,
            /******/
            l: !1,
            /******/
            exports: {}
            /******/
          };
          return F[p].call(a.exports, a, a.exports, f), a.l = !0, a.exports;
        }
        return f.m = F, f.c = g, f.d = function(p, a, L) {
          f.o(p, a) || Object.defineProperty(p, a, { enumerable: !0, get: L });
        }, f.r = function(p) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(p, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(p, "__esModule", { value: !0 });
        }, f.t = function(p, a) {
          if (a & 1 && (p = f(p)), a & 8 || a & 4 && typeof p == "object" && p && p.__esModule)
            return p;
          var L = /* @__PURE__ */ Object.create(null);
          if (f.r(L), Object.defineProperty(L, "default", { enumerable: !0, value: p }), a & 2 && typeof p != "string")
            for (var I in p)
              f.d(L, I, (function(T) {
                return p[T];
              }).bind(null, I));
          return L;
        }, f.n = function(p) {
          var a = p && p.__esModule ? (
            /******/
            function() {
              return p.default;
            }
          ) : (
            /******/
            function() {
              return p;
            }
          );
          return f.d(a, "a", a), a;
        }, f.o = function(p, a) {
          return Object.prototype.hasOwnProperty.call(p, a);
        }, f.p = "", f(f.s = 42);
      }([
        /* 0 */
        /***/
        function(F, g, f) {
          f.r(g), f.d(g, "__extends", function() {
            return a;
          }), f.d(g, "__assign", function() {
            return L;
          }), f.d(g, "__rest", function() {
            return I;
          }), f.d(g, "__decorate", function() {
            return T;
          }), f.d(g, "__param", function() {
            return P;
          }), f.d(g, "__metadata", function() {
            return M;
          }), f.d(g, "__awaiter", function() {
            return v;
          }), f.d(g, "__generator", function() {
            return O;
          }), f.d(g, "__createBinding", function() {
            return o;
          }), f.d(g, "__exportStar", function() {
            return d;
          }), f.d(g, "__values", function() {
            return R;
          }), f.d(g, "__read", function() {
            return S;
          }), f.d(g, "__spread", function() {
            return u;
          }), f.d(g, "__spreadArrays", function() {
            return c;
          }), f.d(g, "__spreadArray", function() {
            return l;
          }), f.d(g, "__await", function() {
            return r;
          }), f.d(g, "__asyncGenerator", function() {
            return n;
          }), f.d(g, "__asyncDelegator", function() {
            return t;
          }), f.d(g, "__asyncValues", function() {
            return e;
          }), f.d(g, "__makeTemplateObject", function() {
            return s;
          }), f.d(g, "__importStar", function() {
            return h;
          }), f.d(g, "__importDefault", function() {
            return w;
          }), f.d(g, "__classPrivateFieldGet", function() {
            return b;
          }), f.d(g, "__classPrivateFieldSet", function() {
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
          var p = function(A, y) {
            return p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(C, N) {
              C.__proto__ = N;
            } || function(C, N) {
              for (var U in N)
                Object.prototype.hasOwnProperty.call(N, U) && (C[U] = N[U]);
            }, p(A, y);
          };
          function a(A, y) {
            if (typeof y != "function" && y !== null)
              throw new TypeError("Class extends value " + String(y) + " is not a constructor or null");
            p(A, y);
            function C() {
              this.constructor = A;
            }
            A.prototype = y === null ? Object.create(y) : (C.prototype = y.prototype, new C());
          }
          var L = function() {
            return L = Object.assign || function(y) {
              for (var C, N = 1, U = arguments.length; N < U; N++) {
                C = arguments[N];
                for (var G in C)
                  Object.prototype.hasOwnProperty.call(C, G) && (y[G] = C[G]);
              }
              return y;
            }, L.apply(this, arguments);
          };
          function I(A, y) {
            var C = {};
            for (var N in A)
              Object.prototype.hasOwnProperty.call(A, N) && y.indexOf(N) < 0 && (C[N] = A[N]);
            if (A != null && typeof Object.getOwnPropertySymbols == "function")
              for (var U = 0, N = Object.getOwnPropertySymbols(A); U < N.length; U++)
                y.indexOf(N[U]) < 0 && Object.prototype.propertyIsEnumerable.call(A, N[U]) && (C[N[U]] = A[N[U]]);
            return C;
          }
          function T(A, y, C, N) {
            var U = arguments.length, G = U < 3 ? y : N === null ? N = Object.getOwnPropertyDescriptor(y, C) : N, V;
            if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
              G = Reflect.decorate(A, y, C, N);
            else
              for (var Q = A.length - 1; Q >= 0; Q--)
                (V = A[Q]) && (G = (U < 3 ? V(G) : U > 3 ? V(y, C, G) : V(y, C)) || G);
            return U > 3 && G && Object.defineProperty(y, C, G), G;
          }
          function P(A, y) {
            return function(C, N) {
              y(C, N, A);
            };
          }
          function M(A, y) {
            if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
              return Reflect.metadata(A, y);
          }
          function v(A, y, C, N) {
            function U(G) {
              return G instanceof C ? G : new C(function(V) {
                V(G);
              });
            }
            return new (C || (C = Promise))(function(G, V) {
              function Q(x) {
                try {
                  m(N.next(x));
                } catch (D) {
                  V(D);
                }
              }
              function H(x) {
                try {
                  m(N.throw(x));
                } catch (D) {
                  V(D);
                }
              }
              function m(x) {
                x.done ? G(x.value) : U(x.value).then(Q, H);
              }
              m((N = N.apply(A, y || [])).next());
            });
          }
          function O(A, y) {
            var C = { label: 0, sent: function() {
              if (G[0] & 1)
                throw G[1];
              return G[1];
            }, trys: [], ops: [] }, N, U, G, V;
            return V = { next: Q(0), throw: Q(1), return: Q(2) }, typeof Symbol == "function" && (V[Symbol.iterator] = function() {
              return this;
            }), V;
            function Q(m) {
              return function(x) {
                return H([m, x]);
              };
            }
            function H(m) {
              if (N)
                throw new TypeError("Generator is already executing.");
              for (; C; )
                try {
                  if (N = 1, U && (G = m[0] & 2 ? U.return : m[0] ? U.throw || ((G = U.return) && G.call(U), 0) : U.next) && !(G = G.call(U, m[1])).done)
                    return G;
                  switch (U = 0, G && (m = [m[0] & 2, G.value]), m[0]) {
                    case 0:
                    case 1:
                      G = m;
                      break;
                    case 4:
                      return C.label++, { value: m[1], done: !1 };
                    case 5:
                      C.label++, U = m[1], m = [0];
                      continue;
                    case 7:
                      m = C.ops.pop(), C.trys.pop();
                      continue;
                    default:
                      if (G = C.trys, !(G = G.length > 0 && G[G.length - 1]) && (m[0] === 6 || m[0] === 2)) {
                        C = 0;
                        continue;
                      }
                      if (m[0] === 3 && (!G || m[1] > G[0] && m[1] < G[3])) {
                        C.label = m[1];
                        break;
                      }
                      if (m[0] === 6 && C.label < G[1]) {
                        C.label = G[1], G = m;
                        break;
                      }
                      if (G && C.label < G[2]) {
                        C.label = G[2], C.ops.push(m);
                        break;
                      }
                      G[2] && C.ops.pop(), C.trys.pop();
                      continue;
                  }
                  m = y.call(A, C);
                } catch (x) {
                  m = [6, x], U = 0;
                } finally {
                  N = G = 0;
                }
              if (m[0] & 5)
                throw m[1];
              return { value: m[0] ? m[1] : void 0, done: !0 };
            }
          }
          var o = Object.create ? function(A, y, C, N) {
            N === void 0 && (N = C), Object.defineProperty(A, N, { enumerable: !0, get: function() {
              return y[C];
            } });
          } : function(A, y, C, N) {
            N === void 0 && (N = C), A[N] = y[C];
          };
          function d(A, y) {
            for (var C in A)
              C !== "default" && !Object.prototype.hasOwnProperty.call(y, C) && o(y, A, C);
          }
          function R(A) {
            var y = typeof Symbol == "function" && Symbol.iterator, C = y && A[y], N = 0;
            if (C)
              return C.call(A);
            if (A && typeof A.length == "number")
              return {
                next: function() {
                  return A && N >= A.length && (A = void 0), { value: A && A[N++], done: !A };
                }
              };
            throw new TypeError(y ? "Object is not iterable." : "Symbol.iterator is not defined.");
          }
          function S(A, y) {
            var C = typeof Symbol == "function" && A[Symbol.iterator];
            if (!C)
              return A;
            var N = C.call(A), U, G = [], V;
            try {
              for (; (y === void 0 || y-- > 0) && !(U = N.next()).done; )
                G.push(U.value);
            } catch (Q) {
              V = { error: Q };
            } finally {
              try {
                U && !U.done && (C = N.return) && C.call(N);
              } finally {
                if (V)
                  throw V.error;
              }
            }
            return G;
          }
          function u() {
            for (var A = [], y = 0; y < arguments.length; y++)
              A = A.concat(S(arguments[y]));
            return A;
          }
          function c() {
            for (var A = 0, y = 0, C = arguments.length; y < C; y++)
              A += arguments[y].length;
            for (var N = Array(A), U = 0, y = 0; y < C; y++)
              for (var G = arguments[y], V = 0, Q = G.length; V < Q; V++, U++)
                N[U] = G[V];
            return N;
          }
          function l(A, y, C) {
            if (C || arguments.length === 2)
              for (var N = 0, U = y.length, G; N < U; N++)
                (G || !(N in y)) && (G || (G = Array.prototype.slice.call(y, 0, N)), G[N] = y[N]);
            return A.concat(G || Array.prototype.slice.call(y));
          }
          function r(A) {
            return this instanceof r ? (this.v = A, this) : new r(A);
          }
          function n(A, y, C) {
            if (!Symbol.asyncIterator)
              throw new TypeError("Symbol.asyncIterator is not defined.");
            var N = C.apply(A, y || []), U, G = [];
            return U = {}, V("next"), V("throw"), V("return"), U[Symbol.asyncIterator] = function() {
              return this;
            }, U;
            function V(B) {
              N[B] && (U[B] = function(W) {
                return new Promise(function(_, K) {
                  G.push([B, W, _, K]) > 1 || Q(B, W);
                });
              });
            }
            function Q(B, W) {
              try {
                H(N[B](W));
              } catch (_) {
                D(G[0][3], _);
              }
            }
            function H(B) {
              B.value instanceof r ? Promise.resolve(B.value.v).then(m, x) : D(G[0][2], B);
            }
            function m(B) {
              Q("next", B);
            }
            function x(B) {
              Q("throw", B);
            }
            function D(B, W) {
              B(W), G.shift(), G.length && Q(G[0][0], G[0][1]);
            }
          }
          function t(A) {
            var y, C;
            return y = {}, N("next"), N("throw", function(U) {
              throw U;
            }), N("return"), y[Symbol.iterator] = function() {
              return this;
            }, y;
            function N(U, G) {
              y[U] = A[U] ? function(V) {
                return (C = !C) ? { value: r(A[U](V)), done: U === "return" } : G ? G(V) : V;
              } : G;
            }
          }
          function e(A) {
            if (!Symbol.asyncIterator)
              throw new TypeError("Symbol.asyncIterator is not defined.");
            var y = A[Symbol.asyncIterator], C;
            return y ? y.call(A) : (A = typeof R == "function" ? R(A) : A[Symbol.iterator](), C = {}, N("next"), N("throw"), N("return"), C[Symbol.asyncIterator] = function() {
              return this;
            }, C);
            function N(G) {
              C[G] = A[G] && function(V) {
                return new Promise(function(Q, H) {
                  V = A[G](V), U(Q, H, V.done, V.value);
                });
              };
            }
            function U(G, V, Q, H) {
              Promise.resolve(H).then(function(m) {
                G({ value: m, done: Q });
              }, V);
            }
          }
          function s(A, y) {
            return Object.defineProperty ? Object.defineProperty(A, "raw", { value: y }) : A.raw = y, A;
          }
          var i = Object.create ? function(A, y) {
            Object.defineProperty(A, "default", { enumerable: !0, value: y });
          } : function(A, y) {
            A.default = y;
          };
          function h(A) {
            if (A && A.__esModule)
              return A;
            var y = {};
            if (A != null)
              for (var C in A)
                C !== "default" && Object.prototype.hasOwnProperty.call(A, C) && o(y, A, C);
            return i(y, A), y;
          }
          function w(A) {
            return A && A.__esModule ? A : { default: A };
          }
          function b(A, y, C, N) {
            if (C === "a" && !N)
              throw new TypeError("Private accessor was defined without a getter");
            if (typeof y == "function" ? A !== y || !N : !y.has(A))
              throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return C === "m" ? N : C === "a" ? N.call(A) : N ? N.value : y.get(A);
          }
          function E(A, y, C, N, U) {
            if (N === "m")
              throw new TypeError("Private method is not writable");
            if (N === "a" && !U)
              throw new TypeError("Private accessor was defined without a setter");
            if (typeof y == "function" ? A !== y || !U : !y.has(A))
              throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return N === "a" ? U.call(A, C) : U ? U.value = C : y.set(A, C), C;
          }
        },
        /* 1 */
        /***/
        function(F, g, f) {
          (function(p) {
            Object.defineProperty(g, "__esModule", { value: !0 }), g.allToUpperCase = g.allToLowerCase = g.encodeBody = g.decodeBody = g.Format = g.promisify = g.trim = g.arrChooseN = g.randomHexString = g.randomString = g.cheapRandStr = g.dataSizeBytes = g.inspectBody = g.inspectError = g.isErrorInfoOrPartialErrorInfo = g.now = g.parseQueryString = g.toQueryString = g.arrPopRandomElement = g.defaultPostHeaders = g.defaultGetHeaders = g.allSame = g.arrEvery = g.arrFilter = g.arrMap = g.safeArrForEach = g.arrForEach = g.forInOwnNonNullProperties = g.valuesArray = g.keysArray = g.arrWithoutValue = g.arrDeleteValue = g.arrIn = g.arrIndexOf = g.arrSubtract = g.arrIntersectOb = g.arrIntersect = g.intersect = g.containsValue = g.inherits = g.prototypicalClone = g.shallowClone = g.isEmptyArg = g.isOnlyPropIn = g.isEmpty = g.isObject = g.ensureArray = g.isArray = g.copy = g.mixin = void 0, g.arrEquals = g.toBase64 = g.matchDerivedChannel = g.shallowEquals = g.getGlobalObject = g.getRetryTime = g.getJitterCoefficient = g.getBackoffCoefficient = void 0;
            var a = f(0), L = a.__importDefault(f(3)), I = a.__importStar(f(8)), T = a.__importDefault(f(4)), P = f(11), M = f(31);
            function v(j) {
              return Math.floor(Math.random() * j.length);
            }
            function O(j) {
              for (var z = [], J = 1; J < arguments.length; J++)
                z[J - 1] = arguments[J];
              for (var X = 0; X < z.length; X++) {
                var $ = z[X];
                if (!$)
                  break;
                var st = Object.prototype.hasOwnProperty;
                for (var lt in $)
                  (!st || st.call($, lt)) && (j[lt] = $[lt]);
              }
              return j;
            }
            g.mixin = O;
            function o(j) {
              return O({}, j);
            }
            g.copy = o, g.isArray = Array.isArray || function(j) {
              return Object.prototype.toString.call(j) == "[object Array]";
            };
            function d(j) {
              return c(j) ? [] : (0, g.isArray)(j) ? j : [j];
            }
            g.ensureArray = d;
            function R(j) {
              return Object.prototype.toString.call(j) == "[object Object]";
            }
            g.isObject = R;
            function S(j) {
              for (var z in j)
                return !1;
              return !0;
            }
            g.isEmpty = S;
            function u(j, z) {
              for (var J in j)
                if (J !== z)
                  return !1;
              return !0;
            }
            g.isOnlyPropIn = u;
            function c(j) {
              return j == null;
            }
            g.isEmptyArg = c;
            function l(j) {
              var z = new Object();
              for (var J in j)
                z[J] = j[J];
              return z;
            }
            g.shallowClone = l;
            function r(j, z) {
              var J = (
                /** @class */
                function() {
                  function $() {
                  }
                  return $;
                }()
              );
              J.prototype = j;
              var X = new J();
              return z && O(X, z), X;
            }
            g.prototypicalClone = r;
            var n = function(j, z) {
              if (L.default.Config.inherits) {
                L.default.Config.inherits(j, z);
                return;
              }
              j.super_ = z, j.prototype = r(z.prototype, { constructor: j });
            };
            g.inherits = n;
            function t(j, z) {
              for (var J in j)
                if (j[J] == z)
                  return !0;
              return !1;
            }
            g.containsValue = t;
            function e(j, z) {
              return (0, g.isArray)(z) ? s(j, z) : i(j, z);
            }
            g.intersect = e;
            function s(j, z) {
              for (var J = [], X = 0; X < j.length; X++) {
                var $ = j[X];
                (0, g.arrIndexOf)(z, $) != -1 && J.push($);
              }
              return J;
            }
            g.arrIntersect = s;
            function i(j, z) {
              for (var J = [], X = 0; X < j.length; X++) {
                var $ = j[X];
                $ in z && J.push($);
              }
              return J;
            }
            g.arrIntersectOb = i;
            function h(j, z) {
              for (var J = [], X = 0; X < j.length; X++) {
                var $ = j[X];
                (0, g.arrIndexOf)(z, $) == -1 && J.push($);
              }
              return J;
            }
            g.arrSubtract = h, g.arrIndexOf = Array.prototype.indexOf ? function(j, z, J) {
              return j.indexOf(z, J);
            } : function(j, z, J) {
              J = J || 0;
              for (var X = j.length; J < X; J++)
                if (j[J] === z)
                  return J;
              return -1;
            };
            function w(j, z) {
              return (0, g.arrIndexOf)(j, z) !== -1;
            }
            g.arrIn = w;
            function b(j, z) {
              var J = (0, g.arrIndexOf)(j, z), X = J != -1;
              return X && j.splice(J, 1), X;
            }
            g.arrDeleteValue = b;
            function E(j, z) {
              var J = j.slice();
              return b(J, z), J;
            }
            g.arrWithoutValue = E;
            function A(j, z) {
              var J = [];
              for (var X in j)
                z && !Object.prototype.hasOwnProperty.call(j, X) || J.push(X);
              return J;
            }
            g.keysArray = A;
            function y(j, z) {
              var J = [];
              for (var X in j)
                z && !Object.prototype.hasOwnProperty.call(j, X) || J.push(j[X]);
              return J;
            }
            g.valuesArray = y;
            function C(j, z) {
              for (var J in j)
                Object.prototype.hasOwnProperty.call(j, J) && j[J] && z(J);
            }
            g.forInOwnNonNullProperties = C, g.arrForEach = Array.prototype.forEach ? function(j, z) {
              j.forEach(z);
            } : function(j, z) {
              for (var J = j.length, X = 0; X < J; X++)
                z(j[X], X, j);
            };
            function N(j, z) {
              return (0, g.arrForEach)(j.slice(), z);
            }
            g.safeArrForEach = N, g.arrMap = Array.prototype.map ? function(j, z) {
              return j.map(z);
            } : function(j, z) {
              for (var J = [], X = j.length, $ = 0; $ < X; $++)
                J.push(z(j[$], $, j));
              return J;
            }, g.arrFilter = Array.prototype.filter ? function(j, z) {
              return j.filter(z);
            } : function(j, z) {
              for (var J = [], X = j.length, $ = 0; $ < X; $++)
                z(j[$]) && J.push(j[$]);
              return J;
            }, g.arrEvery = Array.prototype.every ? function(j, z) {
              return j.every(z);
            } : function(j, z) {
              for (var J = j.length, X = 0; X < J; X++)
                if (!z(j[X], X, j))
                  return !1;
              return !0;
            };
            function U(j, z) {
              if (j.length === 0)
                return !0;
              var J = j[0][z];
              return (0, g.arrEvery)(j, function(X) {
                return X[z] === J;
              });
            }
            g.allSame = U;
            var G = {
              json: "application/json",
              jsonp: "application/javascript",
              xml: "application/xml",
              html: "text/html",
              msgpack: "application/x-msgpack"
            };
            function V(j, z) {
              var J = G[z || et.json];
              return {
                accept: J,
                "X-Ably-Version": I.default.protocolVersion.toString(),
                "Ably-Agent": (0, I.getAgentString)(j)
              };
            }
            g.defaultGetHeaders = V;
            function Q(j, z) {
              var J, X = J = G[z || et.json];
              return {
                accept: X,
                "content-type": J,
                "X-Ably-Version": I.default.protocolVersion.toString(),
                "Ably-Agent": (0, I.getAgentString)(j)
              };
            }
            g.defaultPostHeaders = Q;
            function H(j) {
              return j.splice(v(j), 1)[0];
            }
            g.arrPopRandomElement = H;
            function m(j) {
              var z = [];
              if (j)
                for (var J in j)
                  z.push(encodeURIComponent(J) + "=" + encodeURIComponent(j[J]));
              return z.length ? "?" + z.join("&") : "";
            }
            g.toQueryString = m;
            function x(j) {
              for (var z, J = /([^?&=]+)=?([^&]*)/g, X = {}; z = J.exec(j); )
                X[decodeURIComponent(z[1])] = decodeURIComponent(z[2]);
              return X;
            }
            g.parseQueryString = x, g.now = Date.now || function() {
              return (/* @__PURE__ */ new Date()).getTime();
            };
            function D(j) {
              return typeof j == "object" && j !== null && (j.constructor.name == "ErrorInfo" || j.constructor.name == "PartialErrorInfo");
            }
            g.isErrorInfoOrPartialErrorInfo = D;
            function B(j) {
              var z, J;
              return j instanceof Error || ((z = j == null ? void 0 : j.constructor) === null || z === void 0 ? void 0 : z.name) === "ErrorInfo" || ((J = j == null ? void 0 : j.constructor) === null || J === void 0 ? void 0 : J.name) === "PartialErrorInfo" ? j.toString() : L.default.Config.inspect(j);
            }
            g.inspectError = B;
            function W(j) {
              return L.default.BufferUtils.isBuffer(j) ? j.toString() : typeof j == "string" ? j : L.default.Config.inspect(j);
            }
            g.inspectBody = W;
            function _(j) {
              if (L.default.BufferUtils.isBuffer(j))
                return L.default.BufferUtils.byteLength(j);
              if (typeof j == "string")
                return L.default.Config.stringByteSize(j);
              throw new Error("Expected input of Utils.dataSizeBytes to be a buffer or string, but was: " + typeof j);
            }
            g.dataSizeBytes = _;
            function K() {
              return String(Math.random()).substr(2);
            }
            g.cheapRandStr = K;
            var q = function(j) {
              if (L.default.Config.getRandomValues && typeof Uint8Array < "u") {
                var z = new Uint8Array(j);
                return L.default.Config.getRandomValues(z), L.default.BufferUtils.base64Encode(z);
              }
              for (var J = L.default.BufferUtils.base64CharSet, X = Math.round(j * 4 / 3), $ = "", st = 0; st < X; st++)
                $ += J[v(J)];
              return $;
            };
            g.randomString = q;
            var Z = function(j) {
              if (L.default.Config.getRandomValues && typeof Uint8Array < "u") {
                var z = new Uint8Array(j);
                return L.default.Config.getRandomValues(z), L.default.BufferUtils.hexEncode(z);
              }
              for (var J = L.default.BufferUtils.hexCharSet, X = j * 2, $ = "", st = 0; st < X; st++)
                $ += J[v(J)];
              return $;
            };
            g.randomHexString = Z;
            function tt(j, z) {
              for (var J = Math.min(z, j.length), X = j.slice(), $ = [], st = 0; st < J; st++)
                $.push(H(X));
              return $;
            }
            g.arrChooseN = tt, g.trim = String.prototype.trim ? function(j) {
              return j.trim();
            } : function(j) {
              return j.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
            };
            function Y(j, z, J) {
              return new Promise(function(X, $) {
                j[z].apply(j, a.__spreadArray(a.__spreadArray([], J, !1), [function(st, lt) {
                  st ? $(st) : X(lt);
                }], !1));
              });
            }
            g.promisify = Y;
            var et;
            (function(j) {
              j.msgpack = "msgpack", j.json = "json";
            })(et = g.Format || (g.Format = {}));
            function it(j, z) {
              return z == "msgpack" ? L.default.Config.msgpack.decode(j) : JSON.parse(String(j));
            }
            g.decodeBody = it;
            function at(j, z) {
              return z == "msgpack" ? L.default.Config.msgpack.encode(j, !0) : JSON.stringify(j);
            }
            g.encodeBody = at;
            function rt(j) {
              return j.map(function(z) {
                return z && z.toLowerCase();
              });
            }
            g.allToLowerCase = rt;
            function ft(j) {
              return j.map(function(z) {
                return z && z.toUpperCase();
              });
            }
            g.allToUpperCase = ft;
            function ht(j) {
              return Math.min((j + 2) / 3, 2);
            }
            g.getBackoffCoefficient = ht;
            function ut() {
              return 1 - Math.random() * 0.2;
            }
            g.getJitterCoefficient = ut;
            function pt(j, z) {
              return j * ht(z) * ut();
            }
            g.getRetryTime = pt;
            function gt() {
              return p || (typeof window < "u" ? window : self);
            }
            g.getGlobalObject = gt;
            function vt(j, z) {
              return Object.keys(j).every(function(J) {
                return j[J] === z[J];
              }) && Object.keys(z).every(function(J) {
                return z[J] === j[J];
              });
            }
            g.shallowEquals = vt;
            function At(j) {
              var z = /^(\[([^?]*)(?:(.*))\])?(.+)$/, J = j.match(z);
              if (!J || !J.length || J.length < 5)
                throw new T.default("regex match failed", 400, 40010);
              if (J[2])
                throw new T.default("cannot use a derived option with a ".concat(J[2], " channel"), 400, 40010);
              return {
                qualifierParam: J[3] || "",
                channelName: J[4]
              };
            }
            g.matchDerivedChannel = At;
            function Ot(j) {
              return L.default.Config.createHmac ? Buffer.from(j, "ascii").toString("base64") : (0, P.stringify)((0, M.parse)(j));
            }
            g.toBase64 = Ot;
            function St(j, z) {
              return j.length === z.length && (0, g.arrEvery)(j, function(J, X) {
                return J === z[X];
              });
            }
            g.arrEquals = St;
          }).call(this, f(13));
        },
        /* 2 */
        /***/
        function(F, g, f) {
          (function(p) {
            Object.defineProperty(g, "__esModule", { value: !0 });
            var a = f(0), L = a.__importDefault(f(3)), I = p || (typeof window < "u" ? window : self), T;
            (function(o) {
              o[o.None = 0] = "None", o[o.Error = 1] = "Error", o[o.Major = 2] = "Major", o[o.Minor = 3] = "Minor", o[o.Micro = 4] = "Micro";
            })(T || (T = {}));
            function P(o, d) {
              return "".concat(o).padStart(d ? 3 : 2, "0");
            }
            function M(o) {
              return L.default.Config.logTimestamps ? function(d) {
                var R = /* @__PURE__ */ new Date();
                o(P(R.getHours()) + ":" + P(R.getMinutes()) + ":" + P(R.getSeconds()) + "." + P(R.getMilliseconds(), 1) + " " + d);
              } : o;
            }
            var v = function() {
              var o, d, R, S;
              return typeof Window > "u" && typeof WorkerGlobalScope > "u" || typeof ((d = (o = I == null ? void 0 : I.console) === null || o === void 0 ? void 0 : o.log) === null || d === void 0 ? void 0 : d.apply) == "function" ? (R = function() {
                for (var u = [], c = 0; c < arguments.length; c++)
                  u[c] = arguments[c];
                console.log.apply(console, u);
              }, S = console.warn ? function() {
                for (var u = [], c = 0; c < arguments.length; c++)
                  u[c] = arguments[c];
                console.warn.apply(console, u);
              } : R) : I != null && I.console.log ? R = S = function() {
                Function.prototype.apply.call(console.log, console, arguments);
              } : R = S = function() {
              }, [R, S].map(M);
            }, O = (
              /** @class */
              function() {
                function o() {
                  o.logLevel = o.LOG_DEFAULT;
                }
                return o.initLogHandlers = function() {
                  var d = v(), R = d[0], S = d[1];
                  this.logHandler = R, this.logErrorHandler = S;
                }, o.logLevel = T.Error, o.LOG_NONE = T.None, o.LOG_ERROR = T.Error, o.LOG_MAJOR = T.Major, o.LOG_MINOR = T.Minor, o.LOG_MICRO = T.Micro, o.LOG_DEFAULT = T.Error, o.LOG_DEBUG = T.Micro, o.logAction = function(d, R, S) {
                  o.shouldLog(d) && (d === T.Error ? o.logErrorHandler : o.logHandler)("Ably: " + R + ": " + S);
                }, o.deprecated = function(d, R) {
                  o.deprecatedWithMsg(d, "Please use '" + R + "' instead.");
                }, o.deprecatedWithMsg = function(d, R) {
                  o.shouldLog(T.Error) && o.logErrorHandler("Ably: Deprecation warning - '" + d + "' is deprecated and will be removed from a future version. " + R);
                }, o.shouldLog = function(d) {
                  return d <= o.logLevel;
                }, o.setLog = function(d, R) {
                  d !== void 0 && (o.logLevel = d), R !== void 0 && (o.logHandler = o.logErrorHandler = R);
                }, o;
              }()
            );
            g.default = O;
          }).call(this, f(13));
        },
        /* 3 */
        /***/
        function(F, g, f) {
          Object.defineProperty(g, "__esModule", { value: !0 });
          var p = (
            /** @class */
            function() {
              function a() {
              }
              return a;
            }()
          );
          g.default = p;
        },
        /* 4 */
        /***/
        function(F, g, f) {
          Object.defineProperty(g, "__esModule", { value: !0 }), g.PartialErrorInfo = void 0;
          var p = f(0), a = p.__importDefault(f(3)), L = p.__importStar(f(1));
          function I(M) {
            var v = "[" + M.constructor.name;
            return M.message && (v += ": " + M.message), M.statusCode && (v += "; statusCode=" + M.statusCode), M.code && (v += "; code=" + M.code), M.cause && (v += "; cause=" + L.inspectError(M.cause)), M.href && !(M.message && M.message.indexOf("help.ably.io") > -1) && (v += "; see " + M.href + " "), v += "]", v;
          }
          var T = (
            /** @class */
            function(M) {
              p.__extends(v, M);
              function v(O, o, d, R) {
                var S = M.call(this, O) || this;
                return typeof Object.setPrototypeOf < "u" && Object.setPrototypeOf(S, v.prototype), S.code = o, S.statusCode = d, S.cause = R, S;
              }
              return v.prototype.toString = function() {
                return I(this);
              }, v.fromValues = function(O) {
                var o = O, d = o.message, R = o.code, S = o.statusCode;
                if (typeof d != "string" || typeof R != "number" || typeof S != "number")
                  throw new Error("ErrorInfo.fromValues(): invalid values: " + a.default.Config.inspect(O));
                var u = Object.assign(new v(d, R, S), O);
                return u.code && !u.href && (u.href = "https://help.ably.io/error/" + u.code), u;
              }, v;
            }(Error)
          );
          g.default = T;
          var P = (
            /** @class */
            function(M) {
              p.__extends(v, M);
              function v(O, o, d, R) {
                var S = M.call(this, O) || this;
                return typeof Object.setPrototypeOf < "u" && Object.setPrototypeOf(S, v.prototype), S.code = o, S.statusCode = d, S.cause = R, S;
              }
              return v.prototype.toString = function() {
                return I(this);
              }, v;
            }(Error)
          );
          g.PartialErrorInfo = P;
        },
        /* 5 */
        /***/
        function(F, g, f) {
          (function(p, a) {
            F.exports = a(f(6));
          })(this, function(p) {
            return function() {
              if (typeof ArrayBuffer == "function") {
                var a = p, L = a.lib, I = L.WordArray, T = I.init, P = I.init = function(M) {
                  if (M instanceof ArrayBuffer && (M = new Uint8Array(M)), (M instanceof Int8Array || typeof Uint8ClampedArray < "u" && M instanceof Uint8ClampedArray || M instanceof Int16Array || M instanceof Uint16Array || M instanceof Int32Array || M instanceof Uint32Array || M instanceof Float32Array || M instanceof Float64Array) && (M = new Uint8Array(M.buffer, M.byteOffset, M.byteLength)), M instanceof Uint8Array) {
                    for (var v = M.byteLength, O = [], o = 0; o < v; o++)
                      O[o >>> 2] |= M[o] << 24 - o % 4 * 8;
                    T.call(this, O, v);
                  } else
                    T.apply(this, arguments);
                };
                P.prototype = I;
              }
            }(), p.lib.WordArray;
          });
        },
        /* 6 */
        /***/
        function(F, g, f) {
          (function(p) {
            (function(a, L) {
              F.exports = L();
            })(this, function() {
              var a = a || function(L, I) {
                var T;
                if (typeof window < "u" && window.crypto && (T = window.crypto), !T && typeof window < "u" && window.msCrypto && (T = window.msCrypto), !T && typeof p < "u" && p.crypto && (T = p.crypto), !T)
                  try {
                    T = f(44);
                  } catch {
                  }
                var P = function() {
                  if (T) {
                    if (typeof T.getRandomValues == "function")
                      try {
                        return T.getRandomValues(new Uint32Array(1))[0];
                      } catch {
                      }
                    if (typeof T.randomBytes == "function")
                      try {
                        return T.randomBytes(4).readInt32LE();
                      } catch {
                      }
                  }
                  throw new Error("Native crypto module could not be used to get secure random number.");
                }, M = Object.create || function() {
                  function n() {
                  }
                  return function(t) {
                    var e;
                    return n.prototype = t, e = new n(), n.prototype = null, e;
                  };
                }(), v = {}, O = v.lib = {}, o = O.Base = function() {
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
                      var t = M(this);
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
                }(), d = O.WordArray = o.extend({
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
                    n = this.words = n || [], t != I ? this.sigBytes = t : this.sigBytes = n.length * 4;
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
                    return (n || S).stringify(this);
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
                        var w = e[h >>> 2] >>> 24 - h % 4 * 8 & 255;
                        t[s + h >>> 2] |= w << 24 - (s + h) % 4 * 8;
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
                    n[t >>> 2] &= 4294967295 << 32 - t % 4 * 8, n.length = L.ceil(t / 4);
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
                      t.push(P());
                    return new d.init(t, n);
                  }
                }), R = v.enc = {}, S = R.Hex = {
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
                }, u = R.Latin1 = {
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
                }, c = R.Utf8 = {
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
                }, l = O.BufferedBlockAlgorithm = o.extend({
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
                    var t, e = this._data, s = e.words, i = e.sigBytes, h = this.blockSize, w = h * 4, b = i / w;
                    n ? b = L.ceil(b) : b = L.max((b | 0) - this._minBufferSize, 0);
                    var E = b * h, A = L.min(E * 4, i);
                    if (E) {
                      for (var y = 0; y < E; y += h)
                        this._doProcessBlock(s, y);
                      t = s.splice(0, E), e.sigBytes -= A;
                    }
                    return new d.init(t, A);
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
                O.Hasher = l.extend({
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
        function(F, g, f) {
          Object.defineProperty(g, "__esModule", { value: !0 });
          var p = f(0), a = p.__importStar(f(1)), L = p.__importDefault(f(2)), I = p.__importDefault(f(3));
          function T(v, O, o) {
            try {
              O.apply(v, o);
            } catch (d) {
              L.default.logAction(L.default.LOG_ERROR, "EventEmitter.emit()", "Unexpected listener exception: " + d + "; stack = " + (d && d.stack));
            }
          }
          function P(v, O, o) {
            for (var d, R, S, u = 0; u < v.length; u++)
              if (d = v[u], o && (d = d[o]), a.isArray(d)) {
                for (; (R = a.arrIndexOf(d, O)) !== -1; )
                  d.splice(R, 1);
                o && d.length === 0 && delete v[u][o];
              } else if (a.isObject(d))
                for (S in d)
                  Object.prototype.hasOwnProperty.call(d, S) && a.isArray(d[S]) && P([d], O, S);
          }
          var M = (
            /** @class */
            function() {
              function v() {
                this.any = [], this.events = /* @__PURE__ */ Object.create(null), this.anyOnce = [], this.eventsOnce = /* @__PURE__ */ Object.create(null);
              }
              return v.prototype.on = function() {
                for (var O = this, o = [], d = 0; d < arguments.length; d++)
                  o[d] = arguments[d];
                if (o.length === 1) {
                  var R = o[0];
                  if (typeof R == "function")
                    this.any.push(R);
                  else
                    throw new Error("EventListener.on(): Invalid arguments: " + I.default.Config.inspect(o));
                }
                if (o.length === 2) {
                  var S = o[0], u = o[1];
                  if (typeof u != "function")
                    throw new Error("EventListener.on(): Invalid arguments: " + I.default.Config.inspect(o));
                  if (a.isEmptyArg(S))
                    this.any.push(u);
                  else if (a.isArray(S))
                    S.forEach(function(l) {
                      O.on(l, u);
                    });
                  else {
                    if (typeof S != "string")
                      throw new Error("EventListener.on(): Invalid arguments: " + I.default.Config.inspect(o));
                    var c = this.events[S] || (this.events[S] = []);
                    c.push(u);
                  }
                }
              }, v.prototype.off = function() {
                for (var O, o = this, d = [], R = 0; R < arguments.length; R++)
                  d[R] = arguments[R];
                if (d.length == 0 || a.isEmptyArg(d[0]) && a.isEmptyArg(d[1])) {
                  this.any = [], this.events = /* @__PURE__ */ Object.create(null), this.anyOnce = [], this.eventsOnce = /* @__PURE__ */ Object.create(null);
                  return;
                }
                var S = d[0], u = d[1], c = null, l = null;
                if (d.length === 1 || !u)
                  typeof S == "function" ? c = S : l = S;
                else {
                  if (typeof u != "function")
                    throw new Error("EventEmitter.off(): invalid arguments:" + I.default.Config.inspect(d));
                  O = [S, u], l = O[0], c = O[1];
                }
                if (c && a.isEmptyArg(l)) {
                  P([this.any, this.events, this.anyOnce, this.eventsOnce], c);
                  return;
                }
                if (a.isArray(l)) {
                  l.forEach(function(r) {
                    o.off(r, c);
                  });
                  return;
                }
                if (typeof l != "string")
                  throw new Error("EventEmitter.off(): invalid arguments:" + I.default.Config.inspect(d));
                c ? P([this.events, this.eventsOnce], c, l) : (delete this.events[l], delete this.eventsOnce[l]);
              }, v.prototype.listeners = function(O) {
                if (O) {
                  var o = this.events[O] || [];
                  return this.eventsOnce[O] && Array.prototype.push.apply(o, this.eventsOnce[O]), o.length ? o : null;
                }
                return this.any.length ? this.any : null;
              }, v.prototype.emit = function(O) {
                for (var o = [], d = 1; d < arguments.length; d++)
                  o[d - 1] = arguments[d];
                var R = { event: O }, S = [];
                this.anyOnce.length && (Array.prototype.push.apply(S, this.anyOnce), this.anyOnce = []), this.any.length && Array.prototype.push.apply(S, this.any);
                var u = this.eventsOnce[O];
                u && (Array.prototype.push.apply(S, u), delete this.eventsOnce[O]);
                var c = this.events[O];
                c && Array.prototype.push.apply(S, c), a.arrForEach(S, function(l) {
                  T(R, l, o);
                });
              }, v.prototype.once = function() {
                for (var O = this, o = [], d = 0; d < arguments.length; d++)
                  o[d] = arguments[d];
                var R = o.length;
                if ((R === 0 || R === 1 && typeof o[0] != "function") && I.default.Config.Promise) {
                  var S = o[0];
                  return new I.default.Config.Promise(function(t) {
                    O.once(S, t);
                  });
                }
                var u = o[0], c = o[1];
                if (o.length === 1 && typeof u == "function")
                  this.anyOnce.push(u);
                else if (a.isEmptyArg(u)) {
                  if (typeof c != "function")
                    throw new Error("EventEmitter.once(): Invalid arguments:" + I.default.Config.inspect(o));
                  this.anyOnce.push(c);
                } else if (a.isArray(u)) {
                  var l = this, r = function() {
                    var t = Array.prototype.slice.call(arguments);
                    if (a.arrForEach(u, function(e) {
                      l.off(e, r);
                    }), typeof c != "function")
                      throw new Error("EventEmitter.once(): Invalid arguments:" + I.default.Config.inspect(o));
                    c.apply(this, t);
                  };
                  a.arrForEach(u, function(t) {
                    l.on(t, r);
                  });
                } else {
                  if (typeof u != "string")
                    throw new Error("EventEmitter.once(): Invalid arguments:" + I.default.Config.inspect(o));
                  var n = this.eventsOnce[u] || (this.eventsOnce[u] = []);
                  if (c) {
                    if (typeof c != "function")
                      throw new Error("EventEmitter.once(): Invalid arguments:" + I.default.Config.inspect(o));
                    n.push(c);
                  }
                }
              }, v.prototype.whenState = function(O, o, d) {
                for (var R = this, S = [], u = 3; u < arguments.length; u++)
                  S[u - 3] = arguments[u];
                var c = { event: O };
                if (typeof O != "string" || typeof o != "string")
                  throw "whenState requires a valid event String argument";
                if (typeof d != "function" && I.default.Config.Promise)
                  return new I.default.Config.Promise(function(l) {
                    v.prototype.whenState.apply(R, [O, o, l].concat(S));
                  });
                O === o ? T(c, d, S) : this.once(O, d);
              }, v;
            }()
          );
          g.default = M;
        },
        /* 8 */
        /***/
        function(F, g, f) {
          Object.defineProperty(g, "__esModule", { value: !0 }), g.getDefaults = g.normaliseOptions = g.objectifyOptions = g.getAgentString = g.getHosts = g.getFallbackHosts = g.environmentFallbackHosts = g.getHttpScheme = g.getPort = g.getHost = void 0;
          var p = f(0), a = p.__importDefault(f(3)), L = p.__importStar(f(1)), I = p.__importDefault(f(2)), T = p.__importDefault(f(4)), P = f(43), M = "ably-js/" + P.version, v = {
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
            version: P.version,
            protocolVersion: 2,
            agent: M,
            getHost: O,
            getPort: o,
            getHttpScheme: d,
            environmentFallbackHosts: R,
            getFallbackHosts: S,
            getHosts: u,
            checkHost: c,
            objectifyOptions: t,
            normaliseOptions: e
          };
          function O(i, h, w) {
            return w ? h = h == i.restHost && i.realtimeHost || h || i.realtimeHost : h = h || i.restHost, h;
          }
          g.getHost = O;
          function o(i, h) {
            return h || i.tls ? i.tlsPort : i.port;
          }
          g.getPort = o;
          function d(i) {
            return i.tls ? "https://" : "http://";
          }
          g.getHttpScheme = d;
          function R(i) {
            return [
              i + "-a-fallback.ably-realtime.com",
              i + "-b-fallback.ably-realtime.com",
              i + "-c-fallback.ably-realtime.com",
              i + "-d-fallback.ably-realtime.com",
              i + "-e-fallback.ably-realtime.com"
            ];
          }
          g.environmentFallbackHosts = R;
          function S(i) {
            var h = i.fallbackHosts, w = typeof i.httpMaxRetryCount < "u" ? i.httpMaxRetryCount : v.httpMaxRetryCount;
            return h ? L.arrChooseN(h, w) : [];
          }
          g.getFallbackHosts = S;
          function u(i) {
            return [i.restHost].concat(S(i));
          }
          g.getHosts = u;
          function c(i) {
            if (typeof i != "string")
              throw new T.default("host must be a string; was a " + typeof i, 4e4, 400);
            if (!i.length)
              throw new T.default("host must not be zero-length", 4e4, 400);
          }
          function l(i, h, w) {
            return i.realtimeHost ? i.realtimeHost : i.restHost ? (I.default.logAction(I.default.LOG_MINOR, "Defaults.normaliseOptions", 'restHost is set to "' + i.restHost + '" but realtimeHost is not set, so setting realtimeHost to "' + i.restHost + '" too. If this is not what you want, please set realtimeHost explicitly.'), i.restHost) : h ? v.REALTIME_HOST : w + "-" + v.REALTIME_HOST;
          }
          function r(i) {
            var h = {};
            for (var w in v.TIMEOUTS)
              h[w] = i[w] || v.TIMEOUTS[w];
            return h;
          }
          function n(i) {
            var h = v.agent;
            if (i.agents)
              for (var w in i.agents)
                h += " " + w + "/" + i.agents[w];
            return h;
          }
          g.getAgentString = n;
          function t(i) {
            return typeof i == "string" ? i.indexOf(":") == -1 ? { token: i } : { key: i } : i;
          }
          g.objectifyOptions = t;
          function e(i) {
            if (i.host && (I.default.deprecated("host", "restHost"), i.restHost = i.host), i.wsHost && (I.default.deprecated("wsHost", "realtimeHost"), i.realtimeHost = i.wsHost), i.queueEvents && (I.default.deprecated("queueEvents", "queueMessages"), i.queueMessages = i.queueEvents), i.fallbackHostsUseDefault) {
              if (i.fallbackHosts) {
                var h = "fallbackHosts and fallbackHostsUseDefault cannot both be set";
                throw I.default.logAction(I.default.LOG_ERROR, "Defaults.normaliseOptions", h), new T.default(h, 4e4, 400);
              }
              if (i.port || i.tlsPort) {
                var h = "fallbackHostsUseDefault cannot be set when port or tlsPort are set";
                throw I.default.logAction(I.default.LOG_ERROR, "Defaults.normaliseOptions", h), new T.default(h, 4e4, 400);
              }
              i.environment ? I.default.deprecatedWithMsg("fallbackHostsUseDefault", "There is no longer a need to set this when the environment option is also set since the library will now generate the correct fallback hosts using the environment option.") : I.default.deprecated("fallbackHostsUseDefault", "fallbackHosts: Ably.Defaults.FALLBACK_HOSTS"), i.fallbackHosts = v.FALLBACK_HOSTS;
            }
            i.recover === !0 && (I.default.deprecated("{recover: true}", "{recover: function(lastConnectionDetails, cb) { cb(true); }}"), i.recover = function(H, m) {
              m(!0);
            }), typeof i.recover == "function" && i.closeOnUnload === !0 && (I.default.logAction(I.default.LOG_ERROR, "Defaults.normaliseOptions", "closeOnUnload was true and a session recovery function was set - these are mutually exclusive, so unsetting the latter"), i.recover = void 0), "closeOnUnload" in i || (i.closeOnUnload = !i.recover), i.transports && L.arrIn(i.transports, "xhr") && (I.default.deprecated('transports: ["xhr"]', 'transports: ["xhr_streaming"]'), L.arrDeleteValue(i.transports, "xhr"), i.transports.push("xhr_streaming")), "queueMessages" in i || (i.queueMessages = !0);
            var w = i.environment && String(i.environment).toLowerCase() || v.ENVIRONMENT, b = !w || w === "production";
            !i.fallbackHosts && !i.restHost && !i.realtimeHost && !i.port && !i.tlsPort && (i.fallbackHosts = b ? v.FALLBACK_HOSTS : R(w));
            var E = i.restHost || (b ? v.REST_HOST : w + "-" + v.REST_HOST), A = l(i, b, w);
            L.arrForEach((i.fallbackHosts || []).concat(E, A), c), i.port = i.port || v.PORT, i.tlsPort = i.tlsPort || v.TLS_PORT, "tls" in i || (i.tls = !0);
            var y = r(i);
            if ("useBinaryProtocol" in i ? i.useBinaryProtocol = a.default.Config.supportsBinary && i.useBinaryProtocol : i.useBinaryProtocol = a.default.Config.preferBinary, i.clientId) {
              var C = i.headers = i.headers || {};
              C["X-Ably-ClientId"] = a.default.BufferUtils.base64Encode(a.default.BufferUtils.utf8Encode(i.clientId));
            }
            "idempotentRestPublishing" in i || (i.idempotentRestPublishing = !0), i.promises && !a.default.Config.Promise && (I.default.logAction(I.default.LOG_ERROR, "Defaults.normaliseOptions", "{promises: true} was specified, but no Promise constructor found; disabling promises"), i.promises = !1);
            var N = null, U = i.connectivityCheckUrl;
            if (i.connectivityCheckUrl) {
              var G = i.connectivityCheckUrl.split("?"), V = G[0], Q = G[1];
              N = Q ? L.parseQueryString(Q) : {}, V.indexOf("://") === -1 && (V = "https://" + V), U = V;
            }
            return p.__assign(p.__assign({}, i), { useBinaryProtocol: "useBinaryProtocol" in i ? a.default.Config.supportsBinary && i.useBinaryProtocol : a.default.Config.preferBinary, realtimeHost: A, restHost: E, maxMessageSize: i.maxMessageSize || v.maxMessageSize, timeouts: y, connectivityCheckParams: N, connectivityCheckUrl: U });
          }
          g.normaliseOptions = e, g.default = v;
          function s(i) {
            return Object.assign(v, i);
          }
          g.getDefaults = s;
        },
        /* 9 */
        /***/
        function(F, g, f) {
          Object.defineProperty(g, "__esModule", { value: !0 });
          var p = f(0), a = p.__importDefault(f(3)), L = p.__importDefault(f(2)), I = p.__importDefault(f(4)), T = p.__importStar(f(1));
          function P(o) {
            return !o || !o.channelOptions ? {
              channelOptions: o,
              plugins: {},
              baseEncodedPreviousPayload: void 0
            } : o;
          }
          function M(o) {
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
            return o.name && (d += o.name.length), o.clientId && (d += o.clientId.length), o.extras && (d += JSON.stringify(o.extras).length), o.data && (d += T.dataSizeBytes(o.data)), d;
          }
          var O = (
            /** @class */
            function() {
              function o() {
              }
              return o.prototype.toJSON = function() {
                var d = this.encoding, R = this.data;
                return R && a.default.BufferUtils.isBuffer(R) && (arguments.length > 0 ? (d = d ? d + "/base64" : "base64", R = a.default.BufferUtils.base64Encode(R)) : R = a.default.BufferUtils.toBuffer(R)), {
                  name: this.name,
                  id: this.id,
                  clientId: this.clientId,
                  connectionId: this.connectionId,
                  connectionKey: this.connectionKey,
                  extras: this.extras,
                  encoding: d,
                  data: R
                };
              }, o.prototype.toString = function() {
                var d = "[Message";
                return this.name && (d += "; name=" + this.name), this.id && (d += "; id=" + this.id), this.timestamp && (d += "; timestamp=" + this.timestamp), this.clientId && (d += "; clientId=" + this.clientId), this.connectionId && (d += "; connectionId=" + this.connectionId), this.encoding && (d += "; encoding=" + this.encoding), this.extras && (d += "; extras =" + JSON.stringify(this.extras)), this.data && (typeof this.data == "string" ? d += "; data=" + this.data : a.default.BufferUtils.isBuffer(this.data) ? d += "; data (buffer)=" + a.default.BufferUtils.base64Encode(this.data) : d += "; data (json)=" + JSON.stringify(this.data)), this.extras && (d += "; extras=" + JSON.stringify(this.extras)), d += "]", d;
              }, o.encrypt = function(d, R, S) {
                var u = d.data, c = d.encoding, l = R.channelCipher;
                c = c ? c + "/" : "", a.default.BufferUtils.isBuffer(u) || (u = a.default.BufferUtils.utf8Encode(String(u)), c = c + "utf-8/"), l.encrypt(u, function(r, n) {
                  if (r) {
                    S(r);
                    return;
                  }
                  d.data = n, d.encoding = c + "cipher+" + l.algorithm, S(null, d);
                });
              }, o.encode = function(d, R, S) {
                var u = d.data, c = typeof u == "string" || a.default.BufferUtils.isBuffer(u) || u === null || u === void 0;
                if (!c)
                  if (T.isObject(u) || T.isArray(u))
                    d.data = JSON.stringify(u), d.encoding = d.encoding ? d.encoding + "/json" : "json";
                  else
                    throw new I.default("Data type is unsupported", 40013, 400);
                R != null && R.cipher ? o.encrypt(d, R, S) : S(null, d);
              }, o.encodeArray = function(d, R, S) {
                for (var u = 0, c = 0; c < d.length; c++)
                  o.encode(d[c], R, function(l) {
                    if (l) {
                      S(l);
                      return;
                    }
                    u++, u == d.length && S(null, d);
                  });
              }, o.decode = function(d, R) {
                var S = P(R), u = d.data, c = d.encoding;
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
                          if (S.channelOptions != null && S.channelOptions.cipher && S.channelOptions.channelCipher) {
                            var i = s[3], h = S.channelOptions.channelCipher;
                            if (i != h.algorithm)
                              throw new Error("Unable to decrypt message with given cipher; incompatible cipher params");
                            t = h.decrypt(t);
                            continue;
                          } else
                            throw new Error("Unable to decrypt message; not an encrypted channel");
                        case "vcdiff":
                          if (!S.plugins || !S.plugins.vcdiff)
                            throw new I.default("Missing Vcdiff decoder (https://github.com/ably-forks/vcdiff-decoder)", 40019, 400);
                          if (typeof Uint8Array > "u")
                            throw new I.default("Delta decoding not supported on this browser (need ArrayBuffer & Uint8Array)", 40020, 400);
                          try {
                            var w = S.baseEncodedPreviousPayload;
                            typeof w == "string" && (w = a.default.BufferUtils.utf8Encode(w)), w = a.default.BufferUtils.toBuffer(w), t = a.default.BufferUtils.toBuffer(t), t = a.default.BufferUtils.typedArrayToBuffer(S.plugins.vcdiff.decode(t, w)), u = t;
                          } catch (E) {
                            throw new I.default("Vcdiff delta decode failed with " + E, 40018, 400);
                          }
                          continue;
                        default:
                          throw new Error("Unknown encoding");
                      }
                    }
                  } catch (E) {
                    var b = E;
                    throw new I.default("Error processing the " + e + " encoding, decoder returned ‘" + b.message + "’", b.code || 40013, 400);
                  } finally {
                    d.encoding = r <= 0 ? null : l.slice(0, r).join("/"), d.data = t;
                  }
                }
                S.baseEncodedPreviousPayload = u;
              }, o.fromResponseBody = function(d, R, S) {
                S && (d = T.decodeBody(d, S));
                for (var u = 0; u < d.length; u++) {
                  var c = d[u] = o.fromValues(d[u]);
                  try {
                    o.decode(c, R);
                  } catch (l) {
                    L.default.logAction(L.default.LOG_ERROR, "Message.fromResponseBody()", l.toString());
                  }
                }
                return d;
              }, o.fromValues = function(d) {
                return Object.assign(new o(), d);
              }, o.fromValuesArray = function(d) {
                for (var R = d.length, S = new Array(R), u = 0; u < R; u++)
                  S[u] = o.fromValues(d[u]);
                return S;
              }, o.fromEncoded = function(d, R) {
                var S = o.fromValues(d), u = M(R ?? null);
                try {
                  o.decode(S, u);
                } catch (c) {
                  L.default.logAction(L.default.LOG_ERROR, "Message.fromEncoded()", c.toString());
                }
                return S;
              }, o.fromEncodedArray = function(d, R) {
                return d.map(function(S) {
                  return o.fromEncoded(S, R);
                });
              }, o.getMessagesSize = function(d) {
                for (var R, S = 0, u = 0; u < d.length; u++)
                  R = d[u], S += R.size || (R.size = v(R));
                return S;
              }, o.serialize = T.encodeBody, o;
            }()
          );
          g.default = O;
        },
        /* 10 */
        /***/
        function(F, g, f) {
          Object.defineProperty(g, "__esModule", { value: !0 });
          var p = f(0), a = p.__importStar(f(1)), L = p.__importDefault(f(4)), I = p.__importDefault(f(9)), T = p.__importDefault(f(15)), P = {
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
          }, M = [];
          Object.keys(P).forEach(function(S) {
            M[P[S]] = S;
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
          }, O = Object.keys(v);
          v.MODE_ALL = v.PRESENCE | v.PUBLISH | v.SUBSCRIBE | v.PRESENCE_SUBSCRIBE;
          function o(S) {
            var u = [];
            if (S)
              for (var c = 0; c < S.length; c++)
                u.push(S[c].toString());
            return "[ " + u.join(", ") + " ]";
          }
          var d = "id channel channelSerial connectionId count msgSerial timestamp".split(" "), R = (
            /** @class */
            function() {
              function S() {
                var u = this;
                this.hasFlag = function(c) {
                  return (u.flags & v[c]) > 0;
                };
              }
              return S.prototype.setFlag = function(u) {
                return this.flags = this.flags | v[u];
              }, S.prototype.getMode = function() {
                return this.flags && this.flags & v.MODE_ALL;
              }, S.prototype.encodeModesToFlags = function(u) {
                var c = this;
                u.forEach(function(l) {
                  return c.setFlag(l);
                });
              }, S.prototype.decodeModesFromFlags = function() {
                var u = this, c = [];
                return S.channelModes.forEach(function(l) {
                  u.hasFlag(l) && c.push(l);
                }), c.length > 0 ? c : void 0;
              }, S.fromValues = function(u) {
                return Object.assign(new S(), u);
              }, S.Action = P, S.channelModes = ["PRESENCE", "PUBLISH", "SUBSCRIBE", "PRESENCE_SUBSCRIBE"], S.ActionName = M, S.serialize = a.encodeBody, S.deserialize = function(u, c) {
                var l = a.decodeBody(u, c);
                return S.fromDeserialized(l);
              }, S.fromDeserialized = function(u) {
                var c = u.error;
                c && (u.error = L.default.fromValues(c));
                var l = u.messages;
                if (l)
                  for (var r = 0; r < l.length; r++)
                    l[r] = I.default.fromValues(l[r]);
                var n = u.presence;
                if (n)
                  for (var r = 0; r < n.length; r++)
                    n[r] = T.default.fromValues(n[r], !0);
                return Object.assign(new S(), u);
              }, S.stringify = function(u) {
                var c = "[ProtocolMessage";
                u.action !== void 0 && (c += "; action=" + S.ActionName[u.action] || !1);
                for (var l, r = 0; r < d.length; r++)
                  l = d[r], u[l] !== void 0 && (c += "; " + l + "=" + u[l]);
                if (u.messages && (c += "; messages=" + o(I.default.fromValuesArray(u.messages))), u.presence && (c += "; presence=" + o(T.default.fromValuesArray(u.presence))), u.error && (c += "; error=" + L.default.fromValues(u.error).toString()), u.auth && u.auth.accessToken && (c += "; token=" + u.auth.accessToken), u.flags && (c += "; flags=" + O.filter(u.hasFlag).join(",")), u.params) {
                  var n = "";
                  a.forInOwnNonNullProperties(u.params, function(t) {
                    n.length > 0 && (n += "; "), n += t + "=" + u.params[t];
                  }), n.length > 0 && (c += "; params=[" + n + "]");
                }
                return c += "]", c;
              }, S;
            }()
          );
          g.default = R;
        },
        /* 11 */
        /***/
        function(F, g, f) {
          (function(p, a) {
            F.exports = a(f(6));
          })(this, function(p) {
            return function() {
              var a = p, L = a.lib, I = L.WordArray, T = a.enc;
              T.Base64 = {
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
                stringify: function(M) {
                  var v = M.words, O = M.sigBytes, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                  M.clamp();
                  for (var d = [], R = 0; R < O; R += 3)
                    for (var S = v[R >>> 2] >>> 24 - R % 4 * 8 & 255, u = v[R + 1 >>> 2] >>> 24 - (R + 1) % 4 * 8 & 255, c = v[R + 2 >>> 2] >>> 24 - (R + 2) % 4 * 8 & 255, l = S << 16 | u << 8 | c, r = 0; r < 4 && R + r * 0.75 < O; r++)
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
                parse: function(M) {
                  var v = M.length, O = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", o = this._reverseMap;
                  if (!o) {
                    o = this._reverseMap = [];
                    for (var d = 0; d < O.length; d++)
                      o[O.charCodeAt(d)] = d;
                  }
                  var R = O.charAt(64);
                  if (R) {
                    var S = M.indexOf(R);
                    S !== -1 && (v = S);
                  }
                  return P(M, v, o);
                }
              };
              function P(M, v, O) {
                for (var o = [], d = 0, R = 0; R < v; R++)
                  if (R % 4) {
                    var S = O[M.charCodeAt(R - 1)] << R % 4 * 2, u = O[M.charCodeAt(R)] >>> 6 - R % 4 * 2, c = S | u;
                    o[d >>> 2] |= c << 24 - d % 4 * 8, d++;
                  }
                return I.create(o, d);
              }
            }(), p.enc.Base64;
          });
        },
        /* 12 */
        /***/
        function(F, g, f) {
          Object.defineProperty(g, "__esModule", { value: !0 });
          var p = f(0), a = p.__importStar(f(1)), L = p.__importDefault(f(10)), I = p.__importDefault(f(26)), T = p.__importDefault(f(2)), P = p.__importDefault(f(8)), M = p.__importDefault(f(20)), v = p.__importDefault(f(17)), O = p.__importDefault(f(4)), o = p.__importDefault(f(21)), d = p.__importDefault(f(3));
          function R(c) {
            var l = [80015, 80017, 80030];
            return c.code ? v.default.isTokenErr(c) ? !1 : a.arrIn(l, c.code) ? !0 : c.code >= 4e4 && c.code < 5e4 : !1;
          }
          function S(c) {
            return R(c) ? [L.default.fromValues({ action: L.default.Action.ERROR, error: c })] : [L.default.fromValues({ action: L.default.Action.DISCONNECTED, error: c })];
          }
          var u = (
            /** @class */
            function(c) {
              p.__extends(l, c);
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
                T.default.logAction(T.default.LOG_MINOR, "CometTransport.connect()", "starting"), I.default.prototype.connect.call(this);
                var n = this.params, t = n.options, e = P.default.getHost(t, n.host), s = P.default.getPort(t), i = t.tls ? "https://" : "http://";
                this.baseUri = i + e + ":" + s + "/comet/";
                var h = this.baseUri + "connect";
                T.default.logAction(T.default.LOG_MINOR, "CometTransport.connect()", "uri: " + h), this.auth.getAuthParams(function(w, b) {
                  if (w) {
                    r.disconnect(w);
                    return;
                  }
                  if (!r.isDisposed) {
                    r.authParams = b;
                    var E = r.params.getConnectParams(b);
                    "stream" in E && (r.stream = E.stream), T.default.logAction(T.default.LOG_MINOR, "CometTransport.connect()", "connectParams:" + a.toQueryString(E));
                    var A = !1, y = r.recvRequest = r.createRequest(h, null, E, null, r.stream ? o.default.REQ_RECV_STREAM : o.default.REQ_RECV);
                    y.on("data", function(C) {
                      r.recvRequest && (A || (A = !0, r.emit("preconnect")), r.onData(C));
                    }), y.on("complete", function(C) {
                      if (r.recvRequest || (C = C || new O.default("Request cancelled", 80003, 400)), r.recvRequest = null, !A && !C && (A = !0, r.emit("preconnect")), r.onActivity(), C) {
                        C.code ? r.onData(S(C)) : r.disconnect(C);
                        return;
                      }
                      d.default.Config.nextTick(function() {
                        r.recv();
                      });
                    }), y.exec();
                  }
                });
              }, l.prototype.requestClose = function() {
                T.default.logAction(T.default.LOG_MINOR, "CometTransport.requestClose()"), this._requestCloseOrDisconnect(!0);
              }, l.prototype.requestDisconnect = function() {
                T.default.logAction(T.default.LOG_MINOR, "CometTransport.requestDisconnect()"), this._requestCloseOrDisconnect(!1);
              }, l.prototype._requestCloseOrDisconnect = function(r) {
                var n = this, t = r ? this.closeUri : this.disconnectUri;
                if (t) {
                  var e = this.createRequest(t, null, this.authParams, null, o.default.REQ_SEND);
                  e.on("complete", function(s) {
                    s && (T.default.logAction(T.default.LOG_ERROR, "CometTransport.request" + (r ? "Close()" : "Disconnect()"), "request returned err = " + a.inspectError(s)), n.finish("disconnected", s));
                  }), e.exec();
                }
              }, l.prototype.dispose = function() {
                var r = this;
                T.default.logAction(T.default.LOG_MINOR, "CometTransport.dispose()", ""), this.isDisposed || (this.isDisposed = !0, this.recvRequest && (T.default.logAction(T.default.LOG_MINOR, "CometTransport.dispose()", "aborting recv request"), this.recvRequest.abort(), this.recvRequest = null), this.finish("disconnected", M.default.disconnected()), d.default.Config.nextTick(function() {
                  r.emit("disposed");
                }));
              }, l.prototype.onConnect = function(r) {
                var n;
                if (!this.isDisposed) {
                  var t = (n = r.connectionDetails) === null || n === void 0 ? void 0 : n.connectionKey;
                  I.default.prototype.onConnect.call(this, r);
                  var e = this.baseUri + t;
                  T.default.logAction(T.default.LOG_MICRO, "CometTransport.onConnect()", "baseUri = " + e), this.sendUri = e + "/send", this.recvUri = e + "/recv", this.closeUri = e + "/close", this.disconnectUri = e + "/disconnect";
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
                  if (e && T.default.logAction(T.default.LOG_ERROR, "CometTransport.sendItems()", "on complete: err = " + a.inspectError(e)), n.sendRequest = null, e) {
                    e.code ? n.onData(S(e)) : n.disconnect(e);
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
                      t.code ? r.onData(S(t)) : r.disconnect(t);
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
                      this.onProtocolMessage(L.default.fromDeserialized(n[t]));
                } catch (e) {
                  T.default.logAction(T.default.LOG_ERROR, "CometTransport.onData()", "Unexpected exception handing channel event: " + e.stack);
                }
              }, l.prototype.encodeRequest = function(r) {
                return JSON.stringify(r);
              }, l.prototype.decodeResponse = function(r) {
                return typeof r == "string" ? JSON.parse(r) : r;
              }, l;
            }(I.default)
          );
          g.default = u;
        },
        /* 13 */
        /***/
        function(F, g) {
          var f;
          f = function() {
            return this;
          }();
          try {
            f = f || new Function("return this")();
          } catch {
            typeof window == "object" && (f = window);
          }
          F.exports = f;
        },
        /* 14 */
        /***/
        function(F, g, f) {
          Object.defineProperty(g, "__esModule", { value: !0 });
          var p = f(0), a = p.__importDefault(f(3)), L = p.__importStar(f(1)), I = p.__importDefault(f(2)), T = p.__importDefault(f(17)), P = p.__importDefault(f(18)), M = f(4);
          function v(u, c, l, r, n) {
            u.http.supportsAuthHeaders ? u.auth.getAuthHeaders(function(t, e) {
              t ? r(t) : n(L.mixin(e, c), l);
            }) : u.auth.getAuthParams(function(t, e) {
              t ? r(t) : n(c, L.mixin(e, l));
            });
          }
          function O(u, c) {
            return function(l, r, n, t, e) {
              if (l && !r) {
                u(l);
                return;
              }
              if (!t)
                try {
                  r = L.decodeBody(r, c);
                } catch (E) {
                  L.isErrorInfoOrPartialErrorInfo(E) ? u(E) : u(new M.PartialErrorInfo(L.inspectError(E), null));
                  return;
                }
              if (!r) {
                u(new M.PartialErrorInfo("unenvelope(): Response body is missing", null));
                return;
              }
              var s = r, i = s.statusCode, h = s.response, w = s.headers;
              if (i === void 0) {
                u(l, r, n, !0, e);
                return;
              }
              if (i < 200 || i >= 300) {
                var b = h && h.error || l;
                b || (b = new Error("Error in unenveloping " + r), b.statusCode = i), u(b, h, w, !0, i);
                return;
              }
              u(l, h, w, !0, i);
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
          function R(u, c, l, r) {
            return function(n, t, e, s, i) {
              n ? I.default.logAction(I.default.LOG_MICRO, "Resource." + c + "()", "Received Error; " + d(l, r) + "; Error: " + L.inspectError(n)) : I.default.logAction(I.default.LOG_MICRO, "Resource." + c + "()", "Received; " + d(l, r) + "; Headers: " + o(e) + "; StatusCode: " + i + "; Body: " + (a.default.BufferUtils.isBuffer(t) ? t.toString() : t)), u && u(n, t, e, s, i);
            };
          }
          var S = (
            /** @class */
            function() {
              function u() {
              }
              return u.get = function(c, l, r, n, t, e) {
                u.do(P.default.Get, c, l, null, r, n, t, e);
              }, u.delete = function(c, l, r, n, t, e) {
                u.do(P.default.Delete, c, l, null, r, n, t, e);
              }, u.post = function(c, l, r, n, t, e, s) {
                u.do(P.default.Post, c, l, r, n, t, e, s);
              }, u.patch = function(c, l, r, n, t, e, s) {
                u.do(P.default.Patch, c, l, r, n, t, e, s);
              }, u.put = function(c, l, r, n, t, e, s) {
                u.do(P.default.Put, c, l, r, n, t, e, s);
              }, u.do = function(c, l, r, n, t, e, s, i) {
                I.default.shouldLog(I.default.LOG_MICRO) && (i = R(i, c, r, e)), s && (i = i && O(i, s), (e = e || {}).envelope = s);
                function h(w, b) {
                  var E;
                  if (I.default.shouldLog(I.default.LOG_MICRO) && I.default.logAction(I.default.LOG_MICRO, "Resource." + c + "()", "Sending; " + d(r, b)), I.default.shouldLog(I.default.LOG_MICRO)) {
                    var A = n;
                    if (((E = w["content-type"]) === null || E === void 0 ? void 0 : E.indexOf("msgpack")) > 0)
                      try {
                        A = a.default.Config.msgpack.decode(n);
                      } catch (y) {
                        I.default.logAction(I.default.LOG_MICRO, "Resource." + c + "()", "Sending MsgPack Decoding Error: " + L.inspectError(y));
                      }
                    I.default.logAction(I.default.LOG_MICRO, "Resource." + c + "()", "Sending; " + d(r, b) + "; Body: " + A);
                  }
                  l.http.do(c, l, r, w, n, b, function(y, C, N, U, G) {
                    if (y && T.default.isTokenErr(y)) {
                      l.auth.authorize(null, null, function(V) {
                        if (V) {
                          i(V);
                          return;
                        }
                        v(l, N, b, i, h);
                      });
                      return;
                    }
                    i(y, C, N, U, G);
                  });
                }
                v(l, t, e, i, h);
              }, u;
            }()
          );
          g.default = S;
        },
        /* 15 */
        /***/
        function(F, g, f) {
          Object.defineProperty(g, "__esModule", { value: !0 });
          var p = f(0), a = p.__importDefault(f(2)), L = p.__importDefault(f(3)), I = p.__importDefault(f(9)), T = p.__importStar(f(1));
          function P(v) {
            return M.Actions.indexOf(v);
          }
          var M = (
            /** @class */
            function() {
              function v() {
              }
              return v.prototype.isSynthesized = function() {
                return !this.id || !this.connectionId ? !0 : this.id.substring(this.connectionId.length, 0) !== this.connectionId;
              }, v.prototype.parseId = function() {
                if (!this.id)
                  throw new Error("parseId(): Presence message does not contain an id");
                var O = this.id.split(":");
                return {
                  connectionId: O[0],
                  msgSerial: parseInt(O[1], 10),
                  index: parseInt(O[2], 10)
                };
              }, v.prototype.toJSON = function() {
                var O = this.data, o = this.encoding;
                return O && L.default.BufferUtils.isBuffer(O) && (arguments.length > 0 ? (o = o ? o + "/base64" : "base64", O = L.default.BufferUtils.base64Encode(O)) : O = L.default.BufferUtils.toBuffer(O)), {
                  id: this.id,
                  clientId: this.clientId,
                  /* Convert presence action back to an int for sending to Ably */
                  action: P(this.action),
                  data: O,
                  encoding: o,
                  extras: this.extras
                };
              }, v.prototype.toString = function() {
                var O = "[PresenceMessage";
                return O += "; action=" + this.action, this.id && (O += "; id=" + this.id), this.timestamp && (O += "; timestamp=" + this.timestamp), this.clientId && (O += "; clientId=" + this.clientId), this.connectionId && (O += "; connectionId=" + this.connectionId), this.encoding && (O += "; encoding=" + this.encoding), this.data && (typeof this.data == "string" ? O += "; data=" + this.data : L.default.BufferUtils.isBuffer(this.data) ? O += "; data (buffer)=" + L.default.BufferUtils.base64Encode(this.data) : O += "; data (json)=" + JSON.stringify(this.data)), this.extras && (O += "; extras=" + JSON.stringify(this.extras)), O += "]", O;
              }, v.fromResponseBody = function(O, o, d) {
                var R = [];
                d && (O = T.decodeBody(O, d));
                for (var S = 0; S < O.length; S++) {
                  var u = R[S] = v.fromValues(O[S], !0);
                  try {
                    v.decode(u, o);
                  } catch (c) {
                    a.default.logAction(a.default.LOG_ERROR, "PresenceMessage.fromResponseBody()", c.toString());
                  }
                }
                return R;
              }, v.fromValues = function(O, o) {
                return o && (O.action = v.Actions[O.action]), Object.assign(new v(), O);
              }, v.fromValuesArray = function(O) {
                for (var o = O.length, d = new Array(o), R = 0; R < o; R++)
                  d[R] = v.fromValues(O[R]);
                return d;
              }, v.fromEncoded = function(O, o) {
                var d = v.fromValues(O, !0);
                try {
                  v.decode(d, o ?? {});
                } catch (R) {
                  a.default.logAction(a.default.LOG_ERROR, "PresenceMessage.fromEncoded()", R.toString());
                }
                return d;
              }, v.fromEncodedArray = function(O, o) {
                return O.map(function(d) {
                  return v.fromEncoded(d, o);
                });
              }, v.fromData = function(O) {
                return O instanceof v ? O : v.fromValues({
                  data: O
                });
              }, v.Actions = ["absent", "present", "enter", "leave", "update"], v.encode = I.default.encode, v.decode = I.default.decode, v.getMessagesSize = I.default.getMessagesSize, v;
            }()
          );
          g.default = M;
        },
        /* 16 */
        /***/
        function(F, g, f) {
          (function(p) {
            Object.defineProperty(g, "__esModule", { value: !0 });
            var a = f(0), L = a.__importStar(f(1)), I = a.__importDefault(f(7)), T = a.__importStar(f(4)), P = a.__importDefault(f(2)), M = a.__importDefault(f(8)), v = a.__importDefault(f(21)), O = a.__importDefault(f(3));
            function o(i, h) {
              return L.arrIn(L.allToLowerCase(L.keysArray(h)), "x-ably-errorcode");
            }
            function d(i, h) {
              if (o(i, h))
                return i.error && T.default.fromValues(i.error);
            }
            var R = function() {
            }, S = 0, u = {}, c = typeof p < "u" && p.XDomainRequest;
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
              for (var h = L.trim(i.getAllResponseHeaders()).split(`\r
`), w = {}, b = 0; b < h.length; b++) {
                var E = h[b].split(":").map(L.trim);
                w[E[0].toLowerCase()] = E[1];
              }
              return w;
            }
            var s = (
              /** @class */
              function(i) {
                a.__extends(h, i);
                function h(w, b, E, A, y, C, N) {
                  var U = i.call(this) || this;
                  return E = E || {}, E.rnd = L.cheapRandStr(), r() && !E.envelope && (E.envelope = "json"), U.uri = w + L.toQueryString(E), U.headers = b || {}, U.body = A, U.method = N ? N.toUpperCase() : L.isEmptyArg(A) ? "GET" : "POST", U.requestMode = y, U.timeouts = C, U.timedOut = !1, U.requestComplete = !1, U.id = String(++S), u[U.id] = U, U;
                }
                return h.createRequest = function(w, b, E, A, y, C, N) {
                  var U = C || M.default.TIMEOUTS;
                  return new h(w, b, L.copy(E), A, y, U, N);
                }, h.prototype.complete = function(w, b, E, A, y) {
                  this.requestComplete || (this.requestComplete = !0, !w && b && this.emit("data", b), this.emit("complete", w, b, E, A, y), this.dispose());
                }, h.prototype.abort = function() {
                  this.dispose();
                }, h.prototype.exec = function() {
                  var w = this, b = this.headers, E = this.requestMode == v.default.REQ_SEND ? this.timeouts.httpRequestTimeout : this.timeouts.recvTimeout, A = this.timer = setTimeout(function() {
                    w.timedOut = !0, C.abort();
                  }, E), y = this.method, C = this.xhr = new XMLHttpRequest(), N = b.accept, U = this.body, G = "text";
                  if (N ? N.indexOf("application/x-msgpack") === 0 && (G = "arraybuffer") : b.accept = "application/json", U) {
                    var V = b["content-type"] || (b["content-type"] = "application/json");
                    V.indexOf("application/json") > -1 && typeof U != "string" && (U = JSON.stringify(U));
                  }
                  C.open(y, this.uri, !0), C.responseType = G, "authorization" in b && (C.withCredentials = !0);
                  for (var Q in b)
                    C.setRequestHeader(Q, b[Q]);
                  var H = function(Y, et, it, at) {
                    var rt, ft = et + " (event type: " + Y.type + ")";
                    !((rt = w == null ? void 0 : w.xhr) === null || rt === void 0) && rt.statusText && (ft += ", current statusText is " + w.xhr.statusText), P.default.logAction(P.default.LOG_ERROR, "Request.on" + Y.type + "()", ft), w.complete(new T.PartialErrorInfo(ft, it, at));
                  };
                  C.onerror = function(Y) {
                    H(Y, "XHR error occurred", null, 400);
                  }, C.onabort = function(Y) {
                    w.timedOut ? H(Y, "Request aborted due to request timeout expiring", null, 408) : H(Y, "Request cancelled", null, 400);
                  }, C.ontimeout = function(Y) {
                    H(Y, "Request timed out", null, 408);
                  };
                  var m, x, D, B = 0, W = !1, _ = function() {
                    if (clearTimeout(A), D = x < 400, x == 204) {
                      w.complete(null, null, null, null, x);
                      return;
                    }
                    m = w.requestMode == v.default.REQ_RECV_STREAM && D && t(C);
                  }, K = function() {
                    var Y;
                    try {
                      var et = n(C, "content-type"), it = et ? et.indexOf("application/json") >= 0 : C.responseType == "text";
                      if (it) {
                        var at = C.responseType === "arraybuffer" ? O.default.BufferUtils.utf8Decode(C.response) : String(C.responseText);
                        at.length ? Y = JSON.parse(at) : Y = at, W = !0;
                      } else
                        Y = C.response;
                      Y.response !== void 0 ? (x = Y.statusCode, D = x < 400, b = Y.headers, Y = Y.response) : b = e(C);
                    } catch (ft) {
                      w.complete(new T.PartialErrorInfo("Malformed response body from server: " + ft.message, null, 400));
                      return;
                    }
                    if (D || L.isArray(Y)) {
                      w.complete(null, Y, b, W, x);
                      return;
                    }
                    var rt = d(Y, b);
                    rt || (rt = new T.PartialErrorInfo("Error response received from server: " + x + " body was: " + O.default.Config.inspect(Y), null, x)), w.complete(rt, Y, b, W, x);
                  };
                  function q() {
                    for (var Y = C.responseText, et = Y.length - 1, it, at; B < et && (it = Y.indexOf(`
`, B)) > -1; )
                      at = Y.slice(B, it), B = it + 1, Z(at);
                  }
                  var Z = function(Y) {
                    try {
                      Y = JSON.parse(Y);
                    } catch (et) {
                      w.complete(new T.PartialErrorInfo("Malformed response body from server: " + et.message, null, 400));
                      return;
                    }
                    w.emit("data", Y);
                  }, tt = function() {
                    q(), w.streamComplete = !0, O.default.Config.nextTick(function() {
                      w.complete();
                    });
                  };
                  C.onreadystatechange = function() {
                    var Y = C.readyState;
                    Y < 3 || C.status !== 0 && (x === void 0 && (x = C.status, x === 1223 && (x = 204), _()), Y == 3 && m ? q() : Y == 4 && (m ? tt() : K()));
                  }, C.send(U);
                }, h.prototype.dispose = function() {
                  var w = this.xhr;
                  if (w) {
                    w.onreadystatechange = w.onerror = w.onabort = w.ontimeout = R, this.xhr = null;
                    var b = this.timer;
                    b && (clearTimeout(b), this.timer = null), this.requestComplete || w.abort();
                  }
                  delete u[this.id];
                }, h;
              }(I.default)
            );
            g.default = s;
          }).call(this, f(13));
        },
        /* 17 */
        /***/
        function(F, g, f) {
          Object.defineProperty(g, "__esModule", { value: !0 });
          var p = f(0), a = p.__importDefault(f(2)), L = p.__importStar(f(1)), I = p.__importDefault(f(23)), T = p.__importDefault(f(4)), P = p.__importDefault(f(45)), M = f(11), v = p.__importDefault(f(18)), O = p.__importDefault(f(25)), o = p.__importDefault(f(3)), d = p.__importDefault(f(14)), R = Math.pow(2, 17);
          function S() {
          }
          function u() {
            return ("000000" + Math.floor(Math.random() * 1e16)).slice(-16);
          }
          function c(E) {
            return !!E.connection;
          }
          function l(E) {
            return L.isErrorInfoOrPartialErrorInfo(E) ? (E.code || (E.statusCode === 403 ? E.code = 40300 : (E.code = 40170, E.statusCode = 401)), E) : new T.default(L.inspectError(E), E.code || 40170, E.statusCode || 401);
          }
          var r = function(E, A) {
            if (o.default.Config.createHmac) {
              var y = o.default.Config.createHmac("SHA256", A);
              return y.update(E), y.digest("base64");
            }
            return (0, M.stringify)((0, P.default)(E, A));
          };
          function n(E) {
            if (!E)
              return "";
            typeof E == "string" && (E = JSON.parse(E));
            var A = /* @__PURE__ */ Object.create(null), y = L.keysArray(E, !0);
            if (!y)
              return "";
            y.sort();
            for (var C = 0; C < y.length; C++)
              A[y[C]] = E[y[C]].sort();
            return JSON.stringify(A);
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
              var A = "authOptions must include valid authentication parameters";
              throw a.default.logAction(a.default.LOG_ERROR, "Auth()", A), new Error(A);
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
          function w() {
            return h++;
          }
          var b = (
            /** @class */
            function() {
              function E(A, y) {
                if (this.authOptions = {}, this.client = A, this.tokenParams = y.defaultTokenParams || {}, this.currentTokenRequestId = null, this.waitingForTokenRequest = null, s(y)) {
                  if (y.key && !r) {
                    var C = "client-side token request signing not supported";
                    throw a.default.logAction(a.default.LOG_ERROR, "Auth()", C), new Error(C);
                  }
                  i(y) && a.default.logAction(a.default.LOG_ERROR, "Auth()", "Warning: library initialized with a token literal without any way to renew the token when it expires (no authUrl, authCallback, or key). See https://help.ably.io/error/40171 for help"), this._saveTokenOptions(y.defaultTokenParams, y), t(this.authOptions);
                } else {
                  if (!y.key) {
                    var C = "No authentication options provided; need one of: key, authUrl, or authCallback (or for testing only, token or tokenDetails)";
                    throw a.default.logAction(a.default.LOG_ERROR, "Auth()", C), new T.default(C, 40160, 401);
                  }
                  a.default.logAction(a.default.LOG_MINOR, "Auth()", "anonymous, using basic auth"), this._saveBasicOptions(y);
                }
              }
              return E.prototype.authorize = function(A, y, C) {
                var N = this, U;
                if (typeof A == "function" && !C ? (C = A, U = A = null) : typeof y == "function" && !C ? (C = y, U = null) : U = y, !C && this.client.options.promises)
                  return L.promisify(this, "authorize", arguments);
                if (U && U.key && this.authOptions.key !== U.key)
                  throw new T.default("Unable to update auth options with incompatible key", 40102, 401);
                U && "force" in U && (a.default.logAction(a.default.LOG_ERROR, "Auth.authorize", "Deprecation warning: specifying {force: true} in authOptions is no longer necessary, authorize() now always gets a new token. Please remove this, as in version 1.0 and later, having a non-null authOptions will overwrite stored library authOptions, which may not be what you want"), L.isOnlyPropIn(U, "force") && (U = null)), this._forceNewToken(A, U, function(G, V) {
                  if (G) {
                    N.client.connection && G.statusCode === O.default.Forbidden && N.client.connection.connectionManager.actOnErrorFromAuthorize(G), C == null || C(G);
                    return;
                  }
                  c(N.client) ? N.client.connection.connectionManager.onAuthUpdated(V, C || S) : C == null || C(null, V);
                });
              }, E.prototype.authorise = function(A, y, C) {
                a.default.deprecated("Auth.authorise", "Auth.authorize"), this.authorize(A, y, C);
              }, E.prototype._forceNewToken = function(A, y, C) {
                var N = this;
                this.tokenDetails = null, this._saveTokenOptions(A, y), t(this.authOptions), this._ensureValidAuthCredentials(!0, function(U, G) {
                  delete N.tokenParams.timestamp, delete N.authOptions.queryTime, C(U, G);
                });
              }, E.prototype.requestToken = function(A, y, C) {
                var N = this;
                if (typeof A == "function" && !C ? (C = A, y = A = null) : typeof y == "function" && !C && (C = y, y = null), !C && this.client.options.promises)
                  return L.promisify(this, "requestToken", arguments);
                y = y || this.authOptions, A = A || L.copy(this.tokenParams);
                var U = C || S, G, V = this.client;
                if (y.authCallback)
                  a.default.logAction(a.default.LOG_MINOR, "Auth.requestToken()", "using token auth with authCallback"), G = y.authCallback;
                else if (y.authUrl)
                  a.default.logAction(a.default.LOG_MINOR, "Auth.requestToken()", "using token auth with authUrl"), G = function(B, W) {
                    var _ = L.mixin({ accept: "application/json, text/plain" }, y.authHeaders), K = y.authMethod && y.authMethod.toLowerCase() === "post", q, Z = y.authUrl.indexOf("?");
                    Z > -1 && (q = L.parseQueryString(y.authUrl.slice(Z)), y.authUrl = y.authUrl.slice(0, Z), K || (y.authParams = L.mixin(q, y.authParams)));
                    var tt = L.mixin({}, y.authParams || {}, B), Y = function(at, rt, ft, ht) {
                      var ut;
                      if (at ? a.default.logAction(a.default.LOG_MICRO, "Auth.requestToken().tokenRequestCallback", "Received Error: " + L.inspectError(at)) : (ut = ft["content-type"], a.default.logAction(a.default.LOG_MICRO, "Auth.requestToken().tokenRequestCallback", "Received; content-type: " + ut + "; body: " + L.inspectBody(rt))), at || ht)
                        return W(at, rt);
                      if (o.default.BufferUtils.isBuffer(rt) && (rt = rt.toString()), !ut) {
                        W(new T.default("authUrl response is missing a content-type header", 40170, 401));
                        return;
                      }
                      var pt = ut.indexOf("application/json") > -1, gt = ut.indexOf("text/plain") > -1 || ut.indexOf("application/jwt") > -1;
                      if (!pt && !gt) {
                        W(new T.default("authUrl responded with unacceptable content-type " + ut + ", should be either text/plain, application/jwt or application/json", 40170, 401));
                        return;
                      }
                      if (pt) {
                        if (rt.length > R) {
                          W(new T.default("authUrl response exceeded max permitted length", 40170, 401));
                          return;
                        }
                        try {
                          rt = JSON.parse(rt);
                        } catch (vt) {
                          W(new T.default("Unexpected error processing authURL response; err = " + vt.message, 40170, 401));
                          return;
                        }
                      }
                      W(null, rt, ut);
                    };
                    if (a.default.logAction(a.default.LOG_MICRO, "Auth.requestToken().tokenRequestCallback", "Requesting token from " + y.authUrl + "; Params: " + JSON.stringify(tt) + "; method: " + (K ? "POST" : "GET")), K) {
                      var et = _ || {};
                      et["content-type"] = "application/x-www-form-urlencoded";
                      var it = L.toQueryString(tt).slice(1);
                      N.client.http.doUri(v.default.Post, V, y.authUrl, et, it, q, Y);
                    } else
                      N.client.http.doUri(v.default.Get, V, y.authUrl, _ || {}, null, tt, Y);
                  };
                else if (y.key)
                  a.default.logAction(a.default.LOG_MINOR, "Auth.requestToken()", "using token auth with client-side signing"), G = function(B, W) {
                    N.createTokenRequest(B, y, W);
                  };
                else {
                  var Q = "Need a new token, but authOptions does not include any way to request one (no authUrl, authCallback, or key)";
                  a.default.logAction(a.default.LOG_ERROR, "Auth()", "library initialized with a token literal without any way to renew the token when it expires (no authUrl, authCallback, or key). See https://help.ably.io/error/40171 for help"), U(new T.default(Q, 40171, 403));
                  return;
                }
                "capability" in A && (A.capability = n(A.capability));
                var H = function(B, W) {
                  var _ = B.keyName, K = "/keys/" + _ + "/requestToken", q = function(tt) {
                    return V.baseUri(tt) + K;
                  }, Z = L.defaultPostHeaders(N.client.options);
                  y.requestHeaders && L.mixin(Z, y.requestHeaders), a.default.logAction(a.default.LOG_MICRO, "Auth.requestToken().requestToken", "Sending POST to " + K + "; Token params: " + JSON.stringify(B)), N.client.http.do(v.default.Post, V, q, Z, JSON.stringify(B), null, W);
                }, m = !1, x = this.client.options.timeouts.realtimeRequestTimeout, D = setTimeout(function() {
                  m = !0;
                  var B = "Token request callback timed out after " + x / 1e3 + " seconds";
                  a.default.logAction(a.default.LOG_ERROR, "Auth.requestToken()", B), U(new T.default(B, 40170, 401));
                }, x);
                G(A, function(B, W, _) {
                  if (!m) {
                    if (clearTimeout(D), B) {
                      a.default.logAction(a.default.LOG_ERROR, "Auth.requestToken()", "token request signing call returned error; err = " + L.inspectError(B)), U(l(B));
                      return;
                    }
                    if (typeof W == "string") {
                      W.length === 0 ? U(new T.default("Token string is empty", 40170, 401)) : W.length > R ? U(new T.default("Token string exceeded max permitted length (was " + W.length + " bytes)", 40170, 401)) : W === "undefined" || W === "null" ? U(new T.default("Token string was literal null/undefined", 40170, 401)) : W[0] === "{" && !(_ && _.indexOf("application/jwt") > -1) ? U(new T.default("Token was double-encoded; make sure you're not JSON-encoding an already encoded token request or details", 40170, 401)) : U(null, { token: W });
                      return;
                    }
                    if (typeof W != "object") {
                      var K = "Expected token request callback to call back with a token string or token request/details object, but got a " + typeof W;
                      a.default.logAction(a.default.LOG_ERROR, "Auth.requestToken()", K), U(new T.default(K, 40170, 401));
                      return;
                    }
                    var q = JSON.stringify(W).length;
                    if (q > R && !y.suppressMaxLengthCheck) {
                      U(new T.default("Token request/details object exceeded max permitted stringified size (was " + q + " bytes)", 40170, 401));
                      return;
                    }
                    if ("issued" in W) {
                      U(null, W);
                      return;
                    }
                    if (!("keyName" in W)) {
                      var K = "Expected token request callback to call back with a token string, token request object, or token details object";
                      a.default.logAction(a.default.LOG_ERROR, "Auth.requestToken()", K), U(new T.default(K, 40170, 401));
                      return;
                    }
                    H(W, function(Z, tt, Y, et) {
                      if (Z) {
                        a.default.logAction(a.default.LOG_ERROR, "Auth.requestToken()", "token request API call returned error; err = " + L.inspectError(Z)), U(l(Z));
                        return;
                      }
                      et || (tt = JSON.parse(tt)), a.default.logAction(a.default.LOG_MINOR, "Auth.getToken()", "token received"), U(null, tt);
                    });
                  }
                });
              }, E.prototype.createTokenRequest = function(A, y, C) {
                var N = this;
                if (typeof A == "function" && !C ? (C = A, y = A = null) : typeof y == "function" && !C && (C = y, y = null), !C && this.client.options.promises)
                  return L.promisify(this, "createTokenRequest", arguments);
                y = y || this.authOptions, A = A || L.copy(this.tokenParams);
                var U = y.key;
                if (!U) {
                  C(new T.default("No key specified", 40101, 403));
                  return;
                }
                var G = U.split(":"), V = G[0], Q = G[1];
                if (!Q) {
                  C(new T.default("Invalid key specified", 40101, 403));
                  return;
                }
                if (A.clientId === "") {
                  C(new T.default("clientId can’t be an empty string", 40012, 400));
                  return;
                }
                "capability" in A && (A.capability = n(A.capability));
                var H = L.mixin({ keyName: V }, A), m = A.clientId || "", x = A.ttl || "", D = A.capability || "";
                (function(B) {
                  if (H.timestamp) {
                    B();
                    return;
                  }
                  N.getTimestamp(y && y.queryTime, function(W, _) {
                    if (W) {
                      C(W);
                      return;
                    }
                    H.timestamp = _, B();
                  });
                })(function() {
                  var B = H.nonce || (H.nonce = u()), W = H.timestamp, _ = H.keyName + `
` + x + `
` + D + `
` + m + `
` + W + `
` + B + `
`;
                  H.mac = H.mac || r(_, Q), a.default.logAction(a.default.LOG_MINOR, "Auth.getTokenRequest()", "generated signed request"), C(null, H);
                });
              }, E.prototype.getAuthParams = function(A) {
                this.method == "basic" ? A(null, { key: this.key }) : this._ensureValidAuthCredentials(!1, function(y, C) {
                  if (y) {
                    A(y);
                    return;
                  }
                  if (!C)
                    throw new Error("Auth.getAuthParams(): _ensureValidAuthCredentials returned no error or tokenDetails");
                  A(null, { access_token: C.token });
                });
              }, E.prototype.getAuthHeaders = function(A) {
                this.method == "basic" ? A(null, { authorization: "Basic " + this.basicKey }) : this._ensureValidAuthCredentials(!1, function(y, C) {
                  if (y) {
                    A(y);
                    return;
                  }
                  if (!C)
                    throw new Error("Auth.getAuthParams(): _ensureValidAuthCredentials returned no error or tokenDetails");
                  A(null, { authorization: "Bearer " + L.toBase64(C.token) });
                });
              }, E.prototype.getTimestamp = function(A, y) {
                !this.isTimeOffsetSet() && (A || this.authOptions.queryTime) ? this.client.time(y) : y(null, this.getTimestampUsingOffset());
              }, E.prototype.getTimestampUsingOffset = function() {
                return L.now() + (this.client.serverTimeOffset || 0);
              }, E.prototype.isTimeOffsetSet = function() {
                return this.client.serverTimeOffset !== null;
              }, E.prototype._saveBasicOptions = function(A) {
                this.method = "basic", this.key = A.key, this.basicKey = L.toBase64(A.key), this.authOptions = A || {}, "clientId" in A && this._userSetClientId(A.clientId);
              }, E.prototype._saveTokenOptions = function(A, y) {
                this.method = "token", A && (this.tokenParams = A), y && (y.token && (y.tokenDetails = typeof y.token == "string" ? { token: y.token } : y.token), y.tokenDetails && (this.tokenDetails = y.tokenDetails), "clientId" in y && this._userSetClientId(y.clientId), this.authOptions = y);
              }, E.prototype._ensureValidAuthCredentials = function(A, y) {
                var C = this, N = this.tokenDetails;
                if (N) {
                  if (this._tokenClientIdMismatch(N.clientId)) {
                    y(new T.default("Mismatch between clientId in token (" + N.clientId + ") and current clientId (" + this.clientId + ")", 40102, 403));
                    return;
                  }
                  if (!this.isTimeOffsetSet() || !N.expires || N.expires >= this.getTimestampUsingOffset()) {
                    a.default.logAction(a.default.LOG_MINOR, "Auth.getToken()", "using cached token; expires = " + N.expires), y(null, N);
                    return;
                  }
                  a.default.logAction(a.default.LOG_MINOR, "Auth.getToken()", "deleting expired token"), this.tokenDetails = null;
                }
                if ((this.waitingForTokenRequest || (this.waitingForTokenRequest = I.default.create())).push(y), !(this.currentTokenRequestId !== null && !A)) {
                  var U = this.currentTokenRequestId = w();
                  this.requestToken(this.tokenParams, this.authOptions, function(G, V) {
                    if (C.currentTokenRequestId > U) {
                      a.default.logAction(a.default.LOG_MINOR, "Auth._ensureValidAuthCredentials()", "Discarding token request response; overtaken by newer one");
                      return;
                    }
                    C.currentTokenRequestId = null;
                    var Q = C.waitingForTokenRequest || S;
                    if (C.waitingForTokenRequest = null, G) {
                      Q(G);
                      return;
                    }
                    Q(null, C.tokenDetails = V);
                  });
                }
              }, E.prototype._userSetClientId = function(A) {
                if (typeof A == "string" || A === null) {
                  if (A === "*")
                    throw new T.default('Can’t use "*" as a clientId as that string is reserved. (To change the default token request behaviour to use a wildcard clientId, instantiate the library with {defaultTokenParams: {clientId: "*"}}), or if calling authorize(), pass it in as a tokenParam: authorize({clientId: "*"}, authOptions)', 40012, 400);
                  var y = this._uncheckedSetClientId(A);
                  if (y)
                    throw y;
                } else
                  throw new T.default("clientId must be either a string or null", 40012, 400);
              }, E.prototype._uncheckedSetClientId = function(A) {
                if (this._tokenClientIdMismatch(A)) {
                  var y = "Unexpected clientId mismatch: client has " + this.clientId + ", requested " + A, C = new T.default(y, 40102, 401);
                  return a.default.logAction(a.default.LOG_ERROR, "Auth._uncheckedSetClientId()", y), C;
                } else
                  return this.clientId = this.tokenParams.clientId = A, null;
              }, E.prototype._tokenClientIdMismatch = function(A) {
                return !!(this.clientId && this.clientId !== "*" && A && A !== "*" && this.clientId !== A);
              }, E.isTokenErr = function(A) {
                return A.code && A.code >= 40140 && A.code < 40150;
              }, E.prototype.revokeTokens = function(A, y, C) {
                if (s(this.client.options))
                  throw new T.default("Cannot revoke tokens when using token auth", 40162, 401);
                var N = this.client.options.keyName, U;
                if (typeof y == "function" ? (C = y, U = {}) : U = y ?? {}, C === void 0) {
                  if (this.client.options.promises)
                    return L.promisify(this, "revokeTokens", [A, U]);
                  C = S;
                }
                var G = C, V = p.__assign({ targets: A.map(function(x) {
                  return "".concat(x.type, ":").concat(x.value);
                }) }, U), Q = this.client.options.useBinaryProtocol ? L.Format.msgpack : L.Format.json, H = L.defaultPostHeaders(this.client.options, Q);
                this.client.options.headers && L.mixin(H, this.client.options.headers);
                var m = L.encodeBody(V, Q);
                d.default.post(this.client, "/keys/".concat(N, "/revokeTokens"), m, H, { newBatchResponse: "true" }, null, function(x, D, B, W) {
                  if (x) {
                    G(x);
                    return;
                  }
                  var _ = W ? D : L.decodeBody(D, Q);
                  G(null, _);
                });
              }, E;
            }()
          );
          g.default = b;
        },
        /* 18 */
        /***/
        function(F, g, f) {
          Object.defineProperty(g, "__esModule", { value: !0 });
          var p;
          (function(a) {
            a.Get = "get", a.Delete = "delete", a.Post = "post", a.Put = "put", a.Patch = "patch";
          })(p || (p = {})), g.default = p;
        },
        /* 19 */
        /***/
        function(F, g, f) {
          Object.defineProperty(g, "__esModule", { value: !0 }), g.HttpPaginatedResponse = g.PaginatedResult = void 0;
          var p = f(0), a = p.__importStar(f(1)), L = p.__importDefault(f(2)), I = p.__importDefault(f(14));
          function T(d) {
            var R = d.match(/^\.\/(\w+)\?(.*)$/);
            return R && R[2] && a.parseQueryString(R[2]);
          }
          function P(d) {
            typeof d == "string" && (d = d.split(","));
            for (var R = {}, S = 0; S < d.length; S++) {
              var u = d[S].match(/^\s*<(.+)>;\s*rel="(\w+)"$/);
              if (u) {
                var c = T(u[1]);
                c && (R[u[2]] = c);
              }
            }
            return R;
          }
          function M(d, R, S) {
            return !(S && (R || typeof d.code == "number"));
          }
          var v = (
            /** @class */
            function() {
              function d(R, S, u, c, l, r) {
                this.rest = R, this.path = S, this.headers = u, this.envelope = c ?? null, this.bodyHandler = l, this.useHttpPaginatedResponse = r || !1;
              }
              return d.prototype.get = function(R, S) {
                var u = this;
                I.default.get(this.rest, this.path, this.headers, R, this.envelope, function(c, l, r, n, t) {
                  u.handlePage(c, l, r, n, t, S);
                });
              }, d.prototype.delete = function(R, S) {
                var u = this;
                I.default.delete(this.rest, this.path, this.headers, R, this.envelope, function(c, l, r, n, t) {
                  u.handlePage(c, l, r, n, t, S);
                });
              }, d.prototype.post = function(R, S, u) {
                var c = this;
                I.default.post(this.rest, this.path, S, this.headers, R, this.envelope, function(l, r, n, t, e) {
                  u && c.handlePage(l, r, n, t, e, u);
                });
              }, d.prototype.put = function(R, S, u) {
                var c = this;
                I.default.put(this.rest, this.path, S, this.headers, R, this.envelope, function(l, r, n, t, e) {
                  u && c.handlePage(l, r, n, t, e, u);
                });
              }, d.prototype.patch = function(R, S, u) {
                var c = this;
                I.default.patch(this.rest, this.path, S, this.headers, R, this.envelope, function(l, r, n, t, e) {
                  u && c.handlePage(l, r, n, t, e, u);
                });
              }, d.prototype.handlePage = function(R, S, u, c, l, r) {
                if (R && M(R, S, this.useHttpPaginatedResponse)) {
                  L.default.logAction(L.default.LOG_ERROR, "PaginatedResource.handlePage()", "Unexpected error getting resource: err = " + a.inspectError(R)), r == null || r(R);
                  return;
                }
                var n, t, e;
                try {
                  n = this.bodyHandler(S, u || {}, c);
                } catch (s) {
                  r == null || r(R || s);
                  return;
                }
                u && (t = u.Link || u.link) && (e = P(t)), this.useHttpPaginatedResponse ? r(null, new o(this, n, u || {}, l, e, R)) : r(null, new O(this, n, e));
              }, d;
            }()
          ), O = (
            /** @class */
            function() {
              function d(R, S, u) {
                var c = this;
                this.resource = R, this.items = S;
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
              return d.prototype.get = function(R, S) {
                var u = this.resource;
                I.default.get(u.rest, u.path, u.headers, R, u.envelope, function(c, l, r, n, t) {
                  u.handlePage(c, l, r, n, t, S);
                });
              }, d;
            }()
          );
          g.PaginatedResult = O;
          var o = (
            /** @class */
            function(d) {
              p.__extends(R, d);
              function R(S, u, c, l, r, n) {
                var t = d.call(this, S, u, r) || this;
                return t.statusCode = l, t.success = l < 300 && l >= 200, t.headers = c, t.errorCode = n && n.code, t.errorMessage = n && n.message, t;
              }
              return R.prototype.toJSON = function() {
                return {
                  items: this.items,
                  statusCode: this.statusCode,
                  success: this.success,
                  headers: this.headers,
                  errorCode: this.errorCode,
                  errorMessage: this.errorMessage
                };
              }, R;
            }(O)
          );
          g.HttpPaginatedResponse = o, g.default = v;
        },
        /* 20 */
        /***/
        function(F, g, f) {
          Object.defineProperty(g, "__esModule", { value: !0 }), g.isRetriable = void 0;
          var p = f(0), a = p.__importDefault(f(4)), L = {
            DISCONNECTED: 80003,
            SUSPENDED: 80002,
            FAILED: 8e4,
            CLOSING: 80017,
            CLOSED: 80017,
            UNKNOWN_CONNECTION_ERR: 50002,
            UNKNOWN_CHANNEL_ERR: 50001
          }, I = {
            disconnected: function() {
              return a.default.fromValues({
                statusCode: 400,
                code: L.DISCONNECTED,
                message: "Connection to server temporarily unavailable"
              });
            },
            suspended: function() {
              return a.default.fromValues({
                statusCode: 400,
                code: L.SUSPENDED,
                message: "Connection to server unavailable"
              });
            },
            failed: function() {
              return a.default.fromValues({
                statusCode: 400,
                code: L.FAILED,
                message: "Connection failed or disconnected by server"
              });
            },
            closing: function() {
              return a.default.fromValues({
                statusCode: 400,
                code: L.CLOSING,
                message: "Connection closing"
              });
            },
            closed: function() {
              return a.default.fromValues({
                statusCode: 400,
                code: L.CLOSED,
                message: "Connection closed"
              });
            },
            unknownConnectionErr: function() {
              return a.default.fromValues({
                statusCode: 500,
                code: L.UNKNOWN_CONNECTION_ERR,
                message: "Internal connection error"
              });
            },
            unknownChannelErr: function() {
              return a.default.fromValues({
                statusCode: 500,
                code: L.UNKNOWN_CONNECTION_ERR,
                message: "Internal channel error"
              });
            }
          };
          function T(P) {
            return !P.statusCode || !P.code || P.statusCode >= 500 ? !0 : Object.values(L).includes(P.code);
          }
          g.isRetriable = T, g.default = I;
        },
        /* 21 */
        /***/
        function(F, g, f) {
          Object.defineProperty(g, "__esModule", { value: !0 });
          var p;
          (function(a) {
            a[a.REQ_SEND = 0] = "REQ_SEND", a[a.REQ_RECV = 1] = "REQ_RECV", a[a.REQ_RECV_POLL = 2] = "REQ_RECV_POLL", a[a.REQ_RECV_STREAM = 3] = "REQ_RECV_STREAM";
          })(p || (p = {})), g.default = p;
        },
        /* 22 */
        /***/
        function(F, g, f) {
          (function(p, a) {
            F.exports = a(f(6), f(5), f(58), f(11), f(40), f(32), f(24), f(27), f(28), f(59), f(60));
          })(this, function(p) {
            return p;
          });
        },
        /* 23 */
        /***/
        function(F, g, f) {
          Object.defineProperty(g, "__esModule", { value: !0 });
          var p = f(0), a = p.__importDefault(f(2)), L = (
            /** @class */
            function() {
              function I(T) {
                this.members = T || [];
              }
              return I.prototype.call = function() {
                for (var T = [], P = 0; P < arguments.length; P++)
                  T[P] = arguments[P];
                for (var M = 0, v = this.members; M < v.length; M++) {
                  var O = v[M];
                  if (O)
                    try {
                      O.apply(void 0, T);
                    } catch (o) {
                      a.default.logAction(a.default.LOG_ERROR, "Multicaster multiple callback handler", "Unexpected exception: " + o + "; stack = " + o.stack);
                    }
                }
              }, I.prototype.push = function() {
                for (var T, P = [], M = 0; M < arguments.length; M++)
                  P[M] = arguments[M];
                (T = this.members).push.apply(T, P);
              }, I.create = function(T) {
                var P = new I(T);
                return Object.assign(function() {
                  for (var M = [], v = 0; v < arguments.length; v++)
                    M[v] = arguments[v];
                  return P.call.apply(P, M);
                }, {
                  push: function(M) {
                    return P.push(M);
                  }
                });
              }, I;
            }()
          );
          g.default = L;
        },
        /* 24 */
        /***/
        function(F, g, f) {
          (function(p, a) {
            F.exports = a(f(6));
          })(this, function(p) {
            (function() {
              var a = p, L = a.lib, I = L.Base, T = a.enc, P = T.Utf8, M = a.algo;
              M.HMAC = I.extend({
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
                init: function(v, O) {
                  v = this._hasher = new v.init(), typeof O == "string" && (O = P.parse(O));
                  var o = v.blockSize, d = o * 4;
                  O.sigBytes > d && (O = v.finalize(O)), O.clamp();
                  for (var R = this._oKey = O.clone(), S = this._iKey = O.clone(), u = R.words, c = S.words, l = 0; l < o; l++)
                    u[l] ^= 1549556828, c[l] ^= 909522486;
                  R.sigBytes = S.sigBytes = d, this.reset();
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
                  var O = this._hasher, o = O.finalize(v);
                  O.reset();
                  var d = O.finalize(this._oKey.clone().concat(o));
                  return d;
                }
              });
            })();
          });
        },
        /* 25 */
        /***/
        function(F, g, f) {
          Object.defineProperty(g, "__esModule", { value: !0 }), g.isSuccessCode = void 0;
          var p;
          (function(L) {
            L[L.Success = 200] = "Success", L[L.NoContent = 204] = "NoContent", L[L.BadRequest = 400] = "BadRequest", L[L.Unauthorized = 401] = "Unauthorized", L[L.Forbidden = 403] = "Forbidden", L[L.RequestTimeout = 408] = "RequestTimeout", L[L.InternalServerError = 500] = "InternalServerError";
          })(p || (p = {}));
          function a(L) {
            return L >= p.Success && L < p.BadRequest;
          }
          g.isSuccessCode = a, g.default = p;
        },
        /* 26 */
        /***/
        function(F, g, f) {
          Object.defineProperty(g, "__esModule", { value: !0 });
          var p = f(0), a = p.__importDefault(f(10)), L = p.__importStar(f(1)), I = p.__importDefault(f(7)), T = p.__importDefault(f(2)), P = p.__importDefault(f(20)), M = p.__importDefault(f(4)), v = p.__importDefault(f(3)), O = a.default.Action, o = a.default.fromValues({ action: O.CLOSE }), d = a.default.fromValues({ action: O.DISCONNECT }), R = (
            /** @class */
            function(S) {
              p.__extends(u, S);
              function u(c, l, r, n) {
                var t = S.call(this) || this;
                return n && (r.format = void 0, r.heartbeats = !0), t.connectionManager = c, c.registerProposedTransport(t), t.auth = l, t.params = r, t.timeouts = r.options.timeouts, t.format = r.format, t.isConnected = !1, t.isFinished = !1, t.isDisposed = !1, t.maxIdleInterval = null, t.idleTimer = null, t.lastActivity = null, t;
              }
              return u.prototype.connect = function() {
              }, u.prototype.close = function() {
                this.isConnected && this.requestClose(), this.finish("closed", P.default.closed());
              }, u.prototype.disconnect = function(c) {
                this.isConnected && this.requestDisconnect(), this.finish("disconnected", c || P.default.disconnected());
              }, u.prototype.fail = function(c) {
                this.isConnected && this.requestDisconnect(), this.finish("failed", c || P.default.failed());
              }, u.prototype.finish = function(c, l) {
                var r;
                this.isFinished || (this.isFinished = !0, this.isConnected = !1, this.maxIdleInterval = null, clearTimeout((r = this.idleTimer) !== null && r !== void 0 ? r : void 0), this.idleTimer = null, this.emit(c, l), this.dispose());
              }, u.prototype.onProtocolMessage = function(c) {
                switch (T.default.shouldLog(T.default.LOG_MICRO) && T.default.logAction(T.default.LOG_MICRO, "Transport.onProtocolMessage()", "received on " + this.shortName + ": " + a.default.stringify(c) + "; connectionId = " + this.connectionManager.connectionId), this.onActivity(), c.action) {
                  case O.HEARTBEAT:
                    T.default.logAction(T.default.LOG_MICRO, "Transport.onProtocolMessage()", this.shortName + " heartbeat; connectionId = " + this.connectionManager.connectionId), this.emit("heartbeat", c.id);
                    break;
                  case O.CONNECTED:
                    this.onConnect(c), this.emit("connected", c.error, c.connectionId, c.connectionDetails, c);
                    break;
                  case O.CLOSED:
                    this.onClose(c);
                    break;
                  case O.DISCONNECTED:
                    this.onDisconnect(c);
                    break;
                  case O.ACK:
                    this.emit("ack", c.msgSerial, c.count);
                    break;
                  case O.NACK:
                    this.emit("nack", c.msgSerial, c.count, c.error);
                    break;
                  case O.SYNC:
                    this.connectionManager.onChannelMessage(c, this);
                    break;
                  case O.ACTIVATE:
                    break;
                  case O.AUTH:
                    this.auth.authorize(function(l) {
                      l && T.default.logAction(T.default.LOG_ERROR, "Transport.onProtocolMessage()", "Ably requested re-authentication, but unable to obtain a new token: " + L.inspectError(l));
                    });
                    break;
                  case O.ERROR:
                    if (T.default.logAction(T.default.LOG_MINOR, "Transport.onProtocolMessage()", "received error action; connectionId = " + this.connectionManager.connectionId + "; err = " + v.default.Config.inspect(c.error) + (c.channel ? ", channel: " + c.channel : "")), c.channel === void 0) {
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
                T.default.logAction(T.default.LOG_MINOR, "Transport.onDisconnect()", "err = " + L.inspectError(l)), this.finish("disconnected", l);
              }, u.prototype.onFatalError = function(c) {
                var l = c && c.error;
                T.default.logAction(T.default.LOG_MINOR, "Transport.onFatalError()", "err = " + L.inspectError(l)), this.finish("failed", l);
              }, u.prototype.onClose = function(c) {
                var l = c && c.error;
                T.default.logAction(T.default.LOG_MINOR, "Transport.onClose()", "err = " + L.inspectError(l)), this.finish("closed", l);
              }, u.prototype.requestClose = function() {
                T.default.logAction(T.default.LOG_MINOR, "Transport.requestClose()", ""), this.send(o);
              }, u.prototype.requestDisconnect = function() {
                T.default.logAction(T.default.LOG_MINOR, "Transport.requestDisconnect()", ""), this.send(d);
              }, u.prototype.ping = function(c) {
                var l = { action: a.default.Action.HEARTBEAT };
                c && (l.id = c), this.send(a.default.fromValues(l));
              }, u.prototype.dispose = function() {
                T.default.logAction(T.default.LOG_MINOR, "Transport.dispose()", ""), this.isDisposed = !0, this.off();
              }, u.prototype.onActivity = function() {
                this.maxIdleInterval && (this.lastActivity = this.connectionManager.lastActivity = L.now(), this.setIdleTimer(this.maxIdleInterval + 100));
              }, u.prototype.setIdleTimer = function(c) {
                var l = this;
                this.idleTimer || (this.idleTimer = setTimeout(function() {
                  l.onIdleTimerExpire();
                }, c));
              }, u.prototype.onIdleTimerExpire = function() {
                if (!this.lastActivity || !this.maxIdleInterval)
                  throw new Error("Transport.onIdleTimerExpire(): lastActivity/maxIdleInterval not set");
                this.idleTimer = null;
                var c = L.now() - this.lastActivity, l = this.maxIdleInterval - c;
                if (l <= 0) {
                  var r = "No activity seen from realtime in " + c + "ms; assuming connection has dropped";
                  T.default.logAction(T.default.LOG_ERROR, "Transport.onIdleTimerExpire()", r), this.disconnect(new M.default(r, 80003, 408));
                } else
                  this.setIdleTimer(l + 100);
              }, u.tryConnect = function(c, l, r, n, t) {
                var e = new c(l, r, n), s, i = function(w) {
                  clearTimeout(s), t({ event: this.event, error: w });
                }, h = l.options.timeouts.realtimeRequestTimeout;
                s = setTimeout(function() {
                  e.off(["preconnect", "disconnected", "failed"]), e.dispose(), i.call({ event: "disconnected" }, new M.default("Timeout waiting for transport to indicate itself viable", 5e4, 500));
                }, h), e.on(["failed", "disconnected"], i), e.on("preconnect", function() {
                  T.default.logAction(T.default.LOG_MINOR, "Transport.tryConnect()", "viable transport " + e), clearTimeout(s), e.off(["failed", "disconnected"], i), t(null, e);
                }), e.connect();
              }, u;
            }(I.default)
          );
          g.default = R;
        },
        /* 27 */
        /***/
        function(F, g, f) {
          (function(p, a) {
            F.exports = a(f(6), f(40), f(24));
          })(this, function(p) {
            return function() {
              var a = p, L = a.lib, I = L.Base, T = L.WordArray, P = a.algo, M = P.MD5, v = P.EvpKDF = I.extend({
                /**
                 * Configuration options.
                 *
                 * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
                 * @property {Hasher} hasher The hash algorithm to use. Default: MD5
                 * @property {number} iterations The number of iterations to perform. Default: 1
                 */
                cfg: I.extend({
                  keySize: 128 / 32,
                  hasher: M,
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
                init: function(O) {
                  this.cfg = this.cfg.extend(O);
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
                compute: function(O, o) {
                  for (var d, R = this.cfg, S = R.hasher.create(), u = T.create(), c = u.words, l = R.keySize, r = R.iterations; c.length < l; ) {
                    d && S.update(d), d = S.update(O).finalize(o), S.reset();
                    for (var n = 1; n < r; n++)
                      d = S.finalize(d), S.reset();
                    u.concat(d);
                  }
                  return u.sigBytes = l * 4, u;
                }
              });
              a.EvpKDF = function(O, o, d) {
                return v.create(d).compute(O, o);
              };
            }(), p.EvpKDF;
          });
        },
        /* 28 */
        /***/
        function(F, g, f) {
          (function(p, a) {
            F.exports = a(f(6), f(27));
          })(this, function(p) {
            p.lib.Cipher || function(a) {
              var L = p, I = L.lib, T = I.Base, P = I.WordArray, M = I.BufferedBlockAlgorithm, v = L.enc;
              v.Utf8;
              var O = v.Base64, o = L.algo, d = o.EvpKDF, R = I.Cipher = M.extend({
                /**
                 * Configuration options.
                 *
                 * @property {WordArray} iv The IV to use for this operation.
                 */
                cfg: T.extend(),
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
                createEncryptor: function(b, E) {
                  return this.create(this._ENC_XFORM_MODE, b, E);
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
                createDecryptor: function(b, E) {
                  return this.create(this._DEC_XFORM_MODE, b, E);
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
                init: function(b, E, A) {
                  this.cfg = this.cfg.extend(A), this._xformMode = b, this._key = E, this.reset();
                },
                /**
                 * Resets this cipher to its initial state.
                 *
                 * @example
                 *
                 *     cipher.reset();
                 */
                reset: function() {
                  M.reset.call(this), this._doReset();
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
                process: function(b) {
                  return this._append(b), this._process();
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
                finalize: function(b) {
                  b && this._append(b);
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
                  function b(E) {
                    return typeof E == "string" ? w : s;
                  }
                  return function(E) {
                    return {
                      encrypt: function(A, y, C) {
                        return b(y).encrypt(E, A, y, C);
                      },
                      decrypt: function(A, y, C) {
                        return b(y).decrypt(E, A, y, C);
                      }
                    };
                  };
                }()
              });
              I.StreamCipher = R.extend({
                _doFinalize: function() {
                  var b = this._process(!0);
                  return b;
                },
                blockSize: 1
              });
              var S = L.mode = {}, u = I.BlockCipherMode = T.extend({
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
                createEncryptor: function(b, E) {
                  return this.Encryptor.create(b, E);
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
                createDecryptor: function(b, E) {
                  return this.Decryptor.create(b, E);
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
                init: function(b, E) {
                  this._cipher = b, this._iv = E;
                }
              }), c = S.CBC = function() {
                var b = u.extend();
                b.Encryptor = b.extend({
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
                  processBlock: function(A, y) {
                    var C = this._cipher, N = C.blockSize;
                    E.call(this, A, y, N), C.encryptBlock(A, y), this._prevBlock = A.slice(y, y + N);
                  }
                }), b.Decryptor = b.extend({
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
                  processBlock: function(A, y) {
                    var C = this._cipher, N = C.blockSize, U = A.slice(y, y + N);
                    C.decryptBlock(A, y), E.call(this, A, y, N), this._prevBlock = U;
                  }
                });
                function E(A, y, C) {
                  var N, U = this._iv;
                  U ? (N = U, this._iv = a) : N = this._prevBlock;
                  for (var G = 0; G < C; G++)
                    A[y + G] ^= N[G];
                }
                return b;
              }(), l = L.pad = {}, r = l.Pkcs7 = {
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
                pad: function(b, E) {
                  for (var A = E * 4, y = A - b.sigBytes % A, C = y << 24 | y << 16 | y << 8 | y, N = [], U = 0; U < y; U += 4)
                    N.push(C);
                  var G = P.create(N, y);
                  b.concat(G);
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
                unpad: function(b) {
                  var E = b.words[b.sigBytes - 1 >>> 2] & 255;
                  b.sigBytes -= E;
                }
              };
              I.BlockCipher = R.extend({
                /**
                 * Configuration options.
                 *
                 * @property {Mode} mode The block mode to use. Default: CBC
                 * @property {Padding} padding The padding strategy to use. Default: Pkcs7
                 */
                cfg: R.cfg.extend({
                  mode: c,
                  padding: r
                }),
                reset: function() {
                  var b;
                  R.reset.call(this);
                  var E = this.cfg, A = E.iv, y = E.mode;
                  this._xformMode == this._ENC_XFORM_MODE ? b = y.createEncryptor : (b = y.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == b ? this._mode.init(this, A && A.words) : (this._mode = b.call(y, this, A && A.words), this._mode.__creator = b);
                },
                _doProcessBlock: function(b, E) {
                  this._mode.processBlock(b, E);
                },
                _doFinalize: function() {
                  var b, E = this.cfg.padding;
                  return this._xformMode == this._ENC_XFORM_MODE ? (E.pad(this._data, this.blockSize), b = this._process(!0)) : (b = this._process(!0), E.unpad(b)), b;
                },
                blockSize: 128 / 32
              });
              var n = I.CipherParams = T.extend({
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
                init: function(b) {
                  this.mixIn(b);
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
                toString: function(b) {
                  return (b || this.formatter).stringify(this);
                }
              }), t = L.format = {}, e = t.OpenSSL = {
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
                stringify: function(b) {
                  var E, A = b.ciphertext, y = b.salt;
                  return y ? E = P.create([1398893684, 1701076831]).concat(y).concat(A) : E = A, E.toString(O);
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
                parse: function(b) {
                  var E, A = O.parse(b), y = A.words;
                  return y[0] == 1398893684 && y[1] == 1701076831 && (E = P.create(y.slice(2, 4)), y.splice(0, 4), A.sigBytes -= 16), n.create({ ciphertext: A, salt: E });
                }
              }, s = I.SerializableCipher = T.extend({
                /**
                 * Configuration options.
                 *
                 * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
                 */
                cfg: T.extend({
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
                encrypt: function(b, E, A, y) {
                  y = this.cfg.extend(y);
                  var C = b.createEncryptor(A, y), N = C.finalize(E), U = C.cfg;
                  return n.create({
                    ciphertext: N,
                    key: A,
                    iv: U.iv,
                    algorithm: b,
                    mode: U.mode,
                    padding: U.padding,
                    blockSize: b.blockSize,
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
                decrypt: function(b, E, A, y) {
                  y = this.cfg.extend(y), E = this._parse(E, y.format);
                  var C = b.createDecryptor(A, y).finalize(E.ciphertext);
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
                _parse: function(b, E) {
                  return typeof b == "string" ? E.parse(b, this) : b;
                }
              }), i = L.kdf = {}, h = i.OpenSSL = {
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
                execute: function(b, E, A, y) {
                  y || (y = P.random(64 / 8));
                  var C = d.create({ keySize: E + A }).compute(b, y), N = P.create(C.words.slice(E), A * 4);
                  return C.sigBytes = E * 4, n.create({ key: C, iv: N, salt: y });
                }
              }, w = I.PasswordBasedCipher = s.extend({
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
                encrypt: function(b, E, A, y) {
                  y = this.cfg.extend(y);
                  var C = y.kdf.execute(A, b.keySize, b.ivSize);
                  y.iv = C.iv;
                  var N = s.encrypt.call(this, b, E, C.key, y);
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
                decrypt: function(b, E, A, y) {
                  y = this.cfg.extend(y), E = this._parse(E, y.format);
                  var C = y.kdf.execute(A, b.keySize, b.ivSize, E.salt);
                  y.iv = C.iv;
                  var N = s.decrypt.call(this, b, E, C.key, y);
                  return N;
                }
              });
            }();
          });
        },
        /* 29 */
        /***/
        function(F, g, f) {
          Object.defineProperty(g, "__esModule", { value: !0 }), g.Request = g.createRequest = void 0;
          var p = f(0), a = p.__importStar(f(1)), L = p.__importDefault(f(12)), I = p.__importDefault(f(3)), T = p.__importDefault(f(7)), P = f(4), M = p.__importDefault(f(8)), v = p.__importDefault(f(2)), O = p.__importDefault(f(21)), o = a.getGlobalObject(), d = function() {
          }, R = o._ablyjs_jsonp = {};
          R._ = function(t) {
            return R["_" + t] || d;
          };
          var S = 1, u = "jsonp";
          function c(t, e, s, i, h, w, b) {
            return w = w || M.default.TIMEOUTS, new r(void 0, t, e, a.copy(s), i, h, w, b);
          }
          g.createRequest = c;
          var l = (
            /** @class */
            function(t) {
              p.__extends(e, t);
              function e(s, i, h) {
                var w = t.call(this, s, i, h) || this;
                return w.shortName = u, h.stream = !1, w;
              }
              return e.isAvailable = function() {
                return I.default.Config.jsonpSupported && I.default.Config.allowComet;
              }, e.prototype.toString = function() {
                return "JSONPTransport; uri=" + this.baseUri + "; isConnected=" + this.isConnected;
              }, e.prototype.createRequest = function(s, i, h, w, b, E, A) {
                return E = (this === null || this === void 0 ? void 0 : this.timeouts) || E || M.default.TIMEOUTS, c(s, i, h, w, b, E, A);
              }, e;
            }(L.default)
          ), r = (
            /** @class */
            function(t) {
              p.__extends(e, t);
              function e(s, i, h, w, b, E, A, y) {
                var C = t.call(this) || this;
                return s === void 0 && (s = S++), C.id = s, C.uri = i, C.params = w || {}, C.params.rnd = a.cheapRandStr(), h && (h["X-Ably-Version"] && (C.params.v = h["X-Ably-Version"]), h["X-Ably-Lib"] && (C.params.lib = h["X-Ably-Lib"])), C.body = b, C.method = y, C.requestMode = E, C.timeouts = A, C.requestComplete = !1, C;
              }
              return e.prototype.exec = function() {
                var s = this, i = this.id, h = this.body, w = this.method, b = this.uri, E = this.params;
                E.callback = "_ablyjs_jsonp._(" + i + ")", E.envelope = "jsonp", h && (E.body = h), w && w !== "get" && (E.method = w);
                var A = this.script = document.createElement("script"), y = b + a.toQueryString(E);
                A.src = y, A.src.split("/").slice(-1)[0] !== y.split("/").slice(-1)[0] && v.default.logAction(v.default.LOG_ERROR, "JSONP Request.exec()", "Warning: the browser appears to have truncated the script URI. This will likely result in the request failing due to an unparseable body param"), A.async = !0, A.type = "text/javascript", A.charset = "UTF-8", A.onerror = function(U) {
                  s.complete(new P.PartialErrorInfo("JSONP script error (event: " + I.default.Config.inspect(U) + ")", null, 400));
                }, R["_" + i] = function(U) {
                  if (U.statusCode) {
                    var G = U.response;
                    if (U.statusCode == 204)
                      s.complete(null, null, null, U.statusCode);
                    else if (!G)
                      s.complete(new P.PartialErrorInfo("Invalid server response: no envelope detected", null, 500));
                    else if (U.statusCode < 400 || a.isArray(G))
                      s.complete(null, G, U.headers, U.statusCode);
                    else {
                      var V = G.error || new P.PartialErrorInfo("Error response received from server", null, U.statusCode);
                      s.complete(V);
                    }
                  } else
                    s.complete(null, U);
                };
                var C = this.requestMode == O.default.REQ_SEND ? this.timeouts.httpRequestTimeout : this.timeouts.recvTimeout;
                this.timer = setTimeout(this.abort.bind(this), C);
                var N = document.getElementsByTagName("head")[0];
                N.insertBefore(A, N.firstChild);
              }, e.prototype.complete = function(s, i, h, w) {
                if (h = h || {}, !this.requestComplete) {
                  this.requestComplete = !0;
                  var b = void 0;
                  i && (b = typeof i == "string" ? "text/plain" : "application/json", h["content-type"] = b, this.emit("data", i)), this.emit(
                    "complete",
                    s,
                    i,
                    h,
                    /* unpacked: */
                    !0,
                    w
                  ), this.dispose();
                }
              }, e.prototype.abort = function() {
                this.dispose();
              }, e.prototype.dispose = function() {
                var s = this.timer;
                s && (clearTimeout(s), this.timer = null);
                var i = this.script;
                i.parentNode && i.parentNode.removeChild(i), delete R[this.id], this.emit("disposed");
              }, e;
            }(T.default)
          );
          g.Request = r;
          function n(t) {
            return o.JSONPTransport = l, l.isAvailable() && (t.supportedTransports[u] = l), l;
          }
          g.default = n;
        },
        /* 30 */
        /***/
        function(F, g, f) {
          Object.defineProperty(g, "__esModule", { value: !0 });
          var p = f(0), a = p.__importStar(f(1)), L = p.__importDefault(f(2)), I = p.__importDefault(f(8)), T = p.__importDefault(f(17)), P = p.__importDefault(f(46)), M = p.__importDefault(f(19)), v = p.__importDefault(f(33)), O = p.__importDefault(f(4)), o = p.__importDefault(f(49)), d = p.__importDefault(f(18)), R = p.__importDefault(f(3)), S = p.__importDefault(f(9)), u = p.__importDefault(f(15)), c = p.__importDefault(f(14)), l = function() {
          }, r = (
            /** @class */
            function() {
              function t(e) {
                if (!e) {
                  var s = "no options provided";
                  throw L.default.logAction(L.default.LOG_ERROR, "Rest()", s), new Error(s);
                }
                var i = I.default.objectifyOptions(e);
                i.log && L.default.setLog(i.log.level, i.log.handler), L.default.logAction(L.default.LOG_MICRO, "Rest()", "initialized with clientOptions " + R.default.Config.inspect(e));
                var h = this.options = I.default.normaliseOptions(i);
                if (h.key) {
                  var w = h.key.match(/^([^:\s]+):([^:.\s]+)$/);
                  if (!w) {
                    var s = "invalid key parameter";
                    throw L.default.logAction(L.default.LOG_ERROR, "Rest()", s), new O.default(s, 40400, 404);
                  }
                  h.keyName = w[1], h.keySecret = w[2];
                }
                if ("clientId" in h)
                  if (typeof h.clientId == "string" || h.clientId === null) {
                    if (h.clientId === "*")
                      throw new O.default('Can’t use "*" as a clientId as that string is reserved. (To change the default token request behaviour to use a wildcard clientId, use {defaultTokenParams: {clientId: "*"}})', 40012, 400);
                  } else
                    throw new O.default("clientId must be either a string or null", 40012, 400);
                L.default.logAction(L.default.LOG_MINOR, "Rest()", "started; version = " + I.default.version), this.baseUri = this.authority = function(b) {
                  return I.default.getHttpScheme(h) + b + ":" + I.default.getPort(h, !1);
                }, this._currentFallback = null, this.serverTimeOffset = null, this.http = new R.default.Http(h), this.auth = new T.default(this, h), this.channels = new n(this), this.push = new P.default(this);
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
                var i = a.defaultGetHeaders(this.options), h = this.options.useBinaryProtocol ? a.Format.msgpack : a.Format.json, w = this.http.supportsLinkHeaders ? void 0 : h;
                this.options.headers && a.mixin(i, this.options.headers), new M.default(this, "/stats", i, w, function(b, E, A) {
                  for (var y = A ? b : JSON.parse(b), C = 0; C < y.length; C++)
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
                var h = s || l, w = a.defaultGetHeaders(this.options);
                this.options.headers && a.mixin(w, this.options.headers);
                var b = function(E) {
                  return i.authority(E) + "/time";
                };
                this.http.do(d.default.Get, this, b, w, null, e, function(E, A, y, C) {
                  if (E) {
                    h(E);
                    return;
                  }
                  C || (A = JSON.parse(A));
                  var N = A[0];
                  if (!N) {
                    h(new O.default("Internal error (unexpected result type from GET /time)", 5e4, 500));
                    return;
                  }
                  i.serverTimeOffset = N - a.now(), h(null, N);
                });
              }, t.prototype.request = function(e, s, i, h, w, b) {
                var E = this.options.useBinaryProtocol, A = E ? R.default.Config.msgpack.encode : JSON.stringify, y = E ? R.default.Config.msgpack.decode : JSON.parse, C = E ? a.Format.msgpack : a.Format.json, N = this.http.supportsLinkHeaders ? void 0 : C;
                i = i || {};
                var U = e.toLowerCase(), G = U == "get" ? a.defaultGetHeaders(this.options, C) : a.defaultPostHeaders(this.options, C);
                if (b === void 0) {
                  if (this.options.promises)
                    return a.promisify(this, "request", [e, s, i, h, w]);
                  b = l;
                }
                typeof h != "string" && (h = A(h)), this.options.headers && a.mixin(G, this.options.headers), w && a.mixin(G, w);
                var V = new M.default(
                  this,
                  s,
                  G,
                  N,
                  function(Q, H, m) {
                    return a.ensureArray(m ? Q : y(Q));
                  },
                  /* useHttpPaginatedResponse: */
                  !0
                );
                if (!a.arrIn(R.default.Http.methods, U))
                  throw new O.default("Unsupported method " + U, 40500, 405);
                a.arrIn(R.default.Http.methodsWithBody, U) ? V[U](i, h, b) : V[U](i, b);
              }, t.prototype.batchPublish = function(e, s) {
                if (s === void 0) {
                  if (this.options.promises)
                    return a.promisify(this, "batchPublish", [e]);
                  s = l;
                }
                var i = s, h, w;
                a.isArray(e) ? (h = e, w = !1) : (h = [e], w = !0);
                var b = this.options.useBinaryProtocol ? a.Format.msgpack : a.Format.json, E = a.defaultPostHeaders(this.options, b);
                this.options.headers && a.mixin(E, this.options.headers);
                var A = a.encodeBody(h, b);
                c.default.post(this, "/messages", A, E, { newBatchResponse: "true" }, null, function(y, C, N, U) {
                  if (y) {
                    i(y);
                    return;
                  }
                  var G = U ? C : a.decodeBody(C, b);
                  w ? i(null, G[0]) : i(null, G);
                });
              }, t.prototype.batchPresence = function(e, s) {
                if (s === void 0) {
                  if (this.options.promises)
                    return a.promisify(this, "batchPresence", [e]);
                  s = l;
                }
                var i = s, h = this.options.useBinaryProtocol ? a.Format.msgpack : a.Format.json, w = a.defaultPostHeaders(this.options, h);
                this.options.headers && a.mixin(w, this.options.headers);
                var b = e.join(",");
                c.default.get(this, "/presence", w, { newBatchResponse: "true", channels: b }, null, function(E, A, y, C) {
                  if (E) {
                    i(E);
                    return;
                  }
                  var N = C ? A : a.decodeBody(A, h);
                  i(null, N);
                });
              }, t.prototype.setLog = function(e) {
                L.default.setLog(e.level, e.handler);
              }, t.Promise = function(e) {
                return e = I.default.objectifyOptions(e), e.promises = !0, new t(e);
              }, t.Callbacks = t, t.Platform = R.default, t.Message = S.default, t.PresenceMessage = u.default, t;
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
          g.default = r;
        },
        /* 31 */
        /***/
        function(F, g, f) {
          (function(p, a) {
            F.exports = a(f(6));
          })(this, function(p) {
            return p.enc.Utf8;
          });
        },
        /* 32 */
        /***/
        function(F, g, f) {
          (function(p, a) {
            F.exports = a(f(6));
          })(this, function(p) {
            return function(a) {
              var L = p, I = L.lib, T = I.WordArray, P = I.Hasher, M = L.algo, v = [], O = [];
              (function() {
                function R(l) {
                  for (var r = a.sqrt(l), n = 2; n <= r; n++)
                    if (!(l % n))
                      return !1;
                  return !0;
                }
                function S(l) {
                  return (l - (l | 0)) * 4294967296 | 0;
                }
                for (var u = 2, c = 0; c < 64; )
                  R(u) && (c < 8 && (v[c] = S(a.pow(u, 1 / 2))), O[c] = S(a.pow(u, 1 / 3)), c++), u++;
              })();
              var o = [], d = M.SHA256 = P.extend({
                _doReset: function() {
                  this._hash = new T.init(v.slice(0));
                },
                _doProcessBlock: function(R, S) {
                  for (var u = this._hash.words, c = u[0], l = u[1], r = u[2], n = u[3], t = u[4], e = u[5], s = u[6], i = u[7], h = 0; h < 64; h++) {
                    if (h < 16)
                      o[h] = R[S + h] | 0;
                    else {
                      var w = o[h - 15], b = (w << 25 | w >>> 7) ^ (w << 14 | w >>> 18) ^ w >>> 3, E = o[h - 2], A = (E << 15 | E >>> 17) ^ (E << 13 | E >>> 19) ^ E >>> 10;
                      o[h] = b + o[h - 7] + A + o[h - 16];
                    }
                    var y = t & e ^ ~t & s, C = c & l ^ c & r ^ l & r, N = (c << 30 | c >>> 2) ^ (c << 19 | c >>> 13) ^ (c << 10 | c >>> 22), U = (t << 26 | t >>> 6) ^ (t << 21 | t >>> 11) ^ (t << 7 | t >>> 25), G = i + U + y + O[h] + o[h], V = N + C;
                    i = s, s = e, e = t, t = n + G | 0, n = r, r = l, l = c, c = G + V | 0;
                  }
                  u[0] = u[0] + c | 0, u[1] = u[1] + l | 0, u[2] = u[2] + r | 0, u[3] = u[3] + n | 0, u[4] = u[4] + t | 0, u[5] = u[5] + e | 0, u[6] = u[6] + s | 0, u[7] = u[7] + i | 0;
                },
                _doFinalize: function() {
                  var R = this._data, S = R.words, u = this._nDataBytes * 8, c = R.sigBytes * 8;
                  return S[c >>> 5] |= 128 << 24 - c % 32, S[(c + 64 >>> 9 << 4) + 14] = a.floor(u / 4294967296), S[(c + 64 >>> 9 << 4) + 15] = u, R.sigBytes = S.length * 4, this._process(), this._hash;
                },
                clone: function() {
                  var R = P.clone.call(this);
                  return R._hash = this._hash.clone(), R;
                }
              });
              L.SHA256 = P._createHelper(d), L.HmacSHA256 = P._createHmacHelper(d);
            }(Math), p.SHA256;
          });
        },
        /* 33 */
        /***/
        function(F, g, f) {
          Object.defineProperty(g, "__esModule", { value: !0 });
          var p = f(0), a = p.__importStar(f(1)), L = p.__importDefault(f(7)), I = p.__importDefault(f(2)), T = p.__importDefault(f(34)), P = p.__importDefault(f(9)), M = p.__importDefault(f(4)), v = p.__importDefault(f(19)), O = p.__importDefault(f(14)), o = p.__importDefault(f(3));
          function d() {
          }
          var R = 9;
          function S(l) {
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
              p.__extends(r, l);
              function r(n, t, e) {
                var s = l.call(this) || this;
                return I.default.logAction(I.default.LOG_MINOR, "Channel()", "started; name = " + t), s.rest = n, s.name = t, s.basePath = "/channels/" + encodeURIComponent(t), s.presence = new T.default(s), s.channelOptions = u(e), s;
              }
              return r.prototype.setOptions = function(n) {
                this.channelOptions = u(n);
              }, r.prototype.history = function(n, t) {
                if (I.default.logAction(I.default.LOG_MICRO, "Channel.history()", "channel = " + this.name), t === void 0)
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
                var w = this.channelOptions;
                new v.default(e, this.basePath + "/messages", h, i, function(b, E, A) {
                  return P.default.fromResponseBody(b, w, A ? void 0 : s);
                }).get(n, t);
              }, r.prototype.publish = function() {
                var n = this, t = arguments.length, e = arguments[0], s = arguments[1], i = arguments[t - 1], h, w;
                if (typeof i != "function") {
                  if (this.rest.options.promises)
                    return a.promisify(this, "publish", arguments);
                  i = d;
                }
                if (typeof e == "string" || e === null)
                  h = [P.default.fromValues({ name: e, data: s })], w = arguments[2];
                else if (a.isObject(e))
                  h = [P.default.fromValues(e)], w = arguments[1];
                else if (a.isArray(e))
                  h = P.default.fromValuesArray(e), w = arguments[1];
                else
                  throw new M.default("The single-argument form of publish() expects a message object or an array of message objects", 40013, 400);
                (typeof w != "object" || !w) && (w = {});
                var b = this.rest, E = b.options, A = E.useBinaryProtocol ? a.Format.msgpack : a.Format.json, y = b.options.idempotentRestPublishing, C = a.defaultPostHeaders(b.options, A);
                if (E.headers && a.mixin(C, E.headers), y && S(h)) {
                  var N = a.randomString(R);
                  a.arrForEach(h, function(U, G) {
                    U.id = N + ":" + G.toString();
                  });
                }
                P.default.encodeArray(h, this.channelOptions, function(U) {
                  if (U) {
                    i(U);
                    return;
                  }
                  var G = P.default.getMessagesSize(h), V = E.maxMessageSize;
                  if (G > V) {
                    i(new M.default("Maximum size of messages that can be published at once exceeded ( was " + G + " bytes; limit is " + V + " bytes)", 40009, 400));
                    return;
                  }
                  n._publish(P.default.serialize(h, A), C, w, i);
                });
              }, r.prototype._publish = function(n, t, e, s) {
                O.default.post(this.rest, this.basePath + "/messages", n, t, e, null, s);
              }, r.prototype.status = function(n) {
                if (typeof n != "function" && this.rest.options.promises)
                  return a.promisify(this, "status", []);
                var t = this.rest.options.useBinaryProtocol ? a.Format.msgpack : a.Format.json, e = a.defaultPostHeaders(this.rest.options, t);
                O.default.get(this.rest, this.basePath, e, {}, t, n || d);
              }, r;
            }(L.default)
          );
          g.default = c;
        },
        /* 34 */
        /***/
        function(F, g, f) {
          Object.defineProperty(g, "__esModule", { value: !0 });
          var p = f(0), a = p.__importStar(f(1)), L = p.__importDefault(f(7)), I = p.__importDefault(f(2)), T = p.__importDefault(f(19)), P = p.__importDefault(f(15));
          function M() {
          }
          var v = (
            /** @class */
            function(O) {
              p.__extends(o, O);
              function o(d) {
                var R = O.call(this) || this;
                return R.channel = d, R.basePath = d.basePath + "/presence", R;
              }
              return o.prototype.get = function(d, R) {
                if (I.default.logAction(I.default.LOG_MICRO, "Presence.get()", "channel = " + this.channel.name), R === void 0)
                  if (typeof d == "function")
                    R = d, d = null;
                  else {
                    if (this.channel.rest.options.promises)
                      return a.promisify(this, "get", arguments);
                    R = M;
                  }
                var S = this.channel.rest, u = S.options.useBinaryProtocol ? a.Format.msgpack : a.Format.json, c = this.channel.rest.http.supportsLinkHeaders ? void 0 : u, l = a.defaultGetHeaders(S.options, u);
                S.options.headers && a.mixin(l, S.options.headers);
                var r = this.channel.channelOptions;
                new T.default(S, this.basePath, l, c, function(n, t, e) {
                  return P.default.fromResponseBody(n, r, e ? void 0 : u);
                }).get(d, R);
              }, o.prototype.history = function(d, R) {
                return I.default.logAction(I.default.LOG_MICRO, "Presence.history()", "channel = " + this.channel.name), this._history(d, R);
              }, o.prototype._history = function(d, R) {
                if (R === void 0)
                  if (typeof d == "function")
                    R = d, d = null;
                  else {
                    if (this.channel.rest.options.promises)
                      return a.promisify(this, "_history", [d]);
                    R = M;
                  }
                var S = this.channel.rest, u = S.options.useBinaryProtocol ? a.Format.msgpack : a.Format.json, c = this.channel.rest.http.supportsLinkHeaders ? void 0 : u, l = a.defaultGetHeaders(S.options, u);
                S.options.headers && a.mixin(l, S.options.headers);
                var r = this.channel.channelOptions;
                new T.default(S, this.basePath + "/history", l, c, function(n, t, e) {
                  return P.default.fromResponseBody(n, r, e ? void 0 : u);
                }).get(d, R);
              }, o;
            }(L.default)
          );
          g.default = v;
        },
        /* 35 */
        /***/
        function(F, g, f) {
          (function(p) {
            Object.defineProperty(g, "__esModule", { value: !0 }), g.TransportParams = void 0;
            var a = f(0), L = a.__importDefault(f(10)), I = a.__importStar(f(1)), T = a.__importStar(f(52)), P = a.__importStar(f(8)), M = a.__importDefault(f(3)), v = a.__importDefault(f(7)), O = a.__importDefault(f(36)), o = a.__importDefault(f(2)), d = a.__importDefault(f(37)), R = a.__importStar(f(20)), S = a.__importStar(f(4)), u = a.__importDefault(f(17)), c = a.__importDefault(f(9)), l = a.__importDefault(f(23)), r = a.__importDefault(f(53)), n = a.__importDefault(f(26)), t = a.__importDefault(f(25)), e = function() {
              var Q;
              return typeof M.default.WebStorage < "u" && ((Q = M.default.WebStorage) === null || Q === void 0 ? void 0 : Q.localSupported);
            }, s = function() {
              var Q;
              return typeof M.default.WebStorage < "u" && ((Q = M.default.WebStorage) === null || Q === void 0 ? void 0 : Q.sessionSupported);
            }, i = L.default.Action, h = function() {
            }, w = "ably-transport-preference", b = "ably-connection-recovery";
            function E() {
              var Q, H;
              return s() && ((H = (Q = M.default.WebStorage) === null || Q === void 0 ? void 0 : Q.getSession) === null || H === void 0 ? void 0 : H.call(Q, b));
            }
            function A(Q) {
              var H, m;
              return s() && ((m = (H = M.default.WebStorage) === null || H === void 0 ? void 0 : H.setSession) === null || m === void 0 ? void 0 : m.call(H, b, Q));
            }
            function y() {
              var Q, H;
              return s() && ((H = (Q = M.default.WebStorage) === null || Q === void 0 ? void 0 : Q.removeSession) === null || H === void 0 ? void 0 : H.call(Q, b));
            }
            function C(Q, H) {
              return I.arrIndexOf(M.default.Defaults.transportPreferenceOrder, Q.shortName) > I.arrIndexOf(M.default.Defaults.transportPreferenceOrder, H.shortName);
            }
            function N(Q, H, m) {
              var x;
              if (Q.channel !== H.channel || (x = Q.action) !== i.PRESENCE && x !== i.MESSAGE || x !== H.action)
                return !1;
              var D = x === i.PRESENCE ? "presence" : "messages", B = Q[D].concat(H[D]), W = c.default.getMessagesSize(B);
              return W > m || !I.allSame(B, "clientId") || !I.arrEvery(B, function(_) {
                return !_.id;
              }) ? !1 : (Q[D] = B, !0);
            }
            function U(Q) {
              try {
                return JSON.parse(Q);
              } catch {
                return null;
              }
            }
            var G = (
              /** @class */
              function() {
                function Q(H, m, x, D) {
                  this.options = H, this.host = m, this.mode = x, this.connectionKey = D, this.format = H.useBinaryProtocol ? I.Format.msgpack : I.Format.json;
                }
                return Q.prototype.getConnectParams = function(H) {
                  var m = H ? I.copy(H) : {}, x = this.options;
                  switch (this.mode) {
                    case "upgrade":
                      m.upgrade = this.connectionKey;
                      break;
                    case "resume":
                      m.resume = this.connectionKey;
                      break;
                    case "recover": {
                      var D = U(x.recover);
                      D && (m.recover = D.connectionKey);
                      break;
                    }
                  }
                  return x.clientId !== void 0 && (m.clientId = x.clientId), x.echoMessages === !1 && (m.echo = "false"), this.format !== void 0 && (m.format = this.format), this.stream !== void 0 && (m.stream = this.stream), this.heartbeats !== void 0 && (m.heartbeats = this.heartbeats), m.v = P.default.protocolVersion, m.agent = (0, P.getAgentString)(this.options), x.transportParams !== void 0 && I.mixin(m, x.transportParams), m;
                }, Q.prototype.toString = function() {
                  var H = "[mode=" + this.mode;
                  return this.host && (H += ",host=" + this.host), this.connectionKey && (H += ",connectionKey=" + this.connectionKey), this.format && (H += ",format=" + this.format), H += "]", H;
                }, Q;
              }()
            );
            g.TransportParams = G;
            var V = (
              /** @class */
              function(Q) {
                a.__extends(H, Q);
                function H(m, x) {
                  var D = Q.call(this) || this;
                  D.disconnectedRetryCount = 0, H.initTransports(), D.realtime = m, D.options = x;
                  var B = x.timeouts, W = B.preferenceConnectTimeout + B.realtimeRequestTimeout;
                  if (D.states = {
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
                      retryDelay: B.disconnectedRetryTimeout,
                      failState: "disconnected"
                    },
                    suspended: {
                      state: "suspended",
                      terminal: !1,
                      queueEvents: !1,
                      sendEvents: !1,
                      retryDelay: B.suspendedRetryTimeout,
                      failState: "suspended"
                    },
                    closing: {
                      state: "closing",
                      terminal: !1,
                      queueEvents: !1,
                      sendEvents: !1,
                      retryDelay: B.realtimeRequestTimeout,
                      failState: "closed"
                    },
                    closed: { state: "closed", terminal: !0, queueEvents: !1, sendEvents: !1, failState: "closed" },
                    failed: { state: "failed", terminal: !0, queueEvents: !1, sendEvents: !1, failState: "failed" }
                  }, D.state = D.states.initialized, D.errorReason = null, D.queuedMessages = new O.default(), D.msgSerial = 0, D.connectionDetails = void 0, D.connectionId = void 0, D.connectionKey = void 0, D.connectionStateTtl = B.connectionStateTtl, D.maxIdleInterval = null, D.transports = I.intersect(x.transports || P.default.defaultTransports, H.supportedTransports), D.baseTransport = I.intersect(P.default.baseTransportOrder, D.transports)[0], D.upgradeTransports = I.intersect(D.transports, P.default.upgradeTransports), D.transportPreference = null, D.httpHosts = P.default.getHosts(x), D.activeProtocol = null, D.proposedTransports = [], D.pendingTransports = [], D.host = null, D.lastAutoReconnectAttempt = null, D.lastActivity = null, D.forceFallbackHost = !1, D.connectCounter = 0, o.default.logAction(o.default.LOG_MINOR, "Realtime.ConnectionManager()", "started"), o.default.logAction(o.default.LOG_MICRO, "Realtime.ConnectionManager()", "requested transports = [" + (x.transports || P.default.defaultTransports) + "]"), o.default.logAction(o.default.LOG_MICRO, "Realtime.ConnectionManager()", "available transports = [" + D.transports + "]"), o.default.logAction(o.default.LOG_MICRO, "Realtime.ConnectionManager()", "http hosts = [" + D.httpHosts + "]"), !D.transports.length) {
                    var _ = "no requested transports available";
                    throw o.default.logAction(o.default.LOG_ERROR, "realtime.ConnectionManager()", _), new Error(_);
                  }
                  var K = M.default.Config.addEventListener;
                  return K && (s() && typeof x.recover == "function" && K("beforeunload", D.persistConnection.bind(D)), x.closeOnUnload === !0 && K("beforeunload", function() {
                    o.default.logAction(o.default.LOG_MAJOR, "Realtime.ConnectionManager()", "beforeunload event has triggered the connection to close as closeOnUnload is true"), D.requestState({ state: "closing" });
                  }), K("online", function() {
                    D.state == D.states.disconnected || D.state == D.states.suspended ? (o.default.logAction(o.default.LOG_MINOR, "ConnectionManager caught browser ‘online’ event", "reattempting connection"), D.requestState({ state: "connecting" })) : D.state == D.states.connecting && (D.pendingTransports.forEach(function(q) {
                      q.off();
                    }), D.disconnectAllTransports(), D.startConnect());
                  }), K("offline", function() {
                    D.state == D.states.connected && (o.default.logAction(o.default.LOG_MINOR, "ConnectionManager caught browser ‘offline’ event", "disconnecting active transport"), D.disconnectAllTransports());
                  })), D;
                }
                return H.initTransports = function() {
                  (0, r.default)(H), I.arrForEach(M.default.Transports, function(m) {
                    m(H);
                  });
                }, H.prototype.createTransportParams = function(m, x) {
                  return new G(this.options, m, x, this.connectionKey);
                }, H.prototype.getTransportParams = function(m) {
                  var x = this, D = function(B) {
                    if (x.connectionKey) {
                      B("resume");
                      return;
                    }
                    if (typeof x.options.recover == "string") {
                      B("recover");
                      return;
                    }
                    var W = x.options.recover, _ = E();
                    if (_ && typeof W == "function") {
                      o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.getTransportParams()", "Calling clientOptions-provided recover function with last session data"), W(_, function(K) {
                        K ? (x.options.recover = _.recoveryKey, B("recover")) : B("clean");
                      });
                      return;
                    }
                    B("clean");
                  };
                  D(function(B) {
                    var W = x.createTransportParams(null, B);
                    if (B === "recover") {
                      o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.getTransportParams()", "Transport recovery mode = recover; recoveryKey = " + x.options.recover);
                      var _ = U(x.options.recover);
                      _ && (x.msgSerial = _.msgSerial);
                    } else
                      o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.getTransportParams()", "Transport params = " + W.toString());
                    m(W);
                  });
                }, H.prototype.tryATransport = function(m, x, D) {
                  var B = this;
                  o.default.logAction(o.default.LOG_MICRO, "ConnectionManager.tryATransport()", "trying " + x), n.default.tryConnect(H.supportedTransports[x], this, this.realtime.auth, m, function(W, _) {
                    var K = B.state;
                    if (K == B.states.closing || K == B.states.closed || K == B.states.failed) {
                      _ && (o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.tryATransport()", "connection " + K.state + " while we were attempting the transport; closing " + _), _.close()), D(!0);
                      return;
                    }
                    if (W) {
                      o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.tryATransport()", "transport " + x + " " + W.event + ", err: " + W.error.toString()), u.default.isTokenErr(W.error) && !(B.errorReason && u.default.isTokenErr(B.errorReason)) ? (B.errorReason = W.error, B.realtime.auth._forceNewToken(null, null, function(q) {
                        if (q) {
                          B.actOnErrorFromAuthorize(q);
                          return;
                        }
                        B.tryATransport(m, x, D);
                      })) : W.event === "failed" ? (B.notifyState({ state: "failed", error: W.error }), D(!0)) : W.event === "disconnected" && ((0, R.isRetriable)(W.error) ? D(!1) : (B.notifyState({ state: B.states.connecting.failState, error: W.error }), D(!0)));
                      return;
                    }
                    o.default.logAction(o.default.LOG_MICRO, "ConnectionManager.tryATransport()", "viable transport " + x + "; setting pending"), B.setTransportPending(_, m), D(null, _);
                  });
                }, H.prototype.setTransportPending = function(m, x) {
                  var D = this, B = x.mode;
                  o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.setTransportPending()", "transport = " + m + "; mode = " + B), I.arrDeleteValue(this.proposedTransports, m), this.pendingTransports.push(m);
                  var W = M.default.Defaults.transportPreferenceOrder[M.default.Defaults.transportPreferenceOrder.length - 1];
                  m.once("connected", function(K, q, Z) {
                    B == "upgrade" && D.activeProtocol ? m.shortName !== W && I.arrIn(D.getUpgradePossibilities(), W) && D.activeProtocol ? setTimeout(function() {
                      D.scheduleTransportActivation(K, m, q, Z);
                    }, D.options.timeouts.parallelUpgradeDelay) : D.scheduleTransportActivation(K, m, q, Z) : (D.activateTransport(K, m, q, Z), M.default.Config.nextTick(function() {
                      D.connectImpl(x);
                    })), B === "recover" && D.options.recover && (D.options.recover = null, D.unpersistConnection());
                  });
                  var _ = this;
                  m.on(["disconnected", "closed", "failed"], function(K) {
                    _.deactivateTransport(m, this.event, K);
                  }), this.emit("transport.pending", m);
                }, H.prototype.scheduleTransportActivation = function(m, x, D, B) {
                  var W = this, _ = this.activeProtocol && this.activeProtocol.getTransport(), K = function() {
                    x.disconnect(), I.arrDeleteValue(W.pendingTransports, x);
                  };
                  if (this.state !== this.states.connected && this.state !== this.states.connecting) {
                    o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.scheduleTransportActivation()", "Current connection state (" + this.state.state + (this.state === this.states.synchronizing ? ", but with an upgrade already in progress" : "") + ") is not valid to upgrade in; abandoning upgrade to " + x.shortName), K();
                    return;
                  }
                  if (_ && !C(x, _)) {
                    o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.scheduleTransportActivation()", "Proposed transport " + x.shortName + " is no better than current active transport " + _.shortName + " - abandoning upgrade"), K();
                    return;
                  }
                  o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.scheduleTransportActivation()", "Scheduling transport upgrade; transport = " + x);
                  var q = null;
                  if (!x.isConnected) {
                    o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.scheduleTransportActivation()", "Proposed transport " + x.shortName + "is no longer connected; abandoning upgrade"), K();
                    return;
                  }
                  if (this.state === this.states.connected)
                    o.default.logAction(o.default.LOG_MICRO, "ConnectionManager.scheduleTransportActivation()", "Currently connected, so temporarily pausing events until the upgrade is complete"), this.state = this.states.synchronizing, q = this.activeProtocol;
                  else if (this.state !== this.states.connecting) {
                    o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.scheduleTransportActivation()", "Current connection state (" + this.state.state + (this.state === this.states.synchronizing ? ", but with an upgrade already in progress" : "") + ") is not valid to upgrade in; abandoning upgrade to " + x.shortName), K();
                    return;
                  }
                  o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.scheduleTransportActivation()", "Syncing transport; transport = " + x);
                  var Z = function() {
                    o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.scheduleTransportActivation()", "Activating transport; transport = " + x), x.send(L.default.fromValues({
                      action: i.ACTIVATE
                    })), W.activateTransport(m, x, D, B), W.state === W.states.synchronizing ? (o.default.logAction(o.default.LOG_MICRO, "ConnectionManager.scheduleTransportActivation()", "Pre-upgrade protocol idle, sending queued messages on upgraded transport; transport = " + x), W.state = W.states.connected) : o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.scheduleTransportActivation()", "Pre-upgrade protocol idle, but state is now " + W.state.state + ", so leaving unchanged"), W.state.sendEvents && W.sendQueuedMessages();
                  };
                  q ? q.onceIdle(Z) : Z();
                }, H.prototype.activateTransport = function(m, x, D, B) {
                  var W = this;
                  o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.activateTransport()", "transport = " + x), m && o.default.logAction(o.default.LOG_ERROR, "ConnectionManager.activateTransport()", "error = " + m), D && o.default.logAction(o.default.LOG_MICRO, "ConnectionManager.activateTransport()", "connectionId =  " + D), B && o.default.logAction(o.default.LOG_MICRO, "ConnectionManager.activateTransport()", "connectionDetails =  " + JSON.stringify(B)), this.persistTransportPreference(x);
                  var _ = this.state, K = this.states.connected.state;
                  if (o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.activateTransport()", "current state = " + _.state), _.state == this.states.closing.state || _.state == this.states.closed.state || _.state == this.states.failed.state)
                    return o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.activateTransport()", "Disconnecting transport and abandoning"), x.disconnect(), !1;
                  if (I.arrDeleteValue(this.pendingTransports, x), !x.isConnected)
                    return o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.activateTransport()", "Declining to activate transport " + x + " since it appears to no longer be connected"), !1;
                  var q = this.activeProtocol;
                  this.activeProtocol = new T.default(x), this.host = x.params.host;
                  var Z = B.connectionKey;
                  if (Z && this.connectionKey != Z && this.setConnection(D, B, !!m), this.onConnectionDetailsUpdate(B, x), M.default.Config.nextTick(function() {
                    x.on("connected", function(Y, et, it) {
                      W.onConnectionDetailsUpdate(it, x), W.emit("update", new d.default(K, K, null, Y));
                    });
                  }), _.state === this.states.connected.state ? m && (this.errorReason = this.realtime.connection.errorReason = m, this.emit("update", new d.default(K, K, null, m))) : (this.notifyState({ state: "connected", error: m }), this.errorReason = this.realtime.connection.errorReason = m || null), this.emit("transport.active", x), q)
                    if (q.messageQueue.count() > 0 && o.default.logAction(o.default.LOG_ERROR, "ConnectionManager.activateTransport()", "Previous active protocol (for transport " + q.transport.shortName + ", new one is " + x.shortName + ") finishing with " + q.messageQueue.count() + " messages still pending"), q.transport === x) {
                      var tt = "Assumption violated: activating a transport that was also the transport for the previous active protocol; transport = " + x.shortName + "; stack = " + new Error().stack;
                      o.default.logAction(o.default.LOG_ERROR, "ConnectionManager.activateTransport()", tt);
                    } else
                      q.finish();
                  return I.safeArrForEach(this.pendingTransports, function(Y) {
                    if (Y === x) {
                      var et = "Assumption violated: activating a transport that is still marked as a pending transport; transport = " + x.shortName + "; stack = " + new Error().stack;
                      o.default.logAction(o.default.LOG_ERROR, "ConnectionManager.activateTransport()", et), I.arrDeleteValue(W.pendingTransports, x);
                    } else
                      Y.disconnect();
                  }), I.safeArrForEach(this.proposedTransports, function(Y) {
                    Y === x ? (o.default.logAction(o.default.LOG_ERROR, "ConnectionManager.activateTransport()", "Assumption violated: activating a transport that is still marked as a proposed transport; transport = " + x.shortName + "; stack = " + new Error().stack), I.arrDeleteValue(W.proposedTransports, x)) : Y.dispose();
                  }), !0;
                }, H.prototype.deactivateTransport = function(m, x, D) {
                  var B = this.activeProtocol, W = B && B.getTransport() === m, _ = I.arrDeleteValue(this.pendingTransports, m), K = I.arrDeleteValue(this.proposedTransports, m), q = this.noTransportsScheduledForActivation();
                  if (o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.deactivateTransport()", "transport = " + m), o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.deactivateTransport()", "state = " + x + (W ? "; was active" : _ ? "; was pending" : K ? "; was proposed" : "") + (q ? "" : "; another transport is scheduled for activation")), D && D.message && o.default.logAction(o.default.LOG_MICRO, "ConnectionManager.deactivateTransport()", "reason =  " + D.message), W && (o.default.logAction(o.default.LOG_MICRO, "ConnectionManager.deactivateTransport()", "Getting, clearing, and requeuing " + this.activeProtocol.messageQueue.count() + " pending messages"), this.queuePendingMessages(B.getPendingMessages()), M.default.Config.nextTick(function() {
                    B.clearPendingMessages();
                  }), this.activeProtocol = this.host = null), this.emit("transport.inactive", m), W && q || W && x === "failed" || x === "closed" || B === null && _ && this.pendingTransports.length === 0) {
                    if (x === "disconnected" && D && D.statusCode > 500 && this.httpHosts.length > 1) {
                      this.unpersistTransportPreference(), this.forceFallbackHost = !0, this.notifyState({ state: x, error: D, retryImmediately: !0 });
                      return;
                    }
                    var Z = x === "failed" && u.default.isTokenErr(D) ? "disconnected" : x;
                    this.notifyState({ state: Z, error: D });
                    return;
                  }
                  W && x === "disconnected" && this.state !== this.states.synchronizing && (o.default.logAction(o.default.LOG_MICRO, "ConnectionManager.deactivateTransport()", "wasActive but another transport is connected and scheduled for activation, so going into the connecting state until it activates"), this.startSuspendTimer(), this.startTransitionTimer(this.states.connecting), this.notifyState({ state: "connecting", error: D }));
                }, H.prototype.noTransportsScheduledForActivation = function() {
                  return I.isEmpty(this.pendingTransports) || this.pendingTransports.every(function(m) {
                    return !m.isConnected;
                  });
                }, H.prototype.setConnection = function(m, x, D) {
                  var B = this.connectionId, W = B && B !== m, _ = !B && D;
                  (W || _) && (o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.setConnection()", "Resetting msgSerial"), this.msgSerial = 0, this.queuedMessages.resetSendAttempted()), this.connectionId !== m && o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.setConnection()", "New connectionId; reattaching any attached channels"), this.realtime.connection.id = this.connectionId = m, this.realtime.connection.key = this.connectionKey = x.connectionKey;
                }, H.prototype.clearConnection = function() {
                  this.realtime.connection.id = this.connectionId = void 0, this.realtime.connection.key = this.connectionKey = void 0, this.msgSerial = 0, this.unpersistConnection();
                }, H.prototype.createRecoveryKey = function() {
                  return this.connectionKey ? JSON.stringify({
                    connectionKey: this.connectionKey,
                    msgSerial: this.msgSerial,
                    channelSerials: this.realtime.channels.channelSerials()
                  }) : null;
                }, H.prototype.checkConnectionStateFreshness = function() {
                  if (!(!this.lastActivity || !this.connectionId)) {
                    var m = I.now() - this.lastActivity;
                    m > this.connectionStateTtl + this.maxIdleInterval && (o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.checkConnectionStateFreshness()", "Last known activity from realtime was " + m + "ms ago; discarding connection state"), this.clearConnection(), this.states.connecting.failState = "suspended");
                  }
                }, H.prototype.persistConnection = function() {
                  if (s()) {
                    var m = this.createRecoveryKey();
                    m && A({
                      recoveryKey: m,
                      disconnectedAt: I.now(),
                      location: p.location,
                      clientId: this.realtime.auth.clientId
                    });
                  }
                }, H.prototype.unpersistConnection = function() {
                  y();
                }, H.prototype.getError = function() {
                  return this.errorReason || this.getStateError();
                }, H.prototype.getStateError = function() {
                  var m, x;
                  return (x = (m = R.default)[this.state.state]) === null || x === void 0 ? void 0 : x.call(m);
                }, H.prototype.activeState = function() {
                  return this.state.queueEvents || this.state.sendEvents;
                }, H.prototype.enactStateChange = function(m) {
                  var x = m.current === "failed" ? o.default.LOG_ERROR : o.default.LOG_MAJOR;
                  o.default.logAction(x, "Connection state", m.current + (m.reason ? "; reason: " + m.reason : "")), o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.enactStateChange", "setting new state: " + m.current + "; reason = " + (m.reason && m.reason.message));
                  var D = this.state = this.states[m.current];
                  m.reason && (this.errorReason = m.reason, this.realtime.connection.errorReason = m.reason), (D.terminal || D.state === "suspended") && this.clearConnection(), this.emit("connectionstate", m);
                }, H.prototype.startTransitionTimer = function(m) {
                  var x = this;
                  o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.startTransitionTimer()", "transitionState: " + m.state), this.transitionTimer && (o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.startTransitionTimer()", "clearing already-running timer"), clearTimeout(this.transitionTimer)), this.transitionTimer = setTimeout(function() {
                    x.transitionTimer && (x.transitionTimer = null, o.default.logAction(o.default.LOG_MINOR, "ConnectionManager " + m.state + " timer expired", "requesting new state: " + m.failState), x.notifyState({ state: m.failState }));
                  }, m.retryDelay);
                }, H.prototype.cancelTransitionTimer = function() {
                  o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.cancelTransitionTimer()", ""), this.transitionTimer && (clearTimeout(this.transitionTimer), this.transitionTimer = null);
                }, H.prototype.startSuspendTimer = function() {
                  var m = this;
                  this.suspendTimer || (this.suspendTimer = setTimeout(function() {
                    m.suspendTimer && (m.suspendTimer = null, o.default.logAction(o.default.LOG_MINOR, "ConnectionManager suspend timer expired", "requesting new state: suspended"), m.states.connecting.failState = "suspended", m.notifyState({ state: "suspended" }));
                  }, this.connectionStateTtl));
                }, H.prototype.checkSuspendTimer = function(m) {
                  m !== "disconnected" && m !== "suspended" && m !== "connecting" && this.cancelSuspendTimer();
                }, H.prototype.cancelSuspendTimer = function() {
                  this.states.connecting.failState = "disconnected", this.suspendTimer && (clearTimeout(this.suspendTimer), this.suspendTimer = null);
                }, H.prototype.startRetryTimer = function(m) {
                  var x = this;
                  this.retryTimer = setTimeout(function() {
                    o.default.logAction(o.default.LOG_MINOR, "ConnectionManager retry timer expired", "retrying"), x.retryTimer = null, x.requestState({ state: "connecting" });
                  }, m);
                }, H.prototype.cancelRetryTimer = function() {
                  this.retryTimer && (clearTimeout(this.retryTimer), this.retryTimer = null);
                }, H.prototype.notifyState = function(m) {
                  var x = this, D, B, W = m.state, _ = W === "disconnected" && (this.state === this.states.connected || this.state === this.states.synchronizing || m.retryImmediately || this.state === this.states.connecting && m.error && u.default.isTokenErr(m.error) && !(this.errorReason && u.default.isTokenErr(this.errorReason)));
                  if (o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.notifyState()", "new state: " + W + (_ ? "; will retry connection immediately" : "")), W != this.state.state && (this.cancelTransitionTimer(), this.cancelRetryTimer(), this.checkSuspendTimer(m.state), (W === "suspended" || W === "connected") && (this.disconnectedRetryCount = 0), !this.state.terminal)) {
                    var K = this.states[m.state], q = K.retryDelay;
                    K.state === "disconnected" && (this.disconnectedRetryCount++, q = I.getRetryTime(K.retryDelay, this.disconnectedRetryCount));
                    var Z = new d.default(this.state.state, K.state, q, m.error || ((B = (D = R.default)[K.state]) === null || B === void 0 ? void 0 : B.call(D)));
                    if (_) {
                      var tt = function() {
                        x.state === x.states.disconnected && (x.lastAutoReconnectAttempt = I.now(), x.requestState({ state: "connecting" }));
                      }, Y = this.lastAutoReconnectAttempt && I.now() - this.lastAutoReconnectAttempt + 1;
                      Y && Y < 1e3 ? (o.default.logAction(o.default.LOG_MICRO, "ConnectionManager.notifyState()", "Last reconnect attempt was only " + Y + "ms ago, waiting another " + (1e3 - Y) + "ms before trying again"), setTimeout(tt, 1e3 - Y)) : M.default.Config.nextTick(tt);
                    } else
                      (W === "disconnected" || W === "suspended") && this.startRetryTimer(q);
                    (W === "disconnected" && !_ || W === "suspended" || K.terminal) && M.default.Config.nextTick(function() {
                      x.disconnectAllTransports();
                    }), W == "connected" && !this.activeProtocol && o.default.logAction(o.default.LOG_ERROR, "ConnectionManager.notifyState()", "Broken invariant: attempted to go into connected state, but there is no active protocol"), this.enactStateChange(Z), this.state.sendEvents ? this.sendQueuedMessages() : this.state.queueEvents || (this.realtime.channels.propogateConnectionInterruption(W, Z.reason), this.failQueuedMessages(Z.reason));
                  }
                }, H.prototype.requestState = function(m) {
                  var x = this, D, B, W = m.state;
                  if (o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.requestState()", "requested state: " + W + "; current state: " + this.state.state), W != this.state.state && (this.cancelTransitionTimer(), this.cancelRetryTimer(), this.checkSuspendTimer(W), !(W == "connecting" && this.state.state == "connected") && !(W == "closing" && this.state.state == "closed"))) {
                    var _ = this.states[W], K = new d.default(this.state.state, _.state, null, m.error || ((B = (D = R.default)[_.state]) === null || B === void 0 ? void 0 : B.call(D)));
                    this.enactStateChange(K), W == "connecting" && M.default.Config.nextTick(function() {
                      x.startConnect();
                    }), W == "closing" && this.closeImpl();
                  }
                }, H.prototype.startConnect = function() {
                  var m = this;
                  if (this.state !== this.states.connecting) {
                    o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.startConnect()", "Must be in connecting state to connect, but was " + this.state.state);
                    return;
                  }
                  var x = this.realtime.auth, D = ++this.connectCounter, B = function() {
                    m.checkConnectionStateFreshness(), m.getTransportParams(function(_) {
                      if (_.mode === "recover" && _.options.recover) {
                        var K = U(_.options.recover);
                        K && m.realtime.channels.recoverChannels(K.channelSerials);
                      }
                      D === m.connectCounter && m.connectImpl(_, D);
                    });
                  };
                  if (o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.startConnect()", "starting connection"), this.startSuspendTimer(), this.startTransitionTimer(this.states.connecting), x.method === "basic")
                    B();
                  else {
                    var W = function(_) {
                      D === m.connectCounter && (_ ? m.actOnErrorFromAuthorize(_) : B());
                    };
                    this.errorReason && u.default.isTokenErr(this.errorReason) ? x._forceNewToken(null, null, W) : x._ensureValidAuthCredentials(!1, W);
                  }
                }, H.prototype.connectImpl = function(m, x) {
                  var D = this.state.state;
                  D !== this.states.connecting.state && D !== this.states.connected.state ? o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.connectImpl()", "Must be in connecting state to connect (or connected to upgrade), but was " + D) : this.pendingTransports.length ? o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.connectImpl()", "Transports " + this.pendingTransports[0].toString() + " currently pending; taking no action") : D == this.states.connected.state ? this.upgradeIfNeeded(m) : this.transports.length > 1 && this.getTransportPreference() ? this.connectPreference(m, x) : this.connectBase(m, x);
                }, H.prototype.connectPreference = function(m, x) {
                  var D = this, B = this.getTransportPreference(), W = !1;
                  I.arrIn(this.transports, B) || (this.unpersistTransportPreference(), this.connectImpl(m, x)), o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.connectPreference()", "Trying to connect with stored transport preference " + B);
                  var _ = setTimeout(function() {
                    W = !0, D.state.state !== D.states.connected.state && (o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.connectPreference()", "Shortcircuit connection attempt with " + B + " failed; clearing preference and trying from scratch"), D.disconnectAllTransports(), D.unpersistTransportPreference()), D.connectImpl(m, x);
                  }, this.options.timeouts.preferenceConnectTimeout);
                  m.host = this.httpHosts[0], this.tryATransport(m, B, function(K, q) {
                    clearTimeout(_), W && q ? (q.off(), q.disconnect(), I.arrDeleteValue(D.pendingTransports, q)) : !q && !K && (D.unpersistTransportPreference(), D.connectImpl(m, x));
                  });
                }, H.prototype.connectBase = function(m, x) {
                  var D = this, B = function(Z) {
                    D.notifyState({ state: D.states.connecting.failState, error: Z });
                  }, W = this.httpHosts.slice(), _ = function(Z, tt) {
                    x === D.connectCounter && !tt && !Z && q();
                  };
                  o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.connectBase()", "Trying to connect with base transport " + this.baseTransport);
                  var K = W.shift();
                  if (!K) {
                    B(new S.default("Unable to connect (no available host)", 80003, 404));
                    return;
                  }
                  m.host = K;
                  var q = function() {
                    if (!W.length) {
                      B(new S.default("Unable to connect (and no more fallback hosts to try)", 80003, 404));
                      return;
                    }
                    if (!D.realtime.http.checkConnectivity) {
                      B(new S.PartialErrorInfo("Internal error: Http.checkConnectivity not set", null, 500));
                      return;
                    }
                    D.realtime.http.checkConnectivity(function(Z, tt) {
                      if (x === D.connectCounter) {
                        if (Z) {
                          B(Z);
                          return;
                        }
                        if (!tt) {
                          B(new S.default("Unable to connect (network unreachable)", 80003, 404));
                          return;
                        }
                        m.host = I.arrPopRandomElement(W), D.tryATransport(m, D.baseTransport, _);
                      }
                    });
                  };
                  if (this.forceFallbackHost && W.length) {
                    this.forceFallbackHost = !1, q();
                    return;
                  }
                  this.tryATransport(m, this.baseTransport, _);
                }, H.prototype.getUpgradePossibilities = function() {
                  var m = this.activeProtocol.getTransport().shortName, x = I.arrIndexOf(this.upgradeTransports, m);
                  return this.upgradeTransports.slice(x + 1);
                }, H.prototype.upgradeIfNeeded = function(m) {
                  var x = this, D = this.getUpgradePossibilities();
                  o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.upgradeIfNeeded()", "upgrade possibilities: " + M.default.Config.inspect(D)), D.length && I.arrForEach(D, function(B) {
                    var W = x.createTransportParams(m.host, "upgrade");
                    x.tryATransport(W, B, h);
                  });
                }, H.prototype.closeImpl = function() {
                  o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.closeImpl()", "closing connection"), this.cancelSuspendTimer(), this.startTransitionTimer(this.states.closing), I.safeArrForEach(this.pendingTransports, function(m) {
                    o.default.logAction(o.default.LOG_MICRO, "ConnectionManager.closeImpl()", "Closing pending transport: " + m), m && m.close();
                  }), I.safeArrForEach(this.proposedTransports, function(m) {
                    o.default.logAction(o.default.LOG_MICRO, "ConnectionManager.closeImpl()", "Disposing of proposed transport: " + m), m && m.dispose();
                  }), this.activeProtocol && (o.default.logAction(o.default.LOG_MICRO, "ConnectionManager.closeImpl()", "Closing active transport: " + this.activeProtocol.getTransport()), this.activeProtocol.getTransport().close()), this.notifyState({ state: "closed" });
                }, H.prototype.onAuthUpdated = function(m, x) {
                  var D = this, B;
                  switch (this.state.state) {
                    case "connected": {
                      if (o.default.logAction(o.default.LOG_MICRO, "ConnectionManager.onAuthUpdated()", "Sending AUTH message on active transport"), (this.pendingTransports.length || this.proposedTransports.length) && this.state !== this.states.synchronizing) {
                        this.disconnectAllTransports(
                          /* exceptActive: */
                          !0
                        );
                        var W = this.activeProtocol.getTransport().params;
                        M.default.Config.nextTick(function() {
                          D.state.state === "connected" && D.upgradeIfNeeded(W);
                        });
                      }
                      var _ = (B = this.activeProtocol) === null || B === void 0 ? void 0 : B.getTransport();
                      _ && _.onAuthUpdated && _.onAuthUpdated(m);
                      var K = L.default.fromValues({
                        action: i.AUTH,
                        auth: {
                          accessToken: m.token
                        }
                      });
                      this.send(K);
                      var q = function() {
                        D.off(Z), x(null, m);
                      }, Z = function(Y) {
                        Y.current === "failed" && (D.off(q), D.off(Z), x(Y.reason || D.getStateError()));
                      };
                      this.once("connectiondetails", q), this.on("connectionstate", Z);
                      break;
                    }
                    case "connecting":
                      o.default.logAction(o.default.LOG_MICRO, "ConnectionManager.onAuthUpdated()", "Aborting current connection attempts in order to start again with the new auth details"), this.disconnectAllTransports();
                    default: {
                      o.default.logAction(o.default.LOG_MICRO, "ConnectionManager.onAuthUpdated()", "Connection state is " + this.state.state + "; waiting until either connected or failed");
                      var tt = function(Y) {
                        switch (Y.current) {
                          case "connected":
                            D.off(tt), x(null, m);
                            break;
                          case "failed":
                          case "closed":
                          case "suspended":
                            D.off(tt), x(Y.reason || D.getStateError());
                            break;
                        }
                      };
                      this.on("connectionstate", tt), this.state.state === "connecting" ? this.startConnect() : this.requestState({ state: "connecting" });
                    }
                  }
                }, H.prototype.disconnectAllTransports = function(m) {
                  o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.disconnectAllTransports()", "Disconnecting all transports" + (m ? " except the active transport" : "")), this.connectCounter++, I.safeArrForEach(this.pendingTransports, function(x) {
                    o.default.logAction(o.default.LOG_MICRO, "ConnectionManager.disconnectAllTransports()", "Disconnecting pending transport: " + x), x && x.disconnect();
                  }), this.pendingTransports = [], I.safeArrForEach(this.proposedTransports, function(x) {
                    o.default.logAction(o.default.LOG_MICRO, "ConnectionManager.disconnectAllTransports()", "Disposing of proposed transport: " + x), x && x.dispose();
                  }), this.proposedTransports = [], this.activeProtocol && !m && (o.default.logAction(o.default.LOG_MICRO, "ConnectionManager.disconnectAllTransports()", "Disconnecting active transport: " + this.activeProtocol.getTransport()), this.activeProtocol.getTransport().disconnect());
                }, H.prototype.send = function(m, x, D) {
                  D = D || h;
                  var B = this.state;
                  if (B.sendEvents) {
                    o.default.logAction(o.default.LOG_MICRO, "ConnectionManager.send()", "sending event"), this.sendImpl(new T.PendingMessage(m, D));
                    return;
                  }
                  var W = x && B.queueEvents || B.forceQueueEvents;
                  if (!W) {
                    var _ = "rejecting event, queueEvent was " + x + ", state was " + B.state;
                    o.default.logAction(o.default.LOG_MICRO, "ConnectionManager.send()", _), D(this.errorReason || new S.default(_, 9e4, 400));
                    return;
                  }
                  o.default.shouldLog(o.default.LOG_MICRO) && o.default.logAction(o.default.LOG_MICRO, "ConnectionManager.send()", "queueing msg; " + L.default.stringify(m)), this.queue(m, D);
                }, H.prototype.sendImpl = function(m) {
                  var x = m.message;
                  m.ackRequired && !m.sendAttempted && (x.msgSerial = this.msgSerial++);
                  try {
                    this.activeProtocol.send(m);
                  } catch (D) {
                    o.default.logAction(o.default.LOG_ERROR, "ConnectionManager.sendImpl()", "Unexpected exception in transport.send(): " + D.stack);
                  }
                }, H.prototype.queue = function(m, x) {
                  o.default.logAction(o.default.LOG_MICRO, "ConnectionManager.queue()", "queueing event");
                  var D = this.queuedMessages.last(), B = this.options.maxMessageSize;
                  D && !D.sendAttempted && N(D.message, m, B) ? (D.merged || (D.callback = l.default.create([D.callback]), D.merged = !0), D.callback.push(x)) : this.queuedMessages.push(new T.PendingMessage(m, x));
                }, H.prototype.sendQueuedMessages = function() {
                  o.default.logAction(o.default.LOG_MICRO, "ConnectionManager.sendQueuedMessages()", "sending " + this.queuedMessages.count() + " queued messages");
                  for (var m; m = this.queuedMessages.shift(); )
                    this.sendImpl(m);
                }, H.prototype.queuePendingMessages = function(m) {
                  m && m.length && (o.default.logAction(o.default.LOG_MICRO, "ConnectionManager.queuePendingMessages()", "queueing " + m.length + " pending messages"), this.queuedMessages.prepend(m));
                }, H.prototype.failQueuedMessages = function(m) {
                  var x = this.queuedMessages.count();
                  x > 0 && (o.default.logAction(o.default.LOG_ERROR, "ConnectionManager.failQueuedMessages()", "failing " + x + " queued messages, err = " + I.inspectError(m)), this.queuedMessages.completeAllMessages(m));
                }, H.prototype.onChannelMessage = function(m, x) {
                  var D = this.activeProtocol && x === this.activeProtocol.getTransport(), B = I.arrIn(this.pendingTransports, x) && this.state == this.states.synchronizing;
                  D || B ? this.realtime.channels.onChannelMessage(m) : I.arrIndexOf([i.ACK, i.NACK, i.ERROR], m.action) > -1 ? this.realtime.channels.onChannelMessage(m) : o.default.logAction(o.default.LOG_MICRO, "ConnectionManager.onChannelMessage()", "received message " + JSON.stringify(m) + "on defunct transport; discarding");
                }, H.prototype.ping = function(m, x) {
                  var D = this;
                  if (m) {
                    o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.ping()", "transport = " + m);
                    var B = function() {
                      m.off("heartbeat", K), x(new S.default("Timeout waiting for heartbeat response", 5e4, 500));
                    }, W = I.now(), _ = I.cheapRandStr(), K = function(et) {
                      if (et === _) {
                        m.off("heartbeat", K), clearTimeout(q);
                        var it = I.now() - W;
                        x(null, it);
                      }
                    }, q = setTimeout(B, this.options.timeouts.realtimeRequestTimeout);
                    m.on("heartbeat", K), m.ping(_);
                    return;
                  }
                  if (this.state.state !== "connected") {
                    x(new S.default("Unable to ping service; not connected", 4e4, 400));
                    return;
                  }
                  var Z = !1, tt = function(et, it) {
                    D.off("transport.active", Y), Z || (Z = !0, x(et, it));
                  }, Y = function() {
                    Z || (Z = !0, M.default.Config.nextTick(function() {
                      D.ping(null, x);
                    }));
                  };
                  this.on("transport.active", Y), this.ping(this.activeProtocol.getTransport(), tt);
                }, H.prototype.abort = function(m) {
                  this.activeProtocol.getTransport().fail(m);
                }, H.prototype.registerProposedTransport = function(m) {
                  this.proposedTransports.push(m);
                }, H.prototype.getTransportPreference = function() {
                  var m, x;
                  return this.transportPreference || e() && ((x = (m = M.default.WebStorage) === null || m === void 0 ? void 0 : m.get) === null || x === void 0 ? void 0 : x.call(m, w));
                }, H.prototype.persistTransportPreference = function(m) {
                  var x, D;
                  I.arrIn(P.default.upgradeTransports, m.shortName) && (this.transportPreference = m.shortName, e() && ((D = (x = M.default.WebStorage) === null || x === void 0 ? void 0 : x.set) === null || D === void 0 || D.call(x, w, m.shortName)));
                }, H.prototype.unpersistTransportPreference = function() {
                  var m, x;
                  this.transportPreference = null, e() && ((x = (m = M.default.WebStorage) === null || m === void 0 ? void 0 : m.remove) === null || x === void 0 || x.call(m, w));
                }, H.prototype.actOnErrorFromAuthorize = function(m) {
                  if (m.code === 40171)
                    this.notifyState({ state: "failed", error: m });
                  else if (m.code === 40102)
                    this.notifyState({ state: "failed", error: m });
                  else if (m.statusCode === t.default.Forbidden) {
                    var x = "Client configured authentication provider returned 403; failing the connection";
                    o.default.logAction(o.default.LOG_ERROR, "ConnectionManager.actOnErrorFromAuthorize()", x), this.notifyState({ state: "failed", error: new S.default(x, 80019, 403, m) });
                  } else {
                    var x = "Client configured authentication provider request failed";
                    o.default.logAction(o.default.LOG_MINOR, "ConnectionManager.actOnErrorFromAuthorize", x), this.notifyState({ state: this.state.failState, error: new S.default(x, 80019, 401, m) });
                  }
                }, H.prototype.onConnectionDetailsUpdate = function(m, x) {
                  if (m) {
                    this.connectionDetails = m, m.maxMessageSize && (this.options.maxMessageSize = m.maxMessageSize);
                    var D = m.clientId;
                    if (D) {
                      var B = this.realtime.auth._uncheckedSetClientId(D);
                      if (B) {
                        o.default.logAction(o.default.LOG_ERROR, "ConnectionManager.onConnectionDetailsUpdate()", B.message), x.fail(B);
                        return;
                      }
                    }
                    var W = m.connectionStateTtl;
                    W && (this.connectionStateTtl = W), this.maxIdleInterval = m.maxIdleInterval, this.emit("connectiondetails", m);
                  }
                }, H.supportedTransports = {}, H;
              }(v.default)
            );
            g.default = V;
          }).call(this, f(13));
        },
        /* 36 */
        /***/
        function(F, g, f) {
          Object.defineProperty(g, "__esModule", { value: !0 });
          var p = f(0), a = p.__importDefault(f(7)), L = p.__importDefault(f(2)), I = (
            /** @class */
            function(T) {
              p.__extends(P, T);
              function P() {
                var M = T.call(this) || this;
                return M.messages = [], M;
              }
              return P.prototype.count = function() {
                return this.messages.length;
              }, P.prototype.push = function(M) {
                this.messages.push(M);
              }, P.prototype.shift = function() {
                return this.messages.shift();
              }, P.prototype.last = function() {
                return this.messages[this.messages.length - 1];
              }, P.prototype.copyAll = function() {
                return this.messages.slice();
              }, P.prototype.append = function(M) {
                this.messages.push.apply(this.messages, M);
              }, P.prototype.prepend = function(M) {
                this.messages.unshift.apply(this.messages, M);
              }, P.prototype.completeMessages = function(M, v, O) {
                L.default.logAction(L.default.LOG_MICRO, "MessageQueue.completeMessages()", "serial = " + M + "; count = " + v), O = O || null;
                var o = this.messages;
                if (o.length === 0)
                  throw new Error("MessageQueue.completeMessages(): completeMessages called on any empty MessageQueue");
                var d = o[0];
                if (d) {
                  var R = d.message.msgSerial, S = M + v;
                  if (S > R)
                    for (var u = o.splice(0, S - R), c = 0, l = u; c < l.length; c++) {
                      var r = l[c];
                      r.callback(O);
                    }
                  o.length == 0 && this.emit("idle");
                }
              }, P.prototype.completeAllMessages = function(M) {
                this.completeMessages(0, Number.MAX_SAFE_INTEGER || Number.MAX_VALUE, M);
              }, P.prototype.resetSendAttempted = function() {
                for (var M = 0, v = this.messages; M < v.length; M++) {
                  var O = v[M];
                  O.sendAttempted = !1;
                }
              }, P.prototype.clear = function() {
                L.default.logAction(L.default.LOG_MICRO, "MessageQueue.clear()", "clearing " + this.messages.length + " messages"), this.messages = [], this.emit("idle");
              }, P;
            }(a.default)
          );
          g.default = I;
        },
        /* 37 */
        /***/
        function(F, g, f) {
          Object.defineProperty(g, "__esModule", { value: !0 });
          var p = (
            /** @class */
            function() {
              function a(L, I, T, P) {
                this.previous = L, this.current = I, T && (this.retryIn = T), P && (this.reason = P);
              }
              return a;
            }()
          );
          g.default = p;
        },
        /* 38 */
        /***/
        function(F, g, f) {
          Object.defineProperty(g, "__esModule", { value: !0 });
          var p = f(0), a = p.__importDefault(f(10)), L = p.__importDefault(f(7)), I = p.__importStar(f(1)), T = p.__importDefault(f(33)), P = p.__importDefault(f(2)), M = p.__importDefault(f(54)), v = p.__importDefault(f(9)), O = p.__importDefault(f(39)), o = p.__importStar(f(4)), d = p.__importDefault(f(15)), R = p.__importDefault(f(20)), S = a.default.Action, u = function() {
          };
          function c(r) {
            if (r && "params" in r && !I.isObject(r.params))
              return new o.default("options.params must be an object", 4e4, 400);
            if (r && "modes" in r) {
              if (!I.isArray(r.modes))
                return new o.default("options.modes must be an array", 4e4, 400);
              for (var n = 0; n < r.modes.length; n++) {
                var t = r.modes[n];
                if (!t || typeof t != "string" || !I.arrIn(a.default.channelModes, String.prototype.toUpperCase.call(t)))
                  return new o.default("Invalid channel mode: " + t, 4e4, 400);
              }
            }
          }
          var l = (
            /** @class */
            function(r) {
              p.__extends(n, r);
              function n(t, e, s) {
                var i = r.call(this, t, e, s) || this;
                return i.retryCount = 0, i.history = function(h, w) {
                  if (P.default.logAction(P.default.LOG_MICRO, "RealtimeChannel.history()", "channel = " + this.name), w === void 0)
                    if (typeof h == "function")
                      w = h, h = null;
                    else {
                      if (this.rest.options.promises)
                        return I.promisify(this, "history", arguments);
                      w = u;
                    }
                  if (h && h.untilAttach) {
                    if (this.state !== "attached") {
                      w(new o.default("option untilAttach requires the channel to be attached", 4e4, 400));
                      return;
                    }
                    if (!this.properties.attachSerial) {
                      w(new o.default("untilAttach was specified and channel is attached, but attachSerial is not defined", 4e4, 400));
                      return;
                    }
                    delete h.untilAttach, h.from_serial = this.properties.attachSerial;
                  }
                  T.default.prototype._history.call(this, h, w);
                }, i.whenState = function(h, w) {
                  return L.default.prototype.whenState.call(i, h, i.state, w);
                }, P.default.logAction(P.default.LOG_MINOR, "RealtimeChannel()", "started; name = " + e), i.realtime = t, i.presence = new M.default(i), i.connectionManager = t.connection.connectionManager, i.state = "initialized", i.subscriptions = new L.default(), i.syncChannelSerial = void 0, i.properties = {
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
                }, i._allChannelChanges = new L.default(), i;
              }
              return n.prototype.invalidStateError = function() {
                return new o.default("Channel operation failed as channel state is " + this.state, 90001, 400, this.errorReason || void 0);
              }, n.processListenerArgs = function(t) {
                return t = Array.prototype.slice.call(t), typeof t[0] == "function" && t.unshift(null), t[t.length - 1] == null && t.pop(), t;
              }, n.prototype.setOptions = function(t, e) {
                if (!e && this.rest.options.promises)
                  return I.promisify(this, "setOptions", arguments);
                var s = e || function(h) {
                  h && P.default.logAction(P.default.LOG_ERROR, "RealtimeChannel.setOptions()", "Set options failed: " + h.toString());
                }, i = c(t);
                if (i) {
                  s(i);
                  return;
                }
                T.default.prototype.setOptions.call(this, t), this._decodingContext && (this._decodingContext.channelOptions = this.channelOptions), this._shouldReattachToSetOptions(t) ? (this.attachImpl(), this._allChannelChanges.once(["attached", "update", "detached", "failed"], function(h) {
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
                  if (delete e.agent, Object.keys(e).length !== 0 && !this.params || this.params && !I.shallowEquals(this.params, e))
                    return !0;
                }
                return !!(t != null && t.modes && (!this.modes || !I.arrEquals(t.modes, this.modes)));
              }, n.prototype.publish = function() {
                for (var t = this, e = [], s = 0; s < arguments.length; s++)
                  e[s] = arguments[s];
                var i = e[0], h = e.length, w = e[h - 1];
                if (typeof w != "function") {
                  if (this.realtime.options.promises)
                    return I.promisify(this, "publish", arguments);
                  w = u, ++h;
                }
                if (!this.connectionManager.activeState()) {
                  w(this.connectionManager.getError());
                  return;
                }
                if (h == 2)
                  if (I.isObject(i))
                    i = [v.default.fromValues(i)];
                  else if (I.isArray(i))
                    i = v.default.fromValuesArray(i);
                  else
                    throw new o.default("The single-argument form of publish() expects a message object or an array of message objects", 40013, 400);
                else
                  i = [v.default.fromValues({ name: e[0], data: e[1] })];
                var b = this.realtime.options.maxMessageSize;
                v.default.encodeArray(i, this.channelOptions, function(E) {
                  if (E) {
                    w(E);
                    return;
                  }
                  var A = v.default.getMessagesSize(i);
                  if (A > b) {
                    w(new o.default("Maximum size of messages that can be published at once exceeded ( was " + A + " bytes; limit is " + b + " bytes)", 40009, 400));
                    return;
                  }
                  t.__publish(i, w);
                });
              }, n.prototype.__publish = function(t, e) {
                P.default.logAction(P.default.LOG_MICRO, "RealtimeChannel.publish()", "message count = " + t.length);
                var s = this.state;
                switch (s) {
                  case "failed":
                  case "suspended":
                    e(o.default.fromValues(this.invalidStateError()));
                    break;
                  default: {
                    P.default.logAction(P.default.LOG_MICRO, "RealtimeChannel.publish()", "sending message; channel state is " + s);
                    var i = new a.default();
                    i.action = S.MESSAGE, i.channel = this.name, i.messages = t, this.sendMessage(i, e);
                    break;
                  }
                }
              }, n.prototype.onEvent = function(t) {
                P.default.logAction(P.default.LOG_MICRO, "RealtimeChannel.onEvent()", "received message");
                for (var e = this.subscriptions, s = 0; s < t.length; s++) {
                  var i = t[s];
                  e.emit(i.name, i);
                }
              }, n.prototype.attach = function(t, e) {
                var s;
                if (typeof t == "function" ? (e = t, s = null) : s = t, !e) {
                  if (this.realtime.options.promises)
                    return I.promisify(this, "attach", arguments);
                  e = function(i) {
                    i && P.default.logAction(P.default.LOG_MAJOR, "RealtimeChannel.attach()", "Channel attach failed: " + i.toString());
                  };
                }
                if (s)
                  P.default.deprecated("channel.attach() with flags", "channel.setOptions() with channelOptions.params"), this._requestedFlags = s;
                else if (this.state === "attached") {
                  e(null, null);
                  return;
                }
                this._attach(!1, null, e);
              }, n.prototype._attach = function(t, e, s) {
                s || (s = function(h) {
                  h && P.default.logAction(P.default.LOG_ERROR, "RealtimeChannel._attach()", "Channel attach failed: " + h.toString());
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
                P.default.logAction(P.default.LOG_MICRO, "RealtimeChannel.attachImpl()", "sending ATTACH message");
                var t = a.default.fromValues({
                  action: S.ATTACH,
                  channel: this.name,
                  params: this.channelOptions.params,
                  // RTL4c1: Includes the channel serial to resume from a previous message
                  // or attachment.
                  channelSerial: this.properties.channelSerial
                });
                this._requestedFlags ? t.encodeModesToFlags(this._requestedFlags) : this.channelOptions.modes && t.encodeModesToFlags(I.allToUpperCase(this.channelOptions.modes)), this._attachResume && t.setFlag("ATTACH_RESUME"), this._lastPayload.decodeFailureRecoveryInProgress && (t.channelSerial = this._lastPayload.protocolMessageChannelSerial), this.sendMessage(t, u);
              }, n.prototype.detach = function(t) {
                if (!t) {
                  if (this.realtime.options.promises)
                    return I.promisify(this, "detach", arguments);
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
                P.default.logAction(P.default.LOG_MICRO, "RealtimeChannel.detach()", "sending DETACH message");
                var e = a.default.fromValues({ action: S.DETACH, channel: this.name });
                this.sendMessage(e, t || u);
              }, n.prototype.subscribe = function() {
                for (var t = [], e = 0; e < arguments.length; e++)
                  t[e] = arguments[e];
                var s = n.processListenerArgs(t), i = s[0], h = s[1], w = s[2];
                if (!w && this.realtime.options.promises)
                  return I.promisify(this, "subscribe", [i, h]);
                if (this.state === "failed") {
                  w == null || w(o.default.fromValues(this.invalidStateError()));
                  return;
                }
                return i && typeof i == "object" && !Array.isArray(i) ? this._subscribeFilter(i, h) : this.subscriptions.on(i, h), this.attach(w || u);
              }, n.prototype._subscribeFilter = function(t, e) {
                var s = function(i) {
                  var h, w, b, E, A, y, C = {
                    name: i.name,
                    refTimeserial: (w = (h = i.extras) === null || h === void 0 ? void 0 : h.ref) === null || w === void 0 ? void 0 : w.timeserial,
                    refType: (E = (b = i.extras) === null || b === void 0 ? void 0 : b.ref) === null || E === void 0 ? void 0 : E.type,
                    isRef: !!(!((y = (A = i.extras) === null || A === void 0 ? void 0 : A.ref) === null || y === void 0) && y.timeserial),
                    clientId: i.clientId
                  };
                  Object.entries(t).find(function(N) {
                    var U = N[0], G = N[1];
                    return G !== void 0 ? C[U] !== G : !1;
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
                  return Array.from(this.filteredSubscriptions.entries()).map(function(b) {
                    var E, A = b[0], y = b[1], C = y.get(t);
                    return y.delete(t), y.size === 0 && ((E = s.filteredSubscriptions) === null || E === void 0 || E.delete(A)), C;
                  }).reduce(function(b, E) {
                    var A;
                    return E ? (A = b).concat.apply(A, E) : b;
                  }, []);
                if (!e || !this.filteredSubscriptions.has(e))
                  return [];
                var i = this.filteredSubscriptions.get(e);
                if (!t) {
                  var h = Array.from(i.values()).reduce(function(b, E) {
                    return b.concat.apply(b, E);
                  }, []);
                  return this.filteredSubscriptions.delete(e), h;
                }
                var w = i.get(t);
                return i.delete(t), w || [];
              }, n.prototype.unsubscribe = function() {
                for (var t = this, e, s = [], i = 0; i < arguments.length; i++)
                  s[i] = arguments[i];
                var h = n.processListenerArgs(s), w = h[0], b = h[1];
                if (typeof w == "object" && !b || !((e = this.filteredSubscriptions) === null || e === void 0) && e.has(b)) {
                  this._getAndDeleteFilteredSubscriptions(w, b).forEach(function(E) {
                    return t.subscriptions.off(E);
                  });
                  return;
                }
                this.subscriptions.off(w, b);
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
                var e = a.default.fromValues({ action: S.SYNC, channel: this.name });
                this.syncChannelSerial && (e.channelSerial = this.syncChannelSerial), t.send(e);
              }, n.prototype.sendMessage = function(t, e) {
                this.connectionManager.send(t, this.realtime.options.queueMessages, e);
              }, n.prototype.sendPresence = function(t, e) {
                var s = a.default.fromValues({
                  action: S.PRESENCE,
                  channel: this.name,
                  presence: I.isArray(t) ? d.default.fromValuesArray(t) : [d.default.fromValues(t)]
                });
                this.sendMessage(s, e);
              }, n.prototype.onMessage = function(t) {
                (t.action === S.ATTACHED || t.action === S.MESSAGE || t.action === S.PRESENCE) && this.setChannelSerial(t.channelSerial);
                var e, s = !1;
                switch (t.action) {
                  case S.ATTACHED: {
                    this.properties.attachSerial = t.channelSerial, this._mode = t.getMode(), this.params = t.params || {};
                    var i = t.decodeModesFromFlags();
                    this.modes = i && I.allToLowerCase(i) || void 0;
                    var h = t.hasFlag("RESUMED"), w = t.hasFlag("HAS_PRESENCE"), b = t.hasFlag("HAS_BACKLOG");
                    if (this.state === "attached") {
                      h || this.presence.onAttached(w);
                      var E = new O.default(this.state, this.state, h, b, t.error);
                      this._allChannelChanges.emit("update", E), (!h || this.channelOptions.updateOnAttached) && this.emit("update", E);
                    } else
                      this.state === "detaching" ? this.checkPendingState() : this.notifyState("attached", t.error, h, w, b);
                    break;
                  }
                  case S.DETACHED: {
                    var A = t.error ? o.default.fromValues(t.error) : new o.default("Channel detached", 90001, 404);
                    this.state === "detaching" ? this.notifyState("detached", A) : this.state === "attaching" ? this.notifyState("suspended", A) : this.requestState("attaching", A);
                    break;
                  }
                  case S.SYNC:
                    if (s = !0, e = this.syncChannelSerial = t.channelSerial, !t.presence)
                      break;
                  case S.PRESENCE: {
                    for (var y = t.presence, C = t.id, N = t.connectionId, U = t.timestamp, G = this.channelOptions, V = void 0, Q = 0; Q < y.length; Q++)
                      try {
                        V = y[Q], d.default.decode(V, G), V.connectionId || (V.connectionId = N), V.timestamp || (V.timestamp = U), V.id || (V.id = C + ":" + Q);
                      } catch (W) {
                        P.default.logAction(P.default.LOG_ERROR, "RealtimeChannel.onMessage()", W.toString());
                      }
                    this.presence.setPresence(y, s, e);
                    break;
                  }
                  case S.MESSAGE: {
                    if (this.state !== "attached") {
                      P.default.logAction(P.default.LOG_MAJOR, "RealtimeChannel.onMessage()", 'Message "' + t.id + '" skipped as this channel "' + this.name + '" state is not "attached" (state is "' + this.state + '").');
                      return;
                    }
                    var H = t.messages, m = H[0], x = H[H.length - 1], C = t.id, N = t.connectionId, U = t.timestamp;
                    if (m.extras && m.extras.delta && m.extras.delta.from !== this._lastPayload.messageId) {
                      var D = 'Delta message decode failure - previous message not available for message "' + t.id + '" on this channel "' + this.name + '".';
                      P.default.logAction(P.default.LOG_ERROR, "RealtimeChannel.onMessage()", D), this._startDecodeFailureRecovery(new o.default(D, 40018, 400));
                      break;
                    }
                    for (var Q = 0; Q < H.length; Q++) {
                      var D = H[Q];
                      try {
                        v.default.decode(D, this._decodingContext);
                      } catch (tt) {
                        switch (P.default.logAction(P.default.LOG_ERROR, "RealtimeChannel.onMessage()", tt.toString()), tt.code) {
                          case 40018:
                            this._startDecodeFailureRecovery(tt);
                            return;
                          case 40019:
                          case 40021:
                            this.notifyState("failed", tt);
                            return;
                        }
                      }
                      D.connectionId || (D.connectionId = N), D.timestamp || (D.timestamp = U), D.id || (D.id = C + ":" + Q);
                    }
                    this._lastPayload.messageId = x.id, this._lastPayload.protocolMessageChannelSerial = t.channelSerial, this.onEvent(H);
                    break;
                  }
                  case S.ERROR: {
                    var B = t.error;
                    B && B.code == 80016 ? this.checkPendingState() : this.notifyState("failed", o.default.fromValues(B));
                    break;
                  }
                  default:
                    P.default.logAction(P.default.LOG_ERROR, "RealtimeChannel.onMessage()", "Fatal protocol error: unrecognised action (" + t.action + ")"), this.connectionManager.abort(R.default.unknownChannelErr());
                }
              }, n.prototype._startDecodeFailureRecovery = function(t) {
                var e = this;
                this._lastPayload.decodeFailureRecoveryInProgress || (P.default.logAction(P.default.LOG_MAJOR, "RealtimeChannel.onMessage()", "Starting decode failure recovery process."), this._lastPayload.decodeFailureRecoveryInProgress = !0, this._attach(!0, t, function() {
                  e._lastPayload.decodeFailureRecoveryInProgress = !1;
                }));
              }, n.prototype.onAttached = function() {
                P.default.logAction(P.default.LOG_MINOR, "RealtimeChannel.onAttached", "activating channel; name = " + this.name);
              }, n.prototype.notifyState = function(t, e, s, i, h) {
                if (P.default.logAction(P.default.LOG_MICRO, "RealtimeChannel.notifyState", "name = " + this.name + ", current state = " + this.state + ", notifying state " + t), this.clearStateTimer(), I.arrIn(["detached", "suspended", "failed"], t) && (this.properties.channelSerial = null), t !== this.state) {
                  this.presence.actOnChannelState(t, i, e), t === "suspended" && this.connectionManager.state.sendEvents ? this.startRetryTimer() : this.cancelRetryTimer(), e && (this.errorReason = e);
                  var w = new O.default(this.state, t, s, h, e), b = t === "failed" ? P.default.LOG_ERROR : P.default.LOG_MAJOR;
                  P.default.logAction(b, 'Channel state for channel "' + this.name + '"', t + (e ? "; reason: " + e : "")), t !== "attaching" && t !== "suspended" && (this.retryCount = 0), t === "attached" && this.onAttached(), t === "attached" ? this._attachResume = !0 : (t === "detaching" || t === "failed") && (this._attachResume = !1), this.state = t, this._allChannelChanges.emit(t, w), this.emit(t, w);
                }
              }, n.prototype.requestState = function(t, e) {
                P.default.logAction(P.default.LOG_MINOR, "RealtimeChannel.requestState", "name = " + this.name + ", state = " + t), this.notifyState(t, e), this.checkPendingState();
              }, n.prototype.checkPendingState = function() {
                var t = this.connectionManager.state;
                if (!(t.sendEvents || t.forceQueueEvents)) {
                  P.default.logAction(P.default.LOG_MINOR, "RealtimeChannel.checkPendingState", "sendEvents is false; state is " + this.connectionManager.state.state);
                  return;
                }
                switch (P.default.logAction(P.default.LOG_MINOR, "RealtimeChannel.checkPendingState", "name = " + this.name + ", state = " + this.state), this.state) {
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
                  P.default.logAction(P.default.LOG_MINOR, "RealtimeChannel.startStateTimerIfNotRunning", "timer expired"), t.stateTimer = null, t.timeoutPendingState();
                }, this.realtime.options.timeouts.realtimeRequestTimeout));
              }, n.prototype.clearStateTimer = function() {
                var t = this.stateTimer;
                t && (clearTimeout(t), this.stateTimer = null);
              }, n.prototype.startRetryTimer = function() {
                var t = this;
                if (!this.retryTimer) {
                  this.retryCount++;
                  var e = I.getRetryTime(this.realtime.options.timeouts.channelRetryTimeout, this.retryCount);
                  this.retryTimer = setTimeout(function() {
                    t.state === "suspended" && t.connectionManager.state.sendEvents && (t.retryTimer = null, P.default.logAction(P.default.LOG_MINOR, "RealtimeChannel retry timer expired", "attempting a new attach"), t.requestState("attaching"));
                  }, e);
                }
              }, n.prototype.cancelRetryTimer = function() {
                this.retryTimer && (clearTimeout(this.retryTimer), this.retryTimer = null);
              }, n.prototype.getReleaseErr = function() {
                var t = this.state;
                return t === "initialized" || t === "detached" || t === "failed" ? null : new o.default("Can only release a channel in a state where there is no possibility of further updates from the server being received (initialized, detached, or failed); was " + t, 90001, 400);
              }, n.prototype.setChannelSerial = function(t) {
                P.default.logAction(P.default.LOG_MICRO, "RealtimeChannel.setChannelSerial()", "Updating channel serial; serial = " + t + "; previous = " + this.properties.channelSerial), t && (this.properties.channelSerial = t);
              }, n;
            }(T.default)
          );
          g.default = l;
        },
        /* 39 */
        /***/
        function(F, g, f) {
          Object.defineProperty(g, "__esModule", { value: !0 });
          var p = (
            /** @class */
            function() {
              function a(L, I, T, P, M) {
                this.previous = L, this.current = I, I === "attached" && (this.resumed = T, this.hasBacklog = P), M && (this.reason = M);
              }
              return a;
            }()
          );
          g.default = p;
        },
        /* 40 */
        /***/
        function(F, g, f) {
          (function(p, a) {
            F.exports = a(f(6));
          })(this, function(p) {
            return function() {
              var a = p, L = a.lib, I = L.WordArray, T = L.Hasher, P = a.algo, M = [], v = P.SHA1 = T.extend({
                _doReset: function() {
                  this._hash = new I.init([
                    1732584193,
                    4023233417,
                    2562383102,
                    271733878,
                    3285377520
                  ]);
                },
                _doProcessBlock: function(O, o) {
                  for (var d = this._hash.words, R = d[0], S = d[1], u = d[2], c = d[3], l = d[4], r = 0; r < 80; r++) {
                    if (r < 16)
                      M[r] = O[o + r] | 0;
                    else {
                      var n = M[r - 3] ^ M[r - 8] ^ M[r - 14] ^ M[r - 16];
                      M[r] = n << 1 | n >>> 31;
                    }
                    var t = (R << 5 | R >>> 27) + l + M[r];
                    r < 20 ? t += (S & u | ~S & c) + 1518500249 : r < 40 ? t += (S ^ u ^ c) + 1859775393 : r < 60 ? t += (S & u | S & c | u & c) - 1894007588 : t += (S ^ u ^ c) - 899497514, l = c, c = u, u = S << 30 | S >>> 2, S = R, R = t;
                  }
                  d[0] = d[0] + R | 0, d[1] = d[1] + S | 0, d[2] = d[2] + u | 0, d[3] = d[3] + c | 0, d[4] = d[4] + l | 0;
                },
                _doFinalize: function() {
                  var O = this._data, o = O.words, d = this._nDataBytes * 8, R = O.sigBytes * 8;
                  return o[R >>> 5] |= 128 << 24 - R % 32, o[(R + 64 >>> 9 << 4) + 14] = Math.floor(d / 4294967296), o[(R + 64 >>> 9 << 4) + 15] = d, O.sigBytes = o.length * 4, this._process(), this._hash;
                },
                clone: function() {
                  var O = T.clone.call(this);
                  return O._hash = this._hash.clone(), O;
                }
              });
              a.SHA1 = T._createHelper(v), a.HmacSHA1 = T._createHmacHelper(v);
            }(), p.SHA1;
          });
        },
        /* 41 */
        /***/
        function(F, g, f) {
          Object.defineProperty(g, "__esModule", { value: !0 });
          function p(r) {
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
          function L(r, n, t) {
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
          function I(r) {
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
          function T(r, n) {
            var t = l(r, n);
            if (t !== 0) {
              var e = new ArrayBuffer(t), s = new DataView(e);
              return c(r, s, 0, n), e;
            }
          }
          var P = 65536 * 65536, M = 1 / P;
          function v(r, n) {
            return n = n || 0, r.getInt32(n) * P + r.getUint32(n + 4);
          }
          function O(r, n) {
            return n = n || 0, r.getUint32(n) * P + r.getUint32(n + 4);
          }
          function o(r, n, t) {
            t < 9223372036854776e3 ? (r.setInt32(n, Math.floor(t * M)), r.setInt32(n + 4, t & -1)) : (r.setUint32(n, 2147483647), r.setUint32(n + 4, 2147483647));
          }
          function d(r, n, t) {
            t < 18446744073709552e3 ? (r.setUint32(n, Math.floor(t * M)), r.setInt32(n + 4, t & -1)) : (r.setUint32(n, 4294967295), r.setUint32(n + 4, 4294967295));
          }
          var R = (
            /** @class */
            function() {
              function r(n, t) {
                var e = this;
                this.map = function(s) {
                  for (var i = {}, h = 0; h < s; h++) {
                    var w = e.parse();
                    i[w] = e.parse();
                  }
                  return i;
                }, this.bin = function(s) {
                  var i = new ArrayBuffer(s);
                  return new Uint8Array(i).set(new Uint8Array(e.view.buffer, e.offset, s), 0), e.offset += s, i;
                }, this.buf = this.bin, this.str = function(s) {
                  var i = L(e.view, e.offset, s);
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
                      return i = O(e.view, e.offset + 1), e.offset += 9, i;
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
          function S(r) {
            var n = new DataView(r), t = new R(n), e = t.parse();
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
              var i = I(r);
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
              var w, b = 0, E = void 0, A = Array.isArray(r);
              if (A ? w = r.length : (E = u(r, e), w = E.length), w < 16 ? (n.setUint8(t, w | (A ? 144 : 128)), b = 1) : w < 65536 ? (n.setUint8(t, A ? 220 : 222), n.setUint16(t + 1, w), b = 3) : w < 4294967296 && (n.setUint8(t, A ? 221 : 223), n.setUint32(t + 1, w), b = 5), A)
                for (var y = 0; y < w; y++)
                  b += c(r[y], n, t + b, e);
              else if (E)
                for (var y = 0; y < w; y++) {
                  var C = E[y];
                  b += c(C, n, t + b), b += c(r[C], n, t + b, e);
                }
              return b;
            }
            if (s === "function")
              return 0;
            throw new Error("Unknown type " + s);
          }
          function l(r, n) {
            var t = typeof r;
            if (t === "string") {
              var e = I(r);
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
                for (var w = 0; w < i; w++)
                  h += l(r[w], n);
              } else {
                var b = u(r, n);
                i = b.length;
                for (var w = 0; w < i; w++) {
                  var E = b[w];
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
          g.default = {
            encode: T,
            decode: S,
            inspect: p,
            utf8Write: a,
            utf8Read: L,
            utf8ByteCount: I
          };
        },
        /* 42 */
        /***/
        function(F, g, f) {
          Object.defineProperty(g, "__esModule", { value: !0 });
          var p = f(0), a = p.__importDefault(f(30)), L = p.__importDefault(f(50)), I = p.__importDefault(f(3)), T = p.__importDefault(f(4)), P = p.__importDefault(f(55)), M = p.__importDefault(f(57)), v = p.__importDefault(f(62)), O = p.__importDefault(f(64)), o = p.__importDefault(f(68)), d = p.__importDefault(f(2)), R = f(8), S = p.__importDefault(f(65)), u = p.__importDefault(f(66)), c = p.__importDefault(f(41)), l = (0, M.default)(O.default, P.default);
          I.default.Crypto = l, I.default.BufferUtils = P.default, I.default.Http = v.default, I.default.Config = O.default, I.default.Transports = o.default, I.default.WebStorage = S.default, a.default.Crypto = l, L.default.Crypto = l, d.default.initLogHandlers(), I.default.Defaults = (0, R.getDefaults)(u.default), I.default.Config.agent && (I.default.Defaults.agent += " " + I.default.Config.agent), I.default.Config.noUpgrade && (I.default.Defaults.upgradeTransports = []), g.default = {
            ErrorInfo: T.default,
            Rest: a.default,
            Realtime: L.default,
            msgpack: c.default
          };
        },
        /* 43 */
        /***/
        function(F) {
          F.exports = JSON.parse('{"name":"ably","description":"Realtime client library for Ably, the realtime messaging service","version":"1.2.47","license":"Apache-2.0","bugs":{"url":"https://github.com/ably/ably-js/issues","email":"support@ably.com"},"main":"./build/ably-node.js","typings":"./ably.d.ts","react-native":{"./build/ably-node.js":"./build/ably-reactnative.js"},"browser":{"./build/ably-node.js":"./build/ably-commonjs.js"},"files":["build/**","ably.d.ts","callbacks.d.ts","callbacks.js","promises.d.ts","promises.js","resources/**","src/**","react/**"],"dependencies":{"@ably/msgpack-js":"^0.4.0","got":"^11.8.5","ws":"^8.14.2"},"peerDependencies":{"react":">=16.8.0","react-dom":">=16.8.0"},"peerDependenciesMeta":{"react":{"optional":true},"react-dom":{"optional":true}},"devDependencies":{"@ably/vcdiff-decoder":"1.0.4","@testing-library/react":"^13.3.0","@types/crypto-js":"^4.0.1","@types/node":"^15.0.0","@types/request":"^2.48.7","@types/ws":"^8.2.0","@typescript-eslint/eslint-plugin":"^5.14.0","@typescript-eslint/parser":"^5.14.0","@vitejs/plugin-react":"^1.3.2","async":"ably-forks/async#requirejs","aws-sdk":"^2.1413.0","chai":"^4.2.0","copy-webpack-plugin":"^6.4.1","cors":"^2.8.5","crypto-js":"ably-forks/crypto-js#crypto-lite","eslint":"^7.13.0","eslint-plugin-import":"^2.28.0","eslint-plugin-jsdoc":"^40.0.0","eslint-plugin-react":"^7.32.2","eslint-plugin-react-hooks":"^4.6.0","eslint-plugin-security":"^1.4.0","express":"^4.17.1","glob":"~4.4","google-closure-compiler":"^20180610.0.1","grunt":"^1.6.1","grunt-bump":"^0.3.1","grunt-cli":"~1.2.0","grunt-closure-tools":"^1.0.0","grunt-contrib-concat":"~0.5","grunt-shell":"~1.1","grunt-webpack":"^4.0.2","hexy":"~0.2","jsdom":"^20.0.0","kexec":"ably-forks/node-kexec#update-for-node-12","minimist":"^1.2.5","mocha":"^8.1.3","null-loader":"^4.0.1","playwright":"^1.10.0","prettier":"^2.5.1","react":">=18.1.0","react-dom":">=18.1.0","requirejs":"~2.1","shelljs":"~0.8","source-map-explorer":"^2.5.2","ts-loader":"^8.2.0","tsconfig-paths-webpack-plugin":"^4.0.1","tslib":"^2.3.1","typedoc":"^0.23.8","typescript":"^4.6.4","vite":"^4.4.9","vitest":"^0.18.0","webpack":"^4.44.2","webpack-cli":"^4.2.0"},"engines":{"node":">=5.10.x"},"repository":"ably/ably-js","jspm":{"registry":"npm","directories":{"lib":"build"},"main":"ably"},"scripts":{"start:react":"npx vite serve","grunt":"grunt","test":"grunt test","test:node":"grunt test:node","test:node:skip-build":"grunt mocha","test:webserver":"grunt test:webserver","test:playwright":"node test/support/runPlaywrightTests.js","test:react":"vitest run","concat":"grunt concat","build":"grunt build:all && npm run build:react","build:node":"grunt build:node","build:browser":"grunt build:browser","build:react":"npm run build:react:mjs && npm run build:react:cjs && cp src/platform/react-hooks/res/package.react.json react/package.json","build:react:mjs":"tsc --project src/platform/react-hooks/tsconfig.mjs.json && cp src/platform/react-hooks/res/package.mjs.json react/mjs/package.json","build:react:cjs":"tsc --project src/platform/react-hooks/tsconfig.cjs.json && cp src/platform/react-hooks/res/package.cjs.json react/cjs/package.json","requirejs":"grunt requirejs","lint":"eslint .","lint:fix":"eslint --fix .","check-closure-compiler":"grunt check-closure-compiler","prepare":"npm run build","format":"prettier --write --ignore-path .gitignore --ignore-path .prettierignore src test ably.d.ts webpack.config.js Gruntfile.js scripts/cdn_deploy.js docs/chrome-mv3.md","format:check":"prettier --check --ignore-path .gitignore --ignore-path .prettierignore src test ably.d.ts webpack.config.js Gruntfile.js scripts/cdn_deploy.js","sourcemap":"source-map-explorer build/ably.min.js","sourcemap:noencryption":"source-map-explorer build/ably.noencryption.min.js","docs":"typedoc --entryPoints ably.d.ts --out docs/generated/default --readme docs/landing-pages/default.md && typedoc --entryPoints promises.d.ts --out docs/generated/promises --name \\"ably (Promise-based)\\" --readme docs/landing-pages/promises.md && cp docs/landing-pages/choose-library.html docs/generated/index.html"}}');
        },
        /* 44 */
        /***/
        function(F, g) {
        },
        /* 45 */
        /***/
        function(F, g, f) {
          (function(p, a) {
            F.exports = a(f(6), f(32), f(24));
          })(this, function(p) {
            return p.HmacSHA256;
          });
        },
        /* 46 */
        /***/
        function(F, g, f) {
          Object.defineProperty(g, "__esModule", { value: !0 });
          var p = f(0), a = p.__importStar(f(1)), L = p.__importDefault(f(47)), I = p.__importDefault(f(14)), T = p.__importDefault(f(19)), P = p.__importDefault(f(4)), M = p.__importDefault(f(48)), v = function() {
          }, O = (
            /** @class */
            function() {
              function S(u) {
                this.rest = u, this.admin = new o(u);
              }
              return S;
            }()
          ), o = (
            /** @class */
            function() {
              function S(u) {
                this.rest = u, this.deviceRegistrations = new d(u), this.channelSubscriptions = new R(u);
              }
              return S.prototype.publish = function(u, c, l) {
                var r = this.rest, n = r.options.useBinaryProtocol ? a.Format.msgpack : a.Format.json, t = a.defaultPostHeaders(r.options, n), e = {}, s = a.mixin({ recipient: u }, c);
                if (typeof l != "function") {
                  if (this.rest.options.promises)
                    return a.promisify(this, "publish", arguments);
                  l = v;
                }
                r.options.headers && a.mixin(t, r.options.headers), r.options.pushFullWait && a.mixin(e, { fullWait: "true" });
                var i = a.encodeBody(s, n);
                I.default.post(r, "/push/publish", i, t, e, null, function(h) {
                  return l(h);
                });
              }, S;
            }()
          ), d = (
            /** @class */
            function() {
              function S(u) {
                this.rest = u;
              }
              return S.prototype.save = function(u, c) {
                var l = this.rest, r = L.default.fromValues(u), n = l.options.useBinaryProtocol ? a.Format.msgpack : a.Format.json, t = a.defaultPostHeaders(l.options, n), e = {};
                if (typeof c != "function") {
                  if (this.rest.options.promises)
                    return a.promisify(this, "save", arguments);
                  c = v;
                }
                l.options.headers && a.mixin(t, l.options.headers), l.options.pushFullWait && a.mixin(e, { fullWait: "true" });
                var s = a.encodeBody(r, n);
                I.default.put(l, "/push/deviceRegistrations/" + encodeURIComponent(u.id), s, t, e, null, function(i, h, w, b) {
                  c(i, i ? void 0 : L.default.fromResponseBody(h, b ? void 0 : n));
                });
              }, S.prototype.get = function(u, c) {
                var l = this.rest, r = l.options.useBinaryProtocol ? a.Format.msgpack : a.Format.json, n = a.defaultGetHeaders(l.options, r), t = u.id || u;
                if (typeof c != "function") {
                  if (this.rest.options.promises)
                    return a.promisify(this, "get", arguments);
                  c = v;
                }
                if (typeof t != "string" || !t.length) {
                  c(new P.default("First argument to DeviceRegistrations#get must be a deviceId string or DeviceDetails", 4e4, 400));
                  return;
                }
                l.options.headers && a.mixin(n, l.options.headers), I.default.get(l, "/push/deviceRegistrations/" + encodeURIComponent(t), n, {}, null, function(e, s, i, h) {
                  c(e, e ? void 0 : L.default.fromResponseBody(s, h ? void 0 : r));
                });
              }, S.prototype.list = function(u, c) {
                var l = this.rest, r = l.options.useBinaryProtocol ? a.Format.msgpack : a.Format.json, n = this.rest.http.supportsLinkHeaders ? void 0 : r, t = a.defaultGetHeaders(l.options, r);
                if (typeof c != "function") {
                  if (this.rest.options.promises)
                    return a.promisify(this, "list", arguments);
                  c = v;
                }
                l.options.headers && a.mixin(t, l.options.headers), new T.default(l, "/push/deviceRegistrations", t, n, function(e, s, i) {
                  return L.default.fromResponseBody(e, i ? void 0 : r);
                }).get(u, c);
              }, S.prototype.remove = function(u, c) {
                var l = this.rest, r = l.options.useBinaryProtocol ? a.Format.msgpack : a.Format.json, n = a.defaultGetHeaders(l.options, r), t = {}, e = u.id || u;
                if (typeof c != "function") {
                  if (this.rest.options.promises)
                    return a.promisify(this, "remove", arguments);
                  c = v;
                }
                if (typeof e != "string" || !e.length) {
                  c(new P.default("First argument to DeviceRegistrations#remove must be a deviceId string or DeviceDetails", 4e4, 400));
                  return;
                }
                l.options.headers && a.mixin(n, l.options.headers), l.options.pushFullWait && a.mixin(t, { fullWait: "true" }), I.default.delete(l, "/push/deviceRegistrations/" + encodeURIComponent(e), n, t, null, function(s) {
                  return c(s);
                });
              }, S.prototype.removeWhere = function(u, c) {
                var l = this.rest, r = l.options.useBinaryProtocol ? a.Format.msgpack : a.Format.json, n = a.defaultGetHeaders(l.options, r);
                if (typeof c != "function") {
                  if (this.rest.options.promises)
                    return a.promisify(this, "removeWhere", arguments);
                  c = v;
                }
                l.options.headers && a.mixin(n, l.options.headers), l.options.pushFullWait && a.mixin(u, { fullWait: "true" }), I.default.delete(l, "/push/deviceRegistrations", n, u, null, function(t) {
                  return c(t);
                });
              }, S;
            }()
          ), R = (
            /** @class */
            function() {
              function S(u) {
                this.remove = S.prototype.removeWhere, this.rest = u;
              }
              return S.prototype.save = function(u, c) {
                var l = this.rest, r = M.default.fromValues(u), n = l.options.useBinaryProtocol ? a.Format.msgpack : a.Format.json, t = a.defaultPostHeaders(l.options, n), e = {};
                if (typeof c != "function") {
                  if (this.rest.options.promises)
                    return a.promisify(this, "save", arguments);
                  c = v;
                }
                l.options.headers && a.mixin(t, l.options.headers), l.options.pushFullWait && a.mixin(e, { fullWait: "true" });
                var s = a.encodeBody(r, n);
                I.default.post(l, "/push/channelSubscriptions", s, t, e, null, function(i, h, w, b) {
                  c(i, !i && M.default.fromResponseBody(h, b ? void 0 : n));
                });
              }, S.prototype.list = function(u, c) {
                var l = this.rest, r = l.options.useBinaryProtocol ? a.Format.msgpack : a.Format.json, n = this.rest.http.supportsLinkHeaders ? void 0 : r, t = a.defaultGetHeaders(l.options, r);
                if (typeof c != "function") {
                  if (this.rest.options.promises)
                    return a.promisify(this, "list", arguments);
                  c = v;
                }
                l.options.headers && a.mixin(t, l.options.headers), new T.default(l, "/push/channelSubscriptions", t, n, function(e, s, i) {
                  return M.default.fromResponseBody(e, i ? void 0 : r);
                }).get(u, c);
              }, S.prototype.removeWhere = function(u, c) {
                var l = this.rest, r = l.options.useBinaryProtocol ? a.Format.msgpack : a.Format.json, n = a.defaultGetHeaders(l.options, r);
                if (typeof c != "function") {
                  if (this.rest.options.promises)
                    return a.promisify(this, "removeWhere", arguments);
                  c = v;
                }
                l.options.headers && a.mixin(n, l.options.headers), l.options.pushFullWait && a.mixin(u, { fullWait: "true" }), I.default.delete(l, "/push/channelSubscriptions", n, u, null, function(t) {
                  return c(t);
                });
              }, S.prototype.listChannels = function(u, c) {
                var l = this.rest, r = l.options.useBinaryProtocol ? a.Format.msgpack : a.Format.json, n = this.rest.http.supportsLinkHeaders ? void 0 : r, t = a.defaultGetHeaders(l.options, r);
                if (typeof c != "function") {
                  if (this.rest.options.promises)
                    return a.promisify(this, "listChannels", arguments);
                  c = v;
                }
                l.options.headers && a.mixin(t, l.options.headers), l.options.pushFullWait && a.mixin(u, { fullWait: "true" }), new T.default(l, "/push/channels", t, n, function(e, s, i) {
                  for (var h = !i && r ? a.decodeBody(e, r) : e, w = 0; w < h.length; w++)
                    h[w] = String(h[w]);
                  return h;
                }).get(u, c);
              }, S;
            }()
          );
          g.default = O;
        },
        /* 47 */
        /***/
        function(F, g, f) {
          Object.defineProperty(g, "__esModule", { value: !0 });
          var p = f(0), a = p.__importStar(f(1)), L = p.__importDefault(f(4)), I;
          (function(M) {
            M.Phone = "phone", M.Tablet = "tablet", M.Desktop = "desktop", M.TV = "tv", M.Watch = "watch", M.Car = "car", M.Embedded = "embedded", M.Other = "other";
          })(I || (I = {}));
          var T;
          (function(M) {
            M.Android = "android", M.IOS = "ios", M.Browser = "browser";
          })(T || (T = {}));
          var P = (
            /** @class */
            function() {
              function M() {
              }
              return M.prototype.toJSON = function() {
                var v, O, o;
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
                    state: (O = this.push) === null || O === void 0 ? void 0 : O.state,
                    error: (o = this.push) === null || o === void 0 ? void 0 : o.error
                  }
                };
              }, M.prototype.toString = function() {
                var v, O, o, d, R = "[DeviceDetails";
                return this.id && (R += "; id=" + this.id), this.platform && (R += "; platform=" + this.platform), this.formFactor && (R += "; formFactor=" + this.formFactor), this.clientId && (R += "; clientId=" + this.clientId), this.metadata && (R += "; metadata=" + this.metadata), this.deviceIdentityToken && (R += "; deviceIdentityToken=" + JSON.stringify(this.deviceIdentityToken)), !((v = this.push) === null || v === void 0) && v.recipient && (R += "; push.recipient=" + JSON.stringify(this.push.recipient)), !((O = this.push) === null || O === void 0) && O.state && (R += "; push.state=" + this.push.state), !((o = this.push) === null || o === void 0) && o.error && (R += "; push.error=" + JSON.stringify(this.push.error)), !((d = this.push) === null || d === void 0) && d.metadata && (R += "; push.metadata=" + this.push.metadata), R += "]", R;
              }, M.fromResponseBody = function(v, O) {
                return O && (v = a.decodeBody(v, O)), a.isArray(v) ? M.fromValuesArray(v) : M.fromValues(v);
              }, M.fromValues = function(v) {
                return v.error = v.error && L.default.fromValues(v.error), Object.assign(new M(), v);
              }, M.fromValuesArray = function(v) {
                for (var O = v.length, o = new Array(O), d = 0; d < O; d++)
                  o[d] = M.fromValues(v[d]);
                return o;
              }, M.toRequestBody = a.encodeBody, M;
            }()
          );
          g.default = P;
        },
        /* 48 */
        /***/
        function(F, g, f) {
          Object.defineProperty(g, "__esModule", { value: !0 });
          var p = f(0), a = p.__importStar(f(1)), L = (
            /** @class */
            function() {
              function I() {
              }
              return I.prototype.toJSON = function() {
                return {
                  channel: this.channel,
                  deviceId: this.deviceId,
                  clientId: this.clientId
                };
              }, I.prototype.toString = function() {
                var T = "[PushChannelSubscription";
                return this.channel && (T += "; channel=" + this.channel), this.deviceId && (T += "; deviceId=" + this.deviceId), this.clientId && (T += "; clientId=" + this.clientId), T += "]", T;
              }, I.fromResponseBody = function(T, P) {
                return P && (T = a.decodeBody(T, P)), a.isArray(T) ? I.fromValuesArray(T) : I.fromValues(T);
              }, I.fromValues = function(T) {
                return Object.assign(new I(), T);
              }, I.fromValuesArray = function(T) {
                for (var P = T.length, M = new Array(P), v = 0; v < P; v++)
                  M[v] = I.fromValues(T[v]);
                return M;
              }, I.toRequestBody = a.encodeBody, I;
            }()
          );
          g.default = L;
        },
        /* 49 */
        /***/
        function(F, g, f) {
          Object.defineProperty(g, "__esModule", { value: !0 });
          var p = f(0), a = p.__importStar(f(1)), L = (
            /** @class */
            function() {
              function l(r) {
                this.count = r && r.count || 0, this.data = r && r.data || 0, this.uncompressedData = r && r.uncompressedData || 0, this.failed = r && r.failed || 0, this.refused = r && r.refused || 0;
              }
              return l;
            }()
          ), I = (
            /** @class */
            function(l) {
              p.__extends(r, l);
              function r(n) {
                var t = l.call(this, n) || this;
                return n && n.category && (t.category = {}, a.forInOwnNonNullProperties(n.category, function(e) {
                  t.category[e] = new L(n.category[e]);
                })), t;
              }
              return r;
            }(L)
          ), T = (
            /** @class */
            function() {
              function l(r) {
                this.peak = r && r.peak || 0, this.min = r && r.min || 0, this.mean = r && r.mean || 0, this.opened = r && r.opened || 0, this.refused = r && r.refused || 0;
              }
              return l;
            }()
          ), P = (
            /** @class */
            function() {
              function l(r) {
                this.succeeded = r && r.succeeded || 0, this.failed = r && r.failed || 0, this.refused = r && r.refused || 0;
              }
              return l;
            }()
          ), M = (
            /** @class */
            function() {
              function l(r) {
                this.plain = new T(r && r.plain), this.tls = new T(r && r.tls), this.all = new T(r && r.all);
              }
              return l;
            }()
          ), v = (
            /** @class */
            function() {
              function l(r) {
                this.messages = new I(r && r.messages), this.presence = new I(r && r.presence), this.all = new I(r && r.all);
              }
              return l;
            }()
          ), O = (
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
                this.all = new v(r && r.all), this.inbound = new O(r && r.inbound), this.outbound = new O(r && r.outbound);
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
          ), R = (
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
          ), S = (
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
                  n.delta[t] = new S(r.delta[t]);
                }));
              }
              return l;
            }()
          ), c = (
            /** @class */
            function(l) {
              p.__extends(r, l);
              function r(n) {
                var t = l.call(this, n) || this;
                return t.persisted = new v(n && n.persisted), t.connections = new M(n && n.connections), t.channels = new T(n && n.channels), t.apiRequests = new P(n && n.apiRequests), t.tokenRequests = new P(n && n.tokenRequests), t.xchgProducer = new d(n && n.xchgProducer), t.xchgConsumer = new d(n && n.xchgConsumer), t.push = new R(n && n.pushStats), t.processed = new u(n && n.processed), t.inProgress = n && n.inProgress || void 0, t.unit = n && n.unit || void 0, t.intervalId = n && n.intervalId || void 0, t;
              }
              return r.fromValues = function(n) {
                return new r(n);
              }, r;
            }(o)
          );
          g.default = c;
        },
        /* 50 */
        /***/
        function(F, g, f) {
          Object.defineProperty(g, "__esModule", { value: !0 });
          var p = f(0), a = p.__importStar(f(1)), L = p.__importDefault(f(30)), I = p.__importDefault(f(7)), T = p.__importDefault(f(2)), P = p.__importDefault(f(51)), M = p.__importDefault(f(38)), v = p.__importDefault(f(8)), O = p.__importDefault(f(4)), o = p.__importDefault(f(10)), d = p.__importDefault(f(35)), R = p.__importDefault(f(3)), S = p.__importDefault(f(9)), u = (
            /** @class */
            function(l) {
              p.__extends(r, l);
              function r(n) {
                var t = l.call(this, n) || this;
                return T.default.logAction(T.default.LOG_MINOR, "Realtime()", ""), t.connection = new P.default(t, t.options), t.channels = new c(t), n.autoConnect !== !1 && t.connect(), t;
              }
              return r.prototype.connect = function() {
                T.default.logAction(T.default.LOG_MINOR, "Realtime.connect()", ""), this.connection.connect();
              }, r.prototype.close = function() {
                T.default.logAction(T.default.LOG_MINOR, "Realtime.close()", ""), this.connection.close();
              }, r.Promise = function(n) {
                return n = v.default.objectifyOptions(n), n.promises = !0, new r(n);
              }, r.Callbacks = r, r.Utils = a, r.ConnectionManager = d.default, r.Platform = R.default, r.ProtocolMessage = o.default, r.Message = S.default, r;
            }(L.default)
          ), c = (
            /** @class */
            function(l) {
              p.__extends(r, l);
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
                  T.default.logAction(T.default.LOG_ERROR, "Channels.onChannelMessage()", "received event unspecified channel, action = " + n.action);
                  return;
                }
                var e = this.all[t];
                if (!e) {
                  T.default.logAction(T.default.LOG_ERROR, "Channels.onChannelMessage()", "received event for non-existent channel: " + t);
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
                  var w = this.all[h];
                  a.arrIn(s, w.state) && w.notifyState(i, t);
                }
              }, r.prototype.get = function(n, t) {
                n = String(n);
                var e = this.all[n];
                if (!e)
                  e = this.all[n] = new M.default(this.realtime, n, t);
                else if (t) {
                  if (e._shouldReattachToSetOptions(t))
                    throw new O.default("Channels.get() cannot be used to set channel options that would cause the channel to reattach. Please, use RealtimeChannel.setOptions() instead.", 4e4, 400);
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
            }(I.default)
          );
          g.default = u;
        },
        /* 51 */
        /***/
        function(F, g, f) {
          Object.defineProperty(g, "__esModule", { value: !0 });
          var p = f(0), a = p.__importStar(f(1)), L = p.__importDefault(f(7)), I = p.__importDefault(f(35)), T = p.__importDefault(f(2)), P = p.__importDefault(f(37)), M = p.__importDefault(f(3));
          function v() {
          }
          var O = (
            /** @class */
            function(o) {
              p.__extends(d, o);
              function d(R, S) {
                var u = o.call(this) || this;
                return u.whenState = function(c, l) {
                  return L.default.prototype.whenState.call(u, c, u.state, l, new P.default(void 0, c));
                }, u.ably = R, u.connectionManager = new I.default(R, S), u.state = u.connectionManager.state.state, u.key = void 0, u.id = void 0, u.errorReason = null, u.connectionManager.on("connectionstate", function(c) {
                  var l = u.state = c.current;
                  M.default.Config.nextTick(function() {
                    u.emit(l, c);
                  });
                }), u.connectionManager.on("update", function(c) {
                  M.default.Config.nextTick(function() {
                    u.emit("update", c);
                  });
                }), u;
              }
              return d.prototype.connect = function() {
                T.default.logAction(T.default.LOG_MINOR, "Connection.connect()", ""), this.connectionManager.requestState({ state: "connecting" });
              }, d.prototype.ping = function(R) {
                if (T.default.logAction(T.default.LOG_MINOR, "Connection.ping()", ""), !R) {
                  if (this.ably.options.promises)
                    return a.promisify(this, "ping", arguments);
                  R = v;
                }
                this.connectionManager.ping(null, R);
              }, d.prototype.close = function() {
                T.default.logAction(T.default.LOG_MINOR, "Connection.close()", "connectionKey = " + this.key), this.connectionManager.requestState({ state: "closing" });
              }, Object.defineProperty(d.prototype, "recoveryKey", {
                get: function() {
                  return this.createRecoveryKey();
                },
                enumerable: !1,
                configurable: !0
              }), d.prototype.createRecoveryKey = function() {
                return this.connectionManager.createRecoveryKey();
              }, d;
            }(L.default)
          );
          g.default = O;
        },
        /* 52 */
        /***/
        function(F, g, f) {
          Object.defineProperty(g, "__esModule", { value: !0 }), g.PendingMessage = void 0;
          var p = f(0), a = p.__importDefault(f(10)), L = p.__importStar(f(1)), I = p.__importDefault(f(7)), T = p.__importDefault(f(2)), P = p.__importDefault(f(36)), M = p.__importDefault(f(4)), v = a.default.Action, O = (
            /** @class */
            function() {
              function d(R, S) {
                this.message = R, this.callback = S, this.merged = !1;
                var u = R.action;
                this.sendAttempted = !1, this.ackRequired = u == v.MESSAGE || u == v.PRESENCE;
              }
              return d;
            }()
          );
          g.PendingMessage = O;
          var o = (
            /** @class */
            function(d) {
              p.__extends(R, d);
              function R(S) {
                var u = d.call(this) || this;
                return u.transport = S, u.messageQueue = new P.default(), S.on("ack", function(c, l) {
                  u.onAck(c, l);
                }), S.on("nack", function(c, l, r) {
                  u.onNack(c, l, r);
                }), u;
              }
              return R.prototype.onAck = function(S, u) {
                T.default.logAction(T.default.LOG_MICRO, "Protocol.onAck()", "serial = " + S + "; count = " + u), this.messageQueue.completeMessages(S, u);
              }, R.prototype.onNack = function(S, u, c) {
                T.default.logAction(T.default.LOG_ERROR, "Protocol.onNack()", "serial = " + S + "; count = " + u + "; err = " + L.inspectError(c)), c || (c = new M.default("Unable to send message; channel not responding", 50001, 500)), this.messageQueue.completeMessages(S, u, c);
              }, R.prototype.onceIdle = function(S) {
                var u = this.messageQueue;
                if (u.count() === 0) {
                  S();
                  return;
                }
                u.once("idle", S);
              }, R.prototype.send = function(S) {
                S.ackRequired && this.messageQueue.push(S), T.default.shouldLog(T.default.LOG_MICRO) && T.default.logAction(T.default.LOG_MICRO, "Protocol.send()", "sending msg; " + a.default.stringify(S.message)), S.sendAttempted = !0, this.transport.send(S.message);
              }, R.prototype.getTransport = function() {
                return this.transport;
              }, R.prototype.getPendingMessages = function() {
                return this.messageQueue.copyAll();
              }, R.prototype.clearPendingMessages = function() {
                return this.messageQueue.clear();
              }, R.prototype.finish = function() {
                var S = this.transport;
                this.onceIdle(function() {
                  S.disconnect();
                });
              }, R;
            }(I.default)
          );
          g.default = o;
        },
        /* 53 */
        /***/
        function(F, g, f) {
          Object.defineProperty(g, "__esModule", { value: !0 });
          var p = f(0), a = p.__importDefault(f(3)), L = p.__importStar(f(1)), I = p.__importDefault(f(26)), T = p.__importDefault(f(8)), P = p.__importDefault(f(2)), M = p.__importDefault(f(10)), v = p.__importDefault(f(4)), O = "web_socket";
          function o(S) {
            return !!S.on;
          }
          var d = (
            /** @class */
            function(S) {
              p.__extends(u, S);
              function u(c, l, r) {
                var n = S.call(this, c, l, r) || this;
                return n.shortName = O, r.heartbeats = a.default.Config.useProtocolHeartbeats, n.wsHost = T.default.getHost(r.options, r.host, !0), n;
              }
              return u.isAvailable = function() {
                return !!a.default.Config.WebSocket;
              }, u.prototype.createWebSocket = function(c, l) {
                return this.uri = c + L.toQueryString(l), new a.default.Config.WebSocket(this.uri);
              }, u.prototype.toString = function() {
                return "WebSocketTransport; uri=" + this.uri;
              }, u.prototype.connect = function() {
                P.default.logAction(P.default.LOG_MINOR, "WebSocketTransport.connect()", "starting"), I.default.prototype.connect.call(this);
                var c = this, l = this.params, r = l.options, n = r.tls ? "wss://" : "ws://", t = n + this.wsHost + ":" + T.default.getPort(r) + "/";
                P.default.logAction(P.default.LOG_MINOR, "WebSocketTransport.connect()", "uri: " + t), this.auth.getAuthParams(function(e, s) {
                  if (!c.isDisposed) {
                    var i = "";
                    for (var h in s)
                      i += " " + h + ": " + s[h] + ";";
                    if (P.default.logAction(P.default.LOG_MINOR, "WebSocketTransport.connect()", "authParams:" + i + " err: " + e), e) {
                      c.disconnect(e);
                      return;
                    }
                    var w = l.getConnectParams(s);
                    try {
                      var b = c.wsConnection = c.createWebSocket(t, w);
                      b.binaryType = a.default.Config.binaryType, b.onopen = function() {
                        c.onWsOpen();
                      }, b.onclose = function(E) {
                        c.onWsClose(E);
                      }, b.onmessage = function(E) {
                        c.onWsData(E.data);
                      }, b.onerror = function(E) {
                        c.onWsError(E);
                      }, o(b) && b.on("ping", function() {
                        c.onActivity();
                      });
                    } catch (E) {
                      P.default.logAction(P.default.LOG_ERROR, "WebSocketTransport.connect()", "Unexpected exception creating websocket: err = " + (E.stack || E.message)), c.disconnect(E);
                    }
                  }
                });
              }, u.prototype.send = function(c) {
                var l = this.wsConnection;
                if (!l) {
                  P.default.logAction(P.default.LOG_ERROR, "WebSocketTransport.send()", "No socket connection");
                  return;
                }
                try {
                  l.send(M.default.serialize(c, this.params.format));
                } catch (n) {
                  var r = "Exception from ws connection when trying to send: " + L.inspectError(n);
                  P.default.logAction(P.default.LOG_ERROR, "WebSocketTransport.send()", r), this.finish("disconnected", new v.default(r, 5e4, 500));
                }
              }, u.prototype.onWsData = function(c) {
                P.default.logAction(P.default.LOG_MICRO, "WebSocketTransport.onWsData()", "data received; length = " + c.length + "; type = " + typeof c);
                try {
                  this.onProtocolMessage(M.default.deserialize(c, this.format));
                } catch (l) {
                  P.default.logAction(P.default.LOG_ERROR, "WebSocketTransport.onWsData()", "Unexpected exception handing channel message: " + l.stack);
                }
              }, u.prototype.onWsOpen = function() {
                P.default.logAction(P.default.LOG_MINOR, "WebSocketTransport.onWsOpen()", "opened WebSocket"), this.emit("preconnect");
              }, u.prototype.onWsClose = function(c) {
                var l, r;
                if (typeof c == "object" ? (r = c.code, l = c.wasClean || r === 1e3) : (r = c, l = r == 1e3), delete this.wsConnection, l) {
                  P.default.logAction(P.default.LOG_MINOR, "WebSocketTransport.onWsClose()", "Cleanly closed WebSocket");
                  var n = new v.default("Websocket closed", 80003, 400);
                  this.finish("disconnected", n);
                } else {
                  var t = "Unclean disconnection of WebSocket ; code = " + r, n = new v.default(t, 80003, 400);
                  P.default.logAction(P.default.LOG_MINOR, "WebSocketTransport.onWsClose()", t), this.finish("disconnected", n);
                }
                this.emit("disposed");
              }, u.prototype.onWsError = function(c) {
                var l = this;
                P.default.logAction(P.default.LOG_MINOR, "WebSocketTransport.onError()", "Error from WebSocket: " + c.message), a.default.Config.nextTick(function() {
                  l.disconnect(Error(c.message));
                });
              }, u.prototype.dispose = function() {
                P.default.logAction(P.default.LOG_MINOR, "WebSocketTransport.dispose()", ""), this.isDisposed = !0;
                var c = this.wsConnection;
                c && (c.onmessage = function() {
                }, delete this.wsConnection, a.default.Config.nextTick(function() {
                  if (P.default.logAction(P.default.LOG_MICRO, "WebSocketTransport.dispose()", "closing websocket"), !c)
                    throw new Error("WebSocketTransport.dispose(): wsConnection is not defined");
                  c.close();
                }));
              }, u;
            }(I.default)
          );
          function R(S) {
            return d.isAvailable() && (S.supportedTransports[O] = d), d;
          }
          g.default = R;
        },
        /* 54 */
        /***/
        function(F, g, f) {
          Object.defineProperty(g, "__esModule", { value: !0 });
          var p = f(0), a = p.__importStar(f(1)), L = p.__importDefault(f(34)), I = p.__importDefault(f(7)), T = p.__importDefault(f(2)), P = p.__importDefault(f(15)), M = p.__importStar(f(4)), v = p.__importDefault(f(38)), O = p.__importDefault(f(23)), o = p.__importDefault(f(39)), d = function() {
          };
          function R(n) {
            return n.channel.realtime.auth.clientId;
          }
          function S(n) {
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
                t(M.default.fromValues(n.invalidStateError()));
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
              p.__extends(t, n);
              function t(e) {
                var s = n.call(this, e) || this;
                return s.channel = e, s.syncComplete = !1, s.members = new r(s, function(i) {
                  return i.clientId + ":" + i.connectionId;
                }), s._myMembers = new r(s, function(i) {
                  return i.clientId;
                }), s.subscriptions = new I.default(), s.pendingPresence = [], s;
              }
              return t.prototype.enter = function(e, s) {
                if (S(this))
                  throw new M.default("clientId must be specified to enter a presence channel", 40012, 400);
                return this._enterOrUpdateClient(void 0, void 0, e, "enter", s);
              }, t.prototype.update = function(e, s) {
                if (S(this))
                  throw new M.default("clientId must be specified to update presence data", 40012, 400);
                return this._enterOrUpdateClient(void 0, void 0, e, "update", s);
              }, t.prototype.enterClient = function(e, s, i) {
                return this._enterOrUpdateClient(void 0, e, s, "enter", i);
              }, t.prototype.updateClient = function(e, s, i) {
                return this._enterOrUpdateClient(void 0, e, s, "update", i);
              }, t.prototype._enterOrUpdateClient = function(e, s, i, h, w) {
                var b = this;
                if (!w)
                  if (typeof i == "function")
                    w = i, i = null;
                  else {
                    if (this.channel.realtime.options.promises)
                      return a.promisify(this, "_enterOrUpdateClient", [e, s, i, h]);
                    w = d;
                  }
                var E = this.channel;
                if (!E.connectionManager.activeState()) {
                  w(E.connectionManager.getError());
                  return;
                }
                T.default.logAction(T.default.LOG_MICRO, "RealtimePresence." + h + "Client()", "channel = " + E.name + ", id = " + e + ", client = " + (s || "(implicit) " + R(this)));
                var A = P.default.fromData(i);
                A.action = h, e && (A.id = e), s && (A.clientId = s), P.default.encode(A, E.channelOptions, function(y) {
                  if (y) {
                    w(y);
                    return;
                  }
                  switch (E.state) {
                    case "attached":
                      E.sendPresence(A, w);
                      break;
                    case "initialized":
                    case "detached":
                      E.attach();
                    case "attaching":
                      b.pendingPresence.push({
                        presence: A,
                        callback: w
                      });
                      break;
                    default:
                      y = new M.PartialErrorInfo("Unable to " + h + " presence channel while in " + E.state + " state", 90001), y.code = 90001, w(y);
                  }
                });
              }, t.prototype.leave = function(e, s) {
                if (S(this))
                  throw new M.default("clientId must have been specified to enter or leave a presence channel", 40012, 400);
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
                T.default.logAction(T.default.LOG_MICRO, "RealtimePresence.leaveClient()", "leaving; channel = " + this.channel.name + ", client = " + e);
                var w = P.default.fromData(s);
                switch (w.action = "leave", e && (w.clientId = e), h.state) {
                  case "attached":
                    h.sendPresence(w, i);
                    break;
                  case "attaching":
                    this.pendingPresence.push({
                      presence: w,
                      callback: i
                    });
                    break;
                  case "initialized":
                  case "failed": {
                    var b = new M.PartialErrorInfo("Unable to leave presence channel (incompatible state)", 90001);
                    i == null || i(b);
                    break;
                  }
                  default:
                    i == null || i(h.invalidStateError());
                }
              }, t.prototype.get = function(e, s) {
                var i = this, h = Array.prototype.slice.call(arguments);
                h.length == 1 && typeof h[0] == "function" && h.unshift(null), e = h[0], s = h[1];
                var w = !e || ("waitForSync" in e ? e.waitForSync : !0);
                if (!s) {
                  if (this.channel.realtime.options.promises)
                    return a.promisify(this, "get", h);
                  s = d;
                }
                function b(E) {
                  s(null, e ? E.list(e) : E.values());
                }
                if (this.channel.state === "suspended") {
                  w ? s(M.default.fromValues({
                    statusCode: 400,
                    code: 91005,
                    message: "Presence state is out of sync due to channel being in the SUSPENDED state"
                  })) : b(this.members);
                  return;
                }
                u(this.channel, s, function() {
                  var E = i.members;
                  w ? E.waitSync(function() {
                    b(E);
                  }) : b(E);
                });
              }, t.prototype.history = function(e, s) {
                if (T.default.logAction(T.default.LOG_MICRO, "RealtimePresence.history()", "channel = " + this.name), s === void 0)
                  if (typeof e == "function")
                    s = e, e = null;
                  else {
                    if (this.channel.realtime.options.promises)
                      return a.promisify(this, "history", arguments);
                    s = d;
                  }
                e && e.untilAttach && (this.channel.state === "attached" ? (delete e.untilAttach, e.from_serial = this.channel.properties.attachSerial) : s(new M.default("option untilAttach requires the channel to be attached, was: " + this.channel.state, 4e4, 400))), L.default.prototype._history.call(this, e, s);
              }, t.prototype.setPresence = function(e, s, i) {
                T.default.logAction(T.default.LOG_MICRO, "RealtimePresence.setPresence()", "received presence for " + e.length + " participants; syncChannelSerial = " + i);
                var h, w, b = this.members, E = this._myMembers, A = [], y = this.channel.connectionManager.connectionId;
                s && (this.members.startSync(), i && (w = i.match(/^[\w-]+:(.*)$/)) && (h = w[1]));
                for (var C = 0; C < e.length; C++) {
                  var N = P.default.fromValues(e[C]);
                  switch (N.action) {
                    case "leave":
                      b.remove(N) && A.push(N), N.connectionId === y && !N.isSynthesized() && E.remove(N);
                      break;
                    case "enter":
                    case "present":
                    case "update":
                      b.put(N) && A.push(N), N.connectionId === y && E.put(N);
                      break;
                  }
                }
                s && !h && (b.endSync(), this.channel.syncChannelSerial = null);
                for (var C = 0; C < A.length; C++) {
                  var N = A[C];
                  this.subscriptions.emit(N.action, N);
                }
              }, t.prototype.onAttached = function(e) {
                T.default.logAction(T.default.LOG_MINOR, "RealtimePresence.onAttached()", "channel = " + this.channel.name + ", hasPresence = " + e), e ? this.members.startSync() : (this._synthesizeLeaves(this.members.values()), this.members.clear()), this._ensureMyMembersPresent();
                var s = this.pendingPresence, i = s.length;
                if (i) {
                  this.pendingPresence = [];
                  var h = [], w = O.default.create();
                  T.default.logAction(T.default.LOG_MICRO, "RealtimePresence.onAttached", "sending " + i + " queued presence messages");
                  for (var b = 0; b < i; b++) {
                    var E = s[b];
                    h.push(E.presence), w.push(E.callback);
                  }
                  this.channel.sendPresence(h, w);
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
                  T.default.logAction(T.default.LOG_MINOR, "RealtimeChannel.failPendingPresence", "channel; name = " + this.channel.name + ", err = " + a.inspectError(e));
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
                var e = this, s = this._myMembers, i = function(b) {
                  if (b) {
                    var E = "Presence auto-re-enter failed: " + b.toString(), A = new M.default(E, 91004, 400);
                    T.default.logAction(T.default.LOG_ERROR, "RealtimePresence._ensureMyMembersPresent()", E);
                    var y = new o.default(e.channel.state, e.channel.state, !0, !1, A);
                    e.channel.emit("update", y);
                  }
                };
                for (var h in s.map) {
                  var w = s.map[h];
                  T.default.logAction(T.default.LOG_MICRO, "RealtimePresence._ensureMyMembersPresent()", 'Auto-reentering clientId "' + w.clientId + '" into the presence set'), this._enterOrUpdateClient(w.id, w.clientId, w.data, "enter", i);
                }
              }, t.prototype._synthesizeLeaves = function(e) {
                var s = this.subscriptions;
                a.arrForEach(e, function(i) {
                  var h = P.default.fromValues({
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
                T.default.deprecated("presence.on", "presence.subscribe"), this.subscribe.apply(this, e);
              }, t.prototype.off = function() {
                for (var e = [], s = 0; s < arguments.length; s++)
                  e[s] = arguments[s];
                T.default.deprecated("presence.off", "presence.unsubscribe"), this.unsubscribe.apply(this, e);
              }, t.prototype.subscribe = function() {
                for (var e = [], s = 0; s < arguments.length; s++)
                  e[s] = arguments[s];
                var i = v.default.processListenerArgs(e), h = i[0], w = i[1], b = i[2], E = this.channel;
                if (!b) {
                  if (this.channel.realtime.options.promises)
                    return a.promisify(this, "subscribe", [h, w]);
                  b = d;
                }
                if (E.state === "failed") {
                  b(M.default.fromValues(E.invalidStateError()));
                  return;
                }
                this.subscriptions.on(h, w), E.attach(b);
              }, t.prototype.unsubscribe = function() {
                for (var e = [], s = 0; s < arguments.length; s++)
                  e[s] = arguments[s];
                var i = v.default.processListenerArgs(e), h = i[0], w = i[1];
                this.subscriptions.off(h, w);
              }, t;
            }(L.default)
          ), r = (
            /** @class */
            function(n) {
              p.__extends(t, n);
              function t(e, s) {
                var i = n.call(this) || this;
                return i.presence = e, i.map = /* @__PURE__ */ Object.create(null), i.syncInProgress = !1, i.residualMembers = null, i.memberKey = s, i;
              }
              return t.prototype.get = function(e) {
                return this.map[e];
              }, t.prototype.getClient = function(e) {
                var s = this.map, i = [];
                for (var h in s) {
                  var w = s[h];
                  w.clientId == e && w.action != "absent" && i.push(w);
                }
                return i;
              }, t.prototype.list = function(e) {
                var s = this.map, i = e && e.clientId, h = e && e.connectionId, w = [];
                for (var b in s) {
                  var E = s[b];
                  E.action !== "absent" && (i && i != E.clientId || h && h != E.connectionId || w.push(E));
                }
                return w;
              }, t.prototype.put = function(e) {
                (e.action === "enter" || e.action === "update") && (e = P.default.fromValues(e), e.action = "present");
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
                return h && !c(e, h) ? !1 : (this.syncInProgress ? (e = P.default.fromValues(e), e.action = "absent", s[i] = e) : delete s[i], !0);
              }, t.prototype.startSync = function() {
                var e = this.map, s = this.syncInProgress;
                T.default.logAction(T.default.LOG_MINOR, "PresenceMap.startSync()", "channel = " + this.presence.channel.name + "; syncInProgress = " + s), this.syncInProgress || (this.residualMembers = a.copy(e), this.setInProgress(!0));
              }, t.prototype.endSync = function() {
                var e = this.map, s = this.syncInProgress;
                if (T.default.logAction(T.default.LOG_MINOR, "PresenceMap.endSync()", "channel = " + this.presence.channel.name + "; syncInProgress = " + s), s) {
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
                if (T.default.logAction(T.default.LOG_MINOR, "PresenceMap.waitSync()", "channel = " + this.presence.channel.name + "; syncInProgress = " + s), !s) {
                  e();
                  return;
                }
                this.once("sync", e);
              }, t.prototype.clear = function() {
                this.map = {}, this.setInProgress(!1), this.residualMembers = null;
              }, t.prototype.setInProgress = function(e) {
                T.default.logAction(T.default.LOG_MICRO, "PresenceMap.setInProgress()", "inProgress = " + e), this.syncInProgress = e, this.presence.syncComplete = !e;
              }, t;
            }(I.default)
          );
          g.default = l;
        },
        /* 55 */
        /***/
        function(F, g, f) {
          Object.defineProperty(g, "__esModule", { value: !0 });
          var p = f(0), a = f(56), L = f(31), I = f(11), T = p.__importDefault(f(5)), P = p.__importDefault(f(3)), M = (
            /** @class */
            function() {
              function v() {
                this.base64CharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", this.hexCharSet = "0123456789abcdef";
              }
              return v.prototype.isWordArray = function(O) {
                return O != null && O.sigBytes !== void 0;
              }, v.prototype.isArrayBuffer = function(O) {
                return O != null && O.constructor === ArrayBuffer;
              }, v.prototype.isTypedArray = function(O) {
                return !!ArrayBuffer && ArrayBuffer.isView && ArrayBuffer.isView(O);
              }, v.prototype.uint8ViewToBase64 = function(O) {
                for (var o = "", d = this.base64CharSet, R = O.byteLength, S = R % 3, u = R - S, c, l, r, n, t, e = 0; e < u; e = e + 3)
                  t = O[e] << 16 | O[e + 1] << 8 | O[e + 2], c = (t & 16515072) >> 18, l = (t & 258048) >> 12, r = (t & 4032) >> 6, n = t & 63, o += d[c] + d[l] + d[r] + d[n];
                return S == 1 ? (t = O[u], c = (t & 252) >> 2, l = (t & 3) << 4, o += d[c] + d[l] + "==") : S == 2 && (t = O[u] << 8 | O[u + 1], c = (t & 64512) >> 10, l = (t & 1008) >> 4, r = (t & 15) << 2, o += d[c] + d[l] + d[r] + "="), o;
              }, v.prototype.base64ToArrayBuffer = function(O) {
                for (var o = atob == null ? void 0 : atob(O), d = o.length, R = new Uint8Array(d), S = 0; S < d; S++) {
                  var u = o.charCodeAt(S);
                  R[S] = u;
                }
                return R.buffer;
              }, v.prototype.isBuffer = function(O) {
                return this.isArrayBuffer(O) || this.isWordArray(O) || this.isTypedArray(O);
              }, v.prototype.toBuffer = function(O) {
                if (!ArrayBuffer)
                  throw new Error("Can't convert to Buffer: browser does not support the necessary types");
                if (this.isArrayBuffer(O))
                  return new Uint8Array(O);
                if (this.isTypedArray(O))
                  return new Uint8Array(O.buffer);
                if (this.isWordArray(O)) {
                  for (var o = new ArrayBuffer(O.sigBytes), d = new Uint8Array(o), R = 0; R < O.sigBytes; R++)
                    d[R] = O.words[R >>> 2] >>> 24 - R % 4 * 8 & 255;
                  return d;
                }
                throw new Error("BufferUtils.toBuffer expected an arraybuffer, typed array, or CryptoJS wordarray");
              }, v.prototype.toArrayBuffer = function(O) {
                return this.isArrayBuffer(O) ? O : this.toBuffer(O).buffer;
              }, v.prototype.toWordArray = function(O) {
                return this.isTypedArray(O) && (O = O.buffer), this.isWordArray(O) ? O : T.default.create(O);
              }, v.prototype.base64Encode = function(O) {
                return this.isWordArray(O) ? (0, I.stringify)(O) : this.uint8ViewToBase64(this.toBuffer(O));
              }, v.prototype.base64Decode = function(O) {
                return ArrayBuffer && P.default.Config.atob ? this.base64ToArrayBuffer(O) : (0, I.parse)(O);
              }, v.prototype.hexEncode = function(O) {
                return (0, a.stringify)(this.toWordArray(O));
              }, v.prototype.hexDecode = function(O) {
                var o = (0, a.parse)(O);
                return ArrayBuffer ? this.toArrayBuffer(o) : o;
              }, v.prototype.utf8Encode = function(O) {
                return P.default.Config.TextEncoder ? new P.default.Config.TextEncoder().encode(O).buffer : (0, L.parse)(O);
              }, v.prototype.utf8Decode = function(O) {
                if (!this.isBuffer(O))
                  throw new Error("Expected input of utf8decode to be an arraybuffer, typed array, or CryptoJS wordarray");
                return TextDecoder && !this.isWordArray(O) ? new TextDecoder().decode(O) : (O = this.toWordArray(O), (0, L.stringify)(O));
              }, v.prototype.bufferCompare = function(O, o) {
                if (!O)
                  return -1;
                if (!o)
                  return 1;
                var d = this.toWordArray(O), R = this.toWordArray(o);
                d.clamp(), R.clamp();
                var S = d.sigBytes - R.sigBytes;
                if (S != 0)
                  return S;
                for (var u = d.words, c = R.words, l = 0; l < u.length; l++)
                  if (S = u[l] - c[l], S != 0)
                    return S;
                return 0;
              }, v.prototype.byteLength = function(O) {
                return this.isArrayBuffer(O) || this.isTypedArray(O) ? O.byteLength : this.isWordArray(O) ? O.sigBytes : -1;
              }, v.prototype.typedArrayToBuffer = function(O) {
                return O.buffer;
              }, v;
            }()
          );
          g.default = new M();
        },
        /* 56 */
        /***/
        function(F, g, f) {
          (function(p, a) {
            F.exports = a(f(6));
          })(this, function(p) {
            return p.enc.Hex;
          });
        },
        /* 57 */
        /***/
        function(F, g, f) {
          f.r(g);
          var p = f(5), a = /* @__PURE__ */ f.n(p), L = f(11), I = f(22), T = /* @__PURE__ */ f.n(I), P = f(2), M = /* @__PURE__ */ f.n(P), v = f(4), O = /* @__PURE__ */ f.n(v), o = function(d, R) {
            var S = "aes", u = 256, c = "cbc", l = 16, r = 4, n = 4294967296, t = 2147483648, e;
            if (d.getRandomWordArray)
              e = d.getRandomWordArray;
            else if (typeof Uint32Array < "u" && d.getRandomValues) {
              var s = new Uint32Array(r);
              e = function(C, N) {
                var U = C / 4, G = U == r ? s : new Uint32Array(U);
                d.getRandomValues(G, function(V) {
                  typeof N < "u" && N(V, R.toWordArray(G));
                });
              };
            } else
              e = function(C, N) {
                M.a.logAction(
                  M.a.LOG_MAJOR,
                  "Ably.Crypto.generateRandom()",
                  "Warning: the browser you are using does not support secure cryptographically secure randomness generation; falling back to insecure Math.random()"
                );
                for (var U = C / 4, G = new Array(U), V = 0; V < U; V++)
                  G[V] = Math.floor(Math.random() * n) - t;
                N(null, a.a.create(G));
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
            function w(C) {
              return C.replace("_", "/").replace("-", "+");
            }
            var b = [
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
            function A() {
              this.algorithm = null, this.keyLength = null, this.mode = null, this.key = null;
            }
            E.CipherParams = A, E.getDefaultParams = function(C) {
              var N;
              if (typeof C == "function" || typeof C == "string") {
                if (M.a.deprecated("Crypto.getDefaultParams(key, callback)", "Crypto.getDefaultParams({key: key})"), typeof C == "function")
                  E.generateRandomKey(function(G) {
                    C(null, E.getDefaultParams({ key: G }));
                  });
                else if (typeof arguments[1] == "function")
                  arguments[1](null, E.getDefaultParams({ key: C }));
                else
                  throw new Error("Invalid arguments for Crypto.getDefaultParams");
                return;
              }
              if (!C.key)
                throw new Error("Crypto.getDefaultParams: a key is required");
              typeof C.key == "string" ? N = Object(L.parse)(w(C.key)) : N = R.toWordArray(C.key);
              var U = new A();
              if (U.key = N, U.algorithm = C.algorithm || S, U.keyLength = N.words.length * (4 * 8), U.mode = C.mode || c, C.keyLength && C.keyLength !== U.keyLength)
                throw new Error(
                  "Crypto.getDefaultParams: a keyLength of " + C.keyLength + " was specified, but the key actually has length " + U.keyLength
                );
              return h(U), U;
            }, E.generateRandomKey = function(C, N) {
              arguments.length == 1 && typeof C == "function" && (N = C, C = void 0), e((C || u) / 8, function(U, G) {
                N !== void 0 && N(U ? O.a.fromValues(U) : null, G);
              });
            }, E.getCipher = function(C) {
              var N = C instanceof A ? C : E.getDefaultParams(C);
              return { cipherParams: N, cipher: new y(N, r, C.iv) };
            };
            function y(C, N, U) {
              this.algorithm = C.algorithm + "-" + String(C.keyLength) + "-" + C.mode, this.cjsAlgorithm = C.algorithm.toUpperCase().replace(/-\d+$/, ""), this.key = R.toWordArray(C.key), U && (this.iv = R.toWordArray(U).clone()), this.blockLengthWords = N;
            }
            return y.prototype.encrypt = function(C, N) {
              M.a.logAction(M.a.LOG_MICRO, "CBCCipher.encrypt()", ""), C = R.toWordArray(C);
              var U = C.sigBytes, G = i(U), V = this, Q = function() {
                V.getIv(function(H, m) {
                  if (H) {
                    N(H);
                    return;
                  }
                  var x = V.encryptCipher.process(C.concat(b[G - U])), D = m.concat(x);
                  N(null, D);
                });
              };
              this.encryptCipher ? Q() : this.iv ? (this.encryptCipher = T.a.algo[this.cjsAlgorithm].createEncryptor(this.key, { iv: this.iv }), Q()) : e(l, function(H, m) {
                if (H) {
                  N(H);
                  return;
                }
                V.encryptCipher = T.a.algo[V.cjsAlgorithm].createEncryptor(V.key, { iv: m }), V.iv = m, Q();
              });
            }, y.prototype.decrypt = function(C) {
              M.a.logAction(M.a.LOG_MICRO, "CBCCipher.decrypt()", ""), C = R.toWordArray(C);
              var N = this.blockLengthWords, U = C.words, G = a.a.create(U.slice(0, N)), V = a.a.create(U.slice(N)), Q = T.a.algo[this.cjsAlgorithm].createDecryptor(this.key, { iv: G }), H = Q.process(V), m = Q.finalize();
              return Q.reset(), m && m.sigBytes && H.concat(m), H;
            }, y.prototype.getIv = function(C) {
              if (this.iv) {
                var N = this.iv;
                this.iv = null, C(null, N);
                return;
              }
              var U = this;
              e(l, function(G, V) {
                if (G) {
                  C(G);
                  return;
                }
                C(null, U.encryptCipher.process(V));
              });
            }, E;
          };
          g.default = o;
        },
        /* 58 */
        /***/
        function(F, g, f) {
          (function(p, a) {
            F.exports = a(f(6));
          })(this, function(p) {
            return function() {
              var a = p, L = a.lib, I = L.WordArray, T = a.enc;
              T.Utf16 = T.Utf16BE = {
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
                stringify: function(M) {
                  for (var v = M.words, O = M.sigBytes, o = [], d = 0; d < O; d += 2) {
                    var R = v[d >>> 2] >>> 16 - d % 4 * 8 & 65535;
                    o.push(String.fromCharCode(R));
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
                parse: function(M) {
                  for (var v = M.length, O = [], o = 0; o < v; o++)
                    O[o >>> 1] |= M.charCodeAt(o) << 16 - o % 2 * 16;
                  return I.create(O, v * 2);
                }
              }, T.Utf16LE = {
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
                stringify: function(M) {
                  for (var v = M.words, O = M.sigBytes, o = [], d = 0; d < O; d += 2) {
                    var R = P(v[d >>> 2] >>> 16 - d % 4 * 8 & 65535);
                    o.push(String.fromCharCode(R));
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
                parse: function(M) {
                  for (var v = M.length, O = [], o = 0; o < v; o++)
                    O[o >>> 1] |= P(M.charCodeAt(o) << 16 - o % 2 * 16);
                  return I.create(O, v * 2);
                }
              };
              function P(M) {
                return M << 8 & 4278255360 | M >>> 8 & 16711935;
              }
            }(), p.enc.Utf16;
          });
        },
        /* 59 */
        /***/
        function(F, g, f) {
          (function(p, a) {
            F.exports = a(f(6), f(28));
          })(this, function(p) {
            return function(a) {
              var L = p, I = L.lib, T = I.CipherParams, P = L.enc, M = P.Hex, v = L.format;
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
                stringify: function(O) {
                  return O.ciphertext.toString(M);
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
                parse: function(O) {
                  var o = M.parse(O);
                  return T.create({ ciphertext: o });
                }
              };
            }(), p.format.Hex;
          });
        },
        /* 60 */
        /***/
        function(F, g, f) {
          (function(p, a) {
            F.exports = a(f(6), f(11), f(61), f(27), f(28));
          })(this, function(p) {
            return function() {
              var a = p, L = a.lib, I = L.BlockCipher, T = a.algo, P = [], M = [], v = [], O = [], o = [], d = [], R = [], S = [], u = [], c = [];
              (function() {
                for (var n = [], t = 0; t < 256; t++)
                  t < 128 ? n[t] = t << 1 : n[t] = t << 1 ^ 283;
                for (var e = 0, s = 0, t = 0; t < 256; t++) {
                  var i = s ^ s << 1 ^ s << 2 ^ s << 3 ^ s << 4;
                  i = i >>> 8 ^ i & 255 ^ 99, P[e] = i, M[i] = e;
                  var h = n[e], w = n[h], b = n[w], E = n[i] * 257 ^ i * 16843008;
                  v[e] = E << 24 | E >>> 8, O[e] = E << 16 | E >>> 16, o[e] = E << 8 | E >>> 24, d[e] = E;
                  var E = b * 16843009 ^ w * 65537 ^ h * 257 ^ e * 16843008;
                  R[i] = E << 24 | E >>> 8, S[i] = E << 16 | E >>> 16, u[i] = E << 8 | E >>> 24, c[i] = E, e ? (e = h ^ n[n[n[b ^ h]]], s ^= n[n[s]]) : e = s = 1;
                }
              })();
              var l = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], r = T.AES = I.extend({
                _doReset: function() {
                  var n;
                  if (!(this._nRounds && this._keyPriorReset === this._key)) {
                    for (var t = this._keyPriorReset = this._key, e = t.words, s = t.sigBytes / 4, i = this._nRounds = s + 6, h = (i + 1) * 4, w = this._keySchedule = [], b = 0; b < h; b++)
                      b < s ? w[b] = e[b] : (n = w[b - 1], b % s ? s > 6 && b % s == 4 && (n = P[n >>> 24] << 24 | P[n >>> 16 & 255] << 16 | P[n >>> 8 & 255] << 8 | P[n & 255]) : (n = n << 8 | n >>> 24, n = P[n >>> 24] << 24 | P[n >>> 16 & 255] << 16 | P[n >>> 8 & 255] << 8 | P[n & 255], n ^= l[b / s | 0] << 24), w[b] = w[b - s] ^ n);
                    for (var E = this._invKeySchedule = [], A = 0; A < h; A++) {
                      var b = h - A;
                      if (A % 4)
                        var n = w[b];
                      else
                        var n = w[b - 4];
                      A < 4 || b <= 4 ? E[A] = n : E[A] = R[P[n >>> 24]] ^ S[P[n >>> 16 & 255]] ^ u[P[n >>> 8 & 255]] ^ c[P[n & 255]];
                    }
                  }
                },
                encryptBlock: function(n, t) {
                  this._doCryptBlock(n, t, this._keySchedule, v, O, o, d, P);
                },
                decryptBlock: function(n, t) {
                  var e = n[t + 1];
                  n[t + 1] = n[t + 3], n[t + 3] = e, this._doCryptBlock(n, t, this._invKeySchedule, R, S, u, c, M);
                  var e = n[t + 1];
                  n[t + 1] = n[t + 3], n[t + 3] = e;
                },
                _doCryptBlock: function(n, t, e, s, i, h, w, b) {
                  for (var E = this._nRounds, A = n[t] ^ e[0], y = n[t + 1] ^ e[1], C = n[t + 2] ^ e[2], N = n[t + 3] ^ e[3], U = 4, G = 1; G < E; G++) {
                    var V = s[A >>> 24] ^ i[y >>> 16 & 255] ^ h[C >>> 8 & 255] ^ w[N & 255] ^ e[U++], Q = s[y >>> 24] ^ i[C >>> 16 & 255] ^ h[N >>> 8 & 255] ^ w[A & 255] ^ e[U++], H = s[C >>> 24] ^ i[N >>> 16 & 255] ^ h[A >>> 8 & 255] ^ w[y & 255] ^ e[U++], m = s[N >>> 24] ^ i[A >>> 16 & 255] ^ h[y >>> 8 & 255] ^ w[C & 255] ^ e[U++];
                    A = V, y = Q, C = H, N = m;
                  }
                  var V = (b[A >>> 24] << 24 | b[y >>> 16 & 255] << 16 | b[C >>> 8 & 255] << 8 | b[N & 255]) ^ e[U++], Q = (b[y >>> 24] << 24 | b[C >>> 16 & 255] << 16 | b[N >>> 8 & 255] << 8 | b[A & 255]) ^ e[U++], H = (b[C >>> 24] << 24 | b[N >>> 16 & 255] << 16 | b[A >>> 8 & 255] << 8 | b[y & 255]) ^ e[U++], m = (b[N >>> 24] << 24 | b[A >>> 16 & 255] << 16 | b[y >>> 8 & 255] << 8 | b[C & 255]) ^ e[U++];
                  n[t] = V, n[t + 1] = Q, n[t + 2] = H, n[t + 3] = m;
                },
                keySize: 256 / 32
              });
              a.AES = I._createHelper(r);
            }(), p.AES;
          });
        },
        /* 61 */
        /***/
        function(F, g, f) {
          (function(p, a) {
            F.exports = a(f(6));
          })(this, function(p) {
            return function(a) {
              var L = p, I = L.lib, T = I.WordArray, P = I.Hasher, M = L.algo, v = [];
              (function() {
                for (var u = 0; u < 64; u++)
                  v[u] = a.abs(a.sin(u + 1)) * 4294967296 | 0;
              })();
              var O = M.MD5 = P.extend({
                _doReset: function() {
                  this._hash = new T.init([
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
                  var t = this._hash.words, e = u[c + 0], s = u[c + 1], i = u[c + 2], h = u[c + 3], w = u[c + 4], b = u[c + 5], E = u[c + 6], A = u[c + 7], y = u[c + 8], C = u[c + 9], N = u[c + 10], U = u[c + 11], G = u[c + 12], V = u[c + 13], Q = u[c + 14], H = u[c + 15], m = t[0], x = t[1], D = t[2], B = t[3];
                  m = o(m, x, D, B, e, 7, v[0]), B = o(B, m, x, D, s, 12, v[1]), D = o(D, B, m, x, i, 17, v[2]), x = o(x, D, B, m, h, 22, v[3]), m = o(m, x, D, B, w, 7, v[4]), B = o(B, m, x, D, b, 12, v[5]), D = o(D, B, m, x, E, 17, v[6]), x = o(x, D, B, m, A, 22, v[7]), m = o(m, x, D, B, y, 7, v[8]), B = o(B, m, x, D, C, 12, v[9]), D = o(D, B, m, x, N, 17, v[10]), x = o(x, D, B, m, U, 22, v[11]), m = o(m, x, D, B, G, 7, v[12]), B = o(B, m, x, D, V, 12, v[13]), D = o(D, B, m, x, Q, 17, v[14]), x = o(x, D, B, m, H, 22, v[15]), m = d(m, x, D, B, s, 5, v[16]), B = d(B, m, x, D, E, 9, v[17]), D = d(D, B, m, x, U, 14, v[18]), x = d(x, D, B, m, e, 20, v[19]), m = d(m, x, D, B, b, 5, v[20]), B = d(B, m, x, D, N, 9, v[21]), D = d(D, B, m, x, H, 14, v[22]), x = d(x, D, B, m, w, 20, v[23]), m = d(m, x, D, B, C, 5, v[24]), B = d(B, m, x, D, Q, 9, v[25]), D = d(D, B, m, x, h, 14, v[26]), x = d(x, D, B, m, y, 20, v[27]), m = d(m, x, D, B, V, 5, v[28]), B = d(B, m, x, D, i, 9, v[29]), D = d(D, B, m, x, A, 14, v[30]), x = d(x, D, B, m, G, 20, v[31]), m = R(m, x, D, B, b, 4, v[32]), B = R(B, m, x, D, y, 11, v[33]), D = R(D, B, m, x, U, 16, v[34]), x = R(x, D, B, m, Q, 23, v[35]), m = R(m, x, D, B, s, 4, v[36]), B = R(B, m, x, D, w, 11, v[37]), D = R(D, B, m, x, A, 16, v[38]), x = R(x, D, B, m, N, 23, v[39]), m = R(m, x, D, B, V, 4, v[40]), B = R(B, m, x, D, e, 11, v[41]), D = R(D, B, m, x, h, 16, v[42]), x = R(x, D, B, m, E, 23, v[43]), m = R(m, x, D, B, C, 4, v[44]), B = R(B, m, x, D, G, 11, v[45]), D = R(D, B, m, x, H, 16, v[46]), x = R(x, D, B, m, i, 23, v[47]), m = S(m, x, D, B, e, 6, v[48]), B = S(B, m, x, D, A, 10, v[49]), D = S(D, B, m, x, Q, 15, v[50]), x = S(x, D, B, m, b, 21, v[51]), m = S(m, x, D, B, G, 6, v[52]), B = S(B, m, x, D, h, 10, v[53]), D = S(D, B, m, x, N, 15, v[54]), x = S(x, D, B, m, s, 21, v[55]), m = S(m, x, D, B, y, 6, v[56]), B = S(B, m, x, D, H, 10, v[57]), D = S(D, B, m, x, E, 15, v[58]), x = S(x, D, B, m, V, 21, v[59]), m = S(m, x, D, B, w, 6, v[60]), B = S(B, m, x, D, U, 10, v[61]), D = S(D, B, m, x, i, 15, v[62]), x = S(x, D, B, m, C, 21, v[63]), t[0] = t[0] + m | 0, t[1] = t[1] + x | 0, t[2] = t[2] + D | 0, t[3] = t[3] + B | 0;
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
                  var u = P.clone.call(this);
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
              function R(u, c, l, r, n, t, e) {
                var s = u + (c ^ l ^ r) + n + e;
                return (s << t | s >>> 32 - t) + c;
              }
              function S(u, c, l, r, n, t, e) {
                var s = u + (l ^ (c | ~r)) + n + e;
                return (s << t | s >>> 32 - t) + c;
              }
              L.MD5 = P._createHelper(O), L.HmacMD5 = P._createHmacHelper(O);
            }(Math), p.MD5;
          });
        },
        /* 62 */
        /***/
        function(F, g, f) {
          var p;
          Object.defineProperty(g, "__esModule", { value: !0 });
          var a = f(0), L = a.__importDefault(f(3)), I = a.__importStar(f(1)), T = a.__importDefault(f(8)), P = f(4), M = a.__importDefault(f(18)), v = a.__importDefault(f(16)), O = a.__importDefault(f(21)), o = a.__importDefault(f(2)), d = f(29), R = a.__importDefault(f(63)), S = f(25);
          function u(r) {
            var n = r.statusCode;
            return n === 408 && !r.code || n === 400 && !r.code || n >= 500 && n <= 504;
          }
          function c(r) {
            var n = r.connection, t = n && n.connectionManager.host;
            return t ? [t].concat(T.default.getFallbackHosts(r.options)) : T.default.getHosts(r.options);
          }
          var l = (p = /** @class */
          function() {
            function r(n) {
              this.checksInProgress = null, this.checkConnectivity = void 0, this.supportsAuthHeaders = !1, this.supportsLinkHeaders = !1, this._getHosts = c, this.options = n || {};
              var t = this.options.connectivityCheckUrl || T.default.connectivityCheckUrl, e = this.options.connectivityCheckParams, s = !this.options.connectivityCheckUrl;
              L.default.Config.xhrSupported ? (this.supportsAuthHeaders = !0, this.Request = function(i, h, w, b, E, A, y) {
                var C = v.default.createRequest(w, b, E, A, O.default.REQ_SEND, h && h.options.timeouts, i);
                return C.once("complete", y), C.exec(), C;
              }, this.options.disableConnectivityCheck ? this.checkConnectivity = function(i) {
                i(null, !0);
              } : this.checkConnectivity = function(i) {
                o.default.logAction(o.default.LOG_MICRO, "(XHRRequest)Http.checkConnectivity()", "Sending; " + t), this.doUri(M.default.Get, null, t, null, null, e, function(h, w, b, E, A) {
                  var y = !1;
                  s ? y = !h && (w == null ? void 0 : w.replace(/\n/, "")) == "yes" : y = !h && (0, S.isSuccessCode)(A), o.default.logAction(o.default.LOG_MICRO, "(XHRRequest)Http.checkConnectivity()", "Result: " + y), i(null, y);
                });
              }) : L.default.Config.jsonpSupported ? (this.Request = function(i, h, w, b, E, A, y) {
                var C = (0, d.createRequest)(w, b, E, A, O.default.REQ_SEND, h && h.options.timeouts, i);
                return C.once("complete", y), L.default.Config.nextTick(function() {
                  C.exec();
                }), C;
              }, this.options.disableConnectivityCheck ? this.checkConnectivity = function(i) {
                i(null, !0);
              } : this.checkConnectivity = function(i) {
                var h = this, w = T.default.jsonpInternetUpUrl;
                if (this.checksInProgress) {
                  this.checksInProgress.push(i);
                  return;
                }
                this.checksInProgress = [i], o.default.logAction(o.default.LOG_MICRO, "(JSONP)Http.checkConnectivity()", "Sending; " + w);
                var b = new d.Request("isTheInternetUp", w, null, null, null, O.default.REQ_SEND, T.default.TIMEOUTS);
                b.once("complete", function(E, A) {
                  var y = !E && A;
                  o.default.logAction(o.default.LOG_MICRO, "(JSONP)Http.checkConnectivity()", "Result: " + y);
                  for (var C = 0; C < h.checksInProgress.length; C++)
                    h.checksInProgress[C](null, y);
                  h.checksInProgress = null;
                }), L.default.Config.nextTick(function() {
                  b.exec();
                });
              }) : L.default.Config.fetchSupported ? (this.supportsAuthHeaders = !0, this.Request = R.default, this.checkConnectivity = function(i) {
                o.default.logAction(o.default.LOG_MICRO, "(Fetch)Http.checkConnectivity()", "Sending; " + t), this.doUri(M.default.Get, null, t, null, null, null, function(h, w) {
                  var b = !h && (w == null ? void 0 : w.replace(/\n/, "")) == "yes";
                  o.default.logAction(o.default.LOG_MICRO, "(Fetch)Http.checkConnectivity()", "Result: " + b), i(null, b);
                });
              }) : this.Request = function(i, h, w, b, E, A, y) {
                y(new P.PartialErrorInfo("no supported HTTP transports available", null, 400), null);
              };
            }
            return r.prototype.do = function(n, t, e, s, i, h, w) {
              var b = this, E = typeof e == "function" ? e : function(N) {
                return t.baseUri(N) + e;
              }, A = t._currentFallback;
              if (A)
                if (A.validUntil > I.now()) {
                  if (!this.Request) {
                    w == null || w(new P.PartialErrorInfo("Request invoked before assigned to", null, 500));
                    return;
                  }
                  this.Request(n, t, E(A.host), s, h, i, function(N) {
                    for (var U = [], G = 1; G < arguments.length; G++)
                      U[G - 1] = arguments[G];
                    if (N && u(N)) {
                      t._currentFallback = null, b.do(n, t, e, s, i, h, w);
                      return;
                    }
                    w == null || w.apply(void 0, a.__spreadArray([N], U, !1));
                  });
                  return;
                } else
                  t._currentFallback = null;
              var y = c(t);
              if (y.length === 1) {
                this.doUri(n, t, E(y[0]), s, i, h, w);
                return;
              }
              var C = function(N, U) {
                var G = N.shift();
                b.doUri(n, t, E(G), s, i, h, function(V) {
                  for (var Q = [], H = 1; H < arguments.length; H++)
                    Q[H - 1] = arguments[H];
                  if (V && u(V) && N.length) {
                    C(N, !0);
                    return;
                  }
                  U && (t._currentFallback = {
                    host: G,
                    validUntil: I.now() + t.options.timeouts.fallbackRetryTimeout
                  }), w == null || w.apply(void 0, a.__spreadArray([V], Q, !1));
                });
              };
              C(y);
            }, r.prototype.doUri = function(n, t, e, s, i, h, w) {
              if (!this.Request) {
                w(new P.PartialErrorInfo("Request invoked before assigned to", null, 500));
                return;
              }
              this.Request(n, t, e, s, h, i, w);
            }, r;
          }(), p.methods = [M.default.Get, M.default.Delete, M.default.Post, M.default.Put, M.default.Patch], p.methodsWithoutBody = [M.default.Get, M.default.Delete], p.methodsWithBody = [M.default.Post, M.default.Put, M.default.Patch], p);
          g.default = l;
        },
        /* 63 */
        /***/
        function(F, g, f) {
          Object.defineProperty(g, "__esModule", { value: !0 });
          var p = f(0), a = p.__importStar(f(4)), L = p.__importDefault(f(3)), I = p.__importDefault(f(8)), T = p.__importStar(f(1)), P = f(1);
          function M(o, d) {
            return !!d.get("x-ably-errorcode");
          }
          function v(o, d) {
            if (M(o, d))
              return o.error && a.default.fromValues(o.error);
          }
          function O(o, d, R, S, u, c, l) {
            var r = new Headers(S || {}), n = o ? o.toUpperCase() : T.isEmptyArg(c) ? "GET" : "POST", t = new AbortController(), e = setTimeout(function() {
              t.abort(), l(new a.PartialErrorInfo("Request timed out", null, 408));
            }, d ? d.options.timeouts.httpRequestTimeout : I.default.TIMEOUTS.httpRequestTimeout), s = {
              method: n,
              headers: r,
              body: c
            };
            L.default.Config.isWebworker || (s.credentials = r.has("authorization") ? "include" : "same-origin"), (0, P.getGlobalObject)().fetch(R + "?" + new URLSearchParams(u || {}), s).then(function(i) {
              clearTimeout(e);
              var h = i.headers.get("Content-Type"), w;
              h && h.indexOf("application/x-msgpack") > -1 ? w = i.arrayBuffer() : h && h.indexOf("application/json") > -1 ? w = i.json() : w = i.text(), w.then(function(b) {
                var E = !!h && h.indexOf("application/x-msgpack") === -1;
                if (i.ok)
                  l(null, b, i.headers, E, i.status);
                else {
                  var A = v(b, i.headers) || new a.PartialErrorInfo("Error response received from server: " + i.status + " body was: " + L.default.Config.inspect(b), null, i.status);
                  l(A, b, i.headers, E, i.status);
                }
              });
            }).catch(function(i) {
              clearTimeout(e), l(i);
            });
          }
          g.default = O;
        },
        /* 64 */
        /***/
        function(F, g, f) {
          Object.defineProperty(g, "__esModule", { value: !0 });
          var p = f(0), a = p.__importDefault(f(41)), L = p.__importStar(f(1)), I = L.getGlobalObject();
          typeof Window > "u" && typeof WorkerGlobalScope > "u" && console.log("Warning: this distribution of Ably is intended for browsers. On nodejs, please use the 'ably' package on npm");
          function T() {
            var O = I.location;
            return !I.WebSocket || !O || !O.origin || O.origin.indexOf("http") > -1;
          }
          var P = I.navigator && I.navigator.userAgent.toString(), M = I.location && I.location.href, v = {
            agent: "browser",
            logTimestamps: !0,
            userAgent: P,
            currentUrl: M,
            noUpgrade: P && !!P.match(/MSIE\s8\.0/),
            binaryType: "arraybuffer",
            WebSocket: I.WebSocket,
            fetchSupported: !!I.fetch,
            xhrSupported: I.XMLHttpRequest && "withCredentials" in new XMLHttpRequest(),
            jsonpSupported: typeof document < "u",
            allowComet: T(),
            streamingSupported: !0,
            useProtocolHeartbeats: !0,
            createHmac: null,
            msgpack: a.default,
            supportsBinary: !!I.TextDecoder,
            preferBinary: !1,
            ArrayBuffer: I.ArrayBuffer,
            atob: I.atob,
            nextTick: typeof I.setImmediate < "u" ? I.setImmediate.bind(I) : function(O) {
              setTimeout(O, 0);
            },
            addEventListener: I.addEventListener,
            inspect: JSON.stringify,
            stringByteSize: function(O) {
              return I.TextDecoder && new I.TextEncoder().encode(O).length || O.length;
            },
            TextEncoder: I.TextEncoder,
            TextDecoder: I.TextDecoder,
            Promise: I.Promise,
            getRandomValues: function(O) {
              if (O !== void 0)
                return function(o, d) {
                  O.getRandomValues(o), d && d(null);
                };
            }(I.crypto || msCrypto)
          };
          g.default = v;
        },
        /* 65 */
        /***/
        function(F, g, f) {
          (function(p) {
            Object.defineProperty(g, "__esModule", { value: !0 });
            var a = f(0), L = a.__importStar(f(1)), I = "ablyjs-storage-test", T = (
              /** @class */
              function() {
                function P() {
                  try {
                    p.sessionStorage.setItem(I, I), p.sessionStorage.removeItem(I), this.sessionSupported = !0;
                  } catch {
                    this.sessionSupported = !1;
                  }
                  try {
                    p.localStorage.setItem(I, I), p.localStorage.removeItem(I), this.localSupported = !0;
                  } catch {
                    this.localSupported = !1;
                  }
                }
                return P.prototype.get = function(M) {
                  return this._get(M, !1);
                }, P.prototype.getSession = function(M) {
                  return this._get(M, !0);
                }, P.prototype.remove = function(M) {
                  return this._remove(M, !1);
                }, P.prototype.removeSession = function(M) {
                  return this._remove(M, !0);
                }, P.prototype.set = function(M, v, O) {
                  return this._set(M, v, O, !1);
                }, P.prototype.setSession = function(M, v, O) {
                  return this._set(M, v, O, !0);
                }, P.prototype._set = function(M, v, O, o) {
                  var d = { value: v };
                  return O && (d.expires = L.now() + O), this.storageInterface(o).setItem(M, JSON.stringify(d));
                }, P.prototype._get = function(M, v) {
                  if (v && !this.sessionSupported)
                    throw new Error("Session Storage not supported");
                  if (!v && !this.localSupported)
                    throw new Error("Local Storage not supported");
                  var O = this.storageInterface(v).getItem(M);
                  if (!O)
                    return null;
                  var o = JSON.parse(O);
                  return o.expires && o.expires < L.now() ? (this.storageInterface(v).removeItem(M), null) : o.value;
                }, P.prototype._remove = function(M, v) {
                  return this.storageInterface(v).removeItem(M);
                }, P.prototype.storageInterface = function(M) {
                  return M ? p.sessionStorage : p.localStorage;
                }, P;
              }()
            );
            g.default = new T();
          }).call(this, f(13));
        },
        /* 66 */
        /***/
        function(F, g, f) {
          Object.defineProperty(g, "__esModule", { value: !0 });
          var p = f(0), a = p.__importDefault(f(67)), L = {
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
          g.default = L;
        },
        /* 67 */
        /***/
        function(F, g, f) {
          Object.defineProperty(g, "__esModule", { value: !0 });
          var p;
          (function(a) {
            a.WebSocket = "web_socket", a.Comet = "comet", a.XhrStreaming = "xhr_streaming", a.XhrPolling = "xhr_polling", a.JsonP = "jsonp";
          })(p || (p = {})), g.default = p;
        },
        /* 68 */
        /***/
        function(F, g, f) {
          f.r(g);
          var p = f(29), a = /* @__PURE__ */ f.n(p), L = f(1), I = f(3), T = /* @__PURE__ */ f.n(I), P = f(12), M = /* @__PURE__ */ f.n(P), v = f(16), O = /* @__PURE__ */ f.n(v), o = function(u) {
            var c = "xhr_polling";
            function l(r, n, t) {
              t.stream = !1, M.a.call(this, r, n, t), this.shortName = c;
            }
            return L.inherits(l, M.a), l.isAvailable = function() {
              return T.a.Config.xhrSupported && T.a.Config.allowComet;
            }, l.prototype.toString = function() {
              return "XHRPollingTransport; uri=" + this.baseUri + "; isConnected=" + this.isConnected;
            }, l.prototype.createRequest = function(r, n, t, e, s) {
              return O.a.createRequest(r, n, t, e, s, this.timeouts);
            }, typeof u < "u" && l.isAvailable() && (u.supportedTransports[c] = l), l;
          }, d = o, R = function(u) {
            var c = "xhr_streaming";
            function l(r, n, t) {
              M.a.call(this, r, n, t), this.shortName = c;
            }
            return L.inherits(l, M.a), l.isAvailable = function() {
              return T.a.Config.xhrSupported && T.a.Config.streamingSupported && T.a.Config.allowComet;
            }, l.prototype.toString = function() {
              return "XHRStreamingTransport; uri=" + this.baseUri + "; isConnected=" + this.isConnected;
            }, l.prototype.createRequest = function(r, n, t, e, s) {
              return O.a.createRequest(r, n, t, e, s, this.timeouts);
            }, typeof u < "u" && l.isAvailable() && (u.supportedTransports[c] = l), l;
          }, S = R;
          g.default = [a.a, d, S];
        }
        /******/
      ]).default
    );
  });
})(Ct);
var It = Ct.exports;
const Et = /* @__PURE__ */ Rt(It);
class Tt {
  constructor(k, F) {
    this.apiKey = k, this.channelName = F;
  }
  async connect() {
    this.ably = new Et.Realtime.Promise(this.apiKey), await this.ably.connection.once("connected"), console.log("Connected to Ably!"), this.doSetChannel();
  }
  setChannel(k) {
    this.channelName !== k && (this.channel && (this.channel.unsubscribe(), this.channel.detach()), this.doSetChannel(k));
  }
  getChannelName() {
    return this.channelName;
  }
  async doSetChannel(k) {
    k && (this.channelName = k), this.channel = this.ably.channels.get(this.channelName), await this.channel.subscribe((F) => {
      F.connectionId !== this.channel.connectionManager.connectionId && this.listener && this.listener(F.data);
    });
  }
  listen(k) {
    this.listener = k;
  }
  async send(k) {
    await this.channel.publish("message", k);
  }
  async sendTo(k, F) {
    await this.ably.channels.get(F).publish("message", k);
  }
  disconnect() {
    this.ably.connection.close();
  }
}
const Mt = {
  create: () => {
    const nt = new URLSearchParams(location.search), k = nt.get("server") || "ably", F = nt.get("apikey") || prompt("サーバーのAPIキーを入力してください"), g = nt.get("channel") || "all";
    switch (console.log(`接続するサーバーは ${k} です`), k) {
      case "ably":
        return new Tt(F, g);
      default:
        console.error("接続するサーバーが不正です :", k);
    }
  }
}, bt = {
  opcode: "connect",
  blockType: Scratch.BlockType.COMMAND,
  text: "接続する",
  code: function(nt, k) {
    this.server || (this.server = Mt.create(), this.server.connect(), this.server.listen((F) => {
      this.lastReceivedMessage = F, k.runtime.startHats("comm_whenReceived");
    }));
  }
}, dt = {
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
class ct {
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
  static decimalToHex(k) {
    k < 0 && (k += 16777215 + 1);
    let F = Number(k).toString(16);
    return F = `#${"000000".substr(0, 6 - F.length)}${F}`, F;
  }
  /**
   * Convert a Scratch decimal color to an RGB color object.
   * @param {number} decimal RGB color as decimal.
   * @return {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
   */
  static decimalToRgb(k) {
    const F = k >> 24 & 255, g = k >> 16 & 255, f = k >> 8 & 255, p = k & 255;
    return { r: g, g: f, b: p, a: F > 0 ? F : 255 };
  }
  /**
   * Convert a hex color (e.g., F00, #03F, #0033FF) to an RGB color object.
   * CC-BY-SA Tim Down:
   * https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
   * @param {!string} hex Hex representation of the color.
   * @return {RGBObject} null on failure, or rgb: {r: red [0,255], g: green [0,255], b: blue [0,255]}.
   */
  static hexToRgb(k) {
    const F = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    k = k.replace(F, (f, p, a, L) => p + p + a + a + L + L);
    const g = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(k);
    return g ? {
      r: parseInt(g[1], 16),
      g: parseInt(g[2], 16),
      b: parseInt(g[3], 16)
    } : null;
  }
  /**
   * Convert an RGB color object to a hex color.
   * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
   * @return {!string} Hex representation of the color.
   */
  static rgbToHex(k) {
    return ct.decimalToHex(ct.rgbToDecimal(k));
  }
  /**
   * Convert an RGB color object to a Scratch decimal color.
   * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
   * @return {!number} Number representing the color.
   */
  static rgbToDecimal(k) {
    return (k.r << 16) + (k.g << 8) + k.b;
  }
  /**
   * Convert a hex color (e.g., F00, #03F, #0033FF) to a decimal color number.
   * @param {!string} hex Hex representation of the color.
   * @return {!number} Number representing the color.
   */
  static hexToDecimal(k) {
    return ct.rgbToDecimal(ct.hexToRgb(k));
  }
  /**
   * Convert an HSV color to RGB format.
   * @param {HSVObject} hsv - {h: hue [0,360), s: saturation [0,1], v: value [0,1]}
   * @return {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
   */
  static hsvToRgb(k) {
    let F = k.h % 360;
    F < 0 && (F += 360);
    const g = Math.max(0, Math.min(k.s, 1)), f = Math.max(0, Math.min(k.v, 1)), p = Math.floor(F / 60), a = F / 60 - p, L = f * (1 - g), I = f * (1 - g * a), T = f * (1 - g * (1 - a));
    let P, M, v;
    switch (p) {
      default:
      case 0:
        P = f, M = T, v = L;
        break;
      case 1:
        P = I, M = f, v = L;
        break;
      case 2:
        P = L, M = f, v = T;
        break;
      case 3:
        P = L, M = I, v = f;
        break;
      case 4:
        P = T, M = L, v = f;
        break;
      case 5:
        P = f, M = L, v = I;
        break;
    }
    return {
      r: Math.floor(P * 255),
      g: Math.floor(M * 255),
      b: Math.floor(v * 255)
    };
  }
  /**
   * Convert an RGB color to HSV format.
   * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
   * @return {HSVObject} hsv - {h: hue [0,360), s: saturation [0,1], v: value [0,1]}
   */
  static rgbToHsv(k) {
    const F = k.r / 255, g = k.g / 255, f = k.b / 255, p = Math.min(Math.min(F, g), f), a = Math.max(Math.max(F, g), f);
    let L = 0, I = 0;
    if (p !== a) {
      const T = F === p ? g - f : g === p ? f - F : F - g;
      L = ((F === p ? 3 : g === p ? 5 : 1) - T / (a - p)) * 60 % 360, I = (a - p) / a;
    }
    return { h: L, s: I, v: a };
  }
  /**
   * Linear interpolation between rgb0 and rgb1.
   * @param {RGBObject} rgb0 - the color corresponding to fraction1 <= 0.
   * @param {RGBObject} rgb1 - the color corresponding to fraction1 >= 1.
   * @param {number} fraction1 - the interpolation parameter. If this is 0.5, for example, mix the two colors equally.
   * @return {RGBObject} the interpolated color.
   */
  static mixRgb(k, F, g) {
    if (g <= 0)
      return k;
    if (g >= 1)
      return F;
    const f = 1 - g;
    return {
      r: f * k.r + g * F.r,
      g: f * k.g + g * F.g,
      b: f * k.b + g * F.b
    };
  }
}
class ot {
  /**
   * Scratch cast to number.
   * Treats NaN as 0.
   * In Scratch 2.0, this is captured by `interp.numArg.`
   * @param {*} value Value to cast to number.
   * @return {number} The Scratch-casted number value.
   */
  static toNumber(k) {
    if (typeof k == "number")
      return Number.isNaN(k) ? 0 : k;
    const F = Number(k);
    return Number.isNaN(F) ? 0 : F;
  }
  /**
   * Scratch cast to boolean.
   * In Scratch 2.0, this is captured by `interp.boolArg.`
   * Treats some string values differently from JavaScript.
   * @param {*} value Value to cast to boolean.
   * @return {boolean} The Scratch-casted boolean value.
   */
  static toBoolean(k) {
    return typeof k == "boolean" ? k : typeof k == "string" ? !(k === "" || k === "0" || k.toLowerCase() === "false") : !!k;
  }
  /**
   * Scratch cast to string.
   * @param {*} value Value to cast to string.
   * @return {string} The Scratch-casted string value.
   */
  static toString(k) {
    return String(k);
  }
  /**
   * Cast any Scratch argument to an RGB color array to be used for the renderer.
   * @param {*} value Value to convert to RGB color array.
   * @return {Array.<number>} [r,g,b], values between 0-255.
   */
  static toRgbColorList(k) {
    const F = ot.toRgbColorObject(k);
    return [F.r, F.g, F.b];
  }
  /**
   * Cast any Scratch argument to an RGB color object to be used for the renderer.
   * @param {*} value Value to convert to RGB color object.
   * @return {RGBOject} [r,g,b], values between 0-255.
   */
  static toRgbColorObject(k) {
    let F;
    return typeof k == "string" && k.substring(0, 1) === "#" ? (F = ct.hexToRgb(k), F || (F = { r: 0, g: 0, b: 0, a: 255 })) : F = ct.decimalToRgb(ot.toNumber(k)), F;
  }
  /**
   * Determine if a Scratch argument is a white space string (or null / empty).
   * @param {*} val value to check.
   * @return {boolean} True if the argument is all white spaces or null / empty.
   */
  static isWhiteSpace(k) {
    return k === null || typeof k == "string" && k.trim().length === 0;
  }
  /**
   * Compare two values, using Scratch cast, case-insensitive string compare, etc.
   * In Scratch 2.0, this is captured by `interp.compare.`
   * @param {*} v1 First value to compare.
   * @param {*} v2 Second value to compare.
   * @returns {number} Negative number if v1 < v2; 0 if equal; positive otherwise.
   */
  static compare(k, F) {
    let g = Number(k), f = Number(F);
    if (g === 0 && ot.isWhiteSpace(k) ? g = NaN : f === 0 && ot.isWhiteSpace(F) && (f = NaN), isNaN(g) || isNaN(f)) {
      const p = String(k).toLowerCase(), a = String(F).toLowerCase();
      return p < a ? -1 : p > a ? 1 : 0;
    }
    return g === 1 / 0 && f === 1 / 0 || g === -1 / 0 && f === -1 / 0 ? 0 : g - f;
  }
  /**
   * Determine if a Scratch argument number represents a round integer.
   * @param {*} val Value to check.
   * @return {boolean} True if number looks like an integer.
   */
  static isInt(k) {
    return typeof k == "number" ? isNaN(k) ? !0 : k === parseInt(k, 10) : typeof k == "boolean" ? !0 : typeof k == "string" ? k.indexOf(".") < 0 : !1;
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
  static toListIndex(k, F, g) {
    if (typeof k != "number") {
      if (k === "all")
        return g ? ot.LIST_ALL : ot.LIST_INVALID;
      if (k === "last")
        return F > 0 ? F : ot.LIST_INVALID;
      if (k === "random" || k === "any")
        return F > 0 ? 1 + Math.floor(Math.random() * F) : ot.LIST_INVALID;
    }
    return k = Math.floor(ot.toNumber(k)), k < 1 || k > F ? ot.LIST_INVALID : k;
  }
}
const Pt = {
  opcode: "setChannel",
  blockType: Scratch.BlockType.COMMAND,
  text: "チャンネルを [CHANNEL_NAME] にする",
  arguments: {
    CHANNEL_NAME: {
      type: dt.STRING,
      defaultValue: "グループ１"
    }
  },
  code: function(nt) {
    if (!this.server)
      return;
    const k = ot.toString(nt.CHANNEL_NAME);
    this.server.setChannel(k);
  }
}, xt = {
  opcode: "send",
  blockType: Scratch.BlockType.COMMAND,
  text: "[MESSAGE] を送る",
  arguments: {
    MESSAGE: {
      type: dt.STRING,
      defaultValue: "ありがとう!"
    }
  },
  code: function(nt) {
    if (!this.server)
      return;
    const k = ot.toString(nt.MESSAGE);
    this.server.send(k);
  }
}, wt = {
  opcode: "setIpAddress",
  blockType: Scratch.BlockType.COMMAND,
  text: "IPアドレスを [IP_ADDRESS] にする",
  arguments: {
    IP_ADDRESS: {
      type: dt.STRING,
      defaultValue: "192.168.1.100"
    }
  },
  code: function(nt) {
    if (!this.server)
      return;
    const k = ot.toString(nt.IP_ADDRESS);
    this.server.setChannel(k);
  }
}, Lt = {
  opcode: "sendToIpAddress",
  blockType: Scratch.BlockType.COMMAND,
  text: " [IP_ADDRESS] に [MESSAGE] を送る",
  arguments: {
    IP_ADDRESS: {
      type: dt.STRING,
      defaultValue: "192.168.1.100"
    },
    MESSAGE: {
      type: dt.STRING,
      defaultValue: "ありがとう!"
    }
  },
  code: function(nt) {
    if (!this.server)
      return;
    const k = ot.toString(nt.MESSAGE), F = ot.toString(nt.IP_ADDRESS);
    this.server.sendTo(k, F);
  }
}, Dt = {
  opcode: "whenReceived",
  blockType: Scratch.BlockType.HAT,
  text: "文字列を受け取ったとき",
  isEdgeActivated: !1,
  code: function() {
    return !0;
  }
}, Nt = {
  opcode: "receivedMessage",
  blockType: Scratch.BlockType.REPORTER,
  text: "受け取った文字列",
  code: function() {
    return this.lastReceivedMessage;
  }
}, Bt = {
  opcode: "disconnect",
  blockType: Scratch.BlockType.COMMAND,
  text: "切断する",
  code: function() {
    this.server && (this.server.disconnect(), this.server = void 0);
  }
}, yt = [
  bt,
  "---",
  Pt,
  xt,
  "---",
  wt,
  Lt,
  "---",
  Dt,
  Nt,
  "---",
  Bt
], mt = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMjggLTEyOCA3NjggNzY4Ij48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNC4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIzIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDM4LjYgMTUwLjZjMTIuNS0xMi41IDEyLjUtMzIuOCAwLTQ1LjNsLTk2LTk2Yy0xMi41LTEyLjUtMzIuOC0xMi41LTQ1LjMgMHMtMTIuNSAzMi44IDAgNDUuM0wzMzguNyA5NiAzMiA5NkMxNC4zIDk2IDAgMTEwLjMgMCAxMjhzMTQuMyAzMiAzMiAzMmwzMDYuNyAwLTQxLjQgNDEuNGMtMTIuNSAxMi41LTEyLjUgMzIuOCAwIDQ1LjNzMzIuOCAxMi41IDQ1LjMgMGw5Ni05NnptLTMzMy4zIDM1MmMxMi41IDEyLjUgMzIuOCAxMi41IDQ1LjMgMHMxMi41LTMyLjggMC00NS4zTDEwOS4zIDQxNiA0MTYgNDE2YzE3LjcgMCAzMi0xNC4zIDMyLTMycy0xNC4zLTMyLTMyLTMybC0zMDYuNyAwIDQxLjQtNDEuNGMxMi41LTEyLjUgMTIuNS0zMi44IDAtNDUuM3MtMzIuOC0xMi41LTQ1LjMgMGwtOTYgOTZjLTEyLjUgMTIuNS0xMi41IDMyLjggMCA0NS4zbDk2IDk2eiIvPjwvc3ZnPgo=", Ut = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAF0CAMAAADIPrc+AAAC6npUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHja7ZVbsuQmDIbfWUWWgCSExHIwl6rsIMvPD6b7dJ+ZSWZqUpWXY8qIFrIk65PpMP76c4Y/cJFaDknNc8k54kolFa5YeLyvsmeKac/7Uo98tG/6YOksGVIg5d6wekuq0OvHA48YdL3rg58d9uPobJy4UVbkte6vSULPt57ScVTGvcjF7TXV6zhqx3Cncu70TOsW63d4Uxiq1BWBhHkISdxzujOQ+67QEOYoBXZxa6KkAMGSjzMU5O31HjLG1wK9FfmxCp+r/3jVz8XneizkUy3zqREW390g/aSXZ3x+DSzPjPh9Y96/3l/n3HN2n3Pcb1dTRkXz6ahdbHq4geGFkst+LGMYbsXa9igYHmtsQN5jixdGo0IMKjNQok6VJo0tGzWkmHiwQTI3lq1zMS7cwAcU16DJJkW6OGA1HkEEan7mQjtu2fEaOSJ3gikTnBEe+eEI/7T5KyPM2VaJaBUT6OkGzKuvkcYit2ZYAQHNw013gR/j4I8vjbVaNcFsldnxgjVet4tL6aO3ZHMW2CnkzZiC9eMAJUJsRTL4BBLFTKKUKRqzEaGODkAVmbMkvkCAVLkjSU4imYOx84qNZ4y2LStnXmqcTQChksXApkgFrJQU/WPJ0UNVRZOqZjX1oEVrlpyy5pwtr0OumlgynHpm5lasunhy9ezm7sVr4SI4A7XkYsVLKbVyqAhU4avCvkJz8SVXuvTKl11+las2tE9LTVtu1ryVVjt36Tgmeu7WvZdeB4WBk2KkoSMPGz7KqBO9NmWmqTNPmz7LrE9qh+o34xeo0aHGm9Sysyc1aIPZwwWt40QXMxDjRCBuiwAamhez6JQSL3KLWSyMj0IZSepiEzotYkCYBrFOerL7IPdT3IL6T3HjfyMXFrr/glwAum+5fYdaX/9zbRO7v8JV0yj4+kwpKQXFUZvWMv6eDL/r4MvRl6MvR1+O/kdHhvOyhL8BkA6ioZib3uQAAAGEaUNDUElDQyBwcm9maWxlAAB4nH2RPUjDQBzFX1OlRSsdrCDikKE6WRAVcdQqFKFCqBVadTC59AuaNCQtLo6Ca8HBj8Wqg4uzrg6ugiD4AeLk6KToIiX+Lym0iPHguB/v7j3u3gFCo8w0q2sc0PSqmUrExUx2VQy8ohdBhOHHgMwsY06SkvAcX/fw8fUuxrO8z/05+tScxQCfSDzLDLNKvEE8vVk1OO8TR1hRVonPicdMuiDxI9cVl984FxwWeGbETKfmiSPEYqGDlQ5mRVMjniKOqppO+ULGZZXzFmetXGOte/IXhnL6yjLXaQ4jgUUsQYIIBTWUUEYVMVp1UiykaD/u4R9y/BK5FHKVwMixgAo0yI4f/A9+d2vlJyfcpFAc6H6x7Y8RILALNOu2/X1s280TwP8MXOltf6UBzHySXm9r0SMgvA1cXLc1ZQ+43AEGnwzZlB3JT1PI54H3M/qmLNB/C/Ssub219nH6AKSpq+QNcHAIjBYoe93j3cHO3v490+rvB/sscnfAa9baAAADAFBMVEX/tjf/qxn/qxn/////tDDm5+jp6OhMl//S09R8h6XZkhVzfJc9ecz/rR7/sij/rBr/sCXe4emRl6v/syz/ryLv7u6Xn7a6vcVBR1fMTCOLkqbAjTadpby1tbazuMeussCdkILMzdS+w9Kgo6vpnRo+Q1Hc3uXg4eP09PS7RyOxt8fMz9f3pRi+mV+anaUjHyDsnxfP0dc+e89Fi+vZmSi5lFhFiOZLlfxHj/HeojzjmBZJkfXi4uRAf9ba296Kk61BgdnT1dlrc4uQmbLd3t9DhN/opS+XnbE/RVTX2NlKk/nk5eZ6g5zPn0a9wMqDjamDi6KSmrLV1NRCgtzZ2ds/fdJ1f5tBP0GusLSlq7zGyMxEhuLT1NXJy9G4usCLkKKfpbapqrDFx9CKjJTESSNJfMH7qBnboTrv8PPT1d2kp6zvoRm+SCO4vsvzqCSorb739/lSh9BTfbiFj6tdf6vJSyPZlh+ovt6MlrDZ2+GjqLeJkKZHgM5DeslIe8GBjKhuhqCViXbAwsh7hJ+GjInupyvW2uS8zOF8otettMd+horfmyW1ucXyoxmSr9hMfcS9UjH0pBrc4OZoldJhgqtngKLAkkT2rjFxm9bPvrmfo7DKoZSRj5C4mF+pkF0sKi+/wMQpJiics9Jdj9JHTFo6PkozMzqDRTPG0+afknSqlGdRVmTBak/3qSJ3lcBdgrqDiZx3eoK/lEeprrp5gZx6ipazkVHKljv8/PycueFYiMvRyslzhJSJh35jaHTUmTHt7OyVjouslXJZXmvCmlJkQzqpSSvn5+yIptB1m89ikM6zt8PMsKiSj37DeGCwxuWHqdmuvdNthK6OlaqBgYe1mWuejWqmh1bmoSndlRXR2ue/yNRJgc+xt8iPk5tvbnLWoEW/YURpjcJmg7RveJG+nmnHjXxQTU7b5vWFl7h2hqmUl5/FhHDdqErprUJMQT/z9/y2wtN7gpjIlodoZWZeW1zPpFSPnLl6j7OSma3JjymLn7yxkWGYSC+hSC1rgZ1/P1X8AAAAAWJLR0QAiAUdSAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+QLCA8EGmE3kYkAAAKjSURBVHja7dVBCQAACARBqxvMFgayhIKPmQjHwkXDgTABwkJYCAuEhbAQFggLYSEsEBbCQlggLISFsEBYCAthgbAQFsICYSEshAXCQlgIC4SFsBAWCAthISwQFsJCWCAshIWwQFgIC2GBsBAWwgJhISyEBcJCWAgLhIWwEBYIC2EhLFgPq9JyXIRVlsMVIiyEBcJCWAgLhIWwEBYIC2EhLBAWwkJYICyEhbBAWAgLYYGwEBbCAmEhLIQFwkJYCAthmQBhISyEBcJCWAgLhIWwEBYIC2EhLBAWwkJYICyEhbBAWAgLYYGwEBbCAmEhLIQFwkJYCAuEhbAQFggLYSEsEBbCQlggLISFsEBYCAthgbAQFsICYSEshAXCQlgIC4SFsBAWCAthISwQFsJCWCAshIWwQFgIC2GBsBAWwgJhISyEBcJCWAgLhIWwEBYIC2EhLBAWwkJYCAuEhbAQFggLYSEsEBbCQlggLISFsEBYCAthgbAQFsICYSEshAXCQlgIC4SFsBAWCAthISwQFsJCWCAshIWwQFgIC2GBsBAWwgJhISyEBcJCWAgLhIWwEBYIC2EhLBAWwkJYICyEhbBAWAgLYYGwEBbCAmEhLIQFwkJYCAuEhbAQFggLYSEsEBbCQlggLISFsBAWCAthISwQFsJCWCAshIWwQFgIC2GBsBAWwgJhISyEBcJCWAgLhIWwEBYIC2EhLBAWwkJYICyEhbBAWAgLYYGwEBbCAmEhLIQFwkJYCAuEhbAQFggLYSEsEBbCQlggLISFsEBYCAthgbAQFsICYSEshAXCQlgIC4SFsBAWCAthISwQFsJCWCAshIWwQFgIC2EhLBMgLISFsEBYCAthgbAQFsICYSEshAXCQlgIC4SFsBAWCAthISwQFh8N7oIvN98ImQ4AAAAASUVORK5CYII=";
class jt {
  constructor() {
    yt.forEach(({ opcode: k, code: F }) => this[k] = F);
  }
  getInfo() {
    return {
      id: "comm",
      name: "Comm",
      color1: "#a0a0a0",
      color2: "#808080",
      color3: "#606060",
      blockIconURI: mt,
      menuIconURI: mt,
      blocks: yt
    };
  }
}
const Gt = {
  name: "双方向通信",
  extensionId: "comm",
  collaborator: "Ikuo TERADO",
  iconURL: Ut,
  insetIconURL: mt,
  description: "他デバイスと双方向通信する。",
  featured: !0,
  internetConnectionRequired: !0
};
export {
  jt as blockClass,
  Gt as entry
};
