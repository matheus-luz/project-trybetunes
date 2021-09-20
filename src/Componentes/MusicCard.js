import React from 'react';

class MusicCard extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label
            data-testid={ `checkbox-music-${trackId}` }
            htmlFor="checkbox-input"
          >
            <input
              type="checkbox"
              id="checkbox-input"
            />
          </label>
        </form>
      </div>
    );
  }
}

export default MusicCard;
