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
class App extends Component {
  signIn = (event) => {
    event.preventDefault()
    const id = this.input.value
    this.props.dispatch(setAuthedUser(id))
  }

  signOut = (event) => {
    event.preventDefault()
    const id = null
    this.props.dispatch(setAuthedUser(id))
  }
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render(){
    const { unAuthorised } = this.props
    return (
      <BrowserRouter>
        { unAuthorised
          ? (
              <div>
                <h1>please sign in to complete:</h1>
                <form onSubmit={this.signIn}>
                  <label>
                    username
                    <input 
                      type='text' 
                      ref={(input) => this.input = input}/>
                  </label>
                  <button>signIn</button>
                </form>
              </div>
            
            )
          : <div className='container'>
              <Navbar />
              <button onClick={this.signOut}>signOut</button>
              <Route exact path='/' component={Home} />
              <Route path='/add' component={NewPoll} />
              <Route path='/leaderboard' component={Leaderboard} />
              <Route path='/questions/:id' component={PollPage} />
            </div>
          }
      </BrowserRouter>
      
    );
  } 
}

const mapStateToProp = ({authedUser}) => {
  return{
    unAuthorised: authedUser === null 
  }
}

export default connect(mapStateToProp)(App);
