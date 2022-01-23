const exampleData = {
  user: {
    name: {
      firstname: "Bob",
      lastname: "Smith",
    },
    favoritecolor: "Light Blue",
  },
  experiments: {
    theme: "dark",
  },
  reliable: "true",
};

const exampleData1 = {
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
};

function extractValues(obj, prefix) {
  function _extractValues(obj, prefix = "") {
    const keys = Object.keys(obj);

    const keysAndValues = keys.map((key) => {
      const prefixedKey = prefix ? `${prefix}.${key}` : key;
      const value = obj[key];

      if (typeof value === "object" && value !== null) {
        return _extractValues(value, prefixedKey);
      }

      return {
        [prefixedKey]: value,
      };
    });

    console.log("keysAndValues", JSON.stringify(keysAndValues));

    const keysAndValuesObj = keysAndValues.reduce((acc, cur) => {
      return {
        ...acc,
        ...cur,
      };
    }, {});

    console.log("keysAndValuesObj", JSON.stringify(keysAndValuesObj));
    /*return keys
      .map((key) => {
        const prefixedKey = prefix ? `${prefix}.${key}` : key;
        const value = obj[key];

        if (typeof value === "object" && value !== null) {
          return _extractValues(value, prefixedKey);
        }

        return {
          [prefixedKey]: value,
        };
      })
      .reduce((acc, cur) => {
        return {
          ...acc,
          ...cur,
        };
      }, {});*/

    return keysAndValuesObj;
  }

  const values = _extractValues(obj, prefix);

  return Object.entries(values)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join("&");
}

console.warn(extractValues(exampleData1));
