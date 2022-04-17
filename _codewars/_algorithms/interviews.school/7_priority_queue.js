class PriorityQueue {
  items = [1, 2, 5, 6];

  add(el) {
    this.items.push(el);
    this.items.sort((a, b) => a - b);
    console.log(this.items);
  }

  remove() {
    this.items.sort((a, b) => b - a);
    this.items.pop();
    this.items.sort((a, b) => a - b);
    console.log(this.items);
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

priorityQueue.remove();

/* class PriorityQueue {
  items = [1,2,5,6];

  add(el) {
      
    ///
    for (let i = 0; i < this.items.length; i += 1) {
      if (this.items.length === 0 || el >= Math.max(this.items)) this.items.push(el);

      if (el >= this.items[i] && el < this.items[i + 1]) {
        this.items.splice(i + 1, 0, el);
      }
      break;
    }
    console.log(this.items);
  }

  remove() {
    const min = Math.min(...this.items);
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] === min) {
        this.items.splice(i, 1);
        i -= 1;
      }
    }
    console.log(this.items);
  }

  get max() {
    console.log(Math.max(...this.items));
    return Math.max(...this.items);
  }

  get min() {
    console.log(Math.min(...this.items));
    return Math.min(...this.items);
  }
} */
