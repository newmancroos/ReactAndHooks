import React,{createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import colors from './data/color-data';

const root = ReactDOM.createRoot(document.getElementById('root'));

export const ColorContext = new createContext();
root.render(

<ColorContext.Provider value={{colors}}>
    <App />
</ColorContext.Provider>
);

