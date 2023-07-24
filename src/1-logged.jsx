import React, { useState } from "react";
import classes from './style.module.css';

function Home(props) {

  function Click() {
    console.log('clicked');
    props.onCick()
  }

  return (
    <div className={classes.card}>
        <h1>Welcome back!</h1>
        <button className={classes.butt} onClick={Click}>
          <span className={classes.icon}>
          <svg xmlns="http://www.w3.org/2000/svg" width={'30px'} height={'30px'}  viewBox="0 0 24 24"><path d="M10 11V8L15 12L10 16V13H1V11H10ZM2.4578 15H4.58152C5.76829 17.9318 8.64262 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C8.64262 4 5.76829 6.06817 4.58152 9H2.4578C3.73207 4.94289 7.52236 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C7.52236 22 3.73207 19.0571 2.4578 15Z" fill="rgba(255,255,255,1)"></path></svg>
         </span>
          <span className={classes.text}>Log Out</span>
        </button>
    </div>
  );
}

export default Home;

