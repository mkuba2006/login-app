











import React, { useState, useEffect, useRef } from 'react';
import classes from './style.module.css';
import myImage from './images/log4.png';
import Passed from './passed';

function Register(props) {
  const nickRef = useRef(null);
  const passRef = useRef(null);
  const pass2Ref = useRef(null);
  const warnRef = useRef(false);
  const [show, setshow]= useState(false);

  useEffect(() => {
    if (nickRef.current && passRef.current && pass2Ref.current) {
      warnRef.current =
      nickRef.current.value !== '' &&
      passRef.current.value === pass2Ref.current.value &&
      passRef.current.value !== '';
    }
  }, [pass2Ref]);
  
  const submit = (e) => {
    const nick = nickRef.current.value;
    const pass = passRef.current.value;
    const pass2 = pass2Ref.current.value;
    if(pass == pass2){
      e.preventDefault();
      setshow(true);
      props.onSub(nick, pass, pass2);
    }
  }


  return (
    <div className={classes.cont}>
      <div className={classes.img}>
        <img src={myImage} alt="My PNG Image" />
      </div>
      <main>
        <h2>Welcome!</h2>
        <h3>Create your account</h3>
        <div className={classes.reg}>
          <input type='text' placeholder='Nickname' id='nick' className={classes.input} ref={nickRef} />
          <input type='password' placeholder='password' id='password' className={classes.input} ref={passRef} />
          <input type='password' placeholder='confirm password' id='confirm_password' className={classes.input} ref={pass2Ref} />
          <input className={`${warnRef.current === true ? classes.warn2 : classes.input2}`} type="submit" id="submit" onClick={submit} />
          {show === true && <Passed />}
        </div>
      </main>
    </div>
  )
}

export default Register;
