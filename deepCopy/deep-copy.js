const obj = {
  name: "Kyle",
  friends: {
    mike: {
      age: 25,
      yearsOfFriendship: 2,
      address: {
        street: 'Low Street',
        house: 25
      }
    }
  },
  address: {
    street: 'High Street',
    house: 4
  }
}

function deepCopy(obj) {
  const keysAndValues = Object.entries(obj);

  const copiedObj = {};

  keysAndValues.forEach(([key, value]) => {
    if (value && typeof value === 'object') {
        copiedObj[`${key}`] = deepCopy(value);
      console.log('copiedObj', copiedObj);
    } else {
      copiedObj[`${key}`] = value;
      console.log('copiedObj', copiedObj);
    }

  })
  return copiedObj;
}

const obj2 = deepCopy(obj);

console.log(JSON.stringify(deepCopy(obj)));

/*
  1.
  Start
  name: Kyle
  copiedObj {} 1
  End
  copiedObj {
    name: Kyle
  } 1

  2.
  Start
  friends {...}
  copiedObj {
    name: Kyle
  } 1

  End
  copiedObj {
    name: Kyle
    friends: deepCopy(friends {...})
  } 1

  2.1.
  Start
  mike {...}
  copiedObj {
    name: Kyle
    friends: deepCopy(friends {...})
  } 1
  copiedObj {} 2

  End
  copiedObj {
    mike: deepCopy(mike {...})
  } 2

  2.1.1.
  Start
  age: 25
    copiedObj {
    name: Kyle
    friends: deepCopy(friends {...})
  } 1
    copiedObj {
    mike: deepCopy(mike {...})
  } 2
  copiedObj {} 3

  End
    copiedObj {
        age: 25
    } 3

  2.1.2
  Start
  yearsOfFriendship: 2
  copiedObj {
    name: Kyle
    friends: deepCopy(friends {...})
  } 1
  copiedObj {
    mike: deepCopy(mike {...})
  } 2
  copiedObj {
     age: 25
  } 3

  End
    copiedObj {
     age: 25,
     yearsOfFriendship: 2
  } 3

  2.1
  Start
  copiedObj {
    name: Kyle
    friends: deepCopy(friends {...})
  } 1
  copiedObj {
    mike: deepCopy(mike {...})
  } 2

   copiedObj {
     age: 25,
     yearsOfFriendship: 2
  } 3

  End
  copiedObj {
    mike: {
     age: 25,
     yearsOfFriendship: 2
    } 3
  } 2

 2
 Start
 copiedObj {
    name: Kyle
    friends: deepCopy(friends {...})
  } 1

  copiedObj {
    mike: {
     age: 25,
     yearsOfFriendship: 2
    } 3
  } 2

  End
   copiedObj {
    name: Kyle
    friends: {
      mike: {
       age: 25,
       yearsOfFriendship: 2
      } 3
    } 2
  } 1
*/

const arrOfArr = [
  [
    {
      name: "Kyle",
      age: 25
    },
    {
      name: "Pete",
      age: 26
    },
  ],
  [
    {
      name: "Mike",
      age: 27
    },
    {
      name: "Joey",
      age: 28
    },
  ]
]

function twoDimensionArrayDeepCopy (arr) {
 return arr.map(subarr => subarr.map(obj => deepCopy(obj)));
}

console.log(twoDimensionArrayDeepCopy(arrOfArr));
