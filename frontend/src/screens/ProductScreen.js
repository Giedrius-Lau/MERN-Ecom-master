import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Image, ListGroup, Button, Form } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

import { listProductsDetails, listProducts, createProductReview } from '../actions/productListActions';
import { PRODUCT_DETAILS_RESET, PRODUCT_CREATE_REVIEW_RESET } from '../constants/productConstants';

import Rating from '../components/rating/Rating';
import Loader from '../components/Loader';
import Message from '../components/Message';
import NarrowContainer from '../components/NarrowContainer';
import ProductSlider from '../components/ProductSlider';
import Meta from './../components/Meta';

const ProductScreen = ({ history, match }) => {
    const [qty, setQty] = useState(1);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const dispatch = useDispatch();

    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    const productCreateReview = useSelector((state) => state.productCreateReview);
    const { error: errorProductReview, success: successProductReview } = productCreateReview;

    const { userInfo } = useSelector((state) => state.userLogin);

    useEffect(() => {
        if (successProductReview) {
            setRating(0);
            setComment('');
            dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
        }

        dispatch({ type: PRODUCT_DETAILS_RESET });

        dispatch(listProductsDetails(match.params.id));
    }, [dispatch, match, successProductReview]);

    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`);
    };

    const productList = useSelector((state) => state.productList);
    const { products } = productList;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(
            createProductReview(match.params.id, {
                rating,
                comment,
            })
        );
    };

    return (
        <>
            <NarrowContainer>
                {loading ? (
                    <Loader></Loader>
                ) : error ? (
                    <Message variant='danger'>{error}</Message>
                ) : (
                    <Fade duration={300} cascade>
                        <Meta title={product.name} />
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
                                        <Rating value={product.rating} text={` ${product.numReviews} reviews`}></Rating>
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
                                    <ListGroup.Item>Description: {product.description}</ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <h2>Reviews</h2>
                                {product.reviews.length === 0 && <Message>No reviews</Message>}
                                <ListGroup variant='flush'>
                                    {product.reviews.map((review) => (
                                        <ListGroup.Item key={review._id}>
                                            <strong>{review.name}</strong>
                                            <Rating value={review.rating}></Rating>
                                            <p>{review.createdAt.substring(0, 10)}</p>
                                            <p>{review.comment}</p>
                                        </ListGroup.Item>
                                    ))}
                                    <ListGroup.Item>
                                        <h2>Write a Review</h2>
                                        {errorProductReview && <Message variant='danger'>{errorProductReview}</Message>}
                                        {userInfo ? (
                                            <Form onSubmit={submitHandler}>
                                                <Form.Group controlId='rating'>
                                                    <Form.Label>Rating</Form.Label>
                                                    <Form.Control as='select' value={rating} onChange={(e) => setRating(e.target.value)}>
                                                        <option value=''>Select...</option>
                                                        <option value='1'>1 - Poor</option>
                                                        <option value='2'>2 - Fair</option>
                                                        <option value='3'>3 - Good</option>
                                                        <option value='4'>4 - Very Good</option>
                                                        <option value='5'>5 - Excelent</option>
                                                    </Form.Control>
                                                </Form.Group>
                                                <Form.Group controlId='comment'>
                                                    <Form.Label>Comment</Form.Label>
                                                    <Form.Control
                                                        as='textarea'
                                                        row={3}
                                                        value={comment}
                                                        onChange={(e) => setComment(e.target.value)}
                                                    ></Form.Control>
                                                </Form.Group>
                                                <Button type='submit' variant='primary'>
                                                    Submit
                                                </Button>
                                            </Form>
                                        ) : (
                                            <p>
                                                Please <Link to='login'>sign in</Link> to write a review.
                                            </p>
                                        )}
                                    </ListGroup.Item>
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
