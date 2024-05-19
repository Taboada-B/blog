// const submit = document.querySelector('#submit')
// const userInput = document.querySelector('#user');
// const titleInput = document.querySelector('#title');
// const blogInput = document.querySelector('#blog');
// let msgDiv = document.querySelector('#msg');


// dark and light mode button

const header = document.querySelector('.header');
const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');

// light dark mode switcher
header.children[0].textContent = 'light/dark modes';

let mode = 'light';
themeSwitcher.addEventListener('click', function () {
    if (mode === 'light') {
        mode = 'dark';
        container.setAttribute('class', 'dark');
    }
    else {
        mode = 'light';
        container.setAttribute('class', 'light')
    }
});

// end light dark mode button
const section = document.querySelector('.blogSubmission');
section.children[0].textContent = 'hello'










// notes below


// linking to next page
// // Create a new anchor element
// const blogLink = document.createElement('a');

// // Set the href attribute to point to the blog.html page
// blogLink.href = 'blog.html';

// // Set the inner text of the link
// blogLink.innerText = 'Visit My Blog';

// // Append the link to a specific element in your existing HTML, for example, a div with id "links"
// document.getElementById('links').appendChild(blogLink);



// signUpButton.addEventListener('click', function (event) {
//     event.preventDefault();
  
//     const email = emailInput.value;
//     const password = passwordInput.value;
  
//     if (email === '') {
//       displayMessage('error', 'Email cannot be blank');
//     } else if (password === '') {
//       displayMessage('error', 'Password cannot be blank');
//     } else {
//       displayMessage('success', 'Registered successfully');
  
//       localStorage.setItem('email', email);
//       localStorage.setItem('password', password);
//       renderLastRegistered();
//     }
//   });a