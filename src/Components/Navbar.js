import React from 'react'

function Navbar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">APP REDUX</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link  className='nav-link' to="/">Home</Link>
                        <Link className='nav-link' to="/posts">Posts</Link>
                        <Link className='nav-link' to="/addPost">AddPost</Link>
                        <Link className='nav-link' to="/profile">Profile</Link>
                        <Link className='nav-link' to="/signIn">SignIn</Link>
                        {!auth && <Link className='nav-link' to="/login">Login</Link>}
                    </Nav>
                    {auth && <Button className='btn btn-primary' onClick={()=>dispatch(changeAuth(!auth))}> {auth? 'Logout' : 'Login'} </Button>}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navbar
