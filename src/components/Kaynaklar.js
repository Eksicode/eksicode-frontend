import React, { Component } from "react";

class Kaynaklar extends Component {
	constructor(props) {
		super(props)
		this.state = {
			sources: [],
			pageNum: 0
		}
	}
	componentDidMount() {
		document.title = "Eksicode.org - Kaynaklar";
		fetch('http://api.eksicode.org/kaynaklars?_limit=10')
		.then(res => res.json())
		.then(data => this.setState({sources: data}))
	}
	componentDidUpdate() {
		if (this.state.pageNum >= 1) {
			fetch(`http://api.eksicode.org/kaynaklars?_start=${this.state.pageNum * 10}&_limit=10`)
			.then(res => res.json())
			.then(data => this.setState({sources: data}))
		}
	}
	render() {
		return (
		<div className="container">
			<h4 className="center">Kaynaklar</h4>
			<ul>
				<div className="row">
				{this.state.sources.map(e => {
					return (
						<div className="col s6 m4">
						  <div className="card light-green">
							<div className="card-content white-text">
							  <span className="card-title">{e.doc_name}</span>
							</div>
							<div className="card-action">
							  <a className="black-text" target="_blank" rel="noopener noreferrer" href={e.doc_link}>Kaynağa Git</a>
							</div>
						  </div>
						</div>
					)
				})}
				</div>
			</ul>
			<ul className="pagination">

			</ul>
		</div>
	);
	}
	
};

export default Kaynaklar;
