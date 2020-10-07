import React, { Component } from 'react';
import classes from './Layout.css';
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Auxi from "../Auxi";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
    state = {
         showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    }

    sideDrawerToggleHandler = () => {
        // Dut to asyncrounus behaviour of setState it preffable to use function
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }

    render () {
        return (
            <Auxi>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                {/*<SideDrawer/>*/}
                {/*<toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />*/}
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <main className={classes.content}>
                    {this.props.children}
                </main>
            </Auxi>
        )
    }
}
export default Layout;