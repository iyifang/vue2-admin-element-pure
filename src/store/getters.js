const getters = {
  token: state => state.user.token,
  sidebar: state => state.app.sidebar,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  userInfo: state => state.user.userInfo,
}
export default getters