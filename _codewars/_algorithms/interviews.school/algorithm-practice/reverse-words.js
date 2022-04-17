function reverseWords(s) {
  const wordsArray = s.trim().replace(/\s{2,}/g, ' ').split(' ');
  let start = 0;
  let end = wordsArray.length - 1;

  while (start < end) {
    const startingWord = wordsArray[start];
    wordsArray[start] = wordsArray[end];
    wordsArray[end] = startingWord;
    start += 1;
    end -= 1;
  }

  return wordsArray.join(' ');
}