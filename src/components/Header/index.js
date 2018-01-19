import React from 'react'
import Link from 'gatsby-link'

const Header = (props) => (
    <header>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a className="navbar-brand" href="#">Active Lexington</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                            <ul className="navbar-nav">

                                <li className="nav-item">
                                    <a className="nav-link" href="#howitworks">How it works</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#services">Our Services </a>
                                </li>
                                <li><a href="booking.html" className="btn btn-info">Book a Cleaning</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
)

export default Header
