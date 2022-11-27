import React from 'react';
import {Overlay,ModalView} from './styled'

export const Modal = ({ url, closeModal=()=>{} }) => {
  return (
    <Overlay>
          <ModalView closeModal={closeModal()}>
        <img src={url} alt="" />
      </ModalView>
    </Overlay>
  );
};