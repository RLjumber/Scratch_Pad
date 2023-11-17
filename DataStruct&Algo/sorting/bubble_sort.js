// Sort the array in ascending order using the Bubble algorithm. Note: the bubble algorithm is considered a terrible algo and is mostly used to practice

// Bubble sort intuition: 
// [ -6-8, 10, -2, 30] check the first two numbers, if the left is greater, then swap them. 
// [ -6, 8-10, -2, 30] check the next two, they are in order
// [ -6, 8, 10 -2, 30] check the next two, left is greater so swap them out [-6, 8, -2-10, 30].
// If you get to the end of the array and elements have been swapped, then repeat the process.
// Once you get to the end of the array and no elements have been swapped. The array is sorted, you are done.



function bubbleSort(arr) {

    let swapped;

    do {
        swapped = false;
        // set swapped to false, if it gets set to true later then that means 
        for(let i = 0; i < arr.length - 1; i++) {
            // we stop at arr.length - 1 because we compare the second to last with the last (arr[i+1]), so there is no need to check the last value as there is no value to compare it to beyond the end of the array.
            if (arr[i] > arr[i+1]) {
                // these three lines are important and swap the values of two elements in an array
                let temp = arr[i];
                // store the first element in a temporary variable temp, you need this because it avoids the problem where you need to assign the currentVal to nextVal, but once you do so they become each other and can't swap them.
                arr[i] = arr[i+1];
                // assign the value of the second element to the first element
                arr[i+1] = temp;
                // assign the temp variable equal to the first value to the second element, effectively swapping them
                swapped = true;
            } 
        }
    } while(swapped)
    return arr;
};

const arr = [ -6,-8, 10, -2, 30]

console.log("Unsorted arr:", arr)
console.log("Sorted arr: ",bubbleSort(arr))
