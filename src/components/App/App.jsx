import React from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.jsx'


function App() {
  // make state for gallery array storage
  const [photoGallery, setPhotoGallery] = React.useState([]);

  // upon app startup, call for gallery array
  React.useEffect(() => {
    fetchGallery();
  }, [])

  // need PUT route for likes 
  const updateLikes = (id) => {
    console.log("In updateLikes")
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
        <p>Gallery goes here</p>
        {/* <img src="images/goat_small.jpg"/> */}
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
