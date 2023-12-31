/* -------------------BRUTE-BETTER-OPTIMAL SOLUTIONS WILL BE PROVIDED------------------ */

//BRUTE ------------O(N log N)--------------------------

// const largestElement = (arr) => {
//     const n = arr.length;
//     const arrays = arr.sort((a ,b) => a -b)
//     return arrays[n-1]
// }

// arr =[1,2,3,4,5,7]
// console.log(largestElement(arr));

//OPTIMAL -----------------------O(N)------------------------

// const largestElement = (arr) => {
//     const n = arr.length;
//     largest = arr[0]

//     for(let i = 1; i < n; i++){
//         if(arr[i] > largest){
//             largest = arr[i]
//         }
//     }
//     return largest;
// }

// arr =[1,2,3,4,5,7]
// console.log(largestElement(arr));

/* ---------------------------------------------------------------------------------------- */

//BRUTE ---------------O(N log N + N)--------------

// const secondLargest = (arr) => {
//     const n = arr.length;
//     const arrays = arr.sort((a , b) => a -b);

//     largest = arrays[n-1];
//     second = arrays[0];

//     for(let i = n-2; i >=0;i--){
//         if(arrays[i] !== largest){
//             second =arrays[i]
//             break;
//         }
//     }

//     return second;
// }

// arr = [1,2,4,5,5,5];
// console.log(secondLargest(arr));

//BETTER ------------------O(N+N)--------------

// const secondLargest = (arr) => {
//     const n = arr.length;
//     largest = arr[0];

//     for(let i = 0; i < n; i++){
//         if(arr[i] > largest){
//             largest = arr[i];
//         }
//     }
//     second = null;
//     for(let i = 0; i < n; i++){
//         if(arr[i] > second && arr[i] !== largest){
//             second = arr[i]
//         }
//     }
//     return second;
// }

// arr = [1,2,3,4,5,6,6,7,7,7]
// console.log(secondLargest(arr));

//OPTIMAL ---------------------O(N)-------------

// const secondLargest = (arr) => {
//     const n = arr.length;
//     let largest = arr[0];
//     let second = null;

//     for (let i = 1; i < n; i++) {
//         if (arr[i] > largest) {
//             second = largest;
//             largest = arr[i];
//         } else if (arr[i] !== largest && (second === null || arr[i] > second)) {
//             second = arr[i];
//         }
//     }

//     return second;
// }

// const arr = [1, 2, 3, 4, 5, 6, 6, 7];
// console.log(secondLargest(arr));

/*------------------------------------------------------------------------------------------- */

// const arrayIsSorted = (arr) => {
//     n = arr.length;

//     for(let i = 1; i < n; i++){
//         if(arr[i] >= arr[i-1]){

//         }else{
//             return false;
//         }
//     }
//     return true;
// }

// arr = [1,1,3,5]
// console.log(arrayIsSorted(arr));

/*-------------------------------------------------------------------------------- */

// function removeDuplicates(sortedArray) {
//     // Use Set to store unique elements
//     const uniqueSet = new Set(sortedArray);

//     // Convert the Set back to an array
//     const newArrayWithoutDuplicates = Array.from(uniqueSet);

//     return newArrayWithoutDuplicates;
// }

// // Example usage:
// const sortedArrayWithDuplicates = [1, 1, 2, 2, 3, 4, 4, 4, 5];
// const newArrayWithoutDuplicates = removeDuplicates(sortedArrayWithDuplicates);
// console.log(newArrayWithoutDuplicates);

/* ----------------------------------------------------------------------------------  */ 

// const removeDuplicates = (arr) =>{
//     const n = arr.length;

//     if(n===0){
//         return 0
//     }

//     let uniqueIndex = 0;
//     for(let i = 1; i < n; i++){
//         if(arr[i] !==arr[uniqueIndex]){
//             uniqueIndex++;
//             if(i !== uniqueIndex){
//                 arr[uniqueIndex] = arr[i]
//             }
//         }
//     }
//     return arr.slice(0 , uniqueIndex + 1);
// }

