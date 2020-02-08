import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = (props) => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" exact>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/add" exact>
                        new poll
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/leaderboard" exact>
                        leaderboard
                    </NavLink>
                </li>
                        
            </ul>
        </nav>
        
    )
}

export default Navbar