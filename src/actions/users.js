export const GET_USERS = 'GET_USERS'
export const ADD_USER = 'ADD_USER'

export function getUsers(users) {
    return {
        type: GET_USERS,
        users,
    }
}

export function addUser(user) {
    return {
        type: ADD_USER,
        user,
    }
}
