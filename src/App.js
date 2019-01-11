import React, { Component } from 'react'
import { Row, Col } from 'react-materialize'
import Header from './components/Header'
import CategoryContainer from './components/CategoryContainer'
import RecipeContainer from './components/RecipeContainer'

class App extends Component {

  state = {
    categories:[],
    recipes:[],
    saveRecipes:[],
    filter:""
  }

componentDidMount() {
  fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
  .then(r=>r.json())
  .then(data=>{
    this.setState({
      categories:data.categories
    })
  })
}

loadCategory = (category) =>{
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
  .then(r=>r.json())
  .then(categoryData=>(
    this.setState({
      recipes:categoryData.meals
    })
  ))
}



saveRecipe = (recipeId) =>{
  const savedRecipe = this.state.recipes.find(recipe => recipe.idMeal === recipeId)
  const recipes = this.state.recipes.filter(recipe => recipe.idMeal !== recipeId)
  this.setState({
    saveRecipes: [...this.state.saveRecipes, savedRecipe],
    recipes
  })
}

removeSavedRecipe = (recipeId) =>{
  const foundRecipe = this.state.saveRecipes.find(recipe => recipe.idMeal === recipeId)
  const saveRecipes = this.state.saveRecipes.filter(recipe => recipe.idMeal !== recipeId)
  this.setState({
    recipes : [...this.state.recipes, foundRecipe],
    saveRecipes
  })
}

filterCategory = () => {
  return this.state.categories.filter(category => category.strCategory.toLowerCase().includes(this.state.filter.toLowerCase()) || category.strCategoryDescription.toLowerCase().includes(this.state.filter.toLowerCase())) 
}

onHandleChange = (e) => {
  this.setState({filter: e.target.value})
}

  render() {
    return (
      <div>
        <Header eventChange={this.onHandleChange} />

        <Row>
          <Col s={4} className='grid-example'>
            <h4>Categories</h4>
            <CategoryContainer categories={this.filterCategory()} loadCategory={this.loadCategory} />
          </Col>

          <Col s={4} className='grid-example'>
            <h4>Recipes</h4>
            <RecipeContainer recipes={this.state.recipes} moveRecipe={this.saveRecipe}/>
            {/* how can we render recipes here? */}
          </Col>

          <Col s={4} className='grid-example'>
            <h4>My Recipes</h4>
            <RecipeContainer recipes={this.state.saveRecipes} moveRecipe={this.removeSavedRecipe} />
            {/* how can we render recipes here? */}
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
