import React from 'react';

import './page-navbar.css';
import {Button, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

const PageNavbar = ({title, backLink, label})=> {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand> {title}</Navbar.Brand>
            <Link to={backLink}>
                <Button variant="outline-info">
                    {label}
                </Button>
            </Link>
        </Navbar>
    )
};

export default PageNavbar;