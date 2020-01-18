import StarRatings from "react-star-ratings";

import React, { Component } from "react";
import { connect } from "react-redux";
import { editMovie } from "../actions/actionCreators";

import { SHOW_ALL } from "../actions/actionTypes";
import { bindActionCreators } from "redux";

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
              {/* <div className="card-body">
                <button

                  id="editButton"
                  type="button"
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  data-whatever="@getbootstrap"
                  onClick = {()=>console.log(this.props)}
                // onClick={()=>this.props.editMovie(this.props.id)} 
                        
                >
                  first edit
                </button>

                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >

                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Edit movie
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      
                  //  this.props.editMovie(this.props.id);
                    
            
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="form-group">
                          <label
                            htmlFor="recipient-name"
                            className="col-form-label"
                          >
                            Name:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="recipient-name"
                            value={this}
                            // onChange={this.updateInputName}
                          ></input>
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor="message-text"
                            className="col-form-label"
                          >
                            Description:
                          </label>
                          <textarea
                            className="form-control"
                            id="message-text"
                            value={this.props.description}
                            //  onChange={this.updateInputDesc}
                          ></textarea>
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor="recipient-name"
                            className="col-form-label"
                          >
                            Image:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="recipient-name"
                            value={0}
                            // onChange={this.updateInputImage}
                          ></input>
                        </div>

                        <div className="form-group">
                          <label
                            htmlFor="recipient-name"
                            className="col-form-label"
                          >
                            Rating:
                          </label>
                          <StarRatings
                            rating={0}
                            //changeRating={this.changeRating}
                            starDimension="30px"
                            starSpacing="1px"
                          />
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        // onClick={this.add }
                       
                      >
                        Edit movie
                      </button>
                    </div>
                  </div>
                </div>

              
              </div> */}
              {/* </div> */}
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
      editMovie,
      //setVisibilityFilter
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);

