import React from 'react'

function DisplayPage() {

  const recipe = {
    title: 'Chocolate Cake',
    category: 'cake, dessert,chocolate',
    source: 'online',
    ingredients: 'chocolate, flour, eggs, sugar, milk',
    instructions: 'mix flour, eggs, sugar, and milk, melt chocolate and mix in, then bake.',
    user_id: 1
  };

  const ingredientsArray = recipe.ingredients.split(',');

  return (
    <div>
      <h1>{recipe.title}</h1>
      {/* the links on the following line should be replaced with React Links once routing is set up */}
      <a href='/'>Edit Recipe</a> <a href='/'>Delete Recipe</a>
      <p>categories: <em>{recipe.category}</em></p>
      <p>source: {recipe.source}</p>
      <h2>Ingredients</h2>
      <ul>
        {ingredientsArray.map((ingredient, index) => {
          return <li key={index}>{ingredient}</li>;
        })}
      </ul>
      <h2>Directions</h2>
      <p>{recipe.instructions}</p>
    </div>
  )
}

export default DisplayPage
