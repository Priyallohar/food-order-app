import React from 'react'
import { Card } from '../Components/UI/Card'

const CardContext = React.createContext({
    item:[],
    totalAmount:0,
    addItem:(item)=>{},
    removeItem:(id)=>{}
})

export default CardContext