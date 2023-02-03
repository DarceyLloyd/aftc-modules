import { Color, Texture, Vector2 } from "three";
// import "url-search-params-polyfill";

export async function getJson(url: string) {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
  // console.warn(response);
  return await response.json();
}
// - - - - - - - - - - - - - - - - - - - - - - - -

export const inertiaTo = (current: number, target: number, changeBy: number,
  minCutoffValue: number = 0.01) => {
  if (changeBy >= 1) {
    return target;
  }

  if (changeBy <= 0) {
    return target;
  }

  if (current == target) {
    return target;
  }
  // console.warn(current,target,changeBy)
  // console.warn(changeBy);


  let distToGo = target - current;
  let delta = current + (distToGo * changeBy);



  if (Math.abs(distToGo) < minCutoffValue) {
    distToGo = 0;
    delta = target;
  }

  return delta;
}



export function convert255(v: number): number {
  return ((1 / 255) * v);
}
// - - - - - - - - - - - - - - - - - - - - - - - -

export function hexToColor(hex: string): Color {
  hex = hex.replace("0x", "");
  hex = hex.replace("#", "");
  let result: any = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  // let result = hex.split("");
  let r = parseInt(result[1], 16) as number;
  let g = parseInt(result[2], 16) as number;
  let b = parseInt(result[3], 16) as number;

  r = convert255(r);
  g = convert255(g);
  b = convert255(b);

  // return new Color(`"rgb(${r}, ${g}, ${b})"`);
  return new Color(r, g, b);
}
// - - - - - - - - - - - - - - - - - - - - - - - -


// export function hexToRgb(hex: string) {
//   hex = hex.replace("0x", "");
//   hex = hex.replace("#", "");
//   let result: any = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);


//   let r = parseInt(result[1], 16);
//   let g = parseInt(result[2], 16);
//   let b = parseInt(result[3], 16);

//   // warn(r);
//   return { r, g, b }
// }
// - - - - - - - - - - - - - - - - - - - - - - - -

export function rgbToHex(r: number, g: number, b: number): number {
  // clamp and convert to hex
  let hr = Math.max(0, Math.min(255, Math.round(r))).toString(16);
  let hg = Math.max(0, Math.min(255, Math.round(g))).toString(16);
  let hb = Math.max(0, Math.min(255, Math.round(b))).toString(16);
  let hexString = "0x" +
    (hr.length < 2 ? "0" : "") + hr +
    (hg.length < 2 ? "0" : "") + hg +
    (hb.length < 2 ? "0" : "") + hb;
  return +hexString;
}
// - - - - - - - - - - - - - - - - - - - - - - - -


export const isTouchDevice = () => {
  return navigator
    ? "ontouchstart" in window ||
    // @ts-ignore-disable-next-line
    (window.DocumentTouch && document instanceof window.DocumentTouch) ||
    navigator.maxTouchPoints ||
    false
    : false;
};


export const random = (a?: number, b?: number) => {
  if (a === undefined) {
    return Math.random();
  } else if (b === undefined) {
    return Math.random() * a;
  } else {
    return a + Math.random() * (b - a);
  }
};

export const randomInt = (a?: number, b?: number) => {
  return Math.floor(random(a, b));
};

export const pick = (ary: []) => {
  return ary[randomInt(ary.length)];
};

export const getObjectPropByKey = (obj: any, key: string) => {
  type ObjectKey = keyof typeof obj;
  return obj[key as ObjectKey];
};

export const getClassFromString = (name: string) => `.${name.replace(/_/g, "-")}`;

export const timeout = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const fit = (value: number, low1: number, high1: number, low2: number, high2: number) => {
  return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
};

export const bellCurve = (value: number) => {
  return (Math.sin(2 * Math.PI * (value - 0.2)) + 1) / 2;
};

export const lerp = (v0: number, v1: number, t: number) => {
  return v0 * (1 - t) + v1 * t;
};

export const hexToRgb = (hex: string) => {
  const result = /^0x?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result
    ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    }
    : null;
};

export const strToBool = (s: string) => {
  const regex = /^\s*(true|1|on)\s*$/i;
  return regex.test(s);
};




export const doesUrlKeyExist = (key: string) => {

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.has(key);

}

export const getUrlKeyValue = (key: string) => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const hasKey = urlParams.has(key);

  if (hasKey){
    return urlParams.get(key);
  } else {
    // console.warn(`doesUrlKeyExist(): Key: ${key} is not found...`);
    return undefined;
  }
}

export const isIOS = () => {
  return (
    ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(
      navigator.platform
    ) ||
    // iPad on iOS 13 detection
    (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  );
};

export const isSafari = () => /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

export const isChrome = () => /CriOS/i.test(navigator.userAgent);

export const isFirefoxIOS = () => navigator.userAgent.match("FxiOS");

export const getDeviceType = () => {
  const ua = navigator.userAgent;
  //@ts-ignore
  if (!!window.MSInputMethodContext && !!document.documentMode) {
    // ie11
    return "desktop";
  }
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  }
  if (
    /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "mobile";
  }
  return "desktop";
};

export const getTextureMapData = (heightmap: Texture) => {
  const { image } = heightmap;
  const canvas = document.createElement("canvas");
  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;
  const context = canvas.getContext("2d");
  if (!context) return;
  context.drawImage(image, 0, 0);
  const imageData = context.getImageData(0, 0, image.width, image.height);
  return imageData;
};

export const getTexturePixelValue = (imageData: ImageData, coordinate: Vector2) => {
  const { x, y } = coordinate;
  const position = (x + imageData.width * y) * 4;
  const data = imageData.data;
  const colorValue = {
    r: data[position] / 255,
    g: data[position + 1] / 255,
    b: data[position + 2] / 255,
    a: data[position + 3] / 255,
  };
  return colorValue;
};

export const loadAudioBuffer = (url: string, audioContext: AudioContext) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.responseType = "arraybuffer";
    request.onload = () => {
      audioContext.decodeAudioData(
        request.response,
        function (buffer) {
          resolve(buffer);
        },
        reject
      );
    };
    request.send();
  });
};

export const loadBinaryBuffer = (url: string) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.responseType = "arraybuffer";
    request.onload = () => {
      resolve(request.response);
    };
    request.onerror = (err) => {
      reject(err);
    };
    request.send();
  });
};
