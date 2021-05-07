import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import "./index.scss";
import Navbar from './components/Navbar';
import About from './sections/About';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';
import { ScrollingProvider } from 'react-scroll-section';

function App() {
    return (
        <ScrollingProvider>
            <Navbar />
            <main>
                <About id="about" />
                <Portfolio id="portfolio" />
                <Contact id="contact" />
            </main>
        </ScrollingProvider>
    );
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
