import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Contained from './components/Contained';
import PushPin from './components/PushPin';
import PushPinHT from './components/PushPinHT';


ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<PushPinHT />, document.getElementById('root2'));
ReactDOM.render( <Contained/> , document.getElementById('contained'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
