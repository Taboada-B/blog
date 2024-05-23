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
let data = {};
let userData = [];
submit.addEventListener('click', function (event) {
    event.preventDefault();
    let data = {
        user: userInput.value.trim(),
        title: titleInput.value.trim(),
        blog: blogInput.value.trim(),
    };
    // original that worked below 3 lines
    // const user = userInput.value;
    // const title = titleInput.value;
    // const blog = blogInput.value;
    // if anything is blank, return an error
    if (data.user === '') { // was user === ''
        displayMessage('error', 'Username cannot be blank');
    }
    else if (data.title === '') { // was title === ''
        displayMessage('error', 'Title cannot be blank');
    }
    else if (data.blog === '') { // was blog === ''
        displayMessage('error', 'Blog cannot be blank');
    }
    else {
        userData.push(data)
        console.log(userData)
        //stores data to browser under these keys
        window.localStorage.setItem('userData', JSON.stringify(userData))
        // //go to next page after hitting submit
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
