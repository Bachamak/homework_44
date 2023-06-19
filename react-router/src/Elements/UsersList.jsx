import React, { useState, useEffect } from 'react';
import './UsersList.css';
import { useNavigate } from "react-router-dom";

function Users({ users }) {
  const navigate = useNavigate();
  return (
    <div className='container'>
      <h1>Users list</h1>
      <div className='usersList'>
        {users && users.map((user, index) => {
          return (
            <div className="user" key={index}>
              <p>userId: {user.id}</p>
              <p>name: {user.name}</p>
              <p>username: {user.username}</p>
              <p>email: {user.email}</p>
              <button onClick={() => navigate(`/${user.id}`)}>Show Albums</button>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Users;
