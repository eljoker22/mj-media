
export const addToChekout = (id) => {
    return{
        type: 'ADD_PLAN',
        id: id
    }
} 

export const loadingSwitcher = (load) => {
    const loading = load ? 'LOADING' : 'LOADED';
    return{
        type: loading,
    }
}