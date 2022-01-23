import { combineReducers } from 'redux';
import reducerCheckout from './reducerCheckout';
import loadingReducer from './loadingReducer';

const reducers = combineReducers({
    planId: reducerCheckout,
    loading: loadingReducer
})

export default reducers;