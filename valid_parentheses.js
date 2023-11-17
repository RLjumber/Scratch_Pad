
s1 = "()"
s2 = "()[]{}"
s3 = "(]"

// var isValid = function(s) {
//     let stack = [];

//     for (let i = 0; i < s.length; ++i) {

//         if (s[i] == "(" && s[i+1] == ")" || s[i] == "[" && s[i+1] == "]" || s[i] == "{" && s[i+1] == "}") {  
//             console.log("true");
//             return true;
//       } else {
//         console.log("false");
//         return false;
//       }
//     };

//  }

var isValid = function(s) {
    if (!s || s.length < 2) {
        return false;
    }

    let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{':'}'
    };

    for (let i=0; i<s.length; ++i) {
        if (map[s[i]]) {
            stack.push(map[s[i]]);
        }
    }
    console.log(stack)
};

 isValid(s2);