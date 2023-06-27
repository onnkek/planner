import React from 'react';
import './Sidebar.sass'
import Profile from "../../../UI/Icons/Profile";
import Appearance from "../../../UI/Icons/Appearance";
import Time from "../../../UI/Icons/Time";
import Notifications from "../../../UI/Icons/Notifications";
import { NavLink } from 'react-router-dom';

const Sidebar = (props) => {
    const setActive = ({ isActive }) => isActive ? "sidebar-item-link sidebar-item-link-active" : "sidebar-item-link";
    return (
        <>
            <div className='sidebar'>
                <ul className='sidebar-list'>
                    <NavLink
                        className={setActive}
                        to='/settings/profile'>
                        <li className='sidebar-list-item'>
                            <div className='sidebar-item-icon'>
                                <Profile />
                            </div>
                            <span>Profile</span>
                        </li>
                    </NavLink>
                    <NavLink
                        className={setActive}
                        to='/settings/appearance'>
                        <li className='sidebar-list-item'>
                            <div className='sidebar-item-icon'>
                                <Appearance />
                            </div>
                            <span>Appearance</span>
                        </li>
                    </NavLink>
                    <NavLink
                        className={setActive}
                        to='/settings/time'>
                        <li className='sidebar-list-item'>
                            <div className='sidebar-item-icon'>
                                <Time />
                            </div>
                            <span>Time task</span>
                        </li>
                    </NavLink>
                    <NavLink
                        className={setActive}
                        to='/settings/notifications'>
                        <li className='sidebar-list-item'>
                            <div className='sidebar-item-icon'>
                                <Notifications />
                            </div>
                            <span>Notifications</span>
                        </li>
                    </NavLink>
                </ul>
            </div>
        </>
    );
}

export default Sidebar;