import { GET_POLLS, ADD_POLL, SAVE_POLL_ANSWER } from '../actions/polls'

export default function polls(state = {}, action) {
    switch(action.type){
        case GET_POLLS:
            return {
                ...state,
                ...action.polls,
            }
        case ADD_POLL:
            return {
                ...state,
                [action.poll.id]: action.poll,
            }
        case SAVE_POLL_ANSWER:
            return {
                ...state,
                [action.authUser]: {
                    ...state[action.authUser],
                    answers: {
                        ...state[action.authUser].answers,
                        answers[action.id]: action.answer
                    }
                }
            }
        default:
            return state
    }
}
