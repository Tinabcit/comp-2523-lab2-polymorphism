/*COMP 2523 – Object Oriented Programming 1
  Lab: Polymorphism / Sorting
  File: CharacterGroup.ts

  Name: Tina Shabestari
  Student ID: A01002676
*/

// Import the ISortable interface so this class can be used by the Sorter
import { ISortable } from "./ISortable";

// This class represents a sortable group of characters (a string)
export class CharacterGroup implements ISortable {

  // Store the string that will be sorted
  constructor(public data: string) {}

  // Returns the total number of characters in the string
  get length(): number {
    return this.data.length;
  }

  // Compares two characters at the given positions
  compare(leftPos: number, rightPos: number): boolean {
    // Get characters from the string
    const left = this.data[leftPos];
    const right = this.data[rightPos];

    // Ensure the indexes are valid
    if (left === undefined || right === undefined) {
      throw new Error("Index out of bounds in compare()");
    }

    // Compare characters ignoring case differences
    return left.toLowerCase() > right.toLowerCase();
  }

  // Swaps two characters in the string
  swap(leftPos: number, rightPos: number): void {
    // Convert string to array since strings are immutable
    const chars = this.data.split("");

    // Get characters at the given positions
    const left = chars[leftPos];
    const right = chars[rightPos];

    // Ensure the indexes are valid
    if (left === undefined || right === undefined) {
      throw new Error("Index out of bounds in swap()");
    }

    // Swap the characters
    chars[leftPos] = right;
    chars[rightPos] = left;

    // Convert the array back into a string
    this.data = chars.join("");
  }
}
