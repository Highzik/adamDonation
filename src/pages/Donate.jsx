import UN3 from '../images/UN3.webp'
import image3 from '/src/images/person_1.jpg.webp'
import image4 from '/src/images/person_2.jpg.webp'
import image5 from '/src/images/person_3.jpg.webp'
import image6 from '/src/images/person_4.jpg.webp'
import UN2 from '../images/UN2.jpeg'
import '/src/styles/donate.css'


export default function Donate() {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        {/* The backgroud image of the donation page */}
      <img src={UN3} alt="children Smiling" className='img-fluid donateImg' />
      </div>
      {/* This is the H1 and the Ptag on the background image  */}
      <div className='text-center text_on_img'>
          <h1>Donate To Save Lifes</h1>
          <p class="writeup">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus <br /> at aspernatur, ullam, perferendis, vel assumenda laboriosam <br /> blanditiis quasi iusto veritatis fugiat aut! Culpa minima optio <br /> sint eligendi, id ipsam explicabo.</p>
        </div>

        <br /> <br />

         {/* section for latest donations */}
         <div>
            <div class="site-section fund-raisers">
                <div class="container">
                <div class="row mb-5">
                <div class="col-md-12 text-center">
                <h2 className='h2d'>Latest Donations</h2>
                </div>
                </div>
                <div class="row">
                <div class="col-md-6 col-lg-3 mb-5">
                <div class="person-donate text-center bg-light pt-4">
                <img src={image3} alt="Image placeholder" class="img-fluid" />
                <div class="donate-info">
                <h2>Jean Smith</h2>
                <span class="time d-block mb-3">Donated 3 hours ago</span>
                <div class="donate-amount d-flex">
                <div class="label">Donated</div>
                <div class="amount">$1,150</div>
                </div>
                </div>
                </div>
                </div>
                <div class="col-md-6 col-lg-3 mb-5">
                <div class="person-donate text-center bg-light pt-4">
                <img src={image3}  alt="Image placeholder" class="img-fluid" />
                <div class="donate-info">
                <h2>Christine Charles</h2>
                <span class="time d-block mb-3">Donated 3 hours ago</span>
                <div class="donate-amount d-flex">
                <div class="label">Donated</div>
                <div class="amount">$150</div>
                </div>
                </div>
                </div>
                </div>
                <div class="col-md-6 col-lg-3 mb-5">
                <div class="person-donate text-center bg-light pt-4">
                <img src={image4}  alt="Image placeholder" class="img-fluid" />
                <div class="donate-info">
                <h2>Albert Sluyter</h2>
                <span class="time d-block mb-3">Donated 3 hours ago</span>
                <div class="donate-amount d-flex">
                <div class="label">Donated</div>
                <div class="amount">$534</div>
                </div>
                </div>
                </div>
                </div>
                <div class="col-md-6 col-lg-3 mb-5">
                <div class="person-donate text-center bg-light pt-4">
                <img src={image5} alt="Image placeholder" class="img-fluid" />
                <div class="donate-info">
                <h2>Andrew Holloway</h2>
                <span class="time d-block mb-3">Donated 3 hours ago</span>
                <div class="donate-amount d-flex">
                <div class="label">Donated</div>
                <div class="amount">$2,500</div>
                </div>
                </div>
                </div>
                </div>
                <div class="col-md-6 col-lg-3 mb-5">
                <div class="person-donate text-center bg-light pt-4">
                <img src={image6}  alt="Image placeholder" class="img-fluid" />
                <div class="donate-info">
                <h2>Albert Sluyter</h2>
                <span class="time d-block mb-3">Donated 3 hours ago</span>
                <div class="donate-amount d-flex">
                <div class="label">Donated</div>
                <div class="amount">$534</div>
                </div>
                </div>
                </div>
                </div>
                <div class="col-md-6 col-lg-3 mb-5">
                <div class="person-donate text-center bg-light pt-4">
                <img src={image3}   alt="Image placeholder" class="img-fluid" />
                <div class="donate-info">
                <h2>Andrew Holloway</h2>
                <span class="time d-block mb-3">Donated 3 hours ago</span>
                <div class="donate-amount d-flex">
                <div class="label">Donated</div>
                <div class="amount">$2,500</div>
                </div>
                </div>
                </div>
                </div>
                <div class="col-md-6 col-lg-3 mb-5">
                <div class="person-donate text-center bg-light pt-4">
                <img src={image3}  alt="Image placeholder" class="img-fluid" />
                <div class="donate-info">
                <h2>Jean Smith</h2>
                <span class="time d-block mb-3">Donated 3 hours ago</span>
                <div class="donate-amount d-flex">
                <div class="label">Donated</div>
                <div class="amount">$1,150</div>
                </div>
                </div>
                </div>
                </div>
                <div class="col-md-6 col-lg-3 mb-5">
                <div class="person-donate text-center bg-light pt-4">
                <img src={image3}  alt="Image placeholder" class="img-fluid" />
                <div class="donate-info">
                <h2>Christine Charles</h2>
                <span class="time d-block mb-3">Donated 3 hours ago</span>
                <div class="donate-amount d-flex">
                <div class="label">Donated</div>
                <div class="amount">$150</div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
        </div>

        {/* The Donation containter ends here  */}

         {/* section for schools in Africa */}
      <section className="section2">
        <div className="row">
          <div className="col-lg-6">
            <h4>Success Stories</h4>
            <h3>School in Africa <br />Need Renovations.
            Thanks To All Donor</h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
            <h1 className='mb-4'>$30,000</h1>
            {/* <h2 className='mb-4'>$30,000</h2>
            <h1 className='mb-4'>$30,000</h1> */}
            <button className='mb-3'>READ THE FULL STORY</button>
          </div>
          <div className="col-lg-6 secondImg-container">
            <img src={UN2} alt="children in classroom" className='img-fluid second-img' />
          </div>
        </div>
      </section>




        {/* The next container here is the succesful container . It contains a message after the donation section */}\


        {/* This is the testimony section */}


        {/* <div class="site-section bg-light">
                <div class="container">
                    <div class="row mb-5">
                    <div class="col-md-12 text-center">
                    <h2>Testimonial</h2>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-md-6 mb-5">
                    <div class="block-47 d-flex">
                    <div class="block-47-image">
                    <img src={image3} alt="Image placeholder" class="img-fluid" />
                    </div>
                    <blockquote class="block-47-quote">
                    <p>“A small river named Duden flows by their place and supplies it with the necessary regelialia.”</p>
                    <cite class="block-47-quote-author">Carl Adams</cite>
                    </blockquote>
                    </div>
                    </div>
                    <div class="col-md-6 mb-5">
                    <div class="block-47 d-flex">
                    <div class="block-47-image">
                    <img src={image3} alt="Image placeholder" class="img-fluid" />
                    </div>
                    <blockquote class="block-47-quote">
                    <p>“A small river named Duden flows by their place and supplies it with the necessary regelialia.”</p>
                    <cite class="block-47-quote-author">— Nicole Watson</cite>
                    </blockquote>
                    </div>
                    </div>
                    <div class="col-md-6 mb-5">
                    <div class="block-47 d-flex">
                    <div class="block-47-image">
                    <img src={image3} alt="Image placeholder" class="img-fluid" />
                    </div>
                    <blockquote class="block-47-quote">
                    <p>“A small river named Duden flows by their place and supplies it with the necessary regelialia.”</p>
                    <cite class="block-47-quote-author">Vanessa Horton</cite>
                    </blockquote>
                    </div>
                    </div>
                    <div class="col-md-6 mb-5">
                    <div class="block-47 d-flex">
                    <div class="block-47-image">
                    <img src={image3} alt="Image placeholder" class="img-fluid" />
                    </div>
                    <blockquote class="block-47-quote">
                    <p>“A small river named Duden flows by their place and supplies it with the necessary regelialia.”</p>
                    <cite class="block-47-quote-author">— Adam Spratt</cite>
                    </blockquote>
                    </div>
                    </div>
                    </div>
                    </div>
                </div> */}



              




    </div>
  )
}



