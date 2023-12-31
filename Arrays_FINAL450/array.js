/* Arrays */

/* -------------------------------------------------------  */

/* Reverse the Array */ 

// const reversedArray = (arr) => {
//     start_index = 0;
//     end_index = arr.length -1;


//     while(start_index < end_index){
//         [arr[start_index] , arr[end_index]] = [arr[end_index] , arr[start_index]]
//         start_index++;
//         end_index--;
//     }
//     return arr
// }

// num = [1,2,3,4,5 ,8,9]
// number = reversedArray(num)
// console.log(number)


/* Reverse the Array after given position */

// const reverseArray = (arr , m) => {
//     if (m < 0 || m >= arr.length) {
//         console.log("Invalid index");
//         return;
//     }

//     start_index = m + 1
//     end_index = arr.length -1

//     while(start_index < end_index){
//         [arr[start_index] , arr[end_index]] = [arr[end_index] , arr[start_index]]
//         start_index++
//         end_index--
//     }
//     return arr
// }

// numb = [1,2,3,4,5,6]
// m = 3
// numbers = reverseArray(numb , m)
// console.log(numbers)

/* -------------------------------------------------------  */

/* Find the maximum and minimum element in an array */

// const findMinandMax = (arr) => {
//     if(arr.length === 0){
//         console.log('Invalid Input')
//     }

//     max = arr[0];
//     min = arr[0];

//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] >= max){
//             max = arr[i]
//         } else {
//             min  <= arr[i]
//         }
//     }

//     console.log('Maximum element in an array is ' + max);
//     console.log('Minimum element in an array is ' + min)
// };

// number = [3,5,75,38 ,26586]
// findMinandMax(number)

/* ------------------------------------------------------------- */

/* Find the kth Max/Min element in an array */

// const findKthMax = (arr ,k) => {
//     arr.sort((a , b) => {
//         return (b-a)
//     })
//     console.log(arr[k-1])
// };

// array = [3,5,8,7,9];
// k = 1;

// findKthMax(array , k)

// const findKthMin = (arr , k) => {
//     arr.sort((a , b) => {
//         return(a - b)
//     })
//     console.log(arr[k-1])
// };

// findKthMin(array , k)

/*------------------------------------------------------------ */

/* Sort the array whose elements are only 0s 1s and 2s [Using sorting algo] */

// const sorting = (arr) => {
//     count = [0 , 0 , 0];

//     for (let i = 0; i < arr.length; i++){
//         count[arr[i]]++;
//     }

//     i = 0;

//     while(count[0] > 0 ){
//         arr[i++] = 0;
//         count[0]--;
//     }

//     while(count[1] > 0 ){
//         arr[i++] = 1;
//         count[1]--;
//     }

//     while(count[2] > 0 ){
//         arr[i++] = 2;
//         count[2]--;
//     }

//     console.log(arr)
// };

// let arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1 , 2];
// sorting(arr);

/* Sort the array whose elements are only 0s 1s and 2s [Without Using sorting algo] */

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

/* ------------------------------------------------------------ */

/* Move all the negative elements to one side of the array */

// const negativeElement = (arr ) => {

//     low = 0;
//     high = arr.length -1;


//     for(let i = 0; i <= high; i++){
//         if(arr[i] < 0){
//             [arr[low] , arr[i]] = [arr[i] , arr[low]];
//             low++;
//         } else if (arr[i] >=0){
//             [arr[high] , arr[i]] = [arr[i] , arr[high]];
//             high--;
//             i--;
//         }
//     }
//     console.log(arr);
// };



// negativeElement(arr);

/* Move all the negative elements to right side of the array */

// const moveNegativeToRight = (arr) => {
//     left = [];
//     right = [];

//     for(let i = 0; i <= arr.length-1;i++){
//         if(arr[i] > 0){
//             left.push(arr[i])
//         } else {
//             right.push(arr[i])
//         }
//     }

//     const concatinatedArray  = left.concat(right);
//     console.log(concatinatedArray)
// };

// arr = [1, -1, 3, 2, -7, -5, 11, 6 ]
// moveNegativeToRight(arr);

