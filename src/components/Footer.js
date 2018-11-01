import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="footer center">
        <div className="container">
          <div className="row center">
            <a href="https://github.com/Eksicode" target="_blank"><i className="logos-footer devicon-github-plain"></i></a>
            <a href="https://twitter.com/eksicode" target="_blank"><i className="logos-footer devicon-twitter-plain"></i></a>
            <p>2018 - eksicode.org</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;