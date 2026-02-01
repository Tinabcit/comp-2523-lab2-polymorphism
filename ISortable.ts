/*COMP 2523 – Object Oriented Programming 1
  Lab: Polymorphism / Sorting
  File: ISortable.ts

  Name: Tina Shabestari
  Student ID: A01002676
*/

// ISortable defines the required behavior for any sortable data type
export interface ISortable {

  // Returns the number of elements in the collection
  length: number;

  // Compares two elements at the given positions
  compare(leftPos: number, rightPos: number): boolean;

  // Swaps two elements at the given positions
  swap(leftPos: number, rightPos: number): void;
}
