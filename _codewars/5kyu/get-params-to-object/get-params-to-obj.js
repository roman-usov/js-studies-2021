"use strict";
const inData =
  "user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20blue&experiments.theme=dark&reliable=true";
// const inData = "user.name.firstname=Bob&user.name.lastname=Smith";

// const inData =
//   "user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20blue&user.favoritecolor.test=1";

// const inData = "experiments.theme=dark&winner=false&reliable=true";
// const inData = "experiments.theme=dark";

//////////// Based on ForEach and For with Console Logs ////////////

/*
function paramsToObj(paramsStr) {
  const splitParams = paramsStr.split("&");
  console.log("splitParams", JSON.stringify(splitParams));

  const objectifiedParams = {};

  splitParams.forEach((param, index) => {
    console.log("forEach counter =", index + 1);
    const [keys, value] = param.split("=");

    const keysArr = keys.split(".");
    console.log("keysArr", JSON.stringify(keysArr));

    let currentObj = objectifiedParams;
    console.log(
      "currentObj at the start of forEach",
      JSON.stringify(currentObj)
    );

    for (let i = 0; i < keysArr.length - 1; i += 1) {
      const key = keysArr[i];
      console.log("iteration=", i + 1);
      console.log("key=", key);

      if (!currentObj[key]) currentObj[key] = {};
      console.log(
        "currentObj after creating a new property",
        JSON.stringify(currentObj)
      );

      currentObj = currentObj[key];
      console.log("currentObj=", JSON.stringify(currentObj));
    }
    currentObj[keysArr[keysArr.length - 1]] = decodeURIComponent(value);
    console.log(JSON.stringify(objectifiedParams));
  });
}
*/

//////////// Based on ForEach and For Without Console Logs ////////////

/*
function paramsToObj(paramsStr) {
  const splitParams = paramsStr.split("&");

  const objectifiedParams = {};

  splitParams.forEach((param, index) => {
    const [keys, value] = param.split("=");

    const keysArr = keys.split(".");

    let currentObj = objectifiedParams;

    for (let i = 0; i < keysArr.length - 1; i += 1) {
      const key = keysArr[i];

      if (!currentObj[key]) currentObj[key] = {};

      currentObj = currentObj[key];
    }
    currentObj[keysArr[keysArr.length - 1]] = decodeURIComponent(value);
  });

  return objectifiedParams;
}
*/

//////////// Based on Recursion With Console Logs ////////////

/*function paramsToObj(paramsStr) {
  const splitParams = paramsStr.split("&");
  console.log("splitParams", JSON.stringify(splitParams));

  const objectifiedParams = {};

  let currentObj = objectifiedParams;

  function objectify(paramsArr, curEl = 0) {
    console.log("Start Objectify", curEl);
    console.log("currentObj", JSON.stringify(currentObj));

    if (curEl >= paramsArr.length) return;

    const [keys, value] = paramsArr[curEl].split("=");
    console.log("paramsArr", paramsArr[curEl].split("="));
    const keysArr = keys.split(".");
    console.log("keysArr", JSON.stringify(keysArr));

    createObj(keysArr);

    currentObj[keysArr[keysArr.length - 1]] = decodeURIComponent(value);
    currentObj = objectifiedParams;
    console.log("currentObj", JSON.stringify(currentObj));
    curEl += 1;
    console.log("End Objectify", curEl);
    return objectify(paramsArr, curEl);
  }

  function createObj(keys, curEl = 0) {
    if (curEl >= keys.length - 1) return;

    console.log("currentObj before iteration", JSON.stringify(currentObj));

    const key = keys[curEl];
    console.log("key", key);

    if (!currentObj[key]) {
      currentObj[key] = {};
    }

    currentObj = currentObj[key];

    console.log("currentObj after iteration", JSON.stringify(currentObj));

    curEl += 1;

    return createObj(keys, curEl);
  }
  objectify(splitParams);
}*/

function paramsToObj(paramsStr) {
  const splitParams = paramsStr.split("&");

  const objectifiedParams = {};

  let currentObj = objectifiedParams;

  function objectify(paramsArr, curEl = 0) {
    if (curEl >= paramsArr.length) return;

    const [keys, value] = paramsArr[curEl].split("=");
    const keysArr = keys.split(".");

    createObj(keysArr);

    currentObj[keysArr[keysArr.length - 1]] = decodeURIComponent(value);
    currentObj = objectifiedParams;

    curEl += 1;
    return objectify(paramsArr, curEl);
  }

  function createObj(keys, curEl = 0) {
    if (curEl >= keys.length - 1) return;

    const key = keys[curEl];

    if (!currentObj[key]) currentObj[key] = {};

    currentObj = currentObj[key];

    curEl += 1;

    return createObj(keys, curEl);
  }

  objectify(splitParams);

  return objectifiedParams;
}

console.log(JSON.stringify(paramsToObj(inData)));

let test = {
  user: {
    name: {
      firstname: "Bob",
      lastname: "Smith",
    },
    favoritecolor: "Light blue",
  },
  experiments: {
    theme: "dark",
  },
  reliable: "true",
};

/*
console.log("keys", keys, "value", value);

    const keysSplit = keys.split(".");
    console.log("keysSplit", keys.split("."));

    if (keysSplit.length === 1) objectifiedParams[keysSplit[0]] = value;
    console.log("", objectifiedParams);

    if (keysSplit.length === 2) {
      let prevEl;
      keysSplit.forEach((el, index) => {
        console.log("el", el);
        if (index === 0) {
          objectifiedParams[el] = {};
        } else {
          console.log(objectifiedParams[prevEl]);
          console.log("value", value);
          objectifiedParams[prevEl][el] = value;
        }
        prevEl = el;
        console.log("objectifiedParams", JSON.stringify(objectifiedParams));
 */

/*    for (let i = keysArr.length - 2, counter = 1; i >= 0; i--, counter++) {
      console.log("iteration=", counter);
      console.log("nextObjBeforeIteration=", JSON.stringify(nextObj));
      // if (i === 0) {
      //   objectifiedParams[keysArr[i]] = nextObj;
      // }

      const obj = {};
      obj[keysArr[i]] = nextObj;
      nextObj = obj;
      console.log("nextObjAfterIteration=", JSON.stringify(nextObj));
      console.log(
        "objectifiedParamsAfterIteration",
        JSON.stringify(objectifiedParams)
      );
    }*/

/*
output
{
  user: {
    name: {
      firstname: 'Bob',
      lastname: 'Smith'
    },
    favoritecolor: 'Light Blue'
  },
  experiments: {
    theme: 'dark'
  },
  reliable: 'true'
}
*/
