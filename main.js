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

// Write a recursive function that completely flattens an array of nested arrays, regardless of how deeply nested the arrays are.
// Once your recursive function is complete, trampoline it.

// technicaly practicing tht event loop using array as an example

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
