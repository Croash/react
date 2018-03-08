export default (state = { count: 12 , list: [ 1,2,3,4,5 ] }, action) => {
  let count = state.count
  let list = state.list
  switch (action.type) {
    case 'INCREMENT':
      list.push(count)
      return { count: count + 2 , list }
    case 'DECREMENT':
      list.push(count)
      return { count: count - 1 , list }
    case 'ADD':
      list.push(action.text)
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
