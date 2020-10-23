import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import { listProducts } from '../actions/productListActions';
import TextTransitions from '../components/transitions/TextTransitions';
import Fade from 'react-reveal/Fade';

import Product from '../components/product/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';

const ProductListScreen = () => {
    const dispatch = useDispatch();

    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <>
            <TextTransitions>Latest products</TextTransitions>
            {loading ? (
                <Loader></Loader>
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <Fade duration={300} cascade>
                    <Row>
                        {products.map((product) => {
                            return (
                                <Col key={product._id} sm={6} md={4} lg={3} xl={2}>
                                    <Product product={product}></Product>
                                </Col>
                            );
                        })}
                    </Row>
                </Fade>
            )}
        </>
    );
};

export default ProductListScreen;
