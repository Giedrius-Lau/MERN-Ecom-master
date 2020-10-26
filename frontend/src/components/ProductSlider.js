import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { TimelineMax, TweenMax } from 'gsap';

import Product from '../components/product/Product';
import NarrowContainer from './NarrowContainer';

const ProductSlider = (props) => {
    let slider = useRef(null);

    useEffect(() => {
        TweenMax.to(slider, { css: { visibility: 'visible' }, duration: 0 });
        const tl = new TimelineMax();
        tl.fromTo(slider.current, { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 0.3 });
    }, [slider]);

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
                <h3 className='slider-heading'>Latest products</h3>

                <Slider {...settings} ref={(el) => (slider = el)}>
                    {props.products.map((product, key) => {
                        return <Product key={key} product={product}></Product>;
                    })}
                </Slider>
            </NarrowContainer>
        </>
    );
};

export default ProductSlider;
