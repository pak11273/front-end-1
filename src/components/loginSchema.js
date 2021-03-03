import * as yup from 'yup'

const loginSchema = yup.object().shape({
    username: yup.string()
    .required('Username is required'),
    password: yup.string()
    .required('Password is required'),

    // firstname: yup.string()
    // .required('First Name is required'),
    // lastname: yup.string()
    // .required('Last name is required'),
    // email: yup.string()
    // .required('Valid email is required'),

    // title: yup.string(),
    // category: yup.string(),
    // source: yup.string(),
    // ingredients: yup.string(),
    // instructions: yup.string(),
})

export default loginSchema