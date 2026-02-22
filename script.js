// DOM Elements

let userForm = document.querySelector('.userForm');
let nameInput = document.querySelector('.nameInput');
let ageInput = document.querySelector('.ageInput');
let button = document.querySelector('.button');
let messageContainer = document.querySelector('.messageContainer');
let userList = document.querySelector('.userList');
let card = document.createElement('div');


// Store input to localStorage

let users = JSON.parse(localStorage.getItem("users")) || [];

saveUsers();

let addUser = function (name, age) {
  let user = { name, age };
  users.push(user);

  localStorage.setItem('users', JSON.stringify(users));

  return user;
}

// add Event on Submit

userForm.addEventListener('submit', function (e) {
  e.preventDefault();

  let name = nameInput.value;
  let age = parseInt(ageInput.value)


  addUser(name, age);

  messageContainer.innerHTML = '';

// Get message  
  card.classList.add('resultCard');

  let ageResult = ageVerification(age);
  let greetingResult = greet(name, age);
  let quoteResult = quote();

  displayMessage(ageResult.type, ageResult.text, card);
  displayMessage(greetingResult.type, greetingResult.text, card);

  quoteResult.forEach(q => {
    displayMessage('info', q, card);
  });

  messageContainer.appendChild(card);

  saveUsers();

  userForm.reset();
});

// saved users

function saveUsers() {
  userList.innerHTML = '';
  
  users.forEach(user => {
    let div = document.createElement('div');
    div.classList.add('userCard');
    div.textContent = `${user.name} - ${user.age} years old.`;

    userList.appendChild(div);
  });
}



// Message

function displayMessage(type, text, card) {
  let p = document.createElement('p');
  p.textContent = text;

  card.appendChild(p);

  // Remove message after 5s wait == 5000ms
  setTimeout(() => {
    p.remove();
  }, 5000);

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
  let quotes = [];

  for (let i = 0; i < 5; i++) {
   quotes.push(quoteContent);
  }

  return quotes;
}