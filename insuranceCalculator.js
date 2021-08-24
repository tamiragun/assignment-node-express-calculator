const calculate = (arrayOfNumbers) => {
  let total = 0;
  if (Array.isArray(arrayOfNumbers) && arrayOfNumbers.length > 0) {
    return arrayOfNumbers.reduce((accumulator, distance) => {
      if (distance >= 0 && distance <= 20) {
        return (accumulator += 200);
      } else if (distance <= 50) {
        return (accumulator += 200 + (distance - 20));
      } else if (distance <= 100) {
        return (accumulator += 220 + 0.8 * (distance - 50));
      } else if (distance > 101) {
        return (accumulator += 260 + 0.5 * (distance - 100));
      } else {
        throw new Error("Invalid input");
      }
    }, 0);
  } else {
    throw new Error("Invalid array input");
  }
};

module.exports = calculate;
