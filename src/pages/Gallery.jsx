import '/src/styles/gallery.css'
import UN5 from '../images/UN5.webp'
import image1 from '/src/images/img_1.jpg.webp'
import image2 from '/src/images/img_2.jpg.webp'
import image3 from '/src/images/img_3.jpg.webp'
import image4 from '/src/images/img_4.jpg.webp'
import { FaSearch, FaBriefcaseMedical, FaDollarSign, FaUsers } from "react-icons/fa"

export default function Gallery() {
  return (
    <div className="container-fluid py-5">
      <div className="container">

        {/* main image used as the landing page */}
        <img src={UN5} alt="children in a classroom" className='img-fluid galleryImg' />

        {/* container holding the text on the landing page */}
        <div className='text-center text_on_img'>
          <h1>Gallery That Worth A<br />Thousand Word</h1>
        </div>

        {/* container flexing all images */}
        <div className="grid-gallery-container mb-4">
          <div className="gallery-container">
            <img src={image1} alt="" className='img-fluid' />
            <div className="overlay">
              <FaSearch style={{ fontSize: "1rem", color: '#FFF' }} />
            </div>
          </div>
          <div className="gallery-container">
            <img src={image2} alt="" className='img-fluid' />
            <div className="overlay">
              <FaSearch style={{ fontSize: "1rem", color: '#FFF' }} />
            </div>
          </div>
          <div className="gallery-container">
            <img src={image3} alt="" className='img-fluid' />
            <div className="overlay">
              <FaSearch style={{ fontSize: "1rem", color: '#FFF' }} />
            </div>
          </div>
          <div className="gallery-container">
            <img src={image4} alt="" className='img-fluid' />
            <div className="overlay">
              <FaSearch style={{ fontSize: "1rem", color: '#FFF' }} />
            </div>
          </div>
          <div className="gallery-container">
            <img src={image3} alt="" className='img-fluid' />
            <div className="overlay">
              <FaSearch style={{ fontSize: "1rem", color: '#FFF' }} />
            </div>
          </div>
          <div className="gallery-container">
            <img src={image2} alt="" className='img-fluid' />
            <div className="overlay">
              <FaSearch style={{ fontSize: "1rem", color: '#FFF' }} />
            </div>
          </div>
          <div className="gallery-container">
            <img src={image3} alt="" className='img-fluid' />
            <div className="overlay">
              <FaSearch style={{ fontSize: "1rem", color: '#FFF' }} />
            </div>
          </div>
          <div className="gallery-container">
            <img src={image1} alt="" className='img-fluid' />
            <div className="overlay">
              <FaSearch style={{ fontSize: "1rem", color: '#FFF' }} />
            </div>
          </div>
          <div className="gallery-container">
            <img src={image4} alt="" className='img-fluid' />
            <div className="overlay">
              <FaSearch style={{ fontSize: "1rem", color: '#FFF' }} />
            </div>
          </div>
          <div className="gallery-container">
            <img src={image2} alt="" className='img-fluid' />
            <div className="overlay">
              <FaSearch style={{ fontSize: "1rem", color: '#FFF' }} />
            </div>
          </div>
          <div className="gallery-container">
            <img src={image4} alt="" className='img-fluid' />
            <div className="overlay">
              <FaSearch style={{ fontSize: "1rem", color: '#FFF' }} />
            </div>
          </div>
          <div className="gallery-container">
            <img src={image1} alt="" className='img-fluid' />
            <div className="overlay">
              <FaSearch style={{ fontSize: "1rem", color: '#FFF' }} />
            </div>
          </div>
        </div>

        {/* The volunteer and donaters section */}
        <section className="section-gallery mb-5 py-4">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <FaBriefcaseMedical style={{ color: '#79ccab', fontSize: '2rem' }} />
              <h2>Medical Mission</h2>
              <p>A small river named Duden flows by their <br />place and supplies it with the <br />necessary regelialia</p>
            </div>
            <div className="col-md-6 col-lg-4">
              <FaDollarSign style={{ color: '#79ccab', fontSize: '2rem' }} />
              <h2>Make Donation Now</h2>
              <p>A small river named Duden flows by their <br />place and supplies it with the <br />necessary regelialia</p>
            </div>
            <div className="col-md-6 col-lg-4">
              <FaUsers style={{ color: '#79ccab', fontSize: '2rem' }} />
              <h2>We Need Volunteers</h2>
              <p>A small river named Duden flows by their <br />place and supplies it with the <br />necessary regelialia</p>
            </div>
          </div>
        </section>
      </div>









    </div>
  )
}
