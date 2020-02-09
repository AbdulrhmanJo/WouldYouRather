import React, {Component} from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './home'
import PollPage from './pollPage'
import Leaderboard from './Leaderboard'
import NewPoll from './newPoll'
import Navbar from './Navbar';
import Login from './login'
class App extends Component {
  
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render(){
    const { unAuthorised } = this.props
    return (
      <BrowserRouter>
        { unAuthorised
          ? <Login />
          : <div className='container'>
              <Navbar />
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

const mapStateToProp = ({authedUser}) => {
  return{
    unAuthorised: authedUser === null,
  }
}

export default connect(mapStateToProp)(App);
