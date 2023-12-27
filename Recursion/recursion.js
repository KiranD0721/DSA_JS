/*---------------------------------RECURSION--------------------------- */
// Functions calling itself until a specific condition is met!!!!

//example

// function recursion(count , n){
//     if(count === n){
//         return;
//     }else{
//         console.log(count);       
//         recursion(count + 1 , n);
//         console.log("times")
//     }
// }
// recursion(0,4)

/* ---------------------------------------------------------------------------------- */

// function printnames(name , n , count = 0){   
//     if(count === n){
//         return;
//     }else{
//         printnames(name , n , count + 1);
//         console.log(name);
//     }
// }
// printnames("Bingoo!!!" , 5)

/*---------------------------------------------------------------------------- */

// const printN = (n , count = 1) => {
//     if(count > n){
//         return;
//     }else{
//         console.log(count);
//         printN(n ,count + 1)
        
//     }
// }

// printN(5);

/* by backtracking */
//pseudo code 
// const printN = (n , count) => {
//     if(count < 1){
//         return 
//     }else{
//         printN(count - 1 , n);
//         console.log(count);
//     }
// }

// printN(5 ,5)

/* --------------------------------------------------------------------------------- */

// const printN = (n , count = n) => {
//     if(count  < 1){
//         return;
//     }else{
//         console.log(count);
//         printN(n  , count  - 1)
        
//     }
// }
// printN(5)

/*---------------------------------------------------------------------------------------- */

// const sumOfFirstN = (n, count = 1, sum = 0) => {
//     if (count > n) {
//         return sum;
//     } else {
//         sum = sum + count;
//         return sumOfFirstN(n, count + 1, sum);
//     }
// };

// console.log(sumOfFirstN(5));

/*------------------------------------------------------------------------------------------ */

// const factorial = (n) => {
//     if(n==0){
//         return 1
//     }else{
//         return n * factorial(n-1)
//     }
// }

// console.log(factorial(5))

/*------------------------------------------------------------------------------------------------- */

// const reverseAnArray = (arr, start = 0 , end) => {
//     if(start < end){
//         [arr[start] , arr[end]] = [arr[end]  , arr[start]];
//         reverseAnArray(arr , start + 1 , end - 1);
//     }
//     return arr
// }

// arr = [1,2,3,4]
// console.log(reverseAnArray(arr  , 0 , arr.length - 1))

/*-------------------------------------------------------------------------------------------------- */

// const isPalindrome = (str , start = 0 , end) => {
//     if(start >= end){
//         return true
//     }

//     if(str[start] !== str[end]){
//         return false;
//     }

//     return isPalindrome(str , start + 1 , end - 1)
// }

// str = 'madam'
// console.log(isPalindrome(str , 0 , str.length - 1));

/* -------------------------------------------------------------------------------------------- */
 /*The Fibonacci sequence is a series of numbers
  in which each number (Fibonacci number) is the sum of the two preceding ones,
   usually starting with 0 and 1. 
   In mathematical terms, the sequence is defined by the recurrence relation:

F(n)=F(n−1)+F(n−2)

with initial conditions 
F(0)=0 and F(1)=1.
Here are the first few Fibonacci numbers in the sequence:

0,1,1,2,3,5,8,13,21,34,… -------------------------------remember the time complexity willl be O(2 **n)---------------------------------------- */

// const fibonacciSequence = (n) => {
//     if(n === 0){
//         return 0;
//     }else if(n === 1){
//         return 1;
//     }else{
//         return fibonacciSequence(n - 1) + fibonacciSequence(n - 2)
//     }
// }

// console.log(fibonacciSequence(8))

/* ----------------------------------- END --------------------------------------------------------- */