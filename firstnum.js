// function isPrime(num) {
//     for(let i =2;i<num;i++){
//         if(num%i ===0){
//             return false;

//         }
//     }
//     return true;
// }
// const primes =[];
// for(let i=1; i<=1000;i++){
//     if(isPrime(i))
//        primes.push(i);
// }
// console.log(isPrime(i))
//*
//******************* */

// function fact(num){
//     let result=1
//     for(let i =2;i<=num;i++){
//         result=result*i
//     }
//     return result
// }
// console.log(fact(3))

//*********************** */
// function isPerfectNumber(num) {
//   if (num <= 1) return false;

//   let sum = 0;
//   for (let i = 1; i <= num / 2; i++) {
//     if (num % i === 0) {
//       sum += i;
//     }
//   }

//   return sum === num;
// }

// // Example usage:
// console.log(isPerfectNumber(6));    // true
// console.log(isPerfectNumber(28));   // true
// console.log(isPerfectNumber(12));   //false
//*************************** */

// function isPerfect(num){
//     let result=0
//     for(let i=1;i<num;i++){
//         if (num%i ==0){
//             result=result+i
//         }
//     }
//     return result===num
// }
// for(let i=1;i<=1000;i++){
//     if(isPerfect(i)){
//         console.log(i)
//     }
// }
//********** */

// function isPlaindrome(num){
//   const str = num.toString();
//   const reversed = str.split('').reverse().join('');
//   return str === reversed;
// }

// // Example usage:
// console.log( isPlaindrome(121));   // true
// console.log( isPlaindrome(123));   // false
// console.log( isPlaindrome(1221));  // true



// function moveZeroToEnd(arr){
//   const nonZeros = arr.filter(num => num !== 0);       // Keep non-zero elements
//   const zeros = arr.filter(num => num === 0);          // Extract zeros
//   return [...nonZeros, ...zeros];                      // Concatenate non-zeros with zeros
// }

// // Example usage:
// console.log( moveZeroToEnd([0, 1,0, 0, 3, 12]));  // Output: [1, 3, 12, 0,0, 0]

function moveZerosInPlace(arr) {
  let insertPos = 0;

  // Move non-zero elements forward
  for (let num of arr) {
    if (num !== 0) {
      arr[insertPos++] = num;
    }
  }

  // Fill the rest with zeros
  while (insertPos < arr.length) {
    arr[insertPos++] = 0;
  }

  return arr;
}

// Example usage:
console.log(moveZerosInPlace([0, 1, 0, 3, 12]));  // Output: [1, 3, 12, 0, 0]


function isPlaindrome(num){


}
function moveZeroToEnd(arr){
    let arr =[]
}



