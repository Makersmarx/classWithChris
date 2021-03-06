// register user in local storage

const storeUser = () => {
  const storeName = document.getElementById('userName');
  const password = document.getElementById('userPassword');

  if (storeName.value.length === 0 || password.value.length === 0) {
    alert('Please try again');
  } else {
    localStorage.setItem('userName', storeName.value);
    localStorage.setItem('userPassword', password.value);
    alert('Your account has been created');
    window.location.href = '../index.html';

    return false;
  }
};

$(document).ready(() => {
  $('body').append(
    '<div style="" id="loadingDiv"><div class="loader">Loading...</div></div>'
  );
  $(window).on('load', () => {
    setTimeout(removeLoader, 1000); //wait for page load PLUS one second.
  });
  const removeLoader = () => {
    $('#loadingDiv').fadeOut(500, () => {
      // fadeOut complete. Remove the loading div
      $('#loadingDiv').remove(); //makes page more lightweight
    });
  };
});
