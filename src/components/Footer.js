import React, { Component } from "react";
import { Link } from "react-router-dom";
import GithubLogo from "../assets/github-original.svg";
import TwitterLogo from "../assets/twitter-original.svg";
import DiscordLogo from "../assets/Discord-Logo-White.svg";

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
                                <img className="logos-footer" src={GithubLogo} alt="Github" />
                            </a>
                            <a
                                className="white-text footer-logo"
                                href="https://twitter.com/eksicode"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <img className="logos-footer" src={TwitterLogo} alt="Twitter" />
                            </a>
                            <a
                                className="white-text footer-logo"
                                href="https://discord.gg/cZRhbuJ"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <img className="logos-footer" src={DiscordLogo} alt="discord"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container center-align">
                        <Link className="" to="/grup-kurallari">
                            Grup Kuralları
                        </Link>
                        {" "}|{" "}
                        <Link className="" to="/gizlilik-politikasi">
                            Gizlilik Politikası
                        </Link>
                        <p>2017 - {(new Date().getFullYear())} eksicode.org </p>
                        <p>Alan adı & Hosting Sponsoru: <a href="https://navisio.eu/" target="_blank" rel="noopener noreferrer"> Navisio Teknoloji</a></p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
