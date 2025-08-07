function largestOfAll(arr) {
  // console.log(maxArr);
  let newArr = [];
  let maxArr;
  for (let i = 0; i < arr.length; i++) {
    maxArr = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (maxArr < arr[i][j]) {
        maxArr = arr[i][j];
      }
    }
    newArr.push(maxArr);
  }
  return newArr;
}
