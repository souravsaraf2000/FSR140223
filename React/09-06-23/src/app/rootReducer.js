const initialState = {
    count : 0
}

const rootReducer = (state = initialState, action) => {
    if(action.type == 'INCREMENT_VALUE'){
        return {...state, count: state.count + 1}
    }
    else if(action.type == 'DECREMENT_VALUE'){
        return {...state, count: state.count - 1}
    }
    return state
}

export default rootReducer