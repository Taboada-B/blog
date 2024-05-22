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


//populating the page 

function addUserElement() {
    const userName = localStorage.getItem('user-name');
    // creates a new div
    const newDiv = document.createElement("div");
    // giving div content
    newDiv.textContent = userName;
// 
    const targetDiv = document.getElementById('div1');
    
    targetDiv.appendChild(newDiv);
}

function addTitleElement() {
    const userTitle = localStorage.getItem('title-name');
    // creates a new div
    const newDiv = document.createElement("div");
    // giving div content
   newDiv.textContent = userTitle; 
    const targetDiv = document.getElementById('div1');
    targetDiv.appendChild(newDiv);
}

function addBlogElement() {
    const userBlog = localStorage.getItem('blog-content');
    // creates a new div
    const newDiv = document.createElement("div");
    // giving div content
    newDiv.textContent = userBlog;
    const targetDiv = document.getElementById('div1');
    targetDiv.appendChild(newDiv);
}

// calling the functions
addUserElement();
addTitleElement();
addBlogElement();
