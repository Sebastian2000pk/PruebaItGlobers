
const INITIAL_STATE = {
  authToken: null,
  email: null,
}

type Action  = {
  type: string,
  payload?: any
}

export default (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        authToken: action.payload.token,
        email: action.payload.email,
      }
    case 'LOGOUT':
      return {
        authToken: null,
        email: null,
      }
    default:
      return state
  }
}