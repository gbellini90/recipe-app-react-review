import React from 'react'
import { Card, CardTitle, Button } from 'react-materialize'
import v4 from 'uuid'

const Category = (props) => {

  const handleClick = () => {
    props.loadCategory(props.name)
  }

  return (
    <Card
      key={v4()}
      header={<CardTitle key={v4()} image={props.image} />}
      title={props.name}
      actions={[<Button key={v4()} onClick={handleClick} waves='light'> Find Recipes </Button >]}
    >
      {props.desc}
    </Card>
  )
}

export default Category
