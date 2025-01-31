import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((movie, index) => (
          <div key={index}>
            <h2>Title: {movie.title}</h2>
            <p>Time: {movie.time}</p>
            <p>Genre:</p> 
            <ul>
            {movie.genres.map((genre, index) => (
              <li key={index}>{genre}</li>
            ))}
            </ul>
            <p>Metascore: {movie.metascore}</p>
      </div>
    ))}
    </div>
  )
};

export default Movies;
