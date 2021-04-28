import React from 'react';
import ReactDOM from 'react-dom';
import {About} from './components/about/About';
import {Portfolio} from './components/portfolio/Portfolio';
import {Contact} from './components/contact/Contact';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.scss";
import Footer from './components/footer/Footer';
import "tailwindcss/tailwind.css";

const routing = (
    <main>
        <About />
        <Portfolio />
        <Contact />
        <Footer />
    </main>
)

ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
