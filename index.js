function map(arr, callback) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const newItem = callback(item);
    newArr = [...newArr, newItem];
  }
  return newArr;
}

const myArray = [1, 6, 5];
const newArray = map(myArray, (num) => num ** 2);
console.log(newArray);
