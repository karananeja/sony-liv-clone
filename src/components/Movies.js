import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Movies.css';
import db from '../firebase';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    db.collection('movies')
      .orderBy('serialNo', 'asc')
      .onSnapshot((snapshot) => {
        setMovies(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  return (
    <div className='movies'>
      <h2>Today's Hot Picks</h2>
      <div className='movies__cards'>
        {movies.map((movie) => (
          <div className='movies__card' key={movie.id}>
            <Link to={`/detail/${movie.id}`}>
              <img
                src={movie.data.cardImg}
                alt={movie.data.title}
                className='movies__img'
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
