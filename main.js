// happy new year  

function happyNewYear(finalusername,age) {
   finalusername =  finalusername.slice(0, -1);
    console.log(`Happy New Year ${finalusername} ! you are ${age} years old`);
    console.log(`Happy New Year ${finalusername} ! you are ${age} years old`);
    console.log(`Happy New Year ${finalusername} ! you are ${age} years old`);
    console.log(`Happy New Year ${finalusername} ! you are ${age} years old`);
    console.log(`Happy New Year ${finalusername} ! you are ${age} years old`);
    
} 

happyNewYear(prompt("Enter your name:"), prompt("Enter your age:"));

// return example
function add(x, y) {
    let result = x + y;
    return result;
}
let sum = add(2, 3);
console.log(sum); // 5


//boolean example

function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isEven(prompt("Enter a number:")));

//boolean with return example

function isOdd(number) {
    return number % 2 !== 0;
}
console.log(isOdd(prompt("Enter a number:")));

// workout 1
const arr1 = [2, 4, 6];
const arr2 = [1, 3, 5];
const arr3 = [7, 8];

function addArrays(array1, array2, array3) {
    const all = [...array1, ...array2, ...array3];
    const total = all.reduce((sum, n) => sum + n, 0);
    return total;
}

let totalSum = addArrays(arr1, arr2, arr3);
console.log(totalSum); // 36

// workout 2
const arr_1 = [10, 20];
const arr_2 = [5, 15, 25];
const arr_3 = [30];
const arr_4 = [2, 4, 6];

function addAll(array1, array2, array3, array4) {
    const all1 = [...array1, ...array2, ...array3, ...array4];
    const total = all1.reduce((sum, n) => sum + n, 0);
    return total;
}

console.log(addAll(arr_1, arr_2, arr_3, arr_4)); 

//workout 3
const arr01 = [2, "hello", 4];
const arr02 = ["world", 6, 8];
const arr03 = [10, "test", 12];
function addNumbersOnly(arr01, arr02, arr03) {
    const all2 = [...arr01, ...arr02, ...arr03];
    let filtered = all2.filter(item => typeof item === 'number');
    let total = filtered.reduce((sum, n) => sum + n, 0);
    return total;
     
}

let result = addNumbersOnly(arr01, arr02, arr03);
console.log(result);

