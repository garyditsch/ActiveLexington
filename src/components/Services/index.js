import React from 'react'
import Link from 'gatsby-link'
import './services.css'

const Services = () => (
<div id="startServices">
    <section className="service-title" id="services">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2>Check out some of our <span>services!</span></h2>
      </div>
    </div>
  </div>
</section>
{/* Object img Sec 01 */}
<section className="service">
  <div className="img-objectfit">
    <div className="grid">
      <figure className="effect-lily">
        <img src="service-img1.jpg" className="img-fluid" alt="#" />
      </figure>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-md-6"></div>
      <div className="col-md-6">
        <div className="service-link">
         <h3>Make Better <span>Living room</span></h3>
                        <ul>
                            <li><i className="fa fa-check" aria-hidden="true"></i><a href="#">Cleaning and highrise dusting</a></li>
                            <li><i className="fa fa-check" aria-hidden="true"></i><a href="#">Furniture Dusting/Vacuuming</a></li>
                            <li><i className="fa fa-check" aria-hidden="true"></i><a href="#">Fixtures cleaning - A/C,Fan etc</a></li>
                            <li><i className="fa fa-check" aria-hidden="true"></i><a href="#">Wall marks cleaning (Washable paint)</a></li>
                            <li><i className="fa fa-check" aria-hidden="true"></i><a href="#">Floor scrubbing / Dry and Wet mop</a></li>
                            <li><i className="fa fa-check" aria-hidden="true"></i><a href="#">Carpet vacuuming</a></li>
                        </ul>
                </div>
            </div>
        </div>
        </div>
    </section>
    {/* Object img Sec 02 */}
    <section className="service">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="service-link service-link1">
                        <h3>Your Beautiful <span>Kitchen</span></h3>
                        <ul>
                            <li><i className="fa fa-check" aria-hidden="true"></i><a href="#">Wash and scrub sink</a></li>
                            <li><i className="fa fa-check" aria-hidden="true"></i><a href="#">Wash cabinet faces and appliances</a></li>
                            <li><i className="fa fa-check" aria-hidden="true"></i><a href="#">Dust and wipe all reachable surfaces</a></li>
                            <li><i className="fa fa-check" aria-hidden="true"></i><a href="#">Wipe mirrors and glass fixtures</a></li>
                            <li><i className="fa fa-check" aria-hidden="true"></i><a href="#">Vacuum and mop all floors</a></li>
                            <li><i className="fa fa-check" aria-hidden="true"></i><a href="#">Take out trash and recyclables</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6"></div>
            </div>
        </div>
        <div className="img-objectfit_1">
            <div className="grid">
                <figure className="effect-lily">
                    <img src="images/service-img2.jpg" className="img-fluid" alt="#" />
                </figure>
            </div>
        </div>
    </section>
    {/* Object img Sec 03 */}
    <section className="service">
        <div className="img-objectfit">
            <div className="grid">
                <figure className="effect-lily">
                    <img src="images/service-img3.jpg" className="img-fluid" alt="#" />
                </figure>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-6"></div>
                <div className="col-md-6">
                    <div className="service-link">
                        <h3>Tidy <span>Bathroom</span></h3>
                        <ul>
                            <li><i className="fa fa-check" aria-hidden="true"></i><a href="#">Wash and sanitize toilet, shower and sink</a></li>
                            <li><i className="fa fa-check" aria-hidden="true"></i><a href="#">Dust and wipe all reachable surfaces</a></li>
                            <li><i className="fa fa-check" aria-hidden="true"></i><a href="#">Wipe door handles and light switches</a></li>
                            <li><i className="fa fa-check" aria-hidden="true"></i><a href="#">Wipe mirrors and glass fixtures</a></li>
                            <li><i className="fa fa-check" aria-hidden="true"></i><a href="#">Vacuum and mop all floors</a></li>
                            <li><i className="fa fa-check" aria-hidden="true"></i><a href="#">Take out trash and recyclables</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* Object img Sec 04 */}
    <section className="service">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="service-link service-link1">
                        <h3>The Perfect <span>Bedroom</span></h3>
                        <ul>
                            <li><i className="fa fa-check" aria-hidden="true"></i><a href="#">Make beds and change linens</a></li>
                            <li><i className="fa fa-check" aria-hidden="true"></i><a href="#">Dust and wipe all reachable surfaces</a></li>
                            <li><i className="fa fa-check" aria-hidden="true"></i><a href="#">Wipe door handles and light switches</a></li>
                            <li><i className="fa fa-check" aria-hidden="true"></i><a href="#">Wipe mirrors and glass fixtures</a></li>
                            <li><i className="fa fa-check" aria-hidden="true"></i><a href="#">Vacuum and mop all floors</a></li>
                            <li><i className="fa fa-check" aria-hidden="true"></i><a href="#">Take out trash and recyclables</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6"></div>
            </div>
        </div>
        <div className="img-objectfit_1">
            <div className="grid">
                <figure className="effect-lily">
                    <img src="images/service-img4.jpg" className="img-fluid" alt="#" />
                </figure>
            </div>
        </div>
    </section>
</div>
)

export default Services
