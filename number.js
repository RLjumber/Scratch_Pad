// What this example shows is the unary plus '+' operator which precedes its operand
// This is the prefered method to convert a string to a number, rather than the Number or parseInt

// My work here

const stringedNumber = "15"

function numerify() {
    console.log(typeof stringedNumber, "15 as a string");

    const numericNumber = +stringedNumber

    console.log(numericNumber, "15")
};

numerify();

// End my work

// MDN docs example:

function examples() {
    const x = 1;
    const y = -1;

    console.log(+x);
    // Expected output: 1

    console.log(+y);
    // Expected output: -1

    console.log(+'');
    // Expected output: 0

    console.log(+true);
    // Expected output: 1

    console.log(+false);
    // Expected output: 0

    console.log(+'hello');
    // Expected output: NaN
}

examples();