import React from 'react'
import { calcPercentageOfPoll } from '../utils/helpers'
import { connect } from 'react-redux'
const ResultCard = (props) => {    
    const { option, totalVotes, authedUser} = props
    const optionPercentage = calcPercentageOfPoll(totalVotes,option.votes.length)+'%';    
    return (
            <div className={option.votes.indexOf(authedUser) !== -1 ? 'result choice' : 'result'}>
                <div className="result-container">
                    <p className="result-text">{option.text}</p>
                    <p className="result-percentage">{optionPercentage}</p>
                </div>
                <div className="result-progress">
                    <span style={{width:optionPercentage}}></span>
                </div>
                <p className="result-votes">{option.votes.length} votes</p>
            </div>
    )
}
const mapStateToProps = ({ authedUser }) => {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(ResultCard)