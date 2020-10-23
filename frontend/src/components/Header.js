import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Navbar, Nav } from 'react-bootstrap';
import DarkMode from './DarkMode';
import * as Icon from 'react-bootstrap-icons';

const Header = () => {
    return (
        <header>
            <Navbar fixed='top' expand='lg' collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand className='logo'>MERN Shop</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ml-auto'>
                            <LinkContainer to='/products'>
                                <Nav.Link>
                                    <Icon.Search size={36}></Icon.Search>{' '}
                                </Nav.Link>
                            </LinkContainer>
                            <DarkMode></DarkMode>
                            <LinkContainer to='/login'>
                                <Nav.Link>
                                    <Icon.PersonFill size={36}></Icon.PersonFill>{' '}
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/cart'>
                                <Nav.Link>
                                    <Icon.BagFill size={36}></Icon.BagFill>
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
