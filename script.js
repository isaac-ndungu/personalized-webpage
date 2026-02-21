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
