import React from "react";
import ErrorIndicator from "../error-indicator";
import CustomSpinner from "../custom-spinner";
import {Card, Container} from "react-bootstrap";
import PageNavbar from "../page-navbar";

const CityPage = ({match, data, loading, error}) => {

    return error ?
        <ErrorIndicator/> :
        loading ?
            <CustomSpinner/> :
            <Container>
                <PageNavbar title={data.title} backLink={`/${match.params.country}`}/>
                <Card>
                    <Card.Img variant="top" src={data.img[0]}/>
                    <Card.Body>
                        {data.description}
                    </Card.Body>
                </Card>
            </Container>
};

export default CityPage;