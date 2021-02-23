// variables
const logIn = document.getElementById('btn');
const signUp = document.getElementById('btn-sgnup');
const titleHover = document.getElementById('title');

// event listeners
signUp.addEventListener('click', () => {
  console.log('test');
  window.location.href = '../signUp/signup.html';
});

logIn.addEventListener('click', () => {
  console.log('yep');
});

// modal
// Get the modal
const modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
const modalSpan = document.getElementById('close');

// When the user clicks on the button, open the modal
logIn.addEventListener('click', () => {
  modal.style.display = 'block';
});

// When the user clicks on <span> (x), close the modal
modalSpan.addEventListener('click', () => {
  console.log('working?');
  modal.style.display = 'none';
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

//check local storage for saved user data

const checkUser = () => {
  const checkName = localStorage.getItem('userName');
  const checkPassword = localStorage.getItem('userPassword');
  const alertOne = document.getElementById('alertOne');

  const userName = document.getElementById('username');
  const userPassword = document.getElementById('password');

  if (userName.value === checkName && userPassword.value === checkPassword) {
    window.location.href = '../index.html';
    return false;
  } else {
    alert('Incorrect login details, please try again');
  }
};
