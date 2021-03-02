
import React from "react";

export default function LoginForm(props) {
    const {
        values,
        submit,
        change,
        disabled,
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value } = evt.target
        change(name, value)
      }

    
    return(
    <form className='loginformcontainer' onSubmit={onSubmit}>
      <div>
        <label>Username
            <input
            value={values.username}
            onChange={onChange}
            name='username'
            type='text'
            />
        </label>

        <label>Password
            <input
            value={values.password}
            onChange={onChange}
            name='password'
            type='password'
            />
        </label>
        </div>
        <button disabled={disabled}>Log In</button>
    </form>
    )
}
