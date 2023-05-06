import React, { useState } from "react";

function Login(props) {

    const [item, newitem]= useState("");


    function namechange() {
        const sss = document.getElementById('sss');
        const nick = document.getElementById('nick').value;
        const passw = document.getElementById('password').value;
        if(nick !== ''){
            if(passw !== ''){
                sss.style.display='block';
            }else{
                sss.style.display='none';
            }
        }else{
            sss.style.display='none';
        }
      }

    function change() {
        const sss = document.getElementById('sss');
        const passw = document.getElementById('password').value;
        const nick = document.getElementById('nick').value;
        if(passw !== ''){
            if(nick !== ''){
                sss.style.display='block';
            }else{
                sss.style.display='none';
            }
        }else{
            sss.style.display='none';
        }
    }

    function check() {
      const sss = document.getElementById('sss');
      const passw = document.getElementById('password').value;
      const nick = document.getElementById('nick').value;
      if(passw === window.Cpassword && nick === window.name){
        sss.style.backgroundColor='green';
        newitem('')
      }else{
        sss.style.backgroundColor='red';
        newitem('Something went wrong!')
      }
    }
  
  
    return (
      <div id="cont">
        <h1>Welcome back!</h1>
        <h2>Log in</h2>
        <div id="reg">
          <input className="input" id="nick" type="text" placeholder="Nickname" onChange={namechange} />
          <input className="input" id="password" type="text" placeholder="password" onChange={change} />
          <input className="input23" type="submit" id='sss' style={{display: 'none'}} onClick={check}/>
          <span id="warnd">{item}</span>
        </div>
      </div>
    );
  }

export default Login;













































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