export const state = () => ({
  form: {
    name: '',
    email: '',
    tel: null,
    text: '',
  },
})

export const mutations = {
  updateForm(state, { form, value }) {
    state.form[form] = value
  },
}

export const actions = {
  updateForm({ commit }, { form, value }) {
    commit('updateForm', { form, value })
  },
}
