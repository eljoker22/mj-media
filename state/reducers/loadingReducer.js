const initialState = true;

const loadingReducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOADING':
            return state = true;
        case 'LOADED':
            return state = false;
        default:
            return state;
    }
}

export default loadingReducer;