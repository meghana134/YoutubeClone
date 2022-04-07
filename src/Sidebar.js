import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import WhatshotRoundedIcon from '@material-ui/icons/WhatshotRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SubscriptionsRoundedIcon from '@material-ui/icons/SubscriptionsRounded';
import VideoLibraryOutlinedIcon from '@material-ui/icons/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@material-ui/icons/HistoryOutlined';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';


const Sidebar = () => {
    return (
        <div className='app_side'>
            
            <SidebarRow selected Icon={HomeRoundedIcon} title="Home"></SidebarRow>
            <SidebarRow Icon={WhatshotRoundedIcon} title="Trending"></SidebarRow>
            <SidebarRow Icon={SubscriptionsRoundedIcon} title="Subscriptions"></SidebarRow>
            <hr/>
            <SidebarRow Icon={VideoLibraryOutlinedIcon} title="Library"></SidebarRow>
            <SidebarRow Icon={HistoryOutlinedIcon} title="History"></SidebarRow>
            <SidebarRow Icon={OndemandVideoIcon} title="Your videos"></SidebarRow>
            <SidebarRow Icon={WatchLaterOutlinedIcon} title="Watch later"></SidebarRow>
            <SidebarRow Icon={KeyboardArrowDownOutlinedIcon} title="Show more"></SidebarRow>
            <SidebarRow Icon={ThumbUpOutlinedIcon} title="Liked videos"></SidebarRow>
            <hr/>
        </div>
    )
}

export default Sidebar
