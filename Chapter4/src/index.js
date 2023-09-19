import React,{createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ColorProvider} from './ColorProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));

// export const ColorContext = new createContext();
render(
<ColorProvider>
    <App />
</ColorProvider>, document.getElementById("root")
);

