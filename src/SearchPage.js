import React from 'react';
import TuneIcon from '@material-ui/icons/Tune';
import "./SearchPage.css";
import ChannelRow from './ChannelRow';

function SearchPage() {
  return (
    <div className='searchpage'>
        <div className='searchpagefilter-icon'>
        <TuneIcon/>
        <h2>FILTER</h2>

        </div>
        <hr/>
        <ChannelRow
         image=""
         channel="Codewithharry"
         verified
         subs="66k"
         noofvideos={354}
         description="You can find all thype of tech contents here"/>
    </div>
  )
}

export default SearchPage