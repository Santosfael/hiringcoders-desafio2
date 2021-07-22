import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Login';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;