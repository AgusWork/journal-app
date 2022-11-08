import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import authReducer from '../components/reducers/authReducer';
 

export const store = configureStore(
    {
        reducer: {
            auth: authReducer
        },
        // middleware: [thunk],
        // devTools: true
    },
    +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);