import * as type from '../types'

const initialState = {
    todos: [],
    loading: false,
    error: null
}

export default function todos(state = initialState, action) {
    switch (action.type) {
        case type.GET_TODOS_REQUESTED:
            return {
                ...state,
                loading: true
            }
        case type.GET_TODOS_SUCCESS:
            return {
                ...state,
                loading: false,
                todos: action.todos
            }
        case type.GET_TODOS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message
            }
        default:
            return state;
    }
}