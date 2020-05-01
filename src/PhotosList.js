import React from 'react';
import Photo from './Photo.js';
import './Photos.css'


 
 function PhotosList({ photos }) {
		return (
			<div className='data-grid'>
               
				{photos.map((photo, index) => (
					<Photo key={index} photo={photo} />
				))}
			</div>
		);
 };
export default PhotosList;
