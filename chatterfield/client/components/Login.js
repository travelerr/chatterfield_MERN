import React from 'react';
import axios from 'axios';
var querystring = require('querystring');

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: "",
            name: "",
            email: "",
            description: "",
            messageFromServer: ""
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    /* Copy typed login form data to this.state - state remains single source of truth */

    handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;

        console.log(this.state);
    }
    

    /* Submit button sends login form data, via this.state to Local Storage */

    handleSubmit() {
        axios.post('/insert',
        querystring.stringify({
            id: this.state.id,
            name: this.state.name,
            email: this.state.email,
            description: this.state.description
        }), {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).then((response) => {
            this.setState({
                messageFromServer: response.data
            });
            console.log(this.state.messageFromServer)
        });
        
        //localStorage.setItem("currentStoredUser", JSON.stringify(this.state));
        //this.props.history.push("/network");

    }

    render(){
        return(
            <div className="user">
            <header className="user__header">
                <h3 className="logo">Chatterfield</h3>
                <h1 className="user__title">A lightweight and simple chat application</h1>
            </header>
            <form className="form">
                <div className="form__group">
                    <input type="text" placeholder="Username" className="form__input" onChange={this.handleChange}/>
                </div>
                <div className="form__group">
                    <input type="password" placeholder="Password" className="form__input" onChange={this.handleChange}/>
                </div>
                <button className="btn" type="button" onClick={this.handleSubmit}>Login</button>
            </form>
            </div>
        )
    }
}
export default Login;