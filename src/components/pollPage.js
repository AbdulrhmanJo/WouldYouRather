import React, { Component } from 'react'
import { connect } from 'react-redux'
import PollQuestion from "./PollQuestion";
import PollResault from "./PollResault";
import PollCard from './pollCard'
import PageNotFound from './pageNotFound'
class PollPage extends Component {
    render(){   
        
        if(!this.props.question){
            return <PageNotFound />
        }

        const { name, avatarURL,questions } = this.props.user 
        const { id } = this.props.match.params
        const { answers} = this.props.authedUserInfo
        return (
            this.props.question ?
            <div className="home">
                <img src={avatarURL} alt={`avatar of ${name}`} className="question-avatar"/>
                <p className="question-heading">Would you rather ?</p>
                <p className="info">Asked by <span className="author">{name}</span></p>
                {
                    answers[id] 
                        ? <PollResault question={this.props.question}/>
                        : <PollQuestion id={id}/>
                            
                }
                {
                    questions.length > 0 && <p className="user-question">{`Other questions by ${name}`}</p>
                }
                {
                    questions.filter((qid) => qid !== id).map((id) => (
                        <PollCard key={id} id={id}/>
                    ))
                }
                
            </div>
            : null
        )
    }
}

const mapStateToProp = ({ questions, authedUser, users}, { match }) => {
    const question = questions[match.params.id]    
    let user, authedUserInfo;
    if(question){
        user = users[question.author]    
        authedUserInfo = users[authedUser]
    }
    
    return {
        question,
        user,
        authedUserInfo
    }
}

export default connect(mapStateToProp)(PollPage)