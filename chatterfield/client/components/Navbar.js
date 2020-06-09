import React from 'react';
import {Link} from 'react-router-dom';

class Navbar extends React.Component {
    render(){
        return(
            <nav className="nav">
                <h3 className="logo">Chatterfield</h3>
                <ul className="nav-links">
                    <Link to="/network">
                        <li>Network</li>
                    </Link>
                    <Link to="/inbox">
                        <li>Inbox</li>
                    </Link>
                    <Link to="/login">
                        <li className>Login</li>
                    </Link>
                    <Link to="/">
                        <li>Register</li>
                    </Link>
                </ul>
            </nav>
        )
    }
}

export default Navbar;
