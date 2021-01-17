// Initialize the news api parameters
// let source = 'the-times-of-india';
let source = 'in';
let apiKey = 'c36d014008c34ef9997394b01c954a0b';
let apiKey2 = 'b855670a95bc4879b768c0e833839831';


// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');


// Create an ajax get request
const xhr = new XMLHttpRequest();
// xhr.open('GET', 'http://newsapi.org/v2/top-headlines?country=in&apiKey=c36d014008c34ef9997394b01c954a0b', true);
xhr.open('GET', 'http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=c36d014008c34ef9997394b01c954a0b', true);
// xhr.setRequestHeader("Content-Type", "application/json");

// What to do progress
xhr.onprogress = function() {
  // console.log("On progress");
}

// What to do when response is ready
xhr.onload = function() {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    let newsHtml = "";
    articles.forEach(function(element, index) {
      let news = `
      <div class="newsBox">
      <div class="newsTitle">
      <h3>${element["title"]}</h3>
      </div>
      <div class="newsImage">
      <img class="imgsize" src="${element["urlToImage"]}" alt="images" />
      </div>
      <div class=newsDescription"">
      <p>${element["content"]}  <b><a href="${element["url"]}">Read more...</a></b></p>
      </div>
      <div class="newsAuther">
      <b>Auther: ${element["author"]}</b>
      <br>
      <b>PublishedAt: ${element["publishedAt"]}</b>
      </div>
      </div>
      `;
      newsHtml += news;
    });
    newsAccordion.innerHTML = newsHtml;
  }
  else {
    console.log('Error');
  }
}

// Send this Requset
xhr.send();