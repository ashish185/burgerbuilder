import React from 'react';
import classes from './Toolbar.css';
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToogle/DrawerToogle";

const toolbar = (props ) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={ props.drawerToggleClicked}/>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            {/* jab mobile ho to side wale navigation ko disapper krdo */}
            <NavigationItems/>
        </nav>
    </header>
)

export default toolbar;
 