import React from 'react'
import './SettingsHeader.sass'
import Spinner from "../../../UI/Spinner/Spinner"
import { CheckLg } from "react-bootstrap-icons"

const SettingsHeader = ({ title }) => {
    return (
        <div className="settings-header-container">
            <h2 className="settings-header">{title}</h2>
            <div className="settings-check">
                <Spinner className='spinner-small' />
                <div className="settings-check-icon">
                    <CheckLg className="icon-check" />
                </div>
                <span className="settings-check-title">Saved</span>
            </div>
        </div>
    )
}

export default SettingsHeader