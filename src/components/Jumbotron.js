import React, { Component } from 'react';

class Jumbotron extends Component {
  render() {
    let background = this.props.background !== undefined ? { background: `url(${this.props.background}) no-repeat center center fixed` } : {};
    return (
      <div className="jumbotron" style={background}>
        {this.props.children}
      </div>
    );
  }
}

export default Jumbotron;