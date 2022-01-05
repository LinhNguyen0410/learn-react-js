import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'

Album.propTypes = {
    album: PropTypes.object.isRequired
};

function Album({ album }) {
    return (
        <div className='album'>
            <div className='album-thumbnail'>
                <img src={album.thumbnail} alt="" />
            </div>
            <p className='album-name'> {album.name}</p>
        </div>
    );
}

export default Album;