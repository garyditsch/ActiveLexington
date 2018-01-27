import React from 'react'
import Link from 'gatsby-link'
import Slider from '../components/Slider'
import Testimonials from '../components/Testimonials'
import Services from '../components/Services'

const IndexPage = ({data}) => (
  <div>
    <Slider />
    <Testimonials />
    <Services />
  </div>
)

export default IndexPage
