import React from "react";
import TuneIcon from "@material-ui/icons/Tune";
import "./SearchPage.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchpage">
      <div className="searchpagefilter-icon">
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://www.imagediamond.com/blog/wp-content/uploads/2020/06/cartoon-boy-images-4.jpg"
        channel="Codewithharry"
        verified
        subs="66k"
        noofvideos={354}
        description="You can find all thype of tech contents here"
      />
      <hr />

      <VideoRow
        views="1.55M"
        subs="595K"
        description="Do you want to learn js free"
        timestamp="2weeks ago"
        channel="CodeWith harry"
        title="Build Youtube clone using react fro beginners"
        image="https://en.pimg.jp/043/493/183/1/43493183.jpg"
      />
    </div>
  );
}

export default SearchPage;
