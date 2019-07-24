import React from 'react';
import Playlist from './pages/playlist/playlist-container';

function App() {
  // CR: why is react fragment needed here?
  return (
    <React.Fragment>
        <Playlist/>
    </React.Fragment>
  );
}

export default App;
