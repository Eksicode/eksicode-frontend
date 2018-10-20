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
            <h1>Test</h1>
            <h2>açıklama</h2>
            <a href="#" className="button">test</a>
        </div>
      </Jumbotron>
      <div className="container">
        <Header />
      </div>
    </div>
  );
}

export default Main;
