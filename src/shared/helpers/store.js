import { SET_LOADING } from 'shared/store/types/'

/**
* Sets loading state
* @param {string} scope - store scope
* @param {bool} loading - loading value
* @return {object}
*/
export const setLoading = (scope, loading) => {
  return {
    type: SET_LOADING,
    payload: {
      scope,
      loading
    }
  }
}
