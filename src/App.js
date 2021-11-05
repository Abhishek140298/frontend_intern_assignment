import React from 'react';
import * as ReactDOMServer from "react-dom/server";

import {Routes,Route,Navigate} from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';



export default class App extends React.Component {
  render() {
    return (
      <>
        <Routes>
          <Route
            path='/'
            element ={<Navigate replace to='login'/>}
              
              
          
          />
          <Route exact path='login' element={<Login/>} />
          <Route exact path='/home/:userName' element={<Home/>} />
        </Routes>
      </>
    );
  }
}
