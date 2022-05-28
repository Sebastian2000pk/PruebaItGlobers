
const INITIAL_STATE = {
  authToken: null,
}

type Action  = {
  type: string,
  payload?: string
}

export default (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        authToken: action.payload,
      }
    case 'LOGOUT':
      return {
        authToken: null,
      }
    default:
      return state
  }
}