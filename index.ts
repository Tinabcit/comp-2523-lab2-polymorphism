/*
  COMP 2523 – Object Oriented Programming 1
  Lab: Polymorphism / Sorting
  File: index.ts

  Name: Tina Shabestari
  Student ID: A01002676
*/

// Import the sorter and all sortable data groups
import { SortUtil } from "./SortUtil";
import { NumberGroup } from "./NumberGroup";
import { CharacterGroup } from "./CharacterGroup";
import { LinkedListGroup } from "./LinkedListGroup";

/*Test Case 1: Sorting an array of numbers */

// Create a NumberGroup with unsorted values
const numGroup = new NumberGroup([30, 3, -15, 0]);

// Pass the NumberGroup into the SortUtil
const numSorter = new SortUtil(numGroup);

// Sort the numbers
numSorter.sort();

// Display the sorted result
console.log(numGroup.data);
//Blank line
console.log("-----------------------");

/*Test Case 2: Sorting a string of characters (case-insensitive)*/

// Create a CharacterGroup with an unsorted string
const characterGroup = new CharacterGroup("Xaeyb");

// Pass the CharacterGroup into the SortUtil
const charSorter = new SortUtil(characterGroup);

// Sort the characters
charSorter.sort();

// Display the sorted string
console.log(characterGroup.data);
//Blank line
console.log("-----------------------");
/*Test Case 3: Sorting a linked list of numbers*/

// Create a LinkedListGroup and add values
const listGroup = new LinkedListGroup();
listGroup.add(520);
listGroup.add(-10);
listGroup.add(-7);
listGroup.add(4);

// Pass the LinkedListGroup into the SortUtil
const listSorter = new SortUtil(listGroup);

// Sort the linked list
listSorter.sort();

// Print the sorted linked list
listGroup.print();

