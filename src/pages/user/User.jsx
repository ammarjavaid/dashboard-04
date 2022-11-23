import React, { useEffect } from 'react';
import "./user.scss";
import { Link } from "react-router-dom";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import PublishIcon from '@mui/icons-material/Publish';
import LocationSearchingOutlinedIcon from '@mui/icons-material/LocationSearchingOutlined';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { useNavigate } from 'react-router-dom';

const User = ({open, setOpen, handle, isAuth}) => {

    // const navigate = useNavigate();

    // useEffect(()=>{
    //   if(!isAuth){
    //     navigate("/login");
    //   }
    // }, [])

    return (
        <>
            <div className='container'>
            <Sidebar open={open} setOpen={setOpen} handle={handle}/>
            <div className='user'>
            <Topbar open={open} setOpen={setOpen} handle={handle}/>
                <div className='userTitleContainer'>
                    <h1 className='userTitle'> Edit User </h1>
                    <Link to="/newUser">
                        <button className='userAddButton'> Create </button>
                    </Link>
                </div>
                <div className='userContainer'>
                    <div className='userShow'>
                        <div className='userShowTop'>
                            <img src='https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt='' className='userShowImg' />
                            <div className='userShowTopTitle'>
                                <span className='userShowUsername'>Anna Becker</span>
                                <span className='userShowUserTitle'>Software Engineer</span>
                            </div>
                        </div>
                        <div className='userShowBottom'>
                            <span className='userShowTitle'> Account Details </span>
                            <div className='userShowInfo'>
                                <PermIdentityIcon className="userShowIcon" />
                                <span className='userShowInfoTitle'> ammarch077 </span>
                            </div>
                            <div className='userShowInfo'>
                                <CalendarMonthIcon className="userShowIcon" />
                                <span className='userShowInfoTitle'> 14-11-1999 </span>
                            </div>
                            <span className='userShowTitle'> Contact Details </span>
                            <div className='userShowInfo'>
                                <PhoneAndroidIcon className="userShowIcon" />
                                <span className='userShowInfoTitle'> +92 302 0662 62 </span>
                            </div>
                            <div className='userShowInfo'>
                                <MailOutlinedIcon className="userShowIcon" />
                                <span className='userShowInfoTitle'> ammar@gmail.com </span>
                            </div>
                            <div className='userShowInfo'>
                                <LocationSearchingOutlinedIcon className="userShowIcon" />
                                <span className='userShowInfoTitle'> Sargodha | Pakistan </span>
                            </div>
                        </div>
                    </div>
                    <div className='userUpdate'>
                        <span className='userUpdateTitle'> Edit </span>
                        <form className='userUpdateForm'>
                            <div className='userUpdateLeft'>
                                <div className='userUpdateItem'>
                                    <label>Username</label>
                                    <input type="text" placeholder='ammar077' className='userUpdateInput' />

                                </div>
                                <div className='userUpdateItem'>
                                    <label>Full Name</label>
                                    <input type="text" placeholder='Anna Becker' className='userUpdateInput' />

                                </div>
                                <div className='userUpdateItem'>
                                    <label>Email</label>
                                    <input type="email" placeholder='ammar@gmail.com' className='userUpdateInput' />

                                </div>
                                <div className='userUpdateItem'>
                                    <label>Phone</label>
                                    <input type="phone" placeholder='+92 302 0662 62' className='userUpdateInput' />

                                </div>
                                <div className='userUpdateItem'>
                                    <label>Address</label>
                                    <input type="text" placeholder='Sargodha | Pakistan' className='userUpdateInput' />
                                </div>
                            </div>
                            <div className='userUpdateRight'>
                                <div className='userUpdateUpload'>
                                    <img src='https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt="" className='userUpdateImg' />
                                    <label htmlFor='file'><PublishIcon style={{ cursor: "pointer" }} /></label>
                                    <input type="file" id='file' style={{ display: "none" }} />
                                </div>
                                <button className='userUpdateButton'> Update </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default User