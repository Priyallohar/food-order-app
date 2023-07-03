import React from 'react'
import classes from "./MealItem.module.css"
import MealItemForm from './MealItemForm'

const MealItem = ({id,name,desc,price}) => {
    let prices = `$${price.toFixed(2)}`
  return <li className={classes.meal}>
    <div>
        <h3>{name}</h3>
        <div className={classes.description}>{desc}</div>
        <div className={classes.price}>{prices}</div>
    </div>
    <div>
   <MealItemForm id={id} />
    </div>
  </li>
}

export default MealItem