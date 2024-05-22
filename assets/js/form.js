const msgDiv = document.querySelector('#msg');
const form = document.getElementById('form');
const userInput = document.querySelector('#user');
const titleInput = document.querySelector('#title');
const blogInput = document.querySelector('#blog');
const submit = document.querySelector('#submit')

// entering information and filtering
function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute('class', type);
}
// hitting submit triggers these events
submit.addEventListener('click', function (event) {
    event.preventDefault();

    const user = userInput.value;
    const title = titleInput.value;
    const blog = blogInput.value;
    // if anything is blank, return an error
    if (user === '') {
        displayMessage('error', 'Username cannot be blank');
    }
    else if (title === '') {
        displayMessage('error', 'Title cannot be blank');
    }
    else if (blog === '') {
        displayMessage('error', 'Blog cannot be blank');
    }
    else {
        //stores data to browser under these keys
        window.localStorage.setItem('user-name', user);
        window.localStorage.setItem('title-name', title);
        window.localStorage.setItem('blog-content', blog);
        //go to next page after hitting submit
        window.location.href = "blog.html";
    }
})

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
