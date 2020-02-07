import {
    RECEIVE_QUESTIONS,
    SAVE_QUESTIONS_ANSWER
} from '../actions/questions'

export default function questions(state = {}, action){    
    switch(action.type){
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case SAVE_QUESTIONS_ANSWER:
            const { qid, answer, authedUser} = action.answer            
            return {
                ...state,
                [qid]:{
                    ...state[qid],
                    [answer]:{
                        ...state[qid][answer],
                        votes:state[qid][answer].votes.concat([authedUser])
                    }
                }
            }
        default:
            return state
    }
}