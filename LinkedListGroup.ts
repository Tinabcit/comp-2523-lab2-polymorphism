/*COMP 2523 – Object Oriented Programming 1
  Lab: Polymorphism / Sorting
  File: LinkedListGroup.ts

  Name: Tina Shabestari
  Student ID: A01002676
*/

// Import the ISortable interface so this class can be used by SortUtil
import { ISortable } from "./ISortable";

// Node represents a single element in the linked list
// Each node stores a value and a reference to the next node
class Node {
  // Points to the next node in the list (null if this is the last node)
  next: Node | null = null;

  // Stores the numeric value of the node
  data: number;

  // Constructor initializes the node with a value
  constructor(data: number) {
    this.data = data;
  }
}

// LinkedListGroup represents a linked list that can be sorted
// It implements ISortable so it can be used with the SortUtil class
export class LinkedListGroup implements ISortable {

  // Head points to the first node in the linked list
  head: Node | null = null;

  // Create Node out of data and attach to end of list
  add(data: number): void {
    // Create a new node with the given value
    const node = new Node(data);

    // If the list is empty, set head to the new node
    if (!this.head) {
      this.head = node;
      return;
    }

    // Traverse the list to find the last node
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }

    // Attach the new node at the end of the list
    tail.next = node;
  }

  // Should return number of Nodes in List
  get length(): number {
    // implement this part yourself

    // Counter to keep track of number of nodes
    let count = 0;

    // Start traversal from the head
    let node = this.head;

    // Traverse the list until the end is reached
    while(node) {
        count++;
        node = node.next;
    }

    // Return total number of nodes
    return count;
  }

 // Convenience method that returns a Node at a given index
  at(index: number): Node {

    // If the list is empty, the index is invalid
    if (!this.head) {
      throw new Error("Error: Index out of bounds");
    }

    // Counter to track current index
    let counter = 0;

    // Start traversal from the head
    let node: Node | null = this.head;

    // Traverse the list until the desired index is found
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }

    // If index is not found, throw an error
    throw new Error("Error: Index out of bounds");
  }

  compare(leftPos: number, rightPos: number): boolean {
    // Implement this part yourself

    // Compare the values stored in the two nodes
    return this.at(leftPos).data > this.at(rightPos).data;
  }

  swap(leftPos: number, rightPos: number): void {
    // Implement this part yourself

    // Retrieve the nodes at the given positions
    const leftNode = this.at(leftPos);
    const rightNode = this.at(rightPos);

    // Swap the values stored in the nodes
    const temp = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = temp;
  }

  print(): void {

    // If the list is empty, nothing to print
    if (!this.head) {
      return;
    }

    // Start traversal from the head
    let node: Node | null = this.head;

    // Print each node's value in order
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
