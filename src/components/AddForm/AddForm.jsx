import { useState } from "react";


function AddForm(props) {
    const [submittedPic, setSubmittedPic] = useState('');
    const [submittedDescription, setSubmittedDescription] = useState('');


    const handleClick = (event) => {
        event.preventDefault();
        console.log('Submit Button Clicked');
        const submission = {path: submittedPic, description: submittedDescription}

        props.postPhoto(submission);
    }

    return (

        <>
            <form className="addForm" onSubmit={() => handleClick(event)}>
                <input 
                placeholder="Photo URL"
                type="text"
                value={submittedPic}
                onChange={(event) => {setSubmittedPic(event.target.value)}}
                />
                <input
                type="text" 
                placeholder="Description" 
                value={submittedDescription}
                onChange={(event) => {setSubmittedDescription(event.target.value)}}
                />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default AddForm;