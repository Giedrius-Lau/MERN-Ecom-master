import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductListingScreen from './screens/ProductListingScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import OrderListScree from './screens/OrderListScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import ProductListScreen from './screens/ProductListScreen';

const App = () => {
    return (
        <Router onUpdate={() => window.scrollTo(0, 0)}>
            <ScrollToTop />
            <Header />
            <main>
                <Container>
                    <Route path='/register' component={RegisterScreen} exact />
                    <Route path='/profile' component={ProfileScreen} exact />
                    <Route path='/login' component={LoginScreen} exact />
                    <Route path='/product/:id' component={ProductScreen} />
                    <Route path='/cart/:id?' component={CartScreen}></Route>
                    <Route path='/shipping' component={ShippingScreen}></Route>
                    <Route path='/payment' component={PaymentScreen}></Route>
                    <Route path='/placeorder' component={PlaceOrderScreen}></Route>
                    <Route path='/order/:id' component={OrderScreen} />
                    <Route path='/admin/orderlist' component={OrderListScree} />
                    <Route path='/admin/userlist' component={UserListScreen} />
                    <Route path='/admin/productlist' exact component={ProductListScreen} />
                    <Route path='/admin/productlist/page/:pageNumber' exact component={ProductListScreen} />
                    <Route path='/admin/user/:id/edit' component={UserEditScreen} />
                    <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
                    <Route path='/products' component={ProductListingScreen} />
                    <Route path='/search/:keyword' exact component={ProductListingScreen} />
                    <Route path='/search/:keyword/page/:pageNumber' component={ProductListingScreen} />
                    <Route path='/page/:pageNumber' component={ProductListingScreen} />
                    <Route path='/' component={HomeScreen} exact />
                </Container>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
