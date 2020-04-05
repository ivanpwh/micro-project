// store actions
import {
  getUserRepositories, getMarkdown
} from '@/api/github.api'

import axios from 'axios'

export const GET_USER_REPOS = 'GET_USER_REPOS'
export const GET_USER_REPOS_LOADING = 'GET_USER_REPOS_LOADING'
export const GET_USER_REPOS_DONE = 'GET_USER_REPOS_DONE'
export const GET_USER_REPOS_ERROR = 'GET_USER_REPOS_ERROR'

export const GET_MARKDOWN = 'GET_MARKDOWN'
export const GET_MARKDOWN_LOADING = 'GET_MARKDOWN_LOADING'
export const GET_MARKDOWN_DONE = 'GET_MARKDOWN_DONE'
export const GET_MARKDOWN_ERROR = 'GET_MARKDOWN_ERROR'

export default {
  [GET_USER_REPOS](context, user) {
    context.commit(GET_USER_REPOS_LOADING)
    return getUserRepositories(user)
      .then((response) => {
        context.commit(GET_USER_REPOS_DONE, response)
      })
      .catch((error) => {
        context.commit(GET_USER_REPOS_ERROR, error)
      })
  },
  
  [GET_MARKDOWN](context, {user,repository}) {
    context.commit(GET_MARKDOWN_LOADING)
    return getMarkdown(user,repository)
      .then((response) => {
        axios.get(response.data.download_url)
          .then((res) => {
            context.commit(GET_MARKDOWN_DONE, res)
          })
          .catch((err) => {
            context.commit(GET_MARKDOWN_ERROR, err)
          })
      })
      .catch((error) => {
        context.commit(GET_MARKDOWN_ERROR, error)
      })
  },
}