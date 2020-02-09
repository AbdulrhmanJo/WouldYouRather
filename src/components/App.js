import React, {Component} from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './home'
import PollPage from './pollPage'
import Leaderboard from './Leaderboard'
import NewPoll from './newPoll'
import Navbar from './Navbar';
import { setAuthedUser } from '../actions/authedUser'
import Login from './login'
class App extends Component {
 

  signOut = (event) => {
    event.preventDefault()
    const id = null
    this.props.dispatch(setAuthedUser(id))
  }

  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render(){
    const { unAuthorised, user} = this.props
    return (
      <BrowserRouter>
        { unAuthorised
          ? <Login />
          : <div className='container'>
              <Navbar user={user} signOut={this.signOut}/>
              <div className="main">
                <Route exact path='/' component={Home} />
                <Route path='/add' component={NewPoll} />
                <Route path='/leaderboard' component={Leaderboard} />
                <Route path='/questions/:id' component={PollPage} />
              </div>
            </div>
          }
      </BrowserRouter>
      
    );
  } 
}

const mapStateToProp = ({authedUser, users}) => {
  const user = users[authedUser]
  return{
    unAuthorised: authedUser === null,
    user
  }
}

export default connect(mapStateToProp)(App);
