import React from 'react';
import './Header.css';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MicIcon from '@material-ui/icons/Mic';
import { useState } from 'react';
import { Link } from 'react-router-dom';

//es7 snippet

function Header() {
    const [inputSearch, setInputSearch]= useState("")
    return (
        <div className='header'>
            <div className="header_left">
                <MenuSharpIcon className='menu_icon'/>
                <Link to="/">
                <img
                    className='header_logo'
                    src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png" alt="" />
                    </Link>
            </div>


            <div className="header_input">
                <input onChange={event=> setInputSearch(event.target.value)} value={inputSearch} placeholder=" Search"type="text" />
                <Link to={`/search/${inputSearch}`}>
                <SearchIcon className='input_searchbutton'/>
                </Link>
                <MicIcon className="mic" />
            </div>


            <div className="header_right">
                <VideoCallSharpIcon className='header_v'/>
                <AppsIcon className='header_a'/>
                <NotificationsNoneIcon className="header_n" />
                <AccountCircleIcon className="header_ac"/>

            </div>


         

        </div>
    )
}

export default Header




