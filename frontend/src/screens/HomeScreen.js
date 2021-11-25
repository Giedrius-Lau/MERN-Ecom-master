import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel, Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { listProducts } from '../actions/productListActions';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';

import Loader from '../components/Loader';
import Message from '../components/Message';
import CarouselBlock from '../components/CarouselBlock';
import ProductSlider from '../components/ProductSlider';
import MediumContainer from '../components/MediumContainer';

const HomeScreen = () => {
    const dispatch = useDispatch();

    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <>
            <Container>
                <CarouselBlock></CarouselBlock>
            </Container>
            <Fade duration={1500}>
                <MediumContainer>
                    <Row>
                        <Col md={6}>
                            <Link to='/products'>
                                <h4>Styles to Empower You</h4>
                                <img className='promo-image' src='/images/7.jpg' alt='promo-image1' />
                            </Link>
                        </Col>
                        <Col md={6}>
                            <Link to='/products'>
                                <h4>Styles to Empower You</h4>
                                <img className='promo-image' src='/images/8.jpg' alt='promo-image2' />
                            </Link>
                        </Col>
                    </Row>
                </MediumContainer>
            </Fade>
            <Fade duration={1500}>
                {loading ? <Loader></Loader> : error ? <Message variant='danger'>{error}</Message> : <ProductSlider products={products}></ProductSlider>}
            </Fade>
            <Fade duration={1500}>
                <Container>
                    <Row>
                        <Col>
                            <Carousel controls={false}>
                                <Carousel.Item>
                                    <div className='carousel-image-container'>
                                        <img className='d-block w-100' src='/images/9.jpg' alt='First slide' />
                                    </div>
                                    <Carousel.Caption>
                                        <div>
                                            <h3 className='carousel-heading'>Kybrid S2 'What The Inline'</h3>
                                        </div>

                                        <Button variant='primary'>Shop</Button>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </Fade>
            <Fade duration={1500}>
                {loading ? <Loader></Loader> : error ? <Message variant='danger'>{error}</Message> : <ProductSlider products={products}></ProductSlider>}
            </Fade>
            <Fade duration={1500}>
                <MediumContainer>
                    <Row>
                        <Col md={6}>
                            <Link to='/products'>
                                <h4>Lifestyle</h4>
                                <img className='promo-image' src='/images/4.jpg' alt='promo-image1' />
                            </Link>
                        </Col>
                        <Col md={6}>
                            <Link to='/products'>
                                <h4>Running</h4>
                                <img className='promo-image' src='/images/5.jpg' alt='promo-image2' />
                            </Link>
                        </Col>
                    </Row>
                </MediumContainer>
            </Fade>
        </>
    );
};

export default HomeScreen;
