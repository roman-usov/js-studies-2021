const promisify = (funcWithCallback) => {
  return (...args) => {
    return new Promise((resolve, reject) => {
      funcWithCallback(...args, (err, result) => {
        if (err !== null) {
          reject(err);
        }
        resolve(result);
      });
    });
  };
};

readFile("", "", (err, result) => {
  if (err !== null) {
  }
});

const readFilePromise = promisify(readFile);

readFilePromise()
  .then((result) => {})
  .catch((err) => {});
