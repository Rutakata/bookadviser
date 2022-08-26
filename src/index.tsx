import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from "./Store/store"
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <HashRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>
);
