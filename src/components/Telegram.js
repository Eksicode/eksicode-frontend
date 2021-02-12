import React, { Component } from "react";
import TelegramLogo from "../assets/telegram.svg";
import { Link } from "react-router-dom";

class Telegram extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groups: []
        };
    }

    componentWillMount() {
        document.title = "Eksicode.org - Telegram Grupları";
        fetch("https://api.eksicode.org/telegrams?_sort=ListOrder:ASC")
            .then(res => res.json())
            .then(list => this.setState({ groups: list }))
    }
    render() {
        const { groups } = this.state;
        return (
            <div className="container">
                <div className="description row">
                    <div className="col m12 l6">
                        <h1>Telegram Grupları</h1>
                    </div>
                    <div className="col m12 l6">
                        <p className="flow-text">
                            İlgilendiğin yazılım dili veya konular ile ilgili
                            telegram gruplarımıza katılabilirsin.

                        </p>

                        <a
                            href="https://telegram.org/dl/"
                            rel="noopener noreferrer"
                            target="_blank"
                            className="btn-small waves"
                        >
                            <img className="telegram-btn" src={TelegramLogo} height="12em" alt="" />
                            Telegram'ı İndir
                        </a>
                        <br></br>
                        <br></br>
                        <Link to="/grup-kurallari">
                            Grup Kuralları için tıklayın
                        </Link>
                    </div>
                </div>

                <div className="row center" id="channels">
                    {groups.length > 0 && groups.map((e, id) => {
                        return (
                            <div className="col s12 m4 l3" key={id}>
                                <div className="card hoverable">
                                    <div className="card-content black-text">
                                        <img className="logos" src={e.logo} alt={e.name}/>
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
