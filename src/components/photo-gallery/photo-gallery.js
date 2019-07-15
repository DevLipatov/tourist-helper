import React from 'react';
import {Image} from "react-bootstrap";

import './photo-gallery.css';

const PhotoGallery = ({data})=> {

    const items = data.map((el) => <Image src={el} key={el.slice(-10)} fluid/>);

    return <div className="city-gallery-container">{items}</div>

};

export default PhotoGallery;