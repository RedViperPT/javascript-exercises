//Solved using repeat()
// const repeatString = function (string, num) {
//     if (num < 0) {
//         return "ERROR"
//     }
//     else {
//         return string.repeat(num);
//     };
// };


//Solved using loop
const repeatString = function (string, num) {
    if (num < 0) return "ERROR";
    let result = ""
    for (let i = 0; i < num; i++) {
        result += string;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;