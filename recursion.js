//1. Write a JavaScript program to calculate the factorial of a number

//In mathematics, the factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
//For example, 5! = 5 x 4 x 3 x 2 x 1 = 120
 
function factorial(x) 
{
// Base case: factorial of 0 is 1
  if (x === 0)
 {
    return 1;
    }
// Recursive case: x! = x * (x-1)!
  return x * factorial(x-1);
         
}
// Example usage: Calculate and print the factorial of 10.
console.log(factorial(10));
//=========================================================================

//2. Write a JavaScript program to find the greatest common divisor (GCD) of two positive numbers using recursion.

// Function to calculate the greatest common divisor (GCD) of two numbers using Euclidean algorithm.
let gcd = function(a, b) {
    // Base case: if b is 0, then GCD is a.
    if (!b) {
        return a;
    }

    // Recursive case: calculate GCD using the remainder (a % b).
    return gcd(b, a % b);
};

// Example usage: Calculate and print the GCD of 2154 and 458.
console.log(gcd(2154, 458));
//========================================================================

//3. Write a JavaScript program to get integers in the range (x, y) using recursion.

// Function to get integers in the range (x, y) using recursion.
function getRangeIntegers(x, y, result = []) {
    // Base case: if x is equal to or greater than y, return the result.
    if (x >= y - 1) {
      return result;
    } else {
      // Recursive case: increment x and push it to the result array.
      result.push(x + 1);
      return getRangeIntegers(x + 1, y, result);
    }
  }
  
  // Example usage: Get and print integers in the range (6, 13).
console.log(getRangeIntegers(6, 13));
//===========================================================================
  
//4. Write a JavaScript program to compute the sum of an array of integers.

// Function to calculate the sum of elements in an array using recursion.
let array_sum = function(my_array) {
    // Base case: if the array has only one element, return that element.
    if (my_array.length === 1) {
      return my_array[0];
    }
    else {
      // Recursive case: pop the last element and add it to the sum of the remaining elements.
      return my_array.pop() + array_sum(my_array);
    }
  };
  
  // Example usage: Calculate and print the sum of elements in the array [1, 2, 3, 4, 5, 6].
console.log(array_sum([1, 2, 3, 4, 5, 6]));
//===============================================================================  
//5. Write a JavaScript program to compute the exponent of a number.

// Recursive JavaScript function to calculate the exponent (a^n).
let exponent = function(a, n) {
    // Base case: if n is 0, return 1.
    if (n === 0) {
      return 1;
    } else {
      // Recursive case: a^n = a * a^(n-1).
      return a * exponent(a, n - 1);
    }
  };
  
  // Example usage: Calculate and print the exponentiation of 4^2.
console.log(exponent(4, 2)); 
//=================================================================================
  
//6. Write a JavaScript program to get the first n Fibonacci numbers.

// The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number is the sum of the previous two.

// Recursive JavaScript function to generate a Fibonacci series up to the nth term.
let fibonacci_series = function (n) {
    // Base case: if n is less than or equal to 1, return the base series [0, 1].
    if (n <= 1) {
      return [0, 1];
    } else {
      // Recursive case: generate the Fibonacci series up to (n - 1).
      var s = fibonacci_series(n - 1);
      // Calculate the next term in the series and push it to the array.
      s.push(s[s.length - 1] + s[s.length - 2]);
      // Return the updated Fibonacci series up to the specified length.
      return s.slice(0, n);
    }
  };
  // Example usage: Calculate and print the Fibonacci series up to the 8th term.
console.log(fibonacci_series(8));
//====================================================================================
  
//7. Write a JavaScript program to check whether a number is even or not.

// Recursive JavaScript function to check if a number is even.
function even_recursion(number) {
    // If the number is negative, convert it to its absolute value.
    if (number < 0) {
      number = Math.abs(number);
    }
  
    // Base case: If the number is 0, it's even.
    if (number === 0) {
      return true;
    }
  
    // Base case: If the number is 1, it's odd.
    if (number === 1) {
      return false;
    } else {
      // Recursive case: Subtract 2 from the number and recursively check the new number.
      number = number - 2;
      return even_recursion(number);
    }
  }
  
  // Example usage: Check if certain numbers are even.
  console.log(even_recursion(234)); // true
  console.log(even_recursion(-45)); // false
console.log(even_recursion(65));  // false


