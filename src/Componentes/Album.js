import React from 'react';
import Header from './Header';
// import getMusics from '../services/musicsAPI';

class Album extends React.Component {
  render() {
    return (
      <div data-testid="page-album">
        <Header />
        <h2 data-testid="artist-name">Name: </h2>
        <h3 data-testid="album-name">Album: </h3>
      </div>
    );
  }
}

export default Album;
