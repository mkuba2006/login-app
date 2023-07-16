import React, { useState } from "react";
import classes from './style.module.css';
function Login(props) {

  const [nickLOG, setnick]= useState('');
  const [passLOG, setpass]= useState('');

  const namechange = (e)=>{
    setnick(e.target.value);
  }
  const change = (e)=>{
    setpass(e.target.value);
  }

  const check =(e)=>{
    e.preventDefault();
    props.onClick(nickLOG,passLOG);
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
    </div>
  );
}

export default Login;











// const [item, newitem]= useState('');


//     function namechange() {
//         const sss = document.getElementById('sss');
//         const nick = document.getElementById('nick').value;
//         const passw = document.getElementById('password').value;
//         if(nick !== ''){
//             if(passw !== ''){
//                 sss.style.display='block';
//             }else{
//                 sss.style.display='none';
//             }
//         }else{
//             sss.style.display='none';
//         }
//       }

//     function change() {
//         const sss = document.getElementById('sss');
//         const passw = document.getElementById('password').value;
//         const nick = document.getElementById('nick').value;
//         if(passw !== ''){
//             if(nick !== ''){
//                 sss.style.display='block';
//             }else{
//                 sss.style.display='none';
//             }
//         }else{
//             sss.style.display='none';
//         }
//     }

//     function check() {
//       const sss = document.getElementById('sss');
//       const passw = document.getElementById('password').value;
//       const nick = document.getElementById('nick').value;
//       if(passw === window.Cpassword && nick === window.name){
//         sss.style.backgroundColor='green';
//         newitem('')
//       }else{
//         sss.style.backgroundColor='red';
//         newitem('Something went wrong!')
//       }
//     }

































// import React from 'react';

// function Login(props) {
//     function change() {
//       const sss = document.getElementById('sss');
//       const passw = document.getElementById('password').value;
//       if (passw === window.Cpassword) {
//         document.getElementById("warnd").textContent = '';
//         if(document.getElementById('nick').value === window.Cpassword){
//             sss.style.display='block';
//         }else{
//             sss.style.display='none';
//         }
//       } else if(passw ==='') {
//         document.getElementById("warnd").textContent = '';
//         sss.style.display='none';
//       }else{
//         document.getElementById("warnd").textContent = 'Wrong nick or wrong password!';
//         sss.style.display='none';
//       }
//     }
  
//     function namechange() {
//       const sss = document.getElementById('sss');
//       const nick = document.getElementById('nick').value;
//       if (nick === window.name) {
//         document.getElementById("warnd").textContent = '';
//         if(document.getElementById('password').value === window.Cpassword){
//             sss.style.display='block';
//         }else{
//             sss.style.display='none';
//         }
//       } else if(nick ==='') {
//         document.getElementById("warnd").textContent = '';
//         sss.style.display='none';
//       }else{
//         document.getElementById("warnd").textContent = 'Wrong nick or wrong password!';
//         sss.style.display='none';
//       }
//     }
  
//     return (
//       <div id="cont">
//         <h1>Welcome back!</h1>
//         <h2>Log in</h2>
//         <div id="reg">
//           <input className="input" id="nick" type="text" placeholder="Nickname" onChange={namechange} />
//           <input className="input" id="password" type="text" placeholder="password" onChange={change} />
//           <span id="warnd"></span>
//           <input className="input23" type="submit" id='sss' style={{display: 'none'}} />
//         </div>
//       </div>
//     );
//   }

// export default Login;