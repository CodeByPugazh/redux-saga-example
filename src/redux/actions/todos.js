import * as types from '../types'

export function getTodos(todos) {
    return {
        type: types.GET_TODOS_REQUESTED,
        payload: todos,
    }
}