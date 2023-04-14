export const state = () => ({
  user: null,
  currency: 'IDR',
  showContactModal: false,
})


export const mutations = {
  ON_AUTH_STATE_CHANGED_MUTATION: (state, {authUser, claims}) => {
    if (authUser) {
      const {uid, email, emailVerified} = authUser
      state.user = {uid, email, emailVerified}
    }
  },
  REMOVE_USER: state => {
    state.user = null
  },
  SHOW_CONTACT_MODAL: state => {
    state.showContactModal = true
  },
  HIDE_CONTACT_MODAL: state => {
    state.showContactModal = false
  },
}
