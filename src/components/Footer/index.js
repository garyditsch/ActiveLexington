import React from 'react'
import Link from 'gatsby-link'

const Footer = (props) => {

    const today = new Date();

    return (
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="foot-box">
                        <h6>EPISODES</h6>
                        <ul>
                            <li><a href="/#Episode9">9 : Tim Jenkins</a></li>
                            <li><a href="/#Episode8">8 : Scott Black</a></li>
                            <li><a href="/#Episode7">7 : Kevin Ryan</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="foot-box">
                        <h6>EPISODES</h6>
                        <ul>
                            <li><a href="/#Episode9">9 : Tim Jenkins</a></li>
                            <li><a href="/#Episode8">8 : Scott Black</a></li>
                            <li><a href="/#Episode7">7 : Kevin Ryan</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="foot-box">
                        <h6>OUR LOCATIONS</h6>
                        <ul>

                        </ul>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="foot-box">
                        <h6>OUR LOCATIONS</h6>
                        <ul>

                        </ul>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="copyright">
                        <a href="#">&copy; {today.getFullYear()} {props.metaData.title}. All rights reserved</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer
