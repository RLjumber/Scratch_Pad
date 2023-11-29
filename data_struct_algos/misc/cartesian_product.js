// Given two finite non-empty sets, find their cartesian product

// In mathematics, a Cartesian product of sets A and B is the set of all ordered pairs (a,b) where a is in A and b is in B

const A = [1,2]
const B = [3,4,5]

// Cartesian Product = [[1,3],[1,4],[1,5],[2,3],[2,4],[2,5]]

function cartesianProduct(A,B) {

    // define a product array to hold our new sets
    let productArr = [];
    // loop through A, at every index, we loop through B and create a new set until we reach the end of A
    for(let i = 0; i<A.length; i++) {
        
        for(let j = 0; j<B.length; j++) {
            let set = [];
            set.push(A[i], B[j],)
            productArr.push(set)
        }
    }
    return productArr
}

console.log(cartesianProduct(A,B))

// time complexity O(n^2) - nested loop