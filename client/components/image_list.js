// Create image list component
// 3 necessary steps (import, create, export))

// 1. Import react

import React from 'react';
import ImageDetail from './image_detail';

// 2. Create Component

const IMAGES = [
   { title: 'pen' },
   { title: 'pine tree' },
   { title: 'mug' }
]

const ImageList = () => {
   return (
   <ul>
      <ImageDetail />
   </ul>
   )
}

// 3. Export Component

export default ImageList;
