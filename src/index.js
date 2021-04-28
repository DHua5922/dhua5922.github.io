import React from 'react';
import ReactDOM from 'react-dom';
import {Contact} from './components/contact/Contact';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.scss";
import Footer from './components/Footer';
import "tailwindcss/tailwind.css";
import Navbar from './components/Navbar';
import About from './sections/About';
import Portfolio from './sections/Portfolio';

const routing = (
    <main>
        <Navbar />
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
