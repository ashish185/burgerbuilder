import React from 'react';
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.css"

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1><u>Checkout</u></h1>
            <h2>We hope it tastes well!</h2>
            <div style={{width:'100%', margin:'auto', marginBottom:'0'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button btnType="Danger" clicked={props.checkoutCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.checkoutContinue}>CONTINUE</Button>
        </div>
    );
};

export default checkoutSummary;
