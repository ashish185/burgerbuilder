import React from 'react';
import classes from './DrawToogler.css'
const DrawerToggle = (props) => {
    return (
        <div className={classes.DrawerToggle} onClick={ props.clicked} >
            {/*This will give three lines for the side toogler*/}
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default DrawerToggle;
