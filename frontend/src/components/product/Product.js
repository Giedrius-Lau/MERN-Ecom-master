import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Rating from '../rating/Rating';
import './Product.scss';

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top'></Card.Img>
      </Link>
      <Card.Body>
        <div>
          <Link to={`/product/${product._id}`}>
            <Card.Title as='div'>
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>
          <Card.Text as='div'>
            <Rating value={product.rating} color={'gold'}></Rating>
          </Card.Text>
        </div>
        <Card.Text as='h3' style={{ marginLeft: '10px' }}>
          ${product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
