import React, { Component } from "react";
import "./App.css";
import MovieList from "./components/card";
import SearchBar from "./components/serch-bar";
import AddNewMovie from "./components/addnewmovie";
class App extends Component {
  
    state = {
      movies: [
        {
          title: "Jhon wick",
          pic:
            "https://media.senscritique.com/media/000018476737/325/John_Wick_Parabellum.jpg",
          raiting: 4
        },
        {
          title: "Burn",
          pic:
            "https://i2.wp.com/teaser-trailer.com/wp-content/uploads/Burn-Movie-Poster.jpg?ssl=1",
          raiting: 3
        },
        {
          title: "Tueurs",
          pic:
            "http://fr.web.img5.acsta.net/pictures/17/11/02/17/22/1682233.jpg",
          raiting: 5
        }
      ],
      searchInput: "",
      searchRate: 0
    };
  
  addNewMovie = newMovie =>
    this.setState({ ...this.state, movies: [...this.state.movies, newMovie] });

  changeSearchHandler = e => this.setState({ searchInput: e.target.value });
  rateSearchHandler = rate => this.setState({ searchRate: rate });
  render() {
    return (
      <div>
        <div>
          <SearchBar
            changeHandler={this.changeSearchHandler}
            rate={this.state.searchRate}
            rateChange={this.rateSearchHandler}
          />
        </div>
        <div className="App">
          <MovieList
            movies={
              this.state.searchInput
                ? this.state.movies.filter(el =>
                    el.title
                      .toLowerCase()
                      .includes(this.state.searchInput.toLowerCase())
                  )
                : this.state.movies.filter(
                    el => el.raiting >= this.state.searchRate
                  )
            }
          />
          <AddNewMovie addNewMovie={this.addNewMovie} />
        </div>
      </div>
    );
  }
}

export default App;
