import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes';
import { initListAction } from './actionCreators';
import axios from 'axios';
function* getInitList() {
    console.log('abc');
    try {
        const { data } = yield axios.get('/list');
        const action = initListAction(data);
        yield put(action);
    } catch (error) {
        console.log(error);
    }

    // axios.get('/list').then(res => {
    //     console.log(res);
    //     const data = res.data;
    //     const action = initListAction(data);
    //     // store.dispatch(action);
    //     put(action);
    //     console.log(action);
    // })
}
//捕获action
function* todoSagas() {
    yield takeEvery(GET_INIT_LIST, getInitList);
}

export default todoSagas;