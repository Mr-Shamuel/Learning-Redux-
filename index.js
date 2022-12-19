const { createStore } = require("redux")
//state
const initialCounterState = {
    count: 0,
}
const initialUserState = {
    user: [{ name: 'shamuel Molla' }]
}


//action

const incrementCounterState = () => {
    return {
        type: 'increment'
    }
}

const decrementCounterState = () => {
    return {
        type: 'decrement'
    }
}

const adduserState = () => {
    return {
        type: 'adduser',
        payload: { name: "rashida" }
    }
}

//reducer


const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                count: state.count + 1,
            }
        case 'decrement':
            return {
                ...state,
                count: state.count - 1,
            }

        default:
            return state;

    }
}

const store = createStore(counterReducer);
store.subscribe(() => {
    console.log("our result : ", store.getState());
})

//dispatch store
store.dispatch(incrementCounterState());
store.dispatch(incrementCounterState());
store.dispatch(incrementCounterState());
store.dispatch(decrementCounterState());
