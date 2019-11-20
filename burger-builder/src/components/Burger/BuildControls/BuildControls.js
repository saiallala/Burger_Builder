import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: "Salad", type: "salad"},
    {label: "Meat", type: "meat"},
    {label: "Cheese", type: "cheese"},
    {label: "Bacon", type: "bacon"}
]
const buildControls = (props) => {
    return (
        <div className = {classes.BuildControls}>
            <p className = {classes.price}>Current Price: {props.price.toFixed(2)}</p>
            {controls.map(ctrl =>  (
                <BuildControl 
                key = {ctrl.label} 
                label = {ctrl.label}
                added = {() => props.ingredientsAdded(ctrl.type)}
                removed = {() => props.ingredientsRemoved(ctrl.type)}
                disabled = {props.disabled[ctrl.type]}
                />
            ))}
            <button className = {classes.OrderButton}
            disabled = {!props.purchasable}
            onClick = {props.ordered}>
            Order Now</button>
        </div>
    );
}

export default buildControls;
