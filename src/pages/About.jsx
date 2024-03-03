import image1 from '/src/images/classroom.webp'
import '/src/styles/about.css'
import UN4 from '/src/images/UN4.webp'
import founder1 from '/src/images/person_1.jpg.webp'
import founder2 from '/src/images/person_2.jpg.webp'
import founder3 from '/src/images/person_3.jpg.webp'
import founder4 from '/src/images/person_4.jpg.webp'
import { FaBriefcaseMedical, FaDollarSign, FaUsers } from 'react-icons/fa'


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
      <div className='proxy-container'>
        <div className="container">
          <img src={UN4} alt="picture of a boy" className='img-fluid img_boy' />
          <div className="row mt-4 dummy-text-container">
            <div className="col-md-6 col-lg-6">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim non deserunt expedita sed iure sequi esse quaerat cupiditate alias illo saepe accusantium, dolorum, nesciunt nisi veniam libero beatae illum tempore.</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, similique!</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora quis aspernatur ab quidem minima accusantium ducimus nobis, officia commodi doloremque.</p>
            </div>
            <div className="col-md-6 col-lg-6">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, alias commodi. Voluptatum consequuntur totam sapiente, distinctio obcaecati expedita, repellat hic aspernatur vitae, molestias sed voluptatibus fugiat neque nesciunt minus explicabo.</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, architecto.</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, blanditiis libero. Placeat sit tenetur sint necessitatibus impedit perspiciatis voluptatum omnis?</p>
            </div>
          </div>
        </div>
      </div>
      <div className="founders-container py-5">
        <div className="container">
          <h1 className='text-center mb-5'>Our Founders</h1>
          <div className="row">
            <div className="col-lg-3 col-md-6 mainFounder-cont mb-3">
              <div className='mb-2 founder-cont mx-auto'>
                <img src={founder1} alt="a head picture of a woman smiling" className='img-fluid founder__1' />
              </div>
              <h4 className='text-center'>Elizabeth Graham</h4>
              <h3 className='text-center'>CEO</h3>
              <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ducimus voluptas consectetur. Placeat, blanditiis numquam!</p>

            </div>
            <div className="col-lg-3 col-md-6 mainFounder-cont mb-3">
              <div className='mb-2 founder-cont mx-auto'>
                <img src={founder2} alt="a head picture of a man" className='img-fluid founder__1' />
              </div>
              <h4 className='text-center'>Jennifer Grieve</h4>
              <h3 className='text-center'>PRESIDENT</h3>
              <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ducimus voluptas consectetur. Placeat, blanditiis numquam!</p>
            </div>

            <div className="col-lg-3 col-md-6 mainFounder-cont mb-3">
              <div className='mb-2 founder-cont mx-auto'>
                <img src={founder3} alt="a head picture of a smiling man" className='img-fluid founder__1' />
              </div>
              <h4 className='text-center'>Patrick Marx</h4>
              <h3 className='text-center'>MARKETER</h3>
              <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ducimus voluptas consectetur. Placeat, blanditiis numquam!</p>
            </div>

            <div className="col-lg-3 col-md-6 mainFounder-cont mb-3">
              <div className='mb-2 founder-cont mx-auto'>
                <img src={founder4} alt="a picture of a woman" className='img-fluid founder__1' />
              </div>
              <h4 className='text-center'>Mike Coolbert</h4>
              <h3 className='text-center'>PARTNER</h3>
              <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ducimus voluptas consectetur. Placeat, blanditiis numquam!</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <img src={UN4} alt="image of a boy" className='img-fluid mb-4' />
        <section className="sub-section mb-5 py-5">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <FaBriefcaseMedical style={{ color: '#79ccab', fontSize: '2rem' }} />
              <h2>Medical Mission</h2>
              <p>"Help us make a difference <br /> in healthcare worldwide. <br /> Your donation enables life-saving <br />medical missions to provide essential <br /> care to those in need. <br /> Support our cause today!"</p>
            </div>
            <div className="col-md-6 col-lg-4">
              <FaDollarSign style={{ color: '#79ccab', fontSize: '2rem' }} />
              <h2>Make Donation Now</h2>
              <p>"Make a lasting impact Donate <br /> now to support our mission and <br /> empower positive change in <br /> communities worldwide. Every <br /> contribution makes a difference."</p>
            </div>
            <div className="col-md-6 col-lg-4">
              <FaUsers style={{ color: '#79ccab', fontSize: '2rem' }} />
              <h2>We Need Volunteers</h2>
              <p>"Join our cause! Volunteer your time <br /> and skills to support our mission. <br /> Together, we can make a meaningful <br /> difference in the lives of those in need."</p>
            </div>
          </div>
        </section>
      </div>

    </div>
  )
}