// arr = [1,1,2]
// console.log(removeDuplicates(arr));

/* ---------------------------------------TC-O(N)--SC-O(1)----------------------------------------------- */

// const leftRotateByOne = (arr) => {
//     const n = arr.length;
//     temp = arr[0];
//     for(let i = 1; i< n;i++){
//         arr[i -1] = arr[i]
//     }
//     arr[n-1] = temp;
//     return arr;

// }

// num = [1,2,3,4,5]
// console.log(leftRotateByOne(num));

/*----------------------------------------TC-O(n+d)--SC-O(d)-------------------- */

// const rotateByDPlaces = (arr, d) =>{
//     const n = arr.length;
//     temp = [];
//     d = d % n;
    //Storing d elements in temp;
    // for(let i = 0; i<d;i++){
    //     temp.push(arr[i])
    // };

    // //shifting the remaining 
    // for(let i = d;i<n;i++){
    //     arr[i-d] = arr[i];
    // };

    //put back the temp to the remaining places
    //1st Approach
    // j = 0;
    // for(let i = n-d; i < n; i++){
    //     arr[i] = temp[j];
    //     j++
    // }
    // return arr;

    // remember always temp index will always be like n-d , n-d+1,....

    //2nd Approach
//     for(let i = n-d;i<n;i++){
//         arr[i] = temp[i-(n-d)]
//     }
//     return arr;
// }

// arr = [1,2,3,4,5,6,7]
// d = 3
// console.log(rotateByDPlaces(arr , d));

/* -------------What if interviewwer asks to reduce the space Complexity--------- */
// -------------------TC-O(2N)-------SC-O(1)--------------------\\

// const rotateByDPlaces = (arr ,d) => {    
//     const n = arr.length;
//     d = d%n;

//     reverse(arr , 0, d-1)
//     reverse(arr , d , n-1)
//     reverse(arr , 0 ,n-1)

//     function reverse(arr , start , end){
//         while(start < end){
//             [arr[start] , arr[end]] = [arr[end] , arr[start]]
//             start++
//             end--
//         }
//     }
//     return arr;
// }

// arr = [1,2,3,4,5,6,7]
// dd = 3
// console.log(rotateByDPlaces(arr , dd));

/* ----------------------------------TC-O(2N)--SC-O(X)------------------------------------ */

// const zerosToEnd = (arr) => {
//     n  = arr.length;

//     temp = [];
//     for(let i = 0; i < n; i++){
//         if(arr[i] !== 0){
//             temp.push(arr[i])
//         }
        
//     };

//     x = temp.length;
//     for(let i = 0; i < n; i++){
//         arr[i] = temp[i]
//     };

//     for(let i = x; i < n; i++){
//         arr[i] = 0;
//     }

//     return arr;
// }

// arr =[0,1,3,2,0,1,0,3]
// console.log(zerosToEnd(arr));

//Optimal solution
//----------TC-O(N)---SC-O(1)--------------------

// const zerosToEnd = (arr) => {
//     n= arr.length;

//     // find the first zero in the array
//     j = -1;
//     for(let i  = 0; i<n; i++){
//         if(arr[i]===0){
//             j=i;
//             break;
//         }
//     }

//     // swap zeros to the end of the array
//     for(let i = j + 1; i <n;i++){
//         if(arr[i] !==0){
//             [arr[i], arr[j]] = [arr[j] ,arr[i]];
//             j++;
//         }
//     }
//     return arr;
// }

// arr = [0,1,0,2,3,2,0,0,4,5,1]
// console.log(zerosToEnd(arr))

/* --------------------------------------------------------------------- */

// const linearSearch = (arr , num) => {
//     n = arr.length;
//     for(let i = 0; i < n; i++){
//         if(arr[i]===num){
//             return i
//         }
//     }
//     return -1
// }

// const arr = [6,7,8,4,1]
// console.log(linearSearch(arr  ,4));

/* ----------------------------------------------------------------------------- */

