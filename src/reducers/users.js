import {
    RECEIVE_USERS
} from '../actions/users'

import { SAVE_QUESTIONS_ANSWER, ADD_QUESTION } from '../actions/questions'

export default function users(state={}, action){
    switch(action.type){
        case RECEIVE_USERS: 
            return {
                ...state,
                ...action.users
            }
        case SAVE_QUESTIONS_ANSWER:
            const { answer, qid, authedUser} = action.answer
            return {
                ...state,
                [authedUser]:{
                    ...state[authedUser],
                    answers:{
                        ...state[authedUser].answers,
                        [qid]: answer
                        }
                    }
                }
        case ADD_QUESTION:
            const { question } = action
            return {
                ...state,
                [question.author]:{
                    ...state[question.author],
                    questions:state[question.author].questions.concat([question.id])
                }
            }
        default:
            return state
    }
}