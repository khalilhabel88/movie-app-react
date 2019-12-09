import React, { Component } from "react";
class ModalComp extends Component {
  state = {
    title: "",
    pic: "",
    raiting: 0
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { isShow, toggle, addNewMovie } = this.props;
    return (
      <div className="track">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalPopoversLabel">
            Modal title
          </h5>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => toggle()}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body">
          <input
            type="text"
            name="title"
            placeholder="Enter a movie name..."
            onChange={this.changeHandler}
          />
          <input
            type="text"
            name="pic"
            placeholder="Enter a movie poster..."
            onChange={this.changeHandler}
          />
          <input
            type="text"
            name="raiting"
            placeholder="Enter a movie rate..."
            onChange={this.changeHandler}
          />
        </div>
        <div className="btnadd" >
          <div className="left-side">
            
            <button
              className="btn-link"
              color="default"
              onClick={() => this.props.addNewMovie(this.state)}
            >
              Add Movie
            </button>
          </div>
          <div className="divider" />
          <div className="right-side">
            <button className="btn-link" color="danger" type="button">
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default ModalComp;
