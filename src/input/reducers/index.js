export default (state = { count: 12 , list: [ 1,2,3,4,5 ] }, action) => {
  switch (action.type) {
    case 'blog@@data_update':
      console.log(state)
      return {}
    default:
      return state
  }
}
