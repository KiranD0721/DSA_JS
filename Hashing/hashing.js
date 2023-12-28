/* -----------------Data Structure that provides fast data retrieval------------------------- */

// const countOccurances = (arr , targetElement) => {
//     const hashCount = {};

//     arr.forEach(element => {
//         if(hashCount[element]){
//             hashCount[element]++
//         }else {
//             hashCount[element] = 1
//         }
//     });

//     const targetCount = hashCount[targetElement] || 0;
//     console.log(`${targetElement} appears ${targetCount} times`)

// };

// arr = [2,1,2,3,1]
// target = 3
// countOccurances(arr , target);

/* -------------------------------------------------------------------------------------- */

// const countCharacterFrequency = (s, characters) => {
//     const charCount = {};

//     // Initialize counts for specified characters to 0
//     characters.forEach(char => {
//         charCount[char] = 0;
//     });

//     // Iterate through the string and count the specified characters
//     for (let i = 0; i < s.length; i++) {
//         const currentChar = s[i];
//         if (charCount.hasOwnProperty(currentChar)) {
//             charCount[currentChar]++;
//         }
//     }

//     // Display results
//     characters.forEach(char => {
//         const count = charCount[char] || 0;
//         console.log(`${char} appears ${count} times`);
//     });
// };

// const s = 'a,b,c,d,e,a,b,e,f,c';
// const charactersToFind = ['a', 'b', 'z'];
// countCharacterFrequency(s, charactersToFind);


/*--------------USING ASCII------------------------- */

// const countCharacterFrequencyUsingASCII = (str , characters) => {
//     const hashCount = new Array(256).fill(0);
//     n = str.length;

//     for(let i = 0; i < n; i++){
//         const currentChar = str[i].charCodeAt(0);
//         hashCount[currentChar]++;
//     }

//     characters.forEach(char => {
//         const target = char.charCodeAt(0);
//         const count = hashCount[target] || 0;
//         console.log(`${char} appears ${count} times`)
//     })
// }

// const s = 'a,b,c,d,a,b,e,f,c';
// const charactersToFind = ['a', 'b', 'z'];

// countCharacterFrequencyUsingASCII(s , charactersToFind);

/*----------------------------------USING MAP----------------------------- */


// const countOccurrencesUsingMap = (arr) => {
//     const elementCountMap = new Map();

//     arr.forEach(element => {
//         elementCountMap.set(element, (elementCountMap.get(element) || 0) + 1);
//     });

//     elementCountMap.forEach((count, element) => {
//         console.log(`${element} appears ${count} times`);
//     });
// };

// const arrayToCount = [2, 1, 2, 3, 1];
// countOccurrencesUsingMap(arrayToCount);

/*---------------------------------------------------- */

// const countCharacterFrequencyUsingMap = (str, characters) => {
//     const charCountMap = new Map();

//     for (let i = 0; i < str.length; i++) {
//         const currentChar = str[i];
//         charCountMap.set(currentChar, (charCountMap.get(currentChar) || 0) + 1);
//     }

//     characters.forEach(char => {
//         const count = charCountMap.get(char) || 0;
//         console.log(`${char} appears ${count} times`);
//     });
// };

// const s = 'a,b,c,d,a,b,e,f,c';
// const charactersToFind = ['a', 'b', 'z'];

// countCharacterFrequencyUsingMap(s, charactersToFind);

/*-------------------------------------------------------------------------------------------*/
