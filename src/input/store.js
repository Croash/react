import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'

let stores = createStore(
	reducers
	// ,	applyMiddleware(logger,gg)
	,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default stores
