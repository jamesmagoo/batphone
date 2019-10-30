import React from 'react';
import Logo from '../../Icons/apparition_nav_logo.svg'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light mb-5" style={{background : '#e3f2fd'}}>
            <svg src={Logo} width="60" height="60" class="d-inline-block align-top" alt="Logo"></svg>
            <a className="navbar-brand ml-1 mb-0 h1"><strong>Apparition</strong></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <a className="nav-item nav-link active" >About <span className="sr-only">(current)</span></a>
                <a className="nav-item nav-link" >Login</a>
                <a className="nav-item nav-link" >Sign Up</a>
                </div>
            </div>
        </nav>      
    )
}

export default Navbar;