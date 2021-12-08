import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel, Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { listProducts, listTopProducts } from '../actions/productListActions';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';

import CarouselBlock from '../components/CarouselBlock';
import ProductSlider from '../components/ProductSlider';
import MediumContainer from '../components/MediumContainer';
import Meta from './../components/Meta';

const HomeScreen = () => {
    const dispatch = useDispatch();

    const productList = useSelector((state) => state.productList);
    const { products } = productList;

    const productTopRated = useSelector((state) => state.productTopRated);
    const { products: topProducts } = productTopRated;

    useEffect(() => {
        dispatch(listTopProducts());
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <>
            <Meta></Meta>
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
            <Fade duration={1500}>{products && <ProductSlider products={products} title='All products'></ProductSlider>}</Fade>
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
                                        <Link to='/search/nike'>
                                            <Button variant='primary'>Shop</Button>
                                        </Link>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </Fade>
            <Fade duration={1500}>{topProducts && <ProductSlider products={topProducts} title={'Top products'}></ProductSlider>}</Fade>
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
