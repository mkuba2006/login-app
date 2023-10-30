import React, { useState, useEffect } from 'react';
import Login from "./1-log";
import Home from './1-logged';
import Register from "./1-register";

function Sum(){
  const [nick1, setnick1] = useState('');
  const [pass1, setpass1] = useState(false);
  const [registred, setLogged] = useState(false);
  const [done, setDone] = useState(false);
  const [nick2, setnick2] = useState('');
  const [pass2, setpass2] = useState(false);

  const [logged, setlog] = useState(false);

  function handl(nick, p, p2) {
    localStorage.setItem(nick,p);
    setnick1(nick);
    setpass1(p2);
    setLogged(true);
  }

  useEffect(()=>{
    const StoredUser = localStorage.getItem('loggedd');
    if(StoredUser === '1'){
      setlog(true);
    }
  }, [LogOut])

  
  function handl2(nick, password) {
    localStorage.setItem('loggedd','1');
    setnick2(nick);
    setDone(nick1 === nick2 && pass1 === password ? true : false);
    console.log(nick1,nick2);
    console.log(pass1,password);
    console.log(done);
    if(done){
      setlog(true);
    }else{
      setlog(false);
    }
    setlog(true);
  }


  function LogOut(){
    setlog(false);
    setLogged(false);
    localStorage.removeItem('loggedd');
  }
  
  return(
    <React.Fragment>
      {!registred && !logged ? <Register onSub={handl} /> : ''}
      {registred && !logged ? <Login onClick={handl2}/> : ''}
      {logged && <Home onCick={LogOut}/>}
    </React.Fragment>
  )
}
export default Sum;
