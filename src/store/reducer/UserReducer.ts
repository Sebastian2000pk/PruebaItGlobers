
const INITIAL_STATE = {
  page: 1
}

type Action  = {
  type: string,
  payload?: string
}

export default (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case 'PAGE':
      return {
        page: action.payload,
      }
    default:
      return state
  }
}