import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update componentWillReceiveProps() -> shouldComponentUpdate() == true -> componentWillUpdate() -> render() -> componentDidUpdate()

  state = {
    greeting: 'Hello!',
    movies: [
      {
        title: "Avengers",
        poster: "http://www.futurerulerofmidgard.com/wp-content/uploads/2018/03/avengers-infinity-war-poster.jpg"
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
  }

  componentDidMount() {
    // setTimeout(function() {  // old JavaScript
    setTimeout(() => {
      // console.log('hello')
      this.setState({
        movies: [
          ...this.state.movies,  // leave what the array had before, add one more
          // // replaced all movies with the last one
         {
           title: "Incredibles",
           poster: "http://oyster.ignimgs.com/wordpress/stg.ign.com/2018/04/incredibles.jpg"
         },

        ]
      })
    }, 5000)

  }

  render() {
    return (
      <div className="App">
        {this.state.greeting}
        {this.state.movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;