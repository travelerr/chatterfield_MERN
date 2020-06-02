import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Login from './Login';
import Network from './Network';
import Messages from './Messages';

class App extends React.Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
                    <div class="container">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link to="/network">Network</Link>
                        </li>
                        <div></div>
                        <li className="nav-item">
                            <Link to="/messages">Messages</Link>
                        </li>
                    </ul>
                    </div>
                </nav>
                <div>
                    <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/network" exact component={Network} />
                    <Route path="/messages" exact component={Messages} />
                    </Switch>
                </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;