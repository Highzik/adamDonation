// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// route
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

// pages lists
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Donate from './pages/Donate'
import Contact from './pages/Contact'

// layout lists
import NavLayout from './layouts/NavLayout'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<NavLayout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='donate' element={<Donate />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
