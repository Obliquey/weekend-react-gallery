// probably don't need useState or useEffect in here, but I brought it in just in case. will possibly remove before the end.
import { useState, useEffect } from "react";
import GalleryItem from '../GalleryItem/GalleryItem.jsx';
import './GalleryList.css'

function GalleryList(props) {

    console.log("In GalleryList, here are the photos", props.photos)

    return (

        // put images in a span to be easily manipulated with CSS to look nice.
        <>
            {/* use .map() to go send each photo through to GalleryItem to be displayed. */}
            {props.photos.map(photo => {
                // do I need to have explicitly laid out all the props that I'm sending to GalleryItem? Or could I have just passed photo as a prop and extracted it's data there??
                 
                return<span className="image" key={photo.id}>
                    <GalleryItem 
                        path={photo.path}
                        description={photo.description}
                        likes={photo.likes}
                        className="item"
                    />
                </span>
            })}
        </>
    )
}

export default GalleryList;