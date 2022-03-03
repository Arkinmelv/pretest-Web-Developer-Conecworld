class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}
var head;
function rotateRight() {
  if (head == null || head.next == null)
    return;

  var secLast = null;
  var last = head;
  while (last.next != null) {
    secLast = last;
    last = last.next;
  }

  secLast.next = null;
  last.next = head;
  head = last;
 
}

function push(new_data) {
  var new_node = new Node(new_data);
  new_node.next = head;
  head = new_node;
}

function printList() {
  var temp = head;
  while (temp != null) {
    console.log(temp.data)
    temp = temp.next;
  }
  return;
}

push(40);
push(30);
push(20);
push(10);

console.log("====Sebelum====")
printList();

rotateRight();

console.log("===Sesudah====")
printList();