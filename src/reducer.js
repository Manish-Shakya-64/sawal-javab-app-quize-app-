import {createReducer} from '@reduxjs/toolkit';

const initialState = {
    questions: [],
    loading : 1
}

export const getQuestions = createReducer(initialState, {
    'GET_QUESTIONS': (state, action) => {
        state.questions = action.payload.results;
        state.loading = action.payload.response_code;
    }
});