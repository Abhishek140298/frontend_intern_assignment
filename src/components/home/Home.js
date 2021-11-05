import React from 'react';
import Login from '../login/Login';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Form from '../form/Form'
export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Form/>
        <Footer/>
      </div>
    );
  }
}
