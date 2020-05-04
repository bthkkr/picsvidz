import React from 'react';
import './Header.css';
import Nav from './Nav.js';

function Header(props) {
	return (
		<div className='header'>
			<div className='container'>
				<img
					src={process.env.PUBLIC_URL + `/images/Background.jpg`}
					alt='HeaderBackgroundImg'
					width='100%'
					height='400'
				/>
				<div className='center'>
					<div className='title'>
						<h1>PICS-VIDZ</h1>
					</div>
					<div className='text1'>
						<h2>The best collection of photos and videos</h2>
					</div>
					<div className='search'>
						<input
							type='text'
							placeholder='Search for photos and videos...'
							value={props.searchValue}
							onChange={props.handleOnChange}
						></input>

						<img
							src={process.env.PUBLIC_URL + `/images/search.png`}
							alt='SearchImg'
							onClick={props.handleSearch}
						/>
					</div>
				</div>
			</div>
			<Nav />
		</div>
	);
}

export default Header;
