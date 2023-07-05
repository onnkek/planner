import React from 'react'
import './Header.sass'
import { Link } from 'react-router-dom'
import { YinYang } from 'react-bootstrap-icons'
import ControlPanel from '../ControlPanel/ControlPanel'

const Header = (props) => {
    return (
        <div className='header'>
            <div className='header-global'>
                <div className='header-right'>
                    <Link className='header-link' to='/'>
                        <YinYang className='header-logo-icon' size={32} />
                        <span className='header-logo'>Planner</span>
                    </Link>
                </div>
            </div>
            <div className='header-local'>
                <ControlPanel />
            </div>
        </div>
    )
}

export default Header