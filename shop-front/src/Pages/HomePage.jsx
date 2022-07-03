import React, { useState } from 'react'
import { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Product from '../Components/Product'
// import products from '../products'
import axios from 'axios';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(()=> {
    const fetchProducts = async () =>{
      const {data} = await axios.get('/api/products');
      setProducts(data);
    }
    fetchProducts()
  },[])


  return (
    <>
      {/* <Link to='/' className='btn btn-light'>
        Go Back
      </Link> */}
    
    <h1>Latest Products</h1>
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
        {/* <Paginate
          pages={pages}
          page={page}
          keyword={keyword ? keyword : ''}
        /> */}
   
  </>
  )
}

export default HomePage