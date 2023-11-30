// Staircase detail

// This is a staircase of size :

//    #
//   ##
//  ###
// ####

// Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

// Write a program that prints a staircase of size .

function staircase(n) {
    // print instead of returning values
    let count = n;
    let numOfSpaces = count -1;
    let numOfHashes = 1;

    while (count > 0) {
        let spaces = "";
        let hashes = "";

        for(let i = 0; i < numOfSpaces; i++) {
            spaces += " ";
        }
    
        for(let j = 0; j < numOfHashes; j++) {
            hashes += "#"
        }
        count --;
        numOfHashes ++;
        numOfSpaces --;
        console.log(spaces + hashes)
    }
    

}


console.log(staircase(5))