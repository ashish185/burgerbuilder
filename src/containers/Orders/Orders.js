import React, {Component} from 'react';
import Order from "../../components/Order/Order";
import axios from "../../axios-orders";

class Orders extends Component {
    state = {
        loading : true
    }

    componentDidMount() {
        const fetchedOrders = [];
        axios.get('/orders.json')
            .then(response => {
                this.setState({loading: false});
                for( let key in response.data) {
                    fetchedOrders.push({...response.data[key],
                        id:key
                    })
                }
                console.log(fetchedOrders);
            }).catch( err => {
            this.setState({loading:false ,ingredients:fetchedOrders})
        })

    }

    render() {
        return (
            <div>
                <Order ingredients={ this.state.ingredients}/>
            </div>
        );
    }
}

export default Orders;