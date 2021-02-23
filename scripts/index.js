$(document).ready(() => {
  $('#search-btn').on('click', () => {
    let search = $('#books').val();

    if (search === '') {
      alert('Please enter a book item');
    } else {
      let url = '';
      let img = '';
      // let title = '';
      // let author = '';

      $.get(
        'https://www.googleapis.com/books/v1/volumes?q=' + search,
        function (response) {
          for (let i = 0; i < response.items.length; i++) {
            title = $(
              '<div class="boxes">' +
                response.items[i].volumeInfo.title +
                '</div>'
            );

            author = $(
              '<div class="boxes"> By: ' +
                response.items[i].volumeInfo.authors +
                '</div>'
            );
            img = $(
              '<img id="test" class="rounded" alt="google book search results" > <br> <a href=' +
                response.items[i].volumeInfo.infoLink +
                '></a>'
            );

            url = response.items[i].volumeInfo.imageLinks.thumbnail;
            img.attr('src', url);
            // title.appendTo('.grid');
            // author.appendTo('.grid');
            img.appendTo('.grid');
          }
        }
      );
    }

    return false;
  });
});

let buttonChange = document.getElementById('search-btn');
let bntTwo = document.querySelector('#search-btn2');
let inputText = document.querySelector('#books');

buttonChange.addEventListener('click', () => {
  document.body.style.backgroundColor = '#fcde63';
  buttonChange.style.display = 'none';
  bntTwo.style.display = 'block';
});

bntTwo.addEventListener('click', () => {
  let gridDef = document.querySelector('.grid');
  gridDef.remove();
  document.body.style.backgroundColor = 'white';
  buttonChange.style.display = 'block';
  bntTwo.style.display = 'none';
  inputText.textContent = '';
});
