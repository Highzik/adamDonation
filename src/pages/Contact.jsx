import image1 from '/src/images/classroom.webp'
import image2 from '/src/images/children.jpg'
import '/src/styles/contact.css'
import { useState } from 'react'

export default function Contact() {

  // Functionality for the form 
  const [formData, setFormData] = useState({})

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
    console.log(formData);
    // This is to monitor user input in those fields
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // We'll send the data received from user to the backend when we have it
  }

  return (
    <div className="container-fluid py-5">
      <div className="container">
        {/* main image used as the landing page */}
        <img src={image1} alt="children in a classroom" className='img-fluid contactImg' />

        {/* container holding the text on the landing page */}
        <div className='text-center text_on_img'>
          <h1>GET IN TOUCH</h1>
        </div>

        {/* container for the formInput and image */}
        <section className="formInput">
          <div className="row">
            <div className="col-lg-6">

              {/* form container */}
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  id='name'
                  placeholder='Your Name'
                  required className='col-12 mb-2 py-3 px-4'
                  onChange={onChange}
                /><br />

                <input
                  type="email"
                  id='email'
                  placeholder='Your Email'
                  required className='col-12 mb-2 py-3 px-4'
                  onChange={onChange}
                /><br />

                <input
                  type="text"
                  id='subject'
                  placeholder='Subject'
                  required className='col-12 mb-2 py-3 px-4'
                  onChange={onChange}
                /><br />

                <textarea
                  id="message"
                  rows="8"
                  placeholder='Message'
                  className='px-4 py-3 col-12 text-area mb-4'
                  onChange={onChange}
                ></textarea><br />

                <input
                  type="button"
                  value="SEND MESSAGE"
                  className='submit-btn py-3 mb-3'
                />
              </form>
            </div>

            {/* image container */}
            <div className="col-lg-6">
              <img src={image2} alt="children playing together" className='img-fluid' />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
