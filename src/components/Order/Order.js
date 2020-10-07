import React, {Component} from 'react';
class Order extends Component {

    render() {
        const ingredientsArr=[];
        for( let ingredientsName in this.props.ingredients) {
            ingredientsArr.push( {
                name: ingredientsName,
                amount: this.props.ingredients[ingredientsName]
            })
        }
        const ingredientOutput= ingredientsArr.map( ig=> {
            return <span
                style={
                    { textTransform: 'capitalize', display:'inline-block', margin:'0 8px'}
                }
                key={ig.name}>{ig.name} ({ig.amount}</span>
        })
        return (
            <div>

                <p>Ingredients: {ingredientOutput}</p>
                <p>Price: <strong>USD 5.45</strong></p>
            </div>
        );
    }
}

export default Order;