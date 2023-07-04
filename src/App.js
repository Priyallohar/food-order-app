import React , {useState} from 'react'
import Header from './Components/Layout/Header'
import Meals from './Components/Meal/Meals'
import Cart from './Components/Cart/Cart'




const App = () => {
  const [cartIsShown , setcartIsShown] = useState(false)

  const showCartHandler = ()=>{
    setcartIsShown(true)
  }

  const hideCartHandler=()=>{
    setcartIsShown(false)
  }

  return (
    <React.Fragment>
     {cartIsShown&&<Cart onClose = {hideCartHandler}/>}
      <Header onShowCart = {showCartHandler} onHideCart = {hideCartHandler}/>
      <main>
         <Meals/>
      </main>

    </React.Fragment>
  )
}

export default App