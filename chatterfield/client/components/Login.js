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

        this.setState({ 
            id: "100",
            [key]: value 
        });

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
            <div className="outer-container-join">
                <h1 className="h1">Welcome to Chatterfield</h1>
                <form className="justify-content-center">
                    <div className="form-group">
                        <input className="form-control" placeholder="Name" type="text" size="50" name="name" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <input className="form-control" placeholder="Email" type="email" name="email" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" placeholder="Short Bio" rows="3" name="description" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" type="button" onClick={this.handleSubmit}>Submit Info</button>    
                    </div>
                </form>
            </div>
        )
    }
}
export default Login;