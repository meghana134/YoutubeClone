import React from 'react';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import './sidebarrow.css'

function SidebarRow({selected,Icon,title}) {
    return (
        <div className={`sidebarrow ${selected && 'selected'}`}>
        <Icon className='sidebarrow_icon'/>
            <h5 className='sidebarrow_title'>{title}</h5>
        </div>
    )
}

export default SidebarRow
