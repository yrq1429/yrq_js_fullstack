import LinkedListNode from './LinkedListNode'
// 怎么形成一个链表？ 结点链起来？ 数据集合从开始到结束显示出来

export default class LinkedList {
  constructor () {
    this.head = null; //头
    this.tail = null; //尾
  }
  toString (callback) {
    return this.toArray().map(node => node.toString(callback)).toString()
  }
  toArray () {
    const nodes = [];
    let currentNode = this.head;
    while(currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }
    return nodes;
  }
  append (value) {
    const newNode = new LinkedListNode(value);
    // 1. 空的 head为空 {value, next}
    // 2. 非空 tail.next 为null
    while (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }
  prepend (value) {
    const newNode = new LinkedListNode(value, this.head);
    if (!this.tail) {
      this.tail = newNode;
    }
    this.head = newNode;
    return this
  }
  delete (value) {
    if (!this.head) {
      return null;
    }
    let deleteNode = null;
    // 判断一下头结点是否要删除
    while (this.head && this.head.value === value) {
      deleteNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;
    if (currentNode !== null) {
      while(currentNode.next) {
        if (currentNode.next.value === value) {
          deleteNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    if (this.tail.value === value) {
      this.tail = currentNode
    }
    return deleteNode;
  }
  find ({ value = undefined, callback = undefined}) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode) {
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }

      if (value !== undefined && currentNode.value ===  value) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }
}