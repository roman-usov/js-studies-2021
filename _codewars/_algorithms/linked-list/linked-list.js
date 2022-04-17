class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const example = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: null,
    },
  },
};

class LinkedList {
  constructor() {
    this.linkedList = null;
    this.length = 0;
  }

  addToTheEnd(value) {
    let node = new Node(value);

    if (this.length === 0) {
      this.linkedList = node;

      console.log("newly assigned head", this.linkedList);
    } else {
      let current = this.linkedList;

      console.log("existing current", current);

      while (current.next) {
        current = current.next;
        console.log("current in while", current);
      }

      current.next = node;
      console.log("new current", current);
    }

    this.length++;
  }

  insertInPosition(position, value) {
    if (position < 0 || position > this.length) {
      throw new Error("Incorrect position value");
    }

    let node = new Node(value);

    if (position === 0) {
      node.next = this.linkedList;
      this.linkedList = node;
    } else {
      let current = this.linkedList;
      console.log("starting current", current);

      let prev = null;
      console.log("current prev", prev);

      let index = 0;
      console.log("current index", index);

      while (index < position) {
        prev = current;
        console.log("new prev", prev);

        current = current.next;
        console.log("new current", current);

        index++;
      }

      prev.next = node;
      console.log("inserted node in prev.next", prev);

      node.next = current;
      console.log("added the remaining list to new node.next", node);
    }

    this.length++;
  }

  getNodeByPosition(position) {
    if (position < 0 || position > this.length) {
      throw new Error("Incorrect position value");
    }

    let current = this.linkedList;
    let index = 0;

    while (index < position) {
      current = current.next;
      index++;
    }

    return current;
  }

  removeFromPosition(position) {
    if (position < 0 || position > this.length) {
      throw new Error("Incorrect position value");
    }

    let current = this.linkedList;

    if (position === 0) {
      this.linkedList = current.next;
    } else {
      let prev = null;
      let index = 0;

      while (index < position) {
        prev = current;
        current = current.next;
        index++;
      }

      prev.next = current.next;

    }

    this.length--;

    console.log('current', JSON.stringify(current));
  }
}

const linkedList = new LinkedList();

linkedList.addToTheEnd(1);
linkedList.addToTheEnd(2);
linkedList.addToTheEnd(3);

linkedList.insertInPosition(1, 1.5);

console.log("linkedList", JSON.stringify(linkedList));

console.log(JSON.stringify(linkedList.getNodeByPosition(2)));

linkedList.removeFromPosition(1);

console.log(JSON.stringify(linkedList));
