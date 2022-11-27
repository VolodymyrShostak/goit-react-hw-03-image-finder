import React from 'react';
import { WpapperLoadMoreBtn, LoadMoreBtn } from './styled.js';

export const Button = ({ onClick }) => {
  return (
    <WpapperLoadMoreBtn>
      <LoadMoreBtn
               onClick={() => onClick()}
      >Load more</LoadMoreBtn>
    </WpapperLoadMoreBtn>
  );
};
