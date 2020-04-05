// store getters
const itemUserRepositories = state => state.itemUserRepositories.data
const isLoadingUserRepositories = state => state.isLoadingUserRepositories
const errorUserRepositories = state => state.errorUserRepositories.data

const itemMarkdown = state => state.itemMarkdown.data
const isLoadingMarkdown = state => state.isLoadingMarkdown
const errorMarkdown = state => state.errorMarkdown.data

export default {
  itemUserRepositories,
  isLoadingUserRepositories,
  errorUserRepositories,

  itemMarkdown,
  isLoadingMarkdown,
  errorMarkdown,
}