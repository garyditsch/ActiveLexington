import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import './ourClients.css'

const OurClients = (props) => {
    console.log(props)
    return (
    <section className="our-client">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <span>AS SEEN ON</span>
                </div>
                <div class="col-md-12">
                    <ul>
                        <li>
                            <a href="#"><img src="images/client1.png" class="img-fluid" alt="client logo" /></a>
                        </li>
                        <li>
                            <a href="#"><Img sizes={props.image.sizes} /></a>
                        </li>
                        <li>
                            <a href="#"><img src="images/client3.png" class="img-fluid" alt="client logo" /></a>
                        </li>
                        <li>
                            <a href="#"><img src="images/client4.png" class="img-fluid" alt="client logo" /></a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <Img style={{position: "relative"}} sizes={props.image.sizes} />
                </div>
                <div className="col-md-3">
                    <Img sizes={props.image.sizes} />
                </div>
                <div className="col-md-3">
                    <Img sizes={props.image.sizes} />
                </div>
                <div className="col-md-3">
                    <Img sizes={props.image.sizes} />
                </div>
            </div>
        </div>
    </section>

)
}

export default OurClients
