import React from 'react';
import './Photos.css';
import { useParams } from 'react-router-dom';

function Photos({ photos }) {
  let { slug } = useParams();
  let albumPhotos = [];
  photos.forEach(element => {
    if (element.albumId == slug) {
      albumPhotos.push(element);
    }
  });
  return (
    <div className='photos'>
      {albumPhotos && albumPhotos.map((user, index) => {
        return (
          <div className="albumPhotos" key={index}>
            <p>Id: {user.id}</p>
            <img src={user.url} />
            <img src={user.thumbnailUrl} />
            <p>Title: {user.title}</p>
          </div>
        );
      })}
    </div>
  )
}

export default Photos;