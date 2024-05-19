const submit = document.querySelector('#submit')
const userInput = document.querySelector('#user');
const titleInput = document.querySelector('#title');
const blogInput = document.querySelector('#blog');
const blogLink = document.createElement('a');
let msgDiv = document.querySelector('#msg');


function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute('class', type);
  }


submit.addEventListener('click',function(event){
event.preventDefault();
const user = userInput.value;
const title = titleInput.value;
const blog = blogInput.value;

if (user === '') {
    displayMessage('.error', 'Username cannot be blank');    
}
else if (title === ''){
    displayMessage('.error', 'Title cannot be blank');
}
else if (blog === ''){
    displayMessage('.error', 'Blog cannot be blank');
}
else {
    localStorage.setItem('user', user);
    localStorage.setItem('title', title);
    localStorage.setItem('blog', blog);
    blogLink.href = 'blog.html';
    document.getElementById('submit').appendChild(blogLink)
}
})

// dark and light mode button

const header =document.querySelector('.header')
const themeSwitcher = document.querySelector('#theme-switcher')
const container = document.querySelector('.container');

header.children[0].textContent = 'light/dark modes';


// light dark mode switcher
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

header.children[0].textContent = 'light/dark modes';

// end light dark mode button

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