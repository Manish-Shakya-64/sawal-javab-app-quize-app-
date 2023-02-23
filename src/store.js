import {configureStore} from '@reduxjs/toolkit'
import { getQuestions } from './reducer';

const store = configureStore({
    reducer: {

        questions : getQuestions,

    }
})

export default store;