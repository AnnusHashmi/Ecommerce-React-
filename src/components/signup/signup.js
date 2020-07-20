import React, { Component } from 'react';
import './sign-up.styles.scss';
import Form from '../form/form';
import CustomButton from '../cutomButton/button';

import {auth, createUserProfile} from '../../firebase/firebase.utils';

class SignUp extends Component{

    constructor(){
        super();
        
        this.state = {
            displayName : '',
            email : '',
            password : '',
            confirmPassword: ''
        }
    }
    handleSubmit = async (event) => {
        event.preventDefault();

        const {displayName , email, password, confirmPassword} = this.state;
        if(password != confirmPassword)
        {
            alert('Passwords dont match');
            return;
        }
        
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email , password);
            createUserProfile(user, {displayName});

            this.setState({
                displayName : '',
                email : '',
                password : '',
                confirmPassword: ''
            })
        } catch (error) {
            console.log("error: ", error);
        }
    }

    handleChange = (event) => {
         const {name, value} = event.target;
         this.setState({[name] : value});
    }

    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>I donot have an account</h2>
                <span>Signup using you email</span>

                <form className='sign-up-form' onSubmit={this.handleSubmit} >
                    <Form type='text' name='displayName' value={displayName} onChange={this.handleChange} label='displayName' requried></Form>

                    <Form type='email' name='email' value={email} onChange={this.handleChange} label='Email' requried></Form>

                    <Form type='password' name='password' value={password} onChange={this.handleChange} label='Password' requried></Form>

                    <Form type='password' name='confirmPassword' value={confirmPassword} onChange={this.handleChange} label='Confrim Password' requried></Form>

                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }


}

export default SignUp;