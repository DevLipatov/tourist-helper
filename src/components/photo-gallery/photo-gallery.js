import React, {useState} from 'react';
import {Image} from "react-bootstrap";

import './photo-gallery.css';
import ImageModal from "../image-modal";

const PhotoGallery = ({data, modalTitle}) => {

    const [show, setShow] = useState(false);
    const [src, setSrc] = useState(null);

    const items = data.map((el) =>
        <Image src={el.img}
               key={el.id}
               fluid
               onClick={() => {
                   setSrc(el.img);
                   setShow(true)
               }}/>);

    return <div className="city-gallery-container">
        {items}
        <ImageModal show={show} setShow={setShow} imgSrc={src} title={modalTitle}/>
    </div>

};

export default PhotoGallery;