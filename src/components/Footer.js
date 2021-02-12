import React, { Component } from "react";
import { Link } from "react-router-dom";
import GithubLogo from "../assets/github-original.svg";
import TwitterLogo from "../assets/twitter-original.svg";

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer eksicode">
                <div className="container center-align">
                    <div className="row">
                        <div className="col s12 m12 l12 xl12">
                            <a
                                className="white-text footer-logo"
                                href="https://github.com/Eksicode"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <img className="logos-footer" src={GithubLogo} />
                            </a>
                            <a
                                className="white-text footer-logo"
                                href="https://twitter.com/eksicode"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <img className="logos-footer" src={TwitterLogo} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container center-align">
                        <Link className="blue-text text-darken-4" to="/grup-kurallari">
                            Grup Kuralları
                        </Link>
                        {" "}|{" "}
                        <Link className="blue-text text-darken-4" to="/gizlilik-politikasi">
                            Gizlilik Politikası
                        </Link>
                        <p>2017 - {(new Date().getFullYear())} eksicode.org </p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
