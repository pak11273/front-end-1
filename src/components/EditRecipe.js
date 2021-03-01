import React, {useState} from 'react'

function EditRecipe() {
  const initialState = {
    title: '',
    category: '',
    source: '',
    ingredients: '',
    instructions: '',
  }

  const [formState, setFormState] = useState(initialState);

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormState({...formState, [name]: value})
  }

  return (
    <div>
      <h1>Edit Recipe</h1>
      <form>
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

export default EditRecipe
