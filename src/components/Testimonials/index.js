import React from 'react'
import Link from 'gatsby-link'
import './testimonials.css'

const Testimonials = () => (
    <section className="testimonial main-block center-block" id="highlights">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2>Get the <span>Highlights</span></h2>
                    <h6>A few of the quoteable moments from the podcast.</h6>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-4">
                    <div className="testi-block">
                        <i className="fa fa-quote-left" aria-hidden="true"></i>
                        <p>John my bike has a seat in the fron and a seat in the back for my kids ... they borrowed a bike for me and I did the first triathlon at Spindletop in 1982, I was 42 years old.</p>
                    </div>
                    <div className="testi-title">
                        <h4>Susan Bradly-Cox</h4>
                        <p>Triathlete | Episode 1</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="testi-block">
                        <i className="fa fa-quote-left" aria-hidden="true"></i>
                        <p>It was the utmost beautiful thing of all time... I remember very vividly standing in the K Lot at Commonwealth Stadium and the first word that came to mind was freedom ...</p>
                    </div>
                    <div className="testi-title">
                        <h4>Josh Nadzam</h4>
                        <p>Runner | Episode 2</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="testi-block">
                        <i className="fa fa-quote-left" aria-hidden="true"></i>
                        <p>It has been a six year process to get to that point where I can consistently and chronically put in high training loads. But with that comes a tremendous amount of fatigue everyday. ... But it is also something that, most days, I love doing. ... Iam able to do what I love.</p>
                    </div>
                    <div className="testi-title">
                    <h4>Kevin Ryan</h4>
                        <p>Triathlete | Episode 7</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Testimonials
