import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import './ourClients.css'
import placeholder200x50 from '../../images/placeholder200x50.png'

const OurClients = () => {
    return (
    <section className="our-client">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <span>AS SEEN ON</span>
                </div>
                <div className="col-md-12">
                    <ul>
                        <li>
                            <a href="#"><img src={placeholder200x50} /></a>
                        </li>
                        <li>
                            <a href="#"><img src={placeholder200x50} /></a>
                        </li>
                        <li>
                            <a href="#"><img src={placeholder200x50} /></a>
                        </li>
                        <li>
                            <a href="#"><img src={placeholder200x50} /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

)
}

export default OurClients
