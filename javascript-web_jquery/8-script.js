// this script fetches and replace character with URL
$.get('https://swapi-api.alx-tools.com/api/films/?format=json', function (data) {
    for (let index in data.results) {
      $('UL#list_movies').append('<li>' + data.results[index].title + '</li>');
    }
  });