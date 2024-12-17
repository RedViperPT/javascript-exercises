//Solution using nested for loops, not efficient.
// const removeFromArray = function () {
//     let array = arguments[0];
//     for (let j = arguments.length - 1; j > 0; j--) {
//         for (let i = array.length - 1; i >= 0; i--) {
//             if (arguments[j] === array[i]) {
//                 array.splice(i, 1);
//             }
//         }
//     }
//     return array;
// };

const removeFromArray = function () {
    let array = arguments[0];
    // Convert elements to remove into a Set
    const toRemove = new Set(Array.from(arguments).slice(1));

    // Filter out elements present in the 'toRemove' Set and return newArray
    return newArray = array.filter(item => !toRemove.has(item));;
};

// Do not edit below this line
module.exports = removeFromArray;
