import React from "react";
import ErrorIndicator from "../error-indicator";
import CustomSpinner from "../custom-spinner";
import {Card, Container} from "react-bootstrap";
import PageNavbar from "../page-navbar";
import PhotoGallery from "../photo-gallery";

const CityPage = ({match, data, loading, error}) => {

    return error ?
        <ErrorIndicator/> :
        loading ?
            <CustomSpinner/> :
            <Container>
                <PageNavbar title={data.title} backLink={`/${match.params.country}`} label={"Back to the country"}/>
                <Card>
                    <Card.Img variant="top" src={data.images[0].img}/>
                    <Card.Body>
                        {data.description}
                    </Card.Body>
                    <PhotoGallery data={data.images} modalTitle={data.title}/>
                </Card>
            </Container>
};

export default CityPage;