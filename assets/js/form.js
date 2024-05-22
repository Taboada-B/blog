const blogLink = document.createElement('a');
const msgDiv = document.querySelector('#msg');
const form = document.getElementById('form');
// testing to bring up info into spans

// entering information and filtering
function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute('class', type);
  }

const userInput = document.querySelector('#user');
const titleInput = document.querySelector('#title');
const blogInput = document.querySelector('#blog');
const submit = document.querySelector('#submit')

submit.addEventListener('click',function(event){
event.preventDefault();

const user = userInput.value;
const title = titleInput.value;
const blog = blogInput.value;

if (user === '') {
    displayMessage('error', 'Username cannot be blank');    
}
else if (title === ''){
    displayMessage('error', 'Title cannot be blank');
}
else if (blog === ''){
    displayMessage('error', 'Blog cannot be blank');
}
else {
    //stores data to browser
    window.localStorage.setItem('user-name', user);
    window.localStorage.setItem('title-name', title);
    window.localStorage.setItem('blog-content', blog);
//go to next page
window.location.href = "blog.html";

}
})

// function renderBlogContent() {
//     const user = localStorage.getItem('user');
//     const title = localStorage.getItem('title');
//     const blog = localStorage.getItem('blog');
  
//     if (!user || !title || !blog) {
//       return;
//     }
  
//     userSpan.textContent = user;
//     console.log('first userSpan')
//     console.log(userSpan)
//     userTitleSpan.textContent = title;
//     userBlogSpan.textContent = blog;
//   }

// end information and filtering and populating 

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


// submit button to change the page

// const submission = document.querySelector('.submission');

// submission.children[0].textContent = 'Username';
// // submission.children[1].textContent = 'userinfo goes here';
// submission.children[2].textContent = 'title';
// // submission.children[3].textContent = 'user title goes here';
// submission.children[4].textContent = 'Content';
// // submission.children[5].textContent = 'content info and blog goes here';
// submission.children[6].textContent = 'Submit';



