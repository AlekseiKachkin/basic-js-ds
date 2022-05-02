const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
 class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}


function removeKFromList( l, k ) {
  let head = l
  let current = l;  
  let prev = null
  if (head.value === k) {
    head = head.next;
    current = head;    
  } else {
    current = current.next;
    prev = head
  }
  

  while(current.next !== null) {
    if (current.value === k) {
      current = current.next
      prev.next = current
    } else {
      prev = current;
      current = current.next      
    }
  }
  if (current.value === k) {
    prev.next = null
  }
  return head;
}

function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }

    return new ListNode(cur);
  }, null);
}

let example = convertArrayToList([3, 1, 2, 3, 4, 5]);
console.log('example');
console.log(example.next.next.next);
console.log('removeKFromList( example, 3 )');
console.log(removeKFromList( example, 3 ));

module.exports = {
  removeKFromList
};
