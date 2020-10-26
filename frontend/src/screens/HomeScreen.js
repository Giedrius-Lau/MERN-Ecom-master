import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productListActions';
import Fade from 'react-reveal/Fade';

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
            <CarouselBlock></CarouselBlock>
            <Fade duration={3000}>
                <MediumContainer></MediumContainer>
            </Fade>
            {loading ? (
                <Loader></Loader>
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <ProductSlider products={products}></ProductSlider>
            )}
        </>
    );
};

export default HomeScreen;