/*------------------------------------------------------------------------ */

/* Find the union of two unsorted arrays */

// const findUnion = (arr1 , arr2)  => {
    
//     const union  = new Set();

//     i  = 0; j = 0;

//     while( i < arr1.length && j < arr2.length){
//         if(arr1[i] < arr2[j]){
//             union.add(arr1[i])
//             i++;
//         } else if(arr1[i] > arr2[[j]]){
//             union.add(arr2[j])
//             j++;
//         } else {
//             union.add(arr1[i]);
//             i++;
//             j++;
//         }
//     }
//     if(i < arr1.length){
//         union.add(arr1[i])
//         i++;
//     }
//     if(j < arr2.length){
//         union.add(arr2[j])
//         j++;
//     }

//     console.log(union);
// }

// arr1 = [1 , 3, 4 , 5 ,7]
// arr2 = [2 , 3 , 5 ,6 ]

// findUnion(arr1 , arr2);

/* Find the intersection of two sets of array */

// const findIntersection =  (arr1 , arr2) => {
    
//     const intersection = new Set();

//     i = 0; j = 0;

//     while( i < arr1.length && j < arr2.length){
//         if(arr1[i] < arr2[j]){
//             i++;
//         } else if(arr1[i] > arr2[j]){
//             j++;
//         } else {
//             intersection.add(arr1[i])
//             i++;
//             j++
//         }
//     }

//     console.log(intersection);
// };

// findIntersection(arr1 , arr2);

/* ---------------------------------------------------------- */

/* Write a program for cyclically rotation of an array one by one */

// const rotateArray = (arr , n) => {
    
//     last_element = arr[n-1] ;

//     for(i = n-1; i > 0; i--){
//         arr[i] = arr[i-1]
//     };
//     arr[0] = last_element
//     console.log(arr);
// }

// arr = [1, 2, 3, 4, 5, 6]
// n = arr.length;

// rotateArray(arr , n);

/* Rotate array [189. Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.] */

// const rotateArray = (arr , k) => {

//     k = k % arr.length;

//     reverse(arr , 0 , arr.length -1);
//     reverse(arr , 0 , k-1);
//     reverse(arr , k , arr.length -1);


//     function reverse(nums  , start , end){
//         while(start < end){
//             [nums[start] , nums[end]] = [nums[end] , nums[start]]
//             start++;
//             end--;
//         }
//     }

//     console.log(arr);
// };

// arr = [1,2,3,4,5,6,7]
// k = 3

// rotateArray(arr , k);

/* ------------------------------------------------------------------------------------- */

/* Find the largest sum contiguous SubArray   Time Complexities = o(N)*/

// const max_num = (arr ) => {
//     sum = 0;
//     max = arr[0];

//     for(let i = 0; i  < arr.length ; i++){
//         sum += arr[i];
//         max = Math.max(max , sum);

//         if(sum < 0){
//             sum = 0;
//         }
//     }

    
//     return max
// };

// arr = [-2,1,-3,4,-1,2,1,-5,4];


// console.log(max_num(arr));

/* -------------------------------------------------------------------------------- */

/* merge two sorted arrays without extraspace */

// const mergeSortedArrays = (arr1 , arr2) => {
//     m = arr1.length;
//     n = arr2.length;
//     i = m - 1;
//     j = n - 1;
//     mergedIndex  = m + n - 1;


//     while(i >= 0 && j >= 0){
//         if(arr1[i] > arr2[j]){
//             arr1[mergedIndex] = arr1[i]
//             i--;
//         } else {
//             arr1[mergedIndex] = arr2[j]
//             j--
//         }
//         mergedIndex--;
//     };

//     while(j >=0){
//         arr1[mergedIndex] = arr2[j]
//         j--;
//         mergedIndex--;
//     };

//     return arr1;
// };

// arr1 = [1,3,5,7]
// arr2 = [0,2,4,6,8]

// console.log(mergeSortedArrays(arr1 , arr2));

/* --------------------------------------------------------------------------------------------- */

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
