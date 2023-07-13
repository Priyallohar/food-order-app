import React,{useRef} from 'react'
import classes from "./MealitemForm.module.css"
import Input from '../../UI/Input'


const MealItemForm = (props) => {
   const amountInputref = useRef()


   const submitHandler = (event)=>{
    event.preventDefault()
    const enteredAmount = amountInputref.current.value
    const enteredAmountNumber = +enteredAmount

    if(enteredAmount.trim().length===0|| enteredAmountNumber<1||enteredAmountNumber>5){
        return
    }
   }


  return <form className={classes.form} onSubmit={submitHandler}>
    <Input 
    ref= {amountInputref}
    lable = "Amount"
    input = {{
        id: 'amount_' + props.id, 
        type:"number",
        min:"1",
        max:"5",
        step:"1",
   defaultValue:"1"
    }}
    />
    <button>
        +Add
    </button>
  </form>
}

export default MealItemForm