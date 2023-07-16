import React, { useState, useEffect, useReducer } from 'react';
import classes from './style.module.css';

function Register(props){

  const [nick, setnick]= useState('');
  const [pass, setpass]= useState('');
  const [pass2, setpass2]= useState('');
  const [warn, setwarn]= useState(false);

  const nickchange = (e)=>{
    setnick(e.target.value);
  }
  const passchange = (e)=>{
    setpass(e.target.value);
  }
  const passchange2 = (e)=>{
    setpass2(e.target.value);
  }
  useEffect(() => {
    setwarn(nick !== '' && pass === pass2 && pass !== '');
    console.log(warn);
  }, [pass2]);
  
  const submit =(e)=>{
    e.preventDefault();
    props.onSub(nick,pass,pass2);
  }

  return(
    <div className={classes.cont}>
      <h1 className={classes.h1}>Welcome</h1>
      <h2>Create your account</h2>
      <div className={classes.reg}>
        <input type='text' placeholder='Nickname' id='nick' className={classes.input} onChange={nickchange}/>
        <input type='password' placeholder='password' id='password' className={classes.input} onChange={passchange}/>
        <input type='password' placeholder='confirm password' id='confirm_password' className={classes.input} onBlur={passchange2}  />
        <span id='warn' style={{display: 'none'}}>The passwords are not identical!</span>
        <input className={`${warn === true ? classes.warn2 : classes.input2}`} type="submit" id="submit" onClick={submit}/>
      </div>
    </div>
  )
}

export default Register;
