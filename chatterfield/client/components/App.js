import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import Network from './components/Network';
import Inbox from './components/Inbox';
import Navbar from './components/Navbar';
import Register from './components/Register';

class App extends React.Component{
    render(){
        return(
            <Router>
                <div className="app">
                    <Navbar />
                    <Route path="/" exact component={Register} />
                    <Route path="/login" exact component={Login} /> 
                    <Route path="/network" exact component={Network} />
                    <Route path="/inbox" exact component={Inbox} />
                </div>
            </Router>
        )
    }
}

export default App;

//run webpack && nodemon --exec babel-node -- bin/www
//change to index.ejs