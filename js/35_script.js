console.log("This is file 35");
let fetchBtn = document.getElementById('fetchBtn');

fetchBtn.addEventListener('click', bottenClickHendler);

function bottenClickHendler() {
  console.log("You have Click fetchBtn");
  // Instantiate an xhr objects
  const xhr = new XMLHttpRequest();

  // Open tha object
  // xhr.open('GET', 'https://api.mocki.io/v1/b043df5a', true);
  //Use this for post Requset
  xhr.open('POST', 'https://reqres.in/api/login', true);
  xhr.setRequestHeader("Content-Type", "application/json");

  // What to do progress
  xhr.onprogress = function() {
    console.log("On progress");
  }

  // xhr.onreadystatechange = function() {
  //   console.log('Ready stat is ', xhr.readyState);
  //
  // }

  // What to do response is ready
  xhr.onload = function() {
    if (this.status === 200) {
      console.log(this.responseText);
    } else {
      console.log("sum erorr  accaured");
    }
  }

  // Send this Requset
  param = ` {
  "email": "eve.holt@reqres.in",
  "password": "pistol"
  }
  `;
  xhr.send(param);
  console.log("Done")
}


let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHendlear);

function popHendlear() {
  console.log("You have Click popHendlear");
  // Instantiate an xhr objects
  const xhr = new XMLHttpRequest();

  // Open tha object
  // xhr.open('GET', 'https://reqres.in/api/users?page=2', true);
  xhr.open('GET', ' news.json', true);
  

  // What to do response is ready
  xhr.onload = function() {
    if (this.status === 200) {

      let obj = JSON.parse(this.responseText);
      console.log(obj);
      
      let list = document.getElementById('list');
      str = '';
      for (key in obj) {
        str += `<li>${obj[key].name}</li>`;
        }
      list.innerHTML = str;
    } else {
      console.log("sum erorr  accaured");
    }
  }

  // Send this Requset
  xhr.send();
  console.log("Done")
}

// =========Readystate Value=========
/*
  0:UNSENT
  1:OPENED
  2:HEADERS_RECEIVED
  3:LOADING
  4:DONE
  */
// =========Readystate Value=========