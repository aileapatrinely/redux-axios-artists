import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddArtist extends Component {
  handleChange = (event) => {
    event.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.addArtist}>
        <input
          onChange={this.handleChange}
          type="text"
          placeholder="Artist Name"
        />
        <input type="submit" value="Add" />
      </form>
    );
  }
}

export default connect()(AddArtist);
