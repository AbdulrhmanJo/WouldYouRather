import { saveQuestionAnswer, saveQuestion } from "../utils/api"
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTIONS_ANSWER = 'SAVE_QUESTIONS_ANSWER'
export const ADD_QUESTION = 'ADD_QUESTION'

export function handleAddQuestion(question){
    return (dispatch, getState) => {
        const { authedUser } = getState()
        question.author = authedUser
        return saveQuestion(question)
            .then((formattedQuestion) => dispatch(addQuestion(formattedQuestion)))
    }
}

export function handleSaveQuestionAnswer(answer){
    return ( dispatch, getState ) => {
        const {authedUser} = getState()
        answer.authedUser = authedUser
        
        return saveQuestionAnswer(answer)
        .then(() => dispatch(questionAnswer(answer)))
    }
}

function addQuestion(question){
    return {
        type:ADD_QUESTION,
        question
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