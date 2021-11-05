import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getLoginCred } from '../../actions/LoginDataAction';
import { Navigate } from 'react-router-dom';
import './Login.css';
const Login = (props) => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [redirect, setRedirect] = useState(false);
  const [homePath, setHomePath] = useState();

  useEffect(() => {
    props.getLoginCred();
  }, []);
  function getUserName(event) {
    setUserName(event.target.value);
  }
  function getPassword(event) {
    setPassword(event.target.value);
  }
  function getLoginAuthonticate() {
    for (let i = 0; i < 3; i++) {
      console.log(i);
      if (
        userName === props.loginCredentils[i].userName &&
        password === props.loginCredentils[i].password
      ) {
        setRedirect(true);
        setHomePath(i);
        break;
      } else {
        setRedirect(false);
        console.log(props.loginCredentils.length);
        if (i + 1 === props.loginCredentils.length) {
          alert('Wrong Credential');
        }
      }
    }
  }

  if (redirect) {
    return (
      <>
        <Navigate
          to={{ pathname: `/home/${props.loginCredentils[homePath].userName}` }}
        />
      </>
    );
  } else {
    return (
      <div className='main_login_div'>
        <div className='sub_login_div'>
          <h1>Login</h1>
      
    
          <input placeholder='username' type='text' onChange={getUserName} />
          <input
            placeholder='password'
            type='password'
            onChange={getPassword}
          />
          <span className='login_button' onClick={getLoginAuthonticate}>
            Login
          </span>
        </div>
      </div>
    );
  }
};

const mapStateToProps = ({ LoginDataReducer }) => {
  const { isLoading, loginCredentils } = LoginDataReducer;
  return { isLoading, loginCredentils };
};
export default connect(mapStateToProps, { getLoginCred })(Login);
