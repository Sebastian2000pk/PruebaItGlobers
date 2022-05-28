
const INITIAL_STATE = {
  userList: ['TEST']
}

type Action  = {
  type: string,
  payload?: string
}

export default (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case 'GET':
      return {
        userList: action.payload,
      }
    default:
      return state
  }
}