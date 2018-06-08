import { combineReducers } from 'redux';
import { chatReducer } from './ChatReducer';

const rootReducer = combineReducers({
    chatReducer
});

export default rootReducer;