import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css';

class Sidenav extends Component {
  componentDidMount() {
    const sidenav = document.querySelector(".sidenav");
    const instance = M.Sidenav.init(sidenav, {"edge": "right"});
    document.querySelector(".mobile").addEventListener("click", function() {
      instance.open();
    });
    document.querySelectorAll(".sidenav li").forEach(i => {
      i.addEventListener("click", function() {
        instance.close();
      });
    });
  }
  render() {
    return (
      <ul className="sidenav">
        
        <li><Link to="/telegram-gruplari">TELEGRAM GRUPLARI</Link></li>
        <li><a target="_blank" rel="noopener noreferrer" href="https://discord.gg/cZRhbuJ">DISCORD</a></li>
        <li><Link to="/kaynaklar">KAYNAKLAR</Link></li>
        {/*
        <li><Link to="/blog">BLOG</Link></li>        
        <li><Link to="/amacimiz">AMACIMIZ</Link></li>
        <li><Link to="/projeler">PROJELER</Link></li>
        <li><Link to="/is-ilanlari">İŞ İLANLARI</Link></li>
    <li><Link to="/iletisim">İLETİŞİM</Link></li>*/}
      </ul>
    )
  }
}

export default Sidenav;