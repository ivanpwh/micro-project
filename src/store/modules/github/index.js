// store index
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
  itemUserRepositories: {},
  isLoadingUserRepositories: false,
  errorUserRepositories: false,

  itemMarkdown: {},
  isLoadingMarkdown: false,
  errorMarkdown: false,
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
}