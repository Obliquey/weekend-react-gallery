import { useEffect, useState } from "react";
import './GalleryItem.css';


function GalleryItem(props) {

    // console.log('In GalleryItem, here is a photo', props)
    const handleClick = () => {
        // upon click, need to swap from displaying image to displaying description
    }

    return (
        <>
        {/* Need to display image, button to like the image, number of likes, and conditionally render the description */}
        {/* For some reason, when using .map() over the array in a parent element, you don't use the props.PHOTO.etc to access that info. Just use props.etc */}
            {
                <span className="itemBox">
                    <img src={props.path} className="image" />
                    <button className="likeButton" onClick={() => props.likePhoto(props.id)}>♥️</button>
                    <p>{props.likes} likes!</p>
                </span>
            }

        </>

    )
}

export default GalleryItem;