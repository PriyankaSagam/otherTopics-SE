# Recursion:
    A recursive function is a function that calls itself until it doesn’t. This technique is called recursion.  

    Recursion is the process of defining a problem (or the solution to a problem) in terms of (a simpler version of) itself. 

# 1.What is the potential consequence of not including a base case in a recursive function?

Defining a base case in recursive functions is crucial because it determines when the recursion should stop. Without a base case, the function would continue calling itself indefinitely, leading to stack overflow errors and an infinite loop.

# 2.What does memoization allow you to avoid?
 
First, it can reduce the time complexity of your algorithm, since you avoid repeated computations and only perform the necessary ones. For example, if you use memoization to solve the Fibonacci sequence problem, you can reduce the time complexity from exponential to linear.

# 3.What are the steps to writing a recursive function?

The function definition.
The base condition.
The recursive call.

Famous recursive functions are the factorial operation and the Fibonacci Sequence. Both of these call on the operation or sequence itself to find the current value.

# Linked Lists:
   A Linked List is a linear data structure used for storing a collection of elements. Unlike arrays, linked lists use nodes to store elements which are not stored in contiguous memory locations.

  =>  Linked lists are a collection of nodes
  ==> nodes are also seen in other data structures, but for linked lists, they contain:
  ==> a dataproperty, that stores the node's value
  a nextproperty, also known as the "pointer", which points to the next item in the linked list
  ==> the last node will have a nextproperty set to null, so it is sometimes referred to as the "null next node", or the "tail"

# 1.Why would we use a Linked List instead of an array?

Efficient Insertion and Deletion: Linked lists allow efficient insertion and deletion of elements at any position in the list, whereas arrays require shifting of elements when a new element is added or removed, which can be slow and inefficient for large arrays.

 Linked lists are more flexible and adaptable and are best suited for situations where the size of the collection is not known.Arrays are best suited for situations where the size of the collection is known in advance and where elements need to be accessed or manipulated quickly.

# 2.When we want to add a node to a linked list, do we have to scoot over the subsequent nodes (like we do for arrays)?

To append a node to a non-empty linked list, make the last node link to the new node. Unlike arrays, we cannot access any elements in a linked list directly. We must traverse from the head node to the last node. To do that, create a temporary pointer (you can call the pointer current ) that points to the head node.

# 3.Can we do index access like we can with arrays with linked lists?

A linked list is a collection of linear data elements. Each element (node) contains data and reference parts. The data part has the value and the reference part has the address link to the next element. The elements are not indexed, so random access like an array is not possible.

# Stacks and Queues:
 A queue is a data structure that stores a collection of elements, with operations to enqueue (add) elements at the back of the queue, and dequeue (remove) elements from the front of the queue. Stacks are based on the LIFO principle, i.e., the element inserted at the last, is the first element to come out of the list.

# Testing:

Software testing is the process of checking the quality, functionality, and performance of a software product before launching. To do software testing, testers either interact with the software manually or execute test scripts to find bugs and errors, ensuring that the software works as expected.

# 1.Why do we create tests?

Software testing identifies bugs and issues in the development process so they're fixed prior to product launch. This approach ensures that only quality products are distributed to consumers, which in turn elevates customer satisfaction and trust.

# 2.What is automated testing?

Automated testing is a software testing technique that automates the process of validating the functionality of software and ensures it meets requirements before being released into production. With automated testing, an organization can run specific software tests at a faster pace without human testers.
1. It is used to automate the testing tasks that are difficult to perform manually.
2. Automation tests can be run at any time of the day as they use scripted sequences to examine the software.
3. Automation tests can also enter test data compare the expected result with the actual result and generate detailed test reports.
4. The goal of automation tests is to reduce the number of test cases to be executed manually but not to eliminate manual testing.
 It is possible to record the test suit and replay it when required
 
# 3.What is TDD?

Test-driven development (TDD) is a software development practice that emphasizes writing tests before writing the actual code. It follows a cyclical process of writing a failing test, writing the minimum code to make the test pass, and then refactoring the code.
1. Define a test set for the unit
2. Implement the unit
3. Verifiy that the implementation of the unit makes the tests succeed.
4. Refactor
5. Repeat