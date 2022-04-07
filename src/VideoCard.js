import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import "./videocard.css";

function VideoCard({image, title, channel,views, timestamp,channelimage}) {
    return (
        <div className="videocard">

            <img  className="videocard_thumbnail" src={image} alt=""></img>

            <div className="video_info">
                <Avatar className="videocard_avatar" 
                alt={channel} 
                src={channelimage}
                />

                <div className="video_text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views}.{timestamp}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
