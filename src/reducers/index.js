// eslint-disable-next-line no-unused-vars

import {combineReducers} from "redux";
import testimonicalsReducer from './testimonicals'
import serviceReducer from './service'

const allReducers = combineReducers({
    testimonicalsReducer,
    serviceReducer,
});

export default allReducers;