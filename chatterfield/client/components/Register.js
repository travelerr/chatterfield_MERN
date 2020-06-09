import React from 'react';

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state={
            
        };

        this.handleChange = null;
    }

    handleChange(e){

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
            <input type="text" placeholder="Username" className="form__input" />
        </div>
        
        <div className="form__group">
            <input type="email" placeholder="Email" className="form__input" />
        </div>
        
        <div className="form__group">
            <input type="password" placeholder="Password" className="form__input" />
        </div>
        
        <button className="btn" type="button">Register</button>
    </form>
</div>
        )
    }

}

export default Register;

