import React from 'react';
import {withRouter} from "react-router";
import {Link} from "react-router-dom";
import {Button, Modal} from 'react-bootstrap';

import './city-page.css';

const CityPage = ({match}) => {

    return (
        <div>
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Modal title</Modal.Title>
                    <Link to={`/${match.params.id}`}>
                        <Button variant="secondary">Close</Button>
                    </Link>
                </Modal.Header>

                <Modal.Body>
                    <p>Modal body text goes here.</p>
                </Modal.Body>
            </Modal.Dialog>
        </div>
    )
};

export default withRouter(CityPage);