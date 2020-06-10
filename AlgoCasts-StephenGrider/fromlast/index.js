// --- Directions
// Given a linked list and integer n, return the element n
// spaces from the last node in the list.  Do not call the
// 'size' method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {

//set slow and fast to first node in the list
  let slow = list.getFirst();
  let fast = list.getFirst();

//advance fast forward by n steps (sets up a 1:n relationship)
  while (n > 0 ) {
    fast = fast.next;
    n--;
  }
    
//advance slow by 1
//advance fast by 1
  while(fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}

module.exports = fromLast;