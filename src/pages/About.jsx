import image1 from '/src/images/classroom.webp'
import '/src/styles/about.css'
import UN4 from '/src/images/UN4.webp'


export default function About() {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        {/* main image used as the landing page */}
        <img src={image1} alt="children in a classroom" className='img-fluid aboutImg' />

        {/* container holding the text on the landing page */}
        <div className='text-center text_on_img'>
          <h1>About The <br /> Organization</h1>
        </div>
      </div>
      {/* The second image on the page  */}

      <div className="col-md-12 mb-5 about--container">
        {/* The second image on the page */}
        <img src={UN4} alt="A boy standing" className='img-fluid secondImg' />
      </div>





    </div>
  )
}



