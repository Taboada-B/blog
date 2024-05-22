// dark and light mode button

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

// making variables from windows localstorage
const userName = localStorage.getItem('user-name');
const titleName = localStorage.getItem('title-name');
const blogContent = localStorage.getItem('blog-content');

//populating the page 
document.querySelector('#blog-user').textContent = userName;
document.querySelector('#title-name').textContent = titleName;
document.querySelector('#blog-content').textContent = blogContent;


// section.children[0].textContent = '';



// bellow is rendering things not yet

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


// const userSpan = document.querySelector('#userSpan');
// const userTitleSpan = document.querySelector('#userTitleSpan');
// const userBlogSpan = document.querySelector('#userBlogSpan');




// notes below


// linking to next page
// // Create a new anchor element
// const blogLink = document.createElement('a');

// // Set the href attribute to point to the blog.html page
// blogLink.href = 'blog.html';

// // Set the inner text of the link
// blogLink.innerText = 'Visit My Blog';

// // Append the link to a specific element in your existing HTML, for example, a div with id "links"
// document.getElementById('links').appendChild(blogLink);



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