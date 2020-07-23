import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class AddArtist extends Component {
  state = {
    newArtist: '',
  };

  handleChange = (fieldKey) => (event) => {
    this.setState({
      ...this.state.newArtist,
      [fieldKey]: event.target.value,
    });
  };

  addArtist = (event) => {
    event.preventDefault();
    this.postArtist(this.state.newArtist);
  };

  postArtist = (newArtist) => {
    axios
      .post('/artist', newArtist)
      .then((response) => {
        this.refreshArtists();
      })
      .catch((err) => {
        console.log('Error in add Artist', err);
      });
  };

  refreshArtists = () => {
    // just like $.ajax()
    axios({
      method: 'GET',
      url: '/artist',
    })
      .then((response) => {
        this.props.dispatch({
          type: 'SET_ARTISTS',
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log('Error in refreshArtists', err);
      });
  };

  render() {
    return (
      <form onSubmit={this.addArtist}>
        <input
          onChange={this.handleChange('name')}
          type="text"
          placeholder="Artist Name"
        />
        <input type="submit" value="Add" />
      </form>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(AddArtist);
