import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Container } from 'react-bootstrap';
import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ProductDetailPage from './Pages/ProductDetailPage';

function App() {
  return (
    <Fragment>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/product/:id' element={<ProductDetailPage />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    
    </Fragment>
  );
}

export default App;
