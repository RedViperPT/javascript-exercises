const reverseString = function(string) {
    const charArray = string.split("");
    const arrayLenght = charArray.length;
    let reversedArray = [];
    for (let i = arrayLenght - 1; i >= 0; i--) {
        reversedArray.push(charArray[i]);
    }
    const result = reversedArray.join("");
    return result;
};






// Do not edit below this line
module.exports = reverseString;
