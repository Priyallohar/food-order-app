import React from 'react'
import CardContext from './CartContext'

const CartProvider = (props) => {
   const addItemCartHandler = item =>{}
   const removeItemCartHandler = id =>{}

    const cartContext = {
        item:[],
        totalAmount:0,
        addItem:(item)=>addItemCartHandler,
        removeItem:(id)=>removeItemCartHandler
    }
  return (
    <CardContext.Provider value={cartContext}>
        {props.children}
    </CardContext.Provider>
  )
}

export default CartProvider