import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes
} from 'react-router-dom';

import Home from './pages/Home'
import About from './pages/About';
import CreateBlog from './pages/CreateBlog';
import BlogDetails from './pages/BlogDetails';
import NotFound from './pages/NotFound';

import RootLayout from './layouts/RootLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='create' element={<CreateBlog />} />
          <Route path='blogs/:id' element={<BlogDetails />} />
          <Route path='*' element={<NotFound />} />
        </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App


  // < div className = "w-screen h-screen bg-white" >
  //     <Navbar />
  //     <div className="m-[40px] p-[20px]">
  //       <Routes>
  //         <Route index element={<Home />} />
  //         <Route path='about' element={<About />} />
  //         <Route path='create' element={<CreateBlog />} />
  //         <Route path='blogs/:id' element={<BlogDetails />} />
  //         <Route path='*' element={<NotFound />} />
  //       </Routes>
  //     </div>
  //   </ >