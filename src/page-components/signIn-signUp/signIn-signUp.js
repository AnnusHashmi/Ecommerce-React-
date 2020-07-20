import React from 'react';
import SignIn from '../../components/singIn/signIn';
import SignUp from '../../components/signup/signup';
import './sign-in-and-sign-up.styles.scss';

const SignInSignUp = () => {
    return(
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />

        </div>
    )
}

export default SignInSignUp;