import './App.css'
import React, { useState, useEffect } from 'react'
import Users from './Elements/UsersList.jsx'
import Albums from './Elements/Albums.jsx'
import Photos from './Elements/Photos.jsx'
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'

function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetchUsers()
  }, [])
  const fetchUsers = async () => {
    await fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => {
        console.log('ERROR:' + error)
      })
  }

  const [albums, setAlbums] = useState([])
  useEffect(() => {
    fetchAlbums()
  }, [])
  const fetchAlbums = async () => {
    await fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => response.json())
      .then((data) => setAlbums(data))
      .catch((error) => {
        console.log('ERROR:' + error)
      })
  }

  const [photos, setPhotos] = useState([])
  useEffect(() => {
    fetchPhotos()
  }, [])
  const fetchPhotos = async () => {
    await fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((data) => setPhotos(data))
      .catch((error) => {
        console.log('ERROR:' + error)
      })
  }

  return (
    <div className="App">
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Users users={users} />} />
            <Route path="/:id" element={<Albums albums={albums} />} />
            <Route path="/:id/:slug" element={<Photos photos={photos} />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </div>
  )
}

export default App
