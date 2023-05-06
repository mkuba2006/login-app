import React from 'react';

function Register(props){

  function change() {
    const name = document.getElementById('nick').value;
    window.name = name;
    const password = document.getElementById('password').value;
    const Cpassword = document.getElementById('confirm_password').value;
    window.Cpassword = Cpassword;
    const submit = document.getElementById('submit');
    const warn = document.getElementById('warn');
    if (name !== '' && password !== '' && Cpassword !== '') {
      if(password=== Cpassword){
        submit.style.display = 'block';
        warn.style.display='none';
      }else{
        warn.style.display='block';
      }
    } 
    else {
      submit.style.display = 'none';
      warn.style.display='none';
    }
  }

  return(
    <div id='cont'>
      <h1>Welcome</h1>
      <h2>Create your account</h2>
      <div id='reg'>
        <input type='text' placeholder='Nickname' id='nick' className="input" name="text" onChange={change}/>
        <input type='password' placeholder='password' id='password' className="input" onChange={change}/>
        <input type='password' placeholder='confirm password' id='confirm_password' className="input" onChange={change}  />
        <span id='warn' style={{display: 'none'}}>The passwords are not identical!</span>
        <input className="input2" type='submit' id='submit' onClick={props.onSub}  />
      </div>
    </div>
  )
}

export default Register;
