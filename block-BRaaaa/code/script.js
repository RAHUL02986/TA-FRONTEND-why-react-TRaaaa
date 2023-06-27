let input = document.querySelector('input[type="text');
let ul = document.querySelector('.movies_list');

let allMovies = [
  {
    title: 'Mission Impossible',
    watched: false,
  },
  {
    title: 'Up',
    watched: true,
  },
];

input.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    allMovies.push({
      title: event.target.value,
      watched: false,
    });
    event.target.value = '';
    createMovieUI(allMovies, ul);
  }
});

function handleChange(event) {
  let id = event.target.id;
  allMovies[id].watched = !allMovies[id].watched;
  createMovieUI(allMovies, ul);
}

function createMovieUI(data, root) {
  root.innerHTML = '';
  data.forEach((movie, i) => {
    let li = document.createElement('li');
    let button = document.createElement('button');
    button.id = i;
    button.innerText = movie.watched ? 'watched' : 'To Watch';
    button.addEventListener('click', handleChange);
    let label = document.createElement('label');
    label.for = i;
    label.innerText = movie.title;
    li.append(label, button);
    ul.append(li);
  });
}

createMovieUI(allMovies, ul);
