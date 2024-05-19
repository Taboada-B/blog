const header = document.querySelector('.header');
const themeSwitcher = document.querySelector('#theme-switcher')
const container = document.querySelector('.container');


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
header.children[2].textContent = 'The DevDiary';

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



