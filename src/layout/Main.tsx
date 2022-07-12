import React from 'react'
// lib
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// components
import Home from 'pages/home'
import Posts from 'pages/posts'
import Post from 'pages/posts/Post'
import NotFound from 'pages/notfound/NotFound'
import WritePost from 'pages/posts/WritePost'

const Main: React.FC = () => {
  return (
    <>
      main
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='posts' element={<Posts />} />
          <Route path='posts/:id' element={<Post />} />
          <Route path='posts/add' element={<WritePost />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Main
