import React from 'react';
import axios from 'axios';
var querystring = require('querystring');

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state={
            username: "",
            email: "",
            password: "",
            messageFromServer: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;

        console.log(this.state);
    }

    handleSubmit() {
        axios.post('/insert',
        querystring.stringify({
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
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
            <input type="text" placeholder="Username" className="form__input" onChange={this.handleChange} />
        </div>
        
        <div className="form__group">
            <input type="email" placeholder="Email" className="form__input" onChange={this.handleChange} />
        </div>
        
        <div className="form__group">
            <input type="password" placeholder="Password" className="form__input" onChange={this.handleChange} />
        </div>
        
        <button className="btn" type="button" onClick={this.handleSubmit}>Register</button>
    </form>
</div>
        )
    }

}

export default Register;

