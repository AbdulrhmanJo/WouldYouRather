import React, { Component } from 'react'
import { connect } from 'react-redux'
import PollCard from './pollCard'
class Home extends Component {

    state = {
        questionType: 'Unanswered'
    }

    handleSwitchBtn = (event) => {
        const val = event.target.value
        if(val !== this.state.questionType){
            this.setState({
                questionType: val
            })
        }
    }

    render(){
        const { answeredQuestionsID,  unAnsweredQuestionsID} = this.props
        const { questionType } = this.state
        return(
            <div>
                <h1>would you rather?</h1>
                <button onClick={this.handleSwitchBtn} value="Unanswered">Unanswered</button>
                <button onClick={this.handleSwitchBtn} value="Answered">Answered</button>
                {
                    (questionType === 'Answered' ? answeredQuestionsID : unAnsweredQuestionsID)
                        .map((id) => (
                        <PollCard key={id} id={id}/>
                        ))
                }
            </div>
        ) 
    }
}

const mapStateToProps = ({ questions, authedUser,users }) => {
    const questionsID = Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    let answeredQuestionsID = []
    let unAnsweredQuestionsID = []
    questionsID.forEach(id => {
        let found = false;
        const QuestionVotes = [...questions[id].optionOne.votes, ...questions[id].optionTwo.votes]
        for(let i = 0 ; i < QuestionVotes.length; i++){       
            if(QuestionVotes[i] === authedUser){
                answeredQuestionsID.push(id)
                found = true
                break
            }
        };
        if(!found){
            unAnsweredQuestionsID.push(id)
        }
    });
    

    return {
        answeredQuestionsID,
        unAnsweredQuestionsID
    }
  }

export default connect(mapStateToProps)(Home)