// const findUnion = (arr1 , arr2) => {
//     const n1 = arr1.length;
//     const n2 = arr2.length;

//     const union  = new Set();

//     i = 0; j =0

//     while(i < n1 && j < n2){
//         if(arr1[i] < arr2[j]){
//             union.add(arr1[i]);
//             i++
//         } else if(arr1[i] > arr2[j]){
//             union.add(arr2[j]);
//             j++
//         }else{
//             union.add(arr1[i])
//             i++;
//             j++
//         }
//     }

//     if(i < n1){
//         union.add(arr1[i])
//     }
//     if(j  <n2){
//         union.add(arr2[j])
//     }
//     const result = Array.from(union)
//     return result;
// }
// arr1 = [1,2,3,4,5,6,6]
// arr2 = [2,3,4,5,6,7]

// console.log(findUnion(arr1 , arr2));

/* -------------------------------------------------------------------------------- */

// const findIntersection = (arr1 , arr2) => {
//     n1 = arr1.length;
//     n2 = arr2.length;

//     const intersection = new Set();

//     i=0; j=0;
//     while(i < n1 && j < n2){
//         if(arr1[i] < arr2[j]){
//             i++
//         }else if(arr1[i] > arr2[j]){
//             j++
//         }else{
//             intersection.add(arr1[i])
//             i++;
//             j++
//         }
//     }
//     const result = Array.from(intersection)
//     return result;
// }

// arr1 = [1,2,3,4,5,6,6]
// arr2 = [2,3,4,5,6,7]

// console.log(findIntersection(arr1 , arr2));

/* ----------------------------------------------------------------------------------------- */

//BRUTE-----------TC-O(N*N)-------SC-O(1)---------
// const missingNo = (arr , num) => {
//     n = arr.length;

//     for(let i = 1; i <=num;i++){
//         flag = 0;
//         for(let j = 0; j<n;j++){
//             if(arr[j] == i){
//                 flag = 1;
//                 break
//             }
//         }

//         if(flag === 0){
//             return i;
//         }
//     }
    
// }

// arr1 = [1,2,3,5]
// num = 5
// console.log(missingNo(arr1 , num));


//BETTER-------------------TC-O(2N)------SC-O(N)-------

// const missingNo = (arr, num) => {
//     const hashCount = {};

//     arr.forEach(element => {
//         if (hashCount[element]) {
//             hashCount[element]++;
//         } else {
//             hashCount[element] = 1;
//         }
//     });

//     for (let i = 1; i <= num; i++) {
//         if (!hashCount[i]) {
//             return i;
//         }
//     }
// };

// const arr1 = [1, 2, 3, 5 ];
// const num = 5;
// console.log(missingNo(arr1, num));

/* -------------OPTIMAL----------------------- */

// const missingNo = (arr , N) =>{
//     sum = (N *(N+1))/2

//     sumOne = 0;
//     for(let i = 0; i < arr.length; i++){
//         sumOne += arr[i] 
//     };

//     return sum - sumOne;
// }

// arr = [1,2,3,5,6]
// n = 6

// console.log(missingNo(arr , n));

/* ----------TC-O(2N)---------- */

// const missingNo = (arr ,N) =>{
//     XOR1 = 0;
//     for(let i = 1; i< N;i++){
//         XOR1 = XOR1 ^ i
//     }
//     XOR2 = 0;
//     for(let i = 0; i  <arr.length;i++){
//         XOR2 = XOR2 ^i
//     }

//     return XOR1 ^ XOR2;
// }

// arr =[1,2,3,5]
// n = 5
// console.log(missingNo(arr ,n));

/* -------------------------- */
// const missingNo = (arr , n) => {
//     XOR1 = 0;
//     XOR2 = 0;
//     for(let i=0; i < arr.length;i++){
//         XOR2 = XOR2^arr[i];
//         XOR1 = XOR1 ^(i+1)
//     }
//     XOR1 = XOR1 ^ n;
//     return XOR1 ^ XOR2;
// }

// arr =[1,2,4,5]
// n = 5
// console.log(missingNo(arr ,n));

