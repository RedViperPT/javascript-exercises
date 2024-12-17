const sumAll = function (min, max) {
  if ((min < 0) || (max < 0)) return "ERROR";
  if (!(Number.isInteger(min) && Number.isInteger(max))) return "ERROR";

  // Ensure min is smaller than max
  if (min > max) {
    [min, max] = [max, min]; // Swap values
  }

  // Calculate the sum directly
  let sum = (max * (max + 1)) / 2 - ((min - 1) * min) / 2;
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
