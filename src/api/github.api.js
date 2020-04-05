import axios from 'axios'

// get data user repositories in github
export const getUserRepositories = (user) => axios.get(`users/${user}/repos`)
  .then(res => res)
  .catch((err) => {
    throw err.response
  })

// get data Read Me in user repository
export const getMarkdown = (user, repository) => axios.get(`repos/${user}/${repository}/readme`)
  .then(res => res)
  .catch((err) => {
    throw err.response
  })