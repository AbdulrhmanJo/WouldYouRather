import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = (props) => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/add">
                        new poll
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/leaderboard">
                        leaderboard
                    </NavLink>
                </li>
                        
            </ul>
        </nav>
        
    )
}

export default Navbar