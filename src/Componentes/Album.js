import React from 'react';
import Header from './Header';
import getMusics from '../services/musicsAPI';
import MusicCard from './MusicCard';

class Album extends React.Component {
  constructor() {
    super();

    this.state = {
      music: [],
      artistName: '',
      artistAlbum: '',
    };
  }

  componentDidMount() {
    this.infoMusic();
  }

  // O wallacy me ajudou com lógica dessa função
  infoMusic = async () => {
    const URL = window.location.href;
    const idUrl = URL.split('album/');
    const musics = await getMusics(idUrl[1]);
    this.setState({
      music: musics,
      artistName: musics[0].artistName,
      artistAlbum: musics[0].collectionName,
    });
  }

  render() {
    const { music, artistAlbum, artistName } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        <h2 data-testid="artist-name">
          { artistName }
        </h2>
        <h3 data-testid="album-name">
          Album:
          { artistAlbum }
        </h3>
        <MusicCard musics={ music } />
      </div>
    );
  }
}

export default Album;
