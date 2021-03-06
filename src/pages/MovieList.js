import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  async componentDidMount() {
    const data = await movieAPI.getMovies();
    this.fetchUpdateMovies(data);
  }

  fetchUpdateMovies = (request) => {
    this.setState({
      movies: [...request],
    });
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening
    if (movies.length === 0) {
      return (
        <Loading />
      );
    }

    return (
      <div data-testid="movie-list">
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
