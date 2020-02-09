import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import { AiTwotoneHome,AiOutlineHome,AiOutlineTrophy,AiTwotoneTrophy } from 'react-icons/ai'
import {IoMdAddCircleOutline,IoMdAddCircle} from 'react-icons/io'
import { withRouter } from "react-router";

class Navbar extends Component {
    render(){
    const { avatarURL, name} = this.props.user
    const { location } = this.props

    console.log(this.props);
    
    return (
        <nav className="nav">
            <h1 className="nav-heading">Would you rather?</h1>
            <div className="nav-avatar">
                <img src={avatarURL} alt={`avatar of ${name}`} className='nav-avatar-img'></img>
                <p className='nav-avatar-text'>hello, {name}</p>
            </div>
            <ul className="nav-list">
                <NavLink 
                    to="/" exact
                    className="nav-list--item"
                    activeClassName="active"
                    >
                        {
                            location.pathname === '/' 
                            ? <AiTwotoneHome size={25} className="nav-list--item-icon"/>
                            : <AiOutlineHome size={25} className="nav-list--item-icon"/>
                        }
                    <span className="nav-list--item-text">Home</span>
                </NavLink>

                <NavLink 
                    to="/add" exact
                    className="nav-list--item"
                    activeClassName="active"
                    >
                        {
                            location.pathname === '/add' 
                            ? <IoMdAddCircle size={25} className="nav-list--item-icon"/>
                            : <IoMdAddCircleOutline size={25} className="nav-list--item-icon"/>
                        }                     
                        <span className="nav-list--item-text">create Question</span>
                </NavLink>

                <NavLink 
                    to="/leaderboard" exact
                    className="nav-list--item"
                    activeClassName="active"
                    >
                        {
                            location.pathname === '/leaderboard' 
                            ? <AiTwotoneTrophy size={25} className="nav-list--item-icon"/>
                            : <AiOutlineTrophy size={25} className="nav-list--item-icon"/>
                        }                    
                        <span className="nav-list--item-text">leader board</span>
                </NavLink>       
            </ul>
            <button className='nav-btn' onClick={this.props.signOut}>sign Out</button>
        </nav>
        )
    }
}

export default withRouter(Navbar)
