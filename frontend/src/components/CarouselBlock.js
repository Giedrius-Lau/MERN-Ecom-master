import React, { useEffect, useRef } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { Power2, TimelineMax, TweenMax } from 'gsap';

const CarouselBlock = () => {
    let carousel = useRef(null);
    const carouselImage = useRef();
    const carouselHeading = useRef(null);
    const carouselParagraph = useRef();
    const carouselButton = useRef();

    useEffect(() => {
        TweenMax.to(carousel, { css: { visibility: 'visible' }, duration: 0 });
        const tl = new TimelineMax();
        tl.fromTo(
            carouselImage.current,
            { opacity: 0, y: -100, scaleX: 0.9, scaleY: 0.9 },
            { opacity: 1, y: 0, scaleX: 1, scaleY: 1, duration: 1, ease: Power2.easeInOut }
        )
            .fromTo(carouselHeading.current, { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 0.3 })
            .fromTo(carouselParagraph.current, { opacity: 0, x: -200 }, { opacity: 1, x: 0, duration: 0.3 })
            .fromTo(carouselButton.current, { opacity: 0, x: -200 }, { opacity: 1, x: 0, duration: 0.3 });
    }, [carouselHeading, carouselImage, carouselParagraph, carouselButton]);
    return (
        <>
            <div className='carousel-container' ref={(el) => (carousel = el)}>
                <Carousel controls={false} interval={30000}>
                    <Carousel.Item>
                        <div className='carousel-image-container' ref={carouselImage}>
                            <img className='d-block w-100' src='/images/1.jpg' alt='First slide' />
                        </div>
                        <Carousel.Caption>
                            <div ref={carouselHeading}>
                                <h3 className='carousel-heading'>Sneakers.</h3>
                            </div>

                            <p ref={carouselParagraph}>Up to 40% Off</p>
                            <Button ref={carouselButton} variant='primary'>
                                Shop
                            </Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='carousel-image-container'>
                            <img className='d-block w-100' src='/images/2.jpg' alt='Second slide' />
                        </div>

                        <Carousel.Caption>
                            <h3>Apple</h3>
                            <p>Apple slide.</p>
                            <Button variant='primary'>Shop</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='carousel-image-container'>
                            <img className='d-block w-100' src='/images/3.jpg' alt='Third slide' />
                        </div>

                        <Carousel.Caption>
                            <h3>Lens</h3>
                            <p>Lens slide.</p>
                            <Button variant='primary'>Shop</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
};

export default CarouselBlock;
