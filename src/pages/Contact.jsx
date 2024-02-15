import image1 from '/src/images/classroom.webp'
import image2 from '/src/images/children.jpg'
import '/src/styles/contact.css'
import { useState } from 'react'

export default function Contact() {

  // functionality to catch input from user

  // set a form Data to receive every value that wil be inputed by user
  const [formInput, setFormInput] = useState([{
    name: '',
    email: '',
    subject: '',
    message: ''
  }])

  // catch every value and transfer it to the form Data
  const onchange = (e) => {
    const validateForm = {
      ...formInput[name, value] = e.target.value
    }
    setFormInput(validateForm);
  }

  //submit form
  const handleSubmit = (e) => {
    e.preventDefault
  }

  //all these are yet to be completed. I still dey watch videos on form validation. We go run am!!!

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
                  name='name'
                  placeholder='Your Name'
                  required className='col-12 mb-2 py-3 px-4'
                  onChange={onchange}
                /><br />

                <input
                  type="email"
                  name='email'
                  placeholder='Your Email'
                  required className='col-12 mb-2 py-3 px-4'
                  onChange={onchange}
                /><br />

                <input
                  type="text"
                  name='subject'
                  placeholder='Subject'
                  required className='col-12 mb-2 py-3 px-4'
                  onChange={onchange}
                /><br />

                <textarea
                  name="message"
                  rows="8"
                  placeholder='Message'
                  className='px-4 py-3 col-12 text-area mb-4'
                  onChange={onchange}
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
