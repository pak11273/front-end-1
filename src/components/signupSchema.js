import * as yup from 'yup'

const signupSchema = yup.object().shape({
    username: yup.string()
    .required('Username is required').min(3, 'Must be 3 characters'),
    password: yup.string()
    .required('Password is required').min(7, 'Must be 7 characters'),

    firstname: yup.string()
    .required('First Name is required'),
    lastname: yup.string()
    .required('Last name is required'),
    email: yup.string().email()
    .required('Valid email is required'),

    // title: yup.string(),
    // category: yup.string(),
    // source: yup.string(),
    // ingredients: yup.string(),
    // instructions: yup.string(),
})

export default signupSchema