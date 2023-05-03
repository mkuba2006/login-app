import React from 'react';
import ReactDOM from 'react-dom';

function Login(props){
    return(
        <div id='cont'>
            <h1>Welcome back!</h1>
            <div id='reg'>
                <input name="text" class="input"  id='nick' type='text' placeholder='Nickname'/>
                <input class="input" id='password' type='text' placeholder='password'/>
                <input class="input" type='submit'/>
            </div>
        </div>
    )
}

export default Login;