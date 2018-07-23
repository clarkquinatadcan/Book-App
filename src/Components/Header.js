import React, { Component } from 'react';

class Header extends React.Component {

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#" >BookApp</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Clark Quinatadcan <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Wishlist</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Logout</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;