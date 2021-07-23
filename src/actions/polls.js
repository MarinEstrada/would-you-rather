export const GET_POLLS = 'GET_POLLS'
export const ADD_POLL = 'ADD_POLL'
export const SAVE_POLL_ANSWER = 'SAVE_POLL_ANSWER'

export function getPolls(polls) {
    return {
        type: GET_POLLS,
        polls,
    }
}

// Note: function takes in object containing 3 parameters
//    the author, the first option text,and the second option text
export function addPoll(poll) {
    return {
        type: ADD_POLL,
        poll,
    }
}

export function savePollAnswer({ authUser, qid, answer }){
    return {
        type: SAVE_POLL_ANSWER,
        authUser,
        qid,
        answer,
    }

}
