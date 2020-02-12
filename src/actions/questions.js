import { saveQuestionAnswer, saveQuestion } from "../utils/api"
import { showLoading, hideLoading } from 'react-redux-loading'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTIONS_ANSWER = 'SAVE_QUESTIONS_ANSWER'
export const ADD_QUESTION = 'ADD_QUESTION'

export function handleAddQuestion(question){
    return (dispatch, getState) => {
        dispatch(showLoading());
        const { authedUser } = getState()
        question.author = authedUser
        return saveQuestion(question)
            .then((formattedQuestion) => dispatch(addQuestion(formattedQuestion)))
            .then(() => dispatch(hideLoading()));

    }
}

export function handleSaveQuestionAnswer(answer){
    return ( dispatch, getState ) => {
        dispatch(showLoading());
        const {authedUser} = getState()
        answer.authedUser = authedUser
        
        return saveQuestionAnswer(answer)
        .then(() => dispatch(questionAnswer(answer)))
        .then(() => dispatch(hideLoading()));

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