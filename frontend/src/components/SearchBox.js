import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

const SearchBox = ({ history }) => {
    const [keyword, setKeyword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        if (keyword.trim()) {
            history.push(`/search/${keyword}`);
            setKeyword('');
        } else {
            history.push('/products');
        }
    };

    return (
        <Form onSubmit={submitHandler} inline className='search-form'>
            <Form.Control
                type='text'
                name='q'
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder='Search Products'
                className=''
            ></Form.Control>
            <Button type='submit' variant='secondary' className='search-button'>
                <Icon.Search size={18}></Icon.Search>
            </Button>
        </Form>
    );
};

export default SearchBox;
