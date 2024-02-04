// https://www.geeksforgeeks.org/priority-queue-using-binary-heap/
class PriorityQueue {
  constructor() {
    this.data = []
  }
  enqueue(item) {
    this.data.push(item)
    let ci = this.data.length - 1;
    while (ci > 0) {
      const pi = parseInt((ci - 1) / 2);
      if (this.data[pi] >= this.data[ci]) {
        break;
      } else {
        [this.data[pi], this.data[ci]] = [this.data[ci], this.data[pi]]
        ci = pi
      }
    }
  }
  dequeue() {
    const firstItem = this.data[0];
    this.data[0] = this.data.at(-1);
    this.data.pop();
    let pi = 0;
    while (pi < this.data.length) {
      let ci = pi * 2 + 1
      if (ci >= this.data.length) {
        break;
      }
      const ri = ci + 1;
      if (ri < this.data.length && this.data[ri] > this.data[ci]) {
        ci = ri;
      }
      if (this.data[pi] >= this.data[ci]) {
        break;
      } else {
        [this.data[pi], this.data[ci]] = [this.data[ci], this.data[pi]]
        pi = ci;
      }
    }
    return firstItem;
  }
  count() {
    return this.data.length;
  }
  peek() {
    return this.data[0]
  }
}