import React from 'react';
import logo from '../images/tasq_logo_6.png';

class Header extends React.Component {
    render() {
        return (

            <header className="header">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">
                        <img src={logo} width="190" height="70" alt="" />
                    </a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                        aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">LINK</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">DELETED TASQS</a>
                            </li>
                        </ul>

                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search"></input>
                            <button className="btn btn-outline-tasq my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>


                </nav>
            </header>
        );
    }
}




export default Header;

