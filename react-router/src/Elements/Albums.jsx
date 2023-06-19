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
      <div className='albums'>
        {userAlbums && userAlbums.map((user, index) => {
          return (
            <div className="userAlbums" key={index}>
              <p>userId: {user.userId}</p>
              <p>id: {user.id}</p>
              <p>title: {user.title}</p>
              <button onClick={() => navigate1(`${user.id}`)}>Show Photos</button>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Albums;