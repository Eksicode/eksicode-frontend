import React, { Component } from 'react';
import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';
const Main = () => {
  document.title = 'Eksicode.org';
  return (
    <div>
      <Jumbotron
        background={require('../assets/testbg1.jpeg')}
      >
        <div className="container">
            <h1>Yazılımcı Geliştirme Platformu.</h1>
            <p>ekşiCode, yazılımcıların serüveninde onları yalnız bırakmaz, arkasında durur.</p>
            <a href="#" className="btn-small waves-effect">Bize Katılın!</a>
        </div>
      </Jumbotron>
      <div className="container">
        <Header />
      </div>
    </div>
  );
}

export default Main;
