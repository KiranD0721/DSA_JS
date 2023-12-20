/*
------------------------------PATTERN-01--------------------------------------------------

    * * * *
    * * * *
    * * * *
    * * * *
    
*/
// const patterns = (n) => {
//     for(let i = 0; i < n; i++){
//         for(let j = 0; j < n; j++){
//             process.stdout.write('* ')
//         }
//         console.log();
//     }
// }

// patterns(5);

// let say input will be 
/*
2
3
5
which means we ll run two 2 test cases i.e of n = 3 , n =5;

*/
// testPatterns([3,5])
// const testPatterns = (testCases) => {
//     for(let t = 0; t < testCases.length; t++){
//         const n = testCases[t];
        
//         for(let i = 0; i < n; i++){
//             for(let j = 0; j < n; j++){
//                 process.stdout.write('* ')
//             }
//             console.log();
//         }
//         if(t < testCases.length){
//             console.log();
//         }
//     }
// }
// testPatterns([3,5])
/*--------------------------------------------------------------------------------------------- */

/**
 -------------------------------PATTERN-02---------------------------------------------

    *
    * *
    * * *
    * * * *
    * * * * *
 */

// const pattern2 = (n) => {
//     for(let i =  0; i < n; i++){
//         for(let j =  0; j <= i; j++){
//             process.stdout.write('* ');
//         }

//         console.log();
//     }

// }
// pattern2(5);

// const pattern2TestCases = (testCases) => {
//     for(let t = 0; t < testCases.length; t++){
//         const n = testCases[t];

//         for(let i = 0; i < n; i++){
//             for(let j = 0; j <= i; j++){
//                 process.stdout.write('* ')
//             }
//             console.log();
//         }
//         if(t < testCases.length){
//             console.log();
//         }
//     }
// }

// pattern2TestCases([3,7]);

/* --------------------------------------------------------------------------------------------------------------- */

/*
---------------------------PATTERN-03----------------------------

    1
    1 2
    1 2 3
    1 2 3 4
    1 2 3 4 5
*/

// const pattern3 = (n) => {
//     for(let i =  0; i < n; i++){
//         for(let j =  0; j <= i; j++){
//             process.stdout.write((j + 1) + ' ');
//         }

//         console.log();
//     }

// }
// pattern3(5);

// const pattern3TestCases = (testCases) => {
//     for(let t = 0; t < testCases.length; t++){
//         const n = testCases[t];

//         for(let i = 0; i < n; i++){
//             for(let j = 0; j <= i; j++){
//                 process.stdout.write(( j + 1) + ' ')
//             }
//             console.log();
//         }
//         if(t < testCases.length){
//             console.log();
//         }
//     }
// }

// pattern3TestCases([3,7]);

/* ----------------------------------------------------------------------- */

/*

 ----------------------------------------PATTERN-04--------------------

    1
    2  2
    3 3 3
    4 4 4 4
    5 5 5 5 5
*/

// const pattern4 = (n) => {
//     for(let i = 0; i <n; i++){
//         for(let j = 0; j <= i; j++){
//             process.stdout.write(( i + 1) + ' ')
//         }
//         console.log();
//     }
// }

// pattern4(5);

// const pattern4TestCases = (testCases) => {
//     for(let t = 0; t < testCases.length; t++){
//         const n = testCases[t]

//         for(let i = 0; i < n; i++){
//             for(let j = 0; j <= i; j++){
//                 process.stdout.write(( i + 1) + ' ')
//             }
//             console.log();
//         }

//         if(t < testCases.length){
//             console.log();
//         }
//     }
// }

// pattern4TestCases([4 , 5]);

/* ------------------------------------------------------------------------------ */

/*

 ------------------------------------PATTERN-05-------------------------------

    * * * * *
    * * * *
    * * *
    * *
    * 

*/

// const pattern5 = (n) => {
//     for(let i = n; i > 0; i--){
//         for(let j = 0; j < i; j++){
//             process.stdout.write('* ');
//         }
//         console.log()
//     };
// }

// pattern5(5);

// const pattern5TestCases = (testCases) => {
//     for(let t = 0; t < testCases.length; t++){
//         const n = testCases[t];

//         for(let i = n; i > 0; i--){
//             for(let j = 0; j < i; j++){
//                 process.stdout.write('* ')
//             }
//             console.log();
//         }
//         console.log();
//     }
// }

// pattern5TestCases([5 ,9]);

/* ----------------------------------------------------------------------------------------- */

/*

--------------------------PATTERN-06-----------------------

    1 2 3 4 5
    1 2 3 4
    1 2 3
    1 2
    1

*/

// const pattern6 = (n) => {
//     for(let i = n; i > 0; i--){
//         for(let j = 0; j < i; j++){
//             process.stdout.write(( j + 1) + ' ')
//         }
//         console.log();
//     }
// }

