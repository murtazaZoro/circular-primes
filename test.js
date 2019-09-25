const countCircularPrimes = require('./index.js');

const result = countCircularPrimes(1000);
if (result === 25) {
  console.log(`${result} is the correct answer.`);
} else {
  throw Error(`${result} is the wrong answer.`);
}