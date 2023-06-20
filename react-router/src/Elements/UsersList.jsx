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
              <p>User Id: {user.id}</p>
              <p>Name: {user.name}</p>
              <p>Username: {user.username}</p>
              <p>Email: {user.email}</p>
              <button onClick={() => navigate(`/${user.id}`)}>Albums</button>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Users;
