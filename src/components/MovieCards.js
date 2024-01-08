import React from "react";
import "./MovieCards.css";

// ... (your imports)

class MovieCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      filterMovies: [],
      notFoundMessage: ''
    };
  }

  filterMovieItems(e) {
    const { value } = e.target;
    const { movieList } = this.props;
    const filteredMovies = (movieList || []).filter((movie, i) =>
      movie.Title.toLowerCase().includes(value.toLowerCase())
    );
  
    const notFoundMessage = filteredMovies.length === 0 ? 'Movie not found' : '';
  
    this.setState(
      {
        searchQuery: value,
        filterMovies: filteredMovies,
        notFoundMessage: notFoundMessage
      },
      () => {
        console.log(this.state.filterMovies);
        console.log(this.state.notFoundMessage);
      }
    );
  }
  

  render() {
    const { movieList } = this.props;
    const { filterMovies, notFoundMessage } = this.state;

    return (
      <>
        <div>
          <h1 className="Movie-title">Movies App</h1>
        </div>
        <div className="searchcontainer">
          <input
            type="search"
            value={this.state.searchQuery}
            onChange={(e) => this.filterMovieItems(e)}
            placeholder="Search Movie Name... "
          ></input>
        </div>
        <div className="moviecontainer">
          {filterMovies.length === 0 && notFoundMessage && (
            <div className="not-found-message">
              {notFoundMessage}
            </div>
          )}

          {(filterMovies.length === 0 ? movieList : filterMovies).map((movie, i) => (
            <div className="moviecard" key={i}>
              <img src={movie.Poster} alt={i} />
              <div className="moviedesc">
                <h3>{movie.Title}</h3>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default MovieCards;