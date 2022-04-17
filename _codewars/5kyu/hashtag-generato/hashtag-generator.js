function hashtagGenerator(input = "", maxLength = 140) {
  const arr = input.replace(/'/g, "").replace(/\W/g, " ").trim().split(" ");
  const HASH = "#";
  const tag = arr.reduce((hash, currWord) => {
    return hash + currWord.slice(0, 1).toUpperCase() + currWord.slice(1);
  }, "");

  if (tag.length > maxLength || tag === "") {
    return false;
  }

  return HASH + tag;
}

module.exports = hashtagGenerator;