/* ----------------------TC-O(N)------------------------------- */

// const maxConsecutiveOnes = (arr) => {
//     n = arr.length;
//     count = 0;
//     maximum = 0;

//     for(let i = 0; i < n; i++){
//         if(arr[i] === 1){
//             count++;
//             maximum = Math.max(maximum , count);
//         }else{
//             count = 0;
//         }
//     }
//     return maximum;
// }

// arr = [1,1,0,1,1,1,0,1,1]
// console.log(maxConsecutiveOnes(arr));

/* ---------------------------------------------------------------------------------- */

// const findSingleNumberHashing = (nums) => {
//     const hashCount = {};

//     nums.forEach((num) => {
//         if (hashCount[num]) {
//             hashCount[num]++;
//         } else {
//             hashCount[num] = 1;
//         }
//     });

//     for (let num in hashCount) {
//         if (hashCount[num] === 1) {
//             return parseInt(num);
//         }
//     }

//     return null; // If no single number is found
// };

// arr = [1,1,2,3,3,4,4]
// console.log(findSingleNumberHashing(arr));

/* ---------- */

// const findSingleNumberWithMap = (nums) => {
//     const numCountMap = new Map();

//     // Populate the map with counts
//     for (let num of nums) {
//         numCountMap.set(num, (numCountMap.get(num) || 0) + 1);
//     }

//     // Find the number with count equal to 1
//     for (let [num, count] of numCountMap) {
//         if (count === 1) {
//             return num;
//         }
//     }

//     return null; // If no single number is found
// };


// const nums = [4, 2, 1, 2, 1];
// const singleNumber = findSingleNumberWithMap(nums);
// console.log(singleNumber); 

//----------------------------

// const findSingleNumberOptimalXOR = (nums) => {
//     let result = 0;

//     for (let num of nums) {
//         result ^= num;
//     }

//     return result;
// };

// arr = [1,1,2,3,3,5,5]
// console.log(findSingleNumberOptimalXOR(arr));

/* ---------------------------------------------------------------------------------------- */


// function getLongestSubarray(a, k) {
//     let n = a.length; // size of the array

//     let len = 0;
//     for (let i = 0; i < n; i++) { // starting index
//         for (let j = i; j < n; j++) { // ending index
//             // add all the elements of subarray = a[i...j]
//             let s = 0;
//             for (let K = i; K <= j; K++) {
//                 s += a[K];
//             }

//             if (s === k)
//                 len = Math.max(len, j - i + 1);
//         }
//     }
//     return len;
// }

// let a = [2, 3, 5, 1, 9];
// let k = 10;
// let len = getLongestSubarray(a, k);
// console.log("The length of the longest subarray is:", len);
/* ------------------------------------------------------------------ */

//BRUTE
// const longestSubArray = (arr, n) => {
//     let len = 0;
//     let start = 0;
//     let end = 0;

//     for (let i = 0; i < arr.length; i++) {
//         let sum = 0;

//         for (let j = i; j < arr.length; j++) {
//             sum += arr[j];

//             if (sum === n && j - i + 1 > len) {
//                 len = j - i + 1;
//                 start = i;
//                 end = j;
//             }
//         }
//     }

//     return arr.slice(start, end + 1);
// };

// let a = [2, 3, 5, 1, 9];
// let k = 10;
// let result = longestSubArray(a, k);
// console.log(result);

//----------If you see the Time Complexity which is O(N*N*N)------let optimize the brute approach;

// const longestSubArray = (arr , k) => {
//     len = 0;
//     for(let i = 0; i  <arr.length; i++){
//         sum = 0;
//         for(let j = i; j < arr.length; j++){
//             sum += arr[j];

//             if(sum === k){
//                 len  = Math.max(len , j-i+1);
//             };;
//         };
//     };
//     return len;
// };

// arr = [2,3,5,1,9]
// k = 10;
// console.log(longestSubArray(arr , k));

// Now the Time Complexity of the brute force approach will be O(N*N) somehow brute has been optimized still it is in the worst case

