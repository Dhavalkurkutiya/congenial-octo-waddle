let impArray = ['Abhay','Dhaval','Krunal','Nikhil'];

localStorage.setItem('name1','DhavalKurkutiya');
localStorage.setItem('name2','Hardik');
localStorage.setItem('name3','Abhay');
localStorage.setItem('name4',JSON.stringify(impArray));

// localStorage.clear();
// localStorage.removeItem('name');


let name = localStorage.getItem('name1');
name = JSON.parse(localStorage.getItem('name4'));
console.log(name);



sessionStorage.setItem('name1','DhavalKurkutiya');
sessionStorage.setItem('name2','Hardik');
sessionStorage.setItem('name3','Abhay');
