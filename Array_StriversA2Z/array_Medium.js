/* --------------------------------------------- */

// const twoSum = (arr , k) => {
//     let n = arr.length;
//     for(let i = 0; i< n;i++){
//         for(let j = 0; j < n;j++){
//             if(i===j){
//                 continue;
//             }else if(arr[i] + arr[j] === k){
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// arr = [2,6,5,8,11]
// k = 9

// console.log(twoSum(arr , k));

//BETTER

// const twoSum = (arr , k) => {
//     const indices = new Map();
//     for(let i= 0; i < arr.length; i++ ){
//         let required = k - arr[i];


//         if(indices.has(required)){
//             return true;
//         }else{
//             indices.set(arr[i] , i);
//         }
//     }
// }

// arr = [2,7,11,15]
// k = 9

// console.log(twoSum(arr , k));

//OPTIMAL

// const twoSum = (arr, k) => {
//     sortedArr = [...arr];
//     sortedArr = sortedArr.sort((a, b) => a - b);
//     n = sortedArr.length;
  
//     let left = 0;
//     let right = n - 1;
  
//     while (left < right) {
//       current = sortedArr[left] + sortedArr[right];
  
//       if (current === k) {
//         leftIndex = arr.indexOf(sortedArr[left]);
//         rightIndex = arr.lastIndexOf(sortedArr[right]);
//         return [leftIndex, rightIndex];
//       } else if (current < k) {
//         left++;
//       } else {
//         right--;
//       }
//     }
  
//     return [-1, -1]; // Return an indicator when no pair is found
//   };
  
//   const arr = [2, 7, 11, 15];
//   const k = 9;
  
//   console.log(twoSum(arr, k));

/*---------------------------------------------------------*/

// const sorting = (arr) => {
//     count = [0 , 0 , 0];

//     for (let i = 0; i < arr.length; i++){
//         count[arr[i]]++;
//     }

//     i = 0;

//     while(count[0] > 0 ){
//         arr[i] = 0
//         i++;
//         count[0]--;
//     }

//     while(count[1] > 0 ){
//         arr[i] = 1;
//         i++
//         count[1]--;
//     }

//     while(count[2] > 0 ){
//         arr[i] = 2;
//         i++
//         count[2]--;
//     }

//     console.log(arr)
// };

// let arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1 , 2];
// sorting(arr);

/* ------------------------------------------------------------------- */

// const sortWithoutSorting = (arr) =>{
//     let low = 0;
//     let high = arr.length - 1;
//     let i  = 0;

//     while(i <= high) {
//         if(arr[i] === 0){
//             [arr[i] , arr[low]] = [arr[low] , arr[i]]
//             low++;
//             i++
//         } else if(arr[i] === 2){
//             [arr[i], arr[high]] = [arr[high] , arr[i]]
//             high--;
//         } else {
//             i++;
//         }
//     }
//     console.log(arr)
// };

// let arr = [0,2,1,1,2,0,0];
// sortWithoutSorting(arr);

/* ---------------------------------------------------------------------- */

// arr = [2 2 3 3 1 2 2 ]

//BRUTE-------------
// const majorityElement = (arr) => {
//     for(let i  = 0; i < arr.length;i++){
//         count = 0;
//         for(let j = 0; j < arr.length; j++){
//             if(arr[i] === arr[j]){
//                 count++
//             }
//             if(count > Math.floor(arr.length / 2)){
//                 return arr[j]
//             }
//         }
//     }
//     return -1;
// }

// arr = [2,3,3,3,1,3,2]
// console.log(majorityElement(arr));

//BETTER-----------

// const majorityElement = (arr) => {
//     const map = new Map();

//     for (let i = 0; i < arr.length; i++) {
//         const num = arr[i];
//         if (map.has(num)) {
//             map.set(num, map.get(num) + 1);
//         } else {
//             map.set(num, 1);
//         }
//     }

//     for (const [num, count] of map) {
//         if (count > Math.floor(arr.length / 2)) {
//             return num;
//         }
//     }

//     return -1; // Move this line outside the loop
// };

// const arr = [2, 3, 3, 3, 1, 3, 2];
// console.log(majorityElement(arr));

//OPTIMAL----------

// const majorityElement = (arr) => {
//     element = null;
//     let count = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(count === 0){
//             count= 1;
//             element = arr[i];     
//         }else if(arr[i] === element){
//             count++;
//         }else{
//             count--;
//         }
//     }

//     let count1 = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === element){
//             count1++
//         };
//     };

//     if(count1 > Math.floor(arr.length/2)){
//         return element
//     };
// }

// const arr = [2, 3, 3, 3, 1, 3, 2];
// console.log(majorityElement(arr));

/* ------------------------------------------------------------- */

//BRUTE-------------------O(N*N*N)-------------------
// arr  =[ 5, 4, -1, 7, 8]


// const kadanesAlgo = (arr) => {
//     n = arr.length;
//     max = arr[0];

//     for(let i = 0; i < n; i++){   
//         for(let  j = i; j < n; j++){
//             let current_Sum = 0;
//             for(let k = i ; k <=j ; k++){
//                 current_Sum += arr[k]
//             }
//             max = Math.max(max ,current_Sum);
//         } 
//     }
//     return max;
// };
//  arr = [5,4,-1,7,8]
//  console.log(kadanesAlgo(arr));

