// Maps in JavaScript: We can use any type of key or value
const myMap = new Map();

const key1 = "mystr", key2 = {}, key3 = function () {};

// Setting map values
myMap.set(key1, 'This is string');
myMap.set(key2, 'This is blank Object');
myMap.set(key3, 'This is blank function');
console.log(myMap);

// Getting the values from a Map
let value1 = myMap.get(key1);
let value2 = myMap.get(key2);
let value3 = myMap.get(key3);

console.log(value1);
console.log(value2);
console.log(value3);

// Get the size of the map
console.log(myMap.size);

// You can loop using for..of to get keys and values
for (let [key, value] of myMap) {
  console.log(key, value);
}

// Get only keys
for (let key of myMap.keys()) {
  console.log('key is ', key);
}

// Get only values
for (let value of myMap.values()) {
  console.log('value is ', value);
}

myMap.forEach((value, key)=> {
  console.log('key is ', key);
  console.log('value is ', value);
});

// Converting map to an array
let arry = Array.from(myMap);
console.log(arry);

// Converting map keys to an array
let arryKey = Array.from(myMap.keys());
console.log(arryKey);

// Converting map values to an array
let arryValue = Array.from(myMap.values());
console.log(arryValue);