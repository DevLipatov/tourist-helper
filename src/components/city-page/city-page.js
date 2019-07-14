import React from "react";
import {Link} from "react-router-dom";
import ErrorIndicator from "../error-indicator";
import CustomSpinner from "../custom-spinner";
import {Button, Card, Container, Navbar} from "react-bootstrap";

const CityPage = ({match, data, loading, error}) => {

    return error ?
        <ErrorIndicator/> :
        loading ?
            <CustomSpinner/> :
            <Container>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand> {data.title}</Navbar.Brand>
                    <Link to={`/${match.params.country}`}>
                        <Button variant="outline-info">
                            Back
                        </Button>
                    </Link>
                </Navbar>
                <Card>
                    <Card.Img variant="top" src={data.img[0]}/>
                    <Card.Body>
                        {data.description}
                    </Card.Body>
                </Card>
            </Container>
};

export default CityPage;