import React from 'react';
import {Spinner} from "react-bootstrap";

import './custom-spinner.css';

const CustomSpinner = () => {
    return (
        <div className="custom-spinner"><Spinner animation="grow" variant="info"/></div>
    )
};

export default CustomSpinner;