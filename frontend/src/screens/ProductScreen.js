import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Image, ListGroup, Button, Form } from 'react-bootstrap';
import { listProductsDetails, listProducts } from '../actions/productListActions';
import * as Icon from 'react-bootstrap-icons';
import Fade from 'react-reveal/Fade';

import Rating from '../components/rating/Rating';
import Loader from '../components/Loader';
import Message from '../components/Message';
import NarrowContainer from '../components/NarrowContainer';
import ProductSlider from '../components/ProductSlider';

const ProductScreen = ({ history, match }) => {
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();

    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        dispatch(listProductsDetails(match.params.id));
    }, [dispatch, match]);

    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`);
    };

    const productList = useSelector((state) => state.productList);
    const { products } = productList;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <>
            <NarrowContainer>
                {loading ? (
                    <Loader></Loader>
                ) : error ? (
                    <Message variant='danger'>{error}</Message>
                ) : (
                    <Fade duration={300} cascade>
                        <Row>
                            <Col md={7}>
                                <Fade duration={300}>
                                    <div className='image-container'>
                                        <Image src={product.image} alt={product.name} fluid></Image>
                                    </div>
                                </Fade>
                            </Col>
                            <Col md={5}>
                                <ListGroup variant='flush'>
                                    <ListGroup.Item>
                                        <h3>{product.name}</h3>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <h4>${product.price}</h4>
                                    </ListGroup.Item>
                                </ListGroup>

                                <ListGroup>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Status: </Col>

                                            <Col>{product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</Col>
                                        </Row>
                                    </ListGroup.Item>
                                    {product.countInStock > 0 && (
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>Qty</Col>
                                                <Col>
                                                    <Form.Control as='select' value={qty} onChange={(e) => setQty(e.target.value)}>
                                                        {[...Array(product.countInStock).keys()].map((x) => (
                                                            <option key={x + 1} value={x + 1}>
                                                                {x + 1}
                                                            </option>
                                                        ))}
                                                    </Form.Control>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    )}
                                    <ListGroup.Item>
                                        <Button
                                            variant='dark'
                                            onClick={addToCartHandler}
                                            className='btn-block'
                                            type='button'
                                            disabled={product.countInStock === 0}
                                        >
                                            Add To Cart
                                            <Icon.BagPlus size={18}></Icon.BagPlus>
                                        </Button>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col>
                                <ListGroup className='description'>
                                    <ListGroup.Item>
                                        <Rating value={product.rating} text={` ${product.numReviews} reviews`}></Rating>
                                    </ListGroup.Item>
                                    <ListGroup.Item>Description: {product.description}</ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <ProductSlider products={products}></ProductSlider>
                            </Col>
                        </Row>
                    </Fade>
                )}
            </NarrowContainer>
        </>
    );
};

export default ProductScreen;
