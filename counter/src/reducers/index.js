import { INCREMENT, DECREMENT, ADD, DELETE, FIND, CHANGE} from '../actions/action'

export default (state = { count: 12 , list: [1,2,3,4,5] }, action) => {
  var count = state.count;
	var list = state.list;
	switch (action.type) {
    case 'INCREMENT':
			list.push(count)
      return { count: count + 1 , list }
    case 'DECREMENT':
			list.push(count)
      return { count: count - 1 , list }
		case 'ADD':
			console.log(action.text)
			//for (var i in action)console.log(i+' '+action[i])
						console.log(list.length)
			list.push(action.text)
			console.log(list.length)
			//console.log(list.length+' l')
			for(var i in list)console.log(list[i]+' l')
      return { count: count + 1 , list }
		case 'DELETE':
			list.push(count)
      return { count: count - 1 , list }
		case 'FIND':
			list.push(count)
      return { count: count * 2 , list }
		case 'EDIT':
			list.push(count)
      return { count: count / 2 , list }
    default:
      return state
  }
}
