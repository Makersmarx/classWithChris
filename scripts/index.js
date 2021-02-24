$(document).ready(() => {
  $('#search-btn').on('click', () => {
    let search = $('#books').val();

    if (search === '') {
      alert('please search for a book');
    } else {
      let url = '';
      let img = '';

      $.get(
        'https://www.googleapis.com/books/v1/volumes?maxResults=40&q=' + search,
        function (response) {
          for (let i = 0; i < response.items.length; i++) {
            img = $(
              '<a href=' +
                response.items[i].volumeInfo.infoLink +
                ' target="_blank">' +
                '<img src="' +
                response.items[i].volumeInfo.imageLinks.thumbnail +
                'id="test" class="rounded" alt="google book search results"/>' +
                '</a>'
            );

            url = response.items[i].volumeInfo.imageLinks.thumbnail;
            img.attr('src', url);
            img.appendTo('.grid');
          }
        }
      );
    }
  });

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

// onclick variables

let buttonChange = document.querySelector('#search-btn');
let bntTwo = document.querySelector('#search-btn2');
let inputText = document.querySelector('#books');
let gridRemove = document.querySelector('#test');

buttonChange.addEventListener('click', () => {
  buttonChange.style.display = 'none';
  bntTwo.style.display = 'block';
});

bntTwo.addEventListener('click', () => {
  console.log(gridRemove);
  buttonChange.style.display = 'block';
  bntTwo.style.display = 'none';
  document.querySelector('.inputs').reset(); // resets text in input/search

  // removes images and links from grid
  while (gridRemove.firstChild) {
    gridRemove.removeChild(gridRemove.firstChild);
  }
});
