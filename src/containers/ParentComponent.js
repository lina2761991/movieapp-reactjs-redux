import MovieCard from "./MovieCard";
import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteMovie, setVisibilityFilter,editMovie } from "../actions/actionCreators";
import { SHOW_ALL, SHOW_TITLE } from "../actions/actionTypes";
import { bindActionCreators } from "redux";
import AddComponent from "./AddComponent";
import StarRatings from "react-star-ratings";

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: this.props.movies,
      inputValue: "",
      inputRating: 0
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      movies: nextProps.movies
    });
  }

  //updating the store props

  onInputChange = event => {
    var _ = require("lodash");
    let newMovies = _.filter(this.props.movies, movie =>
      movie.title.toLowerCase().includes(event.target.value.toLowerCase())
    );

    this.setState({
      inputValue: event.target.value,
      movies: newMovies
    });
  };

  updateInputValue = evt => {
    this.setState({
      inputValue: evt.target.value
    });
  };

  updatedMovies = array => {
    this.setState({
      movies: array
    });
  };

  changeRatingSearch = newRating => {
    this.setState({
      inputRating: newRating
    });
  };

  render() {
    return (
      <div className="all">
        <div className="inputs">
          <div className="col-6">
            <div className="input-group">
              <input
                className="form-control border-secondary py-2"
                type="search"
                value={this.state.inputValue}
                onChange={this.onInputChange}
              ></input>
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={this.onInputChange}
                >
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="col-5">
            <div className="input-group">
              <StarRatings
                rating={this.state.inputRating}
                changeRating={this.changeRatingSearch}
                starDimension="30px"
                starSpacing="1px"
              />
            </div>
          </div>
        </div>

        <div className="MovieContainer">
          {this.state.movies.map((element, i) => {
            return (
              <MovieCard
                title={element.title}
                year={element.year}
                description={element.description}
                image={element.image}
                key={element.id}
                id={element.id}
                rating={element.rating}
                deleteMovie={this.props.deleteMovie}
                editMovie={this.props.editMovie}
              />
            );
          })}
          <AddComponent />
        </div>
      </div>
    );
  }
}

const getVisibleMovies = (movies, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return movies;
    // case SHOW_TITLE:
    //  console.log(movies);
    // return movies.filter(element => element.title == 'Joker')
    //return {that.state.inputValue}
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = state => {
  return { movies: state.movies };
  // return {
  //   movies: getVisibleMovies(state.movies, state.visibilityFilter),
  //   visibilityFilter: state.visibilityFilter
  // };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
     deleteMovie,
      //editMovie,
      setVisibilityFilter
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ParentComponent);
