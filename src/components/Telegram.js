import React, { Component } from "react";
import TelegramLogo from "../assets/telegram.svg";

class Telegram extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groups: []
        };
    }
    componentWillMount() {
        document.title = "Eksicode.org - Telegram Grupları";
        fetch("http://api.eksicode.org/telegrams")
            .then(res => res.json())
        .then(list => this.setState({groups: list}))
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col m12 l6">
                        <h2>Telegram Grupları</h2>
                    </div>
                    <div className="col m12 l6">
                        <p className="flow-text">
                            İlgilendiğin yazılım dili veya konular ile ilgili
                            telegram gruplarımıza katılabilirsin.
                        </p>
                        <a
                            href="https://t.me/joinchat/G0kqtVFVFl2cWMnmJdUniw"
                            rel="noopener noreferrer"
                            target="_blank"
                            className="btn-small blue waves-effect waves"
                        >
                            <img src={TelegramLogo} height="12em" alt="" />
                            Telegram'ı İndir
                        </a>
                    </div>
                </div>

                <div className="row center" id="channels">
                    {this.state.groups.map((e, id) => {
                        return (
                            <div className="col s12 m4 l3" key={id}>
                                <div className="card hoverable">
                                    <div className="card-content black-text">
                                        <i className={`logos ${e.logo}`}>
                                            {e.icon}
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                            <span className="path3"></span>
                                            <span className="path4"></span>
                                            <span className="path5"></span>
                                        </i>
                                        <h4>{e.name}</h4>
                                        <p>{e.members} Üye</p>
                                    </div>
                                    <a
                                        href={e.link}
                                        target="_blank"
                                        className="btn-small waves-effect waves"
                                    >
                                        <img
                                            className="telegram__logo"
                                            src={TelegramLogo}
                                            alt=""
                                            height="12em"
                                        />
                                        Katıl
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Telegram;
