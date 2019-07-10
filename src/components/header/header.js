import React from 'react';
import {Container, Navbar} from "react-bootstrap";

import './header.css'

const Header = () => {
    return (
        <Container>
            <Navbar expand="lg" bg="light">
                <Navbar.Brand href="/">
                    Tourist helper
                </Navbar.Brand>
            </Navbar>
        </Container>

    )
};

export default Header;