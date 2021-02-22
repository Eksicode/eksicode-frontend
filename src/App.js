import React, { Component } from 'react';
import Nav from './components/Nav';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './components/Main';
import Amacimiz from './components/Amacimiz';
import Kaynaklar from './components/Kaynaklar';
import Telegram from './components/Telegram';
import Projeler from './components/Projeler';
import Iletisim from './components/Iletisim';
import Footer from './components/Footer';
import Sidenav from './components/Sidenav';
import Kurallar from './components/Kurallar';
import Gizlilik from './components/Gizlilik';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import AcikOfis from './components/AcikOfis';

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
          <Route path='/acik-ofis-saati' component={AcikOfis} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/blog/:id' component={BlogPost} />
          <Route path='/projeler' component={Projeler} />
          <Route path='/iletisim' component={Iletisim} />
          <Route path='/grup-kurallari' component={Kurallar} />
          <Route path='/gizlilik-politikasi' component={Gizlilik} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;



