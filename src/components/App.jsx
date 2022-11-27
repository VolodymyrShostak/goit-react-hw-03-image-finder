import React from 'react';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { GeterPictures } from './api.jsx';
import { Searchbar } from './Searchbar/Searchbar';
// import { Audio } from 'react-loader-spinner';
import { Modal } from './Modal/Modal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends React.Component {
  state = {
    pictures: [],
    keyWord: '',
    modalImg: '',
    total: 0,
    page: 1,
    loader: false,
    hideBtn: true,
  };

  componentDidUpdate(prevProps, prevState) {
    const { keyWord, page } = this.state;
    if (prevState.page !== page || prevState.keyWord !== keyWord) {
      return this.loadSearchingImg();
    }
  }

  onSearchImage = keyWord => {
    return this.setState({ keyWord: keyWord, page: 1, pictures: [] });
  };

  loadSearchingImg = async () => {
    this.setState({ loader: true, hideBtn: true });
    const { keyWord, page } = this.state;
    const data = await GeterPictures(keyWord, page);
    this.setState(prevState => ({
      pictures: [...prevState.pictures, ...data.hits],
      loader: false,
      total: data.totalHits,
    }));
  };

  onClickLoadMore = () => {
    this.setState({ page: this.state.page + 1 });
  };
  onModalOpen = url => {
    this.setState({ modalImg: url });
  };

  onModalClose = () => {
    this.setState({
      modalImg: '',
    });
  };

  render = () => {
    return (
      <>
        <Searchbar onSubmit={this.onSearchImage} />
        <ToastContainer autoClose={3000} />
        <>
          <ImageGallery
            pictures={this.state.pictures}
            onClick={this.onModalOpen}
          />
          <Button onClick={this.onClickLoadMore} />
          
          {this.state.modalImg && (
            <Modal closeModal={this.onModalClose} url={this.state.modalImg} />
          )}
        </>
      </>
    );
  };
}
