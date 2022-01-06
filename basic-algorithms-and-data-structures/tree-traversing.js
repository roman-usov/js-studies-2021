"use strict";

////// Tree Traversing (Recursive)

const tree = [
  {
    value: 5,
    children: [
      {
        value: 10,
        children: [
          {
            value: 11,
          },
        ],
      },
      {
        value: 7,
        children: [
          {
            value: 5,
            children: [
              {
                value: 1,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    value: 5,
    children: [
      {
        value: 10,
      },
      {
        value: 15,
      },
    ],
  },
];

const smallTree = [
  {
    value: 5,
    children: [
      {
        value: 10,
        children: [
          {
            value: 11,
          },
        ],
      },
    ],
  },
  {
    value: 6,
    children: [
      {
        value: 10,
      },
    ],
  },
];

const recursiveTreeSum = (tree) => {
  let sum = 0;
  tree.forEach((node) => {
    sum += node.value;
    if (!node.children) {
      return node.value;
    }
    sum = sum + recursiveTreeSum(node.children);
  });
  return sum;
};

console.log(recursiveTreeSum(smallTree));

const iterativeTreeSum = (tree) => {
  if (!tree.length) {
    return 0;
  }
  let sum = 0;
  let stack = [];
  tree.forEach((node) => stack.push(node));
  while (stack.length) {
    const node = stack.pop();
    sum += node.value;
    if (node["children"]) {
      node["children"].forEach((child) => stack.push(child));
    }
  }
  return sum;
};

const treeSum = iterativeTreeSum(smallTree);
console.log(treeSum);
