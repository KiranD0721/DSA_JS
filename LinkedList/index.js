/* -------------- LinkedList------------------------------- */

/*

It is linear data structure 
collection of nodes
nodes  --> collection of data and address of next node

Advantages--
It is dynamic D.S
Can be shrinked the runtime
Insertion and deletion is easy

Types of LinkedList

Singly LL
Doubly LL
Circular LL
Circular Doubly LL

*/

//Implementation of node

// class Node{
//     constructor(data){
//         this.data = data; //Data
//         this.next = null; // Reference to next node
//     }
// }

// //example

// const node1 = new Node(1);
// const node2 = new Node(2);

// //Connecting node1 and node2
// node1.next = node2;

// //Print data and reference or memory address of node1 and node2

// console.log(node1.data);
// console.log(node1);
// //Memory address
// console.log(Object.prototype.toString.call(node1));

// console.log(node2.data);
// console.log(node2);
// //Memory address
// console.log(Object.prototype.toString.call(node2));

//Lets insert the data from beginning-----------------------------------


// class Node{
//     constructor(data){
//         this.data  = data;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor(){
//         this.head = null;
//     }

//     //Insert at the beginning 
//     insertFirst(data){
//         const newNode = new Node(data);
//         newNode.next = this.head;
//         this.head = newNode
//     }

//     //Display the linked List
//     display(){
//         let current = this.head;

//         while(current){
//             console.log(current.data);
//             current = current.next;
//         }
//     }
// }

// const linkedList = new LinkedList();
// linkedList.insertFirst(1);
// linkedList.insertFirst(2); // Insert at the beginning;
// linkedList.insertFirst(12);

// console.log('Linked List :')
// linkedList.display();

//Lets Insert the data at the end---------------------------

// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//     }

//     insertLast(data){
//         const newNode = new Node(data);

//         if(!this.head){
//             this.head = newNode;
//             this.tail = newNode;
//         }else{
//             this.tail.next = newNode;
//             this.tail  = newNode;
//         }
//     }

//     //Display list
//     display(){
//         let current = this.head;
//         while(current){
//             console.log(current.data)
//             current = current.next;

//         }
//     }
// }

// const singleLinkedList = new LinkedList();
// singleLinkedList.insertLast(1);
// singleLinkedList.insertLast(2);
// singleLinkedList.insertLast(3);
// singleLinkedList.display();