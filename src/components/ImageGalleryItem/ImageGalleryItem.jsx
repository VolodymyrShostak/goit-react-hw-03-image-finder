import React from 'react';
import {ImageGalleryItemImage, ImageGalleryItem} from './styled.js';

export const ImageItem =( {webformatURL = '',
  largeImageURL = '',
  tags = '',
  onClick = () => {},}) => {
    return (
   
        <ImageGalleryItem>
  <ImageGalleryItemImage   src={webformatURL}
          alt={tags}
          onClick={() => onClick(largeImageURL)} />
</ImageGalleryItem>
    )
};
 

      