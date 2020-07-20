import React, { Component } from 'react';
import Form from '../form/form';
import './signIn.scss';
import CustomButton from '../cutomButton/button';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends Component{

    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : ''
        }
    }
    
    handleSubmit = async (e) => {
        e.preventDefault();
        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password); 
            this.setState({email : '' , password : ''});
        } catch (error) {
            console.log("error", error);
        }

        
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
                    
                    <div className='buttons'>

                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>  Sign In With Google</CustomButton>
              
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn;