// Class representing a single node in the linked list
class Node {
    constructor(value) {
      this.value = value; // The value stored in the node
      this.next = null; // The reference to the next node, initially null
    }
  }
  
  // Class representing the linked list
  class LinkedList {
    constructor() {
      this.head = null; // The first node in the list (initially null)
      this.size = 0; // The size of the linked list
    }
  
    // Function to append a new node to the linked list
    append(value) {
      const newNode = new Node(value); // Create a new node with the given value
  
      if (this.head === null) {
        // If the list is empty, set the new node as the head
        this.head = newNode;
      } else {
        // Traverse to the end of the list and append the new node
        let current = this.head;
        while (current.next !== null) {
          current = current.next;
        }
        current.next = newNode;
      }
  
      this.size++; // Increment the size of the linked list
    }
  
    // Function to print the linked list
    print() {
      let current = this.head;
      let output = "";
  
      while (current !== null) {
        output += current.value + " -> ";
        current = current.next;
      }
  
      output += "null"; // End of the list
      console.log(output);
    }
  }
  
  // Creating a new linked list
  const linkedList = new LinkedList();
  
  // Appending items to the linked list
  linkedList.append("Data Structures - Array");
  linkedList.append("Variable Type - Integer");
  linkedList.append("Sorting Algorithm - Bubble Sort");
  
  // Print the linked list
  linkedList.print();
  