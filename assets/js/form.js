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
let userData = {}
submit.addEventListener('click', function (event) {
    event.preventDefault();
        userData = {
        user: userInput.value.trim(),
        title: titleInput.value.trim(),
        blog: blogInput.value.trim(),
    }
    // original that worked below 3 lines
    // const user = userInput.value;
    // const title = titleInput.value;
    // const blog = blogInput.value;
    // if anything is blank, return an error
    if (userData.user === '') { // was user === ''
        displayMessage('error', 'Username cannot be blank');
    }
    else if (userData.title === '') { // was title === ''
        displayMessage('error', 'Title cannot be blank');
    }
    else if (userData.blog === '') { // was blog === ''
        displayMessage('error', 'Blog cannot be blank');
    }
    else {
        //stores data to browser under these keys
window.localStorage.setItem('userData', JSON.stringify(userData))
console.log(userData);
console.log(userData.user); 
        // window.localStorage.setItem('user-name', user);
        // window.localStorage.setItem('title-name', title);
        // window.localStorage.setItem('blog-content', blog);
        // //go to next page after hitting submit

        // window.location.href = "blog.html";
    }
})





// const studentGrade = {
//     student: student.value,
//     grade: grade.value,
//     comment: comment.value.trim(),// removes white spaces from front and back of string block
//   };

//   localStorage.setItem('studentGrade', JSON.stringify(studentGrade));  //takes an object and turns it into a string 
//   renderMessage();
// });

// function renderMessage() {
//   const lastGrade = JSON.parse(localStorage.getItem('studentGrade')); // changes string back into object
//   if (lastGrade !== null) {
//     document.querySelector('.message').textContent =
//       lastGrade.student + ` received a/an ${lastGrade.grade}`;


  // create user object from submission
//   const user = {
//     firstName: firstNameInput.value.trim(),
//     lastName: lastNameInput.value.trim(),
//     email: emailInput.value.trim(),
//     password: passwordInput.value.trim(),
//   };

//   // set new submission to local storage
//   localStorage.setItem('user', JSON.stringify(user));
// });



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
