import React from 'react';
import classes from './Burger.css'
import BurgerIngredients from "./BurgerIndegriedents/BurgerIngredients";
import {withRouter} from "react-router-dom";
const Burger = (props) => {
    //keys return array of only key
    // this transformedIngredients gives array
    let transformedIngredients = Object.keys(props.ingredients) //It gives arrays of Keys of an Object
        .map( igKey =>  {
            return [...Array(props.ingredients[igKey])].map((_,i) => {
                return <BurgerIngredients key = {igKey+i} type={igKey}/>
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        },[]);
    if(transformedIngredients.length === 0 )
    {
       transformedIngredients = <p>Please add some ingredients</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top"/>
            { transformedIngredients }
            <BurgerIngredients type="bread-bottom"/>
        </div>
    );
};
export default withRouter(Burger);