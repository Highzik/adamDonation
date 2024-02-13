import React from 'react'
import '/src/styles/footer.css'


const Footer = () => {
  return (
             <footer class="footer">
                <div class="container">
                    <div class="row">
                    <div class="col-md-6 col-lg-6">
                        <div class="col-md-12">
                        <h3 class="heading-section">About Us</h3>
                        <p class="mb-5">Far far away, behind the word mountains, <br /> far from the countries Vokalia and <br />Consonantia, there live the blind texts. <br /> Separated they live in Bookmarksgrove right <br /> at the coast of the Semantics, a large <br /> language ocean.</p>
                        <p><a href="#" class="btn btn-primary px-4 py-3">Join Volunteer</a></p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6">
                        <div class="col-md-12">
                        <div class="block-23">
                            <h3 class="heading-section">Contact Info</h3>
                            <ul>
                            <li><span class="icon icon-map-marker"></span><span class="text">203 Fake St. Mountain View, San <br />Francisco, California, USA</span></li>
                            <li><a href="#"><span class="icon icon-phone"></span><span class="text">+2 392 3929 210</span></a></li>
                            <li><a href="#"><span class="icon icon-envelope"></span><span class="text">info@yourdomain.com</span></a></li>
                            <li><span class="icon icon-clock-o"></span><span class="text">Monday — Friday 8:00am - 5:00pm</span></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="row pt-5">
                    <div class="col-md-12 text-center">
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
