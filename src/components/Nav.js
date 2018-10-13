import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';


const Nav = () => {
  return (
    <nav className="nav-wrapper black">
      <div className="container">
        <Link to="/" className="brand-logo"><img className="logo" src={require('../assets/eksi-code-logo.png')} /></Link>
        <ul className="right">
          <li><Link to="/amacimiz">AMACIMIZ</Link></li>
          <li><Link to="/kilavuzlar">KILAVUZLAR</Link></li>
          <li><Link to="/telegram-gruplari">TELEGRAM GRUPLARI</Link></li>
          <li><Link to="/kaynaklar">KAYNAKLAR</Link></li>
          <li><Link to="/projeler">PROJELER</Link></li>
          <li><Link to="/is-ilanlari">İŞ İLANLARI</Link></li>
          <li><Link to="/iletisim">İLETİŞİM</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav;