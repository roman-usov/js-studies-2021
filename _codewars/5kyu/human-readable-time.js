"use strict";

const input = [10500, 500, 99000, 359999, 0, 5, 60, 86399];

const returnTime = function (seconds) {
  const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
  //console.log(`hrs: ${hrs}`);
  const min = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  //console.log(`min: ${min}`);
  const sec = String((seconds % 3600) % 60).padStart(2, "0");
  //console.log(`sec: ${sec}`);
  console.log(`For ${seconds} the time is ${hrs}:${min}:${sec}`);
  return `${hrs}:${min}:${sec}`;
};

input.forEach((el) => returnTime(el));

module.exports = returnTime;
