import React, { Component } from 'react';
import Header from './Header.js';
import './App.css';
import Photos from './Photos.js';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			photos: [],
			videos: [],
		};
	}
	componentDidMount() {
		const photoUrl =
			'https://api.pexels.com/v1/search?query=work&per_page=15&page=1';
		fetch(photoUrl, {
			method: 'GET',
			headers: {
				Authorization: process.env.REACT_APP_AUTHORIZATION,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				this.setState({ photos: data.photos });
			})
			.catch(console.error);
		console.log(process.env);
	}

	render() {
		return (
			<div className='app'>
				<Header />
				<Photos photos={this.state.photos} />
			</div>
		);
	}
}

export default App;
