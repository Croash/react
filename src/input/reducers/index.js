import initState from './initState.json'


export default (state = initState, action) => {
  const payload = action.payload
  switch (action.type) {
    case 'blog@@data_update':
      return { ...state, data: { ...state.data, ...payload }  }
    case 'blog@@relation_update':
      return { ...state, relation: { ...state.relation, ...payload }  }
    default:
      return state
  }
}
