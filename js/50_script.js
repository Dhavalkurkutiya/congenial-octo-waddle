// console.log("Done");

const userName = document.getElementById('name');
const userEmail = document.getElementById('email');
const userPhone = document.getElementById('phone');

let validUser = false;
let validEmail = false;
let validPhone = false;

$('#failure').hide();
$('#success').hide();

// console.log(userName,userEmail,userPhone);

// EventListener add to userName userEmail userPhone
userName.addEventListener('blur', ()=> {
  // console.log('Name is blur');
  let regex = /^[a-zA-Z]([1-9a-zA-Z]){2,20}$/;
  let str = userName.value;
  // console.log(regex, str);

  if (regex.test(str)) {
    // console.log("username is valid");
    userName.classList.remove('is-invalid');
    validUser = true;

  } else {
    // console.log("username not valid");
    userName.classList.add('is-invalid');
    validUser = false;
  }
});

userEmail.addEventListener('blur', ()=> {
  // console.log('Email  Validation');
  let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let str = userEmail.value;
  // console.log(regex, str);

  if (regex.test(str)) {
    // console.log("Email is Valid");
    userEmail.classList.remove('is-invalid');
    validEmail = true;
  } else {
    // console.log("Email not valid");
    userEmail.classList.add('is-invalid');
    validEmail = false;
  }
});

userPhone.addEventListener('blur', ()=> {
  // console.log('Phone Validation');
  let regex = /^([0-9]){10}$/;
  let str = userPhone.value;
  // console.log(regex, str);

  if (regex.test(str)) {
    // console.log("Phone is valid");
    userPhone.classList.remove('is-invalid');
    validPhone = true;
  } else {
    // console.log("Phone not valid");
    userPhone.classList.add('is-invalid');
    validPhone = false;
  }
});

let submit = document.getElementById('submit');
submit.addEventListener('click', (e)=> {
  // console.log(validUser, validEmail, validPhone);
  e.preventDefault();
  if (validUser && validEmail && validPhone) {
    let failure = document.getElementById('failure');
    // console.log("Name , Email , Phone are valid");
    let success = document.getElementById('success');
    success.classList.add('show');
    // failure.classList.remove('show');
    // failure.alert('close')
    $('#failure').hide();
    $('#success').show();
  } 
  else {
    // console.log("Name , Email , Phone are not valid");
    let failure = document.getElementById('failure');
    failure.classList.add('show')
    // success.classList.remove('show');
    // success.alert('close')
    $('#success').hide();
    $('#failure').show();
  }
});