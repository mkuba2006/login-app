import React, { useState } from "react";
import classes from './style.module.css';
import Passed from './passed';

function Login(props) {

  const [nickLOG, setnick]= useState('');
  const [passLOG, setpass]= useState('');
  const [show, setshow]= useState(false);
  const namechange = (e)=>{
    setnick(e.target.value);
  }
  const change = (e)=>{
    setpass(e.target.value);
  }


  const check =(e)=>{
    e.preventDefault();
    setshow(true)
    setTimeout(() => {
      props.onClick(nickLOG,passLOG);
    }, 2000);
  }  
  
  return (
    <div className={classes.cont}>
      <h1>Welcome back!</h1>
      <h2>Log in</h2>
      <div className={classes.reg}>
        <input className={classes.input} id="nick" type="text" placeholder="Nickname" onChange={namechange} />
        <input className={classes.input} id="password" type="text" placeholder="password" onChange={change} />
        <input className={classes.input23} type="submit" id='sss' onClick={check}/>
      </div>
      {show===true && <Passed/>}
    </div>
  );
}

export default Login;




