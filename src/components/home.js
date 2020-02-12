import React, { Component } from 'react'
import { connect } from 'react-redux'
import PollCard from './pollCard'
import noQuestion from '../icon/undraw.svg'
import LoadingBar from 'react-redux-loading-bar'
class Home extends Component {

    state = {
        questionType: 'Unanswered'
    }

    handleChoice = (event) => {
        const val = event.target.innerText
        if(val !== this.state.questionType){
            this.setState({
                questionType: val
            })
        }
    }

    handleSwitchBtn = (event) => {
        const btn = event.target
        btn.nextSibling.classList.toggle("show")
    }

    closeDropDwon = (event) => {
        if (!event.target.matches('.dropdown-btn')) {
            var dropdowns = document.getElementsByClassName("dropdown-choices");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
              var openDropdown = dropdowns[i];
              if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
              }
            }
          }
    }

    componentDidMount(){
        document.addEventListener('click', this.closeDropDwon)
    }

    componentWillUnmount(){
        document.removeEventListener('click', this.closeDropDwon)
    }

    render(){
        const { answeredQuestionsID,  unAnsweredQuestionsID} = this.props
        const { questionType } = this.state
        
        return(
            <div className="home">
                <div className="top-section">
                    <h1 className="top-section--heading">Questions</h1>
                    <div className="dropdown">
                        <button className="dropdown-btn" onClick={this.handleSwitchBtn}>{questionType}</button>
                            {
                               questionType ===  'Unanswered' 
                                ?   <div className="dropdown-choices">
                                        <div onClick={this.handleChoice} className="choice-active">Unanswered</div>
                                        <div onClick={this.handleChoice}>Answered</div>
                                    </div>
                                :   <div className="dropdown-choices">
                                        <div onClick={this.handleChoice}>Unanswered</div>
                                        <div onClick={this.handleChoice} className="choice-active">Answered</div>
                                    </div>
                            }
                    </div>
                </div>
                <p className="info">Below are the Questions created by all users.</p>
                
                {
            
                    questionType === 'Answered' 
                    ? 
                        answeredQuestionsID.map((id) => (
                            <PollCard key={id} id={id}/>
                        ))
                    : unAnsweredQuestionsID.length > 0 
                        ? 
                            unAnsweredQuestionsID.map((id) => (
                                <PollCard key={id} id={id}/>
                            ))
                        :   <div className="error-conatiner">
                                <img src={noQuestion} alt='no more question' className="question-error"></img>
                                <p className="info">No more question to answer</p>
                            </div>
                
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