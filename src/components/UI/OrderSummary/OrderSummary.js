import Auxi from "../../../hoc/Auxi";
import Button from "../Button/Button";
import React, {Component} from 'react';

class OrderSummary extends Component  {
    componentWillUpdate() {
        console.log('jab bhi props se aaye state change hoti h tab tab ye method chlta h');
        // To Modal summary m Hum Modal khol nhi rhe but ye fir bhi chal rha  h, To avoid it use
    }

    render() {
        const orderDetails = Object.keys(this.props.ingredients).map( igkey => {
            return <li key = {igkey}>
                <span style={ { textTransform: 'capitalize'}}>{igkey}</span> : {this.props.ingredients[igkey] }
            </li>
        });
        return (
            <div>
                <Auxi>
                    <h3>Your order</h3>
                    <p>A delicious burger with the following ingredients:</p>
                    <ul>
                        {orderDetails}
                    </ul>
                    <strong>Total Price: { this.props.totalPrice.toFixed(2) }</strong>
                    <Button clicked = { this.props.handleCancel} btnType="Danger">CANCEL</Button>
                    <Button clicked = { this.props.handleSuccess } btnType="Success">ORDER</Button>
                </Auxi>
            </div>
        );
    }
};

export default OrderSummary;
