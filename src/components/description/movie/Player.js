import React from 'react';

const Player = ({movie}) => {
    return (
    <iframe
        width="100%"
        className="aspect-video"
        src={movie.thumbnail}
        title="Some video title"
        frameBorder=""
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        scrolling="no"
    ></iframe>
    );
};

export default Player;