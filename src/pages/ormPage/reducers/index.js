const init = (state={},action) => {
  const res = { ...state }
  if (action.type=='@@admin_init') {
    if(action.namespace) {
      res[action.namespace] = { ...res[action.namespace], ...action.payload }
    }
  }
  return res
}

export default {
  data:init
}
