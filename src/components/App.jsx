import React from 'react';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { GeterPictures } from './api.jsx';
import { Searchbar } from './Searchbar/Searchbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends React.Component {
  state = {
    pictures: [],
    keyWord: '',
    page: 1,
    modalImg: '',
    loader: false,
    hideBtn: true,
    total: null,
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

  render = () => {
    return (
      <>
        <Searchbar onSubmit={this.onSearchImage} />
        <ToastContainer autoClose={3000} />
        <>
          <ImageGallery pictures={this.state.pictures} />
         
            <Button onClick={this.onClickLoadMore} />
          
        </>
      </>
    );
  };
}
