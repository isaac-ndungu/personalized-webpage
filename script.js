// DOM Elements

let userForm = document.querySelector('.userForm');
let nameInput = document.querySelector('.nameInput');
let ageInput = document.querySelector('.ageInput');
let button = document.querySelector('.button');

// Store input to localStorage

let users =  JSON.parse(localStorage.getItem("users")) || [];
let addUser = function(name, age) {
    users.push({name, age})
    
    localStorage.setItem('users', JSON.stringify(users));

    return {name, age}
}

userForm.addEventListener('submit', function(e) {
  e.preventDefault();
  addUser(nameInput.value, ageInput.value);
  ageVerification(ageInput.value);
  greet(nameInput.value, ageInput.value)
  quote();
});


// determine whether the user is old enough for certain content

function ageVerification(age) {
  let newAge = parseInt(age);
  if (newAge < 18) {
    alert('You are too young for adult content');
  } else {
    alert('You can access adult content');
  }
}

// Add greeting and display age in months
function greet(name, age) {
  let greeting = 'Hello, welcome back';
  let newAge = parseInt(age) * 12;

  let message =  `${greeting} ${name}.
You are ${newAge} months old`

  alert(message)
  
}


// Motivational quote

function quote() {
  for (let i = 0; i <= 5; i++){
    alert('"Only listen to those who are already where you want to be"');
  }
}