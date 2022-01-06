//const fetch = require("node-fetch");
/* const identifyWhichWordGoesFirst = function (string1, string2) {
  let a = 0;
  let b = 0;
  while (a < string1.length && b < string2.length) {
    let m = string1[a];
    let n = string2[b];
    if (m < n) {
      return string1;
    } else if (n < m) {
      return string2;
    } else {
      a++;
      b++;
    }
  }
};

const wordSortTest = identifyWhichWordGoesFirst(
  wordSortTestArray[0],
  wordSortTestArray[1]
);
console.log(wordSortTest); */

const payload = new URLSearchParams({
  s: "e",
});
/*
  const getAscCode = async function () {
    let response = await axios.post(
      "https://string-to-ascii.justyy.workers.dev/api/string-to-ascii/?cached",
      payload,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Cookie: "__cfduid=dcd9a2874df6fd27af23c8571537a294a1618253387",
        },
      }
    );
    let data = response.data;
    console.log(data);
  };

  getAscCode(); */

/* const getAscCode = async function () {
    let response = await fetch(
      "https://string-to-ascii.justyy.workers.dev/api/string-to-ascii/?cached",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Cookie: "__cfduid=dcd9a2874df6fd27af23c8571537a294a1618253387",
        },
        body: payload,
      }
    );
    let data = await response.json();
    return data;
  };

  const output = getAscCode();
  console.log(output); */

/* const getAscCode = async function () {
    fetch(
      "https://string-to-ascii.justyy.workers.dev/api/string-to-ascii/?cached",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Cookie: "__cfduid=dcd9a2874df6fd27af23c8571537a294a1618253387",
        },
        body: payload,
      }
    )
      .then((response) => response.json())
      .then((data) => (testApi = data));
  }; */

/* let testApi;

const getAscCode = async function () {
  let response = await fetch(
    "https://string-to-ascii.justyy.workers.dev/api/string-to-ascii/?cached",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Cookie: "__cfduid=dcd9a2874df6fd27af23c8571537a294a1618253387",
      },
      body: payload,
    }
  );
  let data = await response.json();
  function returnValue(data) {
    return data;
  }
  await returnValue(data);
};
 */
//testApi = await getAscCode();

//console.log(`This is your response: ${myData}`);

/// XMLHttpRequest ///
// https://javascript.info/xmlhttprequest

let myResult;
let cookieToGet = "asc";

document.cookie = "Cookie=__cfduid=dcd9a2874df6fd27af23c8571537a294a1618253387";
//let asciiCookie = document.cookie;
//let cookieValue = "Cookie";
//console.log("this is my cookie " + asciiCookie);

const setCookie = function (cookieValue) {
  document.cookie = "asc" + "=" + cookieValue;
};

const myCall = function (callback) {
  let getAscCodeValue = new XMLHttpRequest();
  getAscCodeValue.open(
    "POST",
    "https://string-to-ascii.justyy.workers.dev/api/string-to-ascii/?cached",
    ["async"]
  );
  getAscCodeValue.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded"
  );
  //getAscCodeValue.setRequestHeader("Cookie", document.cookie);
  getAscCodeValue.send([payload]);
  getAscCodeValue.onload = function () {
    callback(getAscCodeValue.responseText);
  };
};

const getCookie = function (cookieName) {
  console.log(document.cookie);
  //returns a string with all cookies
  // Split cookie string and get all individual name=value pairs in an array
  let cookieArray = document.cookie.split(";");
  console.log(cookieArray);
  //returns ["__cfduid=dcd9a2874df6fd27af23c8571537a294a1618253387", " Cookie=__cfduid=dcd9a2874df6fd27af23c8571537a294a1618253387", " asc="101""]
  for (let i = 0; i < cookieArray.length; i++) {
    let cookiePair = cookieArray[i].split("=");
    console.log(cookiePair);
    if (cookieName === cookiePair[0].trim()) {
      //trim removes white space that we have after splitting cookie pairs
      return decodeURIComponent(cookiePair[1]);
    } else {
      console.log(`this is not your cookie`);
    }
  }
};

myResult = myCall(setCookie);

let test = getCookie(cookieToGet);
console.log(test);
