import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import { useContext } from 'react';
import CardContext from '../../Store/CartContext';

const HeaderCartButton = (props) => {
     const Cartctx = useContext(CardContext)
     const numberOfCartItems = Cartctx.item.reduce((cutnumber , items)=>{
        return cutnumber+items.amount
     },0)

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;