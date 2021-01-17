// Text typer
var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 100 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap {color:red;border-right: 0.1em solid #666 }";
  document.body.appendChild(css);
};

// Offline and OnLine Checker
$('#log').hide();
window.addEventListener('load', function() {
  var status = document.getElementById("status");
  var log = document.getElementById("log");

  function updateOnlineStatus(event) {
    var condition = navigator.onLine ? "online": "offline";
    status.className = condition;
    status.innerHTML = condition.toUpperCase();
    
  }
  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
});

// Iterator in javascript
const data = [
  {
    "url":"01_install vscode setup.html",
    "title":"Install vscode setup for Javascript",
    "content":"I’m sorry, this question would be out of my expertise.",
    "publishedAt":"10:25 pm"
  },
    {
      "url":"02_Console Loges Errors Warning.html",
      "title":"Console Loges Errors Warning",
      "content":"I’m sorry, this question would be out of my expertise.",
      "publishedAt":"11:20 pm"
    },
    {
      "url":"03_Variables in Javascript.html",
      "title":"Variables in Javascript",
      "content":"I’m sorry, this question would be out of my expertise.",
      "publishedAt":"10:56 pm"
    }, {
      "url":"04_Data type in javascript.html",
      "title":"Data type in javascript",
      "content":"I’m sorry, this question would be out of my expertise.",
      "publishedAt":"10:56 pm"
    }, {
      "url":"05_Type Conversion  Coercion.html",
      "title":"Type Conversion in javascript",
      "content":"I’m sorry, this question would be out of my expertise.",
      "publishedAt":"10:04 pm"
    }, {
      "url":"06_Strings Properties, Methods  Template Literals.html",
      "title":"Strings Properties, Methods  Template Literals",
      "content":"I’m sorry, this question would be out of my expertise.",
      "publishedAt":"12:56 pm"
    }, 
    {
      "url":"07_Arrays and Objects In JavaScript.html",
      "title":"Arrays and Objects In JavaScript",
      "content":"I’m sorry, this question would be out of my expertise.",
      "publishedAt":"12:56 pm"
    },
    {
      "url":"08_If Else Conditionals & Switches in JavaScript.html",
      "title":"If Else Conditionals & Switches in JavaScript",
      "content":"I’m sorry, this question would be out of my expertise.",
      "publishedAt":"12:56 pm"
    }, 
    {
      "url":"09_For, While & Do while Loops.html",
      "title":"For, While & Do while Loops",
      "content":"I’m sorry, this question would be out of my expertise.",
      "publishedAt":"12:56 pm"
    }, 
    {
      "url":"10_Functions in JavaScript.html",
      "title":"Functions in JavaScript",
      "content":"I’m sorry, this question would be out of my expertise.",
      "publishedAt":"12:56 pm"
    }, 
    {
      "url":"11_Manipulating Websites Using JS Window Object.html",
      "title":"Manipulating Websites Using JS Window Object",
      "content":"I’m sorry, this question would be out of my expertise.",
      "publishedAt":"12:56 pm"
    }, 
    {
      "url":"12_Understanding DOM & Creating a Website Layout.html",
      "title":"Understanding DOM & Creating a Website Layout",
      "content":"I’m sorry, this question would be out of my expertise.",
      "publishedAt":"12:56 pm"
    },
    {
      "url":"13_WebPage Crawler Exercise-1.html",
      "title":"Exercise-1 WebPage Crawler script create [Question]",
      "content":"I’m sorry, this question would be out of my expertise.",
      "publishedAt":"12:56 pm"
    },
    {
      "url":"14_Selectors In JavaScrip.html",
      "title":"Selectors In JavaScrip",
      "content":"I’m sorry, this question would be out of my expertise.",
      "publishedAt":"12:56 pm"
    },
    {
      "url":"15_Children, Parent & Traversing the DOM.html",
      "title":"Children, Parent & Traversing the DOM",
      "content":"I’m sorry, this question would be out of my expertise.",
      "publishedAt":"12:56 pm"
    },
    {
      "url":"16_Creating, Removing & Replacing Elements.html",
      "title":"Creating, Removing & Replacing Elements",
      "content":"I’m sorry, this question would be out of my expertise.",
      "publishedAt":"12:56 pm"
    },
    {
      "url":"17_Events & Event Object In JavaScript.html",
      "title":"Events & Event Object In JavaScript",
      "content":"I’m sorry, this question would be out of my expertise.",
      "publishedAt":"12:56 pm"
    },
    {
      "url":"18_More on JavaScript Events.html",
      "title":"More on JavaScript Events",
      "content":"I’m sorry, this question would be out of my expertise.",
      "publishedAt":"12:56 pm"
    },
    {
      "url":"19_Smart Page Crawler In JS Exercise1 Solv.html",
      "title":"Exercise-1 Smart Page Crawler In JS       [Solution]",
      "content":"I’m sorry, this question would be out of my expertise.",
      "publishedAt":"12:56 pm"
    },
    {
      "url":"20_Local & Session storage in JavaScript.html",
      "title":"Local & Session storage in JavaScript",
      "content":"I’m sorry, this question would be out of my expertise.",
      "publishedAt":"12:56 pm"
    },
    {
      "url":"21_ Create Editable div exercise-2.html",
      "title":"Exercise-2 Create Editable Div [Question]",
      "content":"I’m sorry, this question would be out of my expertise.",
      "publishedAt":"12:56 pm"
    },
    {
      "url":"22_Project-1 Create a Notes Taking Website.html",
      "title":"Project-1 Create a Notes Taking Website",
      "content":"I’m sorry, this question would be out of my expertise.",
      "publishedAt":"12:56 pm"
    },
    {
      "url":"23_Math Object In JavaScript.html",
      "title":"Math Object In JavaScript",
      "content":"I’m sorry, this question would be out of my expertise.",
      "publishedAt":"12:56 pm"
    },
    {
      "url":"24_Date & Time In JavaScript.html",
      "title":"Date & Time In JavaScript",
      "content":"I’m sorry, this question would be out of my expertise.",
      "publishedAt":"12:56 pm"
    },
    {
      "url":"25_Creating an Editable Div Exercise 2 Solve.html",
      "title":"Exercise-2 Creating an Editable Div [Solution]",
      "content":"I’m sorry, this question would be out of my expertise.",
      "publishedAt":"12:56 pm"
    },
    {
      "url":"26_Improving Magic Notes Website Exercise 3.html",
      "title":"Exercise-3 Improving Magic Notes Website [Question]",
      "content":"I’m sorry, this question would be out of my expertise.",
      "publishedAt":"12:56 pm"
    },
    {
      "url":"27_Object Literals, Constructors and Object Oriented JavaScript.html",
      "title":"Object Literals, Constructors and Object Oriented JavaScript",
      "content":"I’m sorry, this question would be out of my expertise.",
      "publishedAt":"12:56 pm"
    },
    {
      "url":"28_Object Prototype In javascript.html",
      "title":"Object Prototype In javascript",
      "content":"I’m sorry, this question would be out of my expertise.",
      "publishedAt":"12:56 pm"
    },
    {
      "url":"29_Notes App with Title - Exercise 3 Solution.html",
      "title":"Exercise-3 Notes App with Title [Solution]",
      "content":"I’m sorry, this question would be out of my expertise.",
      "publishedAt":"12:56 pm"
    },
    {
      "url":"30_Prototype Inheritance In JavaScript.html",
      "title":"Prototype Inheritance In JavaScript",
      "content":"I’m sorry, this question would be out of my expertise.",
      "publishedAt":"12:56 pm"
    },
    {
      "url":"31_Es6 Class and Inheritance.html",
      "title":"Es6 Class and Inheritance",
      "content":"I’m sorry, this question would be out of my expertise.",
      "publishedAt":"12:56 pm"
    },
    {
      "url":"32_Implementat a Library class Exasize 4.html",
      "title":"Exercise-4 Implementat a Library class [Question]",
      "content":"I’m sorry, this question would be out of my expertise.",
      "publishedAt":"12:56 pm"
    },
    {
      "url":"33_Project-2 Building a College Library Website.html",
      "title":"Project-2 Building a College Library Website",
      "content":"I’m sorry, this question would be out of my expertise.",
      "publishedAt":"12:56 pm"
    },
    {
      "url":"34_What is Asynchronous Programing.html",
      "title":"What is Asynchronous Programing",
      "content":"I’m sorry, this question would be out of my expertise.",
      "publishedAt":"12:56 pm"
    }, 
    {
      "url":"35_Ajex tutorial in Hindi.html",
      "title":"Ajex tutorial in Hindi",
      "content":"I’m sorry, this question would be out of my expertise.",
      "publishedAt":"12:56 pm"
    }, 
    {
      "url":"36_Exasize 4 Library class.html",
      "title":"Exercise-4 Library class Implementatn [Solution]",
      "content":"I’m sorry, this question would be out of my expertise.",
      "publishedAt":"12:56 pm"
    }, 
    {
      "url":"37_Call back function in javascript.html",
      "title":"Call back function in javascript",
      "content":"I’m sorry, this question would be out of my expertise.",
      "publishedAt":"12:56 pm"
    }, 
    {
      "url":"38_Using a Dictionary api Exasize 5.html",
      "title":"Exercise-5 Using a Dictionary api [Question]",
      "content":"I’m sorry, this question would be out of my expertise.",
      "publishedAt":"12:56 pm"
    }, 
    {
      "url":"39_Promise in JavaScript.html",
      "title":"Promise in JavaScript",
      "content":"I’m sorry, this question would be out of my expertise.",
      "publishedAt":"12:56 pm"
    }, 
    {
      "url":"40_Project 3 Creating a news website.html",
      "title":"Project-3 Creating a news website",
      "content":"I’m sorry, this question would be out of my expertise.",
      "publishedAt":"12:56 pm"
    }, 
    {
      "url":"41_Arrow Function in JavaScript.html",
      "title":"Arrow Function in JavaScript",
      "content":"I’m sorry, this question would be out of my expertise.",
      "publishedAt":"12:56 pm"
    }, 
    {
      "url":"42_Fatch apu in JavaScript.html",
      "title":"Fatch apu in JavaScript",
      "content":"I’m sorry, this question would be out of my expertise.",
      "publishedAt":"12:56 pm"
    }, 
    {
      "url":"43_Async wait in javascript.html",
      "title":"Async wait in javascript",
      "content":"I’m sorry, this question would be out of my expertise.",
      "publishedAt":"12:56 pm"
    }, 
    {
      "url":"44_Error Handling try and catch.html",
      "title":"Error Handling try and catch",
      "content":"I’m sorry, this question would be out of my expertise.",
      "publishedAt":"12:56 pm"
    }, 
    {
      "url":"45_Exasize 5 Using A javascript  .html",
      "title":"Exercise-5 Using a Dictionary api Exasize [Solutions]",
      "content":"I’m sorry, this question would be out of my expertise.",
      "publishedAt":"12:56 pm"
    }
    ];

// Card data Iterator
function cvIterator(cards) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < cards.length ?
      {
        value: cards[nextIndex++],
        done: false
      }:
      {
        done: true
      };
    }
  };
}

const candidates = cvIterator(data);
 nextCv()
// console.log(candidates);


// Button Listener  for next button
let next = document.getElementById('next');
next.addEventListener('click', nextCv);

function nextCv() {
  let currentCandidate = candidates.next().value;
  let image = document.getElementById('image');
  let profile = document.getElementById('profile');
  if (currentCandidate != undefined) {
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Url: ${currentCandidate.url}</li>
    <li class="list-group-item">Title: ${currentCandidate.title}</li>
    <li class="list-group-item">Content: ${currentCandidate.content}</li>
    <li class="list-group-item">PublishedAt: ${currentCandidate.publishedAt}</li>
    </ul>`;
  }
  else{
    alert('End of Candidates');
    window.location.reload();
  }
}