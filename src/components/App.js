import React from 'react';
import Navigation from './Navigation';
import Rank from './Rank';
import ImageLinkForm from './ImageLinkForm';
import FaceRecognition from './FaceRecognition';
import { Main, Central } from '../style/styled';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Main>
        <Central>
          <Rank />
          <ImageLinkForm />
          <FaceRecognition />
        </Central>
      </Main>
    </div>
  );
}

export default App;
