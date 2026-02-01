/*COMP 2523 – Object Oriented Programming 1
  Lab: Polymorphism / Sorting
  File: SortUtil.ts

  Name: Tina Shabestari
  Student ID: A01002676
*/

// Import the ISortable interface so SortUtil can work with different data types
import { ISortable } from "./ISortable";

// SortUtil is responsible for sorting any collection that implements ISortable
export class SortUtil {

  // The collection can be a NumberGroup, CharacterGroup, or LinkedListGroup
  constructor(public collection: ISortable) {}

  // Sorts the collection using a bubble sort algorithm
  sort(): void {

    // Keeps track of the last unsorted position in the collection
    let lastUnsorted = this.collection.length - 1;

    // Flag to check if the collection is already sorted
    let isSorted = false;

    // Continue looping until no swaps are needed
    while (!isSorted) {

      // Assume the collection is sorted at the start of each pass
      isSorted = true;

      // Loop through the collection up to the last unsorted index
      for (let i = 0; i < lastUnsorted; i++) {

        // Compare adjacent elements
        if (this.collection.compare(i, i + 1)) {

          // Swap elements if they are in the wrong order
          this.collection.swap(i, i + 1);

          // A swap means the collection was not fully sorted
          isSorted = false;
        }
      }

      // Reduce the range since the largest value moves to the end each pass
      lastUnsorted--;
    }
  }
}
