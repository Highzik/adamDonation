import image1 from '/src/images/girl.jpg'
import image2 from '/src/images/classroom.webp'
import '/src/styles/home.css'
import { FaBriefcaseMedical, FaUsers, FaDollarSign } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="container-fluid py-5 home">
      <div className="container">
        {/* the image used as the cover image for the landing page */}
        <img src={image1} alt="image of a girl" className='img-fluid main-img' />

        {/* section for donations, volunteers, and medical missions */}
        <section className="section mb-5">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <FaBriefcaseMedical style={{ color: '#79ccab', fontSize: '2rem' }} />
              <h2>Medical Mission</h2>
              <p>A small river named Duden flows by their <br />place and supplies it with the <br />necessary regelialia</p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <FaDollarSign style={{ color: '#79ccab', fontSize: '2rem' }} />
              <h2>Make Donation Now</h2>
              <p>A small river named Duden flows by their <br />place and supplies it with the <br />necessary regelialia</p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <FaUsers style={{ color: '#79ccab', fontSize: '2rem' }} />
              <h2>We Need Volunteers</h2>
              <p>A small river named Duden flows by their <br />place and supplies it with the <br />necessary regelialia</p>
            </div>
          </div>
        </section>

        {/* section for schools in Africa */}
        <section className="section2">
          <div className="row">
            <div className="col-sm-12 col-lg-6">
              <h4>FEATURED</h4>
              <h3>School in Africa <br />Need Renovations</h3>
              <p>Far far away, behind the word mountains, far from the countries <br />
                Vokalia and Consonantia, there live the blind texts
              </p>
              <p><i>Last donation 1w ago</i></p>
              <h2>$8,100 raised of $30,000</h2>
              <button>DONATE NOW</button>
            </div>
            <div className="col-sm-12 col-lg-6">
              <img src={image2} alt="children in classroom" className='img-fluid second-img' />
            </div>
          </div>
        </section>

      </div>

    </div>
  )
}
