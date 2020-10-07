import React, {Component} from 'react';
import Auxi from "../../hoc/Auxi";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/UI/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import * as actionTypes from '../../store/actions/actionsTypes';
import {connect} from "react-redux";



class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 0,
        purchasable: false,
        purchasing: false,
        loading: false
    }
    // agar ye es function na hoke normal function hota or kisi event par trigger hua hota, to ye error deta

    purchasingHandler = ( ) => {
        this.setState(  { purchasing: true });
    }
    purchaseCancelHandler = () => {
       this.setState({purchasing:false})
    }
    handleOrderButton = () => {
        // Request is about to send
        // this.setState({loading: true});
        // // alert('Button dab gya');
        // //You need to add name+ '.json'
        // // Abb jo Ingrdients order krne h vo Checkout page par phunchayenge
        // const queryParams=[];
        // for( let i in this.state.ingredients) {
        //     queryParams.push(encodeURIComponent(i)+'='+encodeURIComponent(this.state.ingredients[i]))
        // }
        // queryParams.push('price='+ this.props.totalPrice);
        // //checkout?salad=1&bacon=0&cheese=2&meat=0
        // const queryString = queryParams.join('&');
        // this.props.history.push({
        //     pathname:'/checkout',
        //     search:'?'+queryString
        // });
        this.props.history.push({
            pathname:'/checkout'
        });
    }
    updatePurchaseState = (ingredientsObject ) => {
        //Covert this ingredientObjectIntoArray
        const transformedIngredientsArray = Object.keys( ingredientsObject);
        const finalArrayThatRequired = transformedIngredientsArray.map( igKey => { return ingredientsObject[igKey ]  })
        // It will give the arrays with values [2,1,5]
        const finalReducedArray = finalArrayThatRequired.reduce((sum, valueOfIgKey) =>{
            return sum+valueOfIgKey;
        },0);
        return finalReducedArray>0;
        // this.setState( {purchasable: finalReducedArray >0});
    }

    // addIngredientsHandler =  (type) => {
    //     const oldCount = this.state.ingredients[type];
    //     const newCount = oldCount + 1;
    //     const newTotalPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    //     const newState = { ...this.props.ings };
    //     newState[type] = newCount;
    //     this.setState({
    //           totalPrice: newTotalPrice,
    //          ingredients:newState
    //         }
    //     )
    //     this.updatePurchaseState(newState)
    // };
    // removeIngredientsHandler = ( type ) => {
    //     const oldCount = this.state.ingredients[type];
    //     if(oldCount<=0 ){
    //         return;
    //     }
    //     const newCount = oldCount - 1;
    //     const deductTotalPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
    //     const newState = { ...this.props.ings };
    //     newState[type] = newCount;
    //     this.setState({
    //             totalPrice: deductTotalPrice,
    //             ingredients:newState
    //         }
    //     )
    //     this.updatePurchaseState(newState)
    // };

    render() {
        const disabledInfo  = { ...this.props.ings };
        for( let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <=0
        }
        let orderSummary = <OrderSummary
            ingredients={ this.props.ings}
            handleSuccess={ this.handleOrderButton }
            handleCancel={this.purchaseCancelHandler}
            totalPrice={ this.props.totalPrice }
        />
        if (this.state.loading) {
            orderSummary=<Spinner/>
        }
        return (
            <Auxi>
                <Modal show = {this.state.purchasing } modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                    {/*Agar Ingredients change honge to Order Summary bhi reRender hoga*/}

                </Modal>
                <Burger ingredients={this.props.ings}/>
                <BuildControls ingredientAdded={ this.props.onIngredientAdded}
                               ingredientsRemoved = {this.props.onIngredientRemoved}
                               disabledInfo = { disabledInfo}
                               totalPrice = { this.props.totalPrice }
                               purchaseable = { this.updatePurchaseState(this.props.ings) }
                               purchasingHandler = { this.purchasingHandler }
                               // purchase = { this.updatePurchaseState }
                />
                               <div>Build Controls</div>
            </Auxi>
        );
    }
}
const mapsStateToProps = state => {
    // is a function that recieves the state automatically and
    // return javaScript object
    return{
            ings: state.ingredients,
             totalPrice: state.totalPrice
        };
}

const mapDispatchToProps = dispatch => {
    return{
        onIngredientAdded: (ingName) => dispatch({
            type: actionTypes.ADD_INGREDIENT,
            ingredientname: ingName
        }),
        onIngredientRemoved: (ingName) => dispatch({
            type: actionTypes.REMOVE_INGREDIENT,
            ingredientname: ingName
        }),
    }
}
export default connect(mapsStateToProps,mapDispatchToProps) (BurgerBuilder)