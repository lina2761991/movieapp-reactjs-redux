import StarRatings from "react-star-ratings";

import React, { Component } from "react";
import { connect } from "react-redux";
import { editMovie } from "../actions/actionCreators";

import { SHOW_ALL } from "../actions/actionTypes";
import { bindActionCreators } from "redux";
import ModalComponent from "./ModalComponent";

class MovieCard extends React.Component {
 

  render() {
    return (
      <div className="movie-card card">
        <img className="card-img-top" src={this.props.image} alt="" />
        <div className="card-body">
          <h4 className="card-title">{this.props.title}</h4>

          <p className="card-subtitle mb-2 text-muted">{this.props.year}</p>
          <StarRatings
            rating={this.props.rating}
            starDimension="30px"
            starSpacing="1px"
          />
        </div>
        <div className="card-footer">
          <div className="clearfix">
            <div className="mt-1">
              <button id="descriptionButton">Movie Description</button>
            </div>
            <div className="card-footer-badge ">
              {/* <button
                id="editButton"
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal1"
                data-whatever="@getbootstrap"
                onClick={() => console.log(this.props)}
                // onClick={()=>this.props.editMovie(this.props.id)}
              >
                first edit
              </button> */}




              <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal1"
              onClick={() => this.props.replaceModalItem(this.props.id)}>edit</button>
              
             
              <button
                onClick={() => {
                  this.props.deleteMovie(this.props.id);
                }}
                id="removeButton"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>

      
    );
  }
}

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
      // deleteMovie,
      editMovie
      //setVisibilityFilter
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);
