// Create image list component
// 3 necessary steps (import, create, export))

// 1. Import react

import React from 'react';
import ImageDetail from './image_detail';

// 2. Create Component

const IMAGES = [
   { title: 'pen', link:'http://dummyimage.com/600x400' },
   { title: 'pine tree', link:'http://dummyimage.com/600x400' },
   { title: 'mug', link:'http://dummyimage.com/600x400' }
];

const RenderedImages =  IMAGES.map(function(image){
   return <ImageDetail image={image} />
});

const ImageList = () => {
   return (
   <ul>
      {RenderedImages}
   </ul>
   )
}

// 3. Export Component

export default ImageList;
