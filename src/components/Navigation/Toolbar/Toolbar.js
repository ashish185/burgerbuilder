import React from 'react';
import classes from './Toolbar.css'
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToogle/DrawerToogle";

const toolbar = (props ) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={ props.drawerToggleClicked}/>
        {/*<div >*/}
        {/*    <Logo/>*/}
        {/*</div>*/}
        {/*<nav>*/}
        {/*    <NavigationItems/>*/}
        {/*</nav>*/}
       {/* <div>MENU</div>*/}
        <Logo/>
        <nav className={classes.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
)

export default toolbar;
