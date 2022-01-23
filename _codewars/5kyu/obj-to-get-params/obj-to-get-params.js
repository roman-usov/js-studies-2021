"use strict";

/*const inData = {
  experiments: {
    experiment: {
      theme: "dark",
      complexity: "high",
    },
  },
  reliable: true,
};*/

/*const inData = {
  reliable: true,
};*/

/*const inData = {
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
};*/

// Case 0
/*const inData = {
  experiments: {
    theme: "dark",
    complexity: "high",
  },
};*/

// Case 1
/*const inData = {
  experiments: {
    theme: "dark",
    complexity: "high",
  },
  reliable: "true",
};*/

// Case 2

/*
const inData = {
  experiments: {
    theme: {
      color: "dark",
    },
    complexity: "high",
  },
  reliable: "true",
};
*/

// Case 3

/*const inData = {
  cash: "usd",
  user: {
    name: {
      firstname: "Bob",
      lastname: "Smith",
    },
    favoritecolor: "Light blue",
  },
  experiments: {
    theme: "dark",
    complexity: {
      level: "high",
      priority: {
        set: {
          top: true,
        },
      },
    },
  },
  reliable: "true",
};*/

const inData = {
  user1: {
    name: "Alex",
  },
  user2: {
    name: "Alex2",
  },
};

const getParams = function (paramsObj, parents = new Map()) {
  const inObject = paramsObj;

  // The function below creates a map linking parent and sub-parent keys
  function getParents(inObj) {
    Object.entries(inObj).forEach(([key, value]) => {
      if (typeof value === "object") {
        let obj = value;
        let objKeys = Object.keys(obj);
        //console.log("objKeys: ", objKeys);
        objKeys.forEach((objKey) => {
          parents.set(objKey, key);
        });
        getParents(value);
      }
    });
  }

  getParents(inObject);
  console.log("parents", parents);

  // The function below returns an array of arrays, each of which contains the lowest level key-value pairs
  function getKeysValues(obj, keysValuesArr = []) {
    const keysAndValues = Object.entries(obj);
    let keyValues = keysValuesArr;

    keysAndValues.forEach(([key, value]) => {
      if (typeof value === "object") {
        getKeysValues(value, keysValuesArr);
      } else {
        keyValues.push([key, value]);
      }
    });
    console.log("keyValues", JSON.stringify(keyValues));
    return keyValues;
  }

  const keyValues = getKeysValues(inObject);
  //console.log("final key values", keyValues);

  let chain = "";

  //console.log("Parents Final", parents);

  // The function below puts together final strings out of the lowest-level key-value pairs received from getKeyValues()
  // and corresponding parents and sub-parents from the map
  function getChain(k, map, chain = []) {
    const newChain = chain;
    if (!map.get(k)) {
      return k;
    } else {
      if (!newChain.includes(k)) {
        newChain.unshift(k);
      }
      //console.log("newChain", JSON.stringify(newChain));
      const el = map.get(k);
      newChain.unshift(el);
      getChain(el, map, newChain);
    }
    return newChain.join(".");
  }

  // Here, we iterate over the received lowest-level key-value pairs and put together the final params chain
  keyValues.forEach(([key, value]) => {
    chain += `${getChain(key, parents)}=${value}&`;
  });

  const finalChain = chain.slice(0, -1);
  //console.log("final chain", finalChain);

  return finalChain;
};

const result = getParams(inData);
console.log(result);
