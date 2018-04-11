const movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'Film o czarodzieju',
    poster: './images/harry.jpg'
  },
  {
    id: 2,
    title: 'Król lew',
    desc: 'Film o królu sawanny',
    poster: './images/lew.jpg'
  },
  {
    id: 3,
    title: 'Black Hawk Down',
    desc: 'Film o Mogadiszu',
    poster: './images/black.jpg'
  },
  {
    id: 4,
    title: 'Game of Thrones',
    desc: 'Serial na podstawie serii Pieśń lodu i ognia',
    poster: './images/game.jpg'
  }
];

// klasa MoviesList tworzona za pomocą metody createClass
const MoviesList = React.createClass({
  // jako argument metody przesyłamy obiekt z właściwościami propTypes i render
  // właściwość propTypes będąca obiektem przechowuje właściwość o nazwie moviesList i wartości React.PropTypes.array.isRequired
  propTypes: {
    // waliduje czy przekazywana właściwość to tablica
    // moviesList to nazwa prop'a, odwołuje się do linii 108, przyjmuje tablicę movies z linii 1
    moviesList: React.PropTypes.array.isRequired
  },

  render: function () {
    // zmienna przechowująca funkcję map, która przechodzi przez każdy element tablicy movies i zwraca obiekt z właściwościami id, title, desc, poster, który wchodzi jako 'item'
    const itemMovie = this.props.moviesList.map(function (item) {
      // bez nawiasów bo return jest wewnątrz funkcji
      // tworzy element na podstawie komponentu Movie, który jako props movie: przyjmuje item, czyli obiekt z danymi filmu, a jako props key przyjmuje id
      return React.createElement(Movie, {movie: item, key: item.id})
    });
    // zwraca element 'ul', którego dzieckiem jest itemMovie, czyli 'li' z linii 59 i n., po jednym 'li' dla każdego obiektu zawartego w movies z linii 1
    return (
      React.createElement('ul', {}, itemMovie)
    );
  }
});
// konstruktor pojedyńczego elementu 'li'
const Movie = React.createClass({
  // wymaga aby prop movie był obiektem
  propTypes: {
    movie: React.PropTypes.object.isRequired
  },

  render: function () {
    return (
      React.createElement('li', {},
      // tworzy po kolei zawartość 'li' na podstawie konstruktorów
        React.createElement(MovieTitle, {movieTitle: this.props.movie.title}),
        React.createElement(MovieDesc, {movieDesc: this.props.movie.desc}),
        React.createElement(MoviePoster, {moviePoster: this.props.movie.poster})
      )
    );
  }
});

const MovieTitle = React.createClass({
  propTypes: {
    movieTitle: React.PropTypes.string.isRequired
  },

  render: function () {
    return (
      React.createElement('h2', {}, this.props.movieTitle)
    );
  }
});

const MovieDesc = React.createClass({
  propTypes: {
    movieDesc: React.PropTypes.string.isRequired
  },

  render: function () {
    return (
      React.createElement('p', {}, this.props.movieDesc)
    );
  }
});

const MoviePoster = React.createClass({
  propTypes: {
    moviePoster: React.PropTypes.string.isRequired
  },

  render: function () {
    return (
      React.createElement('img', {src: this.props.moviePoster})
    );
  }
});

const app = React.createClass({
  render: function () {
    return (
      React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement(MoviesList, {moviesList: movies})
      )
    );
  }
});

ReactDOM.render(React.createElement(app), document.getElementById('app'));