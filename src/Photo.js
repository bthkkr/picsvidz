import React from 'react';
import './Photos.css';

function Photo({ photo }) {
	return (
		<div className='photo'>
			<img src={photo.src.medium} alt={''} />
		</div>
	);
}
export default Photo;
