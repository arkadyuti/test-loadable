import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import CompTwo from "./Loadable2";
// import CompOne from "./CompOne";
import CompOne from "./Loadable1";

const App = () => (
    <Router>
        <div>
            <Link to="/one">comp1</Link>
        </div>
        <div>
            <Link to="/two">comp2</Link>
        </div>
        <Route path="*" component={null}/>
        <Route exact path="/one" component={CompOne}/>
        <Route exact path="/two" component={CompTwo}/>
    </Router>
)


ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
