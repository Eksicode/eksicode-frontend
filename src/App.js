import React, { Component } from 'react';
import Nav from './components/Nav';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './components/Main';
import Amacimiz from './components/Amacimiz';
import Kaynaklar from './components/Kaynaklar';
import Telegram from './components/Telegram';
import Kilavuzlar from './components/Kilavuzlar';
import Projeler from './components/Projeler';
import Kariyer from './components/Kariyer';
import Iletisim from './components/Iletisim';
import Footer from './components/Footer';
import Sidenav from './components/Sidenav';
import Gizlilik from './components/Gizlilik';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Sidenav />
          <Route exact path='/' component={Main} />
          <Route path='/amacimiz' component={Amacimiz} />
          <Route path='/kaynaklar' component={Kaynaklar} />
          <Route path='/telegram-gruplari' component={Telegram} />
          <Route path='/kilavuzlar' component={Kilavuzlar} />
          <Route path='/projeler' component={Projeler} />
          <Route path='/is-ilanlari' component={Kariyer} />
          <Route path='/iletisim' component={Iletisim} />
          <Route path='/gizlilik-politikasi' component={Gizlilik} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
