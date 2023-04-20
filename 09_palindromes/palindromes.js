const palindromes = function (string) {

    let small = string.replace(/\W/g, "").toLowerCase();
    let len = filtered.length;
    
    if (len % 2 === 0) {
        for (let i = 0; i < len - i - 1; i++) {
            if (filtered[i] !== filtered[len - i -1]) {
                return false;
            }
        } 
        return true;
    } 
    else {
        for (let i = 0; i <= len - i - 1; i++) {
            if (filtered[i] !== filtered[len - i -1]) {
                return false;
            }
        } 
        return true;
    }
};

// const palindromes = function (string) {
//     const processedString = string.toLowerCase().replace(/[^a-z]/g, "");
//     return processedString.split("").reverse().join("") == processedString;
//   };

// Do not edit below this line
module.exports = palindromes;