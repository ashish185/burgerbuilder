import React from 'react';
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from './SideDrawer.css'
import Backdrop from "../../UI/Backdrop/Backdrop";

const sideDrawer = (props) => {

    /* we want side drawer disaapear as soon as we click neckdrop */
    let attachedClasses = [ classes.SideDrawer, classes.Close];
    if(props.open) {
        attachedClasses = [classes.SideDrawer,classes.Open];
    }
    return (
        <div>
            <Backdrop show={props.open } clicked={props.closed}/>
            {/*<Backdrop show/>*/}
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </div>
    );
};

export default sideDrawer;
