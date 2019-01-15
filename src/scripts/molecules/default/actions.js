// App
import * as aT from './actionTypes'
import api from 'atoms/apis'
import { actionSet } from 'atoms/actionSet'

// 3rd party
import axios from 'axios'

module.get = () => dispatch => {
  return axios.get(api.default)
  .then(payload => {
    dispatch(actionSet(aT.DEFAULT_SUCCESS, payload.data))
  })
  .catch(error => dispatch(actionSet(aT.DEFAULT_ERROR, error)))
}

export const fetch = (method) => module[method]()
