import React from "react";
import logo from '../images/tasq_logo_6.png';

class Footer extends React.Component {
    render() {
        return (

            <footer className="footer">

                <nav className="navbar navbar-default">
                    <div className="navbar-header">
                        <div className="brand">
                            <a href="...">
                                <img className="img-responsive" src={logo} width="95" height="35" alt="" />
                            </a>
                            <h4 className=" navbar-text">© 2019</h4>
                        </div>
                    </div>
                </nav>

            </footer>
        );
    }
}

export default Footer;