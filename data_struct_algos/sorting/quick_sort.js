// Separate the array into two arrays, the let being values less than the pivot, the right being values greater than the pivot

arr = [-1, 10, -15, -2, 8, 3]

function quickSort(arr) {

    if(arr.length < 2) {
        return arr;
    }

    let pivot = arr[arr.length-1]

    let left = [];
    let right = [];

    for(let i = 0; i<arr.length-1; i++) {
        if(arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]

    console.log(left, right)
    
}


console.log(quickSort(arr))