import React from 'react';

function Login(props){

    function change(){

        const passw = document.getElementById('password').value;
        const warn = document.getElementById('warn');
        if(passw === window.Cpassword){
            console.log('TAK');
            warn.style.display='none';
        }else{
            console.log('Nie');
            warn.style.display='block';
        }

    }

    return(
        <div id='cont'>
            <h1>Welcome back!</h1>
            <h2>Log in</h2>
            <div id='reg'>
                <input className="input"  id='nick' type='text' placeholder='Nickname'/>
                <input className="input" id='password' type='text' placeholder='password' onChange={change}/>
                <span id='warn' style={{display: 'none'}}>Wrong password!</span>
                <input className="input23" type='submit'/>
            </div>
        </div>
    )
}

export default Login;