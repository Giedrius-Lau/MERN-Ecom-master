import React, { useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Navbar, Nav } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

const Header = () => {
    const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark');
    let theme = localStorage.getItem('theme');

    if (theme === 'dark') enableDarkMode();

    const toggleDarkTheme = () => {
        setDarkMode(!darkMode);
        theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    };

    function enableDarkMode() {
        localStorage.setItem('theme', 'dark');
        document.body.classList.add('dark-mode');
    }

    function disableDarkMode() {
        localStorage.setItem('theme', 'light');
        document.body.classList.remove('dark-mode');
    }

    window.matchMedia('(prefers-color-scheme: dark)').addListener((e) => (e.matches ? enableDarkMode() : disableDarkMode()));
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
                            <div className='dark-mode' onClick={() => toggleDarkTheme()}>
                                {darkMode ? <Icon.Moon size={36}></Icon.Moon> : <Icon.Sun size={36}></Icon.Sun>}
                            </div>
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
