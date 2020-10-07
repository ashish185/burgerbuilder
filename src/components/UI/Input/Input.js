import React from 'react';
import classes from "../../UI/Input/Input.css";

const Input = (props) => {
    let inputElement = null;
    switch ( props.inputType ) {
        case ('input'):
            inputElement= <input className={classes.InputElement} {...props }/>;
            break;
        case ('textarea'):
            inputElement = <textarea className={classes.InputElement}{...props} />;
            break;
        default:
            inputElement = <input className={classes.InputElement} {...props}/>
    }
    return (
        <div>
            <label>{props.label}</label>
            {inputElement}
        </div>
    );
};

export default Input;
