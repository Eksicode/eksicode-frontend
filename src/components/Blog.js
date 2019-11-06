import React, { Component } from "react";
import { Link } from "react-router-dom";

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: {}
        }
    }
    componentWillMount() {
        fetch("http://api.eksicode.org/blogs")
            .then(res => res.json())
            .then(posts => this.setState({posts}))
            // Burada çekilen postlar listelenecek
    }
    render() {
        return (
            <div className="container">
                <div class="row">
                    <div className="col s12 m6 l5 xl4">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">Merhaba Dünya</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="card-action">
                            <Link className="btn-small waves-effect waves hover-kaynak" to="/blog/1">Devamını Oku</Link> {/* Buraya otomatik olarak post linki verilecek */}
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog;
