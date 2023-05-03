import React , { useState } from 'react';
import ReactDOM from 'react-dom';

function Register(props){
    return(
        <div id='cont'>
            <h1>Register</h1>
            <div id='reg'>
                <input name="text" class="input"  id='nick' type='text' placeholder='Nickname'/>
                <input class="input" id='password' type='text' placeholder='password'/>
                <input class="input" id='confirm_password' type='text' placeholder='confirm password'/>
                <input type='submit' onClick={props.onSub}/>
            </div>
        </div>
    )
}

export default Register;