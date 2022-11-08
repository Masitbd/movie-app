import React from 'react';

const Player = ({movie}) => {
    return (
    <iframe
        width="100%"
        class="aspect-video"
        src={movie.thumbnail}
        title="Some video title"
        frameBorder=""
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullscreen
        scrolling="no"
    ></iframe>
    );
};

export default Player;