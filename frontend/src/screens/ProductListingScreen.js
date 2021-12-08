import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import { listProducts } from '../actions/productListActions';
import Fade from 'react-reveal/Fade';

import Product from '../components/product/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import NarrowContainer from '../components/NarrowContainer';
import Paginate from '../components/Paginate';

const ProductListingScreen = ({ match }) => {
    const keyword = match.params.keyword;

    const pageNumber = match.params.pageNumber || 1;

    const dispatch = useDispatch();

    const productList = useSelector((state) => state.productList);
    const { loading, error, products, pages, page } = productList;

    useEffect(() => {
        dispatch(listProducts(keyword, pageNumber));
    }, [dispatch, keyword, pageNumber]);

    return (
        <>
            <div className='product-list'>
                {loading ? (
                    <Loader></Loader>
                ) : error ? (
                    <Message variant='danger'>{error}</Message>
                ) : (
                    <Fade duration={300} cascade>
                        <NarrowContainer>
                            {keyword ? (
                                <h4>
                                    Search results for: <strong>{keyword}</strong>
                                </h4>
                            ) : (
                                <h3>Latest products</h3>
                            )}
                            <Row>
                                {products.map((product) => {
                                    return (
                                        <Col key={product._id} sm={6} md={4} lg={4} xl={4}>
                                            <Product product={product}></Product>
                                        </Col>
                                    );
                                })}
                            </Row>
                            <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''}></Paginate>
                        </NarrowContainer>
                    </Fade>
                )}
            </div>
        </>
    );
};

export default ProductListingScreen;
