const login = (state={},action) => {
  let res = { ...state }
  if (action.type=='@@admin_login') {
    res = { ...res, ...action.payload }
  }
  return res
}
export default { login }
