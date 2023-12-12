/* --------------------Reverse a string---------------------------- */

// str = "Hello World";

//Method One  ==> Str to Array later Array to string

// const methodOne = (str) => {
    //convert str to array
//     reverse = str.split('').reverse().join('');
//     return reverse;

// }

// console.log(methodOne(str));

//Method Two ==> Using For loop

// const methodTwo = (str) => {
//     reverse = '';
//     for(const c of str){
//         reverse = c+ reverse;
//     }
//     return reverse;
// }

// console.log(methodTwo(str));

//Method Three ==> Using Reduce method

// const methodThree =  (str) => {
//     reverse = '';
//     return Array.from(str).reduce((reverse , c) => c + reverse , '');
     
// }

// console.log(methodThree(str));

/* ---------------------Check whether a string is palindrome or not---------------------------------- */

// str = 'malayalam';

// Direct Approach

// const palindrome = (str) => {
//     const reversed = str.split('').reverse().join('');
//     return str === reversed;
// }

// console.log(palindrome(str));

// Optimized Approach

// const palindromeOrNot = (str) => {
//     let left = 0;
//     let right = str.length - 1;

//     while(left < right){
//         if(str[left] !== str[right]){
//             return false;
//         }
//         left++;
//         right--;
//     }
//     return true;
// }

// console.log(palindromeOrNot(str));

/*-------------------------------Find duplicate characters in a string------------------------- */


//Method One ==> Direct Approach nested loop => O( n * n )

// str = 'Prakash';

// const findDuplicate = (str) => {
//     const duplicate = [];

//     for(let i  = 0; i < str.length ; i++){
//         for(let j = i + 1; j < str.length; j++){
//             if(str[i] === str[j] && !duplicate.includes(str[i])){
//                 duplicate.push(str[i])
//             }
//         }
//     }
//     return duplicate;
// }

// console.log(findDuplicate(str));

//Method Two ==> optimized

// const findDuplicateUsingSorting = (str) => {
//     const sorted = str.split('').sort();
//     const duplicates = [];

//     for(let i = 0; i  < str.length - 1 ; i++){
//         if(sorted[i] === sorted[i + 1]){
//             duplicates.push(sorted[i])
//         }
//     }
//     return duplicates;
// }

// console.log(findDuplicateUsingSorting(str));

/* -----------------------------Check whether one string is rotation of another------------------------------- */

// str1 = 'ABCD'
// str2 = 'BCDA'

// const isRotation = (str1 , str2) => {
//     if(str1.length !== str2.length){
//         return false;
//     }

//     const concatinatedStr = str1 + str2;

//     return concatinatedStr.includes(str2);
// };

// console.log(isRotation(str1  , str2));

/* --------------------------------Check whether the given strings are Anagram or not */

// str1 = 'listen'
// str2 = 'silent'

// const isAnagram = (str1 , str2) => {
//     str1 = str1.replace(/\s/g , '').toLowerCase();
//     str2 = str2.replace(/\s/g,'').toLowerCase();

//     if(str1.length !== str2.length){
//         return false;
//     }

//     const sortedStr1 = str1.split('').sort().join('');
//     const sortedStr2 = str2.split('').sort().join('');

//     return sortedStr1 === sortedStr2;
    
// }

// console.log(isAnagram(str1 , str2));

/* -------------------------------Write a Program to check whether a string is a valid shuffle of two strings or not---------------------------------- */

//1st Approach using concatination Time complexity O(n log n)

// str1 = 'XY';
// str2 = '12';
// str3 = 'X1Y2';

// const isValidShuffleUsingConcat = (str1 , str2 , res) => {
//     const concat = str1 + str2;
//     if(concat.length !== res.length){
//         return false;
//     }

//     const sortedConcat = concat.split('').sort().join('');
//     const sortedRes  = res.split('').sort().join('');

//     return sortedConcat === sortedRes;
// }

// console.log(isValidShuffleUsingConcat(str1,str2,str3));

//2nd Approach using while loop Time Complexities O(n)

// const isValidShuffle = (str1 , str2, res) => {
//     if(str1.length + str2.length !== res.length){
//         return false;
//     }
//     i = 0;
//     j = 0;
//     k = 0;

//     while(k < res.length){
//         if(i < str1.length && str1[i] === res[k] ){
//             i++;
//         } else if( j < str2.length && str2[j] === res[k]){
//             j++;
//         } else{
//             return false;
//         }
//         k++;
//     }
//     return true;
// }

// console.log(isValidShuffle(str1,str2,str3));

/*--------------------------------------------Count and Say problem----------------------------------- */

//  n = 4;

//  const countAndSay = (n) => {
//     let result = '1';

//     for(let i = 2; i <=n ; i++){
//         currentTerm = '';
//         count = 1;

//         for(let j = 0; j < result.length; j++){
//             if(result[j] === result[j + 1]){
//                 count++;
//             }else{
//                 currentTerm += count + result[j];
//                 count  = 1;
//             }
//         }
//         result = currentTerm;
//     }
//     return result
//  };

//  console.log(countAndSay(n));

/*------------------------------------------------- */


