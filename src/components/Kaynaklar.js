import React, { Component } from "react";

class Kaynaklar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sources: [],
            pageCount: [],
            pageNum: 0
        };
    }
    componentWillMount() {
        document.title = "Eksicode.org - Kaynaklar";
        fetch("http://api.eksicode.org/kaynaklars?_start=0&_limit=12")
            .then(res => res.json())
            .then(data => this.setState({ sources: data }));
        fetch("http://api.eksicode.org/kaynaklars/count")
            .then(res => res.text())
            .then(data => {
                const count = parseInt(data, 10);
                let pageCount;
                if (count % 12 > 0) {
                    pageCount = Math.floor(count / 12) + 1;
                } else {
                    pageCount = Math.floor(count / 12);
                }
                this.setState({ pageCount });
            });
    }
    componentDidUpdate(previousProps, previousState) {
        if (this.state.pageNum !== previousState.pageNum) {
            fetch(
                `http://api.eksicode.org/kaynaklars?_start=${this.state
                    .pageNum * 12}&_limit=${12}`
            )
                .then(res => res.json())
                .then(data => this.setState({ sources: data }));
        }
    }
    nextPage() {
        this.setState(state => {
            return { pageNum: state.pageNum + 1 };
        });
    }
    prevPage() {
        if (this.state.pageNum > 0) {
            this.setState(state => {
                return { pageNum: state.pageNum - 1 };
            });
        }
    }
    createPages() {
        let pages = [];
        for (let i = 0; i < this.state.pageCount; i++) {
            pages.push(
                <li
                    class={`${
                        this.state.pageNum === i ? "active light-green" : ""
                    }  waves-effect`}
                >
                    <a onClick={() => this.setState({ pageNum: i })}>{i + 1}</a>
                </li>
            );
        }
        return pages;
    }
    render() {
        return (
            <div className="container">
                <h4 className="center">Kaynaklar</h4>
                <ul>
                    <div className="row">
                        {this.state.sources.map(e => {
                            return (
                                <div className="col xl4 l4 m6 s12">
                                    <div className="card light-green">
                                        <div className="card-content white-text">
                                            <span className="card-title">
                                                {e.doc_name}
                                            </span>
                                        </div>
                                        <div className="card-action">
                                            <a
                                                className="black-text"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href={e.doc_link}
                                            >
                                                Kaynağa Git
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </ul>
                <ul class="pagination center">
                    <li
                        onClick={this.prevPage.bind(this)}
                        class={
                            this.state.pageNum === 0
                                ? "disabled"
                                : "waves-effect"
                        }
                    >
                        <i class="material-icons">chevron_left</i>
                    </li>
                    {this.createPages()}
                    <li
                        onClick={this.nextPage.bind(this)}
                        class={
                            this.state.pageNum === this.state.pageCount - 1
                                ? "disabled"
                                : "waves-effect"
                        }
                    >
                        <i class="material-icons">chevron_right</i>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Kaynaklar;
