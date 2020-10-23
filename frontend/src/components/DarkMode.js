import React, { useState } from 'react';
import * as Icon from 'react-bootstrap-icons';

const DarkMode = () => {
    const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark');
    let theme = localStorage.getItem('theme');

    if (theme === 'dark') enableDarkMode();

    const toggleDarkTheme = () => {
        setDarkMode(!darkMode);
        theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    };

    function enableDarkMode() {
        localStorage.setItem('theme', 'dark');
        document.body.classList.add('dark-mode');
    }

    function disableDarkMode() {
        localStorage.setItem('theme', 'light');
        document.body.classList.remove('dark-mode');
    }

    window.matchMedia('(prefers-color-scheme: dark)').addListener((e) => (e.matches ? enableDarkMode() : disableDarkMode()));
    return (
        <div className='dark-mode' onClick={() => toggleDarkTheme()}>
            {darkMode ? <Icon.Sun size={26}></Icon.Sun> : <Icon.Moon size={26}></Icon.Moon>}
        </div>
    );
};

export default DarkMode;
