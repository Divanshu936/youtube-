import React from 'react'
import './VideoRow.css'
function VideoRow({ image, title, subs, channel, description, views, timestamp }) {
    return (
        <div className="videoRow">
            <img src={image} alt="" />
            <div className="videoRow__text">
                <h3>{title}</h3>
                <p className="videoRow__headline">
                    {channel}*<span className="videoRow__subs"><span className="videoRow__subsNumbers">{subs}</span> Subscribers</span>  {views} *{timestamp}

                </p>
                <p className="videoRow__description">{description}</p>
            </div>

        </div>
    )
}

export default VideoRow
