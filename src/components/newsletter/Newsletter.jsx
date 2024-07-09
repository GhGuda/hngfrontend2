import React from 'react'
import '../newsletter/Newsletter.css'
import person from '../../assets/img/person_inchair.png'

const Newsletter = () => {
  return (
    <div>
        <div className="news_letter">
            <div className="news_left">
                <h1>Subscribe to our newsletter</h1>
                <p>Join our family by subscribing to our newsletter for daily updates.</p>

                <form className='newsletterform' action="">
                    <input type="email" placeholder='nola17@gmail.com'/>
                    <button>Subscribe</button>
                </form>
            </div>
            <img src={person} alt="userinchair" />
        </div>
    </div>
  )
}

export default Newsletter