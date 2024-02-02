import React, { useEffect, useRef } from 'react';

const VideoPlayer = ({ url, isPlaying, volume }) => {
    const videoRef = useRef();

    useEffect(() => {
        const socket = new WebSocket('ws://localhost:5000');

        socket.onopen = () => {
            console.log('WebSocket connection opened');
        };

        socket.onmessage = (event) => {
            console.log('Received message:', event.data);
            const imageUrl = URL.createObjectURL(new Blob([event.data], { type: 'image/jpeg' }));
            videoRef.current.src = imageUrl;
        };

        socket.onclose = () => {
            console.log('WebSocket connection closed');
        };

        return () => {
            socket.close();
        };
    }, []);

    return (
        <div>
            <video ref={videoRef} className="h-[40rem] w-[80rem]" controls autoPlay={isPlaying} volume={volume}>
                <source src={url} type="application/x-rtsp" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoPlayer;
