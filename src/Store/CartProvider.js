import React from 'react'
import CardContext from './CartContext'
import { useReducer } from 'react'

const defaultCartSate = {
  items:[],
  totalAmount:0
}

const cartReducer = (state,action) => {
  if(action.type==="ADD"){
    const updateItems= state.items.concat(action.item)
    const updatedTotalAmount = state.totalAmount+action.item.price*action.item.amount;
    return {
      items:updateItems,
      totalAmount:updatedTotalAmount
    }
  }
 
}

const CartProvider = (props) => {
  const [cartSate,dispatchCartAction]=useReducer(cartReducer,defaultCartSate)


   const addItemCartHandler = item =>{
    dispatchCartAction({type:"ADD" , item:item})
   }
   const removeItemCartHandler = id =>{
    dispatchCartAction({type:"REMOVE" , id:id})
   }

    const cartContext = {
        item:[],
        totalAmount:cartSate.totalAmount,
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