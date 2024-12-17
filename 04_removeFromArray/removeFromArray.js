//Solution using nested for loops, not efficient.
const removeFromArray = function () {
    let array = arguments[0];
    for (let j = arguments.length - 1; j > 0; j--) {
        for (let i = array.length - 1; i >= 0; i--) {
            if (arguments[j] === array[i]) {
                array.splice(i, 1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
