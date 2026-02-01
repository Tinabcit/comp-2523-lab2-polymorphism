/*COMP 2523 – Object Oriented Programming 1
  Lab: Polymorphism / Sorting
  File: NumberGroup.ts

  Name: Tina Shabestari
  Student ID: A01002676
*/

// Import the ISortable interface so this class can be used by SortUtil
import { ISortable } from "./ISortable";

// NumberGroup represents a sortable collection of numbers
export class NumberGroup implements ISortable {

  // Store the array of numbers that will be sorted
  constructor(public data: number[]) {}

  // Returns the total number of elements in the array
  get length(): number {
    return this.data.length;
  }

  // Compares two numbers at the given positions
  compare(leftPos: number, rightPos: number): boolean {

    // Get the values at the specified positions
    const left = this.data[leftPos];
    const right = this.data[rightPos];

    // Ensure both positions exist in the array
    if (left === undefined || right === undefined) {
      throw new Error("Index out of bounds in compare()");
    }

    // Return true if the left value is greater than the right value
    return left > right;
  }

  // Swaps two numbers at the given positions
  swap(leftPos: number, rightPos: number): void {

    // Get the values at the specified positions
    const left = this.data[leftPos];
    const right = this.data[rightPos];

    // Ensure both positions exist in the array
    if (left === undefined || right === undefined) {
      throw new Error("Index out of bounds in swap()");
    }

    // Swap the values in the array
    this.data[leftPos] = right;
    this.data[rightPos] = left;
  }
}
