import { useEffect, useState } from "react";
import './GalleryItem.css';


function GalleryItem(props) {
    const [showDescription, setShowDescription] = useState(false);
    // console.log('In GalleryItem, here is a photo', props)
    const handleClick = () => {
        // upon click, need to swap from displaying image to displaying description
        // Got the BANG operator to work, but (probably because of how state works) I don't fully understand why this is working. 
        if(showDescription) {
            setShowDescription(false)
        }else if (!showDescription){
            setShowDescription(true)
        }
    }

    // function to decide whether to show image or description of image, based upon showDescription state (which in turn is toggled by handleClick)
    const showImage = () => {
        if (!showDescription) {
            return (
                <img src={props.path} className="image" onClick={() => handleClick()} />
            )
        } else if (showDescription){
            return (
                <p onClick={() => handleClick()} className="description">{props.description}</p>
            )
        }
    }


    return (
        <>
        {/* Need to display image, button to like the image, number of likes, and conditionally render the description */}
        {/* For some reason, when using .map() over the array in a parent element, you don't use the props.PHOTO.etc to access that info. Just use props.etc */}
            {
                <span className="itemBox">
                    {showImage()}
                    <span className="UI">
                        <button className="likeButton" onClick={() => props.likePhoto(props.id)}>♥️</button>
                        <button className="deleteButton" onClick={() => props.deletePhoto(props.id)}>𝐗</button>
                        <p className="likesCount">{props.likes} likes!</p>
                    </span>
                </span>
            }

        </>

    )
}

export default GalleryItem;