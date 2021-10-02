
import React from 'react'
import { Nav, Navbar, Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { changeAuth } from '../Redux/Slice'

function Navbars() {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Welcom</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link  className='nav-link' to="/">Home</Link>
                        <Link className='nav-link' to="/signIn">SignIn</Link>
                        {!auth && <Link className='nav-link' to="/login">Login</Link>}
                        <Link className='nav-link' to="/profile">Profile</Link>
                    </Nav>
                    {auth && <Button className='btn btn-primary' onClick={()=>dispatch(changeAuth(!auth))}> {auth? 'Logout' : 'Login'} </Button>}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navbars
