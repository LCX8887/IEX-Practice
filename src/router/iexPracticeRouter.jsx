import {Route,Router,hashHistory} from 'react-router';
import App from '../App';
import { MarketView } from '../views/index';

const iexPracticeRouter = () => {
    return(
        <Router>
            <Route path="/" component={App}>
                <Route path="stocks" component={MarketView} />
                {/* <Route path="stocks/:symbol" component={SymbolDetails} /> */}
            </Route>
        </Router>
    )
}