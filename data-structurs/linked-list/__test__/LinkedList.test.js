import LinkedList from "../LinkedList";

describe('LinkedList', () => {
  it('should create empty linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList.toString()).toBe('');
  });
  it('should append node to linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList.head).toBeNull();
    expect(linkedList.head).toBeNull();
    
    // linkedList.append(1);
    // linkedList.append(2);
    // 链式调用
    linkedList.append(1)
              .append(2)
              .append(3)

    expect(linkedList.toString()).toBe('1,2,3');
  })
  it('should prepend node to linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append(1)
              .append(3);
    expect(linkedList.head.toString()).toBe('1');
    expect(linkedList.tail.toString()).toBe('3');

    linkedList.prepend(2);
    expect(linkedList.toString()).toBe('2,1,3');
    
  })
  it('should delete node by value from linked list', () => {
    // 如何删除？ 前一个结点的next 前一个结点的next.next
    const linkedList = new LinkedList();
    expect(linkedList.delete(5)).toBeNull();
    linkedList
      .append(1)
      .append(2)
      .append(3)
      .append(3)      
      .append(3)      
      .append(3)      
      .append(3)
      .append(4)                  
      .append(5)
    expect(linkedList.head.toString()).toBe('1');                  
    expect(linkedList.tail.toString()).toBe('5');
    
    const deletedNode = linkedList.delete(3);
    expect(deletedNode.value).toBe(3);
    expect(linkedList.toString()).toBe('1,2,4,5')
  })
  it('should find ', () => {
    const linkedList = new LinkedList();
    expect(linkedList.find({value: 5})).toBeNull();

    linkedList
      .append(1)
      .append(2)
      .append(3)

    const node = linkedList.find({value: 2});
    expect(node.value).toBe(2);
  })
})