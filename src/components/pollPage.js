import React, { Component } from 'react'
import { connect } from 'react-redux'
import PollQuestion from "./PollQuestion";
import PollResault from "./PollResault";
class PollPage extends Component {
    render(){        
        const { name, avatarURL } = this.props.user 
        const { id } = this.props.match.params
        const { answers } = this.props.authedUserInfo

        return (
            <div>
                <img src={avatarURL} alt={`avatar of ${name}`} className="avatar"/>
                <p>Would you rather?</p>
                <p>Asked by <span>{name}</span></p>
                {
                    answers[id] 
                        ? <PollResault question={this.props.question}/>
                        : <PollQuestion id={id}/>
                            
                }
                
            </div>
        )
    }
}

const mapStateToProp = ({ questions, authedUser, users}, { match }) => {
    const question = questions[match.params.id]
    const user = users[question.author]    
    const authedUserInfo = users[authedUser]
    return {
        question,
        user,
        authedUserInfo
    }
}

export default connect(mapStateToProp)(PollPage)