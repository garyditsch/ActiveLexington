import React from 'react'
import Link from 'gatsby-link'
import './howItWorks.css'

const HowItWorks = () => (
    <section className="howit-work main-block center-block" id="howitworks">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2>How it <span>works</span></h2>
                    <h6>We’ve made all the hardwork for making it simple for you. Here’s how it works</h6>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="howit-wrap">
                        <span className="pe-7s-date"></span>
                        <h4>Book a Cleaning</h4>
                        <p>Click the book now button to make a booking on your preffered date and time</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="howit-wrap">
                        <span className="pe-7s-lock"></span>
                        <h4>Confirm Booking</h4>
                        <p>We will confirm your booking along with your instructions via secure transaction.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="howit-wrap">
                        <span className="pe-7s-home"></span>
                        <h4>We’ll Clean it</h4>
                        <p>Our trusted & experienced maid will come to your door-step on the time for a cleaning</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default HowItWorks
