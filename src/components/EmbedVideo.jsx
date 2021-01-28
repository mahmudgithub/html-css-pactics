import React from 'react'
import ReactPlayer from 'react-player/youtube';

const EmbedVideo = (props) => {
    return (
        
            <ReactPlayer url={props.url} />
        
    )
}

export default EmbedVideo
