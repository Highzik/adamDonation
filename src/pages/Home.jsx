import image1 from '/src/images/girl.jpg'
import image2 from '/src/images/classroom.webp'
import image3 from '/src/images/person_1.jpg.webp'
import image4 from '/src/images/person_2.jpg.webp'
import image5 from '/src/images/person_3.jpg.webp'
import image6 from '/src/images/person_4.jpg.webp'
import image7 from '/src/images/UN3.webp'
import '/src/styles/home.css'
import { FaBriefcaseMedical, FaUsers, FaDollarSign } from 'react-icons/fa'
// import Footer from './Footer'

export default function Home() {
  return (
    <div className="container-fluid py-5 home">
      <div className="container">
        {/* the image used as the cover image for the landing page */}
        <img src={image1} alt="image of a girl" className='img-fluid main-img' />

        {/* text close to the image for the landing page */}
        <h1>Please Help African <br />Children Give <br />Them A Better Life</h1>

        {/* section for donations, volunteers, and medical missions */}
        <section className="section mb-5">
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

      {/* section for schools in Africa */}
      <section className="section2">
        <div className="row">
          <div className="col-lg-6">
            <h4>FEATURED</h4>
            <h3>School in Africa <br />Need Renovations</h3>
            <p>Far far away, behind the word mountains, far from the countries <br />
              Vokalia and Consonantia, there live the blind texts
            </p>
            <p><i>Last donation 1w ago</i></p>
            <h2 className='mb-4'>$8,100 raised of $30,000</h2>
            <button className='mb-3'>DONATE NOW</button>
          </div>
          <div className="col-lg-6 secondImg-container">
            <img src={image2} alt="children in classroom" className='img-fluid second-img' />
          </div>
        </div>
      </section>

      {/* section for latest donations */}
      <section className='section3'>
        <h2 style={{ color: "black", position: "relative" }} className='text-center'>Latest Donations</h2>
        <div className="container">
          <div className="row text-center cards ">

            {/* First card of list of donors */}
            <div className="col-md-6 col-lg-3 mb-5">
              <img src={image3} alt="image of a donor" className='img-fluid mb-3' />
              <h4>Jean Smith</h4>
              <p>Donated 3 hours ago</p>
              <div className="donate-amount d-flex">
                <div className='donate'>Donated</div>
                <div className='amount'>$1,150</div>
              </div>
            </div>

            {/* Second card of list of donors */}
            <div className="col-md-6 col-lg-3 mb-5">
              <img src={image4} alt="image of a donor" className='img-fluid mb-3' />
              <h4>Christine Charles</h4>
              <p>Donated 3 hours ago</p>
              <div className="d-flex">
                <div className='donate text-center'>Donated</div>
                <div className='amount text-center'>$150</div>
              </div>
            </div>

            {/* Third card of list of donors */}
            <div className="col-md-6 col-lg-3 mb-5">
              <img src={image5} alt="image of a donor" className='img-fluid mb-3' />
              <h4>Albert Sluyter</h4>
              <p>Donated 3 hours ago</p>
              <div className="d-flex">
                <div className='donate'>Donated</div>
                <div className='amount'>$534</div>
              </div>
            </div>

            {/* Fourth card of list of donors */}
            <div className="col-md-6 col-lg-3 mb-5">
              <img src={image6} alt="image of a donor" className='img-fluid mb-3' />
              <h4>Andrew Holloway</h4>
              <p>Donated 3 hours ago</p>
              <div className="d-flex">
                <div className='donate'>Donated</div>
                <div className='amount'>$2,500</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 4 of the home page */}
      <section className='section4'>
        {/* flex container */}
        <div className="row gx-4">

          {/* to be shared in twos in mid and large screen  */}
          <div className="col-lg-6">
            <div className='forthImg-container'>
              <img src={image7} alt="image of children smiling" className='img-fluid mb-3' />
            </div>
          </div>

          {/* to be shared in twos in mid and large screen */}
          <div className="col-lg-6">
            <h2>SUCCESS STORIES</h2>
            <h3>School in Africa Need Renovations. Thanks To All Donors</h3>
            <p>Far far away, behind the word mountains, far from the countries <br />
              Vokalia and Consonantia, there live the blind texts
            </p>
            <span>We have raised $30,000</span><br />
            <button className='py-3 px-4'>READ THE FULL STORY</button>
          </div>
        </div>
      </section>
    </div>
  )
}
