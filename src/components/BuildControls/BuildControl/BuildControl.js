import React from 'react';
import classes from './BuildControl.css';

const buildControl = (props) => (
        <div className={classes.BuildControl}>
            <button className={classes.Label}> {props.label}</button>
            <button className={classes.Less} disabled={props.disabledInfo} onClick={ props.removed }>Less</button>
            <button className={classes.More} onClick={ props.added}>More</button>
        </div>
    );
export default buildControl;
