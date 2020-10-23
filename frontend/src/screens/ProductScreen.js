import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button, Form } from 'react-bootstrap';
import { listProductsDetails, listProducts } from '../actions/productListActions';
import * as Icon from 'react-bootstrap-icons';
import Fade from 'react-reveal/Fade';

import Rating from '../components/rating/Rating';
import Loader from '../components/Loader';
import Message from '../components/Message';
import NarrowContainer from '../components/NarrowContainer';
import ProductSlider from '../components/ProductSlider';
import TextTransitions from '../components/transitions/TextTransitions';

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
                <Link className='btn btn-dark my-3' to='/'>
                    Go back
                </Link>
                {loading ? (
                    <Loader></Loader>
                ) : error ? (
                    <Message variant='danger'>{error}</Message>
                ) : (
                    <Fade duration={300} cascade>
                        <Row>
                            <Col md={8}>
                                <Fade duration={1000}>
                                    <Image src={product.image} alt={product.name} fluid></Image>
                                </Fade>
                            </Col>
                            <Col md={4}>
                                <ListGroup variant='flush'>
                                    <ListGroup.Item>
                                        <h3>{product.name}</h3>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Rating value={product.rating} text={` ${product.numReviews} reviews`}></Rating>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <h4>${product.price}</h4>
                                    </ListGroup.Item>
                                    <ListGroup.Item>Description: {product.description}</ListGroup.Item>
                                </ListGroup>

                                <ListGroup>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Price: </Col>
                                        </Row>
                                        <Row>
                                            <Col>{product.price}</Col>
                                        </Row>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Status: </Col>
                                        </Row>
                                        <Row>
                                            <Col>{product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</Col>
                                        </Row>
                                    </ListGroup.Item>
                                    {product.countInStock > 0 && (
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>Qty</Col>
                                                <Col>
                                                    <Form.Control
                                                        as='select'
                                                        value={qty}
                                                        onChange={(e) => setQty(e.target.value)}
                                                    >
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
                        </Row>
                        <Row>
                            <Col>
                                <TextTransitions>Similar products</TextTransitions>
                            </Col>
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
