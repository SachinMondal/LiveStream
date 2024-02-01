// src/components/VideoPlayer.js
import React from 'react';

const VideoPlayer = ({ url, isPlaying, volume, videoRef }) => {
    return (
        <div>
            <video ref={videoRef} className="h-[40rem] w-[80rem] m-2" controls autoPlay={isPlaying} volume={volume}>
                <source src={url} type="application/x-rtsp" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoPlayer;
