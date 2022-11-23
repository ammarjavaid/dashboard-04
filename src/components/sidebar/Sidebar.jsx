import React, { useState } from 'react'
import "./sidebar.scss"
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import InventoryIcon from '@mui/icons-material/Inventory';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import EmailIcon from '@mui/icons-material/Email';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WorkIcon from '@mui/icons-material/Work';
import ReportIcon from '@mui/icons-material/Report';
import { Link, useNavigate } from "react-router-dom"
import { getAuth, signOut } from "firebase/auth";
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = ({ open, setOpen, handle }) => {

    const navigate = useNavigate();
    const logout = () => {
        const auth = getAuth();
        signOut(auth).then((res) => {
            navigate("/");
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <>
            <div className={`sidebar ${open ? "openSidebar" : ""}`}>
                <div className='sidebarWrapper'>
                    <div className='sidebarMenu'>
                        <h3 className='sidebarTitle'> Dashboard </h3>
                        <ul className='sidebarList'>
                            <Link to="/home" className="link" onClick={handle}>
                                <li className='sidebarItem active'>
                                    <LineStyleIcon className='sidebarIcon' /> Home
                                </li>
                            </Link>
                            <li className='sidebarItem'>
                                <TimelineIcon className='sidebarIcon' /> Analytics
                            </li>
                            <li className='sidebarItem'>
                                <TrendingUpIcon className='sidebarIcon' /> Sales
                            </li>
                        </ul>
                    </div>
                    <div className='sidebarMenu'>
                        <h3 className='sidebarTitle'> Quick Menu </h3>
                        <ul className='sidebarList'>
                            <Link to="/users" className='link' onClick={handle}>
                                <li className='sidebarItem'>
                                    <PersonOutlineIcon className='sidebarIcon' /> User
                                </li>
                            </Link>
                            <Link to="/products" className='link' onClick={handle}>
                                <li className='sidebarItem'>
                                    <InventoryIcon className='sidebarIcon' /> Products
                                </li>
                            </Link>
                            <li className='sidebarItem'>
                                <AttachMoneyIcon className='sidebarIcon' /> Transactions
                            </li>
                            <li className='sidebarItem'>
                                <BarChartIcon className='sidebarIcon' /> Reports
                            </li>
                        </ul>
                    </div>
                    <div className='sidebarMenu'>
                        <h3 className='sidebarTitle'> Notifications </h3>
                        <ul className='sidebarList'>
                            <li className='sidebarItem'>
                                <EmailIcon className='sidebarIcon' /> Mail
                            </li>
                            <li className='sidebarItem'>
                                <QuestionAnswerIcon className='sidebarIcon' /> Feedback
                            </li>
                            <li className='sidebarItem'>
                                <ChatBubbleOutlineIcon className='sidebarIcon' /> Message
                            </li>
                        </ul>
                    </div>
                    <div className='sidebarMenu'>
                        <h3 className='sidebarTitle'> Staff </h3>
                        <ul className='sidebarList'>
                            <li className='sidebarItem'>
                                <WorkIcon className='sidebarIcon' /> Manage
                            </li>
                            <li className='sidebarItem'>
                                <TimelineIcon className='sidebarIcon' /> Analytics
                            </li>
                            <li className='sidebarItem'>
                                <ReportIcon className='sidebarIcon' /> Reports
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='btn__logout'>
                    <LogoutIcon style={{fontSize: "18px"}}/>
                    <button onClick={logout}> Logout </button>
                </div>
            </div>
        </>
    )
}

export default Sidebar