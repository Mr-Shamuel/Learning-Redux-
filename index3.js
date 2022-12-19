const { createStore } = require('redux');

const initialCounterState = {
    count: 0
}

const incrementCounterState = () => {
    return {
        type: 'increment',
    }
}

const ReactReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case 'increment':
            return { OurCounter: state.count + 1 }


    }
}


const store = createStore(ReactReducer);
store.subscribe(() => {
    console.log('final result :', store.getState());
})
store.dispatch(incrementCounterState())
// store.dispatch({ type: 'increment' })