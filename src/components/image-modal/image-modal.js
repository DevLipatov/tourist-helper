import React from 'react';
import {Button, Image, Modal} from "react-bootstrap";

import './image-modal.css';

const ImageModal = ({imgSrc, show, setShow, title}) => {

    const handleClose = () => setShow(false);

    return (
        <Modal show={show} onHide={handleClose} className="image-gallery-modal" size="xl" centered>
            <Modal.Header>
                <h3>{title}</h3>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
            </Modal.Header>
            <Modal.Body><Image src={imgSrc} fluid/></Modal.Body>

        </Modal>
    )
};

export default ImageModal;