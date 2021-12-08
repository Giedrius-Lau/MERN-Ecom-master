import React from 'react';
import Slider from 'react-slick';

import Product from '../components/product/Product';
import NarrowContainer from './NarrowContainer';

const ProductSlider = ({ products, title }) => {
    const settings = {
        infinite: true,
        speed: 500,
        lazyLoad: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <NarrowContainer>
                <h3 className='slider-heading'>{title}</h3>

                <Slider {...settings}>
                    {products.map((product, key) => {
                        return <Product key={key} product={product}></Product>;
                    })}
                </Slider>
            </NarrowContainer>
        </>
    );
};

export default ProductSlider;
