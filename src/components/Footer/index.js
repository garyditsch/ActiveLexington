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
                            <li><a href="/#Episode12">12 : ?</a></li>
                            <li><a href="/#Episode11">11 : Troy Hearn</a></li>
                            <li><a href="/#Episode10">10 : Alex Meade</a></li>
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
                            <li><a href="/#Episode6">6 : Lessons Learned</a></li>
                            <li><a href="/#Episode5">5 : Pam & Randy Thomas</a></li>
                            <li><a href="/#Episode4">4 : Laura Coombs</a></li>
                            <li><a href="/#Episode3">3 : Heather Warman</a></li>
                            <li><a href="/#Episode2">2 : Josh Nadzam</a></li>
                            <li><a href="/#Episode1">1 : Susan Bradley-Cox</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="foot-box">
                        <h6>OUR PROGRAMS</h6>
                        <ul>
                            <li>Coming Soon</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="subscribe">
                        <h6>CONNECT</h6>
                        <div className="social-icons">
                            <a href="https://www.facebook.com/ActiveLexington/"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                        </div>
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
