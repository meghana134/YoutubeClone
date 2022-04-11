import React from "react";
import { Avatar } from "@material-ui/core";
import "./channelrow.css";
import Verification from "@material-ui/icons/CheckCircleOutline";


function ChannelRow({ 
  image, 
  channel,
   subs, 
   noofvideos,
   description,
  verified }) {
  return (
    <div className="channelrow">
      <Avatar className="channelrow_logo" alt={channel} src={image} />
      <div className="channelrow_text">
        <h4>
          {channel} {verified && <Verification/>}
          <p>
            {subs} subscribers * {noofvideos} videos          </p>
            <p>{description}</p>
        </h4>
      </div>
    </div>
  );
}

export default ChannelRow;
