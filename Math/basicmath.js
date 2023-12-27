/* -------------------------------------Basic Math----------------------------- */

// const countDigit = (n) => {
//     count = 0;

//     while(n > 0){
//         count = count + 1;
//         n = Math.floor(n/10);
//     }
//     return count;
// }
// number = 1556
// console.log(countDigit(number))

/* ---------------------------------------------------------------------------------------- */

// const reverseAnumber = (n) => {
//     rev = 0

//     while(n > 0){
//         lastdigit = n % 10;
//         n = Math.floor(n / 10);
    
//         if(!(rev ===0 && lastdigit === 0)){
//             rev = (rev * 10) + lastdigit;
//         }
//     }
//     return rev;
// }

// num = 123400
// console.log(reverseAnumber(num))

/*------------------------------------------------------------------------------------------------- */

// const palindromeNumber = (n) => {
//     dup = n;
//     rev = 0;
//     while(n > 0){
//         lastdigit = n % 10;
//         n = Math.trunc(n / 10)

//         rev = (rev * 10) + lastdigit
//     }
//     if(rev === dup){
//         return true
//     } else{
//         return false
//     }
// }

// num = 13312
// console.log(palindromeNumber(num));

/*------------------------------------------------------------------------------------------------------- */

/*
    
An Armstrong number (also known as a narcissistic number, pluperfect digital invariant, or pluperfect number) 
is a number that is the sum of its own digits each raised to the power of the number of digits.
 For example, 153 is an Armstrong number because 
13+53+33=153
1 
3
 +5 
3
 +3 
3
 =153.
*/
/*------------------------------------------------------------------------------------------------------------------- */

// const armstongNumber = (n) => {
//     dup = n;
//     sum = 0;

//     while(n !==0){
//         lastdigit = n % 10;
//         sum = sum + (lastdigit * lastdigit * lastdigit);
//         n = Math.trunc( n / 10);
//     }
//     if(dup === sum){
//         return true
//     }
//     return false
// }

// number = 372
// console.log(armstongNumber(number));

/* -------------------------------------------------------------------------- */
// const printdivisor = (n) => {
//     for(let i = 1; i <= n; i++){
//         if(n % i == 0){
//             console.log(i)
//         }
//     }
// }

// number = 36;
// printdivisor(number);

/*------------------------------------------------------------------------------------ */

// const printDivisor = (n) => {
//     let num = [];

//     for (let i = 1; i * i <= n; i++) {
//         if (n % i === 0) {
//             num.push(i);
//             if (n / i !== i) {
//                 num.push(n / i);
//             }
//         }
//     }
//     num  = num.sort((a, b) => a - b);
//     for(n in num){
//         console.log(num[n]);
//     }
// }

// const number = 36;
// printDivisor(number);

/*-------------------------------------------------------------------------------- */

// const checkPrimeNumber = (n) => {
//     let cout = 0;

//     for (let i = 1; i <= n; i++) {
//         if (n % i === 0) {
//             cout = cout + 1;
//         }
//     }

//     if (cout === 2) {
//         return true;
//     }

//     return false;
// }

// const num = 11;
// console.log(checkPrimeNumber(num));

/*------------------------------------------------------------------------------------ */

// const gcdMethod1 = (n1 , n2) => {
//     let gcd = 1;
//     n = Math.min(n1 ,n2)
//     for(let i = 1; i < n; i++){
//         if(n1 % i == 0 && n2 % i == 0){
//             gcd = i;
//         }
//     }
//     console.log(gcd);
// }

// gcdMethod1(48,18);

// const gcdMethod2 = (n1 , n2) => {
//     n = Math.min(n1 , n2)
//     for(let i = n; i >= 1; i--){
//         if(n1 % i == 0 && n2 % i == 0){
//             console.log(i);
//             break;
//         }
//     }
// }

// gcdMethod2(48,18)

// const gcdMethod3 = (a , b) => {
//     while(b !== 0){
//         const remainder = a % b;
//         a = b;
//         b = remainder;
//     }
//     return Math.abs(a)
// }

// console.log(gcdMethod3(48,18));