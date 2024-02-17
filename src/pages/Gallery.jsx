import '/src/styles/gallery.css'
import UN5 from '../images/UN5.webp'

import image3 from '/src/images/person_1.jpg.webp'
import image4 from '/src/images/person_2.jpg.webp'
import image5 from '/src/images/person_3.jpg.webp'
import image6 from '/src/images/person_4.jpg.webp'



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
      </div>
            









    </div>
  )
}
