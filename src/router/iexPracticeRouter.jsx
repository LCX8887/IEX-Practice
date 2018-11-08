import {Route,Router,hashHistory} from 'react-router';
import App from '../App';

const iexPracticeRouter = () => {
    return(
        <Router history={hashHistory}>
            <Route path="/" component={App}>

            </Route>
        </Router>
    )
}