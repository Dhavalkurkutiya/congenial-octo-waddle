console.log("Ok");

const data = [{
  name: "Dhaavl",
  age: 17,
  city: "Dharmpur,Valsad",
  language: "javascript",
  image: "img/github.svg"
}, {
  name: "Rahul",
  age: 18,
  city: "Dharmpur,Valsad",
  language: "javascript",
  image: "img/google.svg"
}, {
  name: "Abhay",
  age: 34,
  city: "Dharmpur,Valsad",
  language: "javascript",
  image: "img/github.svg"
}, {
  name: "Lalu",
  age: 23,
  city: "Dharmpur,Valsad",
  language: "javascript",
  image: "img/google.svg"
}, {
  name: "Pintu",
  age: 25,
  city: "Dharmpur,Valsad",
  language: "javascript",
  image: "img/github.svg"
}];

// Cv Iterator
function cvIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < profiles.length ?
      {
        value: profiles[nextIndex++],
        done: false
      }:
      {
        done: true
      };
    }
  };
}
const candidates = cvIterator(data);
nextCv();

// Button Listener  for next button
let next = document.getElementById('next');
next.addEventListener('click', nextCv);

function nextCv() {
  let currentCandidate = candidates.next().value;
  let image = document.getElementById('image');
  let profile = document.getElementById('profile');
  if (currentCandidate != undefined) {

    image.innerHTML = `<img src='${currentCandidate.image}'>`;

    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">Age: ${currentCandidate.age}</li>
    <li class="list-group-item">City: ${currentCandidate.city}</li>
    <li class="list-group-item">Language: ${currentCandidate.language}</li>
    </ul>`;
  }
  else{
    alert('End of Candidates');
    window.location.reload();
  }
}