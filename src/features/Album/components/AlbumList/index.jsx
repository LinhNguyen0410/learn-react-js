import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album';
import './style.scss';


AlbumList.propTypes = {
    albumList: PropTypes.array.isRequired
};

function AlbumList({ albumList }) {
    return (
        <ul className='album-list'>
            {
                albumList.map((albumItem) => (
                    <li className='album-item' key={albumItem.id}>
                        <Album album={albumItem} />
                    </li>
                ))
            }
        </ul>
    );
}

export default AlbumList;