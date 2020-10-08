import React, { Component } from 'react';
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Layout from "./hoc/Layout/Layout";
import Checkout from "./containers/Checkout/Checkout";
import { Route, Switch} from 'react-router-dom';
import Orders from "./containers/Orders/Orders";

class App extends Component {
  render() {
    return (
      <div >
        <Layout>
          <Switch>
              <Route path="/ashBurgerBuilder" exact component={BurgerBuilder}/>
              <Route path="/checkout" component={Checkout}/>
              <Route path="/order" component={Orders}/>
          </Switch>
        </Layout>
      </div>
    );
  }
}
export default App;
