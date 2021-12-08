import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description}></meta>
            <meta name='keywords' content={keywords}></meta>
        </Helmet>
    );
};

Meta.defaultProps = {
    title: 'Welcome to MERN shop',
    description: 'We sell everything',
    keywords: 'all seeing eye',
};

export default Meta;
