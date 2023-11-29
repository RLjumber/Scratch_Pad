// Sort the array in ascending order using the Bubble algorithm. 

// In insertion sort, vitually split the array into a sorted and unsorted part by declaring a number-to-insert (NTI) and a sorted-element (SE) 

// consider the first element in the array the initial SE

// compare the SE with the values in the unsorted part

// if the elements in the sorted part is smaller than the unsorted part, proceed to the next element. Else, shift the element in the unsorted part to the right. 


// **********   NEED REVIEW *********************************

function insertionSort(arr) {
    
    for(let i = 1; i<arr.length; ++i) {
        let NTI = arr[i];
        let j = i - 1; // j equal to index of the sorted element, always right behind the number to insert

        while(j >= 0 && arr[j] > NTI) {
            arr[j+1] = arr[j];
            j = j - 1; //loop through the sorted part by decrementing j by 1 every iteration
        }
        arr[j+1] = NTI;
    }
    return arr;
}

arr = [-6, 20, 8, -2, 4];

console.log(insertionSort(arr))

// Nested loop = quadratic, so O(n^2)