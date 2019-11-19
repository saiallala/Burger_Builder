import React from 'react';
import classes from './Burger.css';
import BurgerIng from './BurgerIng/BurgerIng';

const burger = (props) => {
    // tranforms an object into an array of key-value pairs where the value is important for how many of the
    // ingridients there are and the key is important for what type of ingridient it is

    const transformedIngridients = Object.keys(props.ingridients)
        .map(igKey => {
            return [...Array(props.ingridients[igKey])].map((_, i) => {
                return <BurgerIng key={igKey + i} type = {igKey} />
            });
        });
        
    return(
        <div className = {classes.Burger}>
            <BurgerIng type="bread-top" />
                {transformedIngridients}
            <BurgerIng type="bread-bottom" />
        </div>
    );
}
export default burger;
