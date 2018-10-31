import React, { Component } from "react";
import M from "materialize-css";

class Kariyer extends Component {
  componentDidMount() {
    const collapsible = document.querySelector(".collapsible");
    const instance = M.Collapsible.init(collapsible, {
      accordion: false});
    document.querySelectorAll(".collapsible li").forEach(i => {
      i.addEventListener("click", function() {
        instance.open(i);
      });
    });
    document.querySelectorAll(".collapsible li").forEach(i => {
      i.addEventListener("click", function() {
        instance.close(i);
      });
    });
  }

  render() {
    return (
      <div className="container">
        <ul className="collapsible expandable">
          <li>
            <div className="collapsible-header">
              <div className="row">
                <div className="col s8 job-title">Front-End Developer</div>
                <div className="col s4 company-name">
                  ABC Tech
                  <br />
                  <span className="location">Ankara</span>
                </div>
                <div className="tags col s12">
                  <div className="job-bg chip">mid-level</div>
                  <div className="chip">react</div>
                  <div className="chip">es6</div>
                  <div className="chip">bootstrap</div>
                </div>
              </div>
            </div>
            <div className="collapsible-body">
              <div className="section">
                <h6>İş Tanımı</h6>
                <p>
                  Bacon ipsum dolor amet t-bone ribeye kielbasa pork belly,
                  swine doner turducken. Pork chop doner pancetta sausage rump
                  porchetta cow pastrami. Pancetta strip steak hamburger,
                  kielbasa ribeye chuck corned beef sausage ball tip tail.
                  Salami cow shank meatball pork, andouille ham hock. Tongue
                  shankle fatback, meatball pastrami t-bone burgdoggen pork loin
                  beef cupim salami pig. Salami swine filet mignon, brisket
                  turducken beef ribs chuck ham strip steak picanha shank beef
                  frankfurter. Ground round bresaola biltong, ribeye boudin
                  shoulder pork chop pastrami. Doner turkey kevin venison
                  chicken frankfurter ham hock flank ribeye shank tongue tail
                  jerky. Biltong ball tip bresaola swine ribeye. Spare ribs
                  tenderloin prosciutto burgdoggen. Filet mignon beef tri-tip
                  prosciutto short loin kielbasa meatloaf, pancetta doner ham
                  spare ribs. Picanha prosciutto tri-tip pork belly turducken.
                </p>
              </div>
              <div className="divider" />
              <div className="section">
                <h6>İş Gereksinimleri</h6>
                <ul className="browser-default">
                  <li>
                    Bachelors degree from a reputable university in the fields
                    of computer engineering
                  </li>
                  <li>
                    Minimum 2 years of experience in Frontend development
                    Fundamentals like HTML, JavaScript, and CSS
                  </li>
                  <li>
                    Experience with frontend libraries such as JQuery, Bootstrap
                    etc.
                  </li>
                  <li>
                    Basic understanding of server-side CSS pre-processing
                    platforms, such as LESS and SASS
                  </li>
                  <li>
                    Experience with JavaScript libraries and frameworks, such as
                    AngularJS, VueJS is beneficial
                  </li>
                  <li>
                    Good understanding of asynchronous request handling, partial
                    page updates, and AJAX Proficient understanding of
                    cross-browser compatibility issues and ways to work around
                    them
                  </li>
                  <li>
                    Knowledge of SEO principles Previous experience and
                    knowledge about version control systems
                  </li>
                  <li>Strong interest in e-commerce ecosystem</li>
                  <li>High proficiency in English</li>
                </ul>
              </div>
              <div className="divider" />
              <div className="section">
                <h6>Uzaktan Çalışma</h6>
                <span>Yok</span>
              </div>
              <div className="divider" />
              <div className="section">
                <h6>Ücret Bilgisi</h6>
                <span>60k-80k</span>
              </div>
              <div className="divider" />
              <div className="section">
                <h6>İletişim Bilgileri</h6>
                <a href="#">www.eksicode.org</a>
                <br />
                <a href="#">mail@eksicode.org</a>
              </div>
            </div>
          </li>
          <li>
            <div className="collapsible-header">
              <div className="row">
                <div className="col s8 job-title">Full Stack Developer</div>
                <div className="col s4 company-name">
                  Cacoon
                  <br />
                  <span className="location">İstanbul</span>
                </div>
                <div className="tags col s12">
                  <div className="job-bg chip">senior</div>
                  <div className="chip">angular</div>
                  <div className="chip">node.js</div>
                  <div className="chip">MongoDB</div>
                </div>
              </div>
            </div>
            <div className="collapsible-body">
              <div className="section">
                <h6>İş Tanımı</h6>
                <p>
                  Bacon ipsum dolor amet t-bone ribeye kielbasa pork belly,
                  swine doner turducken. Pork chop doner pancetta sausage rump
                  porchetta cow pastrami. Pancetta strip steak hamburger,
                  kielbasa ribeye chuck corned beef sausage ball tip tail.
                  Salami cow shank meatball pork, andouille ham hock. Tongue
                  shankle fatback, meatball pastrami t-bone burgdoggen pork loin
                  beef cupim salami pig. Salami swine filet mignon, brisket
                  turducken beef ribs chuck ham strip steak picanha shank beef
                  frankfurter. Ground round bresaola biltong, ribeye boudin
                  shoulder pork chop pastrami. Doner turkey kevin venison
                  chicken frankfurter ham hock flank ribeye shank tongue tail
                  jerky. Biltong ball tip bresaola swine ribeye. Spare ribs
                  tenderloin prosciutto burgdoggen. Filet mignon beef tri-tip
                  prosciutto short loin kielbasa meatloaf, pancetta doner ham
                  spare ribs. Picanha prosciutto tri-tip pork belly turducken.
                </p>
              </div>
              <div className="divider" />
              <div className="section">
                <h6>İş Gereksinimleri</h6>
                <ul className="browser-default">
                  <li>
                    Bachelors degree from a reputable university in the fields
                    of computer engineering
                  </li>
                  <li>
                    Minimum 2 years of experience in Frontend development
                    Fundamentals like HTML, JavaScript, and CSS
                  </li>
                  <li>
                    Experience with frontend libraries such as JQuery, Bootstrap
                    etc.
                  </li>
                  <li>
                    Basic understanding of server-side CSS pre-processing
                    platforms, such as LESS and SASS
                  </li>
                  <li>
                    Experience with JavaScript libraries and frameworks, such as
                    AngularJS, VueJS is beneficial
                  </li>
                  <li>
                    Good understanding of asynchronous request handling, partial
                    page updates, and AJAX Proficient understanding of
                    cross-browser compatibility issues and ways to work around
                    them
                  </li>
                  <li>
                    Knowledge of SEO principles Previous experience and
                    knowledge about version control systems
                  </li>
                  <li>Strong interest in e-commerce ecosystem</li>
                  <li>High proficiency in English</li>
                </ul>
              </div>
              <div className="divider" />
              <div className="section">
                <h6>Uzaktan Çalışma</h6>
                <span>Yok</span>
              </div>
              <div className="divider" />
              <div className="section">
                <h6>Ücret Bilgisi</h6>
                <span>60k-80k</span>
              </div>
              <div className="divider" />
              <div className="section">
                <h6>İletişim Bilgileri</h6>
                <a href="#">www.eksicode.org</a>
                <br />
                <a href="#">mail@eksicode.org</a>
              </div>
            </div>
          </li>
          <li>
            <div className="collapsible-header">
              <div className="row">
                <div className="col s8 job-title">C# Developer</div>
                <div className="col s4 company-name">
                  DEF San
                  <br />
                  <span className="location">İzmir</span>
                </div>
                <div className="tags col s12">
                  <div className="job-bg chip">senior</div>
                  <div className="chip">django</div>
                  <div className="chip">rest</div>
                  <div className="chip">mySQL</div>
                </div>
              </div>
            </div>
            <div className="collapsible-body">
              <div className="section">
                <h6>İş Tanımı</h6>
                <p>
                  Bacon ipsum dolor amet t-bone ribeye kielbasa pork belly,
                  swine doner turducken. Pork chop doner pancetta sausage rump
                  porchetta cow pastrami. Pancetta strip steak hamburger,
                  kielbasa ribeye chuck corned beef sausage ball tip tail.
                  Salami cow shank meatball pork, andouille ham hock. Tongue
                  shankle fatback, meatball pastrami t-bone burgdoggen pork loin
                  beef cupim salami pig. Salami swine filet mignon, brisket
                  turducken beef ribs chuck ham strip steak picanha shank beef
                  frankfurter. Ground round bresaola biltong, ribeye boudin
                  shoulder pork chop pastrami. Doner turkey kevin venison
                  chicken frankfurter ham hock flank ribeye shank tongue tail
                  jerky. Biltong ball tip bresaola swine ribeye. Spare ribs
                  tenderloin prosciutto burgdoggen. Filet mignon beef tri-tip
                  prosciutto short loin kielbasa meatloaf, pancetta doner ham
                  spare ribs. Picanha prosciutto tri-tip pork belly turducken.
                </p>
              </div>
              <div className="divider" />
              <div className="section">
                <h6>İş Gereksinimleri</h6>
                <ul className="browser-default">
                  <li>
                    Bachelors degree from a reputable university in the fields
                    of computer engineering
                  </li>
                  <li>
                    Minimum 2 years of experience in Frontend development
                    Fundamentals like HTML, JavaScript, and CSS
                  </li>
                  <li>
                    Experience with frontend libraries such as JQuery, Bootstrap
                    etc.
                  </li>
                  <li>
                    Basic understanding of server-side CSS pre-processing
                    platforms, such as LESS and SASS
                  </li>
                  <li>
                    Experience with JavaScript libraries and frameworks, such as
                    AngularJS, VueJS is beneficial
                  </li>
                  <li>
                    Good understanding of asynchronous request handling, partial
                    page updates, and AJAX Proficient understanding of
                    cross-browser compatibility issues and ways to work around
                    them
                  </li>
                  <li>
                    Knowledge of SEO principles Previous experience and
                    knowledge about version control systems
                  </li>
                  <li>Strong interest in e-commerce ecosystem</li>
                  <li>High proficiency in English</li>
                </ul>
              </div>
              <div className="divider" />
              <div className="section">
                <h6>Uzaktan Çalışma</h6>
                <span>Yok</span>
              </div>
              <div className="divider" />
              <div className="section">
                <h6>Ücret Bilgisi</h6>
                <span>60k-80k</span>
              </div>
              <div className="divider" />
              <div className="section">
                <h6>İletişim Bilgileri</h6>
                <a href="#">www.eksicode.org</a>
                <br />
                <a href="#">mail@eksicode.org</a>
              </div>
            </div>
          </li>
          <li>
            <div className="collapsible-header">
              <div className="row">
                <div className="col s8 job-title">Java Software Engineer</div>
                <div className="col s4 company-name">
                  Eksicode Information Technologies
                  <br />
                  <span className="location">Remote</span>
                </div>
                <div className="tags col s12">
                  <div className="job-bg chip">mid-level</div>
                  <div className="chip">java 8</div>
                  <div className="chip">git</div>
                  <div className="chip">mySQL 5.6+</div>
                </div>
              </div>
            </div>
            <div className="collapsible-body">
              <div className="section">
                <h6>İş Tanımı</h6>
                <p>
                  Bacon ipsum dolor amet t-bone ribeye kielbasa pork belly,
                  swine doner turducken. Pork chop doner pancetta sausage rump
                  porchetta cow pastrami. Pancetta strip steak hamburger,
                  kielbasa ribeye chuck corned beef sausage ball tip tail.
                  Salami cow shank meatball pork, andouille ham hock. Tongue
                  shankle fatback, meatball pastrami t-bone burgdoggen pork loin
                  beef cupim salami pig. Salami swine filet mignon, brisket
                  turducken beef ribs chuck ham strip steak picanha shank beef
                  frankfurter. Ground round bresaola biltong, ribeye boudin
                  shoulder pork chop pastrami. Doner turkey kevin venison
                  chicken frankfurter ham hock flank ribeye shank tongue tail
                  jerky. Biltong ball tip bresaola swine ribeye. Spare ribs
                  tenderloin prosciutto burgdoggen. Filet mignon beef tri-tip
                  prosciutto short loin kielbasa meatloaf, pancetta doner ham
                  spare ribs. Picanha prosciutto tri-tip pork belly turducken.
                </p>
              </div>
              <div className="divider" />
              <div className="section">
                <h6>İş Gereksinimleri</h6>
                <ul className="browser-default">
                  <li>
                    Bachelors degree from a reputable university in the fields
                    of computer engineering
                  </li>
                  <li>
                    Minimum 2 years of experience in Frontend development
                    Fundamentals like HTML, JavaScript, and CSS
                  </li>
                  <li>
                    Experience with frontend libraries such as JQuery, Bootstrap
                    etc.
                  </li>
                  <li>
                    Basic understanding of server-side CSS pre-processing
                    platforms, such as LESS and SASS
                  </li>
                  <li>
                    Experience with JavaScript libraries and frameworks, such as
                    AngularJS, VueJS is beneficial
                  </li>
                  <li>
                    Good understanding of asynchronous request handling, partial
                    page updates, and AJAX Proficient understanding of
                    cross-browser compatibility issues and ways to work around
                    them
                  </li>
                  <li>
                    Knowledge of SEO principles Previous experience and
                    knowledge about version control systems
                  </li>
                  <li>Strong interest in e-commerce ecosystem</li>
                  <li>High proficiency in English</li>
                </ul>
              </div>
              <div className="divider" />
              <div className="section">
                <h6>Uzaktan Çalışma</h6>
                <span>Var</span>
              </div>
              <div className="divider" />
              <div className="section">
                <h6>Ücret Bilgisi</h6>
                <span>60k-80k</span>
              </div>
              <div className="divider" />
              <div className="section">
                <h6>İletişim Bilgileri</h6>
                <a href="#">www.eksicode.org</a>
                <br />
                <a href="#">mail@eksicode.org</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Kariyer;
