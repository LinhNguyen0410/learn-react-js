import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList'

// this is parent
AlbumFeature.propTypes = {

};

function AlbumFeature(props) {

    const listAlbum = [
        {
            id: 1,
            name: 'CD Cyrille Aimée - Move On',
            thumbnail: 'https://pic.soundofmusic-shop.de/26836p.jpg'
        },
        {
            id: 2,
            name: 'Mattu Mattu - IFT PROD',
            thumbnail: 'https://a10.gaanacdn.com/gn_img/albums/Oxd3xzPbgV/xd3x97ZDWg/size_l.jpg'
        },
        {
            id: 3,
            name: 'Everything Everything unveil',
            thumbnail: 'https://www.nme.com/wp-content/uploads/2016/09/2015EverythingEverything_GetToHeaven130515-400x400.jpg'
        },
    ]
    return (
        <div>
            <h3>My Album</h3>
            <AlbumList albumList={listAlbum} />
            {/* albumList is props */}
        </div>
    );
}

export default AlbumFeature;