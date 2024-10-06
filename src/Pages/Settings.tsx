import React from 'react';
import { Link } from 'react-router-dom';
import SettingsMenu from '../Components/SettingsMenu/SettingsMenu'

const Settings = () => {
    return (
        <>
            <Link to="/">Main Menu &gt;</Link> <h1>Settings</h1>
            <SettingsMenu />
        </>
    )
};

export default Settings;