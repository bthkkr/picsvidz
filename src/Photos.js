import React from 'react';
import PhotosHeader from './PhotosHeader';
import PhotosList from './PhotosList';

function Photos ({photos}) {
	return (
		<div>
			<PhotosHeader />
			<PhotosList photos={photos} />
		</div>
	);
}

export default Photos;
