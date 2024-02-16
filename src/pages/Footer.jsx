import '/src/styles/footer.css'
import { FaBriefcaseMedical, FaUsers, FaDollarSign } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="footer container-fluid">
            <div className="main-container">
                <div className="row">
                    <div className="col-md-6 col-lg-6">
                        <div className="col-md-12">
                            <h3 className="heading-section">About Us</h3>
                            <p className="mb-5">Far far away, behind the word mountains, <br /> far from the countries Vokalia and <br />Consonantia, there live the blind texts. <br /> Separated they live in Bookmarksgrove right <br /> at the coast of the Semantics, a large <br /> language ocean.</p>
                            <p><a href="#" class="btn btn-primary px-4 py-3">Join Volunteer</a></p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <div className="col-md-12">
                            <div className="block-23">
                                <h3 className="heading-section">Contact Info</h3>
                                <ul>
                                    <li><span className="icon icon-map-marker"></span><span className="text">203 Fake St. Mountain View, San <br />Francisco, California, USA</span></li>
                                    <li><a href="#"><span class="icon icon-phone"></span><span className="text"> <FaBriefcaseMedical style={{ color: '#79ccab', fontSize: '2rem' }} />+2 392 3929 210</span></a></li>
                                    <li><a href="#"><span class="icon icon-envelope"></span><span className="text"> <FaBriefcaseMedical style={{ color: '#79ccab', fontSize: '18px', marginRight:  "10px"}} />   info@yourdomain.com</span></a></li>

                                    <li><a href="#"><span class="icon icon-envelope"></span><span className="text"> <FaBriefcaseMedical style={{ color: '#79ccab', fontSize: '18px', marginRight:  "10px"}} />   info@yourdomain.com</span></a></li>
                            


                                    <li><span class="icon icon-clock-o"></span><span class="text">Monday — Friday 8:00am - 5:00pm</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pt-5">
                    <div className="col-md-12 text-center">
                        <p>
                            Copyright ©<script>document.write(new Date().getFullYear());</script>2024 All rights reserved
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
