class PriorityQueue {
  items = [];

  add(el) {
    if (this.items.length === 0 || el >= Math.max(...this.items)) {
      this.items.push(el);
    } else {
      for (let i = 0; i < this.items.length; i += 1) {
        if (el >= this.items[i] && el < this.items[i + 1]) {
          this.items.splice(i + 1, 0, el);
          break;
        }
      }
    }
    return this.items;
  }

  remove() {
    if (this.items.length === 0) {
      return this.items;
    }

    for (let i = 0; i < this.items.length; i += 1) {
      if (this.items[i] === Math.min(...this.items)) {
        this.items.splice(i, 1);
        break;
      }
    }
    return this.items;
  }

  get max() {
    console.log(Math.max(...this.items));
    return Math.max(...this.items);
  }

  get min() {
    console.log(Math.min(...this.items));
    return Math.min(...this.items);
  }
}

const priorityQueue = new PriorityQueue();

console.log(priorityQueue.remove());
console.log(priorityQueue.remove());
console.log(priorityQueue.add(2));
console.log(priorityQueue.add(7));
console.log(priorityQueue.add(6));
