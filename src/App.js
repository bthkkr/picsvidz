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
			searchValue: '',
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
	handleOnChange = (event) => {
	//console.log('hi from OnChange', event.target.value);
		// const inputValue = event.target.value;
		this.setState({ searchValue: event.target.value });
	};

	handleSearch = () => {
		this.makeApiCall(this.state.searchValue);
	};

	makeApiCall = (searchInput) => {
		var searchUrl = `https://api.pexels.com/v1/search?query=${searchInput}&per_page=15&page=1`;
		fetch(searchUrl, {
			method: 'GET',
			headers: {
				Authorization: process.env.REACT_APP_AUTHORIZATION,
			},
		})
			.then((response) => {
				return response.json();
			})
			.then((jsonData) => {
				console.log(jsonData.photos);
				this.setState({ photos: jsonData.photos });
			});
	};

	render() {
		
		return (
			<div className='app'>
				<Header
					// photos={this.sortPhotos(filteredPhotos)}
					// handleOnChange={(event) => this.handleOnChange(event)}
					handleOnChange={this.handleOnChange}
					searchValue={this.state.searchValue}
					handleSearch ={this.handleSearch}
				/>
				<Photos photos={this.state.photos} />
			</div>
		);
	}
}

export default App;
