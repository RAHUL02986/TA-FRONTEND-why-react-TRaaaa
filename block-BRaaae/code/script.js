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

// function elm(type,attr={}, ...children){
//     let element = document.createElement(type);
//     for(let key in attr){
//       if(key.startsWith("data-")){
//         element.setAttribute(key,attr[key]);
//       } else if (key.startsWith('on')){
//         let eventType = key.replace('on', '');
//         element.addEventListener(eventType,attr[key]);
//       }else{
//         element[key]=attr[key];
//       }
//     }
//     children.forEach(child => {
//         if(typeof child === "object"){
//             element.append(child);
//         }
//         if(typeof child === "string"){
//             let node = document.createTextNode(child);
//             element.append(node);
//         }
//     });
//     return element;
// }
let elm = React.createElement;
function createMovieUI(data, root) {
  // root.innerHTML = "";
  let todoUI = data.map((movie, i) => {
    let li = elm(
      'li',
      {},
      elm(
        'lable',
        {
          for: i,
        },
        movie.title
      ),
      elm(
        'button',
        {
          id: i,
          onclick: handleChange,
        },
        movie.watched ? 'watched' : 'To Watch'
      )
    );
    return li;
  });
  ReactDOM.render(todoUI, ul);
}
createMovieUI(allMovies, ul);
