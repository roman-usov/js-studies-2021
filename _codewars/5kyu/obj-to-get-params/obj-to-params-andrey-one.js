// const exampleData = {
//   user: {
//     name: {
//       firstname: "Bob",
//       lastname: "Smith",
//     },
//     favoritecolor: "Light Blue",
//   },
//   experiments: {
//     theme: "dark",
//   },
//   reliable: "true",
// };

const exampleData = {
  user: {
    name: {
      firstname: "Bob",
    },
    favoritecolor: "Light Blue",
  },
};

function extractValues(obj, prefix) {
  function _extractValues(obj, prefix = "") {
    const keys = Object.keys(obj);

    const keyStringsAndValues = keys.flatMap((key) => {
      const prefixedKey = prefix ? `${prefix}.${key}` : key;

      const value = obj[key];

      if (typeof value === "object" && value !== null) {
        return _extractValues(value, prefixedKey);
      }

      return [prefixedKey, value];
    });

    return keyStringsAndValues;
  }

  const values = _extractValues(obj, prefix);

  console.log(JSON.stringify(values));

  return values
    .reduce((acc, cur) => {
      console.log("acc", JSON.stringify(acc));
      console.log("cur", JSON.stringify(cur));
      if (acc.length === 0) {
        acc.push([cur]);
        console.log("acc.length === 0", JSON.stringify(acc));
        return acc;
      }

      const last = acc.pop();

      if (last.length === 2) {
        acc.push(last);
        acc.push([cur]);
      } else {
        last.push(cur);
        acc.push(last);
      }

      return acc;
    }, [])
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join("&");
}

console.warn(extractValues(exampleData));
