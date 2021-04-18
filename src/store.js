import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './libs/todoSlices';

export default configureStore({
    reducer: {
        todos: todoReducer
    }
})