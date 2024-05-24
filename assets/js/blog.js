const header = document.querySelector('.header');
const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');


const toFormBtn = document.querySelector('#toFormBtn');
toFormBtn.textContent = 'Home Page';
toFormBtn.addEventListener('click', function(event){
    event.preventDefault();
    window.location.href = "index.html";
});

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
let userData = JSON.parse(localStorage.getItem('userData'));

 function addElements() {
   for (let i = 0; i < userData.length; i++) {
    // creates a new div
    const newDivUser = document.createElement("div");
    // giving div content
    newDivUser.textContent = userData[i].user;
    let targetDivUser = document.getElementById('divUser');
    targetDivUser.appendChild(newDivUser);

    const newDivTitle = document.createElement("div");
    // giving div content
    newDivTitle.textContent = userData[i].title;
    let targetDivTitle = document.getElementById('divTitle');
    targetDivTitle.appendChild(newDivTitle);

    const newDivBlog = document.createElement("div");
    // giving div content
    newDivBlog.textContent = userData[i].blog;
    let targetDivBlog = document.getElementById('divBlog');
    targetDivBlog.appendChild(newDivBlog);
   }
    
}
addElements()

// back button

