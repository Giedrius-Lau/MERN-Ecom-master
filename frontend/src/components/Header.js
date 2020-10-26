import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Navbar, Nav } from 'react-bootstrap';
import DarkMode from './DarkMode';
import * as Icon from 'react-bootstrap-icons';

const Header = () => {
    return (
        <header>
            <Navbar fixed='top' expand='lg' collapseOnSelect>
                <div className='navbar-container'>
                    <LinkContainer to='/'>
                        <Navbar.Brand className='logo'>MERN Shop</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ml-auto'>
                            <LinkContainer to='/products'>
                                <Nav.Link>
                                    <Icon.Search size={26}></Icon.Search>{' '}
                                </Nav.Link>
                            </LinkContainer>
                            <DarkMode></DarkMode>
                            <LinkContainer to='/login'>
                                <Nav.Link>
                                    <Icon.Person size={26}></Icon.Person>{' '}
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/cart'>
                                <Nav.Link>
                                    <Icon.Bag size={26}></Icon.Bag>
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </header>
    );
};

export default Header;
