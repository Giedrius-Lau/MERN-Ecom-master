import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col } from 'react-bootstrap';
import { listProducts } from '../actions/productListActions';
import TextTransitions from '../components/transitions/TextTransitions';
import Fade from 'react-reveal/Fade';

import Loader from '../components/Loader';
import Message from '../components/Message';
import CarouselBlock from '../components/CarouselBlock';
import ProductSlider from '../components/ProductSlider';

const HomeScreen = () => {
    const dispatch = useDispatch();

    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

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
                    <ProductSlider products={products}></ProductSlider>
                </Fade>
            )}
        </>
    );
};

export default HomeScreen;
