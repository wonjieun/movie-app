import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
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

class App extends Component {
  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update componentWillReceiveProps() -> shouldComponentUpdate() == true -> componentWillUpdate() -> render() -> componentDidUpdate()

  state = {
    greeting: 'Hello!'
  }

  componentWillMount() {
    console.log('will mount')
  }

  // greeting 렌더링을 setState에서 한다.
  // state는 컴포넌트를 로드하는 방법이고
  // 컴포넌트가 DidMount했을 때 (componentDidMount()), 5초 후에 Hello aging!이 되도록 명령

  // state를 업데이트할 때는 setState를 이용
  // 업데이트할 때마다 새로운 state와 함께 render가 작동

  componentDidMount() {
    console.log('did mount')
    setTimeout(() => {
      // this.state.greeting = 'something' -> state를 직접적으로 변경하면 render설정들 (위에 Render 주석)이 작동을 하지 않음
      this.setState({
        greeting: 'Hello again!'
      })
    }, 2000)
  }

  render() {
    console.log('did render')
    return (
      <div className="App">
        {this.state.greeting}
        {movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;