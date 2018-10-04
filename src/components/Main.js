import React, { Component } from 'react';
import Header from '../components/Header';

const Main = () => {
  document.title = 'Eksicode.org';
  return (
    <div className="container">
       <Header />
    </div>
  );
}

export default Main;
