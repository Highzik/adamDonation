import { NavLink, Outlet } from "react-router-dom"
import { useState, useEffect } from "react"
import '/src/styles/navlayout.css'

export default function NavLayout() {
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const threshold = 600;
      setScrolling(scrollTop > threshold)
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <div>
      {/* The layout for NavBar */}
      <nav className={`navbar navbar-expand-lg fixed-top ${scrolling ? "scrolled" : ''}`}>
        <div className="container-fluid">
          <div className="container flexed mx-auto">
            <NavLink className='navbar-brand' to={'/'}>GIVING</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              <span className="menu-text">MENU</span>
            </button>
            <div className="offcanvas offcanvas-end" tabIndex='-1' id="offcanvasNavbar" aria-labelledby="offcanvasNavbarlabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">MENU</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <NavLink className="nav-link mx-lg-2" aria-current="page" to={'/'}>Home</NavLink>
                  </li>
                  <li className="nav-item">
                  <NavLink className="nav-link mx-lg-2" aria-current="page" to={'gallery'}>Gallery</NavLink>
                    {/* <NavLink className="nav-link mx-lg-2" aria-current="page" to={'about'}>About</NavLink> */}
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link mx-lg-2" aria-current="page" to={'donate'}>Donate</NavLink>
                  </li>
                  <li className="nav-item">
                    {/* <NavLink className="nav-link mx-lg-2" aria-current="page" to={'gallery'}>Gallery</NavLink> */}
                    <NavLink className="nav-link mx-lg-2" aria-current="page" to={'about'}>About</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link mx-lg-2" aria-current="page" to={'contact'}>Contact</NavLink>
                  </li>
                </ul>
              </div>
            </div>

          </div>

        </div>

      </nav>
      <Outlet />
    </div>
  )
}
