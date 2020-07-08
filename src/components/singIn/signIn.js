import React, { Component } from 'react';
import Form from '../form/form';
import './signIn.scss'

class SignIn extends Component{

    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : ''
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({email : '' , password : ''});
    }

    handleChange = (e) => {
        const {value, name} = e.target;

        this.setState({[name] : value});
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with you email and password</span>

                <form onSubmit={this.handleSubmit} >
                    <Form name='email' value={this.state.email} required type='email' label='email' handleChange={this.handleChange} />

                    <Form name='password' value={this.state.password} required type='password' label='password' handleChange={this.handleChange}/>
                        
                    <input name='submit' value='submit Form' required type='submit'/>
              
                </form>
            </div>
        )
    }
}

export default SignIn;