import React from 'react';
import Photo from './Photo.js';
import './Photos.css'


 
 function PhotosList({ photos }) {
	 if (!photos.length) {
			return <h2>No Photos found!</h2>;
		}

		return (
			<div className='data-grid'>
               
				{photos.map((photo, index) => (
					<Photo key={index} photo={photo} />
				))}
			</div>
		);
 };
export default PhotosList;
