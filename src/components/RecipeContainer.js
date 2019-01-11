import React from 'react'
import Recipe from './Recipe'
import v4 from 'uuid' // another way of generating unique ids (useful for keys)

class RecipeContainer extends React.Component {
  render() {
    const recipeList = this.props.recipes.map(recipe=>{
      return <Recipe
      key={recipe.idMeal}
      id={recipe.idMeal}
      image={recipe.strMealThumb}
      title={recipe.strMeal}
      moveRecipe={this.props.moveRecipe}
       />
    })
    return (
      <div>
      {recipeList}
      </div>
    )
  }
}

export default RecipeContainer
