// Id With Button 
let myBtn = document.getElementById('myBtn');

// Id With Content
let content = document.getElementById('content')

// function getData() {
//   console.log("Started get data");
//   url = 'CMD.txt';
//   fetch(url).then((response)=>{
//     console.log("Inside First then");
//     return response.text();
//   }).then((data)=>{
//     console.log("Inside secand then");
//     console.log(data);
//   })
// }

function getData() {
  console.log("Started get data");
  url = 'news.json';
  fetch(url).then((response) => {
    console.log("Inside First then");
    return response.json();
  }).then((data) => {
    console.log("Inside secand then");
    console.log(data);
  })
}

function postData() {
  url = 'news.json';
  data =
    params = {
      mathod: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
  fetch(url, params).then(response => response.json())
    .then(data =>console.log(data))
}

getData();