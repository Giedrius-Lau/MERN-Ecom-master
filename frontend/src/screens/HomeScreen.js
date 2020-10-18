import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import { listProducts } from '../actions/productListActions';
import TextTransitions from '../components/transitions/TextTransitions';
import Fade from 'react-reveal/Fade';

import Product from '../components/product/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <TextTransitions>Latest producst</TextTransitions>
      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Fade duration={300} cascade>
          <Row>
            {products.map((product) => {
              return (
                <Col key={product._id} sm={12} md={6} lg={4} xl={4}>
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

export default HomeScreen;
