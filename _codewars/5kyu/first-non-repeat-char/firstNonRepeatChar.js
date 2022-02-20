function first_non_repeating_letter(str) {
  /*
    Вход "", выход ""
    Проверяем вход на пустую строку. Возвращаем пустую строку.
  */
  // if (str === "") {
  //   return "";
  // }

  /* 
  - Решение через filter
    - Разбиваем строку на массив
    - Цикл for
        - каждый элемент цикла проверяем с исходным массиов + фильтр по текущему элементу
        - получаем новый массив, где все элементы равны текущему элементу из for
        - проверяем длину полученного отфильтрованного массива
            - если длина равно 1 - то этот элемент из массива уникальный
            - пушим этот элемент в массив уникальных элементов
        - проверяем длину массива уникальных элементов
            - если длина 0 - возвращаем пустую строку
            - иначе возвращаем первый элемент
  */
  const arrayFromString = str.split("");
  // "fFs"
  for (let i = 0; i < arrayFromString.length; i += 1) {
    const curr = arrayFromString[i];
    const duplicatedValues = arrayFromString.filter(el => el.toLowerCase() === curr.toLowerCase());

    if (duplicatedValues.length === 1) {
      return curr;
    }
  }

  return "";

  /*
    Взять первый символ и в цикле сравнивать его с каждым следующим.
    Если есть хотя бы одно совпадение - выходим из цикла и возвращаем пустую строку
  */
  // for (let i = 1; i < str.length; i += 1) {
  //   if (str[0] === str[i]) return "";
  // }

  /*
    Вход: Две буквы одинаковые ("fF"), в разных регистрах, выход "f"
      - Преобразовать исходную строку в массив
      - В цикле
        - slice остаток исходного массива от текущего индекса+1 до конца массива
        - в получившемся массиве ищем наличие текущего элемента цикла
        - Если его там нет - закидываем этот элемент в массив с уникальными значениями
    Возвращаем первый элемент уникального массива
    */
  /*
  // console.log("arrayFromString: ", arrayFromString);
  for (let i = 0; i < arrayFromString.length; i += 1) {
    const sliceFromArray = arrayFromString.slice(i + 1);
    if (!sliceFromArray.length) {
      const sliceFromArrayExcludeLast = arrayFromString.slice(-1);
      // console.log("sliceFromArrayExcludeLast: ", sliceFromArrayExcludeLast);
      const last = arrayFromString[arrayFromString.length - 1];
      if (!sliceFromArrayExcludeLast.includes(last)) {
        uniqueArray.push(last);
      }
    }

    // console.log("sliceFromArray: ", sliceFromArray);
    const curElement = arrayFromString[i];
    // console.log("curElement: ", curElement);
    // console.log(
    //   "!sliceFromArray.includes(curElement): ",
    //   !sliceFromArray.includes(curElement)
    // );
    if (!sliceFromArray.includes(curElement)) {
      uniqueArray.push(curElement);
    }
    // console.log("========== uniqueArray: ", uniqueArray);
  }
  const firstUnique = uniqueArray[0] || "";
  return firstUnique;
  */
}
// first_non_repeating_letter("aas");
module.exports = first_non_repeating_letter;
