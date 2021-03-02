import React, {useState, useEffect} from "react";
import * as yup from 'yup'
import {Link} from "react-router-dom";
import DashboardSearchForm from './DashboardSearch'
import { axiosWithAuth } from "../auth/axiosWithAuth";
import { connect } from "react-redux";

const initialFormValues = {
    search: '',
  }

  // geto data
const s = [
  {    
    title: 'Chocolate Cake',
    category: 'cake, dessert,chocolate',
    source: 'online',
    ingredients: 'chocolate, flour, eggs, sugar, milk',
    instructions: 'mix flour, eggs, sugar, and milk, melt chocolate and mix in, then bake.',
    user_id: 1
  },
  {
    title: 'Pepperoni Pizza',
    category: 'dinner, lunch',
    source: 'me',
    ingredients: 'dough, sauce, cheese, pepperoni',
    instructions: 'spread dough, add sauce, cheese and pepperoni, bake',
    user_id: 2
  },
  {
    title: 'Turkey Dinner', 
    category: 'turkey, feast, dinner', 
    source: 'Grandma', 
    ingredients: 'turkey, veggies, ground turkey', 
    instructions: 'thaw turkey, and then go get grandma so she can do it.', 
    user_id: 3
  }
]

function Dashboard({ user }) {


  


  const [recipes, setRecipes] = useState(s)
  const [formValues, setFormValues] = useState(initialFormValues)
  
  const formSubmit = () => {
    // Form submited
    console.log('form submited')
  }

  const inputChange = (name, value) => {
    console.log(formValues)
    // yup.reach(name)
    //   .validate(value)
    //   .then(() => {
    //     setFormErrors({...formErrors, [name]: ''})
    //   })
    //   .catch(err => {
    //     setFormErrors({...formErrors, [name]: err.errors[0]})
    //   })
    setFormValues({
      ...formValues,
      [name]: value 
    })
  }


  useEffect(() => {
    axiosWithAuth().get(`/user/${user.user_id}`)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log({err})
      })
  },[user])

  console.log(user.user_id)

  return (
    <div className='dashboard-container'>
      <h2>Dashboard</h2>

      <div className="dashboard-content">

      <div className="recipe-hub">
        {recipes.map(recipe => (
          <div 
            className='recipe-card-container'
            key={recipe.id}>
        
        <h2>{recipe.title}</h2>
        <p>{recipe.category}</p>
        <p>{recipe.source}</p>

          
        {/* Links that will be routed correctly by unit 3 */}
        <Link to="/">Edit Recipe</Link>
        <Link to="/">Delete Recipe</Link>
        <Link to="/">Display Recipe</Link>

        </div>
        ))}
      </div>

      <DashboardSearchForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
      
      />


      </div>

    </div>
  )
}

const mapStateToProps = state => {
  return({
    user:state.userReducer.user
  })
}

export default connect(mapStateToProps)(Dashboard)
