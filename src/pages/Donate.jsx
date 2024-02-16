import UN3 from '../images/UN3.webp'
import image3 from '/src/images/person_1.jpg.webp'
import image4 from '/src/images/person_2.jpg.webp'
import image5 from '/src/images/person_3.jpg.webp'
import image6 from '/src/images/person_4.jpg.webp'
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








    </div>
  )
}



