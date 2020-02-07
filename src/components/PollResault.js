import React from "react"
import ResultCard from './ResultCard'
const PollResualt = (props) => {
    const { optionOne, optionTwo} = props.question
    const totalVotes = [...optionOne.votes, ...optionTwo.votes].length

    return(
        <div>
            <ResultCard option={optionOne} totalVotes={totalVotes}/>
            <ResultCard option={optionTwo} totalVotes={totalVotes}/>
        </div>
    )
}

export default PollResualt