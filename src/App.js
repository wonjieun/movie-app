import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title: "Avengers",
    poster: "http://cdn.mydaily.co.kr/FILES/201804/201804060809134073_1.jpg"
  },
  {
    title: "Harry Potter",
    poster: "https://mvpo.us/img/P5159.jpg"
  },
  {
    title: "Jurassic World",
    poster: "https://www.bleedingcool.com/wp-content/uploads/2018/04/jurassic-world-poster.jpg"
  },
  {
    title: "Spider-Man",
    poster: "http://cdn.collider.com/wp-content/uploads/amazing-spider-man-movie-poster.jpg"
  }
]

class App extends Component {
  // Render: componentWillMount() -> render() -> componentDidMount()
  
  // Update componentWillReceiveProps() -> shouldComponentUpdate() == true -> componentWillUpdate() -> render() -> componentDidUpdate()

  componentWillMount() {
    console.log('will mount')
  }

  componentDidMount() {
    console.log('did mount')
  }

  render() {
    console.log('did render')
    return (
      <div className="App">
        {movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;