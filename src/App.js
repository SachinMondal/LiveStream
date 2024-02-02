// src/App.js
import React, { useRef } from 'react';
import VideoPlayer from './components/VideoPlayer';
import OverlayForm from './components/OverlayForm';
import Navbar from './components/Navbar';
import { Grid } from '@mui/material';

const App = () => {
  const videoRef = useRef();

  return (
    <div className="bg-black h-[100vh] w-full">

      <Navbar />
      <div style={{ textAlign: 'center', padding: '1rem' }}>
        <h1 className='text-white text-2xl md:text-4xl'>Live Stream</h1>
      </div>

      <Grid container className="App" xs={12} bgcolor={"black"}>
        <Grid item className='flex items-center justify-center' xs={12} md={8}>
          <VideoPlayer
            url="your-rtsp-url-here"
            videoRef={videoRef}
          />
        </Grid>
        <Grid item className='flex' xs={12} md={4}>
          <OverlayForm />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;