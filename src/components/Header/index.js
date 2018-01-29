import React from 'react'
import Link from 'gatsby-link'
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const Header = (props) => (
    <header>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <Link to="/#" className="navbar-brand">
                            {props.metaData.title}
                        </Link>
                        <button className="navbar-toggler" type="button">
                            <IconMenu
                              iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                              anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                              targetOrigin={{horizontal: 'left', vertical: 'top'}}
                            >
                              <MenuItem
                                  primaryText="Highlights"
                                  containerElement={<Link to="/#highlights" />}
                              />
                              <MenuItem
                                  primaryText="Listen to Podcast"
                                  containerElement={<Link to="/#episodes" />}
                              />

                            </IconMenu>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                            <ul className="navbar-nav">

                                <li className="nav-item">
                                    <Link to="/#highlights"  className="nav-link">Highlights</Link>
                                </li>
                                <li><Link to="/#episodes" className="btn btn-info">Listen to Podcast</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
)

export default Header
