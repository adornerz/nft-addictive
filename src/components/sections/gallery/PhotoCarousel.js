import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import galleryData from './gallery.data';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const style = {
  title: {
    fontSize: '12px',
    height: '2rem',
    margin: '0px',
    paddingBottom: '2rem'
  },
  comment: {
    fontSize: '10px'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: '3px',
  },
  image: {
    maxHeight: '700px'
  }
}

const PhotoCarousel = () => {
  return (
    <Carousel responsive={responsive}>
      {galleryData.map(({ imgTitle, title, comment }, i) => (
        <div style={style.container}>
          <img style={style.image} src={`assets/images/${imgTitle}`} />
          <h1 style={style.title}> {title} </h1>
          <p style={style.comment}> {comment} </p>
        </div>
      ))
      }
    </Carousel >
  );
}

export default PhotoCarousel