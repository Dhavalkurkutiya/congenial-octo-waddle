function func1() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      const error = true;
      if (!error) {
        console.log("Function: Your Promise Resolve");
        resolve();
      }
      else {
        console.log("Function: Your Promise Reject");
        reject("Sorry not fullfiled");
      }
    }, 2000)
  })
}
func1().then(function(){
  console.log('Harry: Thanks for resolveing');
}).catch(function(error){
  console.log("Harry: Very bed Bro. Reson: "+error);
})