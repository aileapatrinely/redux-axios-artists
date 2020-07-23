// App.js

import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import ArtistList from './../ArtistList/ArtistList.js';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import AddArtist from '../AddArtist/AddArtist';

class App extends Component {
  // Called when the (App) component is created
  state = {
    artists: [],
  };

  // DOM is ready
  componentDidMount() {
    // react Component method
    this.refreshArtists();
  }

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
      <Router>
        <div className="App">
          <header className="App-header">
            <div>
              <nav>
                <Link to="/">Home</Link>
                {/* <Route exact path="/" component={App} /> */}
                <Link to="/addArtist">Add Artist</Link>
                <Link to="/allArtists">Artist List</Link>
              </nav>
            </div>
            <h1 className="App-title">Famous Artists</h1>
          </header>
          <br />
          {/* <Route exact path="/allArtists" component={ArtistList} /> */}
          <ArtistList
            refreshArtists={this.refreshArtists}
            artistList={this.state.artists}
          />
          <Route exact path="/addArtist" component={AddArtist} />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
