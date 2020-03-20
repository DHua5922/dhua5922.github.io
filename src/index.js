import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home/Home';
import {Portfolio} from './components/portfolio/Portfolio';
import {Contact} from './components/contact/Contact';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Switch from 'react-router-transition-switch';

const routing = (
    <Router>
        <Switch>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={Home} />
                <Route path="/portfolio" component={Portfolio}/>
                <Route path="/contact" component={Contact}/>
                
            </div>
        </Switch>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
