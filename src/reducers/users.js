import { GET_USERS, ADD_USER } from '../actions/users'

export default function users(state = {}, action) {
    switch(action.type) {
        case GET_USERS:
            return {
                ...state,
                ...action.polls,
            }
        case ADD_USER:
            return {
                ...state,
                [action.user.id]: action.user
            }
        default:
            return state
    }
}
