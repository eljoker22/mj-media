const initialState = 0;

const reducerCheckout = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PLAN':
            return state = action.id;
        default:
            return state;
    } 

}

export default reducerCheckout;