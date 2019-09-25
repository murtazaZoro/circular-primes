const isPrime = require('quick-is-prime');
const getArrayOfNumbers = max => ([...new Array(max)]).map((val, idx) => idx + 1);

const countCircularPrimes = (max = 1000) => {
  const values = getArrayOfNumbers(max);

  // Return number of circular primes
};

module.exports = countCircularPrimes;
