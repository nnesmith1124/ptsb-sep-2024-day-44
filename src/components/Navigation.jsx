import React from 'react'
import { NavLink } from 'react-router-dom'

import './Navigation.css'

export default function Navigation() {
    return (
        <header>
            <nav className='navigation-bar' aria-label='Main navigation'>
                <div className='nav-brand'>
                    <span className='site-title'>My Site</span>
                </div>
                <div className='nav-links'>
                    <NavLink
                        to='/'
                        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                        end
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to='/about'
                        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                    >
                        About
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}
