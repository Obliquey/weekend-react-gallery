import { useState, useEffect } from "react";
import GalleryItem from '../GalleryItem/GalleryItem.jsx';

function GalleryList(props) {


    return (

        <span className="image">
            {props.photos.map(photo => {
                return <GalleryItem 
                    id={photo.id}
                    path={photo.path}
                    description={photo.description}
                    likes={photo.likes}
                />
            })}
            {/* <GalleryItem /> */}
        </span>
    )
}

export default GalleryList;