// pattern6(5);

// const pattern6TestCases = (testCases) => {
//     for(let t = 0; t < testCases.length; t++){
//         const n = testCases[t];

//         for(let i = n; i > 0; i--){
//             for(let j = 0; j < i; j++){
//                 process.stdout.write(( j + 1) + ' ')
//             }
//             console.log();
//         }
//         if(t < testCases.length){
//             console.log();
//         }
//     }
// }
// pattern6TestCases([2 , 4])

/* ----------------------------------------------------------------------------------------------------------------------- */

/* ---------------------------PATTERN-07--------------------------
                *
               ***   
              *****
             *******
            *********
*/

//Approoach 1
// const pattern7 = (testCases) => {
//     for(let t= 0; t < testCases.length;t++){
//         let rows = testCases[t]
//         for(let i = 0 ; i < rows; i++){
//             let patterns = '';
    
//             let spaces = ' '.repeat(rows - i - 1);
    
//             let pattern = '*'.repeat(2 * i + 1);
    
//             patterns = spaces + pattern
    
//             console.log(patterns);
//         }
//         if(t < testCases.length){
//             console.log();
//         }
//     }
// }



//Approach 2
// const pattern7TestCases = (testCases) => {
//     for(let t = 0; t < testCases.length; t++){
//         let rows = testCases[t];
//         for(let i =0; i < rows; i++){
//             let pattern = '';
//             for(let j = 0; j < rows - i -1; j++){
//                 pattern += ' ';
//             }
//             for(let k = 0; k < 2 * i + 1; k++){
//                 pattern += '*';
//             }
//             console.log(pattern)
//         }
//         if(t < testCases.length){
//             console.log();
//         }
//     }
// }


// pattern7TestCases([5,7]);

/*------------------------------------------------------------------------------------------------------------ */
/* 
 
  ---------------------------------------PATTERN-08------------------------------------------

            *********
             *******
              *****
               ***
                *

*/

// const pattern8 = (testCases) => {
//     for(let t = 0; t < testCases.length;t++){
//         let rows = testCases[t]
//         for(let i = 0; i < rows; i++){
//             let pattern = '';
//             for(let j = 0; j < i;j++){
//                 pattern += ' ';
//             }
//             for(let k = 0; k < 2 * (rows - i) - 1; k++){
//                 pattern += '*';
//             }
//             console.log(pattern)
//         }
//         if(t < testCases.length){
//             console.log();
//         }
//     }
// }


// const pattern8TestCases = (testCases) => {
//     for(let t = 0; t < testCases.length; t++){
//         let rows = testCases[t]

//         for(let i = 0; i < rows; i++){
//             let pattern = '';
//             let spaces = ' '.repeat((i))
//             let asterisks = '*'.repeat(2 * (rows - i) -1)

//             pattern = spaces + asterisks 

//             console.log(pattern)
//         }

//         if( t < testCases.length){
//             console.log()
//         }
//     }
// }

// pattern8TestCases([3,5]);
/* ---------------------------------------------------------------------------------------------------------------- */

/*

  -----------------------------------PATTERN-09---------------------------------------------

      *
     ***
    *****
   *******
  *********
 ***********
*************
*************
 ***********
  *********
   *******
    *****
     ***
      *

*/

// const pattern9 = (testCases) => {
    
//     for(let t =0; t < testCases.length; t++){
//         let rows = testCases[t]
//         for(let i = 0; i < rows; i++){
//             let pattern = '';
//             pattern += ' '.repeat(rows - i - 1);
//             pattern += '*'.repeat(2 * i + 1);
//             console.log(pattern)
//         }
    
//         for(let i = 0; i < rows; i++){
//             let pattern = '';
//             pattern += ' '.repeat(i);
//             pattern += '*'.repeat(2 * (rows - i) -1);        
//             console.log(pattern)
//         }

//         if(t < testCases.length){
//             console.log();
//         }
//     }
    
    
// }


// const pattern9TestCases = (testCases) => {
//     for(let t = 0; t < testCases.length; t++){
//         let rows = testCases[t]
//         for(let i = 0 ; i < rows; i++){
//             let pattern = '';

//             for(let j = 0; j < rows - i -1; j++){
//                 pattern += ' ';
//             }

//             for(let k = 0; k < 2 * i + 1; k++){
//                 pattern += '*';
//             }
//             console.log(pattern)
//         }

//         for(let i = 0; i < rows; i++){
//             let pattern ='';
//             for(let j = 0; j < i ; j++){
//                 pattern += ' ';
//             }
//             for(let k = 0;  k < 2 * (rows - i) - 1; k++){
//                 pattern += '*';
//             }
//             console.log(pattern)
//         }

//         if(t < testCases.length){
//             console.log();
//         }
//     }
// }

// pattern9TestCases([5 , 7 ]);