import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Clients from './Clients';

import Home from './Home';
import Login from './Login';
import Product from './Product';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/home" exact component={Home} />
                <Route path="/clients" exact component={Clients} />
                <Route path="/product" exact component={Product} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;