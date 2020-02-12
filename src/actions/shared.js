import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
import { getInitialData } from '../utils/api'

export const SAVE_QUESTIONS_ANSWER = 'SAVE_QUESTIONS_ANSWER'

export function handleInitialData(){
    return (dispatch) => {
        return getInitialData()
        .then(({users,questions}) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            // dispatch(setAuthedUser('sarahedo'))
        })
    }
}