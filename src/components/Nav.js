import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="nav-wrapper black">
          <div className="container">
            <Link to="/" className="brand-logo"><img className="logo" alt="EkşiCode Logosu" src={require('../assets/eksi-code-logo.png')} /></Link>
            <ul className="right">
              
              <li className="desktop"><Link to="/telegram-gruplari">TELEGRAM GRUPLARI</Link></li>
              <li className="desktop"><a target="_blank" rel="noopener noreferrer" href="https://discord.gg/cZRhbuJ">DISCORD</a></li>
              <li className="desktop"><Link to="/kaynaklar">KAYNAKLAR</Link></li>
              <li className="desktop"><Link to="/blog">BLOG</Link></li>
              {/*<li className="desktop"><Link to="/amacimiz">AMACIMIZ</Link></li>
              <li className="desktop"><Link to="/projeler">PROJELER</Link></li>
              <li className="desktop"><Link to="/is-ilanlari">İŞ İLANLARI</Link></li>
    <li className="desktop"><Link to="/iletisim">İLETİŞİM</Link></li>*/}
              <li className="mobile"><a className="waves-effect waves-light btn-flat white-text"><i className="material-icons">menu</i></a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Nav;
