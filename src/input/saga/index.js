import { takeEvery, takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

// worker saga
function* showPostsAsync(action) {
  console.log(action)
  yield put(action.payload)
}

// wacther saga
function* watchGetPosts() {
  yield takeLatest('blog@@relation_update', showPostsAsync)
}

// root saga
export default function* rootSaga() {
  yield watchGetPosts()
} 
