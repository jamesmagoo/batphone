import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light mb-5" style={{background : '#e3f2fd'}}>
            <a className="navbar-brand mb-0 h1"><strong>SongApparition</strong></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <a className="nav-item nav-link active" >About <span className="sr-only">(current)</span></a>
                <a className="nav-item nav-link" >Login</a>
                <a className="nav-item nav-link" >Join</a>
                </div>
            </div>
        </nav>      
    )
}

export default Navbar;