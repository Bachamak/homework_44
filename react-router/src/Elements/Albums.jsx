import React from 'react';
import './Albums.css';
import { useParams, useNavigate } from 'react-router-dom';

function Albums({ albums }) {
  let { id } = useParams();
  let userAlbums = [];
  albums.forEach(element => {
    if (element.userId == id) {
      userAlbums.push(element);
    }
  });
  const navigate1 = useNavigate();
  return (
    <div className='container'>
      <h1>Albums</h1>
      <div className='albums'>
        {userAlbums && userAlbums.map((user, index) => {
          return (
            <div className="userAlbums" key={index}>
              <p>User Id: {user.userId}</p>
              <p>Id: {user.id}</p>
              <p>Title: {user.title}</p>
              <button onClick={() => navigate1(`${user.id}`)}>Photos</button>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Albums;