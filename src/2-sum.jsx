import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Register from "./1-register";
import Login from "./1-log";

function Sum(props){
    const [logged, setLogged] = useState(false);

    function handl(e){
      setLogged(!logged);
    }


    return(
        <div>
          {logged ? <Login /> : <Register onSub={handl} />}
        </div>
      )
}
export default Sum;