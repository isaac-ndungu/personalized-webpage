// DOM Elements

let userForm = document.querySelector('.userForm');
let nameInput = document.querySelector('.nameInput');
let ageInput = document.querySelector('.ageInput');
let button = document.querySelector('.button');
let messageContainer = document.querySelector('.messageContainer');
let userList = document.querySelector('.userList');


// Store input to localStorage

let users = JSON.parse(localStorage.getItem("users")) || [];

let addUser = function (name, age) {
  let user = { name, age };
  users.push(user);

  localStorage.setItem('users', JSON.stringify(users));

  return user;
}

userForm.addEventListener('submit', function (e) {
  e.preventDefault();

  let name = nameInput.value;
  let age = parseInt(ageInput.value)


  addUser(name, age);

  let ageResult = ageVerification(age);
  displayMessage(ageResult.type, ageResult.text);

  let greetingResult = greet(name, age);
  displayMessage(greetingResult.type, greetingResult.text);

  let quoteResult = quote();
  displayMessage(quoteResult.type, quoteResult.text);

  renderUsers();

  userForm.reset();
});

// saved users

function renderusers() {
  userList.innerHtML = '';
  
  users.forEach(user => {
    let div = document.createElement('div');
    div.classList.add('userCard');
    div.textContent = `${user.name} - ${user.age} years old.`;

    userList.appendChild(div);
  })
}



// Message

function displayMessage(type, text) {
  let div = document.createElement('div');
  div.classList.add('message', type);
  div.textContent = text;

  messageContainer.appendChild(div);

}

// determine whether the user is old enough for certain content

function ageVerification(age) {
  let newAge = parseInt(age);
  if (newAge < 18) {
    return { type: 'warning', text: 'You are too young for adult content' };
  } else {
    return { type: 'success', text: 'You can access adult content' };
  }
};

// Add greeting and display age in months
function greet(name, age) {
  let newAge = parseInt(age) * 12;

  return {type: 'info', text: `Hello ${name}! You are ${newAge} months old.`};

}


// Motivational quote

function quote() {
  let quoteContent = '"Only listen to those who are already where you want to be"';
  for (let i = 0; i <= 5; i++) {
   displayMessage('info',quoteContent);
  }
}