import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Slider from '../components/Slider'
import OurClients from '../components/OurClients'
import HowItWorks from '../components/HowItWorks'
import Testimonials from '../components/Testimonials'
import './bootstrap.min.css'
import './pe-icon-7-stroke.css'
import './font-awesome.min.css'
import './style.css'

const TemplateWrapper = (props) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header metaData={props.data.site} />
    <Slider />
    <OurClients />
    <HowItWorks />
    <Testimonials />
  </div>

)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export const indexQuery = graphql`
    query IndexQuery {
        site {
            siteMetadata {
              title
            }
        }
    }
`

export default TemplateWrapper
