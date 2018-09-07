import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

// SMART COMPONENT
// class Movie extends Component {
//     static propTypes = {
//         title: PropTypes.string.isRequired,
//         poster: PropTypes.string.isRequired
//     }
//     render() {
//         return (
//             <div>
//                 <MoviePoster poster={poster} />
//                 <h1>{title}</h1>
//             </div>
//         );
//     }
// }
// SMART COMPONENT
// class MoviePoster extends Component {
//     render() {
//         return (
//             <img src={this.props.poster} alt="moviePoster"/>
//         );
//     }
// }

// DUMB COMPONENT
function Movie({title, poster}) {
    return (
        <div>
            <MoviePoster poster={poster} />
            <h1>{title}</h1>
        </div>
    )
}

// DUMB COMPONENT
function MoviePoster({poster}) {
    return (
        <img src={poster} alt="Movie Poster"/>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
}

export default Movie;