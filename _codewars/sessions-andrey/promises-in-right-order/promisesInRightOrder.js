const urlsToCall = ["google.com", "yandex.ru", "amazon.com", "ebay.com"];

const processResponses = (responses) => {
  return responses;
};

const LIMIT = 2;

const provideOrderedResponses = (callLinks, limit, callback) => {
  let callsInProgress = 0;

  let orderNumber = 0;

  const results = [];

  const handler = (result, resultPosition) => {
    callsInProgress -= 1;

    results[resultPosition] = result;

    if (callLinks.length === orderNumber && callsInProgress === 0) {
      console.log("returned results", results);
      return callback(results);
    } else if (callLinks.length === orderNumber) {
      return;
    }

    callsInProgress += 1;

    const positionInResults =
      orderNumber; /*2, oN 2 pR 2, oN 3*/ /*3, oN 3 pR 3, oN 4*/

    const nextLink = callLinks[orderNumber];

    orderNumber += 1;

    callApiWithCache(nextLink).then((result) =>
      handler(result, positionInResults)
    );
  };

  callLinks.slice(0, limit).forEach((link) => {
    callsInProgress += 1;

    const positionInResults = orderNumber;

    orderNumber += 1;

    callApiWithCache(link).then((result) =>
      handler(result, positionInResults)
    ); /*0, oN 0 pR 0, oN 1*/ /*1, oN 1 pR 1, oN 2*/
  });
};

const fakeAPI = (url) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const response = {
        url,
      };
      resolve(response);
    }, Math.random() * 3000);
  });
};

// fakeAPI("youtube.com").then((res) => console.log(res));

const cacheFunction = (fn) => {
  const cache = {};

  return (arg) => {
    if (cache[arg]) {
      console.log("returned from cache", cache);

      return cache[arg];
    } else {
      const result = fn(arg);

      cache[arg] = result;

      console.log("called and saved in cache", cache);

      return result;
    }
  };
};

const callApiWithCache = cacheFunction(fakeAPI);


provideOrderedResponses(urlsToCall, LIMIT, processResponses);

/*

function callWithOrder(links, limit, cb) {
  let count = 0;
  let total = 0;
  const result = []
  
  const handler = (res, position) => {
      count -= 1
      result[position] = res;
      
      if (total === links.length && count === 0) {
          cb(result)
          return;
      } else if (total === links.length) {
          return;
      }
      
      count += 1
      
      const link = links[total++]
      const pos = total - 1
      get(link).then((r) => handler(r, pos));
  }


  links.slice(0, limit).forEach((link) => {
      count += 1;
      total += 1;
      const position = total - 1
      get(link).then((r) => handler(r, position))
  })
}

function fakeGet(link) {
  return new Promise((resolve) => {
      setTimeout(() => {
          const response = {
            link,
          };
          resolve(response);
      }, Math.random() * 5000)
  })
}

https://ya.cc/t/4L78_KNG3CQvbQ



callWithOrder(['google.com', 'sv', 'google.com'])

функция, которая делает вызов, имеет кэш, кладет в кэш
запустить параллельно вызовы по лимиту
отслеживать, сколько сейчас исполняется вызовов
если меньше лимита, то запускать еще вызовы, чтобы общее количество было равно лимиту

const cache = {};

function get(link) {
  if (cache[link]) {
      return cache[link];
  } else {
      cache[link] = fakeGet(link);
      return cache[link];
  }
}

get('jnd.com').then((res) => res)

5 линков, лимит 2
count // 0
get(0) start
count // 1
get(1) start
count // 2
get(0) finish
get(1) finish

Запустили два запроса
count = 2

cb0()
  count - 1
  count // 1
  get(2)
  count // 2

cb1()
     count - 1
     count // 1
     get(3)
     count // 2

count 1
get(2) start
count 2

*/

// Initial Exercises

/*

for (var i = 0; i < 10; i += 1) {
  function printWithDelay(count) {
      setTimeout(() => {
          conosle.log(count)
      }, 0)
  }
  printWithDelay(i);
  
  ((count) => {
      setTimeout(() => {
          conosle.log(count)
      }, 0)
  })(i)
  
  setTimeout((function (count) {
          conosle.log(count)
  }).bind(null, i), 0)
  
}

var i = 0

const print = () => {
  conosle.log(i)
}
 */
