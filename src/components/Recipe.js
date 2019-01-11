import React from 'react'
import { Card, CardTitle } from 'react-materialize'
import v4 from 'uuid'

const Recipe = (props) => {

const handleClick = () => {
  props.moveRecipe(props.id)
}

  return (
    <Card
      key={v4()}
      header={<CardTitle key={v4()} image={props.image} />}
      title={props.title}
      onClick={handleClick}
    />
  )
}

export default Recipe
