// Declare a global counter variable.

let counter = 0;

// Create a simple function that increments the variable, and then calls itself recursively.

function incrementVar(n, limit) {
    if (n < limit) {
        console.log(n); // Print the current value of n
        incrementVar(n + 1, limit); // Recursive call with incremented n
    }
}

// Example usage
incrementVar(0, 5);