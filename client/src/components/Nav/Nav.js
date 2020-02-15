import React from 'react';
import "./style.css";


function Nav() {

    // getStyle = (event) => {
    //     if (event.target) {
    //         return ("active");
    //     }
    // }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand" href="#">Google Books</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/saved">Saved</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav;
