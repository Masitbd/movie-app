import React from 'react';

const Player = () => {
    return (
    <iframe
        width="100%"
        class="aspect-video"
        src="https://as2.ftcdn.net/v2/jpg/02/15/70/37/1000_F_215703713_LWHKXovZmH46zp6bw3f4sJpFyjNNOQsZ.jpg"
        title="Some video title"
        frameBorder=""
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullscreen
    ></iframe>
    );
};

export default Player;