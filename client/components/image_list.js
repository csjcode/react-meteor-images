// Create image list component
// 3 necessary steps (import, create, export))

// 1. Import react

import React from 'react';
import ImageDetail from './image_detail';

// 2. Create Component

const ImageList = (props) => {
   const RenderedImages =  props.images.map(image =>
      <ImageDetail key={image.title} image={image} />
   );

   return (
      <ul className="media-list list-group">
         {RenderedImages}
      </ul>
   );
};

// 3. Export Component

export default ImageList;
