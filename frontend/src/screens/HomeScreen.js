import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import { listProducts } from '../actions/productListActions';
import TextTransitions from '../components/transitions/TextTransitions';
import Fade from 'react-reveal/Fade';
import Slider from 'react-slick';

import Product from '../components/product/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import CarouselBlock from '../components/CarouselBlock';

const HomeScreen = () => {
    const dispatch = useDispatch();

    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    const settings = {
        infinite: true,
        speed: 500,
        lazyLoad: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        centerMode: true,
        initialSlide: 6,
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
            <CarouselBlock></CarouselBlock>
            <TextTransitions>Latest products</TextTransitions>
            {loading ? (
                <Loader></Loader>
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <Fade duration={300} cascade>
                    <Col>
                        <Slider {...settings}>
                            {products.map((product, key) => {
                                return <Product key={key} product={product}></Product>;
                            })}
                        </Slider>
                    </Col>
                </Fade>
            )}
        </>
    );
};

export default HomeScreen;
