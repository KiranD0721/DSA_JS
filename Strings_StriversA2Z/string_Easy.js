/* ------------------------------------------------- */

// const removeOuterParenthesis = (s) => {
//     result = '';
//     count = 0;

//     for(const char of s){
//         if(char === '('){
//             if(count > 0){
//                 result += char;
//             }
//             count++;
//         }else if(char === ')'){
//             if(count > 1){
//                 result += char;
//             }
//             count--;
//         }
//     }
//     return result
// };

// s = '(()())(())'
// console.log(removeOuterParenthesis(s));

//----------------------------------------------------------------------

// const reverseAword = (s) => {
//     words = s.split(' ');
//     const reverseWords = words.reverse();
//     return reverseWords.join(' ');
// }

// s = 'the sky is blue'
// console.log(reverseAword(s));

/* -------TC-O(N)-----SC-O(N)--------- */

/* --------------Lets optimize the space complexity---------- */

// const reverseAword = (s) => {
//     let chars = s.split(''); // Convert string to array

//     let start = 0;
//     let end = chars.length - 1;

//     // Helper function
//     function rev(start, end) {
//         while (start < end) {
//             [chars[start], chars[end]] = [chars[end], chars[start]];
//             start++;
//             end--;
//         }
//     }

//     // Reverse the entire string
//     rev(start, end);

//     // Iterate each word and reverse it
//     start = 0;
//     for (let i = 0; i <= end; i++) {
//         if (chars[i] === ' ') {
//             rev(start, i - 1);
//             start = i + 1;
//         }
//     }

//     // If single word (or the last word)
//     rev(start, end);

//     return chars.join(''); // Convert array back to string
// };

// let s = 'the sky is blue'; 
// console.log(reverseAword(s));

/* -------------------------------------------------------------------------------------- */

/* if multiple spaces */

// var reverseWords = function(s) {
//     let words = s.trim().split(/\s+/).filter(word => word !== ''); // Use regex to split on one or more spaces
//     const reverseword = words.reverse();
//     return reverseword.join(' ');
// };

/* -------------------------------------------------------------------------------------- */



