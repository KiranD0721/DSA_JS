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

//--------insert in the middle------------------

// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList{
//     constructor(data){
//         this.head = null;
//         this.tail = null;
//     }

//     insertFirst(data){
//         const newNode = new Node(data);

//         if(!this.head){
//             this.head = newNode;
//             this.tail = newNode;
//         }
//         newNode.next = this.head;
//         this.head = newNode;
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

//     insertMiddle(data){
//         const newNode = new Node(data)

//         if(!this.head){
//             this.head = newNode;
//             return;
//         }

//         let slow = this.head;
//         let fast = this.head;

//         while(fast && fast.next){
//             fast = fast.next.next;
//             if(!fast){
//                 break;
//             }
//             slow = slow.next;
//         }

//         newNode.next = slow.next;
//         slow.next = newNode;
//     }

//     display(){
//         let current = this.head;
//         while(current){
//             console.log(current.data);
//             current = current.next;
//         }
//     }
// }

// const singleLinkedList = new LinkedList();
// singleLinkedList.insertLast(1);
// singleLinkedList.insertLast(2);
// singleLinkedList.insertLast(4);
// singleLinkedList.insertLast(5);
// singleLinkedList.display();
// console.log('---------------------------------------')
// singleLinkedList.insertMiddle(3);
// singleLinkedList.display();

/* --------------Insert at beginning , end , middle and any position--------------- */
// class Node {
//     constructor(data) {
//       this.data = data;
//       this.next = null;
//     }
//   }
  
//   class SinglyLinkedList {
//     constructor() {
//       this.head = null;
//     }
  
//     // Insert at the beginning of the linked list
//     insertAtBeginning(data) {
//       const newNode = new Node(data);
//       newNode.next = this.head;
//       this.head = newNode;
//     }
  
//     // Insert at the end of the linked list
//     insertAtEnd(data) {
//       const newNode = new Node(data);
  
//       if (!this.head) {
//         this.head = newNode;
//         return;
//       }
  
//       let current = this.head;
//       while (current.next) {
//         current = current.next;
//       }
  
//       current.next = newNode;
//     }
  
//     // Insert in the middle of the linked list
//     insertInMiddle(data) {
//       const newNode = new Node(data);
  
//       if (!this.head) {
//         this.head = newNode;
//         return;
//       }
  
//       let slow = this.head;
//       let fast = this.head;
  
//       while (fast && fast.next) {
//         fast = fast.next.next;
//         if (!fast) break;
//         slow = slow.next;
//       }
  
//       newNode.next = slow.next;
//       slow.next = newNode;
//     }
  
//     // Insert at any position in the linked list
//     insertAtPosition(data, position) {
//       const newNode = new Node(data);
  
//       if (position === 0) {
//         newNode.next = this.head;
//         this.head = newNode;
//         return;
//       }
  
//       let current = this.head;
//       let count = 0;
  
//       while (current && count < position - 1) {
//         current = current.next;
//         count++;
//       }
  
//       if (!current) {
//         console.log("Position exceeds the length of the list. Inserting at the end.");
//         this.insertAtEnd(data);
//         return;
//       }
  
//       newNode.next = current.next;
//       current.next = newNode;
//     }
  
//     // Display the linked list
//     display() {
//       let current = this.head;
  
//       while (current) {
//         console.log(current.data);
//         current = current.next;
//       }
//     }
//   }
  
//   // Example usage:
//   const linkedList = new SinglyLinkedList();
//   linkedList.insertAtBeginning(1);
//   linkedList.insertAtBeginning(2);
//   linkedList.insertAtEnd(4);
//   linkedList.insertAtEnd(5);
//   linkedList.display();
  
//   console.log("Linked List after inserting in the middle:");
//   linkedList.insertInMiddle(3);
//   linkedList.display();
  
//   console.log("Linked List after inserting at position 2:");
//   linkedList.insertAtPosition(6, 2);
//   linkedList.display();

/* -------------------------Deleting the node----------------------------- */

// class Node {
//     constructor(data) {
//       this.data = data;
//       this.next = null;
//     }
//   }
  
//   class SinglyLinkedList {
//     constructor() {
//       this.head = null;
//     }
//     // Delete the node at the beginning of the linked list
//     deleteAtBeginning() {
//       if (!this.head) {
//         console.log("List is empty. Cannot delete from an empty list.");
//         return;
//       }
  
//       this.head = this.head.next;
//     }
  
//     // Delete the node at the end of the linked list
//     deleteAtEnd() {
//       if (!this.head) {
//         console.log("List is empty. Cannot delete from an empty list.");
//         return;
//       }
  
//       if (!this.head.next) {
//         // Only one node in the list
//         this.head = null;
//         return;
//       }
  
//       let current = this.head;
//       let prev = null;
  
//       while (current.next) {
//         prev = current;
//         current = current.next;
//       }
  
//       prev.next = null;
//     }
  
//     // Delete the node at a specific position in the linked list
//     deleteAtPosition(position) {
//       if (!this.head) {
//         console.log("List is empty. Cannot delete from an empty list.");
//         return;
//       }
  
//       if (position === 0) {
//         // Delete at the beginning
//         this.head = this.head.next;
//         return;
//       }
  
//       let current = this.head;
//       let prev = null;
//       let count = 0;
  
//       while (current && count < position) {
//         prev = current;
//         current = current.next;
//         count++;
//       }
  
//       if (!current) {
//         console.log("Position exceeds the length of the list. Cannot delete.");
//         return;
//       }
  
//       prev.next = current.next;
//     }
  
//     // Display the linked list
//     display() {
//       let current = this.head;
  
//       while (current) {
//         console.log(current.data);
//         current = current.next;
//       }
//     }
//   }
  
//   // Example usage:
//   const linkedList = new SinglyLinkedList();
//   linkedList.insertAtEnd(1);
//   linkedList.insertAtEnd(2);
//   linkedList.insertAtEnd(3);
//   linkedList.insertAtEnd(4);
//   linkedList.display();
  
//   console.log("Linked List after deleting at the beginning:");
//   linkedList.deleteAtBeginning();
//   linkedList.display();
  
//   console.log("Linked List after deleting at the end:");
//   linkedList.deleteAtEnd();
//   linkedList.display();
  
//   console.log("Linked List after deleting at position 1:");
//   linkedList.deleteAtPosition(1);
//   linkedList.display();

/* --------------------------------------End of Singly Linked List--------------------------- */