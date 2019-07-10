import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Breadcrumb, Button, Container} from "react-bootstrap";
import {withRouter} from "react-router-dom";

import './country-page.css';
import {compose} from "redux";
import withDataService from "../hoc/with-data-service";

class CountryPage extends Component {

    componentWillMount() {

    }

    //TODO how to update after history push
    render() {
        const {match, history, shortInfo} = this.props;

        //TODO delete log
        console.log(`Country page rendered with short info =`);
        console.log(shortInfo);
        const data = shortInfo.filter(
            (el) => el.id === match.params.id
        );
        console.log('DATA= ');
        console.log(data[0]);

        if (data[0] === undefined) {
            return <div></div>
        }

        return (
            <Container>
                <Breadcrumb>
                    <div>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>{match.params.id}</Breadcrumb.Item>
                    </div>
                    <Button variant="outline-info"
                            onClick={() => history.goBack()}>
                        Back
                    </Button>
                </Breadcrumb>
                <div>
                    {data[0].title}
                </div>
            </Container>
        )
    }
}

const mapStateToProps = ({shortInfo, fullInfo, countryPageInfo}) => {
    return {shortInfo, fullInfo, countryPageInfo}
};

export default compose(
    withRouter,
    withDataService(),
    connect(mapStateToProps))(CountryPage);