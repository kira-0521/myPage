export const state = () => ({
  form: {
    name: '',
    email: '',
    text: '',
  },
})

export const mutations = {
  formValueChange(state, { value, form }) {
    state.form[form] = value
  },
}

export const actions = {
  formValueChange({ commit }, { value, form }) {
    commit('formValueChange', { value, form })
  },
}
