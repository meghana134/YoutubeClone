import React from 'react';
import './Header.css';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MicIcon from '@material-ui/icons/Mic';

//es7 snippet

function Header() {
    return (
        <div className='header'>
            <div className="header_left">
                <MenuSharpIcon className='menu_icon'/>
                <img
                    className='header_logo'
                    src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png" alt="" />
            </div>


            <div className="header_input">
                <input placeholder=" Search"type="text" />
                <SearchIcon className='input_searchbutton'/>
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




