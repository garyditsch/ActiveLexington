import React from 'react'
import Link from 'gatsby-link'
import './ourClients.css'

const OurClients = () => (
    <section className="our-client">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <span>AS SEEN ON</span>
                </div>
                <div className="col-md-12">
                    <ul>
                        <li>
                            <a href="#"><img src="./client1.png" className="img-fluid" alt="client logo" /></a>
                        </li>
                        <li>
                            <a href="#"><img src="images/client2.png" className="img-fluid" alt="client logo" /></a>
                        </li>
                        <li>
                            <a href="#"><img src="images/client3.png" className="img-fluid" alt="client logo" /></a>
                        </li>
                        <li>
                            <a href="#"><img src="images/client4.png" className="img-fluid" alt="client logo" /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

)

export default OurClients
