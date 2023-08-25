import React, { useState, useEffect, useReducer } from 'react';
import classes from './style.module.css';
import myImage from './images/register.png';
import Passed from './passed';
function Register(props){

  const [nick, setnick]= useState('');
  const [pass, setpass]= useState('');
  const [pass2, setpass2]= useState('');
  const [show, setshow]= useState(false);
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
  
  const submit = (e) => {
    e.preventDefault();
    setshow(true)
    setTimeout(() => {
      props.onSub(nick, pass, pass2);
    }, 2000);
  }
  
  const cant =(e)=>{
    e.preventDefault();
  }

  return(
    <div className={classes.cont}>
      <img src={myImage} alt="My PNG Image" />
      <h2>Create your account</h2>
      <div className={classes.reg}>
        <input type='text' placeholder='Nickname' id='nick' className={classes.input} onChange={nickchange}/>
        <input type='password' placeholder='password' id='password' className={classes.input} onChange={passchange}/>
        <input type='password' placeholder='confirm password' id='confirm_password' className={classes.input} onBlur={passchange2}  />
        <input className={`${warn === true ? classes.warn2 : classes.input2}`} type="submit" id="submit" onClick={warn === true ? submit : cant}/>
      </div>
      {show===true && <Passed/>}
    </div>
  )
}

export default Register;
