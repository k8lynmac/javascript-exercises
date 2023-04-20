const fibonacci = function(position) {

    let array = [1, 1]; 
    let sum = 0;

    if (typeof position === "string") {
        position = parseInt(position, 10);
    } 

    if (position < 0) {
        return "OOPS";
    } 

    if (position == 1 || position == 2) 
    {
        return array[position-1];
    }

    for (let i=2; i <= position; i++) {
        let sum = array[i-2] + array[i-1];
        array.push(sum);
        let len = array.length; 

        if (position === len) {
            return array[position-1];
        }
    }
};

// Do not edit below this line
module.exports = fibonacci;
