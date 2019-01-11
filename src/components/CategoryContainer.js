import React from 'react'
import Category from './Category'
import v4 from 'uuid' // another way of generating unique ids (useful for keys)

class CategoryContainer extends React.Component {
  render() {
    const categoryList = this.props.categories.map(category => {
      return <Category
       key={category.idCategory}
       id={category.idCategory}
       name={category.strCategory}
       image={category.strCategoryThumb}
       desc={category.strCategoryDescription}
       loadCategory={this.props.loadCategory}
       />
    })
    return (
      <div>{categoryList}</div>
    )
  }
}

export default CategoryContainer
