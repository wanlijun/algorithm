// https://www.geeksforgeeks.org/priority-queue-using-binary-heap/
class PriorityQueue {
  constructor() {
    this.data = []
  }
  // 元素先添加到最下一层的最左边，然后和父节点比较，如果大于则交换
  enqueue(item) {
    this.data.push(item);
    let ci = this.data.length - 1;
    while (ci > 0) {
      const pi = Math.floor((ci - 1) / 2);
      if (this.data[pi] > this.data[ci]) {
        break;
      } else {
        [this.data[pi], this.data[ci]] = [this.data[ci], this.data[pi]];
        ci = pi
      }
    }
  }
  // 将最后一个节点放到第一个位置，然后和自己的子节点比较，如果小于则交换
  dequeue() {
    const first = this.data[0]
    const last = this.data.length - 1;
    this.data[0] = this.data[last];
    this.data.pop()
    let pi = 0;
    const lastIdx = this.data.length - 1;
    while (pi < lastIdx) {
      let ci = 2 * pi + 1;
      if (ci > lastIdx) {
        break;
      }
      let ri = ci + 1;
      if (ci < lastIdx && this.data[ri] > this.data[ci]) {
        ci = ri;
      }
      if (this.data[pi] > this.data[ci]) {
        break;
      } else {
        [this.data[pi], this.data[ci]] = [this.data[ci], this.data[pi]]
        pi = ci;
      }
    }
    return first;
  }
  peek() {
    return this.data[0]
  }
  count() {
    return this.data.length
  }
}