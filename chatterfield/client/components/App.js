import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login';
import Network from './Network';
import Inbox from './Inbox';
import Navbar from './Navbar';
import Register from './Register';

class App extends React.Component{
    render(){
        return(
            <Router>
                <div className="app">
                    <Navbar />
                    <Route path="/" exact component={Register} />
                    <Route path="/register" exact component={Register} />
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

//run webpack && nodemon --exec babel-node -- bin/www
//change to index.ejs