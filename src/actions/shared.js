import { _getUsers, _getQuestions } from '../utils/_DATA.js'
import { getUsers } from './users'
import { getPolls } from './polls'
import { setAuthUser } from './authUser'

export function handleInitial(authUser = null){
    return (dispatch) => {
        Promise.all([_getUsers(), _getQuestions()])
            .then(([users, polls]) =>{
                dispatch(getUsers(users))
                dispatch(getPolls(polls))
                dispatch(setAuthUser(authUser))
            })
    }
}
