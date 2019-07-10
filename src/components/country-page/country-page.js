import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Breadcrumb, Button, Container} from "react-bootstrap";

import './country-page.css';

class CountryPage extends Component {

    render() {
        const {match, history, shortInfo} = this.props;

        const currentPageInfo = shortInfo.filter(
            (el) => el.id === match.params.id
        );

        //TODO delete log
        console.log(`Country page info = ${currentPageInfo}`);

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
                    {currentPageInfo.title}
                </div>
            </Container>
        )
    }
}

const mapStateToProps = ({shortInfo, fullInfo}) => {
    return {shortInfo, fullInfo}
};

export default connect(mapStateToProps)(CountryPage);