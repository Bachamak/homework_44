import React, { useState, useEffect } from 'react';
import './App.css';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  const fetchAlbums = (userId) => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then((response) => response.json())
      .then((data) => setAlbums(data))
      .catch((error) => console.log(error));
  };

  const fetchPhotos = (albumId) => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then((response) => response.json())
      .then((data) => setPhotos(data))
      .catch((error) => console.log(error));
  };

  return (
    <div className='main'>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
            <button className='btn' onClick={() => fetchAlbums(user.id)}>Albums</button>
            {albums.length > 0 && (
              <ul className='ul-albums'>
                {albums.map((album) => (
                  <li key={album.id}>
                    {album.title}
                    <button onClick={() => fetchPhotos(album.id)}>Photos</button>
                    {photos.length > 0 && (
                      <ul className='ul-photos'>
                        {photos.map((photo) => (
                          <li className='li-photos' key={photo.id}>
                            <img src={photo.thumbnailUrl} alt={photo.title} />
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;