import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Rating from '../rating/Rating';
import './Product.scss';

const Product = ({ product }) => {
    return (
        <Link to={`/product/${product._id}`}>
            <Card className='my-3 product-link'>
                <Card.Img src={product.image} variant='top'></Card.Img>
                <Card.Body>
                    <div>
                        <Card.Text as='div'>
                            <Rating value={product.rating} color={'gray'}></Rating>
                        </Card.Text>
                        <Card.Title as='div'>
                            <span>{product.name}</span>
                        </Card.Title>
                    </div>
                    <Card.Text>${product.price}</Card.Text>
                </Card.Body>
            </Card>
        </Link>
    );
};

Product.propTypes = {
    product: PropTypes.object.isRequired,
};

export default Product;
