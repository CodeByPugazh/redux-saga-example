import { call, put, takeEvery } from 'redux-saga/effects'
import * as type from '../types'

const url = `https://jsonplaceholder.typicode.com/todos`

const getApi = () => {
    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .catch(error => { throw error })
}

function* fetchTodos() {
    try {
        const todos = yield call(getApi);
        yield put({ type: type.GET_TODOS_SUCCESS, todos: todos })
    } catch (e) {
        yield put({ type: type.GET_TODOS_FAILED, message: e.message })
    }
}

function* todoSaga() {
    yield takeEvery(type.GET_TODOS_REQUESTED, fetchTodos)
}

export default todoSaga;