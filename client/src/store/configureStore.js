import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import userReducer from '../reducers/user'
import notesReducer from '../reducers/notes'
import categoriesReducer from '../reducers/category'
import singleNoteReducer from '../reducers/singleNote'
import singleCategoryReducer from '../reducers/singleCategory'
const configureStore=()=> {
    const store=createStore(combineReducers({
        user:userReducer,
        notes:notesReducer,
        categories:categoriesReducer,
        singleNote:singleNoteReducer,
        singleCategory:singleCategoryReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore