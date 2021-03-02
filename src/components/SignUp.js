import SignUpForm from './SignUpForm'
import React, {useState, useEffect} from "react";
import signupSchema from './signupSchema'
import * as yup from 'yup'
import axios from 'axios'

const initialFormValues = {
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    // +++ We dont need these i dont think when creating an account? + you dont have values for those
    // title: '',
    // category: '',
    // source: '',
    // ingredients: '',
    // instructions: '',
}
const initialFormErrors = {
  username: '',
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  // +++ Same there
  // title: '',
  // category: '',
  // source: '',
  // ingredients: '',
  // instructions: '',
}

const initialDisabled = true

export default function SignUp() {

    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)

    const formSubmit = () => {
        const signupSubmit = {
            username: formValues.username.trim(),
            firstname: formValues.firstname.trim(),
            lastname: formValues.lastname.trim(),
            email: formValues.email.trim(),
            password: formValues.firstname.trim(),
            // title: formValues.title.trim(),
            // category: formValues.category.trim(),
            // source: formValues.source.trim(),
            // ingredients: formValues.ingredients.trim(),
            // instructions: formValues.instructions.trim(),
        }
        // Post request towards the server
        axios.post('https://family-recipes-cookbook.herokuapp.com/user/register', signupSubmit)
        .then(res => {
          console.log(res)
        })
        .catch(err => console.log({err}))
      }
    
    const inputChange = (name, value) => {
      // Validating forum first then pluggin in the values
        yup.reach(signupSchema, name)
          .validate(value)
          .then(() => {
            setFormErrors({...formErrors, [name]: ''})
          })
          .catch(err => {
            setFormErrors({...formErrors, [name]: err.errors[0]})
          })

          console.log(name, value , 'test')
        // Plugging in values into FORMVALUES
        setFormValues({
          ...formValues,
          [name]: value 
        })
    }

    useEffect(() => {
      signupSchema.isValid(formValues).then(valid => 
        setDisabled(!valid))
      }, [formValues])

return(
    <div className='signup'>
        <h1>.//</h1>

        <SignUpForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
        />

    </div>
    )
}
