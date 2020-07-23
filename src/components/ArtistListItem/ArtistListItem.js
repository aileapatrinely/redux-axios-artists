// ArtistListItem.js

import React, { Component } from 'react';
import axios from 'axios';

class ArtistListItem extends Component {
    deleteArtist = () => {
        axios({
            method: 'DELETE',
            url: `/artist/${this.props.artist.id}`
        }).then((response) => {
            this.props.refreshArtists();
        });
    }
    render() {
        return (
            <tr>
                <td>{this.props.artist.name}</td>
                <td><button onClick={this.deleteArtist}>DELETE</button></td>
            </tr>
        );
    }
}

export default ArtistListItem;