import React from 'react';
// import sections
import PhotoCarousel from './gallery/PhotoCarousel'

const style = {
    h1: {
        margin: '0px'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
}
const Gallery = () => {
    return (
        <>
            <div style={style.container}>
                <h1 style={style.h1}> Gallery </h1>
                <p> NFTs we own/owned & more. </p>
            </div>
            <PhotoCarousel />
        </>
    );
}

export default Gallery;