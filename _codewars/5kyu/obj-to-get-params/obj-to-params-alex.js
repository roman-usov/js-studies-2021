function objectToQueryString(obj, prefix = "") {
  return Object.entries(obj)
    .map(([key, value]) => {
      const fullKey = prefix + key;

      if (typeof value !== "object") {
        return `${encodeURIComponent(fullKey)}=${encodeURIComponent(value)}`;
      }

      return objectToQueryString(value, fullKey + ".");
    })
    .filter(Boolean)
    .join("&");
}

console.assert(objectToQueryString({}) === "", "should be empty string");
console.assert(
  objectToQueryString({ a: true }) === "a=true",
  "single key should work"
);

console.assert(
  objectToQueryString({ a: true, b: "false" }) === "a=true&b=false",
  "2 keys should work"
);
console.assert(
  objectToQueryString({ a: true, b: "false", c: { test: 1 } }) ===
    "a=true&b=false&c.test=1",
  "internal keys should work"
);

console.assert(
  objectToQueryString({ a: true, b: "false", c: { test: 1, abc: true } }) ===
    "a=true&b=false&c.test=1&c.abc=true",
  "internal keys should work"
);

console.assert(
  objectToQueryString({
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
  }) ===
    "cash=usd&user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20blue&experiments.theme=dark&experiments.complexity.level=high&experiments.complexity.priority.set.top=true&reliable=true",
  "multiple internal keys should work"
);

console.log(
  objectToQueryString({
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
  })
);
