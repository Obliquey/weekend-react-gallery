import React from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.jsx';
import AddForm from '../AddForm/AddForm';


function App() {
  // make state for gallery array storage
  const [photoGallery, setPhotoGallery] = React.useState([]);

  // upon app startup, call for gallery array
  React.useEffect(() => {
    fetchGallery();
  }, [])

  // DELETE route for specific photo deletion
  const deletePhoto = (id) => {
    axios({
      method: 'DELETE',
      url: `/gallery/${id}`
    }).then((res) => {
      console.log("Successfully deleted item");
      fetchGallery();
    }).catch((err) => {
      console.log("Couldn't delete item:", err);
    })
  } // end deletePhoto
  
  // POST route for new photo submission
  const postPhoto = (data) => {
    axios({
      method: 'POST',
      url:'/gallery',
      // data package sent to db takes function argument object, which has the paramters of path and description.
      data: { path: data.path, description: data.description }
    }).then((res) => {
      console.log("Successfully posted new photo", res.data);
      fetchGallery();
      return true;
    }).catch((err) => {
      console.log("Error posting photo to db", err);
    })
  }// end postPhoto

  // need PUT route for likes, uses fetchGallery() to refresh after updating DB
  const updateLikes = (id) => {
    axios({
      method: 'PUT',
      url: `/gallery/like/${id}`,
    }).then((res) => {
      console.log('Successfully update likes', res.data);
      fetchGallery();
    }).catch((err) => {
      console.log("Couldn't update db with likes", err);
    })
  } //end updateLikes
  // Our GET req for photos, also sent to GalleryList and AddForm to refresh page after db changes
  const fetchGallery = () => {
        
    axios({
        method: 'GET',
        url: '/gallery'
    }).then((res) => {
        setPhotoGallery(res.data);
    }).catch((err) => {
        console.log("Error sending GET req", err);
    });
} // end fetchGallery

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <AddForm 
          postPhoto={postPhoto}
        />
        <div className='images'>
          <GalleryList 
              photos={photoGallery}
              fetchPhotos={fetchGallery}
              likePhoto={updateLikes}
              deletePhoto={deletePhoto}
          />
        </div> 
      </div>
    );
}

export default App;
