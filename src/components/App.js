import React, {Component} from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './home'
import PollPage from './pollPage'
import Leaderboard from './Leaderboard'
import NewPoll from './newPoll'
class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render(){
    const { loading } = this.props
    return (
      <BrowserRouter>
        <div className="container">
        { loading
        ? <p>Loading</p>
        : <div>
            <Route path='/' exact component={NewPoll} />
            <Route path='/add' exact component={NewPoll} />
            <Route path='/leaderboard' exact component={Leaderboard} />
            <Route path='/questions/:id' exact component={PollPage} />
          </div>
        }
          
        </div>
      </BrowserRouter>
      
    );
  } 
}

const mapStateToProp = ({authedUser}) => {
  return{
    loading: authedUser === null 
  }
}

export default connect(mapStateToProp)(App);
