function map(arr, callback) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const newItem = callback(item);
    newArr = [...newArr, newItem];
  }
  return newArr;
}

console.log(map([1, 6, 5], (num) => num ** 2));

function repeatString(n, txt) {
  let newTxt = '';
  for (let i = 0; i < n; i++) {
    newTxt = newTxt.concat(txt);
  }
  return newTxt;
}

console.log(repeatString(3, 'hello'));

function addFirst(element) {
  return (array) => {
    array.unshift(element);
    const newArray = array;
    return newArray;
  };
}

const addOrange = addFirst('orange');
console.log(addOrange(['red', 'blue', 'green']));

function addPunctuation(punctuation) {
  return (string) => {
    return string + punctuation;
  };
}

const addExcitement = addPunctuation('!!!');
console.log(addExcitement('Hello World'));
