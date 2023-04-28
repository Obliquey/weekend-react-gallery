// probably don't need useState or useEffect in here, but I brought it in just in case. will possibly remove before the end.
import { useState, useEffect } from "react";
import GalleryItem from '../GalleryItem/GalleryItem.jsx';

function GalleryList(props) {


    return (

        // put images in a span to be easily manipulated with CSS to look nice.
        <span className="image">
            {/* use .map() to go send each photo through to GalleryItem to be displayed. */}
            {props.photos.map(photo => {
                // do I need to have explicitly laid out all the props that I'm sending to GalleryItem? Or could I have just passed photo as a prop and extracted it's data there??
                return <GalleryItem 
                    id={photo.id}
                    path={photo.path}
                    description={photo.description}
                    likes={photo.likes}
                />
            })}
        </span>
    )
}

export default GalleryList;