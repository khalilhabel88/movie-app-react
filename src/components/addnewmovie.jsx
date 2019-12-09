import React, { Component } from "react";
import ModalComp from "./modal";

class AddNewMovie extends Component {
  state = {
    isShow: false
  };
  toggle = () => this.setState({ isShow: !this.state.isShow });
  render() {
    return (
      <>
        <ModalComp
          isShow={this.state.isShow}
          toggle={this.toggle}
          addNewMovie={this.props.addNewMovie}
        />
      </>
    );
  }
}

export default AddNewMovie;
