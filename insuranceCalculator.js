const calculate = (arrayOfNumbers) => {
  let total = 0;
  if (Array.isArray(arrayOfNumbers) && arrayOfNumbers) {
    arrayOfNumbers.forEach((distance) => {
      if (distance >= 0 && distance <= 20) {
        total += 200;
      } else if (distance >= 21 && distance <= 50) {
        total += 200 + (distance - 20);
      } else if (distance >= 51 && distance <= 100) {
        total += 220 + 0.8 * (distance - 50);
      } else if (distance > 101) {
        total += 260 + 0.5 * (distance - 100);
      } else {
        throw new Error("Invalid input");
      }
    });
    return total;
  } else {
    throw new Error("Invalid array input");
  }
};

console.log(calculate([5, 25, 55, 105]));
console.log(calculate([5]));

module.exports = calculate;
