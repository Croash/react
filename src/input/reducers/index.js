export default (state = {  list: [ 1,2,3,4,5 ], count: 123, relation:{ open:false } }, action) => {
  const payload = action.payload
  switch (action.type) {
    case 'blog@@data_update':
      console.log(action)
      console.log(state)
      return { ...state, data: { ...state.data, ...payload }  }
    case 'blog@@relation_update':
      console.log(action)
      return { ...state, relation: { ...state.relation, ...payload }  }
    default:
      return state
  }
}
