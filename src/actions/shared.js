import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
import { setAuthedUser } from './authedUser'
import { getInitialData } from '../utils/api'

const authedUser_id = 'tylermcginnis'

export function handleInitialData(){
    return (dispatch) => {
        return getInitialData()
        .then(({users,questions}) => {
            dispatch(setAuthedUser(authedUser_id))
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
        })
    }
}