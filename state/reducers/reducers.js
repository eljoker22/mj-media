import { combineReducers } from 'redux';
import reducerCheckout from './reducerCheckout';

const reducers = combineReducers({
    planId: reducerCheckout,
})

export default reducers;