function timeConversion(s) {
    // Write your code here
    // check if second to last element in string is an A or P
    // if A then we do not need to add 12, unless === 12
    // only 12 AM will be - 12 hh
    
    for(let i = 0; i<s.length; ++i) {
        var hh = s.slice(0,2);
        // console.log("old hour: ", hh)
        
        if (s[s.length-2] === "P") {
            let hour = parseInt(hh) + 12; //add 12
            //convert to string, put back into string at beginning
            let convertedHour = hour.toString();
            convertedTime = s.replace(hh, convertedHour) 
            return convertedTime
        } else if (s[s.length-2] === "A" && hh === "12") {
            hh = "00";
            let convertedHour = hour.toString();
            convertedTime = s.replace(hh, convertedHour) 
            return convertedTime
        }
    }
    
    
}


console.log(timeConversion("12:05:45AM"))