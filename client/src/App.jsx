import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes
} from 'react-router-dom';

import Home, { blogLoader } from './pages/Home'
import BlogDetails, { blogDetailsLoader } from './pages/BlogDetails';
import About from './pages/About';
import Contact, { contactAction } from './pages/Help/Contact';
import Faq from './pages/Help/Faq';
import Careers, { careersLoader } from './pages/Careers/Careers';
import CareerDetails, { careerDetailsLoader } from './pages/Careers/CareerDetails';
import CreateBlog from './pages/CreateBlog';
import NotFound from './pages/NotFound';

import RootLayout from './layouts/RootLayout'
import HelpLayout from './layouts/helpLayout';
import CareersLayout from './layouts/CareersLayout';
import Error from './pages/Error';


const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} loader={blogLoader} />
      
      <Route path='about' element={<About />} />

      <Route path='help' element={<HelpLayout/>}>
        <Route path='faq' element={<Faq />} />
        <Route path='contact' element={<Contact />} action={contactAction} />
      </Route>

      <Route path='create' element={<CreateBlog />} />

      <Route path='blogs/:id' element={<BlogDetails />} loader={blogDetailsLoader} errorElement={<Error />} />

      <Route path='careers' element={<CareersLayout />} errorElement={<Error />}  >
        <Route index element={<Careers />} loader={careersLoader} />
        <Route path=':id' element={<CareerDetails />} loader={careerDetailsLoader} />
      </Route>

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