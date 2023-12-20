/* -----------Sorting Algorithms-------------

Important Sorting Algo's

Selection Sorting
Bubble Sorting
Merge Sorting
Insertion Sorting
Quick Sorting
*/

/* -----------------------Selection Sorting ==> Selects the minimum and swaps Time Complexity ==> O(n3)----------------------- */

// arr = [13,24,42,20,52,9];

// const selectionSorting = (arr) => {
//     const n = arr.length

//     for(let i = 0; i < n-1;i++){
//         minIndex = i;
//         for(let j = i + 1; j < n;j++){
//             if(arr[j] < arr[minIndex]){
//                 minIndex = j;
//             }
//         }

//         if(minIndex !== i){
//             [arr[i] , arr[minIndex]] = [arr[minIndex] , arr[i]];
//         }
//     }
//     return arr;
// }

// console.log(selectionSorting(arr));

/* ---------------------------------Bubble Sort ==> Selects maximum and swaps with adjacent element ==> Time Complexity ==> O(n2) [Worst & Average Cases] and O(N) [Best case]------------- */

// arr = [13, 46, 24, 52, 20, 9];
// arr1 = [2, 3, 5, 15, 20]; // For best case test run

// const BubbleSort = (arr) => {
//     n = arr.length;

//     for(let i = 0; i <= n; i++){
//         didSwap = 0; 
//         for(let j = 0; j < n - i - 1; j++){
//             if(arr[j] > arr[j + 1]){
//                 temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//                 didSwap = 1;
//             }
//         }
//         if(didSwap===0){
//             break;
//         }
//     }
//     return arr
// };

// console.log(BubbleSort(arr1));

/*--------------------------------------Insertion Sort ==> Checks with the current position and replaces ==> T.C ==> O(N2)---------------- */

// arr = [12 , 11, 13, 5, 6];

// const insertionSort = (arr) => {
//     const n = arr.length;

//     for(let i = 0; i <= n-1; i++){
//         let j = i;
//         while( j > 0 && arr[j - 1] > arr[j]){
//             temp = arr[j - 1];
//             arr[j-1] = arr[j];
//             arr[j] = temp;
//             j--;
//         }        
//     }
//     return arr;
// }

// console.log(insertionSort(arr));