import React from 'react';
import classes from './Burger.css';
import BurgerIng from './BurgerIng/BurgerIng';

const burger = (props) => {
    let transformedIngredients = Object.keys( props.ingredients  )
        .map( igKey => {
            return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
                return <BurgerIng key={igKey + i} type={igKey} />;
            } );
        } )
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
        console.log(transformedIngredients);

        if(transformedIngredients === 0){
            transformedIngredients = <p> Add ingredients </p>
        }
        
    return(
        <div className = {classes.Burger}>
            <BurgerIng type="bread-top" />
                {transformedIngredients}
            <BurgerIng type="bread-bottom" />
        </div>
    );
}
export default burger;
