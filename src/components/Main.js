import React, { Component } from "react";
import { Link} from 'react-router-dom';
import M from "materialize-css";

class Main extends Component {
  componentDidMount() {
    const carousel = document.querySelector(".carousel");
    const instance = M.Carousel.init(carousel, {
      dist: -50,
      padding: 100,  
    });
    instance.next();
    instance.prev();
  }
  render() {
    document.title = "Eksicode";
    return (
      <div>
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col s12 m8 offset-m4 l8 offset-l4">
                <h1>Yazılımcı Geliştirme Platformu</h1>
                <p className="flow-text">
                  ekşiCode, yazılımcıların serüveninde onları yalnız bırakmaz,
                  arkasında durur.
                </p>
              </div>
            </div>
          </div>
          <img
            className="drawings responsive-img"
            src={require("../assets/adventurer.svg")}
            alt=""
          />
        </div>
        {/*<div className="section">
          <div className="container">
            <div className="row">
              <div className="col s6 m8 l6">
                <h2><Link to="/kaynaklar" style={{color: 'black'}}>Kaynaklar</Link></h2>
                <div className="box box__kaynaklar"></div>
                <p className="flow-text">
                  Geliştirdiğin veya öğrenmek istediğin programlama diline ait
                  içerikler bulabilirsin.
                </p>
              </div>
            </div>
          </div>
          <img
            className="drawings responsive-img"
            src={require("../assets/laptoper.svg")}
            alt=""
          />
        </div>
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col s8 offset-s4 m8 offset-m4 l6 offset-l6">
                <h2><Link to="/projeler" style={{color: 'black'}}>Projeler</Link></h2>
                <div className="box box__projeler"></div>
                <p className="flow-text">
                  Aktif açık kaynak projelerimize katılabilirsin.
                </p>
              </div>
            </div>
          </div>
          <img
            className="drawings responsive-img"
            src={require("../assets/girl.svg")}
            alt=""
          />
    </div>*/}
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col s12 m8 offset-m4 l6 offset-l6">
                <h2><Link to="/telegram-gruplari" style={{color: 'black'}}>Telegram Grupları</Link></h2>
                <div className="box box__gruplar"></div>
                <p className="flow-text">
                  Telegram gruplarına katılıp öğrenirken öğretebilirsin.
                </p>
              </div>
            </div>
          </div>
          <img
            className="drawings plane responsive-img"
            src={require("../assets/plane.svg")}
            alt=""
          />
        </div>
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col s12 m8 offset-m4 l6 offset-l6">
                <h2><a href="https://discord.gg/cZRhbuJ" target="_blank" rel="noopener noreferrer" style={{color: 'black'}}>Discord</a></h2>
                <div className="box box__discord"></div>
                <p className="flow-text">
                  Discord sunucumuzda sesli sohbete katılabilirsin.
                </p>
              </div>
            </div>
          </div>
          <img
            className="drawings discord responsive-img"
            src={require("../assets/Discord.svg")}
            alt=""
          />
        </div>
        {/*<div className="section">
          <div className="container">
            <div className="row">
              <div className="col s8 offset-s4 m8 offset-m4 l6 offset-l6">
                <h2><Link to="/is-ilanlari" style={{color: 'black'}}>İş İlanları</Link></h2>
                <div className="box box__kariyer"></div>
                <p className="flow-text">
                  Kendine uygun açık pozisyonlara bakabilir ya da size uygun
                  kişiyi bulabilirsiniz.
                </p>
              </div>
            </div>
          </div>
          <img
            className="drawings"
            src={require("../assets/cards.svg")}
            alt=""
          />
  </div>*/}
        <div className="section eksi">
          <div className="container">
            <div className="row">
              <div className="col s12">
                <h2>ekşi sözlük'ten</h2>
              </div>
              <div className="hide-on-med-and-down">
                <div className="col s4">
                  <div className="entry">
                    <img
                      className="bubble"
                      src={require("../assets/bubble.svg")}
                      alt=""
                    />
                    <p>
                      yazarları ve okurları alanlarına göre farklı telegram
                      gruplarında birleştiren faydalı bir oluşum.
                    </p>
                    <span className="author">karayip lordu</span>
                  </div>
                  <img
                    className="people"
                    src={require("../assets/e-people-1.svg")}
                    alt=""
                  />
                </div>
                <div className="col s4">
                  <div className="entry">
                    <img
                      className="bubble"
                      src={require("../assets/bubble.svg")}
                      alt=""
                    />
                    <p>
                      sözlük'te yazılımla uğraşan yazarların bir araya gelip
                      bilgi alışverişinde bulunabilmesi açısından faydalı bir
                      oluşum olacağını düşündüğüm platformdur.
                    </p>
                    <span className="author">sturm</span>
                  </div>
                  <img
                    className="people"
                    src={require("../assets/e-people-2.svg")}
                    alt=""
                  />
                </div>
                <div className="col s4">
                  <div className="entry">
                    <img
                      className="bubble"
                      src={require("../assets/bubble.svg")}
                      alt=""
                    />
                    <p>
                      yazılıma ilgisi olan her seviyeden insanı biraraya
                      getiren; konularına göre birden fazla telegram grubu
                      içeren; aktif ve yardımsever topluluğun olduğu platform.
                    </p>
                    <span className="author">arifm</span>
                  </div>
                  <img
                    className="people"
                    src={require("../assets/e-people-3.svg")}
                    alt=""
                  />
                </div>
              </div>
              <div className="hide-on-large-only">
                <div className="carousel">
                  <a className="carousel-item">
                    <div className="entry">
                      <img
                        className="bubble"
                        src={require("../assets/bubble.svg")}
                        alt=""
                      />
                      <p>
                        yazılıma ilgisi olan her seviyeden insanı biraraya
                        getiren; konularına göre birden fazla telegram grubu
                        içeren; aktif ve yardımsever topluluğun olduğu platform.
                      </p>
                      <span className="author">arifm</span>
                    </div>
                    <img
                      className="people"
                      src={require("../assets/e-people-1.svg")}
                      alt=""
                    />
                  </a>
                  <a className="carousel-item">
                    <div className="entry">
                      <img
                        className="bubble"
                        src={require("../assets/bubble.svg")}
                        alt=""
                      />
                      <p>
                        sözlük'te yazılımla uğraşan yazarların bir araya gelip
                        bilgi alışverişinde bulunabilmesi açısından faydalı bir
                        oluşum olacağını düşündüğüm platformdur.
                      </p>
                      <span className="author">sturm</span>
                    </div>
                    <img
                      className="people"
                      src={require("../assets/e-people-2.svg")}
                      alt=""
                    />
                  </a>
                  <a className="carousel-item">
                    <div className="entry">
                      <img
                        className="bubble"
                        src={require("../assets/bubble.svg")}
                        alt=""
                      />
                      <p>
                        yazarları ve okurları alanlarına göre farklı telegram
                        gruplarında birleştiren faydalı bir oluşum.
                      </p>
                      <span className="author">karayip lordu</span>
                    </div>
                    <img
                      className="people"
                      src={require("../assets/e-people-3.svg")}
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
