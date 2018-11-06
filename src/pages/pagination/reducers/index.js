const state = (state={},action) => {
  const res = { ...state }
  if (action.type=='@@admin_state') {
    if(action.namespace) {
      res[action.namespace] = { ...res[action.namespace], ...action.payload }
    }
  }
  return res
}

export default {
  state
}
