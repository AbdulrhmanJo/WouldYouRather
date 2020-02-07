import React from 'react'
import { calcPercentageOfPoll } from '../utils/helpers'

const ResultCard = (props) => {
    const { option, totalVotes} = props
    const optionPercentage = calcPercentageOfPoll(totalVotes,option.votes.length)+'%';
    return (
        <div>
            <div>
                <p>{option.text}</p>
                <p>{optionPercentage}</p>
                <div className="meter">
                    <span style={{width:optionPercentage}}></span>
                </div>
                <p>{option.votes.length} votes</p>
            </div>
        </div>
    )
}

export default ResultCard