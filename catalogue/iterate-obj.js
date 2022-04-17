const arr = [
  { id: 1 },
  { id: 2, children: [{ id: 3 }, { id: 4, children: [{ id: 5 }, { id: 6, children: [{id: 7}, {id: 8}] }] }] },
];

function findById(source, id, prev = []) {
  let found;
  
  for (let i = 0, len = source.length; i < len; i += 1) {
    const obj = source[i];

    if (obj.id === id) {
      found = obj;
      return [found, prev];
    }

    if (obj.children) {
      const result = findById(obj.children, id, prev.concat([obj]));

      if (result) {
        return result;
      }
    }
  }
}
  
  console.log(findById(arr, 8));
