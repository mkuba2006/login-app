import React from 'react';
import classes from './style.module.css';
import ver from './images/verified.png'

function Passed(){

  
  return(
    <div className={classes.passed}>
      <div className={classes.passed2}>
        <img src={ver} />
        <h1>Done</h1>
      </div>
    </div>
  )
}
export default Passed;
