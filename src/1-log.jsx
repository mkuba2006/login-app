// import React, { useState } from "react";
// import classes from './style.module.css';
// import Passed from './passed';

// function Login(props) {

//   const [nickLOG, setnick]= useState('');
//   const [passLOG, setpass]= useState('');
//   const [show, setshow]= useState(false);
//   const namechange = (e)=>{
//     setnick(e.target.value);
//   }
//   const change = (e)=>{
//     setpass(e.target.value);
//   }


//   const check =(e)=>{
//     e.preventDefault();
//     setshow(true)
//     setTimeout(() => {
//       props.onClick(nickLOG,passLOG);
//     }, 2000);
//   }  
  
//   return (
//     <div className={classes.cont}>
//       <h1>Welcome back!</h1>
//       <h2>Sign in to Account</h2>
//       <div className={classes.reg}>
//         <input className={classes.input} id="nick" type="text" placeholder="Nickname" onChange={namechange} />
//         <input className={classes.input} id="password" type="text" placeholder="password" onChange={change} />
//         <input className={classes.input23} type="submit" id='sss' onClick={check}/>
//       </div>
//       {show===true && <Passed/>}
//     </div>
//   );
// }

// export default Login;





import React, { useState, useRef } from 'react';
import classes from './style.module.css';
import Passed from './passed';
import myImage from './images/log4.png';

function Login(props) {
  const nickRef = useRef(null);
  const passRef = useRef(null);

  const [nickLOG, setNick] = useState('');
  const [passLOG, setPass] = useState('');
  const [show, setShow] = useState(false);
  const [warn, setWarn] = useState(false);

  const check = (e) => {
    e.preventDefault();
    const user = localStorage.getItem(nickRef.current.value);
    console.log(user);
    console.log(passRef.current.value);
    if (user == passRef.current.value) {
      setShow(true);
      setTimeout(() => {
        props.onClick(nickLOG, passLOG);
      }, 2000);
    } else {
      setWarn(true);
    }
  }

  return (
    <div className={classes.cont}>
      <div className={classes.img}>
        <img src={myImage} alt="My PNG Image" />
      </div>
      <main>
        <h2>Welcome back!</h2>
        <h3>Sign in to Account</h3>
        <div className={classes.reg}>
          <input type='text' placeholder='Nickname' id='nick' className={classes.input} ref={nickRef} />
          <input type='password' placeholder='password' id='password' className={classes.input} ref={passRef} />
          <input className={`${warn ? classes.warn2 : classes.input2}`} type="submit" id="submit" onClick={check} />
          {show && <Passed />}
        </div>
      </main>
    </div>
  );
}

export default Login;






