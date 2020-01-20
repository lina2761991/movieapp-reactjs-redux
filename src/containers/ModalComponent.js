import StarRatings from "react-star-ratings";

import React, { Component } from "react";
import { connect } from "react-redux";
import { editMovie } from "../actions/actionCreators";

import { SHOW_ALL } from "../actions/actionTypes";
import { bindActionCreators } from "redux";

class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        id: this.props.id,

      title: this.props.title,
      description: this.props.description,
      rating: this.props.rating,
      image: this.props.image,
     // movies: this.props.movies
    };
     console.log(this.state);
  }

  componentWillReceiveProps(nextprops) {

    this.setState({
     id: nextprops.id,
      title: nextprops.title,
      description: nextprops.description,
      rating: nextprops.rating,
      image: nextprops.image,
      movies: nextprops.movies
    });
  }

  titleHandler(e) {
    this.setState({ title: e.target.value });
}
descriptionHandler(e) {
    this.setState({ description: e.target.value });
}
imageHandler(e) {
    this.setState({ image: e.target.value });
}
ratingHandler(e) {
    this.setState({ rating: e.target.value });
}


edit = () => {
   

    console.log(this.props.movies);     

    
  };
  render() {
    return (
      <div className="card-body">
        <div
          className="modal fade"
          id="exampleModal1"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel1"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel1">
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
                    <label htmlFor="recipient-name" className="col-form-label">
                      Name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      value={this.state.title}
                      onChange={(e) => this.titleHandler(e)}
                    ></input>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message-text" className="col-form-label">
                      Description:
                    </label>
                    <textarea
                      className="form-control"
                      id="message-text"
                      value={this.state.description}
                      onChange={(e) => this.descriptionHandler(e)}
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Image:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      value={this.state.image}
                      onChange={(e) => this.imageHandler(e)}
                    ></input>
                  </div>

                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Rating:
                    </label>
                    <StarRatings
                      rating={this.state.rating}
                      changeRating={this.changeRating}
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
                 onClick={()=>this.props.editMovie(this.state.id,this.state.title,this.state.description,this.state.image, this.state.rating)}

                >
                  Edit movie
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => {
    return { movies: state.movies };
   
  };
  const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {
        
        editMovie
        
      },
      dispatch
    );
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(ModalComponent);
  

