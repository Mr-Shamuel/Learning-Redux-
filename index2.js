//define state
//action
//reduce
//store


const { createStore } = require('redux');
const initialState = {
    count: 0,
}

const incrementCounterState = () => {
    return {
        type: 'increment',
    }

}
const decrementCounterState = () => {
    return {
        type: 'decrement',
    }

}
const resetCounterState = () => {
    return {
        type: 'reset',
    }

}

//reduc
const CounterReduce = (state = initialState, action) => {
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
        case 'reset':
            return {
                ...state,
                count: 0,
            }
        default:
            return state;
    }

}


//store
const store = createStore(CounterReduce);
store.subscribe(() => {
    console.log(store.getState());
})
store.dispatch({ type: 'increment' })