import React from 'react';
import PropTypes from 'prop-types';

class MusicCard extends React.Component {
  render() {
    const { musics } = this.props;
    return (
      <div>
        <form>
          { musics.slice(1).map((music, index) => (
            <label
              data-testid={ `checkbox-music-${musics.trackId}` }
              htmlFor="checkbox-input"
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
              <input
                type="checkbox"
                id="checkbox-input"
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
