import { createStore } from 'redux'
import reducers from '../reducers'
import {applyMiddleware} from 'redux'


const gg = store => next => action =>{
	let result = next(action)
	return result
}
const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
	//console.log(store.getState().count)
  return result
}

//const logger = createLogger();
let stores = createStore(
	reducers
	,	applyMiddleware(logger,gg)
);

export default stores
