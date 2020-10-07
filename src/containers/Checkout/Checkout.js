import React, {Component} from 'react';
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import {Route} from "react-router-dom";
import ContactData from "../ContactData/ContactData";
import {connect } from 'react-redux'

class Checkout extends Component {

    checkoutCancelHandler= () =>{
        this.props.history.goBack();
    }
    checkoutContinueHandler=()=>{
        this.props.history.replace('/checkout/contact-data');
    };

    componentDidMount() {
        // Yes esliye kiya checkout page par Upar se url(checkout?salad=1&bacon=0&cheese=2&meat=0) change krne par Burger m bhi change dikhe
        // const query = new URLSearchParams(this.props.location.search);
        //
        // const ingredientsFromUrl = {};
        // var price;
        // for (let param of query.entries()) {
        //     //This query will give array from URL like  [ 'totalPrice', '25' ]
        //     if (param[0] === 'price') {
        //         price = param[1];
        //     } else {
        //         ingredientsFromUrl[param[0]] = +param[1];
        //     }
        // }
        //     this.setState({ingredients: ingredientsFromUrl, totalPrice: price})
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.props.ings}
                    checkoutCancelled={this.checkoutCancelHandler}
                    checkoutContinue={this.checkoutContinueHandler}
                />
                <Route path={this.props.match.path+'/contact-data'}
                       // render={(props) =>
                       //     (<ContactData ingredients={this.props.ingredients} price={ this.state.totalPrice} {...props}/>)}
                       component= {ContactData}
                />
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        ings:  state.ingredients
    }
}
// mapStateToProps is first argument
export default connect(mapStateToProps)(Checkout);