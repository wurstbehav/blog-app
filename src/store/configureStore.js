import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import authReducer from '../reducers/auth'
import postsReducer from '../reducers/posts'
import filtersReducer from '../reducers/filters'

const composrEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => { //we need function to export it so
    const store = createStore(
        combineReducers({
            auth: authReducer,
            posts: postsReducer,
            filters: filtersReducer
        }),
        composrEnhancers(applyMiddleware(thunk))
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store
}



