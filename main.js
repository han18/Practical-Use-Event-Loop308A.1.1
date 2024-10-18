// Declare a global counter variable.

let counter = 0;

// Create a simple function that increments the variable, and then calls itself recursively.
// Surround the initial function call in a try/catch block.


function incrementVar(n, limit) {
    if (n < limit) {
        console.log(n); // Print the current value of n
        incrementVar(n + 1, limit); // Recursive call with incremented n
    }
}

// try/catch
try {
    incrementVar(0, 10);
} catch (error) {
    console.error("An error occurred:", counter);
}

incrementVar()

// Part 2: Trampolines
    // using a trampoline to solve the stock overflow instead of a try and catch

// Write a recursive function that completely flattens an array of nested arrays, regardless of how deeply nested the arrays are.
// Once your recursive function is complete, trampoline it.

// technicaly practicing the event loop using array as an example

function flattenArray(inputArray) {
    // pushing the new flattened array here
    let outputArray = []; 
    return trampoline(() => recursion(0, inputArray, outputArray));
}

// Trampoline function to handle recursive calls
function trampoline(fn) {
    while (typeof fn === 'function') {
        fn = fn();
    }
    return fn;
}


function flattenArray(inputArray) {
    // we are pushing the new flatten array here
    let outputArray = []; 
    recursion(0, inputArray, outputArray)
    return outputArray;  

}

// creating the recursion function to accomplish the above task
function recursion(index, inputArray, outputArray ) {
    // checking its condition

    if (index >= inputArray.length) return;
    if (Array.isArray(inputArray[index])) {
        recursion(0, inputArray[index], outputArray);
    } else {
        outputArray.push(inputArray[index]);
    }

    recursion(index + 1, inputArray, outputArray);
}

//creating the array 
let flatArray = flattenArray([1, 2, [3, [4, 5] ], 6]);
console.log(flatArray)






// Part 3: Deferred Execution
// another way to avoid stack overflow is using a setTimeout place tasks into the event queue

// Create a simple HTML element to hold text. Cache this HTML element into a JavaScript variable.
// Write a function that takes a parameter n and adds a list of all prime numbers between one and n to your HTML element.
// Once complete, use the alert() method to alert the user that the calculation is finished.

const textElement = document.querySelector('.text')
console.log(textElement, 'testing...')

function PrimeNumber(n) {

    for(let i = 1; i <= n.length; i++){
        if(n % 1 === 0) {
            return[i]
        }
    }
   
}





// https://www.freecodecamp.org/news/flatten-array-recursion/ 