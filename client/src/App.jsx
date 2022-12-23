import Home from './pages/Home'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateBlog from './pages/CreateBlog';
import BlogDetails from './pages/BlogDetails';
import NotFound from './pages/NotFound';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="w-screen h-screen bg-main-bl">
        <Navbar />
        <div className="m-[40px] p-[20px]">
          <Routes>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='create' element={<CreateBlog />} />
            <Route path='blogs/:id' element={<BlogDetails />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>

      </div></Router>
  )
}

export default App


