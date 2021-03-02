
import { SET_USER  } from '../consts/index'


// User ID and USERNAME ?

const initialState = {
  username:'',
  user_id: ''
}


export const rootReducer = (state = initialState , action) => {
  switch (action.type){

    case SET_USER:
      return {
        ...state, 
        username: action.payload.username,
        user_id: action.payload.user_id
      }

    default:
      return state
  }
}