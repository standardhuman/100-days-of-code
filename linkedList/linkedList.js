const Node = require('./linkedNode.js');

console.log(Node);

console.log(Node.word);

function start (){
  console.log("start");
  var first = new Node("a", null)
  var second = new Node("b", null)
  first.next = second
  var third = new Node("c", null)
  second.next = third
  printLinkedList(first)
}

function printLinkedList(startNode) {
 console.log("entering print link list")
  console.log(startNode.letter);
  if (startNode.next !== null) {
    printLinkedList(startNode.next)
  }
}

start()
