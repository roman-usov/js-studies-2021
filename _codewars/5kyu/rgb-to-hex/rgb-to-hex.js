"use strict";

const rgbToHex = (code1, code2, code3) => {
  const validCode = (code) => (+code < 0 ? 0 : +code > 255 ? 255 : +code);
  return [code1, code2, code3].reduce((hex, code) => {
    return (hex += validCode(code).toString(16).padStart(2, "0").toUpperCase());
  }, "");
};

console.log(rgbToHex(-1, 255, 255));

module.exports = rgbToHex;
