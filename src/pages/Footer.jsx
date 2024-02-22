import '/src/styles/footer.css'
import { FaPhone, FaEnvelope, FaMapMarker, FaClock } from 'react-icons/fa'

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer className="text-white w-100 footer container-fluid">
            <div className="main-container">
                <div className="row">
                    <div className="col-md-6 col-lg-6">
                        <h3 className="heading-section">About Us</h3>
                        <p className="mb-5">Far far away, behind the word mountains, <br /> far from the countries Vokalia and <br />Consonantia, there live the blind texts. <br /> Separated they live in Bookmarksgrove right <br /> at the coast of the Semantics, a large <br /> language ocean.</p>
                        <p><a href="#" class="btn btn-primary px-4 py-3">Join Volunteer</a></p>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <ul className='p-0'>
                            <h3 className="heading-section">Contact Info</h3>
                            <li><span className="icon icon-map-marker"><FaMapMarker style={{ color: '#79ccab', fontSize: '1rem', marginRight: "10px" }} /> 203 Fake St. Mountain View, San <br />Francisco, California, USA</span></li>
                            <li><a href="#"><span className="icon icon-phone text-white"><FaPhone style={{ color: '#79ccab', fontSize: '1rem', marginRight: '10px' }} /> +2 392 3929 210</span></a></li>
                            <li><a href="#"><span className="icon icon-envelope text-white"><FaEnvelope style={{ color: '#79ccab', fontSize: '1rem', marginRight: "10px" }} />   info@yourdomain.com</span></a></li>
                            {/* <li><a href="#"><span className="icon icon-envelope text-white"><FaMapMarker style={{ color: '#79ccab', fontSize: '1rem', marginRight: "10px" }} />   San Francisco, IL</span></a></li> */}
                            <li><span className="icon icon-clock-o"><FaClock style={{ color: '#79ccab', fontSize: '1rem', marginRight: "10px" }} /> Monday — Friday 8:00am - 5:00pm</span></li>
                        </ul>
                    </div>
                </div>
                <div className="row pt-5">
                    <div className="col-md-12 text-center">
                        <p>
                            Copyright © {year} All rights reserved
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
