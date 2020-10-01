import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header></Header>
      <main className='py-3'>
        <Container>
          <div className='App'>Hi</div>
        </Container>
      </main>
      <Footer></Footer>
    </>
  );
};

export default App;
