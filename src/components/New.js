import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../auth/axiosWithAuth';
import { connect } from "react-redux";

function EditRecipe({user_id}) {
  
  const history = useHistory()
  const initialState = {
    title: '',
    category: '',
    source: '',
    ingredients: '',
    instructions: ''
  }

  const [formState, setFormState] = useState(initialState);

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormState({...formState, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formState)
    console.log('submmited')
    console.log(stateFormationSequenceOver9000(formState))


    axiosWithAuth().post('/recipe', stateFormationSequenceOver9000(formState))
      .then(res => {
        console.log(res)
        history.push('/dashboard')
      })
      .catch(err => console.log({err}))


  }

  // Function that returns the final version of the state that we want to post
  const stateFormationSequenceOver9000 = (state) => {
    console.log(user_id)
    return{
      title: state.title,
      category: state.category,
      source: state.source,
      ingredients: state.ingredients,
      instructions: state.instructions,
      user_id: user_id
    }
  }

  return (
    <div>
      <h1>New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <label>
            Title: <input type='text' name='title' value={formState.title} onChange={handleChange}/>
          </label>
        </p>
        <p>
          <label>
            Categories (separate with commas): <input type='text' name='category' value={formState.category} onChange={handleChange}/>
          </label>
        </p>
        <p>
          <label>
            Source: <input type='text' name='source' value={formState.source} onChange={handleChange}/>
          </label>
        </p>
        <p>
          <label>
            Ingredients (separate with commas): <br />
            <textarea name='ingredients' value={formState.ingredients} onChange={handleChange}/>
          </label>
        </p>
        <p>
          <label>
            Instructions: <br />
            <textarea name='instructions' value={formState.instructions} onChange={handleChange}/>
          </label>
        </p>
        <p>
          <input type='submit' value='Submit'/>
        </p>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state.userReducer.user)
  return({
    user_id: state.userReducer.user.user_id
  })
}

export default connect(mapStateToProps)(EditRecipe)