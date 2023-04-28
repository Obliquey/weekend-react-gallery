import React from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.jsx'

function App() {
  // make state for gallery array storage
  const [photoGallery, setPhotoGallery] = useState([]);

  // upon app startup, call for gallery array
  useEffect(() => {
    fetchGallery();
  }, [])

  const fetchGallery = () => {
        
    axios({
        method: 'GET',
        url: '/gallery'
    }).then((res) => {
        console.log("Got our Gallery:", res.data);
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
        <img src="images/goat_small.jpg"/>
        <GalleryList 
            photos={photoGallery}
            fetchPhotos={fetchGallery}
        />
      </div>
    );
}

export default App;
