import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'

let stores = createStore(
	reducers
	// ,	applyMiddleware(logger,gg)
)

export default stores
