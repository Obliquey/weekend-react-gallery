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

  // POST route for new photo submission
  const postPhoto = (data) => {
    axios({
      method: 'POST',
      url:'/gallery',
      data: { path: data.path, description: data.description }
    }).then((res) => {
      console.log("Successfully posted new photo", res.data);
      fetchGallery();
    }).catch((err) => {
      console.log("Error posting photo to db", err);
    })
  }

  // need PUT route for likes 
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
  }
  // Our GET req for photos
  const fetchGallery = () => {
        
    axios({
        method: 'GET',
        url: '/gallery'
    }).then((res) => {
        setPhotoGallery(res.data);
    }).catch((err) => {
        console.log("Error sending GET req", err);
    });
}

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
          />
        </div> 
      </div>
    );
}

export default App;
