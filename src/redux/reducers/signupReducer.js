import * as actionType from '../../redux/actions/actionTypes'

const initialState = {
  users: [
    {
      firstName: 'demo',
      lastName: 'demo',
      email: 'demo@gmail.com',
      password: 'demo'
    },
    {
      
      emaill: 'demo@gmail.com',
      passwordd: 'demo',
    }

  ],
  isLogged: false
}

const signUpReducer = (state = initialState, action) => {

  switch (action.type) {
    case actionType.SIGNUP:
      return {
        users: [
          ...state.users,
          action.payload
        ],
      }
    case actionType.LOGIN:
      for (let user of state.users) {
        if (user.emaill === action.payload.email && user.passwordd === action.payload.password) {
          return {
            ...state,
            isLogged: true
          }
        }
      }
    default: return state
  }
    return state;

}
export default signUpReducer;

