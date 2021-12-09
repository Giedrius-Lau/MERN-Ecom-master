import React from 'react';
import { Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import DarkMode from './DarkMode';
import * as Icon from 'react-bootstrap-icons';
import { logout } from '../actions/userActions';
import SearchBox from './SearchBox';

import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const logoutHandler = () => {
        dispatch(logout());
    };

    return (
        <header>
            <Navbar fixed='top'>
                <div className='navbar-container'>
                    <LinkContainer to='/'>
                        <Navbar.Brand className='logo'>MERN Shop</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Route render={({ history }) => <SearchBox history={history}></SearchBox>}></Route>
                        <Nav className='ml-auto'>
                            <DarkMode></DarkMode>

                            {userInfo ? (
                                <NavDropdown title={userInfo.name} id='username'>
                                    <LinkContainer to='/profile'>
                                        <NavDropdown.Item>Profile</NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Item onClick={logoutHandler}>Log Out</NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <LinkContainer to='/login'>
                                    <Nav.Link>
                                        <Icon.Person size={20}></Icon.Person>{' '}
                                    </Nav.Link>
                                </LinkContainer>
                            )}

                            {userInfo && userInfo.isAdmin && (
                                <NavDropdown title='Admin' id='adminmenu'>
                                    <LinkContainer to='/admin/userlist'>
                                        <NavDropdown.Item>Users</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to='/admin/productlist'>
                                        <NavDropdown.Item>Products</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to='/admin/orderlist'>
                                        <NavDropdown.Item>Orders</NavDropdown.Item>
                                    </LinkContainer>
                                </NavDropdown>
                            )}

                            <LinkContainer to='/cart'>
                                <Nav.Link>
                                    <Icon.Bag size={20}></Icon.Bag>
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
