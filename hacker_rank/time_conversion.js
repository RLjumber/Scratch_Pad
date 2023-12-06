// function timeConversion(s) {
//     // Write your code here
//     // check if second to last element in string is an A or P
//     // if A then we do not need to add 12, unless === 12
//     // only 12 AM will be - 12 hh
//     var hh = s.slice(0,2);
//     var setting = s.slice(-2);
//     var rest = s.slice(2,-2);

//     if (setting === "PM" && hh !== "12") {
//         hh = (parseInt(hh) + 12).toString();
//     } else if (setting === "AM" && hh === "12") {
//         hh = "00";
//     }
//     return hh + rest;
// }


// console.log(timeConversion("12:05:45AM")); // Should print "00:05:45"
// console.log(timeConversion("12:05:45PM")); // Should print "12:05:45"
// console.log(timeConversion("07:05:45PM")); // Should print "19:05:45"









function subtract(n1, n2) {
    return n1 - n2;
}

// console.log("available from bank: ", subtract(3567, 2100))
// console.log("if I payed the above towards statement: ", subtract(3320, 1467))
console.log(subtract(3320, 1500))
console.log(4-2)









// // function timeConversion(s) {
// //     var hh = s.slice(0,2);
// //     var setting = s.slice(-2);
// //     var rest = s.slice(2, -2);
    
// //     if (setting === "PM" && hh !== "12") {
// //         hh = (parseInt(hh) + 12).toString();
// //     } else if (setting === "AM" && hh === "12") {
// //         hh = "00";
// //     }
    
// //     return hh + rest;
// // }

// // console.log(timeConversion("12:05:45AM")); // Should print "00:05:45"
// // console.log(timeConversion("12:05:45PM")); // Should print "12:05:45"
// // console.log(timeConversion("07:05:45PM")); // Should print "19:05:45"