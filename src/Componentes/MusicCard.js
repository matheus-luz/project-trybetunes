import React from 'react';
import PropTypes from 'prop-types';
import { addSong, getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class MusicCard extends React.Component {
  constructor() {
    super();

    this.state = {
      songFavorite: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.musicsFavorits();
  }

  componentDidUpdate() {
    this.musicsFavorits();
  }

  favoriteMusics = async (event, music) => {
    const valueCheck = event.target.checked;
    if (valueCheck) {
      this.setState({
        loading: true,
      });
      await addSong(music);
      this.setState({
        loading: false,
      });
    }
  }

  musicsFavorits = async () => {
    const songGet = await getFavoriteSongs();
    console.log(songGet);
    this.setState({
      songFavorite: songGet,
    });
  }

  render() {
    const { musics } = this.props;
    const { loading, songFavorite } = this.state;
    if (loading === true) {
      return <Loading />;
    }
    return (
      <div>
        <form>
          { musics.slice(1).map((music, index) => (
            <label
              data-testid={ `checkbox-music-${music.trackId}` }
              htmlFor={ music.trackId }
              key={ index }
            >
              <span>
                Track Name
                { ' ' }
                { index + 1 }
              </span>
              <audio
                data-testid="audio-component"
                key={ index }
                src={ music.trackViewUrl }
                controls
              >
                <track kind="captions" />
                O seu navegador não suporta o elemento
                {' '}
                <code>
                  { music.artistViewUrl }
                </code>
              </audio>
              Favorite:
              <input
                name={ music.trackId }
                type="checkbox"
                id={ music.trackId }
                checked={ songFavorite.some((song) => song.trackId === music.trackId) }
                onChange={ (event) => this.favoriteMusics(event, music) }
              />
              <div />
            </label>
          ))}
        </form>
      </div>
    );
  }
}

MusicCard.propTypes = {
  musics: PropTypes,
}.isRequired;

export default MusicCard;
