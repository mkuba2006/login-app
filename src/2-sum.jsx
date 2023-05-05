import React, { useState } from 'react';
import Login from "./1-log";

import Register from "./1-register";







function Sum(props){

    const [logged, setLogged] = useState(false);
    function handl(password){
      setLogged(!logged);
    }
    
    return(
        <div>
          {logged ? <Login /> : <Register onSub={handl}/>}
        </div>
      )
}
export default Sum;
