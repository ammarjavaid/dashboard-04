import React from 'react'
import "./topbar.scss"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';

const Topbar = ({open, setOpen, handle}) => {

  return (
    <>
        <div className='topbar'>
            <div className='topbarWrapper'>
                <div className='topLeft'>
                    <span className='logo'> MainAdmin </span>
                </div>
                <div className='topRight'>
                   <div className='topbarIconContainer'>
                    <NotificationsNoneIcon/>
                    <span className='topIconBadge'>2</span>
                   </div> 
                   <div className='topbarIconContainer'>
                    <LanguageIcon/>
                    <span className='topIconBadge'>2</span>
                   </div>
                   <div className='topbarIconContainer'>
                    {open ?<FormatAlignRightIcon onClick={handle}/> : <FormatAlignJustifyIcon onClick={handle}/> }
                   </div>
                   <div className='topbarIconContainer'>
                    <SettingsIcon/>
                   </div>
                   <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt='image' className='topAvatar' /> 
                </div>
            </div>
        </div>
    </>
  )
}

export default Topbar