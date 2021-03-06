import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'


class Login extends Component{

    state = {
      user: 'select user'
    }

    handleState = (event) => {
      const name = event.target.lastChild.textContent;
      this.setState({
        user: name
      })
    }

    handleBtn = (event) => {
      const btn = event.target
      btn.nextSibling.classList.toggle("show")
    }

    closeDropDwon = (event) => {
        if (!event.target.matches('.login-dropdown-toggle')) {
            var dropdowns = document.getElementsByClassName("login-dropdown-menu");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
              var openDropdown = dropdowns[i];
              if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
              }
            }
          }
    }

    componentDidMount(){
        document.addEventListener('click', this.closeDropDwon)
    }

    componentWillUnmount(){
        document.removeEventListener('click', this.closeDropDwon)
    }

    signIn = (event) => {
        event.preventDefault()
        const { user } = this.state
        const authedUser = this.props.users.filter((u) => u[1].name === user)
        
        this.props.dispatch(setAuthedUser(authedUser[0][0]))
      }

    render(){
        const { user } = this.state
        const { users } = this.props    
                    
        return (
          <div className="login">
            <div className="login-card">
                <h1 className="nav-heading">Would you Rather?</h1>
                <p className="login-card-text">login</p>
                <p className="login-card-info">Login to your account to continue</p>
                <div className="login-card-form">
                  <p>Username</p>
                    {/* <input 
                      type='text' 
                      ref={(input) => this.input = input}/> */}
                      <div className="login-dropdown">
                        <button className="login-dropdown-toggle" onClick={this.handleBtn}>
                          {user}
                        </button>
                        <div className="login-dropdown-menu">
                          { users.map((user) => (
                            <button key={user[0]} className="login-dropdown-item" onClick={this.handleState}>
                              <img src={user[1].avatarURL} alt='user avatar'></img>
                              <span>{user[1].name}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="loginn">
                        <button className="loginn-btn" disabled={user === 'select user'} onClick={this.signIn}>Login</button>
                      </div>
                  
                </div>
                
            </div>
          </div>
        )
    }
}

const mapStateToProp = ({ users }) => {
  return {
    users: Object.entries(users),
  }
}

export default connect(mapStateToProp)(Login)