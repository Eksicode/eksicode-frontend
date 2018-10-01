import React, { Component } from 'react';
import './App.scss';
import Nav from './components/Nav'
import Footer from './components/footer';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header/>
        <Footer />
      </div>
    );
  }
}

export default App;
