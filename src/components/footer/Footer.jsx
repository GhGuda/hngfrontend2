import React from 'react'
import '../footer/Footer.css'

// IMAGES 

import location from '../../assets/img/location.png'
import email from '../../assets/img/email.png'
import Telephone from '../../assets/img/bi_telephone.png'

const Footer = () => {
  return (
    <div>
        <footer className="footer">
            <div className="logo_side">
                <h1>Timbu Cloud Shop</h1>
                <p>Our carefully curated collection features the finest furniture to help upgrade your space.</p>
                <div className="intouch">
                    <div className="loc">
                        <img src={location} alt="" />
                        <p>Accra Ghana</p>
                    </div>
                    <div className="loc">
                        <img src={Telephone} alt="" />
                        <p>+233 0594074717</p>
                    </div>

                    <div className="loc">
                        <img src={email} alt="" />
                        <p>timbucloud@gmail.com</p>
                    </div>
                </div>
            </div>

            <div className="cont">
                <div className="company">
                    <h2>Company</h2>
                    <ul>
                        <li>About Us</li>
                        <li>Reviews</li>
                        <li>New Collections</li>
                        <li>Upcoming Events</li>
                        <li>Partnerships</li>
                        <li>Careers</li>
                        <li>Latest News</li>
                    </ul>
                </div>

                <div className="company">
                    <h2>Quick Links</h2>
                    <ul>
                        <li>Returns</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Gallery</li>
                        <li>Pricing</li>
                        <li>Security</li>
                    </ul>
                </div>

                <div className="company">
                    <h2>Support</h2>
                    <ul>
                        <li>Reviews</li>
                        <li>FAQs</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer