import React from 'react';
import Navigation from './components/Navigation';
import Rank from './components/Rank';
import ImageLinkForm from './components/ImageLinkForm';
// import FaceRecognition from './components/FaceRecognition';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Rank />
      <ImageLinkForm />
      {/* <FaceRecognition /> */}
    </div>
  );
}

export default App;
