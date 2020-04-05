// store mutations
import {
  GET_USER_REPOS_LOADING,
  GET_USER_REPOS_DONE,
  GET_USER_REPOS_ERROR,
  
  GET_MARKDOWN_LOADING,
  GET_MARKDOWN_DONE,
  GET_MARKDOWN_ERROR,
} from './actions'

export default {
  [GET_USER_REPOS_LOADING](state) {
    state.isLoadingUserRepositories = true
  },
  [GET_USER_REPOS_DONE](state, items) {
    state.itemUserRepositories = items
    state.isLoadingUserRepositories = false
    state.errorUserRepositories = false
  },
  [GET_USER_REPOS_ERROR](state, error) {
    state.errorUserRepositories = error
    state.itemUserRepositories = {}
    state.isLoadingUserRepositories = false
  },

  [GET_MARKDOWN_LOADING](state) {
    state.isLoadingMarkdown = true
  },
  [GET_MARKDOWN_DONE](state, items) {
    state.itemMarkdown = items
    state.isLoadingMarkdown = false
    state.errorMarkdown = false
  },
  [GET_MARKDOWN_ERROR](state, error) {
    state.errorMarkdown = error
    state.itemMarkdown = {}
    state.isLoadingMarkdown = false
  }
}