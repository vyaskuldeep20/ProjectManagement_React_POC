import {createStore,applyMiddleware, compose} from 'redux'
import RootReducer from './../Reducers/RootReducer'
// import logger from 'redux-logger'
import thunk from 'redux-thunk'
// import reduxImmutableSateInariant  from 'redux-immutable-state-invariant'

export default function ConfigureStore(initalstate){
    const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(
        RootReducer,initalstate,composeEnhancers(applyMiddleware(thunk))
    );
}