export function convertTime(timestamp){
    const date = new Date(timestamp)
    // const time = date.toLocaleTimeString('en-US')
    return date.toUTCString().substr(4,13)
}

export function calcPercentageOfPoll(totalVotes, optionVote){
    return Math.floor((optionVote/totalVotes) * 100)
}