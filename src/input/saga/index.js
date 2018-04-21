import { takeEvery, takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

// worker saga
function* showPostsAsync(action) {
  console.log(action.payload)
  yield put({ type:'blog@@relation_updated',payload:{ sg:'sg' }, key:'stop' })
}

// wacther saga
function* watchGetPosts() {
  yield takeLatest(action => action.type =='blog@@relation_update', showPostsAsync)
  // yield takeLatest(action => action.type =='blog@@relation_update', showPostsAsync)
}

// root saga
export default function* rootSaga() {
  yield watchGetPosts()
} 
