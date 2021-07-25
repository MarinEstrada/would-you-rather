import { combineReducers } from 'redux'
import { authUser } from './authUser'
import { polls } from './polls'
import { users } from './users'

// call combineReducers with desired object
// object composed of reducers to be used
export default function combineReducers({
    authUser,
    polls,
    users,
})
