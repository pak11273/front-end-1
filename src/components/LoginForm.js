import React, { useState } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { setUser } from '../actions'


const initialState = {
  username: '',
  password: ''
}


function LoginForm(props) {

  const [state, setState] = useState(initialState)

  

  const onChange = (e) => {
    const {name, value} = e.target
    setState({
      ...state,
      [name]: value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    console.log(state)

    axios.post('https://family-recipes-cookbook.herokuapp.com/user/login', state)
      .then((res) => {

        localStorage.setItem('token', res.data.token)
        
        props.setUser(res.data.user)
      })
      .catch(err => console.log(err))
  }




  return (
    <div>
      <h2>Login Form</h2>

      {/* testing */}
      <form onSubmit={onSubmit}>
        <label>
          username: 
          <input type="text" name="username" onChange={onChange} />
        </label>

        <label>
          password:
          <input type="password" name="password" onChange={onChange} />
        </label>

        <button>Submit</button>
      </form>




    </div>
  )
}



export default connect(null, { setUser})(LoginForm)
