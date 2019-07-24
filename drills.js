/* eslint-disable strict */
function urlify(string) {
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      newString += string[i];
    } else {
      newString += '%20';
    }

  }
  return newString;
}

// console.log(urlify('tauhida parveen'));

function filterArray(array, num) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > num) {
      newArr.push(array[i])
    }
  }
  return newArr;
}
let myArr = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(filterArray(myArr, 3));

sumArray = [4, 6, -3, 5, -2, 1]

function sum(array) {
  let currentSum = 0
  let maxSum = 0


  for (var i = 0; i < array.length; i++) {
    currentSum += array[i]
    if (maxSum > currentSum) {
      maxSum = maxSum
    } else if (maxSum < currentSum) {
      maxSum = currentSum
    } else {
      maxSum += array[i]
    }

  }
  return maxSum
}
// console.log(sum(sumArray))

function remove(str) {
  return str.replace(/[aeiou]/gi, '');
}

// console.log(remove('Battle of the Vowels: Hawaii vs. Grozny'))
// let nums = [1, 3, 9, 4];
// function products(array) {
//   let multiplyArray = [];
//   function multiply(total, num) {
//     return total * num
//   }
//   for (let i = 0; i < array.length; i++) {
//     let otherNumbers = [];

//     for (let j = 0; j < array.length; i++) {
//       if (array[i] !== array[j]) {
//         otherNumbers.push(array[j]);
//       }
//     }
//     multiplyArray.push(otherNumbers.reduce(multiply)) 
//   }
//   return multiplyArray;
// }

// console.log(products(nums));
const arr = [1, 3, 9, 4];
function products(array) {
  let multipliedArray = [];

  function multiply(total, num) {
    return total * num;
  }
  for (let i = 0; i < array.length; i++) {
    let spliced = array.splice(i, 1);
    multipliedArray.push(spliced.reduce(multiply));
    
  }
  return multipliedArray;
}

console.log(products(arr));