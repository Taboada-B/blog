const header = document.querySelector('.header');
const themeSwitcher = document.querySelector('#theme-switcher')
const container = document.querySelector('.container');
const submission = document.querySelector('.submission');


let mode ='light';
themeSwitcher.addEventListener('click', function(){
    if (mode === 'light'){
        mode = 'dark';
        container.setAttribute('class', 'dark');
    }
    else {
        mode = 'light';
        container.setAttribute('class', 'light')
    }
});

    // themeSwitcher.addEventListener('click', function () {
    //     // If mode is dark, apply light background
    //     if (mode === 'dark') {
    //       mode = 'light';
    //       container.setAttribute('class', 'light');
    //     }
    //     // If mode is light, apply dark background
    //     else {
    //       mode = 'dark';
    //       container.setAttribute('class', 'dark');
    //     }
    //   });
      

header.children[0].textContent = 'light/dark option soon';

header.children[2].textContent = 'The DevDiary';


submission.children[0].textContent = 'Username';
submission.children[1].textContent = 'userinfo goes here';
submission.children[2].textContent = 'title';
submission.children[3].textContent = 'user title goes here';
submission.children[4].textContent = 'Content';
submission.children[5].textContent = 'content info and blog goes here';
submission.children[6].textContent = 'Submit';



