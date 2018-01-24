import React from 'react'
import Link from 'gatsby-link'
import './testimonials.css'

const Testimonials = () => (
    <section className="testimonial main-block center-block">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2>Don’t take our <span>word</span></h2>
                    <h6>Read what our past customers said about our cleaning and services.</h6>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-4">
                    <div className="testi-block">
                        <i className="fa fa-quote-left" aria-hidden="true"></i>
                        <p>Maid Services NYC is a wonderful service. I utilized their services to clean a one bedroom apartment I was staying in NYC after throwing a get together. They were prompt, left the place spotless, and very professional. </p>
                    </div>
                    <div className="testi-title">
                        <h4>Sandra</h4>
                        <p>Marketing Staff, New York</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="testi-block">
                        <i className="fa fa-quote-left" aria-hidden="true"></i>
                        <p>I had them out to help me clean my new place for an office dinner I was having. I was very happy with the results. Jennifer came to the location on time. It is such a treat to have the home professionally cleaned. </p>
                    </div>
                    <div className="testi-title">
                        <h4>Jessica</h4>
                        <p>Photographer, New York</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="testi-block">
                        <i className="fa fa-quote-left" aria-hidden="true"></i>
                        <p>They did such a good job. Whether you want to give a unique gift or have your own home cleaned, Maid for you provides a large range of top-notch services that I highly recommend to anyone. </p>
                    </div>
                    <div className="testi-title">
                        <h4>Samantha</h4>
                        <p>Physical Therapist, Manhattan</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Testimonials
