import React, { useState } from 'react';
import './ThemePage.sass'
import ThemeCard from '../../../UI/ThemeCard/ThemeCard';
import SettingsHeader from '../SettingsHeader/SettingsHeader';

const ThemePage = (props) => {

    const [active, setActive] = useState('dark');

    const toggleActive = () => {
        if (active === 'dark') {
            setActive('light');
            setLightMode();
        } else {
            setActive('dark');
            setDarkMode();
        }
    }

    const setDarkMode = () => {
        document.querySelector('body')
            .setAttribute('data-theme', 'dark');
    }
    const setLightMode = () => {
        document.querySelector('body')
            .setAttribute('data-theme', 'light');
    }

    return (
        <>
            <div className="settings">
                <div className="settings-item">
                    <SettingsHeader title='Theme preferences' />
                    <p className="settings-descr">
                        Choose how Planner looks to you. Select a single theme, or sync
                        with your system and automatically switch between day and night
                        themes.
                    </p>
                    <h3 className="settings-subheader">Theme mode</h3>

                    <div className="settings-theme">
                        <ThemeCard setActive={toggleActive} active={active === 'light' ? 'active' : ''} />
                        <ThemeCard setActive={toggleActive} active={active === 'dark' ? 'active' : ''} dark='' />
                    </div>

                </div>
            </div>
        </>
    );
}

export default ThemePage;