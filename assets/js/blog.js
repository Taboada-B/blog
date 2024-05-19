const submit = document.querySelector('#submit')
const userInput = document.querySelector('#user');
const titleInput = document.querySelector('#title');
const blogInput = document.querySelector('#blog');


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
    localStorage.setItem('user', user);
    localStorage.setItem('title', title);
    localStorage.setItem('blog', blog);
}
})


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