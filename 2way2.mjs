function vt(H) {
  return H && H.__esModule && Object.prototype.hasOwnProperty.call(H, "default") ? H.default : H;
}
const kt = {
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
var Qt = kt;
const dt = /* @__PURE__ */ vt(Qt), Jt = {
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
var _t = Jt;
const Et = /* @__PURE__ */ vt(_t);
let Kt = class pt {
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
  static decimalToHex(B) {
    B < 0 && (B += 16777215 + 1);
    let N = Number(B).toString(16);
    return N = `#${"000000".substr(0, 6 - N.length)}${N}`, N;
  }
  /**
   * Convert a Scratch decimal color to an RGB color object.
   * @param {number} decimal RGB color as decimal.
   * @return {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
   */
  static decimalToRgb(B) {
    const N = B >> 24 & 255, f = B >> 16 & 255, s = B >> 8 & 255, d = B & 255;
    return { r: f, g: s, b: d, a: N > 0 ? N : 255 };
  }
  /**
   * Convert a hex color (e.g., F00, #03F, #0033FF) to an RGB color object.
   * CC-BY-SA Tim Down:
   * https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
   * @param {!string} hex Hex representation of the color.
   * @return {RGBObject} null on failure, or rgb: {r: red [0,255], g: green [0,255], b: blue [0,255]}.
   */
  static hexToRgb(B) {
    const N = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    B = B.replace(N, (s, d, o, P) => d + d + o + o + P + P);
    const f = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(B);
    return f ? {
      r: parseInt(f[1], 16),
      g: parseInt(f[2], 16),
      b: parseInt(f[3], 16)
    } : null;
  }
  /**
   * Convert an RGB color object to a hex color.
   * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
   * @return {!string} Hex representation of the color.
   */
  static rgbToHex(B) {
    return pt.decimalToHex(pt.rgbToDecimal(B));
  }
  /**
   * Convert an RGB color object to a Scratch decimal color.
   * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
   * @return {!number} Number representing the color.
   */
  static rgbToDecimal(B) {
    return (B.r << 16) + (B.g << 8) + B.b;
  }
  /**
  * Convert a hex color (e.g., F00, #03F, #0033FF) to a decimal color number.
  * @param {!string} hex Hex representation of the color.
  * @return {!number} Number representing the color.
  */
  static hexToDecimal(B) {
    return pt.rgbToDecimal(pt.hexToRgb(B));
  }
  /**
   * Convert an HSV color to RGB format.
   * @param {HSVObject} hsv - {h: hue [0,360), s: saturation [0,1], v: value [0,1]}
   * @return {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
   */
  static hsvToRgb(B) {
    let N = B.h % 360;
    N < 0 && (N += 360);
    const f = Math.max(0, Math.min(B.s, 1)), s = Math.max(0, Math.min(B.v, 1)), d = Math.floor(N / 60), o = N / 60 - d, P = s * (1 - f), E = s * (1 - f * o), M = s * (1 - f * (1 - o));
    let L, b, m;
    switch (d) {
      default:
      case 0:
        L = s, b = M, m = P;
        break;
      case 1:
        L = E, b = s, m = P;
        break;
      case 2:
        L = P, b = s, m = M;
        break;
      case 3:
        L = P, b = E, m = s;
        break;
      case 4:
        L = M, b = P, m = s;
        break;
      case 5:
        L = s, b = P, m = E;
        break;
    }
    return {
      r: Math.floor(L * 255),
      g: Math.floor(b * 255),
      b: Math.floor(m * 255)
    };
  }
  /**
   * Convert an RGB color to HSV format.
   * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
   * @return {HSVObject} hsv - {h: hue [0,360), s: saturation [0,1], v: value [0,1]}
   */
  static rgbToHsv(B) {
    const N = B.r / 255, f = B.g / 255, s = B.b / 255, d = Math.min(Math.min(N, f), s), o = Math.max(Math.max(N, f), s);
    let P = 0, E = 0;
    if (d !== o) {
      const M = N === d ? f - s : f === d ? s - N : N - f;
      P = ((N === d ? 3 : f === d ? 5 : 1) - M / (o - d)) * 60 % 360, E = (o - d) / o;
    }
    return { h: P, s: E, v: o };
  }
  /**
   * Linear interpolation between rgb0 and rgb1.
   * @param {RGBObject} rgb0 - the color corresponding to fraction1 <= 0.
   * @param {RGBObject} rgb1 - the color corresponding to fraction1 >= 1.
   * @param {number} fraction1 - the interpolation parameter. If this is 0.5, for example, mix the two colors equally.
   * @return {RGBObject} the interpolated color.
   */
  static mixRgb(B, N, f) {
    if (f <= 0)
      return B;
    if (f >= 1)
      return N;
    const s = 1 - f;
    return {
      r: s * B.r + f * N.r,
      g: s * B.g + f * N.g,
      b: s * B.b + f * N.b
    };
  }
};
var Yt = Kt;
const It = Yt;
class ft {
  /**
   * Scratch cast to number.
   * Treats NaN as 0.
   * In Scratch 2.0, this is captured by `interp.numArg.`
   * @param {*} value Value to cast to number.
   * @return {number} The Scratch-casted number value.
   */
  static toNumber(B) {
    if (typeof B == "number")
      return Number.isNaN(B) ? 0 : B;
    const N = Number(B);
    return Number.isNaN(N) ? 0 : N;
  }
  /**
   * Scratch cast to boolean.
   * In Scratch 2.0, this is captured by `interp.boolArg.`
   * Treats some string values differently from JavaScript.
   * @param {*} value Value to cast to boolean.
   * @return {boolean} The Scratch-casted boolean value.
   */
  static toBoolean(B) {
    return typeof B == "boolean" ? B : typeof B == "string" ? !(B === "" || B === "0" || B.toLowerCase() === "false") : !!B;
  }
  /**
   * Scratch cast to string.
   * @param {*} value Value to cast to string.
   * @return {string} The Scratch-casted string value.
   */
  static toString(B) {
    return String(B);
  }
  /**
   * Cast any Scratch argument to an RGB color array to be used for the renderer.
   * @param {*} value Value to convert to RGB color array.
   * @return {Array.<number>} [r,g,b], values between 0-255.
   */
  static toRgbColorList(B) {
    const N = ft.toRgbColorObject(B);
    return [N.r, N.g, N.b];
  }
  /**
   * Cast any Scratch argument to an RGB color object to be used for the renderer.
   * @param {*} value Value to convert to RGB color object.
   * @return {RGBOject} [r,g,b], values between 0-255.
   */
  static toRgbColorObject(B) {
    let N;
    return typeof B == "string" && B.substring(0, 1) === "#" ? (N = It.hexToRgb(B), N || (N = { r: 0, g: 0, b: 0, a: 255 })) : N = It.decimalToRgb(ft.toNumber(B)), N;
  }
  /**
   * Determine if a Scratch argument is a white space string (or null / empty).
   * @param {*} val value to check.
   * @return {boolean} True if the argument is all white spaces or null / empty.
   */
  static isWhiteSpace(B) {
    return B === null || typeof B == "string" && B.trim().length === 0;
  }
  /**
   * Compare two values, using Scratch cast, case-insensitive string compare, etc.
   * In Scratch 2.0, this is captured by `interp.compare.`
   * @param {*} v1 First value to compare.
   * @param {*} v2 Second value to compare.
   * @returns {number} Negative number if v1 < v2; 0 if equal; positive otherwise.
   */
  static compare(B, N) {
    let f = Number(B), s = Number(N);
    if (f === 0 && ft.isWhiteSpace(B) ? f = NaN : s === 0 && ft.isWhiteSpace(N) && (s = NaN), isNaN(f) || isNaN(s)) {
      const d = String(B).toLowerCase(), o = String(N).toLowerCase();
      return d < o ? -1 : d > o ? 1 : 0;
    }
    return f === 1 / 0 && s === 1 / 0 || f === -1 / 0 && s === -1 / 0 ? 0 : f - s;
  }
  /**
   * Determine if a Scratch argument number represents a round integer.
   * @param {*} val Value to check.
   * @return {boolean} True if number looks like an integer.
   */
  static isInt(B) {
    return typeof B == "number" ? isNaN(B) ? !0 : B === parseInt(B, 10) : typeof B == "boolean" ? !0 : typeof B == "string" ? B.indexOf(".") < 0 : !1;
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
  static toListIndex(B, N, f) {
    if (typeof B != "number") {
      if (B === "all")
        return f ? ft.LIST_ALL : ft.LIST_INVALID;
      if (B === "last")
        return N > 0 ? N : ft.LIST_INVALID;
      if (B === "random" || B === "any")
        return N > 0 ? 1 + Math.floor(Math.random() * N) : ft.LIST_INVALID;
    }
    return B = Math.floor(ft.toNumber(B)), B < 1 || B > N ? ft.LIST_INVALID : B;
  }
}
var Xt = ft;
const Tt = /* @__PURE__ */ vt(Xt), wt = "%[a-f0-9]{2}", Mt = new RegExp("(" + wt + ")|([^%]+?)", "gi"), bt = new RegExp("(" + wt + ")+", "gi");
function Ct(H, B) {
  try {
    return [decodeURIComponent(H.join(""))];
  } catch {
  }
  if (H.length === 1)
    return H;
  B = B || 1;
  const N = H.slice(0, B), f = H.slice(B);
  return Array.prototype.concat.call([], Ct(N), Ct(f));
}
function qt(H) {
  try {
    return decodeURIComponent(H);
  } catch {
    let B = H.match(Mt) || [];
    for (let N = 1; N < B.length; N++)
      H = Ct(B, N).join(""), B = H.match(Mt) || [];
    return H;
  }
}
function Zt(H) {
  const B = {
    "%FE%FF": "��",
    "%FF%FE": "��"
  };
  let N = bt.exec(H);
  for (; N; ) {
    try {
      B[N[0]] = decodeURIComponent(N[0]);
    } catch {
      const s = qt(N[0]);
      s !== N[0] && (B[N[0]] = s);
    }
    N = bt.exec(H);
  }
  B["%C2"] = "�";
  const f = Object.keys(B);
  for (const s of f)
    H = H.replace(new RegExp(s, "g"), B[s]);
  return H;
}
function $t(H) {
  if (typeof H != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof H + "`");
  try {
    return decodeURIComponent(H);
  } catch {
    return Zt(H);
  }
}
function Lt(H, B) {
  if (!(typeof H == "string" && typeof B == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (H === "" || B === "")
    return [];
  const N = H.indexOf(B);
  return N === -1 ? [] : [
    H.slice(0, N),
    H.slice(N + B.length)
  ];
}
function te(H, B) {
  const N = {};
  if (Array.isArray(B))
    for (const f of B) {
      const s = Object.getOwnPropertyDescriptor(H, f);
      s != null && s.enumerable && Object.defineProperty(N, f, s);
    }
  else
    for (const f of Reflect.ownKeys(H)) {
      const s = Object.getOwnPropertyDescriptor(H, f);
      if (s.enumerable) {
        const d = H[f];
        B(f, d, H) && Object.defineProperty(N, f, s);
      }
    }
  return N;
}
const ee = (H) => H == null, ne = (H) => encodeURIComponent(H).replace(/[!'()*]/g, (B) => `%${B.charCodeAt(0).toString(16).toUpperCase()}`), At = Symbol("encodeFragmentIdentifier");
function re(H) {
  switch (H.arrayFormat) {
    case "index":
      return (B) => (N, f) => {
        const s = N.length;
        return f === void 0 || H.skipNull && f === null || H.skipEmptyString && f === "" ? N : f === null ? [
          ...N,
          [it(B, H), "[", s, "]"].join("")
        ] : [
          ...N,
          [it(B, H), "[", it(s, H), "]=", it(f, H)].join("")
        ];
      };
    case "bracket":
      return (B) => (N, f) => f === void 0 || H.skipNull && f === null || H.skipEmptyString && f === "" ? N : f === null ? [
        ...N,
        [it(B, H), "[]"].join("")
      ] : [
        ...N,
        [it(B, H), "[]=", it(f, H)].join("")
      ];
    case "colon-list-separator":
      return (B) => (N, f) => f === void 0 || H.skipNull && f === null || H.skipEmptyString && f === "" ? N : f === null ? [
        ...N,
        [it(B, H), ":list="].join("")
      ] : [
        ...N,
        [it(B, H), ":list=", it(f, H)].join("")
      ];
    case "comma":
    case "separator":
    case "bracket-separator": {
      const B = H.arrayFormat === "bracket-separator" ? "[]=" : "=";
      return (N) => (f, s) => s === void 0 || H.skipNull && s === null || H.skipEmptyString && s === "" ? f : (s = s === null ? "" : s, f.length === 0 ? [[it(N, H), B, it(s, H)].join("")] : [[f, it(s, H)].join(H.arrayFormatSeparator)]);
    }
    default:
      return (B) => (N, f) => f === void 0 || H.skipNull && f === null || H.skipEmptyString && f === "" ? N : f === null ? [
        ...N,
        it(B, H)
      ] : [
        ...N,
        [it(B, H), "=", it(f, H)].join("")
      ];
  }
}
function ie(H) {
  let B;
  switch (H.arrayFormat) {
    case "index":
      return (N, f, s) => {
        if (B = /\[(\d*)]$/.exec(N), N = N.replace(/\[\d*]$/, ""), !B) {
          s[N] = f;
          return;
        }
        s[N] === void 0 && (s[N] = {}), s[N][B[1]] = f;
      };
    case "bracket":
      return (N, f, s) => {
        if (B = /(\[])$/.exec(N), N = N.replace(/\[]$/, ""), !B) {
          s[N] = f;
          return;
        }
        if (s[N] === void 0) {
          s[N] = [f];
          return;
        }
        s[N] = [...s[N], f];
      };
    case "colon-list-separator":
      return (N, f, s) => {
        if (B = /(:list)$/.exec(N), N = N.replace(/:list$/, ""), !B) {
          s[N] = f;
          return;
        }
        if (s[N] === void 0) {
          s[N] = [f];
          return;
        }
        s[N] = [...s[N], f];
      };
    case "comma":
    case "separator":
      return (N, f, s) => {
        const d = typeof f == "string" && f.includes(H.arrayFormatSeparator), o = typeof f == "string" && !d && lt(f, H).includes(H.arrayFormatSeparator);
        f = o ? lt(f, H) : f;
        const P = d || o ? f.split(H.arrayFormatSeparator).map((E) => lt(E, H)) : f === null ? f : lt(f, H);
        s[N] = P;
      };
    case "bracket-separator":
      return (N, f, s) => {
        const d = /(\[])$/.test(N);
        if (N = N.replace(/\[]$/, ""), !d) {
          s[N] = f && lt(f, H);
          return;
        }
        const o = f === null ? [] : f.split(H.arrayFormatSeparator).map((P) => lt(P, H));
        if (s[N] === void 0) {
          s[N] = o;
          return;
        }
        s[N] = [...s[N], ...o];
      };
    default:
      return (N, f, s) => {
        if (s[N] === void 0) {
          s[N] = f;
          return;
        }
        s[N] = [...[s[N]].flat(), f];
      };
  }
}
function Dt(H) {
  if (typeof H != "string" || H.length !== 1)
    throw new TypeError("arrayFormatSeparator must be single character string");
}
function it(H, B) {
  return B.encode ? B.strict ? ne(H) : encodeURIComponent(H) : H;
}
function lt(H, B) {
  return B.decode ? $t(H) : H;
}
function Nt(H) {
  return Array.isArray(H) ? H.sort() : typeof H == "object" ? Nt(Object.keys(H)).sort((B, N) => Number(B) - Number(N)).map((B) => H[B]) : H;
}
function Ut(H) {
  const B = H.indexOf("#");
  return B !== -1 && (H = H.slice(0, B)), H;
}
function oe(H) {
  let B = "";
  const N = H.indexOf("#");
  return N !== -1 && (B = H.slice(N)), B;
}
function Pt(H, B) {
  return B.parseNumbers && !Number.isNaN(Number(H)) && typeof H == "string" && H.trim() !== "" ? H = Number(H) : B.parseBooleans && H !== null && (H.toLowerCase() === "true" || H.toLowerCase() === "false") && (H = H.toLowerCase() === "true"), H;
}
function St(H) {
  H = Ut(H);
  const B = H.indexOf("?");
  return B === -1 ? "" : H.slice(B + 1);
}
function Rt(H, B) {
  B = {
    decode: !0,
    sort: !0,
    arrayFormat: "none",
    arrayFormatSeparator: ",",
    parseNumbers: !1,
    parseBooleans: !1,
    ...B
  }, Dt(B.arrayFormatSeparator);
  const N = ie(B), f = /* @__PURE__ */ Object.create(null);
  if (typeof H != "string" || (H = H.trim().replace(/^[?#&]/, ""), !H))
    return f;
  for (const s of H.split("&")) {
    if (s === "")
      continue;
    const d = B.decode ? s.replace(/\+/g, " ") : s;
    let [o, P] = Lt(d, "=");
    o === void 0 && (o = d), P = P === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(B.arrayFormat) ? P : lt(P, B), N(lt(o, B), P, f);
  }
  for (const [s, d] of Object.entries(f))
    if (typeof d == "object" && d !== null)
      for (const [o, P] of Object.entries(d))
        d[o] = Pt(P, B);
    else
      f[s] = Pt(d, B);
  return B.sort === !1 ? f : (B.sort === !0 ? Object.keys(f).sort() : Object.keys(f).sort(B.sort)).reduce((s, d) => {
    const o = f[d];
    return o && typeof o == "object" && !Array.isArray(o) ? s[d] = Nt(o) : s[d] = o, s;
  }, /* @__PURE__ */ Object.create(null));
}
function Bt(H, B) {
  if (!H)
    return "";
  B = {
    encode: !0,
    strict: !0,
    arrayFormat: "none",
    arrayFormatSeparator: ",",
    ...B
  }, Dt(B.arrayFormatSeparator);
  const N = (o) => B.skipNull && ee(H[o]) || B.skipEmptyString && H[o] === "", f = re(B), s = {};
  for (const [o, P] of Object.entries(H))
    N(o) || (s[o] = P);
  const d = Object.keys(s);
  return B.sort !== !1 && d.sort(B.sort), d.map((o) => {
    const P = H[o];
    return P === void 0 ? "" : P === null ? it(o, B) : Array.isArray(P) ? P.length === 0 && B.arrayFormat === "bracket-separator" ? it(o, B) + "[]" : P.reduce(f(o), []).join("&") : it(o, B) + "=" + it(P, B);
  }).filter((o) => o.length > 0).join("&");
}
function jt(H, B) {
  var s;
  B = {
    decode: !0,
    ...B
  };
  let [N, f] = Lt(H, "#");
  return N === void 0 && (N = H), {
    url: ((s = N == null ? void 0 : N.split("?")) == null ? void 0 : s[0]) ?? "",
    query: Rt(St(H), B),
    ...B && B.parseFragmentIdentifier && f ? { fragmentIdentifier: lt(f, B) } : {}
  };
}
function Gt(H, B) {
  B = {
    encode: !0,
    strict: !0,
    [At]: !0,
    ...B
  };
  const N = Ut(H.url).split("?")[0] || "", f = St(H.url), s = {
    ...Rt(f, { sort: !1 }),
    ...H.query
  };
  let d = Bt(s, B);
  d && (d = `?${d}`);
  let o = oe(H.url);
  if (H.fragmentIdentifier) {
    const P = new URL(N);
    P.hash = H.fragmentIdentifier, o = B[At] ? P.hash : `#${H.fragmentIdentifier}`;
  }
  return `${N}${d}${o}`;
}
function Ft(H, B, N) {
  N = {
    parseFragmentIdentifier: !0,
    [At]: !1,
    ...N
  };
  const { url: f, query: s, fragmentIdentifier: d } = jt(H, N);
  return Gt({
    url: f,
    query: te(s, B),
    fragmentIdentifier: d
  }, N);
}
function ae(H, B, N) {
  const f = Array.isArray(B) ? (s) => !B.includes(s) : (s, d) => !B(s, d);
  return Ft(H, f, N);
}
const se = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exclude: ae,
  extract: St,
  parse: Rt,
  parseUrl: jt,
  pick: Ft,
  stringify: Bt,
  stringifyUrl: Gt
}, Symbol.toStringTag, { value: "Module" }));
var Ht = { exports: {} };
/*!
 * @license Copyright 2015-2022 Ably Real-time Ltd (ably.com)
 * 
 * Ably JavaScript Library v1.2.41
 * https://github.com/ably/ably-js
 * 
 * Released under the Apache Licence v2.0
 */
(function(H, B) {
  (function(f, s) {
    H.exports = s();
  })(window, function() {
    return (
      /******/
      function(N) {
        var f = {};
        function s(d) {
          if (f[d])
            return f[d].exports;
          var o = f[d] = {
            /******/
            i: d,
            /******/
            l: !1,
            /******/
            exports: {}
            /******/
          };
          return N[d].call(o.exports, o, o.exports, s), o.l = !0, o.exports;
        }
        return s.m = N, s.c = f, s.d = function(d, o, P) {
          s.o(d, o) || Object.defineProperty(d, o, { enumerable: !0, get: P });
        }, s.r = function(d) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(d, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(d, "__esModule", { value: !0 });
        }, s.t = function(d, o) {
          if (o & 1 && (d = s(d)), o & 8 || o & 4 && typeof d == "object" && d && d.__esModule)
            return d;
          var P = /* @__PURE__ */ Object.create(null);
          if (s.r(P), Object.defineProperty(P, "default", { enumerable: !0, value: d }), o & 2 && typeof d != "string")
            for (var E in d)
              s.d(P, E, (function(M) {
                return d[M];
              }).bind(null, E));
          return P;
        }, s.n = function(d) {
          var o = d && d.__esModule ? (
            /******/
            function() {
              return d.default;
            }
          ) : (
            /******/
            function() {
              return d;
            }
          );
          return s.d(o, "a", o), o;
        }, s.o = function(d, o) {
          return Object.prototype.hasOwnProperty.call(d, o);
        }, s.p = "", s(s.s = 42);
      }([
        /* 0 */
        /***/
        function(N, f, s) {
          s.r(f), s.d(f, "__extends", function() {
            return o;
          }), s.d(f, "__assign", function() {
            return P;
          }), s.d(f, "__rest", function() {
            return E;
          }), s.d(f, "__decorate", function() {
            return M;
          }), s.d(f, "__param", function() {
            return L;
          }), s.d(f, "__metadata", function() {
            return b;
          }), s.d(f, "__awaiter", function() {
            return m;
          }), s.d(f, "__generator", function() {
            return C;
          }), s.d(f, "__createBinding", function() {
            return a;
          }), s.d(f, "__exportStar", function() {
            return h;
          }), s.d(f, "__values", function() {
            return R;
          }), s.d(f, "__read", function() {
            return A;
          }), s.d(f, "__spread", function() {
            return c;
          }), s.d(f, "__spreadArrays", function() {
            return l;
          }), s.d(f, "__spreadArray", function() {
            return p;
          }), s.d(f, "__await", function() {
            return r;
          }), s.d(f, "__asyncGenerator", function() {
            return n;
          }), s.d(f, "__asyncDelegator", function() {
            return t;
          }), s.d(f, "__asyncValues", function() {
            return e;
          }), s.d(f, "__makeTemplateObject", function() {
            return u;
          }), s.d(f, "__importStar", function() {
            return g;
          }), s.d(f, "__importDefault", function() {
            return O;
          }), s.d(f, "__classPrivateFieldGet", function() {
            return v;
          }), s.d(f, "__classPrivateFieldSet", function() {
            return S;
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
          var d = function(I, D) {
            return d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(T, U) {
              T.__proto__ = U;
            } || function(T, U) {
              for (var G in U)
                Object.prototype.hasOwnProperty.call(U, G) && (T[G] = U[G]);
            }, d(I, D);
          };
          function o(I, D) {
            if (typeof D != "function" && D !== null)
              throw new TypeError("Class extends value " + String(D) + " is not a constructor or null");
            d(I, D);
            function T() {
              this.constructor = I;
            }
            I.prototype = D === null ? Object.create(D) : (T.prototype = D.prototype, new T());
          }
          var P = function() {
            return P = Object.assign || function(D) {
              for (var T, U = 1, G = arguments.length; U < G; U++) {
                T = arguments[U];
                for (var W in T)
                  Object.prototype.hasOwnProperty.call(T, W) && (D[W] = T[W]);
              }
              return D;
            }, P.apply(this, arguments);
          };
          function E(I, D) {
            var T = {};
            for (var U in I)
              Object.prototype.hasOwnProperty.call(I, U) && D.indexOf(U) < 0 && (T[U] = I[U]);
            if (I != null && typeof Object.getOwnPropertySymbols == "function")
              for (var G = 0, U = Object.getOwnPropertySymbols(I); G < U.length; G++)
                D.indexOf(U[G]) < 0 && Object.prototype.propertyIsEnumerable.call(I, U[G]) && (T[U[G]] = I[U[G]]);
            return T;
          }
          function M(I, D, T, U) {
            var G = arguments.length, W = G < 3 ? D : U === null ? U = Object.getOwnPropertyDescriptor(D, T) : U, k;
            if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
              W = Reflect.decorate(I, D, T, U);
            else
              for (var J = I.length - 1; J >= 0; J--)
                (k = I[J]) && (W = (G < 3 ? k(W) : G > 3 ? k(D, T, W) : k(D, T)) || W);
            return G > 3 && W && Object.defineProperty(D, T, W), W;
          }
          function L(I, D) {
            return function(T, U) {
              D(T, U, I);
            };
          }
          function b(I, D) {
            if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
              return Reflect.metadata(I, D);
          }
          function m(I, D, T, U) {
            function G(W) {
              return W instanceof T ? W : new T(function(k) {
                k(W);
              });
            }
            return new (T || (T = Promise))(function(W, k) {
              function J(x) {
                try {
                  y(U.next(x));
                } catch (w) {
                  k(w);
                }
              }
              function V(x) {
                try {
                  y(U.throw(x));
                } catch (w) {
                  k(w);
                }
              }
              function y(x) {
                x.done ? W(x.value) : G(x.value).then(J, V);
              }
              y((U = U.apply(I, D || [])).next());
            });
          }
          function C(I, D) {
            var T = { label: 0, sent: function() {
              if (W[0] & 1)
                throw W[1];
              return W[1];
            }, trys: [], ops: [] }, U, G, W, k;
            return k = { next: J(0), throw: J(1), return: J(2) }, typeof Symbol == "function" && (k[Symbol.iterator] = function() {
              return this;
            }), k;
            function J(y) {
              return function(x) {
                return V([y, x]);
              };
            }
            function V(y) {
              if (U)
                throw new TypeError("Generator is already executing.");
              for (; T; )
                try {
                  if (U = 1, G && (W = y[0] & 2 ? G.return : y[0] ? G.throw || ((W = G.return) && W.call(G), 0) : G.next) && !(W = W.call(G, y[1])).done)
                    return W;
                  switch (G = 0, W && (y = [y[0] & 2, W.value]), y[0]) {
                    case 0:
                    case 1:
                      W = y;
                      break;
                    case 4:
                      return T.label++, { value: y[1], done: !1 };
                    case 5:
                      T.label++, G = y[1], y = [0];
                      continue;
                    case 7:
                      y = T.ops.pop(), T.trys.pop();
                      continue;
                    default:
                      if (W = T.trys, !(W = W.length > 0 && W[W.length - 1]) && (y[0] === 6 || y[0] === 2)) {
                        T = 0;
                        continue;
                      }
                      if (y[0] === 3 && (!W || y[1] > W[0] && y[1] < W[3])) {
                        T.label = y[1];
                        break;
                      }
                      if (y[0] === 6 && T.label < W[1]) {
                        T.label = W[1], W = y;
                        break;
                      }
                      if (W && T.label < W[2]) {
                        T.label = W[2], T.ops.push(y);
                        break;
                      }
                      W[2] && T.ops.pop(), T.trys.pop();
                      continue;
                  }
                  y = D.call(I, T);
                } catch (x) {
                  y = [6, x], G = 0;
                } finally {
                  U = W = 0;
                }
              if (y[0] & 5)
                throw y[1];
              return { value: y[0] ? y[1] : void 0, done: !0 };
            }
          }
          var a = Object.create ? function(I, D, T, U) {
            U === void 0 && (U = T), Object.defineProperty(I, U, { enumerable: !0, get: function() {
              return D[T];
            } });
          } : function(I, D, T, U) {
            U === void 0 && (U = T), I[U] = D[T];
          };
          function h(I, D) {
            for (var T in I)
              T !== "default" && !Object.prototype.hasOwnProperty.call(D, T) && a(D, I, T);
          }
          function R(I) {
            var D = typeof Symbol == "function" && Symbol.iterator, T = D && I[D], U = 0;
            if (T)
              return T.call(I);
            if (I && typeof I.length == "number")
              return {
                next: function() {
                  return I && U >= I.length && (I = void 0), { value: I && I[U++], done: !I };
                }
              };
            throw new TypeError(D ? "Object is not iterable." : "Symbol.iterator is not defined.");
          }
          function A(I, D) {
            var T = typeof Symbol == "function" && I[Symbol.iterator];
            if (!T)
              return I;
            var U = T.call(I), G, W = [], k;
            try {
              for (; (D === void 0 || D-- > 0) && !(G = U.next()).done; )
                W.push(G.value);
            } catch (J) {
              k = { error: J };
            } finally {
              try {
                G && !G.done && (T = U.return) && T.call(U);
              } finally {
                if (k)
                  throw k.error;
              }
            }
            return W;
          }
          function c() {
            for (var I = [], D = 0; D < arguments.length; D++)
              I = I.concat(A(arguments[D]));
            return I;
          }
          function l() {
            for (var I = 0, D = 0, T = arguments.length; D < T; D++)
              I += arguments[D].length;
            for (var U = Array(I), G = 0, D = 0; D < T; D++)
              for (var W = arguments[D], k = 0, J = W.length; k < J; k++, G++)
                U[G] = W[k];
            return U;
          }
          function p(I, D, T) {
            if (T || arguments.length === 2)
              for (var U = 0, G = D.length, W; U < G; U++)
                (W || !(U in D)) && (W || (W = Array.prototype.slice.call(D, 0, U)), W[U] = D[U]);
            return I.concat(W || Array.prototype.slice.call(D));
          }
          function r(I) {
            return this instanceof r ? (this.v = I, this) : new r(I);
          }
          function n(I, D, T) {
            if (!Symbol.asyncIterator)
              throw new TypeError("Symbol.asyncIterator is not defined.");
            var U = T.apply(I, D || []), G, W = [];
            return G = {}, k("next"), k("throw"), k("return"), G[Symbol.asyncIterator] = function() {
              return this;
            }, G;
            function k(j) {
              U[j] && (G[j] = function(z) {
                return new Promise(function(K, Y) {
                  W.push([j, z, K, Y]) > 1 || J(j, z);
                });
              });
            }
            function J(j, z) {
              try {
                V(U[j](z));
              } catch (K) {
                w(W[0][3], K);
              }
            }
            function V(j) {
              j.value instanceof r ? Promise.resolve(j.value.v).then(y, x) : w(W[0][2], j);
            }
            function y(j) {
              J("next", j);
            }
            function x(j) {
              J("throw", j);
            }
            function w(j, z) {
              j(z), W.shift(), W.length && J(W[0][0], W[0][1]);
            }
          }
          function t(I) {
            var D, T;
            return D = {}, U("next"), U("throw", function(G) {
              throw G;
            }), U("return"), D[Symbol.iterator] = function() {
              return this;
            }, D;
            function U(G, W) {
              D[G] = I[G] ? function(k) {
                return (T = !T) ? { value: r(I[G](k)), done: G === "return" } : W ? W(k) : k;
              } : W;
            }
          }
          function e(I) {
            if (!Symbol.asyncIterator)
              throw new TypeError("Symbol.asyncIterator is not defined.");
            var D = I[Symbol.asyncIterator], T;
            return D ? D.call(I) : (I = typeof R == "function" ? R(I) : I[Symbol.iterator](), T = {}, U("next"), U("throw"), U("return"), T[Symbol.asyncIterator] = function() {
              return this;
            }, T);
            function U(W) {
              T[W] = I[W] && function(k) {
                return new Promise(function(J, V) {
                  k = I[W](k), G(J, V, k.done, k.value);
                });
              };
            }
            function G(W, k, J, V) {
              Promise.resolve(V).then(function(y) {
                W({ value: y, done: J });
              }, k);
            }
          }
          function u(I, D) {
            return Object.defineProperty ? Object.defineProperty(I, "raw", { value: D }) : I.raw = D, I;
          }
          var i = Object.create ? function(I, D) {
            Object.defineProperty(I, "default", { enumerable: !0, value: D });
          } : function(I, D) {
            I.default = D;
          };
          function g(I) {
            if (I && I.__esModule)
              return I;
            var D = {};
            if (I != null)
              for (var T in I)
                T !== "default" && Object.prototype.hasOwnProperty.call(I, T) && a(D, I, T);
            return i(D, I), D;
          }
          function O(I) {
            return I && I.__esModule ? I : { default: I };
          }
          function v(I, D, T, U) {
            if (T === "a" && !U)
              throw new TypeError("Private accessor was defined without a getter");
            if (typeof D == "function" ? I !== D || !U : !D.has(I))
              throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return T === "m" ? U : T === "a" ? U.call(I) : U ? U.value : D.get(I);
          }
          function S(I, D, T, U, G) {
            if (U === "m")
              throw new TypeError("Private method is not writable");
            if (U === "a" && !G)
              throw new TypeError("Private accessor was defined without a setter");
            if (typeof D == "function" ? I !== D || !G : !D.has(I))
              throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return U === "a" ? G.call(I, T) : G ? G.value = T : D.set(I, T), T;
          }
        },
        /* 1 */
        /***/
        function(N, f, s) {
          (function(d) {
            Object.defineProperty(f, "__esModule", { value: !0 }), f.allToUpperCase = f.allToLowerCase = f.encodeBody = f.decodeBody = f.Format = f.promisify = f.trim = f.arrChooseN = f.randomHexString = f.randomString = f.cheapRandStr = f.dataSizeBytes = f.inspectBody = f.inspectError = f.isErrorInfoOrPartialErrorInfo = f.now = f.parseQueryString = f.toQueryString = f.arrPopRandomElement = f.defaultPostHeaders = f.defaultGetHeaders = f.allSame = f.arrEvery = f.arrFilter = f.arrMap = f.safeArrForEach = f.arrForEach = f.forInOwnNonNullProperties = f.valuesArray = f.keysArray = f.arrWithoutValue = f.arrDeleteValue = f.arrIn = f.arrIndexOf = f.arrSubtract = f.arrIntersectOb = f.arrIntersect = f.intersect = f.containsValue = f.inherits = f.prototypicalClone = f.shallowClone = f.isEmptyArg = f.isOnlyPropIn = f.isEmpty = f.isObject = f.ensureArray = f.isArray = f.copy = f.mixin = void 0, f.toBase64 = f.matchDerivedChannel = f.shallowEquals = f.getGlobalObject = f.getJitterCoefficient = f.getBackoffCoefficient = void 0;
            var o = s(0), P = o.__importDefault(s(3)), E = o.__importStar(s(8)), M = o.__importDefault(s(4)), L = s(11), b = s(30);
            function m(F) {
              return Math.floor(Math.random() * F.length);
            }
            function C(F) {
              for (var Q = [], _ = 1; _ < arguments.length; _++)
                Q[_ - 1] = arguments[_];
              for (var q = 0; q < Q.length; q++) {
                var tt = Q[q];
                if (!tt)
                  break;
                var at = Object.prototype.hasOwnProperty;
                for (var ht in tt)
                  (!at || at.call(tt, ht)) && (F[ht] = tt[ht]);
              }
              return F;
            }
            f.mixin = C;
            function a(F) {
              return C({}, F);
            }
            f.copy = a, f.isArray = Array.isArray || function(F) {
              return Object.prototype.toString.call(F) == "[object Array]";
            };
            function h(F) {
              return l(F) ? [] : (0, f.isArray)(F) ? F : [F];
            }
            f.ensureArray = h;
            function R(F) {
              return Object.prototype.toString.call(F) == "[object Object]";
            }
            f.isObject = R;
            function A(F) {
              for (var Q in F)
                return !1;
              return !0;
            }
            f.isEmpty = A;
            function c(F, Q) {
              for (var _ in F)
                if (_ !== Q)
                  return !1;
              return !0;
            }
            f.isOnlyPropIn = c;
            function l(F) {
              return F == null;
            }
            f.isEmptyArg = l;
            function p(F) {
              var Q = new Object();
              for (var _ in F)
                Q[_] = F[_];
              return Q;
            }
            f.shallowClone = p;
            function r(F, Q) {
              var _ = (
                /** @class */
                function() {
                  function tt() {
                  }
                  return tt;
                }()
              );
              _.prototype = F;
              var q = new _();
              return Q && C(q, Q), q;
            }
            f.prototypicalClone = r;
            var n = function(F, Q) {
              if (P.default.Config.inherits) {
                P.default.Config.inherits(F, Q);
                return;
              }
              F.super_ = Q, F.prototype = r(Q.prototype, { constructor: F });
            };
            f.inherits = n;
            function t(F, Q) {
              for (var _ in F)
                if (F[_] == Q)
                  return !0;
              return !1;
            }
            f.containsValue = t;
            function e(F, Q) {
              return (0, f.isArray)(Q) ? u(F, Q) : i(F, Q);
            }
            f.intersect = e;
            function u(F, Q) {
              for (var _ = [], q = 0; q < F.length; q++) {
                var tt = F[q];
                (0, f.arrIndexOf)(Q, tt) != -1 && _.push(tt);
              }
              return _;
            }
            f.arrIntersect = u;
            function i(F, Q) {
              for (var _ = [], q = 0; q < F.length; q++) {
                var tt = F[q];
                tt in Q && _.push(tt);
              }
              return _;
            }
            f.arrIntersectOb = i;
            function g(F, Q) {
              for (var _ = [], q = 0; q < F.length; q++) {
                var tt = F[q];
                (0, f.arrIndexOf)(Q, tt) == -1 && _.push(tt);
              }
              return _;
            }
            f.arrSubtract = g, f.arrIndexOf = Array.prototype.indexOf ? function(F, Q, _) {
              return F.indexOf(Q, _);
            } : function(F, Q, _) {
              _ = _ || 0;
              for (var q = F.length; _ < q; _++)
                if (F[_] === Q)
                  return _;
              return -1;
            };
            function O(F, Q) {
              return (0, f.arrIndexOf)(F, Q) !== -1;
            }
            f.arrIn = O;
            function v(F, Q) {
              var _ = (0, f.arrIndexOf)(F, Q), q = _ != -1;
              return q && F.splice(_, 1), q;
            }
            f.arrDeleteValue = v;
            function S(F, Q) {
              var _ = F.slice();
              return v(_, Q), _;
            }
            f.arrWithoutValue = S;
            function I(F, Q) {
              var _ = [];
              for (var q in F)
                Q && !Object.prototype.hasOwnProperty.call(F, q) || _.push(q);
              return _;
            }
            f.keysArray = I;
            function D(F, Q) {
              var _ = [];
              for (var q in F)
                Q && !Object.prototype.hasOwnProperty.call(F, q) || _.push(F[q]);
              return _;
            }
            f.valuesArray = D;
            function T(F, Q) {
              for (var _ in F)
                Object.prototype.hasOwnProperty.call(F, _) && F[_] && Q(_);
            }
            f.forInOwnNonNullProperties = T, f.arrForEach = Array.prototype.forEach ? function(F, Q) {
              F.forEach(Q);
            } : function(F, Q) {
              for (var _ = F.length, q = 0; q < _; q++)
                Q(F[q], q, F);
            };
            function U(F, Q) {
              return (0, f.arrForEach)(F.slice(), Q);
            }
            f.safeArrForEach = U, f.arrMap = Array.prototype.map ? function(F, Q) {
              return F.map(Q);
            } : function(F, Q) {
              for (var _ = [], q = F.length, tt = 0; tt < q; tt++)
                _.push(Q(F[tt], tt, F));
              return _;
            }, f.arrFilter = Array.prototype.filter ? function(F, Q) {
              return F.filter(Q);
            } : function(F, Q) {
              for (var _ = [], q = F.length, tt = 0; tt < q; tt++)
                Q(F[tt]) && _.push(F[tt]);
              return _;
            }, f.arrEvery = Array.prototype.every ? function(F, Q) {
              return F.every(Q);
            } : function(F, Q) {
              for (var _ = F.length, q = 0; q < _; q++)
                if (!Q(F[q], q, F))
                  return !1;
              return !0;
            };
            function G(F, Q) {
              if (F.length === 0)
                return !0;
              var _ = F[0][Q];
              return (0, f.arrEvery)(F, function(q) {
                return q[Q] === _;
              });
            }
            f.allSame = G;
            var W = {
              json: "application/json",
              jsonp: "application/javascript",
              xml: "application/xml",
              html: "text/html",
              msgpack: "application/x-msgpack"
            };
            function k(F, Q) {
              var _ = W[Q || rt.json];
              return {
                accept: _,
                "X-Ably-Version": E.default.protocolVersion.toString(),
                "Ably-Agent": (0, E.getAgentString)(F)
              };
            }
            f.defaultGetHeaders = k;
            function J(F, Q) {
              var _, q = _ = W[Q || rt.json];
              return {
                accept: q,
                "content-type": _,
                "X-Ably-Version": E.default.protocolVersion.toString(),
                "Ably-Agent": (0, E.getAgentString)(F)
              };
            }
            f.defaultPostHeaders = J;
            function V(F) {
              return F.splice(m(F), 1)[0];
            }
            f.arrPopRandomElement = V;
            function y(F) {
              var Q = [];
              if (F)
                for (var _ in F)
                  Q.push(encodeURIComponent(_) + "=" + encodeURIComponent(F[_]));
              return Q.length ? "?" + Q.join("&") : "";
            }
            f.toQueryString = y;
            function x(F) {
              for (var Q, _ = /([^?&=]+)=?([^&]*)/g, q = {}; Q = _.exec(F); )
                q[decodeURIComponent(Q[1])] = decodeURIComponent(Q[2]);
              return q;
            }
            f.parseQueryString = x, f.now = Date.now || function() {
              return (/* @__PURE__ */ new Date()).getTime();
            };
            function w(F) {
              return typeof F == "object" && F !== null && (F.constructor.name == "ErrorInfo" || F.constructor.name == "PartialErrorInfo");
            }
            f.isErrorInfoOrPartialErrorInfo = w;
            function j(F) {
              var Q, _;
              return F instanceof Error || ((Q = F == null ? void 0 : F.constructor) === null || Q === void 0 ? void 0 : Q.name) === "ErrorInfo" || ((_ = F == null ? void 0 : F.constructor) === null || _ === void 0 ? void 0 : _.name) === "PartialErrorInfo" ? P.default.Config.inspect(F) : F.toString();
            }
            f.inspectError = j;
            function z(F) {
              return P.default.BufferUtils.isBuffer(F) ? F.toString() : typeof F == "string" ? F : P.default.Config.inspect(F);
            }
            f.inspectBody = z;
            function K(F) {
              if (P.default.BufferUtils.isBuffer(F))
                return P.default.BufferUtils.byteLength(F);
              if (typeof F == "string")
                return P.default.Config.stringByteSize(F);
              throw new Error("Expected input of Utils.dataSizeBytes to be a buffer or string, but was: " + typeof F);
            }
            f.dataSizeBytes = K;
            function Y() {
              return String(Math.random()).substr(2);
            }
            f.cheapRandStr = Y;
            var Z = function(F) {
              if (P.default.Config.getRandomValues && typeof Uint8Array < "u") {
                var Q = new Uint8Array(F);
                return P.default.Config.getRandomValues(Q), P.default.BufferUtils.base64Encode(Q);
              }
              for (var _ = P.default.BufferUtils.base64CharSet, q = Math.round(F * 4 / 3), tt = "", at = 0; at < q; at++)
                tt += _[m(_)];
              return tt;
            };
            f.randomString = Z;
            var $ = function(F) {
              if (P.default.Config.getRandomValues && typeof Uint8Array < "u") {
                var Q = new Uint8Array(F);
                return P.default.Config.getRandomValues(Q), P.default.BufferUtils.hexEncode(Q);
              }
              for (var _ = P.default.BufferUtils.hexCharSet, q = F * 2, tt = "", at = 0; at < q; at++)
                tt += _[m(_)];
              return tt;
            };
            f.randomHexString = $;
            function et(F, Q) {
              for (var _ = Math.min(Q, F.length), q = F.slice(), tt = [], at = 0; at < _; at++)
                tt.push(V(q));
              return tt;
            }
            f.arrChooseN = et, f.trim = String.prototype.trim ? function(F) {
              return F.trim();
            } : function(F) {
              return F.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
            };
            function X(F, Q, _) {
              return new Promise(function(q, tt) {
                F[Q].apply(F, o.__spreadArray(o.__spreadArray([], _, !1), [function(at, ht) {
                  at ? tt(at) : q(ht);
                }], !1));
              });
            }
            f.promisify = X;
            var rt;
            (function(F) {
              F.msgpack = "msgpack", F.json = "json";
            })(rt = f.Format || (f.Format = {}));
            function nt(F, Q) {
              return Q == "msgpack" ? P.default.Config.msgpack.decode(F) : JSON.parse(String(F));
            }
            f.decodeBody = nt;
            function ut(F, Q) {
              return Q == "msgpack" ? P.default.Config.msgpack.encode(F, !0) : JSON.stringify(F);
            }
            f.encodeBody = ut;
            function ct(F) {
              return F.map(function(Q) {
                return Q && Q.toLowerCase();
              });
            }
            f.allToLowerCase = ct;
            function ot(F) {
              return F.map(function(Q) {
                return Q && Q.toUpperCase();
              });
            }
            f.allToUpperCase = ot;
            function gt(F) {
              return Math.min((F + 2) / 3, 2);
            }
            f.getBackoffCoefficient = gt;
            function mt() {
              return 1 - Math.random() * 0.2;
            }
            f.getJitterCoefficient = mt;
            function yt() {
              return d || (typeof window < "u" ? window : self);
            }
            f.getGlobalObject = yt;
            function Wt(F, Q) {
              return Object.keys(F).every(function(_) {
                return F[_] === Q[_];
              }) && Object.keys(Q).every(function(_) {
                return Q[_] === F[_];
              });
            }
            f.shallowEquals = Wt;
            function Vt(F) {
              var Q = /^(\[([^?]*)(?:(.*))\])?(.+)$/, _ = F.match(Q);
              if (!_ || !_.length || _.length < 5)
                throw new M.default("regex match failed", 400, 40010);
              if (_[2])
                throw new M.default("cannot use a derived option with a ".concat(_[2], " channel"), 400, 40010);
              return {
                qualifierParam: _[3] || "",
                channelName: _[4]
              };
            }
            f.matchDerivedChannel = Vt;
            function zt(F) {
              return P.default.Config.createHmac ? Buffer.from(F, "ascii").toString("base64") : (0, L.stringify)((0, b.parse)(F));
            }
            f.toBase64 = zt;
          }).call(this, s(13));
        },
        /* 2 */
        /***/
        function(N, f, s) {
          (function(d) {
            Object.defineProperty(f, "__esModule", { value: !0 });
            var o = s(0), P = o.__importDefault(s(3)), E = d || (typeof window < "u" ? window : self), M;
            (function(a) {
              a[a.None = 0] = "None", a[a.Error = 1] = "Error", a[a.Major = 2] = "Major", a[a.Minor = 3] = "Minor", a[a.Micro = 4] = "Micro";
            })(M || (M = {}));
            function L(a, h) {
              return "".concat(a).padStart(h ? 3 : 2, "0");
            }
            function b(a) {
              return P.default.Config.logTimestamps ? function(h) {
                var R = /* @__PURE__ */ new Date();
                a(L(R.getHours()) + ":" + L(R.getMinutes()) + ":" + L(R.getSeconds()) + "." + L(R.getMilliseconds(), 1) + " " + h);
              } : a;
            }
            var m = function() {
              var a, h, R, A;
              return typeof Window > "u" && typeof WorkerGlobalScope > "u" || typeof ((h = (a = E == null ? void 0 : E.console) === null || a === void 0 ? void 0 : a.log) === null || h === void 0 ? void 0 : h.apply) == "function" ? (R = function() {
                for (var c = [], l = 0; l < arguments.length; l++)
                  c[l] = arguments[l];
                console.log.apply(console, c);
              }, A = console.warn ? function() {
                for (var c = [], l = 0; l < arguments.length; l++)
                  c[l] = arguments[l];
                console.warn.apply(console, c);
              } : R) : E != null && E.console.log ? R = A = function() {
                Function.prototype.apply.call(console.log, console, arguments);
              } : R = A = function() {
              }, [R, A].map(b);
            }, C = (
              /** @class */
              function() {
                function a() {
                  a.logLevel = a.LOG_DEFAULT;
                }
                return a.initLogHandlers = function() {
                  var h = m(), R = h[0], A = h[1];
                  this.logHandler = R, this.logErrorHandler = A;
                }, a.logLevel = M.Error, a.LOG_NONE = M.None, a.LOG_ERROR = M.Error, a.LOG_MAJOR = M.Major, a.LOG_MINOR = M.Minor, a.LOG_MICRO = M.Micro, a.LOG_DEFAULT = M.Error, a.LOG_DEBUG = M.Micro, a.logAction = function(h, R, A) {
                  a.shouldLog(h) && (h === M.Error ? a.logErrorHandler : a.logHandler)("Ably: " + R + ": " + A);
                }, a.deprecated = function(h, R) {
                  a.deprecatedWithMsg(h, "Please use '" + R + "' instead.");
                }, a.deprecatedWithMsg = function(h, R) {
                  a.shouldLog(M.Error) && a.logErrorHandler("Ably: Deprecation warning - '" + h + "' is deprecated and will be removed from a future version. " + R);
                }, a.shouldLog = function(h) {
                  return h <= a.logLevel;
                }, a.setLog = function(h, R) {
                  h !== void 0 && (a.logLevel = h), R !== void 0 && (a.logHandler = a.logErrorHandler = R);
                }, a;
              }()
            );
            f.default = C;
          }).call(this, s(13));
        },
        /* 3 */
        /***/
        function(N, f, s) {
          Object.defineProperty(f, "__esModule", { value: !0 });
          var d = (
            /** @class */
            function() {
              function o() {
              }
              return o;
            }()
          );
          f.default = d;
        },
        /* 4 */
        /***/
        function(N, f, s) {
          Object.defineProperty(f, "__esModule", { value: !0 }), f.PartialErrorInfo = void 0;
          var d = s(0), o = d.__importDefault(s(3)), P = d.__importStar(s(1));
          function E(b) {
            var m = "[" + b.constructor.name;
            return b.message && (m += ": " + b.message), b.statusCode && (m += "; statusCode=" + b.statusCode), b.code && (m += "; code=" + b.code), b.cause && (m += "; cause=" + P.inspectError(b.cause)), b.href && !(b.message && b.message.indexOf("help.ably.io") > -1) && (m += "; see " + b.href + " "), m += "]", m;
          }
          var M = (
            /** @class */
            function(b) {
              d.__extends(m, b);
              function m(C, a, h, R) {
                var A = b.call(this, C) || this;
                return typeof Object.setPrototypeOf < "u" && Object.setPrototypeOf(A, m.prototype), A.code = a, A.statusCode = h, A.cause = R, A;
              }
              return m.prototype.toString = function() {
                return E(this);
              }, m.fromValues = function(C) {
                var a = C, h = a.message, R = a.code, A = a.statusCode;
                if (typeof h != "string" || typeof R != "number" || typeof A != "number")
                  throw new Error("ErrorInfo.fromValues(): invalid values: " + o.default.Config.inspect(C));
                var c = Object.assign(new m(h, R, A), C);
                return c.code && !c.href && (c.href = "https://help.ably.io/error/" + c.code), c;
              }, m;
            }(Error)
          );
          f.default = M;
          var L = (
            /** @class */
            function(b) {
              d.__extends(m, b);
              function m(C, a, h, R) {
                var A = b.call(this, C) || this;
                return typeof Object.setPrototypeOf < "u" && Object.setPrototypeOf(A, m.prototype), A.code = a, A.statusCode = h, A.cause = R, A;
              }
              return m.prototype.toString = function() {
                return E(this);
              }, m;
            }(Error)
          );
          f.PartialErrorInfo = L;
        },
        /* 5 */
        /***/
        function(N, f, s) {
          (function(d, o) {
            N.exports = o(s(6));
          })(this, function(d) {
            return function() {
              if (typeof ArrayBuffer == "function") {
                var o = d, P = o.lib, E = P.WordArray, M = E.init, L = E.init = function(b) {
                  if (b instanceof ArrayBuffer && (b = new Uint8Array(b)), (b instanceof Int8Array || typeof Uint8ClampedArray < "u" && b instanceof Uint8ClampedArray || b instanceof Int16Array || b instanceof Uint16Array || b instanceof Int32Array || b instanceof Uint32Array || b instanceof Float32Array || b instanceof Float64Array) && (b = new Uint8Array(b.buffer, b.byteOffset, b.byteLength)), b instanceof Uint8Array) {
                    for (var m = b.byteLength, C = [], a = 0; a < m; a++)
                      C[a >>> 2] |= b[a] << 24 - a % 4 * 8;
                    M.call(this, C, m);
                  } else
                    M.apply(this, arguments);
                };
                L.prototype = E;
              }
            }(), d.lib.WordArray;
          });
        },
        /* 6 */
        /***/
        function(N, f, s) {
          (function(d) {
            (function(o, P) {
              N.exports = P();
            })(this, function() {
              var o = o || function(P, E) {
                var M;
                if (typeof window < "u" && window.crypto && (M = window.crypto), !M && typeof window < "u" && window.msCrypto && (M = window.msCrypto), !M && typeof d < "u" && d.crypto && (M = d.crypto), !M)
                  try {
                    M = s(44);
                  } catch {
                  }
                var L = function() {
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
                }, b = Object.create || function() {
                  function n() {
                  }
                  return function(t) {
                    var e;
                    return n.prototype = t, e = new n(), n.prototype = null, e;
                  };
                }(), m = {}, C = m.lib = {}, a = C.Base = function() {
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
                      var t = b(this);
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
                }(), h = C.WordArray = a.extend({
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
                    n = this.words = n || [], t != E ? this.sigBytes = t : this.sigBytes = n.length * 4;
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
                    var t = this.words, e = n.words, u = this.sigBytes, i = n.sigBytes;
                    if (this.clamp(), u % 4)
                      for (var g = 0; g < i; g++) {
                        var O = e[g >>> 2] >>> 24 - g % 4 * 8 & 255;
                        t[u + g >>> 2] |= O << 24 - (u + g) % 4 * 8;
                      }
                    else
                      for (var g = 0; g < i; g += 4)
                        t[u + g >>> 2] = e[g >>> 2];
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
                    n[t >>> 2] &= 4294967295 << 32 - t % 4 * 8, n.length = P.ceil(t / 4);
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
                    var n = a.clone.call(this);
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
                      t.push(L());
                    return new h.init(t, n);
                  }
                }), R = m.enc = {}, A = R.Hex = {
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
                    for (var t = n.words, e = n.sigBytes, u = [], i = 0; i < e; i++) {
                      var g = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                      u.push((g >>> 4).toString(16)), u.push((g & 15).toString(16));
                    }
                    return u.join("");
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
                    for (var t = n.length, e = [], u = 0; u < t; u += 2)
                      e[u >>> 3] |= parseInt(n.substr(u, 2), 16) << 24 - u % 8 * 4;
                    return new h.init(e, t / 2);
                  }
                }, c = R.Latin1 = {
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
                    for (var t = n.words, e = n.sigBytes, u = [], i = 0; i < e; i++) {
                      var g = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                      u.push(String.fromCharCode(g));
                    }
                    return u.join("");
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
                    for (var t = n.length, e = [], u = 0; u < t; u++)
                      e[u >>> 2] |= (n.charCodeAt(u) & 255) << 24 - u % 4 * 8;
                    return new h.init(e, t);
                  }
                }, l = R.Utf8 = {
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
                      return decodeURIComponent(escape(c.stringify(n)));
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
                    return c.parse(unescape(encodeURIComponent(n)));
                  }
                }, p = C.BufferedBlockAlgorithm = a.extend({
                  /**
                   * Resets this block algorithm's data buffer to its initial state.
                   *
                   * @example
                   *
                   *     bufferedBlockAlgorithm.reset();
                   */
                  reset: function() {
                    this._data = new h.init(), this._nDataBytes = 0;
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
                    typeof n == "string" && (n = l.parse(n)), this._data.concat(n), this._nDataBytes += n.sigBytes;
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
                    var t, e = this._data, u = e.words, i = e.sigBytes, g = this.blockSize, O = g * 4, v = i / O;
                    n ? v = P.ceil(v) : v = P.max((v | 0) - this._minBufferSize, 0);
                    var S = v * g, I = P.min(S * 4, i);
                    if (S) {
                      for (var D = 0; D < S; D += g)
                        this._doProcessBlock(u, D);
                      t = u.splice(0, S), e.sigBytes -= I;
                    }
                    return new h.init(t, I);
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
                    var n = a.clone.call(this);
                    return n._data = this._data.clone(), n;
                  },
                  _minBufferSize: 0
                });
                C.Hasher = p.extend({
                  /**
                   * Configuration options.
                   */
                  cfg: a.extend(),
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
                    p.reset.call(this), this._doReset();
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
                var r = m.algo = {};
                return m;
              }(Math);
              return o;
            });
          }).call(this, s(13));
        },
        /* 7 */
        /***/
        function(N, f, s) {
          Object.defineProperty(f, "__esModule", { value: !0 });
          var d = s(0), o = d.__importStar(s(1)), P = d.__importDefault(s(2)), E = d.__importDefault(s(3));
          function M(m, C, a) {
            try {
              C.apply(m, a);
            } catch (h) {
              P.default.logAction(P.default.LOG_ERROR, "EventEmitter.emit()", "Unexpected listener exception: " + h + "; stack = " + (h && h.stack));
            }
          }
          function L(m, C, a) {
            for (var h, R, A, c = 0; c < m.length; c++)
              if (h = m[c], a && (h = h[a]), o.isArray(h)) {
                for (; (R = o.arrIndexOf(h, C)) !== -1; )
                  h.splice(R, 1);
                a && h.length === 0 && delete m[c][a];
              } else if (o.isObject(h))
                for (A in h)
                  Object.prototype.hasOwnProperty.call(h, A) && o.isArray(h[A]) && L([h], C, A);
          }
          var b = (
            /** @class */
            function() {
              function m() {
                this.any = [], this.events = /* @__PURE__ */ Object.create(null), this.anyOnce = [], this.eventsOnce = /* @__PURE__ */ Object.create(null);
              }
              return m.prototype.on = function() {
                for (var C = this, a = [], h = 0; h < arguments.length; h++)
                  a[h] = arguments[h];
                if (a.length === 1) {
                  var R = a[0];
                  if (typeof R == "function")
                    this.any.push(R);
                  else
                    throw new Error("EventListener.on(): Invalid arguments: " + E.default.Config.inspect(a));
                }
                if (a.length === 2) {
                  var A = a[0], c = a[1];
                  if (typeof c != "function")
                    throw new Error("EventListener.on(): Invalid arguments: " + E.default.Config.inspect(a));
                  if (o.isEmptyArg(A))
                    this.any.push(c);
                  else if (o.isArray(A))
                    A.forEach(function(p) {
                      C.on(p, c);
                    });
                  else {
                    if (typeof A != "string")
                      throw new Error("EventListener.on(): Invalid arguments: " + E.default.Config.inspect(a));
                    var l = this.events[A] || (this.events[A] = []);
                    l.push(c);
                  }
                }
              }, m.prototype.off = function() {
                for (var C, a = this, h = [], R = 0; R < arguments.length; R++)
                  h[R] = arguments[R];
                if (h.length == 0 || o.isEmptyArg(h[0]) && o.isEmptyArg(h[1])) {
                  this.any = [], this.events = /* @__PURE__ */ Object.create(null), this.anyOnce = [], this.eventsOnce = /* @__PURE__ */ Object.create(null);
                  return;
                }
                var A = h[0], c = h[1], l = null, p = null;
                if (h.length === 1 || !c)
                  typeof A == "function" ? l = A : p = A;
                else {
                  if (typeof c != "function")
                    throw new Error("EventEmitter.off(): invalid arguments:" + E.default.Config.inspect(h));
                  C = [A, c], p = C[0], l = C[1];
                }
                if (l && o.isEmptyArg(p)) {
                  L([this.any, this.events, this.anyOnce, this.eventsOnce], l);
                  return;
                }
                if (o.isArray(p)) {
                  p.forEach(function(r) {
                    a.off(r, l);
                  });
                  return;
                }
                if (typeof p != "string")
                  throw new Error("EventEmitter.off(): invalid arguments:" + E.default.Config.inspect(h));
                l ? L([this.events, this.eventsOnce], l, p) : (delete this.events[p], delete this.eventsOnce[p]);
              }, m.prototype.listeners = function(C) {
                if (C) {
                  var a = this.events[C] || [];
                  return this.eventsOnce[C] && Array.prototype.push.apply(a, this.eventsOnce[C]), a.length ? a : null;
                }
                return this.any.length ? this.any : null;
              }, m.prototype.emit = function(C) {
                for (var a = [], h = 1; h < arguments.length; h++)
                  a[h - 1] = arguments[h];
                var R = { event: C }, A = [];
                this.anyOnce.length && (Array.prototype.push.apply(A, this.anyOnce), this.anyOnce = []), this.any.length && Array.prototype.push.apply(A, this.any);
                var c = this.eventsOnce[C];
                c && (Array.prototype.push.apply(A, c), delete this.eventsOnce[C]);
                var l = this.events[C];
                l && Array.prototype.push.apply(A, l), o.arrForEach(A, function(p) {
                  M(R, p, a);
                });
              }, m.prototype.once = function() {
                for (var C = this, a = [], h = 0; h < arguments.length; h++)
                  a[h] = arguments[h];
                var R = a.length;
                if ((R === 0 || R === 1 && typeof a[0] != "function") && E.default.Config.Promise) {
                  var A = a[0];
                  return new E.default.Config.Promise(function(t) {
                    C.once(A, t);
                  });
                }
                var c = a[0], l = a[1];
                if (a.length === 1 && typeof c == "function")
                  this.anyOnce.push(c);
                else if (o.isEmptyArg(c)) {
                  if (typeof l != "function")
                    throw new Error("EventEmitter.once(): Invalid arguments:" + E.default.Config.inspect(a));
                  this.anyOnce.push(l);
                } else if (o.isArray(c)) {
                  var p = this, r = function() {
                    var t = Array.prototype.slice.call(arguments);
                    if (o.arrForEach(c, function(e) {
                      p.off(e, r);
                    }), typeof l != "function")
                      throw new Error("EventEmitter.once(): Invalid arguments:" + E.default.Config.inspect(a));
                    l.apply(this, t);
                  };
                  o.arrForEach(c, function(t) {
                    p.on(t, r);
                  });
                } else {
                  if (typeof c != "string")
                    throw new Error("EventEmitter.once(): Invalid arguments:" + E.default.Config.inspect(a));
                  var n = this.eventsOnce[c] || (this.eventsOnce[c] = []);
                  if (l) {
                    if (typeof l != "function")
                      throw new Error("EventEmitter.once(): Invalid arguments:" + E.default.Config.inspect(a));
                    n.push(l);
                  }
                }
              }, m.prototype.whenState = function(C, a, h) {
                for (var R = this, A = [], c = 3; c < arguments.length; c++)
                  A[c - 3] = arguments[c];
                var l = { event: C };
                if (typeof C != "string" || typeof a != "string")
                  throw "whenState requires a valid event String argument";
                if (typeof h != "function" && E.default.Config.Promise)
                  return new E.default.Config.Promise(function(p) {
                    m.prototype.whenState.apply(R, [C, a, p].concat(A));
                  });
                C === a ? M(l, h, A) : this.once(C, h);
              }, m;
            }()
          );
          f.default = b;
        },
        /* 8 */
        /***/
        function(N, f, s) {
          Object.defineProperty(f, "__esModule", { value: !0 }), f.getDefaults = f.normaliseOptions = f.objectifyOptions = f.getAgentString = f.getHosts = f.getFallbackHosts = f.environmentFallbackHosts = f.getHttpScheme = f.getPort = f.getHost = void 0;
          var d = s(0), o = d.__importDefault(s(3)), P = d.__importStar(s(1)), E = d.__importDefault(s(2)), M = d.__importDefault(s(4)), L = s(43), b = "ably-js/" + L.version, m = {
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
            version: L.version,
            protocolVersion: 2,
            agent: b,
            getHost: C,
            getPort: a,
            getHttpScheme: h,
            environmentFallbackHosts: R,
            getFallbackHosts: A,
            getHosts: c,
            checkHost: l,
            objectifyOptions: t,
            normaliseOptions: e
          };
          function C(i, g, O) {
            return O ? g = g == i.restHost && i.realtimeHost || g || i.realtimeHost : g = g || i.restHost, g;
          }
          f.getHost = C;
          function a(i, g) {
            return g || i.tls ? i.tlsPort : i.port;
          }
          f.getPort = a;
          function h(i) {
            return i.tls ? "https://" : "http://";
          }
          f.getHttpScheme = h;
          function R(i) {
            return [
              i + "-a-fallback.ably-realtime.com",
              i + "-b-fallback.ably-realtime.com",
              i + "-c-fallback.ably-realtime.com",
              i + "-d-fallback.ably-realtime.com",
              i + "-e-fallback.ably-realtime.com"
            ];
          }
          f.environmentFallbackHosts = R;
          function A(i) {
            var g = i.fallbackHosts, O = typeof i.httpMaxRetryCount < "u" ? i.httpMaxRetryCount : m.httpMaxRetryCount;
            return g ? P.arrChooseN(g, O) : [];
          }
          f.getFallbackHosts = A;
          function c(i) {
            return [i.restHost].concat(A(i));
          }
          f.getHosts = c;
          function l(i) {
            if (typeof i != "string")
              throw new M.default("host must be a string; was a " + typeof i, 4e4, 400);
            if (!i.length)
              throw new M.default("host must not be zero-length", 4e4, 400);
          }
          function p(i, g, O) {
            return i.realtimeHost ? i.realtimeHost : i.restHost ? (E.default.logAction(E.default.LOG_MINOR, "Defaults.normaliseOptions", 'restHost is set to "' + i.restHost + '" but realtimeHost is not set, so setting realtimeHost to "' + i.restHost + '" too. If this is not what you want, please set realtimeHost explicitly.'), i.restHost) : g ? m.REALTIME_HOST : O + "-" + m.REALTIME_HOST;
          }
          function r(i) {
            var g = {};
            for (var O in m.TIMEOUTS)
              g[O] = i[O] || m.TIMEOUTS[O];
            return g;
          }
          function n(i) {
            var g = m.agent;
            if (i.agents)
              for (var O in i.agents)
                g += " " + O + "/" + i.agents[O];
            return g;
          }
          f.getAgentString = n;
          function t(i) {
            return typeof i == "string" ? i.indexOf(":") == -1 ? { token: i } : { key: i } : i;
          }
          f.objectifyOptions = t;
          function e(i) {
            if (i.host && (E.default.deprecated("host", "restHost"), i.restHost = i.host), i.wsHost && (E.default.deprecated("wsHost", "realtimeHost"), i.realtimeHost = i.wsHost), i.queueEvents && (E.default.deprecated("queueEvents", "queueMessages"), i.queueMessages = i.queueEvents), i.fallbackHostsUseDefault) {
              if (i.fallbackHosts) {
                var g = "fallbackHosts and fallbackHostsUseDefault cannot both be set";
                throw E.default.logAction(E.default.LOG_ERROR, "Defaults.normaliseOptions", g), new M.default(g, 4e4, 400);
              }
              if (i.port || i.tlsPort) {
                var g = "fallbackHostsUseDefault cannot be set when port or tlsPort are set";
                throw E.default.logAction(E.default.LOG_ERROR, "Defaults.normaliseOptions", g), new M.default(g, 4e4, 400);
              }
              i.environment ? E.default.deprecatedWithMsg("fallbackHostsUseDefault", "There is no longer a need to set this when the environment option is also set since the library will now generate the correct fallback hosts using the environment option.") : E.default.deprecated("fallbackHostsUseDefault", "fallbackHosts: Ably.Defaults.FALLBACK_HOSTS"), i.fallbackHosts = m.FALLBACK_HOSTS;
            }
            i.recover === !0 && (E.default.deprecated("{recover: true}", "{recover: function(lastConnectionDetails, cb) { cb(true); }}"), i.recover = function(V, y) {
              y(!0);
            }), typeof i.recover == "function" && i.closeOnUnload === !0 && (E.default.logAction(E.default.LOG_ERROR, "Defaults.normaliseOptions", "closeOnUnload was true and a session recovery function was set - these are mutually exclusive, so unsetting the latter"), i.recover = void 0), "closeOnUnload" in i || (i.closeOnUnload = !i.recover), i.transports && P.arrIn(i.transports, "xhr") && (E.default.deprecated('transports: ["xhr"]', 'transports: ["xhr_streaming"]'), P.arrDeleteValue(i.transports, "xhr"), i.transports.push("xhr_streaming")), "queueMessages" in i || (i.queueMessages = !0);
            var O = i.environment && String(i.environment).toLowerCase() || m.ENVIRONMENT, v = !O || O === "production";
            !i.fallbackHosts && !i.restHost && !i.realtimeHost && !i.port && !i.tlsPort && (i.fallbackHosts = v ? m.FALLBACK_HOSTS : R(O));
            var S = i.restHost || (v ? m.REST_HOST : O + "-" + m.REST_HOST), I = p(i, v, O);
            P.arrForEach((i.fallbackHosts || []).concat(S, I), l), i.port = i.port || m.PORT, i.tlsPort = i.tlsPort || m.TLS_PORT, "tls" in i || (i.tls = !0);
            var D = r(i);
            if ("useBinaryProtocol" in i ? i.useBinaryProtocol = o.default.Config.supportsBinary && i.useBinaryProtocol : i.useBinaryProtocol = o.default.Config.preferBinary, i.clientId) {
              var T = i.headers = i.headers || {};
              T["X-Ably-ClientId"] = o.default.BufferUtils.base64Encode(o.default.BufferUtils.utf8Encode(i.clientId));
            }
            "idempotentRestPublishing" in i || (i.idempotentRestPublishing = !0), i.promises && !o.default.Config.Promise && (E.default.logAction(E.default.LOG_ERROR, "Defaults.normaliseOptions", "{promises: true} was specified, but no Promise constructor found; disabling promises"), i.promises = !1);
            var U = null, G = i.connectivityCheckUrl;
            if (i.connectivityCheckUrl) {
              var W = i.connectivityCheckUrl.split("?"), k = W[0], J = W[1];
              U = J ? P.parseQueryString(J) : {}, k.indexOf("://") === -1 && (k = "https://" + k), G = k;
            }
            return d.__assign(d.__assign({}, i), { useBinaryProtocol: "useBinaryProtocol" in i ? o.default.Config.supportsBinary && i.useBinaryProtocol : o.default.Config.preferBinary, realtimeHost: I, restHost: S, maxMessageSize: i.maxMessageSize || m.maxMessageSize, timeouts: D, connectivityCheckParams: U, connectivityCheckUrl: G });
          }
          f.normaliseOptions = e, f.default = m;
          function u(i) {
            return Object.assign(m, i);
          }
          f.getDefaults = u;
        },
        /* 9 */
        /***/
        function(N, f, s) {
          Object.defineProperty(f, "__esModule", { value: !0 });
          var d = s(0), o = d.__importDefault(s(3)), P = d.__importDefault(s(2)), E = d.__importDefault(s(4)), M = d.__importStar(s(1));
          function L(a) {
            return !a || !a.channelOptions ? {
              channelOptions: a,
              plugins: {},
              baseEncodedPreviousPayload: void 0
            } : a;
          }
          function b(a) {
            if (a && a.cipher) {
              if (!o.default.Crypto)
                throw new Error("Encryption not enabled; use ably.encryption.js instead");
              var h = o.default.Crypto.getCipher(a.cipher);
              return {
                cipher: h.cipherParams,
                channelCipher: h.cipher
              };
            }
            return a ?? {};
          }
          function m(a) {
            var h = 0;
            return a.name && (h += a.name.length), a.clientId && (h += a.clientId.length), a.extras && (h += JSON.stringify(a.extras).length), a.data && (h += M.dataSizeBytes(a.data)), h;
          }
          var C = (
            /** @class */
            function() {
              function a() {
              }
              return a.prototype.toJSON = function() {
                var h = this.encoding, R = this.data;
                return R && o.default.BufferUtils.isBuffer(R) && (arguments.length > 0 ? (h = h ? h + "/base64" : "base64", R = o.default.BufferUtils.base64Encode(R)) : R = o.default.BufferUtils.toBuffer(R)), {
                  name: this.name,
                  id: this.id,
                  clientId: this.clientId,
                  connectionId: this.connectionId,
                  connectionKey: this.connectionKey,
                  extras: this.extras,
                  encoding: h,
                  data: R
                };
              }, a.prototype.toString = function() {
                var h = "[Message";
                return this.name && (h += "; name=" + this.name), this.id && (h += "; id=" + this.id), this.timestamp && (h += "; timestamp=" + this.timestamp), this.clientId && (h += "; clientId=" + this.clientId), this.connectionId && (h += "; connectionId=" + this.connectionId), this.encoding && (h += "; encoding=" + this.encoding), this.extras && (h += "; extras =" + JSON.stringify(this.extras)), this.data && (typeof this.data == "string" ? h += "; data=" + this.data : o.default.BufferUtils.isBuffer(this.data) ? h += "; data (buffer)=" + o.default.BufferUtils.base64Encode(this.data) : h += "; data (json)=" + JSON.stringify(this.data)), this.extras && (h += "; extras=" + JSON.stringify(this.extras)), h += "]", h;
              }, a.encrypt = function(h, R, A) {
                var c = h.data, l = h.encoding, p = R.channelCipher;
                l = l ? l + "/" : "", o.default.BufferUtils.isBuffer(c) || (c = o.default.BufferUtils.utf8Encode(String(c)), l = l + "utf-8/"), p.encrypt(c, function(r, n) {
                  if (r) {
                    A(r);
                    return;
                  }
                  h.data = n, h.encoding = l + "cipher+" + p.algorithm, A(null, h);
                });
              }, a.encode = function(h, R, A) {
                var c = h.data, l = typeof c == "string" || o.default.BufferUtils.isBuffer(c) || c === null || c === void 0;
                if (!l)
                  if (M.isObject(c) || M.isArray(c))
                    h.data = JSON.stringify(c), h.encoding = h.encoding ? h.encoding + "/json" : "json";
                  else
                    throw new E.default("Data type is unsupported", 40013, 400);
                R != null && R.cipher ? a.encrypt(h, R, A) : A(null, h);
              }, a.encodeArray = function(h, R, A) {
                for (var c = 0, l = 0; l < h.length; l++)
                  a.encode(h[l], R, function(p) {
                    if (p) {
                      A(p);
                      return;
                    }
                    c++, c == h.length && A(null, h);
                  });
              }, a.decode = function(h, R) {
                var A = L(R), c = h.data, l = h.encoding;
                if (l) {
                  var p = l.split("/"), r = void 0, n = p.length, t = h.data, e = "";
                  try {
                    for (; (r = n) > 0; ) {
                      var u = p[--n].match(/([-\w]+)(\+([\w-]+))?/);
                      if (!u)
                        break;
                      switch (e = u[1], e) {
                        case "base64":
                          t = o.default.BufferUtils.base64Decode(String(t)), r == p.length && (c = t);
                          continue;
                        case "utf-8":
                          t = o.default.BufferUtils.utf8Decode(t);
                          continue;
                        case "json":
                          t = JSON.parse(t);
                          continue;
                        case "cipher":
                          if (A.channelOptions != null && A.channelOptions.cipher && A.channelOptions.channelCipher) {
                            var i = u[3], g = A.channelOptions.channelCipher;
                            if (i != g.algorithm)
                              throw new Error("Unable to decrypt message with given cipher; incompatible cipher params");
                            t = g.decrypt(t);
                            continue;
                          } else
                            throw new Error("Unable to decrypt message; not an encrypted channel");
                        case "vcdiff":
                          if (!A.plugins || !A.plugins.vcdiff)
                            throw new E.default("Missing Vcdiff decoder (https://github.com/ably-forks/vcdiff-decoder)", 40019, 400);
                          if (typeof Uint8Array > "u")
                            throw new E.default("Delta decoding not supported on this browser (need ArrayBuffer & Uint8Array)", 40020, 400);
                          try {
                            var O = A.baseEncodedPreviousPayload;
                            typeof O == "string" && (O = o.default.BufferUtils.utf8Encode(O)), O = o.default.BufferUtils.toBuffer(O), t = o.default.BufferUtils.toBuffer(t), t = o.default.BufferUtils.typedArrayToBuffer(A.plugins.vcdiff.decode(t, O)), c = t;
                          } catch (S) {
                            throw new E.default("Vcdiff delta decode failed with " + S, 40018, 400);
                          }
                          continue;
                        default:
                          throw new Error("Unknown encoding");
                      }
                    }
                  } catch (S) {
                    var v = S;
                    throw new E.default("Error processing the " + e + " encoding, decoder returned ‘" + v.message + "’", v.code || 40013, 400);
                  } finally {
                    h.encoding = r <= 0 ? null : p.slice(0, r).join("/"), h.data = t;
                  }
                }
                A.baseEncodedPreviousPayload = c;
              }, a.fromResponseBody = function(h, R, A) {
                A && (h = M.decodeBody(h, A));
                for (var c = 0; c < h.length; c++) {
                  var l = h[c] = a.fromValues(h[c]);
                  try {
                    a.decode(l, R);
                  } catch (p) {
                    P.default.logAction(P.default.LOG_ERROR, "Message.fromResponseBody()", p.toString());
                  }
                }
                return h;
              }, a.fromValues = function(h) {
                return Object.assign(new a(), h);
              }, a.fromValuesArray = function(h) {
                for (var R = h.length, A = new Array(R), c = 0; c < R; c++)
                  A[c] = a.fromValues(h[c]);
                return A;
              }, a.fromEncoded = function(h, R) {
                var A = a.fromValues(h), c = b(R ?? null);
                try {
                  a.decode(A, c);
                } catch (l) {
                  P.default.logAction(P.default.LOG_ERROR, "Message.fromEncoded()", l.toString());
                }
                return A;
              }, a.fromEncodedArray = function(h, R) {
                return h.map(function(A) {
                  return a.fromEncoded(A, R);
                });
              }, a.getMessagesSize = function(h) {
                for (var R, A = 0, c = 0; c < h.length; c++)
                  R = h[c], A += R.size || (R.size = m(R));
                return A;
              }, a.serialize = M.encodeBody, a;
            }()
          );
          f.default = C;
        },
        /* 10 */
        /***/
        function(N, f, s) {
          Object.defineProperty(f, "__esModule", { value: !0 });
          var d = s(0), o = d.__importStar(s(1)), P = d.__importDefault(s(4)), E = d.__importDefault(s(9)), M = d.__importDefault(s(14)), L = {
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
          }, b = [];
          Object.keys(L).forEach(function(A) {
            b[L[A]] = A;
          });
          var m = {
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
          }, C = Object.keys(m);
          m.MODE_ALL = m.PRESENCE | m.PUBLISH | m.SUBSCRIBE | m.PRESENCE_SUBSCRIBE;
          function a(A) {
            var c = [];
            if (A)
              for (var l = 0; l < A.length; l++)
                c.push(A[l].toString());
            return "[ " + c.join(", ") + " ]";
          }
          var h = "id channel channelSerial connectionId count msgSerial timestamp".split(" "), R = (
            /** @class */
            function() {
              function A() {
                var c = this;
                this.hasFlag = function(l) {
                  return (c.flags & m[l]) > 0;
                };
              }
              return A.prototype.setFlag = function(c) {
                return this.flags = this.flags | m[c];
              }, A.prototype.getMode = function() {
                return this.flags && this.flags & m.MODE_ALL;
              }, A.prototype.encodeModesToFlags = function(c) {
                var l = this;
                c.forEach(function(p) {
                  return l.setFlag(p);
                });
              }, A.prototype.decodeModesFromFlags = function() {
                var c = this, l = [];
                return A.channelModes.forEach(function(p) {
                  c.hasFlag(p) && l.push(p);
                }), l.length > 0 ? l : void 0;
              }, A.fromValues = function(c) {
                return Object.assign(new A(), c);
              }, A.Action = L, A.channelModes = ["PRESENCE", "PUBLISH", "SUBSCRIBE", "PRESENCE_SUBSCRIBE"], A.ActionName = b, A.serialize = o.encodeBody, A.deserialize = function(c, l) {
                var p = o.decodeBody(c, l);
                return A.fromDeserialized(p);
              }, A.fromDeserialized = function(c) {
                var l = c.error;
                l && (c.error = P.default.fromValues(l));
                var p = c.messages;
                if (p)
                  for (var r = 0; r < p.length; r++)
                    p[r] = E.default.fromValues(p[r]);
                var n = c.presence;
                if (n)
                  for (var r = 0; r < n.length; r++)
                    n[r] = M.default.fromValues(n[r], !0);
                return Object.assign(new A(), c);
              }, A.stringify = function(c) {
                var l = "[ProtocolMessage";
                c.action !== void 0 && (l += "; action=" + A.ActionName[c.action] || !1);
                for (var p, r = 0; r < h.length; r++)
                  p = h[r], c[p] !== void 0 && (l += "; " + p + "=" + c[p]);
                if (c.messages && (l += "; messages=" + a(E.default.fromValuesArray(c.messages))), c.presence && (l += "; presence=" + a(M.default.fromValuesArray(c.presence))), c.error && (l += "; error=" + P.default.fromValues(c.error).toString()), c.auth && c.auth.accessToken && (l += "; token=" + c.auth.accessToken), c.flags && (l += "; flags=" + C.filter(c.hasFlag).join(",")), c.params) {
                  var n = "";
                  o.forInOwnNonNullProperties(c.params, function(t) {
                    n.length > 0 && (n += "; "), n += t + "=" + c.params[t];
                  }), n.length > 0 && (l += "; params=[" + n + "]");
                }
                return l += "]", l;
              }, A;
            }()
          );
          f.default = R;
        },
        /* 11 */
        /***/
        function(N, f, s) {
          (function(d, o) {
            N.exports = o(s(6));
          })(this, function(d) {
            return function() {
              var o = d, P = o.lib, E = P.WordArray, M = o.enc;
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
                stringify: function(b) {
                  var m = b.words, C = b.sigBytes, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                  b.clamp();
                  for (var h = [], R = 0; R < C; R += 3)
                    for (var A = m[R >>> 2] >>> 24 - R % 4 * 8 & 255, c = m[R + 1 >>> 2] >>> 24 - (R + 1) % 4 * 8 & 255, l = m[R + 2 >>> 2] >>> 24 - (R + 2) % 4 * 8 & 255, p = A << 16 | c << 8 | l, r = 0; r < 4 && R + r * 0.75 < C; r++)
                      h.push(a.charAt(p >>> 6 * (3 - r) & 63));
                  var n = a.charAt(64);
                  if (n)
                    for (; h.length % 4; )
                      h.push(n);
                  return h.join("");
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
                parse: function(b) {
                  var m = b.length, C = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", a = this._reverseMap;
                  if (!a) {
                    a = this._reverseMap = [];
                    for (var h = 0; h < C.length; h++)
                      a[C.charCodeAt(h)] = h;
                  }
                  var R = C.charAt(64);
                  if (R) {
                    var A = b.indexOf(R);
                    A !== -1 && (m = A);
                  }
                  return L(b, m, a);
                }
              };
              function L(b, m, C) {
                for (var a = [], h = 0, R = 0; R < m; R++)
                  if (R % 4) {
                    var A = C[b.charCodeAt(R - 1)] << R % 4 * 2, c = C[b.charCodeAt(R)] >>> 6 - R % 4 * 2, l = A | c;
                    a[h >>> 2] |= l << 24 - h % 4 * 8, h++;
                  }
                return E.create(a, h);
              }
            }(), d.enc.Base64;
          });
        },
        /* 12 */
        /***/
        function(N, f, s) {
          Object.defineProperty(f, "__esModule", { value: !0 });
          var d = s(0), o = d.__importStar(s(1)), P = d.__importDefault(s(10)), E = d.__importDefault(s(25)), M = d.__importDefault(s(2)), L = d.__importDefault(s(8)), b = d.__importDefault(s(19)), m = d.__importDefault(s(16)), C = d.__importDefault(s(4)), a = d.__importDefault(s(20)), h = d.__importDefault(s(3));
          function R(l) {
            var p = [80015, 80017, 80030];
            return l.code ? m.default.isTokenErr(l) ? !1 : o.arrIn(p, l.code) ? !0 : l.code >= 4e4 && l.code < 5e4 : !1;
          }
          function A(l) {
            return R(l) ? [P.default.fromValues({ action: P.default.Action.ERROR, error: l })] : [P.default.fromValues({ action: P.default.Action.DISCONNECTED, error: l })];
          }
          var c = (
            /** @class */
            function(l) {
              d.__extends(p, l);
              function p(r, n, t) {
                var e = l.call(
                  this,
                  r,
                  n,
                  t,
                  /* binary not supported for comet so force JSON protocol */
                  !0
                ) || this;
                return e.onAuthUpdated = function(u) {
                  e.authParams = { access_token: u.token };
                }, e.stream = "stream" in t ? t.stream : !0, e.sendRequest = null, e.recvRequest = null, e.pendingCallback = null, e.pendingItems = null, e;
              }
              return p.prototype.connect = function() {
                var r = this;
                M.default.logAction(M.default.LOG_MINOR, "CometTransport.connect()", "starting"), E.default.prototype.connect.call(this);
                var n = this.params, t = n.options, e = L.default.getHost(t, n.host), u = L.default.getPort(t), i = t.tls ? "https://" : "http://";
                this.baseUri = i + e + ":" + u + "/comet/";
                var g = this.baseUri + "connect";
                M.default.logAction(M.default.LOG_MINOR, "CometTransport.connect()", "uri: " + g), this.auth.getAuthParams(function(O, v) {
                  if (O) {
                    r.disconnect(O);
                    return;
                  }
                  if (!r.isDisposed) {
                    r.authParams = v;
                    var S = r.params.getConnectParams(v);
                    "stream" in S && (r.stream = S.stream), M.default.logAction(M.default.LOG_MINOR, "CometTransport.connect()", "connectParams:" + o.toQueryString(S));
                    var I = !1, D = r.recvRequest = r.createRequest(g, null, S, null, r.stream ? a.default.REQ_RECV_STREAM : a.default.REQ_RECV);
                    D.on("data", function(T) {
                      r.recvRequest && (I || (I = !0, r.emit("preconnect")), r.onData(T));
                    }), D.on("complete", function(T) {
                      if (r.recvRequest || (T = T || new C.default("Request cancelled", 80003, 400)), r.recvRequest = null, !I && !T && (I = !0, r.emit("preconnect")), r.onActivity(), T) {
                        T.code ? r.onData(A(T)) : r.disconnect(T);
                        return;
                      }
                      h.default.Config.nextTick(function() {
                        r.recv();
                      });
                    }), D.exec();
                  }
                });
              }, p.prototype.requestClose = function() {
                M.default.logAction(M.default.LOG_MINOR, "CometTransport.requestClose()"), this._requestCloseOrDisconnect(!0);
              }, p.prototype.requestDisconnect = function() {
                M.default.logAction(M.default.LOG_MINOR, "CometTransport.requestDisconnect()"), this._requestCloseOrDisconnect(!1);
              }, p.prototype._requestCloseOrDisconnect = function(r) {
                var n = this, t = r ? this.closeUri : this.disconnectUri;
                if (t) {
                  var e = this.createRequest(t, null, this.authParams, null, a.default.REQ_SEND);
                  e.on("complete", function(u) {
                    u && (M.default.logAction(M.default.LOG_ERROR, "CometTransport.request" + (r ? "Close()" : "Disconnect()"), "request returned err = " + o.inspectError(u)), n.finish("disconnected", u));
                  }), e.exec();
                }
              }, p.prototype.dispose = function() {
                var r = this;
                M.default.logAction(M.default.LOG_MINOR, "CometTransport.dispose()", ""), this.isDisposed || (this.isDisposed = !0, this.recvRequest && (M.default.logAction(M.default.LOG_MINOR, "CometTransport.dispose()", "aborting recv request"), this.recvRequest.abort(), this.recvRequest = null), this.finish("disconnected", b.default.disconnected()), h.default.Config.nextTick(function() {
                  r.emit("disposed");
                }));
              }, p.prototype.onConnect = function(r) {
                var n;
                if (!this.isDisposed) {
                  var t = (n = r.connectionDetails) === null || n === void 0 ? void 0 : n.connectionKey;
                  E.default.prototype.onConnect.call(this, r);
                  var e = this.baseUri + t;
                  M.default.logAction(M.default.LOG_MICRO, "CometTransport.onConnect()", "baseUri = " + e), this.sendUri = e + "/send", this.recvUri = e + "/recv", this.closeUri = e + "/close", this.disconnectUri = e + "/disconnect";
                }
              }, p.prototype.send = function(r) {
                if (this.sendRequest) {
                  this.pendingItems = this.pendingItems || [], this.pendingItems.push(r);
                  return;
                }
                var n = this.pendingItems || [];
                n.push(r), this.pendingItems = null, this.sendItems(n);
              }, p.prototype.sendAnyPending = function() {
                var r = this.pendingItems;
                r && (this.pendingItems = null, this.sendItems(r));
              }, p.prototype.sendItems = function(r) {
                var n = this, t = this.sendRequest = this.createRequest(this.sendUri, null, this.authParams, this.encodeRequest(r), a.default.REQ_SEND);
                t.on("complete", function(e, u) {
                  if (e && M.default.logAction(M.default.LOG_ERROR, "CometTransport.sendItems()", "on complete: err = " + o.inspectError(e)), n.sendRequest = null, e) {
                    e.code ? n.onData(A(e)) : n.disconnect(e);
                    return;
                  }
                  u && n.onData(u), n.pendingItems && h.default.Config.nextTick(function() {
                    n.sendRequest || n.sendAnyPending();
                  });
                }), t.exec();
              }, p.prototype.recv = function() {
                var r = this;
                if (!this.recvRequest && this.isConnected) {
                  var n = this.recvRequest = this.createRequest(this.recvUri, null, this.authParams, null, this.stream ? a.default.REQ_RECV_STREAM : a.default.REQ_RECV_POLL);
                  n.on("data", function(t) {
                    r.onData(t);
                  }), n.on("complete", function(t) {
                    if (r.recvRequest = null, r.onActivity(), t) {
                      t.code ? r.onData(A(t)) : r.disconnect(t);
                      return;
                    }
                    h.default.Config.nextTick(function() {
                      r.recv();
                    });
                  }), n.exec();
                }
              }, p.prototype.onData = function(r) {
                try {
                  var n = this.decodeResponse(r);
                  if (n && n.length)
                    for (var t = 0; t < n.length; t++)
                      this.onProtocolMessage(P.default.fromDeserialized(n[t]));
                } catch (e) {
                  M.default.logAction(M.default.LOG_ERROR, "CometTransport.onData()", "Unexpected exception handing channel event: " + e.stack);
                }
              }, p.prototype.encodeRequest = function(r) {
                return JSON.stringify(r);
              }, p.prototype.decodeResponse = function(r) {
                return typeof r == "string" ? JSON.parse(r) : r;
              }, p;
            }(E.default)
          );
          f.default = c;
        },
        /* 13 */
        /***/
        function(N, f) {
          var s;
          s = function() {
            return this;
          }();
          try {
            s = s || new Function("return this")();
          } catch {
            typeof window == "object" && (s = window);
          }
          N.exports = s;
        },
        /* 14 */
        /***/
        function(N, f, s) {
          Object.defineProperty(f, "__esModule", { value: !0 });
          var d = s(0), o = d.__importDefault(s(2)), P = d.__importDefault(s(3)), E = d.__importDefault(s(9)), M = d.__importStar(s(1));
          function L(m) {
            return b.Actions.indexOf(m);
          }
          var b = (
            /** @class */
            function() {
              function m() {
              }
              return m.prototype.isSynthesized = function() {
                return !this.id || !this.connectionId ? !0 : this.id.substring(this.connectionId.length, 0) !== this.connectionId;
              }, m.prototype.parseId = function() {
                if (!this.id)
                  throw new Error("parseId(): Presence message does not contain an id");
                var C = this.id.split(":");
                return {
                  connectionId: C[0],
                  msgSerial: parseInt(C[1], 10),
                  index: parseInt(C[2], 10)
                };
              }, m.prototype.toJSON = function() {
                var C = this.data, a = this.encoding;
                return C && P.default.BufferUtils.isBuffer(C) && (arguments.length > 0 ? (a = a ? a + "/base64" : "base64", C = P.default.BufferUtils.base64Encode(C)) : C = P.default.BufferUtils.toBuffer(C)), {
                  id: this.id,
                  clientId: this.clientId,
                  /* Convert presence action back to an int for sending to Ably */
                  action: L(this.action),
                  data: C,
                  encoding: a
                };
              }, m.prototype.toString = function() {
                var C = "[PresenceMessage";
                return C += "; action=" + this.action, this.id && (C += "; id=" + this.id), this.timestamp && (C += "; timestamp=" + this.timestamp), this.clientId && (C += "; clientId=" + this.clientId), this.connectionId && (C += "; connectionId=" + this.connectionId), this.encoding && (C += "; encoding=" + this.encoding), this.data && (typeof this.data == "string" ? C += "; data=" + this.data : P.default.BufferUtils.isBuffer(this.data) ? C += "; data (buffer)=" + P.default.BufferUtils.base64Encode(this.data) : C += "; data (json)=" + JSON.stringify(this.data)), C += "]", C;
              }, m.fromResponseBody = function(C, a, h) {
                var R = [];
                h && (C = M.decodeBody(C, h));
                for (var A = 0; A < C.length; A++) {
                  var c = R[A] = m.fromValues(C[A], !0);
                  try {
                    m.decode(c, a);
                  } catch (l) {
                    o.default.logAction(o.default.LOG_ERROR, "PresenceMessage.fromResponseBody()", l.toString());
                  }
                }
                return R;
              }, m.fromValues = function(C, a) {
                return a && (C.action = m.Actions[C.action]), Object.assign(new m(), C);
              }, m.fromValuesArray = function(C) {
                for (var a = C.length, h = new Array(a), R = 0; R < a; R++)
                  h[R] = m.fromValues(C[R]);
                return h;
              }, m.fromEncoded = function(C, a) {
                var h = m.fromValues(C, !0);
                try {
                  m.decode(h, a ?? {});
                } catch (R) {
                  o.default.logAction(o.default.LOG_ERROR, "PresenceMessage.fromEncoded()", R.toString());
                }
                return h;
              }, m.fromEncodedArray = function(C, a) {
                return C.map(function(h) {
                  return m.fromEncoded(h, a);
                });
              }, m.Actions = ["absent", "present", "enter", "leave", "update"], m.encode = E.default.encode, m.decode = E.default.decode, m.getMessagesSize = E.default.getMessagesSize, m;
            }()
          );
          f.default = b;
        },
        /* 15 */
        /***/
        function(N, f, s) {
          (function(d) {
            Object.defineProperty(f, "__esModule", { value: !0 });
            var o = s(0), P = o.__importStar(s(1)), E = o.__importDefault(s(7)), M = o.__importStar(s(4)), L = o.__importDefault(s(2)), b = o.__importDefault(s(8)), m = o.__importDefault(s(20)), C = o.__importDefault(s(3));
            function a(i, g) {
              return P.arrIn(P.allToLowerCase(P.keysArray(g)), "x-ably-errorcode");
            }
            function h(i, g) {
              if (a(i, g))
                return i.error && M.default.fromValues(i.error);
            }
            var R = function() {
            }, A = 0, c = {}, l = typeof d < "u" && d.XDomainRequest;
            function p() {
              var i = navigator.userAgent.toString().match(/MSIE\s([\d.]+)/);
              return i && Number(i[1]);
            }
            function r() {
              var i;
              return l && (i = p()) && i === 10;
            }
            function n(i, g) {
              return i.getResponseHeader && i.getResponseHeader(g);
            }
            function t(i) {
              return i.getResponseHeader && (i.getResponseHeader("transfer-encoding") || !i.getResponseHeader("content-length"));
            }
            function e(i) {
              for (var g = P.trim(i.getAllResponseHeaders()).split(`\r
`), O = {}, v = 0; v < g.length; v++) {
                var S = g[v].split(":").map(P.trim);
                O[S[0].toLowerCase()] = S[1];
              }
              return O;
            }
            var u = (
              /** @class */
              function(i) {
                o.__extends(g, i);
                function g(O, v, S, I, D, T, U) {
                  var G = i.call(this) || this;
                  return S = S || {}, S.rnd = P.cheapRandStr(), r() && !S.envelope && (S.envelope = "json"), G.uri = O + P.toQueryString(S), G.headers = v || {}, G.body = I, G.method = U ? U.toUpperCase() : P.isEmptyArg(I) ? "GET" : "POST", G.requestMode = D, G.timeouts = T, G.timedOut = !1, G.requestComplete = !1, G.id = String(++A), c[G.id] = G, G;
                }
                return g.createRequest = function(O, v, S, I, D, T, U) {
                  var G = T || b.default.TIMEOUTS;
                  return new g(O, v, P.copy(S), I, D, G, U);
                }, g.prototype.complete = function(O, v, S, I, D) {
                  this.requestComplete || (this.requestComplete = !0, !O && v && this.emit("data", v), this.emit("complete", O, v, S, I, D), this.dispose());
                }, g.prototype.abort = function() {
                  this.dispose();
                }, g.prototype.exec = function() {
                  var O = this, v = this.headers, S = this.requestMode == m.default.REQ_SEND ? this.timeouts.httpRequestTimeout : this.timeouts.recvTimeout, I = this.timer = setTimeout(function() {
                    O.timedOut = !0, T.abort();
                  }, S), D = this.method, T = this.xhr = new XMLHttpRequest(), U = v.accept, G = this.body, W = "text";
                  if (U ? U.indexOf("application/x-msgpack") === 0 && (W = "arraybuffer") : v.accept = "application/json", G) {
                    var k = v["content-type"] || (v["content-type"] = "application/json");
                    k.indexOf("application/json") > -1 && typeof G != "string" && (G = JSON.stringify(G));
                  }
                  T.open(D, this.uri, !0), T.responseType = W, "authorization" in v && (T.withCredentials = !0);
                  for (var J in v)
                    T.setRequestHeader(J, v[J]);
                  var V = function(X, rt, nt, ut) {
                    var ct, ot = rt + " (event type: " + X.type + ")";
                    !((ct = O == null ? void 0 : O.xhr) === null || ct === void 0) && ct.statusText && (ot += ", current statusText is " + O.xhr.statusText), L.default.logAction(L.default.LOG_ERROR, "Request.on" + X.type + "()", ot), O.complete(new M.PartialErrorInfo(ot, nt, ut));
                  };
                  T.onerror = function(X) {
                    V(X, "XHR error occurred", null, 400);
                  }, T.onabort = function(X) {
                    O.timedOut ? V(X, "Request aborted due to request timeout expiring", null, 408) : V(X, "Request cancelled", null, 400);
                  }, T.ontimeout = function(X) {
                    V(X, "Request timed out", null, 408);
                  };
                  var y, x, w, j = 0, z = !1, K = function() {
                    if (clearTimeout(I), w = x < 400, x == 204) {
                      O.complete(null, null, null, null, x);
                      return;
                    }
                    y = O.requestMode == m.default.REQ_RECV_STREAM && w && t(T);
                  }, Y = function() {
                    var X;
                    try {
                      var rt = n(T, "content-type"), nt = rt ? rt.indexOf("application/json") >= 0 : T.responseType == "text";
                      if (nt) {
                        var ut = T.responseType === "arraybuffer" ? C.default.BufferUtils.utf8Decode(T.response) : String(T.responseText);
                        ut.length ? X = JSON.parse(ut) : X = ut, z = !0;
                      } else
                        X = T.response;
                      X.response !== void 0 ? (x = X.statusCode, w = x < 400, v = X.headers, X = X.response) : v = e(T);
                    } catch (ot) {
                      O.complete(new M.PartialErrorInfo("Malformed response body from server: " + ot.message, null, 400));
                      return;
                    }
                    if (w || P.isArray(X)) {
                      O.complete(null, X, v, z, x);
                      return;
                    }
                    var ct = h(X, v);
                    ct || (ct = new M.PartialErrorInfo("Error response received from server: " + x + " body was: " + C.default.Config.inspect(X), null, x)), O.complete(ct, X, v, z, x);
                  };
                  function Z() {
                    for (var X = T.responseText, rt = X.length - 1, nt, ut; j < rt && (nt = X.indexOf(`
`, j)) > -1; )
                      ut = X.slice(j, nt), j = nt + 1, $(ut);
                  }
                  var $ = function(X) {
                    try {
                      X = JSON.parse(X);
                    } catch (rt) {
                      O.complete(new M.PartialErrorInfo("Malformed response body from server: " + rt.message, null, 400));
                      return;
                    }
                    O.emit("data", X);
                  }, et = function() {
                    Z(), O.streamComplete = !0, C.default.Config.nextTick(function() {
                      O.complete();
                    });
                  };
                  T.onreadystatechange = function() {
                    var X = T.readyState;
                    X < 3 || T.status !== 0 && (x === void 0 && (x = T.status, x === 1223 && (x = 204), K()), X == 3 && y ? Z() : X == 4 && (y ? et() : Y()));
                  }, T.send(G);
                }, g.prototype.dispose = function() {
                  var O = this.xhr;
                  if (O) {
                    O.onreadystatechange = O.onerror = O.onabort = O.ontimeout = R, this.xhr = null;
                    var v = this.timer;
                    v && (clearTimeout(v), this.timer = null), this.requestComplete || O.abort();
                  }
                  delete c[this.id];
                }, g;
              }(E.default)
            );
            f.default = u;
          }).call(this, s(13));
        },
        /* 16 */
        /***/
        function(N, f, s) {
          Object.defineProperty(f, "__esModule", { value: !0 });
          var d = s(0), o = d.__importDefault(s(2)), P = d.__importStar(s(1)), E = d.__importDefault(s(22)), M = d.__importDefault(s(4)), L = d.__importDefault(s(45)), b = s(11), m = d.__importDefault(s(17)), C = d.__importDefault(s(3)), a = Math.pow(2, 17);
          function h() {
          }
          function R() {
            return ("000000" + Math.floor(Math.random() * 1e16)).slice(-16);
          }
          function A(O) {
            return !!O.connection;
          }
          function c(O) {
            return P.isErrorInfoOrPartialErrorInfo(O) ? (O.code || (O.statusCode === 403 ? O.code = 40300 : (O.code = 40170, O.statusCode = 401)), O) : new M.default(P.inspectError(O), O.code || 40170, O.statusCode || 401);
          }
          var l = function(O, v) {
            if (C.default.Config.createHmac) {
              var S = C.default.Config.createHmac("SHA256", v);
              return S.update(O), S.digest("base64");
            }
            return (0, b.stringify)((0, L.default)(O, v));
          };
          function p(O) {
            if (!O)
              return "";
            typeof O == "string" && (O = JSON.parse(O));
            var v = /* @__PURE__ */ Object.create(null), S = P.keysArray(O, !0);
            if (!S)
              return "";
            S.sort();
            for (var I = 0; I < S.length; I++)
              v[S[I]] = O[S[I]].sort();
            return JSON.stringify(v);
          }
          function r(O) {
            if (O.authCallback)
              o.default.logAction(o.default.LOG_MINOR, "Auth()", "using token auth with authCallback");
            else if (O.authUrl)
              o.default.logAction(o.default.LOG_MINOR, "Auth()", "using token auth with authUrl");
            else if (O.key)
              o.default.logAction(o.default.LOG_MINOR, "Auth()", "using token auth with client-side signing");
            else if (O.tokenDetails)
              o.default.logAction(o.default.LOG_MINOR, "Auth()", "using token auth with supplied token only");
            else {
              var v = "authOptions must include valid authentication parameters";
              throw o.default.logAction(o.default.LOG_ERROR, "Auth()", v), new Error(v);
            }
          }
          function n(O) {
            return "useTokenAuth" in O && !O.useTokenAuth;
          }
          function t(O) {
            return O.useTokenAuth || !n(O) && (O.authCallback || O.authUrl || O.token || O.tokenDetails);
          }
          function e(O) {
            return !O.key && !O.authCallback && !O.authUrl;
          }
          var u = 0;
          function i() {
            return u++;
          }
          var g = (
            /** @class */
            function() {
              function O(v, S) {
                if (this.authOptions = {}, this.client = v, this.tokenParams = S.defaultTokenParams || {}, this.currentTokenRequestId = null, this.waitingForTokenRequest = null, t(S)) {
                  if (S.key && !l) {
                    var I = "client-side token request signing not supported";
                    throw o.default.logAction(o.default.LOG_ERROR, "Auth()", I), new Error(I);
                  }
                  e(S) && o.default.logAction(o.default.LOG_ERROR, "Auth()", "Warning: library initialized with a token literal without any way to renew the token when it expires (no authUrl, authCallback, or key). See https://help.ably.io/error/40171 for help"), this._saveTokenOptions(S.defaultTokenParams, S), r(this.authOptions);
                } else {
                  if (!S.key) {
                    var I = "No authentication options provided; need one of: key, authUrl, or authCallback (or for testing only, token or tokenDetails)";
                    throw o.default.logAction(o.default.LOG_ERROR, "Auth()", I), new M.default(I, 40160, 401);
                  }
                  o.default.logAction(o.default.LOG_MINOR, "Auth()", "anonymous, using basic auth"), this._saveBasicOptions(S);
                }
              }
              return O.prototype.authorize = function(v, S, I) {
                var D = this, T;
                if (typeof v == "function" && !I ? (I = v, T = v = null) : typeof S == "function" && !I ? (I = S, T = null) : T = S, !I && this.client.options.promises)
                  return P.promisify(this, "authorize", arguments);
                if (T && T.key && this.authOptions.key !== T.key)
                  throw new M.default("Unable to update auth options with incompatible key", 40102, 401);
                T && "force" in T && (o.default.logAction(o.default.LOG_ERROR, "Auth.authorize", "Deprecation warning: specifying {force: true} in authOptions is no longer necessary, authorize() now always gets a new token. Please remove this, as in version 1.0 and later, having a non-null authOptions will overwrite stored library authOptions, which may not be what you want"), P.isOnlyPropIn(T, "force") && (T = null)), this._forceNewToken(v, T, function(U, G) {
                  if (U) {
                    D.client.connection && D.client.connection.connectionManager.actOnErrorFromAuthorize(U), I == null || I(U);
                    return;
                  }
                  A(D.client) ? D.client.connection.connectionManager.onAuthUpdated(G, I || h) : I == null || I(null, G);
                });
              }, O.prototype.authorise = function(v, S, I) {
                o.default.deprecated("Auth.authorise", "Auth.authorize"), this.authorize(v, S, I);
              }, O.prototype._forceNewToken = function(v, S, I) {
                var D = this;
                this.tokenDetails = null, this._saveTokenOptions(v, S), r(this.authOptions), this._ensureValidAuthCredentials(!0, function(T, U) {
                  delete D.tokenParams.timestamp, delete D.authOptions.queryTime, I(T, U);
                });
              }, O.prototype.requestToken = function(v, S, I) {
                var D = this;
                if (typeof v == "function" && !I ? (I = v, S = v = null) : typeof S == "function" && !I && (I = S, S = null), !I && this.client.options.promises)
                  return P.promisify(this, "requestToken", arguments);
                S = S || this.authOptions, v = v || P.copy(this.tokenParams);
                var T = I || h, U, G = this.client;
                if (S.authCallback)
                  o.default.logAction(o.default.LOG_MINOR, "Auth.requestToken()", "using token auth with authCallback"), U = S.authCallback;
                else if (S.authUrl)
                  o.default.logAction(o.default.LOG_MINOR, "Auth.requestToken()", "using token auth with authUrl"), U = function(x, w) {
                    var j = P.mixin({ accept: "application/json, text/plain" }, S.authHeaders), z = S.authMethod && S.authMethod.toLowerCase() === "post", K, Y = S.authUrl.indexOf("?");
                    Y > -1 && (K = P.parseQueryString(S.authUrl.slice(Y)), S.authUrl = S.authUrl.slice(0, Y), z || (S.authParams = P.mixin(K, S.authParams)));
                    var Z = P.mixin({}, S.authParams || {}, x), $ = function(rt, nt, ut, ct) {
                      var ot;
                      if (rt ? o.default.logAction(o.default.LOG_MICRO, "Auth.requestToken().tokenRequestCallback", "Received Error: " + P.inspectError(rt)) : (ot = ut["content-type"], o.default.logAction(o.default.LOG_MICRO, "Auth.requestToken().tokenRequestCallback", "Received; content-type: " + ot + "; body: " + P.inspectBody(nt))), rt || ct)
                        return w(rt, nt);
                      if (C.default.BufferUtils.isBuffer(nt) && (nt = nt.toString()), !ot) {
                        w(new M.default("authUrl response is missing a content-type header", 40170, 401));
                        return;
                      }
                      var gt = ot.indexOf("application/json") > -1, mt = ot.indexOf("text/plain") > -1 || ot.indexOf("application/jwt") > -1;
                      if (!gt && !mt) {
                        w(new M.default("authUrl responded with unacceptable content-type " + ot + ", should be either text/plain, application/jwt or application/json", 40170, 401));
                        return;
                      }
                      if (gt) {
                        if (nt.length > a) {
                          w(new M.default("authUrl response exceeded max permitted length", 40170, 401));
                          return;
                        }
                        try {
                          nt = JSON.parse(nt);
                        } catch (yt) {
                          w(new M.default("Unexpected error processing authURL response; err = " + yt.message, 40170, 401));
                          return;
                        }
                      }
                      w(null, nt, ot);
                    };
                    if (o.default.logAction(o.default.LOG_MICRO, "Auth.requestToken().tokenRequestCallback", "Requesting token from " + S.authUrl + "; Params: " + JSON.stringify(Z) + "; method: " + (z ? "POST" : "GET")), z) {
                      var et = j || {};
                      et["content-type"] = "application/x-www-form-urlencoded";
                      var X = P.toQueryString(Z).slice(1);
                      D.client.http.doUri(m.default.Post, G, S.authUrl, et, X, K, $);
                    } else
                      D.client.http.doUri(m.default.Get, G, S.authUrl, j || {}, null, Z, $);
                  };
                else if (S.key)
                  o.default.logAction(o.default.LOG_MINOR, "Auth.requestToken()", "using token auth with client-side signing"), U = function(x, w) {
                    D.createTokenRequest(x, S, w);
                  };
                else {
                  var W = "Need a new token, but authOptions does not include any way to request one (no authUrl, authCallback, or key)";
                  o.default.logAction(o.default.LOG_ERROR, "Auth()", "library initialized with a token literal without any way to renew the token when it expires (no authUrl, authCallback, or key). See https://help.ably.io/error/40171 for help"), T(new M.default(W, 40171, 403));
                  return;
                }
                "capability" in v && (v.capability = p(v.capability));
                var k = function(x, w) {
                  var j = x.keyName, z = "/keys/" + j + "/requestToken", K = function(Z) {
                    return G.baseUri(Z) + z;
                  }, Y = P.defaultPostHeaders(D.client.options);
                  S.requestHeaders && P.mixin(Y, S.requestHeaders), o.default.logAction(o.default.LOG_MICRO, "Auth.requestToken().requestToken", "Sending POST to " + z + "; Token params: " + JSON.stringify(x)), D.client.http.do(m.default.Post, G, K, Y, JSON.stringify(x), null, w);
                }, J = !1, V = this.client.options.timeouts.realtimeRequestTimeout, y = setTimeout(function() {
                  J = !0;
                  var x = "Token request callback timed out after " + V / 1e3 + " seconds";
                  o.default.logAction(o.default.LOG_ERROR, "Auth.requestToken()", x), T(new M.default(x, 40170, 401));
                }, V);
                U(v, function(x, w, j) {
                  if (!J) {
                    if (clearTimeout(y), x) {
                      o.default.logAction(o.default.LOG_ERROR, "Auth.requestToken()", "token request signing call returned error; err = " + P.inspectError(x)), T(c(x));
                      return;
                    }
                    if (typeof w == "string") {
                      w.length === 0 ? T(new M.default("Token string is empty", 40170, 401)) : w.length > a ? T(new M.default("Token string exceeded max permitted length (was " + w.length + " bytes)", 40170, 401)) : w === "undefined" || w === "null" ? T(new M.default("Token string was literal null/undefined", 40170, 401)) : w[0] === "{" && !(j && j.indexOf("application/jwt") > -1) ? T(new M.default("Token was double-encoded; make sure you're not JSON-encoding an already encoded token request or details", 40170, 401)) : T(null, { token: w });
                      return;
                    }
                    if (typeof w != "object") {
                      var z = "Expected token request callback to call back with a token string or token request/details object, but got a " + typeof w;
                      o.default.logAction(o.default.LOG_ERROR, "Auth.requestToken()", z), T(new M.default(z, 40170, 401));
                      return;
                    }
                    var K = JSON.stringify(w).length;
                    if (K > a && !S.suppressMaxLengthCheck) {
                      T(new M.default("Token request/details object exceeded max permitted stringified size (was " + K + " bytes)", 40170, 401));
                      return;
                    }
                    if ("issued" in w) {
                      T(null, w);
                      return;
                    }
                    if (!("keyName" in w)) {
                      var z = "Expected token request callback to call back with a token string, token request object, or token details object";
                      o.default.logAction(o.default.LOG_ERROR, "Auth.requestToken()", z), T(new M.default(z, 40170, 401));
                      return;
                    }
                    k(w, function(Y, Z, $, et) {
                      if (Y) {
                        o.default.logAction(o.default.LOG_ERROR, "Auth.requestToken()", "token request API call returned error; err = " + P.inspectError(Y)), T(c(Y));
                        return;
                      }
                      et || (Z = JSON.parse(Z)), o.default.logAction(o.default.LOG_MINOR, "Auth.getToken()", "token received"), T(null, Z);
                    });
                  }
                });
              }, O.prototype.createTokenRequest = function(v, S, I) {
                var D = this;
                if (typeof v == "function" && !I ? (I = v, S = v = null) : typeof S == "function" && !I && (I = S, S = null), !I && this.client.options.promises)
                  return P.promisify(this, "createTokenRequest", arguments);
                S = S || this.authOptions, v = v || P.copy(this.tokenParams);
                var T = S.key;
                if (!T) {
                  I(new M.default("No key specified", 40101, 403));
                  return;
                }
                var U = T.split(":"), G = U[0], W = U[1];
                if (!W) {
                  I(new M.default("Invalid key specified", 40101, 403));
                  return;
                }
                if (v.clientId === "") {
                  I(new M.default("clientId can’t be an empty string", 40012, 400));
                  return;
                }
                "capability" in v && (v.capability = p(v.capability));
                var k = P.mixin({ keyName: G }, v), J = v.clientId || "", V = v.ttl || "", y = v.capability || "";
                (function(x) {
                  if (k.timestamp) {
                    x();
                    return;
                  }
                  D.getTimestamp(S && S.queryTime, function(w, j) {
                    if (w) {
                      I(w);
                      return;
                    }
                    k.timestamp = j, x();
                  });
                })(function() {
                  var x = k.nonce || (k.nonce = R()), w = k.timestamp, j = k.keyName + `
` + V + `
` + y + `
` + J + `
` + w + `
` + x + `
`;
                  k.mac = k.mac || l(j, W), o.default.logAction(o.default.LOG_MINOR, "Auth.getTokenRequest()", "generated signed request"), I(null, k);
                });
              }, O.prototype.getAuthParams = function(v) {
                this.method == "basic" ? v(null, { key: this.key }) : this._ensureValidAuthCredentials(!1, function(S, I) {
                  if (S) {
                    v(S);
                    return;
                  }
                  if (!I)
                    throw new Error("Auth.getAuthParams(): _ensureValidAuthCredentials returned no error or tokenDetails");
                  v(null, { access_token: I.token });
                });
              }, O.prototype.getAuthHeaders = function(v) {
                this.method == "basic" ? v(null, { authorization: "Basic " + this.basicKey }) : this._ensureValidAuthCredentials(!1, function(S, I) {
                  if (S) {
                    v(S);
                    return;
                  }
                  if (!I)
                    throw new Error("Auth.getAuthParams(): _ensureValidAuthCredentials returned no error or tokenDetails");
                  v(null, { authorization: "Bearer " + P.toBase64(I.token) });
                });
              }, O.prototype.getTimestamp = function(v, S) {
                !this.isTimeOffsetSet() && (v || this.authOptions.queryTime) ? this.client.time(S) : S(null, this.getTimestampUsingOffset());
              }, O.prototype.getTimestampUsingOffset = function() {
                return P.now() + (this.client.serverTimeOffset || 0);
              }, O.prototype.isTimeOffsetSet = function() {
                return this.client.serverTimeOffset !== null;
              }, O.prototype._saveBasicOptions = function(v) {
                this.method = "basic", this.key = v.key, this.basicKey = P.toBase64(v.key), this.authOptions = v || {}, "clientId" in v && this._userSetClientId(v.clientId);
              }, O.prototype._saveTokenOptions = function(v, S) {
                this.method = "token", v && (this.tokenParams = v), S && (S.token && (S.tokenDetails = typeof S.token == "string" ? { token: S.token } : S.token), S.tokenDetails && (this.tokenDetails = S.tokenDetails), "clientId" in S && this._userSetClientId(S.clientId), this.authOptions = S);
              }, O.prototype._ensureValidAuthCredentials = function(v, S) {
                var I = this, D = this.tokenDetails;
                if (D) {
                  if (this._tokenClientIdMismatch(D.clientId)) {
                    S(new M.default("Mismatch between clientId in token (" + D.clientId + ") and current clientId (" + this.clientId + ")", 40102, 403));
                    return;
                  }
                  if (!this.isTimeOffsetSet() || !D.expires || D.expires >= this.getTimestampUsingOffset()) {
                    o.default.logAction(o.default.LOG_MINOR, "Auth.getToken()", "using cached token; expires = " + D.expires), S(null, D);
                    return;
                  }
                  o.default.logAction(o.default.LOG_MINOR, "Auth.getToken()", "deleting expired token"), this.tokenDetails = null;
                }
                if ((this.waitingForTokenRequest || (this.waitingForTokenRequest = E.default.create())).push(S), !(this.currentTokenRequestId !== null && !v)) {
                  var T = this.currentTokenRequestId = i();
                  this.requestToken(this.tokenParams, this.authOptions, function(U, G) {
                    if (I.currentTokenRequestId > T) {
                      o.default.logAction(o.default.LOG_MINOR, "Auth._ensureValidAuthCredentials()", "Discarding token request response; overtaken by newer one");
                      return;
                    }
                    I.currentTokenRequestId = null;
                    var W = I.waitingForTokenRequest || h;
                    if (I.waitingForTokenRequest = null, U) {
                      W(U);
                      return;
                    }
                    W(null, I.tokenDetails = G);
                  });
                }
              }, O.prototype._userSetClientId = function(v) {
                if (typeof v == "string" || v === null) {
                  if (v === "*")
                    throw new M.default('Can’t use "*" as a clientId as that string is reserved. (To change the default token request behaviour to use a wildcard clientId, instantiate the library with {defaultTokenParams: {clientId: "*"}}), or if calling authorize(), pass it in as a tokenParam: authorize({clientId: "*"}, authOptions)', 40012, 400);
                  var S = this._uncheckedSetClientId(v);
                  if (S)
                    throw S;
                } else
                  throw new M.default("clientId must be either a string or null", 40012, 400);
              }, O.prototype._uncheckedSetClientId = function(v) {
                if (this._tokenClientIdMismatch(v)) {
                  var S = "Unexpected clientId mismatch: client has " + this.clientId + ", requested " + v, I = new M.default(S, 40102, 401);
                  return o.default.logAction(o.default.LOG_ERROR, "Auth._uncheckedSetClientId()", S), I;
                } else
                  return this.clientId = this.tokenParams.clientId = v, null;
              }, O.prototype._tokenClientIdMismatch = function(v) {
                return !!(this.clientId && this.clientId !== "*" && v && v !== "*" && this.clientId !== v);
              }, O.isTokenErr = function(v) {
                return v.code && v.code >= 40140 && v.code < 40150;
              }, O;
            }()
          );
          f.default = g;
        },
        /* 17 */
        /***/
        function(N, f, s) {
          Object.defineProperty(f, "__esModule", { value: !0 });
          var d;
          (function(o) {
            o.Get = "get", o.Delete = "delete", o.Post = "post", o.Put = "put", o.Patch = "patch";
          })(d || (d = {})), f.default = d;
        },
        /* 18 */
        /***/
        function(N, f, s) {
          Object.defineProperty(f, "__esModule", { value: !0 }), f.HttpPaginatedResponse = f.PaginatedResult = void 0;
          var d = s(0), o = d.__importStar(s(1)), P = d.__importDefault(s(2)), E = d.__importDefault(s(24));
          function M(h) {
            var R = h.match(/^\.\/(\w+)\?(.*)$/);
            return R && R[2] && o.parseQueryString(R[2]);
          }
          function L(h) {
            typeof h == "string" && (h = h.split(","));
            for (var R = {}, A = 0; A < h.length; A++) {
              var c = h[A].match(/^\s*<(.+)>;\s*rel="(\w+)"$/);
              if (c) {
                var l = M(c[1]);
                l && (R[c[2]] = l);
              }
            }
            return R;
          }
          function b(h, R, A) {
            return !(A && (R || typeof h.code == "number"));
          }
          var m = (
            /** @class */
            function() {
              function h(R, A, c, l, p, r) {
                this.rest = R, this.path = A, this.headers = c, this.envelope = l ?? null, this.bodyHandler = p, this.useHttpPaginatedResponse = r || !1;
              }
              return h.prototype.get = function(R, A) {
                var c = this;
                E.default.get(this.rest, this.path, this.headers, R, this.envelope, function(l, p, r, n, t) {
                  c.handlePage(l, p, r, n, t, A);
                });
              }, h.prototype.delete = function(R, A) {
                var c = this;
                E.default.delete(this.rest, this.path, this.headers, R, this.envelope, function(l, p, r, n, t) {
                  c.handlePage(l, p, r, n, t, A);
                });
              }, h.prototype.post = function(R, A, c) {
                var l = this;
                E.default.post(this.rest, this.path, A, this.headers, R, this.envelope, function(p, r, n, t, e) {
                  c && l.handlePage(p, r, n, t, e, c);
                });
              }, h.prototype.put = function(R, A, c) {
                var l = this;
                E.default.put(this.rest, this.path, A, this.headers, R, this.envelope, function(p, r, n, t, e) {
                  c && l.handlePage(p, r, n, t, e, c);
                });
              }, h.prototype.patch = function(R, A, c) {
                var l = this;
                E.default.patch(this.rest, this.path, A, this.headers, R, this.envelope, function(p, r, n, t, e) {
                  c && l.handlePage(p, r, n, t, e, c);
                });
              }, h.prototype.handlePage = function(R, A, c, l, p, r) {
                if (R && b(R, A, this.useHttpPaginatedResponse)) {
                  P.default.logAction(P.default.LOG_ERROR, "PaginatedResource.handlePage()", "Unexpected error getting resource: err = " + o.inspectError(R)), r == null || r(R);
                  return;
                }
                var n, t, e;
                try {
                  n = this.bodyHandler(A, c || {}, l);
                } catch (u) {
                  r == null || r(R || u);
                  return;
                }
                c && (t = c.Link || c.link) && (e = L(t)), this.useHttpPaginatedResponse ? r(null, new a(this, n, c || {}, p, e, R)) : r(null, new C(this, n, e));
              }, h;
            }()
          ), C = (
            /** @class */
            function() {
              function h(R, A, c) {
                var l = this;
                this.resource = R, this.items = A;
                var p = this;
                c && ("first" in c && (this.first = function(r) {
                  if (!r && p.resource.rest.options.promises)
                    return o.promisify(p, "first", []);
                  p.get(c.first, r);
                }), "current" in c && (this.current = function(r) {
                  if (!r && p.resource.rest.options.promises)
                    return o.promisify(p, "current", []);
                  p.get(c.current, r);
                }), this.next = function(r) {
                  if (!r && p.resource.rest.options.promises)
                    return o.promisify(p, "next", []);
                  "next" in c ? p.get(c.next, r) : r(null);
                }, this.hasNext = function() {
                  return "next" in c;
                }, this.isLast = function() {
                  var r;
                  return !(!((r = l.hasNext) === null || r === void 0) && r.call(l));
                });
              }
              return h.prototype.get = function(R, A) {
                var c = this.resource;
                E.default.get(c.rest, c.path, c.headers, R, c.envelope, function(l, p, r, n, t) {
                  c.handlePage(l, p, r, n, t, A);
                });
              }, h;
            }()
          );
          f.PaginatedResult = C;
          var a = (
            /** @class */
            function(h) {
              d.__extends(R, h);
              function R(A, c, l, p, r, n) {
                var t = h.call(this, A, c, r) || this;
                return t.statusCode = p, t.success = p < 300 && p >= 200, t.headers = l, t.errorCode = n && n.code, t.errorMessage = n && n.message, t;
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
            }(C)
          );
          f.HttpPaginatedResponse = a, f.default = m;
        },
        /* 19 */
        /***/
        function(N, f, s) {
          Object.defineProperty(f, "__esModule", { value: !0 }), f.isRetriable = void 0;
          var d = s(0), o = d.__importDefault(s(4)), P = {
            DISCONNECTED: 80003,
            SUSPENDED: 80002,
            FAILED: 8e4,
            CLOSING: 80017,
            CLOSED: 80017,
            UNKNOWN_CONNECTION_ERR: 50002,
            UNKNOWN_CHANNEL_ERR: 50001
          }, E = {
            disconnected: function() {
              return o.default.fromValues({
                statusCode: 400,
                code: P.DISCONNECTED,
                message: "Connection to server temporarily unavailable"
              });
            },
            suspended: function() {
              return o.default.fromValues({
                statusCode: 400,
                code: P.SUSPENDED,
                message: "Connection to server unavailable"
              });
            },
            failed: function() {
              return o.default.fromValues({
                statusCode: 400,
                code: P.FAILED,
                message: "Connection failed or disconnected by server"
              });
            },
            closing: function() {
              return o.default.fromValues({
                statusCode: 400,
                code: P.CLOSING,
                message: "Connection closing"
              });
            },
            closed: function() {
              return o.default.fromValues({
                statusCode: 400,
                code: P.CLOSED,
                message: "Connection closed"
              });
            },
            unknownConnectionErr: function() {
              return o.default.fromValues({
                statusCode: 500,
                code: P.UNKNOWN_CONNECTION_ERR,
                message: "Internal connection error"
              });
            },
            unknownChannelErr: function() {
              return o.default.fromValues({
                statusCode: 500,
                code: P.UNKNOWN_CONNECTION_ERR,
                message: "Internal channel error"
              });
            }
          };
          function M(L) {
            return !L.statusCode || !L.code || L.statusCode >= 500 ? !0 : Object.values(P).includes(L.code);
          }
          f.isRetriable = M, f.default = E;
        },
        /* 20 */
        /***/
        function(N, f, s) {
          Object.defineProperty(f, "__esModule", { value: !0 });
          var d;
          (function(o) {
            o[o.REQ_SEND = 0] = "REQ_SEND", o[o.REQ_RECV = 1] = "REQ_RECV", o[o.REQ_RECV_POLL = 2] = "REQ_RECV_POLL", o[o.REQ_RECV_STREAM = 3] = "REQ_RECV_STREAM";
          })(d || (d = {})), f.default = d;
        },
        /* 21 */
        /***/
        function(N, f, s) {
          (function(d, o) {
            N.exports = o(s(6), s(5), s(58), s(11), s(40), s(31), s(23), s(26), s(27), s(59), s(60));
          })(this, function(d) {
            return d;
          });
        },
        /* 22 */
        /***/
        function(N, f, s) {
          Object.defineProperty(f, "__esModule", { value: !0 });
          var d = s(0), o = d.__importDefault(s(2)), P = (
            /** @class */
            function() {
              function E(M) {
                this.members = M || [];
              }
              return E.prototype.call = function() {
                for (var M = [], L = 0; L < arguments.length; L++)
                  M[L] = arguments[L];
                for (var b = 0, m = this.members; b < m.length; b++) {
                  var C = m[b];
                  if (C)
                    try {
                      C.apply(void 0, M);
                    } catch (a) {
                      o.default.logAction(o.default.LOG_ERROR, "Multicaster multiple callback handler", "Unexpected exception: " + a + "; stack = " + a.stack);
                    }
                }
              }, E.prototype.push = function() {
                for (var M, L = [], b = 0; b < arguments.length; b++)
                  L[b] = arguments[b];
                (M = this.members).push.apply(M, L);
              }, E.create = function(M) {
                var L = new E(M);
                return Object.assign(function() {
                  for (var b = [], m = 0; m < arguments.length; m++)
                    b[m] = arguments[m];
                  return L.call.apply(L, b);
                }, {
                  push: function(b) {
                    return L.push(b);
                  }
                });
              }, E;
            }()
          );
          f.default = P;
        },
        /* 23 */
        /***/
        function(N, f, s) {
          (function(d, o) {
            N.exports = o(s(6));
          })(this, function(d) {
            (function() {
              var o = d, P = o.lib, E = P.Base, M = o.enc, L = M.Utf8, b = o.algo;
              b.HMAC = E.extend({
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
                init: function(m, C) {
                  m = this._hasher = new m.init(), typeof C == "string" && (C = L.parse(C));
                  var a = m.blockSize, h = a * 4;
                  C.sigBytes > h && (C = m.finalize(C)), C.clamp();
                  for (var R = this._oKey = C.clone(), A = this._iKey = C.clone(), c = R.words, l = A.words, p = 0; p < a; p++)
                    c[p] ^= 1549556828, l[p] ^= 909522486;
                  R.sigBytes = A.sigBytes = h, this.reset();
                },
                /**
                 * Resets this HMAC to its initial state.
                 *
                 * @example
                 *
                 *     hmacHasher.reset();
                 */
                reset: function() {
                  var m = this._hasher;
                  m.reset(), m.update(this._iKey);
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
                update: function(m) {
                  return this._hasher.update(m), this;
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
                finalize: function(m) {
                  var C = this._hasher, a = C.finalize(m);
                  C.reset();
                  var h = C.finalize(this._oKey.clone().concat(a));
                  return h;
                }
              });
            })();
          });
        },
        /* 24 */
        /***/
        function(N, f, s) {
          Object.defineProperty(f, "__esModule", { value: !0 });
          var d = s(0), o = d.__importDefault(s(3)), P = d.__importStar(s(1)), E = d.__importDefault(s(2)), M = d.__importDefault(s(16)), L = d.__importDefault(s(17)), b = s(4);
          function m(c, l, p, r, n) {
            c.http.supportsAuthHeaders ? c.auth.getAuthHeaders(function(t, e) {
              t ? r(t) : n(P.mixin(e, l), p);
            }) : c.auth.getAuthParams(function(t, e) {
              t ? r(t) : n(l, P.mixin(e, p));
            });
          }
          function C(c, l) {
            return function(p, r, n, t, e) {
              if (p && !r) {
                c(p);
                return;
              }
              if (!t)
                try {
                  r = P.decodeBody(r, l);
                } catch (S) {
                  P.isErrorInfoOrPartialErrorInfo(S) ? c(S) : c(new b.PartialErrorInfo(P.inspectError(S), null));
                  return;
                }
              if (!r) {
                c(new b.PartialErrorInfo("unenvelope(): Response body is missing", null));
                return;
              }
              var u = r, i = u.statusCode, g = u.response, O = u.headers;
              if (i === void 0) {
                c(p, r, n, !0, e);
                return;
              }
              if (i < 200 || i >= 300) {
                var v = g && g.error || p;
                v || (v = new Error("Error in unenveloping " + r), v.statusCode = i), c(v, g, O, !0, i);
                return;
              }
              c(p, g, O, !0, i);
            };
          }
          function a(c) {
            var l = [];
            if (c)
              for (var p in c)
                l.push(p + "=" + c[p]);
            return l.join("&");
          }
          function h(c, l) {
            return c + (l ? "?" : "") + a(l);
          }
          function R(c, l, p, r) {
            return function(n, t, e, u, i) {
              n ? E.default.logAction(E.default.LOG_MICRO, "Resource." + l + "()", "Received Error; " + h(p, r) + "; Error: " + P.inspectError(n)) : E.default.logAction(E.default.LOG_MICRO, "Resource." + l + "()", "Received; " + h(p, r) + "; Headers: " + a(e) + "; StatusCode: " + i + "; Body: " + (o.default.BufferUtils.isBuffer(t) ? t.toString() : t)), c && c(n, t, e, u, i);
            };
          }
          var A = (
            /** @class */
            function() {
              function c() {
              }
              return c.get = function(l, p, r, n, t, e) {
                c.do(L.default.Get, l, p, null, r, n, t, e);
              }, c.delete = function(l, p, r, n, t, e) {
                c.do(L.default.Delete, l, p, null, r, n, t, e);
              }, c.post = function(l, p, r, n, t, e, u) {
                c.do(L.default.Post, l, p, r, n, t, e, u);
              }, c.patch = function(l, p, r, n, t, e, u) {
                c.do(L.default.Patch, l, p, r, n, t, e, u);
              }, c.put = function(l, p, r, n, t, e, u) {
                c.do(L.default.Put, l, p, r, n, t, e, u);
              }, c.do = function(l, p, r, n, t, e, u, i) {
                E.default.shouldLog(E.default.LOG_MICRO) && (i = R(i, l, r, e)), u && (i = i && C(i, u), (e = e || {}).envelope = u);
                function g(O, v) {
                  var S;
                  if (E.default.shouldLog(E.default.LOG_MICRO) && E.default.logAction(E.default.LOG_MICRO, "Resource." + l + "()", "Sending; " + h(r, v)), E.default.shouldLog(E.default.LOG_MICRO)) {
                    var I = n;
                    if (((S = O["content-type"]) === null || S === void 0 ? void 0 : S.indexOf("msgpack")) > 0)
                      try {
                        I = o.default.Config.msgpack.decode(n);
                      } catch (D) {
                        E.default.logAction(E.default.LOG_MICRO, "Resource." + l + "()", "Sending MsgPack Decoding Error: " + P.inspectError(D));
                      }
                    E.default.logAction(E.default.LOG_MICRO, "Resource." + l + "()", "Sending; " + h(r, v) + "; Body: " + I);
                  }
                  p.http.do(l, p, r, O, n, v, function(D, T, U, G, W) {
                    if (D && M.default.isTokenErr(D)) {
                      p.auth.authorize(null, null, function(k) {
                        if (k) {
                          i(k);
                          return;
                        }
                        m(p, U, v, i, g);
                      });
                      return;
                    }
                    i(D, T, U, G, W);
                  });
                }
                m(p, t, e, i, g);
              }, c;
            }()
          );
          f.default = A;
        },
        /* 25 */
        /***/
        function(N, f, s) {
          Object.defineProperty(f, "__esModule", { value: !0 });
          var d = s(0), o = d.__importDefault(s(10)), P = d.__importStar(s(1)), E = d.__importDefault(s(7)), M = d.__importDefault(s(2)), L = d.__importDefault(s(19)), b = d.__importDefault(s(4)), m = d.__importDefault(s(3)), C = o.default.Action, a = o.default.fromValues({ action: C.CLOSE }), h = o.default.fromValues({ action: C.DISCONNECT }), R = (
            /** @class */
            function(A) {
              d.__extends(c, A);
              function c(l, p, r, n) {
                var t = A.call(this) || this;
                return n && (r.format = void 0, r.heartbeats = !0), t.connectionManager = l, l.registerProposedTransport(t), t.auth = p, t.params = r, t.timeouts = r.options.timeouts, t.format = r.format, t.isConnected = !1, t.isFinished = !1, t.isDisposed = !1, t.maxIdleInterval = null, t.idleTimer = null, t.lastActivity = null, t;
              }
              return c.prototype.connect = function() {
              }, c.prototype.close = function() {
                this.isConnected && this.requestClose(), this.finish("closed", L.default.closed());
              }, c.prototype.disconnect = function(l) {
                this.isConnected && this.requestDisconnect(), this.finish("disconnected", l || L.default.disconnected());
              }, c.prototype.fail = function(l) {
                this.isConnected && this.requestDisconnect(), this.finish("failed", l || L.default.failed());
              }, c.prototype.finish = function(l, p) {
                var r;
                this.isFinished || (this.isFinished = !0, this.isConnected = !1, this.maxIdleInterval = null, clearTimeout((r = this.idleTimer) !== null && r !== void 0 ? r : void 0), this.idleTimer = null, this.emit(l, p), this.dispose());
              }, c.prototype.onProtocolMessage = function(l) {
                switch (M.default.shouldLog(M.default.LOG_MICRO) && M.default.logAction(M.default.LOG_MICRO, "Transport.onProtocolMessage()", "received on " + this.shortName + ": " + o.default.stringify(l) + "; connectionId = " + this.connectionManager.connectionId), this.onActivity(), l.action) {
                  case C.HEARTBEAT:
                    M.default.logAction(M.default.LOG_MICRO, "Transport.onProtocolMessage()", this.shortName + " heartbeat; connectionId = " + this.connectionManager.connectionId), this.emit("heartbeat", l.id);
                    break;
                  case C.CONNECTED:
                    this.onConnect(l), this.emit("connected", l.error, l.connectionId, l.connectionDetails, l);
                    break;
                  case C.CLOSED:
                    this.onClose(l);
                    break;
                  case C.DISCONNECTED:
                    this.onDisconnect(l);
                    break;
                  case C.ACK:
                    this.emit("ack", l.msgSerial, l.count);
                    break;
                  case C.NACK:
                    this.emit("nack", l.msgSerial, l.count, l.error);
                    break;
                  case C.SYNC:
                    this.connectionManager.onChannelMessage(l, this);
                    break;
                  case C.ACTIVATE:
                    break;
                  case C.AUTH:
                    this.auth.authorize(function(p) {
                      p && M.default.logAction(M.default.LOG_ERROR, "Transport.onProtocolMessage()", "Ably requested re-authentication, but unable to obtain a new token: " + P.inspectError(p));
                    });
                    break;
                  case C.ERROR:
                    if (M.default.logAction(M.default.LOG_MINOR, "Transport.onProtocolMessage()", "received error action; connectionId = " + this.connectionManager.connectionId + "; err = " + m.default.Config.inspect(l.error) + (l.channel ? ", channel: " + l.channel : "")), l.channel === void 0) {
                      this.onFatalError(l);
                      break;
                    }
                    this.connectionManager.onChannelMessage(l, this);
                    break;
                  default:
                    this.connectionManager.onChannelMessage(l, this);
                }
              }, c.prototype.onConnect = function(l) {
                if (this.isConnected = !0, !l.connectionDetails)
                  throw new Error("Transport.onConnect(): Connect message recieved without connectionDetails");
                var p = l.connectionDetails.maxIdleInterval;
                p && (this.maxIdleInterval = p + this.timeouts.realtimeRequestTimeout, this.onActivity());
              }, c.prototype.onDisconnect = function(l) {
                var p = l && l.error;
                M.default.logAction(M.default.LOG_MINOR, "Transport.onDisconnect()", "err = " + P.inspectError(p)), this.finish("disconnected", p);
              }, c.prototype.onFatalError = function(l) {
                var p = l && l.error;
                M.default.logAction(M.default.LOG_MINOR, "Transport.onFatalError()", "err = " + P.inspectError(p)), this.finish("failed", p);
              }, c.prototype.onClose = function(l) {
                var p = l && l.error;
                M.default.logAction(M.default.LOG_MINOR, "Transport.onClose()", "err = " + P.inspectError(p)), this.finish("closed", p);
              }, c.prototype.requestClose = function() {
                M.default.logAction(M.default.LOG_MINOR, "Transport.requestClose()", ""), this.send(a);
              }, c.prototype.requestDisconnect = function() {
                M.default.logAction(M.default.LOG_MINOR, "Transport.requestDisconnect()", ""), this.send(h);
              }, c.prototype.ping = function(l) {
                var p = { action: o.default.Action.HEARTBEAT };
                l && (p.id = l), this.send(o.default.fromValues(p));
              }, c.prototype.dispose = function() {
                M.default.logAction(M.default.LOG_MINOR, "Transport.dispose()", ""), this.isDisposed = !0, this.off();
              }, c.prototype.onActivity = function() {
                this.maxIdleInterval && (this.lastActivity = this.connectionManager.lastActivity = P.now(), this.setIdleTimer(this.maxIdleInterval + 100));
              }, c.prototype.setIdleTimer = function(l) {
                var p = this;
                this.idleTimer || (this.idleTimer = setTimeout(function() {
                  p.onIdleTimerExpire();
                }, l));
              }, c.prototype.onIdleTimerExpire = function() {
                if (!this.lastActivity || !this.maxIdleInterval)
                  throw new Error("Transport.onIdleTimerExpire(): lastActivity/maxIdleInterval not set");
                this.idleTimer = null;
                var l = P.now() - this.lastActivity, p = this.maxIdleInterval - l;
                if (p <= 0) {
                  var r = "No activity seen from realtime in " + l + "ms; assuming connection has dropped";
                  M.default.logAction(M.default.LOG_ERROR, "Transport.onIdleTimerExpire()", r), this.disconnect(new b.default(r, 80003, 408));
                } else
                  this.setIdleTimer(p + 100);
              }, c.tryConnect = function(l, p, r, n, t) {
                var e = new l(p, r, n), u, i = function(O) {
                  clearTimeout(u), t({ event: this.event, error: O });
                }, g = p.options.timeouts.realtimeRequestTimeout;
                u = setTimeout(function() {
                  e.off(["preconnect", "disconnected", "failed"]), e.dispose(), i.call({ event: "disconnected" }, new b.default("Timeout waiting for transport to indicate itself viable", 5e4, 500));
                }, g), e.on(["failed", "disconnected"], i), e.on("preconnect", function() {
                  M.default.logAction(M.default.LOG_MINOR, "Transport.tryConnect()", "viable transport " + e), clearTimeout(u), e.off(["failed", "disconnected"], i), t(null, e);
                }), e.connect();
              }, c;
            }(E.default)
          );
          f.default = R;
        },
        /* 26 */
        /***/
        function(N, f, s) {
          (function(d, o) {
            N.exports = o(s(6), s(40), s(23));
          })(this, function(d) {
            return function() {
              var o = d, P = o.lib, E = P.Base, M = P.WordArray, L = o.algo, b = L.MD5, m = L.EvpKDF = E.extend({
                /**
                 * Configuration options.
                 *
                 * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
                 * @property {Hasher} hasher The hash algorithm to use. Default: MD5
                 * @property {number} iterations The number of iterations to perform. Default: 1
                 */
                cfg: E.extend({
                  keySize: 128 / 32,
                  hasher: b,
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
                init: function(C) {
                  this.cfg = this.cfg.extend(C);
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
                compute: function(C, a) {
                  for (var h, R = this.cfg, A = R.hasher.create(), c = M.create(), l = c.words, p = R.keySize, r = R.iterations; l.length < p; ) {
                    h && A.update(h), h = A.update(C).finalize(a), A.reset();
                    for (var n = 1; n < r; n++)
                      h = A.finalize(h), A.reset();
                    c.concat(h);
                  }
                  return c.sigBytes = p * 4, c;
                }
              });
              o.EvpKDF = function(C, a, h) {
                return m.create(h).compute(C, a);
              };
            }(), d.EvpKDF;
          });
        },
        /* 27 */
        /***/
        function(N, f, s) {
          (function(d, o) {
            N.exports = o(s(6), s(26));
          })(this, function(d) {
            d.lib.Cipher || function(o) {
              var P = d, E = P.lib, M = E.Base, L = E.WordArray, b = E.BufferedBlockAlgorithm, m = P.enc;
              m.Utf8;
              var C = m.Base64, a = P.algo, h = a.EvpKDF, R = E.Cipher = b.extend({
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
                createEncryptor: function(v, S) {
                  return this.create(this._ENC_XFORM_MODE, v, S);
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
                createDecryptor: function(v, S) {
                  return this.create(this._DEC_XFORM_MODE, v, S);
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
                init: function(v, S, I) {
                  this.cfg = this.cfg.extend(I), this._xformMode = v, this._key = S, this.reset();
                },
                /**
                 * Resets this cipher to its initial state.
                 *
                 * @example
                 *
                 *     cipher.reset();
                 */
                reset: function() {
                  b.reset.call(this), this._doReset();
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
                process: function(v) {
                  return this._append(v), this._process();
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
                finalize: function(v) {
                  v && this._append(v);
                  var S = this._doFinalize();
                  return S;
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
                  function v(S) {
                    return typeof S == "string" ? O : u;
                  }
                  return function(S) {
                    return {
                      encrypt: function(I, D, T) {
                        return v(D).encrypt(S, I, D, T);
                      },
                      decrypt: function(I, D, T) {
                        return v(D).decrypt(S, I, D, T);
                      }
                    };
                  };
                }()
              });
              E.StreamCipher = R.extend({
                _doFinalize: function() {
                  var v = this._process(!0);
                  return v;
                },
                blockSize: 1
              });
              var A = P.mode = {}, c = E.BlockCipherMode = M.extend({
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
                createEncryptor: function(v, S) {
                  return this.Encryptor.create(v, S);
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
                createDecryptor: function(v, S) {
                  return this.Decryptor.create(v, S);
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
                init: function(v, S) {
                  this._cipher = v, this._iv = S;
                }
              }), l = A.CBC = function() {
                var v = c.extend();
                v.Encryptor = v.extend({
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
                  processBlock: function(I, D) {
                    var T = this._cipher, U = T.blockSize;
                    S.call(this, I, D, U), T.encryptBlock(I, D), this._prevBlock = I.slice(D, D + U);
                  }
                }), v.Decryptor = v.extend({
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
                  processBlock: function(I, D) {
                    var T = this._cipher, U = T.blockSize, G = I.slice(D, D + U);
                    T.decryptBlock(I, D), S.call(this, I, D, U), this._prevBlock = G;
                  }
                });
                function S(I, D, T) {
                  var U, G = this._iv;
                  G ? (U = G, this._iv = o) : U = this._prevBlock;
                  for (var W = 0; W < T; W++)
                    I[D + W] ^= U[W];
                }
                return v;
              }(), p = P.pad = {}, r = p.Pkcs7 = {
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
                pad: function(v, S) {
                  for (var I = S * 4, D = I - v.sigBytes % I, T = D << 24 | D << 16 | D << 8 | D, U = [], G = 0; G < D; G += 4)
                    U.push(T);
                  var W = L.create(U, D);
                  v.concat(W);
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
                unpad: function(v) {
                  var S = v.words[v.sigBytes - 1 >>> 2] & 255;
                  v.sigBytes -= S;
                }
              };
              E.BlockCipher = R.extend({
                /**
                 * Configuration options.
                 *
                 * @property {Mode} mode The block mode to use. Default: CBC
                 * @property {Padding} padding The padding strategy to use. Default: Pkcs7
                 */
                cfg: R.cfg.extend({
                  mode: l,
                  padding: r
                }),
                reset: function() {
                  var v;
                  R.reset.call(this);
                  var S = this.cfg, I = S.iv, D = S.mode;
                  this._xformMode == this._ENC_XFORM_MODE ? v = D.createEncryptor : (v = D.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == v ? this._mode.init(this, I && I.words) : (this._mode = v.call(D, this, I && I.words), this._mode.__creator = v);
                },
                _doProcessBlock: function(v, S) {
                  this._mode.processBlock(v, S);
                },
                _doFinalize: function() {
                  var v, S = this.cfg.padding;
                  return this._xformMode == this._ENC_XFORM_MODE ? (S.pad(this._data, this.blockSize), v = this._process(!0)) : (v = this._process(!0), S.unpad(v)), v;
                },
                blockSize: 128 / 32
              });
              var n = E.CipherParams = M.extend({
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
                init: function(v) {
                  this.mixIn(v);
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
                toString: function(v) {
                  return (v || this.formatter).stringify(this);
                }
              }), t = P.format = {}, e = t.OpenSSL = {
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
                stringify: function(v) {
                  var S, I = v.ciphertext, D = v.salt;
                  return D ? S = L.create([1398893684, 1701076831]).concat(D).concat(I) : S = I, S.toString(C);
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
                parse: function(v) {
                  var S, I = C.parse(v), D = I.words;
                  return D[0] == 1398893684 && D[1] == 1701076831 && (S = L.create(D.slice(2, 4)), D.splice(0, 4), I.sigBytes -= 16), n.create({ ciphertext: I, salt: S });
                }
              }, u = E.SerializableCipher = M.extend({
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
                encrypt: function(v, S, I, D) {
                  D = this.cfg.extend(D);
                  var T = v.createEncryptor(I, D), U = T.finalize(S), G = T.cfg;
                  return n.create({
                    ciphertext: U,
                    key: I,
                    iv: G.iv,
                    algorithm: v,
                    mode: G.mode,
                    padding: G.padding,
                    blockSize: v.blockSize,
                    formatter: D.format
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
                decrypt: function(v, S, I, D) {
                  D = this.cfg.extend(D), S = this._parse(S, D.format);
                  var T = v.createDecryptor(I, D).finalize(S.ciphertext);
                  return T;
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
                _parse: function(v, S) {
                  return typeof v == "string" ? S.parse(v, this) : v;
                }
              }), i = P.kdf = {}, g = i.OpenSSL = {
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
                execute: function(v, S, I, D) {
                  D || (D = L.random(64 / 8));
                  var T = h.create({ keySize: S + I }).compute(v, D), U = L.create(T.words.slice(S), I * 4);
                  return T.sigBytes = S * 4, n.create({ key: T, iv: U, salt: D });
                }
              }, O = E.PasswordBasedCipher = u.extend({
                /**
                 * Configuration options.
                 *
                 * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
                 */
                cfg: u.cfg.extend({
                  kdf: g
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
                encrypt: function(v, S, I, D) {
                  D = this.cfg.extend(D);
                  var T = D.kdf.execute(I, v.keySize, v.ivSize);
                  D.iv = T.iv;
                  var U = u.encrypt.call(this, v, S, T.key, D);
                  return U.mixIn(T), U;
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
                decrypt: function(v, S, I, D) {
                  D = this.cfg.extend(D), S = this._parse(S, D.format);
                  var T = D.kdf.execute(I, v.keySize, v.ivSize, S.salt);
                  D.iv = T.iv;
                  var U = u.decrypt.call(this, v, S, T.key, D);
                  return U;
                }
              });
            }();
          });
        },
        /* 28 */
        /***/
        function(N, f, s) {
          Object.defineProperty(f, "__esModule", { value: !0 }), f.Request = f.createRequest = void 0;
          var d = s(0), o = d.__importStar(s(1)), P = d.__importDefault(s(12)), E = d.__importDefault(s(3)), M = d.__importDefault(s(7)), L = s(4), b = d.__importDefault(s(8)), m = d.__importDefault(s(2)), C = d.__importDefault(s(20)), a = o.getGlobalObject(), h = function() {
          }, R = a._ablyjs_jsonp = {};
          R._ = function(t) {
            return R["_" + t] || h;
          };
          var A = 1, c = "jsonp";
          function l(t, e, u, i, g, O, v) {
            return O = O || b.default.TIMEOUTS, new r(void 0, t, e, o.copy(u), i, g, O, v);
          }
          f.createRequest = l;
          var p = (
            /** @class */
            function(t) {
              d.__extends(e, t);
              function e(u, i, g) {
                var O = t.call(this, u, i, g) || this;
                return O.shortName = c, g.stream = !1, O;
              }
              return e.isAvailable = function() {
                return E.default.Config.jsonpSupported && E.default.Config.allowComet;
              }, e.prototype.toString = function() {
                return "JSONPTransport; uri=" + this.baseUri + "; isConnected=" + this.isConnected;
              }, e.prototype.createRequest = function(u, i, g, O, v, S, I) {
                return S = (this === null || this === void 0 ? void 0 : this.timeouts) || S || b.default.TIMEOUTS, l(u, i, g, O, v, S, I);
              }, e;
            }(P.default)
          ), r = (
            /** @class */
            function(t) {
              d.__extends(e, t);
              function e(u, i, g, O, v, S, I, D) {
                var T = t.call(this) || this;
                return u === void 0 && (u = A++), T.id = u, T.uri = i, T.params = O || {}, T.params.rnd = o.cheapRandStr(), g && (g["X-Ably-Version"] && (T.params.v = g["X-Ably-Version"]), g["X-Ably-Lib"] && (T.params.lib = g["X-Ably-Lib"])), T.body = v, T.method = D, T.requestMode = S, T.timeouts = I, T.requestComplete = !1, T;
              }
              return e.prototype.exec = function() {
                var u = this, i = this.id, g = this.body, O = this.method, v = this.uri, S = this.params;
                S.callback = "_ablyjs_jsonp._(" + i + ")", S.envelope = "jsonp", g && (S.body = g), O && O !== "get" && (S.method = O);
                var I = this.script = document.createElement("script"), D = v + o.toQueryString(S);
                I.src = D, I.src.split("/").slice(-1)[0] !== D.split("/").slice(-1)[0] && m.default.logAction(m.default.LOG_ERROR, "JSONP Request.exec()", "Warning: the browser appears to have truncated the script URI. This will likely result in the request failing due to an unparseable body param"), I.async = !0, I.type = "text/javascript", I.charset = "UTF-8", I.onerror = function(G) {
                  u.complete(new L.PartialErrorInfo("JSONP script error (event: " + E.default.Config.inspect(G) + ")", null, 400));
                }, R["_" + i] = function(G) {
                  if (G.statusCode) {
                    var W = G.response;
                    if (G.statusCode == 204)
                      u.complete(null, null, null, G.statusCode);
                    else if (!W)
                      u.complete(new L.PartialErrorInfo("Invalid server response: no envelope detected", null, 500));
                    else if (G.statusCode < 400 || o.isArray(W))
                      u.complete(null, W, G.headers, G.statusCode);
                    else {
                      var k = W.error || new L.PartialErrorInfo("Error response received from server", null, G.statusCode);
                      u.complete(k);
                    }
                  } else
                    u.complete(null, G);
                };
                var T = this.requestMode == C.default.REQ_SEND ? this.timeouts.httpRequestTimeout : this.timeouts.recvTimeout;
                this.timer = setTimeout(this.abort.bind(this), T);
                var U = document.getElementsByTagName("head")[0];
                U.insertBefore(I, U.firstChild);
              }, e.prototype.complete = function(u, i, g, O) {
                if (g = g || {}, !this.requestComplete) {
                  this.requestComplete = !0;
                  var v = void 0;
                  i && (v = typeof i == "string" ? "text/plain" : "application/json", g["content-type"] = v, this.emit("data", i)), this.emit(
                    "complete",
                    u,
                    i,
                    g,
                    /* unpacked: */
                    !0,
                    O
                  ), this.dispose();
                }
              }, e.prototype.abort = function() {
                this.dispose();
              }, e.prototype.dispose = function() {
                var u = this.timer;
                u && (clearTimeout(u), this.timer = null);
                var i = this.script;
                i.parentNode && i.parentNode.removeChild(i), delete R[this.id], this.emit("disposed");
              }, e;
            }(M.default)
          );
          f.Request = r;
          function n(t) {
            return a.JSONPTransport = p, p.isAvailable() && (t.supportedTransports[c] = p), p;
          }
          f.default = n;
        },
        /* 29 */
        /***/
        function(N, f, s) {
          Object.defineProperty(f, "__esModule", { value: !0 });
          var d = s(0), o = d.__importStar(s(1)), P = d.__importDefault(s(2)), E = d.__importDefault(s(8)), M = d.__importDefault(s(16)), L = d.__importDefault(s(46)), b = d.__importDefault(s(18)), m = d.__importDefault(s(32)), C = d.__importDefault(s(4)), a = d.__importDefault(s(49)), h = d.__importDefault(s(17)), R = d.__importDefault(s(3)), A = d.__importDefault(s(9)), c = d.__importDefault(s(14)), l = function() {
          }, p = (
            /** @class */
            function() {
              function n(t) {
                if (!t) {
                  var e = "no options provided";
                  throw P.default.logAction(P.default.LOG_ERROR, "Rest()", e), new Error(e);
                }
                var u = E.default.objectifyOptions(t);
                u.log && P.default.setLog(u.log.level, u.log.handler), P.default.logAction(P.default.LOG_MICRO, "Rest()", "initialized with clientOptions " + R.default.Config.inspect(t));
                var i = this.options = E.default.normaliseOptions(u);
                if (i.key) {
                  var g = i.key.match(/^([^:\s]+):([^:.\s]+)$/);
                  if (!g) {
                    var e = "invalid key parameter";
                    throw P.default.logAction(P.default.LOG_ERROR, "Rest()", e), new C.default(e, 40400, 404);
                  }
                  i.keyName = g[1], i.keySecret = g[2];
                }
                if ("clientId" in i)
                  if (typeof i.clientId == "string" || i.clientId === null) {
                    if (i.clientId === "*")
                      throw new C.default('Can’t use "*" as a clientId as that string is reserved. (To change the default token request behaviour to use a wildcard clientId, use {defaultTokenParams: {clientId: "*"}})', 40012, 400);
                  } else
                    throw new C.default("clientId must be either a string or null", 40012, 400);
                P.default.logAction(P.default.LOG_MINOR, "Rest()", "started; version = " + E.default.version), this.baseUri = this.authority = function(O) {
                  return E.default.getHttpScheme(i) + O + ":" + E.default.getPort(i, !1);
                }, this._currentFallback = null, this.serverTimeOffset = null, this.http = new R.default.Http(i), this.auth = new M.default(this, i), this.channels = new r(this), this.push = new L.default(this);
              }
              return n.prototype.stats = function(t, e) {
                if (e === void 0)
                  if (typeof t == "function")
                    e = t, t = null;
                  else {
                    if (this.options.promises)
                      return o.promisify(this, "stats", [t]);
                    e = l;
                  }
                var u = o.defaultGetHeaders(this.options), i = this.options.useBinaryProtocol ? o.Format.msgpack : o.Format.json, g = this.http.supportsLinkHeaders ? void 0 : i;
                this.options.headers && o.mixin(u, this.options.headers), new b.default(this, "/stats", u, g, function(O, v, S) {
                  for (var I = S ? O : JSON.parse(O), D = 0; D < I.length; D++)
                    I[D] = a.default.fromValues(I[D]);
                  return I;
                }).get(t, e);
              }, n.prototype.time = function(t, e) {
                var u = this;
                if (e === void 0) {
                  if (typeof t == "function")
                    e = t, t = null;
                  else if (this.options.promises)
                    return o.promisify(this, "time", [t]);
                }
                var i = e || l, g = o.defaultGetHeaders(this.options);
                this.options.headers && o.mixin(g, this.options.headers);
                var O = function(v) {
                  return u.authority(v) + "/time";
                };
                this.http.do(h.default.Get, this, O, g, null, t, function(v, S, I, D) {
                  if (v) {
                    i(v);
                    return;
                  }
                  D || (S = JSON.parse(S));
                  var T = S[0];
                  if (!T) {
                    i(new C.default("Internal error (unexpected result type from GET /time)", 5e4, 500));
                    return;
                  }
                  u.serverTimeOffset = T - o.now(), i(null, T);
                });
              }, n.prototype.request = function(t, e, u, i, g, O) {
                var v = this.options.useBinaryProtocol, S = v ? R.default.Config.msgpack.encode : JSON.stringify, I = v ? R.default.Config.msgpack.decode : JSON.parse, D = v ? o.Format.msgpack : o.Format.json, T = this.http.supportsLinkHeaders ? void 0 : D;
                u = u || {};
                var U = t.toLowerCase(), G = U == "get" ? o.defaultGetHeaders(this.options, D) : o.defaultPostHeaders(this.options, D);
                if (O === void 0) {
                  if (this.options.promises)
                    return o.promisify(this, "request", [t, e, u, i, g]);
                  O = l;
                }
                typeof i != "string" && (i = S(i)), this.options.headers && o.mixin(G, this.options.headers), g && o.mixin(G, g);
                var W = new b.default(
                  this,
                  e,
                  G,
                  T,
                  function(k, J, V) {
                    return o.ensureArray(V ? k : I(k));
                  },
                  /* useHttpPaginatedResponse: */
                  !0
                );
                if (!o.arrIn(R.default.Http.methods, U))
                  throw new C.default("Unsupported method " + U, 40500, 405);
                o.arrIn(R.default.Http.methodsWithBody, U) ? W[U](u, i, O) : W[U](u, O);
              }, n.prototype.setLog = function(t) {
                P.default.setLog(t.level, t.handler);
              }, n.Promise = function(t) {
                return t = E.default.objectifyOptions(t), t.promises = !0, new n(t);
              }, n.Callbacks = n, n.Platform = R.default, n.Message = A.default, n.PresenceMessage = c.default, n;
            }()
          ), r = (
            /** @class */
            function() {
              function n(t) {
                this.rest = t, this.all = /* @__PURE__ */ Object.create(null);
              }
              return n.prototype.get = function(t, e) {
                t = String(t);
                var u = this.all[t];
                return u ? e && u.setOptions(e) : this.all[t] = u = new m.default(this.rest, t, e), u;
              }, n.prototype.release = function(t) {
                delete this.all[String(t)];
              }, n;
            }()
          );
          f.default = p;
        },
        /* 30 */
        /***/
        function(N, f, s) {
          (function(d, o) {
            N.exports = o(s(6));
          })(this, function(d) {
            return d.enc.Utf8;
          });
        },
        /* 31 */
        /***/
        function(N, f, s) {
          (function(d, o) {
            N.exports = o(s(6));
          })(this, function(d) {
            return function(o) {
              var P = d, E = P.lib, M = E.WordArray, L = E.Hasher, b = P.algo, m = [], C = [];
              (function() {
                function R(p) {
                  for (var r = o.sqrt(p), n = 2; n <= r; n++)
                    if (!(p % n))
                      return !1;
                  return !0;
                }
                function A(p) {
                  return (p - (p | 0)) * 4294967296 | 0;
                }
                for (var c = 2, l = 0; l < 64; )
                  R(c) && (l < 8 && (m[l] = A(o.pow(c, 1 / 2))), C[l] = A(o.pow(c, 1 / 3)), l++), c++;
              })();
              var a = [], h = b.SHA256 = L.extend({
                _doReset: function() {
                  this._hash = new M.init(m.slice(0));
                },
                _doProcessBlock: function(R, A) {
                  for (var c = this._hash.words, l = c[0], p = c[1], r = c[2], n = c[3], t = c[4], e = c[5], u = c[6], i = c[7], g = 0; g < 64; g++) {
                    if (g < 16)
                      a[g] = R[A + g] | 0;
                    else {
                      var O = a[g - 15], v = (O << 25 | O >>> 7) ^ (O << 14 | O >>> 18) ^ O >>> 3, S = a[g - 2], I = (S << 15 | S >>> 17) ^ (S << 13 | S >>> 19) ^ S >>> 10;
                      a[g] = v + a[g - 7] + I + a[g - 16];
                    }
                    var D = t & e ^ ~t & u, T = l & p ^ l & r ^ p & r, U = (l << 30 | l >>> 2) ^ (l << 19 | l >>> 13) ^ (l << 10 | l >>> 22), G = (t << 26 | t >>> 6) ^ (t << 21 | t >>> 11) ^ (t << 7 | t >>> 25), W = i + G + D + C[g] + a[g], k = U + T;
                    i = u, u = e, e = t, t = n + W | 0, n = r, r = p, p = l, l = W + k | 0;
                  }
                  c[0] = c[0] + l | 0, c[1] = c[1] + p | 0, c[2] = c[2] + r | 0, c[3] = c[3] + n | 0, c[4] = c[4] + t | 0, c[5] = c[5] + e | 0, c[6] = c[6] + u | 0, c[7] = c[7] + i | 0;
                },
                _doFinalize: function() {
                  var R = this._data, A = R.words, c = this._nDataBytes * 8, l = R.sigBytes * 8;
                  return A[l >>> 5] |= 128 << 24 - l % 32, A[(l + 64 >>> 9 << 4) + 14] = o.floor(c / 4294967296), A[(l + 64 >>> 9 << 4) + 15] = c, R.sigBytes = A.length * 4, this._process(), this._hash;
                },
                clone: function() {
                  var R = L.clone.call(this);
                  return R._hash = this._hash.clone(), R;
                }
              });
              P.SHA256 = L._createHelper(h), P.HmacSHA256 = L._createHmacHelper(h);
            }(Math), d.SHA256;
          });
        },
        /* 32 */
        /***/
        function(N, f, s) {
          Object.defineProperty(f, "__esModule", { value: !0 });
          var d = s(0), o = d.__importStar(s(1)), P = d.__importDefault(s(7)), E = d.__importDefault(s(2)), M = d.__importDefault(s(33)), L = d.__importDefault(s(9)), b = d.__importDefault(s(4)), m = d.__importDefault(s(18)), C = d.__importDefault(s(24)), a = d.__importDefault(s(3));
          function h() {
          }
          var R = 9;
          function A(p) {
            return o.arrEvery(p, function(r) {
              return !r.id;
            });
          }
          function c(p) {
            var r = p || {};
            if (r.cipher) {
              if (!a.default.Crypto)
                throw new Error("Encryption not enabled; use ably.encryption.js instead");
              var n = a.default.Crypto.getCipher(r.cipher);
              r.cipher = n.cipherParams, r.channelCipher = n.cipher;
            } else
              "cipher" in r && (r.cipher = void 0, r.channelCipher = null);
            return r;
          }
          var l = (
            /** @class */
            function(p) {
              d.__extends(r, p);
              function r(n, t, e) {
                var u = p.call(this) || this;
                return E.default.logAction(E.default.LOG_MINOR, "Channel()", "started; name = " + t), u.rest = n, u.name = t, u.basePath = "/channels/" + encodeURIComponent(t), u.presence = new M.default(u), u.channelOptions = c(e), u;
              }
              return r.prototype.setOptions = function(n) {
                this.channelOptions = c(n);
              }, r.prototype.history = function(n, t) {
                if (E.default.logAction(E.default.LOG_MICRO, "Channel.history()", "channel = " + this.name), t === void 0)
                  if (typeof n == "function")
                    t = n, n = null;
                  else {
                    if (this.rest.options.promises)
                      return o.promisify(this, "history", arguments);
                    t = h;
                  }
                this._history(n, t);
              }, r.prototype._history = function(n, t) {
                var e = this.rest, u = e.options.useBinaryProtocol ? o.Format.msgpack : o.Format.json, i = this.rest.http.supportsLinkHeaders ? void 0 : u, g = o.defaultGetHeaders(e.options, u);
                e.options.headers && o.mixin(g, e.options.headers);
                var O = this.channelOptions;
                new m.default(e, this.basePath + "/messages", g, i, function(v, S, I) {
                  return L.default.fromResponseBody(v, O, I ? void 0 : u);
                }).get(n, t);
              }, r.prototype.publish = function() {
                var n = this, t = arguments.length, e = arguments[0], u = arguments[1], i = arguments[t - 1], g, O;
                if (typeof i != "function") {
                  if (this.rest.options.promises)
                    return o.promisify(this, "publish", arguments);
                  i = h;
                }
                if (typeof e == "string" || e === null)
                  g = [L.default.fromValues({ name: e, data: u })], O = arguments[2];
                else if (o.isObject(e))
                  g = [L.default.fromValues(e)], O = arguments[1];
                else if (o.isArray(e))
                  g = L.default.fromValuesArray(e), O = arguments[1];
                else
                  throw new b.default("The single-argument form of publish() expects a message object or an array of message objects", 40013, 400);
                (typeof O != "object" || !O) && (O = {});
                var v = this.rest, S = v.options, I = S.useBinaryProtocol ? o.Format.msgpack : o.Format.json, D = v.options.idempotentRestPublishing, T = o.defaultPostHeaders(v.options, I);
                if (S.headers && o.mixin(T, S.headers), D && A(g)) {
                  var U = o.randomString(R);
                  o.arrForEach(g, function(G, W) {
                    G.id = U + ":" + W.toString();
                  });
                }
                L.default.encodeArray(g, this.channelOptions, function(G) {
                  if (G) {
                    i(G);
                    return;
                  }
                  var W = L.default.getMessagesSize(g), k = S.maxMessageSize;
                  if (W > k) {
                    i(new b.default("Maximum size of messages that can be published at once exceeded ( was " + W + " bytes; limit is " + k + " bytes)", 40009, 400));
                    return;
                  }
                  n._publish(L.default.serialize(g, I), T, O, i);
                });
              }, r.prototype._publish = function(n, t, e, u) {
                C.default.post(this.rest, this.basePath + "/messages", n, t, e, null, u);
              }, r.prototype.status = function(n) {
                if (typeof n != "function" && this.rest.options.promises)
                  return o.promisify(this, "status", []);
                var t = this.rest.options.useBinaryProtocol ? o.Format.msgpack : o.Format.json, e = o.defaultPostHeaders(this.rest.options, t);
                C.default.get(this.rest, this.basePath, e, {}, t, n || h);
              }, r;
            }(P.default)
          );
          f.default = l;
        },
        /* 33 */
        /***/
        function(N, f, s) {
          Object.defineProperty(f, "__esModule", { value: !0 });
          var d = s(0), o = d.__importStar(s(1)), P = d.__importDefault(s(7)), E = d.__importDefault(s(2)), M = d.__importDefault(s(18)), L = d.__importDefault(s(14));
          function b() {
          }
          var m = (
            /** @class */
            function(C) {
              d.__extends(a, C);
              function a(h) {
                var R = C.call(this) || this;
                return R.channel = h, R.basePath = h.basePath + "/presence", R;
              }
              return a.prototype.get = function(h, R) {
                if (E.default.logAction(E.default.LOG_MICRO, "Presence.get()", "channel = " + this.channel.name), R === void 0)
                  if (typeof h == "function")
                    R = h, h = null;
                  else {
                    if (this.channel.rest.options.promises)
                      return o.promisify(this, "get", arguments);
                    R = b;
                  }
                var A = this.channel.rest, c = A.options.useBinaryProtocol ? o.Format.msgpack : o.Format.json, l = this.channel.rest.http.supportsLinkHeaders ? void 0 : c, p = o.defaultGetHeaders(A.options, c);
                A.options.headers && o.mixin(p, A.options.headers);
                var r = this.channel.channelOptions;
                new M.default(A, this.basePath, p, l, function(n, t, e) {
                  return L.default.fromResponseBody(n, r, e ? void 0 : c);
                }).get(h, R);
              }, a.prototype.history = function(h, R) {
                return E.default.logAction(E.default.LOG_MICRO, "Presence.history()", "channel = " + this.channel.name), this._history(h, R);
              }, a.prototype._history = function(h, R) {
                if (R === void 0)
                  if (typeof h == "function")
                    R = h, h = null;
                  else {
                    if (this.channel.rest.options.promises)
                      return o.promisify(this, "_history", [h]);
                    R = b;
                  }
                var A = this.channel.rest, c = A.options.useBinaryProtocol ? o.Format.msgpack : o.Format.json, l = this.channel.rest.http.supportsLinkHeaders ? void 0 : c, p = o.defaultGetHeaders(A.options, c);
                A.options.headers && o.mixin(p, A.options.headers);
                var r = this.channel.channelOptions;
                new M.default(A, this.basePath + "/history", p, l, function(n, t, e) {
                  return L.default.fromResponseBody(n, r, e ? void 0 : c);
                }).get(h, R);
              }, a;
            }(P.default)
          );
          f.default = m;
        },
        /* 34 */
        /***/
        function(N, f, s) {
          (function(d) {
            Object.defineProperty(f, "__esModule", { value: !0 }), f.TransportParams = void 0;
            var o = s(0), P = o.__importDefault(s(10)), E = o.__importStar(s(1)), M = o.__importStar(s(52)), L = o.__importStar(s(8)), b = o.__importDefault(s(3)), m = o.__importDefault(s(7)), C = o.__importDefault(s(35)), a = o.__importDefault(s(2)), h = o.__importDefault(s(36)), R = o.__importStar(s(19)), A = o.__importStar(s(4)), c = o.__importDefault(s(16)), l = o.__importDefault(s(9)), p = o.__importDefault(s(22)), r = o.__importDefault(s(53)), n = o.__importDefault(s(25)), t = o.__importDefault(s(37)), e = function() {
              var J;
              return typeof b.default.WebStorage < "u" && ((J = b.default.WebStorage) === null || J === void 0 ? void 0 : J.localSupported);
            }, u = function() {
              var J;
              return typeof b.default.WebStorage < "u" && ((J = b.default.WebStorage) === null || J === void 0 ? void 0 : J.sessionSupported);
            }, i = P.default.Action, g = function() {
            }, O = "ably-transport-preference", v = "ably-connection-recovery";
            function S() {
              var J, V;
              return u() && ((V = (J = b.default.WebStorage) === null || J === void 0 ? void 0 : J.getSession) === null || V === void 0 ? void 0 : V.call(J, v));
            }
            function I(J) {
              var V, y;
              return u() && ((y = (V = b.default.WebStorage) === null || V === void 0 ? void 0 : V.setSession) === null || y === void 0 ? void 0 : y.call(V, v, J));
            }
            function D() {
              var J, V;
              return u() && ((V = (J = b.default.WebStorage) === null || J === void 0 ? void 0 : J.removeSession) === null || V === void 0 ? void 0 : V.call(J, v));
            }
            function T(J, V) {
              return E.arrIndexOf(b.default.Defaults.transportPreferenceOrder, J.shortName) > E.arrIndexOf(b.default.Defaults.transportPreferenceOrder, V.shortName);
            }
            function U(J, V, y) {
              var x;
              if (J.channel !== V.channel || (x = J.action) !== i.PRESENCE && x !== i.MESSAGE || x !== V.action)
                return !1;
              var w = x === i.PRESENCE ? "presence" : "messages", j = J[w].concat(V[w]), z = l.default.getMessagesSize(j);
              return z > y || !E.allSame(j, "clientId") || !E.arrEvery(j, function(K) {
                return !K.id;
              }) ? !1 : (J[w] = j, !0);
            }
            function G(J) {
              try {
                return JSON.parse(J);
              } catch {
                return null;
              }
            }
            var W = (
              /** @class */
              function() {
                function J(V, y, x, w) {
                  this.options = V, this.host = y, this.mode = x, this.connectionKey = w, this.format = V.useBinaryProtocol ? E.Format.msgpack : E.Format.json;
                }
                return J.prototype.getConnectParams = function(V) {
                  var y = V ? E.copy(V) : {}, x = this.options;
                  switch (this.mode) {
                    case "upgrade":
                      y.upgrade = this.connectionKey;
                      break;
                    case "resume":
                      y.resume = this.connectionKey;
                      break;
                    case "recover": {
                      var w = G(x.recover);
                      w && (y.recover = w.connectionKey);
                      break;
                    }
                  }
                  return x.clientId !== void 0 && (y.clientId = x.clientId), x.echoMessages === !1 && (y.echo = "false"), this.format !== void 0 && (y.format = this.format), this.stream !== void 0 && (y.stream = this.stream), this.heartbeats !== void 0 && (y.heartbeats = this.heartbeats), y.v = L.default.protocolVersion, y.agent = encodeURIComponent((0, L.getAgentString)(this.options)), x.transportParams !== void 0 && E.mixin(y, x.transportParams), y;
                }, J.prototype.toString = function() {
                  var V = "[mode=" + this.mode;
                  return this.host && (V += ",host=" + this.host), this.connectionKey && (V += ",connectionKey=" + this.connectionKey), this.format && (V += ",format=" + this.format), V += "]", V;
                }, J;
              }()
            );
            f.TransportParams = W;
            var k = (
              /** @class */
              function(J) {
                o.__extends(V, J);
                function V(y, x) {
                  var w = J.call(this) || this;
                  w.disconnectedRetryCount = 0, V.initTransports(), w.realtime = y, w.options = x;
                  var j = x.timeouts, z = j.preferenceConnectTimeout + j.realtimeRequestTimeout;
                  if (w.states = {
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
                      retryDelay: z,
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
                      retryDelay: j.disconnectedRetryTimeout,
                      failState: "disconnected"
                    },
                    suspended: {
                      state: "suspended",
                      terminal: !1,
                      queueEvents: !1,
                      sendEvents: !1,
                      retryDelay: j.suspendedRetryTimeout,
                      failState: "suspended"
                    },
                    closing: {
                      state: "closing",
                      terminal: !1,
                      queueEvents: !1,
                      sendEvents: !1,
                      retryDelay: j.realtimeRequestTimeout,
                      failState: "closed"
                    },
                    closed: { state: "closed", terminal: !0, queueEvents: !1, sendEvents: !1, failState: "closed" },
                    failed: { state: "failed", terminal: !0, queueEvents: !1, sendEvents: !1, failState: "failed" }
                  }, w.state = w.states.initialized, w.errorReason = null, w.queuedMessages = new C.default(), w.msgSerial = 0, w.connectionDetails = void 0, w.connectionId = void 0, w.connectionKey = void 0, w.connectionStateTtl = j.connectionStateTtl, w.maxIdleInterval = null, w.transports = E.intersect(x.transports || L.default.defaultTransports, V.supportedTransports), w.baseTransport = E.intersect(L.default.baseTransportOrder, w.transports)[0], w.upgradeTransports = E.intersect(w.transports, L.default.upgradeTransports), w.transportPreference = null, w.httpHosts = L.default.getHosts(x), w.activeProtocol = null, w.proposedTransports = [], w.pendingTransports = [], w.host = null, w.lastAutoReconnectAttempt = null, w.lastActivity = null, w.forceFallbackHost = !1, w.connectCounter = 0, a.default.logAction(a.default.LOG_MINOR, "Realtime.ConnectionManager()", "started"), a.default.logAction(a.default.LOG_MICRO, "Realtime.ConnectionManager()", "requested transports = [" + (x.transports || L.default.defaultTransports) + "]"), a.default.logAction(a.default.LOG_MICRO, "Realtime.ConnectionManager()", "available transports = [" + w.transports + "]"), a.default.logAction(a.default.LOG_MICRO, "Realtime.ConnectionManager()", "http hosts = [" + w.httpHosts + "]"), !w.transports.length) {
                    var K = "no requested transports available";
                    throw a.default.logAction(a.default.LOG_ERROR, "realtime.ConnectionManager()", K), new Error(K);
                  }
                  var Y = b.default.Config.addEventListener;
                  return Y && (u() && typeof x.recover == "function" && Y("beforeunload", w.persistConnection.bind(w)), x.closeOnUnload === !0 && Y("beforeunload", function() {
                    a.default.logAction(a.default.LOG_MAJOR, "Realtime.ConnectionManager()", "beforeunload event has triggered the connection to close as closeOnUnload is true"), w.requestState({ state: "closing" });
                  }), Y("online", function() {
                    w.state == w.states.disconnected || w.state == w.states.suspended ? (a.default.logAction(a.default.LOG_MINOR, "ConnectionManager caught browser ‘online’ event", "reattempting connection"), w.requestState({ state: "connecting" })) : w.state == w.states.connecting && (w.pendingTransports.forEach(function(Z) {
                      Z.off();
                    }), w.disconnectAllTransports(), w.startConnect());
                  }), Y("offline", function() {
                    w.state == w.states.connected && (a.default.logAction(a.default.LOG_MINOR, "ConnectionManager caught browser ‘offline’ event", "disconnecting active transport"), w.disconnectAllTransports());
                  })), w;
                }
                return V.initTransports = function() {
                  (0, r.default)(V), E.arrForEach(b.default.Transports, function(y) {
                    y(V);
                  });
                }, V.prototype.createTransportParams = function(y, x) {
                  return new W(this.options, y, x, this.connectionKey);
                }, V.prototype.getTransportParams = function(y) {
                  var x = this, w = function(j) {
                    if (x.connectionKey) {
                      j("resume");
                      return;
                    }
                    if (typeof x.options.recover == "string") {
                      j("recover");
                      return;
                    }
                    var z = x.options.recover, K = S();
                    if (K && typeof z == "function") {
                      a.default.logAction(a.default.LOG_MINOR, "ConnectionManager.getTransportParams()", "Calling clientOptions-provided recover function with last session data"), z(K, function(Y) {
                        Y ? (x.options.recover = K.recoveryKey, j("recover")) : j("clean");
                      });
                      return;
                    }
                    j("clean");
                  };
                  w(function(j) {
                    var z = x.createTransportParams(null, j);
                    if (j === "recover") {
                      a.default.logAction(a.default.LOG_MINOR, "ConnectionManager.getTransportParams()", "Transport recovery mode = recover; recoveryKey = " + x.options.recover);
                      var K = G(x.options.recover);
                      K && (x.msgSerial = K.msgSerial);
                    } else
                      a.default.logAction(a.default.LOG_MINOR, "ConnectionManager.getTransportParams()", "Transport params = " + z.toString());
                    y(z);
                  });
                }, V.prototype.tryATransport = function(y, x, w) {
                  var j = this;
                  a.default.logAction(a.default.LOG_MICRO, "ConnectionManager.tryATransport()", "trying " + x), n.default.tryConnect(V.supportedTransports[x], this, this.realtime.auth, y, function(z, K) {
                    var Y = j.state;
                    if (Y == j.states.closing || Y == j.states.closed || Y == j.states.failed) {
                      K && (a.default.logAction(a.default.LOG_MINOR, "ConnectionManager.tryATransport()", "connection " + Y.state + " while we were attempting the transport; closing " + K), K.close()), w(!0);
                      return;
                    }
                    if (z) {
                      a.default.logAction(a.default.LOG_MINOR, "ConnectionManager.tryATransport()", "transport " + x + " " + z.event + ", err: " + z.error.toString()), c.default.isTokenErr(z.error) && !(j.errorReason && c.default.isTokenErr(j.errorReason)) ? (j.errorReason = z.error, j.realtime.auth._forceNewToken(null, null, function(Z) {
                        if (Z) {
                          j.actOnErrorFromAuthorize(Z);
                          return;
                        }
                        j.tryATransport(y, x, w);
                      })) : z.event === "failed" ? (j.notifyState({ state: "failed", error: z.error }), w(!0)) : z.event === "disconnected" && ((0, R.isRetriable)(z.error) ? w(!1) : (j.notifyState({ state: j.states.connecting.failState, error: z.error }), w(!0)));
                      return;
                    }
                    a.default.logAction(a.default.LOG_MICRO, "ConnectionManager.tryATransport()", "viable transport " + x + "; setting pending"), j.setTransportPending(K, y), w(null, K);
                  });
                }, V.prototype.setTransportPending = function(y, x) {
                  var w = this, j = x.mode;
                  a.default.logAction(a.default.LOG_MINOR, "ConnectionManager.setTransportPending()", "transport = " + y + "; mode = " + j), E.arrDeleteValue(this.proposedTransports, y), this.pendingTransports.push(y);
                  var z = b.default.Defaults.transportPreferenceOrder[b.default.Defaults.transportPreferenceOrder.length - 1];
                  y.once("connected", function(Y, Z, $) {
                    j == "upgrade" && w.activeProtocol ? y.shortName !== z && E.arrIn(w.getUpgradePossibilities(), z) && w.activeProtocol ? setTimeout(function() {
                      w.scheduleTransportActivation(Y, y, Z, $);
                    }, w.options.timeouts.parallelUpgradeDelay) : w.scheduleTransportActivation(Y, y, Z, $) : (w.activateTransport(Y, y, Z, $), b.default.Config.nextTick(function() {
                      w.connectImpl(x);
                    })), j === "recover" && w.options.recover && (w.options.recover = null, w.unpersistConnection());
                  });
                  var K = this;
                  y.on(["disconnected", "closed", "failed"], function(Y) {
                    K.deactivateTransport(y, this.event, Y);
                  }), this.emit("transport.pending", y);
                }, V.prototype.scheduleTransportActivation = function(y, x, w, j) {
                  var z = this, K = this.activeProtocol && this.activeProtocol.getTransport(), Y = function() {
                    x.disconnect(), E.arrDeleteValue(z.pendingTransports, x);
                  };
                  if (this.state !== this.states.connected && this.state !== this.states.connecting) {
                    a.default.logAction(a.default.LOG_MINOR, "ConnectionManager.scheduleTransportActivation()", "Current connection state (" + this.state.state + (this.state === this.states.synchronizing ? ", but with an upgrade already in progress" : "") + ") is not valid to upgrade in; abandoning upgrade to " + x.shortName), Y();
                    return;
                  }
                  if (K && !T(x, K)) {
                    a.default.logAction(a.default.LOG_MINOR, "ConnectionManager.scheduleTransportActivation()", "Proposed transport " + x.shortName + " is no better than current active transport " + K.shortName + " - abandoning upgrade"), Y();
                    return;
                  }
                  a.default.logAction(a.default.LOG_MINOR, "ConnectionManager.scheduleTransportActivation()", "Scheduling transport upgrade; transport = " + x);
                  var Z = null;
                  if (!x.isConnected) {
                    a.default.logAction(a.default.LOG_MINOR, "ConnectionManager.scheduleTransportActivation()", "Proposed transport " + x.shortName + "is no longer connected; abandoning upgrade"), Y();
                    return;
                  }
                  if (this.state === this.states.connected)
                    a.default.logAction(a.default.LOG_MICRO, "ConnectionManager.scheduleTransportActivation()", "Currently connected, so temporarily pausing events until the upgrade is complete"), this.state = this.states.synchronizing, Z = this.activeProtocol;
                  else if (this.state !== this.states.connecting) {
                    a.default.logAction(a.default.LOG_MINOR, "ConnectionManager.scheduleTransportActivation()", "Current connection state (" + this.state.state + (this.state === this.states.synchronizing ? ", but with an upgrade already in progress" : "") + ") is not valid to upgrade in; abandoning upgrade to " + x.shortName), Y();
                    return;
                  }
                  a.default.logAction(a.default.LOG_MINOR, "ConnectionManager.scheduleTransportActivation()", "Syncing transport; transport = " + x);
                  var $ = function() {
                    a.default.logAction(a.default.LOG_MINOR, "ConnectionManager.scheduleTransportActivation()", "Activating transport; transport = " + x), x.send(P.default.fromValues({
                      action: i.ACTIVATE
                    })), z.activateTransport(y, x, w, j), z.state === z.states.synchronizing ? (a.default.logAction(a.default.LOG_MICRO, "ConnectionManager.scheduleTransportActivation()", "Pre-upgrade protocol idle, sending queued messages on upgraded transport; transport = " + x), z.state = z.states.connected) : a.default.logAction(a.default.LOG_MINOR, "ConnectionManager.scheduleTransportActivation()", "Pre-upgrade protocol idle, but state is now " + z.state.state + ", so leaving unchanged"), z.state.sendEvents && z.sendQueuedMessages();
                  };
                  Z ? Z.onceIdle($) : $();
                }, V.prototype.activateTransport = function(y, x, w, j) {
                  var z = this;
                  a.default.logAction(a.default.LOG_MINOR, "ConnectionManager.activateTransport()", "transport = " + x), y && a.default.logAction(a.default.LOG_ERROR, "ConnectionManager.activateTransport()", "error = " + y), w && a.default.logAction(a.default.LOG_MICRO, "ConnectionManager.activateTransport()", "connectionId =  " + w), j && a.default.logAction(a.default.LOG_MICRO, "ConnectionManager.activateTransport()", "connectionDetails =  " + JSON.stringify(j)), this.persistTransportPreference(x);
                  var K = this.state, Y = this.states.connected.state;
                  if (a.default.logAction(a.default.LOG_MINOR, "ConnectionManager.activateTransport()", "current state = " + K.state), K.state == this.states.closing.state || K.state == this.states.closed.state || K.state == this.states.failed.state)
                    return a.default.logAction(a.default.LOG_MINOR, "ConnectionManager.activateTransport()", "Disconnecting transport and abandoning"), x.disconnect(), !1;
                  if (E.arrDeleteValue(this.pendingTransports, x), !x.isConnected)
                    return a.default.logAction(a.default.LOG_MINOR, "ConnectionManager.activateTransport()", "Declining to activate transport " + x + " since it appears to no longer be connected"), !1;
                  var Z = this.activeProtocol;
                  this.activeProtocol = new M.default(x), this.host = x.params.host;
                  var $ = j.connectionKey;
                  if ($ && this.connectionKey != $ && this.setConnection(w, j, !!y), this.onConnectionDetailsUpdate(j, x), b.default.Config.nextTick(function() {
                    x.on("connected", function(X, rt, nt) {
                      z.onConnectionDetailsUpdate(nt, x), z.emit("update", new h.default(Y, Y, null, X));
                    });
                  }), K.state === this.states.connected.state ? y && (this.errorReason = this.realtime.connection.errorReason = y, this.emit("update", new h.default(Y, Y, null, y))) : (this.notifyState({ state: "connected", error: y }), this.errorReason = this.realtime.connection.errorReason = y || null), this.emit("transport.active", x), Z)
                    if (Z.messageQueue.count() > 0 && a.default.logAction(a.default.LOG_ERROR, "ConnectionManager.activateTransport()", "Previous active protocol (for transport " + Z.transport.shortName + ", new one is " + x.shortName + ") finishing with " + Z.messageQueue.count() + " messages still pending"), Z.transport === x) {
                      var et = "Assumption violated: activating a transport that was also the transport for the previous active protocol; transport = " + x.shortName + "; stack = " + new Error().stack;
                      a.default.logAction(a.default.LOG_ERROR, "ConnectionManager.activateTransport()", et);
                    } else
                      Z.finish();
                  return E.safeArrForEach(this.pendingTransports, function(X) {
                    if (X === x) {
                      var rt = "Assumption violated: activating a transport that is still marked as a pending transport; transport = " + x.shortName + "; stack = " + new Error().stack;
                      a.default.logAction(a.default.LOG_ERROR, "ConnectionManager.activateTransport()", rt), E.arrDeleteValue(z.pendingTransports, x);
                    } else
                      X.disconnect();
                  }), E.safeArrForEach(this.proposedTransports, function(X) {
                    X === x ? (a.default.logAction(a.default.LOG_ERROR, "ConnectionManager.activateTransport()", "Assumption violated: activating a transport that is still marked as a proposed transport; transport = " + x.shortName + "; stack = " + new Error().stack), E.arrDeleteValue(z.proposedTransports, x)) : X.dispose();
                  }), !0;
                }, V.prototype.deactivateTransport = function(y, x, w) {
                  var j = this.activeProtocol, z = j && j.getTransport() === y, K = E.arrDeleteValue(this.pendingTransports, y), Y = E.arrDeleteValue(this.proposedTransports, y), Z = this.noTransportsScheduledForActivation();
                  if (a.default.logAction(a.default.LOG_MINOR, "ConnectionManager.deactivateTransport()", "transport = " + y), a.default.logAction(a.default.LOG_MINOR, "ConnectionManager.deactivateTransport()", "state = " + x + (z ? "; was active" : K ? "; was pending" : Y ? "; was proposed" : "") + (Z ? "" : "; another transport is scheduled for activation")), w && w.message && a.default.logAction(a.default.LOG_MICRO, "ConnectionManager.deactivateTransport()", "reason =  " + w.message), z && (a.default.logAction(a.default.LOG_MICRO, "ConnectionManager.deactivateTransport()", "Getting, clearing, and requeuing " + this.activeProtocol.messageQueue.count() + " pending messages"), this.queuePendingMessages(j.getPendingMessages()), b.default.Config.nextTick(function() {
                    j.clearPendingMessages();
                  }), this.activeProtocol = this.host = null), this.emit("transport.inactive", y), z && Z || z && x === "failed" || x === "closed" || j === null && K && this.pendingTransports.length === 0) {
                    if (x === "disconnected" && w && w.statusCode > 500 && this.httpHosts.length > 1) {
                      this.unpersistTransportPreference(), this.forceFallbackHost = !0, this.notifyState({ state: x, error: w, retryImmediately: !0 });
                      return;
                    }
                    var $ = x === "failed" && c.default.isTokenErr(w) ? "disconnected" : x;
                    this.notifyState({ state: $, error: w });
                    return;
                  }
                  z && x === "disconnected" && this.state !== this.states.synchronizing && (a.default.logAction(a.default.LOG_MICRO, "ConnectionManager.deactivateTransport()", "wasActive but another transport is connected and scheduled for activation, so going into the connecting state until it activates"), this.startSuspendTimer(), this.startTransitionTimer(this.states.connecting), this.notifyState({ state: "connecting", error: w }));
                }, V.prototype.noTransportsScheduledForActivation = function() {
                  return E.isEmpty(this.pendingTransports) || this.pendingTransports.every(function(y) {
                    return !y.isConnected;
                  });
                }, V.prototype.setConnection = function(y, x, w) {
                  var j = this.connectionId, z = j && j !== y, K = !j && w;
                  (z || K) && (a.default.logAction(a.default.LOG_MINOR, "ConnectionManager.setConnection()", "Resetting msgSerial"), this.msgSerial = 0, this.queuedMessages.resetSendAttempted()), this.connectionId !== y && a.default.logAction(a.default.LOG_MINOR, "ConnectionManager.setConnection()", "New connectionId; reattaching any attached channels"), this.realtime.connection.id = this.connectionId = y, this.realtime.connection.key = this.connectionKey = x.connectionKey;
                }, V.prototype.clearConnection = function() {
                  this.realtime.connection.id = this.connectionId = void 0, this.realtime.connection.key = this.connectionKey = void 0, this.msgSerial = 0, this.unpersistConnection();
                }, V.prototype.createRecoveryKey = function() {
                  return this.connectionKey ? JSON.stringify({
                    connectionKey: this.connectionKey,
                    msgSerial: this.msgSerial,
                    channelSerials: this.realtime.channels.channelSerials()
                  }) : null;
                }, V.prototype.checkConnectionStateFreshness = function() {
                  if (!(!this.lastActivity || !this.connectionId)) {
                    var y = E.now() - this.lastActivity;
                    y > this.connectionStateTtl + this.maxIdleInterval && (a.default.logAction(a.default.LOG_MINOR, "ConnectionManager.checkConnectionStateFreshness()", "Last known activity from realtime was " + y + "ms ago; discarding connection state"), this.clearConnection(), this.states.connecting.failState = "suspended");
                  }
                }, V.prototype.persistConnection = function() {
                  if (u()) {
                    var y = this.createRecoveryKey();
                    y && I({
                      recoveryKey: y,
                      disconnectedAt: E.now(),
                      location: d.location,
                      clientId: this.realtime.auth.clientId
                    });
                  }
                }, V.prototype.unpersistConnection = function() {
                  D();
                }, V.prototype.getError = function() {
                  return this.errorReason || this.getStateError();
                }, V.prototype.getStateError = function() {
                  var y, x;
                  return (x = (y = R.default)[this.state.state]) === null || x === void 0 ? void 0 : x.call(y);
                }, V.prototype.activeState = function() {
                  return this.state.queueEvents || this.state.sendEvents;
                }, V.prototype.enactStateChange = function(y) {
                  var x = y.current === "failed" ? a.default.LOG_ERROR : a.default.LOG_MAJOR;
                  a.default.logAction(x, "Connection state", y.current + (y.reason ? "; reason: " + y.reason : "")), a.default.logAction(a.default.LOG_MINOR, "ConnectionManager.enactStateChange", "setting new state: " + y.current + "; reason = " + (y.reason && y.reason.message));
                  var w = this.state = this.states[y.current];
                  y.reason && (this.errorReason = y.reason, this.realtime.connection.errorReason = y.reason), (w.terminal || w.state === "suspended") && this.clearConnection(), this.emit("connectionstate", y);
                }, V.prototype.startTransitionTimer = function(y) {
                  var x = this;
                  a.default.logAction(a.default.LOG_MINOR, "ConnectionManager.startTransitionTimer()", "transitionState: " + y.state), this.transitionTimer && (a.default.logAction(a.default.LOG_MINOR, "ConnectionManager.startTransitionTimer()", "clearing already-running timer"), clearTimeout(this.transitionTimer)), this.transitionTimer = setTimeout(function() {
                    x.transitionTimer && (x.transitionTimer = null, a.default.logAction(a.default.LOG_MINOR, "ConnectionManager " + y.state + " timer expired", "requesting new state: " + y.failState), x.notifyState({ state: y.failState }));
                  }, y.retryDelay);
                }, V.prototype.cancelTransitionTimer = function() {
                  a.default.logAction(a.default.LOG_MINOR, "ConnectionManager.cancelTransitionTimer()", ""), this.transitionTimer && (clearTimeout(this.transitionTimer), this.transitionTimer = null);
                }, V.prototype.startSuspendTimer = function() {
                  var y = this;
                  this.suspendTimer || (this.suspendTimer = setTimeout(function() {
                    y.suspendTimer && (y.suspendTimer = null, a.default.logAction(a.default.LOG_MINOR, "ConnectionManager suspend timer expired", "requesting new state: suspended"), y.states.connecting.failState = "suspended", y.notifyState({ state: "suspended" }));
                  }, this.connectionStateTtl));
                }, V.prototype.checkSuspendTimer = function(y) {
                  y !== "disconnected" && y !== "suspended" && y !== "connecting" && this.cancelSuspendTimer();
                }, V.prototype.cancelSuspendTimer = function() {
                  this.states.connecting.failState = "disconnected", this.suspendTimer && (clearTimeout(this.suspendTimer), this.suspendTimer = null);
                }, V.prototype.startRetryTimer = function(y) {
                  var x = this;
                  this.retryTimer = setTimeout(function() {
                    a.default.logAction(a.default.LOG_MINOR, "ConnectionManager retry timer expired", "retrying"), x.retryTimer = null, x.requestState({ state: "connecting" });
                  }, y);
                }, V.prototype.cancelRetryTimer = function() {
                  this.retryTimer && (clearTimeout(this.retryTimer), this.retryTimer = null);
                }, V.prototype.notifyState = function(y) {
                  var x = this, w, j, z = y.state, K = z === "disconnected" && (this.state === this.states.connected || this.state === this.states.synchronizing || y.retryImmediately || this.state === this.states.connecting && y.error && c.default.isTokenErr(y.error) && !(this.errorReason && c.default.isTokenErr(this.errorReason)));
                  if (a.default.logAction(a.default.LOG_MINOR, "ConnectionManager.notifyState()", "new state: " + z + (K ? "; will retry connection immediately" : "")), z != this.state.state && (this.cancelTransitionTimer(), this.cancelRetryTimer(), this.checkSuspendTimer(y.state), (z === "suspended" || z === "connected") && (this.disconnectedRetryCount = 0), !this.state.terminal)) {
                    var Y = this.states[y.state], Z = Y.retryDelay;
                    Y.state === "disconnected" && (this.disconnectedRetryCount++, Z = Y.retryDelay * E.getBackoffCoefficient(this.disconnectedRetryCount) * E.getJitterCoefficient());
                    var $ = new h.default(this.state.state, Y.state, Z, y.error || ((j = (w = R.default)[Y.state]) === null || j === void 0 ? void 0 : j.call(w)));
                    if (K) {
                      var et = function() {
                        x.state === x.states.disconnected && (x.lastAutoReconnectAttempt = E.now(), x.requestState({ state: "connecting" }));
                      }, X = this.lastAutoReconnectAttempt && E.now() - this.lastAutoReconnectAttempt + 1;
                      X && X < 1e3 ? (a.default.logAction(a.default.LOG_MICRO, "ConnectionManager.notifyState()", "Last reconnect attempt was only " + X + "ms ago, waiting another " + (1e3 - X) + "ms before trying again"), setTimeout(et, 1e3 - X)) : b.default.Config.nextTick(et);
                    } else
                      (z === "disconnected" || z === "suspended") && this.startRetryTimer(Z);
                    (z === "disconnected" && !K || z === "suspended" || Y.terminal) && b.default.Config.nextTick(function() {
                      x.disconnectAllTransports();
                    }), z == "connected" && !this.activeProtocol && a.default.logAction(a.default.LOG_ERROR, "ConnectionManager.notifyState()", "Broken invariant: attempted to go into connected state, but there is no active protocol"), this.enactStateChange($), this.state.sendEvents ? this.sendQueuedMessages() : this.state.queueEvents || (this.realtime.channels.propogateConnectionInterruption(z, $.reason), this.failQueuedMessages($.reason));
                  }
                }, V.prototype.requestState = function(y) {
                  var x = this, w, j, z = y.state;
                  if (a.default.logAction(a.default.LOG_MINOR, "ConnectionManager.requestState()", "requested state: " + z + "; current state: " + this.state.state), z != this.state.state && (this.cancelTransitionTimer(), this.cancelRetryTimer(), this.checkSuspendTimer(z), !(z == "connecting" && this.state.state == "connected") && !(z == "closing" && this.state.state == "closed"))) {
                    var K = this.states[z], Y = new h.default(this.state.state, K.state, null, y.error || ((j = (w = R.default)[K.state]) === null || j === void 0 ? void 0 : j.call(w)));
                    this.enactStateChange(Y), z == "connecting" && b.default.Config.nextTick(function() {
                      x.startConnect();
                    }), z == "closing" && this.closeImpl();
                  }
                }, V.prototype.startConnect = function() {
                  var y = this;
                  if (this.state !== this.states.connecting) {
                    a.default.logAction(a.default.LOG_MINOR, "ConnectionManager.startConnect()", "Must be in connecting state to connect, but was " + this.state.state);
                    return;
                  }
                  var x = this.realtime.auth, w = ++this.connectCounter, j = function() {
                    y.checkConnectionStateFreshness(), y.getTransportParams(function(K) {
                      if (K.mode === "recover" && K.options.recover) {
                        var Y = G(K.options.recover);
                        Y && y.realtime.channels.recoverChannels(Y.channelSerials);
                      }
                      w === y.connectCounter && y.connectImpl(K, w);
                    });
                  };
                  if (a.default.logAction(a.default.LOG_MINOR, "ConnectionManager.startConnect()", "starting connection"), this.startSuspendTimer(), this.startTransitionTimer(this.states.connecting), x.method === "basic")
                    j();
                  else {
                    var z = function(K) {
                      w === y.connectCounter && (K ? y.actOnErrorFromAuthorize(K) : j());
                    };
                    this.errorReason && c.default.isTokenErr(this.errorReason) ? x._forceNewToken(null, null, z) : x._ensureValidAuthCredentials(!1, z);
                  }
                }, V.prototype.connectImpl = function(y, x) {
                  var w = this.state.state;
                  w !== this.states.connecting.state && w !== this.states.connected.state ? a.default.logAction(a.default.LOG_MINOR, "ConnectionManager.connectImpl()", "Must be in connecting state to connect (or connected to upgrade), but was " + w) : this.pendingTransports.length ? a.default.logAction(a.default.LOG_MINOR, "ConnectionManager.connectImpl()", "Transports " + this.pendingTransports[0].toString() + " currently pending; taking no action") : w == this.states.connected.state ? this.upgradeIfNeeded(y) : this.transports.length > 1 && this.getTransportPreference() ? this.connectPreference(y, x) : this.connectBase(y, x);
                }, V.prototype.connectPreference = function(y, x) {
                  var w = this, j = this.getTransportPreference(), z = !1;
                  E.arrIn(this.transports, j) || (this.unpersistTransportPreference(), this.connectImpl(y, x)), a.default.logAction(a.default.LOG_MINOR, "ConnectionManager.connectPreference()", "Trying to connect with stored transport preference " + j);
                  var K = setTimeout(function() {
                    z = !0, w.state.state !== w.states.connected.state && (a.default.logAction(a.default.LOG_MINOR, "ConnectionManager.connectPreference()", "Shortcircuit connection attempt with " + j + " failed; clearing preference and trying from scratch"), w.disconnectAllTransports(), w.unpersistTransportPreference()), w.connectImpl(y, x);
                  }, this.options.timeouts.preferenceConnectTimeout);
                  y.host = this.httpHosts[0], this.tryATransport(y, j, function(Y, Z) {
                    clearTimeout(K), z && Z ? (Z.off(), Z.disconnect(), E.arrDeleteValue(w.pendingTransports, Z)) : !Z && !Y && (w.unpersistTransportPreference(), w.connectImpl(y, x));
                  });
                }, V.prototype.connectBase = function(y, x) {
                  var w = this, j = function($) {
                    w.notifyState({ state: w.states.connecting.failState, error: $ });
                  }, z = this.httpHosts.slice(), K = function($, et) {
                    x === w.connectCounter && !et && !$ && Z();
                  };
                  a.default.logAction(a.default.LOG_MINOR, "ConnectionManager.connectBase()", "Trying to connect with base transport " + this.baseTransport);
                  var Y = z.shift();
                  if (!Y) {
                    j(new A.default("Unable to connect (no available host)", 80003, 404));
                    return;
                  }
                  y.host = Y;
                  var Z = function() {
                    if (!z.length) {
                      j(new A.default("Unable to connect (and no more fallback hosts to try)", 80003, 404));
                      return;
                    }
                    if (!w.realtime.http.checkConnectivity) {
                      j(new A.PartialErrorInfo("Internal error: Http.checkConnectivity not set", null, 500));
                      return;
                    }
                    w.realtime.http.checkConnectivity(function($, et) {
                      if (x === w.connectCounter) {
                        if ($) {
                          j($);
                          return;
                        }
                        if (!et) {
                          j(new A.default("Unable to connect (network unreachable)", 80003, 404));
                          return;
                        }
                        y.host = E.arrPopRandomElement(z), w.tryATransport(y, w.baseTransport, K);
                      }
                    });
                  };
                  if (this.forceFallbackHost && z.length) {
                    this.forceFallbackHost = !1, Z();
                    return;
                  }
                  this.tryATransport(y, this.baseTransport, K);
                }, V.prototype.getUpgradePossibilities = function() {
                  var y = this.activeProtocol.getTransport().shortName, x = E.arrIndexOf(this.upgradeTransports, y);
                  return this.upgradeTransports.slice(x + 1);
                }, V.prototype.upgradeIfNeeded = function(y) {
                  var x = this, w = this.getUpgradePossibilities();
                  a.default.logAction(a.default.LOG_MINOR, "ConnectionManager.upgradeIfNeeded()", "upgrade possibilities: " + b.default.Config.inspect(w)), w.length && E.arrForEach(w, function(j) {
                    var z = x.createTransportParams(y.host, "upgrade");
                    x.tryATransport(z, j, g);
                  });
                }, V.prototype.closeImpl = function() {
                  a.default.logAction(a.default.LOG_MINOR, "ConnectionManager.closeImpl()", "closing connection"), this.cancelSuspendTimer(), this.startTransitionTimer(this.states.closing), E.safeArrForEach(this.pendingTransports, function(y) {
                    a.default.logAction(a.default.LOG_MICRO, "ConnectionManager.closeImpl()", "Closing pending transport: " + y), y && y.close();
                  }), E.safeArrForEach(this.proposedTransports, function(y) {
                    a.default.logAction(a.default.LOG_MICRO, "ConnectionManager.closeImpl()", "Disposing of proposed transport: " + y), y && y.dispose();
                  }), this.activeProtocol && (a.default.logAction(a.default.LOG_MICRO, "ConnectionManager.closeImpl()", "Closing active transport: " + this.activeProtocol.getTransport()), this.activeProtocol.getTransport().close()), this.notifyState({ state: "closed" });
                }, V.prototype.onAuthUpdated = function(y, x) {
                  var w = this, j;
                  switch (this.state.state) {
                    case "connected": {
                      if (a.default.logAction(a.default.LOG_MICRO, "ConnectionManager.onAuthUpdated()", "Sending AUTH message on active transport"), (this.pendingTransports.length || this.proposedTransports.length) && this.state !== this.states.synchronizing) {
                        this.disconnectAllTransports(
                          /* exceptActive: */
                          !0
                        );
                        var z = this.activeProtocol.getTransport().params;
                        b.default.Config.nextTick(function() {
                          w.state.state === "connected" && w.upgradeIfNeeded(z);
                        });
                      }
                      var K = (j = this.activeProtocol) === null || j === void 0 ? void 0 : j.getTransport();
                      K && K.onAuthUpdated && K.onAuthUpdated(y);
                      var Y = P.default.fromValues({
                        action: i.AUTH,
                        auth: {
                          accessToken: y.token
                        }
                      });
                      this.send(Y);
                      var Z = function() {
                        w.off($), x(null, y);
                      }, $ = function(X) {
                        X.current === "failed" && (w.off(Z), w.off($), x(X.reason || w.getStateError()));
                      };
                      this.once("connectiondetails", Z), this.on("connectionstate", $);
                      break;
                    }
                    case "connecting":
                      a.default.logAction(a.default.LOG_MICRO, "ConnectionManager.onAuthUpdated()", "Aborting current connection attempts in order to start again with the new auth details"), this.disconnectAllTransports();
                    default: {
                      a.default.logAction(a.default.LOG_MICRO, "ConnectionManager.onAuthUpdated()", "Connection state is " + this.state.state + "; waiting until either connected or failed");
                      var et = function(X) {
                        switch (X.current) {
                          case "connected":
                            w.off(et), x(null, y);
                            break;
                          case "failed":
                          case "closed":
                          case "suspended":
                            w.off(et), x(X.reason || w.getStateError());
                            break;
                        }
                      };
                      this.on("connectionstate", et), this.state.state === "connecting" ? this.startConnect() : this.requestState({ state: "connecting" });
                    }
                  }
                }, V.prototype.disconnectAllTransports = function(y) {
                  a.default.logAction(a.default.LOG_MINOR, "ConnectionManager.disconnectAllTransports()", "Disconnecting all transports" + (y ? " except the active transport" : "")), this.connectCounter++, E.safeArrForEach(this.pendingTransports, function(x) {
                    a.default.logAction(a.default.LOG_MICRO, "ConnectionManager.disconnectAllTransports()", "Disconnecting pending transport: " + x), x && x.disconnect();
                  }), this.pendingTransports = [], E.safeArrForEach(this.proposedTransports, function(x) {
                    a.default.logAction(a.default.LOG_MICRO, "ConnectionManager.disconnectAllTransports()", "Disposing of proposed transport: " + x), x && x.dispose();
                  }), this.proposedTransports = [], this.activeProtocol && !y && (a.default.logAction(a.default.LOG_MICRO, "ConnectionManager.disconnectAllTransports()", "Disconnecting active transport: " + this.activeProtocol.getTransport()), this.activeProtocol.getTransport().disconnect());
                }, V.prototype.send = function(y, x, w) {
                  w = w || g;
                  var j = this.state;
                  if (j.sendEvents) {
                    a.default.logAction(a.default.LOG_MICRO, "ConnectionManager.send()", "sending event"), this.sendImpl(new M.PendingMessage(y, w));
                    return;
                  }
                  var z = x && j.queueEvents || j.forceQueueEvents;
                  if (!z) {
                    var K = "rejecting event, queueEvent was " + x + ", state was " + j.state;
                    a.default.logAction(a.default.LOG_MICRO, "ConnectionManager.send()", K), w(this.errorReason || new A.default(K, 9e4, 400));
                    return;
                  }
                  a.default.shouldLog(a.default.LOG_MICRO) && a.default.logAction(a.default.LOG_MICRO, "ConnectionManager.send()", "queueing msg; " + P.default.stringify(y)), this.queue(y, w);
                }, V.prototype.sendImpl = function(y) {
                  var x = y.message;
                  y.ackRequired && !y.sendAttempted && (x.msgSerial = this.msgSerial++);
                  try {
                    this.activeProtocol.send(y);
                  } catch (w) {
                    a.default.logAction(a.default.LOG_ERROR, "ConnectionManager.sendImpl()", "Unexpected exception in transport.send(): " + w.stack);
                  }
                }, V.prototype.queue = function(y, x) {
                  a.default.logAction(a.default.LOG_MICRO, "ConnectionManager.queue()", "queueing event");
                  var w = this.queuedMessages.last(), j = this.options.maxMessageSize;
                  w && !w.sendAttempted && U(w.message, y, j) ? (w.merged || (w.callback = p.default.create([w.callback]), w.merged = !0), w.callback.push(x)) : this.queuedMessages.push(new M.PendingMessage(y, x));
                }, V.prototype.sendQueuedMessages = function() {
                  a.default.logAction(a.default.LOG_MICRO, "ConnectionManager.sendQueuedMessages()", "sending " + this.queuedMessages.count() + " queued messages");
                  for (var y; y = this.queuedMessages.shift(); )
                    this.sendImpl(y);
                }, V.prototype.queuePendingMessages = function(y) {
                  y && y.length && (a.default.logAction(a.default.LOG_MICRO, "ConnectionManager.queuePendingMessages()", "queueing " + y.length + " pending messages"), this.queuedMessages.prepend(y));
                }, V.prototype.failQueuedMessages = function(y) {
                  var x = this.queuedMessages.count();
                  x > 0 && (a.default.logAction(a.default.LOG_ERROR, "ConnectionManager.failQueuedMessages()", "failing " + x + " queued messages, err = " + E.inspectError(y)), this.queuedMessages.completeAllMessages(y));
                }, V.prototype.onChannelMessage = function(y, x) {
                  var w = this.activeProtocol && x === this.activeProtocol.getTransport(), j = E.arrIn(this.pendingTransports, x) && this.state == this.states.synchronizing;
                  w || j ? this.realtime.channels.onChannelMessage(y) : E.arrIndexOf([i.ACK, i.NACK, i.ERROR], y.action) > -1 ? this.realtime.channels.onChannelMessage(y) : a.default.logAction(a.default.LOG_MICRO, "ConnectionManager.onChannelMessage()", "received message " + JSON.stringify(y) + "on defunct transport; discarding");
                }, V.prototype.ping = function(y, x) {
                  var w = this;
                  if (y) {
                    a.default.logAction(a.default.LOG_MINOR, "ConnectionManager.ping()", "transport = " + y);
                    var j = function() {
                      y.off("heartbeat", Y), x(new A.default("Timeout waiting for heartbeat response", 5e4, 500));
                    }, z = E.now(), K = E.cheapRandStr(), Y = function(rt) {
                      if (rt === K) {
                        y.off("heartbeat", Y), clearTimeout(Z);
                        var nt = E.now() - z;
                        x(null, nt);
                      }
                    }, Z = setTimeout(j, this.options.timeouts.realtimeRequestTimeout);
                    y.on("heartbeat", Y), y.ping(K);
                    return;
                  }
                  if (this.state.state !== "connected") {
                    x(new A.default("Unable to ping service; not connected", 4e4, 400));
                    return;
                  }
                  var $ = !1, et = function(rt, nt) {
                    w.off("transport.active", X), $ || ($ = !0, x(rt, nt));
                  }, X = function() {
                    $ || ($ = !0, b.default.Config.nextTick(function() {
                      w.ping(null, x);
                    }));
                  };
                  this.on("transport.active", X), this.ping(this.activeProtocol.getTransport(), et);
                }, V.prototype.abort = function(y) {
                  this.activeProtocol.getTransport().fail(y);
                }, V.prototype.registerProposedTransport = function(y) {
                  this.proposedTransports.push(y);
                }, V.prototype.getTransportPreference = function() {
                  var y, x;
                  return this.transportPreference || e() && ((x = (y = b.default.WebStorage) === null || y === void 0 ? void 0 : y.get) === null || x === void 0 ? void 0 : x.call(y, O));
                }, V.prototype.persistTransportPreference = function(y) {
                  var x, w;
                  E.arrIn(L.default.upgradeTransports, y.shortName) && (this.transportPreference = y.shortName, e() && ((w = (x = b.default.WebStorage) === null || x === void 0 ? void 0 : x.set) === null || w === void 0 || w.call(x, O, y.shortName)));
                }, V.prototype.unpersistTransportPreference = function() {
                  var y, x;
                  this.transportPreference = null, e() && ((x = (y = b.default.WebStorage) === null || y === void 0 ? void 0 : y.remove) === null || x === void 0 || x.call(y, O));
                }, V.prototype.actOnErrorFromAuthorize = function(y) {
                  if (y.code === 40171)
                    this.notifyState({ state: "failed", error: y });
                  else if (y.code === 40102)
                    this.notifyState({ state: "failed", error: y });
                  else if (y.statusCode === t.default.Forbidden) {
                    var x = "Client configured authentication provider returned 403; failing the connection";
                    a.default.logAction(a.default.LOG_ERROR, "ConnectionManager.actOnErrorFromAuthorize()", x), this.notifyState({ state: "failed", error: new A.default(x, 80019, 403, y) });
                  } else {
                    var x = "Client configured authentication provider request failed";
                    a.default.logAction(a.default.LOG_MINOR, "ConnectionManager.actOnErrorFromAuthorize", x), this.notifyState({ state: this.state.failState, error: new A.default(x, 80019, 401, y) });
                  }
                }, V.prototype.onConnectionDetailsUpdate = function(y, x) {
                  if (y) {
                    this.connectionDetails = y, y.maxMessageSize && (this.options.maxMessageSize = y.maxMessageSize);
                    var w = y.clientId;
                    if (w) {
                      var j = this.realtime.auth._uncheckedSetClientId(w);
                      if (j) {
                        a.default.logAction(a.default.LOG_ERROR, "ConnectionManager.onConnectionDetailsUpdate()", j.message), x.fail(j);
                        return;
                      }
                    }
                    var z = y.connectionStateTtl;
                    z && (this.connectionStateTtl = z), this.maxIdleInterval = y.maxIdleInterval, this.emit("connectiondetails", y);
                  }
                }, V.supportedTransports = {}, V;
              }(m.default)
            );
            f.default = k;
          }).call(this, s(13));
        },
        /* 35 */
        /***/
        function(N, f, s) {
          Object.defineProperty(f, "__esModule", { value: !0 });
          var d = s(0), o = d.__importDefault(s(7)), P = d.__importDefault(s(2)), E = (
            /** @class */
            function(M) {
              d.__extends(L, M);
              function L() {
                var b = M.call(this) || this;
                return b.messages = [], b;
              }
              return L.prototype.count = function() {
                return this.messages.length;
              }, L.prototype.push = function(b) {
                this.messages.push(b);
              }, L.prototype.shift = function() {
                return this.messages.shift();
              }, L.prototype.last = function() {
                return this.messages[this.messages.length - 1];
              }, L.prototype.copyAll = function() {
                return this.messages.slice();
              }, L.prototype.append = function(b) {
                this.messages.push.apply(this.messages, b);
              }, L.prototype.prepend = function(b) {
                this.messages.unshift.apply(this.messages, b);
              }, L.prototype.completeMessages = function(b, m, C) {
                P.default.logAction(P.default.LOG_MICRO, "MessageQueue.completeMessages()", "serial = " + b + "; count = " + m), C = C || null;
                var a = this.messages;
                if (a.length === 0)
                  throw new Error("MessageQueue.completeMessages(): completeMessages called on any empty MessageQueue");
                var h = a[0];
                if (h) {
                  var R = h.message.msgSerial, A = b + m;
                  if (A > R)
                    for (var c = a.splice(0, A - R), l = 0, p = c; l < p.length; l++) {
                      var r = p[l];
                      r.callback(C);
                    }
                  a.length == 0 && this.emit("idle");
                }
              }, L.prototype.completeAllMessages = function(b) {
                this.completeMessages(0, Number.MAX_SAFE_INTEGER || Number.MAX_VALUE, b);
              }, L.prototype.resetSendAttempted = function() {
                for (var b = 0, m = this.messages; b < m.length; b++) {
                  var C = m[b];
                  C.sendAttempted = !1;
                }
              }, L.prototype.clear = function() {
                P.default.logAction(P.default.LOG_MICRO, "MessageQueue.clear()", "clearing " + this.messages.length + " messages"), this.messages = [], this.emit("idle");
              }, L;
            }(o.default)
          );
          f.default = E;
        },
        /* 36 */
        /***/
        function(N, f, s) {
          Object.defineProperty(f, "__esModule", { value: !0 });
          var d = (
            /** @class */
            function() {
              function o(P, E, M, L) {
                this.previous = P, this.current = E, M && (this.retryIn = M), L && (this.reason = L);
              }
              return o;
            }()
          );
          f.default = d;
        },
        /* 37 */
        /***/
        function(N, f, s) {
          Object.defineProperty(f, "__esModule", { value: !0 }), f.isSuccessCode = void 0;
          var d;
          (function(P) {
            P[P.Success = 200] = "Success", P[P.NoContent = 204] = "NoContent", P[P.BadRequest = 400] = "BadRequest", P[P.Unauthorized = 401] = "Unauthorized", P[P.Forbidden = 403] = "Forbidden", P[P.RequestTimeout = 408] = "RequestTimeout", P[P.InternalServerError = 500] = "InternalServerError";
          })(d || (d = {}));
          function o(P) {
            return P >= d.Success && P < d.BadRequest;
          }
          f.isSuccessCode = o, f.default = d;
        },
        /* 38 */
        /***/
        function(N, f, s) {
          Object.defineProperty(f, "__esModule", { value: !0 });
          var d = s(0), o = d.__importDefault(s(10)), P = d.__importDefault(s(7)), E = d.__importStar(s(1)), M = d.__importDefault(s(32)), L = d.__importDefault(s(2)), b = d.__importDefault(s(54)), m = d.__importDefault(s(9)), C = d.__importDefault(s(39)), a = d.__importStar(s(4)), h = d.__importDefault(s(14)), R = d.__importDefault(s(19)), A = o.default.Action, c = function() {
          };
          function l(r) {
            if (r && "params" in r && !E.isObject(r.params))
              return new a.default("options.params must be an object", 4e4, 400);
            if (r && "modes" in r) {
              if (!E.isArray(r.modes))
                return new a.default("options.modes must be an array", 4e4, 400);
              for (var n = 0; n < r.modes.length; n++) {
                var t = r.modes[n];
                if (!t || typeof t != "string" || !E.arrIn(o.default.channelModes, String.prototype.toUpperCase.call(t)))
                  return new a.default("Invalid channel mode: " + t, 4e4, 400);
              }
            }
          }
          var p = (
            /** @class */
            function(r) {
              d.__extends(n, r);
              function n(t, e, u) {
                var i = r.call(this, t, e, u) || this;
                return i.retryCount = 0, i.history = function(g, O) {
                  if (L.default.logAction(L.default.LOG_MICRO, "RealtimeChannel.history()", "channel = " + this.name), O === void 0)
                    if (typeof g == "function")
                      O = g, g = null;
                    else {
                      if (this.rest.options.promises)
                        return E.promisify(this, "history", arguments);
                      O = c;
                    }
                  if (g && g.untilAttach) {
                    if (this.state !== "attached") {
                      O(new a.default("option untilAttach requires the channel to be attached", 4e4, 400));
                      return;
                    }
                    if (!this.properties.attachSerial) {
                      O(new a.default("untilAttach was specified and channel is attached, but attachSerial is not defined", 4e4, 400));
                      return;
                    }
                    delete g.untilAttach, g.from_serial = this.properties.attachSerial;
                  }
                  M.default.prototype._history.call(this, g, O);
                }, i.whenState = function(g, O) {
                  return P.default.prototype.whenState.call(i, g, i.state, O);
                }, L.default.logAction(L.default.LOG_MINOR, "RealtimeChannel()", "started; name = " + e), i.realtime = t, i.presence = new b.default(i), i.connectionManager = t.connection.connectionManager, i.state = "initialized", i.subscriptions = new P.default(), i.syncChannelSerial = void 0, i.properties = {
                  attachSerial: void 0,
                  channelSerial: void 0
                }, i.setOptions(u), i.errorReason = null, i._requestedFlags = null, i._mode = null, i._attachResume = !1, i._decodingContext = {
                  channelOptions: i.channelOptions,
                  plugins: t.options.plugins || {},
                  baseEncodedPreviousPayload: void 0
                }, i._lastPayload = {
                  messageId: null,
                  protocolMessageChannelSerial: null,
                  decodeFailureRecoveryInProgress: null
                }, i._allChannelChanges = new P.default(), i;
              }
              return n.prototype.invalidStateError = function() {
                return new a.default("Channel operation failed as channel state is " + this.state, 90001, 400, this.errorReason || void 0);
              }, n.processListenerArgs = function(t) {
                return t = Array.prototype.slice.call(t), typeof t[0] == "function" && t.unshift(null), t[t.length - 1] == null && t.pop(), t;
              }, n.prototype.setOptions = function(t, e) {
                if (!e && this.rest.options.promises)
                  return E.promisify(this, "setOptions", arguments);
                var u = e || function(g) {
                  g && L.default.logAction(L.default.LOG_ERROR, "RealtimeChannel.setOptions()", "Set options failed: " + g.toString());
                }, i = l(t);
                if (i) {
                  u(i);
                  return;
                }
                M.default.prototype.setOptions.call(this, t), this._decodingContext && (this._decodingContext.channelOptions = this.channelOptions), this._shouldReattachToSetOptions(t) ? (this.attachImpl(), this._allChannelChanges.once(["attached", "update", "detached", "failed"], function(g) {
                  switch (this.event) {
                    case "update":
                    case "attached":
                      u == null || u(null);
                      return;
                    default:
                      u == null || u(g.reason);
                      return;
                  }
                })) : u();
              }, n.prototype._shouldReattachToSetOptions = function(t) {
                return (this.state === "attached" || this.state === "attaching") && ((t == null ? void 0 : t.params) || (t == null ? void 0 : t.modes));
              }, n.prototype.publish = function() {
                for (var t = this, e = [], u = 0; u < arguments.length; u++)
                  e[u] = arguments[u];
                var i = e[0], g = e.length, O = e[g - 1];
                if (typeof O != "function") {
                  if (this.realtime.options.promises)
                    return E.promisify(this, "publish", arguments);
                  O = c, ++g;
                }
                if (!this.connectionManager.activeState()) {
                  O(this.connectionManager.getError());
                  return;
                }
                if (g == 2)
                  if (E.isObject(i))
                    i = [m.default.fromValues(i)];
                  else if (E.isArray(i))
                    i = m.default.fromValuesArray(i);
                  else
                    throw new a.default("The single-argument form of publish() expects a message object or an array of message objects", 40013, 400);
                else
                  i = [m.default.fromValues({ name: e[0], data: e[1] })];
                var v = this.realtime.options.maxMessageSize;
                m.default.encodeArray(i, this.channelOptions, function(S) {
                  if (S) {
                    O(S);
                    return;
                  }
                  var I = m.default.getMessagesSize(i);
                  if (I > v) {
                    O(new a.default("Maximum size of messages that can be published at once exceeded ( was " + I + " bytes; limit is " + v + " bytes)", 40009, 400));
                    return;
                  }
                  t.__publish(i, O);
                });
              }, n.prototype.__publish = function(t, e) {
                L.default.logAction(L.default.LOG_MICRO, "RealtimeChannel.publish()", "message count = " + t.length);
                var u = this.state;
                switch (u) {
                  case "failed":
                  case "suspended":
                    e(a.default.fromValues(this.invalidStateError()));
                    break;
                  default: {
                    L.default.logAction(L.default.LOG_MICRO, "RealtimeChannel.publish()", "sending message; channel state is " + u);
                    var i = new o.default();
                    i.action = A.MESSAGE, i.channel = this.name, i.messages = t, this.sendMessage(i, e);
                    break;
                  }
                }
              }, n.prototype.onEvent = function(t) {
                L.default.logAction(L.default.LOG_MICRO, "RealtimeChannel.onEvent()", "received message");
                for (var e = this.subscriptions, u = 0; u < t.length; u++) {
                  var i = t[u];
                  e.emit(i.name, i);
                }
              }, n.prototype.attach = function(t, e) {
                var u;
                if (typeof t == "function" ? (e = t, u = null) : u = t, !e) {
                  if (this.realtime.options.promises)
                    return E.promisify(this, "attach", arguments);
                  e = function(i) {
                    i && L.default.logAction(L.default.LOG_MAJOR, "RealtimeChannel.attach()", "Channel attach failed: " + i.toString());
                  };
                }
                if (u)
                  L.default.deprecated("channel.attach() with flags", "channel.setOptions() with channelOptions.params"), this._requestedFlags = u;
                else if (this.state === "attached") {
                  e(null, null);
                  return;
                }
                this._attach(!1, null, e);
              }, n.prototype._attach = function(t, e, u) {
                u || (u = function(g) {
                  g && L.default.logAction(L.default.LOG_ERROR, "RealtimeChannel._attach()", "Channel attach failed: " + g.toString());
                });
                var i = this.connectionManager;
                if (!i.activeState()) {
                  u(i.getError());
                  return;
                }
                (this.state !== "attaching" || t) && this.requestState("attaching", e), this.once(function(g) {
                  switch (this.event) {
                    case "attached":
                      u == null || u(null, g);
                      break;
                    case "detached":
                    case "suspended":
                    case "failed":
                      u == null || u(g.reason || i.getError() || new a.default("Unable to attach; reason unknown; state = " + this.event, 9e4, 500));
                      break;
                    case "detaching":
                      u == null || u(new a.default("Attach request superseded by a subsequent detach request", 9e4, 409));
                      break;
                  }
                });
              }, n.prototype.attachImpl = function() {
                L.default.logAction(L.default.LOG_MICRO, "RealtimeChannel.attachImpl()", "sending ATTACH message");
                var t = o.default.fromValues({
                  action: A.ATTACH,
                  channel: this.name,
                  params: this.channelOptions.params,
                  // RTL4c1: Includes the channel serial to resume from a previous message
                  // or attachment.
                  channelSerial: this.properties.channelSerial
                });
                this._requestedFlags ? t.encodeModesToFlags(this._requestedFlags) : this.channelOptions.modes && t.encodeModesToFlags(E.allToUpperCase(this.channelOptions.modes)), this._attachResume && t.setFlag("ATTACH_RESUME"), this._lastPayload.decodeFailureRecoveryInProgress && (t.channelSerial = this._lastPayload.protocolMessageChannelSerial), this.sendMessage(t, c);
              }, n.prototype.detach = function(t) {
                if (!t) {
                  if (this.realtime.options.promises)
                    return E.promisify(this, "detach", arguments);
                  t = c;
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
                    t(new a.default("Unable to detach; channel state = failed", 90001, 400));
                    break;
                  default:
                    this.requestState("detaching");
                  case "detaching":
                    this.once(function(u) {
                      switch (this.event) {
                        case "detached":
                          t();
                          break;
                        case "attached":
                        case "suspended":
                        case "failed":
                          t(u.reason || e.getError() || new a.default("Unable to detach; reason unknown; state = " + this.event, 9e4, 500));
                          break;
                        case "attaching":
                          t(new a.default("Detach request superseded by a subsequent attach request", 9e4, 409));
                          break;
                      }
                    });
                }
              }, n.prototype.detachImpl = function(t) {
                L.default.logAction(L.default.LOG_MICRO, "RealtimeChannel.detach()", "sending DETACH message");
                var e = o.default.fromValues({ action: A.DETACH, channel: this.name });
                this.sendMessage(e, t || c);
              }, n.prototype.subscribe = function() {
                for (var t = [], e = 0; e < arguments.length; e++)
                  t[e] = arguments[e];
                var u = n.processListenerArgs(t), i = u[0], g = u[1], O = u[2];
                if (!O && this.realtime.options.promises)
                  return E.promisify(this, "subscribe", [i, g]);
                if (this.state === "failed") {
                  O == null || O(a.default.fromValues(this.invalidStateError()));
                  return;
                }
                return i && typeof i == "object" && !Array.isArray(i) ? this._subscribeFilter(i, g) : this.subscriptions.on(i, g), this.attach(O || c);
              }, n.prototype._subscribeFilter = function(t, e) {
                var u = function(i) {
                  var g, O, v, S, I, D, T = {
                    name: i.name,
                    refTimeserial: (O = (g = i.extras) === null || g === void 0 ? void 0 : g.ref) === null || O === void 0 ? void 0 : O.timeserial,
                    refType: (S = (v = i.extras) === null || v === void 0 ? void 0 : v.ref) === null || S === void 0 ? void 0 : S.type,
                    isRef: !!(!((D = (I = i.extras) === null || I === void 0 ? void 0 : I.ref) === null || D === void 0) && D.timeserial),
                    clientId: i.clientId
                  };
                  Object.entries(t).find(function(U) {
                    var G = U[0], W = U[1];
                    return W !== void 0 ? T[G] !== W : !1;
                  }) || e(i);
                };
                this._addFilteredSubscription(t, e, u), this.subscriptions.on(u);
              }, n.prototype._addFilteredSubscription = function(t, e, u) {
                var i;
                if (this.filteredSubscriptions || (this.filteredSubscriptions = /* @__PURE__ */ new Map()), this.filteredSubscriptions.has(e)) {
                  var g = this.filteredSubscriptions.get(e);
                  g.set(t, ((i = g == null ? void 0 : g.get(t)) === null || i === void 0 ? void 0 : i.concat(u)) || [u]);
                } else
                  this.filteredSubscriptions.set(e, /* @__PURE__ */ new Map([[t, [u]]]));
              }, n.prototype._getAndDeleteFilteredSubscriptions = function(t, e) {
                var u = this;
                if (!this.filteredSubscriptions)
                  return [];
                if (!e && t)
                  return Array.from(this.filteredSubscriptions.entries()).map(function(v) {
                    var S, I = v[0], D = v[1], T = D.get(t);
                    return D.delete(t), D.size === 0 && ((S = u.filteredSubscriptions) === null || S === void 0 || S.delete(I)), T;
                  }).reduce(function(v, S) {
                    var I;
                    return S ? (I = v).concat.apply(I, S) : v;
                  }, []);
                if (!e || !this.filteredSubscriptions.has(e))
                  return [];
                var i = this.filteredSubscriptions.get(e);
                if (!t) {
                  var g = Array.from(i.values()).reduce(function(v, S) {
                    return v.concat.apply(v, S);
                  }, []);
                  return this.filteredSubscriptions.delete(e), g;
                }
                var O = i.get(t);
                return i.delete(t), O || [];
              }, n.prototype.unsubscribe = function() {
                for (var t = this, e, u = [], i = 0; i < arguments.length; i++)
                  u[i] = arguments[i];
                var g = n.processListenerArgs(u), O = g[0], v = g[1];
                if (typeof O == "object" && !v || !((e = this.filteredSubscriptions) === null || e === void 0) && e.has(v)) {
                  this._getAndDeleteFilteredSubscriptions(O, v).forEach(function(S) {
                    return t.subscriptions.off(S);
                  });
                  return;
                }
                this.subscriptions.off(O, v);
              }, n.prototype.sync = function() {
                switch (this.state) {
                  case "initialized":
                  case "detaching":
                  case "detached":
                    throw new a.PartialErrorInfo("Unable to sync to channel; not attached", 4e4);
                }
                var t = this.connectionManager;
                if (!t.activeState())
                  throw t.getError();
                var e = o.default.fromValues({ action: A.SYNC, channel: this.name });
                this.syncChannelSerial && (e.channelSerial = this.syncChannelSerial), t.send(e);
              }, n.prototype.sendMessage = function(t, e) {
                this.connectionManager.send(t, this.realtime.options.queueMessages, e);
              }, n.prototype.sendPresence = function(t, e) {
                var u = o.default.fromValues({
                  action: A.PRESENCE,
                  channel: this.name,
                  presence: E.isArray(t) ? h.default.fromValuesArray(t) : [h.default.fromValues(t)]
                });
                this.sendMessage(u, e);
              }, n.prototype.onMessage = function(t) {
                (t.action === A.ATTACHED || t.action === A.MESSAGE || t.action === A.PRESENCE) && this.setChannelSerial(t.channelSerial);
                var e, u = !1;
                switch (t.action) {
                  case A.ATTACHED: {
                    this.properties.attachSerial = t.channelSerial, this._mode = t.getMode(), this.params = t.params || {};
                    var i = t.decodeModesFromFlags();
                    this.modes = i && E.allToLowerCase(i) || void 0;
                    var g = t.hasFlag("RESUMED"), O = t.hasFlag("HAS_PRESENCE"), v = t.hasFlag("HAS_BACKLOG");
                    if (this.state === "attached") {
                      g || this.presence.onAttached(O);
                      var S = new C.default(this.state, this.state, g, v, t.error);
                      this._allChannelChanges.emit("update", S), (!g || this.channelOptions.updateOnAttached) && this.emit("update", S);
                    } else
                      this.state === "detaching" ? this.checkPendingState() : this.notifyState("attached", t.error, g, O, v);
                    break;
                  }
                  case A.DETACHED: {
                    var I = t.error ? a.default.fromValues(t.error) : new a.default("Channel detached", 90001, 404);
                    this.state === "detaching" ? this.notifyState("detached", I) : this.state === "attaching" ? this.notifyState("suspended", I) : this.requestState("attaching", I);
                    break;
                  }
                  case A.SYNC:
                    if (u = !0, e = this.syncChannelSerial = t.channelSerial, !t.presence)
                      break;
                  case A.PRESENCE: {
                    for (var D = t.presence, T = t.id, U = t.connectionId, G = t.timestamp, W = this.channelOptions, k = void 0, J = 0; J < D.length; J++)
                      try {
                        k = D[J], h.default.decode(k, W), k.connectionId || (k.connectionId = U), k.timestamp || (k.timestamp = G), k.id || (k.id = T + ":" + J);
                      } catch (z) {
                        L.default.logAction(L.default.LOG_ERROR, "RealtimeChannel.onMessage()", z.toString());
                      }
                    this.presence.setPresence(D, u, e);
                    break;
                  }
                  case A.MESSAGE: {
                    if (this.state !== "attached") {
                      L.default.logAction(L.default.LOG_MAJOR, "RealtimeChannel.onMessage()", 'Message "' + t.id + '" skipped as this channel "' + this.name + '" state is not "attached" (state is "' + this.state + '").');
                      return;
                    }
                    var V = t.messages, y = V[0], x = V[V.length - 1], T = t.id, U = t.connectionId, G = t.timestamp;
                    if (y.extras && y.extras.delta && y.extras.delta.from !== this._lastPayload.messageId) {
                      var w = 'Delta message decode failure - previous message not available for message "' + t.id + '" on this channel "' + this.name + '".';
                      L.default.logAction(L.default.LOG_ERROR, "RealtimeChannel.onMessage()", w), this._startDecodeFailureRecovery(new a.default(w, 40018, 400));
                      break;
                    }
                    for (var J = 0; J < V.length; J++) {
                      var w = V[J];
                      try {
                        m.default.decode(w, this._decodingContext);
                      } catch (et) {
                        switch (L.default.logAction(L.default.LOG_ERROR, "RealtimeChannel.onMessage()", et.toString()), et.code) {
                          case 40018:
                            this._startDecodeFailureRecovery(et);
                            return;
                          case 40019:
                          case 40021:
                            this.notifyState("failed", et);
                            return;
                        }
                      }
                      w.connectionId || (w.connectionId = U), w.timestamp || (w.timestamp = G), w.id || (w.id = T + ":" + J);
                    }
                    this._lastPayload.messageId = x.id, this._lastPayload.protocolMessageChannelSerial = t.channelSerial, this.onEvent(V);
                    break;
                  }
                  case A.ERROR: {
                    var j = t.error;
                    j && j.code == 80016 ? this.checkPendingState() : this.notifyState("failed", a.default.fromValues(j));
                    break;
                  }
                  default:
                    L.default.logAction(L.default.LOG_ERROR, "RealtimeChannel.onMessage()", "Fatal protocol error: unrecognised action (" + t.action + ")"), this.connectionManager.abort(R.default.unknownChannelErr());
                }
              }, n.prototype._startDecodeFailureRecovery = function(t) {
                var e = this;
                this._lastPayload.decodeFailureRecoveryInProgress || (L.default.logAction(L.default.LOG_MAJOR, "RealtimeChannel.onMessage()", "Starting decode failure recovery process."), this._lastPayload.decodeFailureRecoveryInProgress = !0, this._attach(!0, t, function() {
                  e._lastPayload.decodeFailureRecoveryInProgress = !1;
                }));
              }, n.prototype.onAttached = function() {
                L.default.logAction(L.default.LOG_MINOR, "RealtimeChannel.onAttached", "activating channel; name = " + this.name);
              }, n.prototype.notifyState = function(t, e, u, i, g) {
                if (L.default.logAction(L.default.LOG_MICRO, "RealtimeChannel.notifyState", "name = " + this.name + ", current state = " + this.state + ", notifying state " + t), this.clearStateTimer(), E.arrIn(["detached", "suspended", "failed"], t) && (this.properties.channelSerial = null), t !== this.state) {
                  this.presence.actOnChannelState(t, i, e), t === "suspended" && this.connectionManager.state.sendEvents ? this.startRetryTimer() : this.cancelRetryTimer(), e && (this.errorReason = e);
                  var O = new C.default(this.state, t, u, g, e), v = t === "failed" ? L.default.LOG_ERROR : L.default.LOG_MAJOR;
                  L.default.logAction(v, 'Channel state for channel "' + this.name + '"', t + (e ? "; reason: " + e : "")), t !== "attaching" && t !== "suspended" && (this.retryCount = 0), t === "attached" && this.onAttached(), t === "attached" ? this._attachResume = !0 : (t === "detaching" || t === "failed") && (this._attachResume = !1), this.state = t, this._allChannelChanges.emit(t, O), this.emit(t, O);
                }
              }, n.prototype.requestState = function(t, e) {
                L.default.logAction(L.default.LOG_MINOR, "RealtimeChannel.requestState", "name = " + this.name + ", state = " + t), this.notifyState(t, e), this.checkPendingState();
              }, n.prototype.checkPendingState = function() {
                var t = this.connectionManager.state;
                if (!(t.sendEvents || t.forceQueueEvents)) {
                  L.default.logAction(L.default.LOG_MINOR, "RealtimeChannel.checkPendingState", "sendEvents is false; state is " + this.connectionManager.state.state);
                  return;
                }
                switch (L.default.logAction(L.default.LOG_MINOR, "RealtimeChannel.checkPendingState", "name = " + this.name + ", state = " + this.state), this.state) {
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
                    var t = new a.default("Channel attach timed out", 90007, 408);
                    this.notifyState("suspended", t);
                    break;
                  }
                  case "detaching": {
                    var t = new a.default("Channel detach timed out", 90007, 408);
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
                  L.default.logAction(L.default.LOG_MINOR, "RealtimeChannel.startStateTimerIfNotRunning", "timer expired"), t.stateTimer = null, t.timeoutPendingState();
                }, this.realtime.options.timeouts.realtimeRequestTimeout));
              }, n.prototype.clearStateTimer = function() {
                var t = this.stateTimer;
                t && (clearTimeout(t), this.stateTimer = null);
              }, n.prototype.startRetryTimer = function() {
                var t = this;
                if (!this.retryTimer) {
                  this.retryCount++;
                  var e = this.realtime.options.timeouts.channelRetryTimeout * E.getJitterCoefficient() * E.getBackoffCoefficient(this.retryCount);
                  this.retryTimer = setTimeout(function() {
                    t.state === "suspended" && t.connectionManager.state.sendEvents && (t.retryTimer = null, L.default.logAction(L.default.LOG_MINOR, "RealtimeChannel retry timer expired", "attempting a new attach"), t.requestState("attaching"));
                  }, e);
                }
              }, n.prototype.cancelRetryTimer = function() {
                this.retryTimer && (clearTimeout(this.retryTimer), this.retryTimer = null);
              }, n.prototype.getReleaseErr = function() {
                var t = this.state;
                return t === "initialized" || t === "detached" || t === "failed" ? null : new a.default("Can only release a channel in a state where there is no possibility of further updates from the server being received (initialized, detached, or failed); was " + t, 90001, 400);
              }, n.prototype.setChannelSerial = function(t) {
                L.default.logAction(L.default.LOG_MICRO, "RealtimeChannel.setChannelSerial()", "Updating channel serial; serial = " + t + "; previous = " + this.properties.channelSerial), t && (this.properties.channelSerial = t);
              }, n;
            }(M.default)
          );
          f.default = p;
        },
        /* 39 */
        /***/
        function(N, f, s) {
          Object.defineProperty(f, "__esModule", { value: !0 });
          var d = (
            /** @class */
            function() {
              function o(P, E, M, L, b) {
                this.previous = P, this.current = E, E === "attached" && (this.resumed = M, this.hasBacklog = L), b && (this.reason = b);
              }
              return o;
            }()
          );
          f.default = d;
        },
        /* 40 */
        /***/
        function(N, f, s) {
          (function(d, o) {
            N.exports = o(s(6));
          })(this, function(d) {
            return function() {
              var o = d, P = o.lib, E = P.WordArray, M = P.Hasher, L = o.algo, b = [], m = L.SHA1 = M.extend({
                _doReset: function() {
                  this._hash = new E.init([
                    1732584193,
                    4023233417,
                    2562383102,
                    271733878,
                    3285377520
                  ]);
                },
                _doProcessBlock: function(C, a) {
                  for (var h = this._hash.words, R = h[0], A = h[1], c = h[2], l = h[3], p = h[4], r = 0; r < 80; r++) {
                    if (r < 16)
                      b[r] = C[a + r] | 0;
                    else {
                      var n = b[r - 3] ^ b[r - 8] ^ b[r - 14] ^ b[r - 16];
                      b[r] = n << 1 | n >>> 31;
                    }
                    var t = (R << 5 | R >>> 27) + p + b[r];
                    r < 20 ? t += (A & c | ~A & l) + 1518500249 : r < 40 ? t += (A ^ c ^ l) + 1859775393 : r < 60 ? t += (A & c | A & l | c & l) - 1894007588 : t += (A ^ c ^ l) - 899497514, p = l, l = c, c = A << 30 | A >>> 2, A = R, R = t;
                  }
                  h[0] = h[0] + R | 0, h[1] = h[1] + A | 0, h[2] = h[2] + c | 0, h[3] = h[3] + l | 0, h[4] = h[4] + p | 0;
                },
                _doFinalize: function() {
                  var C = this._data, a = C.words, h = this._nDataBytes * 8, R = C.sigBytes * 8;
                  return a[R >>> 5] |= 128 << 24 - R % 32, a[(R + 64 >>> 9 << 4) + 14] = Math.floor(h / 4294967296), a[(R + 64 >>> 9 << 4) + 15] = h, C.sigBytes = a.length * 4, this._process(), this._hash;
                },
                clone: function() {
                  var C = M.clone.call(this);
                  return C._hash = this._hash.clone(), C;
                }
              });
              o.SHA1 = M._createHelper(m), o.HmacSHA1 = M._createHmacHelper(m);
            }(), d.SHA1;
          });
        },
        /* 41 */
        /***/
        function(N, f, s) {
          Object.defineProperty(f, "__esModule", { value: !0 });
          function d(r) {
            if (r === void 0)
              return "undefined";
            var n, t;
            if (r instanceof ArrayBuffer ? (t = "ArrayBuffer", n = new DataView(r)) : r instanceof DataView && (t = "DataView", n = r), !n)
              return JSON.stringify(r);
            for (var e = [], u = 0; u < r.byteLength; u++) {
              if (u > 20) {
                e.push("...");
                break;
              }
              var i = n.getUint8(u).toString(16);
              i.length === 1 && (i = "0" + i), e.push(i);
            }
            return "<" + t + " " + e.join(" ") + ">";
          }
          function o(r, n, t) {
            for (var e = 0, u = t.length; e < u; e++) {
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
          function P(r, n, t) {
            for (var e = "", u = n, i = n + t; u < i; u++) {
              var g = r.getUint8(u);
              if (!(g & 128)) {
                e += String.fromCharCode(g);
                continue;
              }
              if ((g & 224) === 192) {
                e += String.fromCharCode((g & 15) << 6 | r.getUint8(++u) & 63);
                continue;
              }
              if ((g & 240) === 224) {
                e += String.fromCharCode((g & 15) << 12 | (r.getUint8(++u) & 63) << 6 | (r.getUint8(++u) & 63) << 0);
                continue;
              }
              if ((g & 248) === 240) {
                e += String.fromCharCode((g & 7) << 18 | (r.getUint8(++u) & 63) << 12 | (r.getUint8(++u) & 63) << 6 | (r.getUint8(++u) & 63) << 0);
                continue;
              }
              throw new Error("Invalid byte " + g.toString(16));
            }
            return e;
          }
          function E(r) {
            for (var n = 0, t = 0, e = r.length; t < e; t++) {
              var u = r.charCodeAt(t);
              if (u < 128) {
                n += 1;
                continue;
              }
              if (u < 2048) {
                n += 2;
                continue;
              }
              if (u < 65536) {
                n += 3;
                continue;
              }
              if (u < 1114112) {
                n += 4;
                continue;
              }
              throw new Error("bad codepoint " + u);
            }
            return n;
          }
          function M(r, n) {
            var t = p(r, n);
            if (t !== 0) {
              var e = new ArrayBuffer(t), u = new DataView(e);
              return l(r, u, 0, n), e;
            }
          }
          var L = 65536 * 65536, b = 1 / L;
          function m(r, n) {
            return n = n || 0, r.getInt32(n) * L + r.getUint32(n + 4);
          }
          function C(r, n) {
            return n = n || 0, r.getUint32(n) * L + r.getUint32(n + 4);
          }
          function a(r, n, t) {
            t < 9223372036854776e3 ? (r.setInt32(n, Math.floor(t * b)), r.setInt32(n + 4, t & -1)) : (r.setUint32(n, 2147483647), r.setUint32(n + 4, 2147483647));
          }
          function h(r, n, t) {
            t < 18446744073709552e3 ? (r.setUint32(n, Math.floor(t * b)), r.setInt32(n + 4, t & -1)) : (r.setUint32(n, 4294967295), r.setUint32(n + 4, 4294967295));
          }
          var R = (
            /** @class */
            function() {
              function r(n, t) {
                var e = this;
                this.map = function(u) {
                  for (var i = {}, g = 0; g < u; g++) {
                    var O = e.parse();
                    i[O] = e.parse();
                  }
                  return i;
                }, this.bin = function(u) {
                  var i = new ArrayBuffer(u);
                  return new Uint8Array(i).set(new Uint8Array(e.view.buffer, e.offset, u), 0), e.offset += u, i;
                }, this.buf = this.bin, this.str = function(u) {
                  var i = P(e.view, e.offset, u);
                  return e.offset += u, i;
                }, this.array = function(u) {
                  for (var i = new Array(u), g = 0; g < u; g++)
                    i[g] = e.parse();
                  return i;
                }, this.ext = function(u) {
                  return e.offset += u, {
                    type: e.view.getInt8(e.offset),
                    data: e.buf(u)
                  };
                }, this.parse = function() {
                  var u = e.view.getUint8(e.offset), i, g;
                  if (!(u & 128))
                    return e.offset++, u;
                  if ((u & 240) === 128)
                    return g = u & 15, e.offset++, e.map(g);
                  if ((u & 240) === 144)
                    return g = u & 15, e.offset++, e.array(g);
                  if ((u & 224) === 160)
                    return g = u & 31, e.offset++, e.str(g);
                  if ((u & 224) === 224)
                    return i = e.view.getInt8(e.offset), e.offset++, i;
                  switch (u) {
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
                      return g = e.view.getUint8(e.offset + 1), e.offset += 2, e.bin(g);
                    case 197:
                      return g = e.view.getUint16(e.offset + 1), e.offset += 3, e.bin(g);
                    case 198:
                      return g = e.view.getUint32(e.offset + 1), e.offset += 5, e.bin(g);
                    case 199:
                      return g = e.view.getUint8(e.offset + 1), e.offset += 2, e.ext(g);
                    case 200:
                      return g = e.view.getUint16(e.offset + 1), e.offset += 3, e.ext(g);
                    case 201:
                      return g = e.view.getUint32(e.offset + 1), e.offset += 5, e.ext(g);
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
                      return i = C(e.view, e.offset + 1), e.offset += 9, i;
                    case 208:
                      return i = e.view.getInt8(e.offset + 1), e.offset += 2, i;
                    case 209:
                      return i = e.view.getInt16(e.offset + 1), e.offset += 3, i;
                    case 210:
                      return i = e.view.getInt32(e.offset + 1), e.offset += 5, i;
                    case 211:
                      return i = m(e.view, e.offset + 1), e.offset += 9, i;
                    case 212:
                      return g = 1, e.offset++, e.ext(g);
                    case 213:
                      return g = 2, e.offset++, e.ext(g);
                    case 214:
                      return g = 4, e.offset++, e.ext(g);
                    case 215:
                      return g = 8, e.offset++, e.ext(g);
                    case 216:
                      return g = 16, e.offset++, e.ext(g);
                    case 217:
                      return g = e.view.getUint8(e.offset + 1), e.offset += 2, e.str(g);
                    case 218:
                      return g = e.view.getUint16(e.offset + 1), e.offset += 3, e.str(g);
                    case 219:
                      return g = e.view.getUint32(e.offset + 1), e.offset += 5, e.str(g);
                    case 220:
                      return g = e.view.getUint16(e.offset + 1), e.offset += 3, e.array(g);
                    case 221:
                      return g = e.view.getUint32(e.offset + 1), e.offset += 5, e.array(g);
                    case 222:
                      return g = e.view.getUint16(e.offset + 1), e.offset += 3, e.map(g);
                    case 223:
                      return g = e.view.getUint32(e.offset + 1), e.offset += 5, e.map(g);
                  }
                  throw new Error("Unknown type 0x" + u.toString(16));
                }, this.offset = t || 0, this.view = n;
              }
              return r;
            }()
          );
          function A(r) {
            var n = new DataView(r), t = new R(n), e = t.parse();
            if (t.offset !== r.byteLength)
              throw new Error(r.byteLength - t.offset + " trailing bytes");
            return e;
          }
          function c(r, n) {
            return Object.keys(r).filter(function(t) {
              var e = r[t], u = typeof e;
              return (!n || e != null) && (u !== "function" || !!e.toJSON);
            });
          }
          function l(r, n, t, e) {
            var u = typeof r;
            if (typeof r == "string") {
              var i = E(r);
              if (i < 32)
                return n.setUint8(t, i | 160), o(n, t + 1, r), 1 + i;
              if (i < 256)
                return n.setUint8(t, 217), n.setUint8(t + 1, i), o(n, t + 2, r), 2 + i;
              if (i < 65536)
                return n.setUint8(t, 218), n.setUint16(t + 1, i), o(n, t + 3, r), 3 + i;
              if (i < 4294967296)
                return n.setUint8(t, 219), n.setUint32(t + 1, i), o(n, t + 5, r), 5 + i;
            }
            if (ArrayBuffer.isView && ArrayBuffer.isView(r) && (r = r.buffer), r instanceof ArrayBuffer) {
              var g = r.byteLength;
              if (g < 256)
                return n.setUint8(t, 196), n.setUint8(t + 1, g), new Uint8Array(n.buffer).set(new Uint8Array(r), t + 2), 2 + g;
              if (g < 65536)
                return n.setUint8(t, 197), n.setUint16(t + 1, g), new Uint8Array(n.buffer).set(new Uint8Array(r), t + 3), 3 + g;
              if (g < 4294967296)
                return n.setUint8(t, 198), n.setUint32(t + 1, g), new Uint8Array(n.buffer).set(new Uint8Array(r), t + 5), 5 + g;
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
                  return n.setUint8(t, 207), h(n, t + 1, r), 9;
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
                return n.setUint8(t, 211), a(n, t + 1, r), 9;
              throw new Error("Number too small -0x" + (-r).toString(16).substr(1));
            }
            if (u === "undefined")
              return e ? 0 : (n.setUint8(t, 212), n.setUint8(t + 1, 0), n.setUint8(t + 2, 0), 3);
            if (r === null)
              return e ? 0 : (n.setUint8(t, 192), 1);
            if (u === "boolean")
              return n.setUint8(t, r ? 195 : 194), 1;
            if (typeof r.toJSON == "function")
              return l(r.toJSON(), n, t, e);
            if (u === "object") {
              var O, v = 0, S = void 0, I = Array.isArray(r);
              if (I ? O = r.length : (S = c(r, e), O = S.length), O < 16 ? (n.setUint8(t, O | (I ? 144 : 128)), v = 1) : O < 65536 ? (n.setUint8(t, I ? 220 : 222), n.setUint16(t + 1, O), v = 3) : O < 4294967296 && (n.setUint8(t, I ? 221 : 223), n.setUint32(t + 1, O), v = 5), I)
                for (var D = 0; D < O; D++)
                  v += l(r[D], n, t + v, e);
              else if (S)
                for (var D = 0; D < O; D++) {
                  var T = S[D];
                  v += l(T, n, t + v), v += l(r[T], n, t + v, e);
                }
              return v;
            }
            if (u === "function")
              return 0;
            throw new Error("Unknown type " + u);
          }
          function p(r, n) {
            var t = typeof r;
            if (t === "string") {
              var e = E(r);
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
              var u = r.byteLength;
              if (u < 256)
                return 2 + u;
              if (u < 65536)
                return 3 + u;
              if (u < 4294967296)
                return 5 + u;
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
              return p(r.toJSON(), n);
            if (t === "object") {
              var i, g = 0;
              if (Array.isArray(r)) {
                i = r.length;
                for (var O = 0; O < i; O++)
                  g += p(r[O], n);
              } else {
                var v = c(r, n);
                i = v.length;
                for (var O = 0; O < i; O++) {
                  var S = v[O];
                  g += p(S) + p(r[S], n);
                }
              }
              if (i < 16)
                return 1 + g;
              if (i < 65536)
                return 3 + g;
              if (i < 4294967296)
                return 5 + g;
              throw new Error("Array or object too long 0x" + i.toString(16));
            }
            if (t === "function")
              return 0;
            throw new Error("Unknown type " + t);
          }
          f.default = {
            encode: M,
            decode: A,
            inspect: d,
            utf8Write: o,
            utf8Read: P,
            utf8ByteCount: E
          };
        },
        /* 42 */
        /***/
        function(N, f, s) {
          Object.defineProperty(f, "__esModule", { value: !0 });
          var d = s(0), o = d.__importDefault(s(29)), P = d.__importDefault(s(50)), E = d.__importDefault(s(3)), M = d.__importDefault(s(55)), L = d.__importDefault(s(57)), b = d.__importDefault(s(62)), m = d.__importDefault(s(64)), C = d.__importDefault(s(68)), a = d.__importDefault(s(2)), h = s(8), R = d.__importDefault(s(65)), A = d.__importDefault(s(66)), c = d.__importDefault(s(41)), l = (0, L.default)(m.default, M.default);
          E.default.Crypto = l, E.default.BufferUtils = M.default, E.default.Http = b.default, E.default.Config = m.default, E.default.Transports = C.default, E.default.WebStorage = R.default, o.default.Crypto = l, P.default.Crypto = l, a.default.initLogHandlers(), E.default.Defaults = (0, h.getDefaults)(A.default), E.default.Config.agent && (E.default.Defaults.agent += " " + E.default.Config.agent), E.default.Config.noUpgrade && (E.default.Defaults.upgradeTransports = []), f.default = {
            Rest: o.default,
            Realtime: P.default,
            msgpack: c.default
          };
        },
        /* 43 */
        /***/
        function(N) {
          N.exports = JSON.parse('{"name":"ably","description":"Realtime client library for Ably, the realtime messaging service","version":"1.2.41","license":"Apache-2.0","bugs":{"url":"https://github.com/ably/ably-js/issues","email":"support@ably.com"},"main":"./build/ably-node.js","typings":"./ably.d.ts","react-native":{"./build/ably-node.js":"./build/ably-reactnative.js"},"browser":{"./build/ably-node.js":"./build/ably-commonjs.js"},"files":["build/**","ably.d.ts","callbacks.d.ts","callbacks.js","promises.d.ts","promises.js","resources/**"],"dependencies":{"@ably/msgpack-js":"^0.4.0","got":"^11.8.5","ws":"^5.1"},"devDependencies":{"@ably/vcdiff-decoder":"1.0.4","@types/crypto-js":"^4.0.1","@types/node":"^15.0.0","@types/request":"^2.48.7","@types/ws":"^8.2.0","@typescript-eslint/eslint-plugin":"^5.14.0","@typescript-eslint/parser":"^5.14.0","async":"ably-forks/async#requirejs","aws-sdk":"^2.1075.0","chai":"^4.2.0","copy-webpack-plugin":"^6.4.1","cors":"~2.7","crypto-js":"ably-forks/crypto-js#crypto-lite","eslint":"^7.13.0","eslint-plugin-jsdoc":"^40.0.0","eslint-plugin-security":"^1.4.0","express":"^4.17.1","glob":"~4.4","google-closure-compiler":"^20180610.0.1","grunt":"^1.4.1","grunt-bump":"^0.3.1","grunt-cli":"~1.2.0","grunt-closure-tools":"^1.0.0","grunt-contrib-concat":"~0.5","grunt-shell":"~1.1","grunt-webpack":"^4.0.2","hexy":"~0.2","kexec":"ably-forks/node-kexec#update-for-node-12","minimist":"^1.2.5","mocha":"^8.1.3","null-loader":"^4.0.1","playwright":"^1.10.0","prettier":"^2.5.1","requirejs":"~2.1","shelljs":"~0.8","source-map-explorer":"^2.5.2","ts-loader":"^8.2.0","tsconfig-paths-webpack-plugin":"^3.5.2","tslib":"^2.3.1","typedoc":"^0.23.8","typescript":"^4.6.4","webpack":"^4.44.2","webpack-cli":"^4.2.0"},"engines":{"node":">=5.10.x"},"repository":"ably/ably-js","jspm":{"registry":"npm","directories":{"lib":"build"},"main":"ably"},"scripts":{"grunt":"grunt","test":"grunt test","test:node":"grunt test:node","test:webserver":"grunt test:webserver","test:playwright":"node test/support/runPlaywrightTests.js","concat":"grunt concat","build":"grunt build:all","build:node":"grunt build:node","build:browser":"grunt build:browser","requirejs":"grunt requirejs","lint":"eslint .","lint:fix":"eslint --fix .","check-closure-compiler":"grunt check-closure-compiler","prepare":"npm run build","format":"prettier --write --ignore-path .gitignore --ignore-path .prettierignore src test ably.d.ts webpack.config.js Gruntfile.js scripts/cdn_deploy.js docs/chrome-mv3.md","format:check":"prettier --check --ignore-path .gitignore --ignore-path .prettierignore src test ably.d.ts webpack.config.js Gruntfile.js scripts/cdn_deploy.js","sourcemap":"source-map-explorer build/ably.min.js","sourcemap:noencryption":"source-map-explorer build/ably.noencryption.min.js","docs":"typedoc --entryPoints ably.d.ts --out docs/generated/default --readme docs/landing-pages/default.md && typedoc --entryPoints promises.d.ts --out docs/generated/promises --name \\"ably (Promise-based)\\" --readme docs/landing-pages/promises.md && cp docs/landing-pages/choose-library.html docs/generated/index.html"}}');
        },
        /* 44 */
        /***/
        function(N, f) {
        },
        /* 45 */
        /***/
        function(N, f, s) {
          (function(d, o) {
            N.exports = o(s(6), s(31), s(23));
          })(this, function(d) {
            return d.HmacSHA256;
          });
        },
        /* 46 */
        /***/
        function(N, f, s) {
          Object.defineProperty(f, "__esModule", { value: !0 });
          var d = s(0), o = d.__importStar(s(1)), P = d.__importDefault(s(47)), E = d.__importDefault(s(24)), M = d.__importDefault(s(18)), L = d.__importDefault(s(4)), b = d.__importDefault(s(48)), m = function() {
          }, C = (
            /** @class */
            function() {
              function A(c) {
                this.rest = c, this.admin = new a(c);
              }
              return A;
            }()
          ), a = (
            /** @class */
            function() {
              function A(c) {
                this.rest = c, this.deviceRegistrations = new h(c), this.channelSubscriptions = new R(c);
              }
              return A.prototype.publish = function(c, l, p) {
                var r = this.rest, n = r.options.useBinaryProtocol ? o.Format.msgpack : o.Format.json, t = o.defaultPostHeaders(r.options, n), e = {}, u = o.mixin({ recipient: c }, l);
                if (typeof p != "function") {
                  if (this.rest.options.promises)
                    return o.promisify(this, "publish", arguments);
                  p = m;
                }
                r.options.headers && o.mixin(t, r.options.headers), r.options.pushFullWait && o.mixin(e, { fullWait: "true" });
                var i = o.encodeBody(u, n);
                E.default.post(r, "/push/publish", i, t, e, null, function(g) {
                  return p(g);
                });
              }, A;
            }()
          ), h = (
            /** @class */
            function() {
              function A(c) {
                this.rest = c;
              }
              return A.prototype.save = function(c, l) {
                var p = this.rest, r = P.default.fromValues(c), n = p.options.useBinaryProtocol ? o.Format.msgpack : o.Format.json, t = o.defaultPostHeaders(p.options, n), e = {};
                if (typeof l != "function") {
                  if (this.rest.options.promises)
                    return o.promisify(this, "save", arguments);
                  l = m;
                }
                p.options.headers && o.mixin(t, p.options.headers), p.options.pushFullWait && o.mixin(e, { fullWait: "true" });
                var u = o.encodeBody(r, n);
                E.default.put(p, "/push/deviceRegistrations/" + encodeURIComponent(c.id), u, t, e, null, function(i, g, O, v) {
                  l(i, i ? void 0 : P.default.fromResponseBody(g, v ? void 0 : n));
                });
              }, A.prototype.get = function(c, l) {
                var p = this.rest, r = p.options.useBinaryProtocol ? o.Format.msgpack : o.Format.json, n = o.defaultGetHeaders(p.options, r), t = c.id || c;
                if (typeof l != "function") {
                  if (this.rest.options.promises)
                    return o.promisify(this, "get", arguments);
                  l = m;
                }
                if (typeof t != "string" || !t.length) {
                  l(new L.default("First argument to DeviceRegistrations#get must be a deviceId string or DeviceDetails", 4e4, 400));
                  return;
                }
                p.options.headers && o.mixin(n, p.options.headers), E.default.get(p, "/push/deviceRegistrations/" + encodeURIComponent(t), n, {}, null, function(e, u, i, g) {
                  l(e, e ? void 0 : P.default.fromResponseBody(u, g ? void 0 : r));
                });
              }, A.prototype.list = function(c, l) {
                var p = this.rest, r = p.options.useBinaryProtocol ? o.Format.msgpack : o.Format.json, n = this.rest.http.supportsLinkHeaders ? void 0 : r, t = o.defaultGetHeaders(p.options, r);
                if (typeof l != "function") {
                  if (this.rest.options.promises)
                    return o.promisify(this, "list", arguments);
                  l = m;
                }
                p.options.headers && o.mixin(t, p.options.headers), new M.default(p, "/push/deviceRegistrations", t, n, function(e, u, i) {
                  return P.default.fromResponseBody(e, i ? void 0 : r);
                }).get(c, l);
              }, A.prototype.remove = function(c, l) {
                var p = this.rest, r = p.options.useBinaryProtocol ? o.Format.msgpack : o.Format.json, n = o.defaultGetHeaders(p.options, r), t = {}, e = c.id || c;
                if (typeof l != "function") {
                  if (this.rest.options.promises)
                    return o.promisify(this, "remove", arguments);
                  l = m;
                }
                if (typeof e != "string" || !e.length) {
                  l(new L.default("First argument to DeviceRegistrations#remove must be a deviceId string or DeviceDetails", 4e4, 400));
                  return;
                }
                p.options.headers && o.mixin(n, p.options.headers), p.options.pushFullWait && o.mixin(t, { fullWait: "true" }), E.default.delete(p, "/push/deviceRegistrations/" + encodeURIComponent(e), n, t, null, function(u) {
                  return l(u);
                });
              }, A.prototype.removeWhere = function(c, l) {
                var p = this.rest, r = p.options.useBinaryProtocol ? o.Format.msgpack : o.Format.json, n = o.defaultGetHeaders(p.options, r);
                if (typeof l != "function") {
                  if (this.rest.options.promises)
                    return o.promisify(this, "removeWhere", arguments);
                  l = m;
                }
                p.options.headers && o.mixin(n, p.options.headers), p.options.pushFullWait && o.mixin(c, { fullWait: "true" }), E.default.delete(p, "/push/deviceRegistrations", n, c, null, function(t) {
                  return l(t);
                });
              }, A;
            }()
          ), R = (
            /** @class */
            function() {
              function A(c) {
                this.remove = A.prototype.removeWhere, this.rest = c;
              }
              return A.prototype.save = function(c, l) {
                var p = this.rest, r = b.default.fromValues(c), n = p.options.useBinaryProtocol ? o.Format.msgpack : o.Format.json, t = o.defaultPostHeaders(p.options, n), e = {};
                if (typeof l != "function") {
                  if (this.rest.options.promises)
                    return o.promisify(this, "save", arguments);
                  l = m;
                }
                p.options.headers && o.mixin(t, p.options.headers), p.options.pushFullWait && o.mixin(e, { fullWait: "true" });
                var u = o.encodeBody(r, n);
                E.default.post(p, "/push/channelSubscriptions", u, t, e, null, function(i, g, O, v) {
                  l(i, !i && b.default.fromResponseBody(g, v ? void 0 : n));
                });
              }, A.prototype.list = function(c, l) {
                var p = this.rest, r = p.options.useBinaryProtocol ? o.Format.msgpack : o.Format.json, n = this.rest.http.supportsLinkHeaders ? void 0 : r, t = o.defaultGetHeaders(p.options, r);
                if (typeof l != "function") {
                  if (this.rest.options.promises)
                    return o.promisify(this, "list", arguments);
                  l = m;
                }
                p.options.headers && o.mixin(t, p.options.headers), new M.default(p, "/push/channelSubscriptions", t, n, function(e, u, i) {
                  return b.default.fromResponseBody(e, i ? void 0 : r);
                }).get(c, l);
              }, A.prototype.removeWhere = function(c, l) {
                var p = this.rest, r = p.options.useBinaryProtocol ? o.Format.msgpack : o.Format.json, n = o.defaultGetHeaders(p.options, r);
                if (typeof l != "function") {
                  if (this.rest.options.promises)
                    return o.promisify(this, "removeWhere", arguments);
                  l = m;
                }
                p.options.headers && o.mixin(n, p.options.headers), p.options.pushFullWait && o.mixin(c, { fullWait: "true" }), E.default.delete(p, "/push/channelSubscriptions", n, c, null, function(t) {
                  return l(t);
                });
              }, A.prototype.listChannels = function(c, l) {
                var p = this.rest, r = p.options.useBinaryProtocol ? o.Format.msgpack : o.Format.json, n = this.rest.http.supportsLinkHeaders ? void 0 : r, t = o.defaultGetHeaders(p.options, r);
                if (typeof l != "function") {
                  if (this.rest.options.promises)
                    return o.promisify(this, "listChannels", arguments);
                  l = m;
                }
                p.options.headers && o.mixin(t, p.options.headers), p.options.pushFullWait && o.mixin(c, { fullWait: "true" }), new M.default(p, "/push/channels", t, n, function(e, u, i) {
                  for (var g = !i && r ? o.decodeBody(e, r) : e, O = 0; O < g.length; O++)
                    g[O] = String(g[O]);
                  return g;
                }).get(c, l);
              }, A;
            }()
          );
          f.default = C;
        },
        /* 47 */
        /***/
        function(N, f, s) {
          Object.defineProperty(f, "__esModule", { value: !0 });
          var d = s(0), o = d.__importStar(s(1)), P = d.__importDefault(s(4)), E;
          (function(b) {
            b.Phone = "phone", b.Tablet = "tablet", b.Desktop = "desktop", b.TV = "tv", b.Watch = "watch", b.Car = "car", b.Embedded = "embedded", b.Other = "other";
          })(E || (E = {}));
          var M;
          (function(b) {
            b.Android = "android", b.IOS = "ios", b.Browser = "browser";
          })(M || (M = {}));
          var L = (
            /** @class */
            function() {
              function b() {
              }
              return b.prototype.toJSON = function() {
                var m, C, a;
                return {
                  id: this.id,
                  deviceSecret: this.deviceSecret,
                  platform: this.platform,
                  formFactor: this.formFactor,
                  clientId: this.clientId,
                  metadata: this.metadata,
                  deviceIdentityToken: this.deviceIdentityToken,
                  push: {
                    recipient: (m = this.push) === null || m === void 0 ? void 0 : m.recipient,
                    state: (C = this.push) === null || C === void 0 ? void 0 : C.state,
                    error: (a = this.push) === null || a === void 0 ? void 0 : a.error
                  }
                };
              }, b.prototype.toString = function() {
                var m, C, a, h, R = "[DeviceDetails";
                return this.id && (R += "; id=" + this.id), this.platform && (R += "; platform=" + this.platform), this.formFactor && (R += "; formFactor=" + this.formFactor), this.clientId && (R += "; clientId=" + this.clientId), this.metadata && (R += "; metadata=" + this.metadata), this.deviceIdentityToken && (R += "; deviceIdentityToken=" + JSON.stringify(this.deviceIdentityToken)), !((m = this.push) === null || m === void 0) && m.recipient && (R += "; push.recipient=" + JSON.stringify(this.push.recipient)), !((C = this.push) === null || C === void 0) && C.state && (R += "; push.state=" + this.push.state), !((a = this.push) === null || a === void 0) && a.error && (R += "; push.error=" + JSON.stringify(this.push.error)), !((h = this.push) === null || h === void 0) && h.metadata && (R += "; push.metadata=" + this.push.metadata), R += "]", R;
              }, b.fromResponseBody = function(m, C) {
                return C && (m = o.decodeBody(m, C)), o.isArray(m) ? b.fromValuesArray(m) : b.fromValues(m);
              }, b.fromValues = function(m) {
                return m.error = m.error && P.default.fromValues(m.error), Object.assign(new b(), m);
              }, b.fromValuesArray = function(m) {
                for (var C = m.length, a = new Array(C), h = 0; h < C; h++)
                  a[h] = b.fromValues(m[h]);
                return a;
              }, b.toRequestBody = o.encodeBody, b;
            }()
          );
          f.default = L;
        },
        /* 48 */
        /***/
        function(N, f, s) {
          Object.defineProperty(f, "__esModule", { value: !0 });
          var d = s(0), o = d.__importStar(s(1)), P = (
            /** @class */
            function() {
              function E() {
              }
              return E.prototype.toJSON = function() {
                return {
                  channel: this.channel,
                  deviceId: this.deviceId,
                  clientId: this.clientId
                };
              }, E.prototype.toString = function() {
                var M = "[PushChannelSubscription";
                return this.channel && (M += "; channel=" + this.channel), this.deviceId && (M += "; deviceId=" + this.deviceId), this.clientId && (M += "; clientId=" + this.clientId), M += "]", M;
              }, E.fromResponseBody = function(M, L) {
                return L && (M = o.decodeBody(M, L)), o.isArray(M) ? E.fromValuesArray(M) : E.fromValues(M);
              }, E.fromValues = function(M) {
                return Object.assign(new E(), M);
              }, E.fromValuesArray = function(M) {
                for (var L = M.length, b = new Array(L), m = 0; m < L; m++)
                  b[m] = E.fromValues(M[m]);
                return b;
              }, E.toRequestBody = o.encodeBody, E;
            }()
          );
          f.default = P;
        },
        /* 49 */
        /***/
        function(N, f, s) {
          Object.defineProperty(f, "__esModule", { value: !0 });
          var d = s(0), o = d.__importStar(s(1)), P = (
            /** @class */
            function() {
              function p(r) {
                this.count = r && r.count || 0, this.data = r && r.data || 0, this.uncompressedData = r && r.uncompressedData || 0, this.failed = r && r.failed || 0, this.refused = r && r.refused || 0;
              }
              return p;
            }()
          ), E = (
            /** @class */
            function(p) {
              d.__extends(r, p);
              function r(n) {
                var t = p.call(this, n) || this;
                return n && n.category && (t.category = {}, o.forInOwnNonNullProperties(n.category, function(e) {
                  t.category[e] = new P(n.category[e]);
                })), t;
              }
              return r;
            }(P)
          ), M = (
            /** @class */
            function() {
              function p(r) {
                this.peak = r && r.peak || 0, this.min = r && r.min || 0, this.mean = r && r.mean || 0, this.opened = r && r.opened || 0, this.refused = r && r.refused || 0;
              }
              return p;
            }()
          ), L = (
            /** @class */
            function() {
              function p(r) {
                this.succeeded = r && r.succeeded || 0, this.failed = r && r.failed || 0, this.refused = r && r.refused || 0;
              }
              return p;
            }()
          ), b = (
            /** @class */
            function() {
              function p(r) {
                this.plain = new M(r && r.plain), this.tls = new M(r && r.tls), this.all = new M(r && r.all);
              }
              return p;
            }()
          ), m = (
            /** @class */
            function() {
              function p(r) {
                this.messages = new E(r && r.messages), this.presence = new E(r && r.presence), this.all = new E(r && r.all);
              }
              return p;
            }()
          ), C = (
            /** @class */
            function() {
              function p(r) {
                this.realtime = new m(r && r.realtime), this.rest = new m(r && r.rest), this.webhook = new m(r && r.webhook), this.sharedQueue = new m(r && r.sharedQueue), this.externalQueue = new m(r && r.externalQueue), this.httpEvent = new m(r && r.httpEvent), this.push = new m(r && r.push), this.all = new m(r && r.all);
              }
              return p;
            }()
          ), a = (
            /** @class */
            function() {
              function p(r) {
                this.all = new m(r && r.all), this.inbound = new C(r && r.inbound), this.outbound = new C(r && r.outbound);
              }
              return p;
            }()
          ), h = (
            /** @class */
            function() {
              function p(r) {
                this.all = new m(r && r.all), this.producerPaid = new a(r && r.producerPaid), this.consumerPaid = new a(r && r.consumerPaid);
              }
              return p;
            }()
          ), R = (
            /** @class */
            function() {
              function p(r) {
                this.messages = r && r.messages || 0;
                var n = r && r.notifications;
                this.notifications = {
                  invalid: n && n.invalid || 0,
                  attempted: n && n.attempted || 0,
                  successful: n && n.successful || 0,
                  failed: n && n.failed || 0
                }, this.directPublishes = r && r.directPublishes || 0;
              }
              return p;
            }()
          ), A = (
            /** @class */
            function() {
              function p(r) {
                this.succeeded = r && r.succeeded || 0, this.skipped = r && r.skipped || 0, this.failed = r && r.failed || 0;
              }
              return p;
            }()
          ), c = (
            /** @class */
            function() {
              function p(r) {
                var n = this;
                this.delta = void 0, r && r.delta && (this.delta = {}, o.forInOwnNonNullProperties(r.delta, function(t) {
                  n.delta[t] = new A(r.delta[t]);
                }));
              }
              return p;
            }()
          ), l = (
            /** @class */
            function(p) {
              d.__extends(r, p);
              function r(n) {
                var t = p.call(this, n) || this;
                return t.persisted = new m(n && n.persisted), t.connections = new b(n && n.connections), t.channels = new M(n && n.channels), t.apiRequests = new L(n && n.apiRequests), t.tokenRequests = new L(n && n.tokenRequests), t.xchgProducer = new h(n && n.xchgProducer), t.xchgConsumer = new h(n && n.xchgConsumer), t.push = new R(n && n.pushStats), t.processed = new c(n && n.processed), t.inProgress = n && n.inProgress || void 0, t.unit = n && n.unit || void 0, t.intervalId = n && n.intervalId || void 0, t;
              }
              return r.fromValues = function(n) {
                return new r(n);
              }, r;
            }(a)
          );
          f.default = l;
        },
        /* 50 */
        /***/
        function(N, f, s) {
          Object.defineProperty(f, "__esModule", { value: !0 });
          var d = s(0), o = d.__importStar(s(1)), P = d.__importDefault(s(29)), E = d.__importDefault(s(7)), M = d.__importDefault(s(2)), L = d.__importDefault(s(51)), b = d.__importDefault(s(38)), m = d.__importDefault(s(8)), C = d.__importDefault(s(4)), a = d.__importDefault(s(10)), h = d.__importDefault(s(34)), R = d.__importDefault(s(3)), A = d.__importDefault(s(9)), c = (
            /** @class */
            function(p) {
              d.__extends(r, p);
              function r(n) {
                var t = p.call(this, n) || this;
                return M.default.logAction(M.default.LOG_MINOR, "Realtime()", ""), t.connection = new L.default(t, t.options), t.channels = new l(t), n.autoConnect !== !1 && t.connect(), t;
              }
              return r.prototype.connect = function() {
                M.default.logAction(M.default.LOG_MINOR, "Realtime.connect()", ""), this.connection.connect();
              }, r.prototype.close = function() {
                M.default.logAction(M.default.LOG_MINOR, "Realtime.close()", ""), this.connection.close();
              }, r.Promise = function(n) {
                return n = m.default.objectifyOptions(n), n.promises = !0, new r(n);
              }, r.Callbacks = r, r.Utils = o, r.ConnectionManager = h.default, r.Platform = R.default, r.ProtocolMessage = a.default, r.Message = A.default, r;
            }(P.default)
          ), l = (
            /** @class */
            function(p) {
              d.__extends(r, p);
              function r(n) {
                var t = p.call(this) || this;
                return t.realtime = n, t.all = /* @__PURE__ */ Object.create(null), n.connection.connectionManager.on("transport.active", function() {
                  t.onTransportActive();
                }), t;
              }
              return r.prototype.channelSerials = function() {
                for (var n = {}, t = 0, e = o.keysArray(this.all, !0); t < e.length; t++) {
                  var u = e[t], i = this.all[u];
                  i.properties.channelSerial && (n[u] = i.properties.channelSerial);
                }
                return n;
              }, r.prototype.recoverChannels = function(n) {
                for (var t = 0, e = o.keysArray(n, !0); t < e.length; t++) {
                  var u = e[t], i = this.get(u);
                  i.properties.channelSerial = n[u];
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
                }, u = ["attaching", "attached", "detaching", "suspended"], i = e[n];
                for (var g in this.all) {
                  var O = this.all[g];
                  o.arrIn(u, O.state) && O.notifyState(i, t);
                }
              }, r.prototype.get = function(n, t) {
                n = String(n);
                var e = this.all[n];
                if (!e)
                  e = this.all[n] = new b.default(this.realtime, n, t);
                else if (t) {
                  if (e._shouldReattachToSetOptions(t))
                    throw new C.default("Channels.get() cannot be used to set channel options that would cause the channel to reattach. Please, use RealtimeChannel.setOptions() instead.", 4e4, 400);
                  e.setOptions(t);
                }
                return e;
              }, r.prototype.getDerived = function(n, t, e) {
                if (t.filter) {
                  var u = o.toBase64(t.filter), i = o.matchDerivedChannel(n);
                  n = "[filter=".concat(u).concat(i.qualifierParam, "]").concat(i.channelName);
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
            }(E.default)
          );
          f.default = c;
        },
        /* 51 */
        /***/
        function(N, f, s) {
          Object.defineProperty(f, "__esModule", { value: !0 });
          var d = s(0), o = d.__importStar(s(1)), P = d.__importDefault(s(7)), E = d.__importDefault(s(34)), M = d.__importDefault(s(2)), L = d.__importDefault(s(36)), b = d.__importDefault(s(3));
          function m() {
          }
          var C = (
            /** @class */
            function(a) {
              d.__extends(h, a);
              function h(R, A) {
                var c = a.call(this) || this;
                return c.whenState = function(l, p) {
                  return P.default.prototype.whenState.call(c, l, c.state, p, new L.default(void 0, l));
                }, c.ably = R, c.connectionManager = new E.default(R, A), c.state = c.connectionManager.state.state, c.key = void 0, c.id = void 0, c.errorReason = null, c.connectionManager.on("connectionstate", function(l) {
                  var p = c.state = l.current;
                  b.default.Config.nextTick(function() {
                    c.emit(p, l);
                  });
                }), c.connectionManager.on("update", function(l) {
                  b.default.Config.nextTick(function() {
                    c.emit("update", l);
                  });
                }), c;
              }
              return h.prototype.connect = function() {
                M.default.logAction(M.default.LOG_MINOR, "Connection.connect()", ""), this.connectionManager.requestState({ state: "connecting" });
              }, h.prototype.ping = function(R) {
                if (M.default.logAction(M.default.LOG_MINOR, "Connection.ping()", ""), !R) {
                  if (this.ably.options.promises)
                    return o.promisify(this, "ping", arguments);
                  R = m;
                }
                this.connectionManager.ping(null, R);
              }, h.prototype.close = function() {
                M.default.logAction(M.default.LOG_MINOR, "Connection.close()", "connectionKey = " + this.key), this.connectionManager.requestState({ state: "closing" });
              }, Object.defineProperty(h.prototype, "recoveryKey", {
                get: function() {
                  return this.createRecoveryKey();
                },
                enumerable: !1,
                configurable: !0
              }), h.prototype.createRecoveryKey = function() {
                return this.connectionManager.createRecoveryKey();
              }, h;
            }(P.default)
          );
          f.default = C;
        },
        /* 52 */
        /***/
        function(N, f, s) {
          Object.defineProperty(f, "__esModule", { value: !0 }), f.PendingMessage = void 0;
          var d = s(0), o = d.__importDefault(s(10)), P = d.__importStar(s(1)), E = d.__importDefault(s(7)), M = d.__importDefault(s(2)), L = d.__importDefault(s(35)), b = d.__importDefault(s(4)), m = o.default.Action, C = (
            /** @class */
            function() {
              function h(R, A) {
                this.message = R, this.callback = A, this.merged = !1;
                var c = R.action;
                this.sendAttempted = !1, this.ackRequired = c == m.MESSAGE || c == m.PRESENCE;
              }
              return h;
            }()
          );
          f.PendingMessage = C;
          var a = (
            /** @class */
            function(h) {
              d.__extends(R, h);
              function R(A) {
                var c = h.call(this) || this;
                return c.transport = A, c.messageQueue = new L.default(), A.on("ack", function(l, p) {
                  c.onAck(l, p);
                }), A.on("nack", function(l, p, r) {
                  c.onNack(l, p, r);
                }), c;
              }
              return R.prototype.onAck = function(A, c) {
                M.default.logAction(M.default.LOG_MICRO, "Protocol.onAck()", "serial = " + A + "; count = " + c), this.messageQueue.completeMessages(A, c);
              }, R.prototype.onNack = function(A, c, l) {
                M.default.logAction(M.default.LOG_ERROR, "Protocol.onNack()", "serial = " + A + "; count = " + c + "; err = " + P.inspectError(l)), l || (l = new b.default("Unable to send message; channel not responding", 50001, 500)), this.messageQueue.completeMessages(A, c, l);
              }, R.prototype.onceIdle = function(A) {
                var c = this.messageQueue;
                if (c.count() === 0) {
                  A();
                  return;
                }
                c.once("idle", A);
              }, R.prototype.send = function(A) {
                A.ackRequired && this.messageQueue.push(A), M.default.shouldLog(M.default.LOG_MICRO) && M.default.logAction(M.default.LOG_MICRO, "Protocol.send()", "sending msg; " + o.default.stringify(A.message)), A.sendAttempted = !0, this.transport.send(A.message);
              }, R.prototype.getTransport = function() {
                return this.transport;
              }, R.prototype.getPendingMessages = function() {
                return this.messageQueue.copyAll();
              }, R.prototype.clearPendingMessages = function() {
                return this.messageQueue.clear();
              }, R.prototype.finish = function() {
                var A = this.transport;
                this.onceIdle(function() {
                  A.disconnect();
                });
              }, R;
            }(E.default)
          );
          f.default = a;
        },
        /* 53 */
        /***/
        function(N, f, s) {
          Object.defineProperty(f, "__esModule", { value: !0 });
          var d = s(0), o = d.__importDefault(s(3)), P = d.__importStar(s(1)), E = d.__importDefault(s(25)), M = d.__importDefault(s(8)), L = d.__importDefault(s(2)), b = d.__importDefault(s(10)), m = d.__importDefault(s(4)), C = "web_socket";
          function a(A) {
            return !!A.on;
          }
          var h = (
            /** @class */
            function(A) {
              d.__extends(c, A);
              function c(l, p, r) {
                var n = A.call(this, l, p, r) || this;
                return n.shortName = C, r.heartbeats = o.default.Config.useProtocolHeartbeats, n.wsHost = M.default.getHost(r.options, r.host, !0), n;
              }
              return c.isAvailable = function() {
                return !!o.default.Config.WebSocket;
              }, c.prototype.createWebSocket = function(l, p) {
                return this.uri = l + P.toQueryString(p), new o.default.Config.WebSocket(this.uri);
              }, c.prototype.toString = function() {
                return "WebSocketTransport; uri=" + this.uri;
              }, c.prototype.connect = function() {
                L.default.logAction(L.default.LOG_MINOR, "WebSocketTransport.connect()", "starting"), E.default.prototype.connect.call(this);
                var l = this, p = this.params, r = p.options, n = r.tls ? "wss://" : "ws://", t = n + this.wsHost + ":" + M.default.getPort(r) + "/";
                L.default.logAction(L.default.LOG_MINOR, "WebSocketTransport.connect()", "uri: " + t), this.auth.getAuthParams(function(e, u) {
                  if (!l.isDisposed) {
                    var i = "";
                    for (var g in u)
                      i += " " + g + ": " + u[g] + ";";
                    if (L.default.logAction(L.default.LOG_MINOR, "WebSocketTransport.connect()", "authParams:" + i + " err: " + e), e) {
                      l.disconnect(e);
                      return;
                    }
                    var O = p.getConnectParams(u);
                    try {
                      var v = l.wsConnection = l.createWebSocket(t, O);
                      v.binaryType = o.default.Config.binaryType, v.onopen = function() {
                        l.onWsOpen();
                      }, v.onclose = function(S) {
                        l.onWsClose(S);
                      }, v.onmessage = function(S) {
                        l.onWsData(S.data);
                      }, v.onerror = function(S) {
                        l.onWsError(S);
                      }, a(v) && v.on("ping", function() {
                        l.onActivity();
                      });
                    } catch (S) {
                      L.default.logAction(L.default.LOG_ERROR, "WebSocketTransport.connect()", "Unexpected exception creating websocket: err = " + (S.stack || S.message)), l.disconnect(S);
                    }
                  }
                });
              }, c.prototype.send = function(l) {
                var p = this.wsConnection;
                if (!p) {
                  L.default.logAction(L.default.LOG_ERROR, "WebSocketTransport.send()", "No socket connection");
                  return;
                }
                try {
                  p.send(b.default.serialize(l, this.params.format));
                } catch (n) {
                  var r = "Exception from ws connection when trying to send: " + P.inspectError(n);
                  L.default.logAction(L.default.LOG_ERROR, "WebSocketTransport.send()", r), this.finish("disconnected", new m.default(r, 5e4, 500));
                }
              }, c.prototype.onWsData = function(l) {
                L.default.logAction(L.default.LOG_MICRO, "WebSocketTransport.onWsData()", "data received; length = " + l.length + "; type = " + typeof l);
                try {
                  this.onProtocolMessage(b.default.deserialize(l, this.format));
                } catch (p) {
                  L.default.logAction(L.default.LOG_ERROR, "WebSocketTransport.onWsData()", "Unexpected exception handing channel message: " + p.stack);
                }
              }, c.prototype.onWsOpen = function() {
                L.default.logAction(L.default.LOG_MINOR, "WebSocketTransport.onWsOpen()", "opened WebSocket"), this.emit("preconnect");
              }, c.prototype.onWsClose = function(l) {
                var p, r;
                if (typeof l == "object" ? (r = l.code, p = l.wasClean || r === 1e3) : (r = l, p = r == 1e3), delete this.wsConnection, p) {
                  L.default.logAction(L.default.LOG_MINOR, "WebSocketTransport.onWsClose()", "Cleanly closed WebSocket");
                  var n = new m.default("Websocket closed", 80003, 400);
                  this.finish("disconnected", n);
                } else {
                  var t = "Unclean disconnection of WebSocket ; code = " + r, n = new m.default(t, 80003, 400);
                  L.default.logAction(L.default.LOG_MINOR, "WebSocketTransport.onWsClose()", t), this.finish("disconnected", n);
                }
                this.emit("disposed");
              }, c.prototype.onWsError = function(l) {
                var p = this;
                L.default.logAction(L.default.LOG_MINOR, "WebSocketTransport.onError()", "Error from WebSocket: " + l.message), o.default.Config.nextTick(function() {
                  p.disconnect(Error(l.message));
                });
              }, c.prototype.dispose = function() {
                L.default.logAction(L.default.LOG_MINOR, "WebSocketTransport.dispose()", ""), this.isDisposed = !0;
                var l = this.wsConnection;
                l && (l.onmessage = function() {
                }, delete this.wsConnection, o.default.Config.nextTick(function() {
                  if (L.default.logAction(L.default.LOG_MICRO, "WebSocketTransport.dispose()", "closing websocket"), !l)
                    throw new Error("WebSocketTransport.dispose(): wsConnection is not defined");
                  l.close();
                }));
              }, c;
            }(E.default)
          );
          function R(A) {
            return h.isAvailable() && (A.supportedTransports[C] = h), h;
          }
          f.default = R;
        },
        /* 54 */
        /***/
        function(N, f, s) {
          Object.defineProperty(f, "__esModule", { value: !0 });
          var d = s(0), o = d.__importStar(s(1)), P = d.__importDefault(s(33)), E = d.__importDefault(s(7)), M = d.__importDefault(s(2)), L = d.__importDefault(s(14)), b = d.__importStar(s(4)), m = d.__importDefault(s(38)), C = d.__importDefault(s(22)), a = d.__importDefault(s(39)), h = function() {
          };
          function R(n) {
            return n.channel.realtime.auth.clientId;
          }
          function A(n) {
            var t = n.channel.realtime, e = t.auth.clientId;
            return (!e || e === "*") && t.connection.state === "connected";
          }
          function c(n, t, e) {
            switch (n.state) {
              case "attached":
              case "suspended":
                e();
                break;
              case "initialized":
              case "detached":
              case "detaching":
              case "attaching":
                n.attach(function(u) {
                  u ? t(u) : e();
                });
                break;
              default:
                t(b.default.fromValues(n.invalidStateError()));
            }
          }
          function l(n, t) {
            if (n.isSynthesized() || t.isSynthesized())
              return n.timestamp >= t.timestamp;
            var e = n.parseId(), u = t.parseId();
            return e.msgSerial === u.msgSerial ? e.index > u.index : e.msgSerial > u.msgSerial;
          }
          var p = (
            /** @class */
            function(n) {
              d.__extends(t, n);
              function t(e) {
                var u = n.call(this, e) || this;
                return u.channel = e, u.syncComplete = !1, u.members = new r(u, function(i) {
                  return i.clientId + ":" + i.connectionId;
                }), u._myMembers = new r(u, function(i) {
                  return i.clientId;
                }), u.subscriptions = new E.default(), u.pendingPresence = [], u;
              }
              return t.prototype.enter = function(e, u) {
                if (A(this))
                  throw new b.default("clientId must be specified to enter a presence channel", 40012, 400);
                return this._enterOrUpdateClient(void 0, void 0, e, "enter", u);
              }, t.prototype.update = function(e, u) {
                if (A(this))
                  throw new b.default("clientId must be specified to update presence data", 40012, 400);
                return this._enterOrUpdateClient(void 0, void 0, e, "update", u);
              }, t.prototype.enterClient = function(e, u, i) {
                return this._enterOrUpdateClient(void 0, e, u, "enter", i);
              }, t.prototype.updateClient = function(e, u, i) {
                return this._enterOrUpdateClient(void 0, e, u, "update", i);
              }, t.prototype._enterOrUpdateClient = function(e, u, i, g, O) {
                var v = this;
                if (!O)
                  if (typeof i == "function")
                    O = i, i = null;
                  else {
                    if (this.channel.realtime.options.promises)
                      return o.promisify(this, "_enterOrUpdateClient", [e, u, i, g]);
                    O = h;
                  }
                var S = this.channel;
                if (!S.connectionManager.activeState()) {
                  O(S.connectionManager.getError());
                  return;
                }
                M.default.logAction(M.default.LOG_MICRO, "RealtimePresence." + g + "Client()", "channel = " + S.name + ", id = " + e + ", client = " + (u || "(implicit) " + R(this)));
                var I = L.default.fromValues({
                  action: g,
                  data: i
                });
                e && (I.id = e), u && (I.clientId = u), L.default.encode(I, S.channelOptions, function(D) {
                  if (D) {
                    O(D);
                    return;
                  }
                  switch (S.state) {
                    case "attached":
                      S.sendPresence(I, O);
                      break;
                    case "initialized":
                    case "detached":
                      S.attach();
                    case "attaching":
                      v.pendingPresence.push({
                        presence: I,
                        callback: O
                      });
                      break;
                    default:
                      D = new b.PartialErrorInfo("Unable to " + g + " presence channel while in " + S.state + " state", 90001), D.code = 90001, O(D);
                  }
                });
              }, t.prototype.leave = function(e, u) {
                if (A(this))
                  throw new b.default("clientId must have been specified to enter or leave a presence channel", 40012, 400);
                return this.leaveClient(void 0, e, u);
              }, t.prototype.leaveClient = function(e, u, i) {
                if (!i)
                  if (typeof u == "function")
                    i = u, u = null;
                  else {
                    if (this.channel.realtime.options.promises)
                      return o.promisify(this, "leaveClient", [e, u]);
                    i = h;
                  }
                var g = this.channel;
                if (!g.connectionManager.activeState()) {
                  i == null || i(g.connectionManager.getError());
                  return;
                }
                M.default.logAction(M.default.LOG_MICRO, "RealtimePresence.leaveClient()", "leaving; channel = " + this.channel.name + ", client = " + e);
                var O = L.default.fromValues({
                  action: "leave",
                  data: u
                });
                switch (e && (O.clientId = e), g.state) {
                  case "attached":
                    g.sendPresence(O, i);
                    break;
                  case "attaching":
                    this.pendingPresence.push({
                      presence: O,
                      callback: i
                    });
                    break;
                  case "initialized":
                  case "failed": {
                    var v = new b.PartialErrorInfo("Unable to leave presence channel (incompatible state)", 90001);
                    i == null || i(v);
                    break;
                  }
                  default:
                    i == null || i(g.invalidStateError());
                }
              }, t.prototype.get = function(e, u) {
                var i = this, g = Array.prototype.slice.call(arguments);
                g.length == 1 && typeof g[0] == "function" && g.unshift(null), e = g[0], u = g[1];
                var O = !e || ("waitForSync" in e ? e.waitForSync : !0);
                if (!u) {
                  if (this.channel.realtime.options.promises)
                    return o.promisify(this, "get", g);
                  u = h;
                }
                function v(S) {
                  u(null, e ? S.list(e) : S.values());
                }
                if (this.channel.state === "suspended") {
                  O ? u(b.default.fromValues({
                    statusCode: 400,
                    code: 91005,
                    message: "Presence state is out of sync due to channel being in the SUSPENDED state"
                  })) : v(this.members);
                  return;
                }
                c(this.channel, u, function() {
                  var S = i.members;
                  O ? S.waitSync(function() {
                    v(S);
                  }) : v(S);
                });
              }, t.prototype.history = function(e, u) {
                if (M.default.logAction(M.default.LOG_MICRO, "RealtimePresence.history()", "channel = " + this.name), u === void 0)
                  if (typeof e == "function")
                    u = e, e = null;
                  else {
                    if (this.channel.realtime.options.promises)
                      return o.promisify(this, "history", arguments);
                    u = h;
                  }
                e && e.untilAttach && (this.channel.state === "attached" ? (delete e.untilAttach, e.from_serial = this.channel.properties.attachSerial) : u(new b.default("option untilAttach requires the channel to be attached, was: " + this.channel.state, 4e4, 400))), P.default.prototype._history.call(this, e, u);
              }, t.prototype.setPresence = function(e, u, i) {
                M.default.logAction(M.default.LOG_MICRO, "RealtimePresence.setPresence()", "received presence for " + e.length + " participants; syncChannelSerial = " + i);
                var g, O, v = this.members, S = this._myMembers, I = [], D = this.channel.connectionManager.connectionId;
                u && (this.members.startSync(), i && (O = i.match(/^[\w-]+:(.*)$/)) && (g = O[1]));
                for (var T = 0; T < e.length; T++) {
                  var U = L.default.fromValues(e[T]);
                  switch (U.action) {
                    case "leave":
                      v.remove(U) && I.push(U), U.connectionId === D && !U.isSynthesized() && S.remove(U);
                      break;
                    case "enter":
                    case "present":
                    case "update":
                      v.put(U) && I.push(U), U.connectionId === D && S.put(U);
                      break;
                  }
                }
                u && !g && (v.endSync(), this.channel.syncChannelSerial = null);
                for (var T = 0; T < I.length; T++) {
                  var U = I[T];
                  this.subscriptions.emit(U.action, U);
                }
              }, t.prototype.onAttached = function(e) {
                M.default.logAction(M.default.LOG_MINOR, "RealtimePresence.onAttached()", "channel = " + this.channel.name + ", hasPresence = " + e), e ? this.members.startSync() : (this._synthesizeLeaves(this.members.values()), this.members.clear()), this._ensureMyMembersPresent();
                var u = this.pendingPresence, i = u.length;
                if (i) {
                  this.pendingPresence = [];
                  var g = [], O = C.default.create();
                  M.default.logAction(M.default.LOG_MICRO, "RealtimePresence.onAttached", "sending " + i + " queued presence messages");
                  for (var v = 0; v < i; v++) {
                    var S = u[v];
                    g.push(S.presence), O.push(S.callback);
                  }
                  this.channel.sendPresence(g, O);
                }
              }, t.prototype.actOnChannelState = function(e, u, i) {
                switch (e) {
                  case "attached":
                    this.onAttached(u);
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
                  M.default.logAction(M.default.LOG_MINOR, "RealtimeChannel.failPendingPresence", "channel; name = " + this.channel.name + ", err = " + o.inspectError(e));
                  for (var u = 0; u < this.pendingPresence.length; u++)
                    try {
                      this.pendingPresence[u].callback(e);
                    } catch {
                    }
                  this.pendingPresence = [];
                }
              }, t.prototype._clearMyMembers = function() {
                this._myMembers.clear();
              }, t.prototype._ensureMyMembersPresent = function() {
                var e = this, u = this._myMembers, i = function(v) {
                  if (v) {
                    var S = "Presence auto-re-enter failed: " + v.toString(), I = new b.default(S, 91004, 400);
                    M.default.logAction(M.default.LOG_ERROR, "RealtimePresence._ensureMyMembersPresent()", S);
                    var D = new a.default(e.channel.state, e.channel.state, !0, !1, I);
                    e.channel.emit("update", D);
                  }
                };
                for (var g in u.map) {
                  var O = u.map[g];
                  M.default.logAction(M.default.LOG_MICRO, "RealtimePresence._ensureMyMembersPresent()", 'Auto-reentering clientId "' + O.clientId + '" into the presence set'), this._enterOrUpdateClient(O.id, O.clientId, O.data, "enter", i);
                }
              }, t.prototype._synthesizeLeaves = function(e) {
                var u = this.subscriptions;
                o.arrForEach(e, function(i) {
                  var g = L.default.fromValues({
                    action: "leave",
                    connectionId: i.connectionId,
                    clientId: i.clientId,
                    data: i.data,
                    encoding: i.encoding,
                    timestamp: o.now()
                  });
                  u.emit("leave", g);
                });
              }, t.prototype.on = function() {
                for (var e = [], u = 0; u < arguments.length; u++)
                  e[u] = arguments[u];
                M.default.deprecated("presence.on", "presence.subscribe"), this.subscribe.apply(this, e);
              }, t.prototype.off = function() {
                for (var e = [], u = 0; u < arguments.length; u++)
                  e[u] = arguments[u];
                M.default.deprecated("presence.off", "presence.unsubscribe"), this.unsubscribe.apply(this, e);
              }, t.prototype.subscribe = function() {
                for (var e = [], u = 0; u < arguments.length; u++)
                  e[u] = arguments[u];
                var i = m.default.processListenerArgs(e), g = i[0], O = i[1], v = i[2], S = this.channel;
                if (!v) {
                  if (this.channel.realtime.options.promises)
                    return o.promisify(this, "subscribe", [g, O]);
                  v = h;
                }
                if (S.state === "failed") {
                  v(b.default.fromValues(S.invalidStateError()));
                  return;
                }
                this.subscriptions.on(g, O), S.attach(v);
              }, t.prototype.unsubscribe = function() {
                for (var e = [], u = 0; u < arguments.length; u++)
                  e[u] = arguments[u];
                var i = m.default.processListenerArgs(e), g = i[0], O = i[1];
                this.subscriptions.off(g, O);
              }, t;
            }(P.default)
          ), r = (
            /** @class */
            function(n) {
              d.__extends(t, n);
              function t(e, u) {
                var i = n.call(this) || this;
                return i.presence = e, i.map = /* @__PURE__ */ Object.create(null), i.syncInProgress = !1, i.residualMembers = null, i.memberKey = u, i;
              }
              return t.prototype.get = function(e) {
                return this.map[e];
              }, t.prototype.getClient = function(e) {
                var u = this.map, i = [];
                for (var g in u) {
                  var O = u[g];
                  O.clientId == e && O.action != "absent" && i.push(O);
                }
                return i;
              }, t.prototype.list = function(e) {
                var u = this.map, i = e && e.clientId, g = e && e.connectionId, O = [];
                for (var v in u) {
                  var S = u[v];
                  S.action !== "absent" && (i && i != S.clientId || g && g != S.connectionId || O.push(S));
                }
                return O;
              }, t.prototype.put = function(e) {
                (e.action === "enter" || e.action === "update") && (e = L.default.fromValues(e), e.action = "present");
                var u = this.map, i = this.memberKey(e);
                this.residualMembers && delete this.residualMembers[i];
                var g = u[i];
                return g && !l(e, g) ? !1 : (u[i] = e, !0);
              }, t.prototype.values = function() {
                var e = this.map, u = [];
                for (var i in e) {
                  var g = e[i];
                  g.action != "absent" && u.push(g);
                }
                return u;
              }, t.prototype.remove = function(e) {
                var u = this.map, i = this.memberKey(e), g = u[i];
                return g && !l(e, g) ? !1 : (this.syncInProgress ? (e = L.default.fromValues(e), e.action = "absent", u[i] = e) : delete u[i], !0);
              }, t.prototype.startSync = function() {
                var e = this.map, u = this.syncInProgress;
                M.default.logAction(M.default.LOG_MINOR, "PresenceMap.startSync()", "channel = " + this.presence.channel.name + "; syncInProgress = " + u), this.syncInProgress || (this.residualMembers = o.copy(e), this.setInProgress(!0));
              }, t.prototype.endSync = function() {
                var e = this.map, u = this.syncInProgress;
                if (M.default.logAction(M.default.LOG_MINOR, "PresenceMap.endSync()", "channel = " + this.presence.channel.name + "; syncInProgress = " + u), u) {
                  for (var i in e) {
                    var g = e[i];
                    g.action === "absent" && delete e[i];
                  }
                  this.presence._synthesizeLeaves(o.valuesArray(this.residualMembers));
                  for (var i in this.residualMembers)
                    delete e[i];
                  this.residualMembers = null, this.setInProgress(!1);
                }
                this.emit("sync");
              }, t.prototype.waitSync = function(e) {
                var u = this.syncInProgress;
                if (M.default.logAction(M.default.LOG_MINOR, "PresenceMap.waitSync()", "channel = " + this.presence.channel.name + "; syncInProgress = " + u), !u) {
                  e();
                  return;
                }
                this.once("sync", e);
              }, t.prototype.clear = function() {
                this.map = {}, this.setInProgress(!1), this.residualMembers = null;
              }, t.prototype.setInProgress = function(e) {
                M.default.logAction(M.default.LOG_MICRO, "PresenceMap.setInProgress()", "inProgress = " + e), this.syncInProgress = e, this.presence.syncComplete = !e;
              }, t;
            }(E.default)
          );
          f.default = p;
        },
        /* 55 */
        /***/
        function(N, f, s) {
          Object.defineProperty(f, "__esModule", { value: !0 });
          var d = s(0), o = s(56), P = s(30), E = s(11), M = d.__importDefault(s(5)), L = d.__importDefault(s(3)), b = (
            /** @class */
            function() {
              function m() {
                this.base64CharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", this.hexCharSet = "0123456789abcdef";
              }
              return m.prototype.isWordArray = function(C) {
                return C != null && C.sigBytes !== void 0;
              }, m.prototype.isArrayBuffer = function(C) {
                return C != null && C.constructor === ArrayBuffer;
              }, m.prototype.isTypedArray = function(C) {
                return !!ArrayBuffer && ArrayBuffer.isView && ArrayBuffer.isView(C);
              }, m.prototype.uint8ViewToBase64 = function(C) {
                for (var a = "", h = this.base64CharSet, R = C.byteLength, A = R % 3, c = R - A, l, p, r, n, t, e = 0; e < c; e = e + 3)
                  t = C[e] << 16 | C[e + 1] << 8 | C[e + 2], l = (t & 16515072) >> 18, p = (t & 258048) >> 12, r = (t & 4032) >> 6, n = t & 63, a += h[l] + h[p] + h[r] + h[n];
                return A == 1 ? (t = C[c], l = (t & 252) >> 2, p = (t & 3) << 4, a += h[l] + h[p] + "==") : A == 2 && (t = C[c] << 8 | C[c + 1], l = (t & 64512) >> 10, p = (t & 1008) >> 4, r = (t & 15) << 2, a += h[l] + h[p] + h[r] + "="), a;
              }, m.prototype.base64ToArrayBuffer = function(C) {
                for (var a = atob == null ? void 0 : atob(C), h = a.length, R = new Uint8Array(h), A = 0; A < h; A++) {
                  var c = a.charCodeAt(A);
                  R[A] = c;
                }
                return R.buffer;
              }, m.prototype.isBuffer = function(C) {
                return this.isArrayBuffer(C) || this.isWordArray(C) || this.isTypedArray(C);
              }, m.prototype.toBuffer = function(C) {
                if (!ArrayBuffer)
                  throw new Error("Can't convert to Buffer: browser does not support the necessary types");
                if (this.isArrayBuffer(C))
                  return new Uint8Array(C);
                if (this.isTypedArray(C))
                  return new Uint8Array(C.buffer);
                if (this.isWordArray(C)) {
                  for (var a = new ArrayBuffer(C.sigBytes), h = new Uint8Array(a), R = 0; R < C.sigBytes; R++)
                    h[R] = C.words[R >>> 2] >>> 24 - R % 4 * 8 & 255;
                  return h;
                }
                throw new Error("BufferUtils.toBuffer expected an arraybuffer, typed array, or CryptoJS wordarray");
              }, m.prototype.toArrayBuffer = function(C) {
                return this.isArrayBuffer(C) ? C : this.toBuffer(C).buffer;
              }, m.prototype.toWordArray = function(C) {
                return this.isTypedArray(C) && (C = C.buffer), this.isWordArray(C) ? C : M.default.create(C);
              }, m.prototype.base64Encode = function(C) {
                return this.isWordArray(C) ? (0, E.stringify)(C) : this.uint8ViewToBase64(this.toBuffer(C));
              }, m.prototype.base64Decode = function(C) {
                return ArrayBuffer && L.default.Config.atob ? this.base64ToArrayBuffer(C) : (0, E.parse)(C);
              }, m.prototype.hexEncode = function(C) {
                return (0, o.stringify)(this.toWordArray(C));
              }, m.prototype.hexDecode = function(C) {
                var a = (0, o.parse)(C);
                return ArrayBuffer ? this.toArrayBuffer(a) : a;
              }, m.prototype.utf8Encode = function(C) {
                return L.default.Config.TextEncoder ? new L.default.Config.TextEncoder().encode(C).buffer : (0, P.parse)(C);
              }, m.prototype.utf8Decode = function(C) {
                if (!this.isBuffer(C))
                  throw new Error("Expected input of utf8decode to be an arraybuffer, typed array, or CryptoJS wordarray");
                return TextDecoder && !this.isWordArray(C) ? new TextDecoder().decode(C) : (C = this.toWordArray(C), (0, P.stringify)(C));
              }, m.prototype.bufferCompare = function(C, a) {
                if (!C)
                  return -1;
                if (!a)
                  return 1;
                var h = this.toWordArray(C), R = this.toWordArray(a);
                h.clamp(), R.clamp();
                var A = h.sigBytes - R.sigBytes;
                if (A != 0)
                  return A;
                for (var c = h.words, l = R.words, p = 0; p < c.length; p++)
                  if (A = c[p] - l[p], A != 0)
                    return A;
                return 0;
              }, m.prototype.byteLength = function(C) {
                return this.isArrayBuffer(C) || this.isTypedArray(C) ? C.byteLength : this.isWordArray(C) ? C.sigBytes : -1;
              }, m.prototype.typedArrayToBuffer = function(C) {
                return C.buffer;
              }, m;
            }()
          );
          f.default = new b();
        },
        /* 56 */
        /***/
        function(N, f, s) {
          (function(d, o) {
            N.exports = o(s(6));
          })(this, function(d) {
            return d.enc.Hex;
          });
        },
        /* 57 */
        /***/
        function(N, f, s) {
          s.r(f);
          var d = s(5), o = /* @__PURE__ */ s.n(d), P = s(11), E = s(21), M = /* @__PURE__ */ s.n(E), L = s(2), b = /* @__PURE__ */ s.n(L), m = s(4), C = /* @__PURE__ */ s.n(m), a = function(h, R) {
            var A = "aes", c = 256, l = "cbc", p = 16, r = 4, n = 4294967296, t = 2147483648, e;
            if (h.getRandomWordArray)
              e = h.getRandomWordArray;
            else if (typeof Uint32Array < "u" && h.getRandomValues) {
              var u = new Uint32Array(r);
              e = function(T, U) {
                var G = T / 4, W = G == r ? u : new Uint32Array(G);
                h.getRandomValues(W, function(k) {
                  typeof U < "u" && U(k, R.toWordArray(W));
                });
              };
            } else
              e = function(T, U) {
                b.a.logAction(
                  b.a.LOG_MAJOR,
                  "Ably.Crypto.generateRandom()",
                  "Warning: the browser you are using does not support secure cryptographically secure randomness generation; falling back to insecure Math.random()"
                );
                for (var G = T / 4, W = new Array(G), k = 0; k < G; k++)
                  W[k] = Math.floor(Math.random() * n) - t;
                U(null, o.a.create(W));
              };
            function i(T) {
              return T + p & -p;
            }
            function g(T) {
              if (T.algorithm === "aes" && T.mode === "cbc") {
                if (T.keyLength === 128 || T.keyLength === 256)
                  return;
                throw new Error(
                  "Unsupported key length " + T.keyLength + " for aes-cbc encryption. Encryption key must be 128 or 256 bits (16 or 32 ASCII characters)"
                );
              }
            }
            function O(T) {
              return T.replace("_", "/").replace("-", "+");
            }
            var v = [
              o.a.create([269488144, 269488144, 269488144, 269488144], 16),
              o.a.create([16777216], 1),
              o.a.create([33685504], 2),
              o.a.create([50529024], 3),
              o.a.create([67372036], 4),
              o.a.create([84215045, 83886080], 5),
              o.a.create([101058054, 101056512], 6),
              o.a.create([117901063, 117901056], 7),
              o.a.create([134744072, 134744072], 8),
              o.a.create([151587081, 151587081, 150994944], 9),
              o.a.create([168430090, 168430090, 168427520], 10),
              o.a.create([185273099, 185273099, 185273088], 11),
              o.a.create([202116108, 202116108, 202116108], 12),
              o.a.create([218959117, 218959117, 218959117, 218103808], 13),
              o.a.create([235802126, 235802126, 235802126, 235798528], 14),
              o.a.create([252645135, 252645135, 252645135, 252645135], 15),
              o.a.create([269488144, 269488144, 269488144, 269488144], 16)
            ];
            function S() {
            }
            function I() {
              this.algorithm = null, this.keyLength = null, this.mode = null, this.key = null;
            }
            S.CipherParams = I, S.getDefaultParams = function(T) {
              var U;
              if (typeof T == "function" || typeof T == "string") {
                if (b.a.deprecated("Crypto.getDefaultParams(key, callback)", "Crypto.getDefaultParams({key: key})"), typeof T == "function")
                  S.generateRandomKey(function(W) {
                    T(null, S.getDefaultParams({ key: W }));
                  });
                else if (typeof arguments[1] == "function")
                  arguments[1](null, S.getDefaultParams({ key: T }));
                else
                  throw new Error("Invalid arguments for Crypto.getDefaultParams");
                return;
              }
              if (!T.key)
                throw new Error("Crypto.getDefaultParams: a key is required");
              typeof T.key == "string" ? U = Object(P.parse)(O(T.key)) : U = R.toWordArray(T.key);
              var G = new I();
              if (G.key = U, G.algorithm = T.algorithm || A, G.keyLength = U.words.length * (4 * 8), G.mode = T.mode || l, T.keyLength && T.keyLength !== G.keyLength)
                throw new Error(
                  "Crypto.getDefaultParams: a keyLength of " + T.keyLength + " was specified, but the key actually has length " + G.keyLength
                );
              return g(G), G;
            }, S.generateRandomKey = function(T, U) {
              arguments.length == 1 && typeof T == "function" && (U = T, T = void 0), e((T || c) / 8, function(G, W) {
                U !== void 0 && U(G ? C.a.fromValues(G) : null, W);
              });
            }, S.getCipher = function(T) {
              var U = T instanceof I ? T : S.getDefaultParams(T);
              return { cipherParams: U, cipher: new D(U, r, T.iv) };
            };
            function D(T, U, G) {
              this.algorithm = T.algorithm + "-" + String(T.keyLength) + "-" + T.mode, this.cjsAlgorithm = T.algorithm.toUpperCase().replace(/-\d+$/, ""), this.key = R.toWordArray(T.key), G && (this.iv = R.toWordArray(G).clone()), this.blockLengthWords = U;
            }
            return D.prototype.encrypt = function(T, U) {
              b.a.logAction(b.a.LOG_MICRO, "CBCCipher.encrypt()", ""), T = R.toWordArray(T);
              var G = T.sigBytes, W = i(G), k = this, J = function() {
                k.getIv(function(V, y) {
                  if (V) {
                    U(V);
                    return;
                  }
                  var x = k.encryptCipher.process(T.concat(v[W - G])), w = y.concat(x);
                  U(null, w);
                });
              };
              this.encryptCipher ? J() : this.iv ? (this.encryptCipher = M.a.algo[this.cjsAlgorithm].createEncryptor(this.key, { iv: this.iv }), J()) : e(p, function(V, y) {
                if (V) {
                  U(V);
                  return;
                }
                k.encryptCipher = M.a.algo[k.cjsAlgorithm].createEncryptor(k.key, { iv: y }), k.iv = y, J();
              });
            }, D.prototype.decrypt = function(T) {
              b.a.logAction(b.a.LOG_MICRO, "CBCCipher.decrypt()", ""), T = R.toWordArray(T);
              var U = this.blockLengthWords, G = T.words, W = o.a.create(G.slice(0, U)), k = o.a.create(G.slice(U)), J = M.a.algo[this.cjsAlgorithm].createDecryptor(this.key, { iv: W }), V = J.process(k), y = J.finalize();
              return J.reset(), y && y.sigBytes && V.concat(y), V;
            }, D.prototype.getIv = function(T) {
              if (this.iv) {
                var U = this.iv;
                this.iv = null, T(null, U);
                return;
              }
              var G = this;
              e(p, function(W, k) {
                if (W) {
                  T(W);
                  return;
                }
                T(null, G.encryptCipher.process(k));
              });
            }, S;
          };
          f.default = a;
        },
        /* 58 */
        /***/
        function(N, f, s) {
          (function(d, o) {
            N.exports = o(s(6));
          })(this, function(d) {
            return function() {
              var o = d, P = o.lib, E = P.WordArray, M = o.enc;
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
                stringify: function(b) {
                  for (var m = b.words, C = b.sigBytes, a = [], h = 0; h < C; h += 2) {
                    var R = m[h >>> 2] >>> 16 - h % 4 * 8 & 65535;
                    a.push(String.fromCharCode(R));
                  }
                  return a.join("");
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
                parse: function(b) {
                  for (var m = b.length, C = [], a = 0; a < m; a++)
                    C[a >>> 1] |= b.charCodeAt(a) << 16 - a % 2 * 16;
                  return E.create(C, m * 2);
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
                stringify: function(b) {
                  for (var m = b.words, C = b.sigBytes, a = [], h = 0; h < C; h += 2) {
                    var R = L(m[h >>> 2] >>> 16 - h % 4 * 8 & 65535);
                    a.push(String.fromCharCode(R));
                  }
                  return a.join("");
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
                parse: function(b) {
                  for (var m = b.length, C = [], a = 0; a < m; a++)
                    C[a >>> 1] |= L(b.charCodeAt(a) << 16 - a % 2 * 16);
                  return E.create(C, m * 2);
                }
              };
              function L(b) {
                return b << 8 & 4278255360 | b >>> 8 & 16711935;
              }
            }(), d.enc.Utf16;
          });
        },
        /* 59 */
        /***/
        function(N, f, s) {
          (function(d, o) {
            N.exports = o(s(6), s(27));
          })(this, function(d) {
            return function(o) {
              var P = d, E = P.lib, M = E.CipherParams, L = P.enc, b = L.Hex, m = P.format;
              m.Hex = {
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
                stringify: function(C) {
                  return C.ciphertext.toString(b);
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
                parse: function(C) {
                  var a = b.parse(C);
                  return M.create({ ciphertext: a });
                }
              };
            }(), d.format.Hex;
          });
        },
        /* 60 */
        /***/
        function(N, f, s) {
          (function(d, o) {
            N.exports = o(s(6), s(11), s(61), s(26), s(27));
          })(this, function(d) {
            return function() {
              var o = d, P = o.lib, E = P.BlockCipher, M = o.algo, L = [], b = [], m = [], C = [], a = [], h = [], R = [], A = [], c = [], l = [];
              (function() {
                for (var n = [], t = 0; t < 256; t++)
                  t < 128 ? n[t] = t << 1 : n[t] = t << 1 ^ 283;
                for (var e = 0, u = 0, t = 0; t < 256; t++) {
                  var i = u ^ u << 1 ^ u << 2 ^ u << 3 ^ u << 4;
                  i = i >>> 8 ^ i & 255 ^ 99, L[e] = i, b[i] = e;
                  var g = n[e], O = n[g], v = n[O], S = n[i] * 257 ^ i * 16843008;
                  m[e] = S << 24 | S >>> 8, C[e] = S << 16 | S >>> 16, a[e] = S << 8 | S >>> 24, h[e] = S;
                  var S = v * 16843009 ^ O * 65537 ^ g * 257 ^ e * 16843008;
                  R[i] = S << 24 | S >>> 8, A[i] = S << 16 | S >>> 16, c[i] = S << 8 | S >>> 24, l[i] = S, e ? (e = g ^ n[n[n[v ^ g]]], u ^= n[n[u]]) : e = u = 1;
                }
              })();
              var p = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], r = M.AES = E.extend({
                _doReset: function() {
                  var n;
                  if (!(this._nRounds && this._keyPriorReset === this._key)) {
                    for (var t = this._keyPriorReset = this._key, e = t.words, u = t.sigBytes / 4, i = this._nRounds = u + 6, g = (i + 1) * 4, O = this._keySchedule = [], v = 0; v < g; v++)
                      v < u ? O[v] = e[v] : (n = O[v - 1], v % u ? u > 6 && v % u == 4 && (n = L[n >>> 24] << 24 | L[n >>> 16 & 255] << 16 | L[n >>> 8 & 255] << 8 | L[n & 255]) : (n = n << 8 | n >>> 24, n = L[n >>> 24] << 24 | L[n >>> 16 & 255] << 16 | L[n >>> 8 & 255] << 8 | L[n & 255], n ^= p[v / u | 0] << 24), O[v] = O[v - u] ^ n);
                    for (var S = this._invKeySchedule = [], I = 0; I < g; I++) {
                      var v = g - I;
                      if (I % 4)
                        var n = O[v];
                      else
                        var n = O[v - 4];
                      I < 4 || v <= 4 ? S[I] = n : S[I] = R[L[n >>> 24]] ^ A[L[n >>> 16 & 255]] ^ c[L[n >>> 8 & 255]] ^ l[L[n & 255]];
                    }
                  }
                },
                encryptBlock: function(n, t) {
                  this._doCryptBlock(n, t, this._keySchedule, m, C, a, h, L);
                },
                decryptBlock: function(n, t) {
                  var e = n[t + 1];
                  n[t + 1] = n[t + 3], n[t + 3] = e, this._doCryptBlock(n, t, this._invKeySchedule, R, A, c, l, b);
                  var e = n[t + 1];
                  n[t + 1] = n[t + 3], n[t + 3] = e;
                },
                _doCryptBlock: function(n, t, e, u, i, g, O, v) {
                  for (var S = this._nRounds, I = n[t] ^ e[0], D = n[t + 1] ^ e[1], T = n[t + 2] ^ e[2], U = n[t + 3] ^ e[3], G = 4, W = 1; W < S; W++) {
                    var k = u[I >>> 24] ^ i[D >>> 16 & 255] ^ g[T >>> 8 & 255] ^ O[U & 255] ^ e[G++], J = u[D >>> 24] ^ i[T >>> 16 & 255] ^ g[U >>> 8 & 255] ^ O[I & 255] ^ e[G++], V = u[T >>> 24] ^ i[U >>> 16 & 255] ^ g[I >>> 8 & 255] ^ O[D & 255] ^ e[G++], y = u[U >>> 24] ^ i[I >>> 16 & 255] ^ g[D >>> 8 & 255] ^ O[T & 255] ^ e[G++];
                    I = k, D = J, T = V, U = y;
                  }
                  var k = (v[I >>> 24] << 24 | v[D >>> 16 & 255] << 16 | v[T >>> 8 & 255] << 8 | v[U & 255]) ^ e[G++], J = (v[D >>> 24] << 24 | v[T >>> 16 & 255] << 16 | v[U >>> 8 & 255] << 8 | v[I & 255]) ^ e[G++], V = (v[T >>> 24] << 24 | v[U >>> 16 & 255] << 16 | v[I >>> 8 & 255] << 8 | v[D & 255]) ^ e[G++], y = (v[U >>> 24] << 24 | v[I >>> 16 & 255] << 16 | v[D >>> 8 & 255] << 8 | v[T & 255]) ^ e[G++];
                  n[t] = k, n[t + 1] = J, n[t + 2] = V, n[t + 3] = y;
                },
                keySize: 256 / 32
              });
              o.AES = E._createHelper(r);
            }(), d.AES;
          });
        },
        /* 61 */
        /***/
        function(N, f, s) {
          (function(d, o) {
            N.exports = o(s(6));
          })(this, function(d) {
            return function(o) {
              var P = d, E = P.lib, M = E.WordArray, L = E.Hasher, b = P.algo, m = [];
              (function() {
                for (var c = 0; c < 64; c++)
                  m[c] = o.abs(o.sin(c + 1)) * 4294967296 | 0;
              })();
              var C = b.MD5 = L.extend({
                _doReset: function() {
                  this._hash = new M.init([
                    1732584193,
                    4023233417,
                    2562383102,
                    271733878
                  ]);
                },
                _doProcessBlock: function(c, l) {
                  for (var p = 0; p < 16; p++) {
                    var r = l + p, n = c[r];
                    c[r] = (n << 8 | n >>> 24) & 16711935 | (n << 24 | n >>> 8) & 4278255360;
                  }
                  var t = this._hash.words, e = c[l + 0], u = c[l + 1], i = c[l + 2], g = c[l + 3], O = c[l + 4], v = c[l + 5], S = c[l + 6], I = c[l + 7], D = c[l + 8], T = c[l + 9], U = c[l + 10], G = c[l + 11], W = c[l + 12], k = c[l + 13], J = c[l + 14], V = c[l + 15], y = t[0], x = t[1], w = t[2], j = t[3];
                  y = a(y, x, w, j, e, 7, m[0]), j = a(j, y, x, w, u, 12, m[1]), w = a(w, j, y, x, i, 17, m[2]), x = a(x, w, j, y, g, 22, m[3]), y = a(y, x, w, j, O, 7, m[4]), j = a(j, y, x, w, v, 12, m[5]), w = a(w, j, y, x, S, 17, m[6]), x = a(x, w, j, y, I, 22, m[7]), y = a(y, x, w, j, D, 7, m[8]), j = a(j, y, x, w, T, 12, m[9]), w = a(w, j, y, x, U, 17, m[10]), x = a(x, w, j, y, G, 22, m[11]), y = a(y, x, w, j, W, 7, m[12]), j = a(j, y, x, w, k, 12, m[13]), w = a(w, j, y, x, J, 17, m[14]), x = a(x, w, j, y, V, 22, m[15]), y = h(y, x, w, j, u, 5, m[16]), j = h(j, y, x, w, S, 9, m[17]), w = h(w, j, y, x, G, 14, m[18]), x = h(x, w, j, y, e, 20, m[19]), y = h(y, x, w, j, v, 5, m[20]), j = h(j, y, x, w, U, 9, m[21]), w = h(w, j, y, x, V, 14, m[22]), x = h(x, w, j, y, O, 20, m[23]), y = h(y, x, w, j, T, 5, m[24]), j = h(j, y, x, w, J, 9, m[25]), w = h(w, j, y, x, g, 14, m[26]), x = h(x, w, j, y, D, 20, m[27]), y = h(y, x, w, j, k, 5, m[28]), j = h(j, y, x, w, i, 9, m[29]), w = h(w, j, y, x, I, 14, m[30]), x = h(x, w, j, y, W, 20, m[31]), y = R(y, x, w, j, v, 4, m[32]), j = R(j, y, x, w, D, 11, m[33]), w = R(w, j, y, x, G, 16, m[34]), x = R(x, w, j, y, J, 23, m[35]), y = R(y, x, w, j, u, 4, m[36]), j = R(j, y, x, w, O, 11, m[37]), w = R(w, j, y, x, I, 16, m[38]), x = R(x, w, j, y, U, 23, m[39]), y = R(y, x, w, j, k, 4, m[40]), j = R(j, y, x, w, e, 11, m[41]), w = R(w, j, y, x, g, 16, m[42]), x = R(x, w, j, y, S, 23, m[43]), y = R(y, x, w, j, T, 4, m[44]), j = R(j, y, x, w, W, 11, m[45]), w = R(w, j, y, x, V, 16, m[46]), x = R(x, w, j, y, i, 23, m[47]), y = A(y, x, w, j, e, 6, m[48]), j = A(j, y, x, w, I, 10, m[49]), w = A(w, j, y, x, J, 15, m[50]), x = A(x, w, j, y, v, 21, m[51]), y = A(y, x, w, j, W, 6, m[52]), j = A(j, y, x, w, g, 10, m[53]), w = A(w, j, y, x, U, 15, m[54]), x = A(x, w, j, y, u, 21, m[55]), y = A(y, x, w, j, D, 6, m[56]), j = A(j, y, x, w, V, 10, m[57]), w = A(w, j, y, x, S, 15, m[58]), x = A(x, w, j, y, k, 21, m[59]), y = A(y, x, w, j, O, 6, m[60]), j = A(j, y, x, w, G, 10, m[61]), w = A(w, j, y, x, i, 15, m[62]), x = A(x, w, j, y, T, 21, m[63]), t[0] = t[0] + y | 0, t[1] = t[1] + x | 0, t[2] = t[2] + w | 0, t[3] = t[3] + j | 0;
                },
                _doFinalize: function() {
                  var c = this._data, l = c.words, p = this._nDataBytes * 8, r = c.sigBytes * 8;
                  l[r >>> 5] |= 128 << 24 - r % 32;
                  var n = o.floor(p / 4294967296), t = p;
                  l[(r + 64 >>> 9 << 4) + 15] = (n << 8 | n >>> 24) & 16711935 | (n << 24 | n >>> 8) & 4278255360, l[(r + 64 >>> 9 << 4) + 14] = (t << 8 | t >>> 24) & 16711935 | (t << 24 | t >>> 8) & 4278255360, c.sigBytes = (l.length + 1) * 4, this._process();
                  for (var e = this._hash, u = e.words, i = 0; i < 4; i++) {
                    var g = u[i];
                    u[i] = (g << 8 | g >>> 24) & 16711935 | (g << 24 | g >>> 8) & 4278255360;
                  }
                  return e;
                },
                clone: function() {
                  var c = L.clone.call(this);
                  return c._hash = this._hash.clone(), c;
                }
              });
              function a(c, l, p, r, n, t, e) {
                var u = c + (l & p | ~l & r) + n + e;
                return (u << t | u >>> 32 - t) + l;
              }
              function h(c, l, p, r, n, t, e) {
                var u = c + (l & r | p & ~r) + n + e;
                return (u << t | u >>> 32 - t) + l;
              }
              function R(c, l, p, r, n, t, e) {
                var u = c + (l ^ p ^ r) + n + e;
                return (u << t | u >>> 32 - t) + l;
              }
              function A(c, l, p, r, n, t, e) {
                var u = c + (p ^ (l | ~r)) + n + e;
                return (u << t | u >>> 32 - t) + l;
              }
              P.MD5 = L._createHelper(C), P.HmacMD5 = L._createHmacHelper(C);
            }(Math), d.MD5;
          });
        },
        /* 62 */
        /***/
        function(N, f, s) {
          var d;
          Object.defineProperty(f, "__esModule", { value: !0 });
          var o = s(0), P = o.__importDefault(s(3)), E = o.__importStar(s(1)), M = o.__importDefault(s(8)), L = s(4), b = o.__importDefault(s(17)), m = o.__importDefault(s(15)), C = o.__importDefault(s(20)), a = o.__importDefault(s(2)), h = s(28), R = o.__importDefault(s(63)), A = s(37);
          function c(r) {
            var n = r.statusCode;
            return n === 408 && !r.code || n === 400 && !r.code || n >= 500 && n <= 504;
          }
          function l(r) {
            var n = r.connection, t = n && n.connectionManager.host;
            return t ? [t].concat(M.default.getFallbackHosts(r.options)) : M.default.getHosts(r.options);
          }
          var p = (d = /** @class */
          function() {
            function r(n) {
              this.checksInProgress = null, this.checkConnectivity = void 0, this.supportsAuthHeaders = !1, this.supportsLinkHeaders = !1, this._getHosts = l, this.options = n || {};
              var t = this.options.connectivityCheckUrl || M.default.connectivityCheckUrl, e = this.options.connectivityCheckParams, u = !this.options.connectivityCheckUrl;
              P.default.Config.xhrSupported ? (this.supportsAuthHeaders = !0, this.Request = function(i, g, O, v, S, I, D) {
                var T = m.default.createRequest(O, v, S, I, C.default.REQ_SEND, g && g.options.timeouts, i);
                return T.once("complete", D), T.exec(), T;
              }, this.options.disableConnectivityCheck ? this.checkConnectivity = function(i) {
                i(null, !0);
              } : this.checkConnectivity = function(i) {
                a.default.logAction(a.default.LOG_MICRO, "(XHRRequest)Http.checkConnectivity()", "Sending; " + t), this.doUri(b.default.Get, null, t, null, null, e, function(g, O, v, S, I) {
                  var D = !1;
                  u ? D = !g && (O == null ? void 0 : O.replace(/\n/, "")) == "yes" : D = !g && (0, A.isSuccessCode)(I), a.default.logAction(a.default.LOG_MICRO, "(XHRRequest)Http.checkConnectivity()", "Result: " + D), i(null, D);
                });
              }) : P.default.Config.jsonpSupported ? (this.Request = function(i, g, O, v, S, I, D) {
                var T = (0, h.createRequest)(O, v, S, I, C.default.REQ_SEND, g && g.options.timeouts, i);
                return T.once("complete", D), P.default.Config.nextTick(function() {
                  T.exec();
                }), T;
              }, this.options.disableConnectivityCheck ? this.checkConnectivity = function(i) {
                i(null, !0);
              } : this.checkConnectivity = function(i) {
                var g = this, O = M.default.jsonpInternetUpUrl;
                if (this.checksInProgress) {
                  this.checksInProgress.push(i);
                  return;
                }
                this.checksInProgress = [i], a.default.logAction(a.default.LOG_MICRO, "(JSONP)Http.checkConnectivity()", "Sending; " + O);
                var v = new h.Request("isTheInternetUp", O, null, null, null, C.default.REQ_SEND, M.default.TIMEOUTS);
                v.once("complete", function(S, I) {
                  var D = !S && I;
                  a.default.logAction(a.default.LOG_MICRO, "(JSONP)Http.checkConnectivity()", "Result: " + D);
                  for (var T = 0; T < g.checksInProgress.length; T++)
                    g.checksInProgress[T](null, D);
                  g.checksInProgress = null;
                }), P.default.Config.nextTick(function() {
                  v.exec();
                });
              }) : P.default.Config.fetchSupported ? (this.supportsAuthHeaders = !0, this.Request = R.default, this.checkConnectivity = function(i) {
                a.default.logAction(a.default.LOG_MICRO, "(Fetch)Http.checkConnectivity()", "Sending; " + t), this.doUri(b.default.Get, null, t, null, null, null, function(g, O) {
                  var v = !g && (O == null ? void 0 : O.replace(/\n/, "")) == "yes";
                  a.default.logAction(a.default.LOG_MICRO, "(Fetch)Http.checkConnectivity()", "Result: " + v), i(null, v);
                });
              }) : this.Request = function(i, g, O, v, S, I, D) {
                D(new L.PartialErrorInfo("no supported HTTP transports available", null, 400), null);
              };
            }
            return r.prototype.do = function(n, t, e, u, i, g, O) {
              var v = this, S = typeof e == "function" ? e : function(U) {
                return t.baseUri(U) + e;
              }, I = t._currentFallback;
              if (I)
                if (I.validUntil > E.now()) {
                  if (!this.Request) {
                    O == null || O(new L.PartialErrorInfo("Request invoked before assigned to", null, 500));
                    return;
                  }
                  this.Request(n, t, S(I.host), u, g, i, function(U) {
                    for (var G = [], W = 1; W < arguments.length; W++)
                      G[W - 1] = arguments[W];
                    if (U && c(U)) {
                      t._currentFallback = null, v.do(n, t, e, u, i, g, O);
                      return;
                    }
                    O == null || O.apply(void 0, o.__spreadArray([U], G, !1));
                  });
                  return;
                } else
                  t._currentFallback = null;
              var D = l(t);
              if (D.length === 1) {
                this.doUri(n, t, S(D[0]), u, i, g, O);
                return;
              }
              var T = function(U, G) {
                var W = U.shift();
                v.doUri(n, t, S(W), u, i, g, function(k) {
                  for (var J = [], V = 1; V < arguments.length; V++)
                    J[V - 1] = arguments[V];
                  if (k && c(k) && U.length) {
                    T(U, !0);
                    return;
                  }
                  G && (t._currentFallback = {
                    host: W,
                    validUntil: E.now() + t.options.timeouts.fallbackRetryTimeout
                  }), O == null || O.apply(void 0, o.__spreadArray([k], J, !1));
                });
              };
              T(D);
            }, r.prototype.doUri = function(n, t, e, u, i, g, O) {
              if (!this.Request) {
                O(new L.PartialErrorInfo("Request invoked before assigned to", null, 500));
                return;
              }
              this.Request(n, t, e, u, g, i, O);
            }, r;
          }(), d.methods = [b.default.Get, b.default.Delete, b.default.Post, b.default.Put, b.default.Patch], d.methodsWithoutBody = [b.default.Get, b.default.Delete], d.methodsWithBody = [b.default.Post, b.default.Put, b.default.Patch], d);
          f.default = p;
        },
        /* 63 */
        /***/
        function(N, f, s) {
          Object.defineProperty(f, "__esModule", { value: !0 });
          var d = s(0), o = d.__importStar(s(4)), P = d.__importDefault(s(3)), E = d.__importDefault(s(8)), M = d.__importStar(s(1)), L = s(1);
          function b(a, h) {
            return !!h.get("x-ably-errorcode");
          }
          function m(a, h) {
            if (b(a, h))
              return a.error && o.default.fromValues(a.error);
          }
          function C(a, h, R, A, c, l, p) {
            var r = new Headers(A || {}), n = a ? a.toUpperCase() : M.isEmptyArg(l) ? "GET" : "POST", t = new AbortController(), e = setTimeout(function() {
              t.abort(), p(new o.PartialErrorInfo("Request timed out", null, 408));
            }, h ? h.options.timeouts.httpRequestTimeout : E.default.TIMEOUTS.httpRequestTimeout), u = {
              method: n,
              headers: r,
              body: l
            };
            P.default.Config.isWebworker || (u.credentials = r.has("authorization") ? "include" : "same-origin"), (0, L.getGlobalObject)().fetch(R + "?" + new URLSearchParams(c || {}), u).then(function(i) {
              clearTimeout(e);
              var g = i.headers.get("Content-Type"), O;
              g && g.indexOf("application/x-msgpack") > -1 ? O = i.arrayBuffer() : g && g.indexOf("application/json") > -1 ? O = i.json() : O = i.text(), O.then(function(v) {
                var S = !!g && g.indexOf("application/x-msgpack") === -1;
                if (i.ok)
                  p(null, v, i.headers, S, i.status);
                else {
                  var I = m(v, i.headers) || new o.PartialErrorInfo("Error response received from server: " + i.status + " body was: " + P.default.Config.inspect(v), null, i.status);
                  p(I, v, i.headers, S, i.status);
                }
              });
            }).catch(function(i) {
              clearTimeout(e), p(i);
            });
          }
          f.default = C;
        },
        /* 64 */
        /***/
        function(N, f, s) {
          Object.defineProperty(f, "__esModule", { value: !0 });
          var d = s(0), o = d.__importDefault(s(41)), P = d.__importStar(s(1)), E = P.getGlobalObject();
          typeof Window > "u" && typeof WorkerGlobalScope > "u" && console.log("Warning: this distribution of Ably is intended for browsers. On nodejs, please use the 'ably' package on npm");
          function M() {
            var C = E.location;
            return !E.WebSocket || !C || !C.origin || C.origin.indexOf("http") > -1;
          }
          var L = E.navigator && E.navigator.userAgent.toString(), b = E.location && E.location.href, m = {
            agent: "browser",
            logTimestamps: !0,
            userAgent: L,
            currentUrl: b,
            noUpgrade: L && !!L.match(/MSIE\s8\.0/),
            binaryType: "arraybuffer",
            WebSocket: E.WebSocket,
            fetchSupported: !!E.fetch,
            xhrSupported: E.XMLHttpRequest && "withCredentials" in new XMLHttpRequest(),
            jsonpSupported: typeof document < "u",
            allowComet: M(),
            streamingSupported: !0,
            useProtocolHeartbeats: !0,
            createHmac: null,
            msgpack: o.default,
            supportsBinary: !!E.TextDecoder,
            preferBinary: !1,
            ArrayBuffer: E.ArrayBuffer,
            atob: E.atob,
            nextTick: typeof E.setImmediate < "u" ? E.setImmediate.bind(E) : function(C) {
              setTimeout(C, 0);
            },
            addEventListener: E.addEventListener,
            inspect: JSON.stringify,
            stringByteSize: function(C) {
              return E.TextDecoder && new E.TextEncoder().encode(C).length || C.length;
            },
            TextEncoder: E.TextEncoder,
            TextDecoder: E.TextDecoder,
            Promise: E.Promise,
            getRandomValues: function(C) {
              if (C !== void 0)
                return function(a, h) {
                  C.getRandomValues(a), h && h(null);
                };
            }(E.crypto || msCrypto)
          };
          f.default = m;
        },
        /* 65 */
        /***/
        function(N, f, s) {
          (function(d) {
            Object.defineProperty(f, "__esModule", { value: !0 });
            var o = s(0), P = o.__importStar(s(1)), E = "ablyjs-storage-test", M = (
              /** @class */
              function() {
                function L() {
                  try {
                    d.sessionStorage.setItem(E, E), d.sessionStorage.removeItem(E), this.sessionSupported = !0;
                  } catch {
                    this.sessionSupported = !1;
                  }
                  try {
                    d.localStorage.setItem(E, E), d.localStorage.removeItem(E), this.localSupported = !0;
                  } catch {
                    this.localSupported = !1;
                  }
                }
                return L.prototype.get = function(b) {
                  return this._get(b, !1);
                }, L.prototype.getSession = function(b) {
                  return this._get(b, !0);
                }, L.prototype.remove = function(b) {
                  return this._remove(b, !1);
                }, L.prototype.removeSession = function(b) {
                  return this._remove(b, !0);
                }, L.prototype.set = function(b, m, C) {
                  return this._set(b, m, C, !1);
                }, L.prototype.setSession = function(b, m, C) {
                  return this._set(b, m, C, !0);
                }, L.prototype._set = function(b, m, C, a) {
                  var h = { value: m };
                  return C && (h.expires = P.now() + C), this.storageInterface(a).setItem(b, JSON.stringify(h));
                }, L.prototype._get = function(b, m) {
                  if (m && !this.sessionSupported)
                    throw new Error("Session Storage not supported");
                  if (!m && !this.localSupported)
                    throw new Error("Local Storage not supported");
                  var C = this.storageInterface(m).getItem(b);
                  if (!C)
                    return null;
                  var a = JSON.parse(C);
                  return a.expires && a.expires < P.now() ? (this.storageInterface(m).removeItem(b), null) : a.value;
                }, L.prototype._remove = function(b, m) {
                  return this.storageInterface(m).removeItem(b);
                }, L.prototype.storageInterface = function(b) {
                  return b ? d.sessionStorage : d.localStorage;
                }, L;
              }()
            );
            f.default = new M();
          }).call(this, s(13));
        },
        /* 66 */
        /***/
        function(N, f, s) {
          Object.defineProperty(f, "__esModule", { value: !0 });
          var d = s(0), o = d.__importDefault(s(67)), P = {
            connectivityCheckUrl: "https://internet-up.ably-realtime.com/is-the-internet-up.txt",
            jsonpInternetUpUrl: "https://internet-up.ably-realtime.com/is-the-internet-up-0-9.js",
            /* Order matters here: the base transport is the leftmost one in the
             * intersection of baseTransportOrder and the transports clientOption that's
             * supported.  This is not quite the same as the preference order -- e.g.
             * xhr_polling is preferred to jsonp, but for browsers that support it we want
             * the base transport to be xhr_polling, not jsonp */
            defaultTransports: [
              o.default.XhrPolling,
              o.default.XhrStreaming,
              o.default.JsonP,
              o.default.WebSocket
            ],
            baseTransportOrder: [
              o.default.XhrPolling,
              o.default.XhrStreaming,
              o.default.JsonP,
              o.default.WebSocket
            ],
            transportPreferenceOrder: [
              o.default.JsonP,
              o.default.XhrPolling,
              o.default.XhrStreaming,
              o.default.WebSocket
            ],
            upgradeTransports: [o.default.XhrStreaming, o.default.WebSocket]
          };
          f.default = P;
        },
        /* 67 */
        /***/
        function(N, f, s) {
          Object.defineProperty(f, "__esModule", { value: !0 });
          var d;
          (function(o) {
            o.WebSocket = "web_socket", o.Comet = "comet", o.XhrStreaming = "xhr_streaming", o.XhrPolling = "xhr_polling", o.JsonP = "jsonp";
          })(d || (d = {})), f.default = d;
        },
        /* 68 */
        /***/
        function(N, f, s) {
          s.r(f);
          var d = s(28), o = /* @__PURE__ */ s.n(d), P = s(1), E = s(3), M = /* @__PURE__ */ s.n(E), L = s(12), b = /* @__PURE__ */ s.n(L), m = s(15), C = /* @__PURE__ */ s.n(m), a = function(c) {
            var l = "xhr_polling";
            function p(r, n, t) {
              t.stream = !1, b.a.call(this, r, n, t), this.shortName = l;
            }
            return P.inherits(p, b.a), p.isAvailable = function() {
              return M.a.Config.xhrSupported && M.a.Config.allowComet;
            }, p.prototype.toString = function() {
              return "XHRPollingTransport; uri=" + this.baseUri + "; isConnected=" + this.isConnected;
            }, p.prototype.createRequest = function(r, n, t, e, u) {
              return C.a.createRequest(r, n, t, e, u, this.timeouts);
            }, typeof c < "u" && p.isAvailable() && (c.supportedTransports[l] = p), p;
          }, h = a, R = function(c) {
            var l = "xhr_streaming";
            function p(r, n, t) {
              b.a.call(this, r, n, t), this.shortName = l;
            }
            return P.inherits(p, b.a), p.isAvailable = function() {
              return M.a.Config.xhrSupported && M.a.Config.streamingSupported && M.a.Config.allowComet;
            }, p.prototype.toString = function() {
              return "XHRStreamingTransport; uri=" + this.baseUri + "; isConnected=" + this.isConnected;
            }, p.prototype.createRequest = function(r, n, t, e, u) {
              return C.a.createRequest(r, n, t, e, u, this.timeouts);
            }, typeof c < "u" && p.isAvailable() && (c.supportedTransports[l] = p), p;
          }, A = R;
          f.default = [o.a, h, A];
        }
        /******/
      ]).default
    );
  });
})(Ht);
var ue = Ht.exports;
const fe = /* @__PURE__ */ vt(ue);
class ce {
  constructor(B, N) {
    this.apiKey = B, this.channelName = N;
  }
  async connect() {
    this.ably = new fe.Realtime.Promise(this.apiKey), await this.ably.connection.once("connected"), console.log("Connected to Ably!"), this.doSetChannel();
  }
  setChannel(B) {
    this.channelName !== B && (this.channel && (this.channel.unsubscribe(), this.channel.detach()), this.doSetChannel(B));
  }
  getChannelName() {
    return this.channelName;
  }
  async doSetChannel(B) {
    B && (this.channelName = B), this.channel = this.ably.channels.get(this.channelName), await this.channel.subscribe((N) => {
      N.connectionId !== this.channel.connectionManager.connectionId && this.listener && this.listener(N.data);
    });
  }
  listen(B) {
    this.listener = B;
  }
  async send(B) {
    await this.channel.publish("message", B);
  }
  disconnect() {
    this.ably.connection.close();
  }
}
const le = "L-6B8w.nACscQ:UeHNaBboodE8M5g_Di-YOErCQMUt5Q4u0ZPW-2ZaFRQ", de = {
  create: () => {
    const H = se.parse(location.search), B = H.server || "ably", N = H.apikey || le || prompt("サーバーのAPIキーを入力してください"), f = H.channel || "all";
    switch (console.log(`接続するサーバーは ${B} です`), B) {
      case "ably":
        return new ce(N, f);
      default:
        console.error("接続するサーバーが不正です :", B);
    }
  }
};
let st, xt = "";
const he = (H) => ({
  blocks: [
    {
      opcode: "connect",
      blockType: dt.COMMAND,
      text: "接続する"
    },
    {
      opcode: "setChannel",
      blockType: dt.COMMAND,
      text: "チャンネルを [CHANNEL_NAME] にする",
      arguments: {
        CHANNEL_NAME: {
          type: Et.STRING,
          defaultValue: "グループ１"
        }
      }
    },
    // {
    //   opcode: "getChannelName",
    //   blockType: BlockType.REPORTER,
    //   text: "チャンネル",
    // },
    {
      opcode: "send",
      blockType: dt.COMMAND,
      text: "[MESSAGE] を送る",
      arguments: {
        MESSAGE: {
          type: Et.STRING,
          defaultValue: "ありがとう!"
        }
      }
    },
    {
      opcode: "whenReceived",
      blockType: dt.HAT,
      text: "文字列を受け取ったとき",
      isEdgeActivated: !1
    },
    {
      opcode: "receivedMessage",
      blockType: dt.REPORTER,
      text: "受け取った文字列"
    },
    {
      opcode: "disconnect",
      blockType: dt.COMMAND,
      text: "切断する"
    }
  ],
  connect: () => {
    st || (st = de.create(), st.connect(), st.listen((B) => {
      xt = B, H.startHats("twoWayComm_whenReceived");
    }));
  },
  setChannel: (B) => {
    if (!st)
      return;
    const N = Tt.toString(B.CHANNEL_NAME);
    st.setChannel(N);
  },
  getChannelName: () => {
    if (st)
      return st.getChannelName();
  },
  send: (B) => {
    if (!st)
      return;
    const N = Tt.toString(B.MESSAGE);
    st.send(N);
  },
  whenReceived: () => !0,
  receivedMessage: () => xt,
  disconnect: () => {
    st && (st.disconnect(), st = void 0);
  }
}), Ot = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMjggLTEyOCA3NjggNzY4Ij48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNC4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIzIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDM4LjYgMTUwLjZjMTIuNS0xMi41IDEyLjUtMzIuOCAwLTQ1LjNsLTk2LTk2Yy0xMi41LTEyLjUtMzIuOC0xMi41LTQ1LjMgMHMtMTIuNSAzMi44IDAgNDUuM0wzMzguNyA5NiAzMiA5NkMxNC4zIDk2IDAgMTEwLjMgMCAxMjhzMTQuMyAzMiAzMiAzMmwzMDYuNyAwLTQxLjQgNDEuNGMtMTIuNSAxMi41LTEyLjUgMzIuOCAwIDQ1LjNzMzIuOCAxMi41IDQ1LjMgMGw5Ni05NnptLTMzMy4zIDM1MmMxMi41IDEyLjUgMzIuOCAxMi41IDQ1LjMgMHMxMi41LTMyLjggMC00NS4zTDEwOS4zIDQxNiA0MTYgNDE2YzE3LjcgMCAzMi0xNC4zIDMyLTMycy0xNC4zLTMyLTMyLTMybC0zMDYuNyAwIDQxLjQtNDEuNGMxMi41LTEyLjUgMTIuNS0zMi44IDAtNDUuM3MtMzIuOC0xMi41LTQ1LjMgMGwtOTYgOTZjLTEyLjUgMTIuNS0xMi41IDMyLjggMCA0NS4zbDk2IDk2eiIvPjwvc3ZnPgo=", pe = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAF0CAMAAADIPrc+AAAC6npUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHja7ZVbsuQmDIbfWUWWgCSExHIwl6rsIMvPD6b7dJ+ZSWZqUpWXY8qIFrIk65PpMP76c4Y/cJFaDknNc8k54kolFa5YeLyvsmeKac/7Uo98tG/6YOksGVIg5d6wekuq0OvHA48YdL3rg58d9uPobJy4UVbkte6vSULPt57ScVTGvcjF7TXV6zhqx3Cncu70TOsW63d4Uxiq1BWBhHkISdxzujOQ+67QEOYoBXZxa6KkAMGSjzMU5O31HjLG1wK9FfmxCp+r/3jVz8XneizkUy3zqREW390g/aSXZ3x+DSzPjPh9Y96/3l/n3HN2n3Pcb1dTRkXz6ahdbHq4geGFkst+LGMYbsXa9igYHmtsQN5jixdGo0IMKjNQok6VJo0tGzWkmHiwQTI3lq1zMS7cwAcU16DJJkW6OGA1HkEEan7mQjtu2fEaOSJ3gikTnBEe+eEI/7T5KyPM2VaJaBUT6OkGzKuvkcYit2ZYAQHNw013gR/j4I8vjbVaNcFsldnxgjVet4tL6aO3ZHMW2CnkzZiC9eMAJUJsRTL4BBLFTKKUKRqzEaGODkAVmbMkvkCAVLkjSU4imYOx84qNZ4y2LStnXmqcTQChksXApkgFrJQU/WPJ0UNVRZOqZjX1oEVrlpyy5pwtr0OumlgynHpm5lasunhy9ezm7sVr4SI4A7XkYsVLKbVyqAhU4avCvkJz8SVXuvTKl11+las2tE9LTVtu1ryVVjt36Tgmeu7WvZdeB4WBk2KkoSMPGz7KqBO9NmWmqTNPmz7LrE9qh+o34xeo0aHGm9Sysyc1aIPZwwWt40QXMxDjRCBuiwAamhez6JQSL3KLWSyMj0IZSepiEzotYkCYBrFOerL7IPdT3IL6T3HjfyMXFrr/glwAum+5fYdaX/9zbRO7v8JV0yj4+kwpKQXFUZvWMv6eDL/r4MvRl6MvR1+O/kdHhvOyhL8BkA6ioZib3uQAAAGEaUNDUElDQyBwcm9maWxlAAB4nH2RPUjDQBzFX1OlRSsdrCDikKE6WRAVcdQqFKFCqBVadTC59AuaNCQtLo6Ca8HBj8Wqg4uzrg6ugiD4AeLk6KToIiX+Lym0iPHguB/v7j3u3gFCo8w0q2sc0PSqmUrExUx2VQy8ohdBhOHHgMwsY06SkvAcX/fw8fUuxrO8z/05+tScxQCfSDzLDLNKvEE8vVk1OO8TR1hRVonPicdMuiDxI9cVl984FxwWeGbETKfmiSPEYqGDlQ5mRVMjniKOqppO+ULGZZXzFmetXGOte/IXhnL6yjLXaQ4jgUUsQYIIBTWUUEYVMVp1UiykaD/u4R9y/BK5FHKVwMixgAo0yI4f/A9+d2vlJyfcpFAc6H6x7Y8RILALNOu2/X1s280TwP8MXOltf6UBzHySXm9r0SMgvA1cXLc1ZQ+43AEGnwzZlB3JT1PI54H3M/qmLNB/C/Ssub219nH6AKSpq+QNcHAIjBYoe93j3cHO3v490+rvB/sscnfAa9baAAADAFBMVEX/tjf/qxn/qxn/////tDDm5+jp6OhMl//S09R8h6XZkhVzfJc9ecz/rR7/sij/rBr/sCXe4emRl6v/syz/ryLv7u6Xn7a6vcVBR1fMTCOLkqbAjTadpby1tbazuMeussCdkILMzdS+w9Kgo6vpnRo+Q1Hc3uXg4eP09PS7RyOxt8fMz9f3pRi+mV+anaUjHyDsnxfP0dc+e89Fi+vZmSi5lFhFiOZLlfxHj/HeojzjmBZJkfXi4uRAf9ba296Kk61BgdnT1dlrc4uQmbLd3t9DhN/opS+XnbE/RVTX2NlKk/nk5eZ6g5zPn0a9wMqDjamDi6KSmrLV1NRCgtzZ2ds/fdJ1f5tBP0GusLSlq7zGyMxEhuLT1NXJy9G4usCLkKKfpbapqrDFx9CKjJTESSNJfMH7qBnboTrv8PPT1d2kp6zvoRm+SCO4vsvzqCSorb739/lSh9BTfbiFj6tdf6vJSyPZlh+ovt6MlrDZ2+GjqLeJkKZHgM5DeslIe8GBjKhuhqCViXbAwsh7hJ+GjInupyvW2uS8zOF8otettMd+horfmyW1ucXyoxmSr9hMfcS9UjH0pBrc4OZoldJhgqtngKLAkkT2rjFxm9bPvrmfo7DKoZSRj5C4mF+pkF0sKi+/wMQpJiics9Jdj9JHTFo6PkozMzqDRTPG0+afknSqlGdRVmTBak/3qSJ3lcBdgrqDiZx3eoK/lEeprrp5gZx6ipazkVHKljv8/PycueFYiMvRyslzhJSJh35jaHTUmTHt7OyVjouslXJZXmvCmlJkQzqpSSvn5+yIptB1m89ikM6zt8PMsKiSj37DeGCwxuWHqdmuvdNthK6OlaqBgYe1mWuejWqmh1bmoSndlRXR2ue/yNRJgc+xt8iPk5tvbnLWoEW/YURpjcJmg7RveJG+nmnHjXxQTU7b5vWFl7h2hqmUl5/FhHDdqErprUJMQT/z9/y2wtN7gpjIlodoZWZeW1zPpFSPnLl6j7OSma3JjymLn7yxkWGYSC+hSC1rgZ1/P1X8AAAAAWJLR0QAiAUdSAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+QLCA8EGmE3kYkAAAKjSURBVHja7dVBCQAACARBqxvMFgayhIKPmQjHwkXDgTABwkJYCAuEhbAQFggLYSEsEBbCQlggLISFsEBYCAthgbAQFsICYSEshAXCQlgIC4SFsBAWCAthISwQFsJCWCAshIWwQFgIC2GBsBAWwgJhISyEBcJCWAgLhIWwEBYIC2EhLFgPq9JyXIRVlsMVIiyEBcJCWAgLhIWwEBYIC2EhLBAWwkJYICyEhbBAWAgLYYGwEBbCAmEhLIQFwkJYCAthmQBhISyEBcJCWAgLhIWwEBYIC2EhLBAWwkJYICyEhbBAWAgLYYGwEBbCAmEhLIQFwkJYCAuEhbAQFggLYSEsEBbCQlggLISFsEBYCAthgbAQFsICYSEshAXCQlgIC4SFsBAWCAthISwQFsJCWCAshIWwQFgIC2GBsBAWwgJhISyEBcJCWAgLhIWwEBYIC2EhLBAWwkJYCAuEhbAQFggLYSEsEBbCQlggLISFsEBYCAthgbAQFsICYSEshAXCQlgIC4SFsBAWCAthISwQFsJCWCAshIWwQFgIC2GBsBAWwgJhISyEBcJCWAgLhIWwEBYIC2EhLBAWwkJYICyEhbBAWAgLYYGwEBbCAmEhLIQFwkJYCAuEhbAQFggLYSEsEBbCQlggLISFsBAWCAthISwQFsJCWCAshIWwQFgIC2GBsBAWwgJhISyEBcJCWAgLhIWwEBYIC2EhLBAWwkJYICyEhbBAWAgLYYGwEBbCAmEhLIQFwkJYCAuEhbAQFggLYSEsEBbCQlggLISFsEBYCAthgbAQFsICYSEshAXCQlgIC4SFsBAWCAthISwQFsJCWCAshIWwQFgIC2EhLBMgLISFsEBYCAthgbAQFsICYSEshAXCQlgIC4SFsBAWCAthISwQFh8N7oIvN98ImQ4AAAAASUVORK5CYII=";
class ge {
  constructor(B) {
    this.runtime = B;
    const { blocks: N, ...f } = he(this.runtime);
    return this.blocks = N, Object.assign(this, f);
  }
  getInfo() {
    return {
      id: "twoWayComm",
      name: "双方向通信",
      color1: "#a0a0a0",
      color2: "#808080",
      color3: "#606060",
      blockIconURI: Ot,
      menuIconURI: Ot,
      blocks: this.blocks
    };
  }
}
const ve = {
  name: "双方向通信",
  extensionId: "twoWayComm",
  collaborator: "Ikuo TERADO",
  iconURL: pe,
  insetIconURL: Ot,
  description: "他デバイスと双方向通信する。",
  featured: !0,
  internetConnectionRequired: !0
  // extensionURL: "https://xcratch.github.io/xcx-example/dist/xcratchExample.mjs",
  // helpLink: "https://xcratch.github.io/xcx-example/",
};
export {
  ge as blockClass,
  ve as entry
};
