import React from 'react';
const buildControl = (props) => {
    return (
        <div className = "classes.BuildControl">
            <div className = "classes.Label">{props.label}</div>
            <button 
            className = "classes.More" 
            onClick = {props.added}> 
                MORE 
            </button>
            <button 
            className = "classes.Less" 
            onClick = {props.removed} 
            disabled = {props.disabled}> 
                LESS 
            </button>
        </div>
    );
}
export default buildControl;
