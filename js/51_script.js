// Iterator

function fruitIterator(values) {
  let nexIndex = 0;
  // We Will return an Object
  return {
    next: function () {
      if (nexIndex < values.length) {
        // We Will return below Object
        return {
          value: values[nexIndex++],
          done: false
        }
      } else {
        return {
          // We Will return below Object With only Done
          done: true
        }
      }
    }
  }
}
let arry = ['Apple', 'Orange', 'Banana', 'Grabs'];
console.log(arry);

const fruits = fruitIterator(arry);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);