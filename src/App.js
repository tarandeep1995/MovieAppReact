import "./App.css";
import React from "react";
import axios from "axios";
import MovieCards from "./components/MovieCards";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movie: []
    };
  }

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        "https://www.omdbapi.com/?apikey=45f0782a&s=war"
      );

      this.setState({
        movie: response.data.Search
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div>
        <MovieCards movieList={this.state.movie} />
      </div>
    );
  }
}

export default App;