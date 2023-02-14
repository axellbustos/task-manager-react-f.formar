import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <Navbar  expand="lg" className="bg-sky-600 ">
      <Container className="flex !justify-start ">
        <Navbar.Brand href="/" className="text-white">Proyects manager</Navbar.Brand>
      </Container>
      
    </Navbar>
  )
}
