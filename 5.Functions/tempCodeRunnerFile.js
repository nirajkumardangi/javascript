function sum(n) {
  if (n < 1) { // 2 < 1 - false
    return n;
  }
  return n + sum(n - 1); 3 + 2 + 1
}

//:: Output
console.log(sum(3));