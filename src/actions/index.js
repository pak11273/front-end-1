import {SET_USER} from '../consts'

// login feature
export const setUser = (userObjectIdentifaction) => {
  return({
    type: SET_USER,
    payload: userObjectIdentifaction
  })
}


