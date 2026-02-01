# comp-2523-lab2-polymorphism
# COMP 2523 – Polymorphism Sorting Lab

This project is my COMP 2523 lab focused on demonstrating polymorphism and abstraction using TypeScript. The main goal of the lab was to refactor a sorting program so that the same sorting algorithm could be used with different data structures.

Instead of writing separate sorting logic for each type of data, I used an interface called ISortable to define the required behavior for any sortable data. Each data structure implements its own comparison and swapping logic, while the sorting algorithm itself is handled by a single class (SortUtil).

This design allows the program to sort arrays of numbers, strings of characters (case-insensitive), and linked lists using the same bubble sort implementation. At runtime, the correct comparison and swap logic is called based on the data type, which demonstrates polymorphism in action.

Completing this lab helped me better understand how interfaces support polymorphism, how abstraction improves code organization, and how responsibilities can be separated between classes in an object-oriented design.

## Sample Console Output

The following output matches the required results for the lab:

[-15, 0, 3, 30]
-----------------------
aebXy
----------------------
-20
4
500
