import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselBlock = () => {
  return (
    <>
      <Carousel controls='false' interval='30000'>
        <Carousel.Item>
          <img className='d-block w-100' src='/images/1.jpg' alt='First slide' />
          <Carousel.Caption>
            <h3>Camera</h3>
            <p>Camera slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src='/images/3.jpg' alt='Second slide' />

          <Carousel.Caption>
            <h3>Apple</h3>
            <p>Apple slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src='/images/2.jpg' alt='Third slide' />

          <Carousel.Caption>
            <h3>Lens</h3>
            <p>Lens slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CarouselBlock;