//OPTIMIZING THE BRUTE----O(N*N)---

// const kadanesAlgo = (arr) => {
//     n = arr.length;
//     max = arr[0];

//     for(let i = 0; i < n; i++){
//         sum = 0;
//         for(let j = i; j < n;j++){
//             sum += arr[j]
//         }
//         max = Math.max(max ,sum);
//     }
//     return max;
// };

//  arr = [5,4,-1,7,8]
//  console.log(kadanesAlgo(arr));

// OPTIMAL---------------------------

// ---------------Printing the subarray------------------

// const kadanesAlgo = (arr) => {
//     const n = arr.length;

//     let sum = 0;
//     let max = arr[0];
//     let answerStart = 0;
//     let answerEnd = 0;
//     let currentStart = 0;

//     for (let i = 0; i < n; i++) {
//         if (sum <= 0) {
//             currentStart = i;
//             sum = arr[i];
//         } else {
//             sum += arr[i];
//         }

//         if (sum > max) {
//             max = sum;
//             answerStart = currentStart;
//             answerEnd = i;
//         }
//     }
//     return arr.slice(answerStart, answerEnd + 1);
// };

// const arr = [5, 4, -1, 7, 8];
// console.log(kadanesAlgo(arr));

/* --------------------------------------------------- */

// const bestBuyAndSell = (arr) => {
//     const n = arr.length;
//     min = arr[0]; profit = 0;
//     for(let i = 1; i < n; i++){
//         cost = arr[i]  - min;
//         profit = Math.max(profit , cost);
//         min = Math.min(min , arr[i]);
//     }
//     return profit;
// }

// arr = [7,1,5,3,6,4]
// console.log(bestBuyAndSell(arr));

/* --------------------------------------------------- */

// var rearrangeArray = function(arr) {
//     const n = arr.length;
//     pos = [];
//     neg = [];

//     for(let i =0; i< n;i++){
//         if(arr[i] >=0){
//             pos.push(arr[i])
//         }else{
//             neg.push(arr[i])
//         }
//     }

//     for(let i = 0; i < Math.floor(n/2);i++){
//         arr[2*i] = pos[i];
//         arr[2* i+1] = neg[i]
//     }
//     return arr;
// };

// arr = [3,1,-2,-5,2,-4]
// console.log(rearrangeArray(arr));

/* -----------if you see the time and space complexity it is O(N*N) and O(N)---------- */

//--------lets optimize------let try to reduce time complex to O(N)--------

// const rearrangeArray = (arr) => {
//     const n = arr.length;

//     posIndex = 0;negIndex = 1;
//     let result = new Array(n).fill(0);

//     for(let i = 0; i < n; i++){
//         if(arr[i] < 0){
//             result[negIndex] = arr[i];
//             negIndex += 2;
//         }else{
//             result[posIndex] = arr[i];
//             posIndex +=2;
//         }
//     }
//     return result;
// }

// arr = [3,1,-2,-5,2,-4]
// console.log(rearrangeArray(arr));

/* ------------------------------------------------------------------------------ */

// 2 1 5 4 3 0 0

// const nextPermutation = (arr) => {
//     const n = arr.length;

//     function reverse(arr , start , end){
//         while(start < end){
//             [arr[start] , arr[end]] = [arr[end] , arr[start]]
//             start++;
//             end--
//         }
//     }
//     let index = -1;
//     for(let i = n-2; i >=0; i--){
//         if(arr[i] < arr[i+1]){
//             index = i;
//             break;
//         }
//     }

//     for(let i = n-1; i >index;i--){
//         if(arr[i] > arr[index]){
//             [arr[i] , arr[index]] = [arr[index] , arr[i]];
//             break;
//         }
//     }
//     reverse(arr , index+1 , n-1)
//     return arr;
// }

// arr = [2,1,5,4,3,0,0]
// console.log(nextPermutation(arr));

/* ---------------------------------------------------------------- */

// 10 22 12 3 0 6

// const leaderArray = (arr) => {
//     const n = arr.length;
//     result = [];

//     for(let i = 0; i < n; i++){
//         leader = true;
//         for(let j = i+1; j < n; j++){
//             if(arr[j] > arr[i]){
//                 leader = false;
//                 break;
//             }
//         }
//         if(leader === true){
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }

// arr = [10,22,12,3,0,6]
// console.log(leaderArray(arr));

// lets optimize it ----------------------------------------------------------

// 10 22 12 3 0 6

// const leaderArray = (arr) => {
//     result = []
//     max= 0;
//     for(let i = arr.length-1;i >=0;i--){
//         if(arr[i] > max){
//             result.push(arr[i]);
//             max = arr[i]
//         };
//     };

//     function reverse(arr , start , end){
//         while(start < end){
//             [arr[start] , arr[end]] = [arr[end] , arr[start]]
//             start++;
//             end--;
//         }
//         return arr;
//     };
//     result = reverse(result , 0 , result.length-1);
//     return result;
// };

// arr = [10,22,12,3,0,6]
// console.log(leaderArray(arr));

/* -------------------------------------------------------------------------------------- */