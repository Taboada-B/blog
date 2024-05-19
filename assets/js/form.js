const submit = document.querySelector('#submit')
const userInput = document.querySelector('#user');
const titleInput = document.querySelector('#title');
const blogInput = document.querySelector('#blog');
const blogLink = document.createElement('a');
let msgDiv = document.querySelector('#msg');

// entering information and filtering
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
    console.log(user)
    
}
})
console.log(localStorage.getItem(user))
// end information and filtering

// dark and light mode button

const header = document.querySelector('.header');
const themeSwitcher = document.querySelector('#theme-switcher');
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


// end light dark mode button


// need to write if statement incase there are any form is blank
// example below

// if (email === '') {
//     displayMessage('error', 'Email cannot be blank');
//   } else if (password === '') {
//     displayMessage('error', 'Password cannot be blank');
//   } else {
//     displayMessage('success', 'Registered successfully');

//     localStorage.setItem('email', email);
//     localStorage.setItem('password', password);
//     renderLastRegistered();
//   }
// });


// submit button to change the page

// const submission = document.querySelector('.submission');

// submission.children[0].textContent = 'Username';
// // submission.children[1].textContent = 'userinfo goes here';
// submission.children[2].textContent = 'title';
// // submission.children[3].textContent = 'user title goes here';
// submission.children[4].textContent = 'Content';
// // submission.children[5].textContent = 'content info and blog goes here';
// submission.children[6].textContent = 'Submit';



