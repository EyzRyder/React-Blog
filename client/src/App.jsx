import { useState } from 'react'
import './assets/output.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateBlog from './components/CreateBlog';
import BlogDetails from './components/BlogDetails';

function App() {
  return (
    <Router>
    <div className="w-screen h-screen">
      <Navbar />
      <div className="m-[40px] p-[20px]">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<CreateBlog />} />
            <Route path='/blogs/:id' element={<BlogDetails />} />
          </Routes>
      </div>

      </div></Router>
  )
}

export default App


