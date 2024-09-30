import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
    <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <i className="fa-solid fa-bag-shopping fa-lg" style={{color: "#000000",}} />
            {' '}
            Redux Cart
          </Navbar.Brand>
          <div className='d-flex'>
            {/* <div className='d-flex'>
                <input type="text" className='form-control' />
                <button className='btn btn-success mx-3'>Search</button>
            </div> */}
            <Link to={'/wish'} className='btn btn-outline-secondary me-4'>
            <i className="fa-solid fa-md fa-heart" style={{color: "#152239",}} />
            {' '}
                Wishlist            
            </Link>
            <Link to={'/cart'} className='btn btn-outline-secondary'>
            <i className="fa-solid fa-md fa-cart-shopping" style={{color: "#152239",}} />
            {' '}
                Cart           
            </Link>
          </div>
        </Container>
      </Navbar>
    </>
  )
}

export default Header