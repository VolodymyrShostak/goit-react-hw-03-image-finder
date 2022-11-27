import React from 'react';
import { ImageItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Wrapper } from './styled';

export const ImageGallery = ({ pictures, onClick = () => { } }) => {
    return (
      <Wrapper>
        {pictures.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
            onClick={onClick}
          />
        ))}
      </Wrapper>
    );
};
