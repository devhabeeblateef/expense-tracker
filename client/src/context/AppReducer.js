// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch(action.type){
        case 'DELETE_ITEM':
            return {
                ...state,
                transactions: state.transactions.filter((e) => e.id !== action.payload )
            }
        case 'ADD_ITEM':
            return{
                ...state,
                transactions: [action.payload, ...state.transactions]
            }

        default: 
            return state;
    }
}