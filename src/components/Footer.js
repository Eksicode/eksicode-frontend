import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer eksicode">
                <div className="container center-align">
                    <div className="row">
                        <div className="col l12">
                            <a
                                className="white-text footer-logo"
                                href="https://github.com/Eksicode"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <i className="logos-footer devicon-github-plain" />
                            </a>
                            <a
                                className="white-text footer-logo"
                                href="https://twitter.com/eksicode"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <i className="logos-footer devicon-twitter-plain" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container center-align">
                        2017 - 2019 eksicode.org | <Link to="/gizlilik-politikasi">Gizlilik Politikası</Link>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
