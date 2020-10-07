import React, {Component} from 'react';
import classes from './ContactData.css';
import Button from "../../components/UI/Button/Button";
import axios from '../../axios-orders';
import {connect} from 'react-redux';
import Spinner from "../../components/UI/Spinner/Spinner";
import Input from "../../components/UI/Input/Input";
class ContactData extends Component {
    state = {
        name: '',
        mail:'',
        address:{
            street: '',
            postalCode:''
        },
        loading: false
    }
    handleOrderNow = () => {
        console.log('Order Now clicked');
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ings,
            price: this.props.totalPrice,
            customer: {
                name: 'AShiiiiiii',
                address: 'addddress'
            }
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false} );
                this.props.history.push('/');}
            )
            .catch(err => this.setState(
                {loading: false}));
    }


    //This Component will render Contact for after Clicking order for taking customer information
    render() {
        let form = ( <form>
            <Input inputType="input" type="text" placeholder={'Your Name'}/>
            <Input inputType="input" type="text" placeholder={'Your Mail '}/>
            <input className={classes.Input} type="text" placeholder={'Street'}/>
            <input className={classes.Input} type="text" placeholder={'Postal code'}/>
            <Button btnType="Success" clicked={ this.handleOrderNow }>ORDER NOW!</Button>
        </form>);
        if(this.state.loading){
            form = <Spinner/>
        }
        return (
            <div className={classes.ContactData}>
                <h1>Enter your contact data</h1>
                {form}
            </div>
        );
    }
}

const mapStateToProps = state =>  {
    return{
        ings: state.ingredients,
        totalPrice: state.totalPrice
    }
}

export default connect(mapStateToProps)(ContactData);
