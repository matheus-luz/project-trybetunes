import React from 'react';
import PropTypes from 'prop-types';

class MusicAlbum extends React.Component {
  render() {
    const { album, key } = this.props;
    return (
      <div key={ key }>
        { album }
      </div>
    );
  }
}

MusicAlbum.propTypes = {
  album: PropTypes.string,
  key: PropTypes.number,
}.isRequired;

export default MusicAlbum;
