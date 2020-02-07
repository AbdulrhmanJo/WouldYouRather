import { saveQuestionAnswer } from "../utils/api"

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTIONS_ANSWER = 'SAVE_QUESTIONS_ANSWER'


export function handleSaveQuestionAnswer(answer){
    return ( dispatch, getState ) => {
        const {authedUser} = getState()
        answer.authedUser = authedUser
        
        return saveQuestionAnswer(answer)
        .then(() => dispatch(questionAnswer(answer)))
    }
}


function questionAnswer(answer){
    return{
        type:SAVE_QUESTIONS_ANSWER,
        answer
    }
}

export function receiveQuestions(questions){
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}