
import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
// import 'antd/dist/antd.css'
import { BrowserRouter } from "react-router-dom";
import store from "./app/store";
import { Provider } from "react-redux";

const container = document.getElementById('root');

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render( 
<BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider>
</BrowserRouter>);

// During an update, there's no need to pass the container again.
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
</BrowserRouter>);