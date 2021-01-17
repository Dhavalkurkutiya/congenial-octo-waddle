console.log("This is File is 34");
setTimeout(() => {
  for (let index = 0; index < 5; index++) {
    const element = index;
    console.log('This is index Number', element);
  }
},2000)

console.log(Date());
console.log('Done');