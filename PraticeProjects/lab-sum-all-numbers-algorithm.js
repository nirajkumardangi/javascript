function sumAll(arr) {
  let sum = 0;
  let [a, b] = arr;

  let max = a > b ? a : b;
  let min = a < b ? a : b;

  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